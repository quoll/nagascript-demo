// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.lang.pabu');
goog.require('cljs.core');
goog.require('naga.schema.store_structs');
goog.require('naga.schema.structs');
goog.require('naga.lang.parser');
goog.require('naga.rules');
goog.require('naga.util');
goog.require('clojure.string');
goog.require('schema.core');
naga.lang.pabu.Args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"entity"),schema.core.optional.call(null,schema.core.Any,"value")], null);
naga.lang.pabu.AxiomAST = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"axiom","axiom",-1683284564)),new cljs.core.Keyword(null,"axiom","axiom",-1683284564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"Property"),schema.core.one.call(null,naga.lang.pabu.Args,"args")], null)], null);
var ufv___32273 = schema.utils.use_fn_validation;
var output_schema32248_32274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Triple], null);
var input_schema32249_32275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker32250_32276 = (new cljs.core.Delay(((function (ufv___32273,output_schema32248_32274,input_schema32249_32275){
return (function (){
return schema.core.checker.call(null,input_schema32249_32275);
});})(ufv___32273,output_schema32248_32274,input_schema32249_32275))
,null));
var output_checker32251_32277 = (new cljs.core.Delay(((function (ufv___32273,output_schema32248_32274,input_schema32249_32275,input_checker32250_32276){
return (function (){
return schema.core.checker.call(null,output_schema32248_32274);
});})(ufv___32273,output_schema32248_32274,input_schema32249_32275,input_checker32250_32276))
,null));
var ret__2067__auto___32278 = /**
 * Inputs: [[property [s o :as args]]]
 *   Returns: [Triple]
 * 
 *   Converts raw parsed predicate information into a seq of triples
 */
naga.lang.pabu.triplets = ((function (ufv___32273,output_schema32248_32274,input_schema32249_32275,input_checker32250_32276,output_checker32251_32277){
return (function naga$lang$pabu$triplets(G__32252){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32273);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32252], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"triplets","triplets",-340025615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a seq of triples"], null)),input_schema32249_32275,cljs.core.deref.call(null,input_checker32250_32276),args__657__auto___32279);
} else {
var temp__5457__auto___32280 = cljs.core.deref.call(null,input_checker32250_32276).call(null,args__657__auto___32279);
if(cljs.core.truth_(temp__5457__auto___32280)){
var error__658__auto___32281 = temp__5457__auto___32280;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"triplets","triplets",-340025615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a seq of triples"], null)),cljs.core.pr_str.call(null,error__658__auto___32281)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32249_32275,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32279,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32281], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__32259 = G__32252;
var vec__32260 = G__32259;
var property = cljs.core.nth.call(null,vec__32260,(0),null);
var vec__32263 = cljs.core.nth.call(null,vec__32260,(1),null);
var s = cljs.core.nth.call(null,vec__32263,(0),null);
var o = cljs.core.nth.call(null,vec__32263,(1),null);
var args = vec__32263;
var G__32259__$1 = G__32259;
while(true){
var vec__32266 = G__32259__$1;
var property__$1 = cljs.core.nth.call(null,vec__32266,(0),null);
var vec__32269 = cljs.core.nth.call(null,vec__32266,(1),null);
var s__$1 = cljs.core.nth.call(null,vec__32269,(0),null);
var o__$1 = cljs.core.nth.call(null,vec__32269,(1),null);
var args__$1 = vec__32269;
var G__32272 = cljs.core.count.call(null,args__$1);
switch (G__32272) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,new cljs.core.Keyword("rdf","type","rdf/type",1175423232),new cljs.core.Keyword("owl","thing","owl/thing",270734743)], null)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,new cljs.core.Keyword("rdf","type","rdf/type",1175423232),property__$1], null)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,property__$1,o__$1], null)], null);

