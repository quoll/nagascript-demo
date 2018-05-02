// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.data');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('clojure.string');
goog.require('naga.store');
naga.data.parse_json_string = (function naga$data$parse_json_string(p1__36942_SHARP_){
return cljs.core.js__GT_clj.call(null,JSON.parse(p1__36942_SHARP_),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
naga.data.json_generate_string = (function naga$data$json_generate_string(var_args){
var G__36944 = arguments.length;
switch (G__36944) {
case 1:
return naga.data.json_generate_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return naga.data.json_generate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

naga.data.json_generate_string.cljs$core$IFn$_invoke$arity$1 = (function (data){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data));
});

naga.data.json_generate_string.cljs$core$IFn$_invoke$arity$2 = (function (data,indent){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data),null,indent);
});

naga.data.json_generate_string.cljs$lang$maxFixedArity = 2;

naga.data._STAR_current_storage_STAR_ = null;
naga.data.Triple = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any,schema.core.Keyword,schema.core.Any], null);
/**
 * Finds the naga/first property in a map, and gets the value.
 */
naga.data.get_naga_first = (function naga$data$get_naga_first(struct){
var first_pair_QMARK_ = (function (p__36946){
var vec__36947 = p__36946;
var k = cljs.core.nth.call(null,vec__36947,(0),null);
var v = cljs.core.nth.call(null,vec__36947,(1),null);
var p = vec__36947;
var and__3913__auto__ = cljs.core._EQ_.call(null,"naga",cljs.core.namespace.call(null,k));
if(and__3913__auto__){
var and__3913__auto____$1 = clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,k),"first");
if(and__3913__auto____$1){
return p;
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
});
return cljs.core.some.call(null,first_pair_QMARK_,struct);
});
var ufv___36966 = schema.utils.use_fn_validation;
var output_schema36951_36967 = schema.core.Any;
var input_schema36952_36968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null),cljs.core.with_meta(new cljs.core.Symbol(null,"triples","triples",1272333426,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null)))], null);
var input_checker36953_36969 = (new cljs.core.Delay(((function (ufv___36966,output_schema36951_36967,input_schema36952_36968){
return (function (){
return schema.core.checker.call(null,input_schema36952_36968);
});})(ufv___36966,output_schema36951_36967,input_schema36952_36968))
,null));
var output_checker36954_36970 = (new cljs.core.Delay(((function (ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969){
return (function (){
return schema.core.checker.call(null,output_schema36951_36967);
});})(ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969))
,null));
var ret__2067__auto___36971 = /**
 * Inputs: [node :- s/Any triples :- [Triple]]
 * 
 *   Finds the list of entity nodes referred to in a list and builds
 * triples describing a flat 'contains' property
 */
naga.data.containership_triples = ((function (ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970){
return (function naga$data$containership_triples(G__36955,G__36956){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36966);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36955,G__36956], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"containership-triples","containership-triples",1017508225,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds the list of entity nodes referred to in a list and builds\n   triples describing a flat 'contains' property"], null)),input_schema36952_36968,cljs.core.deref.call(null,input_checker36953_36969),args__657__auto___36972);
} else {
var temp__5457__auto___36973 = cljs.core.deref.call(null,input_checker36953_36969).call(null,args__657__auto___36972);
if(cljs.core.truth_(temp__5457__auto___36973)){
var error__658__auto___36974 = temp__5457__auto___36973;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"containership-triples","containership-triples",1017508225,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds the list of entity nodes referred to in a list and builds\n   triples describing a flat 'contains' property"], null)),cljs.core.pr_str.call(null,error__658__auto___36974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36952_36968,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36972,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36974], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var node = G__36955;
var triples = G__36956;
while(true){
var listmap = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970){
return (function (p__36957){
var vec__36958 = p__36957;
var k = cljs.core.nth.call(null,vec__36958,(0),null);
var vs = cljs.core.nth.call(null,vec__36958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__36958,k,vs,validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970){
return (function (p1__36950_SHARP_){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.rest.call(null,p1__36950_SHARP_));
});})(vec__36958,k,vs,validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970))
,vs))], null);
});})(validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970))
,cljs.core.group_by.call(null,cljs.core.first,triples)));
var node_list = (function (){var nl = cljs.core.PersistentVector.EMPTY;
var n = node;
while(true){
if(cljs.core.not.call(null,n)){
return nl;
} else {
var map__36961 = listmap.call(null,n);
var map__36961__$1 = ((((!((map__36961 == null)))?(((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var lm = map__36961__$1;
var r = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword("naga","rest","naga/rest",-1244613236));
var vec__36962 = naga.data.get_naga_first.call(null,lm);
var _ = cljs.core.nth.call(null,vec__36962,(0),null);
var f = cljs.core.nth.call(null,vec__36962,(1),null);
var G__36975 = cljs.core.conj.call(null,nl,f);
var G__36976 = r;
nl = G__36975;
n = G__36976;
continue;
}
break;
}
})();
return cljs.core.map.call(null,((function (listmap,node_list,validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970){
return (function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,naga.store.container_property.call(null,naga.data._STAR_current_storage_STAR_,n),n], null);
});})(listmap,node_list,validate__656__auto__,ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970))
,node_list);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"containership-triples","containership-triples",1017508225,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds the list of entity nodes referred to in a list and builds\n   triples describing a flat 'contains' property"], null)),output_schema36951_36967,cljs.core.deref.call(null,output_checker36954_36970),o__659__auto__);
} else {
var temp__5457__auto___36977 = cljs.core.deref.call(null,output_checker36954_36970).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36977)){
var error__658__auto___36978 = temp__5457__auto___36977;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"containership-triples","containership-triples",1017508225,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Finds the list of entity nodes referred to in a list and builds\n   triples describing a flat 'contains' property"], null)),cljs.core.pr_str.call(null,error__658__auto___36978)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36951_36967,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36978], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36966,output_schema36951_36967,input_schema36952_36968,input_checker36953_36969,output_checker36954_36970))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.containership_triples),schema.core.__GT_FnSchema.call(null,output_schema36951_36967,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36952_36968], null)));

if(typeof naga.data.value_triples !== 'undefined'){
} else {
/**
 * Converts a value into a list of triples.
 * Return the entity ID of the data coupled with the sequence of triples.
 * NOTE: This may need to be dispatched to storage.
 *       e.g. Datomic could use properties to determine how to encode data.
 */
naga.data.value_triples = (function (){var method_table__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"naga.data","value-triples"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4388__auto__,method_table__4384__auto__,prefer_table__4385__auto__,method_cache__4386__auto__,cached_hierarchy__4387__auto__));
})();
}
var ufv___37000 = schema.utils.use_fn_validation;
var output_schema36979_37001 = schema.core.Any;
var input_schema36980_37002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker36981_37003 = (new cljs.core.Delay(((function (ufv___37000,output_schema36979_37001,input_schema36980_37002){
return (function (){
return schema.core.checker.call(null,input_schema36980_37002);
});})(ufv___37000,output_schema36979_37001,input_schema36980_37002))
,null));
var output_checker36982_37004 = (new cljs.core.Delay(((function (ufv___37000,output_schema36979_37001,input_schema36980_37002,input_checker36981_37003){
return (function (){
return schema.core.checker.call(null,output_schema36979_37001);
});})(ufv___37000,output_schema36979_37001,input_schema36980_37002,input_checker36981_37003))
,null));
var ret__2067__auto___37005 = /**
 * Inputs: [[v & vs :as vlist]]
 * 
 *   Creates the triples for a list
 */
