class Player{
    constructor(x,y){
        
        var option={
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,10,30);
        World.add(world, this.body);
        
    }

    display(){

        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        stroke ("red");
        strokeWeight(5);
        rect(this.bod.pos.x , this.body.pos.y , 10, 30);

    }
}