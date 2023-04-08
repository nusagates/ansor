import{aI as R,f as p,a as t,u as a,w as l,F as f,o as r,X as K,d as u,c as v,g as S,aN as y,b as e,t as i,aP as d}from"./app-a3a92be7.js";import{a as M,b as E,c as F,u as G,d as J}from"./index-8101a7e7.js";import{C as $}from"./Container-743b797e.js";const H=e("h4",null,"Pembuat Surat",-1),X=e("h4",null,"Supervisi/Mengetahui",-1),Q=e("h4",null,"Penerima Undangan/ Yth.",-1),Z=e("br",null,null,-1),ee={class:"ml-9"},te=["textContent"],ae=e("br",null,null,-1),ne=e("u",null,"Daftar Terlampir",-1),le=e("p",null,[e("em",null,"Assalamu alaikum Wr. Wb.")],-1),oe=["textContent"],se={class:"text-justify"},ie=["textContent"],de=e("td",{style:{width:"100px"}},"Hari",-1),ue=e("td",null,":",-1),re={class:"px-1"},ce=e("td",null,"Tanggal",-1),me=e("td",null,":",-1),pe={class:"px-1"},_e=e("td",null,"Waktu",-1),ve=e("td",null,":",-1),he=["textContent"],fe=e("td",null,"Tempat",-1),ge=e("td",null,":",-1),ye=["textContent"],ke=e("p",{class:"my-2 text-justify"},"kami mengharap kehadirannya pada acara tersebut.",-1),xe=["textContent"],be=e("p",{class:"mt-2"},[e("em",null,"Wallahul muafieq ila aqwamiettarieq"),e("br"),e("em",null,"Wassalamualaikum Wr. Wb.")],-1),Ve=["textContent"],Ce=["textContent"],Ne=["textContent"],Te=["textContent"],we=e("h3",null,"Lampiran Penerima Surat:",-1),De=e("br",null,null,-1),Ue={class:"ml-9"},Pe=["textContent"],Ae={__name:"EInvitation",setup(Se){const W=M(),j=E(),k=F(j,"YYYY-MM-DD");let h=R({preview:!1}),n=G("invitation",{recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:k,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""});function Y(){h.preview=!0}function A(){n.value={recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:k,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""}}J();function L(){n.value.recipients.push({value:null})}function I(x){n.value.recipients.splice(x,1)}function O(){}return(x,s)=>{const q=d("v-toolbar-title"),g=d("v-spacer"),_=d("v-btn"),b=d("v-toolbar-items"),V=d("v-toolbar"),z=d("v-alert"),c=d("v-text-field"),C=d("v-divider"),N=d("v-card-text"),T=d("v-icon"),w=d("v-card-actions"),D=d("v-card"),m=d("v-sheet"),B=d("v-dialog");return r(),p(f,null,[t(a(K),{title:"Undangan Digital"}),t($,null,{content:l(()=>[t(D,null,{default:l(()=>[t(V,{density:"compact",color:"teal"},{default:l(()=>[t(q,null,{default:l(()=>[u("Undangan Elektronik")]),_:1}),t(g),t(b,null,{default:l(()=>[t(_,{onClick:A,variant:"flat",color:"teal"},{default:l(()=>[u("Reset Data")]),_:1})]),_:1})]),_:1}),t(N,null,{default:l(()=>[a(W)?S("",!0):(r(),v(z,{key:0,color:"warning",class:"mb-3",density:"compact",icon:"mdi-access-point-off",text:"Sepertinya kamu sedang offline, ya"})),t(c,{density:"compact",label:"Nama Kegiatan",modelValue:a(n).agenda,"onUpdate:modelValue":s[0]||(s[0]=o=>a(n).agenda=o)},null,8,["modelValue"]),t(c,{density:"compact",label:"Tanggal Kegiatan",modelValue:a(n).date,"onUpdate:modelValue":s[1]||(s[1]=o=>a(n).date=o),type:"date"},null,8,["modelValue"]),t(c,{density:"compact",label:"Waktu Kegiatan",modelValue:a(n).time,"onUpdate:modelValue":s[2]||(s[2]=o=>a(n).time=o),hint:"contoh: Pukul 19:30 WIB"},null,8,["modelValue"]),t(c,{density:"compact",label:"Tempat Kegiatan",modelValue:a(n).place,"onUpdate:modelValue":s[3]||(s[3]=o=>a(n).place=o)},null,8,["modelValue"]),t(c,{density:"compact",label:"Nama Organisasi",modelValue:a(n).organization,"onUpdate:modelValue":s[4]||(s[4]=o=>a(n).organization=o),hint:"contoh: PAC GP ANSOR ARGOMULYO"},null,8,["modelValue"]),t(C),H,t(c,{density:"compact",label:"Nama",modelValue:a(n).senderName,"onUpdate:modelValue":s[5]||(s[5]=o=>a(n).senderName=o)},null,8,["modelValue"]),t(c,{density:"compact",label:"Jabatan",modelValue:a(n).senderTitle,"onUpdate:modelValue":s[6]||(s[6]=o=>a(n).senderTitle=o)},null,8,["modelValue"]),X,t(c,{density:"compact",label:"Nama",modelValue:a(n).supervisorName,"onUpdate:modelValue":s[7]||(s[7]=o=>a(n).supervisorName=o)},null,8,["modelValue"]),t(c,{density:"compact",label:"Jabatan",modelValue:a(n).supervisorTitle,"onUpdate:modelValue":s[8]||(s[8]=o=>a(n).supervisorTitle=o)},null,8,["modelValue"]),Q,(r(!0),p(f,null,y(a(n).recipients,(o,U)=>(r(),v(c,{"onClick:append":P=>I(U),density:"compact",label:"Nama",modelValue:o.value,"onUpdate:modelValue":P=>o.value=P,"append-icon":U>0?"mdi-close":""},null,8,["onClick:append","modelValue","onUpdate:modelValue","append-icon"]))),256)),t(_,{onClick:L,variant:"outlined",density:"compact","prepend-icon":"mdi-plus"},{default:l(()=>[u("Tambah Penerima")]),_:1})]),_:1}),t(w,null,{default:l(()=>[t(_,{onClick:Y,variant:"flat",color:"teal"},{default:l(()=>[t(T,null,{default:l(()=>[u("mdi-eye")]),_:1}),u(" Preview ")]),_:1})]),_:1})]),_:1}),t(B,{modelValue:a(h).preview,"onUpdate:modelValue":s[10]||(s[10]=o=>a(h).preview=o),fullscreen:""},{default:l(()=>[t(D,null,{default:l(()=>[t(V,{density:"compact",title:"Preview",color:"teal"},{default:l(()=>[t(g),t(b,null,{default:l(()=>[t(_,{onClick:s[9]||(s[9]=o=>a(h).preview=!1),icon:"",variant:"text"},{default:l(()=>[t(T,null,{default:l(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1})]),_:1}),t(N,null,{default:l(()=>[a(n).recipients.length<=3?(r(),v(m,{key:0,class:"mb-3"},{default:l(()=>[u(" Yth."),Z,e("ol",ee,[(r(!0),p(f,null,y(a(n).recipients,o=>(r(),p("li",{style:{"list-style":"decimal"},textContent:i(o.value)},null,8,te))),256))])]),_:1})):(r(),v(m,{key:1,class:"mb-3"},{default:l(()=>[u(" Yth."),ae,ne]),_:1})),le,e("p",{class:"my-2 text-justify",textContent:i(a(n).opening)},null,8,oe),e("p",se,[u(" Sehubungan dengan akan diadakannya "),e("strong",{textContent:i(a(n).agenda)},null,8,ie),u(" yang Insya Allah akan dilaksanakan pada: ")]),e("table",null,[e("tr",null,[de,ue,e("td",re,i(new Date(a(n).date).toLocaleDateString("id-ID",{weekday:"long"})),1)]),e("tr",null,[ce,me,e("td",pe,i(new Date(a(n).date).toLocaleDateString("id-ID",{month:"long",day:"2-digit",year:"numeric"})),1)]),e("tr",null,[_e,ve,e("td",{class:"px-1",textContent:i(a(n).time)},null,8,he)]),e("tr",null,[fe,ge,e("td",{class:"px-1",textContent:i(a(n).place)},null,8,ye)])]),ke,e("p",{class:"text-justify",textContent:i(a(n).closing)},null,8,xe),be,t(m,null,{default:l(()=>[t(m,{class:"text-center my-2"},{default:l(()=>[e("h2",null,[e("strong",null,i(a(n).organization.toUpperCase()),1)])]),_:1}),t(m,{class:"d-flex justify-space-between"},{default:l(()=>[t(m,{class:"text-center"},{default:l(()=>[e("h3",{textContent:i(a(n).supervisorTitle)},null,8,Ve),e("h3",{class:"font-weight-bold",textContent:i(a(n).supervisorName)},null,8,Ce)]),_:1}),t(m,{class:"text-center"},{default:l(()=>[e("h3",{textContent:i(a(n).senderTitle)},null,8,Ne),e("h3",{class:"font-weight-bold",textContent:i(a(n).senderName)},null,8,Te)]),_:1})]),_:1})]),_:1}),t(C,{class:"mt-3",color:"red",thickness:"4"}),a(n).recipients.length>3?(r(),v(m,{key:2,class:"mt-15"},{default:l(()=>[we,u(" Yth."),De,e("ol",Ue,[(r(!0),p(f,null,y(a(n).recipients,o=>(r(),p("li",{style:{"list-style":"decimal"},textContent:i(o.value)},null,8,Pe))),256))])]),_:1})):S("",!0)]),_:1}),t(w,null,{default:l(()=>[t(g),t(_,{onClick:O,color:"teal",variant:"flat","prepend-icon":"mdi-content-copy"},{default:l(()=>[u("Salin Teks")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};export{Ae as default};
