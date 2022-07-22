const { globalShortcut } = require('electron')

class HotKeysController{
    win = null
    constructor(win) {
       this.win = win
    }
    up(...keys){
        if(keys.length == 0){
            // 开启全部热键
            for(const key in hotKeys) {
                hotKeys[key](this.win)
            }
        }else {
            keys.forEach(item => {
                hotKeys[item](this.win)
            })
        }
    }
}

const hotKeys = {
    fullScreen: (win) => {
        //全屏
        globalShortcut.register('F11', () => {
            if(win.fullScreen) {
              win.fullScreen = false
            } else {
              win.fullScreen = true
            }
          })
    },
    exit: (win) => {
        //退出程序
        globalShortcut.register('Esc', () => {
            win.close()
        })
    },
    minimized: (win) => {
        // 最小化
        globalShortcut.register('F9', () => {
            if(win.isMinimized()){
              win.restore()
            } else {
              win.minimize()
            }
        })
    },
    maximized: (win) => {
        // 最大化
        globalShortcut.register('F10', () => {
            if(win.isMaximized()){
              win.unmaximize()
            } else {
              win.maximize()
            }
        })
    }
}

module.exports = HotKeysController