naga.data.list_triples = ((function (ufv___37000,output_schema36979_37001,input_schema36980_37002,input_checker36981_37003,output_checker36982_37004){
return (function naga$data$list_triples(G__36983){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37000);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36983], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"list-triples","list-triples",-917223139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates the triples for a list"], null)),input_schema36980_37002,cljs.core.deref.call(null,input_checker36981_37003),args__657__auto___37006);
} else {
var temp__5457__auto___37007 = cljs.core.deref.call(null,input_checker36981_37003).call(null,args__657__auto___37006);
if(cljs.core.truth_(temp__5457__auto___37007)){
var error__658__auto___37008 = temp__5457__auto___37007;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list-triples","list-triples",-917223139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates the triples for a list"], null)),cljs.core.pr_str.call(null,error__658__auto___37008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36980_37002,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37006,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37008], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__36987 = G__36983;
var vec__36988 = G__36987;
var seq__36989 = cljs.core.seq.call(null,vec__36988);
var first__36990 = cljs.core.first.call(null,seq__36989);
var seq__36989__$1 = cljs.core.next.call(null,seq__36989);
var v = first__36990;
var vs = seq__36989__$1;
var vlist = vec__36988;
var G__36987__$1 = G__36987;
while(true){
var vec__36991 = G__36987__$1;
var seq__36992 = cljs.core.seq.call(null,vec__36991);
var first__36993 = cljs.core.first.call(null,seq__36992);
var seq__36992__$1 = cljs.core.next.call(null,seq__36992);
var v__$1 = first__36993;
var vs__$1 = seq__36992__$1;
var vlist__$1 = vec__36991;
if(cljs.core.seq.call(null,vlist__$1)){
var id = naga.store.new_node.call(null,naga.data._STAR_current_storage_STAR_);
var vec__36994 = naga.data.value_triples.call(null,v__$1);
var value_id = cljs.core.nth.call(null,vec__36994,(0),null);
var triples = cljs.core.nth.call(null,vec__36994,(1),null);
var vec__36997 = naga.data.list_triples.call(null,vs__$1);
var next_id = cljs.core.nth.call(null,vec__36997,(0),null);
var next_triples = cljs.core.nth.call(null,vec__36997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,naga.store.data_property.call(null,naga.data._STAR_current_storage_STAR_,value_id),value_id], null)], null),(cljs.core.truth_(next_id)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("naga","rest","naga/rest",-1244613236),next_id], null)], null):null),triples,next_triples)], null);
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"list-triples","list-triples",-917223139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates the triples for a list"], null)),output_schema36979_37001,cljs.core.deref.call(null,output_checker36982_37004),o__659__auto__);
} else {
var temp__5457__auto___37009 = cljs.core.deref.call(null,output_checker36982_37004).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37009)){
var error__658__auto___37010 = temp__5457__auto___37009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"list-triples","list-triples",-917223139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates the triples for a list"], null)),cljs.core.pr_str.call(null,error__658__auto___37010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36979_37001,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37010], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37000,output_schema36979_37001,input_schema36980_37002,input_checker36981_37003,output_checker36982_37004))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.list_triples),schema.core.__GT_FnSchema.call(null,output_schema36979_37001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36980_37002], null)));

var ufv___37019 = schema.utils.use_fn_validation;
var output_schema37011_37020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,"node ID"),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null),"current list of triples")], null);
var input_schema37012_37021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"vlist","vlist",-1980916976,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker37013_37022 = (new cljs.core.Delay(((function (ufv___37019,output_schema37011_37020,input_schema37012_37021){
return (function (){
return schema.core.checker.call(null,input_schema37012_37021);
});})(ufv___37019,output_schema37011_37020,input_schema37012_37021))
,null));
var output_checker37014_37023 = (new cljs.core.Delay(((function (ufv___37019,output_schema37011_37020,input_schema37012_37021,input_checker37013_37022){
return (function (){
return schema.core.checker.call(null,output_schema37011_37020);
});})(ufv___37019,output_schema37011_37020,input_schema37012_37021,input_checker37013_37022))
,null));
var ret__2067__auto___37024 = /**
 * Inputs: [vlist :- [s/Any]]
 *   Returns: [(s/one s/Any "node ID") (s/one [Triple] "current list of triples")]
 */
naga.data.value_triples_list = ((function (ufv___37019,output_schema37011_37020,input_schema37012_37021,input_checker37013_37022,output_checker37014_37023){
return (function naga$data$value_triples_list(G__37015){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37019);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37015], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"value-triples-list","value-triples-list",-1058960368,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),"node ID"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),"current list of triples")], null)], null)),input_schema37012_37021,cljs.core.deref.call(null,input_checker37013_37022),args__657__auto___37025);
} else {
var temp__5457__auto___37026 = cljs.core.deref.call(null,input_checker37013_37022).call(null,args__657__auto___37025);
if(cljs.core.truth_(temp__5457__auto___37026)){
var error__658__auto___37027 = temp__5457__auto___37026;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"value-triples-list","value-triples-list",-1058960368,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),"node ID"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),"current list of triples")], null)], null)),cljs.core.pr_str.call(null,error__658__auto___37027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37012_37021,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37025,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37027], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var vlist = G__37015;
while(true){
var vec__37016 = naga.data.list_triples.call(null,vlist);
var node = cljs.core.nth.call(null,vec__37016,(0),null);
var triples = cljs.core.nth.call(null,vec__37016,(1),null);
var raw_result = vec__37016;
if(cljs.core.truth_(triples)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.concat.call(null,triples,naga.data.containership_triples.call(null,node,triples))], null);
} else {
return raw_result;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"value-triples-list","value-triples-list",-1058960368,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),"node ID"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),"current list of triples")], null)], null)),output_schema37011_37020,cljs.core.deref.call(null,output_checker37014_37023),o__659__auto__);
} else {
var temp__5457__auto___37028 = cljs.core.deref.call(null,output_checker37014_37023).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37028)){
var error__658__auto___37029 = temp__5457__auto___37028;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"value-triples-list","value-triples-list",-1058960368,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),"node ID"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),"current list of triples")], null)], null)),cljs.core.pr_str.call(null,error__658__auto___37029)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37011_37020,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37029], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37019,output_schema37011_37020,input_schema37012_37021,input_checker37013_37022,output_checker37014_37023))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.value_triples_list),schema.core.__GT_FnSchema.call(null,output_schema37011_37020,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37012_37021], null)));

cljs.core._add_method.call(null,naga.data.value_triples,cljs.core.List,(function (v){
return naga.data.value_triples_list.call(null,v);
}));
cljs.core._add_method.call(null,naga.data.value_triples,cljs.core.EmptyList,(function (v){
return naga.data.value_triples_list.call(null,v);
}));
cljs.core._add_method.call(null,naga.data.value_triples,cljs.core.PersistentVector,(function (v){
return naga.data.value_triples_list.call(null,v);
}));
cljs.core._add_method.call(null,naga.data.value_triples,cljs.core.PersistentArrayMap,(function (v){
return naga.data.map__GT_triples.call(null,v);
}));
cljs.core._add_method.call(null,naga.data.value_triples,cljs.core.PersistentHashMap,(function (v){
return naga.data.map__GT_triples.call(null,v);
}));
cljs.core._add_method.call(null,naga.data.value_triples,null,(function (v){
return null;
}));
cljs.core._add_method.call(null,naga.data.value_triples,new cljs.core.Keyword(null,"default","default",-1987822328),(function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,null], null);
}));
var ufv___37049 = schema.utils.use_fn_validation;
var output_schema37030_37050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null);
var input_schema37031_37051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker37032_37052 = (new cljs.core.Delay(((function (ufv___37049,output_schema37030_37050,input_schema37031_37051){
return (function (){
return schema.core.checker.call(null,input_schema37031_37051);
});})(ufv___37049,output_schema37030_37050,input_schema37031_37051))
,null));
var output_checker37033_37053 = (new cljs.core.Delay(((function (ufv___37049,output_schema37030_37050,input_schema37031_37051,input_checker37032_37052){
return (function (){
return schema.core.checker.call(null,output_schema37030_37050);
});})(ufv___37049,output_schema37030_37050,input_schema37031_37051,input_checker37032_37052))
,null));
var ret__2067__auto___37054 = /**
 * Inputs: [entity-id :- s/Any [property value] :- [s/Keyword s/Any]]
 *   Returns: [Triple]
 * 
 *   Takes a property-value pair associated with an entity,
 * and builds triples around it
 */
naga.data.property_vals = ((function (ufv___37049,output_schema37030_37050,input_schema37031_37051,input_checker37032_37052,output_checker37033_37053){
return (function naga$data$property_vals(G__37034,G__37035){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37049);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37034,G__37035], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"property-vals","property-vals",1511313817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a property-value pair associated with an entity,\n   and builds triples around it"], null)),input_schema37031_37051,cljs.core.deref.call(null,input_checker37032_37052),args__657__auto___37055);
} else {
var temp__5457__auto___37056 = cljs.core.deref.call(null,input_checker37032_37052).call(null,args__657__auto___37055);
if(cljs.core.truth_(temp__5457__auto___37056)){
var error__658__auto___37057 = temp__5457__auto___37056;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"property-vals","property-vals",1511313817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a property-value pair associated with an entity,\n   and builds triples around it"], null)),cljs.core.pr_str.call(null,error__658__auto___37057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37031_37051,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37055,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37057], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var entity_id = G__37034;
var G__37039 = G__37035;
var vec__37040 = G__37039;
var property = cljs.core.nth.call(null,vec__37040,(0),null);
var value = cljs.core.nth.call(null,vec__37040,(1),null);
var entity_id__$1 = entity_id;
var G__37039__$1 = G__37039;
while(true){
var entity_id__$2 = entity_id__$1;
var vec__37043 = G__37039__$1;
var property__$1 = cljs.core.nth.call(null,vec__37043,(0),null);
var value__$1 = cljs.core.nth.call(null,vec__37043,(1),null);
var temp__5455__auto__ = naga.data.value_triples.call(null,value__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__37046 = temp__5455__auto__;
var value_id = cljs.core.nth.call(null,vec__37046,(0),null);
var value_data = cljs.core.nth.call(null,vec__37046,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id__$2,property__$1,value_id], null),value_data);
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"property-vals","property-vals",1511313817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a property-value pair associated with an entity,\n   and builds triples around it"], null)),output_schema37030_37050,cljs.core.deref.call(null,output_checker37033_37053),o__659__auto__);
} else {
var temp__5457__auto___37058 = cljs.core.deref.call(null,output_checker37033_37053).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37058)){
var error__658__auto___37059 = temp__5457__auto___37058;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"property-vals","property-vals",1511313817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a property-value pair associated with an entity,\n   and builds triples around it"], null)),cljs.core.pr_str.call(null,error__658__auto___37059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37030_37050,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37059], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37049,output_schema37030_37050,input_schema37031_37051,input_checker37032_37052,output_checker37033_37053))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.property_vals),schema.core.__GT_FnSchema.call(null,output_schema37030_37050,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37031_37051], null)));

var ufv___37065 = schema.utils.use_fn_validation;
var output_schema37060_37066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null)], null);
var input_schema37061_37067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker37062_37068 = (new cljs.core.Delay(((function (ufv___37065,output_schema37060_37066,input_schema37061_37067){
return (function (){
return schema.core.checker.call(null,input_schema37061_37067);
});})(ufv___37065,output_schema37060_37066,input_schema37061_37067))
,null));
var output_checker37063_37069 = (new cljs.core.Delay(((function (ufv___37065,output_schema37060_37066,input_schema37061_37067,input_checker37062_37068){
return (function (){
return schema.core.checker.call(null,output_schema37060_37066);
});})(ufv___37065,output_schema37060_37066,input_schema37061_37067,input_checker37062_37068))
,null));
var ret__2067__auto___37070 = /**
 * Inputs: [data :- #:s{Keyword s/Any}]
 *   Returns: [s/Any [Triple]]
 * 
 *   Converts a single map to triples. Returns a pair of the map's ID and the triples for the map.
 */
