---
title: 2.1.7.1.1 API Overview
sidebar_label: 2.1.7.1.1 API Overview
---

## Glossary

| **Term** | **Description** |
| --- | --- |
| **Session** | A session encapsulates the processing of a single file, specified either as a file path or a pointer to a memory image of the file.The session is given information regarding the required output of the session, the policies to be applied, and any other actions required. |
| **Base name** | The base name refers to a path. It is the component left after all leading directory components have been removed. The base name can refer to a directory or file. |

## Introduction

This documents the Application Programming Interface (API) within the Windows Dynamic Link Library glasswall.classic.dll and the Linux shared object libglasswall.classic.so.

The API provides the following functionality:

- The production of reports detailing deep analysis of documents
- The management of documents against a configurable content management policy
- The force regeneration of documents against a configurable content management policy
- The production of detailed process reporting
- The modification of the content management policy

Where an API argument type is wchar_t, the argument must be converted to a wide character type before passing in to the API function.

The code snippet below provides a framework showing how this might be done on a GNU/Linux system, where the default encoding of the file system is UTF-8 (which can be verified by using the locale(1P) command: locale charmap in a terminal window). For the purpose of the example below, a string literal in UTF-8 encoding has been used.

```
    /* Standard C headers */ 
#include <limits.h> 
#include <locale.h> 
#include <string.h> 
#include <stdio.h> 
#include <stdlib.h> 

    /* platform dependent headers */ 
#include <iconv.h> 

    /* define error handler to print message and exit */ 
#define handle_error(msg) \ 
        do { perror(msg); exit(EXIT_FAILURE); } while (0) 

int main(void) 
{ 
    char path[PATH_MAX] = "testfile/test.doc";
    char *ppath = path; 

    wchar_t wcpath[PATH_MAX * sizeof(wchar_t)];
    wchar_t * const pwcpath_start = wcpath; /* iconv() changes param values; preserve 
start address */
    char *pwcpath = (char *)wcpath;

    size_t bpathremain = strlen(ppath)+1;           /* bytes, path remaining; +1 to
include terminating null character */
    size_t bwcpathremain = (PATH_MAX) * sizeof(wchar_t); /* bytes, wide character path 
remaining */
    size_t retval;
    eGwFileStatus rv;

        /* convert from UTF-8 to wchar_t for API interface */
    iconv_t cd = iconv_open("WCHAR_T", "UTF-8");
    if (cd == (iconv_t)-1)
        handle_error("iconv_open() FAILED");

    /* Set the locale for LC_CTYPE to the implementation-defined native locale
     * so the way the print and scan functions declared in <stdlib.h> and <stdio.h> 
     * correctly parse and translate multibyte strings
     */ 
    setlocale(LC_CTYPE, "");

    /* convert the file name from UTF-8 string to wide character string */
    retval = iconv(cd, &ppath, &bpathremain, &pwcpath, &bwcpathremain);

    if (retval == (size_t)-1)
        handle_error("iconv() FAILED");

        /* set up the policy */
    rv = GWFileConfigXML(cmPolicy);
    if (rv != eGwFileStatus_Success) 
    {
        fprintf(stderr, "pGWFileConfigXML() FAILED with status %d\n", rv);
        exit(EXIT_FAILURE);

     }

        /* process the file */
     rv = GWFileToFileProtectAndReport(pwcpath_start, L"doc", L"/tmp/generatedfile.doc",
 L"/tmp/generatedfile.log");
     if (rv != eGwFileStatus_Success)
    {
         fprintf(stderr, "pGWFileToFileProtectAndReport() FAILED with status %d\n", rv); 
         exit(EXIT_FAILURE);
    }

         /* tidy up */
    rv = GWFileDone();
    if (rv != eGwFileStatus_Success)
    {
        fprintf(stderr, "pGWFileDone() FAILED with status %d\n", rv);
        exit(EXIT_FAILURE);
    }

    exit(EXIT_SUCCESS);
} /* end of function main */
```

## Code Examples

Code information is shown in this font: code example

This monospace font differentiates code from normal text and avoids confusion with upper and lower case letters. For example, compare the code font &#39;lInfoFlag1&#39; with the normal font &#39;lInfoFlag1&#39;. The upper case L and lower case l look the same in the normal font.

Code examples are shown in a shaded box. For example:
```
#include &quot;glasswall.core2.api.h&quot;
Session session = GW2OpenSession();
if (!session)
/\* deal with error \*/
else
/\* use session to refer to the session in other API function calls \*/
/\* later \*/
if (GW2CloseSession(session))
/\* error closing session \*/
```

## Glasswall Technology

