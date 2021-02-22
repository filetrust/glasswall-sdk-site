---
title: 2.2.6.1.4.1 Word Search
sidebar_label: 2.2.6.1.4.1 Word Search
---

# Overview 
The Glasswall engine provides deep-file inspection, remediation, sanitisation, and reporting. 

The engine deconstructs a file to its structural components and builds an internal tree-like representation of the file. It walks each node of the tree, inspecting, repairing, and sanitising content items before reconstructing a new file. 

The Glasswall engine also provides the ability to export and import the engine's internal representation of a file structure in an intermediate format such as XML. This allows internal components of a file to be made available to external programs for additional processing, before recomposing the file to include those externally modified components.

Glasswalls Word Search engine is built on top of the export and import capability, performing text searching in the content and metadata of a file. Search strings, content management, and redaction rules are configured via an XML file. A user-configurable character substitution map defined in JSON form is used to provide support for text obfuscation. The engine also comes with built-in regular expression support.


## Word search configuration

The word search configuration specifies the text or regular expression that should be searched for and how it should be treated when found within the document. The word search configuration is an extension to the Glasswall content management.

### Examples 
 - [Config File](2_2_6_1_4_2-wordsearchConfig.md)
 - [XSD](2_2_6_1_4_3-wordsearchXSD.md)
 - [Usage](2_2_6_1_4_4-exampleuseage.md)

#### Example JSON Homoglyph Config

The JSON file allows the user to create a mapping between characters and corresponding homoglyphs. This allows the engine to consider homoglyphs when generating search expressions, enabling support for homographs (look-alike words) and obfuscated text.

**Example**
```
{
    "!": "ǃⵑ",
    "$": "＄",
    "%": "％",
    "&": "ꝸ＆",
    "'": "`´ʹʻʼʽʾˈˊˋ˴ʹ΄՚՝י׳ߴߵᑊᛌ᾽᾿`´῾‘’‛′‵ꞌ＇｀𖽑𖽒",
    "(": "❨❲〔﴾（［",
    ")": "❩❳〕﴿）］",
    "*": "٭⁎∗＊𐌟",
    "+": "᛭＋𐊛",
    ",": "¸؍٫‚ꓹ，",
    "-": "˗۔‐ ‒–⁃−➖Ⲻ﹘",
    ".": "٠۰܁܂․ꓸ꘎．𐩐𝅭",
    "/": "᜵⁁⁄∕╱⟋⧸Ⳇ⼃〳ノ㇓丿／𝈺",
    "0": "0OoΟοσОоՕօסه٥ھہە۵߀०০੦૦ଠ୦௦ం౦ಂ೦ംഠ൦ං๐໐ဝ၀ჿዐᴏᴑℴⲞⲟⵔ〇ꓳꬽﮦ",
    "1": "1Il|ƖǀΙІӀ׀וןا١۱ߊᛁℐℑℓⅠⅼ∣⏽Ⲓⵏꓲﺍﺎ１Ｉｌ￨𐊊𐌉𐌠𖼨𝐈𝐥𝐼𝑙𝑰𝒍𝓁𝓘𝓵𝔩𝕀𝕝𝕴𝖑𝖨𝗅𝗜𝗹𝘐𝘭𝙄𝙡𝙸𝚕𝚰𝛪𝜤𝝞𝞘𝟏𝟙𝟣𝟭𝟷𞣇𞸀𞺀",
    "2": "2ƧϨᒿꙄꛯꝚ２𝟐𝟚𝟤𝟮𝟸",
    "3": "3ƷȜЗӠⳌꝪꞫ３𑣊𖼻𝈆𝟑𝟛𝟥𝟯𝟹",
    "4": "4Ꮞ４𑢯𝟒𝟜𝟦𝟰𝟺",
    "5": "5Ƽ５𑢻𝟓𝟝𝟧𝟱𝟻",
    "6": "6бᏮⳒ６𑣕𝟔𝟞𝟨𝟲𝟼",
    "7": "7７𐓒𑣆𝈒𝟕𝟟𝟩𝟳𝟽",
    "8": "8Ȣȣ৪੪ଃ８𐌚𝟖𝟠𝟪𝟴𝟾𞣋",
    "9": "9৭੧୨൭ⳊꝮ９𑢬𑣌𑣖𝟗𝟡𝟫𝟵𝟿",
    "A": "AΑАᎪᗅᴀꓮꭺＡ𐊠𖽀𝐀𝐴𝑨𝒜𝓐𝔄𝔸𝕬𝖠𝗔𝘈𝘼𝙰𝚨𝛢𝜜𝝖𝞐4",
    "B": "BʙΒВвᏴᏼᗷᛒℬꓐꞴＢ𐊂𐊡𐌁𝐁𝐵𝑩𝓑𝔅𝔹𝕭𝖡𝗕𝘉𝘽𝙱𝚩𝛣𝜝𝝗𝞑",
    "C": "CϹСᏟℂℭⅭⲤꓚＣ𐊢𐌂𐐕𐔜𑣩𑣲𝐂𝐶𝑪𝒞𝓒𝕮𝖢𝗖𝘊𝘾𝙲🝌"
}
```

