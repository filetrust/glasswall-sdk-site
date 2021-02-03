---
title: 2.2.7.1 Introduction
sidebar_label: 2.2.7.1 Introduction
---

This document explains how to use the Glasswall CLI using the Windows command prompt or the terminal window for Linux, with an explanation of the parameters and using the configuration files.

For further details regarding Glasswall specific terminology, see the [Core Engine Product Description.](../2_2_1-product_description.md)

## Purpose
### Test and Evaluation
The best use of Glasswall CLI is as a test or evaluation tool. The results provided can be examined and compared to give you a clear understanding of any issues or unwanted content within the files. Any invalid files will have the issues reported in the XML documents to show why they were non-conforming. You will also be able to see if any disallowed content was present that made the file non-conforming and decide if you want to rerun it in sanitise mode to remove that content.

### Not for Production Processing
The Glasswall CLI is not suitable to be embedded within production processing systems. It has been designed as a test aid so does not have the robustness of the main Glasswall libraries.