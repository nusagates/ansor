import{aK as m,aI as d,f as N,a as e,u as l,w as o,F as P,o as B,X as U,d as _,b as W,aP as t}from"./app-7f9f4178.js";import{_ as E}from"./Toast.vue_vue_type_script_setup_true_lang-b2d71c05.js";import{C as S}from"./Container-1e857ebb.js";const T=W("p",null,"Kamu bisa kirim pesan Whatsapp tanpa perlu menyimpan nomornya. Coba saja gunakan form di bawah ini.",-1),$={__name:"WhatsappSender",setup(j){const c=m(null),u=m("");let f=d({code:["+60","+61","+62"]}),a=d({code:"+62",phone:null,message:""});function v(){if(a.phone===null)c.value.show("Silahkan isi nomor telpon","red",2e3);else if(a.message===null)c.value.show("Silahkan isi pesan","red",2e3);else{let r="https://api.whatsapp.com/send/?phone=",n=a.code+a.phone,p=a.message.replace(/<p[^>]*>/g,"").replace(/<\/p>/g,"%0a").replace(/<ol>|<\/ol>/g,"").replace(/<li>|<\/li>/g,"").replace(/<strong>|<\/strong>/g,"*").replace(/<em>|<\/em>/g,"_").replace(/<s>|<\/s>/g,"~").replace(/%0a$/,"");r+=n.replace(/\D/g,""),r+="&text="+p,window.open(r)}}return(r,n)=>{const p=t("v-toolbar-title"),h=t("v-toolbar"),g=t("v-select"),i=t("v-sheet"),b=t("v-text-field"),w=t("QuillEditor"),k=t("v-card-text"),x=t("v-spacer"),y=t("v-btn"),V=t("v-card-actions"),C=t("v-card"),K=t("v-container");return B(),N(P,null,[e(l(U),{title:"Kirim Pesan Whatsapp Tanpa Menyimpan Nomor"}),e(S,null,{content:o(()=>[e(K,{fluid:""},{default:o(()=>[e(C,null,{default:o(()=>[e(h,{density:"compact",color:"teal"},{default:o(()=>[e(p,null,{default:o(()=>[_("Kirim Pesan Whatsapp")]),_:1})]),_:1}),e(k,null,{default:o(()=>[T,e(i,{class:"d-flex"},{default:o(()=>[e(i,{width:"80"},{default:o(()=>[e(g,{density:"compact",items:l(f).code,modelValue:l(a).code,"onUpdate:modelValue":n[0]||(n[0]=s=>l(a).code=s)},null,8,["items","modelValue"])]),_:1}),e(b,{type:"number",density:"compact",variant:"outlined",placeholder:"Nomor Tujuan",color:"teal",modelValue:l(a).phone,"onUpdate:modelValue":n[1]||(n[1]=s=>l(a).phone=s)},null,8,["modelValue"])]),_:1}),e(i,{height:"300",border:""},{default:o(()=>[e(w,{ref_key:"message",ref:u,toolbar:["bold","italic","strike"],placeholder:"Isi Pesan",theme:"bubble","content-type":"html",content:l(a).message,"onUpdate:content":n[2]||(n[2]=s=>l(a).message=s)},null,8,["content"])]),_:1})]),_:1}),e(V,null,{default:o(()=>[e(x),e(y,{ref:"sendBtn",onClick:v,color:"teal","prepend-icon":"mdi-whatsapp",variant:"flat"},{default:o(()=>[_("Kirim Pesan")]),_:1},512)]),_:1})]),_:1})]),_:1}),e(E,{ref_key:"msg",ref:c},null,512)]),_:1})],64)}}};export{$ as default};
