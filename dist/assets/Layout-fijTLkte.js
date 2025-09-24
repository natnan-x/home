import{c as d,u as P,s as z,a as E,r as j,b as S,d as B,o as D,e as N,f as c,g as n,h as e,F as _,i as f,n as x,t as M,j as r,k as t,l as g,_ as V,m as A,p as R,q,v as T,R as F}from"./index-Ckm3yFOv.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=d("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=d("chevron-last",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=d("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=d("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Q="/assets/keep-C6afgBZi.jpg",W={class:"flex justify-between px-4 lg:max-w-6xl lg:px-25 mx-auto"},ee={class:"items-center space-x-2 shadow rounded-full px-4 hidden lg:flex"},te=["onClick"],se={class:"flex lg:hidden flex-1 items-center justify-end"},ne={class:"flex items-center justify-end space-x-4"},oe={class:"flex items-center"},ae={id:"my_menu_modal",class:"modal items-start pt-4 backdrop-blur-xs"},ie={class:"modal-box"},le={__name:"Header",setup(o){const s=P(),{theme:p}=z(s),{toggleTheme:m}=s,u=E(),C=i=>u.path===i,I=()=>{const i=document.getElementById("my_menu_modal");i&&i.showModal()},L=()=>{const i=document.getElementById("my_menu_modal");i&&i.close()},w=j(!1),k=()=>{w.value=window.scrollY>64},b=S(),$=async()=>{await b.toggle()},v=B(()=>b.commonData?.menuData);return D(async()=>{window.addEventListener("scroll",k)}),N(()=>{window.removeEventListener("scroll",k)}),(i,l)=>(n(),c("div",{class:x(["transition-all duration-300 bg-base-100",w.value?"fixed top-0 left-0 shadow-md z-50  w-full py-6 ":"relative bg-transparent"])},[e("div",W,[e("div",{class:"avatar",onClick:l[0]||(l[0]=a=>i.$router.push("/"))},[...l[2]||(l[2]=[e("div",{class:"w-10 rounded-full"},[e("img",{src:Q,class:"grayscale"})],-1)])]),e("div",ee,[(n(!0),c(_,null,f(v.value,a=>(n(),c("p",{key:a.name,class:x(["text-sm cursor-pointer px-2 transition hover:text-teal-500",C(a.path)?"font-bold text-teal-500":"opacity-60 hover:opacity-100"]),onClick:Me=>i.$router.push(a.path)},M(a.name),11,te))),128))]),e("div",se,[e("div",{class:"p-2 pl-3 rounded-full mr-4 shadow flex items-center justify-center",onClick:I},[l[3]||(l[3]=e("span",{class:"text-xs mr-1"},"Menu",-1)),r(t(Z),{size:"16"})])]),e("div",ne,[e("p",{onClick:l[1]||(l[1]=(...a)=>t(m)&&t(m)(...a)),class:"flex items-center"},[t(p)==="dark"?(n(),g(t(J),{key:0,size:"20"})):(n(),g(t(Y),{key:1,size:"20"}))]),e("p",oe,[r(t(H),{size:"20",class:"cursor-pointer",onClick:$})])])]),e("dialog",ae,[e("div",ie,[l[4]||(l[4]=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1)),e("ul",null,[(n(!0),c(_,null,f(v.value,a=>(n(),c("li",{key:a.name,class:x(["py-2",a.current?" text-teal-500":"opacity-60 hover:opacity-100"]),onClick:L},M(a.fullName),3))),128))])])])],2))}},ce={},re={class:"mt-16 flex-none mb-12 border-t pt-8 border-[color:var(--color-base-300)]"};function de(o,s){return n(),c("footer",re,[...s[0]||(s[0]=[e("div",{class:"flex flex-col items-center gap-6 lg:flex-row justify-end"},[e("p",{class:"text-gray-500 text-sm text-center lg:text-right"},[e("span",null,"© "),e("span",null,"NatNan. ChengDu"),A(" 2025.09.01 ")])],-1)])])}const ue=V(ce,[["render",de]]),me="/assets/a-CGocnEvs.mp3",pe="/assets/b-4ZBcV0y5.mp3",he="/assets/c-CkKRasJt.mp3",y=[me,pe,he];function ye(o){o.forEach(s=>{const p=new Audio;p.src=s,p.preload="auto"})}window._audio||(window._audio=new Audio(y[0]),window._audio.loop=!1,window._currentIndex=0,window._isPlaying=!1,ye(y));const h=window._audio;h._hasEndedEvent||(h.addEventListener("ended",()=>{window._currentIndex=(window._currentIndex+1)%y.length,h.src=y[window._currentIndex],h.play().catch(()=>console.log("需要用户交互触发")),window._isPlaying=!0}),h._hasEndedEvent=!0);const _e=R("music",{state:()=>({audio:h,musicList:y,currentIndex:window._currentIndex,isPlaying:window._isPlaying}),actions:{play(){this.audio.play().catch(()=>console.log("需要用户交互触发")),this.isPlaying=!0,window._isPlaying=!0},pause(){this.audio.pause(),this.isPlaying=!1,window._isPlaying=!1},toggleMusic(){this.isPlaying?this.pause():this.play()},nextMusic(){this.audio.pause(),this.currentIndex=(this.currentIndex+1)%this.musicList.length,window._currentIndex=this.currentIndex,this.audio.src=this.musicList[this.currentIndex],this.play()},setMusic(o){o<0||o>=this.musicList.length||(this.audio.pause(),this.currentIndex=o,window._currentIndex=o,this.audio.src=this.musicList[o],this.play())}}}),ge={class:"fab"},xe={tabindex:"0",role:"button",class:"btn btn-lg btn-circle btn-soft relative"},fe={class:"fab-close"},we={class:"btn btn-circle btn-lg btn-error"},ke={__name:"Music",setup(o){const s=_e();return(p,m)=>(n(),c("div",ge,[e("div",xe,[r(t(K)),t(s).isPlaying?(n(),c(_,{key:0},f(3,u=>e("span",{key:u,class:"absolute inset-0 rounded-full bg-base-300 opacity-80 animate-pulse-wave z-40",style:T({animationDelay:`${(u-1)*.7}s`})},null,4)),64)):q("",!0)]),e("div",fe,[e("span",we,[r(t(O))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:m[0]||(m[0]=(...u)=>t(s).nextMusic&&t(s).nextMusic(...u))},[r(t(G))])]),e("div",null,[e("button",{class:"btn btn-lg btn-circle",onClick:m[1]||(m[1]=(...u)=>t(s).toggleMusic&&t(s).toggleMusic(...u))},[t(s).isPlaying?(n(),g(t(U),{key:0})):(n(),g(t(X),{key:1}))])])]))}},be={class:"flex w-full flex-col pt-6 min-h-screen"},ve={class:"lg:px-25 px-4 max-w-6xl mx-auto"},Ie={__name:"Layout",setup(o){return(s,p)=>(n(),c(_,null,[e("div",be,[r(le),e("div",ve,[e("main",null,[r(t(F))]),r(ue)])]),r(ke)],64))}};export{Ie as default};
