---
title: 2.2.6.1.2 API Functions
sidebar_label: 2.2.6.1.2 API Functions
---

The following functions are available (each topic includes details and, where applicable, examples):

## GW2CloseSession

### *Synopsis**
```
#include &quot;glasswall.core2.api.h&quot; 
int GW2CloseSession(Session session);
```
### **Description**

The  **GW2CloseSession**  function closes the session designated by  **session**. All resources allocated by the session will be destroyed. Only data stored to persistent storage can be processed by the client after a successful call to  **GW2CloseSession**.

### **Returns**

If successful, the  **GW2CloseSession**  function returns zero; otherwise, it returns non-zero.

## GW2DetermineFileTypeFromFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;
Ft\_t GW2DetermineFileTypeFromFile(const char \*path);
```
### **Description**

The  **GW2DetermineFileTypeFromFile**  function determines the file type for the file whose name is the string pointed to by  **path**.

### **Returns**

If  **GW2DetermineFileTypeFromFile**  cannot discern the file type, it returns the value of the enumeration constant  **ft\_unknown**  from the enumerated type  **ft\_t** ; otherwise, it returns a value from the enumerated type  **ft\_t**  indicating the file type. A list of the enumeration constants is in the C source header file  **filetypes.h**.

### **Example**
```
#include "glasswall.core2.api.h"
#include “filetypes.h”

ft_t file_type = GW2DetermineFileTypeFromFile("c:\\dir1\\dir2\\filename");
char *type = NULL;
switch (file_type)   /* categorise them */
{
    case ft_doc:
    case ft_docx:
    case ft_ppt:
    case ft_pptx:
    case ft_xls:
    case ft_xlsx:
        type = "Microsoft Office";
        break;

    case ft_png:
    case ft_jpg:
    case ft_gif:
    case ft_tiff:
        type = "Image file";
        break;

    case ft_pdf:
        type = "PDF";
        break;

    default:
        type = "Unrecognised file type";
        break;
}
```

## GW2DetermineFileTypeFromMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

Ft\_t GW2DetermineFileTypeFromFile(const char \*inputFileBuffer, size\_t

inputLength);
```
### **Description**

The  **GW2DetermineFileTypeFromMemory**  function determines the file type of the file whose content is in the buffer pointed to by  **inputFileBuffer**.

### **Returns**

If  **GW2DetermineFileTypeFromMemory**  cannot discern the file type, it returns the value of the enumeration constant  **ft\_unknown**  from the enumerated type  **ft\_t** ; otherwise, it returns a value from the enumerated type  **ft\_t**  indicating the file type. A list of the enumeration constants is in the C source header file  **filetypes.h**.

## GW2FileErrorMsg

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2FileErrorMsg(Session session, char \*\*errorMsgBuffer, size\_t

\*errorMsgBufferLength);
```
### **Description**

The  **GW2FileErrorMsg**  function retrieves the error message reported by Glasswall. A pointer to the error message is placed in the object pointed to by  **errorMsgBuffer**  and the size, in bytes, of the error message is placed in the  **size\_t**  object pointed to by  **errorMsgBufferLength**.

If there was more than one reason for the error, only one will be reported by this function call. If details are required for the failure, they will be present in the analysis report produced if either of the functions  **GW2RegisterAnalysisFile**  or  **GW2AnalysisRegisterMemory**  were called on the session. If not, the document can be processed by Glasswall using either of those functions in another session to produce a detailed analysis report.

## GW2FileSessionStatus

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2FileSessionStatus(Session session, int \*glasswallSessionStatus, char \*\*statusMsgBuffer, size\_t \*statusBufferLength);
```
For session  **session**  the  **GW2FileSessionStatus**  function places in the object pointed to by  **glasswallSessionStatus**  a pointer to a string that describes, at a high level, the processing carried out on the last document processed by Glasswall.

### **Returns**

