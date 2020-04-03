export default class File {
    constructor(path) {
        const { remote } = window.require('electron');
        this.fs = remote.require('fs');
        this.name = path.substring(path.lastIndexOf('\\') + 1);
        this.path = path;
        this.exists = this.fs.existsSync(path);
        this.isDir = false;
        if (this.exists)
            this.isDir = this.fs.lstatSync(path).isDirectory();
    }

    getParentPath() {
        return File.getParentPath(this.path);
    }

    static getParentPath(path) {
        return path.substring(0, path.lastIndexOf("\\"))
    }

    getParent() {
        return new File(this.getParentPath());
    }
}