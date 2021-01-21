---
title: 2.1.3.6.5 Configuration Management XSD
sidebar_label: 2.1.3.6.5 Configuration Management XSD
---

	<?xml version="1.0" encoding="UTF-8"?>
	<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

		<xs:simpleType name ="watermarkType">
			<xs:restriction base="xs:string">
				<xs:maxLength value="20"/>
			</xs:restriction>
		</xs:simpleType>

		<xs:simpleType name="contentManagementFlag">
			<xs:restriction base="xs:string">
				<xs:enumeration value="sanitise"/>
				<xs:enumeration value="allow"/>
				<xs:enumeration value="disallow"/>
			</xs:restriction>
		</xs:simpleType>

		<xs:simpleType name="archiveContentManagementFlag">
			<xs:restriction base="xs:string">
				<xs:enumeration value="process"/>
				<xs:enumeration value="discard"/>
				<xs:enumeration value="no_action"/>
			</xs:restriction>
		</xs:simpleType>

		<xs:element name="pdfConfig">
			<xs:complexType>
				<xs:all>
					<xs:element name="watermark" type="watermarkType" minOccurs="0" maxOccurs="1" />
					<xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="javascript" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="acroform" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="actions_all" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="value_outside_reasonable_limits" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="retain_exported_streams" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
				</xs:all>
			</xs:complexType>
		</xs:element>

		<xs:element name="wordConfig">
			<xs:complexType>
				<xs:all>
					<xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="dynamic_data_exchange" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
				</xs:all>
			</xs:complexType>
		</xs:element>

		<xs:element name="pptConfig">
			<xs:complexType>
				<xs:all>
					<xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
				</xs:all>
			</xs:complexType>
		</xs:element>

		<xs:element name="xlsConfig">
			<xs:complexType>
				<xs:all>
					<xs:element name="macros" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_files" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="metadata" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="review_comments" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="internal_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="external_hyperlinks" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="dynamic_data_exchange" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
					<xs:element name="embedded_images" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
				</xs:all>
			</xs:complexType>
		</xs:element>

		<xs:element name ="tiffConfig">
			<xs:complexType>
				<xs:all>
					<xs:element name="geotiff" type="contentManagementFlag" minOccurs="0" maxOccurs="1" />
				</xs:all>
			</xs:complexType>
		</xs:element>

			<xs:element name="textSearchConfig">
			<xs:complexType>
				<xs:sequence>
				<xs:element name="textList" minOccurs="0" maxOccurs="unbounded">
					<xs:complexType>
					<xs:sequence>
						<xs:element name="textItem" minOccurs="0" maxOccurs="unbounded">
						<xs:complexType>
							<xs:sequence>
							<xs:element name="text" type="xs:string" minOccurs="0" />
							<xs:element name="regex" type="xs:string" minOccurs="0" />
							<xs:element name="textSetting" nillable="true" minOccurs="0" maxOccurs="unbounded">
								<xs:complexType>
								<xs:simpleContent msdata:ColumnName="textSetting_Text" msdata:Ordinal="1">
									<xs:extension base="xs:string">
									<xs:attribute name="replacementChar" type="xs:string" />
									</xs:extension>
								</xs:simpleContent>
								</xs:complexType>
							</xs:element>
							</xs:sequence>
						</xs:complexType>
						</xs:element>
					</xs:sequence>
					</xs:complexType>
				</xs:element>
				</xs:sequence>
			</xs:complexType>
			</xs:element>
		
		
			<xs:element name="sysConfig">
			<xs:complexType>
				<xs:sequence>
				<!--interchange_type = [sisl|xml]  -->
				<xs:element name="interchange_type" type="xs:string" minOccurs="0" />
				<!--interchange_pretty = [true|false] ... makes output human readable -->
				<xs:element name="interchange_pretty" type="xs:string" minOccurs="0" />
				<!--run_mode = [editoronly|rebuildonly|rebuild_editor]-->
				<xs:element name="run_mode" type="xs:string" minOccurs="0" />
				<!--images_export_full = [true|false] ... when true expands images into sisl or xml -->
				<xs:element name="images_export_full" type="xs:string" minOccurs="0" />
				</xs:sequence>
			</xs:complexType>
			</xs:element>
		
		
		<xs:element name ="archiveConfig">
			<xs:complexType>
				<xs:sequence>
					<xs:any processContents="lax" type="archiveContentManagementFlag" maxOccurs="unbounded"/>
				</xs:sequence>
				<xs:attribute name="defaultCompression" form="unqualified" type="xs:string" />
			</xs:complexType>
		</xs:element>

		<xs:element name="config">
			<xs:complexType>
				<xs:all>
					<xs:element ref="pdfConfig" minOccurs="0" maxOccurs="1"/>
					<xs:element ref="wordConfig" minOccurs="0" maxOccurs="1"/>
					<xs:element ref="pptConfig" minOccurs="0" maxOccurs="1"/>
					<xs:element ref="xlsConfig" minOccurs="0" maxOccurs="1"/>
					<xs:element ref="tiffConfig" minOccurs="0" maxOccurs="1"/>
					<xs:element ref="archiveConfig" minOccurs="0" maxOccurs="1"/>
				</xs:all>
			</xs:complexType>
		</xs:element>
	</xs:schema>