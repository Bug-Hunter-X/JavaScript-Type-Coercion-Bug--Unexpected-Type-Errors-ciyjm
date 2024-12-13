function foo(a, b) {
  if (a === null || b === null) {
    return null; // Correct handling of null values
  }
  return a + b; // Bug: potential type error if a or b is not a number
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 5)); // null
console.log(foo('hello', 5)); // Uncaught TypeError: Cannot convert object to primitive value