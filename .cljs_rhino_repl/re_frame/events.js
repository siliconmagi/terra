// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__44525_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__44525_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___44526 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___44526)){
var not_i_44527 = temp__4657__auto___44526;
if(cljs.core.fn_QMARK_.call(null,not_i_44527)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_44527);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_44527);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_44542 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44543 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27398__auto___44556 = re_frame.interop.now.call(null);
var duration__27399__auto___44557 = (end__27398__auto___44556 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44544_44558 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44545_44559 = null;
var count__44546_44560 = (0);
var i__44547_44561 = (0);
while(true){
if((i__44547_44561 < count__44546_44560)){
var vec__44548_44562 = cljs.core._nth.call(null,chunk__44545_44559,i__44547_44561);
var k__27400__auto___44563 = cljs.core.nth.call(null,vec__44548_44562,(0),null);
var cb__27401__auto___44564 = cljs.core.nth.call(null,vec__44548_44562,(1),null);
try{cb__27401__auto___44564.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27399__auto___44557,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44551){if((e44551 instanceof java.lang.Exception)){
var e__27402__auto___44565 = e44551;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27400__auto___44563,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27402__auto___44565);
} else {
throw e44551;

}
}
var G__44566 = seq__44544_44558;
var G__44567 = chunk__44545_44559;
var G__44568 = count__44546_44560;
var G__44569 = (i__44547_44561 + (1));
seq__44544_44558 = G__44566;
chunk__44545_44559 = G__44567;
count__44546_44560 = G__44568;
i__44547_44561 = G__44569;
continue;
} else {
var temp__4657__auto___44570 = cljs.core.seq.call(null,seq__44544_44558);
if(temp__4657__auto___44570){
var seq__44544_44571__$1 = temp__4657__auto___44570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44544_44571__$1)){
var c__25898__auto___44572 = cljs.core.chunk_first.call(null,seq__44544_44571__$1);
var G__44573 = cljs.core.chunk_rest.call(null,seq__44544_44571__$1);
var G__44574 = c__25898__auto___44572;
var G__44575 = cljs.core.count.call(null,c__25898__auto___44572);
var G__44576 = (0);
seq__44544_44558 = G__44573;
chunk__44545_44559 = G__44574;
count__44546_44560 = G__44575;
i__44547_44561 = G__44576;
continue;
} else {
var vec__44552_44577 = cljs.core.first.call(null,seq__44544_44571__$1);
var k__27400__auto___44578 = cljs.core.nth.call(null,vec__44552_44577,(0),null);
var cb__27401__auto___44579 = cljs.core.nth.call(null,vec__44552_44577,(1),null);
try{cb__27401__auto___44579.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27399__auto___44557,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44555){if((e44555 instanceof java.lang.Exception)){
var e__27402__auto___44580 = e44555;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27400__auto___44578,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27402__auto___44580);
} else {
throw e44555;

}
}
var G__44581 = cljs.core.next.call(null,seq__44544_44571__$1);
var G__44582 = null;
var G__44583 = (0);
var G__44584 = (0);
seq__44544_44558 = G__44581;
chunk__44545_44559 = G__44582;
count__44546_44560 = G__44583;
i__44547_44561 = G__44584;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44543;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_44542;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map