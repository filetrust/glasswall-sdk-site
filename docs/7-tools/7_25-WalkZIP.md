---
title: 7.25 Walk ZIP
sidebar_label: 7.25 Walk ZIP
---

### **NAME**
walkZIP - show textual description of parts in a ZIP archive (Package)

### **SYNOPSIS**
**walkZIP --in**(=| )*inputdir* **--out**(=| )*outputfile*<br />
**walkZIP** (**--man** | **--usage** | **--help** | **--version**)

### **DESCRIPTION**
Read in each file and directory in *inputdir* , recursing downwards. Each
file that has a file extension indicating an Office Open XML file
will be processed, and if it is a ZIP archive the part names will be placed in *outputfile*, indented to show their hiearchy.

### **OPTIONS**
**--in**<br />
The directory through which *walkZIP* will recurse, looking for files with extensions that indicate an Office Open XML file.

**--out**<br />
The name of the file where the analysis will be placed.

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

&nbsp;&nbsp;&nbsp;&nbsp;The following Windows 10 terminal session reads recursively from directory *c:\TestData\OFFICE\OOXML* and logs in file *%TEMP%\walkZIP_OUT.txt* the structure of each Office Open XML file.

&nbsp;&nbsp;&nbsp;&nbsp;**walkZIP --in c:\TestData\OFFICE\OOXML --out %TEMP%\walkZIP_OUT.txt**  

Here is an extract from file *walkZIP_OUT.txt* showing how the program indents part names to show the hierarchy of the file:

    ------------------------------------------------------------------------
    FILE NAME: c:/TestData/OFFICE/OOXML/OOXML/DOCX/DOCX_010/01_Word1997_10000177.docx
    [Content_Types].xml
    _rels
        .rels
    docProps
        app.xml
        core.xml
    word
        _rels
            document.xml.rels
        document.xml
        embeddings
            oleObject1.bin
        fontTable.xml
        media
            image1.wmf
        settings.xml
        styles.xml
        theme
            theme1.xml
        webSettings.xml
    ------------------------------------------------------------------------

### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>

### **COPYRIGHT**
&copy; 2014 Glasswall Solutions Limited
