// This function will use the rest arguments to seek and filter out the value that arguments contain inside the array.

function destroyer(arr) {
  const argsArray = [...arguments].slice(1);

  let filteredArr = arr.filter((el) => !argsArray.includes(el));
  // Loop method
  // const filteredArr = [];
  // for (let el of arr) {
  //   if (!argsArray.includes(el)) {
  //     filteredArr.push(el);
  //   }
  // }

  return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // --> [1, 1]
