(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{278:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(f,p(p({ref:t},b),{},{components:n})):a.a.createElement(f,p({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),i=(n(0),n(278)),l={title:"2.1.7.1.6.3.6 Supporting Functions",sidebar_label:"2.1.7.1.6.3.6 Supporting Functions"},p={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions",isDocsHomePage:!1,title:"2.1.7.1.6.3.6 Supporting Functions",description:"hese functions may be used alongside the document processing functions for additional support on certain aspects or attributes such as determining the file extension for a given file.",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions",version:"current",sidebar_label:"2.1.7.1.6.3.6 Supporting Functions",sidebar:"someSidebar",previous:{title:"2.1.7.1.6.3.5 File to File",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_5-file_to_file"},next:{title:"2.1.7.1.6.3.7.1 Document Process Results",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_1-overview"}},o=[{value:"Functions",id:"functions",children:[]},{value:"GWDetermineFileTypeFromFile",id:"gwdeterminefiletypefromfile",children:[]},{value:"GWDetermineFileTypeFromFileAndReport",id:"gwdeterminefiletypefromfileandreport",children:[]},{value:"GWDetermineFileTypeFromFileInMem",id:"gwdeterminefiletypefromfileinmem",children:[]},{value:"GWDetermineFileTypeFromFileInMemAndReport",id:"gwdeterminefiletypefromfileinmemandreport",children:[]}],b={rightToc:o};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"hese functions may be used alongside the document processing functions for additional support on certain aspects or attributes such as determining the file extension for a given file."),Object(i.b)("p",null,"For every function that relies on an input file, it is the responsibility of the client application to ensure that the folder containing the specified file location exists. If the containing folder does not exist, or ","'","read privileges","'"," are not enabled, the processing function will return an error status."),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"int ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#gwdeterminefiletypefromfileinmem"}),Object(i.b)("strong",{parentName:"a"},"GWDetermineFileTypeFromFileInMem"))," (void ","*","inputBuffer, size","_","t inputBufferSize)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"int ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#gwdeterminefiletypefromfileandreport"}),Object(i.b)("strong",{parentName:"a"},"GWDetermineFileTypeFromFileInMemAndReport"))," (void ","*","inputBuffer, size","_","t inputBufferSize, void ","*","*","reportFileBuffer, size","_","t ","*","reportFileBufferLength)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"int ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#gwdeterminefiletypefromfile"}),Object(i.b)("strong",{parentName:"a"},"GWDetermineFileTypeFromFile"))," (const wchar","_","t ","*","inputFilePathName)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"int ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#gwdeterminefiletypefromfileinmemandreport"}),Object(i.b)("strong",{parentName:"a"},"GWDetermineFileTypeFromFileAndReport")),") (const wchar","_","t ","*","inputFilePathName, void ","*","*","reportFileBuffer, size","_","t ","*","reportFileBufferLength)"))),Object(i.b)("h2",{id:"gwdeterminefiletypefromfile"},"GWDetermineFileTypeFromFile"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"int GWDetermineFileTypeFromFile (const wchar","_","t ","*"," "),Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputFilePathName")," "),Object(i.b)("strong",{parentName:"p"},")")),Object(i.b)("p",null,"This function determines the file type for a given file provided it is supported by Glasswall."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"th"},"inputFilePathName")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"input file path for Glasswall processing."))),Object(i.b)("tbody",{parentName:"table"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#file-type-enumeration"}),Object(i.b)("strong",{parentName:"a"},"File Type Enumeration")),"  ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Remarks")),Object(i.b)("p",null,"Glasswall GWDetermineFileTypeFromFile example."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// Input file path, managed file output buffer and length\nconst wchar_t* inputFilePath = L"C:\\\\data\\\\temp1.pdf";\nvoid *fileImage              = NULL;\nsize_t fileImageLength        = 0;\n\n// Library configuration\nwchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\nif (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))\n{\n    wchar_t* fileType = NULL; \n    int eFileType     = 0;\n\n    // Determine the file type\n    eFileType = GWDetermineFileTypeFromFile(inputFilePath);\n\n    switch (eFileType)\n{\n        case 16:\n            fileType = L"pdf"; break;\n\n        case 17:\n            fileType = L"doc"; break;\n\n        ...\n\n        case 27:\n            fileType = L"wmf"; break;\n    }\n\n    if (fileType)\n    {\n        // Call Glasswall processing function\n        if(GWFileProtect(inputFilePath, fileType, &fileImage, &fileImageLength))\n\n        {\n            // Process the managed file image\n        }\n    }\n    else\n    {\n        // Error handling\n    }\n}\nelse\n{\n    // Error handling\n}\n\n// Release resources including the global buffers \nGWFileDone();\n')),Object(i.b)("h2",{id:"gwdeterminefiletypefromfileandreport"},"GWDetermineFileTypeFromFileAndReport"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"int GWDetermineFileTypeFromFileAndReport (const wchar","_","t ","*"," "),Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputFilePathName")," ")," ",Object(i.b)("strong",{parentName:"p"},", void ","*","*"," ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"reportFileBuffer")," ")," ",Object(i.b)("strong",{parentName:"p"},", size","_","t ","*"," ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"reportFileBufferLength")," "),Object(i.b)("strong",{parentName:"p"},")")),Object(i.b)("p",null,"This function determines the file type for a given file provided it is supported by Glasswall, it also populates an XML report with the approach used to determine the file type."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"th"},"inputFilePathName")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"input file path for Glasswall processing."))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"out"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysisFileBuffer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysis (XML) file buffer from Glasswall processing.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"out"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysisFileBufferLength"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"length of the analysisFileBuffer that has been allocated.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#file-type-enumeration"}),Object(i.b)("strong",{parentName:"a"},"File Type Enumeration"))," ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Remarks")),Object(i.b)("p",null,"Glasswall GWDetermineFileTypeFromFile example."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// Input file path, managed file output buffer and length\nconst wchar_t* inputFilePath    = L"C:\\\\data\\\\temp1.pdf";\n\nvoid *analysisFileBuffer        = NULL;\nsize_t analysisFileBufferLength = 0;\n\nvoid *fileImage                 = NULL;\nsize_t fileImageLength          = 0;\n\n// Library configuration\nwchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\nif (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))\n{\n    wchar_t* fileType = NULL;\n    int eFileType     = 0;\n\n    // Determine the file type\n    eFileType = GWDetermineFileTypeFromFileAndReport(inputFilePath, \n&analysisFileBuffer, &analysisFileBufferLength);\n\n    switch (eFileType)\n    {\n        case 16:\n            fileType = L"pdf"; break;\n\n        case 17:\n            fileType = L"doc"; break;\n\n        ...\n\n        case 27:\n            fileType = L"wmf"; break;  \n    }\n\n    if (fileType)\n    {\n        // Call Glasswall processing function\n        if(GWFileProtect(inputFilePath, fileType, &fileImage, &fileImageLength))\n        {\n            // Process the managed file image\n         // Report file type detection approach using content in analysisFileBuffer\n        }\n    }\n    else\n    {\n        // Error handling\n    }\n}\nelse\n{\n    // Error handling\n}\n\n// Release resources including the global buffers \nGWFileDone();\n')),Object(i.b)("h2",{id:"gwdeterminefiletypefromfileinmem"},"GWDetermineFileTypeFromFileInMem"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"int GWDetermineFileTypeFromFileInMem (void ","*"," "),Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputBuffer")," ")," ",Object(i.b)("strong",{parentName:"p"},", size","_","t ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputBufferSize")," "),Object(i.b)("strong",{parentName:"p"},")")),Object(i.b)("p",null,"This function determines the file type for a file stored in memory provided that the file type is supported by Glasswall."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"th"},"inputBuffer")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"input file buffer containing the files to be processed"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"inputBufferLength")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input file buffer length")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#file-type-enumeration"}),Object(i.b)("strong",{parentName:"a"},"File Type Enumeration")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Remarks")),Object(i.b)("p",null,"Glasswall GWDetermineFileTypeFromFileInMem example."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// input file buffer and length\n\nvoid *inputFileBuffer    = NULL;\nsize_t inputFileLength   = 0;\n\n// output buffer and length \nvoid *outputFileBuffer   = NULL;\nsize_t outputFileLength  = 0;\n\n// load file from a memory location\nif (eGwFileStatus_Success == LoadFileFromMemory(&inputFileBuffer, \n&inputFileLength))\n{\n    // Library configuration\n    wchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\n    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))\n    {\n        wchar_t* fileType = NULL; \n        int eFileType     = 0;\n\n        // Determine the file type\n        eFileType = GWDetermineFileTypeFromFileInMem(inputFileBuffer,\n inputFileLength);\n\n        switch (eFileType)\n       {\n            case 16:\n            fileType = L"pdf"; \n            break;\n\n            case 17:\n            fileType = L"doc"; \n            break;\n        ...\n\n            case 27:\n            fileType = L"wmf";\n            break;\n        }\n\n        if (fileType)\n        {\n            // Call Glasswall processing function\n            if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength,\n            fileType, &fileImage, &fileImageLength))\n            {\n                // Process the managed file image\n            } \n        }\n        else\n        {\n            // Error handling\n        }\n    }  \n    else\n    {\n        // Error handling\n    }\n\n        // free memory allocated by LoadFileFromMemory \n        gwFree(inputFileBuffer);\n}\nelse\n{\n// Error handling\n}\n\n// Release resources including the global buffers \nGWFileDone();\n')),Object(i.b)("h2",{id:"gwdeterminefiletypefromfileinmemandreport"},"GWDetermineFileTypeFromFileInMemAndReport"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"int GWDetermineFileTypeFromFileInMemAndReport (void ","*"," "),Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputBuffer")," ")," ",Object(i.b)("strong",{parentName:"p"},", size","_","t ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"inputBufferSize")," ")," ",Object(i.b)("strong",{parentName:"p"},", void ","*","*"," ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"reportFileBuffer")," ")," ",Object(i.b)("strong",{parentName:"p"},", size","_","t ","*"," ")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"reportFileBufferLength")," "),Object(i.b)("strong",{parentName:"p"},")")),Object(i.b)("p",null,"This function determines the file type for a given file provided it is supported by Glasswall, it also populates an XML report with the approach used to determine the file type."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"th"},"inputBuffer")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"input file buffer containing the files to be processed"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"inputBufferLength"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input file buffer length")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"out"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysisFileBuffer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysis (XML) file buffer from Glasswall","'","s file type detection mechanism.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"out"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"analysisFileBufferLength"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"length of the analysisFileBuffer that has been allocated.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_2-doc_processing_args#file-type-enumeration"}),Object(i.b)("strong",{parentName:"a"},"File Type Enumeration")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Remarks")),Object(i.b)("p",null,"Glasswall GWDetermineFileTypeFromFileInMemAndReport example."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// input file buffer and length \nvoid *inputFileBuffer              = NULL;\nsize_t inputFileLength             = 0;\n\n// determine file type output buffer and length \nvoid *fileTypeReportBuffer         = NULL; \nsize_t fileTypeReportBufferLength  = 0;\n\n// output file buffer and length\nvoid *outputFileBuffer             = NULL;\nsize_t outputFileLength            = 0;\n\n// load file from a memory location\nif (eGwFileStatus_Success == LoadFileFromMemory(&inputFileBuffer, \n&inputFileLength))\n{\n    // Library configuration\n    wchar_t* cmPolicy = getClientApplicationConfigurationXML();\n\n    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))  \n    {\n        wchar_t* fileType  = NULL; \n        int eFileType      = 0;\n\n        // Determine the file type\n        eFileType = GWDetermineFileTypeFromFileInMemAndReport(inputFileBuffer, \ninputFileLength, &fileTypeReportBuffer, &fileTypeReportBufferLength);\n\n        switch (eFileType) \n        {\n            case 16:\n                fileType = L"pdf"; \n                break;\n\n            case 17:\n                fileType = L"doc"; \n                break;\n            ...\n\n            case 27:\n                fileType = L"wmf"; \n                break;\n        }\n\n        if (fileType)\n        {\n            // Call Glasswall processing function \n            if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength,\nfileType, &fileImage, &fileImageLength))\n            {\n                // Process the managed file image\n            }\n        }\n        else\n        {\n            // Error handling\n        }\n\n        // Process xml report from GWDetermineFileTypeFromFileInMemAndReport \nstored in fileTypeReportBuffer\n    }\n    else\n    {\n        // Error handling\n    }\n\n    // free memory allocated by LoadFileFromMemory \n    gwFree(inputFileBuffer);\n}\nelse\n{\n// Error handling\n}\n\n// Release resources including the global buffers \nGWFileDone();\n')))}c.isMDXComponent=!0}}]);