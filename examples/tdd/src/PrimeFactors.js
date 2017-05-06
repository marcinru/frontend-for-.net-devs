class PrimeFactors {
  static of(n) {
    let result = [];
    for (let divisor = 2; divisor <= n; divisor++) {
      for (; n % divisor === 0; n /= divisor) {
        result.push(divisor);
      }
    }
    return result;
  }
}

module.exports = PrimeFactors;
