import Circle from './../src/circle.js';

describe('Circle', () => {

  test('should correctly create a circle object with inputted radius', () => {
    const circle = new Circle(2);
    expect(circle.radius).toEqual(2);
  })

  test('should correctly determine the diameter of a circle given its radius', () => {
    const circle = new Circle(2);
    expect(circle.toDiameter()).toEqual(circle.radius*2);
  })

  test('should correctly determine the circumference of a circle given its radius', () => {
    const circle = new Circle(2);
    expect(circle.toCircumference()).toEqual((circle.radius*2)*3.14);
  })

});

