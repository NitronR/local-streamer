import { combineReducers } from "redux";
import recents from './recents'
import settings from './settings'

export default combineReducers({ recents, settings })