import{a as j,g as D,s as L,B as V,_ as d,Q as X,r as U,b as A,z as Z,T as O,j as S,d as _,h as W,c as T,e as H,u as ee,U as oe,Y as M}from"./index-c0aa72f3.js";import{S as te}from"./Stack-3ec27118.js";function ae(e){return j("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:s,disabled:r,edge:a}=e,t={root:["root",s&&"checked",r&&"disabled",a&&`edge${T(a)}`],input:["input"]};return H(t,ae,o)},re=L(V)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ne=L("input",{shouldForwardProp:X})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=U.forwardRef(function(o,s){const{autoFocus:r,checked:a,checkedIcon:t,className:f,defaultChecked:F,disabled:p,disableFocusRipple:g=!1,edge:R=!1,icon:w,id:v,inputProps:x,inputRef:$,name:q,onBlur:b,onChange:C,onFocus:m,readOnly:B,required:I=!1,tabIndex:P,type:n,value:h}=o,i=A(o,se),[u,Q]=Z({controlled:a,default:!!F,name:"SwitchBase",state:"checked"}),c=O(),Y=l=>{m&&m(l),c&&c.onFocus&&c.onFocus(l)},G=l=>{b&&b(l),c&&c.onBlur&&c.onBlur(l)},J=l=>{if(l.nativeEvent.defaultPrevented)return;const E=l.target.checked;Q(E),C&&C(l,E)};let y=p;c&&typeof y>"u"&&(y=c.disabled);const K=n==="checkbox"||n==="radio",N=d({},o,{checked:u,disabled:y,disableFocusRipple:g,edge:R}),z=le(N);return S(re,d({component:"span",className:_(z.root,f),centerRipple:!0,focusRipple:!g,disabled:y,tabIndex:null,role:void 0,onFocus:Y,onBlur:G,ownerState:N,ref:s},i,{children:[W(ne,d({autoFocus:r,checked:a,defaultChecked:F,className:z.input,disabled:y,id:K?v:void 0,name:q,onChange:J,readOnly:B,ref:$,required:I,ownerState:N,tabIndex:P,type:n},n==="checkbox"&&h===void 0?{}:{value:h},x)),u?t:w]}))}),Ce=ie;function ce(e){return j("MuiFormControlLabel",e)}const de=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),k=de,ue=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],pe=e=>{const{classes:o,disabled:s,labelPlacement:r,error:a,required:t}=e,f={root:["root",s&&"disabled",`labelPlacement${T(r)}`,a&&"error",t&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",a&&"error"]};return H(f,ce,o)},be=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${k.label}`]:o.label},o.root,o[`labelPlacement${T(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${k.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${k.label}`]:{[`&.${k.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),me=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${k.error}`]:{color:(e.vars||e).palette.error.main}})),he=U.forwardRef(function(o,s){var r,a;const t=ee({props:o,name:"MuiFormControlLabel"}),{className:f,componentsProps:F={},control:p,disabled:g,disableTypography:R,label:w,labelPlacement:v="end",required:x,slotProps:$={}}=t,q=A(t,ue),b=O(),C=(r=g??p.props.disabled)!=null?r:b==null?void 0:b.disabled,m=x??p.props.required,B={disabled:C,required:m};["checked","name","onChange","value","inputRef"].forEach(u=>{typeof p.props[u]>"u"&&typeof t[u]<"u"&&(B[u]=t[u])});const I=oe({props:t,muiFormControl:b,states:["error"]}),P=d({},t,{disabled:C,labelPlacement:v,required:m,error:I.error}),n=pe(P),h=(a=$.typography)!=null?a:F.typography;let i=w;return i!=null&&i.type!==M&&!R&&(i=W(M,d({component:"span"},h,{className:_(n.label,h==null?void 0:h.className),children:i}))),S(be,d({className:_(n.root,f),ownerState:P,ref:s},q,{children:[U.cloneElement(p,B),m?S(te,{display:"block",children:[i,S(me,{ownerState:P,"aria-hidden":!0,className:n.asterisk,children:[" ","*"]})]}):i]}))}),Pe=he;export{Pe as F,Ce as S};