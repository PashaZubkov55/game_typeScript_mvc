import {Views} from "../views/views";
import{Model} from "../model/model";



export class Controller{
    private movement: number = this.modal.ship_X
    private shot: number = this.modal.shooting_Y

    constructor(private view:Views ,private modal: Model){
        this.intervalShot()

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

}