function sumPrimes(num) {
  if (num < 2) return 0;

  const primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    let isComposit = false;
    for (let prime of primeNumbers) {
      if (i % prime === 0) {
        isComposit = true;
        break;
      }
    }

    if (!isComposit) {
      primeNumbers.push(i);
    }
  }

  let sum = 0;
  for (let prime of primeNumbers) {
    sum += prime;
  }

  return sum;
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
