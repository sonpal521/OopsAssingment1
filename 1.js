
/**
 *  "Write a program to define a class “Shape”. This class will have the properties length, breadth and height.
Create a parameterised constructor that takes input as length, breadth and height. Define a method area()
inside the class and it should return value as length*breadth*height.
Create an Object of shape class and call the area() method to fetch the area."
 */
class Shape {
    constructor(length, breadth, height) {
      this.length = length;
      this.breadth = breadth;
      this.height = height;
    }
  
    area() {
      return this.length * this.breadth * this.height;
    }
  }
  
  // Create an object of the Shape class
  const myShape = new Shape(10, 5, 2);
  
  // Call the area method to fetch the area
  const area = myShape.area();
  
  console.log(area); // Output: 100
  