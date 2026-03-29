var qd=Object.defineProperty;var jd=(n,e,t)=>e in n?qd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ke=(n,e,t)=>(jd(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wa(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$d=wa(Xd);function su(n){return!!n||n===""}function Gr(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=lt(i)?Kd(i):Gr(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(lt(n))return n;if(ct(n))return n}}const Yd=/;(?![^(]*\))/g,Zd=/:(.+)/;function Kd(n){const e={};return n.split(Yd).forEach(t=>{if(t){const i=t.split(Zd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ws(n){let e="";if(lt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Ws(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Pr=n=>lt(n)?n:n==null?"":Fe(n)||ct(n)&&(n.toString===cu||!Oe(n.toString))?JSON.stringify(n,ou,2):String(n),ou=(n,e)=>e&&e.__v_isRef?ou(n,e.value):Gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:au(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!Fe(e)&&!uu(e)?String(e):e,Qe={},Hi=[],Wt=()=>{},Jd=()=>!1,Qd=/^on[^a-z]/,qs=n=>Qd.test(n),Ea=n=>n.startsWith("onUpdate:"),xt=Object.assign,Ta=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ef=Object.prototype.hasOwnProperty,He=(n,e)=>ef.call(n,e),Fe=Array.isArray,Gi=n=>js(n)==="[object Map]",au=n=>js(n)==="[object Set]",Oe=n=>typeof n=="function",lt=n=>typeof n=="string",Aa=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",lu=n=>ct(n)&&Oe(n.then)&&Oe(n.catch),cu=Object.prototype.toString,js=n=>cu.call(n),tf=n=>js(n).slice(8,-1),uu=n=>js(n)==="[object Object]",Ca=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nf=/-(\w)/g,fn=Xs(n=>n.replace(nf,(e,t)=>t?t.toUpperCase():"")),rf=/\B([A-Z])/g,tr=Xs(n=>n.replace(rf,"-$1").toLowerCase()),$s=Xs(n=>n.charAt(0).toUpperCase()+n.slice(1)),ho=Xs(n=>n?`on${$s(n)}`:""),Dr=(n,e)=>!Object.is(n,e),po=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ns=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},sf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let tl;const of=()=>tl||(tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let rn;class af{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&rn&&(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function lf(n,e=rn){e&&e.active&&e.effects.push(n)}const La=n=>{const e=new Set(n);return e.w=0,e.n=0,e},du=n=>(n.w&Wn)>0,fu=n=>(n.n&Wn)>0,cf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Wn},uf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];du(r)&&!fu(r)?r.delete(n):e[t++]=r,r.w&=~Wn,r.n&=~Wn}e.length=t}},Ko=new WeakMap;let vr=0,Wn=1;const Jo=30;let Ht;const si=Symbol(""),Qo=Symbol("");class Ra{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,lf(this,i)}run(){if(!this.active)return this.fn();let e=Ht,t=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,Bn=!0,Wn=1<<++vr,vr<=Jo?cf(this):nl(this),this.fn()}finally{vr<=Jo&&uf(this),Wn=1<<--vr,Ht=this.parent,Bn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(nl(this),this.onStop&&this.onStop(),this.active=!1)}}function nl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Bn=!0;const hu=[];function nr(){hu.push(Bn),Bn=!1}function ir(){const n=hu.pop();Bn=n===void 0?!0:n}function Pt(n,e,t){if(Bn&&Ht){let i=Ko.get(n);i||Ko.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=La()),pu(r)}}function pu(n,e){let t=!1;vr<=Jo?fu(n)||(n.n|=Wn,t=!du(n)):t=!n.has(Ht),t&&(n.add(Ht),Ht.deps.push(n))}function wn(n,e,t,i,r,s){const a=Ko.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(n)?Ca(t)&&o.push(a.get("length")):(o.push(a.get(si)),Gi(n)&&o.push(a.get(Qo)));break;case"delete":Fe(n)||(o.push(a.get(si)),Gi(n)&&o.push(a.get(Qo)));break;case"set":Gi(n)&&o.push(a.get(si));break}if(o.length===1)o[0]&&ea(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ea(La(l))}}function ea(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&il(i);for(const i of t)i.computed||il(i)}function il(n,e){(n!==Ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const df=wa("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Aa)),ff=Pa(),hf=Pa(!1,!0),pf=Pa(!0),rl=mf();function mf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){nr();const i=je(this)[e].apply(this,t);return ir(),i}}),n}function Pa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Pf:yu:e?xu:vu).get(i))return i;const a=Fe(i);if(!n&&a&&He(rl,r))return Reflect.get(rl,r,s);const o=Reflect.get(i,r,s);return(Aa(r)?mu.has(r):df(r))||(n||Pt(i,"get",r),e)?o:pt(o)?a&&Ca(r)?o:o.value:ct(o)?n?bu(o):Vr(o):o}}const gf=gu(),_f=gu(!0);function gu(n=!1){return function(t,i,r,s){let a=t[i];if(Ir(a)&&pt(a)&&!pt(r))return!1;if(!n&&!Ir(r)&&(ta(r)||(r=je(r),a=je(a)),!Fe(t)&&pt(a)&&!pt(r)))return a.value=r,!0;const o=Fe(t)&&Ca(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?Dr(r,a)&&wn(t,"set",i,r):wn(t,"add",i,r)),l}}function vf(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&wn(n,"delete",e,void 0),i}function xf(n,e){const t=Reflect.has(n,e);return(!Aa(e)||!mu.has(e))&&Pt(n,"has",e),t}function yf(n){return Pt(n,"iterate",Fe(n)?"length":si),Reflect.ownKeys(n)}const _u={get:ff,set:gf,deleteProperty:vf,has:xf,ownKeys:yf},bf={get:pf,set(n,e){return!0},deleteProperty(n,e){return!0}},Mf=xt({},_u,{get:hf,set:_f}),Da=n=>n,Ys=n=>Reflect.getPrototypeOf(n);function Qr(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:a}=Ys(r),o=i?Da:t?Na:Fr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function es(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ts(n,e=!1){return n=n.__v_raw,!e&&Pt(je(n),"iterate",si),Reflect.get(n,"size",n)}function sl(n){n=je(n);const e=je(this);return Ys(e).has.call(e,n)||(e.add(n),wn(e,"add",n,n)),this}function ol(n,e){e=je(e);const t=je(this),{has:i,get:r}=Ys(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Dr(e,a)&&wn(t,"set",n,e):wn(t,"add",n,e),this}function al(n){const e=je(this),{has:t,get:i}=Ys(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&wn(e,"delete",n,void 0),s}function ll(){const n=je(this),e=n.size!==0,t=n.clear();return e&&wn(n,"clear",void 0,void 0),t}function ns(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?Da:n?Na:Fr;return!n&&Pt(o,"iterate",si),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function is(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=Gi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Da:e?Na:Fr;return!e&&Pt(s,"iterate",l?Qo:si),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function An(n){return function(...e){return n==="delete"?!1:this}}function Sf(){const n={get(s){return Qr(this,s)},get size(){return ts(this)},has:es,add:sl,set:ol,delete:al,clear:ll,forEach:ns(!1,!1)},e={get(s){return Qr(this,s,!1,!0)},get size(){return ts(this)},has:es,add:sl,set:ol,delete:al,clear:ll,forEach:ns(!1,!0)},t={get(s){return Qr(this,s,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ns(!0,!1)},i={get(s){return Qr(this,s,!0,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=is(s,!1,!1),t[s]=is(s,!0,!1),e[s]=is(s,!1,!0),i[s]=is(s,!0,!0)}),[n,t,e,i]}const[wf,Ef,Tf,Af]=Sf();function Ia(n,e){const t=e?n?Af:Tf:n?Ef:wf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const Cf={get:Ia(!1,!1)},Lf={get:Ia(!1,!0)},Rf={get:Ia(!0,!1)},vu=new WeakMap,xu=new WeakMap,yu=new WeakMap,Pf=new WeakMap;function Df(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function If(n){return n.__v_skip||!Object.isExtensible(n)?0:Df(tf(n))}function Vr(n){return Ir(n)?n:Fa(n,!1,_u,Cf,vu)}function Ff(n){return Fa(n,!1,Mf,Lf,xu)}function bu(n){return Fa(n,!0,bf,Rf,yu)}function Fa(n,e,t,i,r){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=If(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vi(n){return Ir(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ir(n){return!!(n&&n.__v_isReadonly)}function ta(n){return!!(n&&n.__v_isShallow)}function Mu(n){return Vi(n)||Ir(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Su(n){return Ns(n,"__v_skip",!0),n}const Fr=n=>ct(n)?Vr(n):n,Na=n=>ct(n)?bu(n):n;function wu(n){Bn&&Ht&&(n=je(n),pu(n.dep||(n.dep=La())))}function Eu(n,e){n=je(n),n.dep&&ea(n.dep)}function pt(n){return!!(n&&n.__v_isRef===!0)}function xr(n){return Tu(n,!1)}function Nf(n){return Tu(n,!0)}function Tu(n,e){return pt(n)?n:new Of(n,e)}class Of{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Fr(e)}get value(){return wu(this),this._value}set value(e){e=this.__v_isShallow?e:je(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Fr(e),Eu(this))}}function qt(n){return pt(n)?n.value:n}const Uf={get:(n,e,t)=>qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return pt(r)&&!pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Au(n){return Vi(n)?n:new Proxy(n,Uf)}class zf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ra(e,()=>{this._dirty||(this._dirty=!0,Eu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return wu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kf(n,e,t=!1){let i,r;const s=Oe(n);return s?(i=n,r=Wt):(i=n.get,r=n.set),new zf(i,r,s||!r,t)}function Hn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Zs(s,e,t)}return r}function jt(n,e,t,i){if(Oe(n)){const s=Hn(n,e,t,i);return s&&lu(s)&&s.catch(a=>{Zs(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(jt(n[s],e,t,i));return r}function Zs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hn(l,null,10,[n,a,o]);return}}Bf(n,t,r,i)}function Bf(n,e,t,i=!0){console.error(n)}let Os=!1,na=!1;const Rt=[];let bn=0;const Sr=[];let yr=null,Ni=0;const wr=[];let On=null,Oi=0;const Cu=Promise.resolve();let Oa=null,ia=null;function Lu(n){const e=Oa||Cu;return n?e.then(this?n.bind(this):n):e}function Hf(n){let e=bn+1,t=Rt.length;for(;e<t;){const i=e+t>>>1;Nr(Rt[i])<n?e=i+1:t=i}return e}function Ru(n){(!Rt.length||!Rt.includes(n,Os&&n.allowRecurse?bn+1:bn))&&n!==ia&&(n.id==null?Rt.push(n):Rt.splice(Hf(n.id),0,n),Pu())}function Pu(){!Os&&!na&&(na=!0,Oa=Cu.then(Fu))}function Gf(n){const e=Rt.indexOf(n);e>bn&&Rt.splice(e,1)}function Du(n,e,t,i){Fe(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Pu()}function Vf(n){Du(n,yr,Sr,Ni)}function Wf(n){Du(n,On,wr,Oi)}function Ks(n,e=null){if(Sr.length){for(ia=e,yr=[...new Set(Sr)],Sr.length=0,Ni=0;Ni<yr.length;Ni++)yr[Ni]();yr=null,Ni=0,ia=null,Ks(n,e)}}function Iu(n){if(Ks(),wr.length){const e=[...new Set(wr)];if(wr.length=0,On){On.push(...e);return}for(On=e,On.sort((t,i)=>Nr(t)-Nr(i)),Oi=0;Oi<On.length;Oi++)On[Oi]();On=null,Oi=0}}const Nr=n=>n.id==null?1/0:n.id;function Fu(n){na=!1,Os=!0,Ks(n),Rt.sort((t,i)=>Nr(t)-Nr(i));const e=Wt;try{for(bn=0;bn<Rt.length;bn++){const t=Rt[bn];t&&t.active!==!1&&Hn(t,null,14)}}finally{bn=0,Rt.length=0,Iu(),Os=!1,Oa=null,(Rt.length||Sr.length||wr.length)&&Fu(n)}}function qf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:f}=i[u]||Qe;f&&(r=t.map(m=>m.trim())),d&&(r=t.map(sf))}let o,l=i[o=ho(e)]||i[o=ho(fn(e))];!l&&s&&(l=i[o=ho(tr(e))]),l&&jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,jt(c,n,6,r)}}function Nu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Oe(n)){const l=c=>{const u=Nu(c,e,!0);u&&(o=!0,xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):xt(a,s),i.set(n,a),a)}function Js(n,e){return!n||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,tr(e))||He(n,e))}let cn=null,Qs=null;function Us(n){const e=cn;return cn=n,Qs=n&&n.type.__scopeId||null,e}function Wr(n){Qs=n}function qr(){Qs=null}function ln(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&xl(-1);const s=Us(e),a=n(...r);return Us(s),i._d&&xl(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function mo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:g,inheritAttrs:p}=n;let h,_;const S=Us(n);try{if(t.shapeFlag&4){const E=r||i;h=sn(u.call(E,E,d,s,m,f,g)),_=l}else{const E=e;h=sn(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),_=e.props?l:jf(l)}}catch(E){Tr.length=0,Zs(E,n,1),h=De(ui)}let L=h;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:w}=L;E.length&&w&7&&(a&&E.some(Ea)&&(_=Xf(_,a)),L=Xi(L,_))}return t.dirs&&(L=Xi(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),h=L,Us(S),h}const jf=n=>{let e;for(const t in n)(t==="class"||t==="style"||qs(t))&&((e||(e={}))[t]=n[t]);return e},Xf=(n,e)=>{const t={};for(const i in n)(!Ea(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $f(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?cl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!Js(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?cl(i,a,c):!0:!!a;return!1}function cl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Js(t,s))return!0}return!1}function Yf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Zf=n=>n.__isSuspense;function Kf(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Wf(n)}function Cs(n,e){if(dt){let t=dt.provides;const i=dt.parent&&dt.parent.provides;i===t&&(t=dt.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=dt||cn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i.proxy):e}}const ul={};function Ls(n,e,t){return Ou(n,e,t)}function Ou(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Qe){const o=dt;let l,c=!1,u=!1;if(pt(n)?(l=()=>n.value,c=ta(n)):Vi(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(_=>Vi(_)||ta(_)),l=()=>n.map(_=>{if(pt(_))return _.value;if(Vi(_))return ki(_);if(Oe(_))return Hn(_,o,2)})):Oe(n)?e?l=()=>Hn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),jt(n,o,3,[f])}:l=Wt,e&&i){const _=l;l=()=>ki(_())}let d,f=_=>{d=h.onStop=()=>{Hn(_,o,4)}};if(Ur)return f=Wt,e?t&&jt(e,o,3,[l(),u?[]:void 0,f]):l(),Wt;let m=u?[]:ul;const g=()=>{if(!!h.active)if(e){const _=h.run();(i||c||(u?_.some((S,L)=>Dr(S,m[L])):Dr(_,m)))&&(d&&d(),jt(e,o,3,[_,m===ul?void 0:m,f]),m=_)}else h.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>Mt(g,o&&o.suspense):p=()=>Vf(g);const h=new Ra(l,p);return e?t?g():m=h.run():r==="post"?Mt(h.run.bind(h),o&&o.suspense):h.run(),()=>{h.stop(),o&&o.scope&&Ta(o.scope.effects,h)}}function Jf(n,e,t){const i=this.proxy,r=lt(n)?n.includes(".")?Uu(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const a=dt;$i(this);const o=Ou(r,s.bind(i),t);return a?$i(a):oi(),o}function Uu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function ki(n,e){if(!ct(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),pt(n))ki(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)ki(n[t],e);else if(au(n)||Gi(n))n.forEach(t=>{ki(t,e)});else if(uu(n))for(const t in n)ki(n[t],e);return n}function Zt(n){return Oe(n)?{setup:n,name:n.name}:n}const Rs=n=>!!n.type.__asyncLoader,zu=n=>n.type.__isKeepAlive;function Qf(n,e){ku(n,"a",e)}function eh(n,e){ku(n,"da",e)}function ku(n,e,t=dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(eo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zu(r.parent.vnode)&&th(i,e,t,r),r=r.parent}}function th(n,e,t,i){const r=eo(e,n,i,!0);Ua(()=>{Ta(i[e],r)},t)}function eo(n,e,t=dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;nr(),$i(t);const o=jt(e,t,n,a);return oi(),ir(),o});return i?r.unshift(s):r.push(s),s}}const En=n=>(e,t=dt)=>(!Ur||n==="sp")&&eo(n,e,t),nh=En("bm"),to=En("m"),ih=En("bu"),rh=En("u"),sh=En("bum"),Ua=En("um"),oh=En("sp"),ah=En("rtg"),lh=En("rtc");function ch(n,e=dt){eo("ec",n,e)}function jn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(nr(),jt(l,t,8,[n.el,o,n,e]),ir())}}const Bu="components";function za(n,e){return dh(Bu,n,!0,e)||n}const uh=Symbol();function dh(n,e,t=!0,i=!1){const r=cn||dt;if(r){const s=r.type;if(n===Bu){const o=Vh(s,!1);if(o&&(o===e||o===fn(e)||o===$s(fn(e))))return s}const a=dl(r[n]||s[n],e)||dl(r.appContext[n],e);return!a&&i?s:a}}function dl(n,e){return n&&(n[e]||n[fn(e)]||n[$s(fn(e))])}function zs(n,e,t,i){let r;const s=t&&t[i];if(Fe(n)||lt(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const ra=n=>n?Ku(n)?Va(n)||n.proxy:ra(n.parent):null,ks=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ra(n.parent),$root:n=>ra(n.root),$emit:n=>n.emit,$options:n=>Gu(n),$forceUpdate:n=>n.f||(n.f=()=>Ru(n.update)),$nextTick:n=>n.n||(n.n=Lu.bind(n.proxy)),$watch:n=>Jf.bind(n)}),fh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Qe&&He(i,e))return a[e]=1,i[e];if(r!==Qe&&He(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return a[e]=3,s[e];if(t!==Qe&&He(t,e))return a[e]=4,t[e];sa&&(a[e]=0)}}const u=ks[e];let d,f;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==Qe&&He(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,He(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Qe&&He(r,e)?(r[e]=t,!0):i!==Qe&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Qe&&He(n,a)||e!==Qe&&He(e,a)||(o=s[0])&&He(o,a)||He(i,a)||He(ks,a)||He(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let sa=!0;function hh(n){const e=Gu(n),t=n.proxy,i=n.ctx;sa=!1,e.beforeCreate&&fl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:h,beforeDestroy:_,beforeUnmount:S,destroyed:L,unmounted:E,render:w,renderTracked:P,renderTriggered:O,errorCaptured:M,serverPrefetch:A,expose:X,inheritAttrs:B,components:pe,directives:fe,filters:z}=e;if(c&&ph(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const q in a){const j=a[q];Oe(j)&&(i[q]=j.bind(t))}if(r){const q=r.call(t,t);ct(q)&&(n.data=Vr(q))}if(sa=!0,s)for(const q in s){const j=s[q],V=Oe(j)?j.bind(t,t):Oe(j.get)?j.get.bind(t,t):Wt,Z=!Oe(j)&&Oe(j.set)?j.set.bind(t):Wt,ae=Et({get:V,set:Z});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ae.value,set:ie=>ae.value=ie})}if(o)for(const q in o)Hu(o[q],i,t,q);if(l){const q=Oe(l)?l.call(t):l;Reflect.ownKeys(q).forEach(j=>{Cs(j,q[j])})}u&&fl(u,n,"c");function G(q,j){Fe(j)?j.forEach(V=>q(V.bind(t))):j&&q(j.bind(t))}if(G(nh,d),G(to,f),G(ih,m),G(rh,g),G(Qf,p),G(eh,h),G(ch,M),G(lh,P),G(ah,O),G(sh,S),G(Ua,E),G(oh,A),Fe(X))if(X.length){const q=n.exposed||(n.exposed={});X.forEach(j=>{Object.defineProperty(q,j,{get:()=>t[j],set:V=>t[j]=V})})}else n.exposed||(n.exposed={});w&&n.render===Wt&&(n.render=w),B!=null&&(n.inheritAttrs=B),pe&&(n.components=pe),fe&&(n.directives=fe)}function ph(n,e,t=Wt,i=!1){Fe(n)&&(n=oa(n));for(const r in n){const s=n[r];let a;ct(s)?"default"in s?a=Gn(s.from||r,s.default,!0):a=Gn(s.from||r):a=Gn(s),pt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function fl(n,e,t){jt(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Hu(n,e,t,i){const r=i.includes(".")?Uu(t,i):()=>t[i];if(lt(n)){const s=e[n];Oe(s)&&Ls(r,s)}else if(Oe(n))Ls(r,n.bind(t));else if(ct(n))if(Fe(n))n.forEach(s=>Hu(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&Ls(r,s,n)}}function Gu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Bs(l,c,a,!0)),Bs(l,e,a)),s.set(e,l),l}function Bs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Bs(n,s,t,!0),r&&r.forEach(a=>Bs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=mh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const mh={data:hl,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Kn,directives:Kn,watch:_h,provide:hl,inject:gh};function hl(n,e){return e?n?function(){return xt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function gh(n,e){return Kn(oa(n),oa(e))}function oa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _t(n,e){return n?[...new Set([].concat(n,e))]:e}function Kn(n,e){return n?xt(xt(Object.create(null),n),e):e}function _h(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=_t(n[i],e[i]);return t}function vh(n,e,t,i=!1){const r={},s={};Ns(s,no,1),n.propsDefaults=Object.create(null),Vu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ff(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Js(n.emitsOptions,f))continue;const m=e[f];if(l)if(He(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const g=fn(f);r[g]=aa(l,o,g,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Vu(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!He(e,d)&&((u=tr(d))===d||!He(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=aa(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!He(e,d)&&!0)&&(delete s[d],c=!0)}c&&wn(n,"set","$attrs")}function Vu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(As(l))continue;const c=e[l];let u;r&&He(r,u=fn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Js(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||Qe;for(let u=0;u<s.length;u++){const d=s[u];t[d]=aa(r,l,d,c[d],n,!He(c,d))}}return a}function aa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=He(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:($i(r),i=c[t]=l.call(null,e),oi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===tr(t))&&(i=!0))}return i}function Wu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Oe(n)){const u=d=>{l=!0;const[f,m]=Wu(d,e,!0);xt(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,Hi),Hi;if(Fe(s))for(let u=0;u<s.length;u++){const d=fn(s[u]);pl(d)&&(a[d]=Qe)}else if(s)for(const u in s){const d=fn(u);if(pl(d)){const f=s[u],m=a[d]=Fe(f)||Oe(f)?{type:f}:f;if(m){const g=_l(Boolean,m.type),p=_l(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||He(m,"default"))&&o.push(d)}}}const c=[a,o];return i.set(n,c),c}function pl(n){return n[0]!=="$"}function ml(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function gl(n,e){return ml(n)===ml(e)}function _l(n,e){return Fe(e)?e.findIndex(t=>gl(t,n)):Oe(e)&&gl(e,n)?0:-1}const qu=n=>n[0]==="_"||n==="$stable",ka=n=>Fe(n)?n.map(sn):[sn(n)],yh=(n,e,t)=>{if(e._n)return e;const i=ln((...r)=>ka(e(...r)),t);return i._c=!1,i},ju=(n,e,t)=>{const i=n._ctx;for(const r in n){if(qu(r))continue;const s=n[r];if(Oe(s))e[r]=yh(r,s,i);else if(s!=null){const a=ka(s);e[r]=()=>a}}},Xu=(n,e)=>{const t=ka(e);n.slots.default=()=>t},bh=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),Ns(e,"_",t)):ju(e,n.slots={})}else n.slots={},e&&Xu(n,e);Ns(n.slots,no,1)},Mh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(xt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,ju(e,r)),a=e}else e&&(Xu(n,e),a={default:1});if(s)for(const o in r)!qu(o)&&!(o in a)&&delete r[o]};function $u(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sh=0;function wh(n,e){return function(i,r=null){Oe(i)||(i=Object.assign({},i)),r!=null&&!ct(r)&&(r=null);const s=$u(),a=new Set;let o=!1;const l=s.app={_uid:Sh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:qh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Oe(c.install)?(a.add(c),c.install(l,...u)):Oe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const f=De(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,d),o=!0,l._container=c,c.__vue_app__=l,Va(f.component)||f.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function la(n,e,t,i,r=!1){if(Fe(n)){n.forEach((f,m)=>la(f,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Rs(i)&&!r)return;const s=i.shapeFlag&4?Va(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(lt(c)?(u[c]=null,He(d,c)&&(d[c]=null)):pt(c)&&(c.value=null)),Oe(l))Hn(l,o,12,[a,u]);else{const f=lt(l),m=pt(l);if(f||m){const g=()=>{if(n.f){const p=f?u[l]:l.value;r?Fe(p)&&Ta(p,s):Fe(p)?p.includes(s)||p.push(s):f?(u[l]=[s],He(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=a,He(d,l)&&(d[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,Mt(g,t)):g()}}}const Mt=Kf;function Eh(n){return Th(n)}function Th(n,e){const t=of();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Wt,cloneNode:g,insertStaticContent:p}=n,h=(y,T,U,K=null,J=null,ne=null,se=!1,le=null,de=!!T.dynamicChildren)=>{if(y===T)return;y&&!fr(y,T)&&(K=ce(y),re(y,J,ne,!0),y=null),T.patchFlag===-2&&(de=!1,T.dynamicChildren=null);const{type:x,ref:v,shapeFlag:R}=T;switch(x){case Ha:_(y,T,U,K);break;case ui:S(y,T,U,K);break;case Ps:y==null&&L(T,U,K,se);break;case vt:fe(y,T,U,K,J,ne,se,le,de);break;default:R&1?P(y,T,U,K,J,ne,se,le,de):R&6?z(y,T,U,K,J,ne,se,le,de):(R&64||R&128)&&x.process(y,T,U,K,J,ne,se,le,de,ue)}v!=null&&J&&la(v,y&&y.ref,ne,T||y,!T)},_=(y,T,U,K)=>{if(y==null)i(T.el=o(T.children),U,K);else{const J=T.el=y.el;T.children!==y.children&&c(J,T.children)}},S=(y,T,U,K)=>{y==null?i(T.el=l(T.children||""),U,K):T.el=y.el},L=(y,T,U,K)=>{[y.el,y.anchor]=p(y.children,T,U,K,y.el,y.anchor)},E=({el:y,anchor:T},U,K)=>{let J;for(;y&&y!==T;)J=f(y),i(y,U,K),y=J;i(T,U,K)},w=({el:y,anchor:T})=>{let U;for(;y&&y!==T;)U=f(y),r(y),y=U;r(T)},P=(y,T,U,K,J,ne,se,le,de)=>{se=se||T.type==="svg",y==null?O(T,U,K,J,ne,se,le,de):X(y,T,J,ne,se,le,de)},O=(y,T,U,K,J,ne,se,le)=>{let de,x;const{type:v,props:R,shapeFlag:H,transition:Y,patchFlag:te,dirs:we}=y;if(y.el&&g!==void 0&&te===-1)de=y.el=g(y.el);else{if(de=y.el=a(y.type,ne,R&&R.is,R),H&8?u(de,y.children):H&16&&A(y.children,de,null,K,J,ne&&v!=="foreignObject",se,le),we&&jn(y,null,K,"created"),R){for(const ve in R)ve!=="value"&&!As(ve)&&s(de,ve,null,R[ve],ne,y.children,K,J,oe);"value"in R&&s(de,"value",null,R.value),(x=R.onVnodeBeforeMount)&&tn(x,K,y)}M(de,y,y.scopeId,se,K)}we&&jn(y,null,K,"beforeMount");const N=(!J||J&&!J.pendingBranch)&&Y&&!Y.persisted;N&&Y.beforeEnter(de),i(de,T,U),((x=R&&R.onVnodeMounted)||N||we)&&Mt(()=>{x&&tn(x,K,y),N&&Y.enter(de),we&&jn(y,null,K,"mounted")},J)},M=(y,T,U,K,J)=>{if(U&&m(y,U),K)for(let ne=0;ne<K.length;ne++)m(y,K[ne]);if(J){let ne=J.subTree;if(T===ne){const se=J.vnode;M(y,se,se.scopeId,se.slotScopeIds,J.parent)}}},A=(y,T,U,K,J,ne,se,le,de=0)=>{for(let x=de;x<y.length;x++){const v=y[x]=le?zn(y[x]):sn(y[x]);h(null,v,T,U,K,J,ne,se,le)}},X=(y,T,U,K,J,ne,se)=>{const le=T.el=y.el;let{patchFlag:de,dynamicChildren:x,dirs:v}=T;de|=y.patchFlag&16;const R=y.props||Qe,H=T.props||Qe;let Y;U&&Xn(U,!1),(Y=H.onVnodeBeforeUpdate)&&tn(Y,U,T,y),v&&jn(T,y,U,"beforeUpdate"),U&&Xn(U,!0);const te=J&&T.type!=="foreignObject";if(x?B(y.dynamicChildren,x,le,U,K,te,ne):se||V(y,T,le,null,U,K,te,ne,!1),de>0){if(de&16)pe(le,T,R,H,U,K,J);else if(de&2&&R.class!==H.class&&s(le,"class",null,H.class,J),de&4&&s(le,"style",R.style,H.style,J),de&8){const we=T.dynamicProps;for(let N=0;N<we.length;N++){const ve=we[N],Me=R[ve],Se=H[ve];(Se!==Me||ve==="value")&&s(le,ve,Me,Se,J,y.children,U,K,oe)}}de&1&&y.children!==T.children&&u(le,T.children)}else!se&&x==null&&pe(le,T,R,H,U,K,J);((Y=H.onVnodeUpdated)||v)&&Mt(()=>{Y&&tn(Y,U,T,y),v&&jn(T,y,U,"updated")},K)},B=(y,T,U,K,J,ne,se)=>{for(let le=0;le<T.length;le++){const de=y[le],x=T[le],v=de.el&&(de.type===vt||!fr(de,x)||de.shapeFlag&70)?d(de.el):U;h(de,x,v,null,K,J,ne,se,!0)}},pe=(y,T,U,K,J,ne,se)=>{if(U!==K){for(const le in K){if(As(le))continue;const de=K[le],x=U[le];de!==x&&le!=="value"&&s(y,le,x,de,se,T.children,J,ne,oe)}if(U!==Qe)for(const le in U)!As(le)&&!(le in K)&&s(y,le,U[le],null,se,T.children,J,ne,oe);"value"in K&&s(y,"value",U.value,K.value)}},fe=(y,T,U,K,J,ne,se,le,de)=>{const x=T.el=y?y.el:o(""),v=T.anchor=y?y.anchor:o("");let{patchFlag:R,dynamicChildren:H,slotScopeIds:Y}=T;Y&&(le=le?le.concat(Y):Y),y==null?(i(x,U,K),i(v,U,K),A(T.children,U,v,J,ne,se,le,de)):R>0&&R&64&&H&&y.dynamicChildren?(B(y.dynamicChildren,H,U,J,ne,se,le),(T.key!=null||J&&T===J.subTree)&&Ba(y,T,!0)):V(y,T,U,v,J,ne,se,le,de)},z=(y,T,U,K,J,ne,se,le,de)=>{T.slotScopeIds=le,y==null?T.shapeFlag&512?J.ctx.activate(T,U,K,se,de):Q(T,U,K,J,ne,se,de):G(y,T,de)},Q=(y,T,U,K,J,ne,se)=>{const le=y.component=zh(y,K,J);if(zu(y)&&(le.ctx.renderer=ue),kh(le),le.asyncDep){if(J&&J.registerDep(le,q),!y.el){const de=le.subTree=De(ui);S(null,de,T,U)}return}q(le,y,T,U,J,ne,se)},G=(y,T,U)=>{const K=T.component=y.component;if($f(y,T,U))if(K.asyncDep&&!K.asyncResolved){j(K,T,U);return}else K.next=T,Gf(K.update),K.update();else T.el=y.el,K.vnode=T},q=(y,T,U,K,J,ne,se)=>{const le=()=>{if(y.isMounted){let{next:v,bu:R,u:H,parent:Y,vnode:te}=y,we=v,N;Xn(y,!1),v?(v.el=te.el,j(y,v,se)):v=te,R&&po(R),(N=v.props&&v.props.onVnodeBeforeUpdate)&&tn(N,Y,v,te),Xn(y,!0);const ve=mo(y),Me=y.subTree;y.subTree=ve,h(Me,ve,d(Me.el),ce(Me),y,J,ne),v.el=ve.el,we===null&&Yf(y,ve.el),H&&Mt(H,J),(N=v.props&&v.props.onVnodeUpdated)&&Mt(()=>tn(N,Y,v,te),J)}else{let v;const{el:R,props:H}=T,{bm:Y,m:te,parent:we}=y,N=Rs(T);if(Xn(y,!1),Y&&po(Y),!N&&(v=H&&H.onVnodeBeforeMount)&&tn(v,we,T),Xn(y,!0),R&&xe){const ve=()=>{y.subTree=mo(y),xe(R,y.subTree,y,J,null)};N?T.type.__asyncLoader().then(()=>!y.isUnmounted&&ve()):ve()}else{const ve=y.subTree=mo(y);h(null,ve,U,K,y,J,ne),T.el=ve.el}if(te&&Mt(te,J),!N&&(v=H&&H.onVnodeMounted)){const ve=T;Mt(()=>tn(v,we,ve),J)}(T.shapeFlag&256||we&&Rs(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&Mt(y.a,J),y.isMounted=!0,T=U=K=null}},de=y.effect=new Ra(le,()=>Ru(x),y.scope),x=y.update=()=>de.run();x.id=y.uid,Xn(y,!0),x()},j=(y,T,U)=>{T.component=y;const K=y.vnode.props;y.vnode=T,y.next=null,xh(y,T.props,K,U),Mh(y,T.children,U),nr(),Ks(void 0,y.update),ir()},V=(y,T,U,K,J,ne,se,le,de=!1)=>{const x=y&&y.children,v=y?y.shapeFlag:0,R=T.children,{patchFlag:H,shapeFlag:Y}=T;if(H>0){if(H&128){ae(x,R,U,K,J,ne,se,le,de);return}else if(H&256){Z(x,R,U,K,J,ne,se,le,de);return}}Y&8?(v&16&&oe(x,J,ne),R!==x&&u(U,R)):v&16?Y&16?ae(x,R,U,K,J,ne,se,le,de):oe(x,J,ne,!0):(v&8&&u(U,""),Y&16&&A(R,U,K,J,ne,se,le,de))},Z=(y,T,U,K,J,ne,se,le,de)=>{y=y||Hi,T=T||Hi;const x=y.length,v=T.length,R=Math.min(x,v);let H;for(H=0;H<R;H++){const Y=T[H]=de?zn(T[H]):sn(T[H]);h(y[H],Y,U,null,J,ne,se,le,de)}x>v?oe(y,J,ne,!0,!1,R):A(T,U,K,J,ne,se,le,de,R)},ae=(y,T,U,K,J,ne,se,le,de)=>{let x=0;const v=T.length;let R=y.length-1,H=v-1;for(;x<=R&&x<=H;){const Y=y[x],te=T[x]=de?zn(T[x]):sn(T[x]);if(fr(Y,te))h(Y,te,U,null,J,ne,se,le,de);else break;x++}for(;x<=R&&x<=H;){const Y=y[R],te=T[H]=de?zn(T[H]):sn(T[H]);if(fr(Y,te))h(Y,te,U,null,J,ne,se,le,de);else break;R--,H--}if(x>R){if(x<=H){const Y=H+1,te=Y<v?T[Y].el:K;for(;x<=H;)h(null,T[x]=de?zn(T[x]):sn(T[x]),U,te,J,ne,se,le,de),x++}}else if(x>H)for(;x<=R;)re(y[x],J,ne,!0),x++;else{const Y=x,te=x,we=new Map;for(x=te;x<=H;x++){const Ce=T[x]=de?zn(T[x]):sn(T[x]);Ce.key!=null&&we.set(Ce.key,x)}let N,ve=0;const Me=H-te+1;let Se=!1,C=0;const me=new Array(Me);for(x=0;x<Me;x++)me[x]=0;for(x=Y;x<=R;x++){const Ce=y[x];if(ve>=Me){re(Ce,J,ne,!0);continue}let be;if(Ce.key!=null)be=we.get(Ce.key);else for(N=te;N<=H;N++)if(me[N-te]===0&&fr(Ce,T[N])){be=N;break}be===void 0?re(Ce,J,ne,!0):(me[be-te]=x+1,be>=C?C=be:Se=!0,h(Ce,T[be],U,null,J,ne,se,le,de),ve++)}const ge=Se?Ah(me):Hi;for(N=ge.length-1,x=Me-1;x>=0;x--){const Ce=te+x,be=T[Ce],Re=Ce+1<v?T[Ce+1].el:K;me[x]===0?h(null,be,U,Re,J,ne,se,le,de):Se&&(N<0||x!==ge[N]?ie(be,U,Re,2):N--)}}},ie=(y,T,U,K,J=null)=>{const{el:ne,type:se,transition:le,children:de,shapeFlag:x}=y;if(x&6){ie(y.component.subTree,T,U,K);return}if(x&128){y.suspense.move(T,U,K);return}if(x&64){se.move(y,T,U,ue);return}if(se===vt){i(ne,T,U);for(let R=0;R<de.length;R++)ie(de[R],T,U,K);i(y.anchor,T,U);return}if(se===Ps){E(y,T,U);return}if(K!==2&&x&1&&le)if(K===0)le.beforeEnter(ne),i(ne,T,U),Mt(()=>le.enter(ne),J);else{const{leave:R,delayLeave:H,afterLeave:Y}=le,te=()=>i(ne,T,U),we=()=>{R(ne,()=>{te(),Y&&Y()})};H?H(ne,te,we):we()}else i(ne,T,U)},re=(y,T,U,K=!1,J=!1)=>{const{type:ne,props:se,ref:le,children:de,dynamicChildren:x,shapeFlag:v,patchFlag:R,dirs:H}=y;if(le!=null&&la(le,null,U,y,!0),v&256){T.ctx.deactivate(y);return}const Y=v&1&&H,te=!Rs(y);let we;if(te&&(we=se&&se.onVnodeBeforeUnmount)&&tn(we,T,y),v&6)D(y.component,U,K);else{if(v&128){y.suspense.unmount(U,K);return}Y&&jn(y,null,T,"beforeUnmount"),v&64?y.type.remove(y,T,U,J,ue,K):x&&(ne!==vt||R>0&&R&64)?oe(x,T,U,!1,!0):(ne===vt&&R&384||!J&&v&16)&&oe(de,T,U),K&&Ae(y)}(te&&(we=se&&se.onVnodeUnmounted)||Y)&&Mt(()=>{we&&tn(we,T,y),Y&&jn(y,null,T,"unmounted")},U)},Ae=y=>{const{type:T,el:U,anchor:K,transition:J}=y;if(T===vt){F(U,K);return}if(T===Ps){w(y);return}const ne=()=>{r(U),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(y.shapeFlag&1&&J&&!J.persisted){const{leave:se,delayLeave:le}=J,de=()=>se(U,ne);le?le(y.el,ne,de):de()}else ne()},F=(y,T)=>{let U;for(;y!==T;)U=f(y),r(y),y=U;r(T)},D=(y,T,U)=>{const{bum:K,scope:J,update:ne,subTree:se,um:le}=y;K&&po(K),J.stop(),ne&&(ne.active=!1,re(se,y,T,U)),le&&Mt(le,T),Mt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},oe=(y,T,U,K=!1,J=!1,ne=0)=>{for(let se=ne;se<y.length;se++)re(y[se],T,U,K,J)},ce=y=>y.shapeFlag&6?ce(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Ee=(y,T,U)=>{y==null?T._vnode&&re(T._vnode,null,null,!0):h(T._vnode||null,y,T,null,null,null,U),Iu(),T._vnode=y},ue={p:h,um:re,m:ie,r:Ae,mt:Q,mc:A,pc:V,pbc:B,n:ce,o:n};let Te,xe;return e&&([Te,xe]=e(ue)),{render:Ee,hydrate:Te,createApp:wh(Ee,Te)}}function Xn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ba(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=zn(r[s]),o.el=a.el),t||Ba(a,o))}}function Ah(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ch=n=>n.__isTeleport,Er=n=>n&&(n.disabled||n.disabled===""),vl=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ca=(n,e)=>{const t=n&&n.to;return lt(t)?e?e(t):null:t},Lh={__isTeleport:!0,process(n,e,t,i,r,s,a,o,l,c){const{mc:u,pc:d,pbc:f,o:{insert:m,querySelector:g,createText:p,createComment:h}}=c,_=Er(e.props);let{shapeFlag:S,children:L,dynamicChildren:E}=e;if(n==null){const w=e.el=p(""),P=e.anchor=p("");m(w,t,i),m(P,t,i);const O=e.target=ca(e.props,g),M=e.targetAnchor=p("");O&&(m(M,O),a=a||vl(O));const A=(X,B)=>{S&16&&u(L,X,B,r,s,a,o,l)};_?A(t,P):O&&A(O,M)}else{e.el=n.el;const w=e.anchor=n.anchor,P=e.target=n.target,O=e.targetAnchor=n.targetAnchor,M=Er(n.props),A=M?t:P,X=M?w:O;if(a=a||vl(P),E?(f(n.dynamicChildren,E,A,r,s,a,o),Ba(n,e,!0)):l||d(n,e,A,X,r,s,a,o,!1),_)M||rs(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const B=e.target=ca(e.props,g);B&&rs(e,B,null,c,0)}else M&&rs(e,P,O,c,1)}},remove(n,e,t,i,{um:r,o:{remove:s}},a){const{shapeFlag:o,children:l,anchor:c,targetAnchor:u,target:d,props:f}=n;if(d&&s(u),(a||!Er(f))&&(s(c),o&16))for(let m=0;m<l.length;m++){const g=l[m];r(g,e,t,!0,!!g.dynamicChildren)}},move:rs,hydrate:Rh};function rs(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(a,e,t),(!d||Er(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(o,e,t)}function Rh(n,e,t,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l}},c){const u=e.target=ca(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Er(e.props))e.anchor=c(a(n),e,o(n),t,i,r,s),e.targetAnchor=d;else{e.anchor=a(n);let f=d;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&a(e.targetAnchor);break}c(d,e,u,t,i,r,s)}}return e.anchor&&a(e.anchor)}const Ph=Lh,vt=Symbol(void 0),Ha=Symbol(void 0),ui=Symbol(void 0),Ps=Symbol(void 0),Tr=[];let Vt=null;function Ze(n=!1){Tr.push(Vt=n?null:[])}function Dh(){Tr.pop(),Vt=Tr[Tr.length-1]||null}let Or=1;function xl(n){Or+=n}function Yu(n){return n.dynamicChildren=Or>0?Vt||Hi:null,Dh(),Or>0&&Vt&&Vt.push(n),n}function et(n,e,t,i,r,s){return Yu(_e(n,e,t,i,r,s,!0))}function Wi(n,e,t,i,r){return Yu(De(n,e,t,i,r,!0))}function ua(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const no="__vInternal",Zu=({key:n})=>n!=null?n:null,Ds=({ref:n,ref_key:e,ref_for:t})=>n!=null?lt(n)||pt(n)||Oe(n)?{i:cn,r:n,k:e,f:!!t}:n:null;function _e(n,e=null,t=null,i=0,r=null,s=n===vt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zu(e),ref:e&&Ds(e),scopeId:Qs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(Ga(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=lt(t)?8:16),Or>0&&!a&&Vt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vt.push(l),l}const De=Ih;function Ih(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===uh)&&(n=ui),ua(n)){const o=Xi(n,e,!0);return t&&Ga(o,t),Or>0&&!s&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(n)]=o:Vt.push(o)),o.patchFlag|=-2,o}if(Wh(n)&&(n=n.__vccOpts),e){e=Fh(e);let{class:o,style:l}=e;o&&!lt(o)&&(e.class=Ws(o)),ct(l)&&(Mu(l)&&!Fe(l)&&(l=xt({},l)),e.style=Gr(l))}const a=lt(n)?1:Zf(n)?128:Ch(n)?64:ct(n)?4:Oe(n)?2:0;return _e(n,e,t,i,r,a,s,!0)}function Fh(n){return n?Mu(n)||no in n?xt({},n):n:null}function Xi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Nh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Zu(o),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Ds(e)):[r,Ds(e)]:Ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor}}function di(n=" ",e=0){return De(Ha,null,n,e)}function io(n,e){const t=De(Ps,null,n);return t.staticCount=e,t}function Un(n="",e=!1){return e?(Ze(),Wi(ui,null,n)):De(ui,null,n)}function sn(n){return n==null||typeof n=="boolean"?De(ui):Fe(n)?De(vt,null,n.slice()):typeof n=="object"?zn(n):De(Ha,null,String(n))}function zn(n){return n.el===null||n.memo?n:Xi(n)}function Ga(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ga(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(no in e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[di(e)]):t=8);n.children=e,n.shapeFlag|=t}function Nh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ws([e.class,i.class]));else if(r==="style")e.style=Gr([e.style,i.style]);else if(qs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function tn(n,e,t,i=null){jt(n,e,7,[t,i])}const Oh=$u();let Uh=0;function zh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Oh,s={uid:Uh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wu(i,r),emitsOptions:Nu(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qf.bind(null,s),n.ce&&n.ce(s),s}let dt=null;const $i=n=>{dt=n,n.scope.on()},oi=()=>{dt&&dt.scope.off(),dt=null};function Ku(n){return n.vnode.shapeFlag&4}let Ur=!1;function kh(n,e=!1){Ur=e;const{props:t,children:i}=n.vnode,r=Ku(n);vh(n,t,r,e),bh(n,i);const s=r?Bh(n,e):void 0;return Ur=!1,s}function Bh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Su(new Proxy(n.ctx,fh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Gh(n):null;$i(n),nr();const s=Hn(i,n,0,[n.props,r]);if(ir(),oi(),lu(s)){if(s.then(oi,oi),e)return s.then(a=>{yl(n,a,e)}).catch(a=>{Zs(a,n,0)});n.asyncDep=s}else yl(n,s,e)}else Ju(n,e)}function yl(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Au(e)),Ju(n,t)}let bl;function Ju(n,e,t){const i=n.type;if(!n.render){if(!e&&bl&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:o},a),l);i.render=bl(r,c)}}n.render=i.render||Wt}$i(n),nr(),hh(n),ir(),oi()}function Hh(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function Gh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Hh(n))},slots:n.slots,emit:n.emit,expose:e}}function Va(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Au(Su(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ks)return ks[t](n)}}))}function Vh(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function Wh(n){return Oe(n)&&"__vccOpts"in n}const Et=(n,e)=>kf(n,e,Ur);function Qu(n,e,t){const i=arguments.length;return i===2?ct(e)&&!Fe(e)?ua(e)?De(n,null,[e]):De(n,e):De(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ua(t)&&(t=[t]),De(n,e,t))}const qh="3.2.37",jh="http://www.w3.org/2000/svg",ei=typeof document<"u"?document:null,Ml=ei&&ei.createElement("template"),Xh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ei.createElementNS(jh,n):ei.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ml.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ml.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function $h(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Yh(n,e,t){const i=n.style,r=lt(t);if(t&&!r){for(const s in t)da(i,s,t[s]);if(e&&!lt(e))for(const s in e)t[s]==null&&da(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Sl=/\s*!important$/;function da(n,e,t){if(Fe(t))t.forEach(i=>da(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zh(n,e);Sl.test(t)?n.setProperty(tr(i),t.replace(Sl,""),"important"):n[i]=t}}const wl=["Webkit","Moz","ms"],go={};function Zh(n,e){const t=go[e];if(t)return t;let i=fn(e);if(i!=="filter"&&i in n)return go[e]=i;i=$s(i);for(let r=0;r<wl.length;r++){const s=wl[r]+i;if(s in n)return go[e]=s}return e}const El="http://www.w3.org/1999/xlink";function Kh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(El,e.slice(6,e.length)):n.setAttributeNS(El,e,t);else{const s=$d(e);t==null||s&&!su(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Jh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=su(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[ed,Qh]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let fa=0;const ep=Promise.resolve(),tp=()=>{fa=0},np=()=>fa||(ep.then(tp),fa=ed());function ip(n,e,t,i){n.addEventListener(e,t,i)}function rp(n,e,t,i){n.removeEventListener(e,t,i)}function sp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=op(e);if(i){const c=s[e]=ap(i,r);ip(n,o,c,l)}else a&&(rp(n,o,a,l),s[e]=void 0)}}const Tl=/(?:Once|Passive|Capture)$/;function op(n){let e;if(Tl.test(n)){e={};let t;for(;t=n.match(Tl);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[tr(n.slice(2)),e]}function ap(n,e){const t=i=>{const r=i.timeStamp||ed();(Qh||r>=t.attached-1)&&jt(lp(i,t.value),e,5,[i])};return t.value=n,t.attached=np(),t}function lp(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Al=/^on[a-z]/,cp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?$h(n,i,r):e==="style"?Yh(n,t,i):qs(e)?Ea(e)||sp(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):up(n,e,i,r))?Jh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kh(n,e,i,r))};function up(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Al.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Al.test(e)&&lt(t)?!1:e in n}const dp=["ctrl","shift","alt","meta"],fp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>dp.some(t=>n[`${t}Key`]&&!e.includes(t))},hp=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=fp[e[r]];if(s&&s(t,e))return}return n(t,...i)},pp=xt({patchProp:cp},Xh);let Cl;function mp(){return Cl||(Cl=Eh(pp))}const gp=(...n)=>{const e=mp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=_p(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function _p(n){return lt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ui=typeof window<"u";function vp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function _o(n,e){const t={};for(const i in e){const r=e[i];t[i]=$t(r)?r.map(n):n(r)}return t}const Ar=()=>{},$t=Array.isArray,xp=/\/$/,yp=n=>n.replace(xp,"");function vo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=wp(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function bp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ll(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Mp(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Yi(e.matched[i],t.matched[r])&&td(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Yi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function td(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Sp(n[t],e[t]))return!1;return!0}function Sp(n,e){return $t(n)?Rl(n,e):$t(e)?Rl(e,n):n===e}function Rl(n,e){return $t(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function wp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var zr;(function(n){n.pop="pop",n.push="push"})(zr||(zr={}));var Cr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Cr||(Cr={}));function Ep(n){if(!n)if(Ui){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),yp(n)}const Tp=/^[^#]+#/;function Ap(n,e){return n.replace(Tp,"#")+e}function Cp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function Lp(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Cp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pl(n,e){return(history.state?history.state.position-e:-1)+n}const ha=new Map;function Rp(n,e){ha.set(n,e)}function Pp(n){const e=ha.get(n);return ha.delete(n),e}let Dp=()=>location.protocol+"//"+location.host;function nd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Ll(l,"")}return Ll(t,n)+i+r}function Ip(n,e,t,i){let r=[],s=[],a=null;const o=({state:f})=>{const m=nd(n,location),g=t.value,p=e.value;let h=0;if(f){if(t.value=m,e.value=f,a&&a===g){a=null;return}h=p?f.position-p.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:h,type:zr.pop,direction:h?h>0?Cr.forward:Cr.back:Cr.unknown})})};function l(){a=t.value}function c(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(Je({},f.state,{scroll:ro()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Dl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ro():null}}function Fp(n){const{history:e,location:t}=window,i={value:nd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:Dp()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](f)}}function a(l,c){const u=Je({},e.state,Dl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:ro()});s(u.current,u,!0);const d=Je({},Dl(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Np(n){n=Ep(n);const e=Fp(n),t=Ip(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:Ap.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Op(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Np(n)}function Up(n){return typeof n=="string"||n&&typeof n=="object"}function id(n){return typeof n=="string"||typeof n=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rd=Symbol("");var Il;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Il||(Il={}));function Zi(n,e){return Je(new Error,{type:n,[rd]:!0},e)}function pn(n,e){return n instanceof Error&&rd in n&&(e==null||!!(n.type&e))}const Fl="[^/]+?",zp={sensitive:!1,strict:!1,start:!0,end:!0},kp=/[.+*?^${}()[\]/\\]/g;function Bp(n,e){const t=Je({},zp,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(t.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(kp,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:p,optional:h,regexp:_}=f;s.push({name:g,repeatable:p,optional:h});const S=_||Fl;if(S!==Fl){m+=10;try{new RegExp(`(${S})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+E.message)}}let L=p?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(L=h&&c.length<2?`(?:/${L})`:"/"+L),h&&(L+="?"),r+=L,m+=20,h&&(m+=-8),p&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=s[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:h}=m,_=g in c?c[g]:"";if($t(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=$t(_)?_.join("/"):_;if(!S)if(h)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Hp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Hp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Nl(i))return 1;if(Nl(r))return-1}return r.length-i.length}function Nl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Vp={type:0,value:""},Wp=/[a-zA-Z0-9_]/;function qp(n){if(!n)return[[]];if(n==="/")return[[Vp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function d(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Wp.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),a(),r}function jp(n,e,t){const i=Bp(qp(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Xp(n,e){const t=[],i=new Map;e=Ul({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const m=!f,g=Yp(u);g.aliasOf=f&&f.record;const p=Ul(e,u),h=[g];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of L)h.push(Je({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let _,S;for(const L of h){const{path:E}=L;if(d&&E[0]!=="/"){const w=d.record.path,P=w[w.length-1]==="/"?"":"/";L.path=d.record.path+(E&&P+E)}if(_=jp(L,d,p),f?f.alias.push(_):(S=S||_,S!==_&&S.alias.push(_),m&&u.name&&!Ol(_)&&a(u.name)),g.children){const w=g.children;for(let P=0;P<w.length;P++)s(w[P],_,f&&f.children[P])}f=f||_,l(_)}return S?()=>{a(S)}:Ar}function a(u){if(id(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let d=0;for(;d<t.length&&Gp(u,t[d])>=0&&(u.record.path!==t[d].record.path||!sd(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!Ol(u)&&i.set(u.record.name,u)}function c(u,d){let f,m={},g,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Zi(1,{location:u});p=f.record.name,m=Je($p(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,f=t.find(S=>S.re.test(g)),f&&(m=f.parse(g),p=f.record.name);else{if(f=d.name?i.get(d.name):t.find(S=>S.re.test(d.path)),!f)throw Zi(1,{location:u,currentLocation:d});p=f.record.name,m=Je({},d.params,u.params),g=f.stringify(m)}const h=[];let _=f;for(;_;)h.unshift(_.record),_=_.parent;return{name:p,path:g,params:m,matched:h,meta:Kp(h)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function $p(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Yp(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Zp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Zp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Ol(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Kp(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Ul(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function sd(n,e){return e.children.some(t=>t===n||sd(n,t))}const od=/#/g,Jp=/&/g,Qp=/\//g,em=/=/g,tm=/\?/g,ad=/\+/g,nm=/%5B/g,im=/%5D/g,ld=/%5E/g,rm=/%60/g,cd=/%7B/g,sm=/%7C/g,ud=/%7D/g,om=/%20/g;function Wa(n){return encodeURI(""+n).replace(sm,"|").replace(nm,"[").replace(im,"]")}function am(n){return Wa(n).replace(cd,"{").replace(ud,"}").replace(ld,"^")}function pa(n){return Wa(n).replace(ad,"%2B").replace(om,"+").replace(od,"%23").replace(Jp,"%26").replace(rm,"`").replace(cd,"{").replace(ud,"}").replace(ld,"^")}function lm(n){return pa(n).replace(em,"%3D")}function cm(n){return Wa(n).replace(od,"%23").replace(tm,"%3F")}function um(n){return n==null?"":cm(n).replace(Qp,"%2F")}function Hs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function dm(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ad," "),a=s.indexOf("="),o=Hs(a<0?s:s.slice(0,a)),l=a<0?null:Hs(s.slice(a+1));if(o in e){let c=e[o];$t(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function zl(n){let e="";for(let t in n){const i=n[t];if(t=lm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}($t(i)?i.map(s=>s&&pa(s)):[i&&pa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function fm(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=$t(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const hm=Symbol(""),kl=Symbol(""),qa=Symbol(""),dd=Symbol(""),ma=Symbol("");function hr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function kn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=d=>{d===!1?o(Zi(4,{from:t,to:e})):d instanceof Error?o(d):Up(d)?o(Zi(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>o(d))})}function xo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(pm(o)){const c=(o.__vccOpts||o)[e];c&&r.push(kn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=vp(c)?c.default:c;s.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&kn(f,t,i,s,a)()}))}}return r}function pm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Bl(n){const e=Gn(qa),t=Gn(dd),i=Et(()=>e.resolve(qt(n.to))),r=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Yi.bind(null,u));if(f>-1)return f;const m=Hl(l[c-2]);return c>1&&Hl(u)===m&&d[d.length-1].path!==m?d.findIndex(Yi.bind(null,l[c-2])):f}),s=Et(()=>r.value>-1&&vm(t.params,i.value.params)),a=Et(()=>r.value>-1&&r.value===t.matched.length-1&&td(t.params,i.value.params));function o(l={}){return _m(l)?e[qt(n.replace)?"replace":"push"](qt(n.to)).catch(Ar):Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const mm=Zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bl,setup(n,{slots:e}){const t=Vr(Bl(n)),{options:i}=Gn(qa),r=Et(()=>({[Gl(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Gl(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),gm=mm;function _m(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vm(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!$t(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Hl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Gl=(n,e,t)=>n!=null?n:e!=null?e:t,xm=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(ma),r=Et(()=>n.route||i.value),s=Gn(kl,0),a=Et(()=>{let c=qt(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=Et(()=>r.value.matched[a.value]);Cs(kl,Et(()=>a.value+1)),Cs(hm,o),Cs(ma,r);const l=xr();return Ls(()=>[l.value,o.value,n.name],([c,u,d],[f,m,g])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Yi(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=o.value,f=d&&d.components[u];if(!f)return Vl(t.default,{Component:f,route:c});const m=d.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,h=Qu(f,Je({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Vl(t.default,{Component:h,route:c})||h}}});function Vl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ym=xm;function bm(n){const e=Xp(n.routes,n),t=n.parseQuery||dm,i=n.stringifyQuery||zl,r=n.history,s=hr(),a=hr(),o=hr(),l=Nf(Cn);let c=Cn;Ui&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_o.bind(null,F=>""+F),d=_o.bind(null,um),f=_o.bind(null,Hs);function m(F,D){let oe,ce;return id(F)?(oe=e.getRecordMatcher(F),ce=D):ce=F,e.addRoute(ce,oe)}function g(F){const D=e.getRecordMatcher(F);D&&e.removeRoute(D)}function p(){return e.getRoutes().map(F=>F.record)}function h(F){return!!e.getRecordMatcher(F)}function _(F,D){if(D=Je({},D||l.value),typeof F=="string"){const xe=vo(t,F,D.path),y=e.resolve({path:xe.path},D),T=r.createHref(xe.fullPath);return Je(xe,y,{params:f(y.params),hash:Hs(xe.hash),redirectedFrom:void 0,href:T})}let oe;if("path"in F)oe=Je({},F,{path:vo(t,F.path,D.path).path});else{const xe=Je({},F.params);for(const y in xe)xe[y]==null&&delete xe[y];oe=Je({},F,{params:d(F.params)}),D.params=d(D.params)}const ce=e.resolve(oe,D),Ee=F.hash||"";ce.params=u(f(ce.params));const ue=bp(i,Je({},F,{hash:am(Ee),path:ce.path})),Te=r.createHref(ue);return Je({fullPath:ue,hash:Ee,query:i===zl?fm(F.query):F.query||{}},ce,{redirectedFrom:void 0,href:Te})}function S(F){return typeof F=="string"?vo(t,F,l.value.path):Je({},F)}function L(F,D){if(c!==F)return Zi(8,{from:D,to:F})}function E(F){return O(F)}function w(F){return E(Je(S(F),{replace:!0}))}function P(F){const D=F.matched[F.matched.length-1];if(D&&D.redirect){const{redirect:oe}=D;let ce=typeof oe=="function"?oe(F):oe;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=S(ce):{path:ce},ce.params={}),Je({query:F.query,hash:F.hash,params:"path"in ce?{}:F.params},ce)}}function O(F,D){const oe=c=_(F),ce=l.value,Ee=F.state,ue=F.force,Te=F.replace===!0,xe=P(oe);if(xe)return O(Je(S(xe),{state:Ee,force:ue,replace:Te}),D||oe);const y=oe;y.redirectedFrom=D;let T;return!ue&&Mp(i,ce,oe)&&(T=Zi(16,{to:y,from:ce}),Z(ce,ce,!0,!1)),(T?Promise.resolve(T):A(y,ce)).catch(U=>pn(U)?pn(U,2)?U:V(U):q(U,y,ce)).then(U=>{if(U){if(pn(U,2))return O(Je({replace:Te},S(U.to),{state:Ee,force:ue}),D||y)}else U=B(y,ce,!0,Te,Ee);return X(y,ce,U),U})}function M(F,D){const oe=L(F,D);return oe?Promise.reject(oe):Promise.resolve()}function A(F,D){let oe;const[ce,Ee,ue]=Mm(F,D);oe=xo(ce.reverse(),"beforeRouteLeave",F,D);for(const xe of ce)xe.leaveGuards.forEach(y=>{oe.push(kn(y,F,D))});const Te=M.bind(null,F,D);return oe.push(Te),yi(oe).then(()=>{oe=[];for(const xe of s.list())oe.push(kn(xe,F,D));return oe.push(Te),yi(oe)}).then(()=>{oe=xo(Ee,"beforeRouteUpdate",F,D);for(const xe of Ee)xe.updateGuards.forEach(y=>{oe.push(kn(y,F,D))});return oe.push(Te),yi(oe)}).then(()=>{oe=[];for(const xe of F.matched)if(xe.beforeEnter&&!D.matched.includes(xe))if($t(xe.beforeEnter))for(const y of xe.beforeEnter)oe.push(kn(y,F,D));else oe.push(kn(xe.beforeEnter,F,D));return oe.push(Te),yi(oe)}).then(()=>(F.matched.forEach(xe=>xe.enterCallbacks={}),oe=xo(ue,"beforeRouteEnter",F,D),oe.push(Te),yi(oe))).then(()=>{oe=[];for(const xe of a.list())oe.push(kn(xe,F,D));return oe.push(Te),yi(oe)}).catch(xe=>pn(xe,8)?xe:Promise.reject(xe))}function X(F,D,oe){for(const ce of o.list())ce(F,D,oe)}function B(F,D,oe,ce,Ee){const ue=L(F,D);if(ue)return ue;const Te=D===Cn,xe=Ui?history.state:{};oe&&(ce||Te?r.replace(F.fullPath,Je({scroll:Te&&xe&&xe.scroll},Ee)):r.push(F.fullPath,Ee)),l.value=F,Z(F,D,oe,Te),V()}let pe;function fe(){pe||(pe=r.listen((F,D,oe)=>{if(!Ae.listening)return;const ce=_(F),Ee=P(ce);if(Ee){O(Je(Ee,{replace:!0}),ce).catch(Ar);return}c=ce;const ue=l.value;Ui&&Rp(Pl(ue.fullPath,oe.delta),ro()),A(ce,ue).catch(Te=>pn(Te,12)?Te:pn(Te,2)?(O(Te.to,ce).then(xe=>{pn(xe,20)&&!oe.delta&&oe.type===zr.pop&&r.go(-1,!1)}).catch(Ar),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),q(Te,ce,ue))).then(Te=>{Te=Te||B(ce,ue,!1),Te&&(oe.delta&&!pn(Te,8)?r.go(-oe.delta,!1):oe.type===zr.pop&&pn(Te,20)&&r.go(-1,!1)),X(ce,ue,Te)}).catch(Ar)}))}let z=hr(),Q=hr(),G;function q(F,D,oe){V(F);const ce=Q.list();return ce.length?ce.forEach(Ee=>Ee(F,D,oe)):console.error(F),Promise.reject(F)}function j(){return G&&l.value!==Cn?Promise.resolve():new Promise((F,D)=>{z.add([F,D])})}function V(F){return G||(G=!F,fe(),z.list().forEach(([D,oe])=>F?oe(F):D()),z.reset()),F}function Z(F,D,oe,ce){const{scrollBehavior:Ee}=n;if(!Ui||!Ee)return Promise.resolve();const ue=!oe&&Pp(Pl(F.fullPath,0))||(ce||!oe)&&history.state&&history.state.scroll||null;return Lu().then(()=>Ee(F,D,ue)).then(Te=>Te&&Lp(Te)).catch(Te=>q(Te,F,D))}const ae=F=>r.go(F);let ie;const re=new Set,Ae={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:h,getRoutes:p,resolve:_,options:n,push:E,replace:w,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:j,install(F){const D=this;F.component("RouterLink",gm),F.component("RouterView",ym),F.config.globalProperties.$router=D,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),Ui&&!ie&&l.value===Cn&&(ie=!0,E(r.location).catch(Ee=>{}));const oe={};for(const Ee in Cn)oe[Ee]=Et(()=>l.value[Ee]);F.provide(qa,D),F.provide(dd,Vr(oe)),F.provide(ma,l);const ce=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(c=Cn,pe&&pe(),pe=null,l.value=Cn,ie=!1,G=!1),ce()}}};return Ae}function yi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Mm(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Yi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Yi(c,l))||r.push(l))}return[t,i,r]}const rr=n=>(Wr("data-v-bbf72c04"),n=n(),qr(),n),Sm={id:"site-header",class:"navbar"},wm=rr(()=>_e("div",{class:"name"},"Chris Lokhorst",-1)),Em=rr(()=>_e("div",{class:"toggle-button"},[_e("span",{class:"bar"}),_e("span",{class:"bar"}),_e("span",{class:"bar"})],-1)),Tm={class:"buttons"},Am=rr(()=>_e("li",null,"Home",-1)),Cm=rr(()=>_e("li",null,"About",-1)),Lm=rr(()=>_e("li",null,"Projects",-1)),Rm=rr(()=>_e("li",null,"Contact",-1)),Pm=Zt({__name:"NavigationBar",setup(n){let e=!1;return to(()=>{const t=document.getElementsByClassName("toggle-button")[0],i=document.getElementsByClassName("buttons")[0];t.addEventListener("click",()=>{i.classList.toggle("active"),e=!e});let r=window.scrollY;const s=document.getElementById("site-header");s&&window.addEventListener("scroll",()=>{e||(window.scrollY>r?s==null||s.classList.add("hide"):s==null||s.classList.remove("hide"),r=window.scrollY)})}),(t,i)=>{const r=za("router-link");return Ze(),et("nav",Sm,[wm,De(r,{to:""},{default:ln(()=>[Em]),_:1}),_e("div",Tm,[De(r,{to:"/"},{default:ln(()=>[Am]),_:1}),De(r,{to:"/about"},{default:ln(()=>[Cm]),_:1}),De(r,{to:"/projects"},{default:ln(()=>[Lm]),_:1}),De(r,{to:"/contact"},{default:ln(()=>[Rm]),_:1})])])}}});const Ot=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Dm=Ot(Pm,[["__scopeId","data-v-bbf72c04"]]);const Im={},Fm=n=>(Wr("data-v-fd688128"),n=n(),qr(),n),Nm={id:"footer"},Om={class:"max-width"},Um={class:"content"},zm=io('<div class="contact" data-v-fd688128><div class="name" data-v-fd688128>Chris Lokhorst</div><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-fd688128><img class="icon" src="https://img.icons8.com/ios/100/FFFFFF/linkedin-circled--v1.png" data-v-fd688128></a><a href="https://github.com/Chrisp-byte?tab=repositories" target="_blank" data-v-fd688128><img class="icon" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" data-v-fd688128></a><div class="contact-info" data-v-fd688128><div data-v-fd688128><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" class="link" data-v-fd688128>chris.lokhorst@kpnmail.nl</a></div></div></div>',1),km={class:"pages"},Bm=Fm(()=>_e("div",{class:"seperator"},null,-1)),Hm=di("Home"),Gm=di("About"),Vm=di("Projects"),Wm=di("Contact");function qm(n,e){const t=za("router-link");return Ze(),et("footer",Nm,[_e("div",Om,[_e("div",Um,[zm,_e("div",km,[Bm,_e("ul",null,[_e("li",null,[De(t,{to:"/",class:"link"},{default:ln(()=>[Hm]),_:1})]),_e("li",null,[De(t,{to:"/about",class:"link"},{default:ln(()=>[Gm]),_:1})]),_e("li",null,[De(t,{to:"/projects",class:"link"},{default:ln(()=>[Vm]),_:1})]),_e("li",null,[De(t,{to:"/contact",class:"link"},{default:ln(()=>[Wm]),_:1})])])])])])])}const jm=Ot(Im,[["render",qm],["__scopeId","data-v-fd688128"]]),Xm={class:"page-container"},$m={class:"content-wrap"},Ym={id:"home-section"},Zm=Zt({__name:"App",setup(n){return(e,t)=>{const i=za("router-view");return Ze(),et("div",Xm,[_e("div",$m,[_e("header",null,[De(Dm)]),_e("main",Ym,[De(i)])]),De(jm)])}}});const Km=Ot(Zm,[["__scopeId","data-v-f835a831"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="142",Jm=0,Wl=1,Qm=2,fd=1,eg=2,br=3,kr=0,Xt=1,fi=2,tg=1,Vn=0,qi=1,ql=2,jl=3,Xl=4,ng=5,zi=100,ig=101,rg=102,$l=103,Yl=104,sg=200,og=201,ag=202,lg=203,hd=204,pd=205,cg=206,ug=207,dg=208,fg=209,hg=210,pg=0,mg=1,gg=2,ga=3,_g=4,vg=5,xg=6,yg=7,md=0,bg=1,Mg=2,Sn=0,Sg=1,wg=2,Eg=3,Tg=4,Ag=5,gd=300,Ki=301,Ji=302,_a=303,va=304,so=306,xa=1e3,Gt=1001,ya=1002,St=1003,Zl=1004,Kl=1005,It=1006,Cg=1007,oo=1008,hi=1009,Lg=1010,Rg=1011,_d=1012,Pg=1013,ni=1014,ii=1015,Br=1016,Dg=1017,Ig=1018,ji=1020,Fg=1021,Ng=1022,un=1023,Og=1024,Ug=1025,ai=1026,Qi=1027,zg=1028,kg=1029,Bg=1030,Hg=1031,Gg=1033,yo=33776,bo=33777,Mo=33778,So=33779,Jl=35840,Ql=35841,ec=35842,tc=35843,Vg=36196,nc=37492,ic=37496,rc=37808,sc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,dc=37815,fc=37816,hc=37817,pc=37818,mc=37819,gc=37820,_c=37821,vc=36492,pi=3e3,nt=3001,Wg=3200,qg=3201,vd=0,jg=1,yn="srgb",ri="srgb-linear",wo=7680,Xg=519,xc=35044,yc="300 es",ba=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const Lr=Math.PI/180,Hr=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Xa(n,e){return(n%e+e)%e}function $g(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Yg(n,e,t){return n!==e?(t-n)/(e-n):0}function Rr(n,e,t){return(1-t)*n+t*e}function Zg(n,e,t,i){return Rr(n,e,1-Math.exp(-t*i))}function Kg(n,e=1){return e-Math.abs(Xa(n,e*2)-e)}function Jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function e_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function t_(n,e){return n+Math.random()*(e-n)}function n_(n){return n*(.5-Math.random())}function i_(n){n!==void 0&&(bc=n);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r_(n){return n*Lr}function s_(n){return n*Hr}function Ma(n){return(n&n-1)===0&&n!==0}function o_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function l_(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function c_(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var on=Object.freeze({__proto__:null,DEG2RAD:Lr,RAD2DEG:Hr,generateUUID:or,clamp:wt,euclideanModulo:Xa,mapLinear:$g,inverseLerp:Yg,lerp:Rr,damp:Zg,pingpong:Kg,smoothstep:Jg,smootherstep:Qg,randInt:e_,randFloat:t_,randFloatSpread:n_,seededRandom:i_,degToRad:r_,radToDeg:s_,isPowerOfTwo:Ma,ceilPowerOfTwo:o_,floorPowerOfTwo:Gs,setQuaternionFromProperEuler:a_,normalize:c_,denormalize:l_});class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],p=r[0],h=r[3],_=r[6],S=r[1],L=r[4],E=r[7],w=r[2],P=r[5],O=r[8];return s[0]=a*p+o*S+l*w,s[3]=a*h+o*L+l*P,s[6]=a*_+o*E+l*O,s[1]=c*p+u*S+d*w,s[4]=c*h+u*L+d*P,s[7]=c*_+u*E+d*O,s[2]=f*p+m*S+g*w,s[5]=f*h+m*L+g*P,s[8]=f*_+m*E+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function xd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Eo={[yn]:{[ri]:li},[ri]:{[yn]:Is}},Ut={legacyMode:!0,get workingColorSpace(){return ri},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Eo[e]&&Eo[e][t]!==void 0){const i=Eo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},zt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function os(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ri){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ri){if(e=Xa(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=yn){const i=yd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ut.fromWorkingColorSpace(os(this,st),e),wt(st.r*255,0,255)<<16^wt(st.g*255,0,255)<<8^wt(st.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ri){Ut.fromWorkingColorSpace(os(this,st),t);const i=st.r,r=st.g,s=st.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ri){return Ut.fromWorkingColorSpace(os(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=yn){return Ut.fromWorkingColorSpace(os(this,st),e),e!==yn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=i,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(ss);const i=Rr(zt.h,ss.h,t),r=Rr(zt.s,ss.s,t),s=Rr(zt.l,ss.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ke.NAMES=yd;let bi;class bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Vs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Md{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u_=0;class Yt extends sr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Gt,r=Gt,s=It,a=oo,o=un,l=hi,c=1,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=or(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=gd;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],p=l[2],h=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,E=(m+1)/2,w=(_+1)/2,P=(u+f)/4,O=(d+p)/4,M=(g+h)/4;return L>E&&L>w?L<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(L),r=P/i,s=O/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=M/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=O/s,r=M/s),this.set(i,r,s,t),this}let S=Math.sqrt((h-g)*(h-g)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(d-p)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends sr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:It,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sd extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d_ extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==f||c!==m||u!==g){let h=1-o;const _=l*f+c*m+u*g+d*p,S=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const w=Math.sqrt(L),P=Math.atan2(w,_*S);h=Math.sin(h*P)/w,o=Math.sin(o*P)/w}const E=o*S;if(l=l*h+f*E,c=c*h+m*E,u=u*h+g*E,d=d*h+p*E,h===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,f=-s*t-a*i-o*r;return this.x=c*l+f*-s+u*-o-d*-a,this.y=u*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new I,Mc=new jr;class Xr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)$n.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox),Lo.applyMatrix4(e.matrixWorld),this.union(Lo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),as.subVectors(this.max,pr),Mi.subVectors(e.a,pr),Si.subVectors(e.b,pr),wi.subVectors(e.c,pr),Ln.subVectors(Si,Mi),Rn.subVectors(wi,Si),Yn.subVectors(Mi,wi);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!Ro(t,Mi,Si,wi,as)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Mi,Si,wi,as))?!1:(ls.crossVectors(Ln,Rn),t=[ls.x,ls.y,ls.z],Ro(t,Mi,Si,wi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,Lo=new Xr,Mi=new I,Si=new I,wi=new I,Ln=new I,Rn=new I,Yn=new I,pr=new I,as=new I,ls=new I,Zn=new I;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const f_=new Xr,Sc=new I,cs=new I,Po=new I;class $a{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Po.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?cs.set(0,0,1).multiplyScalar(e.radius):cs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sc.copy(e.center).add(cs)),this.expandByPoint(Sc.copy(e.center).sub(cs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new I,Do=new I,us=new I,Pn=new I,Io=new I,ds=new I,Fo=new I;class h_{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.direction).multiplyScalar(t).add(this.origin),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=Pn.dot(this.direction),l=-Pn.dot(us),c=Pn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const p=1/u;d*=p,f*=p,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(us).multiplyScalar(f).add(Do),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){Io.subVectors(t,e),ds.subVectors(i,e),Fo.crossVectors(Io,ds);let a=this.direction.dot(Fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(ds.crossVectors(Pn,ds));if(l<0)return null;const c=o*this.direction.dot(Io.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(Fo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c,u,d,f,m,g,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,p=c*d;t[0]=f+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,p=c*d;t[0]=f-p*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-p*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+p,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,i){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Dn.crossVectors(i,At),Dn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Dn.crossVectors(i,At)),Dn.normalize(),fs.crossVectors(At,Dn),r[0]=Dn.x,r[4]=fs.x,r[8]=At.x,r[1]=Dn.y,r[5]=fs.y,r[9]=At.y,r[2]=Dn.z,r[6]=fs.z,r[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],p=i[6],h=i[10],_=i[14],S=i[3],L=i[7],E=i[11],w=i[15],P=r[0],O=r[4],M=r[8],A=r[12],X=r[1],B=r[5],pe=r[9],fe=r[13],z=r[2],Q=r[6],G=r[10],q=r[14],j=r[3],V=r[7],Z=r[11],ae=r[15];return s[0]=a*P+o*X+l*z+c*j,s[4]=a*O+o*B+l*Q+c*V,s[8]=a*M+o*pe+l*G+c*Z,s[12]=a*A+o*fe+l*q+c*ae,s[1]=u*P+d*X+f*z+m*j,s[5]=u*O+d*B+f*Q+m*V,s[9]=u*M+d*pe+f*G+m*Z,s[13]=u*A+d*fe+f*q+m*ae,s[2]=g*P+p*X+h*z+_*j,s[6]=g*O+p*B+h*Q+_*V,s[10]=g*M+p*pe+h*G+_*Z,s[14]=g*A+p*fe+h*q+_*ae,s[3]=S*P+L*X+E*z+w*j,s[7]=S*O+L*B+E*Q+w*V,s[11]=S*M+L*pe+E*G+w*Z,s[15]=S*A+L*fe+E*q+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],p=e[7],h=e[11],_=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+p*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+h*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],p=e[13],h=e[14],_=e[15],S=d*h*c-p*f*c+p*l*m-o*h*m-d*l*_+o*f*_,L=g*f*c-u*h*c-g*l*m+a*h*m+u*l*_-a*f*_,E=u*p*c-g*d*c+g*o*m-a*p*m-u*o*_+a*d*_,w=g*d*l-u*p*l-g*o*f+a*p*f+u*o*h-a*d*h,P=t*S+i*L+r*E+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=S*O,e[1]=(p*f*s-d*h*s-p*r*m+i*h*m+d*r*_-i*f*_)*O,e[2]=(o*h*s-p*l*s+p*r*c-i*h*c-o*r*_+i*l*_)*O,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*O,e[4]=L*O,e[5]=(u*h*s-g*f*s+g*r*m-t*h*m-u*r*_+t*f*_)*O,e[6]=(g*l*s-a*h*s-g*r*c+t*h*c+a*r*_-t*l*_)*O,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*O,e[8]=E*O,e[9]=(g*d*s-u*p*s-g*i*m+t*p*m+u*i*_-t*d*_)*O,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*O,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*O,e[12]=w*O,e[13]=(u*p*r-g*d*r+g*i*f-t*p*f-u*i*h+t*d*h)*O,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*h-t*o*h)*O,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,g=s*d,p=a*u,h=a*d,_=o*d,S=l*c,L=l*u,E=l*d,w=i.x,P=i.y,O=i.z;return r[0]=(1-(p+_))*w,r[1]=(m+E)*w,r[2]=(g-L)*w,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(f+_))*P,r[6]=(h+S)*P,r[7]=0,r[8]=(g+L)*O,r[9]=(h-S)*O,r[10]=(1-(f+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),o=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,d=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=d,kt.elements[9]*=d,kt.elements[10]*=d,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),d=(t+e)*l,f=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ei=new I,kt=new at,p_=new I(0,0,0),m_=new I(1,1,1),Dn=new I,fs=new I,At=new I,wc=new at,Ec=new jr;class $r{constructor(e=0,t=0,i=0,r=$r.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$r.DefaultOrder="XYZ";$r.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Tc=new I,Ti=new jr,_n=new at,hs=new I,mr=new I,__=new I,v_=new jr,Ac=new I(1,0,0),Cc=new I(0,1,0),Lc=new I(0,0,1),x_={type:"added"},Rc={type:"removed"};class Tt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new I,t=new $r,i=new jr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ft}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hs.copy(e):hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(mr,hs,this.up):_n.lookAt(hs,mr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(_n),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new I(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const Bt=new I,vn=new I,No=new I,xn=new I,Ai=new I,Ci=new I,Pc=new I,Oo=new I,Uo=new I,zo=new I;class Mn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bt.subVectors(r,t),vn.subVectors(i,t),No.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(vn),l=Bt.dot(No),c=vn.dot(vn),u=vn.dot(No),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,xn),l.set(0,0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(e,t,i,r){return Bt.subVectors(i,t),vn.subVectors(e,t),Bt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Bt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Mn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,i),Ci.subVectors(s,i),Oo.subVectors(e,i);const l=Ai.dot(Oo),c=Ci.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,r);const u=Ai.dot(Uo),d=Ci.dot(Uo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ai,a);zo.subVectors(e,s);const m=Ai.dot(zo),g=Ci.dot(zo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ci,o);const h=u*g-m*d;if(h<=0&&d-u>=0&&m-g>=0)return Pc.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Pc,o);const _=1/(h+p+f);return a=p*_,o=f*_,t.copy(i).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let y_=0;class Yr extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=or(),this.name="",this.type="Material",this.blending=qi,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===tg;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ed extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new I,ps=new We;class dn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Ke),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new We),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new I),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new ot),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Td extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ad extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ci extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b_=0;const Dt=new at,ko=new Tt,Li=new I,Ct=new Xr,gr=new Xr,ut=new I;class gi extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?Ad:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Ct.min,gr.min),Ct.expandByPoint(ut),ut.addVectors(Ct.max,gr.max),Ct.expandByPoint(ut)):(Ct.expandByPoint(gr.min),Ct.expandByPoint(gr.max))}Ct.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),ut.add(Li)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let X=0;X<o;X++)c[X]=new I,u[X]=new I;const d=new I,f=new I,m=new I,g=new We,p=new We,h=new We,_=new I,S=new I;function L(X,B,pe){d.fromArray(r,X*3),f.fromArray(r,B*3),m.fromArray(r,pe*3),g.fromArray(a,X*2),p.fromArray(a,B*2),h.fromArray(a,pe*2),f.sub(d),m.sub(d),p.sub(g),h.sub(g);const fe=1/(p.x*h.y-h.x*p.y);!isFinite(fe)||(_.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(fe),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(fe),c[X].add(_),c[B].add(_),c[pe].add(_),u[X].add(S),u[B].add(S),u[pe].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let X=0,B=E.length;X<B;++X){const pe=E[X],fe=pe.start,z=pe.count;for(let Q=fe,G=fe+z;Q<G;Q+=3)L(i[Q+0],i[Q+1],i[Q+2])}const w=new I,P=new I,O=new I,M=new I;function A(X){O.fromArray(s,X*3),M.copy(O);const B=c[X];w.copy(B),w.sub(O.multiplyScalar(O.dot(B))).normalize(),P.crossVectors(M,B);const fe=P.dot(u[X])<0?-1:1;l[X*4]=w.x,l[X*4+1]=w.y,l[X*4+2]=w.z,l[X*4+3]=fe}for(let X=0,B=E.length;X<B;++X){const pe=E[X],fe=pe.start,z=pe.count;for(let Q=fe,G=fe+z;Q<G;Q+=3)A(i[Q+0]),A(i[Q+1]),A(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,h),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const a=i[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let d=0,f=c;d<u;d++,f++)a[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new dn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new at,Ri=new h_,Bo=new $a,In=new I,Fn=new I,Nn=new I,Ho=new I,Go=new I,Vo=new I,ms=new I,gs=new I,_s=new I,vs=new We,xs=new We,ys=new We,Wo=new I,bs=new I;class Nt extends Tt{constructor(e=new gi,t=new Ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),e.ray.intersectsSphere(Bo)===!1)||(Dc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Dc),i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const _=m[p],S=r[_.materialIndex],L=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,P=E;w<P;w+=3){const O=o.getX(w),M=o.getX(w+1),A=o.getX(w+2);a=Ms(this,S,e,Ri,l,c,u,d,f,O,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),h=Math.min(o.count,g.start+g.count);for(let _=p,S=h;_<S;_+=3){const L=o.getX(_),E=o.getX(_+1),w=o.getX(_+2);a=Ms(this,r,e,Ri,l,c,u,d,f,L,E,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const _=m[p],S=r[_.materialIndex],L=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,P=E;w<P;w+=3){const O=w,M=w+1,A=w+2;a=Ms(this,S,e,Ri,l,c,u,d,f,O,M,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let _=p,S=h;_<S;_+=3){const L=_,E=_+1,w=_+2;a=Ms(this,r,e,Ri,l,c,u,d,f,L,E,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function M_(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==fi,o),l===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:n}}function Ms(n,e,t,i,r,s,a,o,l,c,u,d){In.fromBufferAttribute(r,c),Fn.fromBufferAttribute(r,u),Nn.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){ms.set(0,0,0),gs.set(0,0,0),_s.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const h=f[g],_=s[g];h!==0&&(Ho.fromBufferAttribute(_,c),Go.fromBufferAttribute(_,u),Vo.fromBufferAttribute(_,d),a?(ms.addScaledVector(Ho,h),gs.addScaledVector(Go,h),_s.addScaledVector(Vo,h)):(ms.addScaledVector(Ho.sub(In),h),gs.addScaledVector(Go.sub(Fn),h),_s.addScaledVector(Vo.sub(Nn),h)))}In.add(ms),Fn.add(gs),Nn.add(_s)}n.isSkinnedMesh&&(n.boneTransform(c,In),n.boneTransform(u,Fn),n.boneTransform(d,Nn));const m=M_(n,e,t,i,In,Fn,Nn,Wo);if(m){o&&(vs.fromBufferAttribute(o,c),xs.fromBufferAttribute(o,u),ys.fromBufferAttribute(o,d),m.uv=Mn.getUV(Wo,In,Fn,Nn,vs,xs,ys,new We)),l&&(vs.fromBufferAttribute(l,c),xs.fromBufferAttribute(l,u),ys.fromBufferAttribute(l,d),m.uv2=Mn.getUV(Wo,In,Fn,Nn,vs,xs,ys,new We));const g={a:c,b:u,c:d,normal:new I,materialIndex:0};Mn.getNormal(In,Fn,Nn,g.normal),m.face=g}return m}class ar extends gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(d,2));function g(p,h,_,S,L,E,w,P,O,M,A){const X=E/O,B=w/M,pe=E/2,fe=w/2,z=P/2,Q=O+1,G=M+1;let q=0,j=0;const V=new I;for(let Z=0;Z<G;Z++){const ae=Z*B-fe;for(let ie=0;ie<Q;ie++){const re=ie*X-pe;V[p]=re*S,V[h]=ae*L,V[_]=z,c.push(V.x,V.y,V.z),V[p]=0,V[h]=0,V[_]=P>0?1:-1,u.push(V.x,V.y,V.z),d.push(ie/O),d.push(1-Z/M),q+=1}}for(let Z=0;Z<M;Z++)for(let ae=0;ae<O;ae++){const ie=f+ae+Q*Z,re=f+ae+Q*(Z+1),Ae=f+(ae+1)+Q*(Z+1),F=f+(ae+1)+Q*Z;l.push(ie,re,F),l.push(re,Ae,F),j+=6}o.addGroup(m,j,A),m+=j,f+=q}}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ht(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}const S_={clone:er,merge:ht};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=w_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=90,Di=1;class T_ extends Tt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Lt(Pi,Di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new Lt(Pi,Di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new Lt(Pi,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Lt(Pi,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Lt(Pi,Di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Lt(Pi,Di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Ld extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends mi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===oo&&(t.minFilter=It),new T_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const qo=new I,C_=new I,L_=new Ft;class Jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qo.subVectors(i,t).cross(C_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||L_.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new $a,Ss=new I;class Ya{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],m=i[9],g=i[10],p=i[11],h=i[12],_=i[13],S=i[14],L=i[15];return t[0].setComponents(o-r,d-l,p-f,L-h).normalize(),t[1].setComponents(o+r,d+l,p+f,L+h).normalize(),t[2].setComponents(o+s,d+c,p+m,L+_).normalize(),t[3].setComponents(o-s,d-c,p-m,L-_).normalize(),t[4].setComponents(o-a,d-u,p-g,L-S).normalize(),t[5].setComponents(o+a,d+u,p+g,L+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class lr extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],p=[],h=[];for(let _=0;_<u;_++){const S=_*f-a;for(let L=0;L<c;L++){const E=L*d-s;g.push(E,-S,0),p.push(0,0,1),h.push(L/o),h.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const L=S+c*_,E=S+c*(_+1),w=S+1+c*(_+1),P=S+1+c*_;m.push(L,E,P),m.push(E,w,P)}this.setIndex(m),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(p,3)),this.setAttribute("uv",new ci(h,2))}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_="vec3 transformed = vec3( position );",z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,H_=`#ifdef USE_BUMPMAP
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z_=`#define PI 3.141592653589793
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
}`,K_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J_=`vec3 transformedNormal = objectNormal;
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
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_v=`vec3 diffuse = vec3( 1.0 );
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
#endif`,vv=`uniform bool receiveShadow;
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
#endif`,xv=`#if defined( USE_ENVMAP )
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,wv=`PhysicalMaterial material;
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
#endif`,Ev=`struct PhysicalMaterial {
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
}`,Tv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
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
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Wv=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#ifdef USE_SHADOWMAP
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
#endif`,l0=`#ifdef USE_SHADOWMAP
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
#endif`,c0=`#ifdef USE_SHADOWMAP
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
#endif`,u0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,M0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,S0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,w0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,E0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,T0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#include <envmap_common_pars_fragment>
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
}`,D0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,ex=`uniform float size;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:P_,alphamap_pars_fragment:D_,alphatest_fragment:I_,alphatest_pars_fragment:F_,aomap_fragment:N_,aomap_pars_fragment:O_,begin_vertex:U_,beginnormal_vertex:z_,bsdfs:k_,iridescence_fragment:B_,bumpmap_pars_fragment:H_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:q_,color_fragment:j_,color_pars_fragment:X_,color_pars_vertex:$_,color_vertex:Y_,common:Z_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:J_,displacementmap_pars_vertex:Q_,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,encodings_fragment:iv,encodings_pars_fragment:rv,envmap_fragment:sv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:xv,envmap_vertex:cv,fog_vertex:uv,fog_pars_vertex:dv,fog_fragment:fv,fog_pars_fragment:hv,gradientmap_pars_fragment:pv,lightmap_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_vertex:_v,lights_pars_begin:vv,lights_toon_fragment:yv,lights_toon_pars_fragment:bv,lights_phong_fragment:Mv,lights_phong_pars_fragment:Sv,lights_physical_fragment:wv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:Cv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Dv,map_fragment:Iv,map_pars_fragment:Fv,map_particle_fragment:Nv,map_particle_pars_fragment:Ov,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:zv,morphcolor_vertex:kv,morphnormal_vertex:Bv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Gv,normal_fragment_begin:Vv,normal_fragment_maps:Wv,normal_pars_fragment:qv,normal_pars_vertex:jv,normal_vertex:Xv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:Jv,output_fragment:Qv,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:r0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:h0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:b0,uv_pars_vertex:M0,uv_vertex:S0,uv2_pars_fragment:w0,uv2_pars_vertex:E0,uv2_vertex:T0,worldpos_vertex:A0,background_vert:C0,background_frag:L0,cube_vert:R0,cube_frag:P0,depth_vert:D0,depth_frag:I0,distanceRGBA_vert:F0,distanceRGBA_frag:N0,equirect_vert:O0,equirect_frag:U0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:B0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:q0,meshnormal_vert:j0,meshnormal_frag:X0,meshphong_vert:$0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:rx,sprite_frag:sx},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},an={basic:{uniforms:ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ht([ye.points,ye.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ht([ye.common,ye.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ht([ye.sprite,ye.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:ht([ye.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ht([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ht([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:ht([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function ox(n,e,t,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function m(p,h){let _=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=e.get(S));const L=n.xr,E=L.getSession&&L.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?g(a,o):S&&S.isColor&&(g(S,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===so)?(c===void 0&&(c=new Nt(new ar(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:er(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Nt(new lr(2,2),new hn({name:"BackgroundMaterial",uniforms:er(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),o=h,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function ax(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=h(null);let c=l,u=!1;function d(z,Q,G,q,j){let V=!1;if(a){const Z=p(q,G,Q);c!==Z&&(c=Z,m(c.object)),V=_(z,q,G,j),V&&S(z,q,G,j)}else{const Z=Q.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=G.id,c.wireframe=Z,V=!0)}j!==null&&t.update(j,34963),(V||u)&&(u=!1,M(z,Q,G,q),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,Q,G){const q=G.wireframe===!0;let j=o[z.id];j===void 0&&(j={},o[z.id]=j);let V=j[Q.id];V===void 0&&(V={},j[Q.id]=V);let Z=V[q];return Z===void 0&&(Z=h(f()),V[q]=Z),Z}function h(z){const Q=[],G=[],q=[];for(let j=0;j<r;j++)Q[j]=0,G[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:G,attributeDivisors:q,object:z,attributes:{},index:null}}function _(z,Q,G,q){const j=c.attributes,V=Q.attributes;let Z=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const Ae=j[ie];let F=V[ie];if(F===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),Ae===void 0||Ae.attribute!==F||F&&Ae.data!==F.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function S(z,Q,G,q){const j={},V=Q.attributes;let Z=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let Ae=V[ie];Ae===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(Ae=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(Ae=z.instanceColor));const F={};F.attribute=Ae,Ae&&Ae.data&&(F.data=Ae.data),j[ie]=F,Z++}c.attributes=j,c.attributesNum=Z,c.index=q}function L(){const z=c.newAttributes;for(let Q=0,G=z.length;Q<G;Q++)z[Q]=0}function E(z){w(z,0)}function w(z,Q){const G=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;G[z]=1,q[z]===0&&(n.enableVertexAttribArray(z),q[z]=1),j[z]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Q),j[z]=Q)}function P(){const z=c.newAttributes,Q=c.enabledAttributes;for(let G=0,q=Q.length;G<q;G++)Q[G]!==z[G]&&(n.disableVertexAttribArray(G),Q[G]=0)}function O(z,Q,G,q,j,V){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(z,Q,G,j,V):n.vertexAttribPointer(z,Q,G,q,j,V)}function M(z,Q,G,q){if(i.isWebGL2===!1&&(z.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const j=q.attributes,V=G.getAttributes(),Z=Q.defaultAttributeValues;for(const ae in V){const ie=V[ae];if(ie.location>=0){let re=j[ae];if(re===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),re!==void 0){const Ae=re.normalized,F=re.itemSize,D=t.get(re);if(D===void 0)continue;const oe=D.buffer,ce=D.type,Ee=D.bytesPerElement;if(re.isInterleavedBufferAttribute){const ue=re.data,Te=ue.stride,xe=re.offset;if(ue.isInstancedInterleavedBuffer){for(let y=0;y<ie.locationSize;y++)w(ie.location+y,ue.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let y=0;y<ie.locationSize;y++)E(ie.location+y);n.bindBuffer(34962,oe);for(let y=0;y<ie.locationSize;y++)O(ie.location+y,F/ie.locationSize,ce,Ae,Te*Ee,(xe+F/ie.locationSize*y)*Ee)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)w(ie.location+ue,re.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<ie.locationSize;ue++)E(ie.location+ue);n.bindBuffer(34962,oe);for(let ue=0;ue<ie.locationSize;ue++)O(ie.location+ue,F/ie.locationSize,ce,Ae,F*Ee,F/ie.locationSize*ue*Ee)}}else if(Z!==void 0){const Ae=Z[ae];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(ie.location,Ae);break;case 3:n.vertexAttrib3fv(ie.location,Ae);break;case 4:n.vertexAttrib4fv(ie.location,Ae);break;default:n.vertexAttrib1fv(ie.location,Ae)}}}}P()}function A(){pe();for(const z in o){const Q=o[z];for(const G in Q){const q=Q[G];for(const j in q)g(q[j].object),delete q[j];delete Q[G]}delete o[z]}}function X(z){if(o[z.id]===void 0)return;const Q=o[z.id];for(const G in Q){const q=Q[G];for(const j in q)g(q[j].object),delete q[j];delete Q[G]}delete o[z.id]}function B(z){for(const Q in o){const G=o[Q];if(G[z.id]===void 0)continue;const q=G[z.id];for(const j in q)g(q[j].object),delete q[j];delete G[z.id]}}function pe(){fe(),u=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:pe,resetDefaultState:fe,dispose:A,releaseStatesOfGeometry:X,releaseStatesOfProgram:B,initAttributes:L,enableAttribute:E,disableUnusedAttributes:P}}function lx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function cx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),_=n.getParameter(36348),S=n.getParameter(36349),L=f>0,E=a||e.has("OES_texture_float"),w=L&&E,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:L,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:P}}function ux(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Jn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const g=d.length!==0||f||i!==0||r;return r=f,t=u(d,m,0),i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,f,m){const g=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,_=n.get(d);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const S=s?0:i,L=S*4;let E=_.clippingState||null;l.value=E,E=u(g,f,L,m);for(let w=0;w!==L;++w)E[w]=t[w];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,g!==!0||h===null){const _=m+p*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(h===null||h.length<_)&&(h=new Float32Array(_));for(let L=0,E=m;L!==p;++L,E+=4)a.copy(d[L]).applyMatrix4(S,o),a.normal.toArray(h,E),h[E+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function dx(n){let e=new WeakMap;function t(a,o){return o===_a?a.mapping=Ki:o===va&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===_a||o===va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new A_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fx extends Cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Ic=[.125,.215,.35,.446,.526,.582],ti=20,jo=new fx,Fc=new Ke;let Xo=null;const Qn=(1+Math.sqrt(5))/2,Fi=1/Qn,Nc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Qn,Fi),new I(0,Qn,-Fi),new I(Fi,0,Qn),new I(-Fi,0,Qn),new I(Qn,Fi,0),new I(-Qn,Fi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Br,format:un,encoding:pi,depthBuffer:!1},r=Uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(s)),this._blurMaterial=px(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const o=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fc),u.toneMapping=Sn,u.autoClear=!1;const m=new Ed({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Nt(new ar,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Fc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const L=this._cubeSize;ws(r,S*L,_>2?L:0,L,L),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(r-1)%Nc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ti-1),p=s/g,h=isFinite(s)?1+Math.floor(u*p):ti;h>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ti}`);const _=[];let S=0;for(let O=0;O<ti;++O){const M=O/p,A=Math.exp(-M*M/2);_.push(A),O===0?S+=A:O<h&&(S+=2*A)}for(let O=0;O<_.length;O++)_[O]=_[O]/S;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:L}=this;f.dTheta.value=g,f.mipInt.value=L-i;const E=this._sizeLods[r],w=3*E*(r>L-Bi?r-L+Bi:0),P=4*(this._cubeSize-E);ws(t,w,P,3*E,2*E),l.setRenderTarget(t),l.render(d,jo)}}function hx(n){const e=[],t=[],i=[];let r=n;const s=n-Bi+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Bi?l=Ic[a-n+Bi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,p=3,h=2,_=1,S=new Float32Array(p*g*m),L=new Float32Array(h*g*m),E=new Float32Array(_*g*m);for(let P=0;P<m;P++){const O=P%3*2/3-1,M=P>2?0:-1,A=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];S.set(A,p*g*P),L.set(f,h*g*P);const X=[P,P,P,P,P,P];E.set(X,_*g*P)}const w=new gi;w.setAttribute("position",new dn(S,p)),w.setAttribute("uv",new dn(L,h)),w.setAttribute("faceIndex",new dn(E,_)),e.push(w),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uc(n,e,t){const i=new mi(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function px(n,e,t){const i=new Float32Array(ti),r=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function zc(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function kc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function mx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===va,u=l===Ki||l===Ji;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Oc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Oc(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _x(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let L=0,E=S.length;L<E;L+=3){const w=S[L+0],P=S[L+1],O=S[L+2];f.push(w,P,P,O,O,w)}}else{const S=g.array;p=g.version;for(let L=0,E=S.length/3-1;L<E;L+=3){const w=L+0,P=L+1,O=L+2;f.push(w,P,P,O,O,w)}}const h=new(xd(f)?Ad:Td)(f,1);h.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,h)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function vx(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,o,f*l),t.update(m,s,1)}function d(f,m,g){if(g===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function xx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yx(n,e){return n[0]-e[0]}function bx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $o(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Mx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==h){let G=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let X=0;E===!0&&(X=1),w===!0&&(X=2),P===!0&&(X=3);let B=u.attributes.position.count*X,pe=1;B>e.maxTextureSize&&(pe=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const fe=new Float32Array(B*pe*4*h),z=new Sd(fe,B,pe,h);z.type=ii,z.needsUpdate=!0;const Q=X*4;for(let q=0;q<h;q++){const j=O[q],V=M[q],Z=A[q],ae=B*pe*4*q;for(let ie=0;ie<j.count;ie++){const re=ie*Q;E===!0&&(a.fromBufferAttribute(j,ie),j.normalized===!0&&$o(a,j),fe[ae+re+0]=a.x,fe[ae+re+1]=a.y,fe[ae+re+2]=a.z,fe[ae+re+3]=0),w===!0&&(a.fromBufferAttribute(V,ie),V.normalized===!0&&$o(a,V),fe[ae+re+4]=a.x,fe[ae+re+5]=a.y,fe[ae+re+6]=a.z,fe[ae+re+7]=0),P===!0&&(a.fromBufferAttribute(Z,ie),Z.normalized===!0&&$o(a,Z),fe[ae+re+8]=a.x,fe[ae+re+9]=a.y,fe[ae+re+10]=a.z,fe[ae+re+11]=Z.itemSize===4?a.w:1)}}_={count:h,texture:z,size:new We(B,pe)},s.set(u,_),u.addEventListener("dispose",G)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const L=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(n,"morphTargetBaseInfluence",L),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let h=i[u.id];if(h===void 0||h.length!==p){h=[];for(let w=0;w<p;w++)h[w]=[w,0];i[u.id]=h}for(let w=0;w<p;w++){const P=h[w];P[0]=w,P[1]=m[w]}h.sort(bx);for(let w=0;w<8;w++)w<p&&h[w][1]?(o[w][0]=h[w][0],o[w][1]=h[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(yx);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let L=0;for(let w=0;w<8;w++){const P=o[w],O=P[0],M=P[1];O!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+w)!==_[O]&&u.setAttribute("morphTarget"+w,_[O]),S&&u.getAttribute("morphNormal"+w)!==S[O]&&u.setAttribute("morphNormal"+w,S[O]),r[w]=M,L+=M):(_&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),S&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const E=u.morphTargetsRelative?1:1-L;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Sx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pd=new Yt,Dd=new Sd,Id=new d_,Fd=new Ld,Bc=[],Hc=[],Gc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bc[r];if(s===void 0&&(s=new Float32Array(r),Bc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),bt(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),bt(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;Gc.set(i),n.uniformMatrix4fv(this.addr,!1,Gc),bt(t,i)}}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;yt(t,e)||(n.uniform2iv(this.addr,e),bt(t,e))}function Ix(n,e){const t=this.cache;yt(t,e)||(n.uniform3iv(this.addr,e),bt(t,e))}function Fx(n,e){const t=this.cache;yt(t,e)||(n.uniform4iv(this.addr,e),bt(t,e))}function Nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ox(n,e){const t=this.cache;yt(t,e)||(n.uniform2uiv(this.addr,e),bt(t,e))}function Ux(n,e){const t=this.cache;yt(t,e)||(n.uniform3uiv(this.addr,e),bt(t,e))}function zx(n,e){const t=this.cache;yt(t,e)||(n.uniform4uiv(this.addr,e),bt(t,e))}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Pd,r)}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Id,r)}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fd,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dd,r)}function Vx(n){switch(n){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Cx;case 35675:return Lx;case 35676:return Rx;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Fx;case 5125:return Nx;case 36294:return Ox;case 36295:return Ux;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Wx(n,e){n.uniform1fv(this.addr,e)}function qx(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Xx(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function $x(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yx(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zx(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kx(n,e){n.uniform1iv(this.addr,e)}function Jx(n,e){n.uniform2iv(this.addr,e)}function Qx(n,e){n.uniform3iv(this.addr,e)}function ey(n,e){n.uniform4iv(this.addr,e)}function ty(n,e){n.uniform1uiv(this.addr,e)}function ny(n,e){n.uniform2uiv(this.addr,e)}function iy(n,e){n.uniform3uiv(this.addr,e)}function ry(n,e){n.uniform4uiv(this.addr,e)}function sy(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Pd,r[s])}function oy(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Id,r[s])}function ay(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Fd,r[s])}function ly(n,e,t){const i=e.length,r=ao(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Dd,r[s])}function cy(n){switch(n){case 5126:return Wx;case 35664:return qx;case 35665:return jx;case 35666:return Xx;case 35674:return $x;case 35675:return Yx;case 35676:return Zx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}class uy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Vx(t.type)}}class dy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=cy(t.type)}}class fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function qc(n,e){n.seq.push(e),n.map[e.id]=e}function hy(n,e,t){const i=n.name,r=i.length;for(Yo.lastIndex=0;;){const s=Yo.exec(i),a=Yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qc(t,c===void 0?new uy(o,n,e):new dy(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new fy(o),qc(t,d)),t=d}}}class Fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);hy(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let py=0;function my(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function gy(n){switch(n){case pi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Xc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+my(n.getShaderSource(e),a)}else return r}function _y(n,e){const t=gy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vy(n,e){let t;switch(e){case Sg:t="Linear";break;case wg:t="Reinhard";break;case Eg:t="OptimizedCineon";break;case Tg:t="ACESFilmic";break;case Ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xy(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function yy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function by(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Mr(n){return n!==""}function $c(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(n){return n.replace(My,Sy)}function Sy(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}const wy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(Ey,Nd).replace(wy,Ty)}function Ty(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Nd(n,e,t,i)}function Nd(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ay(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function Cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ly(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Ry(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Mg:e="ENVMAP_BLENDING_ADD";break}return e}function Py(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ay(t),c=Cy(t),u=Ly(t),d=Ry(t),f=Py(t),m=t.isWebGL2?"":xy(t),g=yy(s),p=r.createProgram();let h,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(Mr).join(`
`),h.length>0&&(h+=`
`),_=[m,g].filter(Mr).join(`
`),_.length>0&&(_+=`
`)):(h=[Kc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),_=[m,Kc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,_y("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Sa(a),a=$c(a,t),a=Yc(a,t),o=Sa(o),o=$c(o,t),o=Yc(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=S+h+a,E=S+_+o,w=jc(r,35633,L),P=jc(r,35632,E);if(r.attachShader(p,w),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),X=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(P).trim();let pe=!0,fe=!0;if(r.getProgramParameter(p,35714)===!1){pe=!1;const z=Xc(r,w,"vertex"),Q=Xc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+z+`
`+Q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(X===""||B==="")&&(fe=!1);fe&&(this.diagnostics={runnable:pe,programLog:A,vertexShader:{log:X,prefix:h},fragmentShader:{log:B,prefix:_}})}r.deleteShader(w),r.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new Fs(r,p)),O};let M;return this.getAttributes=function(){return M===void 0&&(M=by(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=P,this}let Iy=0;class Fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new Ny(e);t.set(e,i)}return t.get(e)}}class Ny{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Oy(n,e,t,i,r,s,a){const o=new wd,l=new Fy,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,X,B,pe){const fe=B.fog,z=pe.geometry,Q=M.isMeshStandardMaterial?B.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),q=!!G&&G.mapping===so?G.image.height:null,j=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=V!==void 0?V.length:0;let ae=0;z.morphAttributes.position!==void 0&&(ae=1),z.morphAttributes.normal!==void 0&&(ae=2),z.morphAttributes.color!==void 0&&(ae=3);let ie,re,Ae,F;if(j){const Te=an[j];ie=Te.vertexShader,re=Te.fragmentShader}else ie=M.vertexShader,re=M.fragmentShader,l.update(M),Ae=l.getVertexShaderID(M),F=l.getFragmentShaderID(M);const D=n.getRenderTarget(),oe=M.alphaTest>0,ce=M.clearcoat>0,Ee=M.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:M.type,vertexShader:ie,fragmentShader:re,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:D===null?n.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:pi,map:!!M.map,matcap:!!M.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===jg,tangentSpaceNormalMap:M.normalMapType===vd,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===nt,clearcoat:ce,clearcoatMap:ce&&!!M.clearcoatMap,clearcoatRoughnessMap:ce&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!M.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!M.iridescenceMap,iridescenceThicknessMap:Ee&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===qi,alphaMap:!!M.alphaMap,alphaTest:oe,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!z.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!fe,useFog:M.fog===!0,fogExp2:fe&&fe.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:pe.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Sn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fi,flipSided:M.side===Xt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)A.push(X),A.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(_(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),A.fog&&o.enable(33),M.push(o.mask),o.disableAll(),A.useFog&&o.enable(0),A.flatShading&&o.enable(1),A.logarithmicDepthBuffer&&o.enable(2),A.skinning&&o.enable(3),A.morphTargets&&o.enable(4),A.morphNormals&&o.enable(5),A.morphColors&&o.enable(6),A.premultipliedAlpha&&o.enable(7),A.shadowMapEnabled&&o.enable(8),A.physicallyCorrectLights&&o.enable(9),A.doubleSided&&o.enable(10),A.flipSided&&o.enable(11),A.useDepthPacking&&o.enable(12),A.dithering&&o.enable(13),A.specularIntensityMap&&o.enable(14),A.specularColorMap&&o.enable(15),A.transmission&&o.enable(16),A.transmissionMap&&o.enable(17),A.thicknessMap&&o.enable(18),A.sheen&&o.enable(19),A.sheenColorMap&&o.enable(20),A.sheenRoughnessMap&&o.enable(21),A.decodeVideoTexture&&o.enable(22),A.opaque&&o.enable(23),M.push(o.mask)}function L(M){const A=g[M.type];let X;if(A){const B=an[A];X=S_.clone(B.uniforms)}else X=M.uniforms;return X}function E(M,A){let X;for(let B=0,pe=c.length;B<pe;B++){const fe=c[B];if(fe.cacheKey===A){X=fe,++X.usedTimes;break}}return X===void 0&&(X=new Dy(n,A,M,s),c.push(X)),X}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:L,acquireProgram:E,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:O}}function Uy(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,p,h){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:h},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=h),e++,_}function o(d,f,m,g,p,h){const _=a(d,f,m,g,p,h);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(d,f,m,g,p,h){const _=a(d,f,m,g,p,h);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(d,f){t.length>1&&t.sort(d||zy),i.length>1&&i.sort(f||Jc),r.length>1&&r.sort(f||Jc)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ky(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Qc,n.set(i,[s])):r>=n.get(i).length?(s=new Qc,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function By(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Hy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gy=0;function Vy(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Wy(n,e){const t=new By,i=Hy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new at,o=new at;function l(u,d){let f=0,m=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,h=0,_=0,S=0,L=0,E=0,w=0,P=0;u.sort(Vy);const O=d!==!0?Math.PI:1;for(let A=0,X=u.length;A<X;A++){const B=u[A],pe=B.color,fe=B.intensity,z=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=pe.r*fe*O,m+=pe.g*fe*O,g+=pe.b*fe*O;else if(B.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],fe);else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*O),B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[p]=j,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=B.shadow.matrix,E++}r.directional[p]=G,p++}else if(B.isSpotLight){const G=t.get(B);if(G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(pe).multiplyScalar(fe*O),G.distance=z,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[_]=j,r.spotShadowMap[_]=Q,r.spotShadowMatrix[_]=B.shadow.matrix,P++}r.spot[_]=G,_++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(pe).multiplyScalar(fe),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=G,S++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*O),G.distance=B.distance,G.decay=B.decay,B.castShadow){const q=B.shadow,j=i.get(B);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[h]=j,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=B.shadow.matrix,w++}r.point[h]=G,h++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(fe*O),G.groundColor.copy(B.groundColor).multiplyScalar(fe*O),r.hemi[L]=G,L++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==p||M.pointLength!==h||M.spotLength!==_||M.rectAreaLength!==S||M.hemiLength!==L||M.numDirectionalShadows!==E||M.numPointShadows!==w||M.numSpotShadows!==P)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=S,r.point.length=h,r.hemi.length=L,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=P,M.directionalLength=p,M.pointLength=h,M.spotLength=_,M.rectAreaLength=S,M.hemiLength=L,M.numDirectionalShadows=E,M.numPointShadows=w,M.numSpotShadows=P,r.version=Gy++)}function c(u,d){let f=0,m=0,g=0,p=0,h=0;const _=d.matrixWorldInverse;for(let S=0,L=u.length;S<L;S++){const E=u[S];if(E.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),f++}else if(E.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(_),h++}}}return{setup:l,setupView:c,state:r}}function eu(n,e){const t=new Wy(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qy(n,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new eu(n,e),t.set(s,[o])):a>=t.get(s).length?(o=new eu(n,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class jy extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`;function Zy(n,e,t){let i=new Ya;const r=new We,s=new We,a=new ot,o=new jy({depthPacking:qg}),l=new Xy,c={},u=t.maxTextureSize,d={0:Xt,1:kr,2:fi},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:$y,fragmentShader:Yy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Nt(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd,this.render=function(E,w,P){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const O=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Vn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let B=0,pe=E.length;B<pe;B++){const fe=E[B],z=fe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Q=z.getFrameExtents();if(r.multiply(Q),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,z.mapSize.y=s.y)),z.map===null){const q=this.type!==br?{minFilter:St,magFilter:St}:{};z.map=new mi(r.x,r.y,q),z.map.texture.name=fe.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const G=z.getViewportCount();for(let q=0;q<G;q++){const j=z.getViewport(q);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),X.viewport(a),z.updateMatrices(fe,q),i=z.getFrustum(),L(w,P,z.camera,fe,this.type)}z.isPointLightShadow!==!0&&this.type===br&&_(z,P),z.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(O,M,A)};function _(E,w){const P=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,P,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,P,m,p,null)}function S(E,w,P,O,M,A){let X=null;const B=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0?X=B:X=P.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const pe=X.uuid,fe=w.uuid;let z=c[pe];z===void 0&&(z={},c[pe]=z);let Q=z[fe];Q===void 0&&(Q=X.clone(),z[fe]=Q),X=Q}return X.visible=w.visible,X.wireframe=w.wireframe,A===br?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:d[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaTest,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,P.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(P.matrixWorld),X.nearDistance=O,X.farDistance=M),X}function L(E,w,P,O,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===br)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const B=e.update(E),pe=E.material;if(Array.isArray(pe)){const fe=B.groups;for(let z=0,Q=fe.length;z<Q;z++){const G=fe[z],q=pe[G.materialIndex];if(q&&q.visible){const j=S(E,q,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,j,E,G)}}}else if(pe.visible){const fe=S(E,pe,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,fe,E,null)}}const X=E.children;for(let B=0,pe=X.length;B<pe;B++)L(X[B],w,P,O,M)}}function Ky(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const me=new ot;let ge=null;const Ce=new ot(0,0,0,0);return{setMask:function(be){ge!==be&&!C&&(n.colorMask(be,be,be,be),ge=be)},setLocked:function(be){C=be},setClear:function(be,Re,he,Ie,Xe){Xe===!0&&(be*=Ie,Re*=Ie,he*=Ie),me.set(be,Re,he,Ie),Ce.equals(me)===!1&&(n.clearColor(be,Re,he,Ie),Ce.copy(me))},reset:function(){C=!1,ge=null,Ce.set(-1,0,0,0)}}}function s(){let C=!1,me=null,ge=null,Ce=null;return{setTest:function(be){be?F(2929):D(2929)},setMask:function(be){me!==be&&!C&&(n.depthMask(be),me=be)},setFunc:function(be){if(ge!==be){if(be)switch(be){case pg:n.depthFunc(512);break;case mg:n.depthFunc(519);break;case gg:n.depthFunc(513);break;case ga:n.depthFunc(515);break;case _g:n.depthFunc(514);break;case vg:n.depthFunc(518);break;case xg:n.depthFunc(516);break;case yg:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ge=be}},setLocked:function(be){C=be},setClear:function(be){Ce!==be&&(n.clearDepth(be),Ce=be)},reset:function(){C=!1,me=null,ge=null,Ce=null}}}function a(){let C=!1,me=null,ge=null,Ce=null,be=null,Re=null,he=null,Ie=null,Xe=null;return{setTest:function($e){C||($e?F(2960):D(2960))},setMask:function($e){me!==$e&&!C&&(n.stencilMask($e),me=$e)},setFunc:function($e,mt,Kt){(ge!==$e||Ce!==mt||be!==Kt)&&(n.stencilFunc($e,mt,Kt),ge=$e,Ce=mt,be=Kt)},setOp:function($e,mt,Kt){(Re!==$e||he!==mt||Ie!==Kt)&&(n.stencilOp($e,mt,Kt),Re=$e,he=mt,Ie=Kt)},setLocked:function($e){C=$e},setClear:function($e){Xe!==$e&&(n.clearStencil($e),Xe=$e)},reset:function(){C=!1,me=null,ge=null,Ce=null,be=null,Re=null,he=null,Ie=null,Xe=null}}}const o=new r,l=new s,c=new a;let u={},d={},f=new WeakMap,m=[],g=null,p=!1,h=null,_=null,S=null,L=null,E=null,w=null,P=null,O=!1,M=null,A=null,X=null,B=null,pe=null;const fe=n.getParameter(35661);let z=!1,Q=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Q>=2);let q=null,j={};const V=n.getParameter(3088),Z=n.getParameter(2978),ae=new ot().fromArray(V),ie=new ot().fromArray(Z);function re(C,me,ge){const Ce=new Uint8Array(4),be=n.createTexture();n.bindTexture(C,be),n.texParameteri(C,10241,9728),n.texParameteri(C,10240,9728);for(let Re=0;Re<ge;Re++)n.texImage2D(me+Re,0,6408,1,1,0,6408,5121,Ce);return be}const Ae={};Ae[3553]=re(3553,3553,1),Ae[34067]=re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(2929),l.setFunc(ga),T(!1),U(Wl),F(2884),xe(Vn);function F(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function D(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function oe(C,me){return d[C]!==me?(n.bindFramebuffer(C,me),d[C]=me,i&&(C===36009&&(d[36160]=me),C===36160&&(d[36009]=me)),!0):!1}function ce(C,me){let ge=m,Ce=!1;if(C)if(ge=f.get(me),ge===void 0&&(ge=[],f.set(me,ge)),C.isWebGLMultipleRenderTargets){const be=C.texture;if(ge.length!==be.length||ge[0]!==36064){for(let Re=0,he=be.length;Re<he;Re++)ge[Re]=36064+Re;ge.length=be.length,Ce=!0}}else ge[0]!==36064&&(ge[0]=36064,Ce=!0);else ge[0]!==1029&&(ge[0]=1029,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ee(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const ue={[zi]:32774,[ig]:32778,[rg]:32779};if(i)ue[$l]=32775,ue[Yl]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ue[$l]=C.MIN_EXT,ue[Yl]=C.MAX_EXT)}const Te={[sg]:0,[og]:1,[ag]:768,[hd]:770,[hg]:776,[dg]:774,[cg]:772,[lg]:769,[pd]:771,[fg]:775,[ug]:773};function xe(C,me,ge,Ce,be,Re,he,Ie){if(C===Vn){p===!0&&(D(3042),p=!1);return}if(p===!1&&(F(3042),p=!0),C!==ng){if(C!==h||Ie!==O){if((_!==zi||E!==zi)&&(n.blendEquation(32774),_=zi,E=zi),Ie)switch(C){case qi:n.blendFuncSeparate(1,771,1,771);break;case ql:n.blendFunc(1,1);break;case jl:n.blendFuncSeparate(0,769,0,1);break;case Xl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case qi:n.blendFuncSeparate(770,771,1,771);break;case ql:n.blendFunc(770,1);break;case jl:n.blendFuncSeparate(0,769,0,1);break;case Xl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,L=null,w=null,P=null,h=C,O=Ie}return}be=be||me,Re=Re||ge,he=he||Ce,(me!==_||be!==E)&&(n.blendEquationSeparate(ue[me],ue[be]),_=me,E=be),(ge!==S||Ce!==L||Re!==w||he!==P)&&(n.blendFuncSeparate(Te[ge],Te[Ce],Te[Re],Te[he]),S=ge,L=Ce,w=Re,P=he),h=C,O=null}function y(C,me){C.side===fi?D(2884):F(2884);let ge=C.side===Xt;me&&(ge=!ge),T(ge),C.blending===qi&&C.transparent===!1?xe(Vn):xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Ce=C.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),J(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?F(32926):D(32926)}function T(C){M!==C&&(C?n.frontFace(2304):n.frontFace(2305),M=C)}function U(C){C!==Jm?(F(2884),C!==A&&(C===Wl?n.cullFace(1029):C===Qm?n.cullFace(1028):n.cullFace(1032))):D(2884),A=C}function K(C){C!==X&&(z&&n.lineWidth(C),X=C)}function J(C,me,ge){C?(F(32823),(B!==me||pe!==ge)&&(n.polygonOffset(me,ge),B=me,pe=ge)):D(32823)}function ne(C){C?F(3089):D(3089)}function se(C){C===void 0&&(C=33984+fe-1),q!==C&&(n.activeTexture(C),q=C)}function le(C,me){q===null&&se();let ge=j[q];ge===void 0&&(ge={type:void 0,texture:void 0},j[q]=ge),(ge.type!==C||ge.texture!==me)&&(n.bindTexture(C,me||Ae[C]),ge.type=C,ge.texture=me)}function de(){const C=j[q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function v(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(C){ae.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function Me(C){ie.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Se(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,j={},d={},f=new WeakMap,m=[],g=null,p=!1,h=null,_=null,S=null,L=null,E=null,w=null,P=null,O=!1,M=null,A=null,X=null,B=null,pe=null,ae.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:F,disable:D,bindFramebuffer:oe,drawBuffers:ce,useProgram:Ee,setBlending:xe,setMaterial:y,setFlipSided:T,setCullFace:U,setLineWidth:K,setPolygonOffset:J,setScissorTest:ne,activeTexture:se,bindTexture:le,unbindTexture:de,compressedTexImage2D:x,texImage2D:we,texImage3D:N,texStorage2D:Y,texStorage3D:te,texSubImage2D:v,texSubImage3D:R,compressedTexSubImage2D:H,scissor:ve,viewport:Me,reset:Se}}function Jy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,v){return _?new OffscreenCanvas(x,v):Vs("canvas")}function L(x,v,R,H){let Y=1;if((x.width>H||x.height>H)&&(Y=H/Math.max(x.width,x.height)),Y<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const te=v?Gs:Math.floor,we=te(Y*x.width),N=te(Y*x.height);p===void 0&&(p=S(we,N));const ve=R?S(we,N):p;return ve.width=we,ve.height=N,ve.getContext("2d").drawImage(x,0,0,we,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+we+"x"+N+")."),ve}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function E(x){return Ma(x.width)&&Ma(x.height)}function w(x){return o?!1:x.wrapS!==Gt||x.wrapT!==Gt||x.minFilter!==St&&x.minFilter!==It}function P(x,v){return x.generateMipmaps&&v&&x.minFilter!==St&&x.minFilter!==It}function O(x){n.generateMipmap(x)}function M(x,v,R,H,Y=!1){if(o===!1)return v;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let te=v;return v===6403&&(R===5126&&(te=33326),R===5131&&(te=33325),R===5121&&(te=33321)),v===33319&&(R===5126&&(te=33328),R===5131&&(te=33327),R===5121&&(te=33323)),v===6408&&(R===5126&&(te=34836),R===5131&&(te=34842),R===5121&&(te=H===nt&&Y===!1?35907:32856),R===32819&&(te=32854),R===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function A(x,v,R){return P(x,R)===!0||x.isFramebufferTexture&&x.minFilter!==St&&x.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function X(x){return x===St||x===Zl||x===Kl?9728:9729}function B(x){const v=x.target;v.removeEventListener("dispose",B),fe(v),v.isVideoTexture&&g.delete(v)}function pe(x){const v=x.target;v.removeEventListener("dispose",pe),Q(v)}function fe(x){const v=i.get(x);if(v.__webglInit===void 0)return;const R=x.source,H=h.get(R);if(H){const Y=H[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&z(x),Object.keys(H).length===0&&h.delete(R)}i.remove(x)}function z(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const R=x.source,H=h.get(R);delete H[v.__cacheKey],a.memory.textures--}function Q(x){const v=x.texture,R=i.get(x),H=i.get(v);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(R.__webglFramebuffer[Y]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let Y=0,te=v.length;Y<te;Y++){const we=i.get(v[Y]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(v[Y])}i.remove(v),i.remove(x)}let G=0;function q(){G=0}function j(){const x=G;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),G+=1,x}function V(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.encoding),v.join()}function Z(x,v){const R=i.get(x);if(x.isVideoTexture&&le(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(R,x,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,R.__webglTexture)}function ae(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ce(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(35866,R.__webglTexture)}function ie(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ce(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(32879,R.__webglTexture)}function re(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){Ee(R,x,v);return}t.activeTexture(33984+v),t.bindTexture(34067,R.__webglTexture)}const Ae={[xa]:10497,[Gt]:33071,[ya]:33648},F={[St]:9728,[Zl]:9984,[Kl]:9986,[It]:9729,[Cg]:9985,[oo]:9987};function D(x,v,R){if(R?(n.texParameteri(x,10242,Ae[v.wrapS]),n.texParameteri(x,10243,Ae[v.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,Ae[v.wrapR]),n.texParameteri(x,10240,F[v.magFilter]),n.texParameteri(x,10241,F[v.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,X(v.magFilter)),n.texParameteri(x,10241,X(v.minFilter)),v.minFilter!==St&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(v.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Br&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function oe(x,v){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",B));const H=v.source;let Y=h.get(H);Y===void 0&&(Y={},h.set(H,Y));const te=V(v);if(te!==x.__cacheKey){Y[te]===void 0&&(Y[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),Y[te].usedTimes++;const we=Y[x.__cacheKey];we!==void 0&&(Y[x.__cacheKey].usedTimes--,we.usedTimes===0&&z(v)),x.__cacheKey=te,x.__webglTexture=Y[te].texture}return R}function ce(x,v,R){let H=3553;v.isDataArrayTexture&&(H=35866),v.isData3DTexture&&(H=32879);const Y=oe(x,v),te=v.source;if(t.activeTexture(33984+R),t.bindTexture(H,x.__webglTexture),te.version!==te.__currentVersion||Y===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const we=w(v)&&E(v.image)===!1;let N=L(v.image,we,!1,u);N=de(v,N);const ve=E(N)||o,Me=s.convert(v.format,v.encoding);let Se=s.convert(v.type),C=M(v.internalFormat,Me,Se,v.encoding,v.isVideoTexture);D(H,v,ve);let me;const ge=v.mipmaps,Ce=o&&v.isVideoTexture!==!0,be=te.__currentVersion===void 0||Y===!0,Re=A(v,N,ve);if(v.isDepthTexture)C=6402,o?v.type===ii?C=36012:v.type===ni?C=33190:v.type===ji?C=35056:C=33189:v.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ai&&C===6402&&v.type!==_d&&v.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ni,Se=s.convert(v.type)),v.format===Qi&&C===6402&&(C=34041,v.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ji,Se=s.convert(v.type))),be&&(Ce?t.texStorage2D(3553,1,C,N.width,N.height):t.texImage2D(3553,0,C,N.width,N.height,0,Me,Se,null));else if(v.isDataTexture)if(ge.length>0&&ve){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let he=0,Ie=ge.length;he<Ie;he++)me=ge[he],Ce?t.texSubImage2D(3553,he,0,0,me.width,me.height,Me,Se,me.data):t.texImage2D(3553,he,C,me.width,me.height,0,Me,Se,me.data);v.generateMipmaps=!1}else Ce?(be&&t.texStorage2D(3553,Re,C,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,Me,Se,N.data)):t.texImage2D(3553,0,C,N.width,N.height,0,Me,Se,N.data);else if(v.isCompressedTexture){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let he=0,Ie=ge.length;he<Ie;he++)me=ge[he],v.format!==un?Me!==null?Ce?t.compressedTexSubImage2D(3553,he,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(3553,he,C,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,he,0,0,me.width,me.height,Me,Se,me.data):t.texImage2D(3553,he,C,me.width,me.height,0,Me,Se,me.data)}else if(v.isDataArrayTexture)Ce?(be&&t.texStorage3D(35866,Re,C,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,Me,Se,N.data)):t.texImage3D(35866,0,C,N.width,N.height,N.depth,0,Me,Se,N.data);else if(v.isData3DTexture)Ce?(be&&t.texStorage3D(32879,Re,C,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,Me,Se,N.data)):t.texImage3D(32879,0,C,N.width,N.height,N.depth,0,Me,Se,N.data);else if(v.isFramebufferTexture){if(be)if(Ce)t.texStorage2D(3553,Re,C,N.width,N.height);else{let he=N.width,Ie=N.height;for(let Xe=0;Xe<Re;Xe++)t.texImage2D(3553,Xe,C,he,Ie,0,Me,Se,null),he>>=1,Ie>>=1}}else if(ge.length>0&&ve){Ce&&be&&t.texStorage2D(3553,Re,C,ge[0].width,ge[0].height);for(let he=0,Ie=ge.length;he<Ie;he++)me=ge[he],Ce?t.texSubImage2D(3553,he,0,0,Me,Se,me):t.texImage2D(3553,he,C,Me,Se,me);v.generateMipmaps=!1}else Ce?(be&&t.texStorage2D(3553,Re,C,N.width,N.height),t.texSubImage2D(3553,0,0,0,Me,Se,N)):t.texImage2D(3553,0,C,Me,Se,N);P(v,ve)&&O(H),te.__currentVersion=te.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Ee(x,v,R){if(v.image.length!==6)return;const H=oe(x,v),Y=v.source;if(t.activeTexture(33984+R),t.bindTexture(34067,x.__webglTexture),Y.version!==Y.__currentVersion||H===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const te=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,N=[];for(let he=0;he<6;he++)!te&&!we?N[he]=L(v.image[he],!1,!0,c):N[he]=we?v.image[he].image:v.image[he],N[he]=de(v,N[he]);const ve=N[0],Me=E(ve)||o,Se=s.convert(v.format,v.encoding),C=s.convert(v.type),me=M(v.internalFormat,Se,C,v.encoding),ge=o&&v.isVideoTexture!==!0,Ce=Y.__currentVersion===void 0||H===!0;let be=A(v,ve,Me);D(34067,v,Me);let Re;if(te){ge&&Ce&&t.texStorage2D(34067,be,me,ve.width,ve.height);for(let he=0;he<6;he++){Re=N[he].mipmaps;for(let Ie=0;Ie<Re.length;Ie++){const Xe=Re[Ie];v.format!==un?Se!==null?ge?t.compressedTexSubImage2D(34069+he,Ie,0,0,Xe.width,Xe.height,Se,Xe.data):t.compressedTexImage2D(34069+he,Ie,me,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(34069+he,Ie,0,0,Xe.width,Xe.height,Se,C,Xe.data):t.texImage2D(34069+he,Ie,me,Xe.width,Xe.height,0,Se,C,Xe.data)}}}else{Re=v.mipmaps,ge&&Ce&&(Re.length>0&&be++,t.texStorage2D(34067,be,me,N[0].width,N[0].height));for(let he=0;he<6;he++)if(we){ge?t.texSubImage2D(34069+he,0,0,0,N[he].width,N[he].height,Se,C,N[he].data):t.texImage2D(34069+he,0,me,N[he].width,N[he].height,0,Se,C,N[he].data);for(let Ie=0;Ie<Re.length;Ie++){const $e=Re[Ie].image[he].image;ge?t.texSubImage2D(34069+he,Ie+1,0,0,$e.width,$e.height,Se,C,$e.data):t.texImage2D(34069+he,Ie+1,me,$e.width,$e.height,0,Se,C,$e.data)}}else{ge?t.texSubImage2D(34069+he,0,0,0,Se,C,N[he]):t.texImage2D(34069+he,0,me,Se,C,N[he]);for(let Ie=0;Ie<Re.length;Ie++){const Xe=Re[Ie];ge?t.texSubImage2D(34069+he,Ie+1,0,0,Se,C,Xe.image[he]):t.texImage2D(34069+he,Ie+1,me,Se,C,Xe.image[he])}}}P(v,Me)&&O(34067),Y.__currentVersion=Y.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ue(x,v,R,H,Y){const te=s.convert(R.format,R.encoding),we=s.convert(R.type),N=M(R.internalFormat,te,we,R.encoding);i.get(v).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,N,v.width,v.height,v.depth,0,te,we,null):t.texImage2D(Y,0,N,v.width,v.height,0,te,we,null)),t.bindFramebuffer(36160,x),se(v)?f.framebufferTexture2DMultisampleEXT(36160,H,Y,i.get(R).__webglTexture,0,ne(v)):n.framebufferTexture2D(36160,H,Y,i.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(x,v,R){if(n.bindRenderbuffer(36161,x),v.depthBuffer&&!v.stencilBuffer){let H=33189;if(R||se(v)){const Y=v.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ii?H=36012:Y.type===ni&&(H=33190));const te=ne(v);se(v)?f.renderbufferStorageMultisampleEXT(36161,te,H,v.width,v.height):n.renderbufferStorageMultisample(36161,te,H,v.width,v.height)}else n.renderbufferStorage(36161,H,v.width,v.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(v.depthBuffer&&v.stencilBuffer){const H=ne(v);R&&se(v)===!1?n.renderbufferStorageMultisample(36161,H,35056,v.width,v.height):se(v)?f.renderbufferStorageMultisampleEXT(36161,H,35056,v.width,v.height):n.renderbufferStorage(36161,34041,v.width,v.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const H=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Y=0;Y<H.length;Y++){const te=H[Y],we=s.convert(te.format,te.encoding),N=s.convert(te.type),ve=M(te.internalFormat,we,N,te.encoding),Me=ne(v);R&&se(v)===!1?n.renderbufferStorageMultisample(36161,Me,ve,v.width,v.height):se(v)?f.renderbufferStorageMultisampleEXT(36161,Me,ve,v.width,v.height):n.renderbufferStorage(36161,ve,v.width,v.height)}}n.bindRenderbuffer(36161,null)}function xe(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const H=i.get(v.depthTexture).__webglTexture,Y=ne(v);if(v.depthTexture.format===ai)se(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):n.framebufferTexture2D(36160,36096,3553,H,0);else if(v.depthTexture.format===Qi)se(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function y(x){const v=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,x)}else if(R){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=n.createRenderbuffer(),Te(v.__webglDepthbuffer[H],x,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Te(v.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function T(x,v,R){const H=i.get(x);v!==void 0&&ue(H.__webglFramebuffer,x,x.texture,36064,3553),R!==void 0&&y(x)}function U(x){const v=x.texture,R=i.get(x),H=i.get(v);x.addEventListener("dispose",pe),x.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,a.memory.textures++);const Y=x.isWebGLCubeRenderTarget===!0,te=x.isWebGLMultipleRenderTargets===!0,we=E(x)||o;if(Y){R.__webglFramebuffer=[];for(let N=0;N<6;N++)R.__webglFramebuffer[N]=n.createFramebuffer()}else{if(R.__webglFramebuffer=n.createFramebuffer(),te)if(r.drawBuffers){const N=x.texture;for(let ve=0,Me=N.length;ve<Me;ve++){const Se=i.get(N[ve]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&se(x)===!1){const N=te?v:[v];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let ve=0;ve<N.length;ve++){const Me=N[ve];R.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer[ve]);const Se=s.convert(Me.format,Me.encoding),C=s.convert(Me.type),me=M(Me.internalFormat,Se,C,Me.encoding),ge=ne(x);n.renderbufferStorageMultisample(36161,ge,me,x.width,x.height),n.framebufferRenderbuffer(36160,36064+ve,36161,R.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(36161,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),D(34067,v,we);for(let N=0;N<6;N++)ue(R.__webglFramebuffer[N],x,v,36064,34069+N);P(v,we)&&O(34067),t.unbindTexture()}else if(te){const N=x.texture;for(let ve=0,Me=N.length;ve<Me;ve++){const Se=N[ve],C=i.get(Se);t.bindTexture(3553,C.__webglTexture),D(3553,Se,we),ue(R.__webglFramebuffer,x,Se,36064+ve,3553),P(Se,we)&&O(3553)}t.unbindTexture()}else{let N=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?N=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,H.__webglTexture),D(N,v,we),ue(R.__webglFramebuffer,x,v,36064,N),P(v,we)&&O(N),t.unbindTexture()}x.depthBuffer&&y(x)}function K(x){const v=E(x)||o,R=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let H=0,Y=R.length;H<Y;H++){const te=R[H];if(P(te,v)){const we=x.isWebGLCubeRenderTarget?34067:3553,N=i.get(te).__webglTexture;t.bindTexture(we,N),O(we),t.unbindTexture()}}}function J(x){if(o&&x.samples>0&&se(x)===!1){const v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],R=x.width,H=x.height;let Y=16384;const te=[],we=x.stencilBuffer?33306:36096,N=i.get(x),ve=x.isWebGLMultipleRenderTargets===!0;if(ve)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){te.push(36064+Me),x.depthBuffer&&te.push(we);const Se=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(Se===!1&&(x.depthBuffer&&(Y|=256),x.stencilBuffer&&(Y|=1024)),ve&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[Me]),Se===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),ve){const C=i.get(v[Me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,C,0)}n.blitFramebuffer(0,0,R,H,0,0,R,H,Y,9728),m&&n.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ve)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,N.__webglColorRenderbuffer[Me]);const Se=i.get(v[Me]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,Se,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function ne(x){return Math.min(d,x.samples)}function se(x){const v=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(x){const v=a.render.frame;g.get(x)!==v&&(g.set(x,v),x.update())}function de(x,v){const R=x.encoding,H=x.format,Y=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===ba||R!==pi&&(R===nt?o===!1?e.has("EXT_sRGB")===!0&&H===un?(x.format=ba,x.minFilter=It,x.generateMipmaps=!1):v=bd.sRGBToLinear(v):(H!==un||Y!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),v}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=ie,this.setTextureCube=re,this.rebindTextures=T,this.setupRenderTarget=U,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=se}function Qy(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===hi)return 5121;if(s===Dg)return 32819;if(s===Ig)return 32820;if(s===Lg)return 5120;if(s===Rg)return 5122;if(s===_d)return 5123;if(s===Pg)return 5124;if(s===ni)return 5125;if(s===ii)return 5126;if(s===Br)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fg)return 6406;if(s===un)return 6408;if(s===Og)return 6409;if(s===Ug)return 6410;if(s===ai)return 6402;if(s===Qi)return 34041;if(s===zg)return 6403;if(s===Ng)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kg)return 36244;if(s===Bg)return 33319;if(s===Hg)return 33320;if(s===Gg)return 36249;if(s===yo||s===bo||s===Mo||s===So)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jl||s===Ql||s===ec||s===tc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nc||s===ic)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nc)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ic)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===dc||s===fc||s===hc||s===pc||s===mc||s===gc||s===_c)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ac)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_c)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===vc)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ji?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class eb extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Es;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const _=c.joints[p.jointName];h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class nb extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ai&&(i=ni),i===void 0&&u===Qi&&(i=ji),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class ib extends sr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,d=null,f=null,m=null;const g=t.getContextAttributes();let p=null,h=null;const _=[],S=[],L=new Lt;L.layers.enable(1),L.viewport=new ot;const E=new Lt;E.layers.enable(2),E.viewport=new ot;const w=[L,E],P=new eb;P.layers.enable(1),P.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=_[V];return Z===void 0&&(Z=new Zo,_[V]=Z),Z.getHandSpace()};function A(V){const Z=S.indexOf(V.inputSource);if(Z===-1)return;const ae=_[Z];ae!==void 0&&ae.dispatchEvent({type:V.type,data:V.inputSource})}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let V=0;V<_.length;V++){const Z=S[V];Z!==null&&(S[V]=null,_[V].disconnect(Z))}O=null,M=null,e.setRenderTarget(p),f=null,d=null,u=null,r=null,h=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:f}),h=new mi(f.framebufferWidth,f.framebufferHeight,{format:un,type:hi,encoding:e.outputEncoding})}else{let Z=null,ae=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Z=g.stencil?Qi:ai,ae=g.stencil?ji:ni);const re={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(re),r.updateRenderState({layers:[d]}),h=new mi(d.textureWidth,d.textureHeight,{format:un,type:hi,depthTexture:new nb(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],ie=S.indexOf(ae);ie>=0&&(S[ie]=null,_[ie].dispatchEvent({type:"disconnected",data:ae}))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let ie=S.indexOf(ae);if(ie===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=S.length){S.push(ae),ie=Ae;break}else if(S[Ae]===null){S[Ae]=ae,ie=Ae;break}if(ie===-1)break}const re=_[ie];re&&re.dispatchEvent({type:"connected",data:ae})}}const pe=new I,fe=new I;function z(V,Z,ae){pe.setFromMatrixPosition(Z.matrixWorld),fe.setFromMatrixPosition(ae.matrixWorld);const ie=pe.distanceTo(fe),re=Z.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,F=re[14]/(re[10]-1),D=re[14]/(re[10]+1),oe=(re[9]+1)/re[5],ce=(re[9]-1)/re[5],Ee=(re[8]-1)/re[0],ue=(Ae[8]+1)/Ae[0],Te=F*Ee,xe=F*ue,y=ie/(-Ee+ue),T=y*-Ee;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(T),V.translateZ(y),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const U=F+y,K=D+y,J=Te-T,ne=xe+(ie-T),se=oe*D/K*U,le=ce*D/K*U;V.projectionMatrix.makePerspective(J,ne,se,le,U,K)}function Q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;P.near=E.near=L.near=V.near,P.far=E.far=L.far=V.far,(O!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,M=P.far);const Z=V.parent,ae=P.cameras;Q(P,Z);for(let re=0;re<ae.length;re++)Q(ae[re],Z);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),V.position.copy(P.position),V.quaternion.copy(P.quaternion),V.scale.copy(P.scale),V.matrix.copy(P.matrix),V.matrixWorld.copy(P.matrixWorld);const ie=V.children;for(let re=0,Ae=ie.length;re<Ae;re++)ie[re].updateMatrixWorld(!0);ae.length===2?z(P,L,E):P.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let G=null;function q(V,Z){if(c=Z.getViewerPose(l||a),m=Z,c!==null){const ae=c.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let ie=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,ie=!0);for(let re=0;re<ae.length;re++){const Ae=ae[re];let F=null;if(f!==null)F=f.getViewport(Ae);else{const oe=u.getViewSubImage(d,Ae);F=oe.viewport,re===0&&(e.setRenderTargetTextures(h,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(h))}let D=w[re];D===void 0&&(D=new Lt,D.layers.enable(re),D.viewport=new ot,w[re]=D),D.matrix.fromArray(Ae.transform.matrix),D.projectionMatrix.fromArray(Ae.projectionMatrix),D.viewport.set(F.x,F.y,F.width,F.height),re===0&&P.matrix.copy(D.matrix),ie===!0&&P.cameras.push(D)}}for(let ae=0;ae<_.length;ae++){const ie=S[ae],re=_[ae];ie!==null&&re!==void 0&&re.update(ie,Z,l||a)}G&&G(V,Z),m=null}const j=new Rd;j.setAnimationLoop(q),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}}function rb(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,_,S,L){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,L)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,_,S):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Xt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Xt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let S;h.map?S=h.map:h.specularMap?S=h.specularMap:h.displacementMap?S=h.displacementMap:h.normalMap?S=h.normalMap:h.bumpMap?S=h.bumpMap:h.roughnessMap?S=h.roughnessMap:h.metalnessMap?S=h.metalnessMap:h.alphaMap?S=h.alphaMap:h.emissiveMap?S=h.emissiveMap:h.clearcoatMap?S=h.clearcoatMap:h.clearcoatNormalMap?S=h.clearcoatNormalMap:h.clearcoatRoughnessMap?S=h.clearcoatRoughnessMap:h.iridescenceMap?S=h.iridescenceMap:h.iridescenceThicknessMap?S=h.iridescenceThicknessMap:h.specularIntensityMap?S=h.specularIntensityMap:h.specularColorMap?S=h.specularColorMap:h.transmissionMap?S=h.transmissionMap:h.thicknessMap?S=h.thicknessMap:h.sheenColorMap?S=h.sheenColorMap:h.sheenRoughnessMap&&(S=h.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let L;h.aoMap?L=h.aoMap:h.lightMap&&(L=h.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uv2Transform.value.copy(L.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,_,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=S*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let L;h.map?L=h.map:h.alphaMap&&(L=h.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uvTransform.value.copy(L.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Xt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function sb(){const n=Vs("canvas");return n.style.display="block",n}function Od(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:sb(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,_=0,S=0,L=null,E=-1,w=null;const P=new ot,O=new ot;let M=null,A=e.width,X=e.height,B=1,pe=null,fe=null;const z=new ot(0,0,A,X),Q=new ot(0,0,A,X);let G=!1;const q=new Ya;let j=!1,V=!1,Z=null;const ae=new at,ie=new We,re=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return L===null?B:1}let D=t;function oe(b,k){for(let $=0;$<b.length;$++){const W=b[$],ee=e.getContext(W,k);if(ee!==null)return ee}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ge,!1),D===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),D=oe(k,b),D===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ce,Ee,ue,Te,xe,y,T,U,K,J,ne,se,le,de,x,v,R,H,Y,te,we,N,ve;function Me(){ce=new gx(D),Ee=new cx(D,ce,n),ce.init(Ee),N=new Qy(D,ce,Ee),ue=new Ky(D,ce,Ee),Te=new xx,xe=new Uy,y=new Jy(D,ce,ue,xe,Ee,N,Te),T=new dx(p),U=new mx(p),K=new R_(D,Ee),ve=new ax(D,ce,K,Ee),J=new _x(D,K,Te,ve),ne=new Sx(D,J,K,Te),Y=new Mx(D,Ee,y),v=new ux(xe),se=new Oy(p,T,U,ce,Ee,ve,v),le=new rb(p,xe),de=new ky,x=new qy(ce,Ee),H=new ox(p,T,ue,ne,u,a),R=new Zy(p,ne,Ee),te=new lx(D,ce,Te,Ee),we=new vx(D,ce,Te,Ee),Te.programs=se.programs,p.capabilities=Ee,p.extensions=ce,p.properties=xe,p.renderLists=de,p.shadowMap=R,p.state=ue,p.info=Te}Me();const Se=new ib(p,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(A,X,!1))},this.getSize=function(b){return b.set(A,X)},this.setSize=function(b,k,$){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,X=k,e.width=Math.floor(b*B),e.height=Math.floor(k*B),$!==!1&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(A*B,X*B).floor()},this.setDrawingBufferSize=function(b,k,$){A=b,X=k,B=$,e.width=Math.floor(b*$),e.height=Math.floor(k*$),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,k,$,W){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,k,$,W),ue.viewport(P.copy(z).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,k,$,W){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,k,$,W),ue.scissor(O.copy(Q).multiplyScalar(B).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(b){ue.setScissorTest(G=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(b=!0,k=!0,$=!0){let W=0;b&&(W|=16384),k&&(W|=256),$&&(W|=1024),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),de.dispose(),x.dispose(),xe.dispose(),T.dispose(),U.dispose(),ne.dispose(),ve.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Xe),Se.removeEventListener("sessionend",$e),Z&&(Z.dispose(),Z=null),mt.stop()};function C(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const b=Te.autoReset,k=R.enabled,$=R.autoUpdate,W=R.needsUpdate,ee=R.type;Me(),Te.autoReset=b,R.enabled=k,R.autoUpdate=$,R.needsUpdate=W,R.type=ee}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const k=b.target;k.removeEventListener("dispose",Ce),be(k)}function be(b){Re(b),xe.remove(b)}function Re(b){const k=xe.get(b).programs;k!==void 0&&(k.forEach(function($){se.releaseProgram($)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,$,W,ee,Pe){k===null&&(k=Ae);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,ze=Gd(b,k,$,W,ee);ue.setMaterial(W,Ne);let Ue=$.index;const Ye=$.attributes.position;if(Ue===null){if(Ye===void 0||Ye.count===0)return}else if(Ue.count===0)return;let Ge=1;W.wireframe===!0&&(Ue=J.getWireframeAttribute($),Ge=2),ve.setup(ee,W,ze,$,Ue);let Ve,tt=te;Ue!==null&&(Ve=K.get(Ue),tt=we,tt.setIndex(Ve));const qn=Ue!==null?Ue.count:Ye.count,_i=$.drawRange.start*Ge,vi=$.drawRange.count*Ge,Jt=Pe!==null?Pe.start*Ge:0,qe=Pe!==null?Pe.count*Ge:1/0,xi=Math.max(_i,Jt),it=Math.min(qn,_i+vi,Jt+qe)-1,Qt=Math.max(0,it-xi+1);if(Qt!==0){if(ee.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*F()),tt.setMode(1)):tt.setMode(4);else if(ee.isLine){let Tn=W.linewidth;Tn===void 0&&(Tn=1),ue.setLineWidth(Tn*F()),ee.isLineSegments?tt.setMode(1):ee.isLineLoop?tt.setMode(2):tt.setMode(3)}else ee.isPoints?tt.setMode(0):ee.isSprite&&tt.setMode(4);if(ee.isInstancedMesh)tt.renderInstances(xi,Qt,ee.count);else if($.isInstancedBufferGeometry){const Tn=Math.min($.instanceCount,$._maxInstanceCount);tt.renderInstances(xi,Qt,Tn)}else tt.render(xi,Qt)}},this.compile=function(b,k){f=x.get(b),f.init(),g.push(f),b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(p.physicallyCorrectLights),b.traverse(function($){const W=$.material;if(W)if(Array.isArray(W))for(let ee=0;ee<W.length;ee++){const Pe=W[ee];co(Pe,b,$)}else co(W,b,$)}),g.pop(),f=null};let he=null;function Ie(b){he&&he(b)}function Xe(){mt.stop()}function $e(){mt.start()}const mt=new Rd;mt.setAnimationLoop(Ie),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){he=b,Se.setAnimationLoop(b),b===null?mt.stop():mt.start()},Se.addEventListener("sessionstart",Xe),Se.addEventListener("sessionend",$e),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(k),k=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,k,L),f=x.get(b,g.length),f.init(),g.push(f),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ae),V=this.localClippingEnabled,j=v.init(this.clippingPlanes,V,k),d=de.get(b,m.length),d.init(),m.push(d),Kt(b,k,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(pe,fe),j===!0&&v.beginShadows();const $=f.state.shadowsArray;if(R.render($,b,k),j===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(d,b),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const W=k.cameras;for(let ee=0,Pe=W.length;ee<Pe;ee++){const Ne=W[ee];Qa(d,b,Ne,Ne.viewport)}}else Qa(d,b,k);L!==null&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(p,b,k),ve.resetDefaultState(),E=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Kt(b,k,$,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const Ne=ne.update(b),ze=b.material;ze.visible&&d.push(b,Ne,ze,$,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Te.render.frame&&(b.skeleton.update(),b.skeleton.frame=Te.render.frame),!b.frustumCulled||q.intersectsObject(b))){W&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const Ne=ne.update(b),ze=b.material;if(Array.isArray(ze)){const Ue=Ne.groups;for(let Ye=0,Ge=Ue.length;Ye<Ge;Ye++){const Ve=Ue[Ye],tt=ze[Ve.materialIndex];tt&&tt.visible&&d.push(b,Ne,tt,$,re.z,Ve)}}else ze.visible&&d.push(b,Ne,ze,$,re.z,null)}}const Pe=b.children;for(let Ne=0,ze=Pe.length;Ne<ze;Ne++)Kt(Pe[Ne],k,$,W)}function Qa(b,k,$,W){const ee=b.opaque,Pe=b.transmissive,Ne=b.transparent;f.setupLightsView($),Pe.length>0&&Bd(ee,k,$),W&&ue.viewport(P.copy(W)),ee.length>0&&Jr(ee,k,$),Pe.length>0&&Jr(Pe,k,$),Ne.length>0&&Jr(Ne,k,$),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Bd(b,k,$){const W=Ee.isWebGL2;Z===null&&(Z=new mi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Br:hi,minFilter:oo,samples:W&&s===!0?4:0})),p.getDrawingBufferSize(ie),W?Z.setSize(ie.x,ie.y):Z.setSize(Gs(ie.x),Gs(ie.y));const ee=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const Pe=p.toneMapping;p.toneMapping=Sn,Jr(b,k,$),p.toneMapping=Pe,y.updateMultisampleRenderTarget(Z),y.updateRenderTargetMipmap(Z),p.setRenderTarget(ee)}function Jr(b,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Pe=b.length;ee<Pe;ee++){const Ne=b[ee],ze=Ne.object,Ue=Ne.geometry,Ye=W===null?Ne.material:W,Ge=Ne.group;ze.layers.test($.layers)&&Hd(ze,k,$,Ue,Ye,Ge)}}function Hd(b,k,$,W,ee,Pe){b.onBeforeRender(p,k,$,W,ee,Pe),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(p,k,$,W,b,Pe),ee.transparent===!0&&ee.side===fi?(ee.side=Xt,ee.needsUpdate=!0,p.renderBufferDirect($,k,W,ee,b,Pe),ee.side=kr,ee.needsUpdate=!0,p.renderBufferDirect($,k,W,ee,b,Pe),ee.side=fi):p.renderBufferDirect($,k,W,ee,b,Pe),b.onAfterRender(p,k,$,W,ee,Pe)}function co(b,k,$){k.isScene!==!0&&(k=Ae);const W=xe.get(b),ee=f.state.lights,Pe=f.state.shadowsArray,Ne=ee.state.version,ze=se.getParameters(b,ee.state,Pe,k,$),Ue=se.getProgramCacheKey(ze);let Ye=W.programs;W.environment=b.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(b.isMeshStandardMaterial?U:T).get(b.envMap||W.environment),Ye===void 0&&(b.addEventListener("dispose",Ce),Ye=new Map,W.programs=Ye);let Ge=Ye.get(Ue);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ne)return el(b,ze),Ge}else ze.uniforms=se.getUniforms(b),b.onBuild($,ze,p),b.onBeforeCompile(ze,p),Ge=se.acquireProgram(ze,Ue),Ye.set(Ue,Ge),W.uniforms=ze.uniforms;const Ve=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=v.uniform),el(b,ze),W.needsLights=Wd(b),W.lightsStateVersion=Ne,W.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix);const tt=Ge.getUniforms(),qn=Fs.seqWithValue(tt.seq,Ve);return W.currentProgram=Ge,W.uniformsList=qn,Ge}function el(b,k){const $=xe.get(b);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Gd(b,k,$,W,ee){k.isScene!==!0&&(k=Ae),y.resetTextureUnits();const Pe=k.fog,Ne=W.isMeshStandardMaterial?k.environment:null,ze=L===null?p.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:pi,Ue=(W.isMeshStandardMaterial?U:T).get(W.envMap||Ne),Ye=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!W.normalMap&&!!$.attributes.tangent,Ve=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,qn=!!$.morphAttributes.color,_i=W.toneMapped?p.toneMapping:Sn,vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Jt=vi!==void 0?vi.length:0,qe=xe.get(W),xi=f.state.lights;if(j===!0&&(V===!0||b!==w)){const en=b===w&&W.id===E;v.setState(W,b,en)}let it=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xi.state.version||qe.outputEncoding!==ze||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ue||W.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==v.numPlanes||qe.numIntersection!==v.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==tt||qe.morphColors!==qn||qe.toneMapping!==_i||Ee.isWebGL2===!0&&qe.morphTargetsCount!==Jt)&&(it=!0):(it=!0,qe.__version=W.version);let Qt=qe.currentProgram;it===!0&&(Qt=co(W,k,ee));let Tn=!1,ur=!1,uo=!1;const gt=Qt.getUniforms(),dr=qe.uniforms;if(ue.useProgram(Qt.program)&&(Tn=!0,ur=!0,uo=!0),W.id!==E&&(E=W.id,ur=!0),Tn||w!==b){if(gt.setValue(D,"projectionMatrix",b.projectionMatrix),Ee.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,ur=!0,uo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const en=gt.map.cameraPosition;en!==void 0&&en.setValue(D,re.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ee.isSkinnedMesh)&&gt.setValue(D,"viewMatrix",b.matrixWorldInverse)}if(ee.isSkinnedMesh){gt.setOptional(D,ee,"bindMatrix"),gt.setOptional(D,ee,"bindMatrixInverse");const en=ee.skeleton;en&&(Ee.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),gt.setValue(D,"boneTexture",en.boneTexture,y),gt.setValue(D,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fo=$.morphAttributes;return(fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&Ee.isWebGL2===!0)&&Y.update(ee,$,W,Qt),(ur||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,gt.setValue(D,"receiveShadow",ee.receiveShadow)),ur&&(gt.setValue(D,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&Vd(dr,uo),Pe&&W.fog===!0&&le.refreshFogUniforms(dr,Pe),le.refreshMaterialUniforms(dr,W,B,X,Z),Fs.upload(D,qe.uniformsList,dr,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fs.upload(D,qe.uniformsList,dr,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(D,"center",ee.center),gt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),gt.setValue(D,"normalMatrix",ee.normalMatrix),gt.setValue(D,"modelMatrix",ee.matrixWorld),Qt}function Vd(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Wd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,$){xe.get(b.texture).__webglTexture=k,xe.get(b.depthTexture).__webglTexture=$;const W=xe.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const $=xe.get(b);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,$=0){L=b,_=k,S=$;let W=!0;if(b){const Ue=xe.get(b);Ue.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),W=!1):Ue.__webglFramebuffer===void 0?y.setupRenderTarget(b):Ue.__hasExternalTextures&&y.rebindTextures(b,xe.get(b.texture).__webglTexture,xe.get(b.depthTexture).__webglTexture)}let ee=null,Pe=!1,Ne=!1;if(b){const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture)&&(Ne=!0);const Ye=xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ee=Ye[k],Pe=!0):Ee.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?ee=xe.get(b).__webglMultisampledFramebuffer:ee=Ye,P.copy(b.viewport),O.copy(b.scissor),M=b.scissorTest}else P.copy(z).multiplyScalar(B).floor(),O.copy(Q).multiplyScalar(B).floor(),M=G;if(ue.bindFramebuffer(36160,ee)&&Ee.drawBuffers&&W&&ue.drawBuffers(b,ee),ue.viewport(P),ue.scissor(O),ue.setScissorTest(M),Pe){const Ue=xe.get(b.texture);D.framebufferTexture2D(36160,36064,34069+k,Ue.__webglTexture,$)}else if(Ne){const Ue=xe.get(b.texture),Ye=k||0;D.framebufferTextureLayer(36160,36064,Ue.__webglTexture,$||0,Ye)}E=-1},this.readRenderTargetPixels=function(b,k,$,W,ee,Pe,Ne){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){ue.bindFramebuffer(36160,ze);try{const Ue=b.texture,Ye=Ue.format,Ge=Ue.type;if(Ye!==un&&N.convert(Ye)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Br&&(ce.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ge!==hi&&N.convert(Ge)!==D.getParameter(35738)&&!(Ge===ii&&(Ee.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&$>=0&&$<=b.height-ee&&D.readPixels(k,$,W,ee,N.convert(Ye),N.convert(Ge),Pe)}finally{const Ue=L!==null?xe.get(L).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(b,k,$=0){const W=Math.pow(2,-$),ee=Math.floor(k.image.width*W),Pe=Math.floor(k.image.height*W);y.setTexture2D(k,0),D.copyTexSubImage2D(3553,$,0,0,b.x,b.y,ee,Pe),ue.unbindTexture()},this.copyTextureToTexture=function(b,k,$,W=0){const ee=k.image.width,Pe=k.image.height,Ne=N.convert($.format),ze=N.convert($.type);y.setTexture2D($,0),D.pixelStorei(37440,$.flipY),D.pixelStorei(37441,$.premultiplyAlpha),D.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?D.texSubImage2D(3553,W,b.x,b.y,ee,Pe,Ne,ze,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(3553,W,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Ne,k.mipmaps[0].data):D.texSubImage2D(3553,W,b.x,b.y,Ne,ze,k.image),W===0&&$.generateMipmaps&&D.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(b,k,$,W,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,Ne=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,Ue=N.convert(W.format),Ye=N.convert(W.type);let Ge;if(W.isData3DTexture)y.setTexture3D(W,0),Ge=32879;else if(W.isDataArrayTexture)y.setTexture2DArray(W,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,W.flipY),D.pixelStorei(37441,W.premultiplyAlpha),D.pixelStorei(3317,W.unpackAlignment);const Ve=D.getParameter(3314),tt=D.getParameter(32878),qn=D.getParameter(3316),_i=D.getParameter(3315),vi=D.getParameter(32877),Jt=$.isCompressedTexture?$.mipmaps[0]:$.image;D.pixelStorei(3314,Jt.width),D.pixelStorei(32878,Jt.height),D.pixelStorei(3316,b.min.x),D.pixelStorei(3315,b.min.y),D.pixelStorei(32877,b.min.z),$.isDataTexture||$.isData3DTexture?D.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ze,Ue,Ye,Jt.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ze,Ue,Jt.data)):D.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,Ne,ze,Ue,Ye,Jt),D.pixelStorei(3314,Ve),D.pixelStorei(32878,tt),D.pixelStorei(3316,qn),D.pixelStorei(3315,_i),D.pixelStorei(32877,vi),ee===0&&W.generateMipmaps&&D.generateMipmap(Ge),ue.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){_=0,S=0,L=null,ue.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ob extends Od{}ob.prototype.isWebGL1Renderer=!0;class ab extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class lb extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ud extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tu=new at,nu=new I,iu=new I;class cb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ub extends cb{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Hr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class db extends Ud{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new ub}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fb extends Ud{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ru(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);class pb{constructor(){ke(this,"_callbacks",[])}addListener(e){this._callbacks.push(e)}removeListener(e){this._callbacks.forEach((t,i)=>{t===e&&this._callbacks.splice(i,1)})}clear(){this._callbacks=[]}trigger(e){this._callbacks.forEach(t=>{t(e)})}}class mb{constructor(e,t,i){ke(this,"scene");ke(this,"renderer");ke(this,"camera");ke(this,"onClickEvent",new pb);ke(this,"_time",0);ke(this,"_deltaTime",0);ke(this,"_sceneObjects",[]);this.scene=e,this.renderer=i,this.camera=t,this.renderer.domElement.addEventListener("click",r=>this.onMouseClick(r),!1)}get time(){return this._time}get deltaTime(){return this._deltaTime}get sceneObjects(){return this._sceneObjects}addObject(e){!e||this._sceneObjects.push(e)}update(e){const t=e*.001;if(this._deltaTime=t-this._time,this._time=t,this.resizeRendererToDisplaySize(this.renderer)){const i=this.renderer.domElement;this.camera.aspect=i.clientWidth/i.clientHeight,this.camera.updateProjectionMatrix()}this._sceneObjects.forEach(i=>{i.update()}),this.render()}render(){this.renderer.render(this.scene,this.camera)}dispose(){this._sceneObjects.forEach(e=>{e.dispose()})}onMouseClick(e){var t=new We;const i=this.renderer.domElement.getBoundingClientRect();t.x=(e.clientX-i.left)*this.renderer.domElement.width/i.width,t.y=(e.clientY-i.top)*this.renderer.domElement.height/i.height;const r=new We;r.x=t.x/this.renderer.domElement.width*2-1,r.y=t.y/this.renderer.domElement.height*-2+1}resizeRendererToDisplaySize(e){const t=e.domElement,i=window.devicePixelRatio,r=t.clientWidth*i|0,s=t.clientHeight*i|0,a=t.width!==r||t.height!==s;return a&&e.setSize(r,s,!1),a}}class Ka{constructor(e){ke(this,"_scene");this._scene=e}get scene(){return this._scene}}const gb=`\r
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
}`,_b=`varying vec2 vUv;\r
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
}`;class vb extends Ka{constructor(t){super(t);ke(this,"hitBox");ke(this,"lifetime",30);ke(this,"jitterScale",.2);ke(this,"jitterAcceleration",1e-4);ke(this,"maxJitterSpeed",.5);ke(this,"directionChangeTime",1);ke(this,"_currentLifetime",0);ke(this,"_currentJitterWaitTime",this.directionChangeTime);ke(this,"_model");ke(this,"_material");ke(this,"_speed",5);ke(this,"_mainDirection",new I);ke(this,"_direction",new I);ke(this,"_directionGoal",new I);ke(this,"_directionVelocity",new I);ke(this,"_velocity",new I);const i=new lr(3,3,2,1);this._material=new hn({vertexShader:gb,fragmentShader:_b,uniforms:{uTime:{value:0},uTimeOffset:{value:on.randFloat(0,1)}},transparent:!0}),this._material.side=fi,this._material.depthWrite=!1;const r=new Nt(i,this._material),s=new ar(4,3.5,4),a=new lb;a.opacity=0,a.transparent=!0,this.hitBox=new Nt(s,a),this._model=r,this._model.add(this.hitBox),t.scene.add(this._model)}get isReusable(){return this._currentLifetime>=this.lifetime}update(){this._material.uniforms.uTime.value=this.scene.time,this._currentLifetime+=this.scene.deltaTime,this._currentJitterWaitTime+=this.scene.deltaTime;const t=new I(0);if(t.copy(this._model.position),this._currentJitterWaitTime>=this.directionChangeTime){this._currentJitterWaitTime=0;const r=new I(on.randFloat(-1,1),on.randFloat(-1,1),on.randFloat(-1,1)).normalize().multiplyScalar(this.jitterScale);this._directionGoal.copy(this._mainDirection).add(r).normalize()}const i=new I;i.subVectors(this._directionGoal,this._direction).normalize().multiplyScalar(this.jitterAcceleration),this._directionVelocity.add(i),this._directionVelocity.length()>this.maxJitterSpeed&&this._directionVelocity.normalize().multiplyScalar(this.maxJitterSpeed),this._direction.add(this._directionVelocity),this._direction.normalize(),this._velocity.copy(this._direction).multiplyScalar(this._speed*this.scene.deltaTime),t.add(this._velocity),this._model.lookAt(t),this._model.rotateX(Math.PI/2),this._model.position.copy(t)}dispose(){this._model.children.forEach(t=>{this._model.remove(t)})}reset(t,i,r,s){this._currentLifetime=0,this._currentJitterWaitTime=this.directionChangeTime,this._model.position.copy(s),this._mainDirection.copy(t),this._direction=new I().copy(this._mainDirection),this._directionGoal=new I().copy(this._direction),this._model.scale.set(i,i,i),this._speed=r,this._velocity.setLength(0),this._directionVelocity.setLength(0)}}class xb extends Ka{constructor(t){super(t);ke(this,"maxButterflies",20);ke(this,"butterflySpawnRate",.7);ke(this,"mainDirection",new I(-1,.3,.05));ke(this,"_currentTime",0);ke(this,"_butterflies",[]);ke(this,"_reusableButterflies",[]);this.spawnInitial()}update(){this._currentTime+=this.scene.deltaTime,this._currentTime>=this.butterflySpawnRate&&(this._currentTime=0,this.spawnButterfly());for(let t=0;t<this._butterflies.length;t++)this._butterflies[t].isReusable&&(this._reusableButterflies.push(this._butterflies[t]),this._butterflies.splice(t,1),t--)}dispose(){this._butterflies=[],this._reusableButterflies=[]}spawnButterfly(){var t;this._reusableButterflies.length>0?t=this._reusableButterflies.pop():(t=new vb(this.scene),this.scene.addObject(t)),this._butterflies.push(t);const i=new I(on.randFloat(-1,1),on.randFloat(-1,1),on.randFloat(-1,1)).multiplyScalar(.2),r=new I().copy(this.mainDirection).add(i).normalize(),s=on.randFloat(-180,-240);t.reset(r,on.randFloat(.7,1.5),on.randFloat(9,12),new I(80,-15,s))}spawnInitial(){for(let t=0;t<5;t++)this.spawnButterfly()}}const yb="/assets/NewMe.b19baf58.jpg",bb={props:["title","description","image","link"]};const Mb={class:"main"},Sb=["href"],wb=["src"],Eb={class:"description-content"},Tb={class:"title"};function Ab(n,e,t,i,r,s){return Ze(),et("div",Mb,[_e("a",{href:t.link,target:"_blank"},[_e("img",{src:t.image},null,8,wb)],8,Sb),_e("div",Eb,[_e("div",Tb,Pr(t.title),1),_e("div",null,Pr(t.description),1)])])}const _r=Ot(bb,[["render",Ab],["__scopeId","data-v-0ff278df"]]),Cb=Zt({props:["icon","percentage"],mounted(){const n=this.$refs.span;n!=null&&(n.style.width=this.percentage)}});const Lb={class:"content"},Rb=["src"],Pb={class:"progress-bar"},Db={ref:"span"};function Ib(n,e,t,i,r,s){return Ze(),et("div",Lb,[_e("img",{src:n.icon},null,8,Rb),_e("div",Pb,[_e("span",Db,null,512)])])}const nn=Ot(Cb,[["render",Ib],["__scopeId","data-v-fb1ff7f1"]]),Zr=n=>(Wr("data-v-3b616144"),n=n(),qr(),n),Fb=Zr(()=>_e("div",{class:"title-centered top-title",id:"about-section"},null,-1)),Nb={class:"max-width main"},Ob={class:"container"},Ub={class:"timeline-item"},zb=Zr(()=>_e("div",{class:"line-dot"},null,-1)),kb=io('<div class="top-content fade-in" data-v-3b616144><div class="description" data-v-3b616144><div class="title title-underline" data-v-3b616144> About me </div><div class="main-text" data-v-3b616144><img class="visual" src="'+yb+'" data-v-3b616144> I&#39;m Chris, and welcome to my portfolio page! I&#39;m a programmer from the Netherlands with a strong passion for game development. <br data-v-3b616144><br data-v-3b616144> I hold both a <b data-v-3b616144>master&#39;s</b> and <b data-v-3b616144>bachelor&#39;s</b> degree in computer science, with a focus on game development. During my studies, I completed several successful internships at various companies, which are listed in this section. <br data-v-3b616144><br data-v-3b616144> My main areas of expertise are <b data-v-3b616144>graphics programming</b>, <b data-v-3b616144>performance optimization</b>, and <b data-v-3b616144>gameplay programming</b>. I also dabble in 3D modeling in my free time and am currently learning the Vulkan graphics API. I&#39;m planning to develop a solo game this year as well! <br data-v-3b616144><br data-v-3b616144> I would describe myself as someone who is constantly eager to learn and expand my knowledge and skills in game development. I&#39;m also a perfectionist, so I won&#39;t stop learning until I truly understand what I&#39;m doing. <br data-v-3b616144><br data-v-3b616144><i data-v-3b616144>And a little less technical: I enjoy playing the guitar, gaming, and running!</i></div></div></div>',1),Bb={class:"bottom-content fade-in"},Hb={class:"bottom-item"},Gb=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Education ",-1)),Vb={class:"experiences"},Wb=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Experience ",-1)),qb={class:"experiences"},jb={class:"bottom-item"},Xb=Zr(()=>_e("div",{class:"sub-title sub-title-underline"}," Skills ",-1)),$b={class:"skills"},Yb=Zt({__name:"About",setup(n){return(e,t)=>(Ze(),et(vt,null,[Fb,_e("div",Nb,[_e("div",Ob,[_e("div",Ub,[zb,_e("div",null,[kb,_e("div",Bb,[_e("div",Hb,[Gb,_e("div",Vb,[De(_r,{title:"Utrecht University",description:"Game and Media Technology Master's degree.",image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Utrecht_University_logo.svg/1200px-Utrecht_University_logo.svg.png",link:"https://www.uu.nl/"}),De(_r,{title:"HvA",description:"HBO-ICT Bachelor's degree - Cum Laude.",image:"src/assets/images/SocialMedia-HvA.png",link:"https://www.hva.nl/"})]),Wb,_e("div",qb,[De(_r,{title:"uCrowds",description:"Master thesis internship, developed a Crowd Simulation plugin for Unreal Engine.",image:"https://yt3.googleusercontent.com/ytc/AIdro_ljdVsfdCL4r3_StSlbyYBc5wkHC57GHT836nM_IDXjxQ=s900-c-k-c0x00ffffff-no-rj",link:"https://www.ucrowds.com/"}),De(_r,{title:"KLM",description:"HvA Graduation Internship, developed VR applications in Unity.",image:"/src/assets/images/1758957087442.jpg",link:"https://www.linkedin.com/in/klm-xr-center-of-excellence/"}),De(_r,{title:"DTT",description:"Internship / Summerjob, developed tools and apps in Unity.",image:"https://s3-eu-west-1.amazonaws.com/sortlist-core-api/x5RpFNJ1g7owYPVUqhSdsZTd",link:"https://www.d-tt.nl/"})])]),_e("div",jb,[Xb,_e("div",$b,[De(nn,{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/960px-Logo_C_sharp.svg.png",percentage:"95%"}),De(nn,{icon:"https://i.redd.it/tu3gt6ysfxq71.png",percentage:"100%"}),De(nn,{icon:"https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",percentage:"90%"}),De(nn,{icon:"https://cdn.worldvectorlogo.com/logos/unreal-1.svg",percentage:"80%"}),De(nn,{icon:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",percentage:"75%"}),De(nn,{icon:"https://icon-library.com/images/blender-3d-icon/blender-3d-icon-9.jpg",percentage:"65%"}),De(nn,{icon:"https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",percentage:"80%"}),De(nn,{icon:"https://cdn.freebiesupply.com/logos/large/2x/opengl-1-logo-png-transparent.png",percentage:"60%"}),De(nn,{icon:"https://www.svgrepo.com/show/184143/java.svg",percentage:"70%"}),De(nn,{icon:"https://www.vulkan.org/user/themes/vulkan/images/logo/vulkan-logo.svg",percentage:"50%"})])])])])])])])],64))}});const Zb=Ot(Yb,[["__scopeId","data-v-3b616144"]]);var Le=(n=>(n.HIGHLIGHTED="HIGHLIGHTED",n.PERSONAL="PERSONAL",n.SCHOOL="SCHOOL",n.INTERNSHIP="INTERNSHIP",n.C_SHARP="C#",n.CPP="C++",n.RUST="Rust",n.JAVA="JAVA",n.UNITY="Unity",n.UNREAL="Unreal",n.VR="VR",n))(Le||{});const Kb=Object.freeze({HIGHLIGHTED:{color:"rgb(189, 172, 75)",text:"Highlighted"},PERSONAL:{color:"rgb(0, 165, 0)",text:"Personal"},SCHOOL:{color:"rgb(0, 123, 255)",text:"School"},INTERNSHIP:{color:"rgb(255, 165, 0)",text:"Internship"},["C#"]:{color:"rgb(165, 100, 165)",text:"C#"},["C++"]:{color:"rgb(0, 100, 255)",text:"C++"},Rust:{color:"rgb(255, 69, 0)",text:"Rust"},JAVA:{color:"rgb(220, 140, 0)",text:"Java"},Unity:{color:"rgb(100, 100, 100)",text:"Unity"},Unreal:{color:"rgb(84, 124, 134)",text:"Unreal"},VR:{color:"rgb(200,130,90)",text:"VR"}}),Jb=Zt({__name:"Tag",props:{tag:null,clickable:{type:Boolean},selected:{type:Boolean}},emits:["tag-toggled"],setup(n,{emit:e}){const t=n,i=Kb[t.tag],r=()=>{!t.clickable||e("tag-toggled",{tag:t.tag})};return(s,a)=>(Ze(),et("div",{class:Ws(["tag-item"]),style:Gr({backgroundColor:qt(i).color,filter:n.selected?"none":"brightness(50%)",cursor:n.clickable?"pointer":"default",outline:n.tag==qt(Le).HIGHLIGHTED?"2px solid rgb(255, 255, 0)":"none"}),onClick:r},Pr(qt(i).text),5))}});const Ja=Ot(Jb,[["__scopeId","data-v-80a54e7b"]]);function zd(n){const e=/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:[^\/\n\s]+)\/?\S*?\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,t=n.match(e);return t?t[1]:null}function Qb(n){return`https://img.youtube.com/vi/${n}/maxresdefault.jpg`}const eM={class:"item_content"},tM=["src"],nM={class:"title"},iM=["innerHTML"],rM={class:"tag-container"},sM=Zt({__name:"Card",props:{tags:null,title:null,media:null,description:null,git_link:null,additional_link:null},emits:["card-clicked"],setup(n,{emit:e}){const t=n,i=250,r=()=>{if(t.description.length<i)return t.description;let o=t.description.slice(0,i);const l=o.lastIndexOf(" ");return l===-1?o:o.slice(0,l)+"..."},s=()=>{let o=t.media,l=zd(o);return l&&(o=Qb(l)),o},a=()=>{e("card-clicked",{title:t.title,description:t.description,media:t.media,tags:t.tags,git_link:t.git_link,additional_link:t.additional_link})};return(o,l)=>(Ze(),et("div",{class:"item",onClick:a},[_e("div",eM,[_e("img",{class:"media",src:s()},null,8,tM),_e("div",nM,Pr(t.title),1),_e("div",{innerHTML:r(),class:"description"},null,8,iM),_e("div",rM,[(Ze(!0),et(vt,null,zs(t.tags,(c,u)=>(Ze(),Wi(Ja,{key:u,tag:c,clickable:!1,selected:!0},null,8,["tag"]))),128))])])]))}});const oM=Ot(sM,[["__scopeId","data-v-5d4258f3"]]);const Kr=n=>(Wr("data-v-0f989ad2"),n=n(),qr(),n),aM={class:"flex"},lM={class:"description"},cM={class:"timeline-item"},uM=Kr(()=>_e("div",{class:"line-dot"},null,-1)),dM={class:"title title-underline"},fM=["innerHTML"],hM=Kr(()=>_e("div",{class:"seperator"},null,-1)),pM={class:"visual"},mM=["src"],gM=["href"],_M=["src"],vM=["src"],xM={class:"tag-container"},yM=["href"],bM=Kr(()=>_e("img",{class:"icon",src:"https://img.icons8.com/ios11/512/000000/github.png"},null,-1)),MM=[bM],SM=["href"],wM=Kr(()=>_e("img",{class:"icon",src:"https://img.icons8.com/ios11/512/000000/link.png"},null,-1)),EM=[wM],TM=Kr(()=>_e("div",{class:"content-sharp"},null,-1)),AM=Zt({__name:"CardOverlay",props:{visible:null,title:null,description:null,media:null,tags:null,git_link:null,additional_link:null},emits:["close"],setup(n,{emit:e}){const t=n,i=()=>{e("close")},r=()=>zd(t.media)!=null;return(s,a)=>n.visible?(Ze(),et("div",{key:0,class:"overlay fade-in-animation",onClick:i},[_e("div",{class:"content",onClick:a[0]||(a[0]=hp(()=>{},["stop"]))},[_e("img",{class:"close",src:"https://img.icons8.com/ios11/512/000000/cancel.png",onClick:i}),_e("div",aM,[_e("div",lM,[_e("div",cM,[uM,_e("div",null,[_e("div",dM,Pr(n.title),1),_e("div",{innerHTML:n.description,class:"main-text"},null,8,fM)])])]),hM,_e("div",pM,[r()?(Ze(),et("iframe",{key:0,class:"media media-video",src:n.media},null,8,mM)):Un("",!0),n.git_link||n.additional_link?(Ze(),et("a",{key:1,href:n.additional_link?n.additional_link:n.git_link,target:"_blank"},[r()?Un("",!0):(Ze(),et("img",{key:0,class:"media",src:n.media},null,8,_M))],8,gM)):Un("",!0),!n.git_link&&!n.additional_link&&!r()?(Ze(),et("img",{key:2,class:"media",src:n.media},null,8,vM)):Un("",!0),_e("div",xM,[(Ze(!0),et(vt,null,zs(t.tags,(o,l)=>(Ze(),Wi(Ja,{key:l,tag:o,clickable:!1,selected:!0},null,8,["tag"]))),128))]),_e("div",null,[n.git_link!=null?(Ze(),et("a",{key:0,href:n.git_link,target:"_blank"},MM,8,yM)):Un("",!0),n.additional_link!=null?(Ze(),et("a",{key:1,href:n.additional_link,target:"_blank"},EM,8,SM)):Un("",!0)])])]),TM])])):Un("",!0)}});const CM=Ot(AM,[["__scopeId","data-v-0f989ad2"]]),lo=n=>(Wr("data-v-7092f214"),n=n(),qr(),n),LM={class:"main-bg"},RM={class:"max-width"},PM={class:"container"},DM={class:"timeline-item"},IM=lo(()=>_e("div",{class:"line-dot"},null,-1)),FM={class:"main fade-in"},NM=lo(()=>_e("div",{class:"title title-underline"}," Projects ",-1)),OM=lo(()=>_e("div",{class:"sub-text main-text"},[di("Filter by toggling tags. "),_e("br"),di(" For more details, you can click on the project cards. ")],-1)),UM={class:"filters"},zM={class:"cards"},kM=lo(()=>_e("u",null,[_e("a",null,"Show All")],-1)),BM=[kM],HM=Zt({__name:"Projects",setup(n){const e=xr([{title:"Unreal Engine TerraCrowds Plugin",description:`For my <strong>master\u2019s thesis</strong>, I developed a <strong>crowd simulation plugin for Unreal Engine</strong> in collaboration with uCrowds. The plugin enables real-time simulation of up to 100,000 agents in complex 3D game environments. Crowd flow can be directed through a graph-based waypoint system, allowing users to modify waypoints and obstacles dynamically during simulation.

The primary focus of my thesis was the user experience (UX) of crowd simulation tools for game development. By analyzing existing tools and related academic work, I identified core requirements for an effective and user-friendly workflow. My main contributions were the design and implementation of the graph-based waypoint system and a pipeline for extracting an <strong>Explicit Corridor Map (ECM)</strong> from arbitrary 3D environments.

The ECM is a navigation mesh that supports agents of varying sizes but requires environments to be partitioned into non-overlapping layers. To achieve this, I implemented multiple <strong>polygonal partitioning algorithms</strong>, enabling robust ECM extraction from any 3D game environment.

The thesis received a <strong>final grade of 8.5/10</strong>. During development, the plugin was <strong>featured at Unreal Fest (Orlando)</strong> in a live demo by uCrowds.`,media:"https://youtube.com/embed/No76LzYcdUc",tags:[Le.HIGHLIGHTED,Le.INTERNSHIP,Le.UNREAL,Le.CPP]},{title:"The Reverse Turing Test",description:`During my master\u2019s program, I took a course on AI content generation. As part of this course, my team and I developed a game prototype titled <strong>Reverse Turing Test</strong>, in which the player must convince a <strong>large language model (LLM)</strong> that they are an AI rather than a human. The project was created using exclusively <strong>AI-generated 3D models and music</strong>.

The project attracted the attention of the course instructor and was submitted to the CHI Conference <strong>Game Competition</strong>, where it was selected as <strong>one of ten official contenders</strong>. Together with two other developers, I presented the game at the <strong>CHI Conference in Yokohama, Japan</strong>. The project was awarded <strong>runner-up for best game</strong> and resulted in a <strong>publication in the ACM Digital Library</strong>.

Reverse Turing Test is set in a 1950s office, where the player interacts with a version of Alan Turing controlled by an LLM. The <strong>objective</strong> is to <strong>answer Turing\u2019s questions in a way that appears artificially generated</strong>. After a fixed number of questions, the LLM evaluates the interaction and delivers a verdict on how convincingly the player behaved as an AI.

My primary responsibility was <strong>designing and implementing the player\u2013LLM interaction</strong>. This included developing the <strong>grading system</strong> used to assess whether the player was perceived as an AI, implementing <strong>UI functionality</strong>, and contributing to the overall <strong>game design</strong>.`,media:"https://youtube.com/embed/Rx0DXEEJR5Y?si=3XyiSAqkzkV5Ecie",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.PERSONAL,Le.UNITY,Le.C_SHARP],additional_link:"https://doi.org/10.1145/3706599.3720317"},{title:"FMorgana",description:`While pursuing my master\u2019s at <strong>Utrecht University (UU)</strong>, I participated in a collaborative project at the <strong>HKU</strong>, where students are required to deliver a complete game for an <strong>external client</strong> within six months.

I joined a team tasked with creating an interactive experience for the <strong>Imagine Film Festival</strong>, a festival showcasing fiction-themed films with a new theme each year. That year\u2019s <strong>theme</strong> was <strong>\u201CEscape\u201D</strong>, exploring concepts of dystopias and utopias.

Our team designed a <strong>VR game</strong> set in a dystopian world controlled by a megacorporation. The player follows a digital cat that leads them toward a utopia. As the experience progresses, it is revealed that the utopia is a digital projection, presenting the player with a <strong>moral dilemma</strong>: remain in a <strong>real dystopia</strong>, or escape to a <strong>false utopia</strong>. The experience was designed to be <strong>accessible to players of all ages</strong> and gaming backgrounds.

I served as <strong>gameplay engineer</strong> and <strong>technical artist</strong>, contributing key technical and creative elements. I developed most of the <strong>shaders</strong>, including a <strong>custom lighting system</strong> for both dystopian and utopian environments, and created <strong>VFX</strong> such as a boids-based butterfly system used to guide the player. I also implemented <strong>VR interactions</strong>, including grab interactions and overall interactions with the cat. My technical and creative contributions were central to the development of the game.`,media:"https://www.youtube.com/embed/uOESkckacEk",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.UNITY,Le.C_SHARP,Le.VR]},{title:"Volumetric Path Tracer",description:`For the final assignment of an <strong>Advanced Graphics</strong> course during my Master\u2019s program, I implemented a <strong>GPU-accelerated volumetric cloud renderer</strong> within a basic <strong>path tracer</strong> using <strong>OpenCL</strong>.

Rays are marched through a 3D volume represented by a <strong>tiled 3D texture</strong>. Light absorption at each sample point is calculated using the <strong>Beer\u2013Lambert law</strong>. For each sample, an additional ray is marched toward the light sources to compute <strong>light transmittance</strong>, using <strong>importance sampling</strong> based on light intensity and distance.

The resulting renderer supports <strong>complex volumetric effects</strong> and achieves <strong>real-time performance</strong>. The project received a <strong>final grade of 10/10</strong>.`,media:"https://github.com/user-attachments/assets/dca3e0d9-5420-4f9d-9205-d50c1bb47694",tags:[Le.SCHOOL,Le.CPP],git_link:"https://github.com/Chrisp-byte/AdvancedGraphicsAssignment2",additional_link:"/src/assets/PDFs/Advanced_Graphics_Assignment_2_Report.pdf"},{title:"Minecraft Clone Optimization",description:`For the final assignment of a <strong>Vectorization and Optimization</strong> course during my Master\u2019s program, a fellow student and I optimized the Minecraft clone <strong>\u201CCraft.\u201D</strong>

We began by <strong>profiling the application using the Very Sleepy Profiler</strong> to identify performance bottlenecks and determine which parts of the codebase consumed the most frame time.

We introduced a <strong>hash map chunk lookup system</strong> to enable fast neighbor queries, significantly improving chunk access performance. We then optimized the <strong>frustum culling implementation using SIMD (AVX1)</strong>, reducing CPU overhead during visibility checks.

To improve rendering performance, we <strong>compressed vertex data into single-byte representations</strong>, reducing memory bandwidth usage and accelerating chunk mesh uploads to the GPU. Finally, we implemented <strong>greedy meshing</strong> to dramatically decrease the number of rendered vertices by merging adjacent coplanar faces.

Together, these optimizations improved performance by <strong>approximately 50\xD7</strong>, and the project received a <strong>final grade of 10/10</strong>.`,media:"/src/assets/images/Craft.png",tags:[Le.SCHOOL,Le.CPP],git_link:"https://github.com/Roeliefantje/Craft",additional_link:"/src/assets/PDFs/INFOMOV_Assignment3.pdf"},{title:"Game Jams (Itch.io)",description:`I enjoy participating in <strong>game jams</strong>, which I share on my <strong>itch.io</strong> page under the name 'Chrispies'.

Game jams give me the opportunity to rapidly prototype ideas and explore new engines, languages, and game development techniques. For example, <strong>Roombash</strong> allowed me to learn the <strong>Godot engine</strong>, while <strong>Still Waters</strong> gave me a chance to experiment with creating atmosphere in a horror setting. One of my projects, <strong>Super Mega Power Golf 3D</strong>, was particularly well-received, becoming the <strong>second most-rated game</strong> out of 821 entries.`,media:"https://static.itch.io/images/logo-white-new.svg",tags:[Le.PERSONAL],additional_link:"https://chrispies.itch.io/"},{title:"Jibblets (GoedWare Gamejam Winner)",description:`I participated in the 16th edition of the <strong>GoedWare Game Jam</strong>, where the theme was <strong>\u201CYou can\u2019t save them all\u201D</strong>. My submission, <strong>\u201CJibblets\u201D</strong>, placed <strong>#1 in the jury vote</strong> and <strong>#2 in the public vote</strong>.

I joined the jam as a <strong>solo developer</strong>, taking full responsibility for <strong>programming</strong>, <strong>3D modelling</strong>, <strong>sound design</strong>, and <strong>level design</strong>. I created a <strong>puzzle game</strong> to improve my puzzle design skills while aiming for a <strong>cohesive art style</strong> combining <strong>realistic textures</strong> with <strong>stylized VFX</strong>.

The game revolves around small characters called <strong>Jibblets</strong>, who are subjected to cruel experiments. The player must guide them to the exit, solving puzzles that require <strong>sacrificing some Jibblets</strong> so others can survive.

\u201CJibblets\u201D was developed in <strong>Unity</strong>, using <strong>Blender</strong>, <strong>LeanTween</strong> and <strong>FMOD</strong>. Notable technical implementations include:
<ul><li>A <strong>blood rendering system</strong> using <strong>instanced rendering</strong> with a <strong>dither shader</strong> for transparency</li><li>A <strong>modular and extendable trigger system</strong> for interactions between buttons, lasers and platforms</li><li><strong>Custom shaders</strong>, including height-based fog</li><li>Fully <strong>modeled and animated 3D character</strong></li></ul>
The game received multiple recognitions: <strong>1st place jury award</strong>, <strong>2nd place overall</strong>, and awards for <strong>Best Gameplay</strong> and <strong>Best Devlog</strong>.`,media:"https://img.itch.zone/aW1nLzI2MTUxNTg2LnBuZw==/315x250%23c/0qhrnP.png",tags:[Le.HIGHLIGHTED,Le.PERSONAL,Le.UNITY,Le.C_SHARP],additional_link:"https://chrispies.itch.io/jibblets/devlog/1462595/jibblets-gamejam-development-log"},{title:"SMPG 3D (Bigmode Gamejam 2025)",description:`I participated in the <strong>2025 BigMode Game Jam</strong>, hosted by YouTuber VideogameDunkey. The <strong>theme</strong> of the jam was <strong>\u201Cpower\u201D</strong>, and a jury selected a small number of standout entries to be played live on stream.

I took part as a <strong>solo developer</strong>, handling all programming, art, and sound design. My interpretation of the theme centered on the familiar power bar mechanic from classic golf games. The core concept was to subvert player expectations by presenting the game as a traditional golf experience, before revealing it as a <strong>first-person action shooter</strong>.

The main mechanic allows the player to <strong>strike any physics-enabled object in the world</strong>, including golf balls, enemy heads, and even bullets fired by enemies. As the game progresses, players unlock new types of golf balls with unique abilities, such as a black hole ball and a ricochet ball.

<strong>Super Mega Power Golf 3D</strong> placed <strong>10th in the Fun category</strong> and <strong>17th in Originality</strong>. It became the <strong>second most-rated game</strong> of the jam out of 821 entries and was played live on stream. While the game did not receive any formal awards, I am very satisfied with what I was able to create within a <strong>one-week development period</strong>.`,media:"https://img.itch.zone/aW1nLzE5NjQ5MDA4LnBuZw==/315x250%23c/hwLSru.png",tags:[Le.PERSONAL,Le.UNITY,Le.C_SHARP],additional_link:"https://chrispies.itch.io/supermegapowergolf3d"},{title:"Custom Game Engine",description:`In my personal time, I developed a lightweight <strong>game engine</strong> in <strong>C++</strong> using <strong>Vulkan</strong>. The primary goal of this project was to gain a deeper understanding of <strong>low-level rendering</strong> and the <strong>core architecture of game engines</strong>. It also serves as a foundation for further <strong>graphics experiments</strong> and personal projects.

The engine currently includes features such as <strong>dynamic batching</strong> for efficient rendering, <strong>texture and model loading</strong>, a simple <strong>Entity Component System (ECS)</strong> for game logic, <strong>text mesh rendering</strong>, and <strong>shadow mapping</strong>. To validate the system, I implemented a basic version of <strong>Snake</strong> using the engine.

While the project is relatively small (developed over the course of two weeks), it provides a solid technical foundation. I plan to expand it further into a more robust framework suitable for game development.`,media:"/src/assets/images/CrspSnake.png",git_link:"https://github.com/Chrisp-byte/CrspEngine",tags:[Le.PERSONAL,Le.CPP]},{title:"Simple Path Tracer",description:`During my master's program, I followed a course in <strong>Advanced Graphics</strong>, where I learned about <strong>real-time raytracing</strong>. After completing the course with a <strong>8.9/10</strong>, I decided to use what I learned to develop my own <strong>raytracer</strong>.

The current progress of my raytracer can be seen on the <strong>GitHub page</strong> linked on this page.`,media:"https://github.com/user-attachments/assets/ac4bf908-e621-4eea-acb3-033fa143c486",tags:[Le.PERSONAL,Le.RUST],git_link:"https://github.com/Chrisp-byte/MyTracer"},{title:"Flying-V VR",description:`For my <strong>graduation internship</strong>, I developed an <strong>Oculus Quest 2 VR application</strong> for <strong>KLM</strong> that allows users to explore and inspect the <strong>Flying-V plane model</strong>. The application was built in <strong>Unity</strong>, using <strong>Photon Fusion</strong> for multiplayer functionality and <strong>Ready Player Me</strong> for avatars.

Through this project, I gained hands-on experience in <strong>setting up multiplayer games in Unity</strong> and applied various <strong>optimization techniques</strong> to efficiently render multiple high-quality 3D models in VR, ensuring smooth performance on standalone mobile hardware. I also designed <strong>interactable 3D interfaces</strong>, enabling users to play animations of ground vehicles moving around the airplane.

The project was graded <strong>8.2/10</strong>, allowing me to <strong>graduate with honours</strong> from the HvA.`,media:"/src/assets/images/Screenshot 2023-05-23 103204.png",tags:[Le.INTERNSHIP,Le.UNITY,Le.C_SHARP,Le.VR]},{title:"Procedural Planets",description:`For a course at the <strong>HvA</strong>, we were tasked with researching and implementing a game development\u2013related feature. I chose to design and implement a system for <strong>procedurally generating miniature destructible planets</strong> in <strong>Unity</strong>, inspired by the planets in Outer Wilds.

This project allowed me to further explore the capabilities of <strong>compute shaders</strong> and <strong>post-processing effects</strong>. The system enables adding and editing multiple noise layers via an inspector window, which influence a 3D density grid. This grid is then used to generate the planet\u2019s mesh using the <strong>Surface Nets algorithm</strong>. To optimize performance, planets are partitioned into an <strong>Octree structure</strong>, which loads higher-detail chunks as the player approaches. Transitions between chunks are smoothed by interpolating vertex positions. Finally, a simple <strong>raymarched post-processing atmosphere effect</strong> was added to complete the visual presentation.

The project was awarded a <strong>10/10</strong> by the course instructors. For a deeper dive into the technical implementation, I wrote a detailed <strong>blog post</strong> accessible via the link on this page.`,media:"https://www.youtube.com/embed/aMZN_k85PA4",tags:[Le.HIGHLIGHTED,Le.SCHOOL,Le.UNITY,Le.C_SHARP],additional_link:"https://summit-2223-sem1.game-lab.nl/?p=64",git_link:"https://gitlab.com/Chrisppp/planet-generation"},{title:"Magicise VR",description:`During my study at the <strong>HvA</strong>, I followed the minor <strong>Virtual Reality</strong>. During this minor, each group was tasked with solving a problem for a company using a VR application.

My group was tasked with creating a VR application that motivates athletes to perform workouts in a virtual environment. During this project, I mainly worked on creating <strong>visual effects</strong> using custom-written <strong>shaders</strong> and the <strong>VFX graph</strong> in Unity, and implemented game logic for spell casting and enemy spawning.

I also implemented the ability to use an <strong>XSense motion capture suit</strong> in the application, created many of the <strong>3D models and textures</strong> in Blender, and served as the <strong>group lead</strong>.`,media:"https://www.youtube.com/embed/SMg9Urwz5fs",tags:[Le.SCHOOL,Le.UNITY,Le.C_SHARP,Le.VR]},{title:"DTT - Unity Packages",description:`During my internship at the multimedia company <strong>DTT</strong>, I worked on a project called the <strong>Unity Core Packages (UCP)</strong> project. The goal of this project was to convert systems used in existing DTT apps into <strong>Unity assets</strong>, which can then be sold on the <strong>Unity Asset Store</strong>.

I was tasked with creating some assets from scratch and checking if assets were ready for release. I worked on assets such as <strong>Word Finder</strong>, <strong>Anagram Finder</strong>, <strong>Analytic Events</strong>, and <strong>A/B testing</strong>, and added functionalities to many of the other published assets.`,media:"/src/assets/images/DTTAssetStore.PNG",tags:[Le.INTERNSHIP,Le.UNITY,Le.C_SHARP],additional_link:"https://assetstore.unity.com/publishers/35054"},{title:"Slime Dash",description:`In the first year at the <strong>HvA</strong>, we were tasked with making a simple 2D game that could be played on the consoles in planes. With no prior coding experience, I worked together with 3 other students to create the game <strong>Slime Dash</strong>.

The game is a <strong>2D infinite side scroller</strong> in which players dash through enemies and aim to gain as many points as possible. We completed this project in a single semester, during which I learned the basics of <strong>programming in Processing</strong>.

Our game was among the <strong>top 3 rated games</strong> of that semester.`,media:"https://www.youtube.com/embed/gVGPEba4fYc",tags:[Le.SCHOOL,Le.JAVA]}]),t=Et(()=>c.value.every(g=>g.enabled));to(()=>{u({tag:Le.HIGHLIGHTED})});const i=Et(()=>e.value.filter(g=>g.tags.some(p=>{var h;return(h=c.value.find(_=>p===_.value))==null?void 0:h.enabled}))),r=xr(!1),s=xr({title:"",description:"",media:"",tags:[],git_link:void 0,additional_link:void 0}),a=g=>{s.value.title=g.title,s.value.description=g.description,s.value.media=g.media,s.value.tags=g.tags,s.value.git_link=g.git_link,s.value.additional_link=g.additional_link,r.value=!0},o=()=>{r.value=!1},l=Object.keys(Le).map(g=>Le[g]),c=xr(l.map(g=>({value:g,enabled:!1}))),u=g=>{const p=c.value.find(h=>h.value===g.tag);p&&(p.enabled=!p.enabled)},d=()=>c.value.some(g=>g.enabled),f=()=>{const g=d();c.value.forEach(p=>p.enabled=!g)},m=()=>{c.value.forEach(g=>g.enabled=!0)};return(g,p)=>(Ze(),et("div",LM,[_e("div",RM,[_e("div",PM,[_e("div",DM,[IM,_e("div",FM,[NM,OM,_e("div",UM,[(Ze(!0),et(vt,null,zs(c.value,h=>(Ze(),Wi(Ja,{tag:h.value,clickable:!0,selected:h.enabled,onTagToggled:u},null,8,["tag","selected"]))),256)),_e("div",{class:"filters-toggle",onClick:p[0]||(p[0]=h=>f()),style:Gr({filter:d()?"none":"brightness(50%)"})},"Toggle all",4)]),_e("div",zM,[(Ze(!0),et(vt,null,zs(qt(i),h=>(Ze(),Wi(oM,{key:h.title,title:h.title,media:h.media,tags:h.tags,description:h.description,git_link:h.git_link,additional_link:h.additional_link,onCardClicked:a},null,8,["title","media","tags","description","git_link","additional_link"]))),128))]),qt(t)?Un("",!0):(Ze(),et("div",{key:0,class:"show-all",onClick:m},BM)),(Ze(),Wi(Ph,{to:"body"},[De(CM,{id:"always-on-top",visible:r.value,title:s.value.title,description:s.value.description,media:s.value.media,git_link:s.value.git_link,tags:s.value.tags,additional_link:s.value.additional_link,onClose:o},null,8,["visible","title","description","media","git_link","tags","additional_link"])]))])])])])]))}});const GM=Ot(HM,[["__scopeId","data-v-7092f214"]]);const VM={},WM={class:"max-width"},qM=io('<div class="container fade-in" data-v-553e2fdf><div class="center-content" data-v-553e2fdf><div class="title" data-v-553e2fdf> Contact Me </div><div class="seperator" data-v-553e2fdf></div><div class="icons" data-v-553e2fdf><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" data-v-553e2fdf><img src="https://img.icons8.com/ios/100/000000/mail.png" data-v-553e2fdf></a><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-553e2fdf><img src="https://img.icons8.com/ios/100/000000/linkedin-circled--v1.png" data-v-553e2fdf></a><a href="https://github.com/Chrisp-byte?tab=repositories" target="_blank" data-v-553e2fdf><img class="icon" src="https://img.icons8.com/ios11/100/000000/github.png" data-v-553e2fdf></a></div></div></div>',1),jM=[qM];function XM(n,e){return Ze(),et("div",WM,jM)}const $M=Ot(VM,[["render",XM],["__scopeId","data-v-553e2fdf"]]),YM=`\r
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
}`,ZM=`varying vec2 vUv;\r
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
}`,KM=`\r
varying vec2 vUv;\r
\r
void main(){\r
    vUv = uv;\r
\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,JM=`varying vec2 vUv;\r
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
}`;class QM extends Ka{constructor(t){super(t);ke(this,"speed",1);ke(this,"startZ",-250);ke(this,"segmentDist",0);ke(this,"mat");ke(this,"model");const i=getComputedStyle(document.documentElement).getPropertyValue("--color-background-dark").trim(),r=new lr(1e3,600,500,300);this.segmentDist=500/250,this.mat=new hn({vertexShader:YM,fragmentShader:ZM,uniforms:{uTime:{value:0},uFogColor:{value:new Ke(i)},uOffset:{value:0}}}),this.model=new Nt(r,this.mat),this.model.rotateX(-Math.PI/2),this.model.scale.setX(1),this.model.scale.setY(1),this.model.position.setY(-30),this.model.position.setZ(this.startZ),t.scene.add(this.model)}update(){this.mat.uniforms.uTime.value=this.scene.time;let t=this.scene.time%this.speed/this.speed;this.model.position.setZ(this.startZ+this.segmentDist*t),this.mat.uniforms.uOffset.value=this.segmentDist*Math.floor(this.scene.time/this.speed)}dispose(){this.scene.scene.remove(this.model)}}const eS=io('<div class="main" data-v-68652f5f><div class="canvas-viewport" data-v-68652f5f><canvas id="bg" data-v-68652f5f></canvas><div class="max-width" data-v-68652f5f><div class="name-container" data-v-68652f5f><div data-v-68652f5f><div class="name-1" data-v-68652f5f>Hi, I&#39;m</div><div class="name-2" data-v-68652f5f>Chris Lokhorst</div></div></div></div></div></div>',1),tS=Zt({__name:"Home",setup(n){let e=!1,t;return to(()=>{const i=document.querySelectorAll(".fade-in"),r=new IntersectionObserver((h,_)=>{h.forEach(S=>{S.isIntersecting&&(S.target.classList.add("show"),_.unobserve(S.target))})},{root:null,rootMargin:"0px 0px -100px 0px",threshold:0});i.forEach(h=>r.observe(h)),e=!0;const s=document.getElementById("bg");if(!s)return;const a=new ab,o=new Lt(75,s.offsetWidth/s.offsetHeight,.1,500),l=new Od({canvas:s,alpha:!0});l.setPixelRatio(window.devicePixelRatio),o.position.setZ(30),o.position.setX(0),t=new mb(a,o,l);const c=new db(16777215),u=new fb(16777215,.1);c.position.set(30,10,30),c.rotation.x=-90,c.rotation.y=45,c.angle=10,c.decay=2,t.scene.add(c),t.scene.add(u),t.addObject(new xb(t)),t.addObject(new QM(t));const d=new lr(240,240,1,1),f=new hn({vertexShader:KM,fragmentShader:JM,uniforms:{uTime:{value:0}},transparent:!0}),m=new Nt(d,f);m.position.setY(60),m.position.setZ(-470),t.scene.add(m),t.update(0);const g=new hb;function p(h){if(!e)return;t.update(h),g.getDelta();const _=g.getElapsedTime();f.uniforms.uTime.value=_,requestAnimationFrame(p)}p(0)}),Ua(()=>{e=!1,t.dispose()}),(i,r)=>(Ze(),et(vt,null,[eS,De(Zb),De(GM,{id:"projects-section"}),De($M,{id:"contact-section"})],64))}});const Ts=Ot(tS,[["__scopeId","data-v-68652f5f"]]);const nS=[{path:"/",component:Ts},{path:"/about",component:Ts},{path:"/projects",component:Ts},{path:"/contact",component:Ts}],iS=bm({history:Op(),routes:nS,scrollBehavior(n,e,t){if(n.hash)return{el:n.hash,behavior:"smooth"};let i="";switch(n.path){case"/about":i="#about-section";break;case"/projects":i="#projects-section";break;case"/contact":i="#contact-section";break;default:i="#home-section"}return i?{el:i,behavior:"smooth"}:{top:0}}}),kd=gp(Km);kd.use(iS);kd.mount("#app");
