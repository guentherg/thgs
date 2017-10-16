class Smoke{
  constructor(x, y){
    this.x = x + random(-1, 1);
    this.y = y + random(-1, 1);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-1, -3);
    this.lifespan = 255;
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 1;
  }

  show(){
    fill(51, this.lifespan);
    ellipse(this.x, this.y, 2);
  }
}
