size(800,500);

background(188, 242, 255);

strokeWeight(8);
rect(100,100,600,350);

fill(188, 242, 255);

rect(200,200,400,175);

fill(255, 117, 131);

strokeWeight(4);
beginShape();  //Face Shape
vertex(350,100);
vertex(320,150);
vertex(320,200);
vertex(350,300);
vertex(400,350);
vertex(450,350);
vertex(500,300);
vertex(530,200);
vertex(530,150);
vertex(500,100);
endShape(CLOSE);

strokeWeight(3);
line(430,200,410,240);  //Nose Shape
line(410,240,430,250);  //Nose Shape


fill(255,255,255);
strokeWeight(2);
line(400,180,340,180);//EYE connector
beginShape();  //Eye One
vertex(400,180);
vertex(400,200);
vertex(350,200);
vertex(340,180);


endShape(CLOSE);
line(450,180,510,180);//EYE connector 2
beginShape();  //Eye Two
vertex(450,180);
vertex(450,200);
vertex(500,200);
vertex(510,180);

endShape(CLOSE);

fill(65, 187, 244);

rect(360,160,50,20); //eyebrow 1
rect(440,160,50,20); //Eyebrow 2

fill(255, 255, 255);

beginShape();  //Mouth
vertex(390,290);
vertex(400,320);
vertex(450,320);
vertex(460,290);

endShape(CLOSE);

fill(244, 65, 223);

beginShape();  //eyeball 1
vertex(400,190);
vertex(390,180);
vertex(380,190);
vertex(390,200);
// etc;
endShape(CLOSE);

beginShape();  //eyeball 2
vertex(500,190);
vertex(490,180);
vertex(480,190);
vertex(490,200);
// etc;
endShape(CLOSE);

fill(255, 255, 255);

beginShape();  //Mouth
vertex(400,310);
vertex(410,300);
vertex(420,310);
vertex(430,300);
vertex(440,310);
vertex(450,300);
// etc;
endShape();

strokeWeight(4);


beginShape();  //Hair
vertex(390,40);
vertex(280,90);
vertex(260,200);
vertex(290,170);
vertex(290,230);
vertex(310,200);
vertex(330,300);
vertex(350,130);
vertex(420,110);
vertex(430,70);

// etc;
endShape(CLOSE);

fill(65, 178, 244);

beginShape();  //Hair Part 2
vertex(430,70);
vertex(450,40);
vertex(530,60);
vertex(560,210);
vertex(530,180);
vertex(530,300);
vertex(500,130);
vertex(420,110);


// etc;
endShape(CLOSE);

fill(244, 65, 223);

beginShape();  //Shirt
vertex(380,380);
vertex(250,400);
vertex(200,450);
vertex(200,500);
vertex(620,500);
vertex(650,450);
vertex(600,400);
vertex(470,380);



// etc;
endShape(CLOSE);


fill(255, 117, 131);

beginShape();  //Neck
vertex(380,330);
vertex(380,400);
vertex(410,460);
vertex(450,460);
vertex(470,400);
vertex(470,330);
vertex(450,350);
vertex(400,350);



// etc;
endShape(CLOSE);

fill(244, 65, 223);

beginShape();  // sleeve
vertex(600,500);
vertex(700,500);
vertex(780,380);
vertex(690,360);





// etc;
endShape(CLOSE);
fill(255, 117, 131);

beginShape();  // hand
vertex(710,360);
vertex(690,330);
vertex(700,310);
vertex(720,340);
vertex(740,270);
vertex(750,280);
vertex(740,330);
vertex(760,290);
vertex(770,300);
vertex(750,340);
vertex(780,310);
vertex(790,320);
vertex(760,350);
vertex(780,340);
vertex(790,350);
vertex(750,370);


// etc;
endShape(CLOSE);
