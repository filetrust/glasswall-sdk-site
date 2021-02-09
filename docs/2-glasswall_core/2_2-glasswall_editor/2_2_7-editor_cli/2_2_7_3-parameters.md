---
title: 2.2.7.3 Parameters
sidebar_label: 2.2.7.3 Parameters
---

Only the highlighted single key parameters work on Linux. Where values strings are supplied with parameters then the value must be in quotes if it contains spaces.

| **Parameter** | **Description** |
| --- | --- |
| **-?, **** -h ****, --help** | Displays the help information with the list of parameters and what they are used for. |
| **-v**** , --version** | Displays the Glasswall version information. |
| **-i**** , --inputdirectory** | Used to specify the location of the folder containing the files to be processed which is given after the parameter. For example, -i &quot;e:\cli\test data\oxml&quot; |
| **-o**** , --outputdirectory** | The location you want the processed files to go to. This can either be an existing folder using a file path, a new folder in a specified location or a new folder within the current directory. The value is supplied after the parameter. For example, –o &quot;e:\cli\output\results&quot; |
| **-c**** , --xmlConfig** | This directs the application to the content management file containing the options for how to manage the file content. Usage –c &quot;C:\cli\config.xml&quot; |
| **-s**** , --storageMode** | Selecting the storage mode, default is File to File. 0 = file to file, 1 = file to memory and 2 =memory to memory. For example, –s 3. |
| **-x**** , --exportimport** | Sets the import export option, either import or export. Export will export any embedded content and import will reimport the safe files that were exported. For example, –x export. |
| **-n**** , --config** | This directs the application to the configuration INI file containing your chosen settings instead of using the parameters in the terminal. For example, –n &quot;c:\cli\config.ini&quot;Note: CLI expects the –n and –c paramters to be used together. |
| **-m**** , --concurrent** | Tells Glasswall to run in multithreaded mode. |
| **-r**** , --recurse** | Directs the application to recursively process all files in the subfolders of the specified input directory. |
| **-p**** , --preOrPostProcessWithRebuild** | Allows you to run both Editor and Rebuild in either order. |
| **-d**** , --determineftype** | This function has been deprecated. |
| **-t**** , --securTags** | This is used to tell Glasswall to insert the security tags specified in the supplied XML file containing the tags. For example, –t &quot;e:\cli\tagging.in&quot; |
| **-u**** , --securRetrieveTags** | This retrieves the security tags that Glasswall finds in the files of the specified input directory and outputs the tags to the directory specified following this parameter. For example, –u e:\cli\tagsout&quot; |
| **-l**** , --reportReq** | This enable report logs which allows you to see the processes of the files being run. |
| **-a**** , --allidinfo** | This gives you all possible issue ID&#39;s which you can use to understand what issue caused the files to be non-conforming. |
| **-b**** , --idinfo** | This allows you to retrieve a specific issue ID. |
| **-j**** , --archive** | This is used to set the archive setting to Analysis or Protect mode. |
| **-w**** , --wordsearch** | This enables wordsearch, to be used to search a document for specific words and remove or replace them. |
| **-g**** , --homoglyphs** | This directs the application to the homoglyphs file containing the homoglyphs required for the wordsearch function to work. Usage –g &quot;C:\cli\homoglyphs.json&quot; |