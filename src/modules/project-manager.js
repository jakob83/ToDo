import { Task } from "./task";
const projects = [];

class Project {
    #tasks;
    #active;
    constructor(name, tasks, active) {
        this.name = name;
        this.#tasks = tasks || [];
        this.#active = active || false;
    }


    toggleDoneTask(i) {
        this.#tasks[i].toggleDone();
    }
    addTask = (task) => this.#tasks.push(task);
    getTasks = () => this.#tasks;
    deleteTask = (i) => this.#tasks.splice(i, 1);
    makeActive = () => this.#active = true;
    makeInactive = () => this.#active = false;
    getActive = () => this.#active;
    static addProject = function (project) {
        projects.push(project);
    }
    static deleteProject = (i) => projects.splice(i, 1);

    toJSON() {
        return {
            name: this.name,
            tasks: this.#tasks,
            active: this.#active,
        }
    };
    static fromJSON(obj) {
        let tasks = obj.tasks;
        if (tasks) {
            tasks = tasks.map(task => {
                return Task.fromJSON(task);
            });
        }
        return new Project(obj.name, tasks, obj.active)
    }

}

const getProjects = () => projects;


function makeActive(index) {
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        element.makeInactive();
    }
    if (index < 0) {
        return;
    }
    projects[index].makeActive();
}

function addTaskToActive(task) {
    let index = getActiveIndex();
    projects[index].addTask(task);
}
function deleteTaskFromActive(i) {
    let pIndex = getActiveIndex();
    projects[pIndex].deleteTask(i);
}


function getActiveIndex() {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].getActive()) return i;
    }
}
function toggleDoneTaskFromActive(i) {
    let project = projects[getActiveIndex()];
    project.toggleDoneTask(i);
}

function updateProjects(updated) {
    for (let i = 0; i < updated.length; i++) {
        projects[i] = updated[i];
    }
}

export { updateProjects };
export { toggleDoneTaskFromActive };
export { getActiveIndex };
export { deleteTaskFromActive };
export { makeActive };
export { addTaskToActive };
export { Project };
export { getProjects };

