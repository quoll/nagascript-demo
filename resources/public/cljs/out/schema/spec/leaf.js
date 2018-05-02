// Compiled by ClojureScript 1.10.126 {}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k27993,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__27997 = k27993;
var G__27997__$1 = (((G__27997 instanceof cljs.core.Keyword))?G__27997.fqn:null);
switch (G__27997__$1) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27993,else__4177__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__3924__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27992){
var self__ = this;
var G__27992__$1 = this;
return (new cljs.core.RecordIter((0),G__27992__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-1595767002 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27994,other27995){
var self__ = this;
var this27994__$1 = this;
return ((!((other27995 == null))) && ((this27994__$1.constructor === other27995.constructor)) && (cljs.core._EQ_.call(null,this27994__$1.pre,other27995.pre)) && (cljs.core._EQ_.call(null,this27994__$1.__extmap,other27995.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__27992){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__27998 = cljs.core.keyword_identical_QMARK_;
var expr__27999 = k__4182__auto__;
if(cljs.core.truth_(pred__27998.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__27999))){
return (new schema.spec.leaf.LeafSpec(G__27992,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__27992),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__27992){
var self__ = this;
var this__4173__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__27992,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"schema.spec.leaf/LeafSpec",null,(1),null));
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"schema.spec.leaf/LeafSpec");
});

/**
 * Positional factory function for schema.spec.leaf/LeafSpec.
 */
schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

/**
 * Factory function for schema.spec.leaf/LeafSpec, taking a map of keywords to field values.
 */
schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__27996){
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__27996),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27996,new cljs.core.Keyword(null,"pre","pre",2118456869))),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec.call(null,pre);
});

//# sourceMappingURL=leaf.js.map?rel=1525291309672
