---
title: 8.1.9.6.3.6.6 Supporting Functions
sidebar_label: 8.1.9.6.3.6.6 Supporting Functions
---

hese functions may be used alongside the document processing functions for additional support on certain aspects or attributes such as determining the file extension for a given file.

For every function that relies on an input file, it is the responsibility of the client application to ensure that the folder containing the specified file location exists. If the containing folder does not exist, or &#39;read privileges&#39; are not enabled, the processing function will return an error status.

## Functions

- int [**GWDetermineFileTypeFromFileInMem**](#gwdeterminefiletypefromfileinmem) (void \*inputBuffer, size\_t inputBufferSize)

- int [**GWDetermineFileTypeFromFileInMemAndReport**](#gwdeterminefiletypefromfileandreport) (void \*inputBuffer, size\_t inputBufferSize, void \*\*reportFileBuffer, size\_t \*reportFileBufferLength)

- int [**GWDetermineFileTypeFromFile**](#gwdeterminefiletypefromfile) (const wchar\_t \*inputFilePathName)

- int [**GWDetermineFileTypeFromFileAndReport**](#gwdeterminefiletypefromfileinmemandreport)) (const wchar\_t \*inputFilePathName, void \*\*reportFileBuffer, size\_t \*reportFileBufferLength)

## GWDetermineFileTypeFromFile

**int GWDetermineFileTypeFromFile (const wchar\_t \* **_ **inputFilePathName** _**)**

This function determines the file type for a given file provided it is supported by Glasswall.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |

**Returns**

- [**File Type Enumeration**](8_1_9_6_3_6_2-doc_processing_args.md#file-type-enumeration)

**Remarks**

Glasswall GWDetermineFileTypeFromFile example.
```
// Input file path, managed file output buffer and length
const wchar_t* inputFilePath = L"C:\\data\\temp1.pdf";
void *fileImage              = NULL;
size_t fileImageLength	      = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    wchar_t* fileType = NULL; 
    int eFileType     = 0;

    // Determine the file type
    eFileType = GWDetermineFileTypeFromFile(inputFilePath);

    switch (eFileType)
{
        case 16:
            fileType = L"pdf"; break;

        case 17:
            fileType = L"doc"; break;

        ...

        case 27:
            fileType = L"wmf"; break;
    }

    if (fileType)
    {
        // Call Glasswall processing function
        if(GWFileProtect(inputFilePath, fileType, &fileImage, &fileImageLength))

        {
            // Process the managed file image
        }
    }
    else
    {
        // Error handling
    }
}
else
{
    // Error handling
}

// Release resources including the global buffers 
GWFileDone();
```

## GWDetermineFileTypeFromFileAndReport

**int GWDetermineFileTypeFromFileAndReport (const wchar\_t \* **_ **inputFilePathName** _ **, void \*\* ** _ **reportFileBuffer** _ **, size\_t \* ** _ **reportFileBufferLength** _**)**

This function determines the file type for a given file provided it is supported by Glasswall, it also populates an XML report with the approach used to determine the file type.

**Parameters**

| in | _inputFilePathName_ | input file path for Glasswall processing. |
| --- | --- | --- |
| out | analysisFileBuffer | analysis (XML) file buffer from Glasswall processing. |
| out | analysisFileBufferLength | length of the analysisFileBuffer that has been allocated. |

**Returns**

- [**File Type Enumeration**](8_1_9_6_3_6_2-doc_processing_args.md#file-type-enumeration)

**Remarks**

Glasswall GWDetermineFileTypeFromFile example.
```
// Input file path, managed file output buffer and length
const wchar_t* inputFilePath    = L"C:\\data\\temp1.pdf";

void *analysisFileBuffer        = NULL;
size_t analysisFileBufferLength = 0;

void *fileImage                 = NULL;
size_t fileImageLength          = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    wchar_t* fileType = NULL;
    int eFileType     = 0;

    // Determine the file type
    eFileType = GWDetermineFileTypeFromFileAndReport(inputFilePath, 
&analysisFileBuffer, &analysisFileBufferLength);

    switch (eFileType)
    {
        case 16:
            fileType = L"pdf"; break;

        case 17:
            fileType = L"doc"; break;

        ...

        case 27:
            fileType = L"wmf"; break;  
    }

    if (fileType)
    {
        // Call Glasswall processing function
        if(GWFileProtect(inputFilePath, fileType, &fileImage, &fileImageLength))
        {
            // Process the managed file image
         // Report file type detection approach using content in analysisFileBuffer
        }
    }
    else
    {
        // Error handling
    }
}
else
{
    // Error handling
}

// Release resources including the global buffers 
GWFileDone();
```

## GWDetermineFileTypeFromFileInMem

**int GWDetermineFileTypeFromFileInMem (void \* **_ **inputBuffer** _ **, size\_t ** _ **inputBufferSize** _**)**

This function determines the file type for a file stored in memory provided that the file type is supported by Glasswall.

**Parameters**

| in | _inputBuffer_ | input file buffer containing the files to be processed |
| --- | --- | --- |
| in | _inputBufferLength_ | input file buffer length |

**Returns**

- [**File Type Enumeration**](8_1_9_6_3_6_2-doc_processing_args.md#file-type-enumeration)
  
**Remarks**

Glasswall GWDetermineFileTypeFromFileInMem example.
```
// input file buffer and length

void *inputFileBuffer    = NULL;
size_t inputFileLength   = 0;

// output buffer and length 
void *outputFileBuffer   = NULL;
size_t outputFileLength  = 0;

// load file from a memory location
if (eGwFileStatus_Success == LoadFileFromMemory(&inputFileBuffer, 
&inputFileLength))
{
    // Library configuration
    wchar_t* cmPolicy = getClientApplicationConfigurationXML();

    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
    {
        wchar_t* fileType = NULL; 
        int eFileType     = 0;

        // Determine the file type
        eFileType = GWDetermineFileTypeFromFileInMem(inputFileBuffer,
 inputFileLength);

        switch (eFileType)
       {
            case 16:
            fileType = L"pdf"; 
            break;

            case 17:
            fileType = L"doc"; 
            break;
        ...

            case 27:
            fileType = L"wmf";
            break;
        }

        if (fileType)
        {
            // Call Glasswall processing function
            if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength,
            fileType, &fileImage, &fileImageLength))
            {
                // Process the managed file image
            } 
        }
        else
        {
            // Error handling
        }
    }  
    else
    {
        // Error handling
    }

        // free memory allocated by LoadFileFromMemory 
        gwFree(inputFileBuffer);
}
else
{
// Error handling
}

// Release resources including the global buffers 
GWFileDone();
```

## GWDetermineFileTypeFromFileInMemAndReport

**int GWDetermineFileTypeFromFileInMemAndReport (void \* **_ **inputBuffer** _ **, size\_t ** _ **inputBufferSize** _ **, void \*\* ** _ **reportFileBuffer** _ **, size\_t \* ** _ **reportFileBufferLength** _**)**

This function determines the file type for a given file provided it is supported by Glasswall, it also populates an XML report with the approach used to determine the file type.

**Parameters**

| in | _inputBuffer_ | input file buffer containing the files to be processed |
| --- | --- | --- |
| in | inputBufferLength | input file buffer length |
| out | analysisFileBuffer | analysis (XML) file buffer from Glasswall&#39;s file type detection mechanism. |
| out | analysisFileBufferLength | length of the analysisFileBuffer that has been allocated. |

**Returns**

- [**File Type Enumeration**](8_1_9_6_3_6_2-doc_processing_args.md#file-type-enumeration)
  
**Remarks**

Glasswall GWDetermineFileTypeFromFileInMemAndReport example.
```
// input file buffer and length 
void *inputFileBuffer              = NULL;
size_t inputFileLength             = 0;

// determine file type output buffer and length 
void *fileTypeReportBuffer         = NULL; 
size_t fileTypeReportBufferLength  = 0;

// output file buffer and length
void *outputFileBuffer             = NULL;
size_t outputFileLength            = 0;

// load file from a memory location
if (eGwFileStatus_Success == LoadFileFromMemory(&inputFileBuffer, 
&inputFileLength))
{
    // Library configuration
    wchar_t* cmPolicy = getClientApplicationConfigurationXML();

    if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))  
    {
        wchar_t* fileType  = NULL; 
        int eFileType      = 0;

        // Determine the file type
        eFileType = GWDetermineFileTypeFromFileInMemAndReport(inputFileBuffer, 
inputFileLength, &fileTypeReportBuffer, &fileTypeReportBufferLength);

        switch (eFileType) 
        {
            case 16:
                fileType = L"pdf"; 
                break;

            case 17:
                fileType = L"doc"; 
                break;
            ...

            case 27:
                fileType = L"wmf"; 
                break;
        }

        if (fileType)
        {
            // Call Glasswall processing function 
            if(GWMemoryToMemoryProtect(inputFileBuffer, inputFileLength,
fileType, &fileImage, &fileImageLength))
            {
                // Process the managed file image
            }
        }
        else
        {
            // Error handling
        }

        // Process xml report from GWDetermineFileTypeFromFileInMemAndReport 
stored in fileTypeReportBuffer
    }
    else
    {
        // Error handling
    }

    // free memory allocated by LoadFileFromMemory 
    gwFree(inputFileBuffer);
}
else
{
// Error handling
}

// Release resources including the global buffers 
GWFileDone();
```