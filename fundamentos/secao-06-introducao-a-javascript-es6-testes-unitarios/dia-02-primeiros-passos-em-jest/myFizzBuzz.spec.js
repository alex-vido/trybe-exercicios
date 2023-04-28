const myFizzBuzz = require('./myFizzBuzz');

describe('The function myFizzBuzz', () => {
  it('myFizzBuzz(15) returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('myFizzBuzz(3) returns "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('myFizzBuzz(5) returns "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('myFizzBuzz(7) returns 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
});