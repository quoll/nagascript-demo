// Compiled by ClojureScript 1.10.126 {}
goog.provide('the.parsatron');
goog.require('cljs.core');
goog.require('clojure.string');

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
the.parsatron.InputState = (function (input,pos,__meta,__extmap,__hash){
this.input = input;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.InputState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.InputState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31897,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31901 = k31897;
var G__31901__$1 = (((G__31901 instanceof cljs.core.Keyword))?G__31901.fqn:null);
switch (G__31901__$1) {
case "input":
return self__.input;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31897,else__4177__auto__);

}
});

the.parsatron.InputState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.InputState{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",556931961),self__.input],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

the.parsatron.InputState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31896){
var self__ = this;
var G__31896__$1 = this;
return (new cljs.core.RecordIter((0),G__31896__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.InputState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.InputState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.InputState(self__.input,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.InputState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.InputState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-2071695848 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.InputState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31898,other31899){
var self__ = this;
var this31898__$1 = this;
return ((!((other31899 == null))) && ((this31898__$1.constructor === other31899.constructor)) && (cljs.core._EQ_.call(null,this31898__$1.input,other31899.input)) && (cljs.core._EQ_.call(null,this31898__$1.pos,other31899.pos)) && (cljs.core._EQ_.call(null,this31898__$1.__extmap,other31899.__extmap)));
});

the.parsatron.InputState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.InputState(self__.input,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.InputState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31896){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31902 = cljs.core.keyword_identical_QMARK_;
var expr__31903 = k__4182__auto__;
if(cljs.core.truth_(pred__31902.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__31903))){
return (new the.parsatron.InputState(G__31896,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31902.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__31903))){
return (new the.parsatron.InputState(self__.input,G__31896,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.InputState(self__.input,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31896),null));
}
}
});

the.parsatron.InputState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input","input",556931961),self__.input,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

the.parsatron.InputState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31896){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.InputState(self__.input,self__.pos,G__31896,self__.__extmap,self__.__hash));
});

the.parsatron.InputState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.InputState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

the.parsatron.InputState.cljs$lang$type = true;

the.parsatron.InputState.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/InputState",null,(1),null));
});

the.parsatron.InputState.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/InputState");
});

/**
 * Positional factory function for the.parsatron/InputState.
 */
the.parsatron.__GT_InputState = (function the$parsatron$__GT_InputState(input,pos){
return (new the.parsatron.InputState(input,pos,null,null,null));
});

/**
 * Factory function for the.parsatron/InputState, taking a map of keywords to field values.
 */
the.parsatron.map__GT_InputState = (function the$parsatron$map__GT_InputState(G__31900){
return (new the.parsatron.InputState(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(G__31900),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__31900),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31900,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});


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
the.parsatron.SourcePos = (function (line,column,__meta,__extmap,__hash){
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.SourcePos.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.SourcePos.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31907,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31911 = k31907;
var G__31911__$1 = (((G__31911 instanceof cljs.core.Keyword))?G__31911.fqn:null);
switch (G__31911__$1) {
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31907,else__4177__auto__);

}
});

the.parsatron.SourcePos.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.SourcePos{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
});

the.parsatron.SourcePos.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31906){
var self__ = this;
var G__31906__$1 = this;
return (new cljs.core.RecordIter((0),G__31906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.SourcePos.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.SourcePos.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.SourcePos(self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.SourcePos.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.SourcePos.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-2130431601 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.SourcePos.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31908,other31909){
var self__ = this;
var this31908__$1 = this;
return ((!((other31909 == null))) && ((this31908__$1.constructor === other31909.constructor)) && (cljs.core._EQ_.call(null,this31908__$1.line,other31909.line)) && (cljs.core._EQ_.call(null,this31908__$1.column,other31909.column)) && (cljs.core._EQ_.call(null,this31908__$1.__extmap,other31909.__extmap)));
});

the.parsatron.SourcePos.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.SourcePos(self__.line,self__.column,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.SourcePos.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31906){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31912 = cljs.core.keyword_identical_QMARK_;
var expr__31913 = k__4182__auto__;
if(cljs.core.truth_(pred__31912.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__31913))){
return (new the.parsatron.SourcePos(G__31906,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31912.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__31913))){
return (new the.parsatron.SourcePos(self__.line,G__31906,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.SourcePos(self__.line,self__.column,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31906),null));
}
}
});

