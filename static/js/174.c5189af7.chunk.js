/*! For license information please see 174.c5189af7.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[174],{6561:function(e,r,t){"use strict";t.r(r);var n=t(2144),s=t(3027),o=t(3360),a=t(184);r.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{className:"justify-content-center p-3 mx-auto mt-5",style:{width:"25rem"},children:(0,a.jsxs)(s.Z,{className:"mb-3 p-2",children:[(0,a.jsx)("h2",{className:"mb-3 p-2 text-center",children:"Registration"}),(0,a.jsxs)(s.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,a.jsx)(s.Z.Label,{children:"Name"}),(0,a.jsx)(s.Z.Control,{type:"name",placeholder:"Your name",autoFocus:!0})]}),(0,a.jsxs)(s.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,a.jsx)(s.Z.Label,{children:"Email address"}),(0,a.jsx)(s.Z.Control,{type:"email",placeholder:"name@example.com",autoFocus:!0})]}),(0,a.jsxs)(s.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,a.jsx)(s.Z.Label,{children:"Password"}),(0,a.jsx)(s.Z.Control,{type:"passsword",placeholder:"Passsword"})]}),(0,a.jsx)(s.Z.Group,{className:"mb-3 text-center",children:(0,a.jsx)(o.Z,{variant:"outline-info",type:"button",className:"ms-auto",children:"Register"})}),(0,a.jsx)(s.Z.Group,{className:"text-center",children:(0,a.jsx)(o.Z,{variant:"outline-info",type:"button",className:"ms-auto",children:"I am already registered"})})]})}),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Z,{className:"justify-content-center p-3 mx-auto mt-5",style:{width:"25rem"},children:[(0,a.jsx)("h2",{className:"mb-3 p-2 text-center",children:"Sign In"}),(0,a.jsxs)(s.Z,{className:"mb-3 p-2",children:[(0,a.jsxs)(s.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,a.jsx)(s.Z.Label,{children:"Email address"}),(0,a.jsx)(s.Z.Control,{type:"email",placeholder:"Email"})]}),(0,a.jsxs)(s.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,a.jsx)(s.Z.Label,{children:"Password"}),(0,a.jsx)(s.Z.Control,{type:"passsword",placeholder:"Passsword"})]}),(0,a.jsx)(s.Z.Group,{className:"text-center",children:(0,a.jsx)(o.Z,{variant:"outline-info",type:"button",className:"ms-auto",children:"Sign in"})})]})]})})]})}},1694:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=s.apply(null,t);a&&e.push(a)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var i in t)n.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()},888:function(e,r,t){"use strict";var n=t(9047);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,r,t,s,o,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:s};return t.PropTypes=t,t}},2007:function(e,r,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},162:function(e,r,t){"use strict";t.d(r,{Hz:function(){return s},pi:function(){return i},vE:function(){return a}});var n=t(2791),s=(t(184),["xxl","xl","lg","md","sm","xs"]),o=n.createContext({prefixes:{},breakpoints:s});o.Consumer,o.Provider;function a(e,r){var t=(0,n.useContext)(o).prefixes;return e||t[r]||r}function i(){return(0,n.useContext)(o).breakpoints}},6543:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(1413),s=t(5987),o=t(1694),a=t.n(o),i=/-(.)/g;var c=t(2791),l=t(162),u=t(184),p=["className","bsPrefix","as"],m=function(e){return e[0].toUpperCase()+(r=e,r.replace(i,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function f(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.displayName,o=void 0===t?m(e):t,i=r.Component,f=r.defaultProps,d=c.forwardRef((function(r,t){var o=r.className,c=r.bsPrefix,m=r.as,f=void 0===m?i||"div":m,d=(0,s.Z)(r,p),x=(0,l.vE)(c,e);return(0,u.jsx)(f,(0,n.Z)({ref:t,className:a()(o,x)},d))}));return d.defaultProps=f,d.displayName=o,d}},7472:function(e,r,t){"use strict";var n=t(1413),s=t(2791),o=t(1694),a=t.n(o),i=t(184);r.Z=function(e){return s.forwardRef((function(r,t){return(0,i.jsx)("div",(0,n.Z)((0,n.Z)({},r),{},{ref:t,className:a()(r.className,e)}))}))}},5987:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(3366);function s(e,r){if(null==e)return{};var t,s,o=(0,n.Z)(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},3366:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=174.c5189af7.chunk.js.map