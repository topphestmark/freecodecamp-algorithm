// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// With inbuild javascript min/max methods
// function sumAll(arr) {
//   let sum = 0;
//   for (let num = Math.min(...arr); num <= Math.max(...arr); num++) {
//     sum += num;
//   }
//   return sum;
// }

const sumAll = (arr) => {
  const min = arr[0] < arr[1] ? arr[0] : arr[1];
  const max = arr[0] > arr[1] ? arr[0] : arr[1];

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll([1, 4]));
