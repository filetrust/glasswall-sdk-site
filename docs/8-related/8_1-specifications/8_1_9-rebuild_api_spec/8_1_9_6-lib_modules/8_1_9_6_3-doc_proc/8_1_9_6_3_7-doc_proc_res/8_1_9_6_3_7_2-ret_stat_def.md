---
title: 8.1.9.6.3.7.2 Return Status Definitions
sidebar_label: 8.1.9.6.3.7.2 Return Status Definitions
---
The document processing functions use the enumerations defined on these pages to describe the processing results.

For the  **Glasswall****  Document Processing **, ** File to Memory Location ** functions only ** eGwFileStatus\_Success **, ** eGwFileStatus\_Error ** and ** eGwFileStatus\_InternalError ** are used. For the ** Glasswall **** Document Processing** ,  **File to File**  functions the negative values are utilised to report issues with file output (possibly in addition to file processing issues).

**Attention**

Some of the  **Glasswall****  Document Processing **, ** File to File** functions&#39; negative return values indicate documents have been successfully managed. It may be additional outputs that have caused the error condition to be reported. Care should be taken to make the managed document available if possible.

## Enumerations
```
enum  eGwFileStatus {
        eGwFileStatus_Success = 1, 
        eGwFileStatus_Error = 0,
        eGwFileStatus_SuccessDocumentWriteFailure = -1,
        eGwFileStatus_SuccessAnalysisWriteFailure = -2,
        eGwFileStatus_ErrorAnalysisWriteFailure = -3,
        eGwFileStatus_SuccessReportWriteFailure = -4,
        eGwFileStatus_SuccessDocumentReportWriteFailure = -5,
        eGwFileStatus_ErrorReportWriteFailure = -6,
        eGwFileStatus_SuccessAnalysisReportWriteFailure = -7,
        eGwFileStatus_ErrorAnalysisReportWriteFailure = -8,
        eGwFileStatus_InternalError = -9
        eGwFileStatus_SuccessDocumentAnalysisReportWriteFailure = -10,
        eGwFileStatus_SuccessDocumentAnalysisWriteFailure = -11,
        eGwFileStatus_SuccessExportWriteFailure = -12,
        eGwFileStatus_ErrorExportWriteFailure = -13,
      }
```

## eGwFileStatus

**enum eGwFileStatus**

Enumerations report the following conditions:

| **Enumrator** |
| --- |---|
| **eGwFileStatus\_Success** | This value indicates the operation completed successfully. Any required Analysis or Protection was carried out and completed. Any required output files were written. |
| **eGwFileStatus\_Error** | This value indicates that the document was non-conformant in some way, but any requested output files were written. |
| **eGwFileStatus\_SuccessDocumentWriteFailure** | This value indicates that the document was managed successfully, but a failure occurred when writing the managed version of the document to file. |
| **eGwFileStatus\_SuccessAnalysisWriteFailure** | This value indicates that the document was analysed successfully, but a failure occurred when writing the analysis of the document to file. |
| **eGwFileStatus\_ErrorAnalysisWriteFailure** | This value indicates that the document was non-conformant in some way, and a failure occurred when writing the analysis of the document to file. |
| **eGwFileStatus\_SuccessReportWriteFailure** | This value indicates that the document was processed successfully, but that a failure occurred when writing the processing report to file. |
| **eGwFileStatus\_SuccessDocumentReportWriteFailure** | This value indicates that the document was managed successfully, but a failure occurred when writing both the managed version of the document and the processing report to file. |
| **eGwFileStatus\_ErrorReportWriteFailure** | This value indicates that the document was non-conformant in some way, and that a failure occurred when writing the processing report to file. |
| **eGwFileStatus\_SuccessAnalysisReportWriteFailure** | This value indicates that the document was analysed successfully, but a failure occurred when writing both the analysis of the document and the processing report to file. |
| **eGwFileStatus\_ErrorAnalysisReport WriteFailure** | This value indicates that the document was non-conformant in some way, but a failure occurred when writing both the analysis of the document and the processing report to file. |
| **eGwFileStatus\_InternalError** | This value indicates an uncategorised error. |
| **eGwFileStatus\_SuccessDocumentAnalysisReportWriteFailure** | This value indicates that the document was analysed successfully, but failures occurred when writing the document, the analysis of the document and the processing report to file (AMP mode). |
| **eGwFileStatus\_SuccessDocumentAnalysisWriteFailure** | This value indicates that the document was analysed successfully, but failures occurred when writing the document and the analysis of the document to file (AMP mode). |
| **eGwFileStatus\_SuccessExportWriteFailure** | This value indicates that the document was exported successfully, but failures occurred when writing the archive package (Export mode). |
| **eGwFileStatus\_ErrorExportWriteFailure** | This value indicates that the document was non-conformant in some way, and failures occurred when writing the archive package (Export mode). |