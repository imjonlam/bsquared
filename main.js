const path = require('path');
const menu = require('./src/components/Menu/menu');
const { app, BrowserWindow, ipcMain } = require('electron');

/* Create Browser Window */
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      enableRemoteModule: true,
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

/* Dev reload */
// TODO: Add environment check
require('electron-reload')(path.join(__dirname), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});