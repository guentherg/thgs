class SmokeSystem{

  constructor(){
    this.s = [];
    //this.s = new Smoke(width/2, height/2);
    for(var i = 0; i < 10; i++){
      this.s.push(new Smoke(width/2, height/2));
    }
  }

  update(){
    for(var i = 0; i < this.s.length; i++){
      this.s[i].update();
      this.s[i].show();
      if(this.s[i].lifespan<0){
        this.s.splice(i, 1);
        console.log(this.s.length);
      }
    }

    for(var i = 0; i < 10; i++){
      this.s.push(new Smoke(width/2, height/2))
    }
  }
}
