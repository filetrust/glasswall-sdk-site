(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return g}));var a=r(2),n=r(6),o=(r(0),r(220)),i={title:"Office Binary Camera"},c={unversionedId:"2-glasswall_core/artifacts/GlasswallDllCameraOfficeBinary",id:"2-glasswall_core/artifacts/GlasswallDllCameraOfficeBinary",isDocsHomePage:!1,title:"Office Binary Camera",description:"Overview",source:"@site/docs/2-glasswall_core/artifacts/GlasswallDllCameraOfficeBinary.md",slug:"/2-glasswall_core/artifacts/GlasswallDllCameraOfficeBinary",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/GlasswallDllCameraOfficeBinary",version:"current",sidebar:"someSidebar",previous:{title:"JPEG Camera",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/GlasswallDllCameraJPEG"},next:{title:"Office Open XML (OOXML) Camera",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/GlasswallDllCameraOfficeXML"}},l=[{value:"Compound File Binary (CFB)",id:"compound-file-binary-cfb",children:[]},{value:"CFB File Processing",id:"cfb-file-processing",children:[{value:"Top Level Diagram",id:"top-level-diagram",children:[]},{value:"CFB File Processing Diagram",id:"cfb-file-processing-diagram",children:[]}]},{value:"Office Binary Camera Prototype",id:"office-binary-camera-prototype",children:[]}],s={rightToc:l};function g(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"overview"},"Overview"),Object(o.b)("h2",{id:"compound-file-binary-cfb"},"Compound File Binary (CFB)"),Object(o.b)("p",null,"Office binary document streams and objects are packaged in structure called the Microsoft Compound File Binary (CFB) file format, also known as the Object Linking and Embedding (OLE) or Compound Object Model (COM) structured storage compound file implementation. "),Object(o.b)("p",null,"Traditional file systems encounter challenges when they attempt to efficiently store multiple kinds of objects in one document. A compound file provides a solution by implementing a simplified file system within a file. Structured storage defines how to treat a single file as a hierarchical collection of two objects, ",Object(o.b)("em",{parentName:"p"},"storage objects")," and ",Object(o.b)("em",{parentName:"p"},"stream objects"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Storage Objects - Behave as directories.\nStream Objects  - Behave as files.\n")),Object(o.b)("p",null,"This scheme is called ",Object(o.b)("em",{parentName:"p"},"structure storage"),". The purpose of the structured storage is to reduce the performance penalties and overhead associated with storing separate objects in a flat file."),Object(o.b)("p",null,"The following figure shows a simplified file system with multiple directories and files nested in a hierarchy."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Compound File Binary Overview",src:r(305).default})),Object(o.b)("h2",{id:"cfb-file-processing"},"CFB File Processing"),Object(o.b)("p",null,"Each office binary file type (.doc, .xls, .ppt) contain streams specific to the file type, stored within the CFB structure. The CFB structure must first be processed by Glasswall before individual streams are handed of to their related cameras (doc camera, xls camera etc.). "),Object(o.b)("p",null,"The diagrams below give an overview of how Glasswall processes a CFB file."),Object(o.b)("h3",{id:"top-level-diagram"},"Top Level Diagram"),Object(o.b)("p",null,Object(o.b)("a",{target:"_blank",href:r(306).default},"Top Level CFB File Processing")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Top Level CFB File Processing",src:r(307).default})),Object(o.b)("h3",{id:"cfb-file-processing-diagram"},"CFB File Processing Diagram"),Object(o.b)("p",null,Object(o.b)("a",{target:"_blank",href:r(308).default},"CFB File Processing")),Object(o.b)("p",null,Object(o.b)("img",{alt:"CFB File Processing",src:r(309).default})),Object(o.b)("h1",{id:"cfb-architecture"},"CFB Architecture"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"UNDER CONSTRUCTION")),Object(o.b)("h1",{id:"office-binary-cameras"},"Office Binary Cameras"),Object(o.b)("h2",{id:"office-binary-camera-prototype"},"Office Binary Camera Prototype"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[Prototype Office Binary Camera]",'(Prototype Office Binary Camera.pdf "Prototype Office Binary Camera")')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"UNDER CONSTRUCTION")),Object(o.b)("h1",{id:"related-links"},"Related Links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[Specifications]","(@ref internalFileFormatSpecifications)")))}g.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),g=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=g(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=g(r),u=a,b=f["".concat(i,".").concat(u)]||f[u]||d[u]||o;return r?n.a.createElement(b,c(c({ref:t},s),{},{components:r})):n.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},305:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"},306:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/files/00_TopLevel_CBF_File_Processing-dc226ea94bd719abef21f7b93ebbb0a7.dia"},307:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/00_TopLevel_CBF_File_Processing-1bca5ad8435ab76ed97c33a860829f2e.png"},308:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/files/01_CFB_FILE_PROCESSING-c7f65fc345e5ec35d0070756b9764c26.dia"},309:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/01_CFB_FILE_PROCESSING-88c785882d9e4df12661800de8b0ef66.png"}}]);