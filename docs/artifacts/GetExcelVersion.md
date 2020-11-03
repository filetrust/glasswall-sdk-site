---
title: Get Excel Version
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;getExcelVeresion - report versions of Excel files

### **SYNOPSIS**
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  [**--files**] [**--debug**\]  
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  **--copy** **--target_dir**(=| )*target_directory* [**--files**] [**--debug**\]  
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  **--move** **--target_dir**(=| )*target_directory* [**--files**] [**--debug**\]  
**getExcelVersion** (**--usage** | **--help** | **--version** | **--man**)

### **DESCRIPTION**
Read in each file whose extension matches the file glob *.xls* in *input_directory* and all subdirectories. Report the version of each matched file.

### ****OPTIONS****
**--in**  
The name of the directory containing the files to be analysed. getExcelVersion will recurse downward through all sub-directories and
process all files with extension .xls.

**--out**  
The name of the file where the analysis will be placed.

**--copy**  
Create version-named sub-directories under *target_directory* and copy files there.

**--move**  
Create version-named sub-directories under *target_directory* and move files there.

**--target_dir**  
Mandatory if **--copy** or **--move** is specified. The directory into which files will be moved or copied. This directory must exist.

**--files**  
Group the file by version.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and one-line summary of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

**--debug**  
Place debug information in file *getExcelVersion_DEBUG.txt*. For development purposes.

### **EXIT STATUS**
|Status|Description
|---|---
|0|success  
|non-zero|error

### **NOTES**
The script is designed to continue processing if exceptions are thrown when attempting to open a file (e.g., if filenames contain non-ASCII characters). Exceptions will be reported on the command-line, but processing will continue and *output_file* will be produced.

### **EXAMPLES**
The following command will recurse downward through the *Documents* directory and report in file *findDIFAT.txt* all the non-CFB files encountered, and a list of all the CFB files encountered with DIFAT sectors, and CFB files encountered without DIFAT sectors.

&nbsp;&nbsp;&nbsp;&nbsp;**findDIFAT --in="C:\Documents" **--out**=findDIFAT.txt**  

The following command will recurse downward through the *Test_Files* directory and report the processing in *findDIFAT.txt*. It will copy all files containing DIFAT sectors to directory *C:\files_with_DIFAT_sectors*, creating sub-directories named after the sub-directories (if any) encountered in *C:\Test_Files*.

&nbsp;&nbsp;&nbsp;&nbsp;**findDIFAT --in="c:\Test_Files" --out=findDIFAT.txt --copy --target_dir=c:\files_with_DIFAT_sectors**  
&nbsp;&nbsp;&nbsp;&nbsp;Running findDIFAT.exe version 1.0.0  
&nbsp;&nbsp;&nbsp;&nbsp;Start time:  Tue Nov  3 15:11:14 2020  
&nbsp;&nbsp;&nbsp;&nbsp;Copying files  
&nbsp;&nbsp;&nbsp;&nbsp;...Done  
&nbsp;&nbsp;&nbsp;&nbsp;End time: Tue Nov  3 15:11:14 2020  

&nbsp;&nbsp;&nbsp;&nbsp;This exe file was created with the evaluation version of Perl2Exe.  
&nbsp;&nbsp;&nbsp;&nbsp;For more information visit http://www.indigostar.com  
&nbsp;&nbsp;&nbsp;&nbsp;(The full version does not display this message with a 2 second delay.)  
&nbsp;&nbsp;&nbsp;&nbsp;...  

This is the content of *findDIFAT.txt*:

    FILE: c:/findDIFAT.txt
    DATE: Tue Nov  3 15:11:14 2020
    COPYRIGHT GLASSWALL SOLUTIONS LIMITED
    START DIRECTORY: c:/Test_Files
    ------------------------------------------------------------------------
    Number of CFB files found: 16
    Number of non-CFB files found: 0
    Total files found: 16
    ------------------------------------------------------------------------
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000004.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000005.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000006.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000007.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000008.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000009.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000010.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000012.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000013.doc
    cfbFiles: c:/Test_Files/DOC_010/01_Word2000_20000014.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word1997_10002220.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word2000_20002295.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/Word 0014 Fails/ALL_0109.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0030.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0052.doc
    cfbFiles: c:/Test_Files/With_DIFAT_0006/WORD_2007/ALL_0054.doc
    cfbFiles total: 16
    ------------------------------------------------------------------------
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000004.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000005.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000006.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000007.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000008.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000009.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000010.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000012.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000013.doc
    noDIFAT: c:/Test_Files/DOC_010/01_Word2000_20000014.doc
    noDIFAT total: 10
    ------------------------------------------------------------------------
    List of files with DIFAT sectors, prefixed by the number of DIFAT sectors.
    ------------------------------------------------------------------------
    1: c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word1997_10002220.doc
    1: c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word2000_20002295.doc
    1: c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0030.doc
    1: c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0052.doc
    1: c:/Test_Files/With_DIFAT_0006/WORD_2007/ALL_0054.doc
    1 total: 5
    ------------------------------------------------------------------------
    2: c:/Test_Files/With_DIFAT_0006/Word 0014 Fails/ALL_0109.doc
    2 total: 1
    ------------------------------------------------------------------------
        Copied c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word1997_10002220.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/Word 0002 Word_Test_Set_1A_DIFAT_Sectors (01).
        Copied c:/Test_Files/With_DIFAT_0006/Word 0002 Word_Test_Set_1A_DIFAT_Sectors/01_Word2000_20002295.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/Word 0002 Word_Test_Set_1A_DIFAT_Sectors (01).
        Copied c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0030.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/WORD_2003 (01).
        Copied c:/Test_Files/With_DIFAT_0006/WORD_2003/ALL_0052.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/WORD_2003 (01).
        Copied c:/Test_Files/With_DIFAT_0006/WORD_2007/ALL_0054.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/WORD_2007 (01).
        Copied c:/Test_Files/With_DIFAT_0006/Word 0014 Fails/ALL_0109.doc to c:/Tasks/110257-Document_Migration/findDIFAT_OUTPUT/Word 0014 Fails (02).
    6 files copied.
    End time: Tue Nov  3 15:11:14 2020
    -----------------------  End of file c:/findDIFAT.txt  ------------------------

### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>
