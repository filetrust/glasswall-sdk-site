---
title: 8.1.9.6.4 Configuration Functions
sidebar_label: 8.1.9.6.4 Configuration Functions
---
## Functions

- int [**GWFileConfigGet **](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Configuration%20Functions.htm#GWFileCo)(wchar\_t \*\*configurationBuffer, size\_t \*outputLength)

- int [**GWFileConfigRevertToDefaults**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Configuration%20Functions.htm#GWFileCo3) (void)

- int [**GWFileConfigXML**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Configuration%20Functions.htm#GWFileCo2) (wchar\_t \*xmlstring)

- int [**GWGetAllIdInfo**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Configuration%20Functions.htm#GWGetAll) (size\_t \*bufferLength, void \*\*outputBuffer)

- int [**GWGetIdInfo**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Configuration%20Functions.htm#GWGetIdI) (uint32\_t issueId, size\_t \*bufferLength, void \*\*outputBuffer)

These functions enable the operation of the Glasswall processing to be configured. Glasswall library Configuration can be updated using **GWFileConfigXML()**.

Functions are provided to retrieve the current configuration, and to reset the current configuration to Glasswall default values.

Glasswall is single threaded.

## GWFileConfigGet

**int GWFileConfigGet (wchar\_t \*\* **_ **configurationBuffer** _ **, size\_t \* ** _ **outputLength** _**)**

This function retrieves the current Glasswall library configuration via an XML string that conforms to the Configuration Management XSD.

In the event of an error configurationBuffer will be returned as a NULL pointer and outputLength will be set to zero.

**Parameters**

| out | _configurationBuffer_ | Location to which the configuration should be written. |
| --- | --- | --- |
| out | _outputLength_ | Size of the configuration buffer being returned in bytes. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS)

## GWFileConfigRevertToDefaults

**int GWFileConfigRevertToDefaults (void)**

This function reverts the Glasswall library&#39;s active configuration to the hard-coded default values, which is everything set to allow. This function removes any changes introduced by calls to **GWFileConfigXML()**.

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS)

This example code demonstrates the library configuration being reset to default values, which are then retrieved and printed by the client application
```
// configuration buffer and length 
wchar_t *configurationBuffer	= NULL; 
size_t configurationBufferLength = 0;

if (eGwFileStatus_Success == GWFileConfigRevertToDefaults())
{
    if(eGwFileStatus_Success == GWFileConfigGet(&configurationBuffer, 
&configurationBufferLength))
    { 
           printLibraryConfig(configurationBuffer, configurationBufferLength);
    }
    else
    {
           // error handling
    }
}
else
{
     // error handling
}

// release resources including the global buffer 'fileImage' 
GWFileDone();
```

## GWFileConfigXML

**int GWFileConfigXML (wchar\_t \* **_ **xmlstring** _**)**

This function applies the given content management settings to the Glasswall library, which are later used when processing files. The content management settings are specified as a XML string that conforms to the Configuration Management XSD.

This function should be called before any documents are processed. If this function is not called, then the content management settings will be left in their default state where everything is set to allow. Content management switches that have not been specified will not be updated and will remain in their existing state.

| in | _xmlstring_ | configuration string. |
| --- | --- | --- |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS)

This example code demonstrates the required library configuration string being collected by the client application and used to configure the Glasswall library prior to processing a PDF document.
```
// managed file output buffer and length 
void *fileImage	= NULL;
size_t fileImageLength = 0;

// Library configuration
wchar_t* cmPolicy = getClientApplicationConfigurationXML();

if (eGwFileStatus_Success == GWFileConfigXML(cmPolicy))
{
if(eGwFileStatus_Success == GWFileProtect(L"C:\\data\\temp1.pdf", L"pdf", 
&fileImage, &fileImageLength))
    {
        // process the managed file image
    }
}
else
{
// error handling
}

// release resources including the global buffer 'fileImage' 
GWFileDone();
```

## GWGetAllIdInfo

**int GWGetAllIdInfo (size\_t \* **_ **bufferLength** _ **, void \*\* ** _ **outputBuffer** _**)**

This function returns a buffer containing an XML file populated with issue ID description for all issue ID ranges
```
<gw:IssueInformationGroups>
   <gw:IssueInformationGroup>
       <gw:IssueIDRangeStart>100728832</gw:IssueIDRangeStart>
       <gw:IssueIDRangeEnd>100794367</gw:IssueIDRangeEnd>
       <gw:GroupDescription>Enhanced Metafile Format Instances</gw:GroupDescription>
   </gw:IssueInformationGroup>
   <gw:IssueInformationGroup>
       <gw:IssueIDRangeStart>100859904</gw:IssueIDRangeStart>
       <gw:IssueIDRangeEnd>100925439</gw:IssueIDRangeEnd>
       <gw:GroupDescription>Emf Bitmaps Instances</gw:GroupDescription>
   </gw:IssueInformationGroup>
...
</gw:IssueInformationGroups>
```

**Parameters**

| out | _outputBuffer_ | The output file buffer containing the XML, which is encoded in ASCII. |
| --- | --- | --- |
| out | _bufferLength_ | Length of the output buffer that has been allocated in bytes. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)

## GWGetIdInfo

**int GWGetIdInfo (uint32\_t I, size\_t \* **_ **bufferLength** _ **, void \*\* ** _ **outputBuffer** _**)**

This function returns a buffer containing the description for the given issue ID.

**Parameters**

| in | _issueId_ | Issue ID value |
| --- | --- | --- |
| out | _outputBuffer_ | The output buffer containing description string, which is encoded in ASCII. |
| out | _bufferLength_ | Length of the output buffer that has been allocated in bytes. |

**Returns**

- [**eGwFileStatus**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall%20Return%20Status%20Definitions.htm#eGwFileS) ** / ** [**Process Return Status**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Document%20Processing%20Arguments.htm#Process)