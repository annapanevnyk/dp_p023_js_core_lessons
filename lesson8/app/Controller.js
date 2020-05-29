import Model from './Model.js';
import View from './View.js';

export default class Controller{

    constructor(){

        this.model = new Model();
        this.view = new View();

        this.view.addListeners(
            this.onTodoClick, 
            this.changeTaskState, 
            this.addNewTask
        );

        this.model.loadDefaultData(() => { 
            return this.view.render(this.model.todo)
        });
        
        this.view.render(this.model.todo);
    
    }


    onTodoClick = (event) => {

        this.model.onTodoClick(+event.target.dataset.id);
        this.view.render(this.model.todo);

    }

    changeTaskState = (state) => {

        this.model.changeTaskState(state);
        this.view.render(this.model.todo);

    }

    addNewTask = () => {

        this.model.addNewTask(this.view.getNewTaskValue());
        this.view.render(this.model.todo);
        this.view.cleanInputValue();

    }
}
