// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.engine');
goog.require('cljs.core');
goog.require('naga.schema.store_structs');
goog.require('naga.schema.structs');
goog.require('naga.queue');
goog.require('naga.store_registry');
goog.require('naga.store');
goog.require('naga.util');
goog.require('schema.core');
naga.engine.true_STAR_ = cljs.core.constantly.call(null,true);
var ufv___36306 = schema.utils.use_fn_validation;
var output_schema36290_36307 = schema.core.maybe.call(null,naga.schema.store_structs.EPVPattern);
var input_schema36291_36308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.StatusMapEntry,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker36292_36309 = (new cljs.core.Delay(((function (ufv___36306,output_schema36290_36307,input_schema36291_36308){
return (function (){
return schema.core.checker.call(null,input_schema36291_36308);
});})(ufv___36306,output_schema36290_36307,input_schema36291_36308))
,null));
var output_checker36293_36310 = (new cljs.core.Delay(((function (ufv___36306,output_schema36290_36307,input_schema36291_36308,input_checker36292_36309){
return (function (){
return schema.core.checker.call(null,output_schema36290_36307);
});})(ufv___36306,output_schema36290_36307,input_schema36291_36308,input_checker36292_36309))
,null));
var ret__2067__auto___36311 = /**
 * Inputs: [[p status-atom] :- StatusMapEntry]
 *   Returns: (s/maybe ss/EPVPattern)
 * 
 *   Takes a key and value pair (from a status map) and determines if
 *   the value (a ConstraintData) is marked dirty.  If it is dirty, then return
 *   the key (an EPVPattern).
 */
