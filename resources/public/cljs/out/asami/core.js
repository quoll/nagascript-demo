// Compiled by ClojureScript 1.10.126 {}
goog.provide('asami.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('naga.schema.store_structs');
goog.require('naga.util');
goog.require('naga.storage.store_util');
goog.require('asami.index');
goog.require('naga.store');
goog.require('naga.store_registry');
goog.require('schema.core');
goog.require('cljs.core');

/**
 * @interface
 */
asami.core.Constraint = function(){};

/**
 * Returns a seq of the vars in a constraint
 */
asami.core.get_vars = (function asami$core$get_vars(c){
if(((!((c == null))) && (!((c.asami$core$Constraint$get_vars$arity$1 == null))))){
return c.asami$core$Constraint$get_vars$arity$1(c);
} else {
var x__4213__auto__ = (((c == null))?null:c);
var m__4214__auto__ = (asami.core.get_vars[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,c);
} else {
var m__4214__auto____$1 = (asami.core.get_vars["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,c);
} else {
throw cljs.core.missing_protocol.call(null,"Constraint.get-vars",c);
}
}
}
});

/**
 * Left joins a constraint onto a result. Arguments in reverse order to dispatch on constraint type
 */
asami.core.left_join = (function asami$core$left_join(c,r,g){
if(((!((c == null))) && (!((c.asami$core$Constraint$left_join$arity$3 == null))))){
return c.asami$core$Constraint$left_join$arity$3(c,r,g);
} else {
var x__4213__auto__ = (((c == null))?null:c);
var m__4214__auto__ = (asami.core.left_join[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,c,r,g);
} else {
var m__4214__auto____$1 = (asami.core.left_join["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,c,r,g);
} else {
throw cljs.core.missing_protocol.call(null,"Constraint.left-join",c);
}
}
}
});

var ufv___33475 = schema.utils.use_fn_validation;
var output_schema33469_33476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema33470_33477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker33471_33478 = (new cljs.core.Delay(((function (ufv___33475,output_schema33469_33476,input_schema33470_33477){
return (function (){
return schema.core.checker.call(null,input_schema33470_33477);
});})(ufv___33475,output_schema33469_33476,input_schema33470_33477))
,null));
var output_checker33472_33479 = (new cljs.core.Delay(((function (ufv___33475,output_schema33469_33476,input_schema33470_33477,input_checker33471_33478){
return (function (){
return schema.core.checker.call(null,output_schema33469_33476);
});})(ufv___33475,output_schema33469_33476,input_schema33470_33477,input_checker33471_33478))
,null));
var ret__2067__auto___33480 = /**
 * Inputs: [e :- s/Any s :- [s/Any]]
 *   Returns: [s/Any]
 * 
 *   Returns a sequence minus a specific element
 */
asami.core.without = ((function (ufv___33475,output_schema33469_33476,input_schema33470_33477,input_checker33471_33478,output_checker33472_33479){
return (function asami$core$without(G__33473,G__33474){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33475);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33473,G__33474], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"without","without",-1547399081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence minus a specific element"], null)),input_schema33470_33477,cljs.core.deref.call(null,input_checker33471_33478),args__657__auto___33481);
} else {
var temp__5457__auto___33482 = cljs.core.deref.call(null,input_checker33471_33478).call(null,args__657__auto___33481);
if(cljs.core.truth_(temp__5457__auto___33482)){
var error__658__auto___33483 = temp__5457__auto___33482;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"without","without",-1547399081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence minus a specific element"], null)),cljs.core.pr_str.call(null,error__658__auto___33483)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33470_33477,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33481,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33483], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var e = G__33473;
var s = G__33474;
while(true){
return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,e),s);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"without","without",-1547399081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence minus a specific element"], null)),output_schema33469_33476,cljs.core.deref.call(null,output_checker33472_33479),o__659__auto__);
} else {
var temp__5457__auto___33484 = cljs.core.deref.call(null,output_checker33472_33479).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33484)){
var error__658__auto___33485 = temp__5457__auto___33484;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"without","without",-1547399081,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence minus a specific element"], null)),cljs.core.pr_str.call(null,error__658__auto___33485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33469_33476,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33485], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33475,output_schema33469_33476,input_schema33470_33477,input_checker33471_33478,output_checker33472_33479))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.without),schema.core.__GT_FnSchema.call(null,output_schema33469_33476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33470_33477], null)));

var ufv___33493 = schema.utils.use_fn_validation;
var output_schema33487_33494 = naga.schema.store_structs.EPVPattern;
var input_schema33488_33495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-counts","pattern-counts",-458072420,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)))], null);
var input_checker33489_33496 = (new cljs.core.Delay(((function (ufv___33493,output_schema33487_33494,input_schema33488_33495){
return (function (){
return schema.core.checker.call(null,input_schema33488_33495);
});})(ufv___33493,output_schema33487_33494,input_schema33488_33495))
,null));
var output_checker33490_33497 = (new cljs.core.Delay(((function (ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496){
return (function (){
return schema.core.checker.call(null,output_schema33487_33494);
});})(ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496))
,null));
var ret__2067__auto___33498 = /**
 * Inputs: [pattern-counts :- {EPVPattern s/Num} patterns :- [EPVPattern]]
 *   Returns: EPVPattern
 * 
 *   Returns the first pattern with the smallest count
 */
asami.core.find_start = ((function (ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496,output_checker33490_33497){
return (function asami$core$find_start(G__33491,G__33492){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33493);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33491,G__33492], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"find-start","find-start",1155087664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the first pattern with the smallest count"], null)),input_schema33488_33495,cljs.core.deref.call(null,input_checker33489_33496),args__657__auto___33499);
} else {
var temp__5457__auto___33500 = cljs.core.deref.call(null,input_checker33489_33496).call(null,args__657__auto___33499);
if(cljs.core.truth_(temp__5457__auto___33500)){
var error__658__auto___33501 = temp__5457__auto___33500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"find-start","find-start",1155087664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the first pattern with the smallest count"], null)),cljs.core.pr_str.call(null,error__658__auto___33501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33488_33495,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33499,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33501], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var pattern_counts = G__33491;
var patterns = G__33492;
while(true){
var local_counts = cljs.core.select_keys.call(null,pattern_counts,patterns);
var low_count = cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,local_counts));
var pattern = cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (local_counts,low_count,validate__656__auto__,ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496,output_checker33490_33497){
return (function (p1__33486_SHARP_){
return cljs.core._EQ_.call(null,low_count,cljs.core.second.call(null,p1__33486_SHARP_));
});})(local_counts,low_count,validate__656__auto__,ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496,output_checker33490_33497))
,local_counts));
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,pattern),patterns));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"find-start","find-start",1155087664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the first pattern with the smallest count"], null)),output_schema33487_33494,cljs.core.deref.call(null,output_checker33490_33497),o__659__auto__);
} else {
var temp__5457__auto___33502 = cljs.core.deref.call(null,output_checker33490_33497).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33502)){
var error__658__auto___33503 = temp__5457__auto___33502;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"find-start","find-start",1155087664,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the first pattern with the smallest count"], null)),cljs.core.pr_str.call(null,error__658__auto___33503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33487_33494,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33503], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33493,output_schema33487_33494,input_schema33488_33495,input_checker33489_33496,output_checker33490_33497))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.find_start),schema.core.__GT_FnSchema.call(null,output_schema33487_33494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33488_33495], null)));

var ufv___33516 = schema.utils.use_fn_validation;
var output_schema33504_33517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null)], null);
var input_schema33505_33518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-counts","pattern-counts",-458072420,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null)))], null);
var input_checker33506_33519 = (new cljs.core.Delay(((function (ufv___33516,output_schema33504_33517,input_schema33505_33518){
return (function (){
return schema.core.checker.call(null,input_schema33505_33518);
});})(ufv___33516,output_schema33504_33517,input_schema33505_33518))
,null));
var output_checker33507_33520 = (new cljs.core.Delay(((function (ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519){
return (function (){
return schema.core.checker.call(null,output_schema33504_33517);
});})(ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519))
,null));
var ret__2067__auto___33521 = /**
 * Inputs: [patterns :- [EPVPattern] pattern-counts :- {EPVPattern s/Num}]
 *   Returns: [[EPVPattern]]
 * 
 *   Returns a seq of all paths through the constraints. A path is defined
 * by new patterns containing at least one variable common to the patterns
 * that appeared before it. Patterns must form a group.
 */
