---
title: 2.1.3.4.6 Content Import And Export
sidebar_label: 2.1.3.4.6 Content Import And Export
---

Glasswall Rebuild provides the ability to export and import certain content items from PDF and MS-Office documents.

This allows internal components of processed files to be made available to external programs for additional processing outside of the Glasswall Rebuild domain, enabling the user to validate the components externally before recomposing the files to include those externally modified components.

In order to enable the user to carry out additional analysis on components within files, the files must be processed by the engine twice: once to extract a package containing a processed file, report any extracted components, and a second pass to reintegrate the externally analysed and/or modified components back into the document. The files are re-validated and regenerated for each pass to ensure file integrity.

## Exportable Content
The following bullet points list the exportable content supported in Export Mode:

- Images:
  - PNG
  - JPEG
  - GIF
  - EMF
  - WMF
- Text -- - This covers all text stored in a document.
  
## Importable Content
The following bullet points list the importable content supported in Import Mode.

 - Images
  - PNG
  - JPEG
  - GIF
  - EMF
  - WMF