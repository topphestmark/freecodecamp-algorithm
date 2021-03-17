const addTogether = (arg1, arg2) =>
  typeof arg1 !== "number"
    ? undefined
    : arg2 === undefined
    ? (num) => (typeof num !== "number" ? undefined : arg1 + num)
    : typeof arg2 !== "number"
    ? undefined
    : arg1 + arg2;

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12
console.log(addTogether("http://bit.ly/IqT6zt")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined
