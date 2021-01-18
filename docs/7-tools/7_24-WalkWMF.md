---
title: 7.24 Walk WMF
sidebar_label: 7.24 Walk WMF
---

### **NAME**
walkWMF - show textual description of Windows Metafile (WMF) files

### **SYNOPSIS**
**walkWMF --in**(=| )*inputdir* **--out**(=| )*outputfile*<br />
**walkWMF** (**--man** | **--usage** | **--help** | **--version**)

### **DESCRIPTION**
Recurse downwards through *inputdir*, processing each file with extension 
.wmf. For each file, a file will be created whose name is the name of the file processed with ".txt" appended. The format of the output is provided by 
the CPAN *Dumpvalue* module. How to interpret the results is explained in the *EXAMPLES* section below.

### **OPTIONS**
**--in**<br />
The directory through which *walkWMF* will recurse, looking for files with extension .wmf.

**--out**<br />
The file containing any diagnostics such as files it failed to open, files found that did not have an extension of .wmf, or any exceptions that were caught. It is important to note that the file structures of WMF files are not placed in here, they are placed in files named after the file with .txt suffixed.

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

### **BUGS**
The program can take a long time to run on large files (> 15 MB), an average
of 30 seconds has been calculated. Smaller files take less than five seconds.

### **EXAMPLES**
The following Windows 10 command session demonstrates the use of the script to provide analysis of WMF files in the directory passed as an argument to the **--in** option with diagnostics placed in the file provided by the **--out** option:

&nbsp;&nbsp;&nbsp;&nbsp;**walkWMF --in c:\TestData\OFFICE\OOXML --out %TEMP%\walkWMF_output**.txt

File *walkWMF_output.txt* contains this:

    ------------------------------------------------------------------------
    FILE NAME: C:\Users\MARTIN~1\AppData\Local\Temp\walkWMF_output.txt
    DATE: 2020-11-10 13:02:52Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    ------------------------------------------------------------------------
    Total WMF files processed: 9
    ------------------------------------------------------------------------
    FILE C:\Users\MARTIN~1\AppData\Local\Temp\walkWMF_output.txt closed at 2020-11-10 13:02:53Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------

Note that there were no non-WMF files encountered, and all files encountered were opened successfully.

The structure of each of the files will be in a text file named after the file with '.txt' suffixed to the filename; it will be in the same director as the file analysed. Below is the directory structure after *walkCFB* has been run. All the files with extension .txt were created by *walkCFB*:

    c:\TestData\OFFICE\OOXML
    \---DOCX
        +---DOCX_010-EXTRACTED
        |   +---01_Word1997_10000176
        |   |   \---word
        |   |       \---media
        |   |               image1.wmf
        |   |               image1.wmf.txt
        |   |               image2.wmf
        |   |               image2.wmf.txt
        |   |               image3.wmf
        |   |               image3.wmf.txt
        |   |               image4.wmf
        |   |               image4.wmf.txt
        |   |
        |   \---01_Word1997_10000177
        |       \---word
        |           \---media
        |                   image1.wmf
        |                   image1.wmf.txt
        |
        \---DOCX_100-EXTRACTED
            \---01_Word1997_10003895
                \---word
                    \---media
                            image3.wmf
                            image3.wmf.txt
                            image4.wmf
                            image4.wmf.txt
                            image5.wmf
                            image5.wmf.txt
                            image6.wmf
                            image6.wmf.txt

Here is an example of the contents of *image4.wmf.txt*. The file contains over 600 lines so certain parts have been removed for presentation here, marked with ellipses. How to interpret the output is explaine below.

    ------------------------------------------------------------------------
    FILE NAME: image4.wmf.txt
    DATE: 2020-11-10 13:02:52Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------
    'header_size' => 9
    'number_of_objects' => 8
    'number_of_params' => 0
    'placeable_header' => HASH
       'bottom' => 234
       'checksum' => 22397
       'handle' => 0
       'key' => 2596720087
       'left' => 0
       'right' => 859
       'top' => 0
       'units_per_inch' => 989
    'records' => ARRAY
       0  HASH
          'function' => 'META_SETMAPMODE'
          'params' => ARRAY
             0  8
          'size' => 4
       1  HASH
          'function' => 'META_SETWINDOWORG'
          'params' => ARRAY
             0  0
             1  0
          'size' => 5
        ...
    'size' => 536
    'size_of_largest_record' => 28
    'type' => 'File'
    'version' => 768
    ------------------------------------------------------------------------
    FILE image4.wmf.txt closed at 2020-11-10 13:02:52Z
    Copyright © 2020 Glasswall Solutions Limited
    ------------------------------------------------------------------------

The format *walkWMF* uses to describe the records in a WMF file is provided by the Perl CPAN module *Dumpvalue*.

In Perl, hash references are indicated by the word *HASH* (equivalent to dictionaries) followed by the paired contents separated by `=>` . In the example above I have shown the first two elements of the array *RECORDS*. If we
reformat the output into a more familiar format, [JSON](https://www.json.org/json-en.html), the first two elements, records[0] and records[1], would look like this:

    'records':
    [
       {
          'function': 'META_SETMAPMODE',
          'params: [8],
          'size': 4
       }
       {
          'function': 'META_SETWINDOWORG',
          'params': [0, 1],
          'size': 5
       }
        ...
    ]

### **AUTHOR**
Martin O'Brien mobrien@glasswallsolutions.com

### **COPYRIGHT**
&copy; 2014 Glasswall Solutions Limited
