---
title: 2.2.2.4 File Types Supported
sidebar_label: 2.2.2.4 File Types Supported 
---

## Overview

The table below lists the file formats supported by Glasswall FileTrust.

| **File Type** | **Sub Type(s)** | **Document Type** |
| --- | --- | --- |
| **.pdf** |   | PDF documents |
| **.jpg** |   | JPEG image files |
| **.gif** |   | GIF image files |
| **.png** |   | PNG image files |
| **.emf** |   | EMF image files |
| **.wmf** |   | WMF image files |
| **.tif** | .tiff, Geotiff | TIFF image files |
| **.bmp** |   | BMP image files |
| **.doc** | .dot | Word Binary File Format files |
| **.xls** | .xlt | Excel Binary File Format files |
| **.ppt** | .pot | PowerPoint Binary File Format files |
| **.docx** | .docm, .dotx, .dotm | Office Open XML Document files |
| **.xlsx** | .xlsm, .xltx, .xltm | Office Open XML Workbook files |
| **.pptx** | .pptm, .ppsx, .ppam, .potm, .ppsm | Office Open XML Presentation files |
| **.wav** |   | Waveform audio file |
| **.mpg** |   | MP2 media files |
| **.mp3** |   | MP3 media files |
| **.mp4** |   | MP4 media files |
| **PE** | .dll, .mui, .exe | Windows PE binary executables |
| **Mach-O** | COFF | Mach-O format binaries |
| **ELF** |   | ELF format binaries |

### Supported File Sizes

Glasswall FileTrust provides 64-bit version of a Dynamic-link Libraries (.DLL) for Windows and/or Shared Objects (.SO) for Linux operating systems that can analyse and protect  **files up to the size of 2GiB**  (230 bytes) provided that other internal limits (such as recursion depth) are satisfied.

## PDF

### Processing Specific to PDF in Protect Mode

PDF is the only file type that allows for an optional watermark to be added to the regenerated file. The watermark is a maximum of 20 (ASCII) characters and is added to the top right hand corner of each page of the regenerated file.

#### Specification Validated Against

- PDF Reference (third edition) Adobe Portable Document Format Version 1.7
 Note that Glasswall FileTrust supports PDF Reference (third edition) Adobe Portable Document Format from Version 1.3.

## Images

There are no content management switches for any of the image file formats. Images embedded in a document which do not conform to the specification would result in the original document being quarantined.

### JPG

**Specification Validated Against**

- JPEG File Interchange Format, Version 1.02 September 1, 1992

- JP2 for ISO/IEC 15444-1 (JPEG 2000)

- JPX for ISO/IEC 15444-2 (JPEG 2000)

### GIF

**Specification Validated Against**

- Graphics Interchange Format, Version GIF 87

- Graphics Interchange Format, Version GIF 89a

### PNG

**Specification Validated Against**

- Portable Network Graphics (PNG): Functional specification. ISO/IEC 15948:2003 (E)

### EMF

**Specification Validated Against**

- [MS-EMF]: Enhanced Metafile Format: Open Specifications Documentation. v20151016

- [MS-EMFPLUS]: Enhanced Metafile Format Plus Extensions: : Open Specifications Documentation. V20121017

### WMF

**Specification Validated Against**

- [MS-WMF]: Windows Metafile Format: Open Specifications Documentation. v20121017

### TIFF and GeoTIFF

**Specification Validated Against**

- TIFF 6.0 Specification: Final – June 3, 1992

- GeoTIFF Format Specification - Specification Version: 1.8.1

### BMP

**Specification Validated Against**

- BMP is covered by the WMF file specification.

## Binary Office

### Processing Specific to Binary Office in Protect Mode

The content management switch GWFILE\_MANAGE\_REMOVE\_MACROS when set to sanitise in Protect mode removes the VBA script from the regenerated file but copies over the macro container. This can give the impression that the macros have not been deleted.

The content management switch GWFILE\_MANAGE\_REMOVE\_EMBEDDED\_FILES when set to sanitise in Protect mode do one of two options.

- If the embedded file is one that Glasswall FileTrust supports it will process that file as if it were a standalone file, including its own configuration management polices if appropriate. If the file can be regenerated the regenerated file will be re-embedded, if it cannot the file it is part of will be marked as non-conforming.

- If the embedded file is one that Glasswall FileTrust cannot process like a .wps or .dat file then the embedded file is removed.

Embedded files are validated to five levels deep.

### DOC

**Specification Validated Against**

The following specifications are used to validate a doc file type:

- From [MS-DOC]: Word (.doc) Binary File Format - Microsoft Corporation, 2011, v20121003 to [MS-DOC]: Word (.doc) Binary File Format - Corporation, 2017, v20170112

- Office Common Data Types and Objects Structure Specification- Microsoft Corporation, 2011, v20110608

- Office Document Cryptography Structure Specification- Microsoft Corporation, 2011, v20110608

- Office VBA File Format Structure Specification- Microsoft Corporation, 2011, v20110608

The following files extensions are supported .doc, .dotm and .dot.

**Specification Validated Against**

