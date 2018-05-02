// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.storage.store_util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('naga.schema.store_structs');
goog.require('naga.store');
goog.require('cljs.core');
var ufv___32907 = schema.utils.use_fn_validation;
var output_schema32894_32908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema32895_32909 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"wide-pattern","wide-pattern",-6276584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null))], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"mapping","mapping",398126097,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Value], null),cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Value","Value",2029092958,null)], null)], null)))], null);
var input_checker32896_32910 = (new cljs.core.Delay(((function (ufv___32907,output_schema32894_32908,input_schema32895_32909){
return (function (){
return schema.core.checker.call(null,input_schema32895_32909);
});})(ufv___32907,output_schema32894_32908,input_schema32895_32909))
,null));
var output_checker32897_32911 = (new cljs.core.Delay(((function (ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910){
return (function (){
return schema.core.checker.call(null,output_schema32894_32908);
});})(ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910))
,null));
var ret__2067__auto___32912 = /**
 * Inputs: [storage wide-pattern :- [s/Any] nodes :- (s/maybe [s/Num]) mapping :- #:s{Num s/Num} row :- [Value]]
 *   Returns: [s/Any]
 * 
 *   Creates a new EPVPattern from an existing one, based on existing bindings.
 * Uses the mapping to copy from columns in 'row' to overwrite variables in 'pattern'.
 * 'pattern' must be a vector.
 * The index mappings have already been found and are in the 'mapping' argument
 */
naga.storage.store_util.project_row = ((function (ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911){
return (function naga$storage$store_util$project_row(G__32898,G__32899,G__32900,G__32901,G__32902){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32907);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32913 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32898,G__32899,G__32900,G__32901,G__32902], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"project-row","project-row",1443879424,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'row' to overwrite variables in 'pattern'.\n   'pattern' must be a vector.\n   The index mappings have already been found and are in the 'mapping' argument"], null)),input_schema32895_32909,cljs.core.deref.call(null,input_checker32896_32910),args__657__auto___32913);
} else {
var temp__5457__auto___32914 = cljs.core.deref.call(null,input_checker32896_32910).call(null,args__657__auto___32913);
if(cljs.core.truth_(temp__5457__auto___32914)){
var error__658__auto___32915 = temp__5457__auto___32914;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"project-row","project-row",1443879424,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'row' to overwrite variables in 'pattern'.\n   'pattern' must be a vector.\n   The index mappings have already been found and are in the 'mapping' argument"], null)),cljs.core.pr_str.call(null,error__658__auto___32915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32895_32909,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32913,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32915], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__32898;
var wide_pattern = G__32899;
var nodes = G__32900;
var mapping = G__32901;
var row = G__32902;
while(true){
var get_node = cljs.core.memoize.call(null,((function (validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911){
return (function (n){
return naga.store.new_node.call(null,storage);
});})(validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911))
);
var node_statements = cljs.core.mapcat.call(null,((function (get_node,validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911){
return (function (i){
var node = get_node.call(null,i);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword("db","ident","db/ident",-737096),naga.store.node_label.call(null,storage,node)], null);
});})(get_node,validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911))
,nodes);
var update_pattern = ((function (get_node,node_statements,validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911){
return (function (p,p__32903){
var vec__32904 = p__32903;
var t = cljs.core.nth.call(null,vec__32904,(0),null);
var f = cljs.core.nth.call(null,vec__32904,(1),null);
var v = (((f < (0)))?get_node.call(null,f):cljs.core.nth.call(null,row,f));
return cljs.core.assoc.call(null,p,t,v);
});})(get_node,node_statements,validate__656__auto__,ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911))
;
return cljs.core.concat.call(null,node_statements,cljs.core.reduce.call(null,update_pattern,wide_pattern,mapping));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"project-row","project-row",1443879424,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'row' to overwrite variables in 'pattern'.\n   'pattern' must be a vector.\n   The index mappings have already been found and are in the 'mapping' argument"], null)),output_schema32894_32908,cljs.core.deref.call(null,output_checker32897_32911),o__659__auto__);
} else {
var temp__5457__auto___32916 = cljs.core.deref.call(null,output_checker32897_32911).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32916)){
var error__658__auto___32917 = temp__5457__auto___32916;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"project-row","project-row",1443879424,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new EPVPattern from an existing one, based on existing bindings.\n   Uses the mapping to copy from columns in 'row' to overwrite variables in 'pattern'.\n   'pattern' must be a vector.\n   The index mappings have already been found and are in the 'mapping' argument"], null)),cljs.core.pr_str.call(null,error__658__auto___32917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32894_32908,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32917], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32907,output_schema32894_32908,input_schema32895_32909,input_checker32896_32910,output_checker32897_32911))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.project_row),schema.core.__GT_FnSchema.call(null,output_schema32894_32908,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32895_32909], null)));

var ufv___32924 = schema.utils.use_fn_validation;
var output_schema32918_32925 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.core.Num]);
var input_schema32919_32926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null)], null)))], null);
var input_checker32920_32927 = (new cljs.core.Delay(((function (ufv___32924,output_schema32918_32925,input_schema32919_32926){
return (function (){
return schema.core.checker.call(null,input_schema32919_32926);
});})(ufv___32924,output_schema32918_32925,input_schema32919_32926))
,null));
var output_checker32921_32928 = (new cljs.core.Delay(((function (ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927){
return (function (){
return schema.core.checker.call(null,output_schema32918_32925);
});})(ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927))
,null));
var ret__2067__auto___32929 = /**
 * Inputs: [from :- [s/Any] to :- [Symbol]]
 *   Returns: #:s{Num s/Num}
 * 
 *   Returns pairs of indexes into seqs where the vars match.
 * For any variable that appears in both sequences, the column number in the
 * 'from' parameter gets mapped to the column number of the same variable
 * in the 'to' parameter.
 */
