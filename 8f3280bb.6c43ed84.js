(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),s=(n(0),n(278)),o={title:"2.1.3.4.1 Analysis Mode",sidebar_label:"2.1.3.4.1 Analysis Mode"},r={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_1-analysis_mode",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_1-analysis_mode",isDocsHomePage:!1,title:"2.1.3.4.1 Analysis Mode",description:"Overview",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_1-analysis_mode.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_1-analysis_mode",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_1-analysis_mode",version:"current",sidebar_label:"2.1.3.4.1 Analysis Mode",sidebar:"someSidebar",previous:{title:"2.1.3.3.4 Portable Network Graphics (PNG) Camera",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_3-Legacy_Cameras/2_1_3_3_4-PNG/2_1_3_3_4_1-GlasswallDllCameraPNG"},next:{title:"2.1.3.4.2 Protect Mode",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_2-protect_mode"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Analysis Process",id:"analysis-process",children:[]},{value:"Sample Analysis Reports",id:"sample-analysis-reports",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"overview"},"Overview"),Object(s.b)("p",null,"In Analysis Mode a file-type agnostic description of the data is logged to an XML report. The structure of the XML report is defined by an Analysis Report XSD designed to make this as easy as possible to parse and process."),Object(s.b)("p",null,"The analysis report contains:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Document Statistics"),Object(s.b)("li",{parentName:"ul"},"Document Summary \u2013 file type and size"),Object(s.b)("li",{parentName:"ul"},"Content Management Policy - the settings of content management switches that have been applied the document"),Object(s.b)("li",{parentName:"ul"},"Content Groups \u2013 the main grouping of content in the document"),Object(s.b)("li",{parentName:"ul"},"Content Items \u2013 the low-level structures within the document"),Object(s.b)("li",{parentName:"ul"},"Issue Items \u2013 content items that do not match the manufacturer\u2019s specification or matching a \u2018disallow\u2019 setting in content management"),Object(s.b)("li",{parentName:"ul"},"Sanitisation Items \u2013 the content management items that would be sanitised if the document was processed in Protect Mode"),Object(s.b)("li",{parentName:"ul"},"Remedy Items \u2013 automatic corrections applied to the document in order to bring it in line with the manufacturer\u2019s specification")),Object(s.b)("p",null,"Depending on the configuration management settings applied to the individual content management switches, the content controlled by the switches is reported either as a Sanitisation Item, Issue Item or a Content Item."),Object(s.b)("h3",{id:"analysis-process"},"Analysis Process"),Object(s.b)("p",null,"The Glasswall Rebuild library receives a document through a published API and passes it through a number of process cycles. The output from each cycle becomes the input for the next so maintain a level of separation between processes. Analysis of the document occurs in each of the cycles.  Early cycles elicit the structure of the document and the sizes of its constituent parts. The later cycles are concerned with conducting syntactic and semantic checks which identify possible sources of risk, out-of-range fields or malformed structures."),Object(s.b)("p",null,"Where elements of the document are compressed, these are expanded and the results assessed, analysed and verified. This enables the analysis report published at the end of the process to give a thorough assessment of the contents and structure of the document. By stepping through the sanitization and remedying processes Glasswall Rebuild is able to provide an accurate report of the actions that could be carried out by Glasswall\u2019s regeneration functionality to make the document conformant with the specification."),Object(s.b)("p",null,"Where objects or other documents of a type known to Glasswall Rebuild are embedded in files Glasswall Rebuild processes these using that types validation and content management policies."),Object(s.b)("p",null,"During each cycle the document being processed is transformed into Glasswall Rebuild\u2019s own internal representation. This simplifies the parsing and traversing processes and helps provide isolation. As the analysis process navigates through the Glasswall structures the detailed checks are not only made on individual components but also at a higher level between the components of the documents. These higher level checks enable the semantic structure and consistency of the document to be properly verified."),Object(s.b)("p",null,"The analysis aspects of the Glasswall Rebuild functionality provide two forms of reporting. The principle output of the analysis process is the analysis report. This is an XML document that enables the detailed information generated by Glasswall to be interrogated and interpreted by third party applications. The secondary output provided is an engineering report which is a very technical report providing detailed information of the analysis process in an ASCII log format."),Object(s.b)("h3",{id:"sample-analysis-reports"},"Sample Analysis Reports"),Object(s.b)("p",null,"This section contains an abridged Glasswall Rebuild Analysis Report containing all the principle elements of a typical report. This particular example is based on a PDF file."),Object(s.b)("p",null,"Each XML report starts with a document summary show below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<?xml version="1.0" encoding="UTF-8"?>\n<gw:GWallInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://glasswall.com/namespace/GWallInfo.xsd" xmlns:gw="http://glasswall.com/namespace">\n<gw:DocumentStatistics>\n<gw:DocumentSummary>\n<gw:TotalSizeInBytes>2293803</gw:TotalSizeInBytes>\n<gw:FileType>pdf</gw:FileType>\n<gw:Version>PDF-1.4</gw:Version>\n</gw:DocumentSummary>\n')),Object(s.b)("p",null,"The content management policies that were used on the file are then listed, note all policies for all file types are listed in each report. Some of the PDF content management switch settings are shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ContentManagementPolicy>\n<gw:Camera cameraName = "pdfConfig">\n<gw:ContentSwitch>\n<gw:ContentName>javascript</gw:ContentName>\n<gw:ContentValue>sanitise</gw:ContentValue>\n</gw:ContentSwitch>\n<gw:ContentSwitch>\n<gw:ContentName>acroform</gw:ContentName>\n<gw:ContentValue>sanitise</gw:ContentValue>\n</gw:ContentSwitch>\n<gw:ContentSwitch>\n<gw:ContentName>embedded_files</gw:ContentName>\n<gw:ContentValue>sanitise</gw:ContentValue>\n</gw:ContentSwitch>\n')),Object(s.b)("p",null,"The number of different content groups found in the file (16) along with an example of content item from the first group is shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:ContentGroups groupCount = "16">\n<gw:ContentGroup>\n<gw:BriefDescription>PDF document has Basic File Section structure instances</gw:BriefDescription>\n<gw:ContentItems itemCount = "5">\n<gw:ContentItem>\n<gw:TechnicalDescription>PDF Header Instances</gw:TechnicalDescription>\n<gw:InstanceCount>1</gw:InstanceCount>\n<gw:TotalSizeInBytes>15</gw:TotalSizeInBytes>\n<gw:AverageSizeInBytes>15</gw:AverageSizeInBytes>\n<gw:MinSizeInBytes>15</gw:MinSizeInBytes>\n<gw:MaxSizeInBytes>15</gw:MaxSizeInBytes>\n</gw:ContentItem>\n')),Object(s.b)("p",null,"As the GWFILE_MANAGE_REMOVE_EMBEDDED_FILES switch has been set to Sanitise a dictionary is shown as tagged for removal. See Configuration Management for details on content management switches"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:SanitisationItems itemCount = "1">\n<gw:SanitisationItem>\n<gw:TechnicalDescription>Document information dictionary detected in a document trailer dictionary.</gw:TechnicalDescription>\n<gw:InstanceCount>1</gw:InstanceCount>\n<gw:TotalSizeInBytes>0</gw:TotalSizeInBytes>\n<gw:AverageSizeInBytes>0</gw:AverageSizeInBytes>\n<gw:MinSizeInBytes>0</gw:MinSizeInBytes>\n<gw:MaxSizeInBytes>0</gw:MaxSizeInBytes>\n</gw:SanitisationItem>\n')),Object(s.b)("p",null,"Not all XML reports include Remedies as these are automatic corrections made to bring any regenerated file in line with the file specification and may not be necessary for the file being processed but one is shown in this case."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:RemedyItems itemCount = "1">\n<gw:RemedyItem>\n<gw:TechnicalDescription>PDF Stream is missing an End-Of-Line before the &apos;EndStream&apos; marker.</gw:TechnicalDescription>\n<gw:InstanceCount>7</gw:InstanceCount>\n</gw:RemedyItem>\n')),Object(s.b)("p",null,"Very few files have an issue as this means they are not just non-conformant with the file specification but Glasswall Rebuild has been unable to Remedy the issue back to the specification. In Protect Mode a file with an issue can not be regenerated."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'<gw:IssueItems itemCount="1"> \n<gw:IssueItem> \n<gw:TechnicalDescription>/Info dictionary contained an unexpected key (/GTS_PDFXConformance).</gw:TechnicalDescription> \n<gw:IssueId>46</gw:IssueId> \n<gw:InstanceCount>1</gw:InstanceCount>\n <gw:RiskLevel>Medium</gw:RiskLevel>\n</gw:IssueItem>\n')),Object(s.b)("p",null,"Each Sanitisation Item,  Remedy item or  Issue Item has a unique numeric id associated with it that never changes so the item can be uniquely identified by other applications that may wish to process  the XML Reports."),Object(s.b)("p",null,"Each Issue and its corresponding numeric id is stored in a database along with a reference to the file specification which, when the file was analysed against it, generated the issue. The file specification can then be searched for more information as to why the file is considered non-conforming."))}u.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?i.a.createElement(h,r(r({ref:t},l),{},{components:n})):i.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);