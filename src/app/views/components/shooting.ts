export class Shooting {
    public shootingGraphics: PIXI.Graphics

constructor(x:number, y: number, width: number, height: number) {
       this.shootingGraphics = new PIXI.Graphics()
        this.shootingGraphics.beginFill(0xFFFF00)
        this.shootingGraphics.drawRect(0, 0, width, height)
        this.shootingGraphics.endFill()
        this.shootingGraphics.x = x
        this.shootingGraphics.y = y

}
}