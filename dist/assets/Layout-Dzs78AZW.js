import{c as d,u as z,s as E,a as S,b as B,r as N,d as V,e as D,o as R,f as A,g as c,h as n,i as e,F as _,j as x,n as f,t as M,k as r,l as t,m as g,_ as T,p as q,q as F,v as Z,w as G,R as H}from"./index-Cbbnb9b0.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("chevron-last",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=d("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=d("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=d("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=d("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),te="/assets/keep-C6afgBZi.jpg",se={class:"flex justify-between px-4 lg:max-w-6xl lg:px-25 mx-auto"},ne={class:"items-center space-x-2 shadow rounded-full px-4 hidden lg:flex"},oe=["onClick"],ae={class:"flex lg:hidden flex-1 items-center justify-end"},ie={class:"flex items-center justify-end space-x-4"},le={class:"flex items-center"},ce={id:"my_menu_modal",class:"modal items-start pt-4 backdrop-blur-xs"},re={class:"modal-box"},de=["onClick"],ue={__name:"Header",setup(a){const s=z(),{theme:p}=E(s),{toggleTheme:h}=s,u=S(),C=l=>u.path===l,I=()=>{const l=document.getElementById("my_menu_modal");l&&l.showModal()},L=B(),$=l=>{const i=document.getElementById("my_menu_modal");L.push(l.path),i&&i.close()},w=N(!1),k=()=>{w.value=window.scrollY>64},b=V(),j=async()=>{await b.toggle()},v=D(()=>b.commonData?.menuData);return R(async()=>{window.addEventListener("scroll",k)}),A(()=>{window.removeEventListener("scroll",k)}),(l,i)=>(n(),c("div",{id:"header",class:f(["transition-all duration-300 bg-base-100",w.value?"fixed top-0 left-0 shadow-md z-50  w-full py-6 ":"relative bg-transparent"])},[e("div",se,[e("div",{class:"avatar",onClick:i[0]||(i[0]=o=>l.$router.push("/"))},[...i[2]||(i[2]=[e("div",{class:"w-10 rounded-full"},[e("img",{src:te,class:"grayscale"})],-1)])]),e("div",ne,[(n(!0),c(_,null,x(v.value,o=>(n(),c("p",{key:o.name,class:f(["text-sm cursor-pointer px-2 transition hover:text-teal-500",C(o.path)?"font-bold text-teal-500":"opacity-60 hover:opacity-100"]),onClick:P=>l.$router.push(o.path)},M(o.name),11,oe))),128))]),e("div",ae,[e("div",{class:"p-2 rounded-[9px] mr-4 shadow flex items-center justify-center",onClick:I},[r(t(U),{size:"16"})])]),e("div",ie,[e("p",{onClick:i[1]||(i[1]=(...o)=>t(h)&&t(h)(...o)),class:"flex items-center"},[t(p)==="dark"?(n(),g(t(X),{key:0,size:"20"})):(n(),g(t(W),{key:1,size:"20"}))]),e("p",le,[r(t(K),{size:"20",class:"cursor-pointer",onClick:j})])])]),e("dialog",ce,[e("div",re,[i[3]||(i[3]=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1)),e("ul",null,[(n(!0),c(_,null,x(v.value,o=>(n(),c("li",{key:o.name,class:f(["py-2",o.current?" text-teal-500":"opacity-60 hover:opacity-100"]),onClick:P=>$(o)},M(o.fullName),11,de))),128))])])])],2))}},he={},pe={class:"mt-16 flex-none mb-12 border-t pt-8 border-[color:var(--color-base-300)]"};function me(a,s){return n(),c("footer",pe,[...s[0]||(s[0]=[e("div",{class:"flex flex-col items-center gap-6 lg:flex-row justify-end"},[e("p",{class:"text-gray-500 text-sm text-center lg:text-right"},[e("span",null,"© "),e("span",null,"NatNan. ChengDu"),q(" 2025.09.01 ")])],-1)])])}const ye=T(he,[["render",me]]),_e="/assets/a-CGocnEvs.mp3",ge="/assets/b-4ZBcV0y5.mp3",fe="/assets/c-CkKRasJt.mp3",y=[_e,ge,fe];function xe(a){a.forEach(s=>{const p=new Audio;p.src=s,p.preload="auto"})}window._audio||(window._audio=new Audio(y[0]),window._audio.loop=!1,window._currentIndex=0,window._isPlaying=!1,xe(y));const m=window._audio;m._hasEndedEvent||(m.addEventListener("ended",()=>{window._currentIndex=(window._currentIndex+1)%y.length,m.src=y[window._currentIndex],m.play().catch(()=>console.log("需要用户交互触发")),window._isPlaying=!0}),m._hasEndedEvent=!0);const we=F("music",{state:()=>({audio:m,musicList:y,currentIndex:window._currentIndex,isPlaying:window._isPlaying}),actions:{play(){this.audio.play().catch(()=>console.log("需要用户交互触发")),this.isPlaying=!0,window._isPlaying=!0},pause(){this.audio.pause(),this.isPlaying=!1,window._isPlaying=!1},toggleMusic(){this.isPlaying?this.pause():this.play()},nextMusic(){this.audio.pause(),this.currentIndex=(this.currentIndex+1)%this.musicList.length,window._currentIndex=this.currentIndex,this.audio.src=this.musicList[this.currentIndex],this.play()},setMusic(a){a<0||a>=this.musicList.length||(this.audio.pause(),this.currentIndex=a,window._currentIndex=a,this.audio.src=this.musicList[a],this.play())}}}),ke={class:"fab"},be={tabindex:"0",role:"button",class:"btn btn-lg btn-circle btn-soft relative"},ve={class:"fab-close"},Me={class:"btn btn-circle btn-lg btn-error"},Ce={__name:"Music",setup(a){const s=we();return(p,h)=>(n(),c("div",ke,[e("div",be,[r(t(Y)),t(s).isPlaying?(n(),c(_,{key:0},x(3,u=>e("span",{key:u,class:"absolute inset-0 rounded-full bg-base-300 opacity-80 animate-pulse-wave z-40",style:G({animationDelay:`${(u-1)*.7}s`})},null,4)),64)):Z("",!0)]),e("div",ve,[e("span",Me,[r(t(ee))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:h[0]||(h[0]=(...u)=>t(s).nextMusic&&t(s).nextMusic(...u))},[r(t(J))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:h[1]||(h[1]=(...u)=>t(s).toggleMusic&&t(s).toggleMusic(...u))},[t(s).isPlaying?(n(),g(t(O),{key:0})):(n(),g(t(Q),{key:1}))])])]))}},Ie={class:"flex w-full flex-col pt-6 min-h-screen"},Le={class:"w-full flex flex-col px-4 lg:max-w-6xl lg:px-25 mx-auto"},je={__name:"Layout",setup(a){return(s,p)=>(n(),c(_,null,[e("div",Ie,[r(ue),e("div",Le,[e("main",null,[r(t(H))]),r(ye)])]),r(Ce)],64))}};export{je as default};