naga.data.map__GT_triples = ((function (ufv___37065,output_schema37060_37066,input_schema37061_37067,input_checker37062_37068,output_checker37063_37069){
return (function naga$data$map__GT_triples(G__37064){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37065);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37064], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"map->triples","map->triples",-390723463,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples. Returns a pair of the map's ID and the triples for the map."], null)),input_schema37061_37067,cljs.core.deref.call(null,input_checker37062_37068),args__657__auto___37071);
} else {
var temp__5457__auto___37072 = cljs.core.deref.call(null,input_checker37062_37068).call(null,args__657__auto___37071);
if(cljs.core.truth_(temp__5457__auto___37072)){
var error__658__auto___37073 = temp__5457__auto___37072;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map->triples","map->triples",-390723463,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples. Returns a pair of the map's ID and the triples for the map."], null)),cljs.core.pr_str.call(null,error__658__auto___37073)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37061_37067,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37071,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37073], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var data = G__37064;
while(true){
var entity_id = (function (){var or__3924__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return naga.store.new_node.call(null,naga.data._STAR_current_storage_STAR_);
}
})();
var triples_data = cljs.core.mapcat.call(null,cljs.core.partial.call(null,naga.data.property_vals,entity_id),data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,triples_data], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"map->triples","map->triples",-390723463,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples. Returns a pair of the map's ID and the triples for the map."], null)),output_schema37060_37066,cljs.core.deref.call(null,output_checker37063_37069),o__659__auto__);
} else {
var temp__5457__auto___37074 = cljs.core.deref.call(null,output_checker37063_37069).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37074)){
var error__658__auto___37075 = temp__5457__auto___37074;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"map->triples","map->triples",-390723463,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples. Returns a pair of the map's ID and the triples for the map."], null)),cljs.core.pr_str.call(null,error__658__auto___37075)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37060_37066,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37075], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37065,output_schema37060_37066,input_schema37061_37067,input_checker37062_37068,output_checker37063_37069))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.map__GT_triples),schema.core.__GT_FnSchema.call(null,output_schema37060_37066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37061_37067], null)));

var ufv___37081 = schema.utils.use_fn_validation;
var output_schema37076_37082 = schema.core.Any;
var input_schema37077_37083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37078_37084 = (new cljs.core.Delay(((function (ufv___37081,output_schema37076_37082,input_schema37077_37083){
return (function (){
return schema.core.checker.call(null,input_schema37077_37083);
});})(ufv___37081,output_schema37076_37082,input_schema37077_37083))
,null));
var output_checker37079_37085 = (new cljs.core.Delay(((function (ufv___37081,output_schema37076_37082,input_schema37077_37083,input_checker37078_37084){
return (function (){
return schema.core.checker.call(null,output_schema37076_37082);
});})(ufv___37081,output_schema37076_37082,input_schema37077_37083,input_checker37078_37084))
,null));
var ret__2067__auto___37086 = /**
 * Inputs: [id :- s/Any]
 * 
 *   Convert an id (probably a number) to a keyword for identification
 */
naga.data.name_for = ((function (ufv___37081,output_schema37076_37082,input_schema37077_37083,input_checker37078_37084,output_checker37079_37085){
return (function naga$data$name_for(G__37080){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37081);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37080], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"name-for","name-for",-947774399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert an id (probably a number) to a keyword for identification"], null)),input_schema37077_37083,cljs.core.deref.call(null,input_checker37078_37084),args__657__auto___37087);
} else {
var temp__5457__auto___37088 = cljs.core.deref.call(null,input_checker37078_37084).call(null,args__657__auto___37087);
if(cljs.core.truth_(temp__5457__auto___37088)){
var error__658__auto___37089 = temp__5457__auto___37088;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"name-for","name-for",-947774399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert an id (probably a number) to a keyword for identification"], null)),cljs.core.pr_str.call(null,error__658__auto___37089)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37077_37083,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37087,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37089], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var id = G__37080;
while(true){
if((id instanceof cljs.core.Keyword)){
return id;
} else {
return naga.store.node_label.call(null,naga.data._STAR_current_storage_STAR_,id);
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"name-for","name-for",-947774399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert an id (probably a number) to a keyword for identification"], null)),output_schema37076_37082,cljs.core.deref.call(null,output_checker37079_37085),o__659__auto__);
} else {
var temp__5457__auto___37090 = cljs.core.deref.call(null,output_checker37079_37085).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37090)){
var error__658__auto___37091 = temp__5457__auto___37090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"name-for","name-for",-947774399,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Convert an id (probably a number) to a keyword for identification"], null)),cljs.core.pr_str.call(null,error__658__auto___37091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37076_37082,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37091], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37081,output_schema37076_37082,input_schema37077_37083,input_checker37078_37084,output_checker37079_37085))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.name_for),schema.core.__GT_FnSchema.call(null,output_schema37076_37082,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37077_37083], null)));

var ufv___37100 = schema.utils.use_fn_validation;
var output_schema37092_37101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null)], null);
var input_schema37093_37102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker37094_37103 = (new cljs.core.Delay(((function (ufv___37100,output_schema37092_37101,input_schema37093_37102){
return (function (){
return schema.core.checker.call(null,input_schema37093_37102);
});})(ufv___37100,output_schema37092_37101,input_schema37093_37102))
,null));
var output_checker37095_37104 = (new cljs.core.Delay(((function (ufv___37100,output_schema37092_37101,input_schema37093_37102,input_checker37094_37103){
return (function (){
return schema.core.checker.call(null,output_schema37092_37101);
});})(ufv___37100,output_schema37092_37101,input_schema37093_37102,input_checker37094_37103))
,null));
var ret__2067__auto___37105 = /**
 * Inputs: [j]
 *   Returns: [s/Any [Triple]]
 * 
 *   Converts a single map to triples for an ID'ed map
 */
naga.data.ident_map__GT_triples = ((function (ufv___37100,output_schema37092_37101,input_schema37093_37102,input_checker37094_37103,output_checker37095_37104){
return (function naga$data$ident_map__GT_triples(G__37096){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37100);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37096], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"ident-map->triples","ident-map->triples",1962425848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples for an ID'ed map"], null)),input_schema37093_37102,cljs.core.deref.call(null,input_checker37094_37103),args__657__auto___37106);
} else {
var temp__5457__auto___37107 = cljs.core.deref.call(null,input_checker37094_37103).call(null,args__657__auto___37106);
if(cljs.core.truth_(temp__5457__auto___37107)){
var error__658__auto___37108 = temp__5457__auto___37107;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ident-map->triples","ident-map->triples",1962425848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples for an ID'ed map"], null)),cljs.core.pr_str.call(null,error__658__auto___37108)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37093_37102,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37106,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37108], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var j = G__37096;
while(true){
var vec__37097 = naga.data.map__GT_triples.call(null,j);
var id = cljs.core.nth.call(null,vec__37097,(0),null);
var triples = cljs.core.nth.call(null,vec__37097,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(j))){
return triples;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("db","ident","db/ident",-737096),naga.data.name_for.call(null,id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("naga","entity","naga/entity",-456428631),true], null)], null),triples);
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"ident-map->triples","ident-map->triples",1962425848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples for an ID'ed map"], null)),output_schema37092_37101,cljs.core.deref.call(null,output_checker37095_37104),o__659__auto__);
} else {
var temp__5457__auto___37109 = cljs.core.deref.call(null,output_checker37095_37104).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37109)){
var error__658__auto___37110 = temp__5457__auto___37109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ident-map->triples","ident-map->triples",1962425848,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a single map to triples for an ID'ed map"], null)),cljs.core.pr_str.call(null,error__658__auto___37110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37092_37101,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37110], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37100,output_schema37092_37101,input_schema37093_37102,input_checker37094_37103,output_checker37095_37104))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.ident_map__GT_triples),schema.core.__GT_FnSchema.call(null,output_schema37092_37101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37093_37102], null)));

