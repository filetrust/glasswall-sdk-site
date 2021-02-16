(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(279)),r={title:"8.1.9.5.1 Overview",sidebar_label:"8.1.9.5.1 Overview"},s={unversionedId:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_1-overview",id:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_1-overview",isDocsHomePage:!1,title:"8.1.9.5.1 Overview",description:"Glasswall Analysis Report",source:"@site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_1-overview.md",slug:"/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_1-overview",permalink:"/glasswall-sdk-site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_5-analysis_report/8_1_9_5_1-overview",version:"current",sidebar_label:"8.1.9.5.1 Overview"},c=[{value:"Analysis Report Structure",id:"analysis-report-structure",children:[{value:"gw:DocumentStatistics",id:"gwdocumentstatistics",children:[]}]},{value:"gw:DocumentSummary",id:"gwdocumentsummary",children:[]},{value:"gw:ContentManagementPolicy",id:"gwcontentmanagementpolicy",children:[]},{value:"gw:ContentGroups",id:"gwcontentgroups",children:[]},{value:"gw:ContentGroup",id:"gwcontentgroup",children:[]},{value:"gw:ContentItems",id:"gwcontentitems",children:[]},{value:"gw:SanitisationItems",id:"gwsanitisationitems",children:[]},{value:"gw:RemedyItems",id:"gwremedyitems",children:[]},{value:"gw:IssueItems",id:"gwissueitems",children:[]},{value:"gw:ExtractedItems",id:"gwextracteditems",children:[]},{value:"gw:ExtractedItem",id:"gwextracteditem",children:[]},{value:"gw:ExternalData",id:"gwexternaldata",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"glasswall-analysis-report"},"Glasswall Analysis Report"),Object(o.b)("p",null,"The Glasswall library operates in either Analysis or Protect mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Analysis mode enables the content of documents to be assessed with a report generated to summarise the non-conformances and potential threats.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Protect mode addresses the issues that are identified, returning an updated document with the remedies and sanitisation changes necessary to remove any threat incorporated."))),Object(o.b)("p",null,"What follows is a file-type agnostic description of the data logged by Glasswall during document analysis. The analysis report is produced in XML. The structure of the XML report is defined by the Analysis Report XSD."),Object(o.b)("h2",{id:"analysis-report-structure"},"Analysis Report Structure"),Object(o.b)("h3",{id:"gwdocumentstatistics"},"gw:DocumentStatistics"),Object(o.b)("p",null,"Within the highest level XML node gw:GWallInfo is the gw:DocumentStatistics node. This encloses the data for the document being analysed. The document specific information is held within three sub-nodes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:DocumentSummary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:ContentManagementPolicy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:ContentGroups"))),Object(o.b)("p",null,"An optional fourth node gw:ExternalData can exist for client applications. It is not populated by the Glasswall DLL."),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:GWallInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gw="http://glasswall.com/namespace"xsi:schemaLocation="http://glasswall.com/name space/GWallInfo.xsd">\n    <gw:DocumentStatistics>\n        <gw:DocumentSummary>...</gw:DocumentSummary>   \n        <gw:ContentManagementPolicy>...</gw:ContentManagementPolicy>\n        <gw:ContentGroups groupCount="21">...</gw:ContentGroups>\n    </gw:DocumentStatistics>\n</gw:GWallInfo>\n')),Object(o.b)("h2",{id:"gwdocumentsummary"},"gw:DocumentSummary"),Object(o.b)("p",null,"This section provides the highest level of data in the analysis of the document. It includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:TotalSizeInBytes which reports the size of the file being processed,")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:FileType which reports the type of file being processed and, where applicable,")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:Version which reports the version of the file being processed."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<gw:DocumentSummary> \n    <gw:TotalSizeInBytes>4148344</gw:TotalSizeInBytes>\n    <gw:FileType>pdf</gw:FileType>\n    <gw:Version>PDF-1.6</gw:Version>\n</gw:DocumentSummary>\n")),Object(o.b)("h2",{id:"gwcontentmanagementpolicy"},"gw:ContentManagementPolicy"),Object(o.b)("p",null,"The gw:ContentManagementPolicy section provides a snapshot of the relevant content management policy that was in place when the document was processed. It includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:ContentName which reports the content management switch name for the policy, for example GWFILE","_","MANAGE","_","REMOVE","_","JAVA","_","SCRIPT","_","ACTIONS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:ContentValue which reports the content management switch setting for the policy."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ContentManagementPolicy>\n    <gw:Camera cameraName = "pdfConfig">   \n        <gw:ContentSwitch>\n            <gw:ContentName>javascript</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>acroform</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>embedded_files</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>metadata</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>actions_all</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>internal_hyperlink</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n        <gw:ContentSwitch>\n            <gw:ContentName>external_hyperlink</gw:ContentName>\n            <gw:ContentValue>sanitise</gw:ContentValue>\n        </gw:ContentSwitch>\n    </gw:Camera>\n</gw:ContentManagementPolicy>\n')),Object(o.b)("h2",{id:"gwcontentgroups"},"gw:ContentGroups"),Object(o.b)("p",null,"The gw:ContentGroups node is a collection of gw:ContentGroup nodes. An attribute, groupCount, is associated with the node to record how many gw:ContentGroup nodes are in the collection."),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ContentGroups groupCount="21">\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n    <gw:ContentGroup>...</gw:ContentGroup>\n</gw:ContentGroups>\n')),Object(o.b)("h2",{id:"gwcontentgroup"},"gw:ContentGroup"),Object(o.b)("p",null,"A content group is a category of document element, or section of a document. It can be defined at any level of abstraction and enables statistics to be gathered, and problems associated, in a manner that is sensible for the type of document being processed. The content group consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:BriefDescription which provides a description of the information that is associated with this content group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A collection of sub-nodes each with a collection of data items. Each of these data items provides a ","'","Technical Description","'"," explaining the reason for its existence and a counter recording the number of instances of that data item found in the document."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'</gw:ContentGroup>\n    <gw:BriefDescription>PDF document has Basic File Section structure instances</gw:BriefDescription>\n    <gw:ContentItems itemCount="5">...</gw:ContentItems>\n    <gw:SanitisationItems itemCount="1">...</gw:SanitisationItems>\n    <gw:RemedyItems itemCount="1">...</gw:RemedyItems>  \n    <gw:IssueItems itemCount="0"/>\n</gw:ContentGroup>\n')),Object(o.b)("p",null,"The data stored in each of the sub-nodes is defined in the following sections."),Object(o.b)("h2",{id:"gwcontentitems"},"gw:ContentItems"),Object(o.b)("p",null,"The gw:ContentItems node is a collection of gw:ContentItem nodes that log the checks associated with the enclosing gwContentGroup. Metrics are logged against each content item. Associated with the gw:ContentItems node is a set of statistics summarising the collection of gw:ContentItem nodes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"itemCount records how many content items are in the collection.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"TechnicalDescription identifies the content item.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"InstanceCount records how many instances of this item occur in the document.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"TotalSizeInBytes, AverageSizeInBytes, MinSizeInBytes, MaxSizeInBytes summarise information associated with the size of the document element being reported upon."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ContentItems itemCount="5">\n<gw:ContentItem>\n    <gw:TechnicalDescription>PDF Header Instances</gw:TechnicalDescription>\n    <gw:InstanceCount>1</gw:InstanceCount>  \n    <gw:TotalSizeInBytes>16</gw:TotalSizeInBytes>\n    <gw:AverageSizeInBytes>16</gw:AverageSizeInBytes>\n    <gw:MinSizeInBytes>16</gw:MinSizeInBytes>\n    <gw:MaxSizeInBytes>16</gw:MaxSizeInBytes>\n</gw:ContentItem>\n<gw:ContentItem>...</gw:ContentItem> \n<gw:ContentItem>...</gw:ContentItem>\n<gw:ContentItem>...</gw:ContentItem>\n<gw:ContentItem>...</gw:ContentItem>\n</gw:ContentItems>\n')),Object(o.b)("h2",{id:"gwsanitisationitems"},"gw:SanitisationItems"),Object(o.b)("p",null,"The gw:SanitisationItems node is a collection of gw:SanitisationItem nodes that log any sanitisation that is carried out within the enclosing gwContentGroup. An attribute of the node indicates how many SanitisationItem nodes are in the collection."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"itemCount reports how many sanitisation items are in the collection.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:TechnicalDescription identifies the item subjected to sanitisation.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:SanitisationId identifier for the item that uniquely identifies this type of sanitisation.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:InstanceCount reports the occurrence of items of this type of sanitisation that has been detected within the document.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"TotalSizeInBytes, AverageSizeInBytes, MinSizeInBytes, MaxSizeInBytes summarise information associated with the size of the document element being reported upon."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:SanitisationItems itemCount="1">\n<gw:SanitisationItem>\n    <gw:TechnicalDescription>Pdf Object Instances</gw:TechnicalDescription>\n    <gw:SanitisationId>16</gw:SanitisationId>\n    <gw:InstanceCount>78</gw:InstanceCount>\n    <gw:TotalSizeInBytes>1485875</gw:TotalSizeInBytes>\n    <gw:AverageSizeInBytes>19049</gw:AverageSizeInBytes>\n    <gw:MinSizeInBytes>80</gw:MinSizeInBytes>\n    <gw:MaxSizeInBytes>328967</gw:MaxSizeInBytes>\n</gw:SanitisationItem>\n</gw:SanitisationItems>\n')),Object(o.b)("h2",{id:"gwremedyitems"},"gw:RemedyItems"),Object(o.b)("p",null,"The gw:RemedyItems node is a collection of gw:RemedyItem nodes that logs any remedial work that is carried out within the enclosing gwContentGroup. An attribute of the node indicates how many gw:RemedyItem nodes are in the collection."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"itemCount reports how many remedy items are in the collection.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:TechnicalDescription identifies the item subjected to remedial work.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:InstanceCount reports the occurrence of items of this type of remedy that has been detected within the document."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:RemedyItems itemCount="1">\n<gw:RemedyItem>\n    <gw:TechnicalDescription>Remedy and insert missing Cross Reference Table entries.</gw:TechnicalDescription>\n        <gw:InstanceCount>1</gw:InstanceCount>\n</gw:RemedyItem>\n</gw:RemedyItems>\n')),Object(o.b)("h2",{id:"gwissueitems"},"gw:IssueItems"),Object(o.b)("p",null,"The gw:IssueItems node is a collection of gw:IssueItem that log the checks associated with the enclosing gwContentGroup. An attribute of the node indicates how many gw:IssueItems nodes are in the collection."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"itemCount reports how many issue items are in the collection.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:TechnicalDescription identifies the item that has been detected as an issue.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:IssueId identifier for the item that uniquely identifies this type of issue.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"gw:InstanceCount reports the occurrence of items of this type of issue that has been detected within the document."))),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:IssueItems itemCount="1">\n<gw:IssueItem>\n    <gw:TechnicalDescription>A marked content properties list is present in a resource dictionary.</gw:TechnicalDescription>\n    <gw:IssueId>4</gw:IssueId>  \n    <gw:InstanceCount>8</gw:InstanceCount>\n    <gw:RiskLevel>High</gw:RiskLevel>\n</gw:IssueItem>\n</gw:IssueItems>\n')),Object(o.b)("h2",{id:"gwextracteditems"},"gw:ExtractedItems"),Object(o.b)("p",null,"The gw:ExtractedItems node is a collection of gw:ExtractedItem nodes. An attribute, itemCount, is associated with the node to record how many gw:ExtractedItem nodes are in the collection."),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ExtractedItems itemCount="3">\n    <gw:ExtractedItem>...</gw:ExtractedItem>\n    <gw:ExtractedItem>...</gw:ExtractedItem>\n    <gw:ExtractedItem>...</gw:ExtractedItem>\n</gw:ExtractedItems>\n')),Object(o.b)("h2",{id:"gwextracteditem"},"gw:ExtractedItem"),Object(o.b)("p",null,"An extracted item node logs the details of each item extracted from the document."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"gw:ExtractedImage which provides the metadata information of the extracted image")),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ExtractedItem>\n    <gw:ExtractedImage>\n        <gw:Meta meta="WMF" />\n    </gw:ExtractedImage>\n</gw:ExtractedItem>\n')),Object(o.b)("h2",{id:"gwexternaldata"},"gw:ExternalData"),Object(o.b)("p",null,"This node is not populated by the Glasswall library. This node is provided within the specification of the report to enable client applications to add document specific information to the report, and have it remain within specification."),Object(o.b)("p",null,"This node is a collection of gw:MetaData nodes. The MetaData node consists of a gw:MetaDataName field and a gw:MetaDataValue field, both of which contain string types. The number of gw:Metadata nodes is arbitrarily limited to 100. The use of these fields is outside the scope of this document."),Object(o.b)("p",null,"An extract from an analysis XML report for this section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<gw:ExternalData>\n<gw:Metadata>\n    <gw:MetadataName>primum item de notita</gw:MetadataName>\n    <gw:MetadataValue>quidam valor</gw:MetadataValue>\n</gw::Metadata>\n<gw:Metadata>\n    <gw:MetadataName>item alios magis notitia</gw:MetadataName>\n    <gw:MetadataValue>0123456</gw:MetadataValue>\n</gw::Metadata>\n</gw:ExternalData>\n")))}p.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},w=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),w=a,g=u["".concat(r,".").concat(w)]||u[w]||m[w]||o;return n?i.a.createElement(g,s(s({ref:t},l),{},{components:n})):i.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=w;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}w.displayName="MDXCreateElement"}}]);