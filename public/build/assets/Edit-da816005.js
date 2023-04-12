import{J as ve,r as f,l as ye,m as Ve,i as ke,c as C,b as e,u as o,w as n,F as A,o as u,X as ge,e as i,f as p,t as R,g as _,n as B,d as F,j as J,a as v,q as E}from"./app-bee8323a.js";import{C as be}from"./Container-010988fd.js";import{_ as M}from"./cropper-e33a2928.js";import{_ as O}from"./Toast.vue_vue_type_script_setup_true_lang-42770665.js";const Ce=["src"],Ue=["src"],Pe=["onChange"],xe={__name:"Edit",setup(we){const a=ve().props.auth.user;f(!1);let h=f([]);const w=f(null),W=f(),q=f(),j=f([]),G=f(),Q=f(),L=f([]),S=f(!1),U=f(!1),P=f(null);ye(()=>{axios("/management?exclude=1").then(d=>{h.value=d.data})}),Ve(()=>!(a.management_id==""||a.name==""||a.phone==""||a.email==""||a.password==""||a.password_confirmation=="")&&a.password===a.password_confirmation);const g=f(1),Y=f(["Data Akun","Biodata Anggota","Pendidikan"]),X=f(["SD","SLTP","SLTA","PT","Tidak Sekolah"]),z=f(["Ponpes Salafiyah","Sorogan","Bandongan","TPQ","Ula","Wustha","Ulya","Ma'had Aly","Tidak Sekolah"]),H=f(["PKD","Diklatsar","Dirosah Ula","PKL","Susbalan","Dirosah Wustha","PKN","Susbanpim","Dirosah Ulya","Belum Pernah"]),Z=f(["Single","Menikah","Duda"]),T=ke({user:{store:!1}});function ee(d){if(!(d&&d.target))return;const{files:t}=d.target;if(t&&t[0]){const V=new FileReader;V.onload=k=>{S.value=!0,a.meta.images.profile=k.target.result},V.readAsDataURL(t[0])}}function ae(d){if(!(d&&d.target))return;const{files:t}=d.target;if(t&&t[0]){const V=new FileReader;V.onload=k=>{U.value=!0,a.meta.images.ktp=k.target.result},V.readAsDataURL(t[0])}}function le(d){L.value[d].click()}function te(d,t){if(!(d&&d.target))return;const{files:V}=d.target;if(V&&V[0]){const k=new FileReader;k.onload=$=>{P.value=t,a.meta.cadre_education[t].file=$.target.result},k.readAsDataURL(V[0])}}function oe(){T.user.store=!0,axios.patch(`/user/${a.id}`,a).then(d=>{d.data.code===200?w.value.show(d.data.message,"success"):w.value.show(d.data.message,"red")}).finally(()=>{T.user.store=!1})}function ne(){a.meta.images.profile=W.value.getCroppedCanvas().toDataURL(),S.value=!1}function ue(){a.meta.images.ktp=q.value.getCroppedCanvas().toDataURL(),U.value=!1}function de(d){a.meta.cadre_education[d].file=j.value[0].getCroppedCanvas().toDataURL(),P.value=null}function se(){L.value=[],j.value=[],a.meta.cadre_education.push({level:"",file:"",year:""})}function me(d){a.meta.cadre_education.splice(d,1),delete j.value[d],delete L.value[d]}return(d,t)=>{const V=v("v-toolbar-title"),k=v("v-toolbar"),$=v("v-img"),m=v("v-sheet"),y=v("v-btn"),b=v("v-select"),c=v("v-text-field"),ie=v("v-checkbox"),N=v("v-window-item"),re=v("v-textarea"),x=v("v-spacer"),I=v("v-icon"),K=v("v-card-text"),D=v("v-card"),ce=v("v-divider"),pe=v("v-window"),fe=v("v-card-actions"),_e=v("v-container");return u(),C(A,null,[e(o(ge),{title:"Profil"}),e(be,null,{content:n(()=>[e(_e,null,{default:n(()=>[e(m,{class:"d-flex justify-center mx-2"},{default:n(()=>[o(a).id!==null?(u(),i(m,{key:0,width:"500"},{default:n(()=>[e(D,null,{default:n(()=>[e(k,{density:"compact",color:"teal"},{default:n(()=>[e(V,null,{default:n(()=>[p(R(Y.value[g.value-1]),1)]),_:1})]),_:1}),e(K,null,{default:n(()=>[e(pe,{touch:!1,modelValue:g.value,"onUpdate:modelValue":t[27]||(t[27]=l=>g.value=l)},{default:n(()=>[e(N,{value:1},{default:n(()=>[e(m,{class:"text-center"},{default:n(()=>[e(m,null,{default:n(()=>[e(m,{class:"d-flex justify-center"},{default:n(()=>[S.value?(u(),i(o(M),{key:0,"aspect-ratio":1,ref_key:"profileImage",ref:W,src:o(a).meta.images.profile},null,8,["src"])):(u(),i($,{key:1,src:o(a).meta.images.profile},null,8,["src"]))]),_:1})]),_:1}),e(m,{class:"d-flex justify-center my-2"},{default:n(()=>[e(y,{onClick:t[0]||(t[0]=l=>G.value.click()),density:"compact","prepend-icon":"mdi-image"},{default:n(()=>[p("Ganti Profil")]),_:1}),S.value?(u(),i(y,{key:0,density:"compact",onClick:ne,"prepend-icon":"mdi-crop",class:"ml-2"},{default:n(()=>[p("Crop")]),_:1})):_("",!0)]),_:1}),B(F("input",{type:"file",ref_key:"file",ref:G,onChange:t[1]||(t[1]=l=>ee(l)),accept:"image/*"},null,544),[[E,!1]])]),_:1}),e(b,{label:"Ranting Asal",density:"compact",items:o(h),"item-title":"name","item-value":"id",modelValue:o(a).management_id,"onUpdate:modelValue":t[2]||(t[2]=l=>o(a).management_id=l)},null,8,["items","modelValue"]),e(c,{label:"NIK",density:"compact",modelValue:o(a).nik,"onUpdate:modelValue":t[3]||(t[3]=l=>o(a).nik=l)},null,8,["modelValue"]),e(m,{class:"text-center"},{default:n(()=>[e(m,null,{default:n(()=>[e(m,{class:"d-flex justify-center"},{default:n(()=>[U.value?(u(),i(o(M),{key:0,ref_key:"ktpImage",ref:q,src:o(a).meta.images.ktp},null,8,["src"])):_("",!0),U.value||o(a).meta.images.ktp==""?_("",!0):(u(),C("img",{key:1,src:o(a).meta.images.ktp,alt:"ktp"},null,8,Ce))]),_:1})]),_:1}),e(m,{class:"d-flex justify-center my-2"},{default:n(()=>[e(y,{onClick:t[4]||(t[4]=l=>Q.value.click()),density:"compact","prepend-icon":"mdi-image"},{default:n(()=>[p("Pilih KTP")]),_:1}),U.value?(u(),i(y,{key:0,density:"compact",onClick:ue,"prepend-icon":"mdi-crop",class:"ml-2"},{default:n(()=>[p("Crop")]),_:1})):_("",!0)]),_:1}),B(F("input",{type:"file",ref_key:"fileKtp",ref:Q,onChange:t[5]||(t[5]=l=>ae(l)),accept:"image/*"},null,544),[[E,!1]])]),_:1}),e(c,{label:"Nama Lengkap",density:"compact",modelValue:o(a).name,"onUpdate:modelValue":t[6]||(t[6]=l=>o(a).name=l)},null,8,["modelValue"]),e(c,{label:"Nomor Telpon",density:"compact",modelValue:o(a).phone,"onUpdate:modelValue":t[7]||(t[7]=l=>o(a).phone=l),type:"tel"},null,8,["modelValue"]),e(c,{label:"Email",density:"compact",modelValue:o(a).email,"onUpdate:modelValue":t[8]||(t[8]=l=>o(a).email=l),type:"email"},null,8,["modelValue"]),e(ie,{label:"Centang jika sudah ikut Banser",modelValue:o(a).is_banser,"onUpdate:modelValue":t[9]||(t[9]=l=>o(a).is_banser=l)},null,8,["modelValue"])]),_:1}),e(N,{value:2},{default:n(()=>[e(c,{label:"Nomor Anggota (Jika Sudah Punya)",density:"compact",modelValue:o(a).member_number,"onUpdate:modelValue":t[10]||(t[10]=l=>o(a).member_number=l)},null,8,["modelValue"]),e(c,{label:"Tempat Lahir",density:"compact",modelValue:o(a).meta.pob,"onUpdate:modelValue":t[11]||(t[11]=l=>o(a).meta.pob=l)},null,8,["modelValue"]),e(c,{label:"Tanggal Lahir",density:"compact",modelValue:o(a).meta.dob,"onUpdate:modelValue":t[12]||(t[12]=l=>o(a).meta.dob=l),type:"date"},null,8,["modelValue"]),e(c,{label:"Pekerjaan/Profesi",density:"compact",modelValue:o(a).meta.job,"onUpdate:modelValue":t[13]||(t[13]=l=>o(a).meta.job=l)},null,8,["modelValue"]),e(c,{label:"Pendapatan Rata-Rata/Bulan",density:"compact",modelValue:o(a).meta.average_income,"onUpdate:modelValue":t[14]||(t[14]=l=>o(a).meta.average_income=l)},null,8,["modelValue"]),e(b,{label:"Status Pernikahan",density:"compact",modelValue:o(a).meta.marital_status,"onUpdate:modelValue":t[15]||(t[15]=l=>o(a).meta.marital_status=l),items:Z.value},null,8,["modelValue","items"]),o(a).meta.marital_status!=="Single"?(u(),i(c,{key:0,label:"Jumlah Anak",density:"compact",modelValue:o(a).meta.number_of_children,"onUpdate:modelValue":t[16]||(t[16]=l=>o(a).meta.number_of_children=l),type:"number"},null,8,["modelValue"])):_("",!0),e(b,{label:"Pendidikan Agama Terakhir",density:"compact",modelValue:o(a).meta.last_religious_education,"onUpdate:modelValue":t[17]||(t[17]=l=>o(a).meta.last_religious_education=l),items:z.value},null,8,["modelValue","items"]),e(b,{label:"Pendidikan Formal Terakhir",density:"compact",modelValue:o(a).meta.last_fomal_education,"onUpdate:modelValue":t[18]||(t[18]=l=>o(a).meta.last_fomal_education=l),items:X.value},null,8,["modelValue","items"]),e(b,{label:"Kaderisasi Terakhir",density:"compact",modelValue:o(a).meta.last_cadre_education,"onUpdate:modelValue":t[19]||(t[19]=l=>o(a).meta.last_cadre_education=l),items:H.value},null,8,["modelValue","items"]),e(c,{label:"Kelurahan",density:"compact",modelValue:o(a).meta.address.kelurahan,"onUpdate:modelValue":t[20]||(t[20]=l=>o(a).meta.address.kelurahan=l)},null,8,["modelValue"]),e(m,{class:"d-flex justify-space-between"},{default:n(()=>[e(c,{label:"RT",density:"compact",modelValue:o(a).meta.address.rt,"onUpdate:modelValue":t[21]||(t[21]=l=>o(a).meta.address.rt=l)},null,8,["modelValue"]),e(c,{class:"ml-2",label:"RW",density:"compact",modelValue:o(a).meta.address.rw,"onUpdate:modelValue":t[22]||(t[22]=l=>o(a).meta.address.rw=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"kodepos",density:"compact",modelValue:o(a).meta.address.kodepos,"onUpdate:modelValue":t[23]||(t[23]=l=>o(a).meta.address.kodepos=l)},null,8,["modelValue"]),e(re,{label:"Alamat Jalan (jika ada)",density:"compact",modelValue:o(a).meta.address.jalan,"onUpdate:modelValue":t[24]||(t[24]=l=>o(a).meta.address.jalan=l)},null,8,["modelValue"])]),_:1}),e(N,{value:3},{default:n(()=>[e(m,null,{default:n(()=>[(u(!0),C(A,null,J(o(a).meta.religious_education,(l,r)=>(u(),i(D,{border:"",class:"mb-2"},{default:n(()=>[e(k,{density:"compact"},{default:n(()=>[e(V,null,{default:n(()=>[p("Agama "+R(r+1),1)]),_:2},1024),e(x),r>0?(u(),i(y,{key:0,onClick:s=>o(a).meta.religious_education.splice(r,1),color:"red",icon:""},{default:n(()=>[e(I,null,{default:n(()=>[p("mdi-close")]),_:1})]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024),e(K,null,{default:n(()=>[e(b,{label:"Jenjang Pendidikan",density:"compact",modelValue:l.level,"onUpdate:modelValue":s=>l.level=s,items:z.value},null,8,["modelValue","onUpdate:modelValue","items"]),e(c,{label:"Nama Madrasah/Pesantren/Majlis",density:"compact",modelValue:l.name,"onUpdate:modelValue":s=>l.name=s},null,8,["modelValue","onUpdate:modelValue"]),e(c,{label:"Tahun Lulus",density:"compact",modelValue:l.year,"onUpdate:modelValue":s=>l.year=s,type:"number"},null,8,["modelValue","onUpdate:modelValue"]),r==o(a).meta.religious_education.length-1?(u(),i(m,{key:0,class:"d-flex justify-center"},{default:n(()=>[e(y,{density:"compact",variant:"text",onClick:t[25]||(t[25]=s=>o(a).meta.religious_education.push({level:"",name:"",year:""})),"prepend-icon":"mdi-plus-box"},{default:n(()=>[p("Pendidikan Agama")]),_:1})]),_:1})):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(m,null,{default:n(()=>[(u(!0),C(A,null,J(o(a).meta.formal_education,(l,r)=>(u(),i(D,{border:"",class:"mb-2"},{default:n(()=>[e(k,{density:"compact"},{default:n(()=>[e(V,null,{default:n(()=>[p("Formal "+R(r+1),1)]),_:2},1024),e(x),r>0?(u(),i(y,{key:0,onClick:s=>o(a).meta.formal_education.splice(r,1),color:"red",icon:""},{default:n(()=>[e(I,null,{default:n(()=>[p("mdi-close")]),_:1})]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024),e(K,null,{default:n(()=>[e(b,{label:"Jenjang Pendidikan",density:"compact",modelValue:l.level,"onUpdate:modelValue":s=>l.level=s,items:X.value},null,8,["modelValue","onUpdate:modelValue","items"]),e(c,{label:"Nama Sekolah/Perguruan Tinggi",density:"compact",modelValue:l.name,"onUpdate:modelValue":s=>l.name=s},null,8,["modelValue","onUpdate:modelValue"]),e(c,{label:"Tahun Lulus",density:"compact",modelValue:l.year,"onUpdate:modelValue":s=>l.year=s,type:"number"},null,8,["modelValue","onUpdate:modelValue"]),r==o(a).meta.formal_education.length-1?(u(),i(m,{key:0,class:"d-flex justify-center"},{default:n(()=>[e(y,{density:"compact",variant:"text",onClick:t[26]||(t[26]=s=>o(a).meta.formal_education.push({level:"",name:"",year:""})),"prepend-icon":"mdi-plus-box"},{default:n(()=>[p("Pendidikan Formal")]),_:1})]),_:1})):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(m,null,{default:n(()=>[(u(!0),C(A,null,J(o(a).meta.cadre_education,(l,r)=>(u(),i(D,{border:"",class:"mb-2"},{default:n(()=>[e(k,{density:"compact"},{default:n(()=>[e(V,null,{default:n(()=>[p("Kaderisasi "+R(r+1),1)]),_:2},1024),e(x),r>0?(u(),i(y,{key:0,onClick:s=>me(r),color:"red",icon:""},{default:n(()=>[e(I,null,{default:n(()=>[p("mdi-close")]),_:1})]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024),e(K,null,{default:n(()=>[e(b,{label:"Jenjang Kaderisasi",density:"compact",modelValue:l.level,"onUpdate:modelValue":s=>l.level=s,items:H.value},null,8,["modelValue","onUpdate:modelValue","items"]),e(c,{label:"Tahun Kaderisasi",density:"compact",modelValue:l.year,"onUpdate:modelValue":s=>l.year=s,type:"number"},null,8,["modelValue","onUpdate:modelValue"]),e(m,{class:"text-center"},{default:n(()=>[e(m,null,{default:n(()=>[e(m,{class:"d-flex justify-center"},{default:n(()=>[P.value===r?(u(),i(o(M),{key:0,ref_for:!0,ref_key:"certImage",ref:j,src:l.file},null,8,["src"])):_("",!0),P.value==r||l.file==""?_("",!0):(u(),C("img",{key:1,src:l.file,alt:"ktp"},null,8,Ue))]),_:2},1024)]),_:2},1024),e(m,{class:"d-flex justify-center my-2"},{default:n(()=>[e(y,{onClick:s=>le(r),density:"compact","prepend-icon":"mdi-image"},{default:n(()=>[p("Upload Sertifikat")]),_:2},1032,["onClick"]),P.value===r?(u(),i(y,{key:0,density:"compact",onClick:s=>de(r),"prepend-icon":"mdi-crop",class:"ml-2"},{default:n(()=>[p("Crop")]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024),B(F("input",{type:"file",ref_for:!0,ref_key:"fileCert",ref:L,onChange:s=>te(s,r),accept:"image/*"},null,40,Pe),[[E,!1]])]),_:2},1024),r===o(a).meta.cadre_education.length-1?(u(),i(m,{key:0},{default:n(()=>[e(ce,{thickness:"3",color:"blue",class:"border-opacity-100"}),e(m,{class:"d-flex justify-center"},{default:n(()=>[e(y,{class:"my-2",density:"compact",variant:"text",onClick:se,"prepend-icon":"mdi-plus-box"},{default:n(()=>[p("Jenjang Kaderisasi")]),_:1})]),_:1})]),_:1})):_("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(fe,null,{default:n(()=>[g.value>1?(u(),i(y,{key:0,disabled:g.value<=1,onClick:t[28]||(t[28]=l=>g.value--)},{default:n(()=>[p("Kembali")]),_:1},8,["disabled"])):_("",!0),e(x),g.value<3?(u(),i(y,{key:1,onClick:t[29]||(t[29]=l=>g.value++),color:"teal",variant:"flat"},{default:n(()=>[p("Lanjut")]),_:1})):_("",!0),g.value===3?(u(),i(y,{key:2,disabled:T.user.store,loading:T.user.store,onClick:oe,color:"teal",variant:"flat"},{default:n(()=>[p("Simpan")]),_:1},8,["disabled","loading"])):_("",!0)]),_:1})]),_:1})]),_:1})):_("",!0)]),_:1}),e(O,{ref_key:"msg",ref:w},null,512)]),_:1})]),_:1}),e(O,{ref_key:"msg",ref:w},null,512)],64)}}};export{xe as default};
