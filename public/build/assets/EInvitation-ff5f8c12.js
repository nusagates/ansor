import{h as ge,p as O,k as ye,C as J,u as s,H as de,I as he,s as we,E as pe,K as Oe,L as be,M as Se,q as ke,f as T,a as i,w as f,F as R,x as S,o as D,X as Pe,d as C,c as F,g as X,N as q,b as r,t as k}from"./app-eb5dfed9.js";var Z;const Y=typeof window<"u",fe=e=>typeof e=="function",xe=e=>typeof e=="string",De=()=>{};Y&&((Z=window==null?void 0:window.navigator)!=null&&Z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function M(e){return typeof e=="function"?e():s(e)}function Ce(e,t){function n(...a){return new Promise((l,o)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(l).catch(o)})}return n}const me=e=>e();function Ne(e=me){const t=O(!0);function n(){t.value=!1}function a(){t.value=!0}const l=(...o)=>{t.value&&e(...o)};return{isActive:de(t),pause:n,resume:a,eventFilter:l}}function Ve(e){return e}function H(e){return Oe()?(be(e),!0):!1}function Ae(e,t=!0){he()?we(e):t?e():pe(e)}const Ie=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$e=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Ee=(e,t,n,a)=>{let l=e<12?"AM":"PM";return a&&(l=l.split("").reduce((o,c)=>o+=`${c}.`,"")),n?l.toLowerCase():l},Te=(e,t,n={})=>{var a;const l=e.getFullYear(),o=e.getMonth(),c=e.getDate(),m=e.getHours(),v=e.getMinutes(),g=e.getSeconds(),_=e.getMilliseconds(),w=e.getDay(),u=(a=n.customMeridiem)!=null?a:Ee,y={YY:()=>String(l).slice(-2),YYYY:()=>l,M:()=>o+1,MM:()=>`${o+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(c),DD:()=>`${c}`.padStart(2,"0"),H:()=>String(m),HH:()=>`${m}`.padStart(2,"0"),h:()=>`${m%12||12}`.padStart(1,"0"),hh:()=>`${m%12||12}`.padStart(2,"0"),m:()=>String(v),mm:()=>`${v}`.padStart(2,"0"),s:()=>String(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${_}`.padStart(3,"0"),d:()=>w,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>u(m,v),AA:()=>u(m,v,!1,!0),a:()=>u(m,v,!0),aa:()=>u(m,v,!0,!0)};return t.replace($e,(b,P)=>P||y[b]())},Me=e=>{if(e===null)return new Date(NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(Ie);if(t){const n=t[2]-1||0,a=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)}}return new Date(e)};function Fe(e,t="HH:mm:ss",n={}){return ge(()=>Te(Me(M(e)),M(t),n))}function je(e,t=1e3,n={}){const{immediate:a=!0,immediateCallback:l=!1}=n;let o=null;const c=O(!1);function m(){o&&(clearInterval(o),o=null)}function v(){c.value=!1,m()}function g(){const _=M(t);_<=0||(c.value=!0,l&&e(),m(),o=setInterval(e,_))}if(a&&Y&&g(),ye(t)||fe(t)){const _=J(t,()=>{c.value&&Y&&g()});H(_)}return H(v),{isActive:c,pause:v,resume:g}}var ee=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,We=(e,t)=>{var n={};for(var a in e)Le.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ee)for(var a of ee(e))t.indexOf(a)<0&&Ue.call(e,a)&&(n[a]=e[a]);return n};function Re(e,t,n={}){const a=n,{eventFilter:l=me}=a,o=We(a,["eventFilter"]);return J(e,Ce(l,t),o)}var Ye=Object.defineProperty,He=Object.defineProperties,ze=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&te(e,n,t[n]);if(z)for(var n of z(t))ve.call(t,n)&&te(e,n,t[n]);return e},Be=(e,t)=>He(e,ze(t)),Qe=(e,t)=>{var n={};for(var a in e)_e.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&z)for(var a of z(e))t.indexOf(a)<0&&ve.call(e,a)&&(n[a]=e[a]);return n};function Je(e,t,n={}){const a=n,{eventFilter:l}=a,o=Qe(a,["eventFilter"]),{eventFilter:c,pause:m,resume:v,isActive:g}=Ne(l);return{stop:Re(e,t,Be(qe({},o),{eventFilter:c})),pause:m,resume:v,isActive:g}}function Ge(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const $=Y?window:void 0;function A(...e){let t,n,a,l;if(xe(e[0])||Array.isArray(e[0])?([n,a,l]=e,t=$):[t,n,a,l]=e,!t)return De;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],c=()=>{o.forEach(_=>_()),o.length=0},m=(_,w,u,y)=>(_.addEventListener(w,u,y),()=>_.removeEventListener(w,u,y)),v=J(()=>[Ge(t),M(l)],([_,w])=>{c(),_&&o.push(...n.flatMap(u=>a.map(y=>m(_,u,y,w))))},{immediate:!0,flush:"post"}),g=()=>{v(),c()};return H(g),g}function Ke(e,t=!1){const n=O(),a=()=>n.value=!!e();return a(),Ae(a,t),n}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";B[Q]=B[Q]||{};const Xe=B[Q];function Ze(e,t){return Xe[e]||t}function et(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var tt=Object.defineProperty,ne=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,ae=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t)=>{for(var n in t||(t={}))nt.call(t,n)&&ae(e,n,t[n]);if(ne)for(var n of ne(t))at.call(t,n)&&ae(e,n,t[n]);return e};const ot={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},le="vueuse-storage";function lt(e,t,n,a={}){var l;const{flush:o="pre",deep:c=!0,listenToStorageChanges:m=!0,writeDefaults:v=!0,mergeDefaults:g=!1,shallow:_,window:w=$,eventFilter:u,onError:y=d=>{console.error(d)}}=a,b=(_?Se:O)(t);if(!n)try{n=Ze("getDefaultStorage",()=>{var d;return(d=$)==null?void 0:d.localStorage})()}catch(d){y(d)}if(!n)return b;const P=M(t),V=et(P),I=(l=a.serializer)!=null?l:ot[V],{pause:j,resume:L}=Je(b,()=>x(b.value),{flush:o,deep:c,eventFilter:u});return w&&m&&(A(w,"storage",E),A(w,le,W)),E(),b;function x(d){try{if(d==null)n.removeItem(e);else{const h=I.write(d),N=n.getItem(e);N!==h&&(n.setItem(e,h),w&&w.dispatchEvent(new CustomEvent(le,{detail:{key:e,oldValue:N,newValue:h,storageArea:n}})))}}catch(h){y(h)}}function U(d){const h=d?d.newValue:n.getItem(e);if(h==null)return v&&P!==null&&n.setItem(e,I.write(P)),P;if(!d&&g){const N=I.read(h);return fe(g)?g(N,P):V==="object"&&!Array.isArray(N)?oe(oe({},P),N):N}else return typeof h!="string"?h:I.read(h)}function W(d){E(d.detail)}function E(d){if(!(d&&d.storageArea!==n)){if(d&&d.key==null){b.value=P;return}if(!(d&&d.key!==e)){j();try{b.value=U(d)}catch(h){y(h)}finally{d?pe(L):L()}}}}}function rt(e,t={}){const{immediate:n=!0,window:a=$}=t,l=O(!1);let o=0,c=null;function m(_){if(!l.value||!a)return;const w=_-o;e({delta:w,timestamp:_}),o=_,c=a.requestAnimationFrame(m)}function v(){!l.value&&a&&(l.value=!0,c=a.requestAnimationFrame(m))}function g(){l.value=!1,c!=null&&a&&(a.cancelAnimationFrame(c),c=null)}return n&&v(),H(g),{isActive:de(l),pause:g,resume:v}}function st(e,t,n={}){const{window:a=$}=n;return lt(e,t,a==null?void 0:a.localStorage,n)}function it(e={}){const{window:t=$}=e,n=t==null?void 0:t.navigator,a=Ke(()=>n&&"connection"in n),l=O(!0),o=O(!1),c=O(void 0),m=O(void 0),v=O(void 0),g=O(void 0),_=O(void 0),w=O(void 0),u=O("unknown"),y=a.value&&n.connection;function b(){n&&(l.value=n.onLine,c.value=l.value?void 0:Date.now(),m.value=l.value?Date.now():void 0,y&&(v.value=y.downlink,g.value=y.downlinkMax,w.value=y.effectiveType,_.value=y.rtt,o.value=y.saveData,u.value=y.type))}return t&&(A(t,"offline",()=>{l.value=!1,c.value=Date.now()}),A(t,"online",()=>{l.value=!0,m.value=Date.now()})),y&&A(y,"change",b,!1),b(),{isSupported:a,isOnline:l,saveData:o,offlineAt:c,onlineAt:m,downlink:v,downlinkMax:g,effectiveType:w,rtt:_,type:u}}var ut=Object.defineProperty,re=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pt=(e,t)=>{for(var n in t||(t={}))ct.call(t,n)&&se(e,n,t[n]);if(re)for(var n of re(t))dt.call(t,n)&&se(e,n,t[n]);return e};function ft(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,a=O(new Date),l=()=>a.value=new Date,o=n==="requestAnimationFrame"?rt(l,{immediate:!0}):je(l,n,{immediate:!0});return t?pt({now:a},o):a}function mt(e={}){const{isOnline:t}=it(e);return t}function _t(e={}){const{window:t=$}=e,n=O(!1),a=l=>{if(!t)return;l=l||t.event;const o=l.relatedTarget||l.toElement;n.value=!o};return t&&(A(t,"mouseout",a,{passive:!0}),A(t.document,"mouseleave",a,{passive:!0}),A(t.document,"mouseenter",a,{passive:!0})),n}var ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ie||(ie={}));var vt=Object.defineProperty,ue=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,ce=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ht=(e,t)=>{for(var n in t||(t={}))gt.call(t,n)&&ce(e,n,t[n]);if(ue)for(var n of ue(t))yt.call(t,n)&&ce(e,n,t[n]);return e};const wt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ht({linear:Ve},wt);const Ot=r("h4",null,"Pembuat Surat",-1),bt=r("h4",null,"Supervisi/Mengetahui",-1),St=r("h4",null,"Penerima Undangan/ Yth.",-1),kt=r("br",null,null,-1),Pt={class:"ml-9"},xt=["textContent"],Dt=r("br",null,null,-1),Ct=r("u",null,"Daftar Terlampir",-1),Nt=r("p",null,[r("em",null,"Assalamu alaikum Wr. Wb.")],-1),Vt=["textContent"],At={class:"text-justify"},It=["textContent"],$t=r("td",{style:{width:"100px"}},"Hari",-1),Et=r("td",null,":",-1),Tt={class:"px-1"},Mt=r("td",null,"Tanggal",-1),Ft=r("td",null,":",-1),jt={class:"px-1"},Lt=r("td",null,"Waktu",-1),Ut=r("td",null,":",-1),Wt=["textContent"],Rt=r("td",null,"Tempat",-1),Yt=r("td",null,":",-1),Ht=["textContent"],zt=r("p",{class:"my-2 text-justify"},"kami mengharap kehadirannya pada acara tersebut.",-1),qt=["textContent"],Bt=r("p",{class:"mt-2"},[r("em",null,"Wallahul muafieq ila aqwamiettarieq"),r("br"),r("em",null,"Wassalamualaikum Wr. Wb.")],-1),Qt=["textContent"],Jt=["textContent"],Gt=["textContent"],Kt=["textContent"],Xt=r("h3",null,"Lampiran Penerima Surat:",-1),Zt=r("br",null,null,-1),en={class:"ml-9"},tn=["textContent"],an={__name:"EInvitation",setup(e){const t=mt(),n=ft(),a=Fe(n,"YYYY-MM-DD");let l=ke({preview:!1}),o=st("userData",{recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:a,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""});function c(){l.preview=!0}function m(){o.value={recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:a,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""}}_t();function v(){o.value.recipients.push({value:null})}function g(w){o.value.recipients.splice(w,1)}function _(){}return(w,u)=>{const y=S("v-toolbar-title"),b=S("v-spacer"),P=S("v-icon"),V=S("v-btn"),I=S("v-toolbar-items"),j=S("v-toolbar"),L=S("v-alert"),x=S("v-text-field"),U=S("v-divider"),W=S("v-card-text"),E=S("v-card-actions"),d=S("v-card"),h=S("v-sheet"),N=S("v-dialog");return D(),T(R,null,[i(s(Pe),{title:"Undangan Digital"}),i(d,null,{default:f(()=>[i(j,{density:"compact",color:"teal"},{default:f(()=>[i(y,null,{default:f(()=>[C("Undangan Elektronik")]),_:1}),i(b),i(I,null,{default:f(()=>[i(V,{onClick:c,variant:"text",icon:""},{default:f(()=>[i(P,null,{default:f(()=>[C("mdi-eye")]),_:1})]),_:1})]),_:1})]),_:1}),i(W,null,{default:f(()=>[s(t)?X("",!0):(D(),F(L,{key:0,color:"warning",class:"mb-3",density:"compact",icon:"mdi-access-point-off",text:"Sepertinya kamu sedang offline, ya"})),i(x,{density:"compact",label:"Nama Kegiatan",modelValue:s(o).agenda,"onUpdate:modelValue":u[0]||(u[0]=p=>s(o).agenda=p)},null,8,["modelValue"]),i(x,{density:"compact",label:"Tanggal Kegiatan",modelValue:s(o).date,"onUpdate:modelValue":u[1]||(u[1]=p=>s(o).date=p),type:"date"},null,8,["modelValue"]),i(x,{density:"compact",label:"Waktu Kegiatan",modelValue:s(o).time,"onUpdate:modelValue":u[2]||(u[2]=p=>s(o).time=p),hint:"contoh: Pukul 19:30 WIB"},null,8,["modelValue"]),i(x,{density:"compact",label:"Tempat Kegiatan",modelValue:s(o).place,"onUpdate:modelValue":u[3]||(u[3]=p=>s(o).place=p)},null,8,["modelValue"]),i(x,{density:"compact",label:"Nama Organisasi",modelValue:s(o).organization,"onUpdate:modelValue":u[4]||(u[4]=p=>s(o).organization=p),hint:"contoh: PAC GP ANSOR ARGOMULYO"},null,8,["modelValue"]),i(U),Ot,i(x,{density:"compact",label:"Nama",modelValue:s(o).senderName,"onUpdate:modelValue":u[5]||(u[5]=p=>s(o).senderName=p)},null,8,["modelValue"]),i(x,{density:"compact",label:"Jabatan",modelValue:s(o).senderTitle,"onUpdate:modelValue":u[6]||(u[6]=p=>s(o).senderTitle=p)},null,8,["modelValue"]),bt,i(x,{density:"compact",label:"Nama",modelValue:s(o).supervisorName,"onUpdate:modelValue":u[7]||(u[7]=p=>s(o).supervisorName=p)},null,8,["modelValue"]),i(x,{density:"compact",label:"Jabatan",modelValue:s(o).supervisorTitle,"onUpdate:modelValue":u[8]||(u[8]=p=>s(o).supervisorTitle=p)},null,8,["modelValue"]),St,(D(!0),T(R,null,q(s(o).recipients,(p,G)=>(D(),F(x,{"onClick:append":K=>g(G),density:"compact",label:"Nama",modelValue:p.value,"onUpdate:modelValue":K=>p.value=K,"append-icon":G>0?"mdi-close":""},null,8,["onClick:append","modelValue","onUpdate:modelValue","append-icon"]))),256)),i(V,{onClick:v,flat:"",density:"compact"},{default:f(()=>[C("Tambah Penerima")]),_:1})]),_:1}),i(E,null,{default:f(()=>[i(V,{onClick:m,variant:"flat",color:"teal"},{default:f(()=>[C("Reset Data")]),_:1})]),_:1})]),_:1}),i(N,{modelValue:s(l).preview,"onUpdate:modelValue":u[10]||(u[10]=p=>s(l).preview=p),fullscreen:""},{default:f(()=>[i(d,null,{default:f(()=>[i(j,{density:"compact",title:"Preview",color:"teal"},{default:f(()=>[i(b),i(I,null,{default:f(()=>[i(V,{onClick:u[9]||(u[9]=p=>s(l).preview=!1),icon:"",variant:"text"},{default:f(()=>[i(P,null,{default:f(()=>[C("mdi-close")]),_:1})]),_:1})]),_:1})]),_:1}),i(W,null,{default:f(()=>[s(o).recipients.length<=3?(D(),F(h,{key:0,class:"mb-3"},{default:f(()=>[C(" Yth."),kt,r("ol",Pt,[(D(!0),T(R,null,q(s(o).recipients,p=>(D(),T("li",{style:{"list-style":"decimal"},textContent:k(p.value)},null,8,xt))),256))])]),_:1})):(D(),F(h,{key:1,class:"mb-3"},{default:f(()=>[C(" Yth."),Dt,Ct]),_:1})),Nt,r("p",{class:"my-2 text-justify",textContent:k(s(o).opening)},null,8,Vt),r("p",At,[C(" Sehubungan dengan akan diadakannya "),r("strong",{textContent:k(s(o).agenda)},null,8,It),C(" yang Insya Allah akan dilaksanakan pada: ")]),r("table",null,[r("tr",null,[$t,Et,r("td",Tt,k(new Date(s(o).date).toLocaleDateString("id-ID",{weekday:"long"})),1)]),r("tr",null,[Mt,Ft,r("td",jt,k(new Date(s(o).date).toLocaleDateString("id-ID",{month:"long",day:"2-digit",year:"numeric"})),1)]),r("tr",null,[Lt,Ut,r("td",{class:"px-1",textContent:k(s(o).time)},null,8,Wt)]),r("tr",null,[Rt,Yt,r("td",{class:"px-1",textContent:k(s(o).place)},null,8,Ht)])]),zt,r("p",{class:"text-justify",textContent:k(s(o).closing)},null,8,qt),Bt,i(h,null,{default:f(()=>[i(h,{class:"text-center my-2"},{default:f(()=>[r("h2",null,[r("strong",null,k(s(o).organization.toUpperCase()),1)])]),_:1}),i(h,{class:"d-flex justify-space-between"},{default:f(()=>[i(h,{class:"text-center"},{default:f(()=>[r("h3",{textContent:k(s(o).supervisorTitle)},null,8,Qt),r("h3",{class:"font-weight-bold",textContent:k(s(o).supervisorName)},null,8,Jt)]),_:1}),i(h,{class:"text-center"},{default:f(()=>[r("h3",{textContent:k(s(o).senderTitle)},null,8,Gt),r("h3",{class:"font-weight-bold",textContent:k(s(o).senderName)},null,8,Kt)]),_:1})]),_:1})]),_:1}),i(U,{class:"mt-3",color:"red",thickness:"4"}),s(o).recipients.length>3?(D(),F(h,{key:2,class:"mt-15"},{default:f(()=>[Xt,C(" Yth."),Zt,r("ol",en,[(D(!0),T(R,null,q(s(o).recipients,p=>(D(),T("li",{style:{"list-style":"decimal"},textContent:k(p.value)},null,8,tn))),256))])]),_:1})):X("",!0)]),_:1}),i(E,null,{default:f(()=>[i(b),i(V,{onClick:_,color:"teal",variant:"flat","prepend-icon":"mdi-content-copy"},{default:f(()=>[C("Salin Teks")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{an as default};
