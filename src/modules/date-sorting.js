import { getProjects } from "./project-manager";
import { isToday } from 'date-fns';
import { isThisWeek } from "date-fns";

function getAllTasks() {
    return getProjects().map(p => p.getTasks()).flat();
}

function getTodayTasks() {
    let allTasks = getAllTasks();
    return allTasks.filter(task => isToday(task.dueDate));
}
function getWeekTasks() {
    let allTasks = getAllTasks();
    return allTasks.filter(task => isThisWeek(task.dueDate, 1));
}

export { getTodayTasks, getWeekTasks, getAllTasks };