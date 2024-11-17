function repeats(arr) {     // This line defines a function named repeats
    let sum = 0;  //We create a variable called sum and set it to 0 to start
    for (let num of arr) {  // use a loop jawn to go through each number
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {  //checks if the current number appears only once in the array
            sum += num; //the number is unique then add it up
        }
    }
    return sum;
}
