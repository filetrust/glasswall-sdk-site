(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),s=(n(0),n(278)),r={title:"4.3 Manual Testing",sidebar_label:"4.3 Manual Testing"},o={unversionedId:"4-testing/4_3-manual_testing",id:"4-testing/4_3-manual_testing",isDocsHomePage:!1,title:"4.3 Manual Testing",description:"Introduction",source:"@site/docs/4-testing/4_3-manual_testing.md",slug:"/4-testing/4_3-manual_testing",permalink:"/docs/4-testing/4_3-manual_testing",version:"current",sidebar_label:"4.3 Manual Testing",sidebar:"someSidebar",previous:{title:"4.2.2.2 XSD Test Results",permalink:"/docs/4-testing/4_2-automated testing/4_2_2-analysistesting/4_2_2_2-TestResultsXSD"},next:{title:"4.4 Testing Guidelines",permalink:"/docs/4-testing/4_4-testing_guidelines"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Mass data sets",id:"mass-data-sets",children:[]},{value:"Versioned data sets",id:"versioned-data-sets",children:[]},{value:"Content and considerations",id:"content-and-considerations",children:[]},{value:"Basic functionality testing",id:"basic-functionality-testing",children:[]},{value:"Content testing",id:"content-testing",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"The first thing when considering new cameras is the scope of the camera and the variations within that file type, for instance the XML camera which has 3 major file types and a complete suite of Content Management requires a lot more research and thorough testing than The RTF camera which only scans one type of file and has minimal content to manage."),Object(s.b)("p",null,"This document is to act as a guide only as for every type of file a slightly unique approach will be required."),Object(s.b)("h1",{id:"data"},"Data"),Object(s.b)("h2",{id:"mass-data-sets"},"Mass data sets"),Object(s.b)("p",null,"When testing a new Camera having a comprehensive data set is essential with as much real world data as possible, for an alpha version of a camera a few hundred will be sufficient, for a beta closer to 100,000 files is roughly what is required and for a fully supported and implemented camera then one million files should be the minimum that you should be aiming for.\nMost of the mass data should be downloaded from the internet, it must be either royalty free or covered by the creative commons licence, to find the required quantities a certain amount of rummaging on line will be required and web crawlers will prove invaluable. "),Object(s.b)("h2",{id:"versioned-data-sets"},"Versioned data sets"),Object(s.b)("p",null,"When creating data sets it is essential to ensure that as much structural coverage and complexity as possible is covered, different versions of the software that produces them need to be accounted for as does different versions of the file type, for instance Win-RAR has 5 different versions so care must be taken to ensure that all 5 versions are represented in the data sets."),Object(s.b)("p",null,"For proprietary file types different versions of the software that create the data may also need to be accounted for."),Object(s.b)("h2",{id:"content-and-considerations"},"Content and considerations"),Object(s.b)("p",null,"The final things to consider when generating the new data sets is the various types of content available for the files, this includes things like embedded data, metadata or anything specific to that file type like lyrics in an MP4 file."),Object(s.b)("p",null,"To ensure that all content is accounted for read the file specifications."),Object(s.b)("p",null,"Considerations that must always be accounted for are Large files, anything greater than 200mb is considered to be a large file but ideally incrementally sized files up to 2gb would be best."),Object(s.b)("p",null,"Lastly and most importantly negative data must be created, to do this use the DVLs to find areas in the file that checks are made and make changes there to try to force the issues.\nIf a rule exists in the DVL stating that a specific part of the file should be 001ab32c then modifying this to 00000000 should force a validation issue."),Object(s.b)("h1",{id:"tests"},"Tests"),Object(s.b)("h2",{id:"basic-functionality-testing"},"Basic functionality testing"),Object(s.b)("p",null,"Basic functionality testing is the testing required on a MVP or basic camera, this is to ensure that the files are being deconstructed and reconstructed correctly and that nothing is being missed or corrupted."),Object(s.b)("p",null,"For this the first type of tests is conducting basic analysis and protect runs across a cross section of conforming data which is under 200 mb in size.\nBasic checks need to be conducted to ensure that the regenerated files still open and are usable, for instance has a PDF lost content? does an MP3 play still? is the quality noticeably different? Has the mp4 lost video? These are the basic sorts of questions that should be asked and answered in these tests.\nAlso basic checks need to be made to ensure that the XML report is correctly formatted, the easiest way to do this is by validating it against the XSD."),Object(s.b)("p",null,"Larger files have been proven to cause issues in the past and as such as part of basic functionality testing it is important to run a number of files between 200mb and 2gb in both analysis and protect modes to make sure that they behave in the same way as their smaller counterparts."),Object(s.b)("p",null,"Non conforming files are the final things that are required to be tested at MVP stage of testing, Non-conforming files must fail validation in both analysis and protect modes and the failure messages must be related to the actual defect.\nA combination of downloaded and manually corrupted files should be used for this but no files containing malware are to be used, with manually corrupted files the error message must match the manual corruption."),Object(s.b)("p",null,"Every time a new camera is added it is essential to ensure it has been added to the GetFileTypeFromFile API and that the associated report is generated, the same is true for making sure that specific issues for the new file type have been added by running tests on the Get Issue from ID API."),Object(s.b)("h2",{id:"content-testing"},"Content testing"),Object(s.b)("p",null,"Later in the lifecycle of a camera Content Management will be added, as this happens additional data must be added to test that.\nFiles containing every conceivable and supported variation of that content is to be produced remembering things such as Unicode characters and security vulnerabilities which must be accounted for.\nWhen testing content then all 3 modes for Content management must be tested in every processing mode."),Object(s.b)("p",null,"Allowed content must be left intact and unchanged without being mentioned in the analysis report.\nSanitised content must be moved in its entirety while leaving the rest of the file in a usable condition and without impacting any other content, it must be referenced directly as a sanitisation item in the analysis report.\nDisallowed content must cause the file to fail validation with an error that relates to the disallowed content."))}d.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,b=u["".concat(r,".").concat(f)]||u[f]||h[f]||s;return n?i.a.createElement(b,o(o({ref:t},l),{},{components:n})):i.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);