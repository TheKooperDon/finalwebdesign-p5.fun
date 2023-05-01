let points = [];

function setup() {
  createCanvas(300, 400);
  strokeWeight(2);
  frameRate(10);
}

function draw() {
  background(255);

  
  // add a new set of points
  let newPoints = [];
  for (let i = 0; i < 5; i++) {
    newPoints.push(createVector(random(width), random(height)));
  }
  points.push(newPoints);
  
  // limit the number of sets of points
  if (points.length > 10) {
    points.shift();
  }
  
  // draw lines between the points
  for (let i = 0; i < points.length; i++) {
    let currentPoints = points[i];
    stroke(0, 50);
    for (let j = 0; j < currentPoints.length; j++) {
      let currentPoint = currentPoints[j];
      for (let k = 0; k < points.length; k++) {
        if (i != k) {
          let otherPoints = points[k];
          for (let l = 0; l < otherPoints.length; l++) {
            let otherPoint = otherPoints[l];
            let distance = dist(currentPoint.x, currentPoint.y, otherPoint.x, otherPoint.y);
            if (distance < 50) {
              let opacity = map(distance, 0, 50, 255, 0);
              stroke(0, opacity);
              line(currentPoint.x, currentPoint.y, otherPoint.x, otherPoint.y);
            }
          }
        }
      }
    }
  }
}