const { remote, shell } = window.require('electron');
let fs = remote.require('fs');

export function getFileList(path) {
    if (!fs.existsSync(path)) return [];
    let dir = fs.readdirSync(path);
    let dirs = [];
    for (var child of dir) {
        dirs.push(path + "\\" + child);
    }

    return dirs;
}

export function launchFile(path) {
    shell.openItem(path);
}

export let allowedTypes = ["mp4", "mov", "avi", "wmv", "mkv", "flv"];