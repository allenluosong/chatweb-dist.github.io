import{d as u,r as d,a5 as f,C as _,J as t,U as c,W as p,D as x,E as m,ad as v,aa as h,ae as y,B as C,ab as g,ac as k,af as b}from"./index-d987d484.js";const B={class:"flex h-full"},w={class:"px-4 m-auto space-y-4 text-center max-[400px]"},N=t("h1",{class:"text-4xl text-slate-800 dark:text-neutral-200"}," 请点击按钮确认注册 ",-1),D={class:"flex items-center justify-center text-center"},E={class:"w-[300px]"},q=u({__name:"index",setup(T){const s=d(!1),a=f(),o=h(),l=y();async function i(){try{s.value=!0;let e="";if(m(o.query.verifyCode)){const{message:n}=await v(o.query.verifyCode);e=n??""}a.success({title:"校验成功!!!",content:e,maskClosable:!1,closable:!1,positiveText:"确定",onPositiveClick:()=>{l.push("/")}})}catch(e){s.value=!1,a.error({title:"校验失败!!!",content:e.message??"error",maskClosable:!1,closable:!1,positiveText:"确定",onPositiveClick:()=>{l.push("/")}})}finally{s.value=!1}}return(e,n)=>{const r=b("Icon403");return C(),_("div",B,[t("div",w,[N,t("div",D,[t("div",E,[c(r,{class:"w-[300px]"})])]),c(x(k),{loading:s.value,type:"primary",onClick:i},{default:p(()=>[g(" 确认 ")]),_:1},8,["loading"])])])}}});export{q as default};
