// Define the variables for the ball and the paddles
let ballX = 400;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballSize = 20;
let paddleWidth = 20;
let paddleHeight = 100;
let leftPaddleY = 150;
let rightPaddleY = 150;
let paddleSpeed = 10;

function setup() {
  // Create a canvas of size 800 by 400
  createCanvas(800, 400);
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
    // Make sure the ball stays within the canvas
    ballY = constrain(ballY, ballSize / 2, height - ballSize / 2);
  }
  
   // Check if the ball hits the left or right edge and reverse its horizontal speed
   if (ballX < paddleWidth + ballSize / 2 || 
      ballX > width - paddleWidth - ballSize / 2) {
    ballSpeedX = -ballSpeedX;
    // Add some randomness to the vertical speed
    ballSpeedY += random(-1, 1);
   }
   
   // Move the left paddle up or down based on the position of the ball
   if (ballY < leftPaddleY + paddleHeight / 2) {
     leftPaddleY -= paddleSpeed;
   }
   if (ballY > leftPaddleY + paddleHeight / 2) {
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