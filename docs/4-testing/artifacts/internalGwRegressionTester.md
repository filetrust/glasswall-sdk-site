---
title: GwRegressionTester
---

## Authors

Roman Danilov

# Description

This is a tool that is used for executing different tests on the Glasswall library to ensure regression issues are not reintroduced into the codebase. The user specifies the library to test and a configuration file specifying the files and their corresponding tests. The files are run with the specified library and the tests are executed on the results. A report is generated with details on the tests that were run and whether they passed or failed. The regression tool is useful for automating repetitive tests that can be done easily by the computer.

The regression tester consists of two applications: `GwRegressionTester.exe` and `GwTestRunner.exe`. `GwRegressionTester.exe` is the application that is launched by the user and the application that carries out all the tests. `GwTestRunner.exe` is automatically launched by `GwRegressionTester.exe` and it is responsible for running files through the Glasswall library. The two applications are separated so that crashes in the Glasswall library do not interfere with the execution of the tests. Crashes, timeouts and other failures are treated as test failures. When running the tests, please ensure that both applications are in the same directory otherwise the regression testing will fail.

If the tool is working on Windows, but not on Linux, or vice versa, then please raise a bug as ideally it should be running identically on both platforms.

# Locations

The source code is stored on TFS in the location:

- [Regression Tester source code]($/Glasswall/inhouse.tools/GwRegressionTester/GwRegressionTester)

The latest executables can be found at:

- [Latest Regression Tester executables](\\STORAGE-SERVER\Test-Input-Files\BuildDropBox\GwRegressionTester\Latest)


# Architecture

### Language and Runtime requirements

Both of the applications are written in C# and to be run require version 4.5 of the .NET framework, or the Mono equivalent.

TODO  - add more details about the architecture

# Usage

The GwRegressionTester.exe is executed through the commandline with the appropriate parameters specified. When running on Linux on Mono, you will need to prepend `mono` to the executable like so `mono GwRegressionTester.exe ...`. The GwRegressionTester.exe accepts the following arguments:

<table>
<caption >Commandline Arguments</caption>
<tr>
<th>Short form</th>
<th>Long form</th>
<th>Excepted Input</th>
<th>Required</th>
<th>Description</th>
</tr>

<tr>
<td>-d</td>
<td>--library-location</td>
<td>String</td>
<td>Yes</td>
<td>The location of the library. This can be either the path to the library or the path to a directory. When a directory is specified, the program will recurse through all the folders and will use the latest version of the library that it finds.</td>
</tr>

<tr>
<td>-t</td>
<td>--test-case-location</td>
<td>String</td>
<td>Yes</td>
<td>The location of the test cases that will be executed. This can be either the path to a file containing the test cases or the path to a directory. If a directory is specified, the program will recurse through all the folders and will execute all the test cases that match the file glob "GwRegressionTest*.yml".</td>
</tr>

<tr>
<td>-r</td>
<td>--report-location</td>
<td>String</td>
<td>No</td>
<td>(Default: GwRegressionTest.xml) The location to which the report with the test results will be written. This can be either the path to a file or the path to a directory. If a directory is specified, the program will create the report with the default name in the directory specified. If this argument is not specified then the report with the default name will be created in the current directory.</td></tr>

<tr>
<td>-l</td>
<td>--log-location</td>
<td>String</td>
<td>No</td>
<td>(Default: GwRegressionTest.log) The location of the log that will be used for error reporting. This can be either the path to a file or the path to a directory. The same filepath rules apply as those used for report location. The log will only be written out when a serious issue is encountered.</td>
</tr>

<tr>
<td>-b</td>
<td>--timeout</td>
<td>Int</td>
<td>No</td>
<td>(Default: 300000) The timeout period for a file in milliseconds. 0 disables the timeout period.</td>
</tr>

<tr>
<td>-v</td>
<td>--verify-configs</td>
<td>None</td>
<td>No</td>
<td>If this flag is set then the configuration files from the --test-case-location parameter will be validated, but no tests will be executed. At the moment the other required parameters must be specified, but only the --test-case-location parameter will be used.</td>
</tr>

</table>

# Configuration for Test Cases

