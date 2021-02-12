(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{209:function(e,n,s){"use strict";s.r(n),s.d(n,"frontMatter",(function(){return a})),s.d(n,"metadata",(function(){return m})),s.d(n,"rightToc",(function(){return i})),s.d(n,"default",(function(){return l}));var t=s(2),r=s(6),c=(s(0),s(278)),a={title:"2.3.6.1 Analysis",sidebar_label:"2.3.6.1 Analysis"},m={unversionedId:"2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_1-analysis",id:"2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_1-analysis",isDocsHomePage:!1,title:"2.3.6.1 Analysis",description:"`",source:"@site/docs/2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_1-analysis.md",slug:"/2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_1-analysis",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_1-analysis",version:"current",sidebar_label:"2.3.6.1 Analysis",sidebar:"someSidebar",previous:{title:"2.3.5.2 Versioning",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-glasswall_archive_manager/2_3_5-build/2_3_5_2-versioning"},next:{title:"2.3.6.2 Expected Results",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_3-glasswall_archive_manager/2_3_6-sdk_api/2_3_6_2-expected_results"}},i=[],x={rightToc:i};function l(e){var n=e.components,s=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},x,s,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'<?xml version="1.0" encoding="UTF-8"?>\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n\n    <xs:element name="ContentManagement">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="config"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="config">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="pdfConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="wordConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="pptConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="xlsConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="archiveConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="pdfConfig">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="acroform"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="actions_all"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="internal_hyperlinks"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="external_hyperlinks"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="embedded_files"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="javascript"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="metadata"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n    \n     <xs:element name="wordConfig">\n         <xs:complexType>\n               <xs:sequence>\n                    <xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>\n               </xs:sequence>\n         </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="pptConfig">\n         <xs:complexType>\n               <xs:sequence>\n                    <xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>\n               </xs:sequence>\n         </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="xlsConfig">\n         <xs:complexType>\n               <xs:sequence>\n                    <xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>\n                    <xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>\n               </xs:sequence>\n         </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="archiveConfig">\n         <xs:complexType>\n               <xs:sequence>\n                     <xs:any type="xs:string" maxOccurs="unbounded"/>\n               </xs:sequence>\n         </xs:complexType>\n    </xs:element>\n    \n\n    <xs:element name="ArchiveStatistics">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="TotalSizeInBytes"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="ArchiveType" type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="Compression" type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="IssueItem">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="ErrorDescription"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="IssueID" type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="ContentItem">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="FileName"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="ProcessResult" type="xs:string" minOccurs="1" maxOccurs="1"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n    \n    <xs:element name="ContentGroup">\n        <xs:complexType>\n          <xs:attribute name="Name" type="xs:string"/>\n            <xs:sequence>\n                <xs:element name="ContentManagement"  type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="ArchiveStatistics" type="xs:string" minOccurs="1" maxOccurs="1"/>\n                <xs:element name="ContentGroup" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>\n                <xs:element name="ContentItem" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n    \n    \n</xs:schema>\n')))}l.isMDXComponent=!0},278:function(e,n,s){"use strict";s.d(n,"a",(function(){return u})),s.d(n,"b",(function(){return y}));var t=s(0),r=s.n(t);function c(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function m(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){c(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)s=c[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)s=c[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var x=r.a.createContext({}),l=function(e){var n=r.a.useContext(x),s=n;return e&&(s="function"==typeof e?e(n):m(m({},n),e)),s},u=function(e){var n=l(e.components);return r.a.createElement(x.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},o=r.a.forwardRef((function(e,n){var s=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,x=i(e,["components","mdxType","originalType","parentName"]),u=l(s),o=t,y=u["".concat(a,".").concat(o)]||u[o]||p[o]||c;return s?r.a.createElement(y,m(m({ref:n},x),{},{components:s})):r.a.createElement(y,m({ref:n},x))}));function y(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=s.length,a=new Array(c);a[0]=o;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:t,a[1]=m;for(var x=2;x<c;x++)a[x]=s[x];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,s)}o.displayName="MDXCreateElement"}}]);