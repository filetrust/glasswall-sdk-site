(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(6),a=(r(0),r(278)),o={title:"7.9.1 Binary Directory Reader",sidebar_label:"7.9.1 Binary Directory Reader"},l={unversionedId:"7-tools/7_9-testing/7_9_1-BinDirectoryReader",id:"7-tools/7_9-testing/7_9_1-BinDirectoryReader",isDocsHomePage:!1,title:"7.9.1 Binary Directory Reader",description:"NAME",source:"@site/docs/7-tools/7_9-testing/7_9_1-BinDirectoryReader.md",slug:"/7-tools/7_9-testing/7_9_1-BinDirectoryReader",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_1-BinDirectoryReader",version:"current",sidebar_label:"7.9.1 Binary Directory Reader",sidebar:"someSidebar",previous:{title:"7.8.1 PDF Inflate Flate Encoded Streams",permalink:"/glasswall-sdk-site/docs/7-tools/7_8-pdf/7_8_1-PdfInflateFlateDecode"},next:{title:"7.9.2 Command Line Test Tool",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_2-GlasswallCommandLineTestTool"}},s=[{value:"<strong>NAME</strong>",id:"name",children:[]},{value:"<strong>SYNOPSIS</strong>",id:"synopsis",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"<strong>OPTIONS</strong>",id:"options",children:[]},{value:"Requirements of BinDirectoryReader",id:"requirements-of-bindirectoryreader",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>BUGS</strong>",id:"bugs",children:[]},{value:"<strong>EXAMPLES</strong>",id:"examples",children:[]},{value:"<strong>SEE ALSO</strong>",id:"see-also",children:[]},{value:"AUTHORS",id:"authors",children:[]}],c={rightToc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"name"},Object(a.b)("strong",{parentName:"h3"},"NAME")),Object(a.b)("p",null,"BinDirectoryReader - test files against BDDL definitions"),Object(a.b)("h3",{id:"synopsis"},Object(a.b)("strong",{parentName:"h3"},"SYNOPSIS")),Object(a.b)("div",{style:{color:"red"}},"Complete this according to"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/filetrust/Glasswall-Documents-Triage/blob/master/rfc_glasswall_core_documentation_format.md#32-synopsis"}),"RFC: SYNOPSIS")),Object(a.b)("p",null,"BinDirectoryReader -d -f -s -l"),Object(a.b)("h3",{id:"description"},"DESCRIPTION"),Object(a.b)("div",{style:{color:"red"}},"Complete this according to"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/filetrust/Glasswall-Documents-Triage/blob/master/rfc_glasswall_core_documentation_format.md#33-description"}),"RFC: DESCRIPTION")),Object(a.b)("p",null,"Tests directory full of files against a BDDL definition as a way of confirming that it will generate identical file once translated to C++."),Object(a.b)("h4",{id:"operation"},"Operation"),Object(a.b)("div",{style:{color:"red"}},"Is MP Miraplacid?")," Don't use abbreviations without explaining them.",Object(a.b)("div",{style:{color:"red"}},'"Operation" is not a sub-section defined in RFC. See if there\'s a defined place to put it.'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Load the options"),Object(a.b)("li",{parentName:"ul"},"Load the schema file and asks the Miraplacid SDK (MP) to try to parse it. Stops with error if that fails."),Object(a.b)("li",{parentName:"ul"},"Start searching the directory for the matching files."),Object(a.b)("li",{parentName:"ul"},"For each binary file:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Get MP to try to parse the file into a MP Binary DOM tree. Skip to next file with error if that fails, with output of reason for failure. "),Object(a.b)("li",{parentName:"ul"},"If the file loads into the BinDOM tree, get MP to rewrite the tree to a binary form into a memorybuffer (memorystream/bytearray) and comparing it to the original\nbinary file that was input.\nIf that does not match, report the error and output the created binary file to the output path for rebuilt binaries\n(prepended with the full path for the original file minus the leading drive name)"),Object(a.b)("li",{parentName:"ul"},"If required by options (Option to generate rebuilt binaries even if unrequired),\noutput the recreated binary file to the output path for rebuilt binaries regardless of whether it passed\n(prepended with the full path for the original file minus the leading drive name)"),Object(a.b)("li",{parentName:"ul"},"If required by options (Output path for debug files),\nOutput the debug report for the file - generated by MP in the form of a text version of the files' tree structure.")))),Object(a.b)("h3",{id:"options"},Object(a.b)("strong",{parentName:"h3"},"OPTIONS")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"-d"),Object(a.b)("br",null),"\nThe root directory where the search for files will start. BinDirectoryReader will recurse downward through all sub-directories."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"-f"),Object(a.b)("br",null),"\nA filename or wildcard specifying which instances to find; for example, ",Object(a.b)("inlineCode",{parentName:"p"},"sttb.bin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"plc*.bin")," or ",Object(a.b)("inlineCode",{parentName:"p"},"wordcorestreams.bin"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"-s"),Object(a.b)("br",null),"\nThe fully qualified name of the BDDL schema to parse that matches the binary files being sought."),Object(a.b)("p",null,"? Output path for rebuilt binaries"),Object(a.b)("p",null,"? Output path for debug files"),Object(a.b)("p",null,"? Option to generate rebuilt binaries even if unrequired"),Object(a.b)("h3",{id:"requirements-of-bindirectoryreader"},"Requirements of BinDirectoryReader"),Object(a.b)("p",null,"Above is not a RFC section header. See where the best place for this will go in one of the recommended\nheadings: See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/filetrust/Glasswall-Documents-Triage/blob/master/rfc_glasswall_core_documentation_format.md"}),"Request for Comments: Standardisation of Core Team Documentation for Programs and Scripts"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Take BinReader Example from Miraplacid as base.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},'Add means of taking options from the commandline in the form "-option value"')),Object(a.b)("h3",{id:"exit-status"},Object(a.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(a.b)("h3",{id:"bugs"},Object(a.b)("strong",{parentName:"h3"},"BUGS")),Object(a.b)("h3",{id:"examples"},Object(a.b)("strong",{parentName:"h3"},"EXAMPLES")),Object(a.b)("h3",{id:"see-also"},Object(a.b)("strong",{parentName:"h3"},"SEE ALSO")),Object(a.b)("h3",{id:"authors"},"AUTHORS"),Object(a.b)("p",null,"Steven Warner, Roman Danilov"))}b.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,f=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return r?i.a.createElement(f,l(l({ref:t},c),{},{components:r})):i.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);