


let bugs = []; // array of Jitter objects

function setup() {

  createCanvas(799, 400);
  


  // Create objects
  for (let i = 0; i < 100; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(0);
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
    this.diameter = random(10, 50);
    this.speed = .5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    let fromColor = color(255, 0, 0); // starting color
    let toColor = color(0, 0, 255); // ending color
    let speed = 0.01; // color transition speed
    let t = (sin(frameCount * speed) + 1) / 2; // calculate color value using sine function
    let colorValue = lerpColor(fromColor, toColor, t); // interpolate color
  
    fill(colorValue); // set fill color
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
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
