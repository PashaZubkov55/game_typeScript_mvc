import {Model} from '../model/model'
import{Ship} from "./components/ship";
import {Shooting} from "./components/shooting";
import {Square} from "./components/square"


export class Views {


    private app: any
    public ship = new  Ship(this.model.ship_X, this.model.ship_Y, this.model.ship_width, this.model.ship_Height )
    public shooting = new Shooting(this.model.shooting_X, this.model.shooting_Y, this.model.shooting_Width, this.model.shooting_height)
    public square = new Square(this.model.square_X, this.model.square_Y,)


    public container: PIXI.Container

    get getShipX(){
        return this.ship.shipGraphics.x

    }
    set setShipX(x: number){
      this.ship.shipGraphics.x = x
    }
    get getShipY(){
        return this.ship.shipGraphics.y
    }
    set setShipY(y: number){
        this.ship.shipGraphics.y = y
    }

    get getShooting_X(){
        return this.shooting.shootingGraphics.x
    }
    set setShooting_X(x:number){
        this.shooting.shootingGraphics.x = x
    }

    get getShooting_Y(){
        return this.shooting.shootingGraphics.y
    }

    set setShooting_Y(y: number){
        this.shooting.shootingGraphics.y = y
    }

    set setSquare_X(x: number){
        this.square.squareGraphics.x = x
    }
    get  getSquare_X(){
       return  this.square.squareGraphics.x
    }
    set setSquare_Y(y:number){
        this.square.squareGraphics.y = y
    }

    get getSquare_Y(){
        return this.square.squareGraphics.y

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
        this.container.addChild(this.ship.shipGraphics)
        this.container.addChild(this.shooting.shootingGraphics)
        this.container.addChild(this.square.squareGraphics)



    }
    constructor(private model: Model ) {

        this.intGame()
    }



}