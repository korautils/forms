import{R as Z,r as P,j as ue}from"./index-572b801d.js";import{M as Ae}from"./TextField-508d557b.js";function ge(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function W(){}function Ee(e){var r,a=void 0;return function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r&&n.length===r.length&&n.every(function(i,f){return i===r[f]})||(r=n,a=e.apply(void 0,n)),a}}function ee(e){return!!(e||"").match(/\d/)}function q(e){return e==null}function Te(e){return typeof e=="number"&&isNaN(e)}function me(e){return q(e)||Te(e)||typeof e=="number"&&!isFinite(e)}function he(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Be(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Oe(e,r,a){var n=Be(a),t=e.search(/[1-9]/);return t=t===-1?e.length:t,e.substring(0,t)+e.substring(t,e.length).replace(n,"$1"+r)}function Fe(e){var r=P.useRef(e);r.current=e;var a=P.useRef(function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.current.apply(r,n)});return a.current}function fe(e,r){r===void 0&&(r=!0);var a=e[0]==="-",n=a&&r;e=e.replace("-","");var t=e.split("."),i=t[0],f=t[1]||"";return{beforeDecimal:i,afterDecimal:f,hasNegation:a,addNegation:n}}function _e(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var a=e.split("."),n=a[0].replace(/^0+/,"")||"0",t=a[1]||"";return(r?"-":"")+n+(t?"."+t:"")}function Se(e,r,a){for(var n="",t=a?"0":"",i=0;i<=r-1;i++)n+=e[i]||t;return n}function ve(e,r){return Array(r+1).join(e)}function xe(e){var r=e+"",a=r[0]==="-"?"-":"";a&&(r=r.substring(1));var n=r.split(/[eE]/g),t=n[0],i=n[1];if(i=Number(i),!i)return a+t;t=t.replace(".","");var f=1+i,m=t.length;return f<0?t="0."+ve("0",Math.abs(f))+t:f>=m?t=t+ve("0",f-m):t=(t.substring(0,f)||"0")+"."+t.substring(f),a+t}function se(e,r,a){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||a)&&r,t=fe(e),i=t.beforeDecimal,f=t.afterDecimal,m=t.hasNegation,p=parseFloat("0."+(f||"0")),V=f.length<=r?"0."+f:p.toFixed(r),S=V.split("."),g=i.split("").reverse().reduce(function(w,N,d){return w.length>d?(Number(w[0])+Number(N)).toString()+w.substring(1,w.length):N+w},S[0]),h=Se(S[1]||"",r,a),x=m?"-":"",l=n?".":"";return""+x+g+l+h}function z(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",r),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var pe=Ee(function(e,r){for(var a=0,n=0,t=e.length,i=r.length;e[a]===r[a]&&a<t;)a++;for(;e[t-1-n]===r[i-1-n]&&i-n>a&&t-n>a;)n++;return{from:{start:a,end:t-n},to:{start:a,end:i-n}}});function Pe(e,r,a){return Math.min(Math.max(e,r),a)}function oe(e){return Math.max(e.selectionStart,e.selectionEnd)}function Le(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Me(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function je(e){var r=e.currentValue,a=e.formattedValue,n=e.currentValueIndex,t=e.formattedValueIndex;return r[n]===a[t]}function ke(e,r,a,n,t,i,f){f===void 0&&(f=je);var m=t.findIndex(function(k){return k}),p=e.slice(0,m);!r&&!a.startsWith(p)&&(r=p,a=p+a,n=n+p.length);for(var V=a.length,S=e.length,g={},h=new Array(V),x=0;x<V;x++){h[x]=-1;for(var l=0,w=S;l<w;l++){var N=f({currentValue:a,lastValue:r,formattedValue:e,currentValueIndex:x,formattedValueIndex:l});if(N&&g[l]!==!0){h[x]=l,g[l]=!0;break}}}for(var d=n;d<V&&(h[d]===-1||!i(a[d]));)d++;var O=d===V||h[d]===-1?S:h[d];for(d=n-1;d>0&&h[d]===-1;)d--;var _=d===-1||h[d]===-1?0:h[d]+1;return _>O?O:n-_<O-n?_:O}function ce(e,r,a,n){var t=e.length;if(r=Pe(r,0,t),n==="left"){for(;r>=0&&!a[r];)r--;r===-1&&(r=a.indexOf(!0))}else{for(;r<=t&&!a[r];)r++;r>t&&(r=a.lastIndexOf(!0))}return r===-1&&(r=t),r}function Ke(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),a=0,n=r.length;a<n;a++)r[a]=!!(ee(e[a])||ee(e[a-1]));return r}function Ve(e,r,a,n,t,i){i===void 0&&(i=W);var f=Fe(function(l,w){var N,d;return me(l)?(d="",N=""):typeof l=="number"||w?(d=typeof l=="number"?xe(l):l,N=n(d)):(d=t(l,void 0),N=n(d)),{formattedValue:N,numAsString:d}}),m=P.useState(function(){return f(q(e)?r:e,a)}),p=m[0],V=m[1],S=function(l,w){l.formattedValue!==p.formattedValue&&V({formattedValue:l.formattedValue,numAsString:l.value}),i(l,w)},g=e,h=a;q(e)&&(g=p.numAsString,h=!0);var x=f(g,h);return P.useMemo(function(){V(x)},[x.formattedValue]),[p,S]}function $e(e){return e.replace(/[^0-9]/g,"")}function Ue(e){return e}function We(e){var r=e.type;r===void 0&&(r="text");var a=e.displayType;a===void 0&&(a="input");var n=e.customInput,t=e.renderText,i=e.getInputRef,f=e.format;f===void 0&&(f=Ue);var m=e.removeFormatting;m===void 0&&(m=$e);var p=e.defaultValue,V=e.valueIsNumericString,S=e.onValueChange,g=e.isAllowed,h=e.onChange;h===void 0&&(h=W);var x=e.onKeyDown;x===void 0&&(x=W);var l=e.onMouseUp;l===void 0&&(l=W);var w=e.onFocus;w===void 0&&(w=W);var N=e.onBlur;N===void 0&&(N=W);var d=e.value,O=e.getCaretBoundary;O===void 0&&(O=Ke);var _=e.isValidInputCharacter;_===void 0&&(_=ee);var k=e.isCharacterSame,L=ge(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=Ve(d,p,!!V,f,m,S),K=G[0],y=K.formattedValue,M=K.numAsString,$=G[1],j=P.useRef({formattedValue:y,numAsString:M}),H=function(o,u){j.current={formattedValue:o.formattedValue,numAsString:o.value},$(o,u)},U=P.useState(!1),J=U[0],Q=U[1],v=P.useRef(null),s=P.useRef({setCaretTimeout:null,focusTimeout:null});P.useEffect(function(){return Q(!0),function(){clearTimeout(s.current.setCaretTimeout),clearTimeout(s.current.focusTimeout)}},[]);var T=f,D=function(o,u){var c=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(c)?void 0:c}},I=function(o,u,c){o.selectionStart===0&&o.selectionEnd===o.value.length||(z(o,u),s.current.setCaretTimeout=setTimeout(function(){o.value===c&&o.selectionStart!==o.selectionEnd&&z(o,u)},0))},A=function(o,u,c){return ce(o,u,O(o),c)},F=function(o,u,c){var C=O(u),R=ke(u,y,o,c,C,_,k);return R=ce(u,R,C),R},re=function(o){var u=o.formattedValue;u===void 0&&(u="");var c=o.input,C=o.setCaretPosition;C===void 0&&(C=!0);var R=o.source,b=o.event,E=o.numAsString,B=o.caretPos;if(c){if(B===void 0&&C){var X=o.inputValue||c.value,ie=oe(c);c.value=u,B=F(X,u,ie)}c.value=u,C&&B!==void 0&&I(c,B,u)}u!==y&&H(D(u,E),{event:b,source:R})};P.useEffect(function(){var o=j.current,u=o.formattedValue,c=o.numAsString;y!==u&&(y!==M||u!==c)&&H(D(y,M),{event:void 0,source:Y.props})},[y,M]);var ne=v.current?oe(v.current):void 0,ae=typeof window<"u"?P.useLayoutEffect:P.useEffect;ae(function(){var o=v.current;if(y!==j.current.formattedValue&&o){var u=F(j.current.formattedValue,y,ne);o.value=y,I(o,u,y)}},[y]);var ye=function(o,u,c){var C=pe(y,o),R=Object.assign(Object.assign({},C),{lastValue:y}),b=m(o,R),E=T(b);if(b=m(E,void 0),g&&!g(D(E,b))){var B=u.target,X=oe(B),ie=F(o,y,X);return B.value=y,I(B,ie,y),!1}return re({formattedValue:E,numAsString:b,inputValue:o,event:u,source:c,setCaretPosition:!0,input:u.target}),!0},we=function(o){var u=o.target,c=u.value,C=ye(c,o,Y.event);C&&h(o)},Ne=function(o){var u=o.target,c=o.key,C=u.selectionStart,R=u.selectionEnd,b=u.value;b===void 0&&(b="");var E;if(c==="ArrowLeft"||c==="Backspace"?E=Math.max(C-1,0):c==="ArrowRight"?E=Math.min(C+1,b.length):c==="Delete"&&(E=C),E===void 0||C!==R){x(o);return}var B=E;if(c==="ArrowLeft"||c==="ArrowRight"){var X=c==="ArrowLeft"?"left":"right";B=A(b,E,X),B!==E&&o.preventDefault()}else c==="Delete"&&!_(b[E])?B=A(b,E,"right"):c==="Backspace"&&!_(b[E])&&(B=A(b,E,"left"));B!==E&&I(u,B,b),o.isUnitTestRun&&I(u,B,b),x(o)},be=function(o){var u=o.target,c=u.selectionStart,C=u.selectionEnd,R=u.value;if(R===void 0&&(R=""),c===C){var b=A(R,c);b!==c&&I(u,b,R)}l(o)},De=function(o){o.persist&&o.persist();var u=o.target;v.current=u,s.current.focusTimeout=setTimeout(function(){var c=u.selectionStart,C=u.selectionEnd,R=u.value;R===void 0&&(R="");var b=A(R,c);b!==c&&!(c===0&&C===R.length)&&I(u,b,R),w(o)},0)},Ie=function(o){v.current=null,clearTimeout(s.current.focusTimeout),clearTimeout(s.current.setCaretTimeout),N(o)},Ce=J&&Le()?"numeric":void 0,le=Object.assign({inputMode:Ce},L,{type:r,value:y,onChange:we,onKeyDown:Ne,onMouseUp:be,onFocus:De,onBlur:Ie});if(a==="text")return t?Z.createElement(Z.Fragment,null,t(y,L)||null):Z.createElement("span",Object.assign({},L,{ref:i}),y);if(n){var Re=n;return Z.createElement(Re,Object.assign({},le,{ref:i}))}return Z.createElement("input",Object.assign({},le,{ref:i}))}function de(e,r){var a=r.decimalScale,n=r.fixedDecimalScale,t=r.prefix;t===void 0&&(t="");var i=r.suffix;i===void 0&&(i="");var f=r.allowNegative,m=r.thousandsGroupStyle;if(m===void 0&&(m="thousand"),e===""||e==="-")return e;var p=te(r),V=p.thousandSeparator,S=p.decimalSeparator,g=a!==0&&e.indexOf(".")!==-1||a&&n,h=fe(e,f),x=h.beforeDecimal,l=h.afterDecimal,w=h.addNegation;return a!==void 0&&(l=Se(l,a,!!n)),V&&(x=Oe(x,V,m)),t&&(x=t+x),i&&(l=l+i),w&&(x="-"+x),e=x+(g&&S||"")+l,e}function te(e){var r=e.decimalSeparator;r===void 0&&(r=".");var a=e.thousandSeparator,n=e.allowedDecimalSeparators;return a===!0&&(a=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:a,allowedDecimalSeparators:n}}function Ge(e,r){e===void 0&&(e="");var a=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),t=a.test(e),i=n.test(e);return e=e.replace(/-/g,""),t&&!i&&r&&(e="-"+e),e}function Ze(e,r){return new RegExp("(^-)|[0-9]|"+he(e),r?"g":void 0)}function ze(e,r,a){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(a!=null&&a.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function He(e,r,a){var n;r===void 0&&(r=Me(e));var t=a.allowNegative,i=a.prefix;i===void 0&&(i="");var f=a.suffix;f===void 0&&(f="");var m=a.decimalScale,p=r.from,V=r.to,S=V.start,g=V.end,h=te(a),x=h.allowedDecimalSeparators,l=h.decimalSeparator,w=e[g]===l;if(ee(e)&&(e===i||e===f)&&r.lastValue==="")return e;if(g-S===1&&x.indexOf(e[S])!==-1){var N=m===0?"":l;e=e.substring(0,S)+N+e.substring(S+1,e.length)}var d=function(s,T,D){var I=!1,A=!1;i.startsWith("-")?I=!1:s.startsWith("--")?(I=!1,A=!0):f.startsWith("-")&&s.length===f.length?I=!1:s[0]==="-"&&(I=!0);var F=I?1:0;return A&&(F=2),F&&(s=s.substring(F),T-=F,D-=F),{value:s,start:T,end:D,hasNegation:I}},O=d(e,S,g),_=O.hasNegation;n=O,e=n.value,S=n.start,g=n.end;var k=d(r.lastValue,p.start,p.end),L=k.start,G=k.end,K=k.value,y=e.substring(S,g);e.length&&K.length&&(L>K.length-f.length||G<i.length)&&!(y&&f.startsWith(y))&&(e=K);var M=0;e.startsWith(i)?M+=i.length:S<i.length&&(M=S),e=e.substring(M),g-=M;var $=e.length,j=e.length-f.length;e.endsWith(f)?$=j:(g>j||g>e.length-f.length)&&($=g),e=e.substring(0,$),e=Ge(_?"-"+e:e,t),e=(e.match(Ze(l,!0))||[]).join("");var H=e.indexOf(l);e=e.replace(new RegExp(he(l),"g"),function(s,T){return T===H?".":""});var U=fe(e,t),J=U.beforeDecimal,Q=U.afterDecimal,v=U.addNegation;return V.end-V.start<p.end-p.start&&J===""&&w&&!parseFloat(Q)&&(e=v?"-":""),e}function qe(e,r){var a=r.prefix;a===void 0&&(a="");var n=r.suffix;n===void 0&&(n="");var t=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";t.fill(!1,0,a.length+(i?1:0));var f=e.length;return t.fill(!1,f-n.length+1,f+1),t}function Je(e){var r=te(e),a=r.thousandSeparator,n=r.decimalSeparator,t=e.prefix;t===void 0&&(t="");var i=e.allowNegative;if(i===void 0&&(i=!0),a===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return t.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+t+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function Qe(e){e=Je(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,n=e.allowLeadingZeros,t=e.onKeyDown;t===void 0&&(t=W);var i=e.onBlur;i===void 0&&(i=W);var f=e.thousandSeparator,m=e.decimalScale,p=e.fixedDecimalScale,V=e.prefix;V===void 0&&(V="");var S=e.defaultValue,g=e.value,h=e.valueIsNumericString,x=e.onValueChange,l=ge(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),w=te(e),N=w.decimalSeparator,d=w.allowedDecimalSeparators,O=function(v){return de(v,e)},_=function(v,s){return He(v,s,e)},k=q(g)?S:g,L=h??ze(k,V,r);q(g)?q(S)||(L=L||typeof S=="number"):L=L||typeof g=="number";var G=function(v){return me(v)?v:(typeof v=="number"&&(v=xe(v)),L&&typeof m=="number"?se(v,m,!!p):v)},K=Ve(G(g),G(S),!!L,O,_,x),y=K[0],M=y.numAsString,$=y.formattedValue,j=K[1],H=function(v){var s=v.target,T=v.key,D=s.selectionStart,I=s.selectionEnd,A=s.value;if(A===void 0&&(A=""),D!==I){t(v);return}T==="Backspace"&&A[0]==="-"&&D===V.length+1&&a&&z(s,1),m&&p&&(T==="Backspace"&&A[D-1]===N?(z(s,D-1),v.preventDefault()):T==="Delete"&&A[D]===N&&v.preventDefault()),d!=null&&d.includes(T)&&A[D]===N&&z(s,D+1);var F=f===!0?",":f;T==="Backspace"&&A[D-1]===F&&z(s,D-1),T==="Delete"&&A[D]===F&&z(s,D+1),t(v)},U=function(v){var s=M;if(s.match(/\d/g)||(s=""),n||(s=_e(s)),p&&m&&(s=se(s,m,p)),s!==M){var T=de(s,e);j({formattedValue:T,value:s,floatValue:parseFloat(s)},{event:v,source:Y.event})}i(v)},J=function(v){return v===N?!0:ee(v)},Q=function(v){var s=v.currentValue,T=v.lastValue,D=v.formattedValue,I=v.currentValueIndex,A=v.formattedValueIndex,F=s[I],re=D[A],ne=pe(T,s),ae=ne.to;return I>=ae.start&&I<ae.end&&d&&d.includes(F)&&re===N?!0:F===re};return Object.assign(Object.assign({},l),{value:$,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:Q,onValueChange:j,format:O,removeFormatting:_,getCaretBoundary:function(v){return qe(v,e)},onKeyDown:H,onBlur:U})}function Xe(e){var r=Qe(e);return Z.createElement(We,Object.assign({},r))}const Ye=Z.forwardRef(function(r,a){const{onChange:n,...t}=r;return ue(Xe,{...t,getInputRef:a,onValueChange:i=>{n({target:{name:r.name,value:i.value}})},thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"})}),er=({key:e,forwardRef:r,id:a,name:n,className:t="",size:i="small",label:f="",variant:m="outlined",fullWidth:p=!0,error:V=!1,required:S=!1,pattern:g,minLength:h,maxLength:x,helperText:l,disabled:w=!1,onChange:N,...d})=>ue(Ae,{ref:r,className:t,id:a,name:n,size:i,label:f,required:S,value:d.value,disabled:w,variant:m,onChange:N,fullWidth:p,helperText:l,error:V,InputProps:{inputComponent:Ye},...d},e),rr=P.forwardRef((e,r)=>ue(er,{...e,forwardRef:r}));rr.displayName="InputPrice";export{rr as default};