asami.core.paths = ((function (ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520){
return (function asami$core$paths(G__33508,G__33509){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33516);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33508,G__33509], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"paths","paths",-166858061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a seq of all paths through the constraints. A path is defined\n   by new patterns containing at least one variable common to the patterns\n   that appeared before it. Patterns must form a group."], null)),input_schema33505_33518,cljs.core.deref.call(null,input_checker33506_33519),args__657__auto___33522);
} else {
var temp__5457__auto___33523 = cljs.core.deref.call(null,input_checker33506_33519).call(null,args__657__auto___33522);
if(cljs.core.truth_(temp__5457__auto___33523)){
var error__658__auto___33524 = temp__5457__auto___33523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"paths","paths",-166858061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a seq of all paths through the constraints. A path is defined\n   by new patterns containing at least one variable common to the patterns\n   that appeared before it. Patterns must form a group."], null)),cljs.core.pr_str.call(null,error__658__auto___33524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33505_33518,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33522,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33524], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var patterns = G__33508;
var pattern_counts = G__33509;
while(true){
var remaining_paths = (function (){var ufv____$1 = schema.utils.use_fn_validation;
var output_schema33510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null)], null);
var input_schema33511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.Symbol]),cljs.core.with_meta(new cljs.core.Symbol(null,"bound","bound",-2066818599,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null),null], null), null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"rpatterns","rpatterns",788598861,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)))], null);
var input_checker33512 = (new cljs.core.Delay(((function (ufv____$1,output_schema33510,input_schema33511,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520){
return (function (){
return schema.core.checker.call(null,input_schema33511);
});})(ufv____$1,output_schema33510,input_schema33511,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520))
,null));
var output_checker33513 = (new cljs.core.Delay(((function (ufv____$1,output_schema33510,input_schema33511,input_checker33512,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520){
return (function (){
return schema.core.checker.call(null,output_schema33510);
});})(ufv____$1,output_schema33510,input_schema33511,input_checker33512,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520))
,null));
return schema.core.schematize_fn.call(null,((function (ufv____$1,output_schema33510,input_schema33511,input_checker33512,output_checker33513,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520){
return (function asami$core$paths_$_remaining_paths(G__33514,G__33515){
var validate__656__auto____$1 = cljs.core.deref.call(null,ufv____$1);
if(cljs.core.truth_(validate__656__auto____$1)){
var args__657__auto___33525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33514,G__33515], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"remaining-paths","remaining-paths",-1842973937,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)], null)),input_schema33511,cljs.core.deref.call(null,input_checker33512),args__657__auto___33525);
} else {
var temp__5457__auto___33526 = cljs.core.deref.call(null,input_checker33512).call(null,args__657__auto___33525);
if(cljs.core.truth_(temp__5457__auto___33526)){
var error__658__auto___33527 = temp__5457__auto___33526;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"remaining-paths","remaining-paths",-1842973937,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___33527)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33511,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33525,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33527], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var bound = G__33514;
var rpatterns = G__33515;
while(true){
if(cljs.core.seq.call(null,rpatterns)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep.call(null,((function (validate__656__auto____$1,ufv____$1,output_schema33510,input_schema33511,input_checker33512,output_checker33513,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520){
return (function (p){
var b = asami.core.get_vars.call(null,p);
if(((cljs.core.empty_QMARK_.call(null,bound)) || (cljs.core.seq.call(null,clojure.set.intersection.call(null,b,bound))))){
var remaining = asami.core.without.call(null,p,rpatterns);
if(cljs.core.seq.call(null,remaining)){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,p),cljs.core.seq.call(null,asami$core$paths_$_remaining_paths.call(null,cljs.core.into.call(null,bound,b),remaining)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null)], null);
}
} else {
return null;
}
});})(validate__656__auto____$1,ufv____$1,output_schema33510,input_schema33511,input_checker33512,output_checker33513,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520))
,rpatterns));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto____$1)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"remaining-paths","remaining-paths",-1842973937,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)], null)),output_schema33510,cljs.core.deref.call(null,output_checker33513),o__659__auto__);
} else {
var temp__5457__auto___33528 = cljs.core.deref.call(null,output_checker33513).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33528)){
var error__658__auto___33529 = temp__5457__auto___33528;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"remaining-paths","remaining-paths",-1842973937,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___33529)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33510,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33529], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv____$1,output_schema33510,input_schema33511,input_checker33512,output_checker33513,validate__656__auto__,ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520))
,schema.core.__GT_FnSchema.call(null,output_schema33510,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33511], null)));
})();
var start = asami.core.find_start.call(null,pattern_counts,patterns);
var all_paths = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.cons,start),remaining_paths.call(null,asami.core.get_vars.call(null,start),asami.core.without.call(null,start,patterns)));
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.count.call(null,patterns)),cljs.core.map.call(null,cljs.core.count,all_paths))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No valid paths through: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,patterns))].join('')),"\n","(every? (partial = (count patterns)) (map count all-paths))"].join('')));
}

return all_paths;
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"paths","paths",-166858061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a seq of all paths through the constraints. A path is defined\n   by new patterns containing at least one variable common to the patterns\n   that appeared before it. Patterns must form a group."], null)),output_schema33504_33517,cljs.core.deref.call(null,output_checker33507_33520),o__659__auto__);
} else {
var temp__5457__auto___33530 = cljs.core.deref.call(null,output_checker33507_33520).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33530)){
var error__658__auto___33531 = temp__5457__auto___33530;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"paths","paths",-166858061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a seq of all paths through the constraints. A path is defined\n   by new patterns containing at least one variable common to the patterns\n   that appeared before it. Patterns must form a group."], null)),cljs.core.pr_str.call(null,error__658__auto___33531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33504_33517,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33531], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33516,output_schema33504_33517,input_schema33505_33518,input_checker33506_33519,output_checker33507_33520))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.paths),schema.core.__GT_FnSchema.call(null,output_schema33504_33517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33505_33518], null)));

asami.core.epv_pattern_QMARK_ = cljs.core.vector_QMARK_;
asami.core.filter_pattern_QMARK_ = cljs.core.list_QMARK_;
var ufv___33548 = schema.utils.use_fn_validation;
var output_schema33532_33549 = schema.core.Any;
var input_schema33533_33550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"epv-patterns","epv-patterns",-1396438017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"filter-patterns","filter-patterns",252178061,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33534_33551 = (new cljs.core.Delay(((function (ufv___33548,output_schema33532_33549,input_schema33533_33550){
return (function (){
return schema.core.checker.call(null,input_schema33533_33550);
});})(ufv___33548,output_schema33532_33549,input_schema33533_33550))
,null));
var output_checker33535_33552 = (new cljs.core.Delay(((function (ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551){
return (function (){
return schema.core.checker.call(null,output_schema33532_33549);
});})(ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551))
,null));
var ret__2067__auto___33553 = /**
 * Inputs: [epv-patterns filter-patterns]
 * 
 *   Merges filters into the sequence of patterns, so that they appear
 * as soon as all their variables are first bound
 */
asami.core.merge_filters = ((function (ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551,output_checker33535_33552){
return (function asami$core$merge_filters(G__33536,G__33537){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33548);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33536,G__33537], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-filters","merge-filters",1919492627,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges filters into the sequence of patterns, so that they appear\n   as soon as all their variables are first bound"], null)),input_schema33533_33550,cljs.core.deref.call(null,input_checker33534_33551),args__657__auto___33554);
} else {
var temp__5457__auto___33555 = cljs.core.deref.call(null,input_checker33534_33551).call(null,args__657__auto___33554);
if(cljs.core.truth_(temp__5457__auto___33555)){
var error__658__auto___33556 = temp__5457__auto___33555;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"merge-filters","merge-filters",1919492627,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges filters into the sequence of patterns, so that they appear\n   as soon as all their variables are first bound"], null)),cljs.core.pr_str.call(null,error__658__auto___33556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33533_33550,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33554,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33556], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var epv_patterns = G__33536;
var filter_patterns = G__33537;
while(true){
var filter_vars = naga.util.mapmap.call(null,asami.core.get_vars,filter_patterns);
var all_bound_for_QMARK_ = ((function (filter_vars,validate__656__auto__,ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551,output_checker33535_33552){
return (function (bound,fltr){
return cljs.core.every_QMARK_.call(null,bound,filter_vars.call(null,fltr));
});})(filter_vars,validate__656__auto__,ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551,output_checker33535_33552))
;
var plan = cljs.core.PersistentVector.EMPTY;
var bound = cljs.core.PersistentHashSet.EMPTY;
var G__33541 = epv_patterns;
var vec__33542 = G__33541;
var seq__33543 = cljs.core.seq.call(null,vec__33542);
var first__33544 = cljs.core.first.call(null,seq__33543);
var seq__33543__$1 = cljs.core.next.call(null,seq__33543);
var np = first__33544;
var rp = seq__33543__$1;
var patterns = vec__33542;
var filters = filter_patterns;
var plan__$1 = plan;
var bound__$1 = bound;
var G__33541__$1 = G__33541;
var filters__$1 = filters;
while(true){
var plan__$2 = plan__$1;
var bound__$2 = bound__$1;
var vec__33545 = G__33541__$1;
var seq__33546 = cljs.core.seq.call(null,vec__33545);
var first__33547 = cljs.core.first.call(null,seq__33546);
var seq__33546__$1 = cljs.core.next.call(null,seq__33546);
var np__$1 = first__33547;
var rp__$1 = seq__33546__$1;
var patterns__$1 = vec__33545;
var filters__$2 = filters__$1;
if(cljs.core.not.call(null,cljs.core.seq.call(null,patterns__$1))){
return cljs.core.concat.call(null,plan__$2,filters__$2);
} else {
var all_bound_QMARK_ = cljs.core.partial.call(null,all_bound_for_QMARK_,bound__$2);
var nxt_filters = cljs.core.filter.call(null,all_bound_QMARK_,filters__$2);
var remaining_filters = cljs.core.remove.call(null,all_bound_QMARK_,filters__$2);
if(cljs.core.seq.call(null,nxt_filters)){
var G__33557 = cljs.core.into.call(null,plan__$2,nxt_filters);
var G__33558 = bound__$2;
var G__33559 = patterns__$1;
var G__33560 = remaining_filters;
plan__$1 = G__33557;
bound__$1 = G__33558;
G__33541__$1 = G__33559;
filters__$1 = G__33560;
continue;
} else {
var G__33561 = cljs.core.conj.call(null,plan__$2,np__$1);
var G__33562 = cljs.core.into.call(null,bound__$2,asami.core.get_vars.call(null,np__$1));
var G__33563 = rp__$1;
var G__33564 = filters__$2;
plan__$1 = G__33561;
bound__$1 = G__33562;
G__33541__$1 = G__33563;
filters__$1 = G__33564;
continue;
}
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-filters","merge-filters",1919492627,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges filters into the sequence of patterns, so that they appear\n   as soon as all their variables are first bound"], null)),output_schema33532_33549,cljs.core.deref.call(null,output_checker33535_33552),o__659__auto__);
} else {
var temp__5457__auto___33565 = cljs.core.deref.call(null,output_checker33535_33552).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33565)){
var error__658__auto___33566 = temp__5457__auto___33565;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"merge-filters","merge-filters",1919492627,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Merges filters into the sequence of patterns, so that they appear\n   as soon as all their variables are first bound"], null)),cljs.core.pr_str.call(null,error__658__auto___33566)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33532_33549,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33566], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33548,output_schema33532_33549,input_schema33533_33550,input_checker33534_33551,output_checker33535_33552))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.merge_filters),schema.core.__GT_FnSchema.call(null,output_schema33532_33549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33533_33550], null)));

var ufv___33598 = schema.utils.use_fn_validation;
var output_schema33567_33599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),"group"),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),"remainder")], null);
var input_schema33568_33600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33569_33601 = (new cljs.core.Delay(((function (ufv___33598,output_schema33567_33599,input_schema33568_33600){
return (function (){
return schema.core.checker.call(null,input_schema33568_33600);
});})(ufv___33598,output_schema33567_33599,input_schema33568_33600))
,null));
var output_checker33570_33602 = (new cljs.core.Delay(((function (ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601){
return (function (){
return schema.core.checker.call(null,output_schema33567_33599);
});})(ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601))
,null));
var ret__2067__auto___33603 = /**
 * Inputs: [[fp & rp] :- [Pattern]]
 *   Returns: [(s/one [Pattern] "group") (s/one [Pattern] "remainder")]
 * 
 *   Finds a group from a sequence of patterns. A group is defined by every pattern
 * sharing at least one var with at least one other pattern. Returns a pair.
 * The first returned element is the Patterns in the group, the second is what was left over.
 */
