const path = require('path');
const { app, BrowserWindow, ipcMain, globalShortcut,  Menu } = require('electron');
const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer');
const client = require('electron-connect').client;
const HotKeys = require('./utils/hot-keys.ts') 
// 判断环境变量
const isDev = process.env.IS_DEV == "true" ? true : false;
function createWindow() {
  // 创建窗口
  Menu.setApplicationMenu(null)
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    webPreferences: {
      // 预加载
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload/index.ts'),
    },
  });
  const hotKeys = new HotKeys(mainWindow)
  hotKeys.up()
  ipcMain.on('window-new', (e, data) => {
    console.log(data);
  });
  // 基于环境变量，判断窗口要载入的内容（即要显示的内容）
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:5173'  // 如果是开发环境，则载入vite服务
      : `file://${path.join(__dirname, '../dist/index.html')}`  // 如果是正式环境，则载入vite生成的index.html
  );
  // 如果是开发环境，则自动打开Chrome debugger工具
  if (isDev) {
    mainWindow.webContents.openDevTools();
    client.create(mainWindow)
  }
}
 // 监听渲染进程方法

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // console.log('123123',mainWindow);
  
  // console.log(mainWindow ,new HotKeys(mainWindow));
  
  // const hotKeys = new HotKeys(mainWindow)
  // hotKeys.up()
  // globalShortcut.register('F11', () => {
  //   console.log('2346',mainWindow);
    
  //   if(mainWindow.fullScreen) {
  //     mainWindow.fullScreen = false
  //   } else {
  //     mainWindow.fullScreen = true
  //   }
  // })
  // globalShortcut.register('Esc', () => {
  //   mainWindow.close()
  // })
  // globalShortcut.register('F9', () => {
  //   if(mainWindow.isMinimized()){
  //     mainWindow.restore()
  //   } else {
  //     mainWindow.minimize()
  //   }
  // })
  // globalShortcut.register('F10', () => {
  //   if(mainWindow.isMaximized()){
  //     mainWindow.unmaximize()
  //   } else {
  //     mainWindow.maximize()
  //   }
  // })
  if(isDev) {
    globalShortcut.register('CommandOrControl+Q',()=>{
      //获取当前窗口
      BrowserWindow.getFocusedWindow()?.webContents.openDevTools()
    })
  }

  installExtension(VUEJS_DEVTOOLS).then(
    (name) => console.log(`Added Extension:  ${name}`)
  ).catch(
    (err) => console.log('An error occurred: ', err)
  );
  
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});