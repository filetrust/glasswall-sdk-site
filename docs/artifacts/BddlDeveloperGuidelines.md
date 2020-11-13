---
title: BDDL Guidelines
---

- [1. Introduction](#1-introduction)
- [2. Combining Fields](#2-combining-fields)
- [3. Include Statements](#3-include-statements)
- [4. Naming Bit Fields](#4-naming-bit-fields)
- [5. AcceptRule](#5-acceptrule)
  - [5.1 Placement](#51-placement)
  - [5.2 Enumerations](#52-enumerations)
  - [5.3 Arrays of Structures](#53-arrays-of-structures)
  - [5.3 File Validation](#53-file-validation)
- [6. Pointer Metadata](#6-pointer-metadata)
- [7. Version Control](#7-version-control)
- [8. Optional restrictions](#8-optional-restrictions)
- [9. char and wchar](#9-char-and-wchar)
- [10. Allowempty](#10-allowempty)
- [11. Structure Names](#11-structure-names)
  - [11.1 BDDL File Names](#111-bddl-file-names)
  - [11.2 MIME Type](#112-mime-type)
- [12. Precedence and Associativity](#12-precedence-and-associativity)
- [13. Glasswall Additions](#13-glasswall-additions)
  - [13.1 Calling legacy or external cameras](#131-calling-legacy-or-external-cameras)
  - [13.2 Validating Text fields as integers](#132-validating-text-fields-as-integers)
    - [13.2.1 BDDL](#1321-bddl)
    - [13.2.2 DVL](#1322-dvl)
  - [13.3 Guiding code generator](#133-guiding-code-generator)
    - [13.3.1 Linking Target Objects](#1331-linking-target-objects)
    - [13.3.2 Marking fields as Tokens](#1332-marking-fields-as-tokens)
    - [13.3.3 Marking fields as Whitespace](#1333-marking-fields-as-whitespace)
    - [13.3.5 Changing Filename](#1335-changing-filename)
- [14. Recommendations](#14-recommendations)
  - [14.1 Extra Annotations](#141-extra-annotations)
- [COPYRIGHT](#copyright)

## 1. Introduction

These guidelines are designed to facilitate a standardised way of
writing BDDL files. The guidelines are designed to provide code
that is clear, robust, efficient, maintainable and concise.

These guidelines may be referred to in code reviews.

## 2. Combining Fields

When combining fields, name the field using all the names, for
example, \[MS-DOC\] §2.9.207, *PnFkpPapx*, do this:

    uint32 pn_unused

## 3. Include Statements

For the include statement, use chevrons `<>` for Miraplacid library
files, and double quotes `""` for Glasswall Solution files. Always use 
forward slash `/` as a directory delimiter:

    include <strings.bdd>
    include "office_bddl/common/sttb.bdd"
    include "office_bddl/MS-DOC/WordDocument_Stream.bdd"

## 4. Naming Bit Fields

When combining bit fields, prefix the name with `f` (for *flag*).
For example, the flags stored in the first byte of the `Rfs` structure
(*\[MS-DOS\]* §2.9.227, page 441) would be named `fABCDEFG`.

The uppercase sequence of letters of the alphabet distuinguishes
them from true variable names in the specification, such as `fExtend`.

If you\'re combining other fields too, name them in sequence, for example,
the first 8 bits in `DopBase` can be named

    fABCD_fpc_fE

so each set of one of more flags is preceded by `f`.

## 5. AcceptRule

### 5.1 Placement

Place the pseudo-item `AcceptRule` as early as possible in the structure definition
in order to speed up code generation. That is, it does not have to
be the last item in the structure definition.

### 5.2 Enumerations

`AcceptRule` rejects the current structure if the condition is
false, so use an `AcceptRule` only when you want processing of the
structure to stop.

Use an `AcceptRule` for the types you specify in an enumeration, for example:

    struct Type1 {
    ...
    AcceptRule ( condition1 );
    }

    struct Type2 {
    ...
    AcceptRule ( condition2 );
    }

    struct Type3 {
    ...
    AcceptRule ( condition3 );
    }

    (Type1 | Type2 | Type3 ) types;

Make sure condition1, condition2, and condition3 are mutually
exclusive. Type3 does not need an AcceptRule, if you want it
to be the default if the other conditions fail.

### 5.3 Arrays of Structures

An `AcceptRule` can be used in a structure that is the type of an
array. As soon as the structure is not accepted, the array is
finished and the parser/validator will proceed with the next
item in the data definition.

### 5.3 File Validation

Use an `AcceptRule` if you want processing of the file to stop,
for example, if a magic value identifying the file type is
not present.

## 6. Pointer Metadata

Suffix pointer metadata directory names with `_Ptr`, for example, 

    directory SttbfAssoc_Ptr { ... }

## 7. Version Control

Push changes to your local branch then to the remote branch at appropriate intervals in order to preserve your work, especially before a weekend. This will ensure the changes are stored remotely. Files edited but not commited are stored only locally on your hard drive. If the drive fails, your edits are lost.

## 8. Optional restrictions

The `optional` keyword specifies that if the current data item is
not present, it is not an error.

The `restrictions` keyword allows an element to be validated and an
error reported if it is false.

It is important to know that when used with an array, the `restrictions`
rule is applied to each element, and when it fails, the array is ended.

This allows for variable-length arrays.

If `optional` and `restrictions` are used together, then an error is
not reported if the `restrictions` rule is false.

## 9. char and wchar

`char` is 8-bit and `wchar` is 16-bit Unicode. The BDDL
documentation refers to `char` as *ANSI* but it is a largely
meaningless description (ANSI is the acronym of the American
National Standards Institute). It usually refers to Windows Code
Pages.

Where the Microsoft specification refers to characters or wide
characters, then use the `char` and `wchar` types as required.

## 10. Allowempty

When an array size can be zero, then `allowempty` must be used.

## 11. Structure Names

### 11.1 BDDL File Names

The name of the BDDL file should have the same case as the
structure, as specified in the specification, with file type

*.bdd*. For example:

    STSH.bdd
    SttbfRMark.bdd

### 11.2 MIME Type

The MIME type specified as the value of the `mime_type`
annotation key should retain the case as specified in the
specification, prefixed by `ms/`, for example:

    mime_type="ms/STSH"
    mime_type="ms/SttbfRMark"

## 12. Precedence and Associativity

The table below summarises the rules for precedence and
associativity of all operators. Operators on the same line have the
same precedence; rows are in order of decreasing precedence, so, for
example, `*`, `/`, and `%` all have the same precedence, which is higher
than that of binary `+` and `-`. The "operator" `()` refers to function
call. The operators `->` and `.` refer to the access of structures.

|Operators                        |  Associativity
|---------------------------------|---------------
|() [] -> .                        |  left to right
|! ~ ++ -- + - * (type) sizeof     |  right to left
|* / %                             |  left to right
|+ -                               |  left to right
|<< >>                             |  left to right
|< <= > >=                         |  left to right
|== !=                             |  left to right
|&                                 |  left to right
|^                                 |  left to right
|\|                                |  left to right
|&&                                |  left to right
|\|\|                                |  left to right
|?:                                |  right to left
|= += -= *= /= %= &= ^= \|= <<= >>= |  right to left
|,                                 |  left to right



## 13. Glasswall Additions

To add some functions to BDDL that will be used by BDDL to C++ conversion, or DVL to C++ conversion programs, the annotation mechanism in
BDDL is used to add extra notes for those programs that will be
ignored by Miraplacid.

### 13.1 Calling legacy or external cameras

    [camera=<camera name>]
    uint8 [*] data;

We prefix the data item with the `camera` annotation where we have
loaded a block of bytes that are known to be the raw data of a file
type for which we have a camera, for example, JPEG.

So, in this particular case, here is the structure from `DggInfo` that
wraps round a JPEG image with the annotation added.

    struct OfficeArtBlipJPEG {
        OfficeArtRecordHeader rh;
        AcceptRule rh.recType == 0xF01D \|\| rh.recType == 0xF02A;
        uint8[16] rgbUid1;
        uint8[16] rgbUid2 optional
        restrictions{((parent.rh.frecVer_recInstance) & (0xFFF0) >> (4)) == 0x46B
        || ((parent.rh.frecVer_recInstance) & (0xFFF0) >> (4)) == 0x6E3};
        uint8 tag;
        [camera="jpegCamera"]
        uint8[rh.recLen - sizeof(rgbUid1) - sizeof(rgbUid2) - sizeof(tag)]
        BLIPFileData allowempty;
    }

### 13.2 Validating Text fields as integers

#### 13.2.1 BDDL

    [fieldtype=<type of field>]
    char [*] my_value;

#### 13.2.2 DVL

    my_value := RANGE(current, <x>, <y>); /* or similar rule */

Where *<type of field\>* is:

- `integer` for interpreting text such as "2344" or "-9766" as an
integer number in DVL validation phase.

- `real` for interpreting text such as "33.45" or "-322.83" as a real (floating point) number in DVL validation phase.

This tells *DVL_Checker* to build code that reads the text of the
`my_value` field and turn it into a real value.

If you don't put the `fieldtype` annotation, then because `char[*]` is
turned into an object we would be comparing against the address in
memory of the object and not its interpreted value.

### 13.3 Guiding code generator

#### 13.3.1 Linking Target Objects

    [targetObject=<fully specified path to object>]

Where *<fully specified path to object\>* could be things like:

    root.tableStream
    root.dataStream

A way of helping the BDDL to C++ converter with preparing to connect
directories to objects.

When using a `directory` in BDDL, Miraplacid works out which object
to connect it to, by looking at the address range of the location
where the target object ends up. To remove this job from the
run time stage of the generated code, we can use an annotation to the
BDDL that tells the generated code where to connect the completed
object.

For example:

BDDL:

    [targetObject="root.tablestream"]
    directory D_NAME {
    type ****
    PointerRule ******
    AcceptRule *****

#### 13.3.2 Marking fields as Tokens

    [token="<acceptRule/restriction>"]

where *<acceptRule/restriction\>* is used to read characters from
the current location until the expression fails.

This tells the BDDL to C++ convertor that the following string is
a Token (like an element name in XML or a control word in RTF).

The field will be replaced by an enumerated lookup for the camera
`e`*CameraName*`_Token` and the string will be looked up in a
dictionary from all the \...

    field == "string"

\... style `AcceptRule`s and `Restriction`s found in the BDDL for this
camera. These string compares will be replaced by an enumerator compare
in the code.

For example:

BDDL:

    WhiteSpace ws2 optional;
    [token="isletterordigit()"]
    Word name implicit;
    Attribute[*] attributes optional;

will mean `name` will not be treated as type `Word` (which contained
the string object) but instead will be treated as an enumerated
Token.

#### 13.3.3 Marking fields as Whitespace

    [whitespace="true"]

This tells the BDDL to C++ convertor that the following
characters should be whitespace. Therefore it needs only to
record a single three-state scalar value that indicates whether:

o No Whitespace Found<br />
o One or more Space or Tab Found<br />
o One or more Carriage Return or Linefeed Found

For example:

BDDL:

    [whitespace="true"]
    WhiteSpace ws2 optional;
    Word name implicit;

will mean `ws2` is stored as a single scalar instead of a vector
of characters. A single space or CRLF or nothing will be output
in the regenerated file.

13.3.4 Inserting Handwritten Code

    [insertcode_xxxx="<your code here>"]

or

    [replacetest_xxxx="<your code here>"]

tells the BDDL to C++ convertor to insert the literal code
in front of the current BDDL construct in the situation defined by
*xxxx*\.

Note: Multiline code sections between the quotes must not contain
quotes, instead use `&quot;`.

The variations are:

a\) `[insertcode_asis_onread="<your code here>"]` (implemented
25&nbsp;March&nbsp;2015).

This tells the BDDL to C++ convertor to insert the literal
code in front of the read of the current item, or in front of
an `AcceptRule` on a read pass.

b\) `[replacecode_asis_onread="<your code here>"]` (implemented
25&nbsp;March&nbsp;2015).

This tells the BDDL to C++ convertor to replace the read of the current
item, or in front of an `AcceptRule` on a read pass with the literal
code.

c\) `[insertcode_asis_onwrite="<your code here>"]`

This tells the BDDL to C++ convertor to insert the literal
code in front of the write of the current item, or at end of
writing all items if placed in front of the `AcceptRule` in the
BDDL.

d\) `[insertcode_interpreted_onread="<your code here>"]`
(implemented 25&nbsp;March&nbsp;2015)

This tells the BDDL to C++ convertor to insert the code in
front of the read of the current item, or in front of an
`AcceptRule` on a read pass. But it will run the BDDL to C++
interpretation on the inserted code which will replace
`current` with the item name or replace `current` with the
structure (class) name ID applied to an `AcceptRule`.

e\) `[replacecode_interpreted_onread="<your code here>"`
(implemented 25&nbsp;March&nbsp;2015).

This tells the BDDL to C++ convertor to replace generated code for
the read of the current item, or `AcceptRule` on a read pass with the
literal code but it will run the BDDL to C++ interpretation on the
inserted code which will replace `current` with the item name or replace `current` with the structure (class) name ID applied to an `AcceptRule`.

f\) `[insertcode_interpreted_onwrite="<your code here>"]`

This tells the BDDL to C++ convertor to insert the code in
front of the write of the current item, or at end of writing
all items if placed in front of the `AcceptRule` in the BDDL.
But it will run the BDDL to C++ interpretation on the inserted
code which will replace `current` with the item name or
replace `current` with the structure (class) name if applied
to an `AcceptRule`.

g\) `[replacetest_asis_onread="<your code here>"]`

This tells the BDDL to C++ convertor to insert the literal
code *instead of* the `AcceptRule` code on a read pass.

h\) `[replacetest_interpreted_onread="<your code here>"]`

This tells the BDDL to C++ convertor to insert the literal
code *instead of* the `AcceptRule` code on a read pass, but it
will run the BDDL to C++ interpretation on the inserted code
which will replace `current` with the structure (class) name.

For example:

BDDL:

    [insertcode_asis_onread="skipcomments();"]
    Word name ;
    [replacetest_asis_onread="name.str == &quot;STRUCT1&quot;"]
    AcceptRule name == "STRUCT1";


**NOTE**: The use of `&quot;` for double quotes as the `'\"'` escape
sequence did not work in the C\## code for some reason.


#### 13.3.5 Changing Filename

We can use the

    [fileprefix="cameraname"]

annotation in front of any structure in a file to insert *cameraname*
in front of the C++ and .h filenames for the files produced from the BDDL file.

For example, `XML_common.bdd` would normally produce `XML_common.cpp` and
`XML_common.h`, but this annotation will create *cameraname*`\_XML_common.cpp` and *cameraname*`\_XML_common.h`.

This allows common BDDL files to be used in different cameras and the
code will be regenerated in each namespace with different filenames.

## 14. Recommendations

### 14.1 Extra Annotations

It would be good to have

    [spec="MS-DOC x.y.z"]

in front of structures/dictionaries to help map BDDL to Specification.

Also, a way of helping the BDDL to C++ converter with preparing to
connect directories to objects

    [targetObject="root.tablestream"]
    directory D_NAME {
        type ****
        PointerRule ******
        AcceptRule *****
    }

This is because the Miraplacid SDK does it by finding the object
containing the dataheap dynamically from the `PointerRule` offset,
which would be very messy, a slow a mechanism to replicate, and run in the
DLL.

## COPYRIGHT

&copy; 2013 Glasswall Solutions Limited
