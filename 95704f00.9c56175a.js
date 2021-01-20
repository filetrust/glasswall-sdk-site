(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(221)),c={title:"2.1.3.4.2 BDDL Developers Hints and Tips",sidebar_label:"2.1.3.4.2 BDDL Developers Hints and Tips"},o={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_2-BDDL_Developers_hints_and_tips",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_2-BDDL_Developers_hints_and_tips",isDocsHomePage:!1,title:"2.1.3.4.2 BDDL Developers Hints and Tips",description:"1. Introduction",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_2-BDDL_Developers_hints_and_tips.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_2-BDDL_Developers_hints_and_tips",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_2-BDDL_Developers_hints_and_tips",version:"current",sidebar_label:"2.1.3.4.2 BDDL Developers Hints and Tips",sidebar:"someSidebar",previous:{title:"2.1.3.4.1 Binary Data Definition Language (BDDL)",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_1-bddl"},next:{title:"2.1.3.4.3 BDDL Developers Guidlines And Additions",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_4-Auto_Generated_cameras/2_1_3_4_3-BDDL_Developer_Guidelines_and_Additions"}},l=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Example Format",id:"2-example-format",children:[]},{value:"3. Developer Hints and Tips",id:"3-developer-hints-and-tips",children:[{value:"3.1 - Table Binaries and &quot;type * item&quot; construct",id:"31---table-binaries-and-type--item-construct",children:[]},{value:"3.2 About the usage of &#39;restrictions&#39; and &#39;AcceptRule&#39; on arrays",id:"32-about-the-usage-of-restrictions-and-acceptrule-on-arrays",children:[]},{value:"3.3 Using &#39;allowempty&#39;",id:"33-using-allowempty",children:[]},{value:"3.4 Bit Masking",id:"34-bit-masking",children:[]},{value:"3.5 Where you have a string defined in the BDD file",id:"35-where-you-have-a-string-defined-in-the-bdd-file",children:[]},{value:"3.6 About the usage of &#39;optional&#39;",id:"36-about-the-usage-of-optional",children:[]},{value:"3.7 Accessing a specific element of an array",id:"37-accessing-a-specific-element-of-an-array",children:[]},{value:"3.8 Accessing MS-ODRAW structures",id:"38-accessing-ms-odraw-structures",children:[]},{value:"3.9 Accessing MS-ODRAW structures: Further explanation",id:"39-accessing-ms-odraw-structures-further-explanation",children:[]}]},{value:"\xa9 2013 Glasswall Solutions Limited",id:"-2013-glasswall-solutions-limited",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("p",null,"This document is for use by the BDDL developers. If there are any\ntips and hints you want to pass on to your colleagues then enter\nthem in here."),Object(i.b)("h2",{id:"2-example-format"},"2. Example Format"),Object(i.b)("p",null,"Here's a suggestion for the format:"),Object(i.b)("p",null,"AUTHOR: Julie Noted",Object(i.b)("br",null),"\nDATE: 12 July 2013",Object(i.b)("br",null),"\nTIP: When writing a restriction and you want to test if a bit\nis set, DO NOT compare with 1, for example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"... optional restrictions { fABCD & 0x7 == 1 }   <-- WRONG\n")),Object(i.b)("p",null,"use this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"... optional restrictions { fABCD & 0x7 }\n")),Object(i.b)("h2",{id:"3-developer-hints-and-tips"},"3. Developer Hints and Tips"),Object(i.b)("h3",{id:"31---table-binaries-and-type--item-construct"},'3.1 - Table Binaries and "type ',"[*]",' item" construct'),Object(i.b)("p",null,"AUTHOR: Steven Warner"),Object(i.b)("p",null,"No Table section is self contained. I should have made this clearer from the outset. The binary files of the form ",Object(i.b)("inlineCode",{parentName:"p"},"fibRgFcLcb"),Object(i.b)("em",{parentName:"p"},"nnnn"),".",Object(i.b)("em",{parentName:"p"},"AAAA"),Object(i.b)("inlineCode",{parentName:"p"},".bin")," (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"fibRgFcLcb97.Clx.bin"),") are extracted from the ",Object(i.b)("inlineCode",{parentName:"p"},"1Table.bin")," file, which is a stream extracted from the CFB file in which the entire Office file is stored."),Object(i.b)("p",null,"These are extracted for Development Purposes only!"),Object(i.b)("p",null,"So the actual storage of the separate ",Object(i.b)("inlineCode",{parentName:"p"},"fibRgFcLcb"),Object(i.b)("em",{parentName:"p"},"nnnn"),".",Object(i.b)("em",{parentName:"p"},"AAAA"),Object(i.b)("inlineCode",{parentName:"p"},".bin"),"\nfiles is more like this."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1Table.bin")," contains:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"fibRgFcLcb97.Clx.bin\nfibRgFcLcb97.Cmds.bin\nfibRgFcLcb97.DggInfo.bin\nfibRgFcLcb97.Dop.bin\nfibRgFcLcb97.PlcfBteChpx.bin\nfibRgFcLcb97.PlcfBteLvc.bin\nfibRgFcLcb97.PlcfBtePapx.bin\nfibRgFcLcb97.PlcfFldMom.bin\nfibRgFcLcb97.PlcfFldTxbx.bin\nfibRgFcLcb97.PlcfSed.bin\nfibRgFcLcb97.PlcfSpl.bin\nfibRgFcLcb97.PlcfTxbxBkd.bin\nfibRgFcLcb97.PlcftxbxTxt.bin\nfibRgFcLcb97.PlcSpaMom.bin\nfibRgFcLcb97.PlfLfo.bin\nfibRgFcLcb97.PlfLst.bin\nfibRgFcLcb97.Stshf.bin\nfibRgFcLcb97.StshfOrig.bin\nfibRgFcLcb97.SttbfAssoc.bin\nfibRgFcLcb97.SttbfFfn.bin\nfibRgFcLcb97.SttbListNames.bin\nfibRgFcLcb97.SttbSavedBy.bin\nfibRgFcLcb97.Wss.bin\n")),Object(i.b)("p",null,"Which means you cannot make any assumptions about being able to use\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"[*]")," array range in these files, because they actually live inside\na larger structure in the real file and the ",Object(i.b)("inlineCode",{parentName:"p"},"[*]")," mechanism will\nincorrectly keep going into the following structures."),Object(i.b)("h3",{id:"32-about-the-usage-of-restrictions-and-acceptrule-on-arrays"},"3.2 About the usage of 'restrictions' and 'AcceptRule' on arrays"),Object(i.b)("p",null,"AUTHOR: Elvin Barreto-White"),Object(i.b)("p",null,"It is best to use ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," in an array of a structure type as\nopposed to ",Object(i.b)("inlineCode",{parentName:"p"},"restrictions")," on the array."),Object(i.b)("p",null,"Example"),Object(i.b)("p",null,"Avoid doing this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct Example {\n    uint8 Size;\n    StructType [Size] data optional restrictions {parent.Size == 0x50};\n    uint64 [15] MoreStuff;\n}\n\nstruct StructType {\n    uint8 A;\n    uint8 B;\n    ...\n    uint8 z;\n}\n")),Object(i.b)("p",null,"Do this instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct Example {\n    uint8 Size;\n    StructType [Size] data optional;\n    uint64 [15] MoreStuff;\n}\n\nstruct StructType {\n    AcceptRule parent.Size == 0x50;\n    uint8 A;\n    uint8 B;\n    ...\n    uint8 z;\n}\n")),Object(i.b)("p",null,"In an array data item, the restrictions clause will be applied to\neach element, so if there's a sentinel value in the array (for\nexample), then the restrictions clause can be used on an array."),Object(i.b)("p",null,"Consider this:"),Object(i.b)("p",null,"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct WhiteSpace {\n    char[*] str optional restrictions {iswhitespace()};\n}\n")),Object(i.b)("p",null,"Here, ",Object(i.b)("inlineCode",{parentName:"p"},"str"),", will be the number of characters up to, but not including,\nany character that is not whitespace."),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct equalsZero {\n    uint8[15] padding optional restrictions {current == 0};\n}\n")),Object(i.b)("p",null,"Here the ",Object(i.b)("inlineCode",{parentName:"p"},"padding")," field will stop processing if it encounter a value\nthat is not 0."),Object(i.b)("h3",{id:"33-using-allowempty"},"3.3 Using 'allowempty'"),Object(i.b)("p",null,"AUTHOR: unknown"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"allowempty")," on arrays that may or can be empty. It may be best\nto apply it to all arrays, unless the specification says otherwise."),Object(i.b)("h3",{id:"34-bit-masking"},"3.4 Bit Masking"),Object(i.b)("p",null,"AUTHOR: Jose Alonso"),Object(i.b)("p",null,"For a detailed introduction to bit masking, go to the BDDL\nDevelopment page in the Wiki ","-","-","-",">"," Presentation Notes ","-","-","-",">"," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"TODO"}),"Bits and\nPieces (Valid link pending)"),", written by Martin O\\'Brien."),Object(i.b)("p",null,"Let's suppose we have a one-byte variable, called ",Object(i.b)("inlineCode",{parentName:"p"},"var_name"),", equal\nto ABCDEFGH (binary). If we want to know the value of the second bit,\nG (LSB being H), a way of doing it is as follows:"),Object(i.b)("p",null,"Example"),Object(i.b)("p",null,"We reset the other bits (we set them to zero). The binary number used\nin this operation is called a mask. In this example, the mask would\nbe 00000010 (binary), which is 0x02 (hexadecimal)."),Object(i.b)("p",null,"This is implemented as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"(var_name & 0x02)\n")),Object(i.b)("p",null,"The result of this operation is either zero or two, depending on the\nvalue of the G flag."),Object(i.b)("p",null,"The bit-masking expression MUST be enclosed in parentheses."),Object(i.b)("p",null,"This is probably not what you want to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"AcceptRule parent.fEFGHIJKL & 0x80 == 0x80;\n")),Object(i.b)("p",null,"Do this instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"AcceptRule (parent.fEFGHIJKL & 0x80) == 0x80; \n")),Object(i.b)("h3",{id:"35-where-you-have-a-string-defined-in-the-bdd-file"},"3.5 Where you have a string defined in the BDD file"),Object(i.b)("p",null,"AUTHOR: unknown"),Object(i.b)("p",null,"You should use one of the standard strings in ",Object(i.b)("inlineCode",{parentName:"p"},"common/plex.bdd"),"."),Object(i.b)("h3",{id:"36-about-the-usage-of-optional"},"3.6 About the usage of 'optional'"),Object(i.b)("p",null,"AUTHOR: Jose Alonso"),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," keyword is used, a condition should be always used,\notherwise, ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," is useless."),Object(i.b)("p",null,"Example"),Object(i.b)("p",null,"Avoid doing this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct myStruct {\n    STD std;\n    uint8 padding optional;\n}\n")),Object(i.b)("p",null,"Do this instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct Padding {\nAcceptRule (sizeof(std) % 2) != 0;\n}\n\nstruct myStruct {\n    STD std;\n    Padding padding optional;\n}\n")),Object(i.b)("h3",{id:"37-accessing-a-specific-element-of-an-array"},"3.7 Accessing a specific element of an array"),Object(i.b)("p",null,"AUTHOR: Roman Danilov"),Object(i.b)("p",null,"It is possible to access specific element of an array with the square\nbracket notation as you would in many programming languages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[comment="Fetches the first element of the aCP array"]\naCP[0];\n')),Object(i.b)("p",null,"It is also possible to access a specific substructure from a specific\nelement of the array. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'struct CharCount {\n    uint8 count;\n}\n\ndocument ParagraphDocument {\n    CharCount[5] charCount;\n    [comment="Accesses the first element of the charCount array and uses its count substructure to specify the size of the array"]\n    char[charCount[0].count] word1;\n    char[charCount[1].count] word2;\n    ...\n}\n')),Object(i.b)("h3",{id:"38-accessing-ms-odraw-structures"},"3.8 Accessing MS-ODRAW structures"),Object(i.b)("p",null,"AUTHOR: Roman Danilov"),Object(i.b)("p",null,"All the properties are stored in a structure called ",Object(i.b)("inlineCode",{parentName:"p"},"OfficeArtRGFOPTE"),"\nalongside their corresponding complex structure. ",Object(i.b)("inlineCode",{parentName:"p"},"OfficeArtRGFOPTE")," is\nmade up of two arrays. The first array stores the properties, made up\nof an ",Object(i.b)("inlineCode",{parentName:"p"},"OfficeArtFOPTEOPID")," followed by a 4 byte data field. The second\narray stores the corresponding complex structures when the ",Object(i.b)("inlineCode",{parentName:"p"},"fComplex"),"\nbit is set."),Object(i.b)("p",null,"In order to access the property to check whether the ",Object(i.b)("inlineCode",{parentName:"p"},"fComplex"),", or\nany other bit, is set you could do something similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'parent.rgfopte[type() == "ThreeD_StyleBooleanProperties"].F == 0x0\n    ? ... \n    : ...;\n')),Object(i.b)("p",null,"In this example we are checking whether the ",Object(i.b)("inlineCode",{parentName:"p"},"F")," (",Object(i.b)("inlineCode",{parentName:"p"},"fc3DConstrainRotation"),")\nbit from the ",Object(i.b)("em",{parentName:"p"},"3D-Style Boolean Properties")," property is set (",Object(i.b)("em",{parentName:"p"},"3D-Style\nBoolean Properties")," is renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"ThreeD_StyleBooleanProperties"),"\nto keep the DVL checker and Miraplacid happy). The square bracket\nnotation is used to find the ",Object(i.b)("inlineCode",{parentName:"p"},"ThreeD_StyleBooleanProperties")," structure\nand then access the ",Object(i.b)("inlineCode",{parentName:"p"},"F")," (",Object(i.b)("inlineCode",{parentName:"p"},"fc3DConstrainRotation"),") field. This should\nmostly work as long as there exists only one property of a specific\ntype in the array (from the data we have seen, this seems to be the\ncase). Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"ThreeD_StyleBooleanProperties")," with your own\nstructure that you need to access and ",Object(i.b)("inlineCode",{parentName:"p"},".F")," with the field that you\nneed to access."),Object(i.b)("h3",{id:"39-accessing-ms-odraw-structures-further-explanation"},"3.9 Accessing MS-ODRAW structures: Further explanation"),Object(i.b)("p",null,"AUTHOR: Jose Alonso"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"rgfopte")," is an array of ",Object(i.b)("inlineCode",{parentName:"p"},"OfficeArtFOPTE")," records, which specifies\nproperty table entries (page 97 of ",Object(i.b)("em",{parentName:"p"},"[","MS-ODRAW","]"),")."),Object(i.b)("p",null,"If we have"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'rgfopte[0] = "c3DFillX";\nrgfopte[1] = "c3DFillY";\nrgfopte[2] = "c3DFillZ";\nrgfopte[3] = "ThreeD_StyleBooleanProperties";\n...\n')),Object(i.b)("p",null,"and we want to access the element containing the\n",Object(i.b)("inlineCode",{parentName:"p"},"ThreeD_StyleBooleanProperties")," structure, we can do the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"rgfopte[3]\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'rgfopte[type() == "ThreeD_StyleBooleanProperties"]\n')),Object(i.b)("p",null,"Therefore, in order to access any other structure or property set\ninside a .dvl or a .bdd file, this prefix has to be used"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'parent.rgfopte[type() == "pib"]\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pib")," being the name of the structure to which we want access."),Object(i.b)("hr",null),Object(i.b)("p",null,"Developers: place your tips and hints here."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"-2013-glasswall-solutions-limited"},"\xa9"," 2013 Glasswall Solutions Limited"))}b.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);