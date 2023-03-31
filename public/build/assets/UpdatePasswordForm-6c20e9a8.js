import{p as c,v as _,f as m,b as o,a as e,u as r,w as i,T as y,e as g,o as w,d as v,g as V}from"./app-8bf8de30.js";import{a as l,b as n,_ as d}from"./TextInput-330ed448.js";import{P as x}from"./PrimaryButton-c17a40a6.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),o("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),b=["onSubmit"],k={class:"flex items-center gap-4"},S={key:0,class:"text-sm text-gray-600"},E={__name:"UpdatePasswordForm",setup(N){const u=c(null),p=c(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),p.value.focus())}})};return(U,a)=>(w(),m("section",null,[P,o("form",{onSubmit:g(f,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[e(d,{for:"current_password",value:"Current Password"}),e(l,{id:"current_password",ref_key:"currentPasswordInput",ref:p,modelValue:r(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(d,{for:"password",value:"New Password"}),e(l,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(d,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",k,[e(x,{disabled:r(s).processing},{default:i(()=>[v("Save")]),_:1},8,["disabled"]),e(y,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:i(()=>[r(s).recentlySuccessful?(w(),m("p",S,"Saved.")):V("",!0)]),_:1})])],40,b)]))}};export{E as default};
