---
layout: default
title: json-crud-ui-init
---

# json-crud-ui-init

A lightweight CLI and library to scaffold static UI boilerplate code (HTML, JS, and CDN templates) directly inside the `public` folder of your project.

---

## 🚀 Key Features

* **Instant Scaffolding**: Easily generate responsive CRUD or simple web pages.
* **CDN References**: Generates lightweight templates that load required dependencies directly from reliable CDNs.
* **Flexible Usage**: Run as an interactive CLI or import programmatically in your own Node.js scripts.

---

## 📦 Installation

You can run the generator directly without installing it, using `npx`:

```bash
npx json-crud-ui-init <command> [options]
```

Or install it globally:

```bash
npm install -g json-crud-ui-init
```

---

## 🛠️ CLI Commands

| Command | Description |
| :--- | :--- |
| `init` | Initialize local static UI boilerplate. |
| `initFromCdn` | Scaffold UI boilerplate referencing dependencies from a CDN. |
| `initHeaderFromCdn` | Scaffold CDN-based Header boilerplate. |
| `initTableFromCdn` | Scaffold CDN-based Table boilerplate. |

---

## 💻 Programmatic API

You can also integrate the templates programmatically in your projects:

```javascript
import { fromScriptJs, initHeaderFromCdn } from "json-crud-ui-init";

// Generate CRUD or simple script boilerplate
fromScriptJs.crud({ folderName: "my-crud-app" });
fromScriptJs.simple({ folderName: "my-simple-app" });
```

---

## 🔗 Links

* **GitHub Repository**: [GitHub](https://github.com/keshavsoft/json-crud-ui-init)
* **NPM Registry**: [NPM](https://www.npmjs.com/package/json-crud-ui-init)
