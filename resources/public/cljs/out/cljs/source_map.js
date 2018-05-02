// Compiled by ClojureScript 1.10.126 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__24760){
var vec__24761 = p__24760;
var i = cljs.core.nth.call(null,vec__24761,(0),null);
var v = cljs.core.nth.call(null,vec__24761,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__24764 = seg;
var gcol = cljs.core.nth.call(null,vec__24764,(0),null);
var source = cljs.core.nth.call(null,vec__24764,(1),null);
var line = cljs.core.nth.call(null,vec__24764,(2),null);
var col = cljs.core.nth.call(null,vec__24764,(3),null);
var name = cljs.core.nth.call(null,vec__24764,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__24767 = seg;
var gcol = cljs.core.nth.call(null,vec__24767,(0),null);
var source = cljs.core.nth.call(null,vec__24767,(1),null);
var line = cljs.core.nth.call(null,vec__24767,(2),null);
var col = cljs.core.nth.call(null,vec__24767,(3),null);
var name = cljs.core.nth.call(null,vec__24767,(4),null);
var vec__24770 = relseg;
var rgcol = cljs.core.nth.call(null,vec__24770,(0),null);
var rsource = cljs.core.nth.call(null,vec__24770,(1),null);
var rline = cljs.core.nth.call(null,vec__24770,(2),null);
var rcol = cljs.core.nth.call(null,vec__24770,(3),null);
var rname = cljs.core.nth.call(null,vec__24770,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3924__auto__ = source;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3924__auto__ = line;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3924__auto__ = col;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3924__auto__ = name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__24773 = segmap;
var map__24773__$1 = ((((!((map__24773 == null)))?(((((map__24773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24773):map__24773);
var gcol = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__24773,map__24773__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__24776 = arguments.length;
switch (G__24776) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__24777 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__24781 = cljs.core.next.call(null,segs__$1);
var G__24782 = nrelseg;
var G__24783 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__24781;
relseg__$1 = G__24782;
result__$1 = G__24783;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__24777,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__24777,(1),null);
var G__24784 = (gline + (1));
var G__24785 = cljs.core.next.call(null,lines__$1);
var G__24786 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__24787 = result__$1;
gline = G__24784;
lines__$1 = G__24785;
relseg = G__24786;
result = G__24787;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__24789 = segmap;
var map__24789__$1 = ((((!((map__24789 == null)))?(((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);
var gcol = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__24789,map__24789__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__24789,map__24789__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__24788_SHARP_){
return cljs.core.conj.call(null,p1__24788_SHARP_,d__$1);
});})(map__24789,map__24789__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24789,map__24789__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__24792 = arguments.length;
switch (G__24792) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__24793 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__24797 = cljs.core.next.call(null,segs__$1);
var G__24798 = nrelseg;
var G__24799 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__24797;
relseg__$1 = G__24798;
result__$1 = G__24799;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__24793,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__24793,(1),null);
var G__24800 = (gline + (1));
var G__24801 = cljs.core.next.call(null,lines__$1);
var G__24802 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__24803 = result__$1;
gline = G__24800;
lines__$1 = G__24801;
relseg = G__24802;
result = G__24803;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__24804){
var vec__24805 = p__24804;
var _ = cljs.core.nth.call(null,vec__24805,(0),null);
var source = cljs.core.nth.call(null,vec__24805,(1),null);
var line = cljs.core.nth.call(null,vec__24805,(2),null);
var col = cljs.core.nth.call(null,vec__24805,(3),null);
var name = cljs.core.nth.call(null,vec__24805,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__24808){
var vec__24809 = p__24808;
var gcol = cljs.core.nth.call(null,vec__24809,(0),null);
var sidx = cljs.core.nth.call(null,vec__24809,(1),null);
var line = cljs.core.nth.call(null,vec__24809,(2),null);
var col = cljs.core.nth.call(null,vec__24809,(3),null);
var name = cljs.core.nth.call(null,vec__24809,(4),null);
var seg = vec__24809;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__24809,gcol,sidx,line,col,name,seg,relseg){
return (function (p__24812){
var vec__24813 = p__24812;
var _ = cljs.core.nth.call(null,vec__24813,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24813,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__24813,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__24813,(3),null);
var lname = cljs.core.nth.call(null,vec__24813,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3924__auto__ = name;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__24809,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3924__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__24819 = cljs.core.seq.call(null,infos);
var chunk__24820 = null;
var count__24821 = (0);
var i__24822 = (0);
while(true){
if((i__24822 < count__24821)){
var info = cljs.core._nth.call(null,chunk__24820,i__24822);
var segv_24901 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_24902 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24903 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_24902 > (lc_24903 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__24819,chunk__24820,count__24821,i__24822,segv_24901,gline_24902,lc_24903,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_24902 - (lc_24903 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24901], null));
});})(seq__24819,chunk__24820,count__24821,i__24822,segv_24901,gline_24902,lc_24903,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__24819,chunk__24820,count__24821,i__24822,segv_24901,gline_24902,lc_24903,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24902], null),cljs.core.conj,segv_24901);
});})(seq__24819,chunk__24820,count__24821,i__24822,segv_24901,gline_24902,lc_24903,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24904 = seq__24819;
var G__24905 = chunk__24820;
var G__24906 = count__24821;
var G__24907 = (i__24822 + (1));
seq__24819 = G__24904;
chunk__24820 = G__24905;
count__24821 = G__24906;
i__24822 = G__24907;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24819);
if(temp__5457__auto__){
var seq__24819__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24819__$1)){
var c__4321__auto__ = cljs.core.chunk_first.call(null,seq__24819__$1);
var G__24908 = cljs.core.chunk_rest.call(null,seq__24819__$1);
var G__24909 = c__4321__auto__;
var G__24910 = cljs.core.count.call(null,c__4321__auto__);
var G__24911 = (0);
seq__24819 = G__24908;
chunk__24820 = G__24909;
count__24821 = G__24910;
i__24822 = G__24911;
continue;
} else {
var info = cljs.core.first.call(null,seq__24819__$1);
var segv_24912 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_24913 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_24914 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_24913 > (lc_24914 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__24819,chunk__24820,count__24821,i__24822,segv_24912,gline_24913,lc_24914,info,seq__24819__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_24913 - (lc_24914 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24912], null));
});})(seq__24819,chunk__24820,count__24821,i__24822,segv_24912,gline_24913,lc_24914,info,seq__24819__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__24819,chunk__24820,count__24821,i__24822,segv_24912,gline_24913,lc_24914,info,seq__24819__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24913], null),cljs.core.conj,segv_24912);
});})(seq__24819,chunk__24820,count__24821,i__24822,segv_24912,gline_24913,lc_24914,info,seq__24819__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__24915 = cljs.core.next.call(null,seq__24819__$1);
var G__24916 = null;
var G__24917 = (0);
var G__24918 = (0);
seq__24819 = G__24915;
chunk__24820 = G__24916;
count__24821 = G__24917;
i__24822 = G__24918;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__24823_24919 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__24824_24920 = null;
var count__24825_24921 = (0);
var i__24826_24922 = (0);
while(true){
if((i__24826_24922 < count__24825_24921)){
var vec__24827_24923 = cljs.core._nth.call(null,chunk__24824_24920,i__24826_24922);
var source_idx_24924 = cljs.core.nth.call(null,vec__24827_24923,(0),null);
var vec__24830_24925 = cljs.core.nth.call(null,vec__24827_24923,(1),null);
var __24926 = cljs.core.nth.call(null,vec__24830_24925,(0),null);
var lines_24927__$1 = cljs.core.nth.call(null,vec__24830_24925,(1),null);
var seq__24833_24928 = cljs.core.seq.call(null,lines_24927__$1);
var chunk__24834_24929 = null;
var count__24835_24930 = (0);
var i__24836_24931 = (0);
while(true){
if((i__24836_24931 < count__24835_24930)){
var vec__24837_24932 = cljs.core._nth.call(null,chunk__24834_24929,i__24836_24931);
var line_24933 = cljs.core.nth.call(null,vec__24837_24932,(0),null);
var cols_24934 = cljs.core.nth.call(null,vec__24837_24932,(1),null);
var seq__24840_24935 = cljs.core.seq.call(null,cols_24934);
var chunk__24841_24936 = null;
var count__24842_24937 = (0);
var i__24843_24938 = (0);
while(true){
if((i__24843_24938 < count__24842_24937)){
var vec__24844_24939 = cljs.core._nth.call(null,chunk__24841_24936,i__24843_24938);
var col_24940 = cljs.core.nth.call(null,vec__24844_24939,(0),null);
var infos_24941 = cljs.core.nth.call(null,vec__24844_24939,(1),null);
encode_cols.call(null,infos_24941,source_idx_24924,line_24933,col_24940);


var G__24942 = seq__24840_24935;
var G__24943 = chunk__24841_24936;
var G__24944 = count__24842_24937;
var G__24945 = (i__24843_24938 + (1));
seq__24840_24935 = G__24942;
chunk__24841_24936 = G__24943;
count__24842_24937 = G__24944;
i__24843_24938 = G__24945;
continue;
} else {
var temp__5457__auto___24946 = cljs.core.seq.call(null,seq__24840_24935);
if(temp__5457__auto___24946){
var seq__24840_24947__$1 = temp__5457__auto___24946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24840_24947__$1)){
var c__4321__auto___24948 = cljs.core.chunk_first.call(null,seq__24840_24947__$1);
var G__24949 = cljs.core.chunk_rest.call(null,seq__24840_24947__$1);
var G__24950 = c__4321__auto___24948;
var G__24951 = cljs.core.count.call(null,c__4321__auto___24948);
var G__24952 = (0);
seq__24840_24935 = G__24949;
chunk__24841_24936 = G__24950;
count__24842_24937 = G__24951;
i__24843_24938 = G__24952;
continue;
} else {
var vec__24847_24953 = cljs.core.first.call(null,seq__24840_24947__$1);
var col_24954 = cljs.core.nth.call(null,vec__24847_24953,(0),null);
var infos_24955 = cljs.core.nth.call(null,vec__24847_24953,(1),null);
encode_cols.call(null,infos_24955,source_idx_24924,line_24933,col_24954);


var G__24956 = cljs.core.next.call(null,seq__24840_24947__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24840_24935 = G__24956;
chunk__24841_24936 = G__24957;
count__24842_24937 = G__24958;
i__24843_24938 = G__24959;
continue;
}
} else {
}
}
break;
}


var G__24960 = seq__24833_24928;
var G__24961 = chunk__24834_24929;
var G__24962 = count__24835_24930;
var G__24963 = (i__24836_24931 + (1));
seq__24833_24928 = G__24960;
chunk__24834_24929 = G__24961;
count__24835_24930 = G__24962;
i__24836_24931 = G__24963;
continue;
} else {
var temp__5457__auto___24964 = cljs.core.seq.call(null,seq__24833_24928);
if(temp__5457__auto___24964){
var seq__24833_24965__$1 = temp__5457__auto___24964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24833_24965__$1)){
var c__4321__auto___24966 = cljs.core.chunk_first.call(null,seq__24833_24965__$1);
var G__24967 = cljs.core.chunk_rest.call(null,seq__24833_24965__$1);
var G__24968 = c__4321__auto___24966;
var G__24969 = cljs.core.count.call(null,c__4321__auto___24966);
var G__24970 = (0);
seq__24833_24928 = G__24967;
chunk__24834_24929 = G__24968;
count__24835_24930 = G__24969;
i__24836_24931 = G__24970;
continue;
} else {
var vec__24850_24971 = cljs.core.first.call(null,seq__24833_24965__$1);
var line_24972 = cljs.core.nth.call(null,vec__24850_24971,(0),null);
var cols_24973 = cljs.core.nth.call(null,vec__24850_24971,(1),null);
var seq__24853_24974 = cljs.core.seq.call(null,cols_24973);
var chunk__24854_24975 = null;
var count__24855_24976 = (0);
var i__24856_24977 = (0);
while(true){
if((i__24856_24977 < count__24855_24976)){
var vec__24857_24978 = cljs.core._nth.call(null,chunk__24854_24975,i__24856_24977);
var col_24979 = cljs.core.nth.call(null,vec__24857_24978,(0),null);
var infos_24980 = cljs.core.nth.call(null,vec__24857_24978,(1),null);
encode_cols.call(null,infos_24980,source_idx_24924,line_24972,col_24979);


var G__24981 = seq__24853_24974;
var G__24982 = chunk__24854_24975;
var G__24983 = count__24855_24976;
var G__24984 = (i__24856_24977 + (1));
seq__24853_24974 = G__24981;
chunk__24854_24975 = G__24982;
count__24855_24976 = G__24983;
i__24856_24977 = G__24984;
continue;
} else {
var temp__5457__auto___24985__$1 = cljs.core.seq.call(null,seq__24853_24974);
if(temp__5457__auto___24985__$1){
var seq__24853_24986__$1 = temp__5457__auto___24985__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24853_24986__$1)){
var c__4321__auto___24987 = cljs.core.chunk_first.call(null,seq__24853_24986__$1);
var G__24988 = cljs.core.chunk_rest.call(null,seq__24853_24986__$1);
var G__24989 = c__4321__auto___24987;
var G__24990 = cljs.core.count.call(null,c__4321__auto___24987);
var G__24991 = (0);
seq__24853_24974 = G__24988;
chunk__24854_24975 = G__24989;
count__24855_24976 = G__24990;
i__24856_24977 = G__24991;
continue;
} else {
var vec__24860_24992 = cljs.core.first.call(null,seq__24853_24986__$1);
var col_24993 = cljs.core.nth.call(null,vec__24860_24992,(0),null);
var infos_24994 = cljs.core.nth.call(null,vec__24860_24992,(1),null);
encode_cols.call(null,infos_24994,source_idx_24924,line_24972,col_24993);


var G__24995 = cljs.core.next.call(null,seq__24853_24986__$1);
var G__24996 = null;
var G__24997 = (0);
var G__24998 = (0);
seq__24853_24974 = G__24995;
chunk__24854_24975 = G__24996;
count__24855_24976 = G__24997;
i__24856_24977 = G__24998;
continue;
}
} else {
}
}
break;
}


var G__24999 = cljs.core.next.call(null,seq__24833_24965__$1);
var G__25000 = null;
var G__25001 = (0);
var G__25002 = (0);
seq__24833_24928 = G__24999;
chunk__24834_24929 = G__25000;
count__24835_24930 = G__25001;
i__24836_24931 = G__25002;
continue;
}
} else {
}
}
break;
}


