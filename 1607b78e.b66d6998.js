(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{278:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(278)),i={title:"7.7.5 Word Dissection",sidebar_label:"7.7.5 Word Dissection"},c={unversionedId:"7-tools/7_7-office_binary/7_7_5-WordDissection",id:"7-tools/7_7-office_binary/7_7_5-WordDissection",isDocsHomePage:!1,title:"7.7.5 Word Dissection",description:"DESCRIPTION",source:"@site/docs/7-tools/7_7-office_binary/7_7_5-WordDissection.md",slug:"/7-tools/7_7-office_binary/7_7_5-WordDissection",permalink:"/docs/7-tools/7_7-office_binary/7_7_5-WordDissection",version:"current",sidebar_label:"7.7.5 Word Dissection",sidebar:"someSidebar",previous:{title:"7.7.4 Test MSOfficeOpen",permalink:"/docs/7-tools/7_7-office_binary/7_7_4-TestMSOfficeOpen"},next:{title:"7.8.1 PDF Inflate Flate Encoded Streams",permalink:"/docs/7-tools/7_8-pdf/7_8_1-PdfInflateFlateDecode"}},s=[{value:"DESCRIPTION",id:"description",children:[]},{value:"LOCATION",id:"location",children:[]},{value:"USAGE",id:"usage",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"AUTHOR",id:"author",children:[]}],l={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Extracts structure and stream components from a word binary file and\nstores them as separate binary files, data which can then be used to\ntest/validate BDD structure definitions."),Object(o.b)("h3",{id:"location"},"LOCATION"),Object(o.b)("p",null,"Can be found at the following location in TFS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"inhouse.tools\\GWBinaryAnalysisTools\\MSOfficeAnalysis\\MSWordAnalysis\\WordDocumentStreamWalker\\WordDissection\\bin\\Release\\WordDissection.exe")),Object(o.b)("h3",{id:"usage"},"USAGE"),Object(o.b)("p",null,"WordDissection "),Object(o.b)("p",null,"Version: 1.8.3"),Object(o.b)("p",null,"WordDissection ",Object(o.b)("em",{parentName:"p"},"directoryToProcess")," ",Object(o.b)("em",{parentName:"p"},"command"),"\nwhere ",Object(o.b)("em",{parentName:"p"},"directoryToProcess")," is processed and all its subdirectories.\nThese directories need to have had ",Object(o.b)("em",{parentName:"p"},"walkCFB")," run on them already and\ncontain WordDocument.bin and 1Table.bin and/or 0Table.bin and optionally\ndata.bin."),Object(o.b)("p",null,"where ",Object(o.b)("em",{parentName:"p"},"command")," is one or more of these"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"h"),Object(o.b)("br",{parentName:"p"}),"\n","Get headings"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"d"),Object(o.b)("br",{parentName:"p"}),"\n","Get BLOB info"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"t"),Object(o.b)("br",{parentName:"p"}),"\n","Split table into substreams"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"c"),Object(o.b)("br",{parentName:"p"}),"\n","Create core file from WordDocument Stream, Table Stream, Data stream"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"o"),Object(o.b)("br",{parentName:"p"}),"\n","Overwrite; write files even if they exist"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"v"),Object(o.b)("br",{parentName:"p"}),"\n","Verbosely describe the processing"),Object(o.b)("h3",{id:"examples"},"EXAMPLES"),Object(o.b)("p",null,"The command"),Object(o.b)("p",null,"\u2003","\u2003",Object(o.b)("inlineCode",{parentName:"p"},"WordDissection c:\\testfiles tc"),"  "),Object(o.b)("p",null,"will create a TableStream subdirectory and its contents and the core\nstream binary for every *.doc directory in c:\\testfiles."),Object(o.b)("h1",{id:"worddissection-specification"},"WordDissection Specification"),Object(o.b)("h1",{id:"phase-1"},"Phase 1"),Object(o.b)("p",null,"Requirement:"),Object(o.b)("p",null,"Search directories previously processed by WalkCFB (with -streams option) looking for the binaries created from the streams withing CFB files."),Object(o.b)("p",null,"Taking Miraplacid Binary Reader sample as a base. Create a program that looks in the current directory and all its subdirectories.\nIf it finds a WordDocument.bin and at least a 1Table.bin or 0Table.bin file it begins processing the files."),Object(o.b)("p",null,"It has several options."),Object(o.b)("p",null,"Firstly it uses a copy of the WordDocument.bdd file as a schema (added as a resource to the program project) to dissect the WordDocumentStream.bin file."),Object(o.b)("p",null,"With the Bin-DOM tree generated, it searches for the base.fWhichTblStm flag and determines whether to use the 1Table.bin or 0Table.bin  as the TableStream of choice"),Object(o.b)("p",null,"With the Bin-DOM tree generated, it loops through the Blob looking for all the fc/lcb pairs."),Object(o.b)("p",null,"The 'H' option sends a comma separated list of the fc headers to the standard output\nThe 'D' option sends a comma separated list of the lcb sizesto the standard output"),Object(o.b)("p",null,"These are put together into text files for processing in Excel to build statistics about the Table Stream"),Object(o.b)("p",null,"The 'T' option creates a subdirectory called TableStream and writes a binary file for each fc/lcb pair (using the names in the Bin-DOM tree that came from the  WordDocument.bdd). The binary file is extracted from the TableStream at the fc offset for thr lcb number of bytes."),Object(o.b)("p",null,"The 'C' option creates the WordCoreStreams.bin file by concatenating the chosen Tablestream the Data stream (optional stream) and theWordDocumentStream.bin.\nIt will prefix this with  three 32 bit size fields for the size of each stream in the same order they are written.\nThis conform with the WordCoreStreams.bdd file."),Object(o.b)("p",null,"The 'O' option overwrites the output files if they already exist - but it doesnt change Read Only files."),Object(o.b)("h1",{id:"phase-2"},"Phase 2"),Object(o.b)("p",null,"Requirement:"),Object(o.b)("p",null,'Change commandline options to use "-name" form'),Object(o.b)("p",null,"H becomes -h or --headers\nD becomes -d or --data\nT becomes -t or --table\nC becomes -c or --core\nO becomes -o or --overrite"),Object(o.b)("p",null,"New Option "),Object(o.b)("p",null,"-w or --odraw"),Object(o.b)("p",null,"For every directory being processed.\nBring WordCoreStreams.BDD into the program as a resource.\nParse WordCoreStreams.bin into a Bin-DOM tree "),Object(o.b)("p",null,"Search through PLCs for a sprmCFSpec and sprmCPicLocation applied to the same CP\nUsing the rule defined in MS-DOC 1.3.5 Pictures, determine the offset into the Data stream where a PICFAndOfficeArtData object starts (which contains a header which determines the size of the object - a PICFAndOfficeArtData.bdd will be required for this)"),Object(o.b)("p",null,"PlcSpa (MS-DOC 2.9.253 Spa) also references a shape via the OfficeArtDggContainer. This should resolve to further ODraw data that could be extracted to a separate binary files."),Object(o.b)("p",null,"When these objects are found, they should be written to a subdirectory called 'DataStream' in the form 'Odraw_",Object(o.b)("em",{parentName:"p"},"data stream offset"),".bin"),Object(o.b)("h3",{id:"author"},"AUTHOR"),Object(o.b)("p",null,"Steven Warner"))}b.isMDXComponent=!0}}]);