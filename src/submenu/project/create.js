const electron = require('electron');
const fs = require('fs');
const remote = electron.remote;
const dialog = remote.dialog;
const closeBtn = document.getElementById('closeBtn');
const createBtn = document.getElementById('createBtn');
const projectName = document.getElementById('project_name');

closeBtn.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
});

createBtn.addEventListener('click', (event) => {
    const dir = dialog.showOpenDialog({ properties: ['openDirectory'] });
    selected.innerHTML = dir;
    const path = dir+'/'+projectName.value;
    fs.mkdirSync(path, {recursive: true});
    fs.writeFileSync(path+"/test.json", `{"projectName": "${projectName.value}"}`)

    //fs.appendFileSync(__dirname+'/../../../extraResources/projects.json', 'data to append');
    var window = remote.getCurrentWindow();
    window.close();
});