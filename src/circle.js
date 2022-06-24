
export default function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.toDiameter = function() {
  const circle = new Circle();
  const result = (this.radius*2);
  return "result";
  }

Circle.prototype.toCircumference = function() {
  const circle = new Circle();
  const result = ((this.radius*2)*3.14);
  return "result";
  }




  