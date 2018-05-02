// Compiled by ClojureScript 1.10.126 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46283){
var map__46284 = p__46283;
var map__46284__$1 = ((((!((map__46284 == null)))?(((((map__46284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46284):map__46284);
var m = map__46284__$1;
var n = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46286_46308 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46287_46309 = null;
var count__46288_46310 = (0);
var i__46289_46311 = (0);
while(true){
if((i__46289_46311 < count__46288_46310)){
var f_46312 = cljs.core._nth.call(null,chunk__46287_46309,i__46289_46311);
cljs.core.println.call(null,"  ",f_46312);


var G__46313 = seq__46286_46308;
var G__46314 = chunk__46287_46309;
var G__46315 = count__46288_46310;
var G__46316 = (i__46289_46311 + (1));
seq__46286_46308 = G__46313;
chunk__46287_46309 = G__46314;
count__46288_46310 = G__46315;
i__46289_46311 = G__46316;
continue;
} else {
var temp__5457__auto___46317 = cljs.core.seq.call(null,seq__46286_46308);
if(temp__5457__auto___46317){
var seq__46286_46318__$1 = temp__5457__auto___46317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46286_46318__$1)){
var c__4321__auto___46319 = cljs.core.chunk_first.call(null,seq__46286_46318__$1);
var G__46320 = cljs.core.chunk_rest.call(null,seq__46286_46318__$1);
var G__46321 = c__4321__auto___46319;
var G__46322 = cljs.core.count.call(null,c__4321__auto___46319);
var G__46323 = (0);
seq__46286_46308 = G__46320;
chunk__46287_46309 = G__46321;
count__46288_46310 = G__46322;
i__46289_46311 = G__46323;
continue;
} else {
var f_46324 = cljs.core.first.call(null,seq__46286_46318__$1);
cljs.core.println.call(null,"  ",f_46324);


var G__46325 = cljs.core.next.call(null,seq__46286_46318__$1);
var G__46326 = null;
var G__46327 = (0);
var G__46328 = (0);
seq__46286_46308 = G__46325;
chunk__46287_46309 = G__46326;
count__46288_46310 = G__46327;
i__46289_46311 = G__46328;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46329 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3924__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46329);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46329)))?cljs.core.second.call(null,arglists_46329):arglists_46329));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46290_46330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46291_46331 = null;
var count__46292_46332 = (0);
var i__46293_46333 = (0);
while(true){
if((i__46293_46333 < count__46292_46332)){
var vec__46294_46334 = cljs.core._nth.call(null,chunk__46291_46331,i__46293_46333);
var name_46335 = cljs.core.nth.call(null,vec__46294_46334,(0),null);
var map__46297_46336 = cljs.core.nth.call(null,vec__46294_46334,(1),null);
var map__46297_46337__$1 = ((((!((map__46297_46336 == null)))?(((((map__46297_46336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46297_46336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46297_46336):map__46297_46336);
var doc_46338 = cljs.core.get.call(null,map__46297_46337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46339 = cljs.core.get.call(null,map__46297_46337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46335);

cljs.core.println.call(null," ",arglists_46339);

if(cljs.core.truth_(doc_46338)){
cljs.core.println.call(null," ",doc_46338);
} else {
}


var G__46340 = seq__46290_46330;
var G__46341 = chunk__46291_46331;
var G__46342 = count__46292_46332;
var G__46343 = (i__46293_46333 + (1));
seq__46290_46330 = G__46340;
chunk__46291_46331 = G__46341;
count__46292_46332 = G__46342;
i__46293_46333 = G__46343;
continue;
} else {
var temp__5457__auto___46344 = cljs.core.seq.call(null,seq__46290_46330);
if(temp__5457__auto___46344){
var seq__46290_46345__$1 = temp__5457__auto___46344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46290_46345__$1)){
var c__4321__auto___46346 = cljs.core.chunk_first.call(null,seq__46290_46345__$1);
var G__46347 = cljs.core.chunk_rest.call(null,seq__46290_46345__$1);
var G__46348 = c__4321__auto___46346;
var G__46349 = cljs.core.count.call(null,c__4321__auto___46346);
var G__46350 = (0);
seq__46290_46330 = G__46347;
chunk__46291_46331 = G__46348;
count__46292_46332 = G__46349;
i__46293_46333 = G__46350;
continue;
} else {
var vec__46299_46351 = cljs.core.first.call(null,seq__46290_46345__$1);
var name_46352 = cljs.core.nth.call(null,vec__46299_46351,(0),null);
var map__46302_46353 = cljs.core.nth.call(null,vec__46299_46351,(1),null);
var map__46302_46354__$1 = ((((!((map__46302_46353 == null)))?(((((map__46302_46353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46302_46353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46302_46353):map__46302_46353);
var doc_46355 = cljs.core.get.call(null,map__46302_46354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46356 = cljs.core.get.call(null,map__46302_46354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46352);

cljs.core.println.call(null," ",arglists_46356);

if(cljs.core.truth_(doc_46355)){
cljs.core.println.call(null," ",doc_46355);
} else {
}


var G__46357 = cljs.core.next.call(null,seq__46290_46345__$1);
var G__46358 = null;
var G__46359 = (0);
var G__46360 = (0);
seq__46290_46330 = G__46357;
chunk__46291_46331 = G__46358;
count__46292_46332 = G__46359;
i__46293_46333 = G__46360;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__46304 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46305 = null;
var count__46306 = (0);
var i__46307 = (0);
while(true){
if((i__46307 < count__46306)){
var role = cljs.core._nth.call(null,chunk__46305,i__46307);
var temp__5457__auto___46361__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46361__$1)){
var spec_46362 = temp__5457__auto___46361__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46362));
} else {
}


var G__46363 = seq__46304;
var G__46364 = chunk__46305;
var G__46365 = count__46306;
var G__46366 = (i__46307 + (1));
seq__46304 = G__46363;
chunk__46305 = G__46364;
count__46306 = G__46365;
i__46307 = G__46366;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__46304);
if(temp__5457__auto____$1){
var seq__46304__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46304__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__46304__$1);
var G__46367 = cljs.core.chunk_rest.call(null,seq__46304__$1);
var G__46368 = c__4321__auto__;
var G__46369 = cljs.core.count.call(null,c__4321__auto__);
var G__46370 = (0);
seq__46304 = G__46367;
chunk__46305 = G__46368;
count__46306 = G__46369;
i__46307 = G__46370;
continue;
} else {
var role = cljs.core.first.call(null,seq__46304__$1);
var temp__5457__auto___46371__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46371__$2)){
var spec_46372 = temp__5457__auto___46371__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46372));
} else {
}


var G__46373 = cljs.core.next.call(null,seq__46304__$1);
var G__46374 = null;
var G__46375 = (0);
var G__46376 = (0);
seq__46304 = G__46373;
chunk__46305 = G__46374;
count__46306 = G__46375;
i__46307 = G__46376;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1525291348035