asami.core.first_group_STAR_ = ((function (ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602){
return (function asami$core$first_group_STAR_(G__33571){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33598);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33571], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"first-group*","first-group*",-1862999982,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"group"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"remainder")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds a group from a sequence of patterns. A group is defined by every pattern\n   sharing at least one var with at least one other pattern. Returns a pair.\n   The first returned element is the Patterns in the group, the second is what was left over."], null)),input_schema33568_33600,cljs.core.deref.call(null,input_checker33569_33601),args__657__auto___33604);
} else {
var temp__5457__auto___33605 = cljs.core.deref.call(null,input_checker33569_33601).call(null,args__657__auto___33604);
if(cljs.core.truth_(temp__5457__auto___33605)){
var error__658__auto___33606 = temp__5457__auto___33605;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"first-group*","first-group*",-1862999982,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"group"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"remainder")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds a group from a sequence of patterns. A group is defined by every pattern\n   sharing at least one var with at least one other pattern. Returns a pair.\n   The first returned element is the Patterns in the group, the second is what was left over."], null)),cljs.core.pr_str.call(null,error__658__auto___33606)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33568_33600,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33604,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33606], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__33575 = G__33571;
var vec__33576 = G__33575;
var seq__33577 = cljs.core.seq.call(null,vec__33576);
var first__33578 = cljs.core.first.call(null,seq__33577);
var seq__33577__$1 = cljs.core.next.call(null,seq__33577);
var fp = first__33578;
var rp = seq__33577__$1;
var G__33575__$1 = G__33575;
while(true){
var vec__33579 = G__33575__$1;
var seq__33580 = cljs.core.seq.call(null,vec__33579);
var first__33581 = cljs.core.first.call(null,seq__33580);
var seq__33580__$1 = cljs.core.next.call(null,seq__33580);
var fp__$1 = first__33581;
var rp__$1 = seq__33580__$1;
var step = ((function (vec__33579,seq__33580,first__33581,seq__33580__$1,fp__$1,rp__$1,G__33575,vec__33576,seq__33577,first__33578,seq__33577__$1,fp,rp,validate__656__auto__,ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602){
return (function asami$core$first_group_STAR__$_step(p__33590,next_pattern){
var vec__33591 = p__33590;
var vs = cljs.core.nth.call(null,vec__33591,(0),null);
var included = cljs.core.nth.call(null,vec__33591,(1),null);
var excluded = cljs.core.nth.call(null,vec__33591,(2),null);
var new_vars = asami.core.get_vars.call(null,next_pattern);
if(cljs.core.seq.call(null,clojure.set.intersection.call(null,vs,new_vars))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,vs,new_vars),cljs.core.conj.call(null,included,next_pattern),excluded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs,included,cljs.core.conj.call(null,excluded,next_pattern)], null);
}
});})(vec__33579,seq__33580,first__33581,seq__33580__$1,fp__$1,rp__$1,G__33575,vec__33576,seq__33577,first__33578,seq__33577__$1,fp,rp,validate__656__auto__,ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602))
;
var groups = ((function (vec__33579,seq__33580,first__33581,seq__33580__$1,fp__$1,rp__$1,G__33575,vec__33576,seq__33577,first__33578,seq__33577__$1,fp,rp,validate__656__auto__,ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602){
return (function asami$core$first_group_STAR__$_groups(p__33594){
var vec__33595 = p__33594;
var v = cljs.core.nth.call(null,vec__33595,(0),null);
var i = cljs.core.nth.call(null,vec__33595,(1),null);
var e = cljs.core.nth.call(null,vec__33595,(2),null);
return cljs.core.reduce.call(null,step,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,i,cljs.core.PersistentVector.EMPTY], null),e);
});})(vec__33579,seq__33580,first__33581,seq__33580__$1,fp__$1,rp__$1,G__33575,vec__33576,seq__33577,first__33578,seq__33577__$1,fp,rp,validate__656__auto__,ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602))
;
return cljs.core.rest.call(null,naga.util.fixpoint.call(null,groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asami.core.get_vars.call(null,fp__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fp__$1], null),rp__$1], null)));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"first-group*","first-group*",-1862999982,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"group"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"remainder")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds a group from a sequence of patterns. A group is defined by every pattern\n   sharing at least one var with at least one other pattern. Returns a pair.\n   The first returned element is the Patterns in the group, the second is what was left over."], null)),output_schema33567_33599,cljs.core.deref.call(null,output_checker33570_33602),o__659__auto__);
} else {
var temp__5457__auto___33607 = cljs.core.deref.call(null,output_checker33570_33602).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33607)){
var error__658__auto___33608 = temp__5457__auto___33607;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"first-group*","first-group*",-1862999982,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"group"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"remainder")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds a group from a sequence of patterns. A group is defined by every pattern\n   sharing at least one var with at least one other pattern. Returns a pair.\n   The first returned element is the Patterns in the group, the second is what was left over."], null)),cljs.core.pr_str.call(null,error__658__auto___33608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33567_33599,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33608], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33598,output_schema33567_33599,input_schema33568_33600,input_checker33569_33601,output_checker33570_33602))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.first_group_STAR_),schema.core.__GT_FnSchema.call(null,output_schema33567_33599,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33568_33600], null)));

asami.core.first_group = cljs.core.memoize.call(null,asami.core.first_group_STAR_);
var ufv___33625 = schema.utils.use_fn_validation;
var output_schema33609_33626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null);
var input_schema33610_33627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"count-map","count-map",1028760226,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null)))], null);
var input_checker33611_33628 = (new cljs.core.Delay(((function (ufv___33625,output_schema33609_33626,input_schema33610_33627){
return (function (){
return schema.core.checker.call(null,input_schema33610_33627);
});})(ufv___33625,output_schema33609_33626,input_schema33610_33627))
,null));
var output_checker33612_33629 = (new cljs.core.Delay(((function (ufv___33625,output_schema33609_33626,input_schema33610_33627,input_checker33611_33628){
return (function (){
return schema.core.checker.call(null,output_schema33609_33626);
});})(ufv___33625,output_schema33609_33626,input_schema33610_33627,input_checker33611_33628))
,null));
var ret__2067__auto___33630 = /**
 * Inputs: [patterns :- [Pattern] count-map :- {EPVPattern s/Num}]
 *   Returns: [EPVPattern]
 * 
 *   Calculates a plan based on no outer joins (a cross product), and minimized joins.
 * A plan is the order in which to evaluate constraints and join them to the accumulated
 * evaluated data. If it is not possible to create a path without a cross product,
 * then return a plan of the patterns in the provided order.
 */