naga.storage.store_util.matching_vars = ((function (ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928){
return (function naga$storage$store_util$matching_vars(G__32922,G__32923){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32924);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32922,G__32923], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"matching-vars","matching-vars",-1009125347,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns pairs of indexes into seqs where the vars match.\n   For any variable that appears in both sequences, the column number in the\n   'from' parameter gets mapped to the column number of the same variable\n   in the 'to' parameter."], null)),input_schema32919_32926,cljs.core.deref.call(null,input_checker32920_32927),args__657__auto___32930);
} else {
var temp__5457__auto___32931 = cljs.core.deref.call(null,input_checker32920_32927).call(null,args__657__auto___32930);
if(cljs.core.truth_(temp__5457__auto___32931)){
var error__658__auto___32932 = temp__5457__auto___32931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"matching-vars","matching-vars",-1009125347,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns pairs of indexes into seqs where the vars match.\n   For any variable that appears in both sequences, the column number in the\n   'from' parameter gets mapped to the column number of the same variable\n   in the 'to' parameter."], null)),cljs.core.pr_str.call(null,error__658__auto___32932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32919_32926,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32930,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32932], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var from = G__32922;
var to = G__32923;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep_indexed.call(null,((function (validate__656__auto__,ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928){
return (function (nt,vt){
return cljs.core.seq.call(null,cljs.core.keep_indexed.call(null,((function (validate__656__auto__,ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928){
return (function (nf,vf){
if(cljs.core.truth_((function (){var and__3913__auto__ = naga.schema.store_structs.vartest_QMARK_.call(null,vf);
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core._EQ_.call(null,vt,vf);
} else {
return and__3913__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nf,nt], null);
} else {
return null;
}
});})(validate__656__auto__,ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928))
,from));
});})(validate__656__auto__,ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928))
,to)));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"matching-vars","matching-vars",-1009125347,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns pairs of indexes into seqs where the vars match.\n   For any variable that appears in both sequences, the column number in the\n   'from' parameter gets mapped to the column number of the same variable\n   in the 'to' parameter."], null)),output_schema32918_32925,cljs.core.deref.call(null,output_checker32921_32928),o__659__auto__);
} else {
var temp__5457__auto___32933 = cljs.core.deref.call(null,output_checker32921_32928).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32933)){
var error__658__auto___32934 = temp__5457__auto___32933;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"matching-vars","matching-vars",-1009125347,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns pairs of indexes into seqs where the vars match.\n   For any variable that appears in both sequences, the column number in the\n   'from' parameter gets mapped to the column number of the same variable\n   in the 'to' parameter."], null)),cljs.core.pr_str.call(null,error__658__auto___32934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32918_32925,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32934], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32924,output_schema32918_32925,input_schema32919_32926,input_checker32920_32927,output_checker32921_32928))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.matching_vars),schema.core.__GT_FnSchema.call(null,output_schema32918_32925,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32919_32926], null)));

var ufv___32944 = schema.utils.use_fn_validation;
var output_schema32936_32945 = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.core.Num]);
var input_schema32937_32946 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"full-pattern","full-pattern",-310045701,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),cljs.core.with_meta(new cljs.core.Symbol(null,"data-vars","data-vars",965393874,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null)))], null);
var input_checker32938_32947 = (new cljs.core.Delay(((function (ufv___32944,output_schema32936_32945,input_schema32937_32946){
return (function (){
return schema.core.checker.call(null,input_schema32937_32946);
});})(ufv___32944,output_schema32936_32945,input_schema32937_32946))
,null));
var output_checker32939_32948 = (new cljs.core.Delay(((function (ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947){
return (function (){
return schema.core.checker.call(null,output_schema32936_32945);
});})(ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947))
,null));
var ret__2067__auto___32949 = /**
 * Inputs: [storage full-pattern :- [s/Any] data-vars :- [Symbol] data :- Results]
 *   Returns: #:s{Num s/Num}
 * 
 *   Build a pattern->data mapping that returns offsets into a pattern mapped to corresponding
 * offsets into data. If a data offset is negative, then this indicates a node must be built
 * instead of reading from the data.
 */
