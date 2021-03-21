// ### Wherefore art thou ###

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  // for loops method
  // const arr = [];
  // for (let obj of collection) {
  //   let hasKeyValuePairs = true;
  //   for (let key of keys) {
  //     if (obj[key] !== source[key]) {
  //       hasKeyValuePairs = false;
  //       break;
  //     }
  //   }

  //   if (hasKeyValuePairs) arr.push(obj);
  // }

  // Array filter method
  const arr = collection.filter((obj) => {
    let hasKeyValuePairs = true;
    for (let key of keys) {
      if (obj[key] !== source[key]) {
        hasKeyValuePairs = false;
        break;
      }
    }

    return hasKeyValuePairs;
  });

  return arr;
}

console.log(
  "First: ",
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  "Second: ",
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);
