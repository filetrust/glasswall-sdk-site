---
title: cfbGeneology
---

### NAME
&emsp;&emsp;&emsp;&emsp;*cfbGeneology* - provide textual analysis of red-black tree in a Compound File Binary (CFB) file

### SYNOPSIS
&emsp;&emsp;&emsp;&emsp;cfbGeneology --in[=]*inputfile* --out[=]*outputfile*  
&emsp;&emsp;&emsp;&emsp;cfbGeneology (--man | --help | --version | --usage)

### DESCRIPTION
&emsp;&emsp;&emsp;&emsp;cfbGeneology analyses CFB format files and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID. This allows analysis of the CFB red-black tree within each file.

**--in**  
&emsp;&emsp;&emsp;&emsp;The name of the CFB file to be analysed.

**--out**  
&emsp;&emsp;&emsp;&emsp;The name of the file where the analysis is to be placed.

**--man**  
&emsp;&emsp;&emsp;&emsp;Display comprehensive help and exit.

**--help**  
&emsp;&emsp;&emsp;&emsp;Display usage and description of each option and exit.

**--version**  
&emsp;&emsp;&emsp;&emsp;Output version information and exit.

**--usage**  
&emsp;&emsp;&emsp;&emsp;Display usage and exit.

### **EXIT STATUS**  
&emsp;&emsp;&emsp;&emsp;0          success  
&emsp;&emsp;&emsp;&emsp;non-zero   error

### **EXAMPLE**
**cfbGeneology --in=c:\docs\doc_01.doc  --out=c:\output_directory\doc_01-GENEOLOGY.txt**  
&emsp;&emsp;&emsp;&emsp;Analyse file doc_01.doc in directory c:\docs and place the output in file doc_01-GENEOLOGY.txt in directory c:\output_directory.  
**cfbGeneology --in c:\docs\doc_01.doc --out c:\output_directory\doc_01-GENEOLOGY.txt**  
&emsp;&emsp;&emsp;&emsp;As above, but shows that `=` is optional.   
**cfbGeneology --in="c:\docs directory\doc_01.doc" --out="c:\output directory\doc_01-GENEOLOGY.txt"**  
&emsp;&emsp;&emsp;&emsp;As above, but shows use of `"` when paths contain spaces.

### AUTHOR
Martin O'Brien mobrien@glasswallsolutions.com

### COPYRIGHT
Glasswall Solutions Limited.