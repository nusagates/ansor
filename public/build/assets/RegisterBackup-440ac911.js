import{v as p,c as f,w as n,o as w,a,u as s,X as _,b as r,d,q as g,s as V,e as v}from"./app-279fab49.js";import{_ as b}from"./GuestLayout-d90f9f40.js";import{_ as t,a as m,b as i}from"./TextInput-543d6816.js";import{P as y}from"./PrimaryButton-b9e6d3e1.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],k={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},h={class:"flex items-center justify-end mt-4"},S={__name:"RegisterBackup",setup(N){const e=p({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(c,o)=>(w(),f(b,null,{default:n(()=>[a(s(_),{title:"Register"}),r("form",{onSubmit:v(u,["prevent"])},[r("div",null,[a(t,{for:"name",value:"Name"}),a(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",k,[a(t,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",q,[a(t,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",B,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",h,[a(s(g),{href:c.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{S as default};