(defproject data "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.126"]
                 [org.clojure/core.async "0.4.474"]
                 [prismatic/schema "1.1.7"]
                 [cljsjs/react "16.2.0-3"]
                 [cljsjs/react-dom "16.2.0-3"]
                 [sablono "0.8.3"]
                 [org.clojars.quoll/naga "0.2.3-SNAPSHOT"]
                 [org.clojars.quoll/naga-store "0.1.0"]
                 [org.clojars.quoll/asami "0.2.1-SNAPSHOT"]
                 ]
  :plugins [[lein-cljsbuild "1.1.7"] [lein-figwheel "0.5.14"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {
              :builds [{:id "figwheel"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main "data.core"
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}
                        }
                       {:id "dev"
                        :source-paths ["src"]
                        :compiler {:main "data.core"
                                   :optimizations :whitespace
                                   :language-in :ecmascript5-strict
                                   :language-out :ecmascript5-strict
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/dev.js"
                                   :output-dir "out"}
                        }]
              }
  :figwheel {
             ;; :server-port 3450
             :css-dirs ["resources/public/css"]})
