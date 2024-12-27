// Facade: Provides a simplified interface to a complex system of classes, making it easier to use.
// use case:
// - When you need to provide a simple interface to a complex system of classes.
// - The Facade pattern is used to:
//    - Provide a simple interface to a complex system of classes.
//    - Hide the complexity of the system from the client.
//    - Decouple the client from the system.
//    - Provide a single entry point to the system.
//    - Simplify the client code by providing a high-level interface.
//    - Reduce dependencies between the client and the system.
//    - Wrap a complex system with a simpler interface.

// Subsystem classes
class CPU {
  freeze() {
    console.log("Freezing CPU..."); // Simulate freezing the CPU
  }

  jump(position) {
    console.log(`Jumping to position ${position}...`); // Simulate jumping to a specific position
  }

  execute() {
    console.log("Executing instructions..."); // Simulate executing instructions
  }
}

class Memory {
  load(position, data) {
    console.log(`Loading data '${data}' at position ${position}...`); // Simulate loading data into memory
  }
}

class HardDrive {
  read(lba, size) {
    console.log(`Reading ${size} bytes from LBA ${lba}...`); // Simulate reading data from the hard drive
    return "data"; // Return dummy data
  }
}

// Facade class
class ComputerFacade {
  constructor() {
    this.cpu = new CPU(); // Initialize the CPU subsystem
    this.memory = new Memory(); // Initialize the Memory subsystem
    this.hardDrive = new HardDrive(); // Initialize the HardDrive subsystem
  }

  start() {
    this.cpu.freeze(); // Freeze the CPU
    const data = this.hardDrive.read(0, 1024); // Read data from the hard drive
    this.memory.load(0, data); // Load data into memory
    this.cpu.jump(0); // Jump to the start position
    this.cpu.execute(); // Execute instructions
  }
}

// Client code
const computer = new ComputerFacade();
computer.start(); // Start the computer

// Result
// Output:
// Freezing CPU...
// Reading 1024 bytes from LBA 0...
// Loading data 'data' at position 0...
// Jumping to position 0...
// Executing instructions...
