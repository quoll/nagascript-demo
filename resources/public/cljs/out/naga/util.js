// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('cljs.js');
var ufv___31462 = schema.utils.use_fn_validation;
var output_schema31448_31463 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
var input_schema31449_31464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"valfn","valfn",-260159948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_schema31454_31465 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"valfn","valfn",-260159948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker31450_31466 = (new cljs.core.Delay(((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465){
return (function (){
return schema.core.checker.call(null,input_schema31449_31464);
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465))
,null));
var output_checker31451_31467 = (new cljs.core.Delay(((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466){
return (function (){
return schema.core.checker.call(null,output_schema31448_31463);
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466))
,null));
var input_checker31455_31468 = (new cljs.core.Delay(((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467){
return (function (){
return schema.core.checker.call(null,input_schema31454_31465);
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467))
,null));
var output_checker31456_31469 = (new cljs.core.Delay(((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468){
return (function (){
return schema.core.checker.call(null,output_schema31448_31463);
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468))
,null));
var ret__2067__auto___31470 = (function (){
/**
 * Inputs: ([valfn :- (=> s/Any s/Any) s :- [s/Any]] [keyfn :- (=> s/Any s/Any) valfn :- (=> s/Any s/Any) s :- [s/Any]])
 *   Returns: #:s{Any s/Any}
 * 
 *   Creates a map from functions applied to a seq.
 * (map (partial * 2) [1 2 3 4 5])
 *   => {1 2, 2 4, 3 6, 4 8, 5 10}
 * (map #(keyword (str "k" (dec %))) (partial * 3) [1 2 3])
 *   => {:k0 3, :k1 6, :k2 9}
 */
naga.util.mapmap = ((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469){
return (function naga$util$mapmap(var_args){
var G__31461 = arguments.length;
switch (G__31461) {
case 2:
return naga.util.mapmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return naga.util.mapmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469))
;

naga.util.mapmap.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469){
return (function (G__31452,G__31453){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31462);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31452,G__31453], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),input_schema31449_31464,cljs.core.deref.call(null,input_checker31450_31466),args__657__auto___31472);
} else {
var temp__5457__auto___31473 = cljs.core.deref.call(null,input_checker31450_31466).call(null,args__657__auto___31472);
if(cljs.core.truth_(temp__5457__auto___31473)){
var error__658__auto___31474 = temp__5457__auto___31473;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),cljs.core.pr_str.call(null,error__658__auto___31474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31449_31464,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31472,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31474], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var valfn = G__31452;
var s = G__31453;
while(true){
return naga.util.mapmap.call(null,cljs.core.identity,valfn,s);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),output_schema31448_31463,cljs.core.deref.call(null,output_checker31451_31467),o__659__auto__);
} else {
var temp__5457__auto___31475 = cljs.core.deref.call(null,output_checker31451_31467).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31475)){
var error__658__auto___31476 = temp__5457__auto___31475;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),cljs.core.pr_str.call(null,error__658__auto___31476)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31448_31463,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31476], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469))
;

naga.util.mapmap.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469){
return (function (G__31457,G__31458,G__31459){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31462);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31477 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31457,G__31458,G__31459], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),input_schema31454_31465,cljs.core.deref.call(null,input_checker31455_31468),args__657__auto___31477);
} else {
var temp__5457__auto___31478 = cljs.core.deref.call(null,input_checker31455_31468).call(null,args__657__auto___31477);
if(cljs.core.truth_(temp__5457__auto___31478)){
var error__658__auto___31479 = temp__5457__auto___31478;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),cljs.core.pr_str.call(null,error__658__auto___31479)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31454_31465,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31477,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31479], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var keyfn = G__31457;
var valfn = G__31458;
var s = G__31459;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,keyfn,valfn),s));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),output_schema31448_31463,cljs.core.deref.call(null,output_checker31456_31469),o__659__auto__);
} else {
var temp__5457__auto___31480 = cljs.core.deref.call(null,output_checker31456_31469).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31480)){
var error__658__auto___31481 = temp__5457__auto___31480;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mapmap","mapmap",899257856,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a map from functions applied to a seq.\n   (map (partial * 2) [1 2 3 4 5])\n     => {1 2, 2 4, 3 6, 4 8, 5 10}\n   (map #(keyword (str \"k\" (dec %))) (partial * 3) [1 2 3])\n     => {:k0 3, :k1 6, :k2 9}"], null)),cljs.core.pr_str.call(null,error__658__auto___31481)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31448_31463,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31481], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31462,output_schema31448_31463,input_schema31449_31464,input_schema31454_31465,input_checker31450_31466,output_checker31451_31467,input_checker31455_31468,output_checker31456_31469))
;

