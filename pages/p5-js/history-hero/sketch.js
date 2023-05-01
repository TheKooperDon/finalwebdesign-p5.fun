let sunX, sunY, sunSize; // Variables for the sun
let mountainHeight = 400; // Height of the mountains
let speed = 1; // Speed of the movement
let mountainColor = "#008000"; // Color of the mountains

function setup() {
  createCanvas(windowWidth, 800);
  sunX = width / 2;
  sunY = height / 4;
  sunSize = 80;
}

function draw() {
  // Draw the sky
  background("#87CEEB");

  // Draw the sun
  fill("#FFD700");
  circle(sunX, sunY, sunSize);

  // Move the sun
  sunX += speed;

  // If the sun goes off the screen, reset its position
  if (sunX > width + sunSize) {
    sunX = -sunSize;
  }

  // Draw the mountains
  noStroke();
  fill(mountainColor);
  triangle(0, height, 0, height - mountainHeight, width / 2, height - mountainHeight / 2);
  triangle(width, height, width, height - mountainHeight, width / 2, height - mountainHeight / 2);

  // Move the mountains
  mountainHeight += speed;
  if (mountainHeight > 500) {
    mountainHeight = 400;
    mountainColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
  }
}