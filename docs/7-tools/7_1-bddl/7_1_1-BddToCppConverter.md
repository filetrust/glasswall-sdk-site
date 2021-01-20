---
title: 7.1.1 BDDL to C++ Converter
sidebar_label: 7.1.1 BDDL to C++ Converter
---
======================

# Authors
Steven Warner & Stuart Squibb 

# Description
Generates C++ code from BDDL data definition files (.bdd).

# Locations

Version 1 (Perl based) Can be found at the following location in TFS:
- \\inhouse.tools\\GWPerlScripts\\BDD_to_Cpp_Convertor


Version 2 (C# based) Can be found at the following location in Glasswall Internal Network:
- \\STORAGE-SERVER\\Development Drive\\Development Tools\\UCP_ToolChain\\bdd_to_cpp.exe



## Perl Version 

### Context

Converts BDD to C++ Code

DEPRECATED - will be removed in Summer 2018
 
* Produces "Template Heavy" Code
* Handles Dataheap / Directory Mechanisms for single level only

###  Architecture

tba

###  Modules

* BDD_to_Cpp_Convertor.pl
* Parser.pm

###  Usage

perl BDD_To_Cpp.pl
Starting BDD_To_Cpp.pl on  with root
Usage BDD_To_Cpp -candidate=filename and path or directory path -output=output filename and path or output directory path -recursive -interface -verbose -nomovedir -dump -root=root camera object name

 -candidate

 -output

 -recursive

 -interface

 -verbose

 -nomovedir

 -dump

 -root



## UCP Version


### Context

New Applications for Code Generation from DVL and BDD

* Produces "Template Light" Code 
* Uses virtual read/write methods
* Handles Dataheap / Directory Mechanisms for Recursive structures (as of version 1.15.0.0 of bbd_to_cpp.exe)
* Will replace the Perl version during 2018


###  Architecture

![Alt BDDL Schema](BDDL Schema.jpg)

# Location
Can be found at the following location:

- \\\\STORAGE-SERVER\\Development Drive\\Development Tools\\UCP_ToolChain\\bdd_to_cpp.exe


###  Modules


* bdd_to_cpp.exe
* Antlr4.Runtime.v4.0.dll
* BinaryDOM.dll
* CodeGenerationSupport.dll
* CommandLine.dll
* FileModelling.dll
* ucp_grammar_classes.dll
* ucpSchemaLibrary.dll
* UcpToolSupport.dll
* ucpUtility.dll






###  Usage

BDD to C++ Code generator Version  1.18.0.0
Copyright (C) 2014 Glasswall
Usage: bdd_to_cpp -s *schema file* --root *namespace/rootstructure* \[-o *output directory* -p -t \]
Examples:

Convert File
bdd_to_cpp -s singleFile.bdd --root single --includes
(e.g bdd_to_cpp
-s WordCoreStreams -root WordCoreStreams)



  -o, --output                   (Default: ) output reports and generated code are sent here.

  -s, --schema                   Required. The full path to the root *.BDD file that is being used to build a camera from. This will be parsed to find all the structures that require a validation
                                 function generated

  -t, --trace                    (Default: False) Trace mode - for debug only

  -p, --pause                    (Default: False) Wait for key press at end

  --root                         Required. Namespace and prefix for output code file

  --bddregen                     (Default: False) Generate New BDD files from the Schema as a validation of the schema creation

  --toppadding                   (Default: False) Put four padding lines at top of file

  --nocppregen                   (Default: False) Skip C++ generation

  --parentchildfile              (Default: False) Output Parent / Child structure cross reference file if required

  --schematreefile               (Default: False) Output Schema Tree file if required

  --schemacode                   (Default: False) Output Schema Code File for Read / Write handler

  --useprecompile                (Default: False) Use Precompiled headers. RootFileName.h will be used as the precompiled header

  --useprotectedscalarlook       (Default: False) Use protected scalar Looks

  --includes                     Required. path to the start of relative includes

  --ooxml                        (Default: False) add OOXML features to generated code

  --rtf                          (Default: False) add RTF features to generated code

  --perlmode                     (Default: False) produce generated code in the style of the old Perl code generator (templated code)

  --optimise                     (Default: 0) optimisation level  (1 = reduce amount of glue logic

  --deferencechainneeded         (Default: False) insert dereference checks infront of acceptrules

  --remove_second_acceptcheck    (Default: False) If Accept rule is loaded early, discard insertion of the end location check

  --enable_dataheap              (Default: False) Enable dataheap/pointer/directory mechanism

  --help                         Display this help screen.