// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.lang.expression');
goog.require('cljs.core');
goog.require('the.parsatron');
goog.require('naga.lang.basic');
naga.lang.expression.relation = naga.lang.basic.choice_STAR_.call(null,naga.lang.basic.equals,naga.lang.basic.not_equals,naga.lang.basic.lt,naga.lang.basic.gt,naga.lang.basic.lte,naga.lang.basic.gte);
naga.lang.expression.plus_op = naga.lang.basic.either_STAR_.call(null,naga.lang.basic.plus,naga.lang.basic.minus);
naga.lang.expression.mult_op = naga.lang.basic.either_STAR_.call(null,naga.lang.basic.divd,naga.lang.basic.tms);
naga.lang.expression.fn_symbol = cljs.core.PersistentHashMap.fromArrays(["!=","<=","*","+","-","/",">=","<","=",">"],[cljs.core.not_EQ_,cljs.core._LT__EQ_,cljs.core._STAR_,cljs.core._PLUS_,cljs.core._,cljs.core._SLASH_,cljs.core._GT__EQ_,cljs.core._LT_,cljs.core._EQ_,cljs.core._GT_]);
naga.lang.expression.flatten_expr = (function naga$lang$expression$flatten_expr(op1,op2,f,r){
var p = cljs.core.keep.call(null,(function (p__32022){
var vec__32023 = p__32022;
var o = cljs.core.nth.call(null,vec__32023,(0),null);
var opnd = cljs.core.nth.call(null,vec__32023,(1),null);
if(cljs.core._EQ_.call(null,op1,o)){
return opnd;
} else {
return null;
}
}),r);
var m = cljs.core.keep.call(null,((function (p){
return (function (p__32026){
var vec__32027 = p__32026;
var o = cljs.core.nth.call(null,vec__32027,(0),null);
var opnd = cljs.core.nth.call(null,vec__32027,(1),null);
if(cljs.core._EQ_.call(null,op2,o)){
return opnd;
} else {
return null;
}
});})(p))
,r);
if(cljs.core.seq.call(null,p)){
if(cljs.core.seq.call(null,m)){
return cljs.core.apply.call(null,cljs.core.list,naga.lang.expression.fn_symbol.call(null,op2),cljs.core.apply.call(null,cljs.core.list,naga.lang.expression.fn_symbol.call(null,op1),f,p),m);
} else {
return cljs.core.apply.call(null,cljs.core.list,naga.lang.expression.fn_symbol.call(null,op1),f,p);
}
} else {
if(cljs.core.seq.call(null,m)){
return cljs.core.apply.call(null,cljs.core.list,naga.lang.expression.fn_symbol.call(null,op2),f,m);
} else {
return f;
}
}
});
naga.lang.expression.mult_expr = (function naga$lang$expression$mult_expr(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.expression.mult_op),(function (op){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.basic.elt.call(null)),(function (e){
return the.parsatron.always.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e], null));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.expression.multiplicative_expr = (function naga$lang$expression$multiplicative_expr(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.basic.elt.call(null),(function (unry){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.attempt.call(null,naga.lang.expression.mult_expr.call(null))),(function (munry){
return the.parsatron.always.call(null,naga.lang.expression.flatten_expr.call(null,"*","/",unry,munry));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.expression.add_expr = (function naga$lang$expression$add_expr(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.expression.plus_op),(function (op){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.expression.multiplicative_expr.call(null)),(function (e){
return the.parsatron.always.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e], null));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.expression.additive_expr = (function naga$lang$expression$additive_expr(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.expression.multiplicative_expr.call(null),(function (mult){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.attempt.call(null,naga.lang.expression.add_expr.call(null))),(function (mmult){
return the.parsatron.always.call(null,naga.lang.expression.flatten_expr.call(null,"+","-",mult,mmult));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.expression.expression = naga.lang.basic.choice_STAR_.call(null,naga.lang.expression.additive_expr.call(null),naga.lang.basic.pstring);

//# sourceMappingURL=expression.js.map?rel=1525291331808
