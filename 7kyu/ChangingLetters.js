// Break the string into individual characters.
// Go through each character one by one.
// If the character is a vowel (a, e, i, o, u), change it to uppercase.
// Leave all other characters the same.
// Put the characters back together to form the new string.

function swap(string) {
  return string.split('').map(char => {
    if ('aeiou'.includes(char.toLowerCase())) {
      return char.toUpperCase();
    }
    return char;
  }).join('');
}

// Example usage:
console.log(swap("Hello World!")); // Output: "HEllO WOrld!"