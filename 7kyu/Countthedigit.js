function nbDig(n, d) {
    let count = 0;
    let digitStr = d.toString(); // Convert d to a string for easier comparison
    // Loop through all numbers from 0 to n
    for (let k = 0; k <= n; k++) {
        let squared = (k * k).toString(); // Square the number and convert it to a string
        // Count occurrences of the digit d in the squared number
        for (let char of squared) {
            if (char === digitStr) {
                count++;
            }
        }
    }
    return count;
}
// Example usage:
console.log(nbDig(10, 1)); // Output: 4
console.log(nbDig(25, 1)); // Output: 11