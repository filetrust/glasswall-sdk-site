---
title: 8.1.9.2 Configuration
sidebar_label: 8.1.9.2 Configuration
---

## Overview

The various document processing options (document analysis, document processing, process reporting) provided by the Glasswall library are predominantly available through the discrete functions of the API. In addition to these high-level processing options there are a number of additional processing options. These options enable third-party users to fine-tune the operation of the library to their specific needs and are described in the following sections.

Changes are made to the Glasswall configuration through the Configuration Management API.

## Watermarking

**This feature is only applicable to PDF documents**

Watermarking enables a visible indication that the document has been processed by Glasswall. The specified text is added to a corner of each page within the document.

## Content Management

Content Management Policies allow control of various document element types such as file attachments, executable code, interactive form content and a number of actions (e.g., external links, execution of JavaScript). These document element types are known to be common attack vectors and when they are encountered within a document the Content Management Policy will define how Glasswall should process them. Each document type has its own Content Management Policy.

The active Content Management Policy can be updated on a document by document basis, but it must be set prior to Glasswall being able to process any document. In the event of the Content Management Policy not being set before processing documents, documents will be classified as &#39;non-conforming&#39;.

## Configuration Management API

The Glasswall Configuration Management API provides 3 principle operations:

- Set the configuration ([**GWFileConfigXML**](8_1_9_6-lib_modules/8_1_9_6_4-configuration_functions.md#gwfileconfigxml))

- Retrieve the current configuration ([**GWFileConfigGet **](8_1_9_6-lib_modules/8_1_9_6_4-configuration_functions.md#gwfileconfigget))

- Reset the current configuration to default settings ([**GWFileConfigRevertToDefaults**](8_1_9_6-lib_modules/8_1_9_6_4-configuration_functions.md#gwfileconfigreverttodefaults))

A Glasswall API function  **GWFileConfigXML**  is provided to enable the Glasswall library to be configured with a greater degree of flexibility. The API takes the required configuration as an XML null terminated string, as defined by the Configuration Management XSD.

**GWFileConfigGet**  can be called at any time to retrieve the current configuration in use by the Glasswall library. A call to  **GWFileConfigGet**  after the Glasswall library has been loaded gives access to the available configuration items and their default values. If these default values are suitable, this XML string can be used to configure the library by passing it into the  **GWFileConfigXML**  function.

It is not necessary to send a full configuration string to  **GWFileConfigXML** , only those configuration items that need to be changed are required.

## Terminology

###  Content Management Policy

Content Management Policies are used to specify the set of content management switches that should be applied to a particular document type. In the example below, there are two policies specified, one for pdfConfig and one for wordConfig.

### Content Management Switch

The content management switch is used to identify a document element type and associated action. In the example below, the full set of allowable content management switches for pdfConfig has been specified.

### Content Management Switch Setting

The content management setting is used to specify what actions carried out by the Glasswall library for a particular content management switch. There are three available Content Management Switch Settings:

| **Switch Setting** | **Description** |
| --- | --- |
| **allow** | Glasswall processes any associated document element types and they remain in the managed document |
| **disallow** | If any of the associated document element types are identified in a document, Glasswall identifies this document as being non-conforming, the presence of this document element type is logged in the Analysis report as an Issue Item. |
| **sanitise** | If any of the associated document element types are identified in a document, Glasswall removes them from the managed document, the removal is logged in the Analysis report as a Sanitisation Item. |

In the example below, for content management policy pdfConfig:

- The javascript content management switch enables JavaScript to be permitted in a managed document, if encountered.

- The acroform content management switch requires that any AcroForm elements are flagged as issues, if encountered.

- The internal\_hyperlinks, external\_hyperlinks, metadata, embedded\_files and actions\_all content management switches ensure that any associated document elements are removed, if encountered.

In the example below, for content management policy wordConfig:

- The metadata content management switch enables Metadata to be permitted in a managed document, if encountered.

##  Configuration Management Example

The XML below is an example of a Glasswall Configuration string:
```
<?xml version="1.0" encoding="utf-8" ?>
<config>
    <pdfConfig>  
         <watermark>Glasswall Approved</watermark>
         <javascript>allow</javascript>
         <acroform>disallow</acroform>
         <internal_hyperlinks>sanitise</internal_hyperlinks>
         <external_hyperlinks>sanitise</external_hyperlinks>
         <embedded_files>sanitise</embedded_files>
         <metadata>sanitise</metadata>
         <actions_all>sanitise</actions_all>   
    </pdfConfig>
    <wordConfig>
         <metadata>allow</metadata>
    </wordConfig>
</config>
```