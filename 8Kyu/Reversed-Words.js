function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Example usage:
console.log(reverseWords("Hello World")); // Output: "World Hello"
console.log(reverseWords("Hi There."));   // Output: "There. Hi"