If  **session**  is invalid (0 or a value that has not been returned by  **GW2OpenSession** ), it will return -1 and  **glasswallSessionStatus** ,  **statusMsgBuffer**  and  **statusBufferLength**  will be undefined. If session is valid, the function returns 0 and  **glasswallSessionStatus** ,  **statusMsgBuffer**  and  **statusBufferLength**  will be populated.

## GW2GetAllIdInfo

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2GetAllIdInfo(Session session, size\_t \*bufferLength,

char \*\*outputBuffer);
```
###  **Description**

For session  **session**  the  **GW2GetAllIdInfo**  function places in the object pointed to by  **outputBuffer**  a pointer to XML data populated with Glasswall Issue ID descriptions and value ranges. The length, in bytes, of the populated output buffer is placed in the  **size\_t**  object pointed to by  **bufferLength**.

###  **Example**
```
#include &quot;glasswall.core2.api.h&quot;

char \*outbuf = NULL;

size\_t buflen = 0;

if (GW2OpenSession())

/\* error opening session \*/

else

{

int status = GW2GetAllIdInfo(session, &amp;buflen, &amp;outbuf);

/\* if status is not 0, outbuf points to a buffer containing the XML file.

\* Either process the data pointed to, or copy the data and process it

\* after the session is closed

\*/

if (GW2CloseSession())

/\* error closing session \*/

}
```
## GW2GetIdInfo

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2GetIdInfo(Session session, size\_t issueId, size\_t \*bufferLength, char
\*\*outputBuffer);
``` 
### **Description**

For session  **session** ,  **GW2GetIdInfo**  places in the object pointed to by  **outputBuffer** , a pointer to a description of Glasswall Issue ID  **issueId**. The length of the description, in bytes, is placed in the  **size\_t**  object pointed to by  **bufferLength**.

**Example**
```
#include &quot;glasswall.core2.api.h&quot;

char \*outbuf = NULL;

size\_t buflen = 0;

if (GW2OpenSession())

/\* error opening session \*/

else

{

int status = GW2GetIdInfo(session, issueId, &amp;buflen, &amp;outbuf);

/\* if status is not 0, outbuf points to a buffer containing the XML file.

\* Either process the data pointed to, or copy the data and process it

\* after GW2CloseSession is called

\*/

if (GW2CloseSession())

/\* error closing session \*/

}
```
## GW2GetPolicySettings

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2GetPolicySettings (Session session, char \*\*policiesBuffer, size\_t

\*policiesLength, Policy\_format format);
```
### **Description**

The  **GW2GetPolicySettings**  function returns the policy settings used for session  **session**. A pointer to the information is placed in the object pointed to by  **policiesBuffer**  and the size, in bytes, of the data pointed to is placed in the  **size\_t**  object pointed to by  **policiesLength**. The format of the data will be in the format specified by  **format**.

## GW2LibVersion

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

const char \*GW2LibVersion(void);
```
### **Description**

The  **GW2LibVersion**  function returns a pointer to a constant string describing the current version of the Glasswall Core 2 library.

###  **Example**
```
#include \&lt;stdio.h\&gt;

#include &quot;glasswall.core2.api.h&quot;

puts(GW2LibVersion());
```
## GW2OpenSession

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;
Session GW2OpenSession(void);
```
### **Description**

The  **GW2OpenSession**  function creates a new session.

### **Returns**

If successful, the  **GW2OpenSession**  function returns a handle, a small positive integer that designates the session. The handle is used as an argument to other API functions to identify the session. If the call fails, the handle will be zero.

### **Example**
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
## GW2RegisterAnalysisFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterAnalysisFile(Session session, const char \*analysisFilePath,

Analysis\_format format);
```
### **Description**

The  **GW2RegisterAnalysisFile**  function stores in the file whose name is pointed to by string  **analysisFilePath**  the analysis report produced by a successful run of API function  **runSession**  that used session  **session**. Using this function activates the Analysis Process Mode for the session.

