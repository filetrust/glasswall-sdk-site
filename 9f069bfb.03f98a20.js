(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return _}));var n=r(2),a=r(6),i=(r(0),r(278)),o={title:"2.1.3.4.3 Automatic Corrections",sidebar_label:"2.1.3.4.3 Automatic Corrections"},l={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections",isDocsHomePage:!1,title:"2.1.3.4.3 Automatic Corrections",description:"Overview",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections",version:"current",sidebar_label:"2.1.3.4.3 Automatic Corrections",sidebar:"someSidebar",previous:{title:"2.1.3.4.4.2 Configuration Management XSD",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd"},next:{title:"2.1.3.4.5 Determine File Format",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_5-determine_file_format"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Remediation",id:"remediation",children:[]}],s={rightToc:c};function _(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"Automatic corrections back to the file specification is performed on file regeneration. The purpose of this is to enable Glasswall Rebuild to take out threats that are hidden within the file structure as well as preventing the possibility of activating exploits via the misuse of structural components in the file."),Object(i.b)("p",null,"In analysis mode, all automatic corrections made to a file are reported as remedy items."),Object(i.b)("h3",{id:"remediation"},"Remediation"),Object(i.b)("p",null,"There are various types of remedies that are performed across all supported file types."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unrecognised objects that are hidden within the file structure and are not defined in the official specification are removed."),Object(i.b)("li",{parentName:"ul"},"Where possible, components of a file that deviate from the manufacturers specification are corrected back to the standards set in the specification, otherwise an issue is reported."),Object(i.b)("li",{parentName:"ul"},"As mentioned in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_1-configManamentPolicies"}),Object(i.b)("strong",{parentName:"a"},"Content Management"))," section, content management is not configurable on image files therefore content such as metadata is removed from images in addition to the points above.")))}_.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),_=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=_(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=_(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?a.a.createElement(d,l(l({ref:t},s),{},{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);