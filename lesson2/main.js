
//Task 1

let height = +prompt('Enter height of your room in m');
let width = +prompt('Enter width of your room in m');
let length = +prompt('Enter length of your room in m');
function calculate(height, width, length){
    if(height <= 1000 && width <= 1000 && length <= 1000){
        return `You need at least ${Math.ceil((((width + length) * 2) * height) / 16)}`;
    } else {
        return `Height, width or length have to be less than 1000 m`;
    }
}
alert(calculate(height,width,length));


// Task 2

// let sandPrice = prompt('Enter price of sands for all of three types in format: xxx, xxx, xxx');
// let sandBox = prompt('Enter size for all of three boxes in format: xxx, xxx, xxx');

// function numberSort(a,b) {
//     return a - b;
// };

// sandPrice = sandPrice.split(',').sort(numberSort).reverse();
// sandBox = sandBox.split(',').sort(numberSort).reverse();

// function calculatePrice(prices, boxes){

//     let total = 0;

//     prices.forEach(function(e, i) {
//         if(prices[i] > 100 || boxes[i] > 100){
//             return `wrong values`;
//         }
//         total += (prices[i] *  boxes[i]);
//     });

//     return `The most profitable price will be ${total}`;
    
// }

// alert(calculatePrice(sandPrice, sandBox));



// Task 3


// let fortuneNumber = prompt('Enter number of your ticket xxxxxx');

// function isFortuneNumber(number){
    
//     number = String((number / 1000).toFixed(3)).split('.');

//     let firstThree = number[0].split('');
//     let lastThree = number[1].split('');
//     let totalFirst = totalLast = 0;

//     firstThree.forEach(function(e, i) {
//         totalFirst += +firstThree[i];
//         totalLast += +lastThree[i];
//     });
//         return totalFirst == totalLast ? 'YES' : 'NO';        
//     }

// }

// alert(isFortuneNumber(fortuneNumber));



// // Task 4
// // 1

let userAge = +prompt('How old are you?');

if (userAge >= 0 && userAge < 12) {
    alert('You are a child');
}
else if (userAge >= 12 && userAge < 18){
    alert('You are a teenager');
}
else if (userAge >= 18 && userAge < 60){
    alert('You are an adult');
}
else if (userAge >= 60){
    alert('You are old');
}


// // 2 

let number = +prompt ('Enter number beetween 0 and 9');

[')','!','@','#','$','%','^','&','*','('].forEach(function(sumbol, index){
    if(index == number) alert(sumbol);
});
switch (number) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;   
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break; 
    case 7:
        alert('&');
        break;  
    case 8:
        alert('*');
        break;   
    case 9:
        alert('(');
        break;
    default:
        alert('incorrect number, try again')
        break;
}


// // 3

let threeDigitNumber = prompt('Enter three-digit number ')

numberArray = threeDigitNumber.split('');

if(numberArray[0] == numberArray[1] || numberArray[0] == numberArray[2] || numberArray[1] == numberArray[2]){
    alert('matches found');
}


// // 4

let year = +prompt('Enter a year');
if(year % 400 == 0)
    alert ('This is your year!');
else if(year % 4 == 0 && year % 100 !== 0 )
    alert ('This is your year!');


// 5

let fiveUnitNumber = reverseNumber = prompt('Enter five-unit number');

if(fiveUnitNumber == reverseNumber.split('').reverse().join('')){
    alert('Your number is palindrome');
}


// // 6

const eur = .93
const uah = 26.69
const azn = 1.7
let usd = +prompt('How many dollars you want to change?');
let currency = prompt ('Choose currency for change (EUR, UAH, AZN)');
switch (currency) {
    case 'EUR':
        alert(`You can recieve ${usd * eur} EUR`);
        break;
    case 'UAH':
        alert(`You can recieve ${usd * uah} UAH`);
        break;
    case 'AZN':
        alert(`You can recieve ${usd * azn} AZN`);
        break;
    default:
        alert(`incorrect currency`);
        break;
}


// // 7

let price = +prompt('Enter price of the product in USD');
if (price >= 200 && price < 300) {
    alert(`Price with sale is ${price - (price * .03)} USD`);
}
else if (price >= 300 && price < 500) {
    alert(`Price with sale is ${price - (price * .05)} USD`);
}
else if (price >= 500 ) {
    alert(`Price with sale is ${price - (price * .07)} USD`);
}

// // 8

let circle = +prompt('Please enter a of circle in sm');
let squarePer = +prompt('Enter perimeter of a square in sm');
if((circle / Math.PI) <= (squarePer / 4)){
    alert(`Your circle can fit in the square `);
}
else {
    alert(`Your circle can't fit in the square `);
}

// // 9

alert('Here is a small quiz. Please enter only number of answers');
let question1 = prompt('What is the color of the sky? 1 - Grey, 2 - Blue, 3 - Yellow');
let question2 = prompt('What is the date of Independence Day of Ukraine? 4 - 24th of August, 5 - 1st of April, 6 - 28th of June ');
let question3 = prompt('Who is the current president of 7 - Trump, 8 - Obama, 9 - reptiloids');
let sum = 0;
if(question1 == '2'){
    sum = sum + 2;
}
if(question2 == '4'){
    sum = sum + 2;
}
if(question3 == '7'){
    sum = sum + 2;
}
alert(`Congratulation! You got ${sum} points`);


// // 10

let currentDate = prompt('Enter current date as mm.dd.yy');
let tomorrow = new Date(currentDate);
tomorrow.setDate(tomorrow.getDate()+1);
alert(`Tommorow is : ${tomorrow}`);


let trafficButton = document.querySelector('.trafficButton');

trafficButton.addEventListener('click', event)


function event(){
    
    let trafficColor = document.querySelectorAll('.trafficLightColor');
    let mark = false;
    
    trafficColor.forEach(function(element, index){

        if(element.classList.contains('active') && !mark){
            
            if(index == 2){
                trafficColor[0].classList.add('active');
            } else {
                trafficColor[+index+1].classList.add('active');
            }

            mark = true;
            element.classList.remove('active');

        }

    });


}