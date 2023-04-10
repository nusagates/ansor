import{i as te,f as v,n as re,bm as F,u as ne,aO as z,ad as ae,aH as oe,ac as se,h as ie,aw as J,a_ as ue}from"./app-e0e7b19c.js";var j;const b=typeof window<"u",q=e=>typeof e=="function",le=e=>typeof e=="string",ce=()=>{};b&&((j=window==null?void 0:window.navigator)!=null&&j.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function h(e){return typeof e=="function"?e():ne(e)}function fe(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const B=e=>e();function pe(e=B){const t=v(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:z(t),pause:r,resume:n,eventFilter:a}}function de(e){return e}function $(e){return ae()?(oe(e),!0):!1}function ve(e,t=!0){se()?ie(e):t?e():J(e)}const me=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,we=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Oe=(e,t,r,n)=>{let a=e<12?"AM":"PM";return n&&(a=a.split("").reduce((o,s)=>o+=`${s}.`,"")),r?a.toLowerCase():a},ge=(e,t,r={})=>{var n;const a=e.getFullYear(),o=e.getMonth(),s=e.getDate(),i=e.getHours(),c=e.getMinutes(),f=e.getSeconds(),u=e.getMilliseconds(),d=e.getDay(),m=(n=r.customMeridiem)!=null?n:Oe,p={YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>o+1,MM:()=>`${o+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(s),DD:()=>`${s}`.padStart(2,"0"),H:()=>String(i),HH:()=>`${i}`.padStart(2,"0"),h:()=>`${i%12||12}`.padStart(1,"0"),hh:()=>`${i%12||12}`.padStart(2,"0"),m:()=>String(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(f),ss:()=>`${f}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>d,dd:()=>e.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>m(i,c),AA:()=>m(i,c,!1,!0),a:()=>m(i,c,!0),aa:()=>m(i,c,!0,!0)};return t.replace(we,(O,g)=>g||p[O]())},_e=e=>{if(e===null)return new Date(NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(me);if(t){const r=t[2]-1||0,n=(t[7]||"0").substring(0,3);return new Date(t[1],r,t[3]||1,t[4]||0,t[5]||0,t[6]||0,n)}}return new Date(e)};function et(e,t="HH:mm:ss",r={}){return te(()=>ge(_e(h(e)),h(t),r))}function ye(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let o=null;const s=v(!1);function i(){o&&(clearInterval(o),o=null)}function c(){s.value=!1,i()}function f(){const u=h(t);u<=0||(s.value=!0,a&&e(),i(),o=setInterval(e,u))}if(n&&b&&f(),re(t)||q(t)){const u=F(t,()=>{s.value&&b&&f()});$(u)}return $(c),{isActive:s,pause:c,resume:f}}var T=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,Pe=(e,t)=>{var r={};for(var n in e)Se.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&T)for(var n of T(e))t.indexOf(n)<0&&he.call(e,n)&&(r[n]=e[n]);return r};function be(e,t,r={}){const n=r,{eventFilter:a=B}=n,o=Pe(n,["eventFilter"]);return F(e,fe(a,t),o)}var $e=Object.defineProperty,De=Object.defineProperties,Ae=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&C(e,r,t[r]);if(D)for(var r of D(t))U.call(t,r)&&C(e,r,t[r]);return e},Ee=(e,t)=>De(e,Ae(t)),Fe=(e,t)=>{var r={};for(var n in e)G.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&D)for(var n of D(e))t.indexOf(n)<0&&U.call(e,n)&&(r[n]=e[n]);return r};function Me(e,t,r={}){const n=r,{eventFilter:a}=n,o=Fe(n,["eventFilter"]),{eventFilter:s,pause:i,resume:c,isActive:f}=pe(a);return{stop:be(e,t,Ee(Ie({},o),{eventFilter:s})),pause:i,resume:c,isActive:f}}function Ne(e){var t;const r=h(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=b?window:void 0;function _(...e){let t,r,n,a;if(le(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return ce;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},i=(u,d,m,p)=>(u.addEventListener(d,m,p),()=>u.removeEventListener(d,m,p)),c=F(()=>[Ne(t),h(a)],([u,d])=>{s(),u&&o.push(...r.flatMap(m=>n.map(p=>i(u,m,p,d))))},{immediate:!0,flush:"post"}),f=()=>{c(),s()};return $(f),f}function je(e,t=!1){const r=v(),n=()=>r.value=!!e();return n(),ve(n,t),r}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E="__vueuse_ssr_handlers__";I[E]=I[E]||{};const Te=I[E];function Ce(e,t){return Te[e]||t}function Le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Re=Object.defineProperty,L=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,H=(e,t)=>{for(var r in t||(t={}))He.call(t,r)&&R(e,r,t[r]);if(L)for(var r of L(t))xe.call(t,r)&&R(e,r,t[r]);return e};const Qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},x="vueuse-storage";function Ve(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:f=!1,shallow:u,window:d=S,eventFilter:m,onError:p=l=>{console.error(l)}}=n,O=(u?ue:v)(t);if(!r)try{r=Ce("getDefaultStorage",()=>{var l;return(l=S)==null?void 0:l.localStorage})()}catch(l){p(l)}if(!r)return O;const g=h(t),M=Le(g),P=(a=n.serializer)!=null?a:Qe[M],{pause:X,resume:N}=Me(O,()=>Z(O.value),{flush:o,deep:s,eventFilter:m});return d&&i&&(_(d,"storage",A),_(d,x,ee)),A(),O;function Z(l){try{if(l==null)r.removeItem(e);else{const w=P.write(l),y=r.getItem(e);y!==w&&(r.setItem(e,w),d&&d.dispatchEvent(new CustomEvent(x,{detail:{key:e,oldValue:y,newValue:w,storageArea:r}})))}}catch(w){p(w)}}function K(l){const w=l?l.newValue:r.getItem(e);if(w==null)return c&&g!==null&&r.setItem(e,P.write(g)),g;if(!l&&f){const y=P.read(w);return q(f)?f(y,g):M==="object"&&!Array.isArray(y)?H(H({},g),y):y}else return typeof w!="string"?w:P.read(w)}function ee(l){A(l.detail)}function A(l){if(!(l&&l.storageArea!==r)){if(l&&l.key==null){O.value=g;return}if(!(l&&l.key!==e)){X();try{O.value=K(l)}catch(w){p(w)}finally{l?J(N):N()}}}}}function We(e,t={}){const{immediate:r=!0,window:n=S}=t,a=v(!1);let o=0,s=null;function i(u){if(!a.value||!n)return;const d=u-o;e({delta:d,timestamp:u}),o=u,s=n.requestAnimationFrame(i)}function c(){!a.value&&n&&(a.value=!0,s=n.requestAnimationFrame(i))}function f(){a.value=!1,s!=null&&n&&(n.cancelAnimationFrame(s),s=null)}return r&&c(),$(f),{isActive:z(a),pause:f,resume:c}}function tt(e,t,r={}){const{window:n=S}=r;return Ve(e,t,n==null?void 0:n.localStorage,r)}function Ye(e={}){const{window:t=S}=e,r=t==null?void 0:t.navigator,n=je(()=>r&&"connection"in r),a=v(!0),o=v(!1),s=v(void 0),i=v(void 0),c=v(void 0),f=v(void 0),u=v(void 0),d=v(void 0),m=v("unknown"),p=n.value&&r.connection;function O(){r&&(a.value=r.onLine,s.value=a.value?void 0:Date.now(),i.value=a.value?Date.now():void 0,p&&(c.value=p.downlink,f.value=p.downlinkMax,d.value=p.effectiveType,u.value=p.rtt,o.value=p.saveData,m.value=p.type))}return t&&(_(t,"offline",()=>{a.value=!1,s.value=Date.now()}),_(t,"online",()=>{a.value=!0,i.value=Date.now()})),p&&_(p,"change",O,!1),O(),{isSupported:n,isOnline:a,saveData:o,offlineAt:s,onlineAt:i,downlink:c,downlinkMax:f,effectiveType:d,rtt:u,type:m}}var ke=Object.defineProperty,Q=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qe=(e,t)=>{for(var r in t||(t={}))ze.call(t,r)&&V(e,r,t[r]);if(Q)for(var r of Q(t))Je.call(t,r)&&V(e,r,t[r]);return e};function rt(e={}){const{controls:t=!1,interval:r="requestAnimationFrame"}=e,n=v(new Date),a=()=>n.value=new Date,o=r==="requestAnimationFrame"?We(a,{immediate:!0}):ye(a,r,{immediate:!0});return t?qe({now:n},o):n}function nt(e={}){const{isOnline:t}=Ye(e);return t}function at(e={}){const{window:t=S}=e,r=v(!1),n=a=>{if(!t)return;a=a||t.event;const o=a.relatedTarget||a.toElement;r.value=!o};return t&&(_(t,"mouseout",n,{passive:!0}),_(t.document,"mouseleave",n,{passive:!0}),_(t.document,"mouseenter",n,{passive:!0})),r}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var Be=Object.defineProperty,Y=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Xe=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&k(e,r,t[r]);if(Y)for(var r of Y(t))Ue.call(t,r)&&k(e,r,t[r]);return e};const Ze={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Xe({linear:de},Ze);export{nt as a,rt as b,et as c,at as d,tt as u};
