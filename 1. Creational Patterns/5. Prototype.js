// Prototype: Creates new objects by copying an existing object, known as the prototype.

class Prototype {
  constructor(proto) {
    this.proto = proto; // Store the prototype object
  }

  clone() {
    const clone = Object.create(this.proto); // Create a new object with the prototype as its prototype
    clone.init(); // Initialize the cloned object
    return clone; // Return the cloned object
  }
}

const car = {
  wheels: 4, // Property of the car object
  init() {
    console.log(`This car has ${this.wheels} wheels`); // Method to initialize the car object
  },
};

const prototype = new Prototype(car); // Create a Prototype instance with the car object as the prototype
const carClone = prototype.clone(); // Clone the car object

// Result
// Output:
// This car has 4 wheels
