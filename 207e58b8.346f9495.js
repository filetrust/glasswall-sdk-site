(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{278:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.a.createElement(u,i(i({ref:t},b),{},{components:a})):n.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),l=(a(0),a(278)),o={title:"2.2.7.3 Parameters",sidebar_label:"2.2.7.3 Parameters"},i={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_3-parameters",id:"2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_3-parameters",isDocsHomePage:!1,title:"2.2.7.3 Parameters",description:"Only the highlighted single key parameters work on Linux. Where values strings are supplied with parameters then the value must be in quotes if it contains spaces.",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_3-parameters.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_3-parameters",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_3-parameters",version:"current",sidebar_label:"2.2.7.3 Parameters",sidebar:"someSidebar",previous:{title:"2.2.7.2 Step by Step Setup",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_2-step_by_step"},next:{title:"2.2.7.4 Examples",permalink:"/docs/2-glasswall_core/2_2-glasswall_editor/2_2_7-editor_cli/2_2_7_4-examples"}},c=[],b={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Only the highlighted single key parameters work on Linux. Where values strings are supplied with parameters then the value must be in quotes if it contains spaces."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Parameter")),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Description")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-?, **")," -h *",Object(l.b)("strong",{parentName:"td"},"*, --help")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Displays the help information with the list of parameters and what they are used for.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-v**")," , --version**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Displays the Glasswall version information.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-i**")," , --inputdirectory**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Used to specify the location of the folder containing the files to be processed which is given after the parameter. For example, -i ",'"',"e:\\cli\\test data\\oxml",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-o**")," , --outputdirectory**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The location you want the processed files to go to. This can either be an existing folder using a file path, a new folder in a specified location or a new folder within the current directory. The value is supplied after the parameter. For example, \u2013o ",'"',"e:\\cli\\output\\results",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-c**")," , --xmlConfig**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This directs the application to the content management file containing the options for how to manage the file content. Usage \u2013c ",'"',"C:\\cli\\config.xml",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-s**")," , --storageMode**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Selecting the storage mode, default is File to File. 0 = file to file, 1 = file to memory and 2 =memory to memory. For example, \u2013s 3.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-x**")," , --exportimport**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sets the import export option, either import or export. Export will export any embedded content and import will reimport the safe files that were exported. For example, \u2013x export.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-n**")," , --config**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This directs the application to the configuration INI file containing your chosen settings instead of using the parameters in the terminal. For example, \u2013n ",'"',"c:\\cli\\config.ini",'"',"Note: CLI expects the \u2013n and \u2013c paramters to be used together.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-m**")," , --concurrent**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Tells Glasswall to run in multithreaded mode.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-r**")," , --recurse**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Directs the application to recursively process all files in the subfolders of the specified input directory.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-p**")," , --preOrPostProcessWithRebuild**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Allows you to run both Editor and Rebuild in either order.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-d**")," , --determineftype**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This function has been deprecated.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-t**")," , --securTags**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This is used to tell Glasswall to insert the security tags specified in the supplied XML file containing the tags. For example, \u2013t ",'"',"e:\\cli\\tagging.in",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-u**")," , --securRetrieveTags**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This retrieves the security tags that Glasswall finds in the files of the specified input directory and outputs the tags to the directory specified following this parameter. For example, \u2013u e:\\cli\\tagsout",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-l**")," , --reportReq**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This enable report logs which allows you to see the processes of the files being run.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-a**")," , --allidinfo**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This gives you all possible issue ID","'","s which you can use to understand what issue caused the files to be non-conforming.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-b**")," , --idinfo**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This allows you to retrieve a specific issue ID.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-j**")," , --archive**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This is used to set the archive setting to Analysis or Protect mode.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-w**")," , --wordsearch**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This enables wordsearch, to be used to search a document for specific words and remove or replace them.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"-g**")," , --homoglyphs**"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This directs the application to the homoglyphs file containing the homoglyphs required for the wordsearch function to work. Usage \u2013g ",'"',"C:\\cli\\homoglyphs.json",'"')))))}s.isMDXComponent=!0}}]);