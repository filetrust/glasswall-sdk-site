---
title: 2.1.7.1.6.3.2 Document Processing Arguments
sidebar_label: 2.1.7.1.6.3.2 Document Processing Arguments
---
This section describes the common arguments used in the document processing functions. The function argument naming is applied consistently across the API. An argument name prefixed with wc indicates that the function expects the argument to contain a wide character string.

## Input Arguments

These arguments inform the process functions which file to process and the file type to expect.

### inputFilePathName

The input file path for Glasswall processing. Glasswall ignores any file suffix, the file type must be specified in  **wcType**.

### wcType

Each of the processing functions requires the expected file type to be specified through the wcType argument. The following table details the expected values for wcType.

The values for wcType are case-sensitive.

| **wcType** | **File type** |
| --- | --- |
| pdf | PDF documents |
| doc | Binary MS Word files |
| xls | Binary MS Excel files |
| ppt | Binary MS PowerPoint files |
| docx | XML MS Word files |
| xlsx | XML MS Excel files |
| pptx | XML MS PowerPoint files |
| jpg | JPEG image files |
| gif | GIF image files |
| png | PNG image files |
| emf | EMF image files |
| wmf | WMF image files |
| bmp | BMP image files |
| tiff | TIFF image files |
| elf | ELF files |
| wmf | WMF files |
| mp3 | MP3 files |
| mp4 | MPEG-4 files |
| mpg | MPEG files |
| mp2 | MPEG-2 files (H.222/H.262) |
| wav | WAV files |
| o | Mach-O files |
| pe | PE files |

## File to Memory Location Output Arguments

These arguments are used to return process information from the Glasswall library when using the File to Memory Locations process functions.

Client applications do not need to manage the release of memory allocated to these return buffers.

### outputFileBuffer

The Glasswall processing output file buffer.

This buffer contains an image of the Glasswall processed output file which will be of the same data type as the input file and will have managed content removed and Glasswall protected according to the standard content specification allowed for the file data type.

The argument can be set to NULL when the outputFileBuffer is not required and only validation of a file is required. In this case then the ref gwOutputLength &quot;outputLength&quot; argument should also be set to NULL.

### outputLength

Length of the  **outputFileBuffer**.

The argument can be set to NULL when the  **outputFileBuffer**  is not required and only validation of a file required. In this case then the  **outputFileBuffer**  should also be set to NULL.

### analysisFileBuffer

Analysis (XML) file buffer from Glasswall processing. This buffer contains an image of the Glasswall ANALYSIS report of the specified file.

### analysisFileBufferLength

Length of the  **analysisFileBuffer**

### reportFileBuffer

Detailed log file buffer from Glasswall processing. The argument can be set to NULL when the report is not required.

In this case then the  **reportFileBufferLength**  should also be set to NULL.

### reportFileBufferLength

Length of the reportFileBuffer that has been allocated. The argument can be set to NULL when the report is not required.

In this case then the  **reportFileBuffer**  should also be set to NULL.

## File to File Output Arguments

These arguments are used to return process information from the Glasswall library when using the File to File process functions.

Destination folders for these files must exist and be writable, processing will be reported in error if these conditions are not met.

### outputFilePathName

Destination for the managed file from Glasswall processing.

This file contains the Glasswall processed output file which will be of the same type as the input file, will have managed content removed and be Glasswall protected according to the standard content specification allowed for the file type.

### analysisFilePathName

Destination for Analysis Audit report (XML) from Glasswall processing. This file contains an image of the Glasswall ANALYSIS of the processed file.

### reportFilePathName

Destination for detailed processing log file buffer from Glasswall processing.

### exportFilePathName

Destination for the exported zip archive. This zip archive containing the Managed file, the Analysis report, and extracted elements such as images and text.

## Determine File Type Output Enumeration

### File Type Enumeration

The following table details the possible enumeration values that can be returned with a call to _GWDetermineFileTypeFromFile_ and what they represent.

| **Value** | **Representation** |
| --- | --- |
| 0 | Unknown or unrecognised file type |
| 16 | pdf |
| 17 | doc |
| 18 | docx |
| 19 | ppt |
| 20 | pptx |
| 21 | xls |
| 22 | xlsx |
| 23 | png |
| 24 | jpg |
| 25 | gif |
| 26 | emf |
| 27 | wmf |
| 28 | rtf |
| 29 | bmp |
| 30 | tiff |
| 31 | pe |
| 32 | macho |
| 33 | elf |
| 34 | mp4 |
| 35 | mp3 |
| 36 | mp2 |
| 37 | wav |
| 38 | mpg |
| 39 | coff |

The following table is an extension to the table above and indicates issues that may occur during interrogation.

| **Value** | **Representation** |
| --- | --- |
| 1 | File issues preventing file type detection |
| 2 | Memory allocation issues preventing file type detection |
| 3 | Internal processing issues preventing file type detection |
| 4 | Licensing issues preventing file type detection |
| 5 | OPC password protected file |

## Process Return Status

All the processing functions return values as defined in [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus).

| **Status Value** | **Effects** |
| --- | --- |
| **eGwFileStatus\_Success** | Managed documents are published to the specified locations<li>For file to memory location, the size of the managed document is reported in the specified argument</li><li>For file to file the specified file location is loaded with the processed document</li> Analysis reports are published to the specified locations, for memory locations the size of the analysis report is reported in the specified argument.Detailed reports are published to the specified locations, for memory locations the size of the detailed report is reported in the specified argument. |
| **eGwFileStatus\_Error** | Managed documents are not published. Memory location functions return a NULL pointer for  **outputFileBuffer**  and set the  **outputFileBuffer**  to zero. |
| **other** | The effects of the failure case is described in the notes for [**eGwFileStatus**](2_1_7_1_6_3_7-doc_proc_res/2_1_7_1_6_3_7_2-ret_stat_def.md#egwfilestatus) |