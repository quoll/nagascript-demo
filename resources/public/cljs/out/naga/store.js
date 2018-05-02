// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.store');
goog.require('cljs.core');
goog.require('schema.core');

/**
 * @interface
 */
naga.store.Storage = function(){};

/**
 * Starts a transaction, if supported
 */
naga.store.start_tx = (function naga$store$start_tx(store){
if(((!((store == null))) && (!((store.naga$store$Storage$start_tx$arity$1 == null))))){
return store.naga$store$Storage$start_tx$arity$1(store);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.start_tx[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store);
} else {
var m__4214__auto____$1 = (naga.store.start_tx["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.start-tx",store);
}
}
}
});

/**
 * Commits a transaction, if supported
 */
naga.store.commit_tx = (function naga$store$commit_tx(store){
if(((!((store == null))) && (!((store.naga$store$Storage$commit_tx$arity$1 == null))))){
return store.naga$store$Storage$commit_tx$arity$1(store);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.commit_tx[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store);
} else {
var m__4214__auto____$1 = (naga.store.commit_tx["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.commit-tx",store);
}
}
}
});

/**
 * Returns the latest updated subjects in the represented store
 */
naga.store.deltas = (function naga$store$deltas(store){
if(((!((store == null))) && (!((store.naga$store$Storage$deltas$arity$1 == null))))){
return store.naga$store$Storage$deltas$arity$1(store);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.deltas[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store);
} else {
var m__4214__auto____$1 = (naga.store.deltas["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.deltas",store);
}
}
}
});

/**
 * Allocates a node for the store
 */
naga.store.new_node = (function naga$store$new_node(store){
if(((!((store == null))) && (!((store.naga$store$Storage$new_node$arity$1 == null))))){
return store.naga$store$Storage$new_node$arity$1(store);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.new_node[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store);
} else {
var m__4214__auto____$1 = (naga.store.new_node["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.new-node",store);
}
}
}
});

/**
 * Returns a id for a node. Numbers are good
 */
naga.store.node_id = (function naga$store$node_id(store,n){
if(((!((store == null))) && (!((store.naga$store$Storage$node_id$arity$2 == null))))){
return store.naga$store$Storage$node_id$arity$2(store,n);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.node_id[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,n);
} else {
var m__4214__auto____$1 = (naga.store.node_id["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,n);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.node-id",store);
}
}
}
});

/**
 * Returns true if the value refered to by a property can be a graph node
 */
naga.store.node_type_QMARK_ = (function naga$store$node_type_QMARK_(store,p,n){
if(((!((store == null))) && (!((store.naga$store$Storage$node_type_QMARK_$arity$3 == null))))){
return store.naga$store$Storage$node_type_QMARK_$arity$3(store,p,n);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.node_type_QMARK_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,p,n);
} else {
var m__4214__auto____$1 = (naga.store.node_type_QMARK_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,p,n);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.node-type?",store);
}
}
}
});

/**
 * Returns the property to use for given data. Must be in the naga namespace, and start with 'first'.
 */
naga.store.data_property = (function naga$store$data_property(store,data){
if(((!((store == null))) && (!((store.naga$store$Storage$data_property$arity$2 == null))))){
return store.naga$store$Storage$data_property$arity$2(store,data);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.data_property[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,data);
} else {
var m__4214__auto____$1 = (naga.store.data_property["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,data);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.data-property",store);
}
}
}
});

/**
 * Returns the property to use to indicate a containership relation for given data. Must be in the naga namespace
 */
naga.store.container_property = (function naga$store$container_property(store,data){
if(((!((store == null))) && (!((store.naga$store$Storage$container_property$arity$2 == null))))){
return store.naga$store$Storage$container_property$arity$2(store,data);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.container_property[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,data);
} else {
var m__4214__auto____$1 = (naga.store.container_property["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,data);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.container-property",store);
}
}
}
});

/**
 * Resolves a pattern against storage
 */
naga.store.resolve_pattern = (function naga$store$resolve_pattern(store,pattern){
if(((!((store == null))) && (!((store.naga$store$Storage$resolve_pattern$arity$2 == null))))){
return store.naga$store$Storage$resolve_pattern$arity$2(store,pattern);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.resolve_pattern[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,pattern);
} else {
var m__4214__auto____$1 = (naga.store.resolve_pattern["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.resolve-pattern",store);
}
}
}
});

/**
 * Counts the size of a pattern resolition against storage
 */
naga.store.count_pattern = (function naga$store$count_pattern(store,pattern){
if(((!((store == null))) && (!((store.naga$store$Storage$count_pattern$arity$2 == null))))){
return store.naga$store$Storage$count_pattern$arity$2(store,pattern);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.count_pattern[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,pattern);
} else {
var m__4214__auto____$1 = (naga.store.count_pattern["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.count-pattern",store);
}
}
}
});

