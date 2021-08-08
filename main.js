const { app, BrowserWindow, TouchBar } = require('electron')
const path = require('path')

function createWindow() {

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,


        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload.js')
        }
    })

    mainWindow.loadFile('html/index.html')

}


app.whenReady().then(() => {

    createWindow()

    app.on('activate', function() {

        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})


app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})