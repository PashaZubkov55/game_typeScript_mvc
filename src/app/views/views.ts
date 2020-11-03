import {Model} from '../model/model'
import{Ship} from "./components/ship";


export class Views {


    private app: any
    public ship  = new Ship(this.model.ship_X, this.model.ship_Y, this.model.ship_width, this.model.ship_Height )



    private container: PIXI.Container

    get getShipX(){
        return this.ship.shipTexture.x

    }
    set setShipX(x: number){
      this.ship.shipTexture.x = x
    }
    get getShipY(){
        return this.ship.shipTexture.y
    }
    set setShipY(y: number){
        this.ship.shipTexture.y = y
    }

    intGame() {
        this.app = new PIXI.Application({
            width: 500,
            height: 500,
            backgroundColor: 0x000000,
        })
        document.body.appendChild(this.app.view)
        this.container = new PIXI.Container
        this.app.stage.addChild(this.container)
        this.container.addChild(this.ship.shipTexture)



    }
    constructor(private model: Model ) {

        this.intGame()
    }



}