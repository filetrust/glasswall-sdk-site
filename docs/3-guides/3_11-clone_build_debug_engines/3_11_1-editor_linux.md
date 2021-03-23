```
------------------------------------------------------------------------
FILE NAME: editor_linux.md
DATE: 2021-03-03 13:56 [+0000]
AUTHOR: Martin O'Brien
COPYRIGHT GLASSWALL SOLUTIONS LIMITED
------------------------------------------------------------------------
```

- [Linux Editor](#linux-editor)
  - [0. Introduction](#0-introduction)
  - [1. Fetching the Code Base](#1-fetching-the-code-base)
  - [2. Building Editor](#2-building-editor)
  - [3. Using GWQtCLI](#3-using-gwqtcli)
    - [3.1 Get GWQtCLI from Azure DevOps](#31-get-gwqtcli-from-azure-devops)
    - [3.2 Build GWQtCLI](#32-build-gwqtcli)
    - [3.2 Place GWQtCLI](#32-place-gwqtcli)
    - [3.3 Using Run Configurations](#33-using-run-configurations)
  - [4. Using Scripts](#4-using-scripts)

# Linux Editor

Note, this should be called GNU/Linux. Linux on its own is not much use to most people.

## 0. Introduction

This guide explaines how to clone, build and debug Editor on a GNU/Linux platform.

## 1. Fetching the Code Base

Fetch the code base from Azure DevOps by typing 

```
$ git clone https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.editor
```

## 2. Building Editor

Launch Qt Creator then use **File** > **Open File or Project** > `src/core2.pro`.

This will open the Core 2 project. Then you can Press **Ctrl B** to build the project. This will create directory `build-core2-Desktop_Qt_5_9_6_GCC_64bit-Debug` and under that `buildoutput`. In there it will place a soft link, `libglasswall_core2.so`, which links to the latest shared object file (e.g., `libglasswall_core2.so.2.0.0`.)

## 3. Using GWQtCLI

### 3.1 Get GWQtCLI from Azure DevOps

You need `GWQtCLI` to use the Glasswall shared object. Go to the [Editor CLI](https://dev.azure.com/glasswall/Glasswall%20Core/_build?definitionId=485&_a=summary) pipeline, click on the latest non-zero build (that is, the newest build that is not #0.0) then click `Published` (e.g., `2 Published` at the top). In the next page select `linux-drop`, then download the executable, `GWQtCLI`.

### 3.2 Build GWQtCLI

You can build GWQtCLI by cloning from Azure Devops:

```
$ git clone  https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/editor.cli
```

then loading `GWQtCLI.pro` from the `src` directory in Qt Creator and building. The executable will be in `build-GWQtCLI-Desktop_Qt_5_12_2_GCC_64bit-Debug`

### 3.2 Place GWQtCLI

Place `GWQtCLI` in the `buildoutput` directory, for example:

```
/home/glasswall/DevOps_Local/sdk.editor/build-core2-Desktop_Qt_5_9_6_GCC_64bit-Debug/buildoutput
```

### 3.3 Using Run Configurations

You can set run configurations to implement different functionality with `GWQtCLI`. For example, you can create a simple *help* configuration. More useful would be configurations for export, import, manage, and wordsearch.

I have written scripts for each of those that will launch `GWQtCLI` from the command line (see later), but to debug you will need to use *Qt Creator*.

In the mode selector area select *Projects* then under **Build & Run** select **Build**.

In the **Run** section, **Run configuration**, select **Add** > **Custom Executable**. Then click **Rename** and give the configuration a sensible name (initially I create *GWQtCLI help* to indicate I'm using the `--help` option):

```
Executable:               /home/glasswall/DevOps_Local/sdk.editor/build-core2-Desktop_Qt_5_9_6_GCC_64bit-Debug/buildoutput/GWQtCLI
Command line arguments:   --help
Working directory:        /home/glasswall/DevOps_Local/sdk.editor/build-core2-Desktop_Qt_5_9_6_GCC_64bit-Debug/buildoutput
```

Other useful command line arguments are:

export: `-i INPUT_DIR -o OUTPUT_DIR -l -x export`<br />
import: `-i INPUT_DIR -o OUTPUT_DIR -l -x import`<br />
manage: `-i INPUT_DIR -o OUTPUT_DIR -l`<br />
wordsearch: `-i INPUT_DIR -o OUTPUT_DIR -c PROFILES_FILE -g HOMOGLYPHS_FILE -l`<br />

To shorten the arguments to the options, you can place the input directory, the profiles file, and the homoglyphs file in the `buildoutput` directory.

## 4. Using Scripts

When I want to simply run Editor without the need for debugging, I use my Bash scripts:

```
export.sh
import.sh
manage.sh
wordsearch.sh
```

To run my scripts I create a directory `scripts` in `build-core2-Desktop_Qt_5_9_6_GCC_64bit-Debug/buildoutput` and copy them to there. Each script begins with `cd ..` so it expects them in that subdirectory.

In `buildoutput` the scripts also expect a directory called `Configs` and in there two files:
```
homoglyphs.json
word_search_config.xml
```
This is necessary only if you use `wordsearch.sh`.

Each script expects an optional directory name, and if not supplied defaults to `Test_Set_01` which it expects to find in the `buildoutput` directory. The directory name is used this way:

`export.sh` - Used with `-i` and the output directory is that name suffixed with `-EXPORTED`.<br />
`import.sh` - The directory name suffixed with `-EXPORTED` is used as the input directory, and the output directory will have the directory name suffixed with `-EXPORTED-IMPORTED`.<br />
`manage.sh` - The directory name is used with the `-i` option and the output directory is that name suffixed with `-MANDP`.<br />
`wordsearch.sh` - The directory name is used with the `-i` option  and the output directory is the directory name suffixed with `-WORD_SEARCH`.

This means that a successful run of `export.sh` can be followed by a run of `import.sh` without changing the argument. So if directory `Test_Set_01` exists in `buildoutput` this sequence of commands on the Bash shell 

```
$ ./export.sh
$ ./import.sh
```

will create these directories:

```
Test_Set_01-EXPORTED
Test_Set_01-EXPORTED-IMPORTED
```

Unfortunately, the scripts do not do parsing of the directory name supplied, so this will fail:

```
./manage.sh ~/TestFiles/Set_01
```

The directory name must not be a path. This will work:

```
./manage.sh Task_23_Set_01
```

and produce

```
Task_23_Set_01-MANDP
```

--- End of file editor-linux.md ---