naga.storage.store_util.offset_mappings = ((function (ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948){
return (function naga$storage$store_util$offset_mappings(G__32940,G__32941,G__32942,G__32943){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32944);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32950 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32940,G__32941,G__32942,G__32943], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"offset-mappings","offset-mappings",1924364373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Build a pattern->data mapping that returns offsets into a pattern mapped to corresponding\n   offsets into data. If a data offset is negative, then this indicates a node must be built\n   instead of reading from the data."], null)),input_schema32937_32946,cljs.core.deref.call(null,input_checker32938_32947),args__657__auto___32950);
} else {
var temp__5457__auto___32951 = cljs.core.deref.call(null,input_checker32938_32947).call(null,args__657__auto___32950);
if(cljs.core.truth_(temp__5457__auto___32951)){
var error__658__auto___32952 = temp__5457__auto___32951;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"offset-mappings","offset-mappings",1924364373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Build a pattern->data mapping that returns offsets into a pattern mapped to corresponding\n   offsets into data. If a data offset is negative, then this indicates a node must be built\n   instead of reading from the data."], null)),cljs.core.pr_str.call(null,error__658__auto___32952)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32937_32946,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32950,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32952], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__32940;
var full_pattern = G__32941;
var data_vars = G__32942;
var data = G__32943;
while(true){
var known_vars = cljs.core.set.call(null,data_vars);
var var_positions = naga.storage.store_util.matching_vars.call(null,full_pattern,data_vars);
var fresh_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (known_vars,var_positions,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948){
return (function (n,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,(- (n + (1)))], null);
});})(known_vars,var_positions,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948))
,cljs.core.set.call(null,cljs.core.filter.call(null,((function (known_vars,var_positions,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948){
return (function (p1__32935_SHARP_){
var and__3913__auto__ = naga.schema.store_structs.vartest_QMARK_.call(null,p1__32935_SHARP_);
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core.not.call(null,known_vars.call(null,p1__32935_SHARP_));
} else {
return and__3913__auto__;
}
});})(known_vars,var_positions,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948))
,full_pattern))));
return cljs.core.into.call(null,var_positions,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (known_vars,var_positions,fresh_map,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948){
return (function (n,v){
if(cljs.core.truth_((function (){var and__3913__auto__ = (var_positions.call(null,n) == null);
if(and__3913__auto__){
return naga.schema.store_structs.vartest_QMARK_.call(null,v);
} else {
return and__3913__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,fresh_map.call(null,v)], null);
} else {
return null;
}
});})(known_vars,var_positions,fresh_map,validate__656__auto__,ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948))
,full_pattern)));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"offset-mappings","offset-mappings",1924364373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Build a pattern->data mapping that returns offsets into a pattern mapped to corresponding\n   offsets into data. If a data offset is negative, then this indicates a node must be built\n   instead of reading from the data."], null)),output_schema32936_32945,cljs.core.deref.call(null,output_checker32939_32948),o__659__auto__);
} else {
var temp__5457__auto___32953 = cljs.core.deref.call(null,output_checker32939_32948).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32953)){
var error__658__auto___32954 = temp__5457__auto___32953;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"offset-mappings","offset-mappings",1924364373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Build a pattern->data mapping that returns offsets into a pattern mapped to corresponding\n   offsets into data. If a data offset is negative, then this indicates a node must be built\n   instead of reading from the data."], null)),cljs.core.pr_str.call(null,error__658__auto___32954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32936_32945,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32954], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32944,output_schema32936_32945,input_schema32937_32946,input_checker32938_32947,output_checker32939_32948))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.offset_mappings),schema.core.__GT_FnSchema.call(null,output_schema32936_32945,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32937_32946], null)));

var ufv___32960 = schema.utils.use_fn_validation;
var output_schema32955_32961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null);
var input_schema32956_32962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.core.Num]),cljs.core.with_meta(new cljs.core.Symbol(null,"offset-map","offset-map",320412977,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)], null)))], null);
var input_checker32957_32963 = (new cljs.core.Delay(((function (ufv___32960,output_schema32955_32961,input_schema32956_32962){
return (function (){
return schema.core.checker.call(null,input_schema32956_32962);
});})(ufv___32960,output_schema32955_32961,input_schema32956_32962))
,null));
var output_checker32958_32964 = (new cljs.core.Delay(((function (ufv___32960,output_schema32955_32961,input_schema32956_32962,input_checker32957_32963){
return (function (){
return schema.core.checker.call(null,output_schema32955_32961);
});})(ufv___32960,output_schema32955_32961,input_schema32956_32962,input_checker32957_32963))
,null));
var ret__2067__auto___32965 = /**
 * Inputs: [offset-map :- #:s{Num s/Num}]
 *   Returns: [s/Num]
 * 
 *   Returns all the new node references that appears in a map of offsets.
 * Node references are negative numbers.
 */