asami.core.min_join_path = ((function (ufv___33625,output_schema33609_33626,input_schema33610_33627,input_checker33611_33628,output_checker33612_33629){
return (function asami$core$min_join_path(G__33613,G__33614){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33625);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33613,G__33614], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"min-join-path","min-join-path",-838987817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calculates a plan based on no outer joins (a cross product), and minimized joins.\n   A plan is the order in which to evaluate constraints and join them to the accumulated\n   evaluated data. If it is not possible to create a path without a cross product,\n   then return a plan of the patterns in the provided order."], null)),input_schema33610_33627,cljs.core.deref.call(null,input_checker33611_33628),args__657__auto___33631);
} else {
var temp__5457__auto___33632 = cljs.core.deref.call(null,input_checker33611_33628).call(null,args__657__auto___33631);
if(cljs.core.truth_(temp__5457__auto___33632)){
var error__658__auto___33633 = temp__5457__auto___33632;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"min-join-path","min-join-path",-838987817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calculates a plan based on no outer joins (a cross product), and minimized joins.\n   A plan is the order in which to evaluate constraints and join them to the accumulated\n   evaluated data. If it is not possible to create a path without a cross product,\n   then return a plan of the patterns in the provided order."], null)),cljs.core.pr_str.call(null,error__658__auto___33633)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33610_33627,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33631,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33633], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var patterns = G__33613;
var count_map = G__33614;
while(true){
var G__33618 = asami.core.first_group.call(null,patterns);
var vec__33619 = G__33618;
var grp = cljs.core.nth.call(null,vec__33619,(0),null);
var rmdr = cljs.core.nth.call(null,vec__33619,(1),null);
var ordered = cljs.core.PersistentVector.EMPTY;
var G__33618__$1 = G__33618;
var ordered__$1 = ordered;
while(true){
var vec__33622 = G__33618__$1;
var grp__$1 = cljs.core.nth.call(null,vec__33622,(0),null);
var rmdr__$1 = cljs.core.nth.call(null,vec__33622,(1),null);
var ordered__$2 = ordered__$1;
var all_ordered = cljs.core.concat.call(null,ordered__$2,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.partial.call(null,cljs.core.mapv,count_map),asami.core.paths.call(null,grp__$1,count_map))));
if(cljs.core.empty_QMARK_.call(null,rmdr__$1)){
return all_ordered;
} else {
var G__33634 = asami.core.first_group.call(null,rmdr__$1);
var G__33635 = all_ordered;
G__33618__$1 = G__33634;
ordered__$1 = G__33635;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"min-join-path","min-join-path",-838987817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calculates a plan based on no outer joins (a cross product), and minimized joins.\n   A plan is the order in which to evaluate constraints and join them to the accumulated\n   evaluated data. If it is not possible to create a path without a cross product,\n   then return a plan of the patterns in the provided order."], null)),output_schema33609_33626,cljs.core.deref.call(null,output_checker33612_33629),o__659__auto__);
} else {
var temp__5457__auto___33636 = cljs.core.deref.call(null,output_checker33612_33629).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33636)){
var error__658__auto___33637 = temp__5457__auto___33636;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"min-join-path","min-join-path",-838987817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Calculates a plan based on no outer joins (a cross product), and minimized joins.\n   A plan is the order in which to evaluate constraints and join them to the accumulated\n   evaluated data. If it is not possible to create a path without a cross product,\n   then return a plan of the patterns in the provided order."], null)),cljs.core.pr_str.call(null,error__658__auto___33637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33609_33626,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33637], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33625,output_schema33609_33626,input_schema33610_33627,input_checker33611_33628,output_checker33612_33629))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.min_join_path),schema.core.__GT_FnSchema.call(null,output_schema33609_33626,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33610_33627], null)));

var ufv___33644 = schema.utils.use_fn_validation;
var output_schema33638_33645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null);
var input_schema33639_33646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null)))], null);
var input_checker33640_33647 = (new cljs.core.Delay(((function (ufv___33644,output_schema33638_33645,input_schema33639_33646){
return (function (){
return schema.core.checker.call(null,input_schema33639_33646);
});})(ufv___33644,output_schema33638_33645,input_schema33639_33646))
,null));
var output_checker33641_33648 = (new cljs.core.Delay(((function (ufv___33644,output_schema33638_33645,input_schema33639_33646,input_checker33640_33647){
return (function (){
return schema.core.checker.call(null,output_schema33638_33645);
});})(ufv___33644,output_schema33638_33645,input_schema33639_33646,input_checker33640_33647))
,null));
var ret__2067__auto___33649 = /**
 * Inputs: [patterns :- [EPVPattern] _ :- {EPVPattern s/Num}]
 *   Returns: [EPVPattern]
 * 
 *   Returns the original path specified by the user
 */
