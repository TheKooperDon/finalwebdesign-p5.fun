let particles = [];
let attractor;

function setup() {
  createCanvas(300, 400);
  colorMode(HSB);
  noStroke();
  attractor = new Attractor(width/2, height/2);
}

function draw() {
  background(200, 50, 50);
  
  // Attract and repel particles from the attractor
  for (let i = 0; i < particles.length; i++) {
    let force = attractor.attract(particles[i]);
    particles[i].applyForce(force);
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  
  // Update and show the attractor
  attractor.update();
  attractor.show();
  
  // Add new particles on mouse press
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-5, -1));
    this.acc = createVector(0, 0);
    this.life = 255;
    this.hue = random(180, 250);
    this.size = random(5, 20);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.life -= 5;
    this.acc.mult(0);
  }

  show() {
    fill(this.hue, 100, 100, this.life);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  finished() {
    return this.life < 0;
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
}

class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 50;
    this.size = 20;
  }
  
  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  
  show() {
    fill(0, 100, 100);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  attract(particle) {
    let force = p5.Vector.sub(this.pos, particle.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * particle.mass) / (distance * distance);
    force.setMag(strength);
    return force;
  }
  
  repel(particle) {
    let force = p5.Vector.sub(particle.pos, this.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * particle.mass) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}