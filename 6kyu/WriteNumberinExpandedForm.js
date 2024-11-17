function expandedForm(num) {
  // Base case: If the number is less than 10, return it as a string (single digit, no expansion needed)
  if (num < 10) return `${num}`;

  // Calculate the remainder when the number is divided by 10 raised to the power of (number of digits - 1)
  // This effectively isolates the most significant digit.
  let over = num % (Math.pow(10, (num.toString().length - 1)));

  // If 'over' is zero, that means the number itself is already a clean power of ten or composed of significant digits only
  // (e.g., 5000). Return the number as a string.
  if (!over) return `${num}`;

  // Recursive case: Subtract the remainder ('over') from the original number to isolate the highest place value digit,
  // and then call the function recursively on the remainder to continue breaking down the number.
  return `${num - over} + ${expandedForm(over)}`;
}