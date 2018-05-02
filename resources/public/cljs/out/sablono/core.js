// Compiled by ClojureScript 1.10.126 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__35787__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35784 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35785 = cljs.core.seq.call(null,vec__35784);
var first__35786 = cljs.core.first.call(null,seq__35785);
var seq__35785__$1 = cljs.core.next.call(null,seq__35785);
var tag = first__35786;
var body = seq__35785__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35788__i = 0, G__35788__a = new Array(arguments.length -  0);
while (G__35788__i < G__35788__a.length) {G__35788__a[G__35788__i] = arguments[G__35788__i + 0]; ++G__35788__i;}
  args = new cljs.core.IndexedSeq(G__35788__a,0,null);
} 
return G__35787__delegate.call(this,args);};
G__35787.cljs$lang$maxFixedArity = 0;
G__35787.cljs$lang$applyTo = (function (arglist__35789){
var args = cljs.core.seq(arglist__35789);
return G__35787__delegate(args);
});
G__35787.cljs$core$IFn$_invoke$arity$variadic = G__35787__delegate;
return G__35787;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4294__auto__ = (function sablono$core$update_arglists_$_iter__35790(s__35791){
return (new cljs.core.LazySeq(null,(function (){
var s__35791__$1 = s__35791;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35791__$1);
if(temp__5457__auto__){
var s__35791__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35791__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__35791__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__35793 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__35792 = (0);
while(true){
if((i__35792 < size__4293__auto__)){
var args = cljs.core._nth.call(null,c__4292__auto__,i__35792);
cljs.core.chunk_append.call(null,b__35793,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35794 = (i__35792 + (1));
i__35792 = G__35794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35793),sablono$core$update_arglists_$_iter__35790.call(null,cljs.core.chunk_rest.call(null,s__35791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35793),null);
}
} else {
var args = cljs.core.first.call(null,s__35791__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35790.call(null,cljs.core.rest.call(null,s__35791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4294__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35800 = arguments.length;
var i__4500__auto___35801 = (0);
while(true){
if((i__4500__auto___35801 < len__4499__auto___35800)){
args__4502__auto__.push((arguments[i__4500__auto___35801]));

var G__35802 = (i__4500__auto___35801 + (1));
i__4500__auto___35801 = G__35802;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4294__auto__ = (function sablono$core$iter__35796(s__35797){
return (new cljs.core.LazySeq(null,(function (){
var s__35797__$1 = s__35797;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35797__$1);
if(temp__5457__auto__){
var s__35797__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35797__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__35797__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__35799 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__35798 = (0);
while(true){
if((i__35798 < size__4293__auto__)){
var style = cljs.core._nth.call(null,c__4292__auto__,i__35798);
cljs.core.chunk_append.call(null,b__35799,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35803 = (i__35798 + (1));
i__35798 = G__35803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35799),sablono$core$iter__35796.call(null,cljs.core.chunk_rest.call(null,s__35797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35799),null);
}
} else {
var style = cljs.core.first.call(null,s__35797__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35796.call(null,cljs.core.rest.call(null,s__35797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4294__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq35795){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35795));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to35804 = (function sablono$core$link_to35804(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35807 = arguments.length;
var i__4500__auto___35808 = (0);
while(true){
if((i__4500__auto___35808 < len__4499__auto___35807)){
args__4502__auto__.push((arguments[i__4500__auto___35808]));

var G__35809 = (i__4500__auto___35808 + (1));
i__4500__auto___35808 = G__35809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35804.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to35804.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35804.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35804.cljs$lang$applyTo = (function (seq35805){
var G__35806 = cljs.core.first.call(null,seq35805);
var seq35805__$1 = cljs.core.next.call(null,seq35805);
return sablono.core.link_to35804.cljs$core$IFn$_invoke$arity$variadic(G__35806,seq35805__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35804);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35810 = (function sablono$core$mail_to35810(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35817 = arguments.length;
var i__4500__auto___35818 = (0);
while(true){
if((i__4500__auto___35818 < len__4499__auto___35817)){
args__4502__auto__.push((arguments[i__4500__auto___35818]));

var G__35819 = (i__4500__auto___35818 + (1));
i__4500__auto___35818 = G__35819;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35810.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to35810.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35813){
var vec__35814 = p__35813;
var content = cljs.core.nth.call(null,vec__35814,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3924__auto__ = content;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35810.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35810.cljs$lang$applyTo = (function (seq35811){
var G__35812 = cljs.core.first.call(null,seq35811);
var seq35811__$1 = cljs.core.next.call(null,seq35811);
return sablono.core.mail_to35810.cljs$core$IFn$_invoke$arity$variadic(G__35812,seq35811__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35810);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35820 = (function sablono$core$unordered_list35820(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4294__auto__ = (function sablono$core$unordered_list35820_$_iter__35821(s__35822){
return (new cljs.core.LazySeq(null,(function (){
var s__35822__$1 = s__35822;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35822__$1);
if(temp__5457__auto__){
var s__35822__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35822__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__35822__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__35824 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__35823 = (0);
while(true){
if((i__35823 < size__4293__auto__)){
var x = cljs.core._nth.call(null,c__4292__auto__,i__35823);
cljs.core.chunk_append.call(null,b__35824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35825 = (i__35823 + (1));
i__35823 = G__35825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35824),sablono$core$unordered_list35820_$_iter__35821.call(null,cljs.core.chunk_rest.call(null,s__35822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35824),null);
}
} else {
var x = cljs.core.first.call(null,s__35822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35820_$_iter__35821.call(null,cljs.core.rest.call(null,s__35822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4294__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35820);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35826 = (function sablono$core$ordered_list35826(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4294__auto__ = (function sablono$core$ordered_list35826_$_iter__35827(s__35828){
return (new cljs.core.LazySeq(null,(function (){
var s__35828__$1 = s__35828;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35828__$1);
if(temp__5457__auto__){
var s__35828__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35828__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__35828__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__35830 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__35829 = (0);
while(true){
if((i__35829 < size__4293__auto__)){
var x = cljs.core._nth.call(null,c__4292__auto__,i__35829);
cljs.core.chunk_append.call(null,b__35830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35831 = (i__35829 + (1));
i__35829 = G__35831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35830),sablono$core$ordered_list35826_$_iter__35827.call(null,cljs.core.chunk_rest.call(null,s__35828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35830),null);
}
} else {
var x = cljs.core.first.call(null,s__35828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35826_$_iter__35827.call(null,cljs.core.rest.call(null,s__35828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4294__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35826);
/**
 * Create an image element.
 */
sablono.core.image35832 = (function sablono$core$image35832(var_args){
var G__35834 = arguments.length;
switch (G__35834) {
case 1:
return sablono.core.image35832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image35832.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35832.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35832.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35832);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35836_SHARP_,p2__35837_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35836_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35837_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35838_SHARP_,p2__35839_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35838_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35839_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__35841 = arguments.length;
switch (G__35841) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3924__auto__ = value;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field35843 = (function sablono$core$color_field35843(var_args){
var G__35845 = arguments.length;
switch (G__35845) {
case 1:
return sablono.core.color_field35843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field35843.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35604__auto__);
});

sablono.core.color_field35843.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.color_field35843.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35843);

/**
 * Creates a date input field.
 */
sablono.core.date_field35846 = (function sablono$core$date_field35846(var_args){
var G__35848 = arguments.length;
switch (G__35848) {
case 1:
return sablono.core.date_field35846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field35846.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35604__auto__);
});

sablono.core.date_field35846.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.date_field35846.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35846);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35849 = (function sablono$core$datetime_field35849(var_args){
var G__35851 = arguments.length;
switch (G__35851) {
case 1:
return sablono.core.datetime_field35849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field35849.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35604__auto__);
});

sablono.core.datetime_field35849.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.datetime_field35849.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35849);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35852 = (function sablono$core$datetime_local_field35852(var_args){
var G__35854 = arguments.length;
switch (G__35854) {
case 1:
return sablono.core.datetime_local_field35852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field35852.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35604__auto__);
});

sablono.core.datetime_local_field35852.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.datetime_local_field35852.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35852);

/**
 * Creates a email input field.
 */
sablono.core.email_field35855 = (function sablono$core$email_field35855(var_args){
var G__35857 = arguments.length;
switch (G__35857) {
case 1:
return sablono.core.email_field35855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field35855.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35604__auto__);
});

sablono.core.email_field35855.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.email_field35855.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35855);

/**
 * Creates a file input field.
 */
sablono.core.file_field35858 = (function sablono$core$file_field35858(var_args){
var G__35860 = arguments.length;
switch (G__35860) {
case 1:
return sablono.core.file_field35858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field35858.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35604__auto__);
});

sablono.core.file_field35858.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.file_field35858.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35858);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35861 = (function sablono$core$hidden_field35861(var_args){
var G__35863 = arguments.length;
switch (G__35863) {
case 1:
return sablono.core.hidden_field35861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field35861.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35604__auto__);
});

sablono.core.hidden_field35861.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.hidden_field35861.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35861);

/**
 * Creates a month input field.
 */
sablono.core.month_field35864 = (function sablono$core$month_field35864(var_args){
var G__35866 = arguments.length;
switch (G__35866) {
case 1:
return sablono.core.month_field35864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field35864.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35604__auto__);
});

sablono.core.month_field35864.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.month_field35864.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35864);

/**
 * Creates a number input field.
 */
sablono.core.number_field35867 = (function sablono$core$number_field35867(var_args){
var G__35869 = arguments.length;
switch (G__35869) {
case 1:
return sablono.core.number_field35867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field35867.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35604__auto__);
});

sablono.core.number_field35867.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.number_field35867.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35867);

/**
 * Creates a password input field.
 */
sablono.core.password_field35870 = (function sablono$core$password_field35870(var_args){
var G__35872 = arguments.length;
switch (G__35872) {
case 1:
return sablono.core.password_field35870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field35870.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35604__auto__);
});

sablono.core.password_field35870.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.password_field35870.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35870);

/**
 * Creates a range input field.
 */
sablono.core.range_field35873 = (function sablono$core$range_field35873(var_args){
var G__35875 = arguments.length;
switch (G__35875) {
case 1:
return sablono.core.range_field35873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field35873.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35604__auto__);
});

sablono.core.range_field35873.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.range_field35873.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35873);

/**
 * Creates a search input field.
 */
sablono.core.search_field35876 = (function sablono$core$search_field35876(var_args){
var G__35878 = arguments.length;
switch (G__35878) {
case 1:
return sablono.core.search_field35876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field35876.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35604__auto__);
});

sablono.core.search_field35876.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.search_field35876.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35876);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35879 = (function sablono$core$tel_field35879(var_args){
var G__35881 = arguments.length;
switch (G__35881) {
case 1:
return sablono.core.tel_field35879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field35879.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35604__auto__);
});

sablono.core.tel_field35879.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.tel_field35879.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35879);

/**
 * Creates a text input field.
 */
sablono.core.text_field35882 = (function sablono$core$text_field35882(var_args){
var G__35884 = arguments.length;
switch (G__35884) {
case 1:
return sablono.core.text_field35882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field35882.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35604__auto__);
});

sablono.core.text_field35882.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.text_field35882.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35882);

/**
 * Creates a time input field.
 */
sablono.core.time_field35885 = (function sablono$core$time_field35885(var_args){
var G__35887 = arguments.length;
switch (G__35887) {
case 1:
return sablono.core.time_field35885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field35885.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35604__auto__);
});

sablono.core.time_field35885.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.time_field35885.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35885);

/**
 * Creates a url input field.
 */
sablono.core.url_field35888 = (function sablono$core$url_field35888(var_args){
var G__35890 = arguments.length;
switch (G__35890) {
case 1:
return sablono.core.url_field35888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field35888.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35604__auto__);
});

sablono.core.url_field35888.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.url_field35888.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35888);

/**
 * Creates a week input field.
 */
sablono.core.week_field35891 = (function sablono$core$week_field35891(var_args){
var G__35893 = arguments.length;
switch (G__35893) {
case 1:
return sablono.core.week_field35891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field35891.cljs$core$IFn$_invoke$arity$1 = (function (name__35604__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35604__auto__);
});

sablono.core.week_field35891.cljs$core$IFn$_invoke$arity$2 = (function (name__35604__auto__,value__35605__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35604__auto__,value__35605__auto__);
});

sablono.core.week_field35891.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35891);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35911 = (function sablono$core$check_box35911(var_args){
var G__35913 = arguments.length;
switch (G__35913) {
case 1:
return sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35911.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35911.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35911);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35915 = (function sablono$core$radio_button35915(var_args){
var G__35917 = arguments.length;
switch (G__35917) {
case 1:
return sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35915.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35915.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35915);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35919 = (function sablono$core$select_options35919(coll){
var iter__4294__auto__ = (function sablono$core$select_options35919_$_iter__35920(s__35921){
return (new cljs.core.LazySeq(null,(function (){
var s__35921__$1 = s__35921;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35921__$1);
if(temp__5457__auto__){
var s__35921__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35921__$2)){
var c__4292__auto__ = cljs.core.chunk_first.call(null,s__35921__$2);
var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);
var b__35923 = cljs.core.chunk_buffer.call(null,size__4293__auto__);
if((function (){var i__35922 = (0);
while(true){
if((i__35922 < size__4293__auto__)){
var x = cljs.core._nth.call(null,c__4292__auto__,i__35922);
cljs.core.chunk_append.call(null,b__35923,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35924 = x;
var text = cljs.core.nth.call(null,vec__35924,(0),null);
var val = cljs.core.nth.call(null,vec__35924,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35924,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options35919.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35930 = (i__35922 + (1));
i__35922 = G__35930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35923),sablono$core$select_options35919_$_iter__35920.call(null,cljs.core.chunk_rest.call(null,s__35921__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35923),null);
}
} else {
var x = cljs.core.first.call(null,s__35921__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35927 = x;
var text = cljs.core.nth.call(null,vec__35927,(0),null);
var val = cljs.core.nth.call(null,vec__35927,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35927,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options35919.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35919_$_iter__35920.call(null,cljs.core.rest.call(null,s__35921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4294__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35919);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35931 = (function sablono$core$drop_down35931(var_args){
var G__35933 = arguments.length;
switch (G__35933) {
case 2:
return sablono.core.drop_down35931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35931.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down35931.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35931.call(null,name,options,null);
});

sablono.core.drop_down35931.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down35931.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35931);
/**
 * Creates a text area element.
 */
sablono.core.text_area35935 = (function sablono$core$text_area35935(var_args){
var G__35937 = arguments.length;
switch (G__35937) {
case 1:
return sablono.core.text_area35935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area35935.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area35935.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3924__auto__ = value;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area35935.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35935);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35939 = (function sablono$core$label35939(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35939);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35940 = (function sablono$core$submit_button35940(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35940);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35941 = (function sablono$core$reset_button35941(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35941);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35942 = (function sablono$core$form_to35942(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35949 = arguments.length;
var i__4500__auto___35950 = (0);
while(true){
if((i__4500__auto___35950 < len__4499__auto___35949)){
args__4502__auto__.push((arguments[i__4500__auto___35950]));

var G__35951 = (i__4500__auto___35950 + (1));
i__4500__auto___35950 = G__35951;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35942.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to35942.cljs$core$IFn$_invoke$arity$variadic = (function (p__35945,body){
var vec__35946 = p__35945;
var method = cljs.core.nth.call(null,vec__35946,(0),null);
var action = cljs.core.nth.call(null,vec__35946,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to35942.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35942.cljs$lang$applyTo = (function (seq35943){
var G__35944 = cljs.core.first.call(null,seq35943);
var seq35943__$1 = cljs.core.next.call(null,seq35943);
return sablono.core.form_to35942.cljs$core$IFn$_invoke$arity$variadic(G__35944,seq35943__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35942);

//# sourceMappingURL=core.js.map?rel=1525291336324
