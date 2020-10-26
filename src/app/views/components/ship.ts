

export class Ship {
   public ship
    constructor(  x: number, y: number ) {
         this.ship = new  PIXI.Sprite()
        const  shipTexture = new PIXI.Graphics()
        shipTexture.beginFill(0x4169E1)
        shipTexture.drawEllipse(x, y, 50, 20)
        shipTexture.endFill()
        this.ship.addChild(shipTexture)

    }
}