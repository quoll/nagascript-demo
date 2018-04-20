(ns data.components
  (:refer-clojure :exclude [char])
  (:require [naga.lang.pabu :as pabu :refer [read-str rule->str]]
            [naga.store :as store]
            [naga.store-registry :as registry]
            [naga.data :as data]
            [naga.rules :as r]
            [naga.engine :as e]
            [asami.core]
            [sablono.core :as sab]))

(defn slurp-to
  [file callback-fn]
  (when file
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [] (callback-fn (.-result reader))))
      (.readAsText reader file))))

(defn get-in-db
  [{db :in}]
  (or db (registry/get-storage-handle {:type :memory})))

(defn set-rule-state
  [app-data file-data]
  (let [db0 (get-in-db @app-data)
        {:keys [rules axioms]} (read-str file-data)
        db1 (store/assert-data db0 axioms)]
    (swap! app-data assoc :in db1 :rules rules)))

(defn set-data-state
  [fname app-data file-data]
  (let [db0 (get-in-db @app-data)
        js-data (and file-data (data/string->triples db0 file-data))
        db1 (if js-data (store/assert-data db0 js-data) db0)]
    (swap! app-data assoc :in db1)))

(defn run-process
  [rules in]
  (let [config {:type :memory :store in}
        program (r/create-program rules [])]
  (e/run config program)))

(defn process
  [app-state]
  (let [{:keys [rules in]} @app-state]
    (let [[store stats] (run-process rules in)]
      (swap! app-state assoc :out store))))

(defn load-file-buttons
  "Returns a <div> element with buttons for loading a file.
   File loads go to set-data-state"
  [app-data]
  [:div
   "Rule File: "
   (sab/file-upload {:id "file"} "rulefile")
   [:br]
   "Data File: "
   (sab/file-upload {:id "dfile"} "datafile")
   [:br]
   (sab/submit-button
    {:class "load-button"
     :onClick
     (fn []
       (let [ip (.getElementById js/document "file")
             df (.getElementById js/document "dfile")
             rfile (aget (.-files ip) 0)
             dfile (aget (.-files df) 0)]
         (slurp-to rfile (partial set-rule-state app-data))
         (when dfile (slurp-to dfile (partial set-data-state (.-name dfile) app-data)))))}
    "Load")
   (sab/submit-button
    {:class "load-button"
     :onClick
     (fn []
       (let [ip (.getElementById js/document "file")
             df (.getElementById js/document "dfile")]
         (set! (.-value ip) nil)
         (set! (.-value df) nil)
         (reset! app-data nil)))}
    "Clear")
   ])

(defn process-button
  [app-state]
  [:div
   (sab/submit-button
    {:class "process-button"
     :onClick
     (fn [] (when (:rules @app-state) (process app-state)))}
    "Process")])

(defn rule-text
  [rules]
  [:table
   [:tbody
    (vec (map (fn [rule] [:tr [:td (rule->str rule)]]) rules))]])

(defn axiom-text
  [db]
  (let [data (store/resolve-pattern db '[?e ?a ?v])]
    [:table
     [:thead
      [:tr
       [:th "Entity"] [:th "Attribute"] [:th "Value"]]]
     [:tbody
      (vec (map (fn [[e a v]] [:tr [:td (str e)] [:td (str a)] [:td (str v)]]) data))]]))

(defn disp
  [e]
  (js/alert (str e))
  e)

(defn display-data [app-data]
  (let [{:keys [size in out rules]} @app-data]
    (sab/html [:div
               [:h1 "Rule Demo"]
               (load-file-buttons app-data)
               [:br]
               (process-button app-data)
               (if rules
                 [:div
                  [:hr]
                  [:h2 "Rules:"]
                  (rule-text rules)]
                 [:div])
               (if in
                 [:div
                  [:hr]
                  [:h2 "Input: "]
                  (axiom-text in)
                  (if out
                    [:div
                     [:hr]
                     [:h2 "Output: "]
                     (axiom-text out)]
                    [:hr])]
                 [:hr])])))

