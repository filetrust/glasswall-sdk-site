---
title: 8.1.9.6.3.6.3 Memory to Memory Location
sidebar_label: 8.1.9.6.3.6.3 Memory to Memory Location
---
These functions process the document provided in a specified memory location and publish the resulting output to memory locations. Each of the function signatures requires the client application to provide a location to which the report or regenerated document can be written, along with a variable in which the size of the output is recorded. If the output file is not required, null pointers can be specified.

Parameters of type pointer to pointer are used by Glasswall to allocate memory for storing processed files and analysis reports. The client accesses the buffers through these parameters but is otherwise not responsible for managing the allocated memory except that  **GWFileDone**  must be called when processing is finished in order to release the allocated memory.

## Functions

- int [**GWMemoryToMemoryAnalysisAudit**](#gwmemorytomemoryanalysisaudit))(void \*inputBuffer, size\_t inputBufferLength, wchar\_t \*wcType, void \*\*analysisFileBuffer, size\_t \*analysisFileBufferLength)

- int [**GWMemoryToMemoryProtect**](#gwmemorytomemoryprotect)(void \*inputBuffer, size\_t inputBufferLength, const wchar\_t \*wcType, void \*\*outputFileBuffer, size\_t \*outputLength)

## GWMemoryToMemoryAnalysisAudit

**int GWMemoryToMemoryAnalysisAudit (void \* **_ **inputBuffer** _ **, size\_t ** _ **inputBufferLength** _ **, wchar\_t \* ** _ **wcType** _ **, void \*\* ** _ **analysisFileBuffer** _ **, size\_t \* ** _ **analysisFileBufferLength** _**)**

This function protects the specified input file buffer, returning the analysis report of the processed file to the specified memory location.

| in | _inputBuffer_ | Input buffer containing the file to be processed. |
| --- | --- | --- |
| in | _inputBufferLength_ | Length of the input buffer containing the file to be processed. |
| in | _wcType_ | [**wcType**](8_1_9_6_3_6_2-doc_processing_args.md#wctype) |
| in,out | _analysisFileBuffer_ | output analysis report buffer from Glasswall processing. See [**outputFileBuffer**](8_1_9_6_3_6_2-doc_processing_args.md#outputfilebuffer). |
| out | _analysisFileBufferLength_ | length of the outputFileBuffer that has been allocated. See [**outputLength**](8_1_9_6_3_6_2-doc_processing_args.md#outputlength). |

**Returns**

- [**eGwFileStatus**](8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](8_1_9_6_3_6_2-doc_processing_args.md#process-return-status)




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
| in | _wcType_ | [**wcType**](8_1_9_6_3_6_2-doc_processing_args.md#wctype) |
| in,out | _outputFileBuffer_ | output analysis report buffer from Glasswall processing. See [**outputFileBuffer**](8_1_9_6_3_6_2-doc_processing_args.md#outputfilebuffer). |
| out | _analysisFileBufferLength_ | length of the outputFileBuffer that has been allocated. See [**outputLength**](8_1_9_6_3_6_2-doc_processing_args.md#outputlength). |

**Returns**

- [**eGwFileStatus**](8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def.md#egwfilestatus) ** / ** [**Process Return Status**](8_1_9_6_3_6_2-doc_processing_args.md#process-return-status)


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