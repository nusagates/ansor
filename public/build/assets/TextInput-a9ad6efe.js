import{bp as i,bg as c,o as s,A as a,b as d,aZ as u,aL as p,f as m,av as _}from"./app-da1f12c4.js";const f={class:"text-sm text-red-600"},x={__name:"InputError",props:{message:{type:String}},setup(e){return(o,t)=>i((s(),a("div",null,[d("p",f,u(e.message),1)],512)),[[c,e.message]])}},g={class:"block font-medium text-sm text-gray-700"},v={key:0},b={key:1},k={__name:"InputLabel",props:{value:{type:String}},setup(e){return(o,t)=>(s(),a("label",g,[e.value?(s(),a("span",v,u(e.value),1)):(s(),a("span",b,[p(o.$slots,"default")]))]))}},h=["value"],S={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{expose:o}){const t=m(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(r,n)=>(s(),a("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:n[0]||(n[0]=l=>r.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:t},null,40,h))}};export{k as _,S as a,x as b};
