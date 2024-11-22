var app=function(){"use strict";function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(s)}function c(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(t,...s){if(null==t)return e;const n=t.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}function a(e,t){e.appendChild(t)}function o(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function m(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function g(e,t,s,n){null==s?e.style.removeProperty(t):e.style.setProperty(t,s,n?"important":"")}function h(e,t,s){e.classList[s?"add":"remove"](t)}function b(e,t){return new e(t)}let $;function _(e){$=e}function y(){if(!$)throw new Error("Function called outside component initialization");return $}function w(e){y().$$.on_mount.push(e)}function j(e){y().$$.on_destroy.push(e)}function k(){const e=y();return(t,s,{cancelable:n=!1}={})=>{const i=e.$$.callbacks[t];if(i){const c=function(e,t,{bubbles:s=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,s,n,t),i}(t,s,{cancelable:n});return i.slice().forEach((t=>{t.call(e,c)})),!c.defaultPrevented}return!0}}function E(e,t){return y().$$.context.set(e,t),t}function x(e){return y().$$.context.get(e)}function z(e,t){const s=e.$$.callbacks[t.type];s&&s.slice().forEach((e=>e.call(this,t)))}const L=[],A=[];let S=[];const O=[],C=Promise.resolve();let I=!1;function T(){I||(I=!0,C.then(N))}function q(e){S.push(e)}const M=new Set;let H=0;function N(){if(0!==H)return;const e=$;do{try{for(;H<L.length;){const e=L[H];H++,_(e),F(e.$$)}}catch(e){throw L.length=0,H=0,e}for(_(null),L.length=0,H=0;A.length;)A.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];M.has(t)||(M.add(t),t())}S.length=0}while(L.length);for(;O.length;)O.pop()();I=!1,M.clear(),_(e)}function F(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const R=new Set;let P;function D(){P={r:0,c:[],p:P}}function B(){P.r||i(P.c),P=P.p}function G(e,t){e&&e.i&&(R.delete(e),e.i(t))}function U(e,t,s,n){if(e&&e.o){if(R.has(e))return;R.add(e),P.c.push((()=>{R.delete(e),n&&(s&&e.d(1),n())})),e.o(t)}else n&&n()}function V(e,t){const s={},n={},i={$$scope:1};let c=e.length;for(;c--;){const l=e[c],r=t[c];if(r){for(const e in l)e in r||(n[e]=1);for(const e in r)i[e]||(s[e]=r[e],i[e]=1);e[c]=r}else for(const e in l)i[e]=1}for(const e in n)e in s||(s[e]=void 0);return s}function X(e){return"object"==typeof e&&null!==e?e:{}}function Y(e){e&&e.c()}function W(e,t,n,l){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),l||q((()=>{const t=e.$$.on_mount.map(s).filter(c);e.$$.on_destroy?e.$$.on_destroy.push(...t):i(t),e.$$.on_mount=[]})),a.forEach(q)}function J(e,t){const s=e.$$;null!==s.fragment&&(!function(e){const t=[],s=[];S.forEach((n=>-1===e.indexOf(n)?t.push(n):s.push(n))),s.forEach((e=>e())),S=t}(s.after_update),i(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function K(t,s,c,l,r,a,o,v=[-1]){const d=$;_(t);const f=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:v,skip_bound:!1,root:s.target||d.$$.root};o&&o(f.root);let p=!1;if(f.ctx=c?c(t,s.props||{},((e,s,...n)=>{const i=n.length?n[0]:s;return f.ctx&&r(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&function(e,t){-1===e.$$.dirty[0]&&(L.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),s})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!l&&l(f.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();s.intro&&G(t.$$.fragment),W(t,s.target,s.anchor,s.customElement),N()}_(d)}class Q{$destroy(){J(this,1),this.$destroy=e}$on(t,s){if(!c(s))return e;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(s),()=>{const e=n.indexOf(s);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function ee(e,t){return{subscribe:te(e,t).subscribe}}function te(t,s=e){let n;const i=new Set;function c(e){if(l(t,e)&&(t=e,n)){const e=!Z.length;for(const e of i)e[1](),Z.push(e,t);if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(l,r=e){const a=[l,r];return i.add(a),1===i.size&&(n=s(c)||e),l(t),()=>{i.delete(a),0===i.size&&n&&(n(),n=null)}}}}function se(t,s,n){const l=!Array.isArray(t),a=l?[t]:t,o=s.length<2;return ee(n,(t=>{let n=!1;const u=[];let v=0,d=e;const f=()=>{if(v)return;d();const n=s(l?u[0]:u,t);o?t(n):d=c(n)?n:e},p=a.map(((e,t)=>r(e,(e=>{u[t]=e,v&=~(1<<t),n&&f()}),(()=>{v|=1<<t}))));return n=!0,f(),function(){i(p),d(),n=!1}}))}function ne(e){let s,n,i;const c=[e[2]];var l=e[0];function r(e){let s={};for(let e=0;e<c.length;e+=1)s=t(s,c[e]);return{props:s}}return l&&(s=b(l,r()),s.$on("routeEvent",e[7])),{c(){s&&Y(s.$$.fragment),n=p()},m(e,t){s&&W(s,e,t),o(e,n,t),i=!0},p(e,t){const i=4&t?V(c,[X(e[2])]):{};if(1&t&&l!==(l=e[0])){if(s){D();const e=s;U(e.$$.fragment,1,0,(()=>{J(e,1)})),B()}l?(s=b(l,r()),s.$on("routeEvent",e[7]),Y(s.$$.fragment),G(s.$$.fragment,1),W(s,n.parentNode,n)):s=null}else l&&s.$set(i)},i(e){i||(s&&G(s.$$.fragment,e),i=!0)},o(e){s&&U(s.$$.fragment,e),i=!1},d(e){e&&u(n),s&&J(s,e)}}}function ie(e){let s,n,i;const c=[{params:e[1]},e[2]];var l=e[0];function r(e){let s={};for(let e=0;e<c.length;e+=1)s=t(s,c[e]);return{props:s}}return l&&(s=b(l,r()),s.$on("routeEvent",e[6])),{c(){s&&Y(s.$$.fragment),n=p()},m(e,t){s&&W(s,e,t),o(e,n,t),i=!0},p(e,t){const i=6&t?V(c,[2&t&&{params:e[1]},4&t&&X(e[2])]):{};if(1&t&&l!==(l=e[0])){if(s){D();const e=s;U(e.$$.fragment,1,0,(()=>{J(e,1)})),B()}l?(s=b(l,r()),s.$on("routeEvent",e[6]),Y(s.$$.fragment),G(s.$$.fragment,1),W(s,n.parentNode,n)):s=null}else l&&s.$set(i)},i(e){i||(s&&G(s.$$.fragment,e),i=!0)},o(e){s&&U(s.$$.fragment,e),i=!1},d(e){e&&u(n),s&&J(s,e)}}}function ce(e){let t,s,n,i;const c=[ie,ne],l=[];function r(e,t){return e[1]?0:1}return t=r(e),s=l[t]=c[t](e),{c(){s.c(),n=p()},m(e,s){l[t].m(e,s),o(e,n,s),i=!0},p(e,[i]){let a=t;t=r(e),t===a?l[t].p(e,i):(D(),U(l[a],1,1,(()=>{l[a]=null})),B(),s=l[t],s?s.p(e,i):(s=l[t]=c[t](e),s.c()),G(s,1),s.m(n.parentNode,n))},i(e){i||(G(s),i=!0)},o(e){U(s),i=!1},d(e){l[t].d(e),e&&u(n)}}}function le(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const s=t.indexOf("?");let n="";return s>-1&&(n=t.substr(s+1),t=t.substr(0,s)),{location:t,querystring:n}}const re=ee(null,(function(e){e(le());const t=()=>{e(le())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));se(re,(e=>e.location)),se(re,(e=>e.querystring));const ae=te(void 0);function oe(e,t,s){let{routes:n={}}=t,{prefix:i=""}=t,{restoreScrollState:c=!1}=t;class l{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:s,keys:n}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var s,n,i,c,l=[],r="",a=e.split("/");for(a[0]||a.shift();i=a.shift();)"*"===(s=i[0])?(l.push("wild"),r+="/(.*)"):":"===s?(n=i.indexOf("?",1),c=i.indexOf(".",1),l.push(i.substring(1,~n?n:~c?c:i.length)),r+=~n&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(r+=(~n?"?":"")+"\\"+i.substring(c))):r+="/"+i;return{keys:l,pattern:new RegExp("^"+r+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=s,this._keys=n}match(e){if(i)if("string"==typeof i){if(!e.startsWith(i))return null;e=e.substr(i.length)||"/"}else if(i instanceof RegExp){const t=e.match(i);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const s={};let n=0;for(;n<this._keys.length;){try{s[this._keys[n]]=decodeURIComponent(t[n+1]||"")||null}catch(e){s[this._keys[n]]=null}n++}return s}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const r=[];n instanceof Map?n.forEach(((e,t)=>{r.push(new l(t,e))})):Object.keys(n).forEach((e=>{r.push(new l(e,n[e]))}));let a=null,o=null,u={};const v=k();async function d(e,t){await(T(),C),v(e,t)}let f=null,p=null;var m;c&&(p=e=>{f=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener("popstate",p),m=()=>{var e;(e=f)?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)},y().$$.after_update.push(m));let g=null,h=null;const b=re.subscribe((async e=>{g=e;let t=0;for(;t<r.length;){const n=r[t].match(e.location);if(!n){t++;continue}const i={route:r[t].path,location:e.location,querystring:e.querystring,userData:r[t].userData,params:n&&"object"==typeof n&&Object.keys(n).length?n:null};if(!await r[t].checkConditions(i))return s(0,a=null),h=null,void d("conditionsFailed",i);d("routeLoading",Object.assign({},i));const c=r[t].component;if(h!=c){c.loading?(s(0,a=c.loading),h=c,s(1,o=c.loadingParams),s(2,u={}),d("routeLoaded",Object.assign({},i,{component:a,name:a.name,params:o}))):(s(0,a=null),h=null);const t=await c();if(e!=g)return;s(0,a=t&&t.default||t),h=c}return n&&"object"==typeof n&&Object.keys(n).length?s(1,o=n):s(1,o=null),s(2,u=r[t].props),void d("routeLoaded",Object.assign({},i,{component:a,name:a.name,params:o})).then((()=>{ae.set(o)}))}s(0,a=null),h=null,ae.set(void 0)}));return j((()=>{b(),p&&window.removeEventListener("popstate",p)})),e.$$set=e=>{"routes"in e&&s(3,n=e.routes),"prefix"in e&&s(4,i=e.prefix),"restoreScrollState"in e&&s(5,c=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=c?"manual":"auto")},[a,o,u,n,i,c,function(t){z.call(this,e,t)},function(t){z.call(this,e,t)}]}class ue extends Q{constructor(e){super(),K(this,e,oe,ce,l,{routes:3,prefix:4,restoreScrollState:5})}}const ve=te({fix:!1,wide:!1,drop:!1,services:!1}),de=te({split:!1}),fe=te({chosen:"cat1"});function pe(e){let t;return{c(){t=v("div"),m(t,"class","logo img svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function me(e){let t;return{c(){t=v("p"),t.textContent="Adamant Trading",m(t,"class","name svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function ge(e){let t;function s(e,t){return e[1]?be:he}let n=s(e),i=n(e);return{c(){i.c(),t=p()},m(e,s){i.m(e,s),o(e,t,s)},p(e,c){n!==(n=s(e))&&(i.d(1),i=n(e),i&&(i.c(),i.m(t.parentNode,t)))},d(e){i.d(e),e&&u(t)}}}function he(e){let t;return{c(){t=v("div"),m(t,"class","menu img svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function be(e){let t;return{c(){t=v("div"),m(t,"class","close img svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function $e(e){let t,s,n=(e[2]||!e[0])&&_e(e),i=e[0]&&!e[2]&&we();return{c(){n&&n.c(),t=f(),i&&i.c(),s=p()},m(e,c){n&&n.m(e,c),o(e,t,c),i&&i.m(e,c),o(e,s,c)},p(e,c){e[2]||!e[0]?n?n.p(e,c):(n=_e(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),e[0]&&!e[2]?i||(i=we(),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(e){n&&n.d(e),e&&u(t),i&&i.d(e),e&&u(s)}}}function _e(e){let t,s,n,i,c,l,r,d,p=e[0]&&e[2]&&ye();return{c(){t=v("div"),s=v("p"),s.textContent="Home",n=f(),i=v("div"),c=v("p"),c.textContent="Services",l=f(),p&&p.c(),r=f(),d=v("p"),d.textContent="Contact",m(s,"class","svelte-lc1ijf"),m(c,"class","svelte-lc1ijf"),g(i,"position","relative"),m(i,"class","bottom_services"),m(d,"class","svelte-lc1ijf"),m(t,"class","bottom svelte-lc1ijf")},m(e,u){o(e,t,u),a(t,s),a(t,n),a(t,i),a(i,c),a(i,l),p&&p.m(i,null),a(t,r),a(t,d)},p(e,t){e[0]&&e[2]?p||(p=ye(),p.c(),p.m(i,null)):p&&(p.d(1),p=null)},d(e){e&&u(t),p&&p.d()}}}function ye(e){let t;return{c(){t=v("div"),t.innerHTML='<a href="/aluminium" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Alumunium</p></a> \n                            <a href="/steel" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Steel</p></a> \n                            <a href="/fashion" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Fashion</p></a> \n                            <a href="/electronics" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Electronics</p></a> \n                            <a href="/ceramics" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Ceramics</p></a> \n                            <a href="/finishing" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Finishing Materials</p></a> \n                            <a href="/hvac" class="svelte-lc1ijf"><p class="svelte-lc1ijf">HVAC</p></a> \n                            <a href="/construction" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Construction Accessories</p></a> \n                            <a href="/fmcg" class="svelte-lc1ijf"><p class="svelte-lc1ijf">FMCG</p></a>',g(t,"position","absolute"),g(t,"transform","translateX(-40%)"),g(t,"width","250px"),m(t,"class","dropdown svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function we(e){let t;return{c(){t=v("div"),t.innerHTML='<a href="/aluminium" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Alumunium</p></a> \n                <a href="/steel" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Steel</p></a> \n                <a href="/fashion" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Fashion</p></a> \n                <a href="/electronics" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Electronics</p></a> \n                <a href="/ceramics" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Ceramics</p></a> \n                <a href="/finishing" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Finishing Materials</p></a> \n                <a href="/hvac" class="svelte-lc1ijf"><p class="svelte-lc1ijf">HVAC</p></a> \n                <a href="/construction" class="svelte-lc1ijf"><p class="svelte-lc1ijf">Construction Accessories</p></a> \n                <a href="/fmcg" class="svelte-lc1ijf"><p class="svelte-lc1ijf">FMCG</p></a>',m(t,"class","dropdown svelte-lc1ijf")},m(e,s){o(e,t,s)},d(e){e&&u(t)}}}function je(t){let s,n,i,c;function l(e,t){return e[3]?me:pe}let r=l(t),d=r(t),p=!t[2]&&ge(t),g=(t[1]||t[2])&&$e(t);return{c(){s=v("nav"),n=v("div"),d.c(),i=f(),p&&p.c(),c=f(),g&&g.c(),m(n,"class","top svelte-lc1ijf"),m(s,"class","effect_down animate_down svelte-lc1ijf"),h(s,"fixation",t[3]),h(s,"wide",t[2]),h(s,"scrolled_wide",t[3]&&t[2])},m(e,t){o(e,s,t),a(s,n),d.m(n,null),a(n,i),p&&p.m(n,null),a(s,c),g&&g.m(s,null)},p(e,[t]){r!==(r=l(e))&&(d.d(1),d=r(e),d&&(d.c(),d.m(n,i))),e[2]?p&&(p.d(1),p=null):p?p.p(e,t):(p=ge(e),p.c(),p.m(n,null)),e[1]||e[2]?g?g.p(e,t):(g=$e(e),g.c(),g.m(s,null)):g&&(g.d(1),g=null),8&t&&h(s,"fixation",e[3]),4&t&&h(s,"wide",e[2]),12&t&&h(s,"scrolled_wide",e[3]&&e[2])},i:e,o:e,d(e){e&&u(s),d.d(),p&&p.d(),g&&g.d()}}}function ke(e,t,s){let n,i,c,l,a;var o,u;function v(e){let t=e.target;t==document.querySelector(".menu")?ve.update((e=>({...e,drop:!0}))):t==document.querySelector(".close")?ve.update((e=>({...e,drop:!1,services:!1}))):t==document.querySelector(".name")?document.querySelector("#landing").scrollIntoView({behavior:"smooth"}):t.matches(".bottom>div.bottom_services")||t.matches(".bottom>div.bottom_services>p")?ve.update((e=>l?{...e,services:!1}:{...e,services:!0})):ve.update((e=>({...e,drop:!1,services:!1})))}function d(){window.scrollY>document.querySelector("#landing").clientHeight?ve.update((e=>({...e,fix:!0}))):ve.update((e=>({...e,fix:!1})))}function f(e){const t=e.target;if(!t.matches(".bottom>p")||t.matches(".bottom>div.bottom_services")||t.matches(".bottom>div.bottom_services>p"))!l||t.matches(".bottom>div.bottom_services")||t.matches(".bottom>div.bottom_services>p")||ve.update((e=>({...e,services:!1})));else{const e=t.innerText.toLowerCase();"home"==e?document.querySelector("#landing").scrollIntoView({behavior:"smooth"}):document.querySelector(`#${e}`).scrollIntoView({behavior:"smooth"})}}o=ve,u=e=>s(4,a=e),e.$$.on_destroy.push(r(o,u));const p=x("nav_observer");let m;return w((()=>{m=document.querySelector("nav"),p.observe(m);document.querySelector("nav").addEventListener("click",(e=>{v(e)})),d(),window.addEventListener("scroll",d),document.addEventListener("click",(e=>{f(e)}))})),j((()=>{top.removeEventListener("click",(e=>{v(e)})),window.removeEventListener("scroll",d),document.removeEventListener("click",(e=>{f(e)})),p.unobserve(m)})),e.$$.update=()=>{16&e.$$.dirty&&s(3,n=a.fix),16&e.$$.dirty&&s(2,i=a.wide),16&e.$$.dirty&&s(1,c=a.drop),16&e.$$.dirty&&s(0,l=a.services)},[l,c,i,n,a]}class Ee extends Q{constructor(e){super(),K(this,e,ke,je,l,{})}}function xe(t){let s;return{c(){s=v("div"),s.innerHTML='<div class="scrolled svelte-zah7v0"><div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/aluminium/aluminium2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/finishing/finishing2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/ceramics/ceramics2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/construction/construction2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/fmcg/fmcg1.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/hvac/hvac2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/steel/steel2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/finishing/finishing2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/fashion/fashion2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/electronics/electronics2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div></div> \n    \n    <div class="scrolled svelte-zah7v0"><div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/aluminium/aluminium2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/finishing/finishing2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/ceramics/ceramics2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/construction/construction2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/fmcg/fmcg1.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/hvac/hvac2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/steel/steel2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n        \n        \n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/finishing/finishing2.jpeg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/fashion/fashion2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div> \n\n\n        <div class="scroll svelte-zah7v0"><div style="background-image:url(&#39;./images/electronics/electronics2.jpg&#39;);" class="scroll_pic svelte-zah7v0"></div></div></div>',m(s,"class","scroller_container svelte-zah7v0")},m(e,t){o(e,s,t)},p:e,i:e,o:e,d(e){e&&u(s)}}}function ze(e){let t;function s(){t.scrollLeft=0}return w((()=>(t=document.querySelector(".scroller_container"),window.addEventListener("load",s),window.addEventListener("resize",s),()=>{window.removeEventListener("load",s),window.removeEventListener("resize",s)}))),[]}class Le extends Q{constructor(e){super(),K(this,e,ze,xe,l,{})}}function Ae(t){let s,n,i,c,l,r;return l=new Le({}),{c(){s=v("div"),n=v("section"),i=v("div"),i.innerHTML='<p class="effect_blur animate_blur svelte-1u8wopl">Adamant Trading</p> \n\n        <p class="effect_blur animate_blur svelte-1u8wopl">Where trade meets trust</p> \n\n        <p class="effect_blur animate_blur landing_about svelte-1u8wopl">Importing, exporting, and distributing goods across various industries, leveraging Dubai’s status as a global trade hub.</p>',c=f(),Y(l.$$.fragment),m(i,"class","svelte-1u8wopl"),m(n,"id","landing"),m(n,"class","svelte-1u8wopl"),m(s,"class","blocker")},m(e,t){o(e,s,t),a(s,n),a(n,i),a(n,c),W(l,n,null),r=!0},p:e,i(e){r||(G(l.$$.fragment,e),r=!0)},o(e){U(l.$$.fragment,e),r=!1},d(e){e&&u(s),J(l)}}}function Se(e){const t=x("observeElements"),s=x("unobserveElements");return w((()=>{let e=[];return e.push(document.querySelector("section>div>p:first-of-type")),e.push(document.querySelector("section>div>p:nth-of-type(2)")),e.push(document.querySelector("section>div>p:last-of-type")),t(e),()=>s(e)})),[]}class Oe extends Q{constructor(e){super(),K(this,e,Se,Ae,l,{})}}function Ce(t){let s;return{c(){s=v("div"),s.innerHTML='<section id="services" class="svelte-1a1ng03"><p class="svelte-1a1ng03">Services</p> \n\n    <div class="service_container svelte-1a1ng03"><a href="/aluminium" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/aluminium/aluminium1.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n                <p class="svelte-1a1ng03">Alumunium</p></div></a> \n\n        <a href="/steel" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/steel/steel1.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Steel</p></div></a> \n\n        <a href="/fashion" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/fashion/fashion1.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Fashion</p></div></a> \n\n        <a href="/electronics" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/electronics/electronics2.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Electronics</p></div></a> \n        \n        <a href="/ceramics" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/ceramics/ceramics1.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Ceramics</p></div></a> \n\n        <a href="/finishing" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/finishing/finishing1.jpeg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Finishing Materials</p></div></a> \n\n        <a href="/hvac" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/hvac/hvac1.jpeg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">HVAC</p></div></a> \n        \n        \n        <a href="/construction" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/construction/construction1.jpeg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">Construction Accessories</p></div></a> \n        \n        \n        <a href="/fmcg" class="svelte-1a1ng03"><div class="effect_shrink animate_shrink service_content svelte-1a1ng03"><div style="background-image:url(&#39;./images/fmcg/fmcg1.jpg&#39;);" class="service_pic img svelte-1a1ng03"></div> \n\n            <p class="svelte-1a1ng03">FMCG</p></div></a></div></section>',m(s,"class","blocker")},m(e,t){o(e,s,t)},p:e,i:e,o:e,d(e){e&&u(s)}}}function Ie(e){const t=x("observeElements"),s=x("unobserveElements");return w((()=>{let e=[...document.querySelectorAll(".service_content")];return t(e),()=>s(e)})),[]}class Te extends Q{constructor(e){super(),K(this,e,Ie,Ce,l,{})}}function qe(t){let s;return{c(){s=v("div"),s.innerHTML='<p class="svelte-10y1zuh">Get in Touch</p> \n\n    <form action="" method="POST" class="svelte-10y1zuh"><input type="text" placeholder="Name" name="Name" required="" class="svelte-10y1zuh"/> \n        <input type="email" placeholder="Email" name="Email" required="" class="svelte-10y1zuh"/> \n        <input type="text" placeholder="Subject" name="Subject" required="" class="svelte-10y1zuh"/> \n        <textarea placeholder="Message" name="Message" required="" class="svelte-10y1zuh"></textarea> \n\n        <input class="effect_wide animate_wide svelte-10y1zuh" type="submit" value="Submit"/></form>',m(s,"class","form_container svelte-10y1zuh")},m(e,t){o(e,s,t)},p:e,i:e,o:e,d(e){e&&u(s)}}}function Me(e){const t=x("observer");let s;return w((()=>(s=document.querySelector("form>input[type='submit']"),t.observe(s),()=>t.unobserve(s)))),[]}class He extends Q{constructor(e){super(),K(this,e,Me,qe,l,{})}}function Ne(t){let s,n,i,c,l,r,d,p,g;return r=new He({}),{c(){s=v("div"),n=v("section"),i=v("div"),c=v("div"),c.innerHTML='<p class="svelte-14cibfa">Contact Us</p> \n\n            <p class="svelte-14cibfa">Email, call or complete the form to learn how we can provide you with premium engineering solutions tailored to your needs.</p> \n\n            <p class="svelte-14cibfa">E-MAIL: adamantexport@gmail.com</p> \n\n            <div class="infos_div svelte-14cibfa"><div class="info svelte-14cibfa"><div class="svelte-14cibfa">Head Office</div> \n\n                    <p class="svelte-14cibfa">TEL: +971 50 968 1540</p> \n                    <p class="svelte-14cibfa">EMAIL: adamantexport<wbr/>@gmail.com</p> \n                    <p class="svelte-14cibfa">DUBAI SHOPPING CENTRE, 1ST FLOOR OPPOSITE TO DEIRA CITY CENTER</p> \n                    <p class="svelte-14cibfa">P.O.BOX 251006</p> \n                    <p class="svelte-14cibfa">DUBAI, UAE</p></div> \n                \n                <div class="info svelte-14cibfa"><div class="svelte-14cibfa">Branch Office</div> \n\n                    <p class="svelte-14cibfa">TEL: +251 911 24 64 75</p> \n                    <p class="svelte-14cibfa">EMAIL: info<wbr/>@gmail.com</p> \n                    <p class="svelte-14cibfa">GOFA GEBRIEL JFK BUILDING 3RD FLOOR</p> \n                    <p class="svelte-14cibfa">ADDIS ABABA, ETHIOPIA</p></div></div>',l=f(),Y(r.$$.fragment),d=f(),p=v("h6"),p.innerHTML="© 2024 Adamant Trading.<br/>All Rights Reserved.",m(c,"class","contact_left svelte-14cibfa"),m(i,"class","contact_toper svelte-14cibfa"),m(p,"class","svelte-14cibfa"),m(n,"id","contact"),m(n,"class","svelte-14cibfa"),m(s,"class","blocker2")},m(e,t){o(e,s,t),a(s,n),a(n,i),a(i,c),a(i,l),W(r,i,null),a(n,d),a(n,p),g=!0},p:e,i(e){g||(G(r.$$.fragment,e),g=!0)},o(e){U(r.$$.fragment,e),g=!1},d(e){e&&u(s),J(r)}}}class Fe extends Q{constructor(e){super(),K(this,e,null,Ne,l,{})}}function Re(t){let s,n,i,c,l,r,d,p,g;return n=new Ee({}),c=new Oe({}),r=new Te({}),p=new Fe({}),{c(){s=v("div"),Y(n.$$.fragment),i=f(),Y(c.$$.fragment),l=f(),Y(r.$$.fragment),d=f(),Y(p.$$.fragment),m(s,"id","container")},m(e,t){o(e,s,t),W(n,s,null),a(s,i),W(c,s,null),a(s,l),W(r,s,null),a(s,d),W(p,s,null),g=!0},p:e,i(e){g||(G(n.$$.fragment,e),G(c.$$.fragment,e),G(r.$$.fragment,e),G(p.$$.fragment,e),g=!0)},o(e){U(n.$$.fragment,e),U(c.$$.fragment,e),U(r.$$.fragment,e),U(p.$$.fragment,e),g=!1},d(e){e&&u(s),J(n),J(c),J(r),J(p)}}}function Pe(e){const t=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=Array.from(e.target.classList);e.target.classList.remove(t[0]),s.unobserve(e.target)}}))}),{rootMargin:"0px",threshold:0}),s=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=Array.from(e.target.classList);e.target.classList.remove(t[0]),s.unobserve(e.target)}}))}),{rootMargin:"-20px",threshold:0}),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){Array.from(e.target.children).forEach((e=>{const t=Array.from(e.classList);e.classList.remove(t[0])})),s.unobserve(e.target)}}))}),{rootMargin:"-20px",threshold:0});function i(){let e=window.innerWidth;fe.update((e=>({...e}))),e>=771?ve.update((e=>({...e,wide:!0}))):ve.update((e=>({...e,wide:!1}))),e>=995?de.update((e=>({...e,split:!0}))):de.update((e=>({...e,split:!1})))}return E("nav_observer",t),E("observer",s),E("parent_observer",n),E("observeElements",(function(e){e.forEach((e=>{s.observe(e)}))})),E("unobserveElements",(function(e){e.forEach((e=>{s.unobserve(e)}))})),w((()=>{i(),window.addEventListener("resize",i)})),j((()=>{window.removeEventListener("resize",i)})),[]}class De extends Q{constructor(e){super(),K(this,e,Pe,Re,l,{})}}function Be(t){let s,n;return s=new ue({props:{routes:{"/":De}}}),{c(){Y(s.$$.fragment)},m(e,t){W(s,e,t),n=!0},p:e,i(e){n||(G(s.$$.fragment,e),n=!0)},o(e){U(s.$$.fragment,e),n=!1},d(e){J(s,e)}}}return new class extends Q{constructor(e){super(),K(this,e,null,Be,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
