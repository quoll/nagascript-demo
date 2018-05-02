// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.rules');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('naga.util');
goog.require('naga.schema.store_structs');
goog.require('naga.schema.structs');
goog.require('schema.core');
naga.rules.gen_rule_name = (function naga$rules$gen_rule_name(){
return cljs.core.name.call(null,cljs.core.gensym.call(null,"rule-"));
});
/**
 * Changes a var to a 'fresh' var. These start with % rather than ?
 */
naga.rules.fresh_var = (function naga$rules$fresh_var(v){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.name.call(null,v),(1)))].join(''));
});
naga.rules.fresh_var_QMARK_ = (function naga$rules$fresh_var_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"%",cljs.core.first.call(null,cljs.core.name.call(null,x)))));
});
naga.rules.vars = (function naga$rules$vars(constraint){
if(cljs.core.list_QMARK_.call(null,constraint)){
return cljs.core.filter.call(null,naga.schema.store_structs.vartest_QMARK_,cljs.core.rest.call(null,constraint));
} else {
return naga.schema.store_structs.vars.call(null,constraint);
}
});
/**
 * Convert a head to use fresh vars for any vars that are unbound.
 * Scans the vars in the body to identify which vars are unbound.
 */
naga.rules.mark_unbound = (function naga$rules$mark_unbound(head,body){
var all_vars = (function (xs){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.filter,naga.schema.store_structs.vartest_QMARK_),xs));
});
var head_vars = all_vars.call(null,head);
var body_vars = all_vars.call(null,body);
var unbound_QMARK_ = clojure.set.difference.call(null,head_vars,body_vars);
return cljs.core.map.call(null,((function (all_vars,head_vars,body_vars,unbound_QMARK_){
return (function (p){
return cljs.core.map.call(null,((function (all_vars,head_vars,body_vars,unbound_QMARK_){
return (function (p1__31659_SHARP_){
if(cljs.core.truth_(unbound_QMARK_.call(null,p1__31659_SHARP_))){
return naga.rules.fresh_var.call(null,p1__31659_SHARP_);
} else {
return p1__31659_SHARP_;
}
});})(all_vars,head_vars,body_vars,unbound_QMARK_))
,p);
});})(all_vars,head_vars,body_vars,unbound_QMARK_))
,head);
});
var ufv___31674 = schema.utils.use_fn_validation;
var output_schema31660_31675 = naga.schema.structs.Rule;
var input_schema31661_31676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema31666_31677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker31662_31678 = (new cljs.core.Delay(((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677){
return (function (){
return schema.core.checker.call(null,input_schema31661_31676);
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677))
,null));
var output_checker31663_31679 = (new cljs.core.Delay(((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678){
return (function (){
return schema.core.checker.call(null,output_schema31660_31675);
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678))
,null));
var input_checker31667_31680 = (new cljs.core.Delay(((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679){
return (function (){
return schema.core.checker.call(null,input_schema31666_31677);
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679))
,null));
var output_checker31668_31681 = (new cljs.core.Delay(((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680){
return (function (){
return schema.core.checker.call(null,output_schema31660_31675);
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680))
,null));
var ret__2067__auto___31682 = (function (){
/**
 * Inputs: ([head body] [head body name])
 *   Returns: Rule
 * 
 *   Creates a new rule
 */
naga.rules.rule = ((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681){
return (function naga$rules$rule(var_args){
var G__31673 = arguments.length;
switch (G__31673) {
case 2:
return naga.rules.rule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return naga.rules.rule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681))
;

naga.rules.rule.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681){
return (function (G__31664,G__31665){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31674);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31664,G__31665], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),input_schema31661_31676,cljs.core.deref.call(null,input_checker31662_31678),args__657__auto___31684);
} else {
var temp__5457__auto___31685 = cljs.core.deref.call(null,input_checker31662_31678).call(null,args__657__auto___31684);
if(cljs.core.truth_(temp__5457__auto___31685)){
var error__658__auto___31686 = temp__5457__auto___31685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31661_31676,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31684,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31686], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__31664;
var body = G__31665;
while(true){
return naga.rules.rule.call(null,head,body,naga.rules.gen_rule_name.call(null));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),output_schema31660_31675,cljs.core.deref.call(null,output_checker31663_31679),o__659__auto__);
} else {
var temp__5457__auto___31687 = cljs.core.deref.call(null,output_checker31663_31679).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31687)){
var error__658__auto___31688 = temp__5457__auto___31687;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31660_31675,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31688], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681))
;

naga.rules.rule.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681){
return (function (G__31669,G__31670,G__31671){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31674);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31669,G__31670,G__31671], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),input_schema31666_31677,cljs.core.deref.call(null,input_checker31667_31680),args__657__auto___31689);
} else {
var temp__5457__auto___31690 = cljs.core.deref.call(null,input_checker31667_31680).call(null,args__657__auto___31689);
if(cljs.core.truth_(temp__5457__auto___31690)){
var error__658__auto___31691 = temp__5457__auto___31690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31666_31677,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31689,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31691], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__31669;
var body = G__31670;
var name = G__31671;
while(true){
if(((cljs.core.sequential_QMARK_.call(null,body)) && (((cljs.core.empty_QMARK_.call(null,body)) || (cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,body)))))){
} else {
throw (new Error(["Assert failed: ","Body must be a sequence of constraints","\n","(and (sequential? body) (or (empty? body) (every? sequential? body)))"].join('')));
}

if(((cljs.core.sequential_QMARK_.call(null,head)) && (((cljs.core.empty_QMARK_.call(null,head)) || (cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,head)))))){
} else {
throw (new Error(["Assert failed: ","Head must be a sequence of constraints","\n","(and (sequential? head) (or (empty? head) (every? sequential? head)))"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,naga.rules.fresh_var_QMARK_),cljs.core.mapcat.call(null,naga.rules.vars,body))){
} else {
throw (new Error(["Assert failed: ","Fresh vars are not allowed in a body","\n","(every? (complement fresh-var?) (mapcat vars body))"].join('')));
}

return naga.schema.structs.new_rule.call(null,naga.rules.mark_unbound.call(null,head,body),body,name);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),output_schema31660_31675,cljs.core.deref.call(null,output_checker31668_31681),o__659__auto__);
} else {
var temp__5457__auto___31692 = cljs.core.deref.call(null,output_checker31668_31681).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31692)){
var error__658__auto___31693 = temp__5457__auto___31692;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"rule","rule",-1924462512,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a new rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31660_31675,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31693], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31674,output_schema31660_31675,input_schema31661_31676,input_schema31666_31677,input_checker31662_31678,output_checker31663_31679,input_checker31667_31680,output_checker31668_31681))
;

