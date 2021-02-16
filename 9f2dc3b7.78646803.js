(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{197:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return l})),s.d(t,"metadata",(function(){return o})),s.d(t,"rightToc",(function(){return r})),s.d(t,"default",(function(){return u}));var n=s(2),i=s(6),a=(s(0),s(279)),l={title:"2.2.6.3.2 Basic Glasswall Features",sidebar_label:"2.2.6.3.2 Basic Glasswall Features"},o={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_2-basic-features",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_2-basic-features",isDocsHomePage:!1,title:"2.2.6.3.2 Basic Glasswall Features",description:"The following section introduces the basic features of the Glasswall FileTrust SDK and provides code examples. Ensure that the Glasswall FileTrust SDK has been installed successfully and that your project is correctly linked to the Glasswall FileTrust library before you begin.",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_2-basic-features.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_2-basic-features",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_2-basic-features",version:"current",sidebar_label:"2.2.6.3.2 Basic Glasswall Features",sidebar:"someSidebar",previous:{title:"2.2.6.3.1 Overview of Operation",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_1-overviewofoperation"},next:{title:"2.2.6.3.3 Advanced Features",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_3-advanced_features"}},r=[{value:"Processing a file",id:"processing-a-file",children:[]},{value:"Session Management",id:"session-management",children:[]},{value:"Applying a Policy File",id:"applying-a-policy-file",children:[]},{value:"Generating Additional Output",id:"generating-additional-output",children:[]}],p={rightToc:r};function u(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following section introduces the basic features of the Glasswall FileTrust SDK and provides code examples. Ensure that the Glasswall FileTrust SDK has been installed successfully and that your project is correctly linked to the Glasswall FileTrust library before you begin."),Object(a.b)("p",null,"The examples have been written in C++. For examples using other languages, please refer to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix"}),Object(a.b)("strong",{parentName:"a"},"Appendix - Languages Other Than C++"))," and wrapper documentation, plus the accompanying test applications."),Object(a.b)("h2",{id:"processing-a-file"},"Processing a file"),Object(a.b)("p",null,"This section describes the steps required to process a file. It will open a session, register the input and output files, process the file and finally close the session."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the following code to your project:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'int main ()\n{\n    int status = -1;\n    int sessionID = GW2OpenSession();\n\n    printf("GW2OpenSession completed with status %u \\n", sessionID);\n    printf("GW2RegisterInputFile completed with status %u \\n", \n            GW2RegisterInputFile(sessionID, "C:\\\\GWTest\\\\input\\\\Input.jpg"));\n    printf("GW2RegisterOutFile completed with status %u \\n",  \n            GW2RegisterOutFile(sessionID, "C:\\\\GWTest\\\\output\\\\Output.jpg"));\n    printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n    printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n    printf("Process Complete!\\n");\n    return 0;\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build and run the program. If successful, Glasswall will generate the following:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n<... camera registration output removed ...>\nnum cameras: 24\nGW2OpenSession\nGW2OpenSession completed with status 1\nGW2RegisterInputFile completed with status 0\nGW2RegisterOutFile completed with status 0\nGW2RunSession completed with status 0\nGW2CloseSession completed with status 0\nProcess Complete!\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Glasswall will have output the processed file to the designated folder \u2013 in this case, C:\\GWTest\\output","."))),Object(a.b)("h2",{id:"session-management"},"Session Management"),Object(a.b)("p",null,"More than one Glasswall session may be active at the same time. Opening a session generates a session ID that then may be used to reference that session. The following steps and code example demonstrate this functionality:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use the following sample code to register two sessions and their required files to Glasswall:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'int main()\n{\n    int status = -1;\n    int sessionA = GW2OpenSession();\n    int sessionB = GW2OpenSession();\n\n    printf("GW2OpenSession completed with status %u \\n", sessionA);\n    printf("GW2OpenSession completed with status %u \\n\\n", sessionB);\n\n    printf("Session %u GW2RegisterInputFile completed with status %u \\n", sessionA, \n        GW2RegisterInputFile(sessionA, "C:\\\\GWTest\\\\input\\\\TestA.jpg"));\n    printf("Session %u GW2RegisterInputFile completed with status %u \\n", sessionB, \n        GW2RegisterInputFile(sessionB, "C:\\\\GWTest\\\\input\\\\TestC.jpg"));\n\n    printf("Session %u GW2RegisterOutFile completed with status %u \\n", sessionA, \n        GW2RegisterOutFile(sessionA, "C:\\\\GWTest\\\\output\\\\TestA.jpg"));\n    printf("Session %u GW2RegisterOutFile completed with status %u \\n\\n", sessionB, \n        GW2RegisterOutFile(sessionB, "C:\\\\GWTest\\\\output\\\\TestC.jpg"));\n\n    printf("Session %u GW2RunSession completed with status %u \\n", sessionA, \n        GW2RunSession(sessionA));\n    printf("Session %u GW2RunSession completed with status %u \\n\\n", sessionB, \n        GW2RunSession(sessionB));\n\n    printf("Session %u GW2CloseSession completed with status %u \\n", sessionA, \n        GW2CloseSession(sessionA));\n    printf("Session %u GW2CloseSession completed with status %u \\n\\n", sessionB, \n        GW2CloseSession(sessionB));\n\n    printf("Process Complete!\\n");\n    return 0;\n}\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build and run the program. If successful, Glasswall will return the following:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n<\u2026 camera registration output removed \u2026>\nnum cameras: 24\nGW2OpenSession\nGW2OpenSession completed with status 1\nGW2OpenSession completed with status 2\n\nSession 1 GW2RegisterInputFile completed with status 0\nSession 2 GW2RegisterInputFile completed with status 0\n\nSession 1 GW2RegisterOutFile completed with status 0\nSession 2 GW2RegisterOutFile completed with status 0\n\nSession 1 GW2RunSession completed with status 0\nSession 2 GW2RunSession completed with status 0\n\nSession 1 GW2CloseSession completed with status 0\nSession 2 GW2CloseSession completed with status 0\n\nProcess Complete!\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Glasswall will have output the processed files to the designated folder \u2013 in this case, C:\\GWTest\\output",".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Care must be taken to ensure the correct session is being referenced. Referencing the wrong session may lead to unexpected results.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"It is not possible to access a session or its data once it has been closed."))),Object(a.b)("h2",{id:"applying-a-policy-file"},"Applying a Policy File"),Object(a.b)("p",null,"Glasswall uses policy files to customise how files should be processed. This example describes how to register a policy file to a session."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use the following sample code to register an input file and output file to Glasswall. As this configuration file is in the XML format, the third parameter for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2registerpoliciesfile"}),Object(a.b)("strong",{parentName:"a"},"GW2RegisterPoliciesFile"))," is set to zero."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'int main ()\n  {\n      int status = -1;\n      int sessionID = GW2OpenSession();\n\n      printf("GW2OpenSession completed with status %u \\n", sessionID);\n      printf("GW2RegisterInputFile completed with status %u \\n",\n          GW2RegisterInputFile(sessionID, "C:\\\\GWTest\\\\input\\\\Input.jpg"));\n      printf("GW2RegisterOutFile completed with status %u \\n",\n          GW2RegisterOutFile(sessionID, "C:\\\\GWTest\\\\output\\\\Output.jpg"));\n      printf("GW2RegisterPoliciesFile completed with status %u \\n",\n          GW2RegisterPoliciesFile(sessionID, "C:\\\\GWTest\\\\xmlconfig.xml", 0));\n      printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n      printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n      printf("Process Complete!\\n");\n      return 0;\n  } \n\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build and run the program. Glasswall will return the following:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n<... camera registration output removed ...>\nnum cameras: 24\nGW2OpenSession\nGW2OpenSession completed with status 1\nGW2RegisterInputFile completed with status 0\nGW2RegisterOutFile completed with status 0\nGW2 completed with status 0\nGW2RunSession completed with status 0\nGW2CloseSession completed with status 0\nProcess Complete!\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Glasswall will have output the processed file to the designated folder \u2013 in this case, C:\\GWTest\\output","."))),Object(a.b)("h2",{id:"generating-additional-output"},"Generating Additional Output"),Object(a.b)("p",null,"The following code example describes how to generate an analysis file. Report files may also be generated using a similar procedure."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use the following sample code to register an input file and output file to Glasswall . As the analysis file will be in XML format, the third parameter for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2registerpoliciesfile"}),Object(a.b)("strong",{parentName:"a"},"GW2RegisterAnalysisFile"))," is set to zero."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'int main ()\n {\n     int status = -1;\n     int sessionID = GW2OpenSession();\n\n     printf("GW2OpenSession completed with status %u \\n", sessionID);\n     printf("GW2RegisterInputFile completed with status %u \\n",\n         GW2RegisterInputFile(sessionID, "C:\\\\GWTest\\\\input\\\\Input.jpg"));\n     printf("GW2RegisterOutFile completed with status %u \\n",\n         GW2RegisterOutFile(sessionID, "C:\\\\GWTest\\\\output\\\\Output.jpg"));\n     printf("GW2RegisterAnalysisFile completed with status %u \\n",\n         GW2RegisterAnalysisFile(sessionID, "C:\\\\GWTest\\\\output\\\\Analysis.xml", 0));\n     printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n     printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n     printf("Process Complete!\\n");\n     return 0;\n }\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build and run the program. Glasswall will return the following if successful:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n <... camera registration output removed ...>\n num cameras: 24\n GW2OpenSession\n GW2OpenSession completed with status 1\n GW2RegisterInputFile completed with status 0\n GW2RegisterOutFile completed with status 0\n GW2RegisterAnalysisFile completed with status 0\n GW2RunSession completed with status 0\n GW2CloseSession completed with status 0\n Process Complete!\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Glasswall will have output the processed file and the generated analysis file to the designated folder \u2013 in this case, C:\\GWTest\\output","."))))}u.isMDXComponent=!0},279:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return b}));var n=s(0),i=s.n(n);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(s),m=n,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return s?i.a.createElement(b,o(o({ref:t},p),{},{components:s})):i.a.createElement(b,o({ref:t},p))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,l=new Array(a);l[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=s[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,s)}m.displayName="MDXCreateElement"}}]);