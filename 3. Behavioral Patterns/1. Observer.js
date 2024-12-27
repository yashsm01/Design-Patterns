// Observer: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.
// use case:
// - When you want to define a dependency between objects so that when one object changes state, all its dependents are notified.
// - The Observer pattern is useful when you want to define a dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
// - This pattern is used to:
//    - Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
//    - Encapsulate the core (or common or engine) components in a Subject abstraction, and the variable (or optional or user interface) components in an Observer hierarchy.
//    - Allow multiple observers to listen to a single subject.
//    - Allow the subject to notify all observers when a change occurs.
//    - Implement a publish/subscribe model.
//    - Implement MVC architecture.
//    - Implement event handling systems.
//    - Implement distributed event handling systems.
//    - Implement asynchronous message passing systems.

class Subject {
  constructor() {
    this.observers = []; // Initialize an empty array to store observers
  }

  addObserver(observer) {
    this.observers.push(observer); // Add an observer to the list
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer); // Remove an observer from the list
  }

  notifyObservers(message) {
    this.observers.forEach((observer) => observer.update(message)); // Notify all observers with a message
  }
}

class Observer {
  constructor(name) {
    this.name = name; // Store the name of the observer
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`); // Log the received message
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1); // Add observer1 to the subject
subject.addObserver(observer2); // Add observer2 to the subject

subject.notifyObservers("Hello Observers!"); // Notify all observers

subject.removeObserver(observer1); // Remove observer1 from the subject

subject.notifyObservers("Observer 1 should not receive this"); // Notify remaining observers

// Result
// Output:
// Observer 1 received message: Hello Observers!
// Observer 2 received message: Hello Observers!
// Observer 2 received message: Observer 1 should not receive this
