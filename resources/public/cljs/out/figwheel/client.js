// Compiled by ClojureScript 1.10.126 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e47247){if((e47247 instanceof Error)){
var e = e47247;
return "Error: Unable to stringify";
} else {
throw e47247;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__47250 = arguments.length;
switch (G__47250) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__47248_SHARP_){
if(typeof p1__47248_SHARP_ === 'string'){
return p1__47248_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__47248_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___47253 = arguments.length;
var i__4500__auto___47254 = (0);
while(true){
if((i__4500__auto___47254 < len__4499__auto___47253)){
args__4502__auto__.push((arguments[i__4500__auto___47254]));

var G__47255 = (i__4500__auto___47254 + (1));
i__4500__auto___47254 = G__47255;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47252){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47252));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___47257 = arguments.length;
var i__4500__auto___47258 = (0);
while(true){
if((i__4500__auto___47258 < len__4499__auto___47257)){
args__4502__auto__.push((arguments[i__4500__auto___47258]));

var G__47259 = (i__4500__auto___47258 + (1));
i__4500__auto___47258 = G__47259;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47256){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47256));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47260){
var map__47261 = p__47260;
var map__47261__$1 = ((((!((map__47261 == null)))?(((((map__47261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47261):map__47261);
var message = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3924__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3913__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3913__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3913__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38835__auto___47340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___47340,ch){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___47340,ch){
return (function (state_47312){
var state_val_47313 = (state_47312[(1)]);
if((state_val_47313 === (7))){
var inst_47308 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47314_47341 = state_47312__$1;
(statearr_47314_47341[(2)] = inst_47308);

(statearr_47314_47341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (1))){
var state_47312__$1 = state_47312;
var statearr_47315_47342 = state_47312__$1;
(statearr_47315_47342[(2)] = null);

(statearr_47315_47342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (4))){
var inst_47265 = (state_47312[(7)]);
var inst_47265__$1 = (state_47312[(2)]);
var state_47312__$1 = (function (){var statearr_47316 = state_47312;
(statearr_47316[(7)] = inst_47265__$1);

return statearr_47316;
})();
if(cljs.core.truth_(inst_47265__$1)){
var statearr_47317_47343 = state_47312__$1;
(statearr_47317_47343[(1)] = (5));

} else {
var statearr_47318_47344 = state_47312__$1;
(statearr_47318_47344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (15))){
var inst_47272 = (state_47312[(8)]);
var inst_47287 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47272);
var inst_47288 = cljs.core.first.call(null,inst_47287);
var inst_47289 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47288);
var inst_47290 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47289)].join('');
var inst_47291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47290);
var state_47312__$1 = state_47312;
var statearr_47319_47345 = state_47312__$1;
(statearr_47319_47345[(2)] = inst_47291);

(statearr_47319_47345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (13))){
var inst_47296 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47320_47346 = state_47312__$1;
(statearr_47320_47346[(2)] = inst_47296);

(statearr_47320_47346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (6))){
var state_47312__$1 = state_47312;
var statearr_47321_47347 = state_47312__$1;
(statearr_47321_47347[(2)] = null);

(statearr_47321_47347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (17))){
var inst_47294 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47322_47348 = state_47312__$1;
(statearr_47322_47348[(2)] = inst_47294);

(statearr_47322_47348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (3))){
var inst_47310 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47312__$1,inst_47310);
} else {
if((state_val_47313 === (12))){
var inst_47271 = (state_47312[(9)]);
var inst_47285 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47271,opts);
var state_47312__$1 = state_47312;
if(cljs.core.truth_(inst_47285)){
var statearr_47323_47349 = state_47312__$1;
(statearr_47323_47349[(1)] = (15));

} else {
var statearr_47324_47350 = state_47312__$1;
(statearr_47324_47350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (2))){
var state_47312__$1 = state_47312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47312__$1,(4),ch);
} else {
if((state_val_47313 === (11))){
var inst_47272 = (state_47312[(8)]);
var inst_47277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47278 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47272);
var inst_47279 = cljs.core.async.timeout.call(null,(1000));
var inst_47280 = [inst_47278,inst_47279];
var inst_47281 = (new cljs.core.PersistentVector(null,2,(5),inst_47277,inst_47280,null));
var state_47312__$1 = state_47312;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47312__$1,(14),inst_47281);
} else {
if((state_val_47313 === (9))){
var inst_47272 = (state_47312[(8)]);
var inst_47298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47299 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47272);
var inst_47300 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47299);
var inst_47301 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47300)].join('');
var inst_47302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47301);
var state_47312__$1 = (function (){var statearr_47325 = state_47312;
(statearr_47325[(10)] = inst_47298);

return statearr_47325;
})();
var statearr_47326_47351 = state_47312__$1;
(statearr_47326_47351[(2)] = inst_47302);

(statearr_47326_47351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (5))){
var inst_47265 = (state_47312[(7)]);
var inst_47267 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47268 = (new cljs.core.PersistentArrayMap(null,2,inst_47267,null));
var inst_47269 = (new cljs.core.PersistentHashSet(null,inst_47268,null));
var inst_47270 = figwheel.client.focus_msgs.call(null,inst_47269,inst_47265);
var inst_47271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47270);
var inst_47272 = cljs.core.first.call(null,inst_47270);
var inst_47273 = figwheel.client.autoload_QMARK_.call(null);
var state_47312__$1 = (function (){var statearr_47327 = state_47312;
(statearr_47327[(9)] = inst_47271);

(statearr_47327[(8)] = inst_47272);

return statearr_47327;
})();
if(cljs.core.truth_(inst_47273)){
var statearr_47328_47352 = state_47312__$1;
(statearr_47328_47352[(1)] = (8));

} else {
var statearr_47329_47353 = state_47312__$1;
(statearr_47329_47353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (14))){
var inst_47283 = (state_47312[(2)]);
var state_47312__$1 = state_47312;
var statearr_47330_47354 = state_47312__$1;
(statearr_47330_47354[(2)] = inst_47283);

(statearr_47330_47354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (16))){
var state_47312__$1 = state_47312;
var statearr_47331_47355 = state_47312__$1;
(statearr_47331_47355[(2)] = null);

(statearr_47331_47355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (10))){
var inst_47304 = (state_47312[(2)]);
var state_47312__$1 = (function (){var statearr_47332 = state_47312;
(statearr_47332[(11)] = inst_47304);

return statearr_47332;
})();
var statearr_47333_47356 = state_47312__$1;
(statearr_47333_47356[(2)] = null);

(statearr_47333_47356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47313 === (8))){
var inst_47271 = (state_47312[(9)]);
var inst_47275 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47271,opts);
var state_47312__$1 = state_47312;
if(cljs.core.truth_(inst_47275)){
var statearr_47334_47357 = state_47312__$1;
(statearr_47334_47357[(1)] = (11));

} else {
var statearr_47335_47358 = state_47312__$1;
(statearr_47335_47358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___47340,ch))
;
return ((function (switch__38678__auto__,c__38835__auto___47340,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____0 = (function (){
var statearr_47336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47336[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__);

(statearr_47336[(1)] = (1));

return statearr_47336;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____1 = (function (state_47312){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_47312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e47337){if((e47337 instanceof Object)){
var ex__38682__auto__ = e47337;
var statearr_47338_47359 = state_47312;
(statearr_47338_47359[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47360 = state_47312;
state_47312 = G__47360;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__ = function(state_47312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____1.call(this,state_47312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38679__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___47340,ch))
})();
var state__38837__auto__ = (function (){var statearr_47339 = f__38836__auto__.call(null);
(statearr_47339[(6)] = c__38835__auto___47340);

return statearr_47339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___47340,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47361_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47361_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47363 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47363){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47362){if((e47362 instanceof Error)){
var e = e47362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47363], null));
} else {
var e = e47362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47363))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47364){
var map__47365 = p__47364;
var map__47365__$1 = ((((!((map__47365 == null)))?(((((map__47365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47365):map__47365);
var opts = map__47365__$1;
var build_id = cljs.core.get.call(null,map__47365__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47365,map__47365__$1,opts,build_id){
return (function (p__47367){
var vec__47368 = p__47367;
var seq__47369 = cljs.core.seq.call(null,vec__47368);
var first__47370 = cljs.core.first.call(null,seq__47369);
var seq__47369__$1 = cljs.core.next.call(null,seq__47369);
var map__47371 = first__47370;
var map__47371__$1 = ((((!((map__47371 == null)))?(((((map__47371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47371):map__47371);
var msg = map__47371__$1;
var msg_name = cljs.core.get.call(null,map__47371__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47369__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47368,seq__47369,first__47370,seq__47369__$1,map__47371,map__47371__$1,msg,msg_name,_,map__47365,map__47365__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47368,seq__47369,first__47370,seq__47369__$1,map__47371,map__47371__$1,msg,msg_name,_,map__47365,map__47365__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47365,map__47365__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47373){
var vec__47374 = p__47373;
var seq__47375 = cljs.core.seq.call(null,vec__47374);
var first__47376 = cljs.core.first.call(null,seq__47375);
var seq__47375__$1 = cljs.core.next.call(null,seq__47375);
var map__47377 = first__47376;
var map__47377__$1 = ((((!((map__47377 == null)))?(((((map__47377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47377):map__47377);
var msg = map__47377__$1;
var msg_name = cljs.core.get.call(null,map__47377__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47375__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47379){
var map__47380 = p__47379;
var map__47380__$1 = ((((!((map__47380 == null)))?(((((map__47380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47380):map__47380);
var on_compile_warning = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47380,map__47380__$1,on_compile_warning,on_compile_fail){
return (function (p__47382){
var vec__47383 = p__47382;
var seq__47384 = cljs.core.seq.call(null,vec__47383);
var first__47385 = cljs.core.first.call(null,seq__47384);
var seq__47384__$1 = cljs.core.next.call(null,seq__47384);
var map__47386 = first__47385;
var map__47386__$1 = ((((!((map__47386 == null)))?(((((map__47386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47386):map__47386);
var msg = map__47386__$1;
var msg_name = cljs.core.get.call(null,map__47386__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47384__$1;
var pred__47388 = cljs.core._EQ_;
var expr__47389 = msg_name;
if(cljs.core.truth_(pred__47388.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47389))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47388.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47389))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47380,map__47380__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__,msg_hist,msg_names,msg){
return (function (state_47478){
var state_val_47479 = (state_47478[(1)]);
if((state_val_47479 === (7))){
var inst_47398 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47398)){
var statearr_47480_47527 = state_47478__$1;
(statearr_47480_47527[(1)] = (8));

} else {
var statearr_47481_47528 = state_47478__$1;
(statearr_47481_47528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (20))){
var inst_47472 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47482_47529 = state_47478__$1;
(statearr_47482_47529[(2)] = inst_47472);

(statearr_47482_47529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (27))){
var inst_47468 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47483_47530 = state_47478__$1;
(statearr_47483_47530[(2)] = inst_47468);

(statearr_47483_47530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (1))){
var inst_47391 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47391)){
var statearr_47484_47531 = state_47478__$1;
(statearr_47484_47531[(1)] = (2));

} else {
var statearr_47485_47532 = state_47478__$1;
(statearr_47485_47532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (24))){
var inst_47470 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47486_47533 = state_47478__$1;
(statearr_47486_47533[(2)] = inst_47470);

(statearr_47486_47533[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (4))){
var inst_47476 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47478__$1,inst_47476);
} else {
if((state_val_47479 === (15))){
var inst_47474 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47487_47534 = state_47478__$1;
(statearr_47487_47534[(2)] = inst_47474);

(statearr_47487_47534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (21))){
var inst_47427 = (state_47478[(2)]);
var inst_47428 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47429 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47428);
var state_47478__$1 = (function (){var statearr_47488 = state_47478;
(statearr_47488[(7)] = inst_47427);

return statearr_47488;
})();
var statearr_47489_47535 = state_47478__$1;
(statearr_47489_47535[(2)] = inst_47429);

(statearr_47489_47535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (31))){
var inst_47457 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47457)){
var statearr_47490_47536 = state_47478__$1;
(statearr_47490_47536[(1)] = (34));

} else {
var statearr_47491_47537 = state_47478__$1;
(statearr_47491_47537[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (32))){
var inst_47466 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47492_47538 = state_47478__$1;
(statearr_47492_47538[(2)] = inst_47466);

(statearr_47492_47538[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (33))){
var inst_47453 = (state_47478[(2)]);
var inst_47454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47455 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47454);
var state_47478__$1 = (function (){var statearr_47493 = state_47478;
(statearr_47493[(8)] = inst_47453);

return statearr_47493;
})();
var statearr_47494_47539 = state_47478__$1;
(statearr_47494_47539[(2)] = inst_47455);

(statearr_47494_47539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (13))){
var inst_47412 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(16),inst_47412);
} else {
if((state_val_47479 === (22))){
var inst_47433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47434 = figwheel.client.heads_up.append_warning_message.call(null,inst_47433);
var state_47478__$1 = state_47478;
var statearr_47495_47540 = state_47478__$1;
(statearr_47495_47540[(2)] = inst_47434);

(statearr_47495_47540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (36))){
var inst_47464 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47496_47541 = state_47478__$1;
(statearr_47496_47541[(2)] = inst_47464);

(statearr_47496_47541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (29))){
var inst_47444 = (state_47478[(2)]);
var inst_47445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47446 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47445);
var state_47478__$1 = (function (){var statearr_47497 = state_47478;
(statearr_47497[(9)] = inst_47444);

return statearr_47497;
})();
var statearr_47498_47542 = state_47478__$1;
(statearr_47498_47542[(2)] = inst_47446);

(statearr_47498_47542[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (6))){
var inst_47393 = (state_47478[(10)]);
var state_47478__$1 = state_47478;
var statearr_47499_47543 = state_47478__$1;
(statearr_47499_47543[(2)] = inst_47393);

(statearr_47499_47543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (28))){
var inst_47440 = (state_47478[(2)]);
var inst_47441 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47442 = figwheel.client.heads_up.display_warning.call(null,inst_47441);
var state_47478__$1 = (function (){var statearr_47500 = state_47478;
(statearr_47500[(11)] = inst_47440);

return statearr_47500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(29),inst_47442);
} else {
if((state_val_47479 === (25))){
var inst_47438 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(28),inst_47438);
} else {
if((state_val_47479 === (34))){
var inst_47459 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(37),inst_47459);
} else {
if((state_val_47479 === (17))){
var inst_47418 = (state_47478[(2)]);
var inst_47419 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47419);
var state_47478__$1 = (function (){var statearr_47501 = state_47478;
(statearr_47501[(12)] = inst_47418);

return statearr_47501;
})();
var statearr_47502_47544 = state_47478__$1;
(statearr_47502_47544[(2)] = inst_47420);

(statearr_47502_47544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (3))){
var inst_47410 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47410)){
var statearr_47503_47545 = state_47478__$1;
(statearr_47503_47545[(1)] = (13));

} else {
var statearr_47504_47546 = state_47478__$1;
(statearr_47504_47546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (12))){
var inst_47406 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47505_47547 = state_47478__$1;
(statearr_47505_47547[(2)] = inst_47406);

(statearr_47505_47547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (2))){
var inst_47393 = (state_47478[(10)]);
var inst_47393__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47478__$1 = (function (){var statearr_47506 = state_47478;
(statearr_47506[(10)] = inst_47393__$1);

return statearr_47506;
})();
if(cljs.core.truth_(inst_47393__$1)){
var statearr_47507_47548 = state_47478__$1;
(statearr_47507_47548[(1)] = (5));

} else {
var statearr_47508_47549 = state_47478__$1;
(statearr_47508_47549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (23))){
var inst_47436 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47436)){
var statearr_47509_47550 = state_47478__$1;
(statearr_47509_47550[(1)] = (25));

} else {
var statearr_47510_47551 = state_47478__$1;
(statearr_47510_47551[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (35))){
var state_47478__$1 = state_47478;
var statearr_47511_47552 = state_47478__$1;
(statearr_47511_47552[(2)] = null);

(statearr_47511_47552[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (19))){
var inst_47431 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47431)){
var statearr_47512_47553 = state_47478__$1;
(statearr_47512_47553[(1)] = (22));

} else {
var statearr_47513_47554 = state_47478__$1;
(statearr_47513_47554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (11))){
var inst_47402 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47514_47555 = state_47478__$1;
(statearr_47514_47555[(2)] = inst_47402);

(statearr_47514_47555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (9))){
var inst_47404 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(12),inst_47404);
} else {
if((state_val_47479 === (5))){
var inst_47395 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47478__$1 = state_47478;
var statearr_47515_47556 = state_47478__$1;
(statearr_47515_47556[(2)] = inst_47395);

(statearr_47515_47556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (14))){
var inst_47422 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47422)){
var statearr_47516_47557 = state_47478__$1;
(statearr_47516_47557[(1)] = (18));

} else {
var statearr_47517_47558 = state_47478__$1;
(statearr_47517_47558[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (26))){
var inst_47448 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47448)){
var statearr_47518_47559 = state_47478__$1;
(statearr_47518_47559[(1)] = (30));

} else {
var statearr_47519_47560 = state_47478__$1;
(statearr_47519_47560[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (16))){
var inst_47414 = (state_47478[(2)]);
var inst_47415 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47416 = figwheel.client.heads_up.display_exception.call(null,inst_47415);
var state_47478__$1 = (function (){var statearr_47520 = state_47478;
(statearr_47520[(13)] = inst_47414);

return statearr_47520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(17),inst_47416);
} else {
if((state_val_47479 === (30))){
var inst_47450 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47451 = figwheel.client.heads_up.display_warning.call(null,inst_47450);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(33),inst_47451);
} else {
if((state_val_47479 === (10))){
var inst_47408 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47521_47561 = state_47478__$1;
(statearr_47521_47561[(2)] = inst_47408);

(statearr_47521_47561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (18))){
var inst_47424 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47425 = figwheel.client.heads_up.display_exception.call(null,inst_47424);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(21),inst_47425);
} else {
if((state_val_47479 === (37))){
var inst_47461 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47522_47562 = state_47478__$1;
(statearr_47522_47562[(2)] = inst_47461);

(statearr_47522_47562[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (8))){
var inst_47400 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(11),inst_47400);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38678__auto__,c__38835__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____0 = (function (){
var statearr_47523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47523[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__);

(statearr_47523[(1)] = (1));

return statearr_47523;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____1 = (function (state_47478){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_47478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e47524){if((e47524 instanceof Object)){
var ex__38682__auto__ = e47524;
var statearr_47525_47563 = state_47478;
(statearr_47525_47563[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47564 = state_47478;
state_47478 = G__47564;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__ = function(state_47478){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____1.call(this,state_47478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__,msg_hist,msg_names,msg))
})();
var state__38837__auto__ = (function (){var statearr_47526 = f__38836__auto__.call(null);
(statearr_47526[(6)] = c__38835__auto__);

return statearr_47526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__,msg_hist,msg_names,msg))
);

return c__38835__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38835__auto___47593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___47593,ch){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___47593,ch){
return (function (state_47579){
var state_val_47580 = (state_47579[(1)]);
if((state_val_47580 === (1))){
var state_47579__$1 = state_47579;
var statearr_47581_47594 = state_47579__$1;
(statearr_47581_47594[(2)] = null);

(statearr_47581_47594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47580 === (2))){
var state_47579__$1 = state_47579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47579__$1,(4),ch);
} else {
if((state_val_47580 === (3))){
var inst_47577 = (state_47579[(2)]);
var state_47579__$1 = state_47579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47579__$1,inst_47577);
} else {
if((state_val_47580 === (4))){
var inst_47567 = (state_47579[(7)]);
var inst_47567__$1 = (state_47579[(2)]);
var state_47579__$1 = (function (){var statearr_47582 = state_47579;
(statearr_47582[(7)] = inst_47567__$1);

return statearr_47582;
})();
if(cljs.core.truth_(inst_47567__$1)){
var statearr_47583_47595 = state_47579__$1;
(statearr_47583_47595[(1)] = (5));

} else {
var statearr_47584_47596 = state_47579__$1;
(statearr_47584_47596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47580 === (5))){
var inst_47567 = (state_47579[(7)]);
var inst_47569 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47567);
var state_47579__$1 = state_47579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47579__$1,(8),inst_47569);
} else {
if((state_val_47580 === (6))){
var state_47579__$1 = state_47579;
var statearr_47585_47597 = state_47579__$1;
(statearr_47585_47597[(2)] = null);

(statearr_47585_47597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47580 === (7))){
var inst_47575 = (state_47579[(2)]);
var state_47579__$1 = state_47579;
var statearr_47586_47598 = state_47579__$1;
(statearr_47586_47598[(2)] = inst_47575);

(statearr_47586_47598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47580 === (8))){
var inst_47571 = (state_47579[(2)]);
var state_47579__$1 = (function (){var statearr_47587 = state_47579;
(statearr_47587[(8)] = inst_47571);

return statearr_47587;
})();
var statearr_47588_47599 = state_47579__$1;
(statearr_47588_47599[(2)] = null);

(statearr_47588_47599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__38835__auto___47593,ch))
;
return ((function (switch__38678__auto__,c__38835__auto___47593,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38679__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38679__auto____0 = (function (){
var statearr_47589 = [null,null,null,null,null,null,null,null,null];
(statearr_47589[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38679__auto__);

(statearr_47589[(1)] = (1));

return statearr_47589;
});
var figwheel$client$heads_up_plugin_$_state_machine__38679__auto____1 = (function (state_47579){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_47579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e47590){if((e47590 instanceof Object)){
var ex__38682__auto__ = e47590;
var statearr_47591_47600 = state_47579;
(statearr_47591_47600[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47601 = state_47579;
state_47579 = G__47601;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38679__auto__ = function(state_47579){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38679__auto____1.call(this,state_47579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38679__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38679__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___47593,ch))
})();
var state__38837__auto__ = (function (){var statearr_47592 = f__38836__auto__.call(null);
(statearr_47592[(6)] = c__38835__auto___47593);

return statearr_47592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___47593,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__){
return (function (state_47607){
var state_val_47608 = (state_47607[(1)]);
if((state_val_47608 === (1))){
var inst_47602 = cljs.core.async.timeout.call(null,(3000));
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47607__$1,(2),inst_47602);
} else {
if((state_val_47608 === (2))){
var inst_47604 = (state_47607[(2)]);
var inst_47605 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47607__$1 = (function (){var statearr_47609 = state_47607;
(statearr_47609[(7)] = inst_47604);

return statearr_47609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47607__$1,inst_47605);
} else {
return null;
}
}
});})(c__38835__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____0 = (function (){
var statearr_47610 = [null,null,null,null,null,null,null,null];
(statearr_47610[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__);

(statearr_47610[(1)] = (1));

return statearr_47610;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____1 = (function (state_47607){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_47607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e47611){if((e47611 instanceof Object)){
var ex__38682__auto__ = e47611;
var statearr_47612_47614 = state_47607;
(statearr_47612_47614[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47615 = state_47607;
state_47607 = G__47615;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__ = function(state_47607){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____1.call(this,state_47607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38679__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__))
})();
var state__38837__auto__ = (function (){var statearr_47613 = f__38836__auto__.call(null);
(statearr_47613[(6)] = c__38835__auto__);

return statearr_47613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__))
);

return c__38835__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__,figwheel_version,temp__5457__auto__){
return (function (state_47622){
var state_val_47623 = (state_47622[(1)]);
if((state_val_47623 === (1))){
var inst_47616 = cljs.core.async.timeout.call(null,(2000));
var state_47622__$1 = state_47622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47622__$1,(2),inst_47616);
} else {
if((state_val_47623 === (2))){
var inst_47618 = (state_47622[(2)]);
var inst_47619 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_47620 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47619);
var state_47622__$1 = (function (){var statearr_47624 = state_47622;
(statearr_47624[(7)] = inst_47618);

return statearr_47624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47622__$1,inst_47620);
} else {
return null;
}
}
});})(c__38835__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____0 = (function (){
var statearr_47625 = [null,null,null,null,null,null,null,null];
(statearr_47625[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__);

(statearr_47625[(1)] = (1));

return statearr_47625;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____1 = (function (state_47622){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_47622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e47626){if((e47626 instanceof Object)){
var ex__38682__auto__ = e47626;
var statearr_47627_47629 = state_47622;
(statearr_47627_47629[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47630 = state_47622;
state_47622 = G__47630;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__ = function(state_47622){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____1.call(this,state_47622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__,figwheel_version,temp__5457__auto__))
})();
var state__38837__auto__ = (function (){var statearr_47628 = f__38836__auto__.call(null);
(statearr_47628[(6)] = c__38835__auto__);

return statearr_47628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__,figwheel_version,temp__5457__auto__))
);

return c__38835__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47631){
var map__47632 = p__47631;
var map__47632__$1 = ((((!((map__47632 == null)))?(((((map__47632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47632):map__47632);
var file = cljs.core.get.call(null,map__47632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47632__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47632__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47634 = "";
var G__47634__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47634),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__47634);
var G__47634__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47634__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__47634__$1);
if(cljs.core.truth_((function (){var and__3913__auto__ = line;
if(cljs.core.truth_(and__3913__auto__)){
return column;
} else {
return and__3913__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47634__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__47634__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47635){
var map__47636 = p__47635;
var map__47636__$1 = ((((!((map__47636 == null)))?(((((map__47636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47636):map__47636);
var ed = map__47636__$1;
var formatted_exception = cljs.core.get.call(null,map__47636__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47636__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47636__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47638_47642 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47639_47643 = null;
var count__47640_47644 = (0);
var i__47641_47645 = (0);
while(true){
if((i__47641_47645 < count__47640_47644)){
var msg_47646 = cljs.core._nth.call(null,chunk__47639_47643,i__47641_47645);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47646);


var G__47647 = seq__47638_47642;
var G__47648 = chunk__47639_47643;
var G__47649 = count__47640_47644;
var G__47650 = (i__47641_47645 + (1));
seq__47638_47642 = G__47647;
chunk__47639_47643 = G__47648;
count__47640_47644 = G__47649;
i__47641_47645 = G__47650;
continue;
} else {
var temp__5457__auto___47651 = cljs.core.seq.call(null,seq__47638_47642);
if(temp__5457__auto___47651){
var seq__47638_47652__$1 = temp__5457__auto___47651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47638_47652__$1)){
var c__4321__auto___47653 = cljs.core.chunk_first.call(null,seq__47638_47652__$1);
var G__47654 = cljs.core.chunk_rest.call(null,seq__47638_47652__$1);
var G__47655 = c__4321__auto___47653;
var G__47656 = cljs.core.count.call(null,c__4321__auto___47653);
var G__47657 = (0);
seq__47638_47642 = G__47654;
chunk__47639_47643 = G__47655;
count__47640_47644 = G__47656;
i__47641_47645 = G__47657;
continue;
} else {
var msg_47658 = cljs.core.first.call(null,seq__47638_47652__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47658);


var G__47659 = cljs.core.next.call(null,seq__47638_47652__$1);
var G__47660 = null;
var G__47661 = (0);
var G__47662 = (0);
seq__47638_47642 = G__47659;
chunk__47639_47643 = G__47660;
count__47640_47644 = G__47661;
i__47641_47645 = G__47662;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47663){
var map__47664 = p__47663;
var map__47664__$1 = ((((!((map__47664 == null)))?(((((map__47664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47664):map__47664);
var w = map__47664__$1;
var message = cljs.core.get.call(null,map__47664__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3913__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3913__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3913__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47666 = cljs.core.seq.call(null,plugins);
var chunk__47667 = null;
var count__47668 = (0);
var i__47669 = (0);
while(true){
if((i__47669 < count__47668)){
var vec__47670 = cljs.core._nth.call(null,chunk__47667,i__47669);
var k = cljs.core.nth.call(null,vec__47670,(0),null);
var plugin = cljs.core.nth.call(null,vec__47670,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47666,chunk__47667,count__47668,i__47669,pl_47676,vec__47670,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47676.call(null,msg_hist);
});})(seq__47666,chunk__47667,count__47668,i__47669,pl_47676,vec__47670,k,plugin))
);
} else {
}


var G__47677 = seq__47666;
var G__47678 = chunk__47667;
var G__47679 = count__47668;
var G__47680 = (i__47669 + (1));
seq__47666 = G__47677;
chunk__47667 = G__47678;
count__47668 = G__47679;
i__47669 = G__47680;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47666);
if(temp__5457__auto__){
var seq__47666__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47666__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__47666__$1);
var G__47681 = cljs.core.chunk_rest.call(null,seq__47666__$1);
var G__47682 = c__4321__auto__;
var G__47683 = cljs.core.count.call(null,c__4321__auto__);
var G__47684 = (0);
seq__47666 = G__47681;
chunk__47667 = G__47682;
count__47668 = G__47683;
i__47669 = G__47684;
continue;
} else {
var vec__47673 = cljs.core.first.call(null,seq__47666__$1);
var k = cljs.core.nth.call(null,vec__47673,(0),null);
var plugin = cljs.core.nth.call(null,vec__47673,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47685 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47666,chunk__47667,count__47668,i__47669,pl_47685,vec__47673,k,plugin,seq__47666__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47685.call(null,msg_hist);
});})(seq__47666,chunk__47667,count__47668,i__47669,pl_47685,vec__47673,k,plugin,seq__47666__$1,temp__5457__auto__))
);
} else {
}


var G__47686 = cljs.core.next.call(null,seq__47666__$1);
var G__47687 = null;
var G__47688 = (0);
var G__47689 = (0);
seq__47666 = G__47686;
chunk__47667 = G__47687;
count__47668 = G__47688;
i__47669 = G__47689;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__47691 = arguments.length;
switch (G__47691) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47692_47697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47693_47698 = null;
var count__47694_47699 = (0);
var i__47695_47700 = (0);
while(true){
if((i__47695_47700 < count__47694_47699)){
var msg_47701 = cljs.core._nth.call(null,chunk__47693_47698,i__47695_47700);
figwheel.client.socket.handle_incoming_message.call(null,msg_47701);


var G__47702 = seq__47692_47697;
var G__47703 = chunk__47693_47698;
var G__47704 = count__47694_47699;
var G__47705 = (i__47695_47700 + (1));
seq__47692_47697 = G__47702;
chunk__47693_47698 = G__47703;
count__47694_47699 = G__47704;
i__47695_47700 = G__47705;
continue;
} else {
var temp__5457__auto___47706 = cljs.core.seq.call(null,seq__47692_47697);
if(temp__5457__auto___47706){
var seq__47692_47707__$1 = temp__5457__auto___47706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47692_47707__$1)){
var c__4321__auto___47708 = cljs.core.chunk_first.call(null,seq__47692_47707__$1);
var G__47709 = cljs.core.chunk_rest.call(null,seq__47692_47707__$1);
var G__47710 = c__4321__auto___47708;
var G__47711 = cljs.core.count.call(null,c__4321__auto___47708);
var G__47712 = (0);
seq__47692_47697 = G__47709;
chunk__47693_47698 = G__47710;
count__47694_47699 = G__47711;
i__47695_47700 = G__47712;
continue;
} else {
var msg_47713 = cljs.core.first.call(null,seq__47692_47707__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47713);


var G__47714 = cljs.core.next.call(null,seq__47692_47707__$1);
var G__47715 = null;
var G__47716 = (0);
var G__47717 = (0);
seq__47692_47697 = G__47714;
chunk__47693_47698 = G__47715;
count__47694_47699 = G__47716;
i__47695_47700 = G__47717;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___47722 = arguments.length;
var i__4500__auto___47723 = (0);
while(true){
if((i__4500__auto___47723 < len__4499__auto___47722)){
args__4502__auto__.push((arguments[i__4500__auto___47723]));

var G__47724 = (i__4500__auto___47723 + (1));
i__4500__auto___47723 = G__47724;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47719){
var map__47720 = p__47719;
var map__47720__$1 = ((((!((map__47720 == null)))?(((((map__47720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47720):map__47720);
var opts = map__47720__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47718){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47718));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47725){if((e47725 instanceof Error)){
var e = e47725;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47725;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__47726){
var map__47727 = p__47726;
var map__47727__$1 = ((((!((map__47727 == null)))?(((((map__47727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47727):map__47727);
var msg_name = cljs.core.get.call(null,map__47727__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525291349520
