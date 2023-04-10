import{i as F,t as p,u as C,r as c,l as Y,p as G,o as v,c as h,k as w,J as Z,x as ee,f as J,g as $,j as K,a as e,w as t,F as S,X as te,d as u,m as ae,b as z}from"./app-279fab49.js";import{C as ne}from"./Container-d9fea821.js";import{_ as le}from"./Toast.vue_vue_type_script_setup_true_lang-c8811a3a.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";const de={__name:"DateFormat",props:["date"],setup(m){const d=m,i=F(()=>{const s=/^\d{4}-\d{2}-\d{2}$/;let l;if(s.test(d.date)){const a=new Date(d.date);l=a.toLocaleString("id-ID",{weekday:"long"}),l+=", "+a.getDate(),l+=" "+a.toLocaleString("id-ID",{month:"long"}),l+=" "+a.getFullYear()}else l=d.date;return l});return(s,l)=>p(C(i))}},L={__name:"TimeFormat",props:["time"],setup(m){const d=m,i=F(()=>{const s=/^\d{2}:\d{2}:\d{2}$/;let l;if(s.test(d.time)){const a=new Date(`2023-04-10 ${d.time}`);l=a.getHours()+":"+a.getMinutes()}else l=d.time;return l});return(s,l)=>p(C(i))}},se={name:"Pagination",props:{data:{type:Object,default:()=>null},method:{type:Function},totalVisible:{type:String,default:()=>{}}},methods:{getData(m){this.$emit("pagination-change-page",m)}}};function ie(m,d,i,s,l,a){const D=c("v-pagination");return i.data!=null?Y((v(),h(D,{key:0,density:"compact",color:"teal",modelValue:i.data.current_page,"onUpdate:modelValue":[d[0]||(d[0]=x=>i.data.current_page=x),d[1]||(d[1]=x=>i.method(i.data.current_page))],length:i.data.last_page,"total-visible":i.totalVisible,rounded:"circle"},null,8,["modelValue","length","total-visible"])),[[G,i.data.last_page>1]]):w("",!0)}const ue=oe(se,[["render",ie]]),T={__name:"Auth",props:["can"],setup(m){const d=m,i=Z().props.auth.user,s=F(()=>i!==null&&i.access.includes(d.can));return(l,a)=>C(s)?ee(l.$slots,"default",{key:0}):w("",!0)}};const ce=z("h3",null,"Jadwal Kegiatan",-1),re=["textContent"],me=["textContent"],ge={__name:"Event",setup(m){const d=J(),i=J(null),s=$({event:{create:!1,delete:!1}}),l=$({event:{get:!1,store:!1,update:!1,delete:!1}}),a=$({event:{id:null,name:null,activity_date:null,started_at:null,finished_at:null,venue:null,organizer:null,is_public:!0,notes:null}}),D=()=>{a.event={id:null,name:null,activity_date:null,started_at:null,finished_at:null,venue:null,organizer:null,is_public:!0,notes:null},s.event.create=!0},x=()=>{l.event.store=!0,axios.post("/event",a.event).then(r=>{r.data.code===200?(d.value.show(r.data.message,"success"),s.event.create=!1,b()):d.value.show(r.data.message,"red")}).finally(()=>{l.event.store=!1})},A=()=>{l.event.update=!0,axios.patch(`/event/${a.event.id}`,a.event).then(r=>{r.data.code===200?(d.value.show(r.data.message,"success"),s.event.create=!1,b()):d.value.show(r.data.message,"red")}).finally(()=>{l.event.update=!1})},b=(r=1)=>{l.event.get=!0,axios.get(`/event?page=${r}`).then(o=>{l.event.get=!1,i.value=o.data.data})},H=r=>{a.event=r,s.event.create=!0},I=()=>{l.event.delete=!0,axios.delete(`/event/${a.event.id}`).then(r=>{r.data.code===200?(d.value.show(r.data.message,"success"),s.event.delete=!1,b()):d.value.show(r.data.message,"red")}).finally(()=>{l.event.delete=!1})};return b(),(r,o)=>{const f=c("v-icon"),_=c("v-btn"),g=c("v-sheet"),M=c("v-divider"),V=c("v-list-item"),Q=c("v-timeline-item"),W=c("v-timeline"),E=c("v-card-text"),U=c("v-card"),N=c("v-toolbar-title"),k=c("v-spacer"),P=c("v-toolbar"),y=c("v-text-field"),q=c("QuillEditor"),O=c("v-checkbox"),j=c("v-card-actions"),B=c("v-dialog");return v(),K(S,null,[e(C(te),{title:"Jadwal Kegiatan"}),e(ne,null,{content:t(()=>[e(U,{flat:""},{title:t(()=>[e(g,{class:"d-flex justify-space-between"},{default:t(()=>[ce,e(T,{can:"Read Event"},{default:t(()=>[e(_,{onClick:D,variant:"text"},{default:t(()=>[e(f,null,{default:t(()=>[u("mdi-plus")]),_:1}),u(" Tambah ")]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(M,{class:"border-opacity-100"}),e(E,null,{default:t(()=>[e(W,{density:"compact",align:"start","truncate-line":"start"},{default:t(()=>[i.value!==null?(v(!0),K(S,{key:0},ae(i.value.data,(n,R)=>(v(),h(Q,{"dot-color":R%2===0?"teal":"amber",size:"x-small"},{default:t(()=>[e(g,null,{default:t(()=>[z("h2",{class:"text-overline",textContent:p(n.name)},null,8,re),e(g,{style:{"margin-left":"-20px"}},{default:t(()=>[e(V,{density:"compact","prepend-icon":"mdi-account",class:"text-body-2"},{default:t(()=>[u(p(n.organizer),1)]),_:2},1024),e(V,{density:"compact","prepend-icon":"mdi-calendar",class:"text-body-2"},{default:t(()=>[e(de,{date:n.activity_date},null,8,["date"]),u("   "),e(f,null,{default:t(()=>[u("mdi-clock-outline")]),_:1}),e(L,{time:n.started_at},null,8,["time"]),n.finished_at!==null?(v(),K(S,{key:0},[u(" - "),e(L,{time:n.finished_at},null,8,["time"])],64)):w("",!0)]),_:2},1024),e(V,{density:"compact","prepend-icon":"mdi-map-marker",class:"text-body-2"},{default:t(()=>[u(p(n.venue),1)]),_:2},1024),e(V,{density:"compact","prepend-icon":"mdi-bullhorn",class:"text-body-2"},{default:t(()=>[u(p(n.is_public?"untuk Umum":"Kalangan Terbatas"),1)]),_:2},1024),e(g,{class:"ml-8"},{default:t(()=>[e(T,{can:"Update Event"},{default:t(()=>[e(_,{onClick:X=>H(n),density:"compact",variant:"text",icon:""},{default:t(()=>[e(f,null,{default:t(()=>[u("mdi-square-edit-outline")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(T,{can:"Delete Event"},{default:t(()=>[e(_,{onClick:X=>{a.event=n,s.event.delete=!0},density:"compact",variant:"text",icon:""},{default:t(()=>[e(f,null,{default:t(()=>[u("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["dot-color"]))),256)):w("",!0)]),_:1}),e(g,{class:"d-flex justify-center"},{default:t(()=>[e(ue,{data:i.value,method:b,"total-visible":"0"},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1}),e(B,{modelValue:s.event.create,"onUpdate:modelValue":o[9]||(o[9]=n=>s.event.create=n),fullscreen:""},{default:t(()=>[e(U,null,{default:t(()=>[e(P,{density:"compact",color:"teal"},{default:t(()=>[e(N,null,{default:t(()=>[u("Tambah Kegiatan")]),_:1}),e(k),e(_,{onClick:o[0]||(o[0]=n=>s.event.create=!1),icon:""},{default:t(()=>[e(f,null,{default:t(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(y,{density:"compact",label:"Nama Kegiatan",modelValue:a.event.name,"onUpdate:modelValue":o[1]||(o[1]=n=>a.event.name=n)},null,8,["modelValue"]),e(y,{density:"compact",label:"Tanggal Kegiatan",modelValue:a.event.activity_date,"onUpdate:modelValue":o[2]||(o[2]=n=>a.event.activity_date=n),type:"date"},null,8,["modelValue"]),e(y,{density:"compact",label:"Waktu Mulai",modelValue:a.event.started_at,"onUpdate:modelValue":o[3]||(o[3]=n=>a.event.started_at=n),type:"time"},null,8,["modelValue"]),e(y,{density:"compact",label:"Waktu Selesai",modelValue:a.event.finished_at,"onUpdate:modelValue":o[4]||(o[4]=n=>a.event.finished_at=n),type:"time"},null,8,["modelValue"]),e(y,{density:"compact",label:"Tempat Kegiatan",modelValue:a.event.venue,"onUpdate:modelValue":o[5]||(o[5]=n=>a.event.venue=n)},null,8,["modelValue"]),e(y,{density:"compact",label:"Penyelenggara",modelValue:a.event.organizer,"onUpdate:modelValue":o[6]||(o[6]=n=>a.event.organizer=n)},null,8,["modelValue"]),e(g,{"max-height":"300"},{default:t(()=>[e(q,{placeholder:"Keterangan Kegiatan",theme:"snow","content-type":"html",content:a.event.notes,"onUpdate:content":o[7]||(o[7]=n=>a.event.notes=n)},null,8,["content"])]),_:1}),e(O,{label:"Kegiatan untuk Umum",modelValue:a.event.is_public,"onUpdate:modelValue":o[8]||(o[8]=n=>a.event.is_public=n)},null,8,["modelValue"])]),_:1}),e(j,null,{default:t(()=>[e(k),a.event.id===null?(v(),h(_,{key:0,onClick:x,density:"compact",color:"teal",loading:l.event.store,disabled:l.event.store},{default:t(()=>[u("Simpan")]),_:1},8,["loading","disabled"])):(v(),h(_,{key:1,onClick:A,density:"compact",color:"teal",loading:l.event.update,disabled:l.event.update},{default:t(()=>[u("Perbarui")]),_:1},8,["loading","disabled"]))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(B,{modelValue:s.event.delete,"onUpdate:modelValue":o[11]||(o[11]=n=>s.event.delete=n),width:"300"},{default:t(()=>[e(U,null,{default:t(()=>[e(P,{density:"compact",color:"warning"},{default:t(()=>[e(N,null,{default:t(()=>[u("Konfirmasi")]),_:1}),e(k),e(_,{onClick:o[10]||(o[10]=n=>s.event.delete=!1),icon:""},{default:t(()=>[e(f,null,{default:t(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[u(" Apakah anda yakin ingin menghapus kegiatan "),z("b",{textContent:p(a.event.name)},null,8,me),u(" ? ")]),_:1}),e(j,null,{default:t(()=>[e(k),e(_,{onClick:I,density:"compact",color:"warning",loading:l.event.delete,disabled:l.event.delete},{default:t(()=>[u("Hapus")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(le,{ref_key:"msg",ref:d},null,512)],64)}}};export{ge as default};
