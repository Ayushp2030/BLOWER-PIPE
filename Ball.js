class Ball{
    constructor(x, y, width, height){
        options = {
            isStatic : false,
            friction : 0.1
        };

    this.body = Bodies.Circle(x, y, width, height, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }
        show() {
            let pos = this.body.position;
            push();
            rectMode(CENTER);
            noStroke();
            fill(148,127,146);
            rect(pos.x,pos.y, this.w, this.h);
            pop();
          }
    
}