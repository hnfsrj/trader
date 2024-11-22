var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function d(){return f("")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function h(t,n,e,r){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function $(t,n){return new t(n)}let y;function v(t){y=t}function b(){if(!y)throw new Error("Function called outside component initialization");return y}function _(){const t=b();return(n,e,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[n];if(o){const s=function(t,n,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,r,n),o}(n,e,{cancelable:r});return o.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const x=[],E=[];let k=[];const j=[],S=Promise.resolve();let O=!1;function A(){O||(O=!0,S.then(N))}function L(t){k.push(t)}const q=new Set;let C=0;function N(){if(0!==C)return;const t=y;do{try{for(;C<x.length;){const t=x[C];C++,v(t),P(t.$$)}}catch(t){throw x.length=0,C=0,t}for(v(null),x.length=0,C=0;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];q.has(n)||(q.add(n),n())}k.length=0}while(x.length);for(;j.length;)j.pop()();O=!1,q.clear(),v(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const T=new Set;let M;function R(){M={r:0,c:[],p:M}}function z(){M.r||o(M.c),M=M.p}function D(t,n){t&&t.i&&(T.delete(t),t.i(n))}function H(t,n,e,r){if(t&&t.o){if(T.has(t))return;T.add(t),M.c.push((()=>{T.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}else r&&r()}function I(t,n){const e={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(e[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}function B(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function U(t,n,r,c){const{fragment:i,after_update:u}=t.$$;i&&i.m(n,r),c||L((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(L)}function X(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];k.forEach((r=>-1===t.indexOf(r)?n.push(r):e.push(r))),e.forEach((t=>t())),k=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(n,e,s,c,i,u,a,f=[-1]){const p=y;v(n);const d=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};a&&a(d.root);let g=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),g&&function(t,n){-1===t.$$.dirty[0]&&(x.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),g=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();e.intro&&D(n.$$.fragment),U(n,e.target,e.anchor,e.customElement),N()}v(p)}class W{$destroy(){X(this,1),this.$destroy=t}$on(n,e){if(!s(e))return t;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=[];function J(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let r;const o=new Set;function s(t){if(c(n,t)&&(n=t,r)){const t=!G.length;for(const t of o)t[1](),G.push(t,n);if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return o.add(u),1===o.size&&(r=e(s)||t),c(n),()=>{o.delete(u),0===o.size&&r&&(r(),r=null)}}}}function Q(n,e,r){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return J(r,(n=>{let r=!1;const l=[];let a=0,f=t;const p=()=>{if(a)return;f();const r=e(c?l[0]:l,n);u?n(r):f=s(r)?r:t},d=i.map(((n,e)=>function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(n,(t=>{l[e]=t,a&=~(1<<e),r&&p()}),(()=>{a|=1<<e}))));return r=!0,p(),function(){o(d),f(),r=!1}}))}function V(t){let e,r,o;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=$(c,i()),e.$on("routeEvent",t[7])),{c(){e&&F(e.$$.fragment),r=d()},m(t,n){e&&U(e,t,n),u(t,r,n),o=!0},p(t,n){const o=4&n?I(s,[B(t[2])]):{};if(1&n&&c!==(c=t[0])){if(e){R();const t=e;H(t.$$.fragment,1,0,(()=>{X(t,1)})),z()}c?(e=$(c,i()),e.$on("routeEvent",t[7]),F(e.$$.fragment),D(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else c&&e.$set(o)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&H(e.$$.fragment,t),o=!1},d(t){t&&l(r),e&&X(e,t)}}}function Z(t){let e,r,o;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=$(c,i()),e.$on("routeEvent",t[6])),{c(){e&&F(e.$$.fragment),r=d()},m(t,n){e&&U(e,t,n),u(t,r,n),o=!0},p(t,n){const o=6&n?I(s,[2&n&&{params:t[1]},4&n&&B(t[2])]):{};if(1&n&&c!==(c=t[0])){if(e){R();const t=e;H(t.$$.fragment,1,0,(()=>{X(t,1)})),z()}c?(e=$(c,i()),e.$on("routeEvent",t[6]),F(e.$$.fragment),D(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else c&&e.$set(o)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&H(e.$$.fragment,t),o=!1},d(t){t&&l(r),e&&X(e,t)}}}function tt(t){let n,e,r,o;const s=[Z,V],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),r=d()},m(t,e){c[n].m(t,e),u(t,r,e),o=!0},p(t,[o]){let u=n;n=i(t),n===u?c[n].p(t,o):(R(),H(c[u],1,1,(()=>{c[u]=null})),z(),e=c[n],e?e.p(t,o):(e=c[n]=s[n](t),e.c()),D(e,1),e.m(r.parentNode,r))},i(t){o||(D(e),o=!0)},o(t){H(e),o=!1},d(t){c[n].d(t),t&&l(r)}}}function nt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const et=J(null,(function(t){t(nt());const n=()=>{t(nt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Q(et,(t=>t.location)),Q(et,(t=>t.querystring));const rt=K(void 0);function ot(t,n,e){let{routes:r={}}=n,{prefix:o=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:r}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();o=u.shift();)"*"===(e=o[0])?(c.push("wild"),i+="/(.*)"):":"===e?(r=o.indexOf("?",1),s=o.indexOf(".",1),c.push(o.substring(1,~r?r:~s?s:o.length)),i+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~r?"?":"")+"\\"+o.substring(s))):i+="/"+o;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=r}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const n=t.match(o);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;){try{e[this._keys[r]]=decodeURIComponent(n[r+1]||"")||null}catch(t){e[this._keys[r]]=null}r++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];r instanceof Map?r.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(r).forEach((t=>{i.push(new c(t,r[t]))}));let u=null,l=null,a={};const f=_();async function p(t,n){await(A(),S),f(t,n)}let d=null,g=null;var m;s&&(g=t=>{d=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",g),m=()=>{var t;(t=d)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let h=null,$=null;const y=et.subscribe((async t=>{h=t;let n=0;for(;n<i.length;){const r=i[n].match(t.location);if(!r){n++;continue}const o={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await i[n].checkConditions(o))return e(0,u=null),$=null,void p("conditionsFailed",o);p("routeLoading",Object.assign({},o));const s=i[n].component;if($!=s){s.loading?(e(0,u=s.loading),$=s,e(1,l=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},o,{component:u,name:u.name,params:l}))):(e(0,u=null),$=null);const n=await s();if(t!=h)return;e(0,u=n&&n.default||n),$=s}return r&&"object"==typeof r&&Object.keys(r).length?e(1,l=r):e(1,l=null),e(2,a=i[n].props),void p("routeLoaded",Object.assign({},o,{component:u,name:u.name,params:l})).then((()=>{rt.set(l)}))}e(0,u=null),$=null,rt.set(void 0)}));return function(t){b().$$.on_destroy.push(t)}((()=>{y(),g&&window.removeEventListener("popstate",g)})),t.$$set=t=>{"routes"in t&&e(3,r=t.routes),"prefix"in t&&e(4,o=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,r,o,s,function(n){w.call(this,t,n)},function(n){w.call(this,t,n)}]}class st extends W{constructor(t){super(),Y(this,t,ot,tt,c,{routes:3,prefix:4,restoreScrollState:5})}}function ct(n){let e;return{c(){e=a("nav"),e.innerHTML='<p class="name svelte-9p72x6">MESSP</p>',g(e,"class","svelte-9p72x6")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function it(t){let n;function e(){n.scrollTop=0}var r;return r=()=>(n=document.querySelector("nav").parentElement,window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),b().$$.on_mount.push(r),[]}class ut extends W{constructor(t){super(),Y(this,t,it,ct,c,{})}}function lt(n){let e;return{c(){e=a("div"),e.innerHTML='<a href="/#/" class="svelte-9ufqsl"><p class="svelte-9ufqsl">Back Home</p></a>',g(e,"class","svelte-9ufqsl")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class at extends W{constructor(t){super(),Y(this,t,null,lt,c,{})}}function ft(n){let e,r;return{c(){e=a("p"),r=f(n[0]),g(e,"class","svelte-6yez5t")},m(t,n){u(t,e,n),i(e,r)},p(t,[n]){1&n&&m(r,t[0])},i:t,o:t,d(t){t&&l(e)}}}function pt(t,n,e){let{name:r}=n;return t.$$set=t=>{"name"in t&&e(0,r=t.name)},[r]}class dt extends W{constructor(t){super(),Y(this,t,pt,ft,c,{name:0})}}function gt(n){let e,r;return{c(){e=a("p"),r=f(n[0]),g(e,"class","svelte-16fyp0a")},m(t,n){u(t,e,n),i(e,r)},p(t,[n]){1&n&&m(r,t[0])},i:t,o:t,d(t){t&&l(e)}}}function mt(t,n,e){let{descript:r}=n;return t.$$set=t=>{"descript"in t&&e(0,r=t.descript)},[r]}class ht extends W{constructor(t){super(),Y(this,t,mt,gt,c,{descript:0})}}function $t(t,n,e){const r=t.slice();return r[1]=n[e],r}function yt(t){let n,e,r;return{c(){n=a("div"),e=a("div"),r=p(),h(e,"background-image","url('"+t[1]+"')"),g(e,"class","image svelte-cw1hv7"),g(n,"class","pic svelte-cw1hv7")},m(t,o){u(t,n,o),i(n,e),i(n,r)},p(t,n){1&n&&h(e,"background-image","url('"+t[1]+"')")},d(t){t&&l(n)}}}function vt(n){let e,r=n[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=yt($t(n,r,t));return{c(){e=a("div");for(let t=0;t<o.length;t+=1)o[t].c();g(e,"class","pics_container svelte-cw1hv7")},m(t,n){u(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,[n]){if(1&n){let s;for(r=t[0],s=0;s<r.length;s+=1){const c=$t(t,r,s);o[s]?o[s].p(c,n):(o[s]=yt(c),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function bt(t,n,e){let{images:r=[]}=n;return t.$$set=t=>{"images"in t&&e(0,r=t.images)},[r]}class _t extends W{constructor(t){super(),Y(this,t,bt,vt,c,{images:0})}}function wt(n){let e,r,o,s,c,f,d,m,h,$,y;return r=new ut({}),s=new at({}),f=new dt({props:{name:"Sourcing and Supply Chain"}}),m=new ht({props:{descript:"Leverage our expertise in sourcing agricultural commodities from East Africa and supplying them to markets in the UAE, Middle East, and Asia. Our streamlined supply chain guarantees quality and timely delivery for your business."}}),$=new _t({props:{images:n[0]}}),{c(){e=a("div"),F(r.$$.fragment),o=p(),F(s.$$.fragment),c=p(),F(f.$$.fragment),d=p(),F(m.$$.fragment),h=p(),F($.$$.fragment),g(e,"id","container"),g(e,"class","svelte-1lxivbz")},m(t,n){u(t,e,n),U(r,e,null),i(e,o),U(s,e,null),i(e,c),U(f,e,null),i(e,d),U(m,e,null),i(e,h),U($,e,null),y=!0},p:t,i(t){y||(D(r.$$.fragment,t),D(s.$$.fragment,t),D(f.$$.fragment,t),D(m.$$.fragment,t),D($.$$.fragment,t),y=!0)},o(t){H(r.$$.fragment,t),H(s.$$.fragment,t),H(f.$$.fragment,t),H(m.$$.fragment,t),H($.$$.fragment,t),y=!1},d(t){t&&l(e),X(r),X(s),X(f),X(m),X($)}}}function xt(t){return[["../images/sourcing/sourcing1.jpg","../images/sourcing/sourcing2.jpg","../images/sourcing/sourcing3.jpg","../images/sourcing/sourcing4.jpg","../images/sourcing/sourcing5.jpg","../images/sourcing/sourcing6.jpg","../images/sourcing/sourcing7.jpg","../images/sourcing/sourcing8.jpg"]]}class Et extends W{constructor(t){super(),Y(this,t,xt,wt,c,{})}}function kt(n){let e,r,o;return e=new st({props:{routes:{"/":Et},basepath:"/Adamant_Trading"}}),{c(){F(e.$$.fragment),r=f("\n\n\nexport default routes;")},m(t,n){U(e,t,n),u(t,r,n),o=!0},p:t,i(t){o||(D(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){X(e,t),t&&l(r)}}}return new class extends W{constructor(t){super(),Y(this,t,null,kt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map