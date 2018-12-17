//SPRITE ASSETS RECIEVED FROM RPGMAKER MV DATABASE
//BACKGROUND ASSETS FROM SKYRIM/UNDERTALE 
//MUSIC RECIEVED FROM UNDERTALE SOUNDTRACK


var mgr; //scene manager object
var font;

var data;  

var i = 0; 
var j = 0;
var k = 0;


function preload() {
	font = loadFont('assets/Andale_Mono.ttf');
	
	scene1 = loadJSON("assets/scene1.json"); //dialogue
	eback = loadJSON("assets/back.json");
	scene2 = loadJSON("assets/scene2.json");
	scene3 = loadJSON("assets/scene3.json");
	endings = loadJSON("assets/endings.json");
	
	startscreen = loadImage("assets/tts.png"); //backgrounds
	demonroom = loadImage("assets/demonhouse.png");
	playerroom = loadImage("assets/playerroom.png");
	oniback = loadImage("assets/oniback.png");
	pixieroom = loadImage("assets/pixieroom.png");
	rd = loadImage("assets/portal.png");
  townhall = loadImage("assets/townhall.png");
  entrance = loadImage("assets/entrance.png");
	hallway = loadImage("assets/entrance.png");
  portal = loadImage("assets/portal.png");
	bob = loadImage("assets/bob.png")
  	pixie = loadImage("assets/pixie.png");
	oni = loadImage("assets/oni.png");
	
	
	soundFormats('mp3', 'ogg'); //music
  glitch = loadSound('assets/glitch.mp3');
	council = loadSound('assets/ewe.mp3');
	introduction = loadSound('assets/owo.mp3');
	explore = loadSound('assets/owo.mp3');
}

function setup() {
	createCanvas(800, 600);

	mgr = new SceneManager(); //initiate object
	
	mgr.addScene(SceneOneA);
	mgr.addScene(Choicescreen1);
 	mgr.addScene(Explorechoice1);
 	mgr.addScene(playerRoom);
 	mgr.addScene(SceneOneB);
 	mgr.addScene(SceneTwoA);
 	mgr.addScene(SceneTwoB);
	mgr.addScene(SceneTwoC);
	mgr.addScene(SceneThreeA);
	mgr.addScene(SceneThreeB);
	mgr.addScene(SceneThreeC);
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
//ENTER EXECUTE//

function SceneOneA() {
	
	this.enter = function() { //game begin & restart all variables
		background(255);
		image(startscreen, 0, 0, 800, 600);
		introduction.play();
		textAlign(CENTER);
		textFont(font);
		textSize(25);
		i=0;
		j=0;
		text("Are You Ready To Wake Up?", width/2, 500);
	} 

	this.mousePressed = function() { 
		clear();
		image(playerroom, 0, 0, 800, 600);
		image(bob,0,0);
		textbox();
		if (i>6) { 
			mgr.showScene(Choicescreen1);
		} if (i>4 && i<7) { 
				clear();
				image(bob,0,0);
				textbox();
				push();
				fill(250, 66, 20, 50);
				noStroke();
				rect(400, 300, 800, 600);
				pop();
				text(eback.ebackA[0 + j], 400, 650, 710, 450);
				j++;
				i++;
		} if (i<5) {
				text(scene1.sceneoneA[0 + i], 400, 650, 710, 450);
				i++;
		}
		}
}

//choice

function Choicescreen1() { //3 choices

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		text("So um where are we exactly???", 400, 150, 450, 150);
		text("So you're saying everyone here is like you?.", 400, 250, 450, 150);
		text("This is cool and all, but I wanna go home?", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
			if (mouseY < 150) {
				clear();
				mgr.showScene(Scene1A_choice1);
			} if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(Scene1A_choice2);
	    } if (mouseY > 250 && mouseY < 350) {
				clear();
				mgr.showScene(Scene1A_choice3);
			}
	}
}

