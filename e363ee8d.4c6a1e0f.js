(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{196:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return p}));var r=l(2),n=l(6),o=(l(0),l(221)),a={title:"7.1.1 BDDL to C++ Converter",sidebar_label:"7.1.1 BDDL to C++ Converter"},c={unversionedId:"7-tools/7_1-bddl/7_1_1-BddToCppConverter",id:"7-tools/7_1-bddl/7_1_1-BddToCppConverter",isDocsHomePage:!1,title:"7.1.1 BDDL to C++ Converter",description:"======================",source:"@site/docs/7-tools/7_1-bddl/7_1_1-BddToCppConverter.md",slug:"/7-tools/7_1-bddl/7_1_1-BddToCppConverter",permalink:"/glasswall-sdk-site/docs/7-tools/7_1-bddl/7_1_1-BddToCppConverter",version:"current",sidebar_label:"7.1.1 BDDL to C++ Converter",sidebar:"someSidebar",previous:{title:"6.1.2 Release Notes",permalink:"/glasswall-sdk-site/docs/6-deployment/6_1-release_process/6_1_2-release_notes"},next:{title:"7.2.1 CFB Geneology",permalink:"/glasswall-sdk-site/docs/7-tools/7_2-cfb/7_2_1-CFBGeneology"}},i=[{value:"Perl Version",id:"perl-version",children:[{value:"Context",id:"context",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"UCP Version",id:"ucp-version",children:[{value:"Context",id:"context-1",children:[]},{value:"Architecture",id:"architecture-1",children:[]},{value:"Modules",id:"modules-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],u={rightToc:i};function p(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"======================"),Object(o.b)("h1",{id:"authors"},"Authors"),Object(o.b)("p",null,"Steven Warner & Stuart Squibb "),Object(o.b)("h1",{id:"description"},"Description"),Object(o.b)("p",null,"Generates C++ code from BDDL data definition files (.bdd)."),Object(o.b)("h1",{id:"locations"},"Locations"),Object(o.b)("p",null,"Version 1 (Perl based) Can be found at the following location in TFS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\\","inhouse.tools","\\","GWPerlScripts","\\","BDD_to_Cpp_Convertor")),Object(o.b)("p",null,"Version 2 (C# based) Can be found at the following location in Glasswall Internal Network:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\","UCP_ToolChain","\\","bdd_to_cpp.exe")),Object(o.b)("h2",{id:"perl-version"},"Perl Version"),Object(o.b)("h3",{id:"context"},"Context"),Object(o.b)("p",null,"Converts BDD to C++ Code"),Object(o.b)("p",null,"DEPRECATED - will be removed in Summer 2018"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Produces "Template Heavy" Code'),Object(o.b)("li",{parentName:"ul"},"Handles Dataheap / Directory Mechanisms for single level only")),Object(o.b)("h3",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"tba"),Object(o.b)("h3",{id:"modules"},"Modules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"BDD_to_Cpp_Convertor.pl"),Object(o.b)("li",{parentName:"ul"},"Parser.pm")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"perl BDD_To_Cpp.pl\nStarting BDD_To_Cpp.pl on  with root\nUsage BDD_To_Cpp -candidate=filename and path or directory path -output=output filename and path or output directory path -recursive -interface -verbose -nomovedir -dump -root=root camera object name"),Object(o.b)("p",null," -candidate"),Object(o.b)("p",null," -output"),Object(o.b)("p",null," -recursive"),Object(o.b)("p",null," -interface"),Object(o.b)("p",null," -verbose"),Object(o.b)("p",null," -nomovedir"),Object(o.b)("p",null," -dump"),Object(o.b)("p",null," -root"),Object(o.b)("h2",{id:"ucp-version"},"UCP Version"),Object(o.b)("h3",{id:"context-1"},"Context"),Object(o.b)("p",null,"New Applications for Code Generation from DVL and BDD"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Produces "Template Light" Code '),Object(o.b)("li",{parentName:"ul"},"Uses virtual read/write methods"),Object(o.b)("li",{parentName:"ul"},"Handles Dataheap / Directory Mechanisms for Recursive structures (as of version 1.15.0.0 of bbd_to_cpp.exe)"),Object(o.b)("li",{parentName:"ul"},"Will replace the Perl version during 2018")),Object(o.b)("h3",{id:"architecture-1"},"Architecture"),Object(o.b)("p",null,"![Alt BDDL Schema]","(BDDL Schema.jpg)"),Object(o.b)("h1",{id:"location"},"Location"),Object(o.b)("p",null,"Can be found at the following location:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\\","\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\","UCP_ToolChain","\\","bdd_to_cpp.exe")),Object(o.b)("h3",{id:"modules-1"},"Modules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"bdd_to_cpp.exe"),Object(o.b)("li",{parentName:"ul"},"Antlr4.Runtime.v4.0.dll"),Object(o.b)("li",{parentName:"ul"},"BinaryDOM.dll"),Object(o.b)("li",{parentName:"ul"},"CodeGenerationSupport.dll"),Object(o.b)("li",{parentName:"ul"},"CommandLine.dll"),Object(o.b)("li",{parentName:"ul"},"FileModelling.dll"),Object(o.b)("li",{parentName:"ul"},"ucp_grammar_classes.dll"),Object(o.b)("li",{parentName:"ul"},"ucpSchemaLibrary.dll"),Object(o.b)("li",{parentName:"ul"},"UcpToolSupport.dll"),Object(o.b)("li",{parentName:"ul"},"ucpUtility.dll")),Object(o.b)("h3",{id:"usage-1"},"Usage"),Object(o.b)("p",null,"BDD to C++ Code generator Version  1.18.0.0\nCopyright (C) 2014 Glasswall\nUsage: bdd_to_cpp -s ",Object(o.b)("em",{parentName:"p"},"schema file")," --root ",Object(o.b)("em",{parentName:"p"},"namespace/rootstructure")," ","[","-o ",Object(o.b)("em",{parentName:"p"},"output directory")," -p -t ","]","\nExamples:"),Object(o.b)("p",null,"Convert File\nbdd_to_cpp -s singleFile.bdd --root single --includes\n(e.g bdd_to_cpp\n-s WordCoreStreams -root WordCoreStreams)"),Object(o.b)("p",null,"  -o, --output                   (Default: ) output reports and generated code are sent here."),Object(o.b)("p",null,"  -s, --schema                   Required. The full path to the root *.BDD file that is being used to build a camera from. This will be parsed to find all the structures that require a validation\nfunction generated"),Object(o.b)("p",null,"  -t, --trace                    (Default: False) Trace mode - for debug only"),Object(o.b)("p",null,"  -p, --pause                    (Default: False) Wait for key press at end"),Object(o.b)("p",null,"  --root                         Required. Namespace and prefix for output code file"),Object(o.b)("p",null,"  --bddregen                     (Default: False) Generate New BDD files from the Schema as a validation of the schema creation"),Object(o.b)("p",null,"  --toppadding                   (Default: False) Put four padding lines at top of file"),Object(o.b)("p",null,"  --nocppregen                   (Default: False) Skip C++ generation"),Object(o.b)("p",null,"  --parentchildfile              (Default: False) Output Parent / Child structure cross reference file if required"),Object(o.b)("p",null,"  --schematreefile               (Default: False) Output Schema Tree file if required"),Object(o.b)("p",null,"  --schemacode                   (Default: False) Output Schema Code File for Read / Write handler"),Object(o.b)("p",null,"  --useprecompile                (Default: False) Use Precompiled headers. RootFileName.h will be used as the precompiled header"),Object(o.b)("p",null,"  --useprotectedscalarlook       (Default: False) Use protected scalar Looks"),Object(o.b)("p",null,"  --includes                     Required. path to the start of relative includes"),Object(o.b)("p",null,"  --ooxml                        (Default: False) add OOXML features to generated code"),Object(o.b)("p",null,"  --rtf                          (Default: False) add RTF features to generated code"),Object(o.b)("p",null,"  --perlmode                     (Default: False) produce generated code in the style of the old Perl code generator (templated code)"),Object(o.b)("p",null,"  --optimise                     (Default: 0) optimisation level  (1 = reduce amount of glue logic"),Object(o.b)("p",null,"  --deferencechainneeded         (Default: False) insert dereference checks infront of acceptrules"),Object(o.b)("p",null,"  --remove_second_acceptcheck    (Default: False) If Accept rule is loaded early, discard insertion of the end location check"),Object(o.b)("p",null,"  --enable_dataheap              (Default: False) Enable dataheap/pointer/directory mechanism"),Object(o.b)("p",null,"  --help                         Display this help screen."))}p.isMDXComponent=!0},221:function(e,t,l){"use strict";l.d(t,"a",(function(){return b})),l.d(t,"b",(function(){return m}));var r=l(0),n=l.n(r);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):c(c({},t),e)),l},b=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(l),s=r,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||o;return l?n.a.createElement(m,c(c({ref:t},u),{},{components:l})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=l[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,l)}s.displayName="MDXCreateElement"}}]);