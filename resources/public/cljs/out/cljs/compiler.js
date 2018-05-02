// Compiled by ClojureScript 1.10.126 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__26507 = s;
var map__26507__$1 = ((((!((map__26507 == null)))?(((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507):map__26507);
var name = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__26510 = info;
var map__26511 = G__26510;
var map__26511__$1 = ((((!((map__26511 == null)))?(((((map__26511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26511):map__26511);
var shadow = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__26510__$1 = G__26510;
while(true){
var d__$2 = d__$1;
var map__26513 = G__26510__$1;
var map__26513__$1 = ((((!((map__26513 == null)))?(((((map__26513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26513):map__26513);
var shadow__$1 = cljs.core.get.call(null,map__26513__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__26515 = (d__$2 + (1));
var G__26516 = shadow__$1;
d__$1 = G__26515;
G__26510__$1 = G__26516;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__26517){
var map__26518 = p__26517;
var map__26518__$1 = ((((!((map__26518 == null)))?(((((map__26518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26518):map__26518);
var name_var = map__26518__$1;
var name = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__26520 = info;
var map__26520__$1 = ((((!((map__26520 == null)))?(((((map__26520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26520):map__26520);
var ns = cljs.core.get.call(null,map__26520__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__26520__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__26523 = arguments.length;
switch (G__26523) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__26525 = cp;
switch (G__26525) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__26527_26531 = cljs.core.seq.call(null,s);
var chunk__26528_26532 = null;
var count__26529_26533 = (0);
var i__26530_26534 = (0);
while(true){
if((i__26530_26534 < count__26529_26533)){
var c_26535 = cljs.core._nth.call(null,chunk__26528_26532,i__26530_26534);
sb.append(cljs.compiler.escape_char.call(null,c_26535));


var G__26536 = seq__26527_26531;
var G__26537 = chunk__26528_26532;
var G__26538 = count__26529_26533;
var G__26539 = (i__26530_26534 + (1));
seq__26527_26531 = G__26536;
chunk__26528_26532 = G__26537;
count__26529_26533 = G__26538;
i__26530_26534 = G__26539;
continue;
} else {
var temp__5457__auto___26540 = cljs.core.seq.call(null,seq__26527_26531);
if(temp__5457__auto___26540){
var seq__26527_26541__$1 = temp__5457__auto___26540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26527_26541__$1)){
var c__4321__auto___26542 = cljs.core.chunk_first.call(null,seq__26527_26541__$1);
var G__26543 = cljs.core.chunk_rest.call(null,seq__26527_26541__$1);
var G__26544 = c__4321__auto___26542;
var G__26545 = cljs.core.count.call(null,c__4321__auto___26542);
var G__26546 = (0);
seq__26527_26531 = G__26543;
chunk__26528_26532 = G__26544;
count__26529_26533 = G__26545;
i__26530_26534 = G__26546;
continue;
} else {
var c_26547 = cljs.core.first.call(null,seq__26527_26541__$1);
sb.append(cljs.compiler.escape_char.call(null,c_26547));


var G__26548 = cljs.core.next.call(null,seq__26527_26541__$1);
var G__26549 = null;
var G__26550 = (0);
var G__26551 = (0);
seq__26527_26531 = G__26548;
chunk__26528_26532 = G__26549;
count__26529_26533 = G__26550;
i__26530_26534 = G__26551;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4388__auto__,method_table__4384__auto__,prefer_table__4385__auto__,method_cache__4386__auto__,cached_hierarchy__4387__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__22245__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__22245__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__26552_26557 = ast;
var map__26552_26558__$1 = ((((!((map__26552_26557 == null)))?(((((map__26552_26557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26552_26557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26552_26557):map__26552_26557);
var env_26559 = cljs.core.get.call(null,map__26552_26558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_26559))){
var map__26554_26560 = env_26559;
var map__26554_26561__$1 = ((((!((map__26554_26560 == null)))?(((((map__26554_26560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26554_26560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554_26560):map__26554_26560);
var line_26562 = cljs.core.get.call(null,map__26554_26561__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26563 = cljs.core.get.call(null,map__26554_26561__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__){
return (function (m){
var minfo = (function (){var G__26556 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__26556,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__26556;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_26562 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_26563)?(column_26563 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__26554_26560,map__26554_26561__$1,line_26562,column_26563,map__26552_26557,map__26552_26558__$1,env_26559,val__22245__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__22245__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26570 = arguments.length;
var i__4500__auto___26571 = (0);
while(true){
if((i__4500__auto___26571 < len__4499__auto___26570)){
args__4502__auto__.push((arguments[i__4500__auto___26571]));

var G__26572 = (i__4500__auto___26571 + (1));
i__4500__auto___26571 = G__26572;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__26566_26573 = cljs.core.seq.call(null,xs);
var chunk__26567_26574 = null;
var count__26568_26575 = (0);
var i__26569_26576 = (0);
while(true){
if((i__26569_26576 < count__26568_26575)){
var x_26577 = cljs.core._nth.call(null,chunk__26567_26574,i__26569_26576);
if((x_26577 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26577)){
cljs.compiler.emit.call(null,x_26577);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26577)){
cljs.core.apply.call(null,cljs.compiler.emits,x_26577);
} else {
if(goog.isFunction(x_26577)){
x_26577.call(null);
} else {
var s_26578 = cljs.core.print_str.call(null,x_26577);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26566_26573,chunk__26567_26574,count__26568_26575,i__26569_26576,s_26578,x_26577){
return (function (p1__26564_SHARP_){
return (p1__26564_SHARP_ + cljs.core.count.call(null,s_26578));
});})(seq__26566_26573,chunk__26567_26574,count__26568_26575,i__26569_26576,s_26578,x_26577))
);
}

cljs.core.print.call(null,s_26578);

}
}
}
}


var G__26579 = seq__26566_26573;
var G__26580 = chunk__26567_26574;
var G__26581 = count__26568_26575;
var G__26582 = (i__26569_26576 + (1));
seq__26566_26573 = G__26579;
chunk__26567_26574 = G__26580;
count__26568_26575 = G__26581;
i__26569_26576 = G__26582;
continue;
} else {
var temp__5457__auto___26583 = cljs.core.seq.call(null,seq__26566_26573);
if(temp__5457__auto___26583){
var seq__26566_26584__$1 = temp__5457__auto___26583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26566_26584__$1)){
var c__4321__auto___26585 = cljs.core.chunk_first.call(null,seq__26566_26584__$1);
var G__26586 = cljs.core.chunk_rest.call(null,seq__26566_26584__$1);
var G__26587 = c__4321__auto___26585;
var G__26588 = cljs.core.count.call(null,c__4321__auto___26585);
var G__26589 = (0);
seq__26566_26573 = G__26586;
chunk__26567_26574 = G__26587;
count__26568_26575 = G__26588;
i__26569_26576 = G__26589;
continue;
} else {
var x_26590 = cljs.core.first.call(null,seq__26566_26584__$1);
if((x_26590 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_26590)){
cljs.compiler.emit.call(null,x_26590);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26590)){
cljs.core.apply.call(null,cljs.compiler.emits,x_26590);
} else {
if(goog.isFunction(x_26590)){
x_26590.call(null);
} else {
var s_26591 = cljs.core.print_str.call(null,x_26590);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26566_26573,chunk__26567_26574,count__26568_26575,i__26569_26576,s_26591,x_26590,seq__26566_26584__$1,temp__5457__auto___26583){
return (function (p1__26564_SHARP_){
return (p1__26564_SHARP_ + cljs.core.count.call(null,s_26591));
});})(seq__26566_26573,chunk__26567_26574,count__26568_26575,i__26569_26576,s_26591,x_26590,seq__26566_26584__$1,temp__5457__auto___26583))
);
}

cljs.core.print.call(null,s_26591);

}
}
}
}


var G__26592 = cljs.core.next.call(null,seq__26566_26584__$1);
var G__26593 = null;
var G__26594 = (0);
var G__26595 = (0);
seq__26566_26573 = G__26592;
chunk__26567_26574 = G__26593;
count__26568_26575 = G__26594;
i__26569_26576 = G__26595;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq26565){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26565));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26601 = arguments.length;
var i__4500__auto___26602 = (0);
while(true){
if((i__4500__auto___26602 < len__4499__auto___26601)){
args__4502__auto__.push((arguments[i__4500__auto___26602]));

var G__26603 = (i__4500__auto___26602 + (1));
i__4500__auto___26602 = G__26603;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_26597_26604 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_26597_26604;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__26598){
var map__26599 = p__26598;
var map__26599__$1 = ((((!((map__26599 == null)))?(((((map__26599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26599):map__26599);
var m = map__26599__$1;
var gen_line = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq26596){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26596));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4432__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26605_26607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26606_26608 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26605_26607,_STAR_print_fn_STAR_26606_26608,sb__4432__auto__){
return (function (x__4433__auto__){
return sb__4432__auto__.append(x__4433__auto__);
});})(_STAR_print_newline_STAR_26605_26607,_STAR_print_fn_STAR_26606_26608,sb__4432__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26606_26608;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26605_26607;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4432__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4388__auto__,method_table__4384__auto__,prefer_table__4385__auto__,method_cache__4386__auto__,cached_hierarchy__4387__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__26609 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__26609,(0),null);
var flags = cljs.core.nth.call(null,vec__26609,(1),null);
var pattern = cljs.core.nth.call(null,vec__26609,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3913__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3913__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3913__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3913__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3913__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3913__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__26613){
var map__26614 = p__26613;
var map__26614__$1 = ((((!((map__26614 == null)))?(((((map__26614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26614):map__26614);
var ast = map__26614__$1;
var info = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__26614__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__26616 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__26616__$1 = ((((!((map__26616 == null)))?(((((map__26616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26616):map__26616);
var cenv = map__26616__$1;
var options = cljs.core.get.call(null,map__26616__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3924__auto__ = js_module_name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__26618 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3913__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3913__auto__;
}
})())){
return clojure.set.difference.call(null,G__26618,cljs.analyzer.es5_allowed);
} else {
return G__26618;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3924__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__26619 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__26619,reserved);
} else {
return G__26619;
}
})();
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__26620_26621 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__26620_26622__$1 = (((G__26620_26621 instanceof cljs.core.Keyword))?G__26620_26621.fqn:null);
switch (G__26620_26622__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3913__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__26624){
var map__26625 = p__26624;
var map__26625__$1 = ((((!((map__26625 == null)))?(((((map__26625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26625):map__26625);
var arg = map__26625__$1;
var env = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__26627 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__26627__$1 = ((((!((map__26627 == null)))?(((((map__26627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26627):map__26627);
var name = cljs.core.get.call(null,map__26627__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__26629){
var map__26630 = p__26629;
var map__26630__$1 = ((((!((map__26630 == null)))?(((((map__26630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26630):map__26630);
var expr = cljs.core.get.call(null,map__26630__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__26630__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__26630__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__26632_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26632_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__26633){
var map__26634 = p__26633;
var map__26634__$1 = ((((!((map__26634 == null)))?(((((map__26634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26634):map__26634);
var env = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__26636){
var map__26637 = p__26636;
var map__26637__$1 = ((((!((map__26637 == null)))?(((((map__26637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26637):map__26637);
var items = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__26639){
var map__26640 = p__26639;
var map__26640__$1 = ((((!((map__26640 == null)))?(((((map__26640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26640):map__26640);
var items = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_26642 = cljs.core.count.call(null,items);
if((cnt_26642 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_26642,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__26643_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26643_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__26644){
var map__26645 = p__26644;
var map__26645__$1 = ((((!((map__26645 == null)))?(((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26645):map__26645);
var items = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__26647){
var map__26648 = p__26647;
var map__26648__$1 = ((((!((map__26648 == null)))?(((((map__26648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26648):map__26648);
var items = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___26666 = cljs.core.seq.call(null,items);
if(temp__5457__auto___26666){
var items_26667__$1 = temp__5457__auto___26666;
var vec__26650_26668 = items_26667__$1;
var seq__26651_26669 = cljs.core.seq.call(null,vec__26650_26668);
var first__26652_26670 = cljs.core.first.call(null,seq__26651_26669);
var seq__26651_26671__$1 = cljs.core.next.call(null,seq__26651_26669);
var vec__26653_26672 = first__26652_26670;
var k_26673 = cljs.core.nth.call(null,vec__26653_26672,(0),null);
var v_26674 = cljs.core.nth.call(null,vec__26653_26672,(1),null);
var r_26675 = seq__26651_26671__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_26673),"\": ",v_26674);

var seq__26656_26676 = cljs.core.seq.call(null,r_26675);
var chunk__26657_26677 = null;
var count__26658_26678 = (0);
var i__26659_26679 = (0);
while(true){
if((i__26659_26679 < count__26658_26678)){
var vec__26660_26680 = cljs.core._nth.call(null,chunk__26657_26677,i__26659_26679);
var k_26681__$1 = cljs.core.nth.call(null,vec__26660_26680,(0),null);
var v_26682__$1 = cljs.core.nth.call(null,vec__26660_26680,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26681__$1),"\": ",v_26682__$1);


var G__26683 = seq__26656_26676;
var G__26684 = chunk__26657_26677;
var G__26685 = count__26658_26678;
var G__26686 = (i__26659_26679 + (1));
seq__26656_26676 = G__26683;
chunk__26657_26677 = G__26684;
count__26658_26678 = G__26685;
i__26659_26679 = G__26686;
continue;
} else {
var temp__5457__auto___26687__$1 = cljs.core.seq.call(null,seq__26656_26676);
if(temp__5457__auto___26687__$1){
var seq__26656_26688__$1 = temp__5457__auto___26687__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26656_26688__$1)){
var c__4321__auto___26689 = cljs.core.chunk_first.call(null,seq__26656_26688__$1);
var G__26690 = cljs.core.chunk_rest.call(null,seq__26656_26688__$1);
var G__26691 = c__4321__auto___26689;
var G__26692 = cljs.core.count.call(null,c__4321__auto___26689);
var G__26693 = (0);
seq__26656_26676 = G__26690;
chunk__26657_26677 = G__26691;
count__26658_26678 = G__26692;
i__26659_26679 = G__26693;
continue;
} else {
var vec__26663_26694 = cljs.core.first.call(null,seq__26656_26688__$1);
var k_26695__$1 = cljs.core.nth.call(null,vec__26663_26694,(0),null);
var v_26696__$1 = cljs.core.nth.call(null,vec__26663_26694,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26695__$1),"\": ",v_26696__$1);


var G__26697 = cljs.core.next.call(null,seq__26656_26688__$1);
var G__26698 = null;
var G__26699 = (0);
var G__26700 = (0);
seq__26656_26676 = G__26697;
chunk__26657_26677 = G__26698;
count__26658_26678 = G__26699;
i__26659_26679 = G__26700;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__26701){
var map__26702 = p__26701;
var map__26702__$1 = ((((!((map__26702 == null)))?(((((map__26702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26702):map__26702);
var items = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__26704){
var map__26705 = p__26704;
var map__26705__$1 = ((((!((map__26705 == null)))?(((((map__26705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26705):map__26705);
var form = cljs.core.get.call(null,map__26705__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__26705__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__26707){
var map__26708 = p__26707;
var map__26708__$1 = ((((!((map__26708 == null)))?(((((map__26708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26708):map__26708);
var op = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3924__auto__ = (function (){var and__3913__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3913__auto__){
var and__3913__auto____$1 = form;
if(cljs.core.truth_(and__3913__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
})();
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var and__3913__auto__ = !((const_expr == null));
if(and__3913__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3913__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__26710){
var map__26711 = p__26710;
var map__26711__$1 = ((((!((map__26711 == null)))?(((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var op = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3924__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3924__auto__){
return or__3924__auto__;
} else {
var and__3913__auto__ = !((const_expr == null));
if(and__3913__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3913__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3924__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__26713){
var map__26714 = p__26713;
var map__26714__$1 = ((((!((map__26714 == null)))?(((((map__26714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26714):map__26714);
var test = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__26714__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3924__auto__ = unchecked;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__26716){
var map__26717 = p__26716;
var map__26717__$1 = ((((!((map__26717 == null)))?(((((map__26717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26717):map__26717);
var v = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__26719_26737 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__26720_26738 = null;
var count__26721_26739 = (0);
var i__26722_26740 = (0);
while(true){
if((i__26722_26740 < count__26721_26739)){
var vec__26723_26741 = cljs.core._nth.call(null,chunk__26720_26738,i__26722_26740);
var ts_26742 = cljs.core.nth.call(null,vec__26723_26741,(0),null);
var then_26743 = cljs.core.nth.call(null,vec__26723_26741,(1),null);
var seq__26726_26744 = cljs.core.seq.call(null,ts_26742);
var chunk__26727_26745 = null;
var count__26728_26746 = (0);
var i__26729_26747 = (0);
while(true){
if((i__26729_26747 < count__26728_26746)){
var test_26748 = cljs.core._nth.call(null,chunk__26727_26745,i__26729_26747);
cljs.compiler.emitln.call(null,"case ",test_26748,":");


var G__26749 = seq__26726_26744;
var G__26750 = chunk__26727_26745;
var G__26751 = count__26728_26746;
var G__26752 = (i__26729_26747 + (1));
seq__26726_26744 = G__26749;
chunk__26727_26745 = G__26750;
count__26728_26746 = G__26751;
i__26729_26747 = G__26752;
continue;
} else {
var temp__5457__auto___26753 = cljs.core.seq.call(null,seq__26726_26744);
if(temp__5457__auto___26753){
var seq__26726_26754__$1 = temp__5457__auto___26753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26726_26754__$1)){
var c__4321__auto___26755 = cljs.core.chunk_first.call(null,seq__26726_26754__$1);
var G__26756 = cljs.core.chunk_rest.call(null,seq__26726_26754__$1);
var G__26757 = c__4321__auto___26755;
var G__26758 = cljs.core.count.call(null,c__4321__auto___26755);
var G__26759 = (0);
seq__26726_26744 = G__26756;
chunk__26727_26745 = G__26757;
count__26728_26746 = G__26758;
i__26729_26747 = G__26759;
continue;
} else {
var test_26760 = cljs.core.first.call(null,seq__26726_26754__$1);
cljs.compiler.emitln.call(null,"case ",test_26760,":");


var G__26761 = cljs.core.next.call(null,seq__26726_26754__$1);
var G__26762 = null;
var G__26763 = (0);
var G__26764 = (0);
seq__26726_26744 = G__26761;
chunk__26727_26745 = G__26762;
count__26728_26746 = G__26763;
i__26729_26747 = G__26764;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26743);
} else {
cljs.compiler.emitln.call(null,then_26743);
}

cljs.compiler.emitln.call(null,"break;");


var G__26765 = seq__26719_26737;
var G__26766 = chunk__26720_26738;
var G__26767 = count__26721_26739;
var G__26768 = (i__26722_26740 + (1));
seq__26719_26737 = G__26765;
chunk__26720_26738 = G__26766;
count__26721_26739 = G__26767;
i__26722_26740 = G__26768;
continue;
} else {
var temp__5457__auto___26769 = cljs.core.seq.call(null,seq__26719_26737);
if(temp__5457__auto___26769){
var seq__26719_26770__$1 = temp__5457__auto___26769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26719_26770__$1)){
var c__4321__auto___26771 = cljs.core.chunk_first.call(null,seq__26719_26770__$1);
var G__26772 = cljs.core.chunk_rest.call(null,seq__26719_26770__$1);
var G__26773 = c__4321__auto___26771;
var G__26774 = cljs.core.count.call(null,c__4321__auto___26771);
var G__26775 = (0);
seq__26719_26737 = G__26772;
chunk__26720_26738 = G__26773;
count__26721_26739 = G__26774;
i__26722_26740 = G__26775;
continue;
} else {
var vec__26730_26776 = cljs.core.first.call(null,seq__26719_26770__$1);
var ts_26777 = cljs.core.nth.call(null,vec__26730_26776,(0),null);
var then_26778 = cljs.core.nth.call(null,vec__26730_26776,(1),null);
var seq__26733_26779 = cljs.core.seq.call(null,ts_26777);
var chunk__26734_26780 = null;
var count__26735_26781 = (0);
var i__26736_26782 = (0);
while(true){
if((i__26736_26782 < count__26735_26781)){
var test_26783 = cljs.core._nth.call(null,chunk__26734_26780,i__26736_26782);
cljs.compiler.emitln.call(null,"case ",test_26783,":");


var G__26784 = seq__26733_26779;
var G__26785 = chunk__26734_26780;
var G__26786 = count__26735_26781;
var G__26787 = (i__26736_26782 + (1));
seq__26733_26779 = G__26784;
chunk__26734_26780 = G__26785;
count__26735_26781 = G__26786;
i__26736_26782 = G__26787;
continue;
} else {
var temp__5457__auto___26788__$1 = cljs.core.seq.call(null,seq__26733_26779);
if(temp__5457__auto___26788__$1){
var seq__26733_26789__$1 = temp__5457__auto___26788__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26733_26789__$1)){
var c__4321__auto___26790 = cljs.core.chunk_first.call(null,seq__26733_26789__$1);
var G__26791 = cljs.core.chunk_rest.call(null,seq__26733_26789__$1);
var G__26792 = c__4321__auto___26790;
var G__26793 = cljs.core.count.call(null,c__4321__auto___26790);
var G__26794 = (0);
seq__26733_26779 = G__26791;
chunk__26734_26780 = G__26792;
count__26735_26781 = G__26793;
i__26736_26782 = G__26794;
continue;
} else {
var test_26795 = cljs.core.first.call(null,seq__26733_26789__$1);
cljs.compiler.emitln.call(null,"case ",test_26795,":");


var G__26796 = cljs.core.next.call(null,seq__26733_26789__$1);
var G__26797 = null;
var G__26798 = (0);
var G__26799 = (0);
seq__26733_26779 = G__26796;
chunk__26734_26780 = G__26797;
count__26735_26781 = G__26798;
i__26736_26782 = G__26799;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26778);
} else {
cljs.compiler.emitln.call(null,then_26778);
}

cljs.compiler.emitln.call(null,"break;");


var G__26800 = cljs.core.next.call(null,seq__26719_26770__$1);
var G__26801 = null;
var G__26802 = (0);
var G__26803 = (0);
seq__26719_26737 = G__26800;
chunk__26720_26738 = G__26801;
count__26721_26739 = G__26802;
i__26722_26740 = G__26803;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__26804){
var map__26805 = p__26804;
var map__26805__$1 = ((((!((map__26805 == null)))?(((((map__26805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805):map__26805);
var throw$ = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__26808 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__26808,(0),null);
var rstr = cljs.core.nth.call(null,vec__26808,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__26808,fstr,rstr,ret_t,axstr){
return (function (p1__26807_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26807_SHARP_);
});})(idx,vec__26808,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__26811 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26811),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__26811;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__26812_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26812_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__26813 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26814 = cljs.core.seq.call(null,vec__26813);
var first__26815 = cljs.core.first.call(null,seq__26814);
var seq__26814__$1 = cljs.core.next.call(null,seq__26814);
var p = first__26815;
var first__26815__$1 = cljs.core.first.call(null,seq__26814__$1);
var seq__26814__$2 = cljs.core.next.call(null,seq__26814__$1);
var ts = first__26815__$1;
var first__26815__$2 = cljs.core.first.call(null,seq__26814__$2);
var seq__26814__$3 = cljs.core.next.call(null,seq__26814__$2);
var n = first__26815__$2;
var xs = seq__26814__$3;
if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3913__auto__){
var and__3913__auto____$1 = ts;
if(cljs.core.truth_(and__3913__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__26816 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26817 = cljs.core.seq.call(null,vec__26816);
var first__26818 = cljs.core.first.call(null,seq__26817);
var seq__26817__$1 = cljs.core.next.call(null,seq__26817);
var p = first__26818;
var first__26818__$1 = cljs.core.first.call(null,seq__26817__$1);
var seq__26817__$2 = cljs.core.next.call(null,seq__26817__$1);
var ts = first__26818__$1;
var xs = seq__26817__$2;
if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3913__auto__){
var and__3913__auto____$1 = ts;
if(cljs.core.truth_(and__3913__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__26821 = arguments.length;
switch (G__26821) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__26829 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__26819_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__26819_SHARP_);
} else {
return p1__26819_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__26830 = cljs.core.seq.call(null,vec__26829);
var first__26831 = cljs.core.first.call(null,seq__26830);
var seq__26830__$1 = cljs.core.next.call(null,seq__26830);
var x = first__26831;
var ys = seq__26830__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__26832 = cljs.core.seq.call(null,ys);
var chunk__26833 = null;
var count__26834 = (0);
var i__26835 = (0);
while(true){
if((i__26835 < count__26834)){
var next_line = cljs.core._nth.call(null,chunk__26833,i__26835);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26841 = seq__26832;
var G__26842 = chunk__26833;
var G__26843 = count__26834;
var G__26844 = (i__26835 + (1));
seq__26832 = G__26841;
chunk__26833 = G__26842;
count__26834 = G__26843;
i__26835 = G__26844;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26832);
if(temp__5457__auto__){
var seq__26832__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26832__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__26832__$1);
var G__26845 = cljs.core.chunk_rest.call(null,seq__26832__$1);
var G__26846 = c__4321__auto__;
var G__26847 = cljs.core.count.call(null,c__4321__auto__);
var G__26848 = (0);
seq__26832 = G__26845;
chunk__26833 = G__26846;
count__26834 = G__26847;
i__26835 = G__26848;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__26832__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26849 = cljs.core.next.call(null,seq__26832__$1);
var G__26850 = null;
var G__26851 = (0);
var G__26852 = (0);
seq__26832 = G__26849;
chunk__26833 = G__26850;
count__26834 = G__26851;
i__26835 = G__26852;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__26836_26853 = cljs.core.seq.call(null,docs__$2);
var chunk__26837_26854 = null;
var count__26838_26855 = (0);
var i__26839_26856 = (0);
while(true){
if((i__26839_26856 < count__26838_26855)){
var e_26857 = cljs.core._nth.call(null,chunk__26837_26854,i__26839_26856);
if(cljs.core.truth_(e_26857)){
print_comment_lines.call(null,e_26857);
} else {
}


var G__26858 = seq__26836_26853;
var G__26859 = chunk__26837_26854;
var G__26860 = count__26838_26855;
var G__26861 = (i__26839_26856 + (1));
seq__26836_26853 = G__26858;
chunk__26837_26854 = G__26859;
count__26838_26855 = G__26860;
i__26839_26856 = G__26861;
continue;
} else {
var temp__5457__auto___26862 = cljs.core.seq.call(null,seq__26836_26853);
if(temp__5457__auto___26862){
var seq__26836_26863__$1 = temp__5457__auto___26862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26836_26863__$1)){
var c__4321__auto___26864 = cljs.core.chunk_first.call(null,seq__26836_26863__$1);
var G__26865 = cljs.core.chunk_rest.call(null,seq__26836_26863__$1);
var G__26866 = c__4321__auto___26864;
var G__26867 = cljs.core.count.call(null,c__4321__auto___26864);
var G__26868 = (0);
seq__26836_26853 = G__26865;
chunk__26837_26854 = G__26866;
count__26838_26855 = G__26867;
i__26839_26856 = G__26868;
continue;
} else {
var e_26869 = cljs.core.first.call(null,seq__26836_26863__$1);
if(cljs.core.truth_(e_26869)){
print_comment_lines.call(null,e_26869);
} else {
}


var G__26870 = cljs.core.next.call(null,seq__26836_26863__$1);
var G__26871 = null;
var G__26872 = (0);
var G__26873 = (0);
seq__26836_26853 = G__26870;
chunk__26837_26854 = G__26871;
count__26838_26855 = G__26872;
i__26839_26856 = G__26873;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3913__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__26875_SHARP_){
return goog.string.startsWith(p1__26875_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3913__auto__)){
var and__3913__auto____$1 = opts;
if(cljs.core.truth_(and__3913__auto____$1)){
var and__3913__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3913__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3913__auto____$2;
}
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__26876){
var map__26877 = p__26876;
var map__26877__$1 = ((((!((map__26877 == null)))?(((((map__26877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26877):map__26877);
var name = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3924__auto__ = init;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3913__auto__){
return test;
} else {
return and__3913__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26879){
var map__26880 = p__26879;
var map__26880__$1 = ((((!((map__26880 == null)))?(((((map__26880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var name = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__26882_26900 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__26883_26901 = null;
var count__26884_26902 = (0);
var i__26885_26903 = (0);
while(true){
if((i__26885_26903 < count__26884_26902)){
var vec__26886_26904 = cljs.core._nth.call(null,chunk__26883_26901,i__26885_26903);
var i_26905 = cljs.core.nth.call(null,vec__26886_26904,(0),null);
var param_26906 = cljs.core.nth.call(null,vec__26886_26904,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26906);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26907 = seq__26882_26900;
var G__26908 = chunk__26883_26901;
var G__26909 = count__26884_26902;
var G__26910 = (i__26885_26903 + (1));
seq__26882_26900 = G__26907;
chunk__26883_26901 = G__26908;
count__26884_26902 = G__26909;
i__26885_26903 = G__26910;
continue;
} else {
var temp__5457__auto___26911 = cljs.core.seq.call(null,seq__26882_26900);
if(temp__5457__auto___26911){
var seq__26882_26912__$1 = temp__5457__auto___26911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26882_26912__$1)){
var c__4321__auto___26913 = cljs.core.chunk_first.call(null,seq__26882_26912__$1);
var G__26914 = cljs.core.chunk_rest.call(null,seq__26882_26912__$1);
var G__26915 = c__4321__auto___26913;
var G__26916 = cljs.core.count.call(null,c__4321__auto___26913);
var G__26917 = (0);
seq__26882_26900 = G__26914;
chunk__26883_26901 = G__26915;
count__26884_26902 = G__26916;
i__26885_26903 = G__26917;
continue;
} else {
var vec__26889_26918 = cljs.core.first.call(null,seq__26882_26912__$1);
var i_26919 = cljs.core.nth.call(null,vec__26889_26918,(0),null);
var param_26920 = cljs.core.nth.call(null,vec__26889_26918,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26920);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26921 = cljs.core.next.call(null,seq__26882_26912__$1);
var G__26922 = null;
var G__26923 = (0);
var G__26924 = (0);
seq__26882_26900 = G__26921;
chunk__26883_26901 = G__26922;
count__26884_26902 = G__26923;
i__26885_26903 = G__26924;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__26892_26925 = cljs.core.seq.call(null,params);
var chunk__26893_26926 = null;
var count__26894_26927 = (0);
var i__26895_26928 = (0);
while(true){
if((i__26895_26928 < count__26894_26927)){
var param_26929 = cljs.core._nth.call(null,chunk__26893_26926,i__26895_26928);
cljs.compiler.emit.call(null,param_26929);

if(cljs.core._EQ_.call(null,param_26929,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26930 = seq__26892_26925;
var G__26931 = chunk__26893_26926;
var G__26932 = count__26894_26927;
var G__26933 = (i__26895_26928 + (1));
seq__26892_26925 = G__26930;
chunk__26893_26926 = G__26931;
count__26894_26927 = G__26932;
i__26895_26928 = G__26933;
continue;
} else {
var temp__5457__auto___26934 = cljs.core.seq.call(null,seq__26892_26925);
if(temp__5457__auto___26934){
var seq__26892_26935__$1 = temp__5457__auto___26934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26892_26935__$1)){
var c__4321__auto___26936 = cljs.core.chunk_first.call(null,seq__26892_26935__$1);
var G__26937 = cljs.core.chunk_rest.call(null,seq__26892_26935__$1);
var G__26938 = c__4321__auto___26936;
var G__26939 = cljs.core.count.call(null,c__4321__auto___26936);
var G__26940 = (0);
seq__26892_26925 = G__26937;
chunk__26893_26926 = G__26938;
count__26894_26927 = G__26939;
i__26895_26928 = G__26940;
continue;
} else {
var param_26941 = cljs.core.first.call(null,seq__26892_26935__$1);
cljs.compiler.emit.call(null,param_26941);

if(cljs.core._EQ_.call(null,param_26941,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26942 = cljs.core.next.call(null,seq__26892_26935__$1);
var G__26943 = null;
var G__26944 = (0);
var G__26945 = (0);
seq__26892_26925 = G__26942;
chunk__26893_26926 = G__26943;
count__26894_26927 = G__26944;
i__26895_26928 = G__26945;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__26896_26946 = cljs.core.seq.call(null,params);
var chunk__26897_26947 = null;
var count__26898_26948 = (0);
var i__26899_26949 = (0);
while(true){
if((i__26899_26949 < count__26898_26948)){
var param_26950 = cljs.core._nth.call(null,chunk__26897_26947,i__26899_26949);
cljs.compiler.emit.call(null,param_26950);

if(cljs.core._EQ_.call(null,param_26950,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26951 = seq__26896_26946;
var G__26952 = chunk__26897_26947;
var G__26953 = count__26898_26948;
var G__26954 = (i__26899_26949 + (1));
seq__26896_26946 = G__26951;
chunk__26897_26947 = G__26952;
count__26898_26948 = G__26953;
i__26899_26949 = G__26954;
continue;
} else {
var temp__5457__auto___26955 = cljs.core.seq.call(null,seq__26896_26946);
if(temp__5457__auto___26955){
var seq__26896_26956__$1 = temp__5457__auto___26955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26896_26956__$1)){
var c__4321__auto___26957 = cljs.core.chunk_first.call(null,seq__26896_26956__$1);
var G__26958 = cljs.core.chunk_rest.call(null,seq__26896_26956__$1);
var G__26959 = c__4321__auto___26957;
var G__26960 = cljs.core.count.call(null,c__4321__auto___26957);
var G__26961 = (0);
seq__26896_26946 = G__26958;
chunk__26897_26947 = G__26959;
count__26898_26948 = G__26960;
i__26899_26949 = G__26961;
continue;
} else {
var param_26962 = cljs.core.first.call(null,seq__26896_26956__$1);
cljs.compiler.emit.call(null,param_26962);

if(cljs.core._EQ_.call(null,param_26962,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26963 = cljs.core.next.call(null,seq__26896_26956__$1);
var G__26964 = null;
var G__26965 = (0);
var G__26966 = (0);
seq__26896_26946 = G__26963;
chunk__26897_26947 = G__26964;
count__26898_26948 = G__26965;
i__26899_26949 = G__26966;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__26967 = cljs.core.seq.call(null,params);
var chunk__26968 = null;
var count__26969 = (0);
var i__26970 = (0);
while(true){
if((i__26970 < count__26969)){
var param = cljs.core._nth.call(null,chunk__26968,i__26970);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26971 = seq__26967;
var G__26972 = chunk__26968;
var G__26973 = count__26969;
var G__26974 = (i__26970 + (1));
seq__26967 = G__26971;
chunk__26968 = G__26972;
count__26969 = G__26973;
i__26970 = G__26974;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26967);
if(temp__5457__auto__){
var seq__26967__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26967__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__26967__$1);
var G__26975 = cljs.core.chunk_rest.call(null,seq__26967__$1);
var G__26976 = c__4321__auto__;
var G__26977 = cljs.core.count.call(null,c__4321__auto__);
var G__26978 = (0);
seq__26967 = G__26975;
chunk__26968 = G__26976;
count__26969 = G__26977;
i__26970 = G__26978;
continue;
} else {
var param = cljs.core.first.call(null,seq__26967__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__26979 = cljs.core.next.call(null,seq__26967__$1);
var G__26980 = null;
var G__26981 = (0);
var G__26982 = (0);
seq__26967 = G__26979;
chunk__26968 = G__26980;
count__26969 = G__26981;
i__26970 = G__26982;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__26983){
var map__26984 = p__26983;
var map__26984__$1 = ((((!((map__26984 == null)))?(((((map__26984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var type = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__26986){
var map__26987 = p__26986;
var map__26987__$1 = ((((!((map__26987 == null)))?(((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var f = map__26987__$1;
var type = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_26997__$1 = (function (){var or__3924__auto__ = name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_26998 = cljs.compiler.munge.call(null,name_26997__$1);
var delegate_name_26999 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_26998),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_26999," = function (");

var seq__26989_27000 = cljs.core.seq.call(null,params);
var chunk__26990_27001 = null;
var count__26991_27002 = (0);
var i__26992_27003 = (0);
while(true){
if((i__26992_27003 < count__26991_27002)){
var param_27004 = cljs.core._nth.call(null,chunk__26990_27001,i__26992_27003);
cljs.compiler.emit.call(null,param_27004);

if(cljs.core._EQ_.call(null,param_27004,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27005 = seq__26989_27000;
var G__27006 = chunk__26990_27001;
var G__27007 = count__26991_27002;
var G__27008 = (i__26992_27003 + (1));
seq__26989_27000 = G__27005;
chunk__26990_27001 = G__27006;
count__26991_27002 = G__27007;
i__26992_27003 = G__27008;
continue;
} else {
var temp__5457__auto___27009 = cljs.core.seq.call(null,seq__26989_27000);
if(temp__5457__auto___27009){
var seq__26989_27010__$1 = temp__5457__auto___27009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26989_27010__$1)){
var c__4321__auto___27011 = cljs.core.chunk_first.call(null,seq__26989_27010__$1);
var G__27012 = cljs.core.chunk_rest.call(null,seq__26989_27010__$1);
var G__27013 = c__4321__auto___27011;
var G__27014 = cljs.core.count.call(null,c__4321__auto___27011);
var G__27015 = (0);
seq__26989_27000 = G__27012;
chunk__26990_27001 = G__27013;
count__26991_27002 = G__27014;
i__26992_27003 = G__27015;
continue;
} else {
var param_27016 = cljs.core.first.call(null,seq__26989_27010__$1);
cljs.compiler.emit.call(null,param_27016);

if(cljs.core._EQ_.call(null,param_27016,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27017 = cljs.core.next.call(null,seq__26989_27010__$1);
var G__27018 = null;
var G__27019 = (0);
var G__27020 = (0);
seq__26989_27000 = G__27017;
chunk__26990_27001 = G__27018;
count__26991_27002 = G__27019;
i__26992_27003 = G__27020;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_26998," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27021 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27021,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_26999,".call(this,");

var seq__26993_27022 = cljs.core.seq.call(null,params);
var chunk__26994_27023 = null;
var count__26995_27024 = (0);
var i__26996_27025 = (0);
while(true){
if((i__26996_27025 < count__26995_27024)){
var param_27026 = cljs.core._nth.call(null,chunk__26994_27023,i__26996_27025);
cljs.compiler.emit.call(null,param_27026);

if(cljs.core._EQ_.call(null,param_27026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27027 = seq__26993_27022;
var G__27028 = chunk__26994_27023;
var G__27029 = count__26995_27024;
var G__27030 = (i__26996_27025 + (1));
seq__26993_27022 = G__27027;
chunk__26994_27023 = G__27028;
count__26995_27024 = G__27029;
i__26996_27025 = G__27030;
continue;
} else {
var temp__5457__auto___27031 = cljs.core.seq.call(null,seq__26993_27022);
if(temp__5457__auto___27031){
var seq__26993_27032__$1 = temp__5457__auto___27031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26993_27032__$1)){
var c__4321__auto___27033 = cljs.core.chunk_first.call(null,seq__26993_27032__$1);
var G__27034 = cljs.core.chunk_rest.call(null,seq__26993_27032__$1);
var G__27035 = c__4321__auto___27033;
var G__27036 = cljs.core.count.call(null,c__4321__auto___27033);
var G__27037 = (0);
seq__26993_27022 = G__27034;
chunk__26994_27023 = G__27035;
count__26995_27024 = G__27036;
i__26996_27025 = G__27037;
continue;
} else {
var param_27038 = cljs.core.first.call(null,seq__26993_27032__$1);
cljs.compiler.emit.call(null,param_27038);

if(cljs.core._EQ_.call(null,param_27038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27039 = cljs.core.next.call(null,seq__26993_27032__$1);
var G__27040 = null;
var G__27041 = (0);
var G__27042 = (0);
seq__26993_27022 = G__27039;
chunk__26994_27023 = G__27040;
count__26995_27024 = G__27041;
i__26996_27025 = G__27042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_26998,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_26998,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_26997__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_26998,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_26999,";");

cljs.compiler.emitln.call(null,"return ",mname_26998,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27046){
var map__27047 = p__27046;
var map__27047__$1 = ((((!((map__27047 == null)))?(((((map__27047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27047):map__27047);
var name = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__27047__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27043_SHARP_){
var and__3913__auto__ = p1__27043_SHARP_;
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27043_SHARP_));
} else {
return and__3913__auto__;
}
});})(map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_27082__$1 = (function (){var or__3924__auto__ = name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27083 = cljs.compiler.munge.call(null,name_27082__$1);
var maxparams_27084 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27085 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27082__$1,mname_27083,maxparams_27084,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27083),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27082__$1,mname_27083,maxparams_27084,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_27086 = cljs.core.sort_by.call(null,((function (name_27082__$1,mname_27083,maxparams_27084,mmap_27085,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27044_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27044_SHARP_)));
});})(name_27082__$1,mname_27083,maxparams_27084,mmap_27085,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27085));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27083," = null;");

var seq__27049_27087 = cljs.core.seq.call(null,ms_27086);
var chunk__27050_27088 = null;
var count__27051_27089 = (0);
var i__27052_27090 = (0);
while(true){
if((i__27052_27090 < count__27051_27089)){
var vec__27053_27091 = cljs.core._nth.call(null,chunk__27050_27088,i__27052_27090);
var n_27092 = cljs.core.nth.call(null,vec__27053_27091,(0),null);
var meth_27093 = cljs.core.nth.call(null,vec__27053_27091,(1),null);
cljs.compiler.emits.call(null,"var ",n_27092," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27093))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27093);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27093);
}

cljs.compiler.emitln.call(null,";");


var G__27094 = seq__27049_27087;
var G__27095 = chunk__27050_27088;
var G__27096 = count__27051_27089;
var G__27097 = (i__27052_27090 + (1));
seq__27049_27087 = G__27094;
chunk__27050_27088 = G__27095;
count__27051_27089 = G__27096;
i__27052_27090 = G__27097;
continue;
} else {
var temp__5457__auto___27098 = cljs.core.seq.call(null,seq__27049_27087);
if(temp__5457__auto___27098){
var seq__27049_27099__$1 = temp__5457__auto___27098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27049_27099__$1)){
var c__4321__auto___27100 = cljs.core.chunk_first.call(null,seq__27049_27099__$1);
var G__27101 = cljs.core.chunk_rest.call(null,seq__27049_27099__$1);
var G__27102 = c__4321__auto___27100;
var G__27103 = cljs.core.count.call(null,c__4321__auto___27100);
var G__27104 = (0);
seq__27049_27087 = G__27101;
chunk__27050_27088 = G__27102;
count__27051_27089 = G__27103;
i__27052_27090 = G__27104;
continue;
} else {
var vec__27056_27105 = cljs.core.first.call(null,seq__27049_27099__$1);
var n_27106 = cljs.core.nth.call(null,vec__27056_27105,(0),null);
var meth_27107 = cljs.core.nth.call(null,vec__27056_27105,(1),null);
cljs.compiler.emits.call(null,"var ",n_27106," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27107))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27107);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27107);
}

cljs.compiler.emitln.call(null,";");


var G__27108 = cljs.core.next.call(null,seq__27049_27099__$1);
var G__27109 = null;
var G__27110 = (0);
var G__27111 = (0);
seq__27049_27087 = G__27108;
chunk__27050_27088 = G__27109;
count__27051_27089 = G__27110;
i__27052_27090 = G__27111;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27083," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27084)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27084));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27059_27112 = cljs.core.seq.call(null,ms_27086);
var chunk__27060_27113 = null;
var count__27061_27114 = (0);
var i__27062_27115 = (0);
while(true){
if((i__27062_27115 < count__27061_27114)){
var vec__27063_27116 = cljs.core._nth.call(null,chunk__27060_27113,i__27062_27115);
var n_27117 = cljs.core.nth.call(null,vec__27063_27116,(0),null);
var meth_27118 = cljs.core.nth.call(null,vec__27063_27116,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27118))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27119 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27119," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27120 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27119," = new cljs.core.IndexedSeq(",a_27120,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27117,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27084)),(((cljs.core.count.call(null,maxparams_27084) > (1)))?", ":null),restarg_27119,");");
} else {
var pcnt_27121 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27118));
cljs.compiler.emitln.call(null,"case ",pcnt_27121,":");

cljs.compiler.emitln.call(null,"return ",n_27117,".call(this",(((pcnt_27121 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27121,maxparams_27084)),null,(1),null)),(2),null))),");");
}


var G__27122 = seq__27059_27112;
var G__27123 = chunk__27060_27113;
var G__27124 = count__27061_27114;
var G__27125 = (i__27062_27115 + (1));
seq__27059_27112 = G__27122;
chunk__27060_27113 = G__27123;
count__27061_27114 = G__27124;
i__27062_27115 = G__27125;
continue;
} else {
var temp__5457__auto___27126 = cljs.core.seq.call(null,seq__27059_27112);
if(temp__5457__auto___27126){
var seq__27059_27127__$1 = temp__5457__auto___27126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27059_27127__$1)){
var c__4321__auto___27128 = cljs.core.chunk_first.call(null,seq__27059_27127__$1);
var G__27129 = cljs.core.chunk_rest.call(null,seq__27059_27127__$1);
var G__27130 = c__4321__auto___27128;
var G__27131 = cljs.core.count.call(null,c__4321__auto___27128);
var G__27132 = (0);
seq__27059_27112 = G__27129;
chunk__27060_27113 = G__27130;
count__27061_27114 = G__27131;
i__27062_27115 = G__27132;
continue;
} else {
var vec__27066_27133 = cljs.core.first.call(null,seq__27059_27127__$1);
var n_27134 = cljs.core.nth.call(null,vec__27066_27133,(0),null);
var meth_27135 = cljs.core.nth.call(null,vec__27066_27133,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27135))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27136 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27136," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27137 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27136," = new cljs.core.IndexedSeq(",a_27137,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27134,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27084)),(((cljs.core.count.call(null,maxparams_27084) > (1)))?", ":null),restarg_27136,");");
} else {
var pcnt_27138 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27135));
cljs.compiler.emitln.call(null,"case ",pcnt_27138,":");

cljs.compiler.emitln.call(null,"return ",n_27134,".call(this",(((pcnt_27138 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27138,maxparams_27084)),null,(1),null)),(2),null))),");");
}


var G__27139 = cljs.core.next.call(null,seq__27059_27127__$1);
var G__27140 = null;
var G__27141 = (0);
var G__27142 = (0);
seq__27059_27112 = G__27139;
chunk__27060_27113 = G__27140;
count__27061_27114 = G__27141;
i__27062_27115 = G__27142;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27083,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27083,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27082__$1,mname_27083,maxparams_27084,mmap_27085,ms_27086,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27045_SHARP_){
var vec__27069 = p1__27045_SHARP_;
var n = cljs.core.nth.call(null,vec__27069,(0),null);
var m = cljs.core.nth.call(null,vec__27069,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27082__$1,mname_27083,maxparams_27084,mmap_27085,ms_27086,loop_locals,map__27047,map__27047__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_27086),".cljs$lang$applyTo;");
} else {
}

var seq__27072_27143 = cljs.core.seq.call(null,ms_27086);
var chunk__27073_27144 = null;
var count__27074_27145 = (0);
var i__27075_27146 = (0);
while(true){
if((i__27075_27146 < count__27074_27145)){
var vec__27076_27147 = cljs.core._nth.call(null,chunk__27073_27144,i__27075_27146);
var n_27148 = cljs.core.nth.call(null,vec__27076_27147,(0),null);
var meth_27149 = cljs.core.nth.call(null,vec__27076_27147,(1),null);
var c_27150 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27149));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27149))){
cljs.compiler.emitln.call(null,mname_27083,".cljs$core$IFn$_invoke$arity$variadic = ",n_27148,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27083,".cljs$core$IFn$_invoke$arity$",c_27150," = ",n_27148,";");
}


var G__27151 = seq__27072_27143;
var G__27152 = chunk__27073_27144;
var G__27153 = count__27074_27145;
var G__27154 = (i__27075_27146 + (1));
seq__27072_27143 = G__27151;
chunk__27073_27144 = G__27152;
count__27074_27145 = G__27153;
i__27075_27146 = G__27154;
continue;
} else {
var temp__5457__auto___27155 = cljs.core.seq.call(null,seq__27072_27143);
if(temp__5457__auto___27155){
var seq__27072_27156__$1 = temp__5457__auto___27155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27072_27156__$1)){
var c__4321__auto___27157 = cljs.core.chunk_first.call(null,seq__27072_27156__$1);
var G__27158 = cljs.core.chunk_rest.call(null,seq__27072_27156__$1);
var G__27159 = c__4321__auto___27157;
var G__27160 = cljs.core.count.call(null,c__4321__auto___27157);
var G__27161 = (0);
seq__27072_27143 = G__27158;
chunk__27073_27144 = G__27159;
count__27074_27145 = G__27160;
i__27075_27146 = G__27161;
continue;
} else {
var vec__27079_27162 = cljs.core.first.call(null,seq__27072_27156__$1);
var n_27163 = cljs.core.nth.call(null,vec__27079_27162,(0),null);
var meth_27164 = cljs.core.nth.call(null,vec__27079_27162,(1),null);
var c_27165 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27164));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27164))){
cljs.compiler.emitln.call(null,mname_27083,".cljs$core$IFn$_invoke$arity$variadic = ",n_27163,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27083,".cljs$core$IFn$_invoke$arity$",c_27165," = ",n_27163,";");
}


var G__27166 = cljs.core.next.call(null,seq__27072_27156__$1);
var G__27167 = null;
var G__27168 = (0);
var G__27169 = (0);
seq__27072_27143 = G__27166;
chunk__27073_27144 = G__27167;
count__27074_27145 = G__27168;
i__27075_27146 = G__27169;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27083,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27170){
var map__27171 = p__27170;
var map__27171__$1 = ((((!((map__27171 == null)))?(((((map__27171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27171):map__27171);
var statements = cljs.core.get.call(null,map__27171__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27171__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27171__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3913__auto__ = statements;
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3913__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27173_27177 = cljs.core.seq.call(null,statements);
var chunk__27174_27178 = null;
var count__27175_27179 = (0);
var i__27176_27180 = (0);
while(true){
if((i__27176_27180 < count__27175_27179)){
var s_27181 = cljs.core._nth.call(null,chunk__27174_27178,i__27176_27180);
cljs.compiler.emitln.call(null,s_27181);


var G__27182 = seq__27173_27177;
var G__27183 = chunk__27174_27178;
var G__27184 = count__27175_27179;
var G__27185 = (i__27176_27180 + (1));
seq__27173_27177 = G__27182;
chunk__27174_27178 = G__27183;
count__27175_27179 = G__27184;
i__27176_27180 = G__27185;
continue;
} else {
var temp__5457__auto___27186 = cljs.core.seq.call(null,seq__27173_27177);
if(temp__5457__auto___27186){
var seq__27173_27187__$1 = temp__5457__auto___27186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27173_27187__$1)){
var c__4321__auto___27188 = cljs.core.chunk_first.call(null,seq__27173_27187__$1);
var G__27189 = cljs.core.chunk_rest.call(null,seq__27173_27187__$1);
var G__27190 = c__4321__auto___27188;
var G__27191 = cljs.core.count.call(null,c__4321__auto___27188);
var G__27192 = (0);
seq__27173_27177 = G__27189;
chunk__27174_27178 = G__27190;
count__27175_27179 = G__27191;
i__27176_27180 = G__27192;
continue;
} else {
var s_27193 = cljs.core.first.call(null,seq__27173_27187__$1);
cljs.compiler.emitln.call(null,s_27193);


var G__27194 = cljs.core.next.call(null,seq__27173_27187__$1);
var G__27195 = null;
var G__27196 = (0);
var G__27197 = (0);
seq__27173_27177 = G__27194;
chunk__27174_27178 = G__27195;
count__27175_27179 = G__27196;
i__27176_27180 = G__27197;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3913__auto__ = statements;
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3913__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27198){
var map__27199 = p__27198;
var map__27199__$1 = ((((!((map__27199 == null)))?(((((map__27199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27199):map__27199);
var env = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3924__auto__ = name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27201,is_loop){
var map__27202 = p__27201;
var map__27202__$1 = ((((!((map__27202 == null)))?(((((map__27202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27202):map__27202);
var bindings = cljs.core.get.call(null,map__27202__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__27202__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_27204_27213 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_27204_27213,context,map__27202,map__27202__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_27204_27213,context,map__27202,map__27202__$1,bindings,expr,env))
,bindings):null));

try{var seq__27205_27214 = cljs.core.seq.call(null,bindings);
var chunk__27206_27215 = null;
var count__27207_27216 = (0);
var i__27208_27217 = (0);
while(true){
if((i__27208_27217 < count__27207_27216)){
var map__27209_27218 = cljs.core._nth.call(null,chunk__27206_27215,i__27208_27217);
var map__27209_27219__$1 = ((((!((map__27209_27218 == null)))?(((((map__27209_27218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27209_27218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209_27218):map__27209_27218);
var binding_27220 = map__27209_27219__$1;
var init_27221 = cljs.core.get.call(null,map__27209_27219__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27220);

cljs.compiler.emitln.call(null," = ",init_27221,";");


var G__27222 = seq__27205_27214;
var G__27223 = chunk__27206_27215;
var G__27224 = count__27207_27216;
var G__27225 = (i__27208_27217 + (1));
seq__27205_27214 = G__27222;
chunk__27206_27215 = G__27223;
count__27207_27216 = G__27224;
i__27208_27217 = G__27225;
continue;
} else {
var temp__5457__auto___27226 = cljs.core.seq.call(null,seq__27205_27214);
if(temp__5457__auto___27226){
var seq__27205_27227__$1 = temp__5457__auto___27226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27205_27227__$1)){
var c__4321__auto___27228 = cljs.core.chunk_first.call(null,seq__27205_27227__$1);
var G__27229 = cljs.core.chunk_rest.call(null,seq__27205_27227__$1);
var G__27230 = c__4321__auto___27228;
var G__27231 = cljs.core.count.call(null,c__4321__auto___27228);
var G__27232 = (0);
seq__27205_27214 = G__27229;
chunk__27206_27215 = G__27230;
count__27207_27216 = G__27231;
i__27208_27217 = G__27232;
continue;
} else {
var map__27211_27233 = cljs.core.first.call(null,seq__27205_27227__$1);
var map__27211_27234__$1 = ((((!((map__27211_27233 == null)))?(((((map__27211_27233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211_27233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211_27233):map__27211_27233);
var binding_27235 = map__27211_27234__$1;
var init_27236 = cljs.core.get.call(null,map__27211_27234__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27235);

cljs.compiler.emitln.call(null," = ",init_27236,";");


var G__27237 = cljs.core.next.call(null,seq__27205_27227__$1);
var G__27238 = null;
var G__27239 = (0);
var G__27240 = (0);
seq__27205_27214 = G__27237;
chunk__27206_27215 = G__27238;
count__27207_27216 = G__27239;
i__27208_27217 = G__27240;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_27204_27213;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27241){
var map__27242 = p__27241;
var map__27242__$1 = ((((!((map__27242 == null)))?(((((map__27242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242):map__27242);
var frame = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4378__auto___27244 = cljs.core.count.call(null,exprs);
var i_27245 = (0);
while(true){
if((i_27245 < n__4378__auto___27244)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27245)," = ",exprs.call(null,i_27245),";");

var G__27246 = (i_27245 + (1));
i_27245 = G__27246;
continue;
} else {
}
break;
}

var n__4378__auto___27247 = cljs.core.count.call(null,exprs);
var i_27248 = (0);
while(true){
if((i_27248 < n__4378__auto___27247)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27248))," = ",temps.call(null,i_27248),";");

var G__27249 = (i_27248 + (1));
i_27248 = G__27249;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27250){
var map__27251 = p__27250;
var map__27251__$1 = ((((!((map__27251 == null)))?(((((map__27251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);
var bindings = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27253_27261 = cljs.core.seq.call(null,bindings);
var chunk__27254_27262 = null;
var count__27255_27263 = (0);
var i__27256_27264 = (0);
while(true){
if((i__27256_27264 < count__27255_27263)){
var map__27257_27265 = cljs.core._nth.call(null,chunk__27254_27262,i__27256_27264);
var map__27257_27266__$1 = ((((!((map__27257_27265 == null)))?(((((map__27257_27265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27257_27265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27257_27265):map__27257_27265);
var binding_27267 = map__27257_27266__$1;
var init_27268 = cljs.core.get.call(null,map__27257_27266__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27267)," = ",init_27268,";");


var G__27269 = seq__27253_27261;
var G__27270 = chunk__27254_27262;
var G__27271 = count__27255_27263;
var G__27272 = (i__27256_27264 + (1));
seq__27253_27261 = G__27269;
chunk__27254_27262 = G__27270;
count__27255_27263 = G__27271;
i__27256_27264 = G__27272;
continue;
} else {
var temp__5457__auto___27273 = cljs.core.seq.call(null,seq__27253_27261);
if(temp__5457__auto___27273){
var seq__27253_27274__$1 = temp__5457__auto___27273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27253_27274__$1)){
var c__4321__auto___27275 = cljs.core.chunk_first.call(null,seq__27253_27274__$1);
var G__27276 = cljs.core.chunk_rest.call(null,seq__27253_27274__$1);
var G__27277 = c__4321__auto___27275;
var G__27278 = cljs.core.count.call(null,c__4321__auto___27275);
var G__27279 = (0);
seq__27253_27261 = G__27276;
chunk__27254_27262 = G__27277;
count__27255_27263 = G__27278;
i__27256_27264 = G__27279;
continue;
} else {
var map__27259_27280 = cljs.core.first.call(null,seq__27253_27274__$1);
var map__27259_27281__$1 = ((((!((map__27259_27280 == null)))?(((((map__27259_27280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27259_27280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27259_27280):map__27259_27280);
var binding_27282 = map__27259_27281__$1;
var init_27283 = cljs.core.get.call(null,map__27259_27281__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27282)," = ",init_27283,";");


var G__27284 = cljs.core.next.call(null,seq__27253_27274__$1);
var G__27285 = null;
var G__27286 = (0);
var G__27287 = (0);
seq__27253_27261 = G__27284;
chunk__27254_27262 = G__27285;
count__27255_27263 = G__27286;
i__27256_27264 = G__27287;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__27290){
var map__27291 = p__27290;
var map__27291__$1 = ((((!((map__27291 == null)))?(((((map__27291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27291):map__27291);
var expr = map__27291__$1;
var f = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3913__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3913__auto__){
var and__3913__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3913__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3913__auto__ = protocol;
if(cljs.core.truth_(and__3913__auto__)){
var and__3913__auto____$1 = tag;
if(cljs.core.truth_(and__3913__auto____$1)){
var or__3924__auto__ = (function (){var and__3913__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3913__auto____$2){
var and__3913__auto____$3 = protocol;
if(cljs.core.truth_(and__3913__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3913__auto____$3;
}
} else {
return and__3913__auto____$2;
}
})();
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var and__3913__auto____$2 = (function (){var or__3924__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3924__auto____$1){
return or__3924__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3913__auto____$2)){
var or__3924__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3924__auto____$1){
return or__3924__auto____$1;
} else {
var and__3913__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3913__auto____$3){
var and__3913__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3913__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3913__auto____$4;
}
} else {
return and__3913__auto____$3;
}
}
} else {
return and__3913__auto____$2;
}
}
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3924__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3924__auto__){
return or__3924__auto__;
} else {
var or__3924__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3924__auto____$1)){
return or__3924__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__27293 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3913__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3913__auto__)){
return (arity > mfa);
} else {
return and__3913__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env){
return (function (p1__27288_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27288_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env){
return (function (p1__27289_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27289_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__27291,map__27291__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__27293,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__27293,(1),null);
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_27296 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_27296,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_27297 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_27297,args)),(((mfa_27297 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_27297,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3924__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var or__3924__auto____$1 = js_QMARK_;
if(or__3924__auto____$1){
return or__3924__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_27298 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_27298," ? ",f__$1,fprop_27298,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_27298," ? ",f__$1,fprop_27298,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__27299){
var map__27300 = p__27299;
var map__27300__$1 = ((((!((map__27300 == null)))?(((((map__27300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27300):map__27300);
var ctor = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__27302){
var map__27303 = p__27302;
var map__27303__$1 = ((((!((map__27303 == null)))?(((((map__27303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27303):map__27303);
var target = cljs.core.get.call(null,map__27303__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__27303__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__27303__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__27305 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27305__$1 = ((((!((map__27305 == null)))?(((((map__27305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27305):map__27305);
var options = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__27306 = options;
var map__27306__$1 = ((((!((map__27306 == null)))?(((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var target = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__27307 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__27313 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__27313__$1 = ((((!((map__27313 == null)))?(((((map__27313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27313):map__27313);
var node_libs = cljs.core.get.call(null,map__27313__$1,true);
var libs_to_load = cljs.core.get.call(null,map__27313__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__27307,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__27307,(1),null);
var map__27310 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__27310__$1 = ((((!((map__27310 == null)))?(((((map__27310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27310):map__27310);
var global_exports_libs = cljs.core.get.call(null,map__27310__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__27310__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__27316_27332 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__27317_27333 = null;
var count__27318_27334 = (0);
var i__27319_27335 = (0);
while(true){
if((i__27319_27335 < count__27318_27334)){
var lib_27336 = cljs.core._nth.call(null,chunk__27317_27333,i__27319_27335);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27336)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3924__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27336),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27336),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3924__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27336),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27336),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27336),"');");

}
}
}


var G__27337 = seq__27316_27332;
var G__27338 = chunk__27317_27333;
var G__27339 = count__27318_27334;
var G__27340 = (i__27319_27335 + (1));
seq__27316_27332 = G__27337;
chunk__27317_27333 = G__27338;
count__27318_27334 = G__27339;
i__27319_27335 = G__27340;
continue;
} else {
var temp__5457__auto___27341 = cljs.core.seq.call(null,seq__27316_27332);
if(temp__5457__auto___27341){
var seq__27316_27342__$1 = temp__5457__auto___27341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27316_27342__$1)){
var c__4321__auto___27343 = cljs.core.chunk_first.call(null,seq__27316_27342__$1);
var G__27344 = cljs.core.chunk_rest.call(null,seq__27316_27342__$1);
var G__27345 = c__4321__auto___27343;
var G__27346 = cljs.core.count.call(null,c__4321__auto___27343);
var G__27347 = (0);
seq__27316_27332 = G__27344;
chunk__27317_27333 = G__27345;
count__27318_27334 = G__27346;
i__27319_27335 = G__27347;
continue;
} else {
var lib_27348 = cljs.core.first.call(null,seq__27316_27342__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27348)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3924__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27348),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27348),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3924__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27348),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27348),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27348),"');");

}
}
}


var G__27349 = cljs.core.next.call(null,seq__27316_27342__$1);
var G__27350 = null;
var G__27351 = (0);
var G__27352 = (0);
seq__27316_27332 = G__27349;
chunk__27317_27333 = G__27350;
count__27318_27334 = G__27351;
i__27319_27335 = G__27352;
continue;
}
} else {
}
}
break;
}

var seq__27320_27353 = cljs.core.seq.call(null,node_libs);
var chunk__27321_27354 = null;
var count__27322_27355 = (0);
var i__27323_27356 = (0);
while(true){
if((i__27323_27356 < count__27322_27355)){
var lib_27357 = cljs.core._nth.call(null,chunk__27321_27354,i__27323_27356);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27357)," = require('",lib_27357,"');");


var G__27358 = seq__27320_27353;
var G__27359 = chunk__27321_27354;
var G__27360 = count__27322_27355;
var G__27361 = (i__27323_27356 + (1));
seq__27320_27353 = G__27358;
chunk__27321_27354 = G__27359;
count__27322_27355 = G__27360;
i__27323_27356 = G__27361;
continue;
} else {
var temp__5457__auto___27362 = cljs.core.seq.call(null,seq__27320_27353);
if(temp__5457__auto___27362){
var seq__27320_27363__$1 = temp__5457__auto___27362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27320_27363__$1)){
var c__4321__auto___27364 = cljs.core.chunk_first.call(null,seq__27320_27363__$1);
var G__27365 = cljs.core.chunk_rest.call(null,seq__27320_27363__$1);
var G__27366 = c__4321__auto___27364;
var G__27367 = cljs.core.count.call(null,c__4321__auto___27364);
var G__27368 = (0);
seq__27320_27353 = G__27365;
chunk__27321_27354 = G__27366;
count__27322_27355 = G__27367;
i__27323_27356 = G__27368;
continue;
} else {
var lib_27369 = cljs.core.first.call(null,seq__27320_27363__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27369)," = require('",lib_27369,"');");


var G__27370 = cljs.core.next.call(null,seq__27320_27363__$1);
var G__27371 = null;
var G__27372 = (0);
var G__27373 = (0);
seq__27320_27353 = G__27370;
chunk__27321_27354 = G__27371;
count__27322_27355 = G__27372;
i__27323_27356 = G__27373;
continue;
}
} else {
}
}
break;
}

var seq__27324_27374 = cljs.core.seq.call(null,global_exports_libs);
var chunk__27325_27375 = null;
var count__27326_27376 = (0);
var i__27327_27377 = (0);
while(true){
if((i__27327_27377 < count__27326_27376)){
var lib_27378 = cljs.core._nth.call(null,chunk__27325_27375,i__27327_27377);
var map__27328_27379 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_27378));
var map__27328_27380__$1 = ((((!((map__27328_27379 == null)))?(((((map__27328_27379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27328_27379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328_27379):map__27328_27379);
var global_exports_27381 = cljs.core.get.call(null,map__27328_27380__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_27378)," = goog.global.",cljs.core.get.call(null,global_exports_27381,cljs.core.symbol.call(null,lib_27378)),";");


var G__27382 = seq__27324_27374;
var G__27383 = chunk__27325_27375;
var G__27384 = count__27326_27376;
var G__27385 = (i__27327_27377 + (1));
seq__27324_27374 = G__27382;
chunk__27325_27375 = G__27383;
count__27326_27376 = G__27384;
i__27327_27377 = G__27385;
continue;
} else {
var temp__5457__auto___27386 = cljs.core.seq.call(null,seq__27324_27374);
if(temp__5457__auto___27386){
var seq__27324_27387__$1 = temp__5457__auto___27386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27324_27387__$1)){
var c__4321__auto___27388 = cljs.core.chunk_first.call(null,seq__27324_27387__$1);
var G__27389 = cljs.core.chunk_rest.call(null,seq__27324_27387__$1);
var G__27390 = c__4321__auto___27388;
var G__27391 = cljs.core.count.call(null,c__4321__auto___27388);
var G__27392 = (0);
seq__27324_27374 = G__27389;
chunk__27325_27375 = G__27390;
count__27326_27376 = G__27391;
i__27327_27377 = G__27392;
continue;
} else {
var lib_27393 = cljs.core.first.call(null,seq__27324_27387__$1);
var map__27330_27394 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_27393));
var map__27330_27395__$1 = ((((!((map__27330_27394 == null)))?(((((map__27330_27394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27330_27394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330_27394):map__27330_27394);
var global_exports_27396 = cljs.core.get.call(null,map__27330_27395__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_27393)," = goog.global.",cljs.core.get.call(null,global_exports_27396,cljs.core.symbol.call(null,lib_27393)),";");


var G__27397 = cljs.core.next.call(null,seq__27324_27387__$1);
var G__27398 = null;
var G__27399 = (0);
var G__27400 = (0);
seq__27324_27374 = G__27397;
chunk__27325_27375 = G__27398;
count__27326_27376 = G__27399;
i__27327_27377 = G__27400;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__27401){
var map__27402 = p__27401;
var map__27402__$1 = ((((!((map__27402 == null)))?(((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);
var name = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__27404){
var map__27405 = p__27404;
var map__27405__$1 = ((((!((map__27405 == null)))?(((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var name = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__27407){
var map__27408 = p__27407;
var map__27408__$1 = ((((!((map__27408 == null)))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var t = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27410_27428 = cljs.core.seq.call(null,protocols);
var chunk__27411_27429 = null;
var count__27412_27430 = (0);
var i__27413_27431 = (0);
while(true){
if((i__27413_27431 < count__27412_27430)){
var protocol_27432 = cljs.core._nth.call(null,chunk__27411_27429,i__27413_27431);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27432)].join('')),"}");


var G__27433 = seq__27410_27428;
var G__27434 = chunk__27411_27429;
var G__27435 = count__27412_27430;
var G__27436 = (i__27413_27431 + (1));
seq__27410_27428 = G__27433;
chunk__27411_27429 = G__27434;
count__27412_27430 = G__27435;
i__27413_27431 = G__27436;
continue;
} else {
var temp__5457__auto___27437 = cljs.core.seq.call(null,seq__27410_27428);
if(temp__5457__auto___27437){
var seq__27410_27438__$1 = temp__5457__auto___27437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27410_27438__$1)){
var c__4321__auto___27439 = cljs.core.chunk_first.call(null,seq__27410_27438__$1);
var G__27440 = cljs.core.chunk_rest.call(null,seq__27410_27438__$1);
var G__27441 = c__4321__auto___27439;
var G__27442 = cljs.core.count.call(null,c__4321__auto___27439);
var G__27443 = (0);
seq__27410_27428 = G__27440;
chunk__27411_27429 = G__27441;
count__27412_27430 = G__27442;
i__27413_27431 = G__27443;
continue;
} else {
var protocol_27444 = cljs.core.first.call(null,seq__27410_27438__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27444)].join('')),"}");


var G__27445 = cljs.core.next.call(null,seq__27410_27438__$1);
var G__27446 = null;
var G__27447 = (0);
var G__27448 = (0);
seq__27410_27428 = G__27445;
chunk__27411_27429 = G__27446;
count__27412_27430 = G__27447;
i__27413_27431 = G__27448;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27414_27449 = cljs.core.seq.call(null,fields__$1);
var chunk__27415_27450 = null;
var count__27416_27451 = (0);
var i__27417_27452 = (0);
while(true){
if((i__27417_27452 < count__27416_27451)){
var fld_27453 = cljs.core._nth.call(null,chunk__27415_27450,i__27417_27452);
cljs.compiler.emitln.call(null,"this.",fld_27453," = ",fld_27453,";");


var G__27454 = seq__27414_27449;
var G__27455 = chunk__27415_27450;
var G__27456 = count__27416_27451;
var G__27457 = (i__27417_27452 + (1));
seq__27414_27449 = G__27454;
chunk__27415_27450 = G__27455;
count__27416_27451 = G__27456;
i__27417_27452 = G__27457;
continue;
} else {
var temp__5457__auto___27458 = cljs.core.seq.call(null,seq__27414_27449);
if(temp__5457__auto___27458){
var seq__27414_27459__$1 = temp__5457__auto___27458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27414_27459__$1)){
var c__4321__auto___27460 = cljs.core.chunk_first.call(null,seq__27414_27459__$1);
var G__27461 = cljs.core.chunk_rest.call(null,seq__27414_27459__$1);
var G__27462 = c__4321__auto___27460;
var G__27463 = cljs.core.count.call(null,c__4321__auto___27460);
var G__27464 = (0);
seq__27414_27449 = G__27461;
chunk__27415_27450 = G__27462;
count__27416_27451 = G__27463;
i__27417_27452 = G__27464;
continue;
} else {
var fld_27465 = cljs.core.first.call(null,seq__27414_27459__$1);
cljs.compiler.emitln.call(null,"this.",fld_27465," = ",fld_27465,";");


var G__27466 = cljs.core.next.call(null,seq__27414_27459__$1);
var G__27467 = null;
var G__27468 = (0);
var G__27469 = (0);
seq__27414_27449 = G__27466;
chunk__27415_27450 = G__27467;
count__27416_27451 = G__27468;
i__27417_27452 = G__27469;
continue;
}
} else {
}
}
break;
}

var seq__27418_27470 = cljs.core.seq.call(null,pmasks);
var chunk__27419_27471 = null;
var count__27420_27472 = (0);
var i__27421_27473 = (0);
while(true){
if((i__27421_27473 < count__27420_27472)){
var vec__27422_27474 = cljs.core._nth.call(null,chunk__27419_27471,i__27421_27473);
var pno_27475 = cljs.core.nth.call(null,vec__27422_27474,(0),null);
var pmask_27476 = cljs.core.nth.call(null,vec__27422_27474,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27475,"$ = ",pmask_27476,";");


var G__27477 = seq__27418_27470;
var G__27478 = chunk__27419_27471;
var G__27479 = count__27420_27472;
var G__27480 = (i__27421_27473 + (1));
seq__27418_27470 = G__27477;
chunk__27419_27471 = G__27478;
count__27420_27472 = G__27479;
i__27421_27473 = G__27480;
continue;
} else {
var temp__5457__auto___27481 = cljs.core.seq.call(null,seq__27418_27470);
if(temp__5457__auto___27481){
var seq__27418_27482__$1 = temp__5457__auto___27481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27418_27482__$1)){
var c__4321__auto___27483 = cljs.core.chunk_first.call(null,seq__27418_27482__$1);
var G__27484 = cljs.core.chunk_rest.call(null,seq__27418_27482__$1);
var G__27485 = c__4321__auto___27483;
var G__27486 = cljs.core.count.call(null,c__4321__auto___27483);
var G__27487 = (0);
seq__27418_27470 = G__27484;
chunk__27419_27471 = G__27485;
count__27420_27472 = G__27486;
i__27421_27473 = G__27487;
continue;
} else {
var vec__27425_27488 = cljs.core.first.call(null,seq__27418_27482__$1);
var pno_27489 = cljs.core.nth.call(null,vec__27425_27488,(0),null);
var pmask_27490 = cljs.core.nth.call(null,vec__27425_27488,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27489,"$ = ",pmask_27490,";");


var G__27491 = cljs.core.next.call(null,seq__27418_27482__$1);
var G__27492 = null;
var G__27493 = (0);
var G__27494 = (0);
seq__27418_27470 = G__27491;
chunk__27419_27471 = G__27492;
count__27420_27472 = G__27493;
i__27421_27473 = G__27494;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__27495){
var map__27496 = p__27495;
var map__27496__$1 = ((((!((map__27496 == null)))?(((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var t = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27498_27516 = cljs.core.seq.call(null,protocols);
var chunk__27499_27517 = null;
var count__27500_27518 = (0);
var i__27501_27519 = (0);
while(true){
if((i__27501_27519 < count__27500_27518)){
var protocol_27520 = cljs.core._nth.call(null,chunk__27499_27517,i__27501_27519);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27520)].join('')),"}");


var G__27521 = seq__27498_27516;
var G__27522 = chunk__27499_27517;
var G__27523 = count__27500_27518;
var G__27524 = (i__27501_27519 + (1));
seq__27498_27516 = G__27521;
chunk__27499_27517 = G__27522;
count__27500_27518 = G__27523;
i__27501_27519 = G__27524;
continue;
} else {
var temp__5457__auto___27525 = cljs.core.seq.call(null,seq__27498_27516);
if(temp__5457__auto___27525){
var seq__27498_27526__$1 = temp__5457__auto___27525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27498_27526__$1)){
var c__4321__auto___27527 = cljs.core.chunk_first.call(null,seq__27498_27526__$1);
var G__27528 = cljs.core.chunk_rest.call(null,seq__27498_27526__$1);
var G__27529 = c__4321__auto___27527;
var G__27530 = cljs.core.count.call(null,c__4321__auto___27527);
var G__27531 = (0);
seq__27498_27516 = G__27528;
chunk__27499_27517 = G__27529;
count__27500_27518 = G__27530;
i__27501_27519 = G__27531;
continue;
} else {
var protocol_27532 = cljs.core.first.call(null,seq__27498_27526__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27532)].join('')),"}");


var G__27533 = cljs.core.next.call(null,seq__27498_27526__$1);
var G__27534 = null;
var G__27535 = (0);
var G__27536 = (0);
seq__27498_27516 = G__27533;
chunk__27499_27517 = G__27534;
count__27500_27518 = G__27535;
i__27501_27519 = G__27536;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27502_27537 = cljs.core.seq.call(null,fields__$1);
var chunk__27503_27538 = null;
var count__27504_27539 = (0);
var i__27505_27540 = (0);
while(true){
if((i__27505_27540 < count__27504_27539)){
var fld_27541 = cljs.core._nth.call(null,chunk__27503_27538,i__27505_27540);
cljs.compiler.emitln.call(null,"this.",fld_27541," = ",fld_27541,";");


var G__27542 = seq__27502_27537;
var G__27543 = chunk__27503_27538;
var G__27544 = count__27504_27539;
var G__27545 = (i__27505_27540 + (1));
seq__27502_27537 = G__27542;
chunk__27503_27538 = G__27543;
count__27504_27539 = G__27544;
i__27505_27540 = G__27545;
continue;
} else {
var temp__5457__auto___27546 = cljs.core.seq.call(null,seq__27502_27537);
if(temp__5457__auto___27546){
var seq__27502_27547__$1 = temp__5457__auto___27546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27502_27547__$1)){
var c__4321__auto___27548 = cljs.core.chunk_first.call(null,seq__27502_27547__$1);
var G__27549 = cljs.core.chunk_rest.call(null,seq__27502_27547__$1);
var G__27550 = c__4321__auto___27548;
var G__27551 = cljs.core.count.call(null,c__4321__auto___27548);
var G__27552 = (0);
seq__27502_27537 = G__27549;
chunk__27503_27538 = G__27550;
count__27504_27539 = G__27551;
i__27505_27540 = G__27552;
continue;
} else {
var fld_27553 = cljs.core.first.call(null,seq__27502_27547__$1);
cljs.compiler.emitln.call(null,"this.",fld_27553," = ",fld_27553,";");


var G__27554 = cljs.core.next.call(null,seq__27502_27547__$1);
var G__27555 = null;
var G__27556 = (0);
var G__27557 = (0);
seq__27502_27537 = G__27554;
chunk__27503_27538 = G__27555;
count__27504_27539 = G__27556;
i__27505_27540 = G__27557;
continue;
}
} else {
}
}
break;
}

var seq__27506_27558 = cljs.core.seq.call(null,pmasks);
var chunk__27507_27559 = null;
var count__27508_27560 = (0);
var i__27509_27561 = (0);
while(true){
if((i__27509_27561 < count__27508_27560)){
var vec__27510_27562 = cljs.core._nth.call(null,chunk__27507_27559,i__27509_27561);
var pno_27563 = cljs.core.nth.call(null,vec__27510_27562,(0),null);
var pmask_27564 = cljs.core.nth.call(null,vec__27510_27562,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27563,"$ = ",pmask_27564,";");


var G__27565 = seq__27506_27558;
var G__27566 = chunk__27507_27559;
var G__27567 = count__27508_27560;
var G__27568 = (i__27509_27561 + (1));
seq__27506_27558 = G__27565;
chunk__27507_27559 = G__27566;
count__27508_27560 = G__27567;
i__27509_27561 = G__27568;
continue;
} else {
var temp__5457__auto___27569 = cljs.core.seq.call(null,seq__27506_27558);
if(temp__5457__auto___27569){
var seq__27506_27570__$1 = temp__5457__auto___27569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27506_27570__$1)){
var c__4321__auto___27571 = cljs.core.chunk_first.call(null,seq__27506_27570__$1);
var G__27572 = cljs.core.chunk_rest.call(null,seq__27506_27570__$1);
var G__27573 = c__4321__auto___27571;
var G__27574 = cljs.core.count.call(null,c__4321__auto___27571);
var G__27575 = (0);
seq__27506_27558 = G__27572;
chunk__27507_27559 = G__27573;
count__27508_27560 = G__27574;
i__27509_27561 = G__27575;
continue;
} else {
var vec__27513_27576 = cljs.core.first.call(null,seq__27506_27570__$1);
var pno_27577 = cljs.core.nth.call(null,vec__27513_27576,(0),null);
var pmask_27578 = cljs.core.nth.call(null,vec__27513_27576,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27577,"$ = ",pmask_27578,";");


var G__27579 = cljs.core.next.call(null,seq__27506_27570__$1);
var G__27580 = null;
var G__27581 = (0);
var G__27582 = (0);
seq__27506_27558 = G__27579;
chunk__27507_27559 = G__27580;
count__27508_27560 = G__27581;
i__27509_27561 = G__27582;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__27583){
var map__27584 = p__27583;
var map__27584__$1 = ((((!((map__27584 == null)))?(((((map__27584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27584):map__27584);
var target = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__27586){
var map__27587 = p__27586;
var map__27587__$1 = ((((!((map__27587 == null)))?(((((map__27587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);
var op = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3913__auto__ = code;
if(cljs.core.truth_(and__3913__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3913__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__25374__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__25374__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__27592 = cljs.core.seq.call(null,table);
var chunk__27593 = null;
var count__27594 = (0);
var i__27595 = (0);
while(true){
if((i__27595 < count__27594)){
var vec__27596 = cljs.core._nth.call(null,chunk__27593,i__27595);
var sym = cljs.core.nth.call(null,vec__27596,(0),null);
var value = cljs.core.nth.call(null,vec__27596,(1),null);
var ns_27602 = cljs.core.namespace.call(null,sym);
var name_27603 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__27604 = seq__27592;
var G__27605 = chunk__27593;
var G__27606 = count__27594;
var G__27607 = (i__27595 + (1));
seq__27592 = G__27604;
chunk__27593 = G__27605;
count__27594 = G__27606;
i__27595 = G__27607;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27592);
if(temp__5457__auto__){
var seq__27592__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27592__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__27592__$1);
var G__27608 = cljs.core.chunk_rest.call(null,seq__27592__$1);
var G__27609 = c__4321__auto__;
var G__27610 = cljs.core.count.call(null,c__4321__auto__);
var G__27611 = (0);
seq__27592 = G__27608;
chunk__27593 = G__27609;
count__27594 = G__27610;
i__27595 = G__27611;
continue;
} else {
var vec__27599 = cljs.core.first.call(null,seq__27592__$1);
var sym = cljs.core.nth.call(null,vec__27599,(0),null);
var value = cljs.core.nth.call(null,vec__27599,(1),null);
var ns_27612 = cljs.core.namespace.call(null,sym);
var name_27613 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__27614 = cljs.core.next.call(null,seq__27592__$1);
var G__27615 = null;
var G__27616 = (0);
var G__27617 = (0);
seq__27592 = G__27614;
chunk__27593 = G__27615;
count__27594 = G__27616;
i__27595 = G__27617;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__27619 = arguments.length;
switch (G__27619) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_27624 = cljs.core.first.call(null,ks);
var vec__27620_27625 = cljs.core.conj.call(null,prefix,k_27624);
var top_27626 = cljs.core.nth.call(null,vec__27620_27625,(0),null);
var prefix_SINGLEQUOTE__27627 = vec__27620_27625;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_27624)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__27627) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_27626)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_27626))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27627)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_27626);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27627)),";");
}
} else {
}

var m_27628 = cljs.core.get.call(null,externs,k_27624);
if(cljs.core.empty_QMARK_.call(null,m_27628)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__27627,m_27628,top_level,known_externs);
}

var G__27629 = cljs.core.next.call(null,ks);
ks = G__27629;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1525291308194
