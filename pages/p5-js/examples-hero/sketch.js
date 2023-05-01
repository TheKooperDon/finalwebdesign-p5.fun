let sun;
let buildings = [];

function setup() {
  createCanvas(800, 600);
  sun = new Sun();
  for (let i = 0; i < 10; i++) {
    buildings.push(new Building(random(0, width), random(200, height), random(50, 200)));
  }
}

function draw() {
  let skyColor = color(250, 110, 240);
  let sunColor = color(255, 230, 120);
  let buildingColor = color(50, 50, 50);
  
  // Draw the sky
  background(skyColor);
  
  // Draw the sun
  sun.display(sunColor);
  
  // Draw the buildings
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display(buildingColor);
  }
  
  // Change the color of the sky, sun, and buildings over time
  let cycleTime = map(sin(frameCount / 100), -1, 1, 0, 1);
  skyColor = lerpColor(color(250, 110, 240), color(135, 206, 235), cycleTime);
  sunColor = lerpColor(color(255, 230, 120), color(255, 180, 0), cycleTime);
  buildingColor = lerpColor(color(50, 50, 50), color(200, 200, 200), cycleTime);
}