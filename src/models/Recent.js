import File, { isAllowedType } from "../filesystem/File";

export default class Recent {
    constructor(path, date, watched) {
        this.path = path;
        this.file = new File(path);
        this.watched = watched;
        this.date = date;
        this.prevCount = 0;
        this.nextCount = 0;

        if (this.file.exists) {
            const { index, total } = this.file.siblingsInfo(isAllowedType);
            this.prevCount = index;
            this.nextCount = total - index - 1;
        }
    }
    getDataObject() {
        return {
            path: this.path,
            timestamp: this.date.getTime(),
            watched: this.watched
        }
    }
    getId() {
        return this.path + this.date.getTime()
    }
}