break;
default:
throw cljs.core.ex_info.call(null,"Multi-arity predicates not yet supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null));

}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"triplets","triplets",-340025615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a seq of triples"], null)),output_schema32248_32274,cljs.core.deref.call(null,output_checker32251_32277),o__659__auto__);
} else {
var temp__5457__auto___32283 = cljs.core.deref.call(null,output_checker32251_32277).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32283)){
var error__658__auto___32284 = temp__5457__auto___32283;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"triplets","triplets",-340025615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a seq of triples"], null)),cljs.core.pr_str.call(null,error__658__auto___32284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32248_32274,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32284], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32273,output_schema32248_32274,input_schema32249_32275,input_checker32250_32276,output_checker32251_32277))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.triplets),schema.core.__GT_FnSchema.call(null,output_schema32248_32274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32249_32275], null)));

var ufv___32290 = schema.utils.use_fn_validation;
var output_schema32285_32291 = naga.schema.store_structs.Triple;
var input_schema32286_32292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"raw","raw",-1049784497,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32287_32293 = (new cljs.core.Delay(((function (ufv___32290,output_schema32285_32291,input_schema32286_32292){
return (function (){
return schema.core.checker.call(null,input_schema32286_32292);
});})(ufv___32290,output_schema32285_32291,input_schema32286_32292))
,null));
var output_checker32288_32294 = (new cljs.core.Delay(((function (ufv___32290,output_schema32285_32291,input_schema32286_32292,input_checker32287_32293){
return (function (){
return schema.core.checker.call(null,output_schema32285_32291);
});})(ufv___32290,output_schema32285_32291,input_schema32286_32292,input_checker32287_32293))
,null));
var ret__2067__auto___32295 = /**
 * Inputs: [raw]
 *   Returns: Triple
 * 
 *   Converts raw parsed predicate information into a single triple
 */
naga.lang.pabu.triplet = ((function (ufv___32290,output_schema32285_32291,input_schema32286_32292,input_checker32287_32293,output_checker32288_32294){
return (function naga$lang$pabu$triplet(G__32289){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32290);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32289], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"triplet","triplet",-1611022914,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Triple","Triple",1804984392,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a single triple"], null)),input_schema32286_32292,cljs.core.deref.call(null,input_checker32287_32293),args__657__auto___32296);
} else {
var temp__5457__auto___32297 = cljs.core.deref.call(null,input_checker32287_32293).call(null,args__657__auto___32296);
if(cljs.core.truth_(temp__5457__auto___32297)){
var error__658__auto___32298 = temp__5457__auto___32297;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"triplet","triplet",-1611022914,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Triple","Triple",1804984392,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a single triple"], null)),cljs.core.pr_str.call(null,error__658__auto___32298)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32286_32292,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32296,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32298], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var raw = G__32289;
while(true){
return cljs.core.first.call(null,naga.lang.pabu.triplets.call(null,raw));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"triplet","triplet",-1611022914,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Triple","Triple",1804984392,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a single triple"], null)),output_schema32285_32291,cljs.core.deref.call(null,output_checker32288_32294),o__659__auto__);
} else {
var temp__5457__auto___32299 = cljs.core.deref.call(null,output_checker32288_32294).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32299)){
var error__658__auto___32300 = temp__5457__auto___32299;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"triplet","triplet",-1611022914,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Triple","Triple",1804984392,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts raw parsed predicate information into a single triple"], null)),cljs.core.pr_str.call(null,error__658__auto___32300)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32285_32291,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32300], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32290,output_schema32285_32291,input_schema32286_32292,input_checker32287_32293,output_checker32288_32294))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.triplet),schema.core.__GT_FnSchema.call(null,output_schema32285_32291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32286_32292], null)));

/**
 * Converts the AST for a structure into either a seq of triplets or predicates.
 * Types are intentionally loose, since it's either a pair or a list.
 */
naga.lang.pabu.structure = (function naga$lang$pabu$structure(ast_data){
if(cljs.core.vector_QMARK_.call(null,ast_data)){
var vec__32301 = ast_data;
var p = cljs.core.nth.call(null,vec__32301,(0),null);
var args = cljs.core.nth.call(null,vec__32301,(1),null);
var temp__5455__auto__ = (function (){var and__3913__auto__ = (p instanceof cljs.core.Keyword);
if(and__3913__auto__){
return naga.util.get_fn_reference.call(null,p);
} else {
return and__3913__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.cons.call(null,f,args),cljs.core.meta.call(null,args))], null);
} else {
return naga.lang.pabu.triplets.call(null,ast_data);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_data], null);
}
});
var ufv___32315 = schema.utils.use_fn_validation;
var output_schema32304_32316 = naga.schema.store_structs.Axiom;
var input_schema32305_32317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.lang.pabu.AxiomAST,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker32306_32318 = (new cljs.core.Delay(((function (ufv___32315,output_schema32304_32316,input_schema32305_32317){
return (function (){
return schema.core.checker.call(null,input_schema32305_32317);
});})(ufv___32315,output_schema32304_32316,input_schema32305_32317))
,null));
var output_checker32307_32319 = (new cljs.core.Delay(((function (ufv___32315,output_schema32304_32316,input_schema32305_32317,input_checker32306_32318){
return (function (){
return schema.core.checker.call(null,output_schema32304_32316);
});})(ufv___32315,output_schema32304_32316,input_schema32305_32317,input_checker32306_32318))
,null));
var ret__2067__auto___32320 = /**
 * Inputs: [{axiom :axiom, :as axiom-ast} :- AxiomAST]
 *   Returns: Axiom
 * 
 *   Converts the axiom structure returned from the parser
 */