var ufv___37118 = schema.utils.use_fn_validation;
var output_schema37111_37119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null);
var input_schema37112_37120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker37113_37121 = (new cljs.core.Delay(((function (ufv___37118,output_schema37111_37119,input_schema37112_37120){
return (function (){
return schema.core.checker.call(null,input_schema37112_37120);
});})(ufv___37118,output_schema37111_37119,input_schema37112_37120))
,null));
var output_checker37114_37122 = (new cljs.core.Delay(((function (ufv___37118,output_schema37111_37119,input_schema37112_37120,input_checker37113_37121){
return (function (){
return schema.core.checker.call(null,output_schema37111_37119);
});})(ufv___37118,output_schema37111_37119,input_schema37112_37120,input_checker37113_37121))
,null));
var ret__2067__auto___37123 = /**
 * Inputs: [storage j]
 *   Returns: [Triple]
 * 
 *   Converts parsed JSON into a sequence of triples for a provided storage.
 */
naga.data.json__GT_triples = ((function (ufv___37118,output_schema37111_37119,input_schema37112_37120,input_checker37113_37121,output_checker37114_37122){
return (function naga$data$json__GT_triples(G__37115,G__37116){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37118);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37115,G__37116], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"json->triples","json->triples",1220125009,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts parsed JSON into a sequence of triples for a provided storage."], null)),input_schema37112_37120,cljs.core.deref.call(null,input_checker37113_37121),args__657__auto___37124);
} else {
var temp__5457__auto___37125 = cljs.core.deref.call(null,input_checker37113_37121).call(null,args__657__auto___37124);
if(cljs.core.truth_(temp__5457__auto___37125)){
var error__658__auto___37126 = temp__5457__auto___37125;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"json->triples","json->triples",1220125009,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts parsed JSON into a sequence of triples for a provided storage."], null)),cljs.core.pr_str.call(null,error__658__auto___37126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37112_37120,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37124,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37126], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__37115;
var j = G__37116;
while(true){
var _STAR_current_storage_STAR_37117 = naga.data._STAR_current_storage_STAR_;
naga.data._STAR_current_storage_STAR_ = storage;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,naga.data.ident_map__GT_triples,j));
}finally {naga.data._STAR_current_storage_STAR_ = _STAR_current_storage_STAR_37117;
}break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"json->triples","json->triples",1220125009,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts parsed JSON into a sequence of triples for a provided storage."], null)),output_schema37111_37119,cljs.core.deref.call(null,output_checker37114_37122),o__659__auto__);
} else {
var temp__5457__auto___37127 = cljs.core.deref.call(null,output_checker37114_37122).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37127)){
var error__658__auto___37128 = temp__5457__auto___37127;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"json->triples","json->triples",1220125009,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts parsed JSON into a sequence of triples for a provided storage."], null)),cljs.core.pr_str.call(null,error__658__auto___37128)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37111_37119,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37128], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37118,output_schema37111_37119,input_schema37112_37120,input_checker37113_37121,output_checker37114_37122))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.json__GT_triples),schema.core.__GT_FnSchema.call(null,output_schema37111_37119,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37112_37120], null)));

var ufv___37135 = schema.utils.use_fn_validation;
var output_schema37129_37136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null);
var input_schema37130_37137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"io","io",1333189610,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker37131_37138 = (new cljs.core.Delay(((function (ufv___37135,output_schema37129_37136,input_schema37130_37137){
return (function (){
return schema.core.checker.call(null,input_schema37130_37137);
});})(ufv___37135,output_schema37129_37136,input_schema37130_37137))
,null));
var output_checker37132_37139 = (new cljs.core.Delay(((function (ufv___37135,output_schema37129_37136,input_schema37130_37137,input_checker37131_37138){
return (function (){
return schema.core.checker.call(null,output_schema37129_37136);
});})(ufv___37135,output_schema37129_37136,input_schema37130_37137,input_checker37131_37138))
,null));
var ret__2067__auto___37140 = /**
 * Inputs: [storage io]
 *   Returns: [Triple]
 */
naga.data.stream__GT_triples = ((function (ufv___37135,output_schema37129_37136,input_schema37130_37137,input_checker37131_37138,output_checker37132_37139){
return (function naga$data$stream__GT_triples(G__37133,G__37134){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37135);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37133,G__37134], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"stream->triples","stream->triples",-287862866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null)),input_schema37130_37137,cljs.core.deref.call(null,input_checker37131_37138),args__657__auto___37141);
} else {
var temp__5457__auto___37142 = cljs.core.deref.call(null,input_checker37131_37138).call(null,args__657__auto___37141);
if(cljs.core.truth_(temp__5457__auto___37142)){
var error__658__auto___37143 = temp__5457__auto___37142;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"stream->triples","stream->triples",-287862866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___37143)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37130_37137,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37141,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37143], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__37133;
var io = G__37134;
while(true){
throw cljs.core.ex_info.call(null,"Unsupported IO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"io","io",-307341917),io], null));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"stream->triples","stream->triples",-287862866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null)),output_schema37129_37136,cljs.core.deref.call(null,output_checker37132_37139),o__659__auto__);
} else {
var temp__5457__auto___37144 = cljs.core.deref.call(null,output_checker37132_37139).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37144)){
var error__658__auto___37145 = temp__5457__auto___37144;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"stream->triples","stream->triples",-287862866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___37145)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37129_37136,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37145], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37135,output_schema37129_37136,input_schema37130_37137,input_checker37131_37138,output_checker37132_37139))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.stream__GT_triples),schema.core.__GT_FnSchema.call(null,output_schema37129_37136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37130_37137], null)));

var ufv___37152 = schema.utils.use_fn_validation;
var output_schema37146_37153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.data.Triple], null);
var input_schema37147_37154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker37148_37155 = (new cljs.core.Delay(((function (ufv___37152,output_schema37146_37153,input_schema37147_37154){
return (function (){
return schema.core.checker.call(null,input_schema37147_37154);
});})(ufv___37152,output_schema37146_37153,input_schema37147_37154))
,null));
var output_checker37149_37156 = (new cljs.core.Delay(((function (ufv___37152,output_schema37146_37153,input_schema37147_37154,input_checker37148_37155){
return (function (){
return schema.core.checker.call(null,output_schema37146_37153);
});})(ufv___37152,output_schema37146_37153,input_schema37147_37154,input_checker37148_37155))
,null));
var ret__2067__auto___37157 = /**
 * Inputs: [storage :- StorageType s :- s/Str]
 *   Returns: [Triple]
 * 
 *   Converts a string to triples relevant to a store
 */
