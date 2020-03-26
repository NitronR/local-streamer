const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({
        width: 1600, height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // set dataPath property so that it can be accessed in the application
    // this path represents the directory where all the data will be stored
    win.dataPath = path.join(app.getPath('appData'), "Local streamer");

    if (!fs.existsSync(win.dataPath)) {
        fs.mkdirSync(win.dataPath);
    }

    // and load the index.html of the app.     
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
}
app.on('ready', createWindow);