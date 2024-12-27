// Abstract Factory: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

class AbstractFactory {
  createProductA() {
    throw new Error("This method should be overridden!"); // Abstract method to be overridden by subclasses
  }

  createProductB() {
    throw new Error("This method should be overridden!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete Factory 1
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1(); // Create and return an instance of ProductA1
  }

  createProductB() {
    return new ProductB1(); // Create and return an instance of ProductB1
  }
}

// Concrete Factory 2
class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2(); // Create and return an instance of ProductA2
  }

  createProductB() {
    return new ProductB2(); // Create and return an instance of ProductB2
  }
}

// Abstract Products
class AbstractProductA {
  constructor() {
    if (new.target === AbstractProductA) {
      throw new Error("Cannot instantiate an abstract class!"); // Prevent instantiation of abstract class
    }
  }
}

class AbstractProductB {
  constructor() {
    if (new.target === AbstractProductB) {
      throw new Error("Cannot instantiate an abstract class!"); // Prevent instantiation of abstract class
    }
  }
}

// Concrete Products
class ProductA1 extends AbstractProductA {
  constructor() {
    super(); // Call the constructor of the parent class
    console.log("ProductA1 created"); // Log creation of ProductA1
  }
}

class ProductA2 extends AbstractProductA {
  constructor() {
    super(); // Call the constructor of the parent class
    console.log("ProductA2 created"); // Log creation of ProductA2
  }
}

class ProductB1 extends AbstractProductB {
  constructor() {
    super(); // Call the constructor of the parent class
    console.log("ProductB1 created"); // Log creation of ProductB1
  }
}

class ProductB2 extends AbstractProductB {
  constructor() {
    super(); // Call the constructor of the parent class
    console.log("ProductB2 created"); // Log creation of ProductB2
  }
}

// Client code
function clientCode(factory) {
  const productA = factory.createProductA(); // Create ProductA using the factory
  const productB = factory.createProductB(); // Create ProductB using the factory
}

console.log("Client: Testing client code with the first factory type:");
clientCode(new ConcreteFactory1()); // Use ConcreteFactory1 to create products

console.log(
  "Client: Testing the same client code with the second factory type:"
);
clientCode(new ConcreteFactory2()); // Use ConcreteFactory2 to create products

// Result
// Output:
// Client: Testing client code with the first factory type:
// ProductA1 created
// ProductB1 created
// Client: Testing the same client code with the second factory type:
// ProductA2 created
// ProductB2 created