naga.engine.extract_dirty_pattern = ((function (ufv___36306,output_schema36290_36307,input_schema36291_36308,input_checker36292_36309,output_checker36293_36310){
return (function naga$engine$extract_dirty_pattern(G__36294){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36306);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36294], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"extract-dirty-pattern","extract-dirty-pattern",-513197130,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a key and value pair (from a status map) and determines if\n  the value (a ConstraintData) is marked dirty.  If it is dirty, then return\n  the key (an EPVPattern)."], null)),input_schema36291_36308,cljs.core.deref.call(null,input_checker36292_36309),args__657__auto___36312);
} else {
var temp__5457__auto___36313 = cljs.core.deref.call(null,input_checker36292_36309).call(null,args__657__auto___36312);
if(cljs.core.truth_(temp__5457__auto___36313)){
var error__658__auto___36314 = temp__5457__auto___36313;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"extract-dirty-pattern","extract-dirty-pattern",-513197130,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a key and value pair (from a status map) and determines if\n  the value (a ConstraintData) is marked dirty.  If it is dirty, then return\n  the key (an EPVPattern)."], null)),cljs.core.pr_str.call(null,error__658__auto___36314)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36291_36308,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36312,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36314], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var G__36298 = G__36294;
var vec__36299 = G__36298;
var p = cljs.core.nth.call(null,vec__36299,(0),null);
var status_atom = cljs.core.nth.call(null,vec__36299,(1),null);
var G__36298__$1 = G__36298;
while(true){
var vec__36302 = G__36298__$1;
var p__$1 = cljs.core.nth.call(null,vec__36302,(0),null);
var status_atom__$1 = cljs.core.nth.call(null,vec__36302,(1),null);
if(cljs.core.truth_((function (){var G__36305 = status_atom__$1;
var G__36305__$1 = (((G__36305 == null))?null:cljs.core.deref.call(null,G__36305));
if((G__36305__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"dirty","dirty",729553281).cljs$core$IFn$_invoke$arity$1(G__36305__$1);
}
})())){
return p__$1;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"extract-dirty-pattern","extract-dirty-pattern",-513197130,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a key and value pair (from a status map) and determines if\n  the value (a ConstraintData) is marked dirty.  If it is dirty, then return\n  the key (an EPVPattern)."], null)),output_schema36290_36307,cljs.core.deref.call(null,output_checker36293_36310),o__659__auto__);
} else {
var temp__5457__auto___36315 = cljs.core.deref.call(null,output_checker36293_36310).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36315)){
var error__658__auto___36316 = temp__5457__auto___36315;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"extract-dirty-pattern","extract-dirty-pattern",-513197130,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a key and value pair (from a status map) and determines if\n  the value (a ConstraintData) is marked dirty.  If it is dirty, then return\n  the key (an EPVPattern)."], null)),cljs.core.pr_str.call(null,error__658__auto___36316)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36290_36307,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36316], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36306,output_schema36290_36307,input_schema36291_36308,input_checker36292_36309,output_checker36293_36310))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.extract_dirty_pattern),schema.core.__GT_FnSchema.call(null,output_schema36290_36307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36291_36308], null)));

var ufv___36324 = schema.utils.use_fn_validation;
var output_schema36317_36325 = schema.core.maybe.call(null,naga.schema.store_structs.EPVPattern);
var input_schema36318_36326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null))),schema.core.one.call(null,naga.schema.structs.StatusMap,cljs.core.with_meta(new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StatusMap","StatusMap",1568901995,null)], null))),schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)], null)))], null);
var input_checker36319_36327 = (new cljs.core.Delay(((function (ufv___36324,output_schema36317_36325,input_schema36318_36326){
return (function (){
return schema.core.checker.call(null,input_schema36318_36326);
});})(ufv___36324,output_schema36317_36325,input_schema36318_36326))
,null));
var output_checker36320_36328 = (new cljs.core.Delay(((function (ufv___36324,output_schema36317_36325,input_schema36318_36326,input_checker36319_36327){
return (function (){
return schema.core.checker.call(null,output_schema36317_36325);
});})(ufv___36324,output_schema36317_36325,input_schema36318_36326,input_checker36319_36327))
,null));
var ret__2067__auto___36329 = /**
 * Inputs: [storage :- StorageType status :- StatusMap p :- ss/EPVPattern]
 *   Returns: (s/maybe ss/EPVPattern)
 * 
 *   Resolve a pattern against storage, and set the :resolution meta
 *   data if the result is different from the last resolution.  Requires
 *   a status map in order to lookup the last-count.
 */
naga.engine.resolve_count = ((function (ufv___36324,output_schema36317_36325,input_schema36318_36326,input_checker36319_36327,output_checker36320_36328){
return (function naga$engine$resolve_count(G__36321,G__36322,G__36323){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36324);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36330 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36321,G__36322,G__36323], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"resolve-count","resolve-count",197042176,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Resolve a pattern against storage, and set the :resolution meta\n  data if the result is different from the last resolution.  Requires\n  a status map in order to lookup the last-count."], null)),input_schema36318_36326,cljs.core.deref.call(null,input_checker36319_36327),args__657__auto___36330);
} else {
var temp__5457__auto___36331 = cljs.core.deref.call(null,input_checker36319_36327).call(null,args__657__auto___36330);
if(cljs.core.truth_(temp__5457__auto___36331)){
var error__658__auto___36332 = temp__5457__auto___36331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"resolve-count","resolve-count",197042176,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Resolve a pattern against storage, and set the :resolution meta\n  data if the result is different from the last resolution.  Requires\n  a status map in order to lookup the last-count."], null)),cljs.core.pr_str.call(null,error__658__auto___36332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36318_36326,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36330,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36332], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__36321;
var status = G__36322;
var p = G__36323;
while(true){
var resolution_count = naga.store.count_pattern.call(null,storage,p);
var last_count = new cljs.core.Keyword(null,"last-count","last-count",-1563382812).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.get.call(null,status,p)));
if(cljs.core._EQ_.call(null,last_count,resolution_count)){
return null;
} else {
return cljs.core.with_meta.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),resolution_count], null));
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"resolve-count","resolve-count",197042176,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Resolve a pattern against storage, and set the :resolution meta\n  data if the result is different from the last resolution.  Requires\n  a status map in order to lookup the last-count."], null)),output_schema36317_36325,cljs.core.deref.call(null,output_checker36320_36328),o__659__auto__);
} else {
var temp__5457__auto___36333 = cljs.core.deref.call(null,output_checker36320_36328).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36333)){
var error__658__auto___36334 = temp__5457__auto___36333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"resolve-count","resolve-count",197042176,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Resolve a pattern against storage, and set the :resolution meta\n  data if the result is different from the last resolution.  Requires\n  a status map in order to lookup the last-count."], null)),cljs.core.pr_str.call(null,error__658__auto___36334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36317_36325,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36334], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36324,output_schema36317_36325,input_schema36318_36326,input_checker36319_36327,output_checker36320_36328))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.resolve_count),schema.core.__GT_FnSchema.call(null,output_schema36317_36325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36318_36326], null)));

var ufv___36350 = schema.utils.use_fn_validation;
var output_schema36335_36351 = schema.core.Any;
var input_schema36336_36352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-patterns","dirty-patterns",-935285143,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)], null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,naga.schema.store_structs.EPVPattern]),cljs.core.with_meta(new cljs.core.Symbol(null,"counted-set","counted-set",-983256711,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null),new cljs.core.Symbol("ss","EPVPattern","ss/EPVPattern",1993378660,null)], null)], null))),schema.core.one.call(null,naga.schema.structs.StatusMap,cljs.core.with_meta(new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StatusMap","StatusMap",1568901995,null)], null)))], null);
var input_checker36337_36353 = (new cljs.core.Delay(((function (ufv___36350,output_schema36335_36351,input_schema36336_36352){
return (function (){
return schema.core.checker.call(null,input_schema36336_36352);
});})(ufv___36350,output_schema36335_36351,input_schema36336_36352))
,null));
var output_checker36338_36354 = (new cljs.core.Delay(((function (ufv___36350,output_schema36335_36351,input_schema36336_36352,input_checker36337_36353){
return (function (){
return schema.core.checker.call(null,output_schema36335_36351);
});})(ufv___36350,output_schema36335_36351,input_schema36336_36352,input_checker36337_36353))
,null));
var ret__2067__auto___36355 = /**
 * Inputs: [dirty-patterns :- [ss/EPVPattern] counted-set :- #:ss{EPVPattern ss/EPVPattern} status :- StatusMap]
 * 
 *   Reset the pattern status, making it clean.  Uses meta from
 * resolve-count (above). Result should be ignored.
 */