naga.storage.store_util.new_nodes = ((function (ufv___32960,output_schema32955_32961,input_schema32956_32962,input_checker32957_32963,output_checker32958_32964){
return (function naga$storage$store_util$new_nodes(G__32959){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32960);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32959], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-nodes","new-nodes",694491321,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all the new node references that appears in a map of offsets.\n   Node references are negative numbers."], null)),input_schema32956_32962,cljs.core.deref.call(null,input_checker32957_32963),args__657__auto___32966);
} else {
var temp__5457__auto___32967 = cljs.core.deref.call(null,input_checker32957_32963).call(null,args__657__auto___32966);
if(cljs.core.truth_(temp__5457__auto___32967)){
var error__658__auto___32968 = temp__5457__auto___32967;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-nodes","new-nodes",694491321,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all the new node references that appears in a map of offsets.\n   Node references are negative numbers."], null)),cljs.core.pr_str.call(null,error__658__auto___32968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32956_32962,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32966,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32968], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var offset_map = G__32959;
while(true){
return cljs.core.seq.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.neg_QMARK_,cljs.core.vals.call(null,offset_map))));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-nodes","new-nodes",694491321,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all the new node references that appears in a map of offsets.\n   Node references are negative numbers."], null)),output_schema32955_32961,cljs.core.deref.call(null,output_checker32958_32964),o__659__auto__);
} else {
var temp__5457__auto___32969 = cljs.core.deref.call(null,output_checker32958_32964).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32969)){
var error__658__auto___32970 = temp__5457__auto___32969;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-nodes","new-nodes",694491321,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all the new node references that appears in a map of offsets.\n   Node references are negative numbers."], null)),cljs.core.pr_str.call(null,error__658__auto___32970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32955_32961,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32970], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32960,output_schema32955_32961,input_schema32956_32962,input_checker32957_32963,output_checker32958_32964))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.new_nodes),schema.core.__GT_FnSchema.call(null,output_schema32955_32961,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32956_32962], null)));

