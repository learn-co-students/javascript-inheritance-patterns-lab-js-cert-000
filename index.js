function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

function Shape(x, y) {
  this.addToPlane = function(x, y) {
    this.position = Point.call(this, x, y);
  }
}

Shape.prototype.move = function(x, y) {
  this.position = Point.call(this, x, y);
}
