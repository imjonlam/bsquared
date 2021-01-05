const { dialog, BrowserWindow } = require('electron');

exports.getFile = () => {
  dialog.showOpenDialog({
    properties: ['openFile'],
    // filters: [{ name: 'Data', extensions: ['csv'] }]
  }).then(data => {
    if (!data.canceled) {
      BrowserWindow.getFocusedWindow().webContents.send('get-file', data);
    }
  });
}