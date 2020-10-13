(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{186:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return h}));var a=i(2),n=i(6),r=(i(0),i(227)),l={title:"Binary Data Definition Language (BDDL)"},o={unversionedId:"2-glasswall_core/artifacts/bddl",id:"2-glasswall_core/artifacts/bddl",isDocsHomePage:!1,title:"Binary Data Definition Language (BDDL)",description:"Binary Data Definition Language (BDDL)",source:"@site/docs/2-glasswall_core/artifacts/bddl.md",slug:"/2-glasswall_core/artifacts/bddl",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/artifacts/bddl",version:"current"},s=[{value:"Binary Data Definition Language (BDDL)",id:"binary-data-definition-language-bddl",children:[]},{value:"Binary DOM Library and Miraplacid Viewer",id:"binary-dom-library-and-miraplacid-viewer",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example",id:"example",children:[]}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=d("TABLE"),b=d("TR"),u=d("TH"),p=d("TD"),f={rightToc:s};function h(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},f,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"binary-data-definition-language-bddl"},"Binary Data Definition Language (BDDL)"),Object(r.b)("h1",{id:"overview"},"Overview"),Object(r.b)("p",null,"BDDL is a Domain Specific Language (DSL) that defines the format of a binary (or string based) file format in terms of the sequence and layouts of the structures that it is comprised of i.e. BDDL defines the structures, how they may be used and their valid forms. The language was designed to be non-procedural, simple and human readable and can describe virtually any file format and has support for practically any data structure that can be met in a file."),Object(r.b)("p",null,"To parse a file, a system needs to have knowledge about the internal structure\nof the file. There are several stages when generating a camera, the first\nof which is defining the internal structure of the file in BDDL before\ntranslating each definition to its final C++ form, with each structure\nbeing converted to a Class in C++ via an internally developed code\ngenerator. The diagram below shows the various stages involved in the\ncode generation process and where BDDL fits in."),Object(r.b)("p",null,Object(r.b)("img",{alt:"BDDL Process Diagram",src:i(302).default})),Object(r.b)("h2",{id:"binary-dom-library-and-miraplacid-viewer"},"Binary DOM Library and Miraplacid Viewer"),Object(r.b)("p",null,"Miraplacid supplies a data viewer as well as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"binDomLib.pdf",title:"binDomLib.pdf"}),"Binary DOM library")," that is used by Glasswall to test and validate the BDD definitions prior to generating C++ source files from them. "),Object(r.b)("p",null,"Miraplacid Data Viewer is a tool for convenient binary file internals analysis based on BDDL definitions. It represents a binary file structure as a tree and display the hexadecimal content for the file in a hex viewer. Selected tree items or nodes highlight the corresponding binary data in the hex viewer.  The viewer also has rich search and navigation functionality as well as the ability to save selected chunks of data to a file."),Object(r.b)("p",null,"Binary DOM is a software system designed for binary file content access and manipulation. The Binary DOM includes API (set of classes and interfaces for data loading, validation, manipulation and storing), and utility classes for parsing files and validation based on BDDL definitions. This gives the user the ability to develop tools and applications that can be used for various purposes including BDDL definition and document format validation."),Object(r.b)("h1",{id:"binary-data-definition-language"},"Binary Data Definition Language"),Object(r.b)("p",null,"The main building block of the binary data definition language is a document structure. Nested structures define an internal hierarchy of the document. Structures consist of items and rules. "),Object(r.b)("p",null,"An item is a field in structure described by type which could be a primitive data type, a structure (which is simply the name of a defined structure) or an enumeration type. "),Object(r.b)("u",null,"BDDL Primitive Data Types"),Object(r.b)("p",null,"\u2022   uint8 or Byte - byte\n\u2022   int8 or SByte - sbyte\n\u2022   uint16 or UInt16 - ushort\n\u2022   int16 or Int16 - short\n\u2022   uint32 or UInt32 - uint\n\u2022   int32 Int32 - int\n\u2022   uint64 or UInt64 - ulong big endian\n\u2022   int64 or Int64 - long big endian\n\u2022   uint16be or UInt16BE - ushort big endian\n\u2022   int16be or Int16BE - short big endian\n\u2022   uint32be Uint32BE - uint big endian\n\u2022   int32be or Int32BE - int big endian\n\u2022   uint64be or UInt64BE - ulong big endian\n\u2022   int64be or Int64BE - long big endian\n\u2022   char or Char - 8-bit character (ANSI)\n\u2022   wchar or UChar - 16-bit character (Unicode)\n\u2022   float or Float - single\n\u2022   double or Double - double"),Object(r.b)("p",null,"A rule is a condition that can be applied to a structure or a field. The rule is an expression which will be checked against this structure or field during parsing or validation, if the result of execution is false, structure or field will not be accepted."),Object(r.b)("u",null,"Main BDDL Rules"),Object(r.b)(c,{mdxType:"TABLE"},Object(r.b)(b,{mdxType:"TR"},Object(r.b)(u,{mdxType:"TH"},"Rule"),Object(r.b)(u,{mdxType:"TH"},"Description")),Object(r.b)(b,{mdxType:"TR"},Object(r.b)(p,{mdxType:"TD"},"optional"),Object(r.b)(p,{mdxType:"TD"},"When applied, if the current data item is omitted in a document that would not be an error.")),Object(r.b)(b,{mdxType:"TR"},Object(r.b)(p,{mdxType:"TD"},"implicit"),Object(r.b)(p,{mdxType:"TD"},'All items of a type with "implicit" flag will be expanded and inserted into parent structure directly.')),Object(r.b)(b,{mdxType:"TR"},Object(r.b)(p,{mdxType:"TD"},"allowempty"),Object(r.b)(p,{mdxType:"TD"},"If type or array is marked as \u201callowempty\u201d and it is empty in the document, an error will not be thrown.")),Object(r.b)(b,{mdxType:"TR"},Object(r.b)(p,{mdxType:"TD"},"restrictions"),Object(r.b)(p,{mdxType:"TD"},"Defines a special expression rule (in curly braces) which will be checked against the element. If the result of the rule execution is false - error will be reported.")),Object(r.b)(b,{mdxType:"TR"},Object(r.b)(p,{mdxType:"TD"},"AcceptRule"),Object(r.b)(p,{mdxType:"TD"},"A pseudo-item containing expression which will be checked against this structure during parsing or validation. If the result of execution is false, structure will not be accepted."))),Object(r.b)("p",null,"The language also provides various other attributes that aid in the definition of complex structures. More detailed information can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"BinaryViewer.chm",title:"BinaryViewer.chm"}),"Binary Dom Library")," documentation."),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("p",null,"The diagram below shows an example of a binary data definition in BDDL of two structures from the Microsoft Word Binary MS-DOC specification."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Alt text",src:i(303).default})),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("p",null,"The diagram below contains an example of a binary data definition in BDDL of a structure along-side the definition in Microsoft Word Binary MS-DOC specification."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Alt text",src:i(304).default})),Object(r.b)("h1",{id:"binary-data-definition-bdd---verification"},"Binary Data Definition (BDD) - Verification"),Object(r.b)("p",null,"As described in previous sections, there are several stages to generating the structural definitions for the Glasswall parsers, the first of which is translating the file formats protocols defined in their official specification into BDDL structure definitions, before translating the BDD definitions into C++ code. "),Object(r.b)("p",null,"Prior to converting the BDD files C++ there are several strategies and tests used for verifying that the structural definitions. This particularly includes the use of the Miraplacid Viewer and Binary DOM Library in conjunction with internally developed tools."),Object(r.b)("u",null,"Verification using the Miraplacid Data Viewer"),Object(r.b)("p",null,"The Miraplacid viewer can load a file and represent the file and all the internal structure as a tree based on a specified .bdd file i.e. parses a file based on a BDD definition."),Object(r.b)("p",null,"This allows a user to load a binary data file and parse it against the corresponding BDD definition, and visually verify that the file was parsed correctly and was therefore defined correctly."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"The image below serves as an example of a MS-Word file loaded into the Miraplacid viewer and parsed against the binary data definitions developed by Glasswall."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Alt text",src:i(305).default})),Object(r.b)("u",null,"Verification using the Miraplacid DOM library"),Object(r.b)("p",null,"Miraplacid Binary DOM includes an API (set of classes and interfaces for data loading, validation, manipulation and storing), and utility classes for parsing files and validating them using the binary data definition created in BDDL."),Object(r.b)("p",null,"Glasswall has developed a tool called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"BinDirectoryReader"}),"Bin Directory Reader")," using the Miraplacid Binary DOM SDK. The tool iterates over a directory of files, parsing and validating each file against a single or multiple BDD definitions, reporting the result of every processed file. This enables bulk verification of BDD structure definitions against a large set of files."),Object(r.b)("p",null,"The guide and SDK documentation for Miraplacid Binary DOM library can be found in the document ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"BinaryViewer.chm",title:"BinaryViewer.chm"}),"Binary Viewer"),"."),Object(r.b)("h1",{id:"bddl-developers-hints-and-tips"},"BDDL Developers hints and tips"),Object(r.b)("p",null,"Glasswall defined hints and tips for BDDL developers can be found in document ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"BddlHintsAndTips.pdf",title:"BddlHintsAndTips.pdf"}),"BDDL Hints and Tips")),Object(r.b)("h1",{id:"bddl-developer-guidelines-and-additions"},"BDDL Developer Guidelines and Additions"),Object(r.b)("p",null,"Glasswall defined BDDL development guidelines and additions can be found in document ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"BddlDeveloperGuidelines.pdf",title:"BddlDeveloperGuidelines.pdf"}),"BDDL Developer Guidelines"),"."),Object(r.b)("h1",{id:"related-links"},"Related Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"BinaryViewer.chm",title:"BinaryViewer.chm"}),"Binary DOM documentation")),Object(r.b)("li",{parentName:"ul"},"@ref BinDirectoryReader"),Object(r.b)("li",{parentName:"ul"},"@ref dvl"),Object(r.b)("li",{parentName:"ul"},"Glasswall Code Generators",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"@ref BddToCppConverter")))))}h.isMDXComponent=!0},227:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return f}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},b=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=c(i),p=a,f=b["".concat(l,".").concat(p)]||b[p]||u[p]||r;return i?n.a.createElement(f,o(o({ref:t},d),{},{components:i})):n.a.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},302:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/BDDLProcDia-148d314b111bc9044973594dfbbdd6a7.PNG"},303:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/BDDLExample1-1db879340fe981e3c0feb29e5decac13.PNG"},304:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/BDDLExample2-4a83d90a2aeadafb6cd7f46435b20e89.PNG"},305:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/BDDLExample3-5a395c32b5bc8b72344ca54c17ba189f.PNG"}}]);