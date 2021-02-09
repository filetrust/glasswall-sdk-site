---
title: 2.4.4 BDDL Soft Links
sidebar_label: 2.4.4 BDDL Soft Links
---

## HOW TO CREATE SOFT LINK FOR OFFICE BDDL INCLUDE FILES

 1. Ensure you have the latest commit of data.definitions.and.rules.

 2. Open an MS-DOS command shell with Administrator privileges:
 
    2.1  Press Windows+R
    2.2  Type cmd
    2.3  Press Ctrl+Shift+Enter
    2.3  Click 'Yes' in response to the question: "Do you want to allow
         this app to make changes to your device?".

 3. In the command prompt window, change directory to the Miraplacid
    'includes' directory:
    
        CD C:\ProgramData\Miraplacid\BinaryDOM\Includes\
        
 4. Create a soft link called 'office_bddl' to the BDDL directory in
    your Git workspace:

        MKLINK /D office_bddl c:\<Your Git Workspace path>\data.definitions.and.rules\Camera_Definitions\MSOffice\bddl\
        
    You will see the following, if successful:
    
        symbolic link created ...
        
    If you see 
    
        Cannot create a file when that file already exists.
        
    run
    
        RMDIR office_bddl
        
    then run the MKLINK command again as above.
        
 5. Close down the Administrator command shell window.

 6. In your BDDL files you can now do this:
 
        include "office_bddl/sttb.bdd"
        
    to include sttb.bdd, and, of course, specify other library files
    that are available.

AUTHOR: Martin O'Brien
COPYRIGHT (c) 2021 GLASSWALL SOLUTIONS LIMITED
