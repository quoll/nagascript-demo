// Compiled by ClojureScript 1.10.126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40759 = arguments.length;
switch (G__40759) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40760 = (function (f,blockable,meta40761){
this.f = f;
this.blockable = blockable;
this.meta40761 = meta40761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40762,meta40761__$1){
var self__ = this;
var _40762__$1 = this;
return (new cljs.core.async.t_cljs$core$async40760(self__.f,self__.blockable,meta40761__$1));
});

cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40762){
var self__ = this;
var _40762__$1 = this;
return self__.meta40761;
});

cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40761","meta40761",907068244,null)], null);
});

cljs.core.async.t_cljs$core$async40760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40760";

cljs.core.async.t_cljs$core$async40760.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async40760");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40760.
 */
cljs.core.async.__GT_t_cljs$core$async40760 = (function cljs$core$async$__GT_t_cljs$core$async40760(f__$1,blockable__$1,meta40761){
return (new cljs.core.async.t_cljs$core$async40760(f__$1,blockable__$1,meta40761));
});

}

return (new cljs.core.async.t_cljs$core$async40760(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40766 = arguments.length;
switch (G__40766) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40769 = arguments.length;
switch (G__40769) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40772 = arguments.length;
switch (G__40772) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40774,ret){
return (function (){
return fn1.call(null,val_40774);
});})(val_40774,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40776 = arguments.length;
switch (G__40776) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4378__auto___40778 = n;
var x_40779 = (0);
while(true){
if((x_40779 < n__4378__auto___40778)){
(a[x_40779] = (0));

var G__40780 = (x_40779 + (1));
x_40779 = G__40780;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40781 = (i + (1));
i = G__40781;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40782 = (function (flag,meta40783){
this.flag = flag;
this.meta40783 = meta40783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40784,meta40783__$1){
var self__ = this;
var _40784__$1 = this;
return (new cljs.core.async.t_cljs$core$async40782(self__.flag,meta40783__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40784){
var self__ = this;
var _40784__$1 = this;
return self__.meta40783;
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40783","meta40783",655802639,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40782";

cljs.core.async.t_cljs$core$async40782.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async40782");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40782.
 */
cljs.core.async.__GT_t_cljs$core$async40782 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40782(flag__$1,meta40783){
return (new cljs.core.async.t_cljs$core$async40782(flag__$1,meta40783));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40782(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40785 = (function (flag,cb,meta40786){
this.flag = flag;
this.cb = cb;
this.meta40786 = meta40786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40787,meta40786__$1){
var self__ = this;
var _40787__$1 = this;
return (new cljs.core.async.t_cljs$core$async40785(self__.flag,self__.cb,meta40786__$1));
});

cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40787){
var self__ = this;
var _40787__$1 = this;
return self__.meta40786;
});

cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40786","meta40786",-250743650,null)], null);
});

cljs.core.async.t_cljs$core$async40785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40785";

cljs.core.async.t_cljs$core$async40785.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async40785");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40785.
 */
cljs.core.async.__GT_t_cljs$core$async40785 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40785(flag__$1,cb__$1,meta40786){
return (new cljs.core.async.t_cljs$core$async40785(flag__$1,cb__$1,meta40786));
});

}

return (new cljs.core.async.t_cljs$core$async40785(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40788_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40788_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40789_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40789_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3924__auto__ = wport;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40790 = (i + (1));
i = G__40790;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3924__auto__ = ret;
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3913__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3913__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3913__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40796 = arguments.length;
var i__4500__auto___40797 = (0);
while(true){
if((i__4500__auto___40797 < len__4499__auto___40796)){
args__4502__auto__.push((arguments[i__4500__auto___40797]));

var G__40798 = (i__4500__auto___40797 + (1));
i__4500__auto___40797 = G__40798;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40793){
var map__40794 = p__40793;
var map__40794__$1 = ((((!((map__40794 == null)))?(((((map__40794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40794):map__40794);
var opts = map__40794__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40791){
var G__40792 = cljs.core.first.call(null,seq40791);
var seq40791__$1 = cljs.core.next.call(null,seq40791);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40792,seq40791__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40800 = arguments.length;
switch (G__40800) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38835__auto___40846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___40846){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___40846){
return (function (state_40824){
var state_val_40825 = (state_40824[(1)]);
if((state_val_40825 === (7))){
var inst_40820 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
var statearr_40826_40847 = state_40824__$1;
(statearr_40826_40847[(2)] = inst_40820);

(statearr_40826_40847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (1))){
var state_40824__$1 = state_40824;
var statearr_40827_40848 = state_40824__$1;
(statearr_40827_40848[(2)] = null);

(statearr_40827_40848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (4))){
var inst_40803 = (state_40824[(7)]);
var inst_40803__$1 = (state_40824[(2)]);
var inst_40804 = (inst_40803__$1 == null);
var state_40824__$1 = (function (){var statearr_40828 = state_40824;
(statearr_40828[(7)] = inst_40803__$1);

return statearr_40828;
})();
if(cljs.core.truth_(inst_40804)){
var statearr_40829_40849 = state_40824__$1;
(statearr_40829_40849[(1)] = (5));

} else {
var statearr_40830_40850 = state_40824__$1;
(statearr_40830_40850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (13))){
var state_40824__$1 = state_40824;
var statearr_40831_40851 = state_40824__$1;
(statearr_40831_40851[(2)] = null);

(statearr_40831_40851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (6))){
var inst_40803 = (state_40824[(7)]);
var state_40824__$1 = state_40824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40824__$1,(11),to,inst_40803);
} else {
if((state_val_40825 === (3))){
var inst_40822 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40824__$1,inst_40822);
} else {
if((state_val_40825 === (12))){
var state_40824__$1 = state_40824;
var statearr_40832_40852 = state_40824__$1;
(statearr_40832_40852[(2)] = null);

(statearr_40832_40852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (2))){
var state_40824__$1 = state_40824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40824__$1,(4),from);
} else {
if((state_val_40825 === (11))){
var inst_40813 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
if(cljs.core.truth_(inst_40813)){
var statearr_40833_40853 = state_40824__$1;
(statearr_40833_40853[(1)] = (12));

} else {
var statearr_40834_40854 = state_40824__$1;
(statearr_40834_40854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (9))){
var state_40824__$1 = state_40824;
var statearr_40835_40855 = state_40824__$1;
(statearr_40835_40855[(2)] = null);

(statearr_40835_40855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (5))){
var state_40824__$1 = state_40824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40836_40856 = state_40824__$1;
(statearr_40836_40856[(1)] = (8));

} else {
var statearr_40837_40857 = state_40824__$1;
(statearr_40837_40857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (14))){
var inst_40818 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
var statearr_40838_40858 = state_40824__$1;
(statearr_40838_40858[(2)] = inst_40818);

(statearr_40838_40858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (10))){
var inst_40810 = (state_40824[(2)]);
var state_40824__$1 = state_40824;
var statearr_40839_40859 = state_40824__$1;
(statearr_40839_40859[(2)] = inst_40810);

(statearr_40839_40859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40825 === (8))){
var inst_40807 = cljs.core.async.close_BANG_.call(null,to);
var state_40824__$1 = state_40824;
var statearr_40840_40860 = state_40824__$1;
(statearr_40840_40860[(2)] = inst_40807);

(statearr_40840_40860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___40846))
;
return ((function (switch__38678__auto__,c__38835__auto___40846){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_40841 = [null,null,null,null,null,null,null,null];
(statearr_40841[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_40841[(1)] = (1));

return statearr_40841;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_40824){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_40824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e40842){if((e40842 instanceof Object)){
var ex__38682__auto__ = e40842;
var statearr_40843_40861 = state_40824;
(statearr_40843_40861[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40862 = state_40824;
state_40824 = G__40862;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_40824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_40824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___40846))
})();
var state__38837__auto__ = (function (){var statearr_40844 = f__38836__auto__.call(null);
(statearr_40844[(6)] = c__38835__auto___40846);

return statearr_40844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___40846))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40863){
var vec__40864 = p__40863;
var v = cljs.core.nth.call(null,vec__40864,(0),null);
var p = cljs.core.nth.call(null,vec__40864,(1),null);
var job = vec__40864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38835__auto___41035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results){
return (function (state_40871){
var state_val_40872 = (state_40871[(1)]);
if((state_val_40872 === (1))){
var state_40871__$1 = state_40871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40871__$1,(2),res,v);
} else {
if((state_val_40872 === (2))){
var inst_40868 = (state_40871[(2)]);
var inst_40869 = cljs.core.async.close_BANG_.call(null,res);
var state_40871__$1 = (function (){var statearr_40873 = state_40871;
(statearr_40873[(7)] = inst_40868);

return statearr_40873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40871__$1,inst_40869);
} else {
return null;
}
}
});})(c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results))
;
return ((function (switch__38678__auto__,c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_40874 = [null,null,null,null,null,null,null,null];
(statearr_40874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__);

(statearr_40874[(1)] = (1));

return statearr_40874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1 = (function (state_40871){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_40871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e40875){if((e40875 instanceof Object)){
var ex__38682__auto__ = e40875;
var statearr_40876_41036 = state_40871;
(statearr_40876_41036[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41037 = state_40871;
state_40871 = G__41037;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = function(state_40871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1.call(this,state_40871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results))
})();
var state__38837__auto__ = (function (){var statearr_40877 = f__38836__auto__.call(null);
(statearr_40877[(6)] = c__38835__auto___41035);

return statearr_40877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41035,res,vec__40864,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40878){
var vec__40879 = p__40878;
var v = cljs.core.nth.call(null,vec__40879,(0),null);
var p = cljs.core.nth.call(null,vec__40879,(1),null);
var job = vec__40879;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4378__auto___41038 = n;
var __41039 = (0);
while(true){
if((__41039 < n__4378__auto___41038)){
var G__40882_41040 = type;
var G__40882_41041__$1 = (((G__40882_41040 instanceof cljs.core.Keyword))?G__40882_41040.fqn:null);
switch (G__40882_41041__$1) {
case "compute":
var c__38835__auto___41043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41039,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (__41039,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function (state_40895){
var state_val_40896 = (state_40895[(1)]);
if((state_val_40896 === (1))){
var state_40895__$1 = state_40895;
var statearr_40897_41044 = state_40895__$1;
(statearr_40897_41044[(2)] = null);

(statearr_40897_41044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (2))){
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40895__$1,(4),jobs);
} else {
if((state_val_40896 === (3))){
var inst_40893 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40895__$1,inst_40893);
} else {
if((state_val_40896 === (4))){
var inst_40885 = (state_40895[(2)]);
var inst_40886 = process.call(null,inst_40885);
var state_40895__$1 = state_40895;
if(cljs.core.truth_(inst_40886)){
var statearr_40898_41045 = state_40895__$1;
(statearr_40898_41045[(1)] = (5));

} else {
var statearr_40899_41046 = state_40895__$1;
(statearr_40899_41046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (5))){
var state_40895__$1 = state_40895;
var statearr_40900_41047 = state_40895__$1;
(statearr_40900_41047[(2)] = null);

(statearr_40900_41047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (6))){
var state_40895__$1 = state_40895;
var statearr_40901_41048 = state_40895__$1;
(statearr_40901_41048[(2)] = null);

(statearr_40901_41048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (7))){
var inst_40891 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
var statearr_40902_41049 = state_40895__$1;
(statearr_40902_41049[(2)] = inst_40891);

(statearr_40902_41049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41039,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
;
return ((function (__41039,switch__38678__auto__,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_40903 = [null,null,null,null,null,null,null];
(statearr_40903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__);

(statearr_40903[(1)] = (1));

return statearr_40903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1 = (function (state_40895){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_40895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e40904){if((e40904 instanceof Object)){
var ex__38682__auto__ = e40904;
var statearr_40905_41050 = state_40895;
(statearr_40905_41050[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41051 = state_40895;
state_40895 = G__41051;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = function(state_40895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1.call(this,state_40895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__;
})()
;})(__41039,switch__38678__auto__,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
})();
var state__38837__auto__ = (function (){var statearr_40906 = f__38836__auto__.call(null);
(statearr_40906[(6)] = c__38835__auto___41043);

return statearr_40906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(__41039,c__38835__auto___41043,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
);


break;
case "async":
var c__38835__auto___41052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41039,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (__41039,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function (state_40919){
var state_val_40920 = (state_40919[(1)]);
if((state_val_40920 === (1))){
var state_40919__$1 = state_40919;
var statearr_40921_41053 = state_40919__$1;
(statearr_40921_41053[(2)] = null);

(statearr_40921_41053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (2))){
var state_40919__$1 = state_40919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40919__$1,(4),jobs);
} else {
if((state_val_40920 === (3))){
var inst_40917 = (state_40919[(2)]);
var state_40919__$1 = state_40919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40919__$1,inst_40917);
} else {
if((state_val_40920 === (4))){
var inst_40909 = (state_40919[(2)]);
var inst_40910 = async.call(null,inst_40909);
var state_40919__$1 = state_40919;
if(cljs.core.truth_(inst_40910)){
var statearr_40922_41054 = state_40919__$1;
(statearr_40922_41054[(1)] = (5));

} else {
var statearr_40923_41055 = state_40919__$1;
(statearr_40923_41055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (5))){
var state_40919__$1 = state_40919;
var statearr_40924_41056 = state_40919__$1;
(statearr_40924_41056[(2)] = null);

(statearr_40924_41056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (6))){
var state_40919__$1 = state_40919;
var statearr_40925_41057 = state_40919__$1;
(statearr_40925_41057[(2)] = null);

(statearr_40925_41057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40920 === (7))){
var inst_40915 = (state_40919[(2)]);
var state_40919__$1 = state_40919;
var statearr_40926_41058 = state_40919__$1;
(statearr_40926_41058[(2)] = inst_40915);

(statearr_40926_41058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41039,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
;
return ((function (__41039,switch__38678__auto__,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_40927 = [null,null,null,null,null,null,null];
(statearr_40927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__);

(statearr_40927[(1)] = (1));

return statearr_40927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1 = (function (state_40919){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_40919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e40928){if((e40928 instanceof Object)){
var ex__38682__auto__ = e40928;
var statearr_40929_41059 = state_40919;
(statearr_40929_41059[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41060 = state_40919;
state_40919 = G__41060;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = function(state_40919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1.call(this,state_40919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__;
})()
;})(__41039,switch__38678__auto__,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
})();
var state__38837__auto__ = (function (){var statearr_40930 = f__38836__auto__.call(null);
(statearr_40930[(6)] = c__38835__auto___41052);

return statearr_40930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(__41039,c__38835__auto___41052,G__40882_41040,G__40882_41041__$1,n__4378__auto___41038,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40882_41041__$1)].join('')));

}

var G__41061 = (__41039 + (1));
__41039 = G__41061;
continue;
} else {
}
break;
}

var c__38835__auto___41062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41062,jobs,results,process,async){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41062,jobs,results,process,async){
return (function (state_40952){
var state_val_40953 = (state_40952[(1)]);
if((state_val_40953 === (1))){
var state_40952__$1 = state_40952;
var statearr_40954_41063 = state_40952__$1;
(statearr_40954_41063[(2)] = null);

(statearr_40954_41063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40953 === (2))){
var state_40952__$1 = state_40952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40952__$1,(4),from);
} else {
if((state_val_40953 === (3))){
var inst_40950 = (state_40952[(2)]);
var state_40952__$1 = state_40952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40952__$1,inst_40950);
} else {
if((state_val_40953 === (4))){
var inst_40933 = (state_40952[(7)]);
var inst_40933__$1 = (state_40952[(2)]);
var inst_40934 = (inst_40933__$1 == null);
var state_40952__$1 = (function (){var statearr_40955 = state_40952;
(statearr_40955[(7)] = inst_40933__$1);

return statearr_40955;
})();
if(cljs.core.truth_(inst_40934)){
var statearr_40956_41064 = state_40952__$1;
(statearr_40956_41064[(1)] = (5));

} else {
var statearr_40957_41065 = state_40952__$1;
(statearr_40957_41065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40953 === (5))){
var inst_40936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40952__$1 = state_40952;
var statearr_40958_41066 = state_40952__$1;
(statearr_40958_41066[(2)] = inst_40936);

(statearr_40958_41066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40953 === (6))){
var inst_40933 = (state_40952[(7)]);
var inst_40938 = (state_40952[(8)]);
var inst_40938__$1 = cljs.core.async.chan.call(null,(1));
var inst_40939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40940 = [inst_40933,inst_40938__$1];
var inst_40941 = (new cljs.core.PersistentVector(null,2,(5),inst_40939,inst_40940,null));
var state_40952__$1 = (function (){var statearr_40959 = state_40952;
(statearr_40959[(8)] = inst_40938__$1);

return statearr_40959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40952__$1,(8),jobs,inst_40941);
} else {
if((state_val_40953 === (7))){
var inst_40948 = (state_40952[(2)]);
var state_40952__$1 = state_40952;
var statearr_40960_41067 = state_40952__$1;
(statearr_40960_41067[(2)] = inst_40948);

(statearr_40960_41067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40953 === (8))){
var inst_40938 = (state_40952[(8)]);
var inst_40943 = (state_40952[(2)]);
var state_40952__$1 = (function (){var statearr_40961 = state_40952;
(statearr_40961[(9)] = inst_40943);

return statearr_40961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40952__$1,(9),results,inst_40938);
} else {
if((state_val_40953 === (9))){
var inst_40945 = (state_40952[(2)]);
var state_40952__$1 = (function (){var statearr_40962 = state_40952;
(statearr_40962[(10)] = inst_40945);

return statearr_40962;
})();
var statearr_40963_41068 = state_40952__$1;
(statearr_40963_41068[(2)] = null);

(statearr_40963_41068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___41062,jobs,results,process,async))
;
return ((function (switch__38678__auto__,c__38835__auto___41062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_40964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__);

(statearr_40964[(1)] = (1));

return statearr_40964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1 = (function (state_40952){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_40952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e40965){if((e40965 instanceof Object)){
var ex__38682__auto__ = e40965;
var statearr_40966_41069 = state_40952;
(statearr_40966_41069[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41070 = state_40952;
state_40952 = G__41070;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = function(state_40952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1.call(this,state_40952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41062,jobs,results,process,async))
})();
var state__38837__auto__ = (function (){var statearr_40967 = f__38836__auto__.call(null);
(statearr_40967[(6)] = c__38835__auto___41062);

return statearr_40967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41062,jobs,results,process,async))
);


var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__,jobs,results,process,async){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__,jobs,results,process,async){
return (function (state_41005){
var state_val_41006 = (state_41005[(1)]);
if((state_val_41006 === (7))){
var inst_41001 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41007_41071 = state_41005__$1;
(statearr_41007_41071[(2)] = inst_41001);

(statearr_41007_41071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (20))){
var state_41005__$1 = state_41005;
var statearr_41008_41072 = state_41005__$1;
(statearr_41008_41072[(2)] = null);

(statearr_41008_41072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (1))){
var state_41005__$1 = state_41005;
var statearr_41009_41073 = state_41005__$1;
(statearr_41009_41073[(2)] = null);

(statearr_41009_41073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (4))){
var inst_40970 = (state_41005[(7)]);
var inst_40970__$1 = (state_41005[(2)]);
var inst_40971 = (inst_40970__$1 == null);
var state_41005__$1 = (function (){var statearr_41010 = state_41005;
(statearr_41010[(7)] = inst_40970__$1);

return statearr_41010;
})();
if(cljs.core.truth_(inst_40971)){
var statearr_41011_41074 = state_41005__$1;
(statearr_41011_41074[(1)] = (5));

} else {
var statearr_41012_41075 = state_41005__$1;
(statearr_41012_41075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (15))){
var inst_40983 = (state_41005[(8)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41005__$1,(18),to,inst_40983);
} else {
if((state_val_41006 === (21))){
var inst_40996 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41013_41076 = state_41005__$1;
(statearr_41013_41076[(2)] = inst_40996);

(statearr_41013_41076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (13))){
var inst_40998 = (state_41005[(2)]);
var state_41005__$1 = (function (){var statearr_41014 = state_41005;
(statearr_41014[(9)] = inst_40998);

return statearr_41014;
})();
var statearr_41015_41077 = state_41005__$1;
(statearr_41015_41077[(2)] = null);

(statearr_41015_41077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (6))){
var inst_40970 = (state_41005[(7)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41005__$1,(11),inst_40970);
} else {
if((state_val_41006 === (17))){
var inst_40991 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
if(cljs.core.truth_(inst_40991)){
var statearr_41016_41078 = state_41005__$1;
(statearr_41016_41078[(1)] = (19));

} else {
var statearr_41017_41079 = state_41005__$1;
(statearr_41017_41079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (3))){
var inst_41003 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41005__$1,inst_41003);
} else {
if((state_val_41006 === (12))){
var inst_40980 = (state_41005[(10)]);
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41005__$1,(14),inst_40980);
} else {
if((state_val_41006 === (2))){
var state_41005__$1 = state_41005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41005__$1,(4),results);
} else {
if((state_val_41006 === (19))){
var state_41005__$1 = state_41005;
var statearr_41018_41080 = state_41005__$1;
(statearr_41018_41080[(2)] = null);

(statearr_41018_41080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (11))){
var inst_40980 = (state_41005[(2)]);
var state_41005__$1 = (function (){var statearr_41019 = state_41005;
(statearr_41019[(10)] = inst_40980);

return statearr_41019;
})();
var statearr_41020_41081 = state_41005__$1;
(statearr_41020_41081[(2)] = null);

(statearr_41020_41081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (9))){
var state_41005__$1 = state_41005;
var statearr_41021_41082 = state_41005__$1;
(statearr_41021_41082[(2)] = null);

(statearr_41021_41082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (5))){
var state_41005__$1 = state_41005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41022_41083 = state_41005__$1;
(statearr_41022_41083[(1)] = (8));

} else {
var statearr_41023_41084 = state_41005__$1;
(statearr_41023_41084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (14))){
var inst_40983 = (state_41005[(8)]);
var inst_40985 = (state_41005[(11)]);
var inst_40983__$1 = (state_41005[(2)]);
var inst_40984 = (inst_40983__$1 == null);
var inst_40985__$1 = cljs.core.not.call(null,inst_40984);
var state_41005__$1 = (function (){var statearr_41024 = state_41005;
(statearr_41024[(8)] = inst_40983__$1);

(statearr_41024[(11)] = inst_40985__$1);

return statearr_41024;
})();
if(inst_40985__$1){
var statearr_41025_41085 = state_41005__$1;
(statearr_41025_41085[(1)] = (15));

} else {
var statearr_41026_41086 = state_41005__$1;
(statearr_41026_41086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (16))){
var inst_40985 = (state_41005[(11)]);
var state_41005__$1 = state_41005;
var statearr_41027_41087 = state_41005__$1;
(statearr_41027_41087[(2)] = inst_40985);

(statearr_41027_41087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (10))){
var inst_40977 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41028_41088 = state_41005__$1;
(statearr_41028_41088[(2)] = inst_40977);

(statearr_41028_41088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (18))){
var inst_40988 = (state_41005[(2)]);
var state_41005__$1 = state_41005;
var statearr_41029_41089 = state_41005__$1;
(statearr_41029_41089[(2)] = inst_40988);

(statearr_41029_41089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41006 === (8))){
var inst_40974 = cljs.core.async.close_BANG_.call(null,to);
var state_41005__$1 = state_41005;
var statearr_41030_41090 = state_41005__$1;
(statearr_41030_41090[(2)] = inst_40974);

(statearr_41030_41090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__,jobs,results,process,async))
;
return ((function (switch__38678__auto__,c__38835__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_41031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__);

(statearr_41031[(1)] = (1));

return statearr_41031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1 = (function (state_41005){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41032){if((e41032 instanceof Object)){
var ex__38682__auto__ = e41032;
var statearr_41033_41091 = state_41005;
(statearr_41033_41091[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41092 = state_41005;
state_41005 = G__41092;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__ = function(state_41005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1.call(this,state_41005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__,jobs,results,process,async))
})();
var state__38837__auto__ = (function (){var statearr_41034 = f__38836__auto__.call(null);
(statearr_41034[(6)] = c__38835__auto__);

return statearr_41034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__,jobs,results,process,async))
);

return c__38835__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41094 = arguments.length;
switch (G__41094) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41097 = arguments.length;
switch (G__41097) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41100 = arguments.length;
switch (G__41100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38835__auto___41149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41149,tc,fc){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41149,tc,fc){
return (function (state_41126){
var state_val_41127 = (state_41126[(1)]);
if((state_val_41127 === (7))){
var inst_41122 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41128_41150 = state_41126__$1;
(statearr_41128_41150[(2)] = inst_41122);

(statearr_41128_41150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (1))){
var state_41126__$1 = state_41126;
var statearr_41129_41151 = state_41126__$1;
(statearr_41129_41151[(2)] = null);

(statearr_41129_41151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (4))){
var inst_41103 = (state_41126[(7)]);
var inst_41103__$1 = (state_41126[(2)]);
var inst_41104 = (inst_41103__$1 == null);
var state_41126__$1 = (function (){var statearr_41130 = state_41126;
(statearr_41130[(7)] = inst_41103__$1);

return statearr_41130;
})();
if(cljs.core.truth_(inst_41104)){
var statearr_41131_41152 = state_41126__$1;
(statearr_41131_41152[(1)] = (5));

} else {
var statearr_41132_41153 = state_41126__$1;
(statearr_41132_41153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (13))){
var state_41126__$1 = state_41126;
var statearr_41133_41154 = state_41126__$1;
(statearr_41133_41154[(2)] = null);

(statearr_41133_41154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (6))){
var inst_41103 = (state_41126[(7)]);
var inst_41109 = p.call(null,inst_41103);
var state_41126__$1 = state_41126;
if(cljs.core.truth_(inst_41109)){
var statearr_41134_41155 = state_41126__$1;
(statearr_41134_41155[(1)] = (9));

} else {
var statearr_41135_41156 = state_41126__$1;
(statearr_41135_41156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (3))){
var inst_41124 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41126__$1,inst_41124);
} else {
if((state_val_41127 === (12))){
var state_41126__$1 = state_41126;
var statearr_41136_41157 = state_41126__$1;
(statearr_41136_41157[(2)] = null);

(statearr_41136_41157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (2))){
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41126__$1,(4),ch);
} else {
if((state_val_41127 === (11))){
var inst_41103 = (state_41126[(7)]);
var inst_41113 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41126__$1,(8),inst_41113,inst_41103);
} else {
if((state_val_41127 === (9))){
var state_41126__$1 = state_41126;
var statearr_41137_41158 = state_41126__$1;
(statearr_41137_41158[(2)] = tc);

(statearr_41137_41158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (5))){
var inst_41106 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41107 = cljs.core.async.close_BANG_.call(null,fc);
var state_41126__$1 = (function (){var statearr_41138 = state_41126;
(statearr_41138[(8)] = inst_41106);

return statearr_41138;
})();
var statearr_41139_41159 = state_41126__$1;
(statearr_41139_41159[(2)] = inst_41107);

(statearr_41139_41159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (14))){
var inst_41120 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41140_41160 = state_41126__$1;
(statearr_41140_41160[(2)] = inst_41120);

(statearr_41140_41160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (10))){
var state_41126__$1 = state_41126;
var statearr_41141_41161 = state_41126__$1;
(statearr_41141_41161[(2)] = fc);

(statearr_41141_41161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (8))){
var inst_41115 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
if(cljs.core.truth_(inst_41115)){
var statearr_41142_41162 = state_41126__$1;
(statearr_41142_41162[(1)] = (12));

} else {
var statearr_41143_41163 = state_41126__$1;
(statearr_41143_41163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___41149,tc,fc))
;
return ((function (switch__38678__auto__,c__38835__auto___41149,tc,fc){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_41144 = [null,null,null,null,null,null,null,null,null];
(statearr_41144[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_41144[(1)] = (1));

return statearr_41144;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_41126){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41145){if((e41145 instanceof Object)){
var ex__38682__auto__ = e41145;
var statearr_41146_41164 = state_41126;
(statearr_41146_41164[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41165 = state_41126;
state_41126 = G__41165;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_41126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_41126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41149,tc,fc))
})();
var state__38837__auto__ = (function (){var statearr_41147 = f__38836__auto__.call(null);
(statearr_41147[(6)] = c__38835__auto___41149);

return statearr_41147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41149,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__){
return (function (state_41186){
var state_val_41187 = (state_41186[(1)]);
if((state_val_41187 === (7))){
var inst_41182 = (state_41186[(2)]);
var state_41186__$1 = state_41186;
var statearr_41188_41206 = state_41186__$1;
(statearr_41188_41206[(2)] = inst_41182);

(statearr_41188_41206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (1))){
var inst_41166 = init;
var state_41186__$1 = (function (){var statearr_41189 = state_41186;
(statearr_41189[(7)] = inst_41166);

return statearr_41189;
})();
var statearr_41190_41207 = state_41186__$1;
(statearr_41190_41207[(2)] = null);

(statearr_41190_41207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (4))){
var inst_41169 = (state_41186[(8)]);
var inst_41169__$1 = (state_41186[(2)]);
var inst_41170 = (inst_41169__$1 == null);
var state_41186__$1 = (function (){var statearr_41191 = state_41186;
(statearr_41191[(8)] = inst_41169__$1);

return statearr_41191;
})();
if(cljs.core.truth_(inst_41170)){
var statearr_41192_41208 = state_41186__$1;
(statearr_41192_41208[(1)] = (5));

} else {
var statearr_41193_41209 = state_41186__$1;
(statearr_41193_41209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (6))){
var inst_41169 = (state_41186[(8)]);
var inst_41173 = (state_41186[(9)]);
var inst_41166 = (state_41186[(7)]);
var inst_41173__$1 = f.call(null,inst_41166,inst_41169);
var inst_41174 = cljs.core.reduced_QMARK_.call(null,inst_41173__$1);
var state_41186__$1 = (function (){var statearr_41194 = state_41186;
(statearr_41194[(9)] = inst_41173__$1);

return statearr_41194;
})();
if(inst_41174){
var statearr_41195_41210 = state_41186__$1;
(statearr_41195_41210[(1)] = (8));

} else {
var statearr_41196_41211 = state_41186__$1;
(statearr_41196_41211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (3))){
var inst_41184 = (state_41186[(2)]);
var state_41186__$1 = state_41186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41186__$1,inst_41184);
} else {
if((state_val_41187 === (2))){
var state_41186__$1 = state_41186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41186__$1,(4),ch);
} else {
if((state_val_41187 === (9))){
var inst_41173 = (state_41186[(9)]);
var inst_41166 = inst_41173;
var state_41186__$1 = (function (){var statearr_41197 = state_41186;
(statearr_41197[(7)] = inst_41166);

return statearr_41197;
})();
var statearr_41198_41212 = state_41186__$1;
(statearr_41198_41212[(2)] = null);

(statearr_41198_41212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (5))){
var inst_41166 = (state_41186[(7)]);
var state_41186__$1 = state_41186;
var statearr_41199_41213 = state_41186__$1;
(statearr_41199_41213[(2)] = inst_41166);

(statearr_41199_41213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (10))){
var inst_41180 = (state_41186[(2)]);
var state_41186__$1 = state_41186;
var statearr_41200_41214 = state_41186__$1;
(statearr_41200_41214[(2)] = inst_41180);

(statearr_41200_41214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41187 === (8))){
var inst_41173 = (state_41186[(9)]);
var inst_41176 = cljs.core.deref.call(null,inst_41173);
var state_41186__$1 = state_41186;
var statearr_41201_41215 = state_41186__$1;
(statearr_41201_41215[(2)] = inst_41176);

(statearr_41201_41215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38679__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38679__auto____0 = (function (){
var statearr_41202 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41202[(0)] = cljs$core$async$reduce_$_state_machine__38679__auto__);

(statearr_41202[(1)] = (1));

return statearr_41202;
});
var cljs$core$async$reduce_$_state_machine__38679__auto____1 = (function (state_41186){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41203){if((e41203 instanceof Object)){
var ex__38682__auto__ = e41203;
var statearr_41204_41216 = state_41186;
(statearr_41204_41216[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41217 = state_41186;
state_41186 = G__41217;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38679__auto__ = function(state_41186){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38679__auto____1.call(this,state_41186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38679__auto____0;
cljs$core$async$reduce_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38679__auto____1;
return cljs$core$async$reduce_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__))
})();
var state__38837__auto__ = (function (){var statearr_41205 = f__38836__auto__.call(null);
(statearr_41205[(6)] = c__38835__auto__);

return statearr_41205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__))
);

return c__38835__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__,f__$1){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__,f__$1){
return (function (state_41223){
var state_val_41224 = (state_41223[(1)]);
if((state_val_41224 === (1))){
var inst_41218 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41223__$1,(2),inst_41218);
} else {
if((state_val_41224 === (2))){
var inst_41220 = (state_41223[(2)]);
var inst_41221 = f__$1.call(null,inst_41220);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41223__$1,inst_41221);
} else {
return null;
}
}
});})(c__38835__auto__,f__$1))
;
return ((function (switch__38678__auto__,c__38835__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38679__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38679__auto____0 = (function (){
var statearr_41225 = [null,null,null,null,null,null,null];
(statearr_41225[(0)] = cljs$core$async$transduce_$_state_machine__38679__auto__);

(statearr_41225[(1)] = (1));

return statearr_41225;
});
var cljs$core$async$transduce_$_state_machine__38679__auto____1 = (function (state_41223){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41226){if((e41226 instanceof Object)){
var ex__38682__auto__ = e41226;
var statearr_41227_41229 = state_41223;
(statearr_41227_41229[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41230 = state_41223;
state_41223 = G__41230;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38679__auto__ = function(state_41223){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38679__auto____1.call(this,state_41223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38679__auto____0;
cljs$core$async$transduce_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38679__auto____1;
return cljs$core$async$transduce_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__,f__$1))
})();
var state__38837__auto__ = (function (){var statearr_41228 = f__38836__auto__.call(null);
(statearr_41228[(6)] = c__38835__auto__);

return statearr_41228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__,f__$1))
);

return c__38835__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41232 = arguments.length;
switch (G__41232) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__){
return (function (state_41257){
var state_val_41258 = (state_41257[(1)]);
if((state_val_41258 === (7))){
var inst_41239 = (state_41257[(2)]);
var state_41257__$1 = state_41257;
var statearr_41259_41280 = state_41257__$1;
(statearr_41259_41280[(2)] = inst_41239);

(statearr_41259_41280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (1))){
var inst_41233 = cljs.core.seq.call(null,coll);
var inst_41234 = inst_41233;
var state_41257__$1 = (function (){var statearr_41260 = state_41257;
(statearr_41260[(7)] = inst_41234);

return statearr_41260;
})();
var statearr_41261_41281 = state_41257__$1;
(statearr_41261_41281[(2)] = null);

(statearr_41261_41281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (4))){
var inst_41234 = (state_41257[(7)]);
var inst_41237 = cljs.core.first.call(null,inst_41234);
var state_41257__$1 = state_41257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41257__$1,(7),ch,inst_41237);
} else {
if((state_val_41258 === (13))){
var inst_41251 = (state_41257[(2)]);
var state_41257__$1 = state_41257;
var statearr_41262_41282 = state_41257__$1;
(statearr_41262_41282[(2)] = inst_41251);

(statearr_41262_41282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (6))){
var inst_41242 = (state_41257[(2)]);
var state_41257__$1 = state_41257;
if(cljs.core.truth_(inst_41242)){
var statearr_41263_41283 = state_41257__$1;
(statearr_41263_41283[(1)] = (8));

} else {
var statearr_41264_41284 = state_41257__$1;
(statearr_41264_41284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (3))){
var inst_41255 = (state_41257[(2)]);
var state_41257__$1 = state_41257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41257__$1,inst_41255);
} else {
if((state_val_41258 === (12))){
var state_41257__$1 = state_41257;
var statearr_41265_41285 = state_41257__$1;
(statearr_41265_41285[(2)] = null);

(statearr_41265_41285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (2))){
var inst_41234 = (state_41257[(7)]);
var state_41257__$1 = state_41257;
if(cljs.core.truth_(inst_41234)){
var statearr_41266_41286 = state_41257__$1;
(statearr_41266_41286[(1)] = (4));

} else {
var statearr_41267_41287 = state_41257__$1;
(statearr_41267_41287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (11))){
var inst_41248 = cljs.core.async.close_BANG_.call(null,ch);
var state_41257__$1 = state_41257;
var statearr_41268_41288 = state_41257__$1;
(statearr_41268_41288[(2)] = inst_41248);

(statearr_41268_41288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (9))){
var state_41257__$1 = state_41257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41269_41289 = state_41257__$1;
(statearr_41269_41289[(1)] = (11));

} else {
var statearr_41270_41290 = state_41257__$1;
(statearr_41270_41290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (5))){
var inst_41234 = (state_41257[(7)]);
var state_41257__$1 = state_41257;
var statearr_41271_41291 = state_41257__$1;
(statearr_41271_41291[(2)] = inst_41234);

(statearr_41271_41291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (10))){
var inst_41253 = (state_41257[(2)]);
var state_41257__$1 = state_41257;
var statearr_41272_41292 = state_41257__$1;
(statearr_41272_41292[(2)] = inst_41253);

(statearr_41272_41292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41258 === (8))){
var inst_41234 = (state_41257[(7)]);
var inst_41244 = cljs.core.next.call(null,inst_41234);
var inst_41234__$1 = inst_41244;
var state_41257__$1 = (function (){var statearr_41273 = state_41257;
(statearr_41273[(7)] = inst_41234__$1);

return statearr_41273;
})();
var statearr_41274_41293 = state_41257__$1;
(statearr_41274_41293[(2)] = null);

(statearr_41274_41293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_41275 = [null,null,null,null,null,null,null,null];
(statearr_41275[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_41275[(1)] = (1));

return statearr_41275;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_41257){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41276){if((e41276 instanceof Object)){
var ex__38682__auto__ = e41276;
var statearr_41277_41294 = state_41257;
(statearr_41277_41294[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41295 = state_41257;
state_41257 = G__41295;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_41257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_41257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__))
})();
var state__38837__auto__ = (function (){var statearr_41278 = f__38836__auto__.call(null);
(statearr_41278[(6)] = c__38835__auto__);

return statearr_41278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__))
);

return c__38835__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4213__auto__ = (((_ == null))?null:_);
var m__4214__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,_);
} else {
var m__4214__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4214__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,ch);
} else {
var m__4214__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m);
} else {
var m__4214__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41296 = (function (ch,cs,meta41297){
this.ch = ch;
this.cs = cs;
this.meta41297 = meta41297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41298,meta41297__$1){
var self__ = this;
var _41298__$1 = this;
return (new cljs.core.async.t_cljs$core$async41296(self__.ch,self__.cs,meta41297__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41298){
var self__ = this;
var _41298__$1 = this;
return self__.meta41297;
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41297","meta41297",1077008072,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41296";

cljs.core.async.t_cljs$core$async41296.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async41296");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41296.
 */
cljs.core.async.__GT_t_cljs$core$async41296 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41296(ch__$1,cs__$1,meta41297){
return (new cljs.core.async.t_cljs$core$async41296(ch__$1,cs__$1,meta41297));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41296(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38835__auto___41518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41518,cs,m,dchan,dctr,done){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41518,cs,m,dchan,dctr,done){
return (function (state_41433){
var state_val_41434 = (state_41433[(1)]);
if((state_val_41434 === (7))){
var inst_41429 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41435_41519 = state_41433__$1;
(statearr_41435_41519[(2)] = inst_41429);

(statearr_41435_41519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (20))){
var inst_41332 = (state_41433[(7)]);
var inst_41344 = cljs.core.first.call(null,inst_41332);
var inst_41345 = cljs.core.nth.call(null,inst_41344,(0),null);
var inst_41346 = cljs.core.nth.call(null,inst_41344,(1),null);
var state_41433__$1 = (function (){var statearr_41436 = state_41433;
(statearr_41436[(8)] = inst_41345);

return statearr_41436;
})();
if(cljs.core.truth_(inst_41346)){
var statearr_41437_41520 = state_41433__$1;
(statearr_41437_41520[(1)] = (22));

} else {
var statearr_41438_41521 = state_41433__$1;
(statearr_41438_41521[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (27))){
var inst_41381 = (state_41433[(9)]);
var inst_41374 = (state_41433[(10)]);
var inst_41301 = (state_41433[(11)]);
var inst_41376 = (state_41433[(12)]);
var inst_41381__$1 = cljs.core._nth.call(null,inst_41374,inst_41376);
var inst_41382 = cljs.core.async.put_BANG_.call(null,inst_41381__$1,inst_41301,done);
var state_41433__$1 = (function (){var statearr_41439 = state_41433;
(statearr_41439[(9)] = inst_41381__$1);

return statearr_41439;
})();
if(cljs.core.truth_(inst_41382)){
var statearr_41440_41522 = state_41433__$1;
(statearr_41440_41522[(1)] = (30));

} else {
var statearr_41441_41523 = state_41433__$1;
(statearr_41441_41523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (1))){
var state_41433__$1 = state_41433;
var statearr_41442_41524 = state_41433__$1;
(statearr_41442_41524[(2)] = null);

(statearr_41442_41524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (24))){
var inst_41332 = (state_41433[(7)]);
var inst_41351 = (state_41433[(2)]);
var inst_41352 = cljs.core.next.call(null,inst_41332);
var inst_41310 = inst_41352;
var inst_41311 = null;
var inst_41312 = (0);
var inst_41313 = (0);
var state_41433__$1 = (function (){var statearr_41443 = state_41433;
(statearr_41443[(13)] = inst_41310);

(statearr_41443[(14)] = inst_41312);

(statearr_41443[(15)] = inst_41311);

(statearr_41443[(16)] = inst_41351);

(statearr_41443[(17)] = inst_41313);

return statearr_41443;
})();
var statearr_41444_41525 = state_41433__$1;
(statearr_41444_41525[(2)] = null);

(statearr_41444_41525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (39))){
var state_41433__$1 = state_41433;
var statearr_41448_41526 = state_41433__$1;
(statearr_41448_41526[(2)] = null);

(statearr_41448_41526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (4))){
var inst_41301 = (state_41433[(11)]);
var inst_41301__$1 = (state_41433[(2)]);
var inst_41302 = (inst_41301__$1 == null);
var state_41433__$1 = (function (){var statearr_41449 = state_41433;
(statearr_41449[(11)] = inst_41301__$1);

return statearr_41449;
})();
if(cljs.core.truth_(inst_41302)){
var statearr_41450_41527 = state_41433__$1;
(statearr_41450_41527[(1)] = (5));

} else {
var statearr_41451_41528 = state_41433__$1;
(statearr_41451_41528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (15))){
var inst_41310 = (state_41433[(13)]);
var inst_41312 = (state_41433[(14)]);
var inst_41311 = (state_41433[(15)]);
var inst_41313 = (state_41433[(17)]);
var inst_41328 = (state_41433[(2)]);
var inst_41329 = (inst_41313 + (1));
var tmp41445 = inst_41310;
var tmp41446 = inst_41312;
var tmp41447 = inst_41311;
var inst_41310__$1 = tmp41445;
var inst_41311__$1 = tmp41447;
var inst_41312__$1 = tmp41446;
var inst_41313__$1 = inst_41329;
var state_41433__$1 = (function (){var statearr_41452 = state_41433;
(statearr_41452[(18)] = inst_41328);

(statearr_41452[(13)] = inst_41310__$1);

(statearr_41452[(14)] = inst_41312__$1);

(statearr_41452[(15)] = inst_41311__$1);

(statearr_41452[(17)] = inst_41313__$1);

return statearr_41452;
})();
var statearr_41453_41529 = state_41433__$1;
(statearr_41453_41529[(2)] = null);

(statearr_41453_41529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (21))){
var inst_41355 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41457_41530 = state_41433__$1;
(statearr_41457_41530[(2)] = inst_41355);

(statearr_41457_41530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (31))){
var inst_41381 = (state_41433[(9)]);
var inst_41385 = done.call(null,null);
var inst_41386 = cljs.core.async.untap_STAR_.call(null,m,inst_41381);
var state_41433__$1 = (function (){var statearr_41458 = state_41433;
(statearr_41458[(19)] = inst_41385);

return statearr_41458;
})();
var statearr_41459_41531 = state_41433__$1;
(statearr_41459_41531[(2)] = inst_41386);

(statearr_41459_41531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (32))){
var inst_41373 = (state_41433[(20)]);
var inst_41374 = (state_41433[(10)]);
var inst_41375 = (state_41433[(21)]);
var inst_41376 = (state_41433[(12)]);
var inst_41388 = (state_41433[(2)]);
var inst_41389 = (inst_41376 + (1));
var tmp41454 = inst_41373;
var tmp41455 = inst_41374;
var tmp41456 = inst_41375;
var inst_41373__$1 = tmp41454;
var inst_41374__$1 = tmp41455;
var inst_41375__$1 = tmp41456;
var inst_41376__$1 = inst_41389;
var state_41433__$1 = (function (){var statearr_41460 = state_41433;
(statearr_41460[(20)] = inst_41373__$1);

(statearr_41460[(10)] = inst_41374__$1);

(statearr_41460[(21)] = inst_41375__$1);

(statearr_41460[(22)] = inst_41388);

(statearr_41460[(12)] = inst_41376__$1);

return statearr_41460;
})();
var statearr_41461_41532 = state_41433__$1;
(statearr_41461_41532[(2)] = null);

(statearr_41461_41532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (40))){
var inst_41401 = (state_41433[(23)]);
var inst_41405 = done.call(null,null);
var inst_41406 = cljs.core.async.untap_STAR_.call(null,m,inst_41401);
var state_41433__$1 = (function (){var statearr_41462 = state_41433;
(statearr_41462[(24)] = inst_41405);

return statearr_41462;
})();
var statearr_41463_41533 = state_41433__$1;
(statearr_41463_41533[(2)] = inst_41406);

(statearr_41463_41533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (33))){
var inst_41392 = (state_41433[(25)]);
var inst_41394 = cljs.core.chunked_seq_QMARK_.call(null,inst_41392);
var state_41433__$1 = state_41433;
if(inst_41394){
var statearr_41464_41534 = state_41433__$1;
(statearr_41464_41534[(1)] = (36));

} else {
var statearr_41465_41535 = state_41433__$1;
(statearr_41465_41535[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (13))){
var inst_41322 = (state_41433[(26)]);
var inst_41325 = cljs.core.async.close_BANG_.call(null,inst_41322);
var state_41433__$1 = state_41433;
var statearr_41466_41536 = state_41433__$1;
(statearr_41466_41536[(2)] = inst_41325);

(statearr_41466_41536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (22))){
var inst_41345 = (state_41433[(8)]);
var inst_41348 = cljs.core.async.close_BANG_.call(null,inst_41345);
var state_41433__$1 = state_41433;
var statearr_41467_41537 = state_41433__$1;
(statearr_41467_41537[(2)] = inst_41348);

(statearr_41467_41537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (36))){
var inst_41392 = (state_41433[(25)]);
var inst_41396 = cljs.core.chunk_first.call(null,inst_41392);
var inst_41397 = cljs.core.chunk_rest.call(null,inst_41392);
var inst_41398 = cljs.core.count.call(null,inst_41396);
var inst_41373 = inst_41397;
var inst_41374 = inst_41396;
var inst_41375 = inst_41398;
var inst_41376 = (0);
var state_41433__$1 = (function (){var statearr_41468 = state_41433;
(statearr_41468[(20)] = inst_41373);

(statearr_41468[(10)] = inst_41374);

(statearr_41468[(21)] = inst_41375);

(statearr_41468[(12)] = inst_41376);

return statearr_41468;
})();
var statearr_41469_41538 = state_41433__$1;
(statearr_41469_41538[(2)] = null);

(statearr_41469_41538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (41))){
var inst_41392 = (state_41433[(25)]);
var inst_41408 = (state_41433[(2)]);
var inst_41409 = cljs.core.next.call(null,inst_41392);
var inst_41373 = inst_41409;
var inst_41374 = null;
var inst_41375 = (0);
var inst_41376 = (0);
var state_41433__$1 = (function (){var statearr_41470 = state_41433;
(statearr_41470[(27)] = inst_41408);

(statearr_41470[(20)] = inst_41373);

(statearr_41470[(10)] = inst_41374);

(statearr_41470[(21)] = inst_41375);

(statearr_41470[(12)] = inst_41376);

return statearr_41470;
})();
var statearr_41471_41539 = state_41433__$1;
(statearr_41471_41539[(2)] = null);

(statearr_41471_41539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (43))){
var state_41433__$1 = state_41433;
var statearr_41472_41540 = state_41433__$1;
(statearr_41472_41540[(2)] = null);

(statearr_41472_41540[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (29))){
var inst_41417 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41473_41541 = state_41433__$1;
(statearr_41473_41541[(2)] = inst_41417);

(statearr_41473_41541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (44))){
var inst_41426 = (state_41433[(2)]);
var state_41433__$1 = (function (){var statearr_41474 = state_41433;
(statearr_41474[(28)] = inst_41426);

return statearr_41474;
})();
var statearr_41475_41542 = state_41433__$1;
(statearr_41475_41542[(2)] = null);

(statearr_41475_41542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (6))){
var inst_41365 = (state_41433[(29)]);
var inst_41364 = cljs.core.deref.call(null,cs);
var inst_41365__$1 = cljs.core.keys.call(null,inst_41364);
var inst_41366 = cljs.core.count.call(null,inst_41365__$1);
var inst_41367 = cljs.core.reset_BANG_.call(null,dctr,inst_41366);
var inst_41372 = cljs.core.seq.call(null,inst_41365__$1);
var inst_41373 = inst_41372;
var inst_41374 = null;
var inst_41375 = (0);
var inst_41376 = (0);
var state_41433__$1 = (function (){var statearr_41476 = state_41433;
(statearr_41476[(29)] = inst_41365__$1);

(statearr_41476[(20)] = inst_41373);

(statearr_41476[(10)] = inst_41374);

(statearr_41476[(21)] = inst_41375);

(statearr_41476[(30)] = inst_41367);

(statearr_41476[(12)] = inst_41376);

return statearr_41476;
})();
var statearr_41477_41543 = state_41433__$1;
(statearr_41477_41543[(2)] = null);

(statearr_41477_41543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (28))){
var inst_41373 = (state_41433[(20)]);
var inst_41392 = (state_41433[(25)]);
var inst_41392__$1 = cljs.core.seq.call(null,inst_41373);
var state_41433__$1 = (function (){var statearr_41478 = state_41433;
(statearr_41478[(25)] = inst_41392__$1);

return statearr_41478;
})();
if(inst_41392__$1){
var statearr_41479_41544 = state_41433__$1;
(statearr_41479_41544[(1)] = (33));

} else {
var statearr_41480_41545 = state_41433__$1;
(statearr_41480_41545[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (25))){
var inst_41375 = (state_41433[(21)]);
var inst_41376 = (state_41433[(12)]);
var inst_41378 = (inst_41376 < inst_41375);
var inst_41379 = inst_41378;
var state_41433__$1 = state_41433;
if(cljs.core.truth_(inst_41379)){
var statearr_41481_41546 = state_41433__$1;
(statearr_41481_41546[(1)] = (27));

} else {
var statearr_41482_41547 = state_41433__$1;
(statearr_41482_41547[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (34))){
var state_41433__$1 = state_41433;
var statearr_41483_41548 = state_41433__$1;
(statearr_41483_41548[(2)] = null);

(statearr_41483_41548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (17))){
var state_41433__$1 = state_41433;
var statearr_41484_41549 = state_41433__$1;
(statearr_41484_41549[(2)] = null);

(statearr_41484_41549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (3))){
var inst_41431 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41433__$1,inst_41431);
} else {
if((state_val_41434 === (12))){
var inst_41360 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41485_41550 = state_41433__$1;
(statearr_41485_41550[(2)] = inst_41360);

(statearr_41485_41550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (2))){
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41433__$1,(4),ch);
} else {
if((state_val_41434 === (23))){
var state_41433__$1 = state_41433;
var statearr_41486_41551 = state_41433__$1;
(statearr_41486_41551[(2)] = null);

(statearr_41486_41551[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (35))){
var inst_41415 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41487_41552 = state_41433__$1;
(statearr_41487_41552[(2)] = inst_41415);

(statearr_41487_41552[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (19))){
var inst_41332 = (state_41433[(7)]);
var inst_41336 = cljs.core.chunk_first.call(null,inst_41332);
var inst_41337 = cljs.core.chunk_rest.call(null,inst_41332);
var inst_41338 = cljs.core.count.call(null,inst_41336);
var inst_41310 = inst_41337;
var inst_41311 = inst_41336;
var inst_41312 = inst_41338;
var inst_41313 = (0);
var state_41433__$1 = (function (){var statearr_41488 = state_41433;
(statearr_41488[(13)] = inst_41310);

(statearr_41488[(14)] = inst_41312);

(statearr_41488[(15)] = inst_41311);

(statearr_41488[(17)] = inst_41313);

return statearr_41488;
})();
var statearr_41489_41553 = state_41433__$1;
(statearr_41489_41553[(2)] = null);

(statearr_41489_41553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (11))){
var inst_41332 = (state_41433[(7)]);
var inst_41310 = (state_41433[(13)]);
var inst_41332__$1 = cljs.core.seq.call(null,inst_41310);
var state_41433__$1 = (function (){var statearr_41490 = state_41433;
(statearr_41490[(7)] = inst_41332__$1);

return statearr_41490;
})();
if(inst_41332__$1){
var statearr_41491_41554 = state_41433__$1;
(statearr_41491_41554[(1)] = (16));

} else {
var statearr_41492_41555 = state_41433__$1;
(statearr_41492_41555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (9))){
var inst_41362 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41493_41556 = state_41433__$1;
(statearr_41493_41556[(2)] = inst_41362);

(statearr_41493_41556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (5))){
var inst_41308 = cljs.core.deref.call(null,cs);
var inst_41309 = cljs.core.seq.call(null,inst_41308);
var inst_41310 = inst_41309;
var inst_41311 = null;
var inst_41312 = (0);
var inst_41313 = (0);
var state_41433__$1 = (function (){var statearr_41494 = state_41433;
(statearr_41494[(13)] = inst_41310);

(statearr_41494[(14)] = inst_41312);

(statearr_41494[(15)] = inst_41311);

(statearr_41494[(17)] = inst_41313);

return statearr_41494;
})();
var statearr_41495_41557 = state_41433__$1;
(statearr_41495_41557[(2)] = null);

(statearr_41495_41557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (14))){
var state_41433__$1 = state_41433;
var statearr_41496_41558 = state_41433__$1;
(statearr_41496_41558[(2)] = null);

(statearr_41496_41558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (45))){
var inst_41423 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41497_41559 = state_41433__$1;
(statearr_41497_41559[(2)] = inst_41423);

(statearr_41497_41559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (26))){
var inst_41365 = (state_41433[(29)]);
var inst_41419 = (state_41433[(2)]);
var inst_41420 = cljs.core.seq.call(null,inst_41365);
var state_41433__$1 = (function (){var statearr_41498 = state_41433;
(statearr_41498[(31)] = inst_41419);

return statearr_41498;
})();
if(inst_41420){
var statearr_41499_41560 = state_41433__$1;
(statearr_41499_41560[(1)] = (42));

} else {
var statearr_41500_41561 = state_41433__$1;
(statearr_41500_41561[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (16))){
var inst_41332 = (state_41433[(7)]);
var inst_41334 = cljs.core.chunked_seq_QMARK_.call(null,inst_41332);
var state_41433__$1 = state_41433;
if(inst_41334){
var statearr_41501_41562 = state_41433__$1;
(statearr_41501_41562[(1)] = (19));

} else {
var statearr_41502_41563 = state_41433__$1;
(statearr_41502_41563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (38))){
var inst_41412 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41503_41564 = state_41433__$1;
(statearr_41503_41564[(2)] = inst_41412);

(statearr_41503_41564[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (30))){
var state_41433__$1 = state_41433;
var statearr_41504_41565 = state_41433__$1;
(statearr_41504_41565[(2)] = null);

(statearr_41504_41565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (10))){
var inst_41311 = (state_41433[(15)]);
var inst_41313 = (state_41433[(17)]);
var inst_41321 = cljs.core._nth.call(null,inst_41311,inst_41313);
var inst_41322 = cljs.core.nth.call(null,inst_41321,(0),null);
var inst_41323 = cljs.core.nth.call(null,inst_41321,(1),null);
var state_41433__$1 = (function (){var statearr_41505 = state_41433;
(statearr_41505[(26)] = inst_41322);

return statearr_41505;
})();
if(cljs.core.truth_(inst_41323)){
var statearr_41506_41566 = state_41433__$1;
(statearr_41506_41566[(1)] = (13));

} else {
var statearr_41507_41567 = state_41433__$1;
(statearr_41507_41567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (18))){
var inst_41358 = (state_41433[(2)]);
var state_41433__$1 = state_41433;
var statearr_41508_41568 = state_41433__$1;
(statearr_41508_41568[(2)] = inst_41358);

(statearr_41508_41568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (42))){
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41433__$1,(45),dchan);
} else {
if((state_val_41434 === (37))){
var inst_41401 = (state_41433[(23)]);
var inst_41392 = (state_41433[(25)]);
var inst_41301 = (state_41433[(11)]);
var inst_41401__$1 = cljs.core.first.call(null,inst_41392);
var inst_41402 = cljs.core.async.put_BANG_.call(null,inst_41401__$1,inst_41301,done);
var state_41433__$1 = (function (){var statearr_41509 = state_41433;
(statearr_41509[(23)] = inst_41401__$1);

return statearr_41509;
})();
if(cljs.core.truth_(inst_41402)){
var statearr_41510_41569 = state_41433__$1;
(statearr_41510_41569[(1)] = (39));

} else {
var statearr_41511_41570 = state_41433__$1;
(statearr_41511_41570[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41434 === (8))){
var inst_41312 = (state_41433[(14)]);
var inst_41313 = (state_41433[(17)]);
var inst_41315 = (inst_41313 < inst_41312);
var inst_41316 = inst_41315;
var state_41433__$1 = state_41433;
if(cljs.core.truth_(inst_41316)){
var statearr_41512_41571 = state_41433__$1;
(statearr_41512_41571[(1)] = (10));

} else {
var statearr_41513_41572 = state_41433__$1;
(statearr_41513_41572[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___41518,cs,m,dchan,dctr,done))
;
return ((function (switch__38678__auto__,c__38835__auto___41518,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38679__auto__ = null;
var cljs$core$async$mult_$_state_machine__38679__auto____0 = (function (){
var statearr_41514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41514[(0)] = cljs$core$async$mult_$_state_machine__38679__auto__);

(statearr_41514[(1)] = (1));

return statearr_41514;
});
var cljs$core$async$mult_$_state_machine__38679__auto____1 = (function (state_41433){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41515){if((e41515 instanceof Object)){
var ex__38682__auto__ = e41515;
var statearr_41516_41573 = state_41433;
(statearr_41516_41573[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41574 = state_41433;
state_41433 = G__41574;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38679__auto__ = function(state_41433){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38679__auto____1.call(this,state_41433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38679__auto____0;
cljs$core$async$mult_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38679__auto____1;
return cljs$core$async$mult_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41518,cs,m,dchan,dctr,done))
})();
var state__38837__auto__ = (function (){var statearr_41517 = f__38836__auto__.call(null);
(statearr_41517[(6)] = c__38835__auto___41518);

return statearr_41517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41518,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41576 = arguments.length;
switch (G__41576) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,ch);
} else {
var m__4214__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,ch);
} else {
var m__4214__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m);
} else {
var m__4214__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,state_map);
} else {
var m__4214__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4213__auto__ = (((m == null))?null:m);
var m__4214__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,m,mode);
} else {
var m__4214__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41588 = arguments.length;
var i__4500__auto___41589 = (0);
while(true){
if((i__4500__auto___41589 < len__4499__auto___41588)){
args__4502__auto__.push((arguments[i__4500__auto___41589]));

var G__41590 = (i__4500__auto___41589 + (1));
i__4500__auto___41589 = G__41590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41582){
var map__41583 = p__41582;
var map__41583__$1 = ((((!((map__41583 == null)))?(((((map__41583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41583):map__41583);
var opts = map__41583__$1;
var statearr_41585_41591 = state;
(statearr_41585_41591[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__41583,map__41583__$1,opts){
return (function (val){
var statearr_41586_41592 = state;
(statearr_41586_41592[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41583,map__41583__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_41587_41593 = state;
(statearr_41587_41593[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41578){
var G__41579 = cljs.core.first.call(null,seq41578);
var seq41578__$1 = cljs.core.next.call(null,seq41578);
var G__41580 = cljs.core.first.call(null,seq41578__$1);
var seq41578__$2 = cljs.core.next.call(null,seq41578__$1);
var G__41581 = cljs.core.first.call(null,seq41578__$2);
var seq41578__$3 = cljs.core.next.call(null,seq41578__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41579,G__41580,G__41581,seq41578__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41594 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41595){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41595 = meta41595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41596,meta41595__$1){
var self__ = this;
var _41596__$1 = this;
return (new cljs.core.async.t_cljs$core$async41594(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41595__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41596){
var self__ = this;
var _41596__$1 = this;
return self__.meta41595;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41595","meta41595",-1217030897,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41594";

cljs.core.async.t_cljs$core$async41594.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async41594");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41594.
 */
cljs.core.async.__GT_t_cljs$core$async41594 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41594(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41595){
return (new cljs.core.async.t_cljs$core$async41594(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41595));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41594(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38835__auto___41758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41698){
var state_val_41699 = (state_41698[(1)]);
if((state_val_41699 === (7))){
var inst_41613 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41700_41759 = state_41698__$1;
(statearr_41700_41759[(2)] = inst_41613);

(statearr_41700_41759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (20))){
var inst_41625 = (state_41698[(7)]);
var state_41698__$1 = state_41698;
var statearr_41701_41760 = state_41698__$1;
(statearr_41701_41760[(2)] = inst_41625);

(statearr_41701_41760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (27))){
var state_41698__$1 = state_41698;
var statearr_41702_41761 = state_41698__$1;
(statearr_41702_41761[(2)] = null);

(statearr_41702_41761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (1))){
var inst_41600 = (state_41698[(8)]);
var inst_41600__$1 = calc_state.call(null);
var inst_41602 = (inst_41600__$1 == null);
var inst_41603 = cljs.core.not.call(null,inst_41602);
var state_41698__$1 = (function (){var statearr_41703 = state_41698;
(statearr_41703[(8)] = inst_41600__$1);

return statearr_41703;
})();
if(inst_41603){
var statearr_41704_41762 = state_41698__$1;
(statearr_41704_41762[(1)] = (2));

} else {
var statearr_41705_41763 = state_41698__$1;
(statearr_41705_41763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (24))){
var inst_41672 = (state_41698[(9)]);
var inst_41649 = (state_41698[(10)]);
var inst_41658 = (state_41698[(11)]);
var inst_41672__$1 = inst_41649.call(null,inst_41658);
var state_41698__$1 = (function (){var statearr_41706 = state_41698;
(statearr_41706[(9)] = inst_41672__$1);

return statearr_41706;
})();
if(cljs.core.truth_(inst_41672__$1)){
var statearr_41707_41764 = state_41698__$1;
(statearr_41707_41764[(1)] = (29));

} else {
var statearr_41708_41765 = state_41698__$1;
(statearr_41708_41765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (4))){
var inst_41616 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41616)){
var statearr_41709_41766 = state_41698__$1;
(statearr_41709_41766[(1)] = (8));

} else {
var statearr_41710_41767 = state_41698__$1;
(statearr_41710_41767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (15))){
var inst_41643 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41643)){
var statearr_41711_41768 = state_41698__$1;
(statearr_41711_41768[(1)] = (19));

} else {
var statearr_41712_41769 = state_41698__$1;
(statearr_41712_41769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (21))){
var inst_41648 = (state_41698[(12)]);
var inst_41648__$1 = (state_41698[(2)]);
var inst_41649 = cljs.core.get.call(null,inst_41648__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41650 = cljs.core.get.call(null,inst_41648__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41651 = cljs.core.get.call(null,inst_41648__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41698__$1 = (function (){var statearr_41713 = state_41698;
(statearr_41713[(10)] = inst_41649);

(statearr_41713[(13)] = inst_41650);

(statearr_41713[(12)] = inst_41648__$1);

return statearr_41713;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41698__$1,(22),inst_41651);
} else {
if((state_val_41699 === (31))){
var inst_41680 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41680)){
var statearr_41714_41770 = state_41698__$1;
(statearr_41714_41770[(1)] = (32));

} else {
var statearr_41715_41771 = state_41698__$1;
(statearr_41715_41771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (32))){
var inst_41657 = (state_41698[(14)]);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41698__$1,(35),out,inst_41657);
} else {
if((state_val_41699 === (33))){
var inst_41648 = (state_41698[(12)]);
var inst_41625 = inst_41648;
var state_41698__$1 = (function (){var statearr_41716 = state_41698;
(statearr_41716[(7)] = inst_41625);

return statearr_41716;
})();
var statearr_41717_41772 = state_41698__$1;
(statearr_41717_41772[(2)] = null);

(statearr_41717_41772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (13))){
var inst_41625 = (state_41698[(7)]);
var inst_41632 = inst_41625.cljs$lang$protocol_mask$partition0$;
var inst_41633 = (inst_41632 & (64));
var inst_41634 = inst_41625.cljs$core$ISeq$;
var inst_41635 = (cljs.core.PROTOCOL_SENTINEL === inst_41634);
var inst_41636 = ((inst_41633) || (inst_41635));
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41636)){
var statearr_41718_41773 = state_41698__$1;
(statearr_41718_41773[(1)] = (16));

} else {
var statearr_41719_41774 = state_41698__$1;
(statearr_41719_41774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (22))){
var inst_41658 = (state_41698[(11)]);
var inst_41657 = (state_41698[(14)]);
var inst_41656 = (state_41698[(2)]);
var inst_41657__$1 = cljs.core.nth.call(null,inst_41656,(0),null);
var inst_41658__$1 = cljs.core.nth.call(null,inst_41656,(1),null);
var inst_41659 = (inst_41657__$1 == null);
var inst_41660 = cljs.core._EQ_.call(null,inst_41658__$1,change);
var inst_41661 = ((inst_41659) || (inst_41660));
var state_41698__$1 = (function (){var statearr_41720 = state_41698;
(statearr_41720[(11)] = inst_41658__$1);

(statearr_41720[(14)] = inst_41657__$1);

return statearr_41720;
})();
if(cljs.core.truth_(inst_41661)){
var statearr_41721_41775 = state_41698__$1;
(statearr_41721_41775[(1)] = (23));

} else {
var statearr_41722_41776 = state_41698__$1;
(statearr_41722_41776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (36))){
var inst_41648 = (state_41698[(12)]);
var inst_41625 = inst_41648;
var state_41698__$1 = (function (){var statearr_41723 = state_41698;
(statearr_41723[(7)] = inst_41625);

return statearr_41723;
})();
var statearr_41724_41777 = state_41698__$1;
(statearr_41724_41777[(2)] = null);

(statearr_41724_41777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (29))){
var inst_41672 = (state_41698[(9)]);
var state_41698__$1 = state_41698;
var statearr_41725_41778 = state_41698__$1;
(statearr_41725_41778[(2)] = inst_41672);

(statearr_41725_41778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (6))){
var state_41698__$1 = state_41698;
var statearr_41726_41779 = state_41698__$1;
(statearr_41726_41779[(2)] = false);

(statearr_41726_41779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (28))){
var inst_41668 = (state_41698[(2)]);
var inst_41669 = calc_state.call(null);
var inst_41625 = inst_41669;
var state_41698__$1 = (function (){var statearr_41727 = state_41698;
(statearr_41727[(7)] = inst_41625);

(statearr_41727[(15)] = inst_41668);

return statearr_41727;
})();
var statearr_41728_41780 = state_41698__$1;
(statearr_41728_41780[(2)] = null);

(statearr_41728_41780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (25))){
var inst_41694 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41729_41781 = state_41698__$1;
(statearr_41729_41781[(2)] = inst_41694);

(statearr_41729_41781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (34))){
var inst_41692 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41730_41782 = state_41698__$1;
(statearr_41730_41782[(2)] = inst_41692);

(statearr_41730_41782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (17))){
var state_41698__$1 = state_41698;
var statearr_41731_41783 = state_41698__$1;
(statearr_41731_41783[(2)] = false);

(statearr_41731_41783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (3))){
var state_41698__$1 = state_41698;
var statearr_41732_41784 = state_41698__$1;
(statearr_41732_41784[(2)] = false);

(statearr_41732_41784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (12))){
var inst_41696 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41698__$1,inst_41696);
} else {
if((state_val_41699 === (2))){
var inst_41600 = (state_41698[(8)]);
var inst_41605 = inst_41600.cljs$lang$protocol_mask$partition0$;
var inst_41606 = (inst_41605 & (64));
var inst_41607 = inst_41600.cljs$core$ISeq$;
var inst_41608 = (cljs.core.PROTOCOL_SENTINEL === inst_41607);
var inst_41609 = ((inst_41606) || (inst_41608));
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41609)){
var statearr_41733_41785 = state_41698__$1;
(statearr_41733_41785[(1)] = (5));

} else {
var statearr_41734_41786 = state_41698__$1;
(statearr_41734_41786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (23))){
var inst_41657 = (state_41698[(14)]);
var inst_41663 = (inst_41657 == null);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41663)){
var statearr_41735_41787 = state_41698__$1;
(statearr_41735_41787[(1)] = (26));

} else {
var statearr_41736_41788 = state_41698__$1;
(statearr_41736_41788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (35))){
var inst_41683 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41683)){
var statearr_41737_41789 = state_41698__$1;
(statearr_41737_41789[(1)] = (36));

} else {
var statearr_41738_41790 = state_41698__$1;
(statearr_41738_41790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (19))){
var inst_41625 = (state_41698[(7)]);
var inst_41645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41625);
var state_41698__$1 = state_41698;
var statearr_41739_41791 = state_41698__$1;
(statearr_41739_41791[(2)] = inst_41645);

(statearr_41739_41791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (11))){
var inst_41625 = (state_41698[(7)]);
var inst_41629 = (inst_41625 == null);
var inst_41630 = cljs.core.not.call(null,inst_41629);
var state_41698__$1 = state_41698;
if(inst_41630){
var statearr_41740_41792 = state_41698__$1;
(statearr_41740_41792[(1)] = (13));

} else {
var statearr_41741_41793 = state_41698__$1;
(statearr_41741_41793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (9))){
var inst_41600 = (state_41698[(8)]);
var state_41698__$1 = state_41698;
var statearr_41742_41794 = state_41698__$1;
(statearr_41742_41794[(2)] = inst_41600);

(statearr_41742_41794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (5))){
var state_41698__$1 = state_41698;
var statearr_41743_41795 = state_41698__$1;
(statearr_41743_41795[(2)] = true);

(statearr_41743_41795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (14))){
var state_41698__$1 = state_41698;
var statearr_41744_41796 = state_41698__$1;
(statearr_41744_41796[(2)] = false);

(statearr_41744_41796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (26))){
var inst_41658 = (state_41698[(11)]);
var inst_41665 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41658);
var state_41698__$1 = state_41698;
var statearr_41745_41797 = state_41698__$1;
(statearr_41745_41797[(2)] = inst_41665);

(statearr_41745_41797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (16))){
var state_41698__$1 = state_41698;
var statearr_41746_41798 = state_41698__$1;
(statearr_41746_41798[(2)] = true);

(statearr_41746_41798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (38))){
var inst_41688 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41747_41799 = state_41698__$1;
(statearr_41747_41799[(2)] = inst_41688);

(statearr_41747_41799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (30))){
var inst_41649 = (state_41698[(10)]);
var inst_41650 = (state_41698[(13)]);
var inst_41658 = (state_41698[(11)]);
var inst_41675 = cljs.core.empty_QMARK_.call(null,inst_41649);
var inst_41676 = inst_41650.call(null,inst_41658);
var inst_41677 = cljs.core.not.call(null,inst_41676);
var inst_41678 = ((inst_41675) && (inst_41677));
var state_41698__$1 = state_41698;
var statearr_41748_41800 = state_41698__$1;
(statearr_41748_41800[(2)] = inst_41678);

(statearr_41748_41800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (10))){
var inst_41600 = (state_41698[(8)]);
var inst_41621 = (state_41698[(2)]);
var inst_41622 = cljs.core.get.call(null,inst_41621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41623 = cljs.core.get.call(null,inst_41621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41624 = cljs.core.get.call(null,inst_41621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41625 = inst_41600;
var state_41698__$1 = (function (){var statearr_41749 = state_41698;
(statearr_41749[(7)] = inst_41625);

(statearr_41749[(16)] = inst_41622);

(statearr_41749[(17)] = inst_41623);

(statearr_41749[(18)] = inst_41624);

return statearr_41749;
})();
var statearr_41750_41801 = state_41698__$1;
(statearr_41750_41801[(2)] = null);

(statearr_41750_41801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (18))){
var inst_41640 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41751_41802 = state_41698__$1;
(statearr_41751_41802[(2)] = inst_41640);

(statearr_41751_41802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (37))){
var state_41698__$1 = state_41698;
var statearr_41752_41803 = state_41698__$1;
(statearr_41752_41803[(2)] = null);

(statearr_41752_41803[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (8))){
var inst_41600 = (state_41698[(8)]);
var inst_41618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41600);
var state_41698__$1 = state_41698;
var statearr_41753_41804 = state_41698__$1;
(statearr_41753_41804[(2)] = inst_41618);

(statearr_41753_41804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38678__auto__,c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38679__auto__ = null;
var cljs$core$async$mix_$_state_machine__38679__auto____0 = (function (){
var statearr_41754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41754[(0)] = cljs$core$async$mix_$_state_machine__38679__auto__);

(statearr_41754[(1)] = (1));

return statearr_41754;
});
var cljs$core$async$mix_$_state_machine__38679__auto____1 = (function (state_41698){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41755){if((e41755 instanceof Object)){
var ex__38682__auto__ = e41755;
var statearr_41756_41805 = state_41698;
(statearr_41756_41805[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41806 = state_41698;
state_41698 = G__41806;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38679__auto__ = function(state_41698){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38679__auto____1.call(this,state_41698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38679__auto____0;
cljs$core$async$mix_$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38679__auto____1;
return cljs$core$async$mix_$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38837__auto__ = (function (){var statearr_41757 = f__38836__auto__.call(null);
(statearr_41757[(6)] = c__38835__auto___41758);

return statearr_41757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4213__auto__ = (((p == null))?null:p);
var m__4214__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4214__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4213__auto__ = (((p == null))?null:p);
var m__4214__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,p,v,ch);
} else {
var m__4214__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41808 = arguments.length;
switch (G__41808) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4213__auto__ = (((p == null))?null:p);
var m__4214__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,p);
} else {
var m__4214__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4213__auto__ = (((p == null))?null:p);
var m__4214__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4213__auto__)]);
if(!((m__4214__auto__ == null))){
return m__4214__auto__.call(null,p,v);
} else {
var m__4214__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4214__auto____$1 == null))){
return m__4214__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41812 = arguments.length;
switch (G__41812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3924__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3924__auto__)){
return or__3924__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3924__auto__,mults){
return (function (p1__41810_SHARP_){
if(cljs.core.truth_(p1__41810_SHARP_.call(null,topic))){
return p1__41810_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3924__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41813 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41814){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41814 = meta41814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41815,meta41814__$1){
var self__ = this;
var _41815__$1 = this;
return (new cljs.core.async.t_cljs$core$async41813(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41814__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41815){
var self__ = this;
var _41815__$1 = this;
return self__.meta41814;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41814","meta41814",634948331,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41813";

cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async41813");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41813.
 */
cljs.core.async.__GT_t_cljs$core$async41813 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41814){
return (new cljs.core.async.t_cljs$core$async41813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41814));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41813(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38835__auto___41933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___41933,mults,ensure_mult,p){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___41933,mults,ensure_mult,p){
return (function (state_41887){
var state_val_41888 = (state_41887[(1)]);
if((state_val_41888 === (7))){
var inst_41883 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41889_41934 = state_41887__$1;
(statearr_41889_41934[(2)] = inst_41883);

(statearr_41889_41934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (20))){
var state_41887__$1 = state_41887;
var statearr_41890_41935 = state_41887__$1;
(statearr_41890_41935[(2)] = null);

(statearr_41890_41935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (1))){
var state_41887__$1 = state_41887;
var statearr_41891_41936 = state_41887__$1;
(statearr_41891_41936[(2)] = null);

(statearr_41891_41936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (24))){
var inst_41866 = (state_41887[(7)]);
var inst_41875 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41866);
var state_41887__$1 = state_41887;
var statearr_41892_41937 = state_41887__$1;
(statearr_41892_41937[(2)] = inst_41875);

(statearr_41892_41937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (4))){
var inst_41818 = (state_41887[(8)]);
var inst_41818__$1 = (state_41887[(2)]);
var inst_41819 = (inst_41818__$1 == null);
var state_41887__$1 = (function (){var statearr_41893 = state_41887;
(statearr_41893[(8)] = inst_41818__$1);

return statearr_41893;
})();
if(cljs.core.truth_(inst_41819)){
var statearr_41894_41938 = state_41887__$1;
(statearr_41894_41938[(1)] = (5));

} else {
var statearr_41895_41939 = state_41887__$1;
(statearr_41895_41939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (15))){
var inst_41860 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41896_41940 = state_41887__$1;
(statearr_41896_41940[(2)] = inst_41860);

(statearr_41896_41940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (21))){
var inst_41880 = (state_41887[(2)]);
var state_41887__$1 = (function (){var statearr_41897 = state_41887;
(statearr_41897[(9)] = inst_41880);

return statearr_41897;
})();
var statearr_41898_41941 = state_41887__$1;
(statearr_41898_41941[(2)] = null);

(statearr_41898_41941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (13))){
var inst_41842 = (state_41887[(10)]);
var inst_41844 = cljs.core.chunked_seq_QMARK_.call(null,inst_41842);
var state_41887__$1 = state_41887;
if(inst_41844){
var statearr_41899_41942 = state_41887__$1;
(statearr_41899_41942[(1)] = (16));

} else {
var statearr_41900_41943 = state_41887__$1;
(statearr_41900_41943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (22))){
var inst_41872 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
if(cljs.core.truth_(inst_41872)){
var statearr_41901_41944 = state_41887__$1;
(statearr_41901_41944[(1)] = (23));

} else {
var statearr_41902_41945 = state_41887__$1;
(statearr_41902_41945[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (6))){
var inst_41866 = (state_41887[(7)]);
var inst_41818 = (state_41887[(8)]);
var inst_41868 = (state_41887[(11)]);
var inst_41866__$1 = topic_fn.call(null,inst_41818);
var inst_41867 = cljs.core.deref.call(null,mults);
var inst_41868__$1 = cljs.core.get.call(null,inst_41867,inst_41866__$1);
var state_41887__$1 = (function (){var statearr_41903 = state_41887;
(statearr_41903[(7)] = inst_41866__$1);

(statearr_41903[(11)] = inst_41868__$1);

return statearr_41903;
})();
if(cljs.core.truth_(inst_41868__$1)){
var statearr_41904_41946 = state_41887__$1;
(statearr_41904_41946[(1)] = (19));

} else {
var statearr_41905_41947 = state_41887__$1;
(statearr_41905_41947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (25))){
var inst_41877 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41906_41948 = state_41887__$1;
(statearr_41906_41948[(2)] = inst_41877);

(statearr_41906_41948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (17))){
var inst_41842 = (state_41887[(10)]);
var inst_41851 = cljs.core.first.call(null,inst_41842);
var inst_41852 = cljs.core.async.muxch_STAR_.call(null,inst_41851);
var inst_41853 = cljs.core.async.close_BANG_.call(null,inst_41852);
var inst_41854 = cljs.core.next.call(null,inst_41842);
var inst_41828 = inst_41854;
var inst_41829 = null;
var inst_41830 = (0);
var inst_41831 = (0);
var state_41887__$1 = (function (){var statearr_41907 = state_41887;
(statearr_41907[(12)] = inst_41828);

(statearr_41907[(13)] = inst_41830);

(statearr_41907[(14)] = inst_41853);

(statearr_41907[(15)] = inst_41829);

(statearr_41907[(16)] = inst_41831);

return statearr_41907;
})();
var statearr_41908_41949 = state_41887__$1;
(statearr_41908_41949[(2)] = null);

(statearr_41908_41949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (3))){
var inst_41885 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41887__$1,inst_41885);
} else {
if((state_val_41888 === (12))){
var inst_41862 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41909_41950 = state_41887__$1;
(statearr_41909_41950[(2)] = inst_41862);

(statearr_41909_41950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (2))){
var state_41887__$1 = state_41887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41887__$1,(4),ch);
} else {
if((state_val_41888 === (23))){
var state_41887__$1 = state_41887;
var statearr_41910_41951 = state_41887__$1;
(statearr_41910_41951[(2)] = null);

(statearr_41910_41951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (19))){
var inst_41818 = (state_41887[(8)]);
var inst_41868 = (state_41887[(11)]);
var inst_41870 = cljs.core.async.muxch_STAR_.call(null,inst_41868);
var state_41887__$1 = state_41887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41887__$1,(22),inst_41870,inst_41818);
} else {
if((state_val_41888 === (11))){
var inst_41828 = (state_41887[(12)]);
var inst_41842 = (state_41887[(10)]);
var inst_41842__$1 = cljs.core.seq.call(null,inst_41828);
var state_41887__$1 = (function (){var statearr_41911 = state_41887;
(statearr_41911[(10)] = inst_41842__$1);

return statearr_41911;
})();
if(inst_41842__$1){
var statearr_41912_41952 = state_41887__$1;
(statearr_41912_41952[(1)] = (13));

} else {
var statearr_41913_41953 = state_41887__$1;
(statearr_41913_41953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (9))){
var inst_41864 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41914_41954 = state_41887__$1;
(statearr_41914_41954[(2)] = inst_41864);

(statearr_41914_41954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (5))){
var inst_41825 = cljs.core.deref.call(null,mults);
var inst_41826 = cljs.core.vals.call(null,inst_41825);
var inst_41827 = cljs.core.seq.call(null,inst_41826);
var inst_41828 = inst_41827;
var inst_41829 = null;
var inst_41830 = (0);
var inst_41831 = (0);
var state_41887__$1 = (function (){var statearr_41915 = state_41887;
(statearr_41915[(12)] = inst_41828);

(statearr_41915[(13)] = inst_41830);

(statearr_41915[(15)] = inst_41829);

(statearr_41915[(16)] = inst_41831);

return statearr_41915;
})();
var statearr_41916_41955 = state_41887__$1;
(statearr_41916_41955[(2)] = null);

(statearr_41916_41955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (14))){
var state_41887__$1 = state_41887;
var statearr_41920_41956 = state_41887__$1;
(statearr_41920_41956[(2)] = null);

(statearr_41920_41956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (16))){
var inst_41842 = (state_41887[(10)]);
var inst_41846 = cljs.core.chunk_first.call(null,inst_41842);
var inst_41847 = cljs.core.chunk_rest.call(null,inst_41842);
var inst_41848 = cljs.core.count.call(null,inst_41846);
var inst_41828 = inst_41847;
var inst_41829 = inst_41846;
var inst_41830 = inst_41848;
var inst_41831 = (0);
var state_41887__$1 = (function (){var statearr_41921 = state_41887;
(statearr_41921[(12)] = inst_41828);

(statearr_41921[(13)] = inst_41830);

(statearr_41921[(15)] = inst_41829);

(statearr_41921[(16)] = inst_41831);

return statearr_41921;
})();
var statearr_41922_41957 = state_41887__$1;
(statearr_41922_41957[(2)] = null);

(statearr_41922_41957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (10))){
var inst_41828 = (state_41887[(12)]);
var inst_41830 = (state_41887[(13)]);
var inst_41829 = (state_41887[(15)]);
var inst_41831 = (state_41887[(16)]);
var inst_41836 = cljs.core._nth.call(null,inst_41829,inst_41831);
var inst_41837 = cljs.core.async.muxch_STAR_.call(null,inst_41836);
var inst_41838 = cljs.core.async.close_BANG_.call(null,inst_41837);
var inst_41839 = (inst_41831 + (1));
var tmp41917 = inst_41828;
var tmp41918 = inst_41830;
var tmp41919 = inst_41829;
var inst_41828__$1 = tmp41917;
var inst_41829__$1 = tmp41919;
var inst_41830__$1 = tmp41918;
var inst_41831__$1 = inst_41839;
var state_41887__$1 = (function (){var statearr_41923 = state_41887;
(statearr_41923[(12)] = inst_41828__$1);

(statearr_41923[(13)] = inst_41830__$1);

(statearr_41923[(15)] = inst_41829__$1);

(statearr_41923[(16)] = inst_41831__$1);

(statearr_41923[(17)] = inst_41838);

return statearr_41923;
})();
var statearr_41924_41958 = state_41887__$1;
(statearr_41924_41958[(2)] = null);

(statearr_41924_41958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (18))){
var inst_41857 = (state_41887[(2)]);
var state_41887__$1 = state_41887;
var statearr_41925_41959 = state_41887__$1;
(statearr_41925_41959[(2)] = inst_41857);

(statearr_41925_41959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41888 === (8))){
var inst_41830 = (state_41887[(13)]);
var inst_41831 = (state_41887[(16)]);
var inst_41833 = (inst_41831 < inst_41830);
var inst_41834 = inst_41833;
var state_41887__$1 = state_41887;
if(cljs.core.truth_(inst_41834)){
var statearr_41926_41960 = state_41887__$1;
(statearr_41926_41960[(1)] = (10));

} else {
var statearr_41927_41961 = state_41887__$1;
(statearr_41927_41961[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___41933,mults,ensure_mult,p))
;
return ((function (switch__38678__auto__,c__38835__auto___41933,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_41928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41928[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_41928[(1)] = (1));

return statearr_41928;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_41887){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_41887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e41929){if((e41929 instanceof Object)){
var ex__38682__auto__ = e41929;
var statearr_41930_41962 = state_41887;
(statearr_41930_41962[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41963 = state_41887;
state_41887 = G__41963;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_41887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_41887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___41933,mults,ensure_mult,p))
})();
var state__38837__auto__ = (function (){var statearr_41931 = f__38836__auto__.call(null);
(statearr_41931[(6)] = c__38835__auto___41933);

return statearr_41931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___41933,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41965 = arguments.length;
switch (G__41965) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41968 = arguments.length;
switch (G__41968) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41971 = arguments.length;
switch (G__41971) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38835__auto___42038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42010){
var state_val_42011 = (state_42010[(1)]);
if((state_val_42011 === (7))){
var state_42010__$1 = state_42010;
var statearr_42012_42039 = state_42010__$1;
(statearr_42012_42039[(2)] = null);

(statearr_42012_42039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (1))){
var state_42010__$1 = state_42010;
var statearr_42013_42040 = state_42010__$1;
(statearr_42013_42040[(2)] = null);

(statearr_42013_42040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (4))){
var inst_41974 = (state_42010[(7)]);
var inst_41976 = (inst_41974 < cnt);
var state_42010__$1 = state_42010;
if(cljs.core.truth_(inst_41976)){
var statearr_42014_42041 = state_42010__$1;
(statearr_42014_42041[(1)] = (6));

} else {
var statearr_42015_42042 = state_42010__$1;
(statearr_42015_42042[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (15))){
var inst_42006 = (state_42010[(2)]);
var state_42010__$1 = state_42010;
var statearr_42016_42043 = state_42010__$1;
(statearr_42016_42043[(2)] = inst_42006);

(statearr_42016_42043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (13))){
var inst_41999 = cljs.core.async.close_BANG_.call(null,out);
var state_42010__$1 = state_42010;
var statearr_42017_42044 = state_42010__$1;
(statearr_42017_42044[(2)] = inst_41999);

(statearr_42017_42044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (6))){
var state_42010__$1 = state_42010;
var statearr_42018_42045 = state_42010__$1;
(statearr_42018_42045[(2)] = null);

(statearr_42018_42045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (3))){
var inst_42008 = (state_42010[(2)]);
var state_42010__$1 = state_42010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42010__$1,inst_42008);
} else {
if((state_val_42011 === (12))){
var inst_41996 = (state_42010[(8)]);
var inst_41996__$1 = (state_42010[(2)]);
var inst_41997 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41996__$1);
var state_42010__$1 = (function (){var statearr_42019 = state_42010;
(statearr_42019[(8)] = inst_41996__$1);

return statearr_42019;
})();
if(cljs.core.truth_(inst_41997)){
var statearr_42020_42046 = state_42010__$1;
(statearr_42020_42046[(1)] = (13));

} else {
var statearr_42021_42047 = state_42010__$1;
(statearr_42021_42047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (2))){
var inst_41973 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41974 = (0);
var state_42010__$1 = (function (){var statearr_42022 = state_42010;
(statearr_42022[(7)] = inst_41974);

(statearr_42022[(9)] = inst_41973);

return statearr_42022;
})();
var statearr_42023_42048 = state_42010__$1;
(statearr_42023_42048[(2)] = null);

(statearr_42023_42048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (11))){
var inst_41974 = (state_42010[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42010,(10),Object,null,(9));
var inst_41983 = chs__$1.call(null,inst_41974);
var inst_41984 = done.call(null,inst_41974);
var inst_41985 = cljs.core.async.take_BANG_.call(null,inst_41983,inst_41984);
var state_42010__$1 = state_42010;
var statearr_42024_42049 = state_42010__$1;
(statearr_42024_42049[(2)] = inst_41985);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42010__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (9))){
var inst_41974 = (state_42010[(7)]);
var inst_41987 = (state_42010[(2)]);
var inst_41988 = (inst_41974 + (1));
var inst_41974__$1 = inst_41988;
var state_42010__$1 = (function (){var statearr_42025 = state_42010;
(statearr_42025[(7)] = inst_41974__$1);

(statearr_42025[(10)] = inst_41987);

return statearr_42025;
})();
var statearr_42026_42050 = state_42010__$1;
(statearr_42026_42050[(2)] = null);

(statearr_42026_42050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (5))){
var inst_41994 = (state_42010[(2)]);
var state_42010__$1 = (function (){var statearr_42027 = state_42010;
(statearr_42027[(11)] = inst_41994);

return statearr_42027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42010__$1,(12),dchan);
} else {
if((state_val_42011 === (14))){
var inst_41996 = (state_42010[(8)]);
var inst_42001 = cljs.core.apply.call(null,f,inst_41996);
var state_42010__$1 = state_42010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42010__$1,(16),out,inst_42001);
} else {
if((state_val_42011 === (16))){
var inst_42003 = (state_42010[(2)]);
var state_42010__$1 = (function (){var statearr_42028 = state_42010;
(statearr_42028[(12)] = inst_42003);

return statearr_42028;
})();
var statearr_42029_42051 = state_42010__$1;
(statearr_42029_42051[(2)] = null);

(statearr_42029_42051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (10))){
var inst_41978 = (state_42010[(2)]);
var inst_41979 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42010__$1 = (function (){var statearr_42030 = state_42010;
(statearr_42030[(13)] = inst_41978);

return statearr_42030;
})();
var statearr_42031_42052 = state_42010__$1;
(statearr_42031_42052[(2)] = inst_41979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42010__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42011 === (8))){
var inst_41992 = (state_42010[(2)]);
var state_42010__$1 = state_42010;
var statearr_42032_42053 = state_42010__$1;
(statearr_42032_42053[(2)] = inst_41992);

(statearr_42032_42053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38678__auto__,c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42033[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42033[(1)] = (1));

return statearr_42033;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42010){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42034){if((e42034 instanceof Object)){
var ex__38682__auto__ = e42034;
var statearr_42035_42054 = state_42010;
(statearr_42035_42054[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42055 = state_42010;
state_42010 = G__42055;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38837__auto__ = (function (){var statearr_42036 = f__38836__auto__.call(null);
(statearr_42036[(6)] = c__38835__auto___42038);

return statearr_42036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42038,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42058 = arguments.length;
switch (G__42058) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42112,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42112,out){
return (function (state_42090){
var state_val_42091 = (state_42090[(1)]);
if((state_val_42091 === (7))){
var inst_42070 = (state_42090[(7)]);
var inst_42069 = (state_42090[(8)]);
var inst_42069__$1 = (state_42090[(2)]);
var inst_42070__$1 = cljs.core.nth.call(null,inst_42069__$1,(0),null);
var inst_42071 = cljs.core.nth.call(null,inst_42069__$1,(1),null);
var inst_42072 = (inst_42070__$1 == null);
var state_42090__$1 = (function (){var statearr_42092 = state_42090;
(statearr_42092[(9)] = inst_42071);

(statearr_42092[(7)] = inst_42070__$1);

(statearr_42092[(8)] = inst_42069__$1);

return statearr_42092;
})();
if(cljs.core.truth_(inst_42072)){
var statearr_42093_42113 = state_42090__$1;
(statearr_42093_42113[(1)] = (8));

} else {
var statearr_42094_42114 = state_42090__$1;
(statearr_42094_42114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (1))){
var inst_42059 = cljs.core.vec.call(null,chs);
var inst_42060 = inst_42059;
var state_42090__$1 = (function (){var statearr_42095 = state_42090;
(statearr_42095[(10)] = inst_42060);

return statearr_42095;
})();
var statearr_42096_42115 = state_42090__$1;
(statearr_42096_42115[(2)] = null);

(statearr_42096_42115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (4))){
var inst_42060 = (state_42090[(10)]);
var state_42090__$1 = state_42090;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42090__$1,(7),inst_42060);
} else {
if((state_val_42091 === (6))){
var inst_42086 = (state_42090[(2)]);
var state_42090__$1 = state_42090;
var statearr_42097_42116 = state_42090__$1;
(statearr_42097_42116[(2)] = inst_42086);

(statearr_42097_42116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (3))){
var inst_42088 = (state_42090[(2)]);
var state_42090__$1 = state_42090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42090__$1,inst_42088);
} else {
if((state_val_42091 === (2))){
var inst_42060 = (state_42090[(10)]);
var inst_42062 = cljs.core.count.call(null,inst_42060);
var inst_42063 = (inst_42062 > (0));
var state_42090__$1 = state_42090;
if(cljs.core.truth_(inst_42063)){
var statearr_42099_42117 = state_42090__$1;
(statearr_42099_42117[(1)] = (4));

} else {
var statearr_42100_42118 = state_42090__$1;
(statearr_42100_42118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (11))){
var inst_42060 = (state_42090[(10)]);
var inst_42079 = (state_42090[(2)]);
var tmp42098 = inst_42060;
var inst_42060__$1 = tmp42098;
var state_42090__$1 = (function (){var statearr_42101 = state_42090;
(statearr_42101[(10)] = inst_42060__$1);

(statearr_42101[(11)] = inst_42079);

return statearr_42101;
})();
var statearr_42102_42119 = state_42090__$1;
(statearr_42102_42119[(2)] = null);

(statearr_42102_42119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (9))){
var inst_42070 = (state_42090[(7)]);
var state_42090__$1 = state_42090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42090__$1,(11),out,inst_42070);
} else {
if((state_val_42091 === (5))){
var inst_42084 = cljs.core.async.close_BANG_.call(null,out);
var state_42090__$1 = state_42090;
var statearr_42103_42120 = state_42090__$1;
(statearr_42103_42120[(2)] = inst_42084);

(statearr_42103_42120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (10))){
var inst_42082 = (state_42090[(2)]);
var state_42090__$1 = state_42090;
var statearr_42104_42121 = state_42090__$1;
(statearr_42104_42121[(2)] = inst_42082);

(statearr_42104_42121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42091 === (8))){
var inst_42060 = (state_42090[(10)]);
var inst_42071 = (state_42090[(9)]);
var inst_42070 = (state_42090[(7)]);
var inst_42069 = (state_42090[(8)]);
var inst_42074 = (function (){var cs = inst_42060;
var vec__42065 = inst_42069;
var v = inst_42070;
var c = inst_42071;
return ((function (cs,vec__42065,v,c,inst_42060,inst_42071,inst_42070,inst_42069,state_val_42091,c__38835__auto___42112,out){
return (function (p1__42056_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42056_SHARP_);
});
;})(cs,vec__42065,v,c,inst_42060,inst_42071,inst_42070,inst_42069,state_val_42091,c__38835__auto___42112,out))
})();
var inst_42075 = cljs.core.filterv.call(null,inst_42074,inst_42060);
var inst_42060__$1 = inst_42075;
var state_42090__$1 = (function (){var statearr_42105 = state_42090;
(statearr_42105[(10)] = inst_42060__$1);

return statearr_42105;
})();
var statearr_42106_42122 = state_42090__$1;
(statearr_42106_42122[(2)] = null);

(statearr_42106_42122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42112,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42112,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42107[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42107[(1)] = (1));

return statearr_42107;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42090){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42108){if((e42108 instanceof Object)){
var ex__38682__auto__ = e42108;
var statearr_42109_42123 = state_42090;
(statearr_42109_42123[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42124 = state_42090;
state_42090 = G__42124;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42112,out))
})();
var state__38837__auto__ = (function (){var statearr_42110 = f__38836__auto__.call(null);
(statearr_42110[(6)] = c__38835__auto___42112);

return statearr_42110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42112,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42126 = arguments.length;
switch (G__42126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42171,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42171,out){
return (function (state_42150){
var state_val_42151 = (state_42150[(1)]);
if((state_val_42151 === (7))){
var inst_42132 = (state_42150[(7)]);
var inst_42132__$1 = (state_42150[(2)]);
var inst_42133 = (inst_42132__$1 == null);
var inst_42134 = cljs.core.not.call(null,inst_42133);
var state_42150__$1 = (function (){var statearr_42152 = state_42150;
(statearr_42152[(7)] = inst_42132__$1);

return statearr_42152;
})();
if(inst_42134){
var statearr_42153_42172 = state_42150__$1;
(statearr_42153_42172[(1)] = (8));

} else {
var statearr_42154_42173 = state_42150__$1;
(statearr_42154_42173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (1))){
var inst_42127 = (0);
var state_42150__$1 = (function (){var statearr_42155 = state_42150;
(statearr_42155[(8)] = inst_42127);

return statearr_42155;
})();
var statearr_42156_42174 = state_42150__$1;
(statearr_42156_42174[(2)] = null);

(statearr_42156_42174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (4))){
var state_42150__$1 = state_42150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42150__$1,(7),ch);
} else {
if((state_val_42151 === (6))){
var inst_42145 = (state_42150[(2)]);
var state_42150__$1 = state_42150;
var statearr_42157_42175 = state_42150__$1;
(statearr_42157_42175[(2)] = inst_42145);

(statearr_42157_42175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (3))){
var inst_42147 = (state_42150[(2)]);
var inst_42148 = cljs.core.async.close_BANG_.call(null,out);
var state_42150__$1 = (function (){var statearr_42158 = state_42150;
(statearr_42158[(9)] = inst_42147);

return statearr_42158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42150__$1,inst_42148);
} else {
if((state_val_42151 === (2))){
var inst_42127 = (state_42150[(8)]);
var inst_42129 = (inst_42127 < n);
var state_42150__$1 = state_42150;
if(cljs.core.truth_(inst_42129)){
var statearr_42159_42176 = state_42150__$1;
(statearr_42159_42176[(1)] = (4));

} else {
var statearr_42160_42177 = state_42150__$1;
(statearr_42160_42177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (11))){
var inst_42127 = (state_42150[(8)]);
var inst_42137 = (state_42150[(2)]);
var inst_42138 = (inst_42127 + (1));
var inst_42127__$1 = inst_42138;
var state_42150__$1 = (function (){var statearr_42161 = state_42150;
(statearr_42161[(10)] = inst_42137);

(statearr_42161[(8)] = inst_42127__$1);

return statearr_42161;
})();
var statearr_42162_42178 = state_42150__$1;
(statearr_42162_42178[(2)] = null);

(statearr_42162_42178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (9))){
var state_42150__$1 = state_42150;
var statearr_42163_42179 = state_42150__$1;
(statearr_42163_42179[(2)] = null);

(statearr_42163_42179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (5))){
var state_42150__$1 = state_42150;
var statearr_42164_42180 = state_42150__$1;
(statearr_42164_42180[(2)] = null);

(statearr_42164_42180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (10))){
var inst_42142 = (state_42150[(2)]);
var state_42150__$1 = state_42150;
var statearr_42165_42181 = state_42150__$1;
(statearr_42165_42181[(2)] = inst_42142);

(statearr_42165_42181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42151 === (8))){
var inst_42132 = (state_42150[(7)]);
var state_42150__$1 = state_42150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42150__$1,(11),out,inst_42132);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42171,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42171,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42166[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42166[(1)] = (1));

return statearr_42166;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42150){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42167){if((e42167 instanceof Object)){
var ex__38682__auto__ = e42167;
var statearr_42168_42182 = state_42150;
(statearr_42168_42182[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42183 = state_42150;
state_42150 = G__42183;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42171,out))
})();
var state__38837__auto__ = (function (){var statearr_42169 = f__38836__auto__.call(null);
(statearr_42169[(6)] = c__38835__auto___42171);

return statearr_42169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42171,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42185 = (function (f,ch,meta42186){
this.f = f;
this.ch = ch;
this.meta42186 = meta42186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42187,meta42186__$1){
var self__ = this;
var _42187__$1 = this;
return (new cljs.core.async.t_cljs$core$async42185(self__.f,self__.ch,meta42186__$1));
});

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42187){
var self__ = this;
var _42187__$1 = this;
return self__.meta42186;
});

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42188 = (function (f,ch,meta42186,_,fn1,meta42189){
this.f = f;
this.ch = ch;
this.meta42186 = meta42186;
this._ = _;
this.fn1 = fn1;
this.meta42189 = meta42189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42190,meta42189__$1){
var self__ = this;
var _42190__$1 = this;
return (new cljs.core.async.t_cljs$core$async42188(self__.f,self__.ch,self__.meta42186,self__._,self__.fn1,meta42189__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42190){
var self__ = this;
var _42190__$1 = this;
return self__.meta42189;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42184_SHARP_){
return f1.call(null,(((p1__42184_SHARP_ == null))?null:self__.f.call(null,p1__42184_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42186","meta42186",669233903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42185","cljs.core.async/t_cljs$core$async42185",-1876765152,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42189","meta42189",1442161245,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42188";

cljs.core.async.t_cljs$core$async42188.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async42188");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42188.
 */
cljs.core.async.__GT_t_cljs$core$async42188 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42188(f__$1,ch__$1,meta42186__$1,___$2,fn1__$1,meta42189){
return (new cljs.core.async.t_cljs$core$async42188(f__$1,ch__$1,meta42186__$1,___$2,fn1__$1,meta42189));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42188(self__.f,self__.ch,self__.meta42186,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3913__auto__ = ret;
if(cljs.core.truth_(and__3913__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3913__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42186","meta42186",669233903,null)], null);
});

cljs.core.async.t_cljs$core$async42185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42185";

cljs.core.async.t_cljs$core$async42185.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async42185");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42185.
 */
cljs.core.async.__GT_t_cljs$core$async42185 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42185(f__$1,ch__$1,meta42186){
return (new cljs.core.async.t_cljs$core$async42185(f__$1,ch__$1,meta42186));
});

}

return (new cljs.core.async.t_cljs$core$async42185(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42191 = (function (f,ch,meta42192){
this.f = f;
this.ch = ch;
this.meta42192 = meta42192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42193,meta42192__$1){
var self__ = this;
var _42193__$1 = this;
return (new cljs.core.async.t_cljs$core$async42191(self__.f,self__.ch,meta42192__$1));
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42193){
var self__ = this;
var _42193__$1 = this;
return self__.meta42192;
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42192","meta42192",1135094674,null)], null);
});

cljs.core.async.t_cljs$core$async42191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42191";

cljs.core.async.t_cljs$core$async42191.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async42191");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42191.
 */
cljs.core.async.__GT_t_cljs$core$async42191 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42191(f__$1,ch__$1,meta42192){
return (new cljs.core.async.t_cljs$core$async42191(f__$1,ch__$1,meta42192));
});

}

return (new cljs.core.async.t_cljs$core$async42191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42194 = (function (p,ch,meta42195){
this.p = p;
this.ch = ch;
this.meta42195 = meta42195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42196,meta42195__$1){
var self__ = this;
var _42196__$1 = this;
return (new cljs.core.async.t_cljs$core$async42194(self__.p,self__.ch,meta42195__$1));
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42196){
var self__ = this;
var _42196__$1 = this;
return self__.meta42195;
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42195","meta42195",-1752287382,null)], null);
});

cljs.core.async.t_cljs$core$async42194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42194";

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__,opt__4165__auto__){
return cljs.core._write.call(null,writer__4164__auto__,"cljs.core.async/t_cljs$core$async42194");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42194.
 */
cljs.core.async.__GT_t_cljs$core$async42194 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42194(p__$1,ch__$1,meta42195){
return (new cljs.core.async.t_cljs$core$async42194(p__$1,ch__$1,meta42195));
});

}

return (new cljs.core.async.t_cljs$core$async42194(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42198 = arguments.length;
switch (G__42198) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42238,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42238,out){
return (function (state_42219){
var state_val_42220 = (state_42219[(1)]);
if((state_val_42220 === (7))){
var inst_42215 = (state_42219[(2)]);
var state_42219__$1 = state_42219;
var statearr_42221_42239 = state_42219__$1;
(statearr_42221_42239[(2)] = inst_42215);

(statearr_42221_42239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (1))){
var state_42219__$1 = state_42219;
var statearr_42222_42240 = state_42219__$1;
(statearr_42222_42240[(2)] = null);

(statearr_42222_42240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (4))){
var inst_42201 = (state_42219[(7)]);
var inst_42201__$1 = (state_42219[(2)]);
var inst_42202 = (inst_42201__$1 == null);
var state_42219__$1 = (function (){var statearr_42223 = state_42219;
(statearr_42223[(7)] = inst_42201__$1);

return statearr_42223;
})();
if(cljs.core.truth_(inst_42202)){
var statearr_42224_42241 = state_42219__$1;
(statearr_42224_42241[(1)] = (5));

} else {
var statearr_42225_42242 = state_42219__$1;
(statearr_42225_42242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (6))){
var inst_42201 = (state_42219[(7)]);
var inst_42206 = p.call(null,inst_42201);
var state_42219__$1 = state_42219;
if(cljs.core.truth_(inst_42206)){
var statearr_42226_42243 = state_42219__$1;
(statearr_42226_42243[(1)] = (8));

} else {
var statearr_42227_42244 = state_42219__$1;
(statearr_42227_42244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (3))){
var inst_42217 = (state_42219[(2)]);
var state_42219__$1 = state_42219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42219__$1,inst_42217);
} else {
if((state_val_42220 === (2))){
var state_42219__$1 = state_42219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42219__$1,(4),ch);
} else {
if((state_val_42220 === (11))){
var inst_42209 = (state_42219[(2)]);
var state_42219__$1 = state_42219;
var statearr_42228_42245 = state_42219__$1;
(statearr_42228_42245[(2)] = inst_42209);

(statearr_42228_42245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (9))){
var state_42219__$1 = state_42219;
var statearr_42229_42246 = state_42219__$1;
(statearr_42229_42246[(2)] = null);

(statearr_42229_42246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (5))){
var inst_42204 = cljs.core.async.close_BANG_.call(null,out);
var state_42219__$1 = state_42219;
var statearr_42230_42247 = state_42219__$1;
(statearr_42230_42247[(2)] = inst_42204);

(statearr_42230_42247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (10))){
var inst_42212 = (state_42219[(2)]);
var state_42219__$1 = (function (){var statearr_42231 = state_42219;
(statearr_42231[(8)] = inst_42212);

return statearr_42231;
})();
var statearr_42232_42248 = state_42219__$1;
(statearr_42232_42248[(2)] = null);

(statearr_42232_42248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42220 === (8))){
var inst_42201 = (state_42219[(7)]);
var state_42219__$1 = state_42219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42219__$1,(11),out,inst_42201);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42238,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42238,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42233 = [null,null,null,null,null,null,null,null,null];
(statearr_42233[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42233[(1)] = (1));

return statearr_42233;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42219){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42234){if((e42234 instanceof Object)){
var ex__38682__auto__ = e42234;
var statearr_42235_42249 = state_42219;
(statearr_42235_42249[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42250 = state_42219;
state_42219 = G__42250;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42238,out))
})();
var state__38837__auto__ = (function (){var statearr_42236 = f__38836__auto__.call(null);
(statearr_42236[(6)] = c__38835__auto___42238);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42238,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42252 = arguments.length;
switch (G__42252) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto__){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto__){
return (function (state_42315){
var state_val_42316 = (state_42315[(1)]);
if((state_val_42316 === (7))){
var inst_42311 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
var statearr_42317_42355 = state_42315__$1;
(statearr_42317_42355[(2)] = inst_42311);

(statearr_42317_42355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (20))){
var inst_42281 = (state_42315[(7)]);
var inst_42292 = (state_42315[(2)]);
var inst_42293 = cljs.core.next.call(null,inst_42281);
var inst_42267 = inst_42293;
var inst_42268 = null;
var inst_42269 = (0);
var inst_42270 = (0);
var state_42315__$1 = (function (){var statearr_42318 = state_42315;
(statearr_42318[(8)] = inst_42269);

(statearr_42318[(9)] = inst_42270);

(statearr_42318[(10)] = inst_42267);

(statearr_42318[(11)] = inst_42292);

(statearr_42318[(12)] = inst_42268);

return statearr_42318;
})();
var statearr_42319_42356 = state_42315__$1;
(statearr_42319_42356[(2)] = null);

(statearr_42319_42356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (1))){
var state_42315__$1 = state_42315;
var statearr_42320_42357 = state_42315__$1;
(statearr_42320_42357[(2)] = null);

(statearr_42320_42357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (4))){
var inst_42256 = (state_42315[(13)]);
var inst_42256__$1 = (state_42315[(2)]);
var inst_42257 = (inst_42256__$1 == null);
var state_42315__$1 = (function (){var statearr_42321 = state_42315;
(statearr_42321[(13)] = inst_42256__$1);

return statearr_42321;
})();
if(cljs.core.truth_(inst_42257)){
var statearr_42322_42358 = state_42315__$1;
(statearr_42322_42358[(1)] = (5));

} else {
var statearr_42323_42359 = state_42315__$1;
(statearr_42323_42359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (15))){
var state_42315__$1 = state_42315;
var statearr_42327_42360 = state_42315__$1;
(statearr_42327_42360[(2)] = null);

(statearr_42327_42360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (21))){
var state_42315__$1 = state_42315;
var statearr_42328_42361 = state_42315__$1;
(statearr_42328_42361[(2)] = null);

(statearr_42328_42361[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (13))){
var inst_42269 = (state_42315[(8)]);
var inst_42270 = (state_42315[(9)]);
var inst_42267 = (state_42315[(10)]);
var inst_42268 = (state_42315[(12)]);
var inst_42277 = (state_42315[(2)]);
var inst_42278 = (inst_42270 + (1));
var tmp42324 = inst_42269;
var tmp42325 = inst_42267;
var tmp42326 = inst_42268;
var inst_42267__$1 = tmp42325;
var inst_42268__$1 = tmp42326;
var inst_42269__$1 = tmp42324;
var inst_42270__$1 = inst_42278;
var state_42315__$1 = (function (){var statearr_42329 = state_42315;
(statearr_42329[(8)] = inst_42269__$1);

(statearr_42329[(14)] = inst_42277);

(statearr_42329[(9)] = inst_42270__$1);

(statearr_42329[(10)] = inst_42267__$1);

(statearr_42329[(12)] = inst_42268__$1);

return statearr_42329;
})();
var statearr_42330_42362 = state_42315__$1;
(statearr_42330_42362[(2)] = null);

(statearr_42330_42362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (22))){
var state_42315__$1 = state_42315;
var statearr_42331_42363 = state_42315__$1;
(statearr_42331_42363[(2)] = null);

(statearr_42331_42363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (6))){
var inst_42256 = (state_42315[(13)]);
var inst_42265 = f.call(null,inst_42256);
var inst_42266 = cljs.core.seq.call(null,inst_42265);
var inst_42267 = inst_42266;
var inst_42268 = null;
var inst_42269 = (0);
var inst_42270 = (0);
var state_42315__$1 = (function (){var statearr_42332 = state_42315;
(statearr_42332[(8)] = inst_42269);

(statearr_42332[(9)] = inst_42270);

(statearr_42332[(10)] = inst_42267);

(statearr_42332[(12)] = inst_42268);

return statearr_42332;
})();
var statearr_42333_42364 = state_42315__$1;
(statearr_42333_42364[(2)] = null);

(statearr_42333_42364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (17))){
var inst_42281 = (state_42315[(7)]);
var inst_42285 = cljs.core.chunk_first.call(null,inst_42281);
var inst_42286 = cljs.core.chunk_rest.call(null,inst_42281);
var inst_42287 = cljs.core.count.call(null,inst_42285);
var inst_42267 = inst_42286;
var inst_42268 = inst_42285;
var inst_42269 = inst_42287;
var inst_42270 = (0);
var state_42315__$1 = (function (){var statearr_42334 = state_42315;
(statearr_42334[(8)] = inst_42269);

(statearr_42334[(9)] = inst_42270);

(statearr_42334[(10)] = inst_42267);

(statearr_42334[(12)] = inst_42268);

return statearr_42334;
})();
var statearr_42335_42365 = state_42315__$1;
(statearr_42335_42365[(2)] = null);

(statearr_42335_42365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (3))){
var inst_42313 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42315__$1,inst_42313);
} else {
if((state_val_42316 === (12))){
var inst_42301 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
var statearr_42336_42366 = state_42315__$1;
(statearr_42336_42366[(2)] = inst_42301);

(statearr_42336_42366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (2))){
var state_42315__$1 = state_42315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42315__$1,(4),in$);
} else {
if((state_val_42316 === (23))){
var inst_42309 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
var statearr_42337_42367 = state_42315__$1;
(statearr_42337_42367[(2)] = inst_42309);

(statearr_42337_42367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (19))){
var inst_42296 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
var statearr_42338_42368 = state_42315__$1;
(statearr_42338_42368[(2)] = inst_42296);

(statearr_42338_42368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (11))){
var inst_42281 = (state_42315[(7)]);
var inst_42267 = (state_42315[(10)]);
var inst_42281__$1 = cljs.core.seq.call(null,inst_42267);
var state_42315__$1 = (function (){var statearr_42339 = state_42315;
(statearr_42339[(7)] = inst_42281__$1);

return statearr_42339;
})();
if(inst_42281__$1){
var statearr_42340_42369 = state_42315__$1;
(statearr_42340_42369[(1)] = (14));

} else {
var statearr_42341_42370 = state_42315__$1;
(statearr_42341_42370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (9))){
var inst_42303 = (state_42315[(2)]);
var inst_42304 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42315__$1 = (function (){var statearr_42342 = state_42315;
(statearr_42342[(15)] = inst_42303);

return statearr_42342;
})();
if(cljs.core.truth_(inst_42304)){
var statearr_42343_42371 = state_42315__$1;
(statearr_42343_42371[(1)] = (21));

} else {
var statearr_42344_42372 = state_42315__$1;
(statearr_42344_42372[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (5))){
var inst_42259 = cljs.core.async.close_BANG_.call(null,out);
var state_42315__$1 = state_42315;
var statearr_42345_42373 = state_42315__$1;
(statearr_42345_42373[(2)] = inst_42259);

(statearr_42345_42373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (14))){
var inst_42281 = (state_42315[(7)]);
var inst_42283 = cljs.core.chunked_seq_QMARK_.call(null,inst_42281);
var state_42315__$1 = state_42315;
if(inst_42283){
var statearr_42346_42374 = state_42315__$1;
(statearr_42346_42374[(1)] = (17));

} else {
var statearr_42347_42375 = state_42315__$1;
(statearr_42347_42375[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (16))){
var inst_42299 = (state_42315[(2)]);
var state_42315__$1 = state_42315;
var statearr_42348_42376 = state_42315__$1;
(statearr_42348_42376[(2)] = inst_42299);

(statearr_42348_42376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42316 === (10))){
var inst_42270 = (state_42315[(9)]);
var inst_42268 = (state_42315[(12)]);
var inst_42275 = cljs.core._nth.call(null,inst_42268,inst_42270);
var state_42315__$1 = state_42315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42315__$1,(13),out,inst_42275);
} else {
if((state_val_42316 === (18))){
var inst_42281 = (state_42315[(7)]);
var inst_42290 = cljs.core.first.call(null,inst_42281);
var state_42315__$1 = state_42315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42315__$1,(20),out,inst_42290);
} else {
if((state_val_42316 === (8))){
var inst_42269 = (state_42315[(8)]);
var inst_42270 = (state_42315[(9)]);
var inst_42272 = (inst_42270 < inst_42269);
var inst_42273 = inst_42272;
var state_42315__$1 = state_42315;
if(cljs.core.truth_(inst_42273)){
var statearr_42349_42377 = state_42315__$1;
(statearr_42349_42377[(1)] = (10));

} else {
var statearr_42350_42378 = state_42315__$1;
(statearr_42350_42378[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto__))
;
return ((function (switch__38678__auto__,c__38835__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____0 = (function (){
var statearr_42351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42351[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__);

(statearr_42351[(1)] = (1));

return statearr_42351;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____1 = (function (state_42315){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42352){if((e42352 instanceof Object)){
var ex__38682__auto__ = e42352;
var statearr_42353_42379 = state_42315;
(statearr_42353_42379[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42380 = state_42315;
state_42315 = G__42380;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__ = function(state_42315){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____1.call(this,state_42315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38679__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto__))
})();
var state__38837__auto__ = (function (){var statearr_42354 = f__38836__auto__.call(null);
(statearr_42354[(6)] = c__38835__auto__);

return statearr_42354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto__))
);

return c__38835__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42382 = arguments.length;
switch (G__42382) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42385 = arguments.length;
switch (G__42385) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42388 = arguments.length;
switch (G__42388) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42435,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42435,out){
return (function (state_42412){
var state_val_42413 = (state_42412[(1)]);
if((state_val_42413 === (7))){
var inst_42407 = (state_42412[(2)]);
var state_42412__$1 = state_42412;
var statearr_42414_42436 = state_42412__$1;
(statearr_42414_42436[(2)] = inst_42407);

(statearr_42414_42436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (1))){
var inst_42389 = null;
var state_42412__$1 = (function (){var statearr_42415 = state_42412;
(statearr_42415[(7)] = inst_42389);

return statearr_42415;
})();
var statearr_42416_42437 = state_42412__$1;
(statearr_42416_42437[(2)] = null);

(statearr_42416_42437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (4))){
var inst_42392 = (state_42412[(8)]);
var inst_42392__$1 = (state_42412[(2)]);
var inst_42393 = (inst_42392__$1 == null);
var inst_42394 = cljs.core.not.call(null,inst_42393);
var state_42412__$1 = (function (){var statearr_42417 = state_42412;
(statearr_42417[(8)] = inst_42392__$1);

return statearr_42417;
})();
if(inst_42394){
var statearr_42418_42438 = state_42412__$1;
(statearr_42418_42438[(1)] = (5));

} else {
var statearr_42419_42439 = state_42412__$1;
(statearr_42419_42439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (6))){
var state_42412__$1 = state_42412;
var statearr_42420_42440 = state_42412__$1;
(statearr_42420_42440[(2)] = null);

(statearr_42420_42440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (3))){
var inst_42409 = (state_42412[(2)]);
var inst_42410 = cljs.core.async.close_BANG_.call(null,out);
var state_42412__$1 = (function (){var statearr_42421 = state_42412;
(statearr_42421[(9)] = inst_42409);

return statearr_42421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42412__$1,inst_42410);
} else {
if((state_val_42413 === (2))){
var state_42412__$1 = state_42412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42412__$1,(4),ch);
} else {
if((state_val_42413 === (11))){
var inst_42392 = (state_42412[(8)]);
var inst_42401 = (state_42412[(2)]);
var inst_42389 = inst_42392;
var state_42412__$1 = (function (){var statearr_42422 = state_42412;
(statearr_42422[(7)] = inst_42389);

(statearr_42422[(10)] = inst_42401);

return statearr_42422;
})();
var statearr_42423_42441 = state_42412__$1;
(statearr_42423_42441[(2)] = null);

(statearr_42423_42441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (9))){
var inst_42392 = (state_42412[(8)]);
var state_42412__$1 = state_42412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42412__$1,(11),out,inst_42392);
} else {
if((state_val_42413 === (5))){
var inst_42389 = (state_42412[(7)]);
var inst_42392 = (state_42412[(8)]);
var inst_42396 = cljs.core._EQ_.call(null,inst_42392,inst_42389);
var state_42412__$1 = state_42412;
if(inst_42396){
var statearr_42425_42442 = state_42412__$1;
(statearr_42425_42442[(1)] = (8));

} else {
var statearr_42426_42443 = state_42412__$1;
(statearr_42426_42443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (10))){
var inst_42404 = (state_42412[(2)]);
var state_42412__$1 = state_42412;
var statearr_42427_42444 = state_42412__$1;
(statearr_42427_42444[(2)] = inst_42404);

(statearr_42427_42444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42413 === (8))){
var inst_42389 = (state_42412[(7)]);
var tmp42424 = inst_42389;
var inst_42389__$1 = tmp42424;
var state_42412__$1 = (function (){var statearr_42428 = state_42412;
(statearr_42428[(7)] = inst_42389__$1);

return statearr_42428;
})();
var statearr_42429_42445 = state_42412__$1;
(statearr_42429_42445[(2)] = null);

(statearr_42429_42445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42435,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42435,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42430[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42430[(1)] = (1));

return statearr_42430;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42412){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42431){if((e42431 instanceof Object)){
var ex__38682__auto__ = e42431;
var statearr_42432_42446 = state_42412;
(statearr_42432_42446[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42447 = state_42412;
state_42412 = G__42447;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42435,out))
})();
var state__38837__auto__ = (function (){var statearr_42433 = f__38836__auto__.call(null);
(statearr_42433[(6)] = c__38835__auto___42435);

return statearr_42433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42435,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42449 = arguments.length;
switch (G__42449) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42515,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42515,out){
return (function (state_42487){
var state_val_42488 = (state_42487[(1)]);
if((state_val_42488 === (7))){
var inst_42483 = (state_42487[(2)]);
var state_42487__$1 = state_42487;
var statearr_42489_42516 = state_42487__$1;
(statearr_42489_42516[(2)] = inst_42483);

(statearr_42489_42516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (1))){
var inst_42450 = (new Array(n));
var inst_42451 = inst_42450;
var inst_42452 = (0);
var state_42487__$1 = (function (){var statearr_42490 = state_42487;
(statearr_42490[(7)] = inst_42452);

(statearr_42490[(8)] = inst_42451);

return statearr_42490;
})();
var statearr_42491_42517 = state_42487__$1;
(statearr_42491_42517[(2)] = null);

(statearr_42491_42517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (4))){
var inst_42455 = (state_42487[(9)]);
var inst_42455__$1 = (state_42487[(2)]);
var inst_42456 = (inst_42455__$1 == null);
var inst_42457 = cljs.core.not.call(null,inst_42456);
var state_42487__$1 = (function (){var statearr_42492 = state_42487;
(statearr_42492[(9)] = inst_42455__$1);

return statearr_42492;
})();
if(inst_42457){
var statearr_42493_42518 = state_42487__$1;
(statearr_42493_42518[(1)] = (5));

} else {
var statearr_42494_42519 = state_42487__$1;
(statearr_42494_42519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (15))){
var inst_42477 = (state_42487[(2)]);
var state_42487__$1 = state_42487;
var statearr_42495_42520 = state_42487__$1;
(statearr_42495_42520[(2)] = inst_42477);

(statearr_42495_42520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (13))){
var state_42487__$1 = state_42487;
var statearr_42496_42521 = state_42487__$1;
(statearr_42496_42521[(2)] = null);

(statearr_42496_42521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (6))){
var inst_42452 = (state_42487[(7)]);
var inst_42473 = (inst_42452 > (0));
var state_42487__$1 = state_42487;
if(cljs.core.truth_(inst_42473)){
var statearr_42497_42522 = state_42487__$1;
(statearr_42497_42522[(1)] = (12));

} else {
var statearr_42498_42523 = state_42487__$1;
(statearr_42498_42523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (3))){
var inst_42485 = (state_42487[(2)]);
var state_42487__$1 = state_42487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42487__$1,inst_42485);
} else {
if((state_val_42488 === (12))){
var inst_42451 = (state_42487[(8)]);
var inst_42475 = cljs.core.vec.call(null,inst_42451);
var state_42487__$1 = state_42487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42487__$1,(15),out,inst_42475);
} else {
if((state_val_42488 === (2))){
var state_42487__$1 = state_42487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42487__$1,(4),ch);
} else {
if((state_val_42488 === (11))){
var inst_42467 = (state_42487[(2)]);
var inst_42468 = (new Array(n));
var inst_42451 = inst_42468;
var inst_42452 = (0);
var state_42487__$1 = (function (){var statearr_42499 = state_42487;
(statearr_42499[(7)] = inst_42452);

(statearr_42499[(10)] = inst_42467);

(statearr_42499[(8)] = inst_42451);

return statearr_42499;
})();
var statearr_42500_42524 = state_42487__$1;
(statearr_42500_42524[(2)] = null);

(statearr_42500_42524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (9))){
var inst_42451 = (state_42487[(8)]);
var inst_42465 = cljs.core.vec.call(null,inst_42451);
var state_42487__$1 = state_42487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42487__$1,(11),out,inst_42465);
} else {
if((state_val_42488 === (5))){
var inst_42452 = (state_42487[(7)]);
var inst_42455 = (state_42487[(9)]);
var inst_42460 = (state_42487[(11)]);
var inst_42451 = (state_42487[(8)]);
var inst_42459 = (inst_42451[inst_42452] = inst_42455);
var inst_42460__$1 = (inst_42452 + (1));
var inst_42461 = (inst_42460__$1 < n);
var state_42487__$1 = (function (){var statearr_42501 = state_42487;
(statearr_42501[(11)] = inst_42460__$1);

(statearr_42501[(12)] = inst_42459);

return statearr_42501;
})();
if(cljs.core.truth_(inst_42461)){
var statearr_42502_42525 = state_42487__$1;
(statearr_42502_42525[(1)] = (8));

} else {
var statearr_42503_42526 = state_42487__$1;
(statearr_42503_42526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (14))){
var inst_42480 = (state_42487[(2)]);
var inst_42481 = cljs.core.async.close_BANG_.call(null,out);
var state_42487__$1 = (function (){var statearr_42505 = state_42487;
(statearr_42505[(13)] = inst_42480);

return statearr_42505;
})();
var statearr_42506_42527 = state_42487__$1;
(statearr_42506_42527[(2)] = inst_42481);

(statearr_42506_42527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (10))){
var inst_42471 = (state_42487[(2)]);
var state_42487__$1 = state_42487;
var statearr_42507_42528 = state_42487__$1;
(statearr_42507_42528[(2)] = inst_42471);

(statearr_42507_42528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42488 === (8))){
var inst_42460 = (state_42487[(11)]);
var inst_42451 = (state_42487[(8)]);
var tmp42504 = inst_42451;
var inst_42451__$1 = tmp42504;
var inst_42452 = inst_42460;
var state_42487__$1 = (function (){var statearr_42508 = state_42487;
(statearr_42508[(7)] = inst_42452);

(statearr_42508[(8)] = inst_42451__$1);

return statearr_42508;
})();
var statearr_42509_42529 = state_42487__$1;
(statearr_42509_42529[(2)] = null);

(statearr_42509_42529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42515,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42515,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42510[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42510[(1)] = (1));

return statearr_42510;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42487){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42511){if((e42511 instanceof Object)){
var ex__38682__auto__ = e42511;
var statearr_42512_42530 = state_42487;
(statearr_42512_42530[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42531 = state_42487;
state_42487 = G__42531;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42515,out))
})();
var state__38837__auto__ = (function (){var statearr_42513 = f__38836__auto__.call(null);
(statearr_42513[(6)] = c__38835__auto___42515);

return statearr_42513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42515,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42533 = arguments.length;
switch (G__42533) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38835__auto___42603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38835__auto___42603,out){
return (function (){
var f__38836__auto__ = (function (){var switch__38678__auto__ = ((function (c__38835__auto___42603,out){
return (function (state_42575){
var state_val_42576 = (state_42575[(1)]);
if((state_val_42576 === (7))){
var inst_42571 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42577_42604 = state_42575__$1;
(statearr_42577_42604[(2)] = inst_42571);

(statearr_42577_42604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (1))){
var inst_42534 = [];
var inst_42535 = inst_42534;
var inst_42536 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42575__$1 = (function (){var statearr_42578 = state_42575;
(statearr_42578[(7)] = inst_42535);

(statearr_42578[(8)] = inst_42536);

return statearr_42578;
})();
var statearr_42579_42605 = state_42575__$1;
(statearr_42579_42605[(2)] = null);

(statearr_42579_42605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (4))){
var inst_42539 = (state_42575[(9)]);
var inst_42539__$1 = (state_42575[(2)]);
var inst_42540 = (inst_42539__$1 == null);
var inst_42541 = cljs.core.not.call(null,inst_42540);
var state_42575__$1 = (function (){var statearr_42580 = state_42575;
(statearr_42580[(9)] = inst_42539__$1);

return statearr_42580;
})();
if(inst_42541){
var statearr_42581_42606 = state_42575__$1;
(statearr_42581_42606[(1)] = (5));

} else {
var statearr_42582_42607 = state_42575__$1;
(statearr_42582_42607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (15))){
var inst_42565 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42583_42608 = state_42575__$1;
(statearr_42583_42608[(2)] = inst_42565);

(statearr_42583_42608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (13))){
var state_42575__$1 = state_42575;
var statearr_42584_42609 = state_42575__$1;
(statearr_42584_42609[(2)] = null);

(statearr_42584_42609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (6))){
var inst_42535 = (state_42575[(7)]);
var inst_42560 = inst_42535.length;
var inst_42561 = (inst_42560 > (0));
var state_42575__$1 = state_42575;
if(cljs.core.truth_(inst_42561)){
var statearr_42585_42610 = state_42575__$1;
(statearr_42585_42610[(1)] = (12));

} else {
var statearr_42586_42611 = state_42575__$1;
(statearr_42586_42611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (3))){
var inst_42573 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42575__$1,inst_42573);
} else {
if((state_val_42576 === (12))){
var inst_42535 = (state_42575[(7)]);
var inst_42563 = cljs.core.vec.call(null,inst_42535);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42575__$1,(15),out,inst_42563);
} else {
if((state_val_42576 === (2))){
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42575__$1,(4),ch);
} else {
if((state_val_42576 === (11))){
var inst_42539 = (state_42575[(9)]);
var inst_42543 = (state_42575[(10)]);
var inst_42553 = (state_42575[(2)]);
var inst_42554 = [];
var inst_42555 = inst_42554.push(inst_42539);
var inst_42535 = inst_42554;
var inst_42536 = inst_42543;
var state_42575__$1 = (function (){var statearr_42587 = state_42575;
(statearr_42587[(7)] = inst_42535);

(statearr_42587[(11)] = inst_42553);

(statearr_42587[(12)] = inst_42555);

(statearr_42587[(8)] = inst_42536);

return statearr_42587;
})();
var statearr_42588_42612 = state_42575__$1;
(statearr_42588_42612[(2)] = null);

(statearr_42588_42612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (9))){
var inst_42535 = (state_42575[(7)]);
var inst_42551 = cljs.core.vec.call(null,inst_42535);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42575__$1,(11),out,inst_42551);
} else {
if((state_val_42576 === (5))){
var inst_42539 = (state_42575[(9)]);
var inst_42536 = (state_42575[(8)]);
var inst_42543 = (state_42575[(10)]);
var inst_42543__$1 = f.call(null,inst_42539);
var inst_42544 = cljs.core._EQ_.call(null,inst_42543__$1,inst_42536);
var inst_42545 = cljs.core.keyword_identical_QMARK_.call(null,inst_42536,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42546 = ((inst_42544) || (inst_42545));
var state_42575__$1 = (function (){var statearr_42589 = state_42575;
(statearr_42589[(10)] = inst_42543__$1);

return statearr_42589;
})();
if(cljs.core.truth_(inst_42546)){
var statearr_42590_42613 = state_42575__$1;
(statearr_42590_42613[(1)] = (8));

} else {
var statearr_42591_42614 = state_42575__$1;
(statearr_42591_42614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (14))){
var inst_42568 = (state_42575[(2)]);
var inst_42569 = cljs.core.async.close_BANG_.call(null,out);
var state_42575__$1 = (function (){var statearr_42593 = state_42575;
(statearr_42593[(13)] = inst_42568);

return statearr_42593;
})();
var statearr_42594_42615 = state_42575__$1;
(statearr_42594_42615[(2)] = inst_42569);

(statearr_42594_42615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (10))){
var inst_42558 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42595_42616 = state_42575__$1;
(statearr_42595_42616[(2)] = inst_42558);

(statearr_42595_42616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (8))){
var inst_42539 = (state_42575[(9)]);
var inst_42535 = (state_42575[(7)]);
var inst_42543 = (state_42575[(10)]);
var inst_42548 = inst_42535.push(inst_42539);
var tmp42592 = inst_42535;
var inst_42535__$1 = tmp42592;
var inst_42536 = inst_42543;
var state_42575__$1 = (function (){var statearr_42596 = state_42575;
(statearr_42596[(7)] = inst_42535__$1);

(statearr_42596[(8)] = inst_42536);

(statearr_42596[(14)] = inst_42548);

return statearr_42596;
})();
var statearr_42597_42617 = state_42575__$1;
(statearr_42597_42617[(2)] = null);

(statearr_42597_42617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38835__auto___42603,out))
;
return ((function (switch__38678__auto__,c__38835__auto___42603,out){
return (function() {
var cljs$core$async$state_machine__38679__auto__ = null;
var cljs$core$async$state_machine__38679__auto____0 = (function (){
var statearr_42598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42598[(0)] = cljs$core$async$state_machine__38679__auto__);

(statearr_42598[(1)] = (1));

return statearr_42598;
});
var cljs$core$async$state_machine__38679__auto____1 = (function (state_42575){
while(true){
var ret_value__38680__auto__ = (function (){try{while(true){
var result__38681__auto__ = switch__38678__auto__.call(null,state_42575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38681__auto__;
}
break;
}
}catch (e42599){if((e42599 instanceof Object)){
var ex__38682__auto__ = e42599;
var statearr_42600_42618 = state_42575;
(statearr_42600_42618[(5)] = ex__38682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42619 = state_42575;
state_42575 = G__42619;
continue;
} else {
return ret_value__38680__auto__;
}
break;
}
});
cljs$core$async$state_machine__38679__auto__ = function(state_42575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38679__auto____1.call(this,state_42575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38679__auto____0;
cljs$core$async$state_machine__38679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38679__auto____1;
return cljs$core$async$state_machine__38679__auto__;
})()
;})(switch__38678__auto__,c__38835__auto___42603,out))
})();
var state__38837__auto__ = (function (){var statearr_42601 = f__38836__auto__.call(null);
(statearr_42601[(6)] = c__38835__auto___42603);

return statearr_42601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38837__auto__);
});})(c__38835__auto___42603,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525291342021
