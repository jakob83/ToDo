function applyDoneStyles(parent, tasks) {
    const nodeChilds = [...parent.children];
    for (let i = 0; i < nodeChilds.length; i++) {
        const task = tasks[i];
        const node = nodeChilds[i];
        console.log({ task, node, parent })
        if (task.done) {
            makeDone(node);
        }
        else {
            makeUndone(node);
        }
    }
}

function makeDone(element) {
    element.classList = 'task-card done';
    let input = element.querySelector('input');
    input.checked = true;
}
function makeUndone(element) {
    element.classList = 'task-card';

}

export { applyDoneStyles };