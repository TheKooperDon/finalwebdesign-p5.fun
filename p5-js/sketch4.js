


// save this file as sketch.js
// Sketch One
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'test1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'test2');


// Sketch Three
var z = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    
    p.ellipse(mouseX, mouseY, 50, 50);
    p.fill(random(255), random(255), random(255))

  };
};
var myp5 = new p5(z, 'javascript-example');



// Sketch Three
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
    for (let i = 0; i < 50; i++) {
      bugs.push(new Jitter());
    }
  };

  p.draw = function() {
    
    background(50, 89, 100);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = p.random(width);
    this.y = p.random(height);
    this.diameter = p.random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += p.random(-this.speed, this.speed);
    this.y += p.random(-this.speed, this.speed);
  }

  display() {
    p.ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  };
};
var myp5 = new p5(t, 'history-js');

// Home Page Hero Image




