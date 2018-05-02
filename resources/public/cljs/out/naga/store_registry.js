// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.store_registry');
goog.require('cljs.core');
naga.store_registry.registered_stores = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
naga.store_registry.shutdown_fns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Registers a new storage type
 */
naga.store_registry.register_storage_BANG_ = (function naga$store_registry$register_storage_BANG_(var_args){
var G__33081 = arguments.length;
switch (G__33081) {
case 2:
return naga.store_registry.register_storage_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return naga.store_registry.register_storage_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

naga.store_registry.register_storage_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (store_id,factory_fn){
return naga.store_registry.register_storage_BANG_.call(null,store_id,factory_fn,null);
});

naga.store_registry.register_storage_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (store_id,factory_fn,shutdown_fn){
cljs.core.swap_BANG_.call(null,naga.store_registry.registered_stores,cljs.core.assoc,store_id,factory_fn);

if(cljs.core.truth_(shutdown_fn)){
return cljs.core.swap_BANG_.call(null,naga.store_registry.shutdown_fns,cljs.core.conj,shutdown_fn);
} else {
return null;
}
});

naga.store_registry.register_storage_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a store of the configured type. Throws an exception for unknown types.
 */
naga.store_registry.get_storage_handle = (function naga$store_registry$get_storage_handle(p__33083){
var map__33084 = p__33083;
var map__33084__$1 = ((((!((map__33084 == null)))?(((((map__33084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33084):map__33084);
var config = map__33084__$1;
var type = cljs.core.get.call(null,map__33084__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var store = cljs.core.get.call(null,map__33084__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var or__3924__auto__ = store;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var temp__5455__auto__ = cljs.core.deref.call(null,naga.store_registry.registered_stores).call(null,cljs.core.keyword.call(null,type));
if(cljs.core.truth_(temp__5455__auto__)){
var factory = temp__5455__auto__;
return factory.call(null,config);
} else {
throw cljs.core.ex_info.call(null,"Unknown storage configuration",config);
}
}
});
naga.store_registry.shutdown = (function naga$store_registry$shutdown(){
var seq__33086 = cljs.core.seq.call(null,cljs.core.deref.call(null,naga.store_registry.shutdown_fns));
var chunk__33087 = null;
var count__33088 = (0);
var i__33089 = (0);
while(true){
if((i__33089 < count__33088)){
var f = cljs.core._nth.call(null,chunk__33087,i__33089);
f.call(null);


var G__33090 = seq__33086;
var G__33091 = chunk__33087;
var G__33092 = count__33088;
var G__33093 = (i__33089 + (1));
seq__33086 = G__33090;
chunk__33087 = G__33091;
count__33088 = G__33092;
i__33089 = G__33093;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33086);
if(temp__5457__auto__){
var seq__33086__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33086__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__33086__$1);
var G__33094 = cljs.core.chunk_rest.call(null,seq__33086__$1);
var G__33095 = c__4321__auto__;
var G__33096 = cljs.core.count.call(null,c__4321__auto__);
var G__33097 = (0);
seq__33086 = G__33094;
chunk__33087 = G__33095;
count__33088 = G__33096;
i__33089 = G__33097;
continue;
} else {
var f = cljs.core.first.call(null,seq__33086__$1);
f.call(null);


var G__33098 = cljs.core.next.call(null,seq__33086__$1);
var G__33099 = null;
var G__33100 = (0);
var G__33101 = (0);
seq__33086 = G__33098;
chunk__33087 = G__33099;
count__33088 = G__33100;
i__33089 = G__33101;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=store_registry.js.map?rel=1525291333692