the.parsatron.SourcePos.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
});

the.parsatron.SourcePos.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31906){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.SourcePos(self__.line,self__.column,G__31906,self__.__extmap,self__.__hash));
});

the.parsatron.SourcePos.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.SourcePos.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"column","column",-576213674,null)], null);
});

the.parsatron.SourcePos.cljs$lang$type = true;

the.parsatron.SourcePos.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/SourcePos",null,(1),null));
});

the.parsatron.SourcePos.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/SourcePos");
});

/**
 * Positional factory function for the.parsatron/SourcePos.
 */
the.parsatron.__GT_SourcePos = (function the$parsatron$__GT_SourcePos(line,column){
return (new the.parsatron.SourcePos(line,column,null,null,null));
});

/**
 * Factory function for the.parsatron/SourcePos, taking a map of keywords to field values.
 */
the.parsatron.map__GT_SourcePos = (function the$parsatron$map__GT_SourcePos(G__31910){
return (new the.parsatron.SourcePos(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__31910),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__31910),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31910,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095))),null));
});


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
the.parsatron.Continue = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.Continue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.Continue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31917,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31921 = k31917;
var G__31921__$1 = (((G__31921 instanceof cljs.core.Keyword))?G__31921.fqn:null);
switch (G__31921__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31917,else__4177__auto__);

}
});

the.parsatron.Continue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.Continue{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
});

the.parsatron.Continue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31916){
var self__ = this;
var G__31916__$1 = this;
return (new cljs.core.RecordIter((0),G__31916__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.Continue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.Continue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.Continue(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.Continue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.Continue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-163465453 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.Continue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31918,other31919){
var self__ = this;
var this31918__$1 = this;
return ((!((other31919 == null))) && ((this31918__$1.constructor === other31919.constructor)) && (cljs.core._EQ_.call(null,this31918__$1.fn,other31919.fn)) && (cljs.core._EQ_.call(null,this31918__$1.__extmap,other31919.__extmap)));
});

the.parsatron.Continue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.Continue(self__.fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.Continue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31916){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31922 = cljs.core.keyword_identical_QMARK_;
var expr__31923 = k__4182__auto__;
if(cljs.core.truth_(pred__31922.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__31923))){
return (new the.parsatron.Continue(G__31916,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.Continue(self__.fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31916),null));
}
});

the.parsatron.Continue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
});

the.parsatron.Continue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31916){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.Continue(self__.fn,G__31916,self__.__extmap,self__.__hash));
});

the.parsatron.Continue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.Continue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
});

the.parsatron.Continue.cljs$lang$type = true;

the.parsatron.Continue.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/Continue",null,(1),null));
});

the.parsatron.Continue.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/Continue");
});

/**
 * Positional factory function for the.parsatron/Continue.
 */
the.parsatron.__GT_Continue = (function the$parsatron$__GT_Continue(fn){
return (new the.parsatron.Continue(fn,null,null,null));
});

/**
 * Factory function for the.parsatron/Continue, taking a map of keywords to field values.
 */
the.parsatron.map__GT_Continue = (function the$parsatron$map__GT_Continue(G__31920){
return (new the.parsatron.Continue(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__31920),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31920,new cljs.core.Keyword(null,"fn","fn",-1175266204))),null));
});


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
the.parsatron.Ok = (function (item,__meta,__extmap,__hash){
this.item = item;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.Ok.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.Ok.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31927,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31931 = k31927;
var G__31931__$1 = (((G__31931 instanceof cljs.core.Keyword))?G__31931.fqn:null);
switch (G__31931__$1) {
case "item":
return self__.item;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31927,else__4177__auto__);

}
});

the.parsatron.Ok.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.Ok{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item","item",249373802),self__.item],null))], null),self__.__extmap));
});

