---
title: 4.3 Manual Testing 
sidebar_label: 4.3 Manual Testing 
---

## Introduction

The first thing when considering new cameras is the scope of the camera and the variations within that file type, for instance the XML camera which has 3 major file types and a complete suite of Content Management requires a lot more research and thorough testing than The RTF camera which only scans one type of file and has minimal content to manage.

This document is to act as a guide only as for every type of file a slightly unique approach will be required.

# Data

## Mass data sets

When testing a new Camera having a comprehensive data set is essential with as much real world data as possible, for an alpha version of a camera a few hundred will be sufficient, for a beta closer to 100,000 files is roughly what is required and for a fully supported and implemented camera then one million files should be the minimum that you should be aiming for.
Most of the mass data should be downloaded from the internet, it must be either royalty free or covered by the creative commons licence, to find the required quantities a certain amount of rummaging on line will be required and web crawlers will prove invaluable. 


## Versioned data sets

When creating data sets it is essential to ensure that as much structural coverage and complexity as possible is covered, different versions of the software that produces them need to be accounted for as does different versions of the file type, for instance Win-RAR has 5 different versions so care must be taken to ensure that all 5 versions are represented in the data sets.

For proprietary file types different versions of the software that create the data may also need to be accounted for.

## Content and considerations

The final things to consider when generating the new data sets is the various types of content available for the files, this includes things like embedded data, metadata or anything specific to that file type like lyrics in an MP4 file.

To ensure that all content is accounted for read the file specifications.

Considerations that must always be accounted for are Large files, anything greater than 200mb is considered to be a large file but ideally incrementally sized files up to 2gb would be best.

Lastly and most importantly negative data must be created, to do this use the DVLs to find areas in the file that checks are made and make changes there to try to force the issues.
If a rule exists in the DVL stating that a specific part of the file should be 001ab32c then modifying this to 00000000 should force a validation issue.



# Tests

## Basic functionality testing

Basic functionality testing is the testing required on a MVP or basic camera, this is to ensure that the files are being deconstructed and reconstructed correctly and that nothing is being missed or corrupted.

For this the first type of tests is conducting basic analysis and protect runs across a cross section of conforming data which is under 200 mb in size.
Basic checks need to be conducted to ensure that the regenerated files still open and are usable, for instance has a PDF lost content? does an MP3 play still? is the quality noticeably different? Has the mp4 lost video? These are the basic sorts of questions that should be asked and answered in these tests.
Also basic checks need to be made to ensure that the XML report is correctly formatted, the easiest way to do this is by validating it against the XSD.

Larger files have been proven to cause issues in the past and as such as part of basic functionality testing it is important to run a number of files between 200mb and 2gb in both analysis and protect modes to make sure that they behave in the same way as their smaller counterparts.

Non conforming files are the final things that are required to be tested at MVP stage of testing, Non-conforming files must fail validation in both analysis and protect modes and the failure messages must be related to the actual defect.
A combination of downloaded and manually corrupted files should be used for this but no files containing malware are to be used, with manually corrupted files the error message must match the manual corruption.

Every time a new camera is added it is essential to ensure it has been added to the GetFileTypeFromFile API and that the associated report is generated, the same is true for making sure that specific issues for the new file type have been added by running tests on the Get Issue from ID API.

## Content testing

Later in the lifecycle of a camera Content Management will be added, as this happens additional data must be added to test that.
Files containing every conceivable and supported variation of that content is to be produced remembering things such as Unicode characters and security vulnerabilities which must be accounted for.
When testing content then all 3 modes for Content management must be tested in every processing mode.

Allowed content must be left intact and unchanged without being mentioned in the analysis report.
Sanitised content must be moved in its entirety while leaving the rest of the file in a usable condition and without impacting any other content, it must be referenced directly as a sanitisation item in the analysis report.
Disallowed content must cause the file to fail validation with an error that relates to the disallowed content.

