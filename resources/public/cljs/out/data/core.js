// Compiled by ClojureScript 1.10.126 {}
goog.provide('data.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('data.components');
data.core.global$module$react_dom = goog.global.ReactDOM;
if(typeof data.core.app_state !== 'undefined'){
} else {
data.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}
data.core.render_BANG_ = (function data$core$render_BANG_(){
return ReactDOM.render(data.components.display_data.call(null,data.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,data.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return data.core.render_BANG_.call(null);
}));
data.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1525297081107
