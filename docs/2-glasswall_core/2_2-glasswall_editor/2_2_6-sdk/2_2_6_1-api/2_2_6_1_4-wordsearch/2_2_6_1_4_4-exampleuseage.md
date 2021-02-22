---
title: 2.2.6.1.4.4 Examples
sidebar_label: 2.2.6.1.4.4 Examples
---
Here we have an example C++ application that takes an input file, processes it using the Glasswall Word Search engine, and then produces an output file alongside a word search analysis report. This example application expects the following commandline parameters:

1. Path to the content management configuration XML.
2. Path to the homoglyphs file.
3. Path to the input file to be processed.
4. Path to the output file where the processed file will be stored.

```c++
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <cstddef>
#include <stdexcept>

#include "api.h"

using namespace std;

// Read the file into a buffer
vector<uint8_t> readFile(ifstream &fileHandle, const string &filePath, bool nullTerminator)
{
    fileHandle.exceptions(ifstream::failbit | ifstream::badbit);
    fileHandle.open(filePath.c_str(), ios::binary | ios::ate);

    vector<uint8_t> data;
    streamsize size = fileHandle.tellg();
    fileHandle.seekg(0, ios::beg);

    data.resize(size + 1);
    fileHandle.read(reinterpret_cast<char *>(data.data()), size);

    if (nullTerminator)
    {
        data.push_back(0);
    }

    return data;
}

int main(int argc, char **argv)
{
    if (argc != 5)
    {
        cout << "Usage: <Path to XML Config> <Path to Homoglyphs> <Input file> <Output file>" << endl;
        return -1;
    }

    // Read commandline arguments
    string xmlFilePath(argv[1]);
    string homoglyphsFilePath(argv[2]);
    string inputFilePath(argv[3]);
    string outputFilePath(argv[4]);

    // Create file handles for input files
    ifstream xmlFileHandle;
    ifstream homoglyphsFileHandle;
    ifstream inputFileHandle;

    // Read files into buffers
    vector<uint8_t> xmlBuffer = readFile(xmlFileHandle, xmlFilePath, true);                         // Buffer containing the XML content management settings. This is null terminated
    vector<uint8_t> homoglyphsBuffer = readFile(homoglyphsFileHandle, homoglyphsFilePath, true);    // Buffer containing the homoglyphs. This is null terminated
    vector<uint8_t> inputBuffer = readFile(inputFileHandle, inputFilePath, false);                  // Buffer containing the input file to be processed

    // Create variables for output buffers
    void * outputBuffer = nullptr;          // Output buffer for processed file
    size_t outputBufferSize = 0;            // Output buffer size
    void * outputReportBuffer = nullptr;    // Output buffer for report file
    size_t outputReportBufferSize = 0;      // Output report buffer size

    // Run word search and redact
    Status status = GwWordSearch(inputBuffer.data(), inputBuffer.size(), &outputBuffer, &outputBufferSize, &outputReportBuffer, &outputReportBufferSize, reinterpret_cast<const char*>(homoglyphsBuffer.data()), reinterpret_cast<const char *>(xmlBuffer.data()));

    if (status == Status::eSuccess)
    {
        // Write out the processed output file if the word search and redact was successful
        ofstream outputFileHandle(outputFilePath, ios::binary | ios::trunc);

        if (outputFileHandle.is_open())
        {
            outputFileHandle.write(static_cast<const char *>(outputBuffer), outputBufferSize);
        }

        outputFileHandle.close();
    }

    // Write out the report file
    ofstream analysisFileHandle(outputFilePath + ".xml", ios::binary | ios::trunc);

    if (analysisFileHandle.is_open())
    {
        analysisFileHandle.write(static_cast<const char *>(outputReportBuffer), outputReportBufferSize);
    }

    analysisFileHandle.close();

    // Call done to release any allocated resources
    GwWordSearchDone(&outputBuffer, &outputBufferSize, &outputReportBuffer, &outputReportBufferSize);

    return 0;
}
```

In this example we are searching for the text "cats" and allowing it, searching for the regular expression "l\S+e" and redacting it, and searching for the text "hello" and disallowing it. The `textSetting` element accepts the following options:
 -  `allow` - Allowing an item will not apply redaction, but will mention the item in the word search report if it is found
 -  `disallow` - Disallowing an item will flag the document as non-conforming if the item is found
 -  `redact` - Redacting an item will replace the text with the replacement character specified. For example, "cats" will be replaced with "****"
