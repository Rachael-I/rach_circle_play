var circle_1;
var circle_2;
var circle_3;

function setup() {
  createCanvas(400, 400);
  circle_1 = new Circle();
  circle_2 = new Circle();
  circle_3 = new Circle();
}

function draw() {
  background(220); 
  
  circle_1.draw();
  
  circle_2.x = 150;
  circle_2.draw();
  
  circle_3.x = 250;
  circle_3.draw();
}

function Circle() {
  this.x = width/2;
  this.y = height/2;
  this.size = 50;
  this.draw = function() {
    ellipse (this.x, this.y, this.size, this.size);
  };
  this.grow = function() {
    if (this.size < 200) {
      this.size = this.size + 1;
    }
  }
}