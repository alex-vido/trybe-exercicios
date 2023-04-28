const { encode, decode } = require('./encodeDecode');

describe('Function encode', () => {
  it('encode is a function.', () => {
    expect(typeof encode).toBe('function');
  })
  it('encode(aeiou) returns "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('encode(bcdf) returns bcdf', () => {
    expect(encode('bcdf')).toBe('bcdf');
  })
  it('encode("aeiou7").length) returns 6', () => {
    expect(encode('aeiou7').length).toBe(6);
  })
});

describe('Function decode', () => {
  it('decode is a function.', () => {
    expect(typeof decode).toBe('function');
  })
  it('encode("12345") returns "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('decode(6789) returns "6789"', () => {
    expect(encode('6789')).toBe('6789');
  })
  it('decode("123456ae").length) returns 8', () => {
    expect(encode('123456ae').length).toBe(8);
  })
});

