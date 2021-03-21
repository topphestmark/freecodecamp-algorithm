const addTogether = (arg1, arg2) => {
  if (typeof arg1 !== "number") return undefined;

  if (arg2 === undefined)
    return (num) => (typeof num !== "number" ? undefined : arg1 + num);

  if (typeof arg2 !== "number") return undefined;

  return arg1 + arg2;
};

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12
console.log(addTogether("http://bit.ly/IqT6zt")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined
