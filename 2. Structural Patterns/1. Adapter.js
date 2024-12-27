// Adapter: Allows incompatible interfaces to work together.
//use case: When you have a class that expects a certain
//          type and you have an object that provides the
//          same functionality but exposes a different
//          interface, you can use the Adapter pattern
//          to make them work together.

// Old interface
class OldPrinter {
  print(text) {
    console.log(`Printing: ${text}`); // Method to print text using the old interface
  }
}

// New interface
class NewPrinter {
  printDocument(document) {
    console.log(`Printing document: ${document}`); // Method to print a document using the new interface
  }
}

// Adapter class
class PrinterAdapter {
  constructor(newPrinter) {
    this.newPrinter = newPrinter; // Store the new printer instance
  }

  print(text) {
    this.newPrinter.printDocument(text); // Adapt the old print method to the new printDocument method
  }
}

// Usage
const oldPrinter = new OldPrinter();
oldPrinter.print("Hello, World!"); // Using the old printer interface

const newPrinter = new NewPrinter();
const adapter = new PrinterAdapter(newPrinter);
adapter.print("Hello, World!"); // Using the adapter to work with the new printer interface

// Result
// Output:
// Printing: Hello, World!
// Printing document: Hello, World!
