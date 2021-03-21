function smallestCommons(arr) {
  const small = Math.min(...arr);
  const big = Math.max(...arr);

  let scm = big;
  while (true) {
    let isScm = true;
    for (let i = small; i <= big; i++) {
      if (scm % i !== 0) {
        isScm = false;
        break;
      }
    }

    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820

// ##########################
// ----- INSTRUCTIONS -----
// ##########################

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
