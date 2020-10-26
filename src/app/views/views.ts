import {Model} from '../model/model'
export class Views {
    private shipHeight: number = 0;
    private shipWidth: number = 0;
    private squareWidth: number = 0;
    private squareHeight: number = 0 ;


    get ship_Height(){
        return this.shipHeight
    }
    set ship_Height(height:number){
        this.shipHeight = height
    }

    get ship_width(){
        return this.shipWidth
    }
    set ship_width(width:number){
        this.shipWidth = width
    }

    get square_Width (){
        return this.squareWidth
    }
    set square_width(width:number){
        this.squareWidth = width
    }

    get squire_Height(){
        return this.squareHeight
    }
    set squire_Height(height:number){
        this.shipHeight = height
    }

    private app: any
    intGame() {
        this.app = new PIXI.Application({
            width: 500,
            height: 500,
            backgroundColor: 0x000000,
        })
        document.body.appendChild(this.app.view)
    }
    constructor( private modal: Model) {
        this.intGame()
    }

}