app();

function app() {
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteTick);

}



function addTask(item) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = item;

  li.innerHTML = `<span class="delete">remove me</span><input type="checkbox"><label>${item}</label>`;

  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

function submit(event) {
  event.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if (input.value != '')
    addTask(input.value);
  input.value = '';
}

3

function deleteTick(event) {
  if (event.target.className == 'delete')
    deleteTask(event);
  else {
    tickTask(event);
  }
}


function deleteTask(event) {
  let remove = event.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function clearList(event) {
  let ul = document.querySelector('ul').innerHTML = '';
}


function tickTask(event) {
  const item = event.target.nextSibling;
  if (event.target.checked) {
    item.style.textDecoration = "line-through";
    item.style.color = "#ff0000";
  } else {
    item.style.textDecoration = "none";
    item.style.color = "#2f4f4f";
  }
}

































/*

let item = document.getElementById('item');
item.addEventListener('click', addItem);

let clearAll = document.getElementById('delete');
clearAll.addEventListener('click', clearAll);

const deleteAllButton = document.getElementById(clear);



function addItem(v) {
  v.preventDefault();
  let list = document.getElementById('list-items')
  let newItem = document.createElement('item');
}


function todoList() {

  let textInput = document.getElementById('todo-input').value
  let text = document.createTextNode(textInput)
  let newItem = document.createElement('li')
  newItem.appendChild(text)
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  newItem.appendChild(checkbox);
  document.getElementById("todoList").appendChild(newItem)

};


*/


