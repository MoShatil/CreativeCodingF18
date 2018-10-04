function setup() {
  // put setup code here
  createCanvas(500,500);
  
  rectMode(CENTER);
}

function draw() {

	background(25,200,0);


	var move = map(mouseX,0,500,0,2*PI) // (VALUE,INMIN,INMAX,OUTMIN,OUTMAX)


	for (var i = 0 ; i < 3 ; i++){
		push();
		translate(200*i+50,150);
		rotate(move);  //replaced I to move variable to rotate , i is handling translation, move is toration
		
		rect(0,0,50,50);
		pop();


	}





	

	




  // put drawing code here
}