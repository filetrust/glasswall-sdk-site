(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{126:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),i=(t(0),t(236)),o={title:"Glasswall DLL 3rd Party Libraries"},l={unversionedId:"2-glasswall_core/artifacts/GlasswallDLLThirdPartyLibs",id:"2-glasswall_core/artifacts/GlasswallDLLThirdPartyLibs",isDocsHomePage:!1,title:"Glasswall DLL 3rd Party Libraries",description:"The 3rd party libraries used by our Glasswall DLL are as follows.",source:"@site/docs/2-glasswall_core/artifacts/GlasswallDLLThirdPartyLibs.md",slug:"/2-glasswall_core/artifacts/GlasswallDLLThirdPartyLibs",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/GlasswallDLLThirdPartyLibs",version:"current"},c=[{value:"Freetype Library - Version 2.5.3",id:"freetype-library---version-253",children:[]},{value:"Mini XML Library - Version 2.7",id:"mini-xml-library---version-27",children:[]},{value:"Zlib Library - Version 1.2.8",id:"zlib-library---version-128",children:[]},{value:"Minizip - Version 2.7",id:"minizip---version-27",children:[]}],s={rightToc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The 3rd party libraries used by our Glasswall DLL are as follows."),Object(i.b)("h2",{id:"freetype-library---version-253"},"Freetype Library - Version 2.5.3"),Object(i.b)("p",null,"For rendering text onto bitmaps and provide support for other font-related operations.  for example, used by PDF camera for font support."),Object(i.b)("p",null,"Further information available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.freetype.org/"}),"http://www.freetype.org/")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Warning: on Linux we have not upgraded and we are still using version 2.4.4.\n")),Object(i.b)("h2",{id:"mini-xml-library---version-27"},"Mini XML Library - Version 2.7"),Object(i.b)("p",null,"Small fast library for reading XML into DOM tree.  For example, utilised by our XML configuration component."),Object(i.b)("p",null,"Further information available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.msweet.org/projects.php?Z3"}),"http://www.msweet.org/projects.php?Z3")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Warning: do not upgrade to version 2.8 as it's problematic and causes problems with our XML configuration component.\n")),Object(i.b)("h2",{id:"zlib-library---version-128"},"Zlib Library - Version 1.2.8"),Object(i.b)("p",null,"For data compression.  For example used by our PDF camera for processing its decompression filters."),Object(i.b)("p",null,"Further information available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.zlib.net/"}),"http://www.zlib.net/")),Object(i.b)("h2",{id:"minizip---version-27"},"Minizip - Version 2.7"),Object(i.b)("p",null,"Utilise zlib for dealing with reading from and writing to OPC archives.  For example, required by our XML office camera."),Object(i.b)("p",null,"Further information available at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.winimage.com/zLibDll/minizip.html"}),"http://www.winimage.com/zLibDll/minizip.html")))}p.isMDXComponent=!0},236:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),f=n,d=b["".concat(o,".").concat(f)]||b[f]||u[f]||i;return t?a.a.createElement(d,l(l({ref:r},s),{},{components:t})):a.a.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);