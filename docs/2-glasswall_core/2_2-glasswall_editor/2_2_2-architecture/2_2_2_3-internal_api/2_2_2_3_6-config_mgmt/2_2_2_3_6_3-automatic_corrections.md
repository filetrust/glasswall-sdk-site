---
title: 2.2.2.3.6.3 Automatic Corrections
sidebar_label: 2.2.2.3.6.3 Automatic Corrections
---

## Overview
Automatic corrections back to the file specification is performed on file regeneration. The purpose of this is to enable Glasswall FileTrust to take out threats that are hidden within the file structure as well as preventing the possibility of activating exploits via the misuse of structural components in the file.

In analysis mode, all automatic corrections made to a file are reported as remedy items.

## Remediation
There are various types of remedies that are performed across all supported file types.

Unrecognised objects that are hidden within the file structure and are not defined in the official specification are removed.
Where possible, components of a file that deviate from the manufacturers specification are corrected back to the standards set in the specification, otherwise an issue is reported.
As mentioned in the Configuration Management section, content management is not configurable on image files therefore content such as metadata is removed from images in addition to the points above.