naga.rules.rule.cljs$lang$maxFixedArity = 3;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.rules.rule),schema.core.make_fn_schema.call(null,output_schema31660_31675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31661_31676,input_schema31666_31677], null)));

var ufv___31706 = schema.utils.use_fn_validation;
var output_schema31694_31707 = naga.schema.structs.Rule;
var input_schema31695_31708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Rule,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null))),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31696_31709 = (new cljs.core.Delay(((function (ufv___31706,output_schema31694_31707,input_schema31695_31708){
return (function (){
return schema.core.checker.call(null,input_schema31695_31708);
});})(ufv___31706,output_schema31694_31707,input_schema31695_31708))
,null));
var output_checker31697_31710 = (new cljs.core.Delay(((function (ufv___31706,output_schema31694_31707,input_schema31695_31708,input_checker31696_31709){
return (function (){
return schema.core.checker.call(null,output_schema31694_31707);
});})(ufv___31706,output_schema31694_31707,input_schema31695_31708,input_checker31696_31709))
,null));
var ret__2067__auto___31711 = /**
 * Inputs: [name :- Rule {:keys [head body salience downstream]} :- s/Str]
 *   Returns: Rule
 * 
 *   Creates a rule the same as an existing rule, with a different name.
 */
naga.rules.named_rule = ((function (ufv___31706,output_schema31694_31707,input_schema31695_31708,input_checker31696_31709,output_checker31697_31710){
return (function naga$rules$named_rule(G__31698,G__31699){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31706);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31698,G__31699], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"named-rule","named-rule",-227145265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a rule the same as an existing rule, with a different name."], null)),input_schema31695_31708,cljs.core.deref.call(null,input_checker31696_31709),args__657__auto___31712);
} else {
var temp__5457__auto___31713 = cljs.core.deref.call(null,input_checker31696_31709).call(null,args__657__auto___31712);
if(cljs.core.truth_(temp__5457__auto___31713)){
var error__658__auto___31714 = temp__5457__auto___31713;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"named-rule","named-rule",-227145265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a rule the same as an existing rule, with a different name."], null)),cljs.core.pr_str.call(null,error__658__auto___31714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31695_31708,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31712,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31714], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var name = G__31698;
var G__31701 = G__31699;
var map__31702 = G__31701;
var map__31702__$1 = ((((!((map__31702 == null)))?(((((map__31702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var head = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var salience = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"salience","salience",1001218760));
var downstream = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"downstream","downstream",-539718142));
var name__$1 = name;
var G__31701__$1 = G__31701;
while(true){
var name__$2 = name__$1;
var map__31704 = G__31701__$1;
var map__31704__$1 = ((((!((map__31704 == null)))?(((((map__31704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704):map__31704);
var head__$1 = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body__$1 = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var salience__$1 = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"salience","salience",1001218760));
var downstream__$1 = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"downstream","downstream",-539718142));
return naga.schema.structs.new_rule.call(null,naga.rules.mark_unbound.call(null,head__$1,body__$1),body__$1,name__$2,downstream__$1,salience__$1);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"named-rule","named-rule",-227145265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a rule the same as an existing rule, with a different name."], null)),output_schema31694_31707,cljs.core.deref.call(null,output_checker31697_31710),o__659__auto__);
} else {
var temp__5457__auto___31715 = cljs.core.deref.call(null,output_checker31697_31710).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31715)){
var error__658__auto___31716 = temp__5457__auto___31715;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"named-rule","named-rule",-227145265,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Rule","Rule",1419786186,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a rule the same as an existing rule, with a different name."], null)),cljs.core.pr_str.call(null,error__658__auto___31716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31694_31707,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31716], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31706,output_schema31694_31707,input_schema31695_31708,input_checker31696_31709,output_checker31697_31710))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.rules.named_rule),schema.core.__GT_FnSchema.call(null,output_schema31694_31707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31695_31708], null)));

/**
 * Takes a keyword or a symbol and resolve it as a function.
 * Only namespaced keywords get converted.
 * Symbols default to the clojure.core namespace when no namespace is present.
 * Symbols starting with ? are not converted.
 * Anything unresolvable is not converted.
 */
naga.rules.resolve_element = (function naga$rules$resolve_element(e){
var or__3924__auto__ = (((e instanceof cljs.core.Keyword))?naga.util.get_fn_reference.call(null,e):(((e instanceof cljs.core.Symbol))?(cljs.core.truth_(cljs.core.namespace.call(null,e))?naga.util.get_fn_reference.call(null,e):((cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,e))))?e:naga.util.get_fn_reference.call(null,cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,e)))
)):null));
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return e;
}
});
/**
 * Remove namespaces from symbols in a pattern
 */
