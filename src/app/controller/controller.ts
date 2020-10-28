import {Views} from "../views/views";
import{Model} from "../model/model";



export class Controller{
    private movement: number = this.modal.ship_X
    constructor(private view:Views ,private modal: Model){

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
        this.view.setShipX = this.modal.ship_X
    }
    movementRight(){
        this.movement += 5
        this.modal.ship_X = this.movement
        this.view.setShipX = this.modal.ship_X
    }
}