(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),l=(n(0),n(278)),o={title:"2.4.3 Glasswall C++ Code Generators",sidebar_label:"2.4.3 Glasswall C++ Code Generators"},c={unversionedId:"2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators",id:"2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators",isDocsHomePage:!1,title:"2.4.3 Glasswall C++ Code Generators",description:"Introduction \u2013 the requirement and architecture",source:"@site/docs/2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators.md",slug:"/2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_4-common/2_4_3-GlasswallCodeGenerators",version:"current",sidebar_label:"2.4.3 Glasswall C++ Code Generators",sidebar:"someSidebar",previous:{title:"2.4.2 Data Validation Language (DVL)",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_4-common/2_4_2-dvl"},next:{title:"3.1 Adding OOXML Support to Beyond Compare",permalink:"/glasswall-sdk-site/docs/3-guides/3_1-adding_ooxml_support_to_beyond_compare"}},i=[{value:"Introduction \u2013 the requirement and architecture",id:"introduction--the-requirement-and-architecture",children:[]},{value:"Overview",id:"overview",children:[]},{value:"BDD TO CPP",id:"bdd-to-cpp",children:[{value:"Context",id:"context",children:[]}]},{value:"DVL TO CPP",id:"dvl-to-cpp",children:[{value:"Overview",id:"overview-1",children:[]}]},{value:"Code Generation Batchfiles (generate_code.bat)",id:"code-generation-batchfiles-generate_codebat",children:[{value:"Context",id:"context-1",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}]}],s={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"introduction--the-requirement-and-architecture"},"Introduction \u2013 the requirement and architecture"),Object(l.b)("p",null,"The requirement was to find a way to read and validate the contents of a structured document  in a range of different formats with the minimum of code being handcrafted.  Because of the huge number of different structures that are possible within a document format, it was decided to generate C++ methods to read, validate and write the structures."),Object(l.b)("p",null,"Each camera has an interface module with a \u2018C\u2019 entry point to be called by the Glasswall code usually through push_camera.  This interface function creates a top-level c++ object and calls the member functions on it to read, validate and write itself and return a managed/nonconformant result.",Object(l.b)("br",{parentName:"p"}),"\n","The read function of this root object calls read functions for the objects that make it up and so it goes on down the data tree.  Leaf nodes that don\u2019t contain any more structures, get the scalar values for their content from the input memory buffer (using the sim_glasswall scal_readFromBuffer functions)."),Object(l.b)("p",null,"Validation is performed recursively on the data tree to get each data object to perform value checks on its data with optional content management performed."),Object(l.b)("p",null,"Similarly write functions are called on the managed data to serialise the managed data structures back into the output memory buffer."),Object(l.b)("p",null,"In addition, this function handles any exceptions that may occur during the processing of this file and deletes the C++ data for the stream."),Object(l.b)("p",null,"BDDLStructBase \u2013 A base class that contains the common data elements and functions that all BDD based data structures have.",Object(l.b)("br",{parentName:"p"}),"\n","The main feature of the base class is the template read functions that are used by each derived structure to call its component substructures.  The templating is needed in order to pass typed parameters to the functions within each of these substructures so that they can access members of ancestor objects."),Object(l.b)("p",null,"Sim_glasswall \u2013 the memorybuffer interface functions called by the generated reading and writing functions.  Functions in this module look after reading scalar fields that comprise the atoms of all the data structures."),Object(l.b)("p",null,"In addition, the following utility modules provide support functions for the generated code:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BDDHelperFuncs \u2013 small bunch of utility funcs, mostly string compare functions "),Object(l.b)("li",{parentName:"ul"},"BDDValidationFuncs \u2013 content management functions to be called by validation functions"),Object(l.b)("li",{parentName:"ul"},"ucpLogging \u2013 exception reporting stuff: HandleReadException, logMultiLineError called by camera if module or base class reads")),Object(l.b)("h3",{id:"overview"},"Overview"),Object(l.b)("p",null,"The tools for converting BDDL and DVL files into C++ has undergone several iterations using various tools and programming languages.\nThis is the current structure of the toolchains in use."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The older Perl generator only creates C++ from BDDL"),Object(l.b)("li",{parentName:"ul"},"The original C# dvl_checker tool has syntax reporting for DVL (using ANTLR to read the DVL) and C++ code generation from DVL but had some integration problems with the C++ produced by the Perl Tool because it relied on Miraplacid BDDL reading library. "),Object(l.b)("li",{parentName:"ul"},"The newer UCP Toolchain is a new BDDL to C++ generator derived from the C# dvl_checker and an upgraded dvl_checker that is integrated with the BDDL reading code (avoids reliance on Miraplacid).   ")),Object(l.b)("p",null,"At present, some cameras are using the older Perl generator and others the newer C# replacement (",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"#camera-to-toolchain-map"}),"see Camera to Toolchain Map"),")"),Object(l.b)("p",null,'\\diafile "codeGenHistory.dia"'),Object(l.b)("h2",{id:"bdd-to-cpp"},"BDD TO CPP"),Object(l.b)("h3",{id:"context"},"Context"),Object(l.b)("p",null,"Converts BDD to C++ Code Produces Template Heavy Code"),Object(l.b)("p",null,"See  @ref BddToCppConverter"),Object(l.b)("h2",{id:"dvl-to-cpp"},"DVL TO CPP"),Object(l.b)("h3",{id:"overview-1"},"Overview"),Object(l.b)("p",null,"Checks DVL files for syntax errors and produces validation methods in C++ to link with code produced by either version of BDDL to C++ convertor."),Object(l.b)("p",null,"See @ref DvlChecker"),Object(l.b)("h2",{id:"code-generation-batchfiles-generate_codebat"},"Code Generation Batchfiles (generate_code.bat)"),Object(l.b)("h3",{id:"context-1"},"Context"),Object(l.b)("p",null,"Suite of batchfiles run from this create C++ from BDD and DVL using old or new tools for each of the cameras"),Object(l.b)("h3",{id:"modules"},"Modules"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Location")," - ...","\\","glasswall.classic","\\","data.definitions.and.rules","\\","BDD_DVL_to_code_scripts"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"generate_code.bat"),Object(l.b)("li",{parentName:"ul"},"setup_XXXX.bat (one each for every camera plus the two platform versions ","[perl|ucp]")),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,'generate_code  "tfs_path" "cameraname" "toolversion"'),Object(l.b)("p",null,"where"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"tfs_path" is the path to your workspace e.g.  c:',"\\","tfs2013"),Object(l.b)("li",{parentName:"ul"},'"cameraname" is one of the camera types e.g. emf,wmf,msdoc,msppt,msxls,printersetting,rtf,equationnative   etc'),Object(l.b)("li",{parentName:"ul"},"\"toolversion\" is either 'perl' or 'ucp' depending on whether you are using the old perl bdd-to-cpp tool and C# dvl_checker tool")),Object(l.b)("p",null,"or the new all C# 'ucp' tool chain currently in inhousetools/features."),Object(l.b)("p",null,"(or use 'ucp_pending' if testing new ucp tools in the \"","\\","\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\","UCP_ToolChain","\\",'Pending" directory,\ninstead of default "',"\\","\\","STORAGE-SERVER","\\","Development Drive","\\","Development Tools","\\",'UCP_ToolChain" directory)'),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("p",null,"Goto Directory ...","\\","glasswall.classic","\\","data.definitions.and.rules","\\","BDD_DVL_to_code_scripts in your current working branch.\nMake sure miraplacid include path is pointing at your branches BDD files"),Object(l.b)("p",null,"Type ",Object(l.b)("em",{parentName:"p"},"generate_code  c:","\\","tfs2015 ms-doc perl")),Object(l.b)("p",null,"Will produce the C++ code in the following directories:"),Object(l.b)("p",null," ...","\\","glasswall.classic","\\","data.definitions.and.rules","\\","BDD_DVL_to_code_scripts","\\","temporary_generate_output","\\","msdoc_code.perl"),Object(l.b)("p",null,"and"),Object(l.b)("p",null," ...","\\","glasswall.classic","\\","data.definitions.and.rules","\\","BDD_DVL_to_code_scripts","\\","temporary_generate_output","\\","msdoc_dvl_code.perl"),Object(l.b)("a",{name:"camera-to-toolchain-map"}),"## Camera to Toolchain Map",Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null," Camera "),Object(l.b)("th",null," Toolchain "),Object(l.b)("th",null," BatchFileReady ")),Object(l.b)("tr",null,Object(l.b)("td",null," msdoc "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," msxls "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," msppt "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," ooxml "),Object(l.b)("td",null," Ucp "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," emf "),Object(l.b)("td",null," Ucp "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," wmf "),Object(l.b)("td",null," Ucp "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," rtf "),Object(l.b)("td",null," Ucp "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," printersettings "),Object(l.b)("td",null," Ucp "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," equationnative "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," Yes ")),Object(l.b)("tr",null,Object(l.b)("td",null," PictureStream "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," No ")),Object(l.b)("tr",null,Object(l.b)("td",null," CompObjStream "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," No ")),Object(l.b)("tr",null,Object(l.b)("td",null," DSI "),Object(l.b)("td",null," Perl "),Object(l.b)("td",null," No "))),Object(l.b)("h1",{id:"related-links"},"Related Links"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"../../7-tools/7_5-developer_tools/7_5_2-glasswall_developed_tools"}),"Glasswall Developed Tools"))))}d.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||l;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);