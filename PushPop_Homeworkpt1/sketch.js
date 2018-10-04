function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,0,0);
  rectMode(CENTER);
}

function draw() {
	push();
	translate(100,100);
	ellipse(0,0,5,5)
	rotate(PI/4);
	rect(0,0,50,50);
	pop();

	push();
	translate(250,100);
	ellipse(0,0,5,5)
	rotate(PI/6);
	rect(0,0,50,50);
	pop();

	push();
	translate(350,100);
	ellipse(0,0,5,5)
	rotate(PI/8);
	rect(0,0,50,50);
	pop();





  // put drawing code here
}