Glasswall provides deep-file inspection, remediation, sanitisation and reporting. The Glasswall API functions give third-party users the ability to fine-tune an interface to the Glasswall functionality.

## Types

The API makes available two enumerations for use by clients as argument types to certain API functions. Include the header file &quot;glasswall.core2.api.h&quot; in your source file and use the enumerators when calling the API functions.

### Policy\_format

The enumeration Policy\_format is used to specify the format of the policies file. The following enumerator is available:

PF\_XML

### Analysis\_format

The enumeration Analysis\_format is used to specify the format of the analysis file. The following enumerator is available:

AF\_XML

### ft\_t

The enumeration Ft\_t is used to indicate the file type (file format) of a file. Include header file &quot;filetype.h&quot; in your source code files to use them.

Note: This is marked for change to &#39;Ft\_t&#39;. Examples in the document use &#39;Ft\_t&#39;.

### Session

Session is a type that represents a file and the mechanisms used to process that file. It is used by all Glasswall file processing A.P.I. functions.

Note: This is marked for change to &#39;SessionHandle&#39;.

## Return Types

Most of the functions in the Glasswall API return a value that indicates success or failure. The values and their meaning are listed below.

| **Value** | **Meaning** |
| --- | --- |
| **-2** | End of file was detected unexpectedly. |
| **-1** | Glasswall failed to process the file; general failure. |
| **0** | The file was processed successfully; general success. |
| **1** | The file was processed successfully and cleaning was performed. |

Each of the functions described in §3 assumes that one of these values is returned unless stated otherwise in the detailed description.

# Application Programming Interface

The Application Programming Interface (API) is session based.  **Session**  is a type that represents a file and the mechanisms used to process that file. You create a  **Session**  object by calling  **GW2OpenSession**  which returns a session handle. You pass the session handle to other API functions to register the inputs and outputs, the forms of the inputs and outputs (memory or a file) and which processing mode is required (Analysis, Manage &amp; Protect, Import, Export). You then process the file by calling function  **GW2RunSession**  and close the session calling  **GW2CloseSession** , after processing any non-persistent storage, or saving non-persistent storage.

The encapsulation of the processing of each file in a  **Session**  object allows multi-thread processing.

# Summary of API Function Calls

The table below lists all the Core 2 API registration functions. Each row specifies a File Storage Mode and Process Mode and the API functions to call to activate them for a session are indicated with &#39;Y&#39;. The report file and policies can be applied to any mode, and an analysis report can be requested during Import and Export as well.

# Summary of API Functions

int GW2CloseSession(Session session);

ft\_t GW2DetermineFileTypeFromFile(const char \*path);

ft\_t GW2DetermineFileTypeFromMemory(const char \*inputFileBuffer, size\_t inputLength);

int GW2FileErrorMsg(Session session, char \*\*errorMsgBuffer, size\_t \*errorMsgBufferLength);

int GW2FileSessionStatus(Session session, int \*glasswallSessionStatus, char \*\*statusMsgBuffer, size\_t \*statusbufferLength);

int GW2GetAllIdInfo(Session session, size\_t \*bufferLength, char \*\*outputBuffer);

int GW2GetIdInfo(Session session, size\_t issueId, size\_t \*bufferLength, char \*\*outputBuffer);

int GW2GetPolicySettings(Session session, char \*\*policiesBuffer, size\_t \*policiesLength, Policy\_format format);

const char \*GW2LibVersion(void );

Session GW2OpenSession(void );

int GW2RegisterAnalysisFile(Session session, const char \*analysisFilePathName, Analysis\_format format);

int GW2RegisterAnalysisMemory(Session session, char \*\*analysisFileBuffer, size\_t \*analysisoutputLength, Analysis\_format format);

int GW2RegisterExportFile(Session session, const char \*exportFilePath);

int GW2RegisterExportMemory(Session session, char \*\*exportFileBuffer, size\_t \*exportLength);

int GW2RegisterImportFile(Session session, const char \*importFilePath);

int GW2RegisterImportMemory(Session session, char \*importFileBuffer, size\_t importLength);

int GW2RegisterInputFile(Session session, const char \*inputFilePath);

int GW2RegisterInputMemory(Session session, const char \*inputFileBuffer, size\_t inputLength);

int GW2RegisterOutFile(Session session, const char \*outputFilePath);

int GW2RegisterOutputMemory(Session session, char \*\*outputBuffer, size\_t \*outputLength);

int GW2RegisterPoliciesFile(Session session, const char \*filename, Policy\_format format);

int GW2RegisterPoliciesMemory(Session session, char \*policies, size\_t policiesLength, Policy\_format format);

int GW2RegisterReportFile(Session session, const char \*reportFilePathName);

int GW2RunSession(Session session);
