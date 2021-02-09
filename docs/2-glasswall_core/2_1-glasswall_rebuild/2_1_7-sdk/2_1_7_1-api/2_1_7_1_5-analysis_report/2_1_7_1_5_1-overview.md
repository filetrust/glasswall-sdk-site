---
title: 2.1.7.1.5.1 Overview
sidebar_label: 2.1.7.1.5.1 Overview
---
# Glasswall Analysis Report

The Glasswall library operates in either Analysis or Protect mode:

- Analysis mode enables the content of documents to be assessed with a report generated to summarise the non-conformances and potential threats.

- Protect mode addresses the issues that are identified, returning an updated document with the remedies and sanitisation changes necessary to remove any threat incorporated.

What follows is a file-type agnostic description of the data logged by Glasswall during document analysis. The analysis report is produced in XML. The structure of the XML report is defined by the Analysis Report XSD.

## Analysis Report Structure

## gw:DocumentStatistics

Within the highest level XML node gw:GWallInfo is the gw:DocumentStatistics node. This encloses the data for the document being analysed. The document specific information is held within three sub-nodes:

- gw:DocumentSummary

- gw:ContentManagementPolicy

- gw:ContentGroups

An optional fourth node gw:ExternalData can exist for client applications. It is not populated by the Glasswall DLL.

An extract from an analysis XML report for this section:
```
<gw:GWallInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gw="http://glasswall.com/namespace"xsi:schemaLocation="http://glasswall.com/name space/GWallInfo.xsd">
    <gw:DocumentStatistics>
        <gw:DocumentSummary>...</gw:DocumentSummary>   
        <gw:ContentManagementPolicy>...</gw:ContentManagementPolicy>
        <gw:ContentGroups groupCount="21">...</gw:ContentGroups>
    </gw:DocumentStatistics>
</gw:GWallInfo>
```
## gw:DocumentSummary

This section provides the highest level of data in the analysis of the document. It includes:

- gw:TotalSizeInBytes which reports the size of the file being processed,

- gw:FileType which reports the type of file being processed and, where applicable,

- gw:Version which reports the version of the file being processed.

An extract from an analysis XML report for this section:
```
<gw:DocumentSummary> 
    <gw:TotalSizeInBytes>4148344</gw:TotalSizeInBytes>
    <gw:FileType>pdf</gw:FileType>
    <gw:Version>PDF-1.6</gw:Version>
</gw:DocumentSummary>
```
## gw:ContentManagementPolicy

The gw:ContentManagementPolicy section provides a snapshot of the relevant content management policy that was in place when the document was processed. It includes:

- gw:ContentName which reports the content management switch name for the policy, for example GWFILE\_MANAGE\_REMOVE\_JAVA\_SCRIPT\_ACTIONS

- gw:ContentValue which reports the content management switch setting for the policy.

An extract from an analysis XML report for this section:
```
<gw:ContentManagementPolicy>
    <gw:Camera cameraName = "pdfConfig">   
        <gw:ContentSwitch>
            <gw:ContentName>javascript</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>acroform</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>embedded_files</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>metadata</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>actions_all</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>internal_hyperlink</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
        <gw:ContentSwitch>
            <gw:ContentName>external_hyperlink</gw:ContentName>
            <gw:ContentValue>sanitise</gw:ContentValue>
        </gw:ContentSwitch>
    </gw:Camera>
</gw:ContentManagementPolicy>
```
## gw:ContentGroups

The gw:ContentGroups node is a collection of gw:ContentGroup nodes. An attribute, groupCount, is associated with the node to record how many gw:ContentGroup nodes are in the collection.

An extract from an analysis XML report for this section:
```
<gw:ContentGroups groupCount="21">
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
    <gw:ContentGroup>...</gw:ContentGroup>
</gw:ContentGroups>
```
## gw:ContentGroup

A content group is a category of document element, or section of a document. It can be defined at any level of abstraction and enables statistics to be gathered, and problems associated, in a manner that is sensible for the type of document being processed. The content group consists of:

- gw:BriefDescription which provides a description of the information that is associated with this content group

- A collection of sub-nodes each with a collection of data items. Each of these data items provides a &#39;Technical Description&#39; explaining the reason for its existence and a counter recording the number of instances of that data item found in the document.

An extract from an analysis XML report for this section:
```
</gw:ContentGroup>
    <gw:BriefDescription>PDF document has Basic File Section structure instances</gw:BriefDescription>
    <gw:ContentItems itemCount="5">...</gw:ContentItems>
    <gw:SanitisationItems itemCount="1">...</gw:SanitisationItems>
    <gw:RemedyItems itemCount="1">...</gw:RemedyItems>  
    <gw:IssueItems itemCount="0"/>
</gw:ContentGroup>
```

The data stored in each of the sub-nodes is defined in the following sections.

## gw:ContentItems

The gw:ContentItems node is a collection of gw:ContentItem nodes that log the checks associated with the enclosing gwContentGroup. Metrics are logged against each content item. Associated with the gw:ContentItems node is a set of statistics summarising the collection of gw:ContentItem nodes:

- itemCount records how many content items are in the collection.

- TechnicalDescription identifies the content item.

- InstanceCount records how many instances of this item occur in the document.

- TotalSizeInBytes, AverageSizeInBytes, MinSizeInBytes, MaxSizeInBytes summarise information associated with the size of the document element being reported upon.

