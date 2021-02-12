(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(278)),b={title:"8.1.9.6.3.6.2 Document Processing Arguments",sidebar_label:"8.1.9.6.3.6.2 Document Processing Arguments"},i={unversionedId:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_6_2-doc_processing_args",id:"8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_6_2-doc_processing_args",isDocsHomePage:!1,title:"8.1.9.6.3.6.2 Document Processing Arguments",description:"This section describes the common arguments used in the document processing functions. The function argument naming is applied consistently across the API. An argument name prefixed with wc indicates that the function expects the argument to contain a wide character string.",source:"@site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_6_2-doc_processing_args.md",slug:"/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_6_2-doc_processing_args",permalink:"/glasswall-sdk-site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_6_2-doc_processing_args",version:"current",sidebar_label:"8.1.9.6.3.6.2 Document Processing Arguments"},c=[{value:"Input Arguments",id:"input-arguments",children:[{value:"inputFilePathName",id:"inputfilepathname",children:[]},{value:"wcType",id:"wctype",children:[]}]},{value:"File to Memory Location Output Arguments",id:"file-to-memory-location-output-arguments",children:[{value:"outputFileBuffer",id:"outputfilebuffer",children:[]},{value:"outputLength",id:"outputlength",children:[]},{value:"analysisFileBuffer",id:"analysisfilebuffer",children:[]},{value:"analysisFileBufferLength",id:"analysisfilebufferlength",children:[]},{value:"reportFileBuffer",id:"reportfilebuffer",children:[]},{value:"reportFileBufferLength",id:"reportfilebufferlength",children:[]}]},{value:"File to File Output Arguments",id:"file-to-file-output-arguments",children:[{value:"outputFilePathName",id:"outputfilepathname",children:[]},{value:"analysisFilePathName",id:"analysisfilepathname",children:[]},{value:"reportFilePathName",id:"reportfilepathname",children:[]},{value:"exportFilePathName",id:"exportfilepathname",children:[]}]},{value:"Determine File Type Output Enumeration",id:"determine-file-type-output-enumeration",children:[{value:"File Type Enumeration",id:"file-type-enumeration",children:[]}]},{value:"Process Return Status",id:"process-return-status",children:[]}],o={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This section describes the common arguments used in the document processing functions. The function argument naming is applied consistently across the API. An argument name prefixed with wc indicates that the function expects the argument to contain a wide character string."),Object(l.b)("h2",{id:"input-arguments"},"Input Arguments"),Object(l.b)("p",null,"These arguments inform the process functions which file to process and the file type to expect."),Object(l.b)("h3",{id:"inputfilepathname"},"inputFilePathName"),Object(l.b)("p",null,"The input file path for Glasswall processing. Glasswall ignores any file suffix, the file type must be specified in  ",Object(l.b)("strong",{parentName:"p"},"wcType"),"."),Object(l.b)("h3",{id:"wctype"},"wcType"),Object(l.b)("p",null,"Each of the processing functions requires the expected file type to be specified through the wcType argument. The following table details the expected values for wcType."),Object(l.b)("p",null,"The values for wcType are case-sensitive."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"wcType")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"File type")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pdf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PDF documents")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"doc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary MS Word files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xls"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary MS Excel files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ppt"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary MS PowerPoint files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"docx"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML MS Word files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xlsx"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML MS Excel files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pptx"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML MS PowerPoint files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"jpg"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JPEG image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"gif"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GIF image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"png"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PNG image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"emf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EMF image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wmf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WMF image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bmp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BMP image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tiff"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TIFF image files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ELF files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wmf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WMF files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MP3 files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MPEG-4 files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mpg"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MPEG files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MPEG-2 files (H.222/H.262)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wav"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WAV files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"o"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mach-O files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pe"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PE files")))),Object(l.b)("h2",{id:"file-to-memory-location-output-arguments"},"File to Memory Location Output Arguments"),Object(l.b)("p",null,"These arguments are used to return process information from the Glasswall library when using the File to Memory Locations process functions."),Object(l.b)("p",null,"Client applications do not need to manage the release of memory allocated to these return buffers."),Object(l.b)("h3",{id:"outputfilebuffer"},"outputFileBuffer"),Object(l.b)("p",null,"The Glasswall processing output file buffer."),Object(l.b)("p",null,"This buffer contains an image of the Glasswall processed output file which will be of the same data type as the input file and will have managed content removed and Glasswall protected according to the standard content specification allowed for the file data type."),Object(l.b)("p",null,"The argument can be set to NULL when the outputFileBuffer is not required and only validation of a file is required. In this case then the ref gwOutputLength ",'"',"outputLength",'"'," argument should also be set to NULL."),Object(l.b)("h3",{id:"outputlength"},"outputLength"),Object(l.b)("p",null,"Length of the  ",Object(l.b)("strong",{parentName:"p"},"outputFileBuffer"),"."),Object(l.b)("p",null,"The argument can be set to NULL when the  ",Object(l.b)("strong",{parentName:"p"},"outputFileBuffer"),"  is not required and only validation of a file required. In this case then the  ",Object(l.b)("strong",{parentName:"p"},"outputFileBuffer"),"  should also be set to NULL."),Object(l.b)("h3",{id:"analysisfilebuffer"},"analysisFileBuffer"),Object(l.b)("p",null,"Analysis (XML) file buffer from Glasswall processing. This buffer contains an image of the Glasswall ANALYSIS report of the specified file."),Object(l.b)("h3",{id:"analysisfilebufferlength"},"analysisFileBufferLength"),Object(l.b)("p",null,"Length of the  ",Object(l.b)("strong",{parentName:"p"},"analysisFileBuffer")),Object(l.b)("h3",{id:"reportfilebuffer"},"reportFileBuffer"),Object(l.b)("p",null,"Detailed log file buffer from Glasswall processing. The argument can be set to NULL when the report is not required."),Object(l.b)("p",null,"In this case then the  ",Object(l.b)("strong",{parentName:"p"},"reportFileBufferLength"),"  should also be set to NULL."),Object(l.b)("h3",{id:"reportfilebufferlength"},"reportFileBufferLength"),Object(l.b)("p",null,"Length of the reportFileBuffer that has been allocated. The argument can be set to NULL when the report is not required."),Object(l.b)("p",null,"In this case then the  ",Object(l.b)("strong",{parentName:"p"},"reportFileBuffer"),"  should also be set to NULL."),Object(l.b)("h2",{id:"file-to-file-output-arguments"},"File to File Output Arguments"),Object(l.b)("p",null,"These arguments are used to return process information from the Glasswall library when using the File to File process functions."),Object(l.b)("p",null,"Destination folders for these files must exist and be writable, processing will be reported in error if these conditions are not met."),Object(l.b)("h3",{id:"outputfilepathname"},"outputFilePathName"),Object(l.b)("p",null,"Destination for the managed file from Glasswall processing."),Object(l.b)("p",null,"This file contains the Glasswall processed output file which will be of the same type as the input file, will have managed content removed and be Glasswall protected according to the standard content specification allowed for the file type."),Object(l.b)("h3",{id:"analysisfilepathname"},"analysisFilePathName"),Object(l.b)("p",null,"Destination for Analysis Audit report (XML) from Glasswall processing. This file contains an image of the Glasswall ANALYSIS of the processed file."),Object(l.b)("h3",{id:"reportfilepathname"},"reportFilePathName"),Object(l.b)("p",null,"Destination for detailed processing log file buffer from Glasswall processing."),Object(l.b)("h3",{id:"exportfilepathname"},"exportFilePathName"),Object(l.b)("p",null,"Destination for the exported zip archive. This zip archive containing the Managed file, the Analysis report, and extracted elements such as images and text."),Object(l.b)("h2",{id:"determine-file-type-output-enumeration"},"Determine File Type Output Enumeration"),Object(l.b)("h3",{id:"file-type-enumeration"},"File Type Enumeration"),Object(l.b)("p",null,"The following table details the possible enumeration values that can be returned with a call to ",Object(l.b)("em",{parentName:"p"},"GWDetermineFileTypeFromFile")," and what they represent."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Value")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Representation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unknown or unrecognised file type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pdf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"doc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"docx")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ppt")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pptx")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"21"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xls")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"22"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xlsx")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"23"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"png")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"jpg")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"gif")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"26"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"emf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"27"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wmf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"28"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rtf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"29"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bmp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tiff")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"31"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pe")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"macho")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"33"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"34"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"35"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"36"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mp2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"37"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wav")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"38"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mpg")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"39"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coff")))),Object(l.b)("p",null,"The following table is an extension to the table above and indicates issues that may occur during interrogation."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Value")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Representation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File issues preventing file type detection")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Memory allocation issues preventing file type detection")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Internal processing issues preventing file type detection")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Licensing issues preventing file type detection")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OPC password protected file")))),Object(l.b)("h2",{id:"process-return-status"},"Process Return Status"),Object(l.b)("p",null,"All the processing functions return values as defined in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/glasswall-sdk-site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def#egwfilestatus"}),Object(l.b)("strong",{parentName:"a"},"eGwFileStatus")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Status Value")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Effects")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"eGwFileStatus","_","Success")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Managed documents are published to the specified locations",Object(l.b)("li",null,"For file to memory location, the size of the managed document is reported in the specified argument"),Object(l.b)("li",null,"For file to file the specified file location is loaded with the processed document")," Analysis reports are published to the specified locations, for memory locations the size of the analysis report is reported in the specified argument.Detailed reports are published to the specified locations, for memory locations the size of the detailed report is reported in the specified argument.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"eGwFileStatus","_","Error")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Managed documents are not published. Memory location functions return a NULL pointer for  ",Object(l.b)("strong",{parentName:"td"},"outputFileBuffer"),"  and set the  ",Object(l.b)("strong",{parentName:"td"},"outputFileBuffer"),"  to zero.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"other")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The effects of the failure case is described in the notes for ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/glasswall-sdk-site/docs/8-related/8_1-specifications/8_1_9-rebuild_api_spec/8_1_9_6-lib_modules/8_1_9_6_3-doc_proc/8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def#egwfilestatus"}),Object(l.b)("strong",{parentName:"a"},"eGwFileStatus")))))))}p.isMDXComponent=!0},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,O=s["".concat(b,".").concat(d)]||s[d]||u[d]||l;return a?r.a.createElement(O,i(i({ref:t},o),{},{components:a})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);