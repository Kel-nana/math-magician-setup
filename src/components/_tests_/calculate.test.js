import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an updated calculator data object for AC button', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should return an updated calculator data object for numeric buttons', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '7';
    const expected = {
      total: 10,
      next: '57',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should return an updated calculator data object for decimal button', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '.';
    const expected = {
      total: 10,
      next: '5.',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Add more test cases to cover other scenarios in the `calculate` function
});
