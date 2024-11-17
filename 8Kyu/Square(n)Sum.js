function squareSum(numbers){
let sum=0
for (let i=0; i<numbers.length; i++){
  sum+= numbers[i]*numbers[i];//square the numbers and add sum
}
  return sum;
}