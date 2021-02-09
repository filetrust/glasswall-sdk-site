---
title: 7.5.2 Glasswall Core Test Tools
sidebar_label: 7.5.2 Glasswall Core Test Tools
---

## Overview

This section contains a list of in-house tools that were developed by the developers and testers at Glasswall and are used to test various aspects of the Glasswall Core Engine.

## In-house Test Tools

Click on the test tool in the table below to open a page which will provide you with more information on the selected tool.

|Test Tool|Descriprtion|S
|---|---|
|GlasswallCli|Command Line Tool that allows the user to process files with the Glasswall engine and any API configuration.|
|InternalGwDemo|GW demonstrator allows the user to run Glasswall in analysis mode via a GUI or the command line, the output analysis data populates a specified database.|
|InternalGwFileFinder|GW File Finder allows the user to search through a GW Demonstrator database for a file with the specified content items.|
|InternalGwFileProcessStatusValidator|GW File Process Status Validator allows the user to validate the return statuses for a Glasswall run in Analysis and Manage and Protect modes.|
|BinDirectoryReader|Parse a directory full of files against a BDD definition.|
|InternalBddToCppConverter|Generates C++ code from BDDL data definition files (.bdd).|
|InternalBffValidator|Microsoft tool that checks if value in the file conforms to the Microsoft specification|
|CFBGeneology|Analyses CFB format files (e.g doc, ppt etc.) and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID.|
|CheckCFBSignature|Allows the user to copy or move files that do not contain a CFB signature from the specifed directory.|
|CheckZipSignature|Allows the user to copy or move files that do not contain a Zip signature from the specifed directory.|
|InternalRtfControlWordGenerator|Generates control word BDD structures from a csv file containing a list of control word for the RTF file format.|
|internalGwLiveTestApp|Scrapes the web for supported test data and runs the files through the given Glasswall DLL.|
|DvlChecker|Checks DVL files for syntax errors.|
|ExtractStrLit|Reads a set of files and reports the Group ID and string literal passed in to each use of GW_ISSUE.|
|FindDIFAT|The program will read in each file in a directory and each file will be processed and interrogated for a DIFAT sector. A list of files processed will be produced, grouped into those with DIFAT sectors and those without.|
|GetExcelVersion|Identifies the Excel versions of binary Excel files and produces a list of each file name with its version number and also provides options to sort the files based on the versions.|
|GetPowerPointVersion|Identifies the PowerPoint versions of binary PowerPoint files and produces a list of each file name with its version number and also provides options to sort the files based on the versions.|
|GetWordVersion|Identifies the Word versions of binary Word files and produces a list of each file name with its Sversion number and also provides options to sort the files based on the versions.|
|InternalGoldenFileFinder|Tries to find files with unique profiles.|
|InternalGwContentManagementCrosscheck|Attempts to check output from Multipurpose test for actual file content changes.|
|InternalGwErrorConsolidator|Summarises results from the engineering log files produces by multiple CLI or Multipurpose test app runs into a single file.|
|InternalGwMultiPurposeTestApp|The application has the ability to perform complex tests in an automated and semi-automated fashion on the core DLL.|
|InternalGwSetGenerator|Generates a test sets using file failure reasons.|
|PdfInflateFlateDecode|Looks for all occurrences of FlateDecoded streams in the given PDF file and inflates them. The data for each inflated stream are placed in a file named in the form 'object_nnn.bin' where 'nnn' represents the object number of the FlateDecoded stream.|
|TestMSOfficeOpen|Automatically opens office files in the background and as a result produces a report with information on which files successfully opened, which did not and for what reason.|
|WalkCfb|Shows a textual description of the hierarchical relationships between storages and streams in CFB format files. It also provides statistics on all the streams and storages found in the set of files, and can extract the streams and store them as files.|
|WalkWmf|Walk WMF shows a textual description of the record structure of Windows Metafile (WMF) files.|
|WalkZip|Analyses a set of files and for each ZIP archive (Package) produces a textual description of its parts.|
|WordDissection|Extracts structure and stream components from a word binary file and stores them as separate binary files, data which can then be used to test/validate BDD structure definitions.|
|InternalGwWebScraper|Scrapes a given site for given MIME types.|
|InternalWebScraper|Wrapper for GWScraper that adds all exteranl links to a DB and feeds itself with them upon completion of a site.|
|InternalGwLiveTest|Scans files in a dir records content items enountered and GW outcomes. Can move the initial files into an organised dir of the outcomes. Powered by GWProcess.|
|InternalGwProcess|An expanded version of GWWrapper used in GWDemo that uses standard input and ouput streams. Supports all 8 GW modes.|
|InternalGwProGui|A GUi tool that is easily configurable to the 8 GW modes. Used powered by GWProcess.| 
|GwRegressionTester|A tool used for executing different tests on the Glasswall library to make sure that regression issues are not reintroduced into the code base. Runs on Windows and Linux.|
|InternalTestLauncherApp|Test Launcher is a command line tool responsible for sequentially launching test applications, scripts and commands that are defined in its configuration file, as well as sending the contents of a given directory to a specified email address (again, done via the configuration file).|
|InternalTestResultUploader|Retrieves test result XML files from a specified email and uploads them to a specified test suite on TFS.|

