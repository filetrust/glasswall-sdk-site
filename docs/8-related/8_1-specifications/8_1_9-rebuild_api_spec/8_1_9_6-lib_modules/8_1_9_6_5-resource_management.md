---
title: 8.1.9.6.5 Resource Management
sidebar_label: 8.1.9.6.5 Resource Management
---

These utilities may be used by the client to release allocated resource once Glasswall processing has been completed.

## Functions

- int [**GWFileDone**](#gwfiledone) (void)

## GWFileDone

**int GWFileDone (void )**

Called by the client to release any remaining dynamic resource when Glasswall processing and output files creation has been completed for a process file.

This is equivalent to releasing all dynamic resources in preparation for unloading the dynamic link library.

Note that this includes the release of any global buffers which have been allocated from the heap to provide a single level of &quot;client data separation&quot;.

**Returns**

- [**eGwFileStatus**](8_1_9_6_3-doc_proc/8_1_9_6_3_7-doc_proc_res/8_1_9_6_3_7_2-ret_stat_def.md#egwfilestatus)

**Remarks**

Glasswall GWFileToFileProtectLiteAndReport processing example.
```
// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
    createFolder("C:\\data\\output");

    if(eGwFileStatus_Success == 
GWFileToFileProtectLiteAndReport(L"C:\\data\\temp1.pdf", L"pdf", 
L"C:\\data\\output\\temp1.pdf", L"C:\\data\\output\\temp1.log"))
    {
        // process managed file
        // process report file
    }
}
else
{
    // error handling
}
```