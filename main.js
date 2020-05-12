// 1
let userName = prompt('Please enter your name')
alert(`Hello ${userName}`)

// 2
const currentYear = 2020
let userBirthdayYear = +prompt('Please enter your year of birth')
alert(`You are ${currentYear - userBirthdayYear} years old`)

// 3
let sideLength = +prompt('Please enter length of square side in sm')
alert(`Perimeter of your square is ${sideLength*4} sm`)

// 4
let circleRadius = +prompt('Please enter radius of circle in sm')
alert(`Area of your circle is ${Math.PI*(circleRadius**2)} sm^2`)

// 5
let distance = +prompt('How many kilomitres between cities?')
let time = +prompt('How many hours you want to spent for it?')
alert(`Your speed should be ${distance / time} km/hr`)

// 6 
const eur = .92
let usd = +prompt('How many dollars you want to change?')
alert(`You can recieve ${eur*usd} euros`)

// 7 
let fleshSize = +prompt('Insert size of your fleshdrive in GB?')
alert(`You can add ${Math.floor(fleshSize*1000/820)} files`)

// 8
let wallet = +prompt('How many dollars you have in your wallet')
let chocolateAmount = +prompt('Add price of 1 chocolate')
let chocolatCount = Math.floor(wallet / chocolateAmount)
alert(`You can buy ${chocolatCount} chocolates and have ${ wallet - (chocolatCount*chocolateAmount)} dollars left`)

// 9
let number = +prompt ('Enther three-digit number ')
let revertNumber = number % 10
number= Math.floor (number / 10)
revertNumber= revertNumber + '' + number % 10 
number= Math.floor (number / 10)
revertNumber= revertNumber + '' + number % 10 
alert(`Your revert number is ${revertNumber}`)
