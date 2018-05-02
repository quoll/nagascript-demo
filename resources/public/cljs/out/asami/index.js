// Compiled by ClojureScript 1.10.126 {}
goog.provide('asami.index');
goog.require('cljs.core');
goog.require('naga.schema.store_structs');
goog.require('schema.core');
asami.index._QMARK_ = new cljs.core.Keyword(null,"?","?",-1703165233);
var ufv___32591 = schema.utils.use_fn_validation;
var output_schema32583_32592 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.Any])])]);
var input_schema32584_32593 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any])]),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker32585_32594 = (new cljs.core.Delay(((function (ufv___32591,output_schema32583_32592,input_schema32584_32593){
return (function (){
return schema.core.checker.call(null,input_schema32584_32593);
});})(ufv___32591,output_schema32583_32592,input_schema32584_32593))
,null));
var output_checker32586_32595 = (new cljs.core.Delay(((function (ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594){
return (function (){
return schema.core.checker.call(null,output_schema32583_32592);
});})(ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594))
,null));
var ret__2067__auto___32596 = /**
 * Inputs: [idx :- #:s{Any #:s{Any s/Any}} a :- s/Any b :- s/Any c :- s/Any]
 *   Returns: #:s{Any #:s{Any #{s/Any}}}
 * 
 *   Add elements to a 3-level index
 */
asami.index.index_add = ((function (ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594,output_checker32586_32595){
return (function asami$index$index_add(G__32587,G__32588,G__32589,G__32590){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32591);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32597 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32587,G__32588,G__32589,G__32590], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"index-add","index-add",-871718255,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add elements to a 3-level index"], null)),input_schema32584_32593,cljs.core.deref.call(null,input_checker32585_32594),args__657__auto___32597);
} else {
var temp__5457__auto___32598 = cljs.core.deref.call(null,input_checker32585_32594).call(null,args__657__auto___32597);
if(cljs.core.truth_(temp__5457__auto___32598)){
var error__658__auto___32599 = temp__5457__auto___32598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"index-add","index-add",-871718255,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add elements to a 3-level index"], null)),cljs.core.pr_str.call(null,error__658__auto___32599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32584_32593,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32597,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32599], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var idx = G__32587;
var a = G__32588;
var b = G__32589;
var c = G__32590;
while(true){
return cljs.core.update_in.call(null,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),((function (validate__656__auto__,ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594,output_checker32586_32595){
return (function (v){
if(cljs.core.seq.call(null,v)){
return cljs.core.conj.call(null,v,c);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([c]);
}
});})(validate__656__auto__,ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594,output_checker32586_32595))
);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"index-add","index-add",-871718255,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add elements to a 3-level index"], null)),output_schema32583_32592,cljs.core.deref.call(null,output_checker32586_32595),o__659__auto__);
} else {
var temp__5457__auto___32600 = cljs.core.deref.call(null,output_checker32586_32595).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32600)){
var error__658__auto___32601 = temp__5457__auto___32600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"index-add","index-add",-871718255,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Add elements to a 3-level index"], null)),cljs.core.pr_str.call(null,error__658__auto___32601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32583_32592,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32601], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32591,output_schema32583_32592,input_schema32584_32593,input_checker32585_32594,output_checker32586_32595))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.index.index_add),schema.core.__GT_FnSchema.call(null,output_schema32583_32592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32584_32593], null)));

var ufv___32610 = schema.utils.use_fn_validation;
var output_schema32602_32611 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.Any])])]);
var input_schema32603_32612 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.Any])])]),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker32604_32613 = (new cljs.core.Delay(((function (ufv___32610,output_schema32602_32611,input_schema32603_32612){
return (function (){
return schema.core.checker.call(null,input_schema32603_32612);
});})(ufv___32610,output_schema32602_32611,input_schema32603_32612))
,null));
var output_checker32605_32614 = (new cljs.core.Delay(((function (ufv___32610,output_schema32602_32611,input_schema32603_32612,input_checker32604_32613){
return (function (){
return schema.core.checker.call(null,output_schema32602_32611);
});})(ufv___32610,output_schema32602_32611,input_schema32603_32612,input_checker32604_32613))
,null));
var ret__2067__auto___32615 = /**
 * Inputs: [idx :- #:s{Any #:s{Any #{s/Any}}} a :- s/Any b :- s/Any c :- s/Any]
 *   Returns: #:s{Any #:s{Any #{s/Any}}}
 * 
 *   Remove elements from a 3-level index. Returns the new index, or nil if there is no change.
 */
