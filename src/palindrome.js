const palindrome = (str) => {
  const alphaNumeric = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-zA-Z0-9]/.test(char))
    .join("");

  for (let i = 0; i < Math.floor(alphaNumeric.length / 2); i++) {
    if (alphaNumeric[i] !== alphaNumeric[alphaNumeric.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// 1, Make everything lowercase
// 2, strip all non-alphanumeric characters
// 3, check for palindrome

// palindrome("eye"); // boolean

// palindrome("eye"); // true

// palindrome("_eye"); // true

palindrome("race car"); // true

// palindrome("not a palindrome"); // false

console.log(palindrome("A man, a plan, a canal. Panama")); // true

// palindrome("never odd or even"); // true

// palindrome("nope"); // false

// palindrome("almostomla"); // false

// palindrome("My age is 0, 0 si ega ym."); // true

// palindrome("1 eye for of 1 eye."); // false

console.log(palindrome("0_0 (: /- :) 0-0")); // true

palindrome("five|_/|four"); // false
