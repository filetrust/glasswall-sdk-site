(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(278)),l={title:"2.1.3.4.6 Content Import And Export",sidebar_label:"2.1.3.4.6 Content Import And Export"},i={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_6-import_export",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_6-import_export",isDocsHomePage:!1,title:"2.1.3.4.6 Content Import And Export",description:"Glasswall Rebuild provides the ability to export and import certain content items from PDF and MS-Office documents.",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_6-import_export.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_6-import_export",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_6-import_export",version:"current",sidebar_label:"2.1.3.4.6 Content Import And Export",sidebar:"someSidebar",previous:{title:"2.1.3.4.5 Determine File Format",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_5-determine_file_format"},next:{title:"2.1.3.4.7 Supported File Format",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_7-supported_file_type"}},c=[{value:"Exportable Content",id:"exportable-content",children:[]},{value:"Importable Content",id:"importable-content",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Glasswall Rebuild provides the ability to export and import certain content items from PDF and MS-Office documents."),Object(o.b)("p",null,"This allows internal components of processed files to be made available to external programs for additional processing outside of the Glasswall Rebuild domain, enabling the user to validate the components externally before recomposing the files to include those externally modified components."),Object(o.b)("p",null,"In order to enable the user to carry out additional analysis on components within files, the files must be processed by the engine twice: once to extract a package containing a processed file, report any extracted components, and a second pass to reintegrate the externally analysed and/or modified components back into the document. The files are re-validated and regenerated for each pass to ensure file integrity."),Object(o.b)("h2",{id:"exportable-content"},"Exportable Content"),Object(o.b)("p",null,"The following bullet points list the exportable content supported in Export Mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Images:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"PNG"),Object(o.b)("li",{parentName:"ul"},"JPEG"),Object(o.b)("li",{parentName:"ul"},"GIF"),Object(o.b)("li",{parentName:"ul"},"EMF"),Object(o.b)("li",{parentName:"ul"},"WMF"))),Object(o.b)("li",{parentName:"ul"},"Text -- - This covers all text stored in a document.")),Object(o.b)("h2",{id:"importable-content"},"Importable Content"),Object(o.b)("p",null,"The following bullet points list the importable content supported in Import Mode."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Images"),Object(o.b)("li",{parentName:"ul"},"PNG"),Object(o.b)("li",{parentName:"ul"},"JPEG"),Object(o.b)("li",{parentName:"ul"},"GIF"),Object(o.b)("li",{parentName:"ul"},"EMF"),Object(o.b)("li",{parentName:"ul"},"WMF")))}s.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return _}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,_=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(_,i(i({ref:t},p),{},{components:r})):a.a.createElement(_,i({ref:t},p))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);