The configuration file are stored in the YAML format (YAML Ain't Markup Language). YAML is a human readable and writeable language designed for data serialisation. The whitespace in YAML is syntactically significant so please use newlines and indentations correctly, and avoid tabs as they break the configuration files. The fields in the configuration files are case sensitive so please bear that in mind when editing them. For a quick how to guide on YAML have a look at [Learn YAML in Y Minutes](internalLearnYAMLInYMinutes).

Example configuration files can be found at the end of this documentation or you can access them directly by clicking [Example test case](#internalGwRegressionTesterConfigExample), [Issue ID example test case](#internalGwRegressionTesterGetIssueIdExample), or [Exports example test case](#internalGwRegressionTesterExportTestsExample). It's a good idea to refer to the examples as they will give you a better understanding of how the configuration file fits together.

The `#` character is used to denote comments and the `:` character is used to denote key-value relationships; therefore, these characters need to be escaped when used within the configuration file. For example, <code>\\\\STORAGE-SERVER\\Test-Input-Files\\TestResources\\Z-GeneratedSets\\Bug # 4840</code> will need to be converted to <code>"\\\\STORAGE-SERVER\\Test-Input-Files\\TestResources\\Z-GeneratedSets\\Bug # 4840"</code>, and <code>PDF: files failing with 'Attempted write access beyond end of buffer'</code> will need to be turned into <code>"PDF: files failing with 'Attempted write access beyond end of buffer'"</code>.

## Overall structure of the configuration file

The "root" element of the configuration file is `Bugs:`, which is defined as follows:

`Bugs: List<TestCase>` (Required) This contains a list of [Test Case elements](#internalGwRegressionTesterTestCase) that will be processed.

## <a name="internalGwRegressionTesterTestCase"></a> Test Case element

This is used to specify the details of each test case that needs to be processed. Each test case element has the following fields:

`BugNumber: <int>` (Required) The ID number of the bug that is being tested. This is usually the bug number that is found on TFS. 

`Name: <string>` (Optional) This is a name given to the bug that is being tested. In the majority of cases this field is not required as it is only used in the nightly regression tests.

`Description: <string>` (Required) A description of the cause of the bug. 

`FileType: <string>` (Optional) This specifies the type of file that we are testing. For example, `pdf` or `doc`. This can be left out or set to `null` at which point the file extension will be used as the file type.

`Input: List<FileLocation>` (Optional) This specifies a list of [File Location](#internalGwRegressionTesterFileLocation) elements, which contain the details of the files or folders that need to be tested. This is optional as not all tests require files that need to be processed.

`ContentManagementSwitches: List<ContentManagementSwitch>` (Optional) This is a list of [Content Management Switch](#internalGwRegressionTesterContentManagementSwitch) elements, which contain the details of the content management switches and their flags that will be used to configure the Glasswall library. If this is not specified then the default content management switches will be used.

`Tests: List<TestMode>` (Required) This specifies a list of [Test Mode](#internalGwRegressionTesterTestMode) elements, which specify different ways that tests are executed.

## File Location <a name="internalGwRegressionTesterFileLocation"></a>

This is used for specifying the files that need to be tested. Each File Location has the following fields:

`Path: <string>` (Required) This is the path to a file or a to a directory that will be processed. If a file is specified then only that file will be used for testing. If a directory is specified then the files within that directory will be tested. You can use the `Recurse` option to specify whether to go through sub directories or not. The path specified can be an absolute path or a relative one. A relative path will be relative to the configuration file.

`Recurse: <bool>` (Optional) This specifies whether to go through sub directories when searching for files to test. `true` enables sub-directory processing while `false` disables it. By default this field is set to `true`. This field is optional so it can be left out and the default option will apply. This field is ignored when a file is specified.

## Content Management <a name="internalGwRegressionTesterContentManagementSwitch"></a>
Content Management for each particular file type is specified in a **Content Management Policy**. The Policy contains a set of **Content Management Switches**, each one paired with a **Content Management Switch Setting**. In the Regression Tester, the Content Management Profile is specified using `ConfigSwitch`. The Switches and Switch Settings are specified using a key-value dictionary or map, within `ContentManagementFlags`.

<table>
<caption>SDK Terminology vs Regression Tester Terminology</caption>
<tr>
<th>SDK</th>
<th>Regression Tester</th>
</tr>

<tr>
<td>Content Management Profile</td>
<td><code>ConfigSwitch</code></td>
</tr>

<tr>
<td>Content Management Switch</td>
<td>Key in <code>ContentManagementFlags</code> dictionary</td>
</tr> 

<tr>
<td>Content Management Switch Setting</td>
<td>Value in <code>ContentManagementFlags</code> dictionary</td>
</tr> 

</table>

## Content Management Policy

A Content Management Policy defines the set of Content Management Switches for a specific file format. It is used to specify the content management flags that will be used to configure the Glasswall library. In the Regression Tester it is referred to as a Content Management Switch.

`ConfigSwitch: <string>` (Required) (Glasswall SDK Specification: ). This specifies the document type to which the Content Management Switches refer. For example, `wordConfig` or `pptConfig`.

`ContentManagementFlags: <Dictionary<string, ContentManagementFlag>>` (Required) This is a mapping of Content Management Switch and Content Management Switch Settings where the key is the former and the value the latter. The value is a Content Management Switch Setting which can be either `allow`, `sanitise`, `disallow`, or a string value in the case of the `watermark` switch. For example, `acroform: sanitise` or `internal_hyperlinks: allow`.

## Test Mode <a name="internalGwRegressionTesterTestMode"></a>

This is used to specify the different test modes where each test mode interacts differently with the output from the Glasswall library. For example, one test mode uses the output and executes tests on it while another test mode writes the output to a directory. When writing the test modes, please make sure that you include the `!` before the test mode otherwise the configuration file is invalid. For example, `!IndependentTestMode` is valid while `IndependentTestMode` is not. The exclamation mark is required for the deserialization process where the configuration file is translated into concrete objects within the program. The following test modes are available:

- [!IndependentTestMode](#internalGwRegressionTesterIndependentTestMode)
- [!ConsecutiveTestMode](#internalGwRegressionTesterConsecutiveTestMode)
- [!OneAgainstAnotherTestMode](#internalGwRegressionTesterOneAgainstAnotherTestMode)
- [!WriteOutputMode](#internalGwRegressionTesterWriteOutputMode)
- [!SimpleTestMode](#internalGwRegressionTesterSimpleTestMode)
- [!GetIssueIDTestMode](#internalGwRegressionTesterGetIssueIDTestMode)
- [!ExportImportTestMode](#internalGwRegressionTesterExportImportTestMode)



### !IndependentTestMode <a name="internalGwRegressionTesterIndependentTestMode"></a>

This test mode is used for executing independent tests on the files where each file is run through Glasswall, and the output is used for the tests. This test mode has the following fields:

`AnalysisTests: <List<AnalysisTest>>` (Optional) This is a list of [Analysis Tests](#internalGwRegressionTesterAnalysisTests) that will be performed on the Analysis reports.

`APIsToTest: <Set<TestableAPI>>` (Optional) This is a set of [TestableAPI](#internalGwRegressionTesterTestableAPI) elements that specify the Glasswall API that will be used when executing the Glasswall library.


`ManageAndProtectTests: <List<ManageAndProtectTest>>` (Optional) This is a list of [Manage and Protect Tests](#internalGwRegressionTesterManageAndProtectTests) that will be performed on the managed file.

`ManageAndProtectLiteTests: <List<ManageAndProtectTest>>` (Optional) This is a list of [Manage and Protect Tests](#internalGwRegressionTesterManageAndProtectTests) that will be performed on the lite managed file. Manage and Protect Lite is not available for the Combined API so those tests will be flagged as failures.

`Managed: <bool>` (Optional) This specifies whether the files should be managed or non-conforming. If this field is not specified then only issues such as timeouts or crashes will be treated as test failures.


### !ConsecutiveTestMode <a name="internalGwRegressionTesterConsecutiveTestMode"></a>

This test mode is similar to the Independent test mode where independent tests are carried out on the files, but the difference is that the tests are carried out on the managed managed files. In Consecutive test mode the program runs the files through Manage and Protect, writes the results to temporary files, runs the temporary files through Manage and Protect, and then executes the tests on the resulting files. This is very useful for finding issues such as remedy items being reported in files that have already been managed. This test mode has the following fields:

`AnalysisTests: <List<AnalysisTest>>` (Optional) This is a list of [Analysis Tests](#internalGwRegressionTesterAnalysisTests) that will be performed on the Analysis reports.

`APIsToTest: <Set<TestableAPI>>` (Optional) This is a set of [TestableAPI](#internalGwRegressionTesterTestableAPI) elements that specify the Glasswall API that will be used when executing the Glasswall library.

`ManageAndProtectLiteTests: <List<ManageAndProtectTest>>` (Optional) This is a list of [Manage and Protect Tests](#internalGwRegressionTesterManageAndProtectTests) that will be performed on the lite managed file. Manage and Protect Lite is not available for the Combined API so those tests will be flagged as failures.

`ManageAndProtectTests: <List<ManageAndProtectTest>>` (Optional) This is a list of [Manage and Protect Tests](#internalGwRegressionTesterManageAndProtectTests) that will be performed on the managed file.

`Managed: <bool>` (Optional) This specifies whether the files should be managed or non-conforming. If this field is not specified then only issues such as timeouts or crashes will be treated as test failures. This field is applied only to the managed files.

`NonConformingFileAction: <NonConformingFileActions>` This specifies how the initial non-conforming files should be treated. Non-conforming files are always empty so there is not much that we can do with them. Possible options are `SkipTests` or `FailTests`. The `SkipTests` options will skip executing tests on files that are non-conforming, while `FailTests` will treat the initial non-conforming files are test failures.

### !OneAgainstAnotherTestMode <a name="internalGwRegressionTesterOneAgainstAnotherTestMode"></a>

This test mode is used for comparing one Glasswall mode against another. Each of the fields in this mode specifies a test to be carried out. Setting the field to `true` will execute the test, while setting it to `false` or leaving it out of the configuration file, will disable the test. These are the fields:

`AnalysisAgainstProtect: <bool>` (Optional) This is used to specify whether to compare the results from Analysis mode against the results from Manage and Protect mode. If the results are different, for example Analysis is non-conforming while Manage and Protect is managed, then this will result in a test failure.

`APIsToTest: <Set<TestableAPI>>` (Optional) This is a set of [TestableAPI](#internalGwRegressionTesterTestableAPI) elements that specify the Glasswall API that will be used when executing the Glasswall library.

`CombinedAgainstSeparateApi: <bool>` (Optional) This is used to specify whether to compare the results from the Separate API against the results from the Combined API. If the results are different, for example the Separate API is non-conforming and the Combined API is managed, then that will result in a test failure. This test is very similar to the `AnalysisAgainstProtect` one, but with the addition of Combined API comparison.

`CombinedAnalysisAgainstSeparateAnalysis: <bool>` (Optional) This is used to specify whether to compare the analysis report from the Separate API against the analysis report from the Combined API. If the Sanitisation Items, Remedy Items, or Issue Items are different then that will result in a test failure. We ignore the Content Items since the Combined API produces a slimmed down Analysis report.

`ProtectAgainstLite: <bool>` (Optional) This is used to specify whether to compare the results from Manage and Protect mode against the results from Manage and Protect Lite mode. If the results are different, for example Analysis is non-conforming while Manage and Protect is managed, then this will result in a test failure. If the Manage and Protect Lite mode is managed, and Manage and Protect mode is non-conforming then that will result in a test pass. The Lite mode should produce manage rates that are equal to or better than those produced by the normal Protect mode since Lite mode does fewer validation checks.

`SpecifiedFileTypeAgainstDetermined: <bool>` (Optional) This is used to specify whether to compare the specified filetype against the one returned by Determine Filetype API. The specified filetype is determined by the `FileType` parameter. If `FileType` is null then the file extension will be used for comparison.


### !WriteOutputMode <a name="internalGwRegressionTesterWriteOutputMode"></a>

This test mode is used for writing the output from the library to a location. This is similar to the functionality provided by the CLI. This test mode has the following fields:

`ManagedFolder: <string>` (Optional) This specifies the directory where the managed files will be written to. The `ManagedFolder` will be a sub-directory within the `OutputLocation`. If this field is not specified in the configuration file then the `OutputLocation` will be used for the output.

`Mode: <GlasswallMode>` (Required) This specifies the Glasswall mode that should be used to process the files. 

`NonConformingFolder: <string>` (Optional) This specifies the directory where the non-conforming files will be written to. This directory will be a sub-directory of the `OutputLocation` directory. If this field is not specified in the configuration file then the `OutputLocation` will be used for the output.

`OutputLocation: <string>` (Optional) This specifies the directory where output will be written to. If this option is left out then the current directory will be used for the output.


### !SimpleTestMode <a name="internalGwRegressionTesterSimpleTestMode"></a>

`Managed: <bool>` (Optional) This specifies whether the files should be managed or non-conforming. If this field is not specified then only issues such as timeouts or crashes will be treated as test failures.

`Mode: <GlasswallMode>` (Required) This specifies the Glasswall mode that should be used to process the files. 

### !GetIssueIDTestMode <a name="internalGwRegressionTesterGetIssueIDTestMode"></a>
This mode is used to return information for a given Issue Id or a list of Issue Ids and matches them against the values returned from the Glasswall

`IssueIDTests: <List<IssueIDTests>>` (Optional) This is a list of [Issue ID Tests] (#internalGwRegressionTesterIssueIDTests) that will be performed.

### !ExportImportTestMode <a name="internalGwRegressionTesterExportImportTestMode"></a>
Mode used to test the export and import APIs. It performs the various export and import tests.

`APIsToTest: <Set<TestableAPI>>` (Optional) This is a set of [TestableAPI](#internalGwRegressionTesterTestableAPI) elements that specify whether "File to File" or "File to Memory" test modes are used. If not specified `FileToMemory` test mode is set.  `MemoryToMemory` is not supported.

`ExportTests: <List<ExportTests>>` (Optional) A list of tests carried out on the export APIs as listed in  [Export Tests](#internalGwRegressionTesterExportTests)

### TestableAPI <a name="internalGwRegressionTesterTestableAPI"></a>

This specifies the API that will be used when executing files. This can be one of the following fields:

- `FileToFile` - This specifies that the file to file APIs will be used when processing files.
- `FileToMemory` - This specifies that the file to memory APIs will be used when processing files.
- `FileToMemoryCombined` - This specifies that the file to memory API that produces an analysis report and an output file will be used when processing files. Currently this is not supported for API calls to Export mode. 
- `MemoryToMemory` - This specifies that the memory to memory API functions will be used when processing files.

### GlasswallMode

This specifies the Glasswall mode that will be used for executing. This can be one of the following values:

- `Analysis` - This specifies that the Analysis mode should be used.
- `AnalysisAndProtect` - This specifies that the Analysis, and Manage and Protect modes should be used.
- `Export` - This specifies that the Export mode should be used.
- `FileToFileAnalysis` - This specifies that file to file Analysis mode should be used.
- `FileToFileExport` - This specifies that file to file Export mode should be used.
- `FileToFileManageAndProtect` - This specifies that file to file Manage and Protect mode should be used.
- `FileToFileManageAndProtectLite` - This specifies that file to file Manage and Protect Lite mode should be used.
- `ManageAndProtect` - This specifies that the Manage and Protect mode should be used.
- `ManageAndProtectLite` - This specifies that the Manage and Protect Lite mode should be used.

## Analysis Tests <a name="internalGwRegressionTesterAnalysisTests"></a>

This is used to specify the different tests that can be carried out on the Analysis report. The following tests are available:

- [!ContentItemDescription](#internalGwRegressionTesterContentItemDescription)
- [!IssueItemDescription](#internalGwRegressionTesterIssueItemDescription)
- [!IssueItemId](#internalGwRegressionTesterIssueItemId)
- [!IssueItem](#internalGwRegressionTesterIssueItem)
- [!RemedyItemDescription](#internalGwRegressionTesterRemedyItemDescription)
- [!RemedyItem](#internalGwRegressionTesterRemedyItem)
- [!SanitisationItemDescription](#internalGwRegressionTesterSanitisationItemDescription)
- [!SanitisationItemId](#internalGwRegressionTesterSanitisationItemId)
- [!SanitisationItem](#internalGwRegressionTesterSanitisationItem)
- [!AnalysisStringSearch](#internalGwRegressionTesterAnalysisStringSearch)
- [!ValidateXmlAgainstXsd](#internalGwRegressionTesterValidateXmlAgainstXsd)

### !ContentItemDescription <a name="internalGwRegressionTesterContentItemDescription"></a>

This test is used to check for the presence or absence of a Content Item with the specified Technical Description. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Content Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Technical Description that we are looking for.

`ExactMatch: <bool>` (optional, default false) When true this sets the search to exactly match the Content Item Description, when left as false it does a partial match.

### !IssueItemDescription <a name="internalGwRegressionTesterIssueItemDescription"></a>

This test is used to check for the presence or absence of an Issue Item with the specified Technical Description. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Issue Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Technical Description that we are looking for.

`ExactMatch: <bool>` (optional, default false)` When true this sets the search to exactly match the Issue Item Description, when left as false it does a partial match.

### !IssueItemId <a name="internalGwRegressionTesterIssueItemId"></a>

This test is used to check for the presence or absence of an Issue Item with the specified Issue ID. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Issue Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Issue ID that we are looking for.

`ExactMatch: <bool>` (optional, default false) When true this sets the search to exactly match the provided issue ID, when left as false it does a partial match.

### !IssueItem <a name="internalGwRegressionTesterIssueItem"></a>

This test is used to check for the presence or absence of an Issue Item. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Issue Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

### !RemedyItemDescription <a name="internalGwRegressionTesterRemedyItemDescription"></a>

This test is used to check for the presence or absence of a Remedy Item with the specified Technical Description. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Remedy Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Technical Description that we are looking for.

`ExactMatch: <bool>` (optional, default false) When true this sets the search to exactly match the Remedy Item Description, when left as false it does a partial match.

### !RemedyItem <a name="internalGwRegressionTesterRemedyItem"></a>

This test is used to check for the presence or absence of a Remedy Item. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Remedy Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

### !SanitisationItemDescription <a name="internalGwRegressionTesterSanitisationItemDescription"></a>

This test is used to check for the presence or absence of a Sanitisation Item with the specified Technical Description. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Sanitisation Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Technical Description that we are looking for.

`ExactMatch: <bool>` (optional, default false) When true this sets the search to exactly match the Sanitisation Item Description, when left as false it does a partial match.

### !SanitisationItemId <a name="internalGwRegressionTesterSanitisationItemId"></a>

This test is used to check for the presence or absence of a Sanitisation Item with the specified Issue ID. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Sanitisation Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the Sanitisation ID that we are looking for.

`ExactMatch: <bool>` (optional, default false) When true this sets the search to exactly match the provided sanitisation ID, when left as false it does a partial match.

### !SanitisationItem <a name="internalGwRegressionTesterSanitisationItem"></a>

This test is used to check for the presence or absence of a Sanitisation Item. This test can be limited to look within a specific Content Group. It has the following fields:

`ContentGroup: <string>` (Optional) This specifies the content group that the Sanitisation Item should belong to. This can be left out in which case all the content groups will be checked for the presence or absence of the item.

`Presence: <bool>` (Optional) This specifies whether the item should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

### !AnalysisStringSearch <a name="internalGwRegressionTesterAnalysisStringSearch"></a>

This test is used to check for the presence or absence of a string. It has the following fields:

`Value: <string>` (Required) This specifies the string that we are looking for.

`Presence: <bool>` (Optional) This specifies whether the string should be present in or absent from the analysis report. If this value is not specified then the default value of `false` will be used.

### !ValidateXmlAgainstXsd <a name="internalGwRegressionTesterValidateXmlAgainstXsd"></a>

This test is used to validate the Analysis report against the specified XSD. It has the following field:

`XsdPath: <string>` (Required) This specifies the path to the XSD that will be used for validation. This path can be absolute or relative. If a relative path is specified then the path will be relative to the configuration file. 

## Issue ID Tests <a name="internalGwRegressionTesterGetIssueIDTestMode"></a>

This is used to test the GetIssueID and GetAllIssueID API's. The following tests are available:

- [!GetIssueID](#internalGwRegressionTesterGetIssueID)
- [!GetAllIssueIDs](#internalGwRegressionTesterGetAllIssueID)

### !GetIssueID <a name="internalGwRegressionTesterGetIssueID"></a>

This test is to find out if the given group description matches the one returned from the library, depending on the value of the `Match` field. It has the following fields:

`IssueID: <long>` (Optional) The Issue ID for which the group description should be fetched. Default value is 0.

`Match: <bool>` (Optional) This specifies whether the given group description matches the one returned from library. If this value is not specified then the default value of `false` will be used.

`ValueToMatch: <string>` (Optional) This specifies the group description that we are looking for.

### !GetAllIssueIDs <a name="internalGwRegressionTesterGetAllIssueID"></a>

This test is used to validate the Issue IDs XML against the specified XSD. It has the following field:

`XsdPath: <string>` (Required) This specifies the path to the XSD that will be used for validation. This path can be absolute or relative. If a relative path is specified then the path will be relative to the configuration file. 

## Manage and Protect Tests <a name="internalGwRegressionTesterManageAndProtectTests"></a>

This is used to specify the different tests that can be carried out on the managed document. The following tests are available:

- [!ManagedBinarySearch](#internalGwRegressionTesterManagedBinarySearch)

### !ManagedBinarySearch <a name="internalGwRegressionTesterManagedBinarySearch"></a>

This test is used to check for the presence or absence of a binary value. It has the following fields:

`Presence: <bool>` (Optional) This specifies whether the binary value should be present in or absent from the managed file. If this value is not specified then the default value of `false` will be used.

`Value: <string>` (Required) This specifies the binary value that we are looking for. The binary value has to be encoded as a base 64 string.

## Export Tests <a name="internalGwRegressionTesterExportTests"></a>

This is used to specify the different tests that can be carried out on the output from export mode. The following tests are available:

`TestExportedImagesMatch: <bool>` (Optional) Test to check if the images from Export mode match the images from Manage and Protect mode.

`TestExportedTextMatch: <bool>` (Optional) Test to check if the text from Export mode match the text from Manage and Protect mode.

`ValidateZipArchive: <bool>` (Optional) Test to check if the export mode produces a valid zip archive.

# Example test case <a name="internalGwRegressionTesterConfigExample"></a>

	Bugs:
	    - BugNumber: 2875
	      Description: PDF files failing due to CPRS inflate issues
	      FileType: null
	      Input:
	        - Path: \\storage-server\Test-Input-Files\TestResources\Z-GeneratedSets\Bug 2875
	          Recurse: true
	      ContentManagementSwitches:
	        - ConfigSwitch: pdfConfig
	          ContentManagementFlags:
	            acroform: sanitise
	            metadata: sanitise
	            javascript: sanitise
	            actions_all: sanitise
	            embedded_files: sanitise
	            internal_hyperlinks: sanitise
	            external_hyperlinks: sanitise
	      Tests:
	        - !OneAgainstAnotherTestMode
	          AnalysisAgainstProtect: true
	        - !IndependentTestMode
	          APIsToTest:
	            - FileToFile
	          AnalysisTests:
	            - !IssueItemDescription
	              Value: CPRS inflate
	              Presence: false


	    - BugNumber: 4840
	      Description: Neither 1Table or 0Table present
	      FileType: null
	      Input:
	        - Path: "\\\\STORAGE-SERVER\\Test-Input-Files\\TestResources\\Z-GeneratedSets\\Bug # 4840"
	          Recurse: true
	      ContentManagementSwitches:
	        - ConfigSwitch: wordConfig
	          ContentManagementFlags:
	            metadata: sanitise
	            macros: sanitise
	            embedded_files : sanitise
	            review_comments : sanitise
	            internal_hyperlinks : sanitise
	            external_hyperlinks : sanitise
	      Tests:
	        - !OneAgainstAnotherTestMode
	          AnalysisAgainstProtect: true
	        - !SimpleTestMode
	          Mode: ManageAndProtect
	          Managed: true

# Issue ID example test case <a name="internalGwRegressionTesterGetIssueIdExample"></a>

	Bugs:
	    - BugNumber: 2876
	      Description: PDF files failing due to CPRS inflate issues
	      Tests:
	        - !GetIssueIDTestMode
	          IssueIDTests:
	            - !GetIssueID
	              IssueID: 22675579
	              ValueToMatch: Property Mapping
	              Match: true
	            - !GetAllIssueIDs
	               XsdPath: C:\Glasswall\inhouse.tools\Features\Task_39728_ExtdRegTestForNewAPIs\GwRegressionTester\bin\Debug\Library\Elvin_allissue\gwAnalysisReport.xsd

# Exports example test case <a name="internalGwRegressionTesterExportTestsExample"></a>

	Bugs:
	    - BugNumber: 1
	      Description: Example YAML file for Sandip
	      FileType: Null
	      Input:
	        - Path: \\storage-server\Test-Input-Files\TestResources\Z-GeneratedSets\Bug38372
	          Recurse: true
	      ContentManagementSwitches:
	        - ConfigSwitch: xlsConfig
	          ContentManagementFlags:
	            metadata: sanitise
	            embedded_files: sanitise
	            internal_hyperlinks: sanitise
	            external_hyperlinks: sanitise
	            review_comments: sanitise
	            macros: sanitise 
	      Tests:
	        - !ExportImportTestMode
	          ExportTests:
	            ValidateZipArchive: true
	            TestExportedImagesMatch: true
	            TestExportedTextMatch: true

