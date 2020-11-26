--- 
title: Adding OOXML Support to Beyond Compare
---

Make visible the internal content of files with file extensions .docx, .docm, .xlsx, .pptx, .pptm, and .xlsm using Beyond Compare 3.

## 1 Change the Folder Compare Settings

- Open the **Folder Compare** window

![](adding_ooxml-01-folder_compare_window.png)

- Untick **Excel** and **Word**.

- In **Enabled file formats** add '.rels' to the list of XML file types

![](adding_ooxml-02-add_rels.png)

## 2 Change Archive Handling

- Select **Options**:

![](adding_ooxml-03-select_options.png)

- Select **Folder Views** and change **Mask for Zip** to:


    *.zip;*.jar;*.ear;*.war;*.bcpkg;*.docx;*.docm;*.xlsx;*.pptx;*.pptm;*.xlsm

![](adding_ooxml-04-mask_for_zip_file.png)

## 3 Change Session Settings

Change **Session Settings** to make it easy to expand and see all OCP files fully expanded.

- Open **Session Settings**

![](adding_ooxml-05-open_session_settings.png)

- Tick **Expand Subfolders** and select **As folders always** under **Archive Handling**. 
- Select **Also update session defaults** at the bottom.

![](adding_ooxml-06-update_session_defaults.png)
