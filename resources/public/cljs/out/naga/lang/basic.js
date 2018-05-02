// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.lang.basic');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('the.parsatron');
goog.require('naga.schema.store_structs');
naga.lang.basic.is_letter_QMARK_ = (function naga$lang$basic$is_letter_QMARK_(c){
return c.match(/[a-zA-Z]/);
});
naga.lang.basic.to_lower_case = (function naga$lang$basic$to_lower_case(c){
return c.toLowerCase();
});
naga.lang.basic.is_upper_case_QMARK_ = (function naga$lang$basic$is_upper_case_QMARK_(c){
var and__3913__auto__ = naga.lang.basic.is_letter_QMARK_.call(null,c);
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core._EQ_.call(null,c,c.toUpperCase());
} else {
return and__3913__auto__;
}
});
naga.lang.basic.is_digit_QMARK_ = (function naga$lang$basic$is_digit_QMARK_(c){
return c.match(/[0-9]/);
});
naga.lang.basic.atoi = (function naga$lang$basic$atoi(s){
return parseInt(s);
});
naga.lang.basic.atof = (function naga$lang$basic$atof(s){
return parseFloat(s);
});
/**
 * choice with backtracking.
 */
naga.lang.basic.choice_STAR_ = (function naga$lang$basic$choice_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32004 = arguments.length;
var i__4500__auto___32005 = (0);
while(true){
if((i__4500__auto___32005 < len__4499__auto___32004)){
args__4502__auto__.push((arguments[i__4500__auto___32005]));

var G__32006 = (i__4500__auto___32005 + (1));
i__4500__auto___32005 = G__32006;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return naga.lang.basic.choice_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

naga.lang.basic.choice_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,the.parsatron.choice,cljs.core.map.call(null,the.parsatron.attempt,args));
});

naga.lang.basic.choice_STAR_.cljs$lang$maxFixedArity = (0);

naga.lang.basic.choice_STAR_.cljs$lang$applyTo = (function (seq32003){
return naga.lang.basic.choice_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32003));
});

/**
 * either with backtracking.
 */
naga.lang.basic.either_STAR_ = (function naga$lang$basic$either_STAR_(p,q){
return the.parsatron.either.call(null,the.parsatron.attempt.call(null,p),the.parsatron.attempt.call(null,q));
});
naga.lang.basic.non_star = the.parsatron.token.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null)));
naga.lang.basic.non_slash = the.parsatron.token.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/",null], null), null)));
naga.lang.basic.cmnt = (function naga$lang$basic$cmnt(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.nxt.call(null,the.parsatron.string.call(null,"/*"),the.parsatron.nxt.call(null,the.parsatron.many.call(null,naga.lang.basic.non_star),the.parsatron.many1.call(null,the.parsatron.char$.call(null,"*")))),(function (_){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.nxt.call(null,naga.lang.basic.non_slash,the.parsatron.nxt.call(null,the.parsatron.many.call(null,naga.lang.basic.non_star),the.parsatron.many1.call(null,the.parsatron.char$.call(null,"*"))))),(function (___$1){
return the.parsatron.bind.call(null,the.parsatron.char$.call(null,"/"),(function (___$2){
return the.parsatron.always.call(null,new cljs.core.Keyword(null,"cmnt","cmnt",-1498541543));
}));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.whitespace_char = the.parsatron.token.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"\t",null,"\n",null], null), null));
naga.lang.basic.opt_whitespace = the.parsatron.many.call(null,the.parsatron.either.call(null,naga.lang.basic.whitespace_char,the.parsatron.attempt.call(null,naga.lang.basic.cmnt.call(null))));
naga.lang.basic.separator = the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,the.parsatron.nxt.call(null,the.parsatron.char$.call(null,","),naga.lang.basic.opt_whitespace));
naga.lang.basic.open_paren = the.parsatron.nxt.call(null,the.parsatron.char$.call(null,"("),naga.lang.basic.opt_whitespace);
naga.lang.basic.close_paren = the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,the.parsatron.char$.call(null,")"));
naga.lang.basic.equals = the.parsatron.char$.call(null,"=");
naga.lang.basic.not_equals = the.parsatron.string.call(null,"!=");
naga.lang.basic.lt = the.parsatron.char$.call(null,"<");
naga.lang.basic.gt = the.parsatron.char$.call(null,">");
naga.lang.basic.lte = the.parsatron.string.call(null,"<=");
naga.lang.basic.gte = the.parsatron.string.call(null,">=");
naga.lang.basic.plus = the.parsatron.char$.call(null,"+");
naga.lang.basic.minus = the.parsatron.char$.call(null,"-");
naga.lang.basic.divd = the.parsatron.char$.call(null,"/");
naga.lang.basic.tms = the.parsatron.char$.call(null,"*");
naga.lang.basic.non_dquote = the.parsatron.token.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\"",null], null), null)));
naga.lang.basic.non_squote = the.parsatron.token.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["'",null], null), null)));
/**
 * Prolog considers underscores to be equivalent to an uppercase letter
 */
