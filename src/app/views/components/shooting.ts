export class Shooting {
    public shootingGraphics: PIXI.Graphics

constructor( public x:number, public y: number,  public width: number,  public height: number) {
        this.drawShooting()
}
    public drawShooting(){
        this.shootingGraphics = new PIXI.Graphics()
        this.shootingGraphics.beginFill(0xFFFF00)
        this.shootingGraphics.drawRect(0, 0, this.width, this.height)
        this.shootingGraphics.endFill()
        this.shootingGraphics.x = this.x
        this.shootingGraphics.y = this.y


}
}