---
Get PowerPoint Version
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;getPowerPointVersion - report versions of PowerPoint Binary File Format files

### **SYNOPSIS**
**getPowerPointVersion --in**(=| )*input_directory* **--out**(=| )*output_file* [**--files**] [**--debug**] **--map_file**(=| )*map_file*  
**getPowerPointVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file* [**--files**] [**--debug**] **--move** -**-target_dir**(=| )*target_directory* **--map_file**(=| )*map_file*  
**getPowerPointVersion** **--in**(=| )*input_directory* **--out**(=| )*output_file* [**--files**] [**--debug**] **--copy** **--target_dir**(=| )*target_directory* **--map_file**(=| )*map_file*  
**getPowerPointVersion** [**--help** | **--man** | **--usage** | **--version**]

### **DESCRIPTION**
Read in each file whose extension matches the file glob *\*.ppt* in *input_directory* and all subdirectories. Report the version of each matched file. If the **--files** option is used, the filenames will be grouped by PowerPoint version. The mutually exclusive options **--copy** and --**move** direct the program to copy or move files into version-named sub-directories in *target_directory* as specified by the **--target_directory** option.

## ****OPTIONS****
**--in**  
The name of the directory containing the files to be analysed. *getPowerPointVersion* will recurse downward through all sub-directories and process all files with extension .ppt.

**--out**  
The name of the file where the analysis will be placed.

**--copy**  
Create version-named sub-directories under *target_directory* and copy files there.

**--move**  
Create version-named sub-directories under *target_directory* and move files there.

**--target_dir**  
Mandatory if **--copy** or **--move** is specified. The directory into which sub-directories named after versions will be created and where the files will be moved or copied. This directory must exist.

**--files**  
Group the files by version.

**--map_file**
This option specifies the name of the map file into which the buid numbers and versions will be placed, in comma-separated values (CSV) format.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and one-line summary of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

**--debug**  
Place debug information in file *getPowerPointVersion_DEBUG.txt*. For development purposes.

### **EXIT STATUS**
|Status|Description
|---|---
|0|success  
|non-zero|error

### **BUGS**
Running *getPowerPointVersion.exe* fails with error:

    Failed to load 'autodie::exception'.

This is pending debugging.

### **NOTES**
The script is designed to continue processing if exceptions are thrown when attempting to open a file (e.g., if filenames contain non-ASCII characters). Exceptions will be reported on the command-line, but processing will continue and *output_file* will be produced.



### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>
