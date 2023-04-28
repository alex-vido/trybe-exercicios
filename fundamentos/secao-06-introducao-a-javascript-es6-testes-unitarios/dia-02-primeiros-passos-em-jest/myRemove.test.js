const myRemove = require('./myRemove');

describe('The function myRemove', () => {
  it('myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('myRemove([1, 2, 3, 4], 3) not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3,4]);
  });
  it('myRemove([1, 2, 3, 4], 5) not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3,4]);
  });
});