var Ix=Object.defineProperty;var Ux=(t,e,n)=>e in t?Ix(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var op=(t,e,n)=>Ux(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Xg={exports:{}},Dc={},qg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Fx=Symbol.for("react.portal"),Ox=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),Hx=Symbol.for("react.suspense"),Wx=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),ap=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$g=Object.assign,Kg={};function fo(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Yg}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=fo.prototype;function I0(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Yg}var U0=I0.prototype=new Zg;U0.constructor=I0;$g(U0,fo.prototype);U0.isPureReactComponent=!0;var lp=Array.isArray,Qg=Object.prototype.hasOwnProperty,F0={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function e1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qg.call(e,i)&&!Jg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:F0.current}}function qx(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function O0(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function Yx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cp=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yx(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case Fx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+lu(o,0):i,lp(r)?(n="",t!=null&&(n=t.replace(cp,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(O0(r)&&(r=qx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+lu(s,a);o+=bl(s,e,n,l,r)}else if(l=Xx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $x(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Cl={transition:null},Kx={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:F0};function t1(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!O0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=fo;Je.Fragment=Ox;Je.Profiler=zx;Je.PureComponent=I0;Je.StrictMode=kx;Je.Suspense=Hx;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;Je.act=t1;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$g({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=F0.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qg.call(e,l)&&!Jg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:Gx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bx,_context:t},t.Consumer=t};Je.createElement=e1;Je.createFactory=function(t){var e=e1.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Vx,render:t}};Je.isValidElement=O0;Je.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:$x}};Je.memo=function(t,e){return{$$typeof:Wx,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};Je.unstable_act=t1;Je.useCallback=function(t,e){return hn.current.useCallback(t,e)};Je.useContext=function(t){return hn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return hn.current.useEffect(t,e)};Je.useId=function(){return hn.current.useId()};Je.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return hn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Je.useRef=function(t){return hn.current.useRef(t)};Je.useState=function(t){return hn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return hn.current.useTransition()};Je.version="18.3.1";qg.exports=Je;var Ee=qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=Ee,Qx=Symbol.for("react.element"),Jx=Symbol.for("react.fragment"),e2=Object.prototype.hasOwnProperty,t2=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n2={key:!0,ref:!0,__self:!0,__source:!0};function n1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)e2.call(e,i)&&!n2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qx,type:t,key:s,ref:o,props:r,_owner:t2.current}}Dc.Fragment=Jx;Dc.jsx=n1;Dc.jsxs=n1;Xg.exports=Dc;var R=Xg.exports,i1={exports:{}},Nn={},r1={exports:{}},s1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var V=U.length;U.push(Y);e:for(;0<V;){var z=V-1>>>1,ee=U[z];if(0<r(ee,Y))U[z]=Y,U[V]=ee,V=z;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Y=U[0],V=U.pop();if(V!==Y){U[0]=V;e:for(var z=0,ee=U.length,J=ee>>>1;z<J;){var fe=2*(z+1)-1,_e=U[fe],H=fe+1,ae=U[H];if(0>r(_e,V))H<ee&&0>r(ae,_e)?(U[z]=ae,U[H]=V,z=H):(U[z]=_e,U[fe]=V,z=fe);else if(H<ee&&0>r(ae,V))U[z]=ae,U[H]=V,z=H;else break e}}return Y}function r(U,Y){var V=U.sortIndex-Y.sortIndex;return V!==0?V:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=U)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(U){if(y=!1,_(U),!g)if(n(l)!==null)g=!0,X(b);else{var Y=n(c);Y!==null&&k(M,Y.startTime-U)}}function b(U,Y){g=!1,y&&(y=!1,h(x),x=-1),p=!0;var V=d;try{for(_(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||U&&!N());){var z=f.callback;if(typeof z=="function"){f.callback=null,d=f.priorityLevel;var ee=z(f.expirationTime<=Y);Y=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&i(l),_(Y)}else i(l);f=n(l)}if(f!==null)var J=!0;else{var fe=n(c);fe!==null&&k(M,fe.startTime-Y),J=!1}return J}finally{f=null,d=V,p=!1}}var E=!1,T=null,x=-1,C=5,L=-1;function N(){return!(t.unstable_now()-L<C)}function F(){if(T!==null){var U=t.unstable_now();L=U;var Y=!0;try{Y=T(!0,U)}finally{Y?Z():(E=!1,T=null)}}else E=!1}var Z;if(typeof m=="function")Z=function(){m(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,I=te.port2;te.port1.onmessage=F,Z=function(){I.postMessage(null)}}else Z=function(){v(F,0)};function X(U){T=U,E||(E=!0,Z())}function k(U,Y){x=v(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,X(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var V=d;d=Y;try{return U()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var V=d;d=U;try{return Y()}finally{d=V}},t.unstable_scheduleCallback=function(U,Y,V){var z=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?z+V:z):V=z,U){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=V+ee,U={id:u++,callback:Y,priorityLevel:U,startTime:V,expirationTime:ee,sortIndex:-1},V>z?(U.sortIndex=V,e(c,U),n(l)===null&&U===n(c)&&(y?(h(x),x=-1):y=!0,k(M,V-z))):(U.sortIndex=ee,e(l,U),g||p||(g=!0,X(b))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var Y=d;return function(){var V=d;d=Y;try{return U.apply(this,arguments)}finally{d=V}}}})(s1);r1.exports=s1;var i2=r1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r2=Ee,Pn=i2;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o1=new Set,Qo={};function os(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Qo[t]=e,t=0;t<e.length;t++)o1.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,s2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},dp={};function o2(t){return Ed.call(dp,t)?!0:Ed.call(up,t)?!1:s2.test(t)?dp[t]=!0:(up[t]=!0,!1)}function a2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l2(t,e,n,i){if(e===null||typeof e>"u"||a2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var k0=/[\-:]([a-z])/g;function z0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(k0,z0);Kt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(k0,z0);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(k0,z0);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function B0(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l2(e,n,r,i)&&(n=null),i||r===null?o2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=r2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),a1=Symbol.for("react.provider"),l1=Symbol.for("react.context"),V0=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),H0=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),c1=Symbol.for("react.offscreen"),fp=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,cu;function Uo(t){if(cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+t}var uu=!1;function du(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function c2(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=du(t.type,!1),t;case 11:return t=du(t.type.render,!1),t;case 1:return t=du(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case wd:return"Profiler";case G0:return"StrictMode";case Td:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l1:return(t.displayName||"Context")+".Consumer";case a1:return(t._context.displayName||"Context")+".Provider";case V0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H0:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function u2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===G0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function u1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d2(t){var e=u1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=d2(t))}function d1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=u1(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f1(t,e){e=e.checked,e!=null&&B0(t,"checked",e,!1)}function Rd(t,e){f1(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Fo(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function h1(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,m1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f2=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){f2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function g1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function v1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=g1(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h2=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(t,e){if(e){if(h2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function W0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,Hs=null,Ws=null;function vp(t){if(t=Sa(t)){if(typeof Fd!="function")throw Error(he(280));var e=t.stateNode;e&&(e=kc(e),Fd(t.stateNode,t.type,e))}}function _1(t){Hs?Ws?Ws.push(t):Ws=[t]:Hs=t}function x1(){if(Hs){var t=Hs,e=Ws;if(Ws=Hs=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function y1(t,e){return t(e)}function S1(){}var fu=!1;function M1(t,e,n){if(fu)return t(e,n);fu=!0;try{return y1(t,e,n)}finally{fu=!1,(Hs!==null||Ws!==null)&&(S1(),x1())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Od=!1;if(Gi)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Od=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Od=!1}function p2(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ho=!1,Yl=null,$l=!1,kd=null,m2={onError:function(t){Ho=!0,Yl=t}};function g2(t,e,n,i,r,s,o,a,l){Ho=!1,Yl=null,p2.apply(m2,arguments)}function v2(t,e,n,i,r,s,o,a,l){if(g2.apply(this,arguments),Ho){if(Ho){var c=Yl;Ho=!1,Yl=null}else throw Error(he(198));$l||($l=!0,kd=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _p(t){if(as(t)!==t)throw Error(he(188))}function _2(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _p(r),t;if(s===i)return _p(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function w1(t){return t=_2(t),t!==null?T1(t):null}function T1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T1(t);if(e!==null)return e;t=t.sibling}return null}var A1=Pn.unstable_scheduleCallback,xp=Pn.unstable_cancelCallback,x2=Pn.unstable_shouldYield,y2=Pn.unstable_requestPaint,Dt=Pn.unstable_now,S2=Pn.unstable_getCurrentPriorityLevel,j0=Pn.unstable_ImmediatePriority,b1=Pn.unstable_UserBlockingPriority,Kl=Pn.unstable_NormalPriority,M2=Pn.unstable_LowPriority,C1=Pn.unstable_IdlePriority,Ic=null,vi=null;function E2(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:A2,w2=Math.log,T2=Math.LN2;function A2(t){return t>>>=0,t===0?32:31-(w2(t)/T2|0)|0}var Ua=64,Fa=4194304;function Oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Oo(a):(s&=o,s!==0&&(i=Oo(s)))}else o=n&~r,o!==0?i=Oo(o):s!==0&&(i=Oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function b2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R1(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function R2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function X0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function P1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N1,q0,L1,D1,I1,Bd=!1,Oa=[],pr=null,mr=null,gr=null,ta=new Map,na=new Map,ar=[],P2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&q0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function N2(t,e,n,i,r){switch(e){case"focusin":return pr=yo(pr,t,e,n,i,r),!0;case"dragenter":return mr=yo(mr,t,e,n,i,r),!0;case"mouseover":return gr=yo(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,yo(ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,yo(na.get(s)||null,t,e,n,i,r)),!0}return!1}function U1(t){var e=Gr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=E1(n),e!==null){t.blockedOn=e,I1(t.priority,function(){L1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ud=i,n.target.dispatchEvent(i),Ud=null}else return e=Sa(n),e!==null&&q0(e),t.blockedOn=n,!1;e.shift()}return!0}function Sp(t,e,n){Rl(t)&&n.delete(e)}function L2(){Bd=!1,pr!==null&&Rl(pr)&&(pr=null),mr!==null&&Rl(mr)&&(mr=null),gr!==null&&Rl(gr)&&(gr=null),ta.forEach(Sp),na.forEach(Sp)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,Bd||(Bd=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,L2)))}function ia(t){function e(r){return So(r,t)}if(0<Oa.length){So(Oa[0],t);for(var n=1;n<Oa.length;n++){var i=Oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&So(pr,t),mr!==null&&So(mr,t),gr!==null&&So(gr,t),ta.forEach(e),na.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)U1(n),n.blockedOn===null&&ar.shift()}var js=qi.ReactCurrentBatchConfig,Ql=!0;function D2(t,e,n,i){var r=ut,s=js.transition;js.transition=null;try{ut=1,Y0(t,e,n,i)}finally{ut=r,js.transition=s}}function I2(t,e,n,i){var r=ut,s=js.transition;js.transition=null;try{ut=4,Y0(t,e,n,i)}finally{ut=r,js.transition=s}}function Y0(t,e,n,i){if(Ql){var r=Gd(t,e,n,i);if(r===null)Eu(t,e,i,Jl,n),yp(t,i);else if(N2(r,t,e,n,i))i.stopPropagation();else if(yp(t,i),e&4&&-1<P2.indexOf(t)){for(;r!==null;){var s=Sa(r);if(s!==null&&N1(s),s=Gd(t,e,n,i),s===null&&Eu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var Jl=null;function Gd(t,e,n,i){if(Jl=null,t=W0(i),t=Gr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function F1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S2()){case j0:return 1;case b1:return 4;case Kl:case M2:return 16;case C1:return 536870912;default:return 16}default:return 16}}var ur=null,$0=null,Pl=null;function O1(){if(Pl)return Pl;var t,e=$0,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Mp(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Mp,this.isPropagationStopped=Mp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},K0=Ln(ho),ya=At({},ho,{view:0,detail:0}),U2=Ln(ya),pu,mu,Mo,Uc=At({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(pu=t.screenX-Mo.screenX,mu=t.screenY-Mo.screenY):mu=pu=0,Mo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Ep=Ln(Uc),F2=At({},Uc,{dataTransfer:0}),O2=Ln(F2),k2=At({},ya,{relatedTarget:0}),gu=Ln(k2),z2=At({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),B2=Ln(z2),G2=At({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V2=Ln(G2),H2=At({},ho,{data:0}),wp=Ln(H2),W2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X2[t])?!!e[t]:!1}function Z0(){return q2}var Y2=At({},ya,{key:function(t){if(t.key){var e=W2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z0,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$2=Ln(Y2),K2=At({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Ln(K2),Z2=At({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z0}),Q2=Ln(Z2),J2=At({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),e3=Ln(J2),t3=At({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n3=Ln(t3),i3=[9,13,27,32],Q0=Gi&&"CompositionEvent"in window,Wo=null;Gi&&"documentMode"in document&&(Wo=document.documentMode);var r3=Gi&&"TextEvent"in window&&!Wo,k1=Gi&&(!Q0||Wo&&8<Wo&&11>=Wo),Ap=" ",bp=!1;function z1(t,e){switch(t){case"keyup":return i3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function s3(t,e){switch(t){case"compositionend":return B1(e);case"keypress":return e.which!==32?null:(bp=!0,Ap);case"textInput":return t=e.data,t===Ap&&bp?null:t;default:return null}}function o3(t,e){if(Ps)return t==="compositionend"||!Q0&&z1(t,e)?(t=O1(),Pl=$0=ur=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k1&&e.locale!=="ko"?null:e.data;default:return null}}var a3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a3[t.type]:e==="textarea"}function G1(t,e,n,i){_1(i),e=ec(e,"onChange"),0<e.length&&(n=new K0("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var jo=null,ra=null;function l3(t){Q1(t,0)}function Fc(t){var e=Ds(t);if(d1(e))return t}function c3(t,e){if(t==="change")return e}var V1=!1;if(Gi){var vu;if(Gi){var _u="oninput"in document;if(!_u){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),_u=typeof Rp.oninput=="function"}vu=_u}else vu=!1;V1=vu&&(!document.documentMode||9<document.documentMode)}function Pp(){jo&&(jo.detachEvent("onpropertychange",H1),ra=jo=null)}function H1(t){if(t.propertyName==="value"&&Fc(ra)){var e=[];G1(e,ra,t,W0(t)),M1(l3,e)}}function u3(t,e,n){t==="focusin"?(Pp(),jo=e,ra=n,jo.attachEvent("onpropertychange",H1)):t==="focusout"&&Pp()}function d3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(ra)}function f3(t,e){if(t==="click")return Fc(e)}function h3(t,e){if(t==="input"||t==="change")return Fc(e)}function p3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:p3;function sa(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ed.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function W1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j1(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function J0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m3(t){var e=j1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W1(n.ownerDocument.documentElement,n)){if(i!==null&&J0(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lp(n,s);var o=Lp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g3=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,Vd=null,Xo=null,Hd=!1;function Dp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Ns==null||Ns!==ql(i)||(i=Ns,"selectionStart"in i&&J0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xo&&sa(Xo,i)||(Xo=i,i=ec(Vd,"onSelect"),0<i.length&&(e=new K0("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},xu={},X1={};Gi&&(X1=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Oc(t){if(xu[t])return xu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X1)return xu[t]=e[n];return t}var q1=Oc("animationend"),Y1=Oc("animationiteration"),$1=Oc("animationstart"),K1=Oc("transitionend"),Z1=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Z1.set(t,e),os(e,[t])}for(var yu=0;yu<Ip.length;yu++){var Su=Ip[yu],v3=Su.toLowerCase(),_3=Su[0].toUpperCase()+Su.slice(1);br(v3,"on"+_3)}br(q1,"onAnimationEnd");br(Y1,"onAnimationIteration");br($1,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(K1,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x3=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,v2(i,e,void 0,t),t.currentTarget=null}function Q1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Up(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Up(r,a,c),s=l}}}if($l)throw t=kd,$l=!1,kd=null,t}function _t(t,e){var n=e[Yd];n===void 0&&(n=e[Yd]=new Set);var i=t+"__bubble";n.has(i)||(J1(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),J1(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Ba]){t[Ba]=!0,o1.forEach(function(n){n!=="selectionchange"&&(x3.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,Mu("selectionchange",!1,e))}}function J1(t,e,n,i){switch(F1(e)){case 1:var r=D2;break;case 4:r=I2;break;default:r=Y0}n=r.bind(null,e,n,t),r=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}M1(function(){var c=s,u=W0(n),f=[];e:{var d=Z1.get(t);if(d!==void 0){var p=K0,g=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=$2;break;case"focusin":g="focus",p=gu;break;case"focusout":g="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q2;break;case q1:case Y1:case $1:p=B2;break;case K1:p=e3;break;case"scroll":p=U2;break;case"wheel":p=n3;break;case"copy":case"cut":case"paste":p=V2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tp}var y=(e&4)!==0,v=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=ea(m,h),M!=null&&y.push(aa(m,M,_)))),v)break;m=m.return}0<y.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ud&&(g=n.relatedTarget||n.fromElement)&&(Gr(g)||g[Vi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Gr(g):null,g!==null&&(v=as(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Ep,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Tp,M="onPointerLeave",h="onPointerEnter",m="pointer"),v=p==null?d:Ds(p),_=g==null?d:Ds(g),d=new y(M,m+"leave",p,n,u),d.target=v,d.relatedTarget=_,M=null,Gr(u)===c&&(y=new y(h,m+"enter",g,n,u),y.target=_,y.relatedTarget=v,M=y),v=M,p&&g)t:{for(y=p,h=g,m=0,_=y;_;_=ds(_))m++;for(_=0,M=h;M;M=ds(M))_++;for(;0<m-_;)y=ds(y),m--;for(;0<_-m;)h=ds(h),_--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=ds(y),h=ds(h)}y=null}else y=null;p!==null&&Fp(f,d,p,y,!1),g!==null&&v!==null&&Fp(f,v,g,y,!0)}}e:{if(d=c?Ds(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=c3;else if(Cp(d))if(V1)b=h3;else{b=d3;var E=u3}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=f3);if(b&&(b=b(t,c))){G1(f,b,n,u);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Pd(d,"number",d.value)}switch(E=c?Ds(c):window,t){case"focusin":(Cp(E)||E.contentEditable==="true")&&(Ns=E,Vd=c,Xo=null);break;case"focusout":Xo=Vd=Ns=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,Dp(f,n,u);break;case"selectionchange":if(g3)break;case"keydown":case"keyup":Dp(f,n,u)}var T;if(Q0)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ps?z1(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(k1&&n.locale!=="ko"&&(Ps||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ps&&(T=O1()):(ur=u,$0="value"in ur?ur.value:ur.textContent,Ps=!0)),E=ec(c,x),0<E.length&&(x=new wp(x,t,null,n,u),f.push({event:x,listeners:E}),T?x.data=T:(T=B1(n),T!==null&&(x.data=T)))),(T=r3?s3(t,n):o3(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(u=new wp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}Q1(f,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(t,n),s!=null&&i.unshift(aa(t,s,r)),s=ea(t,e),s!=null&&i.push(aa(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):r||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var y3=/\r\n?/g,S3=/\u0000|\uFFFD/g;function Op(t){return(typeof t=="string"?t:""+t).replace(y3,`
`).replace(S3,"")}function Ga(t,e,n){if(e=Op(e),Op(t)!==e&&n)throw Error(he(425))}function tc(){}var Wd=null,jd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,M3=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,E3=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(w3)}:qd;function w3(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),pi="__reactFiber$"+po,la="__reactProps$"+po,Vi="__reactContainer$"+po,Yd="__reactEvents$"+po,T3="__reactListeners$"+po,A3="__reactHandles$"+po;function Gr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zp(t);t!==null;){if(n=t[pi])return n;t=zp(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[pi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function kc(t){return t[la]||null}var $d=[],Is=-1;function Cr(t){return{current:t}}function xt(t){0>Is||(t.current=$d[Is],$d[Is]=null,Is--)}function vt(t,e){Is++,$d[Is]=t.current,t.current=e}var wr={},on=Cr(wr),_n=Cr(!1),Zr=wr;function Js(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function nc(){xt(_n),xt(on)}function Bp(t,e,n){if(on.current!==wr)throw Error(he(168));vt(on,e),vt(_n,n)}function ev(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,u2(t)||"Unknown",r));return At({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Zr=on.current,vt(on,t),vt(_n,_n.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=ev(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,xt(_n),xt(on),vt(on,t)):xt(_n),vt(_n,n)}var Li=null,zc=!1,Tu=!1;function tv(t){Li===null?Li=[t]:Li.push(t)}function b3(t){zc=!0,tv(t)}function Rr(){if(!Tu&&Li!==null){Tu=!0;var t=0,e=ut;try{var n=Li;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,zc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),A1(j0,Rr),r}finally{ut=e,Tu=!1}}return null}var Us=[],Fs=0,rc=null,sc=0,Fn=[],On=0,Qr=null,Ii=1,Ui="";function Fr(t,e){Us[Fs++]=sc,Us[Fs++]=rc,rc=t,sc=e}function nv(t,e,n){Fn[On++]=Ii,Fn[On++]=Ui,Fn[On++]=Qr,Qr=t;var i=Ii;t=Ui;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ni(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function eh(t){t.return!==null&&(Fr(t,1),nv(t,1,0))}function th(t){for(;t===rc;)rc=Us[--Fs],Us[Fs]=null,sc=Us[--Fs],Us[Fs]=null;for(;t===Qr;)Qr=Fn[--On],Fn[On]=null,Ui=Fn[--On],Fn[On]=null,Ii=Fn[--On],Fn[On]=null}var Rn=null,Cn=null,Mt=!1,Qn=null;function iv(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zd(t){if(Mt){var e=Cn;if(e){var n=e;if(!Vp(t,e)){if(Kd(t))throw Error(he(418));e=vr(n.nextSibling);var i=Rn;e&&Vp(t,e)?iv(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Rn=t)}}else{if(Kd(t))throw Error(he(418));t.flags=t.flags&-4097|2,Mt=!1,Rn=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Va(t){if(t!==Rn)return!1;if(!Mt)return Hp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=Cn)){if(Kd(t))throw rv(),Error(he(418));for(;e;)iv(t,e),e=vr(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?vr(t.stateNode.nextSibling):null;return!0}function rv(){for(var t=Cn;t;)t=vr(t.nextSibling)}function eo(){Cn=Rn=null,Mt=!1}function nh(t){Qn===null?Qn=[t]:Qn.push(t)}var C3=qi.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function sv(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Sr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,M){return m===null||m.tag!==6?(m=Lu(_,h.mode,M),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,M){var b=_.type;return b===Rs?u(h,m,_.props.children,M,_.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Wp(b)===m.type)?(M=r(m,_.props),M.ref=Eo(h,m,_),M.return=h,M):(M=kl(_.type,_.key,_.props,null,h.mode,M),M.ref=Eo(h,m,_),M.return=h,M)}function c(h,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Du(_,h.mode,M),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function u(h,m,_,M,b){return m===null||m.tag!==7?(m=Yr(_,h.mode,M,b),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Lu(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case La:return _=kl(m.type,m.key,m.props,null,h.mode,_),_.ref=Eo(h,null,m),_.return=h,_;case Cs:return m=Du(m,h.mode,_),m.return=h,m;case sr:var M=m._init;return f(h,M(m._payload),_)}if(Fo(m)||_o(m))return m=Yr(m,h.mode,_,null),m.return=h,m;Ha(h,m)}return null}function d(h,m,_,M){var b=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(h,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case La:return _.key===b?l(h,m,_,M):null;case Cs:return _.key===b?c(h,m,_,M):null;case sr:return b=_._init,d(h,m,b(_._payload),M)}if(Fo(_)||_o(_))return b!==null?null:u(h,m,_,M,null);Ha(h,_)}return null}function p(h,m,_,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(m,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case La:return h=h.get(M.key===null?_:M.key)||null,l(m,h,M,b);case Cs:return h=h.get(M.key===null?_:M.key)||null,c(m,h,M,b);case sr:var E=M._init;return p(h,m,_,E(M._payload),b)}if(Fo(M)||_o(M))return h=h.get(_)||null,u(m,h,M,b,null);Ha(m,M)}return null}function g(h,m,_,M){for(var b=null,E=null,T=m,x=m=0,C=null;T!==null&&x<_.length;x++){T.index>x?(C=T,T=null):C=T.sibling;var L=d(h,T,_[x],M);if(L===null){T===null&&(T=C);break}t&&T&&L.alternate===null&&e(h,T),m=s(L,m,x),E===null?b=L:E.sibling=L,E=L,T=C}if(x===_.length)return n(h,T),Mt&&Fr(h,x),b;if(T===null){for(;x<_.length;x++)T=f(h,_[x],M),T!==null&&(m=s(T,m,x),E===null?b=T:E.sibling=T,E=T);return Mt&&Fr(h,x),b}for(T=i(h,T);x<_.length;x++)C=p(T,h,x,_[x],M),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?x:C.key),m=s(C,m,x),E===null?b=C:E.sibling=C,E=C);return t&&T.forEach(function(N){return e(h,N)}),Mt&&Fr(h,x),b}function y(h,m,_,M){var b=_o(_);if(typeof b!="function")throw Error(he(150));if(_=b.call(_),_==null)throw Error(he(151));for(var E=b=null,T=m,x=m=0,C=null,L=_.next();T!==null&&!L.done;x++,L=_.next()){T.index>x?(C=T,T=null):C=T.sibling;var N=d(h,T,L.value,M);if(N===null){T===null&&(T=C);break}t&&T&&N.alternate===null&&e(h,T),m=s(N,m,x),E===null?b=N:E.sibling=N,E=N,T=C}if(L.done)return n(h,T),Mt&&Fr(h,x),b;if(T===null){for(;!L.done;x++,L=_.next())L=f(h,L.value,M),L!==null&&(m=s(L,m,x),E===null?b=L:E.sibling=L,E=L);return Mt&&Fr(h,x),b}for(T=i(h,T);!L.done;x++,L=_.next())L=p(T,h,x,L.value,M),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?x:L.key),m=s(L,m,x),E===null?b=L:E.sibling=L,E=L);return t&&T.forEach(function(F){return e(h,F)}),Mt&&Fr(h,x),b}function v(h,m,_,M){if(typeof _=="object"&&_!==null&&_.type===Rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case La:e:{for(var b=_.key,E=m;E!==null;){if(E.key===b){if(b=_.type,b===Rs){if(E.tag===7){n(h,E.sibling),m=r(E,_.props.children),m.return=h,h=m;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Wp(b)===E.type){n(h,E.sibling),m=r(E,_.props),m.ref=Eo(h,E,_),m.return=h,h=m;break e}n(h,E);break}else e(h,E);E=E.sibling}_.type===Rs?(m=Yr(_.props.children,h.mode,M,_.key),m.return=h,h=m):(M=kl(_.type,_.key,_.props,null,h.mode,M),M.ref=Eo(h,m,_),M.return=h,h=M)}return o(h);case Cs:e:{for(E=_.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Du(_,h.mode,M),m.return=h,h=m}return o(h);case sr:return E=_._init,v(h,m,E(_._payload),M)}if(Fo(_))return g(h,m,_,M);if(_o(_))return y(h,m,_,M);Ha(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=Lu(_,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return v}var to=sv(!0),ov=sv(!1),oc=Cr(null),ac=null,Os=null,ih=null;function rh(){ih=Os=ac=null}function sh(t){var e=oc.current;xt(oc),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){ac=t,ih=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(ac===null)throw Error(he(308));Os=t,ac.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Vr=null;function oh(t){Vr===null?Vr=[t]:Vr.push(t)}function av(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,oh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,oh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,X0(t,n)}}function jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=At({},f,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function Xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var Ma={},_i=Cr(Ma),ca=Cr(Ma),ua=Cr(Ma);function Hr(t){if(t===Ma)throw Error(he(174));return t}function lh(t,e){switch(vt(ua,e),vt(ca,t),vt(_i,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}xt(_i),vt(_i,e)}function no(){xt(_i),xt(ca),xt(ua)}function cv(t){Hr(ua.current);var e=Hr(_i.current),n=Ld(e,t.type);e!==n&&(vt(ca,t),vt(_i,n))}function ch(t){ca.current===t&&(xt(_i),xt(ca))}var wt=Cr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function uh(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Dl=qi.ReactCurrentDispatcher,bu=qi.ReactCurrentBatchConfig,Jr=0,Tt=null,kt=null,Ht=null,uc=!1,qo=!1,da=0,R3=0;function Qt(){throw Error(he(321))}function dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function fh(t,e,n,i,r,s){if(Jr=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?D3:I3,t=n(i,r),qo){s=0;do{if(qo=!1,da=0,25<=s)throw Error(he(301));s+=1,Ht=kt=null,e.updateQueue=null,Dl.current=U3,t=n(i,r)}while(qo)}if(Dl.current=dc,e=kt!==null&&kt.next!==null,Jr=0,Ht=kt=Tt=null,uc=!1,e)throw Error(he(300));return t}function hh(){var t=da!==0;return da=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Hn(){if(kt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Ht===null?Tt.memoizedState:Ht.next;if(e!==null)Ht=e,kt=t;else{if(t===null)throw Error(he(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function fa(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=u,es|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Hn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function uv(){}function dv(t,e){var n=Tt,i=Hn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,ph(pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ha(9,hv.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(he(349));Jr&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hv(t,e,n,i){e.value=n,e.getSnapshot=i,mv(e)&&gv(t)}function pv(t,e,n){return n(function(){mv(e)&&gv(t)})}function mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function gv(t){var e=Hi(t,1);e!==null&&ii(e,t,1,-1)}function qp(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=L3.bind(null,Tt,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vv(){return Hn().memoizedState}function Il(t,e,n,i){var r=fi();Tt.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function Bc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&dh(i,o.deps)){r.memoizedState=ha(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=ha(1|e,n,s,i)}function Yp(t,e){return Il(8390656,8,t,e)}function ph(t,e){return Bc(2048,8,t,e)}function _v(t,e){return Bc(4,2,t,e)}function xv(t,e){return Bc(4,4,t,e)}function yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sv(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,yv.bind(null,e,t),n)}function mh(){}function Mv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ev(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function wv(t,e,n){return Jr&21?(ri(n,e)||(n=R1(),Tt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function P3(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{ut=n,bu.transition=i}}function Tv(){return Hn().memoizedState}function N3(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))bv(e,n);else if(n=av(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),Cv(n,e,i)}}function L3(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))bv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,oh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=av(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),Cv(n,e,i))}}function Av(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function bv(t,e){qo=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,X0(t,n)}}var dc={readContext:Vn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},D3={readContext:Vn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N3.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:mh,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=P3.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=fi();if(Mt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),jt===null)throw Error(he(349));Jr&30||fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yp(pv.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,hv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=jt.identifierPrefix;if(Mt){var n=Ui,i=Ii;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},I3={readContext:Vn,useCallback:Mv,useContext:Vn,useEffect:ph,useImperativeHandle:Sv,useInsertionEffect:_v,useLayoutEffect:xv,useMemo:Ev,useReducer:Cu,useRef:vv,useState:function(){return Cu(fa)},useDebugValue:mh,useDeferredValue:function(t){var e=Hn();return wv(e,kt.memoizedState,t)},useTransition:function(){var t=Cu(fa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:Tv,unstable_isNewReconciler:!1},U3={readContext:Vn,useCallback:Mv,useContext:Vn,useEffect:ph,useImperativeHandle:Sv,useInsertionEffect:_v,useLayoutEffect:xv,useMemo:Ev,useReducer:Ru,useRef:vv,useState:function(){return Ru(fa)},useDebugValue:mh,useDeferredValue:function(t){var e=Hn();return kt===null?e.memoizedState=t:wv(e,kt.memoizedState,t)},useTransition:function(){var t=Ru(fa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:Tv,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ii(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ii(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=yr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(ii(e,t,i,n),Ll(e,t,i))}};function $p(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,s):!0}function Rv(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=xn(e)?Zr:on.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ah(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=xn(e)?Zr:on.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",i=e;do n+=c2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F3=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,ff=i),tf(t,e)},n}function Nv(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tf(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new F3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=K3.bind(null,t,e,n),e.then(t,t))}function Qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var O3=qi.ReactCurrentOwner,vn=!1;function cn(t,e,n,i){e.child=t===null?ov(e,null,n,i):to(e,t.child,n,i)}function em(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=fh(t,e,n,i,s,r),n=hh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Mt&&n&&eh(e),e.flags|=1,cn(t,e,i,r),e.child)}function tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lv(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return nf(t,e,n,i,r)}function Dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(zs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(zs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(zs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(zs,bn),bn|=i;return cn(t,e,r,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(t,e,n,i,r){var s=xn(n)?Zr:on.current;return s=Js(e,s),Xs(e,r),n=fh(t,e,n,i,s,r),i=hh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Mt&&i&&eh(e),e.flags|=1,cn(t,e,n,r),e.child)}function nm(t,e,n,i,r){if(xn(n)){var s=!0;ic(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Ul(t,e),Rv(e,n,i),ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=xn(n)?Zr:on.current,c=Js(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kp(e,o,i,c),or=!1;var d=e.memoizedState;o.state=d,lc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||_n.current||or?(typeof u=="function"&&(Jd(e,n,u,i),l=e.memoizedState),(a=or||$p(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=xn(n)?Zr:on.current,l=Js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Kp(e,o,i,l),or=!1,d=e.memoizedState,o.state=d,lc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||_n.current||or?(typeof p=="function"&&(Jd(e,n,p,i),g=e.memoizedState),(c=or||$p(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return rf(t,e,n,i,s,r)}function rf(t,e,n,i,r,s){Iv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gp(e,n,!1),Wi(t,e,s);i=e.stateNode,O3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),lh(t,e.containerInfo)}function im(t,e,n,i,r){return eo(),nh(r),e.flags|=256,cn(t,e,n,i),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fv(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(wt,r&1),t===null)return Zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=sf,t):gh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return k3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sf,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gh(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,i){return i!==null&&nh(i),to(e,t.child,null,n),t=gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(he(422))),Wa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=of(o),e.memoizedState=sf,s);if(!(e.mode&1))return Wa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=Pu(s,i,void 0),Wa(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),ii(i,t,r,-1))}return Mh(),i=Pu(Error(he(421))),Wa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Z3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=vr(r.nextSibling),Rn=e,Mt=!0,Qn=null,t!==null&&(Fn[On++]=Ii,Fn[On++]=Ui,Fn[On++]=Qr,Ii=t.id,Ui=t.overflow,Qr=e),e=gh(e,i.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qd(t.return,e,n)}function Nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nu(e,!0,n,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z3(t,e,n){switch(e.tag){case 3:Uv(e),eo();break;case 5:cv(e);break;case 1:xn(e.type)&&ic(e);break;case 4:lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?Fv(t,e,n):(vt(wt,wt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);vt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Wi(t,e,n)}var kv,af,zv,Bv;kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};zv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(_i.current);var s=null;switch(n){case"input":r=Cd(t,r),i=Cd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Nd(t,r),i=Nd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Dd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bv=function(t,e,n,i){n!==i&&(e.flags|=4)};function wo(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function B3(t,e,n){var i=e.pendingProps;switch(th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return xn(e.type)&&nc(),Jt(e),null;case 3:return i=e.stateNode,no(),xt(_n),xt(on),uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(mf(Qn),Qn=null))),af(t,e),Jt(e),null;case 5:ch(e);var r=Hr(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)zv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Jt(e),null}if(t=Hr(_i.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[la]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)_t(ko[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":hp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":mp(i,s),_t("invalid",i)}Dd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Da(i),pp(i,s,!0);break;case"textarea":Da(i),gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[la]=i,kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Id(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)_t(ko[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":hp(t,i),r=Cd(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":mp(t,i),r=Nd(t,i),_t("invalid",t);break;default:r=i}Dd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(t,l):typeof l=="number"&&Jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&B0(t,s,l,o))}switch(n){case"input":Da(t),pp(t,i,!1);break;case"textarea":Da(t),gp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)Bv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Hr(ua.current),Hr(_i.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Jt(e),null;case 13:if(xt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&e.mode&1&&!(e.flags&128))rv(),eo(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[pi]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Qn!==null&&(mf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?zt===0&&(zt=3):Mh())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return no(),af(t,e),t===null&&oa(e.stateNode.containerInfo),Jt(e),null;case 10:return sh(e.type._context),Jt(e),null;case 17:return xn(e.type)&&nc(),Jt(e),null;case 19:if(xt(wt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)wo(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>ro&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Jt(e),null}else 2*Dt()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=wt.current,vt(wt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function G3(t,e){switch(th(e),e.tag){case 1:return xn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),xt(_n),xt(on),uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ch(e),null;case 13:if(xt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(wt),null;case 4:return no(),null;case 10:return sh(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var ja=!1,rn=!1,V3=typeof WeakSet=="function"?WeakSet:Set,De=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function lf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var sm=!1;function H3(t,e){if(Wd=Ql,t=j1(),J0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},Ql=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Kn(e.type,y),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return g=sm,sm=!1,g}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lf(e,n,s)}r=r.next}while(r!==i)}}function Vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[la],delete e[Yd],delete e[T3],delete e[A3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var Xt=null,Zn=!1;function Zi(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:rn||ks(n,e);case 6:var i=Xt,r=Zn;Xt=null,Zi(t,e,n),Xt=i,Zn=r,Xt!==null&&(Zn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Zn?(t=Xt,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),ia(t)):wu(Xt,n.stateNode));break;case 4:i=Xt,r=Zn,Xt=n.stateNode.containerInfo,Zn=!0,Zi(t,e,n),Xt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lf(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!rn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Zi(t,e,n),rn=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V3),e.forEach(function(i){var r=Q3.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Zn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Zn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Xt===null)throw Error(he(160));Hv(s,o,r),Xt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wv(e,t),e=e.sibling}function Wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ci(t),i&4){try{Yo(3,t,t.return),Vc(3,t)}catch(y){Ct(t,t.return,y)}try{Yo(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:jn(e,t),ci(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(jn(e,t),ci(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{Jo(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f1(r,s),Id(a,o);var c=Id(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?v1(r,f):u==="dangerouslySetInnerHTML"?m1(r,f):u==="children"?Jo(r,f):B0(r,u,f,c)}switch(a){case"input":Rd(r,s);break;case"textarea":h1(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(jn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(jn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:jn(e,t),ci(t);break;case 13:jn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xh=Dt())),i&4&&am(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||u,jn(e,t),rn=c):jn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(De=t,u=t.child;u!==null;){for(f=De=u;De!==null;){switch(d=De,p=d.child,d.tag){case 0:case 11:case 14:case 15:Yo(4,d,d.return);break;case 1:ks(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){cm(f);continue}}p!==null?(p.return=d,De=p):cm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g1("display",o))}catch(y){Ct(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),ci(t),i&4&&am(t);break;case 21:break;default:jn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=om(t);df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=om(t);uf(t,a,o);break;default:throw Error(he(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W3(t,e,n){De=t,jv(t)}function jv(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ja;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=ja;var c=rn;if(ja=o,(rn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?um(r):l!==null?(l.return=o,De=l):um(r);for(;s!==null;)De=s,jv(s),s=s.sibling;De=r,ja=a,rn=c}lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):lm(t)}}function lm(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}rn||e.flags&512&&cf(e)}catch(d){Ct(e,e.return,d)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function cm(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function um(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{cf(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{cf(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var j3=Math.ceil,fc=qi.ReactCurrentDispatcher,vh=qi.ReactCurrentOwner,Gn=qi.ReactCurrentBatchConfig,rt=0,jt=null,Ot=null,$t=0,bn=0,zs=Cr(0),zt=0,pa=null,es=0,Hc=0,_h=0,$o=null,gn=null,xh=0,ro=1/0,Ni=null,hc=!1,ff=null,xr=null,Xa=!1,dr=null,pc=0,Ko=0,hf=null,Fl=-1,Ol=0;function un(){return rt&6?Dt():Fl!==-1?Fl:Fl=Dt()}function yr(t){return t.mode&1?rt&2&&$t!==0?$t&-$t:C3.transition!==null?(Ol===0&&(Ol=R1()),Ol):(t=ut,t!==0||(t=window.event,t=t===void 0?16:F1(t.type)),t):1}function ii(t,e,n,i){if(50<Ko)throw Ko=0,hf=null,Error(he(185));xa(t,n,i),(!(rt&2)||t!==jt)&&(t===jt&&(!(rt&2)&&(Hc|=n),zt===4&&lr(t,$t)),yn(t,i),n===1&&rt===0&&!(e.mode&1)&&(ro=Dt()+500,zc&&Rr()))}function yn(t,e){var n=t.callbackNode;C2(t,e);var i=Zl(t,t===jt?$t:0);if(i===0)n!==null&&xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xp(n),e===1)t.tag===0?b3(dm.bind(null,t)):tv(dm.bind(null,t)),E3(function(){!(rt&6)&&Rr()}),n=null;else{switch(P1(i)){case 1:n=j0;break;case 4:n=b1;break;case 16:n=Kl;break;case 536870912:n=C1;break;default:n=Kl}n=Jv(n,Xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xv(t,e){if(Fl=-1,Ol=0,rt&6)throw Error(he(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=Zl(t,t===jt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=rt;rt|=2;var s=Yv();(jt!==t||$t!==e)&&(Ni=null,ro=Dt()+500,qr(t,e));do try{Y3();break}catch(a){qv(t,a)}while(!0);rh(),fc.current=s,rt=r,Ot!==null?e=0:(jt=null,$t=0,e=zt)}if(e!==0){if(e===2&&(r=zd(t),r!==0&&(i=r,e=pf(t,r))),e===1)throw n=pa,qr(t,0),lr(t,i),yn(t,Dt()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!X3(r)&&(e=mc(t,i),e===2&&(s=zd(t),s!==0&&(i=s,e=pf(t,s))),e===1))throw n=pa,qr(t,0),lr(t,i),yn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Or(t,gn,Ni);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=xh+500-Dt(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qd(Or.bind(null,t,gn,Ni),e);break}Or(t,gn,Ni);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j3(i/1960))-i,10<i){t.timeoutHandle=qd(Or.bind(null,t,gn,Ni),i);break}Or(t,gn,Ni);break;case 5:Or(t,gn,Ni);break;default:throw Error(he(329))}}}return yn(t,Dt()),t.callbackNode===n?Xv.bind(null,t):null}function pf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=gn,gn=n,e!==null&&mf(e)),t}function mf(t){gn===null?gn=t:gn.push.apply(gn,t)}function X3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~_h,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function dm(t){if(rt&6)throw Error(he(327));qs();var e=Zl(t,0);if(!(e&1))return yn(t,Dt()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=zd(t);i!==0&&(e=i,n=pf(t,i))}if(n===1)throw n=pa,qr(t,0),lr(t,e),yn(t,Dt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,gn,Ni),yn(t,Dt()),null}function yh(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(ro=Dt()+500,zc&&Rr())}}function ts(t){dr!==null&&dr.tag===0&&!(rt&6)&&qs();var e=rt;rt|=1;var n=Gn.transition,i=ut;try{if(Gn.transition=null,ut=1,t)return t()}finally{ut=i,Gn.transition=n,rt=e,!(rt&6)&&Rr()}}function Sh(){bn=zs.current,xt(zs)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M3(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:no(),xt(_n),xt(on),uh();break;case 5:ch(i);break;case 4:no();break;case 13:xt(wt);break;case 19:xt(wt);break;case 10:sh(i.type._context);break;case 22:case 23:Sh()}n=n.return}if(jt=t,Ot=t=Sr(t.current,null),$t=bn=e,zt=0,pa=null,_h=Hc=es=0,gn=$o=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function qv(t,e){do{var n=Ot;try{if(rh(),Dl.current=dc,uc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(Jr=0,Ht=kt=Tt=null,qo=!1,da=0,vh.current=null,n===null||n.return===null){zt=1,pa=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Qp(o);if(p!==null){p.flags&=-257,Jp(p,o,a,s,e),p.mode&1&&Zp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Zp(s,c,e),Mh();break e}l=Error(he(426))}}else if(Mt&&a.mode&1){var v=Qp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Jp(v,o,a,s,e),nh(io(l,a));break e}}s=l=io(l,a),zt!==4&&(zt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Pv(s,l,e);jp(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xr===null||!xr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Nv(s,a,e);jp(s,M);break e}}s=s.return}while(s!==null)}Kv(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Yv(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Mh(){(zt===0||zt===3||zt===2)&&(zt=4),jt===null||!(es&268435455)&&!(Hc&268435455)||lr(jt,$t)}function mc(t,e){var n=rt;rt|=2;var i=Yv();(jt!==t||$t!==e)&&(Ni=null,qr(t,e));do try{q3();break}catch(r){qv(t,r)}while(!0);if(rh(),rt=n,fc.current=i,Ot!==null)throw Error(he(261));return jt=null,$t=0,zt}function q3(){for(;Ot!==null;)$v(Ot)}function Y3(){for(;Ot!==null&&!x2();)$v(Ot)}function $v(t){var e=Qv(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Kv(t):Ot=e,vh.current=null}function Kv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=G3(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=B3(n,e,bn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function Or(t,e,n){var i=ut,r=Gn.transition;try{Gn.transition=null,ut=1,$3(t,e,n,i)}finally{Gn.transition=r,ut=i}return null}function $3(t,e,n,i){do qs();while(dr!==null);if(rt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R2(t,s),t===jt&&(Ot=jt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Jv(Kl,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=ut;ut=1;var a=rt;rt|=4,vh.current=null,H3(t,n),Wv(n,t),m3(jd),Ql=!!Wd,jd=Wd=null,t.current=n,W3(n),y2(),rt=a,ut=o,Gn.transition=s}else t.current=n;if(Xa&&(Xa=!1,dr=t,pc=r),s=t.pendingLanes,s===0&&(xr=null),E2(n.stateNode),yn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=ff,ff=null,t;return pc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===hf?Ko++:(Ko=0,hf=t):Ko=0,Rr(),null}function qs(){if(dr!==null){var t=P1(pc),e=Gn.transition,n=ut;try{if(Gn.transition=null,ut=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,pc=0,rt&6)throw Error(he(331));var r=rt;for(rt|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var u=De;switch(u.tag){case 0:case 11:case 15:Yo(8,u,s)}var f=u.child;if(f!==null)f.return=u,De=f;else for(;De!==null;){u=De;var d=u.sibling,p=u.return;if(Gv(u),u===c){De=null;break}if(d!==null){d.return=p,De=d;break}De=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,De=h;break e}De=s.return}}var m=t.current;for(De=m;De!==null;){o=De;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,De=_;else e:for(o=m;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vc(9,a)}}catch(b){Ct(a,a.return,b)}if(a===o){De=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,De=M;break e}De=a.return}}if(rt=r,Rr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Ic,t)}catch{}i=!0}return i}finally{ut=n,Gn.transition=e}}return!1}function fm(t,e,n){e=io(n,e),e=Pv(t,e,1),t=_r(t,e,1),e=un(),t!==null&&(xa(t,1,e),yn(t,e))}function Ct(t,e,n){if(t.tag===3)fm(t,t,n);else for(;e!==null;){if(e.tag===3){fm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=io(n,t),t=Nv(e,t,1),e=_r(e,t,1),t=un(),e!==null&&(xa(e,1,t),yn(e,t));break}}e=e.return}}function K3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&($t&n)===n&&(zt===4||zt===3&&($t&130023424)===$t&&500>Dt()-xh?qr(t,0):_h|=n),yn(t,e)}function Zv(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=un();t=Hi(t,e),t!==null&&(xa(t,e,n),yn(t,n))}function Z3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zv(t,n)}function Q3(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),Zv(t,n)}var Qv;Qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,z3(t,e,n);vn=!!(t.flags&131072)}else vn=!1,Mt&&e.flags&1048576&&nv(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Js(e,on.current);Xs(e,n),r=fh(null,e,i,t,r,n);var s=hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ah(e),r.updater=Gc,e.stateNode=r,r._reactInternals=e,ef(e,i,t,n),e=rf(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&eh(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ey(i),t=Kn(i,t),r){case 0:e=nf(null,e,i,t,n);break e;case 1:e=nm(null,e,i,t,n);break e;case 11:e=em(null,e,i,t,n);break e;case 14:e=tm(null,e,i,Kn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),nf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),nm(t,e,i,r,n);case 3:e:{if(Uv(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lv(t,e),lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=io(Error(he(423)),e),e=im(t,e,i,n,r);break e}else if(i!==r){r=io(Error(he(424)),e),e=im(t,e,i,n,r);break e}else for(Cn=vr(e.stateNode.containerInfo.firstChild),Rn=e,Mt=!0,Qn=null,n=ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),i===r){e=Wi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return cv(e),t===null&&Zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xd(i,r)?o=null:s!==null&&Xd(i,s)&&(e.flags|=32),Iv(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&Zd(e),null;case 13:return Fv(t,e,n);case 4:return lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=to(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),em(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(oc,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!_n.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=Vn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),tm(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Ul(t,e),e.tag=1,xn(i)?(t=!0,ic(e)):t=!1,Xs(e,n),Rv(e,i,r),ef(e,i,r,n),rf(null,e,i,!0,t,n);case 19:return Ov(t,e,n);case 22:return Dv(t,e,n)}throw Error(he(156,e.tag))};function Jv(t,e){return A1(t,e)}function J3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new J3(t,e,n,i)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ey(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V0)return 11;if(t===H0)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return Yr(n.children,r,s,e);case G0:o=8,r|=8;break;case wd:return t=Bn(12,n,e,r|2),t.elementType=wd,t.lanes=s,t;case Td:return t=Bn(13,n,e,r),t.elementType=Td,t.lanes=s,t;case Ad:return t=Bn(19,n,e,r),t.elementType=Ad,t.lanes=s,t;case c1:return Wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a1:o=10;break e;case l1:o=9;break e;case V0:o=11;break e;case H0:o=14;break e;case sr:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Wc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=c1,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ty(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,i,r,s,o,a,l){return t=new ty(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(s),t}function ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return wr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(xn(n))return ev(t,n,e)}return e}function t_(t,e,n,i,r,s,o,a,l){return t=wh(n,i,!0,t,r,s,o,a,l),t.context=e_(null),n=t.current,i=un(),r=yr(n),s=ki(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,xa(t,r,i),yn(t,i),t}function jc(t,e,n,i){var r=e.current,s=un(),o=yr(r);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(ii(t,r,o,s),Ll(t,r,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function iy(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ah(t){this._internalRoot=t}Xc.prototype.render=Ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));jc(t,e,null,null)};Xc.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){jc(null,t,null,null)}),e[Vi]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=D1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&U1(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pm(){}function ry(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(o);s.call(c)}}var o=t_(e,i,t,0,null,!1,!1,"",pm);return t._reactRootContainer=o,t[Vi]=o.current,oa(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=wh(t,0,!1,null,null,!1,!1,"",pm);return t._reactRootContainer=l,t[Vi]=l.current,oa(t.nodeType===8?t.parentNode:t),ts(function(){jc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gc(o);a.call(l)}}jc(e,o,t,r)}else o=ry(n,e,t,r,i);return gc(o)}N1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oo(e.pendingLanes);n!==0&&(X0(e,n|1),yn(e,Dt()),!(rt&6)&&(ro=Dt()+500,Rr()))}break;case 13:ts(function(){var i=Hi(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),Th(t,1)}};q0=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}Th(t,134217728)}};L1=function(t){if(t.tag===13){var e=yr(t),n=Hi(t,e);if(n!==null){var i=un();ii(n,t,e,i)}Th(t,e)}};D1=function(){return ut};I1=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Fd=function(t,e,n){switch(e){case"input":if(Rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kc(i);if(!r)throw Error(he(90));d1(i),Rd(i,r)}}}break;case"textarea":h1(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};y1=yh;S1=ts;var sy={usingClientEntryPoint:!1,Events:[Sa,Ds,kc,_1,x1,yh]},To={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oy={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w1(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Ic=qa.inject(oy),vi=qa}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(he(200));return ny(t,e,null,n)};Nn.createRoot=function(t,e){if(!bh(t))throw Error(he(299));var n=!1,i="",r=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,oa(t.nodeType===8?t.parentNode:t),new Ah(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=w1(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return ts(t)};Nn.hydrate=function(t,e,n){if(!qc(e))throw Error(he(200));return Yc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Nn.render=function(t,e,n){if(!qc(e))throw Error(he(200));return Yc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!qc(t))throw Error(he(40));return t._reactRootContainer?(ts(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};Nn.unstable_batchedUpdates=yh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!qc(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Yc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(t){console.error(t)}}i_(),i1.exports=Nn;var ay=i1.exports,r_,mm=ay;r_=mm.createRoot,mm.hydrateRoot;function ly(){var e;const t=n=>!!n&&n!=="null"&&n!=="file://";try{const n=(e=window.location.ancestorOrigins)==null?void 0:e[0];if(t(n))return n}catch{}try{if(document.referrer){const n=new URL(document.referrer).origin;if(t(n))return n}}catch{}return"*"}var Nr=ly(),Ya=3e5;function cy(){return Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function gm(t){const e=t==null?void 0:t.reason;return e instanceof Error?e:new DOMException("The stream was aborted.","AbortError")}function uy(t){const e=document.documentElement.style;for(const[n,i]of Object.entries(t))n.startsWith("--")&&e.setProperty(n,i)}function s_(t,e={}){const n=e.apply!==!1,i=r=>{if(r.source!==window.parent)return;const s=r.data;!s||s.type!=="MNEMO_CONFIG_UPDATE"||(n&&(s.theme&&document.documentElement.setAttribute("data-theme",s.theme),s.tokens&&uy(s.tokens)),t==null||t({theme:s.theme,lang:s.lang,tokens:s.tokens,zoom:s.zoom,version:s.version,update:s.update}))};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)}var vm=["orbit","pan","depth","zoom","recenter","point","select","next","prev","action"],$c=class{constructor(t){op(this,"pluginId");this.pluginId=t}invoke(t,e,n=Ya){return new Promise((i,r)=>{if(window.parent===window){r(new Error(`No Mnemosyne host: "${t}" was invoked outside the shell (this page is not embedded in a host iframe).`));return}const s=Math.random().toString(36).substring(7);let o,a=!1;const l=u=>{a||(a=!0,window.removeEventListener("message",c),o!==void 0&&window.clearTimeout(o),u())},c=u=>{u.source===window.parent&&(!u.data||u.data.type!=="MNEMO_PLUGIN_REPLY"||u.data.messageId===s&&l(()=>{u.data.success?i(u.data.data):r(new Error(u.data.error||"Unknown host error"))}))};window.addEventListener("message",c),n>0&&(o=window.setTimeout(()=>l(()=>r(new Error(`Host did not reply to "${t}" within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:s,action:t,payload:e},Nr)})}stream(t,e,n={}){const{onChunk:i,signal:r}=n,s=n.timeoutMs??Ya;return new Promise((o,a)=>{if(window.parent===window){a(new Error(`No Mnemosyne host: "${t}" was streamed outside the shell (this page is not embedded in a host iframe).`));return}if(r!=null&&r.aborted){a(gm(r));return}const l=cy();let c="",u,f=!1;const d=()=>{u!==void 0&&(window.clearTimeout(u),u=void 0)},p=()=>{s<=0||(d(),u=window.setTimeout(()=>g(()=>a(new Error(`Host stalled on "${t}" — no chunk within ${Math.round(s/1e3)}s`))),s))},g=h=>{f||(f=!0,window.removeEventListener("message",v),r&&r.removeEventListener("abort",y),d(),h())},y=()=>{try{window.parent.postMessage({type:"MNEMO_PLUGIN_CANCEL",pluginId:this.pluginId,messageId:l},Nr)}catch{}g(()=>a(gm(r)))},v=h=>{if(h.source!==window.parent)return;const m=h.data;if(!(!m||m.messageId!==l))switch(m.type){case"MNEMO_PLUGIN_CHUNK":{if(f)return;const _=typeof m.chunk=="string"?m.chunk:"";if(_){c+=_;try{i==null||i(_)}catch(M){console.error("[MNEMO-SDK] onChunk consumer threw:",M)}}p();break}case"MNEMO_PLUGIN_DONE":g(()=>o({text:c,data:m.data}));break;case"MNEMO_PLUGIN_ERROR":g(()=>a(new Error(m.error||"Unknown host stream error")));break}};window.addEventListener("message",v),r&&r.addEventListener("abort",y),p(),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:l,action:t,payload:e,stream:!0},Nr)})}inferModel(t){return this.invoke("model.infer",t)}showUpdateInHub(){return this.invoke("hub.showUpdate")}getModelConfig(){return this.invoke("model.getConfig")}status(){return this.invoke("mnemosyne.status")}query(t){return this.invoke("mnemosyne.query",{query:t})}ingest(t,e="SOCIAL_NODE"){return this.invoke("mnemosyne.ingest",{content:t,spineType:e})}socialIngest(t,e,n="SOCIAL_NODE"){return this.invoke("social.ingest",{vault:t,content:e,spineType:n})}socialQuery(t,e=100){return this.invoke("social.query",{vault:t,limit:e})}getTopologyMap(t){return this.invoke("getTopologyMap",t)}getScannedPapers(){return this.invoke("vault.getScannedPapers")}ensureSandbox(){return this.invoke("vault.sandbox.ensure",{})}describeVaultTile(t){return this.invoke("vault.sandbox.describeTile",t)}scanTree(){return this.invoke("vault.scanTree")}setDocWatch(t,e){return this.invoke("vault.setDocWatch",{path:t,config:e})}removeDocWatch(t,e){return this.invoke("vault.removeDocWatch",{path:t,watchPath:e})}selectFolder(t){return this.invoke("dialog.selectFolder",t,0)}selectFile(t){return this.invoke("dialog.selectFile",{filters:t},0)}readFile(t){return this.invoke("dialog.readFile",{filePath:t})}writeFile(t,e){return this.invoke("dialog.writeFile",{filePath:t,content:e})}readDir(t){return this.invoke("dialog.readDir",{dirPath:t})}openInOS(t){return this.invoke("dialog.openInOS",{filePath:t})}deleteProjectDir(t){return this.invoke("dialog.deleteProjectDir",{dirPath:t})}forgetSandbox(t){return this.invoke("vault.sandbox.forget",{ids:t})}getLinkedDev(){return this.invoke("plugins.getLinkedDev")}linkDev(t){return this.invoke("plugins.linkDev",{dirPath:t})}unlinkDev(t){return this.invoke("plugins.unlinkDev",{dirPath:t})}launchPlugin(t){return this.invoke("plugins.launch",{id:t})}onGestures(t,e=Ya){const n=Math.random().toString(36).substring(7);let i=!1,r,s=null;const o=new Promise((u,f)=>{s={resolve:u,reject:f}});o.catch(()=>{});const a=u=>{r!==void 0&&(window.clearTimeout(r),r=void 0);const f=s;s=null,f&&u(f)},l=u=>{if(u.source!==window.parent)return;const f=u.data;if(!(!f||typeof f.type!="string")){if(f.type==="MNEMO_GESTURE_READY"&&f.requestId===n){const d=Array.isArray(f.takes)?f.takes.filter(g=>typeof g=="string"&&vm.includes(g)):[],p=Array.isArray(f.actions)?f.actions.filter(g=>typeof g=="string"):[];a(g=>g.resolve({takes:d,actions:p}));return}if(f.type==="MNEMO_GESTURE_REFUSED"&&f.requestId===n){window.removeEventListener("message",l),a(d=>d.reject(new Error(typeof f.error=="string"?f.error:"The host refused the gestures")));return}if(f.type==="MNEMO_GESTURE"&&f.requestId===n&&!i){const d=f.gesture;if(!d||!vm.includes(d.kind))return;const p=t[d.kind];if(!p)return;try{p(d)}catch(g){console.error(`[MnemoCartridgeSDK] the "${d.kind}" gesture handler threw:`,g)}}}},c=()=>{i||(i=!0,window.removeEventListener("message",l),a(u=>u.reject(new Error("Gestures were turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_GESTURE_UNSUBSCRIBE",pluginId:this.pluginId,requestId:n},Nr))};return window.parent===window?(i=!0,a(u=>u.reject(new Error("No Mnemosyne host: gestures were asked outside the shell (this page is not embedded in a host iframe)."))),{ready:o,off:c}):(window.addEventListener("message",l),e>0&&(r=window.setTimeout(()=>a(u=>u.reject(new Error(`Host did not answer the gesture request within ${Math.round(e/1e3)}s`))),e)),window.parent.postMessage({type:"MNEMO_GESTURE_SUBSCRIBE",pluginId:this.pluginId,requestId:n},Nr),{ready:o,off:c})}onMouthWatch(t,e=Ya){const n=Math.random().toString(36).substring(7);let i=!1,r,s=null;const o=new Promise((u,f)=>{s={resolve:u,reject:f}});o.catch(()=>{});const a=u=>{r!==void 0&&(window.clearTimeout(r),r=void 0);const f=s;s=null,f&&u(f)},l=u=>{var d;if(u.source!==window.parent)return;const f=u.data;if(!(!f||typeof f.type!="string"||f.requestId!==n)){if(f.type==="MNEMO_MOUTH_READY")a(p=>p.resolve({camera:f.camera===!0}));else if(f.type==="MNEMO_MOUTH_REFUSED")window.removeEventListener("message",l),a(p=>p.reject(new Error(typeof f.error=="string"?f.error:"The host refused the camera observation")));else if(f.type==="MNEMO_MOUTH_CAMERA"&&!i)try{(d=t.onCamera)==null||d.call(t,f.camera===!0)}catch(p){console.error("[MnemoCartridgeSDK] the onCamera handler threw:",p)}else if(f.type==="MNEMO_MOUTH_CONTACT"&&!i){const p=f.contact;if(!p||!Number.isFinite(p.at)||!Number.isFinite(p.ms))return;try{t.contact({at:p.at,ms:p.ms})}catch(g){console.error("[MnemoCartridgeSDK] the contact handler threw:",g)}}}},c=()=>{i||(i=!0,window.removeEventListener("message",l),a(u=>u.reject(new Error("The observation was turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_MOUTH_UNSUBSCRIBE",pluginId:this.pluginId,requestId:n},Nr))};return window.parent===window?(i=!0,a(u=>u.reject(new Error("No Mnemosyne host: the camera observation was asked outside the shell."))),{ready:o,off:c}):(window.addEventListener("message",l),e>0&&(r=window.setTimeout(()=>a(u=>u.reject(new Error(`Host did not answer the camera observation request within ${Math.round(e/1e3)}s`))),e)),window.parent.postMessage({type:"MNEMO_MOUTH_SUBSCRIBE",pluginId:this.pluginId,requestId:n},Nr),{ready:o,off:c})}getSystemMetrics(){return this.invoke("metrics.get")}creditsStatus(){return this.invoke("credits.status")}};function _m(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)?t:new URL(t.replace(/^\/+/,""),document.baseURI).toString()}const xm="MCOS",ym=1,Iu=48,dy=`
`,fs=t=>Number.isFinite(t)?t:null;function fy(t){if(t.byteLength<Iu)throw new Error(`catalog.bin is ${t.byteLength} bytes; a header alone is ${Iu}`);const e=new DataView(t),n=String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3));if(n!==xm)throw new Error(`catalog.bin does not start with ${xm} (got ${JSON.stringify(n)})`);const i=e.getUint16(4,!0);if(i!==ym)throw new Error(`catalog.bin is version ${i}, this build reads ${ym}`);const r=e.getUint32(8,!0),s=e.getUint32(12,!0),o=e.getFloat32(16,!0),a=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),u=e.getUint32(32,!0),f=e.getUint32(36,!0),d=e.getUint32(40,!0),p=e.getUint32(44,!0),g=Iu,y=g+(u+3&-4),v=y+r*d,h=v+s*p;if(t.byteLength<h)throw new Error(`catalog.bin is truncated: header describes ${h} bytes, file is ${t.byteLength}`);const m=new TextDecoder().decode(new Uint8Array(t,g,u)).split(dy);if(m.length!==f)throw new Error(`catalog.bin string table says ${f} entries, blob holds ${m.length}`);const _=E=>m[E]??"",M=new Array(r);for(let E=0;E<r;E++){const T=y+E*d;M[E]={i:E,ra:e.getFloat32(T+0,!0),dec:e.getFloat32(T+4,!0),mag:e.getFloat32(T+8,!0),absmag:fs(e.getFloat32(T+12,!0)),dist:fs(e.getFloat32(T+16,!0)),ci:fs(e.getFloat32(T+20,!0)),hip:e.getInt32(T+24,!0)||null,hd:e.getInt32(T+28,!0)||null,con:_(e.getUint32(T+32,!0)),spect:_(e.getUint32(T+36,!0)),proper:_(e.getUint32(T+40,!0)),desig:_(e.getUint32(T+44,!0)),gliese:_(e.getUint32(T+48,!0))}}const b=new Array(s);for(let E=0;E<s;E++){const T=v+E*p;b[E]={i:E,ra:e.getFloat32(T+0,!0),dec:e.getFloat32(T+4,!0),mag:fs(e.getFloat32(T+8,!0)),majAx:fs(e.getFloat32(T+12,!0)),minAx:fs(e.getFloat32(T+16,!0)),con:_(e.getUint32(T+20,!0)),type:_(e.getUint32(T+24,!0)),name:_(e.getUint32(T+28,!0)),common:_(e.getUint32(T+32,!0)),messier:e.getUint16(T+36,!0)||null}}return{stars:M,dsos:b,truncation:{magLimit:o,starsOmitted:a,starsNoDistance:l,dsoOmitted:c}}}function hy(t,e){return e==="en"?t.name:t.i18n[e]||t.name}const py={Alp:"α",Bet:"β",Gam:"γ",Del:"δ",Eps:"ε",Zet:"ζ",Eta:"η",The:"θ",Iot:"ι",Kap:"κ",Lam:"λ",Mu:"μ",Nu:"ν",Xi:"ξ",Omi:"ο",Pi:"π",Rho:"ρ",Sig:"σ",Tau:"τ",Ups:"υ",Phi:"φ",Chi:"χ",Psi:"ψ",Ome:"ω"};function o_(t){const e=(t??"").trim();if(!e)return"";const n=e.replace(/\s+/g," "),i=/^(\d*)\s*(?:([A-Za-z]{2,3})\s*(\d?))?\s*([A-Z][A-Za-z]{2})$/.exec(e);if(!i)return n;const[,r,s,o,a]=i;if(!s)return r?`${r} ${a}`:n;const l=py[s];return l?[r||"",`${l}${o??""}`,a].filter(Boolean).join(" "):n}function Ea(t){return t.hip?`HIP ${t.hip}`:t.hd?`HD ${t.hd}`:t.gliese?t.gliese:`HYG ${t.i}`}const my=t=>t.startsWith("HYG ");function gy(t){const e=[],n=Ea(t);t.proper&&e.push(t.proper);const i=o_(t.desig);return i&&e.push(i),t.hip&&e.push(`HIP ${t.hip}`),t.hd&&e.push(`HD ${t.hd}`),t.gliese&&e.push(t.gliese),e.filter((r,s)=>r!==n&&e.indexOf(r)===s)}const a_=(t,e,n)=>t.filter(i=>i!==e&&i!==n);function gf(t){const e=Ea(t),n=t.proper||o_(t.desig)||e;return{id:e,name:n,kind:"star",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:a_(gy(t),e,n),star:t}}function wa(t){return t.name||(t.messier?`M${t.messier}`:`OpenNGC ${t.i}`)}function vy(t){const e=[];t.common&&e.push(t.common),t.messier&&e.push(`M${t.messier}`);const n=wa(t);return e.filter((i,r)=>i!==n&&e.indexOf(i)===r)}function vf(t){const e=wa(t),n=t.common||(t.messier?`M${t.messier}`:t.name);return{id:e,name:n,kind:"dso",ra:t.ra,dec:t.dec,mag:t.mag,con:t.con,aliases:a_(vy(t),e,n),dso:t}}function _y(t){const e=[t.name,t.id,...t.aliases].map(i=>i.trim()).filter((i,r,s)=>i&&s.indexOf(i)===r),n=e.slice(1).join(", ");return`What do my own notes say about ${e[0]}`+(n?` (also known as ${n})`:"")+"? Answer only from my memory. If my memory holds nothing about it, say exactly: NOTHING IN MEMORY."}const _f=Math.PI/180,Ci=100;function $n(t,e,n=Ci){const i=t*_f,r=e*_f,s=Math.cos(r);return{x:n*s*Math.cos(i),y:n*Math.sin(r),z:-n*s*Math.sin(i)}}function xy(t,e,n=1){const i=Math.min(e,t),r=(e-i)/(e+2);return n*(.9+7*r*r)}function yy(t){if(t===null||!Number.isFinite(t))return null;const e=Math.min(2,Math.max(-.4,t)),n=Math.min(1,Math.max(0,.63+.55*e-.09*e*e)),i=Math.min(1,Math.max(0,.83-.03*e-.1*e*e)),r=Math.min(1,Math.max(0,1-.55*e+.06*e*e));return[n,i,r]}function l_(t,e){const n=t[0]*e.x+t[4]*e.y+t[8]*e.z+t[12],i=t[1]*e.x+t[5]*e.y+t[9]*e.z+t[13],r=t[3]*e.x+t[7]*e.y+t[11]*e.z+t[15];if(r<=0)return{x:0,y:0,visible:!1};const s=n/r,o=i/r;return{x:s,y:o,visible:s>=-1&&s<=1&&o>=-1&&o<=1}}function Sy(t,e,n,i,r=14){let s=null,o=1/0;for(let a=0;a<t.length;a++){const l=t[a],c=l_(e,$n(l.ra,l.dec));if(!c.visible)continue;const u=(c.x-n.x)*i.width/2,f=(c.y-n.y)*i.height/2,d=Math.hypot(u,f);d>r||(!s||d<s.distance-.5||Math.abs(d-s.distance)<=.5&&l.rank<o)&&(s={index:a,distance:d},o=l.rank)}return s}const c_=2,u_=110,Ch=t=>Math.min(u_,Math.max(c_,t));function d_(t,e,n,i){const r=t.fov/Math.max(1,i),s=t.ra-e*r/Math.max(.2,Math.cos(t.dec*_f)),o=t.dec+n*r;return{ra:(s%360+360)%360,dec:Math.min(90,Math.max(-90,o)),fov:t.fov}}function My(t,e){return{...t,fov:Ch(t.fov*Math.pow(1.15,e))}}const Uu=(t,e,n)=>({...t,ra:(e%360+360)%360,dec:Math.min(90,Math.max(-90,n))});function Ey(t){const e=Math.round((t%360+360)%360/15*36e3)%864e3,n=Math.floor(e/36e3),i=Math.floor(e%36e3/600),r=e%600/10;return`${n}h ${String(i).padStart(2,"0")}m ${r.toFixed(1).padStart(4,"0")}s`}function wy(t){const e=t<0?"-":"+",n=Math.round(Math.abs(t)*3600),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60;return`${e}${i}° ${String(r).padStart(2,"0")}′ ${String(s).padStart(2,"0")}″`}function Ty(t){if(t===null||!Number.isFinite(t)||t<=0)return null;const e=t*3.261563777;return e<10?`${e.toFixed(2)} ly`:e<1e3?`${e.toFixed(0)} ly`:`${Math.round(e/100)/10} kly`}/**
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
 */const f_=173.1446326846693,Di=14959787069098932e-8,ct=.017453292519943295,Sm=.26179938779914946,xi=57.29577951308232,h_=3.819718634205488,Ay=365.24217,Mm=new Date("2000-01-01T12:00:00Z"),Ri=2*Math.PI,Qi=3600*(180/Math.PI),Bs=484813681109536e-20,p_=180*60*60,by=2*p_,Em=7292115e-11,Cy=p_/Math.PI,Ry=-.17-5*Math.log10(Cy),m_=24*3600,Py=.9972695717592592,Ny=695700,Ly=Ny/Di,Ys=.996647180302104,Dy=Ys*Ys,ma=6378.1366,Iy=ma/Di,Uy=1738.1,Fy=Uy/Di,Oy=34/60,g_=81.30056,Rh=.0002959122082855911,xf=2825345909524226e-22,yf=8459715185680659e-23,Sf=1292024916781969e-23,Mf=1524358900784276e-23;function vc(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function Rt(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function hs(t){return t-Math.floor(t)}function ky(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:xi*Math.acos(r)}var ve;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ve||(ve={}));const zy=[ve.Star1,ve.Star2,ve.Star3,ve.Star4,ve.Star5,ve.Star6,ve.Star7,ve.Star8],By=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function Gy(t){const e=zy.indexOf(t);return e>=0?By[e]:null}function Ph(t){const e=Gy(t);return e&&e.dist>0?e:null}var Wn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Wn||(Wn={}));const Fi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Vy(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/Ay;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let Hy=Vy;function wm(t){return t+Hy(t)/86400}class Mr{constructor(e){if(e instanceof Mr){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Mm.getTime())/n,this.tt=wm(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Mm.getTime()+e*n),this.ut=e,this.tt=wm(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new Mr(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Mr(this.ut+e)}}function Wy(t,e,n){return new Mr(t.ut+n*(e.ut-t.ut))}function En(t){return t instanceof Mr?t:new Mr(t)}function jy(t){function e(d){return d%by*Bs}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,f=2*(r-s+o);return a=Math.sin(f),l=Math.cos(f),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,f=2*(r+o),a=Math.sin(f),l=Math.cos(f),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,f=2*o,a=Math.sin(f),l=Math.cos(f),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function v_(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var $a;function Nh(t){if(!$a||Math.abs($a.tt-t.tt)>1e-6){const e=jy(t),n=v_(t),i=n+e.deps/3600;$a={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*ct)/15,mobl:n,tobl:i}}return $a}function Xy(t,e){const n=t*ct,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function qy(t,e){return Xy(v_(t),e)}function Yy(t){const e=t.tt/36525;function n(K,de){const Be=[];let ke;for(ke=0;ke<=de-K;++ke)Be.push(0);return{min:K,array:Be}}function i(K,de,Be,ke){const Ce=[];for(let st=0;st<=de-K;++st)Ce.push(n(Be,ke));return{min:K,array:Ce}}function r(K,de,Be){const ke=K.array[de-K.min];return ke.array[Be-ke.min]}function s(K,de,Be,ke){const Ce=K.array[de-K.min];Ce.array[Be-Ce.min]=ke}let o,a,l,c,u,f,d,p,g,y,v,h,m,_,M,b,E,T,x,C,L,N,F,Z=i(-6,6,1,4),te=i(-6,6,1,4);function I(K,de){return r(Z,K,de)}function X(K,de){return r(te,K,de)}function k(K,de,Be){return s(Z,K,de,Be)}function U(K,de,Be){return s(te,K,de,Be)}function Y(K,de,Be,ke,Ce){Ce(K*Be-de*ke,de*Be+K*ke)}function V(K){return Math.sin(Ri*K)}d=e*e,g=0,F=0,v=0,h=3422.7;var z=V(.19833+.05611*e),ee=V(.27869+.04508*e),J=V(.16827-.36903*e),fe=V(.34734-5.37261*e),_e=V(.10498-5.37899*e),H=V(.42681-.41855*e),ae=V(.14943-5.37511*e);for(T=.84*z+.31*ee+14.27*J+7.26*fe+.28*_e+.24*H,x=2.94*z+.31*ee+14.27*J+9.34*fe+1.12*_e+.83*H,C=-6.4*z-1.89*H,L=.21*z+.31*ee+14.27*J-88.7*fe-15.3*_e+.24*H-1.86*ae,N=T-C,p=-3332e-9*V(.59734-5.37261*e)-539e-9*V(.35498-5.37899*e)-64e-9*V(.39943-5.37511*e),m=Ri*hs(.60643382+1336.85522467*e-313e-8*d)+T/Qi,_=Ri*hs(.37489701+1325.55240982*e+2565e-8*d)+x/Qi,M=Ri*hs(.99312619+99.99735956*e-44e-8*d)+C/Qi,b=Ri*hs(.25909118+1342.2278298*e-892e-8*d)+L/Qi,E=Ri*hs(.82736186+1236.85308708*e-397e-8*d)+N/Qi,u=1;u<=4;++u){switch(u){case 1:l=_,a=4,c=1.000002208;break;case 2:l=M,a=3,c=.997504612-.002495388*e;break;case 3:l=b,a=4,c=1.000002708+139.978*p;break;case 4:l=E,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(k(0,u,1),k(1,u,Math.cos(l)*c),U(0,u,0),U(1,u,Math.sin(l)*c),f=2;f<=a;++f)Y(I(f-1,u),X(f-1,u),I(1,u),X(1,u),(K,de)=>(k(f,u,K),U(f,u,de)));for(f=1;f<=a;++f)k(-f,u,I(f,u)),U(-f,u,-X(f,u))}function ce(K,de,Be,ke){for(var Ce={x:1,y:0},st=[0,K,de,Be,ke],Qe=1;Qe<=4;++Qe)st[Qe]!==0&&Y(Ce.x,Ce.y,I(st[Qe],Qe),X(st[Qe],Qe),(Et,D)=>(Ce.x=Et,Ce.y=D));return Ce}function G(K,de,Be,ke,Ce,st,Qe,Et){var D=ce(Ce,st,Qe,Et);g+=K*D.y,F+=de*D.y,v+=Be*D.x,h+=ke*D.x}G(13.902,14.06,-.001,.2607,0,0,0,4),G(.403,-4.01,.394,.0023,0,0,0,3),G(2369.912,2373.36,.601,28.2333,0,0,0,2),G(-125.154,-112.79,-.725,-.9781,0,0,0,1),G(1.979,6.98,-.445,.0433,1,0,0,4),G(191.953,192.72,.029,3.0861,1,0,0,2),G(-8.466,-13.51,.455,-.1093,1,0,0,1),G(22639.5,22609.07,.079,186.5398,1,0,0,0),G(18.609,3.59,-.094,.0118,1,0,0,-1),G(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),G(3.215,5.44,.192,-.0386,1,0,0,-3),G(-38.428,-38.64,.001,.6008,1,0,0,-4),G(-.393,-1.43,-.092,.0086,1,0,0,-6),G(-.289,-1.59,.123,-.0053,0,1,0,4),G(-24.42,-25.1,.04,-.3,0,1,0,2),G(18.023,17.93,.007,.1494,0,1,0,1),G(-668.146,-126.98,-1.302,-.3997,0,1,0,0),G(.56,.32,-.001,-.0037,0,1,0,-1),G(-165.145,-165.06,.054,1.9178,0,1,0,-2),G(-1.877,-6.46,-.416,.0339,0,1,0,-4),G(.213,1.02,-.074,.0054,2,0,0,4),G(14.387,14.78,-.017,.2833,2,0,0,2),G(-.586,-1.2,.054,-.01,2,0,0,1),G(769.016,767.96,.107,10.1657,2,0,0,0),G(1.75,2.01,-.018,.0155,2,0,0,-1),G(-211.656,-152.53,5.679,-.3039,2,0,0,-2),G(1.225,.91,-.03,-.0088,2,0,0,-3),G(-30.773,-34.07,-.308,.3722,2,0,0,-4),G(-.57,-1.4,-.074,.0109,2,0,0,-6),G(-2.921,-11.75,.787,-.0484,1,1,0,2),G(1.267,1.52,-.022,.0164,1,1,0,1),G(-109.673,-115.18,.461,-.949,1,1,0,0),G(-205.962,-182.36,2.056,1.4437,1,1,0,-2),G(.233,.36,.012,-.0025,1,1,0,-3),G(-4.391,-9.66,-.471,.0673,1,1,0,-4),G(.283,1.53,-.111,.006,1,-1,0,4),G(14.577,31.7,-1.54,.2302,1,-1,0,2),G(147.687,138.76,.679,1.1528,1,-1,0,0),G(-1.089,.55,.021,0,1,-1,0,-1),G(28.475,23.59,-.443,-.2257,1,-1,0,-2),G(-.276,-.38,-.006,-.0036,1,-1,0,-3),G(.636,2.27,.146,-.0102,1,-1,0,-4),G(-.189,-1.68,.131,-.0028,0,2,0,2),G(-7.486,-.66,-.037,-.0086,0,2,0,0),G(-8.096,-16.35,-.74,.0918,0,2,0,-2),G(-5.741,-.04,0,-9e-4,0,0,2,2),G(.255,0,0,0,0,0,2,1),G(-411.608,-.2,0,-.0124,0,0,2,0),G(.584,.84,0,.0071,0,0,2,-1),G(-55.173,-52.14,0,-.1052,0,0,2,-2),G(.254,.25,0,-.0017,0,0,2,-3),G(.025,-1.67,0,.0031,0,0,2,-4),G(1.06,2.96,-.166,.0243,3,0,0,2),G(36.124,50.64,-1.3,.6215,3,0,0,0),G(-13.193,-16.4,.258,-.1187,3,0,0,-2),G(-1.187,-.74,.042,.0074,3,0,0,-4),G(-.293,-.31,-.002,.0046,3,0,0,-6),G(-.29,-1.45,.116,-.0051,2,1,0,2),G(-7.649,-10.56,.259,-.1038,2,1,0,0),G(-8.627,-7.59,.078,-.0192,2,1,0,-2),G(-2.74,-2.54,.022,.0324,2,1,0,-4),G(1.181,3.32,-.212,.0213,2,-1,0,2),G(9.703,11.67,-.151,.1268,2,-1,0,0),G(-.352,-.37,.001,-.0028,2,-1,0,-1),G(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),G(.36,.2,-.012,-.0043,2,-1,0,-4),G(-1.167,-1.25,.008,-.0106,1,2,0,0),G(-7.412,-6.12,.117,.0484,1,2,0,-2),G(-.311,-.65,-.032,.0044,1,2,0,-4),G(.757,1.82,-.105,.0112,1,-2,0,2),G(2.58,2.32,.027,.0196,1,-2,0,0),G(2.533,2.4,-.014,-.0212,1,-2,0,-2),G(-.344,-.57,-.025,.0036,0,3,0,-2),G(-.992,-.02,0,0,1,0,2,2),G(-45.099,-.02,0,-.001,1,0,2,0),G(-.179,-9.52,0,-.0833,1,0,2,-2),G(-.301,-.33,0,.0014,1,0,2,-4),G(-6.382,-3.37,0,-.0481,1,0,-2,2),G(39.528,85.13,0,-.7136,1,0,-2,0),G(9.366,.71,0,-.0112,1,0,-2,-2),G(.202,.02,0,0,1,0,-2,-4),G(.415,.1,0,.0013,0,1,2,0),G(-2.152,-2.26,0,-.0066,0,1,2,-2),G(-1.44,-1.3,0,.0014,0,1,-2,2),G(.384,-.04,0,0,0,1,-2,-2),G(1.938,3.6,-.145,.0401,4,0,0,0),G(-.952,-1.58,.052,-.013,4,0,0,-2),G(-.551,-.94,.032,-.0097,3,1,0,0),G(-.482,-.57,.005,-.0045,3,1,0,-2),G(.681,.96,-.026,.0115,3,-1,0,0),G(-.297,-.27,.002,-9e-4,2,2,0,-2),G(.254,.21,-.003,0,2,-2,0,-2),G(-.25,-.22,.004,.0014,1,3,0,-2),G(-3.996,0,0,4e-4,2,0,2,0),G(.557,-.75,0,-.009,2,0,2,-2),G(-.459,-.38,0,-.0053,2,0,-2,2),G(-1.298,.74,0,4e-4,2,0,-2,0),G(.538,1.14,0,-.0141,2,0,-2,-2),G(.263,.02,0,0,1,1,2,0),G(.426,.07,0,-6e-4,1,1,-2,-2),G(-.304,.03,0,3e-4,1,-1,2,0),G(-.372,-.19,0,-.0027,1,-1,-2,2),G(.418,0,0,0,0,0,4,0),G(-.33,-.04,0,0,3,0,2,0);function Ue(K,de,Be,ke,Ce){return K*ce(de,Be,ke,Ce).y}y=0,y+=Ue(-526.069,0,0,1,-2),y+=Ue(-3.352,0,0,1,-4),y+=Ue(44.297,1,0,1,-2),y+=Ue(-6,1,0,1,-4),y+=Ue(20.599,-1,0,1,0),y+=Ue(-30.598,-1,0,1,-2),y+=Ue(-24.649,-2,0,1,0),y+=Ue(-2,-2,0,1,-2),y+=Ue(-22.571,0,1,1,-2),y+=Ue(10.985,0,-1,1,-2),g+=.82*V(.7736-62.5512*e)+.31*V(.0466-125.1025*e)+.35*V(.5785-25.1042*e)+.66*V(.4591+1335.8075*e)+.64*V(.313-91.568*e)+1.14*V(.148+1331.2898*e)+.21*V(.5918+1056.5859*e)+.44*V(.5784+1322.8595*e)+.24*V(.2275-5.7374*e)+.28*V(.2965+2.6929*e)+.33*V(.3132+6.3368*e),o=b+F/Qi;let Ve=(1.000002708+139.978*p)*(18518.511+1.189+v)*Math.sin(o)-6.24*Math.sin(3*o)+y;return{geo_eclip_lon:Ri*hs((m+g/Qi)/Ri),geo_eclip_lat:Math.PI/(180*3600)*Ve,distance_au:Qi*Iy/(.999953253*h)}}function __(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function _c(t,e,n){const i=$y(e,n);return __(i,t)}function $y(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=Bs,r*=Bs,s*=Bs,o*=Bs;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),f=Math.sin(-s),d=Math.cos(-s),p=Math.sin(o),g=Math.cos(o),y=g*u-c*p*d,v=g*c*l+p*d*u*l-a*p*f,h=g*c*a+p*d*u*a+l*p*f,m=-p*u-c*g*d,_=-p*c*l+g*d*u*l-a*g*f,M=-p*c*a+g*d*u*a+l*g*f,b=c*f,E=-f*u*l-a*d,T=-f*u*a+d*l;if(e===Wn.Into2000)return new xc([[y,v,h],[m,_,M],[b,E,T]]);if(e===Wn.From2000)return new xc([[y,m,b],[v,_,E],[h,M,T]]);throw"Invalid precess direction"}function Ky(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let Ka;function x_(t){if(!Ka||Ka.tt!==t.tt){const e=t.tt/36525;let n=15*Nh(t).ee;const i=Ky(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),Ka={tt:t.tt,st:s}}return Ka.st}function Zy(t,e){const n=t.latitude*ct,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,Ys*i),o=Dy*s,a=t.height/1e3,l=ma*s+a,c=ma*o+a,u=(15*e+t.longitude)*ct,f=Math.sin(u),d=Math.cos(u);return{pos:[l*r*d/Di,l*r*f/Di,c*i/Di],vel:[-Em*l*r*f*86400/Di,Em*l*r*d*86400/Di,0]}}function Ef(t,e,n){const i=Qy(e,n);return __(i,t)}function Qy(t,e){const n=Nh(t),i=n.mobl*ct,r=n.tobl*ct,s=n.dpsi*Bs,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s),d=u,p=-f*o,g=-f*a,y=f*l,v=u*o*l+a*c,h=u*a*l-o*c,m=f*c,_=u*o*c-a*l,M=u*a*c+o*l;if(e===Wn.From2000)return new xc([[d,y,m],[p,v,_],[g,h,M]]);if(e===Wn.Into2000)return new xc([[d,p,g],[y,v,h],[m,_,M]]);throw"Invalid precess direction"}function y_(t,e,n){return n===Wn.Into2000?_c(Ef(t,e,n),e,n):Ef(_c(t,e,n),e,n)}function Jy(t,e){const n=x_(t),i=Zy(e,n).pos;return y_(i,t,Wn.Into2000)}class Ut{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class fr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class eS{constructor(e,n,i){this.lat=Rt(e),this.lon=Rt(n),this.dist=Rt(i)}}class Tm{constructor(e,n,i,r){this.ra=Rt(e),this.dec=Rt(n),this.dist=Rt(i),this.vec=r}}class xc{constructor(e){this.rot=e}}class tS{constructor(e,n,i,r){this.azimuth=Rt(e),this.altitude=Rt(n),this.ra=Rt(i),this.dec=Rt(r)}}class nS{constructor(e,n,i){this.vec=e,this.elat=Rt(n),this.elon=Rt(i)}}function iS(t,e){return new Ut(t[0],t[1],t[2],e)}function rS(t,e){const n=iS(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new Tm(0,n.z<0?-90:90,r,n)}let s=h_*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=xi*Math.atan2(t[2],Math.sqrt(i));return new Tm(s,o,r,n)}function Fu(t,e){const n=t*ct,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function S_(t,e,n,i,r){let s=En(t);Kc(e),Rt(n),Rt(i);const o=Math.sin(e.latitude*ct),a=Math.cos(e.latitude*ct),l=Math.sin(e.longitude*ct),c=Math.cos(e.longitude*ct),u=Math.sin(i*ct),f=Math.cos(i*ct),d=Math.sin(n*Sm),p=Math.cos(n*Sm);let g=[a*c,a*l,o],y=[-o*c,-o*l,a],v=[l,-c,0];const h=-15*x_(s);let m=Fu(h,g),_=Fu(h,y),M=Fu(h,v),b=[f*p,f*d,u];const E=b[0]*m[0]+b[1]*m[1]+b[2]*m[2],T=b[0]*_[0]+b[1]*_[1]+b[2]*_[2],x=b[0]*M[0]+b[1]*M[1]+b[2]*M[2];let C=Math.hypot(T,x),L;C>0?(L=-xi*Math.atan2(x,T),L<0&&(L+=360)):L=0;let N=xi*Math.atan2(C,E),F=n,Z=i;if(r){let te=N,I=IS(r,90-N);if(N-=I,I>0&&N>3e-4){const X=Math.sin(N*ct),k=Math.cos(N*ct),U=Math.sin(te*ct),Y=Math.cos(te*ct),V=[];for(let z=0;z<3;++z)V.push((b[z]-Y*m[z])/U*X+m[z]*k);C=Math.hypot(V[0],V[1]),C>0?(F=h_*Math.atan2(V[1],V[0]),F<0&&(F+=24)):F=0,Z=xi*Math.atan2(V[2],C)}}return new tS(L,90-N,F,Z)}function Kc(t){if(!(t instanceof yc))throw`Not an instance of the Observer class: ${t}`;if(Rt(t.latitude),Rt(t.longitude),Rt(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class yc{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,Kc(this)}}function M_(t,e,n,i,r){Kc(n),vc(i),vc(r);const s=En(e),o=Jy(s,n),a=Df(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]],c=y_(l,s,Wn.From2000);return rS(c,s)}function sS(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=xi*Math.atan2(r,i),a<0&&(a+=360));let l=xi*Math.atan2(s,o),c=new Ut(i,r,s,t.t);return new nS(c,l,a)}function wf(t){const e=Nh(t.t),n=[t.x,t.y,t.z],i=_c(n,t.t,Wn.From2000),[r,s,o]=Ef(i,t.t,Wn.From2000),a=new Ut(r,s,o,t.t),l=e.tobl*ct;return sS(a,Math.cos(l),Math.sin(l))}function so(t){const e=En(t),n=Yy(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=qy(e,r),o=_c(s,e,Wn.Into2000);return new Ut(o[0],o[1],o[2],e)}function E_(t){const e=En(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=so(i),o=so(r);return new fr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function oS(t){const e=En(t),n=E_(e),i=1+g_;return new fr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function $s(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=Ri),r+=a,i*=e}return r}function Ou(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,f]of o){let d=u+e*f;a+=c*f*Math.sin(d),s>0&&(l+=c*Math.cos(d))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const zo=365250,Tf=0,Af=1,bf=2;function Cf(t){return new nn(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function w_(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Zo(t,e){const n=e.tt/zo,i=$s(t[Tf],n,!0),r=$s(t[Af],n,!1),s=$s(t[bf],n,!1),o=w_(i,r,s);return Cf(o).ToAstroVector(e)}function Rf(t,e){const n=e/zo,i=$s(t[Tf],n,!0),r=$s(t[Af],n,!1),s=$s(t[bf],n,!1),o=Ou(t[Tf],n),a=Ou(t[Af],n),l=Ou(t[bf],n),c=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r),p=+(l*f*c)-s*d*c*a-s*f*u*o,g=+(l*f*u)-s*d*u*a+s*f*c*o,y=+(l*d)+s*f*a,v=w_(i,r,s),h=[p/zo,g/zo,y/zo],m=Cf(v),_=Cf(h);return new ns(e,m,_)}function Za(t,e,n,i){const r=i/(i+Rh),s=Zo(Fi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function aS(t){const e=new Ut(0,0,0,t);return Za(e,t,ve.Jupiter,xf),Za(e,t,ve.Saturn,yf),Za(e,t,ve.Uranus,Sf),Za(e,t,ve.Neptune,Mf),e}const Pf=51,lS=29200,Gs=146,Pi=201,Wr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class nn{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new nn(this.x,this.y,this.z)}ToAstroVector(e){return new Ut(this.x,this.y,this.z,e)}static zero(){return new nn(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new nn(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new nn(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new nn(e*this.x,e*this.y,e*this.z)}div(e){return new nn(this.x/e,this.y/e,this.z/e)}mean(e){return new nn((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new nn(-this.x,-this.y,-this.z)}}class ns{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new ns(this.tt,this.r,this.v)}sub(e){return new ns(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function cS(t){let[e,[n,i,r],[s,o,a]]=t;return new ns(e,new nn(n,i,r),new nn(s,o,a))}function Qa(t,e,n,i){const r=i/(i+Rh),s=Rf(Fi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function Ao(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class Zc{constructor(e){let n=new ns(e,new nn(0,0,0),new nn(0,0,0));this.Jupiter=Qa(n,e,ve.Jupiter,xf),this.Saturn=Qa(n,e,ve.Saturn,yf),this.Uranus=Qa(n,e,ve.Uranus,Sf),this.Neptune=Qa(n,e,ve.Neptune,Mf),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new ns(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=Ao(e,Rh,this.Sun.r);return n.incr(Ao(e,xf,this.Jupiter.r)),n.incr(Ao(e,yf,this.Saturn.r)),n.incr(Ao(e,Sf,this.Uranus.r)),n.incr(Ao(e,Mf,this.Neptune.r)),n}}class Qc{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new Qc(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class T_{constructor(e,n){this.bary=e,this.grav=n}}function Sc(t,e,n,i){return new nn(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function Am(t,e,n){return new nn(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Nf(t,e){const n=t-e.tt,i=new Zc(t),r=Sc(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Sc(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new Qc(t,o,a,l);return new T_(i,c)}const uS=[];function A_(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Lf(t){const e=cS(t),n=new Zc(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new Qc(e.tt,i,r,s);return new T_(n,o)}function dS(t,e){const n=Wr[0][0];if(e<n||e>Wr[Pf-1][0])return null;const i=A_((e-n)/lS,Pf-1);if(!t[i]){const s=t[i]=[];s[0]=Lf(Wr[i]).grav,s[Pi-1]=Lf(Wr[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Pi-1;++o)s[o]=Nf(a+=Gs,s[o-1]).grav;a=s[Pi-1].tt;var r=[];for(r[Pi-1]=s[Pi-1],o=Pi-2;o>0;--o)r[o]=Nf(a-=Gs,r[o+1]).grav;for(o=Pi-2;o>0;--o){const l=o/(Pi-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function bm(t,e,n){let i=Lf(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Nf(s+1===r?e:i.grav.tt+n,i.grav);return i}function b_(t,e){let n,i,r;const s=dS(uS,t.tt);if(s){const o=A_((t.tt-s[0].tt)/Gs,Pi-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=Sc(t.tt-a.tt,a.r,a.v,c),f=Am(t.tt-a.tt,a.v,c),d=Sc(t.tt-l.tt,l.r,l.v,c),p=Am(t.tt-l.tt,l.v,c),g=(t.tt-a.tt)/Gs;n=u.mul(1-g).add(d.mul(g)),i=f.mul(1-g).add(p.mul(g))}else{let o;t.tt<Wr[0][0]?o=bm(Wr[0],t.tt,-Gs):o=bm(Wr[Pf-1],t.tt,+Gs),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new Zc(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new fr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function $r(t,e){var n=En(e);if(t in Fi)return Zo(Fi[t],n);if(t===ve.Pluto){const o=b_(n);return new Ut(o.x,o.y,o.z,n)}if(t===ve.Sun)return new Ut(0,0,0,n);if(t===ve.Moon){var i=Zo(Fi.Earth,n),r=so(n);return new Ut(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===ve.EMB){const o=Zo(Fi.Earth,n),a=so(n),l=1+g_;return new Ut(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===ve.SSB)return aS(n);const s=Ph(t);if(s){const o=new eS(s.dec,15*s.ra,s.dist);return DS(o,n)}throw`HelioVector: Unknown body "${t}"`}function fS(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/f_;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class hS{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=$r(this.observerBody,e));const n=$r(this.targetBody,e);return new Ut(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function pS(t,e,n,i){vc(i);const r=En(t);if(Ph(n)){const a=$r(n,r);if(i){const c=gS(e,r),u=new Ut(a.x-c.x,a.y-c.y,a.z-c.z,r),f=f_/u.Length();return new Ut(u.x+c.vx/f,u.y+c.vy/f,u.z+c.vz/f,r)}const l=$r(e,r);return new Ut(a.x-l.x,a.y-l.y,a.z-l.z,r)}let s;i?s=new Ut(0,0,0,r):s=$r(e,r);const o=new hS(e,n,i,s);return fS(a=>o.Position(a),r)}function Df(t,e,n){vc(n);const i=En(e);switch(t){case ve.Earth:return new Ut(0,0,0,i);case ve.Moon:return so(i);default:const r=pS(i,ve.Earth,t,n);return r.t=i,r}}function mS(t,e){return new fr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function gS(t,e){const n=En(e);switch(t){case ve.Sun:return new fr(0,0,0,0,0,0,n);case ve.SSB:const i=new Zc(n.tt);return new fr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case ve.Mercury:case ve.Venus:case ve.Earth:case ve.Mars:case ve.Jupiter:case ve.Saturn:case ve.Uranus:case ve.Neptune:const r=Rf(Fi[t],n.tt);return mS(r,n);case ve.Pluto:return b_(n);case ve.Moon:case ve.EMB:const s=Rf(Fi.Earth,n.tt),o=t==ve.Moon?E_(n):oS(n);return new fr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(Ph(t)){const a=$r(t,n);return new fr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function vS(t,e,n,i,r){let s=(r+n)/2-i,o=(r-n)/2,a=i,l;if(s==0){if(o==0||(l=-a/o,l<-1||l>1))return null}else{let f=o*o-4*s*a;if(f<=0)return null;let d=Math.sqrt(f),p=(-o+d)/(2*s),g=(-o-d)/(2*s);if(-1<=p&&p<=1){if(-1<=g&&g<=1)return null;l=p}else if(-1<=g&&g<=1)l=g;else return null}let c=t+l*e,u=(2*s*l+o)/e;return{t:c,df_dt:u}}function _S(t,e,n,i){const r=Rt(i&&i.dt_tolerance_seconds||1),s=Math.abs(r/m_);let o=i&&i.init_f1||t(e),a=i&&i.init_f2||t(n),l=NaN,c=0,u=i&&i.iter_limit||20,f=!0;for(;;){if(++c>u)throw"Excessive iteration in Search()";let d=Wy(e,n,.5),p=d.ut-e.ut;if(Math.abs(p)<s)return d;f?l=t(d):f=!0;let g=vS(d.ut,n.ut-d.ut,o,l,a);if(g){let y=En(g.t),v=t(y);if(g.df_dt!==0){if(Math.abs(v/g.df_dt)<s)return y;let h=1.2*Math.abs(v/g.df_dt);if(h<p/10){let m=y.AddDays(-h),_=y.AddDays(+h);if((m.ut-e.ut)*(m.ut-n.ut)<0&&(_.ut-e.ut)*(_.ut-n.ut)<0){let M=t(m),b=t(_);if(M<0&&b>=0){o=M,a=b,e=m,n=_,l=v,f=!1;continue}}}}}if(o<0&&l>=0){n=d,a=l;continue}if(l<0&&a>=0){e=d,o=l;continue}return null}}function xS(t){for(;t<0;)t+=360;for(;t>=360;)t-=360;return t}function yS(t,e,n){if(t===ve.Earth||e===ve.Earth)throw"The Earth does not have a longitude as seen from itself.";const i=En(n),r=Df(t,i,!1),s=wf(r),o=Df(e,i,!1),a=wf(o);return xS(s.elon-a.elon)}function SS(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case ve.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case ve.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case ve.Mars:r=-1.52,s=1.6;break;case ve.Jupiter:r=-9.4,s=.5;break;case ve.Uranus:r=-7.19,s=.25;break;case ve.Neptune:r=-6.87;break;case ve.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function MS(t,e,n,i,r){const s=wf(i),o=ct*28.06,a=ct*(169.51+382e-7*r.tt),l=ct*s.elat,c=ct*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),f=Math.sin(Math.abs(u));let d=-9+.044*t;return d+=f*(-2.6+1.2*f),d+=5*Math.log10(e*n),{mag:d,ring_tilt:xi*u}}function ES(t,e,n){let i=t*ct,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Di;let l=n/a;return o+=5*Math.log10(e*l),o}class wS{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(ct*i))/2}}function C_(t,e){if(t===ve.Earth)throw"The illumination of the Earth is not defined.";const n=En(e),i=Zo(Fi.Earth,n);let r,s,o,a;t===ve.Sun?(o=new Ut(-i.x,-i.y,-i.z,n),s=new Ut(0,0,0,n),r=0):(t===ve.Moon?(o=so(n),s=new Ut(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=$r(t,e),o=new Ut(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=ky(o,s));let l=o.Length(),c=s.Length(),u;if(t===ve.Sun)a=Ry+5*Math.log10(l);else if(t===ve.Moon)a=ES(r,c,l);else if(t===ve.Saturn){const f=MS(r,c,l,o,n);a=f.mag,u=f.ring_tilt}else a=SS(t,r,c,l);return new wS(n,a,r,c,l,o,s,u)}function TS(t){return yS(ve.Moon,ve.Sun,t)}class AS{constructor(e,n,i){this.pressure=e,this.temperature=n,this.density=i}}function bS(t){if(!Number.isFinite(t)||t<-500||t>1e5)throw`Invalid elevation: ${t}`;let r,s;t<=11e3?(r=288.15-.0065*t,s=101325*Math.pow(288.15/r,-5.25577)):t<=2e4?(r=216.65,s=22632*Math.exp(-.00015768832*(t-11e3))):(r=216.65+.001*(t-2e4),s=5474.87*Math.pow(216.65/r,34.16319));const o=s/r/(101325/288.15);return new AS(s,r,o)}function CS(t,e){const n=t.latitude*ct,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,i*Ys),o=s*(Ys*Ys),a=(t.height-e)/1e3,l=ma*s+a,c=ma*o+a,u=1e3*Math.hypot(l*r,c*i),f=.175*Math.pow(1-.0065/283.15*(t.height-2/3*e),3.256);return xi*-(Math.sqrt(2*(1-f)*e/u)/(1-f))}function RS(t){switch(t){case ve.Sun:return Ly;case ve.Moon:return Fy;default:return 0}}function Cm(t,e,n,i,r,s=0){if(!Number.isFinite(s)||s<0)throw`Invalid value for metersAboveGround: ${s}`;const o=RS(t),a=bS(e.height-s),c=CS(e,s)-Oy*a.density;return LS(t,e,n,i,r,o,c)}class PS{constructor(e,n,i,r){this.tx=e,this.ty=n,this.ax=i,this.ay=r}}function If(t,e,n,i,r,s,o){if(s<0&&o>=0)return new PS(i,r,s,o);if(s>=0&&o<0)return null;if(t>17)throw"Excessive recursion in rise/set ascent search.";const a=r.ut-i.ut;if(a*m_<1||Math.min(Math.abs(s),Math.abs(o))>n*(a/2))return null;const c=new Mr((i.ut+r.ut)/2),u=e(c);return If(1+t,e,n,i,c,s,u)||If(1+t,e,n,c,r,u,o)}function NS(t,e){if(e<-90||e>90)throw`Invalid geographic latitude: ${e}`;let n,i;switch(t){case ve.Moon:n=4.5,i=8.2;break;case ve.Sun:n=.8,i=.5;break;case ve.Mercury:n=-1.6,i=1;break;case ve.Venus:n=-.8,i=.6;break;case ve.Mars:n=-.5,i=.4;break;case ve.Jupiter:case ve.Saturn:case ve.Uranus:case ve.Neptune:case ve.Pluto:n=-.2,i=.2;break;case ve.Star1:case ve.Star2:case ve.Star3:case ve.Star4:case ve.Star5:case ve.Star6:case ve.Star7:case ve.Star8:n=-.008,i=.008;break;default:throw`Body not allowed for altitude search: ${t}`}const r=ct*e;return Math.abs((360/Py-n)*Math.cos(r))+Math.abs(i*Math.sin(r))}function LS(t,e,n,i,r,s,o){if(Kc(e),Rt(r),Rt(s),Rt(o),o<-90||o>90)throw`Invalid target altitude angle: ${o}`;const a=NS(t,e.latitude);function l(g){const y=M_(t,g,e,!0,!0),h=S_(g,e,y.ra,y.dec).altitude+xi*Math.asin(s/y.dist);return n*(h-o)}const c=En(i);let u=c,f=c,d=l(u),p=d;for(;;){f=u.AddDays(.42),p=l(f);const g=If(0,l,a,u,f,d,p);if(g){const y=_S(l,g.tx,g.ty,{dt_tolerance_seconds:.1,init_f1:g.ax,init_f2:g.ay});if(y)return y.ut>c.ut+r?null:y;throw`Rise/set search failed after finding ascent: t1=${u}, t2=${f}, a1=${d}, a2=${p}`}{if(f.ut>c.ut+r)return null;u=f,d=p}}}var Rm;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Rm||(Rm={}));function DS(t,e){e=En(e);const n=t.lat*ct,i=t.lon*ct,r=t.dist*Math.cos(n);return new Ut(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function IS(t,e){let n;if(Rt(e),e<-90||e>90)return 0;if(t==="normal"||t==="jplhor"){let i=e;i<-1&&(i=-1),n=1.02/Math.tan((i+10.3/(i+5.11))*ct)/60,t==="normal"&&e<-1&&(n*=(e+90)/89)}else if(!t)n=0;else throw`Invalid refraction option: ${t}`;return n}var Pm;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Pm||(Pm={}));var Nm;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Nm||(Nm={}));const US=[ve.Sun,ve.Moon,ve.Mercury,ve.Venus,ve.Mars,ve.Jupiter,ve.Saturn,ve.Uranus,ve.Neptune,ve.Pluto];function FS(t,e){const n=e?new yc(e.latitude,e.longitude,e.elevation):new yc(0,0,0);return US.map(i=>{const r=M_(i,t,n,!0,!0);let s=null,o=null;try{const l=C_(i,t);s=l.mag,o=l.geo_dist}catch{s=null,o=null}const a=e?S_(t,n,r.ra,r.dec,"normal"):null;return{body:i,ra:r.ra*15,dec:r.dec,mag:s,au:o,altitude:a?a.altitude:null,azimuth:a?a.azimuth:null}})}function OS(t,e,n){if(!n)return null;const i=new yc(n.latitude,n.longitude,n.elevation);try{const r=Cm(t,i,1,e,1),s=Cm(t,i,-1,e,1);return{rise:r?r.date:null,set:s?s.date:null,searched:!0}}catch(r){return console.warn("[cosmos] rise/set search failed, shown as unknown",t,r),null}}function kS(t){const e=(t%360+360)%360;return e<1||e>=359?"new":Math.abs(e-90)<1?"firstQuarter":Math.abs(e-180)<1?"full":Math.abs(e-270)<1?"lastQuarter":e<90?"waxingCrescent":e<180?"waxingGibbous":e<270?"waningGibbous":"waningCrescent"}function zS(t){const e=TS(t),n=C_(ve.Moon,t);return{phaseAngle:e,illuminated:n.phase_fraction,phase:kS(e)}}function BS(t,e,n,i){if(t.trim()==="")return{ok:!1,why:"latitude"};if(e.trim()==="")return{ok:!1,why:"longitude"};const r=Number(t.trim().replace(",","."));if(!Number.isFinite(r)||r<-90||r>90)return{ok:!1,why:"latitude"};const s=Number(e.trim().replace(",","."));if(!Number.isFinite(s)||s<-180||s>180)return{ok:!1,why:"longitude"};const o=n.trim(),a=o===""?0:Number(o.replace(",","."));return!Number.isFinite(a)||a<-500||a>9e3?{ok:!1,why:"elevation"}:{ok:!0,place:{latitude:r,longitude:s,elevation:a,label:i.trim()}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="184",GS=0,Lm=1,VS=2,zl=1,HS=2,Bo=3,Tr=0,Sn=1,Jn=2,zi=0,Ks=1,Uf=2,Dm=3,Im=4,WS=5,zr=100,jS=101,XS=102,qS=103,YS=104,$S=200,KS=201,ZS=202,QS=203,Ff=204,Of=205,JS=206,eM=207,tM=208,nM=209,iM=210,rM=211,sM=212,oM=213,aM=214,kf=0,zf=1,Bf=2,oo=3,Gf=4,Vf=5,Hf=6,Wf=7,R_=0,lM=1,cM=2,yi=0,P_=1,N_=2,L_=3,D_=4,I_=5,U_=6,F_=7,O_=300,is=301,ao=302,ku=303,zu=304,Jc=306,jf=1e3,Oi=1001,Xf=1002,Yt=1003,uM=1004,Ja=1005,sn=1006,Bu=1007,jr=1008,zn=1009,k_=1010,z_=1011,ga=1012,Dh=1013,Mi=1014,mi=1015,ji=1016,Ih=1017,Uh=1018,va=1020,B_=35902,G_=35899,V_=1021,H_=1022,ti=1023,Xi=1026,Xr=1027,W_=1028,Fh=1029,rs=1030,Oh=1031,kh=1033,Bl=33776,Gl=33777,Vl=33778,Hl=33779,qf=35840,Yf=35841,$f=35842,Kf=35843,Zf=36196,Qf=37492,Jf=37496,e0=37488,t0=37489,Mc=37490,n0=37491,i0=37808,r0=37809,s0=37810,o0=37811,a0=37812,l0=37813,c0=37814,u0=37815,d0=37816,f0=37817,h0=37818,p0=37819,m0=37820,g0=37821,v0=36492,_0=36494,x0=36495,y0=36283,S0=36284,Ec=36285,M0=36286,dM=3200,Um=0,fM=1,cr="",Un="srgb",wc="srgb-linear",Tc="linear",lt="srgb",ps=7680,Fm=519,hM=512,pM=513,mM=514,zh=515,gM=516,vM=517,Bh=518,_M=519,Om=35044,km="300 es",gi=2e3,Ac=2001;function xM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yM(){const t=bc("canvas");return t.style.display="block",t}const zm={};function Bm(...t){const e="THREE."+t.shift();console.log(e,...t)}function j_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=j_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=j_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function E0(...t){const e=t.join(" ");e in zm||(zm[e]=!0,He(...t))}function SM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const MM={[kf]:zf,[Bf]:Hf,[Gf]:Wf,[oo]:Vf,[zf]:kf,[Hf]:Bf,[Wf]:Gf,[Vf]:oo};class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,w0=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function EM(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qh=class qh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;let dt=qh;class mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||l!==d||c!==p||u!==g){let v=l*d+c*p+u*g+f*y;v<0&&(d=-d,p=-p,g=-g,y=-y,v=-v);let h=1-a;if(v<.9995){const m=Math.acos(v),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+y*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yh=class Yh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;let W=Yh;const Hu=new W,Gm=new mo,$h=class $h{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],v=r[3],h=r[6],m=r[1],_=r[4],M=r[7],b=r[2],E=r[5],T=r[8];return s[0]=o*y+a*m+l*b,s[3]=o*v+a*_+l*E,s[6]=o*h+a*M+l*T,s[1]=c*y+u*m+f*b,s[4]=c*v+u*_+f*E,s[7]=c*h+u*M+f*T,s[2]=d*y+p*m+g*b,s[5]=d*v+p*_+g*E,s[8]=d*h+p*M+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wu.makeScale(e,n)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let qe=$h;const Wu=new qe,Vm=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const t={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?Tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return E0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return E0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wc]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const et=wM();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class TM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=bc("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AM=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ju(r[o].image)):s.push(ju(r[o]))}else s=ju(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let bM=0;const Xu=new W;class dn extends ls{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Oi,r=Oi,s=sn,o=jr,a=ti,l=zn,c=dn.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Ta(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=O_;dn.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],v=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,b=(h+1)/2,E=(u+d)/4,T=(f+y)/4,x=(g+v)/4;return _>M&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=T/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(f-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let It=Kh;class CM extends ls{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lc=class Lc{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,NM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ji.crossVectors(i,Tn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ji.crossVectors(i,Tn)),Ji.normalize(),el.crossVectors(Tn,Ji),r[0]=Ji.x,r[4]=el.x,r[8]=Tn.x,r[1]=Ji.y,r[5]=el.y,r[9]=Tn.y,r[2]=Ji.z,r[6]=el.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],v=i[10],h=i[14],m=i[3],_=i[7],M=i[11],b=i[15],E=r[0],T=r[4],x=r[8],C=r[12],L=r[1],N=r[5],F=r[9],Z=r[13],te=r[2],I=r[6],X=r[10],k=r[14],U=r[3],Y=r[7],V=r[11],z=r[15];return s[0]=o*E+a*L+l*te+c*U,s[4]=o*T+a*N+l*I+c*Y,s[8]=o*x+a*F+l*X+c*V,s[12]=o*C+a*Z+l*k+c*z,s[1]=u*E+f*L+d*te+p*U,s[5]=u*T+f*N+d*I+p*Y,s[9]=u*x+f*F+d*X+p*V,s[13]=u*C+f*Z+d*k+p*z,s[2]=g*E+y*L+v*te+h*U,s[6]=g*T+y*N+v*I+h*Y,s[10]=g*x+y*F+v*X+h*V,s[14]=g*C+y*Z+v*k+h*z,s[3]=m*E+_*L+M*te+b*U,s[7]=m*T+_*N+M*I+b*Y,s[11]=m*x+_*F+M*X+b*V,s[15]=m*C+_*Z+M*k+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],v=e[11],h=e[15],m=l*p-c*d,_=a*p-c*f,M=a*d-l*f,b=o*p-c*u,E=o*d-l*u,T=o*f-a*u;return n*(y*m-v*_+h*M)-i*(g*m-v*b+h*E)+r*(g*_-y*b+h*T)-s*(g*M-y*E+v*T)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],v=e[14],h=e[15],m=n*a-i*o,_=n*l-r*o,M=n*c-s*o,b=i*l-r*a,E=i*c-s*a,T=r*c-s*l,x=u*y-f*g,C=u*v-d*g,L=u*h-p*g,N=f*v-d*y,F=f*h-p*y,Z=d*h-p*v,te=m*Z-_*F+M*N+b*L-E*C+T*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/te;return e[0]=(a*Z-l*F+c*N)*I,e[1]=(r*F-i*Z-s*N)*I,e[2]=(y*T-v*E+h*b)*I,e[3]=(d*E-f*T-p*b)*I,e[4]=(l*L-o*Z-c*C)*I,e[5]=(n*Z-r*L+s*C)*I,e[6]=(v*M-g*T-h*_)*I,e[7]=(u*T-d*M+p*_)*I,e[8]=(o*F-a*L+c*x)*I,e[9]=(i*L-n*F-s*x)*I,e[10]=(g*E-y*M+h*m)*I,e[11]=(f*M-u*E-p*m)*I,e[12]=(a*C-o*N-l*x)*I,e[13]=(n*N-i*C+r*x)*I,e[14]=(y*_-g*b-v*m)*I,e[15]=(u*b-f*_+d*m)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,y=o*u,v=o*f,h=a*f,m=l*c,_=l*u,M=l*f,b=i.x,E=i.y,T=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+M)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(d+h))*E,r[6]=(v+m)*E,r[7]=0,r[8]=(g+_)*T,r[9]=(v-m)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=gs.set(r[0],r[1],r[2]).length();const a=gs.set(r[4],r[5],r[6]).length(),l=gs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,u=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===gi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ac)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===gi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ac)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Lc.prototype.isMatrix4=!0;let Pt=Lc;const gs=new W,Xn=new Pt,PM=new W(0,0,0),NM=new W(1,1,1),Ji=new W,el=new W,Tn=new W,Wm=new Pt,jm=new mo;class ss{constructor(e=0,n=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LM=0;const Xm=new W,vs=new mo,Ei=new Pt,tl=new W,Co=new W,DM=new W,IM=new mo,qm=new W(1,0,0),Ym=new W(0,1,0),$m=new W(0,0,1),Km={type:"added"},UM={type:"removed"},_s={type:"childadded",child:null},qu={type:"childremoved",child:null};class fn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new W,n=new ss,i=new mo,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new qe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,n){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tl.copy(e):tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Co,tl,this.up):Ei.lookAt(tl,Co,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ei),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),_s.child=e,this.dispatchEvent(_s),_s.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UM),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,DM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new W(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nl extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),h=this._getHandJoint(c,y);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},il={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=EM(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=Y_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return et.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Un){et.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(il);const i=Vu(er.h,il.h,n),r=Vu(er.s,il.s,n),s=Vu(er.l,il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new at;at.NAMES=Y_;class OM extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new W,wi=new W,Ku=new W,Ti=new W,xs=new W,ys=new W,Zm=new W,Zu=new W,Qu=new W,Ju=new W,ed=new It,td=new It,nd=new It;class ei{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),wi.subVectors(i,n),Ku.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(wi),l=qn.dot(Ku),c=wi.dot(wi),u=wi.dot(Ku),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),wi.subVectors(e,n),qn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),ys.subVectors(s,i),Zu.subVectors(e,i);const l=xs.dot(Zu),c=ys.dot(Zu);if(l<=0&&c<=0)return n.copy(i);Qu.subVectors(e,r);const u=xs.dot(Qu),f=ys.dot(Qu);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(xs,o);Ju.subVectors(e,s);const p=xs.dot(Ju),g=ys.dot(Ju);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ys,a);const v=u*g-p*f;if(v<=0&&f-u>=0&&p-g>=0)return Zm.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Zm,a);const h=1/(v+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Aa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),sl.subVectors(this.max,Ro),Ss.subVectors(e.a,Ro),Ms.subVectors(e.b,Ro),Es.subVectors(e.c,Ro),tr.subVectors(Ms,Ss),nr.subVectors(Es,Ms),Lr.subVectors(Ss,Es);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Lr.z,Lr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Lr.z,0,-Lr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Lr.y,Lr.x,0];return!id(n,Ss,Ms,Es,sl)||(n=[1,0,0,0,1,0,0,0,1],!id(n,Ss,Ms,Es,sl))?!1:(ol.crossVectors(tr,nr),n=[ol.x,ol.y,ol.z],id(n,Ss,Ms,Es,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new W,new W,new W,new W,new W,new W,new W,new W],Yn=new W,rl=new Aa,Ss=new W,Ms=new W,Es=new W,tr=new W,nr=new W,Lr=new W,Ro=new W,sl=new W,ol=new W,Dr=new W;function id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new W,al=new dt;let kM=0;class Wt extends ls{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Om,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $_ extends Wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K_ extends Wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mn extends Wt{constructor(e,n,i){super(new Float32Array(e),n,i)}}const zM=new Aa,Po=new W,rd=new W;class ba{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(rd)),this.expandByPoint(Po.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let BM=0;const In=new Pt,sd=new fn,ws=new W,An=new Aa,No=new Aa,Vt=new W;class qt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xM(e)?K_:$_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(An.min,No.min),An.expandByPoint(Vt),Vt.addVectors(An.max,No.max),An.expandByPoint(Vt)):(An.expandByPoint(No.min),An.expandByPoint(No.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Vt.add(ws)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new W,l[x]=new W;const c=new W,u=new W,f=new W,d=new dt,p=new dt,g=new dt,y=new W,v=new W;function h(x,C,L){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,L),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(N),v.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[x].add(y),a[C].add(y),a[L].add(y),l[x].add(v),l[C].add(v),l[L].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,C=m.length;x<C;++x){const L=m[x],N=L.start,F=L.count;for(let Z=N,te=N+F;Z<te;Z+=3)h(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const _=new W,M=new W,b=new W,E=new W;function T(x){b.fromBufferAttribute(r,x),E.copy(b);const C=a[x];_.copy(C),_.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(E,C);const N=M.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,N)}for(let x=0,C=m.length;x<C;++x){const L=m[x],N=L.start,F=L.count;for(let Z=N,te=N+F;Z<te;Z+=3)T(e.getX(Z+0)),T(e.getX(Z+1)),T(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Wt(d,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GM=0;class go extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Ks,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new W,od=new W,ll=new W,ir=new W,ad=new W,cl=new W,ld=new W;class Vh{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){od.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(od);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=ir.dot(this.direction),l=-ir.dot(ll),c=ir.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(od).addScaledVector(ll,d),p}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){ad.subVectors(n,e),cl.subVectors(i,e),ld.crossVectors(ad,cl);let o=this.direction.dot(ld),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(ir,cl));if(l<0)return null;const c=a*this.direction.dot(ad.cross(ir));if(c<0||l+c>o)return null;const u=-a*ir.dot(ld);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cc extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qm=new Pt,Ir=new Vh,ul=new ba,Jm=new W,dl=new W,fl=new W,hl=new W,cd=new W,pl=new W,eg=new W,ml=new W;class si extends fn{constructor(e=new qt,n=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cd.fromBufferAttribute(f,e),o?pl.addScaledVector(cd,u):pl.addScaledVector(cd.sub(n),u))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(ul.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ul,Jm)===null||Ir.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Qm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Qm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const E=a.getX(M),T=a.getX(M+1),x=a.getX(M+2);r=gl(this,h,e,i,c,u,f,E,T,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const m=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);r=gl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],h=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const E=M,T=M+1,x=M+2;r=gl(this,h,e,i,c,u,f,E,T,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const m=v,_=v+1,M=v+2;r=gl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function VM(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dl),t.getVertexPosition(l,fl),t.getVertexPosition(c,hl);const u=VM(t,e,n,i,dl,fl,hl,eg);if(u){const f=new W;ei.getBarycoord(eg,dl,fl,hl,f),r&&(u.uv=ei.getInterpolatedAttribute(r,a,l,c,f,new dt)),s&&(u.uv1=ei.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};ei.getNormal(dl,fl,hl,d.normal),u.face=d,u.barycoord=f}return u}class HM extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Yt,u=Yt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new W,WM=new W,jM=new qe;class kr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ud.subVectors(i,n).cross(WM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ud),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jM.getNormalMatrix(e),r=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ba,XM=new dt(.5,.5),vl=new W;class Z_{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],y=s[9],v=s[10],h=s[11],m=s[12],_=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,h-g,b-m).normalize(),r[1].setComponents(c+o,p+u,h+g,b+m).normalize(),r[2].setComponents(c+a,p+f,h+y,b+_).normalize(),r[3].setComponents(c-a,p-f,h-y,b-_).normalize(),i)r[4].setComponents(l,d,v,M).normalize(),r[5].setComponents(c-l,p-d,h-v,b-M).normalize();else if(r[4].setComponents(c-l,p-d,h-v,b-M).normalize(),n===gi)r[5].setComponents(c+l,p+d,h+v,b+M).normalize();else if(n===Ac)r[5].setComponents(l,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=XM.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T0 extends go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new W,Pc=new W,tg=new Pt,Lo=new Vh,_l=new ba,dd=new W,ng=new W;class qM extends fn{constructor(e=new qt,n=new T0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rc.fromBufferAttribute(n,r-1),Pc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new Mn(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;tg.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const h=u.getX(y),m=u.getX(y+1),_=xl(this,e,Lo,l,h,m,y);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(g-1),v=u.getX(p),h=xl(this,e,Lo,l,y,v,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const h=xl(this,e,Lo,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=xl(this,e,Lo,l,g-1,p,g-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Rc.fromBufferAttribute(a,r),Pc.fromBufferAttribute(a,s),n.distanceSqToSegment(Rc,Pc,dd,ng)>i)return;dd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(dd);if(!(c<e.near||c>e.far))return{distance:c,point:ng.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const ig=new W,rg=new W;class sg extends qM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ig.fromBufferAttribute(n,r),rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new Mn(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A0 extends go{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const og=new Pt,b0=new Vh,yl=new ba,Sl=new W;class fd extends fn{constructor(e=new qt,n=new A0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;og.copy(r).invert(),b0.copy(e.ray).applyMatrix4(og);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const v=c.getX(g);Sl.fromBufferAttribute(f,v),ag(Sl,v,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,y=p;g<y;g++)Sl.fromBufferAttribute(f,g),ag(Sl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ag(t,e,n,i,r,s,o){const a=b0.distanceSqToPoint(t);if(a<n){const l=new W;b0.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Q_ extends dn{constructor(e=[],n=is,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lo extends dn{constructor(e,n,i=Mi,r,s,o,a=Yt,l=Yt,c,u=Xi,f=1){if(u!==Xi&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class YM extends lo{constructor(e,n=Mi,i=is,r,s,o=Yt,a=Yt,l,c=Xi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ca extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(f,2));function g(y,v,h,m,_,M,b,E,T,x,C){const L=M/T,N=b/x,F=M/2,Z=b/2,te=E/2,I=T+1,X=x+1;let k=0,U=0;const Y=new W;for(let V=0;V<X;V++){const z=V*N-Z;for(let ee=0;ee<I;ee++){const J=ee*L-F;Y[y]=J*m,Y[v]=z*_,Y[h]=te,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[v]=0,Y[h]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(ee/T),f.push(1-V/x),k+=1}}for(let V=0;V<x;V++)for(let z=0;z<T;z++){const ee=d+z+I*V,J=d+z+I*(V+1),fe=d+(z+1)+I*(V+1),_e=d+(z+1)+I*V;l.push(ee,J,_e),l.push(J,fe,_e),U+=6}a.addGroup(p,U,C),p+=U,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eu extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],y=[],v=[];for(let h=0;h<u;h++){const m=h*d-o;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-m,0),y.push(0,0,1),v.push(_/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,M=m+c*(h+1),b=m+1+c*(h+1),E=m+1+c*h;p.push(_,M,E),p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(y,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hh extends qt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,p=new W,g=new dt;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const h=s+v/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let y=0;y<r;y++){const v=y*(i+1);for(let h=0;h<i;h++){const m=h+v,_=m,M=m+i+1,b=m+i+2,E=m+1;a.push(_,M,E),a.push(M,b,E)}}this.setIndex(a),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(c,3)),this.setAttribute("uv",new Mn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(lg(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(lg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=co(t[n]);for(const r in i)e[r]=i[r]}return e}function lg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $M(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ex(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const KM={clone:co,merge:ln};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=$M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class JM extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eE extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tE extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ml=new W,El=new mo,ui=new W;class tx extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,El,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,ui.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ml,El,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new W,cg=new dt,ug=new dt;class kn extends tx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=w0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return w0*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,cg,ug),n.subVectors(ug,cg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class nx extends tx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=-90,As=1;class nE extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new kn(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new kn(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new kn(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class iE extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zh=class Zh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Zh.prototype.isMatrix2=!0;let dg=Zh;function fg(t,e,n,i){const r=rE(i);switch(n){case V_:return t*e;case W_:return t*e/r.components*r.byteLength;case Fh:return t*e/r.components*r.byteLength;case rs:return t*e*2/r.components*r.byteLength;case Oh:return t*e*2/r.components*r.byteLength;case H_:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case kh:return t*e*4/r.components*r.byteLength;case Bl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:case Kf:return Math.max(t,16)*Math.max(e,8)/4;case qf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case Zf:case Qf:case e0:case t0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:case Mc:case n0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case i0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case r0:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case s0:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case o0:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case a0:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case l0:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case c0:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case u0:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case d0:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case f0:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case h0:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case p0:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case m0:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case g0:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case v0:case _0:case x0:return Math.ceil(t/4)*Math.ceil(e/4)*16;case y0:case S0:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ec:case M0:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rE(t){switch(t){case zn:case k_:return{byteLength:1,components:1};case ga:case z_:case ji:return{byteLength:2,components:1};case Ih:case Uh:return{byteLength:2,components:4};case Mi:case Dh:case mi:return{byteLength:4,components:1};case B_:case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ix(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
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
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_E=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,RE=`#define PI 3.141592653589793
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
} // validated`,PE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
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
}`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iw=`PhysicalMaterial material;
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
#endif`,rw=`uniform sampler2D dfgLUT;
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
}`,sw=`
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gw=`#if defined( USE_POINTS_UV )
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
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jw=`float getShadowMask() {
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
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e4=`#ifdef USE_TRANSMISSION
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
#endif`,t4=`#ifdef USE_TRANSMISSION
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
#endif`,n4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a4=`uniform sampler2D t2D;
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
}`,l4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f4=`#include <common>
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
}`,h4=`#if DEPTH_PACKING == 3200
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
}`,p4=`#define DISTANCE
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
}`,m4=`#define DISTANCE
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
}`,g4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_4=`uniform float scale;
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
}`,x4=`uniform vec3 diffuse;
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
}`,y4=`#include <common>
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
}`,S4=`uniform vec3 diffuse;
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
}`,M4=`#define LAMBERT
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
}`,E4=`#define LAMBERT
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
}`,w4=`#define MATCAP
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
}`,T4=`#define MATCAP
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
}`,A4=`#define NORMAL
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
}`,b4=`#define NORMAL
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
}`,C4=`#define PHONG
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
}`,R4=`#define PHONG
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
}`,P4=`#define STANDARD
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
}`,N4=`#define STANDARD
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
}`,L4=`#define TOON
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
}`,D4=`#define TOON
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
}`,I4=`uniform float size;
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
}`,U4=`uniform vec3 diffuse;
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
}`,F4=`#include <common>
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
}`,O4=`uniform vec3 color;
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
}`,k4=`uniform float rotation;
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
}`,z4=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:oE,alphahash_pars_fragment:aE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:dE,aomap_fragment:fE,aomap_pars_fragment:hE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:vE,bsdfs:_E,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:SE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:wE,color_fragment:TE,color_pars_fragment:AE,color_pars_vertex:bE,color_vertex:CE,common:RE,cube_uv_reflection_fragment:PE,defaultnormal_vertex:NE,displacementmap_pars_vertex:LE,displacementmap_vertex:DE,emissivemap_fragment:IE,emissivemap_pars_fragment:UE,colorspace_fragment:FE,colorspace_pars_fragment:OE,envmap_fragment:kE,envmap_common_pars_fragment:zE,envmap_pars_fragment:BE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:QE,envmap_vertex:VE,fog_vertex:HE,fog_pars_vertex:WE,fog_fragment:jE,fog_pars_fragment:XE,gradientmap_pars_fragment:qE,lightmap_pars_fragment:YE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:KE,lights_pars_begin:ZE,lights_toon_fragment:JE,lights_toon_pars_fragment:ew,lights_phong_fragment:tw,lights_phong_pars_fragment:nw,lights_physical_fragment:iw,lights_physical_pars_fragment:rw,lights_fragment_begin:sw,lights_fragment_maps:ow,lights_fragment_end:aw,lightprobes_pars_fragment:lw,logdepthbuf_fragment:cw,logdepthbuf_pars_fragment:uw,logdepthbuf_pars_vertex:dw,logdepthbuf_vertex:fw,map_fragment:hw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:gw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:_w,morphinstance_vertex:xw,morphcolor_vertex:yw,morphnormal_vertex:Sw,morphtarget_pars_vertex:Mw,morphtarget_vertex:Ew,normal_fragment_begin:ww,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:bw,normal_vertex:Cw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Dw,opaque_fragment:Iw,packing:Uw,premultiplied_alpha_fragment:Fw,project_vertex:Ow,dithering_fragment:kw,dithering_pars_fragment:zw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:Gw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Hw,shadowmap_vertex:Ww,shadowmask_pars_fragment:jw,skinbase_vertex:Xw,skinning_pars_vertex:qw,skinning_vertex:Yw,skinnormal_vertex:$w,specularmap_fragment:Kw,specularmap_pars_fragment:Zw,tonemapping_fragment:Qw,tonemapping_pars_fragment:Jw,transmission_fragment:e4,transmission_pars_fragment:t4,uv_pars_fragment:n4,uv_pars_vertex:i4,uv_vertex:r4,worldpos_vertex:s4,background_vert:o4,background_frag:a4,backgroundCube_vert:l4,backgroundCube_frag:c4,cube_vert:u4,cube_frag:d4,depth_vert:f4,depth_frag:h4,distance_vert:p4,distance_frag:m4,equirect_vert:g4,equirect_frag:v4,linedashed_vert:_4,linedashed_frag:x4,meshbasic_vert:y4,meshbasic_frag:S4,meshlambert_vert:M4,meshlambert_frag:E4,meshmatcap_vert:w4,meshmatcap_frag:T4,meshnormal_vert:A4,meshnormal_frag:b4,meshphong_vert:C4,meshphong_frag:R4,meshphysical_vert:P4,meshphysical_frag:N4,meshtoon_vert:L4,meshtoon_frag:D4,points_vert:I4,points_frag:U4,shadow_vert:F4,shadow_frag:O4,sprite_vert:k4,sprite_frag:z4},we={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},hi={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const wl={r:0,b:0,g:0},B4=new Pt,rx=new qe;rx.set(-1,0,0,0,1,0,0,0,1);function G4(t,e,n,i,r,s){const o=new at(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=e.get(_,M)}return _}function g(m){let _=!1;const M=p(m);M===null?v(o,a):M&&M.isColor&&(v(M,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Jc)?(c===void 0&&(c=new si(new Ca(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:co(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B4.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rx),c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new si(new eu(2,2),new oi({name:"BackgroundMaterial",uniforms:co(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,_){m.getRGB(wl,ex(t)),n.buffers.color.setClear(wl.r,wl.g,wl.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:y,dispose:h}}function V4(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(N,F,Z,te,I){let X=!1;const k=f(N,te,Z,F);s!==k&&(s=k,c(s.object)),X=p(N,te,Z,I),X&&g(N,te,Z,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(N,F,Z,te),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,F,Z,te){const I=te.wireframe===!0;let X=i[F.id];X===void 0&&(X={},i[F.id]=X);const k=N.isInstancedMesh===!0?N.id:0;let U=X[k];U===void 0&&(U={},X[k]=U);let Y=U[Z.id];Y===void 0&&(Y={},U[Z.id]=Y);let V=Y[I];return V===void 0&&(V=d(l()),Y[I]=V),V}function d(N){const F=[],Z=[],te=[];for(let I=0;I<n;I++)F[I]=0,Z[I]=0,te[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:te,object:N,attributes:{},index:null}}function p(N,F,Z,te){const I=s.attributes,X=F.attributes;let k=0;const U=Z.getAttributes();for(const Y in U)if(U[Y].location>=0){const z=I[Y];let ee=X[Y];if(ee===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),z===void 0||z.attribute!==ee||ee&&z.data!==ee.data)return!0;k++}return s.attributesNum!==k||s.index!==te}function g(N,F,Z,te){const I={},X=F.attributes;let k=0;const U=Z.getAttributes();for(const Y in U)if(U[Y].location>=0){let z=X[Y];z===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(z=N.instanceColor));const ee={};ee.attribute=z,z&&z.data&&(ee.data=z.data),I[Y]=ee,k++}s.attributes=I,s.attributesNum=k,s.index=te}function y(){const N=s.newAttributes;for(let F=0,Z=N.length;F<Z;F++)N[F]=0}function v(N){h(N,0)}function h(N,F){const Z=s.newAttributes,te=s.enabledAttributes,I=s.attributeDivisors;Z[N]=1,te[N]===0&&(t.enableVertexAttribArray(N),te[N]=1),I[N]!==F&&(t.vertexAttribDivisor(N,F),I[N]=F)}function m(){const N=s.newAttributes,F=s.enabledAttributes;for(let Z=0,te=F.length;Z<te;Z++)F[Z]!==N[Z]&&(t.disableVertexAttribArray(Z),F[Z]=0)}function _(N,F,Z,te,I,X,k){k===!0?t.vertexAttribIPointer(N,F,Z,I,X):t.vertexAttribPointer(N,F,Z,te,I,X)}function M(N,F,Z,te){y();const I=te.attributes,X=Z.getAttributes(),k=F.defaultAttributeValues;for(const U in X){const Y=X[U];if(Y.location>=0){let V=I[U];if(V===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),V!==void 0){const z=V.normalized,ee=V.itemSize,J=e.get(V);if(J===void 0)continue;const fe=J.buffer,_e=J.type,H=J.bytesPerElement,ae=_e===t.INT||_e===t.UNSIGNED_INT||V.gpuType===Dh;if(V.isInterleavedBufferAttribute){const ce=V.data,G=ce.stride,Ue=V.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)h(Y.location+Ve,ce.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)v(Y.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let Ve=0;Ve<Y.locationSize;Ve++)_(Y.location+Ve,ee/Y.locationSize,_e,z,G*H,(Ue+ee/Y.locationSize*Ve)*H,ae)}else{if(V.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)h(Y.location+ce,V.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ce=0;ce<Y.locationSize;ce++)v(Y.location+ce);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let ce=0;ce<Y.locationSize;ce++)_(Y.location+ce,ee/Y.locationSize,_e,z,ee*H,ee/Y.locationSize*ce*H,ae)}}else if(k!==void 0){const z=k[U];if(z!==void 0)switch(z.length){case 2:t.vertexAttrib2fv(Y.location,z);break;case 3:t.vertexAttrib3fv(Y.location,z);break;case 4:t.vertexAttrib4fv(Y.location,z);break;default:t.vertexAttrib1fv(Y.location,z)}}}}m()}function b(){C();for(const N in i){const F=i[N];for(const Z in F){const te=F[Z];for(const I in te){const X=te[I];for(const k in X)u(X[k].object),delete X[k];delete te[I]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const Z in F){const te=F[Z];for(const I in te){const X=te[I];for(const k in X)u(X[k].object),delete X[k];delete te[I]}}delete i[N.id]}function T(N){for(const F in i){const Z=i[F];for(const te in Z){const I=Z[te];if(I[N.id]===void 0)continue;const X=I[N.id];for(const k in X)u(X[k].object),delete X[k];delete I[N.id]}}}function x(N){for(const F in i){const Z=i[F],te=N.isInstancedMesh===!0?N.id:0,I=Z[te];if(I!==void 0){for(const X in I){const k=I[X];for(const U in k)u(k[U].object),delete k[U];delete I[X]}delete Z[te],Object.keys(Z).length===0&&delete i[F]}}}function C(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function H4(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function W4(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ti&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const x=T===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==mi&&!x)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:b,samples:E}}function j4(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,_=m*4;let M=h.clippingState||null;l.value=M,M=u(g,d,_,p);for(let b=0;b!==_;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const y=f!==null?f.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const h=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const hr=4,hg=[.125,.215,.35,.446,.526,.582],Br=20,X4=256,Do=new nx,pg=new at;let hd=null,pd=0,md=0,gd=!1;const q4=new W;class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=q4}=s;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ji,format:ti,colorSpace:wc,depthBuffer:!1},r=gg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y4(s)),this._blurMaterial=K4(s,e,n),this._ggxMaterial=$4(s,e,n)}return r}_compileMaterial(e){const n=new si(new qt,e);this._renderer.compile(n,Do)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(pg),f.toneMapping=yi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new Ca,new Cc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let h=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,h=!0):(v.color.copy(pg),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const b=this._cubeSize;bs(r,M*b,_>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Do)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:g}=this,y=this._sizeLods[i],v=3*y*(i>g-hr?i-g+hr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,bs(s,v,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,bs(e,v,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Do)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),y=s/g,v=isFinite(s)?1+Math.floor(u*y):Br;v>Br&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Br}`);const h=[];let m=0;for(let T=0;T<Br;++T){const x=T/y,C=Math.exp(-x*x/2);h.push(C),T===0?m+=C:T<v&&(m+=2*C)}for(let T=0;T<h.length;T++)h[T]=h[T]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],b=3*M*(r>_-hr?r-_+hr:0),E=4*(this._cubeSize-M);bs(n,b,E,3*M,2*M),l.setRenderTarget(n),l.render(f,Do)}}function Y4(t){const e=[],n=[],i=[];let r=t;const s=t-hr+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-hr?l=hg[o-t+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,y=3,v=2,h=1,m=new Float32Array(y*g*p),_=new Float32Array(v*g*p),M=new Float32Array(h*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,x=E>2?0:-1,C=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];m.set(C,y*g*E),_.set(d,v*g*E);const L=[E,E,E,E,E,E];M.set(L,h*g*E)}const b=new qt;b.setAttribute("position",new Wt(m,y)),b.setAttribute("uv",new Wt(_,v)),b.setAttribute("faceIndex",new Wt(M,h)),i.push(new si(b,null)),r>hr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function gg(t,e,n){const i=new Si(t,e,n);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $4(t,e,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function K4(t,e,n){const i=new Float32Array(Br),r=new W(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vg(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function _g(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class sx extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Q_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ca(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:zi});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=sn),new nE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Z4(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===ku||p===zu)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const y=new sx(g.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===ku||p===zu,y=p===is||p===ao;if(g||y){let v=n.get(d);const h=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new mg(t)),v=g?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const m=d.image;return g&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new mg(t)),v=g?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d,p){return p===ku?d.mapping=is:p===zu&&(d.mapping=ao),d}function l(d){let p=0;const g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Q4(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&E0("WebGLRenderer: "+i+" extension not supported."),r}}}function J4(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let _=0,M=m.length;_<M;_+=3){const b=m[_+0],E=m[_+1],T=m[_+2];d.push(b,E,E,T,T,b)}}else{const m=g.array;y=g.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const b=_+0,E=_+1,T=_+2;d.push(b,E,E,T,T,b)}}const v=new(g.count>=65535?K_:$_)(d,1);v.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,v)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let y=0;for(let v=0;v<p;v++)y+=d[v];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nT(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*E*4*f),x=new X_(T,b,E,f);x.type=mi,x.needsUpdate=!0;const C=M*4;for(let N=0;N<f;N++){const F=h[N],Z=m[N],te=_[N],I=b*E*4*N;for(let X=0;X<F.count;X++){const k=X*C;g===!0&&(r.fromBufferAttribute(F,X),T[I+k+0]=r.x,T[I+k+1]=r.y,T[I+k+2]=r.z,T[I+k+3]=0),y===!0&&(r.fromBufferAttribute(Z,X),T[I+k+4]=r.x,T[I+k+5]=r.y,T[I+k+6]=r.z,T[I+k+7]=0),v===!0&&(r.fromBufferAttribute(te,X),T[I+k+8]=r.x,T[I+k+9]=r.y,T[I+k+10]=r.z,T[I+k+11]=te.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new dt(b,E)},i.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function iT(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const rT={[P_]:"LINEAR_TONE_MAPPING",[N_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[D_]:"ACES_FILMIC_TONE_MAPPING",[U_]:"AGX_TONE_MAPPING",[F_]:"NEUTRAL_TONE_MAPPING",[I_]:"CUSTOM_TONE_MAPPING"};function sT(t,e,n,i,r){const s=new Si(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new lo(e,n):void 0}),o=new Si(e,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),a=new qt;a.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const l=new JM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new si(a,l),u=new nx(-1,1,1,-1,0,1);let f=null,d=null,p=!1,g,y=null,v=[],h=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let M=0;M<v.length;M++){const b=v[M];b.setSize&&b.setSize(m,_)}},this.setEffects=function(m){v=m,h=v.length>0&&v[0].isRenderPass===!0;const _=s.width,M=s.height;for(let b=0;b<v.length;b++){const E=v[b];E.setSize&&E.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===yi&&v.length===0)return!1;if(y=_,_!==null){const M=_.width,b=_.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return h===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=yi,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=g,p=!0;let M=s,b=o;for(let E=0;E<v.length;E++){const T=v[E];if(T.enabled!==!1&&(T.render(m,b,M,_),T.needsSwap!==!1)){const x=M;M=b,b=x}}if(f!==m.outputColorSpace||d!==m.toneMapping){f=m.outputColorSpace,d=m.toneMapping,l.defines={},et.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const E=rT[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ox=new dn,C0=new lo(1,1),ax=new X_,lx=new RM,cx=new Q_,xg=[],yg=[],Sg=new Float32Array(16),Mg=new Float32Array(9),Eg=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xg[r];if(s===void 0&&(s=new Float32Array(r),xg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=yg[e];n===void 0&&(n=new Int32Array(e),yg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Eg.set(i),t.uniformMatrix2fv(this.addr,!1,Eg),Gt(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Mg.set(i),t.uniformMatrix3fv(this.addr,!1,Mg),Gt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Bt(n,i))return;Sg.set(i),t.uniformMatrix4fv(this.addr,!1,Sg),Gt(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(C0.compareFunction=n.isReversedDepthBuffer()?Bh:zh,s=C0):s=ox,n.setTexture2D(e||s,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lx,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cx,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ax,r)}function TT(t){switch(t){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return wT}}function AT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function CT(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function NT(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LT(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function IT(t,e){t.uniform2iv(this.addr,e)}function UT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function BT(t,e){t.uniform4uiv(this.addr,e)}function GT(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=C0:o=ox;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function VT(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||lx,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||cx,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ax,s[o])}function jT(t){switch(t){case 5126:return AT;case 35664:return bT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return kT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return WT}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function wg(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),o=vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wg(n,c===void 0?new XT(a,t,e):new qT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new YT(a),wg(n,f)),n=f}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$T(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KT=37297;let ZT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ag=new qe;function JT(t){et._getMatrix(Ag,et.workingColorSpace,t);const e=`mat3( ${Ag.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Tc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QT(t.getShaderSource(e),a)}else return s}function eA(t,e){const n=JT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const tA={[P_]:"Linear",[N_]:"Reinhard",[L_]:"Cineon",[D_]:"ACESFilmic",[U_]:"AgX",[F_]:"Neutral",[I_]:"Custom"};function nA(t,e){const n=tA[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new W;function iA(){et.getLuminanceCoefficients(Tl);const t=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function sA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Go(t){return t!==""}function Cg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function R0(t){return t.replace(aA,cA)}const lA=new Map;function cA(t,e){let n=$e[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=$e[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return R0(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(t){return t.replace(uA,dA)}function dA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const fA={[zl]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function hA(t){return fA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pA={[is]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function mA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":pA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const gA={[ao]:"ENVMAP_MODE_REFRACTION"};function vA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":gA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[R_]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[cM]:"ENVMAP_BLENDING_ADD"};function xA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_A[t.combine]||"ENVMAP_BLENDING_NONE"}function yA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hA(n),c=mA(n),u=vA(n),f=xA(n),d=yA(n),p=rA(n),g=sA(s),y=r.createProgram();let v,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),h.length>0&&(h+=`
`)):(v=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),h=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?$e.tonemapping_pars_fragment:"",n.toneMapping!==yi?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,eA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=R0(o),o=Cg(o,n),o=Rg(o,n),a=R0(a),a=Cg(a,n),a=Rg(a,n),o=Pg(o),a=Pg(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+v+o,M=m+h+a,b=Tg(r,r.VERTEX_SHADER,_),E=Tg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,E),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",Z=r.getShaderInfoLog(b)||"",te=r.getShaderInfoLog(E)||"",I=F.trim(),X=Z.trim(),k=te.trim();let U=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,E);else{const V=bg(r,b,"vertex"),z=bg(r,E,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+V+`
`+z)}else I!==""?He("WebGLProgram: Program Info Log:",I):(X===""||k==="")&&(Y=!1);Y&&(N.diagnostics={runnable:U,programLog:I,vertexShader:{log:X,prefix:v},fragmentShader:{log:k,prefix:h}})}r.deleteShader(b),r.deleteShader(E),x=new Wl(r,y),C=oA(r,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,KT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}let MA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wA(e),n.set(e,i)),i}}class wA{constructor(e){this.id=MA++,this.code=e,this.usedTimes=0}}function TA(t){return t===rs||t===Mc||t===Ec}function AA(t,e,n,i,r,s){const o=new q_,a=new EA,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,C,L,N,F,Z){const te=N.fog,I=F.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||X,k),Y=U&&U.mapping===Jc?U.image.height:null,V=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=z!==void 0?z.length:0;let J=0;I.morphAttributes.position!==void 0&&(J=1),I.morphAttributes.normal!==void 0&&(J=2),I.morphAttributes.color!==void 0&&(J=3);let fe,_e,H,ae;if(V){const Xe=hi[V];fe=Xe.vertexShader,_e=Xe.fragmentShader}else fe=x.vertexShader,_e=x.fragmentShader,a.update(x),H=a.getVertexShaderID(x),ae=a.getFragmentShaderID(x);const ce=t.getRenderTarget(),G=t.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,K=!!x.map,de=!!x.matcap,Be=!!U,ke=!!x.aoMap,Ce=!!x.lightMap,st=!!x.bumpMap,Qe=!!x.normalMap,Et=!!x.displacementMap,D=!!x.emissiveMap,yt=!!x.metalnessMap,Ze=!!x.roughnessMap,ot=x.anisotropy>0,Me=x.clearcoat>0,St=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,B=x.transmission>0,re=ot&&!!x.anisotropyMap,le=Me&&!!x.clearcoatMap,me=Me&&!!x.clearcoatNormalMap,xe=Me&&!!x.clearcoatRoughnessMap,ne=A&&!!x.iridescenceMap,oe=A&&!!x.iridescenceThicknessMap,Te=S&&!!x.sheenColorMap,Re=S&&!!x.sheenRoughnessMap,ye=!!x.specularMap,ge=!!x.specularColorMap,We=!!x.specularIntensityMap,Se=B&&!!x.transmissionMap,Fe=B&&!!x.thicknessMap,P=!!x.gradientMap,ie=!!x.alphaMap,Q=x.alphaTest>0,pe=!!x.alphaHash,ue=!!x.extensions;let se=yi;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(se=t.toneMapping);const Pe={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:_e,defines:x.defines,customVertexShaderID:H,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:K,matcap:de,envMap:Be,envMapMode:Be&&U.mapping,envMapCubeUVHeight:Y,aoMap:ke,lightMap:Ce,bumpMap:st,normalMap:Qe,displacementMap:Et,emissiveMap:D,normalMapObjectSpace:Qe&&x.normalMapType===fM,normalMapTangentSpace:Qe&&x.normalMapType===Um,packedNormalMap:Qe&&x.normalMapType===Um&&TA(x.normalMap.format),metalnessMap:yt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:re,clearcoat:Me,clearcoatMap:le,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,dispersion:St,iridescence:A,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:S,sheenColorMap:Te,sheenRoughnessMap:Re,specularMap:ye,specularColorMap:ge,specularIntensityMap:We,transmission:B,transmissionMap:Se,thicknessMap:Fe,gradientMap:P,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Q,alphaHash:pe,combine:x.combine,mapUv:K&&g(x.map.channel),aoMapUv:ke&&g(x.aoMap.channel),lightMapUv:Ce&&g(x.lightMap.channel),bumpMapUv:st&&g(x.bumpMap.channel),normalMapUv:Qe&&g(x.normalMap.channel),displacementMapUv:Et&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:yt&&g(x.metalnessMap.channel),roughnessMapUv:Ze&&g(x.roughnessMap.channel),anisotropyMapUv:re&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:ge&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:Se&&g(x.transmissionMap.channel),thicknessMapUv:Fe&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qe||ot),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(K||ie),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Qe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:G,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:K&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function v(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)C.push(L),C.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(h(C,x),m(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function h(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function m(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const C=p[x.type];let L;if(C){const N=hi[C];L=KM.clone(N.uniforms)}else L=x.uniforms;return L}function M(x,C){let L=u.get(C);return L!==void 0?++L.usedTimes:(L=new SA(t,C,x,r),c.push(L),u.set(C,L)),L}function b(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:T}}function bA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Lg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,y,v,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:v,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=g,m.materialVariant=o(d),m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=v,m.group=h),e++,m}function l(d,p,g,y,v,h){const m=a(d,p,g,y,v,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(d,p,g,y,v,h){const m=a(d,p,g,y,v,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,p){n.length>1&&n.sort(d||CA),i.length>1&&i.sort(p||Lg),r.length>1&&r.sort(p||Lg)}function f(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function RA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Dg,t.set(i,[o])):r>=s.length?(o=new Dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new at};break;case"SpotLight":n={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function NA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LA=0;function DA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IA(t){const e=new PA,n=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Pt,o=new Pt;function a(c){let u=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,y=0,v=0,h=0,m=0,_=0,M=0,b=0,E=0,T=0;c.sort(DA);for(let C=0,L=c.length;C<L;C++){const N=c[C],F=N.color,Z=N.intensity,te=N.distance;let I=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===rs?I=N.shadow.map.texture:I=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=F.r*Z,f+=F.g*Z,d+=F.b*Z;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],Z);T++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=N.shadow.matrix,m++}i.directional[p]=X,p++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(F).multiplyScalar(Z),X.distance=te,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[y]=X;const k=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,k.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[y]=k.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=I,M++}y++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(F).multiplyScalar(Z),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=X,v++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const k=N.shadow,U=n.get(N);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=N.shadow.matrix,_++}i.point[g]=X,g++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(Z),X.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[h]=X,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==v||x.hemiLength!==h||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==b||x.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,x.directionalLength=p,x.pointLength=g,x.spotLength=y,x.rectAreaLength=v,x.hemiLength=h,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=b,x.numLightProbes=T,i.version=LA++)}function l(c,u){let f=0,d=0,p=0,g=0,y=0;const v=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(_.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function Ig(t){const e=new IA(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function UA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ig(t),e.set(r,[a])):s>=o.length?(a=new Ig(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
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
}`,kA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],zA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Ug=new Pt,Io=new W,_d=new W;function BA(t,e,n){let i=new Z_;const r=new dt,s=new dt,o=new It,a=new eE,l=new tE,c={},u=n.maxTextureSize,f={[Tr]:Sn,[Sn]:Tr,[Jn]:Jn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:FA,fragmentShader:OA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new si(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let h=this.type;this.render=function(E,T,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===HS&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zl);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Z=h!==this.type;Z&&T.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(I=>I.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,I=E.length;te<I;te++){const X=E[te],k=X.shadow;if(k===void 0){He("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const U=k.getFrameExtents();r.multiply(U),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,k.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||Z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Bo){if(X.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Si(r.x,r.y,{format:rs,type:ji,minFilter:sn,magFilter:sn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new lo(r.x,r.y,mi),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Xi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt}else X.isPointLight?(k.map=new sx(r.x),k.map.depthTexture=new YM(r.x,Mi)):(k.map=new Si(r.x,r.y),k.map.depthTexture=new lo(r.x,r.y,Mi)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Xi,this.type===zl?(k.map.depthTexture.compareFunction=Y?Bh:zh,k.map.depthTexture.minFilter=sn,k.map.depthTexture.magFilter=sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt);k.camera.updateProjectionMatrix()}const V=k.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<V;z++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,z),t.clear();else{z===0&&(t.setRenderTarget(k.map),t.clear());const ee=k.getViewport(z);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),F.viewport(o)}if(X.isPointLight){const ee=k.camera,J=k.matrix,fe=X.distance||ee.far;fe!==ee.far&&(ee.far=fe,ee.updateProjectionMatrix()),Io.setFromMatrixPosition(X.matrixWorld),ee.position.copy(Io),_d.copy(ee.position),_d.add(kA[z]),ee.up.copy(zA[z]),ee.lookAt(_d),ee.updateMatrixWorld(),J.makeTranslation(-Io.x,-Io.y,-Io.z),Ug.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ug,ee.coordinateSystem,ee.reversedDepth)}else k.updateMatrices(X);i=k.getFrustum(),M(T,x,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Bo&&m(k,x),k.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(C,L,N)};function m(E,T){const x=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(r.x,r.y,{format:rs,type:ji})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,x,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,x,p,y,null)}function _(E,T,x,C){let L=null;const N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)L=N;else if(L=x.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=L.uuid,Z=T.uuid;let te=c[F];te===void 0&&(te={},c[F]=te);let I=te[Z];I===void 0&&(I=L.clone(),te[Z]=I,T.addEventListener("dispose",b)),L=I}if(L.visible=T.visible,L.wireframe=T.wireframe,C===Bo?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:f[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=t.properties.get(L);F.light=x}return L}function M(E,T,x,C,L){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Bo)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),te=E.material;if(Array.isArray(te)){const I=Z.groups;for(let X=0,k=I.length;X<k;X++){const U=I[X],Y=te[U.materialIndex];if(Y&&Y.visible){const V=_(E,Y,C,L);E.onBeforeShadow(t,E,T,x,Z,V,U),t.renderBufferDirect(x,null,Z,V,E,U),E.onAfterShadow(t,E,T,x,Z,V,U)}}}else if(te.visible){const I=_(E,te,C,L);E.onBeforeShadow(t,E,T,x,Z,I,null),t.renderBufferDirect(x,null,Z,I,E,null),E.onAfterShadow(t,E,T,x,Z,I,null)}}const F=E.children;for(let Z=0,te=F.length;Z<te;Z++)M(F[Z],T,x,C,L)}function b(E){E.target.removeEventListener("dispose",b);for(const x in c){const C=c[x],L=E.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function GA(t,e){function n(){let P=!1;const ie=new It;let Q=null;const pe=new It(0,0,0,0);return{setMask:function(ue){Q!==ue&&!P&&(t.colorMask(ue,ue,ue,ue),Q=ue)},setLocked:function(ue){P=ue},setClear:function(ue,se,Pe,Xe,je){je===!0&&(ue*=Xe,se*=Xe,Pe*=Xe),ie.set(ue,se,Pe,Xe),pe.equals(ie)===!1&&(t.clearColor(ue,se,Pe,Xe),pe.copy(ie))},reset:function(){P=!1,Q=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,Q=null,pe=null,ue=null;return{setReversed:function(se){if(ie!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ie=se;const Xe=ue;ue=null,this.setClear(Xe)}},getReversed:function(){return ie},setTest:function(se){se?ce(t.DEPTH_TEST):G(t.DEPTH_TEST)},setMask:function(se){Q!==se&&!P&&(t.depthMask(se),Q=se)},setFunc:function(se){if(ie&&(se=MM[se]),pe!==se){switch(se){case kf:t.depthFunc(t.NEVER);break;case zf:t.depthFunc(t.ALWAYS);break;case Bf:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Vf:t.depthFunc(t.GEQUAL);break;case Hf:t.depthFunc(t.GREATER);break;case Wf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=se}},setLocked:function(se){P=se},setClear:function(se){ue!==se&&(ue=se,ie&&(se=1-se),t.clearDepth(se))},reset:function(){P=!1,Q=null,pe=null,ue=null,ie=!1}}}function r(){let P=!1,ie=null,Q=null,pe=null,ue=null,se=null,Pe=null,Xe=null,je=null;return{setTest:function(Ie){P||(Ie?ce(t.STENCIL_TEST):G(t.STENCIL_TEST))},setMask:function(Ie){ie!==Ie&&!P&&(t.stencilMask(Ie),ie=Ie)},setFunc:function(Ie,ht,ai){(Q!==Ie||pe!==ht||ue!==ai)&&(t.stencilFunc(Ie,ht,ai),Q=Ie,pe=ht,ue=ai)},setOp:function(Ie,ht,ai){(se!==Ie||Pe!==ht||Xe!==ai)&&(t.stencilOp(Ie,ht,ai),se=Ie,Pe=ht,Xe=ai)},setLocked:function(Ie){P=Ie},setClear:function(Ie){je!==Ie&&(t.clearStencil(Ie),je=Ie)},reset:function(){P=!1,ie=null,Q=null,pe=null,ue=null,se=null,Pe=null,Xe=null,je=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,g=[],y=null,v=!1,h=null,m=null,_=null,M=null,b=null,E=null,T=null,x=new at(0,0,0),C=0,L=!1,N=null,F=null,Z=null,te=null,I=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=U>=2);let V=null,z={};const ee=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),fe=new It().fromArray(ee),_e=new It().fromArray(J);function H(P,ie,Q,pe){const ue=new Uint8Array(4),se=t.createTexture();t.bindTexture(P,se),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<Q;Pe++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ie+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return se}const ae={};ae[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(oo),st(!1),Qe(Lm),ce(t.CULL_FACE),ke(zi);function ce(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function G(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Ue(P,ie){return d[P]!==ie?(t.bindFramebuffer(P,ie),d[P]=ie,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ve(P,ie){let Q=g,pe=!1;if(P){Q=p.get(ie),Q===void 0&&(Q=[],p.set(ie,Q));const ue=P.textures;if(Q.length!==ue.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=ue.length;se<Pe;se++)Q[se]=t.COLOR_ATTACHMENT0+se;Q.length=ue.length,pe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,pe=!0);pe&&t.drawBuffers(Q)}function K(P){return y!==P?(t.useProgram(P),y=P,!0):!1}const de={[zr]:t.FUNC_ADD,[jS]:t.FUNC_SUBTRACT,[XS]:t.FUNC_REVERSE_SUBTRACT};de[qS]=t.MIN,de[YS]=t.MAX;const Be={[$S]:t.ZERO,[KS]:t.ONE,[ZS]:t.SRC_COLOR,[Ff]:t.SRC_ALPHA,[iM]:t.SRC_ALPHA_SATURATE,[tM]:t.DST_COLOR,[JS]:t.DST_ALPHA,[QS]:t.ONE_MINUS_SRC_COLOR,[Of]:t.ONE_MINUS_SRC_ALPHA,[nM]:t.ONE_MINUS_DST_COLOR,[eM]:t.ONE_MINUS_DST_ALPHA,[rM]:t.CONSTANT_COLOR,[sM]:t.ONE_MINUS_CONSTANT_COLOR,[oM]:t.CONSTANT_ALPHA,[aM]:t.ONE_MINUS_CONSTANT_ALPHA};function ke(P,ie,Q,pe,ue,se,Pe,Xe,je,Ie){if(P===zi){v===!0&&(G(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),P!==WS){if(P!==h||Ie!==L){if((m!==zr||b!==zr)&&(t.blendEquation(t.FUNC_ADD),m=zr,b=zr),Ie)switch(P){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFunc(t.ONE,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Im:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",P);break}else switch(P){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Dm:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",P);break}_=null,M=null,E=null,T=null,x.set(0,0,0),C=0,h=P,L=Ie}return}ue=ue||ie,se=se||Q,Pe=Pe||pe,(ie!==m||ue!==b)&&(t.blendEquationSeparate(de[ie],de[ue]),m=ie,b=ue),(Q!==_||pe!==M||se!==E||Pe!==T)&&(t.blendFuncSeparate(Be[Q],Be[pe],Be[se],Be[Pe]),_=Q,M=pe,E=se,T=Pe),(Xe.equals(x)===!1||je!==C)&&(t.blendColor(Xe.r,Xe.g,Xe.b,je),x.copy(Xe),C=je),h=P,L=!1}function Ce(P,ie){P.side===Jn?G(t.CULL_FACE):ce(t.CULL_FACE);let Q=P.side===Sn;ie&&(Q=!Q),st(Q),P.blending===Ks&&P.transparent===!1?ke(zi):ke(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;a.setTest(pe),pe&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):G(t.SAMPLE_ALPHA_TO_COVERAGE)}function st(P){N!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),N=P)}function Qe(P){P!==GS?(ce(t.CULL_FACE),P!==F&&(P===Lm?t.cullFace(t.BACK):P===VS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):G(t.CULL_FACE),F=P}function Et(P){P!==Z&&(k&&t.lineWidth(P),Z=P)}function D(P,ie,Q){P?(ce(t.POLYGON_OFFSET_FILL),(te!==ie||I!==Q)&&(te=ie,I=Q,o.getReversed()&&(ie=-ie),t.polygonOffset(ie,Q))):G(t.POLYGON_OFFSET_FILL)}function yt(P){P?ce(t.SCISSOR_TEST):G(t.SCISSOR_TEST)}function Ze(P){P===void 0&&(P=t.TEXTURE0+X-1),V!==P&&(t.activeTexture(P),V=P)}function ot(P,ie,Q){Q===void 0&&(V===null?Q=t.TEXTURE0+X-1:Q=V);let pe=z[Q];pe===void 0&&(pe={type:void 0,texture:void 0},z[Q]=pe),(pe.type!==P||pe.texture!==ie)&&(V!==Q&&(t.activeTexture(Q),V=Q),t.bindTexture(P,ie||ae[P]),pe.type=P,pe.texture=ie)}function Me(){const P=z[V];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function St(){try{t.compressedTexImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function S(){try{t.texSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function B(){try{t.texSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function le(){try{t.compressedTexSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function me(){try{t.texStorage2D(...arguments)}catch(P){it("WebGLState:",P)}}function xe(){try{t.texStorage3D(...arguments)}catch(P){it("WebGLState:",P)}}function ne(){try{t.texImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function oe(){try{t.texImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function Te(P){return f[P]!==void 0?f[P]:t.getParameter(P)}function Re(P,ie){f[P]!==ie&&(t.pixelStorei(P,ie),f[P]=ie)}function ye(P){fe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),fe.copy(P))}function ge(P){_e.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function We(P,ie){let Q=c.get(ie);Q===void 0&&(Q=new WeakMap,c.set(ie,Q));let pe=Q.get(P);pe===void 0&&(pe=t.getUniformBlockIndex(ie,P.name),Q.set(P,pe))}function Se(P,ie){const pe=c.get(ie).get(P);l.get(ie)!==pe&&(t.uniformBlockBinding(ie,pe,P.__bindingPointIndex),l.set(ie,pe))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},V=null,z={},d={},p=new WeakMap,g=[],y=null,v=!1,h=null,m=null,_=null,M=null,b=null,E=null,T=null,x=new at(0,0,0),C=0,L=!1,N=null,F=null,Z=null,te=null,I=null,fe.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:G,bindFramebuffer:Ue,drawBuffers:Ve,useProgram:K,setBlending:ke,setMaterial:Ce,setFlipSided:st,setCullFace:Qe,setLineWidth:Et,setPolygonOffset:D,setScissorTest:yt,activeTexture:Ze,bindTexture:ot,unbindTexture:Me,compressedTexImage2D:St,compressedTexImage3D:A,texImage2D:ne,texImage3D:oe,pixelStorei:Re,getParameter:Te,updateUBOMapping:We,uniformBlockBinding:Se,texStorage2D:me,texStorage3D:xe,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:ye,viewport:ge,reset:Fe}}function VA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):bc("canvas")}function v(A,S,B){let re=1;const le=St(A);if((le.width>B||le.height>B)&&(re=B/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const me=Math.floor(re*le.width),xe=Math.floor(re*le.height);d===void 0&&(d=y(me,xe));const ne=S?y(me,xe):d;return ne.width=me,ne.height=xe,ne.getContext("2d").drawImage(A,0,0,me,xe),He("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+me+"x"+xe+")."),ne}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,B,re,le,me=!1){if(A!==null){if(t[A]!==void 0)return t[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===t.RED&&(B===t.FLOAT&&(ne=t.R32F),B===t.HALF_FLOAT&&(ne=t.R16F),B===t.UNSIGNED_BYTE&&(ne=t.R8),B===t.UNSIGNED_SHORT&&xe&&(ne=xe.R16_EXT),B===t.SHORT&&xe&&(ne=xe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ne=t.R8UI),B===t.UNSIGNED_SHORT&&(ne=t.R16UI),B===t.UNSIGNED_INT&&(ne=t.R32UI),B===t.BYTE&&(ne=t.R8I),B===t.SHORT&&(ne=t.R16I),B===t.INT&&(ne=t.R32I)),S===t.RG&&(B===t.FLOAT&&(ne=t.RG32F),B===t.HALF_FLOAT&&(ne=t.RG16F),B===t.UNSIGNED_BYTE&&(ne=t.RG8),B===t.UNSIGNED_SHORT&&xe&&(ne=xe.RG16_EXT),B===t.SHORT&&xe&&(ne=xe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ne=t.RG8UI),B===t.UNSIGNED_SHORT&&(ne=t.RG16UI),B===t.UNSIGNED_INT&&(ne=t.RG32UI),B===t.BYTE&&(ne=t.RG8I),B===t.SHORT&&(ne=t.RG16I),B===t.INT&&(ne=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),B===t.UNSIGNED_INT&&(ne=t.RGB32UI),B===t.BYTE&&(ne=t.RGB8I),B===t.SHORT&&(ne=t.RGB16I),B===t.INT&&(ne=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),B===t.UNSIGNED_INT&&(ne=t.RGBA32UI),B===t.BYTE&&(ne=t.RGBA8I),B===t.SHORT&&(ne=t.RGBA16I),B===t.INT&&(ne=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_SHORT&&xe&&(ne=xe.RGB16_EXT),B===t.SHORT&&xe&&(ne=xe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),S===t.RGBA){const oe=me?Tc:et.getTransfer(le);B===t.FLOAT&&(ne=t.RGBA32F),B===t.HALF_FLOAT&&(ne=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ne=oe===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&xe&&(ne=xe.RGBA16_EXT),B===t.SHORT&&xe&&(ne=xe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(A,S){let B;return A?S===null||S===Mi||S===va?B=t.DEPTH24_STENCIL8:S===mi?B=t.DEPTH32F_STENCIL8:S===ga&&(B=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===va?B=t.DEPTH_COMPONENT24:S===mi?B=t.DEPTH_COMPONENT32F:S===ga&&(B=t.DEPTH_COMPONENT16),B}function E(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),N(S)}function C(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,re=p.get(B);if(re){const le=re[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(A),Object.keys(re).length===0&&p.delete(B)}i.remove(A)}function L(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,re=p.get(B);delete re[S.__cacheKey],o.memory.textures--}function N(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let le=0;le<S.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(S.__webglFramebuffer[re][le]);else t.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)t.deleteFramebuffer(S.__webglFramebuffer[re]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let re=0,le=B.length;re<le;re++){const me=i.get(B[re]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(B[re])}i.remove(A)}let F=0;function Z(){F=0}function te(){return F}function I(A){F=A}function X(){const A=F;return A>=r.maxTextures&&He("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function k(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const B=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const re=A.image;if(re===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function Y(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function V(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function z(A,S){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ue(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const ee={[jf]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[Xf]:t.MIRRORED_REPEAT},J={[Yt]:t.NEAREST,[uM]:t.NEAREST_MIPMAP_NEAREST,[Ja]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Bu]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},fe={[hM]:t.NEVER,[_M]:t.ALWAYS,[pM]:t.LESS,[zh]:t.LEQUAL,[mM]:t.EQUAL,[Bh]:t.GEQUAL,[gM]:t.GREATER,[vM]:t.NOTEQUAL};function _e(A,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===Bu||S.magFilter===Ja||S.magFilter===jr||S.minFilter===sn||S.minFilter===Bu||S.minFilter===Ja||S.minFilter===jr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ee[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ee[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ee[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Ja&&S.minFilter!==jr||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function H(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const re=S.source;let le=p.get(re);le===void 0&&(le={},p.set(re,le));const me=k(S);if(me!==A.__cacheKey){le[me]===void 0&&(le[me]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[me].usedTimes++;const xe=le[A.__cacheKey];xe!==void 0&&(le[A.__cacheKey].usedTimes--,xe.usedTimes===0&&L(S)),A.__cacheKey=me,A.__webglTexture=le[me].texture}return B}function ae(A,S,B){return Math.floor(Math.floor(A/B)/S)}function ce(A,S,B,re){const me=A.updateRanges;if(me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,re,S.data);else{me.sort((Re,ye)=>Re.start-ye.start);let xe=0;for(let Re=1;Re<me.length;Re++){const ye=me[xe],ge=me[Re],We=ye.start+ye.count,Se=ae(ge.start,S.width,4),Fe=ae(ye.start,S.width,4);ge.start<=We+1&&Se===Fe&&ae(ge.start+ge.count-1,S.width,4)===Se?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++xe,me[xe]=ge)}me.length=xe+1;const ne=n.getParameter(t.UNPACK_ROW_LENGTH),oe=n.getParameter(t.UNPACK_SKIP_PIXELS),Te=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Re=0,ye=me.length;Re<ye;Re++){const ge=me[Re],We=Math.floor(ge.start/4),Se=Math.ceil(ge.count/4),Fe=We%S.width,P=Math.floor(We/S.width),ie=Se,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Fe,P,ie,Q,B,re,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Te)}}function G(A,S,B){let re=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=t.TEXTURE_3D);const le=H(A,S),me=S.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+B);const xe=i.get(me);if(me.version!==xe.__version||le===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=et.getPrimaries(et.workingColorSpace),pe=S.colorSpace===cr?null:et.getPrimaries(S.colorSpace),ue=S.colorSpace===cr||Q===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=v(S.image,!1,r.maxTextureSize);oe=Me(S,oe);const Te=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let ye=M(S.internalFormat,Te,Re,S.normalized,S.colorSpace,S.isVideoTexture);_e(re,S);let ge;const We=S.mipmaps,Se=S.isVideoTexture!==!0,Fe=xe.__version===void 0||le===!0,P=me.dataReady,ie=E(S,oe);if(S.isDepthTexture)ye=b(S.format===Xr,S.type),Fe&&(Se?n.texStorage2D(t.TEXTURE_2D,1,ye,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ye,oe.width,oe.height,0,Te,Re,null));else if(S.isDataTexture)if(We.length>0){Se&&Fe&&n.texStorage2D(t.TEXTURE_2D,ie,ye,We[0].width,We[0].height);for(let Q=0,pe=We.length;Q<pe;Q++)ge=We[Q],Se?P&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Te,Re,ge.data):n.texImage2D(t.TEXTURE_2D,Q,ye,ge.width,ge.height,0,Te,Re,ge.data);S.generateMipmaps=!1}else Se?(Fe&&n.texStorage2D(t.TEXTURE_2D,ie,ye,oe.width,oe.height),P&&ce(S,oe,Te,Re)):n.texImage2D(t.TEXTURE_2D,0,ye,oe.width,oe.height,0,Te,Re,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ye,We[0].width,We[0].height,oe.depth);for(let Q=0,pe=We.length;Q<pe;Q++)if(ge=We[Q],S.format!==ti)if(Te!==null)if(Se){if(P)if(S.layerUpdates.size>0){const ue=fg(ge.width,ge.height,S.format,S.type);for(const se of S.layerUpdates){const Pe=ge.data.subarray(se*ue/ge.data.BYTES_PER_ELEMENT,(se+1)*ue/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,se,ge.width,ge.height,1,Te,Pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,oe.depth,Te,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ye,ge.width,ge.height,oe.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,oe.depth,Te,Re,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ye,ge.width,ge.height,oe.depth,0,Te,Re,ge.data)}else{Se&&Fe&&n.texStorage2D(t.TEXTURE_2D,ie,ye,We[0].width,We[0].height);for(let Q=0,pe=We.length;Q<pe;Q++)ge=We[Q],S.format!==ti?Te!==null?Se?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Te,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ye,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?P&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,Te,Re,ge.data):n.texImage2D(t.TEXTURE_2D,Q,ye,ge.width,ge.height,0,Te,Re,ge.data)}else if(S.isDataArrayTexture)if(Se){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ye,oe.width,oe.height,oe.depth),P)if(S.layerUpdates.size>0){const Q=fg(oe.width,oe.height,S.format,S.type);for(const pe of S.layerUpdates){const ue=oe.data.subarray(pe*Q/oe.data.BYTES_PER_ELEMENT,(pe+1)*Q/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,oe.width,oe.height,1,Te,Re,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,Re,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,oe.width,oe.height,oe.depth,0,Te,Re,oe.data);else if(S.isData3DTexture)Se?(Fe&&n.texStorage3D(t.TEXTURE_3D,ie,ye,oe.width,oe.height,oe.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,Re,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ye,oe.width,oe.height,oe.depth,0,Te,Re,oe.data);else if(S.isFramebufferTexture){if(Fe)if(Se)n.texStorage2D(t.TEXTURE_2D,ie,ye,oe.width,oe.height);else{let Q=oe.width,pe=oe.height;for(let ue=0;ue<ie;ue++)n.texImage2D(t.TEXTURE_2D,ue,ye,Q,pe,0,Te,Re,null),Q>>=1,pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),oe.parentNode!==Q){Q.appendChild(oe),f.add(S),Q.onpaint=Xe=>{const je=Xe.changedElements;for(const Ie of f)je.includes(Ie.image)&&(Ie.needsUpdate=!0)},Q.requestPaint();return}const pe=0,ue=t.RGBA,se=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,pe,ue,se,Pe,oe),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(We.length>0){if(Se&&Fe){const Q=St(We[0]);n.texStorage2D(t.TEXTURE_2D,ie,ye,Q.width,Q.height)}for(let Q=0,pe=We.length;Q<pe;Q++)ge=We[Q],Se?P&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Te,Re,ge):n.texImage2D(t.TEXTURE_2D,Q,ye,Te,Re,ge);S.generateMipmaps=!1}else if(Se){if(Fe){const Q=St(oe);n.texStorage2D(t.TEXTURE_2D,ie,ye,Q.width,Q.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Re,oe)}else n.texImage2D(t.TEXTURE_2D,0,ye,Te,Re,oe);h(S)&&m(re),xe.__version=me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ue(A,S,B){if(S.image.length!==6)return;const re=H(A,S),le=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const me=i.get(le);if(le.version!==me.__version||re===!0){n.activeTexture(t.TEXTURE0+B);const xe=et.getPrimaries(et.workingColorSpace),ne=S.colorSpace===cr?null:et.getPrimaries(S.colorSpace),oe=S.colorSpace===cr||xe===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,Re=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!Te&&!Re?ye[se]=v(S.image[se],!0,r.maxCubemapSize):ye[se]=Re?S.image[se].image:S.image[se],ye[se]=Me(S,ye[se]);const ge=ye[0],We=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),Fe=M(S.internalFormat,We,Se,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,ie=me.__version===void 0||re===!0,Q=le.dataReady;let pe=E(S,ge);_e(t.TEXTURE_CUBE_MAP,S);let ue;if(Te){P&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Fe,ge.width,ge.height);for(let se=0;se<6;se++){ue=ye[se].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Xe=ue[Pe];S.format!==ti?We!==null?P?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,We,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Fe,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,We,Se,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Fe,Xe.width,Xe.height,0,We,Se,Xe.data)}}}else{if(ue=S.mipmaps,P&&ie){ue.length>0&&pe++;const se=St(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(Re){P?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,We,Se,ye[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,ye[se].width,ye[se].height,0,We,Se,ye[se].data);for(let Pe=0;Pe<ue.length;Pe++){const je=ue[Pe].image[se].image;P?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,je.width,je.height,We,Se,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Fe,je.width,je.height,0,We,Se,je.data)}}else{P?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,We,Se,ye[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,We,Se,ye[se]);for(let Pe=0;Pe<ue.length;Pe++){const Xe=ue[Pe];P?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,We,Se,Xe.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Fe,We,Se,Xe.image[se])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),me.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ve(A,S,B,re,le,me){const xe=s.convert(B.format,B.colorSpace),ne=s.convert(B.type),oe=M(B.internalFormat,xe,ne,B.normalized,B.colorSpace),Te=i.get(S),Re=i.get(B);if(Re.__renderTarget=S,!Te.__hasExternalTextures){const ye=Math.max(1,S.width>>me),ge=Math.max(1,S.height>>me);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,me,oe,ye,ge,S.depth,0,xe,ne,null):n.texImage2D(le,me,oe,ye,ge,0,xe,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,le,Re.__webglTexture,0,yt(S)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,le,Re.__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const re=S.depthTexture,le=re&&re.isDepthTexture?re.type:null,me=b(S.stencilBuffer,le),xe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),me,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,A)}else{const re=S.textures;for(let le=0;le<re.length;le++){const me=re[le],xe=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),oe=M(me.internalFormat,xe,ne,me.normalized,me.colorSpace);Ze(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(S),oe,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(A,S,B){const re=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(S.depthTexture);if(le.__renderTarget=S,(!le.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(le.__webglInit===void 0&&(le.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),le.__webglTexture===void 0){le.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),_e(t.TEXTURE_CUBE_MAP,S.depthTexture);const Te=s.convert(S.depthTexture.format),Re=s.convert(S.depthTexture.type);let ye;S.depthTexture.format===Xi?ye=t.DEPTH_COMPONENT24:S.depthTexture.format===Xr&&(ye=t.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,S.width,S.height,0,Te,Re,null)}}else U(S.depthTexture,0);const me=le.__webglTexture,xe=yt(S),ne=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,oe=S.depthTexture.format===Xr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Xi)Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,me,0);else if(S.depthTexture.format===Xr)Ze(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,me,0);else throw new Error("Unknown depthTexture format")}function Be(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const le=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),S.__depthDisposeCallback=le}S.__boundDepthTexture=re}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let re=0;re<6;re++)de(S.__webglFramebuffer[re],A,re);else{const re=A.texture.mipmaps;re&&re.length>0?de(S.__webglFramebuffer[0],A,0):de(S.__webglFramebuffer,A,0)}else if(B){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=t.createRenderbuffer(),K(S.__webglDepthbuffer[re],A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,me)}}else{const re=A.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),K(S.__webglDepthbuffer,A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,me)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(A,S,B){const re=i.get(A);S!==void 0&&Ve(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Be(A)}function Ce(A){const S=A.texture,B=i.get(A),re=i.get(S);A.addEventListener("dispose",x);const le=A.textures,me=A.isWebGLCubeRenderTarget===!0,xe=le.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=S.version,o.memory.textures++),me){B.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ne]=[];for(let oe=0;oe<S.mipmaps.length;oe++)B.__webglFramebuffer[ne][oe]=t.createFramebuffer()}else B.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)B.__webglFramebuffer[ne]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ne=0,oe=le.length;ne<oe;ne++){const Te=i.get(le[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ze(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){const oe=le[ne];B.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ne]);const Te=s.convert(oe.format,oe.colorSpace),Re=s.convert(oe.type),ye=M(oe.internalFormat,Te,Re,oe.normalized,oe.colorSpace,A.isXRRenderTarget===!0),ge=yt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,B.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),K(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),_e(t.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Ve(B.__webglFramebuffer[ne][oe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else Ve(B.__webglFramebuffer[ne],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ne=0,oe=le.length;ne<oe;ne++){const Te=le[ne],Re=i.get(Te);let ye=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,Re.__webglTexture),_e(ye,Te),Ve(B.__webglFramebuffer,A,Te,t.COLOR_ATTACHMENT0+ne,ye,0),h(Te)&&m(ye)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,re.__webglTexture),_e(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)Ve(B.__webglFramebuffer[oe],A,S,t.COLOR_ATTACHMENT0,ne,oe);else Ve(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ne,0);h(S)&&m(ne),n.unbindTexture()}A.depthBuffer&&Be(A)}function st(A){const S=A.textures;for(let B=0,re=S.length;B<re;B++){const le=S[B];if(h(le)){const me=_(A),xe=i.get(le).__webglTexture;n.bindTexture(me,xe),m(me),n.unbindTexture()}}}const Qe=[],Et=[];function D(A){if(A.samples>0){if(Ze(A)===!1){const S=A.textures,B=A.width,re=A.height;let le=t.COLOR_BUFFER_BIT;const me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(A),ne=S.length>1;if(ne)for(let Te=0;Te<S.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const oe=A.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const Re=i.get(S[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,B,re,0,0,B,re,le,t.NEAREST),l===!0&&(Qe.length=0,Et.length=0,Qe.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Qe.push(me),Et.push(me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<S.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const Re=i.get(S[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function yt(A){return Math.min(r.maxSamples,A.samples)}function Ze(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function Me(A,S){const B=A.colorSpace,re=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==wc&&B!==cr&&(et.getTransfer(B)===lt?(re!==ti||le!==zn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",B)),S}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.getTextureUnits=te,this.setTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HA(t,e){function n(i,r=cr){let s;const o=et.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===Ih)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===B_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===k_)return t.BYTE;if(i===z_)return t.SHORT;if(i===ga)return t.UNSIGNED_SHORT;if(i===Dh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===V_)return t.ALPHA;if(i===H_)return t.RGB;if(i===ti)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Xr)return t.DEPTH_STENCIL;if(i===W_)return t.RED;if(i===Fh)return t.RED_INTEGER;if(i===rs)return t.RG;if(i===Oh)return t.RG_INTEGER;if(i===kh)return t.RGBA_INTEGER;if(i===Bl||i===Gl||i===Vl||i===Hl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Yf||i===$f||i===Kf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zf||i===Qf||i===Jf||i===e0||i===t0||i===Mc||i===n0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zf||i===Qf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===e0)return s.COMPRESSED_R11_EAC;if(i===t0)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Mc)return s.COMPRESSED_RG11_EAC;if(i===n0)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===i0||i===r0||i===s0||i===o0||i===a0||i===l0||i===c0||i===u0||i===d0||i===f0||i===h0||i===p0||i===m0||i===g0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===i0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===r0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===s0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===o0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===a0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===l0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===c0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===u0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===d0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===f0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===h0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===p0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===m0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===g0)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===v0||i===_0||i===x0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===v0)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===x0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===y0||i===S0||i===Ec||i===M0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===y0)return s.COMPRESSED_RED_RGTC1_EXT;if(i===S0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===M0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new J_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:WA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new eu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",v=new XA,h={},m=n.getContextAttributes();let _=null,M=null;const b=[],E=[],T=new dt;let x=null;const C=new kn;C.viewport=new It;const L=new kn;L.viewport=new It;const N=[C,L],F=new iE;let Z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ae=b[H];return ae===void 0&&(ae=new Yu,b[H]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(H){let ae=b[H];return ae===void 0&&(ae=new Yu,b[H]=ae),ae.getGripSpace()},this.getHand=function(H){let ae=b[H];return ae===void 0&&(ae=new Yu,b[H]=ae),ae.getHandSpace()};function I(H){const ae=E.indexOf(H.inputSource);if(ae===-1)return;const ce=b[ae];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||o),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let H=0;H<b.length;H++){const ae=E[H];ae!==null&&(E[H]=null,b[H].disconnect(ae))}Z=null,te=null,v.reset();for(const H in h)delete h[H];e.setRenderTarget(_),p=null,d=null,f=null,r=null,M=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,G=null,Ue=null;m.depth&&(Ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?Xr:Xi,G=m.stencil?va:Mi);const Ve={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Si(d.textureWidth,d.textureHeight,{format:ti,type:zn,depthTexture:new lo(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Si(p.framebufferWidth,p.framebufferHeight,{format:ti,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(H){for(let ae=0;ae<H.removed.length;ae++){const ce=H.removed[ae],G=E.indexOf(ce);G>=0&&(E[G]=null,b[G].disconnect(ce))}for(let ae=0;ae<H.added.length;ae++){const ce=H.added[ae];let G=E.indexOf(ce);if(G===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=E.length){E.push(ce),G=Ve;break}else if(E[Ve]===null){E[Ve]=ce,G=Ve;break}if(G===-1)break}const Ue=b[G];Ue&&Ue.connect(ce)}}const U=new W,Y=new W;function V(H,ae,ce){U.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const G=U.distanceTo(Y),Ue=ae.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,K=Ue[14]/(Ue[10]-1),de=Ue[14]/(Ue[10]+1),Be=(Ue[9]+1)/Ue[5],ke=(Ue[9]-1)/Ue[5],Ce=(Ue[8]-1)/Ue[0],st=(Ve[8]+1)/Ve[0],Qe=K*Ce,Et=K*st,D=G/(-Ce+st),yt=D*-Ce;if(ae.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(yt),H.translateZ(D),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ue[10]===-1)H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ze=K+D,ot=de+D,Me=Qe-yt,St=Et+(G-yt),A=Be*de/ot*Ze,S=ke*de/ot*Ze;H.projectionMatrix.makePerspective(Me,St,A,S,Ze,ot),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function z(H,ae){ae===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ae.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ae=H.near,ce=H.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),F.near=L.near=C.near=ae,F.far=L.far=C.far=ce,(Z!==F.near||te!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,te=F.far),F.layers.mask=H.layers.mask|6,C.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const G=H.parent,Ue=F.cameras;z(F,G);for(let Ve=0;Ve<Ue.length;Ve++)z(Ue[Ve],G);Ue.length===2?V(F,C,L):F.projectionMatrix.copy(C.projectionMatrix),ee(H,F,G)};function ee(H,ae,ce){ce===null?H.matrix.copy(ae.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(ae.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=w0*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(H){return h[H]};let J=null;function fe(H,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let G=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,G=!0);for(let de=0;de<ce.length;de++){const Be=ce[de];let ke=null;if(p!==null)ke=p.getViewport(Be);else{const st=f.getViewSubImage(d,Be);ke=st.viewport,de===0&&(e.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(M))}let Ce=N[de];Ce===void 0&&(Ce=new kn,Ce.layers.enable(de),Ce.viewport=new It,N[de]=Ce),Ce.matrix.fromArray(Be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ke.x,ke.y,ke.width,ke.height),de===0&&(F.matrix.copy(Ce.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),G===!0&&F.cameras.push(Ce)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const de=f.getDepthInformation(ce[0]);de&&de.isValid&&de.texture&&v.init(de,r.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let de=0;de<ce.length;de++){const Be=ce[de].camera;if(Be){let ke=h[Be];ke||(ke=new J_,h[Be]=ke);const Ce=f.getCameraImage(Be);ke.sourceTexture=Ce}}}}for(let ce=0;ce<b.length;ce++){const G=E[ce],Ue=b[ce];G!==null&&Ue!==void 0&&Ue.update(G,ae,c||o)}J&&J(H,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const _e=new ix;_e.setAnimationLoop(fe),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const YA=new Pt,ux=new qe;ux.set(-1,0,0,0,1,0,0,0,1);function $A(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,ex(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,m,_,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),d(v,h),h.isMeshPhysicalMaterial&&p(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),g(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),y(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,m,_):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Sn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Sn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,M=m.envMapRotation;_&&(v.envMap.value=_,v.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(ux),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,_){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=_*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function d(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,h){h.matcap&&(v.matcap.value=h.matcap)}function y(v,h){const m=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(g(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",v));const b=_.program;i.updateUBOMapping(m,b);const E=e.render.frame;s[m.id]!==E&&(d(m),s[m.id]=E)}function u(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),b=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,L=x.length;C<L;C++){const N=x[C];if(p(N,E,C,b)===!0){const F=N.__offset,Z=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let I=0;I<Z.length;I++){const X=Z[I],k=y(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+te,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):ArrayBuffer.isView(X)?N.__data.set(new X.constructor(X.buffer,X.byteOffset,N.__data.length)):(X.toArray(N.__data,te),te+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,b){const E=m.value,T=_+"_"+M;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:ArrayBuffer.isView(E)?b[T]=E.slice():b[T]=E.clone(),!0;{const x=b[T];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return b[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(m){const _=m.uniforms;let M=0;const b=16;for(let T=0,x=_.length;T<x;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let L=0,N=C.length;L<N;L++){const F=C[L],Z=Array.isArray(F.value)?F.value:[F.value];for(let te=0,I=Z.length;te<I;te++){const X=Z[te],k=y(X),U=M%b,Y=U%k.boundary,V=U+Y;M+=Y,V!==0&&b-V<k.storage&&(M+=b-V),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=k.storage}}}const E=M%b;return E>0&&(M+=b-E),m.__size=M,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):He("WebGLRenderer: Unsupported uniform value type.",m),_}function v(m){const _=m.target;_.removeEventListener("dispose",v);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function QA(){return di===null&&(di=new HM(ZA,16,16,rs,ji),di.name="DFG_LUT",di.minFilter=sn,di.magFilter=sn,di.wrapS=Oi,di.wrapT=Oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class JA{constructor(e={}){const{canvas:n=yM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,v=new Set([kh,Oh,Fh]),h=new Set([zn,Mi,ga,va,Ih,Uh]),m=new Uint32Array(4),_=new Int32Array(4),M=new W;let b=null,E=null;const T=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,F=null;this._outputColorSpace=Un;let Z=0,te=0,I=null,X=-1,k=null;const U=new It,Y=new It;let V=null;const z=new at(0);let ee=0,J=n.width,fe=n.height,_e=1,H=null,ae=null;const ce=new It(0,0,J,fe),G=new It(0,0,J,fe);let Ue=!1;const Ve=new Z_;let K=!1,de=!1;const Be=new Pt,ke=new W,Ce=new It,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Et(){return I===null?_e:1}let D=i;function yt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lh}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),D===null){const O="webgl2";if(D=yt(O,w),D===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw it("WebGLRenderer: "+w.message),w}let Ze,ot,Me,St,A,S,B,re,le,me,xe,ne,oe,Te,Re,ye,ge,We,Se,Fe,P,ie,Q;function pe(){Ze=new Q4(D),Ze.init(),P=new HA(D,Ze),ot=new W4(D,Ze,e,P),Me=new GA(D,Ze),ot.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),St=new tT(D),A=new bA,S=new VA(D,Ze,Me,A,ot,P,St),B=new Z4(L),re=new sE(D),ie=new V4(D,re),le=new J4(D,re,St,ie),me=new iT(D,le,re,ie,St),We=new nT(D,ot,S),Re=new j4(A),xe=new AA(L,B,Ze,ot,ie,Re),ne=new $A(L,A),oe=new RA,Te=new UA(Ze),ge=new G4(L,B,Me,me,g,l),ye=new BA(L,me,ot),Q=new KA(D,St,ot,Me),Se=new H4(D,Ze,St),Fe=new eT(D,Ze,St),St.programs=xe.programs,L.capabilities=ot,L.extensions=Ze,L.properties=A,L.renderLists=oe,L.shadowMap=ye,L.state=Me,L.info=St}pe(),y!==zn&&(C=new sT(y,n.width,n.height,r,s));const ue=new qA(L,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(J,fe,!1))},this.getSize=function(w){return w.set(J,fe)},this.setSize=function(w,O,$=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,fe=O,n.width=Math.floor(w*_e),n.height=Math.floor(O*_e),$===!0&&(n.style.width=w+"px",n.style.height=O+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(J*_e,fe*_e).floor()},this.setDrawingBufferSize=function(w,O,$){J=w,fe=O,_e=$,n.width=Math.floor(w*$),n.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(y===zn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,O,$,j){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,O,$,j),Me.viewport(U.copy(ce).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,O,$,j){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,O,$,j),Me.scissor(Y.copy(G).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){Me.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let j=0;if(w){let q=!1;if(I!==null){const be=I.texture.format;q=v.has(be)}if(q){const be=I.texture.type,Le=h.has(be),Ae=ge.getClearColor(),Oe=ge.getClearAlpha(),ze=Ae.r,Ye=Ae.g,Ke=Ae.b;Le?(m[0]=ze,m[1]=Ye,m[2]=Ke,m[3]=Oe,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=ze,_[1]=Ye,_[2]=Ke,_[3]=Oe,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}O&&(j|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),ge.dispose(),oe.dispose(),Te.dispose(),A.dispose(),B.dispose(),me.dispose(),ie.dispose(),Q.dispose(),xe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Qh),ue.removeEventListener("sessionend",Jh),Pr.stop()};function se(w){w.preventDefault(),Bm("WebGLRenderer: Context Lost."),N=!0}function Pe(){Bm("WebGLRenderer: Context Restored."),N=!1;const w=St.autoReset,O=ye.enabled,$=ye.autoUpdate,j=ye.needsUpdate,q=ye.type;pe(),St.autoReset=w,ye.enabled=O,ye.autoUpdate=$,ye.needsUpdate=j,ye.type=q}function Xe(w){it("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){const O=w.target;O.removeEventListener("dispose",je),Ie(O)}function Ie(w){ht(w),A.remove(w)}function ht(w){const O=A.get(w).programs;O!==void 0&&(O.forEach(function($){xe.releaseProgram($)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,j,q,be){O===null&&(O=st);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ae=Cx(w,O,$,j,q);Me.setMaterial(j,Le);let Oe=$.index,ze=1;if(j.wireframe===!0){if(Oe=le.getWireframeAttribute($),Oe===void 0)return;ze=2}const Ye=$.drawRange,Ke=$.attributes.position;let Ge=Ye.start*ze,ft=(Ye.start+Ye.count)*ze;be!==null&&(Ge=Math.max(Ge,be.start*ze),ft=Math.min(ft,(be.start+be.count)*ze)),Oe!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,Oe.count)):Ke!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,Ke.count));const Nt=ft-Ge;if(Nt<0||Nt===1/0)return;ie.setup(q,j,Ae,$,Oe);let bt,pt=Se;if(Oe!==null&&(bt=re.get(Oe),pt=Fe,pt.setIndex(bt)),q.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*Et()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(q.isLine){let Zt=j.linewidth;Zt===void 0&&(Zt=1),Me.setLineWidth(Zt*Et()),q.isLineSegments?pt.setMode(D.LINES):q.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else q.isPoints?pt.setMode(D.POINTS):q.isSprite&&pt.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Zt=q._multiDrawStarts,Ne=q._multiDrawCounts,wn=q._multiDrawCount,nt=Oe?re.get(Oe).bytesPerElement:1,Dn=A.get(j).currentProgram.getUniforms();for(let li=0;li<wn;li++)Dn.setValue(D,"_gl_DrawID",li),pt.render(Zt[li]/nt,Ne[li])}else if(q.isInstancedMesh)pt.renderInstances(Ge,Nt,q.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ne=Math.min($.instanceCount,Zt);pt.renderInstances(Ge,Nt,Ne)}else pt.render(Ge,Nt)};function ai(w,O,$){w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,Pa(w,O,$),w.side=Tr,w.needsUpdate=!0,Pa(w,O,$),w.side=Jn):Pa(w,O,$)}this.compile=function(w,O,$=null){$===null&&($=w),E=Te.get($),E.init(O),x.push(E),$.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),w!==$&&w.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights();const j=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Ae=be[Le];ai(Ae,$,q),j.add(Ae)}else ai(be,$,q),j.add(be)}),E=x.pop(),j},this.compileAsync=function(w,O,$=null){const j=this.compile(w,O,$);return new Promise(q=>{function be(){if(j.forEach(function(Le){A.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){q(w);return}setTimeout(be,10)}Ze.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ou=null;function Ax(w){ou&&ou(w)}function Qh(){Pr.stop()}function Jh(){Pr.start()}const Pr=new ix;Pr.setAnimationLoop(Ax),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(w){ou=w,ue.setAnimationLoop(w),w===null?Pr.stop():Pr.start()},ue.addEventListener("sessionstart",Qh),ue.addEventListener("sessionend",Jh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(w,O);const $=ue.enabled===!0&&ue.isPresenting===!0,j=C!==null&&(I===null||$)&&C.begin(L,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,O,I),E=Te.get(w,x.length),E.init(O),E.state.textureUnits=S.getTextureUnits(),x.push(E),Be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(Be,gi,O.reversedDepth),de=this.localClippingEnabled,K=Re.init(this.clippingPlanes,de),b=oe.get(w,T.length),b.init(),T.push(b),ue.enabled===!0&&ue.isPresenting===!0){const Le=L.xr.getDepthSensingMesh();Le!==null&&au(Le,O,-1/0,L.sortObjects)}au(w,O,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(H,ae),Qe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Qe&&ge.addToRenderList(b,w),this.info.render.frame++,K===!0&&Re.beginShadows();const q=E.state.shadowsArray;if(ye.render(q,w,O),K===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&C.hasRenderPass())===!1){const Le=b.opaque,Ae=b.transmissive;if(E.setupLights(),O.isArrayCamera){const Oe=O.cameras;if(Ae.length>0)for(let ze=0,Ye=Oe.length;ze<Ye;ze++){const Ke=Oe[ze];tp(Le,Ae,w,Ke)}Qe&&ge.render(w);for(let ze=0,Ye=Oe.length;ze<Ye;ze++){const Ke=Oe[ze];ep(b,w,Ke,Ke.viewport)}}else Ae.length>0&&tp(Le,Ae,w,O),Qe&&ge.render(w),ep(b,w,O)}I!==null&&te===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),j&&C.end(L),w.isScene===!0&&w.onAfterRender(L,w,O),ie.resetDefaultState(),X=-1,k=null,x.pop(),x.length>0?(E=x[x.length-1],S.setTextureUnits(E.state.textureUnits),K===!0&&Re.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,F!==null&&F.renderEnd()};function au(w,O,$,j){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){j&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const Le=me.update(w),Ae=w.material;Ae.visible&&b.push(w,Le,Ae,$,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const Le=me.update(w),Ae=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(Ae)){const Oe=Le.groups;for(let ze=0,Ye=Oe.length;ze<Ye;ze++){const Ke=Oe[ze],Ge=Ae[Ke.materialIndex];Ge&&Ge.visible&&b.push(w,Le,Ge,$,Ce.z,Ke)}}else Ae.visible&&b.push(w,Le,Ae,$,Ce.z,null)}}const be=w.children;for(let Le=0,Ae=be.length;Le<Ae;Le++)au(be[Le],O,$,j)}function ep(w,O,$,j){const{opaque:q,transmissive:be,transparent:Le}=w;E.setupLightsView($),K===!0&&Re.setGlobalState(L.clippingPlanes,$),j&&Me.viewport(U.copy(j)),q.length>0&&Ra(q,O,$),be.length>0&&Ra(be,O,$),Le.length>0&&Ra(Le,O,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function tp(w,O,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){const Ge=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new Si(1,1,{generateMipmaps:!0,type:Ge?ji:zn,minFilter:jr,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const be=E.state.transmissionRenderTarget[j.id],Le=j.viewport||U;be.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const Ae=L.getRenderTarget(),Oe=L.getActiveCubeFace(),ze=L.getActiveMipmapLevel();L.setRenderTarget(be),L.getClearColor(z),ee=L.getClearAlpha(),ee<1&&L.setClearColor(16777215,.5),L.clear(),Qe&&ge.render($);const Ye=L.toneMapping;L.toneMapping=yi;const Ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),K===!0&&Re.setGlobalState(L.clippingPlanes,j),Ra(w,$,j),S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ft=0,Nt=O.length;ft<Nt;ft++){const bt=O[ft],{object:pt,geometry:Zt,material:Ne,group:wn}=bt;if(Ne.side===Jn&&pt.layers.test(j.layers)){const nt=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,np(pt,$,j,Zt,Ne,wn),Ne.side=nt,Ne.needsUpdate=!0,Ge=!0}}Ge===!0&&(S.updateMultisampleRenderTarget(be),S.updateRenderTargetMipmap(be))}L.setRenderTarget(Ae,Oe,ze),L.setClearColor(z,ee),Ke!==void 0&&(j.viewport=Ke),L.toneMapping=Ye}function Ra(w,O,$){const j=O.isScene===!0?O.overrideMaterial:null;for(let q=0,be=w.length;q<be;q++){const Le=w[q],{object:Ae,geometry:Oe,group:ze}=Le;let Ye=Le.material;Ye.allowOverride===!0&&j!==null&&(Ye=j),Ae.layers.test($.layers)&&np(Ae,O,$,Oe,Ye,ze)}}function np(w,O,$,j,q,be){w.onBeforeRender(L,O,$,j,q,be),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(L,O,$,j,w,be),q.transparent===!0&&q.side===Jn&&q.forceSinglePass===!1?(q.side=Sn,q.needsUpdate=!0,L.renderBufferDirect($,O,j,q,w,be),q.side=Tr,q.needsUpdate=!0,L.renderBufferDirect($,O,j,q,w,be),q.side=Jn):L.renderBufferDirect($,O,j,q,w,be),w.onAfterRender(L,O,$,j,q,be)}function Pa(w,O,$){O.isScene!==!0&&(O=st);const j=A.get(w),q=E.state.lights,be=E.state.shadowsArray,Le=q.state.version,Ae=xe.getParameters(w,q.state,be,O,$,E.state.lightProbeGridArray),Oe=xe.getProgramCacheKey(Ae);let ze=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,j.fog=O.fog;const Ye=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=B.get(w.envMap||j.environment,Ye),j.envMapRotation=j.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",je),ze=new Map,j.programs=ze);let Ke=ze.get(Oe);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===Le)return rp(w,Ae),Ke}else Ae.uniforms=xe.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,$,Ae),w.onBeforeCompile(Ae,L),Ke=xe.acquireProgram(Ae,Oe),ze.set(Oe,Ke),j.uniforms=Ae.uniforms;const Ge=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=Re.uniform),rp(w,Ae),j.needsLights=Px(w),j.lightsStateVersion=Le,j.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=Ke,j.uniformsList=null,Ke}function ip(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Wl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function rp(w,O){const $=A.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function bx(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let $=0,j=w.length;$<j;$++){const q=w[$];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Cx(w,O,$,j,q){O.isScene!==!0&&(O=st),S.resetTextureUnits();const be=O.fog,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?O.environment:null,Ae=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:et.workingColorSpace,Oe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,ze=B.get(j.envMap||Le,Oe),Ye=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color;let bt=yi;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=L.toneMapping);const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=pt!==void 0?pt.length:0,Ne=A.get(j),wn=E.state.lights;if(K===!0&&(de===!0||w!==k)){const gt=w===k&&j.id===X;Re.setState(j,w,gt)}let nt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==wn.state.version||Ne.outputColorSpace!==Ae||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==ze||j.fog===!0&&Ne.fog!==be||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Re.numPlanes||Ne.numIntersection!==Re.numIntersection)||Ne.vertexAlphas!==Ye||Ne.vertexTangents!==Ke||Ne.morphTargets!==Ge||Ne.morphNormals!==ft||Ne.morphColors!==Nt||Ne.toneMapping!==bt||Ne.morphTargetsCount!==Zt||!!Ne.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ne.__version=j.version);let Dn=Ne.currentProgram;nt===!0&&(Dn=Pa(j,O,q),F&&j.isNodeMaterial&&F.onUpdateProgram(j,Dn,Ne));let li=!1,Yi=!1,cs=!1;const mt=Dn.getUniforms(),Lt=Ne.uniforms;if(Me.useProgram(Dn.program)&&(li=!0,Yi=!0,cs=!0),j.id!==X&&(X=j.id,Yi=!0),Ne.needsLights){const gt=bx(E.state.lightProbeGridArray,q);Ne.lightProbeGrid!==gt&&(Ne.lightProbeGrid=gt,Yi=!0)}if(li||k!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",w.projectionMatrix),mt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ki=mt.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,ke.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,Yi=!0,cs=!0)}if(Ne.needsLights&&(wn.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",wn.state.directionalShadowMap,S),wn.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",wn.state.spotShadowMap,S),wn.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",wn.state.pointShadowMap,S)),q.isSkinnedMesh){mt.setOptional(D,q,"bindMatrix"),mt.setOptional(D,q,"bindMatrixInverse");const gt=q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(D,"boneTexture",gt.boneTexture,S))}q.isBatchedMesh&&(mt.setOptional(D,q,"batchingTexture"),mt.setValue(D,"batchingTexture",q._matricesTexture,S),mt.setOptional(D,q,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",q._indirectTexture,S),mt.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",q._colorsTexture,S));const $i=$.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&We.update(q,$,Dn),(Yi||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,mt.setValue(D,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&O.environment!==null&&(Lt.envMapIntensity.value=O.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=QA()),Yi){if(mt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ne.needsLights&&Rx(Lt,cs),be&&j.fog===!0&&ne.refreshFogUniforms(Lt,be),ne.refreshMaterialUniforms(Lt,j,_e,fe,E.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.lightProbeGrid){const gt=Ne.lightProbeGrid;Lt.probesSH.value=gt.texture,Lt.probesMin.value.copy(gt.boundingBox.min),Lt.probesMax.value.copy(gt.boundingBox.max),Lt.probesResolution.value.copy(gt.resolution)}Wl.upload(D,ip(Ne),Lt,S)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wl.upload(D,ip(Ne),Lt,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(D,"center",q.center),mt.setValue(D,"modelViewMatrix",q.modelViewMatrix),mt.setValue(D,"normalMatrix",q.normalMatrix),mt.setValue(D,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){const gt=j.uniformsGroups;for(let Ki=0,us=gt.length;Ki<us;Ki++){const sp=gt[Ki];Q.update(sp,Dn),Q.bind(sp,Dn)}}return Dn}function Rx(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Px(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,$){const j=A.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=O,A.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const $=A.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const Nx=D.createFramebuffer();this.setRenderTarget=function(w,O=0,$=0){I=w,Z=O,te=$;let j=null,q=!1,be=!1;if(w){const Ae=A.get(w);if(Ae.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,Ae.__webglFramebuffer),U.copy(w.viewport),Y.copy(w.scissor),V=w.scissorTest,Me.viewport(U),Me.scissor(Y),Me.setScissorTest(V),X=-1;return}else if(Ae.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Ae.__hasExternalTextures)S.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ye=w.depthTexture;if(Ae.__boundDepthTexture!==Ye){if(Ye!==null&&A.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);const ze=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?j=ze[O][$]:j=ze[O],q=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?j=A.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?j=ze[$]:j=ze,U.copy(w.viewport),Y.copy(w.scissor),V=w.scissorTest}else U.copy(ce).multiplyScalar(_e).floor(),Y.copy(G).multiplyScalar(_e).floor(),V=Ue;if($!==0&&(j=Nx),Me.bindFramebuffer(D.FRAMEBUFFER,j)&&Me.drawBuffers(w,j),Me.viewport(U),Me.scissor(Y),Me.setScissorTest(V),q){const Ae=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,$)}else if(be){const Ae=O;for(let Oe=0;Oe<w.textures.length;Oe++){const ze=A.get(w.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,$,Ae)}}else if(w!==null&&$!==0){const Ae=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,$)}X=-1},this.readRenderTargetPixels=function(w,O,$,j,q,be,Le,Ae=0){if(!(w&&w.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Me.bindFramebuffer(D.FRAMEBUFFER,Oe);try{const ze=w.textures[Ae],Ye=ze.format,Ke=ze.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),!ot.textureFormatReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ke)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-j&&$>=0&&$<=w.height-q&&D.readPixels(O,$,j,q,P.convert(Ye),P.convert(Ke),be)}finally{const ze=I!==null?A.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,j,q,be,Le,Ae=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(O>=0&&O<=w.width-j&&$>=0&&$<=w.height-q){Me.bindFramebuffer(D.FRAMEBUFFER,Oe);const ze=w.textures[Ae],Ye=ze.format,Ke=ze.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),!ot.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),D.readPixels(O,$,j,q,P.convert(Ye),P.convert(Ke),0);const ft=I!==null?A.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ft);const Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await SM(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.deleteBuffer(Ge),D.deleteSync(Nt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){const j=Math.pow(2,-$),q=Math.floor(w.image.width*j),be=Math.floor(w.image.height*j),Le=O!==null?O.x:0,Ae=O!==null?O.y:0;S.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Le,Ae,q,be),Me.unbindTexture()};const Lx=D.createFramebuffer(),Dx=D.createFramebuffer();this.copyTextureToTexture=function(w,O,$=null,j=null,q=0,be=0){let Le,Ae,Oe,ze,Ye,Ke,Ge,ft,Nt;const bt=w.isCompressedTexture?w.mipmaps[be]:w.image;if($!==null)Le=$.max.x-$.min.x,Ae=$.max.y-$.min.y,Oe=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,Ye=$.min.y,Ke=$.isBox3?$.min.z:0;else{const Lt=Math.pow(2,-q);Le=Math.floor(bt.width*Lt),Ae=Math.floor(bt.height*Lt),w.isDataArrayTexture?Oe=bt.depth:w.isData3DTexture?Oe=Math.floor(bt.depth*Lt):Oe=1,ze=0,Ye=0,Ke=0}j!==null?(Ge=j.x,ft=j.y,Nt=j.z):(Ge=0,ft=0,Nt=0);const pt=P.convert(O.format),Zt=P.convert(O.type);let Ne;O.isData3DTexture?(S.setTexture3D(O,0),Ne=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(S.setTexture2DArray(O,0),Ne=D.TEXTURE_2D_ARRAY):(S.setTexture2D(O,0),Ne=D.TEXTURE_2D),Me.activeTexture(D.TEXTURE0),Me.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),Me.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Me.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const wn=Me.getParameter(D.UNPACK_ROW_LENGTH),nt=Me.getParameter(D.UNPACK_IMAGE_HEIGHT),Dn=Me.getParameter(D.UNPACK_SKIP_PIXELS),li=Me.getParameter(D.UNPACK_SKIP_ROWS),Yi=Me.getParameter(D.UNPACK_SKIP_IMAGES);Me.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),Me.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const cs=w.isDataArrayTexture||w.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Lt=A.get(w),$i=A.get(O),gt=A.get(Lt.__renderTarget),Ki=A.get($i.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,gt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let us=0;us<Oe;us++)cs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(w).__webglTexture,q,Ke+us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(O).__webglTexture,be,Nt+us)),D.blitFramebuffer(ze,Ye,Le,Ae,Ge,ft,Le,Ae,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||A.has(w)){const Lt=A.get(w),$i=A.get(O);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Lx),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dx);for(let gt=0;gt<Oe;gt++)cs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,q,Ke+gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,q),mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$i.__webglTexture,be,Nt+gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$i.__webglTexture,be),q!==0?D.blitFramebuffer(ze,Ye,Le,Ae,Ge,ft,Le,Ae,D.COLOR_BUFFER_BIT,D.NEAREST):mt?D.copyTexSubImage3D(Ne,be,Ge,ft,Nt+gt,ze,Ye,Le,Ae):D.copyTexSubImage2D(Ne,be,Ge,ft,ze,Ye,Le,Ae);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ne,be,Ge,ft,Nt,Le,Ae,Oe,pt,Zt,bt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,be,Ge,ft,Nt,Le,Ae,Oe,pt,bt.data):D.texSubImage3D(Ne,be,Ge,ft,Nt,Le,Ae,Oe,pt,Zt,bt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,Ge,ft,Le,Ae,pt,Zt,bt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,Ge,ft,bt.width,bt.height,pt,bt.data):D.texSubImage2D(D.TEXTURE_2D,be,Ge,ft,Le,Ae,pt,Zt,bt);Me.pixelStorei(D.UNPACK_ROW_LENGTH,wn),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,Dn),Me.pixelStorei(D.UNPACK_SKIP_ROWS,li),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,Yi),be===0&&O.generateMipmaps&&D.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){Z=0,te=0,I=null,Me.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const dx="@mnemosyne-plugins/mnemo-cosmos",fx=["move","zoom"],eb=new $c(dx);let hx=(t,e)=>eb.invoke(t,e),Fg=Promise.resolve();async function Wh(){return tb(await hx("state.get"))}const xd=t=>!!t&&typeof t=="object"&&!Array.isArray(t);function tb(t){if(!xd(t))return{};const e="state"in t&&"updatedAt"in t?t.state:t;if(!xd(e))return{};const n={...e};return"updatedAt"in n&&(n.state===null||xd(n.state))&&(delete n.state,delete n.updatedAt),n}function px(t,e){const n=Fg.then(async()=>{const i=await Wh();await hx("state.set",{state:{...i,[t]:e}})});return Fg=n.catch(()=>{}),n}const mx=.25,gx=3,nb=.25,P0="gestures",jh=()=>Object.fromEntries(fx.map(t=>[t,1])),vx=t=>Math.max(mx,Math.min(gx,t));function ib(t){const e=t&&typeof t=="object"&&!Array.isArray(t)?t:{},n=jh();for(const i of fx){const r=e[i];typeof r=="number"&&Number.isFinite(r)&&r>0&&(n[i]=vx(r))}return n}let Ar=jh(),Kr={kind:"loading"};const N0=new Set,uo=()=>{for(const t of[...N0])t()},jl=()=>Ar,rb=()=>Kr;function Og(t){return N0.add(t),()=>{N0.delete(t)}}let kg=null,_x=!1;function sb(){return kg??(kg=Wh().then(t=>{Kr={kind:"ready"},_x?yx():(Ar=ib(t[P0]),Xl=t[P0]!==void 0?JSON.stringify(Ar):null),uo()}).catch(t=>{const e=t instanceof Error?t.message:String(t);console.warn("[gestures] settings unavailable:",e),xx=!0,Kr={kind:"unsaved",why:e},uo()})),kg}let Xl=null,xx=!1;function yx(){const t=JSON.stringify(Ar);t!==Xl&&(Xl=t,px(P0,Ar).then(()=>{Kr.kind==="unsaved"&&(Kr={kind:"ready"},uo())}).catch(e=>{const n=e instanceof Error?e.message:String(e);console.warn("[gestures] settings not saved:",n),Xl=null,Kr={kind:"unsaved",why:n},uo()}))}function Sx(){if(Kr.kind==="loading"){_x=!0;return}xx||yx()}function Al(t,e,n={}){Number.isFinite(e)&&(Ar={...Ar,[t]:vx(e)},uo(),n.save!==!1&&Sx())}function ob(){Ar=jh(),uo(),Sx()}let Mx={kind:"asking"};const L0=new Set,ab=()=>Mx;function zg(t){Mx=t;for(const e of[...L0])e()}function lb(t){return L0.add(t),()=>{L0.delete(t)}}const cb=new $c(dx);function ub(t){const e=cb.onGestures(t);return e.ready.then(({takes:n,actions:i})=>{console.info("[gestures] granted:",n.join(", "),i.length?`+ ${i.join(", ")}`:""),zg({kind:"granted",takes:n,actions:i})}).catch(n=>{const i=n instanceof Error?n.message:String(n);console.warn("[gestures] none:",i),zg({kind:"refused",why:i})}),e.off}function db(t,e,n,i,r=1){return![e,n,i,r].every(Number.isFinite)||i<=0||r<=0?null:d_(t,e*r,n*r,i)}function Bg(t,e,n=1){return!Number.isFinite(e)||e<=0||!Number.isFinite(n)||n<=0?null:{...t,fov:Ch(t.fov/Math.pow(e,n))}}const fb=4;function hb({stars:t,dsos:e,constellations:n,bodies:i,layers:r,look:s,onLook:o,onPick:a,selected:l,quizTarget:c,hiddenLabel:u,constellationLabel:f,bodyLabel:d,onRecenter:p}){const g=Ee.useRef(null),y=Ee.useRef({width:1,height:1}),[v,h]=Ee.useState([]),m=Ee.useRef(s);m.current=s;const _=Ee.useRef(r);_.current=r;const M=Ee.useRef(l);M.current=l;const b=Ee.useRef(c);b.current=c;const E=Ee.useRef(u);E.current=u;const T=Ee.useRef(i);T.current=i;const x=Ee.useRef(new Pt),C=Ee.useMemo(()=>{const z=[];return i.forEach((ee,J)=>z.push({ra:ee.ra,dec:ee.dec,rank:-30+J,kind:"body",index:J})),t.forEach((ee,J)=>z.push({ra:ee.ra,dec:ee.dec,rank:ee.mag,kind:"star",index:J})),e.forEach((ee,J)=>z.push({ra:ee.ra,dec:ee.dec,rank:ee.mag??20,kind:"dso",index:J})),z},[t,e,i]),L=Ee.useRef(C);L.current=C;const N=Ee.useRef(a);N.current=a;const F=Ee.useRef(o);F.current=o,Ee.useEffect(()=>{const z=g.current;if(!z)return;const ee=new JA({antialias:!0,alpha:!1});ee.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ee.setClearColor(329485,1),z.appendChild(ee.domElement),ee.domElement.style.display="block",ee.domElement.style.width="100%",ee.domElement.style.height="100%";const J=new OM,fe=new kn(s.fov,1,.1,Ci*4);fe.position.set(0,0,0);const _e=[],H=Se=>(_e.push(Se),Se),ae=H(new qt);{const Se=new Float32Array(t.length*3),Fe=new Float32Array(t.length*3),P=new Float32Array(t.length);t.forEach((ie,Q)=>{const pe=$n(ie.ra,ie.dec);Se[Q*3]=pe.x,Se[Q*3+1]=pe.y,Se[Q*3+2]=pe.z;const ue=yy(ie.ci)??[1,1,1];Fe[Q*3]=ue[0],Fe[Q*3+1]=ue[1],Fe[Q*3+2]=ue[2],P[Q]=xy(ie.mag,6.5)}),ae.setAttribute("position",new Wt(Se,3)),ae.setAttribute("color",new Wt(Fe,3)),ae.setAttribute("size",new Wt(P,1)),ae.setAttribute("mag",new Wt(Float32Array.from(t.map(ie=>ie.mag)),1))}const ce=H(new oi({transparent:!0,depthWrite:!1,blending:Uf,uniforms:{uScale:{value:1},uMagLimit:{value:r.magLimit}},vertexShader:`
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
      `,vertexColors:!0})),G=new fd(ae,ce);G.frustumCulled=!1,J.add(G);const Ue=H(new qt);{const Se=[];for(const Fe of n)for(const P of Fe.lines)for(let ie=0;ie+1<P.length;ie++){const Q=$n(P[ie][0],P[ie][1],Ci*.995),pe=$n(P[ie+1][0],P[ie+1][1],Ci*.995);Se.push(Q.x,Q.y,Q.z,pe.x,pe.y,pe.z)}Ue.setAttribute("position",new Wt(Float32Array.from(Se),3))}const Ve=H(new T0({color:4157342,transparent:!0,opacity:.55})),K=new sg(Ue,Ve);K.frustumCulled=!1,J.add(K);const de=H(new qt);{const Se=[],Fe=(P,ie,Q,pe)=>{const ue=$n(P,ie,Ci*.99),se=$n(Q,pe,Ci*.99);Se.push(ue.x,ue.y,ue.z,se.x,se.y,se.z)};for(let P=0;P<24;P+=2)for(let ie=-90;ie<90;ie+=5)Fe(P*15,ie,P*15,ie+5);for(let P=-60;P<=60;P+=30)for(let ie=0;ie<360;ie+=5)Fe(ie,P,ie+5,P);for(let P=0;P<360;P+=5)Fe(P,0,P+5,0);de.setAttribute("position",new Wt(Float32Array.from(Se),3))}const Be=H(new T0({color:2375772,transparent:!0,opacity:.4})),ke=new sg(de,Be);ke.frustumCulled=!1,J.add(ke);const Ce=H(new qt);{const Se=new Float32Array(e.length*3);e.forEach((Fe,P)=>{const ie=$n(Fe.ra,Fe.dec,Ci*.99);Se[P*3]=ie.x,Se[P*3+1]=ie.y,Se[P*3+2]=ie.z}),Ce.setAttribute("position",new Wt(Se,3))}const st=H(new A0({color:9426624,size:5,sizeAttenuation:!1,transparent:!0,opacity:.75})),Qe=new fd(Ce,st);Qe.frustumCulled=!1,J.add(Qe);const Et=H(new qt),D=16,yt=new Float32Array(D*3);Et.setAttribute("position",new Wt(yt,3)),Et.setDrawRange(0,0);const Ze=H(new A0({color:16766874,size:11,sizeAttenuation:!1,transparent:!0,opacity:.95})),ot=new fd(Et,Ze);ot.frustumCulled=!1,J.add(ot);const Me=H(new Hh(1.6,1.9,48)),St=H(new Cc({color:16764779,side:Jn,transparent:!0})),A=H(new Cc({color:16743787,side:Jn,transparent:!0})),S=new si(Me,St),B=new si(Me,A);S.visible=!1,B.visible=!1,J.add(S,B);const re=(Se,Fe)=>{if(!Fe){Se.visible=!1;return}const P=$n(Fe.ra,Fe.dec,Ci*.96);Se.position.set(P.x,P.y,P.z),Se.lookAt(0,0,0);const ie=m.current.fov/60*1.6;Se.scale.setScalar(ie),Se.visible=!0};let le=0;const me=()=>{le=requestAnimationFrame(me);const{width:Se,height:Fe}=y.current,P=m.current,ie=_.current;fe.fov=Ch(P.fov),fe.aspect=Se/Math.max(1,Fe),fe.updateProjectionMatrix();const Q=$n(P.ra,P.dec);fe.lookAt(Q.x,Q.y,Q.z),fe.updateMatrixWorld(),x.current.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),ce.uniforms.uScale.value=Math.min(3.2,Math.max(.55,26/P.fov)),ce.uniforms.uMagLimit.value=ie.magLimit;const pe=T.current,ue=Math.min(D,pe.length);for(let se=0;se<ue;se++){const Pe=$n(pe[se].ra,pe[se].dec,Ci*.98);yt[se*3]=Pe.x,yt[se*3+1]=Pe.y,yt[se*3+2]=Pe.z}Et.setDrawRange(0,ue),Et.attributes.position.needsUpdate=!0,K.visible=ie.figures,ke.visible=ie.grid,Qe.visible=ie.deepSky,ot.visible=ie.planets&&ue>0,re(S,M.current),re(B,b.current),ee.render(J,fe),ye()},xe={star:26,constellation:24,dso:14},ne=5.6,oe=13,Te=Se=>{const Fe=Se.text.length*ne+10,P=Se.kind==="constellation"?Se.x-Fe/2:Se.x+6;return{left:P,right:P+Fe,top:Se.y-oe/2,bottom:Se.y+oe/2}};let Re="";const ye=()=>{const{width:Se,height:Fe}=y.current,P=_.current,ie=x.current.elements,Q=[],pe=(je,Ie)=>{const ht=l_(ie,$n(je,Ie));return ht.visible?{x:(ht.x+1)/2*Se,y:(1-ht.y)/2*Fe}:null},ue=[],se=je=>{const Ie=Te(je);for(const ht of ue)if(Ie.left<ht.right&&Ie.right>ht.left&&Ie.top<ht.bottom&&Ie.bottom>ht.top)return!1;return ue.push(Ie),Q.push(je),!0};if(P.planets)for(const je of T.current){const Ie=pe(je.ra,je.dec);Ie&&se({key:`b${je.body}`,text:d(je.body),...Ie,kind:"body"})}if(P.constellationNames){let je=0;for(const Ie of n){if(je>=xe.constellation)break;if(!Ie.label)continue;const ht=pe(Ie.label[0],Ie.label[1]);ht&&se({key:`c${Ie.id}`,text:f(Ie),...ht,kind:"constellation"})&&je++}}const Pe=b.current;if(Pe!=null&&Pe.label){const je=pe(Pe.ra,Pe.dec);je&&se({key:"quiz",text:Pe.label,...je,kind:"body"})}if(P.starNames){let je=0;for(const Ie of t){if(je>=xe.star)break;if(!Ie.proper||Ie.mag>Math.min(P.magLimit,3.6)||E.current&&Ea(Ie)===E.current)continue;const ht=pe(Ie.ra,Ie.dec);ht&&se({key:`s${Ie.i}`,text:Ie.proper,...ht,kind:"star"})&&je++}}if(P.deepSky){let je=0;for(const Ie of e){if(je>=xe.dso)break;if(!Ie.messier&&!Ie.common||E.current&&wa(Ie)===E.current)continue;const ht=pe(Ie.ra,Ie.dec);ht&&se({key:`d${Ie.i}`,text:Ie.messier?`M${Ie.messier}`:Ie.common,...ht,kind:"dso"})&&je++}}const Xe=Q.map(je=>`${je.key}:${je.x|0}:${je.y|0}`).join("|");Xe!==Re&&(Re=Xe,h(Q))},ge=()=>{const Se=z.getBoundingClientRect(),Fe=Math.max(1,Math.round(Se.width)),P=Math.max(1,Math.round(Se.height));y.current={width:Fe,height:P},ee.setSize(Fe,P,!1)};ge();const We=new ResizeObserver(ge);return We.observe(z),le=requestAnimationFrame(me),()=>{cancelAnimationFrame(le),We.disconnect();for(const Se of _e)Se.dispose();ee.dispose(),ee.forceContextLoss(),z.removeChild(ee.domElement)}},[t,e,n]);const Z=Ee.useRef(null),te=z=>{var ee,J;(J=(ee=z.target).setPointerCapture)==null||J.call(ee,z.pointerId),Z.current={x:z.clientX,y:z.clientY,moved:0,id:z.pointerId}},I=z=>{const ee=Z.current;if(!ee)return;const J=z.clientX-ee.x,fe=z.clientY-ee.y;ee.moved+=Math.abs(J)+Math.abs(fe),ee.x=z.clientX,ee.y=z.clientY,F.current(d_(m.current,J,fe,y.current.height))},X=z=>{const ee=Z.current;Z.current=null,ee&&(ee.moved>fb||k(z.clientX,z.clientY,z.currentTarget.getBoundingClientRect()))},k=(z,ee,J)=>{if(!J.width||!J.height)return;const fe={x:(z-J.left)/J.width*2-1,y:-((ee-J.top)/J.height*2-1)},_e=_.current,H=L.current.filter(G=>G.kind==="body"?_e.planets:G.kind==="dso"?_e.deepSky:t[G.index].mag<=_e.magLimit),ae=Sy(H,x.current.elements,fe,y.current),ce=ae?H[ae.index]:null;N.current(ce?{kind:ce.kind,index:ce.index}:null)},U=Ee.useRef(k);U.current=k;const Y=Ee.useRef(p);Y.current=p,Ee.useEffect(()=>ub({pan:({dx:z,dy:ee})=>{const J=db(m.current,z,ee,y.current.height,jl().move);J&&F.current(J)},depth:({factor:z})=>{const ee=Bg(m.current,z,jl().zoom);ee&&F.current(ee)},zoom:({factor:z})=>{const ee=Bg(m.current,z,jl().zoom);ee&&F.current(ee)},recenter:()=>{var z;return(z=Y.current)==null?void 0:z.call(Y)},select:({x:z,y:ee})=>{const J=g.current;J&&U.current(z,ee,J.getBoundingClientRect())}}),[]);const V=z=>{F.current(My(m.current,z.deltaY>0?1:-1))};return R.jsxs("div",{className:"sky-canvas",children:[R.jsx("div",{ref:g,className:"sky-gl",onPointerDown:te,onPointerMove:I,onPointerUp:X,onPointerCancel:()=>{Z.current=null},onWheel:V}),R.jsx("div",{className:"sky-labels","aria-hidden":"false",children:v.map(z=>R.jsx("span",{className:`sky-label sky-label-${z.kind}`,style:{left:`${z.x}px`,top:`${z.y}px`},children:z.text},z.key))})]})}const pb=["en","fr","es","de","pt","ru","zh"],Ex={"app.eyebrow":"THE SKY, OFFLINE","app.loading":"Reading the catalogue…","app.failed":"The catalogue could not be read: {why}","app.retry":"Try again","app.objects":"{stars} stars · {dsos} deep-sky objects","app.search":"Search a name, HIP, NGC or M number","app.noResults":"Nothing in the catalogue matches that.","app.close":"Close","trunc.title":"What this catalogue holds","trunc.stars":"Stars down to magnitude {limit} — the naked-eye sky. {kept} of them; {omitted} fainter stars in the source are not shipped.","trunc.noDistance":"{n} of those stars have no measured distance. Their cards show a dash, never a number.","trunc.dsos":"{kept} clusters, nebulae and galaxies from OpenNGC, including all {messier} Messier objects it lists. {omitted} rows were left out: duplicates, entries for objects that turned out not to exist, and faint objects with no name.","trunc.sphere":"Everything is drawn on the celestial sphere — directions, not distances. Nothing here is a scale model of space.","card.magnitude":"Apparent magnitude","card.magnitude.hint":"How bright it looks from here. Smaller is brighter.","card.absmag":"Absolute magnitude","card.absmag.hint":"How bright it would look from 10 parsecs. A different quantity.","card.distance":"Distance","card.spectral":"Spectral type","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (of date)","card.size":"Apparent size","card.type":"Type","card.alsoKnown":"Also","card.unstableId":"This star has no Hipparcos, Henry Draper or Gliese number. The key above is local to this build of the catalogue and will not survive a catalogue update.","card.noDistance":"Hipparcos measured no usable parallax for this star, so its distance is not known.","card.altitude":"Altitude","card.azimuth":"Azimuth","card.rises":"Rises","card.sets":"Sets","card.neverRises":"Does not rise in the next 24 hours","card.neverSets":"Does not set in the next 24 hours","card.noPlace":"Set where you are to see altitude, rise and set.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% lit","card.centre":"Centre on it","sky.figures":"Constellation figures","sky.names":"Constellation names","sky.deepSky":"Deep sky","sky.planets":"Sun, Moon and planets","sky.starNames":"Star names","sky.grid":"Coordinate grid","sky.magFilter":"Faintest star shown","sky.reset":"Reset the view","sky.fov":"Field of view","time.title":"Instant shown","time.now":"Now","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hour","time.plus1h":"+1 hour","time.minus1d":"−1 day","time.plus1d":"+1 day","place.title":"Where you are","place.none":"Not set","place.hint":"Typed in by you. This cartridge never looks your location up — it has no network access and would not ask for one without saying so.","place.label":"Name","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Elevation (m)","place.save":"Use this place","place.clear":"Forget it","place.bad.latitude":"Latitude has to be a number between −90 and 90.","place.bad.longitude":"Longitude has to be a number between −180 and 180.","place.bad.elevation":"Elevation has to be a number of metres between −500 and 9000.","memory.title":"Your memory","memory.ask":"Ask what my notes say","memory.askAgain":"Ask again","memory.tryAgain":"Try again","memory.reading":"Reading your memory…","memory.note":"One question, one answer. Nothing is asked until you press this — a memory query is a model call, and browsing the sky should not bill anyone.","memory.nothing":"Your memory holds nothing about {name} yet. That is not an error: nothing has been written about it.","memory.outside":"This window is open outside Mnemosyne, so there is no memory to ask. Open the cartridge from the app.","memory.failed":"Your memory did not answer: {why}","memory.noReason":"no reason given","review.title":"Review","review.open":"Review what you know","review.close":"Close review","review.back":"Back to families","review.pick":"Pick what to be asked about.","review.studied":"Studied","review.due":"Due","review.mastered":"Mastered","review.best":"Best streak","review.howMany":"How many questions?","review.endless":"Endless","review.scope":"{n} objects in {level}. Missed ones come back tomorrow; the rest move to a longer interval.","review.question":"Which object is marked?","review.answerIs":"It is","review.next":"Next","review.finishHere":"Finish here","review.again":"Again","review.another":"Another family","review.comeBack":"Come back to these","review.andMore":"and {n} more","review.accuracy":"Accuracy","review.time":"Time","review.record":"That is your longest streak yet.","review.save":"Save this run to memory","review.saving":"Writing…","review.saved":"Written to {vault}.","review.savedLocked":"Written to {vault}. It is locked, so it will be indexed when you unlock it.","review.empty":"Nothing to ask about here.","review.tooSmall":"Only {n} objects — too few for four honest options.","review.noHost":"Open the cartridge from Mnemosyne to keep your progress.","review.noLoad":"Your progress could not be read, so this run is not being kept.","review.unsaved":"Answers in this run are not being saved. {why}","review.why.noHost":"This window is open outside Mnemosyne, so there is no memory to write to.","review.why.noPermission":"This cartridge has not been allowed to write to your memory.","review.why.declined":"Writing to memory was declined.","review.tight":"Your saved progress is {pct}% of the space this cartridge is allowed. Past 100% it stops being kept.","review.unknown":"—","family.all":"Everything","family.messier":"Messier objects","family.namedStars":"Named stars","family.brightStars":"Bright stars","family.galaxies":"Galaxies","family.clusters":"Clusters","family.nebulae":"Nebulae","rank.perfect":"Perfect","rank.excellent":"Excellent","rank.solid":"Solid","rank.getting":"Getting there","rank.again":"Worth another pass","moon.new":"New","moon.waxingCrescent":"Waxing crescent","moon.firstQuarter":"First quarter","moon.waxingGibbous":"Waxing gibbous","moon.full":"Full","moon.waningGibbous":"Waning gibbous","moon.lastQuarter":"Last quarter","moon.waningCrescent":"Waning crescent","body.Sun":"Sun","body.Moon":"Moon","body.Mercury":"Mercury","body.Venus":"Venus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturn","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluto","type.G":"Galaxy","type.GPair":"Galaxy pair","type.GTrpl":"Galaxy triplet","type.GGroup":"Group of galaxies","type.PN":"Planetary nebula","type.OCl":"Open cluster","type.GCl":"Globular cluster","type.Cl+N":"Cluster with nebula","type.*":"Star","type.Nova":"Nova","type.HII":"H II region","type.DrkN":"Dark nebula","type.EmN":"Emission nebula","type.Neb":"Nebula","type.RfN":"Reflection nebula","type.SNR":"Supernova remnant","type.Star":"Star","type.**":"Double star","type.*Ass":"Association of stars","type.Other":"Other","credits.title":"Where this comes from","credits.open":"Sources & credits","credits.stars":"Stars: HYG database 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Deep sky: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Constellation figures and names: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sun, Moon and planets: astronomy-engine, Don Cross — MIT","credits.accuracy":"Planet positions were checked against JPL Horizons for 2026-09-09: all five bodies tested agreed within 11 arcseconds.","credits.derived":"The catalogue file this cartridge ships is a derived work of two CC BY-SA 4.0 databases, so that file is CC BY-SA 4.0 too. The code is MIT.","gest.open":"Gesture settings","gest.title":"Gestures","gest.asking":"Asking Mnemosyne for the gestures…","gest.granted":"Gestures on.","gest.refused":"Gestures off: {why}","gest.speeds":"Speed","gest.reset":"Back to 1×","gest.loading":"Reading your settings…","gest.unsaved":"Applied, but not saved: {why}","gest.os":"Handled by Mnemosyne","gest.osFull":"Fingers together, then spread → full screen","gest.osClose":"Closed fist, hold → close the window","gest.osWindow":"Pinch a window’s corner → move it","gest.close":"Close","gest.lead":"Put Cosmos in full screen, and your hands move through the sky.","gest.speed.move":"Move","gest.speed.zoom":"Zoom","gest.inApp":"In Cosmos","gest.pan":"Pinch and move → slide the sky","gest.depth":"Pinch, hand toward the camera → come closer","gest.zoom":"Pinch with both hands → zoom","gest.recenter":"Open hands, held still → back to the starting view","gest.select":"Pinch and hold on a point → open that object"},mb={"app.eyebrow":"LE CIEL, HORS LIGNE","app.loading":"Lecture du catalogue…","app.failed":"Le catalogue n’a pas pu être lu : {why}","app.retry":"Réessayer","app.objects":"{stars} étoiles · {dsos} objets du ciel profond","app.search":"Chercher un nom, un numéro HIP, NGC ou M","app.noResults":"Rien dans le catalogue ne correspond.","app.close":"Fermer","trunc.title":"Ce que contient ce catalogue","trunc.stars":"Les étoiles jusqu’à la magnitude {limit} — le ciel à l’œil nu. Il y en a {kept} ; {omitted} étoiles plus faibles de la source ne sont pas embarquées.","trunc.noDistance":"{n} de ces étoiles n’ont aucune distance mesurée. Leur fiche affiche un tiret, jamais un nombre.","trunc.dsos":"{kept} amas, nébuleuses et galaxies d’OpenNGC, dont les {messier} objets de Messier qu’il recense. {omitted} lignes ont été écartées : doublons, entrées pour des objets qui n’existent pas, et objets faibles sans nom.","trunc.sphere":"Tout est dessiné sur la sphère céleste — des directions, pas des distances. Rien ici n’est une maquette de l’espace à l’échelle.","card.magnitude":"Magnitude apparente","card.magnitude.hint":"Sa brillance vue d’ici. Plus le nombre est petit, plus c’est brillant.","card.absmag":"Magnitude absolue","card.absmag.hint":"Sa brillance vue de 10 parsecs. Ce n’est pas la même grandeur.","card.distance":"Distance","card.spectral":"Type spectral","card.constellation":"Constellation","card.position":"Position (J2000)","card.positionNow":"Position (de la date)","card.size":"Taille apparente","card.type":"Type","card.alsoKnown":"Aussi","card.unstableId":"Cette étoile n’a ni numéro Hipparcos, ni Henry Draper, ni Gliese. La clé ci-dessus est locale à cette version du catalogue et ne survivra pas à une mise à jour.","card.noDistance":"Hipparcos n’a mesuré aucune parallaxe exploitable pour cette étoile : sa distance n’est pas connue.","card.altitude":"Hauteur","card.azimuth":"Azimut","card.rises":"Lever","card.sets":"Coucher","card.neverRises":"Ne se lève pas dans les 24 prochaines heures","card.neverSets":"Ne se couche pas dans les 24 prochaines heures","card.noPlace":"Indiquez où vous êtes pour voir la hauteur, le lever et le coucher.","card.au":"Distance","card.phase":"Phase","card.illuminated":"{pct}% éclairée","card.centre":"Centrer dessus","sky.figures":"Figures des constellations","sky.names":"Noms des constellations","sky.deepSky":"Ciel profond","sky.planets":"Soleil, Lune et planètes","sky.starNames":"Noms des étoiles","sky.grid":"Grille de coordonnées","sky.magFilter":"Étoile la plus faible affichée","sky.reset":"Réinitialiser la vue","sky.fov":"Champ de vision","time.title":"Instant affiché","time.now":"Maintenant","time.utc":"UTC","time.local":"Locale","time.minus1h":"−1 heure","time.plus1h":"+1 heure","time.minus1d":"−1 jour","time.plus1d":"+1 jour","place.title":"Où vous êtes","place.none":"Non renseigné","place.hint":"Saisi par vous. Cette cartouche ne cherche jamais votre position — elle n’a pas d’accès réseau et ne la demanderait pas sans le dire.","place.label":"Nom","place.latitude":"Latitude","place.longitude":"Longitude","place.elevation":"Altitude (m)","place.save":"Utiliser ce lieu","place.clear":"L’oublier","place.bad.latitude":"La latitude doit être un nombre entre −90 et 90.","place.bad.longitude":"La longitude doit être un nombre entre −180 et 180.","place.bad.elevation":"L’altitude doit être un nombre de mètres entre −500 et 9000.","memory.title":"Votre mémoire","memory.ask":"Demander ce que disent mes notes","memory.askAgain":"Redemander","memory.tryAgain":"Réessayer","memory.reading":"Lecture de votre mémoire…","memory.note":"Une question, une réponse. Rien n’est demandé tant que vous n’appuyez pas — interroger la mémoire est un appel au modèle, et parcourir le ciel ne doit rien coûter à personne.","memory.nothing":"Votre mémoire ne contient encore rien sur {name}. Ce n’est pas une erreur : rien n’a été écrit à ce sujet.","memory.outside":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire à interroger. Ouvrez la cartouche depuis l’application.","memory.failed":"Votre mémoire n’a pas répondu : {why}","memory.noReason":"aucune raison donnée","review.title":"Révision","review.open":"Réviser ce que vous savez","review.close":"Fermer la révision","review.back":"Retour aux familles","review.pick":"Choisissez sur quoi être interrogé.","review.studied":"Vus","review.due":"À revoir","review.mastered":"Maîtrisés","review.best":"Meilleure série","review.howMany":"Combien de questions ?","review.endless":"Sans fin","review.scope":"{n} objets dans {level}. Les ratés reviennent demain ; les autres passent à un intervalle plus long.","review.question":"Quel objet est marqué ?","review.answerIs":"C’est","review.next":"Suivant","review.finishHere":"Arrêter ici","review.again":"Encore","review.another":"Une autre famille","review.comeBack":"Revenir sur ceux-là","review.andMore":"et {n} de plus","review.accuracy":"Réussite","review.time":"Durée","review.record":"C’est votre plus longue série.","review.save":"Enregistrer cette session en mémoire","review.saving":"Écriture…","review.saved":"Écrit dans {vault}.","review.savedLocked":"Écrit dans {vault}. Ce coffre est verrouillé : l’indexation se fera à son déverrouillage.","review.empty":"Rien à demander ici.","review.tooSmall":"Seulement {n} objets — trop peu pour quatre options honnêtes.","review.noHost":"Ouvrez la cartouche depuis Mnemosyne pour conserver votre progression.","review.noLoad":"Votre progression n’a pas pu être lue : cette session n’est pas conservée.","review.unsaved":"Les réponses de cette session ne sont pas enregistrées. {why}","review.why.noHost":"Cette fenêtre est ouverte hors de Mnemosyne : il n’y a aucune mémoire où écrire.","review.why.noPermission":"Cette cartouche n’a pas l’autorisation d’écrire dans votre mémoire.","review.why.declined":"L’écriture en mémoire a été refusée.","review.tight":"Votre progression enregistrée occupe {pct}% de la place allouée à cette cartouche. Au-delà de 100%, elle cesse d’être conservée.","family.all":"Tout","family.messier":"Objets de Messier","family.namedStars":"Étoiles nommées","family.brightStars":"Étoiles brillantes","family.galaxies":"Galaxies","family.clusters":"Amas","family.nebulae":"Nébuleuses","rank.perfect":"Parfait","rank.excellent":"Excellent","rank.solid":"Solide","rank.getting":"Ça vient","rank.again":"À refaire","moon.new":"Nouvelle","moon.waxingCrescent":"Croissant croissant","moon.firstQuarter":"Premier quartier","moon.waxingGibbous":"Gibbeuse croissante","moon.full":"Pleine","moon.waningGibbous":"Gibbeuse décroissante","moon.lastQuarter":"Dernier quartier","moon.waningCrescent":"Croissant décroissant","body.Sun":"Soleil","body.Moon":"Lune","body.Mercury":"Mercure","body.Venus":"Vénus","body.Mars":"Mars","body.Jupiter":"Jupiter","body.Saturn":"Saturne","body.Uranus":"Uranus","body.Neptune":"Neptune","body.Pluto":"Pluton","type.G":"Galaxie","type.GPair":"Paire de galaxies","type.GTrpl":"Triplet de galaxies","type.GGroup":"Groupe de galaxies","type.PN":"Nébuleuse planétaire","type.OCl":"Amas ouvert","type.GCl":"Amas globulaire","type.Cl+N":"Amas avec nébuleuse","type.*":"Étoile","type.Nova":"Nova","review.unknown":"—","type.HII":"Région H II","type.DrkN":"Nébuleuse obscure","type.EmN":"Nébuleuse en émission","type.Neb":"Nébuleuse","type.RfN":"Nébuleuse par réflexion","type.SNR":"Rémanent de supernova","type.Star":"Étoile","type.**":"Étoile double","type.*Ass":"Association d’étoiles","type.Other":"Autre","credits.title":"D’où vient tout ceci","credits.open":"Sources et crédits","credits.stars":"Étoiles : base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Ciel profond : OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figures et noms des constellations : d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Soleil, Lune et planètes : astronomy-engine, Don Cross — MIT","credits.accuracy":"Les positions des planètes ont été comparées à JPL Horizons pour le 2026-09-09 : les cinq corps testés concordent à moins de 11 secondes d’arc.","credits.derived":"Le fichier catalogue embarqué est une œuvre dérivée de deux bases CC BY-SA 4.0 : ce fichier est donc lui aussi en CC BY-SA 4.0. Le code est en MIT.","gest.open":"Réglages des gestes","gest.title":"Gestes","gest.asking":"Demande des gestes à Mnemosyne…","gest.granted":"Gestes actifs.","gest.refused":"Gestes coupés : {why}","gest.speeds":"Vitesse","gest.reset":"Revenir à 1×","gest.loading":"Lecture de tes réglages…","gest.unsaved":"Appliqué, mais pas enregistré : {why}","gest.os":"Pris en charge par Mnemosyne","gest.osFull":"Doigts collés, puis écartés → plein écran","gest.osClose":"Poing fermé, tenir → fermer la fenêtre","gest.osWindow":"Pincer au coin d’une fenêtre → la déplacer","gest.close":"Fermer","gest.lead":"Mets Cosmos en plein écran, et tes mains parcourent le ciel.","gest.speed.move":"Déplacer","gest.speed.zoom":"Zoomer","gest.inApp":"Dans Cosmos","gest.pan":"Pincer et bouger → faire glisser le ciel","gest.depth":"Pincer, main vers la caméra → avancer","gest.zoom":"Pincer à deux mains → zoomer","gest.recenter":"Mains ouvertes, immobiles → revenir à la vue de départ","gest.select":"Pincer et tenir sur un point → ouvrir cet objet"},gb={"app.eyebrow":"EL CIELO, SIN CONEXIÓN","app.loading":"Leyendo el catálogo…","app.failed":"No se pudo leer el catálogo: {why}","app.retry":"Reintentar","app.objects":"{stars} estrellas · {dsos} objetos de cielo profundo","app.search":"Buscar un nombre o un número HIP, NGC o M","app.noResults":"Nada en el catálogo coincide.","app.close":"Cerrar","trunc.title":"Qué contiene este catálogo","trunc.stars":"Estrellas hasta magnitud {limit} — el cielo a simple vista. Hay {kept}; {omitted} estrellas más débiles de la fuente no se incluyen.","trunc.noDistance":"{n} de esas estrellas no tienen distancia medida. Su ficha muestra un guion, nunca un número.","trunc.dsos":"{kept} cúmulos, nebulosas y galaxias de OpenNGC, incluidos los {messier} objetos Messier que recoge. Se dejaron fuera {omitted} filas: duplicados, entradas de objetos que resultaron no existir, y objetos débiles sin nombre.","trunc.sphere":"Todo se dibuja sobre la esfera celeste — direcciones, no distancias. Nada aquí es una maqueta a escala del espacio.","card.magnitude":"Magnitud aparente","card.magnitude.hint":"Lo brillante que se ve desde aquí. Cuanto menor, más brillante.","card.absmag":"Magnitud absoluta","card.absmag.hint":"Lo brillante que se vería desde 10 parsecs. Es otra magnitud.","card.distance":"Distancia","card.spectral":"Tipo espectral","card.constellation":"Constelación","card.position":"Posición (J2000)","card.positionNow":"Posición (de la fecha)","card.size":"Tamaño aparente","card.type":"Tipo","card.alsoKnown":"También","card.unstableId":"Esta estrella no tiene número Hipparcos, Henry Draper ni Gliese. La clave de arriba es local a esta versión del catálogo y no sobrevivirá a una actualización.","card.noDistance":"Hipparcos no midió una paralaje utilizable para esta estrella, así que su distancia no se conoce.","card.altitude":"Altura","card.azimuth":"Azimut","card.rises":"Sale","card.sets":"Se pone","card.neverRises":"No sale en las próximas 24 horas","card.neverSets":"No se pone en las próximas 24 horas","card.noPlace":"Indica dónde estás para ver la altura, la salida y la puesta.","card.au":"Distancia","card.phase":"Fase","card.illuminated":"{pct}% iluminada","card.centre":"Centrar en él","sky.figures":"Figuras de las constelaciones","sky.names":"Nombres de las constelaciones","sky.deepSky":"Cielo profundo","sky.planets":"Sol, Luna y planetas","sky.starNames":"Nombres de estrellas","sky.grid":"Rejilla de coordenadas","sky.magFilter":"Estrella más débil mostrada","sky.reset":"Restablecer la vista","sky.fov":"Campo de visión","time.title":"Instante mostrado","time.now":"Ahora","time.utc":"UTC","time.local":"Local","time.minus1h":"−1 hora","time.plus1h":"+1 hora","time.minus1d":"−1 día","time.plus1d":"+1 día","place.title":"Dónde estás","place.none":"Sin indicar","place.hint":"Lo escribes tú. Esta cartucho nunca busca tu ubicación — no tiene acceso a la red y no la pediría sin decirlo.","place.label":"Nombre","place.latitude":"Latitud","place.longitude":"Longitud","place.elevation":"Altitud (m)","place.save":"Usar este lugar","place.clear":"Olvidarlo","place.bad.latitude":"La latitud tiene que ser un número entre −90 y 90.","place.bad.longitude":"La longitud tiene que ser un número entre −180 y 180.","place.bad.elevation":"La altitud tiene que ser un número de metros entre −500 y 9000.","memory.title":"Tu memoria","memory.ask":"Preguntar qué dicen mis notas","memory.askAgain":"Preguntar otra vez","memory.tryAgain":"Reintentar","memory.reading":"Leyendo tu memoria…","memory.note":"Una pregunta, una respuesta. No se pregunta nada hasta que pulsas — consultar la memoria es una llamada al modelo, y recorrer el cielo no debe costarle nada a nadie.","memory.nothing":"Tu memoria todavía no contiene nada sobre {name}. No es un error: no se ha escrito nada al respecto.","memory.outside":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria que consultar. Abre el cartucho desde la aplicación.","memory.failed":"Tu memoria no respondió: {why}","memory.noReason":"sin motivo indicado","review.title":"Repaso","review.open":"Repasar lo que sabes","review.close":"Cerrar el repaso","review.back":"Volver a las familias","review.pick":"Elige sobre qué quieres que te pregunten.","review.studied":"Vistos","review.due":"Pendientes","review.mastered":"Dominados","review.best":"Mejor racha","review.howMany":"¿Cuántas preguntas?","review.endless":"Sin fin","review.scope":"{n} objetos en {level}. Los fallados vuelven mañana; el resto pasa a un intervalo más largo.","review.question":"¿Qué objeto está marcado?","review.answerIs":"Es","review.next":"Siguiente","review.finishHere":"Terminar aquí","review.again":"Otra vez","review.another":"Otra familia","review.comeBack":"Volver a estos","review.andMore":"y {n} más","review.accuracy":"Acierto","review.time":"Tiempo","review.record":"Es tu racha más larga.","review.save":"Guardar esta sesión en la memoria","review.saving":"Escribiendo…","review.saved":"Escrito en {vault}.","review.savedLocked":"Escrito en {vault}. Está bloqueado, así que se indexará cuando lo desbloquees.","review.empty":"No hay nada que preguntar aquí.","review.tooSmall":"Solo {n} objetos — muy pocos para cuatro opciones honestas.","review.noHost":"Abre el cartucho desde Mnemosyne para conservar tu progreso.","review.noLoad":"No se pudo leer tu progreso, así que esta sesión no se está guardando.","review.unsaved":"Las respuestas de esta sesión no se están guardando. {why}","review.why.noHost":"Esta ventana está abierta fuera de Mnemosyne, así que no hay memoria donde escribir.","review.why.noPermission":"Este cartucho no tiene permiso para escribir en tu memoria.","review.why.declined":"Se rechazó la escritura en la memoria.","review.tight":"Tu progreso guardado ocupa el {pct}% del espacio asignado a este cartucho. Por encima del 100% deja de conservarse.","family.all":"Todo","family.messier":"Objetos Messier","family.namedStars":"Estrellas con nombre","family.brightStars":"Estrellas brillantes","family.galaxies":"Galaxias","family.clusters":"Cúmulos","family.nebulae":"Nebulosas","rank.perfect":"Perfecto","rank.excellent":"Excelente","rank.solid":"Sólido","rank.getting":"Vas bien","rank.again":"Merece otra vuelta","moon.new":"Nueva","moon.waxingCrescent":"Creciente","moon.firstQuarter":"Cuarto creciente","moon.waxingGibbous":"Gibosa creciente","moon.full":"Llena","moon.waningGibbous":"Gibosa menguante","moon.lastQuarter":"Cuarto menguante","moon.waningCrescent":"Menguante","body.Sun":"Sol","body.Moon":"Luna","body.Mercury":"Mercurio","body.Venus":"Venus","body.Mars":"Marte","body.Jupiter":"Júpiter","body.Saturn":"Saturno","body.Uranus":"Urano","body.Neptune":"Neptuno","body.Pluto":"Plutón","type.G":"Galaxia","type.GPair":"Par de galaxias","type.GTrpl":"Triplete de galaxias","type.GGroup":"Grupo de galaxias","type.PN":"Nebulosa planetaria","type.OCl":"Cúmulo abierto","type.GCl":"Cúmulo globular","type.Cl+N":"Cúmulo con nebulosa","type.*":"Estrella","type.Nova":"Nova","review.unknown":"—","type.HII":"Región H II","type.DrkN":"Nebulosa oscura","type.EmN":"Nebulosa de emisión","type.Neb":"Nebulosa","type.RfN":"Nebulosa de reflexión","type.SNR":"Remanente de supernova","type.Star":"Estrella","type.**":"Estrella doble","type.*Ass":"Asociación de estrellas","type.Other":"Otro","credits.title":"De dónde viene todo esto","credits.open":"Fuentes y créditos","credits.stars":"Estrellas: base HYG 4.1, astronexus — CC BY-SA 4.0","credits.dsos":"Cielo profundo: OpenNGC, Mattia Verga — CC BY-SA 4.0","credits.figures":"Figuras y nombres de constelaciones: d3-celestial, Olaf Frohn — BSD 3-Clause","credits.ephemeris":"Sol, Luna y planetas: astronomy-engine, Don Cross — MIT","credits.accuracy":"Las posiciones de los planetas se compararon con JPL Horizons para 2026-09-09: los cinco cuerpos probados coinciden dentro de 11 segundos de arco.","credits.derived":"El archivo de catálogo que se incluye es obra derivada de dos bases CC BY-SA 4.0, así que ese archivo también es CC BY-SA 4.0. El código es MIT.","gest.open":"Ajustes de gestos","gest.title":"Gestos","gest.asking":"Pidiendo los gestos a Mnemosyne…","gest.granted":"Gestos activos.","gest.refused":"Gestos desactivados: {why}","gest.speeds":"Velocidad","gest.reset":"Volver a 1×","gest.loading":"Leyendo tus ajustes…","gest.unsaved":"Aplicado, pero no guardado: {why}","gest.os":"Lo gestiona Mnemosyne","gest.osFull":"Dedos juntos, luego separados → pantalla completa","gest.osClose":"Puño cerrado, mantener → cerrar la ventana","gest.osWindow":"Pellizcar la esquina de una ventana → moverla","gest.close":"Cerrar","gest.lead":"Pon Cosmos en pantalla completa y tus manos recorren el cielo.","gest.speed.move":"Desplazar","gest.speed.zoom":"Acercar","gest.inApp":"En Cosmos","gest.pan":"Pellizcar y mover → deslizar el cielo","gest.depth":"Pellizcar, mano hacia la cámara → acercarse","gest.zoom":"Pellizcar con las dos manos → zoom","gest.recenter":"Manos abiertas, quietas → volver a la vista inicial","gest.select":"Pellizcar y mantener en un punto → abrir ese objeto"},vb={en:Ex,fr:mb,es:gb,de:{},pt:{},ru:{},zh:{}};function wx(t){return typeof t=="string"&&pb.includes(t)}function _b(t,e,n){var r;const i=((r=vb[t])==null?void 0:r[e])??Ex[e];return n?i.replace(/\{(\w+)\}/g,(s,o)=>o in n?String(n[o]):s):i}function xb(){var t;try{const e=new URLSearchParams(window.location.search).get("lang"),n=(t=e==null?void 0:e.split("-")[0])==null?void 0:t.toLowerCase();if(wx(n))return n}catch{}return"en"}function iu(){const[t,e]=Ee.useState(xb);return Ee.useEffect(()=>s_(n=>{var r,s;const i=(s=(r=n.lang)==null?void 0:r.split("-")[0])==null?void 0:s.toLowerCase();wx(i)&&e(i)},{apply:!1}),[]),{lang:t,t:(n,i)=>_b(t,n,i)}}const yb=new $c("@mnemosyne-plugins/mnemo-cosmos"),Sb="No Mnemosyne host";function Mb({object:t}){const{t:e}=iu(),[n,i]=Ee.useState({kind:"idle"}),r=Ee.useRef(null);if(Ee.useEffect(()=>{i({kind:"idle"}),r.current=null},[t==null?void 0:t.id]),Ee.useEffect(()=>()=>{r.current=null},[]),!t)return null;const s=async()=>{const o=t.id;r.current=o,i({kind:"asking"});try{const a=await yb.query(_y(t));if(r.current!==o)return;const l=((a==null?void 0:a.text)??(a==null?void 0:a.response)??(a==null?void 0:a.content)??(a==null?void 0:a.answer)??"").trim();if((a==null?void 0:a.success)===!1){i({kind:"failed",message:a.error||e("memory.noReason")});return}if(!l||/NOTHING IN MEMORY/i.test(l)){i({kind:"empty"});return}i({kind:"answered",text:l})}catch(a){if(r.current!==o)return;const l=a instanceof Error?a.message:String(a);console.warn("[cosmos] memory query failed:",l),i(l.includes(Sb)?{kind:"no-host"}:{kind:"failed",message:l})}};return R.jsxs("div",{className:"memory-panel",children:[R.jsx("h3",{children:e("memory.title")}),n.kind==="idle"&&R.jsxs(R.Fragment,{children:[R.jsx("button",{type:"button",className:"btn btn-accent",onClick:s,children:e("memory.ask")}),R.jsx("p",{className:"note",children:e("memory.note")})]}),n.kind==="asking"&&R.jsx("p",{className:"note busy",role:"status",children:e("memory.reading")}),n.kind==="answered"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"memory-answer",children:n.text}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="empty"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note",children:e("memory.nothing",{name:t.name})}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.askAgain")})]}),n.kind==="no-host"&&R.jsx("p",{className:"note",children:e("memory.outside")}),n.kind==="failed"&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note error",role:"alert",children:e("memory.failed",{why:n.message})}),R.jsx("button",{type:"button",className:"btn",onClick:s,children:e("memory.tryAgain")})]})]})}const Tx=[0,1,3,7,16,35],ru=Tx.length-1;function su(t){return Math.floor(t/864e5)}const Nc=()=>({v:1,cards:{}});function Eb(t){if(!t||typeof t!="object")return Nc();const e=t;if(e.v!==1||!e.cards||typeof e.cards!="object")return Nc();const n={};for(const[r,s]of Object.entries(e.cards)){const o=s;typeof(o==null?void 0:o.b)!="number"||typeof(o==null?void 0:o.d)!="number"||typeof(o==null?void 0:o.n)!="number"||!Number.isFinite(o.b)||!Number.isFinite(o.d)||!Number.isFinite(o.n)||(n[r]={b:Math.min(ru,Math.max(0,Math.round(o.b))),d:Math.round(o.d),n:Math.round(o.n)})}const i=typeof e.best=="number"&&Number.isFinite(e.best)&&e.best>=0?Math.round(e.best):void 0;return i===void 0?{v:1,cards:n}:{v:1,cards:n,best:i}}function wb(t,e,n){const i=((t==null?void 0:t.n)??0)+1,r=e?Math.min(ru,Math.max(1,((t==null?void 0:t.b)??0)+1)):0;return{b:r,d:su(n)+Tx[r],n:i}}function Tb(t,e){const n=su(e),i=Object.values(t.cards);return{seen:i.length,due:i.filter(r=>r.d<=n).length,mastered:i.filter(r=>r.b>=ru).length}}function Ab(t){let e=t>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function bb(t,e,n){const i=t.slice(),r=[];for(;r.length<e&&i.length;)r.push(i.splice(Math.floor(n()*i.length),1)[0]);return r}function Cb(t,e,n,i,r=4,s=new Set){if(t.length<2)return null;const o=su(n),a=Ab(i),l=t.filter(E=>!s.has(E.id)),c=l.length?l:t,u=c.filter(E=>{const T=e.cards[E.id];return T&&T.d<=o}),f=c.filter(E=>!e.cards[E.id]),d=c.filter(E=>e.cards[E.id]&&e.cards[E.id].d>o).sort((E,T)=>e.cards[E.id].d-e.cards[T.id].d),p=u.length?u:f.length?f:d,g=p[Math.floor(a()*p.length)],y=E=>E.trim().toLowerCase(),v=t.filter(E=>E.id!==g.id),h=[v.filter(E=>E.group===g.group),v.filter(E=>E.group!==g.group&&E.kind===g.kind),v.filter(E=>E.group!==g.group&&E.kind!==g.kind)],m=Math.min(r-1,t.length-1),_=new Set([y(g.name)]),M=[];for(const E of h)for(const T of bb(E,E.length,a)){if(M.length>=m)break;_.has(y(T.name))||(_.add(y(T.name)),M.push(T))}const b=[g,...M];for(let E=b.length-1;E>0;E--){const T=Math.floor(a()*(E+1));[b[E],b[T]]=[b[T],b[E]]}return{subject:g,options:b}}const Gg=256*1024,Rb=.8;function Pb(t){const e=new TextEncoder().encode(JSON.stringify(t)).length;return{bytes:e,ratio:e/Gg,tight:e>=Gg*Rb}}const yd=12;function Vg(t){const e=t.slice(0,yd).map(n=>`- ${n.name} (${n.group}, ${n.id})${n.n>1?` — asked ${n.n} times`:""}`);return t.length>yd&&e.push(`- and ${t.length-yd} more`),e.join(`
`)}function Nb(t,e){if(!t.length)return null;const n=t.filter(o=>o.correct),i=t.filter(o=>!o.correct),s=[`Sky review session — ${new Date(e.now).toISOString().slice(0,10)}`,"",`Reviewed ${t.length} object${t.length===1?"":"s"} from ${e.family} (${e.source}). ${n.length} recalled, ${i.length} missed.`];return i.length&&s.push("","Missed:",Vg(i)),n.length&&s.push("","Recalled:",Vg(n)),s.push("","Missed objects are scheduled to come back tomorrow; recalled ones move to a longer interval. Objects are identified by their catalogue designation — Hipparcos, Henry Draper, NGC or IC — which is stable across languages, spellings and sources."),s.join(`
`)}const Lb="SKY_STUDY",Db=4,Ib=new Set(["G","GPair","GTrpl","GGroup"]),Ub=new Set(["OCl","GCl","Cl+N"]),Fb=new Set(["PN","HII","DrkN","EmN","Neb","RfN","SNR"]),Ob=2.5;function Xh(t,e){const n=o=>{const a=gf(o);return{id:Ea(o),name:a.name,group:o.con||"sky",kind:"star"}},i=o=>{const a=vf(o);return{id:wa(o),name:a.name,group:o.type||"sky",kind:"dso"}},r=t.stars.filter(o=>o.proper),s=t.stars.filter(o=>o.mag<=Ob&&(o.proper||o.desig));switch(e){case"messier":return t.dsos.filter(o=>o.messier).map(i);case"namedStars":return r.map(n);case"brightStars":return s.map(n);case"galaxies":return t.dsos.filter(o=>Ib.has(o.type)&&(o.common||o.messier)).map(i);case"clusters":return t.dsos.filter(o=>Ub.has(o.type)&&(o.common||o.messier)).map(i);case"nebulae":return t.dsos.filter(o=>Fb.has(o.type)&&(o.common||o.messier)).map(i);case"all":default:{const o=new Set,a=[];for(const l of[...r.map(n),...t.dsos.filter(c=>c.common||c.messier).map(i)])o.has(l.id)||(o.add(l.id),a.push(l));return a}}}const kb=["all","messier","namedStars","brightStars","galaxies","clusters","nebulae"];function zb(t){const e=kb.map(r=>({id:r,total:Xh(t,r).length})),n=e.find(r=>r.id==="all"),i=e.filter(r=>r.id!=="all"&&r.total>0).sort((r,s)=>s.total-r.total);return[n,...i]}function Bb(t,e,n,i){const r=su(i),s=Xh(e,t.id).map(c=>c.id);let o=0,a=0,l=0;for(const c of s){const u=n.cards[c];u&&(o++,u.b>=ru&&a++,u.d<=r&&l++)}return{studied:o,mastered:a,due:l,ratio:s.length?a/s.length:0}}function Hg(t){return t.total>=Db?{ok:!0,n:t.total}:{ok:!1,why:t.total===0?"empty":"tooSmall",n:t.total}}const Gb=[5,10,50,null];function Vb(t){return t===null?null:String(t)}const Hb=(t,e)=>({length:t,answers:[],streak:0,bestStreak:0,startedAt:e});function Wb(t,e){const n=e.correct?t.streak+1:0;return{...t,answers:[...t.answers,e],streak:n,bestStreak:Math.max(t.bestStreak,n)}}function jb(t){return t.ended?!0:t.length!==null&&t.answers.length>=t.length}const Xb=t=>({...t,ended:!0});function qb(t,e){const n=t.answers.filter(i=>i.correct).length;return{asked:t.answers.length,right:n,accuracy:t.answers.length?n/t.answers.length:null,bestStreak:t.bestStreak,elapsedMs:Math.max(0,e-t.startedAt),missed:t.answers.filter(i=>!i.correct)}}function Wg(t){return t===null?null:t===1?"Perfect":t>=.9?"Excellent":t>=.75?"Solid":t>=.5?"Getting there":"Worth another pass"}function Yb(t){const e=Math.floor(t/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}const Sd=new $c("@mnemosyne-plugins/mnemo-cosmos"),jg="review",$b={Perfect:"rank.perfect",Excellent:"rank.excellent",Solid:"rank.solid","Getting there":"rank.getting","Worth another pass":"rank.again"};function Kb({catalog:t,onMark:e,onLookAt:n,onHideLabel:i,onClose:r}){const{t:s}=iu(),[o,a]=Ee.useState({kind:"loading"}),[l,c]=Ee.useState(null),[u,f]=Ee.useState(null),[d,p]=Ee.useState(null),[g,y]=Ee.useState(null),[v,h]=Ee.useState({kind:"idle"}),m=Ee.useRef(!0);Ee.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]);const M=(J=>J.kind==="loading"?Nc():J.state)(o),b=zb(t),E=!!u&&jb(u),T=Ee.useMemo(()=>{const J=new Map;for(const fe of t.stars)J.set(Ea(fe),{ra:fe.ra,dec:fe.dec});for(const fe of t.dsos)J.set(wa(fe),{ra:fe.ra,dec:fe.dec});return J},[t]),x=Ee.useCallback(J=>T.get(J)??null,[T]),C=J=>s(`family.${J.id}`),L=J=>{const fe=Hg(J);return fe.ok?"":s(fe.why==="empty"?"review.empty":"review.tooSmall",{n:fe.n})};Ee.useEffect(()=>{let J=!1;return Wh().then(fe=>{J||!m.current||a({kind:"ready",state:Eb(fe[jg])})}).catch(fe=>{if(J||!m.current)return;const _e=fe instanceof Error?fe.message:String(fe);console.warn("[cosmos] review state unavailable:",_e),a({kind:"unsaved",state:Nc(),why:_e.includes("No Mnemosyne host")?s("review.noHost"):s("review.noLoad")})}),()=>{J=!0}},[]),Ee.useEffect(()=>()=>{e(null),i(null)},[e,i]);const N=J=>{if(o.kind==="loading"){console.warn("[cosmos] review answer before the schedule was read: not written");return}if(o.kind==="unsaved"){a({...o,state:J});return}a({kind:"ready",state:J}),px(jg,J).catch(fe=>{const _e=fe instanceof Error?fe.message:String(fe);console.warn("[cosmos] review state not saved:",_e),m.current&&a({kind:"unsaved",state:J,why:s("review.noLoad")})})},F=Ee.useCallback((J,fe,_e)=>{const H=Cb(Xh(t,J.id),fe,Date.now(),Math.random()*2147483648|0,4,_e);y(null),p(H);const ae=H?x(H.subject.id):null;e(ae),ae&&n(ae),i(H?H.subject.id:null)},[t,e,n,i,x]),Z=J=>{l&&(h({kind:"idle"}),f(Hb(J,Date.now())),F(l,M,new Set))},te=()=>{c(null),f(null),p(null),y(null),e(null),i(null)},I=J=>{if(!d||g||!u)return;const fe=J.id===d.subject.id;y({picked:J.id,correct:fe}),i(null);const _e=x(d.subject.id);_e&&e({..._e,label:d.subject.name});const H=wb(M.cards[d.subject.id],fe,Date.now()),ae=Wb(u,{...d.subject,correct:fe,n:H.n});f(ae),h({kind:"idle"});const ce=Math.max(M.best??0,ae.bestStreak);N({v:1,cards:{...M.cards,[d.subject.id]:H},best:ce})},X=async()=>{var fe;if(!u||!l)return;const J=Nb(u.answers,{family:C(l),source:"HYG 4.1 and OpenNGC, in the Mnemosyne Cosmos cartridge",now:Date.now()});if(J){h({kind:"busy"});try{const _e=await Sd.invoke("permissions.refresh",{permissions:["vault:write"]});if(((fe=_e==null?void 0:_e.granted)==null?void 0:fe["vault:write"])===!1){m.current&&h({kind:"failed",why:s("review.why.declined")});return}const{vault:H,unlocked:ae}=await Sd.ensureSandbox();await Sd.socialIngest(H,J,Lb),m.current&&h({kind:"done",vault:H,unlocked:ae})}catch(_e){const H=_e instanceof Error?_e.message:String(_e);if(console.warn("[cosmos] run not written to memory:",H),!m.current)return;h({kind:"failed",why:H.includes("No Mnemosyne host")?s("review.why.noHost"):/permission/i.test(H)?s("review.why.noPermission"):H})}}},k=o.kind==="ready"||Object.keys(M.cards).length>0,U=o.kind!=="loading"&&k?Tb(M,Date.now()):null,Y=o.kind!=="loading"?Pb(M):null,V=u?qb(u,Date.now()):null,z=s("review.unknown"),ee=l?u?E?"results":"run":"length":"families";return R.jsxs("section",{className:"review-panel panel","aria-label":s("review.title"),children:[R.jsxs("header",{className:"panel-head",children:[l?R.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:te,children:["← ",C(l)]}):R.jsx("h2",{children:s("review.title")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:r,"aria-label":s("review.close"),children:"✕"})]}),o.kind==="unsaved"&&R.jsx("p",{className:"note warn",role:"status",children:s("review.unsaved",{why:o.why})}),(Y==null?void 0:Y.tight)&&R.jsx("p",{className:"note warn",children:s("review.tight",{pct:Math.round(Y.ratio*100)})}),ee==="families"&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"review-totals",children:[R.jsxs("span",{children:[R.jsx("b",{children:U?U.seen:z})," ",s("review.studied")]}),R.jsxs("span",{children:[R.jsx("b",{children:U?U.due:z})," ",s("review.due")]}),R.jsxs("span",{children:[R.jsx("b",{children:U?U.mastered:z})," ",s("review.mastered")]}),R.jsxs("span",{children:[R.jsx("b",{children:M.best??z})," ",s("review.best")]})]}),R.jsx("p",{className:"note",children:s("review.pick")}),R.jsx("ul",{className:"family-list",children:b.map(J=>{const fe=Hg(J).ok,_e=Bb(J,t,M,Date.now());return R.jsx("li",{children:R.jsxs("button",{type:"button",className:"family-tile",disabled:!fe||o.kind==="loading",onClick:()=>c(J),children:[R.jsx("span",{className:"family-name",children:C(J)}),R.jsx("span",{className:"family-count",children:J.total}),fe?R.jsx("span",{className:"family-progress",children:U?`${_e.mastered} / ${J.total}`:z}):R.jsx("span",{className:"family-refusal",children:L(J)})]})},J.id)})})]}),ee==="length"&&l&&R.jsxs(R.Fragment,{children:[R.jsx("p",{className:"note",children:s("review.scope",{n:l.total,level:C(l)})}),R.jsx("h3",{children:s("review.howMany")}),R.jsx("div",{className:"length-row",children:Gb.map(J=>R.jsx("button",{type:"button",className:"btn",onClick:()=>Z(J),children:Vb(J)??s("review.endless")},String(J)))})]}),ee==="run"&&d&&u&&R.jsxs(R.Fragment,{children:[R.jsxs("p",{className:"run-count",children:[u.answers.length+1,u.length===null?"":` / ${u.length}`]}),R.jsx("h3",{children:s("review.question")}),R.jsx("ul",{className:"option-list",children:d.options.map(J=>{const fe=g?J.id===d.subject.id?" right":J.id===g.picked?" wrong":"":"";return R.jsx("li",{children:R.jsxs("button",{type:"button",className:`option${fe}`,onClick:()=>I(J),disabled:!!g,children:[R.jsx("span",{className:"option-name",children:J.name}),R.jsx("span",{className:"option-id",children:J.id})]})},J.id)})}),g&&R.jsxs("div",{className:"answer-row",children:[R.jsxs("p",{children:[s("review.answerIs")," ",R.jsx("b",{children:d.subject.name})," · ",R.jsx("code",{children:d.subject.id})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>{const J=x(d.subject.id);J&&n(J)},children:s("card.centre")}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>F(l,M,new Set(u.answers.map(J=>J.id))),children:s("review.next")}),u.length===null&&R.jsx("button",{type:"button",className:"btn",onClick:()=>f(Xb(u)),children:s("review.finishHere")})]})]})]}),ee==="run"&&!d&&R.jsx("p",{className:"note",children:s("review.empty")}),ee==="results"&&V&&u&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"results",children:[R.jsxs("span",{children:[R.jsx("b",{children:V.accuracy===null?z:`${Math.round(V.accuracy*100)}%`}),s("review.accuracy")]}),R.jsxs("span",{children:[R.jsx("b",{children:V.bestStreak}),s("review.best")]}),R.jsxs("span",{children:[R.jsx("b",{children:Yb(V.elapsedMs)}),s("review.time")]})]}),Wg(V.accuracy)&&R.jsx("p",{className:"rank",children:s($b[Wg(V.accuracy)])}),V.bestStreak>0&&V.bestStreak>=(M.best??0)&&R.jsx("p",{className:"note",children:s("review.record")}),V.missed.length>0&&R.jsxs(R.Fragment,{children:[R.jsx("h3",{children:s("review.comeBack")}),R.jsxs("ul",{className:"missed",children:[V.missed.slice(0,12).map(J=>R.jsxs("li",{children:[J.name," ",R.jsx("code",{children:J.id})]},J.id)),V.missed.length>12&&R.jsx("li",{children:s("review.andMore",{n:V.missed.length-12})})]})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>{f(null),p(null),e(null),i(null)},children:s("review.again")}),R.jsx("button",{type:"button",className:"btn",onClick:te,children:s("review.another")}),v.kind!=="done"&&R.jsx("button",{type:"button",className:"btn btn-accent",onClick:X,disabled:v.kind==="busy"||u.answers.length===0,children:v.kind==="busy"?s("review.saving"):s("review.save")})]}),v.kind==="done"&&R.jsx("p",{className:"note ok",role:"status",children:s(v.unlocked?"review.saved":"review.savedLocked",{vault:v.vault})}),v.kind==="failed"&&R.jsx("p",{className:"note error",role:"alert",children:v.why})]})]})}const Zb=t=>`${Number.isInteger(t)?t:t.toFixed(2).replace(/0$/,"")}×`;function Qb({open:t,onClose:e,words:n,speedRows:i,appRows:r,osRows:s}){const o=Ee.useSyncExternalStore(Og,jl),a=Ee.useSyncExternalStore(Og,rb),l=Ee.useSyncExternalStore(lb,ab),c=Ee.useRef(null);if(Ee.useEffect(()=>{sb()},[]),Ee.useEffect(()=>{var d;if(!t)return;(d=c.current)==null||d.focus();const f=p=>{p.key==="Escape"&&e()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e]),!t)return null;const u=l.kind==="granted"?n.granted:l.kind==="refused"?n.refused(l.why):n.asking;return R.jsx("div",{className:"gx-scrim",onPointerDown:f=>{f.target===f.currentTarget&&e()},children:R.jsxs("section",{className:"gx-panel",role:"dialog","aria-modal":"true","aria-label":n.title,children:[R.jsxs("header",{className:"gx-head",children:[R.jsx("h2",{children:n.title}),R.jsx("button",{ref:c,type:"button",className:"gx-close",onClick:e,"aria-label":n.close,children:"✕"})]}),R.jsx("p",{className:"gx-lead",children:n.lead}),R.jsx("p",{className:`gx-status ${l.kind}`,role:"status",children:u}),R.jsx("h3",{children:n.speeds}),a.kind==="loading"&&R.jsx("p",{className:"gx-note",children:n.loading}),i.map(f=>R.jsxs("label",{className:"gx-speed",children:[R.jsxs("span",{className:"gx-speed-head",children:[R.jsx("span",{children:f.label}),R.jsx("span",{className:"gx-speed-value",children:Zb(o[f.key])})]}),R.jsx("input",{type:"range",min:mx,max:gx,step:nb,value:o[f.key],onChange:d=>Al(f.key,Number(d.target.value),{save:!1}),onPointerUp:d=>Al(f.key,Number(d.currentTarget.value)),onKeyUp:d=>Al(f.key,Number(d.currentTarget.value)),onBlur:d=>Al(f.key,Number(d.currentTarget.value))})]},f.key)),R.jsx("button",{type:"button",className:"gx-reset",onClick:ob,children:n.reset}),a.kind==="unsaved"&&R.jsx("p",{className:"gx-note warn",role:"alert",children:n.unsaved(a.why)}),R.jsx("h3",{children:n.inApp}),R.jsx("ul",{className:"gx-list",children:r.map(f=>R.jsxs("li",{children:[R.jsx("span",{"aria-hidden":!0,children:f.icon}),f.text]},f.text))}),R.jsx("h3",{children:n.os}),R.jsx("ul",{className:"gx-list",children:s.map(f=>R.jsxs("li",{children:[R.jsx("span",{"aria-hidden":!0,children:f.icon}),f.text]},f.text))})]})})}const Md={ra:90,dec:20,fov:65},Jb={figures:!0,constellationNames:!0,deepSky:!0,planets:!0,starNames:!0,grid:!1,magLimit:6.5},D0="mnemo-cosmos.place";function e5(){var G,Ue,Ve;const{t,lang:e}=iu(),[n,i]=Ee.useState({kind:"reading"}),[r,s]=Ee.useState(Md),[o,a]=Ee.useState(!1),[l,c]=Ee.useState(Jb),[u,f]=Ee.useState(null),[d,p]=Ee.useState(null),[g,y]=Ee.useState(null),[v,h]=Ee.useState(!1),[m,_]=Ee.useState("none"),M=()=>{h(!0),_("none"),f(null)},b=K=>{_(de=>de===K?"none":K),K!=="place"&&h(!1)},[E,T]=Ee.useState(""),[x,C]=Ee.useState(()=>new Date),[L,N]=Ee.useState(null),F=Ee.useRef(!0);Ee.useEffect(()=>(F.current=!0,()=>{F.current=!1}),[]);const Z=Ee.useCallback(()=>{i({kind:"reading"}),Promise.all([fetch(_m("catalog/catalog.bin"),{signal:AbortSignal.timeout(15e3)}).then(K=>{if(!K.ok)throw new Error(`catalog.bin → HTTP ${K.status}`);return K.arrayBuffer()}),fetch(_m("catalog/constellations.json"),{signal:AbortSignal.timeout(15e3)}).then(K=>{if(!K.ok)throw new Error(`constellations.json → HTTP ${K.status}`);return K.json()})]).then(([K,de])=>{F.current&&i({kind:"ready",catalog:fy(K),constellations:de.constellations})}).catch(K=>{if(!F.current)return;const de=K instanceof Error?K.message:String(K);console.warn("[cosmos] catalogue not read:",de),i({kind:"failed",why:de})})},[]);Ee.useEffect(Z,[Z]),Ee.useEffect(()=>{try{const K=localStorage.getItem(D0);if(!K)return;const de=JSON.parse(K);typeof de.latitude=="number"&&typeof de.longitude=="number"&&N({latitude:de.latitude,longitude:de.longitude,elevation:typeof de.elevation=="number"?de.elevation:0,label:typeof de.label=="string"?de.label:""})}catch(K){console.warn("[cosmos] stored place not read:",K)}},[]);const te=Ee.useMemo(()=>l.planets?FS(x,L):[],[x,L,l.planets]),I=Ee.useMemo(()=>zS(x),[x]),X=Ee.useCallback(K=>hy(K,e),[e]),k=Ee.useCallback(K=>t(`body.${K}`),[t]),U=Ee.useCallback(K=>s(de=>Uu(de,K.ra,K.dec)),[]),Y=Ee.useCallback(K=>({id:K.body,name:t(`body.${K.body}`),kind:"body",ra:K.ra,dec:K.dec,mag:K.mag,con:"",aliases:[]}),[t]),V=Ee.useCallback(K=>{if(n.kind!=="ready"||v)return;if(!K){f(null);return}if(K.kind==="star"){f(gf(n.catalog.stars[K.index]));return}if(K.kind==="dso"){f(vf(n.catalog.dsos[K.index]));return}const de=te[K.index];de&&f(Y(de))},[n,te,Y,v]),z=(u==null?void 0:u.kind)==="body"?te.find(K=>K.body===u.id)??null:null,ee=z?OS(z.body,x,L):null,J=Ee.useMemo(()=>{if(n.kind!=="ready")return[];const K=E.trim().toLowerCase();if(K.length<2)return[];const de=[],Be=ke=>ke.name.toLowerCase().includes(K)||ke.id.toLowerCase().includes(K)||ke.aliases.some(Ce=>Ce.toLowerCase().includes(K));for(const ke of te){const Ce=Y(ke);Be(Ce)&&de.push(Ce)}for(const ke of n.catalog.stars){if(de.length>=20)break;const Ce=gf(ke);Be(Ce)&&de.push(Ce)}for(const ke of n.catalog.dsos){if(de.length>=40)break;const Ce=vf(ke);Be(Ce)&&de.push(Ce)}return de},[n,E,te,Y]),fe=K=>{f(K),s(de=>Uu(de,K.ra,K.dec)),_("none")};if(n.kind==="reading")return R.jsx("main",{className:"boot",children:R.jsx("p",{role:"status",children:t("app.loading")})});if(n.kind==="failed")return R.jsxs("main",{className:"boot",children:[R.jsx("p",{role:"alert",children:t("app.failed",{why:n.why})}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:Z,children:t("app.retry")})]});const{catalog:_e,constellations:H}=n,ae=_e.truncation,ce=_e.dsos.filter(K=>K.messier).length;return R.jsxs("main",{className:"cosmos",children:[R.jsx(hb,{stars:_e.stars,dsos:_e.dsos,constellations:H,bodies:te,layers:l,look:r,onLook:s,onPick:V,selected:u?{ra:u.ra,dec:u.dec}:null,quizTarget:d,hiddenLabel:g,constellationLabel:X,bodyLabel:k,onRecenter:()=>s(Md)}),R.jsxs("header",{className:"topbar",children:[R.jsxs("div",{className:"brand",children:[R.jsx("span",{className:"eyebrow",children:t("app.eyebrow")}),R.jsx("strong",{children:"Cosmos"})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>b("search"),children:t("app.search")}),R.jsx("span",{className:"counts",children:t("app.objects",{stars:_e.stars.length,dsos:_e.dsos.length})}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>b("about"),children:t("credits.open")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>a(!0),"aria-label":t("gest.open"),title:t("gest.open"),children:"✋"}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:M,children:t("review.open")})]}),R.jsx(Qb,{open:o,onClose:()=>a(!1),words:{title:t("gest.title"),lead:t("gest.lead"),asking:t("gest.asking"),granted:t("gest.granted"),refused:K=>t("gest.refused",{why:K}),speeds:t("gest.speeds"),reset:t("gest.reset"),loading:t("gest.loading"),unsaved:K=>t("gest.unsaved",{why:K}),inApp:t("gest.inApp"),os:t("gest.os"),close:t("gest.close")},speedRows:[{key:"move",label:t("gest.speed.move")},{key:"zoom",label:t("gest.speed.zoom")}],appRows:[{icon:"🤏",text:t("gest.pan")},{icon:"↕️",text:t("gest.depth")},{icon:"🤏🤏",text:t("gest.zoom")},{icon:"✋✋",text:t("gest.recenter")},{icon:"👌",text:t("gest.select")}],osRows:[{icon:"🖐️",text:t("gest.osFull")},{icon:"✊",text:t("gest.osClose")},{icon:"🤏",text:t("gest.osWindow")}]}),m==="search"&&R.jsxs("section",{className:"panel search-panel",children:[R.jsx("input",{autoFocus:!0,type:"search",value:E,placeholder:t("app.search"),onChange:K=>T(K.target.value)}),E.trim().length>=2&&J.length===0&&R.jsx("p",{className:"note",children:t("app.noResults")}),R.jsx("ul",{className:"results",children:J.map(K=>R.jsx("li",{children:R.jsxs("button",{type:"button",onClick:()=>fe(K),children:[R.jsx("span",{children:K.name}),R.jsx("code",{children:K.id})]})},`${K.kind}:${K.id}`))})]}),R.jsxs("aside",{className:"controls panel",children:[R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.figures,onChange:K=>c({...l,figures:K.target.checked})})," ",t("sky.figures")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.constellationNames,onChange:K=>c({...l,constellationNames:K.target.checked})})," ",t("sky.names")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.starNames,onChange:K=>c({...l,starNames:K.target.checked})})," ",t("sky.starNames")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.deepSky,onChange:K=>c({...l,deepSky:K.target.checked})})," ",t("sky.deepSky")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.planets,onChange:K=>c({...l,planets:K.target.checked})})," ",t("sky.planets")]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:l.grid,onChange:K=>c({...l,grid:K.target.checked})})," ",t("sky.grid")]}),R.jsxs("label",{className:"slider",children:[t("sky.magFilter")," ",R.jsx("b",{children:l.magLimit.toFixed(1)}),R.jsx("input",{type:"range",min:1,max:ae.magLimit,step:.1,value:l.magLimit,onChange:K=>c({...l,magLimit:Number(K.target.value)})})]}),R.jsxs("label",{className:"slider",children:[t("sky.fov")," ",R.jsxs("b",{children:[Math.round(r.fov),"°"]}),R.jsx("input",{type:"range",min:c_,max:u_,step:1,value:Math.round(r.fov),onChange:K=>s({...r,fov:Number(K.target.value)})})]}),R.jsx("button",{type:"button",className:"btn",onClick:()=>s(Md),children:t("sky.reset")})]}),R.jsx(t5,{when:x,setWhen:C,place:L,setPlace:N,open:m==="place",onToggle:()=>b("place")}),u&&R.jsxs("section",{className:`panel card-panel${v?" beside-review":""}`,children:[R.jsxs("header",{className:"panel-head",children:[R.jsxs("div",{children:[R.jsx("h2",{children:u.name}),R.jsx("code",{className:"key",children:u.id})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>f(null),"aria-label":t("app.close"),children:"✕"})]}),u.aliases.length>0&&R.jsxs("p",{className:"aliases",children:[R.jsx("span",{children:t("card.alsoKnown")})," ",u.aliases.join(" · ")]}),u.kind==="star"&&my(u.id)&&R.jsx("p",{className:"note warn",children:t("card.unstableId")}),R.jsxs("dl",{className:"facts",children:[R.jsx(an,{label:t("card.magnitude"),hint:t("card.magnitude.hint"),value:((G=(z==null?void 0:z.mag)??u.mag)==null?void 0:G.toFixed(2))??null}),u.star&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.absmag"),hint:t("card.absmag.hint"),value:((Ue=u.star.absmag)==null?void 0:Ue.toFixed(2))??null}),R.jsx(an,{label:t("card.distance"),value:Ty(u.star.dist)}),R.jsx(an,{label:t("card.spectral"),value:u.star.spect||null})]}),u.dso&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.type"),value:t(`type.${u.dso.type}`)||u.dso.type}),R.jsx(an,{label:t("card.size"),value:u.dso.majAx===null?null:`${u.dso.majAx.toFixed(1)}′${u.dso.minAx!==null?` × ${u.dso.minAx.toFixed(1)}′`:""}`})]}),z&&R.jsx(an,{label:t("card.au"),value:z.au===null?null:`${z.au.toFixed(3)} AU`}),u.id==="Moon"&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.phase"),value:t(`moon.${I.phase}`)}),R.jsx(an,{label:t("card.illuminated",{pct:Math.round(I.illuminated*100)}),value:" "})]}),R.jsx(an,{label:t("card.constellation"),value:u.con||null}),R.jsx(an,{label:u.kind==="body"?t("card.positionNow"):t("card.position"),value:`${Ey((z==null?void 0:z.ra)??u.ra)}  ${wy((z==null?void 0:z.dec)??u.dec)}`}),z&&R.jsxs(R.Fragment,{children:[R.jsx(an,{label:t("card.altitude"),value:z.altitude===null?null:`${z.altitude.toFixed(1)}°`}),R.jsx(an,{label:t("card.azimuth"),value:z.azimuth===null?null:`${z.azimuth.toFixed(1)}°`})]})]}),((Ve=u.star)==null?void 0:Ve.dist)===null&&R.jsx("p",{className:"note",children:t("card.noDistance")}),z&&!L&&R.jsx("p",{className:"note",children:t("card.noPlace")}),ee&&R.jsxs("dl",{className:"facts",children:[R.jsx(an,{label:t("card.rises"),value:ee.rise?ee.rise.toLocaleString():t("card.neverRises")}),R.jsx(an,{label:t("card.sets"),value:ee.set?ee.set.toLocaleString():t("card.neverSets")})]}),R.jsx("button",{type:"button",className:"btn",onClick:()=>s(Uu(r,u.ra,u.dec)),children:t("card.centre")}),R.jsx(Mb,{object:u})]}),m==="about"&&R.jsxs("section",{className:"panel about-panel",children:[R.jsxs("header",{className:"panel-head",children:[R.jsx("h2",{children:t("trunc.title")}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>_("none"),"aria-label":t("app.close"),children:"✕"})]}),R.jsx("p",{children:t("trunc.stars",{limit:ae.magLimit.toFixed(1),kept:_e.stars.length,omitted:ae.starsOmitted})}),R.jsx("p",{children:t("trunc.noDistance",{n:ae.starsNoDistance})}),R.jsx("p",{children:t("trunc.dsos",{kept:_e.dsos.length,messier:ce,omitted:ae.dsoOmitted})}),R.jsx("p",{children:t("trunc.sphere")}),R.jsx("h3",{children:t("credits.title")}),R.jsxs("ul",{className:"credits",children:[R.jsx("li",{children:t("credits.stars")}),R.jsx("li",{children:t("credits.dsos")}),R.jsx("li",{children:t("credits.figures")}),R.jsx("li",{children:t("credits.ephemeris")})]}),R.jsx("p",{className:"note",children:t("credits.accuracy")}),R.jsx("p",{className:"note",children:t("credits.derived")})]}),v&&R.jsx(Kb,{catalog:_e,onMark:p,onLookAt:U,onHideLabel:y,onClose:()=>{h(!1),p(null),y(null)}})]})}function an({label:t,value:e,hint:n}){return R.jsxs(R.Fragment,{children:[R.jsx("dt",{title:n,children:t}),R.jsx("dd",{className:e===null?"unknown":"",children:e===null?"—":e})]})}function t5({when:t,setWhen:e,place:n,setPlace:i,open:r,onToggle:s}){const{t:o}=iu(),[a,l]=Ee.useState(()=>n?String(n.latitude):""),[c,u]=Ee.useState(()=>n?String(n.longitude):""),[f,d]=Ee.useState(()=>n?String(n.elevation):""),[p,g]=Ee.useState(()=>(n==null?void 0:n.label)??""),[y,v]=Ee.useState(null),h=M=>e(new Date(t.getTime()+M)),m=()=>{const M=BS(a,c,f,p);if(!M.ok){v(o(`place.bad.${M.why}`));return}v(null),i(M.place);try{localStorage.setItem(D0,JSON.stringify(M.place))}catch(b){console.warn("[cosmos] place not stored:",b)}},_=()=>{i(null),l(""),u(""),d(""),g(""),v(null);try{localStorage.removeItem(D0)}catch{}};return R.jsxs("section",{className:`panel time-panel${r?" open":""}`,children:[R.jsxs("header",{className:"panel-head",children:[R.jsxs("div",{children:[R.jsx("h3",{children:o("time.title")}),R.jsxs("p",{className:"instant",children:[t.toISOString().replace("T"," ").slice(0,19)," ",o("time.utc")]}),R.jsxs("p",{className:"instant local",children:[t.toLocaleString()," ",o("time.local")]})]}),R.jsx("button",{type:"button",className:"btn btn-ghost",onClick:s,children:r?"▾":"▸"})]}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn",onClick:()=>h(-864e5),children:o("time.minus1d")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(-36e5),children:o("time.minus1h")}),R.jsx("button",{type:"button",className:"btn btn-accent",onClick:()=>e(new Date),children:o("time.now")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(36e5),children:o("time.plus1h")}),R.jsx("button",{type:"button",className:"btn",onClick:()=>h(864e5),children:o("time.plus1d")})]}),r&&R.jsxs(R.Fragment,{children:[R.jsx("h3",{children:o("place.title")}),R.jsx("p",{className:"instant",children:n?n.label||`${n.latitude}, ${n.longitude}`:o("place.none")}),R.jsxs("div",{className:"place-form",children:[R.jsxs("label",{children:[o("place.label"),R.jsx("input",{value:p,onChange:M=>g(M.target.value)})]}),R.jsxs("label",{children:[o("place.latitude"),R.jsx("input",{value:a,onChange:M=>l(M.target.value),inputMode:"decimal"})]}),R.jsxs("label",{children:[o("place.longitude"),R.jsx("input",{value:c,onChange:M=>u(M.target.value),inputMode:"decimal"})]}),R.jsxs("label",{children:[o("place.elevation"),R.jsx("input",{value:f,onChange:M=>d(M.target.value),inputMode:"decimal"})]})]}),y&&R.jsx("p",{className:"note error",role:"alert",children:y}),R.jsxs("div",{className:"btn-row",children:[R.jsx("button",{type:"button",className:"btn btn-accent",onClick:m,children:o("place.save")}),n&&R.jsx("button",{type:"button",className:"btn",onClick:_,children:o("place.clear")})]}),R.jsx("p",{className:"note",children:o("place.hint")})]})]})}s_();r_(document.getElementById("root")).render(R.jsx(e5,{}));