naga.engine.mark_rule_cleaned_with_latest_count_BANG_ = ((function (ufv___36350,output_schema36335_36351,input_schema36336_36352,input_checker36337_36353,output_checker36338_36354){
return (function naga$engine$mark_rule_cleaned_with_latest_count_BANG_(G__36339,G__36340,G__36341){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36350);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36356 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36339,G__36340,G__36341], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"mark-rule-cleaned-with-latest-count!","mark-rule-cleaned-with-latest-count!",1156008314,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reset the pattern status, making it clean.  Uses meta from\n   resolve-count (above). Result should be ignored."], null)),input_schema36336_36352,cljs.core.deref.call(null,input_checker36337_36353),args__657__auto___36356);
} else {
var temp__5457__auto___36357 = cljs.core.deref.call(null,input_checker36337_36353).call(null,args__657__auto___36356);
if(cljs.core.truth_(temp__5457__auto___36357)){
var error__658__auto___36358 = temp__5457__auto___36357;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mark-rule-cleaned-with-latest-count!","mark-rule-cleaned-with-latest-count!",1156008314,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reset the pattern status, making it clean.  Uses meta from\n   resolve-count (above). Result should be ignored."], null)),cljs.core.pr_str.call(null,error__658__auto___36358)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36336_36352,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36356,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36358], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var dirty_patterns = G__36339;
var counted_set = G__36340;
var status = G__36341;
while(true){
var seq__36342 = cljs.core.seq.call(null,dirty_patterns);
var chunk__36343 = null;
var count__36344 = (0);
var i__36345 = (0);
while(true){
if((i__36345 < count__36344)){
var dp = cljs.core._nth.call(null,chunk__36343,i__36345);
var map__36346_36359 = (function (){var temp__5455__auto__ = cljs.core.get.call(null,counted_set,dp);
if(cljs.core.truth_(temp__5455__auto__)){
var cp = temp__5455__auto__;
return cljs.core.meta.call(null,cp);
} else {
return null;
}
})();
var map__36346_36360__$1 = ((((!((map__36346_36359 == null)))?(((((map__36346_36359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36346_36359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36346_36359):map__36346_36359);
var c_36361 = cljs.core.get.call(null,map__36346_36360__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var pattern_status_36362 = cljs.core.get.call(null,status,dp);
cljs.core.reset_BANG_.call(null,pattern_status_36362,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-count","last-count",-1563382812),(function (){var or__3924__auto__ = c_36361;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return new cljs.core.Keyword(null,"last-count","last-count",-1563382812).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pattern_status_36362));
}
})(),new cljs.core.Keyword(null,"dirty","dirty",729553281),false], null));


var G__36363 = seq__36342;
var G__36364 = chunk__36343;
var G__36365 = count__36344;
var G__36366 = (i__36345 + (1));
seq__36342 = G__36363;
chunk__36343 = G__36364;
count__36344 = G__36365;
i__36345 = G__36366;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36342);
if(temp__5457__auto__){
var seq__36342__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36342__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__36342__$1);
var G__36367 = cljs.core.chunk_rest.call(null,seq__36342__$1);
var G__36368 = c__4321__auto__;
var G__36369 = cljs.core.count.call(null,c__4321__auto__);
var G__36370 = (0);
seq__36342 = G__36367;
chunk__36343 = G__36368;
count__36344 = G__36369;
i__36345 = G__36370;
continue;
} else {
var dp = cljs.core.first.call(null,seq__36342__$1);
var map__36348_36371 = (function (){var temp__5455__auto__ = cljs.core.get.call(null,counted_set,dp);
if(cljs.core.truth_(temp__5455__auto__)){
var cp = temp__5455__auto__;
return cljs.core.meta.call(null,cp);
} else {
return null;
}
})();
var map__36348_36372__$1 = ((((!((map__36348_36371 == null)))?(((((map__36348_36371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348_36371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348_36371):map__36348_36371);
var c_36373 = cljs.core.get.call(null,map__36348_36372__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var pattern_status_36374 = cljs.core.get.call(null,status,dp);
cljs.core.reset_BANG_.call(null,pattern_status_36374,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-count","last-count",-1563382812),(function (){var or__3924__auto__ = c_36373;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return new cljs.core.Keyword(null,"last-count","last-count",-1563382812).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pattern_status_36374));
}
})(),new cljs.core.Keyword(null,"dirty","dirty",729553281),false], null));


var G__36375 = cljs.core.next.call(null,seq__36342__$1);
var G__36376 = null;
var G__36377 = (0);
var G__36378 = (0);
seq__36342 = G__36375;
chunk__36343 = G__36376;
count__36344 = G__36377;
i__36345 = G__36378;
continue;
}
} else {
return null;
}
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"mark-rule-cleaned-with-latest-count!","mark-rule-cleaned-with-latest-count!",1156008314,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reset the pattern status, making it clean.  Uses meta from\n   resolve-count (above). Result should be ignored."], null)),output_schema36335_36351,cljs.core.deref.call(null,output_checker36338_36354),o__659__auto__);
} else {
var temp__5457__auto___36379 = cljs.core.deref.call(null,output_checker36338_36354).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36379)){
var error__658__auto___36380 = temp__5457__auto___36379;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"mark-rule-cleaned-with-latest-count!","mark-rule-cleaned-with-latest-count!",1156008314,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reset the pattern status, making it clean.  Uses meta from\n   resolve-count (above). Result should be ignored."], null)),cljs.core.pr_str.call(null,error__658__auto___36380)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36335_36351,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36380], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36350,output_schema36335_36351,input_schema36336_36352,input_checker36337_36353,output_checker36338_36354))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.mark_rule_cleaned_with_latest_count_BANG_),schema.core.__GT_FnSchema.call(null,output_schema36335_36351,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36336_36352], null)));

var ufv___36394 = schema.utils.use_fn_validation;
var output_schema36381_36395 = schema.core.Any;
var input_schema36382_36396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.DynamicRule]),cljs.core.with_meta(new cljs.core.Symbol(null,"rules","rules",-1455523403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null)], null))),schema.core.one.call(null,naga.queue.PQueueType,cljs.core.with_meta(new cljs.core.Symbol(null,"remaining-queue","remaining-queue",-177022688,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"PQueueType","PQueueType",-1066251303,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null)))], null);
var input_checker36383_36397 = (new cljs.core.Delay(((function (ufv___36394,output_schema36381_36395,input_schema36382_36396){
return (function (){
return schema.core.checker.call(null,input_schema36382_36396);
});})(ufv___36394,output_schema36381_36395,input_schema36382_36396))
,null));
var output_checker36384_36398 = (new cljs.core.Delay(((function (ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397){
return (function (){
return schema.core.checker.call(null,output_schema36381_36395);
});})(ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397))
,null));
var ret__2067__auto___36399 = /**
 * Inputs: [rules :- #:s{Str DynamicRule} remaining-queue :- PQueueType downstream :- [RulePatternPair]]
 * 
 *   Adds all downstream rules to the queue.
 * The queue will adjust order according to salience, if necessary.
 * Also marks relevant patterns in the downstream rule bodies as dirty.
 */
