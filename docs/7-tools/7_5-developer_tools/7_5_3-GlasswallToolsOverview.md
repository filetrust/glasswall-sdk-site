---
title: 7.5.3 Glasswall Core Test Tools
sidebar_label: 7.5.3 Glasswall Core Test Tools
---

\tableofcontents

\section testToolOverview Overview

This section contains a list of in-house tools that were developed by the developers and testers at Glasswall and are used to test various aspects of the Glasswall Core Engine.

\section inhouseTestTools In-house Test Tools

Click on the test tool in the table below to open a page which will provide you with more information on the selected tool.

<TABLE>
<TR>
<TH>Test Tool</TH><TH>Description</TH>
</TR>

[//]: # (Glasswall CLI)
<TR>
<TD>@subpage GlasswallCli</TD><TD>Command Line Tool that allows the user to process files with the Glasswall engine and any API configuration.</TD>
</TR>
 
[//]: # (GW Demonstrator)
<TR>
<TD>@subpage internalGwDemo</TD><TD>GW demonstrator allows the user to run Glasswall in analysis mode via a GUI or the command line, the output analysis data populates a specified database.</TD>
</TR>

<!-- GW File Finder -->
<TR>
<TD>@subpage internalGwFileFinder</TD><TD>GW File Finder allows the user to search through a GW Demonstrator database for a file with the specified content items.</TD>
</TR>

<!-- GW File Process Status Validator -->
<TR>
<TD>@subpage internalGwFileProcessStatusValidator</TD><TD>GW File Process Status Validator allows the user to validate the return statuses for a Glasswall run in Analysis and Manage and Protect modes.</TD>
</TR>

<!-- Bin directory reader -->
<TR>
<TD>@subpage BinDirectoryReader</TD><TD>Parse a directory full of files against a BDD definition.</TD>
</TR>

<!-- BDD to CPP Converter -->
<TR>
<TD>@subpage internalBddToCppConverter</TD><TD>Generates C++ code from BDDL data definition files (.bdd).</TD>
</TR>

<!-- BFF Validator -->
<TR>
<TD>@subpage internalBffValidator</TD><TD>Microsoft tool that checks if value in the file conforms to the Microsoft specification</TD>
</TR>

<!-- CFB Geneology -->
<TR>
<TD>@subpage CFBGeneology</TD><TD>Analyses CFB format files (e.g doc, ppt etc.) and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID.</TD>
</TR>

<!-- Check CFB Signature -->
<TR>
<TD>@subpage CheckCFBSignature</TD><TD>Allows the user to copy or move files that do not contain a CFB signature from the specifed directory.</TD>
</TR>

<!-- Check Zip Signature -->
<TR>
<TD>@subpage CheckZipSignature</TD><TD>Allows the user to copy or move files that do not contain a Zip signature from the specifed directory.</TD>
</TR>

<!-- RTF Control Word Struct Generator -->
<TR>
<TD>@subpage internalRtfControlWordGenerator</TD><TD>Generates control word BDD structures from a csv file containing a list of control word for the RTF file format.</TD>
</TR>

<!-- GW Live Test App -->
<TR>
<TD>@subpage internalGwLiveTestApp</TD><TD>Scrapes the web for supported test data and runs the files through the given Glasswall DLL.</TD>
</TR>


<!-- DVL Checker -->
<TR>
<TD>@subpage DvlChecker</TD><TD>Checks DVL files for syntax errors.</TD>
</TR>

<!-- Extract Str Lit-->
<TR>
<TD>@subpage ExtractStrLit</TD><TD>Reads a set of files and reports the Group ID and string literal passed in to each use of GW_ISSUE.</TD>
</TR>

<!-- Find DIFAT-->
<TR>
<TD>@subpage FindDIFAT</TD><TD>The program will read in each file in a directory and each file will be processed and interrogated for a DIFAT sector. A list of files processed will be produced, grouped into those with DIFAT sectors and those without.</TD>
</TR>

<!-- Get Excel Version-->
<TR>
<TD>@subpage GetExcelVersion</TD><TD>Identifies the Excel versions of binary Excel files and produces a list of each file name with its version number and also provides options to sort the files based on the versions.</TD>
</TR>

<!-- Get PowerPoint Version-->
<TR>
<TD>@subpage GetPowerPointVersion</TD><TD>Identifies the PowerPoint versions of binary PowerPoint files and produces a list of each file name with its version number and also provides options to sort the files based on the versions.</TD>
</TR>

<!-- Get Word Version-->
<TR>
<TD>@subpage GetWordVersion</TD><TD>Identifies the Word versions
of binary Word files and produces a list of each file name with its 
version number and also provides options to sort the files based on the versions.</TD>
</TR>

<!-- Golden File Finder-->
<TR>
<TD>@subpage internalGoldenFileFinder</TD><TD>Tries to find files with unique profiles.</TD>
</TR>

<!-- GW Content Management Crossref-->
<TR>
<TD>@subpage internalGwContentManagementCrosscheck</TD><TD>Attempts to check output from Multipurpose test for actual file content changes.</TD>
</TR>

<!-- GW Error consolidator-->
<TR>
<TD>@subpage internalGwErrorConsolidator</TD><TD>Summarises results from the engineering log files produces by multiple CLI or Multipurpose test app runs into a single file.</TD>
</TR>

<!-- GW MultiPurpose Test Application-->
<TR>
<TD>@subpage internalGwMultiPurposeTestApp</TD><TD>The application has the ability to perform complex tests in an automated and semi-automated fashion on the core DLL.</TD>
</TR>

<!-- GW Set Generator-->
<TR>
<TD>@subpage internalGwSetGenerator</TD><TD>Generates a test sets using file failure reasons.</TD>
</TR>

<!-- PDF Inflate Flate Decode-->
<TR>
<TD>@subpage PdfInflateFlateDecode</TD><TD>Looks for all occurrences of FlateDecoded streams in the given PDF file and inflates them. The data for each inflated stream are placed in a file named in the form 'object_nnn.bin' where 'nnn' represents the object number of the FlateDecoded stream.</TD>
</TR>

<!-- Test MS Office Open-->
<TR>
<TD>@subpage TestMSOfficeOpen</TD><TD>Automatically opens office files in the background and as a result produces a report with information on which files successfully opened, which did not and for what reason.</TD>
</TR>

<!-- Walk CFB-->
<TR>
<TD>@subpage WalkCfb</TD><TD>Shows a textual description of the hierarchical relationships between storages and streams in CFB format files. It also provides statistics on all the streams and storages found in the set of files, and can extract the streams and store them as files.</TD>
</TR>

<!-- Walk WMF-->
<TR>
<TD>@subpage WalkWmf</TD><TD>Walk WMF shows a textual description of the record structure of Windows Metafile (WMF) files.</TD>
</TR>

<!-- Walk ZIP-->
<TR>
<TD>@subpage WalkZip</TD><TD>Analyses a set of files and for each ZIP archive (Package) produces a textual description of its parts.</TD>
</TR>

<!-- Word Dissection-->
<TR>
<TD>@subpage WordDissection</TD><TD>Extracts structure and stream components from a word binary file and stores them as separate binary files, data which can then be used to test/validate BDD structure definitions.</TD>
</TR>

<!-- GW Scraper-->
<TR>
<TD>@subpage internalGwWebScraper</TD><TD>Scrapes a given site for given MIME types.</TD>
</TR>

<!-- GW Continuous Scraper-->
<TR>
<TD>@subpage internalWebScraper</TD><TD>Wrapper for GWScraper that adds all exteranl links to a DB and feeds itself with them upon completion of a site.</TD>
</TR>

<!-- GW Live Test (v2)-->
<TR>
<TD>@subpage internalGwLiveTest</TD><TD>Scans files in a dir records content items enountered and GW outcomes. Can move the initial files into an organised dir of the outcomes. Powered by GWProcess.</TD>
</TR>	

<!-- GW Process -->
<TR>
<TD>@subpage internalGwProcess</TD><TD>An expanded version of GWWrapper used in GWDemo that uses standard input and ouput streams. Supports all 8 GW modes.</TD>
</TR>

<!-- GW Pro GUI -->
<TR>
<TD>@subpage internalGwProGui</TD><TD>A GUi tool that is easily configurable to the 8 GW modes. Used powered by GWProcess.</TD> 
</TR>

<!-- GwRegressionTester -->
<TR>
<TD>@subpage GwRegressionTester</TD><TD>A tool used for executing different tests on the Glasswall library to make sure that regression issues are not reintroduced into the code base. Runs on Windows and Linux</TD>
</TR>

<!-- Test Launcher -->
<TR>
<TD>@subpage internalTestLauncherApp</TD><TD>Test Launcher is a command line tool responsible for sequentially launching test applications, scripts and commands that are defined in its configuration file, as well as sending the contents of a given directory to a specified email address (again, done via the configuration file).</TD>
</TR>

<!-- Test Result Uploader -->
<TR>
<TD>@subpage internalTestResultUploader</TD><TD>Retrieves test result XML files from a specified email and uploads them to a specified test suite on TFS.</TD>
</TR>

</TABLE>