###  **Example**
```
#include &quot;glasswall.core2.api.h&quot;

Session session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

if (GW2RegisterAnalysisFile(session,

&quot;c:\\analysis\_files\\analysis\_file\_023.xml&quot;,

AF\_XML)

)

/\* deal with error \*/

else

/\* analysis file registered \*/

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterAnalysisMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterAnalysisMemory(Session session, char \*\*analysisFileBuffer,
size\_t \*analysisLength, Analysis\_format format);
```
### **Description**

The  **GW2RegisterAnalysisMemory**  function stores in the object pointed to by  **analysisFileBuffer**  a pointer to the analysis report produced by a successful run of API function  **runSession**  that used session  **session**. The size of the analysis report, in bytes, is placed in the object pointed to by  **analysisLength**. The format of the analysis report will be in the format requested by  **format**. Using this function activates the Analysis Process Mode for the session.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session;

char \*analysisReport = NULL;

session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

if (GW2RegisterAnalysisMemory(session, &amp;analysisReport, PF\_XML))

/\* deal with error \*/

else

/\* analysisReport points to the analysis report data \*/

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterExportFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterExportFile(Session session, const char \*exportFilePath);
```
### **Description**

The  **GW2RegisterExportFile**  function registers the file whose name is the string pointed to by  **exportFilePath**  with the session denoted by  **session**. The exported data will be placed in that file. Using this function activates the Export Process Mode for the session.

## GW2RegisterExportMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterExportMemory(Session session, char \*\*exportFileBuffer, size\_t
\*exportFileBufferLength);
```
### **Description**

For session  **session** , the  **GW2RegisterExportMemory**  function registers where the exported content is to be placed, and where to place the size in bytes of the exported content. A pointer to the exported content will be placed in the object pointed to by  **exportFileBuffer**  and the size in bytes of the exported data will be placed in the  **size\_t**  object pointed to by  **exportFileBufferLength**. The exported content will be deleted when the session is closed using  **GW2CloseSession**. Using this function activates the Export Process Mode for the session.

## GW2RegisterImportFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterImportFile(Session session, const char \*importFilePath);
```
### **Description**

The  **GW2RegisterImportFile**  function registers the file whose name is pointed to by  **importFilePath**  as the file it should import. The file must conform to the interchange file format. Using this function activates the Import Process Mode for the session.

## GW2RegisterImportMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterImportMemory(Session session, char \*importFileBuffer,

size\_t \*importLength);
```
###  **Description**

The  **GW2RegisterImportMemory**  function registers with the session denoted by  **session**  the file which is stored in the buffer pointed to by  **importFilePath**  of size  **inputLength**  bytes as the file it should import. The file must conform to the interchange file format. Using this function activates the Import Process Mode for the session.

## GW2RegisterInputFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterInputFile(Session session, const char \*inputFilePath);
```
###  **Description**

The  **GW2RegisterInputFile**  function registers the file to be processed in session  **session**. The file name is the string pointed to by  **inputFilePath**.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

{

if (GW2RegisterInputFile(session, &quot;filename.doc&quot;))

/\* deal with error \*/

else

/\* continue processing \*/

...

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterInputMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;
int GW2RegisterInputMemory(Session session, const char \*inputFileBuffer, size\_t
inputLength);
```
### **Description**

The  **GW2RegisterInputMemory**  function registers the file which is stored in the buffer pointed to by  **inputFileBuffer**  of size  **inputLength**  bytes, with the session denoted by  **session**.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

. . .

HANDLE session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

