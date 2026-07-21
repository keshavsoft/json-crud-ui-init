import fs from "fs";
import simple from "../simple.js";
import crud from "../crud.js";

const files = fs.readdirSync(new URL("../commands/", import.meta.url));

const entries = await Promise.all(
    files.filter(f => f.endsWith(".js"))
        .map(async f => [f.replace(".js", ""), (await import(`../commands/${f}`)).default])
);

entries.push(
    ["simple", simple],
    ["crud", crud]
);

const map = Object.fromEntries(entries);

export default map;