naga.rules.de_ns = (function naga$rules$de_ns(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
var clean = (function naga$rules$de_ns_$_clean(e){
if((e instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,cljs.core.name.call(null,e));
} else {
return e;
}
});
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,clean,pattern));
} else {
return cljs.core.map.call(null,naga.rules.resolve_element,pattern);
}
});
var ret__4533__auto___31727 = (function (){
/**
 * Create a rule, with an optional name.
 * Var symbols need not be quoted.
 */
naga.rules.r = (function naga$rules$r(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31728 = arguments.length;
var i__4500__auto___31729 = (0);
while(true){
if((i__4500__auto___31729 < len__4499__auto___31728)){
args__4502__auto__.push((arguments[i__4500__auto___31729]));

var G__31730 = (i__4500__auto___31729 + (1));
i__4500__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return naga.rules.r.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

naga.rules.r.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__31720){
var vec__31721 = p__31720;
var f = cljs.core.nth.call(null,vec__31721,(0),null);
var rs = vec__31721;
var vec__31724 = ((typeof f === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.rest.call(null,rs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.rules.gen_rule_name.call(null),rs], null));
var nm_SHARP_ = cljs.core.nth.call(null,vec__31724,(0),null);
var rs_SHARP_ = cljs.core.nth.call(null,vec__31724,(1),null);
var not_sep_SHARP_ = cljs.core.partial.call(null,cljs.core.not_EQ_,new cljs.core.Keyword(null,"-","-",-2112348439));
var head_SHARP_ = cljs.core.map.call(null,naga.rules.de_ns,cljs.core.take_while.call(null,not_sep_SHARP_,rs_SHARP_));
var body_SHARP_ = cljs.core.map.call(null,naga.rules.de_ns,cljs.core.rest.call(null,cljs.core.drop_while.call(null,not_sep_SHARP_,rs_SHARP_)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("naga.rules","rule","naga.rules/rule",-84234586,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,head_SHARP_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body_SHARP_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,nm_SHARP_,null,(1),null)))));
});

naga.rules.r.cljs$lang$maxFixedArity = (2);

naga.rules.r.cljs$lang$applyTo = (function (seq31717){
var G__31718 = cljs.core.first.call(null,seq31717);
var seq31717__$1 = cljs.core.next.call(null,seq31717);
var G__31719 = cljs.core.first.call(null,seq31717__$1);
var seq31717__$2 = cljs.core.next.call(null,seq31717__$1);
return naga.rules.r.cljs$core$IFn$_invoke$arity$variadic(G__31718,G__31719,seq31717__$2);
});

return null;
})()
;
naga.rules.r.cljs$lang$macro = true;

