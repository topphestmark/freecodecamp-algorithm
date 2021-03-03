function uniteUnique(arr) {
  const result = arguments[0];

  [...arguments].slice(1).forEach((el) => {
    for (let num of el) {
      if (![...result].includes(num)) {
        result.push(num);
      }
    }
  });

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// --> [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// --> [1, 2, 3, 5]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// --> [1, 2, 3, 5, 4, 6, 7, 8]

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
