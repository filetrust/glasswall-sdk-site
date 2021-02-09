---
title: 2.1.3.4.4.1 Content Management Policies
sidebar_label: 2.1.3.4.4.1 Content Management Policies
---

### Overview

Content Management Policies are used to specify the set of content management switches that should be applied to a particular document type.

The content management switch is used to identify a document element type and associated action.

The content management setting is used to specify what actions carried out by Glasswall Rebuild for a particular content management switch. Each content management switch can be set to one of three settings:

- Allow - Glasswall Rebuild processes any associated document element types and they remain in the managed document and are logged in the Analysis report as a Content Item.

- Disallow - If any of the associated document element types are identified in a document, Glasswall Rebuild identifies this document as being non-conforming, the presence of this document element type is logged in the Analysis report as an Issue Item.

- Sanitise - If any of the associated document element types are identified in a document, Glasswall Rebuild processes them if an embedded object of a supported file type using it&#39;s own content management settings or removes them from the managed document. If not, the removal is logged in the Analysis report as a Sanitisation Item.

If no value is supplied for a switch it is defaulted to Sanitise.

### XML Reports with different Content Management Policies

The following sections show how the same item of data that is under control of a content management switch is represented differently in the XML report, depending on the switch setting.

**Allow**

This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Allow.
```
<gw:Camera cameraName = "wordConfig">
gw:ContentSwitch>
<gw:ContentName>metadata</gw:ContentName>
<gw:ContentValue>allow</gw:ContentValue>
</gw:ContentSwitch>
<gw:ContentItem>
<gw:TechnicalDescription>  Metadata detected in #05SummaryInformation</gw:TechnicalDescription>
<gw:InstanceCount>1</gw:InstanceCount>
<gw:TotalSizeInBytes>4096</gw:TotalSizeInBytes>
<gw:AverageSizeInBytes>4096</gw:AverageSizeInBytes>
<gw:MinSizeInBytes>4096</gw:MinSizeInBytes>
<gw:MaxSizeInBytes>4096</gw:MaxSizeInBytes>
</gw:ContentItem>
```
**Disallow**

This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Disallow.  In Protect mode this would cause the file to be Non-conforming.
```
<gw:Camera cameraName = "wordConfig">
<gw:ContentSwitch>
<gw:ContentName>metadata</gw:ContentName>
<gw:ContentValue>disallow</gw:ContentValue>
</gw:ContentSwitch>
<gw:IssueItem>
<gw:TechnicalDescription>  Metadata detected in  #05SummaryInformation</gw:TechnicalDescription>
<gw:IssueId>96</gw:IssueId>
<gw:InstanceCount>1</gw:InstanceCount>
<gw:RiskLevel>Medium</gw:RiskLevel>
</gw:IssueItem>
```
**Sanitise**

This is an extract from the XML report for a doc file which has metadata inside it with the content management switch for metadata set to Sanitise.  In Protect mode this would cause the metadata to be removed from the regenerated file.
```
<gw:Camera cameraName = "wordConfig">
<gw:ContentSwitch>
<gw:ContentName>metadata</gw:ContentName>
<gw:ContentValue>sanitise</gw:ContentValue>
</gw:ContentSwitch>
<gw:SanitisationItem>
<gw:TechnicalDescription>Metadata detected in  #05SummaryInformation</gw:TechnicalDescription>
<gw:InstanceCount>1</gw:InstanceCount>
<gw:TotalSizeInBytes>4096</gw:TotalSizeInBytes>
<gw:AverageSizeInBytes>4096</gw:AverageSizeInBytes>
<gw:MinSizeInBytes>4096</gw:MinSizeInBytes>
<gw:MaxSizeInBytes>4096</gw:MaxSizeInBytes>
</gw:SanitisationItem>
```
### PDF

The PDF content management switches are shown in the table below:

| **Content Management Flag** | **XML Report Issue Technical Descriptions** |
| --- | --- |
| **watermark** | Adds a watermark (maximum of 20 ASCII characters) to indicate that the document has been processed by Glasswall. The specified text is added to the top right hand corner of each page of the regenerated file. The default watermark is &quot;Glasswall Approved&quot;. |
| **javascript** | Action of type /JavaScriptJavaScript content  |
| **acroform** | Interactive form (AcroForm) contentWidget annotation Action of type /SubmitForm Action of type /ResetForm Action of type /ImportData  |
| **external\_hyperlinks** | Action of type /URI |
| **embedded\_files** | Embedded file content |
| **metadata** | Document information dictionary detectedXML Metadata detected  |
| **actions\_all** | Action of type /[action type]Where action type =[Rendition|Sound|        Movie|Hide|SetOCGState|            GoTo3DView |
| **internal\_hyperlinks** | Action of type /GoTo |
| **embedded\_images** | Embedded image present in [store] |
| **value\_outside\_reasonable\_limits** | [Stream] streams allowed maximum([number]) exceeded   	        Note: It is recommended that you do not adjust the default value. |
| **retain\_exported\_streams** | Applicable to export mode. If set to allow, streams are retained in the exported document; if set to sanitise, streams are removed from the exported document |

### Images

Content management is not configurable on image files, with the exception of tiff, therefore only content items, issues and remedies can appear in an XML report for most image files. Sanitisation items cannot be present in their XML reports. Automatic corrections are applied to a file in order to bring it in line with the manufacturer&#39;s specification and/or remove unrecognised or unwanted data. See section [**Automatic Corrections**](2_1_3_4_4_3-automatic_corrections.md).

For tiff the following content management switch is available:

| **Content Management Flag** | **XML Report Issue Technical Descriptions** |
| --- | --- |
| **geotiff** | GeoTIFF data present in GeoTIFF |

### Binary and XML Office

**Common**

There are a number of content management switches common to each of the Office file types:

| **Content Management Flag** | **XML Report Issue Technical Descriptions** |
| --- | --- |
| **macros** | Macros present |
| **external\_hyperlinks** | External Hyperlinks present in [links]links  = [HFD|VtHyperlinks|\*] |
| **embedded\_files** | Embedded File present in [store]store = [Object pool|Data Stream|\*] |
| **metadata**   | Metadata detected in [meta type].meta type = [SttbfRMark|Document Summary Stream|Summary Information Stream|\*] |
| **review\_comments** | Review comments present in [comment meta type]comment meta type = [Content Stream|GrpXstAtnOwners|CommentTree|aATRDPre10|Comment10TextAtom|TxO|\*] |
| **internal\_hyperlinks** | Internal Hyperlinks present in [links]Link = [location | CT\_Hyperlink | \*] |
| **embedded\_images** | Embedded image present in [store] |

**File type Specific**

The following content management switches are file type specific.

| **Content Management Flag** | **XML Report Issue Technical Descriptions** | **File Type(s)** |
| --- | --- | --- |
| **dynamic\_data\_exchange** | DDE links present in present in [links]Link = [CT\_DdeItems|CT\_CalcChain|CT\_Cell| SupBook|\*] | Excel Binary, Excel XML, Word Binary and Word XML |


Note:

- doc and docx are controlled by the same switch setting(s)

- xls and  xlsx are controlled by the same switch setting(s)

- ppt and pptx are controlled by the same switch setting(s)