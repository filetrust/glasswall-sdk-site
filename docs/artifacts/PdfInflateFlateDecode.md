---
title: PDF Inflate Flate Encoded Streams
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;pdfInflateFlateDecode - Inflate all Flate encoded streams in a PDF file

### **SYNOPSIS**
**pdfInflateFlateDecode.py** *input_file_name* *output_directory_name*  
**pdfInflateFlateDecode.py** **-h**

### **DESCRIPTION**
Look for all occurrences of Flate encoded streams in *input_file_name* and inflate them. Place the data for each inflated stream in directory *output_directory_name* in a file named in the form 'object_b'*nnn*'.bin' where *nnn* is a three-digit integer, left-padded with zeros, representing the object number of the Flate encoded stream.

### **OPTIONS**
**--h** Provide help about the arguments available.

### **EXIT STATUS**
|Status|Description
|---|---
|0|success  
|non-zero|error

### **NOTES**
*pdfInflateFlateDecode.py* will work only in Python 3.x.

### **EXAMPLES**

The following command is run in a *cmd* window on Windows 10. It will read in PDF file *c:\TestData\PDF\Misc_PDF_0008\AdobeID.pdf* and place the extracted streams in directory *%TEMP%\pdfInflate_OUT*. Note the use of *py* (*py.exe*) the Windows launcher.

&nbsp;&nbsp;&nbsp;&nbsp;**py pdfInflateFlateDecode.py c:\TestData\PDF\Misc_PDF_0008\AdobeID.pdf %TEMP%\pdfInflate_OUT**  
&nbsp;&nbsp;&nbsp;&nbsp;Running pdfInflateFlateDecode.py Version 1.0.0  
&nbsp;&nbsp;&nbsp;&nbsp;Count of 'stream': 8  
&nbsp;&nbsp;&nbsp;&nbsp;cStream = 8  
&nbsp;&nbsp;&nbsp;&nbsp;cEndStream = 8  
&nbsp;&nbsp;&nbsp;&nbsp;Error: Error -3 while decompressing data: incorrect header check  
&nbsp;&nbsp;&nbsp;&nbsp;Error: Error -3 while decompressing data: incorrect header check  
&nbsp;&nbsp;&nbsp;&nbsp;Streams inflated:  6  
&nbsp;&nbsp;&nbsp;&nbsp;Failed inflations: 2  
&nbsp;&nbsp;&nbsp;&nbsp;Total streams:     8  

This is a listing of directory *%TEMP%\pdfInflate_OUT*:

    05/11/2020  11:35    <DIR>          .
    05/11/2020  11:35    <DIR>          ..
    05/11/2020  11:35            94,875 obj_b'006'.bin
    05/11/2020  11:35             4,212 obj_b'023'.bin
    05/11/2020  11:35            57,960 obj_b'025'.bin
    05/11/2020  11:35            57,600 obj_b'027'.bin
    05/11/2020  11:35             1,519 obj_b'028'.bin
    05/11/2020  11:35               134 obj_b'033'.bin
                6 File(s)        216,300 bytes
                2 Dir(s)  388,539,904,000 bytes free


### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>