var ufv___32984 = schema.utils.use_fn_validation;
var output_schema32971_32985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema32972_32986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null),cljs.core.with_meta(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null)))], null);
var input_checker32973_32987 = (new cljs.core.Delay(((function (ufv___32984,output_schema32971_32985,input_schema32972_32986){
return (function (){
return schema.core.checker.call(null,input_schema32972_32986);
});})(ufv___32984,output_schema32971_32985,input_schema32972_32986))
,null));
var output_checker32974_32988 = (new cljs.core.Delay(((function (ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987){
return (function (){
return schema.core.checker.call(null,output_schema32971_32985);
});})(ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987))
,null));
var ret__2067__auto___32989 = /**
 * Inputs: [storage group :- [Axiom]]
 *   Returns: [s/Any]
 * 
 *   Determines if a group is instantiating a new piece of data,
 * and if so checks if it already exists.
 */
naga.storage.store_util.group_exists_QMARK_ = ((function (ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987,output_checker32974_32988){
return (function naga$storage$store_util$group_exists_QMARK_(G__32975,G__32976){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___32984);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___32990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32975,G__32976], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"group-exists?","group-exists?",-2096172410,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a group is instantiating a new piece of data,\n   and if so checks if it already exists."], null)),input_schema32972_32986,cljs.core.deref.call(null,input_checker32973_32987),args__657__auto___32990);
} else {
var temp__5457__auto___32991 = cljs.core.deref.call(null,input_checker32973_32987).call(null,args__657__auto___32990);
if(cljs.core.truth_(temp__5457__auto___32991)){
var error__658__auto___32992 = temp__5457__auto___32991;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"group-exists?","group-exists?",-2096172410,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a group is instantiating a new piece of data,\n   and if so checks if it already exists."], null)),cljs.core.pr_str.call(null,error__658__auto___32992)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32972_32986,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___32990,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32992], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__32975;
var group = G__32976;
while(true){
var temp__5455__auto__ = cljs.core.some.call(null,((function (validate__656__auto__,ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987,output_checker32974_32988){
return (function (p__32977){
var vec__32978 = p__32977;
var _ = cljs.core.nth.call(null,vec__32978,(0),null);
var a = cljs.core.nth.call(null,vec__32978,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__32978,(2),null);
var axiom = vec__32978;
if(cljs.core._EQ_.call(null,a,new cljs.core.Keyword("db","ident","db/ident",-737096))){
return axiom;
} else {
return null;
}
});})(validate__656__auto__,ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987,output_checker32974_32988))
,group);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__32981 = temp__5455__auto__;
var entity = cljs.core.nth.call(null,vec__32981,(0),null);
var _ = cljs.core.nth.call(null,vec__32981,(1),null);
var val = cljs.core.nth.call(null,vec__32981,(2),null);
var g = vec__32981;
return cljs.core.seq.call(null,naga.store.resolve_pattern.call(null,storage,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),val], null)));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"group-exists?","group-exists?",-2096172410,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a group is instantiating a new piece of data,\n   and if so checks if it already exists."], null)),output_schema32971_32985,cljs.core.deref.call(null,output_checker32974_32988),o__659__auto__);
} else {
var temp__5457__auto___32993 = cljs.core.deref.call(null,output_checker32974_32988).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___32993)){
var error__658__auto___32994 = temp__5457__auto___32993;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"group-exists?","group-exists?",-2096172410,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Determines if a group is instantiating a new piece of data,\n   and if so checks if it already exists."], null)),cljs.core.pr_str.call(null,error__658__auto___32994)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32971_32985,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___32994], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___32984,output_schema32971_32985,input_schema32972_32986,input_checker32973_32987,output_checker32974_32988))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.group_exists_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema32971_32985,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32972_32986], null)));

var ufv___33004 = schema.utils.use_fn_validation;
var output_schema32995_33005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null);
var input_schema32996_33006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null),cljs.core.with_meta(new cljs.core.Symbol(null,"triples","triples",1272333426,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null)))], null);
var input_checker32997_33007 = (new cljs.core.Delay(((function (ufv___33004,output_schema32995_33005,input_schema32996_33006){
return (function (){
return schema.core.checker.call(null,input_schema32996_33006);
});})(ufv___33004,output_schema32995_33005,input_schema32996_33006))
,null));
var output_checker32998_33008 = (new cljs.core.Delay(((function (ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007){
return (function (){
return schema.core.checker.call(null,output_schema32995_33005);
});})(ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007))
,null));
var ret__2067__auto___33009 = /**
 * Inputs: [triples :- [Axiom]]
 *   Returns: [Axiom]
 * 
 *   Marks new entities as Naga entities
 */
