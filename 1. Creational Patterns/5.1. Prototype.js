// Prototype: Creates new objects by copying an existing object, known as the prototype.
// use case:
// - When you want to create new objects by copying an existing object, known as the prototype.
// - The Prototype pattern is useful when you want to create new objects by copying an existing object rather than by instantiating a class.
// - This pattern is used to:
//    - Avoid subclasses of an object creator in the client application, like the Factory Method pattern does.
//    - Avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application.
//    - Implement a simplified version of a 'deep copy' of an object.

// Prototype object
const prototypeCar = {
  make: "Default",
  model: "Default",
  year: 2000,
  clone: function () {
    return Object.assign({}, this); // Create a new object by copying properties from the prototype
  },
};

// Creating a new car by cloning the prototype
const car1 = prototypeCar.clone();
car1.make = "Toyota";
car1.model = "Corolla";
car1.year = 2021;

const car2 = prototypeCar.clone();
car2.make = "Honda";
car2.model = "Civic";
car2.year = 2022;

console.log(car1); // { make: 'Toyota', model: 'Corolla', year: 2021, clone: [Function: clone] }
console.log(car2); // { make: 'Honda', model: 'Civic', year: 2022, clone: [Function: clone] }

// Result
// Output:
// { make: 'Toyota', model: 'Corolla', year: 2021, clone: [Function: clone] }
// { make: 'Honda', model: 'Civic', year: 2022, clone: [Function: clone] }