naga.engine.schedule_downstream_queue = ((function (ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397,output_checker36384_36398){
return (function naga$engine$schedule_downstream_queue(G__36385,G__36386,G__36387){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36394);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36400 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36385,G__36386,G__36387], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"schedule-downstream-queue","schedule-downstream-queue",1460458819,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds all downstream rules to the queue.\n   The queue will adjust order according to salience, if necessary.\n   Also marks relevant patterns in the downstream rule bodies as dirty."], null)),input_schema36382_36396,cljs.core.deref.call(null,input_checker36383_36397),args__657__auto___36400);
} else {
var temp__5457__auto___36401 = cljs.core.deref.call(null,input_checker36383_36397).call(null,args__657__auto___36400);
if(cljs.core.truth_(temp__5457__auto___36401)){
var error__658__auto___36402 = temp__5457__auto___36401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"schedule-downstream-queue","schedule-downstream-queue",1460458819,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds all downstream rules to the queue.\n   The queue will adjust order according to salience, if necessary.\n   Also marks relevant patterns in the downstream rule bodies as dirty."], null)),cljs.core.pr_str.call(null,error__658__auto___36402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36382_36396,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36400,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36402], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var rules = G__36385;
var remaining_queue = G__36386;
var downstream = G__36387;
while(true){
return cljs.core.reduce.call(null,((function (validate__656__auto__,ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397,output_checker36384_36398){
return (function (rqueue,p__36388){
var vec__36389 = p__36388;
var rname = cljs.core.nth.call(null,vec__36389,(0),null);
var pattern = cljs.core.nth.call(null,vec__36389,(1),null);
var map__36392 = cljs.core.get.call(null,rules,rname);
var map__36392__$1 = ((((!((map__36392 == null)))?(((((map__36392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36392):map__36392);
var sched_rule = map__36392__$1;
var status = cljs.core.get.call(null,map__36392__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var constraint_data = cljs.core.get.call(null,status,pattern);
if(cljs.core.list_QMARK_.call(null,pattern)){
} else {
if(cljs.core.truth_(constraint_data)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["rule-constraint pair missing in rule: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('')),"\n","constraint-data"].join('')));
}

cljs.core.swap_BANG_.call(null,constraint_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dirty","dirty",729553281)], null),naga.engine.true_STAR_);
}

return naga.queue.add.call(null,rqueue,sched_rule);
});})(validate__656__auto__,ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397,output_checker36384_36398))
,remaining_queue,downstream);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"schedule-downstream-queue","schedule-downstream-queue",1460458819,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds all downstream rules to the queue.\n   The queue will adjust order according to salience, if necessary.\n   Also marks relevant patterns in the downstream rule bodies as dirty."], null)),output_schema36381_36395,cljs.core.deref.call(null,output_checker36384_36398),o__659__auto__);
} else {
var temp__5457__auto___36403 = cljs.core.deref.call(null,output_checker36384_36398).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36403)){
var error__658__auto___36404 = temp__5457__auto___36403;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"schedule-downstream-queue","schedule-downstream-queue",1460458819,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds all downstream rules to the queue.\n   The queue will adjust order according to salience, if necessary.\n   Also marks relevant patterns in the downstream rule bodies as dirty."], null)),cljs.core.pr_str.call(null,error__658__auto___36404)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36381_36395,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36404], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36394,output_schema36381_36395,input_schema36382_36396,input_checker36383_36397,output_checker36384_36398))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.schedule_downstream_queue),schema.core.__GT_FnSchema.call(null,output_schema36381_36395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36382_36396], null)));

var ufv___36414 = schema.utils.use_fn_validation;
var output_schema36406_36415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,"Final value of storage"),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,schema.core.Num]),"Map of rule name to execution count")], null);
var input_schema36407_36416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.DynamicRule]),cljs.core.with_meta(new cljs.core.Symbol(null,"rules","rules",-1455523403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null)], null))),schema.core.one.call(null,naga.store.StorageType,cljs.core.with_meta(new cljs.core.Symbol(null,"db-store","db-store",1402880702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null)], null)))], null);
var input_checker36408_36417 = (new cljs.core.Delay(((function (ufv___36414,output_schema36406_36415,input_schema36407_36416){
return (function (){
return schema.core.checker.call(null,input_schema36407_36416);
});})(ufv___36414,output_schema36406_36415,input_schema36407_36416))
,null));
var output_checker36409_36418 = (new cljs.core.Delay(((function (ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417){
return (function (){
return schema.core.checker.call(null,output_schema36406_36415);
});})(ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417))
,null));
var ret__2067__auto___36419 = /**
 * Inputs: [rules :- #:s{Str DynamicRule} db-store :- StorageType]
 *   Returns: [(s/one StorageType "Final value of storage") (s/one #:s{Str s/Num} "Map of rule name to execution count")]
 * 
 *   Executes a program. Data is retrieved from and inserted into db-store.
 */
