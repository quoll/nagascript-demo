// Compiled by ClojureScript 1.10.126 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3924__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3924__auto__){
return or__3924__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3924__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var or__3924__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3924__auto____$1)){
return or__3924__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45516_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45516_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45517 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45518 = null;
var count__45519 = (0);
var i__45520 = (0);
while(true){
if((i__45520 < count__45519)){
var n = cljs.core._nth.call(null,chunk__45518,i__45520);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45521 = seq__45517;
var G__45522 = chunk__45518;
var G__45523 = count__45519;
var G__45524 = (i__45520 + (1));
seq__45517 = G__45521;
chunk__45518 = G__45522;
count__45519 = G__45523;
i__45520 = G__45524;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45517);
if(temp__5457__auto__){
var seq__45517__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45517__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__45517__$1);
var G__45525 = cljs.core.chunk_rest.call(null,seq__45517__$1);
var G__45526 = c__4321__auto__;
var G__45527 = cljs.core.count.call(null,c__4321__auto__);
var G__45528 = (0);
seq__45517 = G__45525;
chunk__45518 = G__45526;
count__45519 = G__45527;
i__45520 = G__45528;
continue;
} else {
var n = cljs.core.first.call(null,seq__45517__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45529 = cljs.core.next.call(null,seq__45517__$1);
var G__45530 = null;
var G__45531 = (0);
var G__45532 = (0);
seq__45517 = G__45529;
chunk__45518 = G__45530;
count__45519 = G__45531;
i__45520 = G__45532;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__45533){
var vec__45534 = p__45533;
var _ = cljs.core.nth.call(null,vec__45534,(0),null);
var v = cljs.core.nth.call(null,vec__45534,(1),null);
var and__3913__auto__ = v;
if(cljs.core.truth_(and__3913__auto__)){
return v.call(null,dep);
} else {
return and__3913__auto__;
}
}),cljs.core.filter.call(null,(function (p__45537){
var vec__45538 = p__45537;
var k = cljs.core.nth.call(null,vec__45538,(0),null);
var v = cljs.core.nth.call(null,vec__45538,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45550_45558 = cljs.core.seq.call(null,deps);
var chunk__45551_45559 = null;
var count__45552_45560 = (0);
var i__45553_45561 = (0);
while(true){
if((i__45553_45561 < count__45552_45560)){
var dep_45562 = cljs.core._nth.call(null,chunk__45551_45559,i__45553_45561);
if(cljs.core.truth_((function (){var and__3913__auto__ = dep_45562;
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45562));
} else {
return and__3913__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45562,(depth + (1)),state);
} else {
}


var G__45563 = seq__45550_45558;
var G__45564 = chunk__45551_45559;
var G__45565 = count__45552_45560;
var G__45566 = (i__45553_45561 + (1));
seq__45550_45558 = G__45563;
chunk__45551_45559 = G__45564;
count__45552_45560 = G__45565;
i__45553_45561 = G__45566;
continue;
} else {
var temp__5457__auto___45567 = cljs.core.seq.call(null,seq__45550_45558);
if(temp__5457__auto___45567){
var seq__45550_45568__$1 = temp__5457__auto___45567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45550_45568__$1)){
var c__4321__auto___45569 = cljs.core.chunk_first.call(null,seq__45550_45568__$1);
var G__45570 = cljs.core.chunk_rest.call(null,seq__45550_45568__$1);
var G__45571 = c__4321__auto___45569;
var G__45572 = cljs.core.count.call(null,c__4321__auto___45569);
var G__45573 = (0);
seq__45550_45558 = G__45570;
chunk__45551_45559 = G__45571;
count__45552_45560 = G__45572;
i__45553_45561 = G__45573;
continue;
} else {
var dep_45574 = cljs.core.first.call(null,seq__45550_45568__$1);
if(cljs.core.truth_((function (){var and__3913__auto__ = dep_45574;
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45574));
} else {
return and__3913__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45574,(depth + (1)),state);
} else {
}


var G__45575 = cljs.core.next.call(null,seq__45550_45568__$1);
var G__45576 = null;
var G__45577 = (0);
var G__45578 = (0);
seq__45550_45558 = G__45575;
chunk__45551_45559 = G__45576;
count__45552_45560 = G__45577;
i__45553_45561 = G__45578;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45554){
var vec__45555 = p__45554;
var seq__45556 = cljs.core.seq.call(null,vec__45555);
var first__45557 = cljs.core.first.call(null,seq__45556);
var seq__45556__$1 = cljs.core.next.call(null,seq__45556);
var x = first__45557;
var xs = seq__45556__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45555,seq__45556,first__45557,seq__45556__$1,x,xs,get_deps__$1){
return (function (p1__45541_SHARP_){
return clojure.set.difference.call(null,p1__45541_SHARP_,x);
});})(vec__45555,seq__45556,first__45557,seq__45556__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45579 = cljs.core.seq.call(null,provides);
var chunk__45580 = null;
var count__45581 = (0);
var i__45582 = (0);
while(true){
if((i__45582 < count__45581)){
var prov = cljs.core._nth.call(null,chunk__45580,i__45582);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45583_45591 = cljs.core.seq.call(null,requires);
var chunk__45584_45592 = null;
var count__45585_45593 = (0);
var i__45586_45594 = (0);
while(true){
if((i__45586_45594 < count__45585_45593)){
var req_45595 = cljs.core._nth.call(null,chunk__45584_45592,i__45586_45594);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45595,prov);


var G__45596 = seq__45583_45591;
var G__45597 = chunk__45584_45592;
var G__45598 = count__45585_45593;
var G__45599 = (i__45586_45594 + (1));
seq__45583_45591 = G__45596;
chunk__45584_45592 = G__45597;
count__45585_45593 = G__45598;
i__45586_45594 = G__45599;
continue;
} else {
var temp__5457__auto___45600 = cljs.core.seq.call(null,seq__45583_45591);
if(temp__5457__auto___45600){
var seq__45583_45601__$1 = temp__5457__auto___45600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45583_45601__$1)){
var c__4321__auto___45602 = cljs.core.chunk_first.call(null,seq__45583_45601__$1);
var G__45603 = cljs.core.chunk_rest.call(null,seq__45583_45601__$1);
var G__45604 = c__4321__auto___45602;
var G__45605 = cljs.core.count.call(null,c__4321__auto___45602);
var G__45606 = (0);
seq__45583_45591 = G__45603;
chunk__45584_45592 = G__45604;
count__45585_45593 = G__45605;
i__45586_45594 = G__45606;
continue;
} else {
var req_45607 = cljs.core.first.call(null,seq__45583_45601__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45607,prov);


var G__45608 = cljs.core.next.call(null,seq__45583_45601__$1);
var G__45609 = null;
var G__45610 = (0);
var G__45611 = (0);
seq__45583_45591 = G__45608;
chunk__45584_45592 = G__45609;
count__45585_45593 = G__45610;
i__45586_45594 = G__45611;
continue;
}
} else {
}
}
break;
}


var G__45612 = seq__45579;
var G__45613 = chunk__45580;
var G__45614 = count__45581;
var G__45615 = (i__45582 + (1));
seq__45579 = G__45612;
chunk__45580 = G__45613;
count__45581 = G__45614;
i__45582 = G__45615;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45579);
if(temp__5457__auto__){
var seq__45579__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45579__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__45579__$1);
var G__45616 = cljs.core.chunk_rest.call(null,seq__45579__$1);
var G__45617 = c__4321__auto__;
var G__45618 = cljs.core.count.call(null,c__4321__auto__);
var G__45619 = (0);
seq__45579 = G__45616;
chunk__45580 = G__45617;
count__45581 = G__45618;
i__45582 = G__45619;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45579__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45587_45620 = cljs.core.seq.call(null,requires);
var chunk__45588_45621 = null;
var count__45589_45622 = (0);
var i__45590_45623 = (0);
while(true){
if((i__45590_45623 < count__45589_45622)){
var req_45624 = cljs.core._nth.call(null,chunk__45588_45621,i__45590_45623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45624,prov);


var G__45625 = seq__45587_45620;
var G__45626 = chunk__45588_45621;
var G__45627 = count__45589_45622;
var G__45628 = (i__45590_45623 + (1));
seq__45587_45620 = G__45625;
chunk__45588_45621 = G__45626;
count__45589_45622 = G__45627;
i__45590_45623 = G__45628;
continue;
} else {
var temp__5457__auto___45629__$1 = cljs.core.seq.call(null,seq__45587_45620);
if(temp__5457__auto___45629__$1){
var seq__45587_45630__$1 = temp__5457__auto___45629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45587_45630__$1)){
var c__4321__auto___45631 = cljs.core.chunk_first.call(null,seq__45587_45630__$1);
var G__45632 = cljs.core.chunk_rest.call(null,seq__45587_45630__$1);
var G__45633 = c__4321__auto___45631;
var G__45634 = cljs.core.count.call(null,c__4321__auto___45631);
var G__45635 = (0);
seq__45587_45620 = G__45632;
chunk__45588_45621 = G__45633;
count__45589_45622 = G__45634;
i__45590_45623 = G__45635;
continue;
} else {
var req_45636 = cljs.core.first.call(null,seq__45587_45630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45636,prov);


var G__45637 = cljs.core.next.call(null,seq__45587_45630__$1);
var G__45638 = null;
var G__45639 = (0);
var G__45640 = (0);
seq__45587_45620 = G__45637;
chunk__45588_45621 = G__45638;
count__45589_45622 = G__45639;
i__45590_45623 = G__45640;
continue;
}
} else {
}
}
break;
}


var G__45641 = cljs.core.next.call(null,seq__45579__$1);
var G__45642 = null;
var G__45643 = (0);
var G__45644 = (0);
seq__45579 = G__45641;
chunk__45580 = G__45642;
count__45581 = G__45643;
i__45582 = G__45644;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45645_45649 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45646_45650 = null;
var count__45647_45651 = (0);
var i__45648_45652 = (0);
while(true){
if((i__45648_45652 < count__45647_45651)){
var ns_45653 = cljs.core._nth.call(null,chunk__45646_45650,i__45648_45652);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45653);


var G__45654 = seq__45645_45649;
var G__45655 = chunk__45646_45650;
var G__45656 = count__45647_45651;
var G__45657 = (i__45648_45652 + (1));
seq__45645_45649 = G__45654;
chunk__45646_45650 = G__45655;
count__45647_45651 = G__45656;
i__45648_45652 = G__45657;
continue;
} else {
var temp__5457__auto___45658 = cljs.core.seq.call(null,seq__45645_45649);
if(temp__5457__auto___45658){
var seq__45645_45659__$1 = temp__5457__auto___45658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45645_45659__$1)){
var c__4321__auto___45660 = cljs.core.chunk_first.call(null,seq__45645_45659__$1);
var G__45661 = cljs.core.chunk_rest.call(null,seq__45645_45659__$1);
var G__45662 = c__4321__auto___45660;
var G__45663 = cljs.core.count.call(null,c__4321__auto___45660);
var G__45664 = (0);
seq__45645_45649 = G__45661;
chunk__45646_45650 = G__45662;
count__45647_45651 = G__45663;
i__45648_45652 = G__45664;
continue;
} else {
var ns_45665 = cljs.core.first.call(null,seq__45645_45659__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45665);


var G__45666 = cljs.core.next.call(null,seq__45645_45659__$1);
var G__45667 = null;
var G__45668 = (0);
var G__45669 = (0);
seq__45645_45649 = G__45666;
chunk__45646_45650 = G__45667;
count__45647_45651 = G__45668;
i__45648_45652 = G__45669;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3924__auto__ = goog.require__;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45670__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45671__i = 0, G__45671__a = new Array(arguments.length -  0);
while (G__45671__i < G__45671__a.length) {G__45671__a[G__45671__i] = arguments[G__45671__i + 0]; ++G__45671__i;}
  args = new cljs.core.IndexedSeq(G__45671__a,0,null);
} 
return G__45670__delegate.call(this,args);};
G__45670.cljs$lang$maxFixedArity = 0;
G__45670.cljs$lang$applyTo = (function (arglist__45672){
var args = cljs.core.seq(arglist__45672);
return G__45670__delegate(args);
});
G__45670.cljs$core$IFn$_invoke$arity$variadic = G__45670__delegate;
return G__45670;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__45673_SHARP_,p2__45674_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45673_SHARP_)].join('')),p2__45674_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__45675_SHARP_,p2__45676_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45675_SHARP_)].join(''),p2__45676_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45677 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45677.addCallback(((function (G__45677){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45677))
);

G__45677.addErrback(((function (G__45677){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45677))
);

return G__45677;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45678){if((e45678 instanceof Error)){
var e = e45678;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45678;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45679){if((e45679 instanceof Error)){
var e = e45679;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45679;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45680 = cljs.core._EQ_;
var expr__45681 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45680.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45681))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45680.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45681))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45680.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45681))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45680,expr__45681){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45680,expr__45681))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45683,callback){
var map__45684 = p__45683;
var map__45684__$1 = ((((!((map__45684 == null)))?(((((map__45684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45684):map__45684);
var file_msg = map__45684__$1;
var request_url = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3924__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45684,map__45684__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45684,map__45684__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__){
return (function (state_45724){
var state_val_45725 = (state_45724[(1)]);
if((state_val_45725 === (7))){
var inst_45720 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
var statearr_45726_45753 = state_45724__$1;
(statearr_45726_45753[(2)] = inst_45720);

(statearr_45726_45753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (1))){
var state_45724__$1 = state_45724;
var statearr_45727_45754 = state_45724__$1;
(statearr_45727_45754[(2)] = null);

(statearr_45727_45754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (4))){
var inst_45688 = (state_45724[(7)]);
var inst_45688__$1 = (state_45724[(2)]);
var state_45724__$1 = (function (){var statearr_45728 = state_45724;
(statearr_45728[(7)] = inst_45688__$1);

return statearr_45728;
})();
if(cljs.core.truth_(inst_45688__$1)){
var statearr_45729_45755 = state_45724__$1;
(statearr_45729_45755[(1)] = (5));

} else {
var statearr_45730_45756 = state_45724__$1;
(statearr_45730_45756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (15))){
var inst_45705 = (state_45724[(8)]);
var inst_45702 = (state_45724[(9)]);
var inst_45707 = inst_45705.call(null,inst_45702);
var state_45724__$1 = state_45724;
var statearr_45731_45757 = state_45724__$1;
(statearr_45731_45757[(2)] = inst_45707);

(statearr_45731_45757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (13))){
var inst_45714 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
var statearr_45732_45758 = state_45724__$1;
(statearr_45732_45758[(2)] = inst_45714);

(statearr_45732_45758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (6))){
var state_45724__$1 = state_45724;
var statearr_45733_45759 = state_45724__$1;
(statearr_45733_45759[(2)] = null);

(statearr_45733_45759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (17))){
var inst_45711 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
var statearr_45734_45760 = state_45724__$1;
(statearr_45734_45760[(2)] = inst_45711);

(statearr_45734_45760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (3))){
var inst_45722 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45724__$1,inst_45722);
} else {
if((state_val_45725 === (12))){
var state_45724__$1 = state_45724;
var statearr_45735_45761 = state_45724__$1;
(statearr_45735_45761[(2)] = null);

(statearr_45735_45761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (2))){
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45724__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45725 === (11))){
var inst_45693 = (state_45724[(10)]);
var inst_45700 = figwheel.client.file_reloading.blocking_load.call(null,inst_45693);
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45724__$1,(14),inst_45700);
} else {
if((state_val_45725 === (9))){
var inst_45693 = (state_45724[(10)]);
var state_45724__$1 = state_45724;
if(cljs.core.truth_(inst_45693)){
var statearr_45736_45762 = state_45724__$1;
(statearr_45736_45762[(1)] = (11));

} else {
var statearr_45737_45763 = state_45724__$1;
(statearr_45737_45763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (5))){
var inst_45694 = (state_45724[(11)]);
var inst_45688 = (state_45724[(7)]);
var inst_45693 = cljs.core.nth.call(null,inst_45688,(0),null);
var inst_45694__$1 = cljs.core.nth.call(null,inst_45688,(1),null);
var state_45724__$1 = (function (){var statearr_45738 = state_45724;
(statearr_45738[(10)] = inst_45693);

(statearr_45738[(11)] = inst_45694__$1);

return statearr_45738;
})();
if(cljs.core.truth_(inst_45694__$1)){
var statearr_45739_45764 = state_45724__$1;
(statearr_45739_45764[(1)] = (8));

} else {
var statearr_45740_45765 = state_45724__$1;
(statearr_45740_45765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (14))){
var inst_45693 = (state_45724[(10)]);
var inst_45705 = (state_45724[(8)]);
var inst_45702 = (state_45724[(2)]);
var inst_45703 = console.log("Loading!",inst_45693);
var inst_45704 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45705__$1 = cljs.core.get.call(null,inst_45704,inst_45693);
var state_45724__$1 = (function (){var statearr_45741 = state_45724;
(statearr_45741[(12)] = inst_45703);

(statearr_45741[(8)] = inst_45705__$1);

(statearr_45741[(9)] = inst_45702);

return statearr_45741;
})();
if(cljs.core.truth_(inst_45705__$1)){
var statearr_45742_45766 = state_45724__$1;
(statearr_45742_45766[(1)] = (15));

} else {
var statearr_45743_45767 = state_45724__$1;
(statearr_45743_45767[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (16))){
var inst_45702 = (state_45724[(9)]);
var inst_45709 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45702);
var state_45724__$1 = state_45724;
var statearr_45744_45768 = state_45724__$1;
(statearr_45744_45768[(2)] = inst_45709);

(statearr_45744_45768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (10))){
var inst_45716 = (state_45724[(2)]);
var state_45724__$1 = (function (){var statearr_45745 = state_45724;
(statearr_45745[(13)] = inst_45716);

return statearr_45745;
})();
var statearr_45746_45769 = state_45724__$1;
(statearr_45746_45769[(2)] = null);

(statearr_45746_45769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (8))){
var inst_45694 = (state_45724[(11)]);
var inst_45696 = console.log("Evaling!",inst_45694);
var inst_45697 = eval(inst_45694);
var state_45724__$1 = (function (){var statearr_45747 = state_45724;
(statearr_45747[(14)] = inst_45696);

return statearr_45747;
})();
var statearr_45748_45770 = state_45724__$1;
(statearr_45748_45770[(2)] = inst_45697);

(statearr_45748_45770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38679__auto__ = null;
var figwheel$client$file_reloading$state_machine__38679__auto____0 = (function (){
var statearr_45749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45749[(0)] = figwheel$client$file_reloading$state_machine__38679__auto__);

(statearr_45749[(1)] = (1));

return statearr_45749;
});
var figwheel$client$file_reloading$state_machine__38679__auto____1 = (function (state_45724){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_45724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e45750){if((e45750 instanceof Object)){
var ex__38682__auto__ = e45750;
var statearr_45751_45771 = state_45724;
(statearr_45751_45771[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45772 = state_45724;
state_45724 = G__45772;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38679__auto__ = function(state_45724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38679__auto____1.call(this,state_45724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38679__auto____0;
figwheel$client$file_reloading$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38679__auto____1;
return figwheel$client$file_reloading$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__))
})();
var state__38837__auto__ = (function (){var statearr_45752 = f__38836__auto__.call(null);
(statearr_45752[(6)] = c__38835__auto__);

return statearr_45752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__))
);

return c__38835__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45774 = arguments.length;
switch (G__45774) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45776,callback){
var map__45777 = p__45776;
var map__45777__$1 = ((((!((map__45777 == null)))?(((((map__45777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45777):map__45777);
var file_msg = map__45777__$1;
var namespace = cljs.core.get.call(null,map__45777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45777,map__45777__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45777,map__45777__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45779){
var map__45780 = p__45779;
var map__45780__$1 = ((((!((map__45780 == null)))?(((((map__45780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45780):map__45780);
var file_msg = map__45780__$1;
var namespace = cljs.core.get.call(null,map__45780__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45782){
var map__45783 = p__45782;
var map__45783__$1 = ((((!((map__45783 == null)))?(((((map__45783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45783):map__45783);
var file_msg = map__45783__$1;
var namespace = cljs.core.get.call(null,map__45783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3913__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3913__auto__){
var or__3924__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
var or__3924__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3924__auto____$1)){
return or__3924__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3913__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45785,callback){
var map__45786 = p__45785;
var map__45786__$1 = ((((!((map__45786 == null)))?(((((map__45786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45786):map__45786);
var file_msg = map__45786__$1;
var request_url = cljs.core.get.call(null,map__45786__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45786__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38835__auto___45836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___45836,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___45836,out){
return (function (state_45821){
var state_val_45822 = (state_45821[(1)]);
if((state_val_45822 === (1))){
var inst_45795 = cljs.core.seq.call(null,files);
var inst_45796 = cljs.core.first.call(null,inst_45795);
var inst_45797 = cljs.core.next.call(null,inst_45795);
var inst_45798 = files;
var state_45821__$1 = (function (){var statearr_45823 = state_45821;
(statearr_45823[(7)] = inst_45797);

(statearr_45823[(8)] = inst_45796);

(statearr_45823[(9)] = inst_45798);

return statearr_45823;
})();
var statearr_45824_45837 = state_45821__$1;
(statearr_45824_45837[(2)] = null);

(statearr_45824_45837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45822 === (2))){
var inst_45804 = (state_45821[(10)]);
var inst_45798 = (state_45821[(9)]);
var inst_45803 = cljs.core.seq.call(null,inst_45798);
var inst_45804__$1 = cljs.core.first.call(null,inst_45803);
var inst_45805 = cljs.core.next.call(null,inst_45803);
var inst_45806 = (inst_45804__$1 == null);
var inst_45807 = cljs.core.not.call(null,inst_45806);
var state_45821__$1 = (function (){var statearr_45825 = state_45821;
(statearr_45825[(11)] = inst_45805);

(statearr_45825[(10)] = inst_45804__$1);

return statearr_45825;
})();
if(inst_45807){
var statearr_45826_45838 = state_45821__$1;
(statearr_45826_45838[(1)] = (4));

} else {
var statearr_45827_45839 = state_45821__$1;
(statearr_45827_45839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45822 === (3))){
var inst_45819 = (state_45821[(2)]);
var state_45821__$1 = state_45821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45821__$1,inst_45819);
} else {
if((state_val_45822 === (4))){
var inst_45804 = (state_45821[(10)]);
var inst_45809 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45804);
var state_45821__$1 = state_45821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45821__$1,(7),inst_45809);
} else {
if((state_val_45822 === (5))){
var inst_45815 = cljs.core.async.close_BANG_.call(null,out);
var state_45821__$1 = state_45821;
var statearr_45828_45840 = state_45821__$1;
(statearr_45828_45840[(2)] = inst_45815);

(statearr_45828_45840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45822 === (6))){
var inst_45817 = (state_45821[(2)]);
var state_45821__$1 = state_45821;
var statearr_45829_45841 = state_45821__$1;
(statearr_45829_45841[(2)] = inst_45817);

(statearr_45829_45841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45822 === (7))){
var inst_45805 = (state_45821[(11)]);
var inst_45811 = (state_45821[(2)]);
var inst_45812 = cljs.core.async.put_BANG_.call(null,out,inst_45811);
var inst_45798 = inst_45805;
var state_45821__$1 = (function (){var statearr_45830 = state_45821;
(statearr_45830[(9)] = inst_45798);

(statearr_45830[(12)] = inst_45812);

return statearr_45830;
})();
var statearr_45831_45842 = state_45821__$1;
(statearr_45831_45842[(2)] = null);

(statearr_45831_45842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__38835__auto___45836,out))
;
return ((function (switch__38678__auto__,c__38835__auto___45836,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____0 = (function (){
var statearr_45832 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45832[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__);

(statearr_45832[(1)] = (1));

return statearr_45832;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____1 = (function (state_45821){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_45821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e45833){if((e45833 instanceof Object)){
var ex__38682__auto__ = e45833;
var statearr_45834_45843 = state_45821;
(statearr_45834_45843[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45844 = state_45821;
state_45821 = G__45844;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__ = function(state_45821){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____1.call(this,state_45821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___45836,out))
})();
var state__38837__auto__ = (function (){var statearr_45835 = f__38836__auto__.call(null);
(statearr_45835[(6)] = c__38835__auto___45836);

return statearr_45835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___45836,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45845,opts){
var map__45846 = p__45845;
var map__45846__$1 = ((((!((map__45846 == null)))?(((((map__45846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45846):map__45846);
var eval_body = cljs.core.get.call(null,map__45846__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3913__auto__ = eval_body;
if(cljs.core.truth_(and__3913__auto__)){
return typeof eval_body === 'string';
} else {
return and__3913__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45848){var e = e45848;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45849_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45849_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45850){
var vec__45851 = p__45850;
var k = cljs.core.nth.call(null,vec__45851,(0),null);
var v = cljs.core.nth.call(null,vec__45851,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45854){
var vec__45855 = p__45854;
var k = cljs.core.nth.call(null,vec__45855,(0),null);
var v = cljs.core.nth.call(null,vec__45855,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45861,p__45862){
var map__45863 = p__45861;
var map__45863__$1 = ((((!((map__45863 == null)))?(((((map__45863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45863):map__45863);
var opts = map__45863__$1;
var before_jsload = cljs.core.get.call(null,map__45863__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45863__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45863__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45864 = p__45862;
var map__45864__$1 = ((((!((map__45864 == null)))?(((((map__45864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45864):map__45864);
var msg = map__45864__$1;
var files = cljs.core.get.call(null,map__45864__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45864__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45864__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46018){
var state_val_46019 = (state_46018[(1)]);
if((state_val_46019 === (7))){
var inst_45881 = (state_46018[(7)]);
var inst_45878 = (state_46018[(8)]);
var inst_45879 = (state_46018[(9)]);
var inst_45880 = (state_46018[(10)]);
var inst_45886 = cljs.core._nth.call(null,inst_45879,inst_45881);
var inst_45887 = figwheel.client.file_reloading.eval_body.call(null,inst_45886,opts);
var inst_45888 = (inst_45881 + (1));
var tmp46020 = inst_45878;
var tmp46021 = inst_45879;
var tmp46022 = inst_45880;
var inst_45878__$1 = tmp46020;
var inst_45879__$1 = tmp46021;
var inst_45880__$1 = tmp46022;
var inst_45881__$1 = inst_45888;
var state_46018__$1 = (function (){var statearr_46023 = state_46018;
(statearr_46023[(7)] = inst_45881__$1);

(statearr_46023[(11)] = inst_45887);

(statearr_46023[(8)] = inst_45878__$1);

(statearr_46023[(9)] = inst_45879__$1);

(statearr_46023[(10)] = inst_45880__$1);

return statearr_46023;
})();
var statearr_46024_46107 = state_46018__$1;
(statearr_46024_46107[(2)] = null);

(statearr_46024_46107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (20))){
var inst_45921 = (state_46018[(12)]);
var inst_45929 = figwheel.client.file_reloading.sort_files.call(null,inst_45921);
var state_46018__$1 = state_46018;
var statearr_46025_46108 = state_46018__$1;
(statearr_46025_46108[(2)] = inst_45929);

(statearr_46025_46108[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (27))){
var state_46018__$1 = state_46018;
var statearr_46026_46109 = state_46018__$1;
(statearr_46026_46109[(2)] = null);

(statearr_46026_46109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (1))){
var inst_45870 = (state_46018[(13)]);
var inst_45867 = before_jsload.call(null,files);
var inst_45868 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45869 = (function (){return ((function (inst_45870,inst_45867,inst_45868,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45858_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45858_SHARP_);
});
;})(inst_45870,inst_45867,inst_45868,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45870__$1 = cljs.core.filter.call(null,inst_45869,files);
var inst_45871 = cljs.core.not_empty.call(null,inst_45870__$1);
var state_46018__$1 = (function (){var statearr_46027 = state_46018;
(statearr_46027[(13)] = inst_45870__$1);

(statearr_46027[(14)] = inst_45868);

(statearr_46027[(15)] = inst_45867);

return statearr_46027;
})();
if(cljs.core.truth_(inst_45871)){
var statearr_46028_46110 = state_46018__$1;
(statearr_46028_46110[(1)] = (2));

} else {
var statearr_46029_46111 = state_46018__$1;
(statearr_46029_46111[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (24))){
var state_46018__$1 = state_46018;
var statearr_46030_46112 = state_46018__$1;
(statearr_46030_46112[(2)] = null);

(statearr_46030_46112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (39))){
var inst_45971 = (state_46018[(16)]);
var state_46018__$1 = state_46018;
var statearr_46031_46113 = state_46018__$1;
(statearr_46031_46113[(2)] = inst_45971);

(statearr_46031_46113[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (46))){
var inst_46013 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46032_46114 = state_46018__$1;
(statearr_46032_46114[(2)] = inst_46013);

(statearr_46032_46114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (4))){
var inst_45915 = (state_46018[(2)]);
var inst_45916 = cljs.core.List.EMPTY;
var inst_45917 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45916);
var inst_45918 = (function (){return ((function (inst_45915,inst_45916,inst_45917,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45859_SHARP_){
var and__3913__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45859_SHARP_);
if(cljs.core.truth_(and__3913__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45859_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45859_SHARP_))));
} else {
return and__3913__auto__;
}
});
;})(inst_45915,inst_45916,inst_45917,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45919 = cljs.core.filter.call(null,inst_45918,files);
var inst_45920 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45921 = cljs.core.concat.call(null,inst_45919,inst_45920);
var state_46018__$1 = (function (){var statearr_46033 = state_46018;
(statearr_46033[(17)] = inst_45915);

(statearr_46033[(18)] = inst_45917);

(statearr_46033[(12)] = inst_45921);

return statearr_46033;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46034_46115 = state_46018__$1;
(statearr_46034_46115[(1)] = (16));

} else {
var statearr_46035_46116 = state_46018__$1;
(statearr_46035_46116[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (15))){
var inst_45905 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46036_46117 = state_46018__$1;
(statearr_46036_46117[(2)] = inst_45905);

(statearr_46036_46117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (21))){
var inst_45931 = (state_46018[(19)]);
var inst_45931__$1 = (state_46018[(2)]);
var inst_45932 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45931__$1);
var state_46018__$1 = (function (){var statearr_46037 = state_46018;
(statearr_46037[(19)] = inst_45931__$1);

return statearr_46037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46018__$1,(22),inst_45932);
} else {
if((state_val_46019 === (31))){
var inst_46016 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46018__$1,inst_46016);
} else {
if((state_val_46019 === (32))){
var inst_45971 = (state_46018[(16)]);
var inst_45976 = inst_45971.cljs$lang$protocol_mask$partition0$;
var inst_45977 = (inst_45976 & (64));
var inst_45978 = inst_45971.cljs$core$ISeq$;
var inst_45979 = (cljs.core.PROTOCOL_SENTINEL === inst_45978);
var inst_45980 = ((inst_45977) || (inst_45979));
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_45980)){
var statearr_46038_46118 = state_46018__$1;
(statearr_46038_46118[(1)] = (35));

} else {
var statearr_46039_46119 = state_46018__$1;
(statearr_46039_46119[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (40))){
var inst_45993 = (state_46018[(20)]);
var inst_45992 = (state_46018[(2)]);
var inst_45993__$1 = cljs.core.get.call(null,inst_45992,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45994 = cljs.core.get.call(null,inst_45992,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45995 = cljs.core.not_empty.call(null,inst_45993__$1);
var state_46018__$1 = (function (){var statearr_46040 = state_46018;
(statearr_46040[(20)] = inst_45993__$1);

(statearr_46040[(21)] = inst_45994);

return statearr_46040;
})();
if(cljs.core.truth_(inst_45995)){
var statearr_46041_46120 = state_46018__$1;
(statearr_46041_46120[(1)] = (41));

} else {
var statearr_46042_46121 = state_46018__$1;
(statearr_46042_46121[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (33))){
var state_46018__$1 = state_46018;
var statearr_46043_46122 = state_46018__$1;
(statearr_46043_46122[(2)] = false);

(statearr_46043_46122[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (13))){
var inst_45891 = (state_46018[(22)]);
var inst_45895 = cljs.core.chunk_first.call(null,inst_45891);
var inst_45896 = cljs.core.chunk_rest.call(null,inst_45891);
var inst_45897 = cljs.core.count.call(null,inst_45895);
var inst_45878 = inst_45896;
var inst_45879 = inst_45895;
var inst_45880 = inst_45897;
var inst_45881 = (0);
var state_46018__$1 = (function (){var statearr_46044 = state_46018;
(statearr_46044[(7)] = inst_45881);

(statearr_46044[(8)] = inst_45878);

(statearr_46044[(9)] = inst_45879);

(statearr_46044[(10)] = inst_45880);

return statearr_46044;
})();
var statearr_46045_46123 = state_46018__$1;
(statearr_46045_46123[(2)] = null);

(statearr_46045_46123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (22))){
var inst_45931 = (state_46018[(19)]);
var inst_45935 = (state_46018[(23)]);
var inst_45939 = (state_46018[(24)]);
var inst_45934 = (state_46018[(25)]);
var inst_45934__$1 = (state_46018[(2)]);
var inst_45935__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45934__$1);
var inst_45936 = (function (){var all_files = inst_45931;
var res_SINGLEQUOTE_ = inst_45934__$1;
var res = inst_45935__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45931,inst_45935,inst_45939,inst_45934,inst_45934__$1,inst_45935__$1,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45860_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45860_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45931,inst_45935,inst_45939,inst_45934,inst_45934__$1,inst_45935__$1,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45937 = cljs.core.filter.call(null,inst_45936,inst_45934__$1);
var inst_45938 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45939__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45938);
var inst_45940 = cljs.core.not_empty.call(null,inst_45939__$1);
var state_46018__$1 = (function (){var statearr_46046 = state_46018;
(statearr_46046[(23)] = inst_45935__$1);

(statearr_46046[(26)] = inst_45937);

(statearr_46046[(24)] = inst_45939__$1);

(statearr_46046[(25)] = inst_45934__$1);

return statearr_46046;
})();
if(cljs.core.truth_(inst_45940)){
var statearr_46047_46124 = state_46018__$1;
(statearr_46047_46124[(1)] = (23));

} else {
var statearr_46048_46125 = state_46018__$1;
(statearr_46048_46125[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (36))){
var state_46018__$1 = state_46018;
var statearr_46049_46126 = state_46018__$1;
(statearr_46049_46126[(2)] = false);

(statearr_46049_46126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (41))){
var inst_45993 = (state_46018[(20)]);
var inst_45997 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45998 = cljs.core.map.call(null,inst_45997,inst_45993);
var inst_45999 = cljs.core.pr_str.call(null,inst_45998);
var inst_46000 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45999)].join('');
var inst_46001 = figwheel.client.utils.log.call(null,inst_46000);
var state_46018__$1 = state_46018;
var statearr_46050_46127 = state_46018__$1;
(statearr_46050_46127[(2)] = inst_46001);

(statearr_46050_46127[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (43))){
var inst_45994 = (state_46018[(21)]);
var inst_46004 = (state_46018[(2)]);
var inst_46005 = cljs.core.not_empty.call(null,inst_45994);
var state_46018__$1 = (function (){var statearr_46051 = state_46018;
(statearr_46051[(27)] = inst_46004);

return statearr_46051;
})();
if(cljs.core.truth_(inst_46005)){
var statearr_46052_46128 = state_46018__$1;
(statearr_46052_46128[(1)] = (44));

} else {
var statearr_46053_46129 = state_46018__$1;
(statearr_46053_46129[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (29))){
var inst_45931 = (state_46018[(19)]);
var inst_45971 = (state_46018[(16)]);
var inst_45935 = (state_46018[(23)]);
var inst_45937 = (state_46018[(26)]);
var inst_45939 = (state_46018[(24)]);
var inst_45934 = (state_46018[(25)]);
var inst_45967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45970 = (function (){var all_files = inst_45931;
var res_SINGLEQUOTE_ = inst_45934;
var res = inst_45935;
var files_not_loaded = inst_45937;
var dependencies_that_loaded = inst_45939;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45971,inst_45935,inst_45937,inst_45939,inst_45934,inst_45967,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45969){
var map__46054 = p__45969;
var map__46054__$1 = ((((!((map__46054 == null)))?(((((map__46054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46054):map__46054);
var namespace = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45971,inst_45935,inst_45937,inst_45939,inst_45934,inst_45967,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45971__$1 = cljs.core.group_by.call(null,inst_45970,inst_45937);
var inst_45973 = (inst_45971__$1 == null);
var inst_45974 = cljs.core.not.call(null,inst_45973);
var state_46018__$1 = (function (){var statearr_46056 = state_46018;
(statearr_46056[(28)] = inst_45967);

(statearr_46056[(16)] = inst_45971__$1);

return statearr_46056;
})();
if(inst_45974){
var statearr_46057_46130 = state_46018__$1;
(statearr_46057_46130[(1)] = (32));

} else {
var statearr_46058_46131 = state_46018__$1;
(statearr_46058_46131[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (44))){
var inst_45994 = (state_46018[(21)]);
var inst_46007 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45994);
var inst_46008 = cljs.core.pr_str.call(null,inst_46007);
var inst_46009 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46008)].join('');
var inst_46010 = figwheel.client.utils.log.call(null,inst_46009);
var state_46018__$1 = state_46018;
var statearr_46059_46132 = state_46018__$1;
(statearr_46059_46132[(2)] = inst_46010);

(statearr_46059_46132[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (6))){
var inst_45912 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46060_46133 = state_46018__$1;
(statearr_46060_46133[(2)] = inst_45912);

(statearr_46060_46133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (28))){
var inst_45937 = (state_46018[(26)]);
var inst_45964 = (state_46018[(2)]);
var inst_45965 = cljs.core.not_empty.call(null,inst_45937);
var state_46018__$1 = (function (){var statearr_46061 = state_46018;
(statearr_46061[(29)] = inst_45964);

return statearr_46061;
})();
if(cljs.core.truth_(inst_45965)){
var statearr_46062_46134 = state_46018__$1;
(statearr_46062_46134[(1)] = (29));

} else {
var statearr_46063_46135 = state_46018__$1;
(statearr_46063_46135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (25))){
var inst_45935 = (state_46018[(23)]);
var inst_45951 = (state_46018[(2)]);
var inst_45952 = cljs.core.not_empty.call(null,inst_45935);
var state_46018__$1 = (function (){var statearr_46064 = state_46018;
(statearr_46064[(30)] = inst_45951);

return statearr_46064;
})();
if(cljs.core.truth_(inst_45952)){
var statearr_46065_46136 = state_46018__$1;
(statearr_46065_46136[(1)] = (26));

} else {
var statearr_46066_46137 = state_46018__$1;
(statearr_46066_46137[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (34))){
var inst_45987 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_45987)){
var statearr_46067_46138 = state_46018__$1;
(statearr_46067_46138[(1)] = (38));

} else {
var statearr_46068_46139 = state_46018__$1;
(statearr_46068_46139[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (17))){
var state_46018__$1 = state_46018;
var statearr_46069_46140 = state_46018__$1;
(statearr_46069_46140[(2)] = recompile_dependents);

(statearr_46069_46140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (3))){
var state_46018__$1 = state_46018;
var statearr_46070_46141 = state_46018__$1;
(statearr_46070_46141[(2)] = null);

(statearr_46070_46141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (12))){
var inst_45908 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46071_46142 = state_46018__$1;
(statearr_46071_46142[(2)] = inst_45908);

(statearr_46071_46142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (2))){
var inst_45870 = (state_46018[(13)]);
var inst_45877 = cljs.core.seq.call(null,inst_45870);
var inst_45878 = inst_45877;
var inst_45879 = null;
var inst_45880 = (0);
var inst_45881 = (0);
var state_46018__$1 = (function (){var statearr_46072 = state_46018;
(statearr_46072[(7)] = inst_45881);

(statearr_46072[(8)] = inst_45878);

(statearr_46072[(9)] = inst_45879);

(statearr_46072[(10)] = inst_45880);

return statearr_46072;
})();
var statearr_46073_46143 = state_46018__$1;
(statearr_46073_46143[(2)] = null);

(statearr_46073_46143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (23))){
var inst_45931 = (state_46018[(19)]);
var inst_45935 = (state_46018[(23)]);
var inst_45937 = (state_46018[(26)]);
var inst_45939 = (state_46018[(24)]);
var inst_45934 = (state_46018[(25)]);
var inst_45942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45944 = (function (){var all_files = inst_45931;
var res_SINGLEQUOTE_ = inst_45934;
var res = inst_45935;
var files_not_loaded = inst_45937;
var dependencies_that_loaded = inst_45939;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45942,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45943){
var map__46074 = p__45943;
var map__46074__$1 = ((((!((map__46074 == null)))?(((((map__46074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46074):map__46074);
var request_url = cljs.core.get.call(null,map__46074__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45942,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45945 = cljs.core.reverse.call(null,inst_45939);
var inst_45946 = cljs.core.map.call(null,inst_45944,inst_45945);
var inst_45947 = cljs.core.pr_str.call(null,inst_45946);
var inst_45948 = figwheel.client.utils.log.call(null,inst_45947);
var state_46018__$1 = (function (){var statearr_46076 = state_46018;
(statearr_46076[(31)] = inst_45942);

return statearr_46076;
})();
var statearr_46077_46144 = state_46018__$1;
(statearr_46077_46144[(2)] = inst_45948);

(statearr_46077_46144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (35))){
var state_46018__$1 = state_46018;
var statearr_46078_46145 = state_46018__$1;
(statearr_46078_46145[(2)] = true);

(statearr_46078_46145[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (19))){
var inst_45921 = (state_46018[(12)]);
var inst_45927 = figwheel.client.file_reloading.expand_files.call(null,inst_45921);
var state_46018__$1 = state_46018;
var statearr_46079_46146 = state_46018__$1;
(statearr_46079_46146[(2)] = inst_45927);

(statearr_46079_46146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (11))){
var state_46018__$1 = state_46018;
var statearr_46080_46147 = state_46018__$1;
(statearr_46080_46147[(2)] = null);

(statearr_46080_46147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (9))){
var inst_45910 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46081_46148 = state_46018__$1;
(statearr_46081_46148[(2)] = inst_45910);

(statearr_46081_46148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (5))){
var inst_45881 = (state_46018[(7)]);
var inst_45880 = (state_46018[(10)]);
var inst_45883 = (inst_45881 < inst_45880);
var inst_45884 = inst_45883;
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_45884)){
var statearr_46082_46149 = state_46018__$1;
(statearr_46082_46149[(1)] = (7));

} else {
var statearr_46083_46150 = state_46018__$1;
(statearr_46083_46150[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (14))){
var inst_45891 = (state_46018[(22)]);
var inst_45900 = cljs.core.first.call(null,inst_45891);
var inst_45901 = figwheel.client.file_reloading.eval_body.call(null,inst_45900,opts);
var inst_45902 = cljs.core.next.call(null,inst_45891);
var inst_45878 = inst_45902;
var inst_45879 = null;
var inst_45880 = (0);
var inst_45881 = (0);
var state_46018__$1 = (function (){var statearr_46084 = state_46018;
(statearr_46084[(7)] = inst_45881);

(statearr_46084[(8)] = inst_45878);

(statearr_46084[(9)] = inst_45879);

(statearr_46084[(32)] = inst_45901);

(statearr_46084[(10)] = inst_45880);

return statearr_46084;
})();
var statearr_46085_46151 = state_46018__$1;
(statearr_46085_46151[(2)] = null);

(statearr_46085_46151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (45))){
var state_46018__$1 = state_46018;
var statearr_46086_46152 = state_46018__$1;
(statearr_46086_46152[(2)] = null);

(statearr_46086_46152[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (26))){
var inst_45931 = (state_46018[(19)]);
var inst_45935 = (state_46018[(23)]);
var inst_45937 = (state_46018[(26)]);
var inst_45939 = (state_46018[(24)]);
var inst_45934 = (state_46018[(25)]);
var inst_45954 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45956 = (function (){var all_files = inst_45931;
var res_SINGLEQUOTE_ = inst_45934;
var res = inst_45935;
var files_not_loaded = inst_45937;
var dependencies_that_loaded = inst_45939;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45954,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45955){
var map__46087 = p__45955;
var map__46087__$1 = ((((!((map__46087 == null)))?(((((map__46087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46087):map__46087);
var namespace = cljs.core.get.call(null,map__46087__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45954,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45957 = cljs.core.map.call(null,inst_45956,inst_45935);
var inst_45958 = cljs.core.pr_str.call(null,inst_45957);
var inst_45959 = figwheel.client.utils.log.call(null,inst_45958);
var inst_45960 = (function (){var all_files = inst_45931;
var res_SINGLEQUOTE_ = inst_45934;
var res = inst_45935;
var files_not_loaded = inst_45937;
var dependencies_that_loaded = inst_45939;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45954,inst_45956,inst_45957,inst_45958,inst_45959,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45931,inst_45935,inst_45937,inst_45939,inst_45934,inst_45954,inst_45956,inst_45957,inst_45958,inst_45959,state_val_46019,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45961 = setTimeout(inst_45960,(10));
var state_46018__$1 = (function (){var statearr_46089 = state_46018;
(statearr_46089[(33)] = inst_45954);

(statearr_46089[(34)] = inst_45959);

return statearr_46089;
})();
var statearr_46090_46153 = state_46018__$1;
(statearr_46090_46153[(2)] = inst_45961);

(statearr_46090_46153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (16))){
var state_46018__$1 = state_46018;
var statearr_46091_46154 = state_46018__$1;
(statearr_46091_46154[(2)] = reload_dependents);

(statearr_46091_46154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (38))){
var inst_45971 = (state_46018[(16)]);
var inst_45989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45971);
var state_46018__$1 = state_46018;
var statearr_46092_46155 = state_46018__$1;
(statearr_46092_46155[(2)] = inst_45989);

(statearr_46092_46155[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (30))){
var state_46018__$1 = state_46018;
var statearr_46093_46156 = state_46018__$1;
(statearr_46093_46156[(2)] = null);

(statearr_46093_46156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (10))){
var inst_45891 = (state_46018[(22)]);
var inst_45893 = cljs.core.chunked_seq_QMARK_.call(null,inst_45891);
var state_46018__$1 = state_46018;
if(inst_45893){
var statearr_46094_46157 = state_46018__$1;
(statearr_46094_46157[(1)] = (13));

} else {
var statearr_46095_46158 = state_46018__$1;
(statearr_46095_46158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (18))){
var inst_45925 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_45925)){
var statearr_46096_46159 = state_46018__$1;
(statearr_46096_46159[(1)] = (19));

} else {
var statearr_46097_46160 = state_46018__$1;
(statearr_46097_46160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (42))){
var state_46018__$1 = state_46018;
var statearr_46098_46161 = state_46018__$1;
(statearr_46098_46161[(2)] = null);

(statearr_46098_46161[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (37))){
var inst_45984 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46099_46162 = state_46018__$1;
(statearr_46099_46162[(2)] = inst_45984);

(statearr_46099_46162[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (8))){
var inst_45878 = (state_46018[(8)]);
var inst_45891 = (state_46018[(22)]);
var inst_45891__$1 = cljs.core.seq.call(null,inst_45878);
var state_46018__$1 = (function (){var statearr_46100 = state_46018;
(statearr_46100[(22)] = inst_45891__$1);

return statearr_46100;
})();
if(inst_45891__$1){
var statearr_46101_46163 = state_46018__$1;
(statearr_46101_46163[(1)] = (10));

} else {
var statearr_46102_46164 = state_46018__$1;
(statearr_46102_46164[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38678__auto__,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____0 = (function (){
var statearr_46103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46103[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__);

(statearr_46103[(1)] = (1));

return statearr_46103;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____1 = (function (state_46018){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_46018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e46104){if((e46104 instanceof Object)){
var ex__38682__auto__ = e46104;
var statearr_46105_46165 = state_46018;
(statearr_46105_46165[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46166 = state_46018;
state_46018 = G__46166;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__ = function(state_46018){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____1.call(this,state_46018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38837__auto__ = (function (){var statearr_46106 = f__38836__auto__.call(null);
(statearr_46106[(6)] = c__38835__auto__);

return statearr_46106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__,map__45863,map__45863__$1,opts,before_jsload,on_jsload,reload_dependents,map__45864,map__45864__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38835__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46169,link){
var map__46170 = p__46169;
var map__46170__$1 = ((((!((map__46170 == null)))?(((((map__46170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46170):map__46170);
var file = cljs.core.get.call(null,map__46170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__46170,map__46170__$1,file){
return (function (p1__46167_SHARP_,p2__46168_SHARP_){
if(cljs.core._EQ_.call(null,p1__46167_SHARP_,p2__46168_SHARP_)){
return p1__46167_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__46170,map__46170__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46173){
var map__46174 = p__46173;
var map__46174__$1 = ((((!((map__46174 == null)))?(((((map__46174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46174):map__46174);
var match_length = cljs.core.get.call(null,map__46174__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46174__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46172_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46172_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46176_SHARP_,p2__46177_SHARP_){
return cljs.core.assoc.call(null,p1__46176_SHARP_,cljs.core.get.call(null,p2__46177_SHARP_,key),p2__46177_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46178 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46178);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46178);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46179,p__46180){
var map__46181 = p__46179;
var map__46181__$1 = ((((!((map__46181 == null)))?(((((map__46181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46181):map__46181);
var on_cssload = cljs.core.get.call(null,map__46181__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46182 = p__46180;
var map__46182__$1 = ((((!((map__46182 == null)))?(((((map__46182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46182):map__46182);
var files_msg = map__46182__$1;
var files = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1525291347847
