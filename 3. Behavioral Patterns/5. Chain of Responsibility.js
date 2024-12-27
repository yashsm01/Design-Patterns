// Chain of Responsibility: Passes a request along a chain of handlers,
//       allowing each handler to process the request or pass it along.
// use case:
// - When you want to pass a request to one of several handlers
//   without specifying the handler explicitly.
// - The Chain of Responsibility pattern is useful when you want
//   to pass a request to one of several handlers without specifying
//   the handler explicitly.
// - This pattern is used to:
//    - Allow multiple objects to handle a request without the client
//      needing to specify the handler.
//    - Chain the receiving objects and pass the request
//      along the chain until an object handles it.
//    - Decouple senders and receivers of a request.
//    - Simplify object interconnections.
//    - Implement the Single Responsibility principle.
//    - Implement the Open/Closed principle.
//
// Difficulty: Medium

class Handler {
  setNext(handler) {
    this.nextHandler = handler; // Set the next handler in the chain
    return handler; // Return the next handler to allow chaining
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request); // Pass the request to the next handler
    }
    return null; // If no handler can handle the request, return null
  }
}

class ConcreteHandler1 extends Handler {
  handle(request) {
    if (request === "Request1") {
      return `ConcreteHandler1 handled ${request}`; // Handle Request1
    }
    return super.handle(request); // Pass the request to the next handler
  }
}

class ConcreteHandler2 extends Handler {
  handle(request) {
    if (request === "Request2") {
      return `ConcreteHandler2 handled ${request}`; // Handle Request2
    }
    return super.handle(request); // Pass the request to the next handler
  }
}

class ConcreteHandler3 extends Handler {
  handle(request) {
    if (request === "Request3") {
      return `ConcreteHandler3 handled ${request}`; // Handle Request3
    }
    return super.handle(request); // Pass the request to the next handler
  }
}

// Client code
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3); // Chain the handlers

const requests = ["Request1", "Request2", "Request3", "Request4"];

requests.forEach((request) => {
  const result = handler1.handle(request); // Start the request handling from the first handler
  if (result) {
    console.log(result); // Log the result if the request was handled
  } else {
    console.log(`${request} was not handled`); // Log if the request was not handled
  }
});

// Result
// Output:
// ConcreteHandler1 handled Request1
// ConcreteHandler2 handled Request2
// ConcreteHandler3 handled Request3
// Request4 was not handled
