import{p as N,q as d,f as C,a as e,u as l,w as n,F as K,x as a,o as P,X as U,d as i,b as W}from"./app-8bf8de30.js";const T=W("p",null,"Kamu bisa kirim pesan Whatsapp tanpa perlu menyimpan nomornya. Coba saja gunakan form di bawah ini.",-1),q={__name:"WhatsappSender",setup(j){const m=N(null);let _=d({code:[60,61,62]}),t=d({code:62,phone:null,message:null});function u(){if(t.phone===null)alert("silahkan isi nomor telpon");else if(t.message===null)alert("silahkan isi pesan");else{let c="https://api.whatsapp.com/send/?phone=",o=t.code+t.phone;console.log(o);let p=t.message;c+=o.replace(/\D/g,""),c+="&text="+p,window.open(c)}}return(c,o)=>{const p=a("v-toolbar-title"),v=a("v-toolbar"),f=a("v-select"),r=a("v-responsive"),h=a("v-text-field"),b=a("v-sheet"),x=a("v-textarea"),V=a("v-card-text"),g=a("v-spacer"),k=a("v-btn"),w=a("v-card-actions"),y=a("v-card"),B=a("v-container");return P(),C(K,null,[e(l(U),{title:"Kirim Pesan Whatsapp Tanpa Menyimpan Nomor"}),e(B,{fluid:""},{default:n(()=>[e(y,null,{default:n(()=>[e(v,{density:"compact",color:"teal"},{default:n(()=>[e(p,null,{default:n(()=>[i("Kirim Pesan Whatsapp")]),_:1})]),_:1}),e(V,null,{default:n(()=>[T,e(b,{class:"d-flex"},{default:n(()=>[e(r,{width:"80"},{default:n(()=>[e(f,{prefix:"+",density:"compact",items:l(_).code,modelValue:l(t).code,"onUpdate:modelValue":o[0]||(o[0]=s=>l(t).code=s)},null,8,["items","modelValue"])]),_:1}),e(r,null,{default:n(()=>[e(h,{density:"compact",label:"Nomor Tujuan",color:"teal",modelValue:l(t).phone,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).phone=s),hint:"gunakan format internasioal misal: 6282225005825 atau 608767867",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{density:"compact",label:"Isi Pesan",color:"teal",modelValue:l(t).message,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).message=s),clearable:""},null,8,["modelValue"])]),_:1}),e(w,null,{default:n(()=>[e(g),e(k,{ref_key:"sendBtn",ref:m,onClick:u,color:"teal","prepend-icon":"mdi-whatsapp",variant:"flat"},{default:n(()=>[i("Kirim Pesan")]),_:1},512)]),_:1})]),_:1})]),_:1})],64)}}};export{q as default};