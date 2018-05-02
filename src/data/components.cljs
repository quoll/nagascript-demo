(ns data.components
  (:refer-clojure :exclude [char])
  (:require [clojure.string :as str]
            [naga.lang.pabu :as pabu :refer [read-str rule->str]]
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
  (let [rtext (.getElementById js/document "rules")]
    (set! (.-value rtext) (or file-data ""))))

(defn set-data-state
  [fname app-data file-data]
  (let [jsin (.getElementById js/document "json-in")
        jstext (data/json-generate-string (data/parse-json-string (or file-data "")) 2)]
    (set! (.-innerText jsin) jstext))
  (let [db0 (get-in-db @app-data)
        js-data (and file-data (data/string->triples db0 file-data))
        db1 (if js-data (store/assert-data db0 js-data) db0)]
    (swap! app-data assoc :in db1)))

(defn run-process
  [rules axioms in]
  (let [config {:type :memory :store in}
        program (r/create-program rules axioms)]
  (e/run config program)))

(defn process
  [app-state]
  (let [rtext (.getElementById js/document "rules")
        jsin-text (.getElementById js/document "json-in")
        jsout-text (.getElementById js/document "json-out")
        jsdiff-text (.getElementById js/document "json-diff")
        jsin (.-innerText jsin-text)]
    (when-let [text (.-value rtext)]
      (let [{:keys [rules axioms]} (read-str text)
            db0 (registry/get-storage-handle {:type :memory})
            triples (if (seq jsin) (data/string->triples db0 jsin) [])
            db1 (store/assert-data db0 triples)
            [db-out stats] (run-process rules axioms db1)]
        (swap! app-state assoc :out db-out)
        (set! (.-innerText jsout-text) (data/store->str db-out 2))
        (set! (.-innerText jsdiff-text) (data/delta->str db-out 2))))))

(defn show-graph-click
  []
  (let [cb (.getElementById js/document "show-graph")
        gr (.getElementById js/document "graphs")
        show? (.-checked cb)]
    (if show?
      (.removeAttribute gr "hidden")
      (.setAttribute gr "hidden" (not show?)))))

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
   (sab/check-box
    {:onClick (fn [] (show-graph-click))}
    "show-graph")
   (sab/label "show-graph" "Show Graphs")
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
             df (.getElementById js/document "dfile")
             in (.getElementById js/document "json-in")
             out (.getElementById js/document "json-out")
             diff (.getElementById js/document "json-diff")]
         (set! (.-value ip) nil)
         (set! (.-value df) nil)
         (set! (.-innerText in) "")
         (set! (.-innerText out) "")
         (set! (.-innerText diff) "")
         (reset! app-data nil)))}
    "Clear")
   ])

(defn process-button
  [app-state]
  [:div
   (sab/submit-button
    {:class "process-button"
     :onClick
     (fn [] (process app-state))}
    "Process")])

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
               [:div
                [:hr]
                [:h2 "Rules:"]
                (sab/text-area {:rows 10 :cols 80 :id "rules"} "")]
               [:div {:class "in-out"}
                [:div [:p "In"]]
                [:div [:p "Out"]]
                [:div [:p "Changes"]]]
               [:div {:class "in-out"}
                [:div [:pre {:id "json-in"}]]
                [:div [:pre {:id "json-out"}]]
                [:div [:pre {:id "json-diff"}]]]
               [:div
                [:div {:id "graphs" :hidden true}
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
                   [:hr])]]])))