naga.lang.basic.upper_case_letter_QMARK_ = (function naga$lang$basic$upper_case_letter_QMARK_(c){
var or__3924__auto__ = naga.lang.basic.is_upper_case_QMARK_.call(null,c);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,"_",c);
}
});
naga.lang.basic.upper_case_letter = (function naga$lang$basic$upper_case_letter(){
return the.parsatron.token.call(null,naga.lang.basic.upper_case_letter_QMARK_);
});
naga.lang.basic.ns_word = the.parsatron.many1.call(null,the.parsatron.choice.call(null,the.parsatron.letter.call(null),the.parsatron.digit.call(null),the.parsatron.char$.call(null,"_"),the.parsatron.char$.call(null,"-"),the.parsatron.char$.call(null,":")));
naga.lang.basic.word = the.parsatron.many1.call(null,the.parsatron.letter.call(null));
naga.lang.basic.digits = the.parsatron.many1.call(null,the.parsatron.digit.call(null));
naga.lang.basic.signed_digits = (function naga$lang$basic$signed_digits(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.token.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["+",null,"-",null], null), null)),(function (s){
return the.parsatron.bind.call(null,naga.lang.basic.digits,(function (ds){
return the.parsatron.always.call(null,cljs.core.cons.call(null,s,ds));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.integer = (function naga$lang$basic$integer(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.either.call(null,naga.lang.basic.digits,naga.lang.basic.signed_digits.call(null)),(function (i){
return the.parsatron.always.call(null,naga.lang.basic.atoi.call(null,clojure.string.join.call(null,i)));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.floating_point = (function naga$lang$basic$floating_point(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.either.call(null,naga.lang.basic.digits,naga.lang.basic.signed_digits.call(null)),(function (i){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,the.parsatron.char$.call(null,"."),the.parsatron.many1.call(null,the.parsatron.digit.call(null))),(function (f){
return the.parsatron.always.call(null,naga.lang.basic.atof.call(null,cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,i),".",f)));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.number = naga.lang.basic.either_STAR_.call(null,naga.lang.basic.floating_point.call(null),naga.lang.basic.integer.call(null));
naga.lang.basic.pstring1 = (function naga$lang$basic$pstring1(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.many1.call(null,the.parsatron.between.call(null,the.parsatron.char$.call(null,"'"),the.parsatron.char$.call(null,"'"),the.parsatron.many.call(null,naga.lang.basic.non_squote))),(function (s){
return the.parsatron.always.call(null,clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.interpose.call(null,"'",s))));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.pstring2 = (function naga$lang$basic$pstring2(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.many1.call(null,the.parsatron.between.call(null,the.parsatron.char$.call(null,"\""),the.parsatron.char$.call(null,"\""),the.parsatron.many.call(null,naga.lang.basic.non_dquote))),(function (s){
return the.parsatron.always.call(null,clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.interpose.call(null,"\"",s))));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.pstring = the.parsatron.either.call(null,naga.lang.basic.pstring1.call(null),naga.lang.basic.pstring2.call(null));
naga.lang.basic.variable = (function naga$lang$basic$variable(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.basic.upper_case_letter.call(null),(function (f){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.choice.call(null,the.parsatron.letter.call(null),the.parsatron.digit.call(null),the.parsatron.char$.call(null,"_"),the.parsatron.char$.call(null,"-"))),(function (r){
return the.parsatron.always.call(null,cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,"?",naga.lang.basic.to_lower_case.call(null,f),r)));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
/**
 * Creates a keyword from a parsed word token
 */
naga.lang.basic.build_keyword = (function naga$lang$basic$build_keyword(wrd){
var vec__32007 = clojure.string.split.call(null,wrd,/:/);
var kns = cljs.core.nth.call(null,vec__32007,(0),null);
var kname = cljs.core.nth.call(null,vec__32007,(1),null);
var w = vec__32007;
var parts = cljs.core.count.call(null,w);
if(cljs.core.truth_(naga.lang.basic.is_digit_QMARK_.call(null,cljs.core.first.call(null,wrd)))){
return null;
} else {
if(cljs.core._EQ_.call(null,(2),parts)){
if(cljs.core.empty_QMARK_.call(null,kns)){
return cljs.core.keyword.call(null,kname);
} else {
if(cljs.core.seq.call(null,kname)){
return cljs.core.keyword.call(null,kns,kname);
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.call(null,(1),parts)){
if(!(clojure.string.ends_with_QMARK_.call(null,wrd,":"))){
return cljs.core.keyword.call(null,kns);
} else {
return null;
}
} else {
return null;
}
}
}
});
naga.lang.basic.kw = (function naga$lang$basic$kw(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.basic.ns_word,(function (r){
var wrd = clojure.string.join.call(null,r);
var temp__5455__auto__ = naga.lang.basic.build_keyword.call(null,wrd);
if(cljs.core.truth_(temp__5455__auto__)){
var k = temp__5455__auto__;
return the.parsatron.always.call(null,k);
} else {
throw the.parsatron.fail.call(null,["Invalid identifier: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrd)].join(''));
}
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.atm = (function naga$lang$basic$atm(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.choice.call(null,naga.lang.basic.kw.call(null),naga.lang.basic.pstring,naga.lang.basic.number);
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.basic.elt = (function naga$lang$basic$elt(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.choice.call(null,naga.lang.basic.variable.call(null),naga.lang.basic.atm.call(null));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
/**
 * Returns all vars from an annotated list
 */
naga.lang.basic.get_vars = (function naga$lang$basic$get_vars(l){
return cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.meta),l)),naga.schema.store_structs.vars.call(null,l));
});
naga.lang.basic.arg_list = (function naga$lang$basic$arg_list(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.basic.elt.call(null),(function (f){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.nxt.call(null,naga.lang.basic.separator,naga.lang.basic.elt.call(null))),(function (r){
var args = cljs.core.cons.call(null,f,r);
var vars = naga.lang.basic.get_vars.call(null,args);
return the.parsatron.always.call(null,cljs.core.with_meta.call(null,args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null)));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});

//# sourceMappingURL=basic.js.map?rel=1525291331701
