function uniteUnique(arr) {
  const arrOfArrs = [...arguments];
  const arrOfAllElms = arrOfArrs.reduce((acc, crntArr) => {
    return [...acc, ...crntArr];
  }, []);

  const newSet = new Set(arrOfAllElms);

  return [...newSet];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// --> [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// --> [1, 2, 3, 5]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// --> [1, 2, 3, 5, 4, 6, 7, 8]
