// Compiled by ClojureScript 1.10.126 {}
goog.provide('data.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('naga.lang.pabu');
goog.require('naga.store');
goog.require('naga.store_registry');
goog.require('naga.data');
goog.require('naga.rules');
goog.require('naga.engine');
goog.require('asami.core');
goog.require('sablono.core');
data.components.slurp_to = (function data$components$slurp_to(file,callback_fn){
if(cljs.core.truth_(file)){
var reader = (new FileReader());
reader.onload = ((function (reader){
return (function (){
return callback_fn.call(null,reader.result);
});})(reader))
;

return reader.readAsText(file);
} else {
return null;
}
});
data.components.get_in_db = (function data$components$get_in_db(p__51730){
var map__51731 = p__51730;
var map__51731__$1 = ((((!((map__51731 == null)))?(((((map__51731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51731):map__51731);
var db = cljs.core.get.call(null,map__51731__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var or__3924__auto__ = db;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return naga.store_registry.get_storage_handle.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"memory","memory",-1449401430)], null));
}
});
data.components.set_rule_state = (function data$components$set_rule_state(app_data,file_data){
var rtext = document.getElementById("rules");
return rtext.value = (function (){var or__3924__auto__ = file_data;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return "";
}
})();
});
data.components.set_data_state = (function data$components$set_data_state(fname,app_data,file_data){
var jsin_51733 = document.getElementById("json-in");
var jstext_51734 = naga.data.json_generate_string.call(null,naga.data.parse_json_string.call(null,(function (){var or__3924__auto__ = file_data;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return "";
}
})()),(2));
jsin_51733.innerText = jstext_51734;

var db0 = data.components.get_in_db.call(null,cljs.core.deref.call(null,app_data));
var js_data = (function (){var and__3913__auto__ = file_data;
if(cljs.core.truth_(and__3913__auto__)){
return naga.data.string__GT_triples.call(null,db0,file_data);
} else {
return and__3913__auto__;
}
})();
var db1 = (cljs.core.truth_(js_data)?naga.store.assert_data.call(null,db0,js_data):db0);
return cljs.core.swap_BANG_.call(null,app_data,cljs.core.assoc,new cljs.core.Keyword(null,"in","in",-1531184865),db1);
});
data.components.run_process = (function data$components$run_process(rules,axioms,in$){
var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"store","store",1512230022),in$], null);
var program = naga.rules.create_program.call(null,rules,axioms);
return naga.engine.run.call(null,config,program);
});
data.components.process = (function data$components$process(app_state){
var rtext = document.getElementById("rules");
var jsin_text = document.getElementById("json-in");
var jsout_text = document.getElementById("json-out");
var jsdiff_text = document.getElementById("json-diff");
var jsin = jsin_text.innerText;
var temp__5457__auto__ = rtext.value;
if(cljs.core.truth_(temp__5457__auto__)){
var text = temp__5457__auto__;
var map__51735 = naga.lang.pabu.read_str.call(null,text);
var map__51735__$1 = ((((!((map__51735 == null)))?(((((map__51735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51735):map__51735);
var rules = cljs.core.get.call(null,map__51735__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var axioms = cljs.core.get.call(null,map__51735__$1,new cljs.core.Keyword(null,"axioms","axioms",-1585728273));
var db0 = naga.store_registry.get_storage_handle.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"memory","memory",-1449401430)], null));
var triples = ((cljs.core.seq.call(null,jsin))?naga.data.string__GT_triples.call(null,db0,jsin):cljs.core.PersistentVector.EMPTY);
var db1 = naga.store.assert_data.call(null,db0,triples);
var vec__51736 = data.components.run_process.call(null,rules,axioms,db1);
var db_out = cljs.core.nth.call(null,vec__51736,(0),null);
var stats = cljs.core.nth.call(null,vec__51736,(1),null);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"out","out",-910545517),db_out);

jsout_text.innerText = naga.data.store__GT_str.call(null,db_out,(2));

return jsdiff_text.innerText = naga.data.delta__GT_str.call(null,db_out,(2));
} else {
return null;
}
});
data.components.show_graph_click = (function data$components$show_graph_click(){
var cb = document.getElementById("show-graph");
var gr = document.getElementById("graphs");
var show_QMARK_ = cb.checked;
if(cljs.core.truth_(show_QMARK_)){
return gr.removeAttribute("hidden");
} else {
return gr.setAttribute("hidden",cljs.core.not.call(null,show_QMARK_));
}
});
/**
 * Returns a <div> element with buttons for loading a file.
 * File loads go to set-data-state
 */
data.components.load_file_buttons = (function data$components$load_file_buttons(app_data){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rule File: ",sablono.core.file_upload.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file"], null),"rulefile"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Data File: ",sablono.core.file_upload.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dfile"], null),"datafile"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),sablono.core.check_box.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return data.components.show_graph_click.call(null);
})], null),"show-graph"),sablono.core.label.call(null,"show-graph","Show Graphs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"load-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var ip = document.getElementById("file");
var df = document.getElementById("dfile");
var rfile = (ip.files[(0)]);
var dfile = (df.files[(0)]);
data.components.slurp_to.call(null,rfile,cljs.core.partial.call(null,data.components.set_rule_state,app_data));

if(cljs.core.truth_(dfile)){
return data.components.slurp_to.call(null,dfile,cljs.core.partial.call(null,data.components.set_data_state,dfile.name,app_data));
} else {
return null;
}
})], null),"Load"),sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"load-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var ip = document.getElementById("file");
var df = document.getElementById("dfile");
var in$ = document.getElementById("json-in");
var out = document.getElementById("json-out");
var diff = document.getElementById("json-diff");
ip.value = null;

