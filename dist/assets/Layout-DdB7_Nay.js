import{c as d,u as $,s as j,a as E,r as z,o as N,b as S,d as B,e as c,f as n,g as e,F as f,h as g,n as x,t as b,i as t,j as r,k as _,_ as A,l as V,m as R,p as D,q as T,R as q}from"./index-DDWNmynR.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=d("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("chevron-last",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=d("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=d("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=d("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Z="/assets/portrait-J_WuvAwn.webp",v=[{name:"About",fullName:"About Me",path:"/about"},{name:"Work",fullName:"Work experience",path:"/work"},{name:"Project",fullName:"Project Experience",path:"/project"},{name:"Uses",fullName:"Using Tools",path:"/uses"},{name:"Life",fullName:"Rich Life",path:"/life"}],O={class:"flex justify-between px-4 lg:max-w-6xl lg:px-25 mx-auto"},Q={class:"items-center space-x-2 shadow rounded-full px-4 hidden lg:flex"},ee=["onClick"],te={class:"flex lg:hidden flex-1 items-center justify-end"},se={class:"flex items-center justify-end space-x-4"},ne={class:"flex items-center"},oe={id:"my_menu_modal",class:"modal items-start pt-4 backdrop-blur-xs"},ae={class:"modal-box"},ie={__name:"Header",setup(o){const s=$(),{theme:p}=j(s),{toggleTheme:m}=s,u=E(),M=i=>u.path===i,L=()=>{const i=document.getElementById("my_menu_modal");i&&i.showModal()},C=()=>{const i=document.getElementById("my_menu_modal");i&&i.close()},w=z(!1),k=()=>{w.value=window.scrollY>64};N(()=>{window.addEventListener("scroll",k)}),S(()=>{window.removeEventListener("scroll",k)});const I=B(),P=async()=>{await I.toggle()};return(i,l)=>(n(),c("div",{class:x(["transition-all duration-300 bg-base-100",w.value?"fixed top-0 left-0 shadow-md z-50  w-full py-6 ":"relative bg-transparent"])},[e("div",O,[e("div",{class:"avatar",onClick:l[0]||(l[0]=a=>i.$router.push("/"))},[...l[2]||(l[2]=[e("div",{class:"w-10 rounded-full"},[e("img",{src:Z})],-1)])]),e("div",Q,[(n(!0),c(f,null,g(t(v),a=>(n(),c("p",{key:a.name,class:x(["text-sm cursor-pointer px-2 transition hover:text-teal-500",M(a.path)?"font-bold text-teal-500":"opacity-60 hover:opacity-100"]),onClick:ve=>i.$router.push(a.path)},b(a.name),11,ee))),128))]),e("div",te,[e("div",{class:"p-2 pl-3 rounded-full mr-4 shadow flex items-center justify-center",onClick:L},[l[3]||(l[3]=e("span",{class:"text-xs mr-1"},"Menu",-1)),r(t(F),{size:"16"})])]),e("div",se,[e("p",{onClick:l[1]||(l[1]=(...a)=>t(m)&&t(m)(...a)),class:"flex items-center"},[t(p)==="dark"?(n(),_(t(J),{key:0,size:"20"})):(n(),_(t(X),{key:1,size:"20"}))]),e("p",ne,[r(t(W),{size:"20",class:"cursor-pointer",onClick:P})])])]),e("dialog",oe,[e("div",ae,[l[4]||(l[4]=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1)),e("ul",null,[(n(!0),c(f,null,g(t(v),a=>(n(),c("li",{key:a.name,class:x(["py-2",a.current?" text-teal-500":"opacity-60 hover:opacity-100"]),onClick:C},b(a.fullName),3))),128))])])])],2))}},le={},ce={class:"mt-16 flex-none mb-12 border-t pt-8 border-[color:var(--color-base-300)]"};function re(o,s){return n(),c("footer",ce,[...s[0]||(s[0]=[e("div",{class:"flex flex-col items-center gap-6 lg:flex-row justify-end"},[e("p",{class:"text-gray-500 text-sm text-center lg:text-right"},[e("span",null,"© "),e("span",null,"NatNan. ChengDu"),V(" 2025.09.01 ")])],-1)])])}const de=A(le,[["render",re]]),ue="/assets/a-CGocnEvs.mp3",me="/assets/b-4ZBcV0y5.mp3",pe="/assets/c-CkKRasJt.mp3",y=[ue,me,pe];function he(o){o.forEach(s=>{const p=new Audio;p.src=s,p.preload="auto"})}window._audio||(window._audio=new Audio(y[0]),window._audio.loop=!1,window._currentIndex=0,window._isPlaying=!1,he(y));const h=window._audio;h._hasEndedEvent||(h.addEventListener("ended",()=>{window._currentIndex=(window._currentIndex+1)%y.length,h.src=y[window._currentIndex],h.play().catch(()=>console.log("需要用户交互触发")),window._isPlaying=!0}),h._hasEndedEvent=!0);const ye=R("music",{state:()=>({audio:h,musicList:y,currentIndex:window._currentIndex,isPlaying:window._isPlaying}),actions:{play(){this.audio.play().catch(()=>console.log("需要用户交互触发")),this.isPlaying=!0,window._isPlaying=!0},pause(){this.audio.pause(),this.isPlaying=!1,window._isPlaying=!1},toggleMusic(){this.isPlaying?this.pause():this.play()},nextMusic(){this.audio.pause(),this.currentIndex=(this.currentIndex+1)%this.musicList.length,window._currentIndex=this.currentIndex,this.audio.src=this.musicList[this.currentIndex],this.play()},setMusic(o){o<0||o>=this.musicList.length||(this.audio.pause(),this.currentIndex=o,window._currentIndex=o,this.audio.src=this.musicList[o],this.play())}}}),fe={class:"fab"},_e={tabindex:"0",role:"button",class:"btn btn-lg btn-circle btn-soft relative"},xe={class:"fab-close"},ge={class:"btn btn-circle btn-lg btn-error"},we={__name:"Music",setup(o){const s=ye();return(p,m)=>(n(),c("div",fe,[e("div",_e,[r(t(G)),t(s).isPlaying?(n(),c(f,{key:0},g(3,u=>e("span",{key:u,class:"absolute inset-0 rounded-full bg-base-300 opacity-80 animate-pulse-wave z-40",style:T({animationDelay:`${(u-1)*.7}s`})},null,4)),64)):D("",!0)]),e("div",xe,[e("span",ge,[r(t(Y))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:m[0]||(m[0]=(...u)=>t(s).nextMusic&&t(s).nextMusic(...u))},[r(t(U))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:m[1]||(m[1]=(...u)=>t(s).toggleMusic&&t(s).toggleMusic(...u))},[t(s).isPlaying?(n(),_(t(H),{key:0})):(n(),_(t(K),{key:1}))])])]))}},ke={class:"flex w-full flex-col pt-6"},be={class:"lg:px-25 px-4 max-w-6xl mx-auto"},Le={__name:"Layout",setup(o){return(s,p)=>(n(),c(f,null,[e("div",ke,[r(ie),e("div",be,[e("main",null,[r(t(q))]),r(de)])]),r(we)],64))}};export{Le as default};
