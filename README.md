# nagascript-demo
Demo of Naga in Clojurescript

This project runs in Figwheel, and demonstrates using Naga to parse and process rules in ClojureScript.
`lein figwheel`

Then point your browser at [http://localhost:3449/](http://localhost:3449/)

Select a Rule File of [data/family.lg](data/family.lg), and a Data File of [data/in.json](data/in.json). Press "Load" to load them.

To clear out both the data and rules, press "Clear".

Press "Process" to run the rules against the data. The results should show up as JSON, and also a delta of the data.

Check "Show Graphs" to see the triples that represent the JSON data.
