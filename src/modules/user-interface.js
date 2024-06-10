import { Project, toggleDoneTaskFromActive } from './project-manager';
import { getProjects } from './project-manager';
import { buildProjectUI } from './build-project-ui';
import { makeActive } from './project-manager';
import { addTaskToActive } from './project-manager';
import { Task } from './task';
import { buildTasksUI } from './build-task-ui';
import { getActiveIndex } from './project-manager';
import { deleteTaskFromActive } from './project-manager';
import { getAllTasks, getTodayTasks, getWeekTasks } from './date-sorting';
import { applyDoneStyles } from './applyDoneStyles';


const addProjectBtn = document.querySelector('#addProject');
const addProjectForm = document.querySelector('#addProjectForm');
//Final add Button (the one oon the form)
const addProjectFinBtn = document.querySelector('#addProjectFinBtn');
const projectInput = document.querySelector('#projectInput');
//Container of all the project buttons
const projectContainer = document.querySelector('#projectContainer');
///Button to add the task finally (the one in the form)
const addTaskBtn = document.querySelector('#addTaskBtn');


function deleteChildNodes(parent) {
    Array.from(parent.childNodes).forEach((node) => {
        node.remove();
    });
}

//adds the project to the projects array in the project manager module:
function addProject(name) {
    let project = new Project(name)
    Project.addProject(project);
}

//So also the new added ones are being displayed:
function buildProjects() {
    //Where all the projects are displayed
    const projectContainer = document.querySelector('#projectContainer');

    //first delete all:
    deleteChildNodes(projectContainer);

    //add all the existing projects
    let projects = getProjects();
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card')
        const btn = document.createElement('button');
        btn.classList.add('project-btn');
        btn.innerText = project.name;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project');
        deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                            viewBox="0 0 30 30">
                            <path
                                d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z">
                            </path>
        </svg>
        `
        card.appendChild(btn);
        card.appendChild(deleteBtn);
        projectContainer.appendChild(card);
    })
}


function getIndexOfChild(child, parent) {
    //closest selects the closest element to .project-bt
    const index = [...parent.children].indexOf(child);
    return index;
}

function toggleVisible(element) {
    element.classList.toggle('visible');
}



//to add all the event listeners for the page:
function addEventListeners() {
    addProjectBtn.addEventListener('click', () => {
        //.visible class will be removed
        toggleVisible(addProjectBtn);
        //.visible class will be added
        toggleVisible(addProjectForm);
    });
    addProjectFinBtn.addEventListener('click', () => {
        let input = projectInput.value;
        addProject(input);
        buildProjects();
        //.visible class will be removed
        toggleVisible(addProjectBtn);
        //.visible class will be added
        toggleVisible(addProjectForm);
    });
    const taskContainer = document.querySelector('#taskContainer');
    const projectInfo = document.querySelector('.project-info');
    projectContainer.addEventListener('click', (e) => {
        const index = getIndexOfChild(e.target.parentElement, projectContainer)
        if (e.target.closest('.delete-project')) {
            Project.deleteProject(index);
            buildProjects();
            return;
        }
        deleteChildNodes(projectInfo);
        //handling a click on the project button
        buildProjectUI(getProjects()[index]);
        //making the clicked prjct the active one
        makeActive(index);
        deleteChildNodes(taskContainer);
        buildTasksUI(taskContainer, getProjects()[getActiveIndex()].getTasks());
    })

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('#nameInput').value;
        const dueDate = document.querySelector('#dueDate').value;
        const comment = document.querySelector('#comment').value;
        const priority = document.querySelector('#priority').value;

        addTaskToActive(new Task(name, dueDate, comment, priority))
        const form = document.querySelector('.popup-form');
        toggleVisible(form);
        deleteChildNodes(taskContainer);
        buildTasksUI(taskContainer, getProjects()[getActiveIndex()].getTasks());
    })
    taskContainer.addEventListener('click', (e) => {
        const clickedTaskCard = e.target.closest('.task-card');
        const index = getIndexOfChild(clickedTaskCard, clickedTaskCard.parentElement);
        if (e.target.closest('.delete-task')) {
            //handle the deleting of task
            deleteTaskFromActive(index);
            deleteChildNodes(taskContainer);
            buildTasksUI(taskContainer, getProjects()[getActiveIndex()].getTasks());
            return;
        }
        else if (e.target.closest('.doneCheckbox')) {
            //logic for marking as done
            toggleDoneTaskFromActive(index);
            applyDoneStyles(taskContainer, getProjects()[getActiveIndex()].getTasks());
            return;
        };
        //logic for task overview
    })
    const todayTasksBtn = document.querySelector('#todayTasksBtn');
    todayTasksBtn.addEventListener('click', () => {
        makeActive(-1);

        deleteChildNodes(projectInfo);
        buildProjectUI({ name: 'Todays Tasks' }, { header: true, btn: false });
        deleteChildNodes(taskContainer);
        buildTasksUI(taskContainer, getTodayTasks());
    })
    const weekTaskBtn = document.querySelector('#weekTaskBtn');
    weekTaskBtn.addEventListener('click', () => {
        makeActive(-1);
        deleteChildNodes(projectInfo);
        buildProjectUI({ name: 'This Week\'s Tasks' }, { header: true, btn: false })
        deleteChildNodes(taskContainer);
        buildTasksUI(taskContainer, getWeekTasks());
    })
    const allTaskBtn = document.querySelector('#allTaskBtn')
    allTaskBtn.addEventListener('click', () => {
        makeActive(-1);
        deleteChildNodes(projectInfo);
        buildProjectUI({ name: 'All Tasks' }, { header: true, btn: false })
        deleteChildNodes(taskContainer);
        buildTasksUI(taskContainer, getAllTasks());
    })

}

export { addEventListeners };
export { toggleVisible };
export { buildProjects };