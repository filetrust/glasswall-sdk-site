(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(278)),i={title:"7.10.1 Walk WMF",sidebar_label:"7.10.1 Walk WMF"},l={unversionedId:"7-tools/7_10-wmf/7_10_1-WalkWMF",id:"7-tools/7_10-wmf/7_10_1-WalkWMF",isDocsHomePage:!1,title:"7.10.1 Walk WMF",description:"NAME",source:"@site/docs/7-tools/7_10-wmf/7_10_1-WalkWMF.md",slug:"/7-tools/7_10-wmf/7_10_1-WalkWMF",permalink:"/docs/7-tools/7_10-wmf/7_10_1-WalkWMF",version:"current",sidebar_label:"7.10.1 Walk WMF",sidebar:"someSidebar",previous:{title:"7.9.5 GWFile Process Status Validator",permalink:"/docs/7-tools/7_9-testing/7_9_5-gwfile_process_status_validator"},next:{title:"7.11.1 check ZIP Signature",permalink:"/docs/7-tools/7_11-zip_archive/7_11_1-CheckZipSignature"}},s=[{value:"<strong>NAME</strong>",id:"name",children:[]},{value:"<strong>SYNOPSIS</strong>",id:"synopsis",children:[]},{value:"<strong>DESCRIPTION</strong>",id:"description",children:[]},{value:"<strong>OPTIONS</strong>",id:"options",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>BUGS</strong>",id:"bugs",children:[]},{value:"<strong>EXAMPLES</strong>",id:"examples",children:[]},{value:"<strong>AUTHOR</strong>",id:"author",children:[]},{value:"<strong>COPYRIGHT</strong>",id:"copyright",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"name"},Object(o.b)("strong",{parentName:"h3"},"NAME")),Object(o.b)("p",null,"walkWMF - show textual description of Windows Metafile (WMF) files"),Object(o.b)("h3",{id:"synopsis"},Object(o.b)("strong",{parentName:"h3"},"SYNOPSIS")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"walkWMF --in"),"(=| )",Object(o.b)("em",{parentName:"p"},"inputdir")," ",Object(o.b)("strong",{parentName:"p"},"--out"),"(=| )",Object(o.b)("em",{parentName:"p"},"outputfile"),Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"walkWMF")," (",Object(o.b)("strong",{parentName:"p"},"--man")," | ",Object(o.b)("strong",{parentName:"p"},"--usage")," | ",Object(o.b)("strong",{parentName:"p"},"--help")," | ",Object(o.b)("strong",{parentName:"p"},"--version"),")"),Object(o.b)("h3",{id:"description"},Object(o.b)("strong",{parentName:"h3"},"DESCRIPTION")),Object(o.b)("p",null,"Recurse downwards through ",Object(o.b)("em",{parentName:"p"},"inputdir"),', processing each file with extension\n.wmf. For each file, a file will be created whose name is the name of the file processed with ".txt" appended. The format of the output is provided by\nthe CPAN ',Object(o.b)("em",{parentName:"p"},"Dumpvalue")," module. How to interpret the results is explained in the ",Object(o.b)("em",{parentName:"p"},"EXAMPLES")," section below."),Object(o.b)("h3",{id:"options"},Object(o.b)("strong",{parentName:"h3"},"OPTIONS")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--in"),Object(o.b)("br",null),"\nThe directory through which ",Object(o.b)("em",{parentName:"p"},"walkWMF")," will recurse, looking for files with extension .wmf."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--out"),Object(o.b)("br",null),"\nThe file containing any diagnostics such as files it failed to open, files found that did not have an extension of .wmf, or any exceptions that were caught. It is important to note that the file structures of WMF files are not placed in here, they are placed in files named after the file with .txt suffixed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--man"),Object(o.b)("br",{parentName:"p"}),"\n","Display complete documentation and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--help"),Object(o.b)("br",{parentName:"p"}),"\n","Display usage and description of each option and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--version"),Object(o.b)("br",{parentName:"p"}),"\n","Display version information and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--usage"),Object(o.b)("br",{parentName:"p"}),"\n","Display usage and exit."),Object(o.b)("h3",{id:"exit-status"},Object(o.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Success")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Non-zero"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Failure")))),Object(o.b)("h3",{id:"bugs"},Object(o.b)("strong",{parentName:"h3"},"BUGS")),Object(o.b)("p",null,"The program can take a long time to run on large files (> 15 MB), an average\nof 30 seconds has been calculated. Smaller files take less than five seconds."),Object(o.b)("h3",{id:"examples"},Object(o.b)("strong",{parentName:"h3"},"EXAMPLES")),Object(o.b)("p",null,"The following Windows 10 command session demonstrates the use of the script to provide analysis of WMF files in the directory passed as an argument to the ",Object(o.b)("strong",{parentName:"p"},"--in")," option with diagnostics placed in the file provided by the ",Object(o.b)("strong",{parentName:"p"},"--out")," option:"),Object(o.b)("p",null,"\xa0","\xa0","\xa0","\xa0",Object(o.b)("strong",{parentName:"p"},"walkWMF --in c:\\TestData\\OFFICE\\OOXML --out %TEMP%\\walkWMF_output"),".txt"),Object(o.b)("p",null,"File ",Object(o.b)("em",{parentName:"p"},"walkWMF_output.txt")," contains this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: C:\\Users\\MARTIN~1\\AppData\\Local\\Temp\\walkWMF_output.txt\nDATE: 2020-11-10 13:02:52Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n------------------------------------------------------------------------\nTotal WMF files processed: 9\n------------------------------------------------------------------------\nFILE C:\\Users\\MARTIN~1\\AppData\\Local\\Temp\\walkWMF_output.txt closed at 2020-11-10 13:02:53Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n")),Object(o.b)("p",null,"Note that there were no non-WMF files encountered, and all files encountered were opened successfully."),Object(o.b)("p",null,"The structure of each of the files will be in a text file named after the file with '.txt' suffixed to the filename; it will be in the same director as the file analysed. Below is the directory structure after ",Object(o.b)("em",{parentName:"p"},"walkCFB")," has been run. All the files with extension .txt were created by ",Object(o.b)("em",{parentName:"p"},"walkCFB"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"c:\\TestData\\OFFICE\\OOXML\n\\---DOCX\n    +---DOCX_010-EXTRACTED\n    |   +---01_Word1997_10000176\n    |   |   \\---word\n    |   |       \\---media\n    |   |               image1.wmf\n    |   |               image1.wmf.txt\n    |   |               image2.wmf\n    |   |               image2.wmf.txt\n    |   |               image3.wmf\n    |   |               image3.wmf.txt\n    |   |               image4.wmf\n    |   |               image4.wmf.txt\n    |   |\n    |   \\---01_Word1997_10000177\n    |       \\---word\n    |           \\---media\n    |                   image1.wmf\n    |                   image1.wmf.txt\n    |\n    \\---DOCX_100-EXTRACTED\n        \\---01_Word1997_10003895\n            \\---word\n                \\---media\n                        image3.wmf\n                        image3.wmf.txt\n                        image4.wmf\n                        image4.wmf.txt\n                        image5.wmf\n                        image5.wmf.txt\n                        image6.wmf\n                        image6.wmf.txt\n")),Object(o.b)("p",null,"Here is an example of the contents of ",Object(o.b)("em",{parentName:"p"},"image4.wmf.txt"),". The file contains over 600 lines so certain parts have been removed for presentation here, marked with ellipses. How to interpret the output is explaine below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: image4.wmf.txt\nDATE: 2020-11-10 13:02:52Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n'header_size' => 9\n'number_of_objects' => 8\n'number_of_params' => 0\n'placeable_header' => HASH\n   'bottom' => 234\n   'checksum' => 22397\n   'handle' => 0\n   'key' => 2596720087\n   'left' => 0\n   'right' => 859\n   'top' => 0\n   'units_per_inch' => 989\n'records' => ARRAY\n   0  HASH\n      'function' => 'META_SETMAPMODE'\n      'params' => ARRAY\n         0  8\n      'size' => 4\n   1  HASH\n      'function' => 'META_SETWINDOWORG'\n      'params' => ARRAY\n         0  0\n         1  0\n      'size' => 5\n    ...\n'size' => 536\n'size_of_largest_record' => 28\n'type' => 'File'\n'version' => 768\n------------------------------------------------------------------------\nFILE image4.wmf.txt closed at 2020-11-10 13:02:52Z\nCopyright \xa9 2020 Glasswall Solutions Limited\n------------------------------------------------------------------------\n")),Object(o.b)("p",null,"The format ",Object(o.b)("em",{parentName:"p"},"walkWMF")," uses to describe the records in a WMF file is provided by the Perl CPAN module ",Object(o.b)("em",{parentName:"p"},"Dumpvalue"),"."),Object(o.b)("p",null,"In Perl, hash references are indicated by the word ",Object(o.b)("em",{parentName:"p"},"HASH")," (equivalent to dictionaries) followed by the paired contents separated by ",Object(o.b)("inlineCode",{parentName:"p"},"=>")," . In the example above I have shown the first two elements of the array ",Object(o.b)("em",{parentName:"p"},"RECORDS"),". If we\nreformat the output into a more familiar format, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.json.org/json-en.html"}),"JSON"),", the first two elements, records","[0]"," and records","[1]",", would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"'records':\n[\n   {\n      'function': 'META_SETMAPMODE',\n      'params: [8],\n      'size': 4\n   }\n   {\n      'function': 'META_SETWINDOWORG',\n      'params': [0, 1],\n      'size': 5\n   }\n    ...\n]\n")),Object(o.b)("h3",{id:"author"},Object(o.b)("strong",{parentName:"h3"},"AUTHOR")),Object(o.b)("p",null,"Martin O'Brien ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(o.b)("h3",{id:"copyright"},Object(o.b)("strong",{parentName:"h3"},"COPYRIGHT")),Object(o.b)("p",null,"\xa9"," 2014 Glasswall Solutions Limited"))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);