naga.storage.store_util.adorn_entities = ((function (ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007,output_checker32998_33008){
return (function naga$storage$store_util$adorn_entities(G__32999){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33004);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32999], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"adorn-entities","adorn-entities",453031718,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks new entities as Naga entities"], null)),input_schema32996_33006,cljs.core.deref.call(null,input_checker32997_33007),args__657__auto___33010);
} else {
var temp__5457__auto___33011 = cljs.core.deref.call(null,input_checker32997_33007).call(null,args__657__auto___33010);
if(cljs.core.truth_(temp__5457__auto___33011)){
var error__658__auto___33012 = temp__5457__auto___33011;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"adorn-entities","adorn-entities",453031718,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks new entities as Naga entities"], null)),cljs.core.pr_str.call(null,error__658__auto___33012)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32996_33006,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33010,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33012], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var triples = G__32999;
while(true){
return cljs.core.reduce.call(null,((function (validate__656__auto__,ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007,output_checker32998_33008){
return (function (acc,p__33000){
var vec__33001 = p__33000;
var e = cljs.core.nth.call(null,vec__33001,(0),null);
var a = cljs.core.nth.call(null,vec__33001,(1),null);
var v = cljs.core.nth.call(null,vec__33001,(2),null);
var triple = vec__33001;
var r = cljs.core.conj.call(null,acc,triple);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096),a)){
return cljs.core.conj.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Keyword("naga","entity","naga/entity",-456428631),true], null));
} else {
return r;
}
});})(validate__656__auto__,ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007,output_checker32998_33008))
,cljs.core.PersistentVector.EMPTY,triples);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"adorn-entities","adorn-entities",453031718,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks new entities as Naga entities"], null)),output_schema32995_33005,cljs.core.deref.call(null,output_checker32998_33008),o__659__auto__);
} else {
var temp__5457__auto___33013 = cljs.core.deref.call(null,output_checker32998_33008).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33013)){
var error__658__auto___33014 = temp__5457__auto___33013;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"adorn-entities","adorn-entities",453031718,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks new entities as Naga entities"], null)),cljs.core.pr_str.call(null,error__658__auto___33014)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32995_33005,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33014], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33004,output_schema32995_33005,input_schema32996_33006,input_checker32997_33007,output_checker32998_33008))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.adorn_entities),schema.core.__GT_FnSchema.call(null,output_schema32995_33005,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32996_33006], null)));

var ufv___33023 = schema.utils.use_fn_validation;
var output_schema33016_33024 = naga.schema.store_structs.Results;
var input_schema33017_33025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null)))], null);
var input_checker33018_33026 = (new cljs.core.Delay(((function (ufv___33023,output_schema33016_33024,input_schema33017_33025){
return (function (){
return schema.core.checker.call(null,input_schema33017_33025);
});})(ufv___33023,output_schema33016_33024,input_schema33017_33025))
,null));
var output_checker33019_33027 = (new cljs.core.Delay(((function (ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026){
return (function (){
return schema.core.checker.call(null,output_schema33016_33024);
});})(ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026))
,null));
var ret__2067__auto___33028 = /**
 * Inputs: [storage pattern :- [s/Any] data :- Results]
 *   Returns: Results
 * 
 *   Converts each row from a result, into just the requested columns, as per the patterns arg.
 * Any specified value in the patterns will be copied into that position in the projection.
 * Unbound patterns will generate new nodes for each row.
 *   e.g. For pattern [?h1 :friend ?h2]
 *     data: [[h1=frodo h3=bilbo h2=gandalf]
 *            [h1=merry h3=pippin h2=frodo]]
 *   leads to: [[h1=frodo :friend h2=gandalf]
 *           [h1=merry :friend h2=frodo]]
 */
