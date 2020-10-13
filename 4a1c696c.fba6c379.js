(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{108:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return i})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(227)),c="Extract String Literals",i={unversionedId:"artifacts/ExtractStrLit",id:"artifacts/ExtractStrLit",isDocsHomePage:!1,title:"ExtractStrLit",description:"\\section Author",source:"@site/docs/artifacts/ExtractStrLit.md",slug:"/artifacts/ExtractStrLit",permalink:"/glasswall-sdk-site/docs/artifacts/ExtractStrLit",version:"current"},s=[],u={rightToc:s};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\\section Author\nMartin O'Brien"),Object(a.b)("p",null,"\\section Description\nextractStrLit reads a set of files and reports the Group ID and string literal passed in to each use of GW_ISSUE. Use\nmacroToStrLit to convert strings specified as macros to their string form."),Object(a.b)("p",null,"\\section Location"),Object(a.b)("p",null,"Can be found at the following location in TFS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"inhouse.tools\\GWPerlScripts\\IssueItemProcessing\\bin\\extractStrLit.exe")),Object(a.b)("p",null,"\\section Usage\nTBD"))}l.isMDXComponent=!0},227:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(d,i(i({ref:e},u),{},{components:r})):o.a.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);