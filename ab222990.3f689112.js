(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return c}));var i=n(2),l=n(6),s=(n(0),n(279)),o={title:"3.9 Using Qt in Glasswall",sidebar_label:"3.9 Using Qt in Glasswall"},r={unversionedId:"3-guides/3_9-using_qt_in_glasswall",id:"3-guides/3_9-using_qt_in_glasswall",isDocsHomePage:!1,title:"3.9 Using Qt in Glasswall",description:"Using QT",source:"@site/docs/3-guides/3_9-using_qt_in_glasswall.md",slug:"/3-guides/3_9-using_qt_in_glasswall",permalink:"/glasswall-sdk-site/docs/3-guides/3_9-using_qt_in_glasswall",version:"current",sidebar_label:"3.9 Using Qt in Glasswall",sidebar:"someSidebar",previous:{title:"3.8 Core 2 Cameras - Creating and Development Rules",permalink:"/glasswall-sdk-site/docs/3-guides/3_8-core2-cameras-creating_and_developing_rules"},next:{title:"3.10 Learn YAML in Y Minutes",permalink:"/glasswall-sdk-site/docs/3-guides/3_10-learn_yaml_in_y-minutes"}},a=[{value:"Installation",id:"installation",children:[{value:"Installing QT Framework and Dev Environment (on Windows)",id:"installing-qt-framework-and-dev-environment-on-windows",children:[]},{value:"Installing Windows Debug Support",id:"installing-windows-debug-support",children:[]},{value:"Installing Visual Studio Support",id:"installing-visual-studio-support",children:[]}]},{value:"Setup",id:"setup",children:[{value:"Configure Debug",id:"configure-debug",children:[]}]},{value:"z:QT FrameworkOffline InstallersWindows Hostqt-opensource-windows-x86-pdb-files-desktop-5.9.6.7z",id:"zqt-frameworkoffline-installerswindows-hostqt-opensource-windows-x86-pdb-files-desktop-5967z",children:[]}],u={rightToc:a};function c(e){var t=e.components,o=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"using-qt"},"Using QT"),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("h3",{id:"installing-qt-framework-and-dev-environment-on-windows"},"Installing QT Framework and Dev Environment (on Windows)"),Object(s.b)("p",null,"Run the ","'","\\","STORAGE-SERVER\\Development Drive\\Development Tools\\QT Framework\\Offline Installers\\Windows Host\\qt-opensource-windows-x86-5.9.6.exe","'"," offline installer."),Object(s.b)("p",null,"Skip this screen (1) .."),Object(s.b)("p",null,Object(s.b)("img",{src:n(452).default})),Object(s.b)("p",null,"And this one (2) and the following welcome screen (3),"),Object(s.b)("p",null,Object(s.b)("img",{src:n(453).default})),Object(s.b)("p",null,"Suggest you leave the default installation path and the file-association ","'","ticked","'"," on this screen (4)"),Object(s.b)("p",null,Object(s.b)("img",{src:n(454).default})),Object(s.b)("p",null,"On screen (5), QT Creator with CDB Debugger is already selected."),Object(s.b)("p",null,"Choose MSVC 2017 64 bit as the platform target."),Object(s.b)("p",null,Object(s.b)("img",{src:n(455).default})),Object(s.b)("p",null,"Accept license agreement on next screen (6)"),Object(s.b)("p",null,"Accept Start Menu Shortcuts setting on next screen (7)"),Object(s.b)("p",null,"Then click ","'","Install","'"," on next screen (8)"),Object(s.b)("p",null,"Installation will take some time (300mb+ install)"),Object(s.b)("h3",{id:"installing-windows-debug-support"},"Installing Windows Debug Support"),Object(s.b)("p",null,"This install of QT Creator is primarily built to use CDB debug (WinDbg) to debug on Windows."),Object(s.b)("p",null,"WinDbg comes as part of Windows Driver Kit"),Object(s.b)("p",null,"Install it by running \u2026."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/%5C%5CSTORAGE-SERVER%5CDevelopment%20Drive%5CDevelopment%20Tools%5CWindowsDriverKit%5Cwdksetup.exe"}),"\\","STORAGE-SERVER\\Development Drive\\Development Tools\\WindowsDriverKit\\wdksetup.exe")),Object(s.b)("p",null,"Select c:\\Program Files (x86)\\Windows Kits\\ as the install location ion screen (1)"),Object(s.b)("p",null,"On screen (2) switch off Kits Privacy"),Object(s.b)("p",null,"Skip screen (3) that just reminds that the kit has no build or compile tools"),Object(s.b)("p",null,"On screen (4) installation occurs \u2013 fairly quick."),Object(s.b)("p",null,"And your done \uf04a"),Object(s.b)("h3",{id:"installing-visual-studio-support"},"Installing Visual Studio Support"),Object(s.b)("p",null,"You can get support for bulding Qt Pro projects in Visual Studio"),Object(s.b)("p",null,"Goto z:\\QT Framework\\Visual Studio Add-In\\Visual Studio Add-in 2.2.1 for Qt5 MSVC 2017"),Object(s.b)("p",null,"Run ","'","qt-vsaddin-msvc2017-2.2.1","_","48f558a.vsix","'"),Object(s.b)("p",null,"It will install the Qt Support Tools into Visual Studio for MSVC 2017"),Object(s.b)("h2",{id:"setup"},"Setup"),Object(s.b)("h3",{id:"configure-debug"},"Configure Debug"),Object(s.b)("h4",{id:"hook-cdb-debug"},"Hook CDB debug"),Object(s.b)("p",null,"QT Creator may not spot the debugger path immediately"),Object(s.b)("p",null,"Goto Tools\\Options\\Build","&","Run\\Kits and check you have this setup"),Object(s.b)("p",null,Object(s.b)("img",{src:n(456).default})),Object(s.b)("p",null,"Goto Tools\\Options\\Build","&","Run\\Debuggers and check you have this setup"),Object(s.b)("p",null,Object(s.b)("img",{src:n(457).default})),Object(s.b)("h4",{id:"symbols-full-symbol-support-tbd"},"Symbols (full symbol support TBD)"),Object(s.b)("h2",{id:""}),Object(s.b)("h2",{id:"zqt-frameworkoffline-installerswindows-hostqt-opensource-windows-x86-pdb-files-desktop-5967z"},"z:\\QT Framework\\Offline Installers\\Windows Host\\qt-opensource-windows-x86-pdb-files-desktop-5.9.6.7z"),Object(s.b)("p",null,"Contains the PDB files for the 5.9.6 version of Qt"),Object(s.b)("p",null,"These need to be copied to"),Object(s.b)("p",null,"c:\\Qt\\Qt5.9.6\\5.9.6\\msvc2017","_","64\\bin\\"),Object(s.b)("p",null,Object(s.b)("img",{src:n(458).default})),Object(s.b)("p",null,"Add the cache path as above"),Object(s.b)("p",null,"Suggestion been made that switching off Python Dumper can help debugging."),Object(s.b)("p",null,Object(s.b)("img",{src:n(459).default})),Object(s.b)("h1",{id:"debugging-in-visual-studio"},"Debugging in Visual Studio"),Object(s.b)("p",null,"When all else fails: Try debugging in Visual Studio"),Object(s.b)("p",null,"This is a workaround."),Object(s.b)("p",null,"After building in Qt"),Object(s.b)("p",null,"Copy QtCli in to Core Buildoutput"),Object(s.b)("p",null,"Open Visual Studio"),Object(s.b)("p",null,"Open File/Project and select QtCli"),Object(s.b)("p",null,"This will open a solution \u2013 goto the properties and copy the arguments for QtCLI from the Run window in QtCreator that you wish to run."),Object(s.b)("p",null,"Find file in QtCreator where you want the breakpoint and grab the full path to it and open that file in Visual Studio"),Object(s.b)("p",null,"Now you can place a breakpoint in the file window in VS and run in debug mode on VS"))}c.isMDXComponent=!0},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var i=n(0),l=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),c=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=c(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=c(n),p=i,g=b["".concat(o,".").concat(p)]||b[p]||d[p]||s;return n?l.a.createElement(g,r(r({ref:t},u),{},{components:n})):l.a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<s;u++)o[u]=n[u];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},452:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot1-c1dec40c38370580c3e2fab6e89d3a4f.png"},453:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot2-9c20a4e16387fa8cdee7044fed7928a1.png"},454:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot3-cd7e5d834d296893e32241d3ee51ec76.png"},455:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot4-8588095561c969433e1cd35394f7139b.png"},456:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot5-d3d54c4b5d5e8032b26834a10809e77f.png"},457:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot6-b7c5c62315bf8ba8d113aae1f393e3c2.png"},458:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot7-2366c05d3458ae02ce5b519ce5384f67.png"},459:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/qtscreenshot8-eeebad1faad9c8a05c26041088498140.png"}}]);