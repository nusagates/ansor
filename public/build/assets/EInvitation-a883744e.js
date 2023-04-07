import{aI as R,f as p,a,u as t,w as o,F as f,aP as i,o as r,X as K,d as u,c as v,g as S,aN as y,b as e,t as d}from"./app-75082450.js";import{a as M,b as E,c as F,u as G,d as J}from"./index-ca1a5c1d.js";const $=e("h4",null,"Pembuat Surat",-1),H=e("h4",null,"Supervisi/Mengetahui",-1),X=e("h4",null,"Penerima Undangan/ Yth.",-1),Q=e("br",null,null,-1),Z={class:"ml-9"},ee=["textContent"],te=e("br",null,null,-1),ae=e("u",null,"Daftar Terlampir",-1),ne=e("p",null,[e("em",null,"Assalamu alaikum Wr. Wb.")],-1),le=["textContent"],oe={class:"text-justify"},se=["textContent"],ie=e("td",{style:{width:"100px"}},"Hari",-1),de=e("td",null,":",-1),ue={class:"px-1"},re=e("td",null,"Tanggal",-1),ce=e("td",null,":",-1),me={class:"px-1"},pe=e("td",null,"Waktu",-1),_e=e("td",null,":",-1),ve=["textContent"],he=e("td",null,"Tempat",-1),fe=e("td",null,":",-1),ge=["textContent"],ye=e("p",{class:"my-2 text-justify"},"kami mengharap kehadirannya pada acara tersebut.",-1),ke=["textContent"],xe=e("p",{class:"mt-2"},[e("em",null,"Wallahul muafieq ila aqwamiettarieq"),e("br"),e("em",null,"Wassalamualaikum Wr. Wb.")],-1),be=["textContent"],Ve=["textContent"],Ce=["textContent"],Ne=["textContent"],Te=e("h3",null,"Lampiran Penerima Surat:",-1),we=e("br",null,null,-1),De={class:"ml-9"},Ue=["textContent"],je={__name:"EInvitation",setup(Pe){const W=M(),j=E(),k=F(j,"YYYY-MM-DD");let h=R({preview:!1}),n=G("invitation",{recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:k,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""});function Y(){h.preview=!0}function A(){n.value={recipients:[{value:null}],opening:"Puji syukur kami panjatkan kehadirat Allah SWT yang senantiasa melimpahkan rahmat, inayah, dan taufiq-Nya kepada kita semua.",closing:"Demikian undangan ini dibuat, atas perhatian dan kehadirannya diucapkan terimakasih.",date:k,time:"",place:"",agenda:"",senderName:"",senderTitle:"",supervisorName:"",supervisorTitle:"",organization:""}}J();function L(){n.value.recipients.push({value:null})}function I(x){n.value.recipients.splice(x,1)}function O(){}return(x,s)=>{const q=i("v-toolbar-title"),g=i("v-spacer"),_=i("v-btn"),b=i("v-toolbar-items"),V=i("v-toolbar"),z=i("v-alert"),c=i("v-text-field"),C=i("v-divider"),N=i("v-card-text"),T=i("v-icon"),w=i("v-card-actions"),D=i("v-card"),m=i("v-sheet"),B=i("v-dialog");return r(),p(f,null,[a(t(K),{title:"Undangan Digital"}),a(D,null,{default:o(()=>[a(V,{density:"compact",color:"teal"},{default:o(()=>[a(q,null,{default:o(()=>[u("Undangan Elektronik")]),_:1}),a(g),a(b,null,{default:o(()=>[a(_,{onClick:A,variant:"flat",color:"teal"},{default:o(()=>[u("Reset Data")]),_:1})]),_:1})]),_:1}),a(N,null,{default:o(()=>[t(W)?S("",!0):(r(),v(z,{key:0,color:"warning",class:"mb-3",density:"compact",icon:"mdi-access-point-off",text:"Sepertinya kamu sedang offline, ya"})),a(c,{density:"compact",label:"Nama Kegiatan",modelValue:t(n).agenda,"onUpdate:modelValue":s[0]||(s[0]=l=>t(n).agenda=l)},null,8,["modelValue"]),a(c,{density:"compact",label:"Tanggal Kegiatan",modelValue:t(n).date,"onUpdate:modelValue":s[1]||(s[1]=l=>t(n).date=l),type:"date"},null,8,["modelValue"]),a(c,{density:"compact",label:"Waktu Kegiatan",modelValue:t(n).time,"onUpdate:modelValue":s[2]||(s[2]=l=>t(n).time=l),hint:"contoh: Pukul 19:30 WIB"},null,8,["modelValue"]),a(c,{density:"compact",label:"Tempat Kegiatan",modelValue:t(n).place,"onUpdate:modelValue":s[3]||(s[3]=l=>t(n).place=l)},null,8,["modelValue"]),a(c,{density:"compact",label:"Nama Organisasi",modelValue:t(n).organization,"onUpdate:modelValue":s[4]||(s[4]=l=>t(n).organization=l),hint:"contoh: PAC GP ANSOR ARGOMULYO"},null,8,["modelValue"]),a(C),$,a(c,{density:"compact",label:"Nama",modelValue:t(n).senderName,"onUpdate:modelValue":s[5]||(s[5]=l=>t(n).senderName=l)},null,8,["modelValue"]),a(c,{density:"compact",label:"Jabatan",modelValue:t(n).senderTitle,"onUpdate:modelValue":s[6]||(s[6]=l=>t(n).senderTitle=l)},null,8,["modelValue"]),H,a(c,{density:"compact",label:"Nama",modelValue:t(n).supervisorName,"onUpdate:modelValue":s[7]||(s[7]=l=>t(n).supervisorName=l)},null,8,["modelValue"]),a(c,{density:"compact",label:"Jabatan",modelValue:t(n).supervisorTitle,"onUpdate:modelValue":s[8]||(s[8]=l=>t(n).supervisorTitle=l)},null,8,["modelValue"]),X,(r(!0),p(f,null,y(t(n).recipients,(l,U)=>(r(),v(c,{"onClick:append":P=>I(U),density:"compact",label:"Nama",modelValue:l.value,"onUpdate:modelValue":P=>l.value=P,"append-icon":U>0?"mdi-close":""},null,8,["onClick:append","modelValue","onUpdate:modelValue","append-icon"]))),256)),a(_,{onClick:L,variant:"outlined",density:"compact","prepend-icon":"mdi-plus"},{default:o(()=>[u("Tambah Penerima")]),_:1})]),_:1}),a(w,null,{default:o(()=>[a(_,{onClick:Y,variant:"flat",color:"teal"},{default:o(()=>[a(T,null,{default:o(()=>[u("mdi-eye")]),_:1}),u(" Preview ")]),_:1})]),_:1})]),_:1}),a(B,{modelValue:t(h).preview,"onUpdate:modelValue":s[10]||(s[10]=l=>t(h).preview=l),fullscreen:""},{default:o(()=>[a(D,null,{default:o(()=>[a(V,{density:"compact",title:"Preview",color:"teal"},{default:o(()=>[a(g),a(b,null,{default:o(()=>[a(_,{onClick:s[9]||(s[9]=l=>t(h).preview=!1),icon:"",variant:"text"},{default:o(()=>[a(T,null,{default:o(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1})]),_:1}),a(N,null,{default:o(()=>[t(n).recipients.length<=3?(r(),v(m,{key:0,class:"mb-3"},{default:o(()=>[u(" Yth."),Q,e("ol",Z,[(r(!0),p(f,null,y(t(n).recipients,l=>(r(),p("li",{style:{"list-style":"decimal"},textContent:d(l.value)},null,8,ee))),256))])]),_:1})):(r(),v(m,{key:1,class:"mb-3"},{default:o(()=>[u(" Yth."),te,ae]),_:1})),ne,e("p",{class:"my-2 text-justify",textContent:d(t(n).opening)},null,8,le),e("p",oe,[u(" Sehubungan dengan akan diadakannya "),e("strong",{textContent:d(t(n).agenda)},null,8,se),u(" yang Insya Allah akan dilaksanakan pada: ")]),e("table",null,[e("tr",null,[ie,de,e("td",ue,d(new Date(t(n).date).toLocaleDateString("id-ID",{weekday:"long"})),1)]),e("tr",null,[re,ce,e("td",me,d(new Date(t(n).date).toLocaleDateString("id-ID",{month:"long",day:"2-digit",year:"numeric"})),1)]),e("tr",null,[pe,_e,e("td",{class:"px-1",textContent:d(t(n).time)},null,8,ve)]),e("tr",null,[he,fe,e("td",{class:"px-1",textContent:d(t(n).place)},null,8,ge)])]),ye,e("p",{class:"text-justify",textContent:d(t(n).closing)},null,8,ke),xe,a(m,null,{default:o(()=>[a(m,{class:"text-center my-2"},{default:o(()=>[e("h2",null,[e("strong",null,d(t(n).organization.toUpperCase()),1)])]),_:1}),a(m,{class:"d-flex justify-space-between"},{default:o(()=>[a(m,{class:"text-center"},{default:o(()=>[e("h3",{textContent:d(t(n).supervisorTitle)},null,8,be),e("h3",{class:"font-weight-bold",textContent:d(t(n).supervisorName)},null,8,Ve)]),_:1}),a(m,{class:"text-center"},{default:o(()=>[e("h3",{textContent:d(t(n).senderTitle)},null,8,Ce),e("h3",{class:"font-weight-bold",textContent:d(t(n).senderName)},null,8,Ne)]),_:1})]),_:1})]),_:1}),a(C,{class:"mt-3",color:"red",thickness:"4"}),t(n).recipients.length>3?(r(),v(m,{key:2,class:"mt-15"},{default:o(()=>[Te,u(" Yth."),we,e("ol",De,[(r(!0),p(f,null,y(t(n).recipients,l=>(r(),p("li",{style:{"list-style":"decimal"},textContent:d(l.value)},null,8,Ue))),256))])]),_:1})):S("",!0)]),_:1}),a(w,null,{default:o(()=>[a(g),a(_,{onClick:O,color:"teal",variant:"flat","prepend-icon":"mdi-content-copy"},{default:o(()=>[u("Salin Teks")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{je as default};