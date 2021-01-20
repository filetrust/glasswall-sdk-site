---
title: 7.7.1 Get Excel Version
sidebar_label: 7.7.1 Get Excel Version
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;getExcelVersion - report versions of Excel Binary File Format files

### **SYNOPSIS**
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  [**--files**] [**--debug**\]  
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  **--copy** **--target_dir**(=| )*target_directory* [**--files**] [**--debug**\]  
**getExcelVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  **--move** **--target_dir**(=| )*target_directory* [**--files**] [**--debug**\]  
**getExcelVersion** (**--usage** | **--help** | **--version** | **--man**)

### **DESCRIPTION**
Read in each file whose extension matches the file glob *\*.xls* in *input_directory* and all subdirectories. Report the version of each matched file.

### **OPTIONS**
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
Mandatory if **--copy** or **--move** is specified. The directory into which sub-directories named after versions will be created and where the files will be moved or copied. This directory must exist.

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
The following command will recurse downward through the *c:\TestData\OFFICE\XLS* directory and report in file *getExcelVersion.txt* version-related statistics for all files with file extension .xls. 

&nbsp;&nbsp;&nbsp;&nbsp;**getExcelVersion --in c:\TestData\OFFICE\XLS --out getExcelVersion.txt**  

Here is the content of *getExcelVersion.txt*.

    ------------------------------------------------------------------------
    FILE NAME: C:\getExcelVersion.txt
    DATE: 2020-11-03 16:45:59Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    Excel 1997	37	 13.0%
    Excel 2000	46	 16.2%
    Excel 2002	64	 22.5%
    Excel 2003	56	 19.7%
    Excel 2007	49	 17.3%
    Excel 2010	29	 10.2%
    Total files analysed: 284
    ------------------------------------------------------------------------
    List of invalid values for verLastXLSaved:

    0X07:
        PassProtectAll01_Excel1997_0000008.xls
        ProtectCSheet01_Excel1997_0000008.xls
        ProtectStructure_01_Excel1997_0000008.xls
    ------------------------------------------------------------------------
    FILE C:\getExcelVersion.txt closed at 2020-11-03 16:46:07Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------


The following command will recurse downward through the *c:\TestData\OFFICE\XLS* directory and report in file *c:\getExcelVersion_OUTPUT.txt* version-related statistics for all files with file extension .xls. It will create subdirectories in directory *c:\getExcelVersion* named after the versions and copy files of those version into them.

&nbsp;&nbsp;&nbsp;&nbsp;**getExcelVersion --in c:\TestData\OFFICE\XLS --out c:\getExcelVersion_OUTPUT.txt --copy --target_dir c:\getExcelVersion**  
&nbsp;&nbsp;&nbsp;&nbsp;Running findDIFAT.exe version 1.0.0  
&nbsp;&nbsp;&nbsp;&nbsp;Start time:  Tue Nov  3 15:11:14 2020  
&nbsp;&nbsp;&nbsp;&nbsp;Copying files  
&nbsp;&nbsp;&nbsp;&nbsp;...Done  
&nbsp;&nbsp;&nbsp;&nbsp;End time: Tue Nov  3 15:11:14 2020  

&nbsp;&nbsp;&nbsp;&nbsp;This exe file was created with the evaluation version of Perl2Exe.  
&nbsp;&nbsp;&nbsp;&nbsp;For more information visit http://www.indigostar.com  
&nbsp;&nbsp;&nbsp;&nbsp;(The full version does not display this message with a 2 second delay.)  
&nbsp;&nbsp;&nbsp;&nbsp;...  

