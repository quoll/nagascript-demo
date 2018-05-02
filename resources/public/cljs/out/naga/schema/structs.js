// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.schema.structs');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('naga.schema.store_structs');
naga.schema.structs.RulePatternPair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,"rule-name"),schema.core.one.call(null,naga.schema.store_structs.EPVPattern,"pattern")], null);
naga.schema.structs.Body = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Pattern], null);
naga.schema.structs.Head = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.EPVPattern], null);
naga.schema.structs.ConstraintData = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-count","last-count",-1563382812),schema.core.Num,new cljs.core.Keyword(null,"dirty","dirty",729553281),schema.core.Bool], null);
naga.schema.structs.StatusMap = cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.atom.call(null,naga.schema.structs.ConstraintData)]);
/**
 * Convenience for representing a single key/value pair in a StatusMap
 */
naga.schema.structs.StatusMapEntry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.store_structs.EPVPattern,"Pattern from rule body"),schema.core.one.call(null,schema.core.atom.call(null,naga.schema.structs.ConstraintData),"count_and_dirty")], null);
var bad_keys__691__auto___29023 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__687__692__auto__){
return schema.core.required_key_QMARK_.call(null,p1__687__692__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__691__auto___29023)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__691__auto___29023))));
}



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
naga.schema.structs.Rule = (function (head,body,name,downstream,salience,__meta,__extmap,__hash){
this.head = head;
this.body = body;
this.name = name;
this.downstream = downstream;
this.salience = salience;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
naga.schema.structs.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

naga.schema.structs.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k29009,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__29013 = k29009;
var G__29013__$1 = (((G__29013 instanceof cljs.core.Keyword))?G__29013.fqn:null);
switch (G__29013__$1) {
case "head":
return self__.head;

break;
case "body":
return self__.body;

break;
case "name":
return self__.name;

break;
case "downstream":
return self__.downstream;

break;
case "salience":
return self__.salience;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29009,else__4177__auto__);

}
});

naga.schema.structs.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#naga.schema.structs.Rule{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"head","head",-771383919),self__.head],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"downstream","downstream",-539718142),self__.downstream],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"salience","salience",1001218760),self__.salience],null))], null),self__.__extmap));
});

naga.schema.structs.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29008){
var self__ = this;
var G__29008__$1 = this;
return (new cljs.core.RecordIter((0),G__29008__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

naga.schema.structs.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

naga.schema.structs.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.__meta,self__.__extmap,self__.__hash));
});

naga.schema.structs.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

naga.schema.structs.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-203222139 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

naga.schema.structs.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29010,other29011){
var self__ = this;
var this29010__$1 = this;
return ((!((other29011 == null))) && ((this29010__$1.constructor === other29011.constructor)) && (cljs.core._EQ_.call(null,this29010__$1.head,other29011.head)) && (cljs.core._EQ_.call(null,this29010__$1.body,other29011.body)) && (cljs.core._EQ_.call(null,this29010__$1.name,other29011.name)) && (cljs.core._EQ_.call(null,this29010__$1.downstream,other29011.downstream)) && (cljs.core._EQ_.call(null,this29010__$1.salience,other29011.salience)) && (cljs.core._EQ_.call(null,this29010__$1.__extmap,other29011.__extmap)));
});

naga.schema.structs.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"downstream","downstream",-539718142),null,new cljs.core.Keyword(null,"salience","salience",1001218760),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

naga.schema.structs.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__29008){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__29014 = cljs.core.keyword_identical_QMARK_;
var expr__29015 = k__4182__auto__;
if(cljs.core.truth_(pred__29014.call(null,new cljs.core.Keyword(null,"head","head",-771383919),expr__29015))){
return (new naga.schema.structs.Rule(G__29008,self__.body,self__.name,self__.downstream,self__.salience,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29014.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__29015))){
return (new naga.schema.structs.Rule(self__.head,G__29008,self__.name,self__.downstream,self__.salience,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29014.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29015))){
return (new naga.schema.structs.Rule(self__.head,self__.body,G__29008,self__.downstream,self__.salience,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29014.call(null,new cljs.core.Keyword(null,"downstream","downstream",-539718142),expr__29015))){
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,G__29008,self__.salience,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29014.call(null,new cljs.core.Keyword(null,"salience","salience",1001218760),expr__29015))){
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,self__.downstream,G__29008,self__.__meta,self__.__extmap,null));
} else {
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__29008),null));
}
}
}
}
}
});

