export default class Model{

    images = [];

    loadImages(render){

        const aja = new XMLHttpRequest;

        aja.onload = _ => {
            this.images.push(...JSON.parse(aja.responseText));

            render();
        };

        aja.open('GET', './data/images.json');

        aja.send();

    }

}