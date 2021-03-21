const flattenArr = (array) => {
  const result = [];

  for (let el of array) {
    if (Array.isArray(el)) result.push(...el);
    else result.push(el);
  }

  return result;
};

const steamrollArray = (arr) => {
  let result = arr;

  while (true) {
    let isFlat = true;
    for (let el of result) {
      if (Array.isArray(el)) {
        isFlat = false;
        result = flattenArr(result);
        break;
      }
    }

    if (isFlat) {
      return result;
    }
  }
};

console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]

// --- NOTE ---
// Your solution should not use the
// Array.prototype.flat() or Array.prototype.flatMap() methods.

// --- INSTRUCTION ---
// Flatten a nested array. You must account for varying levels of nesting.
