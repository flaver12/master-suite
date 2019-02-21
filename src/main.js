console.log(global);
const fs = require('fs');

import { JsonFileHandler } from './file/jsonFileHandler';

// Add recents projects
const container = document.querySelector('.project-wrapper');

const handler = new JsonFileHandler();
handler.loadFile('projects.json', true);
const projects = handler.getContent().projects;

projects.forEach(element => {
  let html = container.innerHTML;
  let newElement = `
    <div class="row">
      <div id="price-container">
          <p class="subtext">${element.name}</p>
          <h1 id="price">$9,503.21</h1>
      </div>
      <div id="goal-container">
          <p><span id="targetPrice">Choose a Target Price</span></p>
      </div>
      <div id="right-container">
          <button id="notifyBtn">Notify me when..</button>
      </div>
    </div>`;
    html = html + newElement;
    container.innerHTML = html;
});