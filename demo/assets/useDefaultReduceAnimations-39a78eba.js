import{a5 as E,r as l,V as g,a6 as w}from"./index-572b801d.js";import{g as R}from"./Stack-f7c116fc.js";function v(e,o,t,s,a){const[r,d]=l.useState(()=>a&&t?t(e).matches:s?s(e).matches:o);return g(()=>{let u=!0;if(!t)return;const n=t(e),f=()=>{u&&d(n.matches)};return f(),n.addListener(f),()=>{u=!1,n.removeListener(f)}},[e,t]),r}const S=w["useSyncExternalStore"];function Q(e,o,t,s,a){const r=l.useCallback(()=>o,[o]),d=l.useMemo(()=>{if(a&&t)return()=>t(e).matches;if(s!==null){const{matches:c}=s(e);return()=>c}return r},[r,e,s,a,t]),[u,n]=l.useMemo(()=>{if(t===null)return[r,()=>()=>{}];const c=t(e);return[()=>c.matches,m=>(c.addListener(m),()=>{c.removeListener(m)})]},[r,t,e]);return S(n,u,d)}function y(e,o={}){const t=E(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:r=s?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:u=!1}=R({name:"MuiUseMediaQuery",props:o,theme:t});let n=typeof e=="function"?e(t):e;return n=n.replace(/^@media( ?)/m,""),(S!==void 0?Q:v)(n,a,r,d,u)}const L="@media (prefers-reduced-motion: reduce)",i=typeof navigator<"u"&&navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i),p=i&&i[1]?parseInt(i[1],10):null,h=i&&i[2]?parseInt(i[2],10):null,M=p&&p<10||h&&h<13||!1,O=()=>y(L,{defaultMatches:!1})||M;export{O as a,y as u};