the.parsatron.Ok.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31926){
var self__ = this;
var G__31926__$1 = this;
return (new cljs.core.RecordIter((0),G__31926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.Ok.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.Ok.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.Ok(self__.item,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.Ok.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.Ok.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-563631699 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.Ok.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31928,other31929){
var self__ = this;
var this31928__$1 = this;
return ((!((other31929 == null))) && ((this31928__$1.constructor === other31929.constructor)) && (cljs.core._EQ_.call(null,this31928__$1.item,other31929.item)) && (cljs.core._EQ_.call(null,this31928__$1.__extmap,other31929.__extmap)));
});

the.parsatron.Ok.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.Ok(self__.item,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.Ok.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31926){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31932 = cljs.core.keyword_identical_QMARK_;
var expr__31933 = k__4182__auto__;
if(cljs.core.truth_(pred__31932.call(null,new cljs.core.Keyword(null,"item","item",249373802),expr__31933))){
return (new the.parsatron.Ok(G__31926,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.Ok(self__.item,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31926),null));
}
});

the.parsatron.Ok.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"item","item",249373802),self__.item,null))], null),self__.__extmap));
});

the.parsatron.Ok.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31926){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.Ok(self__.item,G__31926,self__.__extmap,self__.__hash));
});

the.parsatron.Ok.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.Ok.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null)], null);
});

the.parsatron.Ok.cljs$lang$type = true;

the.parsatron.Ok.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/Ok",null,(1),null));
});

the.parsatron.Ok.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/Ok");
});

/**
 * Positional factory function for the.parsatron/Ok.
 */
the.parsatron.__GT_Ok = (function the$parsatron$__GT_Ok(item){
return (new the.parsatron.Ok(item,null,null,null));
});

/**
 * Factory function for the.parsatron/Ok, taking a map of keywords to field values.
 */
the.parsatron.map__GT_Ok = (function the$parsatron$map__GT_Ok(G__31930){
return (new the.parsatron.Ok(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(G__31930),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31930,new cljs.core.Keyword(null,"item","item",249373802))),null));
});


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
the.parsatron.Err = (function (errmsg,__meta,__extmap,__hash){
this.errmsg = errmsg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.Err.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.Err.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31937,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31941 = k31937;
var G__31941__$1 = (((G__31941 instanceof cljs.core.Keyword))?G__31941.fqn:null);
switch (G__31941__$1) {
case "errmsg":
return self__.errmsg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31937,else__4177__auto__);

}
});

the.parsatron.Err.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.Err{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"errmsg","errmsg",719608620),self__.errmsg],null))], null),self__.__extmap));
});

the.parsatron.Err.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31936){
var self__ = this;
var G__31936__$1 = this;
return (new cljs.core.RecordIter((0),G__31936__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errmsg","errmsg",719608620)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.Err.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.Err.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.Err(self__.errmsg,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.Err.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.Err.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-669538235 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.Err.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31938,other31939){
var self__ = this;
var this31938__$1 = this;
return ((!((other31939 == null))) && ((this31938__$1.constructor === other31939.constructor)) && (cljs.core._EQ_.call(null,this31938__$1.errmsg,other31939.errmsg)) && (cljs.core._EQ_.call(null,this31938__$1.__extmap,other31939.__extmap)));
});

the.parsatron.Err.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errmsg","errmsg",719608620),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.Err(self__.errmsg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.Err.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31936){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31942 = cljs.core.keyword_identical_QMARK_;
var expr__31943 = k__4182__auto__;
if(cljs.core.truth_(pred__31942.call(null,new cljs.core.Keyword(null,"errmsg","errmsg",719608620),expr__31943))){
return (new the.parsatron.Err(G__31936,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.Err(self__.errmsg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31936),null));
}
});

the.parsatron.Err.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"errmsg","errmsg",719608620),self__.errmsg,null))], null),self__.__extmap));
});

the.parsatron.Err.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31936){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.Err(self__.errmsg,G__31936,self__.__extmap,self__.__hash));
});

the.parsatron.Err.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.Err.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"errmsg","errmsg",-1934827149,null)], null);
});

the.parsatron.Err.cljs$lang$type = true;

the.parsatron.Err.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/Err",null,(1),null));
});

the.parsatron.Err.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/Err");
});

/**
 * Positional factory function for the.parsatron/Err.
 */
the.parsatron.__GT_Err = (function the$parsatron$__GT_Err(errmsg){
return (new the.parsatron.Err(errmsg,null,null,null));
});

/**
 * Factory function for the.parsatron/Err, taking a map of keywords to field values.
 */
the.parsatron.map__GT_Err = (function the$parsatron$map__GT_Err(G__31940){
return (new the.parsatron.Err(new cljs.core.Keyword(null,"errmsg","errmsg",719608620).cljs$core$IFn$_invoke$arity$1(G__31940),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31940,new cljs.core.Keyword(null,"errmsg","errmsg",719608620))),null));
});

