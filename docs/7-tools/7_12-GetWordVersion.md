---
title: 7.12 Get Word Version
sidebar_label: 7.12 Get Word Version
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;getWordVersion - report versions of Word Binary File Format files

### **SYNOPSIS**
**getWordVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file*  [**--files**] [**--debug**\]  
**getWordVersion** (**--usage** | **--help** | **--version** | **--man**)

### **DESCRIPTION**
Read in each file whose extension matches the file glob *\*.doc* in *input_directory* and all subdirectories. Report the version of each matched file.

### ****OPTIONS****
**--in**  
The name of the directory containing the files to be analysed. getWordVersion will recurse downward through all sub-directories and process all files with extension .xls.

**--out**  
The name of the file where the analysis will be placed.

**--files**  
List the files within versions.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and one-line summary of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

**--debug**  
Place debug information in file *getWordVersion_DEBUG.txt*. For development purposes.

### **EXIT STATUS**
|Status|Description
|---|---
|0|success  
|non-zero|error

### **EXAMPLES**
The following command will recurse downward through the *c:\TestData\OFFICE\DOC* directory and report in file *getWordVersion.txt* version-related statistics for all files with file extension .doc. 

&nbsp;&nbsp;&nbsp;&nbsp;**getWordVersion --in** c:\TestData\OFFICE\DOC -**-out** c:\getWordVersion_OUT.txt

This is the content of *c:\getWordVersion_OUT.txt*:

    ------------------------------------------------------------------------
    FILE NAME: C:\getWordVersion_OUT.txt
    DATE: 2020-11-04 14:42:47Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    Word 1997	6	  5.0%
    Word 2000	24	 20.0%
    Word 2002	12	 10.0%
    Word 2003	13	 10.8%
    Word 2007	64	 53.3%
    Total files analysed: 120
    ------------------------------------------------------------------------
    List of invalid values for cbRgFcLcb:

    0X3773:
        PassProtected_01_Word1997_10000006.doc
    ------------------------------------------------------------------------
    FILE C:\getWordVersion_OUT.txt closed at 2020-11-04 14:42:47Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------

The following command will recurse downward through the *c:\TestData\OFFICE\DOC* directory and report in file *getWordVersion.txt* version-related statistics for all files with file extension .doc. It will also provide a list of all the filenames, grouped under their versions.

&nbsp;&nbsp;&nbsp;&nbsp;**getWordVersion --in** c:\TestData\OFFICE\DOC -**-out** c:\getWordVersion_OUT_with_files.txt **--files**

Below is part of the content of *c:\getWordVersion_OUT_with_files.txt*. Each ellipsis (...) indicates a section of text has been removed for brevity in this document.

    ------------------------------------------------------------------------
    FILE NAME: C:\Users\MARTIN~1\AppData\Local\Temp\getWordVersion_OUT_with_files_opt.txt
    DATE: 2020-11-04 14:43:44Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    Word 1997	6	  5.0%
    Word 2000	24	 20.0%
    Word 2002	12	 10.0%
    Word 2003	13	 10.8%
    Word 2007	64	 53.3%
    Total files analysed: 120
    ------------------------------------------------------------------------
    List of invalid values for cbRgFcLcb:

    0X3773:
        PassProtected_01_Word1997_10000006.doc
    ------------------------------------------------------------------------
    File names grouped by version:
    Word 1997:
        EMB_UnclearEmb_EMB_01_Word1997_10000019.doc
        ...
        MET_01_Word1997_10009110.doc
    Word 2000:
        01_Word2000_20000004.doc
        01_Word2000_20000005.doc
        ...
        metadata.doc
        RVSMDCmetadata.doc
    Word 2002:
        EMB_UnclearEmb_EMB_01_Word2002_30001960.doc
        HYP_02_BFF_Pass_Word2002_0001.doc
        ...
        Using Hyperlinks.doc
        readme.doc
    Word 2003:
        EMB_01_Word2003_40000017.doc
        EMB_01_Word2003_40000031.doc
        ...
        nanmvc-nnmsfv-eng.doc
        NGGDPP_Metadata_FAQ 05_05_09.doc
    Word 2007:
        EMB_01_Word2007_50000827.doc
        EMB_Tester_EmbeddedBMP.doc
        ...
        MetadataDocument1.doc
        MetadataDocument2 - 2 Authors.doc
    ------------------------------------------------------------------------
    FILE C:\Users\MARTIN~1\AppData\Local\Temp\getWordVersion_OUT_with_files_opt.txt closed at 2020-11-04 14:43:45Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------

### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>