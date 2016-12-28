// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__44750__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44751__i = 0, G__44751__a = new Array(arguments.length -  0);
while (G__44751__i < G__44751__a.length) {G__44751__a[G__44751__i] = arguments[G__44751__i + 0]; ++G__44751__i;}
  args = new cljs.core.IndexedSeq(G__44751__a,0);
} 
return G__44750__delegate.call(this,args);};
G__44750.cljs$lang$maxFixedArity = 0;
G__44750.cljs$lang$applyTo = (function (arglist__44752){
var args = cljs.core.seq(arglist__44752);
return G__44750__delegate(args);
});
G__44750.cljs$core$IFn$_invoke$arity$variadic = G__44750__delegate;
return G__44750;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44753__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44754__i = 0, G__44754__a = new Array(arguments.length -  0);
while (G__44754__i < G__44754__a.length) {G__44754__a[G__44754__i] = arguments[G__44754__i + 0]; ++G__44754__i;}
  args = new cljs.core.IndexedSeq(G__44754__a,0);
} 
return G__44753__delegate.call(this,args);};
G__44753.cljs$lang$maxFixedArity = 0;
G__44753.cljs$lang$applyTo = (function (arglist__44755){
var args = cljs.core.seq(arglist__44755);
return G__44753__delegate(args);
});
G__44753.cljs$core$IFn$_invoke$arity$variadic = G__44753__delegate;
return G__44753;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map