// A class to represent a falling shape
class Shape {
  constructor() {
    // Choose a random color
    this.color = color(random(255), random(255), random(255));
    // Choose a random shape (circle or square)
    this.shape = random(["circle", "square"]);
    // Choose a random size between 10 and 50
    this.size = random(10, 50);
    // Choose a random position on the x-axis
    this.x = random(width);
    // Start at the top of the canvas
    this.y = -this.size / 2;
    // Choose a random speed between 1 and 5
    this.speed = random(1, 5);
  }

  // A method to update the position of the shape
  update() {
    // Move the shape down by its speed
    this.y += this.speed;
    // If the shape reaches the bottom of the canvas, reset its position to the top
    if (this.y > height + this.size / 2) {
      this.y = -this.size / 2;
      this.x = random(width);
    }
  }

  // A method to draw the shape on the canvas
  draw() {
    // Set the fill color to the shape's color
    fill(this.color);
    // Set the stroke color to black
    stroke(0);
    // Set the stroke weight to 2
    strokeWeight(2);
    // Draw the shape according to its type
    if (this.shape == "circle") {
      circle(this.x, this.y, this.size);
    } else if (this.shape == "square") {
      square(this.x - this.size / 2, this.y - this.size / 2, this.size);
    }
  }
}

// An array to store the shapes
let shapes = [];

// A function to set up the canvas and create some shapes
function setup() {
  // Create a canvas with size 800 by 600
  createCanvas(800, 600);
  // Create 20 shapes and add them to the array
  for (let i = 0; i < 20; i++) {
    shapes.push(new Shape());
  }
}

// A function to draw on the canvas
function draw() {
  // Clear the background with white color
  background(0);
  // Loop through the shapes array
  for (let shape of shapes) {
    // Update and draw each shape
    shape.update();
    shape.draw();
  }
}