Word 95 and earlier versions (Word 1 to Word 6) are not supported and if these file types are processed they will cause an Issue to be reported in the XML report  in Analysis mode and the file not to be regenerated in Protect mode.

Word files containing Apple Mac or LibreOffice specific file features will be marked as non conformant.

### XLS

**Specification Validated Against**

The following specifications are used to validate an xls file type:

- From [MS-XLS]: Excel Binary File Format (.xls) Structure Specification - Microsoft Corporation, v20141018 to [MS-XLS]: Excel Binary File Format (.xls) Structure Specification - Microsoft Corporation, v20161017.

- Spreadsheet Data Model File Format

- Office Graph Binary File Format v20141019

The following files extensions are supported .xls, .xla, .xlt and .xlsb.

**Specification Validated Against**

Excel 95 and earlier versions are not supported and these file types are processed cause an Issue to be reported in the XML report  in Analysis mode and the file not to be regenerated in Protect mode.

Excel files containing Apple Mac or LibreOffice specific file features will be marked as non conformant.

### PPT

**Specification Validated Against**

The following specifications are used to validate a doc file type against:

- From [MS-PPT]: PowerPoint (.ppt) Binary File Format - Microsoft Corporation, v20121003 to [MS-PPT]: PowerPoint (.ppt) Binary File Format - Microsoft Corporation, v20160922.

The following files extensions are supported .ppt,  .ppa, .pps, and .pot.

**Specification Validated Against**

PowerPoint 95 and earlier versions are not supported and if these file types are processed it will cause an Issue to be reported in the XML report  in Analysis mode and the file not to be regenerated in Protect mode.

PowerPoint files containing Apple Mac or LibreOffice specific file features will be marked as non conformant.

## XML Office

### Processing Specific to XML Office in Protect Mode

If a XML Office file has another XML Office file embedded inside it and the GWFILE\_MANAGE\_REMOVE\_EMBEDDED\_FILES is set to sanitise, the embedded file will be removed when a new file is regenerated.

Office XML files are stored as zipped archive files and although the zipped file may be less than 10Mb when the streams are extracted and uncompressed an individual stream may be greater than 10MB. When using the 32-bit DLL, streams that are larger than that 10 MB cause the file to be marked as non–conforming and are not processed any further. When using the 64-bit DLL, streams of up to 50MB are processed.

**Specification Validated Against**

#### Office 2010

The following specifications are used to validate docx/xlsx/pptx file types:

- [ECMA-376 4th edition Part 1](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-376,%20Fourth%20Edition,%20Part%201%20-%20Fundamentals%20And%20Markup%20Language%20Reference.zip)

- [ECMA-376 4th edition Part 2](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-376,%20Fourth%20Edition,%20Part%202%20-%20Open%20Packaging%20Conventions.zip)

- [ECMA-376 4th edition Part 3](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-376,%20Fourth%20Edition,%20Part%203%20-%20Markup%20Compatibility%20and%20Extensibility.zip)

- [ECMA-376 4th edition Part 4](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-376,%20Fourth%20Edition,%20Part%204%20-%20Transitional%20Migration%20Features.zip)

#### Office 2013

The following specifications are used to validate docx/xlsx/pptx file types:

- Word (.docx) Extensions to the Office Open XML SpreadsheetML File Format

- Excel (.xlsx) Extensions to the Office Open XML SpreadsheetML File Format

- PowerPoint  (.pptx) Extensions to the Office Open XML SpreadsheetML File Format

- Office Drawing Extensions to the Office Open XML Structure

The following files extensions are supported:

- .docx, .docm, .dotx

- .xlsx, .xlsm, .xltm, .xltx

- .pptx, .pptm, .ppsm, .ppam, .ppsx

**Specification Validated Against**

Office 2010 or Office 2013 files containing Apple Mac or LibreOffice specific file features may be marked as non conformant or the components may be removed from the file.

### WAV

**Specification Validated Against**

- Multimedia Programming Interface and Data Specifications 1.0 August 1991.

### MPG

**Specification Validated Against**

- ISO/IEC 13818-1:2000(E). Second edition 2000-12-01

### MP3

**Specification Validated Against**

MPEG Layer III audio encoding is defined in two ISO/IEC specification families:

- MPEG-1: ISO/IEC 11172-3. Information technology -- Coding of moving pictures and associated audio for digital storage media at up to about 1,5 Mbit/s -- Part 3: Audio.

- MPEG-2: ISO/IEC 13818-3. Information technology -- Generic coding of moving pictures and associated audio information -- Part 3: Audio.

### MP4

**Specification Validated Against**

- ISO/IEC 14496-12:2005(E). Part 12: Corrected version 2005-10-01.

### PE and COFF

**Specification Validated Against**

- Microsoft Portable Executable and Common Object File Format Specification Revision 6.0 – February 1999.

### ELF

**Specification Validated Against**

- Tool Interface Standard (TIS) Executable and Linking Format (ELF) Specification Version 1.2. May 1995

- ELF-64 Object File Format Version 1.2 Draft 2. May 27, 1998.

### Mach-O

**Specification Validated Against**

- OS X ABI Mach-O File Format Reference. 2009-02-04.