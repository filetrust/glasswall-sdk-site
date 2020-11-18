---
title: How to Create a Soft Link for BDDL Include files
---

1. Open a Windows terminal session with Administrator privileges:
    
    1.1 Press **Windows**+**X** (or right click the **Start** button) then choose **Command Prompt (Admin)**. If you see **Windows PowerShell (Admin)** instead, click that.<br />

2. In the terminal session, change directory to the Miraplacid
    `includes` directory:
    
        CD C:\ProgramData\Miraplacid\BinaryDOM\Includes\
        
3. Create a soft link to the BDDL directory in your Git repository named `office_bddl`

        MKLINK /D office_bddl c:\GitHub\BDDL_DEVELOPERS\BDDL_DEVELOPMENT\glasswall.classic\data.definitions.and.rules\MSOffice\bddl\
        
    You will see the following, if successful:
    
        symbolic link created for MS-DOC <<===>> c:\GitHub\BDDL_DEVELOPERS\...
        
    If you see 
    
        Cannot create a file when that file already exists.
        
    it's because the soft link exists, remove it by running this command:
    
        RMDIR office_bddl
        
4. Close down the Administrator terminal session.

5. In your BDDL files you can now do this:
 
        include "office_bddl/sttb.bdd"
        
    which will include file `sttb.bdd`.
       
### **AUTHOR**
Martin O'Brien <mobrien@glasswallsolutions.com>

### **COPYRIGHT**

&copy; 2013 Glasswall Solutions Limited