---
title: 8.1.9.6.3.7.1 Overview
sidebar_label: 8.1.9.6.3.7.1 Overview
---
Each function returns status information on the last document processed by the library. No historical data is persisted.

These functions may be used once a document has been processed to elicit additional information on what processing was carried out on the document and, in the event of a document being identified as not conforming with its specification, the reason for non-conformance.

The [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) enumeration is returned from all document processing functions to give an indication of the processing results. From this enumeration it can be established whether the document is &#39;managed&#39; or not. A managed document may still have had changes made to it, the functions  **GWFileProcessMsg**  or [**GWFileProcessStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm#GWFilePr) can be used to identify the types of changes, if any, that have been carried out on the document.

In the event of a document processing function returning a status value indicating that the document was found to be non-conforming, the function  **GWFileErrorMsg**  can be used to return an explanatory line of text.

## Modules

- [**Glasswall Return Status Definitions**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm)

- [**Process Status Bitmask Definitions**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm)

## Functions

- wchar\_t \* [**GWFileProcessMsg**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm#GWFilePr2) (void)

- int [**GWFileProcessStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm#GWFilePr) (unsigned int \*glasswallProcessStatus)

- wchar\_t \* [**GWFileErrorMsg**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm#GWFileEr) (void)

## GWFileProcessMsg

**wchar\_t\* GWFileProcessMsg (void )**

The file process message is a text representation of the status value detailed in [**GWFileProcessStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm#GWFilePr).

**Returns**

- a pointer to a printable Null-terminated string

## GWFileProcessStatus

**int GWFileProcessStatus (unsigned int \* **_ **glasswallProcessStatus** _**)**

This function retrieves the Glasswall Process Status. This status gives a high level indication of the processing that was carried out on the last document processed by the library.

The status value can be retrieved as a text string using the associated **GWFileProcessMsg()** function.

**Parameters**

| out | _glasswallProcessStatus_ | Glasswall process status is an unsigned integer. The possible values and meanings are detailed in  **Process Status Bitmask Definitions**  NB: Parameter &#39;glasswallProcessStatus&#39; may be passed as NULL if only Glasswall process status availability checking is required.) |
| --- | --- | --- |

**Returns**

- 1(Success) 0(Error)

## GWFileErrorMsg

**wchar\_t\* GWFileErrorMsg (void )**

This function retrieves the Glasswall Process error message. If there are multiple reasons for document processing to return an error code only one shall be reported from this function. If more details on the process failures are required, the document can analysed to produce a detailed report on the contents of the document. All issues will be logged in the report.

Note that this string will be set to L&quot;&quot; if the Glasswall process has succeeded.

**Returns**

- a pointer to a printable Null-terminated string