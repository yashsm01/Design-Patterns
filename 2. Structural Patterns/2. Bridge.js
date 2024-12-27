// Bridge: Separates abstraction from implementation,
//         allowing them to vary independently.
// use case:
// - When you want to share an implementation among multiple objects, or when you want to access an implementation from multiple objects.
// - The Bridge pattern is useful when you want to avoid a permanent binding between an abstraction and its implementation.
// - It allows you to separate the abstraction from the implementation, so that the two can be modified independently.

// Abstraction
class RemoteControl {
  constructor(device) {
    this.device = device; // Store the device instance
  }

  turnOn() {
    this.device.turnOn(); // Delegate the turnOn action to the device
  }

  turnOff() {
    this.device.turnOff(); // Delegate the turnOff action to the device
  }
}

// Refined Abstraction
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.setVolume(0); // Delegate the mute action to the device
  }
}

// Implementation
class Device {
  turnOn() {
    throw new Error("This method must be overwritten!"); // Abstract method to be overridden by subclasses
  }

  turnOff() {
    throw new Error("This method must be overwritten!"); // Abstract method to be overridden by subclasses
  }

  setVolume(volume) {
    throw new Error("This method must be overwritten!"); // Abstract method to be overridden by subclasses
  }
}

// Concrete Implementation
class TV extends Device {
  turnOn() {
    console.log("TV is turned on"); // Implementation of the turnOn method for TV
  }

  turnOff() {
    console.log("TV is turned off"); // Implementation of the turnOff method for TV
  }

  setVolume(volume) {
    console.log(`TV volume set to ${volume}`); // Implementation of the setVolume method for TV
  }
}

// Concrete Implementation
class Radio extends Device {
  turnOn() {
    console.log("Radio is turned on"); // Implementation of the turnOn method for Radio
  }

  turnOff() {
    console.log("Radio is turned off"); // Implementation of the turnOff method for Radio
  }

  setVolume(volume) {
    console.log(`Radio volume set to ${volume}`); // Implementation of the setVolume method for Radio
  }
}

// Usage
const tv = new TV();
const radio = new Radio();

const remoteControl = new RemoteControl(tv);
remoteControl.turnOn(); // TV is turned on
remoteControl.turnOff(); // TV is turned off

const advancedRemoteControl = new AdvancedRemoteControl(radio);
advancedRemoteControl.turnOn(); // Radio is turned on
advancedRemoteControl.mute(); // Radio volume set to 0
advancedRemoteControl.turnOff(); // Radio is turned off

// Result
// Output:
// TV is turned on
// TV is turned off
// Radio is turned on
// Radio volume set to 0
// Radio is turned off
