class PrimeFactors {
  static of(n) {
    let result = [];
    if (n % 2 === 0) {
      result.push(2);
      n /= 2;
    }
    if (n > 1) {
      result.push(n);
    }
    return result;
  }
}

module.exports = PrimeFactors;
