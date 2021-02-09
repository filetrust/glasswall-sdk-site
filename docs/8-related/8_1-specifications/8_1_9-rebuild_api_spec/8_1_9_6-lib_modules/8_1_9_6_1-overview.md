---
title: 8.1.9.6.1 Glasswall Library - Modules
sidebar_label: 8.1.9.6.1 Overview
---


The interface for the Glasswall API is broken into three main sections covering the principle functionality provided by the library:

 - [**Glasswall Configuration Functions**](8_1_9_6_4-configuration_functions.md)

 - [**Glasswall Document Processing**](8_1_9_6_3-doc_proc/8_1_9_6_3_6_1-overview.md)

 - [**Glasswall Resource Management**](8_1_9_6_5-resource_management.md)

## Functions

wchar\_t \* GWFileVersion (void)

## GWFileVersion

**wchar\_t\* ** [**GWFileVersion**](#gwfileversion)** ( void )**

This function retrieves the version string of the Glasswall Library.

**Returns**

- a pointer to a printable Null-terminated string.