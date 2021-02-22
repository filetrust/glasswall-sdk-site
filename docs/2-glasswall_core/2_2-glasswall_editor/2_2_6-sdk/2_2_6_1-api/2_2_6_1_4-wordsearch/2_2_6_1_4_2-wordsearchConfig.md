---
title: 2.2.6.1.4.2 Word Search Config
sidebar_label: 2.2.6.1.4.2 Word Search Config
---

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
    <wordConfig>
        <embedded_files>sanitise</embedded_files>
        <internal_hyperlinks>sanitise</internal_hyperlinks>
        <external_hyperlinks>sanitise</external_hyperlinks>
        <macros>sanitise</macros>
        <metadata>sanitise</metadata>
        <review_comments>allow</review_comments>
    </wordConfig>
    <sysConfig>
        <interchange_type>xml</interchange_type>
    </sysConfig>
    <textSearchConfig libVersion="core2">
        <textList>
            <textItem>
                <text>cats</text>
                <textSetting replacementChar="*">allow</textSetting>
            </textItem>
            <textItem>
                <regex>l\S+e</regex>
                <textSetting replacementChar="!">redact</textSetting>
            </textItem>
            <textItem>
                <regex>hello</regex>
                <textSetting replacementChar="!">disallow</textSetting>
            </textItem>
        </textList>
    </textSearchConfig>
</config>
```