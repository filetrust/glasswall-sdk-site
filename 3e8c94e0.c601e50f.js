(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(226)),c={title:"checkZIPSignature"},o={unversionedId:"artifacts/internalCheckZipSignature",id:"artifacts/internalCheckZipSignature",isDocsHomePage:!1,title:"checkZIPSignature",description:"NAME",source:"@site/docs/artifacts/internalCheckZipSignature.md",slug:"/artifacts/internalCheckZipSignature",permalink:"/glasswall-sdk-site/docs/artifacts/internalCheckZipSignature",version:"current"},p=[{value:"NAME",id:"name",children:[]},{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"<strong>EXIT STATUS</strong>",id:"exit-status",children:[]},{value:"AUTHOR",id:"author",children:[]},{value:"COPYRIGHT",id:"copyright",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"name"},"NAME"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"checkZIPSignature")," - analyse files containing ZIP archive signature"),Object(i.b)("h3",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"checkCFBSignature --in","[=]",Object(i.b)("em",{parentName:"p"},"input_directory")," --out","[=]",Object(i.b)("em",{parentName:"p"},"output_file"),Object(i.b)("br",{parentName:"p"}),"\n","checkCFBSignature --in","[=]",Object(i.b)("em",{parentName:"p"},"input_directory")," --out","[=]",Object(i.b)("em",{parentName:"p"},"output_file")," --copy --target_dir","[=]",Object(i.b)("em",{parentName:"p"},"target_directory"),Object(i.b)("br",{parentName:"p"}),"\n","checkCFBSignature --in","[=]",Object(i.b)("em",{parentName:"p"},"input_directory")," --out","[=]",Object(i.b)("em",{parentName:"p"},"output_file")," --move --target_dir","[=]",Object(i.b)("em",{parentName:"p"},"target_directory")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--in"),Object(i.b)("br",{parentName:"p"}),"\n","The name of the CFB file to be analysed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--out"),Object(i.b)("br",{parentName:"p"}),"\n","The name of the file where the analysis is to be placed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--copy"),Object(i.b)("br",{parentName:"p"}),"\n","Boolean. Copy files that do not contain the ZIP archive signature into the directory specified by ",Object(i.b)("strong",{parentName:"p"},"--target_dir"),". The target directory will be created if it does not exist."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--move"),Object(i.b)("br",{parentName:"p"}),"\n","Boolean. Move files that do not contain the ZIP archive signature into the directory specified by ",Object(i.b)("strong",{parentName:"p"},"--target_dir"),". The target directory will be created if it does not exist."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--target_dir"),Object(i.b)("br",{parentName:"p"}),"\n","Mandatory if ",Object(i.b)("strong",{parentName:"p"},"--copy")," or ",Object(i.b)("strong",{parentName:"p"},"--move")," is specified. The directory into which non-matching files will be moved or copied."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--debug"),Object(i.b)("br",{parentName:"p"}),"\n","Display debug information. For development purposes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--man"),Object(i.b)("br",{parentName:"p"}),"\n","Display comprehensive help and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--help"),Object(i.b)("br",{parentName:"p"}),"\n","Display usage and description of each option and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--version"),Object(i.b)("br",{parentName:"p"}),"\n","Output version information and exit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"--usage"),Object(i.b)("br",{parentName:"p"}),"\n","Display usage and exit."),Object(i.b)("h3",{id:"exit-status"},Object(i.b)("strong",{parentName:"h3"},"EXIT STATUS")),Object(i.b)("p",null,"0          success",Object(i.b)("br",{parentName:"p"}),"\n","non-zero   error"),Object(i.b)("h3",{id:"author"},"AUTHOR"),Object(i.b)("p",null,"Martin O'Brien ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(i.b)("h3",{id:"copyright"},"COPYRIGHT"),Object(i.b)("p",null,"Glasswall Solutions Limited."))}l.isMDXComponent=!0},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);