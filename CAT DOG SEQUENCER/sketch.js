var catSound, catPicture
var block
var dogSound, dogPicture
var park


class Block{
  constructor(x,y,image,sound){
    this.x = x
    this.y = y
    this.width=300
    this.height=300
    this.image = image
    this.sound = sound
    this.counter=0
  }
  draw(){
    this.counter++
    push()
      translate(this.x,this.y)
      //rect(0,0,this.width,this.height)
      if (this.counter<20)
        scale(2-this.counter/20)



      

      


      image(this.image,0,0,300,300)
      text(this.counter,-50,0)


    pop()
  }
  check(tx,ty){
    if (tx>this.x && tx<this.x+this.width){
      if (ty>this.y && ty<this.y+this.height){
        return true
      }
    }
  }
  play(){
    this.sound.play();
    this.counter = 0
  }
}

function preload(){

catSound = loadSound("assets/cat.wav")
catPicture = loadImage("assets/cat.png")
dogSound = loadSound("assets/dog.wav")
dogPicture = loadImage("assets/dog.png")
park = loadImage("assets/park.png")
}


function setup(){

  createCanvas(windowWidth,windowHeight)
  catSound.play()
  block = new Block(width/2,height/2, catPicture,catSound)
  block2 = new Block(width/2-400,height/2, dogPicture,dogSound)




}

function draw(){
  //image(catPicture,0,0);
  image(park,0,0,windowWidth,windowHeight)
  block.draw();
  block2.draw();

}

function mousePressed(){
  console.log(block.check(mouseX,mouseY))
  if (block.check(mouseX,mouseY)){
    block.play()

    
  }
  if (block2.check(mouseX,mouseY)){
    block2.play()
    
    
  }
}