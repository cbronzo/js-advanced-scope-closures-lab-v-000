








function createDriver() {
  return class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId;
    }
  }
} 