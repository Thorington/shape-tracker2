import Circle from './../src/circle.js';

describe('Circle', () => {

  test('Should correctly find and define circle elements', () => {
    const circle = new Circle("a","b","c"); 
    expect(circle.radius).toEqual("a");
    expect(circle.diameter).toEqual("b");
    expect(circle.circumference).toEqual("c");
  })

  test('Should return radius value if integer', () => {
    const circleRadius = new Circle();
    expect(circleRadius.radiusCheck()).toEqual(2);
})

})
