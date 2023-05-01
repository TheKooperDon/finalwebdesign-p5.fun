let angle = 0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  angle += 0.05;
  for (let y = 0; y < height; y++) {
    let wave = sin(angle + y * 0.02);
    let xoffset = map(wave, -1, 1, -50, 50);
    let bright = map(wave, -1, 1, 0, 255);
    stroke(bright, bright, bright);
    line(0 + xoffset, y, width + xoffset, y);
  }
}