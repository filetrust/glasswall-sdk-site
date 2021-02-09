---
title: 2.2.10 Overview of Operation
sidebar_label: 2.2.10 Overview of Operation
---

The following sections describe the key concepts for successful Glasswall FileTrust SDK operation

## Sessions

In contrast to previous versions, Glasswall FileTrust SDK now operates a session-based model. All file processing must take place within a session. Only one file may be processed per session; processing _n_ files will require the creation of _n_ sessions.

Follow these steps to process a file:

- Open a new session

- Set the input/import

- Set the output/export

- Set any additional options

- Run the session

- Close the session

When a new session is created, Glasswall assigns it a unique session id. As Glasswall allows more than one session to be active at a time, the session id is used to access data and set variables for a particular session.

When opened, each session is assigned its own series of memory buffers. These buffers remain accessible for as long as the session remains open. Once a session is closed the data is no longer available and the allocated memory is released.

Note that the more sessions that are concurrently open, the larger the overall memory requirements will be.

Certain API calls may be used without a session – a full list of these &#39;session-less&#39; functions can be found in the [**Core API Specification**](https://docs.glasswallsolutions.com/sdk/editor/Content/API/Core%20API%20Specification.htm).

## Policy files

A policy file is used to determine how Glasswall should process supplied files. A sample policy is provided.

Whilst a policy file is not required for Glasswall to run, in most cases one is used to customise processing to match requirements. If a policy file is to be used, it must be registered to each session.

If no policy file is specified, Glasswall is set to sanitise files by default.

## Return values from Glasswall

Most functions within the Glasswall API return an integer indicating success or failure. A 0 will indicate success, whilst a negative number (-1) indicates failure.

Certain API calls do not follow this pattern; for example, the &#39;create session&#39; function will return either an error (-1) or the ID of the newly-created session (positive integer). Please refer to the [**Core API Specification**](https://docs.glasswallsolutions.com/sdk/editor/Content/API/Core%20API%20Specification.htm) for full details.

## Data Management

Glasswall processes and saves data using files and/or buffers. The data requirements for these processes are described in the sections below.

### Files

File-based Glasswall API calls require a file path as a parameter. This file name must be encoded as a C-type string; an array of characters terminated with a NULL character. UTF-8 encoding should be used.

### Memory

Memory-based Glasswall API calls require the use of one or more memory buffers. These buffers are defined by a pointer to the first element and the length of the buffer in bytes. This approach allows files containing NULL characters to be processed correctly.

#### Import/Input Functions

These functions require a pointer to the first datum in the buffer and the length of the buffer in bytes.

#### Export/Output Functions

These functions specify the buffer that Glasswall should use when returning processed data. Glasswall requires pointers to both the buffer length and the pointer to the first element, as described below:

- A pointer to the pointer to the first datum in the buffer (char \*\*)

- A pointer to the length of the buffer (size\_t \*)

This extra layer of abstraction is required as the size of this buffer is not known prior to running the session. Dereferencing these pointers allows access to the data returned from Glasswall .

## Files for testing

For a list of the supported file types, see [**File Types Supported**](https://docs.glasswallsolutions.com/sdk/editor/Content/Product-Description/File%20Types%20Supported.htm). Note that function calls or tests that use unsupported file types will not be processed.

The Glasswall FileTrust SDK includes a series of files that may be used for testing. Both valid and invalid files are included in the test set. It is recommended that these files be used for initial testing as they prevent file-based errors causing integration difficulties. The test files cover the entire range of supported file types.