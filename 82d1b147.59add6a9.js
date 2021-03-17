(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{170:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(2),i=n(6),a=(n(0),n(276)),l={title:"2.1.6.2 Versioning",sidebar_label:"2.1.6.2 Versioning"},o={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning",isDocsHomePage:!1,title:"2.1.6.2 Versioning",description:"Overview",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning",version:"current",sidebar_label:"2.1.6.2 Versioning",sidebar:"someSidebar",previous:{title:"2.1.6.1 Building Project",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_1-building_project"},next:{title:"2.1.7.1.1 API Overview",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview"}},s=[{value:"Overview",id:"overview",children:[]}],c={rightToc:s};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The version number consists of a major and minor number, for example\n",Object(a.b)("inlineCode",{parentName:"p"},"<major>.<minor>"),"\nor",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"1.912")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"1")," is the Major revision (incompatible API changes or features, conceptual change etc.)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"912")," is the Minor revision (new but backward-compatible features, bug fixes)")),Object(a.b)("p",null,"Versioning is applied automatically in the ADO (Azure DevOps) build pipeline. Every code commit to master will increment\nthe minor version number. The major version number is only updated (manually) when a breaking change is introduced."))}u.isMDXComponent=!0},276:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var r=i.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return i.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,o(o({ref:r},c),{},{components:n})):i.a.createElement(m,o({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);