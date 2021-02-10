(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),s=(n(0),n(278)),o={title:"7.5.1 Extract String Literals",sidebar_label:"7.5.1 Extract String Literals"},i={unversionedId:"7-tools/7_5-developer_tools/7_5_1-ExtractStrLit",id:"7-tools/7_5-developer_tools/7_5_1-ExtractStrLit",isDocsHomePage:!1,title:"7.5.1 Extract String Literals",description:"NAME",source:"@site/docs/7-tools/7_5-developer_tools/7_5_1-ExtractStrLit.md",slug:"/7-tools/7_5-developer_tools/7_5_1-ExtractStrLit",permalink:"/glasswall-sdk-site/docs/7-tools/7_5-developer_tools/7_5_1-ExtractStrLit",version:"current",sidebar_label:"7.5.1 Extract String Literals",sidebar:"someSidebar",previous:{title:"7.4.1 DVL Checker",permalink:"/glasswall-sdk-site/docs/7-tools/7_4-dvl/7_4_1-DVLChecker"},next:{title:"7.5.2 Glasswall Core Test Tools",permalink:"/glasswall-sdk-site/docs/7-tools/7_5-developer_tools/7_5_2-GlasswallToolsOverview"}},l=[{value:"<strong>NAME</strong>",id:"name",children:[]},{value:"<strong>SYNOPSIS</strong>",id:"synopsis",children:[]},{value:"<strong>DESCRIPTION</strong>",id:"description",children:[]},{value:"<strong>OPTIONS</strong>",id:"options",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>NOTES</strong>",id:"notes",children:[]},{value:"<strong>EXAMPLES</strong>",id:"examples",children:[]},{value:"<strong>AUTHORS</strong>",id:"authors",children:[]},{value:"<strong>COPYRIGHT</strong>",id:"copyright",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"name"},Object(s.b)("strong",{parentName:"h3"},"NAME")),Object(s.b)("p",null,"extractStrLit - report arguments passed to GW_ISSUE macros"),Object(s.b)("h3",{id:"synopsis"},Object(s.b)("strong",{parentName:"h3"},"SYNOPSIS")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"extractStrLit")," ",Object(s.b)("strong",{parentName:"p"},"--in")," ",Object(s.b)("em",{parentName:"p"},"input_directory")," ",Object(s.b)("strong",{parentName:"p"},"--out")," ",Object(s.b)("em",{parentName:"p"},"output_file")," ","[",Object(s.b)("strong",{parentName:"p"},"--debug"),"]",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"extractStrLit")," (",Object(s.b)("strong",{parentName:"p"},"--usage")," | ",Object(s.b)("strong",{parentName:"p"},"--help")," | ",Object(s.b)("strong",{parentName:"p"},"--version")," | ",Object(s.b)("strong",{parentName:"p"},"--man"),") ","[",Object(s.b)("strong",{parentName:"p"},"--debug"),"]"),Object(s.b)("h3",{id:"description"},Object(s.b)("strong",{parentName:"h3"},"DESCRIPTION")),Object(s.b)("p",null,"Read in each file and directory in ",Object(s.b)("em",{parentName:"p"},"input_directory"),", recursing downward. For each file, the group ID and string literal passed to each call of ",Object(s.b)("strong",{parentName:"p"},"GW_ISSUE")," will be reported. The output file will contain the names of all C source files found, and all non-C source files."),Object(s.b)("h3",{id:"options"},Object(s.b)("strong",{parentName:"h3"},"OPTIONS")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--in"),Object(s.b)("br",{parentName:"p"}),"\n","The name of the directory to be processed. Only files that match the file glob ",Object(s.b)("inlineCode",{parentName:"p"},"*.c")," will be processed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--out"),Object(s.b)("br",{parentName:"p"}),"\n","The name of the file where all processing output will be placed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--man"),Object(s.b)("br",{parentName:"p"}),"\n","Display complete documentation and exit."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--help"),Object(s.b)("br",{parentName:"p"}),"\n","Display usage and description of each option and exit."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--version"),Object(s.b)("br",{parentName:"p"}),"\n","Display version information and exit."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"--usage"),Object(s.b)("br",{parentName:"p"}),"\n","Display usage and exit."),Object(s.b)("h3",{id:"exit-status"},Object(s.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(s.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Success")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Non-zero"),Object(s.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Failure")))),Object(s.b)("h3",{id:"notes"},Object(s.b)("strong",{parentName:"h3"},"NOTES")),Object(s.b)("p",null,"extractStrLit treats C source files as text and does not parse it as C source code; therefore, it will report non-active ",Object(s.b)("strong",{parentName:"p"},"GW_ISSUE")," instances (e.g., those guarded by preprocessor macros or commented out.)"),Object(s.b)("h3",{id:"examples"},Object(s.b)("strong",{parentName:"h3"},"EXAMPLES")),Object(s.b)("p",null,"The following Windows 10 command session demonstrates the use of the script on the ",Object(s.b)("inlineCode",{parentName:"p"},"sdk.editor")," repository."),Object(s.b)("p",null,"First, retrieve the repository."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"> git clone https://dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.rebuild\nCloning into 'sdk.rebuild'...\nremote: Azure Repos\nremote: Found 36958 objects to send. (524 ms)\nReceiving objects: 100% (36958/36958), 104.12 MiB | 9.57 MiB/s, done.\nResolving deltas: 100% (24032/24032), done.\nUpdating files: 100% (10519/10519), done.\n")),Object(s.b)("p",null,"Now run the script:"),Object(s.b)("p",null,"\xa0","\xa0","\xa0","\xa0","$ ",Object(s.b)("strong",{parentName:"p"},"extractStrLit --in=c:\\DevOps\\sdk.rebuild --out=%TEMP%\\strlit.txt"),Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","Running extractStrLit.exe version 1.0.0",Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","Start time:  Tue Nov  3 09:00:46 2020",Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","End time: Tue Nov  3 09:00:49 2020  "),Object(s.b)("p",null,"\xa0","\xa0","\xa0","\xa0","This exe file was created with the evaluation version of Perl2Exe.",Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","For more information visit ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.indigostar.com"}),"http://www.indigostar.com"),Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","(The full version does not display this message with a 2 second delay.)",Object(s.b)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","...  "),Object(s.b)("p",null,"That produced file ",Object(s.b)("em",{parentName:"p"},"strlit.txt")," containing over 13,700 lines. Each file's result shows the Group ID followed by the string literal of each call to ",Object(s.b)("strong",{parentName:"p"},"GW_ISSUE"),". Here are the first few lines of ",Object(s.b)("em",{parentName:"p"},"strlit.txt"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'FILE: C:\\Users\\MARTIN~1\\AppData\\Local\\Temp\\strlit.txt\nDATE: Tue Nov  3 09:00:46 2020\nCOPYRIGHT GLASSWALL SOLUTIONS LIMITED\nSTART DIRECTORY: c:/DevOps/sdk.rebuild\n------------------------------------------------------------------------\n------------------------------------------------------------------------\nResults for file c:/DevOps/sdk.rebuild/src/code/application/office/office.compression.zlib.c\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "inflateInit() failed. Returned(%d)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "inflate() failed. Returned(%d)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "inflate() failed. Returned(%d) Msg(%s)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "deflateInit() failed. Returned(%d)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "deflate() failed. Returned(%d)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "deflate() failed. Returned(%d) Msg(%s)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "deflate() output length(%d) is greater than the input length(%d)."\n------------------------------------------------------------------------\nResults for file c:/DevOps/sdk.rebuild/src/code/application/pdf/pdf.camera.c\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "Incorrect parameter block passed to PDF camera"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "Incorrect parameter block passed to PDF camera"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "Could not obtain an intermediate buffer for the PDF camera"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "COMMON AREA buffer size(%d) has exceeded the maximum limit(%d)"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "Disallow all files"\neAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure   "Expect find percentage character followed by \'PDF\' - at the start of all PDF files"\neAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure   "Unspecified version of PDF header"\neAnalysisStatsID_Instances_DOCUMENT_PROCESSING  "Header signature bytes(%d) has exceeded the maximum(%d)"\neAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure   "Header signature bytes(%d) less than minimum(%d)"\neAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure   "Header signature bytes(%d) not recognised"\n')),Object(s.b)("h3",{id:"authors"},Object(s.b)("strong",{parentName:"h3"},"AUTHORS")),Object(s.b)("p",null,"Martin O'Brien ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(s.b)("h3",{id:"copyright"},Object(s.b)("strong",{parentName:"h3"},"COPYRIGHT")),Object(s.b)("p",null,"\xa9"," Glasswall Solutions Limited"))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,O=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return n?a.a.createElement(O,i(i({ref:t},c),{},{components:n})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);