naga.lang.pabu.ast__GT_axiom = ((function (ufv___32315,output_schema32304_32316,input_schema32305_32317,input_checker32306_32318,output_checker32307_32319){
return (function naga$lang$pabu$ast__GT_axiom(G__32308){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32315);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32308], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"ast->axiom","ast->axiom",1324442323,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the axiom structure returned from the parser"], null)),input_schema32305_32317,cljs.core.deref.call(null,input_checker32306_32318),args__657__auto___32321);
} else {
var temp__5457__auto___32322 = cljs.core.deref.call(null,input_checker32306_32318).call(null,args__657__auto___32321);
if(cljs.core.truth_(temp__5457__auto___32322)){
var error__658__auto___32323 = temp__5457__auto___32322;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ast->axiom","ast->axiom",1324442323,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the axiom structure returned from the parser"], null)),cljs.core.pr_str.call(null,error__658__auto___32323)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32305_32317,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32321,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32323], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__32310 = G__32308;
var map__32311 = G__32310;
var map__32311__$1 = ((((!((map__32311 == null)))?(((((map__32311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);
var axiom_ast = map__32311__$1;
var axiom = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"axiom","axiom",-1683284564));
var G__32310__$1 = G__32310;
while(true){
var map__32313 = G__32310__$1;
var map__32313__$1 = ((((!((map__32313 == null)))?(((((map__32313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32313):map__32313);
var axiom_ast__$1 = map__32313__$1;
var axiom__$1 = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"axiom","axiom",-1683284564));
return naga.lang.pabu.triplet.call(null,axiom__$1);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"ast->axiom","ast->axiom",1324442323,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the axiom structure returned from the parser"], null)),output_schema32304_32316,cljs.core.deref.call(null,output_checker32307_32319),o__659__auto__);
} else {
var temp__5457__auto___32324 = cljs.core.deref.call(null,output_checker32307_32319).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32324)){
var error__658__auto___32325 = temp__5457__auto___32324;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ast->axiom","ast->axiom",1324442323,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the axiom structure returned from the parser"], null)),cljs.core.pr_str.call(null,error__658__auto___32325)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32304_32316,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32325], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32315,output_schema32304_32316,input_schema32305_32317,input_checker32306_32318,output_checker32307_32319))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.ast__GT_axiom),schema.core.__GT_FnSchema.call(null,output_schema32304_32316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32305_32317], null)));

/**
 * Either a Variable or a Keyword
 */
naga.lang.pabu.VK = schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Symbol);
naga.lang.pabu.PatternPredicate = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.lang.pabu.VK,"property"),schema.core.one.call(null,naga.lang.pabu.Args,"arguments")], null);
naga.lang.pabu.ExpressionPredicate = schema.core.pred.call(null,cljs.core.list_QMARK_);
naga.lang.pabu.Predicate = schema.core.cond_pre.call(null,naga.lang.pabu.ExpressionPredicate,naga.lang.pabu.PatternPredicate);
naga.lang.pabu.RuleAST = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"rule","rule",729973257)),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.lang.pabu.VK,"property"),schema.core.one.call(null,naga.lang.pabu.Args,"arguments")], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.lang.pabu.Predicate], null)], null);
var ufv___32337 = schema.utils.use_fn_validation;
var output_schema32326_32338 = naga.schema.structs.Rule;
var input_schema32327_32339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.lang.pabu.RuleAST,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker32328_32340 = (new cljs.core.Delay(((function (ufv___32337,output_schema32326_32338,input_schema32327_32339){
return (function (){
return schema.core.checker.call(null,input_schema32327_32339);
});})(ufv___32337,output_schema32326_32338,input_schema32327_32339))
,null));
var output_checker32329_32341 = (new cljs.core.Delay(((function (ufv___32337,output_schema32326_32338,input_schema32327_32339,input_checker32328_32340){
return (function (){
return schema.core.checker.call(null,output_schema32326_32338);
});})(ufv___32337,output_schema32326_32338,input_schema32327_32339,input_checker32328_32340))
,null));
var ret__2067__auto___32342 = /**
 * Inputs: [{:keys [head body], :as rule-ast} :- RuleAST]
 *   Returns: Rule
 * 
 *   Converts the rule structure returned from the parser
 */
