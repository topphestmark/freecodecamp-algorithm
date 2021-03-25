const telephoneCheck = (str) => {
  const numbers = str.match(/\d/g);

  if (numbers.length === 11) {
    if (str[0] !== "1") return false;

    str = str.substring(1);
    if (str[0] === " ") {
      str = str.substring(1);
    }
  } else if (numbers.length !== 10) return false;

  if (str[0] === "(") {
    if (!/\(\d\d\d\)/g.test(str.substring(0, 5))) return false;

    str = str.substring(5);

    if (str[0] === " ") {
      str = str.substring(1);
    }
  } else {
    if (!/\d\d\d/g.test(str.substring(0, 3))) return false;

    str = str.substring(3);

    if (str[0] === "-" || str[0] === " ") {
      str = str.substring(1);
    }
  }

  if (!/\d\d\d/g.test(str.substring(0, 3))) return false;

  str = str.substring(3);

  if (str[0] === "-" || str[0] === " ") {
    str = str.substring(1);
  }

  if (!/\d\d\d\d/g.test(str.substring(0, 4))) return false;

  str = str.substring(4);

  if (str.length > 0) return false;

  return true;
};

console.log(telephoneCheck("555-555-5555"));
//  boolean.

console.log(telephoneCheck("1 555-555-5555"));
// true.

console.log(telephoneCheck("1 (555) 555-5555"));
// true.

console.log(telephoneCheck("5555555555"));
// true.

console.log(telephoneCheck("555-555-5555"));
// true.

console.log(telephoneCheck("(555)555-5555"));
// true.

console.log(telephoneCheck("1(555)555-5555"));
// true.

console.log(telephoneCheck("555-5555"));
// false.

console.log(telephoneCheck("5555555"));
// false.

console.log(telephoneCheck("1 555)555-5555"));
// false.

console.log(telephoneCheck("1 555 555 5555"));
// true.

console.log(telephoneCheck("1 456 789 4444"));
// true.

console.log(telephoneCheck("123**&!!asdf#"));
// false.

console.log(telephoneCheck("55555555"));
// false.

console.log(telephoneCheck("(6054756961)"));
// false.

console.log(telephoneCheck("2 (757) 622-7382"));
// false.

console.log(telephoneCheck("0 (757) 622-7382"));
// false.

console.log(telephoneCheck("-1 (757) 622-7382"));
// false.

console.log(telephoneCheck("2 757 622-7382"));
// false.

console.log(telephoneCheck("10 (757) 622-7382"));
// false.

console.log(telephoneCheck("27576227382"));
// false.

console.log(telephoneCheck("(275)76227382"));
// false.

console.log(telephoneCheck("2(757)6227382"));
// false.

console.log(telephoneCheck("2(757)622-7382"));
// false.

console.log(telephoneCheck("555)-555-5555"));
// false.

console.log(telephoneCheck("(555-555-5555"));
// false.

console.log(telephoneCheck("(555)5(55?)-5555"));
// false.

////
// ### Return true if the passed string looks like a valid US phone number. ###

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