naga.schema.structs.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"head","head",-771383919),self__.head,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"downstream","downstream",-539718142),self__.downstream,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"salience","salience",1001218760),self__.salience,null))], null),self__.__extmap));
});

naga.schema.structs.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__29008){
var self__ = this;
var this__4173__auto____$1 = this;
return (new naga.schema.structs.Rule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,G__29008,self__.__extmap,self__.__hash));
});

naga.schema.structs.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

naga.schema.structs.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"salience","salience",-1653217009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null))], null);
});

naga.schema.structs.Rule.cljs$lang$type = true;

naga.schema.structs.Rule.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"naga.schema.structs/Rule",null,(1),null));
});

naga.schema.structs.Rule.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"naga.schema.structs/Rule");
});

/**
 * Positional factory function for naga.schema.structs/Rule.
 */
naga.schema.structs.__GT_Rule = (function naga$schema$structs$__GT_Rule(head,body,name,downstream,salience){
return (new naga.schema.structs.Rule(head,body,name,downstream,salience,null,null,null));
});

/**
 * Factory function for naga.schema.structs/Rule, taking a map of keywords to field values.
 */
naga.schema.structs.map__GT_Rule = (function naga$schema$structs$map__GT_Rule(G__29012){
return (new naga.schema.structs.Rule(new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(G__29012),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__29012),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29012),new cljs.core.Keyword(null,"downstream","downstream",-539718142).cljs$core$IFn$_invoke$arity$1(G__29012),new cljs.core.Keyword(null,"salience","salience",1001218760).cljs$core$IFn$_invoke$arity$1(G__29012),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29012,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760))),null));
});


