---
title: cfbGeneology
---

### NAME
*cfbGeneology* - provide textual analysis of red-black tree in a Compound File Binary (CFB) file

### SYNOPSIS
cfbGeneology --in[=]*inputfile* --out[=]*outputfile*  
cfbGeneology (--man | --help | --version | --usage)

### DESCRIPTION
cfbGeneology analyses CFB format files and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID. This allows analysis of the CFB red-black tree within each file.

**--in**  
The name of the CFB file to be analysed.

**--out**  
The name of the file where the analysis is to be placed.

**--man**  
Display comprehensive help and exit.

**--help**  
Display usage and description of each option and exit.

**--version**  
Output version information and exit.

**--usage**  
Display usage and exit.

### **EXIT STATUS**  
0          success  
non-zero   error

### AUTHOR
Martin O'Brien mobrien@glasswallsolutions.com

### COPYRIGHT
Glasswall Solutions Limited.