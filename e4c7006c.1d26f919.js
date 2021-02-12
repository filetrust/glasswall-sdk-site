(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(278)),o={title:"7.11.2 Walk ZIP",sidebar_label:"7.11.2 Walk ZIP"},c={unversionedId:"7-tools/7_11-zip_archive/7_11_2-WalkZIP",id:"7-tools/7_11-zip_archive/7_11_2-WalkZIP",isDocsHomePage:!1,title:"7.11.2 Walk ZIP",description:"NAME",source:"@site/docs/7-tools/7_11-zip_archive/7_11_2-WalkZIP.md",slug:"/7-tools/7_11-zip_archive/7_11_2-WalkZIP",permalink:"/docs/7-tools/7_11-zip_archive/7_11_2-WalkZIP",version:"current",sidebar_label:"7.11.2 Walk ZIP",sidebar:"someSidebar",previous:{title:"7.11.1 check ZIP Signature",permalink:"/docs/7-tools/7_11-zip_archive/7_11_1-CheckZipSignature"},next:{title:"8.1.1.1 Office Open XML",permalink:"/docs/8-related/8_1-specifications/8_1_1-ms_office/8_1_1_1-office_open_xml"}},l=[{value:"<strong>NAME</strong>",id:"name",children:[]},{value:"<strong>SYNOPSIS</strong>",id:"synopsis",children:[]},{value:"<strong>DESCRIPTION</strong>",id:"description",children:[]},{value:"<strong>OPTIONS</strong>",id:"options",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>EXAMPLES</strong>",id:"examples",children:[]},{value:"<strong>AUTHOR</strong>",id:"author",children:[]},{value:"<strong>COPYRIGHT</strong>",id:"copyright",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"name"},Object(i.b)("strong",{parentName:"h3"},"NAME")),Object(i.b)("p",null,"walkZIP - show textual description of parts in a ZIP archive (Package)"),Object(i.b)("h3",{id:"synopsis"},Object(i.b)("strong",{parentName:"h3"},"SYNOPSIS")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"walkZIP --in"),"(=| )",Object(i.b)("em",{parentName:"p"},"inputdir")," ",Object(i.b)("strong",{parentName:"p"},"--out"),"(=| )",Object(i.b)("em",{parentName:"p"},"outputfile"),Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"walkZIP")," (",Object(i.b)("strong",{parentName:"p"},"--man")," | ",Object(i.b)("strong",{parentName:"p"},"--usage")," | ",Object(i.b)("strong",{parentName:"p"},"--help")," | ",Object(i.b)("strong",{parentName:"p"},"--version"),")"),Object(i.b)("h3",{id:"description"},Object(i.b)("strong",{parentName:"h3"},"DESCRIPTION")),Object(i.b)("p",null,"Read in each file and directory in ",Object(i.b)("em",{parentName:"p"},"inputdir")," , recursing downwards. Each\nfile that has a file extension indicating an Office Open XML file\nwill be processed, and if it is a ZIP archive the part names will be placed in ",Object(i.b)("em",{parentName:"p"},"outputfile"),", indented to show their hiearchy."),Object(i.b)("h3",{id:"options"},Object(i.b)("strong",{parentName:"h3"},"OPTIONS")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--in"),Object(i.b)("br",null),"\nThe directory through which ",Object(i.b)("em",{parentName:"p"},"walkZIP")," will recurse, looking for files with extensions that indicate an Office Open XML file."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--out"),Object(i.b)("br",null),"\nThe name of the file where the analysis will be placed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--man"),Object(i.b)("br",{parentName:"p"}),"\n","Display complete documentation and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--help"),Object(i.b)("br",{parentName:"p"}),"\n","Display usage and description of each option and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--version"),Object(i.b)("br",{parentName:"p"}),"\n","Display version information and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--usage"),Object(i.b)("br",{parentName:"p"}),"\n","Display usage and exit."),Object(i.b)("h3",{id:"exit-status"},Object(i.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Success")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Non-zero"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Failure")))),Object(i.b)("h3",{id:"examples"},Object(i.b)("strong",{parentName:"h3"},"EXAMPLES")),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0","The following Windows 10 terminal session reads recursively from directory ",Object(i.b)("em",{parentName:"p"},"c:\\TestData\\OFFICE\\OOXML")," and logs in file ",Object(i.b)("em",{parentName:"p"},"%TEMP%\\walkZIP_OUT.txt")," the structure of each Office Open XML file."),Object(i.b)("p",null,"\xa0","\xa0","\xa0","\xa0",Object(i.b)("strong",{parentName:"p"},"walkZIP --in c:\\TestData\\OFFICE\\OOXML --out %TEMP%\\walkZIP_OUT.txt"),"  "),Object(i.b)("p",null,"Here is an extract from file ",Object(i.b)("em",{parentName:"p"},"walkZIP_OUT.txt")," showing how the program indents part names to show the hierarchy of the file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: c:/TestData/OFFICE/OOXML/OOXML/DOCX/DOCX_010/01_Word1997_10000177.docx\n[Content_Types].xml\n_rels\n    .rels\ndocProps\n    app.xml\n    core.xml\nword\n    _rels\n        document.xml.rels\n    document.xml\n    embeddings\n        oleObject1.bin\n    fontTable.xml\n    media\n        image1.wmf\n    settings.xml\n    styles.xml\n    theme\n        theme1.xml\n    webSettings.xml\n------------------------------------------------------------------------\n")),Object(i.b)("h3",{id:"author"},Object(i.b)("strong",{parentName:"h3"},"AUTHOR")),Object(i.b)("p",null,"Martin O'Brien ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(i.b)("h3",{id:"copyright"},Object(i.b)("strong",{parentName:"h3"},"COPYRIGHT")),Object(i.b)("p",null,"\xa9"," 2014 Glasswall Solutions Limited"))}p.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(o,".").concat(m)]||s[m]||O[m]||i;return n?a.a.createElement(u,c(c({ref:t},b),{},{components:n})):a.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);