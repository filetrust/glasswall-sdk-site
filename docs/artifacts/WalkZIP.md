---
title: Walk ZIP
---

### **NAME**
walkZIP - show textual description of parts in a ZIP archive (Package)

### **SYNOPSIS**
**walkWMF --in**(=| )*inputdir* **--out**(=| )*outputfile*<br />
**walkWMF** (**--man** | **--usage** | **--help** | **--version**)

### **DESCRIPTION**
Read in each file and directory in *inputdir* , recursing downwards. Each
file that has a file extension indicating an Office Open XML file
will be processed, and if it is a ZIP archive the hierarchy of its document parts will be output to *outputfile*.

### **OPTIONS**
**--in**<br />
The directory through which *walkZIP* will recurse, looking for files with extensions that indicate an Office Open XML file.

**--out**<br />
The name of the file where the analysis will be placed.

**--man**  
Display complete documentation and exit.

**--help**  
Display usage and description of each option and exit.

**--version**  
Display version information and exit.

**--usage**  
Display usage and exit.

### **EXIT STATUS**
|Status|Description
|---|---
0|Success
Non-zero|Failure

### **EXAMPLES**
**walkZIP** **--in**=*c:\TestFiles\CFB* **--out**=*cfb_files.txt*  
&nbsp;&nbsp;&nbsp;&nbsp;Read recursively from directory *c:\TestFiles\CFB* and log in file *cfb_files.txt* the structure of each Office Open XML file.

### AUTHOR
Martin O'Brien <mobrien@glasswallsolutions.com>

### COPYRIGHT
&copy; Glasswall Solutions Limited
