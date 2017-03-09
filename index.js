//creating a Point constructor and adding toString method
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

//creating sides constructor to be used in polygon
function Side(length) {
  this.length = length;
}

//creating overarching shape prototype with function for adding to plane and moving the shape
function Shape() {};

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}
Shape.prototype.move = function(x, y) {
  this.position = new Point (x, y);
}

//creating a circle prototype based on shape prototype and extending it
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return (this.radius * 2);
}
Circle.prototype.area = function() {
  return (Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius);
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

//creating triangle prototype based on polygon prototype
function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

//creating quadrilateral prototype based on polygon prototype
function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

//creating rectangle prototype based on quadrilateral prototype
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

//creating square prototype based on rectangle prototype
function Square(length) {
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var arrayOfProperties = [];
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      arrayOfProperties.push("Square." + prop + " = " + this[prop]);
    }
  }
  return arrayOfProperties.join(', ');
}
