---
title: checkCFBSignature
---

### **NAME**
*checkCFBSignature* - detect files containing Compound File Binary (CFB) signatures

### **SYNOPSIS**
**checkCFBSignature** **--in**(=| )*input_directory* **--out**(=| )*output_file*  
**checkCFBSignature** **--in**(=| )*input_directory* **--out**(=| )*output_file* **--copy** **--target_dir**(=| )*target_directory*  
**checkCFBSignature** **--in**(=| )*input_directory* **--out**(=| )*output_file* **--move** **--target_dir**(=| )*target_directory*

### **DESCRIPTION**
Check files for a CFB signature and optinally move (**--move**) or (**--copy**) files that do not have a signature into the directory specified by the **--target_directory** option.

Using the **--move** option enables a directory to be cleared of all CFB files. Using the **--copy** option means the target directory will contain non-CFB files, without changing  the input directory.

### **OPTIONS**

**--in**  
The name of the directory containing the files to be analysed. CheckCFBSignature will recurse downward through all sub-directories.

**--out**  
The name of the file where the analysis will be placed.

**--copy**  
Boolean. Copy files that do not contain the CFB signature into the directory specified by **--target_dir**. The target directory will be created if it does not exist.

**--move**  
Boolean. Move files that do not contain the CFB signature into the directory specified by **--target_dir**. The target directory will be created if it does not exist.

**--target_dir**  
Mandatory if **--copy** or **--move** is specified. The directory into which non-matching files will be moved or copied.

**--debug**  
Display debug information. For development purposes.

**--help**  
Display usage and description of each option and exit.

### **EXIT STATUS**
|Status|Description
|---|---
|0|success  
|non-zero|error

### **EXAMPLES**
Read recursively from directory *c:\TestFiles\CFB* and log in file *cfb_files.txt* a list of the files that have a CFB signature:

&nbsp;&nbsp;&nbsp;&nbsp;**checkCFBSignature** **--in**=*c:\TestFiles\CFB* **--out**=*cfb_files.txt*

Read recursively from directory *c:\TestFiles\CFB* and log in file *cfb_files.txt* a list of the files that have a CFB signature, and move all files that do not have a CFB signature into directory *non_cfb_files*, creating that directory if it does not exist.

&nbsp;&nbsp;&nbsp;&nbsp;**checkCFBSignature** **--in**=*c:\TestFiles\CFB* **--out**=*cfb_files.txt* **--move** **--target_dir** *non_cfb_files*



### **SEE ALSO**
[cfbGeneology](cfbGeneology), [walkCFB](WalkCFB)

### AUTHOR
Martin O'Brien mobrien@glasswallsolutions.com

### COPYRIGHT
&copy; Glasswall Solutions Limited.