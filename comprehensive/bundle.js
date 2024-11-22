var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function d(){return f("")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function $(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function g(t,n){return new t(n)}let v;function y(t){v=t}function b(){if(!v)throw new Error("Function called outside component initialization");return v}function _(){const t=b();return(n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const x=[],E=[];let k=[];const j=[],S=Promise.resolve();let O=!1;function L(){O||(O=!0,S.then(P))}function q(t){k.push(t)}const A=new Set;let C=0;function P(){if(0!==C)return;const t=v;do{try{for(;C<x.length;){const t=x[C];C++,y(t),N(t.$$)}}catch(t){throw x.length=0,C=0,t}for(y(null),x.length=0,C=0;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];A.has(n)||(A.add(n),n())}k.length=0}while(x.length);for(;j.length;)j.pop()();O=!1,A.clear(),y(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const T=new Set;let R;function z(){R={r:0,c:[],p:R}}function M(){R.r||r(R.c),R=R.p}function D(t,n){t&&t.i&&(T.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),R.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function H(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function I(t){return"object"==typeof t&&null!==t?t:{}}function B(t){t&&t.c()}function X(t,n,o,c){const{fragment:i,after_update:u}=t.$$;i&&i.m(n,o),c||q((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(q)}function Y(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];k.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),k=n}(e.after_update),r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function U(n,e,s,c,i,u,a,f=[-1]){const p=v;y(n);const d=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};a&&a(d.root);let h=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(x.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();e.intro&&D(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),P()}y(p)}class W{$destroy(){Y(this,1),this.$destroy=t}$on(n,e){if(!s(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=[];function J(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!G.length;for(const t of r)t[1](),G.push(t,n);if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&o&&(o(),o=null)}}}}function Q(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return J(o,(n=>{let o=!1;const l=[];let a=0,f=t;const p=()=>{if(a)return;f();const o=e(c?l[0]:l,n);u?n(o):f=s(o)?o:t},d=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{l[e]=t,a&=~(1<<e),o&&p()}),(()=>{a|=1<<e}))));return o=!0,p(),function(){r(d),f(),o=!1}}))}function V(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=g(c,i()),e.$on("routeEvent",t[7])),{c(){e&&B(e.$$.fragment),o=d()},m(t,n){e&&X(e,t,n),u(t,o,n),r=!0},p(t,n){const r=4&n?H(s,[I(t[2])]):{};if(1&n&&c!==(c=t[0])){if(e){z();const t=e;F(t.$$.fragment,1,0,(()=>{Y(t,1)})),M()}c?(e=g(c,i()),e.$on("routeEvent",t[7]),B(e.$$.fragment),D(e.$$.fragment,1),X(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&D(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&Y(e,t)}}}function Z(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=g(c,i()),e.$on("routeEvent",t[6])),{c(){e&&B(e.$$.fragment),o=d()},m(t,n){e&&X(e,t,n),u(t,o,n),r=!0},p(t,n){const r=6&n?H(s,[2&n&&{params:t[1]},4&n&&I(t[2])]):{};if(1&n&&c!==(c=t[0])){if(e){z();const t=e;F(t.$$.fragment,1,0,(()=>{Y(t,1)})),M()}c?(e=g(c,i()),e.$on("routeEvent",t[6]),B(e.$$.fragment),D(e.$$.fragment,1),X(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&D(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&Y(e,t)}}}function tt(t){let n,e,o,r;const s=[Z,V],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=d()},m(t,e){c[n].m(t,e),u(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(z(),F(c[u],1,1,(()=>{c[u]=null})),M(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),D(e,1),e.m(o.parentNode,o))},i(t){r||(D(e),r=!0)},o(t){F(e),r=!1},d(t){c[n].d(t),t&&l(o)}}}function nt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const et=J(null,(function(t){t(nt());const n=()=>{t(nt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Q(et,(t=>t.location)),Q(et,(t=>t.querystring));const ot=K(void 0);function rt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let u=null,l=null,a={};const f=_();async function p(t,n){await(L(),S),f(t,n)}let d=null,h=null;var m;s&&(h=t=>{d=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),m=()=>{var t;(t=d)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let $=null,g=null;const v=et.subscribe((async t=>{$=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,u=null),g=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=i[n].component;if(g!=s){s.loading?(e(0,u=s.loading),g=s,e(1,l=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l}))):(e(0,u=null),g=null);const n=await s();if(t!=$)return;e(0,u=n&&n.default||n),g=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=i[n].props),void p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:l})).then((()=>{ot.set(l)}))}e(0,u=null),g=null,ot.set(void 0)}));return function(t){b().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){w.call(this,t,n)},function(n){w.call(this,t,n)}]}class st extends W{constructor(t){super(),U(this,t,rt,tt,c,{routes:3,prefix:4,restoreScrollState:5})}}function ct(n){let e;return{c(){e=a("nav"),e.innerHTML='<p class="name svelte-9p72x6">MESSP</p>',h(e,"class","svelte-9p72x6")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function it(t){let n;function e(){n.scrollTop=0}var o;return o=()=>(n=document.querySelector("nav").parentElement,window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),b().$$.on_mount.push(o),[]}class ut extends W{constructor(t){super(),U(this,t,it,ct,c,{})}}function lt(n){let e;return{c(){e=a("div"),e.innerHTML='<a href="/#/" class="svelte-9ufqsl"><p class="svelte-9ufqsl">Back Home</p></a>',h(e,"class","svelte-9ufqsl")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class at extends W{constructor(t){super(),U(this,t,null,lt,c,{})}}function ft(n){let e,o;return{c(){e=a("p"),o=f(n[0]),h(e,"class","svelte-6yez5t")},m(t,n){u(t,e,n),i(e,o)},p(t,[n]){1&n&&m(o,t[0])},i:t,o:t,d(t){t&&l(e)}}}function pt(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}class dt extends W{constructor(t){super(),U(this,t,pt,ft,c,{name:0})}}function ht(n){let e,o;return{c(){e=a("p"),o=f(n[0]),h(e,"class","svelte-16fyp0a")},m(t,n){u(t,e,n),i(e,o)},p(t,[n]){1&n&&m(o,t[0])},i:t,o:t,d(t){t&&l(e)}}}function mt(t,n,e){let{descript:o}=n;return t.$$set=t=>{"descript"in t&&e(0,o=t.descript)},[o]}class $t extends W{constructor(t){super(),U(this,t,mt,ht,c,{descript:0})}}function gt(t,n,e){const o=t.slice();return o[1]=n[e],o}function vt(t){let n,e,o;return{c(){n=a("div"),e=a("div"),o=p(),$(e,"background-image","url('"+t[1]+"')"),h(e,"class","image svelte-cw1hv7"),h(n,"class","pic svelte-cw1hv7")},m(t,r){u(t,n,r),i(n,e),i(n,o)},p(t,n){1&n&&$(e,"background-image","url('"+t[1]+"')")},d(t){t&&l(n)}}}function yt(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=vt(gt(n,o,t));return{c(){e=a("div");for(let t=0;t<r.length;t+=1)r[t].c();h(e,"class","pics_container svelte-cw1hv7")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,null)},p(t,[n]){if(1&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const c=gt(t,o,s);r[s]?r[s].p(c,n):(r[s]=vt(c),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function bt(t,n,e){let{images:o=[]}=n;return t.$$set=t=>{"images"in t&&e(0,o=t.images)},[o]}class _t extends W{constructor(t){super(),U(this,t,bt,yt,c,{images:0})}}function wt(n){let e,o,r,s,c,f,d,m,$,g,v;return o=new ut({}),s=new at({}),f=new dt({props:{name:"Comprehensive Project Solutions"}}),m=new $t({props:{descript:"Simplify your projects with our one-stop solutions for all your needs. From planning to procurement and delivery, we provide seamless and efficient support for projects of any scale."}}),g=new _t({props:{images:n[0]}}),{c(){e=a("div"),B(o.$$.fragment),r=p(),B(s.$$.fragment),c=p(),B(f.$$.fragment),d=p(),B(m.$$.fragment),$=p(),B(g.$$.fragment),h(e,"id","container"),h(e,"class","svelte-1lxivbz")},m(t,n){u(t,e,n),X(o,e,null),i(e,r),X(s,e,null),i(e,c),X(f,e,null),i(e,d),X(m,e,null),i(e,$),X(g,e,null),v=!0},p:t,i(t){v||(D(o.$$.fragment,t),D(s.$$.fragment,t),D(f.$$.fragment,t),D(m.$$.fragment,t),D(g.$$.fragment,t),v=!0)},o(t){F(o.$$.fragment,t),F(s.$$.fragment,t),F(f.$$.fragment,t),F(m.$$.fragment,t),F(g.$$.fragment,t),v=!1},d(t){t&&l(e),Y(o),Y(s),Y(f),Y(m),Y(g)}}}function xt(t){return[["../images/comprehensive/comprehensive1.jpeg","../images/comprehensive/comprehensive2.jpeg"]]}class Et extends W{constructor(t){super(),U(this,t,xt,wt,c,{})}}function kt(n){let e,o,r;return e=new st({props:{routes:{"/":Et},basepath:"/Adamant_Trading"}}),{c(){B(e.$$.fragment),o=f("\n\n\nexport default routes;")},m(t,n){X(e,t,n),u(t,o,n),r=!0},p:t,i(t){r||(D(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){Y(e,t),t&&l(o)}}}return new class extends W{constructor(t){super(),U(this,t,null,kt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map