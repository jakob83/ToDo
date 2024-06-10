import './index.css';
import { Task } from './modules/task.js';
import { Project } from './modules/project-manager.js';
import { addEventListeners } from './modules/user-interface.js';
import { getProjects } from './modules/project-manager.js';
import { updateProjects } from './modules/project-manager.js';
import { buildProjects } from './modules/user-interface.js';
Project.addProject(new Project('My first project'));

addEventListeners();


window.addEventListener('load', () => {
    let data = localStorage.getItem('projects');
    data = JSON.parse(data);
    let arr = data.map(obj => {
        return Project.fromJSON(obj);
    })
    updateProjects(arr);
    buildProjects();
});

window.addEventListener('beforeunload', () => {
    const data = JSON.stringify(getProjects());
    localStorage.setItem('projects', data);
});