function Scene1A_choice1() { //SELECT 1

	this.draw = function() {
		background(255);
		image(bob,0,0);
		textbox();
		text("BOB: Well, It'd be safe to say that are in the Nether!!, What you never been here? Its only one of the biggest gatherings of monsters ever!",
				 400, 650, 710, 450);
		push();
		fill(250, 66, 20, 50);
		noStroke();
		rect(400, 300, 800, 600);
		pop();
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneOneB);
	}
}

function Scene1A_choice2() { //SELECT 2

	this.draw = function() {
		background(255);
		image(playerroom, 0, 0, 800, 600);
		image(bob,0,0);
		textbox();
		text("BOB: Not exactly, monsters come in different shapes and sizes, were all unique some big some small.", 400, 650, 710, 450);
		push();
		fill(112, 66, 20, 50);
		noStroke();
		rect(400, 300, 800, 600);
		pop();
	}
	
	this.mousePressed = function() {
			mgr.showScene(SceneOneB);
	}
}

function Scene1A_choice3() { //SELECT 3

	this.draw = function() {
		background(255);
		image(playerroom, 0, 0, 800, 600);
		image(bob,0,0);
		textbox();
		text("BOB: Home.... Ughhh I hate that I might know a way back for you.", 400, 650, 710, 450);
		push();
		fill(112, 66, 20, 50);
		noStroke();
		rect(400, 300, 800, 600);
		pop();
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneOneB);
	}
}

