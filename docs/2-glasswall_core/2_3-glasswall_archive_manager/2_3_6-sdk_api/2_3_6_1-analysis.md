---
title: 2.3.6.1 Analysis
sidebar_label: 2.3.6.1 Analysis
---

```
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

	<xs:element name="ContentManagement">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="config"  type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>
	
	<xs:element name="config">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="pdfConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="wordConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="pptConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="xlsConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="archiveConfig"  type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>
	
	<xs:element name="pdfConfig">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="acroform"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="actions_all"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="internal_hyperlinks"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="external_hyperlinks"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="embedded_files"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="javascript"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="metadata"  type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>
	
	 <xs:element name="wordConfig">
		 <xs:complexType>
			   <xs:sequence>
					<xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>
			   </xs:sequence>
		 </xs:complexType>
	</xs:element>
	
	<xs:element name="pptConfig">
		 <xs:complexType>
			   <xs:sequence>
					<xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>
			   </xs:sequence>
		 </xs:complexType>
	</xs:element>
	
	<xs:element name="xlsConfig">
		 <xs:complexType>
			   <xs:sequence>
					<xs:element name="embedded_files" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="internal_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="external_hyperlinks" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="macros" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="metadata" type="xs:string" minOccurs="0" maxOccurs="1"/>
					<xs:element name="review_comments" type="xs:string" minOccurs="0" maxOccurs="1"/>
			   </xs:sequence>
		 </xs:complexType>
	</xs:element>
	
	<xs:element name="archiveConfig">
		 <xs:complexType>
			   <xs:sequence>
					 <xs:any type="xs:string" maxOccurs="unbounded"/>
			   </xs:sequence>
		 </xs:complexType>
	</xs:element>
	

	<xs:element name="ArchiveStatistics">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="TotalSizeInBytes"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="ArchiveType" type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="Compression" type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>

	<xs:element name="IssueItem">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="ErrorDescription"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="IssueID" type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>

	<xs:element name="ContentItem">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="FileName"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="ProcessResult" type="xs:string" minOccurs="1" maxOccurs="1"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>
	
	<xs:element name="ContentGroup">
		<xs:complexType>
          <xs:attribute name="Name" type="xs:string"/>
			<xs:sequence>
				<xs:element name="ContentManagement"  type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="ArchiveStatistics" type="xs:string" minOccurs="1" maxOccurs="1"/>
				<xs:element name="ContentGroup" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
				<xs:element name="ContentItem" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
			</xs:sequence>
		</xs:complexType>
    </xs:element>
	
	
</xs:schema>
```