naga.engine.execute = ((function (ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418){
return (function naga$engine$execute(G__36410,G__36411){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36414);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36410,G__36411], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"execute","execute",1511032339,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Final value of storage"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Map of rule name to execution count")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Executes a program. Data is retrieved from and inserted into db-store."], null)),input_schema36407_36416,cljs.core.deref.call(null,input_checker36408_36417),args__657__auto___36420);
} else {
var temp__5457__auto___36421 = cljs.core.deref.call(null,input_checker36408_36417).call(null,args__657__auto___36420);
if(cljs.core.truth_(temp__5457__auto___36421)){
var error__658__auto___36422 = temp__5457__auto___36421;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"execute","execute",1511032339,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Final value of storage"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Map of rule name to execution count")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Executes a program. Data is retrieved from and inserted into db-store."], null)),cljs.core.pr_str.call(null,error__658__auto___36422)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36407_36416,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36420,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36422], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var rules = G__36410;
var db_store = G__36411;
while(true){
var rule_queue = cljs.core.reduce.call(null,naga.queue.add,naga.queue.new_queue.call(null,new cljs.core.Keyword(null,"salience","salience",1001218760),new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.vals.call(null,rules));
var queue = rule_queue;
var storage = db_store;
var loop_count = (0);
while(true){
var map__36412 = naga.queue.head.call(null,queue);
var map__36412__$1 = ((((!((map__36412 == null)))?(((((map__36412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36412):map__36412);
var current_rule = map__36412__$1;
var status = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var head = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var downstream = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"downstream","downstream",-539718142));
var execution_count = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597));
var remaining_queue = naga.queue.pop.call(null,queue);
if((current_rule == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [storage,naga.util.mapmap.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.comp.call(null,cljs.core.deref,new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597)),cljs.core.vals.call(null,rules))], null);
} else {
var temp__5455__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,naga.engine.extract_dirty_pattern,status));
if(temp__5455__auto__){
var dirty_patterns = temp__5455__auto__;
var counted_patterns = cljs.core.keep.call(null,cljs.core.partial.call(null,naga.engine.resolve_count,storage,status),dirty_patterns);
var counted_set = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (queue,storage,loop_count,counted_patterns,dirty_patterns,temp__5455__auto__,map__36412,map__36412__$1,current_rule,status,body,head,downstream,execution_count,remaining_queue,rule_queue,validate__656__auto__,ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
});})(queue,storage,loop_count,counted_patterns,dirty_patterns,temp__5455__auto__,map__36412,map__36412__$1,current_rule,status,body,head,downstream,execution_count,remaining_queue,rule_queue,validate__656__auto__,ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418))
,counted_patterns));
var hinted_patterns = cljs.core.map.call(null,((function (queue,storage,loop_count,counted_patterns,counted_set,dirty_patterns,temp__5455__auto__,map__36412,map__36412__$1,current_rule,status,body,head,downstream,execution_count,remaining_queue,rule_queue,validate__656__auto__,ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418){
return (function (p1__36405_SHARP_){
return cljs.core.get.call(null,counted_set,p1__36405_SHARP_,p1__36405_SHARP_);
});})(queue,storage,loop_count,counted_patterns,counted_set,dirty_patterns,temp__5455__auto__,map__36412,map__36412__$1,current_rule,status,body,head,downstream,execution_count,remaining_queue,rule_queue,validate__656__auto__,ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418))
,body);
naga.engine.mark_rule_cleaned_with_latest_count_BANG_.call(null,dirty_patterns,counted_set,status);

