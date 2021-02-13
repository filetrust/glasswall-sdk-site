---
title: 2.2.6.3.2 Basic Glasswall Features
sidebar_label: 2.2.6.3.2 Basic Glasswall Features
---
The following section introduces the basic features of the Glasswall FileTrust SDK and provides code examples. Ensure that the Glasswall FileTrust SDK has been installed successfully and that your project is correctly linked to the Glasswall FileTrust library before you begin.

The examples have been written in C++. For examples using other languages, please refer to [**Appendix - Languages Other Than C++**](2_2_6_3_4-appendix.md) and wrapper documentation, plus the accompanying test applications.

## Processing a file

This section describes the steps required to process a file. It will open a session, register the input and output files, process the file and finally close the session.
   1. Add the following code to your project:
    ```
    int main ()
    {
        int status = -1;
        int sessionID = GW2OpenSession();

        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterInputFile completed with status %u \n", 
                GW2RegisterInputFile(sessionID, "C:\\GWTest\\input\\Input.jpg"));
        printf("GW2RegisterOutFile completed with status %u \n",  
                GW2RegisterOutFile(sessionID, "C:\\GWTest\\output\\Output.jpg"));
        printf("GW2RunSession completed with status %u \n", GW2RunSession(sessionID));
        printf("GW2CloseSession completed with status %u \n", GW2CloseSession(sessionID));

        printf("Process Complete!\n");
        return 0;
    }
    ```
    2. Build and run the program. If successful, Glasswall will generate the following:
    ```
    Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...
    <... camera registration output removed ...>
    num cameras: 24
    GW2OpenSession
    GW2OpenSession completed with status 1
    GW2RegisterInputFile completed with status 0
    GW2RegisterOutFile completed with status 0
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    Process Complete!
    ```
   3. Glasswall will have output the processed file to the designated folder – in this case, C:\GWTest\output\.

## Session Management

More than one Glasswall session may be active at the same time. Opening a session generates a session ID that then may be used to reference that session. The following steps and code example demonstrate this functionality:

   1. Use the following sample code to register two sessions and their required files to Glasswall:
    ```
    int main()
    {
        int status = -1;
        int sessionA = GW2OpenSession();
        int sessionB = GW2OpenSession();

        printf("GW2OpenSession completed with status %u \n", sessionA);
        printf("GW2OpenSession completed with status %u \n\n", sessionB);

        printf("Session %u GW2RegisterInputFile completed with status %u \n", sessionA, 
            GW2RegisterInputFile(sessionA, "C:\\GWTest\\input\\TestA.jpg"));
        printf("Session %u GW2RegisterInputFile completed with status %u \n", sessionB, 
            GW2RegisterInputFile(sessionB, "C:\\GWTest\\input\\TestC.jpg"));

        printf("Session %u GW2RegisterOutFile completed with status %u \n", sessionA, 
            GW2RegisterOutFile(sessionA, "C:\\GWTest\\output\\TestA.jpg"));
        printf("Session %u GW2RegisterOutFile completed with status %u \n\n", sessionB, 
            GW2RegisterOutFile(sessionB, "C:\\GWTest\\output\\TestC.jpg"));

        printf("Session %u GW2RunSession completed with status %u \n", sessionA, 
            GW2RunSession(sessionA));
        printf("Session %u GW2RunSession completed with status %u \n\n", sessionB, 
            GW2RunSession(sessionB));

        printf("Session %u GW2CloseSession completed with status %u \n", sessionA, 
            GW2CloseSession(sessionA));
        printf("Session %u GW2CloseSession completed with status %u \n\n", sessionB, 
            GW2CloseSession(sessionB));

        printf("Process Complete!\n");
        return 0;
    }
    ```

    2. Build and run the program. If successful, Glasswall will return the following:
    ```
    Loading pool of (version:  gw_core2_camera_interface_v0.8 ) camera plugins ...
    <… camera registration output removed …>
    num cameras: 24
    GW2OpenSession
    GW2OpenSession completed with status 1
    GW2OpenSession completed with status 2

    Session 1 GW2RegisterInputFile completed with status 0
    Session 2 GW2RegisterInputFile completed with status 0

    Session 1 GW2RegisterOutFile completed with status 0
    Session 2 GW2RegisterOutFile completed with status 0

    Session 1 GW2RunSession completed with status 0
    Session 2 GW2RunSession completed with status 0

    Session 1 GW2CloseSession completed with status 0
    Session 2 GW2CloseSession completed with status 0

    Process Complete!
    ```
  3. Glasswall will have output the processed files to the designated folder – in this case, C:\GWTest\output\.

  4. Care must be taken to ensure the correct session is being referenced. Referencing the wrong session may lead to unexpected results.

  5. It is not possible to access a session or its data once it has been closed.

## Applying a Policy File

Glasswall uses policy files to customise how files should be processed. This example describes how to register a policy file to a session.

  1. Use the following sample code to register an input file and output file to Glasswall. As this configuration file is in the XML format, the third parameter for [**GW2RegisterPoliciesFile**](../2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2registerpoliciesfile) is set to zero.

  ```
  int main ()
    {
        int status = -1;
        int sessionID = GW2OpenSession();

        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterInputFile completed with status %u \n",
            GW2RegisterInputFile(sessionID, "C:\\GWTest\\input\\Input.jpg"));
        printf("GW2RegisterOutFile completed with status %u \n",
            GW2RegisterOutFile(sessionID, "C:\\GWTest\\output\\Output.jpg"));
        printf("GW2RegisterPoliciesFile completed with status %u \n",
            GW2RegisterPoliciesFile(sessionID, "C:\\GWTest\\xmlconfig.xml", 0));
        printf("GW2RunSession completed with status %u \n", GW2RunSession(sessionID));
        printf("GW2CloseSession completed with status %u \n", GW2CloseSession(sessionID));

        printf("Process Complete!\n");
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
    GW2 completed with status 0
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    Process Complete!
    ```

   3. Glasswall will have output the processed file to the designated folder – in this case, C:\GWTest\output\.

## Generating Additional Output

The following code example describes how to generate an analysis file. Report files may also be generated using a similar procedure.

  1. Use the following sample code to register an input file and output file to Glasswall . As the analysis file will be in XML format, the third parameter for [**GW2RegisterAnalysisFile**](../2_2_6_1-api/2_2_6_1_2-apifunctions.md#gw2registerpoliciesfile) is set to zero.

   ```
   int main ()
    {
        int status = -1;
        int sessionID = GW2OpenSession();

        printf("GW2OpenSession completed with status %u \n", sessionID);
        printf("GW2RegisterInputFile completed with status %u \n",
            GW2RegisterInputFile(sessionID, "C:\\GWTest\\input\\Input.jpg"));
        printf("GW2RegisterOutFile completed with status %u \n",
            GW2RegisterOutFile(sessionID, "C:\\GWTest\\output\\Output.jpg"));
        printf("GW2RegisterAnalysisFile completed with status %u \n",
            GW2RegisterAnalysisFile(sessionID, "C:\\GWTest\\output\\Analysis.xml", 0));
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
    GW2RegisterAnalysisFile completed with status 0
    GW2RunSession completed with status 0
    GW2CloseSession completed with status 0
    Process Complete!
    ```
  3. Glasswall will have output the processed file and the generated analysis file to the designated folder – in this case, C:\GWTest\output\.