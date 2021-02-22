---
title: 2.2.6.1.5.1 Archive Manager
sidebar_label: 2.2.6.1.5.1 Archive Manager
---

## Overview

The Glasswall Archive Manager is a wrapper around the Glasswall CDR (Content Disarm and Reconstruction) Engine. It provides support for Archive file formats by extracting the input archive and handing each file within the archive to the Glasswall engine for processing. The regenerated, exported, imported files or XML analysis reports are then packaged in a brand new archive while preserving the directory structure of the original archive.

### Supported Archive Types

The table below lists the archive formats supported by Glasswall Archive Manager:

| Archive Type             | Description                   |
|--------------------------|-------------------------------|
| 7Zip                     | Open architecture compression |
| BZip2                    | open-source file compression  |
| GZip                     | Compression for GNU           |
| Rar (Decompression only) | Roshal Archive compression    |
| Tar                      | Tape Archive                  |
| Zip                      | Lossless data compression     |

## Processing Modes

There are four processing modes, Analysis, Protect, Export and Import.

### Analysis
The input archive is decompressed, each file within the archive is passed to the Glasswall engine for processing in analysis mode, the resulting XML analysis reports are repackaged in a new archive while preserving the original directory structure.

### Protect
The input archive is decompressed, each file within the archive is passed to the Glasswall CDR engine for processing in protect mode, the regenerated files are repackaged in a new archive while preserving the original directory structure.

### Export and Import
The Glasswall engine provides the ability to export and import the engine's internal representation of a file structure in an intermediate format such as XML or SISL. This allows internal components of a file to be made available to external programs for additional processing, before recomposing the file to include those externally modified components with a call to **import** API.

**NOTE:** These modes are only supported when the archive manager is used with the Editor SDK.

#### Export
Files are processed as follows in this mode: 
- The input archive is decompressed 
- Each file within the archive is passed to the Glasswall engine for processing in export mode. Each export package will consist of XML/SISL files which make up each processed input file. 
- The resulting export packages are repackaged in a new archive while preserving the original directory structure.

#### Import
Files are processed as follows in this mode: 
- The input archive is decompressed
- Each export package within the archive is passed to the Glasswall engine for processing in import mode, the resulting generated files are repackaged in a new archive while preserving the original directory structure. 

## Examples

 - [Config Example](2_2_6_1_5_2-config.md)
 - [Usage Example](2_2_6_1_5_3-example.md)

## API
Each of the APIs returns a `Status` type, which is defined as follows:

```c++
enum Status {
    eFail,
    eSuccess
};
```



### GwFileProtectAndReportArchive

This is used to call the archive manager, process the specified input archive and produce an output archive along with a report.

```
status_t GwFileProtectAndReportArchive(
    void *inputBuffer, 
    size_t inputBufferLength, 
    void **outputFileBuffer, 
    size_t *outputFileBufferLength, 
    void **outputReportBuffer, 
    size_t *outputReportBufferLength, 
    const char *xmlConfigString
    )
```

| Name                     | Type           | Direction | Description                                                                                                                                      |
|--------------------------|----------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| inputBuffer              | `void *`       | In        | A pointer to the buffer containing the input file to be processed                                                                                |
| inputBufferLength        | `size_t`       | In        | The size of the input file buffer                                                                                                                |
| outputFileBuffer         | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the processed file buffer. This buffer is allocated by the archive manager        |
| outputFileBufferLength   | `size_t *`     | Out       | A pointer to the size of the output file buffer. This will be set by the archive manager                                                         |
| outputReportBuffer       | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the archive manager report buffer. This buffer is allocated by the archive manager|
| outputReportBufferLength | `size_t *`     | Out       | A pointer to the size of the archive manager report. This will be set by the archive manager                                                     |
| xmlConfigString          | `const char *` | In        | A pointer to the buffer containing the content management XML file. This buffer needs to be null terminated                                      |


### GwFileAnalysisArchive

This is used to call the archive manager, process the specified input archive and produce a package (archive) containing reports 
for each file within the processed input archive, as well as a general report for the input archive.

