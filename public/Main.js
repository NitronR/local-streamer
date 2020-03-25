const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({
        width: 1600, height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.     
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
}
app.on('ready', createWindow);