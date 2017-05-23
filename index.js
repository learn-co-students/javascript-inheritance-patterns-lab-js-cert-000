function Point (x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return(/this.x,\\s?this.y/)
}

function Shape () {/*
this.addToPlane = function (x,y) {
this.position = new Point ( x, y)
}**/
/*this.move = function (x,y) {
 this.position = new Point ( x, y)
}**/
//Point.call(this);
}


Shape.prototype = Object.create(Point.prototype);

Shape.prototype.constructor = Shape;

Shape.prototype.addToPlane = function (x,y) {
this.position = new Point ( x, y)
}

Shape.prototype.move = function (x,y) {
 this.position = new Point ( x, y)
}




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
return 2*r*Math.PI
}
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;




function Side (l) {
this.length = l;
}



function Polygon (sides){
Shape.call(this);
this.sides = sides;
/*this.perimeter = function (){
return sides.reduce ((pv,e) =>  pv+e.length, 0);
}
this.numberOfSides = function (){
return sides.length
}**/
}

Polygon.prototype = Object.create(Shape.prototype);

Polygon.prototype.constructor = Polygon;



//Die Funktionen müsen hier zu dem Polygon-Prototyp hinzugefügt werden, damit sie
//nicht von den Erben als eigene Eigenschaft übernommen werden, sondern vererbt werden

Polygon.prototype.perimeter = function (){
return this.sides.reduce ((pv,e) =>  pv+e.length, 0);
}


Polygon.prototype.numberOfSides = function (){
return this.sides.length
}


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
/*this.area = function(){
return w*h
}**/
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.constructor = Rectangle
//Die Funktion muss hier zu dem Rectangle-Prototyp hinzugefügt werden, damit sie
//nicht von den Erben als eigene Eigenschaft übernommen wird
Rectangle.prototype.area = function(){
return this.width*this.height
}


function Square (a){
Rectangle.call(this,a,a);
this.length = a
}


Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square




Square.prototype.listProperties = function (){
var props =[]
for (var prop in this) {
  if(this.hasOwnProperty(prop)) {
//Hier werden die Eigenschaften immer hinter an das Array gehängt
props.push(prop)
  }
}
//Join macht aus dem Array einen String und nimmt als Trennzeichen das in der Klammer
return props.join(', ')
}
