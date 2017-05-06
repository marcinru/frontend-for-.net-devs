describe('PrimeFactors', () => {
  const PrimeFactors = require('../src/PrimeFactors');

  it('should calculate prime factors of an integer', () => {
    expect(PrimeFactors.of(1)).toEqual([]);
  })
})
