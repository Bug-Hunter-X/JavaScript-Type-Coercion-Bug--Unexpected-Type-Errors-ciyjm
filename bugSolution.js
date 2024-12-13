function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid Input: Operands must be numbers"; // Handle non-numeric input
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 5)); // null
console.log(foo('hello', 5)); // Invalid Input: Operands must be numbers
console.log(foo(1, "hello")); // Invalid Input: Operands must be numbers