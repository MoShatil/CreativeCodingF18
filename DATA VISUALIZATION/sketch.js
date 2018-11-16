var myData;
var img;

function preload(){

	myData = loadJSON("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01");
  img = loadImage("assets/sky.png")


}


function setup() {
  // put setup code here

  createCanvas(windowWidth,windowHeight);
  scale(1.0)
  image(img,0,0)

  console.log(myData)
  var dates = Object.keys(myData.rates)
  console.log(dates)

  beginShape()
  for(var i=0;i<dates.length;i++){
    strokeWeight(1)


    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse(i*50,map(rate,1,1.2,height-50,height-250),5,5)
    textSize(15)
    strokeWeight(5)

    text(rate,i*50,height-40)
    vertex(i*50,map(rate,1,1.2,height-50,height-250))
  }
  noFill();
  stroke(5)
  endShape()


  beginShape()
  for(var i=0;i<dates.length;i++){

    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse((i*50)-20,(map(rate,1,1.2,height-50,height-250)-20),5,5)
    textSize(15)
    //text(rate,i*50,height-40)
    vertex((i*50)-20,(map(rate,1,1.2,height-50,height-250)-20))
  }
  noFill();
  stroke(5)
  endShape()

  beginShape()
  for(var i=0;i<dates.length;i++){
    // console.log()
    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse((i*50)-50,(map(rate,1,1.2,height-50,height-250)-50),5,5)
    textSize(15)
    //text(rate,i*50,height-70)
    vertex((i*50)-50,(map(rate,1,1.2,height-50,height-250)-50))
  }
  noFill();
  stroke(5)
  endShape()

   beginShape()
  for(var i=0;i<dates.length;i++){

    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse((i*50)-80,(map(rate,1,1.2,height-50,height-250)-80),5,5)
    textSize(15)
    //text(rate,i*50,height-40)
    vertex((i*50)-80,(map(rate,1,1.2,height-50,height-250)-80))
  }
  noFill();
  stroke(5)
  endShape()


   beginShape()
  for(var i=0;i<dates.length;i++){

    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse((i*50)-140,(map(rate,1,1.2,height-50,height-250)-140),5,5)
    textSize(15)
    //text(rate,i*50,height-40)
    vertex((i*50)-140,(map(rate,1,1.2,height-50,height-250)-140))
  }
  noFill();
  stroke(5)
  strokeWeight(2)
  endShape()

     beginShape()
  for(var i=0;i<dates.length;i++){

    var rate = myData.rates[dates[i]].USD
    fill(0)
    ellipse((i*50)-120,(map(rate,1,1.2,height-50,height-250)-120),5,5)
    textSize(15)
    //text(rate,i*50,height-40)
    vertex((i*50)-120,(map(rate,1,1.2,height-50,height-250)-120))
  }
  noFill();
  stroke(5)
  strokeWeight(3)
  endShape()



stroke(10)
strokeWeight(25)
fill(230,230,250)
 textSize(75) // Just title text
 text("USD EXCHANGE RATES OVER TIME",330,250)




}

function draw() {
  // put drawing code here
}