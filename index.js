//Here is a simple implementation of a calculator class in Node.js:
/*
This class has methods for addition, subtraction, multiplication, and division. Each method returns the Calculator object itself, allowing for method chaining (e.g., `calculator.add(5).subtract(2).equals()`). The `equals` method returns the current result. The `clear` method resets the result to zero.

You can use this class in another file like so:


Please note that this is a very basic implementation and does not handle many edge cases. For example, it does not check if the input is a number before performing operations.
*/

const Calculator = require('./Calculator');

let calculator = new Calculator();
console.log(calculator.add(5).subtract(2).multiply(3).divide(2).equals()); // Outputs: 4.5