//creating a Point constructor and adding toString method
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

//creating overarching shape prototype with function for adding to plane and moving the shape
function Shape(x, y) {};

Shape.prototype.addToPlane = function(x, y) {
  return this.position = new Point(x, y);
}
Shape.prototype.move = function(x, y) {
  return this.position = new Point (x, y);
}

//creating a circle prototype based on shape prototype and extending it
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius * 2;
}
Circle.prototype.area = function() {
  return this.radius * 2;
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
}

//creating sides constructor to be used in polygon
function Side(length) {
  this.length = length;
}

//creating polygon prototype based on shape prototype and extending it
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var totalPerimeter = 0;
  for(var i = 0, l = this.sides.length; i < l; i++) {
    totalPerimeter += this.sides[i].length;
  }
  return totalPerimeter;
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

//creating quadrilateral prototype based on polygon prototype
//SO THE PROBLEM IS: it is expecting "sides" as an argument, to satisfy Polygon methods, however, there tests don't take
//into account the "sides" argument when they pass in arguments. Look at the solution to see if it's something you are doing.
//Pretty sure it's not.
function Quadrilateral(sides, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, sides);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;
