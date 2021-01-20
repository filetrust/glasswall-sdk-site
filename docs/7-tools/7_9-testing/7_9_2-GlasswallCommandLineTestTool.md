---
title: 7.9.2 Command Line Test Tool
sidebar_label: 7.9.2 Command Line Test Tool
---
# Command Line Test Tool

© 2019 Glasswall Solutions Ltd ALL RIGHTS RESERVED

Information contained herein is the property of Glasswall Limited and is proprietary and confidential.

_Glasswall Solutions Ltd._

_(e): support@glasswallsolutions.com_

_Creation Date – 21/06/13_

_Version – 2.11_

**Document History**

Table 1: Document Change History

| _ **Issue Date** _ | _ **Issue Number** _ | _ **Description** _ |
| --- | --- | --- |
| 21/06/13 | 1.0 | Initial Draft |
| 03/07/2013 | 1.1 | Corrected item names in example config file to be consistent with naming through the document. |
| 05/09/2013 | 1.2 | Updated to describe the command line return values |
| 30/09/2013 | 1.3 | Added support for analyse, manage, and protect in single operation modes. |
| 02/10/2013 | 1.4 | Amended process mode value description to include the Analyse, Manage &amp; Protect option 2.
 Modified the command line description to strike through all options other than -config as they are not yet implemented |
| 15/10/2013 | 1.5 | INI for our Glasswall CLI tool requires a need to specify the file types that we are processing |
| 12/11/2013 | 1.6 | Updates to show file to file API calls now possible. |
| 11/03/2014 | 1.7 | Refinement to description for writeOutput flag. |
| 16/04/2014 | 1.8 | Updated the documentation to describe the -xmlConfigFile command line option and its associated file format. |
| 16/05/2014 | 1.9 | Updated to instruct that if no bitmap content management switches are specified in the ini file when not xml file is specified that GWFileConfig isn&#39;t called. |
| 27/08/2014 | 2.0 | Updated listed file type options to include Office XML file suffixes. |
| 03/09/2014 | 2.1 | Addition of logProcessStatus switch documentation |
| 08/09/2014 | 2.2 | CM bi-state configurations now deprecated. |
| 18/03/2015 | 2.3 | Conventions section added, and writeOutput and reportMode options clarified. |
| 22/04/2016 | 2.4 | Glasswall DLL Lite versions of manage protect. |
| 27/02/2017 | 2.5 | Updated the content management configuration XML example. |
| 29/09/2017 | 2.6 | Updated processMode to include 4 and 5. |
| 29/09/2017 | 2.7 | Added notes to processModes 4 &amp; 5 regarding processMode. |
| 28/08/2018 | 2.8 | Extended xml config example to include recently introduced content management switches. |
| 18/11/2018 | 2.9 | Updated to include File type wildcard option and API mapping section. |
| 25/04/2019 | 2.10 | Removed File to File mode and added File Storage Mode |
| 13/11/2019 | 2.11 | Updated to reflect policy file (xmlconfig) is a mandatory parameter. |

1.
# Contents

