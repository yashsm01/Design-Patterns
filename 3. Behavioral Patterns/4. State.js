// State: Allows an object to alter its behavior when its internal state changes.
// use case:
// - When an object's behavior depends on its state and it must change its behavior
//   at runtime depending on that state.
// - The State pattern is useful when an object's behavior depends on its state and
//   it must change its behavior at runtime depending on that state.
// - This pattern is used to:
//    - Encapsulate state-specific behavior into separate classes.
//    - Define a common interface for changing state-specific behavior.
//    - Implement state-specific behavior in different classes.
//    - Store state-specific behavior in a single object.
//    - Allow an object to alter its behavior when its internal state changes.
//    - Implement the Open/Closed principle.
//    - Implement the Single Responsibility principle.
//    - Implement the Dependency Inversion principle.

// State interface
class State {
  handle(context) {
    throw new Error("This method must be overridden!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete States
class ConcreteStateA extends State {
  handle(context) {
    console.log("State A handling request."); // Handle request in State A
    context.setState(new ConcreteStateB()); // Transition to State B
  }
}

class ConcreteStateB extends State {
  handle(context) {
    console.log("State B handling request."); // Handle request in State B
    context.setState(new ConcreteStateA()); // Transition to State A
  }
}

// Context
class Context {
  constructor(state) {
    this.setState(state); // Initialize with a state
  }

  setState(state) {
    console.log(`State changed to ${state.constructor.name}`); // Log state change
    this.state = state; // Set the current state
  }

  request() {
    this.state.handle(this); // Delegate the request to the current state
  }
}

// Usage
const context = new Context(new ConcreteStateA());
context.request(); // State A handling request. State changed to ConcreteStateB
context.request(); // State B handling request. State changed to ConcreteStateA

// Result
// Output:
// State changed to ConcreteStateA
// State A handling request.
// State changed to ConcreteStateB
// State B handling request.
// State changed to ConcreteStateA
