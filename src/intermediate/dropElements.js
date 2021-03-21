function dropElements(arr, func) {
  let trueIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element)) {
      trueIndex = i;
      break;
    }
  }

  if (trueIndex === -1) return [];
  else return arr.slice(trueIndex);
}

console.log(dropElements([1, 2, 3], (n) => n < 3));

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3)); // [3, 4]
console.log(dropElements([0, 1, 0, 1], (n) => n === 1)); // [1, 0, 1]
console.log(dropElements([1, 2, 3], (n) => n > 0)); // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], (n) => n > 5)); // []
console.log(dropElements([1, 2, 3, 7, 4], (n) => n > 3)); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], (n) => n > 2)); // [3, 9, 2]

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
