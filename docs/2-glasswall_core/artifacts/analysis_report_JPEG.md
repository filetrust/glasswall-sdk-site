File Specific Analysis - JPEG {#analysis_report_JPEG}
===========================================

\section jpegGwDocumentSummary gw:DocumentSummary

<TABLE>
<TR><TH>Node Name</TH><TH>Description</TH></TR>
<TR><TD>gw:TotalSizeInBytes</TD><TD>The size of the file passed in for processing</TD></TR>
<TR><TD>gw:FileType</TD><TD>“jpg”, passed in through the Glasswall API</TD></TR>
<TR><TD>gw:Version</TD><TD>Not applicable for this document type.</TD></TR>
</TABLE>

\section jpegGwContentGroups gw:ContentGroups

<TABLE>
<TR><TH>Group</TH><TH>Description</TH></TR>
<TR><TD>JPEGFileSectionMarker</TD><TD>SOI, EOI</TD></TR>
<TR><TD>JPEGFrameData</TD><TD>Captures document information associated with Start of Frame markers SOF0..SOF15</TD></TR>
<TR><TD>JPEGProcessData</TD><TD>Captures document processing markers DAC, DHT, DQT, DNL, DRI, DHP, EXP,  APPn, JPGn, COM, TEM, RES</TD></TR>
<TR><TD>JPEGScanData</TD><TD>Captures scan marker information SOS, DRI, RSTm</TD></TR>
</TABLE>					