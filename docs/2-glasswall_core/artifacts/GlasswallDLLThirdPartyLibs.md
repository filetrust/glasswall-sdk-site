---
title: Glasswall DLL 3rd Party Libraries
---

The 3rd party libraries used by our Glasswall DLL are as follows.

## Freetype Library - Version 2.5.3 ##
For rendering text onto bitmaps and provide support for other font-related operations.  for example, used by PDF camera for font support.

Further information available at http://www.freetype.org/

    Warning: on Linux we have not upgraded and we are still using version 2.4.4.


## Mini XML Library - Version 2.7 ##
Small fast library for reading XML into DOM tree.  For example, utilised by our XML configuration component.

Further information available at http://www.msweet.org/projects.php?Z3

    Warning: do not upgrade to version 2.8 as it's problematic and causes problems with our XML configuration component.

## Zlib Library - Version 1.2.8 ##
For data compression.  For example used by our PDF camera for processing its decompression filters.

Further information available at http://www.zlib.net/

## Minizip - Version 2.7 ##
Utilise zlib for dealing with reading from and writing to OPC archives.  For example, required by our XML office camera.

Further information available at http://www.winimage.com/zLibDll/minizip.html

