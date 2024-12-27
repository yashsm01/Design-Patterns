// Builder: Separates the construction of a complex object from its representation.

class Product {
  constructor() {
    this.parts = []; // Initialize an empty array to store parts of the product
  }

  addPart(part) {
    this.parts.push(part); // Add a part to the product
  }

  showParts() {
    console.log(`Product parts: ${this.parts.join(", ")}`); // Display the parts of the product
  }
}

class Builder {
  constructor() {
    this.product = new Product(); // Initialize a new Product instance
  }

  buildPartA() {
    this.product.addPart("PartA"); // Add 'PartA' to the product
  }

  buildPartB() {
    this.product.addPart("PartB"); // Add 'PartB' to the product
  }

  getResult() {
    return this.product; // Return the constructed product
  }
}

class Director {
  setBuilder(builder) {
    this.builder = builder; // Set the builder instance
  }

  construct() {
    this.builder.buildPartA(); // Direct the builder to build PartA
    this.builder.buildPartB(); // Direct the builder to build PartB
  }
}

// Usage
const builder = new Builder(); // Create a new Builder instance
const director = new Director(); // Create a new Director instance

director.setBuilder(builder); // Set the builder in the director
director.construct(); // Direct the construction process

const product = builder.getResult(); // Retrieve the constructed product
product.showParts(); // Display the parts of the product

// Result
// Output: Product parts: PartA, PartB
