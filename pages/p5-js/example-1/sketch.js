function setup() {
    createCanvas(300, 400);
  }
  
  // draw lines and make it colorful
  function draw() {
    // pick a random color for the stroke
    stroke(random(255), random(255), random(255));
    // pick a random width for the stroke
    strokeWeight(random(10));
    // draw a line from a random point to another random point
    line(random(width), random(height), random(width), random(height));
  }