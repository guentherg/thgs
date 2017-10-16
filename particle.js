class Particle{
	constructor(){
		this.x = random(width);
		this.y = 0;
		this.c = color(115, 105, 255);
		this.speed = random(3,5);
		this.state = "down";
	}

	moveUp(){
		this.speed = -this.speed;
		this.c = color(255, 100, 100);
		this.state = "up";
	}

	update(){
		//this.x+=random(map(cos(this.y/10), -1, 1, -4, 4));
		this.y+=this.speed;
		if(this.y >= height-40){
			this.moveUp();
		}
		if(this.state == "up" && this.y < 150 && random(1) < map(gasSlider.value(), 0, 10, 0, 0.1)){
			this.speed = -this.speed;
			this.state = "down";
		}
	}

	show(){
		if(this.state == "down"){
			fill(115, 105, 255);
		}else if (this.state == "up"){
			fill(255, 100, 100);
		}
		ellipse(this.x, this.y, 8);
	}
}
