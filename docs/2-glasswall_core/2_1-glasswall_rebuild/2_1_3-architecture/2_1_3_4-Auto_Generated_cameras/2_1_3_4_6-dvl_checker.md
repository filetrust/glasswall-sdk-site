---
title: 2.1.3.4.6 DVL Checker
sidebar_label: 2.1.3.4.6 DVL Checker
---

### **NAME**
*dvl_checker* - check DVL files for syntax errors

### **SYNOPSIS**
**dvl_checker -d** \(*dvl_file|dvl_directory*\) \[**-o** *output_directory* **-x -r** \[-s *schema_file* -c \] **-i** *ignored_file_list*\]\]  

### **DESCRIPTION**
dvl_checker checks DVL files for syntax errors.

Here is an overview of its architecture.

![Alt BuildValidationCppFiles](../img/BuildValidationCppFiles.jpg) 

### **OPTIONS**

  **-d, --dvl**  
Mandatory. The name of a DVL file to be parsed. If this is the only parameter, then this does a syntax check and reports to the command-line the result of the parse.  If the recurse option (**-r**, **--recurse**) is used, then *dvl_directory* is used as the start of a search down through directories from that point, processing every DVL file found.

  **-o, --output**  
  Output reports and generated code are sent here.

  **-s, --schema**  
The fully qualified path to the root BDDL file (e.g. *WordCoreStreams.bdd*) from which the camera is built. This will be parsed to find all the structures that require a validation function generated

  **-i, --ignore**  
  The full path to the file containing rules to be ignored

  **-c, --compile**  
  Cause the validation functions to be  generated and sent to *output_directory*

  **-x, --crosscheck**  
  Cause the expanded validation BDDL expressions to be generated and sent to *output_directory*

  **-r, --recurse**  
If recurse option used, then *dvl_directory* is used to be the start of a search down through directories from that point, processing every DVL file found.

**-t, --trace**  
Trace mode - for DVL debug only

**-p, --pause**  
Wait for key press at end

**--no_sort**  
Do not sort validation methods

**--no_validation_methods**  
Create empty validation methods

**--root**  
Namespace and prefix for output code file

**--validclasses**  
File containing names of valid classes - puts *#ifdef* around validation methods not on this list

**--help**  
Display this help screen and exit.

### **EXIT STATUS**
TBD

### **FILES**

* dvl_checker.exe
* dvl_rule_classes.dll
* Antlr4.Runtime.v4.0.dll
* BinaryDOM.dll
* CodeGenerationSupport.dll
* CommandLine.dll
* FileModelling.dll
* ucp_grammar_classes.dll
* ucpSchemaLibrary.dll
* UcpToolSupport.dll
* ucpUtility.dll

### **VERSIONS**
DVL_Checker Version  2.1.1.1  

### **NOTES**
These form the context in which *dvl_checker* should be run.

* Do initial parse of DVL to confirm the raw parser syntax is correct
* Understand the meaning and check the logic of rules against the capabilities of the language
* Generate a comma-separated values (CSV) list of node names verses BDDL validation expressions
* Generate a file of validation functions

**TBD: convert and link to Dia file "dvl_to_c++.dia"**

### **EXAMPLES**

Test Single File  
**dvl_checker -d** *sttbfassoc.dvl*

Recurse down a directory testing every file  
**dvl_checker -d** *e:\\data.definitions.and.rules\\Camera_Definitions\\MSOffice\\validation\\MS-DOC* **-r**

Recurse down a directory testing every file and create a cross-reference  
**dvl_checker -d** *e:\\data.definitions.and.rules\\Camera_Definitions\\MSOffice\\validation\\MS-DOC* **-r -x -o** *c:\\temp\\myoutput*  

Recurse down a directory testing every file and create a compiled file (*validation.h* file in *report_directory*)
**dvl_checker -d** *e:\\data.definitions.and.rules\\Camera_Definitions\\MSOffice\\validation\\MS-DOC* **-r -o** *c:\\temp\\myoutput* **-s** *e:\\data.definitions.and.rules\\Camera_Definitions\\MSOffice\\bddl\\MS-DOC\\WordCoreStreams.bdd*  

### **AUTHORS**
Steven Warner <swarner@glasswallsolutions.com>

### SEE ALSO
*Fill in with related scripts and specs (e.g., DVL and BDDL guides)*