const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 417,
        height: 660
    })

    win.loadFile('index.html')
}

app.whenReady().then(() =>{
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})