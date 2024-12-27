// Decorator: Allows behavior to be added to an individual object dynamically.
// use case:
// - When you want to add behavior to individual objects at runtime.
// - The Decorator pattern is useful when you want to add behavior to individual objects at runtime.
// - This pattern is used to:
//    - Add new responsibilities to objects dynamically and transparently.
//    - Extend functionality without subclassing.
//    - Implement alternative inheritance.
//    - Add or remove responsibilities from objects.
//    - Combine several behaviors by wrapping an object into multiple decorators.
//    - Allow the client to choose the features they want.

// Component
class Coffee {
  cost() {
    return 5; // Base cost of the coffee
  }
}

// Decorator
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee; // Store the coffee instance
  }

  cost() {
    return this.coffee.cost() + 1; // Add the cost of milk to the coffee
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee; // Store the coffee instance
  }

  cost() {
    return this.coffee.cost() + 0.5; // Add the cost of sugar to the coffee
  }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.cost()); // 5 - Base cost of the coffee

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost()); // 6 - Cost of coffee with milk

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.cost()); // 6.5 - Cost of coffee with milk and sugar

// Result
// Output:
// 5
// 6
// 6.5
