class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += number;
      return this;
  }

  subtract(number) {
      this.result -= number;
      return this;
  }

  multiply(number) {
      this.result *= number;
      return this;
  }

  divide(number) {
      if (number === 0) {
          throw new Error("Cannot divide by zero");
      }
      this.result /= number;
      return this;
  }

  clear() {
      this.result = 0;
      return this;
  }

  equals() {
      return this.result;
  }
}

module.exports = Calculator;