naga.util.mapmap.cljs$lang$maxFixedArity = 3;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.util.mapmap),schema.core.make_fn_schema.call(null,output_schema31448_31463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31449_31464,input_schema31454_31465], null)));

var ufv___31488 = schema.utils.use_fn_validation;
var output_schema31482_31489 = schema.core.maybe.call(null,cljs.core.Var);
var input_schema31483_31490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Symbol),cljs.core.with_meta(new cljs.core.Symbol(null,"kw","kw",-1496127594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","cond-pre","s/cond-pre",-923707600,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null))], null)))], null);
var input_checker31484_31491 = (new cljs.core.Delay(((function (ufv___31488,output_schema31482_31489,input_schema31483_31490){
return (function (){
return schema.core.checker.call(null,input_schema31483_31490);
});})(ufv___31488,output_schema31482_31489,input_schema31483_31490))
,null));
var output_checker31485_31492 = (new cljs.core.Delay(((function (ufv___31488,output_schema31482_31489,input_schema31483_31490,input_checker31484_31491){
return (function (){
return schema.core.checker.call(null,output_schema31482_31489);
});})(ufv___31488,output_schema31482_31489,input_schema31483_31490,input_checker31484_31491))
,null));
var ret__2067__auto___31493 = /**
 * Inputs: [kw :- (s/cond-pre s/Keyword s/Symbol)]
 *   Returns: (s/maybe Var)
 * 
 *   Looks up a namespace:name function represented in a keyword,
 *    and if it exists, return it. Otherwise nil
 */
naga.util.get_fn_reference = ((function (ufv___31488,output_schema31482_31489,input_schema31483_31490,input_checker31484_31491,output_checker31485_31492){
return (function naga$util$get_fn_reference(G__31486){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31488);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31486], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"get-fn-reference","get-fn-reference",-1119053307,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Looks up a namespace:name function represented in a keyword,\n      and if it exists, return it. Otherwise nil"], null)),input_schema31483_31490,cljs.core.deref.call(null,input_checker31484_31491),args__657__auto___31494);
} else {
var temp__5457__auto___31495 = cljs.core.deref.call(null,input_checker31484_31491).call(null,args__657__auto___31494);
if(cljs.core.truth_(temp__5457__auto___31495)){
var error__658__auto___31496 = temp__5457__auto___31495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"get-fn-reference","get-fn-reference",-1119053307,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Looks up a namespace:name function represented in a keyword,\n      and if it exists, return it. Otherwise nil"], null)),cljs.core.pr_str.call(null,error__658__auto___31496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31483_31490,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31494,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31496], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var kw = G__31486;
while(true){
var temp__5457__auto__ = cljs.core.namespace.call(null,kw);
if(cljs.core.truth_(temp__5457__auto__)){
var nms = temp__5457__auto__;
if(cljs.core.truth_(cljs.core.find_ns.call(null,cljs.core.symbol.call(null,nms)))){
var snm = cljs.core.symbol.call(null,nms,cljs.core.name.call(null,kw));
try{return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.js.eval.call(null,cljs.js.empty_state.call(null),snm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),cljs.core.identity));
}catch (e31487){var _ = e31487;
return null;
}} else {
return null;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"get-fn-reference","get-fn-reference",-1119053307,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Looks up a namespace:name function represented in a keyword,\n      and if it exists, return it. Otherwise nil"], null)),output_schema31482_31489,cljs.core.deref.call(null,output_checker31485_31492),o__659__auto__);
} else {
var temp__5457__auto___31497 = cljs.core.deref.call(null,output_checker31485_31492).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31497)){
var error__658__auto___31498 = temp__5457__auto___31497;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"get-fn-reference","get-fn-reference",-1119053307,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Looks up a namespace:name function represented in a keyword,\n      and if it exists, return it. Otherwise nil"], null)),cljs.core.pr_str.call(null,error__658__auto___31498)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31482_31489,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31498], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31488,output_schema31482_31489,input_schema31483_31490,input_checker31484_31491,output_checker31485_31492))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.util.get_fn_reference),schema.core.__GT_FnSchema.call(null,output_schema31482_31489,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31483_31490], null)));

var ufv___31505 = schema.utils.use_fn_validation;
var output_schema31499_31506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null)], null);
var input_schema31500_31507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker31501_31508 = (new cljs.core.Delay(((function (ufv___31505,output_schema31499_31506,input_schema31500_31507){
return (function (){
return schema.core.checker.call(null,input_schema31500_31507);
});})(ufv___31505,output_schema31499_31506,input_schema31500_31507))
,null));
var output_checker31502_31509 = (new cljs.core.Delay(((function (ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508){
return (function (){
return schema.core.checker.call(null,output_schema31499_31506);
});})(ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508))
,null));
var ret__2067__auto___31510 = /**
 * Inputs: [p s :- [s/Any]]
 *   Returns: [[s/Any] [s/Any]]
 * 
 *   Takes a predicate and a sequence and returns 2 sequences.
 * The first is where the predicate returns true, and the second
 * is where the predicate returns false. Note that a nil value
 * will not be returned in either sequence, regardless of the
 * value returned by the predicate.
 */
naga.util.divide_SINGLEQUOTE_ = ((function (ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508,output_checker31502_31509){
return (function naga$util$divide_SINGLEQUOTE_(G__31503,G__31504){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31505);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31503,G__31504], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"divide'","divide'",-1188949686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a sequence and returns 2 sequences.\n   The first is where the predicate returns true, and the second\n   is where the predicate returns false. Note that a nil value\n   will not be returned in either sequence, regardless of the\n   value returned by the predicate."], null)),input_schema31500_31507,cljs.core.deref.call(null,input_checker31501_31508),args__657__auto___31511);
} else {
var temp__5457__auto___31512 = cljs.core.deref.call(null,input_checker31501_31508).call(null,args__657__auto___31511);
if(cljs.core.truth_(temp__5457__auto___31512)){
var error__658__auto___31513 = temp__5457__auto___31512;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"divide'","divide'",-1188949686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a sequence and returns 2 sequences.\n   The first is where the predicate returns true, and the second\n   is where the predicate returns false. Note that a nil value\n   will not be returned in either sequence, regardless of the\n   value returned by the predicate."], null)),cljs.core.pr_str.call(null,error__658__auto___31513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31500_31507,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31511,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31513], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var p = G__31503;
var s = G__31504;
while(true){
var d = cljs.core.map.call(null,((function (validate__656__auto__,ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508,output_checker31502_31509){
return (function (x){
if(cljs.core.truth_(p.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,x], null);
}
});})(validate__656__auto__,ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508,output_checker31502_31509))
,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keep.call(null,cljs.core.first,d),cljs.core.keep.call(null,cljs.core.second,d)], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"divide'","divide'",-1188949686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a sequence and returns 2 sequences.\n   The first is where the predicate returns true, and the second\n   is where the predicate returns false. Note that a nil value\n   will not be returned in either sequence, regardless of the\n   value returned by the predicate."], null)),output_schema31499_31506,cljs.core.deref.call(null,output_checker31502_31509),o__659__auto__);
} else {
var temp__5457__auto___31514 = cljs.core.deref.call(null,output_checker31502_31509).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31514)){
var error__658__auto___31515 = temp__5457__auto___31514;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"divide'","divide'",-1188949686,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a sequence and returns 2 sequences.\n   The first is where the predicate returns true, and the second\n   is where the predicate returns false. Note that a nil value\n   will not be returned in either sequence, regardless of the\n   value returned by the predicate."], null)),cljs.core.pr_str.call(null,error__658__auto___31515)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31499_31506,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31515], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31505,output_schema31499_31506,input_schema31500_31507,input_checker31501_31508,output_checker31502_31509))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.util.divide_SINGLEQUOTE_),schema.core.__GT_FnSchema.call(null,output_schema31499_31506,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31500_31507], null)));

/**
 * Applies the function f to the value a. The function is then,
 * and applied to the result, over and over, until the result does not change.
 * Returns the final result.
 * Note: If the function has no fixpoint, then runs forever.
 */
naga.util.fixpoint = (function naga$util$fixpoint(f,a){
var s = cljs.core.iterate.call(null,f,a);
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,((function (s){
return (function (p1__31516_SHARP_,p2__31517_SHARP_){
return cljs.core.PersistentHashSet.createAsIfByAssoc([p1__31516_SHARP_]).call(null,p2__31517_SHARP_);
});})(s))
,s,cljs.core.rest.call(null,s)));
});

//# sourceMappingURL=util.js.map?rel=1525291330346
