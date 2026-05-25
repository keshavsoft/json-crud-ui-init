import { locateSource } from "./initFromCdn/steps/locateSource.js";

import { createProject } from "./initFromCdn/steps/createProject.js";
import { announce } from "./initFromCdn/steps/announce.js";

import resolveFolderName from "./initFromCdn/steps/resolveFolderName.js";
import checks from "./initFromCdn/steps/checks.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({ toPath, inAnnounce });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = resolvedFolderName;

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};