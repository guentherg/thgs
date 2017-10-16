var gasP;
var gasSlider;
var temperature = 0;
var particles = [];
var hitGround = 0;
var cloudURL = "https://raw.githubusercontent.com/guentherg/hello-world/master/cloud.png";
var cityURL = "https://raw.githubusercontent.com/guentherg/hello-world/master/city-clipart-14232.png";
var factoryURL = "https://raw.githubusercontent.com/guentherg/hello-world/master/factory.png";
var cloud;
var city;
var factory;
var cloudX = -150;

var sys;
var sys2;

function preload(){
	cloud = loadImage(cloudURL);
	city = loadImage(cityURL);
	factory = loadImage(factoryURL);
}

function setup() {
	createCanvas(720, 480);
	//createSlider/Text
	gasP = createP("th");
	gasSlider = createSlider(0, 10, 0);

	sys = new SmokeSystem(218, 430);
	sys2 = new SmokeSystem(width-250, height-148);

	//position of the slider/text
	gasP.position(730, -10);
	gasSlider.position(730, 20);
	for(var i = 0; i < 20; i++){
		particles.push(new Particle());
		hitGround++;
	}
	imageMode(CENTER);
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
	image(cloud, cloudX, 200, 300, 150);
	image(city, 200, height-114, 400, 166);
	image(factory, width-234, height-94, 128, 128);

	//fog
	fill(0, 0, 0, 10*gasSlider.value());
	rect(0, 0, width, height);

	//smoke
	sys.update();
	sys2.update();

	for(var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
		if(particles[i].y < 0){
			particles.splice(i, 1);
		}
	}
	temperature = Math.round(map(particles.length, 18, 250, 18, 60));

	if(frameCount % 10 == 0){
		particles.push(new Particle());
	}

	fill(0);
	textSize(22);
	text(temperature, 10, 100);
	if(cloudX < width-150){
		cloudX++;
	}
}
