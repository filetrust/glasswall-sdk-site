---
title: 2.1.3.3.1.1 Overview
sidebar_label: 2.1.3.3.1.1 Overview
---

## Overview

The Glasswall PDF software camera ensures that a PDF document conforms to specified PDF syntax, according to the PDF 
versions (1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7) and that the use of PDF syntax is semantically \"safe\" in view of a 
PDF file being opened by a conforming PDF reader/writer.

The PDF camera implements the Glasswall core (ANALYSE, MANAGE and PROTECT) with the following features:

-   Syntax and semantic checks according to reasonable limits determined
    from analysing the PDF specification and a large sample (i.e. the
    cyber herd) of PDF files to be found available today on the World
    Wide Web.

-   Detect and correct specific PDF file errors according to an internal
    configuration of possible PDF file corrections. For example, missing
    whitespace can be restored (e.g. at the end of a PDF stream token),
    or incorrect offsets within a cross-reference table can be
    recalculated if these are detected.

-   A configurable file cleaning mechanism that allows client software
    to request the removal of specific PDF file content. For example,
    Java-script actions or the PDF document information table within a
    PDF file.

-   An innovative tokenisation mechanism to create a software map of PDF
    file content which lends itself to software
    checking/correcting/cleaning and regeneration of a file from PDF
    basic object tokens.

-   A file buffer regeneration function that assembles PDF software
    tokens into a single standard header and a body of PDF objects
    followed by a single cross-reference table and a single trailer.

-   A process cycle model (4 cycles) which activates specific camera
    functionality according to the process cycle.

    -   **CYCLE 0** -- PRE-FILTER: application of a software \"stencil\" to
        include all PDF objects found in the token tree walk starting at
        the beginning of the trailer dictionary. Any PDF objects which
        are not within the token tree walk will be excluded from the
        file buffer. This cycle also makes any corrections to the 
        contents of pdf object dictionaries and regenerates a file memory
        buffer containing a single header, all PDF objects, a single
        cross-reference section and a single trailer.

    -   **CYCLE 1** -- CLEANING: apply Glasswall MANAGE policies (ALLOW, SANITIZE,
        DISALLOW) to file content. Apply semantic corrections to tokens
        including PDF content streams which are decompressed on this cycle.

    -   **CYCLE 2** -- POST-FILTER: application of a software stencil to include
        all PDF objects found in the token tree walk starting at the
        beginning of the trailer dictionary. This cycle ensures that any
        un-wanted content from the cleaning cycle is not included in the
        regenerated file buffer.

    -   **CYCLE 3** -- PROTECT: apply Glasswall PROTECT policies to file
        content. Ensures that font faces may be opened and are formed
        correctly. Perform the various semantic walks to analyse the
        document and ensure that it is formed correctly (e.g. a single
        Catalog dictionary with various name and number trees stemming from
        the catalog).

## Design and Architecture
The complete PDF architecture is covered in the following section(s)
- [PDF Architecture](2_1_3_3_1_2-pdf-camera-architecture.md)
- [PDF Camera Data Elements](2_1_3_3_1_3-data_elements_of_the_pdf_camera.md)
