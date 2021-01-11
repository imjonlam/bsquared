const { ipcRenderer, contextBridge } = require('electron');
const { readRemoteFile } = require('react-papaparse');
const remote = require('electron').remote;

/* Custom titlebar */
const win = remote.getCurrentWindow();
window.onbeforeunload = () => { win.removeAllListeners(); }

document.onreadystatechange = () => {
  if (document.readyState == 'complete') { setTitlebarHandler(); }
}

function setTitlebarHandler() {
  document.getElementById('menu-btn').addEventListener('click', e => openMenu(e.x, e.y));
  document.getElementById('min-btn').addEventListener('click', () => win.minimize());
  document.getElementById('max-btn').addEventListener('click', () => win.isMaximized() ? win.unmaximize() : win.maximize());
  document.getElementById('close-btn').addEventListener('click', () => win.destroy());
}

function openMenu(x, y) {
  ipcRenderer.send('show-menu', {x, y});
}

/* Create Context Bridge API */
contextBridge.exposeInMainWorld('api', {
  receive: (channel, cb) => {
    const allowedChannels = ['get-csv'];
    if (allowedChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  }
});

/* Event Listener for parsing CSV input */
const readCSV = (url) => {
  return new Promise((resolve, reject) => {
    readRemoteFile(url, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (err) => {
        reject(err)
      }
    })  
  })
}

window.addEventListener('message', async event => {
  if (event.source !== window)  return;
  if (event.data.type == 'request') {
    window.postMessage({type: 'response', content: await readCSV(event.data.content)}) // TODO: add promise handling
  }
});