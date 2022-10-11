const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')
const { ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    console.log('createWindow')
    ipcMain.handle('ping', () => {console.log('pong')})
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })

  })
  // for windows close
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