asami.core.user_plan = ((function (ufv___33644,output_schema33638_33645,input_schema33639_33646,input_checker33640_33647,output_checker33641_33648){
return (function asami$core$user_plan(G__33642,G__33643){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33644);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33642,G__33643], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"user-plan","user-plan",151406874,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the original path specified by the user"], null)),input_schema33639_33646,cljs.core.deref.call(null,input_checker33640_33647),args__657__auto___33650);
} else {
var temp__5457__auto___33651 = cljs.core.deref.call(null,input_checker33640_33647).call(null,args__657__auto___33650);
if(cljs.core.truth_(temp__5457__auto___33651)){
var error__658__auto___33652 = temp__5457__auto___33651;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"user-plan","user-plan",151406874,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the original path specified by the user"], null)),cljs.core.pr_str.call(null,error__658__auto___33652)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33639_33646,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33650,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33652], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var patterns = G__33642;
var _ = G__33643;
while(true){
return patterns;
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"user-plan","user-plan",151406874,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the original path specified by the user"], null)),output_schema33638_33645,cljs.core.deref.call(null,output_checker33641_33648),o__659__auto__);
} else {
var temp__5457__auto___33653 = cljs.core.deref.call(null,output_checker33641_33648).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33653)){
var error__658__auto___33654 = temp__5457__auto___33653;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"user-plan","user-plan",151406874,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the original path specified by the user"], null)),cljs.core.pr_str.call(null,error__658__auto___33654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33638_33645,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33654], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33644,output_schema33638_33645,input_schema33639_33646,input_checker33640_33647,output_checker33641_33648))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.user_plan),schema.core.__GT_FnSchema.call(null,output_schema33638_33645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33639_33646], null)));

var ufv___33661 = schema.utils.use_fn_validation;
var output_schema33655_33662 = schema.core.Any;
var input_schema33656_33663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33657_33664 = (new cljs.core.Delay(((function (ufv___33661,output_schema33655_33662,input_schema33656_33663){
return (function (){
return schema.core.checker.call(null,input_schema33656_33663);
});})(ufv___33661,output_schema33655_33662,input_schema33656_33663))
,null));
var output_checker33658_33665 = (new cljs.core.Delay(((function (ufv___33661,output_schema33655_33662,input_schema33656_33663,input_checker33657_33664){
return (function (){
return schema.core.checker.call(null,output_schema33655_33662);
});})(ufv___33661,output_schema33655_33662,input_schema33656_33663,input_checker33657_33664))
,null));
var ret__2067__auto___33666 = /**
 * Inputs: [options]
 * 
 *   Selects a query planner function
 */
asami.core.select_planner = ((function (ufv___33661,output_schema33655_33662,input_schema33656_33663,input_checker33657_33664,output_checker33658_33665){
return (function asami$core$select_planner(G__33659){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33661);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33659], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"select-planner","select-planner",-639500328,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Selects a query planner function"], null)),input_schema33656_33663,cljs.core.deref.call(null,input_checker33657_33664),args__657__auto___33667);
} else {
var temp__5457__auto___33668 = cljs.core.deref.call(null,input_checker33657_33664).call(null,args__657__auto___33667);
if(cljs.core.truth_(temp__5457__auto___33668)){
var error__658__auto___33669 = temp__5457__auto___33668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"select-planner","select-planner",-639500328,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Selects a query planner function"], null)),cljs.core.pr_str.call(null,error__658__auto___33669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33656_33663,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33667,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33669], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var options = G__33659;
while(true){
var opt = cljs.core.set.call(null,options);
var G__33660 = cljs.core.get.call(null,opt,new cljs.core.Keyword(null,"planner","planner",2074736700));
var G__33660__$1 = (((G__33660 instanceof cljs.core.Keyword))?G__33660.fqn:null);
switch (G__33660__$1) {
case "user":
return asami.core.user_plan;

break;
case "min":
return asami.core.min_join_path;

break;
default:
return asami.core.min_join_path;

}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"select-planner","select-planner",-639500328,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Selects a query planner function"], null)),output_schema33655_33662,cljs.core.deref.call(null,output_checker33658_33665),o__659__auto__);
} else {
var temp__5457__auto___33671 = cljs.core.deref.call(null,output_checker33658_33665).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33671)){
var error__658__auto___33672 = temp__5457__auto___33671;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"select-planner","select-planner",-639500328,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Selects a query planner function"], null)),cljs.core.pr_str.call(null,error__658__auto___33672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33655_33662,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33672], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33661,output_schema33655_33662,input_schema33656_33663,input_checker33657_33664,output_checker33658_33665))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.select_planner),schema.core.__GT_FnSchema.call(null,output_schema33655_33662,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33656_33663], null)));

var ufv___33680 = schema.utils.use_fn_validation;
var output_schema33673_33681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema33674_33682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Value], null),cljs.core.with_meta(new cljs.core.Symbol(null,"existing","existing",1299735433,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Value","Value",2029092958,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"mapping","mapping",398126097,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null))),schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)))], null);
var input_checker33675_33683 = (new cljs.core.Delay(((function (ufv___33680,output_schema33673_33681,input_schema33674_33682){
return (function (){
return schema.core.checker.call(null,input_schema33674_33682);
});})(ufv___33680,output_schema33673_33681,input_schema33674_33682))
,null));
var output_checker33676_33684 = (new cljs.core.Delay(((function (ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683){
return (function (){
return schema.core.checker.call(null,output_schema33673_33681);
});})(ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683))
,null));
var ret__2067__auto___33685 = /**
 * Inputs: [existing :- [Value] mapping :- #:s{Num s/Num} pattern :- EPVPattern]
 *   Returns: [s/Any]
 * 
 *   Creates a new EPVPattern from an existing one, based on existing bindings.
 * Uses the mapping to copy from columns in 'existing' to overwrite variables in 'pattern'.
 * The variable locations have already been found and are in the 'mapping' argument
 */
asami.core.modify_pattern = ((function (ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683,output_checker33676_33684){
return (function asami$core$modify_pattern(G__33677,G__33678,G__33679){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33680);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33677,G__33678,G__33679], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"modify-pattern","modify-pattern",300000906,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'existing' to overwrite variables in 'pattern'.\n   The variable locations have already been found and are in the 'mapping' argument"], null)),input_schema33674_33682,cljs.core.deref.call(null,input_checker33675_33683),args__657__auto___33686);
} else {
var temp__5457__auto___33687 = cljs.core.deref.call(null,input_checker33675_33683).call(null,args__657__auto___33686);
if(cljs.core.truth_(temp__5457__auto___33687)){
var error__658__auto___33688 = temp__5457__auto___33687;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"modify-pattern","modify-pattern",300000906,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'existing' to overwrite variables in 'pattern'.\n   The variable locations have already been found and are in the 'mapping' argument"], null)),cljs.core.pr_str.call(null,error__658__auto___33688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33674_33682,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33686,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33688], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var existing = G__33677;
var mapping = G__33678;
var pattern = G__33679;
while(true){
return cljs.core.map_indexed.call(null,((function (validate__656__auto__,ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683,output_checker33676_33684){
return (function (n,v){
var temp__5455__auto__ = mapping.call(null,n);
if(cljs.core.truth_(temp__5455__auto__)){
var x = temp__5455__auto__;
return cljs.core.nth.call(null,existing,x);
} else {
return v;
}
});})(validate__656__auto__,ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683,output_checker33676_33684))
,pattern);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"modify-pattern","modify-pattern",300000906,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'existing' to overwrite variables in 'pattern'.\n   The variable locations have already been found and are in the 'mapping' argument"], null)),output_schema33673_33681,cljs.core.deref.call(null,output_checker33676_33684),o__659__auto__);
} else {
var temp__5457__auto___33689 = cljs.core.deref.call(null,output_checker33676_33684).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33689)){
var error__658__auto___33690 = temp__5457__auto___33689;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"modify-pattern","modify-pattern",300000906,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'existing' to overwrite variables in 'pattern'.\n   The variable locations have already been found and are in the 'mapping' argument"], null)),cljs.core.pr_str.call(null,error__658__auto___33690)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33673_33681,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33690], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33680,output_schema33673_33681,input_schema33674_33682,input_checker33675_33683,output_checker33676_33684))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.modify_pattern),schema.core.__GT_FnSchema.call(null,output_schema33673_33681,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33674_33682], null)));

var ufv___33704 = schema.utils.use_fn_validation;
var output_schema33691_33705 = naga.schema.store_structs.Results;
var input_schema33692_33706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"part","part",1718289265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null))),schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)))], null);
var input_checker33693_33707 = (new cljs.core.Delay(((function (ufv___33704,output_schema33691_33705,input_schema33692_33706){
return (function (){
return schema.core.checker.call(null,input_schema33692_33706);
});})(ufv___33704,output_schema33691_33705,input_schema33692_33706))
,null));
var output_checker33694_33708 = (new cljs.core.Delay(((function (ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707){
return (function (){
return schema.core.checker.call(null,output_schema33691_33705);
});})(ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707))
,null));
var ret__2067__auto___33709 = /**
 * Inputs: [graph part :- Results pattern :- EPVPattern]
 *   Returns: Results
 * 
 *   Takes a partial result, and joins on the resolution of a pattern
 */
asami.core.pattern_left_join = ((function (ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708){
return (function asami$core$pattern_left_join(G__33695,G__33696,G__33697){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33704);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33695,G__33696,G__33697], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-left-join","pattern-left-join",-689131167,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a partial result, and joins on the resolution of a pattern"], null)),input_schema33692_33706,cljs.core.deref.call(null,input_checker33693_33707),args__657__auto___33710);
} else {
var temp__5457__auto___33711 = cljs.core.deref.call(null,input_checker33693_33707).call(null,args__657__auto___33710);
if(cljs.core.truth_(temp__5457__auto___33711)){
var error__658__auto___33712 = temp__5457__auto___33711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-left-join","pattern-left-join",-689131167,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a partial result, and joins on the resolution of a pattern"], null)),cljs.core.pr_str.call(null,error__658__auto___33712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33692_33706,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33710,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33712], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var graph = G__33695;
var part = G__33696;
var pattern = G__33697;
while(true){
var cols = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,part));
var total_cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cols,cljs.core.remove.call(null,cljs.core.set.call(null,cols),naga.schema.store_structs.vars.call(null,pattern))));
var pattern__GT_left = naga.storage.store_util.matching_vars.call(null,pattern,cols);
return cljs.core.with_meta.call(null,(function (){var iter__4294__auto__ = ((function (cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708){
return (function asami$core$pattern_left_join_$_iter__33698(s__33699){
return (new cljs.core.LazySeq(null,((function (cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708){
return (function (){
var s__33699__$1 = s__33699;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33699__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lrow = cljs.core.first.call(null,xs__6012__auto__);
var lookup = asami.core.modify_pattern.call(null,lrow,pattern__GT_left,pattern);
var iterys__4290__auto__ = ((function (s__33699__$1,lookup,lrow,xs__6012__auto__,temp__5457__auto__,cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708){
return (function asami$core$pattern_left_join_$_iter__33698_$_iter__33700(s__33701){
return (new cljs.core.LazySeq(null,((function (s__33699__$1,lookup,lrow,xs__6012__auto__,temp__5457__auto__,cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708){
return (function (){
var s__33701__$1 = s__33701;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__33701__$1);
if(temp__5457__auto____$1){
var s__33701__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33701__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__33701__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__33703 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__33702 = (0);
while(true){
if((i__33702 < size__4293__auto__)){
var rrow = cljs.core._nth.call(null,c__4292__auto__,i__33702);
cljs.core.chunk_append.call(null,b__33703,cljs.core.concat.call(null,lrow,rrow));

var G__33713 = (i__33702 + (1));
i__33702 = G__33713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33703),asami$core$pattern_left_join_$_iter__33698_$_iter__33700.call(null,cljs.core.chunk_rest.call(null,s__33701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33703),null);
}
} else {
var rrow = cljs.core.first.call(null,s__33701__$2);
return cljs.core.cons.call(null,cljs.core.concat.call(null,lrow,rrow),asami$core$pattern_left_join_$_iter__33698_$_iter__33700.call(null,cljs.core.rest.call(null,s__33701__$2)));
}
} else {
return null;
}
break;
}
});})(s__33699__$1,lookup,lrow,xs__6012__auto__,temp__5457__auto__,cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708))
,null,null));
});})(s__33699__$1,lookup,lrow,xs__6012__auto__,temp__5457__auto__,cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,asami.index.resolve_pattern.call(null,graph,lookup)));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$core$pattern_left_join_$_iter__33698.call(null,cljs.core.rest.call(null,s__33699__$1)));
} else {
var G__33714 = cljs.core.rest.call(null,s__33699__$1);
s__33699__$1 = G__33714;
continue;
}
} else {
return null;
}
break;
}
});})(cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708))
,null,null));
});})(cols,total_cols,pattern__GT_left,validate__656__auto__,ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708))
;
return iter__4294__auto__.call(null,part);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cols","cols",-1914801295),total_cols], null));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-left-join","pattern-left-join",-689131167,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a partial result, and joins on the resolution of a pattern"], null)),output_schema33691_33705,cljs.core.deref.call(null,output_checker33694_33708),o__659__auto__);
} else {
var temp__5457__auto___33715 = cljs.core.deref.call(null,output_checker33694_33708).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33715)){
var error__658__auto___33716 = temp__5457__auto___33715;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pattern-left-join","pattern-left-join",-689131167,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a partial result, and joins on the resolution of a pattern"], null)),cljs.core.pr_str.call(null,error__658__auto___33716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33691_33705,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33716], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33704,output_schema33691_33705,input_schema33692_33706,input_checker33693_33707,output_checker33694_33708))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.pattern_left_join),schema.core.__GT_FnSchema.call(null,output_schema33691_33705,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33692_33706], null)));

var ufv___33724 = schema.utils.use_fn_validation;
var output_schema33717_33725 = schema.core.Any;
var input_schema33718_33726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"part","part",1718289265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null))),schema.core.one.call(null,naga.schema.store_structs.FilterPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"fltr","fltr",-1167138788,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"FilterPattern","FilterPattern",1601359407,null)], null)))], null);
var input_checker33719_33727 = (new cljs.core.Delay(((function (ufv___33724,output_schema33717_33725,input_schema33718_33726){
return (function (){
return schema.core.checker.call(null,input_schema33718_33726);
});})(ufv___33724,output_schema33717_33725,input_schema33718_33726))
,null));
var output_checker33720_33728 = (new cljs.core.Delay(((function (ufv___33724,output_schema33717_33725,input_schema33718_33726,input_checker33719_33727){
return (function (){
return schema.core.checker.call(null,output_schema33717_33725);
});})(ufv___33724,output_schema33717_33725,input_schema33718_33726,input_checker33719_33727))
,null));
var ret__2067__auto___33729 = /**
 * Inputs: [graph part :- Results fltr :- FilterPattern]
 * 
 *   Filters down results.
 */