[1Contents 4](#_Toc530562569)

[2Conventions 5](#_Toc530562570)

[3Usage 5](#_Toc530562571)

[3.1Return values 5](#_Toc530562572)

[4Configuration File Description 5](#_Toc530562573)

[4.1Configuration Format 5](#_Toc530562574)

[4.2Configuration Settings 6](#_Toc530562575)

[4.2.1Section Name: GWConfig 6](#_Toc530562576)

[4.2.2Mapping - CLI Modes To Glasswall API 8](#_Toc530562577)

[5XML Configuration File Description 10](#_Toc530562578)

[5.1Configuration Format 10](#_Toc530562579)

[5.2Configuration Settings 11](#_Toc530562580)

[6Test Tool Log File Format 12](#_Toc530562581)

[6.1Files Log 12](#_Toc530562582)

[6.2Application Log 12](#_Toc530562583)

[6.2.1Header 12](#_Toc530562584)

[6.2.2Configuration 12](#_Toc530562585)

[6.2.3Body 12](#_Toc530562586)

[6.2.4Footer 13](#_Toc530562587)

#

1.
# Conventions

_Italic_ – This is used to show arguments that must be replaced with user-supplied values.

**Bold** – This is used for commands and options that are to be typed in literally.

Constant width — used to show the contents of files or output from commands.

[] — these surround optional elements in a description of syntax. The brackets themselves should not be typed. Where brackets are to be typed literally, they will be in bold and shown in the examples.

1.
# Usage

The Command Line Test Tool should be used in the following manner.

**commandlinetesttool.exe -config=** _configFile_ **-xmlconfig=** _xmlConfigFile_

The contents of _configFile_ and _xmlConfigFile_ are described in the following sections.

  1.
## Return values

| **Name** | **Value** | **Description** |
| --- | --- | --- |
| **rcSUCCESS** | 0 | Test completed successfully |
| --- | --- | --- |
| **rcINVALIDCOMMANDLINE** | 1 | Command line argument is invalid |
| **rcDLLLOADFAILURE** | 2 | Problem loading the DLL/Shared library |
| **rcCONFIGLOADFAILURE** | 3 | Problem loading the specified configuration file |
| **rcPROCESSINGISSUE** | 4 | Problem processing the specified files |

1.
# Configuration File Description

This is passed to the **commandlinetesttool** executable using the **–config** option.

  1.
## Configuration Format

The configuration file is a text file that enables the operation of the test tool to be configured.

The file is made up of sections and associated configuration item name\value pairs.

For example

**[**_sectionname__1_**]**

_itemname __11_ = _itemvalue__ 11_

_itemname __12_ **=** _itemvalue__ 12_

**[**_sectionname__2_**]**

_itemname __21_ = _itemvalue__ 21_

_itemname __22_ **=** _itemvalue__ 22_

Item name must be unique within a section. Zero or more whitespace characters are allowed around the literal **=**.

An example valid configuration file is shown below

[GWConfig]

processMode=0

reportMode= 1

fileStorageMode=0

fileType = pdf

inputLocation= C:\Test\bug\_301

useSubfolders=1

outputLocation= Report

createOutputFolders=1

nonConformingDirName= NonConforming

managedDirName= Managed

quarantineNonconforming= 1

writeOutput= 1

logFileSize=0

logFileProcessTime=1

logProcessStatus=0

  1.
## Configuration Settings

    1.
### Section Name: GWConfig

All configuration value default to either &#39;0&#39; or an empty string, where appropriate.

| **Identifier** | **Value** | **Notes** |
| --- | --- | --- |
| **fileType** | [pdf|jpg|png|gif|doc|ppt|xls|docx|pptx|xlsx|emf|wmf|\*] | Type of documents for processing. Specifying the wildcard option &#39;\*&#39; will enable automatic file type detection. Process mode 5 does not support the wildcard option. |
| --- | --- | --- |
| **inputLocation** | [valid path] | Location of documents for processing |
| **useSubfolders** | [0|1] | 0 = Process documents only in inputLocation1 = Process documents in inputLocation and any subfolders |
| **processMode** | [0|1|2|3|4|5] | 0 = AnalysisGWFileAnalysisAuditGWFileAnalysisAuditAndReportGWFileToFileAnalysisAuditGWFileToFileAnalysisAuditAndReport
1 = Manage &amp; ProtectGWFileProtectGWFileProtectAndReportGWFileToFileProtectGWFileToFileProtectAndReport
2 = Manage &amp; Protect LiteGWFileProtectLiteGWFileProtectLiteAndReportGWFileToFileProtectLiteGWFileToFileProtectLiteAndReport3 = Manage &amp; Protect &amp; ReportGWFileAnalyseProtectReportGWFileToFileAnalyseProtectReport
4 = Export ModeExport images and text to an Interchange Package in the form of a ZIP archive. reportMode must be set to 0.
5 = Import ModeImport images from an Interchange Package. The expected format is a ZIP archive. reportMode must be set to 0.
Note: The Short form of Report produced has no content items listed; only Sanitisations/Issue and Remedies
 |
| **reportMode** | [0|1] | 1 = Invokes the APIs that also produce a report. For example, GWFileAnalysisAuditAndReport. If **writeOutput** is set to zero, no reports will be produced.
 |
| **writeOutput** | [0|1] | 0 = No managed document or analysis report is produced1 = Managed document and/or analysis reports are produced where appropriate and if **reportMode** is 1. |
| **quarantineNonconforming**
 | [0|1] | 1 = copy non-conforming document to quarantine folder. |
| **outputLocation** | [valid path] | Root folder for all processing output. |
| **createOutputFolders** | [0|1] | Creates output folders if they don&#39;t exist |
| **nonconformingDirName** | [valid folder name] | Name of subfolder within **outputLocation** that is the destination for all output from the processing of non-conforming files. |
| **managedDirName** | [valid folder name] | Name of subfolder within **outputLocation** that is the destination for all output from the processing of managed files. |
| **fileStorageMode** | [0|1|2] | 0 = File to File1 = File to Memory2 = Memory to Memory |
| **logFileSize** | [0|1] | 1 = Includes the file size in the process log |
| **logFileProcessTime** | [0|1] | 1 = Includes the file processing time in the process log |
| **logProcessStatus** | [0|1] | 1 = Includes the process status information (from GWFileProcessMsg and GWFileProcessStatus) in the process log. This is an optional flag that defaults to 0 to denote no process status logging. |

    1.
### Mapping - CLI Modes To Glasswall API

The CLI tool can be used to verify the output of API functions in the Glasswall library. This section contains information on which CLI settings trigger specific API function calls.

The table below displays the API functions that are called under the various CLI configuration options.

| **API Name** | **Process Mode** | **Report Mode** | **File Storage Mode** |
| --- | --- | --- | --- |
| **GWFileAnalysisAudit**
 | 0 | 0 | 0 |
| **GWFileAnalysisAuditAndReport**
 | 0 | 1 | 0 |
| **GWFileToFileAnalysisAudit**
 | 0 | 0 | 1 |
| **GWFileToFileAnalysisAuditAndReport**
 | 0 | 1 | 1 |
| **GWFileProtect**
 | 1 | 0 | 0 |
| **GWFileProtectAndReport**
 | 1 | 1 | 0 |
| **GWFileToFileProtect**
 | 1 | 0 | 1 |
| **GWFileToFileProtectAndReport**
 | 1 | 1 | 1 |
| **GWFileProtectLite**
 | 2 | 0 | 0 |
| **GWFileProtectLiteAndReport**
 | 2 | 1 | 0 |
| **GWFileToFileProtectLite**
 | 2 | 0 | 1 |
| **GWFileToFileProtectLiteAndReport**
 | 2 | 1 | 1 |
| **GWFileAnalysisAndProtectAndReport**
 | 3 | 1 | 0 |
| **GWFileToFileAnalysisProtectAndReport**
 | 3 | 1 | 1 |
| **GWFileToFileAnalysisProtectAndExport**
 | 4 | 0 | 1 |
| **GWFileToMemoryAnalysisProtectAndExport**
 | 4 | 0 | 0 |
| **GWFileToFileProtectAndImport**
 | 5 | 0 | 1 |
| **GWFileToMemoryProtectAndImport**
 | 5 | 0 | 0 |
| **GWMemoryToMemoryProtect**
 | 1 | 0 | 2 |
| **GWMemoryToMemoryAnalysisAudit**
 | 0 | 0 | 2 |

Setting the FileType option to &#39;\*&#39; will enable Glasswalls file type detection capability via a call to the **GWDetermineFileTypeFromFile** APIfunction (See the &#39;Configuration Settings&#39; section). This will enable CLI to automatically determine the file type for each file that is about to be processed.

Supplying the &#39;–h&#39; option to the CLI tool will display a help menu that provides additional help information as well as instructions on how to run the tool to produce the output for the following additional API functions.

- **GWGetAllIdInfo** – This retuns an XML file containing the descriptions for all possible issue IDs in the Glasswall engine.

**Command:**

_\&gt;\&gt; commandlinetesttool.exe -a output\_xml.xml_

- **GWGetIdInfo** – This returns a group description for a given issue ID.

**Command** :

_\&gt;\&gt; commandlinetesttool.exe -b 96 outputstring.txt_

_Where 96 is the issue ID and outputstring.txt is the file in which to store the output description._

- **GWFileVersion –** Displays the library version number

**Command:**

_\&gt;\&gt; commandlinetesttool.exe -v_

The following API functions are called by the CLI tool when generating the Glasswall CLI process log.

- **GWFileErrorMessage** – The output of this is displayed along side each processed file if a file is marked non-compliant within the process log generated everytime a set of files are processed.
- **GWFileProcessStatus** – The output of this is displayed along side each processed file in the process log if the &#39;logProcessStatus&#39; option is set to 1 (See the &#39;Configuration Settings&#39; section).
- **GWFileProcessMessage** – The output of this is displayed along side each processed file in the process log if the &#39;logProcessStatus&#39; option is set to 1 (See the &#39;Configuration Settings&#39; section).

For more information on each API function please refer to the Glasswall SDK documentation.

1.
# XML Configuration File Description

  1.
## Configuration Format

The format configuration within this file is described formally in the XSD located in the glasswall sdk documentation. This configuration is passed unchanged to the GWFileConfigXML function. **An example of a full configuration file is shown below**

\&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?\&gt;

\&lt;config\&gt;

\&lt;pdfConfig\&gt;

\&lt;watermark\&gt;Glasswall Protected\&lt;/watermark\&gt;

\&lt;acroform\&gt;sanitise\&lt;/acroform\&gt;

\&lt;metadata\&gt;sanitise\&lt;/metadata\&gt;

\&lt;javascript\&gt;sanitise\&lt;/javascript\&gt;

\&lt;actions\_all\&gt;sanitise\&lt;/actions\_all\&gt;

\&lt;embedded\_files\&gt;sanitise\&lt;/embedded\_files\&gt;

\&lt;embedded\_images\&gt;sanitise\&lt;/embedded\_images\&gt;

\&lt;internal\_hyperlinks\&gt;sanitise\&lt;/internal\_hyperlinks\&gt;

\&lt;external\_hyperlinks\&gt;sanitise\&lt;/external\_hyperlinks\&gt;

\&lt;/pdfConfig\&gt;

\&lt;wordConfig\&gt;

\&lt;macros\&gt;sanitise\&lt;/macros\&gt;

\&lt;metadata\&gt;sanitise\&lt;/metadata\&gt;

\&lt;embedded\_files\&gt;sanitise\&lt;/embedded\_files\&gt;

\&lt;embedded\_images\&gt;sanitise\&lt;/embedded\_images\&gt;

\&lt;review\_comments\&gt;sanitise\&lt;/review\_comments\&gt;

\&lt;internal\_hyperlinks\&gt;sanitise\&lt;/internal\_hyperlinks\&gt;

\&lt;external\_hyperlinks\&gt;sanitise\&lt;/external\_hyperlinks\&gt;

\&lt;dynamic\_data\_exchange\&gt;sanitise\&lt;/dynamic\_data\_exchange\&gt;

\&lt;/wordConfig\&gt;

\&lt;pptConfig\&gt;

\&lt;macros\&gt;sanitise\&lt;/macros\&gt;

\&lt;metadata\&gt;sanitise\&lt;/metadata\&gt;

\&lt;embedded\_files\&gt;sanitise\&lt;/embedded\_files\&gt;

\&lt;embedded\_images\&gt;sanitise\&lt;/embedded\_images\&gt;

\&lt;review\_comments\&gt;sanitise\&lt;/review\_comments\&gt;

\&lt;internal\_hyperlinks\&gt;sanitise\&lt;/internal\_hyperlinks\&gt;

\&lt;external\_hyperlinks\&gt;sanitise\&lt;/external\_hyperlinks\&gt;

\&lt;/pptConfig\&gt;

\&lt;xlsConfig\&gt;

\&lt;macros\&gt;sanitise\&lt;/macros\&gt;

\&lt;metadata\&gt;sanitise\&lt;/metadata\&gt;

\&lt;embedded\_files\&gt;sanitise\&lt;/embedded\_files\&gt;

\&lt;embedded\_images\&gt;sanitise\&lt;/embedded\_images\&gt;

\&lt;review\_comments\&gt;sanitise\&lt;/review\_comments\&gt;

\&lt;internal\_hyperlinks\&gt;sanitise\&lt;/internal\_hyperlinks\&gt;

\&lt;external\_hyperlinks\&gt;sanitise\&lt;/external\_hyperlinks\&gt;

\&lt;dynamic\_data\_exchange\&gt;sanitise\&lt;/dynamic\_data\_exchange\&gt;

\&lt;/xlsConfig\&gt;

\&lt;/config\&gt;

**Note:** ThexlsConfig, pptConfig, and wordConfig cover both office XML and office binary file types.

  1.
## Configuration Settings

| **Type** | **Value** | **Notes** |
| --- | --- | --- |
| **contentManagementFlag** | sanitise | Configures Glasswall to remove or clean document element types associated with this content management switch type from any document being processed. This removal will be logged in analysis reports as a &#39;sanitisation item&#39; |
| --- | --- | --- |
| allow | Configures Glasswall to leave document element types associated with this content management switch type in any document being processed. |
| disallow | Configures Glasswall to raise an issue if document element types associated with this content management flag are found within any document being processed. |
| **watermark** | Freeform text, up to 20 characters | Specifying a null element .i.e., \&lt;watermark /\&gt;, results in no watermark being added to documents being processed. |

1.
# Test Tool Log File Format

  1.
## Files Log

Produced by the test application before the processing of the files is started. Compiled from the specified input location, documenting the complete list of files to be processed.

The format of each line follows the same specification.

**==** _nnnnn_ **==** _Filename_

One file is listed on each line, where _nnnnn_ is a zero indexed counter that increments by one for each line.

  1.
## Application Log

Produced by the test application recording the results of processing. The file structure is made up of a header, body and footer.

    1.
### Header

- Line of **\*** characters
- Time date stamp for start of logging
- Description of library version in use
- Line of **\*** characters

Example

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

START LOGGING 14:24:08(15/04/2013)

SOFTWARE VERSION PLUGIN\_GLASSWALL\_DLL:ANALYSE\_AUDIT.MANAGE.PROTECT.01.01..BUILD(Apr 15 2013 09:43:25)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

    1.
### Configuration

A record of the configuration settings being used by the Glasswall DLL during testing. The information is provided in the XML format used when configuring the test. The configuration is provided by the DLL from the GWFileConfigGetfunction, rather than being a copy of what has been passed into the test tool.

    1.
### Body

Line per file, each line consisting of

- An index number, matching the index number used in the &#39;Files Log&#39; described above.
- File name (preceded by a space)
- Test Result (preceded by a space and a horizontal tab)
- Processing Duration (preceded by two horizontal tabs)
- Optional file size (preceded by two horizontal tabs) (_see Configuration)_
- Optional Process Status (preceded by two horizontal tabs) and Process Status Message (preceded by two horizontal tabs) (_see Configuration)_

Example

==00000== Found file Golden\_90ms-RKSJ-H\_10.pdf Passed (460 ms) (2500 MB)

Processing Status 96 Processing Message &quot;Remedies Required, Sanitisation Required&quot;

    1.
### Footer

- Line of **\*** characters
- Time date stamp for end of logging
- Total duration of processing (calculated as delta between the start and end logging times)
- Line of **\*** characters

Example

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

END LOGGING 15:24:08(15/04/2013)

DURATION 01:00:00

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*