// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__44445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44446 = null;
var count__44447 = (0);
var i__44448 = (0);
while(true){
if((i__44448 < count__44447)){
var vec__44449 = cljs.core._nth.call(null,chunk__44446,i__44448);
var effect_k = cljs.core.nth.call(null,vec__44449,(0),null);
var value = cljs.core.nth.call(null,vec__44449,(1),null);
var temp__4655__auto___44455 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___44455)){
var effect_fn_44456 = temp__4655__auto___44455;
effect_fn_44456.call(null,value);
} else {
}

var G__44457 = seq__44445;
var G__44458 = chunk__44446;
var G__44459 = count__44447;
var G__44460 = (i__44448 + (1));
seq__44445 = G__44457;
chunk__44446 = G__44458;
count__44447 = G__44459;
i__44448 = G__44460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44445);
if(temp__4657__auto__){
var seq__44445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44445__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__44445__$1);
var G__44461 = cljs.core.chunk_rest.call(null,seq__44445__$1);
var G__44462 = c__25898__auto__;
var G__44463 = cljs.core.count.call(null,c__25898__auto__);
var G__44464 = (0);
seq__44445 = G__44461;
chunk__44446 = G__44462;
count__44447 = G__44463;
i__44448 = G__44464;
continue;
} else {
var vec__44452 = cljs.core.first.call(null,seq__44445__$1);
var effect_k = cljs.core.nth.call(null,vec__44452,(0),null);
var value = cljs.core.nth.call(null,vec__44452,(1),null);
var temp__4655__auto___44465 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___44465)){
var effect_fn_44466 = temp__4655__auto___44465;
effect_fn_44466.call(null,value);
} else {
}

var G__44467 = cljs.core.next.call(null,seq__44445__$1);
var G__44468 = null;
var G__44469 = (0);
var G__44470 = (0);
seq__44445 = G__44467;
chunk__44446 = G__44468;
count__44447 = G__44469;
i__44448 = G__44470;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__44471 = cljs.core.seq.call(null,value);
var chunk__44472 = null;
var count__44473 = (0);
var i__44474 = (0);
while(true){
if((i__44474 < count__44473)){
var map__44475 = cljs.core._nth.call(null,chunk__44472,i__44474);
var map__44475__$1 = ((((!((map__44475 == null)))?((((map__44475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44475):map__44475);
var effect = map__44475__$1;
var ms = cljs.core.get.call(null,map__44475__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44475__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44471,chunk__44472,count__44473,i__44474,map__44475,map__44475__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44471,chunk__44472,count__44473,i__44474,map__44475,map__44475__$1,effect,ms,dispatch))
,ms);
}

var G__44479 = seq__44471;
var G__44480 = chunk__44472;
var G__44481 = count__44473;
var G__44482 = (i__44474 + (1));
seq__44471 = G__44479;
chunk__44472 = G__44480;
count__44473 = G__44481;
i__44474 = G__44482;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44471);
if(temp__4657__auto__){
var seq__44471__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44471__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__44471__$1);
var G__44483 = cljs.core.chunk_rest.call(null,seq__44471__$1);
var G__44484 = c__25898__auto__;
var G__44485 = cljs.core.count.call(null,c__25898__auto__);
var G__44486 = (0);
seq__44471 = G__44483;
chunk__44472 = G__44484;
count__44473 = G__44485;
i__44474 = G__44486;
continue;
} else {
var map__44477 = cljs.core.first.call(null,seq__44471__$1);
var map__44477__$1 = ((((!((map__44477 == null)))?((((map__44477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44477):map__44477);
var effect = map__44477__$1;
var ms = cljs.core.get.call(null,map__44477__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44477__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44471,chunk__44472,count__44473,i__44474,map__44477,map__44477__$1,effect,ms,dispatch,seq__44471__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44471,chunk__44472,count__44473,i__44474,map__44477,map__44477__$1,effect,ms,dispatch,seq__44471__$1,temp__4657__auto__))
,ms);
}

var G__44487 = cljs.core.next.call(null,seq__44471__$1);
var G__44488 = null;
var G__44489 = (0);
var G__44490 = (0);
seq__44471 = G__44487;
chunk__44472 = G__44488;
count__44473 = G__44489;
i__44474 = G__44490;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__44491 = cljs.core.seq.call(null,value);
var chunk__44492 = null;
var count__44493 = (0);
var i__44494 = (0);
while(true){
if((i__44494 < count__44493)){
var event = cljs.core._nth.call(null,chunk__44492,i__44494);
re_frame.router.dispatch.call(null,event);

var G__44495 = seq__44491;
var G__44496 = chunk__44492;
var G__44497 = count__44493;
var G__44498 = (i__44494 + (1));
seq__44491 = G__44495;
chunk__44492 = G__44496;
count__44493 = G__44497;
i__44494 = G__44498;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44491);
if(temp__4657__auto__){
var seq__44491__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44491__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__44491__$1);
var G__44499 = cljs.core.chunk_rest.call(null,seq__44491__$1);
var G__44500 = c__25898__auto__;
var G__44501 = cljs.core.count.call(null,c__25898__auto__);
var G__44502 = (0);
seq__44491 = G__44499;
chunk__44492 = G__44500;
count__44493 = G__44501;
i__44494 = G__44502;
continue;
} else {
var event = cljs.core.first.call(null,seq__44491__$1);
re_frame.router.dispatch.call(null,event);

var G__44503 = cljs.core.next.call(null,seq__44491__$1);
var G__44504 = null;
var G__44505 = (0);
var G__44506 = (0);
seq__44491 = G__44503;
chunk__44492 = G__44504;
count__44493 = G__44505;
i__44494 = G__44506;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__44507 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__44508 = null;
var count__44509 = (0);
var i__44510 = (0);
while(true){
if((i__44510 < count__44509)){
var event = cljs.core._nth.call(null,chunk__44508,i__44510);
clear_event.call(null,event);

var G__44511 = seq__44507;
var G__44512 = chunk__44508;
var G__44513 = count__44509;
var G__44514 = (i__44510 + (1));
seq__44507 = G__44511;
chunk__44508 = G__44512;
count__44509 = G__44513;
i__44510 = G__44514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44507);
if(temp__4657__auto__){
var seq__44507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44507__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__44507__$1);
var G__44515 = cljs.core.chunk_rest.call(null,seq__44507__$1);
var G__44516 = c__25898__auto__;
var G__44517 = cljs.core.count.call(null,c__25898__auto__);
var G__44518 = (0);
seq__44507 = G__44515;
chunk__44508 = G__44516;
count__44509 = G__44517;
i__44510 = G__44518;
continue;
} else {
var event = cljs.core.first.call(null,seq__44507__$1);
clear_event.call(null,event);

var G__44519 = cljs.core.next.call(null,seq__44507__$1);
var G__44520 = null;
var G__44521 = (0);
var G__44522 = (0);
seq__44507 = G__44519;
chunk__44508 = G__44520;
count__44509 = G__44521;
i__44510 = G__44522;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map