/**
 * Asserts that symbols are unbound variables for a query. Return true if it passes.
 */
naga.rules.check_symbol = (function naga$rules$check_symbol(sym){
var n_31731 = cljs.core.name.call(null,sym);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["%",null,"?",null], null), null).call(null,cljs.core.first.call(null,n_31731)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unknown symbol type in rule: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_31731)].join('')),"\n","(#{\\% \\?} (first n))"].join('')));
}

return true;
});
naga.rules.compatible = (function naga$rules$compatible(x,y){
if((x instanceof cljs.core.Symbol)){
var and__3913__auto__ = cljs.core.not.call(null,naga.rules.fresh_var_QMARK_.call(null,x));
if(and__3913__auto__){
var and__3913__auto____$1 = cljs.core.not.call(null,naga.rules.fresh_var_QMARK_.call(null,y));
if(and__3913__auto____$1){
return naga.rules.check_symbol.call(null,x);
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
} else {
var or__3924__auto__ = cljs.core._EQ_.call(null,x,y);
if(or__3924__auto__){
return or__3924__auto__;
} else {
var and__3913__auto__ = (y instanceof cljs.core.Symbol);
if(and__3913__auto__){
var and__3913__auto____$1 = cljs.core.not.call(null,naga.rules.fresh_var_QMARK_.call(null,y));
if(and__3913__auto____$1){
return naga.rules.check_symbol.call(null,y);
} else {
return and__3913__auto____$1;
}
} else {
return and__3913__auto__;
}
}
}
});
var ufv___31738 = schema.utils.use_fn_validation;
var output_schema31732_31739 = schema.core.Bool;
var input_schema31733_31740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null))),schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null)))], null);
var input_checker31734_31741 = (new cljs.core.Delay(((function (ufv___31738,output_schema31732_31739,input_schema31733_31740){
return (function (){
return schema.core.checker.call(null,input_schema31733_31740);
});})(ufv___31738,output_schema31732_31739,input_schema31733_31740))
,null));
var output_checker31735_31742 = (new cljs.core.Delay(((function (ufv___31738,output_schema31732_31739,input_schema31733_31740,input_checker31734_31741){
return (function (){
return schema.core.checker.call(null,output_schema31732_31739);
});})(ufv___31738,output_schema31732_31739,input_schema31733_31740,input_checker31734_31741))
,null));
var ret__2067__auto___31743 = /**
 * Inputs: [a :- EPVPattern b :- EPVPattern]
 *   Returns: s/Bool
 * 
 *   Does pattern a match pattern b?
 */
