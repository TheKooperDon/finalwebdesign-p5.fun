function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('hero-js');
  }
  function draw() {
    
    ellipse(mouseX, mouseY, 50, 50);
    fill(random(255),random(255),random(255))
  }