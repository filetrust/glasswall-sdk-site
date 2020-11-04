---
title: Find DIFAT
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;findDIFAT - detect DIFAT sectors in Compound File Binary format files

### **SYNOPSIS**
**findDIFAT** **--in**(=| )*input_directory* **--out**(=| )*output_file* \[**--debug**\]  
**findDIFAT** **--in**(=| )*input_directory* **--out**(=| )*output_file* **--copy** **--target_dir**(=| )*target_directory* \[**--no_difat**\] \[**--debug**\]  
**findDIFAT** **--in**(=| )*input_directory* **--out**(=| )*output_file* **--move** **--target_dir**(=| )*target_directory* \[**--no_difat**\] \[**--debug**\]  
**findDIFAT** (**--usage** | **--help** | **--version** | **--man**)

### **DESCRIPTION**
Read in each file whose extension matches the file glob *\*.doc*, *\*.dot*, *\*.xls*, *\*.xlt*, *\*.pot*, or *\*.ppt* in *input_directory* and all subdirectories. For each matched file, detect the existence of a DIFAT sector. A list of files processed
will be produced, grouped into those with DIFAT sectors and those without.

### ****OPTIONS****
**--in**  
The name of the directory containing the files to be analysed. findDIFAT will recurse downward through all sub-directories and
process all Office files found.

**--out**  
The name of the file where the analysis will be placed.

**--copy**  
Copy files, recursively, from the directory specified by **--in**, and place files with DIFAT sectors in the directory specified by **--target_dir**. If the **--no_difat** option is used, only files without DIFAT sectors will be copied. The files will be placed in subdirectories named after the trailing subdirectory in *input_directory*, creating them as required.  These subdirectory names will be suffixed with the count of DIFAT sectors (if DIFAT files have been copied).

**--move**  
Move files, recursively, from the directory specified by **--in**, and place files with DIFAT sectors in the directory specified by **--target_dir**. If the **--no_difat** option is used, only files without DIFAT sectors will be moved. The files will be placed in subdirectories named after the trailing subdirectory in *input_directory*, creating them as required.  These subdirectory names will be suffixed with the count of DIFAT sectors (if DIFAT files have been moved).

**--target_dir**  
Mandatory if **--copy** or **--move** is specified. The directory into which files will be moved or copied. This directory must exist.

**--no_difat**  
This is a Boolean option and is optional. It can be used only if **--copy** or **--move** is specified to indicate only files that have no DIFAT sectors will be moved or copied. If not used, the default is to move or copy files with DIFAT sectors.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and one-line summary of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

**--debug**  
Place debug information in file *findDIFAT_OUTPUT.txt*. For development purposes.

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

Directory *c:\Test_files* looks like this:

    +---Test_Files
    |  |  +---Word 0002 Word_Test_Set_1A_DIFAT_Sectors
    |  |  |       01_Word1997_10002220.doc
    |  |  |       01_Word2000_20002295.doc
    |  |  |
    |  |  +---Word 0014 Fails
    |  |  |       ALL_0109.doc
    |  |  |
    |  |  +---WORD_2003
    |  |  |       ALL_0030.doc
    |  |  |       ALL_0052.doc
    |  |  |
    |  |  \---WORD_2007
    |  |           ALL_0054.doc

The files will be copied into directory *findDIFAT_OUTPUT*, in the relevant subdirectories:

    +---findDIFAT_OUTPUT
    |  |  +---Word 0002 Word_Test_Set_1A_DIFAT_Sectors (1)
    |  |  |       01_Word1997_10002220.doc
    |  |  |       01_Word2000_20002295.doc
    |  |  |
    |  |  +---Word 0014 Fails (2)
    |  |  |       ALL_0109.doc
    |  |  |
    |  |  +---WORD_2003 (1)
    |  |  |       ALL_0030.doc
    |  |  |       ALL_0052.doc
    |  |  |
    |  |  \---WORD_2007 (1)
    |  |           ALL_0054.doc

Notice the number of DIFAT sectors after the directory name in parentheses. If the files in the original direcetory had different DIFAT counts, separate directories would be created, distinguished by the count.

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
