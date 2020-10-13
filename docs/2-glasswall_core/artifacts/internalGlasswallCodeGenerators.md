Glasswall C++ Code Generators {#internalGlasswallCodeGenerators}
=======================


# Introduction – the requirement and architecture

The requirement was to find a way to read and validate the contents of a structured document  in a range of different formats with the minimum of code being handcrafted.  Because of the huge number of different structures that are possible within a document format, it was decided to generate C++ methods to read, validate and write the structures.

Each camera has an interface module with a ‘C’ entry point to be called by the Glasswall code usually through push_camera.  This interface function creates a top-level c++ object and calls the member functions on it to read, validate and write itself and return a managed/nonconformant result.  
The read function of this root object calls read functions for the objects that make it up and so it goes on down the data tree.  Leaf nodes that don’t contain any more structures, get the scalar values for their content from the input memory buffer (using the sim_glasswall scal_readFromBuffer functions).

Validation is performed recursively on the data tree to get each data object to perform value checks on its data with optional content management performed.

Similarly write functions are called on the managed data to serialise the managed data structures back into the output memory buffer.

In addition, this function handles any exceptions that may occur during the processing of this file and deletes the C++ data for the stream.

BDDLStructBase – A base class that contains the common data elements and functions that all BDD based data structures have.  
The main feature of the base class is the template read functions that are used by each derived structure to call its component substructures.  The templating is needed in order to pass typed parameters to the functions within each of these substructures so that they can access members of ancestor objects.

Sim_glasswall – the memorybuffer interface functions called by the generated reading and writing functions.  Functions in this module look after reading scalar fields that comprise the atoms of all the data structures.

In addition, the following utility modules provide support functions for the generated code:

* BDDHelperFuncs – small bunch of utility funcs, mostly string compare functions 
* BDDValidationFuncs – content management functions to be called by validation functions
* ucpLogging – exception reporting stuff: HandleReadException, logMultiLineError called by camera if module or base class reads




# Overview 
The tools for converting BDDL and DVL files into C++ has undergone several iterations using various tools and programming languages.
This is the current structure of the toolchains in use.

* The older Perl generator only creates C++ from BDDL
* The original C# dvl_checker tool has syntax reporting for DVL (using ANTLR to read the DVL) and C++ code generation from DVL but had some integration problems with the C++ produced by the Perl Tool because it relied on Miraplacid BDDL reading library. 
* The newer UCP Toolchain is a new BDDL to C++ generator derived from the C# dvl_checker and an upgraded dvl_checker that is integrated with the BDDL reading code (avoids reliance on Miraplacid).   
 
 
At present, some cameras are using the older Perl generator and others the newer C# replacement ([see Camera to Toolchain Map](#camera-to-toolchain-map))


\diafile "codeGenHistory.dia"


## BDD TO CPP

### Context

Converts BDD to C++ Code Produces Template Heavy Code

See  @ref BddToCppConverter




## DVL TO CPP

###  Overview 

Checks DVL files for syntax errors and produces validation methods in C++ to link with code produced by either version of BDDL to C++ convertor.

See @ref DvlChecker



## Code Generation Batchfiles (generate_code.bat) 

### Context
Suite of batchfiles run from this create C++ from BDD and DVL using old or new tools for each of the cameras


###  Modules

*Location* - ...\\glasswall.classic\\data.definitions.and.rules\\BDD_DVL_to_code_scripts

* generate_code.bat
* setup_XXXX.bat (one each for every camera plus the two platform versions [perl|ucp]



###  Usage
generate_code  "tfs_path" "cameraname" "toolversion"

where

* "tfs_path" is the path to your workspace e.g.  c:\\tfs2013
* "cameraname" is one of the camera types e.g. emf,wmf,msdoc,msppt,msxls,printersetting,rtf,equationnative   etc
* "toolversion" is either 'perl' or 'ucp' depending on whether you are using the old perl bdd-to-cpp tool and C# dvl_checker tool

or the new all C# 'ucp' tool chain currently in inhousetools/features.

(or use 'ucp_pending' if testing new ucp tools in the "\\\\STORAGE-SERVER\\Development Drive\\Development Tools\\UCP_ToolChain\\Pending" directory,
instead of default "\\\\STORAGE-SERVER\\Development Drive\\Development Tools\\UCP_ToolChain" directory)

### Example

Goto Directory ...\\glasswall.classic\\data.definitions.and.rules\\BDD_DVL_to_code_scripts in your current working branch.
Make sure miraplacid include path is pointing at your branches BDD files

Type *generate_code  c:\\tfs2015 ms-doc perl*

Will produce the C++ code in the following directories:

 ...\\glasswall.classic\\data.definitions.and.rules\\BDD_DVL_to_code_scripts\\temporary_generate_output\\msdoc_code.perl

and

 ...\\glasswall.classic\\data.definitions.and.rules\\BDD_DVL_to_code_scripts\\temporary_generate_output\\msdoc_dvl_code.perl



<a name="camera-to-toolchain-map"></a>
## Camera to Toolchain Map

<table>
<tr><th> Camera </th><th> Toolchain </th><th> BatchFileReady </th></tr>
<tr><td> msdoc </td><td> Perl </td><td> Yes </td></tr>
<tr><td> msxls </td><td> Perl </td><td> Yes </td></tr>
<tr><td> msppt </td><td> Perl </td><td> Yes </td></tr>
<tr><td> ooxml </td><td> Ucp </td><td> Yes </td></tr>
<tr><td> emf </td><td> Ucp </td><td> Yes </td></tr>
<tr><td> wmf </td><td> Ucp </td><td> Yes </td></tr>
<tr><td> rtf </td><td> Ucp </td><td> Yes </td></tr>
<tr><td> printersettings </td><td> Ucp </td><td> Yes </td></tr>
<tr><td> equationnative </td><td> Perl </td><td> Yes </td></tr>
<tr><td> PictureStream </td><td> Perl </td><td> No </td></tr>
<tr><td> CompObjStream </td><td> Perl </td><td> No </td></tr>
<tr><td> DSI </td><td> Perl </td><td> No </td></tr>


</table>

# Related Tools

[Bindirectory Reader Test tool](BinDirectoryReader.pdf "BinDirectoryReader.pdf")

# Related Links
- [Glasswall Developed Tools](UCP - Section 9.1 Glasswall Developed Tools.PDF "UCP - Section 9.1 Glasswall Developed Tools.PDF")








