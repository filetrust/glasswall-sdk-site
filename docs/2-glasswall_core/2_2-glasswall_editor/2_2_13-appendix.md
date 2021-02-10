---
title: 2.2.13 Appendix - Languages Other Than C++
sidebar_label: 2.2.13 Appendix - Languages Other Than C++
---
All example code provided in this document so far have used C++ for calling the Glasswall Library.

Included with the SDK are four wrappers allowing use of the Glasswall Library with C#, Java, JavaScript and Python.

This section provides example code for the &#39;Hello Glasswall&#39; example in each of the four wrapper languages.

## JavaScript

### Environment

- The JavaScript wrapper requires Node.js version 10.16.3. More recent versions of Node may not be compatible.

- Additional required modules include  **ffi**  and  **ref**.
 Appropriate versions should be installed prior to running the test application.

- Ensure that the Core2 Libraries and all required folders are accessible to the wrapper.

### Test Application Code

The following code tests the wrapper code and runs the [**GW2LibVersion**](2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2libversion) function:
```
let path = require('path');

let main = function () {

   // Include the Glasswall JavaScript Wrapper module
   try {
        let engine_path = "c:\\temp\\glasswall_core2.dll";
        let glasswall = require("c:\\temp\\Core2JS.js");

        // Change working directory to allow correct loading of GW library and its sub-libraries
        process.chdir(path.dirname(engine_path.toLowerCase()));

        // Create an instance of the Glasswall Library
        var gw = new glasswall(engine_path);
    }
    catch (err) {
        console.log("\n  Unable to load Glasswall JavaScript wrapper");
        console.log(err)
    }

    //  Call the GWFileVersion API function
    console.log("> Request Library version...");
    console.log("> Library version: " + gw.GW2LibVersion());
};

if (require.main === module) {
    main();
}
```

### Test Results
```
> Request Library version...
> Library version: 2.0
```

## Python

### Prerequisites

The following code examples work with 64-bit versions of Python 2.7 and 3.8. The required dependencies are specified in the code examples.

### Test Application Code

The following code tests the wrapper code and runs the [**GW2LibVersion**](2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2libversion) function:
```
import sys
import logging
import Core2Py

def main():

    from Core2Py import Interface_GwCore2

    sys.path.append("C:\\temp\\Core2Py.py")
    print('Loading Library')
    gw = Interface_GwCore2("C:\\temp\\Core2\\glasswall_core2.dll")
    print('Done')
    libVer = gw.GW2LibVersion()
    print('> Request Library version... ')
    print('> Library version: ' + str(libVer.text))

if __name__ == "__main__":
    main()
```

### Test Results

If successful, the test will return the following:
```
> Request Library version...
> Library version: 2.0
```
## Java

### Prerequisites

- The Java wrapper requires a JRE to be installed. This wrapper has been tested with V8. Other versions may not be compatible.

- Ensure that a 64-bit version of the JRE is used.

- The Java wrapper requires all supporting files to be stored in the same directory as the wrapper itself. This means that the Core2 libraries and wrapper support files cannot be stored in subdirectories.

- Ensure that the Core2 Libraries and all required folders are accessible to the wrapper.

### Test Application Code

The following code tests the wrapper code and runs the [**GW2LibVersion**](2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2libversion) function:
```
import java.io.IOException;

public class Core2JavaTestApp
{
    public static void main(String argv[]) throws IOException
    {
        System.loadLibrary("Core2JavaBridge");
        Core2JavaBridge gw = new Core2JavaBridge();

        try
        {
            // Request Library Version
            System.out.println("> Request Library Version...");
            System.out.println("> Library Version: " + gw.GW2LibVersion());
        }
        catch (Exception error)
        {
            System.out.println("error - exception caught: " + error.getMessage());
        }
    }
}
```

### Test Results

If successful, the test will return the following:
```
> Request Library version...
> Library version: 2.0
```

## C#

### Prerequisites

- Ensure that the DLL (&quot;glasswall.core2.csharp.wrapper&quot;) is added as a reference to your environment to be able to use it.

- Ensure that the Core2 Libraries and all required folders are accessible to the wrapper.

### Test Application Code

The following code tests the wrapper code and runs the [**GW2LibVersion**](2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2libversion) function:
```
using glasswall.core2.wrapper;
using system;

class Program
{
    static void Main(string[] args)
    {
        Glasswall gw = new Glasswall(pathToLib);

        Console.WriteLine("> Request Library version...");
        Console.WriteLine("> Library Version: " + gw.LibVersion());
    }
}
```
### Test Results
```
> Request Library version...
> Library version: 2.0
```
