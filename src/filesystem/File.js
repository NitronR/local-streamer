export default class File {
    constructor(path) {
        const { remote } = window.require('electron');
        this.fs = remote.require('fs');
        this.name = path.substring(path.lastIndexOf('\\') + 1);
        this.path = path;
        this.exists = this.fs.existsSync(path);
        this.extension = this.name.substring(this.name.lastIndexOf(".") + 1);
        this.isDir = false;
        try {
            if (this.exists)
                this.isDir = this.fs.lstatSync(path).isDirectory();
        } catch (error) {
            console.error(error);
        }
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