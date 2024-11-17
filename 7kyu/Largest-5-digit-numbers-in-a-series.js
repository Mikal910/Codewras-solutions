//P-a string of only digits
//Return the greatest 5-digit integer found in the input string.
//example input 23456789 output 56789
//pseudocode--start with a varbiable max set to 0
//Loop through the string from index 0 to length of 5 digits.
//extract the string of 5 frtom the index and convert it
//then compare with ms max sequence, then update ms,then rturn ms
function solution(digits) {
    let max = 0;
    // repeat through the string using 5 digits
    for (let i = 0; i <= digits.length - 5; i++) {
        let cS = parseInt(digits.slice(i, i + 5));
        if (cS > max) {
            max = cS;
        }
    }
    return max;
}