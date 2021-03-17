(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(276)),s={title:"2.1.7.2.4 Java",sidebar_label:"2.1.7.2.4 Java"},i={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_4-java",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_4-java",isDocsHomePage:!1,title:"2.1.7.2.4 Java",description:"1 Introduction",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_4-java.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_4-java",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_4-java",version:"current",sidebar_label:"2.1.7.2.4 Java",sidebar:"someSidebar",previous:{title:"2.1.7.2.3 C#",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_2-sdk_wrappers/2_1_7_2_3-c_sharp"},next:{title:"2.2.1 Product Description",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_1-product_description"}},o=[{value:"1.1 Issues to consider during implementation",id:"11-issues-to-consider-during-implementation",children:[]},{value:"2.1 Files provided",id:"21-files-provided",children:[]},{value:"2.2 Framework dependencies",id:"22-framework-dependencies",children:[]},{value:"2.3 Wrapper integration",id:"23-wrapper-integration",children:[]},{value:"2.4 Code example",id:"24-code-example",children:[]},{value:"2.5 Issues to consider",id:"25-issues-to-consider",children:[]}],c={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"1-introduction"},"1 Introduction"),Object(l.b)("p",null,"This is an introductory guide on how to use the language wrappers for the Glasswall API."),Object(l.b)("p",null,"For each language we have provided the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The required dependencies and the target platform or framework required for the language. The mentioned platforms and frameworks are the ones that were used during testing, but other versions may or may not work."),Object(l.b)("li",{parentName:"ul"},"A general overview on integrating Glasswall into a project."),Object(l.b)("li",{parentName:"ul"},"A code example demonstrating how the Glasswall library can be used to process a directory of files. Each example shows the file being processed in Manage and Protect mode as well as being analysed in Analysis mode.")),Object(l.b)("h2",{id:"11-issues-to-consider-during-implementation"},"1.1 Issues to consider during implementation"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Glasswall library is not thread safe, which means that the language wrappers are not thread safe. This can be overcome by running the Glasswall library in a separate process."),Object(l.b)("li",{parentName:"ul"},"We recommend that the Glasswall library is run in separate process in case unforeseen issues arise.")),Object(l.b)("h1",{id:"2-java"},"2 Java"),Object(l.b)("h2",{id:"21-files-provided"},"2.1 Files provided"),Object(l.b)("p",null,"The Java wrapper is supplied in two parts: A C++ library that interacts with the Glasswall library and a JAR file that allows Java to interact with the C++ library."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"libglasswall.classic.java.so.1.1.0")," \u2013 The C++ library for the Linux OS."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"glasswall.classic.java.dll")," \u2013 The C++ library for the Windows OS."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"glasswall.classic.java.jar")," \u2013 The JAR file that enables interop between Java and the C++ library. It contains two classes: Glasswall which is used for executing the Glasswall APIs and GlasswallResult which contains the results from most calls to Glasswall."),Object(l.b)("h2",{id:"22-framework-dependencies"},"2.2 Framework dependencies"),Object(l.b)("p",null,"The Java wrapper requires a JVM installed that supports Java 8."),Object(l.b)("h2",{id:"23-wrapper-integration"},"2.3 Wrapper integration"),Object(l.b)("p",null,"The JAR file will need to be added to your project, which will allow you to call the Glasswall library from Java. You will also need to add the path of the ",Object(l.b)("em",{parentName:"p"},"glasswall.classic.java")," library to the ",Object(l.b)("strong",{parentName:"p"},"java.library.path")," property. The Glasswall library will also need to be stored in the library search path otherwise you will get an UnsatisfiedLinkError. The Glasswall library uses signal handling in order to prevent crashes from occurring, but this can interfere with the JVM. Signal chaining will also need to be setup in order to prevent errors in Glasswall from propagating into the JVM. Information on how to set this up can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/signals-139944.html"}),"https://www.oracle.com/technetwork/java/javase/signals-139944.html")),Object(l.b)("p",null,"For example, on our Linux machines we may use something like this when running the Java wrapper:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"export LD","_","PRELOAD=/lib/jvm/jre-1.8.0/lib/amd64/libjsig.so")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"export LD","_","LIBRARY","_","PATH=.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"java \u2013cp glasswall.classic.java.jar:. \u2013Djava.library.path=. \u2026")),Object(l.b)("p",null,"In the example above, the Glasswall library, the ",Object(l.b)("em",{parentName:"p"},"glasswall.classic.java")," library, the ",Object(l.b)("em",{parentName:"p"},"glasswall.classic.java.jar")," and the Java executable are all in the current directory."),Object(l.b)("h2",{id:"24-code-example"},"2.4 Code example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import java.io.IOException;\nimport java.io.PrintWriter;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardOpenOption;\n\nimport com.glasswallsolutions.Glasswall;\nimport com.glasswallsolutions.GlasswallResult;\n\npublic class GlasswallExample {\n\n    public static void main(String[] args) throws IOException\n    {\n        Path xmlConfigPath = Paths.get(args[0]);        // Path to the XML content management file\n        Path inputDirectoryPath = Paths.get(args[1]);   // Path to the input directory\n        Path outputDirectoryPath = Paths.get(args[2]);  // Path to the output directory\n        String absoluteOutputDirectory = outputDirectoryPath.toAbsolutePath().toString();\n\n        Files.createDirectories(outputDirectoryPath);\n\n        // Print the library version\n        System.out.println(String.format("Library version: %s", Glasswall.GWFileVersion ()));\n\n        byte[] xmlConfigBuffer = Files.readAllBytes(xmlConfigPath);\n        String xmlConfig = new String(xmlConfigBuffer, "UTF-8");\n\n        // Apply the content management configuration\n        GlasswallResult configResult = Glasswall.GWFileConfigXML(xmlConfig);\n\n        if (configResult.fileStatus != 1)\n        {\n            System.out.println(String.format("Failed to load the xml config file for the following reason: %s", Glasswall.GWFileErrorMsg()));\n            return;\n        }\n\n        Files.walk(inputDirectoryPath)\n                .forEach((Path file) -> {\n                    if (Files.isRegularFile(file))\n                    {\n                        String fullFilePathName = file.toAbsolutePath().toString();\n                        System.out.println(String.format("Processing file: %s", fullFilePathName));\n\n                        String name = file.getFileName().toString();\n                        // We use the extension as the file type of the input file\n                        String extension = name.substring(name.lastIndexOf(".") + 1);\n\n                        System.out.println ("Calling GWFileProtect");\n                        // Process the file through File to Memory Protect mode\n                        GlasswallResult manageAndProtectResult = Glasswall.GWFileProtect (fullFilePathName, extension);\n                        printProcessInfo (manageAndProtectResult);\n                        writeAllBytes (Paths.get (absoluteOutputDirectory, name), manageAndProtectResult.manageAndProtectBuffer);\n\n                        System.out.println ("Calling GWFileAnalysisAudit");\n                        // Analyse the file with File to Memory Analysis mode\n                        GlasswallResult analysisResult = Glasswall.GWFileAnalysisAudit (fullFilePathName, extension);\n                        printProcessInfo (analysisResult);\n                        writeAllText (Paths.get (absoluteOutputDirectory, name + ".xml"), analysisResult.analysisReport);\n                    }\n                });\n\n        Glasswall.GWFileDone ();\n    }\n\n    static void printProcessInfo(GlasswallResult result)\n    {\n        System.out.println (String.format("Status is: %s", result.fileStatus));\n        GlasswallResult processResult = Glasswall.GWFileProcessStatus();\n        System.out.println(String.format("Process status: %d", processResult.processStatus));\n        System.out.println(String.format("Process message: %s", Glasswall.GWFileProcessMsg()));\n\n        if (result.fileStatus != 1)\n        {\n            System.out.println(String.format("Glasswall error: %s", Glasswall.GWFileErrorMsg()));\n        }\n    }\n\n    static void writeAllBytes(Path filepath, byte[] data)\n    {\n        try\n        {\n            if (data == null)\n            {\n                if (Files.notExists(filepath))\n                {\n                    Files.createFile(filepath);\n                }\n            }\n            else\n            {\n                Files.write(filepath, data, StandardOpenOption.CREATE);\n            }\n        }\n        catch (IOException ex)\n        {\n            System.out.println(String.format("Exception occurred: %s", ex.getMessage()));\n        }\n    }\n\n    static void writeAllText(Path filepath, String data)\n    {\n        try {\n            if (data == null) {\n                if (Files.notExists(filepath)) {\n                    Files.createFile(filepath);\n                }\n            } else {\n                try (PrintWriter writer = new PrintWriter(filepath.toAbsolutePath().toString())) {\n                    writer.write(data);\n                }\n            }\n        }\n        catch (IOException ex)\n        {\n            System.out.println(String.format("Exception occurred: %s", ex.getMessage()));\n        }\n    }\n}\n\n\n')),Object(l.b)("h2",{id:"25-issues-to-consider"},"2.5 Issues to consider"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Very large files can potentially cause OutOfMemoryError to occur when running in File to Memory mode. This is due to certain results being returned as byte arrays. Potential remedy is to process files in File to File mode."),Object(l.b)("li",{parentName:"ul"},"In very exceptional circumstances certain PDF documents may cause a crash to occur. Increasing the stack size of the Java application fixes this issue.")))}p.isMDXComponent=!0},276:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||l;return a?r.a.createElement(h,i(i({ref:t},c),{},{components:a})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);