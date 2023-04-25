


var offset = 0
function setup(){
  createCanvas(600, 600)

}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);

  for (var x = 0; x <= mouseX; x += 20 ){
    for (var y = 0; y <= mouseY; y += 20){
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
    
    }
  }
/*
  for (var x = 0; x <= width; x += 50 ){
    for (var y = 0; y <= height; y += 50){
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
    
    }
  }
*/
}


  /*
var x = 0;
  while (x <= width) {
    xc
    x = x + 50;

  }

  ellipse(0, 200, 25, 25);
  x = x + 50;

  ellipse(50, 200, 25, 25);
  x = x + 50;

  ellipse(100, 200, 25, 25);
  x = x + 50;

  ellipse(150, 200, 25, 25);
  x = x + 50;

  ellipse(200, 200, 25, 25);
  x = x + 50;

  ellipse(250, 200, 25, 25);
  x = x + 50;

  //ellipse(300, 200, 25, 25);

*/
