const $ = element => document.querySelector(element);
const todo = $('.todo');
const doing = $('.doing');
const done = $('.done');
const addTask = $('.addTask');

function createDrop() {
    const div = document.createElement('div');
    div.setAttribute('id', 'target');
    div.setAttribute('ondrop', 'drop_handler(event);');
    div.setAttribute('ondragover', 'dragover_handler(event);');
    return div;
}

function dropTodo(element) {
    todo.appendChild(element)
}

function dropDoing(element) {
    doing.appendChild(element)
}

function dropDone(element) {
    done.appendChild(element)
}

dropTodo(createDrop());
dropDoing(createDrop());
dropDone(createDrop());

function dragstart_handler(e) {
    e.dropEffect = "move";
    e.dataTransfer.setData("text/plain", e.target.id);
}

function dragover_handler(e) {
    e.preventDefault();
    
    e.dataTransfer.dropEffect = "move";
}

function drop_handler(e) {
    e.preventDefault();

    const target = e.target;

    var data = e.dataTransfer.getData("text");
    target.parentNode.appendChild(document.getElementById(data));
    target.parentNode.appendChild(createDrop());
    target.remove();
}

function createTask() {
    const p = document.createElement('p');
    p.setAttribute('id', 'task');
    p.setAttribute('type', 'text');
    p.setAttribute('ondragstart', 'dragstart_handler(event);');
    p.setAttribute('contenteditable', true);
    p.setAttribute('draggable', true);
    todo.insertBefore(p, document.querySelector('.todo #target'));
}

addTask.addEventListener('click', createTask);