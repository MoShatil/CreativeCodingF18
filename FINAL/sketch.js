var mgr; //scene manager obj

function preload() {

	font = loadFont('assets/Andale_Mono.ttf');

	scene1 = loadJSON("assets/scene1.json");
	demon = loadImage("assets/demon.png");
	bob = loadImage("assets/bob.png");
	title = loadImage("assets/title.png");
	backgroundd= loadImage("assets/background.png");

	testmusic = loadSound("assets/owo.mp3");

}


function setup() {

	createCanvas(800, 600);

	mgr = new SceneManager()
	mgr.addScene(testscene);
	mgr.addScene(testscene2);
 	mgr.showNextScene();
}

function draw() {
	mgr.draw();
}

function mousePressed() {
	mgr.mousePressed();
}

function textbox() { //TEXTBOX FUNCTION
	rectMode(CENTER);
	stroke(255,0,0,70)
	strokeWeight(6)
	rect(400, 500, 750, 180);		
	textSize(25);
	textFont(font);
}

function testscene() {
	this.enter = function() {
		
		background(0);

		image(title,0,0,800,600);
		testmusic.play
		i=0

	}
	this.mousePressed = function(){
		clear();
		image(backgroundd, 0, 0, 800, 600);
		image(bob, 50, -100, 670, 640);
		textbox();
		if (i>=17) { 
			mgr.showScene(testscene2);
		} if (i>4 && i<17) { 
				clear();
				image(demon, 30, 70, 770, 340);
				textbox();
				push();
				fill(0,0,255, 50);
				noStroke();
				rect(400, 300, 800, 600);
				pop();
				textAlign(CENTER);
				text(scene1.sceneoneA[0 + i], 400, 650, 710, 450);
				
		} 
		if (i<5) {
			textAlign(CENTER);
				text(scene1.sceneoneA[0 + i], 400, 650, 710, 450);
		}
		i++;
	}
}

function testscene2() {
	this.enter = function() {
		background(255,0,0);

		
		text('THIS IS THE END OF THE BETA TEST',width/2,height/2)
		text('There is more to come!!',width/2,height/2+70)


	}
	this.mousePressed = function(){
		clear();
		image(backgroundd, 0, 0, 800, 600);
		testmusic.play
		image(bob, 250, 20, 800, 600);
		textbox();
		if (i>17) { 
			mgr.showScene(testscene);
		} if (i>4 && i<17) { 
				clear();
				image(demon, 250, 20, 270, 540);
				textbox();
				push();
				fill(112, 66, 20, 50);
				noStroke();
				rect(400, 300, 800, 600);
				pop();
				text(scene1.sceneoneA[0 + i], 400, 650, 710, 450);
				i++;
		} if (i<5) {
				text(scene1.sceneoneA[0 + i], 400, 650, 710, 450);
				i++;
		}
	}
}