Below is part of the content of *c:\getExcelVersion.txt*. Each ellipsis (...) indicates a section of text has been removed for brevity in this document. Note also that any errors are reported in the file.

    ------------------------------------------------------------------------
    FILE NAME: C:\getExcelVersion.txt
    DATE: 2020-11-04 09:15:48Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    Excel 1997	37	 13.0%
    Excel 2000	46	 16.2%
    Excel 2002	64	 22.5%
    Excel 2003	56	 19.7%
    Excel 2007	49	 17.3%
    Excel 2010	29	 10.2%
    Total files analysed: 284
    ------------------------------------------------------------------------
    List of invalid values for verLastXLSaved:

    0X07:
        PassProtectAll01_Excel1997_0000008.xls
        ProtectCSheet01_Excel1997_0000008.xls
        ProtectStructure_01_Excel1997_0000008.xls
    ------------------------------------------------------------------------
    File names grouped by version:
    Excel 1997:
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel1997_0000013.xls
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel1997_0000017.xls
        ...
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel1997 [0009] (01)/01_Excel1997_0004657.xls
        c:\TestData\OFFICE\XLS/XLS_008/MAC_EmptyVBA_01_Excel1997_0004982.xls
    Excel 2000:
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2000_0000072.xls
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2000_0000074.xls
        ...
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2000 [0009] (01)/01_Excel2000_0006692.xls
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2000 [0009] (01)/01_Excel2000_0006694.xls
    Excel 2002:
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2002_0000153.xls
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2002_0000154.xls
        ...
        c:\TestData\OFFICE\XLS/XLS_008/MET_01_Excel2002_0000057.xls
        c:\TestData\OFFICE\XLS/XLS_008/MET_01_Excel2002_0000061.xls
    Excel 2003:
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2003_0000450.xls
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2003_0000451.xls
        ...
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2003 [0001] (01)/01_Excel2003_0001790.xls
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2003 [0001] (03)/01_Excel2003_0000128.xls
    Excel 2007:
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2007_0000500.xls
        c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2007_0000672.xls
        ...
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2007 [0007] (01)/01_Excel2007_0002516.xls
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2007 [0007] (01)/01_Excel2007_0003858.xls
    Excel 2010:
        c:\TestData\OFFICE\XLS/Large_VBA_Project/00007_example-multimodaltool.xls
        c:\TestData\OFFICE\XLS/SANITY-TEST-SET_01/Embedded_Files/Tester_EmbeddedBMP.xls
        ...
        c:\TestData\OFFICE\XLS/With_DIFAT/Excel2010 With Macros [0001] (01)/01_Excel2010_0000280.xls
        c:\TestData\OFFICE\XLS/XLS_008/Tester_EmbeddedPNG.xls
    ------------------------------------------------------------------------
    Copying files in Excel 1997:
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel1997_0000013.xls.
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel1997_0000017.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel1997 [0009] (01)/01_Excel1997_0000509.xls.
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel1997 [0009] (01)/01_Excel1997_0004657.xls.
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/MAC_EmptyVBA_01_Excel1997_0004982.xls: 
    Copying files in Excel 2000:
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2000_0000072.xls.
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2000_0000074.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2000 [0009] (01)/01_Excel2000_0006692.xls.
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2000 [0009] (01)/01_Excel2000_0006694.xls.
    Copying files in Excel 2002:
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2002_0000153.xls.
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2002_0000154.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2002 [0009] (01)/01_Excel2002_0006558.xls.
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2002 [0009] (01)/01_Excel2002_0006562.xls.
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/EMB_01_Excel2002_0003760.xls: 
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/HYP_01_Excel2002_0000042.xls: 
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/HYP_01_Excel2002_0000154.xls: 
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/MAC_EmptyVBA_01_Excel2002_0000124.xls: 
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/MET_01_Excel2002_0000057.xls: 
    Error copying file c:\TestData\OFFICE\XLS/XLS_008/MET_01_Excel2002_0000061.xls: 
    Copying files in Excel 2003:
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2003_0000450.xls.
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2003_0000451.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2003 [0001] (01)/01_Excel2003_0001790.xls.
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2003 [0001] (03)/01_Excel2003_0000128.xls.
    Copying files in Excel 2007:
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2007_0000500.xls.
        Copied c:\TestData\OFFICE\XLS/Bugs3002-7-8 Test Files XLS/01_Excel2007_0000672.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2007 [0007] (01)/01_Excel2007_0002516.xls.
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2007 [0007] (01)/01_Excel2007_0003858.xls.
    Copying files in Excel 2010:
        Copied c:\TestData\OFFICE\XLS/Large_VBA_Project/00007_example-multimodaltool.xls.
        Copied c:\TestData\OFFICE\XLS/SANITY-TEST-SET_01/Embedded_Files/Tester_EmbeddedBMP.xls.
        ...
        Copied c:\TestData\OFFICE\XLS/With_DIFAT/Excel2010 With Macros [0001] (01)/01_Excel2010_0000280.xls.
        Copied c:\TestData\OFFICE\XLS/XLS_008/Tester_EmbeddedPNG.xls.
    ------------------------------------------------------------------------
    FILE C:\getExcelVersion.txt closed at 2020-11-04 09:16:04Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------

### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>
