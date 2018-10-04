function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,0,0);
  rectMode(CENTER);
}

function draw() {


	for (var i = 0 ; i < 3 ; i++){
		push();
		translate(100*i+50,100);
		rotate(PI/(i+5));
		console.log(PI/(i+1))
		rect(0,0,50,50);
		pop();


	}
	

	




  // put drawing code here
}