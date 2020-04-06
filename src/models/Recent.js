import File from "../filesystem/File";

export default class Recent {
    constructor(path, date, watched) {
        this.path = path;
        this.file = new File(path);
        this.watched = watched;
        this.date = date;
    }
    getDataObject() {
        return {
            path: this.path,
            timestamp: this.date.getMilliseconds(),
            watched: this.watched
        }
    }
}