(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(227)),c={title:"CFB Geneology"},i={unversionedId:"artifacts/CFBGeneology",id:"artifacts/CFBGeneology",isDocsHomePage:!1,title:"CFB Geneology",description:"NAME",source:"@site/docs/artifacts/CFBGeneology.md",slug:"/artifacts/CFBGeneology",permalink:"/glasswall-sdk-site/docs/artifacts/CFBGeneology",version:"current"},b=[{value:"NAME",id:"name",children:[]},{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"<strong>EXAMPLE</strong>",id:"example",children:[]},{value:"<strong>SEE ALSO</strong>",id:"see-also",children:[]},{value:"AUTHOR",id:"author",children:[]},{value:"COPYRIGHT",id:"copyright",children:[]}],p={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"name"},"NAME"),Object(o.b)("p",null,"\u2003","\u2003","\u2003","\u2003",Object(o.b)("em",{parentName:"p"},"cfbGeneology")," - provide textual analysis of red-black tree in a Compound File Binary (CFB) file"),Object(o.b)("h3",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"\u2003","\u2003","\u2003","\u2003","cfbGeneology --in(=| )",Object(o.b)("em",{parentName:"p"},"inputfile")," --out(=| )",Object(o.b)("em",{parentName:"p"},"outputfile"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","\u2003","cfbGeneology (--man | --help | --version | --usage)"),Object(o.b)("h3",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"\u2003","\u2003","\u2003","\u2003","cfbGeneology analyses CFB format files and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID. This allows analysis of the CFB red-black tree within each file."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--in"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","The name of the CFB file to be analysed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--out"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","The name of the file where the analysis is to be placed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--man"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","Display comprehensive help and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--help"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","Display usage and description of each option and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--version"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","Output version information and exit."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"--usage"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","Display usage and exit."),Object(o.b)("h3",{id:"exit-status"},Object(o.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(o.b)("p",null,"\u2003","\u2003","\u2003","\u2003","0          success",Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","\u2003","non-zero   error"),Object(o.b)("h3",{id:"example"},Object(o.b)("strong",{parentName:"h3"},"EXAMPLE")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"cfbGeneology --in=c:\\docs\\doc_01.doc  --out=c:\\output_directory\\doc_01-GENEOLOGY.txt"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","Analyse file doc_01.doc in directory c:\\docs and place the output in file doc_01-GENEOLOGY.txt in directory c:\\output_directory.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"cfbGeneology --in c:\\docs\\doc_01.doc --out c:\\output_directory\\doc_01-GENEOLOGY.txt"),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","As above, but shows that ",Object(o.b)("inlineCode",{parentName:"p"},"=")," is optional.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},'cfbGeneology --in="c:\\docs directory\\doc_01.doc" --out="c:\\output directory\\doc_01-GENEOLOGY.txt"'),Object(o.b)("br",{parentName:"p"}),"\n","","\u2003","\u2003","\u2003","As above, but shows use of ",Object(o.b)("inlineCode",{parentName:"p"},'"')," when paths contain spaces."),Object(o.b)("h3",{id:"see-also"},Object(o.b)("strong",{parentName:"h3"},"SEE ALSO")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"CheckCFBSignature"}),"checkCFBSignature"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"WalkCFB"}),"walkCFB")),Object(o.b)("h3",{id:"author"},"AUTHOR"),Object(o.b)("p",null,"Martin O'Brien ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(o.b)("h3",{id:"copyright"},"COPYRIGHT"),Object(o.b)("p",null,"Glasswall Solutions Limited."))}l.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(n),O=r,d=s["".concat(c,".").concat(O)]||s[O]||u[O]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);