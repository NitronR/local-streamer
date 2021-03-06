import { Settings } from "../models/Settings";
import StorageService from "./StorageService";

export default class SettingsService {
    // saves settings json
    static saveSettings(settings) {
        StorageService.writeJson("settings.json", settings);
    }
    // read settings json
    static getSettings() {
        let settingsData = StorageService.readJson("settings.json");
        return new Settings(settingsData.rootPath);
    }
}