naga.data.string__GT_triples = ((function (ufv___37152,output_schema37146_37153,input_schema37147_37154,input_checker37148_37155,output_checker37149_37156){
return (function naga$data$string__GT_triples(G__37150,G__37151){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37152);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37150,G__37151], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"string->triples","string->triples",1762236397,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to triples relevant to a store"], null)),input_schema37147_37154,cljs.core.deref.call(null,input_checker37148_37155),args__657__auto___37158);
} else {
var temp__5457__auto___37159 = cljs.core.deref.call(null,input_checker37148_37155).call(null,args__657__auto___37158);
if(cljs.core.truth_(temp__5457__auto___37159)){
var error__658__auto___37160 = temp__5457__auto___37159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string->triples","string->triples",1762236397,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to triples relevant to a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37147_37154,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37158,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37160], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__37150;
var s = G__37151;
while(true){
return naga.data.json__GT_triples.call(null,storage,naga.data.parse_json_string.call(null,s));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"string->triples","string->triples",1762236397,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to triples relevant to a store"], null)),output_schema37146_37153,cljs.core.deref.call(null,output_checker37149_37156),o__659__auto__);
} else {
var temp__5457__auto___37161 = cljs.core.deref.call(null,output_checker37149_37156).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37161)){
var error__658__auto___37162 = temp__5457__auto___37161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"string->triples","string->triples",1762236397,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Triple","Triple",1804984392,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a string to triples relevant to a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37146_37153,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37162], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37152,output_schema37146_37153,input_schema37147_37154,input_checker37148_37155,output_checker37149_37156))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.string__GT_triples),schema.core.__GT_FnSchema.call(null,output_schema37146_37153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37147_37154], null)));

var ufv___37169 = schema.utils.use_fn_validation;
var output_schema37163_37170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null)], null);
var input_schema37164_37171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"entity","entity",1189561251,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37165_37172 = (new cljs.core.Delay(((function (ufv___37169,output_schema37163_37170,input_schema37164_37171){
return (function (){
return schema.core.checker.call(null,input_schema37164_37171);
});})(ufv___37169,output_schema37163_37170,input_schema37164_37171))
,null));
var output_checker37166_37173 = (new cljs.core.Delay(((function (ufv___37169,output_schema37163_37170,input_schema37164_37171,input_checker37165_37172){
return (function (){
return schema.core.checker.call(null,output_schema37163_37170);
});})(ufv___37169,output_schema37163_37170,input_schema37164_37171,input_checker37165_37172))
,null));
var ret__2067__auto___37174 = /**
 * Inputs: [store :- StorageType entity :- s/Any]
 *   Returns: [[s/Keyword s/Any]]
 * 
 *   Return all the property/value pairs for a given entity in the store.
 */
naga.data.property_values = ((function (ufv___37169,output_schema37163_37170,input_schema37164_37171,input_checker37165_37172,output_checker37166_37173){
return (function naga$data$property_values(G__37167,G__37168){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37169);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37167,G__37168], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"property-values","property-values",909690535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return all the property/value pairs for a given entity in the store."], null)),input_schema37164_37171,cljs.core.deref.call(null,input_checker37165_37172),args__657__auto___37175);
} else {
var temp__5457__auto___37176 = cljs.core.deref.call(null,input_checker37165_37172).call(null,args__657__auto___37175);
if(cljs.core.truth_(temp__5457__auto___37176)){
var error__658__auto___37177 = temp__5457__auto___37176;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"property-values","property-values",909690535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return all the property/value pairs for a given entity in the store."], null)),cljs.core.pr_str.call(null,error__658__auto___37177)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37164_37171,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37175,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37177], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37167;
var entity = G__37168;
while(true){
return naga.store.resolve_pattern.call(null,store,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"property-values","property-values",909690535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return all the property/value pairs for a given entity in the store."], null)),output_schema37163_37170,cljs.core.deref.call(null,output_checker37166_37173),o__659__auto__);
} else {
var temp__5457__auto___37178 = cljs.core.deref.call(null,output_checker37166_37173).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37178)){
var error__658__auto___37179 = temp__5457__auto___37178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"property-values","property-values",909690535,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return all the property/value pairs for a given entity in the store."], null)),cljs.core.pr_str.call(null,error__658__auto___37179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37163_37170,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37179], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37169,output_schema37163_37170,input_schema37164_37171,input_checker37165_37172,output_checker37166_37173))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.property_values),schema.core.__GT_FnSchema.call(null,output_schema37163_37170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37164_37171], null)));

var ufv___37187 = schema.utils.use_fn_validation;
var output_schema37180_37188 = schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null)], null));
var input_schema37181_37189 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"prop","prop",1125363195,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37182_37190 = (new cljs.core.Delay(((function (ufv___37187,output_schema37180_37188,input_schema37181_37189){
return (function (){
return schema.core.checker.call(null,input_schema37181_37189);
});})(ufv___37187,output_schema37180_37188,input_schema37181_37189))
,null));
var output_checker37183_37191 = (new cljs.core.Delay(((function (ufv___37187,output_schema37180_37188,input_schema37181_37189,input_checker37182_37190){
return (function (){
return schema.core.checker.call(null,output_schema37180_37188);
});})(ufv___37187,output_schema37180_37188,input_schema37181_37189,input_checker37182_37190))
,null));
var ret__2067__auto___37192 = /**
 * Inputs: [store :- StorageType prop :- s/Any v :- s/Any]
 *   Returns: (s/maybe [[s/Keyword s/Any]])
 * 
 *   Determines if a value represents a structure. If so, return the property/values for it.
 * Otherwise, return nil.
 */
naga.data.check_structure = ((function (ufv___37187,output_schema37180_37188,input_schema37181_37189,input_checker37182_37190,output_checker37183_37191){
return (function naga$data$check_structure(G__37184,G__37185,G__37186){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37187);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37193 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37184,G__37185,G__37186], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"check-structure","check-structure",-1037263034,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a value represents a structure. If so, return the property/values for it.\n   Otherwise, return nil."], null)),input_schema37181_37189,cljs.core.deref.call(null,input_checker37182_37190),args__657__auto___37193);
} else {
var temp__5457__auto___37194 = cljs.core.deref.call(null,input_checker37182_37190).call(null,args__657__auto___37193);
if(cljs.core.truth_(temp__5457__auto___37194)){
var error__658__auto___37195 = temp__5457__auto___37194;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"check-structure","check-structure",-1037263034,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a value represents a structure. If so, return the property/values for it.\n   Otherwise, return nil."], null)),cljs.core.pr_str.call(null,error__658__auto___37195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37181_37189,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37193,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37195], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37184;
var prop = G__37185;
var v = G__37186;
while(true){
if(cljs.core.truth_((function (){var and__3913__auto__ = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null).call(null,prop));
if(and__3913__auto__){
return naga.store.node_type_QMARK_.call(null,store,prop,v);
} else {
return and__3913__auto__;
}
})())){
var data = naga.data.property_values.call(null,store,v);
return cljs.core.seq.call(null,data);
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"check-structure","check-structure",-1037263034,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a value represents a structure. If so, return the property/values for it.\n   Otherwise, return nil."], null)),output_schema37180_37188,cljs.core.deref.call(null,output_checker37183_37191),o__659__auto__);
} else {
var temp__5457__auto___37196 = cljs.core.deref.call(null,output_checker37183_37191).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37196)){
var error__658__auto___37197 = temp__5457__auto___37196;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"check-structure","check-structure",-1037263034,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a value represents a structure. If so, return the property/values for it.\n   Otherwise, return nil."], null)),cljs.core.pr_str.call(null,error__658__auto___37197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37180_37188,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37197], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37187,output_schema37180_37188,input_schema37181_37189,input_checker37182_37190,output_checker37183_37191))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.check_structure),schema.core.__GT_FnSchema.call(null,output_schema37180_37188,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37181_37189], null)));


var ufv___37207 = schema.utils.use_fn_validation;
var output_schema37198_37208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema37199_37209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"pairs","pairs",-2039825990,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null)))], null);
var input_checker37200_37210 = (new cljs.core.Delay(((function (ufv___37207,output_schema37198_37208,input_schema37199_37209){
return (function (){
return schema.core.checker.call(null,input_schema37199_37209);
});})(ufv___37207,output_schema37198_37208,input_schema37199_37209))
,null));
var output_checker37201_37211 = (new cljs.core.Delay(((function (ufv___37207,output_schema37198_37208,input_schema37199_37209,input_checker37200_37210){
return (function (){
return schema.core.checker.call(null,output_schema37198_37208);
});})(ufv___37207,output_schema37198_37208,input_schema37199_37209,input_checker37200_37210))
,null));
var ret__2067__auto___37212 = /**
 * Inputs: [store :- StorageType pairs :- [[s/Keyword s/Any]]]
 *   Returns: [s/Any]
 * 
 *   Takes property/value pairs and if they represent a list node, returns the list.
 * else, nil.
 */
