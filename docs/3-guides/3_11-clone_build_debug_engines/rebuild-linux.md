```
------------------------------------------------------------------------
FILE NAME: rebuild_linux.md
DATE: 2021-03-03 13:56 [+0000]
AUTHOR: Martin O'Brien
COPYRIGHT 2021 GLASSWALL SOLUTIONS LIMITED
------------------------------------------------------------------------
```

- [Linux Rebuild](#linux-rebuild)
  - [0. Introduction](#0-introduction)
  - [1. Fetching the Code Base](#1-fetching-the-code-base)
  - [2. Building Rebuild](#2-building-rebuild)
  - [3. Debugging Rebuild](#3-debugging-rebuild)
  - [4. Running Rebuild](#4-running-rebuild)
- [Quick View](#quick-view)
  - [5. Build](#5-build)
  - [6. Run glasswallCLI](#6-run-glasswallcli)

# Linux Rebuild

Note, this should be called GNU/Linux. Linux on its own is not much use to most people.

If you want a summary of how how to do this, refer to the [Quick View](#quick-view) section below.

## 0. Introduction
This guide explaines how to clone, build and debug Rebuild on a GNU/Linux platform.

## 1. Fetching the Code Base

Fetch the code base from Azure DevOps by typing 

```
$ git clone https://glasswall@dev.azure.com/glasswall/Glasswall%20Core/_git/sdk.rebuild
```

## 2. Building Rebuild

To build Rebuild, use Bash script file `build-linux-debug.sh`. This should be run from directory `src/code` which contains the file `glasswall.classic.makefile`.

The script simply invokes the following command, with `Debug` or `Release` as appropriate, and redirects to an aptly named log file:

```
make -f glasswall.classic.makefile Debug -j `nproc` 2>&1 | tee $LOG_FNAME
make -f glasswall.classic.makefile Release -j `nproc` 2>&1 | tee $LOG_FNAME
```

The build produces `libglasswall.classic.so` in `src/code/binaries/Debug/linux` or `src/code/binaries/Release/linux` depending on whether the Debug or Release version was built.

The file `glasswallCLI` is in directory `src/code/binaries/tools/Linux`.


## 3. Debugging Rebuild

Debugging in the CentOS 7 VM is not practicable and is done using *Visual Studio* in Windows.

## 4. Running Rebuild

To run Rebuild in Linux, place ` run_rebuild.py` in `src/code/binaries/Debug/linux` along with these files:

```
glasswallCLI
isonowdatetime.py
libglasswall.classic.so
```

To save having to specify a path for the profiles file and the test data files, you can also copy them in there, e.g., `config.xml` for the profiles, and `Test_Set_01` for the test files.

`run_rebuild.py` creates a temporary config file, so there is no need to specify it. The usage of `run_rebuild.py` is:
```
python run_rebuild.py input_loc output_loc file_type profiles mode
```

`input_loc` is the name of the directory containing the files to be processed.

`output_loc` is the name of the directory prefix that will be used to place the substitute files. Do not use a path here, and do not use forward slashes. For example, An example directory that will be created if `output_loc` is `Output` is `Output-20210219_102412-config.xml-MP`. See below for details.

`file_type` is one of the file types allowed for the `fileType` option in the config file; `*` is not allowed (the shell will expand it before it reaches the Python script - allowing it is earmarked as an enhancement).

`profiles` is the name of the profiles file to be used.

Mode is one of 
```
MP
AN
```

to denote Manage mode or Analysis mode.

An example call would be:

`python run_rebuild.py Test_Set_01 Output xls config.xml MP`

This will create a directory of the form `Output-20210219_102412-config.xml-MP`, where the `output_loc`, `profiles` and `mode` data have been used in the filename, along with a date-time stamp in ISO 8601 format.

Although it may seem that it's almost as simple to run `glasswallCLI` natively from the command line, passing in the config and profiles file names, rather than running `run_rebuild.py`, running `run_rebuild.py` means you can perform multiple runs without over-writing previous ones, by simply recalling the command in the Bash shell.

# Quick View

## 5. Build
5.1. Run `build-linux-debug.sh` in `src/code`.

## 6. Run glasswallCLI
6.1. Place these files (and one directory) in `src/code/binaries/Debug/linux`:
   
```
glasswallCLI
isonowdatetime.py
libglasswall.classic.so
profiles.xml
run_rebuild.py
Test_Set_01/
```
then run `run_rebuild.py`:
```
python run_rebuild.py Test_Set_01 Output xls config.xml MP
```
This will create an output directory of form:
```
Output-20210219_102412-config.xml-MP
```

Run as many times as you like, no directory will be over-written (as long as each run happens outside of a one second gap).

--- End of file rebuild-linux.md ---