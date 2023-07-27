const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld('versions', {
    node: ()=> process.versions.node,
    chrome: () => process.versions.chrome,
    electron:()=> process.versions.electron,
    horario:()=>  new Date(),
    
})


contextBridge.exposeInMainWorld('Functions', {
    horario:()=>  new Date(),
    ping: async ()=>  await ipcRenderer.invoke('ping')
})

