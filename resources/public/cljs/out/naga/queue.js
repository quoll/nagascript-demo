// Compiled by ClojureScript 1.10.126 {}
goog.provide('naga.queue');
goog.require('cljs.core');
goog.require('schema.core');

/**
 * @interface
 */
naga.queue.PQueue = function(){};

/**
 * Returns the number of items in the queue
 */
naga.queue.q_count = (function naga$queue$q_count(queue){
if(((!((queue == null))) && (!((queue.naga$queue$PQueue$q_count$arity$1 == null))))){
return queue.naga$queue$PQueue$q_count$arity$1(queue);
} else {
var x__4213__auto__ = (((queue == null))?null:queue);
var m__4214__auto__ = (naga.queue.q_count[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,queue);
} else {
var m__4214__auto____$1 = (naga.queue.q_count["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,queue);
} else {
throw cljs.core.missing_protocol.call(null,"PQueue.q-count",queue);
}
}
}
});

/**
 * Returns the head of the queue
 */
naga.queue.head = (function naga$queue$head(queue){
if(((!((queue == null))) && (!((queue.naga$queue$PQueue$head$arity$1 == null))))){
return queue.naga$queue$PQueue$head$arity$1(queue);
} else {
var x__4213__auto__ = (((queue == null))?null:queue);
var m__4214__auto__ = (naga.queue.head[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,queue);
} else {
var m__4214__auto____$1 = (naga.queue.head["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,queue);
} else {
throw cljs.core.missing_protocol.call(null,"PQueue.head",queue);
}
}
}
});

/**
 * Removes the head from the queue
 */
naga.queue.pop = (function naga$queue$pop(queue){
if(((!((queue == null))) && (!((queue.naga$queue$PQueue$pop$arity$1 == null))))){
return queue.naga$queue$PQueue$pop$arity$1(queue);
} else {
var x__4213__auto__ = (((queue == null))?null:queue);
var m__4214__auto__ = (naga.queue.pop[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,queue);
} else {
var m__4214__auto____$1 = (naga.queue.pop["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,queue);
} else {
throw cljs.core.missing_protocol.call(null,"PQueue.pop",queue);
}
}
}
});

/**
 * Adds an element to the queue if it isn't already present, returning the new queue. Uses update-fn on the element if it is already in the queue
 */
naga.queue.add = (function naga$queue$add(var_args){
var G__36024 = arguments.length;
switch (G__36024) {
case 2:
return naga.queue.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return naga.queue.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

naga.queue.add.cljs$core$IFn$_invoke$arity$2 = (function (queue,element){
if(((!((queue == null))) && (!((queue.naga$queue$PQueue$add$arity$2 == null))))){
return queue.naga$queue$PQueue$add$arity$2(queue,element);
} else {
var x__4213__auto__ = (((queue == null))?null:queue);
var m__4214__auto__ = (naga.queue.add[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,queue,element);
} else {
var m__4214__auto____$1 = (naga.queue.add["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,queue,element);
} else {
throw cljs.core.missing_protocol.call(null,"PQueue.add",queue);
}
}
}
});

naga.queue.add.cljs$core$IFn$_invoke$arity$3 = (function (queue,update_fn,element){
if(((!((queue == null))) && (!((queue.naga$queue$PQueue$add$arity$3 == null))))){
return queue.naga$queue$PQueue$add$arity$3(queue,update_fn,element);
} else {
var x__4213__auto__ = (((queue == null))?null:queue);
var m__4214__auto__ = (naga.queue.add[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,queue,update_fn,element);
} else {
var m__4214__auto____$1 = (naga.queue.add["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,queue,update_fn,element);
} else {
throw cljs.core.missing_protocol.call(null,"PQueue.add",queue);
}
}
}
});

naga.queue.add.cljs$lang$maxFixedArity = 3;


naga.queue.PQueueType = schema.core.pred.call(null,(function (p1__36026_SHARP_){
if(!((p1__36026_SHARP_ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__36026_SHARP_.naga$queue$PQueue$)))){
return true;
} else {
if((!p1__36026_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,naga.queue.PQueue,p1__36026_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,naga.queue.PQueue,p1__36026_SHARP_);
}
}));
var ufv___36036 = schema.utils.use_fn_validation;
var output_schema36029_36037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema36030_36038 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null))),schema.core.one.call(null,schema.core.maybe.call(null,schema.core.make_fn_schema.call(null,schema.core.Num,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),cljs.core.with_meta(new cljs.core.Symbol(null,"salience","salience",-1653217009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)))], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker36031_36039 = (new cljs.core.Delay(((function (ufv___36036,output_schema36029_36037,input_schema36030_36038){
return (function (){
return schema.core.checker.call(null,input_schema36030_36038);
});})(ufv___36036,output_schema36029_36037,input_schema36030_36038))
,null));
var output_checker36032_36040 = (new cljs.core.Delay(((function (ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039){
return (function (){
return schema.core.checker.call(null,output_schema36029_36037);
});})(ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039))
,null));
var ret__2067__auto___36041 = /**
 * Inputs: [s :- [s/Any] salience :- (s/maybe (=> s/Num s/Any)) e :- s/Any]
 *   Returns: [s/Any]
 */
naga.queue.insert_by = ((function (ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039,output_checker36032_36040){
return (function naga$queue$insert_by(G__36033,G__36034,G__36035){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36036);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36042 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36033,G__36034,G__36035], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-by","insert-by",-1991114914,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),input_schema36030_36038,cljs.core.deref.call(null,input_checker36031_36039),args__657__auto___36042);
} else {
var temp__5457__auto___36043 = cljs.core.deref.call(null,input_checker36031_36039).call(null,args__657__auto___36042);
if(cljs.core.truth_(temp__5457__auto___36043)){
var error__658__auto___36044 = temp__5457__auto___36043;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-by","insert-by",-1991114914,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___36044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36030_36038,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36042,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36044], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var s = G__36033;
var salience = G__36034;
var e = G__36035;
while(true){
var preamble = (cljs.core.truth_((function (){var and__3913__auto__ = salience;
if(cljs.core.truth_(and__3913__auto__)){
return salience.call(null,e);
} else {
return and__3913__auto__;
}
})())?cljs.core.take_while.call(null,((function (validate__656__auto__,ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039,output_checker36032_36040){
return (function (p1__36028_SHARP_){
return (salience.call(null,e) >= salience.call(null,p1__36028_SHARP_));
});})(validate__656__auto__,ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039,output_checker36032_36040))
,s):s);
return cljs.core.concat.call(null,preamble,cljs.core.cons.call(null,e,cljs.core.drop.call(null,cljs.core.count.call(null,preamble),s)));
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-by","insert-by",-1991114914,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),output_schema36029_36037,cljs.core.deref.call(null,output_checker36032_36040),o__659__auto__);
} else {
var temp__5457__auto___36045 = cljs.core.deref.call(null,output_checker36032_36040).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36045)){
var error__658__auto___36046 = temp__5457__auto___36045;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"insert-by","insert-by",-1991114914,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__658__auto___36046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36029_36037,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36046], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36036,output_schema36029_36037,input_schema36030_36038,input_checker36031_36039,output_checker36032_36040))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.queue.insert_by),schema.core.__GT_FnSchema.call(null,output_schema36029_36037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36030_36038], null)));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {naga.queue.PQueue}
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
naga.queue.SalienceQueue = (function (q,h,id_fn,salience_fn,__meta,__extmap,__hash){
this.q = q;
this.h = h;
this.id_fn = id_fn;
this.salience_fn = salience_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
naga.queue.SalienceQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4174__auto__,k__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
return this__4174__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4175__auto__,null);
});

naga.queue.SalienceQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4176__auto__,k36048,else__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
var G__36052 = k36048;
var G__36052__$1 = (((G__36052 instanceof cljs.core.Keyword))?G__36052.fqn:null);
switch (G__36052__$1) {
case "q":
return self__.q;

break;
case "h":
return self__.h;

break;
case "id-fn":
return self__.id_fn;

break;
case "salience-fn":
return self__.salience_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36048,else__4177__auto__);

}
});

