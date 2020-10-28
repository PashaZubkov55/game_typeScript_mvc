import {Views} from "../views/views";
import{Model} from "../model/model";
import {Ship} from "../views/components/ship";

export class Controller{
    private movement: number = this.view.getShipX
    constructor(private view:Views){

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
        this.view.setShipX = this.movement
    }
    movementRight(){
        this.movement += 5
        this.view.setShipX = this.movement
    }
}