import { ADD_RECENT, PLAY_NEXT_RECENT, PLAY_PREV_RECENT, PLAY_RECENT, REMOVE_RECENT, UPDATE_RECENT } from '../../actions/types'
import { addRecent, playNextRecent, playPrevRecent, playRecent, removeRecent, updateRecent } from './recents'

import RecentsService from "../../../data-services/RecentsService";
import { createReducer } from "../utils"

let initialState = RecentsService.getRecents();
let recentsHandler = {
    [ADD_RECENT]: addRecent,
    [UPDATE_RECENT]: updateRecent,
    [REMOVE_RECENT]: removeRecent,
    [PLAY_RECENT]: playRecent,
    [PLAY_NEXT_RECENT]: playNextRecent,
    [PLAY_PREV_RECENT]: playPrevRecent,
}

export default createReducer(recentsHandler, initialState);