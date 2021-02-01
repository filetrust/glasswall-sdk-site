---
title: 8.1.9.6.3.7.3 Process Status Bitmask Definitions
sidebar_label: 8.1.9.6.3.7.3 Process Status Bitmask Definitions
---
## Macros

- #define [**GLASSWALL\_PROCESS\_STATUS\_CLEAN**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm#GLASSWAL) ((unsigned int) 0x0000)

- #define [**GLASSWALL\_PROCESS\_STATUS\_NONCONFORMING **](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm#GLASSWAL2)((unsigned int) 0x0080)

- #define [**GLASSWALL\_PROCESS\_STATUS\_REMEDIED**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm#GLASSWAL3) ((unsigned int) 0x0040)

- #define [**GLASSWALL\_PROCESS\_STATUS\_SANITISED**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm#GLASSWAL4) ((unsigned int) 0x0020)

- #define [**GLASSWALL\_PROCESS\_STATUS\_NOPROCESSFILE**](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Process%20Status%20Bitmask%20Definitions.htm#GLASSWAL5) ((unsigned int) 0xffff)

## Macro Definitions

## GLASSWALL\_PROCESS\_STATUS\_CLEAN

**#define GLASSWALL\_PROCESS\_STATUS\_CLEAN ((unsigned int) 0x0000)**

Original document conforms to the specification, no changes have been made.

## GLASSWALL\_PROCESS\_STATUS\_NONCONFORMING

**#define GLASSWALL\_PROCESS\_STATUS\_NONCONFORMING ((unsigned int) 0x0080)**

Document either doesn&#39;t conform to its specification or does not comply with content management policy currently in force.

## GLASSWALL\_PROCESS\_STATUS\_REMEDIED

#define GLASSWALL\_PROCESS\_STATUS\_REMEDIED ((unsigned int) 0x0040)

Document has been updated in order to make it compliant with the specification.

## GLASSWALL\_PROCESS\_STATUS\_SANITISED

**#define GLASSWALL\_PROCESS\_STATUS\_SANITISED ((unsigned int) 0x0020)**

Document has been updated in order to make it compliant with the content management policy.

## GLASSWALL\_PROCESS\_STATUS\_NOPROCESSFILE

#define GLASSWALL\_PROCESS\_STATUS\_NOPROCESSFILE ((unsigned int) 0xffff)

No Glasswall Process file