(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(284)),o={title:"2.2.6.1.5.2 Archive Manager Config",sidebar_label:"2.2.6.1.5.2 Archive Manager Config"},s={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_2-config",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_2-config",isDocsHomePage:!1,title:"2.2.6.1.5.2 Archive Manager Config",description:"`",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_2-config.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_2-config",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_2-config",version:"current",sidebar_label:"2.2.6.1.5.2 Archive Manager Config",sidebar:"someSidebar",previous:{title:"2.2.6.1.5.1 Archive Manager",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_1-archive-manager"},next:{title:"2.2.6.1.5.3 Example",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_5-archivemanager/2_2_6_1_5_3-example"}},l=[],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<?xml version="1.0" encoding="UTF-8"?>\n<config>\n    <wordConfig>\n        <embedded_files>sanitise</embedded_files>\n        <internal_hyperlinks>sanitise</internal_hyperlinks>\n        <external_hyperlinks>sanitise</external_hyperlinks>\n        <macros>sanitise</macros>\n        <metadata>sanitise</metadata>\n        <review_comments>sanitise</review_comments>\n    </wordConfig>\n    <archiveConfig libVersion="core2" defaultCompression="zip">\n        <doc>process</doc>\n        <docx>discard</docx>\n        <pdf>no_action</pdf>\n        <jpeg>process</jpeg>\n        <elf>discard</elf>\n        <obj>process</obj>\n    </archiveConfig>\n</config>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The word config section of the XML is the configuration that is passed down to the Glasswall engine. See the SDK documentation for more information."),Object(i.b)("li",{parentName:"ul"},"The archiveConfig section contains the settings for the Glasswall archive manager. Each element within this section is a file type, and the corresponding value is the action that must be performed when a file of this type is encountered when processing an archive. There are three possible actions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"process")," - Hand the file to the Glasswall CDR (Content Disarm and Reconstruction) engine for processing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"discard")," - The file will be removed from the resulting archive."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"no_action")," - The file will be copied (unprocessed) to the resulting archive.")),"The following attributes are required:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"libVersion")," specifies the Glasswall Engine that should be used, the possible values are:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Classic")," \u2013 Glasswall Rebuild Engine which can be found ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/filetrust/sdk-rebuild-eval"}),"here")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Core2")," \u2013 Glasswall Editor Engine which can be found ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/filetrust/sdk-editor-eval"}),"here")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"defaultCompression")," is the fallback archive format that should be used if unable to compress back to the original format (This applies to file types such as RAR where only decompression support is available)"),Object(i.b)("p",{parentName:"li"},"The following attributes are optional:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"recursionDepth")," can be used to specify the permitted depth of nested subfolders within the archives being processed. Archives exceeding this depth will be blocked and will not be regenerated. If this setting is not specified, the default depth is set to 2 levels. The maximum permitted depth is currently 100 (This is likely to change with future releases)."))))))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,u=b["".concat(o,".").concat(d)]||b[d]||_[d]||i;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);