naga.data.build_list = ((function (ufv___37207,output_schema37198_37208,input_schema37199_37209,input_checker37200_37210,output_checker37201_37211){
return (function naga$data$build_list(G__37202,G__37203){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37207);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37202,G__37203], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"build-list","build-list",-1198678838,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes property/value pairs and if they represent a list node, returns the list.\n   else, nil."], null)),input_schema37199_37209,cljs.core.deref.call(null,input_checker37200_37210),args__657__auto___37213);
} else {
var temp__5457__auto___37214 = cljs.core.deref.call(null,input_checker37200_37210).call(null,args__657__auto___37213);
if(cljs.core.truth_(temp__5457__auto___37214)){
var error__658__auto___37215 = temp__5457__auto___37214;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"build-list","build-list",-1198678838,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes property/value pairs and if they represent a list node, returns the list.\n   else, nil."], null)),cljs.core.pr_str.call(null,error__658__auto___37215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37199_37209,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37213,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37215], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37202;
var pairs = G__37203;
while(true){
var st = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs);
var temp__5457__auto__ = naga.data.get_naga_first.call(null,st);
if(cljs.core.truth_(temp__5457__auto__)){
var first_prop_elt = temp__5457__auto__;
var remaining = new cljs.core.Keyword("naga","rest","naga/rest",-1244613236).cljs$core$IFn$_invoke$arity$1(st);
var vec__37204 = naga.data.recurse_node.call(null,store,first_prop_elt);
var _ = cljs.core.nth.call(null,vec__37204,(0),null);
var first_elt = cljs.core.nth.call(null,vec__37204,(1),null);
if(cljs.core.truth_(first_elt)){
} else {
throw (new Error("Assert failed: first-elt"));
}

if(cljs.core.truth_(remaining)){
return cljs.core.cons.call(null,first_elt,naga.data.build_list.call(null,store,naga.data.property_values.call(null,store,remaining)));
} else {
return (new cljs.core.List(null,first_elt,null,(1),null));
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"build-list","build-list",-1198678838,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes property/value pairs and if they represent a list node, returns the list.\n   else, nil."], null)),output_schema37198_37208,cljs.core.deref.call(null,output_checker37201_37211),o__659__auto__);
} else {
var temp__5457__auto___37216 = cljs.core.deref.call(null,output_checker37201_37211).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37216)){
var error__658__auto___37217 = temp__5457__auto___37216;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"build-list","build-list",-1198678838,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes property/value pairs and if they represent a list node, returns the list.\n   else, nil."], null)),cljs.core.pr_str.call(null,error__658__auto___37217)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37198_37208,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37217], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37207,output_schema37198_37208,input_schema37199_37209,input_checker37200_37210,output_checker37201_37211))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.build_list),schema.core.__GT_FnSchema.call(null,output_schema37198_37208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37199_37209], null)));

var ufv___37234 = schema.utils.use_fn_validation;
var output_schema37218_37235 = schema.core.Any;
var input_schema37219_37236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker37220_37237 = (new cljs.core.Delay(((function (ufv___37234,output_schema37218_37235,input_schema37219_37236){
return (function (){
return schema.core.checker.call(null,input_schema37219_37236);
});})(ufv___37234,output_schema37218_37235,input_schema37219_37236))
,null));
var output_checker37221_37238 = (new cljs.core.Delay(((function (ufv___37234,output_schema37218_37235,input_schema37219_37236,input_checker37220_37237){
return (function (){
return schema.core.checker.call(null,output_schema37218_37235);
});})(ufv___37234,output_schema37218_37235,input_schema37219_37236,input_checker37220_37237))
,null));
var ret__2067__auto___37239 = /**
 * Inputs: [store :- StorageType [prop v :as prop-val] :- [s/Keyword s/Any]]
 *   Returns: s/Any
 * 
 *   Determines if the val of a map entry is a node to be recursed on, and loads if necessary
 */
naga.data.recurse_node = ((function (ufv___37234,output_schema37218_37235,input_schema37219_37236,input_checker37220_37237,output_checker37221_37238){
return (function naga$data$recurse_node(G__37222,G__37223){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37234);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37222,G__37223], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"recurse-node","recurse-node",985130139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if the val of a map entry is a node to be recursed on, and loads if necessary"], null)),input_schema37219_37236,cljs.core.deref.call(null,input_checker37220_37237),args__657__auto___37240);
} else {
var temp__5457__auto___37241 = cljs.core.deref.call(null,input_checker37220_37237).call(null,args__657__auto___37240);
if(cljs.core.truth_(temp__5457__auto___37241)){
var error__658__auto___37242 = temp__5457__auto___37241;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"recurse-node","recurse-node",985130139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if the val of a map entry is a node to be recursed on, and loads if necessary"], null)),cljs.core.pr_str.call(null,error__658__auto___37242)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37219_37236,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37240,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37242], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37222;
var G__37227 = G__37223;
var vec__37228 = G__37227;
var prop = cljs.core.nth.call(null,vec__37228,(0),null);
var v = cljs.core.nth.call(null,vec__37228,(1),null);
var prop_val = vec__37228;
var store__$1 = store;
var G__37227__$1 = G__37227;
while(true){
var store__$2 = store__$1;
var vec__37231 = G__37227__$1;
var prop__$1 = cljs.core.nth.call(null,vec__37231,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__37231,(1),null);
var prop_val__$1 = vec__37231;
var temp__5455__auto__ = naga.data.check_structure.call(null,store__$2,prop__$1,v__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var pairs = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop__$1,(function (){var or__3924__auto__ = naga.data.build_list.call(null,store__$2,pairs);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return naga.data.pairs__GT_json.call(null,store__$2,pairs);
}
})()], null);
} else {
return prop_val__$1;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"recurse-node","recurse-node",985130139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if the val of a map entry is a node to be recursed on, and loads if necessary"], null)),output_schema37218_37235,cljs.core.deref.call(null,output_checker37221_37238),o__659__auto__);
} else {
var temp__5457__auto___37243 = cljs.core.deref.call(null,output_checker37221_37238).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37243)){
var error__658__auto___37244 = temp__5457__auto___37243;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"recurse-node","recurse-node",985130139,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if the val of a map entry is a node to be recursed on, and loads if necessary"], null)),cljs.core.pr_str.call(null,error__658__auto___37244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37218_37235,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37244], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37234,output_schema37218_37235,input_schema37219_37236,input_checker37220_37237,output_checker37221_37238))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.recurse_node),schema.core.__GT_FnSchema.call(null,output_schema37218_37235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37219_37236], null)));

var ufv___37251 = schema.utils.use_fn_validation;
var output_schema37245_37252 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
var input_schema37246_37253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword,schema.core.Any], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"prop-vals","prop-vals",549904867,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null)))], null);
var input_checker37247_37254 = (new cljs.core.Delay(((function (ufv___37251,output_schema37245_37252,input_schema37246_37253){
return (function (){
return schema.core.checker.call(null,input_schema37246_37253);
});})(ufv___37251,output_schema37245_37252,input_schema37246_37253))
,null));
var output_checker37248_37255 = (new cljs.core.Delay(((function (ufv___37251,output_schema37245_37252,input_schema37246_37253,input_checker37247_37254){
return (function (){
return schema.core.checker.call(null,output_schema37245_37252);
});})(ufv___37251,output_schema37245_37252,input_schema37246_37253,input_checker37247_37254))
,null));
var ret__2067__auto___37256 = /**
 * Inputs: [store :- StorageType prop-vals :- [[s/Keyword s/Any]]]
 *   Returns: #:s{Keyword s/Any}
 * 
 *   Uses a set of property-value pairs to load up a nested data structure from the graph
 */
naga.data.pairs__GT_json = ((function (ufv___37251,output_schema37245_37252,input_schema37246_37253,input_checker37247_37254,output_checker37248_37255){
return (function naga$data$pairs__GT_json(G__37249,G__37250){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37251);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37249,G__37250], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"pairs->json","pairs->json",-634801141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses a set of property-value pairs to load up a nested data structure from the graph"], null)),input_schema37246_37253,cljs.core.deref.call(null,input_checker37247_37254),args__657__auto___37257);
} else {
var temp__5457__auto___37258 = cljs.core.deref.call(null,input_checker37247_37254).call(null,args__657__auto___37257);
if(cljs.core.truth_(temp__5457__auto___37258)){
var error__658__auto___37259 = temp__5457__auto___37258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pairs->json","pairs->json",-634801141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses a set of property-value pairs to load up a nested data structure from the graph"], null)),cljs.core.pr_str.call(null,error__658__auto___37259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37246_37253,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37257,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37259], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37249;
var prop_vals = G__37250;
while(true){
return cljs.core.dissoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,naga.data.recurse_node,store),prop_vals)),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("naga","entity","naga/entity",-456428631));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"pairs->json","pairs->json",-634801141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses a set of property-value pairs to load up a nested data structure from the graph"], null)),output_schema37245_37252,cljs.core.deref.call(null,output_checker37248_37255),o__659__auto__);
} else {
var temp__5457__auto___37260 = cljs.core.deref.call(null,output_checker37248_37255).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37260)){
var error__658__auto___37261 = temp__5457__auto___37260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"pairs->json","pairs->json",-634801141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses a set of property-value pairs to load up a nested data structure from the graph"], null)),cljs.core.pr_str.call(null,error__658__auto___37261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37245_37252,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37261], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37251,output_schema37245_37252,input_schema37246_37253,input_checker37247_37254,output_checker37248_37255))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.pairs__GT_json),schema.core.__GT_FnSchema.call(null,output_schema37245_37252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37246_37253], null)));

var ufv___37268 = schema.utils.use_fn_validation;
var output_schema37262_37269 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
var input_schema37263_37270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"entity-id","entity-id",-1168537676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37264_37271 = (new cljs.core.Delay(((function (ufv___37268,output_schema37262_37269,input_schema37263_37270){
return (function (){
return schema.core.checker.call(null,input_schema37263_37270);
});})(ufv___37268,output_schema37262_37269,input_schema37263_37270))
,null));
var output_checker37265_37272 = (new cljs.core.Delay(((function (ufv___37268,output_schema37262_37269,input_schema37263_37270,input_checker37264_37271){
return (function (){
return schema.core.checker.call(null,output_schema37262_37269);
});})(ufv___37268,output_schema37262_37269,input_schema37263_37270,input_checker37264_37271))
,null));
var ret__2067__auto___37273 = /**
 * Inputs: [store :- StorageType entity-id :- s/Any]
 *   Returns: #:s{Keyword s/Any}
 * 
 *   Uses an id node to load up a nested data structure from the graph
 */
naga.data.id__GT_json = ((function (ufv___37268,output_schema37262_37269,input_schema37263_37270,input_checker37264_37271,output_checker37265_37272){
return (function naga$data$id__GT_json(G__37266,G__37267){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37268);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37266,G__37267], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"id->json","id->json",-108523041,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses an id node to load up a nested data structure from the graph"], null)),input_schema37263_37270,cljs.core.deref.call(null,input_checker37264_37271),args__657__auto___37274);
} else {
var temp__5457__auto___37275 = cljs.core.deref.call(null,input_checker37264_37271).call(null,args__657__auto___37274);
if(cljs.core.truth_(temp__5457__auto___37275)){
var error__658__auto___37276 = temp__5457__auto___37275;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"id->json","id->json",-108523041,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses an id node to load up a nested data structure from the graph"], null)),cljs.core.pr_str.call(null,error__658__auto___37276)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37263_37270,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37274,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37276], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37266;
var entity_id = G__37267;
while(true){
return naga.data.pairs__GT_json.call(null,store,naga.data.property_values.call(null,store,entity_id));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"id->json","id->json",-108523041,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses an id node to load up a nested data structure from the graph"], null)),output_schema37262_37269,cljs.core.deref.call(null,output_checker37265_37272),o__659__auto__);
} else {
var temp__5457__auto___37277 = cljs.core.deref.call(null,output_checker37265_37272).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37277)){
var error__658__auto___37278 = temp__5457__auto___37277;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"id->json","id->json",-108523041,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Uses an id node to load up a nested data structure from the graph"], null)),cljs.core.pr_str.call(null,error__658__auto___37278)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37262_37269,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37278], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37268,output_schema37262_37269,input_schema37263_37270,input_checker37264_37271,output_checker37265_37272))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.id__GT_json),schema.core.__GT_FnSchema.call(null,output_schema37262_37269,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37263_37270], null)));

var ufv___37285 = schema.utils.use_fn_validation;
var output_schema37279_37286 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
var input_schema37280_37287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"ident","ident",1639789181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker37281_37288 = (new cljs.core.Delay(((function (ufv___37285,output_schema37279_37286,input_schema37280_37287){
return (function (){
return schema.core.checker.call(null,input_schema37280_37287);
});})(ufv___37285,output_schema37279_37286,input_schema37280_37287))
,null));
var output_checker37282_37289 = (new cljs.core.Delay(((function (ufv___37285,output_schema37279_37286,input_schema37280_37287,input_checker37281_37288){
return (function (){
return schema.core.checker.call(null,output_schema37279_37286);
});})(ufv___37285,output_schema37279_37286,input_schema37280_37287,input_checker37281_37288))
,null));
var ret__2067__auto___37290 = /**
 * Inputs: [store :- StorageType ident :- s/Any]
 *   Returns: #:s{Keyword s/Any}
 * 
 *   Converts data in a database to data structures suitable for JSON encoding
 */
naga.data.ident__GT_json = ((function (ufv___37285,output_schema37279_37286,input_schema37280_37287,input_checker37281_37288,output_checker37282_37289){
return (function naga$data$ident__GT_json(G__37283,G__37284){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37285);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37283,G__37284], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"ident->json","ident->json",1185463100,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts data in a database to data structures suitable for JSON encoding"], null)),input_schema37280_37287,cljs.core.deref.call(null,input_checker37281_37288),args__657__auto___37291);
} else {
var temp__5457__auto___37292 = cljs.core.deref.call(null,input_checker37281_37288).call(null,args__657__auto___37291);
if(cljs.core.truth_(temp__5457__auto___37292)){
var error__658__auto___37293 = temp__5457__auto___37292;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ident->json","ident->json",1185463100,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts data in a database to data structures suitable for JSON encoding"], null)),cljs.core.pr_str.call(null,error__658__auto___37293)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37280_37287,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37291,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37293], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37283;
var ident = G__37284;
while(true){
var eid = (function (){var or__3924__auto__ = cljs.core.ffirst.call(null,naga.store.resolve_pattern.call(null,store,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Symbol(null,"ident","ident",1639789181,null)], null)));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.ffirst.call(null,naga.store.resolve_pattern.call(null,store,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"ident","ident",1639789181,null)], null)));
}
})();
return naga.data.id__GT_json.call(null,store,eid);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"ident->json","ident->json",1185463100,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts data in a database to data structures suitable for JSON encoding"], null)),output_schema37279_37286,cljs.core.deref.call(null,output_checker37282_37289),o__659__auto__);
} else {
var temp__5457__auto___37294 = cljs.core.deref.call(null,output_checker37282_37289).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37294)){
var error__658__auto___37295 = temp__5457__auto___37294;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"ident->json","ident->json",1185463100,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts data in a database to data structures suitable for JSON encoding"], null)),cljs.core.pr_str.call(null,error__658__auto___37295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37279_37286,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37295], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37285,output_schema37279_37286,input_schema37280_37287,input_checker37281_37288,output_checker37282_37289))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.ident__GT_json),schema.core.__GT_FnSchema.call(null,output_schema37279_37286,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37280_37287], null)));

var ufv___37301 = schema.utils.use_fn_validation;
var output_schema37296_37302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any])], null);
var input_schema37297_37303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null)))], null);
var input_checker37298_37304 = (new cljs.core.Delay(((function (ufv___37301,output_schema37296_37302,input_schema37297_37303){
return (function (){
return schema.core.checker.call(null,input_schema37297_37303);
});})(ufv___37301,output_schema37296_37302,input_schema37297_37303))
,null));
var output_checker37299_37305 = (new cljs.core.Delay(((function (ufv___37301,output_schema37296_37302,input_schema37297_37303,input_checker37298_37304){
return (function (){
return schema.core.checker.call(null,output_schema37296_37302);
});})(ufv___37301,output_schema37296_37302,input_schema37297_37303,input_checker37298_37304))
,null));
var ret__2067__auto___37306 = /**
 * Inputs: [store :- StorageType]
 *   Returns: [#:s{Keyword s/Any}]
 * 
 *   Pulls all top level JSON out of a store
 */
