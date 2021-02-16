(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),l=t(6),i=(t(0),t(279)),r={title:"2.1.4.1 Rebuild Licence",sidebar_label:"2.1.4.1 Rebuild Licence"},o={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_4-licencing/2_1_4_1-GlasswallDLLLicence",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_4-licencing/2_1_4_1-GlasswallDLLLicence",isDocsHomePage:!1,title:"2.1.4.1 Rebuild Licence",description:"There is an ability to deploy our Glasswall DLL so that there is a 90 day validity from the date of release after which it ceases processing of documents and indicates that there is a licensing issue.",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_4-licencing/2_1_4_1-GlasswallDLLLicence.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_4-licencing/2_1_4_1-GlasswallDLLLicence",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_4-licencing/2_1_4_1-GlasswallDLLLicence",version:"current",sidebar_label:"2.1.4.1 Rebuild Licence",sidebar:"someSidebar",previous:{title:"2.1.3.8 Glasswall Dynamic Configuration",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_8-glasswall_dynamic_configuration"},next:{title:"2.1.5 Dependencies",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_5-dependencies"}},c=[],s={rightToc:c};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There is an ability to deploy our Glasswall DLL so that there is a 90 day validity from the date of release after which it ceases processing of documents and indicates that there is a licensing issue."),Object(i.b)("h1",{id:"build--release-management"},"Build & Release Management"),Object(i.b)("p",null,"By default, each of our Glasswall DLL build definitions will build a Glasswall DLL that does not have any licensing restrictions.  It is envisaged that the following mechanisms are used to deploy a build with licence checking enabled."),Object(i.b)("p",null,"Taking a Windows 64Bit DLL build with licence checking enabled as what is required as an example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The licence code will need to be made \u2018live\u2019 once (if not already done so)."),Object(i.b)("li",{parentName:"ul"},"TFS build definition ",Object(i.b)("inlineCode",{parentName:"li"},"0026_QAReleaseWin_x64")," will need to be cloned to ",Object(i.b)("inlineCode",{parentName:"li"},"nnnn_QAReleaseWin_x64")),Object(i.b)("li",{parentName:"ul"},"The licence checking will need to be enabled via an additional TFS build parameter: ",Object(i.b)("inlineCode",{parentName:"li"},"/p:GWLicence=GW_LICENCE_ENABLED")),Object(i.b)("li",{parentName:"ul"},"The TFS build denomination parameter value ",Object(i.b)("inlineCode",{parentName:"li"},"/p:GWBuldDenomination=26")," must be updated to reflect the newly cloned build definition.")),Object(i.b)("h1",{id:"known-loopholes"},"Known Loopholes"),Object(i.b)("p",null,"The following are known loopholes to workaround the licensed DLL:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The system date can be altered such that the DLL is always within the 90 day valid period."),Object(i.b)("li",{parentName:"ul"},"The DLL can be loaded into a hex editor and the Julian date altered.")),Object(i.b)("h1",{id:"notes-for-qa-testing"},"Notes for QA Testing"),Object(i.b)("p",null,"There is a facility to override the system configuration date to aid testing.  This is achieved by creating an entry in the the XML system configuration file read in by our GWFileConfigXML API.  The value of the date must be expressed in Julian date format ",Object(i.b)("inlineCode",{parentName:"p"},"yyddd"),".  For example: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<sysConfig>\n<test_julian_date>15132</test_julian_date>\n</sysConfig>\n")))}d.isMDXComponent=!0},279:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),l=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),d=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},p=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,f=u["".concat(r,".").concat(p)]||u[p]||b[p]||i;return t?l.a.createElement(f,o(o({ref:n},s),{},{components:t})):l.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);