var G__25003 = seq__24823_24919;
var G__25004 = chunk__24824_24920;
var G__25005 = count__24825_24921;
var G__25006 = (i__24826_24922 + (1));
seq__24823_24919 = G__25003;
chunk__24824_24920 = G__25004;
count__24825_24921 = G__25005;
i__24826_24922 = G__25006;
continue;
} else {
var temp__5457__auto___25007 = cljs.core.seq.call(null,seq__24823_24919);
if(temp__5457__auto___25007){
var seq__24823_25008__$1 = temp__5457__auto___25007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24823_25008__$1)){
var c__4321__auto___25009 = cljs.core.chunk_first.call(null,seq__24823_25008__$1);
var G__25010 = cljs.core.chunk_rest.call(null,seq__24823_25008__$1);
var G__25011 = c__4321__auto___25009;
var G__25012 = cljs.core.count.call(null,c__4321__auto___25009);
var G__25013 = (0);
seq__24823_24919 = G__25010;
chunk__24824_24920 = G__25011;
count__24825_24921 = G__25012;
i__24826_24922 = G__25013;
continue;
} else {
var vec__24863_25014 = cljs.core.first.call(null,seq__24823_25008__$1);
var source_idx_25015 = cljs.core.nth.call(null,vec__24863_25014,(0),null);
var vec__24866_25016 = cljs.core.nth.call(null,vec__24863_25014,(1),null);
var __25017 = cljs.core.nth.call(null,vec__24866_25016,(0),null);
var lines_25018__$1 = cljs.core.nth.call(null,vec__24866_25016,(1),null);
var seq__24869_25019 = cljs.core.seq.call(null,lines_25018__$1);
var chunk__24870_25020 = null;
var count__24871_25021 = (0);
var i__24872_25022 = (0);
while(true){
if((i__24872_25022 < count__24871_25021)){
var vec__24873_25023 = cljs.core._nth.call(null,chunk__24870_25020,i__24872_25022);
var line_25024 = cljs.core.nth.call(null,vec__24873_25023,(0),null);
var cols_25025 = cljs.core.nth.call(null,vec__24873_25023,(1),null);
var seq__24876_25026 = cljs.core.seq.call(null,cols_25025);
var chunk__24877_25027 = null;
var count__24878_25028 = (0);
var i__24879_25029 = (0);
while(true){
if((i__24879_25029 < count__24878_25028)){
var vec__24880_25030 = cljs.core._nth.call(null,chunk__24877_25027,i__24879_25029);
var col_25031 = cljs.core.nth.call(null,vec__24880_25030,(0),null);
var infos_25032 = cljs.core.nth.call(null,vec__24880_25030,(1),null);
encode_cols.call(null,infos_25032,source_idx_25015,line_25024,col_25031);


var G__25033 = seq__24876_25026;
var G__25034 = chunk__24877_25027;
var G__25035 = count__24878_25028;
var G__25036 = (i__24879_25029 + (1));
seq__24876_25026 = G__25033;
chunk__24877_25027 = G__25034;
count__24878_25028 = G__25035;
i__24879_25029 = G__25036;
continue;
} else {
var temp__5457__auto___25037__$1 = cljs.core.seq.call(null,seq__24876_25026);
if(temp__5457__auto___25037__$1){
var seq__24876_25038__$1 = temp__5457__auto___25037__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24876_25038__$1)){
var c__4321__auto___25039 = cljs.core.chunk_first.call(null,seq__24876_25038__$1);
var G__25040 = cljs.core.chunk_rest.call(null,seq__24876_25038__$1);
var G__25041 = c__4321__auto___25039;
var G__25042 = cljs.core.count.call(null,c__4321__auto___25039);
var G__25043 = (0);
seq__24876_25026 = G__25040;
chunk__24877_25027 = G__25041;
count__24878_25028 = G__25042;
i__24879_25029 = G__25043;
continue;
} else {
var vec__24883_25044 = cljs.core.first.call(null,seq__24876_25038__$1);
var col_25045 = cljs.core.nth.call(null,vec__24883_25044,(0),null);
var infos_25046 = cljs.core.nth.call(null,vec__24883_25044,(1),null);
encode_cols.call(null,infos_25046,source_idx_25015,line_25024,col_25045);


var G__25047 = cljs.core.next.call(null,seq__24876_25038__$1);
var G__25048 = null;
var G__25049 = (0);
var G__25050 = (0);
seq__24876_25026 = G__25047;
chunk__24877_25027 = G__25048;
count__24878_25028 = G__25049;
i__24879_25029 = G__25050;
continue;
}
} else {
}
}
break;
}


var G__25051 = seq__24869_25019;
var G__25052 = chunk__24870_25020;
var G__25053 = count__24871_25021;
var G__25054 = (i__24872_25022 + (1));
seq__24869_25019 = G__25051;
chunk__24870_25020 = G__25052;
count__24871_25021 = G__25053;
i__24872_25022 = G__25054;
continue;
} else {
var temp__5457__auto___25055__$1 = cljs.core.seq.call(null,seq__24869_25019);
if(temp__5457__auto___25055__$1){
var seq__24869_25056__$1 = temp__5457__auto___25055__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24869_25056__$1)){
var c__4321__auto___25057 = cljs.core.chunk_first.call(null,seq__24869_25056__$1);
var G__25058 = cljs.core.chunk_rest.call(null,seq__24869_25056__$1);
var G__25059 = c__4321__auto___25057;
var G__25060 = cljs.core.count.call(null,c__4321__auto___25057);
var G__25061 = (0);
seq__24869_25019 = G__25058;
chunk__24870_25020 = G__25059;
count__24871_25021 = G__25060;
i__24872_25022 = G__25061;
continue;
} else {
var vec__24886_25062 = cljs.core.first.call(null,seq__24869_25056__$1);
var line_25063 = cljs.core.nth.call(null,vec__24886_25062,(0),null);
var cols_25064 = cljs.core.nth.call(null,vec__24886_25062,(1),null);
var seq__24889_25065 = cljs.core.seq.call(null,cols_25064);
var chunk__24890_25066 = null;
var count__24891_25067 = (0);
var i__24892_25068 = (0);
while(true){
if((i__24892_25068 < count__24891_25067)){
var vec__24893_25069 = cljs.core._nth.call(null,chunk__24890_25066,i__24892_25068);
var col_25070 = cljs.core.nth.call(null,vec__24893_25069,(0),null);
var infos_25071 = cljs.core.nth.call(null,vec__24893_25069,(1),null);
encode_cols.call(null,infos_25071,source_idx_25015,line_25063,col_25070);


var G__25072 = seq__24889_25065;
var G__25073 = chunk__24890_25066;
var G__25074 = count__24891_25067;
var G__25075 = (i__24892_25068 + (1));
seq__24889_25065 = G__25072;
chunk__24890_25066 = G__25073;
count__24891_25067 = G__25074;
i__24892_25068 = G__25075;
continue;
} else {
var temp__5457__auto___25076__$2 = cljs.core.seq.call(null,seq__24889_25065);
if(temp__5457__auto___25076__$2){
var seq__24889_25077__$1 = temp__5457__auto___25076__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24889_25077__$1)){
var c__4321__auto___25078 = cljs.core.chunk_first.call(null,seq__24889_25077__$1);
var G__25079 = cljs.core.chunk_rest.call(null,seq__24889_25077__$1);
var G__25080 = c__4321__auto___25078;
var G__25081 = cljs.core.count.call(null,c__4321__auto___25078);
var G__25082 = (0);
seq__24889_25065 = G__25079;
chunk__24890_25066 = G__25080;
count__24891_25067 = G__25081;
i__24892_25068 = G__25082;
continue;
} else {
var vec__24896_25083 = cljs.core.first.call(null,seq__24889_25077__$1);
var col_25084 = cljs.core.nth.call(null,vec__24896_25083,(0),null);
var infos_25085 = cljs.core.nth.call(null,vec__24896_25083,(1),null);
encode_cols.call(null,infos_25085,source_idx_25015,line_25063,col_25084);


var G__25086 = cljs.core.next.call(null,seq__24889_25077__$1);
var G__25087 = null;
var G__25088 = (0);
var G__25089 = (0);
seq__24889_25065 = G__25086;
chunk__24890_25066 = G__25087;
count__24891_25067 = G__25088;
i__24892_25068 = G__25089;
continue;
}
} else {
}
}
break;
}


