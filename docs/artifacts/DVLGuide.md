---
title: DVL Guide
---

<div style={{textAlign: 'center'}}>


&copy; 2017 Glasswall Solutions Ltd<br />
ALL RIGHTS RESERVED

Information contained herein is the property of Glasswall Limited and is
proprietary and confidential.

Martin O'Brien

Glasswall Solutions Ltd.

</div>

Creation Date -- 25 September 2013

Version -- 1

**Document History**

Table 1: Document Change History

|Issue Date|Issue Number|Author|Description
  |---|---|---|---
  |25 Sep 2013|1.0|Martin O'Brien|Version 1
  |08 Feb 2017|1.1|Elvin Barreto-White|Updated to use latest Glasswall template.

**Document Distribution**

Table 2: Document Distribution

|Name|Position
|---|---|
|Sam Hutton|CTO                           
                                             

**Copyright and Contact Details**

The copyright in this work is vested in Glasswall Solutions Ltd, and the
document is issued in confidence for the purpose for which it is
supplied. It must not be reproduced in whole or in part or used for
tendering or manufacturing purposes except under agreement or with the
consent in writing of Glasswall Solutions Limited and then only on
condition that this notice is included in any such reproduction. No
information as to the contents or subject matter of this document or any
part thereof arising directly or indirectly there from shall be given
orally or in writing or communicated in any manner whatsoever to any
third part being an individual firm or company or any employee thereof
without the prior consent in writing of Glasswall Solutions Limited.

&copy; 2016 Glasswall Solutions Limited

## 1. Overview

This guide is designed to help you write better Data Validation Language (DVL) code and produce DVL code that is consistent in style and therefore easier to maintain. It is also a reference for the syntax of DVL.

### 1.1 Syntax

The general syntax of a rule is

&nbsp;&nbsp;&nbsp;&nbsp;`validation` *struct_name* `{`<br />
&nbsp;&nbsp;&nbsp;&nbsp;*field_name* `:=` *condition_expression*`;`<br />
&nbsp;&nbsp;&nbsp;&nbsp;...<br />
&nbsp;&nbsp;&nbsp;&nbsp;`}`<br />

