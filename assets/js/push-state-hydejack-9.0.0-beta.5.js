/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.0-beta.5 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,t,r){"use strict";r.r(t);var a=r(170),n=r(171),o=r(208),i=r(215),l=r(174),c=r(52),s=r(175),p=r(168),u=r(180),d=r(209),b=r(210),y=r(164),h=r(183),m=r(173),v=r(102),f=r(14),O=r(185),j=r.n(O),g=r(191),w=r.n(g),E=r(50),C=r(169),S=r(207),k=r(177);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=e=>{var{background:t,color:r,image:a,overlay:n}=e;return"".concat(r).concat(a||t).concat(""===n?"overlay":"")};var P=new WeakMap;class I{constructor(e){var t=document.getElementById("_main"),r=Array.from(document.styleSheets).find(e=>e.ownerNode&&"_pageStyle"===e.ownerNode.id)||{};this.sidebar=document.getElementById("_sidebar"),this.fadeDuration=e,this.rules=r.cssRules||r.rules,this.prevHash=L(w()(t)),this.themeColorEl=document.querySelector('meta[name="theme-color"]')}fetchImage2(e){var{background:t,image:r}=e;if(t||!r||""===r||"none"===r)return Object(E.a)(null);var a=new URL(r,window.location.origin);return Object(f.f)(a.href,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({method:"GET",headers:{Accept:"image/*"}},function(e){var{protocol:t,host:r}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==a.protocol||r!==a.host}(a)?{mode:"cors"}:{})).pipe(Object(y.a)(e=>e.blob()),Object(c.a)(e=>URL.createObjectURL(e)),Object(S.a)(()=>Object(E.a)(r)))}fetchImage(e){var t=w()(e),{background:r,color:a,image:n,overlay:o}=t,i=L(t);return i===this.prevHash?Object(C.b)():this.fetchImage2(t).pipe(Object(c.a)(e=>{var l=document.createElement("div");return l.classList.add("sidebar-bg"),"none"!==n&&""===o&&l.classList.add("sidebar-overlay"),r?l.style.background=r:(l.style.backgroundColor=a,e&&(l.style.backgroundImage="url(".concat(e,")"),P.set(l,e))),[l,t,i]}))}updateStyle(){var{color:e="#4fb1ba",themeColor:t="#193747"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.themeColorEl&&window.setTimeout(()=>this.themeColorEl.content=t,250),this.rules)try{var r=j()(e),a=j()(t),n=r.darken(.1),o=j.a.hsl(a.hue(),10,20),i=j.a.hsl(a.hue(),10,25),l=r.fade(.5);this.rules[0].style.textDecorationColor=l,this.rules[0].style.borderColor=l,this.rules[1].style.textDecorationColor=e,this.rules[1].style.borderColor=e,this.rules[2].style.outlineColor=e,this.rules[3].style.backgroundColor=e,this.rules[3].style.borderColor=e,this.rules[4].style.boxShadow="0 0 0 3px ".concat(r.fade(.5)),this.rules[5].style.backgroundColor=n,this.rules[5].style.borderColor=n,this.rules[6].style.backgroundColor=e,this.rules[6].style.borderColor=e,this.rules[7].style.backgroundColor=n,this.rules[7].style.borderColor=n,this.rules[8].cssRules[0].style.setProperty("--body-bg",o),this.rules[8].cssRules[0].style.setProperty("--border-color",i),this.rules[9].cssRules[0].style.setProperty("--body-bg",o),this.rules[9].cssRules[0].style.setProperty("--border-color",i),this.rules[this.rules.length-1].style.backgroundColor=e}catch(e){0}}fade(e,t){var[r]=e,[a,n,o]=t;return r.parentNode.insertBefore(a,r.nextElementSibling),this.updateStyle(n),this.prevHash=o,Object(f.c)(a,[{opacity:0},{opacity:1}],{duration:this.fadeDuration,easing:"ease"}).pipe(Object(k.a)(()=>{P.has(r)&&URL.revokeObjectURL(P.get(r)),r.parentNode.removeChild(r)}))}}var T=r(167);var B,_=["title","projects"];function N(e,t,r,i){var l=e.pipe(Object(T.a)(e=>{var{flipType:t}=e;return!_.includes(t)}));return Object(n.a)(function(e,t,r,a){var{animationMain:n,settings:i}=a;if(!n)return e;var l=e.pipe(Object(T.a)(e=>{var{flipType:t}=e;return"title"===t}),Object(y.a)(e=>{var{anchor:t}=e;if(!t)return Object(E.a)({});var r=document.createElement("h1");r.classList.add("page-title"),r.textContent=t.textContent,r.style.transformOrigin="left top";var a=n.querySelector(".page");if(!a)return Object(E.a)({});f.e.call(a),a.appendChild(r),n.style.position="fixed",n.style.opacity=1;var o=t.getBoundingClientRect(),l=r.getBoundingClientRect(),c=parseInt(getComputedStyle(t).fontSize,10),s=parseInt(getComputedStyle(r).fontSize,10),u=o.left-l.left,d=o.top-l.top,b=c/s;t.style.opacity=0;var y=[{transform:"translate3d(".concat(u,"px, ").concat(d,"px, 0) scale(").concat(b,")")},{transform:"translate3d(0, 0, 0) scale(1)"}];return Object(f.c)(r,y,i).pipe(Object(p.a)({complete(){n.style.position="absolute"}}))}));return e.pipe(Object(y.a)(e=>{var{flipType:a}=e;return Object(o.a)(t.pipe(Object(T.a)(()=>"title"===a),Object(c.a)(e=>{var{replaceEls:[t]}=e,r=t.querySelector(".page-title, .post-title");return r&&(r.style.opacity=0),r})),r,e=>e).pipe(Object(p.a)(e=>{e&&(e.style.opacity=1),n.style.opacity=0}),Object(k.a)(()=>{n.style.opacity=0}))})).subscribe(),l}(e,t,r,i),function(e,t,r,n){var{animationMain:i,settings:l}=n;if(!i)return e;var c=e.pipe(Object(T.a)(e=>{var{flipType:t}=e;return"project"===t}),Object(y.a)(e=>{var{anchor:t}=e,r=t.querySelector(".flip-project-img");if(!t||!r)return Object(E.a)({});var a=i.querySelector(".page");if(!a)return Object(E.a)({});var n=t.parentNode.querySelector(".flip-project-title"),o=n&&n.textContent||"|",c=document.createElement("h1");null==c||c.classList.add("page-title"),c&&(c.style.opacity="0"),c&&(c.textContent=o);var s=document.createElement("div");null==s||s.classList.add("post-date"),null==s||s.classList.add("heading"),s&&(s.style.opacity="0"),s&&(s.textContent="|"),f.e.call(a),a.appendChild(c),a.appendChild(s);var u=document.createElement("div");u.setAttribute("class",r.classList),u.classList.remove("project-card-img"),r.parentNode.insertBefore(u,r),r.classList.add("lead"),r.style.transformOrigin="left top",a.appendChild(r),i.style.position="fixed",i.style.opacity="1";var d=u.getBoundingClientRect(),b=r.getBoundingClientRect(),y=d.left-b.left,h=d.top-b.top,m=d.width/b.width,v=[{transform:"translate3d(".concat(y,"px, ").concat(h,"px, 0) scale(").concat(m,")")},{transform:"translate3d(0, 0, 0) scale(1)"}];return Object(f.c)(r,v,l).pipe(Object(p.a)({complete(){i.style.position="absolute"}}))}));return e.pipe(Object(y.a)(e=>{var{flipType:n}=e;return t.pipe(Object(T.a)(()=>"project"===n),Object(y.a)(e=>{var{replaceEls:[t]}=e,n=t.querySelector(".aspect-ratio");n&&(n.style.opacity=0);var l=n&&n.querySelector("img");return Object(o.a)(l?Object(a.a)(l,"load"):Object(E.a)({}),r).pipe(Object(p.a)(()=>(n&&(n.style.opacity=1),i.style.opacity=0)),Object(y.a)(()=>null!=l?Object(f.c)(i,[{opacity:1},{opacity:0}],{duration:500}):Object(E.a)({})),Object(k.a)(()=>i.style.opacity=0))}))})).subscribe(),c}(e,t,r,i),l)}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t,r,a,n,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(a,n)}(B=function*(){yield Promise.all([..."fetch"in window?[]:[r.e(1).then(r.bind(null,213))],..."customElements"in window?[]:[r.e(14).then(r.bind(null,192))],..."animate"in Element.prototype?[]:[r.e(13).then(r.t.bind(null,211,7))],..."IntersectionObserver"in window?[]:[r.e(10).then(r.t.bind(null,212,7))]]),yield f.t;var e=/(?:title|file):\s*['"`](.*)['"`]/i,t=[{opacity:1},{opacity:0}],O=[{opacity:0,transform:"translateY(-3rem)"},{opacity:1,transform:"translateY(0)"}],j={duration:400,easing:"ease-out"};function g(e){var t=Object(f.l)("_permalink-template"),r=t.querySelector(".permalink");requestAnimationFrame(()=>(r.href="#".concat(e.id),e.appendChild(t)))}var w=document.querySelector("hy-push-state");if(w){var E,C,S,k=document.querySelector("hy-drawer"),x=document.querySelector("#_navbar > .content > .nav-btn-bar"),q=document.querySelector("link[rel=canonical]"),L=document.querySelector("meta[name=description]"),P=function(e){var t;return null==e||null===(t=e.parentNode)||void 0===t||t.insertBefore(Object(f.l)("_animation-template"),e),null==e?void 0:e.previousElementSibling}(w),T=function(e){return null==e||e.appendChild(Object(f.l)("_loading-template")),null==e?void 0:e.lastElementChild}(x),B=(C=Object(f.l)("_back-template"),S=null==C?void 0:C.children[0],null==C||null===(E=C.querySelector(".nav-btn"))||void 0===E||E.addEventListener("click",()=>window.history.back()),S);if(x&&B){var _=window.matchMedia("(display-mode: standalone)"),R=!!navigator.standalone||_.matches;Object(f.g)(_).pipe(Object(c.a)(e=>e.matches),Object(s.a)(R)).pipe(Object(p.a)(e=>{e?x.prepend(B):B.parentNode===x&&x.removeChild(B)})).subscribe()}var D=(e,t)=>Object(a.a)(w,e).pipe(Object(c.a)(e=>{var{detail:t}=e;return t}),t?Object(c.a)(t):e=>e,Object(u.a)()),M=D("hy-push-state-start",e=>{return Object.assign(e,{flipType:(t=e.anchor,(null==t?void 0:t.classList.contains("flip-title"))?"title":(null==t?void 0:t.classList.contains("flip-project"))?"project":null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"data-flip"))});var t,r}),U=D("hy-push-state-ready"),H=D("hy-push-state-after"),J=D("hy-push-state-progress"),z=D("hy-push-state-networkerror"),F=M.pipe(Object(c.a)(e=>Object.assign(e,{main:document.getElementById("_main")})),Object(p.a)(e=>{var{main:t}=e;t.style.pointerEvents="none"}),window._noDrawer&&(null==k?void 0:k.classList.contains("cover"))?Object(p.a)(()=>{var e;k.classList.remove("cover"),null===(e=k.parentNode)||void 0===e||e.appendChild(k)}):e=>e,Object(d.a)((function(e){var{main:r}=e;return Object(f.c)(r,t,A(A({},j),{},{fill:"forwards"})).pipe(Object(l.a)({main:r}))})),Object(p.a)(e=>{var{main:t}=e;return f.e.call(t)}),Object(u.a)());J.subscribe(()=>{T&&(T.style.display="flex")}),U.pipe(Object(s.a)({replaceEls:[document.getElementById("_main")]})).subscribe(t=>{var{replaceEls:[r]}=t;r.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(g),T&&(T.style.display="none");var a=r.querySelector("#markdown-toc");a&&a.classList.add("toc-hide"),Array.from(r.querySelectorAll("pre.highlight > code")).map(e=>e.children[0]).filter(t=>e.test(null==t?void 0:t.innerText)).forEach(t=>{var[,r]=e.exec(t.innerText),a=t.parentNode;a.removeChild(t),a.childNodes[0].splitText(1),a.removeChild(a.childNodes[0]),t.innerText=r,t.classList.add("pre-header");var n=a.parentNode.parentNode;n.insertBefore(t,n.firstChild)}),"complete"in HTMLImageElement.prototype&&r.querySelectorAll("img[width][height][loading=lazy]").forEach(e=>{e.complete||(e.style.opacity="0",e.addEventListener("load",()=>e.animate([{opacity:0},{opacity:1}],{fill:"forwards",duration:500,easing:"ease"}),{once:!0}))})}),H.pipe(Object(s.a)({replaceEls:[document.getElementById("_main")],documentFragment:document}),Object(p.a)(e=>{var{replaceEls:[t],documentFragment:r}=e,a=r.querySelector("link[rel=canonical]");q&&a&&(q.href=a.href);var n=r.querySelector("meta[name=description]");L&&n&&(L.content=n.content),t.querySelectorAll("li[id^='fn:']").forEach(e=>e.tabIndex=0),t.querySelectorAll("a[href^='#fn:']").forEach(e=>e.addEventListener("click",e=>{var t;return null===(t=document.getElementById(e.currentTarget.getAttribute("href").substr(1)))||void 0===t?void 0:t.focus()})),t.querySelectorAll('pre, table:not(.highlight), .katex-display, .break-layout, mjx-container[jax="CHTML"][display="true"]').forEach(e=>e.addEventListener("touchstart",t=>e.scrollLeft>0&&t.stopPropagation(),{passive:!1}))}),"MathJax"in window?Object(b.a)(()=>MathJax.typesetPromise()):e=>e).subscribe();var Y=H.pipe(Object(y.a)((function(e){var{replaceEls:[t],flipType:r}=e;return Object(f.c)(t,O,j).pipe(Object(l.a)({main:t,flipType:r}))})),Object(u.a)()),G=N(M,U,Object(n.a)(Y,z),{animationMain:P,settings:j}).pipe(Object(u.a)());M.pipe(Object(y.a)(e=>{var t=Object(o.a)(Object(i.a)(400),F,G).toPromise();return e.transitionUntil(t),t})).subscribe(),F.subscribe(),G.subscribe();var W=document.querySelector(".sidebar-bg");if(W){var K=new I(2e3);H.pipe(Object(y.a)(e=>{var{replaceEls:[t]}=e;return Object(o.a)(K.fetchImage(t),Y).pipe(Object(c.a)(e=>{var[t]=e;return t}),Object(h.a)(M))}),Object(s.a)([W]),Object(m.a)(),Object(v.a)(e=>{var[t,r]=e;return K.fade(t,r)})).subscribe()}Y.pipe(Object(s.a)({main:document.getElementById("_main")}),Object(p.a)(e=>{var{main:t}=e,r=null==t?void 0:t.querySelector("#markdown-toc");r&&(r.classList.remove("toc-hide"),r.classList.add("toc-show"))})).subscribe(),z.pipe(Object(y.a)(e=>{var{url:t}=e;T&&(T.style.display="none");var r=document.getElementById("_main");return r&&(r.style.pointerEvents=""),f.e.call(null==P?void 0:P.querySelector(".page")),f.e.call(r),function(e,t){var{pathname:r}=t,a=Object(f.l)("_error-template"),n=null==a?void 0:a.querySelector(".this-link");n&&(n.href=r,n.textContent=r),null==e||e.appendChild(a),null==e||e.lastElementChild}(r,t),Object(f.c)(r,O,A(A({},j),{},{fill:"forwards"}))})).subscribe(),Promise.resolve().then(r.bind(null,203)),window._pushState=w}},function(){var e=this,t=arguments;return new Promise((function(r,a){var n=B.apply(e,t);function o(e){M(n,r,a,o,i,"next",e)}function i(e){M(n,r,a,o,i,"throw",e)}o(void 0)}))})()}}]);