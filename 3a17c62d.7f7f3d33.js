(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(277)),s={title:"2.2.6.3.4 Appendix - Languages Other Than C++",sidebar_label:"2.2.6.3.4 Appendix - Languages Other Than C++"},l={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix",isDocsHomePage:!1,title:"2.2.6.3.4 Appendix - Languages Other Than C++",description:"All example code provided in this document so far have used C++ for calling the Glasswall Library.",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_3-examples/2_2_6_3_4-appendix",version:"current",sidebar_label:"2.2.6.3.4 Appendix - Languages Other Than C++"},o=[{value:"JavaScript",id:"javascript",children:[{value:"Environment",id:"environment",children:[]},{value:"Test Application Code",id:"test-application-code",children:[]},{value:"Test Results",id:"test-results",children:[]}]},{value:"Python",id:"python",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Test Application Code",id:"test-application-code-1",children:[]},{value:"Test Results",id:"test-results-1",children:[]}]},{value:"Java",id:"java",children:[{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Test Application Code",id:"test-application-code-2",children:[]},{value:"Test Results",id:"test-results-2",children:[]}]},{value:"C#",id:"c",children:[{value:"Prerequisites",id:"prerequisites-2",children:[]},{value:"Test Application Code",id:"test-application-code-3",children:[]},{value:"Test Results",id:"test-results-3",children:[]}]}],c={rightToc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All example code provided in this document so far have used C++ for calling the Glasswall Library."),Object(i.b)("p",null,"Included with the SDK are four wrappers allowing use of the Glasswall Library with C#, Java, JavaScript and Python."),Object(i.b)("p",null,"This section provides example code for the ","'","Hello Glasswall","'"," example in each of the four wrapper languages."),Object(i.b)("h2",{id:"javascript"},"JavaScript"),Object(i.b)("h3",{id:"environment"},"Environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The JavaScript wrapper requires Node.js version 10.16.3. More recent versions of Node may not be compatible.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Additional required modules include  ",Object(i.b)("strong",{parentName:"p"},"ffi"),"  and  ",Object(i.b)("strong",{parentName:"p"},"ref"),".\nAppropriate versions should be installed prior to running the test application.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the Core2 Libraries and all required folders are accessible to the wrapper."))),Object(i.b)("h3",{id:"test-application-code"},"Test Application Code"),Object(i.b)("p",null,"The following code tests the wrapper code and runs the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2libversion"}),Object(i.b)("strong",{parentName:"a"},"GW2LibVersion"))," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'let path = require(\'path\');\n\nlet main = function () {\n\n   // Include the Glasswall JavaScript Wrapper module\n   try {\n        let engine_path = "c:\\\\temp\\\\glasswall_core2.dll";\n        let glasswall = require("c:\\\\temp\\\\Core2JS.js");\n\n        // Change working directory to allow correct loading of GW library and its sub-libraries\n        process.chdir(path.dirname(engine_path.toLowerCase()));\n\n        // Create an instance of the Glasswall Library\n        var gw = new glasswall(engine_path);\n    }\n    catch (err) {\n        console.log("\\n  Unable to load Glasswall JavaScript wrapper");\n        console.log(err)\n    }\n\n    //  Call the GWFileVersion API function\n    console.log("> Request Library version...");\n    console.log("> Library version: " + gw.GW2LibVersion());\n};\n\nif (require.main === module) {\n    main();\n}\n')),Object(i.b)("h3",{id:"test-results"},"Test Results"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> Request Library version...\n> Library version: 2.0\n")),Object(i.b)("h2",{id:"python"},"Python"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The following code examples work with 64-bit versions of Python 2.7 and 3.8. The required dependencies are specified in the code examples."),Object(i.b)("h3",{id:"test-application-code-1"},"Test Application Code"),Object(i.b)("p",null,"The following code tests the wrapper code and runs the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2libversion"}),Object(i.b)("strong",{parentName:"a"},"GW2LibVersion"))," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"import sys\nimport logging\nimport Core2Py\n\ndef main():\n\n    from Core2Py import Interface_GwCore2\n\n    sys.path.append(\"C:\\\\temp\\\\Core2Py.py\")\n    print('Loading Library')\n    gw = Interface_GwCore2(\"C:\\\\temp\\\\Core2\\\\glasswall_core2.dll\")\n    print('Done')\n    libVer = gw.GW2LibVersion()\n    print('> Request Library version... ')\n    print('> Library version: ' + str(libVer.text))\n\nif __name__ == \"__main__\":\n    main()\n")),Object(i.b)("h3",{id:"test-results-1"},"Test Results"),Object(i.b)("p",null,"If successful, the test will return the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> Request Library version...\n> Library version: 2.0\n")),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("h3",{id:"prerequisites-1"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Java wrapper requires a JRE to be installed. This wrapper has been tested with V8. Other versions may not be compatible.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that a 64-bit version of the JRE is used.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Java wrapper requires all supporting files to be stored in the same directory as the wrapper itself. This means that the Core2 libraries and wrapper support files cannot be stored in subdirectories.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the Core2 Libraries and all required folders are accessible to the wrapper."))),Object(i.b)("h3",{id:"test-application-code-2"},"Test Application Code"),Object(i.b)("p",null,"The following code tests the wrapper code and runs the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2libversion"}),Object(i.b)("strong",{parentName:"a"},"GW2LibVersion"))," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'import java.io.IOException;\n\npublic class Core2JavaTestApp\n{\n    public static void main(String argv[]) throws IOException\n    {\n        System.loadLibrary("Core2JavaBridge");\n        Core2JavaBridge gw = new Core2JavaBridge();\n\n        try\n        {\n            // Request Library Version\n            System.out.println("> Request Library Version...");\n            System.out.println("> Library Version: " + gw.GW2LibVersion());\n        }\n        catch (Exception error)\n        {\n            System.out.println("error - exception caught: " + error.getMessage());\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"test-results-2"},"Test Results"),Object(i.b)("p",null,"If successful, the test will return the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> Request Library version...\n> Library version: 2.0\n")),Object(i.b)("h2",{id:"c"},"C#"),Object(i.b)("h3",{id:"prerequisites-2"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the DLL (",'"',"glasswall.core2.csharp.wrapper",'"',") is added as a reference to your environment to be able to use it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the Core2 Libraries and all required folders are accessible to the wrapper."))),Object(i.b)("h3",{id:"test-application-code-3"},"Test Application Code"),Object(i.b)("p",null,"The following code tests the wrapper code and runs the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions#gw2libversion"}),Object(i.b)("strong",{parentName:"a"},"GW2LibVersion"))," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'using glasswall.core2.wrapper;\nusing system;\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        Glasswall gw = new Glasswall(pathToLib);\n\n        Console.WriteLine("> Request Library version...");\n        Console.WriteLine("> Library Version: " + gw.LibVersion());\n    }\n}\n')),Object(i.b)("h3",{id:"test-results-3"},"Test Results"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> Request Library version...\n> Library version: 2.0\n")))}p.isMDXComponent=!0},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,h=b["".concat(s,".").concat(u)]||b[u]||d[u]||i;return r?a.a.createElement(h,l(l({ref:t},c),{},{components:r})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);