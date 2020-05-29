import Controller from './Controller.js';

const controller = new Controller();

// const todo = [];

// function loadDefaultData(){
//     const aja = new XMLHttpRequest;
//     aja.onload = function(){
//         const data = JSON.parse(this.responseText);
//         todo.push(...data);
//         render(todo);    
//     };

//     aja.open('GET', './../data/data.json');
//     aja.send();

// }
// loadDefaultData();

// function render(data){
//     let toDoList = document.querySelector('.todo-list');
//     toDoList.innerHTML = data.map(todo => {
//         const className = todo.done ? `class="done"` : '';
//         return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
//     }).join('');
// }

// function onTodoClick(event){
//     const id = +event.target.dataset.id;

//     todo.forEach(todo => todo.id === id ? todo.done = !todo.done : null);

//     render(todo);
// }

// model
// function changeTaskState(state){
//     for (let i = 0; i<todo.length; i++){
//         if(todo[i].done == !state){
//             todo[i].done = state;
//         }
//     }
//     render(todo);
// }

// function addNewTask(){

//     let newTask = document.querySelector('.newtask').value;
//     let newTaskId = todo[todo.length - 1].id + 1;

    
// 	todo.unshift({
//         id: newTaskId,
//         text: newTask,
//         done : false
//     });

//     render(todo);
//     document.querySelector('.newtask').value = ' ';

// }

// document.querySelector('.todo-list').addEventListener('click', onTodoClick);

// document.querySelector('.check-all').addEventListener('click', function(){
//     changeTaskState(true);
// });
 
// document.querySelector('.uncheck-all').addEventListener('click', function(){
//     changeTaskState(false);
// });

// document.querySelector('.addnewtask').addEventListener('submit', function(event){
//     event.preventDefault();
//     addNewTask();
// });

// render(todo);

