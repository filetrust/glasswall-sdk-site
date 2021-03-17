---
title: 2.1.6.1 Building Project 
sidebar_label: 2.1.6.1 Building Project 
---

## Source code Management

Source code management is done using Azure DevOps (ADO). The Git version control system is used, and there is one master 
repository per product or tool. The default Azure DevOps processes are used. More information on this can be found at 
the following address: https://docs.microsoft.com/en-us/azure/devops/get-started/?view=azure-devops 

Developers branch off from the master branch, and changes cannot be made directly on any master branch. Pull requests 
are used to review code and give feedback on changes before merging into the master branch. The following conditions 
must be met for each pull request:

-	Every change must be associated with at least 1 work item.
-	The pull request requires 2 reviewer approvals. 
-	All gated check-in tests must pass.
-	Where applicable, all unit tests must pass.
-	All review comments must be resolved.


## Developer Builds

### ADO Pipeline
Developers can create a build locally or via Azure DevOps pipelines for any debugging and developer testing purposes.

### Manual Builds
#### Example
##### Windows
**Prerequisites**:
-	Visual Studio 2017

**Steps**
-	Install Visual Studio 2017.
-	Open a visual studio developer command prompt and run the following commands in the source directory containing the 
    solution file(.sln).
```
msbuild glasswall.classic.sln /p:Configuration=Release
```
##### LINUX

**Prerequisites**:
-	Qt 5.9.6
-	GCC 4.8.5

**Steps**
-	Install GCC (v7.4.0) for Linux.
-	Open a terminal, change the working directory to the source directory containing the make file and run the following 
    commands:
```
make -f glasswall.classic.makefile Release
```

**NOTE**: The build instructions in this document will produce a **Release** build, to produce **Debug** builds simply 
replace the ‘Release’ flag with ‘Debug’ in the build command.
 

##	QA Builds
A developer creates a pull request to the master branch when a change is ready for submission to QA. The pull request 
requires approval from at least 2 reviewers before being committed to master. A numbered build is also triggered in the 
build pipeline on Azure DevOps. Automated gated check-in tests are conducted as part of the pull request process. 
Once a code change is committed to the master branch, a build of the master code is automatically triggered. 
The build output is pushed to a repository for QA testing.
