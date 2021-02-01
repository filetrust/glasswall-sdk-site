---
title: 8.1.9.6.3.6.5 File to File
sidebar_label: 8.1.9.6.3.6.5 File to File
---

These functions process the specified document and publish the resulting output to the specified file locations. Each of the function signatures requires the client application to specify file locations to which the reports or managed documents can be written. It is the responsibility of the client application to ensure that the folder containing the specified file location exists. If the containing folder does not exist, or &#39;write privileges&#39; are not enabled, the processing function will return a negative error status, [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS).

## Functions

- nt [**GWFileToFileAnalysisAudit**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, wchar\_t \*analysisFilePathName)

- int [**GWFileToFileAnalysisAuditAndReport**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo2) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, wchar\_t \*analysisFilePathName, wchar\_t \*reportFilePathName)

- int [**GWFileToFileAnalysisProtectAndExport**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo3) (const wchar\_t \*inputFilePathName, const wchar\_t \*exportFilePathName)

- int [**GWFileToFileProtect**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo4) (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* outputFilePathName)

- int [**GWFileToFileProtectAndImport**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo5) (const wchar\_t \* inputFilePathName, const wchar\_t \* outputFilePathName)

- int [**GWFileToFileProtectAndReport**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo6) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, wchar\_t \*outputFilePathName, wchar\_t \*reportFilePathName)

- int [**GWFileToFileProtectLite**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo7) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, wchar\_t \*outputFilePathName)

- int [**GWFileToFileProtectLiteAndReport**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm#GWFileTo8) (wchar\_t \*inputFilePathName, wchar\_t \*wcType, wchar\_t \*outputFilePathName, wchar\_t \*reportFilePathName)

## GWFileToFileAnalysisAudit

**int GWFileToFileAnalysisAudit (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* analysisFilePathName)**

This function carries out an Analysis Audit on the specified file, saving the resultant report to the specified file location.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| in,out | _analysisFilePathName_ | destination for analysis (XML) file from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileAnalysisAudit processing example with analysis.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
createFolder("C:\\data\\audit.issues");

if(eGwFileStatus_Success == 
GWFileToFileAnalysisAudit(L"C:\\data\\temp1.pdf", L"pdf", 
L"C:\\data\\audit.issues\\temp1_.xml"))
    {
        // process analysis report 
    }
}
```

## GWFileToFileAnalysisAuditAndReport

**int GWFileToFileAnalysisAuditAndReport (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* analysisFilePathName, wchar\_t \* reportFilePathName)**

This function carries out an analysis audit on the specified file saving the results and a detailed report to the specified files.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _analysisFileBuffer_ | analysis (XML) file buffer from Glasswall processing. |
| out | _analysisFileBufferLength_ | length of the analysisFileBuffer that has been allocated. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileAnalysisAuditAndReport processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == 
GWFileToFileAnalysisAuditAndReport(L"C:\\data\\temp1.pdf", L"pdf", 
L"C:\\data\\output\\temp1_audit.xml", L"C:\\data\\output\\temp1_audit.log"))
    {
        // process analysis file
        // process report file
    }
}
```
## GWFileToFileAnalysisProtectAndExport

**int GWFileToFileAnalysisProtectAndExport (const wchar\_t \* inputFilePathName, const wchar\_t \* exportFilePathName)**

This function manages the specified file, carries out an Analysis Audit, extracts any text and image content which can be isolated, and saves the results to the specified file location.

The output will be a zip archive file with the following:

- Glasswall XML analysis report extended to include additional information and metadata which can be used to identify a particular item of image or text data within the export package and identify its point of origin within the original document for re-insertion after further processing if required. Note: Re-insertion is currently only supported for image files.

- The managed file.

- The extracted image and/or text data with each item taking the form of a separate file within the zip archive.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| out | _exportFilePathNam_ | destination for content export (zip) file from Glasswall processing |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions. Input file type will be automagically detected.

**Remarks**