asami.index.index_delete = ((function (ufv___32610,output_schema32602_32611,input_schema32603_32612,input_checker32604_32613,output_checker32605_32614){
return (function asami$index$index_delete(G__32606,G__32607,G__32608,G__32609){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32610);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32616 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32606,G__32607,G__32608,G__32609], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"index-delete","index-delete",-1259196093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove elements from a 3-level index. Returns the new index, or nil if there is no change."], null)),input_schema32603_32612,cljs.core.deref.call(null,input_checker32604_32613),args__657__auto___32616);
} else {
var temp__5457__auto___32617 = cljs.core.deref.call(null,input_checker32604_32613).call(null,args__657__auto___32616);
if(cljs.core.truth_(temp__5457__auto___32617)){
var error__658__auto___32618 = temp__5457__auto___32617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"index-delete","index-delete",-1259196093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove elements from a 3-level index. Returns the new index, or nil if there is no change."], null)),cljs.core.pr_str.call(null,error__658__auto___32618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32603_32612,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32616,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32618], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var idx = G__32606;
var a = G__32607;
var b = G__32608;
var c = G__32609;
while(true){
var temp__5455__auto__ = idx.call(null,a);
if(cljs.core.truth_(temp__5455__auto__)){
var idx2 = temp__5455__auto__;
var temp__5455__auto____$1 = idx2.call(null,b);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx3 = temp__5455__auto____$1;
var new_idx3 = cljs.core.disj.call(null,idx3,c);
if(!((new_idx3 === idx3))){
var new_idx2 = ((cljs.core.seq.call(null,new_idx3))?cljs.core.assoc.call(null,idx2,b,new_idx3):cljs.core.dissoc.call(null,idx2,b));
var new_idx = ((cljs.core.seq.call(null,new_idx2))?cljs.core.assoc.call(null,idx,a,new_idx2):cljs.core.dissoc.call(null,idx,a));
return new_idx;
} else {
return null;
}
} else {
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
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"index-delete","index-delete",-1259196093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove elements from a 3-level index. Returns the new index, or nil if there is no change."], null)),output_schema32602_32611,cljs.core.deref.call(null,output_checker32605_32614),o__659__auto__);
} else {
var temp__5457__auto___32619 = cljs.core.deref.call(null,output_checker32605_32614).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32619)){
var error__658__auto___32620 = temp__5457__auto___32619;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"index-delete","index-delete",-1259196093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),null], null), null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove elements from a 3-level index. Returns the new index, or nil if there is no change."], null)),cljs.core.pr_str.call(null,error__658__auto___32620)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32602_32611,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32620], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32610,output_schema32602_32611,input_schema32603_32612,input_checker32604_32613,output_checker32605_32614))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asami.index.index_delete),schema.core.__GT_FnSchema.call(null,output_schema32602_32611,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32603_32612], null)));

asami.index.simplify = (function asami$index$simplify(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32624 = arguments.length;
var i__4500__auto___32625 = (0);
while(true){
if((i__4500__auto___32625 < len__4499__auto___32624)){
args__4502__auto__.push((arguments[i__4500__auto___32625]));

var G__32626 = (i__4500__auto___32625 + (1));
i__4500__auto___32625 = G__32626;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return asami.index.simplify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

asami.index.simplify.cljs$core$IFn$_invoke$arity$variadic = (function (g,ks){
return cljs.core.map.call(null,(function (p1__32621_SHARP_){
if(cljs.core.truth_(naga.schema.store_structs.vartest_QMARK_.call(null,p1__32621_SHARP_))){
return asami.index._QMARK_;
} else {
return new cljs.core.Keyword(null,"v","v",21465059);
}
}),ks);
});

asami.index.simplify.cljs$lang$maxFixedArity = (1);

asami.index.simplify.cljs$lang$applyTo = (function (seq32622){
var G__32623 = cljs.core.first.call(null,seq32622);
var seq32622__$1 = cljs.core.next.call(null,seq32622);
return asami.index.simplify.cljs$core$IFn$_invoke$arity$variadic(G__32623,seq32622__$1);
});

if(typeof asami.index.get_from_index !== 'undefined'){
} else {
/**
 * Lookup an index in the graph for the requested data
 */
asami.index.get_from_index = (function (){var method_table__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"asami.index","get-from-index"),asami.index.simplify,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4388__auto__,method_table__4384__auto__,prefer_table__4385__auto__,method_cache__4386__auto__,cached_hierarchy__4387__auto__));
})();
}
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"v","v",21465059)], null),(function (p__32627,s,p,o){
var map__32628 = p__32627;
var map__32628__$1 = ((((!((map__32628 == null)))?(((((map__32628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32628):map__32628);
var idx = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword(null,"spo","spo",734923469));
var os = cljs.core.get_in.call(null,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,p], null));
if(cljs.core.truth_(cljs.core.get.call(null,os,o))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"v","v",21465059),asami.index._QMARK_], null),(function (p__32630,s,p,o){
var map__32631 = p__32630;
var map__32631__$1 = ((((!((map__32631 == null)))?(((((map__32631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32631):map__32631);
var idx = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"spo","spo",734923469));
return cljs.core.map.call(null,cljs.core.vector,cljs.core.get_in.call(null,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,p], null)));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),asami.index._QMARK_,new cljs.core.Keyword(null,"v","v",21465059)], null),(function (p__32633,s,p,o){
var map__32634 = p__32633;
var map__32634__$1 = ((((!((map__32634 == null)))?(((((map__32634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32634):map__32634);
var idx = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"osp","osp",-656580125));
return cljs.core.map.call(null,cljs.core.vector,cljs.core.get_in.call(null,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,s], null)));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),asami.index._QMARK_,asami.index._QMARK_], null),(function (p__32636,s,p,o){
var map__32637 = p__32636;
var map__32637__$1 = ((((!((map__32637 == null)))?(((((map__32637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32637):map__32637);
var idx = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"spo","spo",734923469));
var edx = idx.call(null,s);
var iter__4294__auto__ = ((function (edx,map__32637,map__32637__$1,idx){
return (function asami$index$iter__32639(s__32640){
return (new cljs.core.LazySeq(null,((function (edx,map__32637,map__32637__$1,idx){
return (function (){
var s__32640__$1 = s__32640;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32640__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var p__$1 = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4290__auto__ = ((function (s__32640__$1,p__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32637,map__32637__$1,idx){
return (function asami$index$iter__32639_$_iter__32641(s__32642){
return (new cljs.core.LazySeq(null,((function (s__32640__$1,p__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32637,map__32637__$1,idx){
return (function (){
var s__32642__$1 = s__32642;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32642__$1);
if(temp__5457__auto____$1){
var s__32642__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32642__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__32642__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__32644 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__32643 = (0);
while(true){
if((i__32643 < size__4293__auto__)){
var o__$1 = cljs.core._nth.call(null,c__4292__auto__,i__32643);
cljs.core.chunk_append.call(null,b__32644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,o__$1], null));

var G__32645 = (i__32643 + (1));
i__32643 = G__32645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32644),asami$index$iter__32639_$_iter__32641.call(null,cljs.core.chunk_rest.call(null,s__32642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32644),null);
}
} else {
var o__$1 = cljs.core.first.call(null,s__32642__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,o__$1], null),asami$index$iter__32639_$_iter__32641.call(null,cljs.core.rest.call(null,s__32642__$2)));
}
} else {
return null;
}
break;
}
});})(s__32640__$1,p__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32637,map__32637__$1,idx))
,null,null));
});})(s__32640__$1,p__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32637,map__32637__$1,idx))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,edx.call(null,p__$1)));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$index$iter__32639.call(null,cljs.core.rest.call(null,s__32640__$1)));
} else {
var G__32646 = cljs.core.rest.call(null,s__32640__$1);
s__32640__$1 = G__32646;
continue;
}
} else {
return null;
}
break;
}
});})(edx,map__32637,map__32637__$1,idx))
,null,null));
});})(edx,map__32637,map__32637__$1,idx))
;
return iter__4294__auto__.call(null,cljs.core.keys.call(null,edx));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asami.index._QMARK_,new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"v","v",21465059)], null),(function (p__32647,s,p,o){
var map__32648 = p__32647;
var map__32648__$1 = ((((!((map__32648 == null)))?(((((map__32648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32648):map__32648);
var idx = cljs.core.get.call(null,map__32648__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs.core.map.call(null,cljs.core.vector,cljs.core.get_in.call(null,idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,o], null)));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asami.index._QMARK_,new cljs.core.Keyword(null,"v","v",21465059),asami.index._QMARK_], null),(function (p__32650,s,p,o){
var map__32651 = p__32650;
var map__32651__$1 = ((((!((map__32651 == null)))?(((((map__32651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32651):map__32651);
var idx = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var edx = idx.call(null,p);
var iter__4294__auto__ = ((function (edx,map__32651,map__32651__$1,idx){
return (function asami$index$iter__32653(s__32654){
return (new cljs.core.LazySeq(null,((function (edx,map__32651,map__32651__$1,idx){
return (function (){
var s__32654__$1 = s__32654;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32654__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var o__$1 = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4290__auto__ = ((function (s__32654__$1,o__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32651,map__32651__$1,idx){
return (function asami$index$iter__32653_$_iter__32655(s__32656){
return (new cljs.core.LazySeq(null,((function (s__32654__$1,o__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32651,map__32651__$1,idx){
return (function (){
var s__32656__$1 = s__32656;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32656__$1);
if(temp__5457__auto____$1){
var s__32656__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32656__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__32656__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__32658 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__32657 = (0);
while(true){
if((i__32657 < size__4293__auto__)){
var s__$1 = cljs.core._nth.call(null,c__4292__auto__,i__32657);
cljs.core.chunk_append.call(null,b__32658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,o__$1], null));

var G__32659 = (i__32657 + (1));
i__32657 = G__32659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32658),asami$index$iter__32653_$_iter__32655.call(null,cljs.core.chunk_rest.call(null,s__32656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32658),null);
}
} else {
var s__$1 = cljs.core.first.call(null,s__32656__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,o__$1], null),asami$index$iter__32653_$_iter__32655.call(null,cljs.core.rest.call(null,s__32656__$2)));
}
} else {
return null;
}
break;
}
});})(s__32654__$1,o__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32651,map__32651__$1,idx))
,null,null));
});})(s__32654__$1,o__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32651,map__32651__$1,idx))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,edx.call(null,o__$1)));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$index$iter__32653.call(null,cljs.core.rest.call(null,s__32654__$1)));
} else {
var G__32660 = cljs.core.rest.call(null,s__32654__$1);
s__32654__$1 = G__32660;
continue;
}
} else {
return null;
}
break;
}
});})(edx,map__32651,map__32651__$1,idx))
,null,null));
});})(edx,map__32651,map__32651__$1,idx))
;
return iter__4294__auto__.call(null,cljs.core.keys.call(null,edx));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asami.index._QMARK_,asami.index._QMARK_,new cljs.core.Keyword(null,"v","v",21465059)], null),(function (p__32661,s,p,o){
var map__32662 = p__32661;
var map__32662__$1 = ((((!((map__32662 == null)))?(((((map__32662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32662):map__32662);
var idx = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"osp","osp",-656580125));
var edx = idx.call(null,o);
var iter__4294__auto__ = ((function (edx,map__32662,map__32662__$1,idx){
return (function asami$index$iter__32664(s__32665){
return (new cljs.core.LazySeq(null,((function (edx,map__32662,map__32662__$1,idx){
return (function (){
var s__32665__$1 = s__32665;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32665__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var s__$1 = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4290__auto__ = ((function (s__32665__$1,s__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32662,map__32662__$1,idx){
return (function asami$index$iter__32664_$_iter__32666(s__32667){
return (new cljs.core.LazySeq(null,((function (s__32665__$1,s__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32662,map__32662__$1,idx){
return (function (){
var s__32667__$1 = s__32667;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32667__$1);
if(temp__5457__auto____$1){
var s__32667__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32667__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__32667__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__32669 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__32668 = (0);
while(true){
if((i__32668 < size__4293__auto__)){
var p__$1 = cljs.core._nth.call(null,c__4292__auto__,i__32668);
cljs.core.chunk_append.call(null,b__32669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,p__$1], null));

var G__32670 = (i__32668 + (1));
i__32668 = G__32670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32669),asami$index$iter__32664_$_iter__32666.call(null,cljs.core.chunk_rest.call(null,s__32667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32669),null);
}
} else {
var p__$1 = cljs.core.first.call(null,s__32667__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,p__$1], null),asami$index$iter__32664_$_iter__32666.call(null,cljs.core.rest.call(null,s__32667__$2)));
}
} else {
return null;
}
break;
}
});})(s__32665__$1,s__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32662,map__32662__$1,idx))
,null,null));
});})(s__32665__$1,s__$1,xs__6012__auto__,temp__5457__auto__,edx,map__32662,map__32662__$1,idx))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,edx.call(null,s__$1)));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$index$iter__32664.call(null,cljs.core.rest.call(null,s__32665__$1)));
} else {
var G__32671 = cljs.core.rest.call(null,s__32665__$1);
s__32665__$1 = G__32671;
continue;
}
} else {
return null;
}
break;
}
});})(edx,map__32662,map__32662__$1,idx))
,null,null));
});})(edx,map__32662,map__32662__$1,idx))
;
return iter__4294__auto__.call(null,cljs.core.keys.call(null,edx));
}));
cljs.core._add_method.call(null,asami.index.get_from_index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asami.index._QMARK_,asami.index._QMARK_,asami.index._QMARK_], null),(function (p__32672,s,p,o){
var map__32673 = p__32672;
var map__32673__$1 = ((((!((map__32673 == null)))?(((((map__32673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32673):map__32673);
var idx = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"spo","spo",734923469));
var iter__4294__auto__ = ((function (map__32673,map__32673__$1,idx){
return (function asami$index$iter__32675(s__32676){
return (new cljs.core.LazySeq(null,((function (map__32673,map__32673__$1,idx){
return (function (){
var s__32676__$1 = s__32676;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32676__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var s__$1 = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4290__auto__ = ((function (s__32676__$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx){
return (function asami$index$iter__32675_$_iter__32677(s__32678){
return (new cljs.core.LazySeq(null,((function (s__32676__$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx){
return (function (){
var s__32678__$1 = s__32678;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32678__$1);
if(temp__5457__auto____$1){
var xs__6012__auto____$1 = temp__5457__auto____$1;
var p__$1 = cljs.core.first.call(null,xs__6012__auto____$1);
var iterys__4290__auto__ = ((function (s__32678__$1,s__32676__$1,p__$1,xs__6012__auto____$1,temp__5457__auto____$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx){
return (function asami$index$iter__32675_$_iter__32677_$_iter__32679(s__32680){
return (new cljs.core.LazySeq(null,((function (s__32678__$1,s__32676__$1,p__$1,xs__6012__auto____$1,temp__5457__auto____$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx){
return (function (){
var s__32680__$1 = s__32680;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__32680__$1);
if(temp__5457__auto____$2){
var s__32680__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32680__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__32680__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__32682 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__32681 = (0);
while(true){
if((i__32681 < size__4293__auto__)){
var o__$1 = cljs.core._nth.call(null,c__4292__auto__,i__32681);
cljs.core.chunk_append.call(null,b__32682,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,p__$1,o__$1], null));

var G__32683 = (i__32681 + (1));
i__32681 = G__32683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32682),asami$index$iter__32675_$_iter__32677_$_iter__32679.call(null,cljs.core.chunk_rest.call(null,s__32680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32682),null);
}
} else {
var o__$1 = cljs.core.first.call(null,s__32680__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,p__$1,o__$1], null),asami$index$iter__32675_$_iter__32677_$_iter__32679.call(null,cljs.core.rest.call(null,s__32680__$2)));
}
} else {
return null;
}
break;
}
});})(s__32678__$1,s__32676__$1,p__$1,xs__6012__auto____$1,temp__5457__auto____$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx))
,null,null));
});})(s__32678__$1,s__32676__$1,p__$1,xs__6012__auto____$1,temp__5457__auto____$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,idx.call(null,s__$1).call(null,p__$1)));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$index$iter__32675_$_iter__32677.call(null,cljs.core.rest.call(null,s__32678__$1)));
} else {
var G__32684 = cljs.core.rest.call(null,s__32678__$1);
s__32678__$1 = G__32684;
continue;
}
} else {
return null;
}
break;
}
});})(s__32676__$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx))
,null,null));
});})(s__32676__$1,s__$1,xs__6012__auto__,temp__5457__auto__,map__32673,map__32673__$1,idx))
;
var fs__4291__auto__ = cljs.core.seq.call(null,iterys__4290__auto__.call(null,cljs.core.keys.call(null,idx.call(null,s__$1))));
if(fs__4291__auto__){
return cljs.core.concat.call(null,fs__4291__auto__,asami$index$iter__32675.call(null,cljs.core.rest.call(null,s__32676__$1)));
} else {
var G__32685 = cljs.core.rest.call(null,s__32676__$1);
s__32676__$1 = G__32685;
continue;
}
} else {
return null;
}
break;
}
});})(map__32673,map__32673__$1,idx))
,null,null));
});})(map__32673,map__32673__$1,idx))
;
return iter__4294__auto__.call(null,cljs.core.keys.call(null,idx));
}));

