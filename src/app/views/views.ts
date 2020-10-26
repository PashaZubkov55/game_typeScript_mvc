import {Model} from '../model/model'
import{Ship} from "./components/ship";

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
     private container: PIXI.Container
    intGame() {
        this.app = new PIXI.Application({
            width: 500,
            height: 500,
            backgroundColor: 0x000000,
        })
        document.body.appendChild(this.app.view)
        this.container = new PIXI.Container
        this.app.stage.addChild(this.container)
        const ship = new Ship(250, 450)
        this.container.addChild(ship.ship)

    }
    constructor() {
        this.intGame()
    }

}