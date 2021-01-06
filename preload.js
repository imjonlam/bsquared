const { ipcRenderer, contextBridge } = require('electron');
const { readRemoteFile } = require('react-papaparse');

contextBridge.exposeInMainWorld('api', {
  receive: (channel, cb) => {
    const allowedChannels = ['get-file'];
    if (allowedChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  }
});

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