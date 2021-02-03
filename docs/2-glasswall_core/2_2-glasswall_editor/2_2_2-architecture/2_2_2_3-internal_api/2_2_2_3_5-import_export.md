---
title: 2.2.2.3.5 Content Export Import
sidebar_label: 2.2.2.3.5 Content Export Import
---

The Glasswall engine deconstructs a file to its structural components and builds an external tree-like representation of the file. It visits each node of the tree, inspecting, repairing, and sanitising content items before reconstructing a new file.

The Glasswall engine also provides the ability to export and import the engine&#39;s internal representation of a file structure in an intermediate format, such as XML. This allows internal components of a file to be made available to external programs for additional processing, before recomposing the file to include those externally modified components.

Exported Formats

The export creates a .zip archive file with the following content:

- The structure and content, except images, as either SISL or XML format files. The format used is controlled by a content management switch.

-  Images of the following format are separated out from the document:

   - PNG

   - JPEG

   - GIF

   - EMF

   - WMF

   - TIFF/GeoTIFF

   - BMP

Importable Content

The following bullet points list the importable content supported in Import Mode.

- Images

  - PNG

  - JPEG

  - GIF

  - EMF

  - WMF

|   |
| --- |