naga.rules.match_QMARK_ = ((function (ufv___31738,output_schema31732_31739,input_schema31733_31740,input_checker31734_31741,output_checker31735_31742){
return (function naga$rules$match_QMARK_(G__31736,G__31737){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31738);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31736,G__31737], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"match?","match?",152774789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Does pattern a match pattern b?"], null)),input_schema31733_31740,cljs.core.deref.call(null,input_checker31734_31741),args__657__auto___31744);
} else {
var temp__5457__auto___31745 = cljs.core.deref.call(null,input_checker31734_31741).call(null,args__657__auto___31744);
if(cljs.core.truth_(temp__5457__auto___31745)){
var error__658__auto___31746 = temp__5457__auto___31745;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"match?","match?",152774789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Does pattern a match pattern b?"], null)),cljs.core.pr_str.call(null,error__658__auto___31746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31733_31740,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31744,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31746], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var a = G__31736;
var b = G__31737;
while(true){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,naga.rules.compatible,a,b));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"match?","match?",152774789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Does pattern a match pattern b?"], null)),output_schema31732_31739,cljs.core.deref.call(null,output_checker31735_31742),o__659__auto__);
} else {
var temp__5457__auto___31747 = cljs.core.deref.call(null,output_checker31735_31742).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31747)){
var error__658__auto___31748 = temp__5457__auto___31747;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"match?","match?",152774789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Does pattern a match pattern b?"], null)),cljs.core.pr_str.call(null,error__658__auto___31748)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31732_31739,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31748], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31738,output_schema31732_31739,input_schema31733_31740,input_checker31734_31741,output_checker31735_31742))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.rules.match_QMARK_),schema.core.__GT_FnSchema.call(null,output_schema31732_31739,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31733_31740], null)));

var ufv___31765 = schema.utils.use_fn_validation;
var output_schema31749_31766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null);
var input_schema31750_31767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EPVPattern,cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,"rule-name"),schema.core.one.call(null,naga.schema.structs.Body,"body")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31751_31768 = (new cljs.core.Delay(((function (ufv___31765,output_schema31749_31766,input_schema31750_31767){
return (function (){
return schema.core.checker.call(null,input_schema31750_31767);
});})(ufv___31765,output_schema31749_31766,input_schema31750_31767))
,null));
var output_checker31752_31769 = (new cljs.core.Delay(((function (ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768){
return (function (){
return schema.core.checker.call(null,output_schema31749_31766);
});})(ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768))
,null));
var ret__2067__auto___31770 = /**
 * Inputs: [a :- EPVPattern [nm sb] :- [(s/one s/Str "rule-name") (s/one Body "body")]]
 *   Returns: [RulePatternPair]
 * 
 *   returns a sequence of name/pattern pairs where a matches a pattern in a named rule
 */
naga.rules.find_matches = ((function (ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768,output_checker31752_31769){
return (function naga$rules$find_matches(G__31753,G__31754){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31765);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31753,G__31754], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"find-matches","find-matches",-1270015327,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"returns a sequence of name/pattern pairs where a matches a pattern in a named rule"], null)),input_schema31750_31767,cljs.core.deref.call(null,input_checker31751_31768),args__657__auto___31771);
} else {
var temp__5457__auto___31772 = cljs.core.deref.call(null,input_checker31751_31768).call(null,args__657__auto___31771);
if(cljs.core.truth_(temp__5457__auto___31772)){
var error__658__auto___31773 = temp__5457__auto___31772;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"find-matches","find-matches",-1270015327,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"returns a sequence of name/pattern pairs where a matches a pattern in a named rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31773)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31750_31767,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31771,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31773], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var a = G__31753;
var G__31758 = G__31754;
var vec__31759 = G__31758;
var nm = cljs.core.nth.call(null,vec__31759,(0),null);
var sb = cljs.core.nth.call(null,vec__31759,(1),null);
var a__$1 = a;
var G__31758__$1 = G__31758;
while(true){
var a__$2 = a__$1;
var vec__31762 = G__31758__$1;
var nm__$1 = cljs.core.nth.call(null,vec__31762,(0),null);
var sb__$1 = cljs.core.nth.call(null,vec__31762,(1),null);
var matches_QMARK_ = ((function (a__$2,vec__31762,nm__$1,sb__$1,a,G__31758,vec__31759,nm,sb,validate__656__auto__,ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768,output_checker31752_31769){
return (function naga$rules$find_matches_$_matches_QMARK_(b){

if(cljs.core.truth_(naga.rules.match_QMARK_.call(null,a__$2,b))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nm__$1,b], null);
} else {
return null;
}
});})(a__$2,vec__31762,nm__$1,sb__$1,a,G__31758,vec__31759,nm,sb,validate__656__auto__,ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768,output_checker31752_31769))
;
return cljs.core.keep.call(null,matches_QMARK_,sb__$1);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"find-matches","find-matches",-1270015327,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"returns a sequence of name/pattern pairs where a matches a pattern in a named rule"], null)),output_schema31749_31766,cljs.core.deref.call(null,output_checker31752_31769),o__659__auto__);
} else {
var temp__5457__auto___31774 = cljs.core.deref.call(null,output_checker31752_31769).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31774)){
var error__658__auto___31775 = temp__5457__auto___31774;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"find-matches","find-matches",-1270015327,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"returns a sequence of name/pattern pairs where a matches a pattern in a named rule"], null)),cljs.core.pr_str.call(null,error__658__auto___31775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31749_31766,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31775], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31765,output_schema31749_31766,input_schema31750_31767,input_checker31751_31768,output_checker31752_31769))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.rules.find_matches),schema.core.__GT_FnSchema.call(null,output_schema31749_31766,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31750_31767], null)));

