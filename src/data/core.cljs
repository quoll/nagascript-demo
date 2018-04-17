(ns data.core
  (:require [react-dom :as rd]
            [sablono.core :as sab]
            [data.components :refer [display-data]]))

(defonce app-state (atom {:data nil}))

(defn render! []
  (.render js/ReactDOM
           (display-data app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
