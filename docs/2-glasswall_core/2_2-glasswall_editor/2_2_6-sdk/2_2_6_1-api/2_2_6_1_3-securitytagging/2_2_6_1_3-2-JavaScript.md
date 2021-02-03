---
title: 2.2.6.1.3.2 JavaScript Wrapper
sidebar_label: 2.2.6.1.3.2 JavaScript Wrapper
---

## Environment

 - The JavaScript wrapper requires Node.js version 10.16.3. More recent versions of Node may not be compatible.
 - Additional required modules are:
    - node-ffi (Node.js Foreign Function Interface). The Node.js addon for loading and calling dynamic link libraries.
    - ref, the native addon for Node.js. This extends the Buffer class.
    - The node_modules directory contents, as supplied.
    - 
Ensure that the Core 2 libraries and all required folders are accessible to the wrapper.

## Example Code
The following code uses the JavaScript wrapper to process a file and place the tagged file in the specified directory. The tagged file is then inspected, and the tags contained within the file are extracted. This data is then saved in the specified directory.
```
// Demonstrate calls to the Security Tagging wrapper using JavaScript
 
const fs = require('fs');
const path = require('path');
const ref = require('ref');
 
function main() {
    // Begin process log
    const args = process.argv;
 
    console.log("Running demo...");
 
    let ifile = "B.docx";               // the file to be tagged
    let tags = "digitalsignature.xml";  // tags to be used
    let tagged_file = "B-tagged.docx"   // file created by GWSecuTag_RetrieveTagFile()
    let retrieved_tags = "retrieved_tags.xml"    // the tags retrieved from the tagged file
    let lib_file = "gw_securtag.dll"             // the sec tag library file DLL
    let wrapper_script = "Core2JS_sec_tag.js";   // the wrapper script 
 
    // Include the Glasswall JavaScript Wrapper module
    try {
        let glasswall = require(wrapper_script);
 
        // Create an instance of the Glasswall Library
        var gw = new glasswall(lib_file);
    }
    catch (err) {
        console.error("Unable to load Glasswall JavaScript Secure Tagging wrapper");
        console.error(err);
        console.error("Running demo...failed");
        process.exit();
    }
 
    Console.log("\n> Calling GWSecuTag_TagFile...");
    rv = gw.GWSecuTag_TagFile(ifile, tags, tagged_file);
    console.log(`\n> Calling GWSecuTag_TagFile...done with status ${rv}`);
 
    // call GWSecuTag_RetrieveTagFile()
    Console.log("\n> Calling GWSecuTag_RetrieveTagFile...");
    rv =  gw.GWSecuTag_RetrieveTagFile(tagged_file, retrieved_tags);
    Console.log(`\n> Calling GWSecuTag_RetrieveTagFile...done with status ${rv}`);
 
    console.log("Running demo...done");
}
 
if (require.main === module) {
    main();
}
```