naga.lang.pabu.ast__GT_rule = ((function (ufv___32337,output_schema32326_32338,input_schema32327_32339,input_checker32328_32340,output_checker32329_32341){
return (function naga$lang$pabu$ast__GT_rule(G__32330){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32337);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32330], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"ast->rule","ast->rule",-1669268394,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the rule structure returned from the parser"], null)),input_schema32327_32339,cljs.core.deref.call(null,input_checker32328_32340),args__657__auto___32343);
} else {
var temp__5457__auto___32344 = cljs.core.deref.call(null,input_checker32328_32340).call(null,args__657__auto___32343);
if(cljs.core.truth_(temp__5457__auto___32344)){
var error__658__auto___32345 = temp__5457__auto___32344;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ast->rule","ast->rule",-1669268394,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the rule structure returned from the parser"], null)),cljs.core.pr_str.call(null,error__658__auto___32345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32327_32339,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32343,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32345], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__32332 = G__32330;
var map__32333 = G__32332;
var map__32333__$1 = ((((!((map__32333 == null)))?(((((map__32333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32333):map__32333);
var rule_ast = map__32333__$1;
var head = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__32332__$1 = G__32332;
while(true){
var map__32335 = G__32332__$1;
var map__32335__$1 = ((((!((map__32335 == null)))?(((((map__32335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32335):map__32335);
var rule_ast__$1 = map__32335__$1;
var head__$1 = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body__$1 = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return naga.rules.rule.call(null,cljs.core.map.call(null,naga.lang.pabu.triplet,head__$1),cljs.core.mapcat.call(null,naga.lang.pabu.structure,body__$1),cljs.core.name.call(null,cljs.core.gensym.call(null,cljs.core.name.call(null,cljs.core.ffirst.call(null,head__$1)))));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"ast->rule","ast->rule",-1669268394,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the rule structure returned from the parser"], null)),output_schema32326_32338,cljs.core.deref.call(null,output_checker32329_32341),o__659__auto__);
} else {
var temp__5457__auto___32346 = cljs.core.deref.call(null,output_checker32329_32341).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32346)){
var error__658__auto___32347 = temp__5457__auto___32346;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ast->rule","ast->rule",-1669268394,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts the rule structure returned from the parser"], null)),cljs.core.pr_str.call(null,error__658__auto___32347)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32326_32338,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32347], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32337,output_schema32326_32338,input_schema32327_32339,input_checker32328_32340,output_checker32329_32341))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.ast__GT_rule),schema.core.__GT_FnSchema.call(null,output_schema32326_32338,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32327_32339], null)));

var ufv___32353 = schema.utils.use_fn_validation;
var output_schema32348_32354 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.Rule], null),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null)], null);
var input_schema32349_32355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker32350_32356 = (new cljs.core.Delay(((function (ufv___32353,output_schema32348_32354,input_schema32349_32355){
return (function (){
return schema.core.checker.call(null,input_schema32349_32355);
});})(ufv___32353,output_schema32348_32354,input_schema32349_32355))
,null));
var output_checker32351_32357 = (new cljs.core.Delay(((function (ufv___32353,output_schema32348_32354,input_schema32349_32355,input_checker32350_32356){
return (function (){
return schema.core.checker.call(null,output_schema32348_32354);
});})(ufv___32353,output_schema32348_32354,input_schema32349_32355,input_checker32350_32356))
,null));
var ret__2067__auto___32358 = /**
 * Inputs: [s :- s/Str]
 *   Returns: {:rules [Rule], :axioms [Axiom]}
 * 
 *   Reads a string
 */
