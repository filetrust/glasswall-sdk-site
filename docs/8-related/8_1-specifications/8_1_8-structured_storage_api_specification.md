---
title: 8.1.8 Structured Storage API Specification
sidebar_label: 8.1.8 Structured Storage API Specification
---

import useBaseUrl from '@docusaurus/useBaseUrl';


<div style={{textAlign: 'center'}}>

&copy; 2014 Glasswall Solutions Limited<br />
ALL RIGHTS RESERVED

Information contained herein is the property of Glasswall Solutions Limited and is proprietary and confidential.

Martin O’Brien<br />
Glasswall Solutions Limited<br />
mobrien@glasswallsolutions.co.uk<br />

</div>

# **1 GLOSSARY**

| **Term**                      | > **Description**                   |
|-------------------------------|-------------------------------------|
| Child                         | This refers to the child of a particular storage object or root object. Only one child is stored in a storage or root object; other children are linked by the sibling connection of that child and the sibling connections of those siblings.                  
| Children                      | The children of the root object or any storage object are determined by the single child link of that root or storage object, and all the storages and  streams are linked together in the sibling list.                 |
| Descendants                   | The descendants of a particular storage or root object are all the children and their children *ad infinitum*.                   |
| Directory Entry               | An object that contains a storage object's or stream object's FileInformation.                  |
| FileInformation               | Information that is maintained about a file.                     |
| Object Rule                   | An object rule is a structure containing information required to process a storage object or stream object. It contains pointers to functions that will process a stream, and also contains pointers to pre- and post-storage handler functions. It contains the object tag, used to uniquely identify the rule.  
| Object Tag                    | An unsigned value that uniquely identifies an object rule. It is used by the rules processor to match rules.
| Parent                        | This refers to the storage that has this node as its child.
| Root storage object           | A root storage object in a compound file that must be accessed before any other storage objects and stream objects are referenced. It is the uppermost parent object in the storage object and stream object hierarchy. A root storage object will have an Object Type of type ObjectType_t with value ROOT_OBJECT_TYPE.               
| Sibling                       | For a storage object or stream object, a sibling of that object is another storage object or stream object that has the same parent.                         
| Storage object                | An object in a compound file analogous to a file system  directory. The parent object of a storage object must be another storage object or the root   storage object. The word *storage* is used in this document to include the root storage object, unless the root storage object is specifically indicated. A storage object will have an Object Type of type ObjectType_t with value STORAGE_OBJECT_TYPE.            
| Stream ID                     | An unsigned value which identifies a particular stream object, storage object, or root storage object. The value 0 is reserved for the root storage  object of the directory structure. Each stream ID must be unique across all the streams and storages in a file.              
| Stream object                 | An object analogous to a file system file. The parent object of a stream object must be a storage object or the root storage object. A stream object will have an Object Type of type ObjectType_t with value STREAM_OBJECT_TYPE.
| Structured Storage            | A single file containing a structured collection of objects known as storages and streams. The implementation of such a structure. 
| Unknown or Unallocated object | Some objects will have an Object Type of UNKNOWN_OR_UNALLOCATED_OBJECT_TYPE. This is a valid object type and usually indicates an uninitialised object.

# **2 INTRODUCTION**

## **2.1 Objective**
The objective of this document is to provide a general interface to clients that will want to process difference document types in the Glasswall software. It aims to provide consistent naming across APIs for all cameras. 

## **2.2 Nomenclature**
------------

Lucida Console is used for any source code related information. This is
to distinguish it from normal text, and to obviate problems in other
fonts for reading names such as

> lInfoFlag1

which is actually

> lInfoFlag1

(lowercase L and uppercase i look the some in quite a few fonts).
Courier would have served just as well:

> lInfoFlag1

Depending on context, the word *bracket* is used to indicate any of the
paired delimiters (), {}, \[\].

Code examples are generally shown in a box with a grey background, using
Lucinda Console font. Sometimes short examples are included in the text
in a monospaced font.

## **2.3 Structured Storage**

The API is designed to provide an interface to any type of document. The
client creates a set of functions that understands the document format
and those functions are mapped to the API function pointer names by the
client code. Thus, client functions **cfbGetName** and **opcGetName**
will be mapped to via a call to **getName**.

