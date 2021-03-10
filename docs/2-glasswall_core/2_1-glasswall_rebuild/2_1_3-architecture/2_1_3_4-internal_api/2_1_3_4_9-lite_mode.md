---
title: 2.1.3.4.9 Lite Mode
sidebar_label: 2.1.3.4.9 Lite Mode
---
### Overview

Glasswall has an additional processing mode known as Lite. This allows Glasswall Rebuild to be more lenient in the interrogation of the input file manufacturer specification, whilst still providing the same high standard protection of sanitising content items regular protect mode processing provides. 

| Protect Mode | Lite Mode |
| --- | --- |
| Full Content Management Usage | Full Content Management Usage |
| Full Specification Validation | Minimal Validation |
| Full Specification Remediation | No Remediation |

The table below lists the document types that are supported for lite processing.  

|File Extension|Sub Type(s)|Document Type
|---|---|---
|pdf| |                                           Portable Document Format
|doc|             dot|                            Word Binary
|xls|             xlt|                            Excel Binary
|ppt|             pot|                            PowerPoint Binary
|docx|            docm, dotx, dotm|               Office Open XML Document
|xlsx|            xlsm, xltx, xltm|               Office Open XML Workbook
|pptx|            pptm, ppsx, ppam, potm, ppsm|   Office Open XML Presentation

You can find out more about the standard modes Glasswall Rebuild uses by following the links below.

[See Glasswall Rebuild Protect Mode](docs\2-glasswall_core\2_1-glasswall_rebuild\2_1_3-architecture\2_1_3_4-internal_api\2_1_3_4_2-protect_mode.md)

[See Glasswall Rebuild Analysis Mode](docs\2-glasswall_core\2_1-glasswall_rebuild\2_1_3-architecture\2_1_3_4-internal_api\2_1_3_4_1-analysis_mode.md)