naga.queue.SalienceQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4188__auto__,writer__4189__auto__,opts__4190__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var pr_pair__4191__auto__ = ((function (this__4188__auto____$1){
return (function (keyval__4192__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,cljs.core.pr_writer,""," ","",opts__4190__auto__,keyval__4192__auto__);
});})(this__4188__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4189__auto__,pr_pair__4191__auto__,"#naga.queue.SalienceQueue{",", ","}",opts__4190__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"q","q",689001697),self__.q],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id-fn","id-fn",316222798),self__.id_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595),self__.salience_fn],null))], null),self__.__extmap));
});

naga.queue.SalienceQueue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36047){
var self__ = this;
var G__36047__$1 = this;
return (new cljs.core.RecordIter((0),G__36047__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

naga.queue.SalienceQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4172__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return self__.__meta;
});

naga.queue.SalienceQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return (new naga.queue.SalienceQueue(self__.q,self__.h,self__.id_fn,self__.salience_fn,self__.__meta,self__.__extmap,self__.__hash));
});

naga.queue.SalienceQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4178__auto__){
var self__ = this;
var this__4178__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

naga.queue.SalienceQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
var h__4032__auto__ = self__.__hash;
if(!((h__4032__auto__ == null))){
return h__4032__auto__;
} else {
var h__4032__auto____$1 = ((function (h__4032__auto__,this__4170__auto____$1){
return (function (coll__4171__auto__){
return (1961940928 ^ cljs.core.hash_unordered_coll.call(null,coll__4171__auto__));
});})(h__4032__auto__,this__4170__auto____$1))
.call(null,this__4170__auto____$1);
self__.__hash = h__4032__auto____$1;

return h__4032__auto____$1;
}
});

