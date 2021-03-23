---
title: 3.11.2 Clone, Rebuild and Debug Editor in Windows
sidebar_label: 3.11.2 Clone, Rebuild and Debug Editor in Windows
---

```
------------------------------------------------------------------------
FILE NAME: editor_windows.md
DATE: 2021-03-03 16:50 [+0000]
AUTHOR: Martin O'Brien
COPYRIGHT GLASSWALL SOLUTIONS LIMITED
------------------------------------------------------------------------
```

- [Windows Editor](#windows-editor)
  - [0. Introduction](#0-introduction)
  - [1. Fetching the Code Base](#1-fetching-the-code-base)
  - [2. Building Rebuild](#2-building-rebuild)
  - [3. Using GWQtCLI](#3-using-gwqtcli)
    - [3.1 Get GWQtCLI from Azure DevOps](#31-get-gwqtcli-from-azure-devops)
    - [3.2 Build GWQtCLI](#32-build-gwqtcli)
    - [3.2 Place GWQtCLI](#32-place-gwqtcli)
    - [3.3 Using Run Configurations](#33-using-run-configurations)

# Windows Editor

## 0. Introduction

This guide explaines how to clone, build and debug Editor on a Windows platform.

## 1. Fetching the Code Base

Fetch the code base from Azure DevOps by typing 

```
$ git clone https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.editor
```

## 2. Building Rebuild

Launch Qt Creator then use **File** > **Open File or Project** > `src\core2.pro`.

This will open the Core 2 project. Then you can Press **Ctrl B** to build the project. This will create directory `build-core2-Desktop_Qt_5_9_9_MSVC2017_64bit-Debug\` and under that `buildoutput`. In there it will place file `glasswall_core2d.dll`. The `d` denotes a debug version of the file. `glasswall_core2.dll` is the release version.

## 3. Using GWQtCLI

### 3.1 Get GWQtCLI from Azure DevOps

You need `GWQtCLI.exe` to use the Glasswall DLL. Go to the [Editor CLI](https://dev.azure.com/glasswall/Glasswall%20Core/_build?definitionId=485&_a=summary) pipeline, click on the latest non-zero build (that is, the newest build that is not #0.0) then click `Published` (e.g., `2 Published` at the top). In the next page select `windows-drop`, then download the executable, `GWQtCLI.exe`.

### 3.2 Build GWQtCLI

You can build GWQtCLI by cloning from Azure Devops:

```
$ git clone  https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/editor.cli
```

then loading `GWQtCLI.pro` from the `src` directory in Qt Creator and building. The executable will be in [TODO]

### 3.2 Place GWQtCLI

Place `GWQtCLI.exe` in the `buildoutput` directory, for example:

```
c:\DevOps\sdk.editor\build-core2-Desktop_Qt_5_9_9_MSVC2017_64bit-Debug\buildoutput
```

### 3.3 Using Run Configurations

You can set run configurations to implement different functionality with `GWQtCLI.exe`. For example, you can create a simple *help* configuration. More useful would be configurations for export, import, manage, and wordsearch.

In the mode selector area select *Projects* then under **Build & Run** select **Build**.

In the **Run** section, **Run configuration**, select **Add** > **Custom Executable**. Then click **Rename** and give the configuration a sensible name (initially I create *GWQtCLI help* to indicate I'm using the `--help` option):

```
Executable:               C:\DevOps\sdk.editor\build-core2-Desktop_Qt_5_9_9_MSVC2017_64bit-Debug\buildoutput\GWQtCLI.exe
Command line arguments:   --help
Working directory:        C:\DevOps\sdk.editor\build-core2-Desktop_Qt_5_9_9_MSVC2017_64bit-Debug\buildoutput
```

Other useful command line arguments are:

export: `-i INPUT_DIR -o OUTPUT_DIR -l -x export`<br />
import: `-i INPUT_DIR -o OUTPUT_DIR -l -x import`<br />
manage: `-i INPUT_DIR -o OUTPUT_DIR -l`<br />
wordsearch: `-i INPUT_DIR -o OUTPUT_DIR -c PROFILES_FILE -g HOMOGLYPHS_FILE -l`<br />

To shorten the arguments to the options, you can place the input directory, the profiles file, and the homoglyphs file in the `buildoutput` directory.


**PENDING ADDITION TO THIS DOCUMENT Steve Warner to clarify**<br />
Place the latest `glasswall.classic.pdf.dll` in the `buildoutput` directory. It is a copy of `glasswall.classic.dll`. Fetch this from the `sdk.rebuild` windows-drop pipeline.

--- End of file editor-windows.md ---