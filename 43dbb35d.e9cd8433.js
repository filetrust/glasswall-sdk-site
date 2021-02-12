(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return o}));var a=t(2),s=t(6),c=(t(0),t(278)),r={title:"2.1.3.4.4.2 Configuration Management XSD",sidebar_label:"2.1.3.4.4.2 Configuration Management XSD"},m={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd",isDocsHomePage:!1,title:"2.1.3.4.4.2 Configuration Management XSD",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_2-configuration_management_xsd",version:"current",sidebar_label:"2.1.3.4.4.2 Configuration Management XSD",sidebar:"someSidebar",previous:{title:"2.1.3.4.4.1 Content Management Policies",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_1-configManamentPolicies"},next:{title:"2.1.3.4.3 Automatic Corrections",permalink:"/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-internal_api/2_1_3_4_4-Configuration_Management/2_1_3_4_4_3-automatic_corrections"}},l=[],i={rightToc:l};function o(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'<?xml version="1.0" encoding="UTF-8"?>\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n\n    <xs:simpleType name ="watermarkType">\n        <xs:restriction base="xs:string">\n            <xs:maxLength value="20"/>\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="contentManagementFlag">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="sanitise"/>\n            <xs:enumeration value="allow"/>\n            <xs:enumeration value="disallow"/>\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:simpleType name="archiveContentManagementFlag">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="process"/>\n            <xs:enumeration value="discard"/>\n            <xs:enumeration value="no_action"/>\n        </xs:restriction>\n    </xs:simpleType>\n\n    <xs:element name="pdfConfig">\n        <xs:complexType>\n            <xs:all>\n                <xs:element name="watermark" type="watermarkType" minOccurs="0" maxOccurs="1" />\n                <xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="javascript" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="acroform" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="actions_all" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="value_outside_reasonable_limits" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="retain_exported_streams" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="wordConfig">\n        <xs:complexType>\n            <xs:all>\n                <xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="dynamic_data_exchange" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="pptConfig">\n        <xs:complexType>\n            <xs:all>\n                <xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="xlsConfig">\n        <xs:complexType>\n            <xs:all>\n                <xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="dynamic_data_exchange" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n                <xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name ="tiffConfig">\n        <xs:complexType>\n            <xs:all>\n                <xs:element name="geotiff" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n\n        <xs:element name="textSearchConfig">\n        <xs:complexType>\n            <xs:sequence>\n            <xs:element name="textList" minOccurs="0" maxOccurs="unbounded">\n                <xs:complexType>\n                <xs:sequence>\n                    <xs:element name="textItem" minOccurs="0" maxOccurs="unbounded">\n                    <xs:complexType>\n                        <xs:sequence>\n                        <xs:element name="text" type="xs:string" minOccurs="0" />\n                        <xs:element name="regex" type="xs:string" minOccurs="0" />\n                        <xs:element name="textSetting" nillable="true" minOccurs="0" maxOccurs="unbounded">\n                            <xs:complexType>\n                            <xs:simpleContent msdata:ColumnName="textSetting_Text" msdata:Ordinal="1">\n                                <xs:extension base="xs:string">\n                                <xs:attribute name="replacementChar" type="xs:string" />\n                                </xs:extension>\n                            </xs:simpleContent>\n                            </xs:complexType>\n                        </xs:element>\n                        </xs:sequence>\n                    </xs:complexType>\n                    </xs:element>\n                </xs:sequence>\n                </xs:complexType>\n            </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n        </xs:element>\n    \n    \n        <xs:element name="sysConfig">\n        <xs:complexType>\n            <xs:sequence>\n            \x3c!--interchange_type = [sisl|xml]  --\x3e\n            <xs:element name="interchange_type" type="xs:string" minOccurs="0" />\n            \x3c!--interchange_pretty = [true|false] ... makes output human readable --\x3e\n            <xs:element name="interchange_pretty" type="xs:string" minOccurs="0" />\n            \x3c!--run_mode = [editoronly|rebuildonly|rebuild_editor]--\x3e\n            <xs:element name="run_mode" type="xs:string" minOccurs="0" />\n            \x3c!--images_export_full = [true|false] ... when true expands images into sisl or xml --\x3e\n            <xs:element name="images_export_full" type="xs:string" minOccurs="0" />\n            </xs:sequence>\n        </xs:complexType>\n        </xs:element>\n    \n    \n    <xs:element name ="archiveConfig">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:any processContents="lax" type="archiveContentManagementFlag" maxOccurs="unbounded"/>\n            </xs:sequence>\n            <xs:attribute name="defaultCompression" form="unqualified" type="xs:string" />\n        </xs:complexType>\n    </xs:element>\n\n    <xs:element name="config">\n        <xs:complexType>\n            <xs:all>\n                <xs:element ref="pdfConfig" minOccurs="0" maxOccurs="1"/>\n                <xs:element ref="wordConfig" minOccurs="0" maxOccurs="1"/>\n                <xs:element ref="pptConfig" minOccurs="0" maxOccurs="1"/>\n                <xs:element ref="xlsConfig" minOccurs="0" maxOccurs="1"/>\n                <xs:element ref="tiffConfig" minOccurs="0" maxOccurs="1"/>\n                <xs:element ref="archiveConfig" minOccurs="0" maxOccurs="1"/>\n            </xs:all>\n        </xs:complexType>\n    </xs:element>\n</xs:schema>\n')))}o.isMDXComponent=!0},278:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return g}));var a=t(0),s=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),o=function(e){var n=s.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},x=function(e){var n=o(e.components);return s.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},p=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),x=o(t),p=a,g=x["".concat(r,".").concat(p)]||x[p]||u[p]||c;return t?s.a.createElement(g,m(m({ref:n},i),{},{components:t})):s.a.createElement(g,m({ref:n},i))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=p;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,r[1]=m;for(var i=2;i<c;i++)r[i]=t[i];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);