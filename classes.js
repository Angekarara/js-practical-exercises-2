/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
  constructor(color = "blue", wheels = 4, horn = "beep beep") {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
    console.log(this.wheels);
  }
}
class Bicycle extends Vehicle {
  constructor(color = "blue", wheels = 2, horn = "honk honk") {
    super(color, wheels, horn);
  }
  honkHorn() {
    super.honkHorn();
    console.log(this.horn);
    console.log(this.wheels);
  }
}
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
