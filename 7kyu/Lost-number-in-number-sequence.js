function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) {
    return 0;
  } else {
    const sumArr = arr.reduce((acc, num) => acc + num, 0);
    const sumMixArr = mixArr.reduce((acc, num) => acc + num, 0);
    return sumArr - sumMixArr;
  }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixArr = [3, 2, 4, 6, 7, 8, 1, 9];

console.log(findDeletedNumber(arr, mixArr)); // Output should be 5






//two inputs an input array sequence of ints starting at 1
//mixed array from the first input, but missing one of the ints
//return 0 if nothing was deleted
//otherwise retrun the init that was deleted from the og input array