/**
 * Resolves a set of patterns (if not already resolved), joins the results, and projects the output. The output can contain constant values as well as selected variables.
 */
naga.store.query = (function naga$store$query(store,output_pattern,patterns){
if(((!((store == null))) && (!((store.naga$store$Storage$query$arity$3 == null))))){
return store.naga$store$Storage$query$arity$3(store,output_pattern,patterns);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.query[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,output_pattern,patterns);
} else {
var m__4214__auto____$1 = (naga.store.query["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,output_pattern,patterns);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.query",store);
}
}
}
});

/**
 * Inserts new axioms
 */
naga.store.assert_data = (function naga$store$assert_data(store,data){
if(((!((store == null))) && (!((store.naga$store$Storage$assert_data$arity$2 == null))))){
return store.naga$store$Storage$assert_data$arity$2(store,data);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.assert_data[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,data);
} else {
var m__4214__auto____$1 = (naga.store.assert_data["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,data);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.assert-data",store);
}
}
}
});

/**
 * Inserts a new schema, if supported
 */
naga.store.assert_schema_opts = (function naga$store$assert_schema_opts(store,schema__$1,opts){
if(((!((store == null))) && (!((store.naga$store$Storage$assert_schema_opts$arity$3 == null))))){
return store.naga$store$Storage$assert_schema_opts$arity$3(store,schema__$1,opts);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.assert_schema_opts[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,schema__$1,opts);
} else {
var m__4214__auto____$1 = (naga.store.assert_schema_opts["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,schema__$1,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.assert-schema-opts",store);
}
}
}
});

/**
 * Resolves a set of patterns, joins them, and inserts the set of resolutions
 */
naga.store.query_insert = (function naga$store$query_insert(store,assertion_patterns,patterns){
if(((!((store == null))) && (!((store.naga$store$Storage$query_insert$arity$3 == null))))){
return store.naga$store$Storage$query_insert$arity$3(store,assertion_patterns,patterns);
} else {
var x__4213__auto__ = (((store == null))?null:store);
var m__4214__auto__ = (naga.store.query_insert[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,store,assertion_patterns,patterns);
} else {
var m__4214__auto____$1 = (naga.store.query_insert["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,store,assertion_patterns,patterns);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.query-insert",store);
}
}
}
});

naga.store.StorageType = schema.core.pred.call(null,(function (p1__32719_SHARP_){
if(!((p1__32719_SHARP_ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__32719_SHARP_.naga$store$Storage$)))){
return true;
} else {
if((!p1__32719_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,naga.store.Storage,p1__32719_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,naga.store.Storage,p1__32719_SHARP_);
}
}));
/**
 * Convenience function to avoid passing empty options
 */
naga.store.assert_schema = (function naga$store$assert_schema(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32727 = arguments.length;
var i__4500__auto___32728 = (0);
while(true){
if((i__4500__auto___32728 < len__4499__auto___32727)){
args__4502__auto__.push((arguments[i__4500__auto___32728]));

var G__32729 = (i__4500__auto___32728 + (1));
i__4500__auto___32728 = G__32729;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return naga.store.assert_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

naga.store.assert_schema.cljs$core$IFn$_invoke$arity$variadic = (function (store,schema__$1,p__32724){
var map__32725 = p__32724;
var map__32725__$1 = ((((!((map__32725 == null)))?(((((map__32725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32725):map__32725);
var opts = map__32725__$1;
return naga.store.assert_schema.call(null,store,schema__$1,opts);
});

naga.store.assert_schema.cljs$lang$maxFixedArity = (2);

naga.store.assert_schema.cljs$lang$applyTo = (function (seq32721){
var G__32722 = cljs.core.first.call(null,seq32721);
var seq32721__$1 = cljs.core.next.call(null,seq32721);
var G__32723 = cljs.core.first.call(null,seq32721__$1);
var seq32721__$2 = cljs.core.next.call(null,seq32721__$1);
return naga.store.assert_schema.cljs$core$IFn$_invoke$arity$variadic(G__32722,G__32723,seq32721__$2);
});

/**
 * Convenience function to retrieve the contents of the entire store
 */
naga.store.retrieve_contents = (function naga$store$retrieve_contents(store){
return naga.store.resolve_pattern.call(null,store,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?entity","?entity",1390979834,null),new cljs.core.Symbol(null,"?attribute","?attribute",-816404733,null),new cljs.core.Symbol(null,"?value","?value",393627875,null)], null));
});
/**
 * Returns a keyword label for a node
 */
naga.store.node_label = (function naga$store$node_label(s,n){
return cljs.core.keyword.call(null,"naga",["id-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(naga.store.node_id.call(null,s,n))].join(''));
});

//# sourceMappingURL=store.js.map?rel=1525291333110