if(cljs.core.seq.call(null,counted_patterns)){
var updated_storage = naga.store.query_insert.call(null,storage,head,hinted_patterns);
var scheduled_queue = naga.engine.schedule_downstream_queue.call(null,rules,remaining_queue,downstream);
cljs.core.swap_BANG_.call(null,execution_count,cljs.core.inc);

var G__36423 = scheduled_queue;
var G__36424 = updated_storage;
var G__36425 = (loop_count + (1));
queue = G__36423;
storage = G__36424;
loop_count = G__36425;
continue;
} else {
var G__36426 = remaining_queue;
var G__36427 = storage;
var G__36428 = (loop_count + (1));
queue = G__36426;
storage = G__36427;
loop_count = G__36428;
continue;
}
} else {
var G__36429 = remaining_queue;
var G__36430 = storage;
var G__36431 = (loop_count + (1));
queue = G__36429;
storage = G__36430;
loop_count = G__36431;
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
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"execute","execute",1511032339,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Final value of storage"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Map of rule name to execution count")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Executes a program. Data is retrieved from and inserted into db-store."], null)),output_schema36406_36415,cljs.core.deref.call(null,output_checker36409_36418),o__659__auto__);
} else {
var temp__5457__auto___36432 = cljs.core.deref.call(null,output_checker36409_36418).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36432)){
var error__658__auto___36433 = temp__5457__auto___36432;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"execute","execute",1511032339,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Final value of storage"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Map of rule name to execution count")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Executes a program. Data is retrieved from and inserted into db-store."], null)),cljs.core.pr_str.call(null,error__658__auto___36433)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36406_36415,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36433], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36414,output_schema36406_36415,input_schema36407_36416,input_checker36408_36417,output_checker36409_36418))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.execute),schema.core.__GT_FnSchema.call(null,output_schema36406_36415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36407_36416], null)));