asami.core.filter_join = ((function (ufv___33724,output_schema33717_33725,input_schema33718_33726,input_checker33719_33727,output_checker33720_33728){
return (function asami$core$filter_join(G__33721,G__33722,G__33723){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33724);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33721,G__33722,G__33723], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"filter-join","filter-join",-1554308407,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters down results."], null)),input_schema33718_33726,cljs.core.deref.call(null,input_checker33719_33727),args__657__auto___33730);
} else {
var temp__5457__auto___33731 = cljs.core.deref.call(null,input_checker33719_33727).call(null,args__657__auto___33730);
if(cljs.core.truth_(temp__5457__auto___33731)){
var error__658__auto___33732 = temp__5457__auto___33731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"filter-join","filter-join",-1554308407,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters down results."], null)),cljs.core.pr_str.call(null,error__658__auto___33732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33718_33726,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33730,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33732], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var graph = G__33721;
var part = G__33722;
var fltr = G__33723;
while(true){
var m = cljs.core.meta.call(null,part);
var vars = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(m);
var filter_fn = asami.core.eval.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,vars,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,fltr,null,(1),null))))));
return cljs.core.with_meta.call(null,cljs.core.filter.call(null,filter_fn,part),m);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"filter-join","filter-join",-1554308407,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters down results."], null)),output_schema33717_33725,cljs.core.deref.call(null,output_checker33720_33728),o__659__auto__);
} else {
var temp__5457__auto___33733 = cljs.core.deref.call(null,output_checker33720_33728).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33733)){
var error__658__auto___33734 = temp__5457__auto___33733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"filter-join","filter-join",-1554308407,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Filters down results."], null)),cljs.core.pr_str.call(null,error__658__auto___33734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33717_33725,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33734], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33724,output_schema33717_33725,input_schema33718_33726,input_checker33719_33727,output_checker33720_33728))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.filter_join),schema.core.__GT_FnSchema.call(null,output_schema33717_33725,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33718_33726], null)));

cljs.core.PersistentVector.prototype.asami$core$Constraint$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.asami$core$Constraint$get_vars$arity$1 = (function (p){
var p__$1 = this;
return cljs.core.set.call(null,naga.schema.store_structs.vars.call(null,p__$1));
});

cljs.core.PersistentVector.prototype.asami$core$Constraint$left_join$arity$3 = (function (p,results,graph){
var p__$1 = this;
return asami.core.pattern_left_join.call(null,graph,results,p__$1);
});

cljs.core.List.prototype.asami$core$Constraint$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.asami$core$Constraint$get_vars$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1));
});

cljs.core.List.prototype.asami$core$Constraint$left_join$arity$3 = (function (f,results,graph){
var f__$1 = this;
return asami.core.filter_join.call(null,graph,results,f__$1);
});

cljs.core.EmptyList.prototype.asami$core$Constraint$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.asami$core$Constraint$get_vars$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1));
});

cljs.core.EmptyList.prototype.asami$core$Constraint$left_join$arity$3 = (function (f,results,graph){
var f__$1 = this;
return asami.core.filter_join.call(null,graph,results,f__$1);
});

cljs.core.LazySeq.prototype.asami$core$Constraint$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.asami$core$Constraint$get_vars$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f__$1));
});

cljs.core.LazySeq.prototype.asami$core$Constraint$left_join$arity$3 = (function (f,results,graph){
var f__$1 = this;
return asami.core.filter_join.call(null,graph,results,f__$1);
});
var ufv___33742 = schema.utils.use_fn_validation;
var output_schema33735_33743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),"Patterns in planned order"),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,naga.schema.store_structs.Results]),"Single patterns mapped to their resolutions")], null);
var input_schema33736_33744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33737_33745 = (new cljs.core.Delay(((function (ufv___33742,output_schema33735_33743,input_schema33736_33744){
return (function (){
return schema.core.checker.call(null,input_schema33736_33744);
});})(ufv___33742,output_schema33735_33743,input_schema33736_33744))
,null));
var output_checker33738_33746 = (new cljs.core.Delay(((function (ufv___33742,output_schema33735_33743,input_schema33736_33744,input_checker33737_33745){
return (function (){
return schema.core.checker.call(null,output_schema33735_33743);
});})(ufv___33742,output_schema33735_33743,input_schema33736_33744,input_checker33737_33745))
,null));
var ret__2067__auto___33747 = /**
 * Inputs: [graph patterns :- [Pattern] options]
 *   Returns: [(s/one [Pattern] "Patterns in planned order") (s/one {EPVPattern Results} "Single patterns mapped to their resolutions")]
 * 
 *   Determines the order in which to perform the elements that go into a query.
 * Tries to optimize, so it uses the graph to determine some of the
 * properties of the query elements. Options can describe which planner to use.
 * Planning will determine the resolution map, and this is returned with the plan.
 * By default the min-join-path function is used. This can be overriden with options:
 *   [:planner plan]
 * The plan can be one of :user, :min.
 * :min is the default. :user means to execute in provided order.
 */
asami.core.plan_path = ((function (ufv___33742,output_schema33735_33743,input_schema33736_33744,input_checker33737_33745,output_checker33738_33746){
return (function asami$core$plan_path(G__33739,G__33740,G__33741){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33742);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33739,G__33740,G__33741], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"plan-path","plan-path",1133203711,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"Patterns in planned order"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null),"Single patterns mapped to their resolutions")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines the order in which to perform the elements that go into a query.\n   Tries to optimize, so it uses the graph to determine some of the\n   properties of the query elements. Options can describe which planner to use.\n   Planning will determine the resolution map, and this is returned with the plan.\n   By default the min-join-path function is used. This can be overriden with options:\n     [:planner plan]\n   The plan can be one of :user, :min.\n   :min is the default. :user means to execute in provided order."], null)),input_schema33736_33744,cljs.core.deref.call(null,input_checker33737_33745),args__657__auto___33748);
} else {
var temp__5457__auto___33749 = cljs.core.deref.call(null,input_checker33737_33745).call(null,args__657__auto___33748);
if(cljs.core.truth_(temp__5457__auto___33749)){
var error__658__auto___33750 = temp__5457__auto___33749;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"plan-path","plan-path",1133203711,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"Patterns in planned order"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null),"Single patterns mapped to their resolutions")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines the order in which to perform the elements that go into a query.\n   Tries to optimize, so it uses the graph to determine some of the\n   properties of the query elements. Options can describe which planner to use.\n   Planning will determine the resolution map, and this is returned with the plan.\n   By default the min-join-path function is used. This can be overriden with options:\n     [:planner plan]\n   The plan can be one of :user, :min.\n   :min is the default. :user means to execute in provided order."], null)),cljs.core.pr_str.call(null,error__658__auto___33750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33736_33744,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33748,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33750], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var graph = G__33739;
var patterns = G__33740;
var options = G__33741;
while(true){
var epv_patterns = cljs.core.filter.call(null,asami.core.epv_pattern_QMARK_,patterns);
var filter_patterns = cljs.core.filter.call(null,asami.core.filter_pattern_QMARK_,patterns);
var resolution_map = naga.util.mapmap.call(null,cljs.core.partial.call(null,asami.index.resolve_pattern,graph),epv_patterns);
var count_map = naga.util.mapmap.call(null,cljs.core.comp.call(null,cljs.core.count,resolution_map),epv_patterns);
var query_planner = asami.core.select_planner.call(null,options);
var planned = query_planner.call(null,epv_patterns,count_map);
var plan = asami.core.merge_filters.call(null,planned,filter_patterns);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan,resolution_map], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"plan-path","plan-path",1133203711,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"Patterns in planned order"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null),"Single patterns mapped to their resolutions")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines the order in which to perform the elements that go into a query.\n   Tries to optimize, so it uses the graph to determine some of the\n   properties of the query elements. Options can describe which planner to use.\n   Planning will determine the resolution map, and this is returned with the plan.\n   By default the min-join-path function is used. This can be overriden with options:\n     [:planner plan]\n   The plan can be one of :user, :min.\n   :min is the default. :user means to execute in provided order."], null)),output_schema33735_33743,cljs.core.deref.call(null,output_checker33738_33746),o__659__auto__);
} else {
var temp__5457__auto___33751 = cljs.core.deref.call(null,output_checker33738_33746).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33751)){
var error__658__auto___33752 = temp__5457__auto___33751;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"plan-path","plan-path",1133203711,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null),"Patterns in planned order"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null),"Single patterns mapped to their resolutions")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines the order in which to perform the elements that go into a query.\n   Tries to optimize, so it uses the graph to determine some of the\n   properties of the query elements. Options can describe which planner to use.\n   Planning will determine the resolution map, and this is returned with the plan.\n   By default the min-join-path function is used. This can be overriden with options:\n     [:planner plan]\n   The plan can be one of :user, :min.\n   :min is the default. :user means to execute in provided order."], null)),cljs.core.pr_str.call(null,error__658__auto___33752)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33735_33743,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33752], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33742,output_schema33735_33743,input_schema33736_33744,input_checker33737_33745,output_checker33738_33746))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.plan_path),schema.core.__GT_FnSchema.call(null,output_schema33735_33743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33736_33744], null)));

