(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},114:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(113),o=n(115);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},115:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/new camera checklist-eeaef1884e368fe782858a4cd5f6856b.docx"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/Core2 cameras - Creating and Development Rules-4b4950bbe175501857dc4d961cb904be.docx"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/using qt in glasswall-226d9ea949867e2e8f6222806e69a200.docx"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(112)),i=n(114),c={title:"6.1 Development Process",sidebar_label:"6.1 Development Process"},s={unversionedId:"development/development_process",id:"development/development_process",isDocsHomePage:!1,title:"6.1 Development Process",description:"New Camera Checklist",source:"@site/docs/development/development_process.md",slug:"/development/development_process",permalink:"/glasswall-sdk-site/docs/development/development_process",version:"current",sidebar_label:"6.1 Development Process",sidebar:"someSidebar",previous:{title:"5.4 Testing Guidelines",permalink:"/glasswall-sdk-site/docs/testing/testing_guidelines"},next:{title:"6.2 Coding Guidelines",permalink:"/glasswall-sdk-site/docs/development/coding_guidelines"}},l=[],u={rightToc:l};function d(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{target:"_blank",href:n(152).default},"New Camera Checklist")," ",Object(a.b)("img",{alt:"Download",src:Object(i.a)("img/download.png")})),Object(a.b)("p",null,Object(a.b)("a",{target:"_blank",href:n(153).default},"Core2 cameras - Creating and Development Rules")," ",Object(a.b)("img",{alt:"Download",src:Object(i.a)("img/download.png")})),Object(a.b)("p",null,Object(a.b)("a",{target:"_blank",href:n(154).default},"using qt in glasswall")," ",Object(a.b)("img",{alt:"Download",src:Object(i.a)("img/download.png")})))}d.isMDXComponent=!0}}]);