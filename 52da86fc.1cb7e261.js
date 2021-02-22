(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var l=n(2),r=n(6),c=(n(0),n(284)),a={title:"2.2.2.6 Core 2 Design Plan",sidebar_label:"2.2.2.6 Core 2 Design Plan"},b={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_6-core2_design_plan",id:"2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_6-core2_design_plan",isDocsHomePage:!1,title:"2.2.2.6 Core 2 Design Plan",description:"Glasswall Solutions Ltd",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_6-core2_design_plan.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_6-core2_design_plan",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_6-core2_design_plan",version:"current",sidebar_label:"2.2.2.6 Core 2 Design Plan",sidebar:"someSidebar",previous:{title:"2.2.2.5 Archive Types Supported",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_5-archive_types"},next:{title:"2.2.3 Licencing",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_3-licencing"}},p=[{value:"2.1 Version 2 Package",id:"21-version-2-package",children:[{value:"2.1.1 Interface Object",id:"211-interface-object",children:[]},{value:"2.1.2 Import/Export procedure",id:"212-importexport-procedure",children:[]}]},{value:"3.1 Structured File Types",id:"31-structured-file-types",children:[{value:"3.1.1 OPC",id:"311-opc",children:[]},{value:"3.1.2 CFB",id:"312-cfb",children:[]}]}],i={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("h1",{id:"glasswall-solutions-ltd"},"Glasswall Solutions Ltd"),Object(c.b)("h1",{id:"planning-and-implementation-guide"},"Planning and Implementation Guide"),Object(c.b)("h1",{id:"steven-warner"},"Steven Warner")),Object(c.b)("h1",{id:"1-camera-pool"},"1 Camera Pool"),Object(c.b)("p",null,Object(c.b)("img",{src:n(473).default})),Object(c.b)("h1",{id:"2-exportimport"},"2 Export/Import"),Object(c.b)("h2",{id:"21-version-2-package"},"2.1 Version 2 Package"),Object(c.b)("h3",{id:"211-interface-object"},"2.1.1 Interface Object"),Object(c.b)("p",null,Object(c.b)("img",{src:n(474).default})),Object(c.b)("p",null,"Notes"),Object(c.b)("p",null,"entryname of form xxxx\\yyyy\\zzzz used to insert to specific stream or substream. (I believe underlying quazip/minizip supports this)"),Object(c.b)("h3",{id:"212-importexport-procedure"},"2.1.2 Import/Export procedure"),Object(c.b)("p",null,Object(c.b)("img",{src:n(475).default})),Object(c.b)("p",null,"Changes:"),Object(c.b)("p",null,"Change Import/Export to use leaves"),Object(c.b)("p",null,"Change Export/Import to start cameras independent of session manager"),Object(c.b)("h1",{id:"3-cameras"},"3 Cameras"),Object(c.b)("h2",{id:"31-structured-file-types"},"3.1 Structured File Types"),Object(c.b)("p",null,"A common BDDL Based definition is defined to encapsulate the usual elements held in each level of a structured document (OPC and CFB being examples)"),Object(c.b)("p",null,"Each leaf in the tree holds a stream in the file."),Object(c.b)("p",null,"Both OPC and CFB formats inherit the basic definition and connect to handwritten load/unload code that deals with the underlying format."),Object(c.b)("p",null,"Initial Implementation:"),Object(c.b)("p",null,"For expediency, using generated structure/read/write output as framework seems a suitable starting point."),Object(c.b)("h3",{id:"311-opc"},"3.1.1 OPC"),Object(c.b)("p",null,"OPC","_","StructuredFile :"),Object(c.b)("p",null,"StructuredContents : StructuredDirectory ","*"),Object(c.b)("p",null,"(StructuredDirectory | StructuredStream) ","*"),Object(c.b)("p",null,"See glasswall.classic\\data.definitions.and.rules\\MSOffice\\bddl\\StructuredStorage\\ms-opc\\ms-opc.bdd"),Object(c.b)("p",null,"Each stream can then be loaded with data from the streams in the zip file."),Object(c.b)("p",null,"On write back, the usual checked flag for writing unset will mean skip the stream on regeneration of the zip file."),Object(c.b)("h3",{id:"312-cfb"},"3.1.2 CFB"),Object(c.b)("h1",{id:"4-camera-interface"},"4 Camera interface"),Object(c.b)("p",null,"Ensure easy way to start a camera on a memorybuffer is part of the interface"),Object(c.b)("h1",{id:""}),Object(c.b)("h1",{id:"5-reason-for-editor"},"5 Reason for Editor"),Object(c.b)("h1",{id:"6-structure-of-platform"},"6 Structure of platform"),Object(c.b)("p",null,Object(c.b)("img",{src:n(476).default})),Object(c.b)("h1",{id:"7-folder-layout"},"7 Folder Layout"),Object(c.b)("p",null,"+--- ",Object(c.b)("strong",{parentName:"p"},"buildoutput")),Object(c.b)("p",null,"+--- ",Object(c.b)("strong",{parentName:"p"},"cameras")),Object(c.b)("p",null,"| ","-","--camera.pool"),Object(c.b)("p",null,"| +---bmp"),Object(c.b)("p",null,"| +---bmp.support"),Object(c.b)("p",null,"| +---cfb"),Object(c.b)("p",null,"| +---documentsummaryinformationfile.support"),Object(c.b)("p",null,"| +---dsi"),Object(c.b)("p",null,"| +---elf"),Object(c.b)("p",null,"| +---elfdocument.support"),Object(c.b)("p",null,"| +---emf"),Object(c.b)("p",null,"| +---emf.support"),Object(c.b)("p",null,"| +---equationnative"),Object(c.b)("p",null,"| +---equationnative.support"),Object(c.b)("p",null,"| +---excelcorestreams.support"),Object(c.b)("p",null,"| +---macho"),Object(c.b)("p",null,"| +---macho.support"),Object(c.b)("p",null,"| +---mp3"),Object(c.b)("p",null,"| +---mp3.support"),Object(c.b)("p",null,"| +---mp4"),Object(c.b)("p",null,"| +---mp4.support"),Object(c.b)("p",null,"| +---mpeg"),Object(c.b)("p",null,"| +---mpeg.support"),Object(c.b)("p",null,"| +---msdoc"),Object(c.b)("p",null,"| +---mspe"),Object(c.b)("p",null,"| +---mspe.support"),Object(c.b)("p",null,"| +---msppt"),Object(c.b)("p",null,"| +---msxls"),Object(c.b)("p",null,"| +---officexml.support"),Object(c.b)("p",null,"| +---ooxml"),Object(c.b)("p",null,"| +---ooxml.support"),Object(c.b)("p",null,"| +---opc"),Object(c.b)("p",null,"| +---opc.support"),Object(c.b)("p",null,"| +---png"),Object(c.b)("p",null,"| +---png.support"),Object(c.b)("p",null,"| +---powerpointcorestreams.support"),Object(c.b)("p",null,"| +---printersettings"),Object(c.b)("p",null,"| +---printersettings.support"),Object(c.b)("p",null,"| +---rtf"),Object(c.b)("p",null,"| +---rtf.support"),Object(c.b)("p",null,"| +---tiff"),Object(c.b)("p",null,"| +---tiff.support"),Object(c.b)("p",null,"| +---wav"),Object(c.b)("p",null,"| +---wav.support"),Object(c.b)("p",null,"| +---wmf"),Object(c.b)("p",null,"| +---wmfbase.support"),Object(c.b)("p",null,"| ","-","--wordcorestreams.support"),Object(c.b)("p",null,"+--- ",Object(c.b)("strong",{parentName:"p"},"core.support")),Object(c.b)("p",null,"| +---analysis"),Object(c.b)("p",null,"| | +---analysis.id.api"),Object(c.b)("p",null,"| | +---AnalysisInfo"),Object(c.b)("p",null,"| | ","-","--AnalysisRepository"),Object(c.b)("p",null,"| | +---RepositoryComponents"),Object(c.b)("p",null,"| | ","-","--XML","_","Reporting"),Object(c.b)("p",null,"| +---camera","_","pool"),Object(c.b)("p",null,"| +---content.management"),Object(c.b)("p",null,"| +---gw.zip.support"),Object(c.b)("p",null,"| +---import.export"),Object(c.b)("p",null,"| +---lib"),Object(c.b)("p",null,"| | ","-","--quazip"),Object(c.b)("p",null,"| | +---include"),Object(c.b)("p",null,"| | +---linux"),Object(c.b)("p",null,"| | ","-","--win"),Object(c.b)("p",null,"| +---MemoryBuffer"),Object(c.b)("p",null,"| +---platform"),Object(c.b)("p",null,"| +---sdk.interface"),Object(c.b)("p",null,"| | ","-","--api","_","entrypoints"),Object(c.b)("p",null,"| +---session"),Object(c.b)("p",null,"| +---ThirdParty"),Object(c.b)("p",null,"| | ","-","--SafeInt"),Object(c.b)("p",null,"| +---ucp","_","engine"),Object(c.b)("p",null,"| +---ucp","_","tree","_","support"),Object(c.b)("p",null,"| | ","-","--bddltreeimpl"),Object(c.b)("p",null,"| ","-","--utils"),Object(c.b)("p",null,"| +---CustomExceptions"),Object(c.b)("p",null,"| ","-","--mxml"),Object(c.b)("p",null,"+--- ",Object(c.b)("strong",{parentName:"p"},"core2")),Object(c.b)("p",null,"| ","-","--distribution"),Object(c.b)("p",null,"+--- ",Object(c.b)("strong",{parentName:"p"},"core2.dll")),Object(c.b)("p",null,"-","--qt","_","core2","_","dataviewerSession use (client view)"),Object(c.b)("h1",{id:"8-test-tool-gwqtcli"},"8 Test Tool GWQtCLI"),Object(c.b)("h1",{id:"9-camerabase-aka-session"},"9 CameraBase (aka session)"),Object(c.b)("p",null,Object(c.b)("img",{src:n(477).default})),Object(c.b)("h1",{id:"-1"}),Object(c.b)("p",null,Object(c.b)("img",{src:n(478).default})),Object(c.b)("h1",{id:"10-plugin-use"},"10 Plugin use"),Object(c.b)("p",null,Object(c.b)("img",{src:n(479).default})),Object(c.b)("h1",{id:"11-filters-concept"},"11 ","'","filters","'"," concept"),Object(c.b)("h1",{id:"12-plugin-interface"},"12 Plugin interface"),Object(c.b)("h1",{id:"13-qt_core2_dataviewer"},"13 Qt","_","core2","_","dataviewer"),Object(c.b)("p",null,"When you build the Core2 Project"),Object(c.b)("h1",{id:"14-qt-usage"},"14 Qt Usage"))}s.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),o=s(n),d=l,O=o["".concat(a,".").concat(d)]||o[d]||u[d]||c;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,a=new Array(c);a[0]=d;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:l,a[1]=b;for(var i=2;i<c;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},473:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan1-6e0df2e6292a724e2052930e321f2614.jpg"},474:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan2-256dfb6b7700333de8682a4e18455ef6.jpg"},475:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan3-10b2f80a0bb616f2d096187abf3a12e4.jpg"},476:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan4-236e9800689b403deefd3afbd1b6d490.jpg"},477:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan5-7f9b6c902c8ec195be9921d6ca7e46ba.jpg"},478:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan6-98b50b0520520700b8bbb45791a323df.jpg"},479:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/designplan7-504bd5d4dbb4e47e85fd99b977563f79.jpg"}}]);