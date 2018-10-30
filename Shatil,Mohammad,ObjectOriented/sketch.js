var myBall;
var myBall2;
var myBall3;
var myBall4;
var myBall5;
var myBall6;



function setup() {
  // put setup code here
  createCanvas(500,500);

  //initializes new object from the class ball

  myBall = new Ball(50,100,2,3,70);
  myBall2 = new Ball(200,150,2,4,20);
  myBall3 = new Ball(400,20,6,5,30);
  myBall4 = new Ball(300,30,4,2,50);
  myBall5 = new Ball(100,70,3,1,30);
  myBall6 = new Ball(150,10,4,5,40);
 

}

function draw() {
  // put drawing code here

  background(200);
  myBall.animate();
  myBall2.animate();
  myBall3.animate();
  myBall4.animate();
  myBall5.animate();
  myBall6.animate();

  myBall.displayBall();
  myBall2.displayBall();
  myBall3.displayBall();
  myBall4.displayBall();
  myBall5.displayBall();
  myBall6.displayBall();
}


function Ball(xVal,yVal,velXVal,velYVal,size){

	this.x = xVal;
	this.y = yVal;
	this.xVel = velXVal;
	this.yVel = velYVal
	this.size = size;
	this.sizeStep = 1;
	this.color

	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;

		if(this.x <=0 || this.x >width){
			this.xVel *=-1;
			

		}
		if(frameCount<10000){
			this.r = random(0,150)
			this.g = random(0,150)
			this.b = random(0,150)

			this.color = (this.r,this.g,this.b);
		}

		if(this.y <=0 || this.y >height){
			this.yVel*=-1;

		}
		this.size += this.sizeStep
		if(this.size >= 73 || this.size <= 15){
			this.sizeStep *=-1

		}
	}

	this.displayBall = function(){
		fill(this.color)
		//x,y,w,h
		ellipse(this.x,this.y,this.size,this.size);
	}


};