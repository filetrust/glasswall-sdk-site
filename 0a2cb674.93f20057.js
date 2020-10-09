(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),l=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=l.a.createContext({}),p=function(e){var t=l.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,f=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return r?l.a.createElement(f,c(c({ref:t},u),{},{components:r})):l.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),l=r(6),a=(r(0),r(213)),o={},c={unversionedId:"artifacts/internalBddToCppConverter",id:"artifacts/internalBddToCppConverter",isDocsHomePage:!1,title:"internalBddToCppConverter",description:"BDD to CPP Converter  {#internalBddToCppConverter}",source:"@site/docs/artifacts/internalBddToCppConverter.md",slug:"/artifacts/internalBddToCppConverter",permalink:"/glasswall-sdk-site/docs/artifacts/internalBddToCppConverter",version:"current"},i=[{value:"Perl Version",id:"perl-version",children:[{value:"Context",id:"context",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"UCP Version",id:"ucp-version",children:[{value:"Context",id:"context-1",children:[]},{value:"Architecture",id:"architecture-1",children:[]},{value:"Modules",id:"modules-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],u={rightToc:i};function p(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"bdd-to-cpp-converter--internalbddtocppconverter"},"BDD to CPP Converter  {#internalBddToCppConverter}"),Object(a.b)("h1",{id:"authors"},"Authors"),Object(a.b)("p",null,"Steven Warner & Stuart Squibb "),Object(a.b)("h1",{id:"description"},"Description"),Object(a.b)("p",null,"Generates C++ code from BDDL data definition files (.bdd)."),Object(a.b)("h1",{id:"locations"},"Locations"),Object(a.b)("p",null,"Version 1 (Perl based) Can be found at the following location in TFS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\\","inhouse.tools","\\","GWPerlScripts","\\","BDD_to_Cpp_Convertor")),Object(a.b)("p",null,"Version 2 (C# based) Can be found at the following location in Glasswall Internal Network:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\","UCP_ToolChain","\\","bdd_to_cpp.exe")),Object(a.b)("h2",{id:"perl-version"},"Perl Version"),Object(a.b)("h3",{id:"context"},"Context"),Object(a.b)("p",null,"Converts BDD to C++ Code"),Object(a.b)("p",null,"DEPRECATED - will be removed in Summer 2018"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Produces "Template Heavy" Code'),Object(a.b)("li",{parentName:"ul"},"Handles Dataheap / Directory Mechanisms for single level only")),Object(a.b)("h3",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"tba"),Object(a.b)("h3",{id:"modules"},"Modules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"BDD_to_Cpp_Convertor.pl"),Object(a.b)("li",{parentName:"ul"},"Parser.pm")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"perl BDD_To_Cpp.pl\nStarting BDD_To_Cpp.pl on  with root\nUsage BDD_To_Cpp -candidate=filename and path or directory path -output=output filename and path or output directory path -recursive -interface -verbose -nomovedir -dump -root=root camera object name"),Object(a.b)("p",null," -candidate"),Object(a.b)("p",null," -output"),Object(a.b)("p",null," -recursive"),Object(a.b)("p",null," -interface"),Object(a.b)("p",null," -verbose"),Object(a.b)("p",null," -nomovedir"),Object(a.b)("p",null," -dump"),Object(a.b)("p",null," -root"),Object(a.b)("h2",{id:"ucp-version"},"UCP Version"),Object(a.b)("h3",{id:"context-1"},"Context"),Object(a.b)("p",null,"New Applications for Code Generation from DVL and BDD"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Produces "Template Light" Code '),Object(a.b)("li",{parentName:"ul"},"Uses virtual read/write methods"),Object(a.b)("li",{parentName:"ul"},"Handles Dataheap / Directory Mechanisms for Recursive structures (as of version 1.15.0.0 of bbd_to_cpp.exe)"),Object(a.b)("li",{parentName:"ul"},"Will replace the Perl version during 2018")),Object(a.b)("h3",{id:"architecture-1"},"Architecture"),Object(a.b)("p",null,"![Alt BDDL Schema]","(BDDL Schema.jpg)"),Object(a.b)("h1",{id:"location"},"Location"),Object(a.b)("p",null,"Can be found at the following location:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\\","\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\","UCP_ToolChain","\\","bdd_to_cpp.exe")),Object(a.b)("h3",{id:"modules-1"},"Modules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"bdd_to_cpp.exe"),Object(a.b)("li",{parentName:"ul"},"Antlr4.Runtime.v4.0.dll"),Object(a.b)("li",{parentName:"ul"},"BinaryDOM.dll"),Object(a.b)("li",{parentName:"ul"},"CodeGenerationSupport.dll"),Object(a.b)("li",{parentName:"ul"},"CommandLine.dll"),Object(a.b)("li",{parentName:"ul"},"FileModelling.dll"),Object(a.b)("li",{parentName:"ul"},"ucp_grammar_classes.dll"),Object(a.b)("li",{parentName:"ul"},"ucpSchemaLibrary.dll"),Object(a.b)("li",{parentName:"ul"},"UcpToolSupport.dll"),Object(a.b)("li",{parentName:"ul"},"ucpUtility.dll")),Object(a.b)("h3",{id:"usage-1"},"Usage"),Object(a.b)("p",null,"BDD to C++ Code generator Version  1.18.0.0\nCopyright (C) 2014 Glasswall\nUsage: bdd_to_cpp -s ",Object(a.b)("em",{parentName:"p"},"schema file")," --root ",Object(a.b)("em",{parentName:"p"},"namespace/rootstructure")," ","[","-o ",Object(a.b)("em",{parentName:"p"},"output directory")," -p -t ","]","\nExamples:"),Object(a.b)("p",null,"Convert File\nbdd_to_cpp -s singleFile.bdd --root single --includes\n(e.g bdd_to_cpp\n-s WordCoreStreams -root WordCoreStreams)"),Object(a.b)("p",null,"  -o, --output                   (Default: ) output reports and generated code are sent here."),Object(a.b)("p",null,"  -s, --schema                   Required. The full path to the root *.BDD file that is being used to build a camera from. This will be parsed to find all the structures that require a validation\nfunction generated"),Object(a.b)("p",null,"  -t, --trace                    (Default: False) Trace mode - for debug only"),Object(a.b)("p",null,"  -p, --pause                    (Default: False) Wait for key press at end"),Object(a.b)("p",null,"  --root                         Required. Namespace and prefix for output code file"),Object(a.b)("p",null,"  --bddregen                     (Default: False) Generate New BDD files from the Schema as a validation of the schema creation"),Object(a.b)("p",null,"  --toppadding                   (Default: False) Put four padding lines at top of file"),Object(a.b)("p",null,"  --nocppregen                   (Default: False) Skip C++ generation"),Object(a.b)("p",null,"  --parentchildfile              (Default: False) Output Parent / Child structure cross reference file if required"),Object(a.b)("p",null,"  --schematreefile               (Default: False) Output Schema Tree file if required"),Object(a.b)("p",null,"  --schemacode                   (Default: False) Output Schema Code File for Read / Write handler"),Object(a.b)("p",null,"  --useprecompile                (Default: False) Use Precompiled headers. RootFileName.h will be used as the precompiled header"),Object(a.b)("p",null,"  --useprotectedscalarlook       (Default: False) Use protected scalar Looks"),Object(a.b)("p",null,"  --includes                     Required. path to the start of relative includes"),Object(a.b)("p",null,"  --ooxml                        (Default: False) add OOXML features to generated code"),Object(a.b)("p",null,"  --rtf                          (Default: False) add RTF features to generated code"),Object(a.b)("p",null,"  --perlmode                     (Default: False) produce generated code in the style of the old Perl code generator (templated code)"),Object(a.b)("p",null,"  --optimise                     (Default: 0) optimisation level  (1 = reduce amount of glue logic"),Object(a.b)("p",null,"  --deferencechainneeded         (Default: False) insert dereference checks infront of acceptrules"),Object(a.b)("p",null,"  --remove_second_acceptcheck    (Default: False) If Accept rule is loaded early, discard insertion of the end location check"),Object(a.b)("p",null,"  --enable_dataheap              (Default: False) Enable dataheap/pointer/directory mechanism"),Object(a.b)("p",null,"  --help                         Display this help screen."))}p.isMDXComponent=!0}}]);