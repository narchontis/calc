import { expect } from 'chai';
import Calculator from '../Calculator.js';

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add numbers correctly', () => {
        expect(calculator.add(5).equals()).to.equal(5);
    });

    it('should subtract numbers correctly', () => {
        calculator.add(10);
        expect(calculator.subtract(3).equals()).to.equal(7);
    });

    it('should multiply numbers correctly', () => {
        calculator.add(2);
        expect(calculator.multiply(3).equals()).to.equal(6);
    });

    it('should divide numbers correctly', () => {
        calculator.add(10);
        expect(calculator.divide(2).equals()).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(0)).to.throw('Cannot divide by zero');
    });

    it('should clear the result', () => {
        calculator.add(10);
        calculator.clear();
        expect(calculator.equals()).to.equal(0);
    });

    it('should perform modulo operation correctly', () => {
        calculator.add(10);
        expect(calculator.modulo(3).equals()).to.equal(1);
    });
});