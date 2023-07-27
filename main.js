const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');



const createWindows =() =>{
    const windows = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })

    windows.loadFile('index.html')
}


app.whenReady().then(()=>{
    ipcMain.handle('ping', async ()=> {
        const fetxh = await fetch('https://rickandmortyapi.com/api/character')
        return dataParced = await fetxh.json()
    })
    createWindows()
    app.on('activate', ()=>{
        BrowserWindow.getAllWindows().length === 0 && createWindows()
    })
})


if(process.platform !== 'darwin'){
    app.on('window-all-closed', ()=>{
        app.quit()
    })
}

