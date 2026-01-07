(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Wd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _h={exports:{}},Po={};var kv;function gS(){if(kv)return Po;kv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Xv;function vS(){return Xv||(Xv=1,_h.exports=gS()),_h.exports}var be=vS(),yh={exports:{}},re={};var Wv;function _S(){if(Wv)return re;Wv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,x={};function _(P,et,Mt){this.props=P,this.context=et,this.refs=x,this.updater=Mt||E}_.prototype.isReactComponent={},_.prototype.setState=function(P,et){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,et,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=_.prototype;function R(P,et,Mt){this.props=P,this.context=et,this.refs=x,this.updater=Mt||E}var N=R.prototype=new L;N.constructor=R,T(N,_.prototype),N.isPureReactComponent=!0;var J=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(P,et,Mt){var q=Mt.ref;return{$$typeof:s,type:P,key:et,ref:q!==void 0?q:null,props:Mt}}function C(P,et){return D(P.type,et,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function ct(P){var et={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Mt){return et[Mt]})}var lt=/\/+/g;function ht(P,et){return typeof P=="object"&&P!==null&&P.key!=null?ct(""+P.key):et.toString(36)}function mt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(G,G):(P.status="pending",P.then(function(et){P.status==="pending"&&(P.status="fulfilled",P.value=et)},function(et){P.status==="pending"&&(P.status="rejected",P.reason=et)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,et,Mt,q,ft){var xt=typeof P;(xt==="undefined"||xt==="boolean")&&(P=null);var At=!1;if(P===null)At=!0;else switch(xt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(P.$$typeof){case s:case e:At=!0;break;case g:return At=P._init,U(At(P._payload),et,Mt,q,ft)}}if(At)return ft=ft(P),At=q===""?"."+ht(P,0):q,J(ft)?(Mt="",At!=null&&(Mt=At.replace(lt,"$&/")+"/"),U(ft,et,Mt,"",function(ie){return ie})):ft!=null&&(H(ft)&&(ft=C(ft,Mt+(ft.key==null||P&&P.key===ft.key?"":(""+ft.key).replace(lt,"$&/")+"/")+At)),et.push(ft)),1;At=0;var Ot=q===""?".":q+":";if(J(P))for(var Ht=0;Ht<P.length;Ht++)q=P[Ht],xt=Ot+ht(q,Ht),At+=U(q,et,Mt,xt,ft);else if(Ht=M(P),typeof Ht=="function")for(P=Ht.call(P),Ht=0;!(q=P.next()).done;)q=q.value,xt=Ot+ht(q,Ht++),At+=U(q,et,Mt,xt,ft);else if(xt==="object"){if(typeof P.then=="function")return U(mt(P),et,Mt,q,ft);throw et=String(P),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return At}function V(P,et,Mt){if(P==null)return P;var q=[],ft=0;return U(P,q,"","",function(xt){return et.call(Mt,xt,ft++)}),q}function F(P){if(P._status===-1){var et=P._result;et=et(),et.then(function(Mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=Mt)},function(Mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=Mt)}),P._status===-1&&(P._status=0,P._result=et)}if(P._status===1)return P._result.default;throw P._result}var gt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:V,forEach:function(P,et,Mt){V(P,function(){et.apply(this,arguments)},Mt)},count:function(P){var et=0;return V(P,function(){et++}),et},toArray:function(P){return V(P,function(et){return et})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return re.Activity=v,re.Children=Et,re.Component=_,re.Fragment=i,re.Profiler=l,re.PureComponent=R,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},re.cache=function(P){return function(){return P.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(P,et,Mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var q=T({},P.props),ft=P.key;if(et!=null)for(xt in et.key!==void 0&&(ft=""+et.key),et)!Z.call(et,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&et.ref===void 0||(q[xt]=et[xt]);var xt=arguments.length-2;if(xt===1)q.children=Mt;else if(1<xt){for(var At=Array(xt),Ot=0;Ot<xt;Ot++)At[Ot]=arguments[Ot+2];q.children=At}return D(P.type,ft,q)},re.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},re.createElement=function(P,et,Mt){var q,ft={},xt=null;if(et!=null)for(q in et.key!==void 0&&(xt=""+et.key),et)Z.call(et,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ft[q]=et[q]);var At=arguments.length-2;if(At===1)ft.children=Mt;else if(1<At){for(var Ot=Array(At),Ht=0;Ht<At;Ht++)Ot[Ht]=arguments[Ht+2];ft.children=Ot}if(P&&P.defaultProps)for(q in At=P.defaultProps,At)ft[q]===void 0&&(ft[q]=At[q]);return D(P,xt,ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(P){return{$$typeof:d,render:P}},re.isValidElement=H,re.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:F}},re.memo=function(P,et){return{$$typeof:m,type:P,compare:et===void 0?null:et}},re.startTransition=function(P){var et=z.T,Mt={};z.T=Mt;try{var q=P(),ft=z.S;ft!==null&&ft(Mt,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(G,gt)}catch(xt){gt(xt)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),z.T=et}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(P){return z.H.use(P)},re.useActionState=function(P,et,Mt){return z.H.useActionState(P,et,Mt)},re.useCallback=function(P,et){return z.H.useCallback(P,et)},re.useContext=function(P){return z.H.useContext(P)},re.useDebugValue=function(){},re.useDeferredValue=function(P,et){return z.H.useDeferredValue(P,et)},re.useEffect=function(P,et){return z.H.useEffect(P,et)},re.useEffectEvent=function(P){return z.H.useEffectEvent(P)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(P,et,Mt){return z.H.useImperativeHandle(P,et,Mt)},re.useInsertionEffect=function(P,et){return z.H.useInsertionEffect(P,et)},re.useLayoutEffect=function(P,et){return z.H.useLayoutEffect(P,et)},re.useMemo=function(P,et){return z.H.useMemo(P,et)},re.useOptimistic=function(P,et){return z.H.useOptimistic(P,et)},re.useReducer=function(P,et,Mt){return z.H.useReducer(P,et,Mt)},re.useRef=function(P){return z.H.useRef(P)},re.useState=function(P){return z.H.useState(P)},re.useSyncExternalStore=function(P,et,Mt){return z.H.useSyncExternalStore(P,et,Mt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.0",re}var qv;function qd(){return qv||(qv=1,yh.exports=_S()),yh.exports}var rt=qd();const yS=Wd(rt);var xh={exports:{}},zo={},Sh={exports:{}},Mh={};var Yv;function xS(){return Yv||(Yv=1,(function(s){function e(U,V){var F=U.length;U.push(V);t:for(;0<F;){var gt=F-1>>>1,Et=U[gt];if(0<l(Et,V))U[gt]=V,U[F]=Et,F=gt;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var V=U[0],F=U.pop();if(F!==V){U[0]=F;t:for(var gt=0,Et=U.length,P=Et>>>1;gt<P;){var et=2*(gt+1)-1,Mt=U[et],q=et+1,ft=U[q];if(0>l(Mt,F))q<Et&&0>l(ft,Mt)?(U[gt]=ft,U[q]=F,gt=q):(U[gt]=Mt,U[et]=F,gt=et);else if(q<Et&&0>l(ft,F))U[gt]=ft,U[q]=F,gt=q;else break t}}return V}function l(U,V){var F=U.sortIndex-V.sortIndex;return F!==0?F:U.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,y=3,M=!1,E=!1,T=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var V=i(m);V!==null;){if(V.callback===null)r(m);else if(V.startTime<=U)r(m),V.sortIndex=V.expirationTime,e(p,V);else break;V=i(m)}}function J(U){if(T=!1,N(U),!E)if(i(p)!==null)E=!0,G||(G=!0,ct());else{var V=i(m);V!==null&&mt(J,V.startTime-U)}}var G=!1,z=-1,Z=5,D=-1;function C(){return x?!0:!(s.unstable_now()-D<Z)}function H(){if(x=!1,G){var U=s.unstable_now();D=U;var V=!0;try{t:{E=!1,T&&(T=!1,L(z),z=-1),M=!0;var F=y;try{e:{for(N(U),v=i(p);v!==null&&!(v.expirationTime>U&&C());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,y=v.priorityLevel;var Et=gt(v.expirationTime<=U);if(U=s.unstable_now(),typeof Et=="function"){v.callback=Et,N(U),V=!0;break e}v===i(p)&&r(p),N(U)}else r(p);v=i(p)}if(v!==null)V=!0;else{var P=i(m);P!==null&&mt(J,P.startTime-U),V=!1}}break t}finally{v=null,y=F,M=!1}V=void 0}}finally{V?ct():G=!1}}}var ct;if(typeof R=="function")ct=function(){R(H)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ht=lt.port2;lt.port1.onmessage=H,ct=function(){ht.postMessage(null)}}else ct=function(){_(H,0)};function mt(U,V){z=_(function(){U(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(U){switch(y){case 1:case 2:case 3:var V=3;break;default:V=y}var F=y;y=V;try{return U()}finally{y=F}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var F=y;y=U;try{return V()}finally{y=F}},s.unstable_scheduleCallback=function(U,V,F){var gt=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?gt+F:gt):F=gt,U){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=F+Et,U={id:g++,callback:V,priorityLevel:U,startTime:F,expirationTime:Et,sortIndex:-1},F>gt?(U.sortIndex=F,e(m,U),i(p)===null&&U===i(m)&&(T?(L(z),z=-1):T=!0,mt(J,F-gt))):(U.sortIndex=Et,e(p,U),E||M||(E=!0,G||(G=!0,ct()))),U},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(U){var V=y;return function(){var F=y;y=V;try{return U.apply(this,arguments)}finally{y=F}}}})(Mh)),Mh}var jv;function SS(){return jv||(jv=1,Sh.exports=xS()),Sh.exports}var Eh={exports:{}},bn={};var Zv;function MS(){if(Zv)return bn;Zv=1;var s=qd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},bn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},bn.requestFormReset=function(p){r.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.0",bn}var Kv;function ES(){if(Kv)return Eh.exports;Kv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eh.exports=MS(),Eh.exports}var Qv;function TS(){if(Qv)return zo;Qv=1;var s=SS(),e=qd(),i=ES();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===o)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,o=f;break}if(b===o){S=!0,o=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=c;break}if(b===o){S=!0,o=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case R:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var mt=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},gt=[],Et=-1;function P(t){return{current:t}}function et(t){0>Et||(t.current=gt[Et],gt[Et]=null,Et--)}function Mt(t,n){Et++,gt[Et]=t.current,t.current=n}var q=P(null),ft=P(null),xt=P(null),At=P(null);function Ot(t,n){switch(Mt(xt,n),Mt(ft,t),Mt(q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hv(n),t=dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(q),Mt(q,t)}function Ht(){et(q),et(ft),et(xt)}function ie(t){t.memoizedState!==null&&Mt(At,t);var n=q.current,a=dv(n,t.type);n!==a&&(Mt(ft,t),Mt(q,a))}function xe(t){ft.current===t&&(et(q),et(ft)),At.current===t&&(et(At),Uo._currentValue=F)}var k,Ne;function oe(t){if(k===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);k=n&&n[1]||"",Ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+t+Ne}var me=!1;function Vt(t,n){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var nt=ut}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(ut){nt=ut}t.call(yt.prototype)}}else{try{throw Error()}catch(ut){nt=ut}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&nt&&typeof ut.stack=="string")return[ut.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var I=S.split(`
`),tt=b.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===tt.length)for(o=I.length-1,c=tt.length-1;1<=o&&0<=c&&I[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==tt[c]){var pt=`
`+I[o].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=o&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?oe(a):""}function Oe(t,n){switch(t.tag){case 26:case 27:case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return t.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return Vt(t.type,!1);case 11:return Vt(t.type.render,!1);case 1:return Vt(t.type,!0);case 31:return oe("Activity");default:return""}}function jt(t){try{var n="",a=null;do n+=Oe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,B=s.unstable_scheduleCallback,A=s.unstable_cancelCallback,st=s.unstable_shouldYield,dt=s.unstable_requestPaint,O=s.unstable_now,Q=s.unstable_getCurrentPriorityLevel,bt=s.unstable_ImmediatePriority,Tt=s.unstable_UserBlockingPriority,wt=s.unstable_NormalPriority,Zt=s.unstable_LowPriority,Ct=s.unstable_IdlePriority,zt=s.log,kt=s.unstable_setDisableYieldValue,Nt=null,Rt=null;function Yt(t){if(typeof zt=="function"&&kt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Nt,t)}catch{}}var Qt=Math.clz32?Math.clz32:Ut,He=Math.log,W=Math.LN2;function Ut(t){return t>>>=0,t===0?32:31-(He(t)/W|0)|0}var _t=256,St=262144,Lt=4194304;function Jt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=Jt(o):(S&=b,S!==0?c=Jt(S):a||(a=b&~t,a!==0&&(c=Jt(a))))):(b=o&~f,b!==0?c=Jt(b):S!==0?c=Jt(S):a||(a=o&~t,a!==0&&(c=Jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ln(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),t}function Wn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function al(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Qt(a),yt=1<<pt;b[pt]=0,I[pt]=-1;var nt=tt[pt];if(nt!==null)for(tt[pt]=null,pt=0;pt<nt.length;pt++){var ut=nt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&Ti(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Ti(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Qt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function wr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Qt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Gs(t,n){var a=n&-n;return a=(a&42)!==0?1:Dr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Dr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vs(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:zv(t.type))}function Ja(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var hi=Math.random().toString(36).slice(2),tn="__reactFiber$"+hi,Sn="__reactProps$"+hi,ma="__reactContainer$"+hi,ks="__reactEvents$"+hi,w="__reactListeners$"+hi,Y="__reactHandles$"+hi,it="__reactResources$"+hi,at="__reactMarker$"+hi;function K(t){delete t[tn],delete t[Sn],delete t[ks],delete t[w],delete t[Y]}function Dt(t){var n=t[tn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ma]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xv(t);t!==null;){if(a=t[tn])return a;t=xv(t)}return n}t=a,a=t.parentNode}return null}function Pt(t){if(t=t[tn]||t[ma]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function It(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ft(t){var n=t[it];return n||(n=t[it]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Gt(t){t[at]=!0}var ne=new Set,te={};function he(t,n){De(t,n),De(t+"Capture",n)}function De(t,n){for(te[t]=n,t=0;t<n.length;t++)ne.add(n[t])}var Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mn={},Me={};function Kt(t){return qt.call(Me,t)?!0:qt.call(Mn,t)?!1:Xe.test(t)?Me[t]=!0:(Mn[t]=!0,!1)}function je(t,n,a){if(Kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function _e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function En(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xs(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=En(t)?"checked":"value";t._valueTracker=Xs(t,n,""+t[n])}}function di(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=En(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nn=/[\n"\\]/g;function Tn(t){return t.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ws(t,n,a,o,c,f,S,b){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?hc(t,S,un(n)):a!=null?hc(t,S,un(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+un(b):t.removeAttribute("name")}function qs(t,n,a,o,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),We(t)}function hc(t,n,a){n==="number"&&ga(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ur(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function op(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function lp(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(mt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),We(t)}function Lr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var fy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||fy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function cp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&up(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&up(t,f,n[f])}function dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return dy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var pc=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nr=null,Or=null;function fp(t){var n=Pt(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ws(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Ws(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&di(o)}break t;case"textarea":op(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ur(t,!!a.multiple,n,!1)}}}var gc=!1;function hp(t,n,a){if(gc)return t(n,a);gc=!0;try{var o=t(n);return o}finally{if(gc=!1,(Nr!==null||Or!==null)&&(ql(),Nr&&(n=Nr,t=Or,Or=Nr=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function Ys(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(zi)try{var js={};Object.defineProperty(js,"passive",{get:function(){vc=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{vc=!1}var va=null,_c=null,sl=null;function dp(){if(sl)return sl;var t,n=_c,a=n.length,o,c="value"in va?va.value:va.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return sl=c.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function pp(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:pp,this.isPropagationStopped=pp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=On($a),Zs=v({},$a,{view:0,detail:0}),py=On(Zs),yc,xc,Ks,cl=v({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(yc=t.screenX-Ks.screenX,xc=t.screenY-Ks.screenY):xc=yc=0,Ks=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),mp=On(cl),my=v({},cl,{dataTransfer:0}),gy=On(my),vy=v({},Zs,{relatedTarget:0}),Sc=On(vy),_y=v({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=On(_y),xy=v({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sy=On(xy),My=v({},$a,{data:0}),gp=On(My),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=by[t])?!!n[t]:!1}function Mc(){return Ay}var Ry=v({},Zs,{key:function(t){if(t.key){var n=Ey[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cy=On(Ry),wy=v({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=On(wy),Dy=v({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Uy=On(Dy),Ly=v({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=On(Ly),Oy=v({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=On(Oy),zy=v({},$a,{newState:0,oldState:0}),By=On(zy),Iy=[9,13,27,32],Ec=zi&&"CompositionEvent"in window,Qs=null;zi&&"documentMode"in document&&(Qs=document.documentMode);var Fy=zi&&"TextEvent"in window&&!Qs,_p=zi&&(!Ec||Qs&&8<Qs&&11>=Qs),yp=" ",xp=!1;function Sp(t,n){switch(t){case"keyup":return Iy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function Hy(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(xp=!0,yp);case"textInput":return t=n.data,t===yp&&xp?null:t;default:return null}}function Gy(t,n){if(Pr)return t==="compositionend"||!Ec&&Sp(t,n)?(t=dp(),sl=_c=va=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _p&&n.locale!=="ko"?null:n.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Vy[t.type]:n==="textarea"}function Tp(t,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=$l(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Js=null,$s=null;function ky(t){sv(t,0)}function fl(t){var n=It(t);if(di(n))return t}function bp(t,n){if(t==="change")return n}var Ap=!1;if(zi){var Tc;if(zi){var bc="oninput"in document;if(!bc){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),bc=typeof Rp.oninput=="function"}Tc=bc}else Tc=!1;Ap=Tc&&(!document.documentMode||9<document.documentMode)}function Cp(){Js&&(Js.detachEvent("onpropertychange",wp),$s=Js=null)}function wp(t){if(t.propertyName==="value"&&fl($s)){var n=[];Tp(n,$s,t,mc(t)),hp(ky,n)}}function Xy(t,n,a){t==="focusin"?(Cp(),Js=n,$s=a,Js.attachEvent("onpropertychange",wp)):t==="focusout"&&Cp()}function Wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl($s)}function qy(t,n){if(t==="click")return fl(n)}function Yy(t,n){if(t==="input"||t==="change")return fl(n)}function jy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:jy;function to(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!qt.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ga(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ga(t.document)}return n}function Ac(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zy=zi&&"documentMode"in document&&11>=document.documentMode,zr=null,Rc=null,eo=null,Cc=!1;function Op(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||zr==null||zr!==ga(o)||(o=zr,"selectionStart"in o&&Ac(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=$l(Rc,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=zr)))}function tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},wc={},Pp={};zi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function er(t){if(wc[t])return wc[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return wc[t]=n[a];return t}var zp=er("animationend"),Bp=er("animationiteration"),Ip=er("animationstart"),Ky=er("transitionrun"),Qy=er("transitionstart"),Jy=er("transitioncancel"),Fp=er("transitionend"),Hp=new Map,Dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dc.push("scrollEnd");function pi(t,n){Hp.set(t,n),he(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Ir=0,Uc=0;function dl(){for(var t=Ir,n=Uc=Ir=0;n<t;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Gp(a,c,f)}}function pl(t,n,a,o){ei[Ir++]=t,ei[Ir++]=n,ei[Ir++]=a,ei[Ir++]=o,Uc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lc(t,n,a,o){return pl(t,n,a,o),ml(t)}function nr(t,n){return pl(t,null,null,n),ml(t)}function Gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Qt(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<To)throw To=0,Vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Fr={};function $y(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new $y(t,n,a,o)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")Nc(t)&&(S=1);else if(typeof t=="string")S=aS(t,a,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Yn(31,a,n,c),t.elementType=D,t.lanes=f,t;case T:return ir(a.children,c,f,n);case x:S=8,c|=24;break;case _:return t=Yn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case J:return t=Yn(13,a,n,c),t.elementType=J,t.lanes=f,t;case G:return t=Yn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:S=10;break t;case L:S=9;break t;case N:S=11;break t;case z:S=14;break t;case Z:S=16,o=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Yn(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ir(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function Oc(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function kp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Pc(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:jt(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:jt(n)}}var Hr=[],Gr=0,vl=null,no=0,ii=[],ai=0,_a=null,bi=1,Ai="";function Ii(t,n){Hr[Gr++]=no,Hr[Gr++]=vl,vl=t,no=n}function Wp(t,n,a){ii[ai++]=bi,ii[ai++]=Ai,ii[ai++]=_a,_a=t;var o=bi;t=Ai;var c=32-Qt(o)-1;o&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,bi=1<<32-Qt(n)+c|a<<c|o,Ai=f+t}else bi=1<<f|a<<c|o,Ai=t}function zc(t){t.return!==null&&(Ii(t,1),Wp(t,1,0))}function Bc(t){for(;t===vl;)vl=Hr[--Gr],Hr[Gr]=null,no=Hr[--Gr],Hr[Gr]=null;for(;t===_a;)_a=ii[--ai],ii[ai]=null,Ai=ii[--ai],ii[ai]=null,bi=ii[--ai],ii[ai]=null}function qp(t,n){ii[ai++]=bi,ii[ai++]=Ai,ii[ai++]=_a,bi=n.id,Ai=n.overflow,_a=t}var gn=null,Ge=null,ye=!1,ya=null,ri=!1,Ic=Error(r(519));function xa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ni(n,t)),Ic}function Yp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[tn]=t,n[Sn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)pe(Ao[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),qs(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),lp(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||cv(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||xa(t,!0)}function jp(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:gn=gn.return}}function Vr(t){if(t!==gn)return!1;if(!ye)return jp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ih(t.type,t.memoizedProps)),a=!a),a&&Ge&&xa(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=yv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=yv(t)}else n===27?(n=Ge,Oa(t.type)?(t=lh,lh=null,Ge=t):Ge=n):Ge=gn?oi(t.stateNode.nextSibling):null;return!0}function ar(){Ge=gn=null,ye=!1}function Fc(){var t=ya;return t!==null&&(In===null?In=t:In.push.apply(In,t),ya=null),t}function io(t){ya===null?ya=[t]:ya.push(t)}var Hc=P(null),rr=null,Fi=null;function Sa(t,n,a){Mt(Hc,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=Hc.current,et(Hc)}function Gc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Gc(f.return,a,t),o||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Gc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function kr(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;qn(c.pendingProps.value,S.value)||(t!==null?t.push(b):t=[b])}}else if(c===At.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}c=c.return}t!==null&&Vc(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return Zp(rr,t)}function yl(t,n){return rr===null&&sr(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ex=s.unstable_scheduleCallback,nx=s.unstable_NormalPriority,en={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new tx,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&ex(nx,function(){t.controller.abort()})}var ro=null,Xc=0,Xr=0,Wr=null;function ix(t,n){if(ro===null){var a=ro=[];Xc=0,Xr=jf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xc++,n.then(Kp,Kp),n}function Kp(){if(--Xc===0&&ro!==null){Wr!==null&&(Wr.status="fulfilled");var t=ro;ro=null,Xr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ax(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Qp=U.S;U.S=function(t,n){Og=O(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(t,n),Qp!==null&&Qp(t,n)};var or=P(null);function Wc(){var t=or.current;return t!==null?t:Ie.pooledCache}function xl(t,n){n===null?Mt(or,or.current):Mt(or,n.pool)}function Jp(){var t=Wc();return t===null?null:{parent:en._currentValue,pool:t}}var qr=Error(r(460)),qc=Error(r(474)),Sl=Error(r(542)),Ml={then:function(){}};function $p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Ie,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t}throw ur=n,qr}}function lr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ur=a,qr):a}}var ur=null;function em(){if(ur===null)throw Error(r(459));var t=ur;return ur=null,t}function nm(t){if(t===qr||t===Sl)throw Error(r(483))}var Yr=null,so=0;function El(t){var n=so;return so+=1,Yr===null&&(Yr=[]),tm(Yr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function im(t){function n(j,X){if(t){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Bi(j,X),j.index=0,j.sibling=null,j}function f(j,X,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,X,$,vt){return X===null||X.tag!==6?(X=Oc($,j.mode,vt),X.return=j,X):(X=c(X,$),X.return=j,X)}function I(j,X,$,vt){var $t=$.type;return $t===T?pt(j,X,$.props.children,vt,$.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Z&&lr($t)===X.type)?(X=c(X,$.props),oo(X,$),X.return=j,X):(X=gl($.type,$.key,$.props,null,j.mode,vt),oo(X,$),X.return=j,X)}function tt(j,X,$,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Pc($,j.mode,vt),X.return=j,X):(X=c(X,$.children||[]),X.return=j,X)}function pt(j,X,$,vt,$t){return X===null||X.tag!==7?(X=ir($,j.mode,vt,$t),X.return=j,X):(X=c(X,$),X.return=j,X)}function yt(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Oc(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return $=gl(X.type,X.key,X.props,null,j.mode,$),oo($,X),$.return=j,$;case E:return X=Pc(X,j.mode,$),X.return=j,X;case Z:return X=lr(X),yt(j,X,$)}if(mt(X)||ct(X))return X=ir(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return yt(j,El(X),$);if(X.$$typeof===R)return yt(j,yl(j,X),$);Tl(j,X)}return null}function nt(j,X,$,vt){var $t=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:b(j,X,""+$,vt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===$t?I(j,X,$,vt):null;case E:return $.key===$t?tt(j,X,$,vt):null;case Z:return $=lr($),nt(j,X,$,vt)}if(mt($)||ct($))return $t!==null?null:pt(j,X,$,vt,null);if(typeof $.then=="function")return nt(j,X,El($),vt);if($.$$typeof===R)return nt(j,X,yl(j,$),vt);Tl(j,$)}return null}function ut(j,X,$,vt,$t){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get($)||null,b(X,j,""+vt,$t);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case M:return j=j.get(vt.key===null?$:vt.key)||null,I(X,j,vt,$t);case E:return j=j.get(vt.key===null?$:vt.key)||null,tt(X,j,vt,$t);case Z:return vt=lr(vt),ut(j,X,$,vt,$t)}if(mt(vt)||ct(vt))return j=j.get($)||null,pt(X,j,vt,$t,null);if(typeof vt.then=="function")return ut(j,X,$,El(vt),$t);if(vt.$$typeof===R)return ut(j,X,$,yl(X,vt),$t);Tl(X,vt)}return null}function Xt(j,X,$,vt){for(var $t=null,Ee=null,Wt=X,le=X=0,ve=null;Wt!==null&&le<$.length;le++){Wt.index>le?(ve=Wt,Wt=null):ve=Wt.sibling;var Te=nt(j,Wt,$[le],vt);if(Te===null){Wt===null&&(Wt=ve);break}t&&Wt&&Te.alternate===null&&n(j,Wt),X=f(Te,X,le),Ee===null?$t=Te:Ee.sibling=Te,Ee=Te,Wt=ve}if(le===$.length)return a(j,Wt),ye&&Ii(j,le),$t;if(Wt===null){for(;le<$.length;le++)Wt=yt(j,$[le],vt),Wt!==null&&(X=f(Wt,X,le),Ee===null?$t=Wt:Ee.sibling=Wt,Ee=Wt);return ye&&Ii(j,le),$t}for(Wt=o(Wt);le<$.length;le++)ve=ut(Wt,j,le,$[le],vt),ve!==null&&(t&&ve.alternate!==null&&Wt.delete(ve.key===null?le:ve.key),X=f(ve,X,le),Ee===null?$t=ve:Ee.sibling=ve,Ee=ve);return t&&Wt.forEach(function(Fa){return n(j,Fa)}),ye&&Ii(j,le),$t}function ee(j,X,$,vt){if($==null)throw Error(r(151));for(var $t=null,Ee=null,Wt=X,le=X=0,ve=null,Te=$.next();Wt!==null&&!Te.done;le++,Te=$.next()){Wt.index>le?(ve=Wt,Wt=null):ve=Wt.sibling;var Fa=nt(j,Wt,Te.value,vt);if(Fa===null){Wt===null&&(Wt=ve);break}t&&Wt&&Fa.alternate===null&&n(j,Wt),X=f(Fa,X,le),Ee===null?$t=Fa:Ee.sibling=Fa,Ee=Fa,Wt=ve}if(Te.done)return a(j,Wt),ye&&Ii(j,le),$t;if(Wt===null){for(;!Te.done;le++,Te=$.next())Te=yt(j,Te.value,vt),Te!==null&&(X=f(Te,X,le),Ee===null?$t=Te:Ee.sibling=Te,Ee=Te);return ye&&Ii(j,le),$t}for(Wt=o(Wt);!Te.done;le++,Te=$.next())Te=ut(Wt,j,le,Te.value,vt),Te!==null&&(t&&Te.alternate!==null&&Wt.delete(Te.key===null?le:Te.key),X=f(Te,X,le),Ee===null?$t=Te:Ee.sibling=Te,Ee=Te);return t&&Wt.forEach(function(mS){return n(j,mS)}),ye&&Ii(j,le),$t}function Be(j,X,$,vt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var $t=$.key;X!==null;){if(X.key===$t){if($t=$.type,$t===T){if(X.tag===7){a(j,X.sibling),vt=c(X,$.props.children),vt.return=j,j=vt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Z&&lr($t)===X.type){a(j,X.sibling),vt=c(X,$.props),oo(vt,$),vt.return=j,j=vt;break t}a(j,X);break}else n(j,X);X=X.sibling}$.type===T?(vt=ir($.props.children,j.mode,vt,$.key),vt.return=j,j=vt):(vt=gl($.type,$.key,$.props,null,j.mode,vt),oo(vt,$),vt.return=j,j=vt)}return S(j);case E:t:{for($t=$.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(j,X.sibling),vt=c(X,$.children||[]),vt.return=j,j=vt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}vt=Pc($,j.mode,vt),vt.return=j,j=vt}return S(j);case Z:return $=lr($),Be(j,X,$,vt)}if(mt($))return Xt(j,X,$,vt);if(ct($)){if($t=ct($),typeof $t!="function")throw Error(r(150));return $=$t.call($),ee(j,X,$,vt)}if(typeof $.then=="function")return Be(j,X,El($),vt);if($.$$typeof===R)return Be(j,X,yl(j,$),vt);Tl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(j,X.sibling),vt=c(X,$),vt.return=j,j=vt):(a(j,X),vt=Oc($,j.mode,vt),vt.return=j,j=vt),S(j)):a(j,X)}return function(j,X,$,vt){try{so=0;var $t=Be(j,X,$,vt);return Yr=null,$t}catch(Wt){if(Wt===qr||Wt===Sl)throw Wt;var Ee=Yn(29,Wt,null,j.mode);return Ee.lanes=vt,Ee.return=j,Ee}finally{}}}var cr=im(!0),am=im(!1),Ma=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(t),Gp(t,null,a),n}return pl(t,o,n,a),ml(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,wr(t,a)}}function Zc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Kc=!1;function uo(){if(Kc){var t=Wr;if(t!==null)throw t}}function co(t,n,a,o){Kc=!1;var c=t.updateQueue;Ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,tt=I.next;I.next=null,S===null?f=tt:S.next=tt,S=I;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==S&&(b===null?pt.firstBaseUpdate=tt:b.next=tt,pt.lastBaseUpdate=I))}if(f!==null){var yt=c.baseState;S=0,pt=tt=I=null,b=f;do{var nt=b.lane&-536870913,ut=nt!==b.lane;if(ut?(ge&nt)===nt:(o&nt)===nt){nt!==0&&nt===Xr&&(Kc=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Xt=t,ee=b;nt=n;var Be=a;switch(ee.tag){case 1:if(Xt=ee.payload,typeof Xt=="function"){yt=Xt.call(Be,yt,nt);break t}yt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ee.payload,nt=typeof Xt=="function"?Xt.call(Be,yt,nt):Xt,nt==null)break t;yt=v({},yt,nt);break t;case 2:Ma=!0}}nt=b.callback,nt!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[nt]:ut.push(nt))}else ut={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(tt=pt=ut,I=yt):pt=pt.next=ut,S|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);pt===null&&(I=yt),c.baseState=I,c.firstBaseUpdate=tt,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),wa|=S,t.lanes=S,t.memoizedState=yt}}function rm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rm(a[t],n)}var jr=P(null),bl=P(0);function om(t,n){t=Zi,Mt(bl,t),Mt(jr,n),Zi=t|n.baseLanes}function Qc(){Mt(bl,Zi),Mt(jr,jr.current)}function Jc(){Zi=bl.current,et(jr),et(bl)}var jn=P(null),si=null;function ba(t){var n=t.alternate;Mt(Je,Je.current&1),Mt(jn,t),si===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(si=t)}function $c(t){Mt(Je,Je.current),Mt(jn,t),si===null&&(si=t)}function lm(t){t.tag===22?(Mt(Je,Je.current),Mt(jn,t),si===null&&(si=t)):Aa()}function Aa(){Mt(Je,Je.current),Mt(jn,jn.current)}function Zn(t){et(jn),si===t&&(si=null),et(Je)}var Je=P(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,se=null,Pe=null,nn=null,Rl=!1,Zr=!1,fr=!1,Cl=0,fo=0,Kr=null,rx=0;function Ze(){throw Error(r(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function ef(t,n,a,o,c,f){return Gi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?Wm:vf,fr=!1,f=a(o,c),fr=!1,Zr&&(f=cm(n,a,o,c)),um(t),f}function um(t){U.H=mo;var n=Pe!==null&&Pe.next!==null;if(Gi=0,nn=Pe=se=null,Rl=!1,fo=0,Kr=null,n)throw Error(r(300));t===null||an||(t=t.dependencies,t!==null&&_l(t)&&(an=!0))}function cm(t,n,a,o){se=t;var c=0;do{if(Zr&&(Kr=null),fo=0,Zr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=qm,f=n(a,o)}while(Zr);return f}function sx(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(se.flags|=1024),n}function nf(){var t=Cl!==0;return Cl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}Gi=0,nn=Pe=se=null,Zr=!1,fo=Cl=0,Kr=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?se.memoizedState=nn=t:nn=nn.next=t,nn}function $e(){if(Pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=nn===null?se.memoizedState:nn.next;if(n!==null)nn=n,Pe=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?se.memoizedState=nn=t:nn=nn.next=t}return nn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,Kr===null&&(Kr=[]),t=tm(Kr,t,n),n=se,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Wm:vf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===R)return vn(t)}throw Error(r(438,String(t)))}function sf(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=$e();return of(n,Pe,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=S=null,I=null,tt=n,pt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(ge&yt)===yt:(Gi&yt)===yt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===Xr&&(pt=!0);else if((Gi&nt)===nt){tt=tt.next,nt===Xr&&(pt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=yt,S=f):I=I.next=yt,se.lanes|=nt,wa|=nt;yt=tt.action,fr&&a(f,yt),f=tt.hasEagerState?tt.eagerState:a(f,yt)}else nt={lane:yt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=nt,S=f):I=I.next=nt,se.lanes|=yt,wa|=yt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?S=f:I.next=b,!qn(f,t.memoizedState)&&(an=!0,pt&&(a=Wr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);qn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function fm(t,n,a){var o=se,c=$e(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Pe||c).memoizedState,a);if(S&&(c.memoizedState=a,an=!0),c=c.queue,ff(pm.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Qr(9,{destroy:void 0},dm.bind(null,o,c,a,n),null),Ie===null)throw Error(r(349));f||(Gi&127)!==0||hm(o,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=wl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function dm(t,n,a,o){n.value=a,n.getSnapshot=o,mm(n)&&gm(t)}function pm(t,n,a){return a(function(){mm(n)&&gm(t)})}function mm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function gm(t){var n=nr(t,2);n!==null&&Fn(n,t,2)}function uf(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),fr){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function vm(t,n,a,o){return t.baseState=a,of(t,Pe,typeof o=="function"?o:Vi)}function ox(t,n,a,o,c){if(Ol(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_m(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _m(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=U.T,S={};U.T=S;try{var b=a(c,o),I=U.S;I!==null&&I(S,b),ym(t,n,b)}catch(tt){cf(t,n,tt)}finally{f!==null&&S.types!==null&&(f.types=S.types),U.T=f}}else try{f=a(c,o),ym(t,n,f)}catch(tt){cf(t,n,tt)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){xm(t,n,o)},function(o){return cf(t,n,o)}):xm(t,n,a)}function xm(t,n,a){n.status="fulfilled",n.value=a,Sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_m(t,a)))}function cf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Sm(n),n=n.next;while(n!==o)}t.action=null}function Sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(ye){var a=Ie.formState;if(a!==null){t:{var o=se;if(ye){if(Ge){e:{for(var c=Ge,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=oi(c.nextSibling),o=c.data==="F!";break t}}xa(o)}o=!1}o&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=o,a=Vm.bind(null,se,o),o.dispatch=a,o=uf(!1),f=gf.bind(null,se,!1,o.queue),o=Cn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=ox.bind(null,se,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=$e();return bm(n,Pe,t)}function bm(t,n,a){if(n=of(t,n,Mm)[0],t=Ul(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(S){throw S===qr?Sl:S}else o=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Qr(9,{destroy:void 0},lx.bind(null,c,a),null)),[o,f,t]}function lx(t,n){t.action=n}function Am(t){var n=$e(),a=Pe;if(a!==null)return bm(n,a,t);$e(),n=n.memoizedState,a=$e();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=se.updateQueue,n===null&&(n=wl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rm(){return $e().memoizedState}function Ll(t,n,a,o){var c=Cn();se.flags|=t,c.memoizedState=Qr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nl(t,n,a,o){var c=$e();o=o===void 0?null:o;var f=c.memoizedState.inst;Pe!==null&&o!==null&&tf(o,Pe.memoizedState.deps)?c.memoizedState=Qr(n,f,a,o):(se.flags|=t,c.memoizedState=Qr(1|n,f,a,o))}function Cm(t,n){Ll(8390656,8,t,n)}function ff(t,n){Nl(2048,8,t,n)}function ux(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=wl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=$e().memoizedState;return ux({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Dm(t,n){return Nl(4,2,t,n)}function Um(t,n){return Nl(4,4,t,n)}function Lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,Lm.bind(null,n,t),a)}function hf(){}function Om(t,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Pm(t,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),fr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zg(),se.lanes|=t,wa|=t,a)}function zm(t,n,a,o){return qn(a,n)?a:jr.current!==null?(t=df(t,a,o),qn(t,n)||(an=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(ge&261930)===0?(an=!0,t.memoizedState=a):(t=zg(),se.lanes|=t,wa|=t,n)}function Bm(t,n,a,o,c){var f=V.p;V.p=f!==0&&8>f?f:8;var S=U.T,b={};U.T=b,gf(t,!1,n,a);try{var I=c(),tt=U.S;if(tt!==null&&tt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=ax(I,o);po(t,n,pt,Jn(t))}else po(t,n,o,Jn(t))}catch(yt){po(t,n,{then:function(){},status:"rejected",reason:yt},Jn())}finally{V.p=f,S!==null&&b.types!==null&&(S.types=b.types),U.T=S}}function cx(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Im(t).queue;Bm(t,c,n,F,a===null?cx:function(){return Fm(t),a(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Im(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},Jn())}function mf(){return vn(Uo)}function Hm(){return $e().memoizedState}function Gm(){return $e().memoizedState}function fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ea(a);var o=Ta(n,t,a);o!==null&&(Fn(o,n,a),lo(o,n,a)),n={cache:kc()},t.payload=n;return}n=n.return}}function hx(t,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?km(n,a):(a=Lc(t,n,a,o),a!==null&&(Fn(a,t,o),Xm(a,n,o)))}function Vm(t,n,a){var o=Jn();po(t,n,a,o)}function po(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))km(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,qn(b,S))return pl(t,n,c,0),Ie===null&&dl(),!1}catch{}finally{}if(a=Lc(t,n,c,o),a!==null)return Fn(a,t,o),Xm(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(r(479))}else n=Lc(t,a,o,2),n!==null&&Fn(n,t,2)}function Ol(t){var n=t.alternate;return t===se||n!==null&&n===se}function km(t,n){Zr=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,wr(t,a)}}var mo={readContext:vn,use:Dl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};mo.useEffectEvent=Ze;var Wm={readContext:vn,use:Dl,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:vn,useEffect:Cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var o=t();if(fr){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Cn();if(a!==void 0){var c=a(n);if(fr){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=hx.bind(null,se,t),[o.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=Vm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Cn();return df(a,t,n)},useTransition:function(){var t=uf(!1);return t=Bm.bind(null,se,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=se,c=Cn();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(ge&127)!==0||hm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Cm(pm.bind(null,o,f,t),[t]),o.flags|=2048,Qr(9,{destroy:void 0},dm.bind(null,o,f,a,n),null),a},useId:function(){var t=Cn(),n=Ie.identifierPrefix;if(ye){var a=Ai,o=bi;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Cn().memoizedState=fx.bind(null,se)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:vn,use:Dl,useCallback:Om,useContext:vn,useEffect:ff,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Ul,useRef:Rm,useState:function(){return Ul(Vi)},useDebugValue:hf,useDeferredValue:function(t,n){var a=$e();return zm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Ul(Vi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:mf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=$e();return vm(a,Pe,t,n)},useMemoCache:sf,useCacheRefresh:Gm};vf.useEffectEvent=wm;var qm={readContext:vn,use:Dl,useCallback:Om,useContext:vn,useEffect:ff,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:lf,useRef:Rm,useState:function(){return lf(Vi)},useDebugValue:hf,useDeferredValue:function(t,n){var a=$e();return Pe===null?df(a,t,n):zm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=lf(Vi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:mf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=$e();return Pe!==null?vm(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Gm};qm.useEffectEvent=wm;function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=Ea(o);c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(Fn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=Ea(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(Fn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(t,o,a),n!==null&&(Fn(n,t,a),lo(n,t,a))}};function Ym(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(c,f):!0}function jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function hr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Zm(t){hl(t)}function Km(t){console.error(t)}function Qm(t){hl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xf(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function $m(t){return t=Ea(t),t.tag=3,t}function tg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Jm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Jm(n,a,o),typeof c!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function dx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Yl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,c)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,c)),!1}throw Error(r(435,a.tag))}return Wf(t,o,c),Yl(),!1}if(ye)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ic&&(t=Error(r(422),{cause:o}),io(ni(t,a)))):(o!==Ic&&(n=Error(r(423),{cause:o}),io(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ni(o,a),c=xf(t.stateNode,o,c),Zc(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:o});if(f=ni(f,a),Eo===null?Eo=[f]:Eo.push(f),Ke!==4&&(Ke=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=xf(a.stateNode,o,t),Zc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=$m(c),tg(c,t,a,o),Zc(a,c),!1}a=a.return}while(a!==null);return!1}var Sf=Error(r(461)),an=!1;function _n(t,n,a,o){n.child=t===null?am(n,null,a,o):cr(n,t.child,a,o)}function eg(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return sr(n),o=ef(t,n,a,S,f,c),b=nf(),t!==null&&!an?(af(t,n,c),ki(t,n,c)):(ye&&b&&zc(n),n.flags|=1,_n(t,n,o,c),n.child)}function ng(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Nc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ig(t,n,f,o,c)):(t=gl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!wf(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(S,o)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,o),t.ref=n.ref,t.return=n,n.child=t}function ig(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(to(f,o)&&t.ref===n.ref)if(an=!1,n.pendingProps=o=f,wf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Mf(t,n,a,o,c)}function ag(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return rg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?om(n,f):Qc(),lm(n);else return o=n.lanes=536870912,rg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xl(n,f.cachePool),om(n,f),Aa(),n.memoizedState=null):(t!==null&&xl(n,null),Qc(),Aa());return _n(t,n,c,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rg(t,n,a,o,c){var f=Wc();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&xl(n,null),Qc(),lm(n),t!==null&&kr(t,n,o,!0),n.childLanes=c,null}function zl(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function sg(t,n,a){return cr(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function px(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(o.mode==="hidden")return t=zl(n,o),n.lanes=536870912,go(null,t);if($c(n),(t=Ge)?(t=_v(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,gn=n,Ge=null)):t=null,t===null)throw xa(n);return n.lanes=536870912,null}return zl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if($c(n),c)if(n.flags&256)n.flags&=-257,n=sg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(an||kr(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(o=Ie,o!==null&&(S=Gs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,nr(t,S),Fn(o,t,S),Sf;Yl(),n=sg(t,n,a)}else t=f.treeContext,Ge=oi(S.nextSibling),gn=n,ye=!0,ya=null,ri=!1,t!==null&&qp(n,t),n=zl(n,o),n.flags|=4096;return n}return t=Bi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,c){return sr(n),a=ef(t,n,a,o,void 0,c),o=nf(),t!==null&&!an?(af(t,n,c),ki(t,n,c)):(ye&&o&&zc(n),n.flags|=1,_n(t,n,a,c),n.child)}function og(t,n,a,o,c,f){return sr(n),n.updateQueue=null,a=cm(n,o,a,c),um(t),o=nf(),t!==null&&!an?(af(t,n,f),ki(t,n,f)):(ye&&o&&zc(n),n.flags|=1,_n(t,n,a,f),n.child)}function lg(t,n,a,o,c){if(sr(n),n.stateNode===null){var f=Fr,S=a.contextType;typeof S=="object"&&S!==null&&(f=vn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Yc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?vn(S):Fr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_f(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&yf.enqueueReplaceState(f,f.state,null),co(n,o,f,c),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=hr(a,b);f.props=I;var tt=f.context,pt=a.contextType;S=Fr,typeof pt=="object"&&pt!==null&&(S=vn(pt));var yt=a.getDerivedStateFromProps;pt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==S)&&jm(n,f,o,S),Ma=!1;var nt=n.memoizedState;f.state=nt,co(n,o,f,c),uo(),tt=n.memoizedState,b||nt!==tt||Ma?(typeof yt=="function"&&(_f(n,a,yt,o),tt=n.memoizedState),(I=Ma||Ym(n,a,I,o,nt,tt,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,jc(t,n),S=n.memoizedProps,pt=hr(a,S),f.props=pt,yt=n.pendingProps,nt=f.context,tt=a.contextType,I=Fr,typeof tt=="object"&&tt!==null&&(I=vn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==yt||nt!==I)&&jm(n,f,o,I),Ma=!1,nt=n.memoizedState,f.state=nt,co(n,o,f,c),uo();var ut=n.memoizedState;S!==yt||nt!==ut||Ma||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof b=="function"&&(_f(n,a,b,o),ut=n.memoizedState),(pt=Ma||Ym(n,a,pt,o,nt,ut,I)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=I,o=pt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=cr(n,t.child,null,c),n.child=cr(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function ug(t,n,a,o){return ar(),n.flags|=256,_n(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:Jp()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function cg(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?ba(n):Aa(),(t=Ge)?(t=_v(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,gn=n,Ge=null)):t=null,t===null)throw xa(n);return oh(t)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(Aa(),c=n.mode,b=Il({mode:"hidden",children:b},c),o=ir(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=Tf(a),o.childLanes=bf(t,S,a),n.memoizedState=Ef,go(null,o)):(ba(n),Af(n,b))}var I=t.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),b=o.fallback,c=n.mode,o=Il({mode:"visible",children:o.children},c),b=ir(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,cr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=bf(t,S,a),n.memoizedState=Ef,n=go(null,o));else if(ba(n),oh(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,io({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(an||kr(t,n,a,!1),S=(a&t.childLanes)!==0,an||S){if(S=Ie,S!==null&&(o=Gs(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,nr(t,o),Fn(S,t,o),Sf;sh(b)||Yl(),n=Rf(t,n,a)}else sh(b)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Ge=oi(b.nextSibling),gn=n,ye=!0,ya=null,ri=!1,t!==null&&qp(n,t),n=Af(n,o.children),n.flags|=4096);return n}return c?(Aa(),b=o.fallback,c=n.mode,I=t.child,tt=I.sibling,o=Bi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?b=Bi(tt,b):(b=ir(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,go(null,o),o=n.child,b=t.child.memoizedState,b===null?b=Tf(a):(c=b.cachePool,c!==null?(I=en._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Jp(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=bf(t,S,a),n.memoizedState=Ef,go(t.child,o)):(ba(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return cr(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gc(t.return,n,a)}function Cf(t,n,a,o,c,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function hg(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var S=Je.current,b=(S&2)!==0;if(b?(S=S&1|2,n.flags|=128):S&=1,Mt(Je,S),_n(t,n,o,a),o=ye?no:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,a,n);else if(t.tag===19)fg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Cf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Al(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Cf(n,!0,a,null,f,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(kr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function mx(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Sa(n,en,t.memoizedState.cache),ar();break;case 27:case 5:ie(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$c(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?cg(t,n,a):(ba(n),t=ki(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(kr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return hg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(Je,Je.current),o)break;return null;case 22:return n.lanes=0,ag(t,n,a,n.pendingProps);case 24:Sa(n,en,t.memoizedState.cache)}return ki(t,n,a)}function dg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return an=!1,mx(t,n,a);an=(t.flags&131072)!==0}else an=!1,ye&&(n.flags&1048576)!==0&&Wp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=lr(n.elementType),n.type=t,typeof t=="function")Nc(t)?(o=hr(t,o),n.tag=1,n=lg(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=eg(null,n,t,o,a);break t}else if(c===z){n.tag=14,n=ng(null,n,t,o,a);break t}}throw n=ht(t)||t,Error(r(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=hr(o,n.pendingProps),lg(t,n,o,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,jc(t,n),co(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Sa(n,en,o),o!==f.cache&&Vc(n,[en],a,!0),uo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ug(t,n,o,a);break t}else if(o!==c){c=ni(Error(r(424)),n),io(c),n=ug(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=oi(t.firstChild),gn=n,ye=!0,ya=null,ri=!0,a=am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),o===c){n=ki(t,n,a);break t}_n(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=Tv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,o=tu(xt.current).createElement(a),o[tn]=n,o[Sn]=t,yn(o,a,t),Gt(o),n.stateNode=o):n.memoizedState=Tv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ie(n),t===null&&ye&&(o=n.stateNode=Sv(n.type,n.pendingProps,xt.current),gn=n,ri=!0,c=Ge,Oa(n.type)?(lh=c,Ge=oi(o.firstChild)):Ge=c),_n(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=o=Ge)&&(o=Wx(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,gn=n,Ge=oi(o.firstChild),ri=!1,c=!0):c=!1),c||xa(n)),ie(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,ih(c,f)?o=null:S!==null&&ih(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ef(t,n,sx,null,null,a),Uo._currentValue=c),Bl(t,n),_n(t,n,o,a),n.child;case 6:return t===null&&ye&&((t=a=Ge)&&(a=qx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,gn=n,Ge=null,t=!0):t=!1),t||xa(n)),null;case 13:return cg(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=cr(n,null,o,a):_n(t,n,o,a),n.child;case 11:return eg(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),_n(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,sr(n),c=vn(c),o=o(c),n.flags|=1,_n(t,n,o,a),n.child;case 14:return ng(t,n,n.type,n.pendingProps,a);case 15:return ig(t,n,n.type,n.pendingProps,a);case 19:return hg(t,n,a);case 31:return px(t,n,a);case 22:return ag(t,n,a,n.pendingProps);case 24:return sr(n),o=vn(en),t===null?(c=Wc(),c===null&&(c=Ie,f=kc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Yc(n),Sa(n,en,c)):((t.lanes&a)!==0&&(jc(t,n),co(n,null,null,a),uo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,en,o)):(o=f.cache,Sa(n,en,o),o!==c.cache&&Vc(n,[en],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function Df(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Hg())t.flags|=8192;else throw ur=Ml,qc}else t.flags&=-16777217}function pg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wv(n))if(Hg())t.flags|=8192;else throw ur=Ml,qc}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Se():536870912,t.lanes|=n,es|=n)}function vo(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function gx(t,n,a){var o=n.pendingProps;switch(Bc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(en),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vr(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fc())),Ve(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(Ve(n),pg(n,f)):(Ve(n),Df(n,c,null,o,a))):f?f!==t.memoizedState?(Xi(n),Ve(n),pg(n,f)):(Ve(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Xi(n),Ve(n),Df(n,c,t,o,a)),null;case 27:if(xe(n),a=xt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}t=q.current,Vr(n)?Yp(n):(t=Sv(c,o,a),n.stateNode=t,Xi(n))}return Ve(n),null;case 5:if(xe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}if(f=q.current,Vr(n))Yp(n);else{var S=tu(xt.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}f[tn]=n,f[Sn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(yn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Xi(n)}}return Ve(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Vr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=gn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[tn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||cv(t.nodeValue,a)),t||xa(n,!0)}else t=tu(t).createTextNode(o),t[tn]=n,n.stateNode=t}return Ve(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Vr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[tn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),t=!1}else a=Fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ve(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[tn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else c=Fc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Ve(n),null);case 4:return Ht(),t===null&&Jf(n.stateNode.containerInfo),Ve(n),null;case 10:return Hi(n.type),Ve(n),null;case 19:if(et(Je),o=n.memoizedState,o===null)return Ve(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)vo(o,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,vo(o,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return Mt(Je,Je.current&1|2),ye&&Ii(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&O()>Xl&&(n.flags|=128,c=!0,vo(o,!1),n.lanes=4194304)}else{if(!c)if(t=Al(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ye)return Ve(n),null}else 2*O()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,c=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=O(),t.sibling=null,a=Je.current,Mt(Je,c?a&1|2:a&1),ye&&Ii(n,o.treeForkCount),t):(Ve(n),null);case 22:case 23:return Zn(n),Jc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&et(or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(en),Ve(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vx(t,n){switch(Bc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(en),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(Je),null;case 4:return Ht(),null;case 10:return Hi(n.type),null;case 22:case 23:return Zn(n),Jc(),t!==null&&et(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(en),null;case 25:return null;default:return null}}function mg(t,n){switch(Bc(n),n.tag){case 3:Hi(en),Ht();break;case 26:case 27:case 5:xe(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:et(Je);break;case 10:Hi(n.type);break;case 22:case 23:Zn(n),Jc(),t!==null&&et(or);break;case 24:Hi(en)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(b){Le(n,n.return,b)}}function Ra(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var I=a,tt=b;try{tt()}catch(pt){Le(c,I,pt)}}}o=o.next}while(o!==f)}}catch(pt){Le(n,n.return,pt)}}function gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sm(n,a)}catch(o){Le(t,t.return,o)}}}function vg(t,n,a){a.props=hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Le(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Le(t,n,c)}}function Ri(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function _g(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function Uf(t,n,a){try{var o=t.stateNode;Fx(o,t.type,a,n),o[Sn]=n}catch(c){Le(t,t.return,c)}}function yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function Lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nf(t,n,a),t=t.sibling;t!==null;)Nf(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function xg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,o,a),n[tn]=t,n[Sn]=a}catch(f){Le(t,t.return,f)}}var Wi=!1,rn=!1,Of=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,pn=null;function _x(t,n){if(t=t.containerInfo,eh=ou,t=Np(t),Ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,I=-1,tt=0,pt=0,yt=t,nt=null;e:for(;;){for(var ut;yt!==a||c!==0&&yt.nodeType!==3||(b=S+c),yt!==f||o!==0&&yt.nodeType!==3||(I=S+o),yt.nodeType===3&&(S+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)nt=yt,yt=ut;for(;;){if(yt===t)break e;if(nt===a&&++tt===c&&(b=S),nt===f&&++pt===o&&(I=S),(ut=yt.nextSibling)!==null)break;yt=nt,nt=yt.parentNode}yt=ut}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:t,selectionRange:a},ou=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=hr(a.type,c);t=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Le(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Mg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),o&4&&_o(5,a);break;case 1:if(Yi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Le(a,a.return,S)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Le(a,a.return,S)}}o&64&&gg(a),o&512&&yo(a,a.return);break;case 3:if(Yi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(t,n)}catch(S){Le(a,a.return,S)}}break;case 27:n===null&&o&4&&xg(a);case 26:case 5:Yi(t,a),n===null&&o&4&&_g(a),o&512&&yo(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),o&4&&bg(t,a);break;case 13:Yi(t,a),o&4&&Ag(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Rx.bind(null,a),Yx(t,a))));break;case 22:if(o=a.memoizedState!==null||Wi,!o){n=n!==null&&n.memoizedState!==null||rn,c=Wi;var f=rn;Wi=o,(rn=n)&&!f?ji(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),Wi=c,rn=f}break;case 30:break;default:Yi(t,a)}}function Eg(t){var n=t.alternate;n!==null&&(t.alternate=null,Eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&K(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Pn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Tg(t,n,a),a=a.sibling}function Tg(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:rn||Ri(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ri(a,n);var o=qe,c=Pn;Oa(a.type)&&(qe=a.stateNode,Pn=!1),qi(t,n,a),Co(a.stateNode),qe=o,Pn=c;break;case 5:rn||Ri(a,n);case 6:if(o=qe,c=Pn,qe=null,qi(t,n,a),qe=o,Pn=c,qe!==null)if(Pn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:qe!==null&&(Pn?(t=qe,gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),us(t)):gv(qe,a.stateNode));break;case 4:o=qe,c=Pn,qe=a.stateNode.containerInfo,Pn=!0,qi(t,n,a),qe=o,Pn=c;break;case 0:case 11:case 14:case 15:Ra(2,a,n),rn||Ra(4,a,n),qi(t,n,a);break;case 1:rn||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vg(a,n,o)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,qi(t,n,a),rn=o;break;default:qi(t,n,a)}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{us(t)}catch(a){Le(n,n.return,a)}}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{us(t)}catch(a){Le(n,n.return,a)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Sg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Sg),n;default:throw Error(r(435,t.tag))}}function Gl(t,n){var a=yx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Cx.bind(null,t,o);o.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Oa(b.type)){qe=b.stateNode,Pn=!1;break t}break;case 5:qe=b.stateNode,Pn=!1;break t;case 3:case 4:qe=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(qe===null)throw Error(r(160));Tg(f,S,c),qe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Rg(n,t),n=n.sibling}var mi=null;function Rg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),o&4&&(Ra(3,t,t.return),_o(3,t),Ra(5,t,t.return));break;case 1:zn(n,t),Bn(t),o&512&&(rn||a===null||Ri(a,a.return)),o&64&&Wi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(zn(n,t),Bn(t),o&512&&(rn||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[at]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,o,a),f[tn]=t,Gt(f),o=f;break t;case"link":var S=Rv("link","href",c).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(o),yn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Rv("meta","content",c).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(o),yn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[tn]=t,Gt(f),o=f}t.stateNode=o}else Cv(c,t.type,t.stateNode);else t.stateNode=Av(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Cv(c,t.type,t.stateNode):Av(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),o&512&&(rn||a===null||Ri(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),o&512&&(rn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Lr(c,"")}catch(Xt){Le(t,t.return,Xt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Uf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Of=!0);break;case 6:if(zn(n,t),Bn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xt){Le(t,t.return,Xt)}}break;case 3:if(iu=null,c=mi,mi=eu(n.containerInfo),zn(n,t),mi=c,Bn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(Xt){Le(t,t.return,Xt)}Of&&(Of=!1,Cg(t));break;case 4:o=mi,mi=eu(t.stateNode.containerInfo),zn(n,t),Bn(t),mi=o;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=O()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Wi,pt=rn;if(Wi=tt||c,rn=pt||I,zn(n,t),rn=pt,Wi=tt,Bn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Wi||rn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=I.stateNode;var yt=I.memoizedProps.style,nt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Xt){Le(I,I.return,Xt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Xt){Le(I,I.return,Xt)}}}else if(n.tag===18){if(a===null){I=n;try{var ut=I.stateNode;c?vv(ut,!0):vv(I.stateNode,!1)}catch(Xt){Le(I,I.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(t,a))));break;case 19:zn(n,t),Bn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(yg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Lf(t);Hl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Lr(S,""),a.flags&=-33);var b=Lf(t);Hl(t,b,S);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Lf(t);Nf(t,tt,I);break;default:throw Error(r(161))}}catch(pt){Le(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),dr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vg(n,n.return,a),dr(n);break;case 27:Co(n.stateNode);case 26:case 5:Ri(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ji(c,f,a),_o(4,f);break;case 1:if(ji(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Le(o,o.return,tt)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)rm(I[c],b)}catch(tt){Le(o,o.return,tt)}}a&&S&64&&gg(f),yo(f,f.return);break;case 27:xg(f);case 26:case 5:ji(c,f,a),a&&o===null&&S&4&&_g(f),yo(f,f.return);break;case 12:ji(c,f,a);break;case 31:ji(c,f,a),a&&S&4&&bg(c,f);break;case 13:ji(c,f,a),a&&S&4&&Ag(c,f);break;case 22:f.memoizedState===null&&ji(c,f,a),yo(f,f.return);break;case 30:break;default:ji(c,f,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function gi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wg(t,n,a,o),n=n.sibling}function wg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,o),c&2048&&_o(9,n);break;case 1:gi(t,n,a,o);break;case 3:gi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){gi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Le(n,n.return,I)}}else gi(t,n,a,o);break;case 31:gi(t,n,a,o);break;case 13:gi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,o):xo(t,n):f._visibility&2?gi(t,n,a,o):(f._visibility|=2,Jr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Pf(S,n);break;case 24:gi(t,n,a,o),c&2048&&zf(n.alternate,n);break;default:gi(t,n,a,o)}}function Jr(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,b=a,I=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Jr(f,S,b,I,c),_o(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Jr(f,S,b,I,c):xo(f,S):(pt._visibility|=2,Jr(f,S,b,I,c)),c&&tt&2048&&Pf(S.alternate,S);break;case 24:Jr(f,S,b,I,c),c&&tt&2048&&zf(S.alternate,S);break;default:Jr(f,S,b,I,c)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:xo(a,o),c&2048&&Pf(o.alternate,o);break;case 24:xo(a,o),c&2048&&zf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function $r(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)Dg(t,n,a),t=t.sibling}function Dg(t,n,a){switch(t.tag){case 26:$r(t,n,a),t.flags&So&&t.memoizedState!==null&&rS(a,mi,t.memoizedState,t.memoizedProps);break;case 5:$r(t,n,a);break;case 3:case 4:var o=mi;mi=eu(t.stateNode.containerInfo),$r(t,n,a),mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,$r(t,n,a),So=o):$r(t,n,a));break;default:$r(t,n,a)}}function Ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Ng(o,t)}Ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lg(t),t=t.sibling}function Lg(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):Mo(t);break;default:Mo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Ng(o,t)}Ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Ng(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,pn=o;else t:for(a=t;pn!==null;){o=pn;var c=o.sibling,f=o.return;if(Eg(o),o===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var xx={getCacheForType:function(t){var n=vn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return vn(en).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ie=null,de=null,ge=0,Ue=0,Kn=null,Ca=!1,ts=!1,Bf=!1,Zi=0,Ke=0,wa=0,pr=0,If=0,Qn=0,es=0,Eo=null,In=null,Ff=!1,kl=0,Og=0,Xl=1/0,Wl=null,Da=null,cn=0,Ua=null,ns=null,Ki=0,Hf=0,Gf=null,Pg=null,To=0,Vf=null;function Jn(){return(Ae&2)!==0&&ge!==0?ge&-ge:U.T!==null?jf():Vs()}function zg(){if(Qn===0)if((ge&536870912)===0||ye){var t=St;St<<=1,(St&3932160)===0&&(St=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Fn(t,n,a){(t===Ie&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(is(t,0),La(t,ge,Qn,!1)),xn(t,a),((Ae&2)===0||t!==Ie)&&(t===Ie&&((Ae&2)===0&&(pr|=a),Ke===4&&La(t,ge,Qn,!1)),Ci(t))}function Bg(t,n,a){if((Ae&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),c=o?Tx(t,n):Xf(t,n,!0),f=o;do{if(c===0){ts&&!o&&La(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Mx(a)){c=Xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=t;c=Eo;var I=b.current.memoizedState.isDehydrated;if(I&&(is(b,S).flags|=256),S=Xf(b,S,!1),S!==2){if(Bf&&!I){b.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){is(t,0),La(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,Qn,!Ca);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=kl+300-O(),10<c)){if(La(o,n,Qn,!Ca),fe(o,0,!0)!==0)break t;Ki=n,o.timeoutHandle=pv(Ig.bind(null,o,a,In,Wl,Ff,n,Qn,pr,es,Ca,f,"Throttled",-0,0),c);break t}Ig(o,a,In,Wl,Ff,n,Qn,pr,es,Ca,f,null,-0,0)}}break}while(!0);Ci(t)}function Ig(t,n,a,o,c,f,S,b,I,tt,pt,yt,nt,ut){if(t.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Dg(n,f,yt);var Xt=(f&62914560)===f?kl-O():(f&4194048)===f?Og-O():0;if(Xt=sS(yt,Xt),Xt!==null){Ki=f,t.cancelPendingCommit=Xt(qg.bind(null,t,n,f,a,o,c,S,b,I,pt,yt,null,nt,ut)),La(t,f,S,!tt);return}}qg(t,n,f,a,o,c,S,b,I)}function Mx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(t,n,a,o){n&=~If,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Ti(t,a,n)}function ql(){return(Ae&6)===0?(bo(0),!1):!0}function kf(){if(de!==null){if(Ue===0)var t=de.return;else t=de,Fi=rr=null,rf(t),Yr=null,so=0,t=de;for(;t!==null;)mg(t.alternate,t),t=t.return;de=null}}function is(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Vx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,kf(),Ie=t,de=a=Bi(t.current,null),ge=n,Ue=0,Kn=null,Ca=!1,ts=Fe(t,n),Bf=!1,es=Qn=If=pr=wa=Ke=0,In=Eo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Qt(o),f=1<<c;n|=t[c],o&=~f}return Zi=n,dl(),a}function Fg(t,n){se=null,U.H=mo,n===qr||n===Sl?(n=em(),Ue=3):n===qc?(n=em(),Ue=4):Ue=n===Sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&(Ke=1,Pl(t,ni(n,t.current)))}function Hg(){var t=jn.current;return t===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?t===si:!1}function Gg(){var t=U.H;return U.H=mo,t===null?mo:t}function Vg(){var t=U.A;return U.A=xx,t}function Yl(){Ke=4,Ca||(ge&4194048)!==ge&&jn.current!==null||(ts=!0),(wa&134217727)===0&&(pr&134217727)===0||Ie===null||La(Ie,ge,Qn,!1)}function Xf(t,n,a){var o=Ae;Ae|=2;var c=Gg(),f=Vg();(Ie!==t||ge!==n)&&(Wl=null,is(t,n)),n=!1;var S=Ke;t:do try{if(Ue!==0&&de!==null){var b=de,I=Kn;switch(Ue){case 8:kf(),S=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var tt=Ue;if(Ue=0,Kn=null,as(t,b,I,tt),a&&ts){S=0;break t}break;default:tt=Ue,Ue=0,Kn=null,as(t,b,I,tt)}}Ex(),S=Ke;break}catch(pt){Fg(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Fi=rr=null,Ae=o,U.H=c,U.A=f,de===null&&(Ie=null,ge=0,dl()),S}function Ex(){for(;de!==null;)kg(de)}function Tx(t,n){var a=Ae;Ae|=2;var o=Gg(),c=Vg();Ie!==t||ge!==n?(Wl=null,Xl=O()+500,is(t,n)):ts=Fe(t,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,as(t,n,f,1);break;case 2:case 9:if($p(f)){Ue=0,Kn=null,Xg(n);break}n=function(){Ue!==2&&Ue!==9||Ie!==t||(Ue=7),Ci(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:$p(f)?(Ue=0,Kn=null,Xg(n)):(Ue=0,Kn=null,as(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var b=de;if(S?wv(S):b.stateNode.complete){Ue=0,Kn=null;var I=b.sibling;if(I!==null)de=I;else{var tt=b.return;tt!==null?(de=tt,jl(tt)):de=null}break e}}Ue=0,Kn=null,as(t,n,f,5);break;case 6:Ue=0,Kn=null,as(t,n,f,6);break;case 8:kf(),Ke=6;break t;default:throw Error(r(462))}}bx();break}catch(pt){Fg(t,pt)}while(!0);return Fi=rr=null,U.H=o,U.A=c,Ae=a,de!==null?0:(Ie=null,ge=0,dl(),Ke)}function bx(){for(;de!==null&&!st();)kg(de)}function kg(t){var n=dg(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?jl(t):de=n}function Xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=og(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=og(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:rf(n);default:mg(a,n),n=de=Vp(n,Zi),n=dg(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?jl(t):de=n}function as(t,n,a,o){Fi=rr=null,rf(n),Yr=null,so=0;var c=n.return;try{if(dx(t,c,n,a,ge)){Ke=1,Pl(t,ni(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ke=1,Pl(t,ni(a,t.current)),de=null;return}n.flags&32768?(ye||o===1?t=!0:ts||(ge&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wg(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){Wg(n,Ca);return}t=n.return;var a=gx(n.alternate,n,Zi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ke===0&&(Ke=5)}function Wg(t,n){do{var a=vx(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ke=6,de=null}function qg(t,n,a,o,c,f,S,b,I){t.cancelPendingCommit=null;do Zl();while(cn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Uc,al(t,a,f,S,b,I),t===Ie&&(de=Ie=null,ge=0),ns=n,Ua=t,Ki=a,Hf=f,Gf=c,Pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wx(wt,function(){return Qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=V.p,V.p=2,S=Ae,Ae|=4;try{_x(t,n,a)}finally{Ae=S,V.p=c,U.T=o}}cn=1,Yg(),jg(),Zg()}}function Yg(){if(cn===1){cn=0;var t=Ua,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=V.p;V.p=2;var c=Ae;Ae|=4;try{Rg(n,t);var f=nh,S=Np(t.containerInfo),b=f.focusedElem,I=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&Lp(b.ownerDocument.documentElement,b)){if(I!==null&&Ac(b)){var tt=I.start,pt=I.end;if(pt===void 0&&(pt=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(pt,b.value.length);else{var yt=b.ownerDocument||document,nt=yt&&yt.defaultView||window;if(nt.getSelection){var ut=nt.getSelection(),Xt=b.textContent.length,ee=Math.min(I.start,Xt),Be=I.end===void 0?ee:Math.min(I.end,Xt);!ut.extend&&ee>Be&&(S=Be,Be=ee,ee=S);var j=Up(b,ee),X=Up(b,Be);if(j&&X&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var $=yt.createRange();$.setStart(j.node,j.offset),ut.removeAllRanges(),ee>Be?(ut.addRange($),ut.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ut.addRange($))}}}}for(yt=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<yt.length;b++){var vt=yt[b];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}ou=!!eh,nh=eh=null}finally{Ae=c,V.p=o,U.T=a}}t.current=n,cn=2}}function jg(){if(cn===2){cn=0;var t=Ua,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=V.p;V.p=2;var c=Ae;Ae|=4;try{Mg(t,n.alternate,n)}finally{Ae=c,V.p=o,U.T=a}}cn=3}}function Zg(){if(cn===4||cn===3){cn=0,dt();var t=Ua,n=ns,a=Ki,o=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,ns=Ua=null,Kg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Da=null),pa(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=V.p,V.p=2,U.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{U.T=n,V.p=c}}(Ki&3)!==0&&Zl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Vf?To++:(To=0,Vf=t):To=0,bo(0)}}function Kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Zl(){return Yg(),jg(),Zg(),Qg()}function Qg(){if(cn!==5)return!1;var t=Ua,n=Hf;Hf=0;var a=pa(Ki),o=U.T,c=V.p;try{V.p=32>a?32:a,U.T=null,a=Gf,Gf=null;var f=Ua,S=Ki;if(cn=0,ns=Ua=null,Ki=0,(Ae&6)!==0)throw Error(r(331));var b=Ae;if(Ae|=4,Lg(f.current),wg(f,f.current,S,a),Ae=b,bo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Nt,f)}catch{}return!0}finally{V.p=c,U.T=o,Kg(t,n)}}function Jg(t,n,a){n=ni(a,n),n=xf(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(xn(t,2),Ci(t))}function Le(t,n,a){if(t.tag===3)Jg(t,t,a);else for(;n!==null;){if(n.tag===3){Jg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){t=ni(a,t),a=$m(2),o=Ta(n,a,2),o!==null&&(tg(a,o,n,t),xn(o,2),Ci(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Sx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Bf=!0,c.add(a),t=Ax.bind(null,t,n,a),n.then(t,t))}function Ax(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ie===t&&(ge&a)===a&&(Ke===4||Ke===3&&(ge&62914560)===ge&&300>O()-kl?(Ae&2)===0&&is(t,0):If|=a,es===ge&&(es=0)),Ci(t)}function $g(t,n){n===0&&(n=Se()),t=nr(t,n),t!==null&&(xn(t,n),Ci(t))}function Rx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$g(t,a)}function Cx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),$g(t,a)}function wx(t,n){return B(t,n)}var Kl=null,rs=null,qf=!1,Ql=!1,Yf=!1,Na=0;function Ci(t){t!==rs&&t.next===null&&(rs===null?Kl=rs=t:rs=rs.next=t),Ql=!0,qf||(qf=!0,Ux())}function bo(t,n){if(!Yf&&Ql){Yf=!0;do for(var a=!1,o=Kl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,iv(o,f))}else f=ge,f=fe(o,o===Ie?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fe(o,f)||(a=!0,iv(o,f));o=o.next}while(a);Yf=!1}}function Dx(){tv()}function tv(){Ql=qf=!1;var t=0;Na!==0&&Gx()&&(t=Na);for(var n=O(),a=null,o=Kl;o!==null;){var c=o.next,f=ev(o,n);f===0?(o.next=null,a===null?Kl=c:a.next=c,c===null&&(rs=a)):(a=o,(t!==0||(f&3)!==0)&&(Ql=!0)),o=c}cn!==0&&cn!==5||bo(t),Na!==0&&(Na=0)}function ev(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Qt(f),b=1<<S,I=c[S];I===-1?((b&a)===0||(b&o)!==0)&&(c[S]=ln(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ie,a=ge,a=fe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&A(o),pa(a)){case 2:case 8:a=Tt;break;case 32:a=wt;break;case 268435456:a=Ct;break;default:a=wt}return o=nv.bind(null,t),a=B(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&A(o),t.callbackPriority=2,t.callbackNode=null,2}function nv(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var o=ge;return o=fe(t,t===Ie?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Bg(t,o,n),ev(t,O()),t.callbackNode!=null&&t.callbackNode===a?nv.bind(null,t):null)}function iv(t,n){if(Zl())return null;Bg(t,n,!0)}function Ux(){kx(function(){(Ae&6)!==0?B(bt,Dx):tv()})}function jf(){if(Na===0){var t=Xr;t===0&&(t=_t,_t<<=1,(_t&261888)===0&&(_t=256)),Na=t}return Na}function av(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function rv(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Lx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=av((c[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?av(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new ul("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var I=S?rv(c,S):new FormData(c);pf(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=S?rv(c,S):new FormData(c),pf(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Zf=0;Zf<Dc.length;Zf++){var Kf=Dc[Zf],Nx=Kf.toLowerCase(),Ox=Kf[0].toUpperCase()+Kf.slice(1);pi(Nx,"on"+Ox)}pi(zp,"onAnimationEnd"),pi(Bp,"onAnimationIteration"),pi(Ip,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Ky,"onTransitionRun"),pi(Qy,"onTransitionStart"),pi(Jy,"onTransitionCancel"),pi(Fp,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),he("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),he("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),he("onBeforeInput",["compositionend","keypress","textInput","paste"]),he("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function sv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],I=b.instance,tt=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(pt){hl(pt)}c.currentTarget=null,f=I}else for(S=0;S<o.length;S++){if(b=o[S],I=b.instance,tt=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(pt){hl(pt)}c.currentTarget=null,f=I}}}}function pe(t,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=t+"__bubble";a.has(o)||(ov(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),ov(a,t,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[Jl]){t[Jl]=!0,ne.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Qf("selectionchange",!1,n))}}function ov(t,n,a,o){switch(zv(n)){case 2:var c=uS;break;case 8:c=cS;break;default:c=dh}a=c.bind(null,n,a,t),c=void 0,!vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Dt(b),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=f=S;continue t}b=b.parentNode}}o=o.return}hp(function(){var tt=f,pt=mc(a),yt=[];t:{var nt=Hp.get(t);if(nt!==void 0){var ut=ul,Xt=t;switch(t){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ut=Cy;break;case"focusin":Xt="focus",ut=Sc;break;case"focusout":Xt="blur",ut=Sc;break;case"beforeblur":case"afterblur":ut=Sc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Uy;break;case zp:case Bp:case Ip:ut=yy;break;case Fp:ut=Ny;break;case"scroll":case"scrollend":ut=py;break;case"wheel":ut=Py;break;case"copy":case"cut":case"paste":ut=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=vp;break;case"toggle":case"beforetoggle":ut=By}var ee=(n&4)!==0,Be=!ee&&(t==="scroll"||t==="scrollend"),j=ee?nt!==null?nt+"Capture":null:nt;ee=[];for(var X=tt,$;X!==null;){var vt=X;if($=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||$===null||j===null||(vt=Ys(X,j),vt!=null&&ee.push(Ro(X,vt,$))),Be)break;X=X.return}0<ee.length&&(nt=new ut(nt,Xt,null,a,pt),yt.push({event:nt,listeners:ee}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",nt&&a!==pc&&(Xt=a.relatedTarget||a.fromElement)&&(Dt(Xt)||Xt[ma]))break t;if((ut||nt)&&(nt=pt.window===pt?pt:(nt=pt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ut?(Xt=a.relatedTarget||a.toElement,ut=tt,Xt=Xt?Dt(Xt):null,Xt!==null&&(Be=u(Xt),ee=Xt.tag,Xt!==Be||ee!==5&&ee!==27&&ee!==6)&&(Xt=null)):(ut=null,Xt=tt),ut!==Xt)){if(ee=mp,vt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ee=vp,vt="onPointerLeave",j="onPointerEnter",X="pointer"),Be=ut==null?nt:It(ut),$=Xt==null?nt:It(Xt),nt=new ee(vt,X+"leave",ut,a,pt),nt.target=Be,nt.relatedTarget=$,vt=null,Dt(pt)===tt&&(ee=new ee(j,X+"enter",Xt,a,pt),ee.target=$,ee.relatedTarget=Be,vt=ee),Be=vt,ut&&Xt)e:{for(ee=zx,j=ut,X=Xt,$=0,vt=j;vt;vt=ee(vt))$++;vt=0;for(var $t=X;$t;$t=ee($t))vt++;for(;0<$-vt;)j=ee(j),$--;for(;0<vt-$;)X=ee(X),vt--;for(;$--;){if(j===X||X!==null&&j===X.alternate){ee=j;break e}j=ee(j),X=ee(X)}ee=null}else ee=null;ut!==null&&lv(yt,nt,ut,ee,!1),Xt!==null&&Be!==null&&lv(yt,Be,Xt,ee,!0)}}t:{if(nt=tt?It(tt):window,ut=nt.nodeName&&nt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&nt.type==="file")var Ee=bp;else if(Ep(nt))if(Ap)Ee=Yy;else{Ee=Wy;var Wt=Xy}else ut=nt.nodeName,!ut||ut.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&dc(tt.elementType)&&(Ee=bp):Ee=qy;if(Ee&&(Ee=Ee(t,tt))){Tp(yt,Ee,a,pt);break t}Wt&&Wt(t,nt,tt),t==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&hc(nt,"number",nt.value)}switch(Wt=tt?It(tt):window,t){case"focusin":(Ep(Wt)||Wt.contentEditable==="true")&&(zr=Wt,Rc=tt,eo=null);break;case"focusout":eo=Rc=zr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Op(yt,a,pt);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Op(yt,a,pt)}var le;if(Ec)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Pr?Sp(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(_p&&a.locale!=="ko"&&(Pr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Pr&&(le=dp()):(va=pt,_c="value"in va?va.value:va.textContent,Pr=!0)),Wt=$l(tt,ve),0<Wt.length&&(ve=new gp(ve,t,null,a,pt),yt.push({event:ve,listeners:Wt}),le?ve.data=le:(le=Mp(a),le!==null&&(ve.data=le)))),(le=Fy?Hy(t,a):Gy(t,a))&&(ve=$l(tt,"onBeforeInput"),0<ve.length&&(Wt=new gp("onBeforeInput","beforeinput",null,a,pt),yt.push({event:Wt,listeners:ve}),Wt.data=le)),Lx(yt,t,tt,a,pt)}sv(yt,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ys(t,a),c!=null&&o.unshift(Ro(t,c,f)),c=Ys(t,n),c!=null&&o.push(Ro(t,c,f))),t.tag===3)return o;t=t.return}return[]}function zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lv(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,I=b.alternate,tt=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||tt===null||(I=tt,c?(tt=Ys(a,f),tt!=null&&S.unshift(Ro(a,tt,I))):c||(tt=Ys(a,f),tt!=null&&S.push(Ro(a,tt,I)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Bx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(Bx,`
`).replace(Ix,"")}function cv(t,n){return n=uv(n),uv(t)===n}function ze(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Lr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Lr(t,""+o);break;case"className":_e(t,"class",o);break;case"tabIndex":_e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(t,a,o);break;case"style":cp(t,o,f);break;case"data":if(n!=="object"){_e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Pi);break;case"onScroll":o!=null&&pe("scroll",t);break;case"onScrollEnd":o!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pe("beforetoggle",t),pe("toggle",t),je(t,"popover",o);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hy.get(a)||a,je(t,a,o))}}function th(t,n,a,o,c,f){switch(a){case"style":cp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Lr(t,o):(typeof o=="number"||typeof o=="bigint")&&Lr(t,""+o);break;case"onScroll":o!=null&&pe("scroll",t);break;case"onScrollEnd":o!=null&&pe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):je(t,a,o)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,f,S,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),o&&ze(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var b=f=S=c=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":S=pt;break;case"checked":I=pt;break;case"defaultChecked":tt=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:ze(t,n,o,pt,a,null)}}qs(t,f,b,I,tt,S,c,!1);return;case"select":pe("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:ze(t,n,c,b,a,null)}n=f,a=S,t.multiple=!!o,n!=null?Ur(t,!!o,n,!1):a!=null&&Ur(t,!!o,a,!0);return;case"textarea":pe("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:ze(t,n,S,b,a,null)}lp(t,o,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(t,n,I,o,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)pe(Ao[o],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,tt,o,a,null)}return;default:if(dc(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&th(t,n,pt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&ze(t,n,b,o,a,null))}function Fx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,I=null,tt=null,pt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=yt;default:o.hasOwnProperty(ut)||ze(t,n,ut,null,o,yt)}}for(var nt in o){var ut=o[nt];if(yt=a[nt],o.hasOwnProperty(nt)&&(ut!=null||yt!=null))switch(nt){case"type":f=ut;break;case"name":c=ut;break;case"checked":tt=ut;break;case"defaultChecked":pt=ut;break;case"value":S=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==yt&&ze(t,n,nt,ut,o,yt)}}Ws(t,S,b,I,tt,pt,f,c);return;case"select":ut=S=b=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ut=I;default:o.hasOwnProperty(f)||ze(t,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==I&&ze(t,n,c,f,o,I)}n=b,a=S,o=ut,nt!=null?Ur(t,!!a,nt,!1):!!o!=!!a&&(n!=null?Ur(t,!!a,n,!0):Ur(t,!!a,a?[]:"",!1));return;case"textarea":ut=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ze(t,n,b,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(t,n,S,c,o,f)}op(t,nt,ut);return;case"option":for(var Xt in a)if(nt=a[Xt],a.hasOwnProperty(Xt)&&nt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":t.selected=!1;break;default:ze(t,n,Xt,null,o,nt)}for(I in o)if(nt=o[I],ut=a[I],o.hasOwnProperty(I)&&nt!==ut&&(nt!=null||ut!=null))switch(I){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:ze(t,n,I,nt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee)&&ze(t,n,ee,null,o,nt);for(tt in o)if(nt=o[tt],ut=a[tt],o.hasOwnProperty(tt)&&nt!==ut&&(nt!=null||ut!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:ze(t,n,tt,nt,o,ut)}return;default:if(dc(n)){for(var Be in a)nt=a[Be],a.hasOwnProperty(Be)&&nt!==void 0&&!o.hasOwnProperty(Be)&&th(t,n,Be,void 0,o,nt);for(pt in o)nt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||nt===ut||nt===void 0&&ut===void 0||th(t,n,pt,nt,o,ut);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!o.hasOwnProperty(j)&&ze(t,n,j,null,o,nt);for(yt in o)nt=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||nt===ut||nt==null&&ut==null||ze(t,n,yt,nt,o,ut)}function fv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,S=c.initiatorType,b=c.duration;if(f&&b&&fv(S)){for(S=0,b=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],tt=I.startTime;if(tt>b)break;var pt=I.transferSize,yt=I.initiatorType;pt&&fv(yt)&&(I=I.responseEnd,S+=pt*(I<b?1:(b-tt)/(I-tt)))}if(--o,n+=8*(f+S)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var eh=null,nh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function hv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ih(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function Gx(){var t=window.event;return t&&t.type==="popstate"?t===ah?!1:(ah=t,!0):(ah=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(t){return mv.resolve(null).then(t).catch(Xx)}:pv;function Xx(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function gv(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var S=f.nextSibling,b=f.nodeName;f[at]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Co(t.ownerDocument.body);a=c}while(a);us(n)}function vv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rh(a),K(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[at])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function _v(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function sh(t){return t.data==="$?"||t.data==="$~"}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var lh=null;function yv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Sv(t,n,a){switch(n=tu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);K(t)}var li=new Map,Mv=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=V.d;V.d={f:jx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:eS,S:tS,M:nS};function jx(){var t=Qi.f(),n=ql();return t||n}function Zx(t){var n=Pt(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):Qi.r(t)}var ss=typeof document>"u"?null:document;function Ev(t,n,a){var o=ss;if(o&&typeof n=="string"&&n){var c=Tn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Mv.has(c)||(Mv.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),yn(n,"link",t),Gt(n),o.head.appendChild(n)))}}function Kx(t){Qi.D(t),Ev("dns-prefetch",t,null)}function Qx(t,n){Qi.C(t,n),Ev("preconnect",t,n)}function Jx(t,n,a){Qi.L(t,n,a);var o=ss;if(o&&t&&n){var c='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Tn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Tn(a.imageSizes)+'"]')):c+='[href="'+Tn(t)+'"]';var f=c;switch(n){case"style":f=os(t);break;case"script":f=ls(t)}li.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(wo(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),yn(n,"link",t),Gt(n),o.head.appendChild(n)))}}function $x(t,n){Qi.m(t,n);var a=ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Tn(o)+'"][href="'+Tn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ls(t)}if(!li.has(f)&&(t=v({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),yn(o,"link",t),Gt(o),a.head.appendChild(o)}}}function tS(t,n,a){Qi.S(t,n,a);var o=ss;if(o&&t){var c=Ft(o).hoistableStyles,f=os(t);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(wo(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&uh(t,a);var I=S=o.createElement("link");Gt(I),yn(I,"link",t),I._p=new Promise(function(tt,pt){I.onload=tt,I.onerror=pt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function eS(t,n){Qi.X(t,n);var a=ss;if(a&&t){var o=Ft(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(t=v({src:t,async:!0},n),(n=li.get(c))&&ch(t,n),f=a.createElement("script"),Gt(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function nS(t,n){Qi.M(t,n);var a=ss;if(a&&t){var o=Ft(a).hoistableScripts,c=ls(t),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=li.get(c))&&ch(t,n),f=a.createElement("script"),Gt(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Tv(t,n,a,o){var c=(c=xt.current)?eu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=Ft(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=os(a.href);var f=Ft(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(wo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||iS(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=Ft(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function os(t){return'href="'+Tn(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),yn(n,"link",a),Gt(n),t.head.appendChild(n))}function ls(t){return'[src="'+Tn(t)+'"]'}function Do(t){return"script[async]"+t}function Av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Tn(a.href)+'"]');if(o)return n.instance=o,Gt(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Gt(o),yn(o,"style",c),nu(o,a.precedence,t),n.instance=o;case"stylesheet":c=os(a.href);var f=t.querySelector(wo(c));if(f)return n.state.loading|=4,n.instance=f,Gt(f),f;o=bv(a),(c=li.get(c))&&uh(o,c),f=(t.ownerDocument||t).createElement("link"),Gt(f);var S=f;return S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),yn(f,"link",o),n.state.loading|=4,nu(f,a.precedence,t),n.instance=f;case"script":return f=ls(a.src),(c=t.querySelector(Do(f)))?(n.instance=c,Gt(c),c):(o=a,(c=li.get(f))&&(o=v({},a),ch(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),Gt(c),yn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nu(o,a.precedence,t));return n.instance}function nu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var iu=null;function Rv(t,n,a){if(iu===null){var o=new Map,c=iu=new Map;c.set(a,o)}else c=iu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[at]||f[tn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function Cv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=os(o.href),f=n.querySelector(wo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=au.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Gt(f);return}f=n.ownerDocument||n,o=bv(o),(c=li.get(c))&&uh(o,c),f=f.createElement("link"),Gt(f);var S=f;S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),yn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=au.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function sS(t,n){return t.stylesheets&&t.count===0&&su(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&su(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&fh===0&&(fh=62500*Hx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&su(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>fh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function su(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,n.forEach(oS,t),ru=null,au.call(t))}function oS(t,n){if(!(n.state.loading&4)){var a=ru.get(t);if(a)var o=a.get(null);else{a=new Map,ru.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=au.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:R,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function lS(t,n,a,o,c,f,S,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.hiddenUpdates=Wn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Dv(t,n,a,o,c,f,S,b,I,tt,pt,yt){return t=new lS(t,n,a,S,I,tt,pt,yt,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=kc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Yc(f),t}function Uv(t){return t?(t=Fr,t):Fr}function Lv(t,n,a,o,c,f){c=Uv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ea(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ta(t,o,n),a!==null&&(Fn(a,t,n),lo(a,t,n))}function Nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hh(t,n){Nv(t,n),(t=t.alternate)&&Nv(t,n)}function Ov(t){if(t.tag===13||t.tag===31){var n=nr(t,67108864);n!==null&&Fn(n,t,67108864),hh(t,67108864)}}function Pv(t){if(t.tag===13||t.tag===31){var n=Jn();n=Dr(n);var a=nr(t,n);a!==null&&Fn(a,t,n),hh(t,n)}}var ou=!0;function uS(t,n,a,o){var c=U.T;U.T=null;var f=V.p;try{V.p=2,dh(t,n,a,o)}finally{V.p=f,U.T=c}}function cS(t,n,a,o){var c=U.T;U.T=null;var f=V.p;try{V.p=8,dh(t,n,a,o)}finally{V.p=f,U.T=c}}function dh(t,n,a,o){if(ou){var c=ph(o);if(c===null)$f(t,n,o,lu,a),Bv(t,o);else if(hS(c,t,n,a,o))o.stopPropagation();else if(Bv(t,o),n&4&&-1<fS.indexOf(t)){for(;c!==null;){var f=Pt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Jt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var I=1<<31-Qt(S);b.entanglements[1]|=I,S&=~I}Ci(f),(Ae&6)===0&&(Xl=O()+500,bo(0))}}break;case 31:case 13:b=nr(f,2),b!==null&&Fn(b,f,2),ql(),hh(f,2)}if(f=ph(o),f===null&&$f(t,n,o,lu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function ph(t){return t=mc(t),mh(t)}var lu=null;function mh(t){if(lu=null,t=Dt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lu=t,null}function zv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case bt:return 2;case Tt:return 8;case wt:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var gh=!1,Pa=null,za=null,Ba=null,Lo=new Map,No=new Map,Ia=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bv(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Pt(n),n!==null&&Ov(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hS(t,n,a,o,c){switch(n){case"focusin":return Pa=Oo(Pa,t,n,a,o,c),!0;case"dragenter":return za=Oo(za,t,n,a,o,c),!0;case"mouseover":return Ba=Oo(Ba,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Lo.set(f,Oo(Lo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,No.set(f,Oo(No.get(f)||null,t,n,a,o,c)),!0}return!1}function Iv(t){var n=Dt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ja(t.priority,function(){Pv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ja(t.priority,function(){Pv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pc=o,a.target.dispatchEvent(o),pc=null}else return n=Pt(a),n!==null&&Ov(n),t.blockedOn=a,!1;n.shift()}return!0}function Fv(t,n,a){uu(t)&&a.delete(n)}function dS(){gh=!1,Pa!==null&&uu(Pa)&&(Pa=null),za!==null&&uu(za)&&(za=null),Ba!==null&&uu(Ba)&&(Ba=null),Lo.forEach(Fv),No.forEach(Fv)}function cu(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,dS)))}var fu=null;function Hv(t){fu!==t&&(fu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fu===t&&(fu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var f=Pt(a);f!==null&&(t.splice(n,3),n-=3,pf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function us(t){function n(I){return cu(I,t)}Pa!==null&&cu(Pa,t),za!==null&&cu(za,t),Ba!==null&&cu(Ba,t),Lo.forEach(n),No.forEach(n);for(var a=0;a<Ia.length;a++){var o=Ia[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&Ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Sn]||null;if(typeof f=="function")S||Hv(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)b=S.formAction;else if(mh(c)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Hv(a)}}}function Gv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vh(t){this._internalRoot=t}hu.prototype.render=vh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();Lv(a,o,t,n,null,null)},hu.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lv(t.current,2,null,t,null,null),ql(),n[ma]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,t),a===0&&Iv(t)}};var Vv=e.version;if(Vv!=="19.2.0")throw Error(r(527,Vv,"19.2.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var pS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Nt=du.inject(pS),Rt=du}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Zm,f=Km,S=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Dv(t,1,!1,null,null,a,o,null,c,f,S,Gv),t[ma]=n.current,Jf(t),new vh(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Zm,S=Km,b=Qm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Dv(t,1,!0,n,a??null,o,c,I,f,S,b,Gv),n.context=Uv(null),a=n.current,o=Jn(),o=Dr(o),c=Ea(o),c.callback=null,Ta(a,c,o),a=o,n.current.lanes=a,xn(n,a),Ci(n),t[ma]=n.current,Jf(t),new hu(n)},zo.version="19.2.0",zo}var Jv;function bS(){if(Jv)return xh.exports;Jv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xh.exports=TS(),xh.exports}var AS=bS();var $v="popstate";function RS(s={}){function e(r,l){let{pathname:u,search:h,hash:d}=r.location;return ld("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:jo(l)}return wS(e,i,null,s)}function Ye(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ei(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CS(){return Math.random().toString(36).substring(2,10)}function t_(s,e){return{usr:s.state,key:s.key,idx:e}}function ld(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?zs(e):e,state:i,key:e&&e.key||r||CS()}}function jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function zs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function wS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",p=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function v(){d="POP";let x=g(),_=x==null?null:x-m;m=x,p&&p({action:d,location:T.location,delta:_})}function y(x,_){d="PUSH";let L=ld(T.location,x,_);m=g()+1;let R=t_(L,m),N=T.createHref(L);try{h.pushState(R,"",N)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;l.location.assign(N)}u&&p&&p({action:d,location:T.location,delta:1})}function M(x,_){d="REPLACE";let L=ld(T.location,x,_);m=g();let R=t_(L,m),N=T.createHref(L);h.replaceState(R,"",N),u&&p&&p({action:d,location:T.location,delta:0})}function E(x){return DS(x)}let T={get action(){return d},get location(){return s(l,h)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener($v,v),p=x,()=>{l.removeEventListener($v,v),p=null}},createHref(x){return e(l,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:M,go(x){return h.go(x)}};return T}function DS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:jo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function h0(s,e,i="/"){return US(s,e,i,!1)}function US(s,e,i,r){let l=typeof e=="string"?zs(e):e,u=la(l.pathname||"/",i);if(u==null)return null;let h=d0(s);LS(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let m=kS(u);d=GS(h[p],m,r)}return d}function d0(s,e=[],i=[],r="",l=!1){let u=(h,d,p=l,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&p)return;Ye(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=sa([r,g.relativePath]),y=i.concat(g);h.children&&h.children.length>0&&(Ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),d0(h.children,e,y,v,p)),!(h.path==null&&!h.index)&&e.push({path:v,score:FS(v,h.index),routesMeta:y})};return s.forEach((h,d)=>{if(h.path===""||!h.path?.includes("?"))u(h,d);else for(let p of p0(h.path))u(h,d,!0,p)}),e}function p0(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=p0(r.join("/")),d=[];return d.push(...h.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...h),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function LS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:HS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var NS=/^:[\w-]+$/,OS=3,PS=2,zS=1,BS=10,IS=-2,e_=s=>s==="*";function FS(s,e){let i=s.split("/"),r=i.length;return i.some(e_)&&(r+=IS),e&&(r+=PS),i.filter(l=>!e_(l)).reduce((l,u)=>l+(NS.test(u)?OS:u===""?zS:BS),r)}function HS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function GS(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=Ku({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!v&&m&&i&&!r[r.length-1].route.index&&(v=Ku({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),h.push({params:l,pathname:sa([u,v.pathname]),pathnameBase:jS(sa([u,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(u=sa([u,v.pathnameBase]))}return h}function Ku(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=VS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let E=d[y]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[y];return v&&!M?m[g]=void 0:m[g]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:h,pattern:s}}function VS(s,e=!1,i=!0){Ei(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function kS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ei(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function la(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var XS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WS=s=>XS.test(s);function qS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?zs(s):s,u;if(i)if(WS(i))u=i;else{if(i.includes("//")){let h=i;i=i.replace(/\/\/+/g,"/"),Ei(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${i}`)}i.startsWith("/")?u=n_(i.substring(1),"/"):u=n_(i,e)}else u=e;return{pathname:u,search:ZS(r),hash:KS(l)}}function n_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Th(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function YS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function m0(s){let e=YS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function g0(s,e,i,r=!1){let l;typeof s=="string"?l=zs(s):(l={...s},Ye(!l.pathname||!l.pathname.includes("?"),Th("?","pathname","search",l)),Ye(!l.pathname||!l.pathname.includes("#"),Th("#","pathname","hash",l)),Ye(!l.search||!l.search.includes("#"),Th("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let v=e.length-1;if(!r&&h.startsWith("..")){let y=h.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?e[v]:"/"}let p=qS(l,d),m=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var sa=s=>s.join("/").replace(/\/\/+/g,"/"),jS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ZS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,KS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function QS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var v0=["POST","PUT","PATCH","DELETE"];new Set(v0);var JS=["GET",...v0];new Set(JS);var Bs=rt.createContext(null);Bs.displayName="DataRouter";var sc=rt.createContext(null);sc.displayName="DataRouterState";rt.createContext(!1);var _0=rt.createContext({isTransitioning:!1});_0.displayName="ViewTransition";var $S=rt.createContext(new Map);$S.displayName="Fetchers";var tM=rt.createContext(null);tM.displayName="Await";var Oi=rt.createContext(null);Oi.displayName="Navigation";var Ko=rt.createContext(null);Ko.displayName="Location";var ha=rt.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Yd=rt.createContext(null);Yd.displayName="RouteError";function eM(s,{relative:e}={}){Ye(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=rt.useContext(Oi),{hash:l,pathname:u,search:h}=Jo(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:sa([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Qo(){return rt.useContext(Ko)!=null}function Cr(){return Ye(Qo(),"useLocation() may be used only in the context of a <Router> component."),rt.useContext(Ko).location}var y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function x0(s){rt.useContext(Oi).static||rt.useLayoutEffect(s)}function nM(){let{isDataRoute:s}=rt.useContext(ha);return s?mM():iM()}function iM(){Ye(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=rt.useContext(Bs),{basename:e,navigator:i}=rt.useContext(Oi),{matches:r}=rt.useContext(ha),{pathname:l}=Cr(),u=JSON.stringify(m0(r)),h=rt.useRef(!1);return x0(()=>{h.current=!0}),rt.useCallback((p,m={})=>{if(Ei(h.current,y0),!h.current)return;if(typeof p=="number"){i.go(p);return}let g=g0(p,JSON.parse(u),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:sa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,u,l,s])}rt.createContext(null);function Jo(s,{relative:e}={}){let{matches:i}=rt.useContext(ha),{pathname:r}=Cr(),l=JSON.stringify(m0(i));return rt.useMemo(()=>g0(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function aM(s,e){return S0(s,e)}function S0(s,e,i,r,l){Ye(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=rt.useContext(Oi),{matches:h}=rt.useContext(ha),d=h[h.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let L=v&&v.path||"";M0(m,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=Cr(),M;if(e){let L=typeof e=="string"?zs(e):e;Ye(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=y;let E=M.pathname||"/",T=E;if(g!=="/"){let L=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let x=h0(s,{pathname:T});Ei(v||x!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ei(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=uM(x&&x.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:sa([g,u.encodeLocation?u.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:sa([g,u.encodeLocation?u.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),h,i,r,l);return e&&_?rt.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function rM(){let s=pM(),e=QS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=rt.createElement(rt.Fragment,null,rt.createElement("p",null,"💿 Hey developer 👋"),rt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",rt.createElement("code",{style:u},"ErrorBoundary")," or"," ",rt.createElement("code",{style:u},"errorElement")," prop on your route.")),rt.createElement(rt.Fragment,null,rt.createElement("h2",null,"Unexpected Application Error!"),rt.createElement("h3",{style:{fontStyle:"italic"}},e),i?rt.createElement("pre",{style:l},i):null,h)}var sM=rt.createElement(rM,null),oM=class extends rt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?rt.createElement(ha.Provider,{value:this.props.routeContext},rt.createElement(Yd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lM({routeContext:s,match:e,children:i}){let r=rt.useContext(Bs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),rt.createElement(ha.Provider,{value:s},i)}function uM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,h=i?.errors;if(h!=null){let g=u.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Ye(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let d=!1,p=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:y,errors:M}=i,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let m=i&&r?(g,v)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:v})}:void 0;return u.reduceRight((g,v,y)=>{let M,E=!1,T=null,x=null;i&&(M=h&&v.route.id?h[v.route.id]:void 0,T=v.route.errorElement||sM,d&&(p<0&&y===0?(M0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):p===y&&(E=!0,x=v.route.hydrateFallbackElement||null)));let _=e.concat(u.slice(0,y+1)),L=()=>{let R;return M?R=T:E?R=x:v.route.Component?R=rt.createElement(v.route.Component,null):v.route.element?R=v.route.element:R=g,rt.createElement(lM,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:i!=null},children:R})};return i&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?rt.createElement(oM,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):L()},null)}function jd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cM(s){let e=rt.useContext(Bs);return Ye(e,jd(s)),e}function fM(s){let e=rt.useContext(sc);return Ye(e,jd(s)),e}function hM(s){let e=rt.useContext(ha);return Ye(e,jd(s)),e}function Zd(s){let e=hM(s),i=e.matches[e.matches.length-1];return Ye(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function dM(){return Zd("useRouteId")}function pM(){let s=rt.useContext(Yd),e=fM("useRouteError"),i=Zd("useRouteError");return s!==void 0?s:e.errors?.[i]}function mM(){let{router:s}=cM("useNavigate"),e=Zd("useNavigate"),i=rt.useRef(!1);return x0(()=>{i.current=!0}),rt.useCallback(async(l,u={})=>{Ei(i.current,y0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var i_={};function M0(s,e,i){!e&&!i_[s]&&(i_[s]=!0,Ei(!1,i))}rt.memo(gM);function gM({routes:s,future:e,state:i,unstable_onError:r}){return S0(s,void 0,i,r,e)}function E0(s){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ye(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=rt.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=zs(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=i,M=rt.useMemo(()=>{let E=la(p,h);return E==null?null:{location:{pathname:E,search:m,hash:g,state:v,key:y},navigationType:r}},[h,p,m,g,v,y,r]);return Ei(M!=null,`<Router basename="${h}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:rt.createElement(Oi.Provider,{value:d},rt.createElement(Ko.Provider,{children:e,value:M}))}function _M({children:s,location:e}){return aM(ud(s),e)}function ud(s,e=[]){let i=[];return rt.Children.forEach(s,(r,l)=>{if(!rt.isValidElement(r))return;let u=[...e,l];if(r.type===rt.Fragment){i.push.apply(i,ud(r.props.children,u));return}Ye(r.type===E0,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=ud(r.props.children,u)),i.push(h)}),i}var Vu="get",ku="application/x-www-form-urlencoded";function oc(s){return s!=null&&typeof s.tagName=="string"}function yM(s){return oc(s)&&s.tagName.toLowerCase()==="button"}function xM(s){return oc(s)&&s.tagName.toLowerCase()==="form"}function SM(s){return oc(s)&&s.tagName.toLowerCase()==="input"}function MM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function EM(s,e){return s.button===0&&(!e||e==="_self")&&!MM(s)}var pu=null;function TM(){if(pu===null)try{new FormData(document.createElement("form"),0),pu=!1}catch{pu=!0}return pu}var bM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bh(s){return s!=null&&!bM.has(s)?(Ei(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ku}"`),null):s}function AM(s,e){let i,r,l,u,h;if(xM(s)){let d=s.getAttribute("action");r=d?la(d,e):null,i=s.getAttribute("method")||Vu,l=bh(s.getAttribute("enctype"))||ku,u=new FormData(s)}else if(yM(s)||SM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(r=p?la(p,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Vu,l=bh(s.getAttribute("formenctype"))||bh(d.getAttribute("enctype"))||ku,u=new FormData(d,s),!TM()){let{name:m,type:g,value:v}=s;if(g==="image"){let y=m?`${m}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else m&&u.append(m,v)}}else{if(oc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vu,r=null,l=ku,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function RM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&la(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function CM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function DM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let h=await CM(u,i);return h.links?h.links():[]}return[]}));return OM(r.flat(1).filter(wM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function a_(s,e,i,r,l,u){let h=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,m)=>h(p,m)||d(p,m)):u==="data"?e.filter((p,m)=>{let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(h(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function UM(s,e,{includeHydrateFallback:i}={}){return LM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function LM(s){return[...new Set(s)]}function NM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function OM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(NM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function T0(){let s=rt.useContext(Bs);return Kd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function PM(){let s=rt.useContext(sc);return Kd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Qd=rt.createContext(void 0);Qd.displayName="FrameworkContext";function b0(){let s=rt.useContext(Qd);return Kd(s,"You must render this element inside a <HydratedRouter> element"),s}function zM(s,e){let i=rt.useContext(Qd),[r,l]=rt.useState(!1),[u,h]=rt.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=e,y=rt.useRef(null);rt.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let T=_=>{_.forEach(L=>{h(L.isIntersecting)})},x=new IntersectionObserver(T,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[s]),rt.useEffect(()=>{if(r){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,y,{}]:[u,y,{onFocus:Bo(d,M),onBlur:Bo(p,E),onMouseEnter:Bo(m,M),onMouseLeave:Bo(g,E),onTouchStart:Bo(v,M)}]:[!1,y,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function BM({page:s,...e}){let{router:i}=T0(),r=rt.useMemo(()=>h0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?rt.createElement(FM,{page:s,matches:r,...e}):null}function IM(s){let{manifest:e,routeModules:i}=b0(),[r,l]=rt.useState([]);return rt.useEffect(()=>{let u=!1;return DM(s,e,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,e,i]),r}function FM({page:s,matches:e,...i}){let r=Cr(),{manifest:l,routeModules:u}=b0(),{basename:h}=T0(),{loaderData:d,matches:p}=PM(),m=rt.useMemo(()=>a_(s,e,p,l,r,"data"),[s,e,p,l,r]),g=rt.useMemo(()=>a_(s,e,p,l,r,"assets"),[s,e,p,l,r]),v=rt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!m.some(R=>R.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let x=RM(s,h,"data");return T&&E.size>0&&x.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[h,d,r,l,m,e,s,u]),y=rt.useMemo(()=>UM(g,l),[g,l]),M=IM(g);return rt.createElement(rt.Fragment,null,v.map(E=>rt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>rt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>rt.createElement("link",{key:E,nonce:i.nonce,...T})))}function HM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A0&&(window.__reactRouterVersion="7.9.6")}catch{}function GM({basename:s,children:e,window:i}){let r=rt.useRef();r.current==null&&(r.current=RS({window:i,v5Compat:!0}));let l=r.current,[u,h]=rt.useState({action:l.action,location:l.location}),d=rt.useCallback(p=>{rt.startTransition(()=>h(p))},[h]);return rt.useLayoutEffect(()=>l.listen(d),[l,d]),rt.createElement(vM,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C0=rt.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...y},M){let{basename:E}=rt.useContext(Oi),T=typeof m=="string"&&R0.test(m),x,_=!1;if(typeof m=="string"&&T&&(x=m,A0))try{let D=new URL(window.location.href),C=m.startsWith("//")?new URL(D.protocol+m):new URL(m),H=la(C.pathname,E);C.origin===D.origin&&H!=null?m=H+C.search+C.hash:_=!0}catch{Ei(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=eM(m,{relative:l}),[R,N,J]=zM(r,y),G=WM(m,{replace:h,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function z(D){e&&e(D),D.defaultPrevented||G(D)}let Z=rt.createElement("a",{...y,...J,href:x||L,onClick:_||u?e:z,ref:HM(M,N),target:p,"data-discover":!T&&i==="render"?"true":void 0});return R&&!T?rt.createElement(rt.Fragment,null,Z,rt.createElement(BM,{page:L})):Z});C0.displayName="Link";var VM=rt.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:p,...m},g){let v=Jo(h,{relative:m.relative}),y=Cr(),M=rt.useContext(sc),{navigator:E,basename:T}=rt.useContext(Oi),x=M!=null&&KM(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,R=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),R=R?R.toLowerCase():null,_=_.toLowerCase()),R&&T&&(R=la(R,T)||R);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let J=L===_||!l&&L.startsWith(_)&&L.charAt(N)==="/",G=R!=null&&(R===_||!l&&R.startsWith(_)&&R.charAt(_.length)==="/"),z={isActive:J,isPending:G,isTransitioning:x},Z=J?e:void 0,D;typeof r=="function"?D=r(z):D=[r,J?"active":null,G?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return rt.createElement(C0,{...m,"aria-current":Z,className:D,ref:g,style:C,to:h,viewTransition:d},typeof p=="function"?p(z):p)});VM.displayName="NavLink";var kM=rt.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Vu,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...y},M)=>{let E=jM(),T=ZM(d,{relative:m}),x=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&R0.test(d),L=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let N=R.nativeEvent.submitter,J=N?.getAttribute("formmethod")||h;E(N||R.currentTarget,{fetcherKey:e,method:J,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:v})};return rt.createElement("form",{ref:M,method:x,action:T,onSubmit:r?p:L,...y,"data-discover":!_&&s==="render"?"true":void 0})});kM.displayName="Form";function XM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w0(s){let e=rt.useContext(Bs);return Ye(e,XM(s)),e}function WM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=nM(),p=Cr(),m=Jo(s,{relative:u});return rt.useCallback(g=>{if(EM(g,e)){g.preventDefault();let v=i!==void 0?i:jo(p)===jo(m);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[p,d,m,i,r,e,s,l,u,h])}var qM=0,YM=()=>`__${String(++qM)}__`;function jM(){let{router:s}=w0("useSubmit"),{basename:e}=rt.useContext(Oi),i=dM();return rt.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:p,body:m}=AM(r,e);if(l.navigate===!1){let g=l.fetcherKey||YM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function ZM(s,{relative:e}={}){let{basename:i}=rt.useContext(Oi),r=rt.useContext(ha);Ye(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Jo(s||".",{relative:e})},h=Cr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:sa([i,u.pathname])),jo(u)}function KM(s,{relative:e}={}){let i=rt.useContext(_0);Ye(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=w0("useViewTransitionState"),l=Jo(s,{relative:e});if(!i.isTransitioning)return!1;let u=la(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=la(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Ku(l.pathname,h)!=null||Ku(l.pathname,u)!=null}const QM="_body_stjiy_1",JM={body:QM},$M="_container_1a637_1",tE="_fadeOut_1a637_19",eE="_bg_1a637_23",nE="_text_1a637_31",wi={container:$M,fadeOut:tE,bg:eE,text:nE},Io=({children:s,fontSize:e="clamp(2rem, 10vw, 10rem)",fontWeight:i=900,fontFamily:r="inherit",color:l="#fff",enableHover:u=!0,baseIntensity:h=.18,hoverIntensity:d=.5,fuzzRange:p=30,fps:m=60,direction:g="horizontal",transitionDuration:v=0,clickEffect:y=!1,glitchMode:M=!1,glitchInterval:E=2e3,glitchDuration:T=200,gradient:x=null,letterSpacing:_=0,className:L=""})=>{const R=rt.useRef(null);return rt.useEffect(()=>{let N,J=!1,G,z,Z;const D=R.current;return D?((async()=>{const H=D.getContext("2d");if(!H)return;const ct=r==="inherit"?window.getComputedStyle(D).fontFamily||"sans-serif":r,lt=typeof e=="number"?`${e}px`:e,ht=`${i} ${lt} ${ct}`;try{await document.fonts.load(ht)}catch{await document.fonts.ready}if(J)return;let mt;if(typeof e=="number")mt=e;else{const kt=document.createElement("span");kt.style.fontSize=e,document.body.appendChild(kt);const Nt=window.getComputedStyle(kt).fontSize;mt=parseFloat(Nt),document.body.removeChild(kt)}const U=yS.Children.toArray(s).join(""),V=document.createElement("canvas"),F=V.getContext("2d");if(!F)return;F.font=`${i} ${lt} ${ct}`,F.textBaseline="alphabetic";let gt=0;if(_!==0){for(const kt of U)gt+=F.measureText(kt).width+_;gt-=_}else gt=F.measureText(U).width;const Et=F.measureText(U),P=Et.actualBoundingBoxLeft??0,et=_!==0?gt:Et.actualBoundingBoxRight??Et.width,Mt=Et.actualBoundingBoxAscent??mt,q=Et.actualBoundingBoxDescent??mt*.2,ft=Math.ceil(_!==0?gt:P+et),xt=Math.ceil(Mt+q),At=10,Ot=ft+At;V.width=Ot,V.height=xt;const Ht=At/2;if(F.font=`${i} ${lt} ${ct}`,F.textBaseline="alphabetic",x&&Array.isArray(x)&&x.length>=2){const kt=F.createLinearGradient(0,0,Ot,0);x.forEach((Nt,Rt)=>kt.addColorStop(Rt/(x.length-1),Nt)),F.fillStyle=kt}else F.fillStyle=l;if(_!==0){let kt=Ht;for(const Nt of U)F.fillText(Nt,kt,Mt),kt+=F.measureText(Nt).width+_}else F.fillText(U,Ht-P,Mt);const ie=p+20,xe=0;D.width=Ot+ie*2,D.height=xt+xe*2,H.translate(ie,xe);const k=ie+Ht,Ne=xe,oe=k+ft,me=Ne+xt;let Vt=!1,Oe=!1,jt=!1,qt=h,B=h,A=0;const st=1e3/m,dt=()=>{!M||J||(G=setTimeout(()=>{J||(jt=!0,z=setTimeout(()=>{jt=!1,dt()},T))},E))};M&&dt();const O=kt=>{if(!J){if(kt-A<st){N=window.requestAnimationFrame(O);return}if(A=kt,H.clearRect(-p-20,-p-10,Ot+2*(p+20),xt+2*(p+10)),Oe||jt?B=1:Vt?B=d:B=h,v>0){const Nt=1/(v/st);qt<B?qt=Math.min(qt+Nt,B):qt>B&&(qt=Math.max(qt-Nt,B))}else qt=B;if(g==="horizontal")for(let Nt=0;Nt<xt;Nt++){const Rt=Math.floor(qt*(Math.random()-.5)*p);H.drawImage(V,0,Nt,Ot,1,Rt,Nt,Ot,1)}else if(g==="vertical")for(let Nt=0;Nt<Ot;Nt++){const Rt=Math.floor(qt*(Math.random()-.5)*p);H.drawImage(V,Nt,0,1,xt,Nt,Rt,1,xt)}else{for(let Rt=0;Rt<xt;Rt++){const Yt=Math.floor(qt*(Math.random()-.5)*p);H.drawImage(V,0,Rt,Ot,1,Yt,Rt,Ot,1)}const Nt=H.getImageData(0,0,Ot+p,xt+p);H.clearRect(-p-20,-p-10,Ot+2*(p+20),xt+2*(p+10)),H.putImageData(Nt,0,0);for(let Rt=0;Rt<Ot+p;Rt++){const Yt=Math.floor(qt*(Math.random()-.5)*p*.5),Qt=H.getImageData(Rt,0,1,xt+p);H.clearRect(Rt,-p,1,xt+2*p),H.putImageData(Qt,Rt,Yt)}}N=window.requestAnimationFrame(O)}};N=window.requestAnimationFrame(O);const Q=(kt,Nt)=>kt>=k&&kt<=oe&&Nt>=Ne&&Nt<=me,bt=kt=>{if(!u)return;const Nt=D.getBoundingClientRect(),Rt=kt.clientX-Nt.left,Yt=kt.clientY-Nt.top;Vt=Q(Rt,Yt)},Tt=()=>{Vt=!1},wt=()=>{y&&(Oe=!0,clearTimeout(Z),Z=setTimeout(()=>{Oe=!1},150))},Zt=kt=>{if(!u)return;kt.preventDefault();const Nt=D.getBoundingClientRect(),Rt=kt.touches[0],Yt=Rt.clientX-Nt.left,Qt=Rt.clientY-Nt.top;Vt=Q(Yt,Qt)},Ct=()=>{Vt=!1};u&&(D.addEventListener("mousemove",bt),D.addEventListener("mouseleave",Tt),D.addEventListener("touchmove",Zt,{passive:!1}),D.addEventListener("touchend",Ct)),y&&D.addEventListener("click",wt);const zt=()=>{window.cancelAnimationFrame(N),clearTimeout(G),clearTimeout(z),clearTimeout(Z),u&&(D.removeEventListener("mousemove",bt),D.removeEventListener("mouseleave",Tt),D.removeEventListener("touchmove",Zt),D.removeEventListener("touchend",Ct)),y&&D.removeEventListener("click",wt)};D.cleanupFuzzyText=zt})(),()=>{J=!0,window.cancelAnimationFrame(N),clearTimeout(G),clearTimeout(z),clearTimeout(Z),D&&D.cleanupFuzzyText&&D.cleanupFuzzyText()}):void 0},[s,e,i,r,l,u,h,d,p,m,g,v,y,M,E,T,x,_]),be.jsx("canvas",{ref:R,className:L})};var mu={},r_;function iE(){if(r_)return mu;r_=1,mu.match=u,mu.parse=h;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function u(g,v){return h(g).some(function(y){var M=y.inverse,E=y.type==="all"||v.type===y.type;if(E&&M||!(E||M))return!1;var T=y.expressions.every(function(x){var _=x.feature,L=x.modifier,R=x.value,N=v[_];if(!N)return!1;switch(_){case"orientation":case"scan":return N.toLowerCase()===R.toLowerCase();case"width":case"height":case"device-width":case"device-height":R=m(R),N=m(N);break;case"resolution":R=p(R),N=p(N);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":R=d(R),N=d(N);break;case"grid":case"color":case"color-index":case"monochrome":R=parseInt(R,10)||1,N=parseInt(N,10)||0;break}switch(L){case"min":return N>=R;case"max":return N<=R;default:return N===R}});return T&&!M||!T&&M})}function h(g){return g.split(",").map(function(v){v=v.trim();var y=v.match(s),M=y[1],E=y[2],T=y[3]||"",x={};return x.inverse=!!M&&M.toLowerCase()==="not",x.type=E?E.toLowerCase():"all",T=T.match(/\([^\)]+\)/g)||[],x.expressions=T.map(function(_){var L=_.match(e),R=L[1].toLowerCase().match(i);return{modifier:R[1],feature:R[2],value:L[2]}}),x})}function d(g){var v=Number(g),y;return v||(y=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=y[1]/y[2]),v}function p(g){var v=parseFloat(g),y=String(g).match(l)[1];switch(y){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function m(g){var v=parseFloat(g),y=String(g).match(r)[1];switch(y){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return mu}var Ah,s_;function aE(){if(s_)return Ah;s_=1;var s=iE().match,e=typeof window<"u"?window.matchMedia:null;function i(l,u,h){var d=this,p;e&&!h&&(p=e.call(window,l)),p?(this.matches=p.matches,this.media=p.media,p.addListener(v)):(this.matches=s(l,u),this.media=l),this.addListener=m,this.removeListener=g,this.dispose=y;function m(M){p&&p.addListener(M)}function g(M){p&&p.removeListener(M)}function v(M){d.matches=M.matches,d.media=M.media}function y(){p&&p.removeListener(v)}}function r(l,u,h){return new i(l,u,h)}return Ah=r,Ah}var rE=aE();const sE=Wd(rE);var oE=/[A-Z]/g,lE=/^ms-/,Rh={};function uE(s){return"-"+s.toLowerCase()}function D0(s){if(Rh.hasOwnProperty(s))return Rh[s];var e=s.replace(oE,uE);return Rh[s]=lE.test(e)?"-"+e:e}function cE(s,e){if(s===e)return!0;if(!s||!e)return!1;const i=Object.keys(s),r=Object.keys(e),l=i.length;if(r.length!==l)return!1;for(let u=0;u<l;u++){const h=i[u];if(s[h]!==e[h]||!Object.prototype.hasOwnProperty.call(e,h))return!1}return!0}var Ch={exports:{}},wh,o_;function fE(){if(o_)return wh;o_=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wh=s,wh}var Dh,l_;function hE(){if(l_)return Dh;l_=1;var s=fE();function e(){}function i(){}return i.resetWarningCache=e,Dh=function(){function r(h,d,p,m,g,v){if(v!==s){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:e};return u.PropTypes=u,u},Dh}var u_;function dE(){return u_||(u_=1,Ch.exports=hE()()),Ch.exports}var pE=dE();const Re=Wd(pE),Dn=Re.oneOfType([Re.string,Re.number]),U0={all:Re.bool,grid:Re.bool,aural:Re.bool,braille:Re.bool,handheld:Re.bool,print:Re.bool,projection:Re.bool,screen:Re.bool,tty:Re.bool,tv:Re.bool,embossed:Re.bool},mE={orientation:Re.oneOf(["portrait","landscape"]),scan:Re.oneOf(["progressive","interlace"]),aspectRatio:Re.string,deviceAspectRatio:Re.string,height:Dn,deviceHeight:Dn,width:Dn,deviceWidth:Dn,color:Re.bool,colorIndex:Re.bool,monochrome:Re.bool,resolution:Dn,type:Object.keys(U0)},{type:t2,...gE}=mE,vE={minAspectRatio:Re.string,maxAspectRatio:Re.string,minDeviceAspectRatio:Re.string,maxDeviceAspectRatio:Re.string,minHeight:Dn,maxHeight:Dn,minDeviceHeight:Dn,maxDeviceHeight:Dn,minWidth:Dn,maxWidth:Dn,minDeviceWidth:Dn,maxDeviceWidth:Dn,minColor:Re.number,maxColor:Re.number,minColorIndex:Re.number,maxColorIndex:Re.number,minMonochrome:Re.number,maxMonochrome:Re.number,minResolution:Dn,maxResolution:Dn,...gE},_E={...U0,...vE};var yE={all:_E};const xE=s=>`not ${s}`,SE=(s,e)=>{const i=D0(s);return typeof e=="number"&&(e=`${e}px`),e===!0?i:e===!1?xE(i):`(${i}: ${e})`},ME=s=>s.join(" and "),EE=s=>{const e=[];return Object.keys(yE.all).forEach(i=>{const r=s[i];r!=null&&e.push(SE(i,r))}),ME(e)},TE=rt.createContext(void 0),bE=s=>s.query||EE(s),c_=s=>s?Object.keys(s).reduce((i,r)=>(i[D0(r)]=s[r],i),{}):void 0,L0=()=>{const s=rt.useRef(!1);return rt.useEffect(()=>{s.current=!0},[]),s.current},AE=s=>{const e=rt.useContext(TE),i=()=>c_(s)||c_(e),[r,l]=rt.useState(i);return rt.useEffect(()=>{const u=i();cE(r,u)||l(u)},[s,e]),r},RE=s=>{const e=()=>bE(s),[i,r]=rt.useState(e);return rt.useEffect(()=>{const l=e();i!==l&&r(l)},[s]),i},CE=(s,e)=>{const i=()=>sE(s,e||{},!!e),[r,l]=rt.useState(i),u=L0();return rt.useEffect(()=>{if(u){const h=i();return l(h),()=>{h&&h.dispose()}}},[s,e]),r},wE=s=>{const[e,i]=rt.useState(s.matches);return rt.useEffect(()=>{const r=l=>{i(l.matches)};return s.addListener(r),i(s.matches),()=>{s.removeListener(r)}},[s]),e},DE=(s,e,i)=>{const r=AE(e),l=RE(s);if(!l)throw new Error("Invalid or missing MediaQuery!");const u=CE(l,r),h=wE(u),d=L0();return rt.useEffect(()=>{d&&i&&i(h)},[h]),rt.useEffect(()=>()=>{u&&u.dispose()},[]),h},Uh=({children:s,device:e,onChange:i,...r})=>{const l=DE(r,e,i);return typeof s=="function"?s(l):l?s:null},Lh=({glitchColors:s=["#2b4539","#61dca3","#61b3dc"],className:e="",glitchSpeed:i=50,centerVignette:r=!1,outerVignette:l=!0,smooth:u=!0,characters:h="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"})=>{const d=rt.useRef(null),p=rt.useRef(null),m=rt.useRef([]),g=rt.useRef({columns:0,rows:0}),v=rt.useRef(null),y=rt.useRef(Date.now()),M=Array.from(h),E=16,T=10,x=20,_=()=>M[Math.floor(Math.random()*M.length)],L=()=>s[Math.floor(Math.random()*s.length)],R=U=>{const V=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;U=U.replace(V,(gt,Et,P,et)=>Et+Et+P+P+et+et);const F=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(U);return F?{r:parseInt(F[1],16),g:parseInt(F[2],16),b:parseInt(F[3],16)}:null},N=(U,V,F)=>{const gt={r:Math.round(U.r+(V.r-U.r)*F),g:Math.round(U.g+(V.g-U.g)*F),b:Math.round(U.b+(V.b-U.b)*F)};return`rgb(${gt.r}, ${gt.g}, ${gt.b})`},J=(U,V)=>{const F=Math.ceil(U/T),gt=Math.ceil(V/x);return{columns:F,rows:gt}},G=(U,V)=>{g.current={columns:U,rows:V};const F=U*V;m.current=Array.from({length:F},()=>({char:_(),color:L(),targetColor:L(),colorProgress:1}))},z=()=>{const U=d.current;if(!U)return;const V=U.parentElement;if(!V)return;const F=window.devicePixelRatio||1,gt=V.getBoundingClientRect();U.width=gt.width*F,U.height=gt.height*F,U.style.width=`${gt.width}px`,U.style.height=`${gt.height}px`,v.current&&v.current.setTransform(F,0,0,F,0,0);const{columns:Et,rows:P}=J(gt.width,gt.height);G(Et,P),Z()},Z=()=>{if(!v.current||m.current.length===0)return;const U=v.current,{width:V,height:F}=d.current.getBoundingClientRect();U.clearRect(0,0,V,F),U.font=`${E}px monospace`,U.textBaseline="top",m.current.forEach((gt,Et)=>{const P=Et%g.current.columns*T,et=Math.floor(Et/g.current.columns)*x;U.fillStyle=gt.color,U.fillText(gt.char,P,et)})},D=()=>{if(!m.current||m.current.length===0)return;const U=Math.max(1,Math.floor(m.current.length*.05));for(let V=0;V<U;V++){const F=Math.floor(Math.random()*m.current.length);m.current[F]&&(m.current[F].char=_(),m.current[F].targetColor=L(),u?m.current[F].colorProgress=0:(m.current[F].color=m.current[F].targetColor,m.current[F].colorProgress=1))}},C=()=>{let U=!1;m.current.forEach(V=>{if(V.colorProgress<1){V.colorProgress+=.05,V.colorProgress>1&&(V.colorProgress=1);const F=R(V.color),gt=R(V.targetColor);F&&gt&&(V.color=N(F,gt,V.colorProgress),U=!0)}}),U&&Z()},H=()=>{const U=Date.now();U-y.current>=i&&(D(),Z(),y.current=U),u&&C(),p.current=requestAnimationFrame(H)};rt.useEffect(()=>{const U=d.current;if(!U)return;v.current=U.getContext("2d"),z(),H();let V;const F=()=>{clearTimeout(V),V=setTimeout(()=>{cancelAnimationFrame(p.current),z(),H()},100)};return window.addEventListener("resize",F),()=>{cancelAnimationFrame(p.current),window.removeEventListener("resize",F)}},[i,u]);const ct={position:"relative",width:"100%",height:"100%",backgroundColor:"#000000",overflow:"hidden"},lt={display:"block",width:"100%",height:"100%"},ht={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)"},mt={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)"};return be.jsxs("div",{style:ct,className:e,children:[be.jsx("canvas",{ref:d,style:lt}),l&&be.jsx("div",{style:ht}),r&&be.jsx("div",{style:mt})]})};function UE({fadeOut:s=!1}){return be.jsxs("div",{className:`${wi.container} ${s?wi.fadeOut:""}`,children:[be.jsxs(Uh,{maxWidth:700,children:[be.jsx("div",{className:wi.bg,children:be.jsx(Lh,{glitchColors:["#523cb6","#1b047e","#9f89ff"],glitchSpeed:50,centerVignette:!0,outerVignette:!0,smooth:!0})}),be.jsx(Io,{className:wi.text,baseIntensity:.05,enableHover:!1,glitchMode:!0,children:"Loading,"}),be.jsx(Io,{className:wi.text,baseIntensity:.08,enableHover:!1,glitchMode:!0,children:"Please Wait."})]}),be.jsxs(Uh,{minWidth:700.5,maxWidth:1279,children:[be.jsx("div",{className:wi.bg,children:be.jsx(Lh,{glitchColors:["#523cb6","#1b047e","#9f89ff"],glitchSpeed:50,centerVignette:!0,outerVignette:!0,smooth:!0})}),be.jsx(Io,{className:wi.text,baseIntensity:.08,hoverIntensity:.45,enableHover:!0,glitchMode:!0,children:"Loading,"}),be.jsx(Io,{className:wi.text,baseIntensity:.1,enableHover:!1,glitchMode:!0,children:"Please Wait."})]}),be.jsxs(Uh,{minWidth:1279.5,children:[be.jsx("div",{className:wi.bg,children:be.jsx(Lh,{glitchColors:["#523cb6","#1b047e","#9f89ff"],glitchSpeed:50,centerVignette:!0,outerVignette:!0,smooth:!0})}),be.jsx(Io,{className:wi.text,baseIntensity:.2,hoverIntensity:.45,enableHover:!0,glitchMode:!0,children:"Loading, Please Wait..."})]})]})}const LE=2e3,NE=1500;function OE(){const[s,e]=rt.useState(!0),[i,r]=rt.useState(!1),l=rt.useRef(performance.now());return rt.useEffect(()=>{let u,h;const d=()=>{const p=performance.now()-l.current,m=Math.max(0,LE-p);u=window.setTimeout(()=>{r(!0),h=window.setTimeout(()=>{e(!1)},NE)},m)};return document.readyState==="complete"?(d(),()=>{u&&window.clearTimeout(u),h&&window.clearTimeout(h)}):(window.addEventListener("load",d),()=>{window.removeEventListener("load",d),u&&window.clearTimeout(u),h&&window.clearTimeout(h)})},[]),{showLoading:s,fadeOut:i}}const PE="_bg_i9rov_1",zE={bg:PE};const Jd="167",BE=0,f_=1,IE=2,N0=1,FE=2,ia=3,Za=0,kn=1,aa=2,Ya=0,Cs=1,cd=2,h_=3,d_=4,HE=5,Er=100,GE=101,VE=102,kE=103,XE=104,WE=200,qE=201,YE=202,jE=203,fd=204,hd=205,ZE=206,KE=207,QE=208,JE=209,$E=210,tT=211,eT=212,nT=213,iT=214,aT=0,rT=1,sT=2,Qu=3,oT=4,lT=5,uT=6,cT=7,O0=0,fT=1,hT=2,ja=0,dT=1,pT=2,mT=3,gT=4,vT=5,_T=6,yT=7,P0=300,Us=301,Ls=302,dd=303,pd=304,lc=306,md=1e3,Si=1001,gd=1002,Vn=1003,xT=1004,gu=1005,Un=1006,Nh=1007,br=1008,ua=1009,z0=1010,B0=1011,Zo=1012,$d=1013,Rr=1014,Ni=1015,Is=1016,tp=1017,ep=1018,Ns=1020,I0=35902,F0=1021,H0=1022,ci=1023,G0=1024,V0=1025,ws=1026,Os=1027,k0=1028,np=1029,X0=1030,ip=1031,ap=1033,Xu=33776,Wu=33777,qu=33778,Yu=33779,vd=35840,_d=35841,yd=35842,xd=35843,Sd=36196,Md=37492,Ed=37496,Td=37808,bd=37809,Ad=37810,Rd=37811,Cd=37812,wd=37813,Dd=37814,Ud=37815,Ld=37816,Nd=37817,Od=37818,Pd=37819,zd=37820,Bd=37821,ju=36492,Id=36494,Fd=36495,W0=36283,Hd=36284,Gd=36285,Vd=36286,ST=3200,MT=3201,ET=0,TT=1,qa="",Di="srgb",Qa="srgb-linear",rp="display-p3",uc="display-p3-linear",Ju="linear",ke="srgb",$u="rec709",tc="p3",cs=7680,p_=519,bT=512,AT=513,RT=514,q0=515,CT=516,wT=517,DT=518,UT=519,m_=35044,g_="300 es",ra=2e3,ec=2001;class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,kd=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Gn(s,e,i){return Math.max(e,Math.min(i,s))}function LT(s,e){return(s%e+e)%e}function Ph(s,e,i){return(1-i)*s+i*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ae{constructor(e=0,i=0){ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(e,i,r,l,u,h,d,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],y=r[2],M=r[5],E=r[8],T=l[0],x=l[3],_=l[6],L=l[1],R=l[4],N=l[7],J=l[2],G=l[5],z=l[8];return u[0]=h*T+d*L+p*J,u[3]=h*x+d*R+p*G,u[6]=h*_+d*N+p*z,u[1]=m*T+g*L+v*J,u[4]=m*x+g*R+v*G,u[7]=m*_+g*N+v*z,u[2]=y*T+M*L+E*J,u[5]=y*x+M*R+E*G,u[8]=y*_+M*N+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,y=d*p-g*u,M=m*u-h*p,E=i*v+r*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(l*m-g*r)*T,e[2]=(d*r-l*h)*T,e[3]=y*T,e[4]=(g*i-l*p)*T,e[5]=(l*u-d*i)*T,e[6]=M*T,e[7]=(r*p-m*i)*T,e[8]=(h*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(zh.makeScale(e,i)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,i){return this.premultiply(zh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new ce;function Y0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function NT(){const s=nc("canvas");return s.style.display="block",s}const v_={};function Yo(s){s in v_||(v_[s]=!0,console.warn(s))}function OT(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const __=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),y_=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Qa]:{transfer:Ju,primaries:$u,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Di]:{transfer:ke,primaries:$u,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[uc]:{transfer:Ju,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(y_),fromReference:s=>s.applyMatrix3(__)},[rp]:{transfer:ke,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(y_),fromReference:s=>s.applyMatrix3(__).convertLinearToSRGB()}},PT=new Set([Qa,uc]),we={enabled:!0,_workingColorSpace:Qa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!PT.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,i){if(this.enabled===!1||e===i||!e||!i)return s;const r=Ho[e].toReference,l=Ho[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ho[s].primaries},getTransfer:function(s){return s===qa?Ju:Ho[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ho[e].luminanceCoefficients)}};function Ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class zT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=nc("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ds(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ds(i[r]/255)*255):i[r]=Ds(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BT=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Ih(l[h].image)):u.push(Ih(l[h]))}else u=Ih(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IT=0;class Ln extends Fs{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=Si,l=Si,u=Un,h=br,d=ci,p=ua,m=Ln.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=$o(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=P0;Ln.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],y=p[1],M=p[5],E=p[9],T=p[2],x=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(E+x)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(m+1)/2,N=(M+1)/2,J=(_+1)/2,G=(g+y)/4,z=(v+T)/4,Z=(E+x)/4;return R>N&&R>J?R<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(R),l=G/r,u=z/r):N>J?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=G/l,u=Z/l):J<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(J),r=z/u,l=Z/u),this.set(r,l,u,i),this}let L=Math.sqrt((x-E)*(x-E)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-T)/L,this.z=(y-g)/L,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FT extends Fs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new j0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends FT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Z0 extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const y=u[h+0],M=u[h+1],E=u[h+2],T=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(v!==T||p!==y||m!==M||g!==E){let x=1-d;const _=p*y+m*M+g*E+v*T,L=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const J=Math.sqrt(R),G=Math.atan2(J,_*L);x=Math.sin(x*G)/J,d=Math.sin(d*G)/J}const N=d*L;if(p=p*x+y*N,m=m*x+M*N,g=g*x+E*N,v=v*x+T*N,x===1-d){const J=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=J,m*=J,g*=J,v*=J}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[h],y=u[h+1],M=u[h+2],E=u[h+3];return e[i]=d*E+g*v+p*M-m*y,e[i+1]=p*E+g*y+m*v-d*M,e[i+2]=m*E+g*M+d*y-p*v,e[i+3]=g*E-d*v-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),y=p(r/2),M=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=y*g*v+m*M*E,this._y=m*M*v-y*g*E,this._z=m*g*E+y*M*v,this._w=m*g*v-y*M*E;break;case"YXZ":this._x=y*g*v+m*M*E,this._y=m*M*v-y*g*E,this._z=m*g*E-y*M*v,this._w=m*g*v+y*M*E;break;case"ZXY":this._x=y*g*v-m*M*E,this._y=m*M*v+y*g*E,this._z=m*g*E+y*M*v,this._w=m*g*v-y*M*E;break;case"ZYX":this._x=y*g*v-m*M*E,this._y=m*M*v+y*g*E,this._z=m*g*E-y*M*v,this._w=m*g*v+y*M*E;break;case"YZX":this._x=y*g*v+m*M*E,this._y=m*M*v+y*g*E,this._z=m*g*E-y*M*v,this._w=m*g*v-y*M*E;break;case"XZY":this._x=y*g*v-m*M*E,this._y=m*M*v-y*g*E,this._z=m*g*E+y*M*v,this._w=m*g*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new ot,x_=new tl;class el{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vu.copy(r.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),_u.subVectors(this.max,Go),hs.subVectors(e.a,Go),ds.subVectors(e.b,Go),ps.subVectors(e.c,Go),Ha.subVectors(ds,hs),Ga.subVectors(ps,ds),mr.subVectors(hs,ps);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-mr.z,mr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,mr.z,0,-mr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-mr.y,mr.x,0];return!Hh(i,hs,ds,ps,_u)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,hs,ds,ps,_u))?!1:(yu.crossVectors(Ha,Ga),i=[yu.x,yu.y,yu.z],Hh(i,hs,ds,ps,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],vi=new ot,vu=new el,hs=new ot,ds=new ot,ps=new ot,Ha=new ot,Ga=new ot,mr=new ot,Go=new ot,_u=new ot,yu=new ot,gr=new ot;function Hh(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){gr.fromArray(s,u);const d=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),p=e.dot(gr),m=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const GT=new el,Vo=new ot,Gh=new ot;class cc{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):GT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Gh)),this.expandByPoint(Vo.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new ot,Vh=new ot,xu=new ot,Va=new ot,kh=new ot,Su=new ot,Xh=new ot;class K0{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Vh.copy(e).add(i).multiplyScalar(.5),xu.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(Vh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(xu),d=Va.dot(this.direction),p=-Va.dot(xu),m=Va.lengthSq(),g=Math.abs(1-h*h);let v,y,M,E;if(g>0)if(v=h*p-d,y=h*d-p,E=u*g,v>=0)if(y>=-E)if(y<=E){const T=1/g;v*=T,y*=T,M=v*(v+h*y+2*d)+y*(h*v+y+2*p)+m}else y=u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*p)+m;else y=-u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*p)+m;else y<=-E?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+y*(y+2*p)+m):y<=E?(v=0,y=Math.min(Math.max(-u,-p),u),M=y*(y+2*p)+m):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+y*(y+2*p)+m);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vh).addScaledVector(xu,y),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),g>=0?(u=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){kh.subVectors(i,e),Su.subVectors(r,e),Xh.crossVectors(kh,Su);let h=this.direction.dot(Xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,e);const p=d*this.direction.dot(Su.crossVectors(Va,Su));if(p<0)return null;const m=d*this.direction.dot(kh.cross(Va));if(m<0||p+m>h)return null;const g=-d*Va.dot(Xh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,r,l,u,h,d,p,m,g,v,y,M,E,T,x){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,v,y,M,E,T,x)}set(e,i,r,l,u,h,d,p,m,g,v,y,M,E,T,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=M,_[7]=E,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=h*g,M=h*v,E=d*g,T=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+E*m,i[5]=y-T*m,i[9]=-d*p,i[2]=T-y*m,i[6]=E+M*m,i[10]=h*p}else if(e.order==="YXZ"){const y=p*g,M=p*v,E=m*g,T=m*v;i[0]=y+T*d,i[4]=E*d-M,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=T+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*g,M=p*v,E=m*g,T=m*v;i[0]=y-T*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=T-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*g,M=h*v,E=d*g,T=d*v;i[0]=p*g,i[4]=E*m-M,i[8]=y*m+T,i[1]=p*v,i[5]=T*m+y,i[9]=M*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,M=h*m,E=d*p,T=d*m;i[0]=p*g,i[4]=T-y*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*v+E,i[10]=y-T*v}else if(e.order==="XZY"){const y=h*p,M=h*m,E=d*p,T=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=y*v+T,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=T*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VT,e,kT)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ka.crossVectors(r,$n),ka.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ka.crossVectors(r,$n)),ka.normalize(),Mu.crossVectors($n,ka),l[0]=ka.x,l[4]=Mu.x,l[8]=$n.x,l[1]=ka.y,l[5]=Mu.y,l[9]=$n.y,l[2]=ka.z,l[6]=Mu.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],y=r[9],M=r[13],E=r[2],T=r[6],x=r[10],_=r[14],L=r[3],R=r[7],N=r[11],J=r[15],G=l[0],z=l[4],Z=l[8],D=l[12],C=l[1],H=l[5],ct=l[9],lt=l[13],ht=l[2],mt=l[6],U=l[10],V=l[14],F=l[3],gt=l[7],Et=l[11],P=l[15];return u[0]=h*G+d*C+p*ht+m*F,u[4]=h*z+d*H+p*mt+m*gt,u[8]=h*Z+d*ct+p*U+m*Et,u[12]=h*D+d*lt+p*V+m*P,u[1]=g*G+v*C+y*ht+M*F,u[5]=g*z+v*H+y*mt+M*gt,u[9]=g*Z+v*ct+y*U+M*Et,u[13]=g*D+v*lt+y*V+M*P,u[2]=E*G+T*C+x*ht+_*F,u[6]=E*z+T*H+x*mt+_*gt,u[10]=E*Z+T*ct+x*U+_*Et,u[14]=E*D+T*lt+x*V+_*P,u[3]=L*G+R*C+N*ht+J*F,u[7]=L*z+R*H+N*mt+J*gt,u[11]=L*Z+R*ct+N*U+J*Et,u[15]=L*D+R*lt+N*V+J*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],y=e[10],M=e[14],E=e[3],T=e[7],x=e[11],_=e[15];return E*(+u*p*v-l*m*v-u*d*y+r*m*y+l*d*M-r*p*M)+T*(+i*p*M-i*m*y+u*h*y-l*h*M+l*m*g-u*p*g)+x*(+i*m*v-i*d*M-u*h*v+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*y+l*h*v-r*h*y+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],M=e[11],E=e[12],T=e[13],x=e[14],_=e[15],L=v*x*m-T*y*m+T*p*M-d*x*M-v*p*_+d*y*_,R=E*y*m-g*x*m-E*p*M+h*x*M+g*p*_-h*y*_,N=g*T*m-E*v*m+E*d*M-h*T*M-g*d*_+h*v*_,J=E*v*p-g*T*p-E*d*y+h*T*y+g*d*x-h*v*x,G=i*L+r*R+l*N+u*J;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=L*z,e[1]=(T*y*u-v*x*u-T*l*M+r*x*M+v*l*_-r*y*_)*z,e[2]=(d*x*u-T*p*u+T*l*m-r*x*m-d*l*_+r*p*_)*z,e[3]=(v*p*u-d*y*u-v*l*m+r*y*m+d*l*M-r*p*M)*z,e[4]=R*z,e[5]=(g*x*u-E*y*u+E*l*M-i*x*M-g*l*_+i*y*_)*z,e[6]=(E*p*u-h*x*u-E*l*m+i*x*m+h*l*_-i*p*_)*z,e[7]=(h*y*u-g*p*u+g*l*m-i*y*m-h*l*M+i*p*M)*z,e[8]=N*z,e[9]=(E*v*u-g*T*u-E*r*M+i*T*M+g*r*_-i*v*_)*z,e[10]=(h*T*u-E*d*u+E*r*m-i*T*m-h*r*_+i*d*_)*z,e[11]=(g*d*u-h*v*u-g*r*m+i*v*m+h*r*M-i*d*M)*z,e[12]=J*z,e[13]=(g*T*l-E*v*l+E*r*y-i*T*y-g*r*x+i*v*x)*z,e[14]=(E*d*l-h*T*l-E*r*p+i*T*p+h*r*x-i*d*x)*z,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*y+i*d*y)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,y=u*m,M=u*g,E=u*v,T=h*g,x=h*v,_=d*v,L=p*m,R=p*g,N=p*v,J=r.x,G=r.y,z=r.z;return l[0]=(1-(T+_))*J,l[1]=(M+N)*J,l[2]=(E-R)*J,l[3]=0,l[4]=(M-N)*G,l[5]=(1-(y+_))*G,l[6]=(x+L)*G,l[7]=0,l[8]=(E+R)*z,l[9]=(x-L)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const h=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const m=1/u,g=1/h,v=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ra){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let M,E;if(d===ra)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===ec)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ra){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-u),y=(i+e)*m,M=(r+l)*g;let E,T;if(d===ra)E=(h+u)*v,T=-2*v;else if(d===ec)E=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new ot,_i=new on,VT=new ot(0,0,0),kT=new ot(1,1,1),ka=new ot,Mu=new ot,$n=new ot,S_=new on,M_=new tl;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Gn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return S_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return M_.setFromEuler(this),this.setFromQuaternion(M_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class Q0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XT=0;const E_=new ot,gs=new tl,ta=new on,Eu=new ot,ko=new ot,WT=new ot,qT=new tl,T_=new ot(1,0,0),b_=new ot(0,1,0),A_=new ot(0,0,1),R_={type:"added"},YT={type:"removed"},vs={type:"childadded",child:null},Wh={type:"childremoved",child:null};class Xn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ot,i=new ca,r=new tl,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ce}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(T_,e)}rotateY(e){return this.rotateOnAxis(b_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,i){return E_.copy(e).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(T_,e)}translateY(e){return this.translateOnAxis(b_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Eu.copy(e):Eu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(ko,Eu,this.up):ta.lookAt(Eu,ko,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ta),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R_),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(YT),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R_),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,WT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,qT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new ot(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ot,ea=new ot,qh=new ot,na=new ot,_s=new ot,ys=new ot,C_=new ot,Yh=new ot,jh=new ot,Zh=new ot;class Li{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),ea.subVectors(r,i),qh.subVectors(e,i);const h=yi.dot(yi),d=yi.dot(ea),p=yi.dot(qh),m=ea.dot(ea),g=ea.dot(qh),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(m*p-d*g)*y,E=(h*g-d*p)*y;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,na.x),p.addScaledVector(h,na.y),p.addScaledVector(d,na.z),p)}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ea.subVectors(e,i),yi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),yi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Li.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;_s.subVectors(l,r),ys.subVectors(u,r),Yh.subVectors(e,r);const p=_s.dot(Yh),m=ys.dot(Yh);if(p<=0&&m<=0)return i.copy(r);jh.subVectors(e,l);const g=_s.dot(jh),v=ys.dot(jh);if(g>=0&&v<=g)return i.copy(l);const y=p*v-g*m;if(y<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(_s,h);Zh.subVectors(e,u);const M=_s.dot(Zh),E=ys.dot(Zh);if(E>=0&&M<=E)return i.copy(u);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ys,d);const x=g*E-M*v;if(x<=0&&v-g>=0&&M-E>=0)return C_.subVectors(u,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(C_,d);const _=1/(x+T+y);return h=T*_,d=y*_,i.copy(r).addScaledVector(_s,h).addScaledVector(ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Kh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=LT(e,1),i=Gn(i,0,1),r=Gn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Kh(h,u,e+1/3),this.g=Kh(h,u,e),this.b=Kh(h,u,e-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(e,i=Di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const r=J0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Bh(e.r),this.g=Bh(e.g),this.b=Bh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return we.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Gn(Rn.r*255,0,255))*65536+Math.round(Gn(Rn.g*255,0,255))*256+Math.round(Gn(Rn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=we.workingColorSpace){return we.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Di){we.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(Tu);const r=Ph(Xa.h,Tu.h,i),l=Ph(Xa.s,Tu.s,i),u=Ph(Xa.l,Tu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=J0;let jT=0;class nl extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Cs,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Qu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fd&&(r.blendSrc=this.blendSrc),this.blendDst!==hd&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $0 extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ot,bu=new ae;class Mi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=m_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(e),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==m_&&(e.usage=this.usage),e}}class ty extends Mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ey extends Mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class oa extends Mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ZT=0;const ui=new on,Qh=new Xn,xs=new ot,ti=new el,Xo=new el,mn=new ot;class da extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?ey:ty)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new oa(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(ti.min,Xo.min),ti.expandByPoint(mn),mn.addVectors(ti.max,Xo.max),ti.expandByPoint(mn)):(ti.expandByPoint(Xo.min),ti.expandByPoint(Xo.max))}ti.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)mn.fromBufferAttribute(d,m),p&&(xs.fromBufferAttribute(e,m),mn.add(xs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<r.count;Z++)d[Z]=new ot,p[Z]=new ot;const m=new ot,g=new ot,v=new ot,y=new ae,M=new ae,E=new ae,T=new ot,x=new ot;function _(Z,D,C){m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),y.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(m),v.sub(m),M.sub(y),E.sub(y);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(H),x.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[Z].add(T),d[D].add(T),d[C].add(T),p[Z].add(x),p[D].add(x),p[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Z=0,D=L.length;Z<D;++Z){const C=L[Z],H=C.start,ct=C.count;for(let lt=H,ht=H+ct;lt<ht;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const R=new ot,N=new ot,J=new ot,G=new ot;function z(Z){J.fromBufferAttribute(l,Z),G.copy(J);const D=d[Z];R.copy(D),R.sub(J.multiplyScalar(J.dot(D))).normalize(),N.crossVectors(G,D);const H=N.dot(p[Z])<0?-1:1;h.setXYZW(Z,R.x,R.y,R.z,H)}for(let Z=0,D=L.length;Z<D;++Z){const C=L[Z],H=C.start,ct=C.count;for(let lt=H,ht=H+ct;lt<ht;lt+=3)z(e.getX(lt+0)),z(e.getX(lt+1)),z(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,p=new ot,m=new ot,g=new ot,v=new ot;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,x),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,y=new m.constructor(p.length*g);let M=0,E=0;for(let T=0,x=p.length;T<x;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*g;for(let _=0;_<g;_++)y[E++]=m[M++]}return new Mi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new da,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const y=m[g],M=e(y,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,y=m.length;v<y;v++){const M=m[v];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w_=new on,vr=new K0,Au=new cc,D_=new ot,Ss=new ot,Ms=new ot,Es=new ot,Jh=new ot,Ru=new ot,Cu=new ae,wu=new ae,Du=new ae,U_=new ot,L_=new ot,N_=new ot,Uu=new ot,Lu=new ot;class fi extends Xn{constructor(e=new da,i=new $0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Ru.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Jh.fromBufferAttribute(v,e),h?Ru.addScaledVector(Jh,g):Ru.addScaledVector(Jh.sub(i),g))}i.add(Ru)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(u),vr.copy(e.ray).recast(e.near),!(Au.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Au,D_)===null||vr.origin.distanceToSquared(D_)>(e.far-e.near)**2))&&(w_.copy(u).invert(),vr.copy(e.ray).applyMatrix4(w_),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=y.length;E<T;E++){const x=y[E],_=h[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let N=L,J=R;N<J;N+=3){const G=d.getX(N),z=d.getX(N+1),Z=d.getX(N+2);l=Nu(this,_,e,r,m,g,v,G,z,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let x=E,_=T;x<_;x+=3){const L=d.getX(x),R=d.getX(x+1),N=d.getX(x+2);l=Nu(this,h,e,r,m,g,v,L,R,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,T=y.length;E<T;E++){const x=y[E],_=h[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let N=L,J=R;N<J;N+=3){const G=N,z=N+1,Z=N+2;l=Nu(this,_,e,r,m,g,v,G,z,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let x=E,_=T;x<_;x+=3){const L=x,R=x+1,N=x+2;l=Nu(this,h,e,r,m,g,v,L,R,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function KT(s,e,i,r,l,u,h,d){let p;if(e.side===kn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Za,d),p===null)return null;Lu.copy(d),Lu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Lu);return m<i.near||m>i.far?null:{distance:m,point:Lu.clone(),object:s}}function Nu(s,e,i,r,l,u,h,d,p,m){s.getVertexPosition(d,Ss),s.getVertexPosition(p,Ms),s.getVertexPosition(m,Es);const g=KT(s,e,i,r,Ss,Ms,Es,Uu);if(g){l&&(Cu.fromBufferAttribute(l,d),wu.fromBufferAttribute(l,p),Du.fromBufferAttribute(l,m),g.uv=Li.getInterpolation(Uu,Ss,Ms,Es,Cu,wu,Du,new ae)),u&&(Cu.fromBufferAttribute(u,d),wu.fromBufferAttribute(u,p),Du.fromBufferAttribute(u,m),g.uv1=Li.getInterpolation(Uu,Ss,Ms,Es,Cu,wu,Du,new ae)),h&&(U_.fromBufferAttribute(h,d),L_.fromBufferAttribute(h,p),N_.fromBufferAttribute(h,m),g.normal=Li.getInterpolation(Uu,Ss,Ms,Es,U_,L_,N_,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new ot,materialIndex:0};Li.getNormal(Ss,Ms,Es,v.normal),g.face=v}return g}class il extends da{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,r,i,e,h,u,0),E("z","y","x",1,-1,r,i,-e,h,u,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new oa(m,3)),this.setAttribute("normal",new oa(g,3)),this.setAttribute("uv",new oa(v,2));function E(T,x,_,L,R,N,J,G,z,Z,D){const C=N/z,H=J/Z,ct=N/2,lt=J/2,ht=G/2,mt=z+1,U=Z+1;let V=0,F=0;const gt=new ot;for(let Et=0;Et<U;Et++){const P=Et*H-lt;for(let et=0;et<mt;et++){const Mt=et*C-ct;gt[T]=Mt*L,gt[x]=P*R,gt[_]=ht,m.push(gt.x,gt.y,gt.z),gt[T]=0,gt[x]=0,gt[_]=G>0?1:-1,g.push(gt.x,gt.y,gt.z),v.push(et/z),v.push(1-Et/Z),V+=1}}for(let Et=0;Et<Z;Et++)for(let P=0;P<z;P++){const et=y+P+mt*Et,Mt=y+P+mt*(Et+1),q=y+(P+1)+mt*(Et+1),ft=y+(P+1)+mt*Et;p.push(et,Mt,ft),p.push(Mt,q,ft),F+=6}d.addGroup(M,F,D),M+=F,y+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(s){const e={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)e[l]=r[l]}return e}function QT(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function ny(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const JT={clone:Ps,merge:wn};var $T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=QT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ic extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new ot,O_=new ae,P_=new ae;class xi extends ic{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z)}getViewSize(e,i){return this.getViewBounds(e,O_,P_),i.subVectors(P_,O_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Oh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,bs=1;class eb extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(Ts,bs,e,i);l.layers=this.layers,this.add(l);const u=new xi(Ts,bs,e,i);u.layers=this.layers,this.add(u);const h=new xi(Ts,bs,e,i);h.layers=this.layers,this.add(h);const d=new xi(Ts,bs,e,i);d.layers=this.layers,this.add(d);const p=new xi(Ts,bs,e,i);p.layers=this.layers,this.add(p);const m=new xi(Ts,bs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,y,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class iy extends Ln{constructor(e,i,r,l,u,h,d,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:Us,super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nb extends Ka{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new iy(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Un}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),u=new fa({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ya});u.uniforms.tEquirect.value=i;const h=new fi(l,u),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Un),new eb(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const $h=new ot,ib=new ot,ab=new ce;class Sr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=$h.subVectors(r,i).cross(ib.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta($h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ab.getNormalMatrix(e),l=this.coplanarPoint($h).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new cc,Ou=new ot;class ay{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,h=new Sr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],y=l[7],M=l[8],E=l[9],T=l[10],x=l[11],_=l[12],L=l[13],R=l[14],N=l[15];if(r[0].setComponents(p-u,y-m,x-M,N-_).normalize(),r[1].setComponents(p+u,y+m,x+M,N+_).normalize(),r[2].setComponents(p+h,y+g,x+E,N+L).normalize(),r[3].setComponents(p-h,y-g,x-E,N-L).normalize(),r[4].setComponents(p-d,y-v,x-T,N-R).normalize(),i===ra)r[5].setComponents(p+d,y+v,x+T,N+R).normalize();else if(i===ec)r[5].setComponents(d,v,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ou.x=l.normal.x>0?e.max.x:e.min.x,Ou.y=l.normal.y>0?e.max.y:e.min.y,Ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ry(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function rb(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p._updateRange,y=p.updateRanges;if(s.bindBuffer(m,d),v.count===-1&&y.length===0&&s.bufferSubData(m,0,g),y.length!==0){for(let M=0,E=y.length;M<E;M++){const T=y[M];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}v.count!==-1&&(s.bufferSubData(m,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}class Ar extends da{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,y=i/p,M=[],E=[],T=[],x=[];for(let _=0;_<g;_++){const L=_*y-h;for(let R=0;R<m;R++){const N=R*v-u;E.push(N,-L,0),T.push(0,0,1),x.push(R/d),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<d;L++){const R=L+m*_,N=L+m*(_+1),J=L+1+m*(_+1),G=L+1+m*_;M.push(R,N,G),M.push(N,J,G)}this.setIndex(M),this.setAttribute("position",new oa(E,3)),this.setAttribute("normal",new oa(T,3)),this.setAttribute("uv",new oa(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_A=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$A=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:sb,alphahash_pars_fragment:ob,alphamap_fragment:lb,alphamap_pars_fragment:ub,alphatest_fragment:cb,alphatest_pars_fragment:fb,aomap_fragment:hb,aomap_pars_fragment:db,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:vb,bsdfs:_b,iridescence_fragment:yb,bumpmap_pars_fragment:xb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:bb,color_pars_fragment:Ab,color_pars_vertex:Rb,color_vertex:Cb,common:wb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Lb,displacementmap_vertex:Nb,emissivemap_fragment:Ob,emissivemap_pars_fragment:Pb,colorspace_fragment:zb,colorspace_pars_fragment:Bb,envmap_fragment:Ib,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Hb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:Jb,envmap_vertex:Vb,fog_vertex:kb,fog_pars_vertex:Xb,fog_fragment:Wb,fog_pars_fragment:qb,gradientmap_pars_fragment:Yb,lightmap_pars_fragment:jb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Qb,lights_toon_fragment:$b,lights_toon_pars_fragment:tA,lights_phong_fragment:eA,lights_phong_pars_fragment:nA,lights_physical_fragment:iA,lights_physical_pars_fragment:aA,lights_fragment_begin:rA,lights_fragment_maps:sA,lights_fragment_end:oA,logdepthbuf_fragment:lA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:cA,logdepthbuf_vertex:fA,map_fragment:hA,map_pars_fragment:dA,map_particle_fragment:pA,map_particle_pars_fragment:mA,metalnessmap_fragment:gA,metalnessmap_pars_fragment:vA,morphinstance_vertex:_A,morphcolor_vertex:yA,morphnormal_vertex:xA,morphtarget_pars_vertex:SA,morphtarget_vertex:MA,normal_fragment_begin:EA,normal_fragment_maps:TA,normal_pars_fragment:bA,normal_pars_vertex:AA,normal_vertex:RA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:wA,clearcoat_normal_fragment_maps:DA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:LA,opaque_fragment:NA,packing:OA,premultiplied_alpha_fragment:PA,project_vertex:zA,dithering_fragment:BA,dithering_pars_fragment:IA,roughnessmap_fragment:FA,roughnessmap_pars_fragment:HA,shadowmap_pars_fragment:GA,shadowmap_pars_vertex:VA,shadowmap_vertex:kA,shadowmask_pars_fragment:XA,skinbase_vertex:WA,skinning_pars_vertex:qA,skinning_vertex:YA,skinnormal_vertex:jA,specularmap_fragment:ZA,specularmap_pars_fragment:KA,tonemapping_fragment:QA,tonemapping_pars_fragment:JA,transmission_fragment:$A,transmission_pars_fragment:t1,uv_pars_fragment:e1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:a1,background_vert:r1,background_frag:s1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:u1,cube_frag:c1,depth_vert:f1,depth_frag:h1,distanceRGBA_vert:d1,distanceRGBA_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:v1,linedashed_frag:_1,meshbasic_vert:y1,meshbasic_frag:x1,meshlambert_vert:S1,meshlambert_frag:M1,meshmatcap_vert:E1,meshmatcap_frag:T1,meshnormal_vert:b1,meshnormal_frag:A1,meshphong_vert:R1,meshphong_frag:C1,meshphysical_vert:w1,meshphysical_frag:D1,meshtoon_vert:U1,meshtoon_frag:L1,points_vert:N1,points_frag:O1,shadow_vert:P1,shadow_frag:z1,sprite_vert:B1,sprite_frag:I1},Bt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ui={basic:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:wn([Bt.points,Bt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:wn([Bt.common,Bt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:wn([Bt.sprite,Bt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:wn([Bt.lights,Bt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:wn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Pu={r:0,b:0,g:0},yr=new ca,F1=new on;function H1(s,e,i,r,l,u,h){const d=new Ce(0);let p=u===!0?0:1,m,g,v=null,y=0,M=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function T(L){let R=!1;const N=E(L);N===null?_(d,p):N&&N.isColor&&(_(N,1),R=!0);const J=s.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,h):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(L,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===lc)?(g===void 0&&(g=new fi(new il(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:Ps(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(J,G,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),yr.copy(R.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(yr)),g.material.toneMapped=we.getTransfer(N.colorSpace)!==ke,(v!==N||y!==N.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=N,y=N.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new fi(new Ar(2,2),new fa({name:"BackgroundMaterial",uniforms:Ps(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=we.getTransfer(N.colorSpace)!==ke,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||y!==N.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,y=N.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,R){L.getRGB(Pu,ny(s)),r.buffers.color.setClear(Pu.r,Pu.g,Pu.b,R,h)}return{getClearColor:function(){return d},setClearColor:function(L,R=1){d.set(L),p=R,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:T,addToRenderList:x}}function G1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function d(C,H,ct,lt,ht){let mt=!1;const U=v(lt,ct,H);u!==U&&(u=U,m(u.object)),mt=M(C,lt,ct,ht),mt&&E(C,lt,ct,ht),ht!==null&&e.update(ht,s.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,N(C,H,ct,lt),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,H,ct){const lt=ct.wireframe===!0;let ht=r[C.id];ht===void 0&&(ht={},r[C.id]=ht);let mt=ht[H.id];mt===void 0&&(mt={},ht[H.id]=mt);let U=mt[lt];return U===void 0&&(U=y(p()),mt[lt]=U),U}function y(C){const H=[],ct=[],lt=[];for(let ht=0;ht<i;ht++)H[ht]=0,ct[ht]=0,lt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:lt,object:C,attributes:{},index:null}}function M(C,H,ct,lt){const ht=u.attributes,mt=H.attributes;let U=0;const V=ct.getAttributes();for(const F in V)if(V[F].location>=0){const Et=ht[F];let P=mt[F];if(P===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),Et===void 0||Et.attribute!==P||P&&Et.data!==P.data)return!0;U++}return u.attributesNum!==U||u.index!==lt}function E(C,H,ct,lt){const ht={},mt=H.attributes;let U=0;const V=ct.getAttributes();for(const F in V)if(V[F].location>=0){let Et=mt[F];Et===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const P={};P.attribute=Et,Et&&Et.data&&(P.data=Et.data),ht[F]=P,U++}u.attributes=ht,u.attributesNum=U,u.index=lt}function T(){const C=u.newAttributes;for(let H=0,ct=C.length;H<ct;H++)C[H]=0}function x(C){_(C,0)}function _(C,H){const ct=u.newAttributes,lt=u.enabledAttributes,ht=u.attributeDivisors;ct[C]=1,lt[C]===0&&(s.enableVertexAttribArray(C),lt[C]=1),ht[C]!==H&&(s.vertexAttribDivisor(C,H),ht[C]=H)}function L(){const C=u.newAttributes,H=u.enabledAttributes;for(let ct=0,lt=H.length;ct<lt;ct++)H[ct]!==C[ct]&&(s.disableVertexAttribArray(ct),H[ct]=0)}function R(C,H,ct,lt,ht,mt,U){U===!0?s.vertexAttribIPointer(C,H,ct,ht,mt):s.vertexAttribPointer(C,H,ct,lt,ht,mt)}function N(C,H,ct,lt){T();const ht=lt.attributes,mt=ct.getAttributes(),U=H.defaultAttributeValues;for(const V in mt){const F=mt[V];if(F.location>=0){let gt=ht[V];if(gt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const Et=gt.normalized,P=gt.itemSize,et=e.get(gt);if(et===void 0)continue;const Mt=et.buffer,q=et.type,ft=et.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||gt.gpuType===$d;if(gt.isInterleavedBufferAttribute){const At=gt.data,Ot=At.stride,Ht=gt.offset;if(At.isInstancedInterleavedBuffer){for(let ie=0;ie<F.locationSize;ie++)_(F.location+ie,At.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ie=0;ie<F.locationSize;ie++)x(F.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let ie=0;ie<F.locationSize;ie++)R(F.location+ie,P/F.locationSize,q,Et,Ot*ft,(Ht+P/F.locationSize*ie)*ft,xt)}else{if(gt.isInstancedBufferAttribute){for(let At=0;At<F.locationSize;At++)_(F.location+At,gt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let At=0;At<F.locationSize;At++)x(F.location+At);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let At=0;At<F.locationSize;At++)R(F.location+At,P/F.locationSize,q,Et,P*ft,P/F.locationSize*At*ft,xt)}}else if(U!==void 0){const Et=U[V];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv(F.location,Et);break;case 3:s.vertexAttrib3fv(F.location,Et);break;case 4:s.vertexAttrib4fv(F.location,Et);break;default:s.vertexAttrib1fv(F.location,Et)}}}}L()}function J(){Z();for(const C in r){const H=r[C];for(const ct in H){const lt=H[ct];for(const ht in lt)g(lt[ht].object),delete lt[ht];delete H[ct]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const ct in H){const lt=H[ct];for(const ht in lt)g(lt[ht].object),delete lt[ht];delete H[ct]}delete r[C.id]}function z(C){for(const H in r){const ct=r[H];if(ct[C.id]===void 0)continue;const lt=ct[C.id];for(const ht in lt)g(lt[ht].object),delete lt[ht];delete ct[C.id]}}function Z(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:J,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:x,disableUnusedAttributes:L}}function V1(s,e,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,r,1)}function p(m,g,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)h(m[E],g[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T];for(let T=0;T<y.length;T++)i.update(E,r,y[T])}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function k1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==ci&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const z=G===Is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==ua&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ni&&!z)}function p(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,J=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:N,maxSamples:J}}function X1(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Sr,d=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,T=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!x)u?g(null):m();else{const L=u?0:r,R=L*4;let N=_.clippingState||null;p.value=N,N=g(E,y,R,M);for(let J=0;J!==R;++J)N[J]=i[J];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,M,E){const T=v!==null?v.length:0;let x=null;if(T!==0){if(x=p.value,E!==!0||x===null){const _=M+T*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,N=M;R!==T;++R,N+=4)h.copy(v[R]).applyMatrix4(L,d),h.normal.toArray(x,N),x[N+3]=h.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function W1(s){let e=new WeakMap;function i(h,d){return d===dd?h.mapping=Us:d===pd&&(h.mapping=Ls),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===dd||d===pd)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new nb(p.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class q1 extends ic{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Rs=4,z_=[.125,.215,.35,.446,.526,.582],Tr=20,td=new q1,B_=new Ce;let ed=null,nd=0,id=0,ad=!1;const Mr=(1+Math.sqrt(5))/2,As=1/Mr,I_=[new ot(-Mr,As,0),new ot(Mr,As,0),new ot(-As,0,Mr),new ot(As,0,Mr),new ot(0,Mr,-As),new ot(0,Mr,As),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=ad,e.scissorTest=!1,zu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Is,format:ci,colorSpace:Qa,depthBuffer:!1},l=H_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(u)),this._blurMaterial=j1(u,e,i)}return l}_compileMaterial(e){const i=new fi(this._lodPlanes[0],e);this._renderer.compile(i,td)}_sceneToCubeUV(e,i,r,l){const d=new xi(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(B_),g.toneMapping=ja,g.autoClear=!1;const M=new $0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new fi(new il,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(B_),T=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):L===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const R=this._cubeSize;zu(l,L*R,_>2?R:0,R,R),g.setRenderTarget(l),T&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;zu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,td)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=I_[(l-u-1)%I_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new fi(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Tr-1),T=u/E,x=isFinite(u)?1+Math.floor(g*T):Tr;x>Tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Tr}`);const _=[];let L=0;for(let z=0;z<Tr;++z){const Z=z/T,D=Math.exp(-Z*Z/2);_.push(D),z===0?L+=D:z<x&&(L+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-r;const N=this._sizeLods[l],J=3*N*(l>R-Rs?l-R+Rs:0),G=4*(this._cubeSize-N);zu(i,J,G,3*N,2*N),p.setRenderTarget(i),p.render(v,td)}}function Y1(s){const e=[],i=[],r=[];let l=s;const u=s-Rs+1+z_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-Rs?p=z_[h-s+Rs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,T=3,x=2,_=1,L=new Float32Array(T*E*M),R=new Float32Array(x*E*M),N=new Float32Array(_*E*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,Z=G>2?0:-1,D=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];L.set(D,T*E*G),R.set(y,x*E*G);const C=[G,G,G,G,G,G];N.set(C,_*E*G)}const J=new da;J.setAttribute("position",new Mi(L,T)),J.setAttribute("uv",new Mi(R,x)),J.setAttribute("faceIndex",new Mi(N,_)),e.push(J),l>Rs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function H_(s,e,i){const r=new Ka(s,e,i);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function j1(s,e,i){const r=new Float32Array(Tr),l=new ot(0,1,0);return new fa({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function G_(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function V_(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z1(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===dd||p===pd,g=p===Us||p===Ls;if(m||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new F_(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new F_(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function K1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Q1(s,e,i,r){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const T=y.morphAttributes[E];for(let x=0,_=T.length;x<_;x++)e.remove(T[x])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let x=0,_=T.length;x<_;x++)e.update(T[x],s.ARRAY_BUFFER)}}function m(v){const y=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let R=0,N=L.length;R<N;R+=3){const J=L[R+0],G=L[R+1],z=L[R+2];y.push(J,G,G,z,z,J)}}else if(E!==void 0){const L=E.array;T=E.version;for(let R=0,N=L.length/3-1;R<N;R+=3){const J=R+0,G=R+1,z=R+2;y.push(J,G,G,z,z,J)}}else return;const x=new(Y0(y)?ey:ty)(y,1);x.version=T;const _=u.get(v);_&&e.remove(_),u.set(v,x)}function g(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function J1(s,e,i){let r;function l(y){r=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function p(y,M){s.drawElements(r,M,u,y*h),i.update(M,r,1)}function m(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,y*h,E),i.update(M,r,E))}function g(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,E);let x=0;for(let _=0;_<E;_++)x+=M[_];i.update(x,r,1)}function v(y,M,E,T){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)m(y[_]/h,M[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,T,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L];for(let L=0;L<T.length;L++)i.update(_,r,T[L])}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function $1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tR(s,e,i){const r=new WeakMap,l=new fn;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),x===!0&&(N=3);let J=d.attributes.position.count*N,G=1;J>e.maxTextureSize&&(G=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const z=new Float32Array(J*G*4*v),Z=new Z0(z,J,G,v);Z.type=Ni,Z.needsUpdate=!0;const D=N*4;for(let H=0;H<v;H++){const ct=_[H],lt=L[H],ht=R[H],mt=J*G*4*H;for(let U=0;U<ct.count;U++){const V=U*D;E===!0&&(l.fromBufferAttribute(ct,U),z[mt+V+0]=l.x,z[mt+V+1]=l.y,z[mt+V+2]=l.z,z[mt+V+3]=0),T===!0&&(l.fromBufferAttribute(lt,U),z[mt+V+4]=l.x,z[mt+V+5]=l.y,z[mt+V+6]=l.z,z[mt+V+7]=0),x===!0&&(l.fromBufferAttribute(ht,U),z[mt+V+8]=l.x,z[mt+V+9]=l.y,z[mt+V+10]=l.z,z[mt+V+11]=ht.itemSize===4?l.w:1)}}y={count:v,texture:Z,size:new ae(J,G)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function eR(s,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}class sy extends Ln{constructor(e,i,r,l,u,h,d,p,m,g=ws){if(g!==ws&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ws&&(r=Rr),r===void 0&&g===Os&&(r=Ns),super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Vn,this.minFilter=p!==void 0?p:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const oy=new Ln,k_=new sy(1,1),ly=new Z0,uy=new HT,cy=new iy,X_=[],W_=[],q_=new Float32Array(16),Y_=new Float32Array(9),j_=new Float32Array(4);function Hs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=X_[l];if(u===void 0&&(u=new Float32Array(l),X_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function hn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fc(s,e){let i=W_[e];i===void 0&&(i=new Int32Array(e),W_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function nR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function iR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function rR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function sR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;j_.set(r),s.uniformMatrix2fv(this.addr,!1,j_),dn(i,r)}}function oR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;Y_.set(r),s.uniformMatrix3fv(this.addr,!1,Y_),dn(i,r)}}function lR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;q_.set(r),s.uniformMatrix4fv(this.addr,!1,q_),dn(i,r)}}function uR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function cR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function fR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function hR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function dR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function pR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function mR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function gR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function vR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(k_.compareFunction=q0,u=k_):u=oy,i.setTexture2D(e||u,l)}function _R(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||uy,l)}function yR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||cy,l)}function xR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ly,l)}function SR(s){switch(s){case 5126:return nR;case 35664:return iR;case 35665:return aR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return xR}}function MR(s,e){s.uniform1fv(this.addr,e)}function ER(s,e){const i=Hs(e,this.size,2);s.uniform2fv(this.addr,i)}function TR(s,e){const i=Hs(e,this.size,3);s.uniform3fv(this.addr,i)}function bR(s,e){const i=Hs(e,this.size,4);s.uniform4fv(this.addr,i)}function AR(s,e){const i=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function RR(s,e){const i=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function CR(s,e){const i=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function wR(s,e){s.uniform1iv(this.addr,e)}function DR(s,e){s.uniform2iv(this.addr,e)}function UR(s,e){s.uniform3iv(this.addr,e)}function LR(s,e){s.uniform4iv(this.addr,e)}function NR(s,e){s.uniform1uiv(this.addr,e)}function OR(s,e){s.uniform2uiv(this.addr,e)}function PR(s,e){s.uniform3uiv(this.addr,e)}function zR(s,e){s.uniform4uiv(this.addr,e)}function BR(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||oy,u[h])}function IR(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||uy,u[h])}function FR(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||cy,u[h])}function HR(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ly,u[h])}function GR(s){switch(s){case 5126:return MR;case 35664:return ER;case 35665:return TR;case 35666:return bR;case 35674:return AR;case 35675:return RR;case 35676:return CR;case 5124:case 35670:return wR;case 35667:case 35671:return DR;case 35668:case 35672:return UR;case 35669:case 35673:return LR;case 5125:return NR;case 36294:return OR;case 36295:return PR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return HR}}class VR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=SR(i.type)}}class kR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GR(i.type)}}class XR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function Z_(s,e){s.seq.push(e),s.map[e.id]=e}function WR(s,e,i){const r=s.name,l=r.length;for(rd.lastIndex=0;;){const u=rd.exec(r),h=rd.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Z_(i,m===void 0?new VR(d,s,e):new kR(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new XR(d),Z_(i,v)),i=v}}}class Zu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);WR(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function K_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const qR=37297;let YR=0;function jR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function ZR(s){const e=we.getPrimaries(we.workingColorSpace),i=we.getPrimaries(s);let r;switch(e===i?r="":e===tc&&i===$u?r="LinearDisplayP3ToLinearSRGB":e===$u&&i===tc&&(r="LinearSRGBToLinearDisplayP3"),s){case Qa:case uc:return[r,"LinearTransferOETF"];case Di:case rp:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Q_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+jR(s.getShaderSource(e),h)}else return l}function KR(s,e){const i=ZR(e);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function QR(s,e){let i;switch(e){case dT:i="Linear";break;case pT:i="Reinhard";break;case mT:i="OptimizedCineon";break;case gT:i="ACESFilmic";break;case _T:i="AgX";break;case yT:i="Neutral";break;case vT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bu=new ot;function JR(){we.getLuminanceCoefficients(Bu);const s=Bu.x.toFixed(4),e=Bu.y.toFixed(4),i=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $R(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function tC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function eC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function qo(s){return s!==""}function J_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(nC,aC)}const iC=new Map;function aC(s,e){let i=ue[e];if(i===void 0){const r=iC.get(e);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(i)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(s){return s.replace(rC,sC)}function sC(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function e0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===FE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function lC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function cC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case O0:e="ENVMAP_BLENDING_MULTIPLY";break;case fT:e="ENVMAP_BLENDING_MIX";break;case hT:e="ENVMAP_BLENDING_ADD";break}return e}function fC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hC(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=oC(i),m=lC(i),g=uC(i),v=cC(i),y=fC(i),M=$R(i),E=tC(u),T=l.createProgram();let x,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(x=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ue.tonemapping_pars_fragment:"",i.toneMapping!==ja?QR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,KR("linearToOutputTexel",i.outputColorSpace),JR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Xd(h),h=J_(h,i),h=$_(h,i),d=Xd(d),d=J_(d,i),d=$_(d,i),h=t0(h),d=t0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=L+x+h,N=L+_+d,J=K_(l,l.VERTEX_SHADER,R),G=K_(l,l.FRAGMENT_SHADER,N);l.attachShader(T,J),l.attachShader(T,G),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(H){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(T).trim(),lt=l.getShaderInfoLog(J).trim(),ht=l.getShaderInfoLog(G).trim();let mt=!0,U=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,J,G);else{const V=Q_(l,J,"vertex"),F=Q_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+V+`
`+F)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(lt===""||ht==="")&&(U=!1);U&&(H.diagnostics={runnable:mt,programLog:ct,vertexShader:{log:lt,prefix:x},fragmentShader:{log:ht,prefix:_}})}l.deleteShader(J),l.deleteShader(G),Z=new Zu(l,T),D=eC(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,qR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=J,this.fragmentShader=G,this}let dC=0;class pC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new mC(e),i.set(e,r)),r}}class mC{constructor(e){this.id=dC++,this.code=e,this.usedTimes=0}}function gC(s,e,i,r,l,u,h){const d=new Q0,p=new pC,m=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function x(D,C,H,ct,lt){const ht=ct.fog,mt=lt.geometry,U=D.isMeshStandardMaterial?ct.environment:null,V=(D.isMeshStandardMaterial?i:e).get(D.envMap||U),F=V&&V.mapping===lc?V.image.height:null,gt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Et=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,P=Et!==void 0?Et.length:0;let et=0;mt.morphAttributes.position!==void 0&&(et=1),mt.morphAttributes.normal!==void 0&&(et=2),mt.morphAttributes.color!==void 0&&(et=3);let Mt,q,ft,xt;if(gt){const Se=Ui[gt];Mt=Se.vertexShader,q=Se.fragmentShader}else Mt=D.vertexShader,q=D.fragmentShader,p.update(D),ft=p.getVertexShaderID(D),xt=p.getFragmentShaderID(D);const At=s.getRenderTarget(),Ot=lt.isInstancedMesh===!0,Ht=lt.isBatchedMesh===!0,ie=!!D.map,xe=!!D.matcap,k=!!V,Ne=!!D.aoMap,oe=!!D.lightMap,me=!!D.bumpMap,Vt=!!D.normalMap,Oe=!!D.displacementMap,jt=!!D.emissiveMap,qt=!!D.metalnessMap,B=!!D.roughnessMap,A=D.anisotropy>0,st=D.clearcoat>0,dt=D.dispersion>0,O=D.iridescence>0,Q=D.sheen>0,bt=D.transmission>0,Tt=A&&!!D.anisotropyMap,wt=st&&!!D.clearcoatMap,Zt=st&&!!D.clearcoatNormalMap,Ct=st&&!!D.clearcoatRoughnessMap,zt=O&&!!D.iridescenceMap,kt=O&&!!D.iridescenceThicknessMap,Nt=Q&&!!D.sheenColorMap,Rt=Q&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Qt=!!D.specularColorMap,He=!!D.specularIntensityMap,W=bt&&!!D.transmissionMap,Ut=bt&&!!D.thicknessMap,_t=!!D.gradientMap,St=!!D.alphaMap,Lt=D.alphaTest>0,Jt=!!D.alphaHash,fe=!!D.extensions;let Fe=ja;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const ln={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:q,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&lt._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&lt.instanceColor!==null,instancingMorph:Ot&&lt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Qa,alphaToCoverage:!!D.alphaToCoverage,map:ie,matcap:xe,envMap:k,envMapMode:k&&V.mapping,envMapCubeUVHeight:F,aoMap:Ne,lightMap:oe,bumpMap:me,normalMap:Vt,displacementMap:y&&Oe,emissiveMap:jt,normalMapObjectSpace:Vt&&D.normalMapType===TT,normalMapTangentSpace:Vt&&D.normalMapType===ET,metalnessMap:qt,roughnessMap:B,anisotropy:A,anisotropyMap:Tt,clearcoat:st,clearcoatMap:wt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Ct,dispersion:dt,iridescence:O,iridescenceMap:zt,iridescenceThicknessMap:kt,sheen:Q,sheenColorMap:Nt,sheenRoughnessMap:Rt,specularMap:Yt,specularColorMap:Qt,specularIntensityMap:He,transmission:bt,transmissionMap:W,thicknessMap:Ut,gradientMap:_t,opaque:D.transparent===!1&&D.blending===Cs&&D.alphaToCoverage===!1,alphaMap:St,alphaTest:Lt,alphaHash:Jt,combine:D.combine,mapUv:ie&&T(D.map.channel),aoMapUv:Ne&&T(D.aoMap.channel),lightMapUv:oe&&T(D.lightMap.channel),bumpMapUv:me&&T(D.bumpMap.channel),normalMapUv:Vt&&T(D.normalMap.channel),displacementMapUv:Oe&&T(D.displacementMap.channel),emissiveMapUv:jt&&T(D.emissiveMap.channel),metalnessMapUv:qt&&T(D.metalnessMap.channel),roughnessMapUv:B&&T(D.roughnessMap.channel),anisotropyMapUv:Tt&&T(D.anisotropyMap.channel),clearcoatMapUv:wt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&T(D.sheenRoughnessMap.channel),specularMapUv:Yt&&T(D.specularMap.channel),specularColorMapUv:Qt&&T(D.specularColorMap.channel),specularIntensityMapUv:He&&T(D.specularIntensityMap.channel),transmissionMapUv:W&&T(D.transmissionMap.channel),thicknessMapUv:Ut&&T(D.thicknessMap.channel),alphaMapUv:St&&T(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(Vt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!mt.attributes.uv&&(ie||St),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:lt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:et,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ie&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:fe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&D.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ln.vertexUv1s=m.has(1),ln.vertexUv2s=m.has(2),ln.vertexUv3s=m.has(3),m.clear(),ln}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(L(C,D),R(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function R(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.skinning&&d.enable(4),C.morphTargets&&d.enable(5),C.morphNormals&&d.enable(6),C.morphColors&&d.enable(7),C.premultipliedAlpha&&d.enable(8),C.shadowMapEnabled&&d.enable(9),C.doubleSided&&d.enable(10),C.flipSided&&d.enable(11),C.useDepthPacking&&d.enable(12),C.dithering&&d.enable(13),C.transmission&&d.enable(14),C.sheen&&d.enable(15),C.opaque&&d.enable(16),C.pointsUvs&&d.enable(17),C.decodeVideoTexture&&d.enable(18),C.alphaToCoverage&&d.enable(19),D.push(d.mask)}function N(D){const C=E[D.type];let H;if(C){const ct=Ui[C];H=JT.clone(ct.uniforms)}else H=D.uniforms;return H}function J(D,C){let H;for(let ct=0,lt=g.length;ct<lt;ct++){const ht=g[ct];if(ht.cacheKey===C){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new hC(s,C,D,u),g.push(H)),H}function G(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function Z(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:N,acquireProgram:J,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:Z}}function vC(){let s=new WeakMap;function e(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function i(u){s.delete(u)}function r(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function _C(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function n0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function i0(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,y,M,E,T,x){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:x},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=T,_.group=x),e++,_}function d(v,y,M,E,T,x){const _=h(v,y,M,E,T,x);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(v,y,M,E,T,x){const _=h(v,y,M,E,T,x);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,y){i.length>1&&i.sort(v||_C),r.length>1&&r.sort(y||n0),l.length>1&&l.sort(y||n0)}function g(){for(let v=e,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function yC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new i0,s.set(r,[h])):l>=u.length?(h=new i0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function xC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Ce};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return s[e.id]=i,i}}}function SC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let MC=0;function EC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TC(s){const e=new xC,i=SC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ot);const l=new ot,u=new on,h=new on;function d(m){let g=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,T=0,x=0,_=0,L=0,R=0,N=0,J=0,G=0,z=0;m.sort(EC);for(let D=0,C=m.length;D<C;D++){const H=m[D],ct=H.color,lt=H.intensity,ht=H.distance,mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*lt,v+=ct.g*lt,y+=ct.b*lt;else if(H.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],lt);z++}else if(H.isDirectionalLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,F=i.get(H);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,r.directionalShadow[M]=F,r.directionalShadowMap[M]=mt,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=U,M++}else if(H.isSpotLight){const U=e.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(ct).multiplyScalar(lt),U.distance=ht,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[T]=U;const V=H.shadow;if(H.map&&(r.spotLightMap[J]=H.map,J++,V.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[T]=V.matrix,H.castShadow){const F=i.get(H);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,r.spotShadow[T]=F,r.spotShadowMap[T]=mt,N++}T++}else if(H.isRectAreaLight){const U=e.get(H);U.color.copy(ct).multiplyScalar(lt),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=U,x++}else if(H.isPointLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const V=H.shadow,F=i.get(H);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,F.shadowCameraNear=V.camera.near,F.shadowCameraFar=V.camera.far,r.pointShadow[E]=F,r.pointShadowMap[E]=mt,r.pointShadowMatrix[E]=H.shadow.matrix,R++}r.point[E]=U,E++}else if(H.isHemisphereLight){const U=e.get(H);U.skyColor.copy(H.color).multiplyScalar(lt),U.groundColor.copy(H.groundColor).multiplyScalar(lt),r.hemi[_]=U,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==E||Z.spotLength!==T||Z.rectAreaLength!==x||Z.hemiLength!==_||Z.numDirectionalShadows!==L||Z.numPointShadows!==R||Z.numSpotShadows!==N||Z.numSpotMaps!==J||Z.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=x,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+J-G,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,Z.directionalLength=M,Z.pointLength=E,Z.spotLength=T,Z.rectAreaLength=x,Z.hemiLength=_,Z.numDirectionalShadows=L,Z.numPointShadows=R,Z.numSpotShadows=N,Z.numSpotMaps=J,Z.numLightProbes=z,r.version=MC++)}function p(m,g){let v=0,y=0,M=0,E=0,T=0;const x=g.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const R=m[_];if(R.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),v++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),M++}else if(R.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),h.identity(),u.copy(R.matrixWorld),u.premultiply(x),h.extractRotation(u),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(R.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(x),y++}else if(R.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(x),T++}}}return{setup:d,setupView:p,state:r}}function a0(s){const e=new TC(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function bC(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new a0(s),e.set(l,[d])):u>=h.length?(d=new a0(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class AC extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ST,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RC extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DC(s,e,i){let r=new ay;const l=new ae,u=new ae,h=new fn,d=new AC({depthPacking:MT}),p=new RC,m={},g=i.maxTextureSize,v={[Za]:kn,[kn]:Za,[aa]:aa},y=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:CC,fragmentShader:wC}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new da;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fi(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let _=this.type;this.render=function(G,z,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(Ya),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const lt=_!==ia&&this.type===ia,ht=_===ia&&this.type!==ia;for(let mt=0,U=G.length;mt<U;mt++){const V=G[mt],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const gt=F.getFrameExtents();if(l.multiply(gt),u.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/gt.x),l.x=u.x*gt.x,F.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/gt.y),l.y=u.y*gt.y,F.mapSize.y=u.y)),F.map===null||lt===!0||ht===!0){const P=this.type!==ia?{minFilter:Vn,magFilter:Vn}:{};F.map!==null&&F.map.dispose(),F.map=new Ka(l.x,l.y,P),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const Et=F.getViewportCount();for(let P=0;P<Et;P++){const et=F.getViewport(P);h.set(u.x*et.x,u.y*et.y,u.x*et.z,u.y*et.w),ct.viewport(h),F.updateMatrices(V,P),r=F.getFrustum(),N(z,Z,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===ia&&L(F,Z),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(D,C,H)};function L(G,z){const Z=e.update(T);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ka(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,y,T,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(z,null,Z,M,T,null)}function R(G,z,Z,D){let C=null;const H=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=Z.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=C.uuid,lt=z.uuid;let ht=m[ct];ht===void 0&&(ht={},m[ct]=ht);let mt=ht[lt];mt===void 0&&(mt=C.clone(),ht[lt]=mt,z.addEventListener("dispose",J)),C=mt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===ia?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=s.properties.get(C);ct.light=Z}return C}function N(G,z,Z,D,C){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ia)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const lt=e.update(G),ht=G.material;if(Array.isArray(ht)){const mt=lt.groups;for(let U=0,V=mt.length;U<V;U++){const F=mt[U],gt=ht[F.materialIndex];if(gt&&gt.visible){const Et=R(G,gt,D,C);G.onBeforeShadow(s,G,z,Z,lt,Et,F),s.renderBufferDirect(Z,null,lt,Et,G,F),G.onAfterShadow(s,G,z,Z,lt,Et,F)}}}else if(ht.visible){const mt=R(G,ht,D,C);G.onBeforeShadow(s,G,z,Z,lt,mt,null),s.renderBufferDirect(Z,null,lt,mt,G,null),G.onAfterShadow(s,G,z,Z,lt,mt,null)}}const ct=G.children;for(let lt=0,ht=ct.length;lt<ht;lt++)N(ct[lt],z,Z,D,C)}function J(G){G.target.removeEventListener("dispose",J);for(const Z in m){const D=m[Z],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function UC(s){function e(){let W=!1;const Ut=new fn;let _t=null;const St=new fn(0,0,0,0);return{setMask:function(Lt){_t!==Lt&&!W&&(s.colorMask(Lt,Lt,Lt,Lt),_t=Lt)},setLocked:function(Lt){W=Lt},setClear:function(Lt,Jt,fe,Fe,ln){ln===!0&&(Lt*=Fe,Jt*=Fe,fe*=Fe),Ut.set(Lt,Jt,fe,Fe),St.equals(Ut)===!1&&(s.clearColor(Lt,Jt,fe,Fe),St.copy(Ut))},reset:function(){W=!1,_t=null,St.set(-1,0,0,0)}}}function i(){let W=!1,Ut=null,_t=null,St=null;return{setTest:function(Lt){Lt?xt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Lt){Ut!==Lt&&!W&&(s.depthMask(Lt),Ut=Lt)},setFunc:function(Lt){if(_t!==Lt){switch(Lt){case aT:s.depthFunc(s.NEVER);break;case rT:s.depthFunc(s.ALWAYS);break;case sT:s.depthFunc(s.LESS);break;case Qu:s.depthFunc(s.LEQUAL);break;case oT:s.depthFunc(s.EQUAL);break;case lT:s.depthFunc(s.GEQUAL);break;case uT:s.depthFunc(s.GREATER);break;case cT:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Lt}},setLocked:function(Lt){W=Lt},setClear:function(Lt){St!==Lt&&(s.clearDepth(Lt),St=Lt)},reset:function(){W=!1,Ut=null,_t=null,St=null}}}function r(){let W=!1,Ut=null,_t=null,St=null,Lt=null,Jt=null,fe=null,Fe=null,ln=null;return{setTest:function(Se){W||(Se?xt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Se){Ut!==Se&&!W&&(s.stencilMask(Se),Ut=Se)},setFunc:function(Se,Wn,xn){(_t!==Se||St!==Wn||Lt!==xn)&&(s.stencilFunc(Se,Wn,xn),_t=Se,St=Wn,Lt=xn)},setOp:function(Se,Wn,xn){(Jt!==Se||fe!==Wn||Fe!==xn)&&(s.stencilOp(Se,Wn,xn),Jt=Se,fe=Wn,Fe=xn)},setLocked:function(Se){W=Se},setClear:function(Se){ln!==Se&&(s.clearStencil(Se),ln=Se)},reset:function(){W=!1,Ut=null,_t=null,St=null,Lt=null,Jt=null,fe=null,Fe=null,ln=null}}}const l=new e,u=new i,h=new r,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,y=[],M=null,E=!1,T=null,x=null,_=null,L=null,R=null,N=null,J=null,G=new Ce(0,0,0),z=0,Z=!1,D=null,C=null,H=null,ct=null,lt=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let mt=!1,U=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),mt=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),mt=U>=2);let F=null,gt={};const Et=s.getParameter(s.SCISSOR_BOX),P=s.getParameter(s.VIEWPORT),et=new fn().fromArray(Et),Mt=new fn().fromArray(P);function q(W,Ut,_t,St){const Lt=new Uint8Array(4),Jt=s.createTexture();s.bindTexture(W,Jt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<_t;fe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(Ut+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return Jt}const ft={};ft[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xt(s.DEPTH_TEST),u.setFunc(Qu),me(!1),Vt(f_),xt(s.CULL_FACE),Ne(Ya);function xt(W){m[W]!==!0&&(s.enable(W),m[W]=!0)}function At(W){m[W]!==!1&&(s.disable(W),m[W]=!1)}function Ot(W,Ut){return g[W]!==Ut?(s.bindFramebuffer(W,Ut),g[W]=Ut,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ut),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(W,Ut){let _t=y,St=!1;if(W){_t=v.get(Ut),_t===void 0&&(_t=[],v.set(Ut,_t));const Lt=W.textures;if(_t.length!==Lt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let Jt=0,fe=Lt.length;Jt<fe;Jt++)_t[Jt]=s.COLOR_ATTACHMENT0+Jt;_t.length=Lt.length,St=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,St=!0);St&&s.drawBuffers(_t)}function ie(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const xe={[Er]:s.FUNC_ADD,[GE]:s.FUNC_SUBTRACT,[VE]:s.FUNC_REVERSE_SUBTRACT};xe[kE]=s.MIN,xe[XE]=s.MAX;const k={[WE]:s.ZERO,[qE]:s.ONE,[YE]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[$E]:s.SRC_ALPHA_SATURATE,[QE]:s.DST_COLOR,[ZE]:s.DST_ALPHA,[jE]:s.ONE_MINUS_SRC_COLOR,[hd]:s.ONE_MINUS_SRC_ALPHA,[JE]:s.ONE_MINUS_DST_COLOR,[KE]:s.ONE_MINUS_DST_ALPHA,[tT]:s.CONSTANT_COLOR,[eT]:s.ONE_MINUS_CONSTANT_COLOR,[nT]:s.CONSTANT_ALPHA,[iT]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(W,Ut,_t,St,Lt,Jt,fe,Fe,ln,Se){if(W===Ya){E===!0&&(At(s.BLEND),E=!1);return}if(E===!1&&(xt(s.BLEND),E=!0),W!==HE){if(W!==T||Se!==Z){if((x!==Er||R!==Er)&&(s.blendEquation(s.FUNC_ADD),x=Er,R=Er),Se)switch(W){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cd:s.blendFunc(s.ONE,s.ONE);break;case h_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case h_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}_=null,L=null,N=null,J=null,G.set(0,0,0),z=0,T=W,Z=Se}return}Lt=Lt||Ut,Jt=Jt||_t,fe=fe||St,(Ut!==x||Lt!==R)&&(s.blendEquationSeparate(xe[Ut],xe[Lt]),x=Ut,R=Lt),(_t!==_||St!==L||Jt!==N||fe!==J)&&(s.blendFuncSeparate(k[_t],k[St],k[Jt],k[fe]),_=_t,L=St,N=Jt,J=fe),(Fe.equals(G)===!1||ln!==z)&&(s.blendColor(Fe.r,Fe.g,Fe.b,ln),G.copy(Fe),z=ln),T=W,Z=!1}function oe(W,Ut){W.side===aa?At(s.CULL_FACE):xt(s.CULL_FACE);let _t=W.side===kn;Ut&&(_t=!_t),me(_t),W.blending===Cs&&W.transparent===!1?Ne(Ya):Ne(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const St=W.stencilWrite;h.setTest(St),St&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function Vt(W){W!==BE?(xt(s.CULL_FACE),W!==C&&(W===f_?s.cullFace(s.BACK):W===IE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),C=W}function Oe(W){W!==H&&(mt&&s.lineWidth(W),H=W)}function jt(W,Ut,_t){W?(xt(s.POLYGON_OFFSET_FILL),(ct!==Ut||lt!==_t)&&(s.polygonOffset(Ut,_t),ct=Ut,lt=_t)):At(s.POLYGON_OFFSET_FILL)}function qt(W){W?xt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function B(W){W===void 0&&(W=s.TEXTURE0+ht-1),F!==W&&(s.activeTexture(W),F=W)}function A(W,Ut,_t){_t===void 0&&(F===null?_t=s.TEXTURE0+ht-1:_t=F);let St=gt[_t];St===void 0&&(St={type:void 0,texture:void 0},gt[_t]=St),(St.type!==W||St.texture!==Ut)&&(F!==_t&&(s.activeTexture(_t),F=_t),s.bindTexture(W,Ut||ft[W]),St.type=W,St.texture=Ut)}function st(){const W=gt[F];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function O(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(W){et.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),et.copy(W))}function Rt(W){Mt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Mt.copy(W))}function Yt(W,Ut){let _t=p.get(Ut);_t===void 0&&(_t=new WeakMap,p.set(Ut,_t));let St=_t.get(W);St===void 0&&(St=s.getUniformBlockIndex(Ut,W.name),_t.set(W,St))}function Qt(W,Ut){const St=p.get(Ut).get(W);d.get(Ut)!==St&&(s.uniformBlockBinding(Ut,St,W.__bindingPointIndex),d.set(Ut,St))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},F=null,gt={},g={},v=new WeakMap,y=[],M=null,E=!1,T=null,x=null,_=null,L=null,R=null,N=null,J=null,G=new Ce(0,0,0),z=0,Z=!1,D=null,C=null,H=null,ct=null,lt=null,et.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:xt,disable:At,bindFramebuffer:Ot,drawBuffers:Ht,useProgram:ie,setBlending:Ne,setMaterial:oe,setFlipSided:me,setCullFace:Vt,setLineWidth:Oe,setPolygonOffset:jt,setScissorTest:qt,activeTexture:B,bindTexture:A,unbindTexture:st,compressedTexImage2D:dt,compressedTexImage3D:O,texImage2D:zt,texImage3D:kt,updateUBOMapping:Yt,uniformBlockBinding:Qt,texStorage2D:Zt,texStorage3D:Ct,texSubImage2D:Q,texSubImage3D:bt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:wt,scissor:Nt,viewport:Rt,reset:He}}function r0(s,e,i,r){const l=LC(r);switch(i){case F0:return s*e;case G0:return s*e;case V0:return s*e*2;case k0:return s*e/l.components*l.byteLength;case np:return s*e/l.components*l.byteLength;case X0:return s*e*2/l.components*l.byteLength;case ip:return s*e*2/l.components*l.byteLength;case H0:return s*e*3/l.components*l.byteLength;case ci:return s*e*4/l.components*l.byteLength;case ap:return s*e*4/l.components*l.byteLength;case Xu:case Wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qu:case Yu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case yd:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ju:case Id:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case W0:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LC(s){switch(s){case ua:case z0:return{byteLength:1,components:1};case Zo:case B0:case Is:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case Rr:case $d:case Ni:return{byteLength:4,components:1};case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function NC(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ae,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,A){return M?new OffscreenCanvas(B,A):nc("canvas")}function T(B,A,st){let dt=1;const O=qt(B);if((O.width>st||O.height>st)&&(dt=st/Math.max(O.width,O.height)),dt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Q=Math.floor(dt*O.width),bt=Math.floor(dt*O.height);v===void 0&&(v=E(Q,bt));const Tt=A?E(Q,bt):v;return Tt.width=Q,Tt.height=bt,Tt.getContext("2d").drawImage(B,0,0,Q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Q+"x"+bt+")."),Tt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),B;return B}function x(B){return B.generateMipmaps&&B.minFilter!==Vn&&B.minFilter!==Un}function _(B){s.generateMipmap(B)}function L(B,A,st,dt,O=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Q=A;if(A===s.RED&&(st===s.FLOAT&&(Q=s.R32F),st===s.HALF_FLOAT&&(Q=s.R16F),st===s.UNSIGNED_BYTE&&(Q=s.R8)),A===s.RED_INTEGER&&(st===s.UNSIGNED_BYTE&&(Q=s.R8UI),st===s.UNSIGNED_SHORT&&(Q=s.R16UI),st===s.UNSIGNED_INT&&(Q=s.R32UI),st===s.BYTE&&(Q=s.R8I),st===s.SHORT&&(Q=s.R16I),st===s.INT&&(Q=s.R32I)),A===s.RG&&(st===s.FLOAT&&(Q=s.RG32F),st===s.HALF_FLOAT&&(Q=s.RG16F),st===s.UNSIGNED_BYTE&&(Q=s.RG8)),A===s.RG_INTEGER&&(st===s.UNSIGNED_BYTE&&(Q=s.RG8UI),st===s.UNSIGNED_SHORT&&(Q=s.RG16UI),st===s.UNSIGNED_INT&&(Q=s.RG32UI),st===s.BYTE&&(Q=s.RG8I),st===s.SHORT&&(Q=s.RG16I),st===s.INT&&(Q=s.RG32I)),A===s.RGB&&st===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),A===s.RGBA){const bt=O?Ju:we.getTransfer(dt);st===s.FLOAT&&(Q=s.RGBA32F),st===s.HALF_FLOAT&&(Q=s.RGBA16F),st===s.UNSIGNED_BYTE&&(Q=bt===ke?s.SRGB8_ALPHA8:s.RGBA8),st===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),st===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(B,A){let st;return B?A===null||A===Rr||A===Ns?st=s.DEPTH24_STENCIL8:A===Ni?st=s.DEPTH32F_STENCIL8:A===Zo&&(st=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===Ns?st=s.DEPTH_COMPONENT24:A===Ni?st=s.DEPTH_COMPONENT32F:A===Zo&&(st=s.DEPTH_COMPONENT16),st}function N(B,A){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Vn&&B.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function J(B){const A=B.target;A.removeEventListener("dispose",J),z(A),A.isVideoTexture&&g.delete(A)}function G(B){const A=B.target;A.removeEventListener("dispose",G),D(A)}function z(B){const A=r.get(B);if(A.__webglInit===void 0)return;const st=B.source,dt=y.get(st);if(dt){const O=dt[A.__cacheKey];O.usedTimes--,O.usedTimes===0&&Z(B),Object.keys(dt).length===0&&y.delete(st)}r.remove(B)}function Z(B){const A=r.get(B);s.deleteTexture(A.__webglTexture);const st=B.source,dt=y.get(st);delete dt[A.__cacheKey],h.memory.textures--}function D(B){const A=r.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let O=0;O<A.__webglFramebuffer[dt].length;O++)s.deleteFramebuffer(A.__webglFramebuffer[dt][O]);else s.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)s.deleteFramebuffer(A.__webglFramebuffer[dt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const st=B.textures;for(let dt=0,O=st.length;dt<O;dt++){const Q=r.get(st[dt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),h.memory.textures--),r.remove(st[dt])}r.remove(B)}let C=0;function H(){C=0}function ct(){const B=C;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),C+=1,B}function lt(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function ht(B,A){const st=r.get(B);if(B.isVideoTexture&&Oe(B),B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){const dt=B.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(st,B,A);return}}i.bindTexture(s.TEXTURE_2D,st.__webglTexture,s.TEXTURE0+A)}function mt(B,A){const st=r.get(B);if(B.version>0&&st.__version!==B.version){Mt(st,B,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,st.__webglTexture,s.TEXTURE0+A)}function U(B,A){const st=r.get(B);if(B.version>0&&st.__version!==B.version){Mt(st,B,A);return}i.bindTexture(s.TEXTURE_3D,st.__webglTexture,s.TEXTURE0+A)}function V(B,A){const st=r.get(B);if(B.version>0&&st.__version!==B.version){q(st,B,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture,s.TEXTURE0+A)}const F={[md]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},gt={[Vn]:s.NEAREST,[xT]:s.NEAREST_MIPMAP_NEAREST,[gu]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Nh]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},Et={[bT]:s.NEVER,[UT]:s.ALWAYS,[AT]:s.LESS,[q0]:s.LEQUAL,[RT]:s.EQUAL,[DT]:s.GEQUAL,[CT]:s.GREATER,[wT]:s.NOTEQUAL};function P(B,A){if(A.type===Ni&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Un||A.magFilter===Nh||A.magFilter===gu||A.magFilter===br||A.minFilter===Un||A.minFilter===Nh||A.minFilter===gu||A.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,F[A.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,F[A.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,F[A.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,gt[A.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vn||A.minFilter!==gu&&A.minFilter!==br||A.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function et(B,A){let st=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",J));const dt=A.source;let O=y.get(dt);O===void 0&&(O={},y.set(dt,O));const Q=lt(A);if(Q!==B.__cacheKey){O[Q]===void 0&&(O[Q]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,st=!0),O[Q].usedTimes++;const bt=O[B.__cacheKey];bt!==void 0&&(O[B.__cacheKey].usedTimes--,bt.usedTimes===0&&Z(A)),B.__cacheKey=Q,B.__webglTexture=O[Q].texture}return st}function Mt(B,A,st){let dt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=s.TEXTURE_3D);const O=et(B,A),Q=A.source;i.bindTexture(dt,B.__webglTexture,s.TEXTURE0+st);const bt=r.get(Q);if(Q.version!==bt.__version||O===!0){i.activeTexture(s.TEXTURE0+st);const Tt=we.getPrimaries(we.workingColorSpace),wt=A.colorSpace===qa?null:we.getPrimaries(A.colorSpace),Zt=A.colorSpace===qa||Tt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Ct=T(A.image,!1,l.maxTextureSize);Ct=jt(A,Ct);const zt=u.convert(A.format,A.colorSpace),kt=u.convert(A.type);let Nt=L(A.internalFormat,zt,kt,A.colorSpace,A.isVideoTexture);P(dt,A);let Rt;const Yt=A.mipmaps,Qt=A.isVideoTexture!==!0,He=bt.__version===void 0||O===!0,W=Q.dataReady,Ut=N(A,Ct);if(A.isDepthTexture)Nt=R(A.format===Os,A.type),He&&(Qt?i.texStorage2D(s.TEXTURE_2D,1,Nt,Ct.width,Ct.height):i.texImage2D(s.TEXTURE_2D,0,Nt,Ct.width,Ct.height,0,zt,kt,null));else if(A.isDataTexture)if(Yt.length>0){Qt&&He&&i.texStorage2D(s.TEXTURE_2D,Ut,Nt,Yt[0].width,Yt[0].height);for(let _t=0,St=Yt.length;_t<St;_t++)Rt=Yt[_t],Qt?W&&i.texSubImage2D(s.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,zt,kt,Rt.data):i.texImage2D(s.TEXTURE_2D,_t,Nt,Rt.width,Rt.height,0,zt,kt,Rt.data);A.generateMipmaps=!1}else Qt?(He&&i.texStorage2D(s.TEXTURE_2D,Ut,Nt,Ct.width,Ct.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct.width,Ct.height,zt,kt,Ct.data)):i.texImage2D(s.TEXTURE_2D,0,Nt,Ct.width,Ct.height,0,zt,kt,Ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&He&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,Nt,Yt[0].width,Yt[0].height,Ct.depth);for(let _t=0,St=Yt.length;_t<St;_t++)if(Rt=Yt[_t],A.format!==ci)if(zt!==null)if(Qt){if(W)if(A.layerUpdates.size>0){const Lt=r0(Rt.width,Rt.height,A.format,A.type);for(const Jt of A.layerUpdates){const fe=Rt.data.subarray(Jt*Lt/Rt.data.BYTES_PER_ELEMENT,(Jt+1)*Lt/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,Jt,Rt.width,Rt.height,1,zt,fe,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,Rt.width,Rt.height,Ct.depth,zt,Rt.data,0,0)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_t,Nt,Rt.width,Rt.height,Ct.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,Rt.width,Rt.height,Ct.depth,zt,kt,Rt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,_t,Nt,Rt.width,Rt.height,Ct.depth,0,zt,kt,Rt.data)}else{Qt&&He&&i.texStorage2D(s.TEXTURE_2D,Ut,Nt,Yt[0].width,Yt[0].height);for(let _t=0,St=Yt.length;_t<St;_t++)Rt=Yt[_t],A.format!==ci?zt!==null?Qt?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,zt,Rt.data):i.compressedTexImage2D(s.TEXTURE_2D,_t,Nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?W&&i.texSubImage2D(s.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,zt,kt,Rt.data):i.texImage2D(s.TEXTURE_2D,_t,Nt,Rt.width,Rt.height,0,zt,kt,Rt.data)}else if(A.isDataArrayTexture)if(Qt){if(He&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,Nt,Ct.width,Ct.height,Ct.depth),W)if(A.layerUpdates.size>0){const _t=r0(Ct.width,Ct.height,A.format,A.type);for(const St of A.layerUpdates){const Lt=Ct.data.subarray(St*_t/Ct.data.BYTES_PER_ELEMENT,(St+1)*_t/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,Ct.width,Ct.height,1,zt,kt,Lt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,kt,Ct.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,Ct.width,Ct.height,Ct.depth,0,zt,kt,Ct.data);else if(A.isData3DTexture)Qt?(He&&i.texStorage3D(s.TEXTURE_3D,Ut,Nt,Ct.width,Ct.height,Ct.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,kt,Ct.data)):i.texImage3D(s.TEXTURE_3D,0,Nt,Ct.width,Ct.height,Ct.depth,0,zt,kt,Ct.data);else if(A.isFramebufferTexture){if(He)if(Qt)i.texStorage2D(s.TEXTURE_2D,Ut,Nt,Ct.width,Ct.height);else{let _t=Ct.width,St=Ct.height;for(let Lt=0;Lt<Ut;Lt++)i.texImage2D(s.TEXTURE_2D,Lt,Nt,_t,St,0,zt,kt,null),_t>>=1,St>>=1}}else if(Yt.length>0){if(Qt&&He){const _t=qt(Yt[0]);i.texStorage2D(s.TEXTURE_2D,Ut,Nt,_t.width,_t.height)}for(let _t=0,St=Yt.length;_t<St;_t++)Rt=Yt[_t],Qt?W&&i.texSubImage2D(s.TEXTURE_2D,_t,0,0,zt,kt,Rt):i.texImage2D(s.TEXTURE_2D,_t,Nt,zt,kt,Rt);A.generateMipmaps=!1}else if(Qt){if(He){const _t=qt(Ct);i.texStorage2D(s.TEXTURE_2D,Ut,Nt,_t.width,_t.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,kt,Ct)}else i.texImage2D(s.TEXTURE_2D,0,Nt,zt,kt,Ct);x(A)&&_(dt),bt.__version=Q.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function q(B,A,st){if(A.image.length!==6)return;const dt=et(B,A),O=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+st);const Q=r.get(O);if(O.version!==Q.__version||dt===!0){i.activeTexture(s.TEXTURE0+st);const bt=we.getPrimaries(we.workingColorSpace),Tt=A.colorSpace===qa?null:we.getPrimaries(A.colorSpace),wt=A.colorSpace===qa||bt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Zt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ct=A.image[0]&&A.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Zt&&!Ct?zt[St]=T(A.image[St],!0,l.maxCubemapSize):zt[St]=Ct?A.image[St].image:A.image[St],zt[St]=jt(A,zt[St]);const kt=zt[0],Nt=u.convert(A.format,A.colorSpace),Rt=u.convert(A.type),Yt=L(A.internalFormat,Nt,Rt,A.colorSpace),Qt=A.isVideoTexture!==!0,He=Q.__version===void 0||dt===!0,W=O.dataReady;let Ut=N(A,kt);P(s.TEXTURE_CUBE_MAP,A);let _t;if(Zt){Qt&&He&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,Yt,kt.width,kt.height);for(let St=0;St<6;St++){_t=zt[St].mipmaps;for(let Lt=0;Lt<_t.length;Lt++){const Jt=_t[Lt];A.format!==ci?Nt!==null?Qt?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt,0,0,Jt.width,Jt.height,Nt,Jt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt,Yt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt,0,0,Jt.width,Jt.height,Nt,Rt,Jt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt,Yt,Jt.width,Jt.height,0,Nt,Rt,Jt.data)}}}else{if(_t=A.mipmaps,Qt&&He){_t.length>0&&Ut++;const St=qt(zt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,Yt,St.width,St.height)}for(let St=0;St<6;St++)if(Ct){Qt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,Nt,Rt,zt[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Yt,zt[St].width,zt[St].height,0,Nt,Rt,zt[St].data);for(let Lt=0;Lt<_t.length;Lt++){const fe=_t[Lt].image[St].image;Qt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt+1,0,0,fe.width,fe.height,Nt,Rt,fe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt+1,Yt,fe.width,fe.height,0,Nt,Rt,fe.data)}}else{Qt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Nt,Rt,zt[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Yt,Nt,Rt,zt[St]);for(let Lt=0;Lt<_t.length;Lt++){const Jt=_t[Lt];Qt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt+1,0,0,Nt,Rt,Jt.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt+1,Yt,Nt,Rt,Jt.image[St])}}}x(A)&&_(s.TEXTURE_CUBE_MAP),Q.__version=O.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ft(B,A,st,dt,O,Q){const bt=u.convert(st.format,st.colorSpace),Tt=u.convert(st.type),wt=L(st.internalFormat,bt,Tt,st.colorSpace);if(!r.get(A).__hasExternalTextures){const Ct=Math.max(1,A.width>>Q),zt=Math.max(1,A.height>>Q);O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?i.texImage3D(O,Q,wt,Ct,zt,A.depth,0,bt,Tt,null):i.texImage2D(O,Q,wt,Ct,zt,0,bt,Tt,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),Vt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,O,r.get(st).__webglTexture,0,me(A)):(O===s.TEXTURE_2D||O>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,O,r.get(st).__webglTexture,Q),i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(B,A,st){if(s.bindRenderbuffer(s.RENDERBUFFER,B),A.depthBuffer){const dt=A.depthTexture,O=dt&&dt.isDepthTexture?dt.type:null,Q=R(A.stencilBuffer,O),bt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=me(A);Vt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,Q,A.width,A.height):st?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,B)}else{const dt=A.textures;for(let O=0;O<dt.length;O++){const Q=dt[O],bt=u.convert(Q.format,Q.colorSpace),Tt=u.convert(Q.type),wt=L(Q.internalFormat,bt,Tt,Q.colorSpace),Zt=me(A);st&&Vt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,wt,A.width,A.height):Vt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,wt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,wt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ht(A.depthTexture,0);const dt=r.get(A.depthTexture).__webglTexture,O=me(A);if(A.depthTexture.format===ws)Vt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(A.depthTexture.format===Os)Vt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ot(B){const A=r.get(B),st=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");At(A.__webglFramebuffer,B)}else if(st){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]=s.createRenderbuffer(),xt(A.__webglDepthbuffer[dt],B,!1)}else i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),xt(A.__webglDepthbuffer,B,!1);i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(B,A,st){const dt=r.get(B);A!==void 0&&ft(dt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),st!==void 0&&Ot(B)}function ie(B){const A=B.texture,st=r.get(B),dt=r.get(A);B.addEventListener("dispose",G);const O=B.textures,Q=B.isWebGLCubeRenderTarget===!0,bt=O.length>1;if(bt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=A.version,h.memory.textures++),Q){st.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer[Tt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)st.__webglFramebuffer[Tt][wt]=s.createFramebuffer()}else st.__webglFramebuffer[Tt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer=[];for(let Tt=0;Tt<A.mipmaps.length;Tt++)st.__webglFramebuffer[Tt]=s.createFramebuffer()}else st.__webglFramebuffer=s.createFramebuffer();if(bt)for(let Tt=0,wt=O.length;Tt<wt;Tt++){const Zt=r.get(O[Tt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),h.memory.textures++)}if(B.samples>0&&Vt(B)===!1){st.__webglMultisampledFramebuffer=s.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Tt=0;Tt<O.length;Tt++){const wt=O[Tt];st.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,st.__webglColorRenderbuffer[Tt]);const Zt=u.convert(wt.format,wt.colorSpace),Ct=u.convert(wt.type),zt=L(wt.internalFormat,Zt,Ct,wt.colorSpace,B.isXRRenderTarget===!0),kt=me(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,zt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,st.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(st.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(st.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),P(s.TEXTURE_CUBE_MAP,A);for(let Tt=0;Tt<6;Tt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)ft(st.__webglFramebuffer[Tt][wt],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,wt);else ft(st.__webglFramebuffer[Tt],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);x(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){for(let Tt=0,wt=O.length;Tt<wt;Tt++){const Zt=O[Tt],Ct=r.get(Zt);i.bindTexture(s.TEXTURE_2D,Ct.__webglTexture),P(s.TEXTURE_2D,Zt),ft(st.__webglFramebuffer,B,Zt,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),x(Zt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Tt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Tt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Tt,dt.__webglTexture),P(Tt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)ft(st.__webglFramebuffer[wt],B,A,s.COLOR_ATTACHMENT0,Tt,wt);else ft(st.__webglFramebuffer,B,A,s.COLOR_ATTACHMENT0,Tt,0);x(A)&&_(Tt),i.unbindTexture()}B.depthBuffer&&Ot(B)}function xe(B){const A=B.textures;for(let st=0,dt=A.length;st<dt;st++){const O=A[st];if(x(O)){const Q=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,bt=r.get(O).__webglTexture;i.bindTexture(Q,bt),_(Q),i.unbindTexture()}}}const k=[],Ne=[];function oe(B){if(B.samples>0){if(Vt(B)===!1){const A=B.textures,st=B.width,dt=B.height;let O=s.COLOR_BUFFER_BIT;const Q=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=r.get(B),Tt=A.length>1;if(Tt)for(let wt=0;wt<A.length;wt++)i.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<A.length;wt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(O|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(O|=s.STENCIL_BUFFER_BIT)),Tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const Zt=r.get(A[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,st,dt,0,0,st,dt,O,s.NEAREST),p===!0&&(k.length=0,Ne.length=0,k.push(s.COLOR_ATTACHMENT0+wt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(k.push(Q),Ne.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let wt=0;wt<A.length;wt++){i.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const Zt=r.get(A[wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Zt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const A=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function me(B){return Math.min(l.maxSamples,B.samples)}function Vt(B){const A=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Oe(B){const A=h.render.frame;g.get(B)!==A&&(g.set(B,A),B.update())}function jt(B,A){const st=B.colorSpace,dt=B.format,O=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||st!==Qa&&st!==qa&&(we.getTransfer(st)===ke?(dt!==ci||O!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),A}function qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=ct,this.resetTextureUnits=H,this.setTexture2D=ht,this.setTexture2DArray=mt,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Vt}function OC(s,e){function i(r,l=qa){let u;const h=we.getTransfer(l);if(r===ua)return s.UNSIGNED_BYTE;if(r===tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ep)return s.UNSIGNED_SHORT_5_5_5_1;if(r===I0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===z0)return s.BYTE;if(r===B0)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===$d)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===Ni)return s.FLOAT;if(r===Is)return s.HALF_FLOAT;if(r===F0)return s.ALPHA;if(r===H0)return s.RGB;if(r===ci)return s.RGBA;if(r===G0)return s.LUMINANCE;if(r===V0)return s.LUMINANCE_ALPHA;if(r===ws)return s.DEPTH_COMPONENT;if(r===Os)return s.DEPTH_STENCIL;if(r===k0)return s.RED;if(r===np)return s.RED_INTEGER;if(r===X0)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===Xu||r===Wu||r===qu||r===Yu)if(h===ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Xu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Xu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===_d||r===yd||r===xd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===Ed)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sd||r===Md)return h===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ed)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Td||r===bd||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===zd||r===Bd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Td)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ud)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bd)return h===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ju||r===Id||r===Fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ju)return h===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===W0||r===Hd||r===Gd||r===Vd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ju)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class PC extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Iu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zC={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const T of e.hand.values()){const x=i.getJointPose(T,r),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&y>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zC)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Iu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const BC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Ln,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new fa({vertexShader:BC,fragmentShader:IC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new Ar(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends Fs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,y=null,M=null,E=null;const T=new FC,x=i.getContextAttributes();let _=null,L=null;const R=[],N=[],J=new ae;let G=null;const z=new xi;z.layers.enable(1),z.viewport=new fn;const Z=new xi;Z.layers.enable(2),Z.viewport=new fn;const D=[z,Z],C=new PC;C.layers.enable(1),C.layers.enable(2);let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ft=R[q];return ft===void 0&&(ft=new sd,R[q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(q){let ft=R[q];return ft===void 0&&(ft=new sd,R[q]=ft),ft.getGripSpace()},this.getHand=function(q){let ft=R[q];return ft===void 0&&(ft=new sd,R[q]=ft),ft.getHandSpace()};function lt(q){const ft=N.indexOf(q.inputSource);if(ft===-1)return;const xt=R[ft];xt!==void 0&&(xt.update(q.inputSource,q.frame,m||h),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function ht(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",mt);for(let q=0;q<R.length;q++){const ft=N[q];ft!==null&&(N[q]=null,R[q].disconnect(ft))}H=null,ct=null,T.reset(),e.setRenderTarget(_),M=null,y=null,v=null,l=null,L=null,Mt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",mt),x.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(J),l.renderState.layers===void 0){const ft={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Ka(M.framebufferWidth,M.framebufferHeight,{format:ci,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ft=null,xt=null,At=null;x.depth&&(At=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=x.stencil?Os:ws,xt=x.stencil?Ns:Rr);const Ot={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Ot),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Ka(y.textureWidth,y.textureHeight,{format:ci,type:ua,depthTexture:new sy(y.textureWidth,y.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function mt(q){for(let ft=0;ft<q.removed.length;ft++){const xt=q.removed[ft],At=N.indexOf(xt);At>=0&&(N[At]=null,R[At].disconnect(xt))}for(let ft=0;ft<q.added.length;ft++){const xt=q.added[ft];let At=N.indexOf(xt);if(At===-1){for(let Ht=0;Ht<R.length;Ht++)if(Ht>=N.length){N.push(xt),At=Ht;break}else if(N[Ht]===null){N[Ht]=xt,At=Ht;break}if(At===-1)break}const Ot=R[At];Ot&&Ot.connect(xt)}}const U=new ot,V=new ot;function F(q,ft,xt){U.setFromMatrixPosition(ft.matrixWorld),V.setFromMatrixPosition(xt.matrixWorld);const At=U.distanceTo(V),Ot=ft.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,ie=Ot[14]/(Ot[10]-1),xe=Ot[14]/(Ot[10]+1),k=(Ot[9]+1)/Ot[5],Ne=(Ot[9]-1)/Ot[5],oe=(Ot[8]-1)/Ot[0],me=(Ht[8]+1)/Ht[0],Vt=ie*oe,Oe=ie*me,jt=At/(-oe+me),qt=jt*-oe;ft.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(qt),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const B=ie+jt,A=xe+jt,st=Vt-qt,dt=Oe+(At-qt),O=k*xe/A*B,Q=Ne*xe/A*B;q.projectionMatrix.makePerspective(st,dt,O,Q,B,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function gt(q,ft){ft===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ft.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;T.texture!==null&&(q.near=T.depthNear,q.far=T.depthFar),C.near=Z.near=z.near=q.near,C.far=Z.far=z.far=q.far,(H!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ct=C.far,z.near=H,z.far=ct,Z.near=H,Z.far=ct,z.updateProjectionMatrix(),Z.updateProjectionMatrix(),q.updateProjectionMatrix());const ft=q.parent,xt=C.cameras;gt(C,ft);for(let At=0;At<xt.length;At++)gt(xt[At],ft);xt.length===2?F(C,z,Z):C.projectionMatrix.copy(z.projectionMatrix),Et(q,C,ft)};function Et(q,ft,xt){xt===null?q.matrix.copy(ft.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ft.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ft.projectionMatrix),q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(q){p=q,y!==null&&(y.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let P=null;function et(q,ft){if(g=ft.getViewerPose(m||h),E=ft,g!==null){const xt=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let At=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Ht=0;Ht<xt.length;Ht++){const ie=xt[Ht];let xe=null;if(M!==null)xe=M.getViewport(ie);else{const Ne=v.getViewSubImage(y,ie);xe=Ne.viewport,Ht===0&&(e.setRenderTargetTextures(L,Ne.colorTexture,y.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(L))}let k=D[Ht];k===void 0&&(k=new xi,k.layers.enable(Ht),k.viewport=new fn,D[Ht]=k),k.matrix.fromArray(ie.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(ie.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(xe.x,xe.y,xe.width,xe.height),Ht===0&&(C.matrix.copy(k.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(k)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ht=v.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&T.init(e,Ht,l.renderState)}}for(let xt=0;xt<R.length;xt++){const At=N[xt],Ot=R[xt];At!==null&&Ot!==void 0&&Ot.update(At,ft,m||h)}P&&P(q,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Mt=new ry;Mt.setAnimationLoop(et),this.setAnimationLoop=function(q){P=q},this.dispose=function(){}}}const xr=new ca,GC=new on;function VC(s,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,ny(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,L,R,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),v(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),y(x,_),_.isMeshPhysicalMaterial&&M(x,_,N)):_.isMeshMatcapMaterial?(u(x,_),E(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),T(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?p(x,_,L,R):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===kn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===kn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),R=L.envMap,N=L.envMapRotation;R&&(x.envMap.value=R,xr.copy(N),xr.x*=-1,xr.y*=-1,xr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),x.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(xr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,L,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=R*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kC(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,R){const N=R.program;r.uniformBlockBinding(L,N)}function m(L,R){let N=l[L.id];N===void 0&&(E(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",x));const J=R.program;r.updateUBOMapping(L,J);const G=e.render.frame;u[L.id]!==G&&(y(L),u[L.id]=G)}function g(L){const R=v();L.__bindingPointIndex=R;const N=s.createBuffer(),J=L.__size,G=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,J,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function v(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const R=l[L.id],N=L.uniforms,J=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let G=0,z=N.length;G<z;G++){const Z=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,C=Z.length;D<C;D++){const H=Z[D];if(M(H,G,D,J)===!0){const ct=H.__offset,lt=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let mt=0;mt<lt.length;mt++){const U=lt[mt],V=T(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,ct+ht,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,ht),ht+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,N,J){const G=L.value,z=R+"_"+N;if(J[z]===void 0)return typeof G=="number"||typeof G=="boolean"?J[z]=G:J[z]=G.clone(),!0;{const Z=J[z];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return J[z]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function E(L){const R=L.uniforms;let N=0;const J=16;for(let z=0,Z=R.length;z<Z;z++){const D=Array.isArray(R[z])?R[z]:[R[z]];for(let C=0,H=D.length;C<H;C++){const ct=D[C],lt=Array.isArray(ct.value)?ct.value:[ct.value];for(let ht=0,mt=lt.length;ht<mt;ht++){const U=lt[ht],V=T(U),F=N%J,gt=F%V.boundary,Et=F+gt;N+=gt,Et!==0&&J-Et<V.storage&&(N+=J-Et),ct.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=N,N+=V.storage}}}const G=N%J;return G>0&&(N+=J-G),L.__size=N,L.__cache={},this}function T(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function x(L){const R=L.target;R.removeEventListener("dispose",x);const N=h.indexOf(R.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class XC{constructor(e={}){const{canvas:i=NT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const M=new Uint32Array(4),E=new Int32Array(4);let T=null,x=null;const _=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Di,this.toneMapping=ja,this.toneMappingExposure=1;const R=this;let N=!1,J=0,G=0,z=null,Z=-1,D=null;const C=new fn,H=new fn;let ct=null;const lt=new Ce(0);let ht=0,mt=i.width,U=i.height,V=1,F=null,gt=null;const Et=new fn(0,0,mt,U),P=new fn(0,0,mt,U);let et=!1;const Mt=new ay;let q=!1,ft=!1;const xt=new on,At=new ot,Ot=new fn,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function xe(){return z===null?V:1}let k=r;function Ne(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",St,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),k===null){const Y="webgl2";if(k=Ne(Y,w),k===null)throw Ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,me,Vt,Oe,jt,qt,B,A,st,dt,O,Q,bt,Tt,wt,Zt,Ct,zt,kt,Nt,Rt,Yt,Qt,He;function W(){oe=new K1(k),oe.init(),Yt=new OC(k,oe),me=new k1(k,oe,e,Yt),Vt=new UC(k),Oe=new $1(k),jt=new vC,qt=new NC(k,oe,Vt,jt,me,Yt,Oe),B=new W1(R),A=new Z1(R),st=new rb(k),Qt=new G1(k,st),dt=new Q1(k,st,Oe,Qt),O=new eR(k,dt,st,Oe),kt=new tR(k,me,qt),Zt=new X1(jt),Q=new gC(R,B,A,oe,me,Qt,Zt),bt=new VC(R,jt),Tt=new yC,wt=new bC(oe),zt=new H1(R,B,A,Vt,O,y,p),Ct=new DC(R,O,me),He=new kC(k,Oe,me,Vt),Nt=new V1(k,oe,Oe),Rt=new J1(k,oe,Oe),Oe.programs=Q.programs,R.capabilities=me,R.extensions=oe,R.properties=jt,R.renderLists=Tt,R.shadowMap=Ct,R.state=Vt,R.info=Oe}W();const Ut=new HC(R,k);this.xr=Ut,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(mt,U,!1))},this.getSize=function(w){return w.set(mt,U)},this.setSize=function(w,Y,it=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}mt=w,U=Y,i.width=Math.floor(w*V),i.height=Math.floor(Y*V),it===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(mt*V,U*V).floor()},this.setDrawingBufferSize=function(w,Y,it){mt=w,U=Y,V=it,i.width=Math.floor(w*it),i.height=Math.floor(Y*it),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,Y,it,at){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,Y,it,at),Vt.viewport(C.copy(Et).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,Y,it,at){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,Y,it,at),Vt.scissor(H.copy(P).multiplyScalar(V).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){Vt.setScissorTest(et=w)},this.setOpaqueSort=function(w){F=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,Y=!0,it=!0){let at=0;if(w){let K=!1;if(z!==null){const Dt=z.texture.format;K=Dt===ap||Dt===ip||Dt===np}if(K){const Dt=z.texture.type,Pt=Dt===ua||Dt===Rr||Dt===Zo||Dt===Ns||Dt===tp||Dt===ep,It=zt.getClearColor(),Ft=zt.getClearAlpha(),Gt=It.r,ne=It.g,te=It.b;Pt?(M[0]=Gt,M[1]=ne,M[2]=te,M[3]=Ft,k.clearBufferuiv(k.COLOR,0,M)):(E[0]=Gt,E[1]=ne,E[2]=te,E[3]=Ft,k.clearBufferiv(k.COLOR,0,E))}else at|=k.COLOR_BUFFER_BIT}Y&&(at|=k.DEPTH_BUFFER_BIT),it&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Tt.dispose(),wt.dispose(),jt.dispose(),B.dispose(),A.dispose(),O.dispose(),Qt.dispose(),He.dispose(),Q.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",xn),Ut.removeEventListener("sessionend",al),Ti.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=Oe.autoReset,Y=Ct.enabled,it=Ct.autoUpdate,at=Ct.needsUpdate,K=Ct.type;W(),Oe.autoReset=w,Ct.enabled=Y,Ct.autoUpdate=it,Ct.needsUpdate=at,Ct.type=K}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jt(w){const Y=w.target;Y.removeEventListener("dispose",Jt),fe(Y)}function fe(w){Fe(w),jt.remove(w)}function Fe(w){const Y=jt.get(w).programs;Y!==void 0&&(Y.forEach(function(it){Q.releaseProgram(it)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,it,at,K,Dt){Y===null&&(Y=Ht);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,It=Sn(w,Y,it,at,K);Vt.setMaterial(at,Pt);let Ft=it.index,Gt=1;if(at.wireframe===!0){if(Ft=dt.getWireframeAttribute(it),Ft===void 0)return;Gt=2}const ne=it.drawRange,te=it.attributes.position;let he=ne.start*Gt,De=(ne.start+ne.count)*Gt;Dt!==null&&(he=Math.max(he,Dt.start*Gt),De=Math.min(De,(Dt.start+Dt.count)*Gt)),Ft!==null?(he=Math.max(he,0),De=Math.min(De,Ft.count)):te!=null&&(he=Math.max(he,0),De=Math.min(De,te.count));const Xe=De-he;if(Xe<0||Xe===1/0)return;Qt.setup(K,at,It,it,Ft);let Mn,Me=Nt;if(Ft!==null&&(Mn=st.get(Ft),Me=Rt,Me.setIndex(Mn)),K.isMesh)at.wireframe===!0?(Vt.setLineWidth(at.wireframeLinewidth*xe()),Me.setMode(k.LINES)):Me.setMode(k.TRIANGLES);else if(K.isLine){let Kt=at.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*xe()),K.isLineSegments?Me.setMode(k.LINES):K.isLineLoop?Me.setMode(k.LINE_LOOP):Me.setMode(k.LINE_STRIP)}else K.isPoints?Me.setMode(k.POINTS):K.isSprite&&Me.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,je=K._multiDrawCounts,_e=K._multiDrawCount,Qe=Ft?st.get(Ft).bytesPerElement:1,un=jt.get(at).currentProgram.getUniforms();for(let En=0;En<_e;En++)un.setValue(k,"_gl_DrawID",En),Me.render(Kt[En]/Qe,je[En])}else if(K.isInstancedMesh)Me.renderInstances(he,Xe,K.count);else if(it.isInstancedBufferGeometry){const Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,je=Math.min(it.instanceCount,Kt);Me.renderInstances(he,Xe,je)}else Me.render(he,Xe)};function ln(w,Y,it){w.transparent===!0&&w.side===aa&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Ja(w,Y,it),w.side=Za,w.needsUpdate=!0,Ja(w,Y,it),w.side=aa):Ja(w,Y,it)}this.compile=function(w,Y,it=null){it===null&&(it=w),x=wt.get(it),x.init(Y),L.push(x),it.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),w!==it&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const at=new Set;return w.traverse(function(K){const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Pt=0;Pt<Dt.length;Pt++){const It=Dt[Pt];ln(It,it,K),at.add(It)}else ln(Dt,it,K),at.add(Dt)}),L.pop(),x=null,at},this.compileAsync=function(w,Y,it=null){const at=this.compile(w,Y,it);return new Promise(K=>{function Dt(){if(at.forEach(function(Pt){jt.get(Pt).currentProgram.isReady()&&at.delete(Pt)}),at.size===0){K(w);return}setTimeout(Dt,10)}oe.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Se=null;function Wn(w){Se&&Se(w)}function xn(){Ti.stop()}function al(){Ti.start()}const Ti=new ry;Ti.setAnimationLoop(Wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){Se=w,Ut.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},Ut.addEventListener("sessionstart",xn),Ut.addEventListener("sessionend",al),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(Y),Y=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Y,z),x=wt.get(w,L.length),x.init(Y),L.push(x),xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Mt.setFromProjectionMatrix(xt),ft=this.localClippingEnabled,q=Zt.init(this.clippingPlanes,ft),T=Tt.get(w,_.length),T.init(),_.push(T),Ut.enabled===!0&&Ut.isPresenting===!0){const Dt=R.xr.getDepthSensingMesh();Dt!==null&&wr(Dt,Y,-1/0,R.sortObjects)}wr(w,Y,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(F,gt),ie=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,ie&&zt.addToRenderList(T,w),this.info.render.frame++,q===!0&&Zt.beginShadows();const it=x.state.shadowsArray;Ct.render(it,w,Y),q===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=T.opaque,K=T.transmissive;if(x.setupLights(),Y.isArrayCamera){const Dt=Y.cameras;if(K.length>0)for(let Pt=0,It=Dt.length;Pt<It;Pt++){const Ft=Dt[Pt];Dr(at,K,w,Ft)}ie&&zt.render(w);for(let Pt=0,It=Dt.length;Pt<It;Pt++){const Ft=Dt[Pt];Gs(T,w,Ft,Ft.viewport)}}else K.length>0&&Dr(at,K,w,Y),ie&&zt.render(w),Gs(T,w,Y);z!==null&&(qt.updateMultisampleRenderTarget(z),qt.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(R,w,Y),Qt.resetDefaultState(),Z=-1,D=null,L.pop(),L.length>0?(x=L[L.length-1],q===!0&&Zt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function wr(w,Y,it,at){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){at&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const Pt=O.update(w),It=w.material;It.visible&&T.push(w,Pt,It,it,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Pt=O.update(w),It=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ot.copy(Pt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(It)){const Ft=Pt.groups;for(let Gt=0,ne=Ft.length;Gt<ne;Gt++){const te=Ft[Gt],he=It[te.materialIndex];he&&he.visible&&T.push(w,Pt,he,it,Ot.z,te)}}else It.visible&&T.push(w,Pt,It,it,Ot.z,null)}}const Dt=w.children;for(let Pt=0,It=Dt.length;Pt<It;Pt++)wr(Dt[Pt],Y,it,at)}function Gs(w,Y,it,at){const K=w.opaque,Dt=w.transmissive,Pt=w.transparent;x.setupLightsView(it),q===!0&&Zt.setGlobalState(R.clippingPlanes,it),at&&Vt.viewport(C.copy(at)),K.length>0&&pa(K,Y,it),Dt.length>0&&pa(Dt,Y,it),Pt.length>0&&pa(Pt,Y,it),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Dr(w,Y,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[at.id]===void 0&&(x.state.transmissionRenderTarget[at.id]=new Ka(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Is:ua,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Dt=x.state.transmissionRenderTarget[at.id],Pt=at.viewport||C;Dt.setSize(Pt.z,Pt.w);const It=R.getRenderTarget();R.setRenderTarget(Dt),R.getClearColor(lt),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),ie&&zt.render(it);const Ft=R.toneMapping;R.toneMapping=ja;const Gt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),x.setupLightsView(at),q===!0&&Zt.setGlobalState(R.clippingPlanes,at),pa(w,it,at),qt.updateMultisampleRenderTarget(Dt),qt.updateRenderTargetMipmap(Dt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let te=0,he=Y.length;te<he;te++){const De=Y[te],Xe=De.object,Mn=De.geometry,Me=De.material,Kt=De.group;if(Me.side===aa&&Xe.layers.test(at.layers)){const je=Me.side;Me.side=kn,Me.needsUpdate=!0,Vs(Xe,it,at,Mn,Me,Kt),Me.side=je,Me.needsUpdate=!0,ne=!0}}ne===!0&&(qt.updateMultisampleRenderTarget(Dt),qt.updateRenderTargetMipmap(Dt))}R.setRenderTarget(It),R.setClearColor(lt,ht),Gt!==void 0&&(at.viewport=Gt),R.toneMapping=Ft}function pa(w,Y,it){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Dt=w.length;K<Dt;K++){const Pt=w[K],It=Pt.object,Ft=Pt.geometry,Gt=at===null?Pt.material:at,ne=Pt.group;It.layers.test(it.layers)&&Vs(It,Y,it,Ft,Gt,ne)}}function Vs(w,Y,it,at,K,Dt){w.onBeforeRender(R,Y,it,at,K,Dt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.transparent===!0&&K.side===aa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,R.renderBufferDirect(it,Y,at,K,w,Dt),K.side=Za,K.needsUpdate=!0,R.renderBufferDirect(it,Y,at,K,w,Dt),K.side=aa):R.renderBufferDirect(it,Y,at,K,w,Dt),w.onAfterRender(R,Y,it,at,K,Dt)}function Ja(w,Y,it){Y.isScene!==!0&&(Y=Ht);const at=jt.get(w),K=x.state.lights,Dt=x.state.shadowsArray,Pt=K.state.version,It=Q.getParameters(w,K.state,Dt,Y,it),Ft=Q.getProgramCacheKey(It);let Gt=at.programs;at.environment=w.isMeshStandardMaterial?Y.environment:null,at.fog=Y.fog,at.envMap=(w.isMeshStandardMaterial?A:B).get(w.envMap||at.environment),at.envMapRotation=at.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Jt),Gt=new Map,at.programs=Gt);let ne=Gt.get(Ft);if(ne!==void 0){if(at.currentProgram===ne&&at.lightsStateVersion===Pt)return tn(w,It),ne}else It.uniforms=Q.getUniforms(w),w.onBeforeCompile(It,R),ne=Q.acquireProgram(It,Ft),Gt.set(Ft,ne),at.uniforms=It.uniforms;const te=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=Zt.uniform),tn(w,It),at.needsLights=ks(w),at.lightsStateVersion=Pt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=ne,at.uniformsList=null,ne}function hi(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Zu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function tn(w,Y){const it=jt.get(w);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function Sn(w,Y,it,at,K){Y.isScene!==!0&&(Y=Ht),qt.resetTextureUnits();const Dt=Y.fog,Pt=at.isMeshStandardMaterial?Y.environment:null,It=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Qa,Ft=(at.isMeshStandardMaterial?A:B).get(at.envMap||Pt),Gt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ne=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!it.morphAttributes.position,he=!!it.morphAttributes.normal,De=!!it.morphAttributes.color;let Xe=ja;at.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const Mn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Me=Mn!==void 0?Mn.length:0,Kt=jt.get(at),je=x.state.lights;if(q===!0&&(ft===!0||w!==D)){const Nn=w===D&&at.id===Z;Zt.setState(at,w,Nn)}let _e=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==je.state.version||Kt.outputColorSpace!==It||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==Ft||at.fog===!0&&Kt.fog!==Dt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Zt.numPlanes||Kt.numIntersection!==Zt.numIntersection)||Kt.vertexAlphas!==Gt||Kt.vertexTangents!==ne||Kt.morphTargets!==te||Kt.morphNormals!==he||Kt.morphColors!==De||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==Me)&&(_e=!0):(_e=!0,Kt.__version=at.version);let Qe=Kt.currentProgram;_e===!0&&(Qe=Ja(at,Y,K));let un=!1,En=!1,Xs=!1;const We=Qe.getUniforms(),di=Kt.uniforms;if(Vt.useProgram(Qe.program)&&(un=!0,En=!0,Xs=!0),at.id!==Z&&(Z=at.id,En=!0),un||D!==w){We.setValue(k,"projectionMatrix",w.projectionMatrix),We.setValue(k,"viewMatrix",w.matrixWorldInverse);const Nn=We.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,At.setFromMatrixPosition(w.matrixWorld)),me.logarithmicDepthBuffer&&We.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&We.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,En=!0,Xs=!0)}if(K.isSkinnedMesh){We.setOptional(k,K,"bindMatrix"),We.setOptional(k,K,"bindMatrixInverse");const Nn=K.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),We.setValue(k,"boneTexture",Nn.boneTexture,qt))}K.isBatchedMesh&&(We.setOptional(k,K,"batchingTexture"),We.setValue(k,"batchingTexture",K._matricesTexture,qt),We.setOptional(k,K,"batchingIdTexture"),We.setValue(k,"batchingIdTexture",K._indirectTexture,qt),We.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&We.setValue(k,"batchingColorTexture",K._colorsTexture,qt));const ga=it.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0)&&kt.update(K,it,Qe),(En||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,We.setValue(k,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(di.envMap.value=Ft,di.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Y.environment!==null&&(di.envMapIntensity.value=Y.environmentIntensity),En&&(We.setValue(k,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&ma(di,Xs),Dt&&at.fog===!0&&bt.refreshFogUniforms(di,Dt),bt.refreshMaterialUniforms(di,at,V,U,x.state.transmissionRenderTarget[w.id]),Zu.upload(k,hi(Kt),di,qt)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Zu.upload(k,hi(Kt),di,qt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&We.setValue(k,"center",K.center),We.setValue(k,"modelViewMatrix",K.modelViewMatrix),We.setValue(k,"normalMatrix",K.normalMatrix),We.setValue(k,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Nn=at.uniformsGroups;for(let Tn=0,Ws=Nn.length;Tn<Ws;Tn++){const qs=Nn[Tn];He.update(qs,Qe),He.bind(qs,Qe)}}return Qe}function ma(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ks(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,Y,it){jt.get(w.texture).__webglTexture=Y,jt.get(w.depthTexture).__webglTexture=it;const at=jt.get(w);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=it===void 0,at.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Y){const it=jt.get(w);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,it=0){z=w,J=Y,G=it;let at=!0,K=null,Dt=!1,Pt=!1;if(w){const Ft=jt.get(w);Ft.__useDefaultFramebuffer!==void 0?(Vt.bindFramebuffer(k.FRAMEBUFFER,null),at=!1):Ft.__webglFramebuffer===void 0?qt.setupRenderTarget(w):Ft.__hasExternalTextures&&qt.rebindTextures(w,jt.get(w.texture).__webglTexture,jt.get(w.depthTexture).__webglTexture);const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Pt=!0);const ne=jt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?K=ne[Y][it]:K=ne[Y],Dt=!0):w.samples>0&&qt.useMultisampledRTT(w)===!1?K=jt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[it]:K=ne,C.copy(w.viewport),H.copy(w.scissor),ct=w.scissorTest}else C.copy(Et).multiplyScalar(V).floor(),H.copy(P).multiplyScalar(V).floor(),ct=et;if(Vt.bindFramebuffer(k.FRAMEBUFFER,K)&&at&&Vt.drawBuffers(w,K),Vt.viewport(C),Vt.scissor(H),Vt.setScissorTest(ct),Dt){const Ft=jt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,it)}else if(Pt){const Ft=jt.get(w.texture),Gt=Y||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.__webglTexture,it||0,Gt)}Z=-1},this.readRenderTargetPixels=function(w,Y,it,at,K,Dt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){Vt.bindFramebuffer(k.FRAMEBUFFER,It);try{const Ft=w.texture,Gt=Ft.format,ne=Ft.type;if(!me.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-at&&it>=0&&it<=w.height-K&&k.readPixels(Y,it,at,K,Yt.convert(Gt),Yt.convert(ne),Dt)}finally{const Ft=z!==null?jt.get(z).__webglFramebuffer:null;Vt.bindFramebuffer(k.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,Y,it,at,K,Dt,Pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){Vt.bindFramebuffer(k.FRAMEBUFFER,It);try{const Ft=w.texture,Gt=Ft.format,ne=Ft.type;if(!me.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=w.width-at&&it>=0&&it<=w.height-K){const te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.bufferData(k.PIXEL_PACK_BUFFER,Dt.byteLength,k.STREAM_READ),k.readPixels(Y,it,at,K,Yt.convert(Gt),Yt.convert(ne),0),k.flush();const he=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await OT(k,he,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Dt)}finally{k.deleteBuffer(te),k.deleteSync(he)}return Dt}}finally{const Ft=z!==null?jt.get(z).__webglFramebuffer:null;Vt.bindFramebuffer(k.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(w,Y=null,it=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1]);const at=Math.pow(2,-it),K=Math.floor(w.image.width*at),Dt=Math.floor(w.image.height*at),Pt=Y!==null?Y.x:0,It=Y!==null?Y.y:0;qt.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,it,0,0,Pt,It,K,Dt),Vt.unbindTexture()},this.copyTextureToTexture=function(w,Y,it=null,at=null,K=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,w=arguments[1],Y=arguments[2],K=arguments[3]||0,it=null);let Dt,Pt,It,Ft,Gt,ne;it!==null?(Dt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,It=it.min.x,Ft=it.min.y):(Dt=w.image.width,Pt=w.image.height,It=0,Ft=0),at!==null?(Gt=at.x,ne=at.y):(Gt=0,ne=0);const te=Yt.convert(Y.format),he=Yt.convert(Y.type);qt.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const De=k.getParameter(k.UNPACK_ROW_LENGTH),Xe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Mn=k.getParameter(k.UNPACK_SKIP_PIXELS),Me=k.getParameter(k.UNPACK_SKIP_ROWS),Kt=k.getParameter(k.UNPACK_SKIP_IMAGES),je=w.isCompressedTexture?w.mipmaps[K]:w.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,It),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ft),w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,K,Gt,ne,Dt,Pt,te,he,je.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,K,Gt,ne,je.width,je.height,te,je.data):k.texSubImage2D(k.TEXTURE_2D,K,Gt,ne,Dt,Pt,te,he,je),k.pixelStorei(k.UNPACK_ROW_LENGTH,De),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Mn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Me),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kt),K===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,it=null,at=null,K=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,at=arguments[1]||null,w=arguments[2],Y=arguments[3],K=arguments[4]||0);let Dt,Pt,It,Ft,Gt,ne,te,he,De;const Xe=w.isCompressedTexture?w.mipmaps[K]:w.image;it!==null?(Dt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,It=it.max.z-it.min.z,Ft=it.min.x,Gt=it.min.y,ne=it.min.z):(Dt=Xe.width,Pt=Xe.height,It=Xe.depth,Ft=0,Gt=0,ne=0),at!==null?(te=at.x,he=at.y,De=at.z):(te=0,he=0,De=0);const Mn=Yt.convert(Y.format),Me=Yt.convert(Y.type);let Kt;if(Y.isData3DTexture)qt.setTexture3D(Y,0),Kt=k.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)qt.setTexture2DArray(Y,0),Kt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const je=k.getParameter(k.UNPACK_ROW_LENGTH),_e=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qe=k.getParameter(k.UNPACK_SKIP_PIXELS),un=k.getParameter(k.UNPACK_SKIP_ROWS),En=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ft),k.pixelStorei(k.UNPACK_SKIP_ROWS,Gt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ne),w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Kt,K,te,he,De,Dt,Pt,It,Mn,Me,Xe.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Kt,K,te,he,De,Dt,Pt,It,Mn,Xe.data):k.texSubImage3D(Kt,K,te,he,De,Dt,Pt,It,Mn,Me,Xe),k.pixelStorei(k.UNPACK_ROW_LENGTH,je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_e),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,un),k.pixelStorei(k.UNPACK_SKIP_IMAGES,En),K===0&&Y.generateMipmaps&&k.generateMipmap(Kt),Vt.unbindTexture()},this.initRenderTarget=function(w){jt.get(w).__webglFramebuffer===void 0&&qt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?qt.setTextureCube(w,0):w.isData3DTexture?qt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qt.setTexture2DArray(w,0):qt.setTexture2D(w,0),Vt.unbindTexture()},this.resetState=function(){J=0,G=0,z=null,Vt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===rp?"display-p3":"srgb",i.unpackColorSpace=we.workingColorSpace===uc?"display-p3":"srgb"}}class s0 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class WC extends Ln{constructor(e=null,i=1,r=1,l,u,h,d,p,m=Vn,g=Vn,v,y){super(null,h,d,p,m,g,l,u,v,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qC extends nl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new ot,rc=new ot,o0=new on,Wo=new K0,Fu=new cc,od=new ot,l0=new ot;class YC extends Xn{constructor(e=new da,i=new qC){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)ac.fromBufferAttribute(i,l-1),rc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=ac.distanceTo(rc);e.setAttribute("lineDistance",new oa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fu.copy(r.boundingSphere),Fu.applyMatrix4(l),Fu.radius+=u,e.ray.intersectsSphere(Fu)===!1)return;o0.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(o0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=M,x=E-1;T<x;T+=m){const _=g.getX(T),L=g.getX(T+1),R=Hu(this,e,Wo,p,_,L);R&&i.push(R)}if(this.isLineLoop){const T=g.getX(E-1),x=g.getX(M),_=Hu(this,e,Wo,p,T,x);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let T=M,x=E-1;T<x;T+=m){const _=Hu(this,e,Wo,p,T,T+1);_&&i.push(_)}if(this.isLineLoop){const T=Hu(this,e,Wo,p,E-1,M);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Hu(s,e,i,r,l,u){const h=s.geometry.attributes.position;if(ac.fromBufferAttribute(h,l),rc.fromBufferAttribute(h,u),i.distanceSqToSegment(ac,rc,od,l0)>r)return;od.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(od);if(!(p<e.near||p>e.far))return{distance:p,point:l0.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,object:s}}const u0=new ot,c0=new ot;class jC extends YC{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)u0.fromBufferAttribute(i,l),c0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+u0.distanceTo(c0);e.setAttribute("lineDistance",new oa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gu extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=f0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=f0();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function f0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);function KC({mouseForce:s=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:T=2.2,takeoverDuration:x=.25,autoResumeDelay:_=1e3,autoRampDuration:L=.6}){const R=rt.useRef(null),N=rt.useRef(null),J=rt.useRef(null),G=rt.useRef(null),z=rt.useRef(null),Z=rt.useRef(!0),D=rt.useRef(null);return rt.useEffect(()=>{if(!R.current)return;function C(dt){let O;Array.isArray(dt)&&dt.length>0?dt.length===1?O=[dt[0],dt[0]]:O=dt:O=["#ffffff","#ffffff"];const Q=O.length,bt=new Uint8Array(Q*4);for(let wt=0;wt<Q;wt++){const Zt=new Ce(O[wt]);bt[wt*4+0]=Math.round(Zt.r*255),bt[wt*4+1]=Math.round(Zt.g*255),bt[wt*4+2]=Math.round(Zt.b*255),bt[wt*4+3]=255}const Tt=new WC(bt,Q,1,ci);return Tt.magFilter=Un,Tt.minFilter=Un,Tt.wrapS=Si,Tt.wrapT=Si,Tt.generateMipmaps=!1,Tt.needsUpdate=!0,Tt}const H=C(g),ct=new fn(0,0,0,0);class lt{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(O){this.container=O,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new XC({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ce(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new ZC,this.clock.start()}resize(){if(!this.container)return;const O=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(O.width)),this.height=Math.max(1,Math.floor(O.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ht=new lt;class mt{constructor(){this.mouseMoved=!1,this.coords=new ae,this.coords_old=new ae,this.diff=new ae,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ae,this.takeoverTo=new ae,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(O){this.container=O,this.docTarget=O.ownerDocument||null;const Q=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Q&&(this.listenerTarget=Q,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(O,Q){if(!this.container)return!1;const bt=this.container.getBoundingClientRect();return bt.width===0||bt.height===0?!1:O>=bt.left&&O<=bt.right&&Q>=bt.top&&Q<=bt.bottom}updateHoverState(O,Q){return this.isHoverInside=this.isPointInside(O,Q),this.isHoverInside}setCoords(O,Q){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const bt=this.container.getBoundingClientRect();if(bt.width===0||bt.height===0)return;const Tt=(O-bt.left)/bt.width,wt=(Q-bt.top)/bt.height;this.coords.set(Tt*2-1,-(wt*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(O,Q){this.coords.set(O,Q),this.mouseMoved=!0}onDocumentMouseMove(O){if(this.updateHoverState(O.clientX,O.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const bt=(O.clientX-Q.left)/Q.width,Tt=(O.clientY-Q.top)/Q.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(bt*2-1,-(Tt*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(O.clientX,O.clientY),this.hasUserControl=!0}}onDocumentTouchStart(O){if(O.touches.length!==1)return;const Q=O.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY),this.hasUserControl=!0)}onDocumentTouchMove(O){if(O.touches.length!==1)return;const Q=O.touches[0];this.updateHoverState(Q.clientX,Q.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Q.clientX,Q.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const O=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(O>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Q=O*O*(3-2*O);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Q)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const U=new mt;class V{constructor(O,Q,bt){this.mouse=O,this.manager=Q,this.enabled=bt.enabled,this.speed=bt.speed,this.resumeDelay=bt.resumeDelay||3e3,this.rampDurationMs=(bt.rampDuration||0)*1e3,this.active=!1,this.current=new ae(0,0),this.target=new ae,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ae,this.pickNewTarget()}pickNewTarget(){const O=Math.random;this.target.set((O()*2-1)*(1-this.margin),(O()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const O=performance.now();if(O-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=O,this.activationTime=O),!this.active)return;this.mouse.isAutoActive=!0;let bt=(O-this.lastTime)/1e3;this.lastTime=O,bt>.2&&(bt=.016);const Tt=this._tmpDir.subVectors(this.target,this.current),wt=Tt.length();if(wt<.01){this.pickNewTarget();return}Tt.normalize();let Zt=1;if(this.rampDurationMs>0){const kt=Math.min(1,(O-this.activationTime)/this.rampDurationMs);Zt=kt*kt*(3-2*kt)}const Ct=this.speed*bt*Zt,zt=Math.min(Ct,wt);this.current.addScaledVector(Tt,zt),this.mouse.setNormalized(this.current.x,this.current.y)}}const F=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,gt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Et=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,P=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,et=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Mt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,q=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ft=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,xt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,At=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ot{constructor(O){this.props=O||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new s0,this.camera=new ic,this.uniforms&&(this.material=new Gu(this.props.material),this.geometry=new Ar(2,2),this.plane=new fi(this.geometry,this.material),this.scene.add(this.plane))}update(){ht.renderer.setRenderTarget(this.props.output||null),ht.renderer.render(this.scene,this.camera),ht.renderer.setRenderTarget(null)}}class Ht extends Ot{constructor(O){super({material:{vertexShader:F,fragmentShader:P,uniforms:{boundarySpace:{value:O.cellScale},px:{value:O.cellScale},fboSize:{value:O.fboSize},velocity:{value:O.src.texture},dt:{value:O.dt},isBFECC:{value:!0}}},output:O.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const O=new da,Q=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);O.setAttribute("position",new Mi(Q,3));const bt=new Gu({vertexShader:gt,fragmentShader:P,uniforms:this.uniforms});this.line=new jC(O,bt),this.scene.add(this.line)}update({dt:O,isBounce:Q,BFECC:bt}){this.uniforms.dt.value=O,this.line.visible=Q,this.uniforms.isBFECC.value=bt,super.update()}}class ie extends Ot{constructor(O){super({output:O.dst}),this.init(O)}init(O){super.init();const Q=new Ar(1,1),bt=new Gu({vertexShader:Et,fragmentShader:q,blending:cd,depthWrite:!1,uniforms:{px:{value:O.cellScale},force:{value:new ae(0,0)},center:{value:new ae(0,0)},scale:{value:new ae(O.cursor_size,O.cursor_size)}}});this.mouse=new fi(Q,bt),this.scene.add(this.mouse)}update(O){const Q=U.diff.x/2*O.mouse_force,bt=U.diff.y/2*O.mouse_force,Tt=O.cursor_size*O.cellScale.x,wt=O.cursor_size*O.cellScale.y,Zt=Math.min(Math.max(U.coords.x,-1+Tt+O.cellScale.x*2),1-Tt-O.cellScale.x*2),Ct=Math.min(Math.max(U.coords.y,-1+wt+O.cellScale.y*2),1-wt-O.cellScale.y*2),zt=this.mouse.material.uniforms;zt.force.value.set(Q,bt),zt.center.value.set(Zt,Ct),zt.scale.value.set(O.cursor_size,O.cursor_size),super.update()}}class xe extends Ot{constructor(O){super({material:{vertexShader:F,fragmentShader:At,uniforms:{boundarySpace:{value:O.boundarySpace},velocity:{value:O.src.texture},velocity_new:{value:O.dst_.texture},v:{value:O.viscous},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst,output0:O.dst_,output1:O.dst}),this.init()}update({viscous:O,iterations:Q,dt:bt}){let Tt,wt;this.uniforms.v.value=O;for(let Zt=0;Zt<Q;Zt++)Zt%2===0?(Tt=this.props.output0,wt=this.props.output1):(Tt=this.props.output1,wt=this.props.output0),this.uniforms.velocity_new.value=Tt.texture,this.props.output=wt,this.uniforms.dt.value=bt,super.update();return wt}}class k extends Ot{constructor(O){super({material:{vertexShader:F,fragmentShader:Mt,uniforms:{boundarySpace:{value:O.boundarySpace},velocity:{value:O.src.texture},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst}),this.init()}update({vel:O}){this.uniforms.velocity.value=O.texture,super.update()}}class Ne extends Ot{constructor(O){super({material:{vertexShader:F,fragmentShader:ft,uniforms:{boundarySpace:{value:O.boundarySpace},pressure:{value:O.dst_.texture},divergence:{value:O.src.texture},px:{value:O.cellScale}}},output:O.dst,output0:O.dst_,output1:O.dst}),this.init()}update({iterations:O}){let Q,bt;for(let Tt=0;Tt<O;Tt++)Tt%2===0?(Q=this.props.output0,bt=this.props.output1):(Q=this.props.output1,bt=this.props.output0),this.uniforms.pressure.value=Q.texture,this.props.output=bt,super.update();return bt}}class oe extends Ot{constructor(O){super({material:{vertexShader:F,fragmentShader:xt,uniforms:{boundarySpace:{value:O.boundarySpace},pressure:{value:O.src_p.texture},velocity:{value:O.src_v.texture},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst}),this.init()}update({vel:O,pressure:Q}){this.uniforms.velocity.value=O.texture,this.uniforms.pressure.value=Q.texture,super.update()}}class me{constructor(O){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...O},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ae,this.cellScale=new ae,this.boundarySpace=new ae,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Is:Ni}createAllFBO(){const Q={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Un,magFilter:Un,wrapS:Si,wrapT:Si};for(let bt in this.fbos)this.fbos[bt]=new Ka(this.fboSize.x,this.fboSize.y,Q)}createShaderPass(){this.advection=new Ht({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new ie({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new k({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Ne({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new oe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const O=Math.max(1,Math.round(this.options.resolution*ht.width)),Q=Math.max(1,Math.round(this.options.resolution*ht.height)),bt=1/O,Tt=1/Q;this.cellScale.set(bt,Tt),this.fboSize.set(O,Q)}resize(){this.calcSize();for(let O in this.fbos)this.fbos[O].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let O=this.fbos.vel_1;this.options.isViscous&&(O=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:O});const Q=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:O,pressure:Q})}}class Vt{constructor(){this.init()}init(){this.simulation=new me,this.scene=new s0,this.camera=new ic,this.output=new fi(new Ar(2,2),new Gu({vertexShader:F,fragmentShader:et,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ae},palette:{value:H},bgColor:{value:ct}}})),this.scene.add(this.output)}addScene(O){this.scene.add(O)}resize(){this.simulation.resize()}render(){ht.renderer.setRenderTarget(null),ht.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Oe{constructor(O){this.props=O,ht.init(O.$wrapper),U.init(O.$wrapper),U.autoIntensity=O.autoIntensity,U.takeoverDuration=O.takeoverDuration,this.lastUserInteraction=performance.now(),U.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new V(U,this,{enabled:O.autoDemo,speed:O.autoSpeed,resumeDelay:O.autoResumeDelay,rampDuration:O.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Z.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ht.renderer.domElement),this.output=new Vt}resize(){ht.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),U.update(),ht.update(),this.output.update()}loop(){this.running&&(this.render(),G.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,G.current&&(cancelAnimationFrame(G.current),G.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),U.dispose(),ht.renderer){const O=ht.renderer.domElement;O&&O.parentNode&&O.parentNode.removeChild(O),ht.renderer.dispose()}}catch{}}}const jt=R.current;jt.style.position=jt.style.position||"relative",jt.style.overflow=jt.style.overflow||"hidden";const qt=new Oe({$wrapper:jt,autoDemo:M,autoSpeed:E,autoIntensity:T,takeoverDuration:x,autoResumeDelay:_,autoRampDuration:L});N.current=qt,(()=>{if(!N.current)return;const dt=N.current.output?.simulation;if(!dt)return;const O=dt.options.resolution;Object.assign(dt.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:p,isBounce:m}),p!==O&&dt.resize()})(),qt.start();const A=new IntersectionObserver(dt=>{const O=dt[0],Q=O.isIntersecting&&O.intersectionRatio>0;Z.current=Q,N.current&&(Q&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});A.observe(jt),z.current=A;const st=new ResizeObserver(()=>{N.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return st.observe(jt),J.current=st,()=>{if(G.current&&cancelAnimationFrame(G.current),J.current)try{J.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[d,e,h,m,i,u,l,s,p,r,g,M,E,T,x,_,L]),rt.useEffect(()=>{const C=N.current;if(!C)return;const H=C.output?.simulation;if(!H)return;const ct=H.options.resolution;Object.assign(H.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:p,isBounce:m}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=E,C.autoDriver.resumeDelay=_,C.autoDriver.rampDurationMs=L*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=T,C.autoDriver.mouse.takeoverDuration=x)),p!==ct&&H.resize()},[s,e,i,r,l,u,h,d,p,m,M,E,T,x,_,L]),be.jsx("div",{ref:R,className:`liquid-ether-container ${y||""}`,style:v})}function QC(){return be.jsx("div",{className:zE.bg,children:be.jsx(KC,{colors:["#7c018c","#ab34f5","#c981f8"],mouseForce:30,BFECC:!0,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})})}function JC(){const{showLoading:s,fadeOut:e}=OE();return be.jsxs("div",{className:JM.body,children:[s&&be.jsx(UE,{fadeOut:e}),be.jsx(QC,{})]})}function $C(){return be.jsx(GM,{children:be.jsx(_M,{children:be.jsx(E0,{path:"/",element:be.jsx(JC,{})})})})}AS.createRoot(document.getElementById("root")).render(be.jsx(rt.StrictMode,{children:be.jsx($C,{})}));
