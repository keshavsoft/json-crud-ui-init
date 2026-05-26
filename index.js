import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

export const initHeaderFromCdn = async (...a) =>
    (await load("initHeaderFromCdn"))(...a);