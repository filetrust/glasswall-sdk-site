(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(216)),l={title:"BDDL Guidelines"},c={unversionedId:"artifacts/BddlDeveloperGuidelines",id:"artifacts/BddlDeveloperGuidelines",isDocsHomePage:!1,title:"BDDL Guidelines",description:"- 1. Introduction",source:"@site/docs/artifacts/BddlDeveloperGuidelines.md",slug:"/artifacts/BddlDeveloperGuidelines",permalink:"/glasswall-sdk-site/docs/artifacts/BddlDeveloperGuidelines",version:"current"},b=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Combining Fields",id:"2-combining-fields",children:[]},{value:"3. Include Statements",id:"3-include-statements",children:[]},{value:"4. Naming Bit Fields",id:"4-naming-bit-fields",children:[]},{value:"5. AcceptRule",id:"5-acceptrule",children:[{value:"5.1 Placement",id:"51-placement",children:[]},{value:"5.2 Enumerations",id:"52-enumerations",children:[]},{value:"5.3 Arrays of Structures",id:"53-arrays-of-structures",children:[]},{value:"5.3 File Validation",id:"53-file-validation",children:[]}]},{value:"6. Pointer Metadata",id:"6-pointer-metadata",children:[]},{value:"7. Version Control",id:"7-version-control",children:[]},{value:"8. Optional restrictions",id:"8-optional-restrictions",children:[]},{value:"9. char and wchar",id:"9-char-and-wchar",children:[]},{value:"10. Allowempty",id:"10-allowempty",children:[]},{value:"11. Structure Names",id:"11-structure-names",children:[{value:"11.1 BDDL File Names",id:"111-bddl-file-names",children:[]},{value:"11.2 MIME Type",id:"112-mime-type",children:[]}]},{value:"12. Precedence and Associativity",id:"12-precedence-and-associativity",children:[]},{value:"13. Glasswall Additions",id:"13-glasswall-additions",children:[{value:"13.1 Calling legacy or external cameras",id:"131-calling-legacy-or-external-cameras",children:[]},{value:"13.2 Validating Text fields as integers",id:"132-validating-text-fields-as-integers",children:[]},{value:"13.3 Guiding code generator",id:"133-guiding-code-generator",children:[]}]},{value:"14. Recommendations",id:"14-recommendations",children:[{value:"14.1 Extra Annotations",id:"141-extra-annotations",children:[]}]},{value:"COPYRIGHT",id:"copyright",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1-introduction"}),"1. Introduction")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#2-combining-fields"}),"2. Combining Fields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#3-include-statements"}),"3. Include Statements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#4-naming-bit-fields"}),"4. Naming Bit Fields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#5-acceptrule"}),"5. AcceptRule"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#51-placement"}),"5.1 Placement")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#52-enumerations"}),"5.2 Enumerations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#53-arrays-of-structures"}),"5.3 Arrays of Structures")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#53-file-validation"}),"5.3 File Validation")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#6-pointer-metadata"}),"6. Pointer Metadata")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#7-version-control"}),"7. Version Control")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#8-optional-restrictions"}),"8. Optional restrictions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#9-char-and-wchar"}),"9. char and wchar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#10-allowempty"}),"10. Allowempty")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#11-structure-names"}),"11. Structure Names"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#111-bddl-file-names"}),"11.1 BDDL File Names")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#112-mime-type"}),"11.2 MIME Type")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#12-precedence-and-associativity"}),"12. Precedence and Associativity")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#13-glasswall-additions"}),"13. Glasswall Additions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#131-calling-legacy-or-external-cameras"}),"13.1 Calling legacy or external cameras")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#132-validating-text-fields-as-integers"}),"13.2 Validating Text fields as integers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1321-bddl"}),"13.2.1 BDDL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1322-dvl"}),"13.2.2 DVL")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#133-guiding-code-generator"}),"13.3 Guiding code generator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1331-linking-target-objects"}),"13.3.1 Linking Target Objects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1332-marking-fields-as-tokens"}),"13.3.2 Marking fields as Tokens")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1333-marking-fields-as-whitespace"}),"13.3.3 Marking fields as Whitespace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1335-changing-filename"}),"13.3.5 Changing Filename")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#14-recommendations"}),"14. Recommendations"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#141-extra-annotations"}),"14.1 Extra Annotations")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#copyright"}),"COPYRIGHT"))),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("p",null,"These guidelines are designed to facilitate a standardised way of\nwriting BDDL files. The guidelines are designed to provide code\nthat is clear, robust, efficient, maintainable and concise."),Object(i.b)("p",null,"These guidelines may be referred to in code reviews."),Object(i.b)("h2",{id:"2-combining-fields"},"2. Combining Fields"),Object(i.b)("p",null,"When combining fields, name the field using all the names, for\nexample, ","[","MS-DOC","]"," \xa72.9.207, ",Object(i.b)("em",{parentName:"p"},"PnFkpPapx"),", do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uint32 pn_unused\n")),Object(i.b)("h2",{id:"3-include-statements"},"3. Include Statements"),Object(i.b)("p",null,"For the include statement, use chevrons ",Object(i.b)("inlineCode",{parentName:"p"},"<>")," for Miraplacid library\nfiles, and double quotes ",Object(i.b)("inlineCode",{parentName:"p"},'""')," for Glasswall Solution files. Always use\nforward slash ",Object(i.b)("inlineCode",{parentName:"p"},"/")," as a directory delimiter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'include <strings.bdd>\ninclude "office_bddl/common/sttb.bdd"\ninclude "office_bddl/MS-DOC/WordDocument_Stream.bdd"\n')),Object(i.b)("h2",{id:"4-naming-bit-fields"},"4. Naming Bit Fields"),Object(i.b)("p",null,"When combining bit fields, prefix the name with ",Object(i.b)("inlineCode",{parentName:"p"},"f")," (for ",Object(i.b)("em",{parentName:"p"},"flag"),").\nFor example, the flags stored in the first byte of the ",Object(i.b)("inlineCode",{parentName:"p"},"Rfs")," structure\n(",Object(i.b)("em",{parentName:"p"},"[","MS-DOS","]")," \xa72.9.227, page 441) would be named ",Object(i.b)("inlineCode",{parentName:"p"},"fABCDEFG"),"."),Object(i.b)("p",null,"The uppercase sequence of letters of the alphabet distuinguishes\nthem from true variable names in the specification, such as ",Object(i.b)("inlineCode",{parentName:"p"},"fExtend"),"."),Object(i.b)("p",null,"If you\\'re combining other fields too, name them in sequence, for example,\nthe first 8 bits in ",Object(i.b)("inlineCode",{parentName:"p"},"DopBase")," can be named"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"fABCD_fpc_fE\n")),Object(i.b)("p",null,"so each set of one of more flags is preceded by ",Object(i.b)("inlineCode",{parentName:"p"},"f"),"."),Object(i.b)("h2",{id:"5-acceptrule"},"5. AcceptRule"),Object(i.b)("h3",{id:"51-placement"},"5.1 Placement"),Object(i.b)("p",null,"Place the pseudo-item ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," as early as possible in the structure definition\nin order to speed up code generation. That is, it does not have to\nbe the last item in the structure definition."),Object(i.b)("h3",{id:"52-enumerations"},"5.2 Enumerations"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," rejects the current structure if the condition is\nfalse, so use an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," only when you want processing of the\nstructure to stop."),Object(i.b)("p",null,"Use an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," for the types you specify in an enumeration, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"struct Type1 {\n...\nAcceptRule ( condition1 );\n}\n\nstruct Type2 {\n...\nAcceptRule ( condition2 );\n}\n\nstruct Type3 {\n...\nAcceptRule ( condition3 );\n}\n\n(Type1 | Type2 | Type3 ) types;\n")),Object(i.b)("p",null,"Make sure condition1, condition2, and condition3 are mutually\nexclusive. Type3 does not need an AcceptRule, if you want it\nto be the default if the other conditions fail."),Object(i.b)("h3",{id:"53-arrays-of-structures"},"5.3 Arrays of Structures"),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," can be used in a structure that is the type of an\narray. As soon as the structure is not accepted, the array is\nfinished and the parser/validator will proceed with the next\nitem in the data definition."),Object(i.b)("h3",{id:"53-file-validation"},"5.3 File Validation"),Object(i.b)("p",null,"Use an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," if you want processing of the file to stop,\nfor example, if a magic value identifying the file type is\nnot present."),Object(i.b)("h2",{id:"6-pointer-metadata"},"6. Pointer Metadata"),Object(i.b)("p",null,"Suffix pointer metadata directory names with ",Object(i.b)("inlineCode",{parentName:"p"},"_Ptr"),", for example, "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"directory SttbfAssoc_Ptr { ... }\n")),Object(i.b)("h2",{id:"7-version-control"},"7. Version Control"),Object(i.b)("p",null,"Push changes to your local branch then to the remote branch at appropriate intervals in order to preserve your work, especially before a weekend. This will ensure the changes are stored remotely. Files edited but not commited are stored only locally on your hard drive. If the drive fails, your edits are lost."),Object(i.b)("h2",{id:"8-optional-restrictions"},"8. Optional restrictions"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," keyword specifies that if the current data item is\nnot present, it is not an error."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"restrictions")," keyword allows an element to be validated and an\nerror reported if it is false."),Object(i.b)("p",null,"It is important to know that when used with an array, the ",Object(i.b)("inlineCode",{parentName:"p"},"restrictions"),"\nrule is applied to each element, and when it fails, the array is ended."),Object(i.b)("p",null,"This allows for variable-length arrays."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," and ",Object(i.b)("inlineCode",{parentName:"p"},"restrictions")," are used together, then an error is\nnot reported if the ",Object(i.b)("inlineCode",{parentName:"p"},"restrictions")," rule is false."),Object(i.b)("h2",{id:"9-char-and-wchar"},"9. char and wchar"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"char")," is 8-bit and ",Object(i.b)("inlineCode",{parentName:"p"},"wchar")," is 16-bit Unicode. The BDDL\ndocumentation refers to ",Object(i.b)("inlineCode",{parentName:"p"},"char")," as ",Object(i.b)("em",{parentName:"p"},"ANSI")," but it is a largely\nmeaningless description (ANSI is the acronym of the American\nNational Standards Institute). It usually refers to Windows Code\nPages."),Object(i.b)("p",null,"Where the Microsoft specification refers to characters or wide\ncharacters, then use the ",Object(i.b)("inlineCode",{parentName:"p"},"char")," and ",Object(i.b)("inlineCode",{parentName:"p"},"wchar")," types as required."),Object(i.b)("h2",{id:"10-allowempty"},"10. Allowempty"),Object(i.b)("p",null,"When an array size can be zero, then ",Object(i.b)("inlineCode",{parentName:"p"},"allowempty")," must be used."),Object(i.b)("h2",{id:"11-structure-names"},"11. Structure Names"),Object(i.b)("h3",{id:"111-bddl-file-names"},"11.1 BDDL File Names"),Object(i.b)("p",null,"The name of the BDDL file should have the same case as the\nstructure, as specified in the specification, with file type"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},".bdd"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"STSH.bdd\nSttbfRMark.bdd\n")),Object(i.b)("h3",{id:"112-mime-type"},"11.2 MIME Type"),Object(i.b)("p",null,"The MIME type specified as the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"mime_type"),"\nannotation key should retain the case as specified in the\nspecification, prefixed by ",Object(i.b)("inlineCode",{parentName:"p"},"ms/"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'mime_type="ms/STSH"\nmime_type="ms/SttbfRMark"\n')),Object(i.b)("h2",{id:"12-precedence-and-associativity"},"12. Precedence and Associativity"),Object(i.b)("p",null,"The table below summarises the rules for precedence and\nassociativity of all operators. Operators on the same line have the\nsame precedence; rows are in order of decreasing precedence, so, for\nexample, ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"%")," all have the same precedence, which is higher\nthan that of binary ",Object(i.b)("inlineCode",{parentName:"p"},"+")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-"),'. The "operator" ',Object(i.b)("inlineCode",{parentName:"p"},"()")," refers to function\ncall. The operators ",Object(i.b)("inlineCode",{parentName:"p"},"->")," and ",Object(i.b)("inlineCode",{parentName:"p"},".")," refer to the access of structures."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Operators"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Associativity"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"() [] -> ."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"! ~ ++ -- + - * (type) sizeof"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"right to left")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"* / %"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"+ -"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<< >>"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"< <= > >="),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"== !="),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"&"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"^"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"|"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"&&"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"|","|"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"?:"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"right to left")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"= += -= *= /= %= &= ^= ","|","= <<= >>="),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"right to left")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),","),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left to right")))),Object(i.b)("h2",{id:"13-glasswall-additions"},"13. Glasswall Additions"),Object(i.b)("p",null,"To add some functions to BDDL that will be used by BDDL to C++ conversion, or DVL to C++ conversion programs, the annotation mechanism in\nBDDL is used to add extra notes for those programs that will be\nignored by Miraplacid."),Object(i.b)("h3",{id:"131-calling-legacy-or-external-cameras"},"13.1 Calling legacy or external cameras"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[camera=<camera name>]\nuint8 [*] data;\n")),Object(i.b)("p",null,"We prefix the data item with the ",Object(i.b)("inlineCode",{parentName:"p"},"camera")," annotation where we have\nloaded a block of bytes that are known to be the raw data of a file\ntype for which we have a camera, for example, JPEG."),Object(i.b)("p",null,"So, in this particular case, here is the structure from ",Object(i.b)("inlineCode",{parentName:"p"},"DggInfo")," that\nwraps round a JPEG image with the annotation added."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'struct OfficeArtBlipJPEG {\n    OfficeArtRecordHeader rh;\n    AcceptRule rh.recType == 0xF01D \\|\\| rh.recType == 0xF02A;\n    uint8[16] rgbUid1;\n    uint8[16] rgbUid2 optional\n    restrictions{((parent.rh.frecVer_recInstance) & (0xFFF0) >> (4)) == 0x46B\n    || ((parent.rh.frecVer_recInstance) & (0xFFF0) >> (4)) == 0x6E3};\n    uint8 tag;\n    [camera="jpegCamera"]\n    uint8[rh.recLen - sizeof(rgbUid1) - sizeof(rgbUid2) - sizeof(tag)]\n    BLIPFileData allowempty;\n}\n')),Object(i.b)("h3",{id:"132-validating-text-fields-as-integers"},"13.2 Validating Text fields as integers"),Object(i.b)("h4",{id:"1321-bddl"},"13.2.1 BDDL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[fieldtype=<type of field>]\nchar [*] my_value;\n")),Object(i.b)("h4",{id:"1322-dvl"},"13.2.2 DVL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"my_value := RANGE(current, <x>, <y>); /* or similar rule */\n")),Object(i.b)("p",null,"Where ",Object(i.b)("em",{parentName:"p"},"<type of field",">")," is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"integer"),' for interpreting text such as "2344" or "-9766" as an\ninteger number in DVL validation phase.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"real"),' for interpreting text such as "33.45" or "-322.83" as a real (floating point) number in DVL validation phase.'))),Object(i.b)("p",null,"This tells ",Object(i.b)("em",{parentName:"p"},"DVL_Checker")," to build code that reads the text of the\n",Object(i.b)("inlineCode",{parentName:"p"},"my_value")," field and turn it into a real value."),Object(i.b)("p",null,"If you don't put the ",Object(i.b)("inlineCode",{parentName:"p"},"fieldtype")," annotation, then because ",Object(i.b)("inlineCode",{parentName:"p"},"char[*]")," is\nturned into an object we would be comparing against the address in\nmemory of the object and not its interpreted value."),Object(i.b)("h3",{id:"133-guiding-code-generator"},"13.3 Guiding code generator"),Object(i.b)("h4",{id:"1331-linking-target-objects"},"13.3.1 Linking Target Objects"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[targetObject=<fully specified path to object>]\n")),Object(i.b)("p",null,"Where ",Object(i.b)("em",{parentName:"p"},"<fully specified path to object",">")," could be things like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"root.tableStream\nroot.dataStream\n")),Object(i.b)("p",null,"A way of helping the BDDL to C++ converter with preparing to connect\ndirectories to objects."),Object(i.b)("p",null,"When using a ",Object(i.b)("inlineCode",{parentName:"p"},"directory")," in BDDL, Miraplacid works out which object\nto connect it to, by looking at the address range of the location\nwhere the target object ends up. To remove this job from the\nrun time stage of the generated code, we can use an annotation to the\nBDDL that tells the generated code where to connect the completed\nobject."),Object(i.b)("p",null,"For example:"),Object(i.b)("p",null,"BDDL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[targetObject="root.tablestream"]\ndirectory D_NAME {\ntype ****\nPointerRule ******\nAcceptRule *****\n')),Object(i.b)("h4",{id:"1332-marking-fields-as-tokens"},"13.3.2 Marking fields as Tokens"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[token="<acceptRule/restriction>"]\n')),Object(i.b)("p",null,"where ",Object(i.b)("em",{parentName:"p"},"<acceptRule/restriction",">")," is used to read characters from\nthe current location until the expression fails."),Object(i.b)("p",null,"This tells the BDDL to C++ convertor that the following string is\na Token (like an element name in XML or a control word in RTF)."),Object(i.b)("p",null,"The field will be replaced by an enumerated lookup for the camera\n",Object(i.b)("inlineCode",{parentName:"p"},"e"),Object(i.b)("em",{parentName:"p"},"CameraName"),Object(i.b)("inlineCode",{parentName:"p"},"_Token")," and the string will be looked up in a\ndictionary from all the ",".",".."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'field == "string"\n')),Object(i.b)("p",null,".",".. style ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"Restriction"),"s found in the BDDL for this\ncamera. These string compares will be replaced by an enumerator compare\nin the code."),Object(i.b)("p",null,"For example:"),Object(i.b)("p",null,"BDDL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'WhiteSpace ws2 optional;\n[token="isletterordigit()"]\nWord name implicit;\nAttribute[*] attributes optional;\n')),Object(i.b)("p",null,"will mean ",Object(i.b)("inlineCode",{parentName:"p"},"name")," will not be treated as type ",Object(i.b)("inlineCode",{parentName:"p"},"Word")," (which contained\nthe string object) but instead will be treated as an enumerated\nToken."),Object(i.b)("h4",{id:"1333-marking-fields-as-whitespace"},"13.3.3 Marking fields as Whitespace"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[whitespace="true"]\n')),Object(i.b)("p",null,"This tells the BDDL to C++ convertor that the following\ncharacters should be whitespace. Therefore it needs only to\nrecord a single three-state scalar value that indicates whether:"),Object(i.b)("p",null,"o No Whitespace Found",Object(i.b)("br",null),"\no One or more Space or Tab Found",Object(i.b)("br",null),"\no One or more Carriage Return or Linefeed Found"),Object(i.b)("p",null,"For example:"),Object(i.b)("p",null,"BDDL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[whitespace="true"]\nWhiteSpace ws2 optional;\nWord name implicit;\n')),Object(i.b)("p",null,"will mean ",Object(i.b)("inlineCode",{parentName:"p"},"ws2")," is stored as a single scalar instead of a vector\nof characters. A single space or CRLF or nothing will be output\nin the regenerated file."),Object(i.b)("p",null,"13.3.4 Inserting Handwritten Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[insertcode_xxxx="<your code here>"]\n')),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[replacetest_xxxx="<your code here>"]\n')),Object(i.b)("p",null,"tells the BDDL to C++ convertor to insert the literal code\nin front of the current BDDL construct in the situation defined by\n",Object(i.b)("em",{parentName:"p"},"xxxx"),"."),Object(i.b)("p",null,"Note: Multiline code sections between the quotes must not contain\nquotes, instead use ",Object(i.b)("inlineCode",{parentName:"p"},"&quot;"),"."),Object(i.b)("p",null,"The variations are:"),Object(i.b)("p",null,"a",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[insertcode_asis_onread="<your code here>"]')," (implemented\n25","\xa0","March","\xa0","2015)."),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the literal\ncode in front of the read of the current item, or in front of\nan ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," on a read pass."),Object(i.b)("p",null,"b",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[replacecode_asis_onread="<your code here>"]')," (implemented\n25","\xa0","March","\xa0","2015)."),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to replace the read of the current\nitem, or in front of an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," on a read pass with the literal\ncode."),Object(i.b)("p",null,"c",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[insertcode_asis_onwrite="<your code here>"]')),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the literal\ncode in front of the write of the current item, or at end of\nwriting all items if placed in front of the ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," in the\nBDDL."),Object(i.b)("p",null,"d",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[insertcode_interpreted_onread="<your code here>"]'),"\n(implemented 25","\xa0","March","\xa0","2015)"),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the code in\nfront of the read of the current item, or in front of an\n",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," on a read pass. But it will run the BDDL to C++\ninterpretation on the inserted code which will replace\n",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the item name or replace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the\nstructure (class) name ID applied to an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule"),"."),Object(i.b)("p",null,"e",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[replacecode_interpreted_onread="<your code here>"'),"\n(implemented 25","\xa0","March","\xa0","2015)."),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to replace generated code for\nthe read of the current item, or ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," on a read pass with the\nliteral code but it will run the BDDL to C++ interpretation on the\ninserted code which will replace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the item name or replace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the structure (class) name ID applied to an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule"),"."),Object(i.b)("p",null,"f",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[insertcode_interpreted_onwrite="<your code here>"]')),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the code in\nfront of the write of the current item, or at end of writing\nall items if placed in front of the ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," in the BDDL.\nBut it will run the BDDL to C++ interpretation on the inserted\ncode which will replace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the item name or\nreplace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the structure (class) name if applied\nto an ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule"),"."),Object(i.b)("p",null,"g",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[replacetest_asis_onread="<your code here>"]')),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the literal\ncode ",Object(i.b)("em",{parentName:"p"},"instead of")," the ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," code on a read pass."),Object(i.b)("p",null,"h",")"," ",Object(i.b)("inlineCode",{parentName:"p"},'[replacetest_interpreted_onread="<your code here>"]')),Object(i.b)("p",null,"This tells the BDDL to C++ convertor to insert the literal\ncode ",Object(i.b)("em",{parentName:"p"},"instead of")," the ",Object(i.b)("inlineCode",{parentName:"p"},"AcceptRule")," code on a read pass, but it\nwill run the BDDL to C++ interpretation on the inserted code\nwhich will replace ",Object(i.b)("inlineCode",{parentName:"p"},"current")," with the structure (class) name."),Object(i.b)("p",null,"For example:"),Object(i.b)("p",null,"BDDL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[insertcode_asis_onread="skipcomments();"]\nWord name ;\n[replacetest_asis_onread="name.str == &quot;STRUCT1&quot;"]\nAcceptRule name == "STRUCT1";\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE"),": The use of ",Object(i.b)("inlineCode",{parentName:"p"},"&quot;")," for double quotes as the ",Object(i.b)("inlineCode",{parentName:"p"},"'\\\"'")," escape\nsequence did not work in the C","#","# code for some reason."),Object(i.b)("h4",{id:"1335-changing-filename"},"13.3.5 Changing Filename"),Object(i.b)("p",null,"We can use the"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[fileprefix="cameraname"]\n')),Object(i.b)("p",null,"annotation in front of any structure in a file to insert ",Object(i.b)("em",{parentName:"p"},"cameraname"),"\nin front of the C++ and .h filenames for the files produced from the BDDL file."),Object(i.b)("p",null,"For example, ",Object(i.b)("inlineCode",{parentName:"p"},"XML_common.bdd")," would normally produce ",Object(i.b)("inlineCode",{parentName:"p"},"XML_common.cpp")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"XML_common.h"),", but this annotation will create ",Object(i.b)("em",{parentName:"p"},"cameraname"),Object(i.b)("inlineCode",{parentName:"p"},"\\_XML_common.cpp")," and ",Object(i.b)("em",{parentName:"p"},"cameraname"),Object(i.b)("inlineCode",{parentName:"p"},"\\_XML_common.h"),"."),Object(i.b)("p",null,"This allows common BDDL files to be used in different cameras and the\ncode will be regenerated in each namespace with different filenames."),Object(i.b)("h2",{id:"14-recommendations"},"14. Recommendations"),Object(i.b)("h3",{id:"141-extra-annotations"},"14.1 Extra Annotations"),Object(i.b)("p",null,"It would be good to have"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[spec="MS-DOC x.y.z"]\n')),Object(i.b)("p",null,"in front of structures/dictionaries to help map BDDL to Specification."),Object(i.b)("p",null,"Also, a way of helping the BDDL to C++ converter with preparing to\nconnect directories to objects"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'[targetObject="root.tablestream"]\ndirectory D_NAME {\n    type ****\n    PointerRule ******\n    AcceptRule *****\n}\n')),Object(i.b)("p",null,"This is because the Miraplacid SDK does it by finding the object\ncontaining the dataheap dynamically from the ",Object(i.b)("inlineCode",{parentName:"p"},"PointerRule")," offset,\nwhich would be very messy, a slow a mechanism to replicate, and run in the\nDLL."),Object(i.b)("h2",{id:"copyright"},"COPYRIGHT"),Object(i.b)("p",null,"\xa9"," 2013 Glasswall Solutions Limited"))}p.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);