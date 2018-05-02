// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.schema.store_structs');
goog.require('cljs.core');
goog.require('schema.core');
naga.schema.store_structs.EntityPropertyElt = schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Symbol,schema.core.Num);
naga.schema.store_structs.EntityPattern = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Symbol,"entity")], null);
naga.schema.store_structs.EntityPropertyPattern = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EntityPropertyElt,"entity"),schema.core.one.call(null,naga.schema.store_structs.EntityPropertyElt,"property"),schema.core.optional.call(null,schema.core.Any,"value")], null);
naga.schema.store_structs.EPVPattern = schema.core.if$.call(null,(function (p1__28855_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__28855_SHARP_));
}),naga.schema.store_structs.EntityPattern,naga.schema.store_structs.EntityPropertyPattern);
var ufv___28861 = schema.utils.use_fn_validation;
var output_schema28856_28862 = schema.core.Bool;
var input_schema28857_28863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28858_28864 = (new cljs.core.Delay(((function (ufv___28861,output_schema28856_28862,input_schema28857_28863){
return (function (){
return schema.core.checker.call(null,input_schema28857_28863);
});})(ufv___28861,output_schema28856_28862,input_schema28857_28863))
,null));
var output_checker28859_28865 = (new cljs.core.Delay(((function (ufv___28861,output_schema28856_28862,input_schema28857_28863,input_checker28858_28864){
return (function (){
return schema.core.checker.call(null,output_schema28856_28862);
});})(ufv___28861,output_schema28856_28862,input_schema28857_28863,input_checker28858_28864))
,null));
var ret__2067__auto___28866 = /**
 * Inputs: [x]
 *   Returns: s/Bool
 */
naga.schema.store_structs.vartest_QMARK_ = ((function (ufv___28861,output_schema28856_28862,input_schema28857_28863,input_checker28858_28864,output_checker28859_28865){
return (function naga$schema$store_structs$vartest_QMARK_(G__28860){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___28861);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___28867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28860], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"vartest?","vartest?",1374127623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),input_schema28857_28863,cljs.core.deref.call(null,input_checker28858_28864),args__657__auto___28867);
} else {
var temp__5457__auto___28868 = cljs.core.deref.call(null,input_checker28858_28864).call(null,args__657__auto___28867);
if(cljs.core.truth_(temp__5457__auto___28868)){
var error__658__auto___28869 = temp__5457__auto___28868;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"vartest?","vartest?",1374127623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__658__auto___28869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28857_28863,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___28867,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___28869], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var x = G__28860;
while(true){
return (((x instanceof cljs.core.Symbol)) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["%",null,"?",null], null), null).call(null,cljs.core.first.call(null,cljs.core.name.call(null,x))))));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"vartest?","vartest?",1374127623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),output_schema28856_28862,cljs.core.deref.call(null,output_checker28859_28865),o__659__auto__);
} else {
var temp__5457__auto___28870 = cljs.core.deref.call(null,output_checker28859_28865).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___28870)){
var error__658__auto___28871 = temp__5457__auto___28870;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"vartest?","vartest?",1374127623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__658__auto___28871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28856_28862,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___28871], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___28861,output_schema28856_28862,input_schema28857_28863,input_checker28858_28864,output_checker28859_28865))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.schema.store_structs.vartest_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema28856_28862,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28857_28863], null)));

var ufv___28877 = schema.utils.use_fn_validation;
var output_schema28872_28878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Symbol], null);
var input_schema28873_28879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)))], null);
var input_checker28874_28880 = (new cljs.core.Delay(((function (ufv___28877,output_schema28872_28878,input_schema28873_28879){
return (function (){
return schema.core.checker.call(null,input_schema28873_28879);
});})(ufv___28877,output_schema28872_28878,input_schema28873_28879))
,null));
var output_checker28875_28881 = (new cljs.core.Delay(((function (ufv___28877,output_schema28872_28878,input_schema28873_28879,input_checker28874_28880){
return (function (){
return schema.core.checker.call(null,output_schema28872_28878);
});})(ufv___28877,output_schema28872_28878,input_schema28873_28879,input_checker28874_28880))
,null));
var ret__2067__auto___28882 = /**
 * Inputs: [pattern :- EPVPattern]
 *   Returns: [s/Symbol]
 * 
 *   Return a seq of all variables in a pattern
 */
naga.schema.store_structs.vars = ((function (ufv___28877,output_schema28872_28878,input_schema28873_28879,input_checker28874_28880,output_checker28875_28881){
return (function naga$schema$store_structs$vars(G__28876){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___28877);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___28883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28876], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a seq of all variables in a pattern"], null)),input_schema28873_28879,cljs.core.deref.call(null,input_checker28874_28880),args__657__auto___28883);
} else {
var temp__5457__auto___28884 = cljs.core.deref.call(null,input_checker28874_28880).call(null,args__657__auto___28883);
if(cljs.core.truth_(temp__5457__auto___28884)){
var error__658__auto___28885 = temp__5457__auto___28884;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a seq of all variables in a pattern"], null)),cljs.core.pr_str.call(null,error__658__auto___28885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28873_28879,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___28883,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___28885], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var pattern = G__28876;
while(true){
return cljs.core.filter.call(null,naga.schema.store_structs.vartest_QMARK_,pattern);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a seq of all variables in a pattern"], null)),output_schema28872_28878,cljs.core.deref.call(null,output_checker28875_28881),o__659__auto__);
} else {
var temp__5457__auto___28886 = cljs.core.deref.call(null,output_checker28875_28881).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___28886)){
var error__658__auto___28887 = temp__5457__auto___28886;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Symbol","s/Symbol",716453298,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a seq of all variables in a pattern"], null)),cljs.core.pr_str.call(null,error__658__auto___28887)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28872_28878,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___28887], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___28877,output_schema28872_28878,input_schema28873_28879,input_checker28874_28880,output_checker28875_28881))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.schema.store_structs.vars),schema.core.__GT_FnSchema.call(null,output_schema28872_28878,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28873_28879], null)));

naga.schema.store_structs.FilterPattern = schema.core.pred.call(null,cljs.core.list_QMARK_);
naga.schema.store_structs.Pattern = schema.core.if$.call(null,cljs.core.list_QMARK_,naga.schema.store_structs.FilterPattern,naga.schema.store_structs.EPVPattern);
naga.schema.store_structs.Value = schema.core.pred.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),"Value");
naga.schema.store_structs.Results = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Value], null)], null);
naga.schema.store_structs.EntityPropAxiomElt = schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Num);
naga.schema.store_structs.EntityPropValAxiomElt = schema.core.conditional.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),schema.core.Any);
naga.schema.store_structs.Triple = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"entity"),schema.core.one.call(null,schema.core.Any,"property"),schema.core.one.call(null,schema.core.Any,"value")], null);
naga.schema.store_structs.Axiom = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EntityPropAxiomElt,"entity"),schema.core.one.call(null,naga.schema.store_structs.EntityPropAxiomElt,"property"),schema.core.one.call(null,naga.schema.store_structs.EntityPropValAxiomElt,"value")], null);

//# sourceMappingURL=store_structs.js.map?rel=1525291312499