schema.utils.declare_class_schema_BANG_.call(null,naga.schema.structs.Rule,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,naga.schema.structs.Rule,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"head","head",-771383919),naga.schema.structs.Head,new cljs.core.Keyword(null,"body","body",-2049205669),naga.schema.structs.Body,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),new cljs.core.Keyword(null,"salience","salience",1001218760),schema.core.Num], null),null),(function (p1__1996__1997__auto__){
return naga.schema.structs.map__GT_Rule.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__1996__1997__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class Rule, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
naga.schema.structs.strict_map__GT_Rule = (function naga$schema$structs$strict_map__GT_Rule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29025 = arguments.length;
var i__4500__auto___29026 = (0);
while(true){
if((i__4500__auto___29026 < len__4499__auto___29025)){
args__4502__auto__.push((arguments[i__4500__auto___29026]));

var G__29027 = (i__4500__auto___29026 + (1));
i__4500__auto___29026 = G__29027;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return naga.schema.structs.strict_map__GT_Rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

naga.schema.structs.strict_map__GT_Rule.cljs$core$IFn$_invoke$arity$variadic = (function (m29007,p__29019){
var vec__29020 = p__29019;
var drop_extra_keys_QMARK___690__auto__ = cljs.core.nth.call(null,vec__29020,(0),null);
if(cljs.core.truth_((function (){var or__3924__auto__ = drop_extra_keys_QMARK___690__auto__;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m29007),5);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m29007)))));
}

return (new naga.schema.structs.Rule((function (){var m__585__auto__ = m29007;
var k__586__auto__ = new cljs.core.Keyword(null,"head","head",-771383919);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29007;
var k__586__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29007;
var k__586__auto__ = new cljs.core.Keyword(null,"name","name",1843675177);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29007;
var k__586__auto__ = new cljs.core.Keyword(null,"downstream","downstream",-539718142);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29007;
var k__586__auto__ = new cljs.core.Keyword(null,"salience","salience",1001218760);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),null,null,null));
});

naga.schema.structs.strict_map__GT_Rule.cljs$lang$maxFixedArity = (1);

naga.schema.structs.strict_map__GT_Rule.cljs$lang$applyTo = (function (seq29017){
var G__29018 = cljs.core.first.call(null,seq29017);
var seq29017__$1 = cljs.core.next.call(null,seq29017);
return naga.schema.structs.strict_map__GT_Rule.cljs$core$IFn$_invoke$arity$variadic(G__29018,seq29017__$1);
});

var bad_keys__691__auto___29045 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__687__692__auto__){
return schema.core.required_key_QMARK_.call(null,p1__687__692__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__691__auto___29045)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__691__auto___29045))));
}



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
naga.schema.structs.DynamicRule = (function (head,body,name,downstream,salience,status,execution_count,__meta,__extmap,__hash){
this.head = head;
this.body = body;
this.name = name;
this.downstream = downstream;
this.salience = salience;
this.status = status;
this.execution_count = execution_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
naga.schema.structs.DynamicRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

naga.schema.structs.DynamicRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k29031,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__29035 = k29031;
var G__29035__$1 = (((G__29035 instanceof cljs.core.Keyword))?G__29035.fqn:null);
switch (G__29035__$1) {
case "head":
return self__.head;

break;
case "body":
return self__.body;

break;
case "name":
return self__.name;

break;
case "downstream":
return self__.downstream;

break;
case "salience":
return self__.salience;

break;
case "status":
return self__.status;

break;
case "execution-count":
return self__.execution_count;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29031,else__4177__auto__);

}
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#naga.schema.structs.DynamicRule{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"head","head",-771383919),self__.head],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"downstream","downstream",-539718142),self__.downstream],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"salience","salience",1001218760),self__.salience],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597),self__.execution_count],null))], null),self__.__extmap));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29030){
var self__ = this;
var G__29030__$1 = this;
return (new cljs.core.RecordIter((0),G__29030__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

naga.schema.structs.DynamicRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,self__.__extmap,self__.__hash));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (1515293003 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29032,other29033){
var self__ = this;
var this29032__$1 = this;
return ((!((other29033 == null))) && ((this29032__$1.constructor === other29033.constructor)) && (cljs.core._EQ_.call(null,this29032__$1.head,other29033.head)) && (cljs.core._EQ_.call(null,this29032__$1.body,other29033.body)) && (cljs.core._EQ_.call(null,this29032__$1.name,other29033.name)) && (cljs.core._EQ_.call(null,this29032__$1.downstream,other29033.downstream)) && (cljs.core._EQ_.call(null,this29032__$1.salience,other29033.salience)) && (cljs.core._EQ_.call(null,this29032__$1.status,other29033.status)) && (cljs.core._EQ_.call(null,this29032__$1.execution_count,other29033.execution_count)) && (cljs.core._EQ_.call(null,this29032__$1.__extmap,other29033.__extmap)));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"downstream","downstream",-539718142),null,new cljs.core.Keyword(null,"salience","salience",1001218760),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__29030){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__29036 = cljs.core.keyword_identical_QMARK_;
var expr__29037 = k__4182__auto__;
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"head","head",-771383919),expr__29037))){
return (new naga.schema.structs.DynamicRule(G__29030,self__.body,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,G__29030,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,G__29030,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"downstream","downstream",-539718142),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,G__29030,self__.salience,self__.status,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"salience","salience",1001218760),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,G__29030,self__.status,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,G__29030,self__.execution_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29036.call(null,new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597),expr__29037))){
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.status,G__29030,self__.__meta,self__.__extmap,null));
} else {
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__29030),null));
}
}
}
}
}
}
}
});

naga.schema.structs.DynamicRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"head","head",-771383919),self__.head,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"downstream","downstream",-539718142),self__.downstream,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"salience","salience",1001218760),self__.salience,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status","status",-1997798413),self__.status,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597),self__.execution_count,null))], null),self__.__extmap));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__29030){
var self__ = this;
var this__4173__auto____$1 = this;
return (new naga.schema.structs.DynamicRule(self__.head,self__.body,self__.name,self__.downstream,self__.salience,self__.status,self__.execution_count,G__29030,self__.__extmap,self__.__hash));
});

naga.schema.structs.DynamicRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

naga.schema.structs.DynamicRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"salience","salience",-1653217009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),cljs.core.list(new cljs.core.Symbol("s","atom","s/atom",1243488113,null),new cljs.core.Symbol(null,"ConstraintData","ConstraintData",-2108073241,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"execution-count","execution-count",632802930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","atom","s/atom",1243488113,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null))], null))], null);
});

naga.schema.structs.DynamicRule.cljs$lang$type = true;

naga.schema.structs.DynamicRule.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"naga.schema.structs/DynamicRule",null,(1),null));
});

naga.schema.structs.DynamicRule.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"naga.schema.structs/DynamicRule");
});

/**
 * Positional factory function for naga.schema.structs/DynamicRule.
 */
