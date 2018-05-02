(ns naga.lang.basic
  (:refer-clojure :exclude [char])
  (:require [clojure.string :as str]
            #?(:clj [the.parsatron :refer [char token choice attempt either
                                           string many many1 >> let->>
                                           digit letter always defparser
                                           between fail]]
               :cljs [the.parsatron :refer [char token choice attempt either
                                            string many many1
                                            digit letter always
                                            between fail]
                                    :refer-macros [>> let->> defparser]])
            [naga.schema.store-structs :as ss]))

#?(:cljs (defn is-letter? [c] (.match c #"[a-zA-Z]")))

#?(:clj (defn to-lower-case [^Character c] (Character/toLowerCase c))
   :cljs (defn to-lower-case [c] (.toLowerCase c)))

#?(:clj (defn is-upper-case? [^Character c] (Character/isUpperCase c))
   :cljs (defn is-upper-case? [c] (and (is-letter? c) (= c (.toUpperCase c)))))

#?(:clj (defn is-digit? [^Character c] (Character/isDigit c))
   :cljs (defn is-digit? [c] (.match c #"[0-9]")))

(defn atoi [s]
  #?(:clj  (Long/parseLong s)
     :cljs (js/parseInt s)))

(defn atof [s]
  #?(:clj  (Double/parseDouble s)
     :cljs (js/parseFloat s)))

(defn choice*
  "choice with backtracking."
  [& args]
  (apply choice (map attempt args)))

(defn either*
  "either with backtracking."
  [p q]
  (either (attempt p) (attempt q)))

(def non-star (token (complement #{\*})))
(def non-slash (token (complement #{\/})))

;; parser that looks for comments of the form:  /* the comment */
(defparser cmnt []
  (let->> [_ (>> (string "/*") (many non-star) (many1 (char \*)))
           _ (many (>> non-slash (many non-star) (many1 (char \*))))
           _ (char \/)]
    (always :cmnt)))

;; parsers for various single characters, etc
(def whitespace-char (token #{\space \newline \tab}))
(def opt-whitespace (many (either whitespace-char (attempt (cmnt)))))
(def separator (>> opt-whitespace (char \,) opt-whitespace))
(def open-paren (>> (char \() opt-whitespace))
(def close-paren (>> opt-whitespace (char \))))

(def equals (char \=))
(def not-equals (string "!="))
(def lt (char \<))
(def gt (char \>))
(def lte (string "<="))
(def gte (string ">="))

(def plus (char \+))
(def minus (char \-))
(def divd (char \/))
(def tms (char \*))

(def non-dquote (token (complement #{\"})))
(def non-squote (token (complement #{\'})))

(defn upper-case-letter?
  "Prolog considers underscores to be equivalent to an uppercase letter"
  [c]
  (or (is-upper-case? c) (= \_ c)))

;; parser for upper-case letters
(defn upper-case-letter
  []
  (token upper-case-letter?))

;; This does not include all legal characters.
;; Consider some others in future, especially >
(def ns-word (many1 (choice (letter) (digit) (char \_) (char \-) (char \:))))

(def word (many1 (letter)))

(def digits (many1 (digit)))

(defparser signed-digits []
  (let->> [s (token #{\+ \-})
           ds digits]
    (always (cons s ds))))

(defparser integer []
  (let->> [i (either digits (signed-digits))]
    (always (atoi (str/join i)))))

(defparser floating-point []
  (let->> [i (either digits (signed-digits))
           f (>> (char \.) (many1 (digit)))]
    (always (atof (apply str (str/join i) \. f)))))

(def number (either* (floating-point) (integer)))

;; parses strings of the form: 'it''s a string!'
(defparser pstring1 []
  (let->> [s (many1 (between (char \') (char \') (many non-squote)))]
    (always (str/join (flatten (interpose \' s))))))

;; parses strings of the form: "She said, ""Hello,"" to me."
(defparser pstring2 []
  (let->> [s (many1 (between (char \") (char \") (many non-dquote)))]
    (always (str/join (flatten (interpose \" s))))))

(def pstring (either (pstring1) (pstring2)))

;; variables start with a capital. Internally they start with ?
(defparser variable []
  (let->> [f (upper-case-letter)
           r (many (choice (letter) (digit) (char \_) (char \-)))]
    (always (symbol (apply str "?" (to-lower-case f) r)))))

(defn build-keyword
  "Creates a keyword from a parsed word token"
  [wrd]
  (let [[kns kname :as w] (str/split wrd #":")
        parts (count w)]
    ;; use cond without a default to return nil
    (cond (is-digit? (first wrd)) nil
          (= 2 parts) (cond (empty? kns) (keyword kname)
                            (seq kname) (keyword kns kname))
          (= 1 parts) (if-not (str/ends-with? wrd ":")
                        (keyword kns)))))

;; atomic values, like a predicate, are represented as a keyword
(defparser kw []
  (let->> [r ns-word]
    (let [wrd (str/join r)]
      (if-let [k (build-keyword wrd)]
        (always k)
        (throw (fail (str "Invalid identifier: " wrd)))))))

;; an atom is a atomic value, a number or a string
(defparser atm []
  (choice (kw) pstring number))

;; elements in a statement are atoms or a variable
(defparser elt []
  (choice (variable) (atm)))

(defn get-vars
  "Returns all vars from an annotated list"
  [l]
  (-> #{}
      (into (keep (comp :vars meta) l))
      (into (ss/vars l))))

(defparser arg-list []
  (let->> [f (elt)
           r (many (>> separator (elt)))]
    (let [args (cons f r)
          vars (get-vars args)]
      (always (with-meta args {:vars vars})))))
