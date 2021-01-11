const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const menu = require('./src/scene/Electron/menu');

/* Create Browser Window */
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
  
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, 'public/index.html'));
}

/* Initialize */
app.on('ready', createWindow);

/* Show menu onClick */
ipcMain.on('show-menu', (_, pt) => {
  win && menu.popup({
    window: win,
    x: pt.x,
    y: pt.y,
  });
});

/* Dev reload TODO: Check environment */
require('electron-reload')(__dirname);