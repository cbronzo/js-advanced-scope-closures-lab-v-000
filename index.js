let driverId = 0 

function produceDrivingRange(range) {
  return function (street1, street2) {
    const distance = parseInt(street2) - parseInt(street1)
    if (distance > range){
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(percentTipSelected){
  return function(totalBill) {
    return totalBill * percentTipSelected
  }
}


function createDriver() {
  return class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId;
    }
  }
} 