(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{227:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),u=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return n?a.a.createElement(b,i(i({ref:t},f),{},{components:n})):a.a.createElement(b,i({ref:t},f))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var f=2;f<o;f++)c[f]=n[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(227)),c={title:"PDF Inflate Flate Encoded Streams"},i={unversionedId:"artifacts/PdfInflateFlateDecode",id:"artifacts/PdfInflateFlateDecode",isDocsHomePage:!1,title:"PDF Inflate Flate Encoded Streams",description:"NAME",source:"@site/docs/artifacts/PdfInflateFlateDecode.md",slug:"/artifacts/PdfInflateFlateDecode",permalink:"/glasswall-sdk-site/docs/artifacts/PdfInflateFlateDecode",version:"current"},l=[{value:"NAME",id:"name",children:[]},{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"LOCATION",id:"location",children:[]},{value:"AUTHOR",id:"author",children:[]}],f={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"name"},"NAME"),Object(o.b)("p",null,"\u2003","\u2003","\u2003","\u2003",Object(o.b)("em",{parentName:"p"},"PdfInflateFlateDecode")," - Inflate all Flate encoded streams in a PDF file"),Object(o.b)("h3",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Looks for all occurrences of Flate encoded streams in the given PDF file\nand inflates them. The data for each inflated stream are placed in a\nfile named in the form 'object_nnn.bin' where 'nnn' represents the\nobject number of the Flate encoded stream."),Object(o.b)("h2",{id:"location"},"LOCATION"),Object(o.b)("p",null,"TBD"),Object(o.b)("p",null,"\\section Usage\nTBD"),Object(o.b)("h2",{id:"author"},"AUTHOR"),Object(o.b)("p",null,"Martin O'Brien"))}u.isMDXComponent=!0}}]);