/*! For license information please see 481.ea4438b8.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[481],{5341:function(e,a,r){"use strict";r.d(a,{FT:function(){return o}});var t=r(885),n=r(2791),i=r(3329),s=["as","disabled"];function o(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,i=e.rel,s=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=n||null!=i?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var l=n.forwardRef((function(e,a){var r=e.as,n=e.disabled,l=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s),c=o(Object.assign({tagName:r,disabled:n},l)),d=(0,t.Z)(c,2),f=d[0],u=d[1].tagName;return(0,i.jsx)(u,Object.assign({},l,f,{ref:a}))}));l.displayName="Button",a.ZP=l},1694:function(e,a){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)t.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},888:function(e,a,r){"use strict";var t=r(9047);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,r,n,i,s){if(s!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3360:function(e,a,r){"use strict";var t=r(1413),n=r(885),i=r(5987),s=r(1694),o=r.n(s),l=r(2791),c=r(5341),d=r(162),f=r(3329),u=["as","bsPrefix","variant","size","active","className"],v=l.forwardRef((function(e,a){var r=e.as,s=e.bsPrefix,l=e.variant,v=e.size,m=e.active,p=e.className,b=(0,i.Z)(e,u),x=(0,d.vE)(s,"btn"),y=(0,c.FT)((0,t.Z)({tagName:r},b)),h=(0,n.Z)(y,2),N=h[0],Z=h[1].tagName;return(0,f.jsx)(Z,(0,t.Z)((0,t.Z)((0,t.Z)({},N),b),{},{ref:a,className:o()(p,x,m&&"active",l&&"".concat(x,"-").concat(l),v&&"".concat(x,"-").concat(v),b.href&&b.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=v},2144:function(e,a,r){"use strict";r.d(a,{Z:function(){return R}});var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=r(2791),l=r(162),c=r(6543),d=r(7472),f=r(3329),u=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.variant,c=e.as,d=void 0===c?"img":c,v=(0,n.Z)(e,u),m=(0,l.vE)(r,"card-img");return(0,f.jsx)(d,(0,t.Z)({ref:a,className:s()(o?"".concat(m,"-").concat(o):m,i)},v))}));v.displayName="CardImg";var m=v,p=o.createContext(null);p.displayName="CardHeaderContext";var b=p,x=["bsPrefix","className","as"],y=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,c=e.as,d=void 0===c?"div":c,u=(0,n.Z)(e,x),v=(0,l.vE)(r,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(b.Provider,{value:m,children:(0,f.jsx)(d,(0,t.Z)((0,t.Z)({ref:a},u),{},{className:s()(i,v)}))})}));y.displayName="CardHeader";var h=y,N=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,d.Z)("h5"),g=(0,d.Z)("h6"),P=(0,c.Z)("card-body"),j=(0,c.Z)("card-title",{Component:Z}),C=(0,c.Z)("card-subtitle",{Component:g}),w=(0,c.Z)("card-link",{Component:"a"}),k=(0,c.Z)("card-text",{Component:"p"}),I=(0,c.Z)("card-footer"),O=(0,c.Z)("card-img-overlay"),F=o.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.bg,c=e.text,d=e.border,u=e.body,v=e.children,m=e.as,p=void 0===m?"div":m,b=(0,n.Z)(e,N),x=(0,l.vE)(r,"card");return(0,f.jsx)(p,(0,t.Z)((0,t.Z)({ref:a},b),{},{className:s()(i,x,o&&"bg-".concat(o),c&&"text-".concat(c),d&&"border-".concat(d)),children:u?(0,f.jsx)(P,{children:v}):v}))}));F.displayName="Card",F.defaultProps={body:!1};var R=Object.assign(F,{Img:m,Title:j,Subtitle:C,Body:P,Link:w,Text:k,Header:h,Footer:I,ImgOverlay:O})},3027:function(e,a,r){"use strict";r.d(a,{Z:function(){return ie}});var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(3329),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,n.Z)(e,f);return(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},m),{},{ref:a,className:s()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var m=v,p=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,m=e.isInvalid,y=void 0!==m&&m,h=e.as,N=void 0===h?"input":h,Z=(0,n.Z)(e,x),g=(0,c.useContext)(p).controlId;return i=(0,b.vE)(i,"form-check-input"),(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},Z),{},{ref:a,type:f,id:r||g,className:s()(o,i,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var h=y,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,n.Z)(e,N),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:s()(i,r)}))}));Z.displayName="FormCheckLabel";var g=Z;var P=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.disabled,v=void 0!==u&&u,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,Z=void 0!==N&&N,j=e.feedbackTooltip,C=void 0!==j&&j,w=e.feedback,k=e.feedbackType,I=e.className,O=e.style,F=e.title,R=void 0===F?"":F,E=e.type,T=void 0===E?"checkbox":E,S=e.label,_=e.children,z=e.as,L=void 0===z?"input":z,V=(0,n.Z)(e,P);i=(0,b.vE)(i,"form-check"),o=(0,b.vE)(o,"form-switch");var H=(0,c.useContext)(p).controlId,B=(0,c.useMemo)((function(){return{controlId:r||H}}),[H,r]),D=!_&&null!=S&&!1!==S||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(_,g),A=(0,d.jsx)(h,(0,t.Z)((0,t.Z)({},V),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:y,isInvalid:Z,disabled:v,as:L}));return(0,d.jsx)(p.Provider,{value:B,children:(0,d.jsx)("div",{style:O,className:s()(I,D&&i,f&&"".concat(i,"-inline"),"switch"===T&&o),children:_||(0,d.jsxs)(d.Fragment,{children:[A,D&&(0,d.jsx)(g,{title:R,children:S}),w&&(0,d.jsx)(m,{type:k,tooltip:C,children:w})]})})})}));j.displayName="FormCheck";var C=Object.assign(j,{Input:h,Label:g}),w=r(4942),k=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,Z=e.plaintext,g=e.readOnly,P=e.as,j=void 0===P?"input":P,C=(0,n.Z)(e,k),I=(0,c.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?r=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,w.Z)(i,o,!0),(0,w.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},C),{},{type:l,size:u,ref:a,readOnly:g,id:v||I,className:s()(m,r,y&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));I.displayName="FormControl";var O=Object.assign(I,{Feedback:m}),F=(0,r(6543).Z)("form-floating"),R=["controlId","as"],E=c.forwardRef((function(e,a){var r=e.controlId,i=e.as,s=void 0===i?"div":i,o=(0,n.Z)(e,R),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(s,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));E.displayName="FormGroup";var T=E,S=r(885),_=["as","bsPrefix","className"],z=["className"];var L=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,i=e.className,o=(0,n.Z)(e,_);r=(0,b.vE)(r,"col");var l=(0,b.pi)(),c=[],d=[];return l.forEach((function(e){var a,t,n,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,n=i.order):a=i;var s="xs"!==e?"-".concat(e):"";a&&c.push(!0===a?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(a)),null!=n&&d.push("order".concat(s,"-").concat(n)),null!=t&&d.push("offset".concat(s,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},o),{},{className:s().apply(void 0,[i].concat(c,d))}),{as:a,bsPrefix:r,spans:c}]}(e),i=(0,S.Z)(r,2),o=i[0],l=o.className,c=(0,n.Z)(o,z),f=i[1],u=f.as,v=void 0===u?"div":u,m=f.bsPrefix,p=f.spans;return(0,d.jsx)(v,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(l,!p.length&&m)}))}));L.displayName="Col";var V=L,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],B=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,m=(0,n.Z)(e,H),x=(0,c.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var h=s()(u,o,f&&"visually-hidden",l&&y);return v=v||x,l?(0,d.jsx)(V,(0,t.Z)({ref:a,as:"label",className:h,htmlFor:v},m)):(0,d.jsx)(i,(0,t.Z)({ref:a,className:h,htmlFor:v},m))}));B.displayName="FormLabel",B.defaultProps={column:!1,visuallyHidden:!1};var D=B,A=["bsPrefix","className","id"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=(0,n.Z)(e,A),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:s()(i,r),id:o||f}))}));U.displayName="FormRange";var M=U,W=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],G=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,m=void 0!==v&&v,x=e.id,y=(0,n.Z)(e,W),h=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},y),{},{size:o,ref:a,className:s()(l,r,i&&"".concat(r,"-").concat(i),u&&"is-valid",m&&"is-invalid"),id:x||h}))}));G.displayName="FormSelect";var q=G,K=["bsPrefix","className","as","muted"],Y=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,n.Z)(e,K);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:s()(i,r,c&&"text-muted")}))}));Y.displayName="FormText";var J=Y,Q=c.forwardRef((function(e,a){return(0,d.jsx)(C,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));Q.displayName="Switch";var X=Object.assign(Q,{Input:C.Input,Label:C.Label}),$=["bsPrefix","className","children","controlId","label"],ee=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,c=e.label,f=(0,n.Z)(e,$);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(T,(0,t.Z)((0,t.Z)({ref:a,className:s()(i,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));ee.displayName="FloatingLabel";var ae=ee,re=["className","validated","as"],te={_ref:l().any,validated:l().bool,as:l().elementType},ne=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,n.Z)(e,re);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(r,i&&"was-validated")}))}));ne.displayName="Form",ne.propTypes=te;var ie=Object.assign(ne,{Group:T,Control:O,Floating:F,Check:C,Switch:X,Label:D,Text:J,Range:M,Select:q,FloatingLabel:ae})},162:function(e,a,r){"use strict";r.d(a,{Hz:function(){return n},pi:function(){return o},vE:function(){return s}});var t=r(2791),n=(r(3329),["xxl","xl","lg","md","sm","xs"]),i=t.createContext({prefixes:{},breakpoints:n});i.Consumer,i.Provider;function s(e,a){var r=(0,t.useContext)(i).prefixes;return e||r[a]||a}function o(){return(0,t.useContext)(i).breakpoints}},6543:function(e,a,r){"use strict";r.d(a,{Z:function(){return v}});var t=r(1413),n=r(5987),i=r(1694),s=r.n(i),o=/-(.)/g;var l=r(2791),c=r(162),d=r(3329),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?u(e):r,o=a.Component,v=a.defaultProps,m=l.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,u=a.as,v=void 0===u?o||"div":u,m=(0,n.Z)(a,f),p=(0,c.vE)(l,e);return(0,d.jsx)(v,(0,t.Z)({ref:r,className:s()(i,p)},m))}));return m.defaultProps=v,m.displayName=i,m}},7472:function(e,a,r){"use strict";var t=r(1413),n=r(2791),i=r(1694),s=r.n(i),o=r(3329);a.Z=function(e){return n.forwardRef((function(a,r){return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({},a),{},{ref:r,className:s()(a.className,e)}))}))}},2391:function(e){"use strict";var a=function(){};e.exports=a},5987:function(e,a,r){"use strict";r.d(a,{Z:function(){return n}});var t=r(3366);function n(e,a){if(null==e)return{};var r,n,i=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},3366:function(e,a,r){"use strict";function t(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=481.ea4438b8.chunk.js.map