---
title: Analysis Report PDF
---

File Specific Analysis - PDF {#analysis_report_PDF}
==========================

\section pdfGwDocumentSummary gw:DocumentSummary

| Node Name | Description |
| --------- | ----------- |
| gw:TotalSizeInBytes | The size of the file passed in for processing |
| gw:FileType | “pdf”, passed in through the Glasswall API |
| gw:Version | Read from the document’s Data Stream Header |

\section pdfGwContentGroups gw:ContentGroups

The contents groups for PDF fall into two broad categories:

**File Structure**

| Group | Description |
| ----- | ----------- |
| PDF Basic Object Structure | This content group reports on the basic PDF types: |
ARRAY_end<br />
ARRAY<br />
BOOLEAN<br />
COMMENT<br />
DICTIONARY_end<br />
DICTIONARY<br />
NAME<br />
NULL<br />
NUMERIC_INTEGER<br />
NUMERIC_REAL<br />
POSTSCRIPT_EXPRESSION_end<br />
POSTSCRIPT_EXPRESSION<br />
POSTSCRIPT_OPERATOR_ARITHMETIC<br />
POSTSCRIPT_OPERATOR_CONDITIONAL<br />
POSTSCRIPT_OPERATOR_RELATIONAL<br />
POSTSCRIPT_OPERATOR_STACK<br />
REFERENCE<br />
STREAM_end<br />
STREAM_GRAPHICS_CMD_PAYLOAD<br />
STREAM_GRAPHICS_CMD<br />
STREAM<br />
STRING_HEX<br />
STRING_LITERAL<br />
UNSPECIFIED |

| Group | Description |
| ----- | ----------- |
| PDF Compressed XRef Structure | This content group reports on Compressed Cross Reference Table |
| PDF File Section Structure    | This content group reports on the high level structure of the document: PDF Comment Section Instances; PDF Cross Reference Table Instances; PDF Header Instances; PDF Object Instances; PDF StartXRef Section Instances; PDF Trailer Section Instances  |
| PDF Graphic Content Stream Structure | This content group reports on Content Stream Structure |
| PDF Object Stream Structure          | This content group reports on Object Stream Structure  |
| PDF Trailer Structure                | Not used                                               |
| PDF XRef Structure                   | Not used                                               |

| Group | Description |
| ----- | ----------- |
| PDF Basic Object Structure | This content group reports on the basic PDF types:<br />
ARRAY_end<br />
ARRAY<br />
BOOLEAN<br />
COMMENT
DICTIONARY_end  
DICTIONARY  
NAME  
NULL  
NUMERIC_INTEGER  
NUMERIC_REAL  
POSTSCRIPT_EXPRESSION_end  
POSTSCRIPT_EXPRESSION  
POSTSCRIPT_OPERATOR_ARITHMETIC  
POSTSCRIPT_OPERATOR_CONDITIONAL  
POSTSCRIPT_OPERATOR_RELATIONAL  
POSTSCRIPT_OPERATOR_STACK  
REFERENCE  
STREAM_end  
STREAM_GRAPHICS_CMD_PAYLOAD  
STREAM_GRAPHICS_CMD  
STREAM  
STRING_HEX  
STRING_LITERAL  
UNSPECIFIED
| PDF Compressed XRef Structure | This content group reports on Compressed Cross Reference Table |
| PDF File Section Structure    | This content group reports on the high level structure of the document:  
- PDF Comment Section Instances  
- PDF Cross Reference Table Instances  
- PDF Header Instances  
- PDF Object Instances  
- PDF StartXRef Section Instances  
- PDF Trailer Section Instances  |

| PDF Graphic Content Stream Structure | This content group reports on Content Stream Structure |
| PDF Object Stream Structure          | This content group reports on Object Stream Structure  |
| PDF Trailer Structure                | Not used                                               |
| PDF XRef Structure                   | Not used                                               |

**File Content**

| Group | Description |
| ----- | ----------- |
| Common PDF Data Structures | Data structures for text strings, dates, rectangles, name trees, and number trees. |
| PDF Annotations Data | Associates objects such as notes, sound or movies with a location on page |
| PDF ASCII Filter Stream | Decodes data encoded in an ASCII hexadecimal representation, reproducing the original binary data.. |
| PDF ASCII85 Filter Stream | Data encoded in an ASCII base-85 representation, reproducing the original binary data. |
| PDF Catalogue Data | References to other objects defining the document’s contents, outline, article threads, named destinations, and other attributes. |
| PDF CCIT Filter Stream | Decompresses data encoded using the CCITT facsimile standard, reproducing the original data |
| PDF Colour Space Data | Specifies colors of graphics objects to be painted on the current page. |
| PDF Crypt Filter Stream | Decrypts data encrypted by a security handler, reproducing the original data as it was before encryption |
| PDF DCT Filter Stream | Decompresses data encoded using a DCT (discrete cosine transform) technique based on the JPEG standard, reproducing image sample data that approximates the original data. |
| PDF Embedded Font | A font program can be embedded in a PDF file as data contained in a PDF stream object. Such a stream object is also called a font file by analogy with font programs that are available from sources external to the consumer application. |
| PDF Filter Predictor | Transformation by a predictor function, which improves the compression of sampled image data. |
| PDF Font Data | A font is represented in PDF as a dictionary specifying the type of font, its PostScript name, its encoding, and information that can be used to provide a substitute when the font program is not available. Optionally, the font program can be embedded as a stream object in the PDF file. |
| PDF Function Data | Function objects that represent parameterized classes of functions, including mathematical formulas and sampled representations with arbitrary resolution. |
| PDF Graphic Content Stream | Sequence of graphics objects to be painted on the page. |
| PDF Graphic State Data | A PDF consumer application maintains an internal data structure called the graphics state that holds current graphics control parameters. These parameters define the global framework within which the graphics operators execute. For example, the f (fill) operator implicitly uses the current color parameter, and the S(stroke) operator additionally uses the current line width parameter from the graphics state. |
| PDF Halftone Data | Data related to rendering grayscale elements on a bilevel device. |
| PDF Huffman Filter Stream | Decompresses data encoded using the zlib/deflate compression method, reproducing the original text or binary data. |
| PDF JBIG Filter Stream | Decompresses data encoded using the JBIG2 standard, reproducing the original monochrome |
| PDF JPX Filter Stream | Decompresses data encoded using the wavelet-based JPEG2000 standard, reproducing the original image data. |
| PDF LZW Filter Stream | Decompresses data encoded using the LZW (Lempel-Ziv-Welch) adaptive compression method, reproducing the original text or binary data. |
| PDF Name Tree Data | Serves a similar purpose to a dictionary—associating keys and values—but by different means. |
| PDF Number Tree Data | A number tree is similar to a name tree, except that its keys are integers instead of strings and are sorted in ascending numerical order. |
| PDF Optional Content Data | Sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers. |
| PDF Outline Data | A PDF document may optionally display a document outline on the screen, allowing the user to navigate interactively from one part of the document to another. The outline consists of a tree-structured hierarchy of outline items (sometimes called bookmarks), which serve as a visual table of contents to display the document’s structure to the user. |
| PDF Page Tree Data | The pages of a document are accessed through a structure known as the page tree, which defines the ordering of pages in the document. |
| PDF Pattern Data | Data relating to items such as a repeating figure or smooth gradient is called a pattern. |
| PDF Resource Data | The operands supplied to operators in a content stream may only be direct objects; indirect objects and object references are not permitted. In some cases, an operator needs to refer to a PDF object that is defined outside the content stream, such as a font dictionary or a stream containing image data. This can be accomplished by defining such objects as named resources and referring to them by name from within the content stream. |
| PDF Structure Tree Data | The logical structure of a document is described by a hierarchy of objects called the structure hierarchy or structure tree. |
| PDF Threads Data | Some types of documents may contain sequences of content items that are logically connected but not physically sequential. For example, a news story may begin on the first page of a newsletter and run over onto one or more nonconsecutive interior pages. To represent such sequences of physically discontiguous but logically related items, a PDF document may define one or more articles. The sequential flow of an article is defined by an article thread; the individual content items that make up the article are called beads on the thread. PDF viewer applications can provide navigation facilities to allow the user to follow a thread from one bead to the next. |
| PDF Trailer Data | The trailer of a PDF file enables an application reading the file to quickly find the cross-reference table and certain special objects. |
| PDF XObject  Data | A transparency group is represented in PDF as a special type of group XObject called a transparency group XObject. |
| PDF Web Capture  Data | Web Capture is a PDF 1.3 feature that allows information from Internet-based or locally resident HTML, PDF, GIF, JPEG, and ASCII text files to be imported into a PDF file. |
