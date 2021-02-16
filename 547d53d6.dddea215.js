(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),l=(r(0),r(279)),o={title:"2.2.6.1.3.4 Python Wrapper",sidebar_label:"2.2.6.1.4 Python Wrapper"},i={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-4-python",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-4-python",isDocsHomePage:!1,title:"2.2.6.1.3.4 Python Wrapper",description:"The wrapper has been tested on versions 3.6 and 2.7 of Python.",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-4-python.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-4-python",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-4-python",version:"current",sidebar_label:"2.2.6.1.4 Python Wrapper",sidebar:"someSidebar",previous:{title:"2.2.6.1.3.3 Java Wrapper",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-3-Java"},next:{title:"2.2.6.1.5 C Sharp Wrapper",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_3-securitytagging/2_2_6_1_3-5-csharp"}},s=[{value:"Environment",id:"environment",children:[]},{value:"Example Code",id:"example-code",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The wrapper has been tested on versions 3.6 and 2.7 of Python."),Object(l.b)("h2",{id:"environment"},"Environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You need to ensure that you have the Glasswall.py wrapper file accessible."),Object(l.b)("li",{parentName:"ul"},"Ensure that the Core 2 libraries and all required folders are accessible to the wrapper."),Object(l.b)("li",{parentName:"ul"})),Object(l.b)("h2",{id:"example-code"},"Example Code"),Object(l.b)("p",null,"The following code uses the Python wrapper to process a file and place the tagged file in the specified directory. The tagged file is then inspected, and the tags contained within the file are extracted. This data is then saved in the specified directory."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"from Glasswall import Glasswall \nimport ctypes as ct \n  \n class PythonWrapper:  \n     # create Glasswall object. \n     gw = Glasswall(r'e:\\Core2_dlls') \n \n    # Tag file\n    gw.tag_file(r'e:\\file_path', r'e:\\data_to_tag_path', r'e:\\tagged_file_path')\n    \n    # retrieve tag from file\n    gw.retrieve_tag(r'e:\\tagged_file_path', r'e:\\retrived_tagged_path')\n")))}p.isMDXComponent=!0},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},_=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),_=p(r),u=n,g=_["".concat(o,".").concat(u)]||_[u]||d[u]||l;return r?a.a.createElement(g,i(i({ref:t},c),{},{components:r})):a.a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);