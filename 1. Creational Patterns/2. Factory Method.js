// Factory Method: Defines an interface for creating objects, but allows subclasses to alter the type of objects that will be created.

class Product {
  operation() {
    throw new Error("This method should be overridden!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete Products
class ConcreteProductA extends Product {
  operation() {
    return "Result of ConcreteProductA"; // Implementation of the operation method for ConcreteProductA
  }
}

class ConcreteProductB extends Product {
  operation() {
    return "Result of ConcreteProductB"; // Implementation of the operation method for ConcreteProductB
  }
}

// Creator class
class Creator {
  factoryMethod() {
    throw new Error("This method should be overridden!"); // Abstract factory method to be overridden by subclasses
  }

  someOperation() {
    const product = this.factoryMethod(); // Call the factory method to create a product
    return `Creator: The same creator's code has just worked with ${product.operation()}`; // Use the product
  }
}

// Concrete Creators
class ConcreteCreatorA extends Creator {
  factoryMethod() {
    return new ConcreteProductA(); // Create and return an instance of ConcreteProductA
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod() {
    return new ConcreteProductB(); // Create and return an instance of ConcreteProductB
  }
}

// Client code
function clientCode(creator) {
  console.log(creator.someOperation()); // Call someOperation on the creator and log the result
}

console.log("App: Launched with ConcreteCreatorA.");
clientCode(new ConcreteCreatorA()); // Use ConcreteCreatorA to create a product and perform an operation

console.log("App: Launched with ConcreteCreatorB.");
clientCode(new ConcreteCreatorB()); // Use ConcreteCreatorB to create a product and perform an operation

// Result
// Output:
// App: Launched with ConcreteCreatorA.
// Creator: The same creator's code has just worked with Result of ConcreteProductA
// App: Launched with ConcreteCreatorB.
// Creator: The same creator's code has just worked with Result of ConcreteProductB
