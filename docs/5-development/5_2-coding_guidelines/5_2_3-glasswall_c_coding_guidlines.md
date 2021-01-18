---
title: 5.2.3 Glasswall C Coding Guidelines
sidebar_label: 5.2.3 Glasswall C Coding Guidelines
---

## 1. THE C PROGRAMMING LANGUAGE
Dennis Ritchie developed the original version of the programming language C at AT&T Bell Laboratories in the early 1970s.

The American National Standards Institute, or ANSI, standardises computer programming languages
in the United States. X3J11 is the name of the ANSI-authorised committee that developed the standard for C, starting in 1983.

The International Standards Organisation, or ISO, C has a similar responsibility in the
international arena. ISO formed the technical committee JTC1/SC22/WG14 to review and augment
the work of X3J11.

By 1992, ISO had adopted a standard for C that was essentially identical to X3.159. It
is called ISO 9899:1990. The C standards differ only in format and in the numbering of sections. The wording differs in a few small places but makes no substantive difference to the language definition.

These Guidelines pertain to C, as defined by ISO 9899:1990.


## 2. INTRODUCTION

### 2.1 Objective

The objective of C Coding Guidelines is to ensure all C programs
produced by, or on behalf of, Glasswall Solutions Ltd, have a clear and
consistent coding style. It is also designed to help write portable C.

Portability is about minimising the cost of transferring functionality
from one system to another. This can be achieved by keeping the codebase
within the feature set guaranteed to be available on all implementations
that conform to a particular, widely-implemented, standard, in this
case, ISO/IEC 9899:1990.

Writing for portability is about refusing to increase the *unnecessary*
costs of porting the code.

Therefore, these Guidelines mandate where possible, best practices for
writing portable C code, pointing out pitfalls, common misconceptions,
and errors and suggests remedies. The Guidelines are not confined to
that though. They are also comprised of various aspects of the art of
coding, including layout, and name selection. The Guidelines are
designed to produce code that is clear, robust, efficient, maintainable,
and concise.

### 2.2 Applicability

This Standard shall be applied to all C code written by, or on behalf
of, Glasswall Solutions Ltd, except where:

-   The customer requires, and Glasswall Solutions Ltd accepts, the
    use of a different procedure, or

-   The project can demonstrate, and Glasswall Solutions Ltd 
    accepts, that these Coding Guidelines are inappropriate for the
    project and that acceptable alternative Guidelines are available.

### 2.3 Nomenclature

Lucida Console is used for any source code related information. This is
to distinguish it from normal text, and to obviate problems in other
fonts for reading names such as

    lInfoFlag1

which is actually

    lInfoFlag1

(lowercase L and uppercase i look the some in quite a few fonts).
Courier would have served just as well:

    lInfoFlag1

Depending on context, the word *bracket* is used to indicate any of the
paired delimiters `()`, `{}`, `\[\]`.

Code examples are generally shown in a box with a grey background, using
Lucinda Console font. Sometimes short examples are included in the text
in a monospaced font.

## 3. REFERENCED DOCUMENTS

1. *ISO/IEC 9899:1990 Programming languages - C*<br />
This Standard was amended and corrected by ISO/IEC 9899/COR1:1994,
ISO/IEC 9899/AMD1:1995, and ISO/IEC 9899/ COR2:1996.

2. *The C Programming Language*<br />
2nd Edition. B.W. Kernighan and D.M. Ritchie. Prentice Hall, 1988

3. *Software Engineering*<br />
2nd Edition. lan Sommerville, 1985

4. *Perl Best Practices*<br />
Damian Conway. O'Reilly, 2005<br />
Many of the best practices in this book are pertinent to other programming languages.

5. *The Standard C Library*<br />
P.J. Plauger, Prentice Hall, 1992<br />
This book exlains how the library was *meant* to be used and how it
*can* be used, and how to implement it, providing approximately 9,000
lines of tested working code that is highly portable and exemplary.

6. *C Programming FAQs: Frequently Asked Questions*<br />
Steve Summit, Addison Wesley, 1996<br />
This book addresses over 400 questions providing accurate, insightful,
explanations and clarification of all aspects of C, with numerous code
examples.

7. *MISRA-C:2004: Guidelines for the use of the C language in critical systems*<br />
MIRA, 2004<br />
Although designed for safety critical systems, there are many guidelines
pertinent to non-safety critical systems.

## 4. C PROGRAM STRUCTURE

A C program is the equivalent of a program task as defined in most
Software Structural Design Specifications (SDSs). A specification for an
SDS should be drawn-up for Glasswall Solutions Ltd (unless one exists).

A C program consists of a set of external objects, which are either
variables or functions.

A C program may reside in one or more source files, and header files.
Source files may be compiled separately and loaded together, along with
previously compiled functions from libraries.

## 5. <a name="5"></a> CODE HEADERS

This section defines how the header information shall be provided for in
C programs.

### 5.1 Element Header

In C terminology, elements are header files or source files.

#### 5.1.1 Source File Element Header

Guideline: Prefix each source file with a template header.

The following information shall be provided as a minimum in the source
file header:

-   Copyright statement<br />
    *Copyright information to protect the business from infringement*

-   File name<br />
    *The source file name, fully qualified if deemed necessary*

-   Revision<br />
    *The revision of the file as determined by a version control system*

-   Author<br />
    *The name or ID of the person who created the file.*

-   Date<br />
    *The date the file was last changed, in ISO 8601 if possible (e.g.
    YYYYMMDD HH:MM), or any other unambiguous format (e.g., 24-May-2012,
    May 24, 2012). Formats such as 04/05/2012 shall not be used due to
    the ambiguity (4 May or 5 April?).*

-   Element interface<br />
    *This describes the objects exported by the file, or imported into
    it.*

-   Description<br />
    *A description of the what the file does.*

A conforming format is shown below. It assumes no tool support. But if a
tool can insert relevant data, then it should do so; however, if use of
such a tool means the format below cannot be adhered to, these
Guidelines permit a format as close as possible to that below.

    /*
    ************************************************************************
    ************************************************************************
    COPYRIGHT GLASSWALL SOLUTIONS LIMITED 2012
    FILE NAME: initialise.c
    REVISION: 1.9
    AUTHOR: GPerkins
    DATE: 2011-10-02 09:23
           INTERFACE:
               FUNCTIONS: set_msg_out
                          syntax_find
                SCALARS: status
                         bufsize
                         arr
        DESCRIPTION
        Performs system-wide initialisation following system load. The
        scheduler must be inactive before syntax_find is invoked.
    ------------------------------------------------------------------------
    */

#### 5.1.2 Header File Element Header

Guideline: Prefix each header file with a template header.

The following information shall be provided as commentary in the source
file header:

-   Copyright statement<br />
    *Copyright information to protect the business from infringement*

-   File name<br />
    *The source file name, fully qualified if deemed necessary*

-   Revision<br />
    *The revision of the file as determined by a version control system*

-   Author<br />
    *The name or ID of the person who created the file.*

-   Date<br />
    *The date the file was last changed, in ISO 8601 if possible (e.g.
    YYYYMMDD HH:MM), or any other unambiguous format (e.g., 24-May-2012,
    May 24, 2012). Formats such as 04/05/2012 shall not be used due to
    the ambiguity (4 May or 5 April?).*

-   Element interface<br />
    *This describes the objects exported by the file, or imported into
    it.*

-   Description<br />
*A description of the what the file does.*

A conforming format is shown below. It assumes no tool support. But if a
tool can insert relevant data, then it should do so; however, if use of
such a tool means the format below cannot be adhered to, these
Guidelines permit a format as close as possible to that below.

    /*
    ************************************************************************
    ************************************************************************
    COPYRIGHT GLASSWALL SOLUTIONS LIMITED 2012
    litdef.h
            INTERFACE:
                FUNCTIONS: set_msg_out
                           syntax_find
                SCALARS: status
                         bufsize
                         arr
            DESCRIPTION
            Macro definitions for global use.
    ------------------------------------------------------------------------
    */


### 5.2 Unit Header

Guideline: Prefix each unit with a template header.

Units, in C terminology, are functions.

A unit header shall be provided for each C function. The unit name,
description, and parameters shall be included in the header. `RETURNS` and
`EXTERNAL VARIABLES CHANGED` need to be present only if relevant to that
unit.

A conforming format is shown below. It assumes no tool support. But if a
tool can insert relevant data, then it should do so; however, if use of
such a tool means the format below cannot be adhered to, these
Guidelines permit a format as close as possible to that below.

    /*
    ************************************************************************
    ************************************************************************
    FUNCTION: set_msg_out

    DESCRIPTION: Places a message in a buffer. The message can have several meanings:
                    nop -- no message
                    reject -- message received is rejected
                    msg_par_err -- message parity error
                    abort -- fatal error, abort comms session

    PARAMETERS: msg -- the response we are placing in the output buffer

    RETURNS: MSG_OVERFLOW indicating buffer overflow, or SUCCESS
    indicating successful execution.
    ------------------------------------------------------------------------
    */
    Status set_msg_out(unsigned char *msg)
    {
        . . .
    } /* set_msg_out */


## 6 CODE LAYOUT

### 6.1 Module Layout

Guideline: Where present, sections of code should be laid out in the
following order, prefixed by the comment shown.

    /* includes */
One or more \#include directives.

    /* defines */
One or more \#define directives.

    /* typedefs */
One or more typedef statements, one per line.

    /* globals */
One or more C declarations, one per line; intended to be visible outside
the module.

    /* forward declarations */
One or more ANSI C function prototypes, one per line; must apply only to
local functions (others should be in a header file).

### 6.2 Bracketing
Guideline: Brace and parenthesize using BSD and GNU style.

When setting out a code block, use the BSD and GNU style of bracketing.
That is, place the opening brace on a separate line by itself, indented
to the same level as the controlling expression. Place the closing brace
on a separate line, at the same indentation level.

Use the same formatting for bracketed lists over multiple lines, for example:

    static char *name[] =
    {
        "Illegal month",
        "January", "February", "March",
        "April",   "May",      "June",
        "July",    "August",   "September",
        "October", "November", "December"
    };

### 6.3 Keywords
Guideline: Separate your control keywords from the following opening bracket.

Control structures regulate the dynamic behaviour of a program, so the
keywords of control structures are amongst the most critical components
of a program. It's important those keywords stand out clearly in the
source code and are distinguished from function calls.

To achieve this distinction, place a single space between a keyword and
the following bracket:

    /* CONFORMANT */
    for (i=0; i < NELEMENTS(name_array); ++i)
        ...
<br />

    /* NON-CONFORMANT */
    for(i=0; i < NELEMENTS(name_array); ++i)
        ...

### 6.4 Subroutines and Variables
Guideline: Don't separate subroutine or variable names from the following opening bracket.

Function or variable names shall be followed by an opening parenthesis
without any intervening spaces. This ensures that a function call is not
mistaken for a control structure.

    /* CONFORMANT */
    initialise();
