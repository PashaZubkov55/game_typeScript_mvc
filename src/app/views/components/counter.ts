export class Counter{
    public counterHit: PIXI.Text;
    public counterMiss:PIXI.Text;


    constructor(public textMiss: number, public textHit:number ) {
        this.textCollision()
        this.textInCollision()
    }

    textCollision(){
        let styleTextHit =  new PIXI.TextStyle({
            fontSize:30,
            fill: 'green'
        })
        this.counterHit = new PIXI.Text(this.textHit, styleTextHit )
        this.counterHit.x = 410
        this.counterHit.y = 10
    }

    textInCollision(){
        let styleTextMiss =  new PIXI.TextStyle({
            fontSize:30,
            fill: 'red'
        })
        this.counterMiss = new PIXI.Text(this.textMiss, styleTextMiss )
        this.counterMiss.x = 460
        this.counterMiss.y = 10
    }

}