class SmokeSystem{

  constructor(startX, startY){
    this.s = [];
    this.count = 0;
    this.startX = startX;
    this.startY = startY;
    //this.s = new Smoke(width/2, height/2);
    // for(var i = 0; i < 1; i++){
    //   this.s.push(new Smoke(this.startX, this.startX));
    // }
  }

  update(){
    this.count = map(gasSlider.value(), 0, 10, 0, 3);
    for(var i = 0; i < this.s.length; i++){
      this.s[i].update();
      this.s[i].show();
      if(this.s[i].lifespan<0){
        this.s.splice(i, 1);
        console.log(this.s.length);
      }
    }

    for(var i = 0; i < this.count; i++){
      this.s.push(new Smoke(this.startX, this.startY))
    }
  }
}
