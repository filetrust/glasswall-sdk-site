(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{236:function(e,r,n){"use strict";n.d(r,"a",(function(){return f})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},f=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},_=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),_=t,d=f["".concat(s,".").concat(_)]||f[_]||p[_]||i;return n?a.a.createElement(d,o(o({ref:r},c),{},{components:n})):a.a.createElement(d,o({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=_;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},237:function(e,r,n){"use strict";var t=n(0),a=n(20);r.a=function(){var e=Object(t.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},238:function(e,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"a",(function(){return s}));var t=n(237),a=n(239);function i(){var e=Object(t.a)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var i=void 0===t?{}:t,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return r+n;var u=!n.startsWith(r)?r+n.replace(/^\//,""):n;return c?e+u:u}(i,n,e,r)}}}function s(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},239:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return a}))},283:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/files/archive_analysis_report-7668e150af84f4a9e72c8fd060353161.xsd"},66:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return u}));var t=n(2),a=n(6),i=(n(0),n(236)),s=(n(238),{title:"2.4.6.1 Analysis",sidebar_label:"2.4.6.1 Analysis"}),o={unversionedId:"2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_1-analysis",id:"2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_1-analysis",isDocsHomePage:!1,title:"2.4.6.1 Analysis",description:"Archive Analysis Report XML Schema Definition",source:"@site/docs/2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_1-analysis.md",slug:"/2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_1-analysis",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_1-analysis",version:"current",sidebar_label:"2.4.6.1 Analysis",sidebar:"someSidebar",previous:{title:"2.4.5.2 Versioning",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_4-glasswall_archive_manager/2_4_5-build/2_4_5_2-versioning"},next:{title:"2.4.6.2 API",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_4-glasswall_archive_manager/2_4_6-sdk_api/2_4_6_2-api"}},l=[],c={rightToc:l};function u(e){var r=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,s,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{target:"_blank",href:n(283).default},"Archive Analysis Report XML Schema Definition")))}u.isMDXComponent=!0}}]);