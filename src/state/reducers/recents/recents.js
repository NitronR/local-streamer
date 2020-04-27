import Recent from "../../../models/Recent";
import RecentsService from "../../../data-services/RecentsService";
import { launchFile } from "../../../filesystem/FileUtils";

export const addRecent = (recents, { recent }) => {
    let newRecents = [recent, ...recents]
    RecentsService.saveRecents(newRecents);
    console.log("Add recent")
    return newRecents;

};
export const removeRecent = (recents, { index }) => {
    let newRecents = [...recents];
    newRecents.splice(index, 1);
    RecentsService.saveRecents(newRecents);
    console.log("Remove recent")
    return newRecents;
};
export const updateRecent = (recents, { payload }) => {
    console.log("Update recent")
    let { index, updates } = payload;
    let newRecents = [...recents];
    Object.assign(newRecents[index], updates);
    RecentsService.saveRecents(newRecents);
    return newRecents;
};
export const playRecent = (recents, { index }) => {
    let newRecents = [...recents];
    let recent = newRecents[index];
    newRecents.splice(index, 1);
    newRecents.unshift(recent);

    // play
    launchFile(recent.file.path);

    RecentsService.saveRecents(newRecents);
    console.log("Play recent")
    return newRecents;
};
export const playNextRecent = (recents, { index }) => {
    let newRecents = [...recents];
    let recent = newRecents[index];
    let nextFile = recent.file.getNext();

    if (nextFile) {
        let newRecent = new Recent(
            nextFile.path,
            new Date(Date.now()),
            false
        );
        newRecents.splice(index, 1);
        newRecents.unshift(newRecent);

        // play
        launchFile(newRecent.path);
    } else {
        // TODO show no next available message
    }
    RecentsService.saveRecents(newRecents);
    console.log("Play next recent")
    return newRecents;
};
export const playPrevRecent = (recents, { index }) => {
    let newRecents = [...recents];
    let recent = newRecents[index];
    let prevFile = recent.file.getPrevious();

    if (prevFile) {
        let newRecent = new Recent(
            prevFile.path,
            new Date(Date.now()),
            false
        );
        newRecents.splice(index, 1);
        newRecents.unshift(newRecent);

        // play
        launchFile(newRecent.path);
    } else {
        // TODO show no previous available message
    }
    RecentsService.saveRecents(newRecents);
    console.log("Play prev recent")
    return newRecents;
};