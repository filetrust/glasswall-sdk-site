---
title: 2.1.7.1.6.3.4 File to Memory Location
sidebar_label: 2.1.7.1.6.3.4 File to Memory Location
---

These functions process the specified document and publish the resulting output to memory locations. Each of the function signatures requires the client application to provide a location to which the report or managed document can be written, along with a variable in which the size of the output is recorded. If the output file is not required, null pointers can be specified.

Parameters of type pointer to pointer are used by Glasswall to allocate memory for storing processed files and analysis reports. The client accesses the buffers through these parameters but is otherwise not responsible for managing the allocated memory except that  **GWFileDone**  must be called when processing is finished in order to release the allocated memory.

## Functions

- int [**GWFileAnalysisAudit **](#gwfileanalysisaudit)(wchar\_t \*inputFilePathName, wchar\_t \*wcType, void\*\*analysisFileBuffer, size\_t \*analysisFileBufferLength)

- int [**GWFileAnalysisAuditAndReport **](#gwfileanalysisauditandreport)(wchar\_t \*inputFilePathName, wchar\_t \*wcType, void\*\*analysisFileBuffer, size\_t \*analysisFileBufferLength, void \*\*reportFileBuffer, size\_t\*reportFileBufferLength)

- int [**GWFileProtect**](#gwfileprotect) (const wchar\_t \*inputFilePathName, const wchar\_t \*wcType, void\*\*outputFileBuffer, size\_t \*outputLength)

- int [**GWFileProtectAndReport**](#gwfileanalysisauditandreport) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, void\*\*outputFileBuffer, size\_t \*outputLength, void \*\*reportFileBuffer, size\_t\*reportFileBufferLength)

- int [**GWFileProtectLite**](#gwfileprotectlite) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, void \*\*outputFileBuffer, size\_t \*outputLength)

- int [**GWFileProtectLiteAndReport**](#gwfileprotectliteandreport) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, void\*\*outputFileBuffer, size\_t \*outputLength, void \*\*reportFileBuffer, size\_t\*reportFileBufferLength)

- int [**GWFileToMemoryAnalysisProtectAndExport**](#gwfiletomemoryanalysisprotectandexport) (const wchar\_t \*inputFilePathName, void\*\*outputFileBuffer, size\_t \*outputLength)

- int [**GWFileToMemoryProtectAndImport**](#gwfiletomemoryprotectandimport) (const wchar\_t \*inputFilePathName, void\*\*outputFileBuffer, size\_t \*outputLength)

## GWFileAnalysisAudit

**int GWFileAnalysisAudit (wchar\_t \* **_ **inputFilePathName** _ **, wchar\_t \* ** _ **wcType** _ **, void \*\* ** _ **analysisFileBuffer** _ **, size\_t \* ** _ **analysisFileBufferLength** _**)**

This function carries out an Analysis Audit on the specified file returning the analysis report to the specified memory location.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _analysisFileBuffer_ | analysis (XML) file buffer from Glasswall processing. |
| out | _analysisFileBufferLength_ | length of the analysisFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)

**Remarks**

Glasswall GWFileAnalysisAudit processing example.
```
// analysis file image buffer and length
void *analysisFileImage	= NULL;
size_t analysisFileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == GWFileAnalysisAudit(L"C:\\data\\temp1.pdf",
L"pdf", &analysisFileImage, &analysisFileImageLength))
    {
        // process the analysis image
    }
}

// release resources including global buffer 'analysisFileImage' 
GWFileDone();
```
## GWFileAnalysisAuditAndReport

**int GWFileAnalysisAuditAndReport (wchar\_t \* **_ **inputFilePathName** _ **, wchar\_t \* ** _ **wcType** _ **, void \*\* ** _ **analysisFileBuffer** _ **, size\_t \* ** _ **analysisFileBufferLength** _ **, void \*\* ** _ **reportFileBuffer** _ **, size\_t \* ** _ **reportFileBufferLength** _**)**

This function carries out an Analysis Audit on the specified file and produces a detailed report of the processing carried out, saving both outputs to the specified memory locations

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _analysisFileBuffer_ | analysis (XML) file buffer from Glasswall processing. |
| out | _analysisFileBufferLength_ | length of the analysisFileBuffer that has been allocated. |
| out | _reportFileBuffer_ | detailed report file buffer from Glasswall processing. |
| out | _reportFileBufferLength_ | length of the reportFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Remarks**

Glasswall GWFileAnalysisAuditAndReport processing example.
```
// analysis file image buffer and length 
void *analysisFileImage        = NULL; 
size_t analysisFileImageLength = 0;

void *fileReportImage	        = NULL;
size_t fileReportImageLength	= 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();
if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == 
GWFileAnalysisAuditAndReport(L"C:\\data\\temp1.pdf", L"pdf", 
&analysisFileImage, &analysisFileImageLength,

&fileReportImage, &fileReportImageLength))
    {
        // process the analysis image
        // process the report image
    }
}

// release resources including global buffers 'analysisFileImageLength' and
'fileReportImage'
GWFileDone();
```

## GWFileProtect

**int GWFileProtect (const wchar\_t \* inputFilePathName, const wchar\_t \* wcType, void \*\* outputFileBuffer, size\_t \* outputLength)**

This function protects the specified input file, returning the managed version of the file to the specified memory location.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| in,out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Remarks**

Glasswall GWFileProtect processing example.
```
// managed file output buffer and length 
void *fileImage        = NULL;
size_t fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(GWFileProtect(L"C:\\data\\temp1.pdf", L"pdf", &fileImage, 
&fileImageLength))
    {
        // process the managed file image
    }
}
else
{
    // error handling
}

// release resources including the global buffer 'fileImage' 
GWFileDone();
```

## GWFileProtectAndReport

**int GWFileProtectAndReport (wchar\_t \* inputFilePathName, wchar\_t \* wcType, void \*\* outputFileBuffer, size\_t \* outputLength, void \*\* reportFileBuffer, size\_t \* reportFileBufferLength)**

This function protects the specified input file, returning the managed version of the file and a detailed report of the processing done on the file to the specified memory locations.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |
| out | _reportFileBuffer_ | detailed report file buffer from Glasswall processing. |
| out | _eportFileBufferLength_ | length of the reportFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Remarks**

Glasswall GWFileProtectAndReport processing example This example sets the Glasswall configuration then manages the specified file using **GWFileProtectAndReport ()**.
```
// managed file output buffer and length 
void *fileImage          = NULL;
size_t fileImageLength	  = 0; 
void *reportImage	  = NULL; 
size_t reportImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
if( eGwFileStatus_Success == GWFileProtectAndReport(L"C:\\data\\temp1.pdf", 
L"pdf", &fileImage, &fileImageLength,

&reportImage, &reportImageLength )
    {
        // process the managed file image
        // process the report image
    }
}
else
{
    // error handling
}

// release resources including global buffers 'fileImage' and 'fileReportImage' 
GWFileDone();
```

## GWFileProtectLite

**int GWFileProtectLite (wchar\_t \* inputFilePathName, wchar\_t \* wcType, void \*\* outputFileBuffer, size\_t \* outputLength)**

This function is a restricted version of  **GWFileProtect**

This function protects the specified input file, returning the managed version of the file to the specified memory location.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| in,out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Remarks**

Glasswall GWFileProtectLite processing example.
```
// managed file output buffer and length 
void *fileImage        = NULL;
size_t fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == GWFileProtectLite(L"C:\\data\\temp1.pdf", 
L"pdf", &fileImage, &fileImageLength))
    {
        // process the managed file image   
    }
}
else
{
    // error handling
}

// release resources including the global buffer 'fileImage' 
GWFileDone();
```

## GWFileProtectLiteAndReport

**int GWFileProtectLiteAndReport (wchar\_t \* inputFilePathName, wchar\_t \* wcType, void \*\* outputFileBuffer, size\_t \* outputLength, void \*\* reportFileBuffer, size\_t \* reportFileBufferLength)**

This function is a restricted version of  **GWFileProtectAndReport**.

This function protects the specified input file, returning the managed version of the file and a detailed report of the processing done on the file to the specified memory locations.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |
| out | _reportFileBuffer_ | detailed report file buffer from Glasswall processing. |
| out | _reportFileBufferLength_ | length of the reportFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Remarks**

Glasswall GWFileProtectLiteAndReport processing example. This example sets the Glasswall configuration then manages the specified file using **GWFileProtectLiteAndReport()**.
```
// managed file output buffer and length 
void *fileImage          = NULL; 
size_t fileImageLength   = 0; 
void *reportImage        = NULL; 
size_t reportImageLength = 0; 

// Library configuration 
wchar_t* cmPolicy = getClientApplicationConfigurationXML();
 
if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy)) 
{
    if( eGwFileStatus_Success == GWFileProtectAndReport(L"C:\\data\\temp1.pdf", 
L"pdf", &fileImage, &fileImageLength, 

&reportImage, &reportImageLength )
   { 
        // process the managed file image
        // process the report image
   }
}
else 
{ 
    // error handling 
}
// release resources including global buffers 'fileImage' and 'fileReportImage' 
GWFileDone();
```

## GWFileToMemoryAnalysisProtectAndExport

**int GWFileToMemoryAnalysisProtectAndExport (const wchar\_t \* inputFilePathName, void \*\* outputFileBuffer, size\_t \* outputLength)**

This function manages the specified file, carries out an Analysis Audit, extracts any text and image content which can be isolated, and returns the results in a block of memory owned and allocated by the Glasswall DLL.

The output file will be a zip archive containing the following:

- Glasswall XML analysis extended to include additional information and metadata which can be used to identify a particular item of image or text data within the export package and identify its point of origin within the original document for re-insertion after further processing if required. Note: Re-insertion is currently only supported for image files.

- The managed file.

- The extracted image and/or text data with each item taking the form of a separate file within the zip archive.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Attention**

The memory buffer holding the output file image is allocated and owned by the Glasswall library. Input file type will be automatically detected.

**Remarks**

Glasswall GWFileToMemoryAnalysisProtectAndExport processing example.
```
// managed file output buffer and length
void *fileImage        = NULL;
size_t fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if (eGwFileStatus_Success == 
GWFileToMemoryAnalysisProtectAndExport(L"C:\\data\\temp1.pdf", &fileImage, 
&fileImageLength))
    {
        // extract content of output package
        // process managed file if it was managed successfully
        // process analysis file
        // Process exported content files
    }
}
else
{
    error handling
}
```

## GWFileToMemoryProtectAndImport

**int GWFileToMemoryProtectAndImport (const wchar\_t \* inputFilePathName, void \*\* outputFileBuffer, size\_t \* outputLength)**

This function takes a file in the form of a zip archive originally generated by GWFileToFileAnalysisProtectAndExport, extracts the managed file, the XML analysis file, and externally validated (and if neccessary and/or appropriate reconstructed) image data and uses the metadata encoded into the analysis file to regenerate the managed file replacing the original image content replaced with the externally processed versions. The regenerated file is returned in the form of a block of memory allocated and owned by the Glasswall DLL.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| out | _outputFileBuffer_ | output file buffer from Glasswall processing. |
| out | _outputLength_ | length of the outputFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](2_1_7_1_6_3_2-doc_processing_args.md#process-return-status)


**Attention**

The memory buffer holding the output file image is allocated and owned by the Glasswall library.

**Remarks**

Glasswall GWFileToMemoryProtectAndImport processing example.
```
// managed file output buffer and length 
void *fileImage        = NULL;
size_t fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy	= getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == 
GWFileToMemoryProtectAndImport(L"C:\\data\\output\\import1.zip", &fileImage, 
&fileImageLength))
    {
        // process output file
    }
    else
    {
        // error handling
    }
}
else
{
    // error handling
}
```