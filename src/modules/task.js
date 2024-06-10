class Task {
    constructor(name, dueDate, comment, priority, done) {
        this.name = name || "Name";
        this.dueDate = dueDate || "31.12.2024";
        this.comment = comment || "No comment...";
        this.priority = priority || "low";
        this.done = done || false;
    }
    toggleDone = () => this.done = !this.done;

    static fromJSON(obj) {
        return new Task(...Object.values(obj));
    }
}

export { Task };