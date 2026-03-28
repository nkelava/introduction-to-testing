import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should throw an error if the first parameter is a string that cannot be parsed into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should throw an error if the second parameter is a string that cannot be parsed into a number', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(6, 2)).toBe(3);
  });

  it('should return null if second parameter is 0', () => {
    expect(divide(3, 0)).toBe(null);
  });
});
