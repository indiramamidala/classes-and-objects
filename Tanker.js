class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.image = loadImage("sprites/canon.png");
     World.add(world.this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position;
      var angle = this.angle.position;
      push();
      translate(pos.x,pos.y);
      pop();
  
    };
}
