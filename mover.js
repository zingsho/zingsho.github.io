
class Mover {
    constructor(x, y) {
      this.pos = createVector(x, y);
      // this.vel = createVector(1, -1);
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(5));
    }
  
    update() {  
      
      let mouse = createVector(mouseX, mouseY);
      this.acc = p5.Vector.sub(mouse, this.pos);
      this.acc.setMag(0.5);
      
      this.vel.add(this.acc); 
      this.vel.limit(7);
      this.pos.add(this.vel);
    }
  
    show() {
      // push();
    stroke(255);
    strokeWeight(6);
    //noStroke();
      noFill();
     // fill(0);
      ellipse(this.pos.x, this.pos.y, 300);

    }
    // pop();
  }


  


    
