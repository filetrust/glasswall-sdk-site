(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(284)),i={title:"2.3.1.2 BDDL Soft Links",sidebar_label:"2.3.1.2 BDDL Soft Links"},l={unversionedId:"2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_2-bddl_softlinks",id:"2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_2-bddl_softlinks",isDocsHomePage:!1,title:"2.3.1.2 BDDL Soft Links",description:"HOW TO CREATE SOFT LINK FOR OFFICE BDDL INCLUDE FILES",source:"@site/docs/2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_2-bddl_softlinks.md",slug:"/2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_2-bddl_softlinks",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_2-bddl_softlinks",version:"current",sidebar_label:"2.3.1.2 BDDL Soft Links",sidebar:"someSidebar",previous:{title:"2.3.1.1 Binary Data Definition Language (BDDL)",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-common/2_3_1-bddl/2_3_1_1-bddl"},next:{title:"2.3.2 Data Validation Language (DVL)",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-common/2_3_2-dvl"}},c=[{value:"HOW TO CREATE SOFT LINK FOR OFFICE BDDL INCLUDE FILES",id:"how-to-create-soft-link-for-office-bddl-include-files",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-create-soft-link-for-office-bddl-include-files"},"HOW TO CREATE SOFT LINK FOR OFFICE BDDL INCLUDE FILES"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ensure you have the latest commit of data.definitions.and.rules.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open an MS-DOS command shell with Administrator privileges:"),Object(o.b)("p",{parentName:"li"},"2.1  Press Windows+R\n2.2  Type cmd\n2.3  Press Ctrl+Shift+Enter\n2.3  Click 'Yes' in response to the question: \"Do you want to allow\nthis app to make changes to your device?\".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the command prompt window, change directory to the Miraplacid\n'includes' directory:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"CD C:\\ProgramData\\Miraplacid\\BinaryDOM\\Includes\\\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a soft link called 'office_bddl' to the BDDL directory in\nyour Git workspace:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"MKLINK /D office_bddl c:\\<Your Git Workspace path>\\data.definitions.and.rules\\Camera_Definitions\\MSOffice\\bddl\\\n")),Object(o.b)("p",{parentName:"li"},"You will see the following, if successful:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"symbolic link created ...\n")),Object(o.b)("p",{parentName:"li"},"If you see "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Cannot create a file when that file already exists.\n")),Object(o.b)("p",{parentName:"li"},"run"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"RMDIR office_bddl\n")),Object(o.b)("p",{parentName:"li"},"then run the MKLINK command again as above.\n")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Close down the Administrator command shell window.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In your BDDL files you can now do this:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'include "office_bddl/sttb.bdd"\n')),Object(o.b)("p",{parentName:"li"},"to include sttb.bdd, and, of course, specify other library files\nthat are available."))),Object(o.b)("p",null,"AUTHOR: Martin O'Brien\nCOPYRIGHT (c) 2021 GLASSWALL SOLUTIONS LIMITED"))}b.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);