# json-crud-ui-init

[![npm version](https://img.shields.io/npm/v/json-crud-ui-init.svg)](https://www.npmjs.com/package/json-crud-ui-init)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight CLI and library to scaffold static UI boilerplate code (HTML, JS, and CDN templates) directly inside the `public` folder of your project.

---

## Installation

Run directly using `npx`:
```bash
npx json-crud-ui-init <command> [options]
```

Or install globally:
```bash
npm install -g json-crud-ui-init
```

---

## Commands

* **`init`**: Initialize local static UI boilerplate.
* **`initFromCdn`**: Scaffold UI boilerplate referencing dependencies from a CDN.
* **`initHeaderFromCdn`**: Scaffold CDN-based Header boilerplate.
* **`initTableFromCdn`**: Scaffold CDN-based Table boilerplate.

---

## Programmatic API

You can also import and load commands programmatically:

```javascript
import { fromScriptJs, initHeaderFromCdn } from "json-crud-ui-init";

// Generate CRUD or simple script boilerplate
fromScriptJs.crud({ folderName: "my-crud-app" });
fromScriptJs.simple({ folderName: "my-simple-app" });
```

---

## Downstream Integrations

On publication, this package triggers automatic updates in the following dependent repositories:

### [vs-code-ext-from-any-js](https://github.com/keshavsoft/vs-code-ext-from-any-js)
* **Description**: A VS Code extension to start from any JS and hook folders.
* **GitHub Repository**: [keshavsoft/vs-code-ext-from-any-js](https://github.com/keshavsoft/vs-code-ext-from-any-js)
* **VS Code Marketplace**: [any js start hooking](https://marketplace.visualstudio.com/items?itemName=KeshavSoft.vs-code-ext-from-any-js)

---

## License

MIT
