import{C as m}from"./CView-d0eb8756.js";import{C as f}from"./CViewContent-5183dff9.js";import{C as p}from"./CImg-12df1a23.js";import{i as u}from"./band_1-8acba709.js";import{d as _,f as h,g as C,w as n,o as g,b as t,t as a,h as o,i,u as s}from"./main-f721625f.js";const b=()=>{const l={email:"tonado.band@gmail.com",name:"Natalie",phone:"+43 650 1234 567"};function r(){return l}return{getContactInfo:r}},v={class:"text-700"},x=["href"],B={class:"flex justify-content-center max-h-20rem"},I={class:"flex flex-column justify-content-center align-items-center"},V=["href"],j=_({__name:"ContactView",setup(l){const c=b().getContactInfo();return(e,$)=>{const d=h("Button");return g(),C(m,null,{title:n(()=>[t("h1",null,a(e.$t("page.contact.title")),1)]),default:n(()=>[o(f,null,{default:n(()=>[t("div",v,[i(a(e.$t("page.contact.text.part1"))+" ",1),t("a",{href:`mailto:${s(c).email}`,tabindex:"-1"},[o(d,{class:"p-0",label:"Link",link:""},{default:n(()=>[i(a(s(c).email),1)]),_:1})],8,x),i(" "+a(e.$t("page.contact.text.part2")),1)]),t("div",B,[t("div",null,[o(p,{src:s(u),alt:"Band"},null,8,["src"])])]),t("div",I,[t("a",{href:`mailto:${s(c).email}`,tabindex:"-1"},[o(d,{label:e.$t("page.contact.sendMail"),icon:"pi pi-envelope",class:"p-button-raised p-button-rounded"},null,8,["label"])],8,V)])]),_:1})]),_:1})}}});export{j as default};
