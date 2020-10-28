

export class Ship  {
    public shipTexture: PIXI.Graphics
    constructor(  x: number, y: number, width:number, height:number) {


          this.shipTexture = new PIXI.Graphics()
        this.shipTexture.beginFill(0x4169E1)
        this.shipTexture.drawEllipse(0,0, width, height)
       this. shipTexture.endFill()
        this.shipTexture.x = x
        this.shipTexture.y = y





    }
}