/**
 * Increment the source position by a single character, c. On newline,
 * increments the SourcePos's line number and resets the column, on
 * all other characters, increments the column
 */
the.parsatron.inc_sourcepos = (function the$parsatron$inc_sourcepos(p__31946,c){
var map__31947 = p__31946;
var map__31947__$1 = ((((!((map__31947 == null)))?(((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31947):map__31947);
var line = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core._EQ_.call(null,c,"\n")){
return (new the.parsatron.SourcePos((line + (1)),(1),null,null,null));
} else {
return (new the.parsatron.SourcePos(line,(column + (1)),null,null,null));
}
});

/**
 * @interface
 */
the.parsatron.ShowableError = function(){};

the.parsatron.show_error = (function the$parsatron$show_error(this$){
if(((!((this$ == null))) && (!((this$.the$parsatron$ShowableError$show_error$arity$1 == null))))){
return this$.the$parsatron$ShowableError$show_error$arity$1(this$);
} else {
var x__4213__auto__ = (((this$ == null))?null:this$);
var m__4214__auto__ = (the.parsatron.show_error[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,this$);
} else {
var m__4214__auto____$1 = (the.parsatron.show_error["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ShowableError.show-error",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {the.parsatron.ShowableError}
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
the.parsatron.ParseError = (function (pos,msgs,__meta,__extmap,__hash){
this.pos = pos;
this.msgs = msgs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
the.parsatron.ParseError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

the.parsatron.ParseError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k31950,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__31954 = k31950;
var G__31954__$1 = (((G__31954 instanceof cljs.core.Keyword))?G__31954.fqn:null);
switch (G__31954__$1) {
case "pos":
return self__.pos;

break;
case "msgs":
return self__.msgs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31950,else__4177__auto__);

}
});

the.parsatron.ParseError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#the.parsatron.ParseError{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs],null))], null),self__.__extmap));
});

the.parsatron.ParseError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31949){
var self__ = this;
var G__31949__$1 = this;
return (new cljs.core.RecordIter((0),G__31949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

the.parsatron.ParseError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

the.parsatron.ParseError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new the.parsatron.ParseError(self__.pos,self__.msgs,self__.__meta,self__.__extmap,self__.__hash));
});

the.parsatron.ParseError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

the.parsatron.ParseError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (-165288407 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

the.parsatron.ParseError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31951,other31952){
var self__ = this;
var this31951__$1 = this;
return ((!((other31952 == null))) && ((this31951__$1.constructor === other31952.constructor)) && (cljs.core._EQ_.call(null,this31951__$1.pos,other31952.pos)) && (cljs.core._EQ_.call(null,this31951__$1.msgs,other31952.msgs)) && (cljs.core._EQ_.call(null,this31951__$1.__extmap,other31952.__extmap)));
});

the.parsatron.ParseError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new the.parsatron.ParseError(self__.pos,self__.msgs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

the.parsatron.ParseError.prototype.the$parsatron$ShowableError$ = cljs.core.PROTOCOL_SENTINEL;

the.parsatron.ParseError.prototype.the$parsatron$ShowableError$show_error$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",self__.msgs))," at"," line: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(self__.pos))," column: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(self__.pos))].join('');
});

the.parsatron.ParseError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__31949){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__31955 = cljs.core.keyword_identical_QMARK_;
var expr__31956 = k__4182__auto__;
if(cljs.core.truth_(pred__31955.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__31956))){
return (new the.parsatron.ParseError(G__31949,self__.msgs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31955.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),expr__31956))){
return (new the.parsatron.ParseError(self__.pos,G__31949,self__.__meta,self__.__extmap,null));
} else {
return (new the.parsatron.ParseError(self__.pos,self__.msgs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__31949),null));
}
}
});

the.parsatron.ParseError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs,null))], null),self__.__extmap));
});

the.parsatron.ParseError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__31949){
var self__ = this;
var this__4173__auto____$1 = this;
return (new the.parsatron.ParseError(self__.pos,self__.msgs,G__31949,self__.__extmap,self__.__hash));
});

the.parsatron.ParseError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

the.parsatron.ParseError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null);
});

the.parsatron.ParseError.cljs$lang$type = true;

the.parsatron.ParseError.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"the.parsatron/ParseError",null,(1),null));
});

