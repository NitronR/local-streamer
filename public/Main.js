const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

require('dotenv').config()

function createWindow() {
    // Create the browser window.     

    const iconPath = path.join(__dirname, "../build/icon.png");

    let win = new BrowserWindow({
        width: 1600, height: 800,
        webPreferences: {
            nodeIntegration: true
        },
        icon: iconPath
    });

    // set dataPath property so that it can be accessed in the application
    // this path represents the directory where all the data will be stored
    win.dataPath = path.join(app.getPath('appData'), "Local streamer");

    if (!fs.existsSync(win.dataPath)) {
        fs.mkdirSync(win.dataPath);
    }

    // and load the index.html of the app. 
    if (process.env.MODE === "debug") {
        win.dataPath = path.join(process.env.DEBUG_DATA_PATH, "")
        win.loadURL(process.env.DEBUG_URL);
    } else {
        win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    }
}
app.on('ready', createWindow);