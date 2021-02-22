---
title: 2.2.6.1.4.3 XSD
sidebar_label: 2.2.6.1.4.3 XSD
---

```xml
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="config" type="configType"/>
  <xs:complexType name="textSettingType">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute type="xs:string" name="replacementChar" use="optional"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  <xs:complexType name="textItemType">
    <xs:sequence>
      <xs:element type="xs:string" name="text" minOccurs="0"/>
      <xs:element type="xs:string" name="regex" minOccurs="0"/>
      <xs:element type="textSettingType" name="textSetting"/>
    </xs:sequence>
  </xs:complexType>
  <xs:complexType name="textListType">
    <xs:sequence>
      <xs:element type="textItemType" name="textItem" maxOccurs="unbounded" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
  <xs:complexType name="textSearchConfigType">
    <xs:sequence>
      <xs:element type="textListType" name="textList"/>
    </xs:sequence>
    <xs:attribute type="xs:string" name="libVersion"/>
  </xs:complexType>
  <xs:complexType name="configType">
    <xs:sequence>
      <xs:element type="textSearchConfigType" name="textSearchConfig"/>
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```