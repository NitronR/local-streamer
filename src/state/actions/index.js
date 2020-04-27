import * as types from './types';

// settings actions
export const saveSettings = (settings) => ({ type: types.SAVE_SETTINGS, settings })

// recents actions
export const addRecent = (recent) => ({ type: types.ADD_RECENT, recent })
export const updateRecent = (index, updates) => ({ type: types.UPDATE_RECENT, payload: { index, updates } })
export const removeRecent = (index) => ({ type: types.REMOVE_RECENT, index })
export const playRecent = (index) => ({ type: types.PLAY_RECENT, index })
export const playNextRecent = (index) => ({ type: types.PLAY_NEXT_RECENT, index })
export const playPrevRecent = (index) => ({ type: types.PLAY_PREV_RECENT, index })