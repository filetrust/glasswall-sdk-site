---
title: 4.2.2.2 XSD Test Results 
sidebar_label: 4.2.2.2 XSD Test Results 
---

```<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">
 <!-- XML Schema Generated from XML Document on Thu Jun 01 2017 10:37:22 GMT+0100 (GMT Daylight Time) -->
 <xs:element name="TestCases">
	 <xs:complexType>
	   <xs:sequence>
		   <xs:element name="TestCase" maxOccurs="unbounded">
			 <xs:complexType>
				 <xs:sequence>
				   <xs:element name="Tests" minOccurs="0">
					   <xs:complexType>
						 <xs:sequence>
							 <xs:element name="Test" minOccurs = "0" maxOccurs="unbounded">
							   <xs:complexType>
								   <xs:sequence>
									 <xs:element   name="FailedFiles" minOccurs="0" maxOccurs="unbounded">
									   <xs:complexType>
										 <xs:sequence>
											<xs:element name="FailedFile" minOccurs="0" maxOccurs="unbounded">
												<xs:complexType>
													<xs:simpleContent>
													<xs:extension base="xs:string">
														<xs:attribute name="FailureReason" type="xs:string" />
													</xs:extension>
													</xs:simpleContent>
												</xs:complexType>
											</xs:element>
										</xs:sequence>
									   </xs:complexType>
									 </xs:element>
								   </xs:sequence>
								   <xs:attribute name="Description" type="xs:string" use="required"></xs:attribute>
								   <xs:attribute name="Name" type="xs:string"></xs:attribute>
								   <xs:attribute name="Result" use="required">
									<xs:simpleType>
									  <xs:restriction base="xs:string">
										<xs:enumeration value="Success"/>
										<xs:enumeration value="Fail"/>
									  </xs:restriction>
									</xs:simpleType>
								   </xs:attribute>
							   </xs:complexType>
							 </xs:element>
						 </xs:sequence>
					   </xs:complexType>
				   </xs:element>
				 </xs:sequence>
				 <xs:attribute name="Description" type="xs:string" use="required"></xs:attribute>
				 <xs:attribute name="Name" type="xs:string"></xs:attribute>
				 <xs:attribute name="ID" type="xs:int"></xs:attribute>
				 <xs:attribute  name="Result" use="required">
				  <xs:simpleType>
					<xs:restriction   base="xs:string">
					  <xs:enumeration value="Success"/>
					  <xs:enumeration value="Fail"/>
					</xs:restriction>
				  </xs:simpleType>
				 </xs:attribute>
			 </xs:complexType>
		   </xs:element>
	   </xs:sequence>
	   <xs:attribute name="PathToLibrary" type="xs:string"></xs:attribute>
	 </xs:complexType>
 </xs:element>
</xs:schema>

```