naga.data.store__GT_json = ((function (ufv___37301,output_schema37296_37302,input_schema37297_37303,input_checker37298_37304,output_checker37299_37305){
return (function naga$data$store__GT_json(G__37300){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37301);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37300], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"store->json","store->json",394716180,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),input_schema37297_37303,cljs.core.deref.call(null,input_checker37298_37304),args__657__auto___37307);
} else {
var temp__5457__auto___37308 = cljs.core.deref.call(null,input_checker37298_37304).call(null,args__657__auto___37307);
if(cljs.core.truth_(temp__5457__auto___37308)){
var error__658__auto___37309 = temp__5457__auto___37308;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->json","store->json",394716180,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37309)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37297_37303,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37307,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37309], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37300;
while(true){
return cljs.core.map.call(null,cljs.core.partial.call(null,naga.data.id__GT_json,store),cljs.core.map.call(null,cljs.core.first,naga.store.query.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("naga","entity","naga/entity",-456428631),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null))));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"store->json","store->json",394716180,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),output_schema37296_37302,cljs.core.deref.call(null,output_checker37299_37305),o__659__auto__);
} else {
var temp__5457__auto___37310 = cljs.core.deref.call(null,output_checker37299_37305).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37310)){
var error__658__auto___37311 = temp__5457__auto___37310;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->json","store->json",394716180,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37311)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37296_37302,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37311], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37301,output_schema37296_37302,input_schema37297_37303,input_checker37298_37304,output_checker37299_37305))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.store__GT_json),schema.core.__GT_FnSchema.call(null,output_schema37296_37302,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37297_37303], null)));

var ufv___37324 = schema.utils.use_fn_validation;
var output_schema37312_37325 = schema.core.Str;
var input_schema37313_37326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null)))], null);
var input_schema37317_37327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)))], null);
var input_checker37314_37328 = (new cljs.core.Delay(((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327){
return (function (){
return schema.core.checker.call(null,input_schema37313_37326);
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327))
,null));
var output_checker37315_37329 = (new cljs.core.Delay(((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328){
return (function (){
return schema.core.checker.call(null,output_schema37312_37325);
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328))
,null));
var input_checker37318_37330 = (new cljs.core.Delay(((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329){
return (function (){
return schema.core.checker.call(null,input_schema37317_37327);
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329))
,null));
var output_checker37319_37331 = (new cljs.core.Delay(((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330){
return (function (){
return schema.core.checker.call(null,output_schema37312_37325);
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330))
,null));
var ret__2067__auto___37332 = (function (){
/**
 * Inputs: ([store :- StorageType] [store :- StorageType indent :- s/Num])
 *   Returns: s/Str
 * 
 *   Reads a store into JSON strings
 */
naga.data.store__GT_str = ((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331){
return (function naga$data$store__GT_str(var_args){
var G__37323 = arguments.length;
switch (G__37323) {
case 1:
return naga.data.store__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return naga.data.store__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331))
;

naga.data.store__GT_str.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331){
return (function (G__37316){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37324);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37316], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),input_schema37313_37326,cljs.core.deref.call(null,input_checker37314_37328),args__657__auto___37334);
} else {
var temp__5457__auto___37335 = cljs.core.deref.call(null,input_checker37314_37328).call(null,args__657__auto___37334);
if(cljs.core.truth_(temp__5457__auto___37335)){
var error__658__auto___37336 = temp__5457__auto___37335;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37313_37326,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37334,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37336], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37316;
while(true){
return naga.data.json_generate_string.call(null,naga.data.store__GT_json.call(null,store));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),output_schema37312_37325,cljs.core.deref.call(null,output_checker37315_37329),o__659__auto__);
} else {
var temp__5457__auto___37337 = cljs.core.deref.call(null,output_checker37315_37329).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37337)){
var error__658__auto___37338 = temp__5457__auto___37337;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37338)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37312_37325,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37338], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331))
;

naga.data.store__GT_str.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331){
return (function (G__37320,G__37321){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37324);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37320,G__37321], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),input_schema37317_37327,cljs.core.deref.call(null,input_checker37318_37330),args__657__auto___37339);
} else {
var temp__5457__auto___37340 = cljs.core.deref.call(null,input_checker37318_37330).call(null,args__657__auto___37339);
if(cljs.core.truth_(temp__5457__auto___37340)){
var error__658__auto___37341 = temp__5457__auto___37340;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37341)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37317_37327,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37339,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37341], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37320;
var indent = G__37321;
while(true){
return naga.data.json_generate_string.call(null,naga.data.store__GT_json.call(null,store),indent);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),output_schema37312_37325,cljs.core.deref.call(null,output_checker37319_37331),o__659__auto__);
} else {
var temp__5457__auto___37342 = cljs.core.deref.call(null,output_checker37319_37331).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37342)){
var error__658__auto___37343 = temp__5457__auto___37342;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"store->str","store->str",1991381559,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37343)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37312_37325,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37343], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37324,output_schema37312_37325,input_schema37313_37326,input_schema37317_37327,input_checker37314_37328,output_checker37315_37329,input_checker37318_37330,output_checker37319_37331))
;

