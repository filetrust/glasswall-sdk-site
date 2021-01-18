---
title: 7.8 Extract String Literals
sidebar_label: 7.8 Extract String Literals
---

### **NAME**
extractStrLit - report arguments passed to GW_ISSUE macros

### **SYNOPSIS**
**extractStrLit** **--in** *input_directory* **--out** *output_file* [**--debug**]  
**extractStrLit** (**--usage** | **--help** | **--version** | **--man**) [**--debug**]

### **DESCRIPTION**
Read in each file and directory in *input_directory*, recursing downward. For each file, the group ID and string literal passed to each call of **GW_ISSUE** will be reported. The output file will contain the names of all C source files found, and all non-C source files.

### **OPTIONS**
**--in**  
The name of the directory to be processed. Only files that match the file glob `*.c` will be processed.

**--out**  
The name of the file where all processing output will be placed.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and description of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

### **EXIT STATUS**
|Status|Description
|---|---
0|Success
Non-zero|Failure

### **NOTES**
extractStrLit treats C source files as text and does not parse it as C source code; therefore, it will report non-active **GW_ISSUE** instances (e.g., those guarded by preprocessor macros or commented out.)

### **EXAMPLES**
The following Windows 10 command session demonstrates the use of the script on the `sdk.editor` repository.

First, retrieve the repository.

    > git clone https://dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.rebuild
    Cloning into 'sdk.rebuild'...
    remote: Azure Repos
    remote: Found 36958 objects to send. (524 ms)
    Receiving objects: 100% (36958/36958), 104.12 MiB | 9.57 MiB/s, done.
    Resolving deltas: 100% (24032/24032), done.
    Updating files: 100% (10519/10519), done.

Now run the script:

&nbsp;&nbsp;&nbsp;&nbsp;$ **extractStrLit --in=c:\DevOps\sdk.rebuild --out=%TEMP%\strlit.txt**  
&nbsp;&nbsp;&nbsp;&nbsp;Running extractStrLit.exe version 1.0.0  
&nbsp;&nbsp;&nbsp;&nbsp;Start time:  Tue Nov  3 09:00:46 2020  
&nbsp;&nbsp;&nbsp;&nbsp;End time: Tue Nov  3 09:00:49 2020  

&nbsp;&nbsp;&nbsp;&nbsp;This exe file was created with the evaluation version of Perl2Exe.  
&nbsp;&nbsp;&nbsp;&nbsp;For more information visit http://www.indigostar.com  
&nbsp;&nbsp;&nbsp;&nbsp;(The full version does not display this message with a 2 second delay.)  
&nbsp;&nbsp;&nbsp;&nbsp;...  

That produced file *strlit.txt* containing over 13,700 lines. Each file's result shows the Group ID followed by the string literal of each call to **GW_ISSUE**. Here are the first few lines of *strlit.txt*:

    FILE: C:\Users\MARTIN~1\AppData\Local\Temp\strlit.txt
    DATE: Tue Nov  3 09:00:46 2020
    COPYRIGHT GLASSWALL SOLUTIONS LIMITED
    START DIRECTORY: c:/DevOps/sdk.rebuild
    ------------------------------------------------------------------------
    ------------------------------------------------------------------------
    Results for file c:/DevOps/sdk.rebuild/src/code/application/office/office.compression.zlib.c
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"inflateInit() failed. Returned(%d)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"inflate() failed. Returned(%d)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"inflate() failed. Returned(%d) Msg(%s)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"deflateInit() failed. Returned(%d)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"deflate() failed. Returned(%d)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"deflate() failed. Returned(%d) Msg(%s)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"deflate() output length(%d) is greater than the input length(%d)."
    ------------------------------------------------------------------------
    Results for file c:/DevOps/sdk.rebuild/src/code/application/pdf/pdf.camera.c
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"Incorrect parameter block passed to PDF camera"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"Incorrect parameter block passed to PDF camera"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"Could not obtain an intermediate buffer for the PDF camera"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"COMMON AREA buffer size(%d) has exceeded the maximum limit(%d)"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"Disallow all files"
    eAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure	"Expect find percentage character followed by 'PDF' - at the start of all PDF files"
    eAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure	"Unspecified version of PDF header"
    eAnalysisStatsID_Instances_DOCUMENT_PROCESSING	"Header signature bytes(%d) has exceeded the maximum(%d)"
    eAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure	"Header signature bytes(%d) less than minimum(%d)"
    eAnalysisStatsID_2_2_1_Instances_PDF_FileSectionStructure	"Header signature bytes(%d) not recognised"


### **AUTHORS**
Martin O'Brien <mobrien@glasswallsolutions.com>

### **COPYRIGHT**
&copy; Glasswall Solutions Limited
