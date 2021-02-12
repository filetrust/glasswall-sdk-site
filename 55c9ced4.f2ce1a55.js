(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),s=(n(0),n(278)),o={title:"7.9.5 GWFile Process Status Validator",sidebar_label:"7.9.5 GWFile Process Status Validator"},i={unversionedId:"7-tools/7_9-testing/7_9_5-gwfile_process_status_validator",id:"7-tools/7_9-testing/7_9_5-gwfile_process_status_validator",isDocsHomePage:!1,title:"7.9.5 GWFile Process Status Validator",description:"This document needs to be brought in line with the RFC, see",source:"@site/docs/7-tools/7_9-testing/7_9_5-gwfile_process_status_validator.md",slug:"/7-tools/7_9-testing/7_9_5-gwfile_process_status_validator",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_5-gwfile_process_status_validator",version:"current",sidebar_label:"7.9.5 GWFile Process Status Validator",sidebar:"someSidebar",previous:{title:"7.9.4 GWDemonstrator Test Tool",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool"},next:{title:"7.10.1 Walk WMF",permalink:"/glasswall-sdk-site/docs/7-tools/7_10-wmf/7_10_1-WalkWMF"}},l=[{value:"Conventions",id:"conventions",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Operation",id:"operation",children:[]},{value:"Consistency",id:"consistency",children:[]},{value:"Results File Format",id:"results-file-format",children:[]}],c={rightToc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{style:{color:"red"}},"This document needs to be brought in line with the RFC, see"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/filetrust/Glasswall-Documents-Triage/blob/master/rfc_glasswall_core_documentation_format.md"}),"Request for Comments: Standardisation of Core Team Documentation for Programs and Scripts"),"."),Object(s.b)("h3",{id:"conventions"},"Conventions"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Bold")," -- This is used for key words that are used in the application\nUI."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Italics")," -- This is used to identify extracts from code or log files."),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("p",null,"The GWFileProcessStatusValidator test application consists of an\nexecutable and DLL. The application is dependent on the Glasswall DLL\nbeing provided in the same folder."),Object(s.b)("p",null,Object(s.b)("img",{src:n(394).default})),Object(s.b)("p",null,"Once running, the user is required to specify a folder that contains the\ndocuments that will be used as a test set. The folder can be selected by\nclicking on the ",Object(s.b)("strong",{parentName:"p"},"Find")," button or dragging the folder from a file\nexplorer. Once a valid folder is specified in the ",Object(s.b)("strong",{parentName:"p"},"Source")," text-box,\nthe ",Object(s.b)("strong",{parentName:"p"},"Process")," button is enabled."),Object(s.b)("p",null,"To start processing the files in the specified folder hierarchy the\n",Object(s.b)("strong",{parentName:"p"},"Process")," button is clicked. The application will navigate through the\nspecified folder hierarchy attempting to process each file. The\nprocessing results are shown in the data table displayed in the bottom\nhalf of the UI."),Object(s.b)("p",null,Object(s.b)("img",{src:n(395).default})),Object(s.b)("p",null,"Once processing is completed, the results can be exported to a text\nfile. The menu option for this feature can be found under the ",Object(s.b)("strong",{parentName:"p"},"File"),"\nmenu item. The exported results file structure is explained below."),Object(s.b)("h3",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Three pre-set configuration management policies are available. The\nrequired policy can be selected from the ",Object(s.b)("strong",{parentName:"p"},"Configuration")," menu item.\nThe available pre-sets are 'Allow', 'Disallow' or 'Sanitisation'. Within\neach pre-set, the content management switches for each camera are all\nset to the named content management setting."),Object(s.b)("h3",{id:"operation"},"Operation"),Object(s.b)("p",null,"The application processes each file twice, once using Analysis Audit,\nthen again with Manage & Protect. The Analysis Report is then parsed and\nthe contents checked against the status results provided by the\nGlasswall processing. Where the status values are inconsistent with the\nAnalysis Report contents assessment reports are generated. In addition\nto the status values being compared to the Analysis Report, there are\nalso comparisons made between the outputs of the two processing modes."),Object(s.b)("p",null,"The results of the checks are displayed in the UI in tabular form. The\ncolumns are colour coded to clearly identify the Analysis Report results\n(Yellow) the Analysis Process Results (Orange) and the Protect Process\nResults (Blue). The following sections describe each of the columns."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Column Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filename"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The full pathname of the file being analysed.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Issues"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"True")," if any Issue Items are found in the Analysis Report, ",Object(s.b)("strong",{parentName:"td"},"False")," otherwise.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Remedies"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"True")," if any Remedy Items are found in the Analysis Report, ",Object(s.b)("strong",{parentName:"td"},"False")," otherwise.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sanitisations"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"True")," if any Sanitisation Items are found in the Analysis Report, ",Object(s.b)("strong",{parentName:"td"},"False")," otherwise.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Analysis GwStatus"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return value from the Glasswall API function GWFileAnalysisAudit.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Analysis Process Status"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Status value provided by the Glasswall API function GWFileProcessStatus, after the call to GWFileAnalysisAudit.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Analysis Assessment"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"Consistent")," if the ",Object(s.b)("strong",{parentName:"td"},"Analysis GwStatus")," and ",Object(s.b)("strong",{parentName:"td"},"Analysis Process Status")," are consistent with contents of the Analysis Report (i.e. ",Object(s.b)("strong",{parentName:"td"},"Issues, Remedies")," and ",Object(s.b)("strong",{parentName:"td"},"Sanitisations)."))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Analysis Error Message"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return value from the Glasswall API function GWFileErrorMsg, after the call to GWFileAnalysisAudit.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Protect GwStatus"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return value from the Glasswall API function GWFileProtect.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Protect Process Status"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Status value provided by the Glasswall API function GWFileProcessStatus, after the call to GWFileProtect.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Protect Assessment"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"Consistent")," if the ",Object(s.b)("strong",{parentName:"td"},"Protect GwStatus")," and ",Object(s.b)("strong",{parentName:"td"},"Protect Process Status")," are consistent with contents of the Analysis Report (i.e. ",Object(s.b)("strong",{parentName:"td"},"Issues, Remedies")," and ",Object(s.b)("strong",{parentName:"td"},"Sanitisations)."))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Protect Error Message"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return value from the Glasswall API function GWFileErrorMsg, after the call to GWFileProtect.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Assessment Report"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Report summarising the checks that have been carried out. ",Object(s.b)("strong",{parentName:"td"},"OK")," if all checks are consistent, a list of inconsistencies otherwise.")))),Object(s.b)("h3",{id:"consistency"},"Consistency"),Object(s.b)("p",null,"The Analysis Assessment and Protect Assessment columns will display\n",Object(s.b)("strong",{parentName:"p"},"Consistent")," if the ",Object(s.b)("strong",{parentName:"p"},"GwStatus")," and ",Object(s.b)("strong",{parentName:"p"},"Process Status")," column entries\nare consistent with the Analysis Report entries (",Object(s.b)("strong",{parentName:"p"},"Issues, Remedies"),"\nand ",Object(s.b)("strong",{parentName:"p"},"Sanitisations"),"). This can be summarised as."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Managed documents should not have any Issue Items.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The bits of the Process Status bitmap should be set appropriately,\naccording to the Analysis Report entries."))),Object(s.b)("p",null,"The structure and values of the Process Status bitmap and GwStatus can\nbe found in the Glasswall SDK Helpfile."),Object(s.b)("p",null,"Any inconsistencies that are identified between the two processing modes\n(Analysis and Protect) will only be reported in the ",Object(s.b)("strong",{parentName:"p"},"Assessment\nReport")," column."),Object(s.b)("h3",{id:"results-file-format"},"Results File Format"),Object(s.b)("h4",{id:"header"},"Header"),Object(s.b)("p",null,"The Header of the results file contains"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The version of the test tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The version of the Glasswall DLL used to process the files")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The name of the pre-set used during processing")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A summary of the test results"))),Object(s.b)("h4",{id:"header-example"},Object(s.b)("strong",{parentName:"h4"},"Header Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Test Tool version 1.0.5589.27182\nUsing library version GLASSWALL_DLL:Analyse, Manage & Protect.1.3.15106.1.BUILD(Apr 16 2015 18:06:05)\nLibrary Content Management Preset : Sanitise\nConsistent Reports 10/11 90.91 % \n")),Object(s.b)("h4",{id:"body"},Object(s.b)("strong",{parentName:"h4"},"Body")),Object(s.b)("p",null,"The body of the report is made up of the test results of those files\nthat processed and their results found to be inconsistent. The\ninformation provided is the same as displayed on the UI, with each\ncolumn separated by tab (","\\","t) character."),Object(s.b)("p",null,"The first line of the body is a header line with the column names. The\nresults for each inconsistent file are then displayed on subsequent\nlines."),Object(s.b)("p",null,"The formatting of the results file is such that it can be imported into\na spreadsheet, using the tab at a delimiter."))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fileprocessor1-5b541900790cd012fceea53f513b6d47.png"},395:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fileprocessor2-2fc27f213e6eddbc3a47eb17eaf01908.png"}}]);