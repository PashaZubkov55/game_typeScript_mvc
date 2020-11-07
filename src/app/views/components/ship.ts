

export class Ship  {
    public shipGraphics: PIXI.Graphics
    constructor(  public x: number,public  y: number, public width:number,  public height:number) {

         this.drawShip()

    }
    drawShip(){
        this.shipGraphics = new PIXI.Graphics()
        this.shipGraphics.beginFill(0x4169E1)
        this.shipGraphics.drawEllipse(0,0, this.width, this.height)
        this. shipGraphics.endFill()
        this.shipGraphics.x =this.x
        this.shipGraphics.y = this.y
    }
}