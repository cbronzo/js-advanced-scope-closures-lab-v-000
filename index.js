let driverId = 0 




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