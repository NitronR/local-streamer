const { remote } = window.require('electron');
const fs = remote.require('fs');
const path = remote.require('path');

export default class StorageService {
    // returns local data directory path
    static getDataPath() {
        let { dataPath } = remote.getCurrentWindow();
        return dataPath;
    }
    // writes json object to the file with given file name, stored in the local data directory
    static writeJson(fileName, jsonObj) {
        let jsonString = JSON.stringify(jsonObj);
        fs.writeFileSync(path.join(this.getDataPath(), fileName), jsonString);
    }
    // reads json object from the file with given file name, stored in the local data directory
    static readJson(fileName) {
        let sourcePath = path.join(this.getDataPath(), fileName);
        if (fs.existsSync(sourcePath)) {
            try {
                // load data
                let jsonData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
                return jsonData;
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("Data file not found");
        }
        return {};
    }
}