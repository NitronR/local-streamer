import StorageService from "./StorageService";

export default class SettingsService {
    // saves settings json
    static saveSettings(settings) {
        StorageService.writeJson("settings.json", settings);
    }
    // read settings json
    static readSettings() {
        let defaultSettings = {
            rootPath: ""
        }
        return Object.assign({}, defaultSettings, StorageService.readJson("settings.json"));
    }
    // gets root path used by the file browser
    static getRootPath() {
        let settings = this.readSettings();
        return ("rootPath" in settings) ? settings.rootPath : "";
    }
}