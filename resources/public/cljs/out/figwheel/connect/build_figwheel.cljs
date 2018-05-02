(ns figwheel.connect.build-figwheel (:require [data.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "figwheel", :websocket-url "ws://localhost:3449/figwheel-ws"})

