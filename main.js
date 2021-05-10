const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 400,
    maximizable: false,
    icon:  __dirname + './fynlogo.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()
  
}

app.whenReady().then(createWindow)



//disable menu
app.on('browser-window-created',function(e,window) {
    window.setMenu(null)
})





app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
