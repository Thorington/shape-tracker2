//business logic//
// circumference = diameter X 3.14
// diameter = radius X 2 

export default function Circle(radius,diameter,circumference) {
  this.radius = radius;
  this.diameter = diameter;
  this.circumference = circumference;
}

// business logic for finding the radius ---first test---///
Circle.prototype.radiusCheck = function() {
  if (this.radius = parseInt((radius)) ) {
    return "the radius is" + (this.radius) ;
  } else
  return "please input a number";
  }




//business logic for finding the diameter ///
Circle.prototype.findDiameter = function() {
  if ( this.diameter === radius * 2) {
    return true + "the diameter is " + (this.diameter);
  } else {
    return false + "not the diameter";
  }
}





  // Multiply the radius by 2 to get the diameter. Multiply the result by π, or 3.14 for an estimation. That's it; you found the circumference of the circle.


  