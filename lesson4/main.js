

// Task 3

//pop

let firstArray = [1, 4, 9];

function popItem(firstArray) {
    
    let len = firstArray.length;
    let lastElement = firstArray[len - 1];

    firstArray.length = len - 1;

    return lastElement;
}

console.log(popItem(firstArray));
console.log(firstArray);

//push

function pushItem(secondArray, newItem) {
    
    let len = secondArray.length;

    secondArray[len] = newItem;

    return secondArray;
}

console.log(pushItem([6, 74, 98, 55], 12));


// unshift 

let thirdArray = [5,77,443,67,21];

function unshiftItem(thirdArray, newItem){
    let newArray = [];
    for (let i = 0; i < thirdArray.length-1; i++){
        newArray[i+1] = thirdArray[i];  
    }
    newArray[0] = newItem;

    return thirdArray = newArray;
}

console.log(unshiftItem(thirdArray, 100));

// shift

let fourthArray = [44,55,62,43,5];

function shiftItem(fourthArray){
    let newArray = [];

    for (let i=0; i < fourthArray.length-1; i++){

        newArray[i] = fourthArray[i+1];
    }
    return fourthArray = newArray;
}
console.log(shiftItem(fourthArray));

// concat
let arrayFirst = [1,4,5,7,88,22];
let arraySecond = [33,557,89,21];
let arraysConcat = [...arrayFirst, ...arraySecond];
console.log(arraysConcat);

// Task 4

// ['Банан', 'Яблоко', 'Ананас'].map(el=>el[0]);
console.log(['Банан', 'Яблоко', 'Ананас'].reduce(function(total, value, index){
    total[index] = value[0];
    return total
} , []));


// ['Банан', 'Яблоко', 'Ананас'].filter(el=>el[0].toLowerCase() == 'a');
console.log(['Банан', 'Яблоко', 'Ананас'].reduce(function(element, value){
    if(value[0].toLowerCase() == 'а'){
        return [value];
    }
}));


// Task 5

let colorBlock = document.querySelectorAll('.color_block');

colorBlock.forEach(element => {
    element.addEventListener('click', event)
    
});

function event(){
    let color = getComputedStyle(this).backgroundColor;
    document.querySelector('body').style.backgroundColor = color;
}