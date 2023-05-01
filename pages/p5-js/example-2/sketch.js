let circles = []; // an array to store the circles
let numCircles = 30; // number of circles to generate at the start

function setup() {
  createCanvas(500, 500);
  noStroke();

  // generate circles at the start
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 40);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    let circle = new Circle(x, y, size, r, g, b, speedX, speedY);
    circles.push(circle);
  }
}

function draw() {
  background(255);

  // loop through the circles array and update each circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.update();
    circle.display();
  }
}

function mouseClicked() {
  // add a new circle to the array when the mouse is clicked
  let newCircle = new Circle(mouseX, mouseY, random(10, 40), random(255), random(255), random(255), random(-2, 2), random(-2, 2));
  circles.push(newCircle);
}

// Circle class
class Circle {
  constructor(x, y, size, r, g, b, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    // update the position of the circle based on its speed
    this.x += this.speedX;
    this.y += this.speedY;

    // bounce the circle off the edges of the canvas
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }

  display() {
    // draw the circle on the canvas
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
  }
}