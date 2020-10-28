 export class Model{
private shipHeight: number = 20;
private shipWidth: number = 100;
private shipX: number = 250;
private shipY: number = 450;

get ship_X (){
    return this.shipX
}

     set ship_X (x:number){
         this.shipX = x
     }

     get ship_Y (){
        return  this.shipY
     }

    set ship_Y (y:number){
    this.shipY = y
}
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



}