---
title: 2.1.6.2 Versioning 
sidebar_label: 2.1.6.2 Versioning 
---

## Overview

The version number consists of a major and minor number, for example
```<major>.<minor>```
or  
```1.912```

- **1** is the Major revision (incompatible API changes or features, conceptual change etc.)
- **912** is the Minor revision (new but backward-compatible features, bug fixes)

Versioning is applied automatically in the ADO (Azure DevOps) build pipeline. Every code commit to master will increment 
the minor version number. The major version number is only updated (manually) when a breaking change is introduced.
