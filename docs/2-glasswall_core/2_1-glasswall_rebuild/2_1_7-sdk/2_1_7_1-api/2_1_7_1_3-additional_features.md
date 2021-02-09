---
title: 2.1.7.1.3 Additional Features
sidebar_label: 2.1.7.1.3 Additional Features
---

### Determine File Type
The Glasswall library provides an API function known as **DetermineFileTypeFromFile** which provides the caller with the ability to determine the file type for a given file, provided that the file format is supported by Glasswall. This enables the user to determine and supply the Glasswallprocessing API functions with the correct file type for the file that is to be processed, regardless of the presence of a file extension or an incorrect extension.

### **Determine File Type API**
The following link contains information on the API.

- [GWDetermineFileTypeFromFile](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_6-supporting_functions.md#gwdeterminefiletypefromfile)  

### **Glasswall DLL Lite Mode**
The Glasswall library provides a lightweight version of the manage & protect APIs known as Glasswall DLL Lite. The purpose of Glasswall DLL Lite is to illustrate Glasswall's capability to generate a managed document sanitised of any macros. Glasswall DLL Lite APIs will utilise the configuration management policies that are in place for macros.

### **Glasswall DLL Lite APIs**
The Glasswall DLL Lite APIs are as follows:

- [GWFileProtectLite](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_4-file_to_mem_location.md#gwfileprotectlite)  
- [GWFileProtectLiteAndReport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_4-file_to_mem_location.md#gwfileprotectliteandreport)  
- [GWFileToFileProtectLite](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_5-file_to_file.md#gwfiletofileprotectlite)  
- [GWFileToFileProtectLiteAndReport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_5-file_to_file.md#gwfiletofileprotectliteandreport)

### **Glasswall DLL Lite Cameras**

The following Glasswall DLL Lite cameras are available:

- Office Open XML (OOXML)
- Word Binary
- Excel Binary
- PowerPoint Binary

### Glasswall Content Import/Export extensions

The Glasswall library provides facilities for image and text content to be extracted from files during processing for external processing and for image content to be re-inserted in its original location. This allows Glasswall to be used as a component of, or in conjunction with, other parts of a Cross Domain Solution.

### **Glasswall Content Import/Export APIs** 
- [GWFileToFileAnalysisProtectAndExport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_5-file_to_file.md#gwfiletofileanalysisprotectandexport)
- [GWFileToFileProtectAndImport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_5-file_to_file.md#gwfiletofileprotectandimport)
- [GWFileToMemoryAnalysisProtectAndExport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_4-file_to_mem_location.md#gwfiletomemoryanalysisprotectandexport)
- [GWFileToMemoryProtectAndImport](2_1_7_1_6-lib_modules/2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_4-file_to_mem_location.md#gwfiletomemoryprotectandimport)