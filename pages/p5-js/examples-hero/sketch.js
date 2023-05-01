let colors = [];
let numCircles = 20;
let circleSize = 100;
let circleSpacing = 50;

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // create an array of random colors for the circles
  for (let i = 0; i < numCircles; i++) {
    colors[i] = color(random(200, 255), random(200, 255), random(200, 255));
  }
}

function draw() {
  // draw background gradient
  background(200, 100, 100);
  for (let i = 0; i < height; i++) {
    let from = color(255, 200, 0);
    let to = color(0, 200, 255);
    let inter = lerpColor(from, to, i / height);
    stroke(inter);
    line(0, i, width, i);
  }
  
  // update circle colors
  for (let i = 0; i < numCircles; i++) {
    colors[i] = lerpColor(colors[i], color(random(200, 255), random(200, 255), random(200, 255)), 0.01);
  }
  
  // draw circles
  let xOffset = (width - (numCircles * (circleSize + circleSpacing))) / 2;
  let yOffset = height / 2;
  for (let i = 0; i < numCircles; i++) {
    let x = xOffset + (i * (circleSize + circleSpacing));
    let y = yOffset + sin(frameCount / 50 + i) * 50;
    fill(colors[i]);
    ellipse(x, y, circleSize, circleSize);
  }
}