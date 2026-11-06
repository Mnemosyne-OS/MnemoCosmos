var t2=Object.defineProperty;var n2=(t,e,n)=>e in t?t2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Tp=(t,e,n)=>n2(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var h1={exports:{}},Yc={},p1={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),i2=Symbol.for("react.portal"),r2=Symbol.for("react.fragment"),s2=Symbol.for("react.strict_mode"),o2=Symbol.for("react.profiler"),a2=Symbol.for("react.provider"),l2=Symbol.for("react.context"),c2=Symbol.for("react.forward_ref"),u2=Symbol.for("react.suspense"),d2=Symbol.for("react.memo"),f2=Symbol.for("react.lazy"),Ap=Symbol.iterator;function h2(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var m1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g1=Object.assign,v1={};function go(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||m1}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _1(){}_1.prototype=go.prototype;function Z0(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||m1}var Q0=Z0.prototype=new _1;Q0.constructor=Z0;g1(Q0,go.prototype);Q0.isPureReactComponent=!0;var bp=Array.isArray,x1=Object.prototype.hasOwnProperty,J0={current:null},y1={key:!0,ref:!0,__self:!0,__source:!0};function S1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x1.call(e,i)&&!y1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:t,key:s,ref:o,props:r,_owner:J0.current}}function p2(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function m2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cp=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m2(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case i2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Cp,"$&/")+"/"),Vl(r,e,n,"",function(c){return c})):r!=null&&(eh(r)&&(r=p2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=Vl(s,e,n,l,r)}else if(l=h2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function g2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Hl={transition:null},v2={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:J0};function M1(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=go;Je.Fragment=r2;Je.Profiler=o2;Je.PureComponent=Z0;Je.StrictMode=s2;Je.Suspense=u2;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v2;Je.act=M1;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=g1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=J0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x1.call(e,l)&&!y1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:l2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a2,_context:t},t.Consumer=t};Je.createElement=S1;Je.createFactory=function(t){var e=S1.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:c2,render:t}};Je.isValidElement=eh;Je.lazy=function(t){return{$$typeof:f2,_payload:{_status:-1,_result:t},_init:g2}};Je.memo=function(t,e){return{$$typeof:d2,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};Je.unstable_act=M1;Je.useCallback=function(t,e){return hn.current.useCallback(t,e)};Je.useContext=function(t){return hn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return hn.current.useEffect(t,e)};Je.useId=function(){return hn.current.useId()};Je.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return hn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Je.useRef=function(t){return hn.current.useRef(t)};Je.useState=function(t){return hn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return hn.current.useTransition()};Je.version="18.3.1";p1.exports=Je;var Se=p1.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _2=Se,x2=Symbol.for("react.element"),y2=Symbol.for("react.fragment"),S2=Object.prototype.hasOwnProperty,M2=_2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E2={key:!0,ref:!0,__self:!0,__source:!0};function E1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)S2.call(e,i)&&!E2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x2,type:t,key:s,ref:o,props:r,_owner:M2.current}}Yc.Fragment=y2;Yc.jsx=E1;Yc.jsxs=E1;h1.exports=Yc;var R=h1.exports,w1={exports:{}},Nn={},T1={exports:{}},A1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var G=U.length;U.push(Y);e:for(;0<G;){var q=G-1>>>1,X=U[q];if(0<r(X,Y))U[q]=Y,U[G]=X,G=q;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Y=U[0],G=U.pop();if(G!==Y){U[0]=G;e:for(var q=0,X=U.length,Q=X>>>1;q<Q;){var de=2*(q+1)-1,ye=U[de],V=de+1,ae=U[V];if(0>r(ye,G))V<X&&0>r(ae,ye)?(U[q]=ae,U[V]=G,q=V):(U[q]=ye,U[de]=G,q=de);else if(V<X&&0>r(ae,G))U[q]=ae,U[V]=G,q=V;else break e}}return Y}function r(U,Y){var G=U.sortIndex-Y.sortIndex;return G!==0?G:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,g=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=U)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(U){if(x=!1,_(U),!g)if(n(l)!==null)g=!0,W(b);else{var Y=n(c);Y!==null&&k(M,Y.startTime-U)}}function b(U,Y){g=!1,x&&(x=!1,h(y),y=-1),p=!0;var G=u;try{for(_(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||U&&!N());){var q=f.callback;if(typeof q=="function"){f.callback=null,u=f.priorityLevel;var X=q(f.expirationTime<=Y);Y=t.unstable_now(),typeof X=="function"?f.callback=X:f===n(l)&&i(l),_(Y)}else i(l);f=n(l)}if(f!==null)var Q=!0;else{var de=n(c);de!==null&&k(M,de.startTime-Y),Q=!1}return Q}finally{f=null,u=G,p=!1}}var E=!1,T=null,y=-1,C=5,L=-1;function N(){return!(t.unstable_now()-L<C)}function O(){if(T!==null){var U=t.unstable_now();L=U;var Y=!0;try{Y=T(!0,U)}finally{Y?Z():(E=!1,T=null)}}else E=!1}var Z;if(typeof m=="function")Z=function(){m(O)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,I=ne.port2;ne.port1.onmessage=O,Z=function(){I.postMessage(null)}}else Z=function(){v(O,0)};function W(U){T=U,E||(E=!0,Z())}function k(U,Y){y=v(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var Y=3;break;default:Y=u}var G=u;u=Y;try{return U()}finally{u=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=u;u=U;try{return Y()}finally{u=G}},t.unstable_scheduleCallback=function(U,Y,G){var q=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?q+G:q):G=q,U){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=G+X,U={id:d++,callback:Y,priorityLevel:U,startTime:G,expirationTime:X,sortIndex:-1},G>q?(U.sortIndex=G,e(c,U),n(l)===null&&U===n(c)&&(x?(h(y),y=-1):x=!0,k(M,G-q))):(U.sortIndex=X,e(l,U),g||p||(g=!0,W(b))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var Y=u;return function(){var G=u;u=Y;try{return U.apply(this,arguments)}finally{u=G}}}})(A1);T1.exports=A1;var w2=T1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T2=Se,Pn=w2;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b1=new Set,aa={};function ls(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(aa[t]=e,t=0;t<e.length;t++)b1.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,A2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},Pp={};function b2(t){return Bd.call(Pp,t)?!0:Bd.call(Rp,t)?!1:A2.test(t)?Pp[t]=!0:(Rp[t]=!0,!1)}function C2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R2(t,e,n,i){if(e===null||typeof e>"u"||C2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);Kt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R2(e,n,r,i)&&(n=null),i||r===null?b2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=T2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),P1=Symbol.for("react.offscreen"),Np=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,wu;function Go(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Tu=!1;function Au(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function P2(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ns:return"Portal";case Gd:return"Profiler";case rh:return"StrictMode";case Vd:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R1:return(t.displayName||"Context")+".Consumer";case C1:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Wd(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Wd(t(e))}catch{}}return null}function N2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wd(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L2(t){var e=N1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=L2(t))}function L1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=N1(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D1(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function Xd(t,e){D1(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$d(t,e.type,n):e.hasOwnProperty("defaultValue")&&$d(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $d(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(Vo(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function I1(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,F1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D2=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){D2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function O1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function k1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=O1(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I2=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(I2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jd=null,Xs=null,$s=null;function Fp(t){if(t=Da(t)){if(typeof Jd!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=eu(e),Jd(t.stateNode,t.type,e))}}function z1(t){Xs?$s?$s.push(t):$s=[t]:Xs=t}function B1(){if(Xs){var t=Xs,e=$s;if($s=Xs=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function G1(t,e){return t(e)}function V1(){}var bu=!1;function H1(t,e,n){if(bu)return t(e,n);bu=!0;try{return G1(t,e,n)}finally{bu=!1,(Xs!==null||$s!==null)&&(V1(),B1())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var ef=!1;if(Wi)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{ef=!1}function U2(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Yo=!1,uc=null,dc=!1,tf=null,F2={onError:function(t){Yo=!0,uc=t}};function O2(t,e,n,i,r,s,o,a,l){Yo=!1,uc=null,U2.apply(F2,arguments)}function k2(t,e,n,i,r,s,o,a,l){if(O2.apply(this,arguments),Yo){if(Yo){var c=uc;Yo=!1,uc=null}else throw Error(fe(198));dc||(dc=!0,tf=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Op(t){if(cs(t)!==t)throw Error(fe(188))}function z2(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Op(r),t;if(s===i)return Op(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function j1(t){return t=z2(t),t!==null?X1(t):null}function X1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X1(t);if(e!==null)return e;t=t.sibling}return null}var $1=Pn.unstable_scheduleCallback,kp=Pn.unstable_cancelCallback,B2=Pn.unstable_shouldYield,G2=Pn.unstable_requestPaint,Dt=Pn.unstable_now,V2=Pn.unstable_getCurrentPriorityLevel,lh=Pn.unstable_ImmediatePriority,q1=Pn.unstable_UserBlockingPriority,fc=Pn.unstable_NormalPriority,H2=Pn.unstable_LowPriority,Y1=Pn.unstable_IdlePriority,Kc=null,xi=null;function W2(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:$2,j2=Math.log,X2=Math.LN2;function $2(t){return t>>>=0,t===0?32:31-(j2(t)/X2|0)|0}var qa=64,Ya=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function q2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=q2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K1(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function K2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Z1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q1,uh,J1,ev,tv,rf=!1,Ka=[],vr=null,_r=null,xr=null,ua=new Map,da=new Map,ur=[],Z2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q2(t,e,n,i,r){switch(e){case"focusin":return vr=wo(vr,t,e,n,i,r),!0;case"dragenter":return _r=wo(_r,t,e,n,i,r),!0;case"mouseover":return xr=wo(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,wo(ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,wo(da.get(s)||null,t,e,n,i,r)),!0}return!1}function nv(t){var e=Hr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=W1(n),e!==null){t.blockedOn=e,tv(t.priority,function(){J1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qd=i,n.target.dispatchEvent(i),Qd=null}else return e=Da(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Bp(t,e,n){Wl(t)&&n.delete(e)}function J2(){rf=!1,vr!==null&&Wl(vr)&&(vr=null),_r!==null&&Wl(_r)&&(_r=null),xr!==null&&Wl(xr)&&(xr=null),ua.forEach(Bp),da.forEach(Bp)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,J2)))}function fa(t){function e(r){return To(r,t)}if(0<Ka.length){To(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&To(vr,t),_r!==null&&To(_r,t),xr!==null&&To(xr,t),ua.forEach(e),da.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&ur.shift()}var qs=Ki.ReactCurrentBatchConfig,pc=!0;function e3(t,e,n,i){var r=ut,s=qs.transition;qs.transition=null;try{ut=1,dh(t,e,n,i)}finally{ut=r,qs.transition=s}}function t3(t,e,n,i){var r=ut,s=qs.transition;qs.transition=null;try{ut=4,dh(t,e,n,i)}finally{ut=r,qs.transition=s}}function dh(t,e,n,i){if(pc){var r=sf(t,e,n,i);if(r===null)ku(t,e,i,mc,n),zp(t,i);else if(Q2(r,t,e,n,i))i.stopPropagation();else if(zp(t,i),e&4&&-1<Z2.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&Q1(s),s=sf(t,e,n,i),s===null&&ku(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var mc=null;function sf(t,e,n,i){if(mc=null,t=ah(i),t=Hr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V2()){case lh:return 1;case q1:return 4;case fc:case H2:return 16;case Y1:return 536870912;default:return 16}default:return 16}}var hr=null,fh=null,jl=null;function rv(){if(jl)return jl;var t,e=fh,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Gp(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Gp,this.isPropagationStopped=Gp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Ln(vo),La=At({},vo,{view:0,detail:0}),n3=Ln(La),Ru,Pu,Ao,Zc=At({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(Ru=t.screenX-Ao.screenX,Pu=t.screenY-Ao.screenY):Pu=Ru=0,Ao=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),Vp=Ln(Zc),i3=At({},Zc,{dataTransfer:0}),r3=Ln(i3),s3=At({},La,{relatedTarget:0}),Nu=Ln(s3),o3=At({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),a3=Ln(o3),l3=At({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c3=Ln(l3),u3=At({},vo,{data:0}),Hp=Ln(u3),d3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h3[t])?!!e[t]:!1}function ph(){return p3}var m3=At({},La,{key:function(t){if(t.key){var e=d3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g3=Ln(m3),v3=At({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Ln(v3),_3=At({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),x3=Ln(_3),y3=At({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),S3=Ln(y3),M3=At({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E3=Ln(M3),w3=[9,13,27,32],mh=Wi&&"CompositionEvent"in window,Ko=null;Wi&&"documentMode"in document&&(Ko=document.documentMode);var T3=Wi&&"TextEvent"in window&&!Ko,sv=Wi&&(!mh||Ko&&8<Ko&&11>=Ko),jp=" ",Xp=!1;function ov(t,e){switch(t){case"keyup":return w3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function A3(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(Xp=!0,jp);case"textInput":return t=e.data,t===jp&&Xp?null:t;default:return null}}function b3(t,e){if(Ds)return t==="compositionend"||!mh&&ov(t,e)?(t=rv(),jl=fh=hr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sv&&e.locale!=="ko"?null:e.data;default:return null}}var C3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C3[t.type]:e==="textarea"}function lv(t,e,n,i){z1(i),e=gc(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,ha=null;function R3(t){xv(t,0)}function Qc(t){var e=Fs(t);if(L1(e))return t}function P3(t,e){if(t==="change")return e}var cv=!1;if(Wi){var Lu;if(Wi){var Du="oninput"in document;if(!Du){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Du=typeof qp.oninput=="function"}Lu=Du}else Lu=!1;cv=Lu&&(!document.documentMode||9<document.documentMode)}function Yp(){Zo&&(Zo.detachEvent("onpropertychange",uv),ha=Zo=null)}function uv(t){if(t.propertyName==="value"&&Qc(ha)){var e=[];lv(e,ha,t,ah(t)),H1(R3,e)}}function N3(t,e,n){t==="focusin"?(Yp(),Zo=e,ha=n,Zo.attachEvent("onpropertychange",uv)):t==="focusout"&&Yp()}function L3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(ha)}function D3(t,e){if(t==="click")return Qc(e)}function I3(t,e){if(t==="input"||t==="change")return Qc(e)}function U3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:U3;function pa(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fv(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F3(t){var e=fv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dv(n.ownerDocument.documentElement,n)){if(i!==null&&gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zp(n,s);var o=Zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O3=Wi&&"documentMode"in document&&11>=document.documentMode,Is=null,of=null,Qo=null,af=!1;function Qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||Is==null||Is!==cc(i)||(i=Is,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&pa(Qo,i)||(Qo=i,i=gc(of,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Iu={},hv={};Wi&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Jc(t){if(Iu[t])return Iu[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Iu[t]=e[n];return t}var pv=Jc("animationend"),mv=Jc("animationiteration"),gv=Jc("animationstart"),vv=Jc("transitionend"),_v=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){_v.set(t,e),ls(e,[t])}for(var Uu=0;Uu<Jp.length;Uu++){var Fu=Jp[Uu],k3=Fu.toLowerCase(),z3=Fu[0].toUpperCase()+Fu.slice(1);Pr(k3,"on"+z3)}Pr(pv,"onAnimationEnd");Pr(mv,"onAnimationIteration");Pr(gv,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(vv,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function em(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,k2(i,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}}}if(dc)throw t=tf,dc=!1,tf=null,t}function _t(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(yv(e,t,2,!1),n.add(i))}function Ou(t,e,n){var i=0;e&&(i|=4),yv(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[Ja]){t[Ja]=!0,b1.forEach(function(n){n!=="selectionchange"&&(B3.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Ou("selectionchange",!1,e))}}function yv(t,e,n,i){switch(iv(e)){case 1:var r=e3;break;case 4:r=t3;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}H1(function(){var c=s,d=ah(n),f=[];e:{var u=_v.get(t);if(u!==void 0){var p=hh,g=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=g3;break;case"focusin":g="focus",p=Nu;break;case"focusout":g="blur",p=Nu;break;case"beforeblur":case"afterblur":p=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=r3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=x3;break;case pv:case mv:case gv:p=a3;break;case vv:p=S3;break;case"scroll":p=n3;break;case"wheel":p=E3;break;case"copy":case"cut":case"paste":p=c3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wp}var x=(e&4)!==0,v=!x&&t==="scroll",h=x?u!==null?u+"Capture":null:u;x=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=ca(m,h),M!=null&&x.push(ga(m,M,_)))),v)break;m=m.return}0<x.length&&(u=new p(u,g,null,n,d),f.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Qd&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[ji]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Hr(g):null,g!==null&&(v=cs(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Vp,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Wp,M="onPointerLeave",h="onPointerEnter",m="pointer"),v=p==null?u:Fs(p),_=g==null?u:Fs(g),u=new x(M,m+"leave",p,n,d),u.target=v,u.relatedTarget=_,M=null,Hr(d)===c&&(x=new x(h,m+"enter",g,n,d),x.target=_,x.relatedTarget=v,M=x),v=M,p&&g)t:{for(x=p,h=g,m=0,_=x;_;_=hs(_))m++;for(_=0,M=h;M;M=hs(M))_++;for(;0<m-_;)x=hs(x),m--;for(;0<_-m;)h=hs(h),_--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=hs(x),h=hs(h)}x=null}else x=null;p!==null&&tm(f,u,p,x,!1),g!==null&&v!==null&&tm(f,v,g,x,!0)}}e:{if(u=c?Fs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=P3;else if($p(u))if(cv)b=I3;else{b=L3;var E=N3}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=D3);if(b&&(b=b(t,c))){lv(f,b,n,d);break e}E&&E(t,u,c),t==="focusout"&&(E=u._wrapperState)&&E.controlled&&u.type==="number"&&$d(u,"number",u.value)}switch(E=c?Fs(c):window,t){case"focusin":($p(E)||E.contentEditable==="true")&&(Is=E,of=c,Qo=null);break;case"focusout":Qo=of=Is=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Qp(f,n,d);break;case"selectionchange":if(O3)break;case"keydown":case"keyup":Qp(f,n,d)}var T;if(mh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ds?ov(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sv&&n.locale!=="ko"&&(Ds||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ds&&(T=rv()):(hr=d,fh="value"in hr?hr.value:hr.textContent,Ds=!0)),E=gc(c,y),0<E.length&&(y=new Hp(y,t,null,n,d),f.push({event:y,listeners:E}),T?y.data=T:(T=av(n),T!==null&&(y.data=T)))),(T=T3?A3(t,n):b3(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(d=new Hp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}xv(f,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(t,n),s!=null&&i.unshift(ga(t,s,r)),s=ca(t,e),s!=null&&i.push(ga(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ca(n,s),l!=null&&o.unshift(ga(n,l,a))):r||(l=ca(n,s),l!=null&&o.push(ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G3=/\r\n?/g,V3=/\u0000|\uFFFD/g;function nm(t){return(typeof t=="string"?t:""+t).replace(G3,`
`).replace(V3,"")}function el(t,e,n){if(e=nm(e),nm(t)!==e&&n)throw Error(fe(425))}function vc(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,H3=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,W3=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(j3)}:df;function j3(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),mi="__reactFiber$"+_o,va="__reactProps$"+_o,ji="__reactContainer$"+_o,ff="__reactEvents$"+_o,X3="__reactListeners$"+_o,$3="__reactHandles$"+_o;function Hr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rm(t);t!==null;){if(n=t[mi])return n;t=rm(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function eu(t){return t[va]||null}var hf=[],Os=-1;function Nr(t){return{current:t}}function xt(t){0>Os||(t.current=hf[Os],hf[Os]=null,Os--)}function vt(t,e){Os++,hf[Os]=t.current,t.current=e}var br={},on=Nr(br),_n=Nr(!1),Jr=br;function io(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function _c(){xt(_n),xt(on)}function sm(t,e,n){if(on.current!==br)throw Error(fe(168));vt(on,e),vt(_n,n)}function Sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,N2(t)||"Unknown",r));return At({},n,i)}function xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Jr=on.current,vt(on,t),vt(_n,_n.current),!0}function om(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=Sv(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,xt(_n),xt(on),vt(on,t)):xt(_n),vt(_n,n)}var Ui=null,tu=!1,Bu=!1;function Mv(t){Ui===null?Ui=[t]:Ui.push(t)}function q3(t){tu=!0,Mv(t)}function Lr(){if(!Bu&&Ui!==null){Bu=!0;var t=0,e=ut;try{var n=Ui;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,tu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),$1(lh,Lr),r}finally{ut=e,Bu=!1}}return null}var ks=[],zs=0,yc=null,Sc=0,Fn=[],On=0,es=null,Oi=1,ki="";function kr(t,e){ks[zs++]=Sc,ks[zs++]=yc,yc=t,Sc=e}function Ev(t,e,n){Fn[On++]=Oi,Fn[On++]=ki,Fn[On++]=es,es=t;var i=Oi;t=ki;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ni(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function vh(t){t.return!==null&&(kr(t,1),Ev(t,1,0))}function _h(t){for(;t===yc;)yc=ks[--zs],ks[zs]=null,Sc=ks[--zs],ks[zs]=null;for(;t===es;)es=Fn[--On],Fn[On]=null,ki=Fn[--On],Fn[On]=null,Oi=Fn[--On],Fn[On]=null}var Rn=null,Cn=null,Mt=!1,Qn=null;function wv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(Mt){var e=Cn;if(e){var n=e;if(!am(t,e)){if(pf(t))throw Error(fe(418));e=yr(n.nextSibling);var i=Rn;e&&am(t,e)?wv(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Rn=t)}}else{if(pf(t))throw Error(fe(418));t.flags=t.flags&-4097|2,Mt=!1,Rn=t}}}function lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function tl(t){if(t!==Rn)return!1;if(!Mt)return lm(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Cn)){if(pf(t))throw Tv(),Error(fe(418));for(;e;)wv(t,e),e=yr(e.nextSibling)}if(lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?yr(t.stateNode.nextSibling):null;return!0}function Tv(){for(var t=Cn;t;)t=yr(t.nextSibling)}function ro(){Cn=Rn=null,Mt=!1}function xh(t){Qn===null?Qn=[t]:Qn.push(t)}var Y3=Ki.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cm(t){var e=t._init;return e(t._payload)}function Av(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=wr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,M){return m===null||m.tag!==6?(m=$u(_,h.mode,M),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,M){var b=_.type;return b===Ls?d(h,m,_.props.children,M,_.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&cm(b)===m.type)?(M=r(m,_.props),M.ref=bo(h,m,_),M.return=h,M):(M=Jl(_.type,_.key,_.props,null,h.mode,M),M.ref=bo(h,m,_),M.return=h,M)}function c(h,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=qu(_,h.mode,M),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function d(h,m,_,M,b){return m===null||m.tag!==7?(m=Kr(_,h.mode,M,b),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$u(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ja:return _=Jl(m.type,m.key,m.props,null,h.mode,_),_.ref=bo(h,null,m),_.return=h,_;case Ns:return m=qu(m,h.mode,_),m.return=h,m;case lr:var M=m._init;return f(h,M(m._payload),_)}if(Vo(m)||Mo(m))return m=Kr(m,h.mode,_,null),m.return=h,m;nl(h,m)}return null}function u(h,m,_,M){var b=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(h,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:return _.key===b?l(h,m,_,M):null;case Ns:return _.key===b?c(h,m,_,M):null;case lr:return b=_._init,u(h,m,b(_._payload),M)}if(Vo(_)||Mo(_))return b!==null?null:d(h,m,_,M,null);nl(h,_)}return null}function p(h,m,_,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(m,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:return h=h.get(M.key===null?_:M.key)||null,l(m,h,M,b);case Ns:return h=h.get(M.key===null?_:M.key)||null,c(m,h,M,b);case lr:var E=M._init;return p(h,m,_,E(M._payload),b)}if(Vo(M)||Mo(M))return h=h.get(_)||null,d(m,h,M,b,null);nl(m,M)}return null}function g(h,m,_,M){for(var b=null,E=null,T=m,y=m=0,C=null;T!==null&&y<_.length;y++){T.index>y?(C=T,T=null):C=T.sibling;var L=u(h,T,_[y],M);if(L===null){T===null&&(T=C);break}t&&T&&L.alternate===null&&e(h,T),m=s(L,m,y),E===null?b=L:E.sibling=L,E=L,T=C}if(y===_.length)return n(h,T),Mt&&kr(h,y),b;if(T===null){for(;y<_.length;y++)T=f(h,_[y],M),T!==null&&(m=s(T,m,y),E===null?b=T:E.sibling=T,E=T);return Mt&&kr(h,y),b}for(T=i(h,T);y<_.length;y++)C=p(T,h,y,_[y],M),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?y:C.key),m=s(C,m,y),E===null?b=C:E.sibling=C,E=C);return t&&T.forEach(function(N){return e(h,N)}),Mt&&kr(h,y),b}function x(h,m,_,M){var b=Mo(_);if(typeof b!="function")throw Error(fe(150));if(_=b.call(_),_==null)throw Error(fe(151));for(var E=b=null,T=m,y=m=0,C=null,L=_.next();T!==null&&!L.done;y++,L=_.next()){T.index>y?(C=T,T=null):C=T.sibling;var N=u(h,T,L.value,M);if(N===null){T===null&&(T=C);break}t&&T&&N.alternate===null&&e(h,T),m=s(N,m,y),E===null?b=N:E.sibling=N,E=N,T=C}if(L.done)return n(h,T),Mt&&kr(h,y),b;if(T===null){for(;!L.done;y++,L=_.next())L=f(h,L.value,M),L!==null&&(m=s(L,m,y),E===null?b=L:E.sibling=L,E=L);return Mt&&kr(h,y),b}for(T=i(h,T);!L.done;y++,L=_.next())L=p(T,h,y,L.value,M),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?y:L.key),m=s(L,m,y),E===null?b=L:E.sibling=L,E=L);return t&&T.forEach(function(O){return e(h,O)}),Mt&&kr(h,y),b}function v(h,m,_,M){if(typeof _=="object"&&_!==null&&_.type===Ls&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:e:{for(var b=_.key,E=m;E!==null;){if(E.key===b){if(b=_.type,b===Ls){if(E.tag===7){n(h,E.sibling),m=r(E,_.props.children),m.return=h,h=m;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&cm(b)===E.type){n(h,E.sibling),m=r(E,_.props),m.ref=bo(h,E,_),m.return=h,h=m;break e}n(h,E);break}else e(h,E);E=E.sibling}_.type===Ls?(m=Kr(_.props.children,h.mode,M,_.key),m.return=h,h=m):(M=Jl(_.type,_.key,_.props,null,h.mode,M),M.ref=bo(h,m,_),M.return=h,h=M)}return o(h);case Ns:e:{for(E=_.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=qu(_,h.mode,M),m.return=h,h=m}return o(h);case lr:return E=_._init,v(h,m,E(_._payload),M)}if(Vo(_))return g(h,m,_,M);if(Mo(_))return x(h,m,_,M);nl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=$u(_,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return v}var so=Av(!0),bv=Av(!1),Mc=Nr(null),Ec=null,Bs=null,yh=null;function Sh(){yh=Bs=Ec=null}function Mh(t){var e=Mc.current;xt(Mc),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Ec=t,yh=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ec===null)throw Error(fe(308));Bs=t,Ec.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Wr=null;function Eh(t){Wr===null?Wr=[t]:Wr.push(t)}function Cv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function um(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(u=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=At({},f,u);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=f}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Ia={},yi=Nr(Ia),_a=Nr(Ia),xa=Nr(Ia);function jr(t){if(t===Ia)throw Error(fe(174));return t}function Th(t,e){switch(vt(xa,e),vt(_a,t),vt(yi,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}xt(yi),vt(yi,e)}function oo(){xt(yi),xt(_a),xt(xa)}function Pv(t){jr(xa.current);var e=jr(yi.current),n=Yd(e,t.type);e!==n&&(vt(_a,t),vt(yi,n))}function Ah(t){_a.current===t&&(xt(yi),xt(_a))}var wt=Nr(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function bh(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var ql=Ki.ReactCurrentDispatcher,Vu=Ki.ReactCurrentBatchConfig,ts=0,Tt=null,kt=null,Ht=null,Ac=!1,Jo=!1,ya=0,K3=0;function Qt(){throw Error(fe(321))}function Ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Rh(t,e,n,i,r,s){if(ts=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?ey:ty,t=n(i,r),Jo){s=0;do{if(Jo=!1,ya=0,25<=s)throw Error(fe(301));s+=1,Ht=kt=null,e.updateQueue=null,ql.current=ny,t=n(i,r)}while(Jo)}if(ql.current=bc,e=kt!==null&&kt.next!==null,ts=0,Ht=kt=Tt=null,Ac=!1,e)throw Error(fe(300));return t}function Ph(){var t=ya!==0;return ya=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Hn(){if(kt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Ht===null?Tt.memoizedState:Ht.next;if(e!==null)Ht=e,kt=t;else{if(t===null)throw Error(fe(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Sa(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Nv(){}function Lv(t,e){var n=Tt,i=Hn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Nh(Uv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ma(9,Iv.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(fe(349));ts&30||Dv(n,e,r)}return r}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iv(t,e,n,i){e.value=n,e.getSnapshot=i,Fv(e)&&Ov(t)}function Uv(t,e,n){return n(function(){Fv(e)&&Ov(t)})}function Fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function Ov(t){var e=Xi(t,1);e!==null&&ii(e,t,1,-1)}function fm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=J3.bind(null,Tt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kv(){return Hn().memoizedState}function Yl(t,e,n,i){var r=hi();Tt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Ch(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function hm(t,e){return Yl(8390656,8,t,e)}function Nh(t,e){return nu(2048,8,t,e)}function zv(t,e){return nu(4,2,t,e)}function Bv(t,e){return nu(4,4,t,e)}function Gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,Gv.bind(null,e,t),n)}function Lh(){}function Hv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return ts&21?(ri(n,e)||(n=K1(),Tt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Z3(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Vu.transition;Vu.transition={};try{t(!1),e()}finally{ut=n,Vu.transition=i}}function Xv(){return Hn().memoizedState}function Q3(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))qv(e,n);else if(n=Cv(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),Yv(n,e,i)}}function J3(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))qv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,Eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cv(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),Yv(n,e,i))}}function $v(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function qv(t,e){Jo=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var bc={readContext:Vn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},ey={readContext:Vn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,Gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Q3.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Lh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=Z3.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=hi();if(Mt){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),jt===null)throw Error(fe(349));ts&30||Dv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hm(Uv.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,Iv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=jt.identifierPrefix;if(Mt){var n=ki,i=Oi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ty={readContext:Vn,useCallback:Hv,useContext:Vn,useEffect:Nh,useImperativeHandle:Vv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Wv,useReducer:Hu,useRef:kv,useState:function(){return Hu(Sa)},useDebugValue:Lh,useDeferredValue:function(t){var e=Hn();return jv(e,kt.memoizedState,t)},useTransition:function(){var t=Hu(Sa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Lv,useId:Xv,unstable_isNewReconciler:!1},ny={readContext:Vn,useCallback:Hv,useContext:Vn,useEffect:Nh,useImperativeHandle:Vv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Wv,useReducer:Wu,useRef:kv,useState:function(){return Wu(Sa)},useDebugValue:Lh,useDeferredValue:function(t){var e=Hn();return kt===null?e.memoizedState=t:jv(e,kt.memoizedState,t)},useTransition:function(){var t=Wu(Sa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Lv,useId:Xv,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Er(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ii(e,t,r,i),$l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Er(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(ii(e,t,r,i),$l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Er(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(ii(e,t,i,n),$l(e,t,i))}};function pm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(n,i)||!pa(r,s):!0}function Kv(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=xn(e)?Jr:on.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=xn(e)?Jr:on.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),wc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=P2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function Zv(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,Rf=i),xf(t,e)},n}function Qv(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vy.bind(null,t,e,n),e.then(t,t))}function vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var ry=Ki.ReactCurrentOwner,vn=!1;function cn(t,e,n,i){e.child=t===null?bv(e,null,n,i):so(e,t.child,n,i)}function xm(t,e,n,i,r){n=n.render;var s=e.ref;return Ys(e,r),i=Rh(t,e,n,i,s,r),n=Ph(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(Mt&&n&&vh(e),e.flags|=1,cn(t,e,i,r),e.child)}function ym(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(o,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(pa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return yf(t,e,n,i,r)}function e_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Vs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Vs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Vs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Vs,bn),bn|=i;return cn(t,e,r,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=xn(n)?Jr:on.current;return s=io(e,s),Ys(e,r),n=Rh(t,e,n,i,s,r),i=Ph(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(Mt&&i&&vh(e),e.flags|=1,cn(t,e,n,r),e.child)}function Sm(t,e,n,i,r){if(xn(n)){var s=!0;xc(e)}else s=!1;if(Ys(e,r),e.stateNode===null)Kl(t,e),Kv(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=xn(n)?Jr:on.current,c=io(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mm(e,o,i,c),cr=!1;var u=e.memoizedState;o.state=u,wc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||_n.current||cr?(typeof d=="function"&&(vf(e,n,d,i),l=e.memoizedState),(a=cr||pm(e,n,a,i,u,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=xn(n)?Jr:on.current,l=io(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||u!==l)&&mm(e,o,i,l),cr=!1,u=e.memoizedState,o.state=u,wc(e,i,o,r);var g=e.memoizedState;a!==f||u!==g||_n.current||cr?(typeof p=="function"&&(vf(e,n,p,i),g=e.memoizedState),(c=cr||pm(e,n,c,i,u,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){t_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&om(e,n,!1),$i(t,e,s);i=e.stateNode,ry.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&om(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sm(t,e.context,!1),Th(t,e.containerInfo)}function Mm(t,e,n,i,r){return ro(),xh(r),e.flags|=256,cn(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function i_(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(wt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):Dh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&xh(i),so(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ju(Error(fe(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=Mf,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=ju(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),ii(i,t,r,-1))}return zh(),i=ju(Error(fe(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=yr(r.nextSibling),Rn=e,Mt=!0,Qn=null,t!==null&&(Fn[On++]=Oi,Fn[On++]=ki,Fn[On++]=es,Oi=t.id,ki=t.overflow,es=e),e=Dh(e,i.children),e.flags|=4096,e)}function Em(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function Xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Em(t,n,e);else if(t.tag===19)Em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oy(t,e,n){switch(e.tag){case 3:n_(e),ro();break;case 5:Pv(e);break;case 1:xn(e.type)&&xc(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?i_(t,e,n):(vt(wt,wt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);vt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return $i(t,e,n)}var s_,wf,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};o_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(yi.current);var s=null;switch(n){case"input":r=jd(t,r),i=jd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=qd(t,r),i=qd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}Kd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return xn(e.type)&&_c(),Jt(e),null;case 3:return i=e.stateNode,oo(),xt(_n),xt(on),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(Lf(Qn),Qn=null))),wf(t,e),Jt(e),null;case 5:Ah(e);var r=jr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Jt(e),null}if(t=jr(yi.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Lp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Ip(i,s),_t("invalid",i)}Kd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Xa(i),Dp(i,s,!0);break;case"textarea":Xa(i),Up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[va]=i,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zd(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Lp(t,i),r=jd(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Ip(t,i),r=qd(t,i),_t("invalid",t);break;default:r=i}Kd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?k1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&F1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&ih(t,s,l,o))}switch(n){case"input":Xa(t),Dp(t,i,!1);break;case"textarea":Xa(t),Up(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=jr(xa.current),jr(yi.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Jt(e),null;case 13:if(xt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&e.mode&1&&!(e.flags&128))Tv(),ro(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[mi]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Qn!==null&&(Lf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?zt===0&&(zt=3):zh())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return oo(),wf(t,e),t===null&&ma(e.stateNode.containerInfo),Jt(e),null;case 10:return Mh(e.type._context),Jt(e),null;case 17:return xn(e.type)&&_c(),Jt(e),null;case 19:if(xt(wt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>lo&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Jt(e),null}else 2*Dt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=wt.current,vt(wt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function ly(t,e){switch(_h(e),e.tag){case 1:return xn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),xt(_n),xt(on),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(xt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(wt),null;case 4:return oo(),null;case 10:return Mh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var rl=!1,rn=!1,cy=typeof WeakSet=="function"?WeakSet:Set,De=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var wm=!1;function uy(t,e){if(lf=pc,t=fv(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},pc=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,v=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kn(e.type,x),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return g=wm,wm=!1,g}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[va],delete e[ff],delete e[X3],delete e[$3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c_(t){return t.tag===5||t.tag===3||t.tag===4}function Tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Xt=null,Zn=!1;function er(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:rn||Gs(n,e);case 6:var i=Xt,r=Zn;Xt=null,er(t,e,n),Xt=i,Zn=r,Xt!==null&&(Zn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Zn?(t=Xt,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),fa(t)):zu(Xt,n.stateNode));break;case 4:i=Xt,r=Zn,Xt=n.stateNode.containerInfo,Zn=!0,er(t,e,n),Xt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!rn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,er(t,e,n),rn=i):er(t,e,n);break;default:er(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cy),e.forEach(function(i){var r=xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Zn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Xt===null)throw Error(fe(160));u_(s,o,r),Xt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d_(e,t),e=e.sibling}function d_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ci(t),i&4){try{ea(3,t,t.return),ru(3,t)}catch(x){Ct(t,t.return,x)}try{ea(5,t,t.return)}catch(x){Ct(t,t.return,x)}}break;case 1:jn(e,t),ci(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(jn(e,t),ci(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{la(r,"")}catch(x){Ct(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&D1(r,s),Zd(a,o);var c=Zd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?k1(r,f):d==="dangerouslySetInnerHTML"?F1(r,f):d==="children"?la(r,f):ih(r,d,f,c)}switch(a){case"input":Xd(r,s);break;case"textarea":I1(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(x){Ct(t,t.return,x)}}break;case 6:if(jn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ct(t,t.return,x)}}break;case 3:if(jn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(x){Ct(t,t.return,x)}break;case 4:jn(e,t),ci(t);break;case 13:jn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=Dt())),i&4&&Am(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||d,jn(e,t),rn=c):jn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(De=t,d=t.child;d!==null;){for(f=De=d;De!==null;){switch(u=De,p=u.child,u.tag){case 0:case 11:case 14:case 15:ea(4,u,u.return);break;case 1:Gs(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Ct(i,n,x)}}break;case 5:Gs(u,u.return);break;case 22:if(u.memoizedState!==null){Cm(f);continue}}p!==null?(p.return=u,De=p):Cm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=O1("display",o))}catch(x){Ct(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Ct(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),ci(t),i&4&&Am(t);break;case 21:break;default:jn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c_(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(la(r,""),i.flags&=-33);var s=Tm(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Tm(t);bf(t,a,o);break;default:throw Error(fe(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dy(t,e,n){De=t,f_(t)}function f_(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=rl;var c=rn;if(rl=o,(rn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Rm(r):l!==null?(l.return=o,De=l):Rm(r);for(;s!==null;)De=s,f_(s),s=s.sibling;De=r,rl=a,rn=c}bm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):bm(t)}}function bm(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}rn||e.flags&512&&Af(e)}catch(u){Ct(e,e.return,u)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function Cm(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function Rm(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Af(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var fy=Math.ceil,Cc=Ki.ReactCurrentDispatcher,Ih=Ki.ReactCurrentOwner,Gn=Ki.ReactCurrentBatchConfig,rt=0,jt=null,Ot=null,Yt=0,bn=0,Vs=Nr(0),zt=0,Ea=null,ns=0,su=0,Uh=0,ta=null,gn=null,Fh=0,lo=1/0,Ii=null,Rc=!1,Rf=null,Mr=null,sl=!1,pr=null,Pc=0,na=0,Pf=null,Zl=-1,Ql=0;function un(){return rt&6?Dt():Zl!==-1?Zl:Zl=Dt()}function Er(t){return t.mode&1?rt&2&&Yt!==0?Yt&-Yt:Y3.transition!==null?(Ql===0&&(Ql=K1()),Ql):(t=ut,t!==0||(t=window.event,t=t===void 0?16:iv(t.type)),t):1}function ii(t,e,n,i){if(50<na)throw na=0,Pf=null,Error(fe(185));Na(t,n,i),(!(rt&2)||t!==jt)&&(t===jt&&(!(rt&2)&&(su|=n),zt===4&&dr(t,Yt)),yn(t,i),n===1&&rt===0&&!(e.mode&1)&&(lo=Dt()+500,tu&&Lr()))}function yn(t,e){var n=t.callbackNode;Y2(t,e);var i=hc(t,t===jt?Yt:0);if(i===0)n!==null&&kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kp(n),e===1)t.tag===0?q3(Pm.bind(null,t)):Mv(Pm.bind(null,t)),W3(function(){!(rt&6)&&Lr()}),n=null;else{switch(Z1(i)){case 1:n=lh;break;case 4:n=q1;break;case 16:n=fc;break;case 536870912:n=Y1;break;default:n=fc}n=y_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(Zl=-1,Ql=0,rt&6)throw Error(fe(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var i=hc(t,t===jt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nc(t,i);else{e=i;var r=rt;rt|=2;var s=m_();(jt!==t||Yt!==e)&&(Ii=null,lo=Dt()+500,Yr(t,e));do try{my();break}catch(a){p_(t,a)}while(!0);Sh(),Cc.current=s,rt=r,Ot!==null?e=0:(jt=null,Yt=0,e=zt)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Nf(t,r))),e===1)throw n=Ea,Yr(t,0),dr(t,i),yn(t,Dt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hy(r)&&(e=Nc(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Nf(t,s))),e===1))throw n=Ea,Yr(t,0),dr(t,i),yn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:zr(t,gn,Ii);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Fh+500-Dt(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(zr.bind(null,t,gn,Ii),e);break}zr(t,gn,Ii);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fy(i/1960))-i,10<i){t.timeoutHandle=df(zr.bind(null,t,gn,Ii),i);break}zr(t,gn,Ii);break;case 5:zr(t,gn,Ii);break;default:throw Error(fe(329))}}}return yn(t,Dt()),t.callbackNode===n?h_.bind(null,t):null}function Nf(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=gn,gn=n,e!==null&&Lf(e)),t}function Lf(t){gn===null?gn=t:gn.push.apply(gn,t)}function hy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Uh,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Pm(t){if(rt&6)throw Error(fe(327));Ks();var e=hc(t,0);if(!(e&1))return yn(t,Dt()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Nf(t,i))}if(n===1)throw n=Ea,Yr(t,0),dr(t,e),yn(t,Dt()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,gn,Ii),yn(t,Dt()),null}function Oh(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(lo=Dt()+500,tu&&Lr())}}function is(t){pr!==null&&pr.tag===0&&!(rt&6)&&Ks();var e=rt;rt|=1;var n=Gn.transition,i=ut;try{if(Gn.transition=null,ut=1,t)return t()}finally{ut=i,Gn.transition=n,rt=e,!(rt&6)&&Lr()}}function kh(){bn=Vs.current,xt(Vs)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,H3(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_c();break;case 3:oo(),xt(_n),xt(on),bh();break;case 5:Ah(i);break;case 4:oo();break;case 13:xt(wt);break;case 19:xt(wt);break;case 10:Mh(i.type._context);break;case 22:case 23:kh()}n=n.return}if(jt=t,Ot=t=wr(t.current,null),Yt=bn=e,zt=0,Ea=null,Uh=su=ns=0,gn=ta=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function p_(t,e){do{var n=Ot;try{if(Sh(),ql.current=bc,Ac){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ac=!1}if(ts=0,Ht=kt=Tt=null,Jo=!1,ya=0,Ih.current=null,n===null||n.return===null){zt=1,Ea=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=vm(o);if(p!==null){p.flags&=-257,_m(p,o,a,s,e),p.mode&1&&gm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){gm(s,c,e),zh();break e}l=Error(fe(426))}}else if(Mt&&a.mode&1){var v=vm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_m(v,o,a,s,e),xh(ao(l,a));break e}}s=l=ao(l,a),zt!==4&&(zt=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Zv(s,l,e);um(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Mr===null||!Mr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Qv(s,a,e);um(s,M);break e}}s=s.return}while(s!==null)}v_(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function m_(){var t=Cc.current;return Cc.current=bc,t===null?bc:t}function zh(){(zt===0||zt===3||zt===2)&&(zt=4),jt===null||!(ns&268435455)&&!(su&268435455)||dr(jt,Yt)}function Nc(t,e){var n=rt;rt|=2;var i=m_();(jt!==t||Yt!==e)&&(Ii=null,Yr(t,e));do try{py();break}catch(r){p_(t,r)}while(!0);if(Sh(),rt=n,Cc.current=i,Ot!==null)throw Error(fe(261));return jt=null,Yt=0,zt}function py(){for(;Ot!==null;)g_(Ot)}function my(){for(;Ot!==null&&!B2();)g_(Ot)}function g_(t){var e=x_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?v_(t):Ot=e,Ih.current=null}function v_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ly(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=ay(n,e,bn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function zr(t,e,n){var i=ut,r=Gn.transition;try{Gn.transition=null,ut=1,gy(t,e,n,i)}finally{Gn.transition=r,ut=i}return null}function gy(t,e,n,i){do Ks();while(pr!==null);if(rt&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K2(t,s),t===jt&&(Ot=jt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,y_(fc,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=ut;ut=1;var a=rt;rt|=4,Ih.current=null,uy(t,n),d_(n,t),F3(cf),pc=!!lf,cf=lf=null,t.current=n,dy(n),G2(),rt=a,ut=o,Gn.transition=s}else t.current=n;if(sl&&(sl=!1,pr=t,Pc=r),s=t.pendingLanes,s===0&&(Mr=null),W2(n.stateNode),yn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=Rf,Rf=null,t;return Pc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Pf?na++:(na=0,Pf=t):na=0,Lr(),null}function Ks(){if(pr!==null){var t=Z1(Pc),e=Gn.transition,n=ut;try{if(Gn.transition=null,ut=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,Pc=0,rt&6)throw Error(fe(331));var r=rt;for(rt|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var d=De;switch(d.tag){case 0:case 11:case 15:ea(8,d,s)}var f=d.child;if(f!==null)f.return=d,De=f;else for(;De!==null;){d=De;var u=d.sibling,p=d.return;if(l_(d),d===c){De=null;break}if(u!==null){u.return=p,De=u;break}De=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,De=h;break e}De=s.return}}var m=t.current;for(De=m;De!==null;){o=De;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,De=_;else e:for(o=m;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(b){Ct(a,a.return,b)}if(a===o){De=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,De=M;break e}De=a.return}}if(rt=r,Lr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{ut=n,Gn.transition=e}}return!1}function Nm(t,e,n){e=ao(n,e),e=Zv(t,e,1),t=Sr(t,e,1),e=un(),t!==null&&(Na(t,1,e),yn(t,e))}function Ct(t,e,n){if(t.tag===3)Nm(t,t,n);else for(;e!==null;){if(e.tag===3){Nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=ao(n,t),t=Qv(e,t,1),e=Sr(e,t,1),t=un(),e!==null&&(Na(e,1,t),yn(e,t));break}}e=e.return}}function vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Yt&n)===n&&(zt===4||zt===3&&(Yt&130023424)===Yt&&500>Dt()-Fh?Yr(t,0):Uh|=n),yn(t,e)}function __(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=un();t=Xi(t,e),t!==null&&(Na(t,e,n),yn(t,n))}function _y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),__(t,n)}function xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),__(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,oy(t,e,n);vn=!!(t.flags&131072)}else vn=!1,Mt&&e.flags&1048576&&Ev(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=io(e,on.current);Ys(e,n),r=Rh(null,e,i,t,r,n);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,xc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&vh(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sy(i),t=Kn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Sm(null,e,i,t,n);break e;case 11:e=xm(null,e,i,t,n);break e;case 14:e=ym(null,e,i,Kn(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Sm(t,e,i,r,n);case 3:e:{if(n_(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rv(t,e),wc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(fe(423)),e),e=Mm(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(fe(424)),e),e=Mm(t,e,i,n,r);break e}else for(Cn=yr(e.stateNode.containerInfo.firstChild),Rn=e,Mt=!0,Qn=null,n=bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=$i(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return Pv(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uf(i,r)?o=null:s!==null&&uf(i,s)&&(e.flags|=32),t_(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return i_(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),xm(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(Mc,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!_n.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,n),r=Vn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),ym(t,e,i,r,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Kl(t,e),e.tag=1,xn(i)?(t=!0,xc(e)):t=!1,Ys(e,n),Kv(e,i,r),_f(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return r_(t,e,n);case 22:return e_(t,e,n)}throw Error(fe(156,e.tag))};function y_(t,e){return $1(t,e)}function yy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new yy(t,e,n,i)}function Bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sy(t){if(typeof t=="function")return Bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return Kr(n.children,r,s,e);case rh:o=8,r|=8;break;case Gd:return t=Bn(12,n,e,r|2),t.elementType=Gd,t.lanes=s,t;case Vd:return t=Bn(13,n,e,r),t.elementType=Vd,t.lanes=s,t;case Hd:return t=Bn(19,n,e,r),t.elementType=Hd,t.lanes=s,t;case P1:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C1:o=10;break e;case R1:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case lr:o=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=P1,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function My(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,i,r,s,o,a,l){return t=new My(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function Ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S_(t){if(!t)return br;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(xn(n))return Sv(t,n,e)}return e}function M_(t,e,n,i,r,s,o,a,l){return t=Gh(n,i,!0,t,r,s,o,a,l),t.context=S_(null),n=t.current,i=un(),r=Er(n),s=Gi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Na(t,r,i),yn(t,i),t}function au(t,e,n,i){var r=e.current,s=un(),o=Er(r);return n=S_(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(ii(t,r,o,s),$l(t,r,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function wy(){return null}var E_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}lu.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));au(t,e,null,null)};lu.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){au(null,t,null,null)}),e[ji]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&nv(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function Ty(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Lc(o);s.call(c)}}var o=M_(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=o,t[ji]=o.current,ma(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Lc(l);a.call(c)}}var l=Gh(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[ji]=l.current,ma(t.nodeType===8?t.parentNode:t),is(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lc(o);a.call(l)}}au(e,o,t,r)}else o=Ty(n,e,t,r,i);return Lc(o)}Q1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(ch(e,n|1),yn(e,Dt()),!(rt&6)&&(lo=Dt()+500,Lr()))}break;case 13:is(function(){var i=Xi(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),Vh(t,1)}};uh=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}Vh(t,134217728)}};J1=function(t){if(t.tag===13){var e=Er(t),n=Xi(t,e);if(n!==null){var i=un();ii(n,t,e,i)}Vh(t,e)}};ev=function(){return ut};tv=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Jd=function(t,e,n){switch(e){case"input":if(Xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(fe(90));L1(i),Xd(i,r)}}}break;case"textarea":I1(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};G1=Oh;V1=is;var Ay={usingClientEntryPoint:!1,Events:[Da,Fs,eu,z1,B1,Oh]},Ro={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Kc=ol.inject(by),xi=ol}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(fe(200));return Ey(t,e,null,n)};Nn.createRoot=function(t,e){if(!Wh(t))throw Error(fe(299));var n=!1,i="",r=E_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ma(t.nodeType===8?t.parentNode:t),new Hh(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=j1(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return is(t)};Nn.hydrate=function(t,e,n){if(!cu(e))throw Error(fe(200));return uu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=E_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};Nn.render=function(t,e,n){if(!cu(e))throw Error(fe(200));return uu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(fe(40));return t._reactRootContainer?(is(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Nn.unstable_batchedUpdates=Oh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return uu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function w_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w_)}catch(t){console.error(t)}}w_(),w1.exports=Nn;var Cy=w1.exports,T_,Im=Cy;T_=Im.createRoot,Im.hydrateRoot;function Ry(){var e;const t=n=>!!n&&n!=="null"&&n!=="file://";try{const n=(e=window.location.ancestorOrigins)==null?void 0:e[0];if(t(n))return n}catch{}try{if(document.referrer){const n=new URL(document.referrer).origin;if(t(n))return n}}catch{}return"*"}var ui=Ry(),Po=3e5;function Py(){return Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function Um(t){const e=t==null?void 0:t.reason;return e instanceof Error?e:new DOMException("The stream was aborted.","AbortError")}function Ny(t){const e=document.documentElement.style;for(const[n,i]of Object.entries(t))n.startsWith("--")&&e.setProperty(n,i)}function A_(t,e={}){const n=e.apply!==!1,i=r=>{if(r.source!==window.parent)return;const s=r.data;if(!s||s.type!=="MNEMO_CONFIG_UPDATE")return;n&&(s.theme&&document.documentElement.setAttribute("data-theme",s.theme),s.tokens&&Ny(s.tokens));const o={theme:s.theme,lang:s.lang,tokens:s.tokens,zoom:s.zoom,version:s.version,update:s.update,assistantName:s.assistantName};t==null||t(o)};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)}var Fm=["orbit","pan","depth","zoom","recenter","point","select","next","prev","action"],Ua=class{constructor(t){Tp(this,"pluginId");this.pluginId=t}invoke(t,e,n=Po){return new Promise((i,r)=>{if(window.parent===window){r(new Error(`No Mnemosyne host: "${t}" was invoked outside the shell (this page is not embedded in a host iframe).`));return}const s=Math.random().toString(36).substring(7);let o,a=!1;const l=d=>{a||(a=!0,window.removeEventListener("message",c),o!==void 0&&window.clearTimeout(o),d())},c=d=>{d.source===window.parent&&(!d.data||d.data.type!=="MNEMO_PLUGIN_REPLY"||d.data.messageId===s&&l(()=>{d.data.success?i(d.data.data):r(new Error(d.data.error||"Unknown host error"))}))};window.addEventListener("message",c),n>0&&(o=window.setTimeout(()=>l(()=>r(new Error(`Host did not reply to "${t}" within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:s,action:t,payload:e},ui)})}stream(t,e,n={}){const{onChunk:i,signal:r}=n,s=n.timeoutMs??Po;return new Promise((o,a)=>{if(window.parent===window){a(new Error(`No Mnemosyne host: "${t}" was streamed outside the shell (this page is not embedded in a host iframe).`));return}if(r!=null&&r.aborted){a(Um(r));return}const l=Py();let c="",d,f=!1;const u=()=>{d!==void 0&&(window.clearTimeout(d),d=void 0)},p=()=>{s<=0||(u(),d=window.setTimeout(()=>g(()=>a(new Error(`Host stalled on "${t}" — no chunk within ${Math.round(s/1e3)}s`))),s))},g=h=>{f||(f=!0,window.removeEventListener("message",v),r&&r.removeEventListener("abort",x),u(),h())},x=()=>{try{window.parent.postMessage({type:"MNEMO_PLUGIN_CANCEL",pluginId:this.pluginId,messageId:l},ui)}catch{}g(()=>a(Um(r)))},v=h=>{if(h.source!==window.parent)return;const m=h.data;if(!(!m||m.messageId!==l))switch(m.type){case"MNEMO_PLUGIN_CHUNK":{if(f)return;const _=typeof m.chunk=="string"?m.chunk:"";if(_){c+=_;try{i==null||i(_)}catch(M){console.error("[MNEMO-SDK] onChunk consumer threw:",M)}}p();break}case"MNEMO_PLUGIN_DONE":g(()=>o({text:c,data:m.data}));break;case"MNEMO_PLUGIN_ERROR":g(()=>a(new Error(m.error||"Unknown host stream error")));break}};window.addEventListener("message",v),r&&r.addEventListener("abort",x),p(),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:l,action:t,payload:e,stream:!0},ui)})}inferModel(t){return this.invoke("model.infer",t)}showUpdateInHub(){return this.invoke("hub.showUpdate")}getModelConfig(){return this.invoke("model.getConfig")}status(){return this.invoke("mnemosyne.status")}query(t){return this.invoke("mnemosyne.query",{query:t})}ingest(t,e="SOCIAL_NODE"){return this.invoke("mnemosyne.ingest",{content:t,spineType:e})}socialIngest(t,e,n="SOCIAL_NODE"){return this.invoke("social.ingest",{vault:t,content:e,spineType:n})}socialQuery(t,e=100){return this.invoke("social.query",{vault:t,limit:e})}getTopologyMap(t){return this.invoke("getTopologyMap",t)}getScannedPapers(){return this.invoke("vault.getScannedPapers")}ensureSandbox(){return this.invoke("vault.sandbox.ensure",{})}describeVaultTile(t){return this.invoke("vault.sandbox.describeTile",t)}scanTree(){return this.invoke("vault.scanTree")}setDocWatch(t,e){return this.invoke("vault.setDocWatch",{path:t,config:e})}removeDocWatch(t,e){return this.invoke("vault.removeDocWatch",{path:t,watchPath:e})}selectFolder(t){return this.invoke("dialog.selectFolder",t,0)}selectFile(t){return this.invoke("dialog.selectFile",{filters:t},0)}readFile(t){return this.invoke("dialog.readFile",{filePath:t})}writeFile(t,e){return this.invoke("dialog.writeFile",{filePath:t,content:e})}readDir(t){return this.invoke("dialog.readDir",{dirPath:t})}openInOS(t){return this.invoke("dialog.openInOS",{filePath:t})}deleteProjectDir(t){return this.invoke("dialog.deleteProjectDir",{dirPath:t})}forgetSandbox(t){return this.invoke("vault.sandbox.forget",{ids:t})}getLinkedDev(){return this.invoke("plugins.getLinkedDev")}linkDev(t){return this.invoke("plugins.linkDev",{dirPath:t})}unlinkDev(t){return this.invoke("plugins.unlinkDev",{dirPath:t})}launchPlugin(t){return this.invoke("plugins.launch",{id:t})}onGestures(t,e=Po){const n=Math.random().toString(36).substring(7);let i=!1,r,s=null;const o=new Promise((d,f)=>{s={resolve:d,reject:f}});o.catch(()=>{});const a=d=>{r!==void 0&&(window.clearTimeout(r),r=void 0);const f=s;s=null,f&&d(f)},l=d=>{if(d.source!==window.parent)return;const f=d.data;if(!(!f||typeof f.type!="string")){if(f.type==="MNEMO_GESTURE_READY"&&f.requestId===n){const u=Array.isArray(f.takes)?f.takes.filter(g=>typeof g=="string"&&Fm.includes(g)):[],p=Array.isArray(f.actions)?f.actions.filter(g=>typeof g=="string"):[];a(g=>g.resolve({takes:u,actions:p}));return}if(f.type==="MNEMO_GESTURE_REFUSED"&&f.requestId===n){window.removeEventListener("message",l),a(u=>u.reject(new Error(typeof f.error=="string"?f.error:"The host refused the gestures")));return}if(f.type==="MNEMO_GESTURE"&&f.requestId===n&&!i){const u=f.gesture;if(!u||!Fm.includes(u.kind))return;const p=t[u.kind];if(!p)return;try{p(u)}catch(g){console.error(`[MnemoCartridgeSDK] the "${u.kind}" gesture handler threw:`,g)}}}},c=()=>{i||(i=!0,window.removeEventListener("message",l),a(d=>d.reject(new Error("Gestures were turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_GESTURE_UNSUBSCRIBE",pluginId:this.pluginId,requestId:n},ui))};return window.parent===window?(i=!0,a(d=>d.reject(new Error("No Mnemosyne host: gestures were asked outside the shell (this page is not embedded in a host iframe)."))),{ready:o,off:c}):(window.addEventListener("message",l),e>0&&(r=window.setTimeout(()=>a(d=>d.reject(new Error(`Host did not answer the gesture request within ${Math.round(e/1e3)}s`))),e)),window.parent.postMessage({type:"MNEMO_GESTURE_SUBSCRIBE",pluginId:this.pluginId,requestId:n},ui),{ready:o,off:c})}onAgentActions(t,e=Po){const n=Math.random().toString(36).substring(7);let i=!1,r,s=null;const o=new Promise((f,u)=>{s={resolve:f,reject:u}});o.catch(()=>{});const a=f=>{r!==void 0&&(window.clearTimeout(r),r=void 0);const u=s;s=null,u&&f(u)},l=(f,u)=>{window.parent.postMessage({type:"MNEMO_AGENT_RESULT",pluginId:this.pluginId,requestId:n,callId:f,...u},ui)},c=f=>{if(f.source!==window.parent)return;const u=f.data;if(!(!u||typeof u.type!="string"||u.requestId!==n)){if(u.type==="MNEMO_AGENT_READY"){a(p=>p.resolve({actions:Array.isArray(u.actions)?u.actions.filter(g=>typeof g=="string"):[]}));return}if(u.type==="MNEMO_AGENT_REFUSED"){window.removeEventListener("message",c),a(p=>p.reject(new Error(typeof u.error=="string"?u.error:"The host refused the agent actions")));return}if(u.type==="MNEMO_AGENT_CALL"&&typeof u.callId=="string"&&!i){const p=typeof u.action=="string"?t[u.action]:void 0;if(!p){l(u.callId,{ok:!1,error:`this window has no handler for "${String(u.action)}"`});return}Promise.resolve().then(()=>p(u.args&&typeof u.args=="object"?u.args:{})).then(g=>l(u.callId,{ok:!0,result:g===void 0?null:g}),g=>l(u.callId,{ok:!1,error:g instanceof Error?g.message:String(g)}))}}},d=()=>{i||(i=!0,window.removeEventListener("message",c),a(f=>f.reject(new Error("Agent actions were turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_AGENT_UNSUBSCRIBE",pluginId:this.pluginId,requestId:n},ui))};return window.parent===window?(i=!0,a(f=>f.reject(new Error("No Mnemosyne host: agent actions were asked outside the shell."))),{ready:o,off:d}):(window.addEventListener("message",c),e>0&&(r=window.setTimeout(()=>a(f=>f.reject(new Error(`Host did not answer the agent actions within ${Math.round(e/1e3)}s`))),e)),window.parent.postMessage({type:"MNEMO_AGENT_SUBSCRIBE",pluginId:this.pluginId,requestId:n,actions:Object.keys(t)},ui),{ready:o,off:d})}onMouthWatch(t,e=Po){const n=Math.random().toString(36).substring(7);let i=!1,r,s=null;const o=new Promise((d,f)=>{s={resolve:d,reject:f}});o.catch(()=>{});const a=d=>{r!==void 0&&(window.clearTimeout(r),r=void 0);const f=s;s=null,f&&d(f)},l=d=>{var u;if(d.source!==window.parent)return;const f=d.data;if(!(!f||typeof f.type!="string"||f.requestId!==n)){if(f.type==="MNEMO_MOUTH_READY")a(p=>p.resolve({camera:f.camera===!0}));else if(f.type==="MNEMO_MOUTH_REFUSED")window.removeEventListener("message",l),a(p=>p.reject(new Error(typeof f.error=="string"?f.error:"The host refused the camera observation")));else if(f.type==="MNEMO_MOUTH_CAMERA"&&!i)try{(u=t.onCamera)==null||u.call(t,f.camera===!0)}catch(p){console.error("[MnemoCartridgeSDK] the onCamera handler threw:",p)}else if(f.type==="MNEMO_MOUTH_CONTACT"&&!i){const p=f.contact;if(!p||!Number.isFinite(p.at)||!Number.isFinite(p.ms))return;try{t.contact({at:p.at,ms:p.ms})}catch(g){console.error("[MnemoCartridgeSDK] the contact handler threw:",g)}}}},c=()=>{i||(i=!0,window.removeEventListener("message",l),a(d=>d.reject(new Error("The observation was turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_MOUTH_UNSUBSCRIBE",pluginId:this.pluginId,requestId:n},ui))};return window.parent===window?(i=!0,a(d=>d.reject(new Error("No Mnemosyne host: the camera observation was asked outside the shell."))),{ready:o,off:c}):(window.addEventListener("message",l),e>0&&(r=window.setTimeout(()=>a(d=>d.reject(new Error(`Host did not answer the camera observation request within ${Math.round(e/1e3)}s`))),e)),window.parent.postMessage({type:"MNEMO_MOUTH_SUBSCRIBE",pluginId:this.pluginId,requestId:n},ui),{ready:o,off:c})}getSystemMetrics(){return this.invoke("metrics.get")}creditsStatus(){return this.invoke("credits.status")}};function Om(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)?t:new URL(t.replace(/^\/+/,""),document.baseURI).toString()}const km="MCOS",zm=1,Yu=48,Ly=`
`,ps=t=>Number.isFinite(t)?t:null;function Dy(t){if(t.byteLength<Yu)throw new Error(`catalog.bin is ${t.byteLength} bytes; a header alone is ${Yu}`);const e=new DataView(t),n=String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3));if(n!==km)throw new Error(`catalog.bin does not start with ${km} (got ${JSON.stringify(n)})`);const i=e.getUint16(4,!0);if(i!==zm)throw new Error(`catalog.bin is version ${i}, this build reads ${zm}`);const r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getFloat32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),d=e.getUint32(32,!0),f=e.getUint32(36,!0),u=e.getUint32(40,!0),p=e.getUint32(44,!0),g=Yu,x=g+(d+3&-4),v=x+r*u,h=v+s*p;if(t.byteLength<h)throw new Error(`catalog.bin is truncated: header describes ${h} bytes, file is ${t.byteLength}`);const m=new TextDecoder().decode(new Uint8Array(t,g,d)).split(Ly);if(m.length!==f)throw new Error(`catalog.bin string table says ${f} entries, blob holds ${m.length}`);const _=E=>m[E]??"",M=new Array(r);for(let E=0;E<r;E++){const T=x+E*u;M[E]={i:E,ra:e.getFloat32(T+0,!0),dec:e.getFloat32(T+4,!0),mag:e.getFloat32(T+8,!0),absmag:ps(e.getFloat32(T+12,!0)),dist:ps(e.getFloat32(T+16,!0)),ci:ps(e.getFloat32(T+20,!0)),hip:e.getInt32(T+24,!0)||null,hd:e.getInt32(T+28,!0)||null,con:_(e.getUint32(T+32,!0)),spect:_(e.getUint32(T+36,!0)),proper:_(e.getUint32(T+40,!0)),desig:_(e.getUint32(T+44,!0)),gliese:_(e.getUint32(T+48,!0))}}const b=new Array(s);for(let E=0;E<s;E++){const T=v+E*p;b[E]={i:E,ra:e.getFloat32(T+0,!0),dec:e.getFloat32(T+4,!0),mag:ps(e.getFloat32(T+8,!0)),majAx:ps(e.getFloat32(T+12,!0)),minAx:ps(e.getFloat32(T+16,!0)),con:_(e.getUint32(T+20,!0)),type:_(e.getUint32(T+24,!0)),name:_(e.getUint32(T+28,!0)),common:_(e.getUint32(T+32,!0)),messier:e.getUint16(T+36,!0)||null}}return{stars:M,dsos:b,truncation:{magLimit:o,starsOmitted:a,starsNoDistance:l,dsoOmitted:c}}}function Iy(t,e){return e==="en"?t.name:t.i18n[e]||t.name}const Uy={Alp:"α",Bet:"β",Gam:"γ",Del:"δ",Eps:"ε",Zet:"ζ",Eta:"η",The:"θ",Iot:"ι",Kap:"κ",Lam:"λ",Mu:"μ",Nu:"ν",Xi:"ξ",Omi:"ο",Pi:"π",Rho:"ρ",Sig:"σ",Tau:"τ",Ups:"υ",Phi:"φ",Chi:"χ",Psi:"ψ",Ome:"ω"};function b_(t){const e=(t??"").trim();if(!e)return"";const n=e.replace(/\s+/g," "),i=/^(\d*)\s*(?:([A-Za-z]{2,3})\s*(\d?))?\s*([A-Z][A-Za-z]{2})$/.exec(e);if(!i)return n;const[,r,s,o,a]=i;if(!s)return r?`${r} ${a}`:n;const l=Uy[s];return l?[r||"",`${l}${o??""}`,a].filter(Boolean).join(" "):n}function Fa(t){return t.hip?`HIP ${t.hip}`:t.hd?`HD ${t.hd}`:t.gliese?t.gliese:`HYG ${t.i}`}const Fy=t=>t.startsWith("HYG ");function Oy(t){const e=[],n=Fa(t);t.proper&&e.push(t.proper);const i=b_(t.desig);return i&&e.push(i),t.hip&&e.push(`HIP ${t.hip}`),t.hd&&e.push(`HD ${t.hd}`),t.gliese&&e.push(t.gliese),e.filter((r,s)=>r!==n&&e.indexOf(r)===s)}const C_=(t,e,n)=>t.filter(i=>i!==e&&i!==n);function wa(t){const e=Fa(t),n=t.proper||b_(t.desig)||e;return{id:e,name:n,kind:"star",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:C_(Oy(t),e,n),star:t}}function Oa(t){return t.name||(t.messier?`M${t.messier}`:`OpenNGC ${t.i}`)}function ky(t){const e=[];t.common&&e.push(t.common),t.messier&&e.push(`M${t.messier}`);const n=Oa(t);return e.filter((i,r)=>i!==n&&e.indexOf(i)===r)}function Ta(t){const e=Oa(t),n=t.common||(t.messier?`M${t.messier}`:t.name);return{id:e,name:n,kind:"dso",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:C_(ky(t),e,n),dso:t}}function zy(t){const e=[t.name,t.id,...t.aliases].map(i=>i.trim()).filter((i,r,s)=>i&&s.indexOf(i)===r),n=e.slice(1).join(", ");return`What do my own notes say about ${e[0]}`+(n?` (also known as ${n})`:"")+"? Answer only from my memory. If my memory holds nothing about it, say exactly: NOTHING IN MEMORY."}const Df=Math.PI/180,Ni=100;function Yn(t,e,n=Ni){const i=t*Df,r=e*Df,s=Math.cos(r);return{x:n*s*Math.cos(i),y:n*Math.sin(r),z:-n*s*Math.sin(i)}}function By(t,e,n=1){const i=Math.min(e,t),r=(e-i)/(e+2);return n*(.9+7*r*r)}function Gy(t){if(t===null||!Number.isFinite(t))return null;const e=Math.min(2,Math.max(-.4,t)),n=Math.min(1,Math.max(0,.63+.55*e-.09*e*e)),i=Math.min(1,Math.max(0,.83-.03*e-.1*e*e)),r=Math.min(1,Math.max(0,1-.55*e+.06*e*e));return[n,i,r]}function R_(t,e){const n=t[0]*e.x+t[4]*e.y+t[8]*e.z+t[12],i=t[1]*e.x+t[5]*e.y+t[9]*e.z+t[13],r=t[3]*e.x+t[7]*e.y+t[11]*e.z+t[15];if(r<=0)return{x:0,y:0,visible:!1};const s=n/r,o=i/r;return{x:s,y:o,visible:s>=-1&&s<=1&&o>=-1&&o<=1}}function Vy(t,e,n,i,r=14){let s=null,o=1/0;for(let a=0;a<t.length;a++){const l=t[a],c=R_(e,Yn(l.ra,l.dec));if(!c.visible)continue;const d=(c.x-n.x)*i.width/2,f=(c.y-n.y)*i.height/2,u=Math.hypot(d,f);u>r||(!s||u<s.distance-.5||Math.abs(u-s.distance)<=.5&&l.rank<o)&&(s={index:a,distance:u},o=l.rank)}return s}const ia=2,ra=110,jh=t=>Math.min(ra,Math.max(ia,t));function P_(t,e,n,i){const r=t.fov/Math.max(1,i),s=t.ra-e*r/Math.max(.2,Math.cos(t.dec*Df)),o=t.dec+n*r;return{ra:(s%360+360)%360,dec:Math.min(90,Math.max(-90,o)),fov:t.fov}}function Hy(t,e){return{...t,fov:jh(t.fov*Math.pow(1.15,e))}}const sa=(t,e,n)=>({...t,ra:(e%360+360)%360,dec:Math.min(90,Math.max(-90,n))});function Wy(t){const e=Math.round((t%360+360)%360/15*36e3)%864e3,n=Math.floor(e/36e3),i=Math.floor(e%36e3/600),r=e%600/10;return`${n}h ${String(i).padStart(2,"0")}m ${r.toFixed(1).padStart(4,"0")}s`}function jy(t){const e=t<0?"-":"+",n=Math.round(Math.abs(t)*3600),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60;return`${e}${i}° ${String(r).padStart(2,"0")}′ ${String(s).padStart(2,"0")}″`}function Xy(t){if(t===null||!Number.isFinite(t)||t<=0)return null;const e=t*3.261563777;return e<10?`${e.toFixed(2)} ly`:e<1e3?`${e.toFixed(0)} ly`:`${Math.round(e/100)/10} kly`}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const N_=173.1446326846693,Fi=14959787069098932e-8,ct=.017453292519943295,Bm=.26179938779914946,Si=57.29577951308232,L_=3.819718634205488,$y=365.24217,Gm=new Date("2000-01-01T12:00:00Z"),Li=2*Math.PI,tr=3600*(180/Math.PI),Hs=484813681109536e-20,D_=180*60*60,qy=2*D_,Vm=7292115e-11,Yy=D_/Math.PI,Ky=-.17-5*Math.log10(Yy),I_=24*3600,Zy=.9972695717592592,Qy=695700,Jy=Qy/Fi,Zs=.996647180302104,eS=Zs*Zs,Aa=6378.1366,tS=Aa/Fi,nS=1738.1,iS=nS/Fi,rS=34/60,U_=81.30056,Xh=.0002959122082855911,If=2825345909524226e-22,Uf=8459715185680659e-23,Ff=1292024916781969e-23,Of=1524358900784276e-23;function Dc(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function Rt(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function ms(t){return t-Math.floor(t)}function sS(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:Si*Math.acos(r)}var ge;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ge||(ge={}));const oS=[ge.Star1,ge.Star2,ge.Star3,ge.Star4,ge.Star5,ge.Star6,ge.Star7,ge.Star8],aS=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function lS(t){const e=oS.indexOf(t);return e>=0?aS[e]:null}function $h(t){const e=lS(t);return e&&e.dist>0?e:null}var Wn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Wn||(Wn={}));const zi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function cS(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/$y;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let uS=cS;function Hm(t){return t+uS(t)/86400}class Tr{constructor(e){if(e instanceof Tr){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Gm.getTime())/n,this.tt=Hm(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Gm.getTime()+e*n),this.ut=e,this.tt=Hm(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new Tr(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Tr(this.ut+e)}}function dS(t,e,n){return new Tr(t.ut+n*(e.ut-t.ut))}function En(t){return t instanceof Tr?t:new Tr(t)}function fS(t){function e(u){return u%qy*Hs}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,d=(92052331+9086*n)*l+15377*a,f=2*(r-s+o);return a=Math.sin(f),l=Math.cos(f),c+=(-13170906-1675*n)*a-13696*l,d+=(5730336-3015*n)*l-4587*a,f=2*(r+o),a=Math.sin(f),l=Math.cos(f),c+=(-2276413-234*n)*a+2796*l,d+=(978459-485*n)*l+1374*a,f=2*o,a=Math.sin(f),l=Math.cos(f),c+=(2074554+207*n)*a-698*l,d+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,d+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+d*1e-7}}function F_(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var al;function qh(t){if(!al||Math.abs(al.tt-t.tt)>1e-6){const e=fS(t),n=F_(t),i=n+e.deps/3600;al={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*ct)/15,mobl:n,tobl:i}}return al}function hS(t,e){const n=t*ct,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function pS(t,e){return hS(F_(t),e)}function mS(t){const e=t.tt/36525;function n(Ie,Ce){const ee=[];let be;for(be=0;be<=Ce-Ie;++be)ee.push(0);return{min:Ie,array:ee}}function i(Ie,Ce,ee,be){const ze=[];for(let st=0;st<=Ce-Ie;++st)ze.push(n(ee,be));return{min:Ie,array:ze}}function r(Ie,Ce,ee){const be=Ie.array[Ce-Ie.min];return be.array[ee-be.min]}function s(Ie,Ce,ee,be){const ze=Ie.array[Ce-Ie.min];ze.array[ee-ze.min]=be}let o,a,l,c,d,f,u,p,g,x,v,h,m,_,M,b,E,T,y,C,L,N,O,Z=i(-6,6,1,4),ne=i(-6,6,1,4);function I(Ie,Ce){return r(Z,Ie,Ce)}function W(Ie,Ce){return r(ne,Ie,Ce)}function k(Ie,Ce,ee){return s(Z,Ie,Ce,ee)}function U(Ie,Ce,ee){return s(ne,Ie,Ce,ee)}function Y(Ie,Ce,ee,be,ze){ze(Ie*ee-Ce*be,Ce*ee+Ie*be)}function G(Ie){return Math.sin(Li*Ie)}u=e*e,g=0,O=0,v=0,h=3422.7;var q=G(.19833+.05611*e),X=G(.27869+.04508*e),Q=G(.16827-.36903*e),de=G(.34734-5.37261*e),ye=G(.10498-5.37899*e),V=G(.42681-.41855*e),ae=G(.14943-5.37511*e);for(T=.84*q+.31*X+14.27*Q+7.26*de+.28*ye+.24*V,y=2.94*q+.31*X+14.27*Q+9.34*de+1.12*ye+.83*V,C=-6.4*q-1.89*V,L=.21*q+.31*X+14.27*Q-88.7*de-15.3*ye+.24*V-1.86*ae,N=T-C,p=-3332e-9*G(.59734-5.37261*e)-539e-9*G(.35498-5.37899*e)-64e-9*G(.39943-5.37511*e),m=Li*ms(.60643382+1336.85522467*e-313e-8*u)+T/tr,_=Li*ms(.37489701+1325.55240982*e+2565e-8*u)+y/tr,M=Li*ms(.99312619+99.99735956*e-44e-8*u)+C/tr,b=Li*ms(.25909118+1342.2278298*e-892e-8*u)+L/tr,E=Li*ms(.82736186+1236.85308708*e-397e-8*u)+N/tr,d=1;d<=4;++d){switch(d){case 1:l=_,a=4,c=1.000002208;break;case 2:l=M,a=3,c=.997504612-.002495388*e;break;case 3:l=b,a=4,c=1.000002708+139.978*p;break;case 4:l=E,a=6,c=1;break;default:throw`Internal error: I = ${d}`}for(k(0,d,1),k(1,d,Math.cos(l)*c),U(0,d,0),U(1,d,Math.sin(l)*c),f=2;f<=a;++f)Y(I(f-1,d),W(f-1,d),I(1,d),W(1,d),(Ie,Ce)=>(k(f,d,Ie),U(f,d,Ce)));for(f=1;f<=a;++f)k(-f,d,I(f,d)),U(-f,d,-W(f,d))}function ce(Ie,Ce,ee,be){for(var ze={x:1,y:0},st=[0,Ie,Ce,ee,be],Qe=1;Qe<=4;++Qe)st[Qe]!==0&&Y(ze.x,ze.y,I(st[Qe],Qe),W(st[Qe],Qe),(Et,D)=>(ze.x=Et,ze.y=D));return ze}function B(Ie,Ce,ee,be,ze,st,Qe,Et){var D=ce(ze,st,Qe,Et);g+=Ie*D.y,O+=Ce*D.y,v+=ee*D.x,h+=be*D.x}B(13.902,14.06,-.001,.2607,0,0,0,4),B(.403,-4.01,.394,.0023,0,0,0,3),B(2369.912,2373.36,.601,28.2333,0,0,0,2),B(-125.154,-112.79,-.725,-.9781,0,0,0,1),B(1.979,6.98,-.445,.0433,1,0,0,4),B(191.953,192.72,.029,3.0861,1,0,0,2),B(-8.466,-13.51,.455,-.1093,1,0,0,1),B(22639.5,22609.07,.079,186.5398,1,0,0,0),B(18.609,3.59,-.094,.0118,1,0,0,-1),B(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),B(3.215,5.44,.192,-.0386,1,0,0,-3),B(-38.428,-38.64,.001,.6008,1,0,0,-4),B(-.393,-1.43,-.092,.0086,1,0,0,-6),B(-.289,-1.59,.123,-.0053,0,1,0,4),B(-24.42,-25.1,.04,-.3,0,1,0,2),B(18.023,17.93,.007,.1494,0,1,0,1),B(-668.146,-126.98,-1.302,-.3997,0,1,0,0),B(.56,.32,-.001,-.0037,0,1,0,-1),B(-165.145,-165.06,.054,1.9178,0,1,0,-2),B(-1.877,-6.46,-.416,.0339,0,1,0,-4),B(.213,1.02,-.074,.0054,2,0,0,4),B(14.387,14.78,-.017,.2833,2,0,0,2),B(-.586,-1.2,.054,-.01,2,0,0,1),B(769.016,767.96,.107,10.1657,2,0,0,0),B(1.75,2.01,-.018,.0155,2,0,0,-1),B(-211.656,-152.53,5.679,-.3039,2,0,0,-2),B(1.225,.91,-.03,-.0088,2,0,0,-3),B(-30.773,-34.07,-.308,.3722,2,0,0,-4),B(-.57,-1.4,-.074,.0109,2,0,0,-6),B(-2.921,-11.75,.787,-.0484,1,1,0,2),B(1.267,1.52,-.022,.0164,1,1,0,1),B(-109.673,-115.18,.461,-.949,1,1,0,0),B(-205.962,-182.36,2.056,1.4437,1,1,0,-2),B(.233,.36,.012,-.0025,1,1,0,-3),B(-4.391,-9.66,-.471,.0673,1,1,0,-4),B(.283,1.53,-.111,.006,1,-1,0,4),B(14.577,31.7,-1.54,.2302,1,-1,0,2),B(147.687,138.76,.679,1.1528,1,-1,0,0),B(-1.089,.55,.021,0,1,-1,0,-1),B(28.475,23.59,-.443,-.2257,1,-1,0,-2),B(-.276,-.38,-.006,-.0036,1,-1,0,-3),B(.636,2.27,.146,-.0102,1,-1,0,-4),B(-.189,-1.68,.131,-.0028,0,2,0,2),B(-7.486,-.66,-.037,-.0086,0,2,0,0),B(-8.096,-16.35,-.74,.0918,0,2,0,-2),B(-5.741,-.04,0,-9e-4,0,0,2,2),B(.255,0,0,0,0,0,2,1),B(-411.608,-.2,0,-.0124,0,0,2,0),B(.584,.84,0,.0071,0,0,2,-1),B(-55.173,-52.14,0,-.1052,0,0,2,-2),B(.254,.25,0,-.0017,0,0,2,-3),B(.025,-1.67,0,.0031,0,0,2,-4),B(1.06,2.96,-.166,.0243,3,0,0,2),B(36.124,50.64,-1.3,.6215,3,0,0,0),B(-13.193,-16.4,.258,-.1187,3,0,0,-2),B(-1.187,-.74,.042,.0074,3,0,0,-4),B(-.293,-.31,-.002,.0046,3,0,0,-6),B(-.29,-1.45,.116,-.0051,2,1,0,2),B(-7.649,-10.56,.259,-.1038,2,1,0,0),B(-8.627,-7.59,.078,-.0192,2,1,0,-2),B(-2.74,-2.54,.022,.0324,2,1,0,-4),B(1.181,3.32,-.212,.0213,2,-1,0,2),B(9.703,11.67,-.151,.1268,2,-1,0,0),B(-.352,-.37,.001,-.0028,2,-1,0,-1),B(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),B(.36,.2,-.012,-.0043,2,-1,0,-4),B(-1.167,-1.25,.008,-.0106,1,2,0,0),B(-7.412,-6.12,.117,.0484,1,2,0,-2),B(-.311,-.65,-.032,.0044,1,2,0,-4),B(.757,1.82,-.105,.0112,1,-2,0,2),B(2.58,2.32,.027,.0196,1,-2,0,0),B(2.533,2.4,-.014,-.0212,1,-2,0,-2),B(-.344,-.57,-.025,.0036,0,3,0,-2),B(-.992,-.02,0,0,1,0,2,2),B(-45.099,-.02,0,-.001,1,0,2,0),B(-.179,-9.52,0,-.0833,1,0,2,-2),B(-.301,-.33,0,.0014,1,0,2,-4),B(-6.382,-3.37,0,-.0481,1,0,-2,2),B(39.528,85.13,0,-.7136,1,0,-2,0),B(9.366,.71,0,-.0112,1,0,-2,-2),B(.202,.02,0,0,1,0,-2,-4),B(.415,.1,0,.0013,0,1,2,0),B(-2.152,-2.26,0,-.0066,0,1,2,-2),B(-1.44,-1.3,0,.0014,0,1,-2,2),B(.384,-.04,0,0,0,1,-2,-2),B(1.938,3.6,-.145,.0401,4,0,0,0),B(-.952,-1.58,.052,-.013,4,0,0,-2),B(-.551,-.94,.032,-.0097,3,1,0,0),B(-.482,-.57,.005,-.0045,3,1,0,-2),B(.681,.96,-.026,.0115,3,-1,0,0),B(-.297,-.27,.002,-9e-4,2,2,0,-2),B(.254,.21,-.003,0,2,-2,0,-2),B(-.25,-.22,.004,.0014,1,3,0,-2),B(-3.996,0,0,4e-4,2,0,2,0),B(.557,-.75,0,-.009,2,0,2,-2),B(-.459,-.38,0,-.0053,2,0,-2,2),B(-1.298,.74,0,4e-4,2,0,-2,0),B(.538,1.14,0,-.0141,2,0,-2,-2),B(.263,.02,0,0,1,1,2,0),B(.426,.07,0,-6e-4,1,1,-2,-2),B(-.304,.03,0,3e-4,1,-1,2,0),B(-.372,-.19,0,-.0027,1,-1,-2,2),B(.418,0,0,0,0,0,4,0),B(-.33,-.04,0,0,3,0,2,0);function ke(Ie,Ce,ee,be,ze){return Ie*ce(Ce,ee,be,ze).y}x=0,x+=ke(-526.069,0,0,1,-2),x+=ke(-3.352,0,0,1,-4),x+=ke(44.297,1,0,1,-2),x+=ke(-6,1,0,1,-4),x+=ke(20.599,-1,0,1,0),x+=ke(-30.598,-1,0,1,-2),x+=ke(-24.649,-2,0,1,0),x+=ke(-2,-2,0,1,-2),x+=ke(-22.571,0,1,1,-2),x+=ke(10.985,0,-1,1,-2),g+=.82*G(.7736-62.5512*e)+.31*G(.0466-125.1025*e)+.35*G(.5785-25.1042*e)+.66*G(.4591+1335.8075*e)+.64*G(.313-91.568*e)+1.14*G(.148+1331.2898*e)+.21*G(.5918+1056.5859*e)+.44*G(.5784+1322.8595*e)+.24*G(.2275-5.7374*e)+.28*G(.2965+2.6929*e)+.33*G(.3132+6.3368*e),o=b+O/tr;let Ve=(1.000002708+139.978*p)*(18518.511+1.189+v)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Li*ms((m+g/tr)/Li),geo_eclip_lat:Math.PI/(180*3600)*Ve,distance_au:tr*tS/(.999953253*h)}}function O_(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function Ic(t,e,n){const i=gS(e,n);return O_(i,t)}function gS(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=Hs,r*=Hs,s*=Hs,o*=Hs;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),d=Math.cos(-r),f=Math.sin(-s),u=Math.cos(-s),p=Math.sin(o),g=Math.cos(o),x=g*d-c*p*u,v=g*c*l+p*u*d*l-a*p*f,h=g*c*a+p*u*d*a+l*p*f,m=-p*d-c*g*u,_=-p*c*l+g*u*d*l-a*g*f,M=-p*c*a+g*u*d*a+l*g*f,b=c*f,E=-f*d*l-a*u,T=-f*d*a+u*l;if(e===Wn.Into2000)return new Uc([[x,v,h],[m,_,M],[b,E,T]]);if(e===Wn.From2000)return new Uc([[x,m,b],[v,_,E],[h,M,T]]);throw"Invalid precess direction"}function vS(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let ll;function k_(t){if(!ll||ll.tt!==t.tt){const e=t.tt/36525;let n=15*qh(t).ee;const i=vS(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),ll={tt:t.tt,st:s}}return ll.st}function _S(t,e){const n=t.latitude*ct,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,Zs*i),o=eS*s,a=t.height/1e3,l=Aa*s+a,c=Aa*o+a,d=(15*e+t.longitude)*ct,f=Math.sin(d),u=Math.cos(d);return{pos:[l*r*u/Fi,l*r*f/Fi,c*i/Fi],vel:[-Vm*l*r*f*86400/Fi,Vm*l*r*u*86400/Fi,0]}}function kf(t,e,n){const i=xS(e,n);return O_(i,t)}function xS(t,e){const n=qh(t),i=n.mobl*ct,r=n.tobl*ct,s=n.dpsi*Hs,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s),u=d,p=-f*o,g=-f*a,x=f*l,v=d*o*l+a*c,h=d*a*l-o*c,m=f*c,_=d*o*c-a*l,M=d*a*c+o*l;if(e===Wn.From2000)return new Uc([[u,x,m],[p,v,_],[g,h,M]]);if(e===Wn.Into2000)return new Uc([[u,p,g],[x,v,h],[m,_,M]]);throw"Invalid precess direction"}function z_(t,e,n){return n===Wn.Into2000?Ic(kf(t,e,n),e,n):kf(Ic(t,e,n),e,n)}function yS(t,e){const n=k_(t),i=_S(e,n).pos;return z_(i,t,Wn.Into2000)}class Ut{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class mr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class SS{constructor(e,n,i){this.lat=Rt(e),this.lon=Rt(n),this.dist=Rt(i)}}class Wm{constructor(e,n,i,r){this.ra=Rt(e),this.dec=Rt(n),this.dist=Rt(i),this.vec=r}}class Uc{constructor(e){this.rot=e}}class MS{constructor(e,n,i,r){this.azimuth=Rt(e),this.altitude=Rt(n),this.ra=Rt(i),this.dec=Rt(r)}}class ES{constructor(e,n,i){this.vec=e,this.elat=Rt(n),this.elon=Rt(i)}}function wS(t,e){return new Ut(t[0],t[1],t[2],e)}function TS(t,e){const n=wS(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new Wm(0,n.z<0?-90:90,r,n)}let s=L_*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=Si*Math.atan2(t[2],Math.sqrt(i));return new Wm(s,o,r,n)}function Ku(t,e){const n=t*ct,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function B_(t,e,n,i,r){let s=En(t);du(e),Rt(n),Rt(i);const o=Math.sin(e.latitude*ct),a=Math.cos(e.latitude*ct),l=Math.sin(e.longitude*ct),c=Math.cos(e.longitude*ct),d=Math.sin(i*ct),f=Math.cos(i*ct),u=Math.sin(n*Bm),p=Math.cos(n*Bm);let g=[a*c,a*l,o],x=[-o*c,-o*l,a],v=[l,-c,0];const h=-15*k_(s);let m=Ku(h,g),_=Ku(h,x),M=Ku(h,v),b=[f*p,f*u,d];const E=b[0]*m[0]+b[1]*m[1]+b[2]*m[2],T=b[0]*_[0]+b[1]*_[1]+b[2]*_[2],y=b[0]*M[0]+b[1]*M[1]+b[2]*M[2];let C=Math.hypot(T,y),L;C>0?(L=-Si*Math.atan2(y,T),L<0&&(L+=360)):L=0;let N=Si*Math.atan2(C,E),O=n,Z=i;if(r){let ne=N,I=tM(r,90-N);if(N-=I,I>0&&N>3e-4){const W=Math.sin(N*ct),k=Math.cos(N*ct),U=Math.sin(ne*ct),Y=Math.cos(ne*ct),G=[];for(let q=0;q<3;++q)G.push((b[q]-Y*m[q])/U*W+m[q]*k);C=Math.hypot(G[0],G[1]),C>0?(O=L_*Math.atan2(G[1],G[0]),O<0&&(O+=24)):O=0,Z=Si*Math.atan2(G[2],C)}}return new MS(L,90-N,O,Z)}function du(t){if(!(t instanceof Fc))throw`Not an instance of the Observer class: ${t}`;if(Rt(t.latitude),Rt(t.longitude),Rt(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class Fc{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,du(this)}}function G_(t,e,n,i,r){du(n),Dc(i),Dc(r);const s=En(e),o=yS(s,n),a=qf(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]],c=z_(l,s,Wn.From2000);return TS(c,s)}function AS(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=Si*Math.atan2(r,i),a<0&&(a+=360));let l=Si*Math.atan2(s,o),c=new Ut(i,r,s,t.t);return new ES(c,l,a)}function zf(t){const e=qh(t.t),n=[t.x,t.y,t.z],i=Ic(n,t.t,Wn.From2000),[r,s,o]=kf(i,t.t,Wn.From2000),a=new Ut(r,s,o,t.t),l=e.tobl*ct;return AS(a,Math.cos(l),Math.sin(l))}function co(t){const e=En(t),n=mS(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=pS(e,r),o=Ic(s,e,Wn.Into2000);return new Ut(o[0],o[1],o[2],e)}function V_(t){const e=En(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=co(i),o=co(r);return new mr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function bS(t){const e=En(t),n=V_(e),i=1+U_;return new mr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function Qs(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,d]of s)o+=l*Math.cos(c+e*d);let a=i*o;n&&(a%=Li),r+=a,i*=e}return r}function Zu(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,d,f]of o){let u=d+e*f;a+=c*f*Math.sin(u),s>0&&(l+=c*Math.cos(u))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const jo=365250,Bf=0,Gf=1,Vf=2;function Hf(t){return new nn(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function H_(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function oa(t,e){const n=e.tt/jo,i=Qs(t[Bf],n,!0),r=Qs(t[Gf],n,!1),s=Qs(t[Vf],n,!1),o=H_(i,r,s);return Hf(o).ToAstroVector(e)}function Wf(t,e){const n=e/jo,i=Qs(t[Bf],n,!0),r=Qs(t[Gf],n,!1),s=Qs(t[Vf],n,!1),o=Zu(t[Bf],n),a=Zu(t[Gf],n),l=Zu(t[Vf],n),c=Math.cos(i),d=Math.sin(i),f=Math.cos(r),u=Math.sin(r),p=+(l*f*c)-s*u*c*a-s*f*d*o,g=+(l*f*d)-s*u*d*a+s*f*c*o,x=+(l*u)+s*f*a,v=H_(i,r,s),h=[p/jo,g/jo,x/jo],m=Hf(v),_=Hf(h);return new rs(e,m,_)}function cl(t,e,n,i){const r=i/(i+Xh),s=oa(zi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function CS(t){const e=new Ut(0,0,0,t);return cl(e,t,ge.Jupiter,If),cl(e,t,ge.Saturn,Uf),cl(e,t,ge.Uranus,Ff),cl(e,t,ge.Neptune,Of),e}const jf=51,RS=29200,Ws=146,Di=201,Xr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class nn{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new nn(this.x,this.y,this.z)}ToAstroVector(e){return new Ut(this.x,this.y,this.z,e)}static zero(){return new nn(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new nn(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new nn(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new nn(e*this.x,e*this.y,e*this.z)}div(e){return new nn(this.x/e,this.y/e,this.z/e)}mean(e){return new nn((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new nn(-this.x,-this.y,-this.z)}}class rs{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new rs(this.tt,this.r,this.v)}sub(e){return new rs(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function PS(t){let[e,[n,i,r],[s,o,a]]=t;return new rs(e,new nn(n,i,r),new nn(s,o,a))}function ul(t,e,n,i){const r=i/(i+Xh),s=Wf(zi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function No(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class fu{constructor(e){let n=new rs(e,new nn(0,0,0),new nn(0,0,0));this.Jupiter=ul(n,e,ge.Jupiter,If),this.Saturn=ul(n,e,ge.Saturn,Uf),this.Uranus=ul(n,e,ge.Uranus,Ff),this.Neptune=ul(n,e,ge.Neptune,Of),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new rs(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=No(e,Xh,this.Sun.r);return n.incr(No(e,If,this.Jupiter.r)),n.incr(No(e,Uf,this.Saturn.r)),n.incr(No(e,Ff,this.Uranus.r)),n.incr(No(e,Of,this.Neptune.r)),n}}class hu{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new hu(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class W_{constructor(e,n){this.bary=e,this.grav=n}}function Oc(t,e,n,i){return new nn(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function jm(t,e,n){return new nn(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Xf(t,e){const n=t-e.tt,i=new fu(t),r=Oc(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Oc(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new hu(t,o,a,l);return new W_(i,c)}const NS=[];function j_(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function $f(t){const e=PS(t),n=new fu(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new hu(e.tt,i,r,s);return new W_(n,o)}function LS(t,e){const n=Xr[0][0];if(e<n||e>Xr[jf-1][0])return null;const i=j_((e-n)/RS,jf-1);if(!t[i]){const s=t[i]=[];s[0]=$f(Xr[i]).grav,s[Di-1]=$f(Xr[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Di-1;++o)s[o]=Xf(a+=Ws,s[o-1]).grav;a=s[Di-1].tt;var r=[];for(r[Di-1]=s[Di-1],o=Di-2;o>0;--o)r[o]=Xf(a-=Ws,r[o+1]).grav;for(o=Di-2;o>0;--o){const l=o/(Di-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function Xm(t,e,n){let i=$f(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Xf(s+1===r?e:i.grav.tt+n,i.grav);return i}function X_(t,e){let n,i,r;const s=LS(NS,t.tt);if(s){const o=j_((t.tt-s[0].tt)/Ws,Di-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),d=Oc(t.tt-a.tt,a.r,a.v,c),f=jm(t.tt-a.tt,a.v,c),u=Oc(t.tt-l.tt,l.r,l.v,c),p=jm(t.tt-l.tt,l.v,c),g=(t.tt-a.tt)/Ws;n=d.mul(1-g).add(u.mul(g)),i=f.mul(1-g).add(p.mul(g))}else{let o;t.tt<Xr[0][0]?o=Xm(Xr[0],t.tt,-Ws):o=Xm(Xr[jf-1],t.tt,+Ws),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new fu(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new mr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function Zr(t,e){var n=En(e);if(t in zi)return oa(zi[t],n);if(t===ge.Pluto){const o=X_(n);return new Ut(o.x,o.y,o.z,n)}if(t===ge.Sun)return new Ut(0,0,0,n);if(t===ge.Moon){var i=oa(zi.Earth,n),r=co(n);return new Ut(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===ge.EMB){const o=oa(zi.Earth,n),a=co(n),l=1+U_;return new Ut(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===ge.SSB)return CS(n);const s=$h(t);if(s){const o=new SS(s.dec,15*s.ra,s.dist);return eM(o,n)}throw`HelioVector: Unknown body "${t}"`}function DS(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/N_;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class IS{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Zr(this.observerBody,e));const n=Zr(this.targetBody,e);return new Ut(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function US(t,e,n,i){Dc(i);const r=En(t);if($h(n)){const a=Zr(n,r);if(i){const c=OS(e,r),d=new Ut(a.x-c.x,a.y-c.y,a.z-c.z,r),f=N_/d.Length();return new Ut(d.x+c.vx/f,d.y+c.vy/f,d.z+c.vz/f,r)}const l=Zr(e,r);return new Ut(a.x-l.x,a.y-l.y,a.z-l.z,r)}let s;i?s=new Ut(0,0,0,r):s=Zr(e,r);const o=new IS(e,n,i,s);return DS(a=>o.Position(a),r)}function qf(t,e,n){Dc(n);const i=En(e);switch(t){case ge.Earth:return new Ut(0,0,0,i);case ge.Moon:return co(i);default:const r=US(i,ge.Earth,t,n);return r.t=i,r}}function FS(t,e){return new mr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function OS(t,e){const n=En(e);switch(t){case ge.Sun:return new mr(0,0,0,0,0,0,n);case ge.SSB:const i=new fu(n.tt);return new mr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case ge.Mercury:case ge.Venus:case ge.Earth:case ge.Mars:case ge.Jupiter:case ge.Saturn:case ge.Uranus:case ge.Neptune:const r=Wf(zi[t],n.tt);return FS(r,n);case ge.Pluto:return X_(n);case ge.Moon:case ge.EMB:const s=Wf(zi.Earth,n.tt),o=t==ge.Moon?V_(n):bS(n);return new mr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if($h(t)){const a=Zr(t,n);return new mr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function kS(t,e,n,i,r){let s=(r+n)/2-i,o=(r-n)/2,a=i,l;if(s==0){if(o==0||(l=-a/o,l<-1||l>1))return null}else{let f=o*o-4*s*a;if(f<=0)return null;let u=Math.sqrt(f),p=(-o+u)/(2*s),g=(-o-u)/(2*s);if(-1<=p&&p<=1){if(-1<=g&&g<=1)return null;l=p}else if(-1<=g&&g<=1)l=g;else return null}let c=t+l*e,d=(2*s*l+o)/e;return{t:c,df_dt:d}}function zS(t,e,n,i){const r=Rt(i&&i.dt_tolerance_seconds||1),s=Math.abs(r/I_);let o=i&&i.init_f1||t(e),a=i&&i.init_f2||t(n),l=NaN,c=0,d=i&&i.iter_limit||20,f=!0;for(;;){if(++c>d)throw"Excessive iteration in Search()";let u=dS(e,n,.5),p=u.ut-e.ut;if(Math.abs(p)<s)return u;f?l=t(u):f=!0;let g=kS(u.ut,n.ut-u.ut,o,l,a);if(g){let x=En(g.t),v=t(x);if(g.df_dt!==0){if(Math.abs(v/g.df_dt)<s)return x;let h=1.2*Math.abs(v/g.df_dt);if(h<p/10){let m=x.AddDays(-h),_=x.AddDays(+h);if((m.ut-e.ut)*(m.ut-n.ut)<0&&(_.ut-e.ut)*(_.ut-n.ut)<0){let M=t(m),b=t(_);if(M<0&&b>=0){o=M,a=b,e=m,n=_,l=v,f=!1;continue}}}}}if(o<0&&l>=0){n=u,a=l;continue}if(l<0&&a>=0){e=u,o=l;continue}return null}}function BS(t){for(;t<0;)t+=360;for(;t>=360;)t-=360;return t}function GS(t,e,n){if(t===ge.Earth||e===ge.Earth)throw"The Earth does not have a longitude as seen from itself.";const i=En(n),r=qf(t,i,!1),s=zf(r),o=qf(e,i,!1),a=zf(o);return BS(s.elon-a.elon)}function VS(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case ge.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case ge.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case ge.Mars:r=-1.52,s=1.6;break;case ge.Jupiter:r=-9.4,s=.5;break;case ge.Uranus:r=-7.19,s=.25;break;case ge.Neptune:r=-6.87;break;case ge.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function HS(t,e,n,i,r){const s=zf(i),o=ct*28.06,a=ct*(169.51+382e-7*r.tt),l=ct*s.elat,c=ct*s.elon,d=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),f=Math.sin(Math.abs(d));let u=-9+.044*t;return u+=f*(-2.6+1.2*f),u+=5*Math.log10(e*n),{mag:u,ring_tilt:Si*d}}function WS(t,e,n){let i=t*ct,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Fi;let l=n/a;return o+=5*Math.log10(e*l),o}class jS{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(ct*i))/2}}function $_(t,e){if(t===ge.Earth)throw"The illumination of the Earth is not defined.";const n=En(e),i=oa(zi.Earth,n);let r,s,o,a;t===ge.Sun?(o=new Ut(-i.x,-i.y,-i.z,n),s=new Ut(0,0,0,n),r=0):(t===ge.Moon?(o=co(n),s=new Ut(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=Zr(t,e),o=new Ut(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=sS(o,s));let l=o.Length(),c=s.Length(),d;if(t===ge.Sun)a=Ky+5*Math.log10(l);else if(t===ge.Moon)a=WS(r,c,l);else if(t===ge.Saturn){const f=HS(r,c,l,o,n);a=f.mag,d=f.ring_tilt}else a=VS(t,r,c,l);return new jS(n,a,r,c,l,o,s,d)}function XS(t){return GS(ge.Moon,ge.Sun,t)}class $S{constructor(e,n,i){this.pressure=e,this.temperature=n,this.density=i}}function qS(t){if(!Number.isFinite(t)||t<-500||t>1e5)throw`Invalid elevation: ${t}`;let r,s;t<=11e3?(r=288.15-.0065*t,s=101325*Math.pow(288.15/r,-5.25577)):t<=2e4?(r=216.65,s=22632*Math.exp(-.00015768832*(t-11e3))):(r=216.65+.001*(t-2e4),s=5474.87*Math.pow(216.65/r,34.16319));const o=s/r/(101325/288.15);return new $S(s,r,o)}function YS(t,e){const n=t.latitude*ct,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,i*Zs),o=s*(Zs*Zs),a=(t.height-e)/1e3,l=Aa*s+a,c=Aa*o+a,d=1e3*Math.hypot(l*r,c*i),f=.175*Math.pow(1-.0065/283.15*(t.height-2/3*e),3.256);return Si*-(Math.sqrt(2*(1-f)*e/d)/(1-f))}function KS(t){switch(t){case ge.Sun:return Jy;case ge.Moon:return iS;default:return 0}}function $m(t,e,n,i,r,s=0){if(!Number.isFinite(s)||s<0)throw`Invalid value for metersAboveGround: ${s}`;const o=KS(t),a=qS(e.height-s),c=YS(e,s)-rS*a.density;return JS(t,e,n,i,r,o,c)}class ZS{constructor(e,n,i,r){this.tx=e,this.ty=n,this.ax=i,this.ay=r}}function Yf(t,e,n,i,r,s,o){if(s<0&&o>=0)return new ZS(i,r,s,o);if(s>=0&&o<0)return null;if(t>17)throw"Excessive recursion in rise/set ascent search.";const a=r.ut-i.ut;if(a*I_<1||Math.min(Math.abs(s),Math.abs(o))>n*(a/2))return null;const c=new Tr((i.ut+r.ut)/2),d=e(c);return Yf(1+t,e,n,i,c,s,d)||Yf(1+t,e,n,c,r,d,o)}function QS(t,e){if(e<-90||e>90)throw`Invalid geographic latitude: ${e}`;let n,i;switch(t){case ge.Moon:n=4.5,i=8.2;break;case ge.Sun:n=.8,i=.5;break;case ge.Mercury:n=-1.6,i=1;break;case ge.Venus:n=-.8,i=.6;break;case ge.Mars:n=-.5,i=.4;break;case ge.Jupiter:case ge.Saturn:case ge.Uranus:case ge.Neptune:case ge.Pluto:n=-.2,i=.2;break;case ge.Star1:case ge.Star2:case ge.Star3:case ge.Star4:case ge.Star5:case ge.Star6:case ge.Star7:case ge.Star8:n=-.008,i=.008;break;default:throw`Body not allowed for altitude search: ${t}`}const r=ct*e;return Math.abs((360/Zy-n)*Math.cos(r))+Math.abs(i*Math.sin(r))}function JS(t,e,n,i,r,s,o){if(du(e),Rt(r),Rt(s),Rt(o),o<-90||o>90)throw`Invalid target altitude angle: ${o}`;const a=QS(t,e.latitude);function l(g){const x=G_(t,g,e,!0,!0),h=B_(g,e,x.ra,x.dec).altitude+Si*Math.asin(s/x.dist);return n*(h-o)}const c=En(i);let d=c,f=c,u=l(d),p=u;for(;;){f=d.AddDays(.42),p=l(f);const g=Yf(0,l,a,d,f,u,p);if(g){const x=zS(l,g.tx,g.ty,{dt_tolerance_seconds:.1,init_f1:g.ax,init_f2:g.ay});if(x)return x.ut>c.ut+r?null:x;throw`Rise/set search failed after finding ascent: t1=${d}, t2=${f}, a1=${u}, a2=${p}`}{if(f.ut>c.ut+r)return null;d=f,u=p}}}var qm;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(qm||(qm={}));function eM(t,e){e=En(e);const n=t.lat*ct,i=t.lon*ct,r=t.dist*Math.cos(n);return new Ut(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function tM(t,e){let n;if(Rt(e),e<-90||e>90)return 0;if(t==="normal"||t==="jplhor"){let i=e;i<-1&&(i=-1),n=1.02/Math.tan((i+10.3/(i+5.11))*ct)/60,t==="normal"&&e<-1&&(n*=(e+90)/89)}else if(!t)n=0;else throw`Invalid refraction option: ${t}`;return n}var Ym;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Ym||(Ym={}));var Km;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Km||(Km={}));const nM=[ge.Sun,ge.Moon,ge.Mercury,ge.Venus,ge.Mars,ge.Jupiter,ge.Saturn,ge.Uranus,ge.Neptune,ge.Pluto];function iM(t,e){const n=e?new Fc(e.latitude,e.longitude,e.elevation):new Fc(0,0,0);return nM.map(i=>{const r=G_(i,t,n,!0,!0);let s=null,o=null;try{const l=$_(i,t);s=l.mag,o=l.geo_dist}catch{s=null,o=null}const a=e?B_(t,n,r.ra,r.dec,"normal"):null;return{body:i,ra:r.ra*15,dec:r.dec,mag:s,au:o,altitude:a?a.altitude:null,azimuth:a?a.azimuth:null}})}function rM(t,e,n){if(!n)return null;const i=new Fc(n.latitude,n.longitude,n.elevation);try{const r=$m(t,i,1,e,1),s=$m(t,i,-1,e,1);return{rise:r?r.date:null,set:s?s.date:null,searched:!0}}catch(r){return console.warn("[cosmos] rise/set search failed, shown as unknown",t,r),null}}function sM(t){const e=(t%360+360)%360;return e<1||e>=359?"new":Math.abs(e-90)<1?"firstQuarter":Math.abs(e-180)<1?"full":Math.abs(e-270)<1?"lastQuarter":e<90?"waxingCrescent":e<180?"waxingGibbous":e<270?"waningGibbous":"waningCrescent"}function oM(t){const e=XS(t),n=$_(ge.Moon,t);return{phaseAngle:e,illuminated:n.phase_fraction,phase:sM(e)}}function q_(t,e,n,i){if(t.trim()==="")return{ok:!1,why:"latitude"};if(e.trim()==="")return{ok:!1,why:"longitude"};const r=Number(t.trim().replace(",","."));if(!Number.isFinite(r)||r<-90||r>90)return{ok:!1,why:"latitude"};const s=Number(e.trim().replace(",","."));if(!Number.isFinite(s)||s<-180||s>180)return{ok:!1,why:"longitude"};const o=n.trim(),a=o===""?0:Number(o.replace(",","."));return!Number.isFinite(a)||a<-500||a>9e3?{ok:!1,why:"elevation"}:{ok:!0,place:{latitude:r,longitude:s,elevation:a,label:i.trim()}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="184",aM=0,Zm=1,lM=2,ec=1,cM=2,Xo=3,Cr=0,Sn=1,Jn=2,Vi=0,Js=1,Kf=2,Qm=3,Jm=4,uM=5,Gr=100,dM=101,fM=102,hM=103,pM=104,mM=200,gM=201,vM=202,_M=203,Zf=204,Qf=205,xM=206,yM=207,SM=208,MM=209,EM=210,wM=211,TM=212,AM=213,bM=214,Jf=0,e0=1,t0=2,uo=3,n0=4,i0=5,r0=6,s0=7,Y_=0,CM=1,RM=2,Mi=0,K_=1,Z_=2,Q_=3,J_=4,ex=5,tx=6,nx=7,ix=300,ss=301,fo=302,Qu=303,Ju=304,pu=306,o0=1e3,Bi=1001,a0=1002,qt=1003,PM=1004,dl=1005,sn=1006,ed=1007,$r=1008,zn=1009,rx=1010,sx=1011,ba=1012,Kh=1013,wi=1014,gi=1015,qi=1016,Zh=1017,Qh=1018,Ca=1020,ox=35902,ax=35899,lx=1021,cx=1022,ti=1023,Yi=1026,qr=1027,ux=1028,Jh=1029,os=1030,ep=1031,tp=1033,tc=33776,nc=33777,ic=33778,rc=33779,l0=35840,c0=35841,u0=35842,d0=35843,f0=36196,h0=37492,p0=37496,m0=37488,g0=37489,kc=37490,v0=37491,_0=37808,x0=37809,y0=37810,S0=37811,M0=37812,E0=37813,w0=37814,T0=37815,A0=37816,b0=37817,C0=37818,R0=37819,P0=37820,N0=37821,L0=36492,D0=36494,I0=36495,U0=36283,F0=36284,zc=36285,O0=36286,NM=3200,eg=0,LM=1,fr="",Un="srgb",Bc="srgb-linear",Gc="linear",lt="srgb",gs=7680,tg=519,DM=512,IM=513,UM=514,np=515,FM=516,OM=517,ip=518,kM=519,ng=35044,ig="300 es",vi=2e3,Vc=2001;function zM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BM(){const t=Hc("canvas");return t.style.display="block",t}const rg={};function sg(...t){const e="THREE."+t.shift();console.log(e,...t)}function dx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=dx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=dx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function k0(...t){const e=t.join(" ");e in rg||(rg[e]=!0,He(...t))}function GM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const VM={[Jf]:e0,[t0]:r0,[n0]:s0,[uo]:i0,[e0]:Jf,[r0]:t0,[s0]:n0,[i0]:uo};class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,z0=180/Math.PI;function ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function HM(t,e){return(t%e+e)%e}function nd(t,e,n){return(1-n)*t+n*e}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fp=class fp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fp.prototype.isVector2=!0;let dt=fp;class xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(f!==x||l!==u||c!==p||d!==g){let v=l*u+c*p+d*g+f*x;v<0&&(u=-u,p=-p,g=-g,x=-x,v=-v);let h=1-a;if(v<.9995){const m=Math.acos(v),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+u*a,c=c*h+p*a,d=d*h+g*a,f=f*h+x*a}else{l=l*h+u*a,c=c*h+p*a,d=d*h+g*a,f=f*h+x*a;const m=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=m,c*=m,d*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*f+l*p-c*u,e[n+1]=l*g+d*u+c*f-a*p,e[n+2]=c*g+d*p+a*u-l*f,e[n+3]=d*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"YXZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"ZXY":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"ZYX":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"YZX":this._x=u*d*f+c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f-u*p*g;break;case"XZY":this._x=u*d*f-c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f+u*p*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hp=class hp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(og.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(og.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hp.prototype.isVector3=!0;let H=hp;const id=new H,og=new xo,pp=class pp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],g=i[8],x=r[0],v=r[3],h=r[6],m=r[1],_=r[4],M=r[7],b=r[2],E=r[5],T=r[8];return s[0]=o*x+a*m+l*b,s[3]=o*v+a*_+l*E,s[6]=o*h+a*M+l*T,s[1]=c*x+d*m+f*b,s[4]=c*v+d*_+f*E,s[7]=c*h+d*M+f*T,s[2]=u*x+p*m+g*b,s[5]=u*v+p*_+g*E,s[8]=u*h+p*M+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,p=c*s-o*l,g=n*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pp.prototype.isMatrix3=!0;let $e=pp;const rd=new $e,ag=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WM(){const t={enabled:!0,workingColorSpace:Bc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fr?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return k0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return k0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Bc]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:ag,fromXYZ:lg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:ag,fromXYZ:lg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const et=WM();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class jM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Hc("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XM=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sd(r[o].image)):s.push(sd(r[o]))}else s=sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let $M=0;const od=new H;class dn extends us{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Bi,r=Bi,s=sn,o=$r,a=ti,l=zn,c=dn.DEFAULT_ANISOTROPY,d=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ka(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case o0:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case a0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case o0:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case a0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ix;dn.DEFAULT_ANISOTROPY=1;const mp=class mp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],g=l[9],x=l[2],v=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,b=(h+1)/2,E=(d+u)/4,T=(f+x)/4,y=(g+v)/4;return _>M&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=T/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=y/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(f-x)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mp.prototype.isVector4=!0;let It=mp;class qM extends us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends qM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fx extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=class qc{constructor(e,n,i,r,s,o,a,l,c,d,f,u,p,g,x,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,u,p,g,x,v)}set(e,n,i,r,s,o,a,l,c,d,f,u,p,g,x,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=g,h[11]=x,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*f,g=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,g=c*d,x=c*f;n[0]=u+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,g=c*d,x=c*f;n[0]=u-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*f,g=a*d,x=a*f;n[0]=l*d,n[4]=g*c-p,n[8]=u*c+x,n[1]=l*f,n[5]=x*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=x-u*f,n[8]=g*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+g,n[10]=u-x*f}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+x,n[5]=o*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=x*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KM,e,ZM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),nr.crossVectors(i,Tn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),nr.crossVectors(i,Tn)),nr.normalize(),fl.crossVectors(Tn,nr),r[0]=nr.x,r[4]=fl.x,r[8]=Tn.x,r[1]=nr.y,r[5]=fl.y,r[9]=Tn.y,r[2]=nr.z,r[6]=fl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],g=i[2],x=i[6],v=i[10],h=i[14],m=i[3],_=i[7],M=i[11],b=i[15],E=r[0],T=r[4],y=r[8],C=r[12],L=r[1],N=r[5],O=r[9],Z=r[13],ne=r[2],I=r[6],W=r[10],k=r[14],U=r[3],Y=r[7],G=r[11],q=r[15];return s[0]=o*E+a*L+l*ne+c*U,s[4]=o*T+a*N+l*I+c*Y,s[8]=o*y+a*O+l*W+c*G,s[12]=o*C+a*Z+l*k+c*q,s[1]=d*E+f*L+u*ne+p*U,s[5]=d*T+f*N+u*I+p*Y,s[9]=d*y+f*O+u*W+p*G,s[13]=d*C+f*Z+u*k+p*q,s[2]=g*E+x*L+v*ne+h*U,s[6]=g*T+x*N+v*I+h*Y,s[10]=g*y+x*O+v*W+h*G,s[14]=g*C+x*Z+v*k+h*q,s[3]=m*E+_*L+M*ne+b*U,s[7]=m*T+_*N+M*I+b*Y,s[11]=m*y+_*O+M*W+b*G,s[15]=m*C+_*Z+M*k+b*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],g=e[3],x=e[7],v=e[11],h=e[15],m=l*p-c*u,_=a*p-c*f,M=a*u-l*f,b=o*p-c*d,E=o*u-l*d,T=o*f-a*d;return n*(x*m-v*_+h*M)-i*(g*m-v*b+h*E)+r*(g*_-x*b+h*T)-s*(g*M-x*E+v*T)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],g=e[12],x=e[13],v=e[14],h=e[15],m=n*a-i*o,_=n*l-r*o,M=n*c-s*o,b=i*l-r*a,E=i*c-s*a,T=r*c-s*l,y=d*x-f*g,C=d*v-u*g,L=d*h-p*g,N=f*v-u*x,O=f*h-p*x,Z=u*h-p*v,ne=m*Z-_*O+M*N+b*L-E*C+T*y;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/ne;return e[0]=(a*Z-l*O+c*N)*I,e[1]=(r*O-i*Z-s*N)*I,e[2]=(x*T-v*E+h*b)*I,e[3]=(u*E-f*T-p*b)*I,e[4]=(l*L-o*Z-c*C)*I,e[5]=(n*Z-r*L+s*C)*I,e[6]=(v*M-g*T-h*_)*I,e[7]=(d*T-u*M+p*_)*I,e[8]=(o*O-a*L+c*y)*I,e[9]=(i*L-n*O-s*y)*I,e[10]=(g*E-x*M+h*m)*I,e[11]=(f*M-d*E-p*m)*I,e[12]=(a*C-o*N-l*y)*I,e[13]=(n*N-i*C+r*y)*I,e[14]=(x*_-g*b-v*m)*I,e[15]=(d*b-f*_+u*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,u=s*c,p=s*d,g=s*f,x=o*d,v=o*f,h=a*f,m=l*c,_=l*d,M=l*f,b=i.x,E=i.y,T=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+M)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(u+h))*E,r[6]=(v+m)*E,r[7]=0,r[8]=(g+_)*T,r[9]=(v-m)*T,r[10]=(1-(u+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,d=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Vc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===vi)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Vc)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};qc.prototype.isMatrix4=!0;let Pt=qc;const _s=new H,Xn=new Pt,KM=new H(0,0,0),ZM=new H(1,1,1),nr=new H,fl=new H,Tn=new H,cg=new Pt,ug=new xo;class as{constructor(e=0,n=0,i=0,r=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const dg=new H,xs=new xo,Ti=new Pt,hl=new H,Do=new H,JM=new H,eE=new xo,fg=new H(1,0,0),hg=new H(0,1,0),pg=new H(0,0,1),mg={type:"added"},tE={type:"removed"},ys={type:"childadded",child:null},ad={type:"childremoved",child:null};class fn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new H,n=new as,i=new xo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hl.copy(e):hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Do,hl,this.up):Ti.lookAt(hl,Do,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Ti),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mg),ys.child=e,this.dispatchEvent(ys),ys.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tE),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mg),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new H(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pl extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),h=this._getHandJoint(c,x);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ml={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=HM(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=cd(o,s,e+1/3),this.g=cd(o,s,e),this.b=cd(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=px[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return et.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Un){et.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(ml);const i=nd(ir.h,ml.h,n),r=nd(ir.s,ml.s,n),s=nd(ir.l,ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new at;at.NAMES=px;class iE extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new H,Ai=new H,ud=new H,bi=new H,Ss=new H,Ms=new H,gg=new H,dd=new H,fd=new H,hd=new H,pd=new It,md=new It,gd=new It;class ei{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ai.subVectors(i,n),ud.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(ud),c=Ai.dot(Ai),d=Ai.dot(ud),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,n),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pd,s.x),o.addScaledVector(md,s.y),o.addScaledVector(gd,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ai.subVectors(e,n),$n.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Ms.subVectors(s,i),dd.subVectors(e,i);const l=Ss.dot(dd),c=Ms.dot(dd);if(l<=0&&c<=0)return n.copy(i);fd.subVectors(e,r);const d=Ss.dot(fd),f=Ms.dot(fd);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ss,o);hd.subVectors(e,s);const p=Ss.dot(hd),g=Ms.dot(hd);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ms,a);const v=d*g-p*f;if(v<=0&&f-d>=0&&p-g>=0)return gg.subVectors(s,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(gg,a);const h=1/(v+x+u);return o=x*h,a=u*h,n.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class za{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),vl.subVectors(this.max,Io),Es.subVectors(e.a,Io),ws.subVectors(e.b,Io),Ts.subVectors(e.c,Io),rr.subVectors(ws,Es),sr.subVectors(Ts,ws),Ir.subVectors(Es,Ts);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ir.z,Ir.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ir.z,0,-Ir.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ir.y,Ir.x,0];return!vd(n,Es,ws,Ts,vl)||(n=[1,0,0,0,1,0,0,0,1],!vd(n,Es,ws,Ts,vl))?!1:(_l.crossVectors(rr,sr),n=[_l.x,_l.y,_l.z],vd(n,Es,ws,Ts,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new H,new H,new H,new H,new H,new H,new H,new H],qn=new H,gl=new za,Es=new H,ws=new H,Ts=new H,rr=new H,sr=new H,Ir=new H,Io=new H,vl=new H,_l=new H,Ur=new H;function vd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),d=i.dot(Ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ft=new H,xl=new dt;let rE=0;class Wt extends us{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class mx extends Wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gx extends Wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mn extends Wt{constructor(e,n,i){super(new Float32Array(e),n,i)}}const sE=new za,Uo=new H,_d=new H;class Ba{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(_d)),this.expandByPoint(Uo.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oE=0;const In=new Pt,xd=new fn,As=new H,An=new za,Fo=new za,Vt=new H;class $t extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zM(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(An.min,Fo.min),An.expandByPoint(Vt),Vt.addVectors(An.max,Fo.max),An.expandByPoint(Vt)):(An.expandByPoint(Fo.min),An.expandByPoint(Fo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Vt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Vt.add(As)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new H,l[y]=new H;const c=new H,d=new H,f=new H,u=new dt,p=new dt,g=new dt,x=new H,v=new H;function h(y,C,L){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,y),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,L),d.sub(c),f.sub(c),p.sub(u),g.sub(u);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(N),v.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(N),a[y].add(x),a[C].add(x),a[L].add(x),l[y].add(v),l[C].add(v),l[L].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,C=m.length;y<C;++y){const L=m[y],N=L.start,O=L.count;for(let Z=N,ne=N+O;Z<ne;Z+=3)h(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const _=new H,M=new H,b=new H,E=new H;function T(y){b.fromBufferAttribute(r,y),E.copy(b);const C=a[y];_.copy(C),_.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(E,C);const N=M.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,N)}for(let y=0,C=m.length;y<C;++y){const L=m[y],N=L.start,O=L.count;for(let Z=N,ne=N+O;Z<ne;Z+=3)T(e.getX(Z+0)),T(e.getX(Z+1)),T(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),v=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let h=0;h<d;h++)u[g++]=c[p++]}return new Wt(u,d,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aE=0;class yo extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=Js,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Qf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Qf&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new H,yd=new H,yl=new H,or=new H,Sd=new H,Sl=new H,Md=new H;class sp{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yd.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(yd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yl),a=or.dot(this.direction),l=-or.dot(yl),c=or.lengthSq(),d=Math.abs(1-o*o);let f,u,p,g;if(d>0)if(f=o*l-a,u=o*a-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const x=1/d;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yd).addScaledVector(yl,u),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Sd.subVectors(n,e),Sl.subVectors(i,e),Md.crossVectors(Sd,Sl);let o=this.direction.dot(Md),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(or,Sl));if(l<0)return null;const c=a*this.direction.dot(Sd.cross(or));if(c<0||l+c>o)return null;const d=-a*or.dot(Md);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wc extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vg=new Pt,Fr=new sp,Ml=new Ba,_g=new H,El=new H,wl=new H,Tl=new H,Ed=new H,Al=new H,xg=new H,bl=new H;class si extends fn{constructor(e=new $t,n=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Ed.fromBufferAttribute(f,e),o?Al.addScaledVector(Ed,d):Al.addScaledVector(Ed.sub(n),d))}n.add(Al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ml,_g)===null||Fr.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(vg.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const v=u[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const E=a.getX(M),T=a.getX(M+1),y=a.getX(M+2);r=Cl(this,h,e,i,c,d,f,E,T,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=g,h=x;v<h;v+=3){const m=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);r=Cl(this,o,e,i,c,d,f,m,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const v=u[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const E=M,T=M+1,y=M+2;r=Cl(this,h,e,i,c,d,f,E,T,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=g,h=x;v<h;v+=3){const m=v,_=v+1,M=v+2;r=Cl(this,o,e,i,c,d,f,m,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function lE(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;bl.copy(a),bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,El),t.getVertexPosition(l,wl),t.getVertexPosition(c,Tl);const d=lE(t,e,n,i,El,wl,Tl,xg);if(d){const f=new H;ei.getBarycoord(xg,El,wl,Tl,f),r&&(d.uv=ei.getInterpolatedAttribute(r,a,l,c,f,new dt)),s&&(d.uv1=ei.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(d.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new H,materialIndex:0};ei.getNormal(El,wl,Tl,u.normal),d.face=u,d.barycoord=f}return d}class cE extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,d=qt,f,u){super(null,o,a,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new H,uE=new H,dE=new $e;class Br{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(uE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(wd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dE.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Ba,fE=new dt(.5,.5),Rl=new H;class vx{constructor(e=new Br,n=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],g=s[8],x=s[9],v=s[10],h=s[11],m=s[12],_=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,p-d,h-g,b-m).normalize(),r[1].setComponents(c+o,p+d,h+g,b+m).normalize(),r[2].setComponents(c+a,p+f,h+x,b+_).normalize(),r[3].setComponents(c-a,p-f,h-x,b-_).normalize(),i)r[4].setComponents(l,u,v,M).normalize(),r[5].setComponents(c-l,p-u,h-v,b-M).normalize();else if(r[4].setComponents(c-l,p-u,h-v,b-M).normalize(),n===vi)r[5].setComponents(c+l,p+u,h+v,b+M).normalize();else if(n===Vc)r[5].setComponents(l,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=fE.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B0 extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new H,Xc=new H,yg=new Pt,Oo=new sp,Pl=new Ba,Td=new H,Sg=new H;class hE extends fn{constructor(e=new $t,n=new B0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Xc);e.setAttribute("lineDistance",new Mn(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;yg.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(yg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,v=g-1;x<v;x+=c){const h=d.getX(x),m=d.getX(x+1),_=Nl(this,e,Oo,l,h,m,x);_&&n.push(_)}if(this.isLineLoop){const x=d.getX(g-1),v=d.getX(p),h=Nl(this,e,Oo,l,x,v,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,v=g-1;x<v;x+=c){const h=Nl(this,e,Oo,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=Nl(this,e,Oo,l,g-1,p,g-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Xc.fromBufferAttribute(a,s),n.distanceSqToSegment(jc,Xc,Td,Sg)>i)return;Td.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Td);if(!(c<e.near||c>e.far))return{distance:c,point:Sg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Mg=new H,Eg=new H;class wg extends hE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Mg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new Mn(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class G0 extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tg=new Pt,V0=new sp,Ll=new Ba,Dl=new H;class Ad extends fn{constructor(e=new $t,n=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;Tg.copy(r).invert(),V0.copy(e.ray).applyMatrix4(Tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,x=p;g<x;g++){const v=c.getX(g);Dl.fromBufferAttribute(f,v),Ag(Dl,v,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,x=p;g<x;g++)Dl.fromBufferAttribute(f,g),Ag(Dl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ag(t,e,n,i,r,s,o){const a=V0.distanceSqToPoint(t);if(a<n){const l=new H;V0.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _x extends dn{constructor(e=[],n=ss,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends dn{constructor(e,n,i=wi,r,s,o,a=qt,l=qt,c,d=Yi,f=1){if(d!==Yi&&d!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pE extends ho{constructor(e,n=wi,i=ss,r,s,o=qt,a=qt,l,c=Yi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xx extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends $t{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(f,2));function g(x,v,h,m,_,M,b,E,T,y,C){const L=M/T,N=b/y,O=M/2,Z=b/2,ne=E/2,I=T+1,W=y+1;let k=0,U=0;const Y=new H;for(let G=0;G<W;G++){const q=G*N-Z;for(let X=0;X<I;X++){const Q=X*L-O;Y[x]=Q*m,Y[v]=q*_,Y[h]=ne,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[v]=0,Y[h]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(X/T),f.push(1-G/y),k+=1}}for(let G=0;G<y;G++)for(let q=0;q<T;q++){const X=u+q+I*G,Q=u+q+I*(G+1),de=u+(q+1)+I*(G+1),ye=u+(q+1)+I*G;l.push(X,Q,ye),l.push(Q,de,ye),U+=6}a.addGroup(p,U,C),p+=U,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mu extends $t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=n/l,p=[],g=[],x=[],v=[];for(let h=0;h<d;h++){const m=h*u-o;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-m,0),x.push(0,0,1),v.push(_/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,M=m+c*(h+1),b=m+1+c*(h+1),E=m+1+c*h;p.push(_,M,E),p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class op extends $t{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const u=(n-e)/r,p=new H,g=new dt;for(let x=0;x<=r;x++){for(let v=0;v<=i;v++){const h=s+v/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,d.push(g.x,g.y)}f+=u}for(let x=0;x<r;x++){const v=x*(i+1);for(let h=0;h<i;h++){const m=h+v,_=m,M=m+i+1,b=m+i+2,E=m+1;a.push(_,M,E),a.push(M,b,E)}}this.setIndex(a),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(c,3)),this.setAttribute("uv",new Mn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(bg(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(bg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function bg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function mE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const gE={clone:po,merge:ln};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=mE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xE extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yE extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Il=new H,Ul=new xo,di=new H;class Sx extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ul,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Il,Ul,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new H,Cg=new dt,Rg=new dt;class kn extends Sx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=z0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return z0*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Cg,Rg),n.subVectors(Rg,Cg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(td*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Mx extends Sx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=-90,Cs=1;class ME extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(bs,Cs,e,n);r.layers=this.layers,this.add(r);const s=new kn(bs,Cs,e,n);s.layers=this.layers,this.add(s);const o=new kn(bs,Cs,e,n);o.layers=this.layers,this.add(o);const a=new kn(bs,Cs,e,n);a.layers=this.layers,this.add(a);const l=new kn(bs,Cs,e,n);l.layers=this.layers,this.add(l);const c=new kn(bs,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class EE extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gp=class gp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};gp.prototype.isMatrix2=!0;let Pg=gp;function Ng(t,e,n,i){const r=wE(i);switch(n){case lx:return t*e;case ux:return t*e/r.components*r.byteLength;case Jh:return t*e/r.components*r.byteLength;case os:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case cx:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case c0:case d0:return Math.max(t,16)*Math.max(e,8)/4;case l0:case u0:return Math.max(t,8)*Math.max(e,8)/2;case f0:case h0:case m0:case g0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case p0:case kc:case v0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case x0:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case y0:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case S0:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case M0:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case E0:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case w0:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case T0:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case A0:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case b0:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case C0:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case R0:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case P0:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case N0:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case L0:case D0:case I0:return Math.ceil(t/4)*Math.ceil(e/4)*16;case U0:case F0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zc:case O0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wE(t){switch(t){case zn:case rx:return{byteLength:1,components:1};case ba:case sx:case qi:return{byteLength:2,components:1};case Zh:case Qh:return{byteLength:2,components:4};case wi:case Kh:case gi:return{byteLength:4,components:1};case ox:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TE(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var AE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
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
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`#define PI 3.141592653589793
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
} // validated`,KE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
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
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vw=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,_w=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ew=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ww=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tw=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fw=`#if defined( USE_POINTS_UV )
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
#endif`,Ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`#ifdef USE_MORPHTARGETS
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
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
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
#endif`,Kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,n4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,d4=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,f4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h4=`#ifdef USE_SKINNING
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
#endif`,p4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m4=`#ifdef USE_SKINNING
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
#endif`,g4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x4=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y4=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S4=`#ifdef USE_TRANSMISSION
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
#endif`,M4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b4=`uniform sampler2D t2D;
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
}`,C4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L4=`#include <common>
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
}`,D4=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I4=`#define DISTANCE
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
}`,U4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,F4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k4=`uniform float scale;
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
}`,z4=`uniform vec3 diffuse;
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
}`,B4=`#include <common>
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
}`,G4=`uniform vec3 diffuse;
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
}`,V4=`#define LAMBERT
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
}`,H4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,W4=`#define MATCAP
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
}`,j4=`#define MATCAP
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
}`,X4=`#define NORMAL
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
}`,$4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q4=`#define PHONG
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
}`,Y4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,K4=`#define STANDARD
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
}`,Z4=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Q4=`#define TOON
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
}`,J4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,eT=`uniform float size;
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sT=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:AE,alphahash_pars_fragment:bE,alphamap_fragment:CE,alphamap_pars_fragment:RE,alphatest_fragment:PE,alphatest_pars_fragment:NE,aomap_fragment:LE,aomap_pars_fragment:DE,batching_pars_vertex:IE,batching_vertex:UE,begin_vertex:FE,beginnormal_vertex:OE,bsdfs:kE,iridescence_fragment:zE,bumpmap_pars_fragment:BE,clipping_planes_fragment:GE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:WE,color_fragment:jE,color_pars_fragment:XE,color_pars_vertex:$E,color_vertex:qE,common:YE,cube_uv_reflection_fragment:KE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:ow,envmap_pars_vertex:aw,envmap_physical_pars_fragment:_w,envmap_vertex:lw,fog_vertex:cw,fog_pars_vertex:uw,fog_fragment:dw,fog_pars_fragment:fw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:vw,lights_toon_fragment:xw,lights_toon_pars_fragment:yw,lights_phong_fragment:Sw,lights_phong_pars_fragment:Mw,lights_physical_fragment:Ew,lights_physical_pars_fragment:ww,lights_fragment_begin:Tw,lights_fragment_maps:Aw,lights_fragment_end:bw,lightprobes_pars_fragment:Cw,logdepthbuf_fragment:Rw,logdepthbuf_pars_fragment:Pw,logdepthbuf_pars_vertex:Nw,logdepthbuf_vertex:Lw,map_fragment:Dw,map_pars_fragment:Iw,map_particle_fragment:Uw,map_particle_pars_fragment:Fw,metalnessmap_fragment:Ow,metalnessmap_pars_fragment:kw,morphinstance_vertex:zw,morphcolor_vertex:Bw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Hw,normal_fragment_begin:Ww,normal_fragment_maps:jw,normal_pars_fragment:Xw,normal_pars_vertex:$w,normal_vertex:qw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:Kw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Qw,iridescence_pars_fragment:Jw,opaque_fragment:e4,packing:t4,premultiplied_alpha_fragment:n4,project_vertex:i4,dithering_fragment:r4,dithering_pars_fragment:s4,roughnessmap_fragment:o4,roughnessmap_pars_fragment:a4,shadowmap_pars_fragment:l4,shadowmap_pars_vertex:c4,shadowmap_vertex:u4,shadowmask_pars_fragment:d4,skinbase_vertex:f4,skinning_pars_vertex:h4,skinning_vertex:p4,skinnormal_vertex:m4,specularmap_fragment:g4,specularmap_pars_fragment:v4,tonemapping_fragment:_4,tonemapping_pars_fragment:x4,transmission_fragment:y4,transmission_pars_fragment:S4,uv_pars_fragment:M4,uv_pars_vertex:E4,uv_vertex:w4,worldpos_vertex:T4,background_vert:A4,background_frag:b4,backgroundCube_vert:C4,backgroundCube_frag:R4,cube_vert:P4,cube_frag:N4,depth_vert:L4,depth_frag:D4,distance_vert:I4,distance_frag:U4,equirect_vert:F4,equirect_frag:O4,linedashed_vert:k4,linedashed_frag:z4,meshbasic_vert:B4,meshbasic_frag:G4,meshlambert_vert:V4,meshlambert_frag:H4,meshmatcap_vert:W4,meshmatcap_frag:j4,meshnormal_vert:X4,meshnormal_frag:$4,meshphong_vert:q4,meshphong_frag:Y4,meshphysical_vert:K4,meshphysical_frag:Z4,meshtoon_vert:Q4,meshtoon_frag:J4,points_vert:eT,points_frag:tT,shadow_vert:nT,shadow_frag:iT,sprite_vert:rT,sprite_frag:sT},Ee={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},pi={basic:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ln([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ln([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ln([Ee.points,Ee.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ln([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ln([Ee.common,Ee.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ln([Ee.sprite,Ee.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:ln([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:ln([Ee.lights,Ee.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};pi.physical={uniforms:ln([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Fl={r:0,b:0,g:0},oT=new Pt,wx=new $e;wx.set(-1,0,0,0,1,0,0,0,1);function aT(t,e,n,i,r,s){const o=new at(0);let a=r===!0?0:1,l,c,d=null,f=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=e.get(_,M)}return _}function g(m){let _=!1;const M=p(m);M===null?v(o,a):M&&M.isColor&&(v(M,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===pu)?(c===void 0&&(c=new si(new Ga(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:po(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wx),c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(d!==M||f!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new si(new mu(2,2),new oi({name:"BackgroundMaterial",uniforms:po(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,_){m.getRGB(Fl,yx(t)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:x,dispose:h}}function lT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(N,O,Z,ne,I){let W=!1;const k=f(N,ne,Z,O);s!==k&&(s=k,c(s.object)),W=p(N,ne,Z,I),W&&g(N,ne,Z,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(N,O,Z,ne),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function d(N){return t.deleteVertexArray(N)}function f(N,O,Z,ne){const I=ne.wireframe===!0;let W=i[O.id];W===void 0&&(W={},i[O.id]=W);const k=N.isInstancedMesh===!0?N.id:0;let U=W[k];U===void 0&&(U={},W[k]=U);let Y=U[Z.id];Y===void 0&&(Y={},U[Z.id]=Y);let G=Y[I];return G===void 0&&(G=u(l()),Y[I]=G),G}function u(N){const O=[],Z=[],ne=[];for(let I=0;I<n;I++)O[I]=0,Z[I]=0,ne[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:ne,object:N,attributes:{},index:null}}function p(N,O,Z,ne){const I=s.attributes,W=O.attributes;let k=0;const U=Z.getAttributes();for(const Y in U)if(U[Y].location>=0){const q=I[Y];let X=W[Y];if(X===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),q===void 0||q.attribute!==X||X&&q.data!==X.data)return!0;k++}return s.attributesNum!==k||s.index!==ne}function g(N,O,Z,ne){const I={},W=O.attributes;let k=0;const U=Z.getAttributes();for(const Y in U)if(U[Y].location>=0){let q=W[Y];q===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const X={};X.attribute=q,q&&q.data&&(X.data=q.data),I[Y]=X,k++}s.attributes=I,s.attributesNum=k,s.index=ne}function x(){const N=s.newAttributes;for(let O=0,Z=N.length;O<Z;O++)N[O]=0}function v(N){h(N,0)}function h(N,O){const Z=s.newAttributes,ne=s.enabledAttributes,I=s.attributeDivisors;Z[N]=1,ne[N]===0&&(t.enableVertexAttribArray(N),ne[N]=1),I[N]!==O&&(t.vertexAttribDivisor(N,O),I[N]=O)}function m(){const N=s.newAttributes,O=s.enabledAttributes;for(let Z=0,ne=O.length;Z<ne;Z++)O[Z]!==N[Z]&&(t.disableVertexAttribArray(Z),O[Z]=0)}function _(N,O,Z,ne,I,W,k){k===!0?t.vertexAttribIPointer(N,O,Z,I,W):t.vertexAttribPointer(N,O,Z,ne,I,W)}function M(N,O,Z,ne){x();const I=ne.attributes,W=Z.getAttributes(),k=O.defaultAttributeValues;for(const U in W){const Y=W[U];if(Y.location>=0){let G=I[U];if(G===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const q=G.normalized,X=G.itemSize,Q=e.get(G);if(Q===void 0)continue;const de=Q.buffer,ye=Q.type,V=Q.bytesPerElement,ae=ye===t.INT||ye===t.UNSIGNED_INT||G.gpuType===Kh;if(G.isInterleavedBufferAttribute){const ce=G.data,B=ce.stride,ke=G.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)h(Y.location+Ve,ce.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)v(Y.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Ve=0;Ve<Y.locationSize;Ve++)_(Y.location+Ve,X/Y.locationSize,ye,q,B*V,(ke+X/Y.locationSize*Ve)*V,ae)}else{if(G.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)h(Y.location+ce,G.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ce=0;ce<Y.locationSize;ce++)v(Y.location+ce);t.bindBuffer(t.ARRAY_BUFFER,de);for(let ce=0;ce<Y.locationSize;ce++)_(Y.location+ce,X/Y.locationSize,ye,q,X*V,X/Y.locationSize*ce*V,ae)}}else if(k!==void 0){const q=k[U];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(Y.location,q);break;case 3:t.vertexAttrib3fv(Y.location,q);break;case 4:t.vertexAttrib4fv(Y.location,q);break;default:t.vertexAttrib1fv(Y.location,q)}}}}m()}function b(){C();for(const N in i){const O=i[N];for(const Z in O){const ne=O[Z];for(const I in ne){const W=ne[I];for(const k in W)d(W[k].object),delete W[k];delete ne[I]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const Z in O){const ne=O[Z];for(const I in ne){const W=ne[I];for(const k in W)d(W[k].object),delete W[k];delete ne[I]}}delete i[N.id]}function T(N){for(const O in i){const Z=i[O];for(const ne in Z){const I=Z[ne];if(I[N.id]===void 0)continue;const W=I[N.id];for(const k in W)d(W[k].object),delete W[k];delete I[N.id]}}}function y(N){for(const O in i){const Z=i[O],ne=N.isInstancedMesh===!0?N.id:0,I=Z[ne];if(I!==void 0){for(const W in I){const k=I[W];for(const U in k)d(k[U].object),delete k[U];delete I[W]}delete Z[ne],Object.keys(Z).length===0&&delete i[O]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:v,disableUnusedAttributes:m}}function cT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function uT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ti&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const y=T===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gi&&!y)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:b,samples:E}}function dT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Br,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,v=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!v)s?d(null):c();else{const m=s?0:i,_=m*4;let M=h.clippingState||null;l.value=M,M=d(g,u,_,p);for(let b=0;b!==_;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,g){const x=f!==null?f.length:0;let v=null;if(x!==0){if(v=l.value,g!==!0||v===null){const h=p+x*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let _=0,M=p;_!==x;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}const gr=4,Lg=[.125,.215,.35,.446,.526,.582],Vr=20,fT=256,ko=new Mx,Dg=new at;let bd=null,Cd=0,Rd=0,Pd=!1;const hT=new H;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=hT}=s;bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Rd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:qi,format:ti,colorSpace:Bc,depthBuffer:!1},r=Ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pT(s)),this._blurMaterial=gT(s,e,n),this._ggxMaterial=mT(s,e,n)}return r}_compileMaterial(e){const n=new si(new $t,e);this._renderer.compile(n,ko)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Dg),f.toneMapping=Mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new Ga,new Wc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,v=x.material;let h=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,h=!0):(v.color.copy(Dg),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const b=this._cubeSize;Rs(r,M*b,_>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,p=f*u,{_lodMax:g}=this,x=this._sizeLods[i],v=3*x*(i>g-gr?i-g+gr:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Rs(s,v,h,3*x,2*x),r.setRenderTarget(s),r.render(a,ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Rs(e,v,h,3*x,2*x),r.setRenderTarget(e),r.render(a,ko)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),x=s/g,v=isFinite(s)?1+Math.floor(d*x):Vr;v>Vr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vr}`);const h=[];let m=0;for(let T=0;T<Vr;++T){const y=T/x,C=Math.exp(-y*y/2);h.push(C),T===0?m+=C:T<v&&(m+=2*C)}for(let T=0;T<h.length;T++)h[T]=h[T]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const M=this._sizeLods[r],b=3*M*(r>_-gr?r-_+gr:0),E=4*(this._cubeSize-M);Rs(n,b,E,3*M,2*M),l.setRenderTarget(n),l.render(f,ko)}}function pT(t){const e=[],n=[],i=[];let r=t;const s=t-gr+1+Lg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-gr?l=Lg[o-t+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,x=3,v=2,h=1,m=new Float32Array(x*g*p),_=new Float32Array(v*g*p),M=new Float32Array(h*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,y=E>2?0:-1,C=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];m.set(C,x*g*E),_.set(u,v*g*E);const L=[E,E,E,E,E,E];M.set(L,h*g*E)}const b=new $t;b.setAttribute("position",new Wt(m,x)),b.setAttribute("uv",new Wt(_,v)),b.setAttribute("faceIndex",new Wt(M,h)),i.push(new si(b,null)),r>gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ug(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mT(t,e,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gT(t,e,n){const i=new Float32Array(Vr),r=new H(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Fg(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Og(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class Tx extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _x(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===$r&&(n.minFilter=sn),new ME(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function vT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Qu||p===Ju)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Tx(g.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===Qu||p===Ju,x=p===ss||p===fo;if(g||x){let v=n.get(u);const h=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Ig(t)),v=g?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const m=u.image;return g&&m&&m.height>0||x&&m&&l(m)?(i===null&&(i=new Ig(t)),v=g?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",d),v.texture):null}}}return u}function a(u,p){return p===Qu?u.mapping=ss:p===Ju&&(u.mapping=fo),u}function l(u){let p=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function _T(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&k0("WebGLRenderer: "+i+" extension not supported."),r}}}function xT(t,e,n,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const m=p.array;x=p.version;for(let _=0,M=m.length;_<M;_+=3){const b=m[_+0],E=m[_+1],T=m[_+2];u.push(b,E,E,T,T,b)}}else{const m=g.array;x=g.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const b=_+0,E=_+1,T=_+2;u.push(b,E,E,T,T,b)}}const v=new(g.count>=65535?gx:mx)(u,1);v.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,v)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function yT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){t.drawElements(i,u,s,f*o),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*o,p),n.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let x=0;for(let v=0;v<p;v++)x+=u[v];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ST(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MT(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*E*4*f),y=new fx(T,b,E,f);y.type=gi,y.needsUpdate=!0;const C=M*4;for(let N=0;N<f;N++){const O=h[N],Z=m[N],ne=_[N],I=b*E*4*N;for(let W=0;W<O.count;W++){const k=W*C;g===!0&&(r.fromBufferAttribute(O,W),T[I+k+0]=r.x,T[I+k+1]=r.y,T[I+k+2]=r.z,T[I+k+3]=0),x===!0&&(r.fromBufferAttribute(Z,W),T[I+k+4]=r.x,T[I+k+5]=r.y,T[I+k+6]=r.z,T[I+k+7]=0),v===!0&&(r.fromBufferAttribute(ne,W),T[I+k+8]=r.x,T[I+k+9]=r.y,T[I+k+10]=r.z,T[I+k+11]=ne.itemSize===4?r.w:1)}}u={count:f,texture:y,size:new dt(b,E)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function ET(t,e,n,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:a}}const wT={[K_]:"LINEAR_TONE_MAPPING",[Z_]:"REINHARD_TONE_MAPPING",[Q_]:"CINEON_TONE_MAPPING",[J_]:"ACES_FILMIC_TONE_MAPPING",[tx]:"AGX_TONE_MAPPING",[nx]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function TT(t,e,n,i,r){const s=new Ei(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ho(e,n):void 0}),o=new Ei(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),a=new $t;a.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const l=new xE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new si(a,l),d=new Mx(-1,1,1,-1,0,1);let f=null,u=null,p=!1,g,x=null,v=[],h=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let M=0;M<v.length;M++){const b=v[M];b.setSize&&b.setSize(m,_)}},this.setEffects=function(m){v=m,h=v.length>0&&v[0].isRenderPass===!0;const _=s.width,M=s.height;for(let b=0;b<v.length;b++){const E=v[b];E.setSize&&E.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===Mi&&v.length===0)return!1;if(x=_,_!==null){const M=_.width,b=_.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return h===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Mi,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=g,p=!0;let M=s,b=o;for(let E=0;E<v.length;E++){const T=v[E];if(T.enabled!==!1&&(T.render(m,b,M,_),T.needsSwap!==!1)){const y=M;M=b,b=y}}if(f!==m.outputColorSpace||u!==m.toneMapping){f=m.outputColorSpace,u=m.toneMapping,l.defines={},et.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const E=wT[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(x),m.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ax=new dn,H0=new ho(1,1),bx=new fx,Cx=new YM,Rx=new _x,kg=[],zg=[],Bg=new Float32Array(16),Gg=new Float32Array(9),Vg=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kg[r];if(s===void 0&&(s=new Float32Array(r),kg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vu(t,e){let n=zg[e];n===void 0&&(n=new Int32Array(e),zg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function PT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Vg.set(i),t.uniformMatrix2fv(this.addr,!1,Vg),Gt(n,i)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),Gt(n,i)}}function LT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Bg.set(i),t.uniformMatrix4fv(this.addr,!1,Bg),Gt(n,i)}}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(H0.compareFunction=n.isReversedDepthBuffer()?ip:np,s=H0):s=Ax,n.setTexture2D(e||s,r)}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cx,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rx,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bx,r)}function jT(t){switch(t){case 5126:return AT;case 35664:return bT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return kT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return WT}}function XT(t,e){t.uniform1fv(this.addr,e)}function $T(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function qT(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function YT(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function KT(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZT(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QT(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JT(t,e){t.uniform1iv(this.addr,e)}function eA(t,e){t.uniform2iv(this.addr,e)}function tA(t,e){t.uniform3iv(this.addr,e)}function nA(t,e){t.uniform4iv(this.addr,e)}function iA(t,e){t.uniform1uiv(this.addr,e)}function rA(t,e){t.uniform2uiv(this.addr,e)}function sA(t,e){t.uniform3uiv(this.addr,e)}function oA(t,e){t.uniform4uiv(this.addr,e)}function aA(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=H0:o=Ax;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function lA(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Cx,s[o])}function cA(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Rx,s[o])}function uA(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bx,s[o])}function dA(t){switch(t){case 5126:return XT;case 35664:return $T;case 35665:return qT;case 35666:return YT;case 35674:return KT;case 35675:return ZT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class fA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jT(n.type)}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dA(n.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function Hg(t,e){t.seq.push(e),t.map[e.id]=e}function mA(t,e,n){const i=t.name,r=i.length;for(Nd.lastIndex=0;;){const s=Nd.exec(i),o=Nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hg(n,c===void 0?new fA(a,t,e):new hA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new pA(a),Hg(n,f)),n=f}}}class sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);mA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gA=37297;let vA=0;function _A(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jg=new $e;function xA(t){et._getMatrix(jg,et.workingColorSpace,t);const e=`mat3( ${jg.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+_A(t.getShaderSource(e),a)}else return s}function yA(t,e){const n=xA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SA={[K_]:"Linear",[Z_]:"Reinhard",[Q_]:"Cineon",[J_]:"ACESFilmic",[tx]:"AgX",[nx]:"Neutral",[ex]:"Custom"};function MA(t,e){const n=SA[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new H;function EA(){et.getLuminanceCoefficients(Ol);const t=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function TA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function $g(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function W0(t){return t.replace(bA,RA)}const CA=new Map;function RA(t,e){let n=Ye[e];if(n===void 0){const i=CA.get(e);if(i!==void 0)n=Ye[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return W0(n)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(t){return t.replace(PA,NA)}function NA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const LA={[ec]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function DA(t){return LA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IA={[ss]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function UA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":IA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[fo]:"ENVMAP_MODE_REFRACTION"};function OA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kA={[Y_]:"ENVMAP_BLENDING_MULTIPLY",[CM]:"ENVMAP_BLENDING_MIX",[RM]:"ENVMAP_BLENDING_ADD"};function zA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":kA[t.combine]||"ENVMAP_BLENDING_NONE"}function BA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DA(n),c=UA(n),d=OA(n),f=zA(n),u=BA(n),p=wA(n),g=TA(s),x=r.createProgram();let v,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($o).join(`
`),h.length>0&&(h+=`
`)):(v=[Kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),h=[Kg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Mi?MA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),EA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=W0(o),o=$g(o,n),o=qg(o,n),a=W0(a),a=$g(a,n),a=qg(a,n),o=Yg(o),a=Yg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+v+o,M=m+h+a,b=Wg(r,r.VERTEX_SHADER,_),E=Wg(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",Z=r.getShaderInfoLog(b)||"",ne=r.getShaderInfoLog(E)||"",I=O.trim(),W=Z.trim(),k=ne.trim();let U=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,E);else{const G=Xg(r,b,"vertex"),q=Xg(r,E,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+G+`
`+q)}else I!==""?He("WebGLProgram: Program Info Log:",I):(W===""||k==="")&&(Y=!1);Y&&(N.diagnostics={runnable:U,programLog:I,vertexShader:{log:W,prefix:v},fragmentShader:{log:k,prefix:h}})}r.deleteShader(b),r.deleteShader(E),y=new sc(r,x),C=AA(r,x)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,gA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let VA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WA(e),n.set(e,i)),i}}class WA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function jA(t){return t===os||t===kc||t===zc}function XA(t,e,n,i,r,s){const o=new hx,a=new HA,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,C,L,N,O,Z){const ne=N.fog,I=O.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||W,k),Y=U&&U.mapping===pu?U.image.height:null,G=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=q!==void 0?q.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let de,ye,V,ae;if(G){const Xe=pi[G];de=Xe.vertexShader,ye=Xe.fragmentShader}else de=y.vertexShader,ye=y.fragmentShader,a.update(y),V=a.getVertexShaderID(y),ae=a.getFragmentShaderID(y);const ce=t.getRenderTarget(),B=t.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,Ie=!!y.map,Ce=!!y.matcap,ee=!!U,be=!!y.aoMap,ze=!!y.lightMap,st=!!y.bumpMap,Qe=!!y.normalMap,Et=!!y.displacementMap,D=!!y.emissiveMap,yt=!!y.metalnessMap,Ze=!!y.roughnessMap,ot=y.anisotropy>0,Me=y.clearcoat>0,St=y.dispersion>0,A=y.iridescence>0,S=y.sheen>0,z=y.transmission>0,re=ot&&!!y.anisotropyMap,le=Me&&!!y.clearcoatMap,pe=Me&&!!y.clearcoatNormalMap,ve=Me&&!!y.clearcoatRoughnessMap,te=A&&!!y.iridescenceMap,oe=A&&!!y.iridescenceThicknessMap,we=S&&!!y.sheenColorMap,Re=S&&!!y.sheenRoughnessMap,_e=!!y.specularMap,me=!!y.specularColorMap,We=!!y.specularIntensityMap,xe=z&&!!y.transmissionMap,Fe=z&&!!y.thicknessMap,P=!!y.gradientMap,ie=!!y.alphaMap,J=y.alphaTest>0,he=!!y.alphaHash,ue=!!y.extensions;let se=Mi;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(se=t.toneMapping);const Pe={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:ye,defines:y.defines,customVertexShaderID:V,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:Ce,envMap:ee,envMapMode:ee&&U.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:ze,bumpMap:st,normalMap:Qe,displacementMap:Et,emissiveMap:D,normalMapObjectSpace:Qe&&y.normalMapType===LM,normalMapTangentSpace:Qe&&y.normalMapType===eg,packedNormalMap:Qe&&y.normalMapType===eg&&jA(y.normalMap.format),metalnessMap:yt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:re,clearcoat:Me,clearcoatMap:le,clearcoatNormalMap:pe,clearcoatRoughnessMap:ve,dispersion:St,iridescence:A,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:S,sheenColorMap:we,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:me,specularIntensityMap:We,transmission:z,transmissionMap:xe,thicknessMap:Fe,gradientMap:P,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:J,alphaHash:he,combine:y.combine,mapUv:Ie&&g(y.map.channel),aoMapUv:be&&g(y.aoMap.channel),lightMapUv:ze&&g(y.lightMap.channel),bumpMapUv:st&&g(y.bumpMap.channel),normalMapUv:Qe&&g(y.normalMap.channel),displacementMapUv:Et&&g(y.displacementMap.channel),emissiveMapUv:D&&g(y.emissiveMap.channel),metalnessMapUv:yt&&g(y.metalnessMap.channel),roughnessMapUv:Ze&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:le&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:me&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:xe&&g(y.transmissionMap.channel),thicknessMapUv:Fe&&g(y.thicknessMap.channel),alphaMapUv:ie&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qe||ot),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Ie||ie),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&Qe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:B,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:D&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ue&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&y.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)C.push(L),C.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(h(C,y),m(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function h(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function m(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function _(y){const C=p[y.type];let L;if(C){const N=pi[C];L=gE.clone(N.uniforms)}else L=y.uniforms;return L}function M(y,C){let L=d.get(C);return L!==void 0?++L.usedTimes:(L=new GA(t,C,y,r),c.push(L),d.set(C,L)),L}function b(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:T}}function $A(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Zg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,x,v,h){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:v,group:h},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=g,m.materialVariant=o(u),m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=v,m.group=h),e++,m}function l(u,p,g,x,v,h){const m=a(u,p,g,x,v,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(u,p,g,x,v,h){const m=a(u,p,g,x,v,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||qA),i.length>1&&i.sort(p||Zg),r.length>1&&r.sort(p||Zg)}function f(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function YA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qg,t.set(i,[o])):r>=s.length?(o=new Qg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new at};break;case"SpotLight":n={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function ZA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QA=0;function JA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eb(t){const e=new KA,n=ZA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Pt,o=new Pt;function a(c){let d=0,f=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,x=0,v=0,h=0,m=0,_=0,M=0,b=0,E=0,T=0;c.sort(JA);for(let C=0,L=c.length;C<L;C++){const N=c[C],O=N.color,Z=N.intensity,ne=N.distance;let I=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===os?I=N.shadow.map.texture:I=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=O.r*Z,f+=O.g*Z,u+=O.b*Z;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],Z);T++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=W,p++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(O).multiplyScalar(Z),W.distance=ne,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[x]=W;const k=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,k.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[x]=k.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=I,M++}x++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(O).multiplyScalar(Z),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=W,v++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const k=N.shadow,U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=N.shadow.matrix,_++}i.point[g]=W,g++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(Z),W.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[h]=W,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==v||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==_||y.numSpotShadows!==M||y.numSpotMaps!==b||y.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,y.directionalLength=p,y.pointLength=g,y.spotLength=x,y.rectAreaLength=v,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=_,y.numSpotShadows=M,y.numSpotMaps=b,y.numLightProbes=T,i.version=QA++)}function l(c,d){let f=0,u=0,p=0,g=0,x=0;const v=d.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(_.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),u++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function Jg(t){const e=new eb(t),n=[],i=[],r=[];function s(u){f.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function tb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jg(t),e.set(r,[a])):s>=o.length?(a=new Jg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rb=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],sb=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],e1=new Pt,zo=new H,Ld=new H;function ob(t,e,n){let i=new vx;const r=new dt,s=new dt,o=new It,a=new yE,l=new SE,c={},d=n.maxTextureSize,f={[Cr]:Sn,[Sn]:Cr,[Jn]:Jn},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new si(g,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let h=this.type;this.render=function(E,T,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===cM&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Vi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Z=h!==this.type;Z&&T.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(I=>I.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,I=E.length;ne<I;ne++){const W=E[ne],k=W.shadow;if(k===void 0){He("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const U=k.getFrameExtents();r.multiply(U),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/U.x),r.x=s.x*U.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/U.y),r.y=s.y*U.y,k.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||Z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Xo){if(W.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ei(r.x,r.y,{format:os,type:qi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new ho(r.x,r.y,gi),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Yi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt}else W.isPointLight?(k.map=new Tx(r.x),k.map.depthTexture=new pE(r.x,wi)):(k.map=new Ei(r.x,r.y),k.map.depthTexture=new ho(r.x,r.y,wi)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Yi,this.type===ec?(k.map.depthTexture.compareFunction=Y?ip:np,k.map.depthTexture.minFilter=sn,k.map.depthTexture.magFilter=sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt);k.camera.updateProjectionMatrix()}const G=k.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<G;q++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,q),t.clear();else{q===0&&(t.setRenderTarget(k.map),t.clear());const X=k.getViewport(q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),O.viewport(o)}if(W.isPointLight){const X=k.camera,Q=k.matrix,de=W.distance||X.far;de!==X.far&&(X.far=de,X.updateProjectionMatrix()),zo.setFromMatrixPosition(W.matrixWorld),X.position.copy(zo),Ld.copy(X.position),Ld.add(rb[q]),X.up.copy(sb[q]),X.lookAt(Ld),X.updateMatrixWorld(),Q.makeTranslation(-zo.x,-zo.y,-zo.z),e1.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k._frustum.setFromProjectionMatrix(e1,X.coordinateSystem,X.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),M(T,y,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Xo&&m(k,y),k.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(C,L,N)};function m(E,T){const y=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ei(r.x,r.y,{format:os,type:qi})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,y,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,y,p,x,null)}function _(E,T,y,C){let L=null;const N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)L=N;else if(L=y.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=L.uuid,Z=T.uuid;let ne=c[O];ne===void 0&&(ne={},c[O]=ne);let I=ne[Z];I===void 0&&(I=L.clone(),ne[Z]=I,T.addEventListener("dispose",b)),L=I}if(L.visible=T.visible,L.wireframe=T.wireframe,C===Xo?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:f[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=t.properties.get(L);O.light=y}return L}function M(E,T,y,C,L){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Xo)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),ne=E.material;if(Array.isArray(ne)){const I=Z.groups;for(let W=0,k=I.length;W<k;W++){const U=I[W],Y=ne[U.materialIndex];if(Y&&Y.visible){const G=_(E,Y,C,L);E.onBeforeShadow(t,E,T,y,Z,G,U),t.renderBufferDirect(y,null,Z,G,E,U),E.onAfterShadow(t,E,T,y,Z,G,U)}}}else if(ne.visible){const I=_(E,ne,C,L);E.onBeforeShadow(t,E,T,y,Z,I,null),t.renderBufferDirect(y,null,Z,I,E,null),E.onAfterShadow(t,E,T,y,Z,I,null)}}const O=E.children;for(let Z=0,ne=O.length;Z<ne;Z++)M(O[Z],T,y,C,L)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const C=c[y],L=E.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function ab(t,e){function n(){let P=!1;const ie=new It;let J=null;const he=new It(0,0,0,0);return{setMask:function(ue){J!==ue&&!P&&(t.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){P=ue},setClear:function(ue,se,Pe,Xe,je){je===!0&&(ue*=Xe,se*=Xe,Pe*=Xe),ie.set(ue,se,Pe,Xe),he.equals(ie)===!1&&(t.clearColor(ue,se,Pe,Xe),he.copy(ie))},reset:function(){P=!1,J=null,he.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,J=null,he=null,ue=null;return{setReversed:function(se){if(ie!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ie=se;const Xe=ue;ue=null,this.setClear(Xe)}},getReversed:function(){return ie},setTest:function(se){se?ce(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(se){J!==se&&!P&&(t.depthMask(se),J=se)},setFunc:function(se){if(ie&&(se=VM[se]),he!==se){switch(se){case Jf:t.depthFunc(t.NEVER);break;case e0:t.depthFunc(t.ALWAYS);break;case t0:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case n0:t.depthFunc(t.EQUAL);break;case i0:t.depthFunc(t.GEQUAL);break;case r0:t.depthFunc(t.GREATER);break;case s0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=se}},setLocked:function(se){P=se},setClear:function(se){ue!==se&&(ue=se,ie&&(se=1-se),t.clearDepth(se))},reset:function(){P=!1,J=null,he=null,ue=null,ie=!1}}}function r(){let P=!1,ie=null,J=null,he=null,ue=null,se=null,Pe=null,Xe=null,je=null;return{setTest:function(Ue){P||(Ue?ce(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(Ue){ie!==Ue&&!P&&(t.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,ht,ai){(J!==Ue||he!==ht||ue!==ai)&&(t.stencilFunc(Ue,ht,ai),J=Ue,he=ht,ue=ai)},setOp:function(Ue,ht,ai){(se!==Ue||Pe!==ht||Xe!==ai)&&(t.stencilOp(Ue,ht,ai),se=Ue,Pe=ht,Xe=ai)},setLocked:function(Ue){P=Ue},setClear:function(Ue){je!==Ue&&(t.clearStencil(Ue),je=Ue)},reset:function(){P=!1,ie=null,J=null,he=null,ue=null,se=null,Pe=null,Xe=null,je=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},p=new WeakMap,g=[],x=null,v=!1,h=null,m=null,_=null,M=null,b=null,E=null,T=null,y=new at(0,0,0),C=0,L=!1,N=null,O=null,Z=null,ne=null,I=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=U>=2);let G=null,q={};const X=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),de=new It().fromArray(X),ye=new It().fromArray(Q);function V(P,ie,J,he){const ue=new Uint8Array(4),se=t.createTexture();t.bindTexture(P,se),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<J;Pe++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ie+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return se}const ae={};ae[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(uo),st(!1),Qe(Zm),ce(t.CULL_FACE),be(Vi);function ce(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function B(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function ke(P,ie){return u[P]!==ie?(t.bindFramebuffer(P,ie),u[P]=ie,P===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ve(P,ie){let J=g,he=!1;if(P){J=p.get(ie),J===void 0&&(J=[],p.set(ie,J));const ue=P.textures;if(J.length!==ue.length||J[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=ue.length;se<Pe;se++)J[se]=t.COLOR_ATTACHMENT0+se;J.length=ue.length,he=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,he=!0);he&&t.drawBuffers(J)}function Ie(P){return x!==P?(t.useProgram(P),x=P,!0):!1}const Ce={[Gr]:t.FUNC_ADD,[dM]:t.FUNC_SUBTRACT,[fM]:t.FUNC_REVERSE_SUBTRACT};Ce[hM]=t.MIN,Ce[pM]=t.MAX;const ee={[mM]:t.ZERO,[gM]:t.ONE,[vM]:t.SRC_COLOR,[Zf]:t.SRC_ALPHA,[EM]:t.SRC_ALPHA_SATURATE,[SM]:t.DST_COLOR,[xM]:t.DST_ALPHA,[_M]:t.ONE_MINUS_SRC_COLOR,[Qf]:t.ONE_MINUS_SRC_ALPHA,[MM]:t.ONE_MINUS_DST_COLOR,[yM]:t.ONE_MINUS_DST_ALPHA,[wM]:t.CONSTANT_COLOR,[TM]:t.ONE_MINUS_CONSTANT_COLOR,[AM]:t.CONSTANT_ALPHA,[bM]:t.ONE_MINUS_CONSTANT_ALPHA};function be(P,ie,J,he,ue,se,Pe,Xe,je,Ue){if(P===Vi){v===!0&&(B(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),P!==uM){if(P!==h||Ue!==L){if((m!==Gr||b!==Gr)&&(t.blendEquation(t.FUNC_ADD),m=Gr,b=Gr),Ue)switch(P){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFunc(t.ONE,t.ONE);break;case Qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",P);break}else switch(P){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qm:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jm:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",P);break}_=null,M=null,E=null,T=null,y.set(0,0,0),C=0,h=P,L=Ue}return}ue=ue||ie,se=se||J,Pe=Pe||he,(ie!==m||ue!==b)&&(t.blendEquationSeparate(Ce[ie],Ce[ue]),m=ie,b=ue),(J!==_||he!==M||se!==E||Pe!==T)&&(t.blendFuncSeparate(ee[J],ee[he],ee[se],ee[Pe]),_=J,M=he,E=se,T=Pe),(Xe.equals(y)===!1||je!==C)&&(t.blendColor(Xe.r,Xe.g,Xe.b,je),y.copy(Xe),C=je),h=P,L=!1}function ze(P,ie){P.side===Jn?B(t.CULL_FACE):ce(t.CULL_FACE);let J=P.side===Sn;ie&&(J=!J),st(J),P.blending===Js&&P.transparent===!1?be(Vi):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;a.setTest(he),he&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function st(P){N!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),N=P)}function Qe(P){P!==aM?(ce(t.CULL_FACE),P!==O&&(P===Zm?t.cullFace(t.BACK):P===lM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),O=P}function Et(P){P!==Z&&(k&&t.lineWidth(P),Z=P)}function D(P,ie,J){P?(ce(t.POLYGON_OFFSET_FILL),(ne!==ie||I!==J)&&(ne=ie,I=J,o.getReversed()&&(ie=-ie),t.polygonOffset(ie,J))):B(t.POLYGON_OFFSET_FILL)}function yt(P){P?ce(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function Ze(P){P===void 0&&(P=t.TEXTURE0+W-1),G!==P&&(t.activeTexture(P),G=P)}function ot(P,ie,J){J===void 0&&(G===null?J=t.TEXTURE0+W-1:J=G);let he=q[J];he===void 0&&(he={type:void 0,texture:void 0},q[J]=he),(he.type!==P||he.texture!==ie)&&(G!==J&&(t.activeTexture(J),G=J),t.bindTexture(P,ie||ae[P]),he.type=P,he.texture=ie)}function Me(){const P=q[G];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function St(){try{t.compressedTexImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function S(){try{t.texSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function z(){try{t.texSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function le(){try{t.compressedTexSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function pe(){try{t.texStorage2D(...arguments)}catch(P){it("WebGLState:",P)}}function ve(){try{t.texStorage3D(...arguments)}catch(P){it("WebGLState:",P)}}function te(){try{t.texImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function oe(){try{t.texImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function we(P){return f[P]!==void 0?f[P]:t.getParameter(P)}function Re(P,ie){f[P]!==ie&&(t.pixelStorei(P,ie),f[P]=ie)}function _e(P){de.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function me(P){ye.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function We(P,ie){let J=c.get(ie);J===void 0&&(J=new WeakMap,c.set(ie,J));let he=J.get(P);he===void 0&&(he=t.getUniformBlockIndex(ie,P.name),J.set(P,he))}function xe(P,ie){const he=c.get(ie).get(P);l.get(ie)!==he&&(t.uniformBlockBinding(ie,he,P.__bindingPointIndex),l.set(ie,he))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},G=null,q={},u={},p=new WeakMap,g=[],x=null,v=!1,h=null,m=null,_=null,M=null,b=null,E=null,T=null,y=new at(0,0,0),C=0,L=!1,N=null,O=null,Z=null,ne=null,I=null,de.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:B,bindFramebuffer:ke,drawBuffers:Ve,useProgram:Ie,setBlending:be,setMaterial:ze,setFlipSided:st,setCullFace:Qe,setLineWidth:Et,setPolygonOffset:D,setScissorTest:yt,activeTexture:Ze,bindTexture:ot,unbindTexture:Me,compressedTexImage2D:St,compressedTexImage3D:A,texImage2D:te,texImage3D:oe,pixelStorei:Re,getParameter:we,updateUBOMapping:We,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:ve,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:_e,viewport:me,reset:Fe}}function lb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,d=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return g?new OffscreenCanvas(A,S):Hc("canvas")}function v(A,S,z){let re=1;const le=St(A);if((le.width>z||le.height>z)&&(re=z/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const pe=Math.floor(re*le.width),ve=Math.floor(re*le.height);u===void 0&&(u=x(pe,ve));const te=S?x(pe,ve):u;return te.width=pe,te.height=ve,te.getContext("2d").drawImage(A,0,0,pe,ve),He("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+pe+"x"+ve+")."),te}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,z,re,le,pe=!1){if(A!==null){if(t[A]!==void 0)return t[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve;re&&(ve=e.get("EXT_texture_norm16"),ve||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===t.RED&&(z===t.FLOAT&&(te=t.R32F),z===t.HALF_FLOAT&&(te=t.R16F),z===t.UNSIGNED_BYTE&&(te=t.R8),z===t.UNSIGNED_SHORT&&ve&&(te=ve.R16_EXT),z===t.SHORT&&ve&&(te=ve.R16_SNORM_EXT)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.R8UI),z===t.UNSIGNED_SHORT&&(te=t.R16UI),z===t.UNSIGNED_INT&&(te=t.R32UI),z===t.BYTE&&(te=t.R8I),z===t.SHORT&&(te=t.R16I),z===t.INT&&(te=t.R32I)),S===t.RG&&(z===t.FLOAT&&(te=t.RG32F),z===t.HALF_FLOAT&&(te=t.RG16F),z===t.UNSIGNED_BYTE&&(te=t.RG8),z===t.UNSIGNED_SHORT&&ve&&(te=ve.RG16_EXT),z===t.SHORT&&ve&&(te=ve.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RG8UI),z===t.UNSIGNED_SHORT&&(te=t.RG16UI),z===t.UNSIGNED_INT&&(te=t.RG32UI),z===t.BYTE&&(te=t.RG8I),z===t.SHORT&&(te=t.RG16I),z===t.INT&&(te=t.RG32I)),S===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RGB8UI),z===t.UNSIGNED_SHORT&&(te=t.RGB16UI),z===t.UNSIGNED_INT&&(te=t.RGB32UI),z===t.BYTE&&(te=t.RGB8I),z===t.SHORT&&(te=t.RGB16I),z===t.INT&&(te=t.RGB32I)),S===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),z===t.UNSIGNED_INT&&(te=t.RGBA32UI),z===t.BYTE&&(te=t.RGBA8I),z===t.SHORT&&(te=t.RGBA16I),z===t.INT&&(te=t.RGBA32I)),S===t.RGB&&(z===t.UNSIGNED_SHORT&&ve&&(te=ve.RGB16_EXT),z===t.SHORT&&ve&&(te=ve.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),S===t.RGBA){const oe=pe?Gc:et.getTransfer(le);z===t.FLOAT&&(te=t.RGBA32F),z===t.HALF_FLOAT&&(te=t.RGBA16F),z===t.UNSIGNED_BYTE&&(te=oe===lt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ve&&(te=ve.RGBA16_EXT),z===t.SHORT&&ve&&(te=ve.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(A,S){let z;return A?S===null||S===wi||S===Ca?z=t.DEPTH24_STENCIL8:S===gi?z=t.DEPTH32F_STENCIL8:S===ba&&(z=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===Ca?z=t.DEPTH_COMPONENT24:S===gi?z=t.DEPTH_COMPONENT32F:S===ba&&(z=t.DEPTH_COMPONENT16),z}function E(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&f.delete(S)}function y(A){const S=A.target;S.removeEventListener("dispose",y),N(S)}function C(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,re=p.get(z);if(re){const le=re[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(A),Object.keys(re).length===0&&p.delete(z)}i.remove(A)}function L(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const z=A.source,re=p.get(z);delete re[S.__cacheKey],o.memory.textures--}function N(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let le=0;le<S.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(S.__webglFramebuffer[re][le]);else t.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)t.deleteFramebuffer(S.__webglFramebuffer[re]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let re=0,le=z.length;re<le;re++){const pe=i.get(z[re]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(z[re])}i.remove(A)}let O=0;function Z(){O=0}function ne(){return O}function I(A){O=A}function W(){const A=O;return A>=r.maxTextures&&He("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function k(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const z=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const re=A.image;if(re===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{B(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function Y(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){B(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function G(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){B(z,A,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function q(A,S){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){ke(z,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const X={[o0]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[a0]:t.MIRRORED_REPEAT},Q={[qt]:t.NEAREST,[PM]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[ed]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},de={[DM]:t.NEVER,[kM]:t.ALWAYS,[IM]:t.LESS,[np]:t.LEQUAL,[UM]:t.EQUAL,[ip]:t.GEQUAL,[FM]:t.GREATER,[OM]:t.NOTEQUAL};function ye(A,S){if(S.type===gi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===ed||S.magFilter===dl||S.magFilter===$r||S.minFilter===sn||S.minFilter===ed||S.minFilter===dl||S.minFilter===$r)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,X[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,X[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,X[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Q[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==dl&&S.minFilter!==$r||S.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function V(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const re=S.source;let le=p.get(re);le===void 0&&(le={},p.set(re,le));const pe=k(S);if(pe!==A.__cacheKey){le[pe]===void 0&&(le[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),le[pe].usedTimes++;const ve=le[A.__cacheKey];ve!==void 0&&(le[A.__cacheKey].usedTimes--,ve.usedTimes===0&&L(S)),A.__cacheKey=pe,A.__webglTexture=le[pe].texture}return z}function ae(A,S,z){return Math.floor(Math.floor(A/z)/S)}function ce(A,S,z,re){const pe=A.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,z,re,S.data);else{pe.sort((Re,_e)=>Re.start-_e.start);let ve=0;for(let Re=1;Re<pe.length;Re++){const _e=pe[ve],me=pe[Re],We=_e.start+_e.count,xe=ae(me.start,S.width,4),Fe=ae(_e.start,S.width,4);me.start<=We+1&&xe===Fe&&ae(me.start+me.count-1,S.width,4)===xe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++ve,pe[ve]=me)}pe.length=ve+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),oe=n.getParameter(t.UNPACK_SKIP_PIXELS),we=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Re=0,_e=pe.length;Re<_e;Re++){const me=pe[Re],We=Math.floor(me.start/4),xe=Math.ceil(me.count/4),Fe=We%S.width,P=Math.floor(We/S.width),ie=xe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Fe,P,ie,J,z,re,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,we)}}function B(A,S,z){let re=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=t.TEXTURE_3D);const le=V(A,S),pe=S.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+z);const ve=i.get(pe);if(pe.version!==ve.__version||le===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=et.getPrimaries(et.workingColorSpace),he=S.colorSpace===fr?null:et.getPrimaries(S.colorSpace),ue=S.colorSpace===fr||J===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=v(S.image,!1,r.maxTextureSize);oe=Me(S,oe);const we=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let _e=M(S.internalFormat,we,Re,S.normalized,S.colorSpace,S.isVideoTexture);ye(re,S);let me;const We=S.mipmaps,xe=S.isVideoTexture!==!0,Fe=ve.__version===void 0||le===!0,P=pe.dataReady,ie=E(S,oe);if(S.isDepthTexture)_e=b(S.format===qr,S.type),Fe&&(xe?n.texStorage2D(t.TEXTURE_2D,1,_e,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,_e,oe.width,oe.height,0,we,Re,null));else if(S.isDataTexture)if(We.length>0){xe&&Fe&&n.texStorage2D(t.TEXTURE_2D,ie,_e,We[0].width,We[0].height);for(let J=0,he=We.length;J<he;J++)me=We[J],xe?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,me.width,me.height,we,Re,me.data):n.texImage2D(t.TEXTURE_2D,J,_e,me.width,me.height,0,we,Re,me.data);S.generateMipmaps=!1}else xe?(Fe&&n.texStorage2D(t.TEXTURE_2D,ie,_e,oe.width,oe.height),P&&ce(S,oe,we,Re)):n.texImage2D(t.TEXTURE_2D,0,_e,oe.width,oe.height,0,we,Re,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,_e,We[0].width,We[0].height,oe.depth);for(let J=0,he=We.length;J<he;J++)if(me=We[J],S.format!==ti)if(we!==null)if(xe){if(P)if(S.layerUpdates.size>0){const ue=Ng(me.width,me.height,S.format,S.type);for(const se of S.layerUpdates){const Pe=me.data.subarray(se*ue/me.data.BYTES_PER_ELEMENT,(se+1)*ue/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,se,me.width,me.height,1,we,Pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,oe.depth,we,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,_e,me.width,me.height,oe.depth,0,me.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,oe.depth,we,Re,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,_e,me.width,me.height,oe.depth,0,we,Re,me.data)}else{xe&&Fe&&n.texStorage2D(t.TEXTURE_2D,ie,_e,We[0].width,We[0].height);for(let J=0,he=We.length;J<he;J++)me=We[J],S.format!==ti?we!==null?xe?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,me.width,me.height,we,me.data):n.compressedTexImage2D(t.TEXTURE_2D,J,_e,me.width,me.height,0,me.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,me.width,me.height,we,Re,me.data):n.texImage2D(t.TEXTURE_2D,J,_e,me.width,me.height,0,we,Re,me.data)}else if(S.isDataArrayTexture)if(xe){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,_e,oe.width,oe.height,oe.depth),P)if(S.layerUpdates.size>0){const J=Ng(oe.width,oe.height,S.format,S.type);for(const he of S.layerUpdates){const ue=oe.data.subarray(he*J/oe.data.BYTES_PER_ELEMENT,(he+1)*J/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,oe.width,oe.height,1,we,Re,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,Re,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,oe.width,oe.height,oe.depth,0,we,Re,oe.data);else if(S.isData3DTexture)xe?(Fe&&n.texStorage3D(t.TEXTURE_3D,ie,_e,oe.width,oe.height,oe.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,Re,oe.data)):n.texImage3D(t.TEXTURE_3D,0,_e,oe.width,oe.height,oe.depth,0,we,Re,oe.data);else if(S.isFramebufferTexture){if(Fe)if(xe)n.texStorage2D(t.TEXTURE_2D,ie,_e,oe.width,oe.height);else{let J=oe.width,he=oe.height;for(let ue=0;ue<ie;ue++)n.texImage2D(t.TEXTURE_2D,ue,_e,J,he,0,we,Re,null),J>>=1,he>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),oe.parentNode!==J){J.appendChild(oe),f.add(S),J.onpaint=Xe=>{const je=Xe.changedElements;for(const Ue of f)je.includes(Ue.image)&&(Ue.needsUpdate=!0)},J.requestPaint();return}const he=0,ue=t.RGBA,se=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,he,ue,se,Pe,oe),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(We.length>0){if(xe&&Fe){const J=St(We[0]);n.texStorage2D(t.TEXTURE_2D,ie,_e,J.width,J.height)}for(let J=0,he=We.length;J<he;J++)me=We[J],xe?P&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,we,Re,me):n.texImage2D(t.TEXTURE_2D,J,_e,we,Re,me);S.generateMipmaps=!1}else if(xe){if(Fe){const J=St(oe);n.texStorage2D(t.TEXTURE_2D,ie,_e,J.width,J.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,Re,oe)}else n.texImage2D(t.TEXTURE_2D,0,_e,we,Re,oe);h(S)&&m(re),ve.__version=pe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ke(A,S,z){if(S.image.length!==6)return;const re=V(A,S),le=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const pe=i.get(le);if(le.version!==pe.__version||re===!0){n.activeTexture(t.TEXTURE0+z);const ve=et.getPrimaries(et.workingColorSpace),te=S.colorSpace===fr?null:et.getPrimaries(S.colorSpace),oe=S.colorSpace===fr||ve===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,Re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!we&&!Re?_e[se]=v(S.image[se],!0,r.maxCubemapSize):_e[se]=Re?S.image[se].image:S.image[se],_e[se]=Me(S,_e[se]);const me=_e[0],We=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Fe=M(S.internalFormat,We,xe,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,ie=pe.__version===void 0||re===!0,J=le.dataReady;let he=E(S,me);ye(t.TEXTURE_CUBE_MAP,S);let ue;if(we){P&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,me.width,me.height);for(let se=0;se<6;se++){ue=_e[se].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Xe=ue[Pe];S.format!==ti?We!==null?P?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,We,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Fe,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,We,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Fe,Xe.width,Xe.height,0,We,xe,Xe.data)}}}else{if(ue=S.mipmaps,P&&ie){ue.length>0&&he++;const se=St(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(Re){P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,We,xe,_e[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,_e[se].width,_e[se].height,0,We,xe,_e[se].data);for(let Pe=0;Pe<ue.length;Pe++){const je=ue[Pe].image[se].image;P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,je.width,je.height,We,xe,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Fe,je.width,je.height,0,We,xe,je.data)}}else{P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,We,xe,_e[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,We,xe,_e[se]);for(let Pe=0;Pe<ue.length;Pe++){const Xe=ue[Pe];P?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,We,xe,Xe.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Fe,We,xe,Xe.image[se])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),pe.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ve(A,S,z,re,le,pe){const ve=s.convert(z.format,z.colorSpace),te=s.convert(z.type),oe=M(z.internalFormat,ve,te,z.normalized,z.colorSpace),we=i.get(S),Re=i.get(z);if(Re.__renderTarget=S,!we.__hasExternalTextures){const _e=Math.max(1,S.width>>pe),me=Math.max(1,S.height>>pe);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,pe,oe,_e,me,S.depth,0,ve,te,null):n.texImage2D(le,pe,oe,_e,me,0,ve,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,le,Re.__webglTexture,0,yt(S)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,le,Re.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(A,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const re=S.depthTexture,le=re&&re.isDepthTexture?re.type:null,pe=b(S.stencilBuffer,le),ve=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),pe,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,pe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,A)}else{const re=S.textures;for(let le=0;le<re.length;le++){const pe=re[le],ve=s.convert(pe.format,pe.colorSpace),te=s.convert(pe.type),oe=M(pe.internalFormat,ve,te,pe.normalized,pe.colorSpace);Ze(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),oe,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(A,S,z){const re=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(S.depthTexture);if(le.__renderTarget=S,(!le.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(le.__webglInit===void 0&&(le.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),le.__webglTexture===void 0){le.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ye(t.TEXTURE_CUBE_MAP,S.depthTexture);const we=s.convert(S.depthTexture.format),Re=s.convert(S.depthTexture.type);let _e;S.depthTexture.format===Yi?_e=t.DEPTH_COMPONENT24:S.depthTexture.format===qr&&(_e=t.DEPTH24_STENCIL8);for(let me=0;me<6;me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,S.width,S.height,0,we,Re,null)}}else U(S.depthTexture,0);const pe=le.__webglTexture,ve=yt(S),te=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,oe=S.depthTexture.format===qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Yi)Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,te,pe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,oe,te,pe,0);else if(S.depthTexture.format===qr)Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,te,pe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,oe,te,pe,0);else throw new Error("Unknown depthTexture format")}function ee(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=re}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let re=0;re<6;re++)Ce(S.__webglFramebuffer[re],A,re);else{const re=A.texture.mipmaps;re&&re.length>0?Ce(S.__webglFramebuffer[0],A,0):Ce(S.__webglFramebuffer,A,0)}else if(z){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=t.createRenderbuffer(),Ie(S.__webglDepthbuffer[re],A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,pe)}}else{const re=A.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ie(S.__webglDepthbuffer,A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,S,z){const re=i.get(A);S!==void 0&&Ve(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ee(A)}function ze(A){const S=A.texture,z=i.get(A),re=i.get(S);A.addEventListener("dispose",y);const le=A.textures,pe=A.isWebGLCubeRenderTarget===!0,ve=le.length>1;if(ve||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=S.version,o.memory.textures++),pe){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let oe=0;oe<S.mipmaps.length;oe++)z.__webglFramebuffer[te][oe]=t.createFramebuffer()}else z.__webglFramebuffer[te]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)z.__webglFramebuffer[te]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ve)for(let te=0,oe=le.length;te<oe;te++){const we=i.get(le[te]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ze(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<le.length;te++){const oe=le[te];z.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[te]);const we=s.convert(oe.format,oe.colorSpace),Re=s.convert(oe.type),_e=M(oe.internalFormat,we,Re,oe.normalized,oe.colorSpace,A.isXRRenderTarget===!0),me=yt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,_e,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,z.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ye(t.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Ve(z.__webglFramebuffer[te][oe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe);else Ve(z.__webglFramebuffer[te],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let te=0,oe=le.length;te<oe;te++){const we=le[te],Re=i.get(we);let _e=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Re.__webglTexture),ye(_e,we),Ve(z.__webglFramebuffer,A,we,t.COLOR_ATTACHMENT0+te,_e,0),h(we)&&m(_e)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,re.__webglTexture),ye(te,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Ve(z.__webglFramebuffer[oe],A,S,t.COLOR_ATTACHMENT0,te,oe);else Ve(z.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,te,0);h(S)&&m(te),n.unbindTexture()}A.depthBuffer&&ee(A)}function st(A){const S=A.textures;for(let z=0,re=S.length;z<re;z++){const le=S[z];if(h(le)){const pe=_(A),ve=i.get(le).__webglTexture;n.bindTexture(pe,ve),m(pe),n.unbindTexture()}}}const Qe=[],Et=[];function D(A){if(A.samples>0){if(Ze(A)===!1){const S=A.textures,z=A.width,re=A.height;let le=t.COLOR_BUFFER_BIT;const pe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),te=S.length>1;if(te)for(let we=0;we<S.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const oe=A.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let we=0;we<S.length;we++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);const Re=i.get(S[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,z,re,0,0,z,re,le,t.NEAREST),l===!0&&(Qe.length=0,Et.length=0,Qe.push(t.COLOR_ATTACHMENT0+we),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Qe.push(pe),Et.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let we=0;we<S.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);const Re=i.get(S[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function yt(A){return Math.min(r.maxSamples,A.samples)}function Ze(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){const S=o.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Me(A,S){const z=A.colorSpace,re=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Bc&&z!==fr&&(et.getTransfer(z)===lt?(re!==ti||le!==zn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),S}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.getTextureUnits=ne,this.setTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cb(t,e){function n(i,r=fr){let s;const o=et.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===Zh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rx)return t.BYTE;if(i===sx)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===Kh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===lx)return t.ALPHA;if(i===cx)return t.RGB;if(i===ti)return t.RGBA;if(i===Yi)return t.DEPTH_COMPONENT;if(i===qr)return t.DEPTH_STENCIL;if(i===ux)return t.RED;if(i===Jh)return t.RED_INTEGER;if(i===os)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===l0||i===c0||i===u0||i===d0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===l0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===c0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===u0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===d0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===f0||i===h0||i===p0||i===m0||i===g0||i===kc||i===v0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===f0||i===h0)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===p0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===m0)return s.COMPRESSED_R11_EAC;if(i===g0)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return s.COMPRESSED_RG11_EAC;if(i===v0)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_0||i===x0||i===y0||i===S0||i===M0||i===E0||i===w0||i===T0||i===A0||i===b0||i===C0||i===R0||i===P0||i===N0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===x0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===y0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===S0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===M0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===E0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===w0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===T0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===A0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===b0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===C0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===R0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===P0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===N0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===L0||i===D0||i===I0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===L0)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===D0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===I0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U0||i===F0||i===zc||i===O0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===U0)return s.COMPRESSED_RED_RGTC1_EXT;if(i===F0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===O0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:ub,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hb extends us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",v=new fb,h={},m=n.getContextAttributes();let _=null,M=null;const b=[],E=[],T=new dt;let y=null;const C=new kn;C.viewport=new It;const L=new kn;L.viewport=new It;const N=[C,L],O=new EE;let Z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ae=b[V];return ae===void 0&&(ae=new ld,b[V]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(V){let ae=b[V];return ae===void 0&&(ae=new ld,b[V]=ae),ae.getGripSpace()},this.getHand=function(V){let ae=b[V];return ae===void 0&&(ae=new ld,b[V]=ae),ae.getHandSpace()};function I(V){const ae=E.indexOf(V.inputSource);if(ae===-1)return;const ce=b[ae];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let V=0;V<b.length;V++){const ae=E[V];ae!==null&&(E[V]=null,b[V].disconnect(ae))}Z=null,ne=null,v.reset();for(const V in h)delete h[V];e.setRenderTarget(_),p=null,u=null,f=null,r=null,M=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,B=null,ke=null;m.depth&&(ke=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?qr:Yi,B=m.stencil?Ca:wi);const Ve={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ei(u.textureWidth,u.textureHeight,{format:ti,type:zn,depthTexture:new ho(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ti,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(V){for(let ae=0;ae<V.removed.length;ae++){const ce=V.removed[ae],B=E.indexOf(ce);B>=0&&(E[B]=null,b[B].disconnect(ce))}for(let ae=0;ae<V.added.length;ae++){const ce=V.added[ae];let B=E.indexOf(ce);if(B===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=E.length){E.push(ce),B=Ve;break}else if(E[Ve]===null){E[Ve]=ce,B=Ve;break}if(B===-1)break}const ke=b[B];ke&&ke.connect(ce)}}const U=new H,Y=new H;function G(V,ae,ce){U.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const B=U.distanceTo(Y),ke=ae.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,Ie=ke[14]/(ke[10]-1),Ce=ke[14]/(ke[10]+1),ee=(ke[9]+1)/ke[5],be=(ke[9]-1)/ke[5],ze=(ke[8]-1)/ke[0],st=(Ve[8]+1)/Ve[0],Qe=Ie*ze,Et=Ie*st,D=B/(-ze+st),yt=D*-ze;if(ae.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(yt),V.translateZ(D),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ke[10]===-1)V.projectionMatrix.copy(ae.projectionMatrix),V.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ze=Ie+D,ot=Ce+D,Me=Qe-yt,St=Et+(B-yt),A=ee*Ce/ot*Ze,S=be*Ce/ot*Ze;V.projectionMatrix.makePerspective(Me,St,A,S,Ze,ot),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function q(V,ae){ae===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ae.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ae=V.near,ce=V.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),O.near=L.near=C.near=ae,O.far=L.far=C.far=ce,(Z!==O.near||ne!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,ne=O.far),O.layers.mask=V.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const B=V.parent,ke=O.cameras;q(O,B);for(let Ve=0;Ve<ke.length;Ve++)q(ke[Ve],B);ke.length===2?G(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),X(V,O,B)};function X(V,ae,ce){ce===null?V.matrix.copy(ae.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(ae.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ae.projectionMatrix),V.projectionMatrixInverse.copy(ae.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=z0*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(V){return h[V]};let Q=null;function de(V,ae){if(d=ae.getViewerPose(c||o),g=ae,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let B=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,B=!0);for(let Ce=0;Ce<ce.length;Ce++){const ee=ce[Ce];let be=null;if(p!==null)be=p.getViewport(ee);else{const st=f.getViewSubImage(u,ee);be=st.viewport,Ce===0&&(e.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(M))}let ze=N[Ce];ze===void 0&&(ze=new kn,ze.layers.enable(Ce),ze.viewport=new It,N[Ce]=ze),ze.matrix.fromArray(ee.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ee.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(be.x,be.y,be.width,be.height),Ce===0&&(O.matrix.copy(ze.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),B===!0&&O.cameras.push(ze)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ce=f.getDepthInformation(ce[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(Ce,r.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ce=0;Ce<ce.length;Ce++){const ee=ce[Ce].camera;if(ee){let be=h[ee];be||(be=new xx,h[ee]=be);const ze=f.getCameraImage(ee);be.sourceTexture=ze}}}}for(let ce=0;ce<b.length;ce++){const B=E[ce],ke=b[ce];B!==null&&ke!==void 0&&ke.update(B,ae,c||o)}Q&&Q(V,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ye=new Ex;ye.setAnimationLoop(de),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const pb=new Pt,Px=new $e;Px.set(-1,0,0,0,1,0,0,0,1);function mb(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,yx(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,m,_,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),d(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),u(v,h),h.isMeshPhysicalMaterial&&p(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),g(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),x(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,m,_):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Sn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Sn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,M=m.envMapRotation;_&&(v.envMap.value=_,v.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Px),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,_){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=_*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function u(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,h){h.matcap&&(v.matcap.value=h.matcap)}function x(v,h){const m=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(g(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",v));const b=_.program;i.updateUBOMapping(m,b);const E=e.render.frame;s[m.id]!==E&&(u(m),s[m.id]=E)}function d(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),b=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const y=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,L=y.length;C<L;C++){const N=y[C];if(p(N,E,C,b)===!0){const O=N.__offset,Z=Array.isArray(N.value)?N.value:[N.value];let ne=0;for(let I=0;I<Z.length;I++){const W=Z[I],k=x(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+ne,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):ArrayBuffer.isView(W)?N.__data.set(new W.constructor(W.buffer,W.byteOffset,N.__data.length)):(W.toArray(N.__data,ne),ne+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,b){const E=m.value,T=_+"_"+M;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:ArrayBuffer.isView(E)?b[T]=E.slice():b[T]=E.clone(),!0;{const y=b[T];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return b[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function g(m){const _=m.uniforms;let M=0;const b=16;for(let T=0,y=_.length;T<y;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let L=0,N=C.length;L<N;L++){const O=C[L],Z=Array.isArray(O.value)?O.value:[O.value];for(let ne=0,I=Z.length;ne<I;ne++){const W=Z[ne],k=x(W),U=M%b,Y=U%k.boundary,G=U+Y;M+=Y,G!==0&&b-G<k.storage&&(M+=b-G),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=k.storage}}}const E=M%b;return E>0&&(M+=b-E),m.__size=M,m.__cache={},this}function x(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):He("WebGLRenderer: Unsupported uniform value type.",m),_}function v(m){const _=m.target;_.removeEventListener("dispose",v);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function _b(){return fi===null&&(fi=new cE(vb,16,16,os,qi),fi.name="DFG_LUT",fi.minFilter=sn,fi.magFilter=sn,fi.wrapS=Bi,fi.wrapT=Bi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class xb{constructor(e={}){const{canvas:n=BM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,v=new Set([tp,ep,Jh]),h=new Set([zn,wi,ba,Ca,Zh,Qh]),m=new Uint32Array(4),_=new Int32Array(4),M=new H;let b=null,E=null;const T=[],y=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,O=null;this._outputColorSpace=Un;let Z=0,ne=0,I=null,W=-1,k=null;const U=new It,Y=new It;let G=null;const q=new at(0);let X=0,Q=n.width,de=n.height,ye=1,V=null,ae=null;const ce=new It(0,0,Q,de),B=new It(0,0,Q,de);let ke=!1;const Ve=new vx;let Ie=!1,Ce=!1;const ee=new Pt,be=new H,ze=new It,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Et(){return I===null?ye:1}let D=i;function yt(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),D===null){const F="webgl2";if(D=yt(F,w),D===null)throw yt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw it("WebGLRenderer: "+w.message),w}let Ze,ot,Me,St,A,S,z,re,le,pe,ve,te,oe,we,Re,_e,me,We,xe,Fe,P,ie,J;function he(){Ze=new _T(D),Ze.init(),P=new cb(D,Ze),ot=new uT(D,Ze,e,P),Me=new ab(D,Ze),ot.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),St=new ST(D),A=new $A,S=new lb(D,Ze,Me,A,ot,P,St),z=new vT(L),re=new TE(D),ie=new lT(D,re),le=new xT(D,re,St,ie),pe=new ET(D,le,re,ie,St),We=new MT(D,ot,S),Re=new dT(A),ve=new XA(L,z,Ze,ot,ie,Re),te=new mb(L,A),oe=new YA,we=new tb(Ze),me=new aT(L,z,Me,pe,g,l),_e=new ob(L,pe,ot),J=new gb(D,St,ot,Me),xe=new cT(D,Ze,St),Fe=new yT(D,Ze,St),St.programs=ve.programs,L.capabilities=ot,L.extensions=Ze,L.properties=A,L.renderLists=oe,L.shadowMap=_e,L.state=Me,L.info=St}he(),x!==zn&&(C=new TT(x,n.width,n.height,r,s));const ue=new hb(L,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(w){w!==void 0&&(ye=w,this.setSize(Q,de,!1))},this.getSize=function(w){return w.set(Q,de)},this.setSize=function(w,F,K=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,de=F,n.width=Math.floor(w*ye),n.height=Math.floor(F*ye),K===!0&&(n.style.width=w+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Q*ye,de*ye).floor()},this.setDrawingBufferSize=function(w,F,K){Q=w,de=F,ye=K,n.width=Math.floor(w*K),n.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===zn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,F,K,j){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,F,K,j),Me.viewport(U.copy(ce).multiplyScalar(ye).round())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,F,K,j){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,F,K,j),Me.scissor(Y.copy(B).multiplyScalar(ye).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){Me.setScissorTest(ke=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,K=!0){let j=0;if(w){let $=!1;if(I!==null){const Ae=I.texture.format;$=v.has(Ae)}if($){const Ae=I.texture.type,Le=h.has(Ae),Te=me.getClearColor(),Oe=me.getClearAlpha(),Be=Te.r,qe=Te.g,Ke=Te.b;Le?(m[0]=Be,m[1]=qe,m[2]=Ke,m[3]=Oe,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Be,_[1]=qe,_[2]=Ke,_[3]=Oe,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}F&&(j|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),me.dispose(),oe.dispose(),we.dispose(),A.dispose(),z.dispose(),pe.dispose(),ie.dispose(),J.dispose(),ve.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",vp),ue.removeEventListener("sessionend",_p),Dr.stop()};function se(w){w.preventDefault(),sg("WebGLRenderer: Context Lost."),N=!0}function Pe(){sg("WebGLRenderer: Context Restored."),N=!1;const w=St.autoReset,F=_e.enabled,K=_e.autoUpdate,j=_e.needsUpdate,$=_e.type;he(),St.autoReset=w,_e.enabled=F,_e.autoUpdate=K,_e.needsUpdate=j,_e.type=$}function Xe(w){it("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){const F=w.target;F.removeEventListener("dispose",je),Ue(F)}function Ue(w){ht(w),A.remove(w)}function ht(w){const F=A.get(w).programs;F!==void 0&&(F.forEach(function(K){ve.releaseProgram(K)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,j,$,Ae){F===null&&(F=st);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Te=Yx(w,F,K,j,$);Me.setMaterial(j,Le);let Oe=K.index,Be=1;if(j.wireframe===!0){if(Oe=le.getWireframeAttribute(K),Oe===void 0)return;Be=2}const qe=K.drawRange,Ke=K.attributes.position;let Ge=qe.start*Be,ft=(qe.start+qe.count)*Be;Ae!==null&&(Ge=Math.max(Ge,Ae.start*Be),ft=Math.min(ft,(Ae.start+Ae.count)*Be)),Oe!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,Oe.count)):Ke!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,Ke.count));const Nt=ft-Ge;if(Nt<0||Nt===1/0)return;ie.setup($,j,Te,K,Oe);let bt,pt=xe;if(Oe!==null&&(bt=re.get(Oe),pt=Fe,pt.setIndex(bt)),$.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*Et()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if($.isLine){let Zt=j.linewidth;Zt===void 0&&(Zt=1),Me.setLineWidth(Zt*Et()),$.isLineSegments?pt.setMode(D.LINES):$.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else $.isPoints?pt.setMode(D.POINTS):$.isSprite&&pt.setMode(D.TRIANGLES);if($.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Zt=$._multiDrawStarts,Ne=$._multiDrawCounts,wn=$._multiDrawCount,nt=Oe?re.get(Oe).bytesPerElement:1,Dn=A.get(j).currentProgram.getUniforms();for(let li=0;li<wn;li++)Dn.setValue(D,"_gl_DrawID",li),pt.render(Zt[li]/nt,Ne[li])}else if($.isInstancedMesh)pt.renderInstances(Ge,Nt,$.count);else if(K.isInstancedBufferGeometry){const Zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ne=Math.min(K.instanceCount,Zt);pt.renderInstances(Ge,Nt,Ne)}else pt.render(Ge,Nt)};function ai(w,F,K){w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,Ha(w,F,K),w.side=Cr,w.needsUpdate=!0,Ha(w,F,K),w.side=Jn):Ha(w,F,K)}this.compile=function(w,F,K=null){K===null&&(K=w),E=we.get(K),E.init(F),y.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==K&&w.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const j=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Te=Ae[Le];ai(Te,K,$),j.add(Te)}else ai(Ae,K,$),j.add(Ae)}),E=y.pop(),j},this.compileAsync=function(w,F,K=null){const j=this.compile(w,F,K);return new Promise($=>{function Ae(){if(j.forEach(function(Le){A.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){$(w);return}setTimeout(Ae,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Su=null;function $x(w){Su&&Su(w)}function vp(){Dr.stop()}function _p(){Dr.start()}const Dr=new Ex;Dr.setAnimationLoop($x),typeof self<"u"&&Dr.setContext(self),this.setAnimationLoop=function(w){Su=w,ue.setAnimationLoop(w),w===null?Dr.stop():Dr.start()},ue.addEventListener("sessionstart",vp),ue.addEventListener("sessionend",_p),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(w,F);const K=ue.enabled===!0&&ue.isPresenting===!0,j=C!==null&&(I===null||K)&&C.begin(L,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,F,I),E=we.get(w,y.length),E.init(F),E.state.textureUnits=S.getTextureUnits(),y.push(E),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(ee,vi,F.reversedDepth),Ce=this.localClippingEnabled,Ie=Re.init(this.clippingPlanes,Ce),b=oe.get(w,T.length),b.init(),T.push(b),ue.enabled===!0&&ue.isPresenting===!0){const Le=L.xr.getDepthSensingMesh();Le!==null&&Mu(Le,F,-1/0,L.sortObjects)}Mu(w,F,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(V,ae),Qe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Qe&&me.addToRenderList(b,w),this.info.render.frame++,Ie===!0&&Re.beginShadows();const $=E.state.shadowsArray;if(_e.render($,w,F),Ie===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&C.hasRenderPass())===!1){const Le=b.opaque,Te=b.transmissive;if(E.setupLights(),F.isArrayCamera){const Oe=F.cameras;if(Te.length>0)for(let Be=0,qe=Oe.length;Be<qe;Be++){const Ke=Oe[Be];yp(Le,Te,w,Ke)}Qe&&me.render(w);for(let Be=0,qe=Oe.length;Be<qe;Be++){const Ke=Oe[Be];xp(b,w,Ke,Ke.viewport)}}else Te.length>0&&yp(Le,Te,w,F),Qe&&me.render(w),xp(b,w,F)}I!==null&&ne===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),j&&C.end(L),w.isScene===!0&&w.onAfterRender(L,w,F),ie.resetDefaultState(),W=-1,k=null,y.pop(),y.length>0?(E=y[y.length-1],S.setTextureUnits(E.state.textureUnits),Ie===!0&&Re.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,O!==null&&O.renderEnd()};function Mu(w,F,K,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){j&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const Le=pe.update(w),Te=w.material;Te.visible&&b.push(w,Le,Te,K,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const Le=pe.update(w),Te=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ze.copy(Le.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Te)){const Oe=Le.groups;for(let Be=0,qe=Oe.length;Be<qe;Be++){const Ke=Oe[Be],Ge=Te[Ke.materialIndex];Ge&&Ge.visible&&b.push(w,Le,Ge,K,ze.z,Ke)}}else Te.visible&&b.push(w,Le,Te,K,ze.z,null)}}const Ae=w.children;for(let Le=0,Te=Ae.length;Le<Te;Le++)Mu(Ae[Le],F,K,j)}function xp(w,F,K,j){const{opaque:$,transmissive:Ae,transparent:Le}=w;E.setupLightsView(K),Ie===!0&&Re.setGlobalState(L.clippingPlanes,K),j&&Me.viewport(U.copy(j)),$.length>0&&Va($,F,K),Ae.length>0&&Va(Ae,F,K),Le.length>0&&Va(Le,F,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function yp(w,F,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){const Ge=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new Ei(1,1,{generateMipmaps:!0,type:Ge?qi:zn,minFilter:$r,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Ae=E.state.transmissionRenderTarget[j.id],Le=j.viewport||U;Ae.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const Te=L.getRenderTarget(),Oe=L.getActiveCubeFace(),Be=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(q),X=L.getClearAlpha(),X<1&&L.setClearColor(16777215,.5),L.clear(),Qe&&me.render(K);const qe=L.toneMapping;L.toneMapping=Mi;const Ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),Ie===!0&&Re.setGlobalState(L.clippingPlanes,j),Va(w,K,j),S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ft=0,Nt=F.length;ft<Nt;ft++){const bt=F[ft],{object:pt,geometry:Zt,material:Ne,group:wn}=bt;if(Ne.side===Jn&&pt.layers.test(j.layers)){const nt=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,Sp(pt,K,j,Zt,Ne,wn),Ne.side=nt,Ne.needsUpdate=!0,Ge=!0}}Ge===!0&&(S.updateMultisampleRenderTarget(Ae),S.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Te,Oe,Be),L.setClearColor(q,X),Ke!==void 0&&(j.viewport=Ke),L.toneMapping=qe}function Va(w,F,K){const j=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Ae=w.length;$<Ae;$++){const Le=w[$],{object:Te,geometry:Oe,group:Be}=Le;let qe=Le.material;qe.allowOverride===!0&&j!==null&&(qe=j),Te.layers.test(K.layers)&&Sp(Te,F,K,Oe,qe,Be)}}function Sp(w,F,K,j,$,Ae){w.onBeforeRender(L,F,K,j,$,Ae),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(L,F,K,j,w,Ae),$.transparent===!0&&$.side===Jn&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,L.renderBufferDirect(K,F,j,$,w,Ae),$.side=Cr,$.needsUpdate=!0,L.renderBufferDirect(K,F,j,$,w,Ae),$.side=Jn):L.renderBufferDirect(K,F,j,$,w,Ae),w.onAfterRender(L,F,K,j,$,Ae)}function Ha(w,F,K){F.isScene!==!0&&(F=st);const j=A.get(w),$=E.state.lights,Ae=E.state.shadowsArray,Le=$.state.version,Te=ve.getParameters(w,$.state,Ae,F,K,E.state.lightProbeGridArray),Oe=ve.getProgramCacheKey(Te);let Be=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,j.fog=F.fog;const qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=z.get(w.envMap||j.environment,qe),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",je),Be=new Map,j.programs=Be);let Ke=Be.get(Oe);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===Le)return Ep(w,Te),Ke}else Te.uniforms=ve.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,K,Te),w.onBeforeCompile(Te,L),Ke=ve.acquireProgram(Te,Oe),Be.set(Oe,Ke),j.uniforms=Te.uniforms;const Ge=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=Re.uniform),Ep(w,Te),j.needsLights=Zx(w),j.lightsStateVersion=Le,j.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=Ke,j.uniformsList=null,Ke}function Mp(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=sc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Ep(w,F){const K=A.get(w);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function qx(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let K=0,j=w.length;K<j;K++){const $=w[K];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function Yx(w,F,K,j,$){F.isScene!==!0&&(F=st),S.resetTextureUnits();const Ae=F.fog,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?F.environment:null,Te=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:et.workingColorSpace,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Be=z.get(j.envMap||Le,Oe),qe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color;let bt=Mi;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=L.toneMapping);const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=pt!==void 0?pt.length:0,Ne=A.get(j),wn=E.state.lights;if(Ie===!0&&(Ce===!0||w!==k)){const gt=w===k&&j.id===W;Re.setState(j,w,gt)}let nt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==wn.state.version||Ne.outputColorSpace!==Te||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==Be||j.fog===!0&&Ne.fog!==Ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Re.numPlanes||Ne.numIntersection!==Re.numIntersection)||Ne.vertexAlphas!==qe||Ne.vertexTangents!==Ke||Ne.morphTargets!==Ge||Ne.morphNormals!==ft||Ne.morphColors!==Nt||Ne.toneMapping!==bt||Ne.morphTargetsCount!==Zt||!!Ne.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ne.__version=j.version);let Dn=Ne.currentProgram;nt===!0&&(Dn=Ha(j,F,$),O&&j.isNodeMaterial&&O.onUpdateProgram(j,Dn,Ne));let li=!1,Zi=!1,ds=!1;const mt=Dn.getUniforms(),Lt=Ne.uniforms;if(Me.useProgram(Dn.program)&&(li=!0,Zi=!0,ds=!0),j.id!==W&&(W=j.id,Zi=!0),Ne.needsLights){const gt=qx(E.state.lightProbeGridArray,$);Ne.lightProbeGrid!==gt&&(Ne.lightProbeGrid=gt,Zi=!0)}if(li||k!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",w.projectionMatrix),mt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ji=mt.map.cameraPosition;Ji!==void 0&&Ji.setValue(D,be.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,Zi=!0,ds=!0)}if(Ne.needsLights&&(wn.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",wn.state.directionalShadowMap,S),wn.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",wn.state.spotShadowMap,S),wn.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",wn.state.pointShadowMap,S)),$.isSkinnedMesh){mt.setOptional(D,$,"bindMatrix"),mt.setOptional(D,$,"bindMatrixInverse");const gt=$.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(D,"boneTexture",gt.boneTexture,S))}$.isBatchedMesh&&(mt.setOptional(D,$,"batchingTexture"),mt.setValue(D,"batchingTexture",$._matricesTexture,S),mt.setOptional(D,$,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",$._indirectTexture,S),mt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",$._colorsTexture,S));const Qi=K.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&We.update($,K,Dn),(Zi||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,mt.setValue(D,"receiveShadow",$.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&F.environment!==null&&(Lt.envMapIntensity.value=F.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=_b()),Zi){if(mt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ne.needsLights&&Kx(Lt,ds),Ae&&j.fog===!0&&te.refreshFogUniforms(Lt,Ae),te.refreshMaterialUniforms(Lt,j,ye,de,E.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.lightProbeGrid){const gt=Ne.lightProbeGrid;Lt.probesSH.value=gt.texture,Lt.probesMin.value.copy(gt.boundingBox.min),Lt.probesMax.value.copy(gt.boundingBox.max),Lt.probesResolution.value.copy(gt.resolution)}sc.upload(D,Mp(Ne),Lt,S)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sc.upload(D,Mp(Ne),Lt,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(D,"center",$.center),mt.setValue(D,"modelViewMatrix",$.modelViewMatrix),mt.setValue(D,"normalMatrix",$.normalMatrix),mt.setValue(D,"modelMatrix",$.matrixWorld),j.uniformsGroups!==void 0){const gt=j.uniformsGroups;for(let Ji=0,fs=gt.length;Ji<fs;Ji++){const wp=gt[Ji];J.update(wp,Dn),J.bind(wp,Dn)}}return Dn}function Kx(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Zx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,K){const j=A.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=F,A.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const K=A.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};const Qx=D.createFramebuffer();this.setRenderTarget=function(w,F=0,K=0){I=w,Z=F,ne=K;let j=null,$=!1,Ae=!1;if(w){const Te=A.get(w);if(Te.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,Te.__webglFramebuffer),U.copy(w.viewport),Y.copy(w.scissor),G=w.scissorTest,Me.viewport(U),Me.scissor(Y),Me.setScissorTest(G),W=-1;return}else if(Te.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Te.__hasExternalTextures)S.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(Te.__boundDepthTexture!==qe){if(qe!==null&&A.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ae=!0);const Be=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?j=Be[F][K]:j=Be[F],$=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?j=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?j=Be[K]:j=Be,U.copy(w.viewport),Y.copy(w.scissor),G=w.scissorTest}else U.copy(ce).multiplyScalar(ye).floor(),Y.copy(B).multiplyScalar(ye).floor(),G=ke;if(K!==0&&(j=Qx),Me.bindFramebuffer(D.FRAMEBUFFER,j)&&Me.drawBuffers(w,j),Me.viewport(U),Me.scissor(Y),Me.setScissorTest(G),$){const Te=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,K)}else if(Ae){const Te=F;for(let Oe=0;Oe<w.textures.length;Oe++){const Be=A.get(w.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Be.__webglTexture,K,Te)}}else if(w!==null&&K!==0){const Te=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(w,F,K,j,$,Ae,Le,Te=0){if(!(w&&w.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Me.bindFramebuffer(D.FRAMEBUFFER,Oe);try{const Be=w.textures[Te],qe=Be.format,Ke=Be.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),!ot.textureFormatReadable(qe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ke)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&K>=0&&K<=w.height-$&&D.readPixels(F,K,j,$,P.convert(qe),P.convert(Ke),Ae)}finally{const Be=I!==null?A.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,F,K,j,$,Ae,Le,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(F>=0&&F<=w.width-j&&K>=0&&K<=w.height-$){Me.bindFramebuffer(D.FRAMEBUFFER,Oe);const Be=w.textures[Te],qe=Be.format,Ke=Be.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),!ot.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),D.readPixels(F,K,j,$,P.convert(qe),P.convert(Ke),0);const ft=I!==null?A.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ft);const Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await GM(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(Ge),D.deleteSync(Nt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,K=0){const j=Math.pow(2,-K),$=Math.floor(w.image.width*j),Ae=Math.floor(w.image.height*j),Le=F!==null?F.x:0,Te=F!==null?F.y:0;S.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Le,Te,$,Ae),Me.unbindTexture()};const Jx=D.createFramebuffer(),e2=D.createFramebuffer();this.copyTextureToTexture=function(w,F,K=null,j=null,$=0,Ae=0){let Le,Te,Oe,Be,qe,Ke,Ge,ft,Nt;const bt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(K!==null)Le=K.max.x-K.min.x,Te=K.max.y-K.min.y,Oe=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,qe=K.min.y,Ke=K.isBox3?K.min.z:0;else{const Lt=Math.pow(2,-$);Le=Math.floor(bt.width*Lt),Te=Math.floor(bt.height*Lt),w.isDataArrayTexture?Oe=bt.depth:w.isData3DTexture?Oe=Math.floor(bt.depth*Lt):Oe=1,Be=0,qe=0,Ke=0}j!==null?(Ge=j.x,ft=j.y,Nt=j.z):(Ge=0,ft=0,Nt=0);const pt=P.convert(F.format),Zt=P.convert(F.type);let Ne;F.isData3DTexture?(S.setTexture3D(F,0),Ne=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Ne=D.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Ne=D.TEXTURE_2D),Me.activeTexture(D.TEXTURE0),Me.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),Me.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Me.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const wn=Me.getParameter(D.UNPACK_ROW_LENGTH),nt=Me.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=Me.getParameter(D.UNPACK_SKIP_PIXELS),li=Me.getParameter(D.UNPACK_SKIP_ROWS),Zi=Me.getParameter(D.UNPACK_SKIP_IMAGES);Me.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),Me.pixelStorei(D.UNPACK_SKIP_ROWS,qe),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const ds=w.isDataArrayTexture||w.isData3DTexture,mt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Lt=A.get(w),Qi=A.get(F),gt=A.get(Lt.__renderTarget),Ji=A.get(Qi.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,gt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let fs=0;fs<Oe;fs++)ds&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(w).__webglTexture,$,Ke+fs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(F).__webglTexture,Ae,Nt+fs)),D.blitFramebuffer(Be,qe,Le,Te,Ge,ft,Le,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||A.has(w)){const Lt=A.get(w),Qi=A.get(F);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Jx),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,e2);for(let gt=0;gt<Oe;gt++)ds?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,$,Ke+gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,$),mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qi.__webglTexture,Ae,Nt+gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qi.__webglTexture,Ae),$!==0?D.blitFramebuffer(Be,qe,Le,Te,Ge,ft,Le,Te,D.COLOR_BUFFER_BIT,D.NEAREST):mt?D.copyTexSubImage3D(Ne,Ae,Ge,ft,Nt+gt,Be,qe,Le,Te):D.copyTexSubImage2D(Ne,Ae,Ge,ft,Be,qe,Le,Te);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ne,Ae,Ge,ft,Nt,Le,Te,Oe,pt,Zt,bt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,Ae,Ge,ft,Nt,Le,Te,Oe,pt,bt.data):D.texSubImage3D(Ne,Ae,Ge,ft,Nt,Le,Te,Oe,pt,Zt,bt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Ge,ft,Le,Te,pt,Zt,bt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Ge,ft,bt.width,bt.height,pt,bt.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Ge,ft,Le,Te,pt,Zt,bt);Me.pixelStorei(D.UNPACK_ROW_LENGTH,wn),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),Me.pixelStorei(D.UNPACK_SKIP_ROWS,li),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,Zi),Ae===0&&F.generateMipmaps&&D.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){Z=0,ne=0,I=null,Me.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const ap="@mnemosyne-plugins/mnemo-cosmos",Nx=["move","zoom"],yb=new Ua(ap);let Lx=(t,e)=>yb.invoke(t,e),t1=Promise.resolve();async function lp(){return Sb(await Lx("state.get"))}const Dd=t=>!!t&&typeof t=="object"&&!Array.isArray(t);function Sb(t){if(!Dd(t))return{};const e="state"in t&&"updatedAt"in t?t.state:t;if(!Dd(e))return{};const n={...e};return"updatedAt"in n&&(n.state===null||Dd(n.state))&&(delete n.state,delete n.updatedAt),n}function Dx(t,e){const n=t1.then(async()=>{const i=await lp();await Lx("state.set",{state:{...i,[t]:e}})});return t1=n.catch(()=>{}),n}const Ix=.25,Ux=3,Mb=.25,j0="gestures",cp=()=>Object.fromEntries(Nx.map(t=>[t,1])),Fx=t=>Math.max(Ix,Math.min(Ux,t));function Eb(t){const e=t&&typeof t=="object"&&!Array.isArray(t)?t:{},n=cp();for(const i of Nx){const r=e[i];typeof r=="number"&&Number.isFinite(r)&&r>0&&(n[i]=Fx(r))}return n}let Rr=cp(),Qr={kind:"loading"};const X0=new Set,mo=()=>{for(const t of[...X0])t()},oc=()=>Rr,wb=()=>Qr;function n1(t){return X0.add(t),()=>{X0.delete(t)}}let i1=null,Ox=!1;function Tb(){return i1??(i1=lp().then(t=>{Qr={kind:"ready"},Ox?zx():(Rr=Eb(t[j0]),ac=t[j0]!==void 0?JSON.stringify(Rr):null),mo()}).catch(t=>{const e=t instanceof Error?t.message:String(t);console.warn("[gestures] settings unavailable:",e),kx=!0,Qr={kind:"unsaved",why:e},mo()})),i1}let ac=null,kx=!1;function zx(){const t=JSON.stringify(Rr);t!==ac&&(ac=t,Dx(j0,Rr).then(()=>{Qr.kind==="unsaved"&&(Qr={kind:"ready"},mo())}).catch(e=>{const n=e instanceof Error?e.message:String(e);console.warn("[gestures] settings not saved:",n),ac=null,Qr={kind:"unsaved",why:n},mo()}))}function Bx(){if(Qr.kind==="loading"){Ox=!0;return}kx||zx()}function kl(t,e,n={}){Number.isFinite(e)&&(Rr={...Rr,[t]:Fx(e)},mo(),n.save!==!1&&Bx())}function Ab(){Rr=cp(),mo(),Bx()}let Gx={kind:"asking"};const $0=new Set,bb=()=>Gx;function r1(t){Gx=t;for(const e of[...$0])e()}function Cb(t){return $0.add(t),()=>{$0.delete(t)}}const Rb=new Ua(ap);function Pb(t){const e=Rb.onGestures(t);return e.ready.then(({takes:n,actions:i})=>{console.info("[gestures] granted:",n.join(", "),i.length?`+ ${i.join(", ")}`:""),r1({kind:"granted",takes:n,actions:i})}).catch(n=>{const i=n instanceof Error?n.message:String(n);console.warn("[gestures] none:",i),r1({kind:"refused",why:i})}),e.off}function Nb(t,e,n,i,r=1){return![e,n,i,r].every(Number.isFinite)||i<=0||r<=0?null:P_(t,e*r,n*r,i)}function s1(t,e,n=1){return!Number.isFinite(e)||e<=0||!Number.isFinite(n)||n<=0?null:{...t,fov:jh(t.fov/Math.pow(e,n))}}const Lb=4;function Db({stars:t,dsos:e,constellations:n,bodies:i,layers:r,look:s,onLook:o,onPick:a,selected:l,quizTarget:c,hiddenLabel:d,constellationLabel:f,bodyLabel:u,onRecenter:p}){const g=Se.useRef(null),x=Se.useRef({width:1,height:1}),[v,h]=Se.useState([]),m=Se.useRef(s);m.current=s;const _=Se.useRef(r);_.current=r;const M=Se.useRef(l);M.current=l;const b=Se.useRef(c);b.current=c;const E=Se.useRef(d);E.current=d;const T=Se.useRef(i);T.current=i;const y=Se.useRef(new Pt),C=Se.useMemo(()=>{const q=[];return i.forEach((X,Q)=>q.push({ra:X.ra,dec:X.dec,rank:-30+Q,kind:"body",index:Q})),t.forEach((X,Q)=>q.push({ra:X.ra,dec:X.dec,rank:X.mag,kind:"star",index:Q})),e.forEach((X,Q)=>q.push({ra:X.ra,dec:X.dec,rank:X.mag??20,kind:"dso",index:Q})),q},[t,e,i]),L=Se.useRef(C);L.current=C;const N=Se.useRef(a);N.current=a;const O=Se.useRef(o);O.current=o,Se.useEffect(()=>{const q=g.current;if(!q)return;const X=new xb({antialias:!0,alpha:!1});X.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),X.setClearColor(329485,1),q.appendChild(X.domElement),X.domElement.style.display="block",X.domElement.style.width="100%",X.domElement.style.height="100%";const Q=new iE,de=new kn(s.fov,1,.1,Ni*4);de.position.set(0,0,0);const ye=[],V=xe=>(ye.push(xe),xe),ae=V(new $t);{const xe=new Float32Array(t.length*3),Fe=new Float32Array(t.length*3),P=new Float32Array(t.length);t.forEach((ie,J)=>{const he=Yn(ie.ra,ie.dec);xe[J*3]=he.x,xe[J*3+1]=he.y,xe[J*3+2]=he.z;const ue=Gy(ie.ci)??[1,1,1];Fe[J*3]=ue[0],Fe[J*3+1]=ue[1],Fe[J*3+2]=ue[2],P[J]=By(ie.mag,6.5)}),ae.setAttribute("position",new Wt(xe,3)),ae.setAttribute("color",new Wt(Fe,3)),ae.setAttribute("size",new Wt(P,1)),ae.setAttribute("mag",new Wt(Float32Array.from(t.map(ie=>ie.mag)),1))}const ce=V(new oi({transparent:!0,depthWrite:!1,blending:Kf,uniforms:{uScale:{value:1},uMagLimit:{value:r.magLimit}},vertexShader:`
        attribute float size;
        attribute float mag;
        uniform float uScale;
        uniform float uMagLimit;
        varying vec3 vColor;
        varying float vDrop;
        void main() {
          vColor = color;
          // Fainter than the filter: dropped by making it degenerate rather
          // than by rebuilding the buffer on every slider move.
          vDrop = mag > uMagLimit ? 1.0 : 0.0;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = size * uScale * (vDrop > 0.5 ? 0.0 : 1.0);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vDrop;
        void main() {
          if (vDrop > 0.5) discard;
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d) * 2.0;
          if (r > 1.0) discard;
          float a = smoothstep(1.0, 0.15, r);
          gl_FragColor = vec4(vColor, a);
        }
      `,vertexColors:!0})),B=new Ad(ae,ce);B.frustumCulled=!1,Q.add(B);const ke=V(new $t);{const xe=[];for(const Fe of n)for(const P of Fe.lines)for(let ie=0;ie+1<P.length;ie++){const J=Yn(P[ie][0],P[ie][1],Ni*.995),he=Yn(P[ie+1][0],P[ie+1][1],Ni*.995);xe.push(J.x,J.y,J.z,he.x,he.y,he.z)}ke.setAttribute("position",new Wt(Float32Array.from(xe),3))}const Ve=V(new B0({color:4157342,transparent:!0,opacity:.55})),Ie=new wg(ke,Ve);Ie.frustumCulled=!1,Q.add(Ie);const Ce=V(new $t);{const xe=[],Fe=(P,ie,J,he)=>{const ue=Yn(P,ie,Ni*.99),se=Yn(J,he,Ni*.99);xe.push(ue.x,ue.y,ue.z,se.x,se.y,se.z)};for(let P=0;P<24;P+=2)for(let ie=-90;ie<90;ie+=5)Fe(P*15,ie,P*15,ie+5);for(let P=-60;P<=60;P+=30)for(let ie=0;ie<360;ie+=5)Fe(ie,P,ie+5,P);for(let P=0;P<360;P+=5)Fe(P,0,P+5,0);Ce.setAttribute("position",new Wt(Float32Array.from(xe),3))}const ee=V(new B0({color:2375772,transparent:!0,opacity:.4})),be=new wg(Ce,ee);be.frustumCulled=!1,Q.add(be);const ze=V(new $t);{const xe=new Float32Array(e.length*3);e.forEach((Fe,P)=>{const ie=Yn(Fe.ra,Fe.dec,Ni*.99);xe[P*3]=ie.x,xe[P*3+1]=ie.y,xe[P*3+2]=ie.z}),ze.setAttribute("position",new Wt(xe,3))}const st=V(new G0({color:9426624,size:5,sizeAttenuation:!1,transparent:!0,opacity:.75})),Qe=new Ad(ze,st);Qe.frustumCulled=!1,Q.add(Qe);const Et=V(new $t),D=16,yt=new Float32Array(D*3);Et.setAttribute("position",new Wt(yt,3)),Et.setDrawRange(0,0);const Ze=V(new G0({color:16766874,size:11,sizeAttenuation:!1,transparent:!0,opacity:.95})),ot=new Ad(Et,Ze);ot.frustumCulled=!1,Q.add(ot);const Me=V(new op(1.6,1.9,48)),St=V(new Wc({color:16764779,side:Jn,transparent:!0})),A=V(new Wc({color:16743787,side:Jn,transparent:!0})),S=new si(Me,St),z=new si(Me,A);S.visible=!1,z.visible=!1,Q.add(S,z);const re=(xe,Fe)=>{if(!Fe){xe.visible=!1;return}const P=Yn(Fe.ra,Fe.dec,Ni*.96);xe.position.set(P.x,P.y,P.z),xe.lookAt(0,0,0);const ie=m.current.fov/60*1.6;xe.scale.setScalar(ie),xe.visible=!0};let le=0;const pe=()=>{le=requestAnimationFrame(pe);const{width:xe,height:Fe}=x.current,P=m.current,ie=_.current;de.fov=jh(P.fov),de.aspect=xe/Math.max(1,Fe),de.updateProjectionMatrix();const J=Yn(P.ra,P.dec);de.lookAt(J.x,J.y,J.z),de.updateMatrixWorld(),y.current.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),ce.uniforms.uScale.value=Math.min(3.2,Math.max(.55,26/P.fov)),ce.uniforms.uMagLimit.value=ie.magLimit;const he=T.current,ue=Math.min(D,he.length);for(let se=0;se<ue;se++){const Pe=Yn(he[se].ra,he[se].dec,Ni*.98);yt[se*3]=Pe.x,yt[se*3+1]=Pe.y,yt[se*3+2]=Pe.z}Et.setDrawRange(0,ue),Et.attributes.position.needsUpdate=!0,Ie.visible=ie.figures,be.visible=ie.grid,Qe.visible=ie.deepSky,ot.visible=ie.planets&&ue>0,re(S,M.current),re(z,b.current),X.render(Q,de),_e()},ve={star:26,constellation:24,dso:14},te=5.6,oe=13,we=xe=>{const Fe=xe.text.length*te+10,P=xe.kind==="constellation"?xe.x-Fe/2:xe.x+6;return{left:P,right:P+Fe,top:xe.y-oe/2,bottom:xe.y+oe/2}};let Re="";const _e=()=>{const{width:xe,height:Fe}=x.current,P=_.current,ie=y.current.elements,J=[],he=(je,Ue)=>{const ht=R_(ie,Yn(je,Ue));return ht.visible?{x:(ht.x+1)/2*xe,y:(1-ht.y)/2*Fe}:null},ue=[],se=je=>{const Ue=we(je);for(const ht of ue)if(Ue.left<ht.right&&Ue.right>ht.left&&Ue.top<ht.bottom&&Ue.bottom>ht.top)return!1;return ue.push(Ue),J.push(je),!0};if(P.planets)for(const je of T.current){const Ue=he(je.ra,je.dec);Ue&&se({key:`b${je.body}`,text:u(je.body),...Ue,kind:"body"})}if(P.constellationNames){let je=0;for(const Ue of n){if(je>=ve.constellation)break;if(!Ue.label)continue;const ht=he(Ue.label[0],Ue.label[1]);ht&&se({key:`c${Ue.id}`,text:f(Ue),...ht,kind:"constellation"})&&je++}}const Pe=b.current;if(Pe!=null&&Pe.label){const je=he(Pe.ra,Pe.dec);je&&se({key:"quiz",text:Pe.label,...je,kind:"body"})}if(P.starNames){let je=0;for(const Ue of t){if(je>=ve.star)break;if(!Ue.proper||Ue.mag>Math.min(P.magLimit,3.6)||E.current&&Fa(Ue)===E.current)continue;const ht=he(Ue.ra,Ue.dec);ht&&se({key:`s${Ue.i}`,text:Ue.proper,...ht,kind:"star"})&&je++}}if(P.deepSky){let je=0;for(const Ue of e){if(je>=ve.dso)break;if(!Ue.messier&&!Ue.common||E.current&&Oa(Ue)===E.current)continue;const ht=he(Ue.ra,Ue.dec);ht&&se({key:`d${Ue.i}`,text:Ue.messier?`M${Ue.messier}`:Ue.common,...ht,kind:"dso"})&&je++}}const Xe=J.map(je=>`${je.key}:${je.x|0}:${je.y|0}`).join("|");Xe!==Re&&(Re=Xe,h(J))},me=()=>{const xe=q.getBoundingClientRect(),Fe=Math.max(1,Math.round(xe.width)),P=Math.max(1,Math.round(xe.height));x.current={width:Fe,height:P},X.setSize(Fe,P,!1)};me();const We=new ResizeObserver(me);return We.observe(q),le=requestAnimationFrame(pe),()=>{cancelAnimationFrame(le),We.disconnect();for(const xe of ye)xe.dispose();X.dispose(),X.forceContextLoss(),q.removeChild(X.domElement)}},[t,e,n]);const Z=Se.useRef(null),ne=q=>{var X,Q;(Q=(X=q.target).setPointerCapture)==null||Q.call(X,q.pointerId),Z.current={x:q.clientX,y:q.clientY,moved:0,id:q.pointerId}},I=q=>{const X=Z.current;if(!X)return;const Q=q.clientX-X.x,de=q.clientY-X.y;X.moved+=Math.abs(Q)+Math.abs(de),X.x=q.clientX,X.y=q.clientY,O.current(P_(m.current,Q,de,x.current.height))},W=q=>{const X=Z.current;Z.current=null,X&&(X.moved>Lb||k(q.clientX,q.clientY,q.currentTarget.getBoundingClientRect()))},k=(q,X,Q)=>{if(!Q.width||!Q.height)return;const de={x:(q-Q.left)/Q.width*2-1,y:-((X-Q.top)/Q.height*2-1)},ye=_.current,V=L.current.filter(B=>B.kind==="body"?ye.planets:B.kind==="dso"?ye.deepSky:t[B.index].mag<=ye.magLimit),ae=Vy(V,y.current.elements,de,x.current),ce=ae?V[ae.index]:null;N.current(ce?{kind:ce.kind,index:ce.index}:null)},U=Se.useRef(k);U.current=k;const Y=Se.useRef(p);Y.current=p,Se.useEffect(()=>Pb({pan:({dx:q,dy:X})=>{const Q=Nb(m.current,q,X,x.current.height,oc().move);Q&&O.current(Q)},depth:({factor:q})=>{const X=s1(m.current,q,oc().zoom);X&&O.current(X)},zoom:({factor:q})=>{const X=s1(m.current,q,oc().zoom);X&&O.current(X)},recenter:()=>{var q;return(q=Y.current)==null?void 0:q.call(Y)},select:({x:q,y:X})=>{const Q=g.current;Q&&U.current(q,X,Q.getBoundingClientRect())}}),[]);const G=q=>{O.current(Hy(m.current,q.deltaY>0?1:-1))};return R.jsxs("div",{className:"sky-canvas",children:[R.jsx("div",{ref:g,className:"sky-gl",onPointerDown:ne,onPointerMove:I,onPointerUp:W,onPointerCancel:()=>{Z.current=null},onWheel:G}),R.jsx("div",{className:"sky-labels","aria-hidden":"false",children:v.map(q=>R.jsx("span",{className:`sky-label sky-label-${q.kind}`,style:{left:`${q.x}px`,top:`${q.y}px`},children:q.text},q.key))})]})}const Ib=["en","fr","es","de","pt","ru","zh"],Vx={"app.eyebrow":"THE SKY, OFFLINE","app.loading":"Reading the catalogue…","app.failed":"The catalogue could not be read: {why}","app.retry":"Try again","app.objects":"{stars} stars · {dsos} deep-sky objects","app.search":"Search a name, HIP, NGC or M number","app.noResults":"Nothing in the catalogue matches that.","app.close":"Close","trunc.title":"What this catalogue holds","trunc.stars":"Stars down to magnitude {limit} — the naked-eye sky. {kept} of them; {omitted} fainter stars in the source are not shipped.","trunc.noDistance":"{n} of those stars have no measured distance. Their cards show a dash, never a number.","trunc.dsos":"{kept} clusters, nebulae and galaxies from OpenNGC, including all {messier} Messier objects it lists. {omitted} rows were left out: duplicates, entries for objects that turned out not to exist, and faint objects with no name.","trunc.sphere":"Everything is drawn on the celestial sphere — directions, not distances. Nothing here is a scale model of space.","card.magnitude":"Apparent magnitude","card.magnitude.hint":"How bright it looks from here. Smaller is brighter.","card.absmag":"Absolute magnitude","card.absmag.hint":"How bright it would look from 10 parsecs. A different quantity.","card.distance":"Distance","card.spectral":"Spectral type","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (of date)","card.size":"Apparent size","card.type":"Type","card.alsoKnown":"Also","card.unstableId":"This star has no Hipparcos, Henry Draper or Gliese number. The key above is local to this build of the catalogue and will not survive a catalogue update.","card.noDistance":"Hipparcos measured no usable parallax for this star, so its distance is not known.","card.altitude":"Altitude","card.azimuth":"Azimuth","card.rises":"Rises","card.sets":"Sets","card.neverRises":"Does not rise in the next 24 hours","card.neverSets":"Does not set in the next 24 hours","card.noPlace":"Set where you are to see altitude, rise and set.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% lit","card.centre":"Centre on it","sky.figures":"Constellation figures","sky.names":"Constellation names","sky.deepSky":"Deep sky","sky.planets":"Sun, Moon and planets","sky.starNames":"Star names","sky.grid":"Coordinate grid","sky.magFilter":"Faintest star shown","sky.reset":"Reset the view","sky.fov":"Field of view","time.title":"Instant shown","time.now":"Now","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hour","time.plus1h":"+1 hour","time.minus1d":"−1 day","time.plus1d":"+1 day","place.title":"Where you are","place.none":"Not set","place.hint":"Typed in by you. This cartridge never looks your location up — it has no network access and would not ask for one without saying so.","place.label":"Name","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Elevation (m)","place.save":"Use this place","place.clear":"Forget it","place.bad.latitude":"Latitude has to be a number between −90 and 90.","place.bad.longitude":"Longitude has to be a number between −180 and 180.","place.bad.elevation":"Elevation has to be a number of metres between −500 and 9000.","memory.title":"Your memory","memory.ask":"Ask what my notes say","memory.askAgain":"Ask again","memory.tryAgain":"Try again","memory.reading":"Reading your memory…","memory.note":"One question, one answer. Nothing is asked until you press this — a memory query is a model call, and browsing the sky should not bill anyone.","memory.nothing":"Your memory holds nothing about {name} yet. That is not an error: nothing has been written about it.","memory.outside":"This window is open outside Mnemosyne, so there is no memory to ask. Open the cartridge from the app.","memory.failed":"Your memory did not answer: {why}","memory.noReason":"no reason given","review.title":"Review","review.open":"Review what you know","review.close":"Close review","review.back":"Back to families","review.pick":"Pick what to be asked about.","review.studied":"Studied","review.due":"Due","review.mastered":"Mastered","review.best":"Best streak","review.howMany":"How many questions?","review.endless":"Endless","review.scope":"{n} objects in {level}. Missed ones come back tomorrow; the rest move to a longer interval.","review.question":"Which object is marked?","review.answerIs":"It is","review.next":"Next","review.finishHere":"Finish here","review.again":"Again","review.another":"Another family","review.comeBack":"Come back to these","review.andMore":"and {n} more","review.accuracy":"Accuracy","review.time":"Time","review.record":"That is your longest streak yet.","review.save":"Save this run to memory","review.saving":"Writing…","review.saved":"Written to {vault}.","review.savedLocked":"Written to {vault}. It is locked, so it will be indexed when you unlock it.","review.empty":"Nothing to ask about here.","review.tooSmall":"Only {n} objects — too few for four honest options.","review.noHost":"Open the cartridge from Mnemosyne to keep your progress.","review.noLoad":"Your progress could not be read, so this run is not being kept.","review.unsaved":"Answers in this run are not being saved. {why}","review.why.noHost":"This window is open outside Mnemosyne, so there is no memory to write to.","review.why.noPermission":"This cartridge has not been allowed to write to your memory.","review.why.declined":"Writing to memory was declined.","review.tight":"Your saved progress is {pct}% of the space this cartridge is allowed. Past 100% it stops being kept.","review.unknown":"—","family.all":"Everything","family.messier":"Messier objects","family.namedStars":"Named stars","family.brightStars":"Bright stars","family.galaxies":"Galaxies","family.clusters":"Clusters","family.nebulae":"Nebulae","rank.perfect":"Perfect","rank.excellent":"Excellent","rank.solid":"Solid","rank.getting":"Getting there","rank.again":"Worth another pass","moon.new":"New","moon.waxingCrescent":"Waxing crescent","moon.firstQuarter":"First quarter","moon.waxingGibbous":"Waxing gibbous","moon.full":"Full","moon.waningGibbous":"Waning gibbous","moon.lastQuarter":"Last quarter","moon.waningCrescent":"Waning crescent","body.Sun":"Sun","body.Moon":"Moon","body.Mercury":"Mercury","body.Venus":"Venus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturn","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluto","type.G":"Galaxy","type.GPair":"Galaxy pair","type.GTrpl":"Galaxy triplet","type.GGroup":"Group of galaxies","type.PN":"Planetary nebula","type.OCl":"Open cluster","type.GCl":"Globular cluster","type.Cl+N":"Cluster with nebula","type.*":"Star","type.Nova":"Nova","type.HII":"H II region","type.DrkN":"Dark nebula","type.EmN":"Emission nebula","type.Neb":"Nebula","type.RfN":"Reflection nebula","type.SNR":"Supernova remnant","type.Star":"Star","type.**":"Double star","type.*Ass":"Association of stars","type.Other":"Other","credits.title":"Where this comes from","credits.open":"Sources & credits","credits.stars":"Stars: HYG database 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Deep sky: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Constellation figures and names: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sun, Moon and planets: astronomy-engine, Don Cross — MIT","credits.accuracy":"Planet positions were checked against JPL Horizons for 2026-09-09: all five bodies tested agreed within 11 arcseconds.","credits.derived":"The catalogue file this cartridge ships is a derived work of two CC BY-SA 4.0 databases, so that file is CC BY-SA 4.0 too. The code is MIT.","gest.open":"Gesture settings","gest.title":"Gestures","gest.asking":"Asking Mnemosyne for the gestures…","gest.granted":"Gestures on.","gest.refused":"Gestures off: {why}","gest.speeds":"Speed","gest.reset":"Back to 1×","gest.loading":"Reading your settings…","gest.unsaved":"Applied, but not saved: {why}","gest.os":"Handled by Mnemosyne","gest.osFull":"Fingers together, then spread → full screen","gest.osClose":"Closed fist, hold → close the window","gest.osWindow":"Pinch a window’s corner → move it","gest.close":"Close","gest.lead":"Put Cosmos in full screen, and your hands move through the sky.","gest.speed.move":"Move","gest.speed.zoom":"Zoom","gest.inApp":"In Cosmos","gest.pan":"Pinch and move → slide the sky","gest.depth":"Pinch, hand toward the camera → come closer","gest.zoom":"Pinch with both hands → zoom","gest.recenter":"Open hands, held still → back to the starting view","gest.select":"Pinch and hold on a point → open that object"},Ub={"app.eyebrow":"LE CIEL, HORS LIGNE","app.loading":"Lecture du catalogue…","app.failed":"Le catalogue n’a pas pu être lu : {why}","app.retry":"Réessayer","app.objects":"{stars} étoiles · {dsos} objets du ciel profond","app.search":"Chercher un nom, un numéro HIP, NGC ou M","app.noResults":"Rien dans le catalogue ne correspond.","app.close":"Fermer","trunc.title":"Ce que contient ce catalogue","trunc.stars":"Les étoiles jusqu’à la magnitude {limit} — le ciel à l’œil nu. Il y en a {kept} ; {omitted} étoiles plus faibles de la source ne sont pas embarquées.","trunc.noDistance":"{n} de ces étoiles n’ont aucune distance mesurée. Leur fiche affiche un tiret, jamais un nombre.","trunc.dsos":"{kept} amas, nébuleuses et galaxies d’OpenNGC, dont les {messier} objets de Messier qu’il recense. {omitted} lignes ont été écartées : doublons, entrées pour des objets qui n’existent pas, et objets faibles sans nom.","trunc.sphere":"Tout est dessiné sur la sphère céleste — des directions, pas des distances. Rien ici n’est une maquette de l’espace à l’échelle.","card.magnitude":"Magnitude apparente","card.magnitude.hint":"Sa brillance vue d’ici. Plus le nombre est petit, plus c’est brillant.","card.absmag":"Magnitude absolue","card.absmag.hint":"Sa brillance vue de 10 parsecs. Ce n’est pas la même grandeur.","card.distance":"Distance","card.spectral":"Type spectral","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (de la date)","card.size":"Taille apparente","card.type":"Type","card.alsoKnown":"Aussi","card.unstableId":"Cette étoile n’a ni numéro Hipparcos, ni Henry Draper, ni Gliese. La clé ci-dessus est locale à cette version du catalogue et ne survivra pas à une mise à jour.","card.noDistance":"Hipparcos n’a mesuré aucune parallaxe exploitable pour cette étoile : sa distance n’est pas connue.","card.altitude":"Hauteur","card.azimuth":"Azimut","card.rises":"Lever","card.sets":"Coucher","card.neverRises":"Ne se lève pas dans les 24 prochaines heures","card.neverSets":"Ne se couche pas dans les 24 prochaines heures","card.noPlace":"Indiquez où vous êtes pour voir la hauteur, le lever et le coucher.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% éclairée","card.centre":"Centrer dessus","sky.figures":"Figures des constellations","sky.names":"Noms des constellations","sky.deepSky":"Ciel profond","sky.planets":"Soleil, Lune et planètes","sky.starNames":"Noms des étoiles","sky.grid":"Grille de coordonnées","sky.magFilter":"Étoile la plus faible affichée","sky.reset":"Réinitialiser la vue","sky.fov":"Champ de vision","time.title":"Instant affiché","time.now":"Maintenant","time.utc":"UTC","time.local":"Locale","time.minus1h":"−1 heure","time.plus1h":"+1 heure","time.minus1d":"−1 jour","time.plus1d":"+1 jour","place.title":"Où vous êtes","place.none":"Non renseigné","place.hint":"Saisi par vous. Cette cartouche ne cherche jamais votre position — elle n’a pas d’accès réseau et ne la demanderait pas sans le dire.","place.label":"Nom","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Altitude (m)","place.save":"Utiliser ce lieu","place.clear":"L’oublier","place.bad.latitude":"La latitude doit être un nombre entre −90 et 90.","place.bad.longitude":"La longitude doit être un nombre entre −180 et 180.","place.bad.elevation":"L’altitude doit être un nombre de mètres entre −500 et 9000.","memory.title":"Votre mémoire","memory.ask":"Demander ce que disent mes notes","memory.askAgain":"Redemander","memory.tryAgain":"Réessayer","memory.reading":"Lecture de votre mémoire…","memory.note":"Une question, une réponse. Rien n’est demandé tant que vous n’appuyez pas — interroger la mémoire est un appel au modèle, et parcourir le ciel ne doit rien coûter à personne.","memory.nothing":"Votre mémoire ne contient encore rien sur {name}. Ce n’est pas une erreur : rien n’a été écrit à ce sujet.","memory.outside":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire à interroger. Ouvrez la cartouche depuis l’application.","memory.failed":"Votre mémoire n’a pas répondu : {why}","memory.noReason":"aucune raison donnée","review.title":"Révision","review.open":"Réviser ce que vous savez","review.close":"Fermer la révision","review.back":"Retour aux familles","review.pick":"Choisissez sur quoi être interrogé.","review.studied":"Vus","review.due":"À revoir","review.mastered":"Maîtrisés","review.best":"Meilleure série","review.howMany":"Combien de questions ?","review.endless":"Sans fin","review.scope":"{n} objets dans {level}. Les ratés reviennent demain ; les autres passent à un intervalle plus long.","review.question":"Quel objet est marqué ?","review.answerIs":"C’est","review.next":"Suivant","review.finishHere":"Arrêter ici","review.again":"Encore","review.another":"Une autre famille","review.comeBack":"Revenir sur ceux-là","review.andMore":"et {n} de plus","review.accuracy":"Réussite","review.time":"Durée","review.record":"C’est votre plus longue série.","review.save":"Enregistrer cette session en mémoire","review.saving":"Écriture…","review.saved":"Écrit dans {vault}.","review.savedLocked":"Écrit dans {vault}. Ce coffre est verrouillé : l’indexation se fera à son déverrouillage.","review.empty":"Rien à demander ici.","review.tooSmall":"Seulement {n} objets — trop peu pour quatre options honnêtes.","review.noHost":"Ouvrez la cartouche depuis Mnemosyne pour conserver votre progression.","review.noLoad":"Votre progression n’a pas pu être lue : cette session n’est pas conservée.","review.unsaved":"Les réponses de cette session ne sont pas enregistrées. {why}","review.why.noHost":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire où écrire.","review.why.noPermission":"Cette cartouche n’a pas l’autorisation d’écrire dans votre mémoire.","review.why.declined":"L’écriture en mémoire a été refusée.","review.tight":"Votre progression enregistrée occupe {pct}% de la place allouée à cette cartouche. Au-delà de 100%, elle cesse d’être conservée.","family.all":"Tout","family.messier":"Objets de Messier","family.namedStars":"Étoiles nommées","family.brightStars":"Étoiles brillantes","family.galaxies":"Galaxies","family.clusters":"Amas","family.nebulae":"Nébuleuses","rank.perfect":"Parfait","rank.excellent":"Excellent","rank.solid":"Solide","rank.getting":"Ça vient","rank.again":"À refaire","moon.new":"Nouvelle","moon.waxingCrescent":"Croissant croissant","moon.firstQuarter":"Premier quartier","moon.waxingGibbous":"Gibbeuse croissante","moon.full":"Pleine","moon.waningGibbous":"Gibbeuse décroissante","moon.lastQuarter":"Dernier quartier","moon.waningCrescent":"Croissant décroissant","body.Sun":"Soleil","body.Moon":"Lune","body.Mercury":"Mercure","body.Venus":"Vénus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturne","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluton","type.G":"Galaxie","type.GPair":"Paire de galaxies","type.GTrpl":"Triplet de galaxies","type.GGroup":"Groupe de galaxies","type.PN":"Nébuleuse planétaire","type.OCl":"Amas ouvert","type.GCl":"Amas globulaire","type.Cl+N":"Amas avec nébuleuse","type.*":"Étoile","type.Nova":"Nova","review.unknown":"—","type.HII":"Région H II","type.DrkN":"Nébuleuse obscure","type.EmN":"Nébuleuse en émission","type.Neb":"Nébuleuse","type.RfN":"Nébuleuse par réflexion","type.SNR":"Rémanent de supernova","type.Star":"Étoile","type.**":"Étoile double","type.*Ass":"Association d’étoiles","type.Other":"Autre","credits.title":"D’où vient tout ceci","credits.open":"Sources et crédits","credits.stars":"Étoiles : base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Ciel profond : OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figures et noms des constellations : d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Soleil, Lune et planètes : astronomy-engine, Don Cross — MIT","credits.accuracy":"Les positions des planètes ont été comparées à JPL Horizons pour le 2026-09-09 : les cinq corps testés concordent à moins de 11 secondes d’arc.","credits.derived":"Le fichier catalogue embarqué est une œuvre dérivée de deux bases CC BY-SA 4.0 : ce fichier est donc lui aussi en CC BY-SA 4.0. Le code est en MIT.","gest.open":"Réglages des gestes","gest.title":"Gestes","gest.asking":"Demande des gestes à Mnemosyne…","gest.granted":"Gestes actifs.","gest.refused":"Gestes coupés : {why}","gest.speeds":"Vitesse","gest.reset":"Revenir à 1×","gest.loading":"Lecture de tes réglages…","gest.unsaved":"Appliqué, mais pas enregistré : {why}","gest.os":"Pris en charge par Mnemosyne","gest.osFull":"Doigts collés, puis écartés → plein écran","gest.osClose":"Poing fermé, tenir → fermer la fenêtre","gest.osWindow":"Pincer au coin d’une fenêtre → la déplacer","gest.close":"Fermer","gest.lead":"Mets Cosmos en plein écran, et tes mains parcourent le ciel.","gest.speed.move":"Déplacer","gest.speed.zoom":"Zoomer","gest.inApp":"Dans Cosmos","gest.pan":"Pincer et bouger → faire glisser le ciel","gest.depth":"Pincer, main vers la caméra → avancer","gest.zoom":"Pincer à deux mains → zoomer","gest.recenter":"Mains ouvertes, immobiles → revenir à la vue de départ","gest.select":"Pincer et tenir sur un point → ouvrir cet objet"},Fb={"app.eyebrow":"EL CIELO, SIN CONEXIÓN","app.loading":"Leyendo el catálogo…","app.failed":"No se pudo leer el catálogo: {why}","app.retry":"Reintentar","app.objects":"{stars} estrellas · {dsos} objetos de cielo profundo","app.search":"Buscar un nombre o un número HIP, NGC o M","app.noResults":"Nada en el catálogo coincide.","app.close":"Cerrar","trunc.title":"Qué contiene este catálogo","trunc.stars":"Estrellas hasta magnitud {limit} — el cielo a simple vista. Hay {kept}; {omitted} estrellas más débiles de la fuente no se incluyen.","trunc.noDistance":"{n} de esas estrellas no tienen distancia medida. Su ficha muestra un guion, nunca un número.","trunc.dsos":"{kept} cúmulos, nebulosas y galaxias de OpenNGC, incluidos los {messier} objetos Messier que recoge. Se dejaron fuera {omitted} filas: duplicados, entradas de objetos que resultaron no existir, y objetos débiles sin nombre.","trunc.sphere":"Todo se dibuja sobre la esfera celeste — direcciones, no distancias. Nada aquí es una maqueta a escala del espacio.","card.magnitude":"Magnitud aparente","card.magnitude.hint":"Lo brillante que se ve desde aquí. Cuanto menor, más brillante.","card.absmag":"Magnitud absoluta","card.absmag.hint":"Lo brillante que se vería desde 10 parsecs. Es otra magnitud.","card.distance":"Distancia","card.spectral":"Tipo espectral","card.constellation":"Constelación","card.position":"Posición (J2000)","card.positionNow":"Posición (de la fecha)","card.size":"Tamaño aparente","card.type":"Tipo","card.alsoKnown":"También","card.unstableId":"Esta estrella no tiene número Hipparcos, Henry Draper ni Gliese. La clave de arriba es local a esta versión del catálogo y no sobrevivirá a una actualización.","card.noDistance":"Hipparcos no midió una paralaje utilizable para esta estrella, así que su distancia no se conoce.","card.altitude":"Altura","card.azimuth":"Azimut","card.rises":"Sale","card.sets":"Se pone","card.neverRises":"No sale en las próximas 24 horas","card.neverSets":"No se pone en las próximas 24 horas","card.noPlace":"Indica dónde estás para ver la altura, la salida y la puesta.","card.au":"Distancia","card.phase":"Fase","card.illuminated":"{pct}% iluminada","card.centre":"Centrar en él","sky.figures":"Figuras de las constelaciones","sky.names":"Nombres de las constelaciones","sky.deepSky":"Cielo profundo","sky.planets":"Sol, Luna y planetas","sky.starNames":"Nombres de estrellas","sky.grid":"Rejilla de coordenadas","sky.magFilter":"Estrella más débil mostrada","sky.reset":"Restablecer la vista","sky.fov":"Campo de visión","time.title":"Instante mostrado","time.now":"Ahora","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hora","time.plus1h":"+1 hora","time.minus1d":"−1 día","time.plus1d":"+1 día","place.title":"Dónde estás","place.none":"Sin indicar","place.hint":"Lo escribes tú. Esta cartucho nunca busca tu ubicación — no tiene acceso a la red y no la pediría sin decirlo.","place.label":"Nombre","place.latitude":"Latitud","place.longitude":"Longitud","place.elevation":"Altitud (m)","place.save":"Usar este lugar","place.clear":"Olvidarlo","place.bad.latitude":"La latitud tiene que ser un número entre −90 y 90.","place.bad.longitude":"La longitud tiene que ser un número entre −180 y 180.","place.bad.elevation":"La altitud tiene que ser un número de metros entre −500 y 9000.","memory.title":"Tu memoria","memory.ask":"Preguntar qué dicen mis notas","memory.askAgain":"Preguntar otra vez","memory.tryAgain":"Reintentar","memory.reading":"Leyendo tu memoria…","memory.note":"Una pregunta, una respuesta. No se pregunta nada hasta que pulsas — consultar la memoria es una llamada al modelo, y recorrer el cielo no debe costarle nada a nadie.","memory.nothing":"Tu memoria todavía no contiene nada sobre {name}. No es un error: no se ha escrito nada al respecto.","memory.outside":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria que consultar. Abre el cartucho desde la aplicación.","memory.failed":"Tu memoria no respondió: {why}","memory.noReason":"sin motivo indicado","review.title":"Repaso","review.open":"Repasar lo que sabes","review.close":"Cerrar el repaso","review.back":"Volver a las familias","review.pick":"Elige sobre qué quieres que te pregunten.","review.studied":"Vistos","review.due":"Pendientes","review.mastered":"Dominados","review.best":"Mejor racha","review.howMany":"¿Cuántas preguntas?","review.endless":"Sin fin","review.scope":"{n} objetos en {level}. Los fallados vuelven mañana; el resto pasa a un intervalo más largo.","review.question":"¿Qué objeto está marcado?","review.answerIs":"Es","review.next":"Siguiente","review.finishHere":"Terminar aquí","review.again":"Otra vez","review.another":"Otra familia","review.comeBack":"Volver a estos","review.andMore":"y {n} más","review.accuracy":"Acierto","review.time":"Tiempo","review.record":"Es tu racha más larga.","review.save":"Guardar esta sesión en la memoria","review.saving":"Escribiendo…","review.saved":"Escrito en {vault}.","review.savedLocked":"Escrito en {vault}. Está bloqueado, así que se indexará cuando lo desbloquees.","review.empty":"No hay nada que preguntar aquí.","review.tooSmall":"Solo {n} objetos — muy pocos para cuatro opciones honestas.","review.noHost":"Abre el cartucho desde Mnemosyne para conservar tu progreso.","review.noLoad":"No se pudo leer tu progreso, así que esta sesión no se está guardando.","review.unsaved":"Las respuestas de esta sesión no se están guardando. {why}","review.why.noHost":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria donde escribir.","review.why.noPermission":"Este cartucho no tiene permiso para escribir en tu memoria.","review.why.declined":"Se rechazó la escritura en la memoria.","review.tight":"Tu progreso guardado ocupa el {pct}% del espacio asignado a este cartucho. Por encima del 100% deja de conservarse.","family.all":"Todo","family.messier":"Objetos Messier","family.namedStars":"Estrellas con nombre","family.brightStars":"Estrellas brillantes","family.galaxies":"Galaxias","family.clusters":"Cúmulos","family.nebulae":"Nebulosas","rank.perfect":"Perfecto","rank.excellent":"Excelente","rank.solid":"Sólido","rank.getting":"Vas bien","rank.again":"Merece otra vuelta","moon.new":"Nueva","moon.waxingCrescent":"Creciente","moon.firstQuarter":"Cuarto creciente","moon.waxingGibbous":"Gibosa creciente","moon.full":"Llena","moon.waningGibbous":"Gibosa menguante","moon.lastQuarter":"Cuarto menguante","moon.waningCrescent":"Menguante","body.Sun":"Sol","body.Moon":"Luna","body.Mercury":"Mercurio","body.Venus":"Venus","body.Mars":"Marte","body.Jupiter":"Júpiter","body.Saturn":"Saturno","body.Uranus":"Urano","body.Neptune":"Neptuno","body.Pluto":"Plutón","type.G":"Galaxia","type.GPair":"Par de galaxias","type.GTrpl":"Triplete de galaxias","type.GGroup":"Grupo de galaxias","type.PN":"Nebulosa planetaria","type.OCl":"Cúmulo abierto","type.GCl":"Cúmulo globular","type.Cl+N":"Cúmulo con nebulosa","type.*":"Estrella","type.Nova":"Nova","review.unknown":"—","type.HII":"Región H II","type.DrkN":"Nebulosa oscura","type.EmN":"Nebulosa de emisión","type.Neb":"Nebulosa","type.RfN":"Nebulosa de reflexión","type.SNR":"Remanente de supernova","type.Star":"Estrella","type.**":"Estrella doble","type.*Ass":"Asociación de estrellas","type.Other":"Otro","credits.title":"De dónde viene todo esto","credits.open":"Fuentes y créditos","credits.stars":"Estrellas: base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Cielo profundo: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figuras y nombres de constelaciones: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sol, Luna y planetas: astronomy-engine, Don Cross — MIT","credits.accuracy":"Las posiciones de los planetas se compararon con JPL Horizons para 2026-09-09: los cinco cuerpos probados coinciden dentro de 11 segundos de arco.","credits.derived":"El archivo de catálogo que se incluye es obra derivada de dos bases CC BY-SA 4.0, así que ese archivo también es CC BY-SA 4.0. El código es MIT.","gest.open":"Ajustes de gestos","gest.title":"Gestos","gest.asking":"Pidiendo los gestos a Mnemosyne…","gest.granted":"Gestos activos.","gest.refused":"Gestos desactivados: {why}","gest.speeds":"Velocidad","gest.reset":"Volver a 1×","gest.loading":"Leyendo tus ajustes…","gest.unsaved":"Aplicado, pero no guardado: {why}","gest.os":"Lo gestiona Mnemosyne","gest.osFull":"Dedos juntos, luego separados → pantalla completa","gest.osClose":"Puño cerrado, mantener → cerrar la ventana","gest.osWindow":"Pellizcar la esquina de una ventana → moverla","gest.close":"Cerrar","gest.lead":"Pon Cosmos en pantalla completa y tus manos recorren el cielo.","gest.speed.move":"Desplazar","gest.speed.zoom":"Acercar","gest.inApp":"En Cosmos","gest.pan":"Pellizcar y mover → deslizar el cielo","gest.depth":"Pellizcar, mano hacia la cámara → acercarse","gest.zoom":"Pellizcar con las dos manos → zoom","gest.recenter":"Manos abiertas, quietas → volver a la vista inicial","gest.select":"Pellizcar y mantener en un punto → abrir ese objeto"},Ob={en:Vx,fr:Ub,es:Fb,de:{},pt:{},ru:{},zh:{}};function Hx(t){return typeof t=="string"&&Ib.includes(t)}function Wx(t,e,n){var r;const i=((r=Ob[t])==null?void 0:r[e])??Vx[e];return n?i.replace(/\{(\w+)\}/g,(s,o)=>o in n?String(n[o]):s):i}function kb(){var t;try{const e=new URLSearchParams(window.location.search).get("lang"),n=(t=e==null?void 0:e.split("-")[0])==null?void 0:t.toLowerCase();if(Hx(n))return n}catch{}return"en"}function _u(){const[t,e]=Se.useState(kb);return Se.useEffect(()=>A_(n=>{var r,s;const i=(s=(r=n.lang)==null?void 0:r.split("-")[0])==null?void 0:s.toLowerCase();Hx(i)&&e(i)},{apply:!1}),[]),{lang:t,t:(n,i)=>Wx(t,n,i)}}const zb=new Ua("@mnemosyne-plugins/mnemo-cosmos"),Bb="No Mnemosyne host";function Gb({object:t}){const{t:e}=_u(),[n,i]=Se.useState({kind:"idle"}),r=Se.useRef(null);if(Se.useEffect(()=>{i({kind:"idle"}),r.current=null},[t==null?void 0:t.id]),Se.useEffect(()=>()=>{r.current=null},[]),!t)return null;const s=async()=>{const o=t.id;r.current=o,i({kind:"asking"});try{const a=await zb.query(zy(t));if(r.current!==o)return;const l=((a==null?void 0:a.text)??(a==null?void 0:a.response)??(a==null?void 0:a.content)??(a==null?void 0:a.answer)??"").trim();if((a==null?void 0:a.success)===!1){i({kind:"failed",message:a.error||e("memory.noReason")});return}if(!l||/NOTHING IN MEMORY/i.test(l)){i({kind:"empty"});return}i({kind:"answered",text:l})}catch(a){if(r.current!==o)return;const l=a instanceof Error?a.message:String(a);console.warn("[cosmos] memory query failed:",l),i(l.includes(Bb)?{kind:"no-host"}:{kind:"failed",message:l})}};return R.jsxs("div",{className:"memory-panel",children:[R.jsx("h3",{children:e("memory.title")}),n.kind==="idle"&&R.jsxs(R.Fragment,{children:[R.jsx("button",{type:"button",className:"btn btn-accent",onClick:s,children:e("memory.ask")}),R.jsx("p",{className:"note",children:e("memory.note")})]}),n.kind==="asking"&&R.jsx("p",{className:"note busy",role:"status",children:e("memory.reading")}),n.kind==="answered"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"memory-answer",children:n.text}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="empty"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note",children:e("memory.nothing",{name:t.name})}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="no-host"&&R.jsx("p",{className:"note",children:e("memory.outside")}),n.kind==="failed"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note error",role:"alert",children:e("memory.failed",{why:n.message})}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.tryAgain")})]})]})}const jx=[0,1,3,7,16,35],xu=jx.length-1;function yu(t){return Math.floor(t/864e5)}const $c=()=>({v:1,cards:{}});function Vb(t){if(!t||typeof t!="object")return $c();const e=t;if(e.v!==1||!e.cards||typeof e.cards!="object")return $c();const n={};for(const[r,s]of Object.entries(e.cards)){const o=s;typeof(o==null?void 0:o.b)!="number"||typeof(o==null?void 0:o.d)!="number"||typeof(o==null?void 0:o.n)!="number"||!Number.isFinite(o.b)||!Number.isFinite(o.d)||!Number.isFinite(o.n)||(n[r]={b:Math.min(xu,Math.max(0,Math.round(o.b))),d:Math.round(o.d),n:Math.round(o.n)})}const i=typeof e.best=="number"&&Number.isFinite(e.best)&&e.best>=0?Math.round(e.best):void 0;return i===void 0?{v:1,cards:n}:{v:1,cards:n,best:i}}function Hb(t,e,n){const i=((t==null?void 0:t.n)??0)+1,r=e?Math.min(xu,Math.max(1,((t==null?void 0:t.b)??0)+1)):0;return{b:r,d:yu(n)+jx[r],n:i}}function Wb(t,e){const n=yu(e),i=Object.values(t.cards);return{seen:i.length,due:i.filter(r=>r.d<=n).length,mastered:i.filter(r=>r.b>=xu).length}}function jb(t){let e=t>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Xb(t,e,n){const i=t.slice(),r=[];for(;r.length<e&&i.length;)r.push(i.splice(Math.floor(n()*i.length),1)[0]);return r}function $b(t,e,n,i,r=4,s=new Set){if(t.length<2)return null;const o=yu(n),a=jb(i),l=t.filter(E=>!s.has(E.id)),c=l.length?l:t,d=c.filter(E=>{const T=e.cards[E.id];return T&&T.d<=o}),f=c.filter(E=>!e.cards[E.id]),u=c.filter(E=>e.cards[E.id]&&e.cards[E.id].d>o).sort((E,T)=>e.cards[E.id].d-e.cards[T.id].d),p=d.length?d:f.length?f:u,g=p[Math.floor(a()*p.length)],x=E=>E.trim().toLowerCase(),v=t.filter(E=>E.id!==g.id),h=[v.filter(E=>E.group===g.group),v.filter(E=>E.group!==g.group&&E.kind===g.kind),v.filter(E=>E.group!==g.group&&E.kind!==g.kind)],m=Math.min(r-1,t.length-1),_=new Set([x(g.name)]),M=[];for(const E of h)for(const T of Xb(E,E.length,a)){if(M.length>=m)break;_.has(x(T.name))||(_.add(x(T.name)),M.push(T))}const b=[g,...M];for(let E=b.length-1;E>0;E--){const T=Math.floor(a()*(E+1));[b[E],b[T]]=[b[T],b[E]]}return{subject:g,options:b}}const o1=256*1024,qb=.8;function Yb(t){const e=new TextEncoder().encode(JSON.stringify(t)).length;return{bytes:e,ratio:e/o1,tight:e>=o1*qb}}const Id=12;function a1(t){const e=t.slice(0,Id).map(n=>`- ${n.name} (${n.group}, ${n.id})${n.n>1?` — asked ${n.n} times`:""}`);return t.length>Id&&e.push(`- and ${t.length-Id} more`),e.join(`
`)}function Kb(t,e){if(!t.length)return null;const n=t.filter(o=>o.correct),i=t.filter(o=>!o.correct),s=[`Sky review session — ${new Date(e.now).toISOString().slice(0,10)}`,"",`Reviewed ${t.length} object${t.length===1?"":"s"} from ${e.family} (${e.source}). ${n.length} recalled, ${i.length} missed.`];return i.length&&s.push("","Missed:",a1(i)),n.length&&s.push("","Recalled:",a1(n)),s.push("","Missed objects are scheduled to come back tomorrow; recalled ones move to a longer interval. Objects are identified by their catalogue designation — Hipparcos, Henry Draper, NGC or IC — which is stable across languages, spellings and sources."),s.join(`
`)}const Zb="SKY_STUDY",Qb=4,Jb=new Set(["G","GPair","GTrpl","GGroup"]),e5=new Set(["OCl","GCl","Cl+N"]),t5=new Set(["PN","HII","DrkN","EmN","Neb","RfN","SNR"]),n5=2.5;function up(t,e){const n=o=>{const a=wa(o);return{id:Fa(o),name:a.name,group:o.con||"sky",kind:"star"}},i=o=>{const a=Ta(o);return{id:Oa(o),name:a.name,group:o.type||"sky",kind:"dso"}},r=t.stars.filter(o=>o.proper),s=t.stars.filter(o=>o.mag<=n5&&(o.proper||o.desig));switch(e){case"messier":return t.dsos.filter(o=>o.messier).map(i);case"namedStars":return r.map(n);case"brightStars":return s.map(n);case"galaxies":return t.dsos.filter(o=>Jb.has(o.type)&&(o.common||o.messier)).map(i);case"clusters":return t.dsos.filter(o=>e5.has(o.type)&&(o.common||o.messier)).map(i);case"nebulae":return t.dsos.filter(o=>t5.has(o.type)&&(o.common||o.messier)).map(i);case"all":default:{const o=new Set,a=[];for(const l of[...r.map(n),...t.dsos.filter(c=>c.common||c.messier).map(i)])o.has(l.id)||(o.add(l.id),a.push(l));return a}}}const i5=["all","messier","namedStars","brightStars","galaxies","clusters","nebulae"];function r5(t){const e=i5.map(r=>({id:r,total:up(t,r).length})),n=e.find(r=>r.id==="all"),i=e.filter(r=>r.id!=="all"&&r.total>0).sort((r,s)=>s.total-r.total);return[n,...i]}function s5(t,e,n,i){const r=yu(i),s=up(e,t.id).map(c=>c.id);let o=0,a=0,l=0;for(const c of s){const d=n.cards[c];d&&(o++,d.b>=xu&&a++,d.d<=r&&l++)}return{studied:o,mastered:a,due:l,ratio:s.length?a/s.length:0}}function l1(t){return t.total>=Qb?{ok:!0,n:t.total}:{ok:!1,why:t.total===0?"empty":"tooSmall",n:t.total}}const o5=[5,10,50,null];function a5(t){return t===null?null:String(t)}const l5=(t,e)=>({length:t,answers:[],streak:0,bestStreak:0,startedAt:e});function c5(t,e){const n=e.correct?t.streak+1:0;return{...t,answers:[...t.answers,e],streak:n,bestStreak:Math.max(t.bestStreak,n)}}function u5(t){return t.ended?!0:t.length!==null&&t.answers.length>=t.length}const d5=t=>({...t,ended:!0});function f5(t,e){const n=t.answers.filter(i=>i.correct).length;return{asked:t.answers.length,right:n,accuracy:t.answers.length?n/t.answers.length:null,bestStreak:t.bestStreak,elapsedMs:Math.max(0,e-t.startedAt),missed:t.answers.filter(i=>!i.correct)}}function c1(t){return t===null?null:t===1?"Perfect":t>=.9?"Excellent":t>=.75?"Solid":t>=.5?"Getting there":"Worth another pass"}function h5(t){const e=Math.floor(t/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}const Ud=new Ua("@mnemosyne-plugins/mnemo-cosmos"),u1="review",p5={Perfect:"rank.perfect",Excellent:"rank.excellent",Solid:"rank.solid","Getting there":"rank.getting","Worth another pass":"rank.again"};function m5({catalog:t,onMark:e,onLookAt:n,onHideLabel:i,onClose:r}){const{t:s}=_u(),[o,a]=Se.useState({kind:"loading"}),[l,c]=Se.useState(null),[d,f]=Se.useState(null),[u,p]=Se.useState(null),[g,x]=Se.useState(null),[v,h]=Se.useState({kind:"idle"}),m=Se.useRef(!0);Se.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]);const M=(Q=>Q.kind==="loading"?$c():Q.state)(o),b=r5(t),E=!!d&&u5(d),T=Se.useMemo(()=>{const Q=new Map;for(const de of t.stars)Q.set(Fa(de),{ra:de.ra,dec:de.dec});for(const de of t.dsos)Q.set(Oa(de),{ra:de.ra,dec:de.dec});return Q},[t]),y=Se.useCallback(Q=>T.get(Q)??null,[T]),C=Q=>s(`family.${Q.id}`),L=Q=>{const de=l1(Q);return de.ok?"":s(de.why==="empty"?"review.empty":"review.tooSmall",{n:de.n})};Se.useEffect(()=>{let Q=!1;return lp().then(de=>{Q||!m.current||a({kind:"ready",state:Vb(de[u1])})}).catch(de=>{if(Q||!m.current)return;const ye=de instanceof Error?de.message:String(de);console.warn("[cosmos] review state unavailable:",ye),a({kind:"unsaved",state:$c(),why:ye.includes("No Mnemosyne host")?s("review.noHost"):s("review.noLoad")})}),()=>{Q=!0}},[]),Se.useEffect(()=>()=>{e(null),i(null)},[e,i]);const N=Q=>{if(o.kind==="loading"){console.warn("[cosmos] review answer before the schedule was read: not written");return}if(o.kind==="unsaved"){a({...o,state:Q});return}a({kind:"ready",state:Q}),Dx(u1,Q).catch(de=>{const ye=de instanceof Error?de.message:String(de);console.warn("[cosmos] review state not saved:",ye),m.current&&a({kind:"unsaved",state:Q,why:s("review.noLoad")})})},O=Se.useCallback((Q,de,ye)=>{const V=$b(up(t,Q.id),de,Date.now(),Math.random()*2147483648|0,4,ye);x(null),p(V);const ae=V?y(V.subject.id):null;e(ae),ae&&n(ae),i(V?V.subject.id:null)},[t,e,n,i,y]),Z=Q=>{l&&(h({kind:"idle"}),f(l5(Q,Date.now())),O(l,M,new Set))},ne=()=>{c(null),f(null),p(null),x(null),e(null),i(null)},I=Q=>{if(!u||g||!d)return;const de=Q.id===u.subject.id;x({picked:Q.id,correct:de}),i(null);const ye=y(u.subject.id);ye&&e({...ye,label:u.subject.name});const V=Hb(M.cards[u.subject.id],de,Date.now()),ae=c5(d,{...u.subject,correct:de,n:V.n});f(ae),h({kind:"idle"});const ce=Math.max(M.best??0,ae.bestStreak);N({v:1,cards:{...M.cards,[u.subject.id]:V},best:ce})},W=async()=>{var de;if(!d||!l)return;const Q=Kb(d.answers,{family:C(l),source:"HYG 4.1 and OpenNGC, in the Mnemosyne Cosmos cartridge",now:Date.now()});if(Q){h({kind:"busy"});try{const ye=await Ud.invoke("permissions.refresh",{permissions:["vault:write"]});if(((de=ye==null?void 0:ye.granted)==null?void 0:de["vault:write"])===!1){m.current&&h({kind:"failed",why:s("review.why.declined")});return}const{vault:V,unlocked:ae}=await Ud.ensureSandbox();await Ud.socialIngest(V,Q,Zb),m.current&&h({kind:"done",vault:V,unlocked:ae})}catch(ye){const V=ye instanceof Error?ye.message:String(ye);if(console.warn("[cosmos] run not written to memory:",V),!m.current)return;h({kind:"failed",why:V.includes("No Mnemosyne host")?s("review.why.noHost"):/permission/i.test(V)?s("review.why.noPermission"):V})}}},k=o.kind==="ready"||Object.keys(M.cards).length>0,U=o.kind!=="loading"&&k?Wb(M,Date.now()):null,Y=o.kind!=="loading"?Yb(M):null,G=d?f5(d,Date.now()):null,q=s("review.unknown"),X=l?d?E?"results":"run":"length":"families";return R.jsxs("section",{className:"review-panel panel","aria-label":s("review.title"),children:[R.jsxs("header",{className:"panel-head",children:[l?R.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:ne,children:["← ",C(l)]}):R.jsx("h2",{children:s("review.title")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:r,"aria-label":s("review.close"),children:"✕"})]}),o.kind==="unsaved"&&R.jsx("p",{className:"note warn",role:"status",children:s("review.unsaved",{why:o.why})}),(Y==null?void 0:Y.tight)&&R.jsx("p",{className:"note warn",children:s("review.tight",{pct:Math.round(Y.ratio*100)})}),X==="families"&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"review-totals",children:[R.jsxs("span",{children:[R.jsx("b",{children:U?U.seen:q})," ",s("review.studied")]}),R.jsxs("span",{children:[R.jsx("b",{children:U?U.due:q})," ",s("review.due")]}),R.jsxs("span",{children:[R.jsx("b",{children:U?U.mastered:q})," ",s("review.mastered")]}),R.jsxs("span",{children:[R.jsx("b",{children:M.best??q})," ",s("review.best")]})]}),R.jsx("p",{className:"note",children:s("review.pick")}),R.jsx("ul",{className:"family-list",children:b.map(Q=>{const de=l1(Q).ok,ye=s5(Q,t,M,Date.now());return R.jsx("li",{children:R.jsxs("button",{type:"button",className:"family-tile",disabled:!de||o.kind==="loading",onClick:()=>c(Q),children:[R.jsx("span",{className:"family-name",children:C(Q)}),R.jsx("span",{className:"family-count",children:Q.total}),de?R.jsx("span",{className:"family-progress",children:U?`${ye.mastered} / ${Q.total}`:q}):R.jsx("span",{className:"family-refusal",children:L(Q)})]})},Q.id)})})]}),X==="length"&&l&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note",children:s("review.scope",{n:l.total,level:C(l)})}),R.jsx("h3",{children:s("review.howMany")}),R.jsx("div",{className:"length-row",children:o5.map(Q=>R.jsx("button",{type:"button",className:"btn",onClick:()=>Z(Q),children:a5(Q)??s("review.endless")},String(Q)))})]}),X==="run"&&u&&d&&R.jsxs(R.Fragment,{children:[R.jsxs("p",{className:"run-count",children:[d.answers.length+1,d.length===null?"":` / ${d.length}`]}),R.jsx("h3",{children:s("review.question")}),R.jsx("ul",{className:"option-list",children:u.options.map(Q=>{const de=g?Q.id===u.subject.id?" right":Q.id===g.picked?" wrong":"":"";return R.jsx("li",{children:R.jsxs("button",{type:"button",className:`option${de}`,onClick:()=>I(Q),disabled:!!g,children:[R.jsx("span",{className:"option-name",children:Q.name}),R.jsx("span",{className:"option-id",children:Q.id})]})},Q.id)})}),g&&R.jsxs("div",{className:"answer-row",children:[R.jsxs("p",{children:[s("review.answerIs")," ",R.jsx("b",{children:u.subject.name})," · ",R.jsx("code",{children:u.subject.id})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>{const Q=y(u.subject.id);Q&&n(Q)},children:s("card.centre")}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>O(l,M,new Set(d.answers.map(Q=>Q.id))),children:s("review.next")}),d.length===null&&R.jsx("button",{type:"button",className:"btn",onClick:()=>f(d5(d)),children:s("review.finishHere")})]})]})]}),X==="run"&&!u&&R.jsx("p",{className:"note",children:s("review.empty")}),X==="results"&&G&&d&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"results",children:[R.jsxs("span",{children:[R.jsx("b",{children:G.accuracy===null?q:`${Math.round(G.accuracy*100)}%`}),s("review.accuracy")]}),R.jsxs("span",{children:[R.jsx("b",{children:G.bestStreak}),s("review.best")]}),R.jsxs("span",{children:[R.jsx("b",{children:h5(G.elapsedMs)}),s("review.time")]})]}),c1(G.accuracy)&&R.jsx("p",{className:"rank",children:s(p5[c1(G.accuracy)])}),G.bestStreak>0&&G.bestStreak>=(M.best??0)&&R.jsx("p",{className:"note",children:s("review.record")}),G.missed.length>0&&R.jsxs(R.Fragment,{children:[R.jsx("h3",{children:s("review.comeBack")}),R.jsxs("ul",{className:"missed",children:[G.missed.slice(0,12).map(Q=>R.jsxs("li",{children:[Q.name," ",R.jsx("code",{children:Q.id})]},Q.id)),G.missed.length>12&&R.jsx("li",{children:s("review.andMore",{n:G.missed.length-12})})]})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>{f(null),p(null),e(null),i(null)},children:s("review.again")}),R.jsx("button",{type:"button",className:"btn",onClick:ne,children:s("review.another")}),v.kind!=="done"&&R.jsx("button",{type:"button",className:"btn btn-accent",onClick:W,disabled:v.kind==="busy"||d.answers.length===0,children:v.kind==="busy"?s("review.saving"):s("review.save")})]}),v.kind==="done"&&R.jsx("p",{className:"note ok",role:"status",children:s(v.unlocked?"review.saved":"review.savedLocked",{vault:v.vault})}),v.kind==="failed"&&R.jsx("p",{className:"note error",role:"alert",children:v.why})]})]})}const g5=t=>`${Number.isInteger(t)?t:t.toFixed(2).replace(/0$/,"")}×`;function v5({open:t,onClose:e,words:n,speedRows:i,appRows:r,osRows:s}){const o=Se.useSyncExternalStore(n1,oc),a=Se.useSyncExternalStore(n1,wb),l=Se.useSyncExternalStore(Cb,bb),c=Se.useRef(null);if(Se.useEffect(()=>{Tb()},[]),Se.useEffect(()=>{var u;if(!t)return;(u=c.current)==null||u.focus();const f=p=>{p.key==="Escape"&&e()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e]),!t)return null;const d=l.kind==="granted"?n.granted:l.kind==="refused"?n.refused(l.why):n.asking;return R.jsx("div",{className:"gx-scrim",onPointerDown:f=>{f.target===f.currentTarget&&e()},children:R.jsxs("section",{className:"gx-panel",role:"dialog","aria-modal":"true","aria-label":n.title,children:[R.jsxs("header",{className:"gx-head",children:[R.jsx("h2",{children:n.title}),R.jsx("button",{ref:c,type:"button",className:"gx-close",onClick:e,"aria-label":n.close,children:"✕"})]}),R.jsx("p",{className:"gx-lead",children:n.lead}),R.jsx("p",{className:`gx-status ${l.kind}`,role:"status",children:d}),R.jsx("h3",{children:n.speeds}),a.kind==="loading"&&R.jsx("p",{className:"gx-note",children:n.loading}),i.map(f=>R.jsxs("label",{className:"gx-speed",children:[R.jsxs("span",{className:"gx-speed-head",children:[R.jsx("span",{children:f.label}),R.jsx("span",{className:"gx-speed-value",children:g5(o[f.key])})]}),R.jsx("input",{type:"range",min:Ix,max:Ux,step:Mb,value:o[f.key],onChange:u=>kl(f.key,Number(u.target.value),{save:!1}),onPointerUp:u=>kl(f.key,Number(u.currentTarget.value)),onKeyUp:u=>kl(f.key,Number(u.currentTarget.value)),onBlur:u=>kl(f.key,Number(u.currentTarget.value))})]},f.key)),R.jsx("button",{type:"button",className:"gx-reset",onClick:Ab,children:n.reset}),a.kind==="unsaved"&&R.jsx("p",{className:"gx-note warn",role:"alert",children:n.unsaved(a.why)}),R.jsx("h3",{children:n.inApp}),R.jsx("ul",{className:"gx-list",children:r.map(f=>R.jsxs("li",{children:[R.jsx("span",{"aria-hidden":!0,children:f.icon}),f.text]},f.text))}),R.jsx("h3",{children:n.os}),R.jsx("ul",{className:"gx-list",children:s.map(f=>R.jsxs("li",{children:[R.jsx("span",{"aria-hidden":!0,children:f.icon}),f.text]},f.text))})]})})}const Ra=2,_5=20,Xx=40;function dp(t,e,n){const i=n.trim().toLowerCase();if(i.length<Ra)return[];const r=[],s=o=>o.name.toLowerCase().includes(i)||o.id.toLowerCase().includes(i)||o.aliases.some(a=>a.toLowerCase().includes(i));for(const o of e)s(o)&&r.push(o);for(const o of t.stars){if(r.length>=_5)break;const a=wa(o);s(a)&&r.push(a)}for(const o of t.dsos){if(r.length>=Xx)break;const a=Ta(o);s(a)&&r.push(a)}return r}const q0="mnemo-cosmos.place";function Y0(t){try{return t?localStorage.setItem(q0,JSON.stringify(t)):localStorage.removeItem(q0),!0}catch(e){return console.warn("[cosmos] place not stored:",e),!1}}function to(t){return t.normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/œ/g,"oe").replace(/æ/g,"ae")}const x5=new Set(["le","la","les","l","un","une","des","de","du","d","mon","ma","mes","ce","cette","ces","et","en","au","aux","à","the","a","an","of","my","and","el","los","las","del","mi","y","étoile","étoiles","star","stars","estrella","estrellas","planète","planètes","planet","planets","planeta","planetas","constellation","constellations","constelación","constelaciones","objet","object","objeto"]);function _i(t){return t.normalize("NFC").toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(e=>e&&!x5.has(e)).map(e=>to(e)).map(e=>e.length>3?e.replace(/[sx]$/,""):e)}const Fd=12,lc=t=>{const e=[...new Set(t)];return e.length>Fd?`${e.slice(0,Fd).join(", ")} (+${e.length-Fd})`:e.join(", ")};function y5(t,e,n){const i=e.trim();if(!i)throw new Error(`BAD_ARG: name the ${n.noun}`);const r=t.filter(d=>d.id.toLowerCase()===i.toLowerCase());if(r.length===1)return r[0].item;const s=_i(i),o=t.map(d=>d.label);if(!s.length)throw new Error(`${n.code}: "${i}" names no ${n.noun}; ${n.noun}s: ${lc(o)||"none"}`);const a=s.join(" "),l=t.filter(d=>d.names.some(f=>_i(f).join(" ")===a));if(l.length===1)return l[0].item;const c=l.length>1?l:t.filter(d=>{const f=new Set(d.names.flatMap(_i));return s.every(u=>f.has(u))});if(c.length===1)return c[0].item;throw c.length>1?new Error(`AMBIGUOUS: "${i}" names several ${n.noun}s: ${lc(c.map(d=>d.label))}; say which`):new Error(`${n.code}: no ${n.noun} named "${i}"; ${n.noun}s: ${lc(o)||"none"}`)}const K0=["search","place","credits","review"],Od=["card",...K0],S5=45,Bo={min:1,max:40,default:10},zl={min:1e3,max:3e3},d1=876600,kd=["figures","constellationNames","starNames","deepSky","planets","grid"],Pi=t=>typeof t=="string"?t.trim():"",Ps=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function zd(t){return{id:t.id,name:t.name,kind:t.kind,constellation:t.con||null,magnitude:t.mag}}function M5(t){if(t==null)return Bo.default;if(typeof t!="number"||!Number.isInteger(t)||t<Bo.min||t>Bo.max)throw new Error(`BAD_ARG: limit must be a whole number from ${Bo.min} to ${Bo.max}`);return t}const E5=["en","fr","es"];function w5(t){return t.map(e=>({...e,aliases:[...new Set([...e.aliases,e.id,...E5.map(n=>Wx(n,`body.${e.id}`))])]}))}const T5={nebuleuse:"nebula",nebulosa:"nebula",galaxie:"galaxy",galaxia:"galaxy",ama:"cluster",cumulo:"cluster",nuage:"cloud",nube:"cloud",crabe:"crab",cangrejo:"crab",polaire:"polari",polar:"polari"};function A5(t,e){let n=_i(t).map(i=>T5[i]??i);for(const i of e){const r=_i(i.name);for(const s of[i.i18n.fr,i.i18n.es].filter(o=>!!o).map(_i))if(!(!s.length||s.join(" ")===r.join(" "))){for(let o=0;o+s.length<=n.length;o++)if(s.every((a,l)=>n[o+l]===a)){n=[...n.slice(0,o),...r,...n.slice(o+s.length)];break}}}return n}const Bl=t=>[t.id,t.name,...t.aliases];function b5(t,e,n,i=[]){const r=to(n.trim());if(r.length<Ra)throw new Error(`BAD_ARG: name an object with at least ${Ra} characters`);const s=w5(e),o=[],a=f=>Bl(f).some(u=>to(u)===r);for(const f of s)a(f)&&o.push(f);for(const f of t.stars){const u=wa(f);a(u)&&o.push(u)}for(const f of t.dsos){const u=Ta(f);a(u)&&o.push(u)}const l=o.filter(f=>to(f.id)===r);if(l.length===1)return l[0];let c=o;if(!c.length){const f=[...s,...t.dsos.map(Ta),...t.stars.filter(p=>p.proper).map(wa)],u=_i(n).join(" ");if(u&&(c=f.filter(p=>Bl(p).some(g=>_i(g).join(" ")===u))),c.length||(c=dp(t,e,n)),!c.length){const p=A5(n,i);if(p.length){const g=p.join(" ");c=f.filter(x=>Bl(x).some(v=>_i(v).join(" ")===g)),c.length||(c=f.filter(x=>{const v=new Set(Bl(x).flatMap(_i));return p.every(h=>v.has(h))}))}}}if(c.length===1)return c[0];if(!c.length){const f=e.length?`bodies on screen: ${lc(e.map(u=>u.id))}`:"the planets layer is off, so no Sun, Moon or planet";throw new Error(`NO_OBJECT: no object in the sky named "${n}"; name it in English or by its key (Andromeda Galaxy, M31, NGC 224, Sirius, HIP 32349); ${f}`)}const d=c.slice(0,10).map(f=>`${f.id} (${f.name})`).join(", ");throw new Error(`AMBIGUOUS: "${n}" names several objects: ${d}${c.length>10?`, … (${c.length})`:""}; say which, by key`)}function C5(t,e){const n=t.map(i=>({item:i,id:i.id,names:[i.name,i.genitive,...Object.values(i.i18n)],label:i.i18n.fr&&to(i.i18n.fr)!==to(i.name)?`${i.name} (${i.i18n.fr})`:i.name}));return y5(n,e,{code:"NO_CONSTELLATION",noun:"constellation"})}function R5(t,e,n,i=()=>new Date){if(t&&e!==null)throw new Error("BAD_ARG: give at or shiftHours, not both");if(!t&&e===null)throw new Error("MISSING_ARG: setTime needs at or shiftHours");let r;if(t){if(r=t.toLowerCase()==="now"?i():new Date(t),Number.isNaN(r.getTime()))throw new Error(`BAD_ARG: "${t}" is not a date; use ISO 8601 (2026-08-12T21:30:00Z) or "now"`)}else{if(Math.abs(e)>d1)throw new Error(`BAD_ARG: shiftHours must be within ±${d1}`);r=new Date(n.getTime()+e*36e5)}const s=r.getUTCFullYear();if(s<zl.min||s>zl.max)throw new Error(`OUTSIDE: the sky is shown from ${zl.min} to ${zl.max}`);return r}function P5(t){if(t.reviewing)throw new Error("REVIEWING: a review is open and the sky is its question; ask again when it is closed")}function N5(t){return{status:()=>{const e=t();return{when:e.when.toISOString(),place:e.place,look:{ra:e.look.ra,dec:e.look.dec,fov:e.look.fov},layers:e.layers,faintestPossible:e.catalog.truncation.magLimit,selected:e.selected?zd(e.selected):null,reviewing:e.reviewing,catalogue:{stars:e.catalog.stars.length,deepSky:e.catalog.dsos.length}}},search:e=>{const n=t(),i=M5(e.limit),r=Pi(e.text);if(r.length<Ra)throw new Error(`BAD_ARG: text needs at least ${Ra} characters`);const s=dp(n.catalog,n.bodies,r);return{found:s.length,capped:s.length>=Xx,objects:s.slice(0,i).map(zd)}},goTo:e=>{const n=t();P5(n);const i=b5(n.catalog,n.bodies,Pi(e.object),n.constellations);return n.goTo(i),{shown:zd(i)}},setTime:e=>{const n=t(),i=R5(Pi(e.at),Ps(e.shiftHours),n.when);return n.setWhen(i),{when:i.toISOString()}},setPlace:e=>{const n=t(),i=Ps(e.latitude),r=Ps(e.longitude),s=Ps(e.elevation),o=q_(i===null?"":String(i),r===null?"":String(r),s===null?"":String(s),Pi(e.label));if(!o.ok)throw new Error(`BAD_ARG: ${o.why} is out of range (latitude -90..90, longitude -180..180, elevation -500..9000 m)`);n.setPlace(o.place);const a=Y0(o.place);return{place:o.place,kept:a}},setLayers:e=>{const n=t();if(!kd.some(s=>typeof e[s]=="boolean")&&e.magLimit===void 0)throw new Error(`MISSING_ARG: give at least one of ${kd.join(", ")}, magLimit`);const i={...n.layers};for(const s of kd)typeof e[s]=="boolean"&&(i[s]=e[s]);const r=Ps(e.magLimit);if(r!==null){const s=n.catalog.truncation.magLimit;if(r<1||r>s)throw new Error(`BAD_ARG: magLimit must be from 1 to ${s}, the faintest star in the catalogue`);i.magLimit=r}return n.setLayers(i),{layers:i}},setView:e=>{const n=t();if(e.reset===!0)return n.setLook(n.defaultLook),{look:n.defaultLook};let i=n.look;if(e.centreOnSelected===!0){if(!n.selected)throw new Error("NOTHING_SELECTED: no object card is open. Use goTo first");i=sa(i,n.selected.ra,n.selected.dec)}const r=Ps(e.fov),s=Pi(e.zoom);if(s&&s!=="in"&&s!=="out")throw new Error("BAD_ARG: zoom must be in or out");if(s&&r!==null)throw new Error("BAD_ARG: give fov or zoom, not both");if(s){const o=Math.min(ra,Math.max(ia,s==="in"?i.fov/2:i.fov*2));if(o===i.fov)throw new Error(`AT_LIMIT: the field is already ${s==="in"?"the narrowest":"the widest"} (${o} degrees)`);i={...i,fov:o}}if(r!==null){if(r<ia||r>ra)throw new Error(`BAD_ARG: fov must be from ${ia} to ${ra} degrees`);i={...i,fov:r}}if(i===n.look)throw new Error("MISSING_ARG: setView needs reset, centreOnSelected, zoom or fov");return n.setLook(i),{look:i}},showConstellation:e=>{const n=t(),i=C5(n.constellations,Pi(e.constellation));if(!i.label)throw new Error(`NO_POSITION: ${i.name} has no position to turn to`);const r={...sa(n.look,i.label[0],i.label[1]),fov:Math.max(n.look.fov,S5)};return n.setLook(r),{shown:{id:i.id,name:i.name},figures:n.layers.figures,look:r}},showPanel:e=>{const n=t(),i=Pi(e.panel),r=Pi(e.text);if(!K0.includes(i))throw new Error(`BAD_ARG: panel must be ${K0.join(", ")}`);if(r&&i!=="search")throw new Error("BAD_ARG: text goes with the search panel only");return i==="review"?n.openReview():(i!=="place"&&n.reviewing&&n.closeReview(),n.setPanel(i==="credits"?"about":i),r&&n.setQuery(r)),{open:i,...r?{searched:r}:{}}},closePanel:e=>{const n=t(),i=Pi(e.panel);if(i&&!Od.includes(i))throw new Error(`BAD_ARG: panel must be ${Od.join(", ")}`);const r=o=>o==="card"?n.selected!==null:o==="review"?n.reviewing:n.panel===(o==="credits"?"about":o),s=(i?[i]:[...Od]).filter(r);if(!s.length)throw new Error(`NOTHING_OPEN: ${i?`the ${i} is not open`:"no panel and no object card is open"}`);for(const o of s)o==="card"?n.setSelected(null):o==="review"?n.closeReview():n.setPanel("none");return{closed:s}}}}const f1=new Ua(ap),L5=()=>typeof window<"u"&&window.parent!==window;function D5(t){const e=Se.useRef(t);return e.current=t,Se.useEffect(()=>{if(!L5())return;if(typeof f1.onAgentActions!="function"){console.warn("[Cosmos] this SDK build has no onAgentActions; reload the cartridge to serve agent actions");return}const n=f1.onAgentActions(N5(()=>e.current));return n.ready.catch(i=>console.warn("[Cosmos] agent actions not served:",i instanceof Error?i.message:i)),()=>n.off()},[]),null}const Gl={ra:90,dec:20,fov:65},I5={figures:!0,constellationNames:!0,deepSky:!0,planets:!0,starNames:!0,grid:!1,magLimit:6.5};function U5(){var Ve,Ie,Ce;const{t,lang:e}=_u(),[n,i]=Se.useState({kind:"reading"}),[r,s]=Se.useState(Gl),[o,a]=Se.useState(!1),[l,c]=Se.useState(I5),[d,f]=Se.useState(null),[u,p]=Se.useState(null),[g,x]=Se.useState(null),[v,h]=Se.useState(!1),[m,_]=Se.useState("none"),M=()=>{h(!0),_("none"),f(null)},b=()=>{h(!1),p(null),x(null)},E=ee=>{_(be=>be===ee?"none":ee),ee!=="place"&&h(!1)},[T,y]=Se.useState(""),[C,L]=Se.useState(()=>new Date),[N,O]=Se.useState(null),Z=Se.useRef(!0);Se.useEffect(()=>(Z.current=!0,()=>{Z.current=!1}),[]);const ne=Se.useCallback(()=>{i({kind:"reading"}),Promise.all([fetch(Om("catalog/catalog.bin"),{signal:AbortSignal.timeout(15e3)}).then(ee=>{if(!ee.ok)throw new Error(`catalog.bin → HTTP ${ee.status}`);return ee.arrayBuffer()}),fetch(Om("catalog/constellations.json"),{signal:AbortSignal.timeout(15e3)}).then(ee=>{if(!ee.ok)throw new Error(`constellations.json → HTTP ${ee.status}`);return ee.json()})]).then(([ee,be])=>{Z.current&&i({kind:"ready",catalog:Dy(ee),constellations:be.constellations})}).catch(ee=>{if(!Z.current)return;const be=ee instanceof Error?ee.message:String(ee);console.warn("[cosmos] catalogue not read:",be),i({kind:"failed",why:be})})},[]);Se.useEffect(ne,[ne]),Se.useEffect(()=>{try{const ee=localStorage.getItem(q0);if(!ee)return;const be=JSON.parse(ee);typeof be.latitude=="number"&&typeof be.longitude=="number"&&O({latitude:be.latitude,longitude:be.longitude,elevation:typeof be.elevation=="number"?be.elevation:0,label:typeof be.label=="string"?be.label:""})}catch(ee){console.warn("[cosmos] stored place not read:",ee)}},[]);const I=Se.useMemo(()=>l.planets?iM(C,N):[],[C,N,l.planets]),W=Se.useMemo(()=>oM(C),[C]),k=Se.useCallback(ee=>Iy(ee,e),[e]),U=Se.useCallback(ee=>t(`body.${ee}`),[t]),Y=Se.useCallback(ee=>s(be=>sa(be,ee.ra,ee.dec)),[]),G=Se.useCallback(ee=>({id:ee.body,name:t(`body.${ee.body}`),kind:"body",ra:ee.ra,dec:ee.dec,mag:ee.mag,con:"",aliases:[]}),[t]),q=Se.useCallback(ee=>{if(n.kind!=="ready"||v)return;if(!ee){f(null);return}if(ee.kind==="star"){f(wa(n.catalog.stars[ee.index]));return}if(ee.kind==="dso"){f(Ta(n.catalog.dsos[ee.index]));return}const be=I[ee.index];be&&f(G(be))},[n,I,G,v]),X=(d==null?void 0:d.kind)==="body"?I.find(ee=>ee.body===d.id)??null:null,Q=X?rM(X.body,C,N):null,de=Se.useMemo(()=>I.map(G),[I,G]),ye=Se.useMemo(()=>n.kind==="ready"?dp(n.catalog,de,T):[],[n,T,de]),V=ee=>{f(ee),s(be=>sa(be,ee.ra,ee.dec)),_("none")};if(n.kind==="reading")return R.jsx("main",{className:"boot",children:R.jsx("p",{role:"status",children:t("app.loading")})});if(n.kind==="failed")return R.jsxs("main",{className:"boot",children:[R.jsx("p",{role:"alert",children:t("app.failed",{why:n.why})}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:ne,children:t("app.retry")})]});const{catalog:ae,constellations:ce}=n,B=ae.truncation,ke=ae.dsos.filter(ee=>ee.messier).length;return R.jsxs("main",{className:"cosmos",children:[R.jsx(D5,{catalog:ae,bodies:de,look:r,setLook:s,defaultLook:Gl,layers:l,setLayers:c,when:C,setWhen:L,place:N,setPlace:O,selected:d,reviewing:v,goTo:V,constellations:ce,panel:m,setPanel:_,setQuery:y,setSelected:f,openReview:M,closeReview:b}),R.jsx(Db,{stars:ae.stars,dsos:ae.dsos,constellations:ce,bodies:I,layers:l,look:r,onLook:s,onPick:q,selected:d?{ra:d.ra,dec:d.dec}:null,quizTarget:u,hiddenLabel:g,constellationLabel:k,bodyLabel:U,onRecenter:()=>s(Gl)}),R.jsxs("header",{className:"topbar",children:[R.jsxs("div",{className:"brand",children:[R.jsx("span",{className:"eyebrow",children:t("app.eyebrow")}),R.jsx("strong",{children:"Cosmos"})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>E("search"),children:t("app.search")}),R.jsx("span",{className:"counts",children:t("app.objects",{stars:ae.stars.length,dsos:ae.dsos.length})}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>E("about"),children:t("credits.open")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>a(!0),"aria-label":t("gest.open"),title:t("gest.open"),children:"✋"}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:M,children:t("review.open")})]}),R.jsx(v5,{open:o,onClose:()=>a(!1),words:{title:t("gest.title"),lead:t("gest.lead"),asking:t("gest.asking"),granted:t("gest.granted"),refused:ee=>t("gest.refused",{why:ee}),speeds:t("gest.speeds"),reset:t("gest.reset"),loading:t("gest.loading"),unsaved:ee=>t("gest.unsaved",{why:ee}),inApp:t("gest.inApp"),os:t("gest.os"),close:t("gest.close")},speedRows:[{key:"move",label:t("gest.speed.move")},{key:"zoom",label:t("gest.speed.zoom")}],appRows:[{icon:"🤏",text:t("gest.pan")},{icon:"↕️",text:t("gest.depth")},{icon:"🤏🤏",text:t("gest.zoom")},{icon:"✋✋",text:t("gest.recenter")},{icon:"👌",text:t("gest.select")}],osRows:[{icon:"🖐️",text:t("gest.osFull")},{icon:"✊",text:t("gest.osClose")},{icon:"🤏",text:t("gest.osWindow")}]}),m==="search"&&R.jsxs("section",{className:"panel search-panel",children:[R.jsx("input",{autoFocus:!0,type:"search",value:T,placeholder:t("app.search"),onChange:ee=>y(ee.target.value)}),T.trim().length>=2&&ye.length===0&&R.jsx("p",{className:"note",children:t("app.noResults")}),R.jsx("ul",{className:"results",children:ye.map(ee=>R.jsx("li",{children:R.jsxs("button",{type:"button",onClick:()=>V(ee),children:[R.jsx("span",{children:ee.name}),R.jsx("code",{children:ee.id})]})},`${ee.kind}:${ee.id}`))})]}),R.jsxs("aside",{className:"controls panel",children:[R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.figures,onChange:ee=>c({...l,figures:ee.target.checked})})," ",t("sky.figures")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.constellationNames,onChange:ee=>c({...l,constellationNames:ee.target.checked})})," ",t("sky.names")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.starNames,onChange:ee=>c({...l,starNames:ee.target.checked})})," ",t("sky.starNames")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.deepSky,onChange:ee=>c({...l,deepSky:ee.target.checked})})," ",t("sky.deepSky")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.planets,onChange:ee=>c({...l,planets:ee.target.checked})})," ",t("sky.planets")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.grid,onChange:ee=>c({...l,grid:ee.target.checked})})," ",t("sky.grid")]}),R.jsxs("label",{className:"slider",children:[t("sky.magFilter")," ",R.jsx("b",{children:l.magLimit.toFixed(1)}),R.jsx("input",{type:"range",min:1,max:B.magLimit,step:.1,value:l.magLimit,onChange:ee=>c({...l,magLimit:Number(ee.target.value)})})]}),R.jsxs("label",{className:"slider",children:[t("sky.fov")," ",R.jsxs("b",{children:[Math.round(r.fov),"°"]}),R.jsx("input",{type:"range",min:ia,max:ra,step:1,value:Math.round(r.fov),onChange:ee=>s({...r,fov:Number(ee.target.value)})})]}),R.jsx("button",{type:"button",className:"btn",onClick:()=>s(Gl),children:t("sky.reset")})]}),R.jsx(F5,{when:C,setWhen:L,place:N,setPlace:O,open:m==="place",onToggle:()=>E("place")},N?`${N.latitude},${N.longitude},${N.elevation},${N.label}`:"none"),d&&R.jsxs("section",{className:`panel card-panel${v?" beside-review":""}`,children:[R.jsxs("header",{className:"panel-head",children:[R.jsxs("div",{children:[R.jsx("h2",{children:d.name}),R.jsx("code",{className:"key",children:d.id})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>f(null),"aria-label":t("app.close"),children:"✕"})]}),d.aliases.length>0&&R.jsxs("p",{className:"aliases",children:[R.jsx("span",{children:t("card.alsoKnown")})," ",d.aliases.join(" · ")]}),d.kind==="star"&&Fy(d.id)&&R.jsx("p",{className:"note warn",children:t("card.unstableId")}),R.jsxs("dl",{className:"facts",children:[R.jsx(an,{label:t("card.magnitude"),hint:t("card.magnitude.hint"),value:((Ve=(X==null?void 0:X.mag)??d.mag)==null?void 0:Ve.toFixed(2))??null}),d.star&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.absmag"),hint:t("card.absmag.hint"),value:((Ie=d.star.absmag)==null?void 0:Ie.toFixed(2))??null}),R.jsx(an,{label:t("card.distance"),value:Xy(d.star.dist)}),R.jsx(an,{label:t("card.spectral"),value:d.star.spect||null})]}),d.dso&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.type"),value:t(`type.${d.dso.type}`)||d.dso.type}),R.jsx(an,{label:t("card.size"),value:d.dso.majAx===null?null:`${d.dso.majAx.toFixed(1)}′${d.dso.minAx!==null?` × ${d.dso.minAx.toFixed(1)}′`:""}`})]}),X&&R.jsx(an,{label:t("card.au"),value:X.au===null?null:`${X.au.toFixed(3)} AU`}),d.id==="Moon"&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.phase"),value:t(`moon.${W.phase}`)}),R.jsx(an,{label:t("card.illuminated",{pct:Math.round(W.illuminated*100)}),value:" "})]}),R.jsx(an,{label:t("card.constellation"),value:d.con||null}),R.jsx(an,{label:d.kind==="body"?t("card.positionNow"):t("card.position"),value:`${Wy((X==null?void 0:X.ra)??d.ra)}  ${jy((X==null?void 0:X.dec)??d.dec)}`}),X&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.altitude"),value:X.altitude===null?null:`${X.altitude.toFixed(1)}°`}),R.jsx(an,{label:t("card.azimuth"),value:X.azimuth===null?null:`${X.azimuth.toFixed(1)}°`})]})]}),((Ce=d.star)==null?void 0:Ce.dist)===null&&R.jsx("p",{className:"note",children:t("card.noDistance")}),X&&!N&&R.jsx("p",{className:"note",children:t("card.noPlace")}),Q&&R.jsxs("dl",{className:"facts",children:[R.jsx(an,{label:t("card.rises"),value:Q.rise?Q.rise.toLocaleString():t("card.neverRises")}),R.jsx(an,{label:t("card.sets"),value:Q.set?Q.set.toLocaleString():t("card.neverSets")})]}),R.jsx("button",{type:"button",className:"btn",onClick:()=>s(sa(r,d.ra,d.dec)),children:t("card.centre")}),R.jsx(Gb,{object:d})]}),m==="about"&&R.jsxs("section",{className:"panel about-panel",children:[R.jsxs("header",{className:"panel-head",children:[R.jsx("h2",{children:t("trunc.title")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>_("none"),"aria-label":t("app.close"),children:"✕"})]}),R.jsx("p",{children:t("trunc.stars",{limit:B.magLimit.toFixed(1),kept:ae.stars.length,omitted:B.starsOmitted})}),R.jsx("p",{children:t("trunc.noDistance",{n:B.starsNoDistance})}),R.jsx("p",{children:t("trunc.dsos",{kept:ae.dsos.length,messier:ke,omitted:B.dsoOmitted})}),R.jsx("p",{children:t("trunc.sphere")}),R.jsx("h3",{children:t("credits.title")}),R.jsxs("ul",{className:"credits",children:[R.jsx("li",{children:t("credits.stars")}),R.jsx("li",{children:t("credits.dsos")}),R.jsx("li",{children:t("credits.figures")}),R.jsx("li",{children:t("credits.ephemeris")})]}),R.jsx("p",{className:"note",children:t("credits.accuracy")}),R.jsx("p",{className:"note",children:t("credits.derived")})]}),v&&R.jsx(m5,{catalog:ae,onMark:p,onLookAt:Y,onHideLabel:x,onClose:b})]})}function an({label:t,value:e,hint:n}){return R.jsxs(R.Fragment,{children:[R.jsx("dt",{title:n,children:t}),R.jsx("dd",{className:e===null?"unknown":"",children:e===null?"—":e})]})}function F5({when:t,setWhen:e,place:n,setPlace:i,open:r,onToggle:s}){const{t:o}=_u(),[a,l]=Se.useState(()=>n?String(n.latitude):""),[c,d]=Se.useState(()=>n?String(n.longitude):""),[f,u]=Se.useState(()=>n?String(n.elevation):""),[p,g]=Se.useState(()=>(n==null?void 0:n.label)??""),[x,v]=Se.useState(null),h=M=>e(new Date(t.getTime()+M)),m=()=>{const M=q_(a,c,f,p);if(!M.ok){v(o(`place.bad.${M.why}`));return}v(null),i(M.place),Y0(M.place)},_=()=>{i(null),l(""),d(""),u(""),g(""),v(null),Y0(null)};return R.jsxs("section",{className:`panel time-panel${r?" open":""}`,children:[R.jsxs("header",{className:"panel-head",children:[R.jsxs("div",{children:[R.jsx("h3",{children:o("time.title")}),R.jsxs("p",{className:"instant",children:[t.toISOString().replace("T"," ").slice(0,19)," ",o("time.utc")]}),R.jsxs("p",{className:"instant local",children:[t.toLocaleString()," ",o("time.local")]})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:s,children:r?"▾":"▸"})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>h(-864e5),children:o("time.minus1d")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(-36e5),children:o("time.minus1h")}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>e(new Date),children:o("time.now")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(36e5),children:o("time.plus1h")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(864e5),children:o("time.plus1d")})]}),r&&R.jsxs(R.Fragment,{children:[R.jsx("h3",{children:o("place.title")}),R.jsx("p",{className:"instant",children:n?n.label||`${n.latitude}, ${n.longitude}`:o("place.none")}),R.jsxs("div",{className:"place-form",children:[R.jsxs("label",{children:[o("place.label"),R.jsx("input",{value:p,onChange:M=>g(M.target.value)})]}),R.jsxs("label",{children:[o("place.latitude"),R.jsx("input",{value:a,onChange:M=>l(M.target.value),inputMode:"decimal"})]}),R.jsxs("label",{children:[o("place.longitude"),R.jsx("input",{value:c,onChange:M=>d(M.target.value),inputMode:"decimal"})]}),R.jsxs("label",{children:[o("place.elevation"),R.jsx("input",{value:f,onChange:M=>u(M.target.value),inputMode:"decimal"})]})]}),x&&R.jsx("p",{className:"note error",role:"alert",children:x}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn btn-accent",onClick:m,children:o("place.save")}),n&&R.jsx("button",{type:"button",className:"btn",onClick:_,children:o("place.clear")})]}),R.jsx("p",{className:"note",children:o("place.hint")})]})]})}A_();T_(document.getElementById("root")).render(R.jsx(U5,{}));
