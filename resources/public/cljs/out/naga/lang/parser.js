// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.lang.parser');
goog.require('cljs.core');
goog.require('the.parsatron');
goog.require('naga.lang.basic');
goog.require('naga.lang.expression');
/**
 * Returns the vars of an expression
 */
naga.lang.parser.vars_for = (function naga$lang$parser$vars_for(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return naga.lang.basic.get_vars.call(null,x);
} else {
if((x instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return null;
}
}
});
naga.lang.parser.relational_expr = (function naga$lang$parser$relational_expr(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.expression.expression,(function (lhs){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.expression.relation),(function (c_type){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.expression.expression),(function (rhs){
var vars = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,naga.lang.parser.vars_for.call(null,lhs)),naga.lang.parser.vars_for.call(null,rhs));
var expr = cljs.core.with_meta.call(null,(new cljs.core.List(null,naga.lang.expression.fn_symbol.call(null,c_type),(new cljs.core.List(null,lhs,(new cljs.core.List(null,rhs,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null));
return the.parsatron.always.call(null,expr);
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
naga.lang.parser.structure = (function naga$lang$parser$structure(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.basic.elt.call(null),(function (p){
return the.parsatron.bind.call(null,the.parsatron.between.call(null,naga.lang.basic.open_paren,naga.lang.basic.close_paren,naga.lang.basic.arg_list.call(null)),(function (args){
return the.parsatron.always.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,args], null));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.parser.structures = (function naga$lang$parser$structures(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,naga.lang.parser.structure.call(null),(function (s){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,the.parsatron.attempt.call(null,the.parsatron.nxt.call(null,naga.lang.basic.separator,naga.lang.basic.either_STAR_.call(null,naga.lang.parser.relational_expr.call(null),naga.lang.parser.structure.call(null))))),(function (ss){
return the.parsatron.always.call(null,cljs.core.cons.call(null,s,ss));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.parser.nonbase_clause = (function naga$lang$parser$nonbase_clause(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.parser.structures.call(null)),(function (head){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,the.parsatron.nxt.call(null,the.parsatron.string.call(null,":-"),naga.lang.basic.opt_whitespace)),(function (_){
return the.parsatron.bind.call(null,naga.lang.parser.structures.call(null),(function (body){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,the.parsatron.nxt.call(null,the.parsatron.char$.call(null,"."),naga.lang.basic.opt_whitespace)),(function (___$1){
return the.parsatron.always.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));
}));
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
naga.lang.parser.base_clause = (function naga$lang$parser$base_clause(){
return (function (state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__){
var p__2599__auto__ = the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,naga.lang.parser.structure.call(null)),(function (structure){
return the.parsatron.bind.call(null,the.parsatron.nxt.call(null,naga.lang.basic.opt_whitespace,the.parsatron.nxt.call(null,the.parsatron.char$.call(null,"."),naga.lang.basic.opt_whitespace)),(function (_){
return the.parsatron.always.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"axiom","axiom",-1683284564),new cljs.core.Keyword(null,"axiom","axiom",-1683284564),structure], null));
}));
}));
return (new the.parsatron.Continue(((function (p__2599__auto__){
return (function (){
return p__2599__auto__.call(null,state__2594__auto__,cok__2595__auto__,cerr__2596__auto__,eok__2597__auto__,eerr__2598__auto__);
});})(p__2599__auto__))
));
});
});
naga.lang.parser.program = the.parsatron.many.call(null,naga.lang.basic.either_STAR_.call(null,naga.lang.parser.nonbase_clause.call(null),naga.lang.parser.base_clause.call(null)));
/**
 * Parse a string
 */
naga.lang.parser.parse = (function naga$lang$parser$parse(s){
return the.parsatron.run.call(null,naga.lang.parser.program,s);
});

//# sourceMappingURL=parser.js.map?rel=1525291331895
