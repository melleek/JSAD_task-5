const calculator = {
  num1: 0,
  num2: 0,

  setNumbers(a, b) {
    this.num1 = a;
    this.num2 = b;
  },

  add() {
    return this.num1 + this.num2;
  },

  subtract() {
    return this.num1 - this.num2;
  },

  multiply() {
    return this.num1 * this.num2;
  },

  divide() {
    if (isFinite(this.num1 / this.num2)) {
      return "Error";
    } else {
      return this.num1 / this.num2;
    }
  },
};

calculator.setNumbers(10, 5);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
