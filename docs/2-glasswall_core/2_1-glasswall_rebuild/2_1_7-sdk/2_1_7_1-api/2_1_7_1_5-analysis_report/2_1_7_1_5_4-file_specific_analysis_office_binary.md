---
title:  2.1.7.1.5.4 File Specific Analysis - Office Binary
sidebar_label:  2.1.7.1.5.4 File Specific Analysis - Office Binary
---

## gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;doc&quot;, &quot;xls&quot; or &quot;ppt&quot;, passed in through the Glasswall API |
| **gw:Version** | Read from the document&#39;s appropriate stream |

## gw:ContentGroups Common

The table below describes the common items across each of the office products Word, Excel &amp; Powerpoint.

| **Node** | **Name Description** |
| --- | --- |
| **CFB\_Header** | Compound file binary package header |
| **CFB Directory** | Compound file binary directory details |
| **LZ77 INFLATE** | LZ77 decompression information |
| **OLE COMPOBJ** | Object linking and embedding data structures |
| **OLE CURRENT USER** | Current user information |
| **OLE DOCUMENT SUMMARY INFORMATION** | Metadata properties and information |
| **OLE META** | OLE object metadata |
| **OLE OBJ INFO** | OLE object information |
| **OLE SUMMARY INFORMATION** | Metadata properties and information |

## gw:ContentGroups Word

| **Node** | **Name Description** |
| --- | --- |
| **Auto Language Detection** | Auto Language Detection data structures |
| **Auto Summary** | Auto Summary data structures |
| **Auto Text** | Auto text data structures |
| **Bookmarks Annotation Bookmark** | Bookmark data structures |
| **Bookmarks Format Consistency Checker** | Bookmark data structures |
| **Bookmarks Range Level Protection Bookmark** | Bookmark data structures |
| **Bookmarks Repair Bookmark** | Bookmark data structures |
| **Bookmarks Standard** | Bookmark data structures |
| **Bookmarks Structured Document Tag Bookmark** | Bookmark data structures |
| **Comments** | Review comment data structures |
| **Content Stream** | Content stream data structures |
| **Custom XML** | Custom XML storage and properties data structures |
| **Customization Command** | Customization Command properties |
| **Document Information** | Metadata data information and properties |
| **Document Properties** | Metadata data information and properties |
| **Email Data** | Email information properties |
| **Embedded Document** | Embedded document properties |
| **Endnote Document** | Endnote document properties |
| **External File Reference** | External file reference information |
| **File Information Block** | Central data structure information source |
| **Font Data** | Font data properties and information |
| **Footnote Document** | Document footnote data structures |
| **Grammar Checker** | Grammar check settings |
| **Hyperlink or Form Data** | Hyperlink and form information data structures |
| **Main Document** | Document properties |
| **Object Linking and Embedding** | OLE object data structures |
| **Office Art Drawing** | Data structures containing images and Office drawingproperties |
| **Printer Setting** | Printer settings |
| **Revisions** | Document revision data structures |

## gw:ContentGroups Excel

| **Node** | **Name Description** |
| --- | --- |
| **AutoFilter** | AutoFilter property and information |
| **Axis Group** | Axis label properties in excel charts |
| **Chart Information** | Excel chart information data structures |
| **Data Source Information** | Data Source Information |
| **Data Table** | Data table properties |
| **Data Validation** | Excel data validation structures |
| **Drawing Objects** | Drawn object properties |
| **Formatting** | Excel formatting information |
| **Formulas** | Excel formula properties |
| **Functions** | Excel function properties |
| **Hyperlink** | Hyperlink properties |
| **Metadata** | Metadata properties |
| **Office Art Drawing** | Data structures containing images and Office drawing properties |
| **Pivot Table Information** | Pivot Table Information |
| **Printer Setting** | Printer settings |
| **Query Table** | Query table properties |
| **Routing Slip** | Routing slip information |
| **Shared Workbook Information** | Worksheet information |
| **Sheet Information** | Spreadsheet information |
| **String Constants** | String constant properties |
| **Structure Instances** | General data structures used across several groups |
| **Unknown Group** | Unknown or unrecognised data structures |
| **User Interface** | User interface properties |
| **Version** | Version number properties |
| **Workbook Protection** | Password protection properties |

## gw:ContentGroups PowerPoint

| **Node** | **Name Description** |
| --- | --- |
| **Animation** | Types Data structures for Animation properties |
| **Basic Types** | Basic PowerPoint data structures |
| **Broadcast Types** | Presentation broadcast data structures |
| **Comment Author Types** | Data structures containing information on the Authors that create presentation comments |
| **Common Types** | Commonly used data structures |
| **Document Comparison** | Types Data structures used for the comparisons of states across PowerPoint |
| **Document Tag Info Types** | Data structures for programmable tags |
| **Document Types** | Data structures that contain information about the document |
| **Encrypted Types** | Data structures containing file encryption information |
| **External Objects** | OLE Object data structures |
| **Header and footers** | Header and footer data structures |
| **HTML Publish Types** | Data structures containing information for how to publish a document as a Web page |
| **Office Art Drawing** | Data structures containing images and Office drawing properties |
| **Other Types** | Other general data structures |
| **PICTURE Instances** | Image data structures |
| **Printer Settings** | Printer settings data structures |
| **Shape Types** | Data structures containing shape information |
| **Slide List Types** | Data structures containing presentation slide information |
| **Slide Show Types** | Data structures containing presentation slide show information |
| **Slide Types** | Data structures containing presentation slide information |
| **Sound Types** | Data structures containing sound information |
| **Structure Instances** | General data structures used across several groups |
| **Summary Info Types** | Data structures containing metadata information |
| **Text Types** | Data structures that contain text or text formatting properties |
| **View Info Types** | Data structures containing display property information |
| **Visual Basic** | Data Visual basic property information |