(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{216:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(6),i=(r(0),r(279)),s={title:"2.2.6.2.3 JavaScript",sidebar_label:"2.2.6.2.3 JavaScript"},l={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_3-javascript",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_3-javascript",isDocsHomePage:!1,title:"2.2.6.2.3 JavaScript",description:"Purpose",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_3-javascript.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_3-javascript",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_3-javascript",version:"current",sidebar_label:"2.2.6.2.3 JavaScript",sidebar:"someSidebar",previous:{title:"2.2.6.2.2 Python",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_2-python"},next:{title:"2.2.6.2.4 C#",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_2-sdk_wrappers/2_2_6_2_4-c_sharp"}},o=[{value:"Purpose",id:"purpose",children:[]},{value:"General Requirements",id:"general-requirements",children:[]},{value:"Test Application Overview",id:"test-application-overview",children:[]},{value:"JavaScript Wrapper",id:"javascript-wrapper",children:[{value:"Environment",id:"environment",children:[]},{value:"Example Code",id:"example-code",children:[]}]}],p={rightToc:o};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"The purpose of the wrappers is to expose the Core 2 SDK functionality through Python, C#, JavaScript and Java."),Object(i.b)("p",null,"Each wrapper consists of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The wrapper itself: a bridge between the Core 2 SDK and the desired language."),Object(i.b)("li",{parentName:"ul"},"A series of supporting files (language dependent).")),Object(i.b)("h2",{id:"general-requirements"},"General Requirements"),Object(i.b)("p",null,"The following general requirements must be met to use the wrappers and their test apps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Glasswall Core 2 libraries and their dependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"glasswall","_","core2.dll"),Object(i.b)("li",{parentName:"ul"},"*","_","camera.dll"))),Object(i.b)("li",{parentName:"ul"},"A designated folder containing files to be input into Core 2"),Object(i.b)("li",{parentName:"ul"},"A designated folder to hold the output from Core 2"),Object(i.b)("li",{parentName:"ul"},"A policy file to modify the default Core 2 file processing behaviour"),Object(i.b)("li",{parentName:"ul"},"The wrapper itself.")),Object(i.b)("h2",{id:"test-application-overview"},"Test Application Overview"),Object(i.b)("p",null,"Each wrapper is provided with a test application. This application is designed to call each of the Core2 APIs from the chosen language and generate a log file of the results.\nThe execution steps are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All supporting files, folders and dependencies are checked"),Object(i.b)("li",{parentName:"ul"},"The contents of the output directory are erased in preparation for file processing"),Object(i.b)("li",{parentName:"ul"},"For each file in the input directory:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A new folder is created in the output directory and is named for the file currently being processed"),Object(i.b)("li",{parentName:"ul"},"A series of 23 tests are performed, as detailed in the Wrapper Test Calls document"),Object(i.b)("li",{parentName:"ul"},"The files generated by Glasswall are saved in the specified output directory"),Object(i.b)("li",{parentName:"ul"},"A log file detailing the result of each test is generated and saved as local","_","process","_","log.txt"))),Object(i.b)("li",{parentName:"ul"},"When all files have been processed, a final log file named process","_","log.txt is saved in the root of the output directory.")),Object(i.b)("h2",{id:"javascript-wrapper"},"JavaScript Wrapper"),Object(i.b)("h3",{id:"environment"},"Environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The JavaScript wrapper requires Node.js version 10.16.3. More recent versions of Node.js may not be compatible."),Object(i.b)("li",{parentName:"ul"},"Additional required modules are",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"node-ffi (Node.js Foreign Function Interface). The Node.js addon for loading and calling dynamic link libraries."),Object(i.b)("li",{parentName:"ul"},"ref, the native addon for Node.js. This extends the Buffer class."),Object(i.b)("li",{parentName:"ul"},"The node","_","modules directory contents, as supplied.")))),Object(i.b)("p",null,"Ensure the Core 2 libraries and all required folders are accessible to the wrapper."),Object(i.b)("h3",{id:"example-code"},"Example Code"),Object(i.b)("p",null,"The following code uses the JavaScript wrapper to process a file and place the managed file in a buffer. A policy file is specified, and an analysis report is generated. Note that the memory buffer is non-persistent and will have to be processed, analysed, or stored, before the script finishes. The policies file, config","_","sanitise.xmlwill be placed in the specified directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const fs = require('fs');\nconst path = require('path');\nconst ref = require('ref');\n \nfunction main() {\n   \n    let glasswall = require(\"c:\\\\demo\\\\Core2JS.js\");\n    let gw = new glasswall(\"e:\\\\demo\\\\glasswall_core2.dll\");\n    \n    try { \n        // open session\n        let session_id = gw.GW2OpenSession();\n \n        // register inputfile\n        let return_status = gw.GW2RegisterInputFile(session_id, 'e:\\\\TestFiles\\\\C.bmp');\n        \n        // register outputmemory: the processed data is non-persistent\n        let output_file_buffer = ref.alloc(ref.refType(ref.types.CString));\n        let output_buffer_size = ref.alloc(ref.types.size_t, 0);\n        return_status = gw.GW2RegisterOutputMemory(session_id, output_file_buffer,\n            output_buffer_size);\n \n        // register policies file\n        return_status = gw.GW2RegisterPoliciesFile(session_id,\n            'e:\\\\Tasks\\\\W57240-Core_2_JavaScript_Wrapper\\\\Src\\\\config_sanitise.xml', 0);\n \n        // register analysis file\n        return_status = gw.GW2RegisterAnalysisFile(session_id,\n            'e:\\\\Output\\\\Analysis_output.xml', 0);  // 0 = AF_XML\n \n        // run the session\n        return_status = gw.GW2RunSession(session_id);\n         \n        // close the session\n        return_status = gw.GW2CloseSession(session_id);\n \n    }\n    catch (err) {\n        console.log(`error - exception caught: ${err}`);\n        process.exit();\n    }\n}\n \nif (require.main === module) {\n    main();\n}\n")))}c.isMDXComponent=!0},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(f,l(l({ref:t},p),{},{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);