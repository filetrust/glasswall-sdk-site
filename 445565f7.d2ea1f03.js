(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var s=t(2),r=t(6),a=(t(0),t(276)),i={title:"7.9.3 Glasswall Regression Tester",sidebar_label:"7.9.3 Glasswall Regression Tester"},o={unversionedId:"7-tools/7_9-testing/7_9_3-glasswallregressiontester",id:"7-tools/7_9-testing/7_9_3-glasswallregressiontester",isDocsHomePage:!1,title:"7.9.3 Glasswall Regression Tester",description:"`",source:"@site/docs/7-tools/7_9-testing/7_9_3-glasswallregressiontester.md",slug:"/7-tools/7_9-testing/7_9_3-glasswallregressiontester",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_3-glasswallregressiontester",version:"current",sidebar_label:"7.9.3 Glasswall Regression Tester",sidebar:"someSidebar",previous:{title:"7.9.2 Rebuild Command Line Tool",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_2-GlasswallCommandLineTestTool"},next:{title:"7.9.4 GWDemonstrator Test Tool",permalink:"/glasswall-sdk-site/docs/7-tools/7_9-testing/7_9_4-gwdemonstrator_test_tool"}},l=[],c={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-<?xml",metastring:'version="1.0" encoding="UTF-8"?>',version:'"1.0"',encoding:'"UTF-8"?>'}),'<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">\n \x3c!-- XML Schema Generated from XML Document on Thu Jun 01 2017 10:37:22 GMT+0100 (GMT Daylight Time) --\x3e\n <xs:element name="TestCases">\n     <xs:complexType>\n       <xs:sequence>\n           <xs:element name="TestCase" maxOccurs="unbounded">\n             <xs:complexType>\n                 <xs:sequence>\n                   <xs:element name="Tests" minOccurs="0">\n                       <xs:complexType>\n                         <xs:sequence>\n                             <xs:element name="Test" minOccurs = "0" maxOccurs="unbounded">\n                               <xs:complexType>\n                                   <xs:sequence>\n                                     <xs:element   name="FailedFiles" minOccurs="0" maxOccurs="unbounded">\n                                       <xs:complexType>\n                                         <xs:sequence>\n                                            <xs:element name="FailedFile" minOccurs="0" maxOccurs="unbounded">\n                                                <xs:complexType>\n                                                    <xs:simpleContent>\n                                                    <xs:extension base="xs:string">\n                                                        <xs:attribute name="FailureReason" type="xs:string" />\n                                                    </xs:extension>\n                                                    </xs:simpleContent>\n                                                </xs:complexType>\n                                            </xs:element>\n                                        </xs:sequence>\n                                       </xs:complexType>\n                                     </xs:element>\n                                   </xs:sequence>\n                                   <xs:attribute name="Description" type="xs:string" use="required"></xs:attribute>\n                                   <xs:attribute name="Name" type="xs:string"></xs:attribute>\n                                   <xs:attribute name="Result" use="required">\n                                    <xs:simpleType>\n                                      <xs:restriction base="xs:string">\n                                        <xs:enumeration value="Success"/>\n                                        <xs:enumeration value="Fail"/>\n                                      </xs:restriction>\n                                    </xs:simpleType>\n                                   </xs:attribute>\n                               </xs:complexType>\n                             </xs:element>\n                         </xs:sequence>\n                       </xs:complexType>\n                   </xs:element>\n                 </xs:sequence>\n                 <xs:attribute name="Description" type="xs:string" use="required"></xs:attribute>\n                 <xs:attribute name="Name" type="xs:string"></xs:attribute>\n                 <xs:attribute name="ID" type="xs:int"></xs:attribute>\n                 <xs:attribute  name="Result" use="required">\n                  <xs:simpleType>\n                    <xs:restriction   base="xs:string">\n                      <xs:enumeration value="Success"/>\n                      <xs:enumeration value="Fail"/>\n                    </xs:restriction>\n                  </xs:simpleType>\n                 </xs:attribute>\n             </xs:complexType>\n           </xs:element>\n       </xs:sequence>\n       <xs:attribute name="PathToLibrary" type="xs:string"></xs:attribute>\n     </xs:complexType>\n </xs:element>\n</xs:schema>\n\n')))}u.isMDXComponent=!0},276:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var s=t(0),r=t.n(s);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},x={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=s,b=m["".concat(i,".").concat(p)]||m[p]||x[p]||a;return t?r.a.createElement(b,o(o({ref:n},c),{},{components:t})):r.a.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);