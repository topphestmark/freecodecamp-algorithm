var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return "";
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();

Object.keys(bob).length; // 6.

bob instanceof Person; // true.

bob.firstName; // undefined.

bob.lastName; // undefined.

bob.getFirstName(); //   "Bob".

bob.getLastName(); //   "Ross".

bob.getFullName(); //   "Bob" Ross.

bob.getFullName(); //   "Haskell Ross" after bob.setFirstName("Haskell").

bob.getFullName(); //   "Haskell Curry" after bob.setLastName("Curry").

bob.getFullName(); //   "Haskell Curry" after bob.setFullName("Haskell Curry").

bob.getFirstName(); //   "Haskell" after bob.setFullName("Haskell Curry").

bob.getLastName(); //   "Curry" after bob.setFullName("Haskell Curry").

// ### Make a Person ###
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