```
status_t GwFileAnalysisArchive(
    void *inputBuffer, 
    size_t inputBufferLength, 
    void **outputFileBuffer, 
    size_t *outputFileBufferLength, 
    void **outputAnalysisReportBuffer, 
    size_t *outputAnalysisReportBufferLength, 
    const char *xmlConfigString
    )
```

| Name                              | Type           | Direction | Description                                                                                                                                      |
|-----------------------------------|----------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| inputBuffer                       | `void *`       | In        | A pointer to the buffer containing the input file to be processed                                                                                |
| inputBufferLength                 | `size_t`       | In        | The size of the input file buffer                                                                                                                |
| outputFileBuffer                  | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the resulting archive. This buffer is allocated by the archive manager            |
| outputFileBufferLength            | `size_t *`     | Out       | A pointer to the size of the output file buffer. This will be set by the archive manager                                                         |
| outputAnalysisReportBuffer        | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the archive manager report buffer. This buffer is allocated by the archive manager|
| outputAnalysisReportBufferLength  | `size_t *`     | Out       | A pointer to the size of the archive manager report. This will be set by the archive manager                                                     |
| xmlConfigString                   | `const char *` | In        | A pointer to the buffer containing the content management XML file. This buffer needs to be null terminated                                      |


### GwFileExportArchive

This is used to call the archive manager, process the specified input archive and produce **export** packages containing the internals of a each file within the archive. 

```
status_t GwFileExportArchive(
    void *inputBuffer, 
    size_t inputBufferLength, 
    void **outputFileBuffer, 
    size_t *outputFileBufferLength, 
    void **outputReportBuffer, 
    size_t *outputReportBufferLength, 
    const char *xmlConfigString
    )
```

| Name                     | Type           | Direction | Description                                                                                                                                      |
|--------------------------|----------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| inputBuffer              | `void *`       | In        | A pointer to the buffer containing the input file to be processed                                                                                |
| inputBufferLength        | `size_t`       | In        | The size of the input file buffer                                                                                                                |
| outputFileBuffer         | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the processed file buffer. This buffer is allocated by the archive manager        |
| outputFileBufferLength   | `size_t *`     | Out       | A pointer to the size of the output file buffer. This will be set by the archive manager                                                         |
| outputReportBuffer       | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the archive manager report buffer. This buffer is allocated by the archive manager|
| outputReportBufferLength | `size_t *`     | Out       | A pointer to the size of the archive manager report. This will be set by the archive manager                                                     |
| xmlConfigString          | `const char *` | In        | A pointer to the buffer containing the content management XML file. This buffer needs to be null terminated                                      |



### GwFileImportArchive

This is used to call the archive manager, process each **export package** (containing internals of each file) and regenerate output archive containing reconstructed files.

```
status_t GwFileImportArchive(
    void *inputBuffer, 
    size_t inputBufferLength, 
    void **outputFileBuffer, 
    size_t *outputFileBufferLength, 
    void **outputReportBuffer, 
    size_t *outputReportBufferLength, 
    const char *xmlConfigString
    )
```

| Name                     | Type           | Direction | Description                                                                                                                                      |
|--------------------------|----------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| inputBuffer              | `void *`       | In        | A pointer to the buffer containing the input file to be processed                                                                                |
| inputBufferLength        | `size_t`       | In        | The size of the input file buffer                                                                                                                |
| outputFileBuffer         | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the processed file buffer. This buffer is allocated by the archive manager        |
| outputFileBufferLength   | `size_t *`     | Out       | A pointer to the size of the output file buffer. This will be set by the archive manager                                                         |
| outputReportBuffer       | `void **`      | Out       | A pointer to a pointer to a buffer that will be populated with the archive manager report buffer. This buffer is allocated by the archive manager|
| outputReportBufferLength | `size_t *`     | Out       | A pointer to the size of the archive manager report. This will be set by the archive manager                                                     |
| xmlConfigString          | `const char *` | In        | A pointer to the buffer containing the content management XML file. This buffer needs to be null terminated                                      |

### GwArchiveDone

This is used to release any resources that have been allocated by the archive manager. This function needs to be called after each call made to the 'GwFileAnalysisArchive' or 'GwFileProtectAndReportArchive' function otherwise memory leaks may occur.

```
void GwArchiveDone()
```