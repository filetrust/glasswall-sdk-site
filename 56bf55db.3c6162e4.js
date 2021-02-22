(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return _}));var n=r(2),a=r(6),o=(r(0),r(284)),i={title:"2.2.6.1.4.2 Word Search Config",sidebar_label:"2.2.6.1.4.2 Word Search Config"},s={unversionedId:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_2-wordsearchConfig",id:"2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_2-wordsearchConfig",isDocsHomePage:!1,title:"2.2.6.1.4.2 Word Search Config",description:"`xml",source:"@site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_2-wordsearchConfig.md",slug:"/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_2-wordsearchConfig",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_2-wordsearchConfig",version:"current",sidebar_label:"2.2.6.1.4.2 Word Search Config",sidebar:"someSidebar",previous:{title:"2.2.6.1.4.1 Word Search",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_1-wordsearch"},next:{title:"2.2.6.1.4.3 XSD",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_2-glasswall_editor/2_2_6-sdk/2_2_6_1-api/2_2_6_1_4-wordsearch/2_2_6_1_4_3-wordsearchXSD"}},l=[],c={rightToc:l};function _(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<config>\n    <wordConfig>\n        <embedded_files>sanitise</embedded_files>\n        <internal_hyperlinks>sanitise</internal_hyperlinks>\n        <external_hyperlinks>sanitise</external_hyperlinks>\n        <macros>sanitise</macros>\n        <metadata>sanitise</metadata>\n        <review_comments>allow</review_comments>\n    </wordConfig>\n    <sysConfig>\n        <interchange_type>xml</interchange_type>\n    </sysConfig>\n    <textSearchConfig libVersion="core2">\n        <textList>\n            <textItem>\n                <text>cats</text>\n                <textSetting replacementChar="*">allow</textSetting>\n            </textItem>\n            <textItem>\n                <regex>l\\S+e</regex>\n                <textSetting replacementChar="!">redact</textSetting>\n            </textItem>\n            <textItem>\n                <regex>hello</regex>\n                <textSetting replacementChar="!">disallow</textSetting>\n            </textItem>\n        </textList>\n    </textSearchConfig>\n</config>\n')))}_.isMDXComponent=!0},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),_=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=_(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=_(r),g=n,f=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);