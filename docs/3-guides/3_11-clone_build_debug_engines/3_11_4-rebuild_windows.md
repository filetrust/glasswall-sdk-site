---
title: 3.11.4 Clone, Rebuild and Debug Rebuild in Windows
sidebar_label: 3.11.4 Clone, Rebuild and Debug Rebuild in Windows
---

```
------------------------------------------------------------------------
FILE NAME: rebuild_windows.md
DATE: 2021-03-03 09:21 [+0000]
AUTHOR: Martin O'Brien
COPYRIGHT 2021 GLASSWALL SOLUTIONS LIMITED
------------------------------------------------------------------------
```

- [Windows Rebuild](#windows-rebuild)
  - [0. Introduction](#0-introduction)
  - [1. Fetching the Code Base](#1-fetching-the-code-base)
  - [2. Building Rebuild](#2-building-rebuild)
  - [3. Debugging Rebuild](#3-debugging-rebuild)
    - [3.1 Setting Visual Studio Debugging Properties](#31-setting-visual-studio-debugging-properties)
  
# Windows Rebuild

## 0. Introduction
This guide explaines how to clone, build and debug Rebuild on a Windows platform.

## 1. Fetching the Code Base

Fetch the code base from Azure DevOps by typing 

```
$ git clone https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.rebuild
```

## 2. Building Rebuild

To build Rebuild, open *Visual Studio* and open the solution `src/glasswall.classic.sln`.

Change the **Solution Platform** from Win32 to x64. You can leave the **Solution Configuration** at *Debug* for a debugging session.

Open **Solution Explorer**, secondary click project **glasswall.classic** and press **Build**.

The build can take up to 40 minutes to complete.

When complete, aside from all the `.obj` files produced, these files will also be present:

```
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswall.classic.dll
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswall.classic.exp
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswall.classic.ilk
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswall.classic.lib
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswall.classic.pdb
c:\Git_Scratch\sdk.rebuild\src\code\binaries\Debug\x64\glasswallCLI.exe

```

Note that `glasswallCLI.exe` is now in the `src\code\binaries\Debug\x64` directory. It has been copied there from `src\code\binaries\tools\x64\glasswallCLI.exe`

## 3. Debugging Rebuild

To debug Rebuild, you run it via `glasswallCLI.exe`, which is in directory `code\binaries\tools\x64` and `src\code\binaries\Debug\x64\glasswallCLI.exe`. The latter directory is `$(TargetDir)` and that will be set as the working directory for debugging (see below).

### 3.1 Setting Visual Studio Debugging Properties

In *Visual Studio* in **Solution Explorer**, secondary click **glasswall.classic** > **Properties**. In **Configuration Properties** select **Debugging**.

The default options are:

```
Command             $(TargetPath)
Command Arguments   
Working Directory   $(ProjectDir)
```

`$(TargetPath)` will refer to `src\code\binaries\Debug\x64\glasswall.classic.dll`<br /> and<br />
`$(ProjectDir)` will refer to `src\code\`.

Change them to this:

```
Command             $(TargetDir)\glasswallCLI.exe
Command Arguments   -config=config.ini -xmlconfig=config.xml
Working Directory   $(TargetDir)
```

`$(TargetDir)` refers to `src\code\binaries\Debug\x64\`

If you copy your config file and profiles file into  `src\code\binaries\Debug\x64\` then you can leave the Command Arguments as shown above, otherwise you will have to provide a path to the files.

--- End of file rebuild-windows.md ---