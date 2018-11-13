var myData;


function preload(){

	myData = loadJSON("assets/olympics.json");

}


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  colorMode(HSB);

  console.log(myData.olympics.winter.length);

  for (var i=0; i < myData.olympics.winter.length; i++){
  	console.log(myData.olympics.winter[i]);


  }

  for (var i=0; i < myData.olympics.winter.length; i++){


  	var r= myData.olympics.winter[i].countries
  	var v= myData.olympics.winter[i].year
  	fill(map(r,16,92,0,360),100,100)
  	ellipse(i*100,height/2,r,r)
  	push()
	colorMode(RGB)
	fill(0)
	text(v,i*100,(height/2)+r)
	pop()

}

textSize(50)
text("Countries Attending Olympics",500,250)




}

function draw() {
  // put drawing code here
}