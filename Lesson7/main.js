
// Task 1

function decodeMorseCode(morseCode){

    let decode = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    };
    
    morseCode = morseCode.split(' ');
    
    return morseCode.map(morseSumbol => {

        for (let [key, value] of Object.entries(decode)) {
            if(value == morseSumbol){
                return key;
            }
        }
        
    }).join('');
 
}
  
document.querySelector('.morse-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert(decodeMorseCode(document.querySelector('.morsecode').value));
    document.querySelector('.morsecode').value = '';
});


// Task 2

const todo = [
    {
        id: 0,
        text : 'Task1',
        done : true
    }, 
    {
        id : 1,
        text : 'Task2',
        done : false
    },
    {
        id : 2,
        text : 'Task3',
        done : false
    },
    {
        id : 3,
        text : 'Task4',
        done : false
    }
];

function render(data){
    let toDoList = document.querySelector('.todo-list');
    toDoList.innerHTML = data.map(todo => {
        const className = todo.done ? `class="done"` : '';
        return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
    }).join('');
}

function onTodoClick(event){
    const id = +event.target.dataset.id;

    todo.forEach(todo => todo.id === id ? todo.done = !todo.done : null);

    render(todo);
}

function changeTaskState(state){
    for (let i = 0; i<todo.length; i++){
        if(todo[i].done == !state){
            todo[i].done = state;
        }
    }
    render(todo);
}

function addNewTask(){

    let newTask = document.querySelector('.newtask').value;
    let newTaskId = todo[todo.length - 1].id + 1;

    
	todo.unshift({
        id: newTaskId,
        text: newTask,
        done : false
    });

    render(todo);
    document.querySelector('.newtask').value = ' ';

}

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

render(todo);

