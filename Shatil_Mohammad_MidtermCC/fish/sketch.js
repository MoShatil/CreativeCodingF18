//Creative Coding Midterm by Mohammad Shatil
//Project written with help from Gina Jing Chee and Che-Yu Wu
var oilSpill 
var oils = [] // oil array
var colorswap = [] // color array 
var fish = []; // fish array
var numFish = 100; //number of fish
var oils = [] // oil array




function setup() {
	createCanvas(1300,630);
	
	for(var i = 0; i < numFish; i++) {
		fish.push(new Fish(random(1,3), random(0,1200), random(0,400), random(0,300), random(2,4))); // create fish
	}

	for(var i=0; i < 5 ; i++) {
		oils.push(new Oil(random(width),random(height),random(50,100)))
	}


}

function draw() {
	randomSeed(1);
	background(32, 178, 170); // SEA GREEN, I used a complementary color for the fish to make a nice representation of colorful fish in the ocean



if(frameCount>500){  // The values that will make oil spread randomly, also when it will spread
	for (var i=0; i < 5 ; i++) {
		oils[i].draw();
		oils[i].update();



	}
}


	for(var i = 0; i <fish.length; i++) { // draws the fish
		fish[i].move();
		fish[i].display(); 
	}

		
		
		textSize(50);
		fill(255);
		
		//My intro text code, this is similar to what is seen on television and movies to show a location.

		if(frameCount>60 && frameCount<	1000){
			text(" Shores of Baja California,	30.8406° N, 115.2838° W",100,50);
		}
		if(frameCount>100 && frameCount<1000){
			text("4:12 A.M.	",120,100);
		}
	
	fill(255,0,0);
	
		if(frameCount>200	&& frameCount<1000){
			text("EVIL CORP	OIL SPILL	!ACCIDENT!",350,100);
			
	
		}
	fill(255);
	textSize(75);

text(textSign.slice(0,textProgress),110,height-40);



if (frameCount % 40==0&& frameCount>500){
	fish = fish.slice(0,fish.length-1)  // As the frame count goes up this code deletes the fish count by 1 per interval







}
}






function Fish(sz, xx, yy, l, sp) {
	this.size = sz; // size of fish
	this.xOff = xx; // x starting point
	this.yOff = yy; // y starting point
	this.leng = l; // size of locus
	this.speed = sp; // speed
	this.direction = 1; // direction of travel
	this.Cx = 0; // x center of fish
	this.Cy = 0; // y center of fish
	this.Vy = this.Cy; // y tail of fish
	this.w = 1; // tail wiggle factor
	
	this.move = function() {
		
		this.direct = random(-1,1); // allows fish to move opposite directions
		
		if(this.direct < 0) {
			this.direction = -1;
		}
		
		else if(this.direct > 0) {
			this.direction = 1;
		}
	}
	
	this.display = function() {
		noStroke();
		fill(255, 153, 153);//fill(255,119,200);
		
		this.angle = radians(frameCount/this.speed); // angle of movement
		
		this.wiggleRange1 = this.Cx + 4 * this.size; // tail wiggle range
		this.wiggleRange2 = this.Cx - 4 * this.size; // tail wiggle range
		
		this.Vx = this.Cx - 20 * this.size;	// x tail of fish
		
		
		push();  // creating the fish
		
		translate(this.tx, this.ty);
		this.tx = this.xOff + this.leng * cos(this.direction*this.angle); // x location
		this.ty = this.yOff + this.leng * sin(this.direction*this.angle); // y location
		rotate(this.direction*(this.angle + PI/2));
		
		beginShape();
		vertex(this.Cx+18*this.size, this.Cy)
		bezierVertex(this.Cx+17*this.size, this.Cy+5*this.size, this.Cx+10*this.size, this.Cy+9*this.size, this.Cx, this.Cy+5*this.size);
		bezierVertex(this.Cx-10*this.size, this.Cy+this.size, this.Vx, this.Vy, this.Vx, this.Vy);
    	bezierVertex(this.Vx, this.Vy, this.Cx-10*this.size, this.Cy-this.size, this.Cx, this.Cy-5*this.size);
    	bezierVertex(this.Cx+10*this.size, this.Cy-9*this.size, this.Cx+17*this.size, this.Cy-5*this.size, this.Cx+18*this.size, this.Cy);
    	endShape();
		
		pop();


		
		this.Vy += this.w * 1.0;
		
		if(this.Vy > this.wiggleRange1) {   // This code determines the wiggle of the fish tail, since its simply at 1.0 it will wag its tale at a reasonable rate.
			this.w = -1;
		}
		else if(this.Vy < this.wiggleRange2) {
			this.w = 1;
			
			
		}
	}



}
function Oil(x,y,r,life){
	this.x= x;
	this.y= y;
	this.r= r;
	this.life= life;

	this.update = function(){
		this.r += 2
	}

	this.draw = function(){
		fill(20+sin(frameCount)*20);
		ellipse(this.x,this.y,this.r,this.r)
	}
	

}

//A text code showing a single letter per time clicked

var textSign = "WE DESTROYED THE OCEAN"
var textProgress = 0

function mousePressed(){
	
	textProgress++

}