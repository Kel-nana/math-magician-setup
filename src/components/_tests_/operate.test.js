import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('should return the correct result for addition', () => {
    const numberOne = '5';
    const numberTwo = '3';
    const operation = '+';
    const expected = Big(numberOne).plus(Big(numberTwo)).toString();
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should return the correct result for subtraction', () => {
    const numberOne = '5';
    const numberTwo = '3';
    const operation = '-';
    const expected = Big(numberOne).minus(Big(numberTwo)).toString();
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should return the correct result for multiplication', () => {
    const numberOne = '5';
    const numberTwo = '3';
    const operation = 'x';
    const expected = Big(numberOne).times(Big(numberTwo)).toString();
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should return the correct result for division', () => {
    const numberOne = '6';
    const numberTwo = '2';
    const operation = '÷';
    const expected = Big(numberOne).div(Big(numberTwo)).toString();
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should handle division by zero correctly', () => {
    const numberOne = '5';
    const numberTwo = '0';
    const operation = '÷';
    const expected = "Can't divide by 0.";
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should return the correct result for modulo', () => {
    const numberOne = '7';
    const numberTwo = '3';
    const operation = '%';
    const expected = Big(numberOne).mod(Big(numberTwo)).toString();
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should handle modulo with divisor as zero correctly', () => {
    const numberOne = '5';
    const numberTwo = '0';
    const operation = '%';
    const expected = "Can't find modulo as can't divide by 0.";
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual(expected);
  });

  it('should throw an error for unknown operation', () => {
    const numberOne = '5';
    const numberTwo = '3';
    const operation = '@'; // Unknown operation
    expect(() => operate(numberOne, numberTwo, operation)).toThrowError(
      "Unknown operation '@'",
    );
  });

  // Add more test cases to cover other scenarios in the `operate` function
});