naga.schema.structs.__GT_DynamicRule = (function naga$schema$structs$__GT_DynamicRule(head,body,name,downstream,salience,status,execution_count){
return (new naga.schema.structs.DynamicRule(head,body,name,downstream,salience,status,execution_count,null,null,null));
});

/**
 * Factory function for naga.schema.structs/DynamicRule, taking a map of keywords to field values.
 */
naga.schema.structs.map__GT_DynamicRule = (function naga$schema$structs$map__GT_DynamicRule(G__29034){
return (new naga.schema.structs.DynamicRule(new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"downstream","downstream",-539718142).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"salience","salience",1001218760).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__29034),new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597).cljs$core$IFn$_invoke$arity$1(G__29034),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29034,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597))),null));
});


schema.utils.declare_class_schema_BANG_.call(null,naga.schema.structs.DynamicRule,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,naga.schema.structs.DynamicRule,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"head","head",-771383919),naga.schema.structs.Head,new cljs.core.Keyword(null,"body","body",-2049205669),naga.schema.structs.Body,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),new cljs.core.Keyword(null,"salience","salience",1001218760),schema.core.Num,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.atom.call(null,naga.schema.structs.ConstraintData)]),new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597),schema.core.atom.call(null,schema.core.Num)], null),null),(function (p1__1996__1997__auto__){
return naga.schema.structs.map__GT_DynamicRule.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__1996__1997__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class DynamicRule, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
naga.schema.structs.strict_map__GT_DynamicRule = (function naga$schema$structs$strict_map__GT_DynamicRule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29047 = arguments.length;
var i__4500__auto___29048 = (0);
while(true){
if((i__4500__auto___29048 < len__4499__auto___29047)){
args__4502__auto__.push((arguments[i__4500__auto___29048]));

var G__29049 = (i__4500__auto___29048 + (1));
i__4500__auto___29048 = G__29049;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return naga.schema.structs.strict_map__GT_DynamicRule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

naga.schema.structs.strict_map__GT_DynamicRule.cljs$core$IFn$_invoke$arity$variadic = (function (m29029,p__29041){
var vec__29042 = p__29041;
var drop_extra_keys_QMARK___690__auto__ = cljs.core.nth.call(null,vec__29042,(0),null);
if(cljs.core.truth_((function (){var or__3924__auto__ = drop_extra_keys_QMARK___690__auto__;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m29029),7);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"downstream","downstream",-539718142),new cljs.core.Keyword(null,"salience","salience",1001218760),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m29029)))));
}

return (new naga.schema.structs.DynamicRule((function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"head","head",-771383919);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"name","name",1843675177);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"downstream","downstream",-539718142);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"salience","salience",1001218760);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),(function (){var m__585__auto__ = m29029;
var k__586__auto__ = new cljs.core.Keyword(null,"execution-count","execution-count",-1007728597);
var temp__5455__auto__ = cljs.core.find.call(null,m__585__auto__,k__586__auto__);
if(cljs.core.truth_(temp__5455__auto__)){
var pair__587__auto__ = temp__5455__auto__;
return cljs.core.val.call(null,pair__587__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__586__auto__,m__585__auto__)));
}
})(),null,null,null));
});

naga.schema.structs.strict_map__GT_DynamicRule.cljs$lang$maxFixedArity = (1);

naga.schema.structs.strict_map__GT_DynamicRule.cljs$lang$applyTo = (function (seq29039){
var G__29040 = cljs.core.first.call(null,seq29039);
var seq29039__$1 = cljs.core.next.call(null,seq29039);
return naga.schema.structs.strict_map__GT_DynamicRule.cljs$core$IFn$_invoke$arity$variadic(G__29040,seq29039__$1);
});

