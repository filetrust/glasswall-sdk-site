---
title: 2.2.2.3.2 Protect Mode
sidebar_label: 2.2.2.3.2 Protect Mode
---

## Overview
In Protect Mode Content Management Policies allow control of various document element types such as file attachments, executable code, interactive form content and a number of actions (e.g. external links or the execution of Javascripts). These document element types are known to be common attack vectors and when they are encountered within a document the Content Management Policy will define how Glasswall FileTrust should process them. Each document type has its own Content Management Policy.

The active Content Management Policy can be updated on a document by document basis, but it must be set prior to Glasswall FileTrust being able to process any document. In the event of the Content Management Policy not being set before processing documents, GlasswallFileTrust defaults content management settings to sanitise.

## Protect Process
In Protect mode (as per in Analysis mode) an input file is read in and the manufacturer’s specification is used to validate each byte as it is processed. This allows all the data structures (content items) within the file to be syntactically validated and if they pass syntax validation they are subjected to further semantic checks. Those data structures that have passed both syntax and semantic validation are then written out to the new version of the input file that is regenerated on a data structure by data structure basis.

If a data structure does not pass validation an attempt is made to force the structure back to the manufacturer’s specification (the content item is remedied) before it is written to the regenerated file. If this cannot be done then a Content Issue is reported as the file cannot safely be regenerated and the input file has to be quarantined.

Whilst the input file is being read in, the Content Management policies are used to decide if key document element types, for example, macros or embedded files are required in the regenerated file. If these items are not required they are not written to the regenerated files as they are sanitised out.

## Protected Files
Files that have been through Protect mode and have been regenerated are fully conformant with the manufacturer’s specification and depending on the content management policies applied may have had a number of content items removed from the file. If all the content management policies were set to Sanitise then if the regenerated file was to be reprocessed by Glasswall FileTrust in Analysis mode there would be no issues items, no remedies items and no sanitisation items reported in the associated analysis report.