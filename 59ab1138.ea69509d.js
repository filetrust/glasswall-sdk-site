(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{123:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(236)),i=t(238),c={title:"2.1.1 Product Description",sidebar_label:"2.1.1 Product Description"},l={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_1-product_description",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_1-product_description",isDocsHomePage:!1,title:"2.1.1 Product Description",description:"Glasswall Features",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_1-product_description.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_1-product_description",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_1-product_description",version:"current",sidebar_label:"2.1.1 Product Description",sidebar:"someSidebar",previous:{title:"Office Open XML",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/ooxml"},next:{title:"2.1.2.1 Overview",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_1-overview"}},s=[],u={rightToc:s};function p(e){var r=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,c,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../artifacts/glasswall_features"}),"Glasswall Features"),"  "),Object(a.b)("p",null,Object(a.b)("a",{target:"_blank",href:t(306).default},"Rebuild Product Description")," ",Object(a.b)("img",{alt:"OOXML Document",src:Object(i.a)("img/docx_icon.png")})))}p.isMDXComponent=!0},236:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},237:function(e,r,t){"use strict";var n=t(0),o=t(20);r.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},238:function(e,r,t){"use strict";t.d(r,"b",(function(){return a})),t.d(r,"a",(function(){return i}));var n=t(237),o=t(239);function a(){var e=Object(n.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return r+t;var u=!t.startsWith(r)?r+t.replace(/^\//,""):t;return s?e+u:u}(a,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},239:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o}))},306:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/files/Core Engine Product Description-54751ab8b42df5829c5203a40c231b11.docx"}}]);