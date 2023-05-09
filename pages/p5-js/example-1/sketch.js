let x, y, r, g, b, size;

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}

function draw() {
  // generate a random color
  r = random(255);
  g = random(255);
  b = random(255);
  
  // generate a random size
  size = random(10, 40);
  
  // draw a circle at the mouse position
  fill(r, g, b);
  ellipse(mouseX, mouseY, size, size);
  
  // draw a circle at a random position
  x = random(width);
  y = random(height);
  fill(b, r, g);
  ellipse(x, y, size/2, size/2);
}

function mouseClicked() {
  // clear the canvas on mouse click
  background(255);
}