var ufv___33771 = schema.utils.use_fn_validation;
var output_schema33755_33772 = naga.schema.store_structs.Results;
var input_schema33756_33773 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null)], null))),schema.core.Any], null);
var input_checker33757_33774 = (new cljs.core.Delay(((function (ufv___33771,output_schema33755_33772,input_schema33756_33773){
return (function (){
return schema.core.checker.call(null,input_schema33756_33773);
});})(ufv___33771,output_schema33755_33772,input_schema33756_33773))
,null));
var output_checker33758_33775 = (new cljs.core.Delay(((function (ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774){
return (function (){
return schema.core.checker.call(null,output_schema33755_33772);
});})(ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774))
,null));
var ret__2067__auto___33776 = (function (){
/**
 * Inputs: [graph patterns :- [Pattern] & options]
 *   Returns: Results
 * 
 *   Joins the resolutions for a series of patterns into a single result.
 */
asami.core.join_patterns = ((function (ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775){
return (function asami$core$join_patterns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33777 = arguments.length;
var i__4500__auto___33778 = (0);
while(true){
if((i__4500__auto___33778 < len__4499__auto___33777)){
args__4502__auto__.push((arguments[i__4500__auto___33778]));

var G__33779 = (i__4500__auto___33778 + (1));
i__4500__auto___33778 = G__33779;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return asami.core.join_patterns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});})(ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775))
;

asami.core.join_patterns.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775){
return (function (G__33759,G__33760,rest33761){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33771);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33780 = cljs.core.list_STAR_.call(null,G__33759,G__33760,rest33761);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"join-patterns","join-patterns",-180286454,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins the resolutions for a series of patterns into a single result."], null)),input_schema33756_33773,cljs.core.deref.call(null,input_checker33757_33774),args__657__auto___33780);
} else {
var temp__5457__auto___33781 = cljs.core.deref.call(null,input_checker33757_33774).call(null,args__657__auto___33780);
if(cljs.core.truth_(temp__5457__auto___33781)){
var error__658__auto___33782 = temp__5457__auto___33781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"join-patterns","join-patterns",-180286454,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins the resolutions for a series of patterns into a single result."], null)),cljs.core.pr_str.call(null,error__658__auto___33782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33756_33773,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33780,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33782], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var graph = G__33759;
var patterns = G__33760;
var options = rest33761;
while(true){
var vec__33765 = asami.core.plan_path.call(null,graph,patterns,options);
var vec__33768 = cljs.core.nth.call(null,vec__33765,(0),null);
var seq__33769 = cljs.core.seq.call(null,vec__33768);
var first__33770 = cljs.core.first.call(null,seq__33769);
var seq__33769__$1 = cljs.core.next.call(null,seq__33769);
var fpath = first__33770;
var rpath = seq__33769__$1;
var resolution_map = cljs.core.nth.call(null,vec__33765,(1),null);
var ljoin = ((function (vec__33765,vec__33768,seq__33769,first__33770,seq__33769__$1,fpath,rpath,resolution_map,validate__656__auto__,ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775){
return (function (p1__33754_SHARP_,p2__33753_SHARP_){
return asami.core.left_join.call(null,p2__33753_SHARP_,p1__33754_SHARP_,graph);
});})(vec__33765,vec__33768,seq__33769,first__33770,seq__33769__$1,fpath,rpath,resolution_map,validate__656__auto__,ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775))
;
var part_result = cljs.core.with_meta.call(null,resolution_map.call(null,fpath),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cols","cols",-1914801295),naga.schema.store_structs.vars.call(null,fpath)], null));
return cljs.core.reduce.call(null,ljoin,part_result,rpath);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"join-patterns","join-patterns",-180286454,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins the resolutions for a series of patterns into a single result."], null)),output_schema33755_33772,cljs.core.deref.call(null,output_checker33758_33775),o__659__auto__);
} else {
var temp__5457__auto___33783 = cljs.core.deref.call(null,output_checker33758_33775).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33783)){
var error__658__auto___33784 = temp__5457__auto___33783;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"join-patterns","join-patterns",-180286454,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins the resolutions for a series of patterns into a single result."], null)),cljs.core.pr_str.call(null,error__658__auto___33784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33755_33772,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33784], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775))
;

asami.core.join_patterns.cljs$lang$maxFixedArity = (2);

asami.core.join_patterns.cljs$lang$applyTo = ((function (ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775){
return (function (seq33762){
var G__33763 = cljs.core.first.call(null,seq33762);
var seq33762__$1 = cljs.core.next.call(null,seq33762);
var G__33764 = cljs.core.first.call(null,seq33762__$1);
var seq33762__$2 = cljs.core.next.call(null,seq33762__$1);
return asami.core.join_patterns.cljs$core$IFn$_invoke$arity$variadic(G__33763,G__33764,seq33762__$2);
});})(ufv___33771,output_schema33755_33772,input_schema33756_33773,input_checker33757_33774,output_checker33758_33775))
;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.join_patterns),schema.core.__GT_FnSchema.call(null,output_schema33755_33772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33756_33773], null)));

var ufv___33791 = schema.utils.use_fn_validation;
var output_schema33785_33792 = schema.core.Any;
var input_schema33786_33793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null)))], null);
var input_checker33787_33794 = (new cljs.core.Delay(((function (ufv___33791,output_schema33785_33792,input_schema33786_33793){
return (function (){
return schema.core.checker.call(null,input_schema33786_33793);
});})(ufv___33791,output_schema33785_33792,input_schema33786_33793))
,null));
var output_checker33788_33795 = (new cljs.core.Delay(((function (ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794){
return (function (){
return schema.core.checker.call(null,output_schema33785_33792);
});})(ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794))
,null));
var ret__2067__auto___33796 = /**
 * Inputs: [graph data :- Results]
 */
asami.core.add_to_graph = ((function (ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794,output_checker33788_33795){
return (function asami$core$add_to_graph(G__33789,G__33790){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33791);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33789,G__33790], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"add-to-graph","add-to-graph",275386169,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema33786_33793,cljs.core.deref.call(null,input_checker33787_33794),args__657__auto___33797);
} else {
var temp__5457__auto___33798 = cljs.core.deref.call(null,input_checker33787_33794).call(null,args__657__auto___33797);
if(cljs.core.truth_(temp__5457__auto___33798)){
var error__658__auto___33799 = temp__5457__auto___33798;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"add-to-graph","add-to-graph",275386169,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___33799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33786_33793,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33797,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33799], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var graph = G__33789;
var data = G__33790;
while(true){
return cljs.core.reduce.call(null,((function (validate__656__auto__,ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794,output_checker33788_33795){
return (function (acc,d){
return cljs.core.apply.call(null,asami.index.graph_add,acc,d);
});})(validate__656__auto__,ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794,output_checker33788_33795))
,graph,data);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"add-to-graph","add-to-graph",275386169,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema33785_33792,cljs.core.deref.call(null,output_checker33788_33795),o__659__auto__);
} else {
var temp__5457__auto___33800 = cljs.core.deref.call(null,output_checker33788_33795).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33800)){
var error__658__auto___33801 = temp__5457__auto___33800;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"add-to-graph","add-to-graph",275386169,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___33801)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33785_33792,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33801], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33791,output_schema33785_33792,input_schema33786_33793,input_checker33787_33794,output_checker33788_33795))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.add_to_graph),schema.core.__GT_FnSchema.call(null,output_schema33785_33792,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33786_33793], null)));

var m_33804 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a memoized counting function for the current graph.
 *     These functions only last as long as the current graph.
 */
asami.core.get_count_fn = ((function (m_33804){
return (function asami$core$get_count_fn(graph){
var temp__5455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,m_33804),graph);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f;
} else {
var f = cljs.core.memoize.call(null,((function (temp__5455__auto__,m_33804){
return (function (p1__33803_SHARP_){
return cljs.core.count.call(null,asami.index.resolve_pattern.call(null,graph,p1__33803_SHARP_));
});})(temp__5455__auto__,m_33804))
);
cljs.core.reset_BANG_.call(null,m_33804,cljs.core.PersistentArrayMap.createAsIfByAssoc([graph,f]));

return f;
}
});})(m_33804))
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {naga.store.Storage}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
asami.core.MemoryStore = (function (before_graph,graph,__meta,__extmap,__hash){
this.before_graph = before_graph;
this.graph = graph;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
asami.core.MemoryStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

asami.core.MemoryStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k33807,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__33811 = k33807;
var G__33811__$1 = (((G__33811 instanceof cljs.core.Keyword))?G__33811.fqn:null);
switch (G__33811__$1) {
case "before-graph":
return self__.before_graph;

break;
case "graph":
return self__.graph;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33807,else__4177__auto__);

}
});

asami.core.MemoryStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#asami.core.MemoryStore{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"before-graph","before-graph",715122482),self__.before_graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph","graph",1558099509),self__.graph],null))], null),self__.__extmap));
});

asami.core.MemoryStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33806){
var self__ = this;
var G__33806__$1 = this;
return (new cljs.core.RecordIter((0),G__33806__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-graph","before-graph",715122482),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

asami.core.MemoryStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

asami.core.MemoryStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new asami.core.MemoryStore(self__.before_graph,self__.graph,self__.__meta,self__.__extmap,self__.__hash));
});

asami.core.MemoryStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

asami.core.MemoryStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (782532629 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

asami.core.MemoryStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33808,other33809){
var self__ = this;
var this33808__$1 = this;
return ((!((other33809 == null))) && ((this33808__$1.constructor === other33809.constructor)) && (cljs.core._EQ_.call(null,this33808__$1.before_graph,other33809.before_graph)) && (cljs.core._EQ_.call(null,this33808__$1.graph,other33809.graph)) && (cljs.core._EQ_.call(null,this33808__$1.__extmap,other33809.__extmap)));
});

