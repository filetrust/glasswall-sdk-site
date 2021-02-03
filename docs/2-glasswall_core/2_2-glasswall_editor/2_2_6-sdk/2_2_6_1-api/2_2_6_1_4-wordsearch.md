---
title: 2.2.6.1.4 Word Search
sidebar_label: 2.2.6.1.4 Word Search
---

GlasswallFileTrust Word Search engine is built on top of the export and import capability, performing text searching in the content and metadata of a file. Search strings, content management, and redaction rules are configured via an XML file. A user-configurable character substitution map defined in JSON form is used to provide support for text obfuscation. The engine also comes with built-in regular expression support.

Glasswall FileTrust shall provide the capability to perform word searching within the content and Metadata for the following document formats:

 - Binary Office (.doc, .xls, .ppt plus variants such as .dot etc.)
 - Office XML (.docx, .xlsx, .pptx plus variants such .dotx, .docm etc.)
  
Additionally, Glasswall FileTrust can search the metadata for specified words in these file formats:

 - MP3
 - WAV
  
The forbidden words will be provided in a list and associated with user-defined tags which will define the type of action to be applied to the matching text. Supported actions are redaction or replacement of the matched words and will define the scope of the action as a word, sentence, or page.

Text export will report the location of text within files, the location of the text, and its encoding.

The APIs for word search support string and character based matching, and regular expression matching.

 