/**
 * @interface
 */
asami.index.Graph = function(){};

/**
 * Adds triples to the graph
 */
asami.index.graph_add = (function asami$index$graph_add(this$,subj,pred,obj){
if(((!((this$ == null))) && (!((this$.asami$index$Graph$graph_add$arity$4 == null))))){
return this$.asami$index$Graph$graph_add$arity$4(this$,subj,pred,obj);
} else {
var x__4213__auto__ = (((this$ == null))?null:this$);
var m__4214__auto__ = (asami.index.graph_add[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,this$,subj,pred,obj);
} else {
var m__4214__auto____$1 = (asami.index.graph_add["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,this$,subj,pred,obj);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.graph-add",this$);
}
}
}
});

/**
 * Removes triples from the graph
 */
asami.index.graph_delete = (function asami$index$graph_delete(this$,subj,pred,obj){
if(((!((this$ == null))) && (!((this$.asami$index$Graph$graph_delete$arity$4 == null))))){
return this$.asami$index$Graph$graph_delete$arity$4(this$,subj,pred,obj);
} else {
var x__4213__auto__ = (((this$ == null))?null:this$);
var m__4214__auto__ = (asami.index.graph_delete[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,this$,subj,pred,obj);
} else {
var m__4214__auto____$1 = (asami.index.graph_delete["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,this$,subj,pred,obj);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.graph-delete",this$);
}
}
}
});

