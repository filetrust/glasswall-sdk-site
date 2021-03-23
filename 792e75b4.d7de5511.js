(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var i=t(2),r=t(6),l=(t(0),t(280)),a={title:"3.11.4 Clone, Rebuild and Debug Rebuild in Windows",sidebar_label:"3.11.4 Clone, Rebuild and Debug Rebuild in Windows"},b={unversionedId:"3-guides/3_11-clone_build_debug_engines/3_11_4-rebuild_windows",id:"3-guides/3_11-clone_build_debug_engines/3_11_4-rebuild_windows",isDocsHomePage:!1,title:"3.11.4 Clone, Rebuild and Debug Rebuild in Windows",description:"`",source:"@site/docs/3-guides/3_11-clone_build_debug_engines/3_11_4-rebuild_windows.md",slug:"/3-guides/3_11-clone_build_debug_engines/3_11_4-rebuild_windows",permalink:"/glasswall-sdk-site/docs/3-guides/3_11-clone_build_debug_engines/3_11_4-rebuild_windows",version:"current",sidebar_label:"3.11.4 Clone, Rebuild and Debug Rebuild in Windows",sidebar:"someSidebar",previous:{title:"3.11.3 Clone, Rebuild and Debug Rebuild in Linux",permalink:"/glasswall-sdk-site/docs/3-guides/3_11-clone_build_debug_engines/3_11_3-rebuild_linux"},next:{title:"4.1 Core Test Strategy",permalink:"/glasswall-sdk-site/docs/4-testing/4_1-core_test_strategy"}},o=[{value:"0. Introduction",id:"0-introduction",children:[]},{value:"1. Fetching the Code Base",id:"1-fetching-the-code-base",children:[]},{value:"2. Building Rebuild",id:"2-building-rebuild",children:[]},{value:"3. Debugging Rebuild",id:"3-debugging-rebuild",children:[{value:"3.1 Setting Visual Studio Debugging Properties",id:"31-setting-visual-studio-debugging-properties",children:[]}]}],c={rightToc:o};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"------------------------------------------------------------------------\nFILE NAME: rebuild_windows.md\nDATE: 2021-03-03 09:21 [+0000]\nAUTHOR: Martin O'Brien\nCOPYRIGHT 2021 GLASSWALL SOLUTIONS LIMITED\n------------------------------------------------------------------------\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#windows-rebuild"}),"Windows Rebuild"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#0-introduction"}),"0. Introduction")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#1-fetching-the-code-base"}),"1. Fetching the Code Base")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#2-building-rebuild"}),"2. Building Rebuild")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#3-debugging-rebuild"}),"3. Debugging Rebuild"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"#31-setting-visual-studio-debugging-properties"}),"3.1 Setting Visual Studio Debugging Properties"))))))),Object(l.b)("h1",{id:"windows-rebuild"},"Windows Rebuild"),Object(l.b)("h2",{id:"0-introduction"},"0. Introduction"),Object(l.b)("p",null,"This guide explaines how to clone, build and debug Rebuild on a Windows platform."),Object(l.b)("h2",{id:"1-fetching-the-code-base"},"1. Fetching the Code Base"),Object(l.b)("p",null,"Fetch the code base from Azure DevOps by typing "),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"$ git clone https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.rebuild\n")),Object(l.b)("h2",{id:"2-building-rebuild"},"2. Building Rebuild"),Object(l.b)("p",null,"To build Rebuild, open ",Object(l.b)("em",{parentName:"p"},"Visual Studio")," and open the solution ",Object(l.b)("inlineCode",{parentName:"p"},"src/glasswall.classic.sln"),"."),Object(l.b)("p",null,"Change the ",Object(l.b)("strong",{parentName:"p"},"Solution Platform")," from Win32 to x64. You can leave the ",Object(l.b)("strong",{parentName:"p"},"Solution Configuration")," at ",Object(l.b)("em",{parentName:"p"},"Debug")," for a debugging session."),Object(l.b)("p",null,"Open ",Object(l.b)("strong",{parentName:"p"},"Solution Explorer"),", secondary click project ",Object(l.b)("strong",{parentName:"p"},"glasswall.classic")," and press ",Object(l.b)("strong",{parentName:"p"},"Build"),"."),Object(l.b)("p",null,"The build can take up to 40 minutes to complete."),Object(l.b)("p",null,"When complete, aside from all the ",Object(l.b)("inlineCode",{parentName:"p"},".obj")," files produced, these files will also be present:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"c:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswall.classic.dll\nc:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswall.classic.exp\nc:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswall.classic.ilk\nc:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswall.classic.lib\nc:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswall.classic.pdb\nc:\\Git_Scratch\\sdk.rebuild\\src\\code\\binaries\\Debug\\x64\\glasswallCLI.exe\n\n")),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"glasswallCLI.exe")," is now in the ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\Debug\\x64")," directory. It has been copied there from ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\tools\\x64\\glasswallCLI.exe")),Object(l.b)("h2",{id:"3-debugging-rebuild"},"3. Debugging Rebuild"),Object(l.b)("p",null,"To debug Rebuild, you run it via ",Object(l.b)("inlineCode",{parentName:"p"},"glasswallCLI.exe"),", which is in directory ",Object(l.b)("inlineCode",{parentName:"p"},"code\\binaries\\tools\\x64")," and ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\Debug\\x64\\glasswallCLI.exe"),". The latter directory is ",Object(l.b)("inlineCode",{parentName:"p"},"$(TargetDir)")," and that will be set as the working directory for debugging (see below)."),Object(l.b)("h3",{id:"31-setting-visual-studio-debugging-properties"},"3.1 Setting Visual Studio Debugging Properties"),Object(l.b)("p",null,"In ",Object(l.b)("em",{parentName:"p"},"Visual Studio")," in ",Object(l.b)("strong",{parentName:"p"},"Solution Explorer"),", secondary click ",Object(l.b)("strong",{parentName:"p"},"glasswall.classic")," > ",Object(l.b)("strong",{parentName:"p"},"Properties"),". In ",Object(l.b)("strong",{parentName:"p"},"Configuration Properties")," select ",Object(l.b)("strong",{parentName:"p"},"Debugging"),"."),Object(l.b)("p",null,"The default options are:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"Command             $(TargetPath)\nCommand Arguments   \nWorking Directory   $(ProjectDir)\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$(TargetPath)")," will refer to ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\Debug\\x64\\glasswall.classic.dll"),Object(l.b)("br",null)," and",Object(l.b)("br",null),"\n",Object(l.b)("inlineCode",{parentName:"p"},"$(ProjectDir)")," will refer to ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\"),"."),Object(l.b)("p",null,"Change them to this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"Command             $(TargetDir)\\glasswallCLI.exe\nCommand Arguments   -config=config.ini -xmlconfig=config.xml\nWorking Directory   $(TargetDir)\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$(TargetDir)")," refers to ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\Debug\\x64\\")),Object(l.b)("p",null,"If you copy your config file and profiles file into  ",Object(l.b)("inlineCode",{parentName:"p"},"src\\code\\binaries\\Debug\\x64\\")," then you can leave the Command Arguments as shown above, otherwise you will have to provide a path to the files."),Object(l.b)("p",null,"--- End of file rebuild-windows.md ---"))}s.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,g=u["".concat(a,".").concat(p)]||u[p]||d[p]||l;return t?r.a.createElement(g,b(b({ref:n},c),{},{components:t})):r.a.createElement(g,b({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:i,a[1]=b;for(var c=2;c<l;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);