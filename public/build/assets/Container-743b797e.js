import{aK as K,aI as N,c as i,w as t,aP as l,o as a,a as n,d as h,f as u,aN as v,F as c,aO as S,t as j,g as I,am as P}from"./app-a3a92be7.js";const T={__name:"Container",setup(E){const s=K(!1),m=N([{url:"/",title:"Beranda",icon:"mdi-home",value:"home",children:null},{url:"#",title:"Administrasi",icon:"mdi-file-document-multiple",value:"admin",children:[{url:"#",title:"Data Anggota",icon:"mdi-email",value:"member"},{url:"#",title:"Jadwal Kegiatan",icon:"mdi-email",value:"agenda"},{url:"#",title:"Dokumentasi Kegiatan",icon:"mdi-send",value:"documentation"},{url:"#",title:"Daftar Hadir",icon:"mdi-send",value:"attendance"},{url:"#",title:"Buku Tamu",icon:"mdi-send",value:"guest-book"},{url:"#",title:"Manajemen Surat",icon:"mdi-send",value:"letter"},{url:"#",title:"Buku Inventaris",icon:"mdi-send",value:"inventory"},{url:"#",title:"Akreditasi",icon:"mdi-send",value:"acreditation"},{url:"#",title:"Audit Kinerja",icon:"mdi-send",value:"audit"}]},{url:"#",title:"Tool",icon:"mdi-tools",value:"tool",children:[{url:"/tool/undangan-elektronik",title:"Undangan Elektronik",icon:"mdi-email",value:"invit"},{url:"/tool/whatsapp-sender",title:"Kirim Whatsapp",icon:"mdi-send",value:"whatsapp"},{url:"/waktu-sholat",title:"Jadwal Sholat",icon:"mdi-send",value:"prayer"}]},{url:"/register",title:"Daftar",icon:"mdi-account",value:"register",children:null}]);return(g,d)=>{const k=l("v-img"),p=l("v-sheet"),y=l("v-icon"),_=l("v-btn"),w=l("v-spacer"),r=l("v-list-item"),f=l("v-list"),b=l("v-menu"),x=l("v-toolbar-items"),C=l("v-toolbar"),A=l("v-divider"),B=l("v-list-group"),V=l("v-navigation-drawer"),D=l("v-app");return a(),i(D,null,{default:t(()=>[n(p,{class:"d-flex justify-center my-3"},{default:t(()=>[n(k,{"max-width":"320",src:"/assets/images/horizontal_logo.webp"})]),_:1}),n(p,{class:"my-2"},{default:t(()=>[n(C,{density:"compact",color:"teal"},{default:t(()=>[n(_,{class:"d-flex d-sm-none",onClick:d[0]||(d[0]=e=>s.value=!s.value),icon:""},{default:t(()=>[n(y,null,{default:t(()=>[h("mdi-menu")]),_:1})]),_:1}),n(w),n(x,{class:"d-none d-sm-flex"},{default:t(()=>[(a(!0),u(c,null,v(m,e=>(a(),i(_,{"append-icon":e.children===null?"":"mdi-chevron-down",href:e.children===null?e.url:"",value:e.value},{default:t(()=>[h(j(e.title)+" ",1),e.children!==null?(a(),i(b,{key:0,activator:"parent",location:"bottom"},{default:t(()=>[n(f,{density:"compact",nav:""},{default:t(()=>[(a(!0),u(c,null,v(e.children,o=>(a(),i(r,{href:o.url,title:o.title,value:o.value},null,8,["href","title","value"]))),256))]),_:2},1024)]),_:2},1024)):I("",!0)]),_:2},1032,["append-icon","href","value"]))),256))]),_:1})]),_:1}),n(V,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=e=>s.value=e),absolute:"",temporary:""},{default:t(()=>[n(r,{"prepend-avatar":"/assets/images/default-profile.webp",title:"GP. Ansor Argomulyo",subtitle:"ansorargomulyo@gmail.com"}),n(A,{class:"border-opacity-100"}),n(f,{density:"compact",nav:""},{default:t(()=>[(a(!0),u(c,null,v(m,e=>(a(),u(c,null,[e.children===null?(a(),i(r,{key:0,href:e.url,title:e.title,"prepend-icon":e.icon,value:e.value},null,8,["href","title","prepend-icon","value"])):(a(),i(B,{key:1,value:e.value},{activator:t(({props:o})=>[n(r,P({"prepend-icon":e.icon},o,{title:e.title}),null,16,["prepend-icon","title"])]),default:t(()=>[(a(!0),u(c,null,v(e.children,o=>(a(),i(r,{title:o.title,value:o.value,href:o.url},null,8,["title","value","href"]))),256))]),_:2},1032,["value"]))],64))),256))]),_:1})]),_:1},8,["modelValue"])]),_:1}),S(g.$slots,"content")]),_:3})}}},J=T;export{J as C};