/**
 * Returns all subjects that have changed in this graph, compared to other
 */
asami.index.graph_diff = (function asami$index$graph_diff(this$,other){
if(((!((this$ == null))) && (!((this$.asami$index$Graph$graph_diff$arity$2 == null))))){
return this$.asami$index$Graph$graph_diff$arity$2(this$,other);
} else {
var x__4213__auto__ = (((this$ == null))?null:this$);
var m__4214__auto__ = (asami.index.graph_diff[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,this$,other);
} else {
var m__4214__auto____$1 = (asami.index.graph_diff["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.graph-diff",this$);
}
}
}
});

/**
 * Resolves patterns from the graph, and returns unbound columns only
 */
asami.index.resolve_triple = (function asami$index$resolve_triple(this$,subj,pred,obj){
if(((!((this$ == null))) && (!((this$.asami$index$Graph$resolve_triple$arity$4 == null))))){
return this$.asami$index$Graph$resolve_triple$arity$4(this$,subj,pred,obj);
} else {
var x__4213__auto__ = (((this$ == null))?null:this$);
var m__4214__auto__ = (asami.index.resolve_triple[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,this$,subj,pred,obj);
} else {
var m__4214__auto____$1 = (asami.index.resolve_triple["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,this$,subj,pred,obj);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.resolve-triple",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {asami.index.Graph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
asami.index.GraphIndexed = (function (spo,pos,osp,__meta,__extmap,__hash){
this.spo = spo;
this.pos = pos;
this.osp = osp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
asami.index.GraphIndexed.prototype.asami$index$Graph$ = cljs.core.PROTOCOL_SENTINEL;

asami.index.GraphIndexed.prototype.asami$index$Graph$graph_add$arity$4 = (function (this$,subj,pred,obj){
var self__ = this;
var this$__$1 = this;
var new_spo = asami.index.index_add.call(null,self__.spo,subj,pred,obj);
if((self__.spo === new_spo)){
return this$__$1;
} else {
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"spo","spo",734923469),new_spo,new cljs.core.Keyword(null,"pos","pos",-864607220),asami.index.index_add.call(null,self__.pos,pred,obj,subj),new cljs.core.Keyword(null,"osp","osp",-656580125),asami.index.index_add.call(null,self__.osp,obj,subj,pred));
}
});

asami.index.GraphIndexed.prototype.asami$index$Graph$graph_delete$arity$4 = (function (this$,subj,pred,obj){
var self__ = this;
var this$__$1 = this;
var temp__5455__auto__ = asami.index.index_delete.call(null,self__.spo,subj,pred,obj);
if(cljs.core.truth_(temp__5455__auto__)){
var idx = temp__5455__auto__;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"spo","spo",734923469),idx,new cljs.core.Keyword(null,"pos","pos",-864607220),asami.index.index_delete.call(null,self__.pos,pred,obj,subj),new cljs.core.Keyword(null,"osp","osp",-656580125),asami.index.index_delete.call(null,self__.osp,obj,subj,pred));
} else {
return this$__$1;
}
});

asami.index.GraphIndexed.prototype.asami$index$Graph$graph_diff$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s_po = cljs.core.remove.call(null,((function (this$__$1){
return (function (p__32691){
var vec__32692 = p__32691;
var s = cljs.core.nth.call(null,vec__32692,(0),null);
var po = cljs.core.nth.call(null,vec__32692,(1),null);
return cljs.core._EQ_.call(null,po,cljs.core.get.call(null,new cljs.core.Keyword(null,"spo","spo",734923469).cljs$core$IFn$_invoke$arity$1(other),s));
});})(this$__$1))
,self__.spo);
return cljs.core.map.call(null,cljs.core.first,s_po);
});

asami.index.GraphIndexed.prototype.asami$index$Graph$resolve_triple$arity$4 = (function (this$,subj,pred,obj){
var self__ = this;
var this$__$1 = this;
return asami.index.get_from_index.call(null,this$__$1,subj,pred,obj);
});

asami.index.GraphIndexed.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

asami.index.GraphIndexed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k32687,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__32695 = k32687;
var G__32695__$1 = (((G__32695 instanceof cljs.core.Keyword))?G__32695.fqn:null);
switch (G__32695__$1) {
case "spo":
return self__.spo;

break;
case "pos":
return self__.pos;

break;
case "osp":
return self__.osp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32687,else__4177__auto__);

}
});

