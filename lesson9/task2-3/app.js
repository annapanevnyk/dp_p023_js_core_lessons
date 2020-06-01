// Task2

class Marker {
    constructor(color, inkLevel){
        this.color = color;
        this.inkLevel = inkLevel;
    }
    print(words){
        [...words].forEach((letter, index) => {
            if(this.inkLevel >= .5){
                if(letter != ' '){
                    this.inkLevel = this.inkLevel - .5;
                }
            }else{
                words = words.substring(0,index);
                
            }
            
        });
        console.log(`%c ${words}`, `color: ${this.color}`); 
    }
}

let marker = new Marker('green', 20);
marker.print('This task makes me crazy');

class FillableMarker extends Marker{
    fill(inkLevel){
        this.inkLevel = this.inkLevel + inkLevel > 100 ? 100 : this.inkLevel + inkLevel;
    }
}

let fillableMarker = new FillableMarker('yellow', 4);
fillableMarker.print('This task makes me crazy');
fillableMarker.fill(26);
fillableMarker.print('This task makes me crazy');
fillableMarker.print('This task makes me crazy');
fillableMarker.print('This task makes me crazy');


// Task 3

class Circle {

    constructor(radius){
        this.radius = radius;
    }

    get radius (){
        return this._radius;
    }

    set radius (value) {
        this._radius = value;
    }

    get diametr (){
        return (this.radius *2);
    }

    getCirleSquare (){
        return Math.PI * (this.radius**2);
    }

    getCircleLength (){
        return 2*(Math.PI * this.radius);
    }

}

let circle = new Circle(50);

console.log(circle.radius);
console.log(circle.diametr);
console.log(circle.getCirleSquare());
console.log(circle.getCircleLength());