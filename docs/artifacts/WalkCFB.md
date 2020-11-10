---
title: Walk CFB
---

### **NAME**
walkCFB - show how streams and storages are related in a Compound File Binary format file

### **SYNOPSIS**
**walkCFB** **--in**(=| )*inputdirectory* **--out**(=| )*outputfile* \[**--structs**\] \[**--stats**\] \[**--streams**(=| )*streamsdirectory*\]<br />
**walkCFB** (**--man** | **--usage** | **--help** | **--version**)

### **DESCRIPTION**
Recurse downwards through *inputdirectory*, processing each file with extension 
.doc, .dot, .xls, or .ppt. For each file, the streams and storages contained will
be shown in indented form to show the hierachical relationships. Each stream or
storage will be suffixed with its Stream ID.

At the end of the output, a statistical section will be displayed showing the
names of all streams and storages along with a frequency count of each.

Options can be used to indicate that only a hierarchical output is
required (**--structs**), or only statistical output (**--stats**).
If no flags are specified, hierarchical and statistical output will
be generated.

If the **--streams** option is used, the directory specified will be used
as the starting directory for a structure of directories reflecting
the structure of the Compound File Binary, and each stream's binary
data will be placed in a separate file.


### **OPTIONS**
**--in**<br />
The name of the directory to be processed. All subdirectories will will be recursively processed. Only filenames with extensions .doc, .dot, .xls, and .ppt will be processed.

**--out**<br />
The name of the file where all processing output will be placed.

**--stats**<br />
Output only a statistical analysis of the streams and storages found.

**--structs**<br />
Output only a hierarchical view of the streams and storages within each file.

**--streams**<br />
This option will extract all the streams from each file and place the data for each stream in a file named after the stream.
The argument to this option is the directory under which the directory structure containing the extracted stream files will be placed.
It will be created if it does not exist.

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

### **EXAMPLES**
The following Windows 10 command session demonstrates the use of the script to provide analysis of the files in the directory passed as an argument to the **--in** option: 

&nbsp;&nbsp;&nbsp;&nbsp;**walkCFB --in c:\test_files --out c:\temp\walkCFB_OUT.txt**<br />
&nbsp;&nbsp;&nbsp;&nbsp;Running walkCFB.exe version 3.2.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;Start time:  Mon Nov  9 15:52:40 2020<br />
&nbsp;&nbsp;&nbsp;&nbsp;End time:    Mon Nov  9 15:52:40 2020<br />

&nbsp;&nbsp;&nbsp;&nbsp;This exe file was created with the evaluation version of Perl2Exe.<br />
&nbsp;&nbsp;&nbsp;&nbsp;For more information visit http://www.indigostar.com<br />
&nbsp;&nbsp;&nbsp;&nbsp;(The full version does not display this message with a 2 second delay.)<br />
&nbsp;&nbsp;&nbsp;&nbsp;...<br />

This is part of the content of file *c:\temp\walkCFB_OUT.txt*, showing the analysis of the file and the statistics at the end of the file. Ellipses denote the removal of certain content for the purposes of brevity for display on this page.

    FILE: c:\temp\walkCFB_OUT.txt
    DATE: Mon Nov  9 15:52:40 2020
    COPYRIGHT GLASSWALL SOLUTIONS LIMITED
    START DIRECTORY: c:/Tasks/110257-Document_Migration/Script_Test_Files/DOC_010
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000004.doc
    1Table (SID: 1)
    \1CompObj (SID: 5)
    ObjectPool (SID: 6)
    WordDocument (SID: 2)
    \5SummaryInformation (SID: 3)
    \5DocumentSummaryInformation (SID: 4)
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000005.doc
    1Table (SID: 1)
    \1CompObj (SID: 5)
    ObjectPool (SID: 6)
    WordDocument (SID: 2)
    \5SummaryInformation (SID: 3)
    \5DocumentSummaryInformation (SID: 4)
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000006.doc
    ...
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000007.doc
    ...
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000008.doc
    ...
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000009.doc
    ...
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000010.doc
    Data (SID: 1)
    1Table (SID: 10)
    \1CompObj (SID: 13)
    ObjectPool (SID: 3)
        _1101724569 (SID: 4)
            \1Ole (SID: 5)
            \1CompObj (SID: 6)
            \3ObjInfo (SID: 7)
            CONTENTS (SID: 8)
            CONTENTSV30 (SID: 9)
    WordDocument (SID: 2)
    \5SummaryInformation (SID: 11)
    \5DocumentSummaryInformation (SID: 12)
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000012.doc
    ...
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000013.doc
    Data (SID: 1)
    1Table (SID: 13)
    \1CompObj (SID: 16)
    ObjectPool (SID: 3)
        _1093270047 (SID: 4)
            \1Ole (SID: 5)
            \1CompObj (SID: 6)
            \3ObjInfo (SID: 7)
            Pictures (SID: 8)
            Current User (SID: 9)
            \5SummaryInformation (SID: 10)
            PowerPoint Document (SID: 11)
            \5DocumentSummaryInformation (SID: 12)
    WordDocument (SID: 2)
    \5SummaryInformation (SID: 14)
    \5DocumentSummaryInformation (SID: 15)
    ------------------------------------------------------------------------
    FILE NAME: c:/test_files/01_Word2000_20000014.doc
    ...
    ------------------------------------------------------------------------
    ============================== STATISTICS ==============================
    \1CompObj	12
    \5DocumentSummaryInformation	11
    \5SummaryInformation	11
    WordDocument	10
    1Table	10
    ObjectPool	10
    Data	4
    \3ObjInfo	2
    \1Ole	2
    Pictures	1
    _1093270047	1
    CONTENTSV30	1
    PowerPoint Document	1
    CONTENTS	1
    Current User	1
    _1101724569	1
    ------------------------------------------------------------------------
    Processed files - doc: 10
    Processed files total: 10
    -----------------------  End of file c:\temp\walkCFB_OUT.txt  ------------------------
    End time:  Mon Nov  9 15:52:40 2020

The following Windows 10 command session shows the use of the **--streams** option:

&nbsp;&nbsp;&nbsp;&nbsp;**walkCFB --in c:\test_files --out c:\temp\walkCFB_OUT.txt --streams c:\temp\walkCFB_OUT-streams**

This is the structure of directory *c:\temp\walkCFB_OUT-streams* with the contents of one of the directories shown:

    \---c:\temp\walkCFB_OUT-streams
        +---01_Word2000_20000004.doc
        +---01_Word2000_20000005.doc
        +---01_Word2000_20000006.doc
        +---01_Word2000_20000007.doc
        +---01_Word2000_20000008.doc
        +---01_Word2000_20000009.doc
        +---01_Word2000_20000010.doc
        |   |   1CompObj.BIN
        |   |   1Table.BIN
        |   |   5DocumentSummaryInformation.BIN
        |   |   5SummaryInformation.BIN
        |   |   Data.BIN
        |   |   WordDocument.BIN
        |   |
        |   \---ObjectPool
        |       \---_1101724569
        |               1CompObj.BIN
        |               1Ole.BIN
        |               3ObjInfo.BIN
        |               CONTENTS.BIN
        |               CONTENTSV30.BIN
        |
        +---01_Word2000_20000012.doc
        +---01_Word2000_20000013.doc
        \---01_Word2000_20000014.doc





### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>

### **COPYRIGHT**
&copy; Glasswall Solutions Limited

### **SEE ALSO**
[cfbGeneology](cfbGeneology), [checkCFBSignature](checkCFBSignature), [WordDissection](WordDissection)