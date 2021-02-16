(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(279)),c={title:"2.2.2.3.6.1 Content Management Policies",sidebar_label:"2.2.2.3.6.1 Content Management Policies"},l={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_1-cm_policies",id:"2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_1-cm_policies",isDocsHomePage:!1,title:"2.2.2.3.6.1 Content Management Policies",description:"Overview",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_1-cm_policies.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_1-cm_policies",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_1-cm_policies",version:"current",sidebar_label:"2.2.2.3.6.1 Content Management Policies",sidebar:"someSidebar",previous:{title:"2.2.2.3.5 Content Export Import",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_5-import_export"},next:{title:"2.2.2.3.6.2 Configuration Management XSD",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_2-configXSD"}},o=[{value:"Overview",id:"overview",children:[]},{value:"XML Reports with different Content Management Policies",id:"xml-reports-with-different-content-management-policies",children:[{value:"Allow",id:"allow",children:[]},{value:"Disallow",id:"disallow",children:[]},{value:"Sanitise",id:"sanitise",children:[]}]},{value:"PDF",id:"pdf",children:[]},{value:"Images",id:"images",children:[]},{value:"Binary and XML Office",id:"binary-and-xml-office",children:[{value:"Common",id:"common",children:[]},{value:"File type Specific",id:"file-type-specific",children:[]}]},{value:"Export Options",id:"export-options",children:[]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Content Management Policies are used to specify the set of content management switches that should be applied to a particular document type."),Object(i.b)("p",null,"The content management switch is used to identify a document element type and associated action."),Object(i.b)("p",null,"The content management setting is used to specify what actions carried out by Glasswall FileTrust for a particular content management switch. Each content management switch can be set to one of three settings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Allow - Glasswall FileTrust processes any associated document element types and they remain in the managed document and are logged in the Analysis report as a Content Item.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disallow - If any of the associated document element types are identified in a document, Glasswall FileTrust identifies this document as being non-conforming, the presence of this document element type is logged in the Analysis report as an Issue Item.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sanitise - If any of the associated document element types are identified in a document, Glasswall FileTrust processes them if an embedded object of a supported file type using it","'","s own content management settings or removes them from the managed document. If not, the removal is logged in the Analysis report as a Sanitisation Item."))),Object(i.b)("p",null,"If no value is supplied for a switch it is defaulted to Sanitise."),Object(i.b)("h2",{id:"xml-reports-with-different-content-management-policies"},"XML Reports with different Content Management Policies"),Object(i.b)("p",null,"The following sections show how the same item of data that is under control of a content management switch is represented differently in the XML report, depending on the switch setting."),Object(i.b)("h3",{id:"allow"},"Allow"),Object(i.b)("p",null,"This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Allow."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:Camera cameraName = "wordConfig">\ngw:ContentSwitch>\n<gw:ContentName>metadata</gw:ContentName>\n<gw:ContentValue>allow</gw:ContentValue>\n</gw:ContentSwitch>\n<gw:ContentItem>\n<gw:TechnicalDescription>  Metadata detected in #05SummaryInformation</gw:TechnicalDescription>\n<gw:InstanceCount>1</gw:InstanceCount>\n<gw:TotalSizeInBytes>4096</gw:TotalSizeInBytes>\n<gw:AverageSizeInBytes>4096</gw:AverageSizeInBytes>\n<gw:MinSizeInBytes>4096</gw:MinSizeInBytes>\n<gw:MaxSizeInBytes>4096</gw:MaxSizeInBytes>\n</gw:ContentItem>\n')),Object(i.b)("h3",{id:"disallow"},"Disallow"),Object(i.b)("p",null,"This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Disallow.  In Protect mode this would cause the file to be Non-conforming."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:Camera cameraName = "wordConfig">\n<gw:ContentSwitch>\n<gw:ContentName>metadata</gw:ContentName>\n<gw:ContentValue>disallow</gw:ContentValue>\n</gw:ContentSwitch>\n<gw:IssueItem>\n<gw:TechnicalDescription>  Metadata detected in  #05SummaryInformation</gw:TechnicalDescription>\n<gw:IssueId>96</gw:IssueId>\n<gw:InstanceCount>1</gw:InstanceCount>\n<gw:RiskLevel>Medium</gw:RiskLevel>\n</gw:IssueItem>\n')),Object(i.b)("h3",{id:"sanitise"},"Sanitise"),Object(i.b)("p",null,"This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Sanitise.  In Protect mode this would cause the metadata to be removed from the regenerated file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:Camera cameraName = "wordConfig">\n<gw:ContentSwitch>\n<gw:ContentName>metadata</gw:ContentName>\n<gw:ContentValue>sanitise</gw:ContentValue>\n</gw:ContentSwitch>\n<gw:SanitisationItem>\n<gw:TechnicalDescription>Metadata detected in  #05SummaryInformation</gw:TechnicalDescription>\n<gw:InstanceCount>1</gw:InstanceCount>\n<gw:TotalSizeInBytes>4096</gw:TotalSizeInBytes>\n<gw:AverageSizeInBytes>4096</gw:AverageSizeInBytes>\n<gw:MinSizeInBytes>4096</gw:MinSizeInBytes>\n<gw:MaxSizeInBytes>4096</gw:MaxSizeInBytes>\n</gw:SanitisationItem>\n')),Object(i.b)("h2",{id:"pdf"},"PDF"),Object(i.b)("p",null,"The PDF content management switches are shown in the table below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Content Management Flag")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"XML Report Issue Technical Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"javascript")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Action of type /JavaScriptJavascript content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"acroform")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Interactive form (Acroform) contentWidget annotation Action of type /SubmitForm Action of type /ResetForm Action of type /ImportData")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"external","_","hyperlinks")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Action of type /URI")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"embedded","_","files")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Embedded file content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"metadata")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Document information dictionary detectedXML Metadata detected")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"actions","_","all")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Action of type /","[action type]","Where action type =[Rendition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"internal","_","hyperlinks")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Action of type /GoTo")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"embedded","_","images")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Embedded image present in ","[store]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"value","_","outside","_","reasonable","_","limits")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[Stream]"," streams allowed maximum(","[number]",") exceeded")))),Object(i.b)("h2",{id:"images"},"Images"),Object(i.b)("p",null,"Content management is not configurable on image files, with the exception of tiff, therefore only content items, issues and remedies can appear in an XML report for most image files. Sanitisation items cannot be present in their XML reports. Automatic corrections are applied to a file in order to bring it in line with the manufacturer","'","s specification and/or remove unrecognised or unwanted data. See section ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_2-architecture/2_2_2_3-internal_api/2_2_2_3_6-config_mgmt/2_2_2_3_6_3-automatic_corrections"}),Object(i.b)("strong",{parentName:"a"},"Automatic Corrections")),"."),Object(i.b)("p",null,"For tiff the following content management switch is available:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Content Management Flag")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"XML Report Issue Technical Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"geotiff")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GeoTIFF data present in GeoTIFF")))),Object(i.b)("h2",{id:"binary-and-xml-office"},"Binary and XML Office"),Object(i.b)("h3",{id:"common"},"Common"),Object(i.b)("p",null,"There are a number of content management switches common to each of the Office file types:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Content Management Flag")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"XML Report Issue Technical Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"macros")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Macros present")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"external","_","hyperlinks")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"External Hyperlinks present in ","[links]","links  = [HFD")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"embedded","_","files")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Embedded File present in ","[store]","store = [Object pool")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"metadata")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Metadata detected in ","[meta type]",".meta type = [SttbfRMark")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"review","_","comments")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Review comments present in ","[comment meta type]","comment meta type = [Content Stream")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"internal","_","hyperlinks")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Internal Hyperlinks present in ","[links]","Link = [location")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"embedded","_","images")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Embedded image present in ","[store]")))),Object(i.b)("h3",{id:"file-type-specific"},"File type Specific"),Object(i.b)("p",null,"The following content management switches are file type specific."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Content Management Flag")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"XML Report Issue Technical Descriptions")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"File Type(s)")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"dynamic","_","data","_","exchange")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DDE links present in present in ","[links]","Link = [CT","_","DdeItems"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CT","_","CalcChain")))),Object(i.b)("p",null,"Note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"doc and docx are controlled by the same switch setting(s)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"xls and  xlsx are controlled by the same switch setting(s)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ppt and pptx are controlled by the same switch setting(s)"))),Object(i.b)("h2",{id:"export-options"},"Export Options"),Object(i.b)("p",null,"The following settings are used to adjust how Glasswall FileTrust exports files when using the export function."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Content Management Flag")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Effect")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"interchange","_","type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If the export will be in xml or sisl format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Interchange","_","pretty")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Makes sisl format files more readable to humans if set to true")))))}s.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(g,l(l({ref:t},b),{},{components:n})):r.a.createElement(g,l({ref:t},b))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);