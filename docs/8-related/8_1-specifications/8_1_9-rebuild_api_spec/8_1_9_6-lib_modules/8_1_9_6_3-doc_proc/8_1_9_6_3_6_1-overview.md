---
title: 8.1.9.6.3.1 Overview
sidebar_label: 8.1.9.6.3.1 Overview
---

## Modules

- [**Document Processing Arguments**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm)

- [**Glasswall Document Processing - Memory to Memory Location**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20Memory%20to%20Memory%20Location.htm)

- [**Glasswall Document Processing - File to Memory Location**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20Memory%20Location.htm)

- [**Glasswall Document Processing - File to File**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm)

- [**Glasswall Document Processing - Supporting Functions**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20Supporting%20Functions.htm)

- [**Glasswall Document Processing Results**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm)

These functions support the processing of documents. The API provides a number of functions that enable document processing to be carried out it different modes with a variety of output formats.

The Glasswall library supports two processing modes.

| **Mode** | **Description** |
| --- | --- |
| **Analysis Audit** | Provides XML report on the structure and content of the specified document |
| --- | --- |
| **Protect** | Produces a managed version of the specified document that is conformant with its specification and the content management policy |

In addition to document processing an optional report is available. This report is a detailed log of the processing that has been carried out on the specified file.

The output from the processing can be directed to either a  **memory location**  or to  **file locations**. The processing functions are documented in more detail against these two classifications.

Regardless of whether the &#39;file to memory location&#39; (see [**Glasswall Document Processing - File to Memory Location**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20Memory%20Location.htm)) or &#39;file to file&#39; (see [**Glasswall Document Processing - File to File**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20-%20File%20to%20File.htm)) interface is used, the managed files produced by the Glasswall library will be of the same type as the input file.

The return status from each of the processing functions provides a simple assessment of document processing, [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS).

Additional information can be retrieved from the Glasswall library through the [**Glasswall Document Processing Results**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Document%20Processing%20Results.htm) functions.