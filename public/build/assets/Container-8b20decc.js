import{f as D,o as n,A as i,aZ as _,u as r,z as f,F as d,bw as W,g as H,a as e,w as t,r as u,d as a,b as K,aK as x,c as m,aL as Y,bx as Z,an as q,a3 as O}from"./app-38f30f46.js";import{_ as Q}from"./Toast.vue_vue_type_script_setup_true_lang-31044596.js";const X={key:0},ee={key:1},b={__name:"DigitalClock",props:["type"],setup(C){let o=D(new Date);return setInterval(()=>{o.value=new Date},1e3),(V,h)=>(n(),i(d,null,[C.type==="time"?(n(),i("span",X,_(r(o).getHours()<10?"0"+r(o).getHours():r(o).getHours())+":"+_(r(o).getMinutes()<10?"0"+r(o).getMinutes():r(o).getMinutes()),1)):f("",!0),C.type==="date"?(n(),i("span",ee,_(r(o).toLocaleString("id-ID",{weekday:"long"}))+", "+_(r(o).getDate())+" "+_(r(o).toLocaleString("id-ID",{month:"long"}))+" "+_(r(o).getFullYear()),1)):f("",!0)],64))}},te={class:"d-none d-sm-flex"},le={class:"d-none d-sm-flex align-center"},ae={class:"d-flex d-sm-none mx-2"},ne={__name:"Container",setup(C){const o=W().props.auth.user,V=D(),h=H({logout:!1}),k=D(!1),y=D(!1),$=H([{url:"/",title:"Beranda",icon:"mdi-home",value:"home",children:null,show:!0},{url:"#",title:"Administrasi",icon:"mdi-file-document-multiple",value:"admin",children:[{url:"#",title:"Data Anggota",icon:"mdi-email",value:"member"},{url:"#",title:"Jadwal Kegiatan",icon:"mdi-email",value:"agenda"},{url:"#",title:"Dokumentasi Kegiatan",icon:"mdi-send",value:"documentation"},{url:"#",title:"Daftar Hadir",icon:"mdi-send",value:"attendance"},{url:"#",title:"Buku Tamu",icon:"mdi-send",value:"guest-book"},{url:"#",title:"Manajemen Surat",icon:"mdi-send",value:"letter"},{url:"#",title:"Buku Inventaris",icon:"mdi-send",value:"inventory"},{url:"#",title:"Akreditasi",icon:"mdi-send",value:"acreditation"},{url:"#",title:"Audit Kinerja",icon:"mdi-send",value:"audit"}],show:o!==null},{url:"#",title:"Tool",icon:"mdi-tools",value:"tool",children:[{url:"/tool/undangan-elektronik",title:"Undangan Elektronik",icon:"mdi-email",value:"invit"},{url:"/tool/whatsapp-sender",title:"Kirim Whatsapp",icon:"mdi-send",value:"whatsapp"},{url:"/waktu-sholat",title:"Jadwal Sholat",icon:"mdi-send",value:"prayer"}],show:!0}]),L=()=>{h.logout=!0,Z.post(route("logout")).then(A=>{h.logout=!1,V.value.show("Berhasil keluar dari aplikasi","success",2e3),setTimeout(()=>{location.href="/"},2e3)})};return(A,s)=>{const M=u("v-img"),w=u("v-sheet"),p=u("v-icon"),g=u("v-btn"),c=u("v-list-item"),B=u("v-list"),S=u("v-menu"),I=u("v-spacer"),N=u("v-avatar"),P=u("v-toolbar"),T=u("v-divider"),j=u("v-list-group"),z=u("v-navigation-drawer"),F=u("v-app"),J=u("v-card-title"),U=u("v-card-text"),E=u("v-card-actions"),G=u("v-card"),R=u("v-dialog");return n(),i(d,null,[e(F,null,{default:t(()=>[e(w,{class:"d-flex justify-center my-3"},{default:t(()=>[e(M,{"max-width":"320",src:"/assets/images/horizontal_logo.webp"})]),_:1}),e(w,{class:"my-2"},{default:t(()=>[e(P,{density:"compact",color:"teal"},{default:t(()=>[e(g,{class:"d-flex d-sm-none",onClick:s[0]||(s[0]=l=>y.value=!y.value),icon:""},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-menu")]),_:1})]),_:1}),K("template",te,[(n(!0),i(d,null,x($,l=>(n(),i(d,null,[l.show?(n(),m(g,{key:0,"append-icon":l.children===null?"":"mdi-chevron-down",href:l.children===null?l.url:"",value:l.value},{default:t(()=>[a(_(l.title)+" ",1),l.children!==null?(n(),m(S,{key:0,activator:"parent",location:"bottom"},{default:t(()=>[e(B,{density:"compact",nav:""},{default:t(()=>[(n(!0),i(d,null,x(l.children,v=>(n(),m(c,{href:v.url,title:v.title,value:v.value},null,8,["href","title","value"]))),256))]),_:2},1024)]),_:2},1024)):f("",!0)]),_:2},1032,["append-icon","href","value"])):f("",!0)],64))),256))]),e(I),K("template",le,[e(w,{height:"25",class:"text-center px-1",rounded:""},{default:t(()=>[e(b,{type:"date"}),a("  "),e(b,{type:"time"})]),_:1}),r(o)===null?(n(),i(d,{key:0},[e(g,{href:"/register","prepend-icon":"mdi-account",value:"register"},{default:t(()=>[a("Daftar")]),_:1}),e(g,{href:"/login","prepend-icon":"mdi-login",value:"login"},{default:t(()=>[a("Masuk")]),_:1})],64)):f("",!0)]),r(o)!==null?(n(),m(N,{key:0,class:"mx-2 d-none d-sm-flex"},{default:t(()=>[e(M,{src:r(o).meta.images.profile},null,8,["src"]),e(S,{activator:"parent",location:"bottom"},{default:t(()=>[e(B,{density:"compact",nav:""},{default:t(()=>[e(c,{href:"/profile",value:"profile"},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-account")]),_:1}),a(" Profil ")]),_:1}),e(c,{onClick:s[1]||(s[1]=l=>k.value=!0),class:"text-red",value:"logout"},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-logout")]),_:1}),a(" Keluar ")]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0),K("template",ae,[e(w,{class:"text-center px-1",rounded:""},{default:t(()=>[e(b,{type:"date"}),a("  "),e(b,{type:"time"})]),_:1})])]),_:1}),e(z,{modelValue:y.value,"onUpdate:modelValue":s[3]||(s[3]=l=>y.value=l),absolute:"",temporary:""},{default:t(()=>[r(o)===null?(n(),m(c,{key:0,"prepend-avatar":"/assets/images/default-profile.webp",title:"GP. Ansor Argomulyo",subtitle:"ansorargomulyo@gmail.com"})):(n(),m(c,{key:1,href:"/profile","prepend-avatar":r(o).meta.images.profile,title:r(o).name,subtitle:r(o).email},null,8,["prepend-avatar","title","subtitle"])),e(T,{class:"border-opacity-100"}),e(B,{density:"compact",nav:""},{default:t(()=>[(n(!0),i(d,null,x($,l=>(n(),i(d,null,[l.children===null?(n(),i(d,{key:0},[l.show?(n(),m(c,{key:0,href:l.url,value:l.value},{default:t(()=>[e(p,null,{default:t(()=>[a(_(l.icon),1)]),_:2},1024),a(" "+_(l.title),1)]),_:2},1032,["href","value"])):f("",!0)],64)):(n(),i(d,{key:1},[l.show?(n(),m(j,{key:0,value:l.value},{activator:t(({props:v})=>[e(c,q(O(v)),{default:t(()=>[e(p,null,{default:t(()=>[a(_(l.icon),1)]),_:2},1024),a(" "+_(l.title),1)]),_:2},1040)]),default:t(()=>[(n(!0),i(d,null,x(l.children,v=>(n(),m(c,{title:v.title,value:v.value,href:v.url},null,8,["title","value","href"]))),256))]),_:2},1032,["value"])):f("",!0)],64))],64))),256)),r(o)===null?(n(),i(d,{key:0},[e(c,{href:"/register",value:"register"},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-account")]),_:1}),a(" Daftar ")]),_:1}),e(c,{href:"/login",value:"login"},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-login")]),_:1}),a(" Masuk ")]),_:1})],64)):(n(),m(c,{key:1,onClick:s[2]||(s[2]=l=>k.value=!0),class:"text-red",value:"logout"},{default:t(()=>[e(p,null,{default:t(()=>[a("mdi-logout")]),_:1}),a(" Keluar ")]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1}),Y(A.$slots,"content")]),_:3}),e(R,{width:"300",modelValue:k.value,"onUpdate:modelValue":s[5]||(s[5]=l=>k.value=l)},{default:t(()=>[e(G,null,{default:t(()=>[e(J,null,{default:t(()=>[a("Konfirmasi")]),_:1}),e(U,null,{default:t(()=>[a(" Apakah kamu yakin ingin keluar dari aplikasi? ")]),_:1}),e(E,null,{default:t(()=>[e(g,{onClick:s[4]||(s[4]=l=>k.value=!1)},{default:t(()=>[a("Batal")]),_:1}),e(I),e(g,{color:"warning","prepend-icon":"mdi-logout",disabled:h.logout,loading:h.logout,variant:"flat",onClick:L},{default:t(()=>[a("Keluar")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Q,{ref_key:"msg",ref:V},null,512)],64)}}},re=ne;export{re as C,b as _};
