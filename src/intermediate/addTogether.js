function addTogether() {
  const [arg1, arg2] = [...arguments];

  if (typeof arg1 !== "number") return undefined;

  if (arg2 === undefined) {
    return function (num) {
      if (typeof num !== "number") return undefined;
      return arg1 + num;
    };
  }

  if (typeof arg2 !== "number") {
    return undefined;
  }

  return arg1 + arg2;
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12
console.log(addTogether("http://bit.ly/IqT6zt")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined

// ### Arguments Optional ###
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.
