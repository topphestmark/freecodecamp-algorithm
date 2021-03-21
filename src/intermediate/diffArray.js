// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Another method with Set()
function diffArray(arr1, arr2) {
  const union = new Set([...arr1, ...arr2]);

  const symmDiff = [];
  for (const currentElement of union) {
    if (arr1.includes[currentElement] && !arr2.includes(currentElement)) {
      symmDiff.push(currentElement);
    } else if (
      arr2.includes(currentElement) &&
      !arr1.includes(currentElement)
    ) {
      symmDiff.push(currentElement);
    }
  }
  return symmDiff;
}

// ES6 method
// function diffArray(arr1, arr2) {
//   const union = [];

//   for (const el of arr1) {
//     if (!union.includes(el)) {
//       union.push(el);
//     }
//   }

//   for (const el of arr2) {
//     if (!union.includes(el)) {
//       union.push(el);
//     }
//   }

//   const symmDiff = [];
//   for (const currentElement of union) {
//     if (arr1.includes[currentElement] && !arr2.includes(currentElement)) {
//       symmDiff.push(currentElement);
//     } else if (
//       arr2.includes(currentElement) &&
//       !arr1.includes(currentElement)
//     ) {
//       symmDiff.push(currentElement);
//     }
//   }
//   return symmDiff;
// }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
