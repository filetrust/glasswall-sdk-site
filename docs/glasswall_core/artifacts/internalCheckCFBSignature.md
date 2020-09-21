---
title: checkCFBSignature
---

### NAME
*checkCFBSignature* - detect files containing Compound File Binary (CFB) signatures

### SYNOPSIS
checkCFBSignature --in[=]*input_directory* --out[=]*output_file*  
checkCFBSignature --in[=]*input_directory* --out[=]*output_file* --copy --target_dir[=]*target_directory*  
checkCFBSignature --in[=]*input_directory* --out[=]*output_file* --move --target_dir[=]*target_directory*

**--in**  
The name of the CFB file to be analysed.

**--out**  
The name of the file where the analysis is to be placed.

**--copy**  
Boolean. Copy files that do not contain the CFB signature into the directory specified by **--target_dir**. The target directory will be created if it does not exist.

**--move**  
Boolean. Move files that do not contain the CFB signature into the directory specified by **--target_dir**. The target directory will be created if it does not exist.

**--target_dir**  
Mandatory if **--copy** or **--move** is specified. The directory into which non-matching files will be moved or copied.

**--debug**  
Display debug information. For development purposes.

**--files**  
Not sure! Option available but description pending!

**--help**  
Display usage and description of each option and exit.

### **EXIT STATUS**  
0          success  
non-zero   error

### AUTHOR
Martin O'Brien mobrien@glasswallsolutions.com

### COPYRIGHT
Glasswall Solutions Limited.