 export class Model{
private shipHeight: number = 20;
private shipWidth: number = 100;
private shipX: number = 250;
private shipY: number = 450;
private shootingWidth:number = 15
private shootingHeight:number = 25
private shootingX:number = 250
private shootingY:number = 300
     private squareX: number = 15;
     private squareY: number = 0;

     get shooting_Width(){
    return this.shootingWidth
     }
     set shooting_Width(width:number){
        this.shootingWidth = width
     }

     get shooting_height(){
    return this.shootingHeight
     }
     set shooting_height(height:number){
          this.shootingHeight = height
     }

     get shooting_X(){
         return this.shootingX
     }
     set shooting_X(x:number){
       this.shootingX = x
     }

     get shooting_Y(){
    return this.shootingY
     }

     set shooting_Y(y: number){
          this.shootingY = y
     }
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
     get  square_X(){
         return this.squareX
     }
     set  square_X(x:number){
         this.squareX = x
     }

     get  square_Y(){
         return this.squareY
     }
     set  square_Y(Y:number){
         this.squareY = Y
     }


}