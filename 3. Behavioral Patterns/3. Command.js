// Command: Encapsulates a request as an object, thereby allowing
//          for parameterization of clients with different requests.
// use case:
// - When you want to parameterize objects with requests.
// - The Command pattern is useful when you want to parameterize
//   objects with requests.
// - This pattern is used to:
//    - Encapsulate a request as an object.
//    - Decouple the sender from the receiver.
//    - Implement callback functionality.
//    - Implement undo functionality.
//    - Implement queueing and logging functionality.
//    - Implement transactional behavior.

// Command Interface
class Command {
  execute() {
    throw new Error("This method should be overridden!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete Command
class LightOnCommand extends Command {
  constructor(light) {
    //super use to call the parent class constructor
    super();
    this.light = light; // Store the light instance
  }

  execute() {
    this.light.on(); // Execute the on method of the light
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light; // Store the light instance
  }

  execute() {
    this.light.off(); // Execute the off method of the light
  }
}

// Receiver
class Light {
  on() {
    console.log("The light is on"); // Simulate turning the light on
  }

  off() {
    console.log("The light is off"); // Simulate turning the light off
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command; // Store the command
  }

  pressButton() {
    this.command.execute(); // Execute the stored command
  }
}

// Client
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // The light is on

remote.setCommand(lightOff);
remote.pressButton(); // The light is off

// Result
// Output:
// The light is on
// The light is off
