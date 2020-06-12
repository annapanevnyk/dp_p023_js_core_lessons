export default class View{

    selectors = {
        game    : '.game',
        item    : '.item',
        restart : '.restart',
        score   : '.score',
        minutes : '.minutes',
        seconds : '.seconds'
    };

    dom = {};

    linkToDomElement = _ => {

        for(const key in this.selectors){
            if(this.dom[key] == undefined || this.dom[key].length == 0){
                this.dom[key] = document.querySelectorAll(this.selectors[key]);
            }
        }

    }

    addEventListeners = (onClickItem, onClickRestart) => {

        // add click function to every square
        [...this.dom.item].forEach(item => {
            item.addEventListener('click', onClickItem);
        });

        this.dom.restart[0].addEventListener('click', onClickRestart);

    }
    
    static getShowedItems = _ => {
        // All elements with class show
        return document.querySelectorAll('.item.show');

    }

    static getMatchedItems = _ => {

        return document.querySelectorAll('.item.matched');

    }

    static getItemsById = (id) => {

        return document.querySelectorAll(`.item[data-id="${id}"]`);

    }

    showScore = (score) => {

        
        alert(`Congratulation! Your score is ${score}`);
       

    }

    clearDom = _ => {
        
        this.dom.score[0].innerText = 0;
        this.dom.game[0].innerHTML  = '';
        this.dom.item               = [];

        this.renderTimer('00', '00');

    }

    renderScore = (score) => {
        
        this.dom.score[0].innerText = score;

    }

    renderTimer = (seconds, minutes) => {

        this.dom.seconds[0].innerHTML = seconds;
        this.dom.minutes[0].innerHTML = minutes;

    }
    
    renderGame = (count, getRandomIndex, images) => {

        for(let i = 1; i <= count; i++){

            let div = document.createElement('div');
            let index = getRandomIndex();

            div.classList.add('item');
            div.setAttribute('data-id', index);
            div.style.backgroundImage = `url(${images[index - 1].image})`;
            
            this.dom.game[0].appendChild(div);

        }

        // add new created element to this.dom
        this.linkToDomElement();

    }


}
