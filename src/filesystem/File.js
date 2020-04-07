import { allowedTypes } from "./FileUtils";

export let isAllowedType = (path) => allowedTypes.includes(new File(path).extension)

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
    siblingsInfo(filterFunc) {
        let fileList = this.fs.readdirSync(this.getParentPath());
        fileList = fileList.filter(filterFunc);

        return { index: fileList.indexOf(this.name), total: fileList.length, adjs: fileList };
    }
    getAdjacent(direction) {
        let parent = this.getParent();

        let { adjs, index, total } = this.siblingsInfo(isAllowedType);
        let adj = null;
        let extreme = (e) => (direction === 1) ? e : 0;

        // check if this file is at last
        if (index === extreme(total - 1)) {
            let { adjs, index, total } = parent.siblingsInfo((e) => {
                let file = new File(parent.getParent().path + '\\' + e);
                return file.isDir;
            });

            // if parent dir is not last
            if (index !== extreme(total - 1)) {
                // make next the first file from the next directory
                let nextDir = parent.getParentPath() + "\\" + adjs[index + direction];
                adjs = this.fs.readdirSync(nextDir);
                adjs = adjs.filter((path) =>
                    allowedTypes.includes(new File(path).extension)
                );
                if (adjs.length !== 0)
                    adj = nextDir + "\\" + adjs[adjs.length - 1 - extreme(adjs.length - 1)]
            }
        } else {
            // if not last, then get the next file in the same directory
            adj = parent.path + "\\" + adjs[index + direction];
        }

        return adj;
    }
    getNext() {
        return new File(this.getAdjacent(1));
    }
    getPrevious() {
        return new File(this.getAdjacent(-1));
    }
}
