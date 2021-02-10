---
title:  2.1.7.1.5.6 File Specific Analysis - Media (Images, Audio and Video)
sidebar_label:  2.1.7.1.5.6 File Specific Analysis - Media (Images, Audio and Video)
---

File Specific Analysis- Media (Images, Audio and Video)

- [**File Specific Analysis - GIF**](#file-specific-analysis---gif)

- [**File Specific Analysis - JPEG**](#file-specific-analysis---jpeg)

- [**File Specific Analysis - PNG**](#file-specific-analysis---png)

- [**File Specific Analysis - EMF**](#file-specific-analysis---emf)

- [**File Specific Analysis - WMF**](#file-specific-analysis---wmf)

- [**File Specific Analysis - BMP**](#file-specific-analysis---bmp)

- [**File Specific Analysis - TIFF**](#file-specific-analysis---tiff)

- [**File Specific Analysis - MPG**](#file-specific-analysis---mpg)

- [**File Specific Analysis - WAV**](#file-specific-analysis---wav)

- [**File Specific Analysis - MP3**](#file-specific-analysis---mp3)

- [**File Specific Analysis - MP4**](#file-specific-analysis---mp4)

## File Specific Analysis - GIF

### gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;gif&quot;, passed in through the Glasswall API |
| **gw:Version** | Read from the document&#39;s Data Stream Header |

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **GIF Colourtable** | Utilised to render raster-based graphics |
| **GIF Extension Block Application**** XMP** | Data consisting of XMP (Extensible Metadata Platform)packets |
| **GIF Extension Block Application** | Application identifier |
| **GIF Extension Block** | Control, graphic-rendering and special purpose blocks |
| **GIF Image Descriptor** | Contains parameters to process a table based image |
| **GIF Local Colour Table** | Associated with graphics that immediately follows. Supersedes global colour table |
| **GIF Logical Screen Descriptor** | Parameters defining area of display device |
| **GIF Table Based Image Data** | Image data for a table based image |

## File Specific Analysis - JPEG

### gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;jpg&quot;, passed in through the Glasswall API |
| **gw:Version** | Not applicable for this document type. |

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **JPEGFileSectionMarker** | SOI, EOI |
| **JPEGFrameData** | Captures document information associated with Start of Frame markers SOF0..SOF15 |
| **JPEGProcessData** | Captures document processing markers DAC, DHT, DQT, DNL, DRI, DHP, EXP, APPn, JPGn, COM, TEM, RES |
| **JPEGScanData** | Captures scan marker information SOS, DRI, RSTm |

## File Specific Analysis - PNG

### gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;png&quot;, passed in through the Glasswall API |
| **gw:Version** | Not applicable for this document type. |

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **BKGD** | Miscellaneous information - background colour |
| **CHRM** | Colour space information |
| **CMPP** | Private chunk |
| **FRAC** | Fractal parameters |
| **GAMA** | Colour space information |
| **GIFG** | GIF conversion information |
| **GIFX** | GIF conversion information |
| **HIST** | Miscellaneous information - histogram |
| **ICCP** | Colour space information |
| **IDAT** | Image data chunk |
| **IEND** | Image trailer, which is the last chunk in a PNG stream |
| **IHDR** | Image header |
| **MKBF** | Private chunk |
| **MKBS** | Private chunk |
| **MKBT** | Private chunk |
| **MKTS** | Private chunk |
| **OFFS** | Image offset |
| **PCAL** | Pixel calibration |
| **PHYS** | Miscellaneous information - physical pixel dimension |
| **PLTE** | Palette table associated with indexed |
| **PNG** | images |
| **PRVW** | Private chunk |
| **SBIT** | Colour space information - significant bits |
| **SCAL** | Physical scale |
| **SPLT** | Miscellaneous information - suggested palette |
| **SRGB** | Colour space information |
| **TEXT** | Textual information - Latin 1 text annotations |
| **TIME** | Time stamp information |
| **TRNS** | Transparency information |
| **ZTXT** | Textual information - Latin 1 text annotations |

## File Specific Analysis - EMF

### gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;emf&quot;, passed in through the Glasswall API |
| **gw:Version** | Read from the document&#39;s appropriate stream |

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **Version** | Version information |
| **Bitmaps** | EMF Bitmaps Instances |
| **Clippings** | EMF Clippings Instances |
| **Comments** | EMF Comments Instance |
| **File Properties** | EMF File Property Instances |
| **Drawings** | EMF Drawings Instances |
| **Escape Functions** | EMF Escape Functions Instances |
| **Graphics Object Creation** | EMF Graphics Object Creation Instances |
| **Graphics Objects Manipulation** | EMF Graphics Objects Manipulation Instances |
| **OpenGL Functions** | EMF OpenGL Functions Instances |
| **State Definitions** | EMF State Definitions Instances |
| **Image Transformations** | EMF Image Transformations Instances |
| **Graphics Objects** | EMF Graphics Objects Instances |
| **Path Records** | EMF Path Records Instances |
| **Common Types** | EMF Common Types Instances |
| **Graphics Objects** | EMF Plus Graphics Objects Instances |
| **Common** | EMF Plus Common Instances |
| **Image Effects** | EMF Plus Image Effects Instances |
| **Clippings** | EMF Plus Clippings Instances |
| **Comments** | EMF Plus Comments Instances |
| **File Control** | EMF Plus File Control Instances |
| **Drawings** | EMF Plus Drawings Instances |
| **Graphics Properties** | EMF Plus Graphics Properties Instances |
| **State Definitions** | EMF Plus State Definitions Instances |
| **Terminal Servers** | EMF Plus Terminal Servers Instances |
| **Image Transformations** | EMF Plus Image Transformations Instances |

## File Specific Analysis - WMF

### gw:DocumentSummary

| **Node** | **Name Description** |
| --- | --- |
| **gw:TotalSizeInBytes** | The size of the file passed in for processing |
| **gw:FileType** | &quot;wmf&quot;, passed in through the Glasswall API |
| **gw:Version** | Read from the document&#39;s appropriate stream |

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **Structure Instances** | WMF Document File Structure Instances |
| **Version** | WMF Document Version Instances |
| **Common Types** | WMF Document Common Types |
| **Bitmap Types** | WMF Document Bitmap Types |
| **File Control** | WMF Document File Control Types |
| **Drawings** | WMF Document Drawings Instances |
| **Graphics Objects Creation** | WMF Document Graphics Objects Creation Instances |
| **Graphics Objects Manipulation** | WMF Document Graphics Object Manipulation Instances |
| **Graphics Objects** | WMF Document Graphics Objects Instances |
| **State Definitions** | WMF Document State Definitions Instances |
| **Escape Functions** | WMF Document Escape Functions Instances |

## File Specific Analysis - BMP

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |

## File Specific Analysis - TIFF

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |

## File Specific Analysis - MPG

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |

## File Specific Analysis - WAV

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |

## File Specific Analysis - MP3

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |

## File Specific Analysis - MP4

### gw:ContentGroups

| **Node** | **Name Description** |
| --- | --- |
| **TBD** |   |