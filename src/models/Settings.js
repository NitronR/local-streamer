import { getStringVal } from "../utils/Utils";

export class Settings {
    constructor(settings) {
        this.rootPath = getStringVal(settings, 'rootPath');
    }
}