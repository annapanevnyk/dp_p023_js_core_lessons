// Task 1

function sumMin(array2d) {
    let  sum = 0;

    array2d.forEach(element => {
        
        sum += Math.min(...element);

    });

    return sum;
}

// sumMin( [ [1,2,4,6], [3,67,4, 11], [5,78,23,14] ] );
console.log(sumMin( [ [1,2,4,6], [3,67,4, 11], [5,78,23,14] ] ));


// Task 2
function twoIldestAges(ages) {

    function numberSort(a,b) {
       return a - b;
    }

    return ages.sort(numberSort).reverse().splice(0,2).reverse();
}

console.log(twoIldestAges([34,6, 55, 12, 8, 555, 66]));

// Task 3

function shortestWord(words){

    let shortestWord = words;
    words = words.split(' ');

    for(let word of words){

        if(word.length < shortestWord.length){
                shortestWord = word;
        }
    }
    return shortestWord.length;
}

console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'));


// Task 4

const onlyNumber = /\d/;
function order(words){

    function stringWithNumberSort(a, b){
        return a.match(onlyNumber) - b.match(onlyNumber)
    }

    return words.split(' ').sort(stringWithNumberSort).join(' ')
    
}

console.log(order("is2 Thi1s T4est 3a"));


// Task 5
function changeCircle(event){

    event.preventDefault();

    let changecolor = document.getElementById('circle');

    changecolor.style.backgroundColor = colorname.value;
    changecolor.style.width = size.value;
    changecolor.style.height = size.value;
}

changecolor.addEventListener("submit", changeCircle);