the.parsatron.ParseError.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"the.parsatron/ParseError");
});

/**
 * Positional factory function for the.parsatron/ParseError.
 */
the.parsatron.__GT_ParseError = (function the$parsatron$__GT_ParseError(pos,msgs){
return (new the.parsatron.ParseError(pos,msgs,null,null,null));
});

/**
 * Factory function for the.parsatron/ParseError, taking a map of keywords to field values.
 */
the.parsatron.map__GT_ParseError = (function the$parsatron$map__GT_ParseError(G__31953){
return (new the.parsatron.ParseError(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__31953),new cljs.core.Keyword(null,"msgs","msgs",-1176489773).cljs$core$IFn$_invoke$arity$1(G__31953),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31953,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"msgs","msgs",-1176489773))),null));
});

the.parsatron.unknown_error = (function the$parsatron$unknown_error(p__31959){
var map__31960 = p__31959;
var map__31960__$1 = ((((!((map__31960 == null)))?(((((map__31960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31960):map__31960);
var state = map__31960__$1;
var pos = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return (new the.parsatron.ParseError(pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error"], null),null,null,null));
});
the.parsatron.unexpect_error = (function the$parsatron$unexpect_error(msg,pos){
return (new the.parsatron.ParseError(pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Unexpected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),null,null,null));
});
the.parsatron.expect_error = (function the$parsatron$expect_error(msg,pos){
return (new the.parsatron.ParseError(pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),null,null,null));
});
the.parsatron.merge_errors = (function the$parsatron$merge_errors(p__31962,other_err){
var map__31963 = p__31962;
var map__31963__$1 = ((((!((map__31963 == null)))?(((((map__31963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31963):map__31963);
var err = map__31963__$1;
var pos = cljs.core.get.call(null,map__31963__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return (new the.parsatron.ParseError(pos,cljs.core.flatten.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773).cljs$core$IFn$_invoke$arity$1(err),new cljs.core.Keyword(null,"msgs","msgs",-1176489773).cljs$core$IFn$_invoke$arity$1(other_err))),null,null,null));
});
/**
 * A trampoline for executing potentially stack-blowing recursive
 * functions without running out of stack space. This particular
 * trampoline differs from clojure.core/trampoline by requiring
 * continuations to be wrapped in a Continue record. Will loop until
 * the value is no longer a Continue record, returning that.
 */
the.parsatron.parsatron_poline = (function the$parsatron$parsatron_poline(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31970 = arguments.length;
var i__4500__auto___31971 = (0);
while(true){
if((i__4500__auto___31971 < len__4499__auto___31970)){
args__4502__auto__.push((arguments[i__4500__auto___31971]));

var G__31972 = (i__4500__auto___31971 + (1));
i__4500__auto___31971 = G__31972;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return the.parsatron.parsatron_poline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

the.parsatron.parsatron_poline.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var value = cljs.core.apply.call(null,f,args);
while(true){
var pred__31967 = cljs.core.instance_QMARK_;
var expr__31968 = value;
if(cljs.core.truth_(pred__31967.call(null,the.parsatron.Continue,expr__31968))){
var G__31973 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(value).call(null);
value = G__31973;
continue;
} else {
return value;
}
break;
}
});

the.parsatron.parsatron_poline.cljs$lang$maxFixedArity = (1);

the.parsatron.parsatron_poline.cljs$lang$applyTo = (function (seq31965){
var G__31966 = cljs.core.first.call(null,seq31965);
var seq31965__$1 = cljs.core.next.call(null,seq31965);
return the.parsatron.parsatron_poline.cljs$core$IFn$_invoke$arity$variadic(G__31966,seq31965__$1);
});

the.parsatron.sequentially = (function the$parsatron$sequentially(f,value){
var pred__31974 = cljs.core.instance_QMARK_;
var expr__31975 = value;
if(cljs.core.truth_(pred__31974.call(null,the.parsatron.Continue,expr__31975))){
return (new the.parsatron.Continue(((function (pred__31974,expr__31975){
return (function (){
return the.parsatron.sequentially.call(null,f,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(value).call(null));
});})(pred__31974,expr__31975))
,null,null,null));
} else {
return f.call(null,value);
}
});
the.parsatron.fail = (function the$parsatron$fail(message){
return (new Error(message));
});
/**
 * Test for a single-character string.
 * 
 * ClojureScript doesn't support a character type, so we pretend it
 * does
 */
the.parsatron.char_QMARK_ = (function the$parsatron$char_QMARK_(x){
return ((typeof x === 'string') && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))));
});
/**
 * Tests if a character is a digit: [0-9]
 */
the.parsatron.digit_QMARK_ = (function the$parsatron$digit_QMARK_(c){
return cljs.core.re_matches.call(null,/\d/,c);
});
/**
 * Tests if a character is a letter: [a-zA-Z]
 */
the.parsatron.letter_QMARK_ = (function the$parsatron$letter_QMARK_(c){
return cljs.core.re_matches.call(null,/[a-zA-Z]/,c);
});
/**
 * A parser that always succeeds with the value given and consumes no
 * input
 */
the.parsatron.always = (function the$parsatron$always(x){
return (function (state,cok,cerr,eok,eerr){
return eok.call(null,x,state);
});
});
/**
 * Parse p, and then q. The function f must be of one argument, it
 * will be given the value of p and must return the q to follow p
 */
the.parsatron.bind = (function the$parsatron$bind(p,f){
return (function (state,cok,cerr,eok,eerr){
var pcok = (function the$parsatron$bind_$_pcok(item,state__$1){
return the.parsatron.sequentially.call(null,(function (q){
return (new the.parsatron.Continue((function (){
return q.call(null,state__$1,cok,cerr,cok,cerr);
}),null,null,null));
}),f.call(null,item));
});
var peok = (function the$parsatron$bind_$_peok(item,state__$1){
return the.parsatron.sequentially.call(null,(function (q){
return (new the.parsatron.Continue((function (){
return q.call(null,state__$1,cok,cerr,eok,eerr);
}),null,null,null));
}),f.call(null,item));
});
return (new the.parsatron.Continue((function (){
return p.call(null,state,pcok,cerr,peok,eerr);
}),null,null,null));
});
});
/**
 * Parse p and then q, returning q's value and discarding p's
 */
the.parsatron.nxt = (function the$parsatron$nxt(p,q){
return the.parsatron.bind.call(null,p,(function (_){
return q;
}));
});
/**
 * A parser that always fails, consuming no input
 */
the.parsatron.never = (function the$parsatron$never(){
return (function (state,cok,cerr,eok,eerr){
return eerr.call(null,the.parsatron.unknown_error.call(null,state));
});
});
/**
 * A parser that tries p, upon success, returning its value, and upon
 * failure (if no input was consumed) tries to parse q
 */
the.parsatron.either = (function the$parsatron$either(p,q){
return (function (state,cok,cerr,eok,eerr){
var peerr = (function the$parsatron$either_$_peerr(err_from_p){
var qeerr = (function the$parsatron$either_$_peerr_$_qeerr(err_from_q){
return eerr.call(null,the.parsatron.merge_errors.call(null,err_from_p,err_from_q));
});
return (new the.parsatron.Continue((function (){
return q.call(null,state,cok,cerr,eok,qeerr);
}),null,null,null));
});
return (new the.parsatron.Continue((function (){
return p.call(null,state,cok,cerr,eok,peerr);
}),null,null,null));
});
});
/**
 * A parser that will attempt to parse p, and upon failure never
 * consume any input
 */
the.parsatron.attempt = (function the$parsatron$attempt(p){
return (function (state,cok,cerr,eok,eerr){
return (new the.parsatron.Continue((function (){
return p.call(null,state,cok,eerr,eok,eerr);
}),null,null,null));
});
});
/**
 * Extract information from the Parser's current state. f should be a
 * fn of one argument, the parser's current state, and any value that
 * it deems worthy of returning will be returned by the entire parser.
 * No input is consumed by this parser, and the state itself is not
 * altered.
 */
the.parsatron.extract = (function the$parsatron$extract(f){
return (function (state,_,___$1,eok,___$2){
return eok.call(null,f.call(null,state),state);
});
});
/**
 * Return the Parser's current state
 */
the.parsatron.examine = (function the$parsatron$examine(){
return the.parsatron.extract.call(null,cljs.core.identity);
});
/**
 * A parser that returns the current line number. It consumes no input
 */
the.parsatron.lineno = (function the$parsatron$lineno(){
return the.parsatron.extract.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"pos","pos",-864607220)));
});
/**
 * Consume a single item from the head of the input if (consume? item)
 * is not nil. This parser will fail to consume if either the consume?
 * test returns nil or if the input is empty
 */
the.parsatron.token = (function the$parsatron$token(consume_QMARK_){
return (function (p__31977,cok,cerr,eok,eerr){
var map__31978 = p__31977;
var map__31978__$1 = ((((!((map__31978 == null)))?(((((map__31978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978):map__31978);
var state = map__31978__$1;
var input = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pos = cljs.core.get.call(null,map__31978__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(!(cljs.core.empty_QMARK_.call(null,input))){
var tok = cljs.core.first.call(null,input);
if(cljs.core.truth_(consume_QMARK_.call(null,tok))){
return cok.call(null,tok,(new the.parsatron.InputState(cljs.core.rest.call(null,input),the.parsatron.inc_sourcepos.call(null,pos,tok),null,null,null)));
} else {
return eerr.call(null,the.parsatron.unexpect_error.call(null,["token '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tok),"'"].join(''),pos));
}
} else {
return eerr.call(null,the.parsatron.unexpect_error.call(null,"end of input",pos));
}
});
});
/**
 * Consume zero or more p. A RuntimeException will be thrown if this
 * combinator is applied to a parser that accepts the empty string, as
 * that would cause the parser to loop forever
 */
the.parsatron.many = (function the$parsatron$many(p){
var many_err = (function the$parsatron$many_$_many_err(_,___$1){
return the.parsatron.fail.call(null,"Combinator '*' is applied to a parser that accepts an empty string");
});
var safe_p = (function the$parsatron$many_$_safe_p(state,cok,cerr,eok,eerr){
return (new the.parsatron.Continue((function (){
return p.call(null,state,cok,cerr,many_err,eerr);
}),null,null,null));
});
return the.parsatron.either.call(null,the.parsatron.bind.call(null,safe_p,(function (x){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,safe_p),(function (xs){
return the.parsatron.always.call(null,cljs.core.cons.call(null,x,xs));
}));
})),the.parsatron.always.call(null,cljs.core.PersistentVector.EMPTY));
});
/**
 * Consume exactly n number of p
 */
the.parsatron.times = (function the$parsatron$times(n,p){
if(cljs.core._EQ_.call(null,n,(0))){
return the.parsatron.always.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return the.parsatron.bind.call(null,p,(function (x){
return the.parsatron.bind.call(null,the.parsatron.times.call(null,(n - (1)),p),(function (xs){
return the.parsatron.always.call(null,cljs.core.cons.call(null,x,xs));
}));
}));
}
});
/**
 * A parser that upon success consumes no input, but returns what was
 * parsed
 */
the.parsatron.lookahead = (function the$parsatron$lookahead(p){
return (function (state,cok,cerr,eok,eerr){
var ok = (function the$parsatron$lookahead_$_ok(item,_){
return eok.call(null,item,state);
});
return (new the.parsatron.Continue((function (){
return p.call(null,state,ok,cerr,eok,eerr);
}),null,null,null));
});
});
/**
 * A varargs version of either that tries each given parser in turn,
 * returning the value of the first one that succeeds
 */
the.parsatron.choice = (function the$parsatron$choice(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31981 = arguments.length;
var i__4500__auto___31982 = (0);
while(true){
if((i__4500__auto___31982 < len__4499__auto___31981)){
args__4502__auto__.push((arguments[i__4500__auto___31982]));

var G__31983 = (i__4500__auto___31982 + (1));
i__4500__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return the.parsatron.choice.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

the.parsatron.choice.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.empty_QMARK_.call(null,parsers)){
return the.parsatron.never.call(null);
} else {
var p = cljs.core.first.call(null,parsers);
return the.parsatron.either.call(null,p,cljs.core.apply.call(null,the.parsatron.choice,cljs.core.rest.call(null,parsers)));
}
});

the.parsatron.choice.cljs$lang$maxFixedArity = (0);

the.parsatron.choice.cljs$lang$applyTo = (function (seq31980){
return the.parsatron.choice.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31980));
});

/**
 * A parser to detect the end of input. If there is nothing more to
 * consume from the underlying input, this parser suceeds with a nil
 * value, otherwise it fails
 */
the.parsatron.eof = (function the$parsatron$eof(){
return (function (p__31984,cok,cerr,eok,eerr){
var map__31985 = p__31984;
var map__31985__$1 = ((((!((map__31985 == null)))?(((((map__31985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31985):map__31985);
var state = map__31985__$1;
var input = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pos = cljs.core.get.call(null,map__31985__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.empty_QMARK_.call(null,input)){
return eok.call(null,null,state);
} else {
return eerr.call(null,the.parsatron.expect_error.call(null,"end of input",pos));
}
});
});
/**
 * Consume the given character
 */
the.parsatron.char$ = (function the$parsatron$char(c){
return the.parsatron.token.call(null,(function (p1__31987_SHARP_){
return cljs.core._EQ_.call(null,c,p1__31987_SHARP_);
}));
});
/**
 * Consume any character
 */
the.parsatron.any_char = (function the$parsatron$any_char(){
return the.parsatron.token.call(null,(function (p1__31988_SHARP_){
return the.parsatron.char_QMARK_.call(null,p1__31988_SHARP_);
}));
});
/**
 * Consume a digit [0-9] character
 */
the.parsatron.digit = (function the$parsatron$digit(){
return the.parsatron.token.call(null,the.parsatron.digit_QMARK_);
});
/**
 * Consume a letter [a-zA-Z] character
 */
the.parsatron.letter = (function the$parsatron$letter(){
return the.parsatron.token.call(null,the.parsatron.letter_QMARK_);
});
/**
 * Consume the given string
 */
the.parsatron.string = (function the$parsatron$string(s){
return cljs.core.reduce.call(null,the.parsatron.nxt,cljs.core.concat.call(null,cljs.core.map.call(null,the.parsatron.char$,s),(new cljs.core.List(null,the.parsatron.always.call(null,s),null,(1),null))));
});
/**
 * Parse p after parsing open and before parsing close, returning the
 * value of p and discarding the values of open and close
 */
the.parsatron.between = (function the$parsatron$between(open,close,p){
return the.parsatron.bind.call(null,open,(function (_){
return the.parsatron.bind.call(null,p,(function (x){
return the.parsatron.bind.call(null,close,(function (___$1){
return the.parsatron.always.call(null,x);
}));
}));
}));
});
/**
 * Consume 1 or more p
 */
the.parsatron.many1 = (function the$parsatron$many1(p){
return the.parsatron.bind.call(null,p,(function (x){
return the.parsatron.bind.call(null,the.parsatron.many.call(null,p),(function (xs){
return the.parsatron.always.call(null,cljs.core.cons.call(null,x,xs));
}));
}));
});
/**
 * Execute a parser p, given some state, Returns Ok or Err
 */
the.parsatron.run_parser = (function the$parsatron$run_parser(p,state){
return the.parsatron.parsatron_poline.call(null,p,state,(function the$parsatron$run_parser_$_cok(item,_){
return (new the.parsatron.Ok(item,null,null,null));
}),(function the$parsatron$run_parser_$_cerr(err){
return (new the.parsatron.Err(the.parsatron.show_error.call(null,err),null,null,null));
}),(function the$parsatron$run_parser_$_eok(item,_){
return (new the.parsatron.Ok(item,null,null,null));
}),(function the$parsatron$run_parser_$_eerr(err){
return (new the.parsatron.Err(the.parsatron.show_error.call(null,err),null,null,null));
}));
});
/**
 * Run a parser p over some input. The input can be a string or a seq
 * of tokens, if the parser produces an error, its message is wrapped
 * in a RuntimeException and thrown, and if the parser succeeds, its
 * value is returned
 */
the.parsatron.run = (function the$parsatron$run(p,input){
var result = the.parsatron.run_parser.call(null,p,(new the.parsatron.InputState(input,(new the.parsatron.SourcePos((1),(1),null,null,null)),null,null,null)));
var pred__31989 = cljs.core.instance_QMARK_;
var expr__31990 = result;
if(cljs.core.truth_(pred__31989.call(null,the.parsatron.Ok,expr__31990))){
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(result);
} else {
if(cljs.core.truth_(pred__31989.call(null,the.parsatron.Err,expr__31990))){
throw the.parsatron.fail.call(null,new cljs.core.Keyword(null,"errmsg","errmsg",719608620).cljs$core$IFn$_invoke$arity$1(result));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31990)].join('')));
}
}
});

//# sourceMappingURL=parsatron.js.map?rel=1525291331439
