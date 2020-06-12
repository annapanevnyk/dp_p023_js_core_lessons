import Model from './Model.js';
import View from './View.js';

export default class Controller{
    
    
    static state = null;

    static init = _ => {
        Controller.state = new Controller();
    }

    constructor(){

        this.model          = new Model();
        this.view           = new View();

        this.timer          = null;
        this.totalSeconds   = 0;
        this.points         = 0;

        this.model.loadImages( _ => {

            this.initGame();

        });

    }

    
    set points (time) {
        this._points = time == 0 ? 0 : this._points + ~~(50 - (time / 10));
    }


    initGame = _ => {

        this.startTimer();

        this.view.linkToDomElement();

        this.view.renderGame(
            20, 
            this.getRandomIndex,
            this.model.images
        );
        
        this.view.addEventListeners(
            this.onClickItem,
            this.onClickRestart
        );

    }
    
    clearGame = _ => {

        clearInterval(this.timer);

        this.view.clearDom();

        this._points        = 0;
        this.totalSeconds   = 0;
        
    }

    finishGame = _ => {
        
        this.view.showScore(this._points);
        
        this.clearGame();

        this.initGame();
    }

    onClickItem(){

        if(!this.classList.contains('show')){
            this.classList.add('show');
        }


        let showedItems = View.getShowedItems();
        let self        = Controller.state;


        [...showedItems].forEach(element => {
            
            // if opened 2 squre and they matched
            if(showedItems.length == 2 && self.checkMatch(showedItems)){
                self.updateScore();
                element.classList.add('matched');
            }

            if(showedItems.length >= 3){
                element.classList.remove('show');
            }

        });

        this.classList.add('show');

        if(View.getMatchedItems().length == 20){
            self.finishGame();
        }

    }

    onClickRestart = _ => {

        this.clearGame();

        this.initGame();

    }


    getRandomIndex = _ =>  {

        let id = ~~(Math.random() * 10 + 1);

        if(View.getItemsById(id).length == 2){
            return this.getRandomIndex();
        }

        return id;
    }


    checkMatch = (items) => {

        items = [...items].reduce((accumulator, element, index,)=>{
            accumulator[index] = element.getAttribute('data-id');
            return accumulator;
        }, []);

        return items[0] == items[1];

    }

    updateScore = _ => {

        this.points = this.totalSeconds;
        this.view.renderScore(this._points);

    }



    startTimer = _ => {


        this.timer = setInterval( _ => {

            ++this.totalSeconds;

            this.view.renderTimer(
                //seconds
                this.pad(this.totalSeconds % 60),
                //minutes
                this.pad(~~(this.totalSeconds / 60))
            );

        }, 1000);

    }

    // TODO: refactoring (maybe exists better way)
    pad = (val) => {

        let valString = val + '';
        return (valString.length < 2) ? `0${valString}` : valString;

    }

}