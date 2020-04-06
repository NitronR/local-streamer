import Recent from "../models/Recent";
import StorageService from "./StorageService";

export default class RecentsService {
    // saves recents json
    static saveRecents(recents) {
        recents = recents.map(recent => recent.getDataObject());
        StorageService.writeJson("recents.json", { recents: recents });
    }
    // read recents json
    static getRecents() {
        let { recents } = StorageService.readJson("recents.json");

        if (!recents) recents = []

        return recents.map(recent => new Recent(recent.path, new Date(recent.timestamp), recent.watched))
    }
}