An extract from an analysis XML report for this section:
```
<gw:ContentItems itemCount="5">
<gw:ContentItem>
    <gw:TechnicalDescription>PDF Header Instances</gw:TechnicalDescription>
    <gw:InstanceCount>1</gw:InstanceCount>  
    <gw:TotalSizeInBytes>16</gw:TotalSizeInBytes>
    <gw:AverageSizeInBytes>16</gw:AverageSizeInBytes>
    <gw:MinSizeInBytes>16</gw:MinSizeInBytes>
    <gw:MaxSizeInBytes>16</gw:MaxSizeInBytes>
</gw:ContentItem>
<gw:ContentItem>...</gw:ContentItem> 
<gw:ContentItem>...</gw:ContentItem>
<gw:ContentItem>...</gw:ContentItem>
<gw:ContentItem>...</gw:ContentItem>
</gw:ContentItems>
```

## gw:SanitisationItems

The gw:SanitisationItems node is a collection of gw:SanitisationItem nodes that log any sanitisation that is carried out within the enclosing gwContentGroup. An attribute of the node indicates how many SanitisationItem nodes are in the collection.

- itemCount reports how many sanitisation items are in the collection.

- gw:TechnicalDescription identifies the item subjected to sanitisation.

- gw:SanitisationId identifier for the item that uniquely identifies this type of sanitisation.

- gw:InstanceCount reports the occurrence of items of this type of sanitisation that has been detected within the document.

- TotalSizeInBytes, AverageSizeInBytes, MinSizeInBytes, MaxSizeInBytes summarise information associated with the size of the document element being reported upon.

An extract from an analysis XML report for this section:
```
<gw:SanitisationItems itemCount="1">
<gw:SanitisationItem>
    <gw:TechnicalDescription>Pdf Object Instances</gw:TechnicalDescription>
    <gw:SanitisationId>16</gw:SanitisationId>
    <gw:InstanceCount>78</gw:InstanceCount>
    <gw:TotalSizeInBytes>1485875</gw:TotalSizeInBytes>
    <gw:AverageSizeInBytes>19049</gw:AverageSizeInBytes>
    <gw:MinSizeInBytes>80</gw:MinSizeInBytes>
    <gw:MaxSizeInBytes>328967</gw:MaxSizeInBytes>
</gw:SanitisationItem>
</gw:SanitisationItems>
```

## gw:RemedyItems

The gw:RemedyItems node is a collection of gw:RemedyItem nodes that logs any remedial work that is carried out within the enclosing gwContentGroup. An attribute of the node indicates how many gw:RemedyItem nodes are in the collection.

- itemCount reports how many remedy items are in the collection.

- gw:TechnicalDescription identifies the item subjected to remedial work.

- gw:InstanceCount reports the occurrence of items of this type of remedy that has been detected within the document.

An extract from an analysis XML report for this section:
```
<gw:RemedyItems itemCount="1">
<gw:RemedyItem>
    <gw:TechnicalDescription>Remedy and insert missing Cross Reference Table entries.</gw:TechnicalDescription>
        <gw:InstanceCount>1</gw:InstanceCount>
</gw:RemedyItem>
</gw:RemedyItems>
```

## gw:IssueItems

The gw:IssueItems node is a collection of gw:IssueItem that log the checks associated with the enclosing gwContentGroup. An attribute of the node indicates how many gw:IssueItems nodes are in the collection.

- itemCount reports how many issue items are in the collection.

- gw:TechnicalDescription identifies the item that has been detected as an issue.

- gw:IssueId identifier for the item that uniquely identifies this type of issue.

- gw:InstanceCount reports the occurrence of items of this type of issue that has been detected within the document.

An extract from an analysis XML report for this section:
```
<gw:IssueItems itemCount="1">
<gw:IssueItem>
    <gw:TechnicalDescription>A marked content properties list is present in a resource dictionary.</gw:TechnicalDescription>
    <gw:IssueId>4</gw:IssueId>  
    <gw:InstanceCount>8</gw:InstanceCount>
    <gw:RiskLevel>High</gw:RiskLevel>
</gw:IssueItem>
</gw:IssueItems>
```

## gw:ExtractedItems

The gw:ExtractedItems node is a collection of gw:ExtractedItem nodes. An attribute, itemCount, is associated with the node to record how many gw:ExtractedItem nodes are in the collection.

An extract from an analysis XML report for this section:
```
<gw:ExtractedItems itemCount="3">
    <gw:ExtractedItem>...</gw:ExtractedItem>
    <gw:ExtractedItem>...</gw:ExtractedItem>
    <gw:ExtractedItem>...</gw:ExtractedItem>
</gw:ExtractedItems>
```
## gw:ExtractedItem

An extracted item node logs the details of each item extracted from the document.

- gw:ExtractedImage which provides the metadata information of the extracted image

An extract from an analysis XML report for this section:
```
<gw:ExtractedItem>
    <gw:ExtractedImage>
        <gw:Meta meta="WMF" />
    </gw:ExtractedImage>
</gw:ExtractedItem>
```

## gw:ExternalData

This node is not populated by the Glasswall library. This node is provided within the specification of the report to enable client applications to add document specific information to the report, and have it remain within specification.

This node is a collection of gw:MetaData nodes. The MetaData node consists of a gw:MetaDataName field and a gw:MetaDataValue field, both of which contain string types. The number of gw:Metadata nodes is arbitrarily limited to 100. The use of these fields is outside the scope of this document.

An extract from an analysis XML report for this section:
```
<gw:ExternalData>
<gw:Metadata>
    <gw:MetadataName>primum item de notita</gw:MetadataName>
    <gw:MetadataValue>quidam valor</gw:MetadataValue>
</gw::Metadata>
<gw:Metadata>
    <gw:MetadataName>item alios magis notitia</gw:MetadataName>
    <gw:MetadataValue>0123456</gw:MetadataValue>
</gw::Metadata>
</gw:ExternalData>
```