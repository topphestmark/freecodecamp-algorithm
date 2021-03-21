function sumPrimes(num) {
  const primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    let isComposit = false;
    for (let prime of primeNumbers) {
      if (i % prime === 0) {
        isComposit = true;
        break;
      }
    }

    if (!isComposit) primeNumbers.push(i);
  }

  return primeNumbers.reduce((acc, prime) => acc + prime, 0);
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
