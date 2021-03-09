function steamrollArray(arr) {
  return arr;
}

steamrollArray([[["a"]], [["b"]]]); // ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]

// --- NOTE ---
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// --- INSTRUCTION ---
// Flatten a nested array. You must account for varying levels of nesting.
