import SettingsService from '../../../data-services/SettingsService'

export const saveSettings = (settings, { settings: toSave }) => {
    let newSettings = Object.assign({}, settings, toSave);
    SettingsService.saveSettings(newSettings);
    return newSettings;
}