naga.queue.SalienceQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36049,other36050){
var self__ = this;
var this36049__$1 = this;
return ((!((other36050 == null))) && ((this36049__$1.constructor === other36050.constructor)) && (cljs.core._EQ_.call(null,this36049__$1.q,other36050.q)) && (cljs.core._EQ_.call(null,this36049__$1.h,other36050.h)) && (cljs.core._EQ_.call(null,this36049__$1.id_fn,other36050.id_fn)) && (cljs.core._EQ_.call(null,this36049__$1.salience_fn,other36050.salience_fn)) && (cljs.core._EQ_.call(null,this36049__$1.__extmap,other36050.__extmap)));
});

naga.queue.SalienceQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4183__auto__,k__4184__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595),null,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4184__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4183__auto____$1),self__.__meta),k__4184__auto__);
} else {
return (new naga.queue.SalienceQueue(self__.q,self__.h,self__.id_fn,self__.salience_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4184__auto__)),null));
}
});

naga.queue.SalienceQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4181__auto__,k__4182__auto__,G__36047){
var self__ = this;
var this__4181__auto____$1 = this;
var pred__36053 = cljs.core.keyword_identical_QMARK_;
var expr__36054 = k__4182__auto__;
if(cljs.core.truth_(pred__36053.call(null,new cljs.core.Keyword(null,"q","q",689001697),expr__36054))){
return (new naga.queue.SalienceQueue(G__36047,self__.h,self__.id_fn,self__.salience_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36053.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36054))){
return (new naga.queue.SalienceQueue(self__.q,G__36047,self__.id_fn,self__.salience_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36053.call(null,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),expr__36054))){
return (new naga.queue.SalienceQueue(self__.q,self__.h,G__36047,self__.salience_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36053.call(null,new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595),expr__36054))){
return (new naga.queue.SalienceQueue(self__.q,self__.h,self__.id_fn,G__36047,self__.__meta,self__.__extmap,null));
} else {
return (new naga.queue.SalienceQueue(self__.q,self__.h,self__.id_fn,self__.salience_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4182__auto__,G__36047),null));
}
}
}
}
});

naga.queue.SalienceQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"q","q",689001697),self__.q,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id-fn","id-fn",316222798),self__.id_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595),self__.salience_fn,null))], null),self__.__extmap));
});

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$ = cljs.core.PROTOCOL_SENTINEL;

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$q_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.q);
});

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$head$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,self__.q);
});

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return naga.queue.__GT_SalienceQueue.call(null,cljs.core.rest.call(null,self__.q),cljs.core.disj.call(null,self__.h,self__.id_fn.call(null,cljs.core.first.call(null,self__.q))),self__.id_fn,self__.salience_fn);
});

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$add$arity$2 = (function (e,element){
var self__ = this;
var e__$1 = this;
return e__$1.naga$queue$PQueue$add$arity$3(null,cljs.core.identity,element);
});