naga.lang.pabu.read_str = ((function (ufv___32353,output_schema32348_32354,input_schema32349_32355,input_checker32350_32356,output_checker32351_32357){
return (function naga$lang$pabu$read_str(G__32352){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32353);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32352], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"read-str","read-str",-821934360,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a string"], null)),input_schema32349_32355,cljs.core.deref.call(null,input_checker32350_32356),args__657__auto___32359);
} else {
var temp__5457__auto___32360 = cljs.core.deref.call(null,input_checker32350_32356).call(null,args__657__auto___32359);
if(cljs.core.truth_(temp__5457__auto___32360)){
var error__658__auto___32361 = temp__5457__auto___32360;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"read-str","read-str",-821934360,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a string"], null)),cljs.core.pr_str.call(null,error__658__auto___32361)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32349_32355,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32359,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32361], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var s = G__32352;
while(true){
var program_ast = naga.lang.parser.parse.call(null,s);
var axioms = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"axiom","axiom",-1683284564)),new cljs.core.Keyword(null,"type","type",1174270348)),program_ast);
var rules = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"rule","rule",729973257)),new cljs.core.Keyword(null,"type","type",1174270348)),program_ast);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.map.call(null,naga.lang.pabu.ast__GT_rule,rules),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),cljs.core.map.call(null,naga.lang.pabu.ast__GT_axiom,axioms)], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"read-str","read-str",-821934360,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a string"], null)),output_schema32348_32354,cljs.core.deref.call(null,output_checker32351_32357),o__659__auto__);
} else {
var temp__5457__auto___32362 = cljs.core.deref.call(null,output_checker32351_32357).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32362)){
var error__658__auto___32363 = temp__5457__auto___32362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"read-str","read-str",-821934360,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a string"], null)),cljs.core.pr_str.call(null,error__658__auto___32363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32348_32354,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32363], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32353,output_schema32348_32354,input_schema32349_32355,input_checker32350_32356,output_checker32351_32357))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.read_str),schema.core.__GT_FnSchema.call(null,output_schema32348_32354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32349_32355], null)));

naga.lang.pabu.builtins = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core._EQ_,"=",cljs.core.not_EQ_,"!=",cljs.core._LT_,"<",cljs.core._GT_,">",cljs.core._GT__EQ_,">=",cljs.core._LT__EQ_,"<="]);
naga.lang.pabu.builtin_labels = cljs.core.set.call(null,cljs.core.vals.call(null,naga.lang.pabu.builtins));
naga.lang.pabu.ps = (function naga$lang$pabu$ps(e){
var pabu_var = (function naga$lang$pabu$ps_$_pabu_var(e__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.second.call(null,e__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,e__$1,(2)))].join('');
});
if((e instanceof cljs.core.Symbol)){
var n = cljs.core.name.call(null,e);
if(cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,n))){
return pabu_var.call(null,n);
} else {
return n;
}
} else {
if((e instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),(1));
} else {
var temp__5455__auto__ = naga.lang.pabu.builtins.call(null,e);
if(cljs.core.truth_(temp__5455__auto__)){
var l = temp__5455__auto__;
return l;
} else {
return e;
}

}
}
});
var ufv___32373 = schema.utils.use_fn_validation;
var output_schema32364_32374 = schema.core.Str;
var input_schema32365_32375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"epv","epv",-381071908,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)))], null);
var input_checker32366_32376 = (new cljs.core.Delay(((function (ufv___32373,output_schema32364_32374,input_schema32365_32375){
return (function (){
return schema.core.checker.call(null,input_schema32365_32375);
});})(ufv___32373,output_schema32364_32374,input_schema32365_32375))
,null));
var output_checker32367_32377 = (new cljs.core.Delay(((function (ufv___32373,output_schema32364_32374,input_schema32365_32375,input_checker32366_32376){
return (function (){
return schema.core.checker.call(null,output_schema32364_32374);
});})(ufv___32373,output_schema32364_32374,input_schema32365_32375,input_checker32366_32376))
,null));
var ret__2067__auto___32378 = /**
 * Inputs: [epv :- EPVPattern]
 *   Returns: s/Str
 */