naga.rules.dbg = (function naga$rules$dbg(x){
cljs.core.println.call(null,x);

return x;
});
var ufv___31785 = schema.utils.use_fn_validation;
var output_schema31776_31786 = naga.schema.structs.Program;
var input_schema31777_31787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.Rule], null),cljs.core.with_meta(new cljs.core.Symbol(null,"rules","rules",-1455523403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Rule","Rule",1419786186,null)], null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null),cljs.core.with_meta(new cljs.core.Symbol(null,"axioms","axioms",54803254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Axiom","Axiom",-1037566523,null)], null)], null)))], null);
var input_checker31778_31788 = (new cljs.core.Delay(((function (ufv___31785,output_schema31776_31786,input_schema31777_31787){
return (function (){
return schema.core.checker.call(null,input_schema31777_31787);
});})(ufv___31785,output_schema31776_31786,input_schema31777_31787))
,null));
var output_checker31779_31789 = (new cljs.core.Delay(((function (ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788){
return (function (){
return schema.core.checker.call(null,output_schema31776_31786);
});})(ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788))
,null));
var ret__2067__auto___31790 = /**
 * Inputs: [rules :- [Rule] axioms :- [Axiom]]
 *   Returns: Program
 * 
 *   Converts a sequence of rules into a program.
 * A program consists of a map of rule names to rules, where the rules have dependencies.
 */
naga.rules.create_program = ((function (ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789){
return (function naga$rules$create_program(G__31780,G__31781){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___31785);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___31791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31780,G__31781], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"create-program","create-program",644700131,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Program","Program",1867463199,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of rules into a program.\n   A program consists of a map of rule names to rules, where the rules have dependencies."], null)),input_schema31777_31787,cljs.core.deref.call(null,input_checker31778_31788),args__657__auto___31791);
} else {
var temp__5457__auto___31792 = cljs.core.deref.call(null,input_checker31778_31788).call(null,args__657__auto___31791);
if(cljs.core.truth_(temp__5457__auto___31792)){
var error__658__auto___31793 = temp__5457__auto___31792;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"create-program","create-program",644700131,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Program","Program",1867463199,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of rules into a program.\n   A program consists of a map of rule names to rules, where the rules have dependencies."], null)),cljs.core.pr_str.call(null,error__658__auto___31793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31777_31787,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___31791,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31793], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var rules = G__31780;
var axioms = G__31781;
while(true){
var name_bodies = naga.util.mapmap.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),rules);
var triggers = ((function (name_bodies,validate__656__auto__,ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789){
return (function (head){
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,naga.rules.find_matches,head),name_bodies);
});})(name_bodies,validate__656__auto__,ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789))
;
var deps = ((function (name_bodies,triggers,validate__656__auto__,ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789){
return (function (p__31782){
var map__31783 = p__31782;
var map__31783__$1 = ((((!((map__31783 == null)))?(((((map__31783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31783):map__31783);
var head = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var body = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var name = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return naga.schema.structs.new_rule.call(null,head,body,name,cljs.core.mapcat.call(null,triggers,head));
});})(name_bodies,triggers,validate__656__auto__,ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),naga.util.mapmap.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity,cljs.core.map.call(null,deps,rules)),new cljs.core.Keyword(null,"axioms","axioms",-1585728273),axioms], null);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"create-program","create-program",644700131,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Program","Program",1867463199,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of rules into a program.\n   A program consists of a map of rule names to rules, where the rules have dependencies."], null)),output_schema31776_31786,cljs.core.deref.call(null,output_checker31779_31789),o__659__auto__);
} else {
var temp__5457__auto___31794 = cljs.core.deref.call(null,output_checker31779_31789).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___31794)){
var error__658__auto___31795 = temp__5457__auto___31794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"create-program","create-program",644700131,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Program","Program",1867463199,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of rules into a program.\n   A program consists of a map of rule names to rules, where the rules have dependencies."], null)),cljs.core.pr_str.call(null,error__658__auto___31795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31776_31786,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___31795], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___31785,output_schema31776_31786,input_schema31777_31787,input_checker31778_31788,output_checker31779_31789))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.rules.create_program),schema.core.__GT_FnSchema.call(null,output_schema31776_31786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31777_31787], null)));


//# sourceMappingURL=rules.js.map?rel=1525291330737