<br />

    /* NON-CONFORMANT */
    initialise ();

### 6.5 Line Lengths
Guideline: Use 78-column lines.

These guidelines recommend that code be constrained to a width that
supports adherence to other guidelines in this document.

See also §[§6.10](#610-vertical-alignment) — 6.13.

### 6.6 Indentation
Guideline: Use four-column indentation levels.

In experiments to measure the effectiveness of indentation as an aid to
program understanding, it was discovered that an indentation level
between 2 and 4 was most effective. Smaller and larger values were found
to be detrimental to the understandability of the program.

These guidelines mandate an indentation level of four columns.

### 6.7 Tabs
Guideline: Indent with spaces, not tabs.

Tabs do not appear the same when printed on different output devices, or
pasted into word processor documents, viewed on someone else's tabspaced
editor, or prefixed with line numbers for code reviews or peer reviews.

Do not use tabs alone, or, even worse, intermixed with spaces.

Use spaces to ensure that indentation remains reliable, repeatable, and
transportable across viewing environments.

Note that this does not mean you cannot use the Tab key in your code
editor. Most editors have a setting that will insert spaces when the Tab
key is pressed. These Guidelines mandates that such editors are set to
insert four spaces and not the tab character.

### 6.8 Blocks
Guideline: Never place two statements on one line.

If two or more statements are placed on one line, each of them becomes harder to comprehend.

### 6.9 Chunking
Guideline: Code in paragraphs.

Break the code into sequences that achieve a single task, with a single
empty line between each sequence.

Precede each sequence with a comment to further improve the
maintainability of the code. These comments need to explain why the code
is needed, not merely paraphrase what it's doing.

### 6.10 Vertical Alignment

Guideline: Corresponding items shall be aligned vertically.

It's often useful to align data in a table-like series of columns.
Consistent indentation can suggest equivalences in structure, usage, or
purpose.

    /* FEB = 2, MAR = 3, etc. */
    enum months
    {
        JAN = 1, FEB, MAR,
        APR,     MAY, JUN,
        JUL,     AUG, SEP,
        OCT,     NOV, DEC
    };

Sequences of related variables shall be tabulated similarly:

    name   = standardise_name(name);
    age    = get_now_time() - birth_date;
    status = active;

### 6.11 Breaking Long Lines
Guideline: Break long expressions before an operator.

Although it is common practice to break an expression after an operator
and continue the expression on the following line, indented by one level
(the idea being the operator acts as a continuation marker) there is a
problem: people rarely look at the right edge of code. Most semantic
hints such as keywords, appear on the left. Breaking the line *before*
an operator is a cleaner solution. For example:

    /* CONFORMANT */
    step = step
           + radial_velocity * elapsed_time
           + orbital_velocity * (phase + phase_shift)
           - DRAG_COEFF * altitude
           ;

The semicolon on its own indented to the same column as the continued
expression informs the reader the expression is complete, as he or she
scans down the leading operators.

Continued lines should not be simply indented to the next indentation
level, they should be indented to the starting column of the expression
to which they belong.

So don't do this:

    /* NON_CONFORMANT */
    step = step
               + radial_velocity * elapsed_time
               + orbital_velocity * (phase + phase_shift)
               - DRAG_COEFF * altitude
               ;

### 6.12 Breaking by Precedence

Guideline: Always break a long expression at the operator of the lowest possible precedence.

The example in 6.11 shows that when breaking an expression across
several lines, each line should be broken before a low-precedence
operator. Breaking at higher precedence will encourage an unwary reader
to misunderstand the computation. For example:

    /* NON-CONFORMANT */
    step = step + radial_velocity
                * elapsed_time + orbital_velocity
                * (phase + phase_shift) - DRAG_COEFF
                * altitude
                ;

This suggests that additions and subtractions happen before the multiplication.

If you need to break on an operator of less-than-minimal precedence,
indent the broken line one additional level relative to the start of the
expression, like so:

    /* CONFORMANT */
    step = step
           + radial_velocity * elapsed_time
           + orbital_velocity
               * (phase + phase_shift)
           - DRAG_COEFF * altitude
           ;

### 6.13 Assignments
Guideline: Break long assignments before the assignment operator.

For example:

    predicted_val
        = average + predicted_change * fudge_factor;

If the righthand side of the assignment won't fit on one line, break it
again at a low-precedence operator, as suggested in [Para. 6.12](#612-breaking-by-precedence).

For example:

    predicted_val
        = (minimum + maximum) / 2
             + predicted_change * max(fudge_factor, local_epsilon);

### 6.14 Automated Layout

Guideline: Enforce your chosen layout style automatically.

In the long term, the coding team should be trained to code in a
consistent, rational, and readable style. Time and commitment to
accomplish this isn't always available. A reasonable compromise is to
prescribe a standard code-formatting tool that must be applied to all
code before it's committed, reviewed, or otherwise displayed in public.

## 7 C IMPLEMENTATION

### 7.1 Header Files
Guideline: Ensure header files are idempotent.

Use a macro guard in header files to implement idempotence:

    /* FILE: header.h */
    #ifndef HEADER_H
    #define HEADER_H
    ... /* body of .h file */
    #endif

The macro name should be the name of the file with all full stops,
non-alphabetic, and non-digit characters replaced by underscores. Never begin 
a macro name with an underscore character.

### 7.2 Header File Content

Guideline: Do not define functions or objects in header files.

Header file content should fall into roughly three types:

-   External declarations and function prototypes
-   Structure definitions, and structure `typedef` declarations
-   `#define`d preprocessor directives for global use, and `typedef`
    declarations for non-structure types

Functions or objects should not be defined in a header file.

Reference: MISRA-C:2004 Rule 8.5.

### 7.3 Goto
Guideline: Do not use the `goto` statement.

The `goto` is never necessary, and in practice it is almost always easy to
write code without it.

References: Ref 7 Rule 14.4.

### 7.4 Functions
There are several guidelines for function.

7.4.1 Functions should be as short as practicable. Excluding the unit header, a function should span at most two screens.

7.4.2 The function name shall be unique and describe its purpose. See [Para. 8.1.3.2](#8.1.3.2).

7.4.3 Use the type-qualifier `const` for function parameters to indicate that the function does not change those values. Do this in both the definitions and the declarations. This does not apply to scalar parameters.

7.4.4 The brace `}` which terminates the block that provides the code for a function shall be followed by a comment of the form:

    /* End of function function-name */

and shall appear on the same line as that block delimiter.

7.4.5 All function names within a separately compiled group of elements should be prefixed with a short mnemonic. For example, `hdc_` (to denote hard disc controller), particularly when more than one task is present on the system.

### 7.5 Null Pointers
For each pointer type, C defines a special pointer value, the null
pointer, that is guaranteed not to point to any object or function of
that type. The *null pointer constant* used for representing null
pointers in source code involves the integer 0, and many machines
represent null pointers internally as a word with all bits zero, but the
second fact is *not* guaranteed by the language.

#### 7.5.1 The NULL Macro
Guideline: Use the `NULL` macro instead of 0 in pointer contexts.

So that a program's use of null pointers can be made more explicit, a
standard pre-processor macro, `NULL`, is defined, having as its value a
null pointer constant. Using the macro instead of an unadorned 0 in
pointer contexts indicates a special value for a pointer is being used.

References: K&R2 §5.4 p. 102

#### 7.5.2 Pointer Arguments

Guideline: A null pointer shall be cast to its correct type when used as
an argument to a function call.

According to the language definition, an "integral constant expression
with the value 0" in a pointer context is converted into a null pointer
at compile time, and will generate the correctly typed null pointer
value. This applies when using the `NULL` macro as well. So the following
are perfectly legal:

    char *p = NULL;
    if (p != NULL)

However, an argument passed to a function is not necessarily
recognisable as a pointer context, and the compiler may not recognise an
unadorned 0 (or the `NULL` macro) as a null pointer. In this case, an
explicit cast may be required. For example, the UNIX system call `execl`
takes a variable-length, null pointer-terminated list of character
pointer arguments and is correctly called like this:

    execl("/bin/sh", "sh", "-c", "date", (char *)NULL);

Without the `(char *)` cast on the last argument, the compiler would not
know to pass a null pointer and would pass an integer 0 instead.

When a function prototype is in scope, argument passing becomes an
"assignment context" and most casts may be safely omitted.

Function prototypes cannot provide the types for variable arguments in
variable-length argument lists, so casts are still required.

As explained above, although null pointer casts of function arguments
are necessary only where there is no prototype in scope, or when passed
as a variable argument in a varargs function call, it is safest to
properly cast all null pointers in function calls.

References: K&R2 §7.10 p. 207, §A7.17 p. 209; ANSI §3.2.2.3; ISO
§6.2.2.3

#### 7.5.3 Function Pointers

Guideline: A function pointer shall not be converted to type void \*.

A `void *` is guaranteed to hold only object (i.e., data) pointers;
converting a function pointer to type `void *` is not portable.

It is guaranteed, however, that all function pointers can be
interconverted, as long as they are converted back to an appropriate
type before calling. Therefore, you can pick any function type as a
generic function pointer (usually `int (*)()` or `void (*)()`).

References: ANSI §3.1.2.5, §3.2.2.3, 3.3.4; ISO §6.1.2.5, §6.2.2.3,
§6.3.4

### 7.6 Preprocessor
7.6.1 Guideline: In the definition of a function-like macro each instance of a parameter shall be enclosed in parentheses unless it is used as the operand of `#` or `##`.

Using parentheses protects any low-precedence operators in the actual
arguments from the rest of the macro expansion.

References: MISRA-C:2004 Rule 19.10.

7.6.2 Guideline: C macros shall expand only to a braced initialiser, a constant, a parenthesised expression, a type qualifier, a storage class specifier, or a do-while-zero construct.

Any other use of `#define` could lead to unexpected behaviour or
hard-to-read code.

For complete statements in a macro body, the do-while-zero construct is
the only permitted mechanism. For example:

    #define READ_TIME_32() \
    do \
    { \
        DISABLE_INTERRUPTS(); \
        time_now = (uint32_t)TIMER_HI << 16; \
        time_now = time_now | (uint32_t)TIMER_LO; \
        ENABLE-INTERRUPTS(); \
    } while (0)

Note that the semicolon *must* be omitted from the end of the macro body.

References: MISRA-C:2004 Rule 19.4.

### 7.7 Booleans

7.7.1 <a name="7.7.1"></a> Defining TRUE and FALSE
Guideline: Define pre-processor macros or enumeration constants for true
and false values, which evaluate to 1 and 0.

The choice between `#defines` and enumeration constants for the true and
false values is arbitrary, but consistency shall be maintained within a
program or project. Use any of:

    #define TRUE 1
    #define FALSE 0

or

    enum Bool {FALSE, TRUE};

or

    typedef enum {FALSE, TRUE} Bool;

And also:

    typedef int Bool;

or

    typedef char Bool;

See also [§7.7.2](#772-use-of-true-and-false); [§8.2](#82-booleans).

#### 7.7.2 Use of TRUE and FALSE
Guideline: Only assign TRUE and FALSE to a Boolean variable, never use
them in comparisons.

Even though any nonzero value is considered true in C, this only applies
"on input", i.e., where a Boolean value is expected. When a Boolean
value is generated by a built-in operator, such as `==`, `!=`, and `<=`, it
is guaranteed to be 1 or 0. Therefore, a test like

    /* NON-CONFORMANT */
    if ((a==b) == TRUE)

would work as expected, but is pointless. Generally, explicit tests
against TRUE and FALSE are inappropriate, and, unlike the built-in
operators, some library functions (notably `isupper`, `isalpha`, etc.)
return, on success, a nonzero value that is *not* necessarily 1, so
comparing their return values against a single value, such as TRUE, is
risky and likely not to work. The above should be written:

    if (a==b)

See also [§7.7.1](#7.7.1); [§8.2](#82-booleans).

### 7.8 Pointer Declarations
Guideline: When declaring or defining a pointer variable, always ensure
there is no whitespace between the `*` and the identifier.

C's declarations come in two parts: a base type and a *declarator*. The
declarator may also contain the characters `*`, `[]`, and `()`, saying
whether the name is a pointer to, array of, or function returning the
base type, or some combination.

In

    char *pc;

the base type is `char`, the identifier is `pc`, and the declarator is `*pc`;
this tells us that `*pc` is a `char`. The syntax of the declaration for a
variable mimics the syntax of expressions in which the variable might
appear and is what "declaration mimics use" means.

If we write:

    /* NON-CONFORMANT */
    char* p1, p2;
    char * p3, p4;

only one pointer variable is being declared, on each line, despite what
the whitespace might suggest. Both forms invite mistakes and are
confusing.

The correct way to declare them would clearly show that only `p1` and `p3`
are pointers:

    char *p1, p2;
    char *p3, p4;

References: Ref 2, §5.1; Ref 6 Q1.5, Q1.21.

## 8 NAMING CONVENTIONS
Guideline: Name all objects.

It is possible to create an enumeration without specifying an identifier:

    enum {NAME, PARENS, BRACKETS};

    /* and later */
    int token_type;
    . . .
    token_type = PARENS;

But it is clearer to name it and declare any object that will hold its values of that type:

    enum tokens {NAME, PARENS, BRACKETS\];

    /* later */
    enum tokens token_type;
    . . .
    token_type = PARENS;

Compilers need not check that what is stored in such a variable is a
valid value for the enumeration, but they offer the chance of checking
and in many cases are better than `#define`s. Also, a debugger may be
able to print values of enumeration variables in their symbolic form. It
is also clear from the code what the author intended.

It would also be clearer to declare the type using `typedef`:

    typedef enum {NAME, PARENS, BRACKETS} Token_type;
    Token_type token_type;

References: Ref 2 §2.3, §A.8.4

In the rules below, `*` means zero or more repetitions of the preceding
item, and `?` means 0 or 1 instances.

### 8.1 Identifiers
8.1.1 Guideline: No identifier shall begin with an underscore.
The reason for this guideline is to prevent creating an identifier that
is already in use by the implementation. If you begin an identifier with
an underscore, at best, you will get "multiply defined" errors. At
worst, it will quietly replace one of the implementation's symbols and
break everything.

It is possible to break this Guideline and use identifiers with
underscores safely within certain namespaces, but the rules are complex
and it is simpler &emdash; and safer &emdash; simply not to use an underscore as
the first character of any identifier.

References: Ref 6, Q1.29 p. 23; ISO §7.1.3.

8.1.2  Guideline: Identifiers (internal and external) and pre-processor macro names shall not rely on the significance of more than 31 characters.

Although some implementations may make at least the first 31 characters
of internal identifiers significant, it is safer to restrict all
identifiers (including pre-processor macro names) to a maximum of 31
characters.

Reference: Ref 7 Rule 5.1; Ref 2 §A.2.3.

8.1.3 Guideline: Use grammatical templates when forming identifiers and function names.

8.1.3.1 Variables

Variables should be named according to the values they will store and as
specifically as possible.

The recommended grammar rule is very simple:

&nbsp;&nbsp;&nbsp;&nbsp;*variable* → \[*adjective* _ \]\* *noun*

The choice of nouns and adjectives is critical. The nouns in particular
should indicate what the variable does in terms of the problem domain,
not in terms of the implementation. For example:

    next_client           /* not: next_elem */
    prev_appointment      /* not: prev_elem */
    estimated_net_worth   /* not: value */
    next_node             /* not: node */
    root_node             /* not: root */
    final_total           /* not: sum */
    cumulative_total      /* not: partial_sum */

Note, however, it is often acceptable to name parameters in short, tight
functions, using the normal C idioms:

&nbsp;&nbsp;&nbsp;&nbsp;`s` to denote a string<br />
&nbsp;&nbsp;&nbsp;&nbsp;`c` to denote a `char`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`i` to denote a loop index<br />

8.1.3.2 <a name="8.1.3.2"></a> Functions
A suitable grammatical rule for forming function names is:

&nbsp;&nbsp;&nbsp;&nbsp;*function* → *imperative_verb* \[ \_ *adjective*\]? \_ *noun* \_ *preposition*<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| *imperative_verb* \[ \_ *adjective*\]? \_ *noun* \_ *participle*<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| *imperative_verb* \[ \_ *adjective*\]? \_ *noun*

This will give function names such as:

    get_record                      /* imperative_verb noun */
    get_record_for                  /* imperative_verb noun preposition */
    eat_cookie                      /* imperative_verb noun */
    eat_previous_cookie             /* imperative_verb adjective noun */
    build_profile                   /* imperative_verb noun */
    build_execution_profile         /* imperative_verb adjective noun */
    build_execution_profile_using   /* imperative_verb adjective noun */

The reason for prepositions is that they can create variables that read
far more naturally and can eliminate the need for additional comments:

    config_options = get_record_for(next_client);

    build_execution_profile_using(next_client, option);

### 8.2 Booleans
Guideline: Name Booleans after their associated test.

Booleans should be named for the properties or predicates they test, in
such a way that the resulting conditional expression reads naturally.
This means they will usually begin with `is_` or `has_`, but not always.
For example, consider this code fragment:

    if (is_valid(next_record) && !loading_finished)
    {
        while (metadata_available_for(next_record))
        {
            push(metadata, get_metadata_for(next_record));
            if (has_end_tag(next_record)
            break;
        }
    }
    else
    {
        has_found_bad_record = TRUE;
    }

Note how the use of carefully constructed identifiers, and function
names eliminates the need for comments.

### 8.3 Pointer Variables
Guideline: Mark variables that store pointers.

To obviate using a pointer variable in a context when it should be
dereferenced, and deferencing a pointer when it shouldn't be, either
suffix the variable name with `_p`, prefix it with `p`, or provide some
other indication that it is a pointer.

By conforming to this guideline, you can ensure a coder understands that
he or she is dealing with a pointer. This coding practice would make it
clear that it is likely a `*` should appear before a variable named in
such a way:

    /* CONFORMANT */
    /* calculate how much wider than text the width (columns) is */
    gap = *p_col_opt - strlen(text);

and this would look suspicious:

    /* NON-CONFORMANT */
    gap = p_col_opt - strlen(text);

### 8.4 Arrays
Guideline: Name arrays in the plural.

Arrays are usually ordered sequences of multiple values, and are mostly
processed collectively or iteratively, so it makes sense to name them in
the plural, after the group of items they store:

    char *filenames[FILENAMES_MAX] = {NULL}; /* initialise all to null pointer */

    /* And later... */

    for (i = 0; i < NELEMENTS(filenames) && filenames[i] != NULL; ++i)
    {
        puts(filenames[i]);
    }

### 8.5 Multiword Identifiers
Guideline: Maintain consistency in the use of multiword identifiers.

There are two main types of naming convention prevalent in naming
variables containing multi-words: Inter Caps and underscores.

Underscores impose a visual gap between the words in an identifier, and
therefore are the closest to the default natural-language word
separator: the space.

    pdf_header_signature_inplace_str_token

On the other hand, use of Inter Caps is very common:

    pdfHeaderSignatureInplaceStrToken

Choose a style, and ensure it is used consistently throughout the code.

### 8.6 Abbreviations
Guideline: Abbr idents by prefx.

If you choose to abbreviate an identifier, abbreviate it by retaining
the start of each word. Compare these two code fragments:

    for (i = 0; i < NELEMENTS(orig_strs); ++i)
    {
        len = strlen(orig_strs[i]);
        if (len > UPPER_LIM)
            continue;
        max_len = MAX(max_len, len);
    }

<br />

    /* NON-CONFORMANT */
    for (i = 0; i < NELEMENTS(rgnl_strgs); ++i)
    {
        len = strlen(rgnl_strgs[i]);
        if (lngh \> UPPR_LMT)
        continue;
        max_lngh = MAX(max_lngh, lngh);
    }

When abbreviating identifiers, it is acceptable to keep the last
consonant (`orig_strs`, `prefx`, *etc.*), especially if that consonant is a
plural suffix.

This rule need not apply to identifiers that are well-known standard
abbreviations. In this case, it's better to use the "native"
abbreviation strategy:

    ctrl_char = ASCII_ESC; /* ASCII_ESC is a macro */
    connection_Mbps = get_bitrate() / 1e6;

`Ctrl` appears on most keyboards. `Mbps` is a standard unit.

## 8.7 Ambiguous Abbreviations
Guideline: Abbreviate only when the meaning remains unambiguous.

Abbreviation is a form of visual hashing, and can be useful in reducing
the length of identifiers, which then can be recognised as a single
visual chunk. Unfortunately, it can suffer from collisions.

Some ambiguities are:

    temp       /* temporary or temperature? */
    term_val   /* terminal value or termination valid? */
    dev        /* device or deviation? */
    no         /* number or no? */

There are exceptions. Abbreviating to a single character can be appropriate:

    a = f / m;
    v = u + a*t;
    s = u*t + 0.5*a*t*t;

Even single letter iterator variables - `i`, `j`, `k`, `n`, `x`, `y`, `z` - are
acceptable in nested loops:

    /* squeeze.c: delete each char in s1 which is in s2 */
    void squeeze(char s1[], const char s2[])
    {
        int i, j, k;

        for (i = k = 0; s1[i] != '\0'; i++)
        {
            for (j = 0; s2[j] != '\0' && s2[j] != s1[i]; j++)
                ;

            if (s2[j] == '\0') /* end of string - no match */
                s1[k++] = s1[i];
        }

        s1[k] = '\0';

    } /* squeeze */


### 8.8 Ambiguous Names
Guideline: Avoid using inherently ambiguous words in names.

Abbreviations are not the only cause of ambiguities in identifiers. Some
complete words have one or more homonyms.

One of the worst offenders in this regard is "last".

`last_record` might mean the record that was most recently processed (call
it `prev_record`), or to the ultimate record in a list (call it
`final_record`).

"set" is another problem. `get_set()` could mean get a collection of
values (call it `retrieve_collection()`), or it might test whether the
"get" option has been enabled (call it `get_is_enabled()`), or it might
mediate both fetch and store operations of some value (call it
`fetch_or_store()`).

Avoid these words:

-   "left" (the direction *vs* what remains)

-   "right" (the other direction *vs* being correct vs an entitlement)

-   "no" (the negative *vs* the abbreviation for number)

-   "abstract" (theoretical *vs* précis *vs* to summarise)

-   "contract" (make smaller *vs* legal agreement)

-   "record" (an extreme outcome *vs* a data aggregation vs to log)

-   "second" (the ordinal position *vs* the unit of time)

-   "close" (near *vs* to shut)

-   "bases" (more than one base *vs* more than one basis)

### 8.9 General Naming Conventions
Guideline: Use K&R2 style use of case.

The Kernighan & Ritchie convention is:

|Convention|Description
|---|---
|UPPERCASE_WITH_UNDERSCORE|Macro names and enumeration constants
|Capitalised|typedef names
|lowercase|other objects

For example:

    typedef enum {FALSE,TRUE } Bool; /* Capitalised typedef, uppercase enum constants */
    #define LOWER 0                  /* A macro called LOWER */
    int fahr;                        /* An int variable called fahr */

## 9 DOCUMENTATION
This document has already described how unit and element headers should
be documented (See [Section 5](#5)). This section describes guidelines for
documenting the source code.

### 9.1 Algorithmic Documentation
Guideline: Use full-line comments to explain the algorithm.

[Para. 6.9](#69-chunking) mentions coding in paragraphs, including advice on prefixing
each paragraph with a single-line comment which explains at high level
what the associated paragraph contributes to the overall process
implemented by the code. If all the paragraph comments were to be
extracted, they should summarise the algorithm by which the code
performs its task. Indeed, the use of a tool to perform such processing
is recommended.

Keep each such comment strictly to a single line. Any more than that
interrupts the code excessively, making it harder to follow. If the
paragraph is doing something too complicated to be explained in a single
line, that is a sign that the code either needs to be split into several
paragraphs, or else refactored out into a function (which can then be
given a more expansive block comment).

### 9.2 Elucidating Comments
Guideline: Use end-of-line comments to point out subtleties and
oddities.

The guidelines in this document should help you write code that is
self-documenting, but such a thing is in the eye of the original author,
and comprehensibility can suffer particularly badly when the code
incorporates jargon from the problem domain. Terms that were extremely
familiar to the original designers and implementers might mean nothing
to those who later have to maintain the source. For example, you could
inherit code like this:

    /* NON-COMPLIANT */
    QFETM_Func_p QFETM_func_p;
    if (QFETM_func_p = get_GET( ))
    {
        make_futtock(QFETM_func_p);
    }

In which case, trailing comments are appropriate:

    QFETM_Func_p QFETM_func_p; /* stores Quantum Field Effect Transfer Mode
    function */

    /* Build futtock representation if remote data are available . . . */
    if (QFETM_func_p = get_GET( ))           /* instead of get_POST( ) */
    {
        make_futtock(QFETM_func_p); /* futtock: a rib of a ship's frame */
    }

### 9.3 Defensive Documentation
Guideline: Comment anything that has puzzled or tricked you.

An in-line comment is appropriate whenever you encounter a subtle bug,
or whenever you write some subtle code. "Subtle" has a very precise
definition here: it means that you either had to look up something in a
manual, or had to spend more than five seconds thinking about it before
you understood its syntax or semantics.

### 9.4 Indicative Documentation
Guideline: Consider whether it's better to rewrite than to comment.

The need to leave hints in the code indicates that the code itself is in
need of reworking. Doing so may remove the need for the trailing
comment, or enable it to be re-written so it's more to the point.

### 9.5 Proofreading
Guideline: Check the spelling, syntax, and sanity of your documentation.

To be effective, documentation must communicate effectively. It must be
without distractions (like spelling mistakes), it must be comprehensible
(i.e., syntactically correct), it must be unambiguous, and it must make
sense. So *read* it after it's written, or, better still, have someone
who's unfamiliar with the code read through it.

## 10 LIBRARY FUNCTIONS
Guideline: Use C's Standard Library functions wherever possible.

If C provides a way to solve your problem with a Standard Library
function, then it makes no sense to reinvent it. It's likely that
function is faster and better debugged than anything you'll have time to
write yourself.

Bear in mind, some of C's built-in functions are complex, with subtle
behaviour, so there are right and wrong ways to use them. Note also that
the C Standard allows any function declared in a header to be
additionally implemented as a macro defined in the header.

Here are some guidelines.

### 10.1 <assert.h\>
Guideline: Use assert only in development code. The sole purpose of the
header `<assert.h>` is to provide a definition of the macro assert. The
macro is used to enforce assertions at critical places within your
program:

    assert(0 <= idx && idx < sizeof a / sizeof a[0]);

If the assertion is false, a suitably revealing message is written to
the standard error stream and the program terminates abnormally by
calling `abort`.

However, such behaviour should be used only in development code and
*not* in production code. Some form of error recovery is always
preferred.

See also [§10.13.3](#10133-abort).

### 10.2 <ctype.h\>

#### 10.2.1 Input Functions
Guideline: Use the functions declared in `<ctype.h>` to test or alter
characters that you read in with `fgetc()`, `getc()`, `getchar()`, all
declared in `<stdio.h>`.

If you store a value returned by any of those functions before you test
it, declare the object to have type `int`. The functions work properly
only for the value `EOF`, defined in `<stdio.h>`, and values that type
`unsigned char` can represent.

#### 10.2.2 Letter Codes
Guideline: Do not assume letter codes are adjacent.

Write your code to be independent of the underlying character set used
by the compiler.

For example, in the ASCII character set, it happens that letter codes
are adjacent, but in the EBCDIC character set they are not.

`<ctype.h>` defines a family of functions that provide tests and
conversions that are independent of character set. Use those functions
instead of your own. For example, the following assumes ASCII and that
upper case and lower case letters are a fixed distance apart:

    /* NON-CONFORMANT */
    /* lower: convert c to lower case; ASCII only */
    int lower(int c)
    {
        if ('A' <= c && c <= 'Z')
            return c + 'a' -- 'A';
        else
            return c;
    }

It will not work for the EBCDIC character set. `tolower(c)` will work,
whatever character set is used.

The issue of the underlying character set has implications for number
conversion, for example converting a hexadecimal number in any locale.
See the sample code in [Section 17](#17-useful-macro-and-function-examples).

### 10.3 <errno.h\>
-----------
Guideline: Do not use `errno`.

The C Standard leaves much unsaid about the errors that can be reported,
and even less about the values of any error codes or the macro names
used to determine those values. Behaviours are explicitly stated in the
C Standard, so if you call `sqrt(-1.0)` you will know `errno` contains the
value `EDOM`. However, call `fabs(x)` and all bets are off. If a function
does not document it changes `errno`, it can do so silently (although no
function will ever set it to 0). Do not use `errno`.

Reference: Ref 5 Chapter 3; Ref 7 Rule 20.5.

### 10.4 <float.h\>
-----------

The three pitfalls of floating-point arithmetic are overflow, underflow,
and significance loss. These Guidelines describe ways to use the macros
defined in `float.h` to perform double arithmetic more safely. The
functions in the following examples are the common maths functions
declared in `math.h`.

#### 10.4.1 Overflow
Guideline: To avoid overflow, make sure that no value ever exceeds
`DBL_MAX` in magnitude.

To conform to this guideline, you cannot simply write:

    if (DBL_MAX < fabs(y)) /* SILLY TEST */
    . . .

By the time you've made the test, it's too late.

A more sensible test might be:

    if (x < log(DBL_MAX))
        y = exp(x);
    else
    . . . /* HANDLE OVERFLOW */

To avoid computing `log(DBL_MAX)`, use a related macro, for example,

    if (x <= FLT_MAX_10_EXP)
        y = pow(10, x);
    else
        . . . /* HANDLE OVERFLOW */

#### 10.4.2 Underflow
Guideline: To avoid underflow, make sure that no value ever goes below
`DBL_MIN` in magnitude.

You can make the following test :

    if (fabs(y) < DBL_MIN)
    . . .    /* UNDERFLOW HAS OCCURRED */

Although not as silly as the corresponding comparison between `DBL_MAX`,
the test is performed only after any damage has been done.

You can make the corresponding tests:

    if (log(DBL_MIN) <= x)
       y = exp(x);
    else
       . . . /* HANDLE UNDERFLOW */

    if (FLT_MIN10_EXP <= x)
        y = pow(10, x);
    else
        . . . /* HANDLE UNDERFLOW */

    if (FLT_MIN_EXP < n)
       y = ldexp(1.0, n);
    else
       . . . /* HANDLE UNDERFLOW */

#### 10.4.3 Significance Loss
Guideline: Where possible, perform a check when adding a small magnitude
to a large one.

Significance loss occurs when you subtract two values that are nearly
equal. Nothing can save you from such a fate except careful analysis of
the problem before you write code. However, you can protect against a
subtler form of significance loss — adding a small magnitude to a
large one.

So, to test, for example, whether adding `x` to `y` captures at least three
decimal digits of significance from `y` (assuming both are positive),
write:

    if (x < y * DBL_EPSILON * 1.0E+03)
        . . . /* HANDLE SIGNIFICANCE LOSS */

Note that `<float.h>` does not contain some key ingredient for writing
highly portable code.

References: Plauger Chapter 4.

### 10.5 <limits.h\>
Guideline: Wherever possible, use the macros provided in `<limits.h>` to
test the execution environment. Do not do experiments on the
pre-processor.

Preprocessor arithmetic need not model that of the execution
environment. Although the translator must closely model the execution
environment, it can largely define its own environment for the
arithmetic within `#if` directives.

The tradition in C is that scalar data types are represented in ways
natural to each computer architecture. `int` is particularly elastic. It
wants to be a size that supports efficient computation, at least within
broad limits. That is great for efficiency, but a real nuisance for
portability.

`<limits.h>` captures many important properties that can change across
architectures, and it deals exclusively with integer types. When similar
data were added for floating point types, the Standards committee
decided not to include them in `<limits.h>`. Instead, they added them to
`<float.h>`. They could have renamed `<limits.h>` to `<integer.h>`, but
they elected not to do so.

All the macros defined in `<limits.h>` are testable within `#if`
directives, so rather than use execution environment-type expressions,
include `<limits.h>` and test the values of the macros it provides. For
example:

    #include <assert.h>
    #include <limits.h>
    #if VAL_MIN < LONG_MIN || LONG_MAX < VAL_MAX
        typedef double Val_t;
    #elif VAL_MIN < INT_MIN || INT_MAX < VAL_MAX
        typedef long Val_t;
    #else
        typedef int val_t;
    #endif

You then declare all data objects that must hold this range of values as
having type `Val_t`. The program chooses the most efficient type.

Of course, the macros in `<limits.h>` can be used in code.

### 10.6 <locale.h\>
Guideline: Be aware of where library behaviour changes with locale.

When using locales, be aware of where library behaviour changes. Here
are all the places where library behaviour changes with locale.

10.6.1 The functions `strcoll` and `strxfrm`, declared in `<string.h>`, can change how they collate when category `LC_COLLATE` changes.

10.6.2 The functions declared in `<ctype.h`>, the print and scan functions, declared in `<stdio.h>`, and the numeric conversion functions, declared in `<stdlib.h>`, can change how they test and alter certain characters when category `LC_TYPE` changes.

10.6.3 The multibyte functions, declared in `<stdlib.h>` and the print and scan functions, declared in `<stdio.h>` can change how they parse and translate multibyte strings when category `LC_CTYPE` changes.

10.6.4 The print and scan functions, declared in `<stdio.h>`, and `atof` and `strtod`, declared in `<stdlib.h>`, can change what they use for the decimal point character when category `LC_NUMERIC` changes.

10.6.5 The `strftime` function, declared in `<time.h>`, can change how it converts times to character strings when category `LC_TIME` changes.

10.6.6 The `localeconv` function, declared in `<locale.h>`, can change what it returns when categories `LC_MONETARY` or `LC_NUMERIC` change.

### 10.7 <math.h\>
Programmers that use `<math.h>` have a good idea of what they intend to
do with the functions declared in it; therefore, there is no guideline
for the Standard Library header file. Section 10.4 uses some of the
functions.

### 10.8 <setjmp.h\>
Guideline: Do not use `setjmp` or `longjmp`.

`<setjmp.h>` is used when you want to bypass the normal function call
and return mechanism. For those reasons, these Guidelines mandate that
it is not used.

References: MISRA-C:2004 Rule 20.7.

### 10.9 <signal.h\>
------------
Guideline: Do not use the signal handling facilities of `<signal.h>`.

Signal handling is essentially nonportable, so do not use it.

References: MISRA-C:2004 Rule 20.8.

### 10.10 <stdarg.h\>
Guideline: When using the macros in `<stdarg.h>` be aware of the caveats
listed in this Guideline.

Here are the caveats for using the macros in `<stdarg.h>`:

10.10.1 You must declare a function explicitly as having a variable argument list, (call it `f`). Its argument list must end in ellipsis (, ...), both in its definition and any declarations.

10.10.2 All calls to function `f` must be in scope of a function prototype that declares the function in the way described in Para. 10.10.1.

10.10.3 You must declare the function with at least one fixed argument. The last of these fixed arguments is conventionally referred to as `parmN`.

10.10.4 You must declare a data object of type `va_list`, conventionally called `ap`, which is visible within the function.

10.10.5 You must execute `va_start(ap, parmN)` *within* `f`. You must not execute `va_list` or `va_end` until you do so.

10.10.6 You can then execute `va_arg(ap,` *T*`)` in the function or in any of the functions that it calls. You must specify the proper types for each of the arguments and in the order they appear in the function call. `va_arg` is an rvalue macro. You cannot use the macro invocation as an lvalue to alter the value stored in the argument data object.

10.10.7 You must not write a type *T* that widens when passed as an argument. Replace `float` with `double`. Replace `char`, `signed char`, `unsigned char`, `short`, and `unsigned short` with either `int` or `unsigned int`. Use `unsigned int` for an `unsigned short` that is the same size as `int`. Rarer still, use `unsigned int` for a character type that represents no negative values and is the same size as `int`.

10.10.8 You must write only a type *T* that can be converted to a pointer type by appending a `*`. For example, the type designators `int` and `char *` are valid. The type `char (*)[5]` is not. As a general rule, be wary of type designators that contain parentheses or brackets.

10.10.9 You must execute `va_end` within `f` if you earlier executed `va_start`. Once you execute `va_end` you must not again execute `va_arg` unless you first execute `va_start` to initiate a rescan. In that case, you must execute `va_end` again before the function returns.

### 10.11 <stddef.h\>
This library function contains several types and macros, some of which
are defined in other headers.

#### 10.11.1 size_t
Guideline: Use `size_t` *anywhere* your program performs array
subscripting or address arithmetic.

`size_t` is the safest type to represent any integer data object you use
as an array subscript. You don't have to worry if a small array evolves
to a very large one as the program changes. Subscript arithmetic will
never overflow when performed in type `size_t`. You don't have to worry if
the program moves to a machine with peculiar properties, such as 32-bit
bytes and 1-byte longs. `size_t` offers the greatest chance your code
won't be unduly surprised. The only sensible type to use for computing
the sizes of data objects is `size_t`.

10.11.2 Be aware of these pitfalls, though: unsigned-integer arithmetic has more pitfalls than signed. You cannot run an unsigned counter down until it goes negative --- it never will. Counting down to zero may lead to clumsy tests. You may occasionally miss the convenience of using negative values (such as `EOF`) and testing for them easily. However, the improvement in robustness is well worth the learning investment.

### 10.12 <stdio.h\>
Most of the functions declared in `<stdio.h>` operate on a stream that
is associated with an open file.

#### 10.12.1 gets
Guideline: Function `gets` shall not be used.

Do not use `gets`. You have no way of limiting the number of characters it
reads. Use `fgets` instead.

#### 10.12.2 getc
Guideline: Use `getc` instead of `fgetc`.

`getc` has the same specification as `fgetc` but is far more likely to have
a masking macro that dramatically improves performance. As a rule,
therefore, you should use `getc` instead of `fgetc`.

#### 10.12.3 putc
Guideline: Use `putc` instead of `fputc`.

`putc` has the same specification as `fputc` but is far more likely to have
a masking macro that dramatically improves performance. Therefore, use
`putc` instead of `fputc`.

#### 10.12.4 fread
Guideline: Call `fread` in a way such that it can report how many
additional characters it read (if any).

`fread` is used to read binary data into an array data object or to read
up to a fixed number of characters from any stream. If the size (second)
argument is greater than one, you cannot determine whether the function
also read up to `size`-1 additional characters beyond what it reports.
As a rule, call the function as `fread(buf, 1, size * n, stream)` instead
of `fread(buf, size, n, stream)`.

#### 10.12.5 remove
Guideline: Always use `remove` to remove any files you created with `tmpnam`.

This is simply good manners, and ensures temporary files names are not
left on the system.

#### 10.12.6 rename
Guideline: Always check the return value of `rename` to see if the
operation succeeded.

If `rename` fails and the file existed previously, it is still known by
its original name.

See also [Guideline 12.1](#121-function).

#### 10.12.7 rewind
Guideline: Do not use `rewind`.

Unlike the other file-positioning functions, `rewind` clears the error
indicator for a stream. It also reports no failures. Use `fseek(stream,
0, SEEK_SET)` and `clearerr(stream)` as needed instead.

#### 10.12.8 setbuf
Guideline: Use `setvbuf` instead of `setbuf`.

`setvbuf` will get you more control. But be aware it is usually best to
let the Standard C library decide how to buffer input/output.

#### 10.12.9 tmpfile
Guideline: Use `tmpfile` instead of `tmpnam` wherever possible.

`tmpfile` opens the file for you and arranges to have it closed and
removed on program termination. tmpnam requires you to assume more of
the responsibilities.

### 10.13 <stdlib.h\>
------------

#### 10.13.1 Heap Overhead

10.13.1.1 Guideline: Gather related data into a structure and allocate it all at once. Do *not* gather unrelated data just to save heap overhead.

Gathering related data into a structure is good programming practice.
But do not do it at the cost of placing unrelated data into the
structure.

References: Plauger Chapter 13.

10.13.1.2 Guideline: Allocate data objects with similar lifetimes all at once, then free them at about the same time. Do *not* advance or defer unrelated heap operations just to minimize fragmentation.

Allocating and freeing data objects at about the same time is good
programming practice, but do not do it at the cost of advancing or
delaying allocation and freeing.

#### 10.13.2 `EXIT_FAILURE` and `EXIT SUCCESS`
Guideline: Use `EXIT_FAILURE` and `EXIT SUCCESS` as the argument to `exit` or
the return value from `main` to report unsuccessful and successful program
termination.

Use only these macros as the values returned by `main`. You can use zero
to indicate successful termination, but any other value will have
different meanings on different operating systems.

#### 10.13.3 `abort`
Guideline: Wherever possible, call `exit(EXIT_FAILURE)` instead of `abort`.

When you call `abort`, you cannot be sure that input/output streams are
flushed, files are closed properly, or temporary files are removed.

See also [Guideline 10.1](#101-asserth).

#### 10.13.4 `abs`

Guideline: Call `abs(x)` instead of writing the idiom `x < 0 ? --x : x`.

Many Standard C translators generate inline code for `abs` that is smaller
and faster than the idiom. Also, you avoid the occasional surprise when
you inadvertently evaluate twice an expression with side effects.

On a two's complement machine, `abs` can generate an overflow.

#### 10.13.5 atof
Guideline: Use `strtod` instead of `atof`.

The call `atof(s)` is equivalent to `strtod(s, NULL)`, except that `atof` is
not obliged to store `ERANGE` in `errno`. You also get no indication with
`atof` of how many characters from the string pointed to by `s` participate
in the conversion.

#### 10.13.6 calloc

##### 10.13.6.1 Initialising to zero.
Guideline: Do not use `calloc` to initialise floating-point values to
zeros, or pointers to null pointers.

A null pointer is not necessarily zero, and the floating-point
representation of 0 may not be all bits zero, so do not rely on `calloc`
to initialise to those values.

However, `calloc` will yield the value 0 for all integral types, including
'\0' for character types.

See also: [Section 7.5](#75-null-pointers).

References: Ref 5 Chapter 13.

##### 10.13.6.2 Product of Arguments
Guideline: Do not assume the product of `calloc`'s arguments is all that
matters.

An implementation can select a storage alignment for the allocated data
objects based on the size specified by the second argument. Thus you
should allocate an array of `N` `int` as

    calloc(N, sizeof (int))

a data object of type `struct x` as

    calloc(1, sizeof (struct x))

These second-argument considerations also apply to `malloc`.

### 10.14 <string.h\>
#### 10.14.1 <a name="10.14.1"></a> `mem` Functions

Guideline: If a string can contain null characters, specify its length
and use functions whose names begin with `mem`.

Guideline: Use `memmove` to copy a string if the source and destination
strings might overlap.

#### 10.14.2 <a name="10.14.2"></a> `strn` Functions
Guideline: If a string may or may not have a terminating null character,
specify its maximum length and use the functions beginning with `strn`.

#### 10.14.3 str Functions
Guideline: If a string definitely has a terminating null character,
specify only the string and use the remaining functions (see [10.14.1](#1041-overflow) and
[10.14.2](#10142-strn-functions)) whose names begin with `str`.

#### 10.14.4 `strcat`
Guideline: Use `strcat` if you have only two strings to concatenate, or
just a few short strings. Otherwise use `strcpy`.

Using `strcpy` in the situations described in the Guideline will save
repeated and ever-lengthening rescans of the initial part of the string.
Use this form:

    strcpy(s1 += strlen(s1), s2)

Ensure the destination array is large enough to hold the concatenated
string.

### 10.15 <time.h\>
Guideline: Always copy the value returned by a call to another (or the
same) function if you need the value beyond a conflicting function call.

The functions in `<time.h>` share two static data objects. All functions
that return a type of pointer to `char` return a pointer to one of these
data objects. All pointers that return a value of type pointer to `struct
tm` return a pointer to the other.

This means a call to one of the functions declared in `<time.h>` can
alter the value stored on behalf of an earlier call to another (or the
same) function. Therefore, if you need the value beyond a conflicting
function call, be careful to copy it.

## 11 SUPPORT LIBRARIES
Guideline: If Glasswall Solutions Limited has a library of support
routines that have been reviewed, debugged and tested, and released for
use, then those routines should be used rather than a developer writing
his her own routines to achieve the same functionality.

See also [Section 17](#17-useful-macro-and-function-examples).

## 12 ERROR HANDLING

### 12.1 Function
Guideline: If a function returns error information, then that error
information shall be tested.

Whether a function is user-defined, part of the Standard Library, or
part of a third party library, if it returns error information, then
that information should be tested by the caller immediately after the
function returns.

## 13 VALUES AND EXPRESSIONS
### 13.1 Leading Zeros
Guideline: Don't use octal constants (except zero) and octal escape
sequences.

Several guidelines in the document recommend laying out data in table
format, and aligning those data vertically. For example:

    struct atomic_number
    {
        char *name;
        int atomic_number;
    } atomic_numbers[] =
    {
        { "NITROGEN",    7 },
        { "NIOBIUM",    41 },
        { "NEODYNIUM",  60 },
        { "NOBELIUM",  102 },
    };

However, to make these line up a coder may well pad the atomic numbers so:

    struct atomic_number
    {
        char *name;
        int atomic_number;
    } atomic_numbers[] =
    {
        { "NITROGEN",  007 },
        { "NIOBIUM",   041 },
        { "NEODYNIUM", 060 },
        { "NOBELIUM",  102 },
    };

Unfortunately, this makes them wrong. In C, any integer constant that
begins with a zero is interpreted as an octal number.

To obviate this, do not use octal numbers or escape sequences in your
code.

References: MISRA-C:2004 Rule 7.1.

### 13.2 Multiline Strings
Guideline: Lay out multiline strings over multiple lines.

If a string has embedded newline characters, but the entire string won't
fit on a single line, then break the string after each newline and
concatenate the pieces:

    static const char usage[] = "Usage: dump <file> [-full]\n"
                                "(Use -full option for full dump)\n"
                                ;

This makes the internal appearance of the string mirror its printed appearance.

References: K&R2 §A.2.6.

### 13.3 Comma Operator
Guidline: Don't use commas to sequence statements.

The comma operator can reduce the readability of code, so their use is
not recommended.

References: MISRA-C:2004 Rule 12.10; K&R2 §A.7.18.

### 13.4 Constants
Guideline: Use symbolic constants to give numbers meaningful names.

Raw numbers that suddenly appear in the middle of a program are often
mysterious, frequently confusing, always a potential source of errors,
and hard to change in a systematic way.

Replace raw literals with a pre-processor macro whose name explains the
meaning of the numbers:

    #define   MOLYBDENUM_ATOMIC_NUMBER   42
    /* and later ... */
    printf("%d\n", count * MOLYBDENUM_ATOMIC_NUMBER);

See [§7.7](#77-booleans).

References: Ref. 7, Appendix E; Ref. 2, §1.4.

## 14 VARIABLES

### 14.1 Global Variables
Guideline: Avoid using global variables.

Using local variables increases the coupling of your code. If two
otherwise unrelated sections of code both use a global variable, those
two pieces of code can interact with each other in very subtle ways,
just by the way they interact with that global variable.

### 14.2 Initialisation
Guideline: Initialise all automatic variables.

The initial value of an automatic object not explicitly initialised is
undefined; therefore, all automatic variables must be explicitly
initialised before read.

References: MISRA-C:2004 Rule 9.1; K&R2 §2.4, §4.9, §A.8.7.

### 14.3 Scope
Guideline: Declare data objects within functions at the innermost possible nesting level.

It is common for programmers to declare all the variables used in a
function at the top of the function, followed by the processing.
However, the control logic in the function may mean variables are
declared that are never used, and can clutter the code, making it
difficult for a maintainer to understand the process. So localise
variables at the innermost possible level. For example:

    if (validate_agents)
    {
        int agent_num;
        for (agent_num = AGENT_NUM_MIN; agent_num < AGENT_NUM_MAX; ++agent_num)
        ...
    }

In this example, `agent_num` is required only if `validate_agents` is true.

## 15 CONTROL STRUCTURES

### 15.1 Linear Coding
Guideline: Reject as many iterations as possible, as early as possible.

Another guideline recommends coding in paragraphs (See [6.9](#69-chunking)). It's also a
good idea to code in paragraphs. Don't wait until you have all your data
assembled before you start processing. It's more efficient, and often
more comprehensible, to verify as you go.

Checking data as soon as it's available means you can short-circuit
sooner if the data are unacceptable. Also, the resulting sections of
code are specific to each datum, rather than to one phase of the
processing. That means your code chunks are better focused on the
distinct elements of the problem domain, rather than on the more complex
interactions between those elements.

So, instead of this:

    /* NON-CONFORMANT */
    int i;
    int total = 0;
    for (i = 0; i \< nclients; ++i)
    {
        int value;
        int projected;
        Client_t *client;

        client = &clients[i];

        /* calculate current and future client value */
        value = client-\>volume \* client-\>rate;
        projected = client-\>activity \* value;
        
        /* verify client is active, worth watching, and worth keeping \... */
        if (client->activity
            && value > WATCH_LEVEL
            && projected >= KEEP_LEVEL
        )
        {
            /* if so, add in the client's expected contribution */
            total += projected * client-\>volatility;
        }
    }

You can generate and test each datum sequentially, like so:

    for (i = 0; i \< nclients; ++i)
    {
        int value;
        int rate;
        int projected;
        Client_t *client;

        client = &clients[i];
        /* verify active client */
        if (!client->activity)
            continue;

        /* calculate current client value and verify client is worth watching ...*/
        value = client->volume * client->rate;
        if (value < WATCH_LEVEL)
            continue;

        /* compute likely client future value and verify client is worth keeping ... */
        projected = client->activity * value;
        if (projected < KEEP_LEVEL)
            continue;

        /* Add in the client's expected contribution */
        total += projected * client->volatility;
    }

NOTE: Use of `continue` is non-conformant with MISRA-C:2004 Rule 14.5, but
these Guidelines do not ban its use.

## 16 UNDEFINED BEHAVIOURS
Guideline: C code shall not be written that invokes undefined behaviour.

The C Standard defines undefined behaviour thus:

> Behaviour, upon use of a nonportable or erroneous program construct or
> of erroneous data, for which this International Standard imposes no
> requirements.

This means the C Standard imposes *no* requirements on the behaviour of
a compiler faced with an instance of undefined behaviour. The compiler
(more importantly, any generated code) can do absolutely anything.

In particular, there is no guarantee that only the undefined part of the
program will behave badly and the rest of the program will perform
normally.

It is perilous to think that you can tolerate undefined behaviour in a
program. The code is broken.

The following paragraphs detail all the cases that invoke undefined
behaviour. None of these shall be used in C source code developed by
Glasswall Solutions Limited.

### 16.1 Lexical Conventions - Constants -- Character Constants
------------------------------------------------------

16.1.1 The octal and hexadecimal escapes have no limit on the number of digits, but the behaviour is undefined if the resulting character value exceeds that of the largest character.

16.1.2 When specifying an escape sequence, if the character following the \ is not one of those specified, the behaviour is undefined.

16.1.3 If an octal or hexadecimal escape is used to specify a wide character constant, and its value exceeds that representable with `wchar_t`, the effect is undefined.

### 16.2 Lexical Conventions -- String Literals

16.2.1 The behaviour of a program that attempts to alter a string literal is undefined.

16.2.2 Concatenation of ordinary and wide string literals is undefined.

### 16.3 Conversions — Integer and Floating

16.3.1 When a value of floating type is converted to integral type, the fractional part is discarded; if the resulting value can not be represented in the integral type, the behaviour is undefined.

16.3.2 When a value of integral type is converted to floating, and the value is out of range, the behaviour is undefined.

### 16.4 Conversions — Floating Types
16.4.1  When a more precise floating value is converted to a less precise floating type, and the value is out of range, the behaviour is undefined.

### 16.5 Expressions - Postfix Expressions - Function Calls
16.5.1 If the function declaration in scope for a call is old-style, and the number of arguments disagrees with the number of parameters in the definition of the function, the effect of the call is undefined.

### 16.6 Expressions - Multiplicative Operators

16.6.1 If the second operand of `/` or `%` is 0, the result is undefined.

### 16.7 Expressions - Additive Operators
16.7.1 If one operand of `+` is a pointer to an object in an array, and the other is a value of integral type, the result is undefined if the sum pointer points outside the bounds of the array, except at the first location beyond the high end.

16.7.2 If two pointers to objects of the same type are subtracted, and the pointers do not point either to the same array or to the first location beyond the high end, the result is undefined.

### 16.8 Expressions - Shift Operators
16.8.1 If the right operand of `<<` and `>>` is negative, or greater than or equal to the number of bits in the left expression's type, the result is undefined.

### 16.9 Expressions - Relational Operators
16.9.1 Pointer comparison is defined only for parts of the same object, and in the case of an array, to the first location beyond the high end; otherwise it is undefined.

### 16.10 Preprocessing
16.10.1 The effect of white space characters other than space and horizontal tab is undefined within preprocessor lines.

## 16.11 Preprocessing - Macro Definition and Expansion
16.11.1 Regarding `##`: if invalid tokens are produced, or if the result depends on the order of processing of the `##` operators, the effect is undefined.

### 16.12 Preprocessing - File Inclusion
16.12.1 In the control line `#include <`*filename*`>`, if the name *filename* contains any of double quote ("), single quote ('), backslash (\\) or forward slash followed immediately by asterisk (/*), the effect is undefined.

16.12.2 Similarly, in the control line `#include "`*filename*`"`, if the name *filename* contains any of single quote ('), backslash (\\) or forward slash followed immediately by asterisk (/*), the effect is undefined.

Thus, sequences of characters that resemble escape sequences cause undefined behaviour. This means you *must not* use the Windows' directory delimiter character backslash (\\) when specifying a file path.

### 16.13 Input and Output: `<stdio.h`> - File Operations

16.13.1 `int fflush(FILE *stream)`: If `stream` is an input stream, the result is undefined.

### 16.14 Input and Output: `<stdio.h>` - Formatted Output
16.14.1 `printf`, `fprintf`, `sprintf`: If the character after the `%` is not a conversion character, the behaviour is undefined.

### 16.15 String Functions: `<string.h>`
16.15.1 Except for `memmove`, the behaviour is undefined if copying takes place between overlapping objects.

### 16.16 Linkages of Identifiers
16.16.1 If, within a translation unit, the same identifier appears with both internal and external linkage, the behaviour is undefined.

### 16.17 Storage Duration of Objects
16.17.1 If an object is referred to outside of its lifetime, the behaviour is undefined.

###16.18 Conversions - Other Operands -- Pointers
16.18.1 A pointer to an object or incomplete type may be converted to a pointer to a different object or incomplete type. If the resulting pointer is not correctly aligned for the pointed-to type, the behaviour is undefined.

### 16.19 Expressions - Postfix Operators - Function Calls
16.19.1 If the number of arguments does not equal the number of parameters, the behaviour is undefined.

16.19.2 If the function is defined with a type that includes a prototype, and either the prototype ends with an ellipsis (, ...) or the types of the arguments after promotion are not compatible with the types of the parameters, the behaviour is undefined.

16.19.3 If the function is defined with a type that does not include a prototype, and the types of the arguments after promotion are not compatible with those of the parameters after promotion, the behaviour is undefined, except for the following cases:

-   one promoted type is a signed integer type, the other promoted type
    is the corresponding unsigned integer type, and the value is
    representable in both types;

-   both types are pointers to qualified or unqualified versions of a
    character type or void.

### 16.20 Character Handling
16.20.1 The header `<ctype.h>` declares several functions useful for classifying and mapping characters. In all cases the argument is an `int`, the value of which shall be representable as an `unsigned char` or shall equal the value of the macro `EOF`. If the argument has any other value, the behaviour is undefined.

### 16.21 Environment - Hosted Environment
16.21.1 If a program in a hosted environment does not define a function named `main` using one of these specified forms (or equivalent, e.g. `argv` can be written as `char ** argv`, and so on), the behaviour is undefined:

    int main(void) { /* ... */ }
    int main(int argc, char *argv[]) { /* ... */ }

## 17 USEFUL MACRO AND FUNCTION EXAMPLES
### 17.1 Macros

#### 17.1.1 String Comparisons

    #define STREQ(s, t) (strcmp(s, t) == 0)
    #define STRLT(s, t) (strcmp(s, t) < 0)
    #define STRGT(s, t) (strcmp(s, t) > 0)

Example use:

    if (STREQ(ident, p->ident))
        return p;
<br />

    if (STRLT(authors->prev, curr_author))
        /* process ... */

#### 17.1.2 Miscellaneous Macros

    #define NELEMENTS(a) (sizeof(a) / sizeof(a\[0\]))

    /* Example usage */
    for (i = 0; i < NELEMENTS(names) && names[i] != NULL; ++i)
        /* do something with names[i] */
<br />

    /* Swap two objects */
    #define SWAP(a, b, t) (t = a, a = b, b = t)

    /* Example usage */
    SWAP(a[lo], a[mid], tmp);
<br />

    /* get a line of text; return EOF on fail, or string length on success */
    #define GETLN(s, n) ((fgets(s, n, stdin)==NULL) ? EOF : strlen(s))

    /* example usage */
    if ((filename_len = GETLN(filename, sizeof filename)) != EOF)
    for (i = 0; i < filename_len; ++i)
        /* process each character */
<br />

    /* start an infinite loop */
    #define FOREVER for (;;)

    /* Example usage */
    FOREVER
    {
        /* process forever; exit with break, return, or exit */
    }
<br />

    /* loop n times, using i to count. Do not use i in loop body */
    #define LOOPDN(r, n) for (r = n+1; --r > 0; )

    /* Example usage */
    LOOPDN(i, element_size)
    {
        SWAP(*a, *b, tmp);
        ++a, ++b;
    }
<br />


    /* copy a structure */
    #define STRUCTASST(a, b) memcpy(&(a), &(b), sizeof(a))

    /* Example usage */
    /* copy structure struct_b to structure struct_a */
    STRUCTASST(struct_a, struct_b);

### 17.2 Functions
---------

#### 17.2.1 substr

    /* Extract substring of length LEN starting at index POS in a source string, version 1 */
    char dest[LEN+1];
    strncpy(dest, &source[POS], LEN);
    dest[LEN] = '\0'; /* ensure \0 termination */
<br />

    /* Extract substring of length LEN starting at index POS in a source string, version 2 */
    char dest[LEN+1] = "";
    strncat(dest, &source[POS], LEN);
<br />

    /* Extract substring of length LEN starting at index POS in a source string, version 3 */
    char dest[LEN+1];
    strncat(dest, source + POS, LEN);

#### 17.2.2 globbing

    /* match: match str against pat; return 1 if a match, otherwise 0 */
    /* Example call: match("a*b.c", "aplomb.c"), this will return 1 */
    int match(const char *pat, const char *str)
    {
        switch (*pat)
        {
            case '\0': return !*str;
            case '*': return match(pat+1, str) || *str && match(pat, str+1);
            case '?': return *str && match(pat+1, str+1);
            default: return *pat == *str && match(pat+1, str+1);
        }
    }

#### 17.2.3 hex_to_int

    /* hex2int.c: Convert hexadecimal number in any locale */
    /* NOTE: This code does not check for overflow. That requires additional complexity. */
    #include <ctype.h>
    #include <string.h>

    int hex_to_int(const char *s)
    {
        int value;
        static const char xd[] = {"0123456789abcdefABCDEF"};
        static const char xv[] =
        {
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15,
            10, 11, 12, 13, 14, 15
        };

        for (value = 0; isxdigit(*s); ++s)
            value = (value << 4) + xv[strchr(xd, *s) - xd];
        return value;
    }

#### 17.2.4 Bit Manipulation Routines

    /* invert: invert the n bits of x that begin at position p */
    unsigned invert(unsigned x, int p, int n)
    {
        return x ^ (~(~0 << n) << (p+1-n));
    } /* invert */
<br />

    /* bitcount: count 1 bits in x (assume two's complement number system) */
    int bitcount(unsigned x)
    {
        int b;

        for (b = 0; x != 0; x &= x-1)
            ++b;
        return b;
    } /* bitcount */
<br />

    /* setbits: set n bits of x at position p with rightmost bits of y */
    /* leave all other bits unchanged */
    unsigned setbits(unsigned x, int p, int n, unsigned y)
    {
        return x & ~(~(~0 << n) << (p+1-n))
               | (y & ~(~0 << n)) << (p+1-n)
            ;
    } /* setbits */
<br />

    /* getbits: get n bits from position p */
    unsigned getbits(unsigned x, int p, int n)
    {
        return (x >> (p+1-n)) & ~(~0 << n);
    }

#### 17.2.5 Miscellaneous Routines

    /* escape: copy string t to string s; make newline & tab visible */
    void escape(char s[], char t[])
    {
        int i, j;

        for (i = j = 0; t[i] != '0'; i++)
            switch (t[i])
            {
                case '\n':
                    s[j++] = '\\';
                    s[j++] = 'n';
                    break;

                case '\t':
                    s[j++] = '\\';
                    s[j++] = 't';
                    break;
                
                default:
                    s[j++] = t[i];
                    break;
            }
        s[j] = '\0';
    } /* escape */

## 18 TOOL SUPPORT
The best analysis tool is peer review, some kind of informal code
review, or formal code inspection. But analysis and metrics tools can
provide in-depth analysis of code that those processes can't. What
follows are suggestions for such tools.

[Collaborator](https://smartbear.com/product/collaborator/overview/)<br />
A code review tool which enables reviews to be conducted easily.
Supports threaded conversations by file and line number. All
conversations and actions are tracked like newsgroups, and real-time
web-based contextual chat is supported.

[Doxygen](https://www.doxygen.nl/index.html)<br />
Doxygen is a documentation system which can generate an on-line
documentation browser, extract the code structure from undocumented
source files, and create normal documentation.

[Imagix 4D](https://www.imagix.com/products/source-code-analysis.html)<br />
Helps software developers comprehend complex or legacy C Code.

[QA·C, Programming Research Limited (PRQA)](https://www.perforce.com/products/helix-qac)<br />
Advanced static analysis for C and C++. Provides bug detection and
compliance to coding standards (including MISRA-C:2004). PRQA can create
customer specific compliance modules.

[Splint](http://splint.org/)<br />
A tool for statically checking C programs for security vulnerabilities and coding mistakes.

[SourceMonitor](http://www.campwoodsw.com/sourcemonitor.html)<br />
Analyses source code and identifies the relative complexity of the modules.

## 19 TESTS
Guideline: Run Plauger's simple test programs on your implementation to validate the Standard C library implementation.

Ref *5* includes simple test programs for each of the Standard C
Libraries. Each program tests part or all of the facilities provided by
one of the standard headers in the Standard C library. The tests focus
primarily on external behaviour, so provide, essentially, a validation
suite. Some implementation errors are so common, and pernicious, that
some of the programs test internal structure.

These programs are available to test the Standard C library
implementation on your platform, and it is worth using them.

## 20 C CODING GUIDELINES
This appendix lists the complete set of guidelines presented in this
document. A hyperlink to the section heading under which each guideline
appears is provided in square brackets.

**Element Header**

-   Prefix each source file with a template header. \[[Source File
    Element Header](#51-element-header)\]

-   Prefix each header file with a template header. \[[Source File
    Element Header](#51-element-header)\]

-   Prefix each unit with a template header. \[[Unit Header](#52-unit-header)\]

**Code Layout**

-   Where present, sections of code should be laid out in the following
    order, prefixed by the comment shown. \[[Module Layout](#61-module-layout)\]

-   Brace and parenthesize using BSD and GNU style. \[[Bracketing](#62-bracketing)\]

-   Separate your control keywords from the following opening bracket. \[[Keywords](#63-keywords)\]

-   Don't separate subroutine or variable names from the following
    opening bracket. \[[Subroutines and Variables](#64-subroutines-and-variables)\]

-   Use 78-column lines. \[[Line Lengths](#65-line-lengths)\]

-   Use four-column indentation levels. \[[Indentation](#66-indentation)\]

-   Indent with spaces, not tabs. \[[Tabs](#67-tabs)\]

-   Never place two statements on one line. \[[Blocks](#68-blocks)\]

-   Code in paragraphs. \[[Chunking](#69-chunking)\]

-   Corresponding items shall be aligned vertically. \[[Vertical Alignment](#610-vertical-alignment)\]

-   Break long expressions before an operator. \[[Breaking Long Lines](#611-breaking-long-lines)\]

-   Always break a long expression at the operator of the lowest
    possible precedence. \[[Breaking by Precedence](#612-breaking-by-precedence)\]

-   Break long assignments before the assignment operator. \[[Assignments](#613-assignments)\]

-   Enforce your chosen layout style automatically. \[[Automated Layout](#614-automated-layout)\]

**C Implementation**

-   Ensure header files are idempotent. \[[Header Files](#71-header-files)\]

-   Do not define functions or objects in header files. \[[Header File Content](#72-header-file-content)\]

-   Do not use the `goto` statement. \[[Goto](#73-goto)\]

**Functions**

-   Functions should be as short as practicable. \[[Functions](#74-functions)\]

-   Use the type-qualifier `const` for non-scalar function parameters.
     \[[Functions](#74-functions)\]

-   Comment the terminating brace of a function with its name. \[[Functions](#74-functions)\]

-   Prefix function names in a separately compiled group of elements with a mnemonic. \[[Functions](#74-functions)\]

**Null Pointers**

-   Use the `NULL` macro instead of 0 in pointer contexts. \[[The NULL Macro](#75-null-pointers)\]

-   A null pointer shall be cast to its correct type when used as an
    argument to a function call. \[[Pointer Arguments](#752-pointer-arguments)

-   A function pointer shall not be converted to type `void *`.
    \[[Function Pointers](#753-function-pointers)

**Preprocessor**

-   In the definition of a function-like macro each instance of a
    parameter shall be enclosed in parentheses unless it is used as the
    operand of `#` or `##`. \[[Preprocessor](#76-preprocessor)\]

-   C macros shall expand only to a braced initialiser, a constant, a
    parenthesised expression, a type qualifier, a storage class
    specifier, or a do-while-zero construct. \[[Preprocessor](#76-preprocessor)\]

**Booleans**

-   Define pre-processor macros or enumeration constants for true and
    false values, which evaluate to 1 and 0. \[[Defining TRUE and FALSE](#772-use-of-true-and-false)\]

-   Only assign TRUE and FALSE to a Boolean variable, never use them in
    comparisons. \[[Defining TRUE and FALSE](#772-use-of-true-and-false)\]

**Pointer Declarations**

-   When declaring or defining a pointer variable, always ensure there
    is no whitespace between the `*` and the identifier. \[[Pointer Declarations](#78-pointer-declarations)\]

**Naming Conventions**

-   Name all objects.

-   No identifier shall begin with an underscore. \[[Identifiers](#81-identifiers)\]

-   Identifiers (internal and external) and pre-processor macro names
    shall not rely on the significance of more than 31 characters.
    \[[Identifiers](#81-identifiers)\]

-   Use grammatical templates when forming identifiers and function
    names. \[[Identifiers](#81-identifiers)\]

-   Name Booleans after their associated test. \[[Booleans](#82-booleans)\]

-   Mark variables that store pointers. \[[Pointer Variables](#83-pointer-variables)\]

-   Name arrays in the plural. \[[Arrays](#84-arrays)\]

-   Maintain consistency in the use of multiword identifiers.
    \[[Multiword Identifiers](#85-multiword-identifiers)\]

-   Abbr idents by prefx. \[[Abbreviations](#86-abbreviations)\]

-   Abbreviate only when the meaning remains unambiguous. \[[Ambiguous Abbreviations](#87-ambiguous-abbreviations)\]

-   Avoid using inherently ambiguous words in names. \[[Ambiguous Names](#88-ambiguous-names)\]

-   Use K&R2 style use of case. \[[General Naming Conventions](#89-general-naming-conventions)\]

**Documentation**

-   Use full-line comments to explain the algorithm. \[[Algorithmic Documentation](#91-algorithmic-documentation)\]

-   Use end-of-line comments to point out subtleties and oddities. \[[Elucidating Comments](#92-elucidating-comments)\]

-   Comment anything that has puzzled or tricked you. \[[Defensive Documentation](#93-defensive-documentation)\]

-   Consider whether it's better to rewrite than to comment. \[[Indicative Documentation](#94-indicative-documentation)\]

-   Check the spelling, syntax, and sanity of your documentation. \[[Proofreading](#95-proofreading)\]

**Library Functions**

-   Use C's Standard Library functions wherever possible.

-   Use `assert` only in development code. \[[<assert.h\>](#101-asserth)\]

-   Use the functions declared in `<ctype.h>` to test or alter
    characters that you read in with `fgetc()`, `getc()`, `getchar()`.
    \[[<ctype.h\>](#102-ctypeh)\]

-   Do not assume letter codes are adjacent. \[[Letter Codes](#1022-letter-codes)\]

-   Do not use `errno`. \[[<errno.h\>](#h3-id103-errnoh-3812103-errnohh3)\]

-   To avoid overflow, make sure that no value ever exceeds `DBL_MAX` in
    magnitude. \[[<float.h\>](#h3-id104-floath-3780104-floathh3)\]

-   To avoid underflow, make sure that no value ever goes below `DBL_MIN`
    in magnitude. \[[Underflow](#1042-underflow)\]

-   Where possible, perform a check when adding a small magnitude to a
    large one. \[[Significance Loss](#1043-significance-loss)\]

-   Wherever possible, use the macros provided in `<limits.h>` to test
    the execution environment. Do not do experiments on the
    pre-processor. \[[<limits.h\>](#105-limitsh)\]

-   Be aware of where library behaviour changes with locale.
    \[[<locale.h\>](#106-localeh)\]

-   Do not use `setjmp` or `longjmp`. \[[<setjmp.h\>](#108-setjmph)\]

-   When using the macros in `<stdarg.h>` be aware of the caveats listed
    in this Guideline. \[You must declare a function explicitly as
    having a variable argument list, (call it f). Its argument list must
    end in ellipsis (, ...), both in its definition and any
    declarations. \[<stdarg.h\>](#1010-stdargh)\]

-   Use `size_t` *anywhere* your program performs array subscripting or
    address arithmetic. \[[<stddef.h\>](#1011-stddefh)\]

-   Function `gets` shall not be used. \[[gets](#10121-gets)\]

-   Use `getc` instead of `fgetc`. \[[getc](#10121-gets)\]

-   Use `putc` instead of `fputc`. \[[putc](#10123-putc)\]

-   Call `fread` in a way such that it can report how many additional
    characters it read (if any). \[[fread](#10124-fread)\]

-   Always use `remove` to remove any files you created with `tmpnam`.
    \[remove](#10125-remove)\]

-   Always check the return value of `rename `to see if the operation
    succeeded. \[[rename](#10126-rename)\]

-   Do not use `rewind`. \[[rewind](#10127-rewind)\]

-   Use `setvbuf` instead of `setbuf`. \[[setbuf](#10128-setbuf)\]

-   Use `tmpfile` instead of `tmpnam` wherever possible. \[[tmpfile](#10129-tmpfile)\]

-   Gather related data into a structure and allocate it all at once. Do
    *not* gather unrelated data just to save heap overhead.
    \[[<stdlib.h\>](#h3-id1013-stdlibh-33051013-stdlibhh3)\]

-   Allocate data objects with similar lifetimes all at once, then free
    them at about the same time. Do *not* advance or defer unrelated
    heap operations just to minimize fragmentation. \[[<stdlib.h\>](#h3-id1013-stdlibh-33141013-stdlibhh3)\]

-   Use `EXIT_FAILURE` and `EXIT SUCCESS` as the argument to exit or the
    return value from main to report unsuccessful and successful program
    termination. \[[EXIT_FAILURE and EXIT SUCCESS](#10132-exit_failure-and-exit-success)\]

-   Wherever possible, call `exit(EXIT_FAILURE)` instead of `abort`.
    \[[abort](#10133-abort)\]

-   Call `abs(x)` instead of writing the idiom `x < 0 ? --x : x`. \[[abs](#10134-abs)\]    

-   Use `strtod` instead of `atof`. \[[atof](#10135-atof)\]

-   Do not use `calloc` to initialise floating-point values to zeros, or
    pointers to null pointers. \[[calloc](#10136-calloc)\]

-   Do not assume the product of `calloc`'s arguments is all that matters.
    \[[calloc](#10136-calloc)\]

-   If a string can contain null characters, specify its length and use
    functions whose names begin with `mem`. \[<string.h\>](#1014-stringh)\]

-   Use `memmove` to copy a string if the source and destination strings
    might overlap. \[[<string.h\>](#1014-stringh)\]

-   If a string may or may not have a terminating null character,
    specify its maximum length and use the functions beginning with
    `strn`. \[[<string.h\>](#1014-stringh)\]


-   If a string definitely has a terminating null character, specify
    only the string and use the remaining functions whose names begin
    with `str`. \[[<string.h\>](#1014-stringh)\]


-   Use `strcat` if you have only two strings to concatenate, or just a
    few short strings. Otherwise use strcpy. \[[<string.h\>](#1014-stringh)\]


-   Always copy the value returned by a call to another (or the same)
    function if you need the value beyond a conflicting function call.
    \[[<time.h\>](#1015-timeh)\]

**SUPPORT LIBRARIES**

-   If Glasswall Solutions Limited has a library of support routines
    that have been reviewed, debugged and tested, and released for use,
    then those routines should be used rather than a developer writing
    his or her own routines to achieve the same functionality. \[[Support Libraries](#11-support-libraries)\]

**Error Handling**

-   If a function returns error information, then that error information
    shall be tested. \[[Function](#121-function)\]

**Values and Expressions**

-   Don't use octal constants (except zero) and octal escape sequences.
    \[[Leading Zeros](#131-leading-zeros)\]

-   Lay out multiline strings over multiple lines. \[[Multiline Strings](#132-multiline-strings)\]

-   Don't use commas to sequence statements. \[[Comma Operator](#133-comma-operator)

-   Use symbolic constants to give numbers meaningful names.
    \[[Constants](#134-constants)

**Variables**

-   Avoid using global variables. \[[Global Variables](#141-global-variables)\]

-   Initialise all automatic variables. \[[Initialisation](#142-initialisation)\]

-   Declare data objects within functions at the innermost possible
    nesting level. \[[Scope](#143-scope)\]

**Control Structures**

-   Reject as many iterations as possible, as early as possible.
    \[[Linear Coding](#151-linear-coding)\]

**Undefined Behaviours**

The Undefined Behaviours section lists many guidelines in the form of
explicatory paragraphs; therefore, they are not reproduced here. \[[Undefined Behaviours](#16-undefined-behaviours)\]