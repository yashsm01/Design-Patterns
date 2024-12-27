// Singleton: Ensures a class has only one instance and provides a global access point to it.
// # Singleton Pattern:
//  - The Singleton pattern is a design pattern that restricts the instantiation of a class to one object.
//  - This is useful when exactly one object is needed to coordinate actions across the system.
//  - The pattern is used in scenarios when a user wants to restrict instantiation of a class to only one

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // Return the existing instance if it already exists
    }
    Singleton.instance = this; // Store the instance in a static property
    // Initialize your singleton instance properties here
  }

  // Add your methods here
  someMethod() {
    console.log("Singleton method called"); // Example method
  }
}

const instance1 = new Singleton(); // Create the first instance
const instance2 = new Singleton(); // Attempt to create a second instance

console.log(instance1 === instance2); // true - Both variables point to the same instance

instance1.someMethod(); // Singleton method called

// Result
// Output:
// true
// Singleton method called
