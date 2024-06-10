import { toggleVisible } from './user-interface.js';
function buildProjectUI(project, mod = { header: true, btn: true }) {
    const projectInfo = document.querySelector('.project-info');
    const header = document.createElement('h1');
    header.innerText = project.name;
    if (mod.header) projectInfo.appendChild(header);
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="aliceblue" stroke-width="2.4" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="aliceblue" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>`
    addTaskBtn.innerHTML += 'add task';
    if (mod.btn) projectInfo.appendChild(addTaskBtn);
    const form = document.querySelector('.popup-form');
    addTaskBtn.addEventListener('click', () => {
        toggleVisible(form);
    });
    //logic for adding project tasks:
}

export { buildProjectUI };