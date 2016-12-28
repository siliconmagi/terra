// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41938){
var map__41963 = p__41938;
var map__41963__$1 = ((((!((map__41963 == null)))?((((map__41963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41963):map__41963);
var m = map__41963__$1;
var n = cljs.core.get.call(null,map__41963__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41965_41987 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41966_41988 = null;
var count__41967_41989 = (0);
var i__41968_41990 = (0);
while(true){
if((i__41968_41990 < count__41967_41989)){
var f_41991 = cljs.core._nth.call(null,chunk__41966_41988,i__41968_41990);
cljs.core.println.call(null,"  ",f_41991);

var G__41992 = seq__41965_41987;
var G__41993 = chunk__41966_41988;
var G__41994 = count__41967_41989;
var G__41995 = (i__41968_41990 + (1));
seq__41965_41987 = G__41992;
chunk__41966_41988 = G__41993;
count__41967_41989 = G__41994;
i__41968_41990 = G__41995;
continue;
} else {
var temp__4657__auto___41996 = cljs.core.seq.call(null,seq__41965_41987);
if(temp__4657__auto___41996){
var seq__41965_41997__$1 = temp__4657__auto___41996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41965_41997__$1)){
var c__25898__auto___41998 = cljs.core.chunk_first.call(null,seq__41965_41997__$1);
var G__41999 = cljs.core.chunk_rest.call(null,seq__41965_41997__$1);
var G__42000 = c__25898__auto___41998;
var G__42001 = cljs.core.count.call(null,c__25898__auto___41998);
var G__42002 = (0);
seq__41965_41987 = G__41999;
chunk__41966_41988 = G__42000;
count__41967_41989 = G__42001;
i__41968_41990 = G__42002;
continue;
} else {
var f_42003 = cljs.core.first.call(null,seq__41965_41997__$1);
cljs.core.println.call(null,"  ",f_42003);

var G__42004 = cljs.core.next.call(null,seq__41965_41997__$1);
var G__42005 = null;
var G__42006 = (0);
var G__42007 = (0);
seq__41965_41987 = G__42004;
chunk__41966_41988 = G__42005;
count__41967_41989 = G__42006;
i__41968_41990 = G__42007;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42008 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42008);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42008)))?cljs.core.second.call(null,arglists_42008):arglists_42008));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41969_42009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41970_42010 = null;
var count__41971_42011 = (0);
var i__41972_42012 = (0);
while(true){
if((i__41972_42012 < count__41971_42011)){
var vec__41973_42013 = cljs.core._nth.call(null,chunk__41970_42010,i__41972_42012);
var name_42014 = cljs.core.nth.call(null,vec__41973_42013,(0),null);
var map__41976_42015 = cljs.core.nth.call(null,vec__41973_42013,(1),null);
var map__41976_42016__$1 = ((((!((map__41976_42015 == null)))?((((map__41976_42015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41976_42015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41976_42015):map__41976_42015);
var doc_42017 = cljs.core.get.call(null,map__41976_42016__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42018 = cljs.core.get.call(null,map__41976_42016__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42014);

cljs.core.println.call(null," ",arglists_42018);

if(cljs.core.truth_(doc_42017)){
cljs.core.println.call(null," ",doc_42017);
} else {
}

var G__42019 = seq__41969_42009;
var G__42020 = chunk__41970_42010;
var G__42021 = count__41971_42011;
var G__42022 = (i__41972_42012 + (1));
seq__41969_42009 = G__42019;
chunk__41970_42010 = G__42020;
count__41971_42011 = G__42021;
i__41972_42012 = G__42022;
continue;
} else {
var temp__4657__auto___42023 = cljs.core.seq.call(null,seq__41969_42009);
if(temp__4657__auto___42023){
var seq__41969_42024__$1 = temp__4657__auto___42023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41969_42024__$1)){
var c__25898__auto___42025 = cljs.core.chunk_first.call(null,seq__41969_42024__$1);
var G__42026 = cljs.core.chunk_rest.call(null,seq__41969_42024__$1);
var G__42027 = c__25898__auto___42025;
var G__42028 = cljs.core.count.call(null,c__25898__auto___42025);
var G__42029 = (0);
seq__41969_42009 = G__42026;
chunk__41970_42010 = G__42027;
count__41971_42011 = G__42028;
i__41972_42012 = G__42029;
continue;
} else {
var vec__41978_42030 = cljs.core.first.call(null,seq__41969_42024__$1);
var name_42031 = cljs.core.nth.call(null,vec__41978_42030,(0),null);
var map__41981_42032 = cljs.core.nth.call(null,vec__41978_42030,(1),null);
var map__41981_42033__$1 = ((((!((map__41981_42032 == null)))?((((map__41981_42032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41981_42032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41981_42032):map__41981_42032);
var doc_42034 = cljs.core.get.call(null,map__41981_42033__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42035 = cljs.core.get.call(null,map__41981_42033__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42031);

cljs.core.println.call(null," ",arglists_42035);

if(cljs.core.truth_(doc_42034)){
cljs.core.println.call(null," ",doc_42034);
} else {
}

var G__42036 = cljs.core.next.call(null,seq__41969_42024__$1);
var G__42037 = null;
var G__42038 = (0);
var G__42039 = (0);
seq__41969_42009 = G__42036;
chunk__41970_42010 = G__42037;
count__41971_42011 = G__42038;
i__41972_42012 = G__42039;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41983 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41984 = null;
var count__41985 = (0);
var i__41986 = (0);
while(true){
if((i__41986 < count__41985)){
var role = cljs.core._nth.call(null,chunk__41984,i__41986);
var temp__4657__auto___42040__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42040__$1)){
var spec_42041 = temp__4657__auto___42040__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42041));
} else {
}

var G__42042 = seq__41983;
var G__42043 = chunk__41984;
var G__42044 = count__41985;
var G__42045 = (i__41986 + (1));
seq__41983 = G__42042;
chunk__41984 = G__42043;
count__41985 = G__42044;
i__41986 = G__42045;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41983);
if(temp__4657__auto____$1){
var seq__41983__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41983__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__41983__$1);
var G__42046 = cljs.core.chunk_rest.call(null,seq__41983__$1);
var G__42047 = c__25898__auto__;
var G__42048 = cljs.core.count.call(null,c__25898__auto__);
var G__42049 = (0);
seq__41983 = G__42046;
chunk__41984 = G__42047;
count__41985 = G__42048;
i__41986 = G__42049;
continue;
} else {
var role = cljs.core.first.call(null,seq__41983__$1);
var temp__4657__auto___42050__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42050__$2)){
var spec_42051 = temp__4657__auto___42050__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42051));
} else {
}

var G__42052 = cljs.core.next.call(null,seq__41983__$1);
var G__42053 = null;
var G__42054 = (0);
var G__42055 = (0);
seq__41983 = G__42052;
chunk__41984 = G__42053;
count__41985 = G__42054;
i__41986 = G__42055;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map