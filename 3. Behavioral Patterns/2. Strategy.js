// Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable
// # Strategy Pattern:
//  - The Strategy pattern is a behavioral design pattern that defines a family of algorithms,
// encapsulates each one, and makes them interchangeable.
//  - This pattern allows a method to be selected at runtime, based on the requirements or
// conditions.
//  - The Strategy pattern is used to create an interchangeable family of algorithms from which the required
// process is chosen at runtime.
//  - The Strategy pattern is used when you want to define a class that will have one behavior that is similar to
// other behaviors in a list.
//  - This pattern is used to:
//     - Define a family of algorithms, encapsulate each one, and make them interchangeable.
//     - Allow the client to choose the algorithm to be used at runtime.
//     - Eliminate conditional statements in the client code.
//     - Separate the algorithm from the client code.
//     - Implement the Open/Closed principle.
//     - Implement the Single Responsibility principle.
//     - Implement the Dependency Inversion principle.
//
// Strategy interface
class Strategy {
  execute(a, b) {
    throw new Error("This method should be overridden!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete strategies
class AddStrategy extends Strategy {
  execute(a, b) {
    return a + b; // Implementation of addition
  }
}

class SubtractStrategy extends Strategy {
  execute(a, b) {
    return a - b; // Implementation of subtraction
  }
}

class MultiplyStrategy extends Strategy {
  execute(a, b) {
    return a * b; // Implementation of multiplication
  }
}

class DivideStrategy extends Strategy {
  execute(a, b) {
    if (b === 0) {
      throw new Error("Division by zero!"); // Handle division by zero
    }
    return a / b; // Implementation of division
  }
}

// Context
class Calculator {
  constructor(strategy) {
    this.strategy = strategy; // Store the initial strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy; // Change the strategy at runtime
  }

  executeStrategy(a, b) {
    return this.strategy.execute(a, b); // Execute the strategy
  }
}

// Usage
const calculator = new Calculator(new AddStrategy());
console.log(calculator.executeStrategy(5, 3)); // Output: 8

calculator.setStrategy(new SubtractStrategy());
console.log(calculator.executeStrategy(5, 3)); // Output: 2

calculator.setStrategy(new MultiplyStrategy());
console.log(calculator.executeStrategy(5, 3)); // Output: 15

calculator.setStrategy(new DivideStrategy());
console.log(calculator.executeStrategy(6, 3)); // Output: 2

// Result
// Output:
// 8
// 2
// 15
// 2
