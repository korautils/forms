import{R as l,j as f}from"./index-572b801d.js";import{M as d}from"./TextField-508d557b.js";const i=l.forwardRef(function({value:r,onChange:a,pattern:e,...o},c){const{formHandler:m,...s}=o;return f(d,{...s,value:r,onChange:t=>{const{value:n}=t.target;if(!e||n===""||new RegExp(e).test(n)){a(t);return}}})}),p=i;export{p as default};