naga.data.store__GT_str.cljs$lang$maxFixedArity = 2;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.store__GT_str),schema.core.make_fn_schema.call(null,output_schema37312_37325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37313_37326,input_schema37317_37327], null)));

var ufv___37349 = schema.utils.use_fn_validation;
var output_schema37344_37350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any])], null);
var input_schema37345_37351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null)))], null);
var input_checker37346_37352 = (new cljs.core.Delay(((function (ufv___37349,output_schema37344_37350,input_schema37345_37351){
return (function (){
return schema.core.checker.call(null,input_schema37345_37351);
});})(ufv___37349,output_schema37344_37350,input_schema37345_37351))
,null));
var output_checker37347_37353 = (new cljs.core.Delay(((function (ufv___37349,output_schema37344_37350,input_schema37345_37351,input_checker37346_37352){
return (function (){
return schema.core.checker.call(null,output_schema37344_37350);
});})(ufv___37349,output_schema37344_37350,input_schema37345_37351,input_checker37346_37352))
,null));
var ret__2067__auto___37354 = /**
 * Inputs: [store :- StorageType]
 *   Returns: [#:s{Keyword s/Any}]
 * 
 *   Pulls all top level JSON out of a store
 */
naga.data.delta__GT_json = ((function (ufv___37349,output_schema37344_37350,input_schema37345_37351,input_checker37346_37352,output_checker37347_37353){
return (function naga$data$delta__GT_json(G__37348){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37349);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37348], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->json","delta->json",-524492019,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),input_schema37345_37351,cljs.core.deref.call(null,input_checker37346_37352),args__657__auto___37355);
} else {
var temp__5457__auto___37356 = cljs.core.deref.call(null,input_checker37346_37352).call(null,args__657__auto___37355);
if(cljs.core.truth_(temp__5457__auto___37356)){
var error__658__auto___37357 = temp__5457__auto___37356;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->json","delta->json",-524492019,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37357)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37345_37351,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37355,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37357], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37348;
while(true){
return cljs.core.map.call(null,cljs.core.partial.call(null,naga.data.id__GT_json,store),naga.store.deltas.call(null,store));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->json","delta->json",-524492019,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),output_schema37344_37350,cljs.core.deref.call(null,output_checker37347_37353),o__659__auto__);
} else {
var temp__5457__auto___37358 = cljs.core.deref.call(null,output_checker37347_37353).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37358)){
var error__658__auto___37359 = temp__5457__auto___37358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->json","delta->json",-524492019,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pulls all top level JSON out of a store"], null)),cljs.core.pr_str.call(null,error__658__auto___37359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37344_37350,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37359], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37349,output_schema37344_37350,input_schema37345_37351,input_checker37346_37352,output_checker37347_37353))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.delta__GT_json),schema.core.__GT_FnSchema.call(null,output_schema37344_37350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37345_37351], null)));

var ufv___37372 = schema.utils.use_fn_validation;
var output_schema37360_37373 = schema.core.Str;
var input_schema37361_37374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null)))], null);
var input_schema37365_37375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)))], null);
var input_checker37362_37376 = (new cljs.core.Delay(((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375){
return (function (){
return schema.core.checker.call(null,input_schema37361_37374);
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375))
,null));
var output_checker37363_37377 = (new cljs.core.Delay(((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376){
return (function (){
return schema.core.checker.call(null,output_schema37360_37373);
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376))
,null));
var input_checker37366_37378 = (new cljs.core.Delay(((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377){
return (function (){
return schema.core.checker.call(null,input_schema37365_37375);
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377))
,null));
var output_checker37367_37379 = (new cljs.core.Delay(((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378){
return (function (){
return schema.core.checker.call(null,output_schema37360_37373);
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378))
,null));
var ret__2067__auto___37380 = (function (){
/**
 * Inputs: ([store :- StorageType] [store :- StorageType indent :- s/Num])
 *   Returns: s/Str
 * 
 *   Reads a store into JSON strings
 */
naga.data.delta__GT_str = ((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379){
return (function naga$data$delta__GT_str(var_args){
var G__37371 = arguments.length;
switch (G__37371) {
case 1:
return naga.data.delta__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return naga.data.delta__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379))
;

naga.data.delta__GT_str.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379){
return (function (G__37364){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37372);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37364], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),input_schema37361_37374,cljs.core.deref.call(null,input_checker37362_37376),args__657__auto___37382);
} else {
var temp__5457__auto___37383 = cljs.core.deref.call(null,input_checker37362_37376).call(null,args__657__auto___37382);
if(cljs.core.truth_(temp__5457__auto___37383)){
var error__658__auto___37384 = temp__5457__auto___37383;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37384)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37361_37374,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37382,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37384], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37364;
while(true){
return naga.data.json_generate_string.call(null,naga.data.delta__GT_json.call(null,store));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),output_schema37360_37373,cljs.core.deref.call(null,output_checker37363_37377),o__659__auto__);
} else {
var temp__5457__auto___37385 = cljs.core.deref.call(null,output_checker37363_37377).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37385)){
var error__658__auto___37386 = temp__5457__auto___37385;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37386)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37360_37373,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37386], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379))
;

naga.data.delta__GT_str.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379){
return (function (G__37368,G__37369){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___37372);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___37387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37368,G__37369], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),input_schema37365_37375,cljs.core.deref.call(null,input_checker37366_37378),args__657__auto___37387);
} else {
var temp__5457__auto___37388 = cljs.core.deref.call(null,input_checker37366_37378).call(null,args__657__auto___37387);
if(cljs.core.truth_(temp__5457__auto___37388)){
var error__658__auto___37389 = temp__5457__auto___37388;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37365_37375,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___37387,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37389], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var store = G__37368;
var indent = G__37369;
while(true){
return naga.data.json_generate_string.call(null,naga.data.delta__GT_json.call(null,store),indent);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),output_schema37360_37373,cljs.core.deref.call(null,output_checker37367_37379),o__659__auto__);
} else {
var temp__5457__auto___37390 = cljs.core.deref.call(null,output_checker37367_37379).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___37390)){
var error__658__auto___37391 = temp__5457__auto___37390;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"delta->str","delta->str",1861412724,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reads a store into JSON strings"], null)),cljs.core.pr_str.call(null,error__658__auto___37391)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37360_37373,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___37391], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___37372,output_schema37360_37373,input_schema37361_37374,input_schema37365_37375,input_checker37362_37376,output_checker37363_37377,input_checker37366_37378,output_checker37367_37379))
;

naga.data.delta__GT_str.cljs$lang$maxFixedArity = 2;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.data.delta__GT_str),schema.core.make_fn_schema.call(null,output_schema37360_37373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37361_37374,input_schema37365_37375], null)));


//# sourceMappingURL=data.js.map?rel=1525291338308
