const { dialog, BrowserWindow } = require('electron');

function loadData() {
  dialog.showOpenDialog({
    properties: ['openFile'],
    // filters: [{ name: 'Data', extensions: ['csv'] }]
  }).then(data => {
    if (!data.canceled) {
      BrowserWindow.getFocusedWindow().webContents.send('get-csv', data);
    }
  });
}

module.exports = { loadData };