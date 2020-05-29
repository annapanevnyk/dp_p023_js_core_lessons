export default class Model{
    
    todo = [];

    loadDefaultData(loadDoneCallback){

        const aja = new XMLHttpRequest;

        aja.onload = () => {
            const data = JSON.parse(aja.responseText);
            this.todo.push(...data);
            
            loadDoneCallback();

        };
    
        aja.open('GET', './data/data.json');
        aja.send();

    }


    changeTaskState(state){

        for (let i = 0; i < this.todo.length; i++){
            if(this.todo[i].done == !state){
                this.todo[i].done = state;
            }
        }

    }

    addNewTask(NewTaskValue){
        
        let newTaskId = this.todo[this.todo.length - 1].id + 1;

    
        this.todo.unshift({
            id: newTaskId,
            text: NewTaskValue,
            done : false
        });
        
    }

    onTodoClick(id){

        this.todo.forEach(todo => todo.id === id ? todo.done = !todo.done : null);

    }

}