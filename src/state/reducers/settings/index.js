import { SAVE_SETTINGS } from '../../actions/types';
import SettingsService from "../../../data-services/SettingsService";
import { createReducer } from "../utils";
import { saveSettings } from './settings'

let initialState = SettingsService.getSettings();

let settingsHandler = {
    [SAVE_SETTINGS]: saveSettings
}

export default createReducer(settingsHandler, initialState);