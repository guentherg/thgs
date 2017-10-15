var gasP;
var gasSlider;
var temperature = 0;
var particles = [];
var hitGround = 0;


function setup() {
	createCanvas(720, 480);
	//createSlider/Text
	gasP = createP("TH-GASE");
	gasSlider = createSlider(0, 10, 0);
	//position of the slider/text
	gasP.position(730, -10);
	gasSlider.position(730, 20);
	for(var i = 0; i < 100; i++){
		particles.push(new Particle());
		hitGround++;
	}
}

function draw() {
	//background
	background(174, 207, 238);

	//Environment
	noStroke();
	fill(118,85,43);
	rect(0, height-30, width, 100);
	fill(72,144,48);
	rect(0, height-40, width, 10);

	//fog
	fill(0, 10*gasSlider.value());
	rect(0, 0, width, height);

	for(var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
		if(particles[i].y < -0){
			particles.splice(i, 1);
		}
	}

	if(particles.length < 100){
		particles.push(new Particle());
	}

	fill(0);
	textSize(14);
	text(particles.length, 10, 400);
	if(frameCount % 10 == 0 && map(hitGround, 0, 500, 0, 60) < 60){
		console.log(map(hitGround, 0, 500, 0, 60));
	}
}