{

/\* ... load file contents into buffer &#39;buf&#39; and log the file size in &#39;size&#39; ...\*/

if (GW2RegisterInputMemory(session, buf, size))

/\* deal with error \*/

else

/\* continue processing \*/

...

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterOutputFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterOutFile(Session session, const char \*outputFilePath);
```
### **Description**

For session  **session**  the  **GW2RegisterOutputFile**  function registers the file whose name is the string pointed to by  **outputFileBuffer**  as the destination file for the managed file produced by Glasswall. The base name of the path must be different to the base name registered using the  **GW2RegisterInputFile**  function. Using this function activates the Manage &amp; Protect Process Mode for the session.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

{

if (GW2RegisterOutFile(session, &quot;managed\_file.docx&quot;))

/\* deal with error \*/

else

/\* continue processing \*/

...

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterOutputMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterOutputMemory(Session session, char \*\*outputBuffer, size\_t
\*outputLength);
```
### **Description**

For session session, the  **GW2RegisterOutputMemory**  function registers where the managed content is to be placed, and where to place the size in bytes of the managed content. A pointer to the managed file content will be placed in the object pointed to by  **outputBuffer**  and the size in bytes of the managed data will be placed in the  **size\_t**  object pointed to by  **outputLength**. The managed file content will be deleted when the session is closed using  **GW2CloseSession**. Using this function activates the Manage &amp; Protect Process Mode for the session.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session = GW2OpenSession();

char \*managed\_content = NULL;

size\_t size = 0;

if (!session)

/\* deal with error \*/

else

{

if (GW2RegisterOutputMemory(session, &amp;managed\_content, &amp;size))

/\* deal with error \*/

else

/\* continue processing \*/

...

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/

else

/\* managed file content has been deleted \*/
```
## GW2RegisterPoliciesFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterPoliciesFile(Session session, const char \*filename,

Policy\_format format);
```
### **Description**

The  **GW2RegisterPoliciesFile**  function requests that session  **session**  uses the policies specified in the file whose name is the string pointed to by  **filename**. The format of the policies is in the format specified by  **format**. The policies will be applied to all processing performed by Glasswall for that session.

If neither  **GW2RegisterPoliciesFile**  or  **GW2RegisterPoliciesMemory**  is registered with a session, the default policies will be applied to that session.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

if (GW2RegisterPoliciesFile(session, &quot;Office\_Binary\_Policies.xml&quot;, PF\_XML))

/\* deal with error \*/

else

/\* the file has been successfully registered \*/

. . .

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterPoliciesMemory

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterPoliciesMemory(Session session, const char \*policies, size\_t
policiesLength, Policy\_format format);
```
### **Description**

For session  **session** , the  **GW2RegisterPoliciesMemory**  function registers the policies to be used by Glasswall when processing files.  **policies**  is a pointer to the policies data,  **policiesLength**  specifies the size in bytes of the policies data, and  **policiesFormat**  specifies the format of the policies data.

If neither  **GW2RegisterPoliciesFile**  or  **GW2RegisterPoliciesMemory**  is registered with a session, the default policies will be applied to that session.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

Session session = GW2OpenSession();

char \*policies = NULL;

size\_t size = 0;

if (!session)

/\* deal with error \*/

else

{

/\* ... load &#39;policies&#39; with a pointer to the policies content ... \*/

if (GW2RegisterPoliciesMemory(session, policies, size, PF\_XML))

/\* deal with error \*/

else

/\* continue processing \*/

...

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```
## GW2RegisterReportFile

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RegisterReportFile(Session session, const char \*reportFilePathName);
```
### **Description**

For session  **session** , the  **GW2RegisterReportFile**  function registers the name of the file where the engineering log file is to be placed. The name is the string pointed to by  **reportFilePathName**.

## GW2RunSession

### **Synopsis**
```
#include &quot;glasswall.core2.api.h&quot;

int GW2RunSession(Session session);
```
### **Description**

The  **GW2RunSession**  function runs session  **session** , using all the previously registered artifacts.

### **Example**
```
#include &quot;glasswall.core2.api.h&quot;

HANDLE session = GW2OpenSession();

if (!session)

/\* deal with error \*/

else

{

/\* ... register other artifacts ... \*/

if (GW2RunSession(session))

/\* error running the session \*/

}

/\* later \*/

if (GW2CloseSession(session))

/\* error closing session \*/
```