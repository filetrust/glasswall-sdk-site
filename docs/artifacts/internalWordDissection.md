Word Dissection {#internalWordDissection}
===========================================

\section Author

Steve Warner 

\section Description

Extracts structure and stream components from a word binary file and stores them as separate binary files, data which can then be used to test/validate BDD structure definitions.

\section Location
Can be found at the following location in TFS:

- inhouse.tools\GWBinaryAnalysisTools\MSOfficeAnalysis\MSWordAnalysis\WordDocumentStreamWalker\WordDissection\bin\Release\WordDissection.exe


\section Usage

WordDissection 

Version: 1.8.3

Usage:

WordDissection *directoryToProcess* *command*
where *directoryToProcess* is processed and all its subdirectories. These directories need to have had *walkCFB* run on them already and contain WordDocument.bin and 1Table.bin and/or 0Table.bin and optionally data.bin.

where *command* is one or more of these
    
h - get headings

d - get blob info
    
t - split table into substreams
    
c - create core file from wds/table/data streams
    
o - overwrite - write files even if they already exist
    
v - verbose messages during execution

e.g.: 

WordDissection c:/testfiles tc

will create TableStream subdirectory and its contents and the core stream binary for every *.doc directory in c:/testfiles



WordDissection Specification
============================

Phase 1
=======

Requirement:

Search directories previously processed by WalkCFB (with -streams option) looking for the binaries created from the streams withing CFB files.

Taking Miraplacid Binary Reader sample as a base. Create a program that looks in the current directory and all its subdirectories.
If it finds a WordDocument.bin and at least a 1Table.bin or 0Table.bin file it begins processing the files.

It has several options.

Firstly it uses a copy of the WordDocument.bdd file as a schema (added as a resource to the program project) to dissect the WordDocumentStream.bin file.

With the Bin-DOM tree generated, it searches for the base.fWhichTblStm flag and determines whether to use the 1Table.bin or 0Table.bin  as the TableStream of choice


With the Bin-DOM tree generated, it loops through the Blob looking for all the fc/lcb pairs.

The 'H' option sends a comma separated list of the fc headers to the standard output
The 'D' option sends a comma separated list of the lcb sizesto the standard output

These are put together into text files for processing in Excel to build statistics about the Table Stream


The 'T' option creates a subdirectory called TableStream and writes a binary file for each fc/lcb pair (using the names in the Bin-DOM tree that came from the  WordDocument.bdd). The binary file is extracted from the TableStream at the fc offset for thr lcb number of bytes.

The 'C' option creates the WordCoreStreams.bin file by concatenating the chosen Tablestream the Data stream (optional stream) and theWordDocumentStream.bin.
It will prefix this with  three 32 bit size fields for the size of each stream in the same order they are written.
This conform with the WordCoreStreams.bdd file.

The 'O' option overwrites the output files if they already exist - but it doesnt change Read Only files.


Phase 2
=======


Requirement:

Change commandline options to use "-name" form

H becomes -h or --headers
D becomes -d or --data
T becomes -t or --table
C becomes -c or --core
O becomes -o or --overrite


New Option 

-w or --odraw

For every directory being processed.
Bring WordCoreStreams.BDD into the program as a resource.
Parse WordCoreStreams.bin into a Bin-DOM tree 

Search through PLCs for a sprmCFSpec and sprmCPicLocation applied to the same CP 
Using the rule defined in MS-DOC 1.3.5 Pictures, determine the offset into the Data stream where a PICFAndOfficeArtData object starts (which contains a header which determines the size of the object - a PICFAndOfficeArtData.bdd will be required for this)


PlcSpa (MS-DOC 2.9.253 Spa) also references a shape via the OfficeArtDggContainer. This should resolve to further ODraw data that could be extracted to a separate binary files.

When these objects are found, they should be written to a subdirectory called 'DataStream' in the form 'Odraw_*data stream offset*.bin
