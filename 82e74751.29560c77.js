(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return f}));var r=t(2),a=t(6),o=(t(0),t(278)),i=(t(280),{title:"2.1.2.4.3 Configuration Management",sidebar_label:"2.1.2.4.3 Configuration Management"}),c={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",isDocsHomePage:!1,title:"2.1.2.4.3 Configuration Management",description:"Configuration Management XSD",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",version:"current",sidebar_label:"2.1.2.4.3 Configuration Management"},u=[],l={rightToc:u};function f(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{target:"_blank",href:t(428).default},"Configuration Management XSD")))}f.isMDXComponent=!0},278:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),f=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=f(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=f(t),p=r,d=s["".concat(i,".").concat(p)]||s[p]||_[p]||o;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},279:function(e,n,t){"use strict";var r=t(0),a=t(20);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},280:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(279),a=t(281);function o(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return n+t;var f=!t.startsWith(n)?n+t.replace(/^\//,""):t;return l?e+f:f}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},281:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},428:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/files/gwConfigurationManagement-rebuild-c1521ff94ad0c90e3005079df99c20ff.xsd"}}]);