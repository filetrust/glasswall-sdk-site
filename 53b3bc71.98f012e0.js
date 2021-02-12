(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(278)),o={title:"2.1.3.1 Overview",sidebar_label:"2.1.3.1 Overview"},c={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_6-issueID_retreival",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_6-issueID_retreival",isDocsHomePage:!1,title:"2.1.3.1 Overview",description:"INTRODUCTION",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_6-issueID_retreival.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_6-issueID_retreival",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_3-architecture/2_1_3_6-issueID_retreival",version:"current",sidebar_label:"2.1.3.1 Overview"},l=[{value:"<strong>INTRODUCTION</strong>",id:"introduction",children:[]},{value:"<strong>EXAMPLE</strong>",id:"example",children:[]},{value:"<strong>AUTHOR</strong>",id:"author",children:[]},{value:"<strong>COPYRIGHT</strong>",id:"copyright",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"introduction"},Object(i.b)("strong",{parentName:"h3"},"INTRODUCTION")),Object(i.b)("p",null,"The Windows Dynamic Link Library ",Object(i.b)("inlineCode",{parentName:"p"},"glasswall.classic.dll")," and the Linux shared object ",Object(i.b)("inlineCode",{parentName:"p"},"libglasswall.classic.so")," provide the following functionality:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The production of reports detailing deep analysis of documents"),Object(i.b)("li",{parentName:"ul"},"The management of documents against a configurable content management policy"),Object(i.b)("li",{parentName:"ul"},"The regeneration of documents against a configurable content management policy"),Object(i.b)("li",{parentName:"ul"},"The production of detailed process reporting"),Object(i.b)("li",{parentName:"ul"},"The modification of the content management policy")),Object(i.b)("p",null,"Where an API argument type is ",Object(i.b)("inlineCode",{parentName:"p"},"wchar_t"),", the argument must be converted to that type before passing in to the API function."),Object(i.b)("h3",{id:"example"},Object(i.b)("strong",{parentName:"h3"},"EXAMPLE")),Object(i.b)("p",null,"The code snippet below provides a framework showing how this might be done on a GNU/Linux system, where the default encoding of the file system is UTF-8 (which can be verified by using the ",Object(i.b)("inlineCode",{parentName:"p"},"locale(1P)")," command: ",Object(i.b)("inlineCode",{parentName:"p"},"locale charmap")," in a terminal window). For the purpose of the example below, a string literal in UTF-8 encoding has been used."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'    /* Standard C headers */\n#include <limits.h>\n#include <locale.h>\n#include <string.h>\n#include <stdio.h>\n#include <stdlib.h>\n\n    /* platform dependent headers */\n#include <iconv.h>\n\n    /* define error handler to print message and exit */\n#define handle_error(msg) \\\n        do { perror(msg); exit(EXIT_FAILURE); } while (0)\n\nint main(void)\n{\n    char path[PATH_MAX] = "testfile/\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u0430\u0440\u0430\u0433\u0430\u0447\u0430.doc";\n    char *ppath = path;\n\n    wchar_t wcpath[PATH_MAX * sizeof(wchar_t)];\n    wchar_t * const pwcpath_start = wcpath;  /* iconv() changes param values; preserve start address */\n    char *pwcpath = (char *)wcpath;\n\n    size_t bpathremain = strlen(ppath)+1;                /* bytes, path remaining; +1 to include terminating null character */\n    size_t bwcpathremain = (PATH_MAX) * sizeof(wchar_t); /* bytes, wide character path remaining */\n    size_t retval;\n    eGwFileStatus rv;\n        \n        /* convert from UTF-8 to wchar_t for API interface */\n    iconv_t cd = iconv_open("WCHAR_T", "UTF-8");\n    if (cd == (iconv_t)-1)\n        handle_error("iconv_open() FAILED");\n\n    /* Set the locale for LC_CTYPE to the implementation-defined native locale \n     * so the way the print and scan functions declared in <stdlib.h> and <stdio.h> \n     * correctly parse and translate multibyte strings\n     */\n    setlocale(LC_CTYPE, "");  \n\n    /* convert the file name from UTF-8 string to wide character string */\n    retval = iconv(cd, &ppath, &bpathremain, &pwcpath, &bwcpathremain);\n\n    if (retval == (size_t)-1)\n        handle_error("iconv() FAILED");\n     \n        /* set up the policy */\n    rv = GWFileConfigXML(cmPolicy);\n    if (rv != eGwFileStatus_Success)\n    {\n        fprintf(stderr, "pGWFileConfigXML() FAILED with status %d\\n", rv);\n        exit(EXIT_FAILURE);\n    }\n\n        /* process the file */  \n    rv = GWFileToFileProtectAndReport(pwcpath_start, L"doc", L"/tmp/generatedfile.doc", L"/tmp/generatedfile.log");\n    if (rv != eGwFileStatus_Success)\n    {\n        fprintf(stderr, "pGWFileToFileProtectAndReport() FAILED with status %d\\n", rv);\n        exit(EXIT_FAILURE);\n    }\n\n        /* tidy up */\n    rv = GWFileDone();\n    if (rv != eGwFileStatus_Success)\n    {\n        fprintf(stderr, "pGWFileDone() FAILED with status %d\\n", rv);\n        exit(EXIT_FAILURE);\n    }\n\n    exit(EXIT_SUCCESS);\n\n} /* end of function main */\n')),Object(i.b)("h3",{id:"author"},Object(i.b)("strong",{parentName:"h3"},"AUTHOR")),Object(i.b)("p",null,"Martin O'Brien ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mobrien@glasswallsolutions.com"}),"mobrien@glasswallsolutions.com")),Object(i.b)("h3",{id:"copyright"},Object(i.b)("strong",{parentName:"h3"},"COPYRIGHT")),Object(i.b)("p",null,"\xa9"," 2016 Glasswall Solutions Limited"))}p.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);