import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

const initHeaderFromCdn = async (...a) =>
    (await load("initHeaderFromCdn"))(...a);

let fromScriptJs = {};

fromScriptJs.simple = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/fromScriptJs/simple.js`);

    return mod.default(options);
};

fromScriptJs.crud = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/fromScriptJs/crud.js`);

    return mod.default(options);
};

export { load, initHeaderFromCdn, fromScriptJs };