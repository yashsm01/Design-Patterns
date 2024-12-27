// Composite: Composes objects into tree-like structures to represent part-whole hierarchies.
// use case:
// - When you want to treat individual objects and compositions of objects uniformly.
// - The Composite pattern is useful when you want to treat individual objects and compositions of objects uniformly.
// - This pattern is used to:
//    - Compose objects into tree structures to represent part-whole hierarchies.
//    - Allow clients to treat individual objects and compositions of objects uniformly.
//    - Simplify the client code by allowing the client to interact with the elements uniformly.
//    - Implement recursive composition.

// Component
class Component {
  constructor(name) {
    this.name = name; // Store the name of the component
  }

  add(component) {
    throw new Error("Method not implemented."); // Abstract method to be overridden by subclasses
  }

  remove(component) {
    throw new Error("Method not implemented."); // Abstract method to be overridden by subclasses
  }

  display(depth) {
    throw new Error("Method not implemented."); // Abstract method to be overridden by subclasses
  }
}

// Leaf
class Leaf extends Component {
  constructor(name) {
    super(name); // Call the constructor of the parent class
  }

  add(component) {
    console.log("Cannot add to a leaf"); // Leaf nodes cannot have children
  }

  remove(component) {
    console.log("Cannot remove from a leaf"); // Leaf nodes cannot have children
  }

  display(depth) {
    console.log("-".repeat(depth) + this.name); // Display the leaf node with indentation
  }
}

// Composite
class Composite extends Component {
  constructor(name) {
    super(name); // Call the constructor of the parent class
    this.children = []; // Initialize an array to store child components
  }

  add(component) {
    this.children.push(component); // Add a child component
  }

  remove(component) {
    const index = this.children.indexOf(component); // Find the index of the child component
    if (index !== -1) {
      this.children.splice(index, 1); // Remove the child component if it exists
    }
  }

  display(depth) {
    console.log("-".repeat(depth) + this.name); // Display the composite node with indentation
    for (const child of this.children) {
      child.display(depth + 2); // Recursively display child components with increased indentation
    }
  }
}

// Usage
const root = new Composite("root");
const branch1 = new Composite("branch1");
const branch2 = new Composite("branch2");
const leaf1 = new Leaf("leaf1");
const leaf2 = new Leaf("leaf2");
const leaf3 = new Leaf("leaf3");

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch2.add(leaf2);
branch2.add(leaf3);

root.display(1);

// Result
// Output:
// -root
// ---branch1
// -----leaf1
// ---branch2
// -----leaf2
// -----leaf3
