(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(278)),r={title:"2.1.7.1.2 Configuration",sidebar_label:"2.1.7.1.2 Configuration"},l={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration",isDocsHomePage:!1,title:"2.1.7.1.2 Configuration",description:"Overview",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration",version:"current",sidebar_label:"2.1.7.1.2 Configuration",sidebar:"someSidebar",previous:{title:"2.1.7.1.1 API Overview",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview"},next:{title:"2.1.7.1.3 Additional Features",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_3-additional_features"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Watermarking",id:"watermarking",children:[]},{value:"Content Management",id:"content-management",children:[]},{value:"Configuration Management API",id:"configuration-management-api",children:[]},{value:"Terminology",id:"terminology",children:[{value:"Content Management Policy",id:"content-management-policy",children:[]},{value:"Content Management Switch",id:"content-management-switch",children:[]},{value:"Content Management Switch Setting",id:"content-management-switch-setting",children:[]}]},{value:"Configuration Management Example",id:"configuration-management-example",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The various document processing options (document analysis, document processing, process reporting) provided by the Glasswall library are predominantly available through the discrete functions of the API. In addition to these high-level processing options there are a number of additional processing options. These options enable third-party users to fine-tune the operation of the library to their specific needs and are described in the following sections."),Object(o.b)("p",null,"Changes are made to the Glasswall configuration through the Configuration Management API."),Object(o.b)("h2",{id:"watermarking"},"Watermarking"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This feature is only applicable to PDF documents")),Object(o.b)("p",null,"Watermarking enables a visible indication that the document has been processed by Glasswall. The specified text is added to a corner of each page within the document."),Object(o.b)("h2",{id:"content-management"},"Content Management"),Object(o.b)("p",null,"Content Management Policies allow control of various document element types such as file attachments, executable code, interactive form content and a number of actions (e.g., external links, execution of JavaScript). These document element types are known to be common attack vectors and when they are encountered within a document the Content Management Policy will define how Glasswall should process them. Each document type has its own Content Management Policy."),Object(o.b)("p",null,"The active Content Management Policy can be updated on a document by document basis, but it must be set prior to Glasswall being able to process any document. In the event of the Content Management Policy not being set before processing documents, documents will be classified as ","'","non-conforming","'","."),Object(o.b)("h2",{id:"configuration-management-api"},"Configuration Management API"),Object(o.b)("p",null,"The Glasswall Configuration Management API provides 3 principle operations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Set the configuration (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_4-configuration_functions#gwfileconfigxml"}),Object(o.b)("strong",{parentName:"a"},"GWFileConfigXML")),")   ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Retrieve the current configuration (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_4-configuration_functions#gwfileconfigget"}),Object(o.b)("strong",{parentName:"a"},"GWFileConfigGet ")),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Reset the current configuration to default settings (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_6-lib_modules/2_1_7_1_6_4-configuration_functions#gwfileconfigreverttodefaults"}),Object(o.b)("strong",{parentName:"a"},"GWFileConfigRevertToDefaults")),")  "))),Object(o.b)("p",null,"A Glasswall API function  ",Object(o.b)("strong",{parentName:"p"},"GWFileConfigXML"),"  is provided to enable the Glasswall library to be configured with a greater degree of flexibility. The API takes the required configuration as an XML null terminated string, as defined by the Configuration Management XSD."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"GWFileConfigGet"),"  can be called at any time to retrieve the current configuration in use by the Glasswall library. A call to  ",Object(o.b)("strong",{parentName:"p"},"GWFileConfigGet"),"  after the Glasswall library has been loaded gives access to the available configuration items and their default values. If these default values are suitable, this XML string can be used to configure the library by passing it into the  ",Object(o.b)("strong",{parentName:"p"},"GWFileConfigXML"),"  function."),Object(o.b)("p",null,"It is not necessary to send a full configuration string to  ",Object(o.b)("strong",{parentName:"p"},"GWFileConfigXML")," , only those configuration items that need to be changed are required."),Object(o.b)("h2",{id:"terminology"},"Terminology"),Object(o.b)("h3",{id:"content-management-policy"},"Content Management Policy"),Object(o.b)("p",null,"Content Management Policies are used to specify the set of content management switches that should be applied to a particular document type. In the example below, there are two policies specified, one for pdfConfig and one for wordConfig."),Object(o.b)("h3",{id:"content-management-switch"},"Content Management Switch"),Object(o.b)("p",null,"The content management switch is used to identify a document element type and associated action. In the example below, the full set of allowable content management switches for pdfConfig has been specified."),Object(o.b)("h3",{id:"content-management-switch-setting"},"Content Management Switch Setting"),Object(o.b)("p",null,"The content management setting is used to specify what actions carried out by the Glasswall library for a particular content management switch. There are three available Content Management Switch Settings:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Switch Setting")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"allow")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Glasswall processes any associated document element types and they remain in the managed document")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"disallow")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If any of the associated document element types are identified in a document, Glasswall identifies this document as being non-conforming, the presence of this document element type is logged in the Analysis report as an Issue Item.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"sanitise")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If any of the associated document element types are identified in a document, Glasswall removes them from the managed document, the removal is logged in the Analysis report as a Sanitisation Item.")))),Object(o.b)("p",null,"In the example below, for content management policy pdfConfig:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The javascript content management switch enables JavaScript to be permitted in a managed document, if encountered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The acroform content management switch requires that any AcroForm elements are flagged as issues, if encountered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The internal","_","hyperlinks, external","_","hyperlinks, metadata, embedded","_","files and actions","_","all content management switches ensure that any associated document elements are removed, if encountered."))),Object(o.b)("p",null,"In the example below, for content management policy wordConfig:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The metadata content management switch enables Metadata to be permitted in a managed document, if encountered.")),Object(o.b)("h2",{id:"configuration-management-example"},"Configuration Management Example"),Object(o.b)("p",null,"The XML below is an example of a Glasswall Configuration string:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<?xml version="1.0" encoding="utf-8" ?>\n<config>\n    <pdfConfig>  \n         <watermark>Glasswall Approved</watermark>\n         <javascript>allow</javascript>\n         <acroform>disallow</acroform>\n         <internal_hyperlinks>sanitise</internal_hyperlinks>\n         <external_hyperlinks>sanitise</external_hyperlinks>\n         <embedded_files>sanitise</embedded_files>\n         <metadata>sanitise</metadata>\n         <actions_all>sanitise</actions_all>   \n    </pdfConfig>\n    <wordConfig>\n         <metadata>allow</metadata>\n    </wordConfig>\n</config>\n')))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,p=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return n?i.a.createElement(p,l(l({ref:t},s),{},{components:n})):i.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);