## API

Each of the APIs returns a `Status` type, which is defined as follows:

```c++
enum Status {
    eFail,
    eSuccess
};
```
### GwWordSearch

This is used to call the word search engine, process the specified input file and produce an output file along with a word search report.

```c++
Status GwWordSearch(
    void* input_buffer, 
    size_t input_buffer_len, 
    void** output_buffer, 
    size_t* output_buffer_len, 
    void** output_report_buffer, 
    size_t* output_report_buffer_len, 
    const char* homoglpyhs, 
    const char* xml_config_string
)
```

Name | Type | Direction | Description
---- | ---- | --------- | -----------
input_buffer | `void *` | In | A pointer to the buffer containing the input file to be processed
input_buffer_len | `size_t` | In | The size of the input file buffer
output_buffer | `void **` | Out | A pointer to a pointer to a buffer that will be populated with the processed file buffer. This buffer is allocated by the word search engine
output_buffer_len | `size_t *` | Out | A pointer to the size of the output file buffer. This will be set by the word search engine
output_report_buffer | `void **` | Out | A pointer to a pointer to a buffer that will be populated with the word search report buffer. This buffer is allocated by the word search engine
output_report_buffer_len | `size_t *` | Out | A pointer to the size of the word search report. This will be set by the word search engine
homoglyphs | `const char *` | In | A pointer to the buffer containing the homoglyphs file. This buffer needs to be null terminated
xml_config_string | `const char *` | In | A pointer to the buffer containing the content management XML file. This buffer needs to be null terminated

### GWWordSearchDone

This is used to release any resources that have been allocated by the word search engine. This function needs to be called after each call made to the `GwWordSearch` function otherwise memory leaks will occur.

```c++
Status GwWordSearchDone(
    void** output_buffer,
    size_t* output_buffer_len, 
    void** output_report_buffer, 
    size_t* output_report_buffer_len
);
```

Name | Type | Direction | Description
---- | ---- | --------- | -----------
output_buffer | `void **` | Out | A pointer to a pointer to the buffer containing the processed file that will be freed by the word search library
output_buffer_len | `size_t *` | Out | A pointer to the size of the output file buffer
output_report_buffer | `void **` | Out | A pointer to a pointer to the buffer containing the word search report that will be freed by the word search library
output_report_buffer_len | `size_t *` | Out | A pointer to the size of the word search report

## Common Issues

### Word search is not processing files

If word search is not processing files correctly then there may be a few reasons that can cause this:
* When running word search please ensure that all the Glasswall libraries are located in the same directory, which also needs to be set as the current working directory. Glasswall searches within the current working directory for it's dependencies and if they are not found then files will not be processed correctly.