naga.queue.SalienceQueue.prototype.naga$queue$PQueue$add$arity$3 = (function (this$,update_fn,element){
var self__ = this;
var this$__$1 = this;
var id = self__.id_fn.call(null,element);
if(cljs.core.truth_(self__.h.call(null,id))){
if(cljs.core._EQ_.call(null,cljs.core.identity,update_fn)){
return this$__$1;
} else {
var updater_fn = ((function (id,this$__$1){
return (function (e){
if(cljs.core._EQ_.call(null,id,self__.id_fn.call(null,e))){
return update_fn.call(null,e);
} else {
return e;
}
});})(id,this$__$1))
;
return naga.queue.__GT_SalienceQueue.call(null,cljs.core.map.call(null,updater_fn,self__.q),self__.h,self__.id_fn,self__.salience_fn);
}
} else {
return naga.queue.__GT_SalienceQueue.call(null,naga.queue.insert_by.call(null,self__.q,self__.salience_fn,element),cljs.core.conj.call(null,self__.h,id),self__.id_fn,self__.salience_fn);
}
});

naga.queue.SalienceQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4173__auto__,G__36047){
var self__ = this;
var this__4173__auto____$1 = this;
return (new naga.queue.SalienceQueue(self__.q,self__.h,self__.id_fn,self__.salience_fn,G__36047,self__.__extmap,self__.__hash));
});

naga.queue.SalienceQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4179__auto__,entry__4180__auto__){
var self__ = this;
var this__4179__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4180__auto__)){
return this__4179__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4180__auto__,(0)),cljs.core._nth.call(null,entry__4180__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4179__auto____$1,entry__4180__auto__);
}
});

naga.queue.SalienceQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"salience-fn","salience-fn",-973104174,null)], null);
});

naga.queue.SalienceQueue.cljs$lang$type = true;

naga.queue.SalienceQueue.cljs$lang$ctorPrSeq = (function (this__4210__auto__){
return (new cljs.core.List(null,"naga.queue/SalienceQueue",null,(1),null));
});

naga.queue.SalienceQueue.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"naga.queue/SalienceQueue");
});

/**
 * Positional factory function for naga.queue/SalienceQueue.
 */
naga.queue.__GT_SalienceQueue = (function naga$queue$__GT_SalienceQueue(q,h,id_fn,salience_fn){
return (new naga.queue.SalienceQueue(q,h,id_fn,salience_fn,null,null,null));
});

/**
 * Factory function for naga.queue/SalienceQueue, taking a map of keywords to field values.
 */
naga.queue.map__GT_SalienceQueue = (function naga$queue$map__GT_SalienceQueue(G__36051){
return (new naga.queue.SalienceQueue(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(G__36051),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36051),new cljs.core.Keyword(null,"id-fn","id-fn",316222798).cljs$core$IFn$_invoke$arity$1(G__36051),new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595).cljs$core$IFn$_invoke$arity$1(G__36051),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36051,new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"salience-fn","salience-fn",1681331595))),null));
});