naga.storage.store_util.project = ((function (ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026,output_checker33019_33027){
return (function naga$storage$store_util$project(G__33020,G__33021,G__33022){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33023);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33029 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33020,G__33021,G__33022], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts each row from a result, into just the requested columns, as per the patterns arg.\n   Any specified value in the patterns will be copied into that position in the projection.\n   Unbound patterns will generate new nodes for each row.\n  e.g. For pattern [?h1 :friend ?h2]\n       data: [[h1=frodo h3=bilbo h2=gandalf]\n              [h1=merry h3=pippin h2=frodo]]\n  leads to: [[h1=frodo :friend h2=gandalf]\n             [h1=merry :friend h2=frodo]]"], null)),input_schema33017_33025,cljs.core.deref.call(null,input_checker33018_33026),args__657__auto___33029);
} else {
var temp__5457__auto___33030 = cljs.core.deref.call(null,input_checker33018_33026).call(null,args__657__auto___33029);
if(cljs.core.truth_(temp__5457__auto___33030)){
var error__658__auto___33031 = temp__5457__auto___33030;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts each row from a result, into just the requested columns, as per the patterns arg.\n   Any specified value in the patterns will be copied into that position in the projection.\n   Unbound patterns will generate new nodes for each row.\n  e.g. For pattern [?h1 :friend ?h2]\n       data: [[h1=frodo h3=bilbo h2=gandalf]\n              [h1=merry h3=pippin h2=frodo]]\n  leads to: [[h1=frodo :friend h2=gandalf]\n             [h1=merry :friend h2=frodo]]"], null)),cljs.core.pr_str.call(null,error__658__auto___33031)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33017_33025,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33029,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33031], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__33020;
var pattern = G__33021;
var data = G__33022;
while(true){
var full_pattern = cljs.core.vec.call(null,pattern);
var columns = new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,data));
var pattern__GT_data = naga.storage.store_util.offset_mappings.call(null,storage,full_pattern,columns,data);
var nodes = naga.storage.store_util.new_nodes.call(null,pattern__GT_data);
return cljs.core.map.call(null,((function (full_pattern,columns,pattern__GT_data,nodes,validate__656__auto__,ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026,output_checker33019_33027){
return (function (p1__33015_SHARP_){
return naga.storage.store_util.project_row.call(null,storage,full_pattern,nodes,pattern__GT_data,p1__33015_SHARP_);
});})(full_pattern,columns,pattern__GT_data,nodes,validate__656__auto__,ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026,output_checker33019_33027))
,data);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts each row from a result, into just the requested columns, as per the patterns arg.\n   Any specified value in the patterns will be copied into that position in the projection.\n   Unbound patterns will generate new nodes for each row.\n  e.g. For pattern [?h1 :friend ?h2]\n       data: [[h1=frodo h3=bilbo h2=gandalf]\n              [h1=merry h3=pippin h2=frodo]]\n  leads to: [[h1=frodo :friend h2=gandalf]\n             [h1=merry :friend h2=frodo]]"], null)),output_schema33016_33024,cljs.core.deref.call(null,output_checker33019_33027),o__659__auto__);
} else {
var temp__5457__auto___33032 = cljs.core.deref.call(null,output_checker33019_33027).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33032)){
var error__658__auto___33033 = temp__5457__auto___33032;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts each row from a result, into just the requested columns, as per the patterns arg.\n   Any specified value in the patterns will be copied into that position in the projection.\n   Unbound patterns will generate new nodes for each row.\n  e.g. For pattern [?h1 :friend ?h2]\n       data: [[h1=frodo h3=bilbo h2=gandalf]\n              [h1=merry h3=pippin h2=frodo]]\n  leads to: [[h1=frodo :friend h2=gandalf]\n             [h1=merry :friend h2=frodo]]"], null)),cljs.core.pr_str.call(null,error__658__auto___33033)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33016_33024,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33033], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33023,output_schema33016_33024,input_schema33017_33025,input_checker33018_33026,output_checker33019_33027))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.project),schema.core.__GT_FnSchema.call(null,output_schema33016_33024,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33017_33025], null)));

var ufv___33043 = schema.utils.use_fn_validation;
var output_schema33035_33044 = naga.schema.store_structs.Results;
var input_schema33036_33045 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"storage","storage",-787188258,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"patterns","patterns",-1490353745,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),cljs.core.with_meta(new cljs.core.Symbol(null,"columns","columns",-655998481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null)], null))),schema.core.one.call(null,naga.schema.store_structs.Results,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null)], null)))], null);
var input_checker33037_33046 = (new cljs.core.Delay(((function (ufv___33043,output_schema33035_33044,input_schema33036_33045){
return (function (){
return schema.core.checker.call(null,input_schema33036_33045);
});})(ufv___33043,output_schema33035_33044,input_schema33036_33045))
,null));
var output_checker33038_33047 = (new cljs.core.Delay(((function (ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046){
return (function (){
return schema.core.checker.call(null,output_schema33035_33044);
});})(ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046))
,null));
var ret__2067__auto___33048 = /**
 * Inputs: [storage patterns :- [[s/Any]] columns :- [Symbol] data :- Results]
 *   Returns: Results
 * 
 *   Similar to project, only the generated data will be in triples for insertion.
 * If triples describe entities with existing dc/ident fields, then they will be dropped.
 */
