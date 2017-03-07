function Point(x, y) {
  this.x = x;
  this.y = y;
  toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  }
}
