---
title: Glasswall Configuration
---

\tableofcontents

\section overview Overview
The various document processing options (document analysis, document processing, process reporting) provided by the Glasswall library are predominantly available through the discrete functions of the API. In addition to these high-level processing options there are a number of additional processing options. These options enable third-party users to fine-tune the operation of the library to their specific needs and are described in the following sections. 

Changes are made to the Glasswall configuration through the [Configuration Management API](#configurationManagementAPI).

\subsection watermarkConfiguration Watermarking
**This feature is applicable only to PDF documents**\n
Watermarking enables a visible indication that the document has been processed by Glasswall. The specified text is added to a corner of each page within the document.

\subsection contentManagmentConfiguration Content Management
[Content Management Policies](#contentMangagmentPolicyDefinition) allow control of various document element types such as file attachments, executable code, interactive form content and a number of actions (e.g external links, execution of Javascripts). These document element types are known to be common attack vectors and when they are encountered within a document the [Content Management Policy](#contentMangagmentPolicyDefinition) will define how Glasswall should process them.  Each document type has its own [Content Management Policy](#contentMangagmentPolicyDefinition).

The active [Content Management Policy](#contentMangagmentPolicyDefinition) can be updated on a document by document basis, but it <b>must</b> be set prior to Glasswall being able to process any document. In the event of the [Content Management Policy](#contentMangagmentPolicyDefinition) not being set before processing documents, documents will be classified as 'non-conforming'.

\section configurationManagementAPI Configuration Management API
The Glasswall Configuration Management API provides 3 principle operations
- Set the configuration (GWFileConfigXML())
- Retrieve the current configuration(GWFileConfigGet())
- Reset the the current configuration to default settings (GWFileConfigRevertToDefaults())

A Glasswall API function GWFileConfigXML() is provided to enable the Glasswall library to be configured with a greater degree of flexibility. The API takes the required configuration as an XML null terminated string, as defined by the [Configuration Management XSD](gwConfigurationManagement.xsd). 

GWFileConfigGet() can be called at any time to retrieve the current configuration in use by the Glasswall library. A call to GWFileConfigGet() after the Glasswall library has been loaded gives access to the available configuration items and their default values. If these default values are suitable, this XML string can be used to configure the library by passing it into the GWFileConfigXML() function.

It it not necessary to send a full configuration string to GWFileConfigXML(), only those configuration items that need to be changed are required.

\subsection configurationManagmentTerminology Terminology
<a name="contentMangagmentPolicyDefinition"><b>Content Management Policy</b></a>

Content Management Policies are used to specify the set of [content management switches](#contentManagmentSwitchDefinition) that should be applied to a particular document type. In the [example below](#configurationManagementExample), there are two policies specified, one for `pdfConfig` and one for `wordConfig`. 

<a name="contentManagmentSwitchDefinition"><b>Content Management Switch</b></a>

The content management switch is used to identify a document element type and associated action. In the [example below](#configurationManagementExample), the full set of allowable content management switches for `pdfConfig` has been specified.

<a name="contentManagmentSettingSwitchDefinition"><b>Content Management Switch Setting</b></a>

The content management setting is used to specify what actions carried out by the Glasswall DLL for a particular content management switch. There are three available Content Management Switch Settings
Switch Setting | Description
---------------|------------
allow          | Glasswall processes any associated document element types and they remain in the managed document
disallow       | If any of the associated document element types are identified in a document, Glasswall identifies this document as being non-conforming, the presence of this document element type is logged in the Analysis report as an Issue Item.
sanitise       | If any of the associated document element types are identified in a document, Glasswall removes them from the managed document, the removal is logged in the Analysis report as a Sanitisation Item.

In the [example below](#configurationManagementExample), for content management policy `pdfConfig`:

- The `javascript` content management switch enables Javascript to be permitted in a managed document, if encountered.
- The `acroform` content management switch requires that any Acroform elements are flagged as issues, if encountered.
- The `internal_hyperlinks`, `external_hyperlinks`, `metadata`, `embedded_files` and `actions_all` content management switches ensure that any associated document elements are removed, if encountered.

In the [example below](#configurationManagementExample), for content management policy `wordConfig`:
- The `metadata` content management switch enables Metadata to be permitted in a managed document, if encountered.

\section configurationManagementExample Configuration Management Example

The XML below is an example of a Glasswall Configuration string:

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