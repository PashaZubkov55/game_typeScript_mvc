import {Views} from "../views/views";
import{Model} from "../model/model";



export class Controller {
    private movement: number = this.model.ship_X
    private shot: number = this.model.shooting_Y
    private squareInterval: number = this.model.square_Y
    private squareX: number = this.model.square_X
    private containerWidth: number = 500

    constructor(private view: Views, private model: Model) {
        this.intervalShot()
        this.intervalSquare()


        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 37) {
                this.movementLeft()
            } else if (e.keyCode == 39) {
                this.movementRight()
            }


        })

    }

    movementLeft() {
        this.movement -= 5
        this.model.ship_X = this.movement
        this.model.shooting_X = this.movement
        this.view.setShipX = this.model.ship_X
        this.view.setShooting_X = this.model.shooting_X
    }

    movementRight() {
        this.movement += 5
        this.model.ship_X = this.movement
        this.model.shooting_X = this.movement
        this.view.setShipX = this.model.ship_X
        this.view.setShooting_X = this.model.shooting_X

    }

    intervalShot() {
        let interval = setInterval(() => {
            this.shot -= 30
            this.model.shooting_Y = this.shot
            this.view.setShooting_Y = this.model.shooting_Y
            if (this.shot < 0) {
                this.shot = 380
                this.model.shooting_Y = this.shot
                this.view.setShooting_Y = this.model.shooting_Y


            }
        }, 1000)

    }

    intervalSquare() {
        let distanceSquareX = Math.random() * this.containerWidth

        let squareY = 0
        let interval = setInterval(() => {
            if (this.collision(this.view.square.squareGraphics, this.view.shooting.shootingGraphics)){
                distanceSquareX = Math.random() * this.containerWidth
                squareY = 0
            }
            else if (squareY > 500){
                distanceSquareX = Math.random() * this.containerWidth
                squareY = 0
            }
            squareY += 30
            this.model.square_X = distanceSquareX
            this.view.setSquare_X = this.model.square_X
            this.model.square_Y = squareY
            this.view.setSquare_Y = this.model.square_Y

        }, 1000)
    }
    collision(obj1: PIXI.Graphics,obj2: PIXI.Graphics){
        var XColl=false;
        var YColl=false;

        if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
        if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;

        if (XColl && YColl){return true;}
        return false;
    }
}

