function Point (x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return (console.log("(" + this.x + ", " + this.y + ")" ))
}

function Shape () {
this.addToPlane = function (x,y) {
this.position = new Point ( x, y)
}
this.move = function (x,y) {
 this.position = new Point ( x, y)
}
}




Shape.prototype = Object.create(Point.prototype);

Shape.prototype.constructor = Shape;



function Circle(r){
Shape.call(this);
this.diameter = function (){
return 2*r
}
this.radius = r
this.area = function (){
return r*r*Math.PI
}
this.circumference = function () {
return 2*Math.PI*r
}
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;




function Side (l) {
this.length = l;
}



function Polygon (sides){
Shape.call(this);
this.perimeter = function (){
return sides.reduce ((pv,e) =>  pv+e.length, 0);
}
this.numberOfSides = function (){
return sides.length
}
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.constructor = Polygon;



function Triangle (a, b, c) {
Polygon.call(this, [new Side(a), new Side(b), new Side(c)]);
}

Triangle.prototype = Object.create(Polygon.prototype);

Triangle.prototype.constructor = Triangle







function Quadrilateral(a,b,c,d) {
Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);

Quadrilateral.prototype.constructor = Quadrilateral



function Rectangle (w,h){
Quadrilateral.call(this,w,h,w,h);
this.width = w;
this.height = h;
this.area = function(){
return w*h
}
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Rectangle


function Square (a){
Rectangle.call(this,a,a);
this.length = a
}


Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square




quare.prototype.listProperties = function (){
var props =[]
for (var prop in this) {
  if(this.hasOwnProperty(prop)) {
props.push(prop)
  }
}
return props.join(', ')
}









 