Glasswall GWFileToFileAnalysisProtectAndExport processing example.
```
// Library configuration
eGwFileStatus status  = eGwFileStatus_Error;
wchar_t* cmPolicy     = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    status = GWFileToFileAnalysisProtectAndExport(L"C:\\data\\temp1.pdf", 
L"C:\\data\\output\\temp1.zip"));

    if( status != eGwFileStatus_SuccessExportWriteFailure
         && status != eGwFileStatus_ErrorExportWriteFailure )
    {
        // extract content of output package.
        // process managed file if it was managed successfully
        // process analysis file
        // process exported content files
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
## GWFileToFileProtect

**int GWFileToFileProtect (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* outputFilePathName)**

This function Manages the specified file saving the managed output to the specified file.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| in | _outputFilePathName_ | destination for output file from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileProtect processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    createFolder("C:\\output");

    if(eGwFileStatus_Success == GWFileToFileProtect(L"C:\\data\\temp1.pdf", 
L"pdf", L"C:\\output\\temp1.pdf"))
    {
        // process output file
    }
}
else
{
    // error handling
}
```

## GWFileToFileProtectAndImport

**int GWFileToFileProtectAndImport (const wchar\_t \* inputFilePathName, const wchar\_t \* outputFilePathName)**

This function takes a file in the form of a zip archive originally generated by GWFileToFileAnalysisProtectAndExport, extracts the managed file, the XML analysis file, and externally validated (and if necessary and/or appropriate reconstructed) image data and uses the metadata encoded in the analysis file to regenerate the managed file replacing the original image content replaced with the externally processed versions.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _outputFilePathName_ | destination for output file from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions. Input file type will be automatically detected.

**Remarks**

Glasswall GWFileToFileProtectAndImport processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    if(eGwFileStatus_Success == 
GWFileToFileProtectAndImport(L"C:\\data\\output\\temp1.zip", 
L"C:\\output\\import1.pdf" ))
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

## GWFileToFileProtectAndReport

**int GWFileToFileProtectAndReport (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* outputFilePathName, wchar\_t \* reportFilePathName)**

This function Manages the specified file, saving the managed output and a detailed process log to the specified file locations.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _outputFilePathName_ | destination for output file from Glasswall processing. |
| out | _reportFilePathName_ | detailed report file buffer from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileProtectAndReport processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();
if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    createFolder("C:\\data\\output");

    if(eGwFileStatus_Success == 
GWFileToFileProtectAndReport(L"C:\\data\\temp1.pdf", L"pdf", 
L"C:\\data\\output\\temp1.pdf", L"C:\\data\\output\\temp1.log"))
    {
        // process managed file
        // process report file
    }
}
else
{
    // error handling
}
```

## GWFileToFileProtectLite

**int GWFileToFileProtectLite (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* outputFilePathName)**

This function is a restricted version of  **GWFileToFileProtect**.

This function Manages the specified file saving the managed output to the specified file.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| in | _outputFilePathName_ | destination for output file from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileProtectLite processing example.
```
// managed file output buffer and length void *fileImage = NULL;
fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    createFolder("C:\\output\\");

    if(eGwFileStatus_Success == GWFileToFileProtectLite( "C:\\data\\temp1.pdf", 
"pdf", "C:\\output\\temp1.pdf" )
    {
        // process output file
    }
}
else
{
    // error handling
}
```

## GWFileToFileProtectLiteAndReport

**int GWFileToFileProtectLiteAndReport (wchar\_t \* inputFilePathName, wchar\_t \* wcType, wchar\_t \* outputFilePathName, wchar\_t \* reportFilePathName)**

This function is a restricted version of GWFileToFileProtectAndReport

This function Manages the specified file, saving the managed output and a detailed process log to the specified file locations.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| in | _wcType_ | file data type |
| out | _outputFilePathName_ | destination for output file from Glasswall processing. |
| out | _reportFilePathName_ | detailed report file buffer from Glasswall processing. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Attention**

The folders specified in the paths of the output files must already exist and have appropriate write permissions.

**Remarks**

Glasswall GWFileToFileProtectLiteAndReport processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    createFolder("C:\\data\\output");

    if(eGwFileStatus_Success == 
GWFileToFileProtectLiteAndReport(L"C:\\data\\temp1.pdf", L"pdf", 
L"C:\\data\\output\\temp1.pdf", L"C:\\data\\output\\temp1.log"))
    {
        // process managed file
        // process report file
    }
}
else
{
    // error handling
}
```