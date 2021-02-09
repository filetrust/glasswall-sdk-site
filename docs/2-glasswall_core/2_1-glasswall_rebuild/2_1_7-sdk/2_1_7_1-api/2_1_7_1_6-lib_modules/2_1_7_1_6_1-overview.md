---
title: 2.1.7.1.6.1 Glasswall Library - Modules
sidebar_label: 2.1.7.1.6.1 Overview
---


The interface for the Glasswall API is broken into three main sections covering the principle functionality provided by the library:

 - [**Glasswall Configuration Functions**](2_1_7_1_6_4-configuration_functions.md)

 - [**Glasswall Document Processing**](2_1_7_1_6_3-doc_proc/2_1_7_1_6_3_1-overview.md)

 - [**Glasswall Resource Management**](2_1_7_1_6_5-resource_management.md)

## Functions

wchar\_t \* GWFileVersion (void)

## GWFileVersion

**wchar\_t\* ** [**GWFileVersion**](#gwfileversion)** ( void )**

This function retrieves the version string of the Glasswall Library.

**Returns**

- a pointer to a printable Null-terminated string.