var G__25090 = cljs.core.next.call(null,seq__24869_25056__$1);
var G__25091 = null;
var G__25092 = (0);
var G__25093 = (0);
seq__24869_25019 = G__25090;
chunk__24870_25020 = G__25091;
count__24871_25021 = G__25092;
i__24872_25022 = G__25093;
continue;
}
} else {
}
}
break;
}


var G__25094 = cljs.core.next.call(null,seq__24823_25008__$1);
var G__25095 = null;
var G__25096 = (0);
var G__25097 = (0);
seq__24823_24919 = G__25094;
chunk__24824_24920 = G__25095;
count__24825_24921 = G__25096;
i__24826_24922 = G__25097;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__24899 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24816_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24816_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24817_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__24817_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24818_SHARP_){
return clojure.string.join.call(null,",",p1__24818_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__24900 = G__24899;
goog.object.set(G__24900,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__24900;
} else {
return G__24899;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__25098 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__25098,(0),null);
var col_map = cljs.core.nth.call(null,vec__25098,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__25101 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__25101,(0),null);
var infos = cljs.core.nth.call(null,vec__25101,(1),null);
var G__25107 = cljs.core.next.call(null,col_map_seq);
var G__25108 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__25101,col,infos,vec__25098,line,col_map){
return (function (v,p__25104){
var map__25105 = p__25104;
var map__25105__$1 = ((((!((map__25105 == null)))?(((((map__25105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25105):map__25105);
var gline = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__25105__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__25101,col,infos,vec__25098,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25107;
new_cols = G__25108;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25109 = cljs.core.next.call(null,line_map_seq);
var G__25110 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__25109;
new_lines = G__25110;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__25111_25173 = cljs.core.seq.call(null,reverse_map);
var chunk__25112_25174 = null;
var count__25113_25175 = (0);
var i__25114_25176 = (0);
while(true){
if((i__25114_25176 < count__25113_25175)){
var vec__25115_25177 = cljs.core._nth.call(null,chunk__25112_25174,i__25114_25176);
var line_25178 = cljs.core.nth.call(null,vec__25115_25177,(0),null);
var columns_25179 = cljs.core.nth.call(null,vec__25115_25177,(1),null);
var seq__25118_25180 = cljs.core.seq.call(null,columns_25179);
var chunk__25119_25181 = null;
var count__25120_25182 = (0);
var i__25121_25183 = (0);
while(true){
if((i__25121_25183 < count__25120_25182)){
var vec__25122_25184 = cljs.core._nth.call(null,chunk__25119_25181,i__25121_25183);
var column_25185 = cljs.core.nth.call(null,vec__25122_25184,(0),null);
var column_info_25186 = cljs.core.nth.call(null,vec__25122_25184,(1),null);
var seq__25125_25187 = cljs.core.seq.call(null,column_info_25186);
var chunk__25126_25188 = null;
var count__25127_25189 = (0);
var i__25128_25190 = (0);
while(true){
if((i__25128_25190 < count__25127_25189)){
var map__25129_25191 = cljs.core._nth.call(null,chunk__25126_25188,i__25128_25190);
var map__25129_25192__$1 = ((((!((map__25129_25191 == null)))?(((((map__25129_25191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25129_25191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25129_25191):map__25129_25191);
var gline_25193 = cljs.core.get.call(null,map__25129_25192__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25194 = cljs.core.get.call(null,map__25129_25192__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25195 = cljs.core.get.call(null,map__25129_25192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25193], null),cljs.core.fnil.call(null,((function (seq__25125_25187,chunk__25126_25188,count__25127_25189,i__25128_25190,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25129_25191,map__25129_25192__$1,gline_25193,gcol_25194,name_25195,vec__25122_25184,column_25185,column_info_25186,vec__25115_25177,line_25178,columns_25179,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25194], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25178,new cljs.core.Keyword(null,"col","col",-1959363084),column_25185,new cljs.core.Keyword(null,"name","name",1843675177),name_25195], null));
});})(seq__25125_25187,chunk__25126_25188,count__25127_25189,i__25128_25190,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25129_25191,map__25129_25192__$1,gline_25193,gcol_25194,name_25195,vec__25122_25184,column_25185,column_info_25186,vec__25115_25177,line_25178,columns_25179,inverted))
,cljs.core.sorted_map.call(null)));


var G__25196 = seq__25125_25187;
var G__25197 = chunk__25126_25188;
var G__25198 = count__25127_25189;
var G__25199 = (i__25128_25190 + (1));
seq__25125_25187 = G__25196;
chunk__25126_25188 = G__25197;
count__25127_25189 = G__25198;
i__25128_25190 = G__25199;
continue;
} else {
var temp__5457__auto___25200 = cljs.core.seq.call(null,seq__25125_25187);
if(temp__5457__auto___25200){
var seq__25125_25201__$1 = temp__5457__auto___25200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125_25201__$1)){
var c__4321__auto___25202 = cljs.core.chunk_first.call(null,seq__25125_25201__$1);
var G__25203 = cljs.core.chunk_rest.call(null,seq__25125_25201__$1);
var G__25204 = c__4321__auto___25202;
var G__25205 = cljs.core.count.call(null,c__4321__auto___25202);
var G__25206 = (0);
seq__25125_25187 = G__25203;
chunk__25126_25188 = G__25204;
count__25127_25189 = G__25205;
i__25128_25190 = G__25206;
continue;
} else {
var map__25131_25207 = cljs.core.first.call(null,seq__25125_25201__$1);
var map__25131_25208__$1 = ((((!((map__25131_25207 == null)))?(((((map__25131_25207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25131_25207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25131_25207):map__25131_25207);
var gline_25209 = cljs.core.get.call(null,map__25131_25208__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25210 = cljs.core.get.call(null,map__25131_25208__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25211 = cljs.core.get.call(null,map__25131_25208__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25209], null),cljs.core.fnil.call(null,((function (seq__25125_25187,chunk__25126_25188,count__25127_25189,i__25128_25190,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25131_25207,map__25131_25208__$1,gline_25209,gcol_25210,name_25211,seq__25125_25201__$1,temp__5457__auto___25200,vec__25122_25184,column_25185,column_info_25186,vec__25115_25177,line_25178,columns_25179,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25210], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25178,new cljs.core.Keyword(null,"col","col",-1959363084),column_25185,new cljs.core.Keyword(null,"name","name",1843675177),name_25211], null));
});})(seq__25125_25187,chunk__25126_25188,count__25127_25189,i__25128_25190,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25131_25207,map__25131_25208__$1,gline_25209,gcol_25210,name_25211,seq__25125_25201__$1,temp__5457__auto___25200,vec__25122_25184,column_25185,column_info_25186,vec__25115_25177,line_25178,columns_25179,inverted))
,cljs.core.sorted_map.call(null)));


var G__25212 = cljs.core.next.call(null,seq__25125_25201__$1);
var G__25213 = null;
var G__25214 = (0);
var G__25215 = (0);
seq__25125_25187 = G__25212;
chunk__25126_25188 = G__25213;
count__25127_25189 = G__25214;
i__25128_25190 = G__25215;
continue;
}
} else {
}
}
break;
}


var G__25216 = seq__25118_25180;
var G__25217 = chunk__25119_25181;
var G__25218 = count__25120_25182;
var G__25219 = (i__25121_25183 + (1));
seq__25118_25180 = G__25216;
chunk__25119_25181 = G__25217;
count__25120_25182 = G__25218;
i__25121_25183 = G__25219;
continue;
} else {
var temp__5457__auto___25220 = cljs.core.seq.call(null,seq__25118_25180);
if(temp__5457__auto___25220){
var seq__25118_25221__$1 = temp__5457__auto___25220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25118_25221__$1)){
var c__4321__auto___25222 = cljs.core.chunk_first.call(null,seq__25118_25221__$1);
var G__25223 = cljs.core.chunk_rest.call(null,seq__25118_25221__$1);
var G__25224 = c__4321__auto___25222;
var G__25225 = cljs.core.count.call(null,c__4321__auto___25222);
var G__25226 = (0);
seq__25118_25180 = G__25223;
chunk__25119_25181 = G__25224;
count__25120_25182 = G__25225;
i__25121_25183 = G__25226;
continue;
} else {
var vec__25133_25227 = cljs.core.first.call(null,seq__25118_25221__$1);
var column_25228 = cljs.core.nth.call(null,vec__25133_25227,(0),null);
var column_info_25229 = cljs.core.nth.call(null,vec__25133_25227,(1),null);
var seq__25136_25230 = cljs.core.seq.call(null,column_info_25229);
var chunk__25137_25231 = null;
var count__25138_25232 = (0);
var i__25139_25233 = (0);
while(true){
if((i__25139_25233 < count__25138_25232)){
var map__25140_25234 = cljs.core._nth.call(null,chunk__25137_25231,i__25139_25233);
var map__25140_25235__$1 = ((((!((map__25140_25234 == null)))?(((((map__25140_25234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25140_25234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25140_25234):map__25140_25234);
var gline_25236 = cljs.core.get.call(null,map__25140_25235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25237 = cljs.core.get.call(null,map__25140_25235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25238 = cljs.core.get.call(null,map__25140_25235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25236], null),cljs.core.fnil.call(null,((function (seq__25136_25230,chunk__25137_25231,count__25138_25232,i__25139_25233,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25140_25234,map__25140_25235__$1,gline_25236,gcol_25237,name_25238,vec__25133_25227,column_25228,column_info_25229,seq__25118_25221__$1,temp__5457__auto___25220,vec__25115_25177,line_25178,columns_25179,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25237], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25178,new cljs.core.Keyword(null,"col","col",-1959363084),column_25228,new cljs.core.Keyword(null,"name","name",1843675177),name_25238], null));
});})(seq__25136_25230,chunk__25137_25231,count__25138_25232,i__25139_25233,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25140_25234,map__25140_25235__$1,gline_25236,gcol_25237,name_25238,vec__25133_25227,column_25228,column_info_25229,seq__25118_25221__$1,temp__5457__auto___25220,vec__25115_25177,line_25178,columns_25179,inverted))
,cljs.core.sorted_map.call(null)));


var G__25239 = seq__25136_25230;
var G__25240 = chunk__25137_25231;
var G__25241 = count__25138_25232;
var G__25242 = (i__25139_25233 + (1));
seq__25136_25230 = G__25239;
chunk__25137_25231 = G__25240;
count__25138_25232 = G__25241;
i__25139_25233 = G__25242;
continue;
} else {
var temp__5457__auto___25243__$1 = cljs.core.seq.call(null,seq__25136_25230);
if(temp__5457__auto___25243__$1){
var seq__25136_25244__$1 = temp__5457__auto___25243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25136_25244__$1)){
var c__4321__auto___25245 = cljs.core.chunk_first.call(null,seq__25136_25244__$1);
var G__25246 = cljs.core.chunk_rest.call(null,seq__25136_25244__$1);
var G__25247 = c__4321__auto___25245;
var G__25248 = cljs.core.count.call(null,c__4321__auto___25245);
var G__25249 = (0);
seq__25136_25230 = G__25246;
chunk__25137_25231 = G__25247;
count__25138_25232 = G__25248;
i__25139_25233 = G__25249;
continue;
} else {
var map__25142_25250 = cljs.core.first.call(null,seq__25136_25244__$1);
var map__25142_25251__$1 = ((((!((map__25142_25250 == null)))?(((((map__25142_25250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25142_25250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142_25250):map__25142_25250);
var gline_25252 = cljs.core.get.call(null,map__25142_25251__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25253 = cljs.core.get.call(null,map__25142_25251__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25254 = cljs.core.get.call(null,map__25142_25251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25252], null),cljs.core.fnil.call(null,((function (seq__25136_25230,chunk__25137_25231,count__25138_25232,i__25139_25233,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25142_25250,map__25142_25251__$1,gline_25252,gcol_25253,name_25254,seq__25136_25244__$1,temp__5457__auto___25243__$1,vec__25133_25227,column_25228,column_info_25229,seq__25118_25221__$1,temp__5457__auto___25220,vec__25115_25177,line_25178,columns_25179,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25253], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25178,new cljs.core.Keyword(null,"col","col",-1959363084),column_25228,new cljs.core.Keyword(null,"name","name",1843675177),name_25254], null));
});})(seq__25136_25230,chunk__25137_25231,count__25138_25232,i__25139_25233,seq__25118_25180,chunk__25119_25181,count__25120_25182,i__25121_25183,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25142_25250,map__25142_25251__$1,gline_25252,gcol_25253,name_25254,seq__25136_25244__$1,temp__5457__auto___25243__$1,vec__25133_25227,column_25228,column_info_25229,seq__25118_25221__$1,temp__5457__auto___25220,vec__25115_25177,line_25178,columns_25179,inverted))
,cljs.core.sorted_map.call(null)));


var G__25255 = cljs.core.next.call(null,seq__25136_25244__$1);
var G__25256 = null;
var G__25257 = (0);
var G__25258 = (0);
seq__25136_25230 = G__25255;
chunk__25137_25231 = G__25256;
count__25138_25232 = G__25257;
i__25139_25233 = G__25258;
continue;
}
} else {
}
}
break;
}


var G__25259 = cljs.core.next.call(null,seq__25118_25221__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__25118_25180 = G__25259;
chunk__25119_25181 = G__25260;
count__25120_25182 = G__25261;
i__25121_25183 = G__25262;
continue;
}
} else {
}
}
break;
}


var G__25263 = seq__25111_25173;
var G__25264 = chunk__25112_25174;
var G__25265 = count__25113_25175;
var G__25266 = (i__25114_25176 + (1));
seq__25111_25173 = G__25263;
chunk__25112_25174 = G__25264;
count__25113_25175 = G__25265;
i__25114_25176 = G__25266;
continue;
} else {
var temp__5457__auto___25267 = cljs.core.seq.call(null,seq__25111_25173);
if(temp__5457__auto___25267){
var seq__25111_25268__$1 = temp__5457__auto___25267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25111_25268__$1)){
var c__4321__auto___25269 = cljs.core.chunk_first.call(null,seq__25111_25268__$1);
var G__25270 = cljs.core.chunk_rest.call(null,seq__25111_25268__$1);
var G__25271 = c__4321__auto___25269;
var G__25272 = cljs.core.count.call(null,c__4321__auto___25269);
var G__25273 = (0);
seq__25111_25173 = G__25270;
chunk__25112_25174 = G__25271;
count__25113_25175 = G__25272;
i__25114_25176 = G__25273;
continue;
} else {
var vec__25144_25274 = cljs.core.first.call(null,seq__25111_25268__$1);
var line_25275 = cljs.core.nth.call(null,vec__25144_25274,(0),null);
var columns_25276 = cljs.core.nth.call(null,vec__25144_25274,(1),null);
var seq__25147_25277 = cljs.core.seq.call(null,columns_25276);
var chunk__25148_25278 = null;
var count__25149_25279 = (0);
var i__25150_25280 = (0);
while(true){
if((i__25150_25280 < count__25149_25279)){
var vec__25151_25281 = cljs.core._nth.call(null,chunk__25148_25278,i__25150_25280);
var column_25282 = cljs.core.nth.call(null,vec__25151_25281,(0),null);
var column_info_25283 = cljs.core.nth.call(null,vec__25151_25281,(1),null);
var seq__25154_25284 = cljs.core.seq.call(null,column_info_25283);
var chunk__25155_25285 = null;
var count__25156_25286 = (0);
var i__25157_25287 = (0);
while(true){
if((i__25157_25287 < count__25156_25286)){
var map__25158_25288 = cljs.core._nth.call(null,chunk__25155_25285,i__25157_25287);
var map__25158_25289__$1 = ((((!((map__25158_25288 == null)))?(((((map__25158_25288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25158_25288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25158_25288):map__25158_25288);
var gline_25290 = cljs.core.get.call(null,map__25158_25289__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25291 = cljs.core.get.call(null,map__25158_25289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25292 = cljs.core.get.call(null,map__25158_25289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25290], null),cljs.core.fnil.call(null,((function (seq__25154_25284,chunk__25155_25285,count__25156_25286,i__25157_25287,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25158_25288,map__25158_25289__$1,gline_25290,gcol_25291,name_25292,vec__25151_25281,column_25282,column_info_25283,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25291], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25275,new cljs.core.Keyword(null,"col","col",-1959363084),column_25282,new cljs.core.Keyword(null,"name","name",1843675177),name_25292], null));
});})(seq__25154_25284,chunk__25155_25285,count__25156_25286,i__25157_25287,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25158_25288,map__25158_25289__$1,gline_25290,gcol_25291,name_25292,vec__25151_25281,column_25282,column_info_25283,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted))
,cljs.core.sorted_map.call(null)));


var G__25293 = seq__25154_25284;
var G__25294 = chunk__25155_25285;
var G__25295 = count__25156_25286;
var G__25296 = (i__25157_25287 + (1));
seq__25154_25284 = G__25293;
chunk__25155_25285 = G__25294;
count__25156_25286 = G__25295;
i__25157_25287 = G__25296;
continue;
} else {
var temp__5457__auto___25297__$1 = cljs.core.seq.call(null,seq__25154_25284);
if(temp__5457__auto___25297__$1){
var seq__25154_25298__$1 = temp__5457__auto___25297__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25154_25298__$1)){
var c__4321__auto___25299 = cljs.core.chunk_first.call(null,seq__25154_25298__$1);
var G__25300 = cljs.core.chunk_rest.call(null,seq__25154_25298__$1);
var G__25301 = c__4321__auto___25299;
var G__25302 = cljs.core.count.call(null,c__4321__auto___25299);
var G__25303 = (0);
seq__25154_25284 = G__25300;
chunk__25155_25285 = G__25301;
count__25156_25286 = G__25302;
i__25157_25287 = G__25303;
continue;
} else {
var map__25160_25304 = cljs.core.first.call(null,seq__25154_25298__$1);
var map__25160_25305__$1 = ((((!((map__25160_25304 == null)))?(((((map__25160_25304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25160_25304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25160_25304):map__25160_25304);
var gline_25306 = cljs.core.get.call(null,map__25160_25305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25307 = cljs.core.get.call(null,map__25160_25305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25308 = cljs.core.get.call(null,map__25160_25305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25306], null),cljs.core.fnil.call(null,((function (seq__25154_25284,chunk__25155_25285,count__25156_25286,i__25157_25287,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25160_25304,map__25160_25305__$1,gline_25306,gcol_25307,name_25308,seq__25154_25298__$1,temp__5457__auto___25297__$1,vec__25151_25281,column_25282,column_info_25283,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25307], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25275,new cljs.core.Keyword(null,"col","col",-1959363084),column_25282,new cljs.core.Keyword(null,"name","name",1843675177),name_25308], null));
});})(seq__25154_25284,chunk__25155_25285,count__25156_25286,i__25157_25287,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25160_25304,map__25160_25305__$1,gline_25306,gcol_25307,name_25308,seq__25154_25298__$1,temp__5457__auto___25297__$1,vec__25151_25281,column_25282,column_info_25283,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted))
,cljs.core.sorted_map.call(null)));


var G__25309 = cljs.core.next.call(null,seq__25154_25298__$1);
var G__25310 = null;
var G__25311 = (0);
var G__25312 = (0);
seq__25154_25284 = G__25309;
chunk__25155_25285 = G__25310;
count__25156_25286 = G__25311;
i__25157_25287 = G__25312;
continue;
}
} else {
}
}
break;
}


var G__25313 = seq__25147_25277;
var G__25314 = chunk__25148_25278;
var G__25315 = count__25149_25279;
var G__25316 = (i__25150_25280 + (1));
seq__25147_25277 = G__25313;
chunk__25148_25278 = G__25314;
count__25149_25279 = G__25315;
i__25150_25280 = G__25316;
continue;
} else {
var temp__5457__auto___25317__$1 = cljs.core.seq.call(null,seq__25147_25277);
if(temp__5457__auto___25317__$1){
var seq__25147_25318__$1 = temp__5457__auto___25317__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25147_25318__$1)){
var c__4321__auto___25319 = cljs.core.chunk_first.call(null,seq__25147_25318__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25147_25318__$1);
var G__25321 = c__4321__auto___25319;
var G__25322 = cljs.core.count.call(null,c__4321__auto___25319);
var G__25323 = (0);
seq__25147_25277 = G__25320;
chunk__25148_25278 = G__25321;
count__25149_25279 = G__25322;
i__25150_25280 = G__25323;
continue;
} else {
var vec__25162_25324 = cljs.core.first.call(null,seq__25147_25318__$1);
var column_25325 = cljs.core.nth.call(null,vec__25162_25324,(0),null);
var column_info_25326 = cljs.core.nth.call(null,vec__25162_25324,(1),null);
var seq__25165_25327 = cljs.core.seq.call(null,column_info_25326);
var chunk__25166_25328 = null;
var count__25167_25329 = (0);
var i__25168_25330 = (0);
while(true){
if((i__25168_25330 < count__25167_25329)){
var map__25169_25331 = cljs.core._nth.call(null,chunk__25166_25328,i__25168_25330);
var map__25169_25332__$1 = ((((!((map__25169_25331 == null)))?(((((map__25169_25331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25169_25331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25169_25331):map__25169_25331);
var gline_25333 = cljs.core.get.call(null,map__25169_25332__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25334 = cljs.core.get.call(null,map__25169_25332__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25335 = cljs.core.get.call(null,map__25169_25332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25333], null),cljs.core.fnil.call(null,((function (seq__25165_25327,chunk__25166_25328,count__25167_25329,i__25168_25330,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25169_25331,map__25169_25332__$1,gline_25333,gcol_25334,name_25335,vec__25162_25324,column_25325,column_info_25326,seq__25147_25318__$1,temp__5457__auto___25317__$1,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25334], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25275,new cljs.core.Keyword(null,"col","col",-1959363084),column_25325,new cljs.core.Keyword(null,"name","name",1843675177),name_25335], null));
});})(seq__25165_25327,chunk__25166_25328,count__25167_25329,i__25168_25330,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25169_25331,map__25169_25332__$1,gline_25333,gcol_25334,name_25335,vec__25162_25324,column_25325,column_info_25326,seq__25147_25318__$1,temp__5457__auto___25317__$1,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted))
,cljs.core.sorted_map.call(null)));


var G__25336 = seq__25165_25327;
var G__25337 = chunk__25166_25328;
var G__25338 = count__25167_25329;
var G__25339 = (i__25168_25330 + (1));
seq__25165_25327 = G__25336;
chunk__25166_25328 = G__25337;
count__25167_25329 = G__25338;
i__25168_25330 = G__25339;
continue;
} else {
var temp__5457__auto___25340__$2 = cljs.core.seq.call(null,seq__25165_25327);
if(temp__5457__auto___25340__$2){
var seq__25165_25341__$1 = temp__5457__auto___25340__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25165_25341__$1)){
var c__4321__auto___25342 = cljs.core.chunk_first.call(null,seq__25165_25341__$1);
var G__25343 = cljs.core.chunk_rest.call(null,seq__25165_25341__$1);
var G__25344 = c__4321__auto___25342;
var G__25345 = cljs.core.count.call(null,c__4321__auto___25342);
var G__25346 = (0);
seq__25165_25327 = G__25343;
chunk__25166_25328 = G__25344;
count__25167_25329 = G__25345;
i__25168_25330 = G__25346;
continue;
} else {
var map__25171_25347 = cljs.core.first.call(null,seq__25165_25341__$1);
var map__25171_25348__$1 = ((((!((map__25171_25347 == null)))?(((((map__25171_25347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25171_25347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25171_25347):map__25171_25347);
var gline_25349 = cljs.core.get.call(null,map__25171_25348__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_25350 = cljs.core.get.call(null,map__25171_25348__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_25351 = cljs.core.get.call(null,map__25171_25348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25349], null),cljs.core.fnil.call(null,((function (seq__25165_25327,chunk__25166_25328,count__25167_25329,i__25168_25330,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25171_25347,map__25171_25348__$1,gline_25349,gcol_25350,name_25351,seq__25165_25341__$1,temp__5457__auto___25340__$2,vec__25162_25324,column_25325,column_info_25326,seq__25147_25318__$1,temp__5457__auto___25317__$1,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25350], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_25275,new cljs.core.Keyword(null,"col","col",-1959363084),column_25325,new cljs.core.Keyword(null,"name","name",1843675177),name_25351], null));
});})(seq__25165_25327,chunk__25166_25328,count__25167_25329,i__25168_25330,seq__25147_25277,chunk__25148_25278,count__25149_25279,i__25150_25280,seq__25111_25173,chunk__25112_25174,count__25113_25175,i__25114_25176,map__25171_25347,map__25171_25348__$1,gline_25349,gcol_25350,name_25351,seq__25165_25341__$1,temp__5457__auto___25340__$2,vec__25162_25324,column_25325,column_info_25326,seq__25147_25318__$1,temp__5457__auto___25317__$1,vec__25144_25274,line_25275,columns_25276,seq__25111_25268__$1,temp__5457__auto___25267,inverted))
,cljs.core.sorted_map.call(null)));


var G__25352 = cljs.core.next.call(null,seq__25165_25341__$1);
var G__25353 = null;
var G__25354 = (0);
var G__25355 = (0);
seq__25165_25327 = G__25352;
chunk__25166_25328 = G__25353;
count__25167_25329 = G__25354;
i__25168_25330 = G__25355;
continue;
}
} else {
}
}
break;
}


var G__25356 = cljs.core.next.call(null,seq__25147_25318__$1);
var G__25357 = null;
var G__25358 = (0);
var G__25359 = (0);
seq__25147_25277 = G__25356;
chunk__25148_25278 = G__25357;
count__25149_25279 = G__25358;
i__25150_25280 = G__25359;
continue;
}
} else {
}
}
break;
}


var G__25360 = cljs.core.next.call(null,seq__25111_25268__$1);
var G__25361 = null;
var G__25362 = (0);
var G__25363 = (0);
seq__25111_25173 = G__25360;
chunk__25112_25174 = G__25361;
count__25113_25175 = G__25362;
i__25114_25176 = G__25363;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1525291306550
