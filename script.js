function addToDo(){
   
    const listItem = document.createElement('li');
    const newTodo = document.getElementById('new-todo').value;
   listItem.textContent = newTodo;
   document.getElementById('todo-list').appendChild(listItem);
   document.getElementById('new-todo').value ='';
   
}