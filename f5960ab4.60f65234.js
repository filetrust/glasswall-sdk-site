(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var s=n(2),r=n(6),i=(n(0),n(279)),a={title:"2.2.12 Advanced Features",sidebar_label:"2.2.12 Advanced Features"},o={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_12-advanced_features",id:"2-glasswall_core/2_2-glasswall_editor/2_2_12-advanced_features",isDocsHomePage:!1,title:"2.2.12 Advanced Features",description:"Memory management",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_12-advanced_features.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_12-advanced_features",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_12-advanced_features",version:"current",sidebar_label:"2.2.12 Advanced Features",sidebar:"someSidebar",previous:{title:"2.2.11 Basic Glasswall Features",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_11-basic-features"},next:{title:"2.2.13 Appendix - Languages Other Than C++",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_13-appendix"}},l=[{value:"Memory management",id:"memory-management",children:[]},{value:"Import and Export Functions",id:"import-and-export-functions",children:[]},{value:"Session Status and Errors",id:"session-status-and-errors",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"memory-management"},"Memory management"),Object(i.b)("p",null,"Memory buffers may be used for input and output. The following example demonstrates this functionality."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the following sample code to register an input buffer and output buffer to Glasswall, and to run the session:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'int main ()\n{\n    int status = -1;\n\n    // Load input data from file to memory buffer\n    std::ifstream input_file("C:\\\\GWTest\\\\input\\\\Test.jpg", std::ios::binary);\n    input_file.seekg(0, input_file.end);\n    size_t input_length = input_file.tellg();\n    input_file.seekg(0, std::ios::beg);\n\n    std::vector<char> input_buffer(input_length);\n    input_file.read(input_buffer.data(), input_buffer.size());\n    input_file.close();\n\n    // Establish output buffer\n    char *output_buffer = nullptr;\n    size_t output_length = 0;\n    \n    // Glasswall functions\n    int sessionID = GW2OpenSession();\n    printf("GW2OpenSession completed with status %u \\n", sessionID);\n    printf("GW2RegisterInputMemory completed with status %u \\n",\n        GW2RegisterInputMemory(sessionID, input_buffer.data(), input_buffer.size()));\n    printf("GW2RegisterOutputMemory completed with status %u \\n",\n        GW2RegisterOutputMemory(sessionID, &output_buffer, &output_length));\n    printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n\n    // Output buffer to file\n    std::ofstream outfile("C:\\\\GWTest\\\\output\\\\Test.jpg", std::ifstream::binary);\n    outfile.write(output_buffer, output_length);\n    outfile.close();\n    \n    printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n    printf("Process Complete!\\n");\n    return 0;\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build and run the program. Glasswall will return the following if successful:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n<... camera registration output removed ...>\nnum cameras: 24\nGW2OpenSession\nGW2OpenSession completed with status 1\nGW2RegisterInputMemory completed with status 0\nGW2RegisterOutputMemory completed with status 0\nGW2RunSession completed with status 0\nGW2CloseSession completed with status 0\nProcess Complete!\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Glasswall will have processed the data held in the input buffer and output to the output buffer. The program then saves the buffer contents to a new file at the specified location.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Note that as part of the GW2CloseSession() procedure, Glasswall destroys all buffers it has created. Data should be retrieved from these buffers before calling GW2CloseSession(). For more information, see ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2runsession"}),Object(i.b)("strong",{parentName:"a"},"GW2RunSession")),"."))),Object(i.b)("h2",{id:"import-and-export-functions"},"Import and Export Functions"),Object(i.b)("p",null,"Use of Import and Export based functions follows the same pattern as Input and Output functions. These functions require and generate archives of sisl or xml files and images in place of regular files. The code example below demonstrates this functionality by first inputting a file and exporting it to a sisl archive. It then imports this archive back into Glasswall, regenerates the file and outputs it. Note that two sessions are required to complete this operation."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the following sample code to create the input \u2192 export \u2192 import \u2192 output chain."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'int main ()\n{\n    int status = -1;\n    \n    int sessionID = GW2OpenSession();\n    printf("GW2OpenSession completed with status %u \\n", sessionID);\n    printf("GW2RegisterInputFile completed with status %u \\n",\n        GW2RegisterInputFile(sessionID, "C:\\\\GWTest\\\\input\\\\Input.xlsx"));\n    printf("GW2RegisterOutFile completed with status %u \\n",\n        GW2RegisterExportFile(sessionID, "C:\\\\GWTest\\\\export\\\\Export.zip"));\n    printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n    printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n    sessionID = GW2OpenSession();\n    printf("GW2OpenSession completed with status %u \\n", sessionID);\n    printf("GW2RegisterImportFile completed with status %u \\n",\n        GW2RegisterImportFile(sessionID, "C:\\\\GWTest\\\\export\\\\Export.zip"));\n    printf("GW2RegisterOutFile completed with status %u \\n",\n        GW2RegisterOutFile(sessionID, "C:\\\\GWTest\\\\output\\\\Output.xlsx"));\n    printf("GW2RunSession completed with status %u \\n", GW2RunSession(sessionID));\n    printf("GW2CloseSession completed with status %u \\n", GW2CloseSession(sessionID));\n\n    printf("Process Complete!\\n");\n    return 0;\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build and run the program. Glasswall will return the following if successful:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n<... camera registration output removed ...>\nnum cameras: 24\nGW2OpenSession\nGW2OpenSession completed with status 1\nGW2RegisterInputFile completed with status 0\nGW2RegisterOutFile completed with status 0\n<... processing messages from GW removed ...>\nGW2RunSession completed with status 0\nGW2CloseSession completed with status 0\nGW2OpenSession completed with status 2\nGW2RegisterImportFile completed with status 0\nGW2RegisterOutFile completed with status 0\nGW2RunSession completed with status 0\nGW2CloseSession completed with status 0\nProcess Complete!\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A sisl archive and an output file will have been created at the specified locations."))),Object(i.b)("h2",{id:"session-status-and-errors"},"Session Status and Errors"),Object(i.b)("p",null,"Functions are available to return the status of the named session to the user. Information on any errors occurring may also be returned. The following code example processes a file and returns the status of its session, along with an error message."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the following sample code to process a file. Note the two function calls to return the status and error information."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),'int main()\n {\n     int status = -1;\n     int sessionID = GW2OpenSession();\n\n     printf("GW2OpenSession completed with status %i \\n", sessionID);\n     printf("GW2RegisterInputFile completed with status %i \\n",\n         GW2RegisterInputFile(sessionID, "C:\\\\GWTest\\\\input\\\\2030_trailer.mp4"));\n     printf("GW2RegisterOutFile completed with status %i \\n",\n         GW2RegisterOutFile(sessionID, "C:\\\\GWTest\\\\output\\\\processed.mp4"));\n     printf("GW2RunSession completed with status %i \\n", GW2RunSession(sessionID));\n     \n     // Establish Buffers for returned dataint glasswallSessionStatus = 0;\n     char *MsgBuffer = nullptr;\n     size_t BufferLength = 0;\n\n     // Return data on file session status\n     printf("GW2FileSessionStatus completed with status %u \\n",\n         GW2FileSessionStatus(sessionID, &glasswallSessionStatus, &MsgBuffer, &BufferLength));\n     printf("Glasswall Session %u status  = %i \\n", sessionID, glasswallSessionStatus);\n     printf("Glasswall Session %u message = %.*s \\n", sessionID, BufferLength, MsgBuffer);\n     \n     // Return data on file errors\n     printf("GW2FileErrorMsg completed with status %i \\n",\n         GW2FileErrorMsg(sessionID, &MsgBuffer, &BufferLength));\n     printf("Glasswall Session %u error = %.*s \\n", sessionID, BufferLength, MsgBuffer);\n\n     // Close \n     printf("GW2CloseSession completed with status %i \\n", GW2CloseSession(sessionID));\n     printf("Process Complete!\\n");\n\n     system("Pause");\n     return 0;\n }\n\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build and run the program. Glasswall will return the following:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"    Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...\n    <... camera registration output removed ...>\n    num cameras: 24\n    GW2OpenSession\n    GW2OpenSession completed with status 1\n    GW2RegisterInputFile completed with status 0\n    GW2RegisterOutFile completed with status 0\n    GW2RunSession completed with status 0\n    GW2FileSessionStatus completed with status 0\n    Glasswall Session 1 status  = 0\n    Glasswall Session 1 message = Issues Found, Remedies Applied\n    GW2FileErrorMsg completed with status 0\n    Glasswall Session 1 error = Validation of FileType box Major Brand field failed.\n    GW2CloseSession completed with status 0\n    Process Complete!\n")))),Object(i.b)("p",null,"Note that the above example attempts to process a file with a known error, thus an error message is generated. If a file has been processed successfully no error message will be generated."))}p.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var s=n(0),r=n.n(s);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,d=c["".concat(a,".").concat(m)]||c[m]||f[m]||i;return n?r.a.createElement(d,o(o({ref:t},u),{},{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);