var ufv___36068 = schema.utils.use_fn_validation;
var output_schema36057_36069 = schema.core.Any;
var input_schema36058_36070 = cljs.core.PersistentVector.EMPTY;
var input_schema36061_36071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.make_fn_schema.call(null,schema.core.Num,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),cljs.core.with_meta(new cljs.core.Symbol(null,"salience-fn","salience-fn",-973104174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)))], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol(null,"=>","=>",-813269641,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker36059_36072 = (new cljs.core.Delay(((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071){
return (function (){
return schema.core.checker.call(null,input_schema36058_36070);
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071))
,null));
var output_checker36060_36073 = (new cljs.core.Delay(((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072){
return (function (){
return schema.core.checker.call(null,output_schema36057_36069);
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072))
,null));
var input_checker36062_36074 = (new cljs.core.Delay(((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073){
return (function (){
return schema.core.checker.call(null,input_schema36061_36071);
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073))
,null));
var output_checker36063_36075 = (new cljs.core.Delay(((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074){
return (function (){
return schema.core.checker.call(null,output_schema36057_36069);
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074))
,null));
var ret__2067__auto___36076 = (function (){
/**
 * Inputs: ([] [salience-fn :- (s/maybe (=> s/Num s/Any)) id-fn :- (=> s/Any s/Any)])
 * 
 *   Create an empty queue. When called without arguments, salience is ignored,
 * and update and ID are just identity.
 */
naga.queue.new_queue = ((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075){
return (function naga$queue$new_queue(var_args){
var G__36067 = arguments.length;
switch (G__36067) {
case 0:
return naga.queue.new_queue.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return naga.queue.new_queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075))
;

naga.queue.new_queue.cljs$core$IFn$_invoke$arity$0 = ((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075){
return (function (){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36068);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36078 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),input_schema36058_36070,cljs.core.deref.call(null,input_checker36059_36072),args__657__auto___36078);
} else {
var temp__5457__auto___36079 = cljs.core.deref.call(null,input_checker36059_36072).call(null,args__657__auto___36078);
if(cljs.core.truth_(temp__5457__auto___36079)){
var error__658__auto___36080 = temp__5457__auto___36079;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),cljs.core.pr_str.call(null,error__658__auto___36080)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36058_36070,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36078,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36080], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){while(true){
return naga.queue.new_queue.call(null,null,cljs.core.identity);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),output_schema36057_36069,cljs.core.deref.call(null,output_checker36060_36073),o__659__auto__);
} else {
var temp__5457__auto___36081 = cljs.core.deref.call(null,output_checker36060_36073).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36081)){
var error__658__auto___36082 = temp__5457__auto___36081;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),cljs.core.pr_str.call(null,error__658__auto___36082)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36057_36069,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36082], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075))
;

naga.queue.new_queue.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075){
return (function (G__36064,G__36065){
var validate__656__auto__ = cljs.core.deref.call(null,ufv___36068);
if(cljs.core.truth_(validate__656__auto__)){
var args__657__auto___36083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36064,G__36065], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),input_schema36061_36071,cljs.core.deref.call(null,input_checker36062_36074),args__657__auto___36083);
} else {
var temp__5457__auto___36084 = cljs.core.deref.call(null,input_checker36062_36074).call(null,args__657__auto___36083);
if(cljs.core.truth_(temp__5457__auto___36084)){
var error__658__auto___36085 = temp__5457__auto___36084;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),cljs.core.pr_str.call(null,error__658__auto___36085)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36061_36071,new cljs.core.Keyword(null,"value","value",305978217),args__657__auto___36083,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36085], null));
} else {
}
}
} else {
}

var o__659__auto__ = (function (){var salience_fn = G__36064;
var id_fn = G__36065;
while(true){
return naga.queue.__GT_SalienceQueue.call(null,cljs.core.List.EMPTY,cljs.core.PersistentHashSet.EMPTY,id_fn,salience_fn);
break;
}
})();
if(cljs.core.truth_(validate__656__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),output_schema36057_36069,cljs.core.deref.call(null,output_checker36063_36075),o__659__auto__);
} else {
var temp__5457__auto___36086 = cljs.core.deref.call(null,output_checker36063_36075).call(null,o__659__auto__);
if(cljs.core.truth_(temp__5457__auto___36086)){
var error__658__auto___36087 = temp__5457__auto___36086;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"new-queue","new-queue",1120433918,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create an empty queue. When called without arguments, salience is ignored,\n   and update and ID are just identity."], null)),cljs.core.pr_str.call(null,error__658__auto___36087)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36057_36069,new cljs.core.Keyword(null,"value","value",305978217),o__659__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__658__auto___36087], null));
} else {
}
}
} else {
}

return o__659__auto__;
});})(ufv___36068,output_schema36057_36069,input_schema36058_36070,input_schema36061_36071,input_checker36059_36072,output_checker36060_36073,input_checker36062_36074,output_checker36063_36075))
;

naga.queue.new_queue.cljs$lang$maxFixedArity = 2;

return null;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,naga.queue.new_queue),schema.core.make_fn_schema.call(null,output_schema36057_36069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36058_36070,input_schema36061_36071], null)));

/**
 * Pulls everything off a queue into a seq.
 */
naga.queue.drain = (function naga$queue$drain(queue){
var s = cljs.core.PersistentVector.EMPTY;
var q = queue;
while(true){
var temp__5455__auto__ = naga.queue.head.call(null,q);
if(cljs.core.truth_(temp__5455__auto__)){
var e = temp__5455__auto__;
var G__36088 = cljs.core.conj.call(null,s,e);
var G__36089 = naga.queue.pop.call(null,q);
s = G__36088;
q = G__36089;
continue;
} else {
return s;
}
break;
}
});

//# sourceMappingURL=queue.js.map?rel=1525291336680
