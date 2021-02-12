(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),l=(n(0),n(278)),o={title:"3.1 Adding OOXML Support to Beyond Compare",sidebar_label:"3.1 Adding OOXML Support to Beyond Compare"},s={unversionedId:"3-guides/3_1-adding_ooxml_support_to_beyond_compare",id:"3-guides/3_1-adding_ooxml_support_to_beyond_compare",isDocsHomePage:!1,title:"3.1 Adding OOXML Support to Beyond Compare",description:"Make visible the internal content of files with file extensions .docx, .docm, .xlsx, .pptx, .pptm, and .xlsm using Beyond Compare 3.",source:"@site/docs/3-guides/3_1-adding_ooxml_support_to_beyond_compare.md",slug:"/3-guides/3_1-adding_ooxml_support_to_beyond_compare",permalink:"/docs/3-guides/3_1-adding_ooxml_support_to_beyond_compare",version:"current",sidebar_label:"3.1 Adding OOXML Support to Beyond Compare",sidebar:"someSidebar",previous:{title:"2.4.3 Glasswall C++ Code Generators",permalink:"/docs/2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators"},next:{title:"3.2 BDDL Guidelines",permalink:"/docs/3-guides/3_2-BddlDeveloperGuidelines"}},i=[{value:"1 Change the Folder Compare Settings",id:"1-change-the-folder-compare-settings",children:[]},{value:"2 Change Archive Handling",id:"2-change-archive-handling",children:[]},{value:"3 Change Session Settings",id:"3-change-session-settings",children:[]}],c={rightToc:i};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Make visible the internal content of files with file extensions .docx, .docm, .xlsx, .pptx, .pptm, and .xlsm using Beyond Compare 3."),Object(l.b)("h2",{id:"1-change-the-folder-compare-settings"},"1 Change the Folder Compare Settings"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open the ",Object(l.b)("strong",{parentName:"li"},"Folder Compare")," window")),Object(l.b)("p",null,Object(l.b)("img",{src:n(383).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Untick ",Object(l.b)("strong",{parentName:"p"},"Excel")," and ",Object(l.b)("strong",{parentName:"p"},"Word"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"In ",Object(l.b)("strong",{parentName:"p"},"Enabled file formats")," add '.rels' to the list of XML file types"))),Object(l.b)("p",null,Object(l.b)("img",{src:n(384).default})),Object(l.b)("h2",{id:"2-change-archive-handling"},"2 Change Archive Handling"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Options"),":")),Object(l.b)("p",null,Object(l.b)("img",{src:n(385).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Folder Views")," and change ",Object(l.b)("strong",{parentName:"li"},"Mask for Zip")," to:")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"*.zip;*.jar;*.ear;*.war;*.bcpkg;*.docx;*.docm;*.xlsx;*.pptx;*.pptm;*.xlsm\n")),Object(l.b)("p",null,Object(l.b)("img",{src:n(386).default})),Object(l.b)("h2",{id:"3-change-session-settings"},"3 Change Session Settings"),Object(l.b)("p",null,"Change ",Object(l.b)("strong",{parentName:"p"},"Session Settings")," to make it easy to expand and see all OCP files fully expanded."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open ",Object(l.b)("strong",{parentName:"li"},"Session Settings"))),Object(l.b)("p",null,Object(l.b)("img",{src:n(387).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Tick ",Object(l.b)("strong",{parentName:"li"},"Expand Subfolders")," and select ",Object(l.b)("strong",{parentName:"li"},"As folders always")," under ",Object(l.b)("strong",{parentName:"li"},"Archive Handling"),". "),Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Also update session defaults")," at the bottom.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(388).default})))}p.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||l;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},383:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},384:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adding_ooxml-02-add_rels-097f6fc2f71bf88bd3bcb7ca322fb9d8.png"},385:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adding_ooxml-03-select_options-027c26b5d1d731348896869faf881ac0.png"},386:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adding_ooxml-04-mask_for_zip_file-896fd972f75ffd74c37214f9c598811d.png"},387:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adding_ooxml-05-open_session_settings-2cfa2b5a7f90b7bef5fcd8f394971a5d.png"},388:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adding_ooxml-06-update_session_defaults-d8af15870705291727cb73248fc36601.png"}}]);