When a file is opened by a call to **initialiseAdaptor**, the actual
function called will ensure that the file is read in and placed in the
same type of structured storage whatever the underlying file type is.
Thus a binary Excel file, or an OPC Excel file, will be converted into
this structured storage.

Structured storage is modelled after a file system which contains a
nested hierarchy of **stream objects** and **storage objects**. A
streams object is analogous to a file, and a storage object is analogous
to a directory, which means storage objects can contain other storage
objects and stream objects.

The hierarchy is defined by a parent object/child object relationship.
Stream objects can not contain child objects. Storage objects can
contain other storage objects and stream objects.

At the top of the hierarchy is a **root storage object** which has no
parent object. The root storage object is not part of the original file
but is used to navigate the structured storage.

An **object type** is used to identify an object as a storage object
(1), a stream object (2), or a root storage object (5). 0 is used to
denote an unknown or unallocated object.

Each stream object or storage object is identified by a non-negative
integer referred to as a **Stream ID**. The root storage object, named
**Root Entry** will always have stream ID 0.

Use of all the API functions is predicated on a successful call to
**initialiseAdaptor**. This function accepts the name of the file to
open and creates the structured storage in memory, ready to be accessed
via the other API calls. **uninitialiseAdaptor** must be called to clear
the structured storage.

## **2.4 Types**

The API makes available an enumeration for use by clients:

    ObjectType_t

which contains the following constants:

---
    UNKNOWN_OR_UNALLOCATED_OBJECT_TYPE

This indicates that the object has been uninitialised and is not used.

---

    STORAGE_OBJECT_TYPE

This indicates the object is a storage object.  

---

    STREAM_OBJECT_TYPE

This indicates the object is a stream object

---

    ROOT_OBJECT_TYPE

This indicates the object is a root storage object.

---

# **3 API Functions**

## **3.1 The deleteDescendants Function**

**Synopsis**

    #include "adaptor.h"
    Status deleteDescendants(StreamID_t streamID);

The **deleteDescendants** function deletes the descendants of the
storage object with stream ID **streamID.**

**Returns**

If successful, the **deleteDescendants** function returns **SUCCESS**;
if a successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamID** refers to a stream object
(i.e., not a root object or storage object), the **deleteDescendants**
function returns **FAIL.**

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (deleteDescendants(streamID) != SUCCESS)
       /* deal with error */
    else
       /* continue processing; streamID still refers to an existing storage
    */

## **3.2 The deleteStream Function**

**Synopsis**

    #include "adaptor.h"
    Status deleteStream(StreamID_t streamID);

The **deleteStream** function deletes the stream object with stream ID
**streamID.**

**Returns**

If successful, the **deleteStream** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamID** refers to a non-stream object,
the **deleteStream** function returns **FAIL.**

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (deleteStream(streamID) != SUCCESS)
       /* deal with error */
    else
       /* continue processing; streamID is no longer valid */


## **3.3 The deleteTree Function**

**Synopsis**

    #include "adaptor.h"
    Status deleteTree(StreamID_t streamID);

The **deleteTree** function deletes the storage object with stream ID
**streamID** and all its descendants.

**Returns**

If successful, the **deleteTree** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamID** refers to a stream object
(i.e., not storage object), or there is no storage object with a stream
ID of **streamID**, or **streamID** refers to the root storage object,
the **deleteTree** function returns **FAIL.**

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (deleteTree(streamID) != SUCCESS)
       /* deal with error */
    else
       /* continue processing; the storage specified by streamID no longer
    exists */

## **3.4 The getCLSID Function**

**Synopsis**

    #include "adaptor.h"
    Status getCLSID(StreamID_t streamID, CLSID_t \*classID);

The **getCLSID** function stores the object class GUID of the stream
with stream ID **streamID** in the object pointed to by **classID**.

**Returns**