df.value = null;

in$.innerText = "";

out.innerText = "";

diff.innerText = "";

return cljs.core.reset_BANG_.call(null,app_data,null);
})], null),"Clear")], null);
});
data.components.process_button = (function data$components$process_button(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),sablono.core.submit_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"process-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return data.components.process.call(null,app_state);
})], null),"Process")], null);
});
data.components.axiom_text = (function data$components$axiom_text(db){
var data__$1 = naga.store.resolve_pattern.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Entity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attribute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.vec.call(null,cljs.core.map.call(null,((function (data__$1){
return (function (p__51740){
var vec__51741 = p__51740;
var e = cljs.core.nth.call(null,vec__51741,(0),null);
var a = cljs.core.nth.call(null,vec__51741,(1),null);
var v = cljs.core.nth.call(null,vec__51741,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null)], null);
});})(data__$1))
,data__$1))], null)], null);
});
data.components.disp = (function data$components$disp(e){
alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

return e;
});
data.components.display_data = (function data$components$display_data(app_data){
var map__51744 = cljs.core.deref.call(null,app_data);
var map__51744__$1 = ((((!((map__51744 == null)))?(((((map__51744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51744):map__51744);
var size = cljs.core.get.call(null,map__51744__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var in$ = cljs.core.get.call(null,map__51744__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var out = cljs.core.get.call(null,map__51744__$1,new cljs.core.Keyword(null,"out","out",-910545517));
var rules = cljs.core.get.call(null,map__51744__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
return React.createElement("div",null,React.createElement("h1",null,"Rule Demo"),sablono.interpreter.interpret.call(null,data.components.load_file_buttons.call(null,app_data)),React.createElement("br",null),sablono.interpreter.interpret.call(null,data.components.process_button.call(null,app_data)),React.createElement("div",null,React.createElement("hr",null),React.createElement("h2",null,"Rules:"),sablono.interpreter.interpret.call(null,sablono.core.text_area.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"id","id",-1388402092),"rules"], null),""))),React.createElement("div",({"className": "in-out"}),React.createElement("div",null,React.createElement("p",null,"In")),React.createElement("div",null,React.createElement("p",null,"Out")),React.createElement("div",null,React.createElement("p",null,"Changes"))),React.createElement("div",({"className": "in-out"}),React.createElement("div",null,React.createElement("pre",({"id": "json-in"}))),React.createElement("div",null,React.createElement("pre",({"id": "json-out"}))),React.createElement("div",null,React.createElement("pre",({"id": "json-diff"})))),React.createElement("div",null,React.createElement("div",({"id": "graphs", "hidden": true}),(cljs.core.truth_(in$)?React.createElement("div",null,React.createElement("hr",null),React.createElement("h2",null,"Input: "),sablono.interpreter.interpret.call(null,data.components.axiom_text.call(null,in$)),(cljs.core.truth_(out)?React.createElement("div",null,React.createElement("hr",null),React.createElement("h2",null,"Output: "),sablono.interpreter.interpret.call(null,data.components.axiom_text.call(null,out))):React.createElement("hr",null))):React.createElement("hr",null)))));
});

//# sourceMappingURL=components.js.map?rel=1525297081086
