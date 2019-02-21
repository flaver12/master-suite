import { BrowserWindow } from "electron";

export class Project {

    create() {
        console.log('I was clicked!');
        console.log(global.sharedObj);
        this.win = new BrowserWindow(
            { 
              frame: false,
              width: 400, 
              height: 200 
            }
        );
        const modalPath = require('path').join('file://', __dirname+'/../submenu/project', 'create.html');
        this.win.on('close', function () { win = null });
        this.win.loadURL(modalPath);
        this.win.show();
    }
}