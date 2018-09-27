function setup() {
  // put setup code here

  createCanvas(600,500);
  background(255,255,255);


}

function draw() {
  // put drawing code here


}

function mouseMoved(){
if(mouseX<300&&mouseY<166) {
	noStroke();
	fill(255,0,0);
	rect(0,0,300,166);
}

else {
	noStroke();
	fill(255,255,255);
	rect(0,0,300,166);
	
}
if(mouseX<300&&mouseY>166) {
	noStroke();
	fill(0,255,0);
	rect(0,166,300,334);
}

else {
	noStroke();
	fill(255,255,255);
	
	rect(0,166,300,334);
}
if(mouseX>300) {
	noStroke();
	fill(0,0,255);
	rect(300,0,300,500);

}
else {
	noStroke();
	fill(255,255,255);
	rect(300,0,300,500);

}
if(mouseX==500) {
	noStroke();
	fill(50,50,50);
	rect(0,0,600,500);
}



}


