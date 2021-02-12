(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),O=r,m=p["".concat(i,".").concat(O)]||p[O]||d[O]||a;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(278)),i={title:"7.7.3 Get Word Version",sidebar_label:"7.7.3 Get Word Version"},c={unversionedId:"7-tools/7_7-office_binary/7_7_3-GetWordVersion",id:"7-tools/7_7-office_binary/7_7_3-GetWordVersion",isDocsHomePage:!1,title:"7.7.3 Get Word Version",description:"NAME",source:"@site/docs/7-tools/7_7-office_binary/7_7_3-GetWordVersion.md",slug:"/7-tools/7_7-office_binary/7_7_3-GetWordVersion",permalink:"/docs/7-tools/7_7-office_binary/7_7_3-GetWordVersion",version:"current",sidebar_label:"7.7.3 Get Word Version",sidebar:"someSidebar",previous:{title:"7.7.2 Get PowerPoint Version",permalink:"/docs/7-tools/7_7-office_binary/7_7_2-GetPowerPointVersion"},next:{title:"7.7.4 Test MSOfficeOpen",permalink:"/docs/7-tools/7_7-office_binary/7_7_4-TestMSOfficeOpen"}},s=[{value:"<strong>NAME</strong>",id:"name",children:[]},{value:"<strong>SYNOPSIS</strong>",id:"synopsis",children:[]},{value:"<strong>DESCRIPTION</strong>",id:"description",children:[]},{value:"*<strong>*OPTIONS**</strong>",id:"options",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>EXAMPLES</strong>",id:"examples",children:[]},{value:"<strong>AUTHOR</strong>",id:"author",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"name"},Object(a.b)("strong",{parentName:"h3"},"NAME")),Object(a.b)("p",null,"\u2003","\u2003","\u2003","\u2003","getWordVersion - report versions of Word Binary File Format files"),Object(a.b)("h3",{id:"synopsis"},Object(a.b)("strong",{parentName:"h3"},"SYNOPSIS")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"getWordVersion")," ",Object(a.b)("strong",{parentName:"p"},"--in"),"(=| )",Object(a.b)("em",{parentName:"p"},"input_directory")," ",Object(a.b)("strong",{parentName:"p"},"--out"),"(=| )",Object(a.b)("em",{parentName:"p"},"output_file"),"  ","[",Object(a.b)("strong",{parentName:"p"},"--files"),"]",Object(a.b)("strong",{parentName:"p"},"--debug"),"]",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"getWordVersion")," (",Object(a.b)("strong",{parentName:"p"},"--usage")," | ",Object(a.b)("strong",{parentName:"p"},"--help")," | ",Object(a.b)("strong",{parentName:"p"},"--version")," | ",Object(a.b)("strong",{parentName:"p"},"--man"),")"),Object(a.b)("h3",{id:"description"},Object(a.b)("strong",{parentName:"h3"},"DESCRIPTION")),Object(a.b)("p",null,"Read in each file whose extension matches the file glob ",Object(a.b)("em",{parentName:"p"},"*",".doc")," in ",Object(a.b)("em",{parentName:"p"},"input_directory")," and all subdirectories. Report the version of each matched file."),Object(a.b)("h3",{id:"options"},"*",Object(a.b)("strong",{parentName:"h3"},"*OPTIONS**")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--in"),Object(a.b)("br",{parentName:"p"}),"\n","The name of the directory containing the files to be analysed. getWordVersion will recurse downward through all sub-directories and process all files with extension .xls."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--out"),Object(a.b)("br",{parentName:"p"}),"\n","The name of the file where the analysis will be placed."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--files"),Object(a.b)("br",{parentName:"p"}),"\n","List the files within versions."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--man"),Object(a.b)("br",{parentName:"p"}),"\n","Display complete documentation and exit."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--help"),Object(a.b)("br",{parentName:"p"}),"\n","Display usage and one-line summary of each option and exit."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--version"),Object(a.b)("br",{parentName:"p"}),"\n","Display version information and exit."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--usage"),Object(a.b)("br",{parentName:"p"}),"\n","Display usage and exit."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"--debug"),Object(a.b)("br",{parentName:"p"}),"\n","Place debug information in file ",Object(a.b)("em",{parentName:"p"},"getWordVersion_DEBUG.txt"),". For development purposes."),Object(a.b)("h3",{id:"exit-status"},Object(a.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"success")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"non-zero"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"error")))),Object(a.b)("h3",{id:"examples"},Object(a.b)("strong",{parentName:"h3"},"EXAMPLES")),Object(a.b)("p",null,"The following command will recurse downward through the ",Object(a.b)("em",{parentName:"p"},"c:\\TestData\\OFFICE\\DOC")," directory and report in file ",Object(a.b)("em",{parentName:"p"},"getWordVersion.txt")," version-related statistics for all files with file extension .doc. "),Object(a.b)("p",null,"\xa0","\xa0","\xa0","\xa0",Object(a.b)("strong",{parentName:"p"},"getWordVersion --in")," c:\\TestData\\OFFICE\\DOC -",Object(a.b)("strong",{parentName:"p"},"-out")," c:\\getWordVersion_OUT.txt"),Object(a.b)("p",null,"This is the content of ",Object(a.b)("em",{parentName:"p"},"c:\\getWordVersion_OUT.txt"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: C:\\getWordVersion_OUT.txt\nDATE: 2020-11-04 14:42:47Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\nWord 1997   6     5.0%\nWord 2000   24   20.0%\nWord 2002   12   10.0%\nWord 2003   13   10.8%\nWord 2007   64   53.3%\nTotal files analysed: 120\n------------------------------------------------------------------------\nList of invalid values for cbRgFcLcb:\n\n0X3773:\n    PassProtected_01_Word1997_10000006.doc\n------------------------------------------------------------------------\nFILE C:\\getWordVersion_OUT.txt closed at 2020-11-04 14:42:47Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n")),Object(a.b)("p",null,"The following command will recurse downward through the ",Object(a.b)("em",{parentName:"p"},"c:\\TestData\\OFFICE\\DOC")," directory and report in file ",Object(a.b)("em",{parentName:"p"},"getWordVersion.txt")," version-related statistics for all files with file extension .doc. It will also provide a list of all the filenames, grouped under their versions."),Object(a.b)("p",null,"\xa0","\xa0","\xa0","\xa0",Object(a.b)("strong",{parentName:"p"},"getWordVersion --in")," c:\\TestData\\OFFICE\\DOC -",Object(a.b)("strong",{parentName:"p"},"-out")," c:\\getWordVersion_OUT_with_files.txt ",Object(a.b)("strong",{parentName:"p"},"--files")),Object(a.b)("p",null,"Below is part of the content of ",Object(a.b)("em",{parentName:"p"},"c:\\getWordVersion_OUT_with_files.txt"),". Each ellipsis (...) indicates a section of text has been removed for brevity in this document."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: C:\\Users\\MARTIN~1\\AppData\\Local\\Temp\\getWordVersion_OUT_with_files_opt.txt\nDATE: 2020-11-04 14:43:44Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\nWord 1997   6     5.0%\nWord 2000   24   20.0%\nWord 2002   12   10.0%\nWord 2003   13   10.8%\nWord 2007   64   53.3%\nTotal files analysed: 120\n------------------------------------------------------------------------\nList of invalid values for cbRgFcLcb:\n\n0X3773:\n    PassProtected_01_Word1997_10000006.doc\n------------------------------------------------------------------------\nFile names grouped by version:\nWord 1997:\n    EMB_UnclearEmb_EMB_01_Word1997_10000019.doc\n    ...\n    MET_01_Word1997_10009110.doc\nWord 2000:\n    01_Word2000_20000004.doc\n    01_Word2000_20000005.doc\n    ...\n    metadata.doc\n    RVSMDCmetadata.doc\nWord 2002:\n    EMB_UnclearEmb_EMB_01_Word2002_30001960.doc\n    HYP_02_BFF_Pass_Word2002_0001.doc\n    ...\n    Using Hyperlinks.doc\n    readme.doc\nWord 2003:\n    EMB_01_Word2003_40000017.doc\n    EMB_01_Word2003_40000031.doc\n    ...\n    nanmvc-nnmsfv-eng.doc\n    NGGDPP_Metadata_FAQ 05_05_09.doc\nWord 2007:\n    EMB_01_Word2007_50000827.doc\n    EMB_Tester_EmbeddedBMP.doc\n    ...\n    MetadataDocument1.doc\n    MetadataDocument2 - 2 Authors.doc\n------------------------------------------------------------------------\nFILE C:\\Users\\MARTIN~1\\AppData\\Local\\Temp\\getWordVersion_OUT_with_files_opt.txt closed at 2020-11-04 14:43:45Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n")),Object(a.b)("h3",{id:"author"},Object(a.b)("strong",{parentName:"h3"},"AUTHOR")),Object(a.b)("p",null,"Martin O'Brien ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")))}l.isMDXComponent=!0}}]);