import {Views} from "../views/views";
import{Model} from "../model/model";



export class Controller{
    private movement: number = this.modal.ship_X
    private shot: number = this.modal.shooting_Y
    private squareInterval = this.modal.square_Y
    private squareX = this.modal.square_X
    private containerWidth :number = 500

    constructor(private view:Views ,private modal: Model){
        this.intervalShot()
        this.intervalSquare()

        document.addEventListener('keydown', (e)=>{
            if (e.keyCode ==37){
               this.movementLeft()
            }else if(e.keyCode ==39){
                this.movementRight()
            }




        })
       
    }

    movementLeft(){
        this.movement -= 5
        this.modal.ship_X = this.movement
        this.modal.shooting_X = this.movement
        this.view.setShipX = this.modal.ship_X
        this.view.setShooting_X = this.modal.shooting_X
    }
    movementRight(){
        this.movement += 5
        this.modal.ship_X = this.movement
        this.modal.shooting_X = this.movement
        this.view.setShipX = this.modal.ship_X
        this.view.setShooting_X = this.modal.shooting_X

    }

    intervalShot(){
       // let shot = 380
        let interval = setInterval(  ()=>{
            this.shot -= 100
            this.modal.shooting_Y = this.shot
            this.view.setShooting_Y = this.modal.shooting_Y
            if (this.shot < 0){
                this.shot = 380
                this.modal.shooting_Y = this.shot
                this.view.setShooting_Y = this.modal.shooting_Y


            }
        }, 1000)

    }
    intervalSquare(){
        let squareX = Math.random()* this.containerWidth
        this.modal.square_X = squareX
        this.view.setSquare_X = this.modal.square_X
        let squareY = 0
       let interval = setInterval(() => {
           squareY+= 10
           this.modal.square_Y = squareY
           this.view.setSquare_Y = this.modal.square_Y

       },1000)
    }



}