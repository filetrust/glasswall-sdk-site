(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(279)),o=(t(281),{title:"2.1.2.4.3 Configuration Management",sidebar_label:"2.1.2.4.3 Configuration Management"}),c={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",isDocsHomePage:!1,title:"2.1.2.4.3 Configuration Management",description:"Configuration Management XSD",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_2-architecture/2_1_2_4-internal_api/2_1_2_4_3-configuration_management",version:"current",sidebar_label:"2.1.2.4.3 Configuration Management"},u=[],l={rightToc:u};function s(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{target:"_blank",href:t(429).default},"Configuration Management XSD")))}s.isMDXComponent=!0},279:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,d=f["".concat(o,".").concat(p)]||f[p]||_[p]||i;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},280:function(e,n,t){"use strict";var r=t(0),a=t(20);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},281:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(280),a=t(282);function i(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return n+t;var s=!t.startsWith(n)?n+t.replace(/^\//,""):t;return l?e+s:s}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},282:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},429:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/files/gwConfigurationManagement-rebuild-c1521ff94ad0c90e3005079df99c20ff.xsd"}}]);