// Define the variables for the ball and the paddles
let ballX = 400;
let ballY = 300;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballSize = 20;
let paddleWidth = 20;
let paddleHeight = 100;
let leftPaddleY = 250;
let rightPaddleY = 250;
let paddleSpeed = 10;

function setup() {
  // Create a canvas of size 800 by 600
  createCanvas(800, 600);
}

function draw() {
  // Fill the background with black
  background(0);
  
  // Draw the ball with white color
  fill(255);
  ellipse(ballX, ballY, ballSize, ballSize);
  
  // Draw the left paddle with white color
  rect(0, leftPaddleY, paddleWidth, paddleHeight);
  
  // Draw the right paddle with white color
  rect(width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);
  
  // Move the ball by its speed
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  // Check if the ball hits the top or bottom edge and reverse its vertical speed
  if (ballY < ballSize / 2 || ballY > height - ballSize / 2) {
    ballSpeedY = -ballSpeedY;
  }
  
  // Check if the ball hits the left or right edge and reset its position and speed
  if (ballX < ballSize / 2 || ballX > width - ballSize / 2) {
    ballX = width / 2;
    ballY = height / 2;
    ballSpeedX = random(-5, 5);
    ballSpeedY = random(-5, 5);
  }
  
  // Check if the ball hits the left paddle and reverse its horizontal speed
  if (ballX < paddleWidth + ballSize / 2 && 
      ballY > leftPaddleY && 
      ballY < leftPaddleY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    // Add some randomness to the vertical speed
    ballSpeedY += random(-1, 1);
  }
  
   // Check if the ball hits the right paddle and reverse its horizontal speed
   if (ballX > width - paddleWidth - ballSize / 2 && 
      ballY > rightPaddleY && 
      ballY < rightPaddleY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
    // Add some randomness to the vertical speed
    ballSpeedY += random(-1, 1);
   }
   
   // Move the left paddle up or down based on the key pressed
   if (keyIsDown(UP_ARROW)) {
     leftPaddleY -= paddleSpeed;
   }
   if (keyIsDown(DOWN_ARROW)) {
     leftPaddleY += paddleSpeed;
   }
   
   // Constrain the left paddle within the canvas
   leftPaddleY = constrain(leftPaddleY, 0, height - paddleHeight);
   
   // Move the right paddle up or down based on the position of the ball
   if (ballY < rightPaddleY + paddleHeight / 2) {
     rightPaddleY -= paddleSpeed;
   }
   if (ballY > rightPaddleY + paddleHeight / 2) {
     rightPaddleY += paddleSpeed;
   }
   
   // Constrain the right paddle within the canvas
   rightPaddleY = constrain(rightPaddleY, 0, height - paddleHeight);
}