asami.index.GraphIndexed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#asami.index.GraphIndexed{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spo","spo",734923469),self__.spo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"osp","osp",-656580125),self__.osp],null))], null),self__.__extmap));
});

asami.index.GraphIndexed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32686){
var self__ = this;
var G__32686__$1 = this;
return (new cljs.core.RecordIter((0),G__32686__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spo","spo",734923469),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"osp","osp",-656580125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

asami.index.GraphIndexed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

asami.index.GraphIndexed.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new asami.index.GraphIndexed(self__.spo,self__.pos,self__.osp,self__.__meta,self__.__extmap,self__.__hash));
});

asami.index.GraphIndexed.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

asami.index.GraphIndexed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (1947501688 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

asami.index.GraphIndexed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32688,other32689){
var self__ = this;
var this32688__$1 = this;
return ((!((other32689 == null))) && ((this32688__$1.constructor === other32689.constructor)) && (cljs.core._EQ_.call(null,this32688__$1.spo,other32689.spo)) && (cljs.core._EQ_.call(null,this32688__$1.pos,other32689.pos)) && (cljs.core._EQ_.call(null,this32688__$1.osp,other32689.osp)) && (cljs.core._EQ_.call(null,this32688__$1.__extmap,other32689.__extmap)));
});

asami.index.GraphIndexed.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"osp","osp",-656580125),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"spo","spo",734923469),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new asami.index.GraphIndexed(self__.spo,self__.pos,self__.osp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

asami.index.GraphIndexed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__32686){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__32696 = cljs.core.keyword_identical_QMARK_;
var expr__32697 = k__4182__auto__;
if(cljs.core.truth_(pred__32696.call(null,new cljs.core.Keyword(null,"spo","spo",734923469),expr__32697))){
return (new asami.index.GraphIndexed(G__32686,self__.pos,self__.osp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32696.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__32697))){
return (new asami.index.GraphIndexed(self__.spo,G__32686,self__.osp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32696.call(null,new cljs.core.Keyword(null,"osp","osp",-656580125),expr__32697))){
return (new asami.index.GraphIndexed(self__.spo,self__.pos,G__32686,self__.__meta,self__.__extmap,null));
} else {
return (new asami.index.GraphIndexed(self__.spo,self__.pos,self__.osp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__32686),null));
}
}
}
});

