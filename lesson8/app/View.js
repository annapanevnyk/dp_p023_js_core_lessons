export default class View{
    
    newTask = document.querySelector('.newtask');
    toDoList = document.querySelector('.todo-list');

    addListeners(onTodoClick, changeTaskState, addNewTask){

        document.querySelector('.todo-list').addEventListener('click', onTodoClick);

        document.querySelector('.check-all').addEventListener('click', function(){
            changeTaskState(true);
        });
    
        document.querySelector('.uncheck-all').addEventListener('click', function(){
            changeTaskState(false);
        });

        document.querySelector('.addnewtask').addEventListener('submit', function(event){
            event.preventDefault();
            addNewTask();
        });

    }

    
    getNewTaskValue(){

        return this.newTask.value;

    }

    cleanInputValue(){

        this.newTask.value = '';

    }

    render(data){

        this.toDoList.innerHTML = data.map(todo => {
            const className = todo.done ? `class="done"` : '';
            return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
        }).join('');

    }
}