import{_ as c,g as m,s as t,t as a,v as e,Q as f,R as x,x as g,y as n}from"./ITZbDG9_.js";const h={name:"BaseNavbar",data(){return{open:!1,dropdownNavbar:!1}},methods:{dropdownToggler(){this.dropdownNavbar=!this.dropdownNavbar}}},w={id:"navbar",class:"relative z-10 w-full text-neutral-800"},v={class:"flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"},y={class:"flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"},$={class:"w-full flex flex-row items-center justify-between py-6"},b=["src"];function D(i,l,r,d,s,_){const o=m("SegmentIcon"),u=m("CloseIcon");return t(),a("nav",w,[e("div",v,[e("div",y,[e("div",$,[e("div",null,[e("img",{src:require("~/assets/img/logo/Museful.png"),class:"mx-auto h-30 w-30 xl:w-28",alt:"Museye Logo"},null,8,b)]),e("button",{class:"rounded-lg lg:hidden focus:outline-none focus:shadow-outline",onClick:l[0]||(l[0]=p=>s.open=!s.open)},[s.open?(t(),f(u,{key:1,size:24})):(t(),f(o,{key:0,size:24}))])]),e("ul",{class:x([[s.open?"flex":"hidden lg:flex"],"w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"])},null,2)]),e("div",{class:x([[s.open?"flex":"hidden lg:flex"],"space-x-3"])},null,2)])])}const k=c(h,[["render",D]]),N={props:{name:{type:String,required:!0},url:{type:String,required:!0}}},B={class:"w-full"},I=["href"];function C(i,l,r,d,s,_){return t(),a("li",B,[e("a",{class:"md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline",href:r.url},g(r.name),9,I)])}const L=c(N,[["render",C]]),S={name:"BaseFooter"},z={class:"max-w-screen-xl px-8 mx-auto"},q={class:"w-full border-y border-[#DDDDDD]"},A={class:"grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},j=e("div",{class:"md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"},[e("ul",{class:"space-y-4"})],-1),E=e("div",{class:"md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"},null,-1),F={class:"md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]"},J={class:"space-y-4"},O=e("div",{class:"py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900"}," © Copyright 2023 Museful. All rights reserved ",-1);function K(i,l,r,d,s,_){const o=L;return t(),a("footer",z,[e("div",q,[e("div",A,[j,E,e("div",F,[e("ul",J,[n(o,{name:"Contact Us",url:"https://docs.google.com/forms/d/e/1FAIpQLSfxLB0IGPnvEW6sIoKJiYomXEfPkOtoAzRJo8WIJpKqmYOgOA/viewform?usp=sf_link"}),n(o,{name:"Linkedin",url:"https://www.linkedin.com/company/museful/"}),n(o,{name:"Instagram",url:"https://www.instagram.com/museful.ai/"})])])])]),O])}const M=c(S,[["render",K]]),P={name:"DefaultLayout"},Q={class:"min-h-screen font-sans antialiased relative"},R={class:"relative"},V=e("div",{class:"absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"},null,-1),W={class:"text-neutral-800"};function Y(i,l,r,d,s,_){const o=k,u=m("Nuxt"),p=M;return t(),a("div",Q,[e("div",R,[V,n(o),e("main",W,[n(u)]),n(p)])])}const T=c(P,[["render",Y]]);export{T as default};