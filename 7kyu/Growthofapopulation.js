function nbYear(p0, percent, aug, p) {
    let years = 0;
    // Loop until the population reaches or exceeds the target population p
    while (p0 < p) {
        // Increase the population by the given percent and the new inhabitants (aug)
        p0 += Math.floor(p0 * (percent / 100)) + aug;
        years++;
    }
    return years;
}
// Example usage:
console.log(nbYear(1000, 2, 50, 1200)); // Output: 3
console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10