asami.core.MemoryStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-graph","before-graph",715122482),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new asami.core.MemoryStore(self__.before_graph,self__.graph,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

asami.core.MemoryStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__33806){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__33812 = cljs.core.keyword_identical_QMARK_;
var expr__33813 = k__4182__auto__;
if(cljs.core.truth_(pred__33812.call(null,new cljs.core.Keyword(null,"before-graph","before-graph",715122482),expr__33813))){
return (new asami.core.MemoryStore(G__33806,self__.graph,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33812.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509),expr__33813))){
return (new asami.core.MemoryStore(self__.before_graph,G__33806,self__.__meta,self__.__extmap,null));
} else {
return (new asami.core.MemoryStore(self__.before_graph,self__.graph,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__33806),null));
}
}
});

asami.core.MemoryStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"before-graph","before-graph",715122482),self__.before_graph,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph","graph",1558099509),self__.graph,null))], null),self__.__extmap));
});

asami.core.MemoryStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__33806){
var self__ = this;
var this__4173__auto____$1 = this;
return (new asami.core.MemoryStore(self__.before_graph,self__.graph,G__33806,self__.__extmap,self__.__hash));
});

asami.core.MemoryStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

asami.core.MemoryStore.prototype.naga$store$Storage$ = cljs.core.PROTOCOL_SENTINEL;

asami.core.MemoryStore.prototype.naga$store$Storage$query$arity$3 = (function (this$,output_pattern,patterns){
var self__ = this;
var this$__$1 = this;
return naga.storage.store_util.project.call(null,this$__$1,output_pattern,asami.core.join_patterns.call(null,self__.graph,patterns));
});

asami.core.MemoryStore.prototype.naga$store$Storage$deltas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = (function (){var or__3924__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return self__.before_graph;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var previous_graph = temp__5457__auto__;
return cljs.core.sort_by.call(null,((function (previous_graph,temp__5457__auto__,this$__$1){
return (function (p1__33805_SHARP_){
return cljs.core.subs.call(null,cljs.core.name.call(null,p1__33805_SHARP_),(5));
});})(previous_graph,temp__5457__auto__,this$__$1))
,cljs.core.filter.call(null,((function (previous_graph,temp__5457__auto__,this$__$1){
return (function (s){
return cljs.core.seq.call(null,asami.index.resolve_pattern.call(null,self__.graph,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword("naga","entity","naga/entity",-456428631),new cljs.core.Symbol(null,"?","?",-62633706,null)], null)));
});})(previous_graph,temp__5457__auto__,this$__$1))
,asami.index.graph_diff.call(null,self__.graph,previous_graph)));
} else {
return null;
}
});

asami.core.MemoryStore.prototype.naga$store$Storage$container_property$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("naga","contains","naga/contains",707593687);
});

asami.core.MemoryStore.prototype.naga$store$Storage$count_pattern$arity$2 = (function (_,pattern){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = asami.core.get_count_fn.call(null,self__.graph);
if(cljs.core.truth_(temp__5455__auto__)){
var count_fn = temp__5455__auto__;
return count_fn.call(null,pattern);
} else {
return cljs.core.count.call(null,asami.index.resolve_pattern.call(null,self__.graph,pattern));
}
});

asami.core.MemoryStore.prototype.naga$store$Storage$resolve_pattern$arity$2 = (function (_,pattern){
var self__ = this;
var ___$1 = this;
return asami.index.resolve_pattern.call(null,self__.graph,pattern);
});

asami.core.MemoryStore.prototype.naga$store$Storage$query_insert$arity$3 = (function (this$,assertion_patterns,patterns){
var self__ = this;
var this$__$1 = this;
var ins_project = ((function (this$__$1){
return (function asami$core$ins_project(data){
var cols = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,data));
return naga.storage.store_util.insert_project.call(null,this$__$1,assertion_patterns,cols,data);
});})(this$__$1))
;
return asami.core.__GT_MemoryStore.call(null,self__.before_graph,asami.core.add_to_graph.call(null,self__.graph,ins_project.call(null,asami.core.join_patterns.call(null,self__.graph,patterns))));
});

asami.core.MemoryStore.prototype.naga$store$Storage$commit_tx$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

asami.core.MemoryStore.prototype.naga$store$Storage$start_tx$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return asami.core.__GT_MemoryStore.call(null,self__.graph,self__.graph);
});

asami.core.MemoryStore.prototype.naga$store$Storage$assert_schema_opts$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

asami.core.MemoryStore.prototype.naga$store$Storage$node_type_QMARK_$arity$3 = (function (this$,prop,value){
var self__ = this;
var this$__$1 = this;
return (((value instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"mem",cljs.core.namespace.call(null,value))) && (clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,value),"node-")));
});

asami.core.MemoryStore.prototype.naga$store$Storage$node_id$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core.subs.call(null,cljs.core.name.call(null,n),(5));
});

asami.core.MemoryStore.prototype.naga$store$Storage$assert_data$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
return asami.core.__GT_MemoryStore.call(null,self__.before_graph,asami.core.add_to_graph.call(null,self__.graph,data));
});

asami.core.MemoryStore.prototype.naga$store$Storage$data_property$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("naga","first","naga/first",-657896889);
});

asami.core.MemoryStore.prototype.naga$store$Storage$new_node$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.keyword.call(null,"mem",cljs.core.name.call(null,cljs.core.gensym.call(null,"node-")));
});

asami.core.MemoryStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-graph","before-graph",-1939313287,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null)], null);
});

asami.core.MemoryStore.cljs$lang$type = true;

asami.core.MemoryStore.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"asami.core/MemoryStore",null,(1),null));
});

asami.core.MemoryStore.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"asami.core/MemoryStore");
});

/**
 * Positional factory function for asami.core/MemoryStore.
 */
asami.core.__GT_MemoryStore = (function asami$core$__GT_MemoryStore(before_graph,graph){
return (new asami.core.MemoryStore(before_graph,graph,null,null,null));
});

/**
 * Factory function for asami.core/MemoryStore, taking a map of keywords to field values.
 */
asami.core.map__GT_MemoryStore = (function asami$core$map__GT_MemoryStore(G__33810){
return (new asami.core.MemoryStore(new cljs.core.Keyword(null,"before-graph","before-graph",715122482).cljs$core$IFn$_invoke$arity$1(G__33810),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(G__33810),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__33810,new cljs.core.Keyword(null,"before-graph","before-graph",715122482),new cljs.core.Keyword(null,"graph","graph",1558099509))),null));
});

asami.core.empty_store = asami.core.__GT_MemoryStore.call(null,null,asami.index.empty_graph);
var ufv___33821 = schema.utils.use_fn_validation;
var output_schema33816_33822 = naga.store.StorageType;
var input_schema33817_33823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33818_33824 = (new cljs.core.Delay(((function (ufv___33821,output_schema33816_33822,input_schema33817_33823){
return (function (){
return schema.core.checker.call(null,input_schema33817_33823);
});})(ufv___33821,output_schema33816_33822,input_schema33817_33823))
,null));
var output_checker33819_33825 = (new cljs.core.Delay(((function (ufv___33821,output_schema33816_33822,input_schema33817_33823,input_checker33818_33824){
return (function (){
return schema.core.checker.call(null,output_schema33816_33822);
});})(ufv___33821,output_schema33816_33822,input_schema33817_33823,input_checker33818_33824))
,null));
var ret__2067__auto___33826 = /**
 * Inputs: [config]
 *   Returns: StorageType
 * 
 *   Factory function to create a store
 */
asami.core.create_store = ((function (ufv___33821,output_schema33816_33822,input_schema33817_33823,input_checker33818_33824,output_checker33819_33825){
return (function asami$core$create_store(G__33820){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33821);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33820], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"create-store","create-store",1223778849,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Factory function to create a store"], null)),input_schema33817_33823,cljs.core.deref.call(null,input_checker33818_33824),args__657__auto___33827);
} else {
var temp__5457__auto___33828 = cljs.core.deref.call(null,input_checker33818_33824).call(null,args__657__auto___33827);
if(cljs.core.truth_(temp__5457__auto___33828)){
var error__658__auto___33829 = temp__5457__auto___33828;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"create-store","create-store",1223778849,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Factory function to create a store"], null)),cljs.core.pr_str.call(null,error__658__auto___33829)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33817_33823,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33827,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33829], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var config = G__33820;
while(true){
return asami.core.empty_store;
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"create-store","create-store",1223778849,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Factory function to create a store"], null)),output_schema33816_33822,cljs.core.deref.call(null,output_checker33819_33825),o__659__auto__);
} else {
var temp__5457__auto___33830 = cljs.core.deref.call(null,output_checker33819_33825).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33830)){
var error__658__auto___33831 = temp__5457__auto___33830;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"create-store","create-store",1223778849,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Factory function to create a store"], null)),cljs.core.pr_str.call(null,error__658__auto___33831)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33816_33822,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33831], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33821,output_schema33816_33822,input_schema33817_33823,input_checker33818_33824,output_checker33819_33825))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.core.create_store),schema.core.__GT_FnSchema.call(null,output_schema33816_33822,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33817_33823], null)));

naga.store_registry.register_storage_BANG_.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430),asami.core.create_store);

//# sourceMappingURL=core.js.map?rel=1525291334602
