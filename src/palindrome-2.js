const palindrome = (str) => {
  const stringLength = str.length;

  let i = 0;
  let j = stringLength - 1;

  while (true) {
    while (i < stringLength && !/[a-zA-Z0-9]/.test(str[i])) i++;

    while (j > 0 && !/[a-zA-Z0-9]/.test(str[j])) j--;

    if (i >= j) return true;
    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;

    i++;
    j--;
  }
};

console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("0_0 (: /- :) 0-0")); // true
