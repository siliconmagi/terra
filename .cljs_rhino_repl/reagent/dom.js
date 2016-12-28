// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25087__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_44710 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_44710){
return (function (){
var _STAR_always_update_STAR_44711 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44711;
}});})(_STAR_always_update_STAR_44710))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44710;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args44712 = [];
var len__26162__auto___44715 = arguments.length;
var i__26163__auto___44716 = (0);
while(true){
if((i__26163__auto___44716 < len__26162__auto___44715)){
args44712.push((arguments[i__26163__auto___44716]));

var G__44717 = (i__26163__auto___44716 + (1));
i__26163__auto___44716 = G__44717;
continue;
} else {
}
break;
}

var G__44714 = args44712.length;
switch (G__44714) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44712.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__44723_44727 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__44724_44728 = null;
var count__44725_44729 = (0);
var i__44726_44730 = (0);
while(true){
if((i__44726_44730 < count__44725_44729)){
var v_44731 = cljs.core._nth.call(null,chunk__44724_44728,i__44726_44730);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44731);

var G__44732 = seq__44723_44727;
var G__44733 = chunk__44724_44728;
var G__44734 = count__44725_44729;
var G__44735 = (i__44726_44730 + (1));
seq__44723_44727 = G__44732;
chunk__44724_44728 = G__44733;
count__44725_44729 = G__44734;
i__44726_44730 = G__44735;
continue;
} else {
var temp__4657__auto___44736 = cljs.core.seq.call(null,seq__44723_44727);
if(temp__4657__auto___44736){
var seq__44723_44737__$1 = temp__4657__auto___44736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44723_44737__$1)){
var c__25898__auto___44738 = cljs.core.chunk_first.call(null,seq__44723_44737__$1);
var G__44739 = cljs.core.chunk_rest.call(null,seq__44723_44737__$1);
var G__44740 = c__25898__auto___44738;
var G__44741 = cljs.core.count.call(null,c__25898__auto___44738);
var G__44742 = (0);
seq__44723_44727 = G__44739;
chunk__44724_44728 = G__44740;
count__44725_44729 = G__44741;
i__44726_44730 = G__44742;
continue;
} else {
var v_44743 = cljs.core.first.call(null,seq__44723_44737__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44743);

var G__44744 = cljs.core.next.call(null,seq__44723_44737__$1);
var G__44745 = null;
var G__44746 = (0);
var G__44747 = (0);
seq__44723_44727 = G__44744;
chunk__44724_44728 = G__44745;
count__44725_44729 = G__44746;
i__44726_44730 = G__44747;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map