asami.index.GraphIndexed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spo","spo",734923469),self__.spo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"osp","osp",-656580125),self__.osp,null))], null),self__.__extmap));
});

asami.index.GraphIndexed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__32686){
var self__ = this;
var this__4173__auto____$1 = this;
return (new asami.index.GraphIndexed(self__.spo,self__.pos,self__.osp,G__32686,self__.__extmap,self__.__hash));
});

asami.index.GraphIndexed.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

asami.index.GraphIndexed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spo","spo",-1919512300,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"osp","osp",983951402,null)], null);
});

asami.index.GraphIndexed.cljs$lang$type = true;

asami.index.GraphIndexed.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"asami.index/GraphIndexed",null,(1),null));
});

asami.index.GraphIndexed.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"asami.index/GraphIndexed");
});

/**
 * Positional factory function for asami.index/GraphIndexed.
 */
asami.index.__GT_GraphIndexed = (function asami$index$__GT_GraphIndexed(spo,pos,osp){
return (new asami.index.GraphIndexed(spo,pos,osp,null,null,null));
});

/**
 * Factory function for asami.index/GraphIndexed, taking a map of keywords to field values.
 */
asami.index.map__GT_GraphIndexed = (function asami$index$map__GT_GraphIndexed(G__32690){
return (new asami.index.GraphIndexed(new cljs.core.Keyword(null,"spo","spo",734923469).cljs$core$IFn$_invoke$arity$1(G__32690),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__32690),new cljs.core.Keyword(null,"osp","osp",-656580125).cljs$core$IFn$_invoke$arity$1(G__32690),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32690,new cljs.core.Keyword(null,"spo","spo",734923469),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"osp","osp",-656580125))),null));
});

/**
 * Convenience function to extract elements out of a pattern to query for it
 */
asami.index.resolve_pattern = (function asami$index$resolve_pattern(graph,p__32700){
var vec__32701 = p__32700;
var s = cljs.core.nth.call(null,vec__32701,(0),null);
var p = cljs.core.nth.call(null,vec__32701,(1),null);
var o = cljs.core.nth.call(null,vec__32701,(2),null);
var pattern = vec__32701;
return asami.index.resolve_triple.call(null,graph,s,p,o);
});
asami.index.empty_graph = asami.index.__GT_GraphIndexed.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=index.js.map?rel=1525291332900
