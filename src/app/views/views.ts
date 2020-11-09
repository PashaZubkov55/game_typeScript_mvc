import {Model} from '../model/model'
import{Ship} from "./components/ship";
import {Shooting} from "./components/shooting";
import {Square} from "./components/square"
import {Counter} from './components/counter'


export class Views {


    private app: any
    public ship = new  Ship(this.model.ship_X, this.model.ship_Y, this.model.ship_width, this.model.ship_Height )
    public shooting = new Shooting(this.model.shooting_X, this.model.shooting_Y, this.model.shooting_Width, this.model.shooting_height)
    public square = new Square(this.model.square_X, this.model.square_Y,)
    public counter = new Counter(this.model.counterMiss, this.model.counterHit)


    public container: PIXI.Container

    get ShipX(){
        return this.ship.shipGraphics.x

    }
    set ShipX(x: number){
      this.ship.shipGraphics.x = x
    }
    get ShipY(){
        return this.ship.shipGraphics.y
    }
    set ShipY(y: number){
        this.ship.shipGraphics.y = y
    }

    get Shooting_X(){
        return this.shooting.shootingGraphics.x
    }
    set Shooting_X(x:number){
        this.shooting.shootingGraphics.x = x
    }

    get Shooting_Y(){
        return this.shooting.shootingGraphics.y
    }

    set Shooting_Y(y: number){
        this.shooting.shootingGraphics.y = y
    }

    set Square_X(x: number){
        this.square.squareGraphics.x = x
    }
    get  Square_X(){
       return  this.square.squareGraphics.x
    }
    set Square_Y(y:number){
        this.square.squareGraphics.y = y
    }

    get Square_Y(){
        return this.square.squareGraphics.y

    }

    get CounterHit(){
        return this.counter.counterHit.text
    }
    set CounterHit(value:number){
        this.counter.counterHit.text = value
    }
    get CounterMiss(){
        return this.counter.counterMiss.text
    }
    set CounterMiss(value:number){
        this.counter.counterMiss.text = value
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
        this.container.addChild(this.counter.counterMiss)
        this.container.addChild(this.counter.counterHit)




    }
    constructor(private model: Model ) {

        this.intGame()
    }



}