(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return _}));var n=a(2),r=a(6),l=(a(0),a(278)),o={title:"2.1.7.1.6.3.3 Memory to Memory Location",sidebar_label:"2.1.7.1.6.3.3 Memory to Memory Location"},i={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_3-mem_to_mem_location",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_3-mem_to_mem_location",isDocsHomePage:!1,title:"2.1.7.1.6.3.3 Memory to Memory Location",description:"These functions process the document provided in a specified memory location and publish the resulting output to memory locations. Each of the function signatures requires the client application to provide a location to which the report or regenerated document can be written, along with a variable in which the size of the output is recorded. If the output file is not required, null pointers can be specified.",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_3-mem_to_mem_location.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_3-mem_to_mem_location",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_3-mem_to_mem_location",version:"current",sidebar_label:"2.1.7.1.6.3.3 Memory to Memory Location",sidebar:"someSidebar",previous:{title:"2.1.7.1.6.3.2 Document Processing Arguments",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args"},next:{title:"2.1.7.1.6.3.4 File to Memory Location",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_4-file_to_mem_location"}},s=[{value:"Functions",id:"functions",children:[]},{value:"GWMemoryToMemoryAnalysisAudit",id:"gwmemorytomemoryanalysisaudit",children:[]},{value:"GWMemoryToMemoryProtect",id:"gwmemorytomemoryprotect",children:[]}],c={rightToc:s};function _(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These functions process the document provided in a specified memory location and publish the resulting output to memory locations. Each of the function signatures requires the client application to provide a location to which the report or regenerated document can be written, along with a variable in which the size of the output is recorded. If the output file is not required, null pointers can be specified."),Object(l.b)("p",null,"Parameters of type pointer to pointer are used by Glasswall to allocate memory for storing processed files and analysis reports. The client accesses the buffers through these parameters but is otherwise not responsible for managing the allocated memory except that  ",Object(l.b)("strong",{parentName:"p"},"GWFileDone"),"  must be called when processing is finished in order to release the allocated memory."),Object(l.b)("h2",{id:"functions"},"Functions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"int ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#gwmemorytomemoryanalysisaudit"}),Object(l.b)("strong",{parentName:"a"},"GWMemoryToMemoryAnalysisAudit")),")(void ","*","inputBuffer, size","_","t inputBufferLength, wchar","_","t ","*","wcType, void ","*","*","analysisFileBuffer, size","_","t ","*","analysisFileBufferLength)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"int ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#gwmemorytomemoryprotect"}),Object(l.b)("strong",{parentName:"a"},"GWMemoryToMemoryProtect")),"(void ","*","inputBuffer, size","_","t inputBufferLength, const wchar","_","t ","*","wcType, void ","*","*","outputFileBuffer, size","_","t ","*","outputLength)"))),Object(l.b)("h2",{id:"gwmemorytomemoryanalysisaudit"},"GWMemoryToMemoryAnalysisAudit"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"int GWMemoryToMemoryAnalysisAudit (void ","*"," "),Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"inputBuffer")," ")," ",Object(l.b)("strong",{parentName:"p"},", size","_","t ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"inputBufferLength")," ")," ",Object(l.b)("strong",{parentName:"p"},", wchar","_","t ","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"wcType")," ")," ",Object(l.b)("strong",{parentName:"p"},", void ","*","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"analysisFileBuffer")," ")," ",Object(l.b)("strong",{parentName:"p"},", size","_","t ","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"analysisFileBufferLength")," "),Object(l.b)("strong",{parentName:"p"},")")),Object(l.b)("p",null,"This function protects the specified input file buffer, returning the analysis report of the processed file to the specified memory location."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"th"},"inputBuffer")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input buffer containing the file to be processed."))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"inputBufferLength")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Length of the input buffer containing the file to be processed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"wcType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#wctype"}),Object(l.b)("strong",{parentName:"a"},"wcType")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in,out"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"analysisFileBuffer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"output analysis report buffer from Glasswall processing. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#outputfilebuffer"}),Object(l.b)("strong",{parentName:"a"},"outputFileBuffer")),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"out"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"analysisFileBufferLength")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"length of the outputFileBuffer that has been allocated. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#outputlength"}),Object(l.b)("strong",{parentName:"a"},"outputLength")),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def#egwfilestatus"}),Object(l.b)("strong",{parentName:"a"},"eGwFileStatus"))," ",Object(l.b)("strong",{parentName:"li"}," / ")," ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#process-return-status"}),Object(l.b)("strong",{parentName:"a"},"Process Return Status"))," ")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Remarks")),Object(l.b)("p",null,"Glasswall GWMemoryToMemoryAnalysisAudit processing example."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'   // input file buffer and length\n   void *inputFileBuffer    = NULL;\n   size_t inputFileLength   = 0;\n\n// output analysis report buffer and length \n   void *analysisFileBuffer = NULL;\n   size_t analysisFileBufferLength = 0;\n\n// load file from disk\nif (eGwFileStatus_Success == gwLoadFileFromDisk(L"C:\\\\data\\\\temp1.pdf",\n&inputFileBuffer, &inputFileLength))\n{\n   // Library configuration\n   wchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\n   if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))\n   {\n   if(GWMemoryToMemoryAnalysisAudit(inputFileBuffer, inputFileLength, \nL"pdf", &analysisFileBuffer, &analysisFileBufferLength))\n        {\n             // process the analysis report\n        }\n   }\n   else\n   {\n        // error handling\n   }\n\n   // free memory allocated by gwLoadFileFromDisk \n   gwFree(inputFileBuffer);\n}\nelse\n\n{\n   // error handling\n}\n\n   // release resources including the global buffer \'analysisFileBuffer\'\n   GWFileDone();\n')),Object(l.b)("h2",{id:"gwmemorytomemoryprotect"},"GWMemoryToMemoryProtect"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"int GWMemoryToMemoryProtect (void ","*"," "),Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"inputBuffer")," ")," ",Object(l.b)("strong",{parentName:"p"},", size","_","t ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"inputBufferLength")," ")," ",Object(l.b)("strong",{parentName:"p"},", const wchar","_","t ","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"wcType")," ")," ",Object(l.b)("strong",{parentName:"p"},", void ","*","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"outputFileBuffer")," ")," ",Object(l.b)("strong",{parentName:"p"},", size","_","t ","*"," ")," ",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"outputLength")," "),Object(l.b)("strong",{parentName:"p"},")")),Object(l.b)("p",null,"This function protects the specified input file buffer, returning the managed version of the file to the specified memory location."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"th"},"inputBuffer")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input buffer containing the file to be processed."))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"inputBufferLength")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Length of the input buffer containing the file to be processed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"wcType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#wctype"}),Object(l.b)("strong",{parentName:"a"},"wcType")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"in,out"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"outputFileBuffer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"output analysis report buffer from Glasswall processing. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#outputfilebuffer"}),Object(l.b)("strong",{parentName:"a"},"outputFileBuffer")),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"out"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"analysisFileBufferLength")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"length of the outputFileBuffer that has been allocated. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#outputlength"}),Object(l.b)("strong",{parentName:"a"},"outputLength")),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def#egwfilestatus"}),Object(l.b)("strong",{parentName:"a"},"eGwFileStatus"))," ",Object(l.b)("strong",{parentName:"li"}," / ")," ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#process-return-status"}),Object(l.b)("strong",{parentName:"a"},"Process Return Status")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Remarks")),Object(l.b)("p",null,"Glasswall GWMemoryToMemoryProtect processing example."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'// input file buffer and length \nvoid *inputFileBuffer = NULL;\nsize_t inputFileLength = 0;\n\n// managed file output buffer and length\nvoid *outputFileImage = NULL; \nsize_t outputFileImageLength = 0; \n\n// load file from disk \nif (eGwFileStatus_Success == gwLoadFileFromDisk(L"C:\\\\data\\\\temp1.pdf",\n&inputFileBuffer, &inputFileLength)) \n{\n    // Library configuration\n    wchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\n    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))\n    {\n        if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength, L"pdf",\n&outputFileImage, &outputFileImageLength))\n        {\n              // process the managed file image\n        }\n    }\n    else\n    {\n        // error handling \n    }\n\n    // free memory allocated by gwLoadFileFromDisk\n    gwFree(inputFileBuffer);\n }\n else\n {\n    // error handling\n }\n\n // release resources including the global buffer \'outputFileImage\'\n GWFileDone();\n')))}_.isMDXComponent=!0},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),_=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=_(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=_(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||l;return a?r.a.createElement(m,i(i({ref:t},c),{},{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);