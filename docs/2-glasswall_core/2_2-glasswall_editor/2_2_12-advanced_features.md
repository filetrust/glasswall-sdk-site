---
title: 2.2.12 Advanced Features
sidebar_label: 2.2.12 Advanced Features
---
## Memory management

Memory buffers may be used for input and output. The following example demonstrates this functionality.

   1. Use the following sample code to register an input buffer and output buffer to Glasswall, and to run the session:
    ```
    int main ()
    {
        int status = -1;

        // Load input data from file to memory buffer
        std::ifstream input_file("C:\\GWTest\\input\\Test.jpg", std::ios::binary);
        input_file.seekg(0, input_file.end);
        size_t input_length = input_file.tellg();
        input_file.seekg(0, std::ios::beg);

        std::vector<char> input_buffer(input_length);
        input_file.read(input_buffer.data(), input_buffer.size());
        input_file.close();

        // Establish output buffer
        char *output_buffer = nullptr;
        size_t output_length = 0;
        
        // Glasswall functions
        int sessionID = GW2OpenSession();
        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterInputMemory completed with status %u \n",
            GW2RegisterInputMemory(sessionID, input_buffer.data(), input_buffer.size()));
        printf("GW2RegisterOutputMemory completed with status %u \n",
            GW2RegisterOutputMemory(sessionID, &output_buffer, &output_length));
        printf("GW2RunSession completed with status %u \n", GW2RunSession(sessionID));

        // Output buffer to file
        std::ofstream outfile("C:\\GWTest\\output\\Test.jpg", std::ifstream::binary);
        outfile.write(output_buffer, output_length);
        outfile.close();
        
        printf("GW2CloseSession completed with status %u \n", GW2CloseSession(sessionID));

        printf("Process Complete!\n");
        return 0;
    }
    ```

    2. Build and run the program. Glasswall will return the following if successful:
    ```
    Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...
    <... camera registration output removed ...>
    num cameras: 24
    GW2OpenSession
    GW2OpenSession completed with status 1
    GW2RegisterInputMemory completed with status 0
    GW2RegisterOutputMemory completed with status 0
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    Process Complete!
    ```

    3. Glasswall will have processed the data held in the input buffer and output to the output buffer. The program then saves the buffer contents to a new file at the specified location.

    4. Note that as part of the GW2CloseSession() procedure, Glasswall destroys all buffers it has created. Data should be retrieved from these buffers before calling GW2CloseSession(). For more information, see [**GW2RunSession**](2_2_6-sdk/2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2runsession).

## Import and Export Functions

Use of Import and Export based functions follows the same pattern as Input and Output functions. These functions require and generate archives of sisl or xml files and images in place of regular files. The code example below demonstrates this functionality by first inputting a file and exporting it to a sisl archive. It then imports this archive back into Glasswall, regenerates the file and outputs it. Note that two sessions are required to complete this operation.

   1. Use the following sample code to create the input → export → import → output chain.
    ```
    int main ()
    {
        int status = -1;
        
        int sessionID = GW2OpenSession();
        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterInputFile completed with status %u \n",
            GW2RegisterInputFile(sessionID, "C:\\GWTest\\input\\Input.xlsx"));
        printf("GW2RegisterOutFile completed with status %u \n",
            GW2RegisterExportFile(sessionID, "C:\\GWTest\\export\\Export.zip"));
        printf("GW2RunSession completed with status %u \n", GW2RunSession(sessionID));
        printf("GW2CloseSession completed with status %u \n", GW2CloseSession(sessionID));

        sessionID = GW2OpenSession();
        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterImportFile completed with status %u \n",
            GW2RegisterImportFile(sessionID, "C:\\GWTest\\export\\Export.zip"));
        printf("GW2RegisterOutFile completed with status %u \n",
            GW2RegisterOutFile(sessionID, "C:\\GWTest\\output\\Output.xlsx"));
        printf("GW2RunSession completed with status %u \n", GW2RunSession(sessionID));
        printf("GW2CloseSession completed with status %u \n", GW2CloseSession(sessionID));

        printf("Process Complete!\n");
        return 0;
    }
    ```

    2. Build and run the program. Glasswall will return the following if successful:
    ```
    Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...
    <... camera registration output removed ...>
    num cameras: 24
    GW2OpenSession
    GW2OpenSession completed with status 1
    GW2RegisterInputFile completed with status 0
    GW2RegisterOutFile completed with status 0
    <... processing messages from GW removed ...>
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    GW2OpenSession completed with status 2
    GW2RegisterImportFile completed with status 0
    GW2RegisterOutFile completed with status 0
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    Process Complete!
    ```

   3. A sisl archive and an output file will have been created at the specified locations.

## Session Status and Errors

Functions are available to return the status of the named session to the user. Information on any errors occurring may also be returned. The following code example processes a file and returns the status of its session, along with an error message.

   1. Use the following sample code to process a file. Note the two function calls to return the status and error information.
   ```
   int main()
    {
        int status = -1;
        int sessionID = GW2OpenSession();

        printf("GW2OpenSession completed with status %i \n", sessionID);
        printf("GW2RegisterInputFile completed with status %i \n",
            GW2RegisterInputFile(sessionID, "C:\\GWTest\\input\\2030_trailer.mp4"));
        printf("GW2RegisterOutFile completed with status %i \n",
            GW2RegisterOutFile(sessionID, "C:\\GWTest\\output\\processed.mp4"));
        printf("GW2RunSession completed with status %i \n", GW2RunSession(sessionID));
        
        // Establish Buffers for returned dataint glasswallSessionStatus = 0;
        char *MsgBuffer = nullptr;
        size_t BufferLength = 0;

        // Return data on file session status
        printf("GW2FileSessionStatus completed with status %u \n",
            GW2FileSessionStatus(sessionID, &glasswallSessionStatus, &MsgBuffer, &BufferLength));
        printf("Glasswall Session %u status  = %i \n", sessionID, glasswallSessionStatus);
        printf("Glasswall Session %u message = %.*s \n", sessionID, BufferLength, MsgBuffer);
        
        // Return data on file errors
        printf("GW2FileErrorMsg completed with status %i \n",
            GW2FileErrorMsg(sessionID, &MsgBuffer, &BufferLength));
        printf("Glasswall Session %u error = %.*s \n", sessionID, BufferLength, MsgBuffer);

        // Close 
        printf("GW2CloseSession completed with status %i \n", GW2CloseSession(sessionID));
        printf("Process Complete!\n");

        system("Pause");
        return 0;
    }

   ```

    2. Build and run the program. Glasswall will return the following:
    ```
        Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...
        <... camera registration output removed ...>
        num cameras: 24
        GW2OpenSession
        GW2OpenSession completed with status 1
        GW2RegisterInputFile completed with status 0
        GW2RegisterOutFile completed with status 0
        GW2RunSession completed with status 0
        GW2FileSessionStatus completed with status 0
        Glasswall Session 1 status  = 0
        Glasswall Session 1 message = Issues Found, Remedies Applied
        GW2FileErrorMsg completed with status 0
        Glasswall Session 1 error = Validation of FileType box Major Brand field failed.
        GW2CloseSession completed with status 0
        Process Complete!
    ```

Note that the above example attempts to process a file with a known error, thus an error message is generated. If a file has been processed successfully no error message will be generated.