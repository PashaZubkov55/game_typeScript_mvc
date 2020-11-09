  export class Square{
        public squareGraphics: PIXI.Graphics
      constructor( private x:number, private y: number) {
        this.drawSquare()

      }
      drawSquare(){
          this.squareGraphics = new PIXI.Graphics()
          this.squareGraphics.beginFill(0x4169E1)
          this.squareGraphics.drawRect(0,0, 30, 30)
          this. squareGraphics.endFill()
          this.squareGraphics.x =this.x
          this.squareGraphics.y = this.y
      }

}