naga.lang.pabu.predicate__GT_string = ((function (ufv___32373,output_schema32364_32374,input_schema32365_32375,input_checker32366_32376,output_checker32367_32377){
return (function naga$lang$pabu$predicate__GT_string(G__32368){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32373);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32368], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"predicate->string","predicate->string",1076200428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),input_schema32365_32375,cljs.core.deref.call(null,input_checker32366_32376),args__657__auto___32379);
} else {
var temp__5457__auto___32380 = cljs.core.deref.call(null,input_checker32366_32376).call(null,args__657__auto___32379);
if(cljs.core.truth_(temp__5457__auto___32380)){
var error__658__auto___32381 = temp__5457__auto___32380;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"predicate->string","predicate->string",1076200428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32381)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32365_32375,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32379,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32381], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var epv = G__32368;
while(true){
var vec__32369 = cljs.core.map.call(null,naga.lang.pabu.ps,epv);
var e = cljs.core.nth.call(null,vec__32369,(0),null);
var p = cljs.core.nth.call(null,vec__32369,(1),null);
var v = cljs.core.nth.call(null,vec__32369,(2),null);
var G__32372 = cljs.core.count.call(null,epv);
switch (G__32372) {
case (1):
return e;

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),")"].join('');

break;
case (3):
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("rdf","type","rdf/type",1175423232),p)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),")"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),")"].join('');
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32372)].join('')));

}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"predicate->string","predicate->string",1076200428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),output_schema32364_32374,cljs.core.deref.call(null,output_checker32367_32377),o__659__auto__);
} else {
var temp__5457__auto___32383 = cljs.core.deref.call(null,output_checker32367_32377).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32383)){
var error__658__auto___32384 = temp__5457__auto___32383;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"predicate->string","predicate->string",1076200428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32384)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32364_32374,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32384], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32373,output_schema32364_32374,input_schema32365_32375,input_checker32366_32376,output_checker32367_32377))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.predicate__GT_string),schema.core.__GT_FnSchema.call(null,output_schema32364_32374,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32365_32375], null)));

var ufv___32393 = schema.utils.use_fn_validation;
var output_schema32385_32394 = schema.core.Str;
var input_schema32386_32395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.FilterPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"FilterPattern","FilterPattern",1601359407,null)], null)))], null);
var input_checker32387_32396 = (new cljs.core.Delay(((function (ufv___32393,output_schema32385_32394,input_schema32386_32395){
return (function (){
return schema.core.checker.call(null,input_schema32386_32395);
});})(ufv___32393,output_schema32385_32394,input_schema32386_32395))
,null));
var output_checker32388_32397 = (new cljs.core.Delay(((function (ufv___32393,output_schema32385_32394,input_schema32386_32395,input_checker32387_32396){
return (function (){
return schema.core.checker.call(null,output_schema32385_32394);
});})(ufv___32393,output_schema32385_32394,input_schema32386_32395,input_checker32387_32396))
,null));
var ret__2067__auto___32398 = /**
 * Inputs: [p :- FilterPattern]
 *   Returns: s/Str
 */
naga.lang.pabu.filter__GT_string = ((function (ufv___32393,output_schema32385_32394,input_schema32386_32395,input_checker32387_32396,output_checker32388_32397){
return (function naga$lang$pabu$filter__GT_string(G__32389){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32393);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32389], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"filter->string","filter->string",624209095,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),input_schema32386_32395,cljs.core.deref.call(null,input_checker32387_32396),args__657__auto___32399);
} else {
var temp__5457__auto___32400 = cljs.core.deref.call(null,input_checker32387_32396).call(null,args__657__auto___32399);
if(cljs.core.truth_(temp__5457__auto___32400)){
var error__658__auto___32401 = temp__5457__auto___32400;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"filter->string","filter->string",624209095,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32401)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32386_32395,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32399,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32401], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var p = G__32389;
while(true){
var args = cljs.core.map.call(null,naga.lang.pabu.ps,p);
if(cljs.core.truth_(naga.lang.pabu.builtin_labels.call(null,cljs.core.first.call(null,args)))){
var vec__32390 = args;
var op = cljs.core.nth.call(null,vec__32390,(0),null);
var l = cljs.core.nth.call(null,vec__32390,(1),null);
var r = cljs.core.nth.call(null,vec__32390,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",args)),")"].join('');
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"filter->string","filter->string",624209095,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),output_schema32385_32394,cljs.core.deref.call(null,output_checker32388_32397),o__659__auto__);
} else {
var temp__5457__auto___32402 = cljs.core.deref.call(null,output_checker32388_32397).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32402)){
var error__658__auto___32403 = temp__5457__auto___32402;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"filter->string","filter->string",624209095,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32403)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32385_32394,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32403], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32393,output_schema32385_32394,input_schema32386_32395,input_checker32387_32396,output_checker32388_32397))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.filter__GT_string),schema.core.__GT_FnSchema.call(null,output_schema32385_32394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32386_32395], null)));

