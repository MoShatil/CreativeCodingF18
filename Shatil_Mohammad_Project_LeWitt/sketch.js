

var graph1
var graph2
var graph3
var graph4


function setup() {
  // put setup code here
	createCanvas(600,350);
  background(252, 237, 212);

	fill(198, 187, 169);
	noStroke();
	rect(30,20,540,310); //grey rectangle
	fill(0,0,0);
	rect(40,30,520,290); //black rectangle
 
  
	
	graph1 = createGraphics(245,125)
	graph1.fill(226, 90, 90)
	graph1.rect(0,0,245,125)
	graph1.strokeWeight(5)
	graph1.stroke(155, 148, 132)
	graph1.noFill()
	for(var i=0;i<100;i++){
		graph1.ellipse(0,0,i*20,i*20)
	}
		
	graph2 = createGraphics(245,125)
	graph2.fill(132, 175, 186)
	graph2.rect(0,0,245,125)
	graph2.strokeWeight(5)
	graph2.stroke(155, 148, 132)
	graph2.noFill()
	for(var i=0;i<100;i++){
		graph2.ellipse(245,0,i*20,i*20)
	}	
	
	graph3 = createGraphics(245,125)
	graph3.fill(252, 237, 212)
	graph3.rect(0,0,245,125)
	graph3.strokeWeight(5)
	graph3.stroke(155, 148, 132)
	graph3.noFill()
	for(var i=0;i<100;i++){
		graph3.ellipse(0,125,i*20,i*20)
	}	
	
	graph4 = createGraphics(245,125)
	graph4.fill(155, 122, 46)
	graph4.rect(0,0,245,125)
	graph4.strokeWeight(5)
	graph4.stroke(155, 148, 132)
	graph4.noFill()
	for(var i=0;i<100;i++){
		graph4.ellipse(245,125,i*20,i*20)
	}	
		
	
	
	


}

function draw() {
	fill(198, 187, 169);
	noStroke();
	rect(30,20,540,310); //grey rectangle
	fill(0,0,0);
	rect(40,30,520,290); //black rectangle
  // put drawing code here
	
	image(graph1,50,45)
	image(graph2,305,45)
	image(graph3,50,180)
	image(graph4,305,180)
  	
}