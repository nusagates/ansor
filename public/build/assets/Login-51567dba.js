import{_ as h}from"./GuestLayout-258d64e0.js";import{f as m,g as V,c as i,w as o,o as u,a as e,u as x,X as y,d as v,r as n}from"./app-38f30f46.js";import{_ as w}from"./Toast.vue_vue_type_script_setup_true_lang-31044596.js";import"./ApplicationLogo-42e3e5c2.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={__name:"Login",setup(B){const d=m(),c=m(!1),a=V({email:"",password:"",remember:!1}),r=m(!1),b=()=>{r.value=!0,axios.post("/login",a).then(l=>{l.data.code===200?(c.value=!0,d.value.show(l.data.message,"success",3e3),setTimeout(()=>{location.href="/dashboard"},3e3)):d.value.show(l.data.message,"red")}).finally(()=>{r.value=!1})};return(l,t)=>{const f=n("v-text-field"),k=n("v-checkbox"),p=n("v-btn"),_=n("v-sheet"),g=n("v-alert");return u(),i(h,null,{default:o(()=>[e(x(y),{title:"Log in"}),c.value?(u(),i(g,{key:1,title:"Berhasil Masuk",text:"Verifikasi akun berhasil. Sesaat lagi kamu akan diarahkan ke halaman dashboard.",type:"success",variant:"tonal"})):(u(),i(_,{key:0},{default:o(()=>[e(f,{density:"compact",type:"email",label:"Email",modelValue:a.email,"onUpdate:modelValue":t[0]||(t[0]=s=>a.email=s)},null,8,["modelValue"]),e(f,{density:"compact",type:"password",label:"Sandi",modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=s=>a.password=s)},null,8,["modelValue"]),e(k,{label:"Ingat saya",modelValue:a.remember,"onUpdate:modelValue":t[2]||(t[2]=s=>a.remember=s)},null,8,["modelValue"]),e(_,{class:"d-flex justify-end"},{default:o(()=>[e(p,{variant:"text",href:l.route("password.request")},{default:o(()=>[v("Lupa Sandi?")]),_:1},8,["href"]),e(p,{onClick:b,loading:r.value,disabled:r.value,class:"ml-2",variant:"flat",color:"teal"},{default:o(()=>[v("Masuk")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})),e(w,{ref_key:"msg",ref:d},null,512)]),_:1})}}};export{N as default};
