import{C as S}from"./b98394d66c4fddde.js";import{C as q}from"./374de10624b98617.js";import{B as N,v as P,x as B,y as l,o as a,i as m,b as p,z as x,A as w,k as b,t as h,f as k,g as u,F as g,j as O,l as R,c as _,d as C,w as f,u as y,n as U,_ as F,r as j,a as I,m as D,C as E,D as z,E as G,p as H,G as L,H as T}from"./be81f12c6ed6d679.js";var J=`
@layer primevue {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`,K={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(n){var t=n.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},Q=N.extend({name:"breadcrumb",css:J,classes:K}),W={name:"BaseBreadcrumb",extends:B,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Q,provide:function(){return{$parentInstance:this}}},V={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:B,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,r=n.url,c=typeof window<"u"?window.location.pathname:"";return t===c||r===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:l({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(r){return n.onClick(r)}},this.ptm("action",this.ptmOptions)),icon:l({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:l({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},X=["href","target","aria-current"];function Y(e,n,t,r,c,s){return s.visible()?(a(),m("li",l({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",s.ptmOptions)),[t.templates.item?(a(),p(w(t.templates.item),{key:1,item:t.item,label:s.label(),props:s.getMenuItemProps},null,8,["item","label","props"])):(a(),m("a",l({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":s.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return s.onClick&&s.onClick.apply(s,arguments)})},e.ptm("action",s.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),p(w(t.templates.itemicon),{key:0,item:t.item,class:x(e.cx("icon",s.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),m("span",l({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",s.ptmOptions)),null,16)):b("",!0),t.item.label?(a(),m("span",l({key:2,class:e.cx("label")},e.ptm("label",s.ptmOptions)),h(s.label()),17)):b("",!0)],16,X))],16)):b("",!0)}V.render=Y;var M={name:"Breadcrumb",extends:W,components:{BreadcrumbItem:V,ChevronRightIcon:P}};function Z(e,n,t,r,c,s){var v=k("BreadcrumbItem"),i=k("ChevronRightIcon");return a(),m("nav",l({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"breadcrumb"}),[u("ol",l({class:e.cx("menu")},e.ptm("menu")),[e.home?(a(),p(v,l({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):b("",!0),(a(!0),m(g,null,O(e.model,function(d,o){return a(),m(g,{key:d.label+"_"+o},[e.home||o!==0?(a(),m("li",l({key:0,class:e.cx("separator")},e.ptm("separator")),[R(e.$slots,"separator",{},function(){return[_(i,l({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):b("",!0),_(v,{item:d,index:o,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}M.render=Z;const $={class:"surface-card shadow-2 p-3 border-round"},ee={class:"flex justify-content-between"},te={class:"block text-500 font-medium"},ne=C({__name:"AnyItem",props:{value:{}},setup(e){const n=e;return(t,r)=>(a(),m("div",$,[u("div",ee,[u("span",te,h(n.value.name),1)])]))}}),ae={class:"surface-card shadow-2 p-3 border-round"},se={class:"flex justify-content-between"},ie={class:"block text-500 font-medium"},re=C({__name:"FolderItem",props:{value:{}},setup(e){const n=e;return(t,r)=>{const c=k("router-link");return a(),p(c,{to:{name:y(U).media.name,query:{id:n.value.folder}}},{default:f(()=>[u("div",ae,[u("div",se,[u("span",ie,h(n.value.name),1)])])]),_:1},8,["to"])}}});const le=F(re,[["__scopeId","data-v-69eaf777"]]),oe={class:"grid"},me=C({__name:"MediaView",setup(e){const n=G(),t=i=>({bucket:"tonado",folder:i||"media"}),r=j(t()),c=I(()=>{const i=r.value.folder.split("/");return i.shift(),i.map(d=>({label:d}))}),s=D(),v=I(()=>s.findAllAssetsByFolder(r.value));return E(()=>{const i=n.query.id;r.value=t(i)}),z((i,d)=>{i.query.id!==d.query.id&&(r.value=t(i.query.id))}),(i,d)=>(a(),p(S,null,{title:f(()=>[u("h1",null,h(i.$t("page.media.title")),1)]),default:f(()=>[_(q,null,{default:f(()=>[_(y(M),{home:{icon:"pi pi-fw pi-home"},model:c.value},{item:f(({item:o})=>[u("span",{class:x(o.icon)},h(o.label),3)]),separator:f(()=>[H(" / ")]),_:1},8,["model"]),u("div",oe,[(a(!0),m(g,null,O(v.value,(o,A)=>(a(),m("div",{class:"col-12 md:col-6 lg:col-3",key:A},[o instanceof y(L)?(a(),p(le,{key:0,value:o},null,8,["value"])):b("",!0),o instanceof y(T)?(a(),p(ne,{key:1,value:o},null,8,["value"])):b("",!0)]))),128))])]),_:1})]),_:1}))}});const pe=F(me,[["__scopeId","data-v-dce05032"]]);export{pe as default};
