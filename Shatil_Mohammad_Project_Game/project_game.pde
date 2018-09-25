

//Lava Red Value (255, 140, 0)
//Ground Value (142, 97, 42)
//Fake Lava Value (255, 165, 48)
int playerx;
int playery;






void setup(){
  
  size(500,500);
  background(142, 97, 42);
  

  
  
  playerx = 50;
  playery = 50;
  
}

void draw(){
  
  background(142, 97, 42);
  
  if(playerx>100&&playerx<200&&playery>100&&playery<200){
     playerx = 50;
     playery = 50;
  }
  if(playerx>200&&playerx<300&&playery>200&&playery<300){
     playerx = 50;
     playery = 50;
  }
  if(playerx>300&&playerx<400&&playery>300&&playery<400){
     playerx = 50;
     playery = 50;
  }
  
  if(playerx>300&&playerx<350&&playery>100&&playery<150){
     playerx = 50;
     playery = 50;
  }

   if(playerx>400&&playerx<570&&playery>200&&playery<280){
     playerx = 50;
     playery = 50;
  }
   if(playerx>20&&playerx<240&&playery>350&&playery<430){
     playerx = 50;
     playery = 50;
  }

  
   if(playerx>435&&playerx<465&&playery>435&&playery<465){
     background(0, 250, 0);
  }
  
  
  fill(250, 100, 0);
  rect(100,100,100,100);
  
  fill(255, 140, 0);
  rect(200,200,100,100);
  
  fill(255, 140, 0);
  rect(300,300,100,100);
  
  fill(255, 100, 0);
  rect(300,300,100,100);
  
  fill(255, 150, 50);
  rect(300,100,50,50);
  
  fill(255, 150, 50);
  rect(400,200,170,80);
  
  fill(255, 150, 50);
  rect(20,350,260,80);
  
  
  
  
  
  fill(0,0,0);
  ellipse(playerx,playery,30,30);
  
  fill(0,255,0);
  ellipse(450,450,30,30);
  
}
  
void keyPressed(){
  if (key == 'a' || key == 'A'){
    playerx = playerx-5;
  }
  if (key == 'd'|| key == 'D'){
    playerx = playerx+5;
  }
  if (key == 'w'|| key == 'W'){
    playery = playery-5;
  }
  if (key == 's'|| key == 'S'){
    playery = playery+5;
  }
}
 
