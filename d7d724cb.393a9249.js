(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(276)),o={title:"2.1.7.1.1 API Overview",sidebar_label:"2.1.7.1.1 API Overview"},l={unversionedId:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview",id:"2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview",isDocsHomePage:!1,title:"2.1.7.1.1 API Overview",description:"Introduction",source:"@site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview.md",slug:"/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_1-overview",version:"current",sidebar_label:"2.1.7.1.1 API Overview",sidebar:"someSidebar",previous:{title:"2.1.6.2 Versioning",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_6-build/2_1_6_2-versioning"},next:{title:"2.1.7.1.2 Configuration",permalink:"/glasswall-sdk-site/docs/2-glasswall_core/2_1-glasswall_rebuild/2_1_7-sdk/2_1_7_1-api/2_1_7_1_2-configuration"}},c=[{value:"Introduction",id:"introduction",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This documents the Application Programming Interface (API) within the Windows Dynamic Link Library glasswall.classic.dll and the Linux shared object libglasswall.classic.so."),Object(i.b)("p",null,"The API provides the following functionality:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The production of reports detailing deep analysis of documents"),Object(i.b)("li",{parentName:"ul"},"The management of documents against a configurable content management policy"),Object(i.b)("li",{parentName:"ul"},"The force regeneration of documents against a configurable content management policy"),Object(i.b)("li",{parentName:"ul"},"The production of detailed process reporting"),Object(i.b)("li",{parentName:"ul"},"The modification of the content management policy")),Object(i.b)("p",null,"Where an API argument type is wchar_t, the argument must be converted to a wide character type before passing in to the API function."),Object(i.b)("p",null,"The code snippet below provides a framework showing how this might be done on a GNU/Linux system, where the default encoding of the file system is UTF-8 (which can be verified by using the locale(1P) command: locale charmap in a terminal window). For the purpose of the example below, a string literal in UTF-8 encoding has been used."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'    /* Standard C headers */ \n#include <limits.h> \n#include <locale.h> \n#include <string.h> \n#include <stdio.h> \n#include <stdlib.h> \n\n    /* platform dependent headers */ \n#include <iconv.h> \n\n    /* define error handler to print message and exit */ \n#define handle_error(msg) \\ \n        do { perror(msg); exit(EXIT_FAILURE); } while (0) \n\nint main(void) \n{ \n    char path[PATH_MAX] = "testfile/test.doc";\n    char *ppath = path; \n\n    wchar_t wcpath[PATH_MAX * sizeof(wchar_t)];\n    wchar_t * const pwcpath_start = wcpath; /* iconv() changes param values; preserve \nstart address */\n    char *pwcpath = (char *)wcpath;\n\n    size_t bpathremain = strlen(ppath)+1;           /* bytes, path remaining; +1 to\ninclude terminating null character */\n    size_t bwcpathremain = (PATH_MAX) * sizeof(wchar_t); /* bytes, wide character path \nremaining */\n    size_t retval;\n    eGwFileStatus rv;\n\n        /* convert from UTF-8 to wchar_t for API interface */\n    iconv_t cd = iconv_open("WCHAR_T", "UTF-8");\n    if (cd == (iconv_t)-1)\n        handle_error("iconv_open() FAILED");\n\n    /* Set the locale for LC_CTYPE to the implementation-defined native locale\n     * so the way the print and scan functions declared in <stdlib.h> and <stdio.h> \n     * correctly parse and translate multibyte strings\n     */ \n    setlocale(LC_CTYPE, "");\n\n    /* convert the file name from UTF-8 string to wide character string */\n    retval = iconv(cd, &ppath, &bpathremain, &pwcpath, &bwcpathremain);\n\n    if (retval == (size_t)-1)\n        handle_error("iconv() FAILED");\n\n        /* set up the policy */\n    rv = GWFileConfigXML(cmPolicy);\n    if (rv != eGwFileStatus_Success) \n    {\n        fprintf(stderr, "pGWFileConfigXML() FAILED with status %d\\n", rv);\n        exit(EXIT_FAILURE);\n\n     }\n\n        /* process the file */\n     rv = GWFileToFileProtectAndReport(pwcpath_start, L"doc", L"/tmp/generatedfile.doc",\n L"/tmp/generatedfile.log");\n     if (rv != eGwFileStatus_Success)\n    {\n         fprintf(stderr, "pGWFileToFileProtectAndReport() FAILED with status %d\\n", rv); \n         exit(EXIT_FAILURE);\n    }\n\n         /* tidy up */\n    rv = GWFileDone();\n    if (rv != eGwFileStatus_Success)\n    {\n        fprintf(stderr, "pGWFileDone() FAILED with status %d\\n", rv);\n        exit(EXIT_FAILURE);\n    }\n\n    exit(EXIT_SUCCESS);\n} /* end of function main */\n')))}p.isMDXComponent=!0},276:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},_=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),_=r,f=d["".concat(o,".").concat(_)]||d[_]||u[_]||i;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=_;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}_.displayName="MDXCreateElement"}}]);