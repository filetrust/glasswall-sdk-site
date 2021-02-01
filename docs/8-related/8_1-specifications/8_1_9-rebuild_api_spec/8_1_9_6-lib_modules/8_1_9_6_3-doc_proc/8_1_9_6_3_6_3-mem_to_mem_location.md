---
title: 8.1.9.6.3.6.3 Memory to Memory Location
sidebar_label: 8.1.9.6.3.6.3 Memory to Memory Location
---
These functions process the document provided in a specified memory location and publish the resulting output to memory locations. Each of the function signatures requires the client application to provide a location to which the report or regenerated document can be written, along with a variable in which the size of the output is recorded. If the output file is not required, null pointers can be specified.

Parameters of type pointer to pointer are used by Glasswall to allocate memory for storing processed files and analysis reports. The client accesses the buffers through these parameters but is otherwise not responsible for managing the allocated memory except that  **GWFileDone**  must be called when processing is finished in order to release the allocated memory.

## Functions

- int [**GWMemoryToMemoryAnalysisAudit**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20Memory%20to%20Memory%20Location.htm#GWMemory)(void \*inputBuffer, size\_t inputBufferLength, wchar\_t \*wcType, void \*\*analysisFileBuffer, size\_t \*analysisFileBufferLength)

- int [**GWMemoryToMemoryProtect**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20Memory%20to%20Memory%20Location.htm#GWMemory2)(void \*inputBuffer, size\_t inputBufferLength, const wchar\_t \*wcType, void \*\*outputFileBuffer, size\_t \*outputLength)

## GWMemoryToMemoryAnalysisAudit

**int GWMemoryToMemoryAnalysisAudit (void \* **_ **inputBuffer** _ **, size\_t ** _ **inputBufferLength** _ **, wchar\_t \* ** _ **wcType** _ **, void \*\* ** _ **analysisFileBuffer** _ **, size\_t \* ** _ **analysisFileBufferLength** _**)**

This function protects the specified input file buffer, returning the analysis report of the processed file to the specified memory location.

| in | _inputBuffer_ | Input buffer containing the file to be processed. |
| --- | --- | --- |
| in | _inputBufferLength_ | Length of the input buffer containing the file to be processed. |
| in | _wcType_ | [**wcType**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#wcType) |
| in,out | _analysisFileBuffer_ | output analysis report buffer from Glasswall processing. See [**outputFileBuffer**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#outputFi). |
| out | _analysisFileBufferLength_ | length of the outputFileBuffer that has been allocated. See [**outputLength**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#outputLe). |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Remarks**

Glasswall GWMemoryToMemoryAnalysisAudit processing example.
```
   // input file buffer and length
   void *inputFileBuffer	= NULL;
   size_t inputFileLength	= 0;

// output analysis report buffer and length 
   void *analysisFileBuffer	= NULL;
   size_t analysisFileBufferLength = 0;

// load file from disk
if (eGwFileStatus_Success == gwLoadFileFromDisk(L"C:\\data\\temp1.pdf",
&inputFileBuffer, &inputFileLength))
{
   // Library configuration
   wchar_t* cmPolicy = getClientApplicationConfigurationXML();

   if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
   {
   if(GWMemoryToMemoryAnalysisAudit(inputFileBuffer, inputFileLength, 
L"pdf", &analysisFileBuffer, &analysisFileBufferLength))
        {
             // process the analysis report
        }
   }
   else
   {
        // error handling
   }

   // free memory allocated by gwLoadFileFromDisk 
   gwFree(inputFileBuffer);
}
else

{
   // error handling
}

   // release resources including the global buffer 'analysisFileBuffer'
   GWFileDone();
   ```

## GWMemoryToMemoryProtect

**int GWMemoryToMemoryProtect (void \* **_ **inputBuffer** _ **, size\_t ** _ **inputBufferLength** _ **, const wchar\_t \* ** _ **wcType** _ **, void \*\* ** _ **outputFileBuffer** _ **, size\_t \* ** _ **outputLength** _**)**

This function protects the specified input file buffer, returning the managed version of the file to the specified memory location.

**Parameters**

| in | _inputBuffer_ | Input buffer containing the file to be processed. |
| --- | --- | --- |
| in | _inputBufferLength_ | Length of the input buffer containing the file to be processed. |
| in | _wcType_ | [**wcType**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#wcType) |
| in,out | _outputFileBuffer_ | output analysis report buffer from Glasswall processing. See [**outputFileBuffer**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#outputFi). |
| out | _analysisFileBufferLength_ | length of the outputFileBuffer that has been allocated. See [**outputLength**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#outputLe). |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

**Remarks**

Glasswall GWMemoryToMemoryProtect processing example.
```
// input file buffer and length 
void *inputFileBuffer = NULL;
size_t inputFileLength = 0;

// managed file output buffer and length
void *outputFileImage = NULL; 
size_t outputFileImageLength = 0; 

// load file from disk 
if (eGwFileStatus_Success == gwLoadFileFromDisk(L"C:\\data\\temp1.pdf",
&inputFileBuffer, &inputFileLength)) 
{
    // Library configuration
    wchar_t* cmPolicy = getClientApplicationConfigurationXML();

    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
    {
        if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength, L"pdf",
&outputFileImage, &outputFileImageLength))
        {
              // process the managed file image
        }
    }
    else
    {
        // error handling 
    }

    // free memory allocated by gwLoadFileFromDisk
    gwFree(inputFileBuffer);
 }
 else
 {
    // error handling
 }

 // release resources including the global buffer 'outputFileImage'
 GWFileDone();
 ```