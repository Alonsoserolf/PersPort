//this is procedural JS code
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime*rate);
  }

//this is the object oriented way this would be done

let employee ={
  baseSalary:30_000,
  overtime:10,
  rate:20,
  getWage: () => {
    return this.baseSalary + (this.overtime * this.rate);
  }
};

employee.getWage();