-   *field_name* is the name of the field being validated.
-   *:=* indicates what follows is the expression to be evaluated.
-   *condition_expression* is an expression that when it evaluates to true means the field has valid content. It is based on the Miraplacid [BinPath Expression Language](http://www.binarydom.com/sdk/doc/binpath.shtml), with some additions, detailed below.

Note that in previous versions of this guide this form of rule was permitted
 
    A := 0;

or

    A := 0 || 1 || 2;

Please **do not** use these forms any more.

Instead, fully qualify them

    A := current == 0;

or

    A := current==0 || current==1 || current==2;

*Note well*: Always remember the precedence of rules! The first rule for the use of parentheses is simply "If in doubt, parenthesize," but do learn enough about expressions so that you are in do doubt about `a==b || c==d`. Overuse of parentheses, as in `(a==b) || (c==d)`, decreases readability.

### 1.2 Values

Values can be expressed in decimal and hexadecimal format using the standard C,
C++, etc., formats. Plain, unadorned decimal digits for decimal:

    2345, 255, 78

and hexadecimal digits prefixed with `0x`:

    0x929, 0xFF, 0x4E

Uppercase `A-F` and lowercase `a-f` can be used interchangeably for hexadecimal values.

### 1.3 Validation

DVL is designed to validate the content of the fields. It does not
concern itself with issues with which an application such as Office Word is
concerned.

DVL is not concerned with validation that has been dealt with by the
`restrictions` expression rule or the expression contained in the `AcceptRule` pseudo-item in its related BDDL file.

## 2 Work Item Template Wording

// TODO This needs updating to current practice

When creating a Work Item, ensure you create it as a task and use this
format for the Title:

&nbsp;&nbsp;&nbsp;&nbsp;Create DVL file for *structure-name*

This will make searches simpler.

As with the BDDL Work Items, populate the fields so:

&nbsp;&nbsp;&nbsp;&nbsp;Assigned To: *Your name*<br />
&nbsp;&nbsp;&nbsp;&nbsp;Activity: Development<br />
&nbsp;&nbsp;&nbsp;&nbsp;Area: Glasswall\BDDL Development\Office 1997-2007\MS-DOC<br />
&nbsp;&nbsp;&nbsp;&nbsp;Iteration: 13*nn* \[where *nn* is the current iteration number\]<br />
&nbsp;&nbsp;&nbsp;&nbsp;State: Active<br />
&nbsp;&nbsp;&nbsp;&nbsp;Reason: New

Remember that the description field can be used to make more detailed
comments about the structure you are developing. For example, you might
want to mention some other structures that are included in your main
structure. You can also attach files to the Work Item. Anything that
helps other developers, and you, is worth adding to the Work Item.

## 3. Substructures

If structure *A* contains structure *B*, then put *B* into a separate DVL
file, but ensure you update the "Validation Files Log" file
accordingly by completing the 'Substructure' column.

## 4. Syntax

### 4.1 General Notes

-   If there is no MUST rule, use the `NO_REQUIREMENT` flag.
-   Leave `TBD` as a flag to indicate further development is required (for example, if the MUST rule is too complex).
-   There is no need to append the structure name before each member:

        Pms {
            wpms := NO_REQUIREMENT; # valid
            ...
        }

Also, the DVL checker raises an error if a dot is used before the `:=`.

### 4.2 Comments

Comments can be inserted into DVL with a hash `#`. The DVL parser will discard the # symbol and ignore everythign following it up to the end of the line.

    # This is a comment

## 5. Functions

Function names do not have an underscore between the words, and are in uppercase.

Functions also can be used as arguments to other functions, for example:

    ipfnpmf := ISIN(current, 0xFF, RANGE(current, 0x00, 0x05));

Do not put a space between the function name and the opening paranthesis.

### 5.1 Office Word Functions

#### 5.1.1 VERSION(word-version)

**Return Type**: Boolean

**Description**: Return true if the current document is the version of Office Word indicated by *word-version*.
*word-version* can be one of:

- Word1997
- Word2000
- Word2002
- Word2003
- Word2007

**Example**: You want to test if the current document is version 2000:

    VERSION(Word2000)

#### 5.1.2 GETCPCHAR(CP)

**Return Type**: Integer (width can vary)

**Description**: Retrieve the character specified by the character position `CP` and return it.

**Example**:

The requirement for field `aCP` in `PlcfandRef` as specified in \[MS-DOC\] §2.8.7 is:

&nbsp;&nbsp;&nbsp;&nbsp;"*Each position in the main document specified by one of these CPs MUST
be character 0x05\...The last CP MUST be ignored.*"

This would be specified in DVL as:

    aCP[0..count(aCP)-2] := GETCPCHAR(current) == 5;

### 5.2 General Functions

#### 5.2.1 RANGE (field, min, max)

**Return Type**: Boolean

**Description**: If the content of `field` has any of the values in the
range `min` to `max` inclusive, the function returns true, otherwise it
returns false. For example, the specification for `Pmfs.ipfnpmf` says:

&nbsp;&nbsp;&nbsp;&nbsp;"*An unsigned integer value that specifies the type of data source for
the mail merge. This MUST be one of the following values: 0xFF, 0x00,
0x01, 0x02, 0x03, 0x04, and 0x05.*"

In DVL this can be represented as:

    ipfnpmf := 0xFF || RANGE(current, 0x00, 0x05);

or

    ipfnpmf := ISIN(current, RANGE(current, 0x00, 0x05), 0xFF);

#### 5.2.2 ISIN (field, val1, val2,...)

**Return Type**: Boolean

**Description**: If the content of `field` has any of the values listed,
the function returns true, otherwise it returns false. For example, the
specification for `Wpms.wpmsType` says:

&nbsp;&nbsp;&nbsp;&nbsp;"*An unsigned integer that specifies the document type of the mail
merge. This value MUST be one of the following: 0x0, 0x1, 0x2, 0x4, and 0x8.*"

In DVL this can be represented as:

    wpmsType := ISIN(current, 0x0, 0x1, 0x2, 0x4, 0x8);

or

    wpmsType := ISIN((current, 0, 1, 2, 4, 8);

or

    wpmsType := ISIN((current, RANGE (current, 0, 2) 4, 8);

#### 5.2.3 ISIN_STR(field, val1, val2, ...)

**Return Type**: Boolean

**Description**: If the content of string `field` has any of the values
listed, the function returns true, otherwise it returns false. `val1`, `val2`, etc. must be strings.

For example:

    xml_tag1 := ISIN_STR(current, "ALPHA", "BETA", "GAMMA");

#### 5.2.4 REGEX(field, regex)

**Return Type**: Boolean

**Description**: If the regular expression in `regex` matches the content of
string `field` the function returns TRUE, otherwise it returns FALSE.

**For example**:

Search for a line comprised only of a decimal digit followed by one or more spaces:

    xml_tag2 := REGEX(current, "^\d\w+$");

#### 5.2.5 UNIQUE  (// TODO: place argument list here; also the example is not clear)

**Return Type**: Boolean

**Description**: Determine whether the value of a field is unique
within all the structures specified.

**Example**: Field `ltag` MUST be unique for all `ATNBE`s inside a given
`SttbfAtnBkmk`. This will be written like this:

    lTag := UNIQUE(ATNBE);

#### 5.2.6 EXISTS (Not Yet Implemented as of version 1.3) (// TODO Clarify if this is implemented)

**Return Type**: Boolean

**Description**: Determine whether the named node exists in the
Binary DOM tree. It returns TRUE if it does exist, otherwise it returns
FALSE.

**Example**:

    hsttbRfs := current==0 ? !EXISTS(root.tableStream.Pms.sttbfRfs)
        : EXISTS(root.tableStream.Pms.sttbfRfs)
        ;

## 6. Flags

Flag names have an underscore between the words.

### 6.1 MUST_IGNORE

Specify the value must be ignored.

**Example 1**:

    validation ... {
        ...
        unused1 := MUST_IGNORE;
        ...
    }

`MUST_IGNORE` is like a switch; it allows some conditions to be ignored under certain circumstances.

**Example 2**:

    var1 := condition1 && MUST_IGNORE;

Will apply the condition test. But we may optionally suppress the
report of an issue at the request of the client if these generate too
many false positives. In addition, if the condition is a test against
a fixed value (e.g `var1 := current == 5`) then we will 'Remedy' the
file by making that change.

**Example 3**:

    var2 := condition2 ? MUST_IGNORE : condition3;

In this case, we simply apply `condition3` to `var2` if `condition2`
is false, `MUST_IGNORE` has no effect here.

### 6.2 IS_VALID
--------

Specify the value is valid. It is equivalent to `NO_REQUIREMENT`.

### 6.3 EXISTS

Specifies the field exists. For example, the specification for the
`tbcd` field in the `TBC` structure says:

&nbsp;&nbsp;&nbsp;&nbsp;"*A structure of type TBCData, as specified in \[MS-OSHARED\] that
contains toolbar control data. This MUST exist if tbch.tct is not
equal to 0x16. This MUST exist if tbch.tct is equal to 0x016.*"

 In DVL this can be represented as:

    tbcd := tbch.tct != 0x16 ? EXISTS : NOT_EXISTS;

### 6.4 NOT_EXISTS

Specify the value does not exist.

See the example from `EXISTS`.

### 6.5 TBD

Specify the rule for the member has not been defined yet. If
there is no MUST rule for the member, replace `TBD` with `NO_REQUIREMENT`,
otherwise replace with the appropriate rule. Fields that have the `TBD`
flag will report an error.

### 6.6 NO_REQUIREMENT

Specifies that there is no MUST rule that needs to be tested. Safe to
use with built in types (`uint8`, `int8`, etc.) and user defined types
(`Wpms`, `Pmfs`, etc.).

## 7. Content Management Functions

### 7.1 META(field, countofbytestoclear, fillChar)
---------------------------------------------

**Usage**

    field := META(current, 10, 0x00);

Specify the marked object contains Metadata which can be blanked.

Should be used only as specified on a line of its own.

**Example**:

    /* fcGrpXstAtnOwners specifies an offset in the Table Stream. An array
    of XSTs begins at this offset.

    This array contains the names of authors of comments in the document.
    */

    validation GrpXstAtnOwners {
        Xst[0 .. count(Xst)] := META(current, (current.cch * 2), 0x00);
    }

### 7.2 HYPERLINK(field, countofbytestoclear, fillChar)

// TODO This seems incorrect; needs clarification and a proper example

**Usage**

    field := META(current, 10, 0x00);

Specify the marked object contains Metadata which can be blanked.

Should be used only as specified on a line of its own.

**Example**:

    /* fcGrpXstAtnOwners specifies an offset in the Table Stream. An
    array of XSTs begins at this offset. This array contains the names of
    authors of comments in the document. */

    validation GrpXstAtnOwners {
        Xst\[0 .. count(Xst)\] := META(current, (current.cch * 2), 0x00);
    }

### 7.3 REMEDY(field, countofbytestoclear, fillChar)

**Usage**:

    field := REMEDY(current, 10, 0x00);

Specify the marked object contains a datum which can be blanked.

Should be used only as specified on a line of its own.

This is used like `HYPERLINK` and `META` but applied to padding areas at the end of
structures or strings to clear data that is suggested to be undefined and ignorable.

### 7.4 EMBEDDED(field, countofbytestoclear, fillChar)

**Usage**:

    field := EMBEDDED(current, 10, 0x00);

Specify the marked object contains embedded data which can be
blanked. Should be used only as specified on a line of its own.

Used like `HYPERLINK` and `META` but applied to padding areas at the end of
structures or strings to clear data that is suggested to be undefined
and ignorable.

### 7.5 MACRO(field, countof bytestoclear, fillChar)

**Usage**

    field := MACRO(current, 10, 0x00);

Specify the marked object contains macro data which can be
blanked. Should be used only as specified on a line of its own.

Used like all other Mark and Convert Functions but applied to data
structures, fields, records that either contain Macro content, or
flags/values that imply Macros are present, which may trigger a
Product to start looking for actual Macros that we have removed and
warning user of their presence erroneously.

### 7.6 REJECTED(field, contenttype) 

**Usage**

    field := REJECTED(current, MC_EMBEDDEDFILE);

Specify the marked object contains data which can be removed
from the output file. Should be used only as specified on a line of
its own.

Used like all other Mark and Convert Functions but applied to
data structures, fields, records that contain manageable
content. It works by setting `ucpObjectProcessStatus` in the
current structure to `eUcpObjectStatus_CheckedAndRejected`; therefore,
when the file is regenerated, this object and any of its children
will NOT be written to the output file.

This is intended to be used with text based file formats such as XML or
RTF so that we can cleanly remove "block start - data - block end"
entities.

The type of the content is marked using the `contenttype` parameter which
MUST be one of the following:

- MC_EMBEDDED_FILE
- MC_METADATA
- MC_HYPERLINK
- MC_FORMDATA
- MC_MACRO


**Important Note**

Although you attach this rule to a field, that field must be a
structure object and not a scalar object; this is because we need to set the
`ucpObjectProcessStatus` field in the base of that object.

## 8. CONDITIONALS

Conditionals can be created with the following syntax:

&nbsp;&nbsp;&nbsp;&nbsp;*member* := *condition* ? *expression1* : *expression2*;

This is equivalent to:

&nbsp;&nbsp;&nbsp;&nbsp;if (*condition*)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*member* := *expression1*;<br />
&nbsp;&nbsp;&nbsp;&nbsp;else<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*member* := *expression2*;

Note that `if ... else ...` is not available in DVL and is used for illustration only.

**For example:**

    sttbfRfs := rfs.hsttbRfs == 0 ? MUST_IGNORE : IS_VALID;

In this example, `Pms.sttbfRfs` is ignored when `parent.rfs.hsttbRfs` is
equal to 0, otherwise it is valid.

Conditionals can be nested to create more complex rules. The following
format should be used stack them:

&nbsp;&nbsp;&nbsp;&nbsp;*field1* := *condition1* ? *expression1*<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: *condition2* ? *expression2*<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;

Which is equivalent to:

&nbsp;&nbsp;&nbsp;&nbsp;if (*condition1*)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*field* := *expression1*;<br />
&nbsp;&nbsp;&nbsp;&nbsp;else if (*condition2*)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;field := *expression2*;

Note that `if ... else ...` is not available in DVL and is used for illustration only.

See [Section 15](#15-ternaries) for further explanation of how to indent Ternary Operators.

## 9. DEFINE

### 9.1 Plain DEFINE

Some expressions will be repeated, and it makes sense to define them
once and use that definition. The syntax is

&nbsp;&nbsp;&nbsp;&nbsp;DEFINE *name* = *expression*;

**For example**:

    DEFINE ktCid = 0;
    DEFINE ktChar = 1;
    DEFINE ktMask = 3;

Then later on:

    validation Kme {
        ...
        param := ISIN(kt, ktCid, ktChar, ktMask);
        ...
    }

This is useful only if you're likely to need `ktCid`, `ktChar`, or `ktMask`
more than once in the same DVL file.

### 9.2 Macro DEFINE

DVL allows "templates" to be created using place holders.

The format is:

&nbsp;&nbsp;&nbsp;&nbsp;DEFINE *functionname*(%1, %2 ....) = {*BDDL_expression*};

For example:

// I inserted underscores in the macro names to make it readable; validate this is OK

    DEFINE CALC_NUM_PLCS(%1, %2) = {(%1 - 4) / (4 + %2)};

Which can be used like this:

    CALC_NUM_PLCS(field, 8);

Which will be converted to:

    {(field - 4) / (4 + 8)};

This is a more realistic example:

    CALC_NUM_PLCS(root.wordDocStream.fib.fibRgFcLcbBlob.fibRgFcLcb97.lcbPlcfBtePapx, 2);

The value returned will be the number of data elements in that PLC
(assuming the size of a single data element in this example is 2).

## 10. Array Slicing

// TODO Array slicing here does not conform to the half-open ranges in other languages such as the end() function in C++'s containers, and Python's range() function; not sure if it's worth mentioning. It does conform to Perl's range operator.

In DVL it is possible to reference several elements of an array
simultaneously using the '..' (double-dot) notation. For example

    aCP[0 .. 4]

is the same as

    aCP[0]
    aCP[1]
    aCP[2]
    aCP[3]
    aCP[4]

Array slicing makes sense when comparing elements of two arrays, or the
same array, simultaneously, for example:

    arr[0 .. max_index-1] := current < arr[1 .. max_index];

This will test that

    arr[0] < arr[1];
    arr[1] < arr[2];
    ...
    arr[max_index-1] < arr[max_index];

In other words, it tests that the array contents are in ascending order.

The same validation can be achieved by this expression:

    arr := arr[0..max_index-1] < arr[1..max_index];

As another example, if you want to check each element is greater than 0:

    arr[0 .. max_index] := current > 0;

The important thing to remember is that for an expression, each array
slice generates a loop, so, consider this rather contrived example:

    arr[0..max_index-2] := arr[1..max_index-1] < arr[2..max_index];

Will generate

    arr[0] := arr[1] < arr[2];
    arr[1] := arr[2] < arr[3];
    ...
    arr[max_index-2] := arr[max_index-1] < arr[max_index];

## 11. Special Tags

### 11.1 %NOTE%

In order to facilitate the parsing of any issues that may need further
consideration, prefix any specification with `%NOTE%` as the first part of
a comment.

When using the `%NOTE%` option, leave the field the note refers to as `TBD`
and DO NOT change it to `NO_REQUIREMENT` which is incorrect in that
circumstance.

**Example**:

In *Ttmbd.dvl* the field `fcSubset` can be any value, but the specification
says, "*This value MUST NOT exceed the total number of fonts used in the
document.*" This may need to be validated later, so this is how it is
specified in the DVL:

    # %NOTE% This value MUST NOT exceed the total number of
    # fonts used in the document.
    fcSubset := TBD;

## 12. BinPath Expression Language

The facilities of Miraplacid's [BinPath Expression Language](http://www.binarydom.com/sdk/doc/binpath.shtml) are
available to use in DVL. For example, if you require a count of elements
in an array, you can use the  `count` function:

    # validate that aCP is in ascending order
    # NOTE: count is number of elements, so index ranges from
    # 0 to count-1.

    aCP[0..count(aCP)-1] := aCP[0..count(aCP)-2] < aCP[1..count(aCP)-1];

Refer to the *Binary DOM Library* document on the Wiki for a list of
all the functions and details of how to use the [BinPath Expression Language](http://www.binarydom.com/sdk/doc/binpath.shtml).

## 13. Including Files

In order to group commonly used `DEFINE`s you can use the `include`
construct to tell the DVL parser to search for matches to defines in the
named files. The syntax is:

&nbsp;&nbsp;&nbsp;&nbsp;include "*filepath*"

**Example**:

    include "office_dvl/common/PlcDefines.dvl"

// TODO Provide valid links to items referenced below

This assumes a softlink has been created. See the document [How to Create Soft Link for Office BDDL Include Files](howto_softlink_to_office_bddl_includes_dir), but change the name of the soft link you create
to `office_dvl` and the target directory to *your_workspace_directory_
path*`\glasswall.classic\data.definitions.and.rules\MSOffice\validation\`.

## 14. Tabs

Tabs do not appear the same when printed on different output devices, or
pasted into a word-processor document, or even just viewed in someone
else's differently tab spaced editor. Do not use tab characters in
DVL files.

Most editors allow the insertion of spaces when the Tab key is pressed
and you should set your editor to do this. Four space indentation should
be used, so set the editor to insert four spaces.

## 15. Ternaries

If you are creating long expressions using the ternary operator, use
this style of indentation:

    # An example of cascaded ternary operator, using field in Selsf
    blktblSel := (L==0 && N==0) ? MUST_IGNORE
        : (L==0 && N==1) ? NO_REQUIREMENT
        : (L==1 && N==0) ? NO_REQUIREMENT
        : (L==1 && N==1) ? NO_REQUIREMENT
    ;

Note how the terminating semicolon is lined up separately to make it
clear the statement has finished.

If you have a final result (which has no preceding question mark) indent
it so that it too lines up in the results column.

    # An example of cascaded ternary operator, using field in Selsf
    fInsEnd := current == 1 ? P == 1
        : I == 1 ? current == MUST_IGNORE
        : 0
        ;

You can use the tabular layout even if you have only a single ternary:

// TODO This example looks like it's lifted directly from Perl: provide better one

    A := (current==0) ? $customer{name}
        : 'Sir or Madam'
        ;

## 16. Accessing Enumeration Members

When an item is defined as an enumeration in BDD, the matching DVL must
indicate to which type the rule is being applied by adding a means of
selecting the type using a notation that provides the type.

// TODO The '$' below looks out of place. Confirm it's correct.

**Example**:

    items.child$type

**Example**:

BDD

    struct Cid {
        (CidAllocated | CidMacro | CidFci | uint32) cid;
    }

    struct TBDelta {
        ...
        Cid cid;
        ...
    }

DVL

    validation TBDelta {
        ...
        cid := ISIN(cid.cid\$uint32, 1, 3);
        ...
        cid := sizeof(cid.cid$CidAllocated) < 200; /* example for demo only, not part of the real DVL in this case */
        ...
    }

This means that the rule is applied to the `cid.cid` field and treated as
the `uint32` type. It is the responsibly of the writer to ensure that the
rule is applied only in a context where the field is of the type being
tested.

## 17. Using Batch Files

Using batch files in
*tfs*\Features\OFFICE\\*branch*\glasswall.classic\data.definitions.and.rules\BDD_DVL_to_code_scripts

There are two fundamental batch files in this support directory:

&nbsp;&nbsp;&nbsp;&nbsp;generate_*filetype*\_cpp_from_bdd.bat

and

&nbsp;&nbsp;&nbsp;&nbsp;generate_*filetype*\_cpp_from_dvl.bat

1.  generate_*filetype*\_cpp_from_bdd.bat - These batch files use the
    *tfs*\inhouse.tools\GWPerlScripts\BDD_to_Cpp_Convertor\BDD_To_Cpp.pl
    Perl script to read the *.BDD files and create the matching *.cpp
    and *.h files for each one, plus *_if.cpp and *_if.h files and support files for the root BDD.

2.  generate_*filetype*\_cpp_from_dvl.bat - These batch files use 
    *tfs*\inhouse.tools\GWBinaryAnalysisTools\UCP_Struct_Rule_Converters\dvl_tools\dvl_checker\\Releases\Latest_Version\dvl_checker.exe to read the *.BDD files and *.DVL files and create the validation *.cpp file containing all of the validation methods for each structure in the BDD files.

**Note well**: These batch files default to using *dvl_checker.exe* defined in environment variable `PATH_TO_DVLCHECKER` which they set to the one mentioned
in this paragraph if `PATH_TO_DVLCHECKER` is unset. 


// TODO The following sentence does not make sense, please clarify.

(For testing *use_ucp_dvlchecker.bat* pre-sets `PATH_TO_DVLCHECKER` to a different
dvl_checker version so you can call that before running the DVL
processing batch file on which you are working).

## 18. REFERENCES

DVL Guide [this guide]

**Glasswall** > **BDDL Development** > **Validation** > **DVL Guide**

Validation Files Log

**Glasswall** >** BDDL Development** > **Validation** > **Validation Files Log**

Binary DOM Library

**Glasswall** > **BDDL Development**

## APPENDIX 1. 'HOW TO' and Examples

**Example 1** - What information in a specification to place in a DVL Rule

**The specification**

2.9.343 VertMergeOperand

    cb (1 byte): An integer value that specifies the byte count of the
    remainder of this structure. This value MUST be 2.
    
    itc (1 byte): An integer that specifies the index of a cell in the
    table row. The first cell has an index of zero. All cells in the row
    are counted, even if they are vertically merged with cells above or
    below them. This value MUST be a valid index of a cell in the table
    row.

    vertMergeFlags (1 byte): A value from the VerticalMergeFlag
    enumeration that specifies whether this cell is vertically merged
    with the cells above or below it.

**The DVL**

    validation VertMergeOperand {
        cb := 2;
        # %NOTE% itc An integer that specifies the index of a cell in
        # the table row.
        itc := NO_REQUIREMENT;
        vertMergeFlags := ISIN(current, 0, 1, 3);
    }

**Explanation**:

It is important to note validation statements in the DVL even if you
cannot see how they might be implemented.

**Example 2** - Avoiding out of bounds on arrays

This rule suffers from a problem if the `my_array_name` is zero in quantity

    rulename := my_array_name[count(my_array_name)-1] != 0;

Please ensure that you prefix the test with a test for `count(my_array_name) > 0` before trying to do the test.

This version checks there is at least one item in the array before
trying to find the last one.

Otherwise simply return true regardless.

    rulename := count(my_array_name) > 0 ? my_array_name[count(my_array_name)-1] != 0
    : 1
    ;

**Example 3** - Testing presence of scalars

If an item is a single byte field, the `EXISTS` and `NOT_EXISTS` tests does not
apply because scalar fields are inserted as permanent members of classes; therefore, the DVL test on it below is of no use.

**For example**:

This structure has a single-byte padding field

    struct LPUpxChpx {
        AcceptRule (parent.parent.parent.stdf.stdfBase.cupx_istdNext & 0x000F) > 0;
        uint16 cbUpx;
        UpxChpx CHPX optional;
        uint8 padding optional restrictions {parent.cbUpx % 2 != 0};
    }

So an "existence test" will not work and is redundant.

**For example**:

    validation LPUpxChpx {
        cbUpx := NO_REQUIREMENT;
        CHPX := NO_REQUIREMENT;

        padding := cbUpx % 2 != 0 ? EXISTS : NOT_EXISTS;  # This Test made no sense and was removed.

    }
