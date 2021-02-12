(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{278:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(a),O=n,m=d["".concat(c,".").concat(O)]||d[O]||p[O]||b;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(278)),c={title:"8.1.9.5.3 File Specific Analysis - PDF",sidebar_label:"8.1.9.5.3 File Specific Analysis - PDF"},l={unversionedId:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_3-file_specific_analysis_pdf",id:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_3-file_specific_analysis_pdf",isDocsHomePage:!1,title:"8.1.9.5.3 File Specific Analysis - PDF",description:"gw:DocumentSummary",source:"@site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_3-file_specific_analysis_pdf.md",slug:"/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_3-file_specific_analysis_pdf",permalink:"/glasswall-sdk-site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_3-file_specific_analysis_pdf",version:"current",sidebar_label:"8.1.9.5.3 File Specific Analysis - PDF"},i=[{value:"gw:DocumentSummary",id:"gwdocumentsummary",children:[]},{value:"gw:ContentGroups",id:"gwcontentgroups",children:[{value:"File Structure",id:"file-structure",children:[]},{value:"File Content",id:"file-content",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"gwdocumentsummary"},"gw:DocumentSummary"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Node Name")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Description")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"gw:TotalSizeInBytes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of the file passed in for processing")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"gw:FileType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"pdf",'"',", passed in through the Glasswall API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"gw:Version")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read from the document","'","s Data Stream Header")))),Object(b.b)("h2",{id:"gwcontentgroups"},"gw:ContentGroups"),Object(b.b)("p",null,"The contents groups for PDF fall into two broad categories:"),Object(b.b)("h3",{id:"file-structure"},"File Structure"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Group")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Description")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Basic Object Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This content group reports on the basic PDF types:",Object(b.b)("li",null,"ARRAY","_","end"),Object(b.b)("li",null,"- ARRAY"),Object(b.b)("li",null,"BOOLEAN"),Object(b.b)("li",null,"COMMENT"),Object(b.b)("li",null,"DICTIONARY","_","end"),Object(b.b)("li",null,"DICTIONARY"),Object(b.b)("li",null,"NAME - NULL"),Object(b.b)("li",null,"NUMERIC","_","INTEGER"),Object(b.b)("li",null,"NUMERIC","_","REAL"),Object(b.b)("li",null,"POSTSCRIPT","_","EXPRESSION","_","end"),Object(b.b)("li",null,"POSTSCRIPT","_","EXPRESSION"),Object(b.b)("li",null,"POSTSCRIPT","_","OPERATOR","_","ARITHMETIC"),Object(b.b)("li",null,"POSTSCRIPT","_","OPERATOR","_","CONDITIONAL"),Object(b.b)("li",null,"POSTSCRIPT","_","OPERATOR","_","RELATIONAL"),Object(b.b)("li",null,"POSTSCRIPT","_","OPERATOR","_","STACK"),Object(b.b)("li",null,"REFERENCE"),Object(b.b)("li",null,"STREAM","_","end"),Object(b.b)("li",null,"STREAM","_","GRAPHICS","_","CMD","_","PAYLOAD"),Object(b.b)("li",null,"STREAM","_","GRAPHICS","_","CMD"),Object(b.b)("li",null,"STREAM"),Object(b.b)("li",null,"STRING","_","HEX"),Object(b.b)("li",null,"STRING","_","LITERAL"),Object(b.b)("li",null,"UNSPECIFIED"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Compressed XRef Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This content group reports on Compressed Cross Reference Table")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF File Section Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This content group reports on the high level structure of the document:",Object(b.b)("li",null,"PDF Comment Section Instances"),Object(b.b)("li",null,"PDF Cross Reference Table Instances"),Object(b.b)("li",null,"PDF Header Instances"),Object(b.b)("li",null,"PDF Object Instances"),Object(b.b)("li",null,"PDF StartXRef Section Instances"),Object(b.b)("li",null,"PDF Trailer Section Instances"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Graphic Content Stream Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This content group reports on Content Stream Structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Object Stream Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This content group reports on Object Stream Structure")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Trailer Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not used")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF XRef Structure")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not used")))),Object(b.b)("h3",{id:"file-content"},"File Content"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Group")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Description")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Common PDF Data Structures")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data structures for text strings, dates, rectangles, name trees, and number trees")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Annotations Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Associates objects such as notes, sound or movies with a location on page")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF ASCII Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decodes data encoded in an ASCII hexadecimal representation, reproducing the original binary data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF ASCII85 Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data encoded in an ASCII base-85 representation, reproducing the original binary data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Catalogue Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"References to other objects defining the document","'","s contents, outline, article threads, named destinations, and other attributes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF CCIT Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using the CCITT facsimile standard, reproducing the original data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Colour Space Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies colours of graphics objects to be painted on the current page")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Crypt Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decrypts data encrypted by a security handler, reproducing the original data as it was before encryption")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF DCT Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using a DCT (discrete cosine transform) technique based on")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Embedded Font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A font program can be embedded in a PDF file as data contained in a PDF stream object. Such a stream object is also called a font file by analogy with font programs that are available from sources external to the consumer application")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Filter Predictor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transformation by a predictor function, which improves the compression of sampled image data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Font Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A font is represented in PDF as a dictionary specifying the type of font, its PostScript name, its encoding, and information that can be used to provide a substitute when the font program is not available. Optionally, the font program can be embedded as a stream object in the PDF file")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Function Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function objects that represent parameterized classes of functions, including mathematical formulas and sampled representations with arbitrary resolution")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Graphic Content Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sequence of graphics objects to be painted on the page")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Graphic State Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A PDF consumer application maintains an internal data structure called the graphics state that holds current graphics control parameters. These parameters define the global framework within which the graphics operators execute. For example, the f (fill) operator implicitly uses the current colour parameter, and the S(stroke) operator additionally uses the current line width parameter from the graphics state")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Halftone Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data related to rendering grayscale elements on a bilevel device.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Huffman Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using the zlib/deflate compression method, reproducing the original text or binary data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF JBIG Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using the JBIG2 standard, reproducing the original monochrome")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF JPX Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using the wavelet-based JPEG2000 standard, reproducing the original image data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF LZW Filter Stream")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decompresses data encoded using the LZW (Lempel-Ziv-Welch) adaptive compression method, reproducing the original text or binary data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Name Tree Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Serves a similar purpose to a dictionary\u2014associating keys and values\u2014but by different means.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Number Tree Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A number tree is similar to a name tree, except that its keys are integers instead of strings and are sorted in ascending numerical order.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Optional Content Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Outline Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A PDF document may optionally display a document outline on the screen, allowing the user to navigate interactively from one part of the document to another. The outline consists of a tree-structured hierarchy of outline items (sometimes called bookmarks), which serve as a visual table of contents to display the document","'","s structure to the user.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Page Tree Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The pages of a document are accessed through a structure known as the page tree, which defines the ordering of pages in the document.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Pattern Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data relating to items such as a repeating figure or smooth gradient is called a pattern.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Resource Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The operands supplied to operators in a content stream may only be direct objects; indirect objects and object references are not permitted. In some cases, an operator needs to refer to a PDF object that is defined outside the content stream, such as a font dictionary or a stream containing image data. This can be accomplished by defining such objects as named resources and referring to them by name from within the content stream.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Structure Tree Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The logical structure of a document is described by a hierarchy of objects called the structure hierarchy or structure tree.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Threads Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some types of documents may contain sequences of content items that are logically connected but not physically sequential. For example, a news story may begin on the first page of a newsletter and run over onto one or more non-consecutive interior pages. To represent such sequences of physically discontiguous but logically related items, a PDF document may define one or more articles. The sequential flow of an article is defined by an article thread; the individual content items that make up the article are called beads on the thread. PDF viewer applications can provide navigation facilities to allow the user to follow a thread from one bead to the next.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Trailer Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The trailer of a PDF file enables an application reading the file to quickly find the cross-reference table and certain special objects.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF XObject Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A transparency group is represented in PDF as a special type of group XObject called a transparency group XObject.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"PDF Web Capture Data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Web Capture is a PDF 1.3 feature that allows information from Internet-based or locally resident HTML, PDF, GIF, JPEG, and ASCII text files to be imported into a PDF file.")))))}s.isMDXComponent=!0}}]);