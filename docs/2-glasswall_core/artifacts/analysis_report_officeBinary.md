File Specific Analysis - Office Binary {#analysis_report_OfficeBinary}
======================================

\section msOfficeGwDocumentSummary gw:DocumentSummary

<TABLE>
<TR><TH>Node Name</TH><TH>Description</TH></TR>
<TR><TD>gw:TotalSizeInBytes</TD><TD>The size of the file passed in for processing</TD></TR>
<TR><TD>gw:FileType</TD><TD>“doc”, “xls” or “ppt”, passed in through the Glasswall API</TD></TR>
<TR><TD>gw:Version</TD><TD>Read from the document’s appropriate stream</TD></TR>
</TABLE>

\section msOfficeCommonGwContentGroups gw:ContentGroups Common

The table below describes the common items across each of the office products Word, Excel & Powerpoint.

<TABLE>
<TR><TH>Group</TH><TH>Description</TH></TR>
<TR><TD>CFB_Header</TD><TD>Compound file binary package header</TD></TR>
<TR><TD>CFB Directory</TD><TD>Compound file binary directory details</TD></TR>
<TR><TD>LZ77 INFLATE</TD><TD>LZ77 decompression information</TD></TR>
<TR><TD>OLE COMPOBJ</TD><TD>Object linking and embedding data structures</TD></TR>
<TR><TD>OLE CURRENT USER</TD><TD>Current user information</TD></TR>
<TR><TD>OLE DOCUMENT SUMMARY INFORMATION</TD><TD>Metadata properties and information</TD></TR>
<TR><TD>OLE META</TD><TD>OLE object metadata</TD></TR>
<TR><TD>OLE OBJ INFO</TD><TD>OLE object information</TD></TR>
<TR><TD>OLE SUMMARY INFORMATION</TD><TD>Metadata properties and information</TD></TR>
</TABLE>

\section msOfficeWordGwContentGroups gw:ContentGroups Word

<TABLE>
<TR><TH>Group</TH><TH>Description</TH></TR>
<TR><TD>Auto Language Detection</TD><TD>Auto Language Detection data structures</TD></TR>
<TR><TD>Auto Summary</TD><TD>Auto Summary data structures</TD></TR>
<TR><TD>Auto Text</TD><TD>Auto text data structures</TD></TR>
<TR><TD>Bookmarks Annotation Bookma</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Bookmarks Format Consistency Checker</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Bookmarks Range Level Protection Bookmark</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Bookmarks Repair BookMark</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Bookmarks Standard</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Bookmarks Structured Document Tag Bookmark</TD><TD>Bookmark data structures</TD></TR>
<TR><TD>Comments</TD><TD>Review comment data structures</TD></TR>
<TR><TD>Content Stream</TD><TD>Content stream data structures</TD></TR>
<TR><TD>Custom XML</TD><TD>Custom XML storage and properties data structures</TD></TR>
<TR><TD>Customization Command</TD><TD>Customization Command properties</TD></TR>
<TR><TD>Document Information</TD><TD>Metadata data information and properties</TD></TR>
<TR><TD>Document Properties</TD><TD>Metadata data information and properties</TD></TR>
<TR><TD>Email Data</TD><TD>Email information properties</TD></TR>
<TR><TD>Embedded Document</TD><TD>Embedded document properties</TD></TR>
<TR><TD>Endnote Document</TD><TD>Endnote document properties</TD></TR>
<TR><TD>External File Reference</TD><TD>External file reference information</TD></TR>
<TR><TD>File Information Block</TD><TD>Central data structure information source</TD></TR>
<TR><TD>Font Data</TD><TD>Font data properties and information</TD></TR>
<TR><TD>Footnote Document</TD><TD>Document footnote data structures</TD></TR>
<TR><TD>Grammar Checker</TD><TD>Grammar check settings</TD></TR>
<TR><TD>Hyperlink or Form Data</TD><TD>Hyperlink and form information data structures</TD></TR>
<TR><TD>Main Document</TD><TD>Document properties</TD></TR>
<TR><TD>Object Linking and Embedding</TD><TD>OLE object data structures</TD></TR>
<TR><TD>Office Art Drawing</TD><TD>Data structures containing images and Office drawing properties</TD></TR>
<TR><TD>Printer Setting</TD><TD>Printer settings</TD></TR>
<TR><TD>Revisions</TD><TD>Document revision data structures</TD></TR>
</TABLE>

\section msOfficeExcelGwContentGroups gw:ContentGroups Excel

<TABLE>
<TR><TH>Group</TH><TH>Description</TH></TR>
<TR><TD>AutoFilter</TD><TD>AutoFilter property and information</TD></TR>
<TR><TD>Axis Group</TD><TD>Axis label properties in excel charts</TD></TR>
<TR><TD>Chart Information</TD><TD>Excel chart information data structures</TD></TR>
<TR><TD>Data Source Information</TD><TD>Data Source Information</TD></TR>
<TR><TD>Data Table</TD><TD>Data table properties</TD></TR>
<TR><TD>Data Validation</TD><TD>Excel data validation structures</TD></TR>
<TR><TD>Drawing Objects</TD><TD>Drawn object properties</TD></TR>
<TR><TD>Formatting</TD><TD>Excel formatting information</TD></TR>
<TR><TD>Formulas</TD><TD>Excel formula properties</TD></TR>
<TR><TD>Functions</TD><TD>Excel function properties</TD></TR>
<TR><TD>Hyperlink</TD><TD>Hyperlink properties</TD></TR>
<TR><TD>Metadata</TD><TD>Metadata properties</TD></TR>
<TR><TD>Office Art Drawing</TD><TD>Data structures containing images and Office drawing properties</TD></TR>
<TR><TD>Pivot Table Information</TD><TD>Pivot Table Information</TD></TR>
<TR><TD>Printer Setting</TD><TD>Printer settings</TD></TR>
<TR><TD>Query Table</TD><TD>Query table properties</TD></TR>
<TR><TD>Routing Slip</TD><TD>Routing slip information</TD></TR>
<TR><TD>Shared Workbook Informatio</TD><TD>Worksheet information</TD></TR>
<TR><TD>Sheet Information</TD><TD>Spreadsheet information</TD></TR>
<TR><TD>String Constants</TD><TD>String constant properties</TD></TR>
<TR><TD>Structure Instances</TD><TD>General data strcutures used across several groups</TD></TR>
<TR><TD>Unknown Group</TD><TD>Unknown or unrecognised data structures</TD></TR>
<TR><TD>User Interface</TD><TD>User interface properties</TD></TR>
<TR><TD>Version</TD><TD>Version number properties</TD></TR>
<TR><TD>Workbook Protection</TD><TD>Password protection properties</TD></TR>
</TABLE>

\section msOfficePowerPointGwContentGroups gw:ContentGroups PowerPoint

<TABLE>
<TR><TH>Group</TH><TH>Description</TH></TR>
<TR><TD>Animation Types</TD><TD>Data strcutures for Animation properties</TD></TR>
<TR><TD>Basic Types<TD></TD>Basic PowerPoint data structures</TD></TR>
<TR><TD>Broadcast Types</TD><TD>Presentation broadcast data strcutures</TD></TR>
<TR><TD>Comment Author Types</TD><TD>Data structures containing information on the Authors that create presentation comments</TD></TR>
<TR><TD>Common Types</TD><TD>Commonly used data structures</TD></TR>
<TR><TD>Document Comparison Types</TD><TD>Data structures used for the comparisons of states across PowerPoint</TD></TR>
<TR><TD>Document Tag Info Types</TD><TD>Data structures for programmable tags</TD></TR>
<TR><TD>Document Types</TD><TD>Data strcutures that contain infromation about the document</TD></TR>
<TR><TD>Encrypted Types</TD><TD>Data structures containing file encryption information</TD></TR>
<TR><TD>External Objects</TD><TD>OLE Object data structures</TD></TR>
<TR><TD>Header and footers</TD><TD>Header and footer data structures</TD></TR>
<TR><TD>HTML Publish Types</TD><TD>Data structures containing infromation for how to publish a document as a Web page</TD></TR>
<TR><TD>Office Art Drawing</TD><TD>Data structures containing images and Office drawing properties</TD></TR>
<TR><TD>Other Types</TD><TD>Other general data structures</TD></TR>
<TR><TD>PICTURE Instances</TD><TD>Image data structures</TD></TR>
<TR><TD>Printer Settings</TD><TD>Printer settings data structures</TD></TR>
<TR><TD>Shape Types</TD><TD>Data structures containing shape information</TD></TR>
<TR><TD>Slide List Types</TD><TD>Data structures containing presentation slide information</TD></TR>
<TR><TD>Slide Show Types</TD><TD>Data structures containing presentation slide show information</TD></TR>
<TR><TD>Slide Types</TD><TD>Data structures containing presentation slide information</TD></TR>
<TR><TD>Sound Types</TD><TD>Data strcutures containing sound information</TD></TR>
<TR><TD>Structure Instances</TD><TD>General data strcutures used across several groups</TD></TR>
<TR><TD>Summary Info Types</TD><TD>Data strcuture containing metadata information</TD></TR>
<TR><TD>Text Types</TD><TD>Data strcutures that contain text or text formatting properties</TD></TR>
<TR><TD>View Info Types</TD><TD>Data structures containing dsiplay property information</TD></TR>
<TR><TD>Visual Basic Data</TD><TD>Visual basic property information</TD></TR>
</TABLE>
