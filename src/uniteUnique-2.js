// Time complexity O(n^2)

function uniteUnique(arr) {
  const arrOfArrs = [...arguments];

  const output = [];
  for (let arr of arrOfArrs) {
    for (let num of arr) {
      if (!output.includes(num)) {
        output.push(num);
      }
    }
  }

  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// --> [1, 3, 2, 5, 4]

// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// --> [1, 2, 3, 5]

// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// --> [1, 2, 3, 5, 4, 6, 7, 8]
