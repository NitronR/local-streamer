const { remote } = window.require('electron');
let fs = remote.require('fs');

export function getFileList(path) {
    let dir = fs.readdirSync(path);
    let dirs = [];
    for (var child of dir) {
        dirs.push(path + "\\" + child);
    }

    return dirs;
}