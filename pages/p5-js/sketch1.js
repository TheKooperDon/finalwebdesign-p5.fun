/*
var canvas = createCanvas(710, 400);
canvas.parent('p5-home');
   */

let bugs = []; // array of Jitter objects

function setup() {

  var canvas2 = createCanvas(710, 400);
  canvas2.parent('java-2');
  // Create objects
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(50, 89, 100);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}




/*
var offset = 0
function setup(){
  createCanvas(400, 200);
  

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
*/





/*
  for (var x = 0; x <= width; x += 50 ){
    for (var y = 0; y <= height; y += 50){
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
    
    }
  }

}
*/

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
