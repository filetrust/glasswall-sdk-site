---
title: 8.1.9.6.3.1 Glasswall Document Processing
sidebar_label: 8.1.9.6.3.1 Overview
---

## Modules

- [**Document Processing Arguments**](8_1_9_6_3_6_2-doc_processing_args.md)

- [**Glasswall Document Processing - Memory to Memory Location**](8_1_9_6_3_6_3-mem_to_mem_location.md)

- [**Glasswall Document Processing - File to Memory Location**](8_1_9_6_3_6_4-file_to_mem_location.md)

- [**Glasswall Document Processing - File to File**](8_1_9_6_3_6_5-file_to_file.md)
  
- [**Glasswall Document Processing - Supporting Functions**](8_1_9_6_3_6_6-supporting_functions.md)

- [**Glasswall Document Processing Results**](8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_1-overview.md)

These functions support the processing of documents. The API provides a number of functions that enable document processing to be carried out it different modes with a variety of output formats.

The Glasswall library supports two processing modes.

| **Mode** | **Description** |
| --- | --- |
| **Analysis Audit** | Provides XML report on the structure and content of the specified document |
| **Protect** | Produces a managed version of the specified document that is conformant with its specification and the content management policy |

In addition to document processing an optional report is available. This report is a detailed log of the processing that has been carried out on the specified file.

The output from the processing can be directed to either a  **memory location**  or to  **file locations**. The processing functions are documented in more detail against these two classifications.

Regardless of whether the &#39;file to memory location&#39; (see [**Glasswall Document Processing - File to Memory Location**](8_1_9_6_3_6_4-file_to_mem_location.md)) or &#39;file to file&#39; (see [**Glasswall Document Processing - File to File**](8_1_9_6_3_6_5-file_to_file.md)) interface is used, the managed files produced by the Glasswall library will be of the same type as the input file.

The return status from each of the processing functions provides a simple assessment of document processing, [**eGwFileStatus**](8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def.md#egwfilestatus).

Additional information can be retrieved from the Glasswall library through the [**Glasswall Document Processing Results**](8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_1-overview.md) functions.