If successful, the **getCLSID** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **classID** is NULL, or an object class GUID
is not part of the underlying structure, the **getCLSID** function
returns **FAIL.**

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    CLSID_t clsID;
    /* initialise parentID */
    . . .
    if (getCLSID(streamID, &clsID) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using clsID */

## **3.5 The getFirstChild Function**

**Synopsis**

    #include "adaptor.h"
    Status getFirstChild(StreamID_t parentStreamID, StreamID_t
    *firstChildID);

The **getFirstChild** function stores in the object pointed to by
**firstChildID** the child stream ID in the object with stream ID
**parentStreamID**.

**Returns**

If successful, the **getFirstChild** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**parentStreamID** is invalid, or **firstChildID** is NULL, the
**getFirstChild** function returns **FAIL.**

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t parentStreamID;
    StreamID_t firstChildID;
       /* initialise parentStreamID */
    . . .
    /* now get the child ID of parentStreamID */
    if (getFirstChildID(parentStreamID, &firstChildID) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using firstChildID */



## **3.6 The getName Function**
--------------------

**Synopsis**

    #include "adaptor.h"
    Status getName(StreamID_t streamID, String \*name);

The **getName** function stores the pointer to the name in the stream
with stream ID **streamID** into the object pointed to by **name**.

**Returns**

If successful, the **getName** function returns **SUCCESS**; if
**streamID** is invalid, or **name** is NULL, the **getName** function
returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t parentStreamID;
    StreamID_t firstChildID;
    String name;
    /* initialise parentStreamID */
    . . .
    if (getName(parentStreamID, &name) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using name */

## **3.7 The getNextChild Function**

**Synopsis**

    #include "adaptor.h"
    Status getNextChild(StreamID_t parentStreamID, StreamID_t prevChildID StreamID_t *nextChildID);

The **getNextChild** function stores in the object pointed to by
**nextChildID** the stream ID of the next stream it finds after
**prevChildID** that has **parentStreamID** as a parent.

**Returns**

If successful, the **getNextChild** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**prevChildID** or **parentStreamID** are invalid, or **nextChildID** is
NULL, the **getNextChild** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t parentStreamID;
    StreamID_t firstChildID, nextChildID;
    if (getFirstChild(ROOT_ENTRY, &firstChildID) != SUCCESS)
    . . .
    else if (getNextChild(ROOT_ENTRY, firstChildID, &nextChildID) !=
    SUCCESS)
       /* deal with error */
    else
       /* continue processing using firstChildID */

## **3.8 The getObjectRule Function**

**Synopsis**

    #include "adaptor.h"
    Status getObjectRule(StreamID_t streamID, ObjectRule_t **pObjectRule);

The **getObjectRule** function stores a pointer to the rule, of the
object with stream ID **streamID,** in the object pointed to by
**pObjectRule**.

**Returns**

If successful, the **getObjectRule** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **pObjectRule** is NULL, the
**getObjectRule** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    ObjectRule_t *pObjectRule;
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (getObjectRule(streamID, &objectRule) != SUCCESS)
       /* deal with error */
    else
       /* continue processing */


## **3.9 The getObjectTag Function**

**Synopsis**

    #include "adaptor.h"
    Status getObjectTag(StreamID_t streamID, ObjectTag_t *objectTag);

The **getObjectTag** function stores in the object pointed to by
**objectTag** the object tag specified by **streamID**.

**Returns**

If successful, the **getObjectTag** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **objectTag** is NULL, the **getObjectTag**
function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    ObjectTag_t objectTag;
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (getObjectTag(streamID, &objecttag) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using objectTag */


## **3.10 The getObjectType Function**

**Synopsis**

    #include "adaptor.h"
    Status getObjectType(StreamID_t streamID, ObjectType_t *objectType);

The **getObjectType** function stores the object type of the stream with
stream ID **streamID** into the object pointed to by **objectType**.

**Returns**

If successful, the **getObjectType** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **objectType** is NULL, the
**getObjectType** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    /* initialise streamID */
    . . .
    if (getObjectType(streamID, &objectType) != SUCCESS)
        /* deal with error */
    else
    {
        switch (objectType)
            {
            case ROOT_OBJECT_TYPE:    /* ... process root storage ... */
                break;
            case STORAGE_OBJECT_TYPE: /* ... process non-root storage ... */
                break;
            case STREAM_OBJECT_TYPE:  /* ... process a stream ... */
                break;
            case UNKNOWN_OR_UNALLOCATED_OBJECT_TYPE /* might be empty directory entry */
                break;
            default:
               /* .. . deal with an invalid object type ... */
                break;
            }
    }

## **3.11 The getStreamPtr Function**

**Synopsis**

    #include "adaptor.h"
    Status getStreamPtr(StreamID_t streamID, memoryBuffer \*\*streamPtr);

The **getStreamPtr** function stores in the object pointed to by
**streamPtr** a pointer to the same **memoryBuffer** pointed to by the
**streamData** member of the stream object with stream ID **streamID**.

**Returns**

If successful, the **getStreamPtr** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamPtr** is NULL, the **getStreamPtr**
function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    memoryBuffer \*inBuf = NULL;
    /* initialise streamID */
    . . .
    if (getStreamPtr(streamID, &inBuf) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using inBuf */

## **3.12 The getStreamSize Function**

**Synopsis**

    #include "adaptor.h"
    Status getStreamSize(StreamID_t streamID, StreamSize_t \*pStreamSize);

The **getStreamSize** function stores the size of the stream with stream
ID **streamID** in the object pointed to by **pStreamSize**.

**Returns**

If successful, the **getStreamSize** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamSize** is NULL, or **streamID**
refers to a stream marked as deleted, the **getStreamSize** function
returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    StreamSize_t streamSize;
    /* initialise streamID */
    . . .
    if (getStreamSize(streamID, &streamSize) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using streamSize */

## **3.13 The getStructuredStorageSize Function**

**Synopsis**

    #include "adaptor.h"
    Status getStructuredStorageSize(size_t \*pSize);

The **getStructureStorageSize** function stores a count of all the
objects in the structured storage in the object pointed to by **pSize**.
The count includes the Root Storage object.

**Returns**

If successful, the **getStructureStorageSize** function returns
**SUCCESS**; if a successful call to **initialiseAdaptor** has not been
made, or p**Size** is NULL, the **getStructureStorageSize** function
returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    size_t size;
    if (initialiseAdaptor(&inBuf, &outBuf) != SUCCESS)
       /* deal with error */
    else if (getStructuredStorageSize(&size) != SUCCESS)
       /* deal with error */
    else
       /* continue processing using size */

## **3.14 The initialiseAdaptor Function**

**Synopsis**

    #include "adaptor.h"
    Status initialiseAdaptor(memoryBuffer \*inBuf, memoryBuffer \*outBuf);

**Description**

The **initialiseAdaptor** function creates a structured storage
representation using information in the structure pointed to by
**inBuf**. **outBuf** points to a memory buffer structure that will be
used by other Adaptor API functions. All subsequent calls to the Adaptor
API functions will FAIL unless this function has been called
successfully.

**Returns**

If successful, the **initialiseAdaptor** function returns **SUCCESS**;
if **inBuf** is NULL, or the adaptor has already been initialised, the
**initialiseAdaptor** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    if (initialiseAdaptor(&inBuf, &outBuf) != SUCCESS)
       /* deal with error */
    else
       /* continue processing */

## **3.15 Function isNextChild**

**Synopsis**

    #include "adaptor.h"
    Bool isNextChild(streamID_t parentStreamID, StreamID_t prevChildID);

**Description**

The **isNextChild** function determines whether there is another sibling
after the sibling **prevChildID** with parent **parentStreamID**.

**Returns**

If there is another sibling, the **isNextChild** function returns a
nonzero value to indicate true; if there is not another sibling the
**isNextChild** function returns 0 to indicate false.

**Example**

    . . .
    while (isNextSibling(parentID, prevChildID)
    {
        if (getNextChild(parentID, prevChildID, &childID) != SUCCESS)
            . . . deal with error . . .
        else
        {
            . . . process childID . . .
            prevChildID = childID;

        }
    }

## **3.16 The isValidObjectType Function**

**Synopsis**

    #include "adaptor.h"
    Bool isValidObjectType(ObjectType_t objectType);

**Description**

The **isValidObjectType** function tests that **objectType** is one of
the values in the enumeration ObjectType_t:
UNKNOWN_OR_UNALLOCATED_OBJECT, STORAGE_OBJECT_TYPE, STREAM_OBJECT_TYPE,
or ROOT_OBJECT_TYPE.

**Returns**

If **objectType** is one of the values 0, 1, 2, or 5
**isValidObjectType** returns a nonzero value to indicate true;
otherwise, it returns zero to indicate false.

**Example**

    #include "adaptor.h"
    StreamID_t streamID;
    ObjectType_t objectType;
    . . . initialise streamID ...
    if (getObjectType(streamID, &objectType) != SUCCESS)
       /* deal with error */
    else if (isValidObjectType(objectType))
       /* continue using objectType */
    else
       /* deal with error */

## **3.17 The loadStream Function**

**Synopsis**

    #include "adaptor.h"
    Status loadStream(StreamID_t streamID, memoryBuffer \*\*stream);

The **loadStream** function will allocate a memory buffer large enough
to hold the stream data referenced by the stream object with stream ID
**streamID**. **loadStream** will store in the object pointed to by
**stream** the pointer to that newly created buffer and will store that
same pointer in the relevant field of the stream object with stream ID
**streamID**. This means that after a successful call, the client can
access the stream directly through the second argument.

**Returns**

If successful, the **loadStream** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **stream** is NULL, or **streamID** refers
to a non-stream object, the **loadStream** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamID_t streamID;
    memoryBuffer *streamPtr = NULL;
    if ((status = loadStream(streamID, &streamPtr) != SUCCESS)
       /* deal with error */
    else
       /* continue processing */

## **3.18 The saveDocument Function**

**Synopsis**

    #include "adaptor.h"
    Status saveDocument(void);

The **saveDocument** function saves the structured storage
representation of the archive created by a previous call to
**initialiseAdaptor**. The method and target for the save is specific to
the type of file represented by the structured storage.

**Returns**

If successful, the **saveDocument** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, the
**setStreamPtr** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    memoryBuffer *outBuf;
    /* . . . populate inBuf . . . */
    if (initialiseAdaptor(&inBuf, &outBuf) != SUCCESS)
       /* deal with error */
    else
    {
        if (saveDocument() != SUCCESS)
           /* deal with error */
        else
           /* continue processing */
    }

## **3.19 The setStreamPtr Function**


**Synopsis**

    #include "adaptor.h"
    Status setStreamPtr(StreamID_t streamID, memoryBuffer \*pStream);

The **setStreamPtr** function stores the pointer value in **pStream** in
the **streamData** field in the stream object with stream ID
**streamID**.

**Returns**

If successful, the **setStreamPtr** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamPtr** is NULL, the **setStreamPtr**
function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    memoryBuffer \*outBuf;
    /* . . . populate inBuf . . . */
    if (initialiseAdaptor(&inBuf) != SUCCESS)
       /* deal with error */
    else
    {
        /* initialise streamID and outBuf */
        . . .
        if (setStreamPtr(streamID, outbuf) != SUCCESS)
           /* deal with error */
        else
           /* continue processing */
    }

## **3.20 The setStreamSize Function**

**Synopsis**

    #include "adaptor.h"
    Status setStreamSize(StreamID_t streamID, StreamSize_t \*streamSize);

The **setStreamSize** function stores the value of **streamSize** in the
stream size field of the stream object with stream ID **streamID**.

**Returns**

If successful, the **setStreamSize** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **streamSize** is invalid, or **streamID**
refers to a stream marked as deleted, the **setStreamSize** function
returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    StreamSize_t streamSize;
    StreamID_t streamID;
    /* initialise streamID and streamSize */
    . . .
    if (setStreamSize(streamID, streamSize) != SUCCESS)
       /* deal with error */
    else
       /* continue processing */

## **3.21 The setObjectRule Function**

**Synopsis**

    #include "adaptor.h"
    Status setObjectRule(StreamID_t streamID, ObjectRule_t \*pObjectRule);

The **setObjectRule** function sets the value of the pointer to the
object rule in the object with stream ID **streamID** to
**pObjectRule**.

**Returns**

If successful, the **setObjectRule** function returns **SUCCESS**; if a
successful call to **initialiseAdaptor** has not been made, or
**streamID** is invalid, or **pObjectRule** is NULL, the
**setObjectRule** function returns **FAIL**.

**Example**

    #include "adaptor.h"
    . . .
    ObjectRuleParamBlock_t parameterBlockForPrePostCameras;
    StreamID_t streamID;
    /* initialise streamID and parameterBlockForPrePostCameras */
    . . .
    if (setObjectRule(parentStreamID, parameterBlockForPrePostCameras.pParentObjectRule) != SUCCESS)
       /* deal with error */
    else
       /* continue

## **3.22 The uninitialiseAdaptor Function**

**Synopsis**

    #include "adaptor.h"
    void uninitialiseAdaptor(void);

**Description**

The **uninitialiseAdaptor** removes the structure storage created by
**initialiseAdaptor**. The return status to all subsequent calls to
Adaptor API functions (except **initialiseAdaptor**, which will return
FAIL only if its argument is NULL) will be FAIL.

**Returns**

The **uninitialiseAdaptor** function returns no value.

**Example**

    #include "adaptor.h"
    memoryBuffer inBuf, outBuf;
    if (initialiseAdaptor(&inBuf, &outBuf) != SUCCESS)
       /* deal with error */
    else
       /* . . . do processing . . . */
    . . .
    uninitialiseAdaptor( );

# **4 EXAMPLE USAGE**

## **4.1 Navigating through a tree from root**

    /* navigateTree: navigate a structured storage and process each node */
    uint32_t navigateTree(StreamID_t parentID, memoryBuffer *pInBuf, memoryBuffer *pOutBuf)

        fileSystemRuleSet->apiFuncPtrs->initialiseAdaptor(pInBuf, pOutBuf);
    
        /*Get First Child in list of children of the parent Node*/
        if (fileSystemRuleSet->apiFuncPtrs->getFirstChild(parentID, &nextChildID) == SUCCESS)
        {
            /* Test that node existed */
            if (nextChildID == NOSTREAM)
                return 0;

            /* do what you have to do with this node */
            status = processNode(
                                    nextChildID,
                                    parameterBlockForPrePostCameras.pParentObjectRule,
                                    recursionDepth,
                                    &parameterBlockForPrePostCameras,
                                    parentID,
                                    fileSystemRuleSet
            );
            while (fileSystemRuleSet->apiFuncPtrs->getNextChild(
                                                                    prevChildID,
                                                                    parentID,
                                                                    &nextChildID) == SUCCESS
                                                                    )
            {
                StreamID_t prevChildID = nextChildID;

                if (nextChildID == NOSTREAM)
                    break;

                /* Determine what to do with this node */
                status = processNode(
                                        nextChildID,
                                        parameterBlockForPrePostCameras.pParentObjectRule,
                                        recursionDepth,
                                        &parameterBlockForPrePostCameras,
                                        parentID,
                                        fileSystemRuleSet
                                        );
            }

        }
        fileSystemRuleSet-\>apiFuncPtrs-\>uninitialiseAdaptor( );
        return status;
        }

# **5 Summary of API Functions**

Status **deleteDescendants**(StreamID_t streamID);<br />
Status **deleteStream**(StreamID_t streamID);<br />
Status **deleteTree**(StreamID_t streamID);<br />
Status **getCLSID**(StreamID_t streamID, CLSID_t *classID);<br />
Status **getFirstChild**(StreamID_t parentStreamID, StreamID_t *firstChildID);<br />
Status **getName**(StreamID_t streamID, String *name);<br />
Status **getNextChild**(StreamID_t parentStreamID, StreamID_t prevChildID, StreamID_t *nextChildID);<br />
Status **getObjectRule**(StreamID_t streamID, ObjectRule_t **pObjectRule);<br />
Status **getObjectTag**(StreamID_t streamID, ObjectTag_t *objectTag);<br />
Status **getObjectType**(StreamID_t streamID, ObjectType_t *objectType);<br />
Status **getStreamPtr**(StreamID_t streamID, memoryBuffer **streamPtr);<br />
Status **getStreamSize**(StreamID_t streamID, StreamSize_t *pStreamSize);<br />
Status **getStructuredStorageSize**(size_t *pSize);<br />
Status **initialiseAdaptor**(memoryBuffer_t *inBuf, memoryBuffer *outBuf);<br />
Bool **isNextChild**(StreamID_t parentID, StreamID_t prevID);<br />
Bool **isValidObjectType**(ObjectType_t objectType);<br />
Status **loadStream**(StreamID_t streamID, memoryBuffer **stream);<br />
Status **saveDocument**(void);<br />
Status **setStreamPtr**(StreamID_t streamID, memoryBuffer *streamPtr);<br />
Status **setStreamSize**(StreamID_t streamID, StreamSize_t streamSize);<br />
Status **setObjectRule**(StreamID_t streamID, ObjectRule_t *pObjectRule);<br />
void **uninitialiseAdaptor**(void);<br />
 
