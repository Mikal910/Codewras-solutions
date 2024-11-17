function calculateProbability(n) {
  // If n is greater than or equal to 365, the probability is 1 (certainty)
  if (n >= 365) return '1.00';

  // Start with 100% chance (1) and reduce it for each additional person
  let probabilityNoShared = 1;
  for (let i = 1; i < n; i++) {
    probabilityNoShared *= (365 - i) / 365;
  }

  // Calculate the probability that at least two people share a birthday
  let probabilityShared = 1 - probabilityNoShared;

  // Return the result formatted as a string with two decimal places
  return probabilityShared.toFixed(2);
}
// The loop multiplies probabilities step-by-step for each new person added to the room.
// The function returns the final answer formatted as a string to two decimal places (e.g., '0.51' for 51%).
// If there are 365 or more people, it directly returns '1.00' because it's guaranteed that at least two people will share a birthday.