import{c as x,d as m,P as f,_ as o,j as D,k as T}from"./convertFieldResponseIntoMuiTextFieldProps-e6dc2e32.js";import{r as I,N as M,j as b}from"./index-011d3e15.js";import{u as h}from"./useDateField-225ecb06.js";import{M as j}from"./TextField-8c1eb60c.js";const R=["slots","slotProps","InputProps","inputProps"],y=I.forwardRef(function(p,n){const r=x({props:p,name:"MuiDateField"}),{slots:t,slotProps:s,InputProps:a,inputProps:d}=r,l=m(r,R),c=r,i=(t==null?void 0:t.textField)??(p.enableAccessibleFieldDOMStructure?f:j),e=M({elementType:i,externalSlotProps:s==null?void 0:s.textField,externalForwardedProps:l,additionalProps:{ref:n},ownerState:c});e.inputProps=o({},d,e.inputProps),e.InputProps=o({},a,e.InputProps);const u=h(e),P=D(u),F=T(o({},P,{slots:t,slotProps:s}));return b(i,o({},F))});export{y as D};