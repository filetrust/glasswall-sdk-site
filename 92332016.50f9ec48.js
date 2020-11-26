(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(225)),o=n(227),c={title:"5.2 Coding Guidelines",sidebar_label:"5.2 Coding Guidelines"},l={unversionedId:"5-development/5_2-coding_guidelines",id:"5-development/5_2-coding_guidelines",isDocsHomePage:!1,title:"5.2 Coding Guidelines",description:"This page provides links to the coding guidelines used by Glasswall developers.",source:"@site/docs/5-development/5_2-coding_guidelines.md",slug:"/5-development/5_2-coding_guidelines",permalink:"/glasswall-sdk-site/docs/5-development/5_2-coding_guidelines",version:"current",sidebar_label:"5.2 Coding Guidelines",sidebar:"someSidebar",previous:{title:"5.1 Development Process",permalink:"/glasswall-sdk-site/docs/5-development/5_1-development_process"},next:{title:"5.3 Branching Strategy",permalink:"/glasswall-sdk-site/docs/5-development/5_3-branching_strategy"}},s=[],u={rightToc:s};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page provides links to the coding guidelines used by Glasswall developers."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#c-core-guidelines",title:"C++ Core Guidelines"}),"C++ Core Guidelines")," ",Object(a.b)("img",{alt:"External Link",src:Object(o.a)("img/github_icon.png")})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/",title:"Index of Python Enhancement Proposals"}),"Index of Python Enhancement Proposals (PEPs)")," ",Object(a.b)("img",{alt:"External Link",src:Object(o.a)("img/external_link.png")})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"artifacts/glasswall_c_coding_guidelines"}),"Glasswall C Coding Guidelines")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"artifacts/Perl_Best_Practices_Summary"}),"Perl Best Practices Summary")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"artifacts/LearnYAMLInYMinutes"}),"Learn YAML in Y Minutes")),Object(a.b)("p",null,Object(a.b)("a",{target:"_blank",href:n(314).default},"Kernighan & Ritchie: The C Programming Language")," ",Object(a.b)("img",{alt:"PDF",src:Object(o.a)("img/pdf_icon.png")})))}p.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},227:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(226),i=n(228);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},228:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},314:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/Prentice_Hall-Kernighan_Ritchie-The_C_Programming_Language-758168c73d6914c32312a18394dedb3d.pdf"}}]);