function SceneThreeB() {
	
	this.enter = function() { 
		clear();
		background(255);
		i=0;
		image(demonroom, 0, 0);
		image(oni,0,0);
		textbox();
		text(scene3.scenethreeB[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(demonroom,0,0);
		image(oni,0,0);
		textbox();
		
		if (i>1) { 
			introduction.stop();
			mgr.showScene(Choicescreen5);
		} if (i<2) {
			text(scene3.scenethreeB[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}




function Choicescreen5() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		text("I would never do such a horrible thing.", 400, 250, 450, 150);
		text("If it means I'll get out of here.", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
		  if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(SceneThreeB_choice1);
	    } if (mouseY > 250 && mouseY < 350) {
				clear();
				mgr.showScene(SceneThreeB_choice2);
			}
	}
}

function SceneThreeB_choice1() {

	this.draw = function() {
		background(255);
		image(demonroom,0,0);
		image(oni,0,0);
		textbox();
		text("Hmmmmm.", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneThreeC);
	}
}

function SceneThreeB_choice2() {

	this.draw = function() {
		background(255);
		image(demonroom, 0, 0);
		image(oni,0,0);
		textbox();
		text("ONI:Oh, is that so?.", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
			mgr.showScene(EndingTwo);
	}
}

//ENDX

function EndingOne() {
	
	this.enter = function() { 
		clear();
		background(255);
		i=0;
		council.stop();
		glitch.play();
		image(pixieroom, 0, 0);
		textbox();
		text(endings.endingone[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(pixieroom, 0, 0);
		textbox();
		
		if (i>2) { 
			glitch.stop();
			mgr.showScene(SceneOneA);
		} if (i<3 && i>0) { 
			clear();
			background(0);
			image(pixie, 0, 0);
			textbox();
			text(endings.endingone[1 + i], 400, 650, 710, 450);
			i++;
		} if (i<1) { 
			text(endings.endingone[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}

//ENDY

function EndingTwo() {
	
	this.enter = function() { 
		clear();
		glitch.play();
		background(255);
		i=0;
		image(demonroom, 0, 0);
		textbox();
		text(endings.endingtwo[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(demonroom,0,0);
		textbox();
		
		if (i>16) { 
			glitch.stop();
			mgr.showScene(SceneOneA);
		} if (i>9 && i<17) { 
			clear();
			background(0);
			textbox();
			text(endings.endingtwo[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>6 && i<10) { 
			image(oni,0,0);
			textbox();
			text(endings.endingtwo[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>1 && i<7) { 
			image(pixie, 0, 0);
			textbox();
			text(endings.endingtwo[1 + i], 400, 650, 710, 450);
			i++;
		} if (i<2) {
			image(oni,0,0);
			textbox();
			text(endings.endingtwo[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}

function SceneOneB() {
	
	this.enter = function() { 
		background(255);
		i=0;
		k=0;
		j=0;
		image(playerroom, 0, 0, 800, 600);
		image(bob,0,0);
		textbox();
		text(scene1.sceneoneB[0], 400, 650, 710, 450);
	}

	this.mousePressed = function() { 
		clear();
		image(playerroom, 0, 0, 800, 600);
		image(bob,0,0);
		textbox();
		
		if (i>13) { 
			clear();
			introduction.stop();
			mgr.showScene(Explorechoice1);
		} if (i>7 && i<14) {
			text(scene1.sceneoneC[0 + k], 400, 650, 710, 450);
			k++;
			i++;
		} if (i>2 && i<8) { 
				clear();
				push();
				image(oniback,0,0);
				fill(112, 66, 20, 50);
				noStroke();
				rect(400, 300, 800, 600);
				pop();
				text(eback.ebackB[0 + j], 400, 750, 710, 450);
				j++;
				i++;
		} if (i<3) {
				text(scene1.sceneoneB[1 + i], 400, 650, 710, 450);
				i++;
		}
		}
}

//ENDZ
function Explorechoice1() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		//text("EX", 400, 250, 450, 150);
		text("Leave", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
		if (mouseY > 150 && mouseY < 250) { 
			clear();
			mgr.showScene(playerRoom); 
    } if (mouseY > 250 && mouseY < 350) { 
			clear();
			mgr.showScene(SceneTwoA);
			}
	}
}

function demonroom() { 

	this.draw = function() {
		image(demonroom, 0, 0, 800, 600);
		text("click done", 500, 550);
	}
	
				//this.mousePressed = function() {
					push();
					fill(0);
					textSize(14);
					if (mouseX > 79 && mouseX < 175 && mouseY > 159 && mouseY < 271) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 222 && mouseX < 359 && mouseY > 159 && mouseY < 510) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 79 && mouseX < 321 && mouseY > 271 && mouseY < 450) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 333 && mouseX < 400 && mouseY > 270 && mouseY < 340) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 400 && mouseX < 533 && mouseY > 130 && mouseY < 350) {
							clear();
							text("TESTCODE",
									 480, 105, 520, 200);
					} if (mouseX > 208 && mouseX < 315 && mouseY > 458 && mouseY < 600) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 572 && mouseX < 690 && mouseY > 91 && mouseY < 313) {
							clear();
							text("TESTCODE.",
									 480, 105, 520, 200);
					} if (mouseX > 260 && mouseX < 550 && mouseY > 380 && mouseY < 470) {
							clear();
							mgr.showScene(Explorechoice2); //carpet
					}
					pop();
	}


function playerRoom() { //testcode

	this.draw = function() {
		image(playerroom, 0, 0, 800, 600);
		text("", 600, 550);
	}
	
	this.mousePressed = function() {
		push();
		fill(0);
		textSize(14);
		if (mouseX > 0 && mouseX < 64 && mouseY > 135 && mouseY < 506) {
				clear();
				mgr.showScene(Explorechoice1);
		} if (mouseX > 136 && mouseX < 446 && mouseY > 220 && mouseY < 510) {
				clear();
				text("TESTCODE23.",
						 480, 105, 520, 200);
		} if (mouseX > 134 && mouseX < 188 && mouseY > 156 && mouseY < 220) {
				clear();
				text("TESTCODE1.",
						 480, 105, 520, 200);
		} if (mouseX > 335 && mouseX < 500 && mouseY > 68 && mouseY < 220) {
				clear();
				text("TESTCODE14.",
						 480, 105, 520, 200);
		} if (mouseX > 145 && mouseX < 377 && mouseY > 387 && mouseY < 490) {
				clear();
				text("TESTCODE12.",
						 480, 105, 520, 200);
		} if (mouseX > 413 && mouseX < 543 && mouseY > 425 && mouseY < 600) {
				clear();
				text("TESTCODE22.",
						 480, 105, 520, 200);
		} if (mouseX > 568 && mouseX < 709 && mouseY > 103 && mouseY < 177) {
				clear();
				text("TESTCODE33.",
						 480, 105, 520, 200);
		} if (mouseX > 522 && mouseX < 697 && mouseY > 218 && mouseY < 370) {
				clear();
				text("TESTCODE6'.",
						 480, 105, 520, 200);
		}
		pop();
	}
}

function SceneThreeC() {
	
	this.enter = function() { 
		clear();
		background(255);
		glitch.play();
		i=0;
		image(demonroom, 0, 0);
		image(oni, 0, 0);
		textbox();
		text(scene3.scenethreeC[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(demonroom, 0, 0);
		textbox();
		
		if (i>40) { 
			glitch.stop();
			mgr.showScene(SceneOneA);
		} if (i>38 && i<41) { 
			background(0);
			image(pixie, 0, 0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>28 && i<39) { 
			image(pixie, 0, 0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>25 && i<29) { 
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>18 && i<26) { 
			image(oni,0,0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>16 && i<19) { 
		  image(oni,0,0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>7 && i<17) { 
	  	image(oni,0,0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i<8) { 
			image(oni,0,0);
			textbox();
			text(scene3.scenethreeC[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}

function SceneTwoA() {
	
	this.enter = function() { 
		background(255);
		council.play();
		i=0;
		image(townhall, 0, 0);
		textbox();
		text(scene2.scenetwoA[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(entrance, 0, 0,);
		textbox();
		
		if (i>20) { 
			mgr.showScene(Choicescreen2);
		} if (i<21 && i>17) { 
				image(pixieroom, 0, 0);
				textbox();
				text(scene2.scenetwoA[1 + i], 400, 650, 710, 450);
				i++;
		} if (i>14 && i<18) { 
				clear();
				background(0);
				textbox();
				text(scene2.scenetwoA[1 + i], 400, 650, 710, 450);
				i++;
		} if (i>5 && i<15) { 
				clear();
				image(hallway, 0, 0, 750, 550);
				textbox();
				text(scene2.scenetwoA[1 + i], 400, 650, 710, 450);
				i++;
		} if (i<6) { 
				text(scene2.scenetwoA[1 + i], 400, 650, 710, 450);
				i++;
		}
		}
}

//EXES

function Choicescreen2() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		
		text("I don’t have any questions.", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
			if (mouseY < 150) {
				clear();
				mgr.showScene(SceneTwoA_choice1);
			} if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(SceneTwoA_choice2);
	    } if (mouseY > 250 && mouseY < 350) {
				clear();
				mgr.showScene(SceneTwoB); 
			}
	}
}

function SceneTwoA_choice1() { 

	this.draw = function() {
		background(255);
		image(pixieroom, 0, 0);
		textbox();
		text("What you got nothing better to do?",
				 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneTwoB);
	}
}

function SceneTwoA_choice2() { 

	this.draw = function() {
		background(255);
		image(pixieroom, 0, 0);
		textbox();
		text("Really now?.", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
			mgr.showScene(SceneTwoB);
	}
}

function SceneTwoB() {
	
	this.enter = function() { 
		clear();
		background(255);
		i=0;
		image(pixieroom, 0, 0);
		textbox();
		text(scene2.scenetwoB[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(pixieroom, 0, 0);
		textbox();
		
		if (i>17) { 
			mgr.showScene(Choicescreen3);
		} if (i<18) {
			text(scene2.scenetwoB[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}



function Choicescreen3() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		//text("XXXSSSXXSSXX.", 400, 250, 450, 150);
		text("HEY!, CAN YOU HURRY IT UP???.", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
		  if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(SceneTwoB_choice1);
	    } if (mouseY > 250 && mouseY < 350) {
				clear();
				mgr.showScene(SceneTwoC);
			}
	}
}

function SceneTwoB_choice1() { 
	this.draw = function() {
		background(255);
		image(pixieroom, 0, 0);
		textbox();
		text("MARCY: I'm afraid my hands are tied. Won't it just be easier if we go meet Mr. Ribbert first?",
				 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneTwoB_choice2);
	}
}

function SceneTwoB_choice2() { 

this.draw = function() {
		background(255);
		textAlign(CENTER);
		text("Refuse to meet Jonathaniel", 400, 250, 450, 150);
		text("Agree to meet Jonathaniel", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() { 
			
		  if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(EndingOne);
	    } if (mouseY > 250 && mouseY < 350) { 
				clear();
				mgr.showScene(SceneTwoC);
			}
	}
}

function SceneTwoC() {
	
	this.enter = function() { 
		clear();
		background(255);
		i=0;
		image(pixieroom, 0, 0);
		textbox();
		text(scene2.scenetwoC[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(pixieroom, 0, 0);
		textbox();
		
		if (i>22) { 
			council.stop();
			mgr.showScene(Explorechoice2);
		} if (i>14 && i<23) { 
			clear();
			image(portal, 0, 0);
			image(pixieroom, 0, 0);
			textbox();
			text(scene2.scenetwoC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i>8 && i<15) { 
			clear();
			image(rd, 0, 0, 800, 600);
			image(bob,0,0);
			textbox();
			text(scene2.scenetwoC[1 + i], 400, 650, 710, 450);
			i++;
		} if (i<9) { 
			text(scene2.scenetwoC[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}



function Explorechoice2() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		
		text("Sit down and prepare", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() { 
			
		if (mouseY > 150 && mouseY < 250) {
			clear();
			mgr.showScene(demonroom);
    } if (mouseY > 250 && mouseY < 350) {
			clear();
			mgr.showScene(SceneThreeA);
			}
	}
}

function SceneThreeA() {
	
	this.enter = function() { 
		clear();
		background(255);
		introduction.play();
		i=0;
		image(demonroom, 0, 0);
		textbox();
		text(scene3.scenethreeA[0], 400, 650, 710, 450);
	} 

	this.mousePressed = function() { 
		clear();
		image(demonroom, 0, 0,);
		image(oni,0,0);
		textbox();
		if (i>5) { 
			mgr.showScene(Choicescreen4);
		} if (i<6) { 
			text(scene3.scenethreeA[1 + i], 400, 650, 710, 450);
			i++;
		}
		}
}



function Choicescreen4() { 

	this.draw = function() {
		background(255);
		textAlign(CENTER);
		//text("x.", 400, 150, 450, 150);
		text("I'm ready for your question.", 400, 250, 450, 150);
		//text("z.", 400, 350, 450, 150);
	}
	
	this.mousePressed = function() {
			
			if (mouseY < 150) {
				clear();
				mgr.showScene(SceneThreeA_choice1);
			} if (mouseY > 150 && mouseY < 250) {
				clear();
				mgr.showScene(SceneThreeA_choice2);
	    } if (mouseY > 250 && mouseY < 350) {
				clear();
				mgr.showScene(SceneThreeA_choice3);
			}
	}
}

function SceneThreeA_choice1() {

	this.draw = function() {
		background(255);
		image(demonroom, 0, 0);
		image(oni,0,0);
		textbox();
		text("well then.", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
		mgr.showScene(SceneThreeB);
	}
}

function SceneThreeA_choice2() {

	this.draw = function() {
		background(255);
		image(demonroom, 0, 0);
		image(oni,0,0);
		textbox();
		text("ONI:HMMMM.", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
			mgr.showScene(SceneThreeB);
	}
}
	
	function SceneThreeA_choice3() {

	this.draw = function() {
		background(255);
		image(demonroom, 0, 0);
		image(oni,0,0);
		textbox();
		text("Z", 400, 650, 710, 450);
	}
	
	this.mousePressed = function() {
			mgr.showScene(SceneThreeB);
	}
}