var ufv___36449 = schema.utils.use_fn_validation;
var output_schema36434_36450 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.DynamicRule]);
var input_schema36435_36451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.Rule]),cljs.core.with_meta(new cljs.core.Symbol(null,"rules","rules",-1455523403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null)], null)))], null);
var input_checker36436_36452 = (new cljs.core.Delay(((function (ufv___36449,output_schema36434_36450,input_schema36435_36451){
return (function (){
return schema.core.checker.call(null,input_schema36435_36451);
});})(ufv___36449,output_schema36434_36450,input_schema36435_36451))
,null));
var output_checker36437_36453 = (new cljs.core.Delay(((function (ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452){
return (function (){
return schema.core.checker.call(null,output_schema36434_36450);
});})(ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452))
,null));
var ret__2067__auto___36454 = /**
 * Inputs: [rules :- #:s{Str Rule}]
 *   Returns: #:s{Str DynamicRule}
 * 
 *   Takes rules with calculated dependencies, and initializes them
 */
naga.engine.initialize_rules = ((function (ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453){
return (function naga$engine$initialize_rules(G__36438){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36449);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36438], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"initialize-rules","initialize-rules",-1711966715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes rules with calculated dependencies, and initializes them"], null)),input_schema36435_36451,cljs.core.deref.call(null,input_checker36436_36452),args__657__auto___36455);
} else {
var temp__5457__auto___36456 = cljs.core.deref.call(null,input_checker36436_36452).call(null,args__657__auto___36455);
if(cljs.core.truth_(temp__5457__auto___36456)){
var error__658__auto___36457 = temp__5457__auto___36456;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"initialize-rules","initialize-rules",-1711966715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes rules with calculated dependencies, and initializes them"], null)),cljs.core.pr_str.call(null,error__658__auto___36457)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36435_36451,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36455,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36457], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var rules = G__36438;
while(true){
var init_rule = ((function (validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453){
return (function naga$engine$initialize_rules_$_init_rule(p__36442){
var map__36443 = p__36442;
var map__36443__$1 = ((((!((map__36443 == null)))?(((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var head = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var name = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var salience = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"salience","salience",1001218760));
var downstream = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"downstream","downstream",-539718142));
return naga.schema.structs.new_rule.call(null,head,body,name,downstream,salience,naga.util.mapmap.call(null,((function (map__36443,map__36443__$1,head,body,name,salience,downstream,validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453){
return (function (_){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-count","last-count",-1563382812),(0),new cljs.core.Keyword(null,"dirty","dirty",729553281),true], null));
});})(map__36443,map__36443__$1,head,body,name,salience,downstream,validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453))
,cljs.core.remove.call(null,cljs.core.list_QMARK_,body)),cljs.core.atom.call(null,(0)));
});})(validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453))
;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453){
return (function (p__36445){
var vec__36446 = p__36445;
var rule_name = cljs.core.nth.call(null,vec__36446,(0),null);
var rule = cljs.core.nth.call(null,vec__36446,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rule_name,init_rule.call(null,rule)], null);
});})(validate__656__auto__,ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453))
,rules));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"initialize-rules","initialize-rules",-1711966715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes rules with calculated dependencies, and initializes them"], null)),output_schema36434_36450,cljs.core.deref.call(null,output_checker36437_36453),o__659__auto__);
} else {
var temp__5457__auto___36458 = cljs.core.deref.call(null,output_checker36437_36453).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36458)){
var error__658__auto___36459 = temp__5457__auto___36458;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"initialize-rules","initialize-rules",-1711966715,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol(null,"DynamicRule","DynamicRule",-1969713744,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes rules with calculated dependencies, and initializes them"], null)),cljs.core.pr_str.call(null,error__658__auto___36459)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36434_36450,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36459], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36449,output_schema36434_36450,input_schema36435_36451,input_checker36436_36452,output_checker36437_36453))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.initialize_rules),schema.core.__GT_FnSchema.call(null,output_schema36434_36450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36435_36451], null)));

var ufv___36475 = schema.utils.use_fn_validation;
var output_schema36460_36476 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.store.StorageType,"Resulting data store"),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,schema.core.Num]),"Execution stats"),schema.core.one.call(null,schema.core.maybe.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,schema.core.Num])),"Execution stats")], null);
var input_schema36461_36477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]),cljs.core.with_meta(new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,naga.schema.structs.Program,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker36462_36478 = (new cljs.core.Delay(((function (ufv___36475,output_schema36460_36476,input_schema36461_36477){
return (function (){
return schema.core.checker.call(null,input_schema36461_36477);
});})(ufv___36475,output_schema36460_36476,input_schema36461_36477))
,null));
var output_checker36463_36479 = (new cljs.core.Delay(((function (ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478){
return (function (){
return schema.core.checker.call(null,output_schema36460_36476);
});})(ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478))
,null));
var ret__2067__auto___36480 = /**
 * Inputs: [config :- #:s{Keyword s/Any} {:keys [rules axioms]} :- Program]
 *   Returns: [(s/one StorageType "Resulting data store") (s/one #:s{Str s/Num} "Execution stats") (s/one (s/maybe #:s{Str s/Num}) "Execution stats")]
 * 
 *   Runs a program against a given configuration
 */
naga.engine.run = ((function (ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function naga$engine$run(G__36464,G__36465){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36475);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36464,G__36465], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"run","run",-180635126,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Resulting data store"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Execution stats"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),"Execution stats")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs a program against a given configuration"], null)),input_schema36461_36477,cljs.core.deref.call(null,input_checker36462_36478),args__657__auto___36481);
} else {
var temp__5457__auto___36482 = cljs.core.deref.call(null,input_checker36462_36478).call(null,args__657__auto___36481);
if(cljs.core.truth_(temp__5457__auto___36482)){
var error__658__auto___36483 = temp__5457__auto___36482;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"run","run",-180635126,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Resulting data store"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Execution stats"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),"Execution stats")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs a program against a given configuration"], null)),cljs.core.pr_str.call(null,error__658__auto___36483)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36461_36477,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36481,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36483], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var config = G__36464;
var G__36467 = G__36465;
var map__36468 = G__36467;
var map__36468__$1 = ((((!((map__36468 == null)))?(((((map__36468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36468):map__36468);
var rules = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var axioms = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"axioms","axioms",-1585728273));
var config__$1 = config;
var G__36467__$1 = G__36467;
while(true){
var config__$2 = config__$1;
var map__36470 = G__36467__$1;
var map__36470__$1 = ((((!((map__36470 == null)))?(((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var rules__$1 = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var axioms__$1 = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"axioms","axioms",-1585728273));
var storage = naga.store_registry.get_storage_handle.call(null,config__$2);
var storage_SINGLEQUOTE_ = naga.store.start_tx.call(null,storage);
var rules_SINGLEQUOTE_ = naga.engine.initialize_rules.call(null,rules__$1);
var initialized_storage = naga.store.assert_data.call(null,storage_SINGLEQUOTE_,axioms__$1);
var vec__36472 = naga.engine.execute.call(null,rules_SINGLEQUOTE_,initialized_storage);
var output_storage = cljs.core.nth.call(null,vec__36472,(0),null);
var stats = cljs.core.nth.call(null,vec__36472,(1),null);
var result_storage = naga.store.commit_tx.call(null,output_storage);
var delta_ids = naga.store.deltas.call(null,result_storage);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_storage,stats,delta_ids], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"run","run",-180635126,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Resulting data store"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Execution stats"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),"Execution stats")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs a program against a given configuration"], null)),output_schema36460_36476,cljs.core.deref.call(null,output_checker36463_36479),o__659__auto__);
} else {
var temp__5457__auto___36484 = cljs.core.deref.call(null,output_checker36463_36479).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36484)){
var error__658__auto___36485 = temp__5457__auto___36484;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"run","run",-180635126,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"StorageType","StorageType",1465660389,null),"Resulting data store"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),"Execution stats"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),"Execution stats")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Runs a program against a given configuration"], null)),cljs.core.pr_str.call(null,error__658__auto___36485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36460_36476,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36485], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.engine.run),schema.core.__GT_FnSchema.call(null,output_schema36460_36476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36461_36477], null)));


//# sourceMappingURL=engine.js.map?rel=1525291337301
