// Convert the string to lowercase so that the character count is case-insensitive.
// Use an object to count the occurrences of each character.
// Loop through the string and update the count for each character.
// Loop through the character count object and check how many characters have a count greater than 1.
// Return the number of characters that appear more than once.

function duplicateCount(text) {
  // Convert the text to lowercase to make the comparison case-insensitive
  text = text.toLowerCase();
  // Create an object to store the counts of each character
  let charCount = {};
  // Count the occurrences of each character
  for (let char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Count how many characters appear more than once
  let count = 0;
  for (let key in charCount) {
    if (charCount[key] > 1) {
      count++;
    }
  }
  return count;
}
// Example usage:
console.log(duplicateCount("abcde")); // Output: 0
console.log(duplicateCount("aabbcde")); // Output: 2
console.log(duplicateCount("aabBcde")); // Output: 2
console.log(duplicateCount("indivisibility")); // Output: 1
console.log(duplicateCount("Indivisibilities")); // Output: 2
console.log(duplicateCount("aA11")); // Output: 2
console.log(duplicateCount("ABBA")); // Output: 2