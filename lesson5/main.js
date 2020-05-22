// Task 1

let dnaArray = ['A', 'T', 'G', 'C']

function changeValues(incomeData){

    incomeData.forEach(function(element, index) {

        switch(element){

            case 'A' : {
                incomeData[index] = 'T';
                break;
            }
            case 'T' : {
                incomeData[index] = 'A';
                break;
            }
            case 'G' : {
                incomeData[index] = 'C';
                break;
            }
            case 'C' : {
                incomeData[index] = 'G';
                break;
            }   
        }
    });
    return incomeData;
}
console.log(changeValues(dnaArray));

// Task 2

// 2.1

function textNumber(number) {
    let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if (number > 0 && number <= 9) {
      return first[number - 1];
    }
    if (number >= 10 && number <= 20) {
      return second[number - 10];
    }
    if (number > 20 && number <= 99) {
      let str = `${number}`;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
    }
  }
  console.log(textNumber(7));
  console.log(textNumber(20));
  console.log(textNumber(55));


// // Task 3

let trafficButton = document.querySelector('.trafficButton');

trafficButton.addEventListener('click', event);

function event(){
    
    let trafficColor = document.querySelectorAll('.trafficLightColor');
    let mark = false;
    
    trafficColor.forEach(function(element, index){

        if(element.classList.contains('active') && !mark){
            
            if(index == 2){
                trafficColor[0].classList.add('active');
            } else {
                trafficColor[index+1].classList.add('active');
            }
            mark = true;
            element.classList.remove('active');
            
            console.log(typeof index);
        }

    });

}


// // Task 4

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