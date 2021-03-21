var Person = function (firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return firstAndLast;
  };

  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getLastName());

// Object.keys(bob).length; // 6.

// bob instanceof Person; // true.

// bob.firstName; // undefined.

// bob.lastName; // undefined.

// bob.getFirstName(); //   "Bob".

// bob.getLastName(); //   "Ross".

// bob.getFullName(); //   "Bob" Ross.

// bob.getFullName(); //   "Haskell Ross" after bob.setFirstName("Haskell").

// bob.getFullName(); //   "Haskell Curry" after bob.setLastName("Curry").

// bob.getFullName(); //   "Haskell Curry" after bob.setFullName("Haskell Curry").

// bob.getFirstName(); //   "Haskell" after bob.setFullName("Haskell Curry").

// bob.getLastName(); //   "Curry" after bob.setFullName("Haskell Curry").

// ### Make a Person ###
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
