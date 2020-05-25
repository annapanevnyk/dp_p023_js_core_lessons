// Task 1

function drawDiv(){
    let square = document.getElementById("square");
    for(let i = 0; i < 100; i++){
        let div = document.createElement('div');
        square.appendChild(div);
    }
}
drawDiv();

let count = 0;

function randomSquare(){
    let randomSquareNumber = ~~(Math.random() * (100 - 1 + 1)) + 1;
    let square = document.querySelector('#square > div:not(.already-was):nth-child(' +randomSquareNumber+')');

    if(count == 100){
        clearInterval(counter);
        return;
    }

    if(square == null){
        randomSquare();
        return;
    }
    
    document.querySelectorAll('#square > div').forEach(function(el){
        el.classList.remove('active');
    })

    square.classList.add('active', 'already-was');
    count++;

}
randomSquare();


let counter = setInterval(function(){
    randomSquare();
}, 1000)



// Task 2

function mathExersice(){

    const operation = ['+', '-', '*', '/']
    let A = ~~(Math.random() * (100 - 10 + 1)) + 10;
    let B = ~~(Math.random() * (100 - 10 + 1)) + 10;
    let C = ~~(Math.random() * ((operation.length-1) - 0 + 1)) + 0;
    let sum = '';

    switch (operation[C]) {
        case '+':
            sum = A + B;
            break;

        case '-':
            sum = A - B; 
            break;

        case '/':
            sum = A / B;
            break;

        case '*':
            A = ~~(Math.random() * (30 - 2 + 1)) + 2;   
            B = ~~(Math.random() * (30 - 2 + 1)) + 2;
            sum = A * B;   
            break;
        default:
            break;
    }
    
    let randomExersice = A + ' ' + operation[C] + ' ' + B + ' =';
    let random = document.querySelector('#randomExersice');

    random.innerText = randomExersice;

    let calculateResult = document.querySelector('#calculatereasult')

    calculateResult.addEventListener('submit', parseResult);

    function parseResult(event){

        event.preventDefault();
        let userAnswer = document.querySelector('#userAnswer').value;

        if (sum == userAnswer){
            alert('Все правильно!');
            calculateResult.removeEventListener('submit', parseResult);
            mathExersice();
        }
        else {
            alert('Подумай еще!')
        }

    }

}
mathExersice();


// Task 3

let userName = document.querySelector('#username');

userName.addEventListener('input', function(){
    this.value = this.value.replace(/\d/, '');
})
