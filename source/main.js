const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    kiosk: true,
    backgroundColor: '#000000'
  });
  
  mainWindow.setMenu(null);
  
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'www/main.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function () {
    mainWindow = null
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});