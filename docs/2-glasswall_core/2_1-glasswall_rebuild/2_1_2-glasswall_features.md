---
title: 2.1.2 glasswall features
sidebar_label: 2.1.2 glasswall features
---

### GlasswallDLLDetermineFileTypeOverview Overview

The Glasswall library contains a series of API functions that provide the caller with the ability to determine the file type for a given file, given that the file format is supported by Glasswall. This enables the user to determine and supply the Glasswall processing API functions with the correct file type for the file that is to be processed, regardless of the presence of a file extension or an incorrect extension.

\subsection GlasswallDLLDetermineFileTypeAPI Determine File Type API Functions

The following link contains information on each of the API functions.

- [DetermineFileTypeFromFile()](@ref GWDetermineFileTypeFromFile)
- [DetermineFileTypeFromFileAndReport()](@ref GWDetermineFileTypeFromFileAndReport)
- [DetermineFileTypeFromFileInMem()](@ref GWDetermineFileTypeFromFileInMem)
- [DetermineFileTypeFromFileInMemAndReport()](@ref GWDetermineFileTypeFromFileInMemAndReport)

\section GlasswallDLLLite Glasswall DLL Lite Mode

\subsection GlasswallDLLLiteOverview Overview

The Glasswall library provides a lightweight version of the manage & protect APIs known as Glasswall DLL Lite.  The purpose of Glasswall DLL Lite is to illustrate Glasswall's capability to generate a managed document sanitised of any macros.  Glasswall DLL Lite APIs will utilise the configuration management policies that are in place for macros.

\subsection GlasswallDLLLiteAPIs Glasswall DLL Lite APIs

The Glasswall DLL Lite APIs are as follows:

-  GWFileProtectLite()
-  GWFileProtectLiteAndReport()
-  GWFileToFileProtectLite()
-  GWFileToFileProtectLiteAndReport() 

\subsection GlasswallDLLLiteCameras Glasswall DLL Lite Cameras

The following Glasswall DLL Lite cameras are available:

- Open Office XML.
- Word Binary.
- Excel Binary.
- PowerPoint Binary.

\section GlasswallContentImportExportExtensions Glasswall Content Import/Export extensions

\subsection GlasswallContentImportExportExtensionsOverview Overview

The Glasswall library provides facilities for image and text content to be extracted from a file during processing. Extracted images can also be processed and modified externally before handing them back to Glasswall for re-insertion in their original locations. This allows Glasswall to be used as a component of, or in conjunction with other parts of a Cross Domain Solution.

\subsection GlasswallContentImportExportExtensionsAPI Glasswall Content Import/Export APIs 

-  GWFileToFileAnalysisProtectAndExport()
-  GWFileToFileProtectAndImport()
-  GWFileToMemoryAnalysisProtectAndExport()
-  GWFileToMemoryProtectAndImport()

