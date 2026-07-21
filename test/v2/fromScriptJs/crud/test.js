import { fromScriptJs } from "../../../../index.js";

const startFunc = () => {
    fromScriptJs.crud({
        folderName: "fold1"
    });
};

startFunc();