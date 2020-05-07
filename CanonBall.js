class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x,y,10,width,options);

    this.image = loadImage("assests/canonBall.png");
    World.add(world.this.body);
  };
   

  display(){
    var pos = this.body.position;
    var angle = this.angle.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("blue");
    pop();

  };
};
