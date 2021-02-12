(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),l=(r(0),r(278)),i={title:"2.2.6.2.1 Introduction",sidebar_label:"2.2.6.2.1 Introduction"},o={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_1-introduction",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_1-introduction",isDocsHomePage:!1,title:"2.2.6.2.1 Introduction",description:"The Core wrappers allow you to call Glasswall Editor core APIs from your chosen language. Wrappers are provided for Python, C#, JavaScript and Java.",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_1-introduction.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_1-introduction",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_1-introduction",version:"current",sidebar_label:"2.2.6.2.1 Introduction",sidebar:"someSidebar",previous:{title:"2.2.6.1.4 Word Search",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch"},next:{title:"2.2.6.2.2 Python",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_2-python"}},c=[{value:"General Requirements",id:"general-requirements",children:[]},{value:"Test Application Overview",id:"test-application-overview",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Core wrappers allow you to call Glasswall Editor core APIs from your chosen language. Wrappers are provided for Python, C#, JavaScript and Java."),Object(l.b)("p",null,"Each wrapper consists of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The wrapper itself: a bridge between the Glasswall Editor and the desired language;")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A series of supporting files (language dependent)."))),Object(l.b)("p",null,"Note that specific wrappers are provided for Security Tagging functionality. See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-1-introduction"}),Object(l.b)("strong",{parentName:"a"},"Security Tagging Wrappers")),"."),Object(l.b)("h2",{id:"general-requirements"},"General Requirements"),Object(l.b)("p",null,"The following general requirements must be met to use the wrappers and their test apps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The Glasswall Core 2 libraries and their dependencies"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"glasswall","_","core2.dll")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"*","_","camera.dll")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A designated folder containing files to be input into Core 2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A designated folder to hold the output from Core 2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A policy file to modify the default Core 2 file processing behaviour")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The wrapper itself."))),Object(l.b)("h2",{id:"test-application-overview"},"Test Application Overview"),Object(l.b)("p",null,"Each wrapper is provided with a test application. This application is designed to call each of the Glasswall Editor APIs from the chosen language, and generate a log file of the results."),Object(l.b)("p",null,"The execution steps are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"All supporting files, folders and dependencies are checked")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The contents of the output directory are erased in preparation for file processing")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"For each file in the input directory:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A new folder is created in the output directory and is named for the file currently being processed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A series of 23 tests are performed, as detailed in the Wrapper Test Calls document")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The files generated by Glasswall are saved in the specified output directory")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"A log file detailing the result of each test is generated and saved as local","_","process","_","log.txt")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When all files have been processed, a final log file named process","_","log.txt is saved in the root of the output directory."))))}s.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return _}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,_=u["".concat(i,".").concat(b)]||u[b]||d[b]||l;return r?n.a.createElement(_,o(o({ref:t},p),{},{components:r})):n.a.createElement(_,o({ref:t},p))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);