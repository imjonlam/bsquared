const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
const customMenu = require('./src/components/electron-menu/menu');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);

  win.loadFile(path.join(__dirname, 'public/index.html'));
}

require('electron-reload')(path.join(__dirname), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on('ready', createWindow);