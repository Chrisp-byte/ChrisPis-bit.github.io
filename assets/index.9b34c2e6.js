var Yd=Object.defineProperty;var Zd=(n,e,t)=>e in n?Yd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oe=(n,e,t)=>(Zd(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ta(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jd=Ta(Kd);function cu(n){return!!n||n===""}function Gr(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?th(i):Gr(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(lt(n))return n;if(ct(n))return n}}const Qd=/;(?![^(]*\))/g,eh=/:(.+)/;function th(n){const e={};return n.split(Qd).forEach(t=>{if(t){const i=t.split(eh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ws(n){let e="";if(lt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Ws(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pr=n=>lt(n)?n:n==null?"":Fe(n)||ct(n)&&(n.toString===fu||!Ue(n.toString))?JSON.stringify(n,uu,2):String(n),uu=(n,e)=>e&&e.__v_isRef?uu(n,e.value):Gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:du(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!Fe(e)&&!pu(e)?String(e):e,Qe={},Hi=[],Wt=()=>{},nh=()=>!1,ih=/^on[^a-z]/,qs=n=>ih.test(n),Aa=n=>n.startsWith("onUpdate:"),xt=Object.assign,Ca=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rh=Object.prototype.hasOwnProperty,He=(n,e)=>rh.call(n,e),Fe=Array.isArray,Gi=n=>js(n)==="[object Map]",du=n=>js(n)==="[object Set]",Ue=n=>typeof n=="function",lt=n=>typeof n=="string",La=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",hu=n=>ct(n)&&Ue(n.then)&&Ue(n.catch),fu=Object.prototype.toString,js=n=>fu.call(n),sh=n=>js(n).slice(8,-1),pu=n=>js(n)==="[object Object]",Ra=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=Ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},oh=/-(\w)/g,hn=Xs(n=>n.replace(oh,(e,t)=>t?t.toUpperCase():"")),ah=/\B([A-Z])/g,tr=Xs(n=>n.replace(ah,"-$1").toLowerCase()),$s=Xs(n=>n.charAt(0).toUpperCase()+n.slice(1)),fo=Xs(n=>n?`on${$s(n)}`:""),Dr=(n,e)=>!Object.is(n,e),po=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ns=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},lh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let rl;const ch=()=>rl||(rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let rn;class uh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&rn&&(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function dh(n,e=rn){e&&e.active&&e.effects.push(n)}const Pa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},mu=n=>(n.w&Wn)>0,gu=n=>(n.n&Wn)>0,hh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Wn},fh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];mu(r)&&!gu(r)?r.delete(n):e[t++]=r,r.w&=~Wn,r.n&=~Wn}e.length=t}},Ko=new WeakMap;let vr=0,Wn=1;const Jo=30;let Ht;const si=Symbol(""),Qo=Symbol("");class Da{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,dh(this,i)}run(){if(!this.active)return this.fn();let e=Ht,t=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,Bn=!0,Wn=1<<++vr,vr<=Jo?hh(this):sl(this),this.fn()}finally{vr<=Jo&&fh(this),Wn=1<<--vr,Ht=this.parent,Bn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(sl(this),this.onStop&&this.onStop(),this.active=!1)}}function sl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Bn=!0;const _u=[];function nr(){_u.push(Bn),Bn=!1}function ir(){const n=_u.pop();Bn=n===void 0?!0:n}function Pt(n,e,t){if(Bn&&Ht){let i=Ko.get(n);i||Ko.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Pa()),vu(r)}}function vu(n,e){let t=!1;vr<=Jo?gu(n)||(n.n|=Wn,t=!mu(n)):t=!n.has(Ht),t&&(n.add(Ht),Ht.deps.push(n))}function wn(n,e,t,i,r,s){const a=Ko.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(n)?Ra(t)&&o.push(a.get("length")):(o.push(a.get(si)),Gi(n)&&o.push(a.get(Qo)));break;case"delete":Fe(n)||(o.push(a.get(si)),Gi(n)&&o.push(a.get(Qo)));break;case"set":Gi(n)&&o.push(a.get(si));break}if(o.length===1)o[0]&&ea(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ea(Pa(l))}}function ea(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&ol(i);for(const i of t)i.computed||ol(i)}function ol(n,e){(n!==Ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ph=Ta("__proto__,__v_isRef,__isVue"),xu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(La)),mh=Ia(),gh=Ia(!1,!0),_h=Ia(!0),al=vh();function vh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){nr();const i=je(this)[e].apply(this,t);return ir(),i}}),n}function Ia(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Fh:wu:e?Su:Mu).get(i))return i;const a=Fe(i);if(!n&&a&&He(al,r))return Reflect.get(al,r,s);const o=Reflect.get(i,r,s);return(La(r)?xu.has(r):ph(r))||(n||Pt(i,"get",r),e)?o:pt(o)?a&&Ra(r)?o:o.value:ct(o)?n?Eu(o):Vr(o):o}}const xh=yu(),yh=yu(!0);function yu(n=!1){return function(t,i,r,s){let a=t[i];if(Ir(a)&&pt(a)&&!pt(r))return!1;if(!n&&!Ir(r)&&(ta(r)||(r=je(r),a=je(a)),!Fe(t)&&pt(a)&&!pt(r)))return a.value=r,!0;const o=Fe(t)&&Ra(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?Dr(r,a)&&wn(t,"set",i,r):wn(t,"add",i,r)),l}}function bh(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&wn(n,"delete",e,void 0),i}function Mh(n,e){const t=Reflect.has(n,e);return(!La(e)||!xu.has(e))&&Pt(n,"has",e),t}function Sh(n){return Pt(n,"iterate",Fe(n)?"length":si),Reflect.ownKeys(n)}const bu={get:mh,set:xh,deleteProperty:bh,has:Mh,ownKeys:Sh},wh={get:_h,set(n,e){return!0},deleteProperty(n,e){return!0}},Eh=xt({},bu,{get:gh,set:yh}),Fa=n=>n,Ys=n=>Reflect.getPrototypeOf(n);function Qr(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:a}=Ys(r),o=i?Fa:t?Ua:Fr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function es(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ts(n,e=!1){return n=n.__v_raw,!e&&Pt(je(n),"iterate",si),Reflect.get(n,"size",n)}function ll(n){n=je(n);const e=je(this);return Ys(e).has.call(e,n)||(e.add(n),wn(e,"add",n,n)),this}function cl(n,e){e=je(e);const t=je(this),{has:i,get:r}=Ys(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Dr(e,a)&&wn(t,"set",n,e):wn(t,"add",n,e),this}function ul(n){const e=je(this),{has:t,get:i}=Ys(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&wn(e,"delete",n,void 0),s}function dl(){const n=je(this),e=n.size!==0,t=n.clear();return e&&wn(n,"clear",void 0,void 0),t}function ns(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?Fa:n?Ua:Fr;return!n&&Pt(o,"iterate",si),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function is(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=Gi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Fa:e?Ua:Fr;return!e&&Pt(s,"iterate",l?Qo:si),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function An(n){return function(...e){return n==="delete"?!1:this}}function Th(){const n={get(s){return Qr(this,s)},get size(){return ts(this)},has:es,add:ll,set:cl,delete:ul,clear:dl,forEach:ns(!1,!1)},e={get(s){return Qr(this,s,!1,!0)},get size(){return ts(this)},has:es,add:ll,set:cl,delete:ul,clear:dl,forEach:ns(!1,!0)},t={get(s){return Qr(this,s,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ns(!0,!1)},i={get(s){return Qr(this,s,!0,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=is(s,!1,!1),t[s]=is(s,!0,!1),e[s]=is(s,!1,!0),i[s]=is(s,!0,!0)}),[n,t,e,i]}const[Ah,Ch,Lh,Rh]=Th();function Na(n,e){const t=e?n?Rh:Lh:n?Ch:Ah;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const Ph={get:Na(!1,!1)},Dh={get:Na(!1,!0)},Ih={get:Na(!0,!1)},Mu=new WeakMap,Su=new WeakMap,wu=new WeakMap,Fh=new WeakMap;function Nh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oh(n){return n.__v_skip||!Object.isExtensible(n)?0:Nh(sh(n))}function Vr(n){return Ir(n)?n:Oa(n,!1,bu,Ph,Mu)}function Uh(n){return Oa(n,!1,Eh,Dh,Su)}function Eu(n){return Oa(n,!0,wh,Ih,wu)}function Oa(n,e,t,i,r){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Oh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vi(n){return Ir(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ir(n){return!!(n&&n.__v_isReadonly)}function ta(n){return!!(n&&n.__v_isShallow)}function Tu(n){return Vi(n)||Ir(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Au(n){return Ns(n,"__v_skip",!0),n}const Fr=n=>ct(n)?Vr(n):n,Ua=n=>ct(n)?Eu(n):n;function Cu(n){Bn&&Ht&&(n=je(n),vu(n.dep||(n.dep=Pa())))}function Lu(n,e){n=je(n),n.dep&&ea(n.dep)}function pt(n){return!!(n&&n.__v_isRef===!0)}function xr(n){return Ru(n,!1)}function zh(n){return Ru(n,!0)}function Ru(n,e){return pt(n)?n:new kh(n,e)}class kh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Fr(e)}get value(){return Cu(this),this._value}set value(e){e=this.__v_isShallow?e:je(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Fr(e),Lu(this))}}function qt(n){return pt(n)?n.value:n}const Bh={get:(n,e,t)=>qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return pt(r)&&!pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Pu(n){return Vi(n)?n:new Proxy(n,Bh)}class Hh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Da(e,()=>{this._dirty||(this._dirty=!0,Lu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return Cu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gh(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=Wt):(i=n.get,r=n.set),new Hh(i,r,s||!r,t)}function Hn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Zs(s,e,t)}return r}function jt(n,e,t,i){if(Ue(n)){const s=Hn(n,e,t,i);return s&&hu(s)&&s.catch(a=>{Zs(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(jt(n[s],e,t,i));return r}function Zs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hn(l,null,10,[n,a,o]);return}}Vh(n,t,r,i)}function Vh(n,e,t,i=!0){console.error(n)}let Os=!1,na=!1;const Rt=[];let bn=0;const Sr=[];let yr=null,Ni=0;const wr=[];let On=null,Oi=0;const Du=Promise.resolve();let za=null,ia=null;function Iu(n){const e=za||Du;return n?e.then(this?n.bind(this):n):e}function Wh(n){let e=bn+1,t=Rt.length;for(;e<t;){const i=e+t>>>1;Nr(Rt[i])<n?e=i+1:t=i}return e}function Fu(n){(!Rt.length||!Rt.includes(n,Os&&n.allowRecurse?bn+1:bn))&&n!==ia&&(n.id==null?Rt.push(n):Rt.splice(Wh(n.id),0,n),Nu())}function Nu(){!Os&&!na&&(na=!0,za=Du.then(zu))}function qh(n){const e=Rt.indexOf(n);e>bn&&Rt.splice(e,1)}function Ou(n,e,t,i){Fe(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Nu()}function jh(n){Ou(n,yr,Sr,Ni)}function Xh(n){Ou(n,On,wr,Oi)}function Ks(n,e=null){if(Sr.length){for(ia=e,yr=[...new Set(Sr)],Sr.length=0,Ni=0;Ni<yr.length;Ni++)yr[Ni]();yr=null,Ni=0,ia=null,Ks(n,e)}}function Uu(n){if(Ks(),wr.length){const e=[...new Set(wr)];if(wr.length=0,On){On.push(...e);return}for(On=e,On.sort((t,i)=>Nr(t)-Nr(i)),Oi=0;Oi<On.length;Oi++)On[Oi]();On=null,Oi=0}}const Nr=n=>n.id==null?1/0:n.id;function zu(n){na=!1,Os=!0,Ks(n),Rt.sort((t,i)=>Nr(t)-Nr(i));const e=Wt;try{for(bn=0;bn<Rt.length;bn++){const t=Rt[bn];t&&t.active!==!1&&Hn(t,null,14)}}finally{bn=0,Rt.length=0,Uu(),Os=!1,za=null,(Rt.length||Sr.length||wr.length)&&zu(n)}}function $h(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=i[u]||Qe;h&&(r=t.map(m=>m.trim())),d&&(r=t.map(lh))}let o,l=i[o=fo(e)]||i[o=fo(hn(e))];!l&&s&&(l=i[o=fo(tr(e))]),l&&jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,jt(c,n,6,r)}}function ku(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ue(n)){const l=c=>{const u=ku(c,e,!0);u&&(o=!0,xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):xt(a,s),i.set(n,a),a)}function Js(n,e){return!n||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,tr(e))||He(n,e))}let cn=null,Qs=null;function Us(n){const e=cn;return cn=n,Qs=n&&n.type.__scopeId||null,e}function Wr(n){Qs=n}function qr(){Qs=null}function ln(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ml(-1);const s=Us(e),a=n(...r);return Us(s),i._d&&Ml(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function mo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let f,_;const S=Us(n);try{if(t.shapeFlag&4){const E=r||i;f=sn(u.call(E,E,d,s,m,h,g)),_=l}else{const E=e;f=sn(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),_=e.props?l:Yh(l)}}catch(E){Tr.length=0,Zs(E,n,1),f=De(ui)}let L=f;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:w}=L;E.length&&w&7&&(a&&E.some(Aa)&&(_=Zh(_,a)),L=Xi(L,_))}return t.dirs&&(L=Xi(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),f=L,Us(S),f}const Yh=n=>{let e;for(const t in n)(t==="class"||t==="style"||qs(t))&&((e||(e={}))[t]=n[t]);return e},Zh=(n,e)=>{const t={};for(const i in n)(!Aa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Kh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(a[h]!==i[h]&&!Js(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hl(i,a,c):!0:!!a;return!1}function hl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Js(t,s))return!0}return!1}function Jh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Qh=n=>n.__isSuspense;function ef(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Xh(n)}function Cs(n,e){if(dt){let t=dt.provides;const i=dt.parent&&dt.parent.provides;i===t&&(t=dt.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=dt||cn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const fl={};function Ls(n,e,t){return Bu(n,e,t)}function Bu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Qe){const o=dt;let l,c=!1,u=!1;if(pt(n)?(l=()=>n.value,c=ta(n)):Vi(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(_=>Vi(_)||ta(_)),l=()=>n.map(_=>{if(pt(_))return _.value;if(Vi(_))return ki(_);if(Ue(_))return Hn(_,o,2)})):Ue(n)?e?l=()=>Hn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),jt(n,o,3,[h])}:l=Wt,e&&i){const _=l;l=()=>ki(_())}let d,h=_=>{d=f.onStop=()=>{Hn(_,o,4)}};if(Ur)return h=Wt,e?t&&jt(e,o,3,[l(),u?[]:void 0,h]):l(),Wt;let m=u?[]:fl;const g=()=>{if(!!f.active)if(e){const _=f.run();(i||c||(u?_.some((S,L)=>Dr(S,m[L])):Dr(_,m)))&&(d&&d(),jt(e,o,3,[_,m===fl?void 0:m,h]),m=_)}else f.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>Mt(g,o&&o.suspense):p=()=>jh(g);const f=new Da(l,p);return e?t?g():m=f.run():r==="post"?Mt(f.run.bind(f),o&&o.suspense):f.run(),()=>{f.stop(),o&&o.scope&&Ca(o.scope.effects,f)}}function tf(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?Hu(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const a=dt;$i(this);const o=Bu(r,s.bind(i),t);return a?$i(a):oi(),o}function Hu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function ki(n,e){if(!ct(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),pt(n))ki(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)ki(n[t],e);else if(du(n)||Gi(n))n.forEach(t=>{ki(t,e)});else if(pu(n))for(const t in n)ki(n[t],e);return n}function Zt(n){return Ue(n)?{setup:n,name:n.name}:n}const Rs=n=>!!n.type.__asyncLoader,Gu=n=>n.type.__isKeepAlive;function nf(n,e){Vu(n,"a",e)}function rf(n,e){Vu(n,"da",e)}function Vu(n,e,t=dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(eo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Gu(r.parent.vnode)&&sf(i,e,t,r),r=r.parent}}function sf(n,e,t,i){const r=eo(e,n,i,!0);ka(()=>{Ca(i[e],r)},t)}function eo(n,e,t=dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;nr(),$i(t);const o=jt(e,t,n,a);return oi(),ir(),o});return i?r.unshift(s):r.push(s),s}}const En=n=>(e,t=dt)=>(!Ur||n==="sp")&&eo(n,e,t),of=En("bm"),to=En("m"),af=En("bu"),lf=En("u"),cf=En("bum"),ka=En("um"),uf=En("sp"),df=En("rtg"),hf=En("rtc");function ff(n,e=dt){eo("ec",n,e)}function jn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(nr(),jt(l,t,8,[n.el,o,n,e]),ir())}}const Wu="components";function Ba(n,e){return mf(Wu,n,!0,e)||n}const pf=Symbol();function mf(n,e,t=!0,i=!1){const r=cn||dt;if(r){const s=r.type;if(n===Wu){const o=Xf(s,!1);if(o&&(o===e||o===hn(e)||o===$s(hn(e))))return s}const a=pl(r[n]||s[n],e)||pl(r.appContext[n],e);return!a&&i?s:a}}function pl(n,e){return n&&(n[e]||n[hn(e)]||n[$s(hn(e))])}function zs(n,e,t,i){let r;const s=t&&t[i];if(Fe(n)||lt(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const ra=n=>n?td(n)?qa(n)||n.proxy:ra(n.parent):null,ks=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ra(n.parent),$root:n=>ra(n.root),$emit:n=>n.emit,$options:n=>ju(n),$forceUpdate:n=>n.f||(n.f=()=>Fu(n.update)),$nextTick:n=>n.n||(n.n=Iu.bind(n.proxy)),$watch:n=>tf.bind(n)}),gf={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Qe&&He(i,e))return a[e]=1,i[e];if(r!==Qe&&He(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return a[e]=3,s[e];if(t!==Qe&&He(t,e))return a[e]=4,t[e];sa&&(a[e]=0)}}const u=ks[e];let d,h;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==Qe&&He(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Qe&&He(r,e)?(r[e]=t,!0):i!==Qe&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Qe&&He(n,a)||e!==Qe&&He(e,a)||(o=s[0])&&He(o,a)||He(i,a)||He(ks,a)||He(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let sa=!0;function _f(n){const e=ju(n),t=n.proxy,i=n.ctx;sa=!1,e.beforeCreate&&ml(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:f,beforeDestroy:_,beforeUnmount:S,destroyed:L,unmounted:E,render:w,renderTracked:P,renderTriggered:O,errorCaptured:M,serverPrefetch:A,expose:X,inheritAttrs:B,components:pe,directives:he,filters:z}=e;if(c&&vf(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const q in a){const j=a[q];Ue(j)&&(i[q]=j.bind(t))}if(r){const q=r.call(t,t);ct(q)&&(n.data=Vr(q))}if(sa=!0,s)for(const q in s){const j=s[q],V=Ue(j)?j.bind(t,t):Ue(j.get)?j.get.bind(t,t):Wt,Z=!Ue(j)&&Ue(j.set)?j.set.bind(t):Wt,ae=Et({get:V,set:Z});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ae.value,set:ie=>ae.value=ie})}if(o)for(const q in o)qu(o[q],i,t,q);if(l){const q=Ue(l)?l.call(t):l;Reflect.ownKeys(q).forEach(j=>{Cs(j,q[j])})}u&&ml(u,n,"c");function G(q,j){Fe(j)?j.forEach(V=>q(V.bind(t))):j&&q(j.bind(t))}if(G(of,d),G(to,h),G(af,m),G(lf,g),G(nf,p),G(rf,f),G(ff,M),G(hf,P),G(df,O),G(cf,S),G(ka,E),G(uf,A),Fe(X))if(X.length){const q=n.exposed||(n.exposed={});X.forEach(j=>{Object.defineProperty(q,j,{get:()=>t[j],set:V=>t[j]=V})})}else n.exposed||(n.exposed={});w&&n.render===Wt&&(n.render=w),B!=null&&(n.inheritAttrs=B),pe&&(n.components=pe),he&&(n.directives=he)}function vf(n,e,t=Wt,i=!1){Fe(n)&&(n=oa(n));for(const r in n){const s=n[r];let a;ct(s)?"default"in s?a=Gn(s.from||r,s.default,!0):a=Gn(s.from||r):a=Gn(s),pt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ml(n,e,t){jt(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qu(n,e,t,i){const r=i.includes(".")?Hu(t,i):()=>t[i];if(lt(n)){const s=e[n];Ue(s)&&Ls(r,s)}else if(Ue(n))Ls(r,n.bind(t));else if(ct(n))if(Fe(n))n.forEach(s=>qu(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&Ls(r,s,n)}}function ju(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Bs(l,c,a,!0)),Bs(l,e,a)),s.set(e,l),l}function Bs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Bs(n,s,t,!0),r&&r.forEach(a=>Bs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=xf[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const xf={data:gl,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Kn,directives:Kn,watch:bf,provide:gl,inject:yf};function gl(n,e){return e?n?function(){return xt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function yf(n,e){return Kn(oa(n),oa(e))}function oa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _t(n,e){return n?[...new Set([].concat(n,e))]:e}function Kn(n,e){return n?xt(xt(Object.create(null),n),e):e}function bf(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=_t(n[i],e[i]);return t}function Mf(n,e,t,i=!1){const r={},s={};Ns(s,no,1),n.propsDefaults=Object.create(null),Xu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Uh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Sf(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Js(n.emitsOptions,h))continue;const m=e[h];if(l)if(He(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=hn(h);r[g]=aa(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Xu(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!He(e,d)&&((u=tr(d))===d||!He(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=aa(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!He(e,d)&&!0)&&(delete s[d],c=!0)}c&&wn(n,"set","$attrs")}function Xu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(As(l))continue;const c=e[l];let u;r&&He(r,u=hn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Js(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||Qe;for(let u=0;u<s.length;u++){const d=s[u];t[d]=aa(r,l,d,c[d],n,!He(c,d))}}return a}function aa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=He(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?i=c[t]:($i(r),i=c[t]=l.call(null,e),oi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===tr(t))&&(i=!0))}return i}function $u(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ue(n)){const u=d=>{l=!0;const[h,m]=$u(d,e,!0);xt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,Hi),Hi;if(Fe(s))for(let u=0;u<s.length;u++){const d=hn(s[u]);_l(d)&&(a[d]=Qe)}else if(s)for(const u in s){const d=hn(u);if(_l(d)){const h=s[u],m=a[d]=Fe(h)||Ue(h)?{type:h}:h;if(m){const g=yl(Boolean,m.type),p=yl(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||He(m,"default"))&&o.push(d)}}}const c=[a,o];return i.set(n,c),c}function _l(n){return n[0]!=="$"}function vl(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function xl(n,e){return vl(n)===vl(e)}function yl(n,e){return Fe(e)?e.findIndex(t=>xl(t,n)):Ue(e)&&xl(e,n)?0:-1}const Yu=n=>n[0]==="_"||n==="$stable",Ha=n=>Fe(n)?n.map(sn):[sn(n)],wf=(n,e,t)=>{if(e._n)return e;const i=ln((...r)=>Ha(e(...r)),t);return i._c=!1,i},Zu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Yu(r))continue;const s=n[r];if(Ue(s))e[r]=wf(r,s,i);else if(s!=null){const a=Ha(s);e[r]=()=>a}}},Ku=(n,e)=>{const t=Ha(e);n.slots.default=()=>t},Ef=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),Ns(e,"_",t)):Zu(e,n.slots={})}else n.slots={},e&&Ku(n,e);Ns(n.slots,no,1)},Tf=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(xt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Zu(e,r)),a=e}else e&&(Ku(n,e),a={default:1});if(s)for(const o in r)!Yu(o)&&!(o in a)&&delete r[o]};function Ju(){return{app:null,config:{isNativeTag:nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Af=0;function Cf(n,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!ct(r)&&(r=null);const s=Ju(),a=new Set;let o=!1;const l=s.app={_uid:Af++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yf,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ue(c.install)?(a.add(c),c.install(l,...u)):Ue(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const h=De(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,d),o=!0,l._container=c,c.__vue_app__=l,qa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function la(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,m)=>la(h,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Rs(i)&&!r)return;const s=i.shapeFlag&4?qa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(lt(c)?(u[c]=null,He(d,c)&&(d[c]=null)):pt(c)&&(c.value=null)),Ue(l))Hn(l,o,12,[a,u]);else{const h=lt(l),m=pt(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?Fe(p)&&Ca(p,s):Fe(p)?p.includes(s)||p.push(s):h?(u[l]=[s],He(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,He(d,l)&&(d[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,Mt(g,t)):g()}}}const Mt=ef;function Lf(n){return Rf(n)}function Rf(n,e){const t=ch();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Wt,cloneNode:g,insertStaticContent:p}=n,f=(y,T,U,K=null,J=null,ne=null,se=!1,le=null,de=!!T.dynamicChildren)=>{if(y===T)return;y&&!hr(y,T)&&(K=ce(y),re(y,J,ne,!0),y=null),T.patchFlag===-2&&(de=!1,T.dynamicChildren=null);const{type:x,ref:v,shapeFlag:R}=T;switch(x){case Va:_(y,T,U,K);break;case ui:S(y,T,U,K);break;case Ps:y==null&&L(T,U,K,se);break;case vt:he(y,T,U,K,J,ne,se,le,de);break;default:R&1?P(y,T,U,K,J,ne,se,le,de):R&6?z(y,T,U,K,J,ne,se,le,de):(R&64||R&128)&&x.process(y,T,U,K,J,ne,se,le,de,ue)}v!=null&&J&&la(v,y&&y.ref,ne,T||y,!T)},_=(y,T,U,K)=>{if(y==null)i(T.el=o(T.children),U,K);else{const J=T.el=y.el;T.children!==y.children&&c(J,T.children)}},S=(y,T,U,K)=>{y==null?i(T.el=l(T.children||""),U,K):T.el=y.el},L=(y,T,U,K)=>{[y.el,y.anchor]=p(y.children,T,U,K,y.el,y.anchor)},E=({el:y,anchor:T},U,K)=>{let J;for(;y&&y!==T;)J=h(y),i(y,U,K),y=J;i(T,U,K)},w=({el:y,anchor:T})=>{let U;for(;y&&y!==T;)U=h(y),r(y),y=U;r(T)},P=(y,T,U,K,J,ne,se,le,de)=>{se=se||T.type==="svg",y==null?O(T,U,K,J,ne,se,le,de):X(y,T,J,ne,se,le,de)},O=(y,T,U,K,J,ne,se,le)=>{let de,x;const{type:v,props:R,shapeFlag:H,transition:Y,patchFlag:te,dirs:we}=y;if(y.el&&g!==void 0&&te===-1)de=y.el=g(y.el);else{if(de=y.el=a(y.type,ne,R&&R.is,R),H&8?u(de,y.children):H&16&&A(y.children,de,null,K,J,ne&&v!=="foreignObject",se,le),we&&jn(y,null,K,"created"),R){for(const ve in R)ve!=="value"&&!As(ve)&&s(de,ve,null,R[ve],ne,y.children,K,J,oe);"value"in R&&s(de,"value",null,R.value),(x=R.onVnodeBeforeMount)&&tn(x,K,y)}M(de,y,y.scopeId,se,K)}we&&jn(y,null,K,"beforeMount");const N=(!J||J&&!J.pendingBranch)&&Y&&!Y.persisted;N&&Y.beforeEnter(de),i(de,T,U),((x=R&&R.onVnodeMounted)||N||we)&&Mt(()=>{x&&tn(x,K,y),N&&Y.enter(de),we&&jn(y,null,K,"mounted")},J)},M=(y,T,U,K,J)=>{if(U&&m(y,U),K)for(let ne=0;ne<K.length;ne++)m(y,K[ne]);if(J){let ne=J.subTree;if(T===ne){const se=J.vnode;M(y,se,se.scopeId,se.slotScopeIds,J.parent)}}},A=(y,T,U,K,J,ne,se,le,de=0)=>{for(let x=de;x<y.length;x++){const v=y[x]=le?zn(y[x]):sn(y[x]);f(null,v,T,U,K,J,ne,se,le)}},X=(y,T,U,K,J,ne,se)=>{const le=T.el=y.el;let{patchFlag:de,dynamicChildren:x,dirs:v}=T;de|=y.patchFlag&16;const R=y.props||Qe,H=T.props||Qe;let Y;U&&Xn(U,!1),(Y=H.onVnodeBeforeUpdate)&&tn(Y,U,T,y),v&&jn(T,y,U,"beforeUpdate"),U&&Xn(U,!0);const te=J&&T.type!=="foreignObject";if(x?B(y.dynamicChildren,x,le,U,K,te,ne):se||V(y,T,le,null,U,K,te,ne,!1),de>0){if(de&16)pe(le,T,R,H,U,K,J);else if(de&2&&R.class!==H.class&&s(le,"class",null,H.class,J),de&4&&s(le,"style",R.style,H.style,J),de&8){const we=T.dynamicProps;for(let N=0;N<we.length;N++){const ve=we[N],Me=R[ve],Se=H[ve];(Se!==Me||ve==="value")&&s(le,ve,Me,Se,J,y.children,U,K,oe)}}de&1&&y.children!==T.children&&u(le,T.children)}else!se&&x==null&&pe(le,T,R,H,U,K,J);((Y=H.onVnodeUpdated)||v)&&Mt(()=>{Y&&tn(Y,U,T,y),v&&jn(T,y,U,"updated")},K)},B=(y,T,U,K,J,ne,se)=>{for(let le=0;le<T.length;le++){const de=y[le],x=T[le],v=de.el&&(de.type===vt||!hr(de,x)||de.shapeFlag&70)?d(de.el):U;f(de,x,v,null,K,J,ne,se,!0)}},pe=(y,T,U,K,J,ne,se)=>{if(U!==K){for(const le in K){if(As(le))continue;const de=K[le],x=U[le];de!==x&&le!=="value"&&s(y,le,x,de,se,T.children,J,ne,oe)}if(U!==Qe)for(const le in U)!As(le)&&!(le in K)&&s(y,le,U[le],null,se,T.children,J,ne,oe);"value"in K&&s(y,"value",U.value,K.value)}},he=(y,T,U,K,J,ne,se,le,de)=>{const x=T.el=y?y.el:o(""),v=T.anchor=y?y.anchor:o("");let{patchFlag:R,dynamicChildren:H,slotScopeIds:Y}=T;Y&&(le=le?le.concat(Y):Y),y==null?(i(x,U,K),i(v,U,K),A(T.children,U,v,J,ne,se,le,de)):R>0&&R&64&&H&&y.dynamicChildren?(B(y.dynamicChildren,H,U,J,ne,se,le),(T.key!=null||J&&T===J.subTree)&&Ga(y,T,!0)):V(y,T,U,v,J,ne,se,le,de)},z=(y,T,U,K,J,ne,se,le,de)=>{T.slotScopeIds=le,y==null?T.shapeFlag&512?J.ctx.activate(T,U,K,se,de):Q(T,U,K,J,ne,se,de):G(y,T,de)},Q=(y,T,U,K,J,ne,se)=>{const le=y.component=Gf(y,K,J);if(Gu(y)&&(le.ctx.renderer=ue),Vf(le),le.asyncDep){if(J&&J.registerDep(le,q),!y.el){const de=le.subTree=De(ui);S(null,de,T,U)}return}q(le,y,T,U,J,ne,se)},G=(y,T,U)=>{const K=T.component=y.component;if(Kh(y,T,U))if(K.asyncDep&&!K.asyncResolved){j(K,T,U);return}else K.next=T,qh(K.update),K.update();else T.el=y.el,K.vnode=T},q=(y,T,U,K,J,ne,se)=>{const le=()=>{if(y.isMounted){let{next:v,bu:R,u:H,parent:Y,vnode:te}=y,we=v,N;Xn(y,!1),v?(v.el=te.el,j(y,v,se)):v=te,R&&po(R),(N=v.props&&v.props.onVnodeBeforeUpdate)&&tn(N,Y,v,te),Xn(y,!0);const ve=mo(y),Me=y.subTree;y.subTree=ve,f(Me,ve,d(Me.el),ce(Me),y,J,ne),v.el=ve.el,we===null&&Jh(y,ve.el),H&&Mt(H,J),(N=v.props&&v.props.onVnodeUpdated)&&Mt(()=>tn(N,Y,v,te),J)}else{let v;const{el:R,props:H}=T,{bm:Y,m:te,parent:we}=y,N=Rs(T);if(Xn(y,!1),Y&&po(Y),!N&&(v=H&&H.onVnodeBeforeMount)&&tn(v,we,T),Xn(y,!0),R&&xe){const ve=()=>{y.subTree=mo(y),xe(R,y.subTree,y,J,null)};N?T.type.__asyncLoader().then(()=>!y.isUnmounted&&ve()):ve()}else{const ve=y.subTree=mo(y);f(null,ve,U,K,y,J,ne),T.el=ve.el}if(te&&Mt(te,J),!N&&(v=H&&H.onVnodeMounted)){const ve=T;Mt(()=>tn(v,we,ve),J)}(T.shapeFlag&256||we&&Rs(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&Mt(y.a,J),y.isMounted=!0,T=U=K=null}},de=y.effect=new Da(le,()=>Fu(x),y.scope),x=y.update=()=>de.run();x.id=y.uid,Xn(y,!0),x()},j=(y,T,U)=>{T.component=y;const K=y.vnode.props;y.vnode=T,y.next=null,Sf(y,T.props,K,U),Tf(y,T.children,U),nr(),Ks(void 0,y.update),ir()},V=(y,T,U,K,J,ne,se,le,de=!1)=>{const x=y&&y.children,v=y?y.shapeFlag:0,R=T.children,{patchFlag:H,shapeFlag:Y}=T;if(H>0){if(H&128){ae(x,R,U,K,J,ne,se,le,de);return}else if(H&256){Z(x,R,U,K,J,ne,se,le,de);return}}Y&8?(v&16&&oe(x,J,ne),R!==x&&u(U,R)):v&16?Y&16?ae(x,R,U,K,J,ne,se,le,de):oe(x,J,ne,!0):(v&8&&u(U,""),Y&16&&A(R,U,K,J,ne,se,le,de))},Z=(y,T,U,K,J,ne,se,le,de)=>{y=y||Hi,T=T||Hi;const x=y.length,v=T.length,R=Math.min(x,v);let H;for(H=0;H<R;H++){const Y=T[H]=de?zn(T[H]):sn(T[H]);f(y[H],Y,U,null,J,ne,se,le,de)}x>v?oe(y,J,ne,!0,!1,R):A(T,U,K,J,ne,se,le,de,R)},ae=(y,T,U,K,J,ne,se,le,de)=>{let x=0;const v=T.length;let R=y.length-1,H=v-1;for(;x<=R&&x<=H;){const Y=y[x],te=T[x]=de?zn(T[x]):sn(T[x]);if(hr(Y,te))f(Y,te,U,null,J,ne,se,le,de);else break;x++}for(;x<=R&&x<=H;){const Y=y[R],te=T[H]=de?zn(T[H]):sn(T[H]);if(hr(Y,te))f(Y,te,U,null,J,ne,se,le,de);else break;R--,H--}if(x>R){if(x<=H){const Y=H+1,te=Y<v?T[Y].el:K;for(;x<=H;)f(null,T[x]=de?zn(T[x]):sn(T[x]),U,te,J,ne,se,le,de),x++}}else if(x>H)for(;x<=R;)re(y[x],J,ne,!0),x++;else{const Y=x,te=x,we=new Map;for(x=te;x<=H;x++){const Ce=T[x]=de?zn(T[x]):sn(T[x]);Ce.key!=null&&we.set(Ce.key,x)}let N,ve=0;const Me=H-te+1;let Se=!1,C=0;const me=new Array(Me);for(x=0;x<Me;x++)me[x]=0;for(x=Y;x<=R;x++){const Ce=y[x];if(ve>=Me){re(Ce,J,ne,!0);continue}let be;if(Ce.key!=null)be=we.get(Ce.key);else for(N=te;N<=H;N++)if(me[N-te]===0&&hr(Ce,T[N])){be=N;break}be===void 0?re(Ce,J,ne,!0):(me[be-te]=x+1,be>=C?C=be:Se=!0,f(Ce,T[be],U,null,J,ne,se,le,de),ve++)}const ge=Se?Pf(me):Hi;for(N=ge.length-1,x=Me-1;x>=0;x--){const Ce=te+x,be=T[Ce],Re=Ce+1<v?T[Ce+1].el:K;me[x]===0?f(null,be,U,Re,J,ne,se,le,de):Se&&(N<0||x!==ge[N]?ie(be,U,Re,2):N--)}}},ie=(y,T,U,K,J=null)=>{const{el:ne,type:se,transition:le,children:de,shapeFlag:x}=y;if(x&6){ie(y.component.subTree,T,U,K);return}if(x&128){y.suspense.move(T,U,K);return}if(x&64){se.move(y,T,U,ue);return}if(se===vt){i(ne,T,U);for(let R=0;R<de.length;R++)ie(de[R],T,U,K);i(y.anchor,T,U);return}if(se===Ps){E(y,T,U);return}if(K!==2&&x&1&&le)if(K===0)le.beforeEnter(ne),i(ne,T,U),Mt(()=>le.enter(ne),J);else{const{leave:R,delayLeave:H,afterLeave:Y}=le,te=()=>i(ne,T,U),we=()=>{R(ne,()=>{te(),Y&&Y()})};H?H(ne,te,we):we()}else i(ne,T,U)},re=(y,T,U,K=!1,J=!1)=>{const{type:ne,props:se,ref:le,children:de,dynamicChildren:x,shapeFlag:v,patchFlag:R,dirs:H}=y;if(le!=null&&la(le,null,U,y,!0),v&256){T.ctx.deactivate(y);return}const Y=v&1&&H,te=!Rs(y);let we;if(te&&(we=se&&se.onVnodeBeforeUnmount)&&tn(we,T,y),v&6)D(y.component,U,K);else{if(v&128){y.suspense.unmount(U,K);return}Y&&jn(y,null,T,"beforeUnmount"),v&64?y.type.remove(y,T,U,J,ue,K):x&&(ne!==vt||R>0&&R&64)?oe(x,T,U,!1,!0):(ne===vt&&R&384||!J&&v&16)&&oe(de,T,U),K&&Ae(y)}(te&&(we=se&&se.onVnodeUnmounted)||Y)&&Mt(()=>{we&&tn(we,T,y),Y&&jn(y,null,T,"unmounted")},U)},Ae=y=>{const{type:T,el:U,anchor:K,transition:J}=y;if(T===vt){F(U,K);return}if(T===Ps){w(y);return}const ne=()=>{r(U),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(y.shapeFlag&1&&J&&!J.persisted){const{leave:se,delayLeave:le}=J,de=()=>se(U,ne);le?le(y.el,ne,de):de()}else ne()},F=(y,T)=>{let U;for(;y!==T;)U=h(y),r(y),y=U;r(T)},D=(y,T,U)=>{const{bum:K,scope:J,update:ne,subTree:se,um:le}=y;K&&po(K),J.stop(),ne&&(ne.active=!1,re(se,y,T,U)),le&&Mt(le,T),Mt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},oe=(y,T,U,K=!1,J=!1,ne=0)=>{for(let se=ne;se<y.length;se++)re(y[se],T,U,K,J)},ce=y=>y.shapeFlag&6?ce(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),Ee=(y,T,U)=>{y==null?T._vnode&&re(T._vnode,null,null,!0):f(T._vnode||null,y,T,null,null,null,U),Uu(),T._vnode=y},ue={p:f,um:re,m:ie,r:Ae,mt:Q,mc:A,pc:V,pbc:B,n:ce,o:n};let Te,xe;return e&&([Te,xe]=e(ue)),{render:Ee,hydrate:Te,createApp:Cf(Ee,Te)}}function Xn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ga(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=zn(r[s]),o.el=a.el),t||Ga(a,o))}}function Pf(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Df=n=>n.__isTeleport,Er=n=>n&&(n.disabled||n.disabled===""),bl=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ca=(n,e)=>{const t=n&&n.to;return lt(t)?e?e(t):null:t},If={__isTeleport:!0,process(n,e,t,i,r,s,a,o,l,c){const{mc:u,pc:d,pbc:h,o:{insert:m,querySelector:g,createText:p,createComment:f}}=c,_=Er(e.props);let{shapeFlag:S,children:L,dynamicChildren:E}=e;if(n==null){const w=e.el=p(""),P=e.anchor=p("");m(w,t,i),m(P,t,i);const O=e.target=ca(e.props,g),M=e.targetAnchor=p("");O&&(m(M,O),a=a||bl(O));const A=(X,B)=>{S&16&&u(L,X,B,r,s,a,o,l)};_?A(t,P):O&&A(O,M)}else{e.el=n.el;const w=e.anchor=n.anchor,P=e.target=n.target,O=e.targetAnchor=n.targetAnchor,M=Er(n.props),A=M?t:P,X=M?w:O;if(a=a||bl(P),E?(h(n.dynamicChildren,E,A,r,s,a,o),Ga(n,e,!0)):l||d(n,e,A,X,r,s,a,o,!1),_)M||rs(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const B=e.target=ca(e.props,g);B&&rs(e,B,null,c,0)}else M&&rs(e,P,O,c,1)}},remove(n,e,t,i,{um:r,o:{remove:s}},a){const{shapeFlag:o,children:l,anchor:c,targetAnchor:u,target:d,props:h}=n;if(d&&s(u),(a||!Er(h))&&(s(c),o&16))for(let m=0;m<l.length;m++){const g=l[m];r(g,e,t,!0,!!g.dynamicChildren)}},move:rs,hydrate:Ff};function rs(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(a,e,t),(!d||Er(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,t,2);d&&i(o,e,t)}function Ff(n,e,t,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l}},c){const u=e.target=ca(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Er(e.props))e.anchor=c(a(n),e,o(n),t,i,r,s),e.targetAnchor=d;else{e.anchor=a(n);let h=d;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&a(e.targetAnchor);break}c(d,e,u,t,i,r,s)}}return e.anchor&&a(e.anchor)}const Nf=If,vt=Symbol(void 0),Va=Symbol(void 0),ui=Symbol(void 0),Ps=Symbol(void 0),Tr=[];let Vt=null;function Ze(n=!1){Tr.push(Vt=n?null:[])}function Of(){Tr.pop(),Vt=Tr[Tr.length-1]||null}let Or=1;function Ml(n){Or+=n}function Qu(n){return n.dynamicChildren=Or>0?Vt||Hi:null,Of(),Or>0&&Vt&&Vt.push(n),n}function et(n,e,t,i,r,s){return Qu(_e(n,e,t,i,r,s,!0))}function Wi(n,e,t,i,r){return Qu(De(n,e,t,i,r,!0))}function ua(n){return n?n.__v_isVNode===!0:!1}function hr(n,e){return n.type===e.type&&n.key===e.key}const no="__vInternal",ed=({key:n})=>n!=null?n:null,Ds=({ref:n,ref_key:e,ref_for:t})=>n!=null?lt(n)||pt(n)||Ue(n)?{i:cn,r:n,k:e,f:!!t}:n:null;function _e(n,e=null,t=null,i=0,r=null,s=n===vt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ed(e),ref:e&&Ds(e),scopeId:Qs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(Wa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),Or>0&&!a&&Vt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vt.push(l),l}const De=Uf;function Uf(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===pf)&&(n=ui),ua(n)){const o=Xi(n,e,!0);return t&&Wa(o,t),Or>0&&!s&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(n)]=o:Vt.push(o)),o.patchFlag|=-2,o}if($f(n)&&(n=n.__vccOpts),e){e=zf(e);let{class:o,style:l}=e;o&&!lt(o)&&(e.class=Ws(o)),ct(l)&&(Tu(l)&&!Fe(l)&&(l=xt({},l)),e.style=Gr(l))}const a=lt(n)?1:Qh(n)?128:Df(n)?64:ct(n)?4:Ue(n)?2:0;return _e(n,e,t,i,r,a,s,!0)}function zf(n){return n?Tu(n)||no in n?xt({},n):n:null}function Xi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?kf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&ed(o),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Ds(e)):[r,Ds(e)]:Ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor}}function di(n=" ",e=0){return De(Va,null,n,e)}function io(n,e){const t=De(Ps,null,n);return t.staticCount=e,t}function Un(n="",e=!1){return e?(Ze(),Wi(ui,null,n)):De(ui,null,n)}function sn(n){return n==null||typeof n=="boolean"?De(ui):Fe(n)?De(vt,null,n.slice()):typeof n=="object"?zn(n):De(Va,null,String(n))}function zn(n){return n.el===null||n.memo?n:Xi(n)}function Wa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(no in e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[di(e)]):t=8);n.children=e,n.shapeFlag|=t}function kf(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ws([e.class,i.class]));else if(r==="style")e.style=Gr([e.style,i.style]);else if(qs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function tn(n,e,t,i=null){jt(n,e,7,[t,i])}const Bf=Ju();let Hf=0;function Gf(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bf,s={uid:Hf++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new uh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$u(i,r),emitsOptions:ku(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$h.bind(null,s),n.ce&&n.ce(s),s}let dt=null;const $i=n=>{dt=n,n.scope.on()},oi=()=>{dt&&dt.scope.off(),dt=null};function td(n){return n.vnode.shapeFlag&4}let Ur=!1;function Vf(n,e=!1){Ur=e;const{props:t,children:i}=n.vnode,r=td(n);Mf(n,t,r,e),Ef(n,i);const s=r?Wf(n,e):void 0;return Ur=!1,s}function Wf(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Au(new Proxy(n.ctx,gf));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?jf(n):null;$i(n),nr();const s=Hn(i,n,0,[n.props,r]);if(ir(),oi(),hu(s)){if(s.then(oi,oi),e)return s.then(a=>{Sl(n,a,e)}).catch(a=>{Zs(a,n,0)});n.asyncDep=s}else Sl(n,s,e)}else nd(n,e)}function Sl(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Pu(e)),nd(n,t)}let wl;function nd(n,e,t){const i=n.type;if(!n.render){if(!e&&wl&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:o},a),l);i.render=wl(r,c)}}n.render=i.render||Wt}$i(n),nr(),_f(n),ir(),oi()}function qf(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function jf(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=qf(n))},slots:n.slots,emit:n.emit,expose:e}}function qa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Pu(Au(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ks)return ks[t](n)}}))}function Xf(n,e=!0){return Ue(n)?n.displayName||n.name:n.name||e&&n.__name}function $f(n){return Ue(n)&&"__vccOpts"in n}const Et=(n,e)=>Gh(n,e,Ur);function id(n,e,t){const i=arguments.length;return i===2?ct(e)&&!Fe(e)?ua(e)?De(n,null,[e]):De(n,e):De(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ua(t)&&(t=[t]),De(n,e,t))}const Yf="3.2.37",Zf="http://www.w3.org/2000/svg",ei=typeof document<"u"?document:null,El=ei&&ei.createElement("template"),Kf={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ei.createElementNS(Zf,n):ei.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{El.innerHTML=i?`<svg>${n}</svg>`:n;const o=El.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Jf(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Qf(n,e,t){const i=n.style,r=lt(t);if(t&&!r){for(const s in t)da(i,s,t[s]);if(e&&!lt(e))for(const s in e)t[s]==null&&da(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Tl=/\s*!important$/;function da(n,e,t){if(Fe(t))t.forEach(i=>da(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ep(n,e);Tl.test(t)?n.setProperty(tr(i),t.replace(Tl,""),"important"):n[i]=t}}const Al=["Webkit","Moz","ms"],go={};function ep(n,e){const t=go[e];if(t)return t;let i=hn(e);if(i!=="filter"&&i in n)return go[e]=i;i=$s(i);for(let r=0;r<Al.length;r++){const s=Al[r]+i;if(s in n)return go[e]=s}return e}const Cl="http://www.w3.org/1999/xlink";function tp(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Cl,e.slice(6,e.length)):n.setAttributeNS(Cl,e,t);else{const s=Jd(e);t==null||s&&!cu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function np(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=cu(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[rd,ip]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let ha=0;const rp=Promise.resolve(),sp=()=>{ha=0},op=()=>ha||(rp.then(sp),ha=rd());function ap(n,e,t,i){n.addEventListener(e,t,i)}function lp(n,e,t,i){n.removeEventListener(e,t,i)}function cp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=up(e);if(i){const c=s[e]=dp(i,r);ap(n,o,c,l)}else a&&(lp(n,o,a,l),s[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function up(n){let e;if(Ll.test(n)){e={};let t;for(;t=n.match(Ll);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[tr(n.slice(2)),e]}function dp(n,e){const t=i=>{const r=i.timeStamp||rd();(ip||r>=t.attached-1)&&jt(hp(i,t.value),e,5,[i])};return t.value=n,t.attached=op(),t}function hp(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Rl=/^on[a-z]/,fp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Jf(n,i,r):e==="style"?Qf(n,t,i):qs(e)?Aa(e)||cp(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pp(n,e,i,r))?np(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),tp(n,e,i,r))};function pp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Rl.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Rl.test(e)&&lt(t)?!1:e in n}const mp=["ctrl","shift","alt","meta"],gp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>mp.some(t=>n[`${t}Key`]&&!e.includes(t))},_p=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=gp[e[r]];if(s&&s(t,e))return}return n(t,...i)},vp=xt({patchProp:fp},Kf);let Pl;function xp(){return Pl||(Pl=Lf(vp))}const yp=(...n)=>{const e=xp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bp(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function bp(n){return lt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ui=typeof window<"u";function Mp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function _o(n,e){const t={};for(const i in e){const r=e[i];t[i]=$t(r)?r.map(n):n(r)}return t}const Ar=()=>{},$t=Array.isArray,Sp=/\/$/,wp=n=>n.replace(Sp,"");function vo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Cp(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Ep(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Dl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Tp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Yi(e.matched[i],t.matched[r])&&sd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Yi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ap(n[t],e[t]))return!1;return!0}function Ap(n,e){return $t(n)?Il(n,e):$t(e)?Il(e,n):n===e}function Il(n,e){return $t(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Cp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var zr;(function(n){n.pop="pop",n.push="push"})(zr||(zr={}));var Cr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Cr||(Cr={}));function Lp(n){if(!n)if(Ui){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),wp(n)}const Rp=/^[^#]+#/;function Pp(n,e){return n.replace(Rp,"#")+e}function Dp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ip(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Dp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fl(n,e){return(history.state?history.state.position-e:-1)+n}const fa=new Map;function Fp(n,e){fa.set(n,e)}function Np(n){const e=fa.get(n);return fa.delete(n),e}let Op=()=>location.protocol+"//"+location.host;function od(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Dl(l,"")}return Dl(t,n)+i+r}function Up(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=od(n,location),g=t.value,p=e.value;let f=0;if(h){if(t.value=m,e.value=h,a&&a===g){a=null;return}f=p?h.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:f,type:zr.pop,direction:f?f>0?Cr.forward:Cr.back:Cr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(Je({},h.state,{scroll:ro()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Nl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ro():null}}function zp(n){const{history:e,location:t}=window,i={value:od(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:Op()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Je({},e.state,Nl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:ro()});s(u.current,u,!0);const d=Je({},Nl(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function kp(n){n=Lp(n);const e=zp(n),t=Up(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:Pp.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Bp(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),kp(n)}function Hp(n){return typeof n=="string"||n&&typeof n=="object"}function ad(n){return typeof n=="string"||typeof n=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ld=Symbol("");var Ol;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ol||(Ol={}));function Zi(n,e){return Je(new Error,{type:n,[ld]:!0},e)}function pn(n,e){return n instanceof Error&&ld in n&&(e==null||!!(n.type&e))}const Ul="[^/]+?",Gp={sensitive:!1,strict:!1,start:!0,end:!0},Vp=/[.+*?^${}()[\]/\\]/g;function Wp(n,e){const t=Je({},Gp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(t.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Vp,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:p,optional:f,regexp:_}=h;s.push({name:g,repeatable:p,optional:f});const S=_||Ul;if(S!==Ul){m+=10;try{new RegExp(`(${S})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+E.message)}}let L=p?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(L=f&&c.length<2?`(?:/${L})`:"/"+L),f&&(L+="?"),r+=L,m+=20,f&&(m+=-8),p&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:f}=m,_=g in c?c[g]:"";if($t(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=$t(_)?_.join("/"):_;if(!S)if(f)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function qp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=qp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(zl(i))return 1;if(zl(r))return-1}return r.length-i.length}function zl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Xp={type:0,value:""},$p=/[a-zA-Z0-9_]/;function Yp(n){if(!n)return[[]];if(n==="/")return[[Xp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function d(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:$p.test(l)?h():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),a(),r}function Zp(n,e,t){const i=Wp(Yp(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Kp(n,e){const t=[],i=new Map;e=Bl({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const m=!h,g=Qp(u);g.aliasOf=h&&h.record;const p=Bl(e,u),f=[g];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of L)f.push(Je({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let _,S;for(const L of f){const{path:E}=L;if(d&&E[0]!=="/"){const w=d.record.path,P=w[w.length-1]==="/"?"":"/";L.path=d.record.path+(E&&P+E)}if(_=Zp(L,d,p),h?h.alias.push(_):(S=S||_,S!==_&&S.alias.push(_),m&&u.name&&!kl(_)&&a(u.name)),g.children){const w=g.children;for(let P=0;P<w.length;P++)s(w[P],_,h&&h.children[P])}h=h||_,l(_)}return S?()=>{a(S)}:Ar}function a(u){if(ad(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let d=0;for(;d<t.length&&jp(u,t[d])>=0&&(u.record.path!==t[d].record.path||!cd(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!kl(u)&&i.set(u.record.name,u)}function c(u,d){let h,m={},g,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Zi(1,{location:u});p=h.record.name,m=Je(Jp(d.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(S=>S.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=d.name?i.get(d.name):t.find(S=>S.re.test(d.path)),!h)throw Zi(1,{location:u,currentLocation:d});p=h.record.name,m=Je({},d.params,u.params),g=h.stringify(m)}const f=[];let _=h;for(;_;)f.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:f,meta:tm(f)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function Jp(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Qp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:em(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function em(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function kl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function tm(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Bl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function cd(n,e){return e.children.some(t=>t===n||cd(n,t))}const ud=/#/g,nm=/&/g,im=/\//g,rm=/=/g,sm=/\?/g,dd=/\+/g,om=/%5B/g,am=/%5D/g,hd=/%5E/g,lm=/%60/g,fd=/%7B/g,cm=/%7C/g,pd=/%7D/g,um=/%20/g;function ja(n){return encodeURI(""+n).replace(cm,"|").replace(om,"[").replace(am,"]")}function dm(n){return ja(n).replace(fd,"{").replace(pd,"}").replace(hd,"^")}function pa(n){return ja(n).replace(dd,"%2B").replace(um,"+").replace(ud,"%23").replace(nm,"%26").replace(lm,"`").replace(fd,"{").replace(pd,"}").replace(hd,"^")}function hm(n){return pa(n).replace(rm,"%3D")}function fm(n){return ja(n).replace(ud,"%23").replace(sm,"%3F")}function pm(n){return n==null?"":fm(n).replace(im,"%2F")}function Hs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function mm(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(dd," "),a=s.indexOf("="),o=Hs(a<0?s:s.slice(0,a)),l=a<0?null:Hs(s.slice(a+1));if(o in e){let c=e[o];$t(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Hl(n){let e="";for(let t in n){const i=n[t];if(t=hm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}($t(i)?i.map(s=>s&&pa(s)):[i&&pa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function gm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=$t(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const _m=Symbol(""),Gl=Symbol(""),Xa=Symbol(""),md=Symbol(""),ma=Symbol("");function fr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function kn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=d=>{d===!1?o(Zi(4,{from:t,to:e})):d instanceof Error?o(d):Hp(d)?o(Zi(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>o(d))})}function xo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(vm(o)){const c=(o.__vccOpts||o)[e];c&&r.push(kn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Mp(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&kn(h,t,i,s,a)()}))}}return r}function vm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Vl(n){const e=Gn(Xa),t=Gn(md),i=Et(()=>e.resolve(qt(n.to))),r=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Yi.bind(null,u));if(h>-1)return h;const m=Wl(l[c-2]);return c>1&&Wl(u)===m&&d[d.length-1].path!==m?d.findIndex(Yi.bind(null,l[c-2])):h}),s=Et(()=>r.value>-1&&Mm(t.params,i.value.params)),a=Et(()=>r.value>-1&&r.value===t.matched.length-1&&sd(t.params,i.value.params));function o(l={}){return bm(l)?e[qt(n.replace)?"replace":"push"](qt(n.to)).catch(Ar):Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const xm=Zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vl,setup(n,{slots:e}){const t=Vr(Vl(n)),{options:i}=Gn(Xa),r=Et(()=>({[ql(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ql(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:id("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),ym=xm;function bm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Mm(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!$t(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Wl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ql=(n,e,t)=>n!=null?n:e!=null?e:t,Sm=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(ma),r=Et(()=>n.route||i.value),s=Gn(Gl,0),a=Et(()=>{let c=qt(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=Et(()=>r.value.matched[a.value]);Cs(Gl,Et(()=>a.value+1)),Cs(_m,o),Cs(ma,r);const l=xr();return Ls(()=>[l.value,o.value,n.name],([c,u,d],[h,m,g])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Yi(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=o.value,h=d&&d.components[u];if(!h)return jl(t.default,{Component:h,route:c});const m=d.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,f=id(h,Je({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return jl(t.default,{Component:f,route:c})||f}}});function jl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const wm=Sm;function Em(n){const e=Kp(n.routes,n),t=n.parseQuery||mm,i=n.stringifyQuery||Hl,r=n.history,s=fr(),a=fr(),o=fr(),l=zh(Cn);let c=Cn;Ui&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_o.bind(null,F=>""+F),d=_o.bind(null,pm),h=_o.bind(null,Hs);function m(F,D){let oe,ce;return ad(F)?(oe=e.getRecordMatcher(F),ce=D):ce=F,e.addRoute(ce,oe)}function g(F){const D=e.getRecordMatcher(F);D&&e.removeRoute(D)}function p(){return e.getRoutes().map(F=>F.record)}function f(F){return!!e.getRecordMatcher(F)}function _(F,D){if(D=Je({},D||l.value),typeof F=="string"){const xe=vo(t,F,D.path),y=e.resolve({path:xe.path},D),T=r.createHref(xe.fullPath);return Je(xe,y,{params:h(y.params),hash:Hs(xe.hash),redirectedFrom:void 0,href:T})}let oe;if("path"in F)oe=Je({},F,{path:vo(t,F.path,D.path).path});else{const xe=Je({},F.params);for(const y in xe)xe[y]==null&&delete xe[y];oe=Je({},F,{params:d(F.params)}),D.params=d(D.params)}const ce=e.resolve(oe,D),Ee=F.hash||"";ce.params=u(h(ce.params));const ue=Ep(i,Je({},F,{hash:dm(Ee),path:ce.path})),Te=r.createHref(ue);return Je({fullPath:ue,hash:Ee,query:i===Hl?gm(F.query):F.query||{}},ce,{redirectedFrom:void 0,href:Te})}function S(F){return typeof F=="string"?vo(t,F,l.value.path):Je({},F)}function L(F,D){if(c!==F)return Zi(8,{from:D,to:F})}function E(F){return O(F)}function w(F){return E(Je(S(F),{replace:!0}))}function P(F){const D=F.matched[F.matched.length-1];if(D&&D.redirect){const{redirect:oe}=D;let ce=typeof oe=="function"?oe(F):oe;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=S(ce):{path:ce},ce.params={}),Je({query:F.query,hash:F.hash,params:"path"in ce?{}:F.params},ce)}}function O(F,D){const oe=c=_(F),ce=l.value,Ee=F.state,ue=F.force,Te=F.replace===!0,xe=P(oe);if(xe)return O(Je(S(xe),{state:Ee,force:ue,replace:Te}),D||oe);const y=oe;y.redirectedFrom=D;let T;return!ue&&Tp(i,ce,oe)&&(T=Zi(16,{to:y,from:ce}),Z(ce,ce,!0,!1)),(T?Promise.resolve(T):A(y,ce)).catch(U=>pn(U)?pn(U,2)?U:V(U):q(U,y,ce)).then(U=>{if(U){if(pn(U,2))return O(Je({replace:Te},S(U.to),{state:Ee,force:ue}),D||y)}else U=B(y,ce,!0,Te,Ee);return X(y,ce,U),U})}function M(F,D){const oe=L(F,D);return oe?Promise.reject(oe):Promise.resolve()}function A(F,D){let oe;const[ce,Ee,ue]=Tm(F,D);oe=xo(ce.reverse(),"beforeRouteLeave",F,D);for(const xe of ce)xe.leaveGuards.forEach(y=>{oe.push(kn(y,F,D))});const Te=M.bind(null,F,D);return oe.push(Te),yi(oe).then(()=>{oe=[];for(const xe of s.list())oe.push(kn(xe,F,D));return oe.push(Te),yi(oe)}).then(()=>{oe=xo(Ee,"beforeRouteUpdate",F,D);for(const xe of Ee)xe.updateGuards.forEach(y=>{oe.push(kn(y,F,D))});return oe.push(Te),yi(oe)}).then(()=>{oe=[];for(const xe of F.matched)if(xe.beforeEnter&&!D.matched.includes(xe))if($t(xe.beforeEnter))for(const y of xe.beforeEnter)oe.push(kn(y,F,D));else oe.push(kn(xe.beforeEnter,F,D));return oe.push(Te),yi(oe)}).then(()=>(F.matched.forEach(xe=>xe.enterCallbacks={}),oe=xo(ue,"beforeRouteEnter",F,D),oe.push(Te),yi(oe))).then(()=>{oe=[];for(const xe of a.list())oe.push(kn(xe,F,D));return oe.push(Te),yi(oe)}).catch(xe=>pn(xe,8)?xe:Promise.reject(xe))}function X(F,D,oe){for(const ce of o.list())ce(F,D,oe)}function B(F,D,oe,ce,Ee){const ue=L(F,D);if(ue)return ue;const Te=D===Cn,xe=Ui?history.state:{};oe&&(ce||Te?r.replace(F.fullPath,Je({scroll:Te&&xe&&xe.scroll},Ee)):r.push(F.fullPath,Ee)),l.value=F,Z(F,D,oe,Te),V()}let pe;function he(){pe||(pe=r.listen((F,D,oe)=>{if(!Ae.listening)return;const ce=_(F),Ee=P(ce);if(Ee){O(Je(Ee,{replace:!0}),ce).catch(Ar);return}c=ce;const ue=l.value;Ui&&Fp(Fl(ue.fullPath,oe.delta),ro()),A(ce,ue).catch(Te=>pn(Te,12)?Te:pn(Te,2)?(O(Te.to,ce).then(xe=>{pn(xe,20)&&!oe.delta&&oe.type===zr.pop&&r.go(-1,!1)}).catch(Ar),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),q(Te,ce,ue))).then(Te=>{Te=Te||B(ce,ue,!1),Te&&(oe.delta&&!pn(Te,8)?r.go(-oe.delta,!1):oe.type===zr.pop&&pn(Te,20)&&r.go(-1,!1)),X(ce,ue,Te)}).catch(Ar)}))}let z=fr(),Q=fr(),G;function q(F,D,oe){V(F);const ce=Q.list();return ce.length?ce.forEach(Ee=>Ee(F,D,oe)):console.error(F),Promise.reject(F)}function j(){return G&&l.value!==Cn?Promise.resolve():new Promise((F,D)=>{z.add([F,D])})}function V(F){return G||(G=!F,he(),z.list().forEach(([D,oe])=>F?oe(F):D()),z.reset()),F}function Z(F,D,oe,ce){const{scrollBehavior:Ee}=n;if(!Ui||!Ee)return Promise.resolve();const ue=!oe&&Np(Fl(F.fullPath,0))||(ce||!oe)&&history.state&&history.state.scroll||null;return Iu().then(()=>Ee(F,D,ue)).then(Te=>Te&&Ip(Te)).catch(Te=>q(Te,F,D))}const ae=F=>r.go(F);let ie;const re=new Set,Ae={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:f,getRoutes:p,resolve:_,options:n,push:E,replace:w,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:j,install(F){const D=this;F.component("RouterLink",ym),F.component("RouterView",wm),F.config.globalProperties.$router=D,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),Ui&&!ie&&l.value===Cn&&(ie=!0,E(r.location).catch(Ee=>{}));const oe={};for(const Ee in Cn)oe[Ee]=Et(()=>l.value[Ee]);F.provide(Xa,D),F.provide(md,Vr(oe)),F.provide(ma,l);const ce=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(c=Cn,pe&&pe(),pe=null,l.value=Cn,ie=!1,G=!1),ce()}}};return Ae}function yi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Tm(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Yi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Yi(c,l))||r.push(l))}return[t,i,r]}const rr=n=>(Wr("data-v-bbf72c04"),n=n(),qr(),n),Am={id:"site-header",class:"navbar"},Cm=rr(()=>_e("div",{class:"name"},"Chris Lokhorst",-1)),Lm=rr(()=>_e("div",{class:"toggle-button"},[_e("span",{class:"bar"}),_e("span",{class:"bar"}),_e("span",{class:"bar"})],-1)),Rm={class:"buttons"},Pm=rr(()=>_e("li",null,"Home",-1)),Dm=rr(()=>_e("li",null,"About",-1)),Im=rr(()=>_e("li",null,"Projects",-1)),Fm=rr(()=>_e("li",null,"Contact",-1)),Nm=Zt({__name:"NavigationBar",setup(n){let e=!1;return to(()=>{const t=document.getElementsByClassName("toggle-button")[0],i=document.getElementsByClassName("buttons")[0];t.addEventListener("click",()=>{i.classList.toggle("active"),e=!e});let r=window.scrollY;const s=document.getElementById("site-header");s&&window.addEventListener("scroll",()=>{e||(window.scrollY>r?s==null||s.classList.add("hide"):s==null||s.classList.remove("hide"),r=window.scrollY)})}),(t,i)=>{const r=Ba("router-link");return Ze(),et("nav",Am,[Cm,De(r,{to:""},{default:ln(()=>[Lm]),_:1}),_e("div",Rm,[De(r,{to:"/"},{default:ln(()=>[Pm]),_:1}),De(r,{to:"/about"},{default:ln(()=>[Dm]),_:1}),De(r,{to:"/projects"},{default:ln(()=>[Im]),_:1}),De(r,{to:"/contact"},{default:ln(()=>[Fm]),_:1})])])}}});const Ot=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Om=Ot(Nm,[["__scopeId","data-v-bbf72c04"]]);const Um={},zm=n=>(Wr("data-v-ad9d1a72"),n=n(),qr(),n),km={id:"footer"},Bm={class:"max-width"},Hm={class:"content"},Gm=io('<div class="contact" data-v-ad9d1a72><div class="name" data-v-ad9d1a72>Chris Lokhorst</div><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-ad9d1a72><img class="icon" src="https://img.icons8.com/ios/100/FFFFFF/linkedin-circled--v1.png" data-v-ad9d1a72></a><a href="https://github.com/ChrisPis-bit?tab=repositories" target="_blank" data-v-ad9d1a72><img class="icon" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" data-v-ad9d1a72></a><div class="contact-info" data-v-ad9d1a72><div data-v-ad9d1a72><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" class="link" data-v-ad9d1a72>chris.lokhorst@kpnmail.nl</a></div></div></div>',1),Vm={class:"pages"},Wm=zm(()=>_e("div",{class:"seperator"},null,-1)),qm=di("Home"),jm=di("About"),Xm=di("Projects"),$m=di("Contact");function Ym(n,e){const t=Ba("router-link");return Ze(),et("footer",km,[_e("div",Bm,[_e("div",Hm,[Gm,_e("div",Vm,[Wm,_e("ul",null,[_e("li",null,[De(t,{to:"/",class:"link"},{default:ln(()=>[qm]),_:1})]),_e("li",null,[De(t,{to:"/about",class:"link"},{default:ln(()=>[jm]),_:1})]),_e("li",null,[De(t,{to:"/projects",class:"link"},{default:ln(()=>[Xm]),_:1})]),_e("li",null,[De(t,{to:"/contact",class:"link"},{default:ln(()=>[$m]),_:1})])])])])])])}const Zm=Ot(Um,[["render",Ym],["__scopeId","data-v-ad9d1a72"]]),Km={class:"page-container"},Jm={class:"content-wrap"},Qm={id:"home-section"},eg=Zt({__name:"App",setup(n){return(e,t)=>{const i=Ba("router-view");return Ze(),et("div",Km,[_e("div",Jm,[_e("header",null,[De(Om)]),_e("main",Qm,[De(i)])]),De(Zm)])}}});const tg=Ot(eg,[["__scopeId","data-v-f835a831"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="142",ng=0,Xl=1,ig=2,gd=1,rg=2,br=3,kr=0,Xt=1,hi=2,sg=1,Vn=0,qi=1,$l=2,Yl=3,Zl=4,og=5,zi=100,ag=101,lg=102,Kl=103,Jl=104,cg=200,ug=201,dg=202,hg=203,_d=204,vd=205,fg=206,pg=207,mg=208,gg=209,_g=210,vg=0,xg=1,yg=2,ga=3,bg=4,Mg=5,Sg=6,wg=7,xd=0,Eg=1,Tg=2,Sn=0,Ag=1,Cg=2,Lg=3,Rg=4,Pg=5,yd=300,Ki=301,Ji=302,_a=303,va=304,so=306,xa=1e3,Gt=1001,ya=1002,St=1003,Ql=1004,ec=1005,It=1006,Dg=1007,oo=1008,fi=1009,Ig=1010,Fg=1011,bd=1012,Ng=1013,ni=1014,ii=1015,Br=1016,Og=1017,Ug=1018,ji=1020,zg=1021,kg=1022,un=1023,Bg=1024,Hg=1025,ai=1026,Qi=1027,Gg=1028,Vg=1029,Wg=1030,qg=1031,jg=1033,yo=33776,bo=33777,Mo=33778,So=33779,tc=35840,nc=35841,ic=35842,rc=35843,Xg=36196,sc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,dc=37812,hc=37813,fc=37814,pc=37815,mc=37816,gc=37817,_c=37818,vc=37819,xc=37820,yc=37821,bc=36492,pi=3e3,nt=3001,$g=3200,Yg=3201,Md=0,Zg=1,yn="srgb",ri="srgb-linear",wo=7680,Kg=519,Mc=35044,Sc="300 es",ba=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const Lr=Math.PI/180,Hr=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Ya(n,e){return(n%e+e)%e}function Jg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Qg(n,e,t){return n!==e?(t-n)/(e-n):0}function Rr(n,e,t){return(1-t)*n+t*e}function e_(n,e,t,i){return Rr(n,e,1-Math.exp(-t*i))}function t_(n,e=1){return e-Math.abs(Ya(n,e*2)-e)}function n_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function i_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function r_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function s_(n,e){return n+Math.random()*(e-n)}function o_(n){return n*(.5-Math.random())}function a_(n){n!==void 0&&(wc=n);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l_(n){return n*Lr}function c_(n){return n*Hr}function Ma(n){return(n&n-1)===0&&n!==0}function u_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function d_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function h_(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function f_(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var on=Object.freeze({__proto__:null,DEG2RAD:Lr,RAD2DEG:Hr,generateUUID:or,clamp:wt,euclideanModulo:Ya,mapLinear:Jg,inverseLerp:Qg,lerp:Rr,damp:e_,pingpong:t_,smoothstep:n_,smootherstep:i_,randInt:r_,randFloat:s_,randFloatSpread:o_,seededRandom:a_,degToRad:l_,radToDeg:c_,isPowerOfTwo:Ma,ceilPowerOfTwo:u_,floorPowerOfTwo:Gs,setQuaternionFromProperEuler:d_,normalize:f_,denormalize:h_});class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],p=r[0],f=r[3],_=r[6],S=r[1],L=r[4],E=r[7],w=r[2],P=r[5],O=r[8];return s[0]=a*p+o*S+l*w,s[3]=a*f+o*L+l*P,s[6]=a*_+o*E+l*O,s[1]=c*p+u*S+d*w,s[4]=c*f+u*L+d*P,s[7]=c*_+u*E+d*O,s[2]=h*p+m*S+g*w,s[5]=h*f+m*L+g*P,s[8]=h*_+m*E+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Eo={[yn]:{[ri]:li},[ri]:{[yn]:Is}},Ut={legacyMode:!0,get workingColorSpace(){return ri},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Eo[e]&&Eo[e][t]!==void 0){const i=Eo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},zt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function os(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ri){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ri){if(e=Ya(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=yn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ut.fromWorkingColorSpace(os(this,st),e),wt(st.r*255,0,255)<<16^wt(st.g*255,0,255)<<8^wt(st.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ri){Ut.fromWorkingColorSpace(os(this,st),t);const i=st.r,r=st.g,s=st.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ri){return Ut.fromWorkingColorSpace(os(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=yn){return Ut.fromWorkingColorSpace(os(this,st),e),e!==yn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=i,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(ss);const i=Rr(zt.h,ss.h,t),r=Rr(zt.s,ss.s,t),s=Rr(zt.l,ss.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ke.NAMES=wd;let bi;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Vs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Td{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p_=0;class Yt extends sr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Gt,r=Gt,s=It,a=oo,o=un,l=fi,c=1,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=or(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=yd;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,E=(m+1)/2,w=(_+1)/2,P=(u+h)/4,O=(d+p)/4,M=(g+f)/4;return L>E&&L>w?L<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(L),r=P/i,s=O/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=M/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=O/s,r=M/s),this.set(i,r,s,t),this}let S=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(d-p)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends sr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:It,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ad extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class m_ extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||c!==m||u!==g){let f=1-o;const _=l*h+c*m+u*g+d*p,S=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const w=Math.sqrt(L),P=Math.atan2(w,_*S);f=Math.sin(f*P)/w,o=Math.sin(o*P)/w}const E=o*S;if(l=l*f+h*E,c=c*f+m*E,u=u*f+g*E,d=d*f+p*E,f===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-o*m,e[t+2]=c*g+u*m+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-d*-a,this.y=u*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new I,Ec=new jr;class Xr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>s&&(s=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>s&&(s=u),d>a&&(a=d),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)$n.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox),Lo.applyMatrix4(e.matrixWorld),this.union(Lo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),as.subVectors(this.max,pr),Mi.subVectors(e.a,pr),Si.subVectors(e.b,pr),wi.subVectors(e.c,pr),Ln.subVectors(Si,Mi),Rn.subVectors(wi,Si),Yn.subVectors(Mi,wi);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!Ro(t,Mi,Si,wi,as)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Mi,Si,wi,as))?!1:(ls.crossVectors(Ln,Rn),t=[ls.x,ls.y,ls.z],Ro(t,Mi,Si,wi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,Lo=new Xr,Mi=new I,Si=new I,wi=new I,Ln=new I,Rn=new I,Yn=new I,pr=new I,as=new I,ls=new I,Zn=new I;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const g_=new Xr,Tc=new I,cs=new I,Po=new I;class Za{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):g_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Po.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?cs.set(0,0,1).multiplyScalar(e.radius):cs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Tc.copy(e.center).add(cs)),this.expandByPoint(Tc.copy(e.center).sub(cs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new I,Do=new I,us=new I,Pn=new I,Io=new I,ds=new I,Fo=new I;class Cd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.direction).multiplyScalar(t).add(this.origin),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=Pn.dot(this.direction),l=-Pn.dot(us),c=Pn.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const p=1/u;d*=p,h*=p,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(us).multiplyScalar(h).add(Do),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){Io.subVectors(t,e),ds.subVectors(i,e),Fo.crossVectors(Io,ds);let a=this.direction.dot(Fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(ds.crossVectors(Pn,ds));if(l<0)return null;const c=o*this.direction.dot(Io.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(Fo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c,u,d,h,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,p=c*d;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,p=c*d;t[0]=h-p*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,v_)}lookAt(e,t,i){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Dn.crossVectors(i,At),Dn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Dn.crossVectors(i,At)),Dn.normalize(),hs.crossVectors(At,Dn),r[0]=Dn.x,r[4]=hs.x,r[8]=At.x,r[1]=Dn.y,r[5]=hs.y,r[9]=At.y,r[2]=Dn.z,r[6]=hs.z,r[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],p=i[6],f=i[10],_=i[14],S=i[3],L=i[7],E=i[11],w=i[15],P=r[0],O=r[4],M=r[8],A=r[12],X=r[1],B=r[5],pe=r[9],he=r[13],z=r[2],Q=r[6],G=r[10],q=r[14],j=r[3],V=r[7],Z=r[11],ae=r[15];return s[0]=a*P+o*X+l*z+c*j,s[4]=a*O+o*B+l*Q+c*V,s[8]=a*M+o*pe+l*G+c*Z,s[12]=a*A+o*he+l*q+c*ae,s[1]=u*P+d*X+h*z+m*j,s[5]=u*O+d*B+h*Q+m*V,s[9]=u*M+d*pe+h*G+m*Z,s[13]=u*A+d*he+h*q+m*ae,s[2]=g*P+p*X+f*z+_*j,s[6]=g*O+p*B+f*Q+_*V,s[10]=g*M+p*pe+f*G+_*Z,s[14]=g*A+p*he+f*q+_*ae,s[3]=S*P+L*X+E*z+w*j,s[7]=S*O+L*B+E*Q+w*V,s[11]=S*M+L*pe+E*G+w*Z,s[15]=S*A+L*he+E*q+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+f*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],S=d*f*c-p*h*c+p*l*m-o*f*m-d*l*_+o*h*_,L=g*h*c-u*f*c-g*l*m+a*f*m+u*l*_-a*h*_,E=u*p*c-g*d*c+g*o*m-a*p*m-u*o*_+a*d*_,w=g*d*l-u*p*l-g*o*h+a*p*h+u*o*f-a*d*f,P=t*S+i*L+r*E+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=S*O,e[1]=(p*h*s-d*f*s-p*r*m+i*f*m+d*r*_-i*h*_)*O,e[2]=(o*f*s-p*l*s+p*r*c-i*f*c-o*r*_+i*l*_)*O,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*O,e[4]=L*O,e[5]=(u*f*s-g*h*s+g*r*m-t*f*m-u*r*_+t*h*_)*O,e[6]=(g*l*s-a*f*s-g*r*c+t*f*c+a*r*_-t*l*_)*O,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*O,e[8]=E*O,e[9]=(g*d*s-u*p*s-g*i*m+t*p*m+u*i*_-t*d*_)*O,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*O,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*O,e[12]=w*O,e[13]=(u*p*r-g*d*r+g*i*h-t*p*h-u*i*f+t*d*f)*O,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*f-t*o*f)*O,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,g=s*d,p=a*u,f=a*d,_=o*d,S=l*c,L=l*u,E=l*d,w=i.x,P=i.y,O=i.z;return r[0]=(1-(p+_))*w,r[1]=(m+E)*w,r[2]=(g-L)*w,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(h+_))*P,r[6]=(f+S)*P,r[7]=0,r[8]=(g+L)*O,r[9]=(f-S)*O,r[10]=(1-(h+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),o=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,d=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=d,kt.elements[9]*=d,kt.elements[10]*=d,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),d=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ei=new I,kt=new at,__=new I(0,0,0),v_=new I(1,1,1),Dn=new I,hs=new I,At=new I,Ac=new at,Cc=new jr;class $r{constructor(e=0,t=0,i=0,r=$r.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$r.DefaultOrder="XYZ";$r.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x_=0;const Lc=new I,Ti=new jr,_n=new at,fs=new I,mr=new I,y_=new I,b_=new jr,Rc=new I(1,0,0),Pc=new I(0,1,0),Dc=new I(0,0,1),M_={type:"added"},Ic={type:"removed"};class Tt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new I,t=new $r,i=new jr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ft}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(mr,fs,this.up):_n.lookAt(fs,mr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(_n),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(M_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new I(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const Bt=new I,vn=new I,No=new I,xn=new I,Ai=new I,Ci=new I,Fc=new I,Oo=new I,Uo=new I,zo=new I;class Mn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bt.subVectors(r,t),vn.subVectors(i,t),No.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(vn),l=Bt.dot(No),c=vn.dot(vn),u=vn.dot(No),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,xn),l.set(0,0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(e,t,i,r){return Bt.subVectors(i,t),vn.subVectors(e,t),Bt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Bt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Mn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,i),Ci.subVectors(s,i),Oo.subVectors(e,i);const l=Ai.dot(Oo),c=Ci.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,r);const u=Ai.dot(Uo),d=Ci.dot(Uo);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ai,a);zo.subVectors(e,s);const m=Ai.dot(zo),g=Ci.dot(zo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ci,o);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Fc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Fc,o);const _=1/(f+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let S_=0;class Yr extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=or(),this.name="",this.type="Material",this.blending=qi,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sg;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ld extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new I,ps=new We;class dn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Mc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Ke),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new We),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new I),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new ot),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Rd extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pd extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ci extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let w_=0;const Dt=new at,ko=new Tt,Li=new I,Ct=new Xr,gr=new Xr,ut=new I;class gi extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?Pd:Rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Ct.min,gr.min),Ct.expandByPoint(ut),ut.addVectors(Ct.max,gr.max),Ct.expandByPoint(ut)):(Ct.expandByPoint(gr.min),Ct.expandByPoint(gr.max))}Ct.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),ut.add(Li)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let X=0;X<o;X++)c[X]=new I,u[X]=new I;const d=new I,h=new I,m=new I,g=new We,p=new We,f=new We,_=new I,S=new I;function L(X,B,pe){d.fromArray(r,X*3),h.fromArray(r,B*3),m.fromArray(r,pe*3),g.fromArray(a,X*2),p.fromArray(a,B*2),f.fromArray(a,pe*2),h.sub(d),m.sub(d),p.sub(g),f.sub(g);const he=1/(p.x*f.y-f.x*p.y);!isFinite(he)||(_.copy(h).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(he),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(he),c[X].add(_),c[B].add(_),c[pe].add(_),u[X].add(S),u[B].add(S),u[pe].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let X=0,B=E.length;X<B;++X){const pe=E[X],he=pe.start,z=pe.count;for(let Q=he,G=he+z;Q<G;Q+=3)L(i[Q+0],i[Q+1],i[Q+2])}const w=new I,P=new I,O=new I,M=new I;function A(X){O.fromArray(s,X*3),M.copy(O);const B=c[X];w.copy(B),w.sub(O.multiplyScalar(O.dot(B))).normalize(),P.crossVectors(M,B);const he=P.dot(u[X])<0?-1:1;l[X*4]=w.x,l[X*4+1]=w.y,l[X*4+2]=w.z,l[X*4+3]=he}for(let X=0,B=E.length;X<B;++X){const pe=E[X],he=pe.start,z=pe.count;for(let Q=he,G=he+z;Q<G;Q+=3)A(i[Q+0]),A(i[Q+1]),A(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const a=i[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let d=0,h=c;d<u;d++,h++)a[h]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new dn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new at,Ri=new Cd,Bo=new Za,In=new I,Fn=new I,Nn=new I,Ho=new I,Go=new I,Vo=new I,ms=new I,gs=new I,_s=new I,vs=new We,xs=new We,ys=new We,Wo=new I,bs=new I;class Nt extends Tt{constructor(e=new gi,t=new Ld){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),e.ray.intersectsSphere(Bo)===!1)||(Nc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Nc),i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=r[_.materialIndex],L=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,P=E;w<P;w+=3){const O=o.getX(w),M=o.getX(w+1),A=o.getX(w+2);a=Ms(this,S,e,Ri,l,c,u,d,h,O,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=p,S=f;_<S;_+=3){const L=o.getX(_),E=o.getX(_+1),w=o.getX(_+2);a=Ms(this,r,e,Ri,l,c,u,d,h,L,E,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=r[_.materialIndex],L=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,P=E;w<P;w+=3){const O=w,M=w+1,A=w+2;a=Ms(this,S,e,Ri,l,c,u,d,h,O,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,S=f;_<S;_+=3){const L=_,E=_+1,w=_+2;a=Ms(this,r,e,Ri,l,c,u,d,h,L,E,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function E_(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==hi,o),l===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:n}}function Ms(n,e,t,i,r,s,a,o,l,c,u,d){In.fromBufferAttribute(r,c),Fn.fromBufferAttribute(r,u),Nn.fromBufferAttribute(r,d);const h=n.morphTargetInfluences;if(s&&h){ms.set(0,0,0),gs.set(0,0,0),_s.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=h[g],_=s[g];f!==0&&(Ho.fromBufferAttribute(_,c),Go.fromBufferAttribute(_,u),Vo.fromBufferAttribute(_,d),a?(ms.addScaledVector(Ho,f),gs.addScaledVector(Go,f),_s.addScaledVector(Vo,f)):(ms.addScaledVector(Ho.sub(In),f),gs.addScaledVector(Go.sub(Fn),f),_s.addScaledVector(Vo.sub(Nn),f)))}In.add(ms),Fn.add(gs),Nn.add(_s)}n.isSkinnedMesh&&(n.boneTransform(c,In),n.boneTransform(u,Fn),n.boneTransform(d,Nn));const m=E_(n,e,t,i,In,Fn,Nn,Wo);if(m){o&&(vs.fromBufferAttribute(o,c),xs.fromBufferAttribute(o,u),ys.fromBufferAttribute(o,d),m.uv=Mn.getUV(Wo,In,Fn,Nn,vs,xs,ys,new We)),l&&(vs.fromBufferAttribute(l,c),xs.fromBufferAttribute(l,u),ys.fromBufferAttribute(l,d),m.uv2=Mn.getUV(Wo,In,Fn,Nn,vs,xs,ys,new We));const g={a:c,b:u,c:d,normal:new I,materialIndex:0};Mn.getNormal(In,Fn,Nn,g.normal),m.face=g}return m}class ar extends gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(d,2));function g(p,f,_,S,L,E,w,P,O,M,A){const X=E/O,B=w/M,pe=E/2,he=w/2,z=P/2,Q=O+1,G=M+1;let q=0,j=0;const V=new I;for(let Z=0;Z<G;Z++){const ae=Z*B-he;for(let ie=0;ie<Q;ie++){const re=ie*X-pe;V[p]=re*S,V[f]=ae*L,V[_]=z,c.push(V.x,V.y,V.z),V[p]=0,V[f]=0,V[_]=P>0?1:-1,u.push(V.x,V.y,V.z),d.push(ie/O),d.push(1-Z/M),q+=1}}for(let Z=0;Z<M;Z++)for(let ae=0;ae<O;ae++){const ie=h+ae+Q*Z,re=h+ae+Q*(Z+1),Ae=h+(ae+1)+Q*(Z+1),F=h+(ae+1)+Q*Z;l.push(ie,re,F),l.push(re,Ae,F),j+=6}o.addGroup(m,j,A),m+=j,h+=q}}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ft(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}const T_={clone:er,merge:ft};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=A_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Dd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=90,Di=1;class L_ extends Tt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Lt(Pi,Di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new Lt(Pi,Di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new Lt(Pi,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Lt(Pi,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Lt(Pi,Di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Lt(Pi,Di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Id extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R_ extends mi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Id(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===oo&&(t.minFilter=It),new L_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const qo=new I,P_=new I,D_=new Ft;class Jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qo.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D_.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Za,Ss=new I;class Ja{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],m=i[9],g=i[10],p=i[11],f=i[12],_=i[13],S=i[14],L=i[15];return t[0].setComponents(o-r,d-l,p-h,L-f).normalize(),t[1].setComponents(o+r,d+l,p+h,L+f).normalize(),t[2].setComponents(o+s,d+c,p+m,L+_).normalize(),t[3].setComponents(o-s,d-c,p-m,L-_).normalize(),t[4].setComponents(o-a,d-u,p-g,L-S).normalize(),t[5].setComponents(o+a,d+u,p+g,L+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function I_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class lr extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const S=_*h-a;for(let L=0;L<c;L++){const E=L*d-s;g.push(E,-S,0),p.push(0,0,1),f.push(L/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const L=S+c*_,E=S+c*(_+1),w=S+1+c*(_+1),P=S+1+c*_;m.push(L,E,P),m.push(E,w,P)}this.setIndex(m),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(p,3)),this.setAttribute("uv",new ci(f,2))}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_="vec3 transformed = vec3( position );",H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,V_=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,W_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,v0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,b0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,X0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ev=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Av=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$v=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:F_,alphamap_pars_fragment:N_,alphatest_fragment:O_,alphatest_pars_fragment:U_,aomap_fragment:z_,aomap_pars_fragment:k_,begin_vertex:B_,beginnormal_vertex:H_,bsdfs:G_,iridescence_fragment:V_,bumpmap_pars_fragment:W_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:$_,color_fragment:Y_,color_pars_fragment:Z_,color_pars_vertex:K_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:e0,defaultnormal_vertex:t0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:r0,emissivemap_pars_fragment:s0,encodings_fragment:o0,encodings_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:M0,envmap_vertex:h0,fog_vertex:f0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_vertex:y0,lights_pars_begin:b0,lights_toon_fragment:S0,lights_toon_pars_fragment:w0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:L0,lights_fragment_maps:R0,lights_fragment_end:P0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:N0,map_fragment:O0,map_pars_fragment:U0,map_particle_fragment:z0,map_particle_pars_fragment:k0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:H0,morphcolor_vertex:G0,morphnormal_vertex:V0,morphtarget_pars_vertex:W0,morphtarget_vertex:q0,normal_fragment_begin:j0,normal_fragment_maps:X0,normal_pars_fragment:$0,normal_pars_vertex:Y0,normal_vertex:Z0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,output_fragment:nv,packing:iv,premultiplied_alpha_fragment:rv,project_vertex:sv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:lv,roughnessmap_pars_fragment:cv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:hv,shadowmask_pars_fragment:fv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:_v,specularmap_fragment:vv,specularmap_pars_fragment:xv,tonemapping_fragment:yv,tonemapping_pars_fragment:bv,transmission_fragment:Mv,transmission_pars_fragment:Sv,uv_pars_fragment:wv,uv_pars_vertex:Ev,uv_vertex:Tv,uv2_pars_fragment:Av,uv2_pars_vertex:Cv,uv2_vertex:Lv,worldpos_vertex:Rv,background_vert:Pv,background_frag:Dv,cube_vert:Iv,cube_frag:Fv,depth_vert:Nv,depth_frag:Ov,distanceRGBA_vert:Uv,distanceRGBA_frag:zv,equirect_vert:kv,equirect_frag:Bv,linedashed_vert:Hv,linedashed_frag:Gv,meshbasic_vert:Vv,meshbasic_frag:Wv,meshlambert_vert:qv,meshlambert_frag:jv,meshmatcap_vert:Xv,meshmatcap_frag:$v,meshnormal_vert:Yv,meshnormal_frag:Zv,meshphong_vert:Kv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:sx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},an={basic:{uniforms:ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ft([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ft([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ft([ye.points,ye.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ft([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ft([ye.common,ye.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ft([ye.sprite,ye.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:ft([ye.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ft([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ft([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:ft([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function cx(n,e,t,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function m(p,f){let _=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=e.get(S));const L=n.xr,E=L.getSession&&L.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?g(a,o):S&&S.isColor&&(g(S,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===so)?(c===void 0&&(c=new Nt(new ar(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:er(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Nt(new lr(2,2),new fn({name:"BackgroundMaterial",uniforms:er(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function ux(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=f(null);let c=l,u=!1;function d(z,Q,G,q,j){let V=!1;if(a){const Z=p(q,G,Q);c!==Z&&(c=Z,m(c.object)),V=_(z,q,G,j),V&&S(z,q,G,j)}else{const Z=Q.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=G.id,c.wireframe=Z,V=!0)}j!==null&&t.update(j,34963),(V||u)&&(u=!1,M(z,Q,G,q),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,Q,G){const q=G.wireframe===!0;let j=o[z.id];j===void 0&&(j={},o[z.id]=j);let V=j[Q.id];V===void 0&&(V={},j[Q.id]=V);let Z=V[q];return Z===void 0&&(Z=f(h()),V[q]=Z),Z}function f(z){const Q=[],G=[],q=[];for(let j=0;j<r;j++)Q[j]=0,G[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:G,attributeDivisors:q,object:z,attributes:{},index:null}}function _(z,Q,G,q){const j=c.attributes,V=Q.attributes;let Z=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const Ae=j[ie];let F=V[ie];if(F===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),Ae===void 0||Ae.attribute!==F||F&&Ae.data!==F.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function S(z,Q,G,q){const j={},V=Q.attributes;let Z=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let Ae=V[ie];Ae===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(Ae=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(Ae=z.instanceColor));const F={};F.attribute=Ae,Ae&&Ae.data&&(F.data=Ae.data),j[ie]=F,Z++}c.attributes=j,c.attributesNum=Z,c.index=q}function L(){const z=c.newAttributes;for(let Q=0,G=z.length;Q<G;Q++)z[Q]=0}function E(z){w(z,0)}function w(z,Q){const G=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;G[z]=1,q[z]===0&&(n.enableVertexAttribArray(z),q[z]=1),j[z]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Q),j[z]=Q)}function P(){const z=c.newAttributes,Q=c.enabledAttributes;for(let G=0,q=Q.length;G<q;G++)Q[G]!==z[G]&&(n.disableVertexAttribArray(G),Q[G]=0)}function O(z,Q,G,q,j,V){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(z,Q,G,j,V):n.vertexAttribPointer(z,Q,G,q,j,V)}function M(z,Q,G,q){if(i.isWebGL2===!1&&(z.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const j=q.attributes,V=G.getAttributes(),Z=Q.defaultAttributeValues;for(const ae in V){const ie=V[ae];if(ie.location>=0){let re=j[ae];if(re===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),re!==void 0){const Ae=re.normalized,F=re.itemSize,D=t.get(re);if(D===void 0)continue;const oe=D.buffer,ce=D.type,Ee=D.bytesPerElement;if(re.isInterleavedBufferAttribute){const ue=re.data,Te=ue.stride,xe=re.offset;if(ue.isInstancedInterleavedBuffer){for(let y=0;y<ie.locationSize;y++)w(ie.location+y,ue.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let y=0;y<ie.locationSize;y++)E(ie.location+y);n.bindBuffer(34962,oe);for(let y=0;y<ie.locationSize;y++)O(ie.location+y,F/ie.locationSize,ce,Ae,Te*Ee,(xe+F/ie.locationSize*y)*Ee)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)w(ie.location+ue,re.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<ie.locationSize;ue++)E(ie.location+ue);n.bindBuffer(34962,oe);for(let ue=0;ue<ie.locationSize;ue++)O(ie.location+ue,F/ie.locationSize,ce,Ae,F*Ee,F/ie.locationSize*ue*Ee)}}else if(Z!==void 0){const Ae=Z[ae];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(ie.location,Ae);break;case 3:n.vertexAttrib3fv(ie.location,Ae);break;case 4:n.vertexAttrib4fv(ie.location,Ae);break;default:n.vertexAttrib1fv(ie.location,Ae)}}}}P()}function A(){pe();for(const z in o){const Q=o[z];for(const G in Q){const q=Q[G];for(const j in q)g(q[j].object),delete q[j];delete Q[G]}delete o[z]}}function X(z){if(o[z.id]===void 0)return;const Q=o[z.id];for(const G in Q){const q=Q[G];for(const j in q)g(q[j].object),delete q[j];delete Q[G]}delete o[z.id]}function B(z){for(const Q in o){const G=o[Q];if(G[z.id]===void 0)continue;const q=G[z.id];for(const j in q)g(q[j].object),delete q[j];delete G[z.id]}}function pe(){he(),u=!0,c!==l&&(c=l,m(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:pe,resetDefaultState:he,dispose:A,releaseStatesOfGeometry:X,releaseStatesOfProgram:B,initAttributes:L,enableAttribute:E,disableUnusedAttributes:P}}function dx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function hx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),_=n.getParameter(36348),S=n.getParameter(36349),L=h>0,E=a||e.has("OES_texture_float"),w=L&&E,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:L,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:P}}function fx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Jn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const g=d.length!==0||h||i!==0||r;return r=h,t=u(d,m,0),i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=n.get(d);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const S=s?0:i,L=S*4;let E=_.clippingState||null;l.value=E,E=u(g,h,L,m);for(let w=0;w!==L;++w)E[w]=t[w];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let L=0,E=m;L!==p;++L,E+=4)a.copy(d[L]).applyMatrix4(S,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function px(n){let e=new WeakMap;function t(a,o){return o===_a?a.mapping=Ki:o===va&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===_a||o===va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new R_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mx extends Dd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Oc=[.125,.215,.35,.446,.526,.582],ti=20,jo=new mx,Uc=new Ke;let Xo=null;const Qn=(1+Math.sqrt(5))/2,Fi=1/Qn,zc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Qn,Fi),new I(0,Qn,-Fi),new I(Fi,0,Qn),new I(-Fi,0,Qn),new I(Qn,Fi,0),new I(-Qn,Fi,0)];class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Br,format:un,encoding:pi,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(s)),this._blurMaterial=_x(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const o=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Sn,u.autoClear=!1;const m=new Ld({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Nt(new ar,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Uc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const L=this._cubeSize;ws(r,S*L,_>2?L:0,L,L),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zc[(r-1)%zc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ti-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):ti;f>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ti}`);const _=[];let S=0;for(let O=0;O<ti;++O){const M=O/p,A=Math.exp(-M*M/2);_.push(A),O===0?S+=A:O<f&&(S+=2*A)}for(let O=0;O<_.length;O++)_[O]=_[O]/S;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:L}=this;h.dTheta.value=g,h.mipInt.value=L-i;const E=this._sizeLods[r],w=3*E*(r>L-Bi?r-L+Bi:0),P=4*(this._cubeSize-E);ws(t,w,P,3*E,2*E),l.setRenderTarget(t),l.render(d,jo)}}function gx(n){const e=[],t=[],i=[];let r=n;const s=n-Bi+1+Oc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Bi?l=Oc[a-n+Bi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,p=3,f=2,_=1,S=new Float32Array(p*g*m),L=new Float32Array(f*g*m),E=new Float32Array(_*g*m);for(let P=0;P<m;P++){const O=P%3*2/3-1,M=P>2?0:-1,A=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];S.set(A,p*g*P),L.set(h,f*g*P);const X=[P,P,P,P,P,P];E.set(X,_*g*P)}const w=new gi;w.setAttribute("position",new dn(S,p)),w.setAttribute("uv",new dn(L,f)),w.setAttribute("faceIndex",new dn(E,_)),e.push(w),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new mi(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _x(n,e,t){const i=new Float32Array(ti),r=new I(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hc(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Gc(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===va,u=l===Ki||l===Ji;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new kc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new kc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yx(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let L=0,E=S.length;L<E;L+=3){const w=S[L+0],P=S[L+1],O=S[L+2];h.push(w,P,P,O,O,w)}}else{const S=g.array;p=g.version;for(let L=0,E=S.length/3-1;L<E;L+=3){const w=L+0,P=L+1,O=L+2;h.push(w,P,P,O,O,w)}}const f=new(Sd(h)?Pd:Rd)(h,1);f.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function bx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function d(h,m,g){if(g===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function Mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sx(n,e){return n[0]-e[0]}function wx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $o(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Ex(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==f){let G=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let X=0;E===!0&&(X=1),w===!0&&(X=2),P===!0&&(X=3);let B=u.attributes.position.count*X,pe=1;B>e.maxTextureSize&&(pe=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const he=new Float32Array(B*pe*4*f),z=new Ad(he,B,pe,f);z.type=ii,z.needsUpdate=!0;const Q=X*4;for(let q=0;q<f;q++){const j=O[q],V=M[q],Z=A[q],ae=B*pe*4*q;for(let ie=0;ie<j.count;ie++){const re=ie*Q;E===!0&&(a.fromBufferAttribute(j,ie),j.normalized===!0&&$o(a,j),he[ae+re+0]=a.x,he[ae+re+1]=a.y,he[ae+re+2]=a.z,he[ae+re+3]=0),w===!0&&(a.fromBufferAttribute(V,ie),V.normalized===!0&&$o(a,V),he[ae+re+4]=a.x,he[ae+re+5]=a.y,he[ae+re+6]=a.z,he[ae+re+7]=0),P===!0&&(a.fromBufferAttribute(Z,ie),Z.normalized===!0&&$o(a,Z),he[ae+re+8]=a.x,he[ae+re+9]=a.y,he[ae+re+10]=a.z,he[ae+re+11]=Z.itemSize===4?a.w:1)}}_={count:f,texture:z,size:new We(B,pe)},s.set(u,_),u.addEventListener("dispose",G)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const L=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",L),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=i[u.id];if(f===void 0||f.length!==p){f=[];for(let w=0;w<p;w++)f[w]=[w,0];i[u.id]=f}for(let w=0;w<p;w++){const P=f[w];P[0]=w,P[1]=m[w]}f.sort(wx);for(let w=0;w<8;w++)w<p&&f[w][1]?(o[w][0]=f[w][0],o[w][1]=f[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(Sx);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let L=0;for(let w=0;w<8;w++){const P=o[w],O=P[0],M=P[1];O!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+w)!==_[O]&&u.setAttribute("morphTarget"+w,_[O]),S&&u.getAttribute("morphNormal"+w)!==S[O]&&u.setAttribute("morphNormal"+w,S[O]),r[w]=M,L+=M):(_&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),S&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const E=u.morphTargetsRelative?1:1-L;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Tx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Nd=new Yt,Od=new Ad,Ud=new m_,zd=new Id,Vc=[],Wc=[],qc=new Float32Array(16),jc=new Float32Array(9),Xc=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vc[r];if(s===void 0&&(s=new Float32Array(r),Vc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),bt(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),bt(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;qc.set(i),n.uniformMatrix4fv(this.addr,!1,qc),bt(t,i)}}function Fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;yt(t,e)||(n.uniform2iv(this.addr,e),bt(t,e))}function Ox(n,e){const t=this.cache;yt(t,e)||(n.uniform3iv(this.addr,e),bt(t,e))}function Ux(n,e){const t=this.cache;yt(t,e)||(n.uniform4iv(this.addr,e),bt(t,e))}function zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;yt(t,e)||(n.uniform2uiv(this.addr,e),bt(t,e))}function Bx(n,e){const t=this.cache;yt(t,e)||(n.uniform3uiv(this.addr,e),bt(t,e))}function Hx(n,e){const t=this.cache;yt(t,e)||(n.uniform4uiv(this.addr,e),bt(t,e))}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Nd,r)}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Od,r)}function jx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Lx;case 35666:return Rx;case 35674:return Px;case 35675:return Dx;case 35676:return Ix;case 5124:case 35670:return Fx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ox;case 35669:case 35673:return Ux;case 5125:return zx;case 36294:return kx;case 36295:return Bx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return qx}}function Xx(n,e){n.uniform1fv(this.addr,e)}function $x(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Yx(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Zx(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Kx(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ey(n,e){n.uniform1iv(this.addr,e)}function ty(n,e){n.uniform2iv(this.addr,e)}function ny(n,e){n.uniform3iv(this.addr,e)}function iy(n,e){n.uniform4iv(this.addr,e)}function ry(n,e){n.uniform1uiv(this.addr,e)}function sy(n,e){n.uniform2uiv(this.addr,e)}function oy(n,e){n.uniform3uiv(this.addr,e)}function ay(n,e){n.uniform4uiv(this.addr,e)}function ly(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Nd,r[s])}function cy(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ud,r[s])}function uy(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||zd,r[s])}function dy(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Od,r[s])}function hy(n){switch(n){case 5126:return Xx;case 35664:return $x;case 35665:return Yx;case 35666:return Zx;case 35674:return Kx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return sy;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}class fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jx(t.type)}}class py{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=hy(t.type)}}class my{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function gy(n,e,t){const i=n.name,r=i.length;for(Yo.lastIndex=0;;){const s=Yo.exec(i),a=Yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$c(t,c===void 0?new fy(o,n,e):new py(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new my(o),$c(t,d)),t=d}}}class Fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);gy(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let _y=0;function vy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function xy(n){switch(n){case pi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Zc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vy(n.getShaderSource(e),a)}else return r}function yy(n,e){const t=xy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function by(n,e){let t;switch(e){case Ag:t="Linear";break;case Cg:t="Reinhard";break;case Lg:t="OptimizedCineon";break;case Rg:t="ACESFilmic";break;case Pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function My(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Sy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wy(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Mr(n){return n!==""}function Kc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(n){return n.replace(Ey,Ty)}function Ty(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}const Ay=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(n){return n.replace(Cy,kd).replace(Ay,Ly)}function Ly(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),kd(n,e,t,i)}function kd(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ry(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function Py(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Iy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Eg:e="ENVMAP_BLENDING_MIX";break;case Tg:e="ENVMAP_BLENDING_ADD";break}return e}function Fy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ny(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ry(t),c=Py(t),u=Dy(t),d=Iy(t),h=Fy(t),m=t.isWebGL2?"":My(t),g=Sy(s),p=r.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Mr).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Mr).join(`
`),_.length>0&&(_+=`
`)):(f=[eu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),_=[m,eu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,yy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Sa(a),a=Kc(a,t),a=Jc(a,t),o=Sa(o),o=Kc(o,t),o=Jc(o,t),a=Qc(a),o=Qc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=S+f+a,E=S+_+o,w=Yc(r,35633,L),P=Yc(r,35632,E);if(r.attachShader(p,w),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),X=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(P).trim();let pe=!0,he=!0;if(r.getProgramParameter(p,35714)===!1){pe=!1;const z=Zc(r,w,"vertex"),Q=Zc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+z+`
`+Q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(X===""||B==="")&&(he=!1);he&&(this.diagnostics={runnable:pe,programLog:A,vertexShader:{log:X,prefix:f},fragmentShader:{log:B,prefix:_}})}r.deleteShader(w),r.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new Fs(r,p)),O};let M;return this.getAttributes=function(){return M===void 0&&(M=wy(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=P,this}let Oy=0;class Uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new zy(e);t.set(e,i)}return t.get(e)}}class zy{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}}function ky(n,e,t,i,r,s,a){const o=new Ka,l=new Uy,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,X,B,pe){const he=B.fog,z=pe.geometry,Q=M.isMeshStandardMaterial?B.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),q=!!G&&G.mapping===so?G.image.height:null,j=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=V!==void 0?V.length:0;let ae=0;z.morphAttributes.position!==void 0&&(ae=1),z.morphAttributes.normal!==void 0&&(ae=2),z.morphAttributes.color!==void 0&&(ae=3);let ie,re,Ae,F;if(j){const Te=an[j];ie=Te.vertexShader,re=Te.fragmentShader}else ie=M.vertexShader,re=M.fragmentShader,l.update(M),Ae=l.getVertexShaderID(M),F=l.getFragmentShaderID(M);const D=n.getRenderTarget(),oe=M.alphaTest>0,ce=M.clearcoat>0,Ee=M.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:M.type,vertexShader:ie,fragmentShader:re,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:D===null?n.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:pi,map:!!M.map,matcap:!!M.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Zg,tangentSpaceNormalMap:M.normalMapType===Md,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===nt,clearcoat:ce,clearcoatMap:ce&&!!M.clearcoatMap,clearcoatRoughnessMap:ce&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!M.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!M.iridescenceMap,iridescenceThicknessMap:Ee&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===qi,alphaMap:!!M.alphaMap,alphaTest:oe,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!z.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!he,useFog:M.fog===!0,fogExp2:he&&he.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:pe.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Sn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===Xt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(_(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),A.fog&&o.enable(33),M.push(o.mask),o.disableAll(),A.useFog&&o.enable(0),A.flatShading&&o.enable(1),A.logarithmicDepthBuffer&&o.enable(2),A.skinning&&o.enable(3),A.morphTargets&&o.enable(4),A.morphNormals&&o.enable(5),A.morphColors&&o.enable(6),A.premultipliedAlpha&&o.enable(7),A.shadowMapEnabled&&o.enable(8),A.physicallyCorrectLights&&o.enable(9),A.doubleSided&&o.enable(10),A.flipSided&&o.enable(11),A.useDepthPacking&&o.enable(12),A.dithering&&o.enable(13),A.specularIntensityMap&&o.enable(14),A.specularColorMap&&o.enable(15),A.transmission&&o.enable(16),A.transmissionMap&&o.enable(17),A.thicknessMap&&o.enable(18),A.sheen&&o.enable(19),A.sheenColorMap&&o.enable(20),A.sheenRoughnessMap&&o.enable(21),A.decodeVideoTexture&&o.enable(22),A.opaque&&o.enable(23),M.push(o.mask)}function L(M){const A=g[M.type];let X;if(A){const B=an[A];X=T_.clone(B.uniforms)}else X=M.uniforms;return X}function E(M,A){let X;for(let B=0,pe=c.length;B<pe;B++){const he=c[B];if(he.cacheKey===A){X=he,++X.usedTimes;break}}return X===void 0&&(X=new Ny(n,A,M,s),c.push(X)),X}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:L,acquireProgram:E,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:O}}function By(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Hy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,m,g,p,f){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},n[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),e++,_}function o(d,h,m,g,p,f){const _=a(d,h,m,g,p,f);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(d,h,m,g,p,f){const _=a(d,h,m,g,p,f);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||Hy),i.length>1&&i.sort(h||tu),r.length>1&&r.sort(h||tu)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Gy(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new nu,n.set(i,[s])):r>=n.get(i).length?(s=new nu,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Wy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qy=0;function jy(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Xy(n,e){const t=new Vy,i=Wy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new at,o=new at;function l(u,d){let h=0,m=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,f=0,_=0,S=0,L=0,E=0,w=0,P=0;u.sort(jy);const O=d!==!0?Math.PI:1;for(let A=0,X=u.length;A<X;A++){const B=u[A],pe=B.color,he=B.intensity,z=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=pe.r*he*O,m+=pe.g*he*O,g+=pe.b*he*O;else if(B.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],he);else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*O),B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[p]=j,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=B.shadow.matrix,E++}r.directional[p]=G,p++}else if(B.isSpotLight){const G=t.get(B);if(G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(pe).multiplyScalar(he*O),G.distance=z,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[_]=j,r.spotShadowMap[_]=Q,r.spotShadowMatrix[_]=B.shadow.matrix,P++}r.spot[_]=G,_++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(pe).multiplyScalar(he),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=G,S++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*O),G.distance=B.distance,G.decay=B.decay,B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[f]=j,r.pointShadowMap[f]=Q,r.pointShadowMatrix[f]=B.shadow.matrix,w++}r.point[f]=G,f++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(he*O),G.groundColor.copy(B.groundColor).multiplyScalar(he*O),r.hemi[L]=G,L++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==p||M.pointLength!==f||M.spotLength!==_||M.rectAreaLength!==S||M.hemiLength!==L||M.numDirectionalShadows!==E||M.numPointShadows!==w||M.numSpotShadows!==P)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=S,r.point.length=f,r.hemi.length=L,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=P,M.directionalLength=p,M.pointLength=f,M.spotLength=_,M.rectAreaLength=S,M.hemiLength=L,M.numDirectionalShadows=E,M.numPointShadows=w,M.numSpotShadows=P,r.version=qy++)}function c(u,d){let h=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let S=0,L=u.length;S<L;S++){const E=u[S];if(E.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(E.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const w=r.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:r}}function iu(n,e){const t=new Xy(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $y(n,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new iu(n,e),t.set(s,[o])):a>=t.get(s).length?(o=new iu(n,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yy extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zy extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qy(n,e,t){let i=new Ja;const r=new We,s=new We,a=new ot,o=new Yy({depthPacking:Yg}),l=new Zy,c={},u=t.maxTextureSize,d={0:Xt,1:kr,2:hi},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ky,fragmentShader:Jy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Nt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd,this.render=function(E,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const O=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Vn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let B=0,pe=E.length;B<pe;B++){const he=E[B],z=he.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Q=z.getFrameExtents();if(r.multiply(Q),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,z.mapSize.y=s.y)),z.map===null){const q=this.type!==br?{minFilter:St,magFilter:St}:{};z.map=new mi(r.x,r.y,q),z.map.texture.name=he.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const G=z.getViewportCount();for(let q=0;q<G;q++){const j=z.getViewport(q);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),X.viewport(a),z.updateMatrices(he,q),i=z.getFrustum(),L(w,P,z.camera,he,this.type)}z.isPointLightShadow!==!0&&this.type===br&&_(z,P),z.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(O,M,A)};function _(E,w){const P=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,P,h,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,P,m,p,null)}function S(E,w,P,O,M,A){let X=null;const B=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0?X=B:X=P.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const pe=X.uuid,he=w.uuid;let z=c[pe];z===void 0&&(z={},c[pe]=z);let Q=z[he];Q===void 0&&(Q=X.clone(),z[he]=Q),X=Q}return X.visible=w.visible,X.wireframe=w.wireframe,A===br?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:d[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaTest,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,P.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(P.matrixWorld),X.nearDistance=O,X.farDistance=M),X}function L(E,w,P,O,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===br)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const B=e.update(E),pe=E.material;if(Array.isArray(pe)){const he=B.groups;for(let z=0,Q=he.length;z<Q;z++){const G=he[z],q=pe[G.materialIndex];if(q&&q.visible){const j=S(E,q,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,j,E,G)}}}else if(pe.visible){const he=S(E,pe,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,he,E,null)}}const X=E.children;for(let B=0,pe=X.length;B<pe;B++)L(X[B],w,P,O,M)}}function eb(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const me=new ot;let ge=null;const Ce=new ot(0,0,0,0);return{setMask:function(be){ge!==be&&!C&&(n.colorMask(be,be,be,be),ge=be)},setLocked:function(be){C=be},setClear:function(be,Re,fe,Ie,Xe){Xe===!0&&(be*=Ie,Re*=Ie,fe*=Ie),me.set(be,Re,fe,Ie),Ce.equals(me)===!1&&(n.clearColor(be,Re,fe,Ie),Ce.copy(me))},reset:function(){C=!1,ge=null,Ce.set(-1,0,0,0)}}}function s(){let C=!1,me=null,ge=null,Ce=null;return{setTest:function(be){be?F(2929):D(2929)},setMask:function(be){me!==be&&!C&&(n.depthMask(be),me=be)},setFunc:function(be){if(ge!==be){if(be)switch(be){case vg:n.depthFunc(512);break;case xg:n.depthFunc(519);break;case yg:n.depthFunc(513);break;case ga:n.depthFunc(515);break;case bg:n.depthFunc(514);break;case Mg:n.depthFunc(518);break;case Sg:n.depthFunc(516);break;case wg:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ge=be}},setLocked:function(be){C=be},setClear:function(be){Ce!==be&&(n.clearDepth(be),Ce=be)},reset:function(){C=!1,me=null,ge=null,Ce=null}}}function a(){let C=!1,me=null,ge=null,Ce=null,be=null,Re=null,fe=null,Ie=null,Xe=null;return{setTest:function($e){C||($e?F(2960):D(2960))},setMask:function($e){me!==$e&&!C&&(n.stencilMask($e),me=$e)},setFunc:function($e,mt,Kt){(ge!==$e||Ce!==mt||be!==Kt)&&(n.stencilFunc($e,mt,Kt),ge=$e,Ce=mt,be=Kt)},setOp:function($e,mt,Kt){(Re!==$e||fe!==mt||Ie!==Kt)&&(n.stencilOp($e,mt,Kt),Re=$e,fe=mt,Ie=Kt)},setLocked:function($e){C=$e},setClear:function($e){Xe!==$e&&(n.clearStencil($e),Xe=$e)},reset:function(){C=!1,me=null,ge=null,Ce=null,be=null,Re=null,fe=null,Ie=null,Xe=null}}}const o=new r,l=new s,c=new a;let u={},d={},h=new WeakMap,m=[],g=null,p=!1,f=null,_=null,S=null,L=null,E=null,w=null,P=null,O=!1,M=null,A=null,X=null,B=null,pe=null;const he=n.getParameter(35661);let z=!1,Q=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Q>=2);let q=null,j={};const V=n.getParameter(3088),Z=n.getParameter(2978),ae=new ot().fromArray(V),ie=new ot().fromArray(Z);function re(C,me,ge){const Ce=new Uint8Array(4),be=n.createTexture();n.bindTexture(C,be),n.texParameteri(C,10241,9728),n.texParameteri(C,10240,9728);for(let Re=0;Re<ge;Re++)n.texImage2D(me+Re,0,6408,1,1,0,6408,5121,Ce);return be}const Ae={};Ae[3553]=re(3553,3553,1),Ae[34067]=re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(2929),l.setFunc(ga),T(!1),U(Xl),F(2884),xe(Vn);function F(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function D(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function oe(C,me){return d[C]!==me?(n.bindFramebuffer(C,me),d[C]=me,i&&(C===36009&&(d[36160]=me),C===36160&&(d[36009]=me)),!0):!1}function ce(C,me){let ge=m,Ce=!1;if(C)if(ge=h.get(me),ge===void 0&&(ge=[],h.set(me,ge)),C.isWebGLMultipleRenderTargets){const be=C.texture;if(ge.length!==be.length||ge[0]!==36064){for(let Re=0,fe=be.length;Re<fe;Re++)ge[Re]=36064+Re;ge.length=be.length,Ce=!0}}else ge[0]!==36064&&(ge[0]=36064,Ce=!0);else ge[0]!==1029&&(ge[0]=1029,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ee(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const ue={[zi]:32774,[ag]:32778,[lg]:32779};if(i)ue[Kl]=32775,ue[Jl]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ue[Kl]=C.MIN_EXT,ue[Jl]=C.MAX_EXT)}const Te={[cg]:0,[ug]:1,[dg]:768,[_d]:770,[_g]:776,[mg]:774,[fg]:772,[hg]:769,[vd]:771,[gg]:775,[pg]:773};function xe(C,me,ge,Ce,be,Re,fe,Ie){if(C===Vn){p===!0&&(D(3042),p=!1);return}if(p===!1&&(F(3042),p=!0),C!==og){if(C!==f||Ie!==O){if((_!==zi||E!==zi)&&(n.blendEquation(32774),_=zi,E=zi),Ie)switch(C){case qi:n.blendFuncSeparate(1,771,1,771);break;case $l:n.blendFunc(1,1);break;case Yl:n.blendFuncSeparate(0,769,0,1);break;case Zl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case qi:n.blendFuncSeparate(770,771,1,771);break;case $l:n.blendFunc(770,1);break;case Yl:n.blendFuncSeparate(0,769,0,1);break;case Zl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,L=null,w=null,P=null,f=C,O=Ie}return}be=be||me,Re=Re||ge,fe=fe||Ce,(me!==_||be!==E)&&(n.blendEquationSeparate(ue[me],ue[be]),_=me,E=be),(ge!==S||Ce!==L||Re!==w||fe!==P)&&(n.blendFuncSeparate(Te[ge],Te[Ce],Te[Re],Te[fe]),S=ge,L=Ce,w=Re,P=fe),f=C,O=null}function y(C,me){C.side===hi?D(2884):F(2884);let ge=C.side===Xt;me&&(ge=!ge),T(ge),C.blending===qi&&C.transparent===!1?xe(Vn):xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Ce=C.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),J(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?F(32926):D(32926)}function T(C){M!==C&&(C?n.frontFace(2304):n.frontFace(2305),M=C)}function U(C){C!==ng?(F(2884),C!==A&&(C===Xl?n.cullFace(1029):C===ig?n.cullFace(1028):n.cullFace(1032))):D(2884),A=C}function K(C){C!==X&&(z&&n.lineWidth(C),X=C)}function J(C,me,ge){C?(F(32823),(B!==me||pe!==ge)&&(n.polygonOffset(me,ge),B=me,pe=ge)):D(32823)}function ne(C){C?F(3089):D(3089)}function se(C){C===void 0&&(C=33984+he-1),q!==C&&(n.activeTexture(C),q=C)}function le(C,me){q===null&&se();let ge=j[q];ge===void 0&&(ge={type:void 0,texture:void 0},j[q]=ge),(ge.type!==C||ge.texture!==me)&&(n.bindTexture(C,me||Ae[C]),ge.type=C,ge.texture=me)}function de(){const C=j[q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function v(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(C){ae.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function Me(C){ie.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Se(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,j={},d={},h=new WeakMap,m=[],g=null,p=!1,f=null,_=null,S=null,L=null,E=null,w=null,P=null,O=!1,M=null,A=null,X=null,B=null,pe=null,ae.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:F,disable:D,bindFramebuffer:oe,drawBuffers:ce,useProgram:Ee,setBlending:xe,setMaterial:y,setFlipSided:T,setCullFace:U,setLineWidth:K,setPolygonOffset:J,setScissorTest:ne,activeTexture:se,bindTexture:le,unbindTexture:de,compressedTexImage2D:x,texImage2D:we,texImage3D:N,texStorage2D:Y,texStorage3D:te,texSubImage2D:v,texSubImage3D:R,compressedTexSubImage2D:H,scissor:ve,viewport:Me,reset:Se}}function tb(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,v){return _?new OffscreenCanvas(x,v):Vs("canvas")}function L(x,v,R,H){let Y=1;if((x.width>H||x.height>H)&&(Y=H/Math.max(x.width,x.height)),Y<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const te=v?Gs:Math.floor,we=te(Y*x.width),N=te(Y*x.height);p===void 0&&(p=S(we,N));const ve=R?S(we,N):p;return ve.width=we,ve.height=N,ve.getContext("2d").drawImage(x,0,0,we,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+we+"x"+N+")."),ve}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function E(x){return Ma(x.width)&&Ma(x.height)}function w(x){return o?!1:x.wrapS!==Gt||x.wrapT!==Gt||x.minFilter!==St&&x.minFilter!==It}function P(x,v){return x.generateMipmaps&&v&&x.minFilter!==St&&x.minFilter!==It}function O(x){n.generateMipmap(x)}function M(x,v,R,H,Y=!1){if(o===!1)return v;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let te=v;return v===6403&&(R===5126&&(te=33326),R===5131&&(te=33325),R===5121&&(te=33321)),v===33319&&(R===5126&&(te=33328),R===5131&&(te=33327),R===5121&&(te=33323)),v===6408&&(R===5126&&(te=34836),R===5131&&(te=34842),R===5121&&(te=H===nt&&Y===!1?35907:32856),R===32819&&(te=32854),R===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function A(x,v,R){return P(x,R)===!0||x.isFramebufferTexture&&x.minFilter!==St&&x.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function X(x){return x===St||x===Ql||x===ec?9728:9729}function B(x){const v=x.target;v.removeEventListener("dispose",B),he(v),v.isVideoTexture&&g.delete(v)}function pe(x){const v=x.target;v.removeEventListener("dispose",pe),Q(v)}function he(x){const v=i.get(x);if(v.__webglInit===void 0)return;const R=x.source,H=f.get(R);if(H){const Y=H[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&z(x),Object.keys(H).length===0&&f.delete(R)}i.remove(x)}function z(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const R=x.source,H=f.get(R);delete H[v.__cacheKey],a.memory.textures--}function Q(x){const v=x.texture,R=i.get(x),H=i.get(v);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(R.__webglFramebuffer[Y]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let Y=0,te=v.length;Y<te;Y++){const we=i.get(v[Y]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(v[Y])}i.remove(v),i.remove(x)}let G=0;function q(){G=0}function j(){const x=G;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),G+=1,x}function V(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.encoding),v.join()}function Z(x,v){const R=i.get(x);if(x.isVideoTexture&&le(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(R,x,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,R.__webglTexture)}function ae(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ce(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(35866,R.__webglTexture)}function ie(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ce(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(32879,R.__webglTexture)}function re(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){Ee(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(34067,R.__webglTexture)}const Ae={[xa]:10497,[Gt]:33071,[ya]:33648},F={[St]:9728,[Ql]:9984,[ec]:9986,[It]:9729,[Dg]:9985,[oo]:9987};function D(x,v,R){if(R?(n.texParameteri(x,10242,Ae[v.wrapS]),n.texParameteri(x,10243,Ae[v.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,Ae[v.wrapR]),n.texParameteri(x,10240,F[v.magFilter]),n.texParameteri(x,10241,F[v.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,X(v.magFilter)),n.texParameteri(x,10241,X(v.minFilter)),v.minFilter!==St&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(v.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Br&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function oe(x,v){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",B));const H=v.source;let Y=f.get(H);Y===void 0&&(Y={},f.set(H,Y));const te=V(v);if(te!==x.__cacheKey){Y[te]===void 0&&(Y[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),Y[te].usedTimes++;const we=Y[x.__cacheKey];we!==void 0&&(Y[x.__cacheKey].usedTimes--,we.usedTimes===0&&z(v)),x.__cacheKey=te,x.__webglTexture=Y[te].texture}return R}function ce(x,v,R){let H=3553;v.isDataArrayTexture&&(H=35866),v.isData3DTexture&&(H=32879);const Y=oe(x,v),te=v.source;if(t.activeTexture(33984+R),t.bindTexture(H,x.__webglTexture),te.version!==te.__currentVersion||Y===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const we=w(v)&&E(v.image)===!1;let N=L(v.image,we,!1,u);N=de(v,N);const ve=E(N)||o,Me=s.convert(v.format,v.encoding);let Se=s.convert(v.type),C=M(v.internalFormat,Me,Se,v.encoding,v.isVideoTexture);D(H,v,ve);let me;const ge=v.mipmaps,Ce=o&&v.isVideoTexture!==!0,be=te.__currentVersion===void 0||Y===!0,Re=A(v,N,ve);if(v.isDepthTexture)C=6402,o?v.type===ii?C=36012:v.type===ni?C=33190:v.type===ji?C=35056:C=33189:v.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&C===6402&&v.type!==bd&&v.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ni,Se=s.convert(v.type)),v.format===Qi&&C===6402&&(C=34041,v.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ji,Se=s.convert(v.type))),be&&(Ce?t.texStorage2D(3553,1,C,N.width,N.height):t.texImage2D(3553,0,C,N.width,N.height,0,Me,Se,null));else if(v.isDataTexture)if(ge.length>0&&ve){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let fe=0,Ie=ge.length;fe<Ie;fe++)me=ge[fe],Ce?t.texSubImage2D(3553,fe,0,0,me.width,me.height,Me,Se,me.data):t.texImage2D(3553,fe,C,me.width,me.height,0,Me,Se,me.data);v.generateMipmaps=!1}else Ce?(be&&t.texStorage2D(3553,Re,C,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,Me,Se,N.data)):t.texImage2D(3553,0,C,N.width,N.height,0,Me,Se,N.data);else if(v.isCompressedTexture){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let fe=0,Ie=ge.length;fe<Ie;fe++)me=ge[fe],v.format!==un?Me!==null?Ce?t.compressedTexSubImage2D(3553,fe,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(3553,fe,C,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,fe,0,0,me.width,me.height,Me,Se,me.data):t.texImage2D(3553,fe,C,me.width,me.height,0,Me,Se,me.data)}else if(v.isDataArrayTexture)Ce?(be&&t.texStorage3D(35866,Re,C,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,Me,Se,N.data)):t.texImage3D(35866,0,C,N.width,N.height,N.depth,0,Me,Se,N.data);else if(v.isData3DTexture)Ce?(be&&t.texStorage3D(32879,Re,C,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,Me,Se,N.data)):t.texImage3D(32879,0,C,N.width,N.height,N.depth,0,Me,Se,N.data);else if(v.isFramebufferTexture){if(be)if(Ce)t.texStorage2D(3553,Re,C,N.width,N.height);else{let fe=N.width,Ie=N.height;for(let Xe=0;Xe<Re;Xe++)t.texImage2D(3553,Xe,C,fe,Ie,0,Me,Se,null),fe>>=1,Ie>>=1}}else if(ge.length>0&&ve){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let fe=0,Ie=ge.length;fe<Ie;fe++)me=ge[fe],Ce?t.texSubImage2D(3553,fe,0,0,Me,Se,me):t.texImage2D(3553,fe,C,Me,Se,me);v.generateMipmaps=!1}else Ce?(be&&t.texStorage2D(3553,Re,C,N.width,N.height),t.texSubImage2D(3553,0,0,0,Me,Se,N)):t.texImage2D(3553,0,C,Me,Se,N);P(v,ve)&&O(H),te.__currentVersion=te.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Ee(x,v,R){if(v.image.length!==6)return;const H=oe(x,v),Y=v.source;if(t.activeTexture(33984+R),t.bindTexture(34067,x.__webglTexture),Y.version!==Y.__currentVersion||H===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const te=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,N=[];for(let fe=0;fe<6;fe++)!te&&!we?N[fe]=L(v.image[fe],!1,!0,c):N[fe]=we?v.image[fe].image:v.image[fe],N[fe]=de(v,N[fe]);const ve=N[0],Me=E(ve)||o,Se=s.convert(v.format,v.encoding),C=s.convert(v.type),me=M(v.internalFormat,Se,C,v.encoding),ge=o&&v.isVideoTexture!==!0,Ce=Y.__currentVersion===void 0||H===!0;let be=A(v,ve,Me);D(34067,v,Me);let Re;if(te){ge&&Ce&&t.texStorage2D(34067,be,me,ve.width,ve.height);for(let fe=0;fe<6;fe++){Re=N[fe].mipmaps;for(let Ie=0;Ie<Re.length;Ie++){const Xe=Re[Ie];v.format!==un?Se!==null?ge?t.compressedTexSubImage2D(34069+fe,Ie,0,0,Xe.width,Xe.height,Se,Xe.data):t.compressedTexImage2D(34069+fe,Ie,me,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(34069+fe,Ie,0,0,Xe.width,Xe.height,Se,C,Xe.data):t.texImage2D(34069+fe,Ie,me,Xe.width,Xe.height,0,Se,C,Xe.data)}}}else{Re=v.mipmaps,ge&&Ce&&(Re.length>0&&be++,t.texStorage2D(34067,be,me,N[0].width,N[0].height));for(let fe=0;fe<6;fe++)if(we){ge?t.texSubImage2D(34069+fe,0,0,0,N[fe].width,N[fe].height,Se,C,N[fe].data):t.texImage2D(34069+fe,0,me,N[fe].width,N[fe].height,0,Se,C,N[fe].data);for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie].image[fe].image;ge?t.texSubImage2D(34069+fe,Ie+1,0,0,$e.width,$e.height,Se,C,$e.data):t.texImage2D(34069+fe,Ie+1,me,$e.width,$e.height,0,Se,C,$e.data)}}else{ge?t.texSubImage2D(34069+fe,0,0,0,Se,C,N[fe]):t.texImage2D(34069+fe,0,me,Se,C,N[fe]);for(let Ie=0;Ie<Re.length;Ie++){const Xe=Re[Ie];ge?t.texSubImage2D(34069+fe,Ie+1,0,0,Se,C,Xe.image[fe]):t.texImage2D(34069+fe,Ie+1,me,Se,C,Xe.image[fe])}}}P(v,Me)&&O(34067),Y.__currentVersion=Y.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ue(x,v,R,H,Y){const te=s.convert(R.format,R.encoding),we=s.convert(R.type),N=M(R.internalFormat,te,we,R.encoding);i.get(v).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,N,v.width,v.height,v.depth,0,te,we,null):t.texImage2D(Y,0,N,v.width,v.height,0,te,we,null)),t.bindFramebuffer(36160,x),se(v)?h.framebufferTexture2DMultisampleEXT(36160,H,Y,i.get(R).__webglTexture,0,ne(v)):n.framebufferTexture2D(36160,H,Y,i.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(x,v,R){if(n.bindRenderbuffer(36161,x),v.depthBuffer&&!v.stencilBuffer){let H=33189;if(R||se(v)){const Y=v.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ii?H=36012:Y.type===ni&&(H=33190));const te=ne(v);se(v)?h.renderbufferStorageMultisampleEXT(36161,te,H,v.width,v.height):n.renderbufferStorageMultisample(36161,te,H,v.width,v.height)}else n.renderbufferStorage(36161,H,v.width,v.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(v.depthBuffer&&v.stencilBuffer){const H=ne(v);R&&se(v)===!1?n.renderbufferStorageMultisample(36161,H,35056,v.width,v.height):se(v)?h.renderbufferStorageMultisampleEXT(36161,H,35056,v.width,v.height):n.renderbufferStorage(36161,34041,v.width,v.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const H=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Y=0;Y<H.length;Y++){const te=H[Y],we=s.convert(te.format,te.encoding),N=s.convert(te.type),ve=M(te.internalFormat,we,N,te.encoding),Me=ne(v);R&&se(v)===!1?n.renderbufferStorageMultisample(36161,Me,ve,v.width,v.height):se(v)?h.renderbufferStorageMultisampleEXT(36161,Me,ve,v.width,v.height):n.renderbufferStorage(36161,ve,v.width,v.height)}}n.bindRenderbuffer(36161,null)}function xe(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const H=i.get(v.depthTexture).__webglTexture,Y=ne(v);if(v.depthTexture.format===ai)se(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):n.framebufferTexture2D(36160,36096,3553,H,0);else if(v.depthTexture.format===Qi)se(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function y(x){const v=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,x)}else if(R){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=n.createRenderbuffer(),Te(v.__webglDepthbuffer[H],x,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Te(v.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function T(x,v,R){const H=i.get(x);v!==void 0&&ue(H.__webglFramebuffer,x,x.texture,36064,3553),R!==void 0&&y(x)}function U(x){const v=x.texture,R=i.get(x),H=i.get(v);x.addEventListener("dispose",pe),x.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,a.memory.textures++);const Y=x.isWebGLCubeRenderTarget===!0,te=x.isWebGLMultipleRenderTargets===!0,we=E(x)||o;if(Y){R.__webglFramebuffer=[];for(let N=0;N<6;N++)R.__webglFramebuffer[N]=n.createFramebuffer()}else{if(R.__webglFramebuffer=n.createFramebuffer(),te)if(r.drawBuffers){const N=x.texture;for(let ve=0,Me=N.length;ve<Me;ve++){const Se=i.get(N[ve]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&se(x)===!1){const N=te?v:[v];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let ve=0;ve<N.length;ve++){const Me=N[ve];R.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer[ve]);const Se=s.convert(Me.format,Me.encoding),C=s.convert(Me.type),me=M(Me.internalFormat,Se,C,Me.encoding),ge=ne(x);n.renderbufferStorageMultisample(36161,ge,me,x.width,x.height),n.framebufferRenderbuffer(36160,36064+ve,36161,R.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(36161,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),D(34067,v,we);for(let N=0;N<6;N++)ue(R.__webglFramebuffer[N],x,v,36064,34069+N);P(v,we)&&O(34067),t.unbindTexture()}else if(te){const N=x.texture;for(let ve=0,Me=N.length;ve<Me;ve++){const Se=N[ve],C=i.get(Se);t.bindTexture(3553,C.__webglTexture),D(3553,Se,we),ue(R.__webglFramebuffer,x,Se,36064+ve,3553),P(Se,we)&&O(3553)}t.unbindTexture()}else{let N=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?N=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,H.__webglTexture),D(N,v,we),ue(R.__webglFramebuffer,x,v,36064,N),P(v,we)&&O(N),t.unbindTexture()}x.depthBuffer&&y(x)}function K(x){const v=E(x)||o,R=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let H=0,Y=R.length;H<Y;H++){const te=R[H];if(P(te,v)){const we=x.isWebGLCubeRenderTarget?34067:3553,N=i.get(te).__webglTexture;t.bindTexture(we,N),O(we),t.unbindTexture()}}}function J(x){if(o&&x.samples>0&&se(x)===!1){const v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],R=x.width,H=x.height;let Y=16384;const te=[],we=x.stencilBuffer?33306:36096,N=i.get(x),ve=x.isWebGLMultipleRenderTargets===!0;if(ve)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){te.push(36064+Me),x.depthBuffer&&te.push(we);const Se=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(Se===!1&&(x.depthBuffer&&(Y|=256),x.stencilBuffer&&(Y|=1024)),ve&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[Me]),Se===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),ve){const C=i.get(v[Me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,C,0)}n.blitFramebuffer(0,0,R,H,0,0,R,H,Y,9728),m&&n.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ve)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,N.__webglColorRenderbuffer[Me]);const Se=i.get(v[Me]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,Se,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function ne(x){return Math.min(d,x.samples)}function se(x){const v=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(x){const v=a.render.frame;g.get(x)!==v&&(g.set(x,v),x.update())}function de(x,v){const R=x.encoding,H=x.format,Y=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===ba||R!==pi&&(R===nt?o===!1?e.has("EXT_sRGB")===!0&&H===un?(x.format=ba,x.minFilter=It,x.generateMipmaps=!1):v=Ed.sRGBToLinear(v):(H!==un||Y!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),v}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=ie,this.setTextureCube=re,this.rebindTextures=T,this.setupRenderTarget=U,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=se}function nb(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===fi)return 5121;if(s===Og)return 32819;if(s===Ug)return 32820;if(s===Ig)return 5120;if(s===Fg)return 5122;if(s===bd)return 5123;if(s===Ng)return 5124;if(s===ni)return 5125;if(s===ii)return 5126;if(s===Br)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zg)return 6406;if(s===un)return 6408;if(s===Bg)return 6409;if(s===Hg)return 6410;if(s===ai)return 6402;if(s===Qi)return 34041;if(s===Gg)return 6403;if(s===kg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vg)return 36244;if(s===Wg)return 33319;if(s===qg)return 33320;if(s===jg)return 36249;if(s===yo||s===bo||s===Mo||s===So)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tc||s===nc||s===ic||s===rc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sc||s===oc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sc)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===oc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ac||s===lc||s===cc||s===uc||s===dc||s===hc||s===fc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===yc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ac)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_c)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===bc)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ji?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ib extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Es;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class sb extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ai&&(i=ni),i===void 0&&u===Qi&&(i=ji),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class ob extends sr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const _=[],S=[],L=new Lt;L.layers.enable(1),L.viewport=new ot;const E=new Lt;E.layers.enable(2),E.viewport=new ot;const w=[L,E],P=new ib;P.layers.enable(1),P.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getHandSpace()};function A(V){const Z=S.indexOf(V.inputSource);if(Z===-1)return;const ae=_[Z];ae!==void 0&&ae.dispatchEvent({type:V.type,data:V.inputSource})}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let V=0;V<_.length;V++){const Z=S[V];Z!==null&&(S[V]=null,_[V].disconnect(Z))}O=null,M=null,e.setRenderTarget(p),h=null,d=null,u=null,r=null,f=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:h}),f=new mi(h.framebufferWidth,h.framebufferHeight,{format:un,type:fi,encoding:e.outputEncoding})}else{let Z=null,ae=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Z=g.stencil?Qi:ai,ae=g.stencil?ji:ni);const re={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(re),r.updateRenderState({layers:[d]}),f=new mi(d.textureWidth,d.textureHeight,{format:un,type:fi,depthTexture:new sb(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],ie=S.indexOf(ae);ie>=0&&(S[ie]=null,_[ie].dispatchEvent({type:"disconnected",data:ae}))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let ie=S.indexOf(ae);if(ie===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=S.length){S.push(ae),ie=Ae;break}else if(S[Ae]===null){S[Ae]=ae,ie=Ae;break}if(ie===-1)break}const re=_[ie];re&&re.dispatchEvent({type:"connected",data:ae})}}const pe=new I,he=new I;function z(V,Z,ae){pe.setFromMatrixPosition(Z.matrixWorld),he.setFromMatrixPosition(ae.matrixWorld);const ie=pe.distanceTo(he),re=Z.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,F=re[14]/(re[10]-1),D=re[14]/(re[10]+1),oe=(re[9]+1)/re[5],ce=(re[9]-1)/re[5],Ee=(re[8]-1)/re[0],ue=(Ae[8]+1)/Ae[0],Te=F*Ee,xe=F*ue,y=ie/(-Ee+ue),T=y*-Ee;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(T),V.translateZ(y),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const U=F+y,K=D+y,J=Te-T,ne=xe+(ie-T),se=oe*D/K*U,le=ce*D/K*U;V.projectionMatrix.makePerspective(J,ne,se,le,U,K)}function Q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;P.near=E.near=L.near=V.near,P.far=E.far=L.far=V.far,(O!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,M=P.far);const Z=V.parent,ae=P.cameras;Q(P,Z);for(let re=0;re<ae.length;re++)Q(ae[re],Z);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),V.position.copy(P.position),V.quaternion.copy(P.quaternion),V.scale.copy(P.scale),V.matrix.copy(P.matrix),V.matrixWorld.copy(P.matrixWorld);const ie=V.children;for(let re=0,Ae=ie.length;re<Ae;re++)ie[re].updateMatrixWorld(!0);ae.length===2?z(P,L,E):P.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)};let G=null;function q(V,Z){if(c=Z.getViewerPose(l||a),m=Z,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let ie=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,ie=!0);for(let re=0;re<ae.length;re++){const Ae=ae[re];let F=null;if(h!==null)F=h.getViewport(Ae);else{const oe=u.getViewSubImage(d,Ae);F=oe.viewport,re===0&&(e.setRenderTargetTextures(f,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(f))}let D=w[re];D===void 0&&(D=new Lt,D.layers.enable(re),D.viewport=new ot,w[re]=D),D.matrix.fromArray(Ae.transform.matrix),D.projectionMatrix.fromArray(Ae.projectionMatrix),D.viewport.set(F.x,F.y,F.width,F.height),re===0&&P.matrix.copy(D.matrix),ie===!0&&P.cameras.push(D)}}for(let ae=0;ae<_.length;ae++){const ie=S[ae],re=_[ae];ie!==null&&re!==void 0&&re.update(ie,Z,l||a)}G&&G(V,Z),m=null}const j=new Fd;j.setAnimationLoop(q),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}}function ab(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,_,S,L){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,L)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Xt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Xt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let L;f.aoMap?L=f.aoMap:f.lightMap&&(L=f.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uv2Transform.value.copy(L.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let L;f.map?L=f.map:f.alphaMap&&(L=f.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uvTransform.value.copy(L.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Xt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function lb(){const n=Vs("canvas");return n.style.display="block",n}function Bd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:lb(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,S=0,L=null,E=-1,w=null;const P=new ot,O=new ot;let M=null,A=e.width,X=e.height,B=1,pe=null,he=null;const z=new ot(0,0,A,X),Q=new ot(0,0,A,X);let G=!1;const q=new Ja;let j=!1,V=!1,Z=null;const ae=new at,ie=new We,re=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return L===null?B:1}let D=t;function oe(b,k){for(let $=0;$<b.length;$++){const W=b[$],ee=e.getContext(W,k);if(ee!==null)return ee}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ge,!1),D===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),D=oe(k,b),D===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ce,Ee,ue,Te,xe,y,T,U,K,J,ne,se,le,de,x,v,R,H,Y,te,we,N,ve;function Me(){ce=new xx(D),Ee=new hx(D,ce,n),ce.init(Ee),N=new nb(D,ce,Ee),ue=new eb(D,ce,Ee),Te=new Mx,xe=new By,y=new tb(D,ce,ue,xe,Ee,N,Te),T=new px(p),U=new vx(p),K=new I_(D,Ee),ve=new ux(D,ce,K,Ee),J=new yx(D,K,Te,ve),ne=new Tx(D,J,K,Te),Y=new Ex(D,Ee,y),v=new fx(xe),se=new ky(p,T,U,ce,Ee,ve,v),le=new ab(p,xe),de=new Gy,x=new $y(ce,Ee),H=new cx(p,T,ue,ne,u,a),R=new Qy(p,ne,Ee),te=new dx(D,ce,Te,Ee),we=new bx(D,ce,Te,Ee),Te.programs=se.programs,p.capabilities=Ee,p.extensions=ce,p.properties=xe,p.renderLists=de,p.shadowMap=R,p.state=ue,p.info=Te}Me();const Se=new ob(p,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(A,X,!1))},this.getSize=function(b){return b.set(A,X)},this.setSize=function(b,k,$){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,X=k,e.width=Math.floor(b*B),e.height=Math.floor(k*B),$!==!1&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(A*B,X*B).floor()},this.setDrawingBufferSize=function(b,k,$){A=b,X=k,B=$,e.width=Math.floor(b*$),e.height=Math.floor(k*$),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,k,$,W){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,k,$,W),ue.viewport(P.copy(z).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,k,$,W){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,k,$,W),ue.scissor(O.copy(Q).multiplyScalar(B).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(b){ue.setScissorTest(G=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(b=!0,k=!0,$=!0){let W=0;b&&(W|=16384),k&&(W|=256),$&&(W|=1024),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),de.dispose(),x.dispose(),xe.dispose(),T.dispose(),U.dispose(),ne.dispose(),ve.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Xe),Se.removeEventListener("sessionend",$e),Z&&(Z.dispose(),Z=null),mt.stop()};function C(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Te.autoReset,k=R.enabled,$=R.autoUpdate,W=R.needsUpdate,ee=R.type;Me(),Te.autoReset=b,R.enabled=k,R.autoUpdate=$,R.needsUpdate=W,R.type=ee}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const k=b.target;k.removeEventListener("dispose",Ce),be(k)}function be(b){Re(b),xe.remove(b)}function Re(b){const k=xe.get(b).programs;k!==void 0&&(k.forEach(function($){se.releaseProgram($)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,$,W,ee,Pe){k===null&&(k=Ae);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,ke=jd(b,k,$,W,ee);ue.setMaterial(W,Ne);let ze=$.index;const Ye=$.attributes.position;if(ze===null){if(Ye===void 0||Ye.count===0)return}else if(ze.count===0)return;let Ge=1;W.wireframe===!0&&(ze=J.getWireframeAttribute($),Ge=2),ve.setup(ee,W,ke,$,ze);let Ve,tt=te;ze!==null&&(Ve=K.get(ze),tt=we,tt.setIndex(Ve));const qn=ze!==null?ze.count:Ye.count,_i=$.drawRange.start*Ge,vi=$.drawRange.count*Ge,Jt=Pe!==null?Pe.start*Ge:0,qe=Pe!==null?Pe.count*Ge:1/0,xi=Math.max(_i,Jt),it=Math.min(qn,_i+vi,Jt+qe)-1,Qt=Math.max(0,it-xi+1);if(Qt!==0){if(ee.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*F()),tt.setMode(1)):tt.setMode(4);else if(ee.isLine){let Tn=W.linewidth;Tn===void 0&&(Tn=1),ue.setLineWidth(Tn*F()),ee.isLineSegments?tt.setMode(1):ee.isLineLoop?tt.setMode(2):tt.setMode(3)}else ee.isPoints?tt.setMode(0):ee.isSprite&&tt.setMode(4);if(ee.isInstancedMesh)tt.renderInstances(xi,Qt,ee.count);else if($.isInstancedBufferGeometry){const Tn=Math.min($.instanceCount,$._maxInstanceCount);tt.renderInstances(xi,Qt,Tn)}else tt.render(xi,Qt)}},this.compile=function(b,k){h=x.get(b),h.init(),g.push(h),b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function($){const W=$.material;if(W)if(Array.isArray(W))for(let ee=0;ee<W.length;ee++){const Pe=W[ee];co(Pe,b,$)}else co(W,b,$)}),g.pop(),h=null};let fe=null;function Ie(b){fe&&fe(b)}function Xe(){mt.stop()}function $e(){mt.start()}const mt=new Fd;mt.setAnimationLoop(Ie),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){fe=b,Se.setAnimationLoop(b),b===null?mt.stop():mt.start()},Se.addEventListener("sessionstart",Xe),Se.addEventListener("sessionend",$e),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(k),k=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,k,L),h=x.get(b,g.length),h.init(),g.push(h),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ae),V=this.localClippingEnabled,j=v.init(this.clippingPlanes,V,k),d=de.get(b,m.length),d.init(),m.push(d),Kt(b,k,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(pe,he),j===!0&&v.beginShadows();const $=h.state.shadowsArray;if(R.render($,b,k),j===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(d,b),h.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const W=k.cameras;for(let ee=0,Pe=W.length;ee<Pe;ee++){const Ne=W[ee];nl(d,b,Ne,Ne.viewport)}}else nl(d,b,k);L!==null&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(p,b,k),ve.resetDefaultState(),E=-1,w=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Kt(b,k,$,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const Ne=ne.update(b),ke=b.material;ke.visible&&d.push(b,Ne,ke,$,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Te.render.frame&&(b.skeleton.update(),b.skeleton.frame=Te.render.frame),!b.frustumCulled||q.intersectsObject(b))){W&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const Ne=ne.update(b),ke=b.material;if(Array.isArray(ke)){const ze=Ne.groups;for(let Ye=0,Ge=ze.length;Ye<Ge;Ye++){const Ve=ze[Ye],tt=ke[Ve.materialIndex];tt&&tt.visible&&d.push(b,Ne,tt,$,re.z,Ve)}}else ke.visible&&d.push(b,Ne,ke,$,re.z,null)}}const Pe=b.children;for(let Ne=0,ke=Pe.length;Ne<ke;Ne++)Kt(Pe[Ne],k,$,W)}function nl(b,k,$,W){const ee=b.opaque,Pe=b.transmissive,Ne=b.transparent;h.setupLightsView($),Pe.length>0&&Wd(ee,k,$),W&&ue.viewport(P.copy(W)),ee.length>0&&Jr(ee,k,$),Pe.length>0&&Jr(Pe,k,$),Ne.length>0&&Jr(Ne,k,$),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Wd(b,k,$){const W=Ee.isWebGL2;Z===null&&(Z=new mi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Br:fi,minFilter:oo,samples:W&&s===!0?4:0})),p.getDrawingBufferSize(ie),W?Z.setSize(ie.x,ie.y):Z.setSize(Gs(ie.x),Gs(ie.y));const ee=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const Pe=p.toneMapping;p.toneMapping=Sn,Jr(b,k,$),p.toneMapping=Pe,y.updateMultisampleRenderTarget(Z),y.updateRenderTargetMipmap(Z),p.setRenderTarget(ee)}function Jr(b,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Pe=b.length;ee<Pe;ee++){const Ne=b[ee],ke=Ne.object,ze=Ne.geometry,Ye=W===null?Ne.material:W,Ge=Ne.group;ke.layers.test($.layers)&&qd(ke,k,$,ze,Ye,Ge)}}function qd(b,k,$,W,ee,Pe){b.onBeforeRender(p,k,$,W,ee,Pe),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(p,k,$,W,b,Pe),ee.transparent===!0&&ee.side===hi?(ee.side=Xt,ee.needsUpdate=!0,p.renderBufferDirect($,k,W,ee,b,Pe),ee.side=kr,ee.needsUpdate=!0,p.renderBufferDirect($,k,W,ee,b,Pe),ee.side=hi):p.renderBufferDirect($,k,W,ee,b,Pe),b.onAfterRender(p,k,$,W,ee,Pe)}function co(b,k,$){k.isScene!==!0&&(k=Ae);const W=xe.get(b),ee=h.state.lights,Pe=h.state.shadowsArray,Ne=ee.state.version,ke=se.getParameters(b,ee.state,Pe,k,$),ze=se.getProgramCacheKey(ke);let Ye=W.programs;W.environment=b.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(b.isMeshStandardMaterial?U:T).get(b.envMap||W.environment),Ye===void 0&&(b.addEventListener("dispose",Ce),Ye=new Map,W.programs=Ye);let Ge=Ye.get(ze);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ne)return il(b,ke),Ge}else ke.uniforms=se.getUniforms(b),b.onBuild($,ke,p),b.onBeforeCompile(ke,p),Ge=se.acquireProgram(ke,ze),Ye.set(ze,Ge),W.uniforms=ke.uniforms;const Ve=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=v.uniform),il(b,ke),W.needsLights=$d(b),W.lightsStateVersion=Ne,W.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix);const tt=Ge.getUniforms(),qn=Fs.seqWithValue(tt.seq,Ve);return W.currentProgram=Ge,W.uniformsList=qn,Ge}function il(b,k){const $=xe.get(b);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function jd(b,k,$,W,ee){k.isScene!==!0&&(k=Ae),y.resetTextureUnits();const Pe=k.fog,Ne=W.isMeshStandardMaterial?k.environment:null,ke=L===null?p.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:pi,ze=(W.isMeshStandardMaterial?U:T).get(W.envMap||Ne),Ye=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!W.normalMap&&!!$.attributes.tangent,Ve=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,qn=!!$.morphAttributes.color,_i=W.toneMapped?p.toneMapping:Sn,vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Jt=vi!==void 0?vi.length:0,qe=xe.get(W),xi=h.state.lights;if(j===!0&&(V===!0||b!==w)){const en=b===w&&W.id===E;v.setState(W,b,en)}let it=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xi.state.version||qe.outputEncoding!==ke||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ze||W.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==v.numPlanes||qe.numIntersection!==v.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==tt||qe.morphColors!==qn||qe.toneMapping!==_i||Ee.isWebGL2===!0&&qe.morphTargetsCount!==Jt)&&(it=!0):(it=!0,qe.__version=W.version);let Qt=qe.currentProgram;it===!0&&(Qt=co(W,k,ee));let Tn=!1,ur=!1,uo=!1;const gt=Qt.getUniforms(),dr=qe.uniforms;if(ue.useProgram(Qt.program)&&(Tn=!0,ur=!0,uo=!0),W.id!==E&&(E=W.id,ur=!0),Tn||w!==b){if(gt.setValue(D,"projectionMatrix",b.projectionMatrix),Ee.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,ur=!0,uo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const en=gt.map.cameraPosition;en!==void 0&&en.setValue(D,re.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ee.isSkinnedMesh)&&gt.setValue(D,"viewMatrix",b.matrixWorldInverse)}if(ee.isSkinnedMesh){gt.setOptional(D,ee,"bindMatrix"),gt.setOptional(D,ee,"bindMatrixInverse");const en=ee.skeleton;en&&(Ee.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),gt.setValue(D,"boneTexture",en.boneTexture,y),gt.setValue(D,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ho=$.morphAttributes;return(ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&Ee.isWebGL2===!0)&&Y.update(ee,$,W,Qt),(ur||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,gt.setValue(D,"receiveShadow",ee.receiveShadow)),ur&&(gt.setValue(D,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&Xd(dr,uo),Pe&&W.fog===!0&&le.refreshFogUniforms(dr,Pe),le.refreshMaterialUniforms(dr,W,B,X,Z),Fs.upload(D,qe.uniformsList,dr,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fs.upload(D,qe.uniformsList,dr,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(D,"center",ee.center),gt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),gt.setValue(D,"normalMatrix",ee.normalMatrix),gt.setValue(D,"modelMatrix",ee.matrixWorld),Qt}function Xd(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function $d(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,$){xe.get(b.texture).__webglTexture=k,xe.get(b.depthTexture).__webglTexture=$;const W=xe.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const $=xe.get(b);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,$=0){L=b,_=k,S=$;let W=!0;if(b){const ze=xe.get(b);ze.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),W=!1):ze.__webglFramebuffer===void 0?y.setupRenderTarget(b):ze.__hasExternalTextures&&y.rebindTextures(b,xe.get(b.texture).__webglTexture,xe.get(b.depthTexture).__webglTexture)}let ee=null,Pe=!1,Ne=!1;if(b){const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Ne=!0);const Ye=xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ee=Ye[k],Pe=!0):Ee.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?ee=xe.get(b).__webglMultisampledFramebuffer:ee=Ye,P.copy(b.viewport),O.copy(b.scissor),M=b.scissorTest}else P.copy(z).multiplyScalar(B).floor(),O.copy(Q).multiplyScalar(B).floor(),M=G;if(ue.bindFramebuffer(36160,ee)&&Ee.drawBuffers&&W&&ue.drawBuffers(b,ee),ue.viewport(P),ue.scissor(O),ue.setScissorTest(M),Pe){const ze=xe.get(b.texture);D.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,$)}else if(Ne){const ze=xe.get(b.texture),Ye=k||0;D.framebufferTextureLayer(36160,36064,ze.__webglTexture,$||0,Ye)}E=-1},this.readRenderTargetPixels=function(b,k,$,W,ee,Pe,Ne){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){ue.bindFramebuffer(36160,ke);try{const ze=b.texture,Ye=ze.format,Ge=ze.type;if(Ye!==un&&N.convert(Ye)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Br&&(ce.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ge!==fi&&N.convert(Ge)!==D.getParameter(35738)&&!(Ge===ii&&(Ee.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&$>=0&&$<=b.height-ee&&D.readPixels(k,$,W,ee,N.convert(Ye),N.convert(Ge),Pe)}finally{const ze=L!==null?xe.get(L).__webglFramebuffer:null;ue.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(b,k,$=0){const W=Math.pow(2,-$),ee=Math.floor(k.image.width*W),Pe=Math.floor(k.image.height*W);y.setTexture2D(k,0),D.copyTexSubImage2D(3553,$,0,0,b.x,b.y,ee,Pe),ue.unbindTexture()},this.copyTextureToTexture=function(b,k,$,W=0){const ee=k.image.width,Pe=k.image.height,Ne=N.convert($.format),ke=N.convert($.type);y.setTexture2D($,0),D.pixelStorei(37440,$.flipY),D.pixelStorei(37441,$.premultiplyAlpha),D.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?D.texSubImage2D(3553,W,b.x,b.y,ee,Pe,Ne,ke,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(3553,W,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Ne,k.mipmaps[0].data):D.texSubImage2D(3553,W,b.x,b.y,Ne,ke,k.image),W===0&&$.generateMipmaps&&D.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(b,k,$,W,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,Ne=b.max.y-b.min.y+1,ke=b.max.z-b.min.z+1,ze=N.convert(W.format),Ye=N.convert(W.type);let Ge;if(W.isData3DTexture)y.setTexture3D(W,0),Ge=32879;else if(W.isDataArrayTexture)y.setTexture2DArray(W,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,W.flipY),D.pixelStorei(37441,W.premultiplyAlpha),D.pixelStorei(3317,W.unpackAlignment);const Ve=D.getParameter(3314),tt=D.getParameter(32878),qn=D.getParameter(3316),_i=D.getParameter(3315),vi=D.getParameter(32877),Jt=$.isCompressedTexture?$.mipmaps[0]:$.image;D.pixelStorei(3314,Jt.width),D.pixelStorei(32878,Jt.height),D.pixelStorei(3316,b.min.x),D.pixelStorei(3315,b.min.y),D.pixelStorei(32877,b.min.z),$.isDataTexture||$.isData3DTexture?D.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ke,ze,Ye,Jt.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ke,ze,Jt.data)):D.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ke,ze,Ye,Jt),D.pixelStorei(3314,Ve),D.pixelStorei(32878,tt),D.pixelStorei(3316,qn),D.pixelStorei(3315,_i),D.pixelStorei(32877,vi),ee===0&&W.generateMipmaps&&D.generateMipmap(Ge),ue.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){_=0,S=0,L=null,ue.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cb extends Bd{}cb.prototype.isWebGL1Renderer=!0;class ub extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class db extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hd extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ru=new at,su=new I,ou=new I;class hb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fb extends hb{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Hr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pb extends Hd{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new fb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mb extends Hd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function au(){return(typeof performance>"u"?Date:performance).now()}class _b{constructor(e,t,i=0,r=1/0){this.ray=new Cd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return wa(e,this,i,t),i.sort(lu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wa(e[r],this,i,t);return i.sort(lu),i}}function lu(n,e){return n.distance-e.distance}function wa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)wa(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);class Ea{constructor(){Oe(this,"_callbacks",[])}addListener(e){this._callbacks.push(e)}removeListener(e){this._callbacks.forEach((t,i)=>{t===e&&this._callbacks.splice(i,1)})}clear(){this._callbacks=[]}trigger(e){this._callbacks.forEach(t=>{t(e)})}}class vb{constructor(){Oe(this,"onClickedObject",new Ea);Oe(this,"onClickedObjects",new Ea);Oe(this,"raycaster");this.raycaster=new _b}pick(e,t,i){this.raycaster.setFromCamera(e,i);const r=this.raycaster.intersectObjects(t.children);r.length!=0&&(this.onClickedObjects.trigger(r),this.onClickedObject.trigger(r[0]))}}class xb{constructor(e,t,i){Oe(this,"pickHandler");Oe(this,"scene");Oe(this,"renderer");Oe(this,"camera");Oe(this,"onClickEvent",new Ea);Oe(this,"_time",0);Oe(this,"_deltaTime",0);Oe(this,"_sceneObjects",[]);this.scene=e,this.renderer=i,this.camera=t,this.pickHandler=new vb,this.renderer.domElement.addEventListener("click",r=>this.onMouseClick(r),!1)}get time(){return this._time}get deltaTime(){return this._deltaTime}get sceneObjects(){return this._sceneObjects}addObject(e){!e||this._sceneObjects.push(e)}update(e){const t=e*.001;if(this._deltaTime=t-this._time,this._time=t,this.resizeRendererToDisplaySize(this.renderer)){const i=this.renderer.domElement;this.camera.aspect=i.clientWidth/i.clientHeight,this.camera.updateProjectionMatrix()}this._sceneObjects.forEach(i=>{i.update()}),this.render()}render(){this.renderer.render(this.scene,this.camera)}dispose(){this._sceneObjects.forEach(e=>{e.dispose()}),this.pickHandler.onClickedObject.clear(),this.pickHandler.onClickedObjects.clear()}onMouseClick(e){var t=new We;const i=this.renderer.domElement.getBoundingClientRect();t.x=(e.clientX-i.left)*this.renderer.domElement.width/i.width,t.y=(e.clientY-i.top)*this.renderer.domElement.height/i.height;const r=new We;r.x=t.x/this.renderer.domElement.width*2-1,r.y=t.y/this.renderer.domElement.height*-2+1,this.pickHandler.pick(r,this.scene,this.camera)}resizeRendererToDisplaySize(e){const t=e.domElement,i=window.devicePixelRatio,r=t.clientWidth*i|0,s=t.clientHeight*i|0,a=t.width!==r||t.height!==s;return a&&e.setSize(r,s,!1),a}}class el{constructor(e){Oe(this,"_scene");this._scene=e}get scene(){return this._scene}}const yb=`\r
varying vec2 vUv;\r
\r
uniform float uTime;\r
uniform float uTimeOffset;\r
\r
void main(){\r
    vUv = uv;\r
\r
    float t = abs(position.x * 2.0 - 1.0);\r
    vec3 pos = position;\r
    pos.z += t * sin((uTime + uTimeOffset) * 10.0) * 0.8;\r
\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r
}`,bb=`varying vec2 vUv;\r
\r
uniform float uTime;\r
\r
const float wing_width = .2;\r
\r
void main() {\r
    float winged_t = abs(vUv.x * 2.0 - 1.0);\r
\r
    //float wing_mid = wing_width + sin(winged_t * 3.145 * 2.0) * .1;\r
\r
    //float t = 1.0 - abs(vUv.y - wing_mid);\r
\r
    float t = step(max(.5, winged_t), sin(vUv.y * 3.14 + cos(winged_t * 3.14 * 2.0) * .5));\r
    t = clamp(0.0, 1.0, t);\r
    vec3 color = vec3(0);\r
\r
    gl_FragColor = vec4(color, t);\r
}`;class Mb extends el{constructor(t){super(t);Oe(this,"hitBox");Oe(this,"lifetime",30);Oe(this,"jitterScale",.2);Oe(this,"jitterAcceleration",1e-4);Oe(this,"maxJitterSpeed",.5);Oe(this,"directionChangeTime",1);Oe(this,"_currentLifetime",0);Oe(this,"_currentJitterWaitTime",this.directionChangeTime);Oe(this,"_model");Oe(this,"_material");Oe(this,"_speed",5);Oe(this,"_mainDirection",new I);Oe(this,"_direction",new I);Oe(this,"_directionGoal",new I);Oe(this,"_directionVelocity",new I);Oe(this,"_velocity",new I);const i=new lr(3,3,2,1);this._material=new fn({vertexShader:yb,fragmentShader:bb,uniforms:{uTime:{value:0},uTimeOffset:{value:on.randFloat(0,1)}},transparent:!0}),this._material.side=hi,this._material.depthWrite=!1;const r=new Nt(i,this._material),s=new ar(4,3.5,4),a=new db;a.opacity=0,a.transparent=!0,this.hitBox=new Nt(s,a),this._model=r,this._model.add(this.hitBox),t.scene.add(this._model),t.pickHandler.onClickedObject.addListener(o=>this.onClicked(this,o))}get isReusable(){return this._currentLifetime>=this.lifetime}update(){this._material.uniforms.uTime.value=this.scene.time,this._currentLifetime+=this.scene.deltaTime,this._currentJitterWaitTime+=this.scene.deltaTime;const t=new I(0);if(t.copy(this._model.position),this._currentJitterWaitTime>=this.directionChangeTime){this._currentJitterWaitTime=0;const r=new I(on.randFloat(-1,1),on.randFloat(-1,1),on.randFloat(-1,1)).normalize().multiplyScalar(this.jitterScale);this._directionGoal.copy(this._mainDirection).add(r).normalize()}const i=new I;i.subVectors(this._directionGoal,this._direction).normalize().multiplyScalar(this.jitterAcceleration),this._directionVelocity.add(i),this._directionVelocity.length()>this.maxJitterSpeed&&this._directionVelocity.normalize().multiplyScalar(this.maxJitterSpeed),this._direction.add(this._directionVelocity),this._direction.normalize(),this._velocity.copy(this._direction).multiplyScalar(this._speed*this.scene.deltaTime),t.add(this._velocity),this._model.lookAt(t),this._model.rotateX(Math.PI/2),this._model.position.copy(t)}dispose(){this._model.children.forEach(t=>{this._model.remove(t)})}reset(t,i,r,s){this._currentLifetime=0,this._currentJitterWaitTime=this.directionChangeTime,this._model.position.copy(s),this._mainDirection.copy(t),this._direction=new I().copy(this._mainDirection),this._directionGoal=new I().copy(this._direction),this._model.scale.set(i,i,i),this._speed=r,this._velocity.setLength(0),this._directionVelocity.setLength(0)}onClicked(t,i){i.object.id===t.hitBox.id&&console.log("clidck ")}}class Sb extends el{constructor(t){super(t);Oe(this,"maxButterflies",20);Oe(this,"butterflySpawnRate",.7);Oe(this,"mainDirection",new I(-1,.3,.05));Oe(this,"_currentTime",0);Oe(this,"_butterflies",[]);Oe(this,"_reusableButterflies",[]);this.spawnInitial()}update(){this._currentTime+=this.scene.deltaTime,this._currentTime>=this.butterflySpawnRate&&(this._currentTime=0,this.spawnButterfly());for(let t=0;t<this._butterflies.length;t++)this._butterflies[t].isReusable&&(this._reusableButterflies.push(this._butterflies[t]),this._butterflies.splice(t,1),t--)}dispose(){this._butterflies=[],this._reusableButterflies=[]}spawnButterfly(){var t;this._reusableButterflies.length>0?t=this._reusableButterflies.pop():(t=new Mb(this.scene),this.scene.addObject(t)),this._butterflies.push(t);const i=new I(on.randFloat(-1,1),on.randFloat(-1,1),on.randFloat(-1,1)).multiplyScalar(.2),r=new I().copy(this.mainDirection).add(i).normalize(),s=on.randFloat(-180,-240);t.reset(r,on.randFloat(.7,1.5),on.randFloat(9,12),new I(80,-15,s))}spawnInitial(){for(let t=0;t<5;t++)this.spawnButterfly()}}const wb="/assets/NewMe.b19baf58.jpg",Eb={props:["title","description","image","link"]};const Tb={class:"main"},Ab=["href"],Cb=["src"],Lb={class:"description-content"},Rb={class:"title"};function Pb(n,e,t,i,r,s){return Ze(),et("div",Tb,[_e("a",{href:t.link,target:"_blank"},[_e("img",{src:t.image},null,8,Cb)],8,Ab),_e("div",Lb,[_e("div",Rb,Pr(t.title),1),_e("div",null,Pr(t.description),1)])])}const _r=Ot(Eb,[["render",Pb],["__scopeId","data-v-0ff278df"]]),Db=Zt({props:["icon","percentage"],mounted(){const n=this.$refs.span;n!=null&&(n.style.width=this.percentage)}});const Ib={class:"content"},Fb=["src"],Nb={class:"progress-bar"},Ob={ref:"span"};function Ub(n,e,t,i,r,s){return Ze(),et("div",Ib,[_e("img",{src:n.icon},null,8,Fb),_e("div",Nb,[_e("span",Ob,null,512)])])}const nn=Ot(Db,[["render",Ub],["__scopeId","data-v-fb1ff7f1"]]),Zr=n=>(Wr("data-v-ae9882a8"),n=n(),qr(),n),zb=Zr(()=>_e("div",{class:"title-centered top-title",id:"about-section"},null,-1)),kb={class:"max-width main"},Bb={class:"container"},Hb={class:"timeline-item"},Gb=Zr(()=>_e("div",{class:"line-dot"},null,-1)),Vb=io('<div class="top-content fade-in" data-v-ae9882a8><div class="description" data-v-ae9882a8><div class="title title-underline" data-v-ae9882a8> About me </div><div class="main-text" data-v-ae9882a8><img class="visual" src="'+wb+'" data-v-ae9882a8> I&#39;m Chris, and welcome to my portfolio page! I&#39;m a programmer from the Netherlands with a strong passion for game development. <br data-v-ae9882a8><br data-v-ae9882a8> I hold both a <b data-v-ae9882a8>master&#39;s</b> and <b data-v-ae9882a8>bachelor&#39;s</b> degree in computer science, with a focus on game development. During my studies, I completed several successful internships at various companies, which are listed in this section. <br data-v-ae9882a8><br data-v-ae9882a8> My main areas of expertise are <b data-v-ae9882a8>graphics programming</b>, <b data-v-ae9882a8>performance optimization</b>, and <b data-v-ae9882a8>gameplay programming</b>. I also dabble in 3D modeling in my free time and am currently learning the Vulkan graphics API. I&#39;m planning to develop a solo game this year as well! <br data-v-ae9882a8><br data-v-ae9882a8> I would describe myself as someone who is constantly eager to learn and expand my knowledge and skills in game development. I&#39;m also a perfectionist, so I won&#39;t stop learning until I truly understand what I&#39;m doing. <br data-v-ae9882a8><br data-v-ae9882a8><i data-v-ae9882a8>And a little less technical: I enjoy playing the guitar, gaming, and running!</i></div></div></div>',1),Wb={class:"bottom-content fade-in"},qb={class:"bottom-item"},jb=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Education ",-1)),Xb={class:"experiences"},$b=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Experience ",-1)),Yb={class:"experiences"},Zb={class:"bottom-item"},Kb=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Skills ",-1)),Jb={class:"skills"},Qb=Zt({__name:"About",setup(n){return(e,t)=>(Ze(),et(vt,null,[zb,_e("div",kb,[_e("div",Bb,[_e("div",Hb,[Gb,_e("div",null,[Vb,_e("div",Wb,[_e("div",qb,[jb,_e("div",Xb,[De(_r,{title:"Utrecht University",description:"Game and Media Technology Master's degree.",image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Utrecht_University_logo.svg/1200px-Utrecht_University_logo.svg.png",link:"https://www.uu.nl/"}),De(_r,{title:"HvA",description:"HBO-ICT Bachelor's degree - Cum Laude.",image:"src/assets/images/SocialMedia-HvA.png",link:"https://www.hva.nl/"})]),$b,_e("div",Yb,[De(_r,{title:"uCrowds",description:"Master thesis internship, developed a Crowd Simulation plugin for Unreal Engine.",image:"https://yt3.googleusercontent.com/ytc/AIdro_ljdVsfdCL4r3_StSlbyYBc5wkHC57GHT836nM_IDXjxQ=s900-c-k-c0x00ffffff-no-rj",link:"https://www.ucrowds.com/"}),De(_r,{title:"KLM",description:"HvA Graduation Internship, developed VR applications in Unity.",image:"/src/assets/images/1758957087442.jpg",link:"https://www.linkedin.com/in/klm-xr-center-of-excellence/"}),De(_r,{title:"DTT",description:"Internship / Summerjob, developed tools and apps in Unity.",image:"https://s3-eu-west-1.amazonaws.com/sortlist-core-api/x5RpFNJ1g7owYPVUqhSdsZTd",link:"https://www.d-tt.nl/"})])]),_e("div",Zb,[Kb,_e("div",Jb,[De(nn,{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png",percentage:"95%"}),De(nn,{icon:"https://i.redd.it/tu3gt6ysfxq71.png",percentage:"100%"}),De(nn,{icon:"https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",percentage:"90%"}),De(nn,{icon:"https://cdn.worldvectorlogo.com/logos/unreal-1.svg",percentage:"80%"}),De(nn,{icon:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",percentage:"75%"}),De(nn,{icon:"https://icon-library.com/images/blender-3d-icon/blender-3d-icon-9.jpg",percentage:"65%"}),De(nn,{icon:"https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",percentage:"80%"}),De(nn,{icon:"https://cdn.freebiesupply.com/logos/large/2x/opengl-1-logo-png-transparent.png",percentage:"60%"}),De(nn,{icon:"https://www.svgrepo.com/show/184143/java.svg",percentage:"70%"}),De(nn,{icon:"https://www.vulkan.org/user/themes/vulkan/images/logo/vulkan-logo.svg",percentage:"50%"})])])])])])])])],64))}});const eM=Ot(Qb,[["__scopeId","data-v-ae9882a8"]]);var Le=(n=>(n.HIGHLIGHTED="HIGHLIGHTED",n.PERSONAL="PERSONAL",n.SCHOOL="SCHOOL",n.INTERNSHIP="INTERNSHIP",n.C_SHARP="C#",n.CPP="C++",n.RUST="Rust",n.JAVA="JAVA",n.UNITY="Unity",n.UNREAL="Unreal",n.VR="VR",n))(Le||{});const tM=Object.freeze({HIGHLIGHTED:{color:"rgb(189, 172, 75)",text:"Highlighted"},PERSONAL:{color:"rgb(0, 165, 0)",text:"Personal"},SCHOOL:{color:"rgb(0, 123, 255)",text:"School"},INTERNSHIP:{color:"rgb(255, 165, 0)",text:"Internship"},["C#"]:{color:"rgb(165, 100, 165)",text:"C#"},["C++"]:{color:"rgb(0, 100, 255)",text:"C++"},Rust:{color:"rgb(255, 69, 0)",text:"Rust"},JAVA:{color:"rgb(220, 140, 0)",text:"Java"},Unity:{color:"rgb(100, 100, 100)",text:"Unity"},Unreal:{color:"rgb(84, 124, 134)",text:"Unreal"},VR:{color:"rgb(200,130,90)",text:"VR"}}),nM=Zt({__name:"Tag",props:{tag:null,clickable:{type:Boolean},selected:{type:Boolean}},emits:["tag-toggled"],setup(n,{emit:e}){const t=n,i=tM[t.tag],r=()=>{!t.clickable||e("tag-toggled",{tag:t.tag})};return(s,a)=>(Ze(),et("div",{class:Ws(["tag-item"]),style:Gr({backgroundColor:qt(i).color,filter:n.selected?"none":"brightness(50%)",cursor:n.clickable?"pointer":"default",outline:n.tag==qt(Le).HIGHLIGHTED?"2px solid rgb(255, 255, 0)":"none"}),onClick:r},Pr(qt(i).text),5))}});const tl=Ot(nM,[["__scopeId","data-v-80a54e7b"]]);function Gd(n){const e=/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:[^\/\n\s]+)\/?\S*?\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,t=n.match(e);return t?t[1]:null}function iM(n){return`https://img.youtube.com/vi/${n}/maxresdefault.jpg`}const rM={class:"item_content"},sM=["src"],oM={class:"title"},aM=["innerHTML"],lM={class:"tag-container"},cM=Zt({__name:"Card",props:{tags:null,title:null,media:null,description:null,git_link:null,additional_link:null},emits:["card-clicked"],setup(n,{emit:e}){const t=n,i=250,r=()=>{if(t.description.length<i)return t.description;let o=t.description.slice(0,i);const l=o.lastIndexOf(" ");return l===-1?o:o.slice(0,l)+"..."},s=()=>{let o=t.media,l=Gd(o);return l&&(o=iM(l)),o},a=()=>{e("card-clicked",{title:t.title,description:t.description,media:t.media,tags:t.tags,git_link:t.git_link,additional_link:t.additional_link})};return(o,l)=>(Ze(),et("div",{class:"item",onClick:a},[_e("div",rM,[_e("img",{class:"media",src:s()},null,8,sM),_e("div",oM,Pr(t.title),1),_e("div",{innerHTML:r(),class:"description"},null,8,aM),_e("div",lM,[(Ze(!0),et(vt,null,zs(t.tags,(c,u)=>(Ze(),Wi(tl,{key:u,tag:c,clickable:!1,selected:!0},null,8,["tag"]))),128))])])]))}});const uM=Ot(cM,[["__scopeId","data-v-b1d87d10"]]);const Kr=n=>(Wr("data-v-75d46801"),n=n(),qr(),n),dM={class:"flex"},hM={class:"description"},fM={class:"timeline-item"},pM=Kr(()=>_e("div",{class:"line-dot"},null,-1)),mM={class:"title title-underline"},gM=["innerHTML"],_M=Kr(()=>_e("div",{class:"seperator"},null,-1)),vM={class:"visual"},xM=["src"],yM=["href"],bM=["src"],MM=["src"],SM={class:"tag-container"},wM=["href"],EM=Kr(()=>_e("img",{class:"icon",src:"https://img.icons8.com/ios11/512/000000/github.png"},null,-1)),TM=[EM],AM=["href"],CM=Kr(()=>_e("img",{class:"icon",src:"https://img.icons8.com/ios11/512/000000/link.png"},null,-1)),LM=[CM],RM=Kr(()=>_e("div",{class:"content-sharp"},null,-1)),PM=Zt({__name:"CardOverlay",props:{visible:null,title:null,description:null,media:null,tags:null,git_link:null,additional_link:null},emits:["close"],setup(n,{emit:e}){const t=n,i=()=>{e("close")},r=()=>Gd(t.media)!=null;return(s,a)=>n.visible?(Ze(),et("div",{key:0,class:"overlay fade-in-animation",onClick:i},[_e("div",{class:"content",onClick:a[0]||(a[0]=_p(()=>{},["stop"]))},[_e("img",{class:"close",src:"https://img.icons8.com/ios11/512/000000/cancel.png",onClick:i}),_e("div",dM,[_e("div",hM,[_e("div",fM,[pM,_e("div",null,[_e("div",mM,Pr(n.title),1),_e("div",{innerHTML:n.description,class:"main-text"},null,8,gM)])])]),_M,_e("div",vM,[r()?(Ze(),et("iframe",{key:0,class:"media media-video",src:n.media},null,8,xM)):Un("",!0),n.git_link||n.additional_link?(Ze(),et("a",{key:1,href:n.additional_link?n.additional_link:n.git_link,target:"_blank"},[r()?Un("",!0):(Ze(),et("img",{key:0,class:"media",src:n.media},null,8,bM))],8,yM)):Un("",!0),!n.git_link&&!n.additional_link&&!r()?(Ze(),et("img",{key:2,class:"media",src:n.media},null,8,MM)):Un("",!0),_e("div",SM,[(Ze(!0),et(vt,null,zs(t.tags,(o,l)=>(Ze(),Wi(tl,{key:l,tag:o,clickable:!1,selected:!0},null,8,["tag"]))),128))]),_e("div",null,[n.git_link!=null?(Ze(),et("a",{key:0,href:n.git_link,target:"_blank"},TM,8,wM)):Un("",!0),n.additional_link!=null?(Ze(),et("a",{key:1,href:n.additional_link,target:"_blank"},LM,8,AM)):Un("",!0)])])]),RM])])):Un("",!0)}});const DM=Ot(PM,[["__scopeId","data-v-75d46801"]]),lo=n=>(Wr("data-v-e73075d6"),n=n(),qr(),n),IM={class:"main-bg"},FM={class:"max-width"},NM={class:"container"},OM={class:"timeline-item"},UM=lo(()=>_e("div",{class:"line-dot"},null,-1)),zM={class:"main fade-in"},kM=lo(()=>_e("div",{class:"title title-underline"}," Projects ",-1)),BM=lo(()=>_e("div",{class:"sub-text main-text"},[di("Filter by toggling tags. "),_e("br"),di(" For more details, you can click on the project cards. ")],-1)),HM={class:"filters"},GM={class:"cards"},VM=lo(()=>_e("u",null,[_e("a",null,"Show All")],-1)),WM=[VM],qM=Zt({__name:"Projects",setup(n){const e=xr([{title:"Unreal Engine TerraCrowds Plugin",description:`For my <strong>master\u2019s thesis</strong>, I developed a <strong>crowd simulation plugin for Unreal Engine</strong> in collaboration with uCrowds. The plugin enables real-time simulation of up to 100,000 agents in complex 3D game environments. Crowd flow can be directed through a graph-based waypoint system, allowing users to modify waypoints and obstacles dynamically during simulation.

The primary focus of my thesis was the user experience (UX) of crowd simulation tools for game development. By analyzing existing tools and related academic work, I identified core requirements for an effective and user-friendly workflow. My main contributions were the design and implementation of the graph-based waypoint system and a pipeline for extracting an <strong>Explicit Corridor Map (ECM)</strong> from arbitrary 3D environments.

The ECM is a navigation mesh that supports agents of varying sizes but requires environments to be partitioned into non-overlapping layers. To achieve this, I implemented multiple <strong>polygonal partitioning algorithms</strong>, enabling robust ECM extraction from any 3D game environment.

The thesis received a <strong>final grade of 8.5/10</strong>. During development, the plugin was <strong>featured at Unreal Fest (Orlando)</strong> in a live demo by uCrowds.`,media:"https://youtube.com/embed/No76LzYcdUc",tags:[Le.HIGHLIGHTED,Le.INTERNSHIP,Le.UNREAL,Le.CPP]},{title:"SMPG 3D (Bigmode Gamejam 2025)",description:`I participated in the <strong>2025 BigMode Game Jam</strong>, hosted by YouTuber VideogameDunkey. The <strong>theme</strong> of the jam was <strong>\u201Cpower\u201D</strong>, and a jury selected a small number of standout entries to be played live on stream.

I took part as a <strong>solo developer</strong>, handling all programming, art, and sound design. My interpretation of the theme centered on the familiar power bar mechanic from classic golf games. The core concept was to subvert player expectations by presenting the game as a traditional golf experience, before revealing it as a <strong>first-person action shooter</strong>.

The main mechanic allows the player to <strong>strike any physics-enabled object in the world</strong>, including golf balls, enemy heads, and even bullets fired by enemies. As the game progresses, players unlock new types of golf balls with unique abilities, such as a black hole ball and a ricochet ball.

<strong>Super Mega Power Golf 3D</strong> placed <strong>10th in the Fun category</strong> and <strong>17th in Originality</strong>. It became the <strong>second most-rated game</strong> of the jam out of 821 entries and was played live on stream. While the game did not receive any formal awards, I am very satisfied with what I was able to create within a <strong>one-week development period</strong>.`,media:"https://img.itch.zone/aW1nLzE5NjQ5MDA4LnBuZw==/315x250%23c/hwLSru.png",tags:[Le.HIGHLIGHTED,Le.PERSONAL,Le.UNITY,Le.C_SHARP],additional_link:"https://chrispies.itch.io/supermegapowergolf3d"},{title:"The Reverse Turing Test",description:`During my master\u2019s program, I took a course on AI content generation. As part of this course, my team and I developed a game prototype titled <strong>Reverse Turing Test</strong>, in which the player must convince a <strong>large language model (LLM)</strong> that they are an AI rather than a human. The project was created using exclusively <strong>AI-generated 3D models and music</strong>.

The project attracted the attention of the course instructor and was submitted to the CHI Conference <strong>Game Competition</strong>, where it was selected as <strong>one of ten official contenders</strong>. Together with two other developers, I presented the game at the <strong>CHI Conference in Yokohama, Japan</strong>. The project was awarded <strong>runner-up for best game</strong> and resulted in a <strong>publication in the ACM Digital Library</strong>.

Reverse Turing Test is set in a 1950s office, where the player interacts with a version of Alan Turing controlled by an LLM. The <strong>objective</strong> is to <strong>answer Turing\u2019s questions in a way that appears artificially generated</strong>. After a fixed number of questions, the LLM evaluates the interaction and delivers a verdict on how convincingly the player behaved as an AI.

My primary responsibility was <strong>designing and implementing the player\u2013LLM interaction</strong>. This included developing the <strong>grading system</strong> used to assess whether the player was perceived as an AI, implementing <strong>UI functionality</strong>, and contributing to the overall <strong>game design</strong>.`,media:"https://youtube.com/embed/Rx0DXEEJR5Y?si=3XyiSAqkzkV5Ecie",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.PERSONAL,Le.UNITY,Le.C_SHARP],additional_link:"https://doi.org/10.1145/3706599.3720317"},{title:"FMorgana",description:`While pursuing my master\u2019s at <strong>Utrecht University (UU)</strong>, I participated in a collaborative project at the <strong>HKU</strong>, where students are required to deliver a complete game for an <strong>external client</strong> within six months.

I joined a team tasked with creating an interactive experience for the <strong>Imagine Film Festival</strong>, a festival showcasing fiction-themed films with a new theme each year. That year\u2019s <strong>theme</strong> was <strong>\u201CEscape\u201D</strong>, exploring concepts of dystopias and utopias.

Our team designed a <strong>VR game</strong> set in a dystopian world controlled by a megacorporation. The player follows a digital cat that leads them toward a utopia. As the experience progresses, it is revealed that the utopia is a digital projection, presenting the player with a <strong>moral dilemma</strong>: remain in a <strong>real dystopia</strong>, or escape to a <strong>false utopia</strong>. The experience was designed to be <strong>accessible to players of all ages</strong> and gaming backgrounds.

I served as <strong>gameplay engineer</strong> and <strong>technical artist</strong>, contributing key technical and creative elements. I developed most of the <strong>shaders</strong>, including a <strong>custom lighting system</strong> for both dystopian and utopian environments, and created <strong>VFX</strong> such as a boids-based butterfly system used to guide the player. I also implemented <strong>VR interactions</strong>, including grab interactions and overall interactions with the cat. My technical and creative contributions were central to the development of the game.`,media:"https://www.youtube.com/embed/uOESkckacEk",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.UNITY,Le.C_SHARP,Le.VR]},{title:"Procedural Planets",description:`For a course at the <strong>HvA</strong>, we were tasked with researching and implementing a game development\u2013related feature. I chose to design and implement a system for <strong>procedurally generating miniature destructible planets</strong> in <strong>Unity</strong>, inspired by the planets in Outer Wilds.

This project allowed me to further explore the capabilities of <strong>compute shaders</strong> and <strong>post-processing effects</strong>. The system enables adding and editing multiple noise layers via an inspector window, which influence a 3D density grid. This grid is then used to generate the planet\u2019s mesh using the <strong>Surface Nets algorithm</strong>. To optimize performance, planets are partitioned into an <strong>Octree structure</strong>, which loads higher-detail chunks as the player approaches. Transitions between chunks are smoothed by interpolating vertex positions. Finally, a simple <strong>raymarched post-processing atmosphere effect</strong> was added to complete the visual presentation.

The project was awarded a <strong>10/10</strong> by the course instructors. For a deeper dive into the technical implementation, I wrote a detailed <strong>blog post</strong> accessible via the link on this page.`,media:"https://www.youtube.com/embed/aMZN_k85PA4",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.UNITY,Le.C_SHARP],additional_link:"https://summit-2223-sem1.game-lab.nl/?p=64",git_link:"https://gitlab.com/ChrisPis/planet-generation"},{title:"Flying-V VR",description:`For my <strong>graduation internship</strong>, I developed an <strong>Oculus Quest 2 VR application</strong> for <strong>KLM</strong> that allows users to explore and inspect the <strong>Flying-V plane model</strong>. The application was built in <strong>Unity</strong>, using <strong>Photon Fusion</strong> for multiplayer functionality and <strong>Ready Player Me</strong> for avatars.

Through this project, I gained hands-on experience in <strong>setting up multiplayer games in Unity</strong> and applied various <strong>optimization techniques</strong> to efficiently render multiple high-quality 3D models in VR, ensuring smooth performance on standalone mobile hardware. I also designed <strong>interactable 3D interfaces</strong>, enabling users to play animations of ground vehicles moving around the airplane.

The project was graded <strong>8.2/10</strong>, allowing me to <strong>graduate with honours</strong> from the HvA.`,media:"/src/assets/images/Screenshot 2023-05-23 103204.png",tags:[Le.INTERNSHIP,Le.UNITY,Le.C_SHARP,Le.VR]},,{title:"Game Jams (Itch.io)",description:`I enjoy participating in <strong>game jams</strong>, which I share on my <strong>itch.io</strong> page under the name 'Chrispies'.

Game jams give me the opportunity to rapidly prototype ideas and explore new engines, languages, and game development techniques. For example, <strong>Roombash</strong> allowed me to learn the <strong>Godot engine</strong>, while <strong>Still Waters</strong> gave me a chance to experiment with creating atmosphere in a horror setting. One of my projects, <strong>Super Mega Power Golf 3D</strong>, was particularly well-received, becoming the <strong>second most-rated game</strong> out of 821 entries.`,media:"https://static.itch.io/images/logo-white-new.svg",tags:[Le.PERSONAL],additional_link:"https://chrispies.itch.io/"},{title:"Volumetric Path Tracer",description:`For the final assignment of an <strong>Advanced Graphics</strong> course during my Master\u2019s program, I implemented a <strong>GPU-accelerated volumetric cloud renderer</strong> within a basic <strong>path tracer</strong> using <strong>OpenCL</strong>.

Rays are marched through a 3D volume represented by a <strong>tiled 3D texture</strong>. Light absorption at each sample point is calculated using the <strong>Beer\u2013Lambert law</strong>. For each sample, an additional ray is marched toward the light sources to compute <strong>light transmittance</strong>, using <strong>importance sampling</strong> based on light intensity and distance.

The resulting renderer supports <strong>complex volumetric effects</strong> and achieves <strong>real-time performance</strong>. The project received a <strong>final grade of 10/10</strong>.`,media:"https://github.com/user-attachments/assets/dca3e0d9-5420-4f9d-9205-d50c1bb47694",tags:[Le.SCHOOL,Le.CPP],git_link:"https://github.com/ChrisPis-bit/AdvancedGraphicsAssignment2",additional_link:"/src/assets/PDFs/Advanced_Graphics_Assignment_2_Report.pdf"},{title:"Minecraft Clone Optimization",description:`For the final assignment of a <strong>Vectorization and Optimization</strong> course during my Master\u2019s program, a fellow student and I optimized the Minecraft clone <strong>\u201CCraft.\u201D</strong>

We began by <strong>profiling the application using the Very Sleepy Profiler</strong> to identify performance bottlenecks and determine which parts of the codebase consumed the most frame time.

We introduced a <strong>hash map chunk lookup system</strong> to enable fast neighbor queries, significantly improving chunk access performance. We then optimized the <strong>frustum culling implementation using SIMD (AVX1)</strong>, reducing CPU overhead during visibility checks.

To improve rendering performance, we <strong>compressed vertex data into single-byte representations</strong>, reducing memory bandwidth usage and accelerating chunk mesh uploads to the GPU. Finally, we implemented <strong>greedy meshing</strong> to dramatically decrease the number of rendered vertices by merging adjacent coplanar faces.

Together, these optimizations improved performance by <strong>approximately 50\xD7</strong>, and the project received a <strong>final grade of 10/10</strong>.`,media:"/src/assets/images/Craft.png",tags:[Le.SCHOOL,Le.CPP],git_link:"https://github.com/Roeliefantje/Craft",additional_link:"/src/assets/PDFs/INFOMOV_Assignment3.pdf"},{title:"Simple Path Tracer",description:`During my master's program, I followed a course in <strong>Advanced Graphics</strong>, where I learned about <strong>real-time raytracing</strong>. After completing the course with a <strong>8.9/10</strong>, I decided to use what I learned to develop my own <strong>raytracer</strong>.

The current progress of my raytracer can be seen on the <strong>GitHub page</strong> linked on this page.`,media:"https://github.com/user-attachments/assets/ac4bf908-e621-4eea-acb3-033fa143c486",tags:[Le.PERSONAL,Le.RUST],git_link:"https://github.com/ChrisPis-bit/MyTracer"},{title:"Magicise VR",description:`During my study at the <strong>HvA</strong>, I followed the minor <strong>Virtual Reality</strong>. During this minor, each group was tasked with solving a problem for a company using a VR application.

My group was tasked with creating a VR application that motivates athletes to perform workouts in a virtual environment. During this project, I mainly worked on creating <strong>visual effects</strong> using custom-written <strong>shaders</strong> and the <strong>VFX graph</strong> in Unity, and implemented game logic for spell casting and enemy spawning.

I also implemented the ability to use an <strong>XSense motion capture suit</strong> in the application, created many of the <strong>3D models and textures</strong> in Blender, and served as the <strong>group lead</strong>.`,media:"https://www.youtube.com/embed/SMg9Urwz5fs",tags:[Le.SCHOOL,Le.UNITY,Le.C_SHARP,Le.VR]},{title:"Endless Terrain Generator",description:`In my free time, I like to pick up small projects in subjects that interest me. One of these projects is an <strong>endless terrain generator</strong>. Using the <strong>marching cubes algorithm</strong> and <strong>3D noise</strong>, I am able to generate an endless randomized terrain.

By working on this project, I learned what <strong>compute shaders</strong> are, how to <strong>optimize code with Unity's Job System</strong>, and how to <strong>procedurally generate meshes</strong>.`,media:"https://www.youtube.com/embed/_nPeMuDrUjA",tags:[Le.PERSONAL,Le.UNITY,Le.C_SHARP],git_link:"https://gitlab.com/ChrisPis/terrain-generation"},{title:"DTT - Unity Packages",description:`During my internship at the multimedia company <strong>DTT</strong>, I worked on a project called the <strong>Unity Core Packages (UCP)</strong> project. The goal of this project was to convert systems used in existing DTT apps into <strong>Unity assets</strong>, which can then be sold on the <strong>Unity Asset Store</strong>.

I was tasked with creating some assets from scratch and checking if assets were ready for release. I worked on assets such as <strong>Word Finder</strong>, <strong>Anagram Finder</strong>, <strong>Analytic Events</strong>, and <strong>A/B testing</strong>, and added functionalities to many of the other published assets.`,media:"/src/assets/images/DTTAssetStore.PNG",tags:[Le.INTERNSHIP,Le.UNITY,Le.C_SHARP],additional_link:"https://assetstore.unity.com/publishers/35054"},{title:"Slime Dash",description:`In the first year at the <strong>HvA</strong>, we were tasked with making a simple 2D game that could be played on the consoles in planes. With no prior coding experience, I worked together with 3 other students to create the game <strong>Slime Dash</strong>.

The game is a <strong>2D infinite side scroller</strong> in which players dash through enemies and aim to gain as many points as possible. We completed this project in a single semester, during which I learned the basics of <strong>programming in Processing</strong>.

Our game was among the <strong>top 3 rated games</strong> of that semester.`,media:"https://www.youtube.com/embed/gVGPEba4fYc",tags:[Le.SCHOOL,Le.JAVA]}]),t=Et(()=>c.value.every(g=>g.enabled));to(()=>{u({tag:Le.HIGHLIGHTED})});const i=Et(()=>e.value.filter(g=>g.tags.some(p=>{var f;return(f=c.value.find(_=>p===_.value))==null?void 0:f.enabled}))),r=xr(!1),s=xr({title:"",description:"",media:"",tags:[],git_link:void 0,additional_link:void 0}),a=g=>{s.value.title=g.title,s.value.description=g.description,s.value.media=g.media,s.value.tags=g.tags,s.value.git_link=g.git_link,s.value.additional_link=g.additional_link,r.value=!0},o=()=>{r.value=!1},l=Object.keys(Le).map(g=>Le[g]),c=xr(l.map(g=>({value:g,enabled:!1}))),u=g=>{const p=c.value.find(f=>f.value===g.tag);p&&(p.enabled=!p.enabled)},d=()=>c.value.some(g=>g.enabled),h=()=>{const g=d();c.value.forEach(p=>p.enabled=!g)},m=()=>{c.value.forEach(g=>g.enabled=!0)};return(g,p)=>(Ze(),et("div",IM,[_e("div",FM,[_e("div",NM,[_e("div",OM,[UM,_e("div",zM,[kM,BM,_e("div",HM,[(Ze(!0),et(vt,null,zs(c.value,f=>(Ze(),Wi(tl,{tag:f.value,clickable:!0,selected:f.enabled,onTagToggled:u},null,8,["tag","selected"]))),256)),_e("div",{class:"filters-toggle",onClick:p[0]||(p[0]=f=>h()),style:Gr({filter:d()?"none":"brightness(50%)"})},"Toggle all",4)]),_e("div",GM,[(Ze(!0),et(vt,null,zs(qt(i),f=>(Ze(),Wi(uM,{key:f.title,title:f.title,media:f.media,tags:f.tags,description:f.description,git_link:f.git_link,additional_link:f.additional_link,onCardClicked:a},null,8,["title","media","tags","description","git_link","additional_link"]))),128))]),qt(t)?Un("",!0):(Ze(),et("div",{key:0,class:"show-all",onClick:m},WM)),(Ze(),Wi(Nf,{to:"body"},[De(DM,{id:"always-on-top",visible:r.value,title:s.value.title,description:s.value.description,media:s.value.media,git_link:s.value.git_link,tags:s.value.tags,additional_link:s.value.additional_link,onClose:o},null,8,["visible","title","description","media","git_link","tags","additional_link"])]))])])])])]))}});const jM=Ot(qM,[["__scopeId","data-v-e73075d6"]]);const XM={},$M={class:"max-width"},YM=io('<div class="container fade-in" data-v-4c96ec08><div class="center-content" data-v-4c96ec08><div class="title" data-v-4c96ec08> Contact Me </div><div class="seperator" data-v-4c96ec08></div><div class="icons" data-v-4c96ec08><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" data-v-4c96ec08><img src="https://img.icons8.com/ios/100/000000/mail.png" data-v-4c96ec08></a><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-4c96ec08><img src="https://img.icons8.com/ios/100/000000/linkedin-circled--v1.png" data-v-4c96ec08></a><a href="https://github.com/ChrisPis-bit?tab=repositories" target="_blank" data-v-4c96ec08><img class="icon" src="https://img.icons8.com/ios11/100/000000/github.png" data-v-4c96ec08></a></div></div></div>',1),ZM=[YM];function KM(n,e){return Ze(),et("div",$M,ZM)}const JM=Ot(XM,[["render",KM],["__scopeId","data-v-4c96ec08"]]),QM=`\r
uniform float uTime;\r
uniform float uOffset;\r
\r
varying vec2 vUv;\r
varying float vHeight;\r
varying float vDepth;\r
\r
vec2 fade(vec2 t) {\r
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\r
}\r
\r
float hash(vec2 p) {\r
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);\r
}\r
\r
vec2 gradient(vec2 p) {\r
  float h = hash(p);\r
  float angle = h * 6.28318530718; // 2*pi\r
  return vec2(cos(angle), sin(angle));\r
}\r
\r
float perlinNoise(vec2 p) {\r
  vec2 i = floor(p);\r
  vec2 f = fract(p);\r
\r
  vec2 g00 = gradient(i + vec2(0.0, 0.0));\r
  vec2 g10 = gradient(i + vec2(1.0, 0.0));\r
  vec2 g01 = gradient(i + vec2(0.0, 1.0));\r
  vec2 g11 = gradient(i + vec2(1.0, 1.0));\r
\r
  float d00 = dot(g00, f - vec2(0.0, 0.0));\r
  float d10 = dot(g10, f - vec2(1.0, 0.0));\r
  float d01 = dot(g01, f - vec2(0.0, 1.0));\r
  float d11 = dot(g11, f - vec2(1.0, 1.0));\r
\r
  vec2 u = fade(f);\r
\r
  return mix(\r
    mix(d00, d10, u.x),\r
    mix(d01, d11, u.x),\r
    u.y\r
  ) * .5 + .5;\r
}\r
\r
float getHeight(vec2 p) {\r
  float noise;\r
  float freq = .65;\r
  float amp = 0.35;\r
  for (int i = 0; i < 3; i++)\r
  {\r
      // '/ 2 + .5' is done, because the returned value is from -1 to 1, but should be 0 to 1.\r
      float v = 1.0 - abs(perlinNoise(p * freq) - .5) * 2.0; \r
      noise += (v) * amp;\r
      freq *= 2.0;\r
      amp *= .5;\r
  }\r
  //return pow(abs(perlinNoise(p) - .5) * 2.0,1.0) ;\r
  //return noise;\r
  return  pow(noise, 2.0) * 2.5 - .3;\r
}\r
\r
void main(){\r
    vUv = vec2(position.x , 1);\r
\r
    vec2 noiseCoords = vec2(position.x, position.y + uOffset) * .015;\r
    float noise = getHeight(noiseCoords);\r
\r
    // Height\r
    float heightScale = abs((sin((position.y + uOffset) * .05) * 8.0 + position.x) / 140.0);\r
    heightScale *= heightScale;\r
    heightScale = clamp(heightScale, 0.0, 1.0);\r
    noise = noise * heightScale;\r
\r
    vec3 pos = vec3(0.0, 0.0, noise * 250.0);\r
    vHeight = noise;\r
\r
    vec4 viewPos = modelViewMatrix * vec4(position + pos, 1.0);\r
    vDepth = -viewPos.z;\r
    gl_Position = projectionMatrix * viewPos;\r
}`,eS=`varying vec2 vUv;\r
varying float vHeight;\r
varying float vDepth;\r
\r
uniform vec3 uFogColor;\r
\r
const vec3 colMain = vec3(92.0, 111.0, 43.0) / 255.0;\r
const vec3 colSub = vec3(222.0, 128.0, 43.0) / 255.0;\r
\r
void main() {\r
    // MainColor\r
    float color_t = step(.01, sin(vHeight * 3.145 * 130.0  * pow(vHeight, .7)) * (vHeight * .5));\r
    vec3 color = mix(colSub / 1.4, colSub, color_t) * ( 0.8 + vHeight * 1.5);\r
\r
    // Water\r
    float waterFalloff = clamp(vHeight, 0.0, 1.0) * 100.0;\r
    vec3 waterColor = mix(vec3(.3, .3, .9), vec3(.5, .5, .85), waterFalloff);  \r
    color = mix(waterColor, color, step(1.0, waterFalloff));\r
\r
    // Fog\r
    float fogFactor = clamp(vDepth / 500.0, 0.0, 1.0);\r
    color = mix(color, uFogColor, fogFactor * fogFactor);\r
\r
    gl_FragColor = vec4(color, 1.0);\r
    //gl_FragColor = vec4(vHeight, vHeight,vHeight,1.0);\r
}`,tS=`\r
varying vec2 vUv;\r
\r
void main(){\r
    vUv = uv;\r
\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,nS=`varying vec2 vUv;\r
\r
uniform float uTime;\r
\r
const vec3 colMain = vec3(92.0, 111.0, 43.0) / 255.0;\r
const vec3 colSub = vec3(222.0, 128.0, 43.0) / 255.0;\r
const vec3 colFog = vec3(216.0, 201.0, 167.0) / 255.0;\r
\r
void main() {\r
    // Wave\r
    vec2 uvCentered = vUv * 2.0 - 1.0;\r
    float mask = clamp(1.0 - length(uvCentered), 0.0, 1.0);\r
\r
    float wave_t = -uvCentered.y;\r
    wave_t = wave_t > 0.0 ? wave_t : 0.0;\r
    float wave = 1.0;\r
    if(wave_t > 0.0){\r
        wave = sin(wave_t * (60.0 * (1.0 - wave_t * .5)) + -uTime);\r
    }\r
\r
    mask = smoothstep(0.0001, .01, min(wave, mask));\r
\r
    // Color\r
    vec3 color = mix(colSub, colSub * 1.9, vUv.y);\r
\r
    gl_FragColor = vec4(color, mask);\r
}`;class iS extends el{constructor(t){super(t);Oe(this,"speed",1);Oe(this,"startZ",-250);Oe(this,"segmentDist",0);Oe(this,"mat");Oe(this,"model");const i=getComputedStyle(document.documentElement).getPropertyValue("--color-background-dark").trim(),r=new lr(1e3,600,500,300);this.segmentDist=500/250,this.mat=new fn({vertexShader:QM,fragmentShader:eS,uniforms:{uTime:{value:0},uFogColor:{value:new Ke(i)},uOffset:{value:0}}}),this.model=new Nt(r,this.mat),this.model.rotateX(-Math.PI/2),this.model.scale.setX(1),this.model.scale.setY(1),this.model.position.setY(-30),this.model.position.setZ(this.startZ),t.scene.add(this.model)}update(){this.mat.uniforms.uTime.value=this.scene.time;let t=this.scene.time%this.speed/this.speed;this.model.position.setZ(this.startZ+this.segmentDist*t),this.mat.uniforms.uOffset.value=this.segmentDist*Math.floor(this.scene.time/this.speed)}dispose(){this.scene.scene.remove(this.model)}}const rS=io('<div class="main" data-v-68652f5f><div class="canvas-viewport" data-v-68652f5f><canvas id="bg" data-v-68652f5f></canvas><div class="max-width" data-v-68652f5f><div class="name-container" data-v-68652f5f><div data-v-68652f5f><div class="name-1" data-v-68652f5f>Hi, I&#39;m</div><div class="name-2" data-v-68652f5f>Chris Lokhorst</div></div></div></div></div></div>',1),sS=Zt({__name:"Home",setup(n){let e=!1,t;return to(()=>{const i=document.querySelectorAll(".fade-in"),r=new IntersectionObserver((f,_)=>{f.forEach(S=>{S.isIntersecting&&(S.target.classList.add("show"),_.unobserve(S.target))})},{root:null,rootMargin:"0px 0px -100px 0px",threshold:0});i.forEach(f=>r.observe(f)),e=!0;const s=document.getElementById("bg");if(!s)return;const a=new ub,o=new Lt(75,s.offsetWidth/s.offsetHeight,.1,500),l=new Bd({canvas:s,alpha:!0});l.setPixelRatio(window.devicePixelRatio),o.position.setZ(30),o.position.setX(0),t=new xb(a,o,l);const c=new pb(16777215),u=new mb(16777215,.1);c.position.set(30,10,30),c.rotation.x=-90,c.rotation.y=45,c.angle=10,c.decay=2,t.scene.add(c),t.scene.add(u),t.addObject(new Sb(t)),t.addObject(new iS(t));const d=new lr(240,240,1,1),h=new fn({vertexShader:tS,fragmentShader:nS,uniforms:{uTime:{value:0}},transparent:!0}),m=new Nt(d,h);m.position.setY(60),m.position.setZ(-470),t.scene.add(m),t.update(0);const g=new gb;function p(f){if(!e)return;t.update(f),g.getDelta();const _=g.getElapsedTime();h.uniforms.uTime.value=_,requestAnimationFrame(p)}p(0)}),ka(()=>{e=!1,t.dispose()}),(i,r)=>(Ze(),et(vt,null,[rS,De(eM),De(jM,{id:"projects-section"}),De(JM,{id:"contact-section"})],64))}});const Ts=Ot(sS,[["__scopeId","data-v-68652f5f"]]);const oS=[{path:"/",component:Ts},{path:"/about",component:Ts},{path:"/projects",component:Ts},{path:"/contact",component:Ts}],aS=Em({history:Bp(),routes:oS,scrollBehavior(n,e,t){if(n.hash)return{el:n.hash,behavior:"smooth"};let i="";switch(n.path){case"/about":i="#about-section";break;case"/projects":i="#projects-section";break;case"/contact":i="#contact-section";break;default:i="#home-section"}return i?{el:i,behavior:"smooth"}:{top:0}}}),Vd=yp(tg);Vd.use(aS);Vd.mount("#app");