var ufv___32409 = schema.utils.use_fn_validation;
var output_schema32404_32410 = schema.core.Str;
var input_schema32405_32411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.Pattern,cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Pattern","Pattern",1866904892,null)], null)))], null);
var input_checker32406_32412 = (new cljs.core.Delay(((function (ufv___32409,output_schema32404_32410,input_schema32405_32411){
return (function (){
return schema.core.checker.call(null,input_schema32405_32411);
});})(ufv___32409,output_schema32404_32410,input_schema32405_32411))
,null));
var output_checker32407_32413 = (new cljs.core.Delay(((function (ufv___32409,output_schema32404_32410,input_schema32405_32411,input_checker32406_32412){
return (function (){
return schema.core.checker.call(null,output_schema32404_32410);
});})(ufv___32409,output_schema32404_32410,input_schema32405_32411,input_checker32406_32412))
,null));
var ret__2067__auto___32414 = /**
 * Inputs: [p :- Pattern]
 *   Returns: s/Str
 */
naga.lang.pabu.pattern__GT_string = ((function (ufv___32409,output_schema32404_32410,input_schema32405_32411,input_checker32406_32412,output_checker32407_32413){
return (function naga$lang$pabu$pattern__GT_string(G__32408){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32409);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32408], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern->string","pattern->string",1406564976,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),input_schema32405_32411,cljs.core.deref.call(null,input_checker32406_32412),args__657__auto___32415);
} else {
var temp__5457__auto___32416 = cljs.core.deref.call(null,input_checker32406_32412).call(null,args__657__auto___32415);
if(cljs.core.truth_(temp__5457__auto___32416)){
var error__658__auto___32417 = temp__5457__auto___32416;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pattern->string","pattern->string",1406564976,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32417)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32405_32411,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32415,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32417], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var p = G__32408;
while(true){
if(cljs.core.vector_QMARK_.call(null,p)){
return naga.lang.pabu.predicate__GT_string.call(null,p);
} else {
if(cljs.core.list_QMARK_.call(null,p)){
return naga.lang.pabu.filter__GT_string.call(null,p);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern->string","pattern->string",1406564976,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),output_schema32404_32410,cljs.core.deref.call(null,output_checker32407_32413),o__659__auto__);
} else {
var temp__5457__auto___32418 = cljs.core.deref.call(null,output_checker32407_32413).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32418)){
var error__658__auto___32419 = temp__5457__auto___32418;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pattern->string","pattern->string",1406564976,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__658__auto___32419)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32404_32410,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32419], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32409,output_schema32404_32410,input_schema32405_32411,input_checker32406_32412,output_checker32407_32413))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.pattern__GT_string),schema.core.__GT_FnSchema.call(null,output_schema32404_32410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32405_32411], null)));

var ufv___32438 = schema.utils.use_fn_validation;
var output_schema32420_32439 = schema.core.Str;
var input_schema32421_32440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Rule,cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null)))], null);
var input_schema32425_32441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Rule,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Bool,cljs.core.with_meta(new cljs.core.Symbol(null,"include-name?","include-name?",-137225190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)))], null);
var input_checker32422_32442 = (new cljs.core.Delay(((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441){
return (function (){
return schema.core.checker.call(null,input_schema32421_32440);
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441))
,null));
var output_checker32423_32443 = (new cljs.core.Delay(((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442){
return (function (){
return schema.core.checker.call(null,output_schema32420_32439);
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442))
,null));
var input_checker32426_32444 = (new cljs.core.Delay(((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443){
return (function (){
return schema.core.checker.call(null,input_schema32425_32441);
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443))
,null));
var output_checker32427_32445 = (new cljs.core.Delay(((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444){
return (function (){
return schema.core.checker.call(null,output_schema32420_32439);
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444))
,null));
var ret__2067__auto___32446 = (function (){
/**
 * Inputs: ([rule :- Rule] [{:keys [head body name], :as rule} :- Rule include-name? :- s/Bool])
 *   Returns: s/Str
 * 
 *   Creates a textual representation for the rule
 */
naga.lang.pabu.rule__GT_str = ((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445){
return (function naga$lang$pabu$rule__GT_str(var_args){
var G__32431 = arguments.length;
switch (G__32431) {
case 1:
return naga.lang.pabu.rule__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return naga.lang.pabu.rule__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445))
;

naga.lang.pabu.rule__GT_str.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445){
return (function (G__32424){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32438);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32424], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),input_schema32421_32440,cljs.core.deref.call(null,input_checker32422_32442),args__657__auto___32448);
} else {
var temp__5457__auto___32449 = cljs.core.deref.call(null,input_checker32422_32442).call(null,args__657__auto___32448);
if(cljs.core.truth_(temp__5457__auto___32449)){
var error__658__auto___32450 = temp__5457__auto___32449;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),cljs.core.pr_str.call(null,error__658__auto___32450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32421_32440,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32448,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32450], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var rule = G__32424;
while(true){
return naga.lang.pabu.rule__GT_str.call(null,rule,false);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),output_schema32420_32439,cljs.core.deref.call(null,output_checker32423_32443),o__659__auto__);
} else {
var temp__5457__auto___32451 = cljs.core.deref.call(null,output_checker32423_32443).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32451)){
var error__658__auto___32452 = temp__5457__auto___32451;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),cljs.core.pr_str.call(null,error__658__auto___32452)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32420_32439,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32452], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445))
;

naga.lang.pabu.rule__GT_str.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445){
return (function (G__32428,G__32429){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32438);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32428,G__32429], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),input_schema32425_32441,cljs.core.deref.call(null,input_checker32426_32444),args__657__auto___32453);
} else {
var temp__5457__auto___32454 = cljs.core.deref.call(null,input_checker32426_32444).call(null,args__657__auto___32453);
if(cljs.core.truth_(temp__5457__auto___32454)){
var error__658__auto___32455 = temp__5457__auto___32454;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),cljs.core.pr_str.call(null,error__658__auto___32455)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32425_32441,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32453,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32455], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__32433 = G__32428;
var map__32434 = G__32433;
var map__32434__$1 = ((((!((map__32434 == null)))?(((((map__32434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32434):map__32434);
var rule = map__32434__$1;
var head = cljs.core.get.call(null,map__32434__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body = cljs.core.get.call(null,map__32434__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var name = cljs.core.get.call(null,map__32434__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var include_name_QMARK_ = G__32429;
var G__32433__$1 = G__32433;
var include_name_QMARK___$1 = include_name_QMARK_;
while(true){
var map__32436 = G__32433__$1;
var map__32436__$1 = ((((!((map__32436 == null)))?(((((map__32436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32436):map__32436);
var rule__$1 = map__32436__$1;
var head__$1 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body__$1 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var name__$1 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var include_name_QMARK___$2 = include_name_QMARK___$1;
var main = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,naga.lang.pabu.predicate__GT_string,head__$1)))," :- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,naga.lang.pabu.pattern__GT_string,body__$1))),"."].join('');
if(cljs.core.truth_(include_name_QMARK___$2)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(main),"    /* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)," */"].join('');
} else {
return main;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),output_schema32420_32439,cljs.core.deref.call(null,output_checker32427_32445),o__659__auto__);
} else {
var temp__5457__auto___32456 = cljs.core.deref.call(null,output_checker32427_32445).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32456)){
var error__658__auto___32457 = temp__5457__auto___32456;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule->str","rule->str",-1068140456,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a textual representation for the rule"], null)),cljs.core.pr_str.call(null,error__658__auto___32457)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32420_32439,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32457], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32438,output_schema32420_32439,input_schema32421_32440,input_schema32425_32441,input_checker32422_32442,output_checker32423_32443,input_checker32426_32444,output_checker32427_32445))
;

naga.lang.pabu.rule__GT_str.cljs$lang$maxFixedArity = 2;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.lang.pabu.rule__GT_str),schema.core.make_fn_schema.call(null,output_schema32420_32439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32421_32440,input_schema32425_32441], null)));


//# sourceMappingURL=pabu.js.map?rel=1525291332361
