import{U as i,aI as c,o as u,c as m,w as d,d as p,t as _,u as o,aP as v}from"./app-722a966e.js";const k=i({__name:"Toast",setup(b,{expose:r}){let e=c({message:null,color:"red",visible:!1,duration:1e3});function n(t,a,s){e.message=t,e.color=a,e.duration=s,e.visible=!0}return r({show:n}),(t,a)=>{const s=v("v-snackbar");return u(),m(s,{color:o(e).color,modelValue:o(e).visible,"onUpdate:modelValue":a[0]||(a[0]=l=>o(e).visible=l),timeout:o(e).duration},{default:d(()=>[p(_(o(e).message),1)]),_:1},8,["color","modelValue","timeout"])}}});export{k as _};
