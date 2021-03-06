describe('PrimeFactors', () => {
  const PrimeFactors = require('../src/PrimeFactors');

  it('should calculate prime factors of an integer', () => {
    expect(PrimeFactors.of(1)).toEqual([]);
    expect(PrimeFactors.of(2)).toEqual([2]);
    expect(PrimeFactors.of(3)).toEqual([3]);
    expect(PrimeFactors.of(4)).toEqual([2, 2]);
    expect(PrimeFactors.of(8)).toEqual([2, 2, 2]);
    expect(PrimeFactors.of(9)).toEqual([3, 3]);
    expect(PrimeFactors.of(2 * 2 * 3 * 7 * 13)).toEqual([2, 2, 3, 7, 13]);
  });

});
