(ns data.components
  (:refer-clojure :exclude [char])
  (:require [naga.lang.pabu :as pabu :refer [read-str]]
            [naga.store :as store]
            [naga.store-registry :as registry]
            [naga.rules :as r]
            [naga.engine :as e]
            [asami.core]
            [sablono.core :as sab]))

(defn slurp-to
  [file callback-fn]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader)
          (fn [] (callback-fn (.-result reader))))
    (.readAsText reader file)))

(defn set-data-state
  [app-data file-data]
  (swap! app-data assoc :data file-data)
  (swap! app-data assoc :in (:axioms (read-str file-data))))

(defn run-process
  [app-state rules axioms]
  (let [config {:type :memory}
        program (r/create-program rules axioms)]
  (e/run config program)))

(defn process
  [app-state]
  (let [{:keys [rules axioms] :as program} (read-str (:data @app-state))]
    ; (swap! app-state assoc :in axioms)
    (let [[store stats] (run-process app-state rules axioms)
          data (store/resolve-pattern store '[?e ?a ?v])]
      (swap! app-state assoc :out data))))

(defn load-file-buttons
  "Returns a <div> element with buttons for loading a file.
   File loads go to set-data-state"
  [app-data]
  [:div
   "Input: "
   (sab/file-upload {:id "file" :class "file-button"} "datafile")
   (sab/submit-button
    {:class "load-button"
     :onClick
     (fn []
       (let [ip (.getElementById js/document "file")
             file (aget (.-files ip) 0)]
         (slurp-to file (partial set-data-state app-data))))}
    "Load")])

(defn process-button
  [app-state]
  [:div
   (sab/submit-button
    {:class "process-button"
     :onClick
     (fn [] (when (:data @app-state) (process app-state)))}
    "Process")])

(defn axiom-text
  [data]
  [:table
   [:thead
     [:tr
      [:th "Entity"] [:th "Attribute"] [:th "Value"]]]
   [:tbody
     (vec (map (fn [[e a v]] [:tr [:td (str e)] [:td (str a)] [:td (str v)]]) data))]])

(defn disp
  [e]
  (js/alert (str e))
  e)

(defn display-data [app-data]
  (let [{:keys [size data in out]} @app-data]
    (sab/html [:div
               [:h1 "Rule"]
               (load-file-buttons app-data)
               [:br]
               (process-button app-data)
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

