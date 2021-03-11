---
title: 7.2.1 CFB Geneology
sidebar_label: 7.2.1 CFB Geneology
---

### **NAME**
&emsp;&emsp;&emsp;&emsp;*cfbGeneology* - provide textual analysis of red-black tree in a Compound File Binary (CFB) file

### **SYNOPSIS**
&emsp;&emsp;&emsp;&emsp;**cfbGeneology --in**(=| )*inputfile* **--out**(=| )*outputfile*  
&emsp;&emsp;&emsp;&emsp;&emsp;**cfbGeneology** (**--man** | **--help** | **--version** | **--usage**)

### **DESCRIPTION**
Analyse CFB format files and produces tabular reports for each file showing the class ID, Directory Entry name, Left Sibling ID, Right Sibling ID and Child ID. This allows analysis of the CFB red-black tree within each file.

### **OPTIONS**

The **--man**, **--help**, -**-version**, and **--usage** options provide information about **cfbGeneology**, then exit. The **--in** and **--out** options provide the textual analysis of the CFB file.

&emsp;&emsp;&emsp;&emsp;**--in**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The name of the CFB file to be analysed.

&emsp;&emsp;&emsp;&emsp;**--out**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The name of the file where the analysis is to be placed.

&emsp;&emsp;&emsp;&emsp;**--man**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Display comprehensive help and exit.

&emsp;&emsp;&emsp;&emsp;**--help**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Display usage and description of each option and exit.

&emsp;&emsp;&emsp;&emsp;**--version**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Output version information and exit.

&emsp;&emsp;&emsp;&emsp;**--usage**  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Display usage and exit.

### **EXIT STATUS**  

| Status|Meaning
| ---|---
|0| success  
|non-zero|   error


### **EXAMPLE**
**cfbGeneology --in=c:\docs\doc_01.doc  --out=c:\output_directory\doc_01-GENEOLOGY.txt**  
&emsp;&emsp;&emsp;&emsp;Analyse file *doc_01.doc* in directory *c:\docs* and place the output in file *doc_01-GENEOLOGY.txt* in directory *c:\output_directory*.  

**cfbGeneology --in c:\docs\doc_01.doc --out c:\output_directory\doc_01-GENEOLOGY.txt**  
&emsp;&emsp;&emsp;&emsp;As above, but shows that `=` is optional.   

**cfbGeneology --in="c:\docs directory\doc_01.doc" --out="c:\output directory\doc_01-GENEOLOGY.txt"**  
&emsp;&emsp;&emsp;&emsp;As above, but shows use of `"` when paths contain spaces.

### **SEE ALSO**
&nbsp;&nbsp;&nbsp;&nbsp;[checkCFBSignature](7_2_2-CheckCFBSignature.md), [walkCFB](7_2_4-WalkCFB.md)

### **AUTHOR**
&nbsp;&nbsp;&nbsp;&nbsp;Martin O'Brien mobrien@glasswallsolutions.com

### **COPYRIGHT**
&nbsp;&nbsp;&nbsp;&nbsp;&copy; Glasswall Solutions Limited.