naga.storage.store_util.insert_project = ((function (ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046,output_checker33038_33047){
return (function naga$storage$store_util$insert_project(G__33039,G__33040,G__33041,G__33042){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___33043);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___33049 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33039,G__33040,G__33041,G__33042], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-project","insert-project",-1029095364,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Similar to project, only the generated data will be in triples for insertion.\n   If triples describe entities with existing dc/ident fields, then they will be dropped."], null)),input_schema33036_33045,cljs.core.deref.call(null,input_checker33037_33046),args__657__auto___33049);
} else {
var temp__5457__auto___33050 = cljs.core.deref.call(null,input_checker33037_33046).call(null,args__657__auto___33049);
if(cljs.core.truth_(temp__5457__auto___33050)){
var error__658__auto___33051 = temp__5457__auto___33050;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-project","insert-project",-1029095364,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Similar to project, only the generated data will be in triples for insertion.\n   If triples describe entities with existing dc/ident fields, then they will be dropped."], null)),cljs.core.pr_str.call(null,error__658__auto___33051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33036_33045,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___33049,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33051], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var storage = G__33039;
var patterns = G__33040;
var columns = G__33041;
var data = G__33042;
while(true){
var full_pattern = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,patterns));
var pattern__GT_data = naga.storage.store_util.offset_mappings.call(null,storage,full_pattern,columns,data);
var nodes = naga.storage.store_util.new_nodes.call(null,pattern__GT_data);
return naga.storage.store_util.adorn_entities.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.remove.call(null,cljs.core.partial.call(null,naga.storage.store_util.group_exists_QMARK_,storage),cljs.core.map.call(null,((function (full_pattern,pattern__GT_data,nodes,validate__656__auto__,ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046,output_checker33038_33047){
return (function (p1__33034_SHARP_){
return cljs.core.partition.call(null,(3),naga.storage.store_util.project_row.call(null,storage,full_pattern,nodes,pattern__GT_data,p1__33034_SHARP_));
});})(full_pattern,pattern__GT_data,nodes,validate__656__auto__,ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046,output_checker33038_33047))
,data))));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-project","insert-project",-1029095364,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Similar to project, only the generated data will be in triples for insertion.\n   If triples describe entities with existing dc/ident fields, then they will be dropped."], null)),output_schema33035_33044,cljs.core.deref.call(null,output_checker33038_33047),o__659__auto__);
} else {
var temp__5457__auto___33052 = cljs.core.deref.call(null,output_checker33038_33047).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___33052)){
var error__658__auto___33053 = temp__5457__auto___33052;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-project","insert-project",-1029095364,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Results","Results",288011815,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Similar to project, only the generated data will be in triples for insertion.\n   If triples describe entities with existing dc/ident fields, then they will be dropped."], null)),cljs.core.pr_str.call(null,error__658__auto___33053)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33035_33044,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___33053], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___33043,output_schema33035_33044,input_schema33036_33045,input_checker33037_33046,output_checker33038_33047))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.storage.store_util.insert_project),schema.core.__GT_FnSchema.call(null,output_schema33035_33044,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33036_33045], null)));


//# sourceMappingURL=store_util.js.map?rel=1525291333586
