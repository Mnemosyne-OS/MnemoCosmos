var rx=Object.defineProperty;var sx=(t,e,n)=>e in t?rx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wh=(t,e,n)=>sx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var bg={exports:{}},Ac={},Cg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),ox=Symbol.for("react.portal"),ax=Symbol.for("react.fragment"),lx=Symbol.for("react.strict_mode"),cx=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),fx=Symbol.for("react.forward_ref"),hx=Symbol.for("react.suspense"),px=Symbol.for("react.memo"),mx=Symbol.for("react.lazy"),Xh=Symbol.iterator;function gx(t){return t===null||typeof t!="object"?null:(t=Xh&&t[Xh]||t["@@iterator"],typeof t=="function"?t:null)}var Rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,Ng={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Rg}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lg(){}Lg.prototype=ao.prototype;function S0(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Rg}var M0=S0.prototype=new Lg;M0.constructor=S0;Pg(M0,ao.prototype);M0.isPureReactComponent=!0;var jh=Array.isArray,Dg=Object.prototype.hasOwnProperty,E0={current:null},Ig={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dg.call(e,i)&&!Ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:E0.current}}function vx(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function w0(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function _x(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qh=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_x(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case ox:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+eu(o,0):i,jh(r)?(n="",t!=null&&(n=t.replace(qh,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&(w0(r)&&(r=vx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+eu(s,a);o+=Ml(s,e,n,l,r)}else if(l=gx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+eu(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},El={transition:null},yx={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:El,ReactCurrentOwner:E0};function Fg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!w0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=ao;Ke.Fragment=ax;Ke.Profiler=cx;Ke.PureComponent=S0;Ke.StrictMode=lx;Ke.Suspense=hx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;Ke.act=Fg;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=E0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dg.call(e,l)&&!Ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:dx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ux,_context:t},t.Consumer=t};Ke.createElement=Ug;Ke.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:fx,render:t}};Ke.isValidElement=w0;Ke.lazy=function(t){return{$$typeof:mx,_payload:{_status:-1,_result:t},_init:xx}};Ke.memo=function(t,e){return{$$typeof:px,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};Ke.unstable_act=Fg;Ke.useCallback=function(t,e){return fn.current.useCallback(t,e)};Ke.useContext=function(t){return fn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return fn.current.useEffect(t,e)};Ke.useId=function(){return fn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return fn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Ke.useRef=function(t){return fn.current.useRef(t)};Ke.useState=function(t){return fn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return fn.current.useTransition()};Ke.version="18.3.1";Cg.exports=Ke;var De=Cg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=De,Mx=Symbol.for("react.element"),Ex=Symbol.for("react.fragment"),wx=Object.prototype.hasOwnProperty,Tx=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ax={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wx.call(e,i)&&!Ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Mx,type:t,key:s,ref:o,props:r,_owner:Tx.current}}Ac.Fragment=Ex;Ac.jsx=Og;Ac.jsxs=Og;bg.exports=Ac;var P=bg.exports,kg={exports:{}},Pn={},zg={exports:{}},Bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var B=L.length;L.push(O);e:for(;0<B;){var se=B-1>>>1,ce=L[se];if(0<r(ce,O))L[se]=O,L[B]=ce,B=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],B=L.pop();if(B!==O){L[0]=B;e:for(var se=0,ce=L.length,ne=ce>>>1;se<ne;){var me=2*(se+1)-1,Se=L[me],q=me+1,he=L[q];if(0>r(Se,B))q<ce&&0>r(he,Se)?(L[se]=he,L[q]=B,se=q):(L[se]=Se,L[me]=B,se=me);else if(q<ce&&0>r(he,B))L[se]=he,L[q]=B,se=q;else break e}}return O}function r(L,O){var B=L.sortIndex-O.sortIndex;return B!==0?B:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,m=!1,v=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(L){if(M=!1,_(L),!v)if(n(l)!==null)v=!0,X(b);else{var O=n(c);O!==null&&I(y,O.startTime-L)}}function b(L,O){v=!1,M&&(M=!1,d(x),x=-1),m=!0;var B=u;try{for(_(O),h=n(l);h!==null&&(!(h.expirationTime>O)||L&&!R());){var se=h.callback;if(typeof se=="function"){h.callback=null,u=h.priorityLevel;var ce=se(h.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&i(l),_(O)}else i(l);h=n(l)}if(h!==null)var ne=!0;else{var me=n(c);me!==null&&I(y,me.startTime-O),ne=!1}return ne}finally{h=null,u=B,m=!1}}var w=!1,A=null,x=-1,C=5,N=-1;function R(){return!(t.unstable_now()-N<C)}function k(){if(A!==null){var L=t.unstable_now();N=L;var O=!0;try{O=A(!0,L)}finally{O?$():(w=!1,A=null)}}else w=!1}var $;if(typeof p=="function")$=function(){p(k)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,F=te.port2;te.port1.onmessage=k,$=function(){F.postMessage(null)}}else $=function(){g(k,0)};function X(L){A=L,w||(w=!0,$())}function I(L,O){x=g(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,X(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var B=u;u=O;try{return L()}finally{u=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=u;u=L;try{return O()}finally{u=B}},t.unstable_scheduleCallback=function(L,O,B){var se=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?se+B:se):B=se,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=B+ce,L={id:f++,callback:O,priorityLevel:L,startTime:B,expirationTime:ce,sortIndex:-1},B>se?(L.sortIndex=B,e(c,L),n(l)===null&&L===n(c)&&(M?(d(x),x=-1):M=!0,I(y,B-se))):(L.sortIndex=ce,e(l,L),v||m||(v=!0,X(b))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var O=u;return function(){var B=u;u=O;try{return L.apply(this,arguments)}finally{u=B}}}})(Bg);zg.exports=Bg;var bx=zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=De,Rn=bx;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,$o={};function is(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for($o[t]=e,t=0;t<e.length;t++)Gg.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,Rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yh={},$h={};function Px(t){return hd.call($h,t)?!0:hd.call(Yh,t)?!1:Rx.test(t)?$h[t]=!0:(Yh[t]=!0,!1)}function Nx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lx(t,e,n,i){if(e===null||typeof e>"u"||Nx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var T0=/[\-:]([a-z])/g;function A0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(T0,A0);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(T0,A0);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(T0,A0);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function b0(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lx(e,n,r,i)&&(n=null),i||r===null?Px(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),P0=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),Kh=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,tu;function Lo(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function Dx(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case pd:return"Profiler";case C0:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case Vg:return(t._context.displayName||"Context")+".Provider";case R0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P0:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function Ix(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===C0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ux(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=Ux(t))}function jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&b0(t,"checked",e,!1)}function xd(t,e){qg(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&yd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yd(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Do(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Yg(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fx=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){Fx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function Zg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ox=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(Ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function N0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,Bs=null,Gs=null;function tp(t){if(t=_a(t)){if(typeof Ad!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Nc(e),Ad(t.stateNode,t.type,e))}}function Jg(t){Bs?Gs?Gs.push(t):Gs=[t]:Bs=t}function e1(){if(Bs){var t=Bs,e=Gs;if(Gs=Bs=null,tp(t),e)for(t=0;t<e.length;t++)tp(e[t])}}function t1(t,e){return t(e)}function n1(){}var ru=!1;function i1(t,e,n){if(ru)return t(e,n);ru=!0;try{return t1(t,e,n)}finally{ru=!1,(Bs!==null||Gs!==null)&&(n1(),e1())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var i=Nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var bd=!1;if(Gi)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){bd=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{bd=!1}function kx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Bo=!1,Gl=null,Vl=!1,Cd=null,zx={onError:function(t){Bo=!0,Gl=t}};function Bx(t,e,n,i,r,s,o,a,l){Bo=!1,Gl=null,kx.apply(zx,arguments)}function Gx(t,e,n,i,r,s,o,a,l){if(Bx.apply(this,arguments),Bo){if(Bo){var c=Gl;Bo=!1,Gl=null}else throw Error(pe(198));Vl||(Vl=!0,Cd=c)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function np(t){if(rs(t)!==t)throw Error(pe(188))}function Vx(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return np(r),t;if(s===i)return np(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function s1(t){return t=Vx(t),t!==null?o1(t):null}function o1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o1(t);if(e!==null)return e;t=t.sibling}return null}var a1=Rn.unstable_scheduleCallback,ip=Rn.unstable_cancelCallback,Hx=Rn.unstable_shouldYield,Wx=Rn.unstable_requestPaint,Lt=Rn.unstable_now,Xx=Rn.unstable_getCurrentPriorityLevel,L0=Rn.unstable_ImmediatePriority,l1=Rn.unstable_UserBlockingPriority,Hl=Rn.unstable_NormalPriority,jx=Rn.unstable_LowPriority,c1=Rn.unstable_IdlePriority,bc=null,gi=null;function qx(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:Kx,Yx=Math.log,$x=Math.LN2;function Kx(t){return t>>>=0,t===0?32:31-(Yx(t)/$x|0)|0}var La=64,Da=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function Zx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Zx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u1(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function Jx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function D0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function d1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f1,I0,h1,p1,m1,Pd=!1,Ia=[],pr=null,mr=null,gr=null,Qo=new Map,Jo=new Map,ar=[],e2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&I0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function t2(t,e,n,i,r){switch(e){case"focusin":return pr=go(pr,t,e,n,i,r),!0;case"dragenter":return mr=go(mr,t,e,n,i,r),!0;case"mouseover":return gr=go(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qo.set(s,go(Qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,go(Jo.get(s)||null,t,e,n,i,r)),!0}return!1}function g1(t){var e=zr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=r1(n),e!==null){t.blockedOn=e,m1(t.priority,function(){h1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=_a(n),e!==null&&I0(e),t.blockedOn=n,!1;e.shift()}return!0}function sp(t,e,n){wl(t)&&n.delete(e)}function n2(){Pd=!1,pr!==null&&wl(pr)&&(pr=null),mr!==null&&wl(mr)&&(mr=null),gr!==null&&wl(gr)&&(gr=null),Qo.forEach(sp),Jo.forEach(sp)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,n2)))}function ea(t){function e(r){return vo(r,t)}if(0<Ia.length){vo(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&vo(pr,t),mr!==null&&vo(mr,t),gr!==null&&vo(gr,t),Qo.forEach(e),Jo.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)g1(n),n.blockedOn===null&&ar.shift()}var Vs=qi.ReactCurrentBatchConfig,Xl=!0;function i2(t,e,n,i){var r=lt,s=Vs.transition;Vs.transition=null;try{lt=1,U0(t,e,n,i)}finally{lt=r,Vs.transition=s}}function r2(t,e,n,i){var r=lt,s=Vs.transition;Vs.transition=null;try{lt=4,U0(t,e,n,i)}finally{lt=r,Vs.transition=s}}function U0(t,e,n,i){if(Xl){var r=Nd(t,e,n,i);if(r===null)mu(t,e,i,jl,n),rp(t,i);else if(t2(r,t,e,n,i))i.stopPropagation();else if(rp(t,i),e&4&&-1<e2.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&f1(s),s=Nd(t,e,n,i),s===null&&mu(t,e,i,jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(t,e,i,null,n)}}var jl=null;function Nd(t,e,n,i){if(jl=null,t=N0(i),t=zr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function v1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case L0:return 1;case l1:return 4;case Hl:case jx:return 16;case c1:return 536870912;default:return 16}default:return 16}}var ur=null,F0=null,Tl=null;function _1(){if(Tl)return Tl;var t,e=F0,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function op(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:op,this.isPropagationStopped=op,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},O0=Nn(lo),va=Mt({},lo,{view:0,detail:0}),s2=Nn(va),ou,au,_o,Cc=Mt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:k0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(ou=t.screenX-_o.screenX,au=t.screenY-_o.screenY):au=ou=0,_o=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),ap=Nn(Cc),o2=Mt({},Cc,{dataTransfer:0}),a2=Nn(o2),l2=Mt({},va,{relatedTarget:0}),lu=Nn(l2),c2=Mt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),u2=Nn(c2),d2=Mt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f2=Nn(d2),h2=Mt({},lo,{data:0}),lp=Nn(h2),p2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g2[t])?!!e[t]:!1}function k0(){return v2}var _2=Mt({},va,{key:function(t){if(t.key){var e=p2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:k0,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x2=Nn(_2),y2=Mt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Nn(y2),S2=Mt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:k0}),M2=Nn(S2),E2=Mt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),w2=Nn(E2),T2=Mt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A2=Nn(T2),b2=[9,13,27,32],z0=Gi&&"CompositionEvent"in window,Go=null;Gi&&"documentMode"in document&&(Go=document.documentMode);var C2=Gi&&"TextEvent"in window&&!Go,x1=Gi&&(!z0||Go&&8<Go&&11>=Go),up=" ",dp=!1;function y1(t,e){switch(t){case"keyup":return b2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function R2(t,e){switch(t){case"compositionend":return S1(e);case"keypress":return e.which!==32?null:(dp=!0,up);case"textInput":return t=e.data,t===up&&dp?null:t;default:return null}}function P2(t,e){if(bs)return t==="compositionend"||!z0&&y1(t,e)?(t=_1(),Tl=F0=ur=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x1&&e.locale!=="ko"?null:e.data;default:return null}}var N2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N2[t.type]:e==="textarea"}function M1(t,e,n,i){Jg(i),e=ql(e,"onChange"),0<e.length&&(n=new O0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Vo=null,ta=null;function L2(t){D1(t,0)}function Rc(t){var e=Ps(t);if(jg(e))return t}function D2(t,e){if(t==="change")return e}var E1=!1;if(Gi){var cu;if(Gi){var uu="oninput"in document;if(!uu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),uu=typeof hp.oninput=="function"}cu=uu}else cu=!1;E1=cu&&(!document.documentMode||9<document.documentMode)}function pp(){Vo&&(Vo.detachEvent("onpropertychange",w1),ta=Vo=null)}function w1(t){if(t.propertyName==="value"&&Rc(ta)){var e=[];M1(e,ta,t,N0(t)),i1(L2,e)}}function I2(t,e,n){t==="focusin"?(pp(),Vo=e,ta=n,Vo.attachEvent("onpropertychange",w1)):t==="focusout"&&pp()}function U2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(ta)}function F2(t,e){if(t==="click")return Rc(e)}function O2(t,e){if(t==="input"||t==="change")return Rc(e)}function k2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:k2;function na(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hd.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,e){var n=mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mp(n)}}function T1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A1(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function B0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z2(t){var e=A1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T1(n.ownerDocument.documentElement,n)){if(i!==null&&B0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gp(n,s);var o=gp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B2=Gi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Ld=null,Ho=null,Dd=!1;function vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||Cs==null||Cs!==Bl(i)||(i=Cs,"selectionStart"in i&&B0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&na(Ho,i)||(Ho=i,i=ql(Ld,"onSelect"),0<i.length&&(e=new O0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},du={},b1={};Gi&&(b1=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Pc(t){if(du[t])return du[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b1)return du[t]=e[n];return t}var C1=Pc("animationend"),R1=Pc("animationiteration"),P1=Pc("animationstart"),N1=Pc("transitionend"),L1=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){L1.set(t,e),is(e,[t])}for(var fu=0;fu<_p.length;fu++){var hu=_p[fu],G2=hu.toLowerCase(),V2=hu[0].toUpperCase()+hu.slice(1);Ar(G2,"on"+V2)}Ar(C1,"onAnimationEnd");Ar(R1,"onAnimationIteration");Ar(P1,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(N1,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gx(i,e,void 0,t),t.currentTarget=null}function D1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xp(r,a,c),s=l}}}if(Vl)throw t=Cd,Vl=!1,Cd=null,t}function vt(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var i=t+"__bubble";n.has(i)||(I1(e,t,2,!1),n.add(i))}function pu(t,e,n){var i=0;e&&(i|=4),I1(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Oa]){t[Oa]=!0,Gg.forEach(function(n){n!=="selectionchange"&&(H2.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,pu("selectionchange",!1,e))}}function I1(t,e,n,i){switch(v1(e)){case 1:var r=i2;break;case 4:r=r2;break;default:r=U0}n=r.bind(null,e,n,t),r=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}i1(function(){var c=s,f=N0(n),h=[];e:{var u=L1.get(t);if(u!==void 0){var m=O0,v=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=x2;break;case"focusin":v="focus",m=lu;break;case"focusout":v="blur",m=lu;break;case"beforeblur":case"afterblur":m=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M2;break;case C1:case R1:case P1:m=u2;break;case N1:m=w2;break;case"scroll":m=s2;break;case"wheel":m=A2;break;case"copy":case"cut":case"paste":m=f2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cp}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?u!==null?u+"Capture":null:u;M=[];for(var p=c,_;p!==null;){_=p;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=Zo(p,d),y!=null&&M.push(ra(p,y,_)))),g)break;p=p.return}0<M.length&&(u=new m(u,v,null,n,f),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Td&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[Vi]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?zr(v):null,v!==null&&(g=rs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(M=ap,y="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(M=cp,y="onPointerLeave",d="onPointerEnter",p="pointer"),g=m==null?u:Ps(m),_=v==null?u:Ps(v),u=new M(y,p+"leave",m,n,f),u.target=g,u.relatedTarget=_,y=null,zr(f)===c&&(M=new M(d,p+"enter",v,n,f),M.target=_,M.relatedTarget=g,y=M),g=y,m&&v)t:{for(M=m,d=v,p=0,_=M;_;_=ls(_))p++;for(_=0,y=d;y;y=ls(y))_++;for(;0<p-_;)M=ls(M),p--;for(;0<_-p;)d=ls(d),_--;for(;p--;){if(M===d||d!==null&&M===d.alternate)break t;M=ls(M),d=ls(d)}M=null}else M=null;m!==null&&yp(h,u,m,M,!1),v!==null&&g!==null&&yp(h,g,v,M,!0)}}e:{if(u=c?Ps(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var b=D2;else if(fp(u))if(E1)b=O2;else{b=U2;var w=I2}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=F2);if(b&&(b=b(t,c))){M1(h,b,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&yd(u,"number",u.value)}switch(w=c?Ps(c):window,t){case"focusin":(fp(w)||w.contentEditable==="true")&&(Cs=w,Ld=c,Ho=null);break;case"focusout":Ho=Ld=Cs=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,vp(h,n,f);break;case"selectionchange":if(B2)break;case"keydown":case"keyup":vp(h,n,f)}var A;if(z0)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else bs?y1(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(x1&&n.locale!=="ko"&&(bs||x!=="onCompositionStart"?x==="onCompositionEnd"&&bs&&(A=_1()):(ur=f,F0="value"in ur?ur.value:ur.textContent,bs=!0)),w=ql(c,x),0<w.length&&(x=new lp(x,t,null,n,f),h.push({event:x,listeners:w}),A?x.data=A:(A=S1(n),A!==null&&(x.data=A)))),(A=C2?R2(t,n):P2(t,n))&&(c=ql(c,"onBeforeInput"),0<c.length&&(f=new lp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}D1(h,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zo(t,n),s!=null&&i.unshift(ra(t,s,r)),s=Zo(t,e),s!=null&&i.push(ra(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Zo(n,s),l!=null&&o.unshift(ra(n,l,a))):r||(l=Zo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var W2=/\r\n?/g,X2=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(W2,`
`).replace(X2,"")}function ka(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(pe(425))}function Yl(){}var Id=null,Ud=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Od=typeof setTimeout=="function"?setTimeout:void 0,j2=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(t){return Mp.resolve(null).then(t).catch(Y2)}:Od;function Y2(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ea(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),hi="__reactFiber$"+co,sa="__reactProps$"+co,Vi="__reactContainer$"+co,kd="__reactEvents$"+co,$2="__reactListeners$"+co,K2="__reactHandles$"+co;function zr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ep(t);t!==null;){if(n=t[hi])return n;t=Ep(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[hi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Nc(t){return t[sa]||null}var zd=[],Ns=-1;function br(t){return{current:t}}function _t(t){0>Ns||(t.current=zd[Ns],zd[Ns]=null,Ns--)}function mt(t,e){Ns++,zd[Ns]=t.current,t.current=e}var wr={},sn=br(wr),vn=br(!1),Yr=wr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function $l(){_t(vn),_t(sn)}function wp(t,e,n){if(sn.current!==wr)throw Error(pe(168));mt(sn,e),mt(vn,n)}function U1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Ix(t)||"Unknown",r));return Mt({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Yr=sn.current,mt(sn,t),mt(vn,vn.current),!0}function Tp(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=U1(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,_t(vn),_t(sn),mt(sn,t)):_t(vn),mt(vn,n)}var Li=null,Lc=!1,vu=!1;function F1(t){Li===null?Li=[t]:Li.push(t)}function Z2(t){Lc=!0,F1(t)}function Cr(){if(!vu&&Li!==null){vu=!0;var t=0,e=lt;try{var n=Li;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Lc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),a1(L0,Cr),r}finally{lt=e,vu=!1}}return null}var Ls=[],Ds=0,Zl=null,Ql=0,Un=[],Fn=0,$r=null,Ii=1,Ui="";function Ir(t,e){Ls[Ds++]=Ql,Ls[Ds++]=Zl,Zl=t,Ql=e}function O1(t,e,n){Un[Fn++]=Ii,Un[Fn++]=Ui,Un[Fn++]=$r,$r=t;var i=Ii;t=Ui;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ti(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function G0(t){t.return!==null&&(Ir(t,1),O1(t,1,0))}function V0(t){for(;t===Zl;)Zl=Ls[--Ds],Ls[Ds]=null,Ql=Ls[--Ds],Ls[Ds]=null;for(;t===$r;)$r=Un[--Fn],Un[Fn]=null,Ui=Un[--Fn],Un[Fn]=null,Ii=Un[--Fn],Un[Fn]=null}var Cn=null,bn=null,xt=!1,Zn=null;function k1(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,bn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,bn=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(xt){var e=bn;if(e){var n=e;if(!Ap(t,e)){if(Bd(t))throw Error(pe(418));e=vr(n.nextSibling);var i=Cn;e&&Ap(t,e)?k1(i,n):(t.flags=t.flags&-4097|2,xt=!1,Cn=t)}}else{if(Bd(t))throw Error(pe(418));t.flags=t.flags&-4097|2,xt=!1,Cn=t}}}function bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function za(t){if(t!==Cn)return!1;if(!xt)return bp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=bn)){if(Bd(t))throw z1(),Error(pe(418));for(;e;)k1(t,e),e=vr(e.nextSibling)}if(bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Cn?vr(t.stateNode.nextSibling):null;return!0}function z1(){for(var t=bn;t;)t=vr(t.nextSibling)}function Zs(){bn=Cn=null,xt=!1}function H0(t){Zn===null?Zn=[t]:Zn.push(t)}var Q2=qi.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function B1(t){function e(d,p){if(t){var _=d.deletions;_===null?(d.deletions=[p],d.flags|=16):_.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=Sr(d,p),d.index=0,d.sibling=null,d}function s(d,p,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<p?(d.flags|=2,p):_):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,p,_,y){return p===null||p.tag!==6?(p=wu(_,d.mode,y),p.return=d,p):(p=r(p,_),p.return=d,p)}function l(d,p,_,y){var b=_.type;return b===As?f(d,p,_.props.children,y,_.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Cp(b)===p.type)?(y=r(p,_.props),y.ref=xo(d,p,_),y.return=d,y):(y=Dl(_.type,_.key,_.props,null,d.mode,y),y.ref=xo(d,p,_),y.return=d,y)}function c(d,p,_,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Tu(_,d.mode,y),p.return=d,p):(p=r(p,_.children||[]),p.return=d,p)}function f(d,p,_,y,b){return p===null||p.tag!==7?(p=jr(_,d.mode,y,b),p.return=d,p):(p=r(p,_),p.return=d,p)}function h(d,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wu(""+p,d.mode,_),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ra:return _=Dl(p.type,p.key,p.props,null,d.mode,_),_.ref=xo(d,null,p),_.return=d,_;case Ts:return p=Tu(p,d.mode,_),p.return=d,p;case sr:var y=p._init;return h(d,y(p._payload),_)}if(Do(p)||po(p))return p=jr(p,d.mode,_,null),p.return=d,p;Ba(d,p)}return null}function u(d,p,_,y){var b=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,p,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return _.key===b?l(d,p,_,y):null;case Ts:return _.key===b?c(d,p,_,y):null;case sr:return b=_._init,u(d,p,b(_._payload),y)}if(Do(_)||po(_))return b!==null?null:f(d,p,_,y,null);Ba(d,_)}return null}function m(d,p,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(p,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ra:return d=d.get(y.key===null?_:y.key)||null,l(p,d,y,b);case Ts:return d=d.get(y.key===null?_:y.key)||null,c(p,d,y,b);case sr:var w=y._init;return m(d,p,_,w(y._payload),b)}if(Do(y)||po(y))return d=d.get(_)||null,f(p,d,y,b,null);Ba(p,y)}return null}function v(d,p,_,y){for(var b=null,w=null,A=p,x=p=0,C=null;A!==null&&x<_.length;x++){A.index>x?(C=A,A=null):C=A.sibling;var N=u(d,A,_[x],y);if(N===null){A===null&&(A=C);break}t&&A&&N.alternate===null&&e(d,A),p=s(N,p,x),w===null?b=N:w.sibling=N,w=N,A=C}if(x===_.length)return n(d,A),xt&&Ir(d,x),b;if(A===null){for(;x<_.length;x++)A=h(d,_[x],y),A!==null&&(p=s(A,p,x),w===null?b=A:w.sibling=A,w=A);return xt&&Ir(d,x),b}for(A=i(d,A);x<_.length;x++)C=m(A,d,x,_[x],y),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?x:C.key),p=s(C,p,x),w===null?b=C:w.sibling=C,w=C);return t&&A.forEach(function(R){return e(d,R)}),xt&&Ir(d,x),b}function M(d,p,_,y){var b=po(_);if(typeof b!="function")throw Error(pe(150));if(_=b.call(_),_==null)throw Error(pe(151));for(var w=b=null,A=p,x=p=0,C=null,N=_.next();A!==null&&!N.done;x++,N=_.next()){A.index>x?(C=A,A=null):C=A.sibling;var R=u(d,A,N.value,y);if(R===null){A===null&&(A=C);break}t&&A&&R.alternate===null&&e(d,A),p=s(R,p,x),w===null?b=R:w.sibling=R,w=R,A=C}if(N.done)return n(d,A),xt&&Ir(d,x),b;if(A===null){for(;!N.done;x++,N=_.next())N=h(d,N.value,y),N!==null&&(p=s(N,p,x),w===null?b=N:w.sibling=N,w=N);return xt&&Ir(d,x),b}for(A=i(d,A);!N.done;x++,N=_.next())N=m(A,d,x,N.value,y),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?x:N.key),p=s(N,p,x),w===null?b=N:w.sibling=N,w=N);return t&&A.forEach(function(k){return e(d,k)}),xt&&Ir(d,x),b}function g(d,p,_,y){if(typeof _=="object"&&_!==null&&_.type===As&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:e:{for(var b=_.key,w=p;w!==null;){if(w.key===b){if(b=_.type,b===As){if(w.tag===7){n(d,w.sibling),p=r(w,_.props.children),p.return=d,d=p;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Cp(b)===w.type){n(d,w.sibling),p=r(w,_.props),p.ref=xo(d,w,_),p.return=d,d=p;break e}n(d,w);break}else e(d,w);w=w.sibling}_.type===As?(p=jr(_.props.children,d.mode,y,_.key),p.return=d,d=p):(y=Dl(_.type,_.key,_.props,null,d.mode,y),y.ref=xo(d,p,_),y.return=d,d=y)}return o(d);case Ts:e:{for(w=_.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(d,p.sibling),p=r(p,_.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=Tu(_,d.mode,y),p.return=d,d=p}return o(d);case sr:return w=_._init,g(d,p,w(_._payload),y)}if(Do(_))return v(d,p,_,y);if(po(_))return M(d,p,_,y);Ba(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,_),p.return=d,d=p):(n(d,p),p=wu(_,d.mode,y),p.return=d,d=p),o(d)):n(d,p)}return g}var Qs=B1(!0),G1=B1(!1),Jl=br(null),ec=null,Is=null,W0=null;function X0(){W0=Is=ec=null}function j0(t){var e=Jl.current;_t(Jl),t._currentValue=e}function Vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){ec=t,W0=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(W0!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(ec===null)throw Error(pe(308));Is=t,ec.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Br=null;function q0(t){Br===null?Br=[t]:Br.push(t)}function V1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,q0(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Y0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,q0(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,D0(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,M=a;switch(u=e,m=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){h=v.call(m,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(m,h,u):v,u==null)break e;h=Mt({},h,u);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=h}}function Pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var xa={},vi=br(xa),oa=br(xa),aa=br(xa);function Gr(t){if(t===xa)throw Error(pe(174));return t}function $0(t,e){switch(mt(aa,e),mt(oa,t),mt(vi,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Md(e,t)}_t(vi),mt(vi,e)}function Js(){_t(vi),_t(oa),_t(aa)}function W1(t){Gr(aa.current);var e=Gr(vi.current),n=Md(e,t.type);e!==n&&(mt(oa,t),mt(vi,n))}function K0(t){oa.current===t&&(_t(vi),_t(oa))}var yt=br(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Z0(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Cl=qi.ReactCurrentDispatcher,xu=qi.ReactCurrentBatchConfig,Kr=0,St=null,Ot=null,Vt=null,ic=!1,Wo=!1,la=0,J2=0;function Zt(){throw Error(pe(321))}function Q0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function J0(t,e,n,i,r,s){if(Kr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?i3:r3,t=n(i,r),Wo){s=0;do{if(Wo=!1,la=0,25<=s)throw Error(pe(301));s+=1,Vt=Ot=null,e.updateQueue=null,Cl.current=s3,t=n(i,r)}while(Wo)}if(Cl.current=rc,e=Ot!==null&&Ot.next!==null,Kr=0,Vt=Ot=St=null,ic=!1,e)throw Error(pe(300));return t}function eh(){var t=la!==0;return la=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?St.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Vn(){if(Ot===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Vt===null?St.memoizedState:Vt.next;if(e!==null)Vt=e,Ot=t;else{if(t===null)throw Error(pe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Vt===null?St.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ca(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=Vn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=f,Zr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Vn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function X1(){}function j1(t,e){var n=St,i=Vn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,th($1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,ua(9,Y1.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(pe(349));Kr&30||q1(n,e,r)}return r}function q1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y1(t,e,n,i){e.value=n,e.getSnapshot=i,K1(e)&&Z1(t)}function $1(t,e,n){return n(function(){K1(e)&&Z1(t)})}function K1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function Z1(t){var e=Hi(t,1);e!==null&&ni(e,t,1,-1)}function Np(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=n3.bind(null,St,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Q1(){return Vn().memoizedState}function Rl(t,e,n,i){var r=di();St.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Dc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Q0(i,o.deps)){r.memoizedState=ua(e,n,s,i);return}}St.flags|=t,r.memoizedState=ua(1|e,n,s,i)}function Lp(t,e){return Rl(8390656,8,t,e)}function th(t,e){return Dc(2048,8,t,e)}function J1(t,e){return Dc(4,2,t,e)}function ev(t,e){return Dc(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,tv.bind(null,e,t),n)}function nh(){}function iv(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Q0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Q0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sv(t,e,n){return Kr&21?(ii(n,e)||(n=u1(),St.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function e3(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{lt=n,xu.transition=i}}function ov(){return Vn().memoizedState}function t3(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))lv(e,n);else if(n=V1(t,e,n,i),n!==null){var r=cn();ni(n,t,i,r),cv(n,e,i)}}function n3(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,q0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=V1(t,e,r,i),n!==null&&(r=cn(),ni(n,t,i,r),cv(n,e,i))}}function av(t){var e=t.alternate;return t===St||e!==null&&e===St}function lv(t,e){Wo=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,D0(t,n)}}var rc={readContext:Gn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},i3={readContext:Gn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=t3.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:nh,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=e3.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=di();if(xt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Wt===null)throw Error(pe(349));Kr&30||q1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lp($1.bind(null,i,s,t),[t]),i.flags|=2048,ua(9,Y1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Wt.identifierPrefix;if(xt){var n=Ui,i=Ii;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},r3={readContext:Gn,useCallback:iv,useContext:Gn,useEffect:th,useImperativeHandle:nv,useInsertionEffect:J1,useLayoutEffect:ev,useMemo:rv,useReducer:yu,useRef:Q1,useState:function(){return yu(ca)},useDebugValue:nh,useDeferredValue:function(t){var e=Vn();return sv(e,Ot.memoizedState,t)},useTransition:function(){var t=yu(ca)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:X1,useSyncExternalStore:j1,useId:ov,unstable_isNewReconciler:!1},s3={readContext:Gn,useCallback:iv,useContext:Gn,useEffect:th,useImperativeHandle:nv,useInsertionEffect:J1,useLayoutEffect:ev,useMemo:rv,useReducer:Su,useRef:Q1,useState:function(){return Su(ca)},useDebugValue:nh,useDeferredValue:function(t){var e=Vn();return Ot===null?e.memoizedState=t:sv(e,Ot.memoizedState,t)},useTransition:function(){var t=Su(ca)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:X1,useSyncExternalStore:j1,useId:ov,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=yr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ni(e,t,r,i),bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=yr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ni(e,t,r,i),bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=yr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(ni(e,t,i,n),bl(e,t,i))}};function Dp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,i)||!na(r,s):!0}function uv(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=_n(e)?Yr:sn.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Y0(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=_n(e)?Yr:sn.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=Dx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var o3=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){oc||(oc=!0,tf=i),Xd(t,e)},n}function fv(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new o3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=y3.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var a3=qi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?G1(e,null,n,i):Qs(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=J0(t,e,n,i,s,r),n=eh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(xt&&n&&G0(e),e.flags|=1,ln(t,e,i,r),e.child)}function zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hv(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function hv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(na(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return jd(t,e,n,i,r)}function pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Fs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Fs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Fs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Fs,An),An|=i;return ln(t,e,r,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=_n(n)?Yr:sn.current;return s=Ks(e,s),Hs(e,r),n=J0(t,e,n,i,s,r),i=eh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(xt&&i&&G0(e),e.flags|=1,ln(t,e,n,r),e.child)}function Bp(t,e,n,i,r){if(_n(n)){var s=!0;Kl(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Pl(t,e),uv(e,n,i),Wd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=_n(n)?Yr:sn.current,c=Ks(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ip(e,o,i,c),or=!1;var u=e.memoizedState;o.state=u,tc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||vn.current||or?(typeof f=="function"&&(Hd(e,n,f,i),l=e.memoizedState),(a=or||Dp(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,H1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=_n(n)?Yr:sn.current,l=Ks(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&Ip(e,o,i,l),or=!1,u=e.memoizedState,o.state=u,tc(e,i,o,r);var v=e.memoizedState;a!==h||u!==v||vn.current||or?(typeof m=="function"&&(Hd(e,n,m,i),v=e.memoizedState),(c=or||Dp(e,n,c,i,u,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return qd(t,e,n,i,s,r)}function qd(t,e,n,i,r,s){mv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tp(e,n,!1),Wi(t,e,s);i=e.stateNode,a3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&Tp(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wp(t,e.context,!1),$0(t,e.containerInfo)}function Gp(t,e,n,i,r){return Zs(),H0(r),e.flags|=256,ln(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(yt,r&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=Yd,t):ih(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return l3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ih(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&H0(i),Qs(e,t.child,null,n),t=ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function l3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Mu(Error(pe(422))),Ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=Yd,s);if(!(e.mode&1))return Ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=Mu(s,i,void 0),Ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),ni(i,t,r,-1))}return ch(),i=Mu(Error(pe(421))),Ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=S3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=vr(r.nextSibling),Cn=e,xt=!0,Zn=null,t!==null&&(Un[Fn++]=Ii,Un[Fn++]=Ui,Un[Fn++]=$r,Ii=t.id,Ui=t.overflow,$r=e),e=ih(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c3(t,e,n){switch(e.tag){case 3:gv(e),Zs();break;case 5:W1(e);break;case 1:_n(e.type)&&Kl(e);break;case 4:$0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(mt(yt,yt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);mt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return Wi(t,e,n)}var xv,Kd,yv,Sv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(vi.current);var s=null;switch(n){case"input":r=_d(t,r),i=_d(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Sd(t,r),i=Sd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}Ed(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function yo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function u3(t,e,n){var i=e.pendingProps;switch(V0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return _n(e.type)&&$l(),Qt(e),null;case 3:return i=e.stateNode,Js(),_t(vn),_t(sn),Z0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(sf(Zn),Zn=null))),Kd(t,e),Qt(e),null;case 5:K0(e);var r=Gr(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Qt(e),null}if(t=Gr(vi.current),za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[sa]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)vt(Uo[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Zh(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Jh(i,s),vt("invalid",i)}Ed(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Pa(i),Qh(i,s,!0);break;case"textarea":Pa(i),ep(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[sa]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)vt(Uo[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Zh(t,i),r=_d(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Jh(t,i),r=Sd(t,i),vt("invalid",t);break;default:r=i}Ed(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&b0(t,s,l,o))}switch(n){case"input":Pa(t),Qh(t,i,!1);break;case"textarea":Pa(t),ep(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Gr(aa.current),Gr(vi.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Qt(e),null;case 13:if(_t(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&bn!==null&&e.mode&1&&!(e.flags&128))z1(),Zs(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[hi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Zn!==null&&(sf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?kt===0&&(kt=3):ch())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Js(),Kd(t,e),t===null&&ia(e.stateNode.containerInfo),Qt(e),null;case 10:return j0(e.type._context),Qt(e),null;case 17:return _n(e.type)&&$l(),Qt(e),null;case 19:if(_t(yt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yo(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nc(t),o!==null){for(e.flags|=128,yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>to&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304)}else{if(!i)if(t=nc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Qt(e),null}else 2*Lt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=yt.current,mt(yt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return lh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function d3(t,e){switch(V0(e),e.tag){case 1:return _n(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),_t(vn),_t(sn),Z0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return K0(e),null;case 13:if(_t(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(yt),null;case 4:return Js(),null;case 10:return j0(e.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var Va=!1,nn=!1,f3=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Zd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Hp=!1;function h3(t,e){if(Id=Xl,t=A1(),B0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:t,selectionRange:n},Xl=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,g=v.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:$n(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return v=Hp,Hp=!1,v}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zd(e,n,s)}r=r.next}while(r!==i)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[sa],delete e[kd],delete e[$2],delete e[K2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var Xt=null,Kn=!1;function Zi(t,e,n){for(n=n.child;n!==null;)wv(t,e,n),n=n.sibling}function wv(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:nn||Us(n,e);case 6:var i=Xt,r=Kn;Xt=null,Zi(t,e,n),Xt=i,Kn=r,Xt!==null&&(Kn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Kn?(t=Xt,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),ea(t)):gu(Xt,n.stateNode));break;case 4:i=Xt,r=Kn,Xt=n.stateNode.containerInfo,Kn=!0,Zi(t,e,n),Xt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!nn&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Zi(t,e,n),nn=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f3),e.forEach(function(i){var r=M3.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Kn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Xt===null)throw Error(pe(160));wv(s,o,r),Xt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),li(t),i&4){try{Xo(3,t,t.return),Uc(3,t)}catch(M){wt(t,t.return,M)}try{Xo(5,t,t.return)}catch(M){wt(t,t.return,M)}}break;case 1:Wn(e,t),li(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(Wn(e,t),li(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{Ko(r,"")}catch(M){wt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qg(r,s),wd(a,o);var c=wd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Qg(r,h):f==="dangerouslySetInnerHTML"?Kg(r,h):f==="children"?Ko(r,h):b0(r,f,h,c)}switch(a){case"input":xd(r,s);break;case"textarea":Yg(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zs(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(M){wt(t,t.return,M)}}break;case 6:if(Wn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){wt(t,t.return,M)}}break;case 3:if(Wn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(M){wt(t,t.return,M)}break;case 4:Wn(e,t),li(t);break;case 13:Wn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(oh=Lt())),i&4&&Xp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,Wn(e,t),nn=c):Wn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Le=t,f=t.child;f!==null;){for(h=Le=f;Le!==null;){switch(u=Le,m=u.child,u.tag){case 0:case 11:case 14:case 15:Xo(4,u,u.return);break;case 1:Us(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){wt(i,n,M)}}break;case 5:Us(u,u.return);break;case 22:if(u.memoizedState!==null){qp(h);continue}}m!==null?(m.return=u,Le=m):qp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zg("display",o))}catch(M){wt(t,t.return,M)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){wt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),li(t),i&4&&Xp(t);break;case 21:break;default:Wn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=Wp(t);ef(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wp(t);Jd(t,a,o);break;default:throw Error(pe(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function p3(t,e,n){Le=t,Av(t)}function Av(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Va;var c=nn;if(Va=o,(nn=l)&&!c)for(Le=r;Le!==null;)o=Le,l=o.child,o.tag===22&&o.memoizedState!==null?Yp(r):l!==null?(l.return=o,Le=l):Yp(r);for(;s!==null;)Le=s,Av(s),s=s.sibling;Le=r,Va=a,nn=c}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):jp(t)}}function jp(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}nn||e.flags&512&&Qd(e)}catch(u){wt(e,e.return,u)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function qp(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Yp(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Qd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Qd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Le=a;break}Le=e.return}}var m3=Math.ceil,sc=qi.ReactCurrentDispatcher,rh=qi.ReactCurrentOwner,Bn=qi.ReactCurrentBatchConfig,it=0,Wt=null,Ft=null,Yt=0,An=0,Fs=br(0),kt=0,da=null,Zr=0,Fc=0,sh=0,jo=null,mn=null,oh=0,to=1/0,Ni=null,oc=!1,tf=null,xr=null,Ha=!1,dr=null,ac=0,qo=0,nf=null,Nl=-1,Ll=0;function cn(){return it&6?Lt():Nl!==-1?Nl:Nl=Lt()}function yr(t){return t.mode&1?it&2&&Yt!==0?Yt&-Yt:Q2.transition!==null?(Ll===0&&(Ll=u1()),Ll):(t=lt,t!==0||(t=window.event,t=t===void 0?16:v1(t.type)),t):1}function ni(t,e,n,i){if(50<qo)throw qo=0,nf=null,Error(pe(185));ga(t,n,i),(!(it&2)||t!==Wt)&&(t===Wt&&(!(it&2)&&(Fc|=n),kt===4&&lr(t,Yt)),xn(t,i),n===1&&it===0&&!(e.mode&1)&&(to=Lt()+500,Lc&&Cr()))}function xn(t,e){var n=t.callbackNode;Qx(t,e);var i=Wl(t,t===Wt?Yt:0);if(i===0)n!==null&&ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ip(n),e===1)t.tag===0?Z2($p.bind(null,t)):F1($p.bind(null,t)),q2(function(){!(it&6)&&Cr()}),n=null;else{switch(d1(i)){case 1:n=L0;break;case 4:n=l1;break;case 16:n=Hl;break;case 536870912:n=c1;break;default:n=Hl}n=Iv(n,bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bv(t,e){if(Nl=-1,Ll=0,it&6)throw Error(pe(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=Wl(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lc(t,i);else{e=i;var r=it;it|=2;var s=Rv();(Wt!==t||Yt!==e)&&(Ni=null,to=Lt()+500,Xr(t,e));do try{_3();break}catch(a){Cv(t,a)}while(!0);X0(),sc.current=s,it=r,Ft!==null?e=0:(Wt=null,Yt=0,e=kt)}if(e!==0){if(e===2&&(r=Rd(t),r!==0&&(i=r,e=rf(t,r))),e===1)throw n=da,Xr(t,0),lr(t,i),xn(t,Lt()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!g3(r)&&(e=lc(t,i),e===2&&(s=Rd(t),s!==0&&(i=s,e=rf(t,s))),e===1))throw n=da,Xr(t,0),lr(t,i),xn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Ur(t,mn,Ni);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=oh+500-Lt(),10<e)){if(Wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Od(Ur.bind(null,t,mn,Ni),e);break}Ur(t,mn,Ni);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*m3(i/1960))-i,10<i){t.timeoutHandle=Od(Ur.bind(null,t,mn,Ni),i);break}Ur(t,mn,Ni);break;case 5:Ur(t,mn,Ni);break;default:throw Error(pe(329))}}}return xn(t,Lt()),t.callbackNode===n?bv.bind(null,t):null}function rf(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=lc(t,e),t!==2&&(e=mn,mn=n,e!==null&&sf(e)),t}function sf(t){mn===null?mn=t:mn.push.apply(mn,t)}function g3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~sh,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(it&6)throw Error(pe(327));Ws();var e=Wl(t,0);if(!(e&1))return xn(t,Lt()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var i=Rd(t);i!==0&&(e=i,n=rf(t,i))}if(n===1)throw n=da,Xr(t,0),lr(t,e),xn(t,Lt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mn,Ni),xn(t,Lt()),null}function ah(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(to=Lt()+500,Lc&&Cr())}}function Qr(t){dr!==null&&dr.tag===0&&!(it&6)&&Ws();var e=it;it|=1;var n=Bn.transition,i=lt;try{if(Bn.transition=null,lt=1,t)return t()}finally{lt=i,Bn.transition=n,it=e,!(it&6)&&Cr()}}function lh(){An=Fs.current,_t(Fs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,j2(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(V0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$l();break;case 3:Js(),_t(vn),_t(sn),Z0();break;case 5:K0(i);break;case 4:Js();break;case 13:_t(yt);break;case 19:_t(yt);break;case 10:j0(i.type._context);break;case 22:case 23:lh()}n=n.return}if(Wt=t,Ft=t=Sr(t.current,null),Yt=An=e,kt=0,da=null,sh=Fc=Zr=0,mn=jo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function Cv(t,e){do{var n=Ft;try{if(X0(),Cl.current=rc,ic){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(Kr=0,Vt=Ot=St=null,Wo=!1,la=0,rh.current=null,n===null||n.return===null){kt=1,da=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Fp(o);if(m!==null){m.flags&=-257,Op(m,o,a,s,e),m.mode&1&&Up(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){Up(s,c,e),ch();break e}l=Error(pe(426))}}else if(xt&&a.mode&1){var g=Fp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Op(g,o,a,s,e),H0(eo(l,a));break e}}s=l=eo(l,a),kt!==4&&(kt=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=dv(s,l,e);Rp(s,d);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xr===null||!xr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=fv(s,a,e);Rp(s,y);break e}}s=s.return}while(s!==null)}Nv(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function Rv(){var t=sc.current;return sc.current=rc,t===null?rc:t}function ch(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(Zr&268435455)&&!(Fc&268435455)||lr(Wt,Yt)}function lc(t,e){var n=it;it|=2;var i=Rv();(Wt!==t||Yt!==e)&&(Ni=null,Xr(t,e));do try{v3();break}catch(r){Cv(t,r)}while(!0);if(X0(),it=n,sc.current=i,Ft!==null)throw Error(pe(261));return Wt=null,Yt=0,kt}function v3(){for(;Ft!==null;)Pv(Ft)}function _3(){for(;Ft!==null&&!Hx();)Pv(Ft)}function Pv(t){var e=Dv(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?Nv(t):Ft=e,rh.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d3(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ft=null;return}}else if(n=u3(n,e,An),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);kt===0&&(kt=5)}function Ur(t,e,n){var i=lt,r=Bn.transition;try{Bn.transition=null,lt=1,x3(t,e,n,i)}finally{Bn.transition=r,lt=i}return null}function x3(t,e,n,i){do Ws();while(dr!==null);if(it&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jx(t,s),t===Wt&&(Ft=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Iv(Hl,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=lt;lt=1;var a=it;it|=4,rh.current=null,h3(t,n),Tv(n,t),z2(Ud),Xl=!!Id,Ud=Id=null,t.current=n,p3(n),Wx(),it=a,lt=o,Bn.transition=s}else t.current=n;if(Ha&&(Ha=!1,dr=t,ac=r),s=t.pendingLanes,s===0&&(xr=null),qx(n.stateNode),xn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(oc)throw oc=!1,t=tf,tf=null,t;return ac&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===nf?qo++:(qo=0,nf=t):qo=0,Cr(),null}function Ws(){if(dr!==null){var t=d1(ac),e=Bn.transition,n=lt;try{if(Bn.transition=null,lt=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,ac=0,it&6)throw Error(pe(331));var r=it;for(it|=4,Le=t.current;Le!==null;){var s=Le,o=s.child;if(Le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Le=c;Le!==null;){var f=Le;switch(f.tag){case 0:case 11:case 15:Xo(8,f,s)}var h=f.child;if(h!==null)h.return=f,Le=h;else for(;Le!==null;){f=Le;var u=f.sibling,m=f.return;if(Mv(f),f===c){Le=null;break}if(u!==null){u.return=m,Le=u;break}Le=m}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Le=o;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Le=d;break e}Le=s.return}}var p=t.current;for(Le=p;Le!==null;){o=Le;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Le=_;else e:for(o=p;Le!==null;){if(a=Le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(b){wt(a,a.return,b)}if(a===o){Le=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Le=y;break e}Le=a.return}}if(it=r,Cr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{lt=n,Bn.transition=e}}return!1}function Kp(t,e,n){e=eo(n,e),e=dv(t,e,1),t=_r(t,e,1),e=cn(),t!==null&&(ga(t,1,e),xn(t,e))}function wt(t,e,n){if(t.tag===3)Kp(t,t,n);else for(;e!==null;){if(e.tag===3){Kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=eo(n,t),t=fv(e,t,1),e=_r(e,t,1),t=cn(),e!==null&&(ga(e,1,t),xn(e,t));break}}e=e.return}}function y3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(kt===4||kt===3&&(Yt&130023424)===Yt&&500>Lt()-oh?Xr(t,0):sh|=n),xn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=cn();t=Hi(t,e),t!==null&&(ga(t,e,n),xn(t,n))}function S3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function M3(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Lv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,c3(t,e,n);gn=!!(t.flags&131072)}else gn=!1,xt&&e.flags&1048576&&O1(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=Ks(e,sn.current);Hs(e,n),r=J0(null,e,i,t,r,n);var s=eh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Y0(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,Wd(e,i,t,n),e=qd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&G0(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=w3(i),t=$n(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=zp(null,e,i,$n(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Bp(t,e,i,r,n);case 3:e:{if(gv(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,H1(t,e),tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(pe(423)),e),e=Gp(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(pe(424)),e),e=Gp(t,e,i,n,r);break e}else for(bn=vr(e.stateNode.containerInfo.firstChild),Cn=e,xt=!0,Zn=null,n=G1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Wi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return W1(e),t===null&&Gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Fd(i,r)?o=null:s!==null&&Fd(i,s)&&(e.flags|=32),mv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return vv(t,e,n);case 4:return $0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),kp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(Jl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!vn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Gn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),zp(t,e,i,r,n);case 15:return hv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pl(t,e),e.tag=1,_n(i)?(t=!0,Kl(e)):t=!1,Hs(e,n),uv(e,i,r),Wd(e,i,r,n),qd(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return pv(t,e,n)}throw Error(pe(156,e.tag))};function Iv(t,e){return a1(t,e)}function E3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new E3(t,e,n,i)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function w3(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===R0)return 11;if(t===P0)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return jr(n.children,r,s,e);case C0:o=8,r|=8;break;case pd:return t=zn(12,n,e,r|2),t.elementType=pd,t.lanes=s,t;case md:return t=zn(13,n,e,r),t.elementType=md,t.lanes=s,t;case gd:return t=zn(19,n,e,r),t.elementType=gd,t.lanes=s,t;case Wg:return Oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vg:o=10;break e;case Hg:o=9;break e;case R0:o=11;break e;case P0:o=14;break e;case sr:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function Oc(t,e,n,i){return t=zn(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function T3(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dh(t,e,n,i,r,s,o,a,l){return t=new T3(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Y0(s),t}function A3(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return wr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(_n(n))return U1(t,n,e)}return e}function Fv(t,e,n,i,r,s,o,a,l){return t=dh(n,i,!0,t,r,s,o,a,l),t.context=Uv(null),n=t.current,i=cn(),r=yr(n),s=ki(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,ga(t,r,i),xn(t,i),t}function kc(t,e,n,i){var r=e.current,s=cn(),o=yr(r);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(ni(t,r,o,s),bl(t,r,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){Zp(t,e),(t=t.alternate)&&Zp(t,e)}function b3(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function hh(t){this._internalRoot=t}zc.prototype.render=hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));kc(t,e,null,null)};zc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){kc(null,t,null,null)}),e[Vi]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=p1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&g1(t)}};function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function C3(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cc(o);s.call(c)}}var o=Fv(e,i,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=o,t[Vi]=o.current,ia(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cc(l);a.call(c)}}var l=dh(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=l,t[Vi]=l.current,ia(t.nodeType===8?t.parentNode:t),Qr(function(){kc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cc(o);a.call(l)}}kc(e,o,t,r)}else o=C3(n,e,t,r,i);return cc(o)}f1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(D0(e,n|1),xn(e,Lt()),!(it&6)&&(to=Lt()+500,Cr()))}break;case 13:Qr(function(){var i=Hi(t,1);if(i!==null){var r=cn();ni(i,t,1,r)}}),fh(t,1)}};I0=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=cn();ni(e,t,134217728,n)}fh(t,134217728)}};h1=function(t){if(t.tag===13){var e=yr(t),n=Hi(t,e);if(n!==null){var i=cn();ni(n,t,e,i)}fh(t,e)}};p1=function(){return lt};m1=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Ad=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nc(i);if(!r)throw Error(pe(90));jg(i),xd(i,r)}}}break;case"textarea":Yg(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};t1=ah;n1=Qr;var R3={usingClientEntryPoint:!1,Events:[_a,Ps,Nc,Jg,e1,ah]},So={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P3={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s1(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||b3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{bc=Wa.inject(P3),gi=Wa}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R3;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(e))throw Error(pe(200));return A3(t,e,null,n)};Pn.createRoot=function(t,e){if(!ph(t))throw Error(pe(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dh(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,ia(t.nodeType===8?t.parentNode:t),new hh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=s1(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Qr(t)};Pn.hydrate=function(t,e,n){if(!Bc(e))throw Error(pe(200));return Gc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!ph(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};Pn.render=function(t,e,n){if(!Bc(e))throw Error(pe(200));return Gc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(pe(40));return t._reactRootContainer?(Qr(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};Pn.unstable_batchedUpdates=ah;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Gc(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),kg.exports=Pn;var N3=kg.exports,zv,Jp=N3;zv=Jp.createRoot,Jp.hydrateRoot;function L3(){var e;const t=n=>!!n&&n!=="null"&&n!=="file://";try{const n=(e=window.location.ancestorOrigins)==null?void 0:e[0];if(t(n))return n}catch{}try{if(document.referrer){const n=new URL(document.referrer).origin;if(t(n))return n}}catch{}return"*"}var Au=L3(),em=3e5;function D3(){return Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function tm(t){const e=t==null?void 0:t.reason;return e instanceof Error?e:new DOMException("The stream was aborted.","AbortError")}function I3(t){const e=document.documentElement.style;for(const[n,i]of Object.entries(t))n.startsWith("--")&&e.setProperty(n,i)}function Bv(t,e={}){const n=e.apply!==!1,i=r=>{if(r.source!==window.parent)return;const s=r.data;!s||s.type!=="MNEMO_CONFIG_UPDATE"||(n&&(s.theme&&document.documentElement.setAttribute("data-theme",s.theme),s.tokens&&I3(s.tokens)),t==null||t({theme:s.theme,lang:s.lang,tokens:s.tokens,zoom:s.zoom}))};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)}var Gv=class{constructor(t){Wh(this,"pluginId");this.pluginId=t}invoke(t,e,n=em){return new Promise((i,r)=>{if(window.parent===window){r(new Error(`No Mnemosyne host: "${t}" was invoked outside the shell (this page is not embedded in a host iframe).`));return}const s=Math.random().toString(36).substring(7);let o,a=!1;const l=f=>{a||(a=!0,window.removeEventListener("message",c),o!==void 0&&window.clearTimeout(o),f())},c=f=>{f.source===window.parent&&(!f.data||f.data.type!=="MNEMO_PLUGIN_REPLY"||f.data.messageId===s&&l(()=>{f.data.success?i(f.data.data):r(new Error(f.data.error||"Unknown host error"))}))};window.addEventListener("message",c),n>0&&(o=window.setTimeout(()=>l(()=>r(new Error(`Host did not reply to "${t}" within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:s,action:t,payload:e},Au)})}stream(t,e,n={}){const{onChunk:i,signal:r}=n,s=n.timeoutMs??em;return new Promise((o,a)=>{if(window.parent===window){a(new Error(`No Mnemosyne host: "${t}" was streamed outside the shell (this page is not embedded in a host iframe).`));return}if(r!=null&&r.aborted){a(tm(r));return}const l=D3();let c="",f,h=!1;const u=()=>{f!==void 0&&(window.clearTimeout(f),f=void 0)},m=()=>{s<=0||(u(),f=window.setTimeout(()=>v(()=>a(new Error(`Host stalled on "${t}" — no chunk within ${Math.round(s/1e3)}s`))),s))},v=d=>{h||(h=!0,window.removeEventListener("message",g),r&&r.removeEventListener("abort",M),u(),d())},M=()=>{try{window.parent.postMessage({type:"MNEMO_PLUGIN_CANCEL",pluginId:this.pluginId,messageId:l},Au)}catch{}v(()=>a(tm(r)))},g=d=>{if(d.source!==window.parent)return;const p=d.data;if(!(!p||p.messageId!==l))switch(p.type){case"MNEMO_PLUGIN_CHUNK":{if(h)return;const _=typeof p.chunk=="string"?p.chunk:"";if(_){c+=_;try{i==null||i(_)}catch(y){console.error("[MNEMO-SDK] onChunk consumer threw:",y)}}m();break}case"MNEMO_PLUGIN_DONE":v(()=>o({text:c,data:p.data}));break;case"MNEMO_PLUGIN_ERROR":v(()=>a(new Error(p.error||"Unknown host stream error")));break}};window.addEventListener("message",g),r&&r.addEventListener("abort",M),m(),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:l,action:t,payload:e,stream:!0},Au)})}inferModel(t){return this.invoke("model.infer",t)}getModelConfig(){return this.invoke("model.getConfig")}status(){return this.invoke("mnemosyne.status")}query(t){return this.invoke("mnemosyne.query",{query:t})}ingest(t,e="SOCIAL_NODE"){return this.invoke("mnemosyne.ingest",{content:t,spineType:e})}socialIngest(t,e,n="SOCIAL_NODE"){return this.invoke("social.ingest",{vault:t,content:e,spineType:n})}socialQuery(t,e=100){return this.invoke("social.query",{vault:t,limit:e})}getTopologyMap(t){return this.invoke("getTopologyMap",t)}getScannedPapers(){return this.invoke("vault.getScannedPapers")}ensureSandbox(){return this.invoke("vault.sandbox.ensure",{})}describeVaultTile(t){return this.invoke("vault.sandbox.describeTile",t)}scanTree(){return this.invoke("vault.scanTree")}setDocWatch(t,e){return this.invoke("vault.setDocWatch",{path:t,config:e})}removeDocWatch(t,e){return this.invoke("vault.removeDocWatch",{path:t,watchPath:e})}selectFolder(t){return this.invoke("dialog.selectFolder",t,0)}selectFile(t){return this.invoke("dialog.selectFile",{filters:t},0)}readFile(t){return this.invoke("dialog.readFile",{filePath:t})}writeFile(t,e){return this.invoke("dialog.writeFile",{filePath:t,content:e})}readDir(t){return this.invoke("dialog.readDir",{dirPath:t})}openInOS(t){return this.invoke("dialog.openInOS",{filePath:t})}deleteProjectDir(t){return this.invoke("dialog.deleteProjectDir",{dirPath:t})}forgetSandbox(t){return this.invoke("vault.sandbox.forget",{ids:t})}getLinkedDev(){return this.invoke("plugins.getLinkedDev")}linkDev(t){return this.invoke("plugins.linkDev",{dirPath:t})}unlinkDev(t){return this.invoke("plugins.unlinkDev",{dirPath:t})}launchPlugin(t){return this.invoke("plugins.launch",{id:t})}getSystemMetrics(){return this.invoke("metrics.get")}creditsStatus(){return this.invoke("credits.status")}};function nm(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)?t:new URL(t.replace(/^\/+/,""),document.baseURI).toString()}const im="MCOS",rm=1,bu=48,U3=`
`,cs=t=>Number.isFinite(t)?t:null;function F3(t){if(t.byteLength<bu)throw new Error(`catalog.bin is ${t.byteLength} bytes; a header alone is ${bu}`);const e=new DataView(t),n=String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3));if(n!==im)throw new Error(`catalog.bin does not start with ${im} (got ${JSON.stringify(n)})`);const i=e.getUint16(4,!0);if(i!==rm)throw new Error(`catalog.bin is version ${i}, this build reads ${rm}`);const r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getFloat32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),f=e.getUint32(32,!0),h=e.getUint32(36,!0),u=e.getUint32(40,!0),m=e.getUint32(44,!0),v=bu,M=v+(f+3&-4),g=M+r*u,d=g+s*m;if(t.byteLength<d)throw new Error(`catalog.bin is truncated: header describes ${d} bytes, file is ${t.byteLength}`);const p=new TextDecoder().decode(new Uint8Array(t,v,f)).split(U3);if(p.length!==h)throw new Error(`catalog.bin string table says ${h} entries, blob holds ${p.length}`);const _=w=>p[w]??"",y=new Array(r);for(let w=0;w<r;w++){const A=M+w*u;y[w]={i:w,ra:e.getFloat32(A+0,!0),dec:e.getFloat32(A+4,!0),mag:e.getFloat32(A+8,!0),absmag:cs(e.getFloat32(A+12,!0)),dist:cs(e.getFloat32(A+16,!0)),ci:cs(e.getFloat32(A+20,!0)),hip:e.getInt32(A+24,!0)||null,hd:e.getInt32(A+28,!0)||null,con:_(e.getUint32(A+32,!0)),spect:_(e.getUint32(A+36,!0)),proper:_(e.getUint32(A+40,!0)),desig:_(e.getUint32(A+44,!0)),gliese:_(e.getUint32(A+48,!0))}}const b=new Array(s);for(let w=0;w<s;w++){const A=g+w*m;b[w]={i:w,ra:e.getFloat32(A+0,!0),dec:e.getFloat32(A+4,!0),mag:cs(e.getFloat32(A+8,!0)),majAx:cs(e.getFloat32(A+12,!0)),minAx:cs(e.getFloat32(A+16,!0)),con:_(e.getUint32(A+20,!0)),type:_(e.getUint32(A+24,!0)),name:_(e.getUint32(A+28,!0)),common:_(e.getUint32(A+32,!0)),messier:e.getUint16(A+36,!0)||null}}return{stars:y,dsos:b,truncation:{magLimit:o,starsOmitted:a,starsNoDistance:l,dsoOmitted:c}}}function O3(t,e){return e==="en"?t.name:t.i18n[e]||t.name}const k3={Alp:"α",Bet:"β",Gam:"γ",Del:"δ",Eps:"ε",Zet:"ζ",Eta:"η",The:"θ",Iot:"ι",Kap:"κ",Lam:"λ",Mu:"μ",Nu:"ν",Xi:"ξ",Omi:"ο",Pi:"π",Rho:"ρ",Sig:"σ",Tau:"τ",Ups:"υ",Phi:"φ",Chi:"χ",Psi:"ψ",Ome:"ω"};function Vv(t){const e=(t??"").trim();if(!e)return"";const n=/^(\d*)([A-Za-z]{2,3})(\d?)\s*(\w{3})$/.exec(e);if(!n)return e;const[,i,r,s,o]=n,a=k3[r];return a?[i||"",`${a}${s??""}`,o].filter(Boolean).join(" "):e}function ya(t){return t.hip?`HIP ${t.hip}`:t.hd?`HD ${t.hd}`:t.gliese?t.gliese:`HYG ${t.i}`}const z3=t=>t.startsWith("HYG ");function B3(t){const e=[],n=ya(t);t.proper&&e.push(t.proper);const i=Vv(t.desig);return i&&e.push(i),t.hip&&e.push(`HIP ${t.hip}`),t.hd&&e.push(`HD ${t.hd}`),t.gliese&&e.push(t.gliese),e.filter((r,s)=>r!==n&&e.indexOf(r)===s)}const Hv=(t,e,n)=>t.filter(i=>i!==e&&i!==n);function of(t){const e=ya(t),n=t.proper||Vv(t.desig)||e;return{id:e,name:n,kind:"star",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:Hv(B3(t),e,n),star:t}}function Sa(t){return t.name||(t.messier?`M${t.messier}`:`OpenNGC ${t.i}`)}function G3(t){const e=[];t.common&&e.push(t.common),t.messier&&e.push(`M${t.messier}`);const n=Sa(t);return e.filter((i,r)=>i!==n&&e.indexOf(i)===r)}function af(t){const e=Sa(t),n=t.common||(t.messier?`M${t.messier}`:t.name);return{id:e,name:n,kind:"dso",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:Hv(G3(t),e,n),dso:t}}function V3(t){const e=[t.name,t.id,...t.aliases].map(i=>i.trim()).filter((i,r,s)=>i&&s.indexOf(i)===r),n=e.slice(1).join(", ");return`What do my own notes say about ${e[0]}`+(n?` (also known as ${n})`:"")+"? Answer only from my memory. If my memory holds nothing about it, say exactly: NOTHING IN MEMORY."}const lf=Math.PI/180,Ci=100;function Yn(t,e,n=Ci){const i=t*lf,r=e*lf,s=Math.cos(r);return{x:n*s*Math.cos(i),y:n*Math.sin(r),z:-n*s*Math.sin(i)}}function H3(t,e,n=1){const i=Math.min(e,t),r=(e-i)/(e+2);return n*(.9+7*r*r)}function W3(t){if(t===null||!Number.isFinite(t))return null;const e=Math.min(2,Math.max(-.4,t)),n=Math.min(1,Math.max(0,.63+.55*e-.09*e*e)),i=Math.min(1,Math.max(0,.83-.03*e-.1*e*e)),r=Math.min(1,Math.max(0,1-.55*e+.06*e*e));return[n,i,r]}function Wv(t,e){const n=t[0]*e.x+t[4]*e.y+t[8]*e.z+t[12],i=t[1]*e.x+t[5]*e.y+t[9]*e.z+t[13],r=t[3]*e.x+t[7]*e.y+t[11]*e.z+t[15];if(r<=0)return{x:0,y:0,visible:!1};const s=n/r,o=i/r;return{x:s,y:o,visible:s>=-1&&s<=1&&o>=-1&&o<=1}}function X3(t,e,n,i,r=14){let s=null,o=1/0;for(let a=0;a<t.length;a++){const l=t[a],c=Wv(e,Yn(l.ra,l.dec));if(!c.visible)continue;const f=(c.x-n.x)*i.width/2,h=(c.y-n.y)*i.height/2,u=Math.hypot(f,h);u>r||(!s||u<s.distance-.5||Math.abs(u-s.distance)<=.5&&l.rank<o)&&(s={index:a,distance:u},o=l.rank)}return s}const Xv=2,jv=110,qv=t=>Math.min(jv,Math.max(Xv,t));function j3(t,e,n,i){const r=t.fov/Math.max(1,i),s=t.ra-e*r/Math.max(.2,Math.cos(t.dec*lf)),o=t.dec+n*r;return{ra:(s%360+360)%360,dec:Math.min(90,Math.max(-90,o)),fov:t.fov}}function q3(t,e){return{...t,fov:qv(t.fov*Math.pow(1.15,e))}}const Cu=(t,e,n)=>({...t,ra:(e%360+360)%360,dec:Math.min(90,Math.max(-90,n))});function Y3(t){const e=(t%360+360)%360/15,n=Math.floor(e),i=(e-n)*60,r=Math.floor(i),s=(i-r)*60;return`${n}h ${String(r).padStart(2,"0")}m ${s.toFixed(1).padStart(4,"0")}s`}function $3(t){const e=t<0?"-":"+",n=Math.abs(t),i=Math.floor(n),r=(n-i)*60,s=Math.floor(r),o=(r-s)*60;return`${e}${i}° ${String(s).padStart(2,"0")}′ ${o.toFixed(0).padStart(2,"0")}″`}function K3(t){if(t===null||!Number.isFinite(t)||t<=0)return null;const e=t*3.261563777;return e<10?`${e.toFixed(2)} ly`:e<1e3?`${e.toFixed(0)} ly`:`${Math.round(e/100)/10} kly`}/**
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
 */const Yv=173.1446326846693,Di=14959787069098932e-8,at=.017453292519943295,sm=.26179938779914946,_i=57.29577951308232,$v=3.819718634205488,Z3=365.24217,om=new Date("2000-01-01T12:00:00Z"),Ri=2*Math.PI,Qi=3600*(180/Math.PI),Os=484813681109536e-20,Kv=180*60*60,Q3=2*Kv,am=7292115e-11,J3=Kv/Math.PI,ey=-.17-5*Math.log10(J3),Zv=24*3600,ty=.9972695717592592,ny=695700,iy=ny/Di,Xs=.996647180302104,ry=Xs*Xs,fa=6378.1366,sy=fa/Di,oy=1738.1,ay=oy/Di,ly=34/60,Qv=81.30056,mh=.0002959122082855911,cf=2825345909524226e-22,uf=8459715185680659e-23,df=1292024916781969e-23,ff=1524358900784276e-23;function uc(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function Tt(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function us(t){return t-Math.floor(t)}function cy(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:_i*Math.acos(r)}var ge;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ge||(ge={}));const uy=[ge.Star1,ge.Star2,ge.Star3,ge.Star4,ge.Star5,ge.Star6,ge.Star7,ge.Star8],dy=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function fy(t){const e=uy.indexOf(t);return e>=0?dy[e]:null}function gh(t){const e=fy(t);return e&&e.dist>0?e:null}var Hn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Hn||(Hn={}));const Fi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function hy(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/Z3;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let py=hy;function lm(t){return t+py(t)/86400}class Mr{constructor(e){if(e instanceof Mr){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-om.getTime())/n,this.tt=lm(this.ut);return}if(Number.isFinite(e)){this.date=new Date(om.getTime()+e*n),this.ut=e,this.tt=lm(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new Mr(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Mr(this.ut+e)}}function my(t,e,n){return new Mr(t.ut+n*(e.ut-t.ut))}function Mn(t){return t instanceof Mr?t:new Mr(t)}function gy(t){function e(u){return u%Q3*Os}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,f=(92052331+9086*n)*l+15377*a,h=2*(r-s+o);return a=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*n)*a-13696*l,f+=(5730336-3015*n)*l-4587*a,h=2*(r+o),a=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*n)*a+2796*l,f+=(978459-485*n)*l+1374*a,h=2*o,a=Math.sin(h),l=Math.cos(h),c+=(2074554+207*n)*a-698*l,f+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,f+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+f*1e-7}}function Jv(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var Xa;function vh(t){if(!Xa||Math.abs(Xa.tt-t.tt)>1e-6){const e=gy(t),n=Jv(t),i=n+e.deps/3600;Xa={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*at)/15,mobl:n,tobl:i}}return Xa}function vy(t,e){const n=t*at,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function _y(t,e){return vy(Jv(t),e)}function xy(t){const e=t.tt/36525;function n(Ue,we){const Ie=[];let Ve;for(Ve=0;Ve<=we-Ue;++Ve)Ie.push(0);return{min:Ue,array:Ie}}function i(Ue,we,Ie,Ve){const ke=[];for(let et=0;et<=we-Ue;++et)ke.push(n(Ie,Ve));return{min:Ue,array:ke}}function r(Ue,we,Ie){const Ve=Ue.array[we-Ue.min];return Ve.array[Ie-Ve.min]}function s(Ue,we,Ie,Ve){const ke=Ue.array[we-Ue.min];ke.array[Ie-ke.min]=Ve}let o,a,l,c,f,h,u,m,v,M,g,d,p,_,y,b,w,A,x,C,N,R,k,$=i(-6,6,1,4),te=i(-6,6,1,4);function F(Ue,we){return r($,Ue,we)}function X(Ue,we){return r(te,Ue,we)}function I(Ue,we,Ie){return s($,Ue,we,Ie)}function L(Ue,we,Ie){return s(te,Ue,we,Ie)}function O(Ue,we,Ie,Ve,ke){ke(Ue*Ie-we*Ve,we*Ie+Ue*Ve)}function B(Ue){return Math.sin(Ri*Ue)}u=e*e,v=0,k=0,g=0,d=3422.7;var se=B(.19833+.05611*e),ce=B(.27869+.04508*e),ne=B(.16827-.36903*e),me=B(.34734-5.37261*e),Se=B(.10498-5.37899*e),q=B(.42681-.41855*e),he=B(.14943-5.37511*e);for(A=.84*se+.31*ce+14.27*ne+7.26*me+.28*Se+.24*q,x=2.94*se+.31*ce+14.27*ne+9.34*me+1.12*Se+.83*q,C=-6.4*se-1.89*q,N=.21*se+.31*ce+14.27*ne-88.7*me-15.3*Se+.24*q-1.86*he,R=A-C,m=-3332e-9*B(.59734-5.37261*e)-539e-9*B(.35498-5.37899*e)-64e-9*B(.39943-5.37511*e),p=Ri*us(.60643382+1336.85522467*e-313e-8*u)+A/Qi,_=Ri*us(.37489701+1325.55240982*e+2565e-8*u)+x/Qi,y=Ri*us(.99312619+99.99735956*e-44e-8*u)+C/Qi,b=Ri*us(.25909118+1342.2278298*e-892e-8*u)+N/Qi,w=Ri*us(.82736186+1236.85308708*e-397e-8*u)+R/Qi,f=1;f<=4;++f){switch(f){case 1:l=_,a=4,c=1.000002208;break;case 2:l=y,a=3,c=.997504612-.002495388*e;break;case 3:l=b,a=4,c=1.000002708+139.978*m;break;case 4:l=w,a=6,c=1;break;default:throw`Internal error: I = ${f}`}for(I(0,f,1),I(1,f,Math.cos(l)*c),L(0,f,0),L(1,f,Math.sin(l)*c),h=2;h<=a;++h)O(F(h-1,f),X(h-1,f),F(1,f),X(1,f),(Ue,we)=>(I(h,f,Ue),L(h,f,we)));for(h=1;h<=a;++h)I(-h,f,F(h,f)),L(-h,f,-X(h,f))}function fe(Ue,we,Ie,Ve){for(var ke={x:1,y:0},et=[0,Ue,we,Ie,Ve],Ze=1;Ze<=4;++Ze)et[Ze]!==0&&O(ke.x,ke.y,F(et[Ze],Ze),X(et[Ze],Ze),(bt,U)=>(ke.x=bt,ke.y=U));return ke}function V(Ue,we,Ie,Ve,ke,et,Ze,bt){var U=fe(ke,et,Ze,bt);v+=Ue*U.y,k+=we*U.y,g+=Ie*U.x,d+=Ve*U.x}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0);function K(Ue,we,Ie,Ve,ke){return Ue*fe(we,Ie,Ve,ke).y}M=0,M+=K(-526.069,0,0,1,-2),M+=K(-3.352,0,0,1,-4),M+=K(44.297,1,0,1,-2),M+=K(-6,1,0,1,-4),M+=K(20.599,-1,0,1,0),M+=K(-30.598,-1,0,1,-2),M+=K(-24.649,-2,0,1,0),M+=K(-2,-2,0,1,-2),M+=K(-22.571,0,1,1,-2),M+=K(10.985,0,-1,1,-2),v+=.82*B(.7736-62.5512*e)+.31*B(.0466-125.1025*e)+.35*B(.5785-25.1042*e)+.66*B(.4591+1335.8075*e)+.64*B(.313-91.568*e)+1.14*B(.148+1331.2898*e)+.21*B(.5918+1056.5859*e)+.44*B(.5784+1322.8595*e)+.24*B(.2275-5.7374*e)+.28*B(.2965+2.6929*e)+.33*B(.3132+6.3368*e),o=b+k/Qi;let _e=(1.000002708+139.978*m)*(18518.511+1.189+g)*Math.sin(o)-6.24*Math.sin(3*o)+M;return{geo_eclip_lon:Ri*us((p+v/Qi)/Ri),geo_eclip_lat:Math.PI/(180*3600)*_e,distance_au:Qi*sy/(.999953253*d)}}function e_(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function dc(t,e,n){const i=yy(e,n);return e_(i,t)}function yy(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=Os,r*=Os,s*=Os,o*=Os;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),f=Math.cos(-r),h=Math.sin(-s),u=Math.cos(-s),m=Math.sin(o),v=Math.cos(o),M=v*f-c*m*u,g=v*c*l+m*u*f*l-a*m*h,d=v*c*a+m*u*f*a+l*m*h,p=-m*f-c*v*u,_=-m*c*l+v*u*f*l-a*v*h,y=-m*c*a+v*u*f*a+l*v*h,b=c*h,w=-h*f*l-a*u,A=-h*f*a+u*l;if(e===Hn.Into2000)return new fc([[M,g,d],[p,_,y],[b,w,A]]);if(e===Hn.From2000)return new fc([[M,p,b],[g,_,w],[d,y,A]]);throw"Invalid precess direction"}function Sy(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let ja;function t_(t){if(!ja||ja.tt!==t.tt){const e=t.tt/36525;let n=15*vh(t).ee;const i=Sy(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),ja={tt:t.tt,st:s}}return ja.st}function My(t,e){const n=t.latitude*at,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,Xs*i),o=ry*s,a=t.height/1e3,l=fa*s+a,c=fa*o+a,f=(15*e+t.longitude)*at,h=Math.sin(f),u=Math.cos(f);return{pos:[l*r*u/Di,l*r*h/Di,c*i/Di],vel:[-am*l*r*h*86400/Di,am*l*r*u*86400/Di,0]}}function hf(t,e,n){const i=Ey(e,n);return e_(i,t)}function Ey(t,e){const n=vh(t),i=n.mobl*at,r=n.tobl*at,s=n.dpsi*Os,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s),u=f,m=-h*o,v=-h*a,M=h*l,g=f*o*l+a*c,d=f*a*l-o*c,p=h*c,_=f*o*c-a*l,y=f*a*c+o*l;if(e===Hn.From2000)return new fc([[u,M,p],[m,g,_],[v,d,y]]);if(e===Hn.Into2000)return new fc([[u,m,v],[M,g,d],[p,_,y]]);throw"Invalid precess direction"}function n_(t,e,n){return n===Hn.Into2000?dc(hf(t,e,n),e,n):hf(dc(t,e,n),e,n)}function wy(t,e){const n=t_(t),i=My(e,n).pos;return n_(i,t,Hn.Into2000)}class It{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class fr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Ty{constructor(e,n,i){this.lat=Tt(e),this.lon=Tt(n),this.dist=Tt(i)}}class cm{constructor(e,n,i,r){this.ra=Tt(e),this.dec=Tt(n),this.dist=Tt(i),this.vec=r}}class fc{constructor(e){this.rot=e}}class Ay{constructor(e,n,i,r){this.azimuth=Tt(e),this.altitude=Tt(n),this.ra=Tt(i),this.dec=Tt(r)}}class by{constructor(e,n,i){this.vec=e,this.elat=Tt(n),this.elon=Tt(i)}}function Cy(t,e){return new It(t[0],t[1],t[2],e)}function Ry(t,e){const n=Cy(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new cm(0,n.z<0?-90:90,r,n)}let s=$v*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=_i*Math.atan2(t[2],Math.sqrt(i));return new cm(s,o,r,n)}function Ru(t,e){const n=t*at,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function i_(t,e,n,i,r){let s=Mn(t);Vc(e),Tt(n),Tt(i);const o=Math.sin(e.latitude*at),a=Math.cos(e.latitude*at),l=Math.sin(e.longitude*at),c=Math.cos(e.longitude*at),f=Math.sin(i*at),h=Math.cos(i*at),u=Math.sin(n*sm),m=Math.cos(n*sm);let v=[a*c,a*l,o],M=[-o*c,-o*l,a],g=[l,-c,0];const d=-15*t_(s);let p=Ru(d,v),_=Ru(d,M),y=Ru(d,g),b=[h*m,h*u,f];const w=b[0]*p[0]+b[1]*p[1]+b[2]*p[2],A=b[0]*_[0]+b[1]*_[1]+b[2]*_[2],x=b[0]*y[0]+b[1]*y[1]+b[2]*y[2];let C=Math.hypot(A,x),N;C>0?(N=-_i*Math.atan2(x,A),N<0&&(N+=360)):N=0;let R=_i*Math.atan2(C,w),k=n,$=i;if(r){let te=R,F=sS(r,90-R);if(R-=F,F>0&&R>3e-4){const X=Math.sin(R*at),I=Math.cos(R*at),L=Math.sin(te*at),O=Math.cos(te*at),B=[];for(let se=0;se<3;++se)B.push((b[se]-O*p[se])/L*X+p[se]*I);C=Math.hypot(B[0],B[1]),C>0?(k=$v*Math.atan2(B[1],B[0]),k<0&&(k+=24)):k=0,$=_i*Math.atan2(B[2],C)}}return new Ay(N,90-R,k,$)}function Vc(t){if(!(t instanceof hc))throw`Not an instance of the Observer class: ${t}`;if(Tt(t.latitude),Tt(t.longitude),Tt(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class hc{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,Vc(this)}}function r_(t,e,n,i,r){Vc(n),uc(i),uc(r);const s=Mn(e),o=wy(s,n),a=Ef(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]],c=n_(l,s,Hn.From2000);return Ry(c,s)}function Py(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=_i*Math.atan2(r,i),a<0&&(a+=360));let l=_i*Math.atan2(s,o),c=new It(i,r,s,t.t);return new by(c,l,a)}function pf(t){const e=vh(t.t),n=[t.x,t.y,t.z],i=dc(n,t.t,Hn.From2000),[r,s,o]=hf(i,t.t,Hn.From2000),a=new It(r,s,o,t.t),l=e.tobl*at;return Py(a,Math.cos(l),Math.sin(l))}function no(t){const e=Mn(t),n=xy(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=_y(e,r),o=dc(s,e,Hn.Into2000);return new It(o[0],o[1],o[2],e)}function s_(t){const e=Mn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=no(i),o=no(r);return new fr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function Ny(t){const e=Mn(t),n=s_(e),i=1+Qv;return new fr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function js(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,f]of s)o+=l*Math.cos(c+e*f);let a=i*o;n&&(a%=Ri),r+=a,i*=e}return r}function Pu(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,f,h]of o){let u=f+e*h;a+=c*h*Math.sin(u),s>0&&(l+=c*Math.cos(u))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const Fo=365250,mf=0,gf=1,vf=2;function _f(t){return new tn(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function o_(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Yo(t,e){const n=e.tt/Fo,i=js(t[mf],n,!0),r=js(t[gf],n,!1),s=js(t[vf],n,!1),o=o_(i,r,s);return _f(o).ToAstroVector(e)}function xf(t,e){const n=e/Fo,i=js(t[mf],n,!0),r=js(t[gf],n,!1),s=js(t[vf],n,!1),o=Pu(t[mf],n),a=Pu(t[gf],n),l=Pu(t[vf],n),c=Math.cos(i),f=Math.sin(i),h=Math.cos(r),u=Math.sin(r),m=+(l*h*c)-s*u*c*a-s*h*f*o,v=+(l*h*f)-s*u*f*a+s*h*c*o,M=+(l*u)+s*h*a,g=o_(i,r,s),d=[m/Fo,v/Fo,M/Fo],p=_f(g),_=_f(d);return new Jr(e,p,_)}function qa(t,e,n,i){const r=i/(i+mh),s=Yo(Fi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function Ly(t){const e=new It(0,0,0,t);return qa(e,t,ge.Jupiter,cf),qa(e,t,ge.Saturn,uf),qa(e,t,ge.Uranus,df),qa(e,t,ge.Neptune,ff),e}const yf=51,Dy=29200,ks=146,Pi=201,Vr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class tn{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new tn(this.x,this.y,this.z)}ToAstroVector(e){return new It(this.x,this.y,this.z,e)}static zero(){return new tn(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new tn(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new tn(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new tn(e*this.x,e*this.y,e*this.z)}div(e){return new tn(this.x/e,this.y/e,this.z/e)}mean(e){return new tn((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new tn(-this.x,-this.y,-this.z)}}class Jr{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new Jr(this.tt,this.r,this.v)}sub(e){return new Jr(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function Iy(t){let[e,[n,i,r],[s,o,a]]=t;return new Jr(e,new tn(n,i,r),new tn(s,o,a))}function Ya(t,e,n,i){const r=i/(i+mh),s=xf(Fi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function Mo(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class Hc{constructor(e){let n=new Jr(e,new tn(0,0,0),new tn(0,0,0));this.Jupiter=Ya(n,e,ge.Jupiter,cf),this.Saturn=Ya(n,e,ge.Saturn,uf),this.Uranus=Ya(n,e,ge.Uranus,df),this.Neptune=Ya(n,e,ge.Neptune,ff),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new Jr(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=Mo(e,mh,this.Sun.r);return n.incr(Mo(e,cf,this.Jupiter.r)),n.incr(Mo(e,uf,this.Saturn.r)),n.incr(Mo(e,df,this.Uranus.r)),n.incr(Mo(e,ff,this.Neptune.r)),n}}class Wc{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new Wc(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class a_{constructor(e,n){this.bary=e,this.grav=n}}function pc(t,e,n,i){return new tn(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function um(t,e,n){return new tn(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Sf(t,e){const n=t-e.tt,i=new Hc(t),r=pc(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=pc(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new Wc(t,o,a,l);return new a_(i,c)}const Uy=[];function l_(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Mf(t){const e=Iy(t),n=new Hc(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new Wc(e.tt,i,r,s);return new a_(n,o)}function Fy(t,e){const n=Vr[0][0];if(e<n||e>Vr[yf-1][0])return null;const i=l_((e-n)/Dy,yf-1);if(!t[i]){const s=t[i]=[];s[0]=Mf(Vr[i]).grav,s[Pi-1]=Mf(Vr[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Pi-1;++o)s[o]=Sf(a+=ks,s[o-1]).grav;a=s[Pi-1].tt;var r=[];for(r[Pi-1]=s[Pi-1],o=Pi-2;o>0;--o)r[o]=Sf(a-=ks,r[o+1]).grav;for(o=Pi-2;o>0;--o){const l=o/(Pi-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function dm(t,e,n){let i=Mf(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Sf(s+1===r?e:i.grav.tt+n,i.grav);return i}function c_(t,e){let n,i,r;const s=Fy(Uy,t.tt);if(s){const o=l_((t.tt-s[0].tt)/ks,Pi-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),f=pc(t.tt-a.tt,a.r,a.v,c),h=um(t.tt-a.tt,a.v,c),u=pc(t.tt-l.tt,l.r,l.v,c),m=um(t.tt-l.tt,l.v,c),v=(t.tt-a.tt)/ks;n=f.mul(1-v).add(u.mul(v)),i=h.mul(1-v).add(m.mul(v))}else{let o;t.tt<Vr[0][0]?o=dm(Vr[0],t.tt,-ks):o=dm(Vr[yf-1],t.tt,+ks),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new Hc(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new fr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function qr(t,e){var n=Mn(e);if(t in Fi)return Yo(Fi[t],n);if(t===ge.Pluto){const o=c_(n);return new It(o.x,o.y,o.z,n)}if(t===ge.Sun)return new It(0,0,0,n);if(t===ge.Moon){var i=Yo(Fi.Earth,n),r=no(n);return new It(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===ge.EMB){const o=Yo(Fi.Earth,n),a=no(n),l=1+Qv;return new It(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===ge.SSB)return Ly(n);const s=gh(t);if(s){const o=new Ty(s.dec,15*s.ra,s.dist);return rS(o,n)}throw`HelioVector: Unknown body "${t}"`}function Oy(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/Yv;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class ky{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=qr(this.observerBody,e));const n=qr(this.targetBody,e);return new It(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function zy(t,e,n,i){uc(i);const r=Mn(t);if(gh(n)){const a=qr(n,r);if(i){const c=Gy(e,r),f=new It(a.x-c.x,a.y-c.y,a.z-c.z,r),h=Yv/f.Length();return new It(f.x+c.vx/h,f.y+c.vy/h,f.z+c.vz/h,r)}const l=qr(e,r);return new It(a.x-l.x,a.y-l.y,a.z-l.z,r)}let s;i?s=new It(0,0,0,r):s=qr(e,r);const o=new ky(e,n,i,s);return Oy(a=>o.Position(a),r)}function Ef(t,e,n){uc(n);const i=Mn(e);switch(t){case ge.Earth:return new It(0,0,0,i);case ge.Moon:return no(i);default:const r=zy(i,ge.Earth,t,n);return r.t=i,r}}function By(t,e){return new fr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function Gy(t,e){const n=Mn(e);switch(t){case ge.Sun:return new fr(0,0,0,0,0,0,n);case ge.SSB:const i=new Hc(n.tt);return new fr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case ge.Mercury:case ge.Venus:case ge.Earth:case ge.Mars:case ge.Jupiter:case ge.Saturn:case ge.Uranus:case ge.Neptune:const r=xf(Fi[t],n.tt);return By(r,n);case ge.Pluto:return c_(n);case ge.Moon:case ge.EMB:const s=xf(Fi.Earth,n.tt),o=t==ge.Moon?s_(n):Ny(n);return new fr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(gh(t)){const a=qr(t,n);return new fr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function Vy(t,e,n,i,r){let s=(r+n)/2-i,o=(r-n)/2,a=i,l;if(s==0){if(o==0||(l=-a/o,l<-1||l>1))return null}else{let h=o*o-4*s*a;if(h<=0)return null;let u=Math.sqrt(h),m=(-o+u)/(2*s),v=(-o-u)/(2*s);if(-1<=m&&m<=1){if(-1<=v&&v<=1)return null;l=m}else if(-1<=v&&v<=1)l=v;else return null}let c=t+l*e,f=(2*s*l+o)/e;return{t:c,df_dt:f}}function Hy(t,e,n,i){const r=Tt(i&&i.dt_tolerance_seconds||1),s=Math.abs(r/Zv);let o=i&&i.init_f1||t(e),a=i&&i.init_f2||t(n),l=NaN,c=0,f=i&&i.iter_limit||20,h=!0;for(;;){if(++c>f)throw"Excessive iteration in Search()";let u=my(e,n,.5),m=u.ut-e.ut;if(Math.abs(m)<s)return u;h?l=t(u):h=!0;let v=Vy(u.ut,n.ut-u.ut,o,l,a);if(v){let M=Mn(v.t),g=t(M);if(v.df_dt!==0){if(Math.abs(g/v.df_dt)<s)return M;let d=1.2*Math.abs(g/v.df_dt);if(d<m/10){let p=M.AddDays(-d),_=M.AddDays(+d);if((p.ut-e.ut)*(p.ut-n.ut)<0&&(_.ut-e.ut)*(_.ut-n.ut)<0){let y=t(p),b=t(_);if(y<0&&b>=0){o=y,a=b,e=p,n=_,l=g,h=!1;continue}}}}}if(o<0&&l>=0){n=u,a=l;continue}if(l<0&&a>=0){e=u,o=l;continue}return null}}function Wy(t){for(;t<0;)t+=360;for(;t>=360;)t-=360;return t}function Xy(t,e,n){if(t===ge.Earth||e===ge.Earth)throw"The Earth does not have a longitude as seen from itself.";const i=Mn(n),r=Ef(t,i,!1),s=pf(r),o=Ef(e,i,!1),a=pf(o);return Wy(s.elon-a.elon)}function jy(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case ge.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case ge.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case ge.Mars:r=-1.52,s=1.6;break;case ge.Jupiter:r=-9.4,s=.5;break;case ge.Uranus:r=-7.19,s=.25;break;case ge.Neptune:r=-6.87;break;case ge.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function qy(t,e,n,i,r){const s=pf(i),o=at*28.06,a=at*(169.51+382e-7*r.tt),l=at*s.elat,c=at*s.elon,f=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),h=Math.sin(Math.abs(f));let u=-9+.044*t;return u+=h*(-2.6+1.2*h),u+=5*Math.log10(e*n),{mag:u,ring_tilt:_i*f}}function Yy(t,e,n){let i=t*at,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Di;let l=n/a;return o+=5*Math.log10(e*l),o}class $y{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(at*i))/2}}function u_(t,e){if(t===ge.Earth)throw"The illumination of the Earth is not defined.";const n=Mn(e),i=Yo(Fi.Earth,n);let r,s,o,a;t===ge.Sun?(o=new It(-i.x,-i.y,-i.z,n),s=new It(0,0,0,n),r=0):(t===ge.Moon?(o=no(n),s=new It(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=qr(t,e),o=new It(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=cy(o,s));let l=o.Length(),c=s.Length(),f;if(t===ge.Sun)a=ey+5*Math.log10(l);else if(t===ge.Moon)a=Yy(r,c,l);else if(t===ge.Saturn){const h=qy(r,c,l,o,n);a=h.mag,f=h.ring_tilt}else a=jy(t,r,c,l);return new $y(n,a,r,c,l,o,s,f)}function Ky(t){return Xy(ge.Moon,ge.Sun,t)}class Zy{constructor(e,n,i){this.pressure=e,this.temperature=n,this.density=i}}function Qy(t){if(!Number.isFinite(t)||t<-500||t>1e5)throw`Invalid elevation: ${t}`;let r,s;t<=11e3?(r=288.15-.0065*t,s=101325*Math.pow(288.15/r,-5.25577)):t<=2e4?(r=216.65,s=22632*Math.exp(-.00015768832*(t-11e3))):(r=216.65+.001*(t-2e4),s=5474.87*Math.pow(216.65/r,34.16319));const o=s/r/(101325/288.15);return new Zy(s,r,o)}function Jy(t,e){const n=t.latitude*at,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,i*Xs),o=s*(Xs*Xs),a=(t.height-e)/1e3,l=fa*s+a,c=fa*o+a,f=1e3*Math.hypot(l*r,c*i),h=.175*Math.pow(1-.0065/283.15*(t.height-2/3*e),3.256);return _i*-(Math.sqrt(2*(1-h)*e/f)/(1-h))}function eS(t){switch(t){case ge.Sun:return iy;case ge.Moon:return ay;default:return 0}}function fm(t,e,n,i,r,s=0){if(!Number.isFinite(s)||s<0)throw`Invalid value for metersAboveGround: ${s}`;const o=eS(t),a=Qy(e.height-s),c=Jy(e,s)-ly*a.density;return iS(t,e,n,i,r,o,c)}class tS{constructor(e,n,i,r){this.tx=e,this.ty=n,this.ax=i,this.ay=r}}function wf(t,e,n,i,r,s,o){if(s<0&&o>=0)return new tS(i,r,s,o);if(s>=0&&o<0)return null;if(t>17)throw"Excessive recursion in rise/set ascent search.";const a=r.ut-i.ut;if(a*Zv<1||Math.min(Math.abs(s),Math.abs(o))>n*(a/2))return null;const c=new Mr((i.ut+r.ut)/2),f=e(c);return wf(1+t,e,n,i,c,s,f)||wf(1+t,e,n,c,r,f,o)}function nS(t,e){if(e<-90||e>90)throw`Invalid geographic latitude: ${e}`;let n,i;switch(t){case ge.Moon:n=4.5,i=8.2;break;case ge.Sun:n=.8,i=.5;break;case ge.Mercury:n=-1.6,i=1;break;case ge.Venus:n=-.8,i=.6;break;case ge.Mars:n=-.5,i=.4;break;case ge.Jupiter:case ge.Saturn:case ge.Uranus:case ge.Neptune:case ge.Pluto:n=-.2,i=.2;break;case ge.Star1:case ge.Star2:case ge.Star3:case ge.Star4:case ge.Star5:case ge.Star6:case ge.Star7:case ge.Star8:n=-.008,i=.008;break;default:throw`Body not allowed for altitude search: ${t}`}const r=at*e;return Math.abs((360/ty-n)*Math.cos(r))+Math.abs(i*Math.sin(r))}function iS(t,e,n,i,r,s,o){if(Vc(e),Tt(r),Tt(s),Tt(o),o<-90||o>90)throw`Invalid target altitude angle: ${o}`;const a=nS(t,e.latitude);function l(v){const M=r_(t,v,e,!0,!0),d=i_(v,e,M.ra,M.dec).altitude+_i*Math.asin(s/M.dist);return n*(d-o)}const c=Mn(i);let f=c,h=c,u=l(f),m=u;for(;;){h=f.AddDays(.42),m=l(h);const v=wf(0,l,a,f,h,u,m);if(v){const M=Hy(l,v.tx,v.ty,{dt_tolerance_seconds:.1,init_f1:v.ax,init_f2:v.ay});if(M)return M.ut>c.ut+r?null:M;throw`Rise/set search failed after finding ascent: t1=${f}, t2=${h}, a1=${u}, a2=${m}`}{if(h.ut>c.ut+r)return null;f=h,u=m}}}var hm;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(hm||(hm={}));function rS(t,e){e=Mn(e);const n=t.lat*at,i=t.lon*at,r=t.dist*Math.cos(n);return new It(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function sS(t,e){let n;if(Tt(e),e<-90||e>90)return 0;if(t==="normal"||t==="jplhor"){let i=e;i<-1&&(i=-1),n=1.02/Math.tan((i+10.3/(i+5.11))*at)/60,t==="normal"&&e<-1&&(n*=(e+90)/89)}else if(!t)n=0;else throw`Invalid refraction option: ${t}`;return n}var pm;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(pm||(pm={}));var mm;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(mm||(mm={}));const oS=[ge.Sun,ge.Moon,ge.Mercury,ge.Venus,ge.Mars,ge.Jupiter,ge.Saturn,ge.Uranus,ge.Neptune,ge.Pluto];function aS(t,e){const n=e?new hc(e.latitude,e.longitude,e.elevation):new hc(0,0,0);return oS.map(i=>{const r=r_(i,t,n,!0,!0);let s=null,o=null;try{const l=u_(i,t);s=l.mag,o=l.geo_dist}catch{s=null,o=null}const a=e?i_(t,n,r.ra,r.dec,"normal"):null;return{body:i,ra:r.ra*15,dec:r.dec,mag:s,au:o,altitude:a?a.altitude:null,azimuth:a?a.azimuth:null}})}function lS(t,e,n){if(!n)return null;const i=new hc(n.latitude,n.longitude,n.elevation);try{const r=fm(t,i,1,e,1),s=fm(t,i,-1,e,1);return{rise:r?r.date:null,set:s?s.date:null,searched:!0}}catch{return null}}function cS(t){const e=(t%360+360)%360;return e<1||e>=359?"new":Math.abs(e-90)<1?"firstQuarter":Math.abs(e-180)<1?"full":Math.abs(e-270)<1?"lastQuarter":e<90?"waxingCrescent":e<180?"waxingGibbous":e<270?"waningGibbous":"waningCrescent"}function uS(t){const e=Ky(t),n=u_(ge.Moon,t);return{phaseAngle:e,illuminated:n.phase_fraction,phase:cS(e)}}function dS(t,e,n,i){const r=Number(t.trim().replace(",","."));if(!Number.isFinite(r)||r<-90||r>90)return{ok:!1,why:"latitude"};const s=Number(e.trim().replace(",","."));if(!Number.isFinite(s)||s<-180||s>180)return{ok:!1,why:"longitude"};const o=n.trim(),a=o===""?0:Number(o.replace(",","."));return!Number.isFinite(a)||a<-500||a>9e3?{ok:!1,why:"elevation"}:{ok:!0,place:{latitude:r,longitude:s,elevation:a,label:i.trim()}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="184",fS=0,gm=1,hS=2,Il=1,pS=2,Oo=3,Tr=0,yn=1,Qn=2,zi=0,qs=1,Tf=2,vm=3,_m=4,mS=5,Or=100,gS=101,vS=102,_S=103,xS=104,yS=200,SS=201,MS=202,ES=203,Af=204,bf=205,wS=206,TS=207,AS=208,bS=209,CS=210,RS=211,PS=212,NS=213,LS=214,Cf=0,Rf=1,Pf=2,io=3,Nf=4,Lf=5,Df=6,If=7,d_=0,DS=1,IS=2,xi=0,f_=1,h_=2,p_=3,m_=4,g_=5,v_=6,__=7,x_=300,es=301,ro=302,Nu=303,Lu=304,Xc=306,Uf=1e3,Oi=1001,Ff=1002,qt=1003,US=1004,$a=1005,rn=1006,Du=1007,Hr=1008,kn=1009,y_=1010,S_=1011,ha=1012,xh=1013,Si=1014,pi=1015,Xi=1016,yh=1017,Sh=1018,pa=1020,M_=35902,E_=35899,w_=1021,T_=1022,ei=1023,ji=1026,Wr=1027,A_=1028,Mh=1029,ts=1030,Eh=1031,wh=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,Of=35840,kf=35841,zf=35842,Bf=35843,Gf=36196,Vf=37492,Hf=37496,Wf=37488,Xf=37489,mc=37490,jf=37491,qf=37808,Yf=37809,$f=37810,Kf=37811,Zf=37812,Qf=37813,Jf=37814,e0=37815,t0=37816,n0=37817,i0=37818,r0=37819,s0=37820,o0=37821,a0=36492,l0=36494,c0=36495,u0=36283,d0=36284,gc=36285,f0=36286,FS=3200,xm=0,OS=1,cr="",In="srgb",vc="srgb-linear",_c="linear",ot="srgb",ds=7680,ym=519,kS=512,zS=513,BS=514,Th=515,GS=516,VS=517,Ah=518,HS=519,Sm=35044,Mm="300 es",mi=2e3,xc=2001;function WS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XS(){const t=yc("canvas");return t.style.display="block",t}const Em={};function wm(...t){const e="THREE."+t.shift();console.log(e,...t)}function b_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=b_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=b_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function h0(...t){const e=t.join(" ");e in Em||(Em[e]=!0,He(...t))}function jS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qS={[Cf]:Rf,[Pf]:Df,[Nf]:If,[io]:Lf,[Rf]:Cf,[Df]:Pf,[If]:Nf,[Lf]:io};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=Math.PI/180,p0=180/Math.PI;function Ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function Uu(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nh=class Nh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;let ct=Nh;class uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(h!==M||l!==u||c!==m||f!==v){let g=l*u+c*m+f*v+h*M;g<0&&(u=-u,m=-m,v=-v,M=-M,g=-g);let d=1-a;if(g<.9995){const p=Math.acos(g),_=Math.sin(p);d=Math.sin(d*p)/_,a=Math.sin(a*p)/_,l=l*d+u*a,c=c*d+m*a,f=f*d+v*a,h=h*d+M*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+v*a,h=h*d+M*a;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-c*u,e[n+1]=l*v+f*u+c*h-a*m,e[n+2]=c*v+f*m+a*u-l*h,e[n+3]=f*v-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h-u*m*v;break;case"YXZ":this._x=u*f*h+c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h+u*m*v;break;case"ZXY":this._x=u*f*h-c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h-u*m*v;break;case"ZYX":this._x=u*f*h-c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h+u*m*v;break;case"YZX":this._x=u*f*h+c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h-u*m*v;break;case"XZY":this._x=u*f*h-c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h+u*m*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lh=class Lh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;let H=Lh;const Fu=new H,Tm=new uo,Dh=class Dh{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],v=i[8],M=r[0],g=r[3],d=r[6],p=r[1],_=r[4],y=r[7],b=r[2],w=r[5],A=r[8];return s[0]=o*M+a*p+l*b,s[3]=o*g+a*_+l*w,s[6]=o*d+a*y+l*A,s[1]=c*M+f*p+h*b,s[4]=c*g+f*_+h*w,s[7]=c*d+f*y+h*A,s[2]=u*M+m*p+v*b,s[5]=u*g+m*_+v*w,s[8]=u*d+m*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,m=c*s-o*l,v=n*h+i*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=h*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=u*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ou.makeScale(e,n)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;let We=Dh;const Ou=new We,Am=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const t={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return h0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return h0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vc]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:Am,fromXYZ:bm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Am,fromXYZ:bm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Qe=$S();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class KS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=yc("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ku(r[o].image)):s.push(ku(r[o]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let QS=0;const zu=new H;class un extends ss{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Oi,r=Oi,s=rn,o=Hr,a=ei,l=kn,c=un.DEFAULT_ANISOTROPY,f=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ma(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uf:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uf:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=x_;un.DEFAULT_ANISOTROPY=1;const Ih=class Ih{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],v=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(m+1)/2,b=(d+1)/2,w=(f+u)/4,A=(h+M)/4,x=(v+g)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-v)*(g-v)+(h-M)*(h-M)+(u-f)*(u-f));return Math.abs(p)<.001&&(p=1),this.x=(g-v)/p,this.y=(h-M)/p,this.z=(u-f)/p,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;let Dt=Ih;class JS extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new bh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class C_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=class Tc{constructor(e,n,i,r,s,o,a,l,c,f,h,u,m,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,m,v,M,g)}set(e,n,i,r,s,o,a,l,c,f,h,u,m,v,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=v,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,v=a*f,M=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=u-M*c,n[9]=-a*l,n[2]=M-u*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,v=c*f,M=c*h;n[0]=u+M*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=M+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,v=c*f,M=c*h;n[0]=u-M*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=M-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*h,v=a*f,M=a*h;n[0]=l*f,n[4]=v*c-m,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,M=a*c;n[0]=l*f,n[4]=M-u*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+v,n[10]=u-M*h}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,M=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+M,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ji.crossVectors(i,wn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ji.crossVectors(i,wn)),Ji.normalize(),Ka.crossVectors(wn,Ji),r[0]=Ji.x,r[4]=Ka.x,r[8]=wn.x,r[1]=Ji.y,r[5]=Ka.y,r[9]=wn.y,r[2]=Ji.z,r[6]=Ka.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],v=i[2],M=i[6],g=i[10],d=i[14],p=i[3],_=i[7],y=i[11],b=i[15],w=r[0],A=r[4],x=r[8],C=r[12],N=r[1],R=r[5],k=r[9],$=r[13],te=r[2],F=r[6],X=r[10],I=r[14],L=r[3],O=r[7],B=r[11],se=r[15];return s[0]=o*w+a*N+l*te+c*L,s[4]=o*A+a*R+l*F+c*O,s[8]=o*x+a*k+l*X+c*B,s[12]=o*C+a*$+l*I+c*se,s[1]=f*w+h*N+u*te+m*L,s[5]=f*A+h*R+u*F+m*O,s[9]=f*x+h*k+u*X+m*B,s[13]=f*C+h*$+u*I+m*se,s[2]=v*w+M*N+g*te+d*L,s[6]=v*A+M*R+g*F+d*O,s[10]=v*x+M*k+g*X+d*B,s[14]=v*C+M*$+g*I+d*se,s[3]=p*w+_*N+y*te+b*L,s[7]=p*A+_*R+y*F+b*O,s[11]=p*x+_*k+y*X+b*B,s[15]=p*C+_*$+y*I+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],v=e[3],M=e[7],g=e[11],d=e[15],p=l*m-c*u,_=a*m-c*h,y=a*u-l*h,b=o*m-c*f,w=o*u-l*f,A=o*h-a*f;return n*(M*p-g*_+d*y)-i*(v*p-g*b+d*w)+r*(v*_-M*b+d*A)-s*(v*y-M*w+g*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],v=e[12],M=e[13],g=e[14],d=e[15],p=n*a-i*o,_=n*l-r*o,y=n*c-s*o,b=i*l-r*a,w=i*c-s*a,A=r*c-s*l,x=f*M-h*v,C=f*g-u*v,N=f*d-m*v,R=h*g-u*M,k=h*d-m*M,$=u*d-m*g,te=p*$-_*k+y*R+b*N-w*C+A*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/te;return e[0]=(a*$-l*k+c*R)*F,e[1]=(r*k-i*$-s*R)*F,e[2]=(M*A-g*w+d*b)*F,e[3]=(u*w-h*A-m*b)*F,e[4]=(l*N-o*$-c*C)*F,e[5]=(n*$-r*N+s*C)*F,e[6]=(g*y-v*A-d*_)*F,e[7]=(f*A-u*y+m*_)*F,e[8]=(o*k-a*N+c*x)*F,e[9]=(i*N-n*k-s*x)*F,e[10]=(v*w-M*y+d*p)*F,e[11]=(h*y-f*w-m*p)*F,e[12]=(a*C-o*R-l*x)*F,e[13]=(n*R-i*C+r*x)*F,e[14]=(M*_-v*b-g*p)*F,e[15]=(f*b-h*_+u*p)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,m=s*f,v=s*h,M=o*f,g=o*h,d=a*h,p=l*c,_=l*f,y=l*h,b=i.x,w=i.y,A=i.z;return r[0]=(1-(M+d))*b,r[1]=(m+y)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(u+d))*w,r[6]=(g+p)*w,r[7]=0,r[8]=(v+_)*A,r[9]=(g-p)*A,r[10]=(1-(u+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),l=hs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,f=1/a,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=mi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let v,M;if(l)v=s/(o-s),M=o*s/(o-s);else if(a===mi)v=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===xc)v=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,M;if(l)v=1/(o-s),M=o/(o-s);else if(a===mi)v=-2/(o-s),M=-(o+s)/(o-s);else if(a===xc)v=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Tc.prototype.isMatrix4=!0;let At=Tc;const hs=new H,Xn=new At,tM=new H(0,0,0),nM=new H(1,1,1),Ji=new H,Ka=new H,wn=new H,Cm=new At,Rm=new uo;class ns{constructor(e=0,n=0,i=0,r=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const Pm=new H,ps=new uo,Ei=new At,Za=new H,wo=new H,rM=new H,sM=new uo,Nm=new H(1,0,0),Lm=new H(0,1,0),Dm=new H(0,0,1),Im={type:"added"},oM={type:"removed"},ms={type:"childadded",child:null},Bu={type:"childremoved",child:null};class dn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new H,n=new ns,i=new uo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(wo,Za,this.up):Ei.lookAt(Za,wo,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Ei),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),ms.child=e,this.dispatchEvent(ms),ms.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oM),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new H(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qa extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=YS(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vu(o,s,e+1/3),this.g=Vu(o,s,e),this.b=Vu(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=P_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Qe.workingToColorSpace(en.copy(this),e),Math.round(Je(en.r*255,0,255))*65536+Math.round(Je(en.g*255,0,255))*256+Math.round(Je(en.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=In){Qe.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Ja);const i=Uu(er.h,Ja.h,n),r=Uu(er.s,Ja.s,n),s=Uu(er.l,Ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new st;st.NAMES=P_;class lM extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new H,wi=new H,Hu=new H,Ti=new H,gs=new H,vs=new H,Um=new H,Wu=new H,Xu=new H,ju=new H,qu=new Dt,Yu=new Dt,$u=new Dt;class Jn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),wi.subVectors(i,n),Hu.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(wi),l=jn.dot(Hu),c=wi.dot(wi),f=wi.dot(Hu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-a*f)*u,v=(o*f-a*l)*u;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qu.setScalar(0),Yu.setScalar(0),$u.setScalar(0),qu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qu,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector($u,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),wi.subVectors(e,n),jn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),vs.subVectors(s,i),Wu.subVectors(e,i);const l=gs.dot(Wu),c=vs.dot(Wu);if(l<=0&&c<=0)return n.copy(i);Xu.subVectors(e,r);const f=gs.dot(Xu),h=vs.dot(Xu);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(gs,o);ju.subVectors(e,s);const m=gs.dot(ju),v=vs.dot(ju);if(v>=0&&m<=v)return n.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(vs,a);const g=f*v-m*h;if(g<=0&&h-f>=0&&m-v>=0)return Um.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(Um,a);const d=1/(g+M+u);return o=M*d,a=u*d,n.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),tl.subVectors(this.max,To),_s.subVectors(e.a,To),xs.subVectors(e.b,To),ys.subVectors(e.c,To),tr.subVectors(xs,_s),nr.subVectors(ys,xs),Pr.subVectors(_s,ys);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Pr.z,Pr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Pr.z,0,-Pr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Pr.y,Pr.x,0];return!Ku(n,_s,xs,ys,tl)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,_s,xs,ys,tl))?!1:(nl.crossVectors(tr,nr),n=[nl.x,nl.y,nl.z],Ku(n,_s,xs,ys,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new H,new H,new H,new H,new H,new H,new H,new H],qn=new H,el=new Ea,_s=new H,xs=new H,ys=new H,tr=new H,nr=new H,Pr=new H,To=new H,tl=new H,nl=new H,Nr=new H;function Ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),f=i.dot(Nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ut=new H,il=new ct;let cM=0;class Ht extends ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sm,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class N_ extends Ht{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class L_ extends Ht{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends Ht{constructor(e,n,i){super(new Float32Array(e),n,i)}}const uM=new Ea,Ao=new H,Zu=new H;class wa{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Zu)),this.expandByPoint(Ao.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dM=0;const Dn=new At,Qu=new dn,Ss=new H,Tn=new Ea,bo=new Ea,Gt=new H;class jt extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WS(e)?L_:N_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Tn.min,bo.min),Tn.expandByPoint(Gt),Gt.addVectors(Tn.max,bo.max),Tn.expandByPoint(Gt)):(Tn.expandByPoint(bo.min),Tn.expandByPoint(bo.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Gt.add(Ss)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new H,l[x]=new H;const c=new H,f=new H,h=new H,u=new ct,m=new ct,v=new ct,M=new H,g=new H;function d(x,C,N){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,N),u.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,N),f.sub(c),h.sub(c),m.sub(u),v.sub(u);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(R),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(R),a[x].add(M),a[C].add(M),a[N].add(M),l[x].add(g),l[C].add(g),l[N].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,C=p.length;x<C;++x){const N=p[x],R=N.start,k=N.count;for(let $=R,te=R+k;$<te;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const _=new H,y=new H,b=new H,w=new H;function A(x){b.fromBufferAttribute(r,x),w.copy(b);const C=a[x];_.copy(C),_.sub(b.multiplyScalar(b.dot(C))).normalize(),y.crossVectors(w,C);const R=y.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,R)}for(let x=0,C=p.length;x<C;++x){const N=p[x],R=N.start,k=N.count;for(let $=R,te=R+k;$<te;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,f=new H,h=new H;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let m=0,v=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*f;for(let d=0;d<f;d++)u[v++]=c[m++]}return new Ht(u,f,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fM=0;class fo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=qs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=bf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Af&&(i.blendSrc=this.blendSrc),this.blendDst!==bf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new H,Ju=new H,rl=new H,ir=new H,ed=new H,sl=new H,td=new H;class Ch{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ju.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(Ju);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=ir.dot(this.direction),l=-ir.dot(rl),c=ir.lengthSq(),f=Math.abs(1-o*o);let h,u,m,v;if(f>0)if(h=o*l-a,u=o*a-l,v=s*f,h>=0)if(u>=-v)if(u<=v){const M=1/f;h*=M,u*=M,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ju).addScaledVector(rl,u),m}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){ed.subVectors(n,e),sl.subVectors(i,e),td.crossVectors(ed,sl);let o=this.direction.dot(td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(ir,sl));if(l<0)return null;const c=a*this.direction.dot(ed.cross(ir));if(c<0||l+c>o)return null;const f=-a*ir.dot(td);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sc extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fm=new At,Lr=new Ch,ol=new wa,Om=new H,al=new H,ll=new H,cl=new H,nd=new H,ul=new H,km=new H,dl=new H;class ri extends dn{constructor(e=new jt,n=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(nd.fromBufferAttribute(h,e),o?ul.addScaledVector(nd,f):ul.addScaledVector(nd.sub(n),f))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(ol.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ol,Om)===null||Lr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=u.length;v<M;v++){const g=u[v],d=o[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,b=_;y<b;y+=3){const w=a.getX(y),A=a.getX(y+1),x=a.getX(y+2);r=fl(this,d,e,i,c,f,h,w,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=v,d=M;g<d;g+=3){const p=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=fl(this,o,e,i,c,f,h,p,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=u.length;v<M;v++){const g=u[v],d=o[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,b=_;y<b;y+=3){const w=y,A=y+1,x=y+2;r=fl(this,d,e,i,c,f,h,w,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=v,d=M;g<d;g+=3){const p=g,_=g+1,y=g+2;r=fl(this,o,e,i,c,f,h,p,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function hM(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;dl.copy(a),dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(dl);return c<n.near||c>n.far?null:{distance:c,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,al),t.getVertexPosition(l,ll),t.getVertexPosition(c,cl);const f=hM(t,e,n,i,al,ll,cl,km);if(f){const h=new H;Jn.getBarycoord(km,al,ll,cl,h),r&&(f.uv=Jn.getInterpolatedAttribute(r,a,l,c,h,new ct)),s&&(f.uv1=Jn.getInterpolatedAttribute(s,a,l,c,h,new ct)),o&&(f.normal=Jn.getInterpolatedAttribute(o,a,l,c,h,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new H,materialIndex:0};Jn.getNormal(al,ll,cl,u.normal),f.face=u,f.barycoord=h}return f}class pM extends un{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,f=qt,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new H,mM=new H,gM=new We;class Fr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=id.subVectors(i,n).cross(mM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(id),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gM.getNormalMatrix(e),r=this.coplanarPoint(id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new wa,vM=new ct(.5,.5),hl=new H;class D_{constructor(e=new Fr,n=new Fr,i=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],v=s[8],M=s[9],g=s[10],d=s[11],p=s[12],_=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-o,m-f,d-v,b-p).normalize(),r[1].setComponents(c+o,m+f,d+v,b+p).normalize(),r[2].setComponents(c+a,m+h,d+M,b+_).normalize(),r[3].setComponents(c-a,m-h,d-M,b-_).normalize(),i)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,m-u,d-g,b-y).normalize();else if(r[4].setComponents(c-l,m-u,d-g,b-y).normalize(),n===mi)r[5].setComponents(c+l,m+u,d+g,b+y).normalize();else if(n===xc)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=vM.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(hl.x=r.normal.x>0?e.max.x:e.min.x,hl.y=r.normal.y>0?e.max.y:e.min.y,hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m0 extends fo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new H,Ec=new H,zm=new At,Co=new Ch,pl=new wa,rd=new H,Bm=new H;class _M extends dn{constructor(e=new jt,n=new m0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Mc.fromBufferAttribute(n,r-1),Ec.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Mc.distanceTo(Ec);e.setAttribute("lineDistance",new Sn(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;zm.copy(r).invert(),Co.copy(e.ray).applyMatrix4(zm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=m,g=v-1;M<g;M+=c){const d=f.getX(M),p=f.getX(M+1),_=ml(this,e,Co,l,d,p,M);_&&n.push(_)}if(this.isLineLoop){const M=f.getX(v-1),g=f.getX(m),d=ml(this,e,Co,l,M,g,v-1);d&&n.push(d)}}else{const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let M=m,g=v-1;M<g;M+=c){const d=ml(this,e,Co,l,M,M+1,M);d&&n.push(d)}if(this.isLineLoop){const M=ml(this,e,Co,l,v-1,m,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ml(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Mc.fromBufferAttribute(a,r),Ec.fromBufferAttribute(a,s),n.distanceSqToSegment(Mc,Ec,rd,Bm)>i)return;rd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(rd);if(!(c<e.near||c>e.far))return{distance:c,point:Bm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Gm=new H,Vm=new H;class Hm extends _M{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Gm.fromBufferAttribute(n,r),Vm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gm.distanceTo(Vm);e.setAttribute("lineDistance",new Sn(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g0 extends fo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new At,v0=new Ch,gl=new wa,vl=new H;class sd extends dn{constructor(e=new jt,n=new g0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Wm.copy(r).invert(),v0.copy(e.ray).applyMatrix4(Wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=u,M=m;v<M;v++){const g=c.getX(v);vl.fromBufferAttribute(h,g),Xm(vl,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=u,M=m;v<M;v++)vl.fromBufferAttribute(h,v),Xm(vl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xm(t,e,n,i,r,s,o){const a=v0.distanceSqToPoint(t);if(a<n){const l=new H;v0.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class I_ extends un{constructor(e=[],n=es,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class so extends un{constructor(e,n,i=Si,r,s,o,a=qt,l=qt,c,f=ji,h=1){if(f!==ji&&f!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xM extends so{constructor(e,n=Si,i=es,r,s,o=qt,a=qt,l,c=ji){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U_ extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ta extends jt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(f,3)),this.setAttribute("uv",new Sn(h,2));function v(M,g,d,p,_,y,b,w,A,x,C){const N=y/A,R=b/x,k=y/2,$=b/2,te=w/2,F=A+1,X=x+1;let I=0,L=0;const O=new H;for(let B=0;B<X;B++){const se=B*R-$;for(let ce=0;ce<F;ce++){const ne=ce*N-k;O[M]=ne*p,O[g]=se*_,O[d]=te,c.push(O.x,O.y,O.z),O[M]=0,O[g]=0,O[d]=w>0?1:-1,f.push(O.x,O.y,O.z),h.push(ce/A),h.push(1-B/x),I+=1}}for(let B=0;B<x;B++)for(let se=0;se<A;se++){const ce=u+se+F*B,ne=u+se+F*(B+1),me=u+(se+1)+F*(B+1),Se=u+(se+1)+F*B;l.push(ce,ne,Se),l.push(ne,me,Se),L+=6}a.addGroup(m,L,C),m+=L,u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends jt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,m=[],v=[],M=[],g=[];for(let d=0;d<f;d++){const p=d*u-o;for(let _=0;_<c;_++){const y=_*h-s;v.push(y,-p,0),M.push(0,0,1),g.push(_/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<a;p++){const _=p+c*d,y=p+c*(d+1),b=p+1+c*(d+1),w=p+1+c*d;m.push(_,y,w),m.push(y,b,w)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(M,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends jt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const u=(n-e)/r,m=new H,v=new ct;for(let M=0;M<=r;M++){for(let g=0;g<=i;g++){const d=s+g/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,f.push(v.x,v.y)}h+=u}for(let M=0;M<r;M++){const g=M*(i+1);for(let d=0;d<i;d++){const p=d+g,_=p,y=p+i+1,b=p+i+2,w=p+1;a.push(_,y,w),a.push(y,b,w)}}this.setIndex(a),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(jm(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(jm(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function jm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function yM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function F_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const SM={clone:oo,merge:an};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wM extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TM extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _l=new H,xl=new uo,ci=new H;class O_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,xl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(_l,xl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new H,qm=new ct,Ym=new ct;class On extends O_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=p0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return p0*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Ym),n.subVectors(Ym,qm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Iu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class k_ extends O_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ms=-90,Es=1;class bM extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Ms,Es,e,n);r.layers=this.layers,this.add(r);const s=new On(Ms,Es,e,n);s.layers=this.layers,this.add(s);const o=new On(Ms,Es,e,n);o.layers=this.layers,this.add(o);const a=new On(Ms,Es,e,n);a.layers=this.layers,this.add(a);const l=new On(Ms,Es,e,n);l.layers=this.layers,this.add(l);const c=new On(Ms,Es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class CM extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uh=class Uh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Uh.prototype.isMatrix2=!0;let $m=Uh;function Km(t,e,n,i){const r=RM(i);switch(n){case w_:return t*e;case A_:return t*e/r.components*r.byteLength;case Mh:return t*e/r.components*r.byteLength;case ts:return t*e*2/r.components*r.byteLength;case Eh:return t*e*2/r.components*r.byteLength;case T_:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case wh:return t*e*4/r.components*r.byteLength;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:case Bf:return Math.max(t,16)*Math.max(e,8)/4;case Of:case zf:return Math.max(t,8)*Math.max(e,8)/2;case Gf:case Vf:case Wf:case Xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hf:case mc:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $f:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case e0:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case t0:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case n0:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case i0:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case r0:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case s0:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case o0:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case a0:case l0:case c0:return Math.ceil(t/4)*Math.ceil(e/4)*16;case u0:case d0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gc:case f0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RM(t){switch(t){case kn:case y_:return{byteLength:1,components:1};case ha:case S_:case Xi:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case Si:case xh:case pi:return{byteLength:4,components:1};case M_:case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function PM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<h.length;m++){const v=h[u],M=h[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,h[u]=M)}h.length=u+1;for(let m=0,v=h.length;m<v;m++){const M=h[m];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,XM=`#ifdef USE_BUMPMAP
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eE=`#define PI 3.141592653589793
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
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nE=`vec3 transformedNormal = objectNormal;
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
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ME=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,EE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CE=`PhysicalMaterial material;
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
#endif`,RE=`uniform sampler2D dfgLUT;
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
}`,PE=`
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GE=`#if defined( USE_POINTS_UV )
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
#endif`,VE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e4=`#ifdef USE_NORMALMAP
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
#endif`,t4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g4=`float getShadowMask() {
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
}`,v4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_4=`#ifdef USE_SKINNING
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
#endif`,x4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y4=`#ifdef USE_SKINNING
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
#endif`,S4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T4=`#ifdef USE_TRANSMISSION
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
#endif`,A4=`#ifdef USE_TRANSMISSION
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
#endif`,b4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L4=`uniform sampler2D t2D;
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
}`,D4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O4=`#include <common>
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
}`,k4=`#if DEPTH_PACKING == 3200
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
}`,z4=`#define DISTANCE
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
}`,B4=`#define DISTANCE
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
}`,G4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H4=`uniform float scale;
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
}`,W4=`uniform vec3 diffuse;
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
}`,X4=`#include <common>
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
}`,j4=`uniform vec3 diffuse;
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
}`,q4=`#define LAMBERT
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
}`,Y4=`#define LAMBERT
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
}`,$4=`#define MATCAP
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
}`,K4=`#define MATCAP
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
}`,Z4=`#define NORMAL
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
}`,Q4=`#define NORMAL
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
}`,J4=`#define PHONG
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
}`,ew=`#define PHONG
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
}`,tw=`#define STANDARD
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
}`,nw=`#define STANDARD
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
}`,iw=`#define TOON
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
}`,rw=`#define TOON
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
}`,sw=`uniform float size;
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
}`,ow=`uniform vec3 diffuse;
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
}`,aw=`#include <common>
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
}`,lw=`uniform vec3 color;
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
}`,cw=`uniform float rotation;
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
}`,uw=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:NM,alphahash_pars_fragment:LM,alphamap_fragment:DM,alphamap_pars_fragment:IM,alphatest_fragment:UM,alphatest_pars_fragment:FM,aomap_fragment:OM,aomap_pars_fragment:kM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:HM,iridescence_fragment:WM,bumpmap_pars_fragment:XM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:$M,color_fragment:KM,color_pars_fragment:ZM,color_pars_vertex:QM,color_vertex:JM,common:eE,cube_uv_reflection_fragment:tE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:aE,colorspace_pars_fragment:lE,envmap_fragment:cE,envmap_common_pars_fragment:uE,envmap_pars_fragment:dE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:EE,envmap_vertex:hE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:vE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:ME,lights_toon_fragment:wE,lights_toon_pars_fragment:TE,lights_phong_fragment:AE,lights_phong_pars_fragment:bE,lights_physical_fragment:CE,lights_physical_pars_fragment:RE,lights_fragment_begin:PE,lights_fragment_maps:NE,lights_fragment_end:LE,lightprobes_pars_fragment:DE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:FE,logdepthbuf_vertex:OE,map_fragment:kE,map_pars_fragment:zE,map_particle_fragment:BE,map_particle_pars_fragment:GE,metalnessmap_fragment:VE,metalnessmap_pars_fragment:HE,morphinstance_vertex:WE,morphcolor_vertex:XE,morphnormal_vertex:jE,morphtarget_pars_vertex:qE,morphtarget_vertex:YE,normal_fragment_begin:$E,normal_fragment_maps:KE,normal_pars_fragment:ZE,normal_pars_vertex:QE,normal_vertex:JE,normalmap_pars_fragment:e4,clearcoat_normal_fragment_begin:t4,clearcoat_normal_fragment_maps:n4,clearcoat_pars_fragment:i4,iridescence_pars_fragment:r4,opaque_fragment:s4,packing:o4,premultiplied_alpha_fragment:a4,project_vertex:l4,dithering_fragment:c4,dithering_pars_fragment:u4,roughnessmap_fragment:d4,roughnessmap_pars_fragment:f4,shadowmap_pars_fragment:h4,shadowmap_pars_vertex:p4,shadowmap_vertex:m4,shadowmask_pars_fragment:g4,skinbase_vertex:v4,skinning_pars_vertex:_4,skinning_vertex:x4,skinnormal_vertex:y4,specularmap_fragment:S4,specularmap_pars_fragment:M4,tonemapping_fragment:E4,tonemapping_pars_fragment:w4,transmission_fragment:T4,transmission_pars_fragment:A4,uv_pars_fragment:b4,uv_pars_vertex:C4,uv_vertex:R4,worldpos_vertex:P4,background_vert:N4,background_frag:L4,backgroundCube_vert:D4,backgroundCube_frag:I4,cube_vert:U4,cube_frag:F4,depth_vert:O4,depth_frag:k4,distance_vert:z4,distance_frag:B4,equirect_vert:G4,equirect_frag:V4,linedashed_vert:H4,linedashed_frag:W4,meshbasic_vert:X4,meshbasic_frag:j4,meshlambert_vert:q4,meshlambert_frag:Y4,meshmatcap_vert:$4,meshmatcap_frag:K4,meshnormal_vert:Z4,meshnormal_frag:Q4,meshphong_vert:J4,meshphong_frag:ew,meshphysical_vert:tw,meshphysical_frag:nw,meshtoon_vert:iw,meshtoon_frag:rw,points_vert:sw,points_frag:ow,shadow_vert:aw,shadow_frag:lw,sprite_vert:cw,sprite_frag:uw},Ae={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},fi={basic:{uniforms:an([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:an([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:an([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:an([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:an([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:an([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:an([Ae.points,Ae.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:an([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:an([Ae.common,Ae.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:an([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:an([Ae.sprite,Ae.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:an([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:an([Ae.lights,Ae.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fi.physical={uniforms:an([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const yl={r:0,b:0,g:0},dw=new At,B_=new We;B_.set(-1,0,0,0,1,0,0,0,1);function fw(t,e,n,i,r,s){const o=new st(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function m(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){const y=p.backgroundBlurriness>0;_=e.get(_,y)}return _}function v(p){let _=!1;const y=m(p);y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(p,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===Xc)?(c===void 0&&(c=new ri(new Ta(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:oo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dw.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(B_),c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(f!==y||h!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ri(new jc(2,2),new si({name:"BackgroundMaterial",uniforms:oo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,_){p.getRGB(yl,F_(t)),n.buffers.color.setClear(yl.r,yl.g,yl.b,_,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:v,addToRenderList:M,dispose:d}}function hw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(R,k,$,te,F){let X=!1;const I=h(R,te,$,k);s!==I&&(s=I,c(s.object)),X=m(R,te,$,F),X&&v(R,te,$,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(R,k,$,te),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function f(R){return t.deleteVertexArray(R)}function h(R,k,$,te){const F=te.wireframe===!0;let X=i[k.id];X===void 0&&(X={},i[k.id]=X);const I=R.isInstancedMesh===!0?R.id:0;let L=X[I];L===void 0&&(L={},X[I]=L);let O=L[$.id];O===void 0&&(O={},L[$.id]=O);let B=O[F];return B===void 0&&(B=u(l()),O[F]=B),B}function u(R){const k=[],$=[],te=[];for(let F=0;F<n;F++)k[F]=0,$[F]=0,te[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:te,object:R,attributes:{},index:null}}function m(R,k,$,te){const F=s.attributes,X=k.attributes;let I=0;const L=$.getAttributes();for(const O in L)if(L[O].location>=0){const se=F[O];let ce=X[O];if(ce===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),se===void 0||se.attribute!==ce||ce&&se.data!==ce.data)return!0;I++}return s.attributesNum!==I||s.index!==te}function v(R,k,$,te){const F={},X=k.attributes;let I=0;const L=$.getAttributes();for(const O in L)if(L[O].location>=0){let se=X[O];se===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const ce={};ce.attribute=se,se&&se.data&&(ce.data=se.data),F[O]=ce,I++}s.attributes=F,s.attributesNum=I,s.index=te}function M(){const R=s.newAttributes;for(let k=0,$=R.length;k<$;k++)R[k]=0}function g(R){d(R,0)}function d(R,k){const $=s.newAttributes,te=s.enabledAttributes,F=s.attributeDivisors;$[R]=1,te[R]===0&&(t.enableVertexAttribArray(R),te[R]=1),F[R]!==k&&(t.vertexAttribDivisor(R,k),F[R]=k)}function p(){const R=s.newAttributes,k=s.enabledAttributes;for(let $=0,te=k.length;$<te;$++)k[$]!==R[$]&&(t.disableVertexAttribArray($),k[$]=0)}function _(R,k,$,te,F,X,I){I===!0?t.vertexAttribIPointer(R,k,$,F,X):t.vertexAttribPointer(R,k,$,te,F,X)}function y(R,k,$,te){M();const F=te.attributes,X=$.getAttributes(),I=k.defaultAttributeValues;for(const L in X){const O=X[L];if(O.location>=0){let B=F[L];if(B===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){const se=B.normalized,ce=B.itemSize,ne=e.get(B);if(ne===void 0)continue;const me=ne.buffer,Se=ne.type,q=ne.bytesPerElement,he=Se===t.INT||Se===t.UNSIGNED_INT||B.gpuType===xh;if(B.isInterleavedBufferAttribute){const fe=B.data,V=fe.stride,K=B.offset;if(fe.isInstancedInterleavedBuffer){for(let _e=0;_e<O.locationSize;_e++)d(O.location+_e,fe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let _e=0;_e<O.locationSize;_e++)g(O.location+_e);t.bindBuffer(t.ARRAY_BUFFER,me);for(let _e=0;_e<O.locationSize;_e++)_(O.location+_e,ce/O.locationSize,Se,se,V*q,(K+ce/O.locationSize*_e)*q,he)}else{if(B.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)d(O.location+fe,B.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let fe=0;fe<O.locationSize;fe++)g(O.location+fe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let fe=0;fe<O.locationSize;fe++)_(O.location+fe,ce/O.locationSize,Se,se,ce*q,ce/O.locationSize*fe*q,he)}}else if(I!==void 0){const se=I[L];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(O.location,se);break;case 3:t.vertexAttrib3fv(O.location,se);break;case 4:t.vertexAttrib4fv(O.location,se);break;default:t.vertexAttrib1fv(O.location,se)}}}}p()}function b(){C();for(const R in i){const k=i[R];for(const $ in k){const te=k[$];for(const F in te){const X=te[F];for(const I in X)f(X[I].object),delete X[I];delete te[F]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;const k=i[R.id];for(const $ in k){const te=k[$];for(const F in te){const X=te[F];for(const I in X)f(X[I].object),delete X[I];delete te[F]}}delete i[R.id]}function A(R){for(const k in i){const $=i[k];for(const te in $){const F=$[te];if(F[R.id]===void 0)continue;const X=F[R.id];for(const I in X)f(X[I].object),delete X[I];delete F[R.id]}}}function x(R){for(const k in i){const $=i[k],te=R.isInstancedMesh===!0?R.id:0,F=$[te];if(F!==void 0){for(const X in F){const I=F[X];for(const L in I)f(I[L].object),delete I[L];delete F[X]}delete $[te],Object.keys($).length===0&&delete i[k]}}}function C(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:g,disableUnusedAttributes:p}}function pw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function mw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ei&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!x)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(He("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,maxSamples:b,samples:w}}function gw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,m){const v=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,_=p*4;let y=d.clippingState||null;l.value=y,y=f(v,u,_,m);for(let b=0;b!==_;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,v){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const d=m+M*4,p=u.matrixWorldInverse;a.getNormalMatrix(p),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,y=m;_!==M;++_,y+=4)o.copy(h[_]).applyMatrix4(p,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const hr=4,Zm=[.125,.215,.35,.446,.526,.582],kr=20,vw=256,Ro=new k_,Qm=new st;let od=null,ad=0,ld=0,cd=!1;const _w=new H;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=_w}=s;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xi,format:ei,colorSpace:vc,depthBuffer:!1},r=eg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xw(s)),this._blurMaterial=Sw(s,e,n),this._ggxMaterial=yw(s,e,n)}return r}_compileMaterial(e){const n=new ri(new jt,e);this._renderer.compile(n,Ro)}_sceneToCubeUV(e,n,i,r,s){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Qm),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ta,new Sc({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let d=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,d=!0):(g.color.copy(Qm),d=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const b=this._cubeSize;ws(r,y*b,_>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(M,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ro)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,m=h*u,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-hr?i-v+hr:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,ws(s,g,d,3*M,2*M),r.setRenderTarget(s),r.render(a,Ro),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ws(e,g,d,3*M,2*M),r.setRenderTarget(e),r.render(a,Ro)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kr-1),M=s/v,g=isFinite(s)?1+Math.floor(f*M):kr;g>kr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kr}`);const d=[];let p=0;for(let A=0;A<kr;++A){const x=A/M,C=Math.exp(-x*x/2);d.push(C),A===0?p+=C:A<g&&(p+=2*C)}for(let A=0;A<d.length;A++)d[A]=d[A]/p;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-hr?r-_+hr:0),w=4*(this._cubeSize-y);ws(n,b,w,3*y,2*y),l.setRenderTarget(n),l.render(h,Ro)}}function xw(t){const e=[],n=[],i=[];let r=t;const s=t-hr+1+Zm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-hr?l=Zm[o-t+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,M=3,g=2,d=1,p=new Float32Array(M*v*m),_=new Float32Array(g*v*m),y=new Float32Array(d*v*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,x=w>2?0:-1,C=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];p.set(C,M*v*w),_.set(u,g*v*w);const N=[w,w,w,w,w,w];y.set(N,d*v*w)}const b=new jt;b.setAttribute("position",new Ht(p,M)),b.setAttribute("uv",new Ht(_,g)),b.setAttribute("faceIndex",new Ht(y,d)),i.push(new ri(b,null)),r>hr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function eg(t,e,n){const i=new yi(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yw(t,e,n){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Sw(t,e,n){const i=new Float32Array(kr),r=new H(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function tg(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ng(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}class G_ extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new I_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ta(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:zi});s.uniforms.tEquirect.value=n;const o=new ri(r,s),a=n.minFilter;return n.minFilter===Hr&&(n.minFilter=rn),new bM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Mw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Nu||m===Lu)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new G_(v.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,v=m===Nu||m===Lu,M=m===es||m===ro;if(v||M){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Jm(t)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const p=u.image;return v&&p&&p.height>0||M&&p&&l(p)?(i===null&&(i=new Jm(t)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,m){return m===Nu?u.mapping=es:m===Lu&&(u.mapping=ro),u}function l(u){let m=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&m++;return m===v}function c(u){const m=u.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&h0("WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,v=h.attributes.position;let M=0;if(v===void 0)return;if(m!==null){const p=m.array;M=m.version;for(let _=0,y=p.length;_<y;_+=3){const b=p[_+0],w=p[_+1],A=p[_+2];u.push(b,w,w,A,A,b)}}else{const p=v.array;M=v.version;for(let _=0,y=p.length/3-1;_<y;_+=3){const b=_+0,w=_+1,A=_+2;u.push(b,w,w,A,A,b)}}const g=new(v.count>=65535?L_:N_)(u,1);g.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Tw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,h*o,m),n.update(u,i,m))}function f(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,m);let M=0;for(let g=0;g<m;g++)M+=u[g];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Aw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bw(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let N=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var m=N;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let b=a.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*h),x=new C_(A,b,w,h);x.type=pi,x.needsUpdate=!0;const C=y*4;for(let R=0;R<h;R++){const k=d[R],$=p[R],te=_[R],F=b*w*4*R;for(let X=0;X<k.count;X++){const I=X*C;v===!0&&(r.fromBufferAttribute(k,X),A[F+I+0]=r.x,A[F+I+1]=r.y,A[F+I+2]=r.z,A[F+I+3]=0),M===!0&&(r.fromBufferAttribute($,X),A[F+I+4]=r.x,A[F+I+5]=r.y,A[F+I+6]=r.z,A[F+I+7]=0),g===!0&&(r.fromBufferAttribute(te,X),A[F+I+8]=r.x,A[F+I+9]=r.y,A[F+I+10]=r.z,A[F+I+11]=te.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new ct(b,w)},i.set(a,u),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const M=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Cw(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const Rw={[f_]:"LINEAR_TONE_MAPPING",[h_]:"REINHARD_TONE_MAPPING",[p_]:"CINEON_TONE_MAPPING",[m_]:"ACES_FILMIC_TONE_MAPPING",[v_]:"AGX_TONE_MAPPING",[__]:"NEUTRAL_TONE_MAPPING",[g_]:"CUSTOM_TONE_MAPPING"};function Pw(t,e,n,i,r){const s=new yi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new so(e,n):void 0}),o=new yi(e,n,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),a=new jt;a.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const l=new wM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ri(a,l),f=new k_(-1,1,1,-1,0,1);let h=null,u=null,m=!1,v,M=null,g=[],d=!1;this.setSize=function(p,_){s.setSize(p,_),o.setSize(p,_);for(let y=0;y<g.length;y++){const b=g[y];b.setSize&&b.setSize(p,_)}},this.setEffects=function(p){g=p,d=g.length>0&&g[0].isRenderPass===!0;const _=s.width,y=s.height;for(let b=0;b<g.length;b++){const w=g[b];w.setSize&&w.setSize(_,y)}},this.begin=function(p,_){if(m||p.toneMapping===xi&&g.length===0)return!1;if(M=_,_!==null){const y=_.width,b=_.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return d===!1&&p.setRenderTarget(s),v=p.toneMapping,p.toneMapping=xi,!0},this.hasRenderPass=function(){return d},this.end=function(p,_){p.toneMapping=v,m=!0;let y=s,b=o;for(let w=0;w<g.length;w++){const A=g[w];if(A.enabled!==!1&&(A.render(p,b,y,_),A.needsSwap!==!1)){const x=y;y=b,b=x}}if(h!==p.outputColorSpace||u!==p.toneMapping){h=p.outputColorSpace,u=p.toneMapping,l.defines={},Qe.getTransfer(h)===ot&&(l.defines.SRGB_TRANSFER="");const w=Rw[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,p.setRenderTarget(M),p.render(c,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const V_=new un,_0=new so(1,1),H_=new C_,W_=new eM,X_=new I_,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ig[r];if(s===void 0&&(s=new Float32Array(r),ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=rg[e];n===void 0&&(n=new Int32Array(e),rg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;ag.set(i),t.uniformMatrix2fv(this.addr,!1,ag),Bt(n,i)}}function Fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;og.set(i),t.uniformMatrix3fv(this.addr,!1,og),Bt(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;sg.set(i),t.uniformMatrix4fv(this.addr,!1,sg),Bt(n,i)}}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_0.compareFunction=n.isReversedDepthBuffer()?Ah:Th,s=_0):s=V_,n.setTexture2D(e||s,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||W_,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||X_,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function Kw(t){switch(t){case 5126:return Nw;case 35664:return Lw;case 35665:return Dw;case 35666:return Iw;case 35674:return Uw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Bw;case 35669:case 35673:return Gw;case 5125:return Vw;case 36294:return Hw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return $w}}function Zw(t,e){t.uniform1fv(this.addr,e)}function Qw(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function Jw(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function eT(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function tT(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nT(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iT(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rT(t,e){t.uniform1iv(this.addr,e)}function sT(t,e){t.uniform2iv(this.addr,e)}function oT(t,e){t.uniform3iv(this.addr,e)}function aT(t,e){t.uniform4iv(this.addr,e)}function lT(t,e){t.uniform1uiv(this.addr,e)}function cT(t,e){t.uniform2uiv(this.addr,e)}function uT(t,e){t.uniform3uiv(this.addr,e)}function dT(t,e){t.uniform4uiv(this.addr,e)}function fT(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=_0:o=V_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||W_,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||X_,s[o])}function mT(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||H_,s[o])}function gT(t){switch(t){case 5126:return Zw;case 35664:return Qw;case 35665:return Jw;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Kw(n.type)}}class _T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gT(n.type)}}class xT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function lg(t,e){t.seq.push(e),t.map[e.id]=e}function yT(t,e,n){const i=t.name,r=i.length;for(ud.lastIndex=0;;){const s=ud.exec(i),o=ud.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lg(n,c===void 0?new vT(a,t,e):new _T(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new xT(a),lg(n,h)),n=h}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);yT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function cg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ST=37297;let MT=0;function ET(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ug=new We;function wT(t){Qe._getMatrix(ug,Qe.workingColorSpace,t);const e=`mat3( ${ug.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+ET(t.getShaderSource(e),a)}else return s}function TT(t,e){const n=wT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AT={[f_]:"Linear",[h_]:"Reinhard",[p_]:"Cineon",[m_]:"ACESFilmic",[v_]:"AgX",[__]:"Neutral",[g_]:"Custom"};function bT(t,e){const n=AT[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new H;function CT(){Qe.getLuminanceCoefficients(Sl);const t=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function PT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ko(t){return t!==""}function fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LT=/^[ \t]*#include +<([\w\d./]+)>/gm;function x0(t){return t.replace(LT,IT)}const DT=new Map;function IT(t,e){let n=qe[e];if(n===void 0){const i=DT.get(e);if(i!==void 0)n=qe[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return x0(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(t){return t.replace(UT,FT)}function FT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const OT={[Il]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function kT(t){return OT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zT={[es]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function BT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":zT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const GT={[ro]:"ENVMAP_MODE_REFRACTION"};function VT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":GT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HT={[d_]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function WT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":HT[t.combine]||"ENVMAP_BLENDING_NONE"}function XT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function jT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kT(n),c=BT(n),f=VT(n),h=WT(n),u=XT(n),m=RT(n),v=PT(s),M=r.createProgram();let g,d,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ko).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ko).join(`
`),d.length>0&&(d+=`
`)):(g=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),d=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?qe.tonemapping_pars_fragment:"",n.toneMapping!==xi?bT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),CT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),o=x0(o),o=fg(o,n),o=hg(o,n),a=x0(a),a=fg(a,n),a=hg(a,n),o=pg(o),a=pg(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=p+g+o,y=p+d+a,b=cg(r,r.VERTEX_SHADER,_),w=cg(r,r.FRAGMENT_SHADER,y);r.attachShader(M,b),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(R){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",$=r.getShaderInfoLog(b)||"",te=r.getShaderInfoLog(w)||"",F=k.trim(),X=$.trim(),I=te.trim();let L=!0,O=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,w);else{const B=dg(r,b,"vertex"),se=dg(r,w,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+B+`
`+se)}else F!==""?He("WebGLProgram: Program Info Log:",F):(X===""||I==="")&&(O=!1);O&&(R.diagnostics={runnable:L,programLog:F,vertexShader:{log:X,prefix:g},fragmentShader:{log:I,prefix:d}})}r.deleteShader(b),r.deleteShader(w),x=new zl(r,M),C=NT(r,M)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(M,ST)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=w,this}let qT=0;class YT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $T(e),n.set(e,i)),i}}class $T{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}}function KT(t){return t===ts||t===mc||t===gc}function ZT(t,e,n,i,r,s){const o=new R_,a=new YT,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,C,N,R,k,$){const te=R.fog,F=k.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=e.get(x.envMap||X,I),O=L&&L.mapping===Xc?L.image.height:null,B=m[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=se!==void 0?se.length:0;let ne=0;F.morphAttributes.position!==void 0&&(ne=1),F.morphAttributes.normal!==void 0&&(ne=2),F.morphAttributes.color!==void 0&&(ne=3);let me,Se,q,he;if(B){const Xe=fi[B];me=Xe.vertexShader,Se=Xe.fragmentShader}else me=x.vertexShader,Se=x.fragmentShader,a.update(x),q=a.getVertexShaderID(x),he=a.getFragmentShaderID(x);const fe=t.getRenderTarget(),V=t.state.buffers.depth.getReversed(),K=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Ue=!!x.map,we=!!x.matcap,Ie=!!L,Ve=!!x.aoMap,ke=!!x.lightMap,et=!!x.bumpMap,Ze=!!x.normalMap,bt=!!x.displacementMap,U=!!x.emissiveMap,Ct=!!x.metalnessMap,$e=!!x.roughnessMap,rt=x.anisotropy>0,Me=x.clearcoat>0,gt=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,ie=rt&&!!x.anisotropyMap,de=Me&&!!x.clearcoatMap,ve=Me&&!!x.clearcoatNormalMap,xe=Me&&!!x.clearcoatRoughnessMap,ee=T&&!!x.iridescenceMap,re=T&&!!x.iridescenceThicknessMap,Te=S&&!!x.sheenColorMap,le=S&&!!x.sheenRoughnessMap,oe=!!x.specularMap,Z=!!x.specularColorMap,ye=!!x.specularIntensityMap,Fe=G&&!!x.transmissionMap,Ge=G&&!!x.thicknessMap,D=!!x.gradientMap,ue=!!x.alphaMap,J=x.alphaTest>0,Re=!!x.alphaHash,ae=!!x.extensions;let Q=xi;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const Ee={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:Se,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:K,instancingColor:K&&k.instanceColor!==null,instancingMorph:K&&k.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:we,envMap:Ie,envMapMode:Ie&&L.mapping,envMapCubeUVHeight:O,aoMap:Ve,lightMap:ke,bumpMap:et,normalMap:Ze,displacementMap:bt,emissiveMap:U,normalMapObjectSpace:Ze&&x.normalMapType===OS,normalMapTangentSpace:Ze&&x.normalMapType===xm,packedNormalMap:Ze&&x.normalMapType===xm&&KT(x.normalMap.format),metalnessMap:Ct,roughnessMap:$e,anisotropy:rt,anisotropyMap:ie,clearcoat:Me,clearcoatMap:de,clearcoatNormalMap:ve,clearcoatRoughnessMap:xe,dispersion:gt,iridescence:T,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:S,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:oe,specularColorMap:Z,specularIntensityMap:ye,transmission:G,transmissionMap:Fe,thicknessMap:Ge,gradientMap:D,opaque:x.transparent===!1&&x.blending===qs&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Re,combine:x.combine,mapUv:Ue&&v(x.map.channel),aoMapUv:Ve&&v(x.aoMap.channel),lightMapUv:ke&&v(x.lightMap.channel),bumpMapUv:et&&v(x.bumpMap.channel),normalMapUv:Ze&&v(x.normalMap.channel),displacementMapUv:bt&&v(x.displacementMap.channel),emissiveMapUv:U&&v(x.emissiveMap.channel),metalnessMapUv:Ct&&v(x.metalnessMap.channel),roughnessMapUv:$e&&v(x.roughnessMap.channel),anisotropyMapUv:ie&&v(x.anisotropyMap.channel),clearcoatMapUv:de&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&v(x.sheenRoughnessMap.channel),specularMapUv:oe&&v(x.specularMap.channel),specularColorMapUv:Z&&v(x.specularColorMap.channel),specularIntensityMapUv:ye&&v(x.specularIntensityMap.channel),transmissionMapUv:Fe&&v(x.transmissionMap.channel),thicknessMapUv:Ge&&v(x.thicknessMap.channel),alphaMapUv:ue&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ze||rt),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Ue||ue),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Ze===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:V,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(d(C,x),p(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function d(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function p(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const C=m[x.type];let N;if(C){const R=fi[C];N=SM.clone(R.uniforms)}else N=x.uniforms;return N}function y(x,C){let N=f.get(C);return N!==void 0?++N.usedTimes:(N=new jT(t,C,x,r),c.push(N),f.set(C,N)),N}function b(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:A}}function QT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function JT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,v,M,g,d){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:m,material:v,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:d},t[e]=p):(p.id=u.id,p.object=u,p.geometry=m,p.material=v,p.materialVariant=o(u),p.groupOrder=M,p.renderOrder=u.renderOrder,p.z=g,p.group=d),e++,p}function l(u,m,v,M,g,d){const p=a(u,m,v,M,g,d);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):n.push(p)}function c(u,m,v,M,g,d){const p=a(u,m,v,M,g,d);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function f(u,m){n.length>1&&n.sort(u||JT),i.length>1&&i.sort(m||gg),r.length>1&&r.sort(m||gg)}function h(){for(let u=e,m=t.length;u<m;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function eA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new vg,t.set(i,[o])):r>=s.length?(o=new vg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new st};break;case"SpotLight":n={position:new H,direction:new H,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iA=0;function rA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sA(t){const e=new tA,n=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new At,o=new At;function a(c){let f=0,h=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,v=0,M=0,g=0,d=0,p=0,_=0,y=0,b=0,w=0,A=0;c.sort(rA);for(let C=0,N=c.length;C<N;C++){const R=c[C],k=R.color,$=R.intensity,te=R.distance;let F=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ts?F=R.shadow.map.texture:F=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=k.r*$,h+=k.g*$,u+=k.b*$;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],$);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const I=R.shadow,L=n.get(R);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=R.shadow.matrix,p++}i.directional[m]=X,m++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(k).multiplyScalar($),X.distance=te,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[M]=X;const I=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,I.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[M]=I.matrix,R.castShadow){const L=n.get(R);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,i.spotShadow[M]=L,i.spotShadowMap[M]=F,y++}M++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(k).multiplyScalar($),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=X,g++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const I=R.shadow,L=n.get(R);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,L.shadowCameraNear=I.camera.near,L.shadowCameraFar=I.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=F,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=X,v++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar($),X.groundColor.copy(R.groundColor).multiplyScalar($),i.hemi[d]=X,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==d||x.numDirectionalShadows!==p||x.numPointShadows!==_||x.numSpotShadows!==y||x.numSpotMaps!==b||x.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=m,x.pointLength=v,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=d,x.numDirectionalShadows=p,x.numPointShadows=_,x.numSpotShadows=y,x.numSpotMaps=b,x.numLightProbes=A,i.version=iA++)}function l(c,f){let h=0,u=0,m=0,v=0,M=0;const g=f.matrixWorldInverse;for(let d=0,p=c.length;d<p;d++){const _=c[d];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(_.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function _g(t){const e=new sA(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function oA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _g(t),e.set(r,[a])):s>=o.length?(a=new _g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`,cA=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],uA=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xg=new At,Po=new H,dd=new H;function dA(t,e,n){let i=new D_;const r=new ct,s=new ct,o=new Dt,a=new TM,l=new AM,c={},f=n.maxTextureSize,h={[Tr]:yn,[yn]:Tr,[Qn]:Qn},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:aA,fragmentShader:lA}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new jt;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ri(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let d=this.type;this.render=function(w,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===pS&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Il);const C=t.getRenderTarget(),N=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=d!==this.type;$&&A.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(F=>F.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,F=w.length;te<F;te++){const X=w[te],I=X.shadow;if(I===void 0){He("WebGLShadowMap:",X,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const L=I.getFrameExtents();r.multiply(L),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/L.x),r.x=s.x*L.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/L.y),r.y=s.y*L.y,I.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=O,I.map===null||$===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Oo){if(X.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new yi(r.x,r.y,{format:ts,type:Xi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),I.map.texture.name=X.name+".shadowMap",I.map.depthTexture=new so(r.x,r.y,pi),I.map.depthTexture.name=X.name+".shadowMapDepth",I.map.depthTexture.format=ji,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=qt,I.map.depthTexture.magFilter=qt}else X.isPointLight?(I.map=new G_(r.x),I.map.depthTexture=new xM(r.x,Si)):(I.map=new yi(r.x,r.y),I.map.depthTexture=new so(r.x,r.y,Si)),I.map.depthTexture.name=X.name+".shadowMap",I.map.depthTexture.format=ji,this.type===Il?(I.map.depthTexture.compareFunction=O?Ah:Th,I.map.depthTexture.minFilter=rn,I.map.depthTexture.magFilter=rn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=qt,I.map.depthTexture.magFilter=qt);I.camera.updateProjectionMatrix()}const B=I.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<B;se++){if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,se),t.clear();else{se===0&&(t.setRenderTarget(I.map),t.clear());const ce=I.getViewport(se);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),k.viewport(o)}if(X.isPointLight){const ce=I.camera,ne=I.matrix,me=X.distance||ce.far;me!==ce.far&&(ce.far=me,ce.updateProjectionMatrix()),Po.setFromMatrixPosition(X.matrixWorld),ce.position.copy(Po),dd.copy(ce.position),dd.add(cA[se]),ce.up.copy(uA[se]),ce.lookAt(dd),ce.updateMatrixWorld(),ne.makeTranslation(-Po.x,-Po.y,-Po.z),xg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),I._frustum.setFromProjectionMatrix(xg,ce.coordinateSystem,ce.reversedDepth)}else I.updateMatrices(X);i=I.getFrustum(),y(A,x,I.camera,X,this.type)}I.isPointLightShadow!==!0&&this.type===Oo&&p(I,x),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,N,R)};function p(w,A){const x=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(r.x,r.y,{format:ts,type:Xi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,x,u,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,x,m,M,null)}function _(w,A,x,C){let N=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)N=R;else if(N=x.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=N.uuid,$=A.uuid;let te=c[k];te===void 0&&(te={},c[k]=te);let F=te[$];F===void 0&&(F=N.clone(),te[$]=F,A.addEventListener("dispose",b)),N=F}if(N.visible=A.visible,N.wireframe=A.wireframe,C===Oo?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=t.properties.get(N);k.light=x}return N}function y(w,A,x,C,N){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Oo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const $=e.update(w),te=w.material;if(Array.isArray(te)){const F=$.groups;for(let X=0,I=F.length;X<I;X++){const L=F[X],O=te[L.materialIndex];if(O&&O.visible){const B=_(w,O,C,N);w.onBeforeShadow(t,w,A,x,$,B,L),t.renderBufferDirect(x,null,$,B,w,L),w.onAfterShadow(t,w,A,x,$,B,L)}}}else if(te.visible){const F=_(w,te,C,N);w.onBeforeShadow(t,w,A,x,$,F,null),t.renderBufferDirect(x,null,$,F,w,null),w.onAfterShadow(t,w,A,x,$,F,null)}}const k=w.children;for(let $=0,te=k.length;$<te;$++)y(k[$],A,x,C,N)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const C=c[x],N=w.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function fA(t,e){function n(){let D=!1;const ue=new Dt;let J=null;const Re=new Dt(0,0,0,0);return{setMask:function(ae){J!==ae&&!D&&(t.colorMask(ae,ae,ae,ae),J=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Q,Ee,Xe,Rt){Rt===!0&&(ae*=Xe,Q*=Xe,Ee*=Xe),ue.set(ae,Q,Ee,Xe),Re.equals(ue)===!1&&(t.clearColor(ae,Q,Ee,Xe),Re.copy(ue))},reset:function(){D=!1,J=null,Re.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,J=null,Re=null,ae=null;return{setReversed:function(Q){if(ue!==Q){const Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(Q){Q?fe(t.DEPTH_TEST):V(t.DEPTH_TEST)},setMask:function(Q){J!==Q&&!D&&(t.depthMask(Q),J=Q)},setFunc:function(Q){if(ue&&(Q=qS[Q]),Re!==Q){switch(Q){case Cf:t.depthFunc(t.NEVER);break;case Rf:t.depthFunc(t.ALWAYS);break;case Pf:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case Nf:t.depthFunc(t.EQUAL);break;case Lf:t.depthFunc(t.GEQUAL);break;case Df:t.depthFunc(t.GREATER);break;case If:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ae!==Q&&(ae=Q,ue&&(Q=1-Q),t.clearDepth(Q))},reset:function(){D=!1,J=null,Re=null,ae=null,ue=!1}}}function r(){let D=!1,ue=null,J=null,Re=null,ae=null,Q=null,Ee=null,Xe=null,Rt=null;return{setTest:function(ut){D||(ut?fe(t.STENCIL_TEST):V(t.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!D&&(t.stencilMask(ut),ue=ut)},setFunc:function(ut,Mi,oi){(J!==ut||Re!==Mi||ae!==oi)&&(t.stencilFunc(ut,Mi,oi),J=ut,Re=Mi,ae=oi)},setOp:function(ut,Mi,oi){(Q!==ut||Ee!==Mi||Xe!==oi)&&(t.stencilOp(ut,Mi,oi),Q=ut,Ee=Mi,Xe=oi)},setLocked:function(ut){D=ut},setClear:function(ut){Rt!==ut&&(t.clearStencil(ut),Rt=ut)},reset:function(){D=!1,ue=null,J=null,Re=null,ae=null,Q=null,Ee=null,Xe=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},m=new WeakMap,v=[],M=null,g=!1,d=null,p=null,_=null,y=null,b=null,w=null,A=null,x=new st(0,0,0),C=0,N=!1,R=null,k=null,$=null,te=null,F=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,L=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=L>=1):O.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=L>=2);let B=null,se={};const ce=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),me=new Dt().fromArray(ce),Se=new Dt().fromArray(ne);function q(D,ue,J,Re){const ae=new Uint8Array(4),Q=t.createTexture();t.bindTexture(D,Q),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<J;Ee++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ue+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Q}const he={};he[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),o.setFunc(io),et(!1),Ze(gm),fe(t.CULL_FACE),Ve(zi);function fe(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function V(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function K(D,ue){return u[D]!==ue?(t.bindFramebuffer(D,ue),u[D]=ue,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(D,ue){let J=v,Re=!1;if(D){J=m.get(ue),J===void 0&&(J=[],m.set(ue,J));const ae=D.textures;if(J.length!==ae.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Ee=ae.length;Q<Ee;Q++)J[Q]=t.COLOR_ATTACHMENT0+Q;J.length=ae.length,Re=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,Re=!0);Re&&t.drawBuffers(J)}function Ue(D){return M!==D?(t.useProgram(D),M=D,!0):!1}const we={[Or]:t.FUNC_ADD,[gS]:t.FUNC_SUBTRACT,[vS]:t.FUNC_REVERSE_SUBTRACT};we[_S]=t.MIN,we[xS]=t.MAX;const Ie={[yS]:t.ZERO,[SS]:t.ONE,[MS]:t.SRC_COLOR,[Af]:t.SRC_ALPHA,[CS]:t.SRC_ALPHA_SATURATE,[AS]:t.DST_COLOR,[wS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[bf]:t.ONE_MINUS_SRC_ALPHA,[bS]:t.ONE_MINUS_DST_COLOR,[TS]:t.ONE_MINUS_DST_ALPHA,[RS]:t.CONSTANT_COLOR,[PS]:t.ONE_MINUS_CONSTANT_COLOR,[NS]:t.CONSTANT_ALPHA,[LS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(D,ue,J,Re,ae,Q,Ee,Xe,Rt,ut){if(D===zi){g===!0&&(V(t.BLEND),g=!1);return}if(g===!1&&(fe(t.BLEND),g=!0),D!==mS){if(D!==d||ut!==N){if((p!==Or||b!==Or)&&(t.blendEquation(t.FUNC_ADD),p=Or,b=Or),ut)switch(D){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFunc(t.ONE,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",D);break}else switch(D){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case vm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _m:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",D);break}_=null,y=null,w=null,A=null,x.set(0,0,0),C=0,d=D,N=ut}return}ae=ae||ue,Q=Q||J,Ee=Ee||Re,(ue!==p||ae!==b)&&(t.blendEquationSeparate(we[ue],we[ae]),p=ue,b=ae),(J!==_||Re!==y||Q!==w||Ee!==A)&&(t.blendFuncSeparate(Ie[J],Ie[Re],Ie[Q],Ie[Ee]),_=J,y=Re,w=Q,A=Ee),(Xe.equals(x)===!1||Rt!==C)&&(t.blendColor(Xe.r,Xe.g,Xe.b,Rt),x.copy(Xe),C=Rt),d=D,N=!1}function ke(D,ue){D.side===Qn?V(t.CULL_FACE):fe(t.CULL_FACE);let J=D.side===yn;ue&&(J=!J),et(J),D.blending===qs&&D.transparent===!1?Ve(zi):Ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Re=D.stencilWrite;a.setTest(Re),Re&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),U(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):V(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){R!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),R=D)}function Ze(D){D!==fS?(fe(t.CULL_FACE),D!==k&&(D===gm?t.cullFace(t.BACK):D===hS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):V(t.CULL_FACE),k=D}function bt(D){D!==$&&(I&&t.lineWidth(D),$=D)}function U(D,ue,J){D?(fe(t.POLYGON_OFFSET_FILL),(te!==ue||F!==J)&&(te=ue,F=J,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,J))):V(t.POLYGON_OFFSET_FILL)}function Ct(D){D?fe(t.SCISSOR_TEST):V(t.SCISSOR_TEST)}function $e(D){D===void 0&&(D=t.TEXTURE0+X-1),B!==D&&(t.activeTexture(D),B=D)}function rt(D,ue,J){J===void 0&&(B===null?J=t.TEXTURE0+X-1:J=B);let Re=se[J];Re===void 0&&(Re={type:void 0,texture:void 0},se[J]=Re),(Re.type!==D||Re.texture!==ue)&&(B!==J&&(t.activeTexture(J),B=J),t.bindTexture(D,ue||he[D]),Re.type=D,Re.texture=ue)}function Me(){const D=se[B];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function gt(){try{t.compressedTexImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function G(){try{t.texSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ie(){try{t.compressedTexSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function de(){try{t.compressedTexSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ve(){try{t.texStorage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function xe(){try{t.texStorage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ee(){try{t.texImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function re(){try{t.texImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function Te(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function le(D,ue){h[D]!==ue&&(t.pixelStorei(D,ue),h[D]=ue)}function oe(D){me.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function Z(D){Se.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function ye(D,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let Re=J.get(D);Re===void 0&&(Re=t.getUniformBlockIndex(ue,D.name),J.set(D,Re))}function Fe(D,ue){const Re=c.get(ue).get(D);l.get(ue)!==Re&&(t.uniformBlockBinding(ue,Re,D.__bindingPointIndex),l.set(ue,Re))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},B=null,se={},u={},m=new WeakMap,v=[],M=null,g=!1,d=null,p=null,_=null,y=null,b=null,w=null,A=null,x=new st(0,0,0),C=0,N=!1,R=null,k=null,$=null,te=null,F=null,me.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:V,bindFramebuffer:K,drawBuffers:_e,useProgram:Ue,setBlending:Ve,setMaterial:ke,setFlipSided:et,setCullFace:Ze,setLineWidth:bt,setPolygonOffset:U,setScissorTest:Ct,activeTexture:$e,bindTexture:rt,unbindTexture:Me,compressedTexImage2D:gt,compressedTexImage3D:T,texImage2D:ee,texImage3D:re,pixelStorei:le,getParameter:Te,updateUBOMapping:ye,uniformBlockBinding:Fe,texStorage2D:ve,texStorage3D:xe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:oe,viewport:Z,reset:Ge}}function hA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,f=new WeakMap,h=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,S){return v?new OffscreenCanvas(T,S):yc("canvas")}function g(T,S,G){let ie=1;const de=gt(T);if((de.width>G||de.height>G)&&(ie=G/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ve=Math.floor(ie*de.width),xe=Math.floor(ie*de.height);u===void 0&&(u=M(ve,xe));const ee=S?M(ve,xe):u;return ee.width=ve,ee.height=xe,ee.getContext("2d").drawImage(T,0,0,ve,xe),He("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ve+"x"+xe+")."),ee}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),T;return T}function d(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,S,G,ie,de,ve=!1){if(T!==null){if(t[T]!==void 0)return t[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let xe;ie&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8),G===t.UNSIGNED_SHORT&&xe&&(ee=xe.R16_EXT),G===t.SHORT&&xe&&(ee=xe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),S===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8),G===t.UNSIGNED_SHORT&&xe&&(ee=xe.RG16_EXT),G===t.SHORT&&xe&&(ee=xe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),S===t.RGB&&(G===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGB16_EXT),G===t.SHORT&&xe&&(ee=xe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),S===t.RGBA){const re=ve?_c:Qe.getTransfer(de);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=re===ot?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGBA16_EXT),G===t.SHORT&&xe&&(ee=xe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(T,S){let G;return T?S===null||S===Si||S===pa?G=t.DEPTH24_STENCIL8:S===pi?G=t.DEPTH32F_STENCIL8:S===ha&&(G=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===pa?G=t.DEPTH_COMPONENT24:S===pi?G=t.DEPTH_COMPONENT32F:S===ha&&(G=t.DEPTH_COMPONENT16),G}function w(T,S){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){const S=T.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&h.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),R(S)}function C(T){const S=i.get(T);if(S.__webglInit===void 0)return;const G=T.source,ie=m.get(G);if(ie){const de=ie[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&N(T),Object.keys(ie).length===0&&m.delete(G)}i.remove(T)}function N(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const G=T.source,ie=m.get(G);delete ie[S.__cacheKey],o.memory.textures--}function R(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let de=0;de<S.__webglFramebuffer[ie].length;de++)t.deleteFramebuffer(S.__webglFramebuffer[ie][de]);else t.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)t.deleteFramebuffer(S.__webglFramebuffer[ie]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=T.textures;for(let ie=0,de=G.length;ie<de;ie++){const ve=i.get(G[ie]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(G[ie])}i.remove(T)}let k=0;function $(){k=0}function te(){return k}function F(T){k=T}function X(){const T=k;return T>=r.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function I(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function L(T,S){const G=i.get(T);if(T.isVideoTexture&&rt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const ie=T.image;if(ie===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{V(G,T,S);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function O(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){V(G,T,S);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function B(T,S){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){V(G,T,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function se(T,S){const G=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){K(G,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const ce={[Uf]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[Ff]:t.MIRRORED_REPEAT},ne={[qt]:t.NEAREST,[US]:t.NEAREST_MIPMAP_NEAREST,[$a]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Du]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},me={[kS]:t.NEVER,[HS]:t.ALWAYS,[zS]:t.LESS,[Th]:t.LEQUAL,[BS]:t.EQUAL,[Ah]:t.GEQUAL,[GS]:t.GREATER,[VS]:t.NOTEQUAL};function Se(T,S){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Du||S.magFilter===$a||S.magFilter===Hr||S.minFilter===rn||S.minFilter===Du||S.minFilter===$a||S.minFilter===Hr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ce[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ce[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ce[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ne[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==$a&&S.minFilter!==Hr||S.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const ie=S.source;let de=m.get(ie);de===void 0&&(de={},m.set(ie,de));const ve=I(S);if(ve!==T.__cacheKey){de[ve]===void 0&&(de[ve]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),de[ve].usedTimes++;const xe=de[T.__cacheKey];xe!==void 0&&(de[T.__cacheKey].usedTimes--,xe.usedTimes===0&&N(S)),T.__cacheKey=ve,T.__webglTexture=de[ve].texture}return G}function he(T,S,G){return Math.floor(Math.floor(T/G)/S)}function fe(T,S,G,ie){const ve=T.updateRanges;if(ve.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,G,ie,S.data);else{ve.sort((le,oe)=>le.start-oe.start);let xe=0;for(let le=1;le<ve.length;le++){const oe=ve[xe],Z=ve[le],ye=oe.start+oe.count,Fe=he(Z.start,S.width,4),Ge=he(oe.start,S.width,4);Z.start<=ye+1&&Fe===Ge&&he(Z.start+Z.count-1,S.width,4)===Fe?oe.count=Math.max(oe.count,Z.start+Z.count-oe.start):(++xe,ve[xe]=Z)}ve.length=xe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),Te=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let le=0,oe=ve.length;le<oe;le++){const Z=ve[le],ye=Math.floor(Z.start/4),Fe=Math.ceil(Z.count/4),Ge=ye%S.width,D=Math.floor(ye/S.width),ue=Fe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ge,D,ue,J,G,ie,S.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,Te)}}function V(T,S,G){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const de=q(T,S),ve=S.source;n.bindTexture(ie,T.__webglTexture,t.TEXTURE0+G);const xe=i.get(ve);if(ve.version!==xe.__version||de===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=Qe.getPrimaries(Qe.workingColorSpace),Re=S.colorSpace===cr?null:Qe.getPrimaries(S.colorSpace),ae=S.colorSpace===cr||J===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let re=g(S.image,!1,r.maxTextureSize);re=Me(S,re);const Te=s.convert(S.format,S.colorSpace),le=s.convert(S.type);let oe=y(S.internalFormat,Te,le,S.normalized,S.colorSpace,S.isVideoTexture);Se(ie,S);let Z;const ye=S.mipmaps,Fe=S.isVideoTexture!==!0,Ge=xe.__version===void 0||de===!0,D=ve.dataReady,ue=w(S,re);if(S.isDepthTexture)oe=b(S.format===Wr,S.type),Ge&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,oe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,oe,re.width,re.height,0,Te,le,null));else if(S.isDataTexture)if(ye.length>0){Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,ue,oe,ye[0].width,ye[0].height);for(let J=0,Re=ye.length;J<Re;J++)Z=ye[J],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Z.width,Z.height,Te,le,Z.data):n.texImage2D(t.TEXTURE_2D,J,oe,Z.width,Z.height,0,Te,le,Z.data);S.generateMipmaps=!1}else Fe?(Ge&&n.texStorage2D(t.TEXTURE_2D,ue,oe,re.width,re.height),D&&fe(S,re,Te,le)):n.texImage2D(t.TEXTURE_2D,0,oe,re.width,re.height,0,Te,le,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,oe,ye[0].width,ye[0].height,re.depth);for(let J=0,Re=ye.length;J<Re;J++)if(Z=ye[J],S.format!==ei)if(Te!==null)if(Fe){if(D)if(S.layerUpdates.size>0){const ae=Km(Z.width,Z.height,S.format,S.type);for(const Q of S.layerUpdates){const Ee=Z.data.subarray(Q*ae/Z.data.BYTES_PER_ELEMENT,(Q+1)*ae/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Q,Z.width,Z.height,1,Te,Ee)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Z.width,Z.height,re.depth,Te,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,oe,Z.width,Z.height,re.depth,0,Z.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Z.width,Z.height,re.depth,Te,le,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,oe,Z.width,Z.height,re.depth,0,Te,le,Z.data)}else{Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,ue,oe,ye[0].width,ye[0].height);for(let J=0,Re=ye.length;J<Re;J++)Z=ye[J],S.format!==ei?Te!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Z.width,Z.height,Te,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,J,oe,Z.width,Z.height,0,Z.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Z.width,Z.height,Te,le,Z.data):n.texImage2D(t.TEXTURE_2D,J,oe,Z.width,Z.height,0,Te,le,Z.data)}else if(S.isDataArrayTexture)if(Fe){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,oe,re.width,re.height,re.depth),D)if(S.layerUpdates.size>0){const J=Km(re.width,re.height,S.format,S.type);for(const Re of S.layerUpdates){const ae=re.data.subarray(Re*J/re.data.BYTES_PER_ELEMENT,(Re+1)*J/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,re.width,re.height,1,Te,le,ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Te,le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,oe,re.width,re.height,re.depth,0,Te,le,re.data);else if(S.isData3DTexture)Fe?(Ge&&n.texStorage3D(t.TEXTURE_3D,ue,oe,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Te,le,re.data)):n.texImage3D(t.TEXTURE_3D,0,oe,re.width,re.height,re.depth,0,Te,le,re.data);else if(S.isFramebufferTexture){if(Ge)if(Fe)n.texStorage2D(t.TEXTURE_2D,ue,oe,re.width,re.height);else{let J=re.width,Re=re.height;for(let ae=0;ae<ue;ae++)n.texImage2D(t.TEXTURE_2D,ae,oe,J,Re,0,Te,le,null),J>>=1,Re>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),re.parentNode!==J){J.appendChild(re),h.add(S),J.onpaint=Xe=>{const Rt=Xe.changedElements;for(const ut of h)Rt.includes(ut.image)&&(ut.needsUpdate=!0)},J.requestPaint();return}const Re=0,ae=t.RGBA,Q=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Re,ae,Q,Ee,re),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ye.length>0){if(Fe&&Ge){const J=gt(ye[0]);n.texStorage2D(t.TEXTURE_2D,ue,oe,J.width,J.height)}for(let J=0,Re=ye.length;J<Re;J++)Z=ye[J],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Te,le,Z):n.texImage2D(t.TEXTURE_2D,J,oe,Te,le,Z);S.generateMipmaps=!1}else if(Fe){if(Ge){const J=gt(re);n.texStorage2D(t.TEXTURE_2D,ue,oe,J.width,J.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,le,re)}else n.texImage2D(t.TEXTURE_2D,0,oe,Te,le,re);d(S)&&p(ie),xe.__version=ve.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function K(T,S,G){if(S.image.length!==6)return;const ie=q(T,S),de=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+G);const ve=i.get(de);if(de.version!==ve.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const xe=Qe.getPrimaries(Qe.workingColorSpace),ee=S.colorSpace===cr?null:Qe.getPrimaries(S.colorSpace),re=S.colorSpace===cr||xe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Te&&!le?oe[Q]=g(S.image[Q],!0,r.maxCubemapSize):oe[Q]=le?S.image[Q].image:S.image[Q],oe[Q]=Me(S,oe[Q]);const Z=oe[0],ye=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Ge=y(S.internalFormat,ye,Fe,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,ue=ve.__version===void 0||ie===!0,J=de.dataReady;let Re=w(S,Z);Se(t.TEXTURE_CUBE_MAP,S);let ae;if(Te){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Ge,Z.width,Z.height);for(let Q=0;Q<6;Q++){ae=oe[Q].mipmaps;for(let Ee=0;Ee<ae.length;Ee++){const Xe=ae[Ee];S.format!==ei?ye!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Xe.width,Xe.height,ye,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Ge,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Xe.width,Xe.height,ye,Fe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Ge,Xe.width,Xe.height,0,ye,Fe,Xe.data)}}}else{if(ae=S.mipmaps,D&&ue){ae.length>0&&Re++;const Q=gt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(le){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,ye,Fe,oe[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,oe[Q].width,oe[Q].height,0,ye,Fe,oe[Q].data);for(let Ee=0;Ee<ae.length;Ee++){const Rt=ae[Ee].image[Q].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Rt.width,Rt.height,ye,Fe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Ge,Rt.width,Rt.height,0,ye,Fe,Rt.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye,Fe,oe[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,ye,Fe,oe[Q]);for(let Ee=0;Ee<ae.length;Ee++){const Xe=ae[Ee];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,ye,Fe,Xe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Ge,ye,Fe,Xe.image[Q])}}}d(S)&&p(t.TEXTURE_CUBE_MAP),ve.__version=de.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,G,ie,de,ve){const xe=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),re=y(G.internalFormat,xe,ee,G.normalized,G.colorSpace),Te=i.get(S),le=i.get(G);if(le.__renderTarget=S,!Te.__hasExternalTextures){const oe=Math.max(1,S.width>>ve),Z=Math.max(1,S.height>>ve);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,ve,re,oe,Z,S.depth,0,xe,ee,null):n.texImage2D(de,ve,re,oe,Z,0,xe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,de,le.__webglTexture,0,Ct(S)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,de,le.__webglTexture,ve),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(T,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const ie=S.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,ve=b(S.stencilBuffer,de),xe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(S),ve,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(S),ve,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ve,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,T)}else{const ie=S.textures;for(let de=0;de<ie.length;de++){const ve=ie[de],xe=s.convert(ve.format,ve.colorSpace),ee=s.convert(ve.type),re=y(ve.internalFormat,xe,ee,ve.normalized,ve.colorSpace);$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(S),re,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(S),re,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,re,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(T,S,G){const ie=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(S.depthTexture);if(de.__renderTarget=S,(!de.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),de.__webglTexture===void 0){de.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Se(t.TEXTURE_CUBE_MAP,S.depthTexture);const Te=s.convert(S.depthTexture.format),le=s.convert(S.depthTexture.type);let oe;S.depthTexture.format===ji?oe=t.DEPTH_COMPONENT24:S.depthTexture.format===Wr&&(oe=t.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,oe,S.width,S.height,0,Te,le,null)}}else L(S.depthTexture,0);const ve=de.__webglTexture,xe=Ct(S),ee=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,re=S.depthTexture.format===Wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ve,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ve,0);else if(S.depthTexture.format===Wr)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ve,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const S=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const ie=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=ie}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)we(S.__webglFramebuffer[ie],T,ie);else{const ie=T.texture.mipmaps;ie&&ie.length>0?we(S.__webglFramebuffer[0],T,0):we(S.__webglFramebuffer,T,0)}else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[ie],T,!1);else{const de=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,ve)}}else{const ie=T.texture.mipmaps;if(ie&&ie.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,T,!1);else{const de=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ve),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,ve)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(T,S,G){const ie=i.get(T);S!==void 0&&_e(ie.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ie(T)}function ke(T){const S=T.texture,G=i.get(T),ie=i.get(S);T.addEventListener("dispose",x);const de=T.textures,ve=T.isWebGLCubeRenderTarget===!0,xe=de.length>1;if(xe||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++),ve){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let re=0;re<S.mipmaps.length;re++)G.__webglFramebuffer[ee][re]=t.createFramebuffer()}else G.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)G.__webglFramebuffer[ee]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ee=0,re=de.length;ee<re;ee++){const Te=i.get(de[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&$e(T)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<de.length;ee++){const re=de[ee];G.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const Te=s.convert(re.format,re.colorSpace),le=s.convert(re.type),oe=y(re.internalFormat,Te,le,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),Z=Ct(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,oe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ve){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)_e(G.__webglFramebuffer[ee][re],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else _e(G.__webglFramebuffer[ee],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ee=0,re=de.length;ee<re;ee++){const Te=de[ee],le=i.get(Te);let oe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,le.__webglTexture),Se(oe,Te),_e(G.__webglFramebuffer,T,Te,t.COLOR_ATTACHMENT0+ee,oe,0),d(Te)&&p(oe)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,ie.__webglTexture),Se(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)_e(G.__webglFramebuffer[re],T,S,t.COLOR_ATTACHMENT0,ee,re);else _e(G.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,ee,0);d(S)&&p(ee),n.unbindTexture()}T.depthBuffer&&Ie(T)}function et(T){const S=T.textures;for(let G=0,ie=S.length;G<ie;G++){const de=S[G];if(d(de)){const ve=_(T),xe=i.get(de).__webglTexture;n.bindTexture(ve,xe),p(ve),n.unbindTexture()}}}const Ze=[],bt=[];function U(T){if(T.samples>0){if($e(T)===!1){const S=T.textures,G=T.width,ie=T.height;let de=t.COLOR_BUFFER_BIT;const ve=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(T),ee=S.length>1;if(ee)for(let Te=0;Te<S.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const re=T.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const le=i.get(S[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,de,t.NEAREST),l===!0&&(Ze.length=0,bt.length=0,Ze.push(t.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ze.push(ve),bt.push(ve),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<S.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const le=i.get(S[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ct(T){return Math.min(r.maxSamples,T.samples)}function $e(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(T){const S=o.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Me(T,S){const G=T.colorSpace,ie=T.format,de=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==vc&&G!==cr&&(Qe.getTransfer(G)===ot?(ie!==ei||de!==kn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",G)),S}function gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.getTextureUnits=te,this.setTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=se,this.rebindTextures=Ve,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pA(t,e){function n(i,r=cr){let s;const o=Qe.getTransfer(r);if(i===kn)return t.UNSIGNED_BYTE;if(i===yh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===M_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===E_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===y_)return t.BYTE;if(i===S_)return t.SHORT;if(i===ha)return t.UNSIGNED_SHORT;if(i===xh)return t.INT;if(i===Si)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Xi)return t.HALF_FLOAT;if(i===w_)return t.ALPHA;if(i===T_)return t.RGB;if(i===ei)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Wr)return t.DEPTH_STENCIL;if(i===A_)return t.RED;if(i===Mh)return t.RED_INTEGER;if(i===ts)return t.RG;if(i===Eh)return t.RG_INTEGER;if(i===wh)return t.RGBA_INTEGER;if(i===Ul||i===Fl||i===Ol||i===kl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Of||i===kf||i===zf||i===Bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Of)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gf||i===Vf||i===Hf||i===Wf||i===Xf||i===mc||i===jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gf||i===Vf)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wf)return s.COMPRESSED_R11_EAC;if(i===Xf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===mc)return s.COMPRESSED_RG11_EAC;if(i===jf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===e0||i===t0||i===n0||i===i0||i===r0||i===s0||i===o0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$f)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===e0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===t0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===n0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===i0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===r0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===s0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===o0)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===a0||i===l0||i===c0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===a0)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===l0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===c0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u0||i===d0||i===gc||i===f0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===u0)return s.COMPRESSED_RED_RGTC1_EXT;if(i===d0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===f0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
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

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new U_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new si({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",g=new vA,d={},p=n.getContextAttributes();let _=null,y=null;const b=[],w=[],A=new ct;let x=null;const C=new On;C.viewport=new Dt;const N=new On;N.viewport=new Dt;const R=[C,N],k=new CM;let $=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=b[q];return he===void 0&&(he=new Gu,b[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=b[q];return he===void 0&&(he=new Gu,b[q]=he),he.getGripSpace()},this.getHand=function(q){let he=b[q];return he===void 0&&(he=new Gu,b[q]=he),he.getHandSpace()};function F(q){const he=w.indexOf(q.inputSource);if(he===-1)return;const fe=b[he];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",I);for(let q=0;q<b.length;q++){const he=w[q];he!==null&&(w[q]=null,b[q].disconnect(he))}$=null,te=null,g.reset();for(const q in d)delete d[q];e.setRenderTarget(_),m=null,u=null,h=null,r=null,y=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,V=null,K=null;p.depth&&(K=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=p.stencil?Wr:ji,V=p.stencil?pa:Si);const _e={colorFormat:n.RGBA8,depthFormat:K,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(_e),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new yi(u.textureWidth,u.textureHeight,{format:ei,type:kn,depthTexture:new so(u.textureWidth,u.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new yi(m.framebufferWidth,m.framebufferHeight,{format:ei,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(q){for(let he=0;he<q.removed.length;he++){const fe=q.removed[he],V=w.indexOf(fe);V>=0&&(w[V]=null,b[V].disconnect(fe))}for(let he=0;he<q.added.length;he++){const fe=q.added[he];let V=w.indexOf(fe);if(V===-1){for(let _e=0;_e<b.length;_e++)if(_e>=w.length){w.push(fe),V=_e;break}else if(w[_e]===null){w[_e]=fe,V=_e;break}if(V===-1)break}const K=b[V];K&&K.connect(fe)}}const L=new H,O=new H;function B(q,he,fe){L.setFromMatrixPosition(he.matrixWorld),O.setFromMatrixPosition(fe.matrixWorld);const V=L.distanceTo(O),K=he.projectionMatrix.elements,_e=fe.projectionMatrix.elements,Ue=K[14]/(K[10]-1),we=K[14]/(K[10]+1),Ie=(K[9]+1)/K[5],Ve=(K[9]-1)/K[5],ke=(K[8]-1)/K[0],et=(_e[8]+1)/_e[0],Ze=Ue*ke,bt=Ue*et,U=V/(-ke+et),Ct=U*-ke;if(he.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(U),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),K[10]===-1)q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=Ue+U,rt=we+U,Me=Ze-Ct,gt=bt+(V-Ct),T=Ie*we/rt*$e,S=Ve*we/rt*$e;q.projectionMatrix.makePerspective(Me,gt,T,S,$e,rt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let he=q.near,fe=q.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),k.near=N.near=C.near=he,k.far=N.far=C.far=fe,($!==k.near||te!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,te=k.far),k.layers.mask=q.layers.mask|6,C.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const V=q.parent,K=k.cameras;se(k,V);for(let _e=0;_e<K.length;_e++)se(K[_e],V);K.length===2?B(k,C,N):k.projectionMatrix.copy(C.projectionMatrix),ce(q,k,V)};function ce(q,he,fe){fe===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=p0*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let ne=null;function me(q,he){if(f=he.getViewerPose(c||o),v=he,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let V=!1;fe.length!==k.cameras.length&&(k.cameras.length=0,V=!0);for(let we=0;we<fe.length;we++){const Ie=fe[we];let Ve=null;if(m!==null)Ve=m.getViewport(Ie);else{const et=h.getViewSubImage(u,Ie);Ve=et.viewport,we===0&&(e.setRenderTargetTextures(y,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(y))}let ke=R[we];ke===void 0&&(ke=new On,ke.layers.enable(we),ke.viewport=new Dt,R[we]=ke),ke.matrix.fromArray(Ie.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ie.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),we===0&&(k.matrix.copy(ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),V===!0&&k.cameras.push(ke)}const K=r.enabledFeatures;if(K&&K.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const we=h.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&g.init(we,r.renderState)}if(K&&K.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let we=0;we<fe.length;we++){const Ie=fe[we].camera;if(Ie){let Ve=d[Ie];Ve||(Ve=new U_,d[Ie]=Ve);const ke=h.getCameraImage(Ie);Ve.sourceTexture=ke}}}}for(let fe=0;fe<b.length;fe++){const V=w[fe],K=b[fe];V!==null&&K!==void 0&&K.update(V,he,c||o)}ne&&ne(q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const Se=new z_;Se.setAnimationLoop(me),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const xA=new At,j_=new We;j_.set(-1,0,0,0,1,0,0,0,1);function yA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,F_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,p,_,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,p,_):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===yn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===yn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const p=e.get(d),_=p.envMap,y=p.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(j_),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,p,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*p,g.scale.value=_*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,p){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===yn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const p=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,_){const y=_.program;i.uniformBlockBinding(p,y)}function c(p,_){let y=r[p.id];y===void 0&&(v(p),y=f(p),r[p.id]=y,p.addEventListener("dispose",g));const b=_.program;i.updateUBOMapping(p,b);const w=e.render.frame;s[p.id]!==w&&(u(p),s[p.id]=w)}function f(p){const _=h();p.__bindingPointIndex=_;const y=t.createBuffer(),b=p.__size,w=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(p){const _=r[p.id],y=p.uniforms,b=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,N=x.length;C<N;C++){const R=x[C];if(m(R,w,C,b)===!0){const k=R.__offset,$=Array.isArray(R.value)?R.value:[R.value];let te=0;for(let F=0;F<$.length;F++){const X=$[F],I=M(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,k+te,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):ArrayBuffer.isView(X)?R.__data.set(new X.constructor(X.buffer,X.byteOffset,R.__data.length)):(X.toArray(R.__data,te),te+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,_,y,b){const w=p.value,A=_+"_"+y;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:ArrayBuffer.isView(w)?b[A]=w.slice():b[A]=w.clone(),!0;{const x=b[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return b[A]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function v(p){const _=p.uniforms;let y=0;const b=16;for(let A=0,x=_.length;A<x;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let N=0,R=C.length;N<R;N++){const k=C[N],$=Array.isArray(k.value)?k.value:[k.value];for(let te=0,F=$.length;te<F;te++){const X=$[te],I=M(X),L=y%b,O=L%I.boundary,B=L+O;y+=O,B!==0&&b-B<I.storage&&(y+=b-B),k.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=I.storage}}}const w=y%b;return w>0&&(y+=b-w),p.__size=y,p.__cache={},this}function M(p){const _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):He("WebGLRenderer: Unsupported uniform value type.",p),_}function g(p){const _=p.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const MA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function EA(){return ui===null&&(ui=new pM(MA,16,16,ts,Xi),ui.name="DFG_LUT",ui.minFilter=rn,ui.magFilter=rn,ui.wrapS=Oi,ui.wrapT=Oi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class wA{constructor(e={}){const{canvas:n=XS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const M=m,g=new Set([wh,Eh,Mh]),d=new Set([kn,Si,ha,pa,yh,Sh]),p=new Uint32Array(4),_=new Int32Array(4),y=new H;let b=null,w=null;const A=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let R=!1,k=null;this._outputColorSpace=In;let $=0,te=0,F=null,X=-1,I=null;const L=new Dt,O=new Dt;let B=null;const se=new st(0);let ce=0,ne=n.width,me=n.height,Se=1,q=null,he=null;const fe=new Dt(0,0,ne,me),V=new Dt(0,0,ne,me);let K=!1;const _e=new D_;let Ue=!1,we=!1;const Ie=new At,Ve=new H,ke=new Dt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function bt(){return F===null?Se:1}let U=i;function Ct(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_h}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const z="webgl2";if(U=Ct(z,E),U===null)throw Ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw nt("WebGLRenderer: "+E.message),E}let $e,rt,Me,gt,T,S,G,ie,de,ve,xe,ee,re,Te,le,oe,Z,ye,Fe,Ge,D,ue,J;function Re(){$e=new Ew(U),$e.init(),D=new pA(U,$e),rt=new mw(U,$e,e,D),Me=new fA(U,$e),rt.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),gt=new Aw(U),T=new QT,S=new hA(U,$e,Me,T,rt,D,gt),G=new Mw(N),ie=new PM(U),ue=new hw(U,ie),de=new ww(U,ie,gt,ue),ve=new Cw(U,de,ie,ue,gt),ye=new bw(U,rt,S),le=new gw(T),xe=new ZT(N,G,$e,rt,ue,le),ee=new yA(N,T),re=new eA,Te=new oA($e),Z=new fw(N,G,Me,ve,v,l),oe=new dA(N,ve,rt),J=new SA(U,gt,rt,Me),Fe=new pw(U,$e,gt),Ge=new Tw(U,$e,gt),gt.programs=xe.programs,N.capabilities=rt,N.extensions=$e,N.properties=T,N.renderLists=re,N.shadowMap=oe,N.state=Me,N.info=gt}Re(),M!==kn&&(C=new Pw(M,n.width,n.height,r,s));const ae=new _A(N,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(ne,me,!1))},this.getSize=function(E){return E.set(ne,me)},this.setSize=function(E,z,Y=!0){if(ae.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,me=z,n.width=Math.floor(E*Se),n.height=Math.floor(z*Se),Y===!0&&(n.style.width=E+"px",n.style.height=z+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ne*Se,me*Se).floor()},this.setDrawingBufferSize=function(E,z,Y){ne=E,me=z,Se=Y,n.width=Math.floor(E*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(M===kn){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(fe)},this.setViewport=function(E,z,Y,W){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,z,Y,W),Me.viewport(L.copy(fe).multiplyScalar(Se).round())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,z,Y,W){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,z,Y,W),Me.scissor(O.copy(V).multiplyScalar(Se).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){Me.setScissorTest(K=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Y=!0){let W=0;if(E){let j=!1;if(F!==null){const Ce=F.texture.format;j=g.has(Ce)}if(j){const Ce=F.texture.type,Ne=d.has(Ce),be=Z.getClearColor(),Oe=Z.getClearAlpha(),ze=be.r,je=be.g,Ye=be.b;Ne?(p[0]=ze,p[1]=je,p[2]=Ye,p[3]=Oe,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=ze,_[1]=je,_[2]=Ye,_[3]=Oe,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}z&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),Z.dispose(),re.dispose(),Te.dispose(),T.dispose(),G.dispose(),ve.dispose(),ue.dispose(),J.dispose(),xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Fh),ae.removeEventListener("sessionend",Oh),Rr.stop()};function Q(E){E.preventDefault(),wm("WebGLRenderer: Context Lost."),R=!0}function Ee(){wm("WebGLRenderer: Context Restored."),R=!1;const E=gt.autoReset,z=oe.enabled,Y=oe.autoUpdate,W=oe.needsUpdate,j=oe.type;Re(),gt.autoReset=E,oe.enabled=z,oe.autoUpdate=Y,oe.needsUpdate=W,oe.type=j}function Xe(E){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const z=E.target;z.removeEventListener("dispose",Rt),ut(z)}function ut(E){Mi(E),T.remove(E)}function Mi(E){const z=T.get(E).programs;z!==void 0&&(z.forEach(function(Y){xe.releaseProgram(Y)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,W,j,Ce){z===null&&(z=et);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,be=Q_(E,z,Y,W,j);Me.setMaterial(W,Ne);let Oe=Y.index,ze=1;if(W.wireframe===!0){if(Oe=de.getWireframeAttribute(Y),Oe===void 0)return;ze=2}const je=Y.drawRange,Ye=Y.attributes.position;let Be=je.start*ze,dt=(je.start+je.count)*ze;Ce!==null&&(Be=Math.max(Be,Ce.start*ze),dt=Math.min(dt,(Ce.start+Ce.count)*ze)),Oe!==null?(Be=Math.max(Be,0),dt=Math.min(dt,Oe.count)):Ye!=null&&(Be=Math.max(Be,0),dt=Math.min(dt,Ye.count));const Pt=dt-Be;if(Pt<0||Pt===1/0)return;ue.setup(j,W,be,Y,Oe);let Et,ft=Fe;if(Oe!==null&&(Et=ie.get(Oe),ft=Ge,ft.setIndex(Et)),j.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*bt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(j.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),Me.setLineWidth(Kt*bt()),j.isLineSegments?ft.setMode(U.LINES):j.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else j.isPoints?ft.setMode(U.POINTS):j.isSprite&&ft.setMode(U.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Pe=j._multiDrawCounts,En=j._multiDrawCount,tt=Oe?ie.get(Oe).bytesPerElement:1,Ln=T.get(W).currentProgram.getUniforms();for(let ai=0;ai<En;ai++)Ln.setValue(U,"_gl_DrawID",ai),ft.render(Kt[ai]/tt,Pe[ai])}else if(j.isInstancedMesh)ft.renderInstances(Be,Pt,j.count);else if(Y.isInstancedBufferGeometry){const Kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,Kt);ft.renderInstances(Be,Pt,Pe)}else ft.render(Be,Pt)};function oi(E,z,Y){E.transparent===!0&&E.side===Qn&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,ba(E,z,Y),E.side=Tr,E.needsUpdate=!0,ba(E,z,Y),E.side=Qn):ba(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),w=Te.get(Y),w.init(z),x.push(w),Y.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),E!==Y&&E.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights();const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const be=Ce[Ne];oi(be,Y,j),W.add(be)}else oi(Ce,Y,j),W.add(Ce)}),w=x.pop(),W},this.compileAsync=function(E,z,Y=null){const W=this.compile(E,z,Y);return new Promise(j=>{function Ce(){if(W.forEach(function(Ne){T.get(Ne).currentProgram.isReady()&&W.delete(Ne)}),W.size===0){j(E);return}setTimeout(Ce,10)}$e.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qc=null;function K_(E){Qc&&Qc(E)}function Fh(){Rr.stop()}function Oh(){Rr.start()}const Rr=new z_;Rr.setAnimationLoop(K_),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(E){Qc=E,ae.setAnimationLoop(E),E===null?Rr.stop():Rr.start()},ae.addEventListener("sessionstart",Fh),ae.addEventListener("sessionend",Oh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;k!==null&&k.renderStart(E,z);const Y=ae.enabled===!0&&ae.isPresenting===!0,W=C!==null&&(F===null||Y)&&C.begin(N,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(z),z=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,z,F),w=Te.get(E,x.length),w.init(z),w.state.textureUnits=S.getTextureUnits(),x.push(w),Ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),_e.setFromProjectionMatrix(Ie,mi,z.reversedDepth),we=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,we),b=re.get(E,A.length),b.init(),A.push(b),ae.enabled===!0&&ae.isPresenting===!0){const Ne=N.xr.getDepthSensingMesh();Ne!==null&&Jc(Ne,z,-1/0,N.sortObjects)}Jc(E,z,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(q,he),Ze=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ze&&Z.addToRenderList(b,E),this.info.render.frame++,Ue===!0&&le.beginShadows();const j=w.state.shadowsArray;if(oe.render(j,E,z),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&C.hasRenderPass())===!1){const Ne=b.opaque,be=b.transmissive;if(w.setupLights(),z.isArrayCamera){const Oe=z.cameras;if(be.length>0)for(let ze=0,je=Oe.length;ze<je;ze++){const Ye=Oe[ze];zh(Ne,be,E,Ye)}Ze&&Z.render(E);for(let ze=0,je=Oe.length;ze<je;ze++){const Ye=Oe[ze];kh(b,E,Ye,Ye.viewport)}}else be.length>0&&zh(Ne,be,E,z),Ze&&Z.render(E),kh(b,E,z)}F!==null&&te===0&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),W&&C.end(N),E.isScene===!0&&E.onAfterRender(N,E,z),ue.resetDefaultState(),X=-1,I=null,x.pop(),x.length>0?(w=x[x.length-1],S.setTextureUnits(w.state.textureUnits),Ue===!0&&le.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,k!==null&&k.renderEnd()};function Jc(E,z,Y,W){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){W&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const Ne=ve.update(E),be=E.material;be.visible&&b.push(E,Ne,be,Y,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const Ne=ve.update(E),be=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ke.copy(Ne.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(be)){const Oe=Ne.groups;for(let ze=0,je=Oe.length;ze<je;ze++){const Ye=Oe[ze],Be=be[Ye.materialIndex];Be&&Be.visible&&b.push(E,Ne,Be,Y,ke.z,Ye)}}else be.visible&&b.push(E,Ne,be,Y,ke.z,null)}}const Ce=E.children;for(let Ne=0,be=Ce.length;Ne<be;Ne++)Jc(Ce[Ne],z,Y,W)}function kh(E,z,Y,W){const{opaque:j,transmissive:Ce,transparent:Ne}=E;w.setupLightsView(Y),Ue===!0&&le.setGlobalState(N.clippingPlanes,Y),W&&Me.viewport(L.copy(W)),j.length>0&&Aa(j,z,Y),Ce.length>0&&Aa(Ce,z,Y),Ne.length>0&&Aa(Ne,z,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function zh(E,z,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Be=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new yi(1,1,{generateMipmaps:!0,type:Be?Xi:kn,minFilter:Hr,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Ce=w.state.transmissionRenderTarget[W.id],Ne=W.viewport||L;Ce.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Oe=N.getActiveCubeFace(),ze=N.getActiveMipmapLevel();N.setRenderTarget(Ce),N.getClearColor(se),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),Ze&&Z.render(Y);const je=N.toneMapping;N.toneMapping=xi;const Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Ue===!0&&le.setGlobalState(N.clippingPlanes,W),Aa(E,Y,W),S.updateMultisampleRenderTarget(Ce),S.updateRenderTargetMipmap(Ce),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let dt=0,Pt=z.length;dt<Pt;dt++){const Et=z[dt],{object:ft,geometry:Kt,material:Pe,group:En}=Et;if(Pe.side===Qn&&ft.layers.test(W.layers)){const tt=Pe.side;Pe.side=yn,Pe.needsUpdate=!0,Bh(ft,Y,W,Kt,Pe,En),Pe.side=tt,Pe.needsUpdate=!0,Be=!0}}Be===!0&&(S.updateMultisampleRenderTarget(Ce),S.updateRenderTargetMipmap(Ce))}N.setRenderTarget(be,Oe,ze),N.setClearColor(se,ce),Ye!==void 0&&(W.viewport=Ye),N.toneMapping=je}function Aa(E,z,Y){const W=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Ce=E.length;j<Ce;j++){const Ne=E[j],{object:be,geometry:Oe,group:ze}=Ne;let je=Ne.material;je.allowOverride===!0&&W!==null&&(je=W),be.layers.test(Y.layers)&&Bh(be,z,Y,Oe,je,ze)}}function Bh(E,z,Y,W,j,Ce){E.onBeforeRender(N,z,Y,W,j,Ce),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(N,z,Y,W,E,Ce),j.transparent===!0&&j.side===Qn&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,N.renderBufferDirect(Y,z,W,j,E,Ce),j.side=Tr,j.needsUpdate=!0,N.renderBufferDirect(Y,z,W,j,E,Ce),j.side=Qn):N.renderBufferDirect(Y,z,W,j,E,Ce),E.onAfterRender(N,z,Y,W,j,Ce)}function ba(E,z,Y){z.isScene!==!0&&(z=et);const W=T.get(E),j=w.state.lights,Ce=w.state.shadowsArray,Ne=j.state.version,be=xe.getParameters(E,j.state,Ce,z,Y,w.state.lightProbeGridArray),Oe=xe.getProgramCacheKey(be);let ze=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=G.get(E.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Rt),ze=new Map,W.programs=ze);let Ye=ze.get(Oe);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Ne)return Vh(E,be),Ye}else be.uniforms=xe.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,Y,be),E.onBeforeCompile(be,N),Ye=xe.acquireProgram(be,Oe),ze.set(Oe,Ye),W.uniforms=be.uniforms;const Be=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=le.uniform),Vh(E,be),W.needsLights=ex(E),W.lightsStateVersion=Ne,W.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Ye,W.uniformsList=null,Ye}function Gh(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=zl.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Vh(E,z){const Y=T.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Z_(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let Y=0,W=E.length;Y<W;Y++){const j=E[Y];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function Q_(E,z,Y,W,j){z.isScene!==!0&&(z=et),S.resetTextureUnits();const Ce=z.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,be=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qe.workingColorSpace,Oe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ze=G.get(W.envMap||Ne,Oe),je=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,Pt=!!Y.morphAttributes.color;let Et=xi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=N.toneMapping);const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=ft!==void 0?ft.length:0,Pe=T.get(W),En=w.state.lights;if(Ue===!0&&(we===!0||E!==I)){const pt=E===I&&W.id===X;le.setState(W,E,pt)}let tt=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==En.state.version||Pe.outputColorSpace!==be||j.isBatchedMesh&&Pe.batching===!1||!j.isBatchedMesh&&Pe.batching===!0||j.isBatchedMesh&&Pe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Pe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Pe.instancing===!1||!j.isInstancedMesh&&Pe.instancing===!0||j.isSkinnedMesh&&Pe.skinning===!1||!j.isSkinnedMesh&&Pe.skinning===!0||j.isInstancedMesh&&Pe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Pe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Pe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Pe.instancingMorph===!1&&j.morphTexture!==null||Pe.envMap!==ze||W.fog===!0&&Pe.fog!==Ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==je||Pe.vertexTangents!==Ye||Pe.morphTargets!==Be||Pe.morphNormals!==dt||Pe.morphColors!==Pt||Pe.toneMapping!==Et||Pe.morphTargetsCount!==Kt||!!Pe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Pe.__version=W.version);let Ln=Pe.currentProgram;tt===!0&&(Ln=ba(W,z,j),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Ln,Pe));let ai=!1,Yi=!1,os=!1;const ht=Ln.getUniforms(),Nt=Pe.uniforms;if(Me.useProgram(Ln.program)&&(ai=!0,Yi=!0,os=!0),W.id!==X&&(X=W.id,Yi=!0),Pe.needsLights){const pt=Z_(w.state.lightProbeGridArray,j);Pe.lightProbeGrid!==pt&&(Pe.lightProbeGrid=pt,Yi=!0)}if(ai||I!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",E.projectionMatrix),ht.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ki=ht.map.cameraPosition;Ki!==void 0&&Ki.setValue(U,Ve.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Yi=!0,os=!0)}if(Pe.needsLights&&(En.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",En.state.directionalShadowMap,S),En.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",En.state.spotShadowMap,S),En.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",En.state.pointShadowMap,S)),j.isSkinnedMesh){ht.setOptional(U,j,"bindMatrix"),ht.setOptional(U,j,"bindMatrixInverse");const pt=j.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(U,"boneTexture",pt.boneTexture,S))}j.isBatchedMesh&&(ht.setOptional(U,j,"batchingTexture"),ht.setValue(U,"batchingTexture",j._matricesTexture,S),ht.setOptional(U,j,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",j._indirectTexture,S),ht.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",j._colorsTexture,S));const $i=Y.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&ye.update(j,Y,Ln),(Yi||Pe.receiveShadow!==j.receiveShadow)&&(Pe.receiveShadow=j.receiveShadow,ht.setValue(U,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Nt.envMapIntensity.value=z.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=EA()),Yi){if(ht.setValue(U,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights&&J_(Nt,os),Ce&&W.fog===!0&&ee.refreshFogUniforms(Nt,Ce),ee.refreshMaterialUniforms(Nt,W,Se,me,w.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.lightProbeGrid){const pt=Pe.lightProbeGrid;Nt.probesSH.value=pt.texture,Nt.probesMin.value.copy(pt.boundingBox.min),Nt.probesMax.value.copy(pt.boundingBox.max),Nt.probesResolution.value.copy(pt.resolution)}zl.upload(U,Gh(Pe),Nt,S)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zl.upload(U,Gh(Pe),Nt,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(U,"center",j.center),ht.setValue(U,"modelViewMatrix",j.modelViewMatrix),ht.setValue(U,"normalMatrix",j.normalMatrix),ht.setValue(U,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const pt=W.uniformsGroups;for(let Ki=0,as=pt.length;Ki<as;Ki++){const Hh=pt[Ki];J.update(Hh,Ln),J.bind(Hh,Ln)}}return Ln}function J_(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function ex(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,z,Y){const W=T.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),T.get(E.texture).__webglTexture=z,T.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const Y=T.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const tx=U.createFramebuffer();this.setRenderTarget=function(E,z=0,Y=0){F=E,$=z,te=Y;let W=null,j=!1,Ce=!1;if(E){const be=T.get(E);if(be.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),L.copy(E.viewport),O.copy(E.scissor),B=E.scissorTest,Me.viewport(L),Me.scissor(O),Me.setScissorTest(B),X=-1;return}else if(be.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(be.__hasExternalTextures)S.rebindTextures(E,T.get(E.texture).__webglTexture,T.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const je=E.depthTexture;if(be.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const ze=T.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?W=ze[z][Y]:W=ze[z],j=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?W=T.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[Y]:W=ze,L.copy(E.viewport),O.copy(E.scissor),B=E.scissorTest}else L.copy(fe).multiplyScalar(Se).floor(),O.copy(V).multiplyScalar(Se).floor(),B=K;if(Y!==0&&(W=tx),Me.bindFramebuffer(U.FRAMEBUFFER,W)&&Me.drawBuffers(E,W),Me.viewport(L),Me.scissor(O),Me.setScissorTest(B),j){const be=T.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,Y)}else if(Ce){const be=z;for(let Oe=0;Oe<E.textures.length;Oe++){const ze=T.get(E.textures[Oe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,Y,be)}}else if(E!==null&&Y!==0){const be=T.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,Y)}X=-1},this.readRenderTargetPixels=function(E,z,Y,W,j,Ce,Ne,be=0){if(!(E&&E.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){Me.bindFramebuffer(U.FRAMEBUFFER,Oe);try{const ze=E.textures[be],je=ze.format,Ye=ze.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),!rt.textureFormatReadable(je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ye)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-W&&Y>=0&&Y<=E.height-j&&U.readPixels(z,Y,W,j,D.convert(je),D.convert(Ye),Ce)}finally{const ze=F!==null?T.get(F).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,W,j,Ce,Ne,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=T.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(z>=0&&z<=E.width-W&&Y>=0&&Y<=E.height-j){Me.bindFramebuffer(U.FRAMEBUFFER,Oe);const ze=E.textures[be],je=ze.format,Ye=ze.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),!rt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.bufferData(U.PIXEL_PACK_BUFFER,Ce.byteLength,U.STREAM_READ),U.readPixels(z,Y,W,j,D.convert(je),D.convert(Ye),0);const dt=F!==null?T.get(F).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,dt);const Pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jS(U,Pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ce),U.deleteBuffer(Be),U.deleteSync(Pt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Y=0){const W=Math.pow(2,-Y),j=Math.floor(E.image.width*W),Ce=Math.floor(E.image.height*W),Ne=z!==null?z.x:0,be=z!==null?z.y:0;S.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ne,be,j,Ce),Me.unbindTexture()};const nx=U.createFramebuffer(),ix=U.createFramebuffer();this.copyTextureToTexture=function(E,z,Y=null,W=null,j=0,Ce=0){let Ne,be,Oe,ze,je,Ye,Be,dt,Pt;const Et=E.isCompressedTexture?E.mipmaps[Ce]:E.image;if(Y!==null)Ne=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,ze=Y.min.x,je=Y.min.y,Ye=Y.isBox3?Y.min.z:0;else{const Nt=Math.pow(2,-j);Ne=Math.floor(Et.width*Nt),be=Math.floor(Et.height*Nt),E.isDataArrayTexture?Oe=Et.depth:E.isData3DTexture?Oe=Math.floor(Et.depth*Nt):Oe=1,ze=0,je=0,Ye=0}W!==null?(Be=W.x,dt=W.y,Pt=W.z):(Be=0,dt=0,Pt=0);const ft=D.convert(z.format),Kt=D.convert(z.type);let Pe;z.isData3DTexture?(S.setTexture3D(z,0),Pe=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(S.setTexture2DArray(z,0),Pe=U.TEXTURE_2D_ARRAY):(S.setTexture2D(z,0),Pe=U.TEXTURE_2D),Me.activeTexture(U.TEXTURE0),Me.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),Me.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Me.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const En=Me.getParameter(U.UNPACK_ROW_LENGTH),tt=Me.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=Me.getParameter(U.UNPACK_SKIP_PIXELS),ai=Me.getParameter(U.UNPACK_SKIP_ROWS),Yi=Me.getParameter(U.UNPACK_SKIP_IMAGES);Me.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),Me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),Me.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),Me.pixelStorei(U.UNPACK_SKIP_ROWS,je),Me.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const os=E.isDataArrayTexture||E.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Nt=T.get(E),$i=T.get(z),pt=T.get(Nt.__renderTarget),Ki=T.get($i.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let as=0;as<Oe;as++)os&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(E).__webglTexture,j,Ye+as),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(z).__webglTexture,Ce,Pt+as)),U.blitFramebuffer(ze,je,Ne,be,Be,dt,Ne,be,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||T.has(E)){const Nt=T.get(E),$i=T.get(z);Me.bindFramebuffer(U.READ_FRAMEBUFFER,nx),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,ix);for(let pt=0;pt<Oe;pt++)os?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.__webglTexture,j,Ye+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nt.__webglTexture,j),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$i.__webglTexture,Ce,Pt+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$i.__webglTexture,Ce),j!==0?U.blitFramebuffer(ze,je,Ne,be,Be,dt,Ne,be,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Pe,Ce,Be,dt,Pt+pt,ze,je,Ne,be):U.copyTexSubImage2D(Pe,Ce,Be,dt,ze,je,Ne,be);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Pe,Ce,Be,dt,Pt,Ne,be,Oe,ft,Kt,Et.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,Ce,Be,dt,Pt,Ne,be,Oe,ft,Et.data):U.texSubImage3D(Pe,Ce,Be,dt,Pt,Ne,be,Oe,ft,Kt,Et):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ce,Be,dt,Ne,be,ft,Kt,Et.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ce,Be,dt,Et.width,Et.height,ft,Et.data):U.texSubImage2D(U.TEXTURE_2D,Ce,Be,dt,Ne,be,ft,Kt,Et);Me.pixelStorei(U.UNPACK_ROW_LENGTH,En),Me.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),Me.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),Me.pixelStorei(U.UNPACK_SKIP_ROWS,ai),Me.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),Ce===0&&z.generateMipmaps&&U.generateMipmap(Pe),Me.unbindTexture()},this.initRenderTarget=function(E){T.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){$=0,te=0,F=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const TA=4;function AA({stars:t,dsos:e,constellations:n,bodies:i,layers:r,look:s,onLook:o,onPick:a,selected:l,quizTarget:c,hiddenLabel:f,constellationLabel:h,bodyLabel:u}){const m=De.useRef(null),v=De.useRef({width:1,height:1}),[M,g]=De.useState([]),d=De.useRef(s);d.current=s;const p=De.useRef(r);p.current=r;const _=De.useRef(l);_.current=l;const y=De.useRef(c);y.current=c;const b=De.useRef(f);b.current=f;const w=De.useRef(i);w.current=i;const A=De.useRef(new At),x=De.useMemo(()=>{const I=[];return i.forEach((L,O)=>I.push({ra:L.ra,dec:L.dec,rank:-30+O,kind:"body",index:O})),t.forEach((L,O)=>I.push({ra:L.ra,dec:L.dec,rank:L.mag,kind:"star",index:O})),e.forEach((L,O)=>I.push({ra:L.ra,dec:L.dec,rank:L.mag??20,kind:"dso",index:O})),I},[t,e,i]),C=De.useRef(x);C.current=x;const N=De.useRef(a);N.current=a;const R=De.useRef(o);R.current=o,De.useEffect(()=>{const I=m.current;if(!I)return;const L=new wA({antialias:!0,alpha:!1});L.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),L.setClearColor(329485,1),I.appendChild(L.domElement),L.domElement.style.display="block",L.domElement.style.width="100%",L.domElement.style.height="100%";const O=new lM,B=new On(s.fov,1,.1,Ci*4);B.position.set(0,0,0);const se=[],ce=le=>(se.push(le),le),ne=ce(new jt);{const le=new Float32Array(t.length*3),oe=new Float32Array(t.length*3),Z=new Float32Array(t.length);t.forEach((ye,Fe)=>{const Ge=Yn(ye.ra,ye.dec);le[Fe*3]=Ge.x,le[Fe*3+1]=Ge.y,le[Fe*3+2]=Ge.z;const D=W3(ye.ci)??[1,1,1];oe[Fe*3]=D[0],oe[Fe*3+1]=D[1],oe[Fe*3+2]=D[2],Z[Fe]=H3(ye.mag,6.5)}),ne.setAttribute("position",new Ht(le,3)),ne.setAttribute("color",new Ht(oe,3)),ne.setAttribute("size",new Ht(Z,1)),ne.setAttribute("mag",new Ht(Float32Array.from(t.map(ye=>ye.mag)),1))}const me=ce(new si({transparent:!0,depthWrite:!1,blending:Tf,uniforms:{uScale:{value:1},uMagLimit:{value:r.magLimit}},vertexShader:`
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
      `,vertexColors:!0})),Se=new sd(ne,me);Se.frustumCulled=!1,O.add(Se);const q=ce(new jt);{const le=[];for(const oe of n)for(const Z of oe.lines)for(let ye=0;ye+1<Z.length;ye++){const Fe=Yn(Z[ye][0],Z[ye][1],Ci*.995),Ge=Yn(Z[ye+1][0],Z[ye+1][1],Ci*.995);le.push(Fe.x,Fe.y,Fe.z,Ge.x,Ge.y,Ge.z)}q.setAttribute("position",new Ht(Float32Array.from(le),3))}const he=ce(new m0({color:4157342,transparent:!0,opacity:.55})),fe=new Hm(q,he);fe.frustumCulled=!1,O.add(fe);const V=ce(new jt);{const le=[],oe=(Z,ye,Fe,Ge)=>{const D=Yn(Z,ye,Ci*.99),ue=Yn(Fe,Ge,Ci*.99);le.push(D.x,D.y,D.z,ue.x,ue.y,ue.z)};for(let Z=0;Z<24;Z+=2)for(let ye=-90;ye<90;ye+=5)oe(Z*15,ye,Z*15,ye+5);for(let Z=-60;Z<=60;Z+=30)for(let ye=0;ye<360;ye+=5)oe(ye,Z,ye+5,Z);for(let Z=0;Z<360;Z+=5)oe(Z,0,Z+5,0);V.setAttribute("position",new Ht(Float32Array.from(le),3))}const K=ce(new m0({color:2375772,transparent:!0,opacity:.4})),_e=new Hm(V,K);_e.frustumCulled=!1,O.add(_e);const Ue=ce(new jt);{const le=new Float32Array(e.length*3);e.forEach((oe,Z)=>{const ye=Yn(oe.ra,oe.dec,Ci*.99);le[Z*3]=ye.x,le[Z*3+1]=ye.y,le[Z*3+2]=ye.z}),Ue.setAttribute("position",new Ht(le,3))}const we=ce(new g0({color:9426624,size:5,sizeAttenuation:!1,transparent:!0,opacity:.75})),Ie=new sd(Ue,we);Ie.frustumCulled=!1,O.add(Ie);const Ve=ce(new jt),ke=16,et=new Float32Array(ke*3);Ve.setAttribute("position",new Ht(et,3)),Ve.setDrawRange(0,0);const Ze=ce(new g0({color:16766874,size:11,sizeAttenuation:!1,transparent:!0,opacity:.95})),bt=new sd(Ve,Ze);bt.frustumCulled=!1,O.add(bt);const U=ce(new Rh(1.6,1.9,48)),Ct=ce(new Sc({color:16764779,side:Qn,transparent:!0})),$e=ce(new Sc({color:16743787,side:Qn,transparent:!0})),rt=new ri(U,Ct),Me=new ri(U,$e);rt.visible=!1,Me.visible=!1,O.add(rt,Me);const gt=(le,oe)=>{if(!oe){le.visible=!1;return}const Z=Yn(oe.ra,oe.dec,Ci*.96);le.position.set(Z.x,Z.y,Z.z),le.lookAt(0,0,0);const ye=d.current.fov/60*1.6;le.scale.setScalar(ye),le.visible=!0};let T=0;const S=()=>{T=requestAnimationFrame(S);const{width:le,height:oe}=v.current,Z=d.current,ye=p.current;B.fov=qv(Z.fov),B.aspect=le/Math.max(1,oe),B.updateProjectionMatrix();const Fe=Yn(Z.ra,Z.dec);B.lookAt(Fe.x,Fe.y,Fe.z),B.updateMatrixWorld(),A.current.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),me.uniforms.uScale.value=Math.min(3.2,Math.max(.55,26/Z.fov)),me.uniforms.uMagLimit.value=ye.magLimit;const Ge=w.current,D=Math.min(ke,Ge.length);for(let ue=0;ue<D;ue++){const J=Yn(Ge[ue].ra,Ge[ue].dec,Ci*.98);et[ue*3]=J.x,et[ue*3+1]=J.y,et[ue*3+2]=J.z}Ve.setDrawRange(0,D),Ve.attributes.position.needsUpdate=!0,fe.visible=ye.figures,_e.visible=ye.grid,Ie.visible=ye.deepSky,bt.visible=ye.planets&&D>0,gt(rt,_.current),gt(Me,y.current),L.render(O,B),ee()},G={star:26,constellation:24,dso:14},ie=5.6,de=13,ve=le=>{const oe=le.text.length*ie+10,Z=le.kind==="constellation"?le.x-oe/2:le.x+6;return{left:Z,right:Z+oe,top:le.y-de/2,bottom:le.y+de/2}};let xe="";const ee=()=>{const{width:le,height:oe}=v.current,Z=p.current,ye=A.current.elements,Fe=[],Ge=(ae,Q)=>{const Ee=Wv(ye,Yn(ae,Q));return Ee.visible?{x:(Ee.x+1)/2*le,y:(1-Ee.y)/2*oe}:null},D=[],ue=ae=>{const Q=ve(ae);for(const Ee of D)if(Q.left<Ee.right&&Q.right>Ee.left&&Q.top<Ee.bottom&&Q.bottom>Ee.top)return!1;return D.push(Q),Fe.push(ae),!0};if(Z.planets)for(const ae of w.current){const Q=Ge(ae.ra,ae.dec);Q&&ue({key:`b${ae.body}`,text:u(ae.body),...Q,kind:"body"})}if(Z.constellationNames){let ae=0;for(const Q of n){if(ae>=G.constellation)break;if(!Q.label)continue;const Ee=Ge(Q.label[0],Q.label[1]);Ee&&ue({key:`c${Q.id}`,text:h(Q),...Ee,kind:"constellation"})&&ae++}}const J=y.current;if(J!=null&&J.label){const ae=Ge(J.ra,J.dec);ae&&ue({key:"quiz",text:J.label,...ae,kind:"body"})}if(Z.starNames){let ae=0;for(const Q of t){if(ae>=G.star)break;if(!Q.proper||Q.mag>Math.min(Z.magLimit,3.6)||b.current&&ya(Q)===b.current)continue;const Ee=Ge(Q.ra,Q.dec);Ee&&ue({key:`s${Q.i}`,text:Q.proper,...Ee,kind:"star"})&&ae++}}if(Z.deepSky){let ae=0;for(const Q of e){if(ae>=G.dso)break;if(!Q.messier&&!Q.common||b.current&&Sa(Q)===b.current)continue;const Ee=Ge(Q.ra,Q.dec);Ee&&ue({key:`d${Q.i}`,text:Q.messier?`M${Q.messier}`:Q.common,...Ee,kind:"dso"})&&ae++}}const Re=Fe.map(ae=>`${ae.key}:${ae.x|0}:${ae.y|0}`).join("|");Re!==xe&&(xe=Re,g(Fe))},re=()=>{const le=I.getBoundingClientRect(),oe=Math.max(1,Math.round(le.width)),Z=Math.max(1,Math.round(le.height));v.current={width:oe,height:Z},L.setSize(oe,Z,!1)};re();const Te=new ResizeObserver(re);return Te.observe(I),T=requestAnimationFrame(S),()=>{cancelAnimationFrame(T),Te.disconnect();for(const le of se)le.dispose();L.dispose(),L.forceContextLoss(),I.removeChild(L.domElement)}},[t,e,n]);const k=De.useRef(null),$=I=>{var L,O;(O=(L=I.target).setPointerCapture)==null||O.call(L,I.pointerId),k.current={x:I.clientX,y:I.clientY,moved:0,id:I.pointerId}},te=I=>{const L=k.current;if(!L)return;const O=I.clientX-L.x,B=I.clientY-L.y;L.moved+=Math.abs(O)+Math.abs(B),L.x=I.clientX,L.y=I.clientY,R.current(j3(d.current,O,B,v.current.height))},F=I=>{const L=k.current;if(k.current=null,!L||L.moved>TA)return;const O=I.currentTarget.getBoundingClientRect(),B={x:(I.clientX-O.left)/O.width*2-1,y:-((I.clientY-O.top)/O.height*2-1)},se=p.current,ce=C.current.filter(Se=>Se.kind==="body"?se.planets:Se.kind==="dso"?se.deepSky:t[Se.index].mag<=se.magLimit),ne=X3(ce,A.current.elements,B,v.current),me=ne?ce[ne.index]:null;N.current(me?{kind:me.kind,index:me.index}:null)},X=I=>{R.current(q3(d.current,I.deltaY>0?1:-1))};return P.jsxs("div",{className:"sky-canvas",children:[P.jsx("div",{ref:m,className:"sky-gl",onPointerDown:$,onPointerMove:te,onPointerUp:F,onPointerCancel:()=>{k.current=null},onWheel:X}),P.jsx("div",{className:"sky-labels","aria-hidden":"false",children:M.map(I=>P.jsx("span",{className:`sky-label sky-label-${I.kind}`,style:{left:`${I.x}px`,top:`${I.y}px`},children:I.text},I.key))})]})}const bA=["en","fr","es","de","pt","ru","zh"],q_={"app.eyebrow":"THE SKY, OFFLINE","app.loading":"Reading the catalogue…","app.failed":"The catalogue could not be read: {why}","app.retry":"Try again","app.objects":"{stars} stars · {dsos} deep-sky objects","app.search":"Search a name, HIP, NGC or M number","app.noResults":"Nothing in the catalogue matches that.","app.close":"Close","trunc.title":"What this catalogue holds","trunc.stars":"Stars down to magnitude {limit} — the naked-eye sky. {kept} of them; {omitted} fainter stars in the source are not shipped.","trunc.noDistance":"{n} of those stars have no measured distance. Their cards show a dash, never a number.","trunc.dsos":"{kept} clusters, nebulae and galaxies from OpenNGC, including all {messier} Messier objects it lists. {omitted} rows were left out: duplicates, entries for objects that turned out not to exist, and faint objects with no name.","trunc.sphere":"Everything is drawn on the celestial sphere — directions, not distances. Nothing here is a scale model of space.","card.magnitude":"Apparent magnitude","card.magnitude.hint":"How bright it looks from here. Smaller is brighter.","card.absmag":"Absolute magnitude","card.absmag.hint":"How bright it would look from 10 parsecs. A different quantity.","card.distance":"Distance","card.spectral":"Spectral type","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (of date)","card.size":"Apparent size","card.type":"Type","card.alsoKnown":"Also","card.unstableId":"This star has no Hipparcos, Henry Draper or Gliese number. The key above is local to this build of the catalogue and will not survive a catalogue update.","card.noDistance":"Hipparcos measured no usable parallax for this star, so its distance is not known.","card.altitude":"Altitude","card.azimuth":"Azimuth","card.rises":"Rises","card.sets":"Sets","card.neverRises":"Does not rise in the next 24 hours","card.neverSets":"Does not set in the next 24 hours","card.noPlace":"Set where you are to see altitude, rise and set.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% lit","card.centre":"Centre on it","sky.figures":"Constellation figures","sky.names":"Constellation names","sky.deepSky":"Deep sky","sky.planets":"Sun, Moon and planets","sky.starNames":"Star names","sky.grid":"Coordinate grid","sky.magFilter":"Faintest star shown","sky.reset":"Reset the view","sky.fov":"Field of view","time.title":"Instant shown","time.now":"Now","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hour","time.plus1h":"+1 hour","time.minus1d":"−1 day","time.plus1d":"+1 day","place.title":"Where you are","place.none":"Not set","place.hint":"Typed in by you. This cartridge never looks your location up — it has no network access and would not ask for one without saying so.","place.label":"Name","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Elevation (m)","place.save":"Use this place","place.clear":"Forget it","place.bad.latitude":"Latitude has to be a number between −90 and 90.","place.bad.longitude":"Longitude has to be a number between −180 and 180.","place.bad.elevation":"Elevation has to be a number of metres between −500 and 9000.","memory.title":"Your memory","memory.ask":"Ask what my notes say","memory.askAgain":"Ask again","memory.tryAgain":"Try again","memory.reading":"Reading your memory…","memory.note":"One question, one answer. Nothing is asked until you press this — a memory query is a model call, and browsing the sky should not bill anyone.","memory.nothing":"Your memory holds nothing about {name} yet. That is not an error: nothing has been written about it.","memory.outside":"This window is open outside Mnemosyne, so there is no memory to ask. Open the cartridge from the app.","memory.failed":"Your memory did not answer: {why}","review.title":"Review","review.open":"Review what you know","review.close":"Close review","review.back":"Back to families","review.pick":"Pick what to be asked about.","review.studied":"Studied","review.due":"Due","review.mastered":"Mastered","review.best":"Best streak","review.howMany":"How many questions?","review.endless":"Endless","review.scope":"{n} objects in {level}. Missed ones come back tomorrow; the rest move to a longer interval.","review.question":"Which object is marked?","review.answerIs":"It is","review.next":"Next","review.finishHere":"Finish here","review.again":"Again","review.another":"Another family","review.comeBack":"Come back to these","review.andMore":"and {n} more","review.accuracy":"Accuracy","review.time":"Time","review.record":"That is your longest streak yet.","review.save":"Save this run to memory","review.saving":"Writing…","review.saved":"Written to {vault}.","review.savedLocked":"Written to {vault}. It is locked, so it will be indexed when you unlock it.","review.empty":"Nothing to ask about here.","review.tooSmall":"Only {n} objects — too few for four honest options.","review.noHost":"Open the cartridge from Mnemosyne to keep your progress.","review.noLoad":"Your progress could not be read, so this run is not being kept.","review.unsaved":"Answers in this run are not being saved. {why}","review.why.noHost":"This window is open outside Mnemosyne, so there is no memory to write to.","review.why.noPermission":"This cartridge has not been allowed to write to your memory.","review.why.declined":"Writing to memory was declined.","review.tight":"Your saved progress is {pct}% of the space this cartridge is allowed. Past 100% it stops being kept.","review.unknown":"—","family.all":"Everything","family.messier":"Messier objects","family.namedStars":"Named stars","family.brightStars":"Bright stars","family.galaxies":"Galaxies","family.clusters":"Clusters","family.nebulae":"Nebulae","rank.perfect":"Perfect","rank.excellent":"Excellent","rank.solid":"Solid","rank.getting":"Getting there","rank.again":"Worth another pass","moon.new":"New","moon.waxingCrescent":"Waxing crescent","moon.firstQuarter":"First quarter","moon.waxingGibbous":"Waxing gibbous","moon.full":"Full","moon.waningGibbous":"Waning gibbous","moon.lastQuarter":"Last quarter","moon.waningCrescent":"Waning crescent","body.Sun":"Sun","body.Moon":"Moon","body.Mercury":"Mercury","body.Venus":"Venus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturn","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluto","type.G":"Galaxy","type.GPair":"Galaxy pair","type.GTrpl":"Galaxy triplet","type.GGroup":"Group of galaxies","type.PN":"Planetary nebula","type.OCl":"Open cluster","type.GCl":"Globular cluster","type.Cl+N":"Cluster with nebula","type.HII":"H II region","type.DrkN":"Dark nebula","type.EmN":"Emission nebula","type.Neb":"Nebula","type.RfN":"Reflection nebula","type.SNR":"Supernova remnant","type.Star":"Star","type.**":"Double star","type.*Ass":"Association of stars","type.Other":"Other","credits.title":"Where this comes from","credits.open":"Sources & credits","credits.stars":"Stars: HYG database 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Deep sky: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Constellation figures and names: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sun, Moon and planets: astronomy-engine, Don Cross — MIT","credits.accuracy":"Planet positions were checked against JPL Horizons for 2026-09-09: all five bodies tested agreed within 11 arcseconds.","credits.derived":"The catalogue file this cartridge ships is a derived work of two CC BY-SA 4.0 databases, so that file is CC BY-SA 4.0 too. The code is MIT."},CA={"app.eyebrow":"LE CIEL, HORS LIGNE","app.loading":"Lecture du catalogue…","app.failed":"Le catalogue n’a pas pu être lu : {why}","app.retry":"Réessayer","app.objects":"{stars} étoiles · {dsos} objets du ciel profond","app.search":"Chercher un nom, un numéro HIP, NGC ou M","app.noResults":"Rien dans le catalogue ne correspond.","app.close":"Fermer","trunc.title":"Ce que contient ce catalogue","trunc.stars":"Les étoiles jusqu’à la magnitude {limit} — le ciel à l’œil nu. Il y en a {kept} ; {omitted} étoiles plus faibles de la source ne sont pas embarquées.","trunc.noDistance":"{n} de ces étoiles n’ont aucune distance mesurée. Leur fiche affiche un tiret, jamais un nombre.","trunc.dsos":"{kept} amas, nébuleuses et galaxies d’OpenNGC, dont les {messier} objets de Messier qu’il recense. {omitted} lignes ont été écartées : doublons, entrées pour des objets qui n’existent pas, et objets faibles sans nom.","trunc.sphere":"Tout est dessiné sur la sphère céleste — des directions, pas des distances. Rien ici n’est une maquette de l’espace à l’échelle.","card.magnitude":"Magnitude apparente","card.magnitude.hint":"Sa brillance vue d’ici. Plus le nombre est petit, plus c’est brillant.","card.absmag":"Magnitude absolue","card.absmag.hint":"Sa brillance vue de 10 parsecs. Ce n’est pas la même grandeur.","card.distance":"Distance","card.spectral":"Type spectral","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (de la date)","card.size":"Taille apparente","card.type":"Type","card.alsoKnown":"Aussi","card.unstableId":"Cette étoile n’a ni numéro Hipparcos, ni Henry Draper, ni Gliese. La clé ci-dessus est locale à cette version du catalogue et ne survivra pas à une mise à jour.","card.noDistance":"Hipparcos n’a mesuré aucune parallaxe exploitable pour cette étoile : sa distance n’est pas connue.","card.altitude":"Hauteur","card.azimuth":"Azimut","card.rises":"Lever","card.sets":"Coucher","card.neverRises":"Ne se lève pas dans les 24 prochaines heures","card.neverSets":"Ne se couche pas dans les 24 prochaines heures","card.noPlace":"Indiquez où vous êtes pour voir la hauteur, le lever et le coucher.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% éclairée","card.centre":"Centrer dessus","sky.figures":"Figures des constellations","sky.names":"Noms des constellations","sky.deepSky":"Ciel profond","sky.planets":"Soleil, Lune et planètes","sky.starNames":"Noms des étoiles","sky.grid":"Grille de coordonnées","sky.magFilter":"Étoile la plus faible affichée","sky.reset":"Réinitialiser la vue","sky.fov":"Champ de vision","time.title":"Instant affiché","time.now":"Maintenant","time.utc":"UTC","time.local":"Locale","time.minus1h":"−1 heure","time.plus1h":"+1 heure","time.minus1d":"−1 jour","time.plus1d":"+1 jour","place.title":"Où vous êtes","place.none":"Non renseigné","place.hint":"Saisi par vous. Cette cartouche ne cherche jamais votre position — elle n’a pas d’accès réseau et ne la demanderait pas sans le dire.","place.label":"Nom","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Altitude (m)","place.save":"Utiliser ce lieu","place.clear":"L’oublier","place.bad.latitude":"La latitude doit être un nombre entre −90 et 90.","place.bad.longitude":"La longitude doit être un nombre entre −180 et 180.","place.bad.elevation":"L’altitude doit être un nombre de mètres entre −500 et 9000.","memory.title":"Votre mémoire","memory.ask":"Demander ce que disent mes notes","memory.askAgain":"Redemander","memory.tryAgain":"Réessayer","memory.reading":"Lecture de votre mémoire…","memory.note":"Une question, une réponse. Rien n’est demandé tant que vous n’appuyez pas — interroger la mémoire est un appel au modèle, et parcourir le ciel ne doit rien coûter à personne.","memory.nothing":"Votre mémoire ne contient encore rien sur {name}. Ce n’est pas une erreur : rien n’a été écrit à ce sujet.","memory.outside":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire à interroger. Ouvrez la cartouche depuis l’application.","memory.failed":"Votre mémoire n’a pas répondu : {why}","review.title":"Révision","review.open":"Réviser ce que vous savez","review.close":"Fermer la révision","review.back":"Retour aux familles","review.pick":"Choisissez sur quoi être interrogé.","review.studied":"Vus","review.due":"À revoir","review.mastered":"Maîtrisés","review.best":"Meilleure série","review.howMany":"Combien de questions ?","review.endless":"Sans fin","review.scope":"{n} objets dans {level}. Les ratés reviennent demain ; les autres passent à un intervalle plus long.","review.question":"Quel objet est marqué ?","review.answerIs":"C’est","review.next":"Suivant","review.finishHere":"Arrêter ici","review.again":"Encore","review.another":"Une autre famille","review.comeBack":"Revenir sur ceux-là","review.andMore":"et {n} de plus","review.accuracy":"Réussite","review.time":"Durée","review.record":"C’est votre plus longue série.","review.save":"Enregistrer cette session en mémoire","review.saving":"Écriture…","review.saved":"Écrit dans {vault}.","review.savedLocked":"Écrit dans {vault}. Ce coffre est verrouillé : l’indexation se fera à son déverrouillage.","review.empty":"Rien à demander ici.","review.tooSmall":"Seulement {n} objets — trop peu pour quatre options honnêtes.","review.noHost":"Ouvrez la cartouche depuis Mnemosyne pour conserver votre progression.","review.noLoad":"Votre progression n’a pas pu être lue : cette session n’est pas conservée.","review.unsaved":"Les réponses de cette session ne sont pas enregistrées. {why}","review.why.noHost":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire où écrire.","review.why.noPermission":"Cette cartouche n’a pas l’autorisation d’écrire dans votre mémoire.","review.why.declined":"L’écriture en mémoire a été refusée.","review.tight":"Votre progression enregistrée occupe {pct}% de la place allouée à cette cartouche. Au-delà de 100%, elle cesse d’être conservée.","family.all":"Tout","family.messier":"Objets de Messier","family.namedStars":"Étoiles nommées","family.brightStars":"Étoiles brillantes","family.galaxies":"Galaxies","family.clusters":"Amas","family.nebulae":"Nébuleuses","rank.perfect":"Parfait","rank.excellent":"Excellent","rank.solid":"Solide","rank.getting":"Ça vient","rank.again":"À refaire","moon.new":"Nouvelle","moon.waxingCrescent":"Croissant croissant","moon.firstQuarter":"Premier quartier","moon.waxingGibbous":"Gibbeuse croissante","moon.full":"Pleine","moon.waningGibbous":"Gibbeuse décroissante","moon.lastQuarter":"Dernier quartier","moon.waningCrescent":"Croissant décroissant","body.Sun":"Soleil","body.Moon":"Lune","body.Mercury":"Mercure","body.Venus":"Vénus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturne","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluton","type.G":"Galaxie","type.GPair":"Paire de galaxies","type.GTrpl":"Triplet de galaxies","type.GGroup":"Groupe de galaxies","type.PN":"Nébuleuse planétaire","type.OCl":"Amas ouvert","type.GCl":"Amas globulaire","type.Cl+N":"Amas avec nébuleuse","type.HII":"Région H II","type.DrkN":"Nébuleuse obscure","type.EmN":"Nébuleuse en émission","type.Neb":"Nébuleuse","type.RfN":"Nébuleuse par réflexion","type.SNR":"Rémanent de supernova","type.Star":"Étoile","type.**":"Étoile double","type.*Ass":"Association d’étoiles","type.Other":"Autre","credits.title":"D’où vient tout ceci","credits.open":"Sources et crédits","credits.stars":"Étoiles : base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Ciel profond : OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figures et noms des constellations : d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Soleil, Lune et planètes : astronomy-engine, Don Cross — MIT","credits.accuracy":"Les positions des planètes ont été comparées à JPL Horizons pour le 2026-09-09 : les cinq corps testés concordent à moins de 11 secondes d’arc.","credits.derived":"Le fichier catalogue embarqué est une œuvre dérivée de deux bases CC BY-SA 4.0 : ce fichier est donc lui aussi en CC BY-SA 4.0. Le code est en MIT."},RA={"app.eyebrow":"EL CIELO, SIN CONEXIÓN","app.loading":"Leyendo el catálogo…","app.failed":"No se pudo leer el catálogo: {why}","app.retry":"Reintentar","app.objects":"{stars} estrellas · {dsos} objetos de cielo profundo","app.search":"Buscar un nombre o un número HIP, NGC o M","app.noResults":"Nada en el catálogo coincide.","app.close":"Cerrar","trunc.title":"Qué contiene este catálogo","trunc.stars":"Estrellas hasta magnitud {limit} — el cielo a simple vista. Hay {kept}; {omitted} estrellas más débiles de la fuente no se incluyen.","trunc.noDistance":"{n} de esas estrellas no tienen distancia medida. Su ficha muestra un guion, nunca un número.","trunc.dsos":"{kept} cúmulos, nebulosas y galaxias de OpenNGC, incluidos los {messier} objetos Messier que recoge. Se dejaron fuera {omitted} filas: duplicados, entradas de objetos que resultaron no existir, y objetos débiles sin nombre.","trunc.sphere":"Todo se dibuja sobre la esfera celeste — direcciones, no distancias. Nada aquí es una maqueta a escala del espacio.","card.magnitude":"Magnitud aparente","card.magnitude.hint":"Lo brillante que se ve desde aquí. Cuanto menor, más brillante.","card.absmag":"Magnitud absoluta","card.absmag.hint":"Lo brillante que se vería desde 10 parsecs. Es otra magnitud.","card.distance":"Distancia","card.spectral":"Tipo espectral","card.constellation":"Constelación","card.position":"Posición (J2000)","card.positionNow":"Posición (de la fecha)","card.size":"Tamaño aparente","card.type":"Tipo","card.alsoKnown":"También","card.unstableId":"Esta estrella no tiene número Hipparcos, Henry Draper ni Gliese. La clave de arriba es local a esta versión del catálogo y no sobrevivirá a una actualización.","card.noDistance":"Hipparcos no midió una paralaje utilizable para esta estrella, así que su distancia no se conoce.","card.altitude":"Altura","card.azimuth":"Azimut","card.rises":"Sale","card.sets":"Se pone","card.neverRises":"No sale en las próximas 24 horas","card.neverSets":"No se pone en las próximas 24 horas","card.noPlace":"Indica dónde estás para ver la altura, la salida y la puesta.","card.au":"Distancia","card.phase":"Fase","card.illuminated":"{pct}% iluminada","card.centre":"Centrar en él","sky.figures":"Figuras de las constelaciones","sky.names":"Nombres de las constelaciones","sky.deepSky":"Cielo profundo","sky.planets":"Sol, Luna y planetas","sky.starNames":"Nombres de estrellas","sky.grid":"Rejilla de coordenadas","sky.magFilter":"Estrella más débil mostrada","sky.reset":"Restablecer la vista","sky.fov":"Campo de visión","time.title":"Instante mostrado","time.now":"Ahora","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hora","time.plus1h":"+1 hora","time.minus1d":"−1 día","time.plus1d":"+1 día","place.title":"Dónde estás","place.none":"Sin indicar","place.hint":"Lo escribes tú. Esta cartucho nunca busca tu ubicación — no tiene acceso a la red y no la pediría sin decirlo.","place.label":"Nombre","place.latitude":"Latitud","place.longitude":"Longitud","place.elevation":"Altitud (m)","place.save":"Usar este lugar","place.clear":"Olvidarlo","place.bad.latitude":"La latitud tiene que ser un número entre −90 y 90.","place.bad.longitude":"La longitud tiene que ser un número entre −180 y 180.","place.bad.elevation":"La altitud tiene que ser un número de metros entre −500 y 9000.","memory.title":"Tu memoria","memory.ask":"Preguntar qué dicen mis notas","memory.askAgain":"Preguntar otra vez","memory.tryAgain":"Reintentar","memory.reading":"Leyendo tu memoria…","memory.note":"Una pregunta, una respuesta. No se pregunta nada hasta que pulsas — consultar la memoria es una llamada al modelo, y recorrer el cielo no debe costarle nada a nadie.","memory.nothing":"Tu memoria todavía no contiene nada sobre {name}. No es un error: no se ha escrito nada al respecto.","memory.outside":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria que consultar. Abre el cartucho desde la aplicación.","memory.failed":"Tu memoria no respondió: {why}","review.title":"Repaso","review.open":"Repasar lo que sabes","review.close":"Cerrar el repaso","review.back":"Volver a las familias","review.pick":"Elige sobre qué quieres que te pregunten.","review.studied":"Vistos","review.due":"Pendientes","review.mastered":"Dominados","review.best":"Mejor racha","review.howMany":"¿Cuántas preguntas?","review.endless":"Sin fin","review.scope":"{n} objetos en {level}. Los fallados vuelven mañana; el resto pasa a un intervalo más largo.","review.question":"¿Qué objeto está marcado?","review.answerIs":"Es","review.next":"Siguiente","review.finishHere":"Terminar aquí","review.again":"Otra vez","review.another":"Otra familia","review.comeBack":"Volver a estos","review.andMore":"y {n} más","review.accuracy":"Acierto","review.time":"Tiempo","review.record":"Es tu racha más larga.","review.save":"Guardar esta sesión en la memoria","review.saving":"Escribiendo…","review.saved":"Escrito en {vault}.","review.savedLocked":"Escrito en {vault}. Está bloqueado, así que se indexará cuando lo desbloquees.","review.empty":"No hay nada que preguntar aquí.","review.tooSmall":"Solo {n} objetos — muy pocos para cuatro opciones honestas.","review.noHost":"Abre el cartucho desde Mnemosyne para conservar tu progreso.","review.noLoad":"No se pudo leer tu progreso, así que esta sesión no se está guardando.","review.unsaved":"Las respuestas de esta sesión no se están guardando. {why}","review.why.noHost":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria donde escribir.","review.why.noPermission":"Este cartucho no tiene permiso para escribir en tu memoria.","review.why.declined":"Se rechazó la escritura en la memoria.","review.tight":"Tu progreso guardado ocupa el {pct}% del espacio asignado a este cartucho. Por encima del 100% deja de conservarse.","family.all":"Todo","family.messier":"Objetos Messier","family.namedStars":"Estrellas con nombre","family.brightStars":"Estrellas brillantes","family.galaxies":"Galaxias","family.clusters":"Cúmulos","family.nebulae":"Nebulosas","rank.perfect":"Perfecto","rank.excellent":"Excelente","rank.solid":"Sólido","rank.getting":"Vas bien","rank.again":"Merece otra vuelta","moon.new":"Nueva","moon.waxingCrescent":"Creciente","moon.firstQuarter":"Cuarto creciente","moon.waxingGibbous":"Gibosa creciente","moon.full":"Llena","moon.waningGibbous":"Gibosa menguante","moon.lastQuarter":"Cuarto menguante","moon.waningCrescent":"Menguante","body.Sun":"Sol","body.Moon":"Luna","body.Mercury":"Mercurio","body.Venus":"Venus","body.Mars":"Marte","body.Jupiter":"Júpiter","body.Saturn":"Saturno","body.Uranus":"Urano","body.Neptune":"Neptuno","body.Pluto":"Plutón","type.G":"Galaxia","type.GPair":"Par de galaxias","type.GTrpl":"Triplete de galaxias","type.GGroup":"Grupo de galaxias","type.PN":"Nebulosa planetaria","type.OCl":"Cúmulo abierto","type.GCl":"Cúmulo globular","type.Cl+N":"Cúmulo con nebulosa","type.HII":"Región H II","type.DrkN":"Nebulosa oscura","type.EmN":"Nebulosa de emisión","type.Neb":"Nebulosa","type.RfN":"Nebulosa de reflexión","type.SNR":"Remanente de supernova","type.Star":"Estrella","type.**":"Estrella doble","type.*Ass":"Asociación de estrellas","type.Other":"Otro","credits.title":"De dónde viene todo esto","credits.open":"Fuentes y créditos","credits.stars":"Estrellas: base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Cielo profundo: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figuras y nombres de constelaciones: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sol, Luna y planetas: astronomy-engine, Don Cross — MIT","credits.accuracy":"Las posiciones de los planetas se compararon con JPL Horizons para 2026-09-09: los cinco cuerpos probados coinciden dentro de 11 segundos de arco.","credits.derived":"El archivo de catálogo que se incluye es obra derivada de dos bases CC BY-SA 4.0, así que ese archivo también es CC BY-SA 4.0. El código es MIT."},PA={en:q_,fr:CA,es:RA,de:{},pt:{},ru:{},zh:{}};function Y_(t){return typeof t=="string"&&bA.includes(t)}function NA(t,e,n){var r;const i=((r=PA[t])==null?void 0:r[e])??q_[e];return n?i.replace(/\{(\w+)\}/g,(s,o)=>o in n?String(n[o]):s):i}function LA(){var t;try{const e=new URLSearchParams(window.location.search).get("lang"),n=(t=e==null?void 0:e.split("-")[0])==null?void 0:t.toLowerCase();if(Y_(n))return n}catch{}return"en"}function $c(){const[t,e]=De.useState(LA);return De.useEffect(()=>Bv(n=>{var r,s;const i=(s=(r=n.lang)==null?void 0:r.split("-")[0])==null?void 0:s.toLowerCase();Y_(i)&&e(i)},{apply:!1}),[]),{lang:t,t:(n,i)=>NA(t,n,i)}}const DA=new Gv("@mnemosyne-plugins/mnemo-cosmos"),IA="No Mnemosyne host";function UA({object:t}){const{t:e}=$c(),[n,i]=De.useState({kind:"idle"}),r=De.useRef(null);if(De.useEffect(()=>{i({kind:"idle"}),r.current=null},[t==null?void 0:t.id]),De.useEffect(()=>()=>{r.current=null},[]),!t)return null;const s=async()=>{const o=t.id;r.current=o,i({kind:"asking"});try{const a=await DA.query(V3(t));if(r.current!==o)return;const l=((a==null?void 0:a.text)??(a==null?void 0:a.response)??(a==null?void 0:a.content)??(a==null?void 0:a.answer)??"").trim();if((a==null?void 0:a.success)===!1){i({kind:"failed",message:a.error||"Memory did not answer."});return}if(!l||/NOTHING IN MEMORY/i.test(l)){i({kind:"empty"});return}i({kind:"answered",text:l})}catch(a){if(r.current!==o)return;const l=a instanceof Error?a.message:String(a);console.warn("[cosmos] memory query failed:",l),i(l.includes(IA)?{kind:"no-host"}:{kind:"failed",message:l})}};return P.jsxs("div",{className:"memory-panel",children:[P.jsx("h3",{children:e("memory.title")}),n.kind==="idle"&&P.jsxs(P.Fragment,{children:[P.jsx("button",{type:"button",className:"btn btn-accent",onClick:s,children:e("memory.ask")}),P.jsx("p",{className:"note",children:e("memory.note")})]}),n.kind==="asking"&&P.jsx("p",{className:"note busy",role:"status",children:e("memory.reading")}),n.kind==="answered"&&P.jsxs(P.Fragment,{children:[P.jsx("p",{className:"memory-answer",children:n.text}),P.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="empty"&&P.jsxs(P.Fragment,{children:[P.jsx("p",{className:"note",children:e("memory.nothing",{name:t.name})}),P.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="no-host"&&P.jsx("p",{className:"note",children:e("memory.outside")}),n.kind==="failed"&&P.jsxs(P.Fragment,{children:[P.jsx("p",{className:"note error",role:"alert",children:e("memory.failed",{why:n.message})}),P.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.tryAgain")})]})]})}const $_=[0,1,3,7,16,35],Kc=$_.length-1;function Zc(t){return Math.floor(t/864e5)}const wc=()=>({v:1,cards:{}});function FA(t){if(!t||typeof t!="object")return wc();const e=t;if(e.v!==1||!e.cards||typeof e.cards!="object")return wc();const n={};for(const[r,s]of Object.entries(e.cards)){const o=s;typeof(o==null?void 0:o.b)!="number"||typeof(o==null?void 0:o.d)!="number"||typeof(o==null?void 0:o.n)!="number"||!Number.isFinite(o.b)||!Number.isFinite(o.d)||!Number.isFinite(o.n)||(n[r]={b:Math.min(Kc,Math.max(0,Math.round(o.b))),d:Math.round(o.d),n:Math.round(o.n)})}const i=typeof e.best=="number"&&Number.isFinite(e.best)&&e.best>=0?Math.round(e.best):void 0;return i===void 0?{v:1,cards:n}:{v:1,cards:n,best:i}}function OA(t,e,n){const i=((t==null?void 0:t.n)??0)+1,r=e?Math.min(Kc,Math.max(1,((t==null?void 0:t.b)??0)+1)):0;return{b:r,d:Zc(n)+$_[r],n:i}}function kA(t,e){const n=Zc(e),i=Object.values(t.cards);return{seen:i.length,due:i.filter(r=>r.d<=n).length,mastered:i.filter(r=>r.b>=Kc).length}}function zA(t){let e=t>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function yg(t,e,n){const i=t.slice(),r=[];for(;r.length<e&&i.length;)r.push(i.splice(Math.floor(n()*i.length),1)[0]);return r}function BA(t,e,n,i,r=4,s=new Set){if(t.length<2)return null;const o=Zc(n),a=zA(i),l=t.filter(y=>!s.has(y.id)),c=l.length?l:t,f=c.filter(y=>{const b=e.cards[y.id];return b&&b.d<=o}),h=c.filter(y=>!e.cards[y.id]),u=c.filter(y=>e.cards[y.id]&&e.cards[y.id].d>o).sort((y,b)=>e.cards[y.id].d-e.cards[b.id].d),m=f.length?f:h.length?h:u,v=m[Math.floor(a()*m.length)],M=t.filter(y=>y.id!==v.id&&y.group===v.group),g=t.filter(y=>y.id!==v.id&&y.group!==v.group),d=Math.min(r-1,t.length-1),p=yg(M,d,a);p.length<d&&p.push(...yg(g,d-p.length,a));const _=[v,...p];for(let y=_.length-1;y>0;y--){const b=Math.floor(a()*(y+1));[_[y],_[b]]=[_[b],_[y]]}return{subject:v,options:_}}const Sg=256*1024,GA=.8;function VA(t){const e=new TextEncoder().encode(JSON.stringify(t)).length;return{bytes:e,ratio:e/Sg,tight:e>=Sg*GA}}const fd=12;function Mg(t){const e=t.slice(0,fd).map(n=>`- ${n.name} (${n.group}, ${n.id})${n.n>1?` — asked ${n.n} times`:""}`);return t.length>fd&&e.push(`- and ${t.length-fd} more`),e.join(`
`)}function HA(t,e){if(!t.length)return null;const n=t.filter(o=>o.correct),i=t.filter(o=>!o.correct),s=[`Sky review session — ${new Date(e.now).toISOString().slice(0,10)}`,"",`Reviewed ${t.length} object${t.length===1?"":"s"} from ${e.family} (${e.source}). ${n.length} recalled, ${i.length} missed.`];return i.length&&s.push("","Missed:",Mg(i)),n.length&&s.push("","Recalled:",Mg(n)),s.push("","Missed objects are scheduled to come back tomorrow; recalled ones move to a longer interval. Objects are identified by their catalogue designation — Hipparcos, Henry Draper, NGC or IC — which is stable across languages, spellings and sources."),s.join(`
`)}const WA="SKY_STUDY",XA=4,jA=new Set(["G","GPair","GTrpl","GGroup"]),qA=new Set(["OCl","GCl","Cl+N"]),YA=new Set(["PN","HII","DrkN","EmN","Neb","RfN","SNR"]),$A=2.5;function Ph(t,e){const n=o=>{const a=of(o);return{id:ya(o),name:a.name,group:o.con||"sky"}},i=o=>{const a=af(o);return{id:Sa(o),name:a.name,group:o.type||"sky"}},r=t.stars.filter(o=>o.proper),s=t.stars.filter(o=>o.mag<=$A&&(o.proper||o.desig));switch(e){case"messier":return t.dsos.filter(o=>o.messier).map(i);case"namedStars":return r.map(n);case"brightStars":return s.map(n);case"galaxies":return t.dsos.filter(o=>jA.has(o.type)&&(o.common||o.messier)).map(i);case"clusters":return t.dsos.filter(o=>qA.has(o.type)&&(o.common||o.messier)).map(i);case"nebulae":return t.dsos.filter(o=>YA.has(o.type)&&(o.common||o.messier)).map(i);case"all":default:{const o=new Set,a=[];for(const l of[...r.map(n),...t.dsos.filter(c=>c.common||c.messier).map(i)])o.has(l.id)||(o.add(l.id),a.push(l));return a}}}const KA=["all","messier","namedStars","brightStars","galaxies","clusters","nebulae"];function ZA(t){const e=KA.map(r=>({id:r,total:Ph(t,r).length})),n=e.find(r=>r.id==="all"),i=e.filter(r=>r.id!=="all"&&r.total>0).sort((r,s)=>s.total-r.total);return[n,...i]}function QA(t,e,n,i){const r=Zc(i),s=Ph(e,t.id).map(c=>c.id);let o=0,a=0,l=0;for(const c of s){const f=n.cards[c];f&&(o++,f.b>=Kc&&a++,f.d<=r&&l++)}return{studied:o,mastered:a,due:l,ratio:s.length?a/s.length:0}}function Eg(t){return t.total>=XA?{ok:!0,n:t.total}:{ok:!1,why:t.total===0?"empty":"tooSmall",n:t.total}}const JA=[5,10,50,null];function eb(t){return t===null?null:String(t)}const tb=(t,e)=>({length:t,answers:[],streak:0,bestStreak:0,startedAt:e});function nb(t,e){const n=e.correct?t.streak+1:0;return{...t,answers:[...t.answers,e],streak:n,bestStreak:Math.max(t.bestStreak,n)}}function ib(t){return t.ended?!0:t.length!==null&&t.answers.length>=t.length}const rb=t=>({...t,ended:!0});function sb(t,e){const n=t.answers.filter(i=>i.correct).length;return{asked:t.answers.length,right:n,accuracy:t.answers.length?n/t.answers.length:null,bestStreak:t.bestStreak,elapsedMs:Math.max(0,e-t.startedAt),missed:t.answers.filter(i=>!i.correct)}}function wg(t){return t===null?null:t===1?"Perfect":t>=.9?"Excellent":t>=.75?"Solid":t>=.5?"Getting there":"Worth another pass"}function ob(t){const e=Math.floor(t/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}const No=new Gv("@mnemosyne-plugins/mnemo-cosmos"),Tg="review",ab={Perfect:"rank.perfect",Excellent:"rank.excellent",Solid:"rank.solid","Getting there":"rank.getting","Worth another pass":"rank.again"};function lb({catalog:t,onMark:e,onLookAt:n,onHideLabel:i,onClose:r}){const{t:s}=$c(),[o,a]=De.useState({kind:"loading"}),[l,c]=De.useState(null),[f,h]=De.useState(null),[u,m]=De.useState(null),[v,M]=De.useState(null),[g,d]=De.useState({kind:"idle"}),p=De.useRef(!0);De.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]);const y=(ne=>ne.kind==="loading"?wc():ne.state)(o),b=ZA(t),w=!!f&&ib(f),A=De.useMemo(()=>{const ne=new Map;for(const me of t.stars)ne.set(ya(me),{ra:me.ra,dec:me.dec});for(const me of t.dsos)ne.set(Sa(me),{ra:me.ra,dec:me.dec});return ne},[t]),x=De.useCallback(ne=>A.get(ne)??null,[A]),C=ne=>s(`family.${ne.id}`),N=ne=>{const me=Eg(ne);return me.ok?"":s(me.why==="empty"?"review.empty":"review.tooSmall",{n:me.n})};De.useEffect(()=>{let ne=!1;return No.invoke("state.get").then(me=>{ne||!p.current||a({kind:"ready",state:FA(me==null?void 0:me[Tg])})}).catch(me=>{if(ne||!p.current)return;const Se=me instanceof Error?me.message:String(me);console.warn("[cosmos] review state unavailable:",Se),a({kind:"unsaved",state:wc(),why:Se.includes("No Mnemosyne host")?s("review.noHost"):s("review.noLoad")})}),()=>{ne=!0}},[]),De.useEffect(()=>()=>{e(null),i(null)},[e,i]);const R=ne=>{if(o.kind==="unsaved"){a({...o,state:ne});return}a({kind:"ready",state:ne}),No.invoke("state.set",{state:{[Tg]:ne}}).catch(me=>{const Se=me instanceof Error?me.message:String(me);console.warn("[cosmos] review state not saved:",Se),p.current&&a({kind:"unsaved",state:ne,why:s("review.noLoad")})})},k=De.useCallback((ne,me,Se)=>{const q=BA(Ph(t,ne.id),me,Date.now(),Math.random()*2147483648|0,4,Se);M(null),m(q);const he=q?x(q.subject.id):null;e(he),he&&n(he),i(q?q.subject.id:null)},[t,e,n,i,x]),$=ne=>{l&&(d({kind:"idle"}),h(tb(ne,Date.now())),k(l,y,new Set))},te=()=>{c(null),h(null),m(null),M(null),e(null),i(null)},F=ne=>{if(!u||v||!f)return;const me=ne.id===u.subject.id;M({picked:ne.id,correct:me}),i(null);const Se=x(u.subject.id);Se&&e({...Se,label:u.subject.name});const q=OA(y.cards[u.subject.id],me,Date.now()),he=nb(f,{...u.subject,correct:me,n:q.n});h(he),d({kind:"idle"});const fe=Math.max(y.best??0,he.bestStreak);R({v:1,cards:{...y.cards,[u.subject.id]:q},best:fe})},X=async()=>{var me;if(!f||!l)return;const ne=HA(f.answers,{family:C(l),source:"HYG 4.1 and OpenNGC, in the Mnemosyne Cosmos cartridge",now:Date.now()});if(ne){d({kind:"busy"});try{const Se=await No.invoke("permissions.refresh",{permissions:["vault:write"]});if(((me=Se==null?void 0:Se.granted)==null?void 0:me["vault:write"])===!1){p.current&&d({kind:"failed",why:s("review.why.declined")});return}const{vault:q,unlocked:he}=await No.ensureSandbox();await No.socialIngest(q,ne,WA),p.current&&d({kind:"done",vault:q,unlocked:he})}catch(Se){const q=Se instanceof Error?Se.message:String(Se);if(console.warn("[cosmos] run not written to memory:",q),!p.current)return;d({kind:"failed",why:q.includes("No Mnemosyne host")?s("review.why.noHost"):/permission/i.test(q)?s("review.why.noPermission"):q})}}},I=o.kind==="ready"||Object.keys(y.cards).length>0,L=o.kind!=="loading"&&I?kA(y,Date.now()):null,O=o.kind!=="loading"?VA(y):null,B=f?sb(f,Date.now()):null,se=s("review.unknown"),ce=l?f?w?"results":"run":"length":"families";return P.jsxs("section",{className:"review-panel panel","aria-label":s("review.title"),children:[P.jsxs("header",{className:"panel-head",children:[l?P.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:te,children:["← ",C(l)]}):P.jsx("h2",{children:s("review.title")}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:r,"aria-label":s("review.close"),children:"✕"})]}),o.kind==="unsaved"&&P.jsx("p",{className:"note warn",role:"status",children:s("review.unsaved",{why:o.why})}),(O==null?void 0:O.tight)&&P.jsx("p",{className:"note warn",children:s("review.tight",{pct:Math.round(O.ratio*100)})}),ce==="families"&&P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"review-totals",children:[P.jsxs("span",{children:[P.jsx("b",{children:L?L.seen:se})," ",s("review.studied")]}),P.jsxs("span",{children:[P.jsx("b",{children:L?L.due:se})," ",s("review.due")]}),P.jsxs("span",{children:[P.jsx("b",{children:L?L.mastered:se})," ",s("review.mastered")]}),P.jsxs("span",{children:[P.jsx("b",{children:y.best??se})," ",s("review.best")]})]}),P.jsx("p",{className:"note",children:s("review.pick")}),P.jsx("ul",{className:"family-list",children:b.map(ne=>{const me=Eg(ne).ok,Se=QA(ne,t,y,Date.now());return P.jsx("li",{children:P.jsxs("button",{type:"button",className:"family-tile",disabled:!me,onClick:()=>c(ne),children:[P.jsx("span",{className:"family-name",children:C(ne)}),P.jsx("span",{className:"family-count",children:ne.total}),me?P.jsx("span",{className:"family-progress",children:L?`${Se.mastered} / ${ne.total}`:se}):P.jsx("span",{className:"family-refusal",children:N(ne)})]})},ne.id)})})]}),ce==="length"&&l&&P.jsxs(P.Fragment,{children:[P.jsx("p",{className:"note",children:s("review.scope",{n:l.total,level:C(l)})}),P.jsx("h3",{children:s("review.howMany")}),P.jsx("div",{className:"length-row",children:JA.map(ne=>P.jsx("button",{type:"button",className:"btn",onClick:()=>$(ne),children:eb(ne)??s("review.endless")},String(ne)))})]}),ce==="run"&&u&&f&&P.jsxs(P.Fragment,{children:[P.jsxs("p",{className:"run-count",children:[f.answers.length+1,f.length===null?"":` / ${f.length}`]}),P.jsx("h3",{children:s("review.question")}),P.jsx("ul",{className:"option-list",children:u.options.map(ne=>{const me=v?ne.id===u.subject.id?" right":ne.id===v.picked?" wrong":"":"";return P.jsx("li",{children:P.jsxs("button",{type:"button",className:`option${me}`,onClick:()=>F(ne),disabled:!!v,children:[P.jsx("span",{className:"option-name",children:ne.name}),P.jsx("span",{className:"option-id",children:ne.id})]})},ne.id)})}),v&&P.jsxs("div",{className:"answer-row",children:[P.jsxs("p",{children:[s("review.answerIs")," ",P.jsx("b",{children:u.subject.name})," · ",P.jsx("code",{children:u.subject.id})]}),P.jsxs("div",{className:"btn-row",children:[P.jsx("button",{type:"button",className:"btn",onClick:()=>{const ne=x(u.subject.id);ne&&n(ne)},children:s("card.centre")}),P.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>k(l,y,new Set(f.answers.map(ne=>ne.id))),children:s("review.next")}),f.length===null&&P.jsx("button",{type:"button",className:"btn",onClick:()=>h(rb(f)),children:s("review.finishHere")})]})]})]}),ce==="run"&&!u&&P.jsx("p",{className:"note",children:s("review.empty")}),ce==="results"&&B&&f&&P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"results",children:[P.jsxs("span",{children:[P.jsx("b",{children:B.accuracy===null?se:`${Math.round(B.accuracy*100)}%`}),s("review.accuracy")]}),P.jsxs("span",{children:[P.jsx("b",{children:B.bestStreak}),s("review.best")]}),P.jsxs("span",{children:[P.jsx("b",{children:ob(B.elapsedMs)}),s("review.time")]})]}),wg(B.accuracy)&&P.jsx("p",{className:"rank",children:s(ab[wg(B.accuracy)])}),B.bestStreak>0&&B.bestStreak>=(y.best??0)&&P.jsx("p",{className:"note",children:s("review.record")}),B.missed.length>0&&P.jsxs(P.Fragment,{children:[P.jsx("h3",{children:s("review.comeBack")}),P.jsxs("ul",{className:"missed",children:[B.missed.slice(0,12).map(ne=>P.jsxs("li",{children:[ne.name," ",P.jsx("code",{children:ne.id})]},ne.id)),B.missed.length>12&&P.jsx("li",{children:s("review.andMore",{n:B.missed.length-12})})]})]}),P.jsxs("div",{className:"btn-row",children:[P.jsx("button",{type:"button",className:"btn",onClick:()=>{h(null),m(null),e(null),i(null)},children:s("review.again")}),P.jsx("button",{type:"button",className:"btn",onClick:te,children:s("review.another")}),g.kind!=="done"&&P.jsx("button",{type:"button",className:"btn btn-accent",onClick:X,disabled:g.kind==="busy"||f.answers.length===0,children:g.kind==="busy"?s("review.saving"):s("review.save")})]}),g.kind==="done"&&P.jsx("p",{className:"note ok",role:"status",children:s(g.unlocked?"review.saved":"review.savedLocked",{vault:g.vault})}),g.kind==="failed"&&P.jsx("p",{className:"note error",role:"alert",children:g.why})]})]})}const Ag={ra:90,dec:20,fov:65},cb={figures:!0,constellationNames:!0,deepSky:!0,planets:!0,starNames:!0,grid:!1,magLimit:6.5},y0="mnemo-cosmos.place";function ub(){var he,fe,V;const{t,lang:e}=$c(),[n,i]=De.useState({kind:"reading"}),[r,s]=De.useState(Ag),[o,a]=De.useState(cb),[l,c]=De.useState(null),[f,h]=De.useState(null),[u,m]=De.useState(null),[v,M]=De.useState(!1),[g,d]=De.useState("none"),p=()=>{M(!0),d("none"),c(null)},_=K=>{d(_e=>_e===K?"none":K),K!=="place"&&M(!1)},[y,b]=De.useState(""),[w,A]=De.useState(()=>new Date),[x,C]=De.useState(null),N=De.useRef(!0);De.useEffect(()=>(N.current=!0,()=>{N.current=!1}),[]);const R=De.useCallback(()=>{i({kind:"reading"}),Promise.all([fetch(nm("catalog/catalog.bin")).then(K=>{if(!K.ok)throw new Error(`catalog.bin → HTTP ${K.status}`);return K.arrayBuffer()}),fetch(nm("catalog/constellations.json")).then(K=>{if(!K.ok)throw new Error(`constellations.json → HTTP ${K.status}`);return K.json()})]).then(([K,_e])=>{N.current&&i({kind:"ready",catalog:F3(K),constellations:_e.constellations})}).catch(K=>{if(!N.current)return;const _e=K instanceof Error?K.message:String(K);console.warn("[cosmos] catalogue not read:",_e),i({kind:"failed",why:_e})})},[]);De.useEffect(R,[R]),De.useEffect(()=>{try{const K=localStorage.getItem(y0);if(!K)return;const _e=JSON.parse(K);typeof _e.latitude=="number"&&typeof _e.longitude=="number"&&C({latitude:_e.latitude,longitude:_e.longitude,elevation:typeof _e.elevation=="number"?_e.elevation:0,label:typeof _e.label=="string"?_e.label:""})}catch(K){console.warn("[cosmos] stored place not read:",K)}},[]);const k=De.useMemo(()=>o.planets?aS(w,x):[],[w,x,o.planets]),$=De.useMemo(()=>uS(w),[w]),te=De.useCallback(K=>O3(K,e),[e]),F=De.useCallback(K=>t(`body.${K}`),[t]),X=De.useCallback(K=>s(_e=>Cu(_e,K.ra,K.dec)),[]),I=De.useCallback(K=>({id:K.body,name:t(`body.${K.body}`),kind:"body",ra:K.ra,dec:K.dec,mag:K.mag,con:"",aliases:[]}),[t]),L=De.useCallback(K=>{if(n.kind!=="ready")return;if(!K){c(null);return}if(K.kind==="star"){c(of(n.catalog.stars[K.index]));return}if(K.kind==="dso"){c(af(n.catalog.dsos[K.index]));return}const _e=k[K.index];_e&&c(I(_e))},[n,k,I]),O=(l==null?void 0:l.kind)==="body"?k.find(K=>K.body===l.id)??null:null,B=O?lS(O.body,w,x):null,se=De.useMemo(()=>{if(n.kind!=="ready")return[];const K=y.trim().toLowerCase();if(K.length<2)return[];const _e=[],Ue=we=>we.name.toLowerCase().includes(K)||we.id.toLowerCase().includes(K)||we.aliases.some(Ie=>Ie.toLowerCase().includes(K));for(const we of k){const Ie=I(we);Ue(Ie)&&_e.push(Ie)}for(const we of n.catalog.stars){if(_e.length>=20)break;const Ie=of(we);Ue(Ie)&&_e.push(Ie)}for(const we of n.catalog.dsos){if(_e.length>=40)break;const Ie=af(we);Ue(Ie)&&_e.push(Ie)}return _e},[n,y,k,I]),ce=K=>{c(K),s(_e=>Cu(_e,K.ra,K.dec)),d("none")};if(n.kind==="reading")return P.jsx("main",{className:"boot",children:P.jsx("p",{role:"status",children:t("app.loading")})});if(n.kind==="failed")return P.jsxs("main",{className:"boot",children:[P.jsx("p",{role:"alert",children:t("app.failed",{why:n.why})}),P.jsx("button",{type:"button",className:"btn btn-accent",onClick:R,children:t("app.retry")})]});const{catalog:ne,constellations:me}=n,Se=ne.truncation,q=ne.dsos.filter(K=>K.messier).length;return P.jsxs("main",{className:"cosmos",children:[P.jsx(AA,{stars:ne.stars,dsos:ne.dsos,constellations:me,bodies:k,layers:o,look:r,onLook:s,onPick:L,selected:l?{ra:l.ra,dec:l.dec}:null,quizTarget:f,hiddenLabel:u,constellationLabel:te,bodyLabel:F}),P.jsxs("header",{className:"topbar",children:[P.jsxs("div",{className:"brand",children:[P.jsx("span",{className:"eyebrow",children:t("app.eyebrow")}),P.jsx("strong",{children:"Cosmos"})]}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>_("search"),children:t("app.search")}),P.jsx("span",{className:"counts",children:t("app.objects",{stars:ne.stars.length,dsos:ne.dsos.length})}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>_("about"),children:t("credits.open")}),P.jsx("button",{type:"button",className:"btn btn-accent",onClick:p,children:t("review.open")})]}),g==="search"&&P.jsxs("section",{className:"panel search-panel",children:[P.jsx("input",{autoFocus:!0,type:"search",value:y,placeholder:t("app.search"),onChange:K=>b(K.target.value)}),y.trim().length>=2&&se.length===0&&P.jsx("p",{className:"note",children:t("app.noResults")}),P.jsx("ul",{className:"results",children:se.map(K=>P.jsx("li",{children:P.jsxs("button",{type:"button",onClick:()=>ce(K),children:[P.jsx("span",{children:K.name}),P.jsx("code",{children:K.id})]})},`${K.kind}:${K.id}`))})]}),P.jsxs("aside",{className:"controls panel",children:[P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.figures,onChange:K=>a({...o,figures:K.target.checked})})," ",t("sky.figures")]}),P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.constellationNames,onChange:K=>a({...o,constellationNames:K.target.checked})})," ",t("sky.names")]}),P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.starNames,onChange:K=>a({...o,starNames:K.target.checked})})," ",t("sky.starNames")]}),P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.deepSky,onChange:K=>a({...o,deepSky:K.target.checked})})," ",t("sky.deepSky")]}),P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.planets,onChange:K=>a({...o,planets:K.target.checked})})," ",t("sky.planets")]}),P.jsxs("label",{children:[P.jsx("input",{type:"checkbox",checked:o.grid,onChange:K=>a({...o,grid:K.target.checked})})," ",t("sky.grid")]}),P.jsxs("label",{className:"slider",children:[t("sky.magFilter")," ",P.jsx("b",{children:o.magLimit.toFixed(1)}),P.jsx("input",{type:"range",min:1,max:Se.magLimit,step:.1,value:o.magLimit,onChange:K=>a({...o,magLimit:Number(K.target.value)})})]}),P.jsxs("label",{className:"slider",children:[t("sky.fov")," ",P.jsxs("b",{children:[Math.round(r.fov),"°"]}),P.jsx("input",{type:"range",min:Xv,max:jv,step:1,value:Math.round(r.fov),onChange:K=>s({...r,fov:Number(K.target.value)})})]}),P.jsx("button",{type:"button",className:"btn",onClick:()=>s(Ag),children:t("sky.reset")})]}),P.jsx(db,{when:w,setWhen:A,place:x,setPlace:C,open:g==="place",onToggle:()=>_("place")}),l&&P.jsxs("section",{className:`panel card-panel${v?" beside-review":""}`,children:[P.jsxs("header",{className:"panel-head",children:[P.jsxs("div",{children:[P.jsx("h2",{children:l.name}),P.jsx("code",{className:"key",children:l.id})]}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>c(null),"aria-label":t("app.close"),children:"✕"})]}),l.aliases.length>0&&P.jsxs("p",{className:"aliases",children:[P.jsx("span",{children:t("card.alsoKnown")})," ",l.aliases.join(" · ")]}),l.kind==="star"&&z3(l.id)&&P.jsx("p",{className:"note warn",children:t("card.unstableId")}),P.jsxs("dl",{className:"facts",children:[P.jsx(on,{label:t("card.magnitude"),hint:t("card.magnitude.hint"),value:((he=(O==null?void 0:O.mag)??l.mag)==null?void 0:he.toFixed(2))??null}),l.star&&P.jsxs(P.Fragment,{children:[P.jsx(on,{label:t("card.absmag"),hint:t("card.absmag.hint"),value:((fe=l.star.absmag)==null?void 0:fe.toFixed(2))??null}),P.jsx(on,{label:t("card.distance"),value:K3(l.star.dist)}),P.jsx(on,{label:t("card.spectral"),value:l.star.spect||null})]}),l.dso&&P.jsxs(P.Fragment,{children:[P.jsx(on,{label:t("card.type"),value:t(`type.${l.dso.type}`)||l.dso.type}),P.jsx(on,{label:t("card.size"),value:l.dso.majAx===null?null:`${l.dso.majAx.toFixed(1)}′${l.dso.minAx!==null?` × ${l.dso.minAx.toFixed(1)}′`:""}`})]}),O&&P.jsx(on,{label:t("card.au"),value:O.au===null?null:`${O.au.toFixed(3)} AU`}),l.id==="Moon"&&P.jsxs(P.Fragment,{children:[P.jsx(on,{label:t("card.phase"),value:t(`moon.${$.phase}`)}),P.jsx(on,{label:t("card.illuminated",{pct:Math.round($.illuminated*100)}),value:" "})]}),P.jsx(on,{label:t("card.constellation"),value:l.con||null}),P.jsx(on,{label:l.kind==="body"?t("card.positionNow"):t("card.position"),value:`${Y3((O==null?void 0:O.ra)??l.ra)}  ${$3((O==null?void 0:O.dec)??l.dec)}`}),O&&P.jsxs(P.Fragment,{children:[P.jsx(on,{label:t("card.altitude"),value:O.altitude===null?null:`${O.altitude.toFixed(1)}°`}),P.jsx(on,{label:t("card.azimuth"),value:O.azimuth===null?null:`${O.azimuth.toFixed(1)}°`})]})]}),((V=l.star)==null?void 0:V.dist)===null&&P.jsx("p",{className:"note",children:t("card.noDistance")}),O&&!x&&P.jsx("p",{className:"note",children:t("card.noPlace")}),B&&P.jsxs("dl",{className:"facts",children:[P.jsx(on,{label:t("card.rises"),value:B.rise?B.rise.toLocaleString():t("card.neverRises")}),P.jsx(on,{label:t("card.sets"),value:B.set?B.set.toLocaleString():t("card.neverSets")})]}),P.jsx("button",{type:"button",className:"btn",onClick:()=>s(Cu(r,l.ra,l.dec)),children:t("card.centre")}),P.jsx(UA,{object:l})]}),g==="about"&&P.jsxs("section",{className:"panel about-panel",children:[P.jsxs("header",{className:"panel-head",children:[P.jsx("h2",{children:t("trunc.title")}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>d("none"),"aria-label":t("app.close"),children:"✕"})]}),P.jsx("p",{children:t("trunc.stars",{limit:Se.magLimit.toFixed(1),kept:ne.stars.length,omitted:Se.starsOmitted})}),P.jsx("p",{children:t("trunc.noDistance",{n:Se.starsNoDistance})}),P.jsx("p",{children:t("trunc.dsos",{kept:ne.dsos.length,messier:q,omitted:Se.dsoOmitted})}),P.jsx("p",{children:t("trunc.sphere")}),P.jsx("h3",{children:t("credits.title")}),P.jsxs("ul",{className:"credits",children:[P.jsx("li",{children:t("credits.stars")}),P.jsx("li",{children:t("credits.dsos")}),P.jsx("li",{children:t("credits.figures")}),P.jsx("li",{children:t("credits.ephemeris")})]}),P.jsx("p",{className:"note",children:t("credits.accuracy")}),P.jsx("p",{className:"note",children:t("credits.derived")})]}),v&&P.jsx(lb,{catalog:ne,onMark:h,onLookAt:X,onHideLabel:m,onClose:()=>{M(!1),h(null),m(null)}})]})}function on({label:t,value:e,hint:n}){return P.jsxs(P.Fragment,{children:[P.jsx("dt",{title:n,children:t}),P.jsx("dd",{className:e===null?"unknown":"",children:e===null?"—":e})]})}function db({when:t,setWhen:e,place:n,setPlace:i,open:r,onToggle:s}){const{t:o}=$c(),[a,l]=De.useState(()=>n?String(n.latitude):""),[c,f]=De.useState(()=>n?String(n.longitude):""),[h,u]=De.useState(()=>n?String(n.elevation):""),[m,v]=De.useState(()=>(n==null?void 0:n.label)??""),[M,g]=De.useState(null),d=y=>e(new Date(t.getTime()+y)),p=()=>{const y=dS(a,c,h,m);if(!y.ok){g(o(`place.bad.${y.why}`));return}g(null),i(y.place);try{localStorage.setItem(y0,JSON.stringify(y.place))}catch(b){console.warn("[cosmos] place not stored:",b)}},_=()=>{i(null),l(""),f(""),u(""),v(""),g(null);try{localStorage.removeItem(y0)}catch{}};return P.jsxs("section",{className:`panel time-panel${r?" open":""}`,children:[P.jsxs("header",{className:"panel-head",children:[P.jsxs("div",{children:[P.jsx("h3",{children:o("time.title")}),P.jsxs("p",{className:"instant",children:[t.toISOString().replace("T"," ").slice(0,19)," ",o("time.utc")]}),P.jsxs("p",{className:"instant local",children:[t.toLocaleString()," ",o("time.local")]})]}),P.jsx("button",{type:"button",className:"btn btn-ghost",onClick:s,children:r?"▾":"▸"})]}),P.jsxs("div",{className:"btn-row",children:[P.jsx("button",{type:"button",className:"btn",onClick:()=>d(-864e5),children:o("time.minus1d")}),P.jsx("button",{type:"button",className:"btn",onClick:()=>d(-36e5),children:o("time.minus1h")}),P.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>e(new Date),children:o("time.now")}),P.jsx("button",{type:"button",className:"btn",onClick:()=>d(36e5),children:o("time.plus1h")}),P.jsx("button",{type:"button",className:"btn",onClick:()=>d(864e5),children:o("time.plus1d")})]}),r&&P.jsxs(P.Fragment,{children:[P.jsx("h3",{children:o("place.title")}),P.jsx("p",{className:"instant",children:n?n.label||`${n.latitude}, ${n.longitude}`:o("place.none")}),P.jsxs("div",{className:"place-form",children:[P.jsxs("label",{children:[o("place.label"),P.jsx("input",{value:m,onChange:y=>v(y.target.value)})]}),P.jsxs("label",{children:[o("place.latitude"),P.jsx("input",{value:a,onChange:y=>l(y.target.value),inputMode:"decimal"})]}),P.jsxs("label",{children:[o("place.longitude"),P.jsx("input",{value:c,onChange:y=>f(y.target.value),inputMode:"decimal"})]}),P.jsxs("label",{children:[o("place.elevation"),P.jsx("input",{value:h,onChange:y=>u(y.target.value),inputMode:"decimal"})]})]}),M&&P.jsx("p",{className:"note error",role:"alert",children:M}),P.jsxs("div",{className:"btn-row",children:[P.jsx("button",{type:"button",className:"btn btn-accent",onClick:p,children:o("place.save")}),n&&P.jsx("button",{type:"button",className:"btn",onClick:_,children:o("place.clear")})]}),P.jsx("p",{className:"note",children:o("place.hint")})]})]})}Bv();zv(document.getElementById("root")).render(P.jsx(ub,{}));
