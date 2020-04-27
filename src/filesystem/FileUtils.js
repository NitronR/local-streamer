const { remote, shell } = window.require('electron');
let fs = remote.require('fs');
let path = remote.require('path');

export let allowedTypes = ["mp4", "mov", "avi", "wmv", "mkv", "flv"];

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

// get list of all files from all subdirectories
export function getAllFilePaths(dirPath, filterFunc = () => true) {
    let dir = fs.readdirSync(dirPath);
    let filePaths = [];
    for (let child of dir) {
        let childPath = path.join(dirPath, child);
        if (fs.lstatSync(childPath).isDirectory()) {
            filePaths = filePaths.concat(getAllFilePaths(childPath, filterFunc));
        } else if (filterFunc(childPath)) {
            filePaths.push(childPath);
        }
    }
    return filePaths;
}