var ufv___29084 = schema.utils.use_fn_validation;
var output_schema29050_29085 = schema.core.Any;
var input_schema29051_29086 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Head,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null))),schema.core.one.call(null,naga.schema.structs.Body,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_schema29057_29087 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Head,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null))),schema.core.one.call(null,naga.schema.structs.Body,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null)))], null);
var input_schema29064_29088 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Head,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null))),schema.core.one.call(null,naga.schema.structs.Body,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"salience","salience",-1653217009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)))], null);
var input_schema29072_29089 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,naga.schema.structs.Head,cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Head","Head",2114681815,null)], null))),schema.core.one.call(null,naga.schema.structs.Body,cljs.core.with_meta(new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Body","Body",1423624150,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.structs.RulePatternPair], null),cljs.core.with_meta(new cljs.core.Symbol(null,"downstream","downstream",1100813385,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"RulePatternPair","RulePatternPair",-774983696,null)], null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"salience","salience",-1653217009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([naga.schema.store_structs.EPVPattern,schema.core.atom.call(null,naga.schema.structs.ConstraintData)]),cljs.core.with_meta(new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"EPVPattern","EPVPattern",1993407940,null),cljs.core.list(new cljs.core.Symbol("s","atom","s/atom",1243488113,null),new cljs.core.Symbol(null,"ConstraintData","ConstraintData",-2108073241,null))], null)], null))),schema.core.one.call(null,schema.core.atom.call(null,schema.core.Num),cljs.core.with_meta(new cljs.core.Symbol(null,"execution-count","execution-count",632802930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","atom","s/atom",1243488113,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null))], null)))], null);
var input_checker29052_29090 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089){
return (function (){
return schema.core.checker.call(null,input_schema29051_29086);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089))
,null));
var output_checker29053_29091 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090){
return (function (){
return schema.core.checker.call(null,output_schema29050_29085);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090))
,null));
var input_checker29058_29092 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091){
return (function (){
return schema.core.checker.call(null,input_schema29057_29087);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091))
,null));
var output_checker29059_29093 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092){
return (function (){
return schema.core.checker.call(null,output_schema29050_29085);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092))
,null));
var input_checker29065_29094 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093){
return (function (){
return schema.core.checker.call(null,input_schema29064_29088);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093))
,null));
var output_checker29066_29095 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094){
return (function (){
return schema.core.checker.call(null,output_schema29050_29085);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094))
,null));
var input_checker29073_29096 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095){
return (function (){
return schema.core.checker.call(null,input_schema29072_29089);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095))
,null));
var output_checker29074_29097 = (new cljs.core.Delay(((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096){
return (function (){
return schema.core.checker.call(null,output_schema29050_29085);
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096))
,null));
var ret__2067__auto___29098 = (function (){
/**
 * Inputs: ([head :- Head body :- Body name :- s/Str] [head :- Head body :- Body name :- s/Str downstream :- [RulePatternPair]] [head :- Head body :- Body name :- s/Str downstream :- [RulePatternPair] salience :- s/Num] [head :- Head body :- Body name :- s/Str downstream :- [RulePatternPair] salience :- s/Num status :- {EPVPattern (s/atom ConstraintData)} execution-count :- (s/atom s/Num)])
 */
naga.schema.structs.new_rule = ((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097){
return (function naga$schema$structs$new_rule(var_args){
var G__29083 = arguments.length;
switch (G__29083) {
case 3:
return naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097))
;

naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097){
return (function (G__29054,G__29055,G__29056){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___29084);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___29100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29054,G__29055,G__29056], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema29051_29086,cljs.core.deref.call(null,input_checker29052_29090),args__657__auto___29100);
} else {
var temp__5457__auto___29101 = cljs.core.deref.call(null,input_checker29052_29090).call(null,args__657__auto___29100);
if(cljs.core.truth_(temp__5457__auto___29101)){
var error__658__auto___29102 = temp__5457__auto___29101;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29102)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29051_29086,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___29100,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29102], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__29054;
var body = G__29055;
var name = G__29056;
while(true){
return naga.schema.structs.new_rule.call(null,head,body,name,cljs.core.PersistentVector.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema29050_29085,cljs.core.deref.call(null,output_checker29053_29091),o__659__auto__);
} else {
var temp__5457__auto___29103 = cljs.core.deref.call(null,output_checker29053_29091).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___29103)){
var error__658__auto___29104 = temp__5457__auto___29103;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29104)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29050_29085,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29104], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097))
;

naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$4 = ((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097){
return (function (G__29060,G__29061,G__29062,G__29063){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___29084);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___29105 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29060,G__29061,G__29062,G__29063], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema29057_29087,cljs.core.deref.call(null,input_checker29058_29092),args__657__auto___29105);
} else {
var temp__5457__auto___29106 = cljs.core.deref.call(null,input_checker29058_29092).call(null,args__657__auto___29105);
if(cljs.core.truth_(temp__5457__auto___29106)){
var error__658__auto___29107 = temp__5457__auto___29106;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29107)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29057_29087,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___29105,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29107], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__29060;
var body = G__29061;
var name = G__29062;
var downstream = G__29063;
while(true){
return naga.schema.structs.new_rule.call(null,head,body,name,downstream,(0));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema29050_29085,cljs.core.deref.call(null,output_checker29059_29093),o__659__auto__);
} else {
var temp__5457__auto___29108 = cljs.core.deref.call(null,output_checker29059_29093).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___29108)){
var error__658__auto___29109 = temp__5457__auto___29108;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29109)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29050_29085,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29109], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097))
;

naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$5 = ((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097){
return (function (G__29067,G__29068,G__29069,G__29070,G__29071){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___29084);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___29110 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29067,G__29068,G__29069,G__29070,G__29071], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema29064_29088,cljs.core.deref.call(null,input_checker29065_29094),args__657__auto___29110);
} else {
var temp__5457__auto___29111 = cljs.core.deref.call(null,input_checker29065_29094).call(null,args__657__auto___29110);
if(cljs.core.truth_(temp__5457__auto___29111)){
var error__658__auto___29112 = temp__5457__auto___29111;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29112)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29064_29088,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___29110,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29112], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__29067;
var body = G__29068;
var name = G__29069;
var downstream = G__29070;
var salience = G__29071;
while(true){
return naga.schema.structs.__GT_Rule.call(null,head,body,name,downstream,salience);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema29050_29085,cljs.core.deref.call(null,output_checker29066_29095),o__659__auto__);
} else {
var temp__5457__auto___29113 = cljs.core.deref.call(null,output_checker29066_29095).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___29113)){
var error__658__auto___29114 = temp__5457__auto___29113;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29114)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29050_29085,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29114], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097))
;

naga.schema.structs.new_rule.cljs$core$IFn$_invoke$arity$7 = ((function (ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097){
return (function (G__29075,G__29076,G__29077,G__29078,G__29079,G__29080,G__29081){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___29084);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___29115 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29075,G__29076,G__29077,G__29078,G__29079,G__29080,G__29081], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),input_schema29072_29089,cljs.core.deref.call(null,input_checker29073_29096),args__657__auto___29115);
} else {
var temp__5457__auto___29116 = cljs.core.deref.call(null,input_checker29073_29096).call(null,args__657__auto___29115);
if(cljs.core.truth_(temp__5457__auto___29116)){
var error__658__auto___29117 = temp__5457__auto___29116;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29072_29089,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___29115,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29117], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var head = G__29075;
var body = G__29076;
var name = G__29077;
var downstream = G__29078;
var salience = G__29079;
var status = G__29080;
var execution_count = G__29081;
while(true){
return naga.schema.structs.__GT_DynamicRule.call(null,head,body,name,downstream,salience,status,execution_count);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),output_schema29050_29085,cljs.core.deref.call(null,output_checker29074_29097),o__659__auto__);
} else {
var temp__5457__auto___29118 = cljs.core.deref.call(null,output_checker29074_29097).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___29118)){
var error__658__auto___29119 = temp__5457__auto___29118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-rule","new-rule",-760343755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__658__auto___29119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29050_29085,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___29119], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___29084,output_schema29050_29085,input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089,input_checker29052_29090,output_checker29053_29091,input_checker29058_29092,output_checker29059_29093,input_checker29065_29094,output_checker29066_29095,input_checker29073_29096,output_checker29074_29097))
;

naga.schema.structs.new_rule.cljs$lang$maxFixedArity = 7;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.schema.structs.new_rule),schema.core.make_fn_schema.call(null,output_schema29050_29085,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29051_29086,input_schema29057_29087,input_schema29064_29088,input_schema29072_29089], null)));

naga.schema.structs.Statement = schema.core.cond_pre.call(null,naga.schema.store_structs.Axiom,naga.schema.structs.Rule);
naga.schema.structs.Program = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.required_key.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366)),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.Rule]),schema.core.required_key.call(null,new cljs.core.Keyword(null,"axioms","axioms",-1585728273)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null)]);
naga.schema.structs.RunnableProgram = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.required_key.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366)),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,naga.schema.structs.DynamicRule]),schema.core.required_key.call(null,new cljs.core.Keyword(null,"axioms","axioms",-1585728273)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [naga.schema.store_structs.Axiom], null)]);

//# sourceMappingURL=structs.js.map?rel=1525291313003
