//Parameters-get an integer greater than 1
//Returns-an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest
//(divisors(15), [3, 5]),assert.deepEqual(divisors(12), [2, 3, 4, 6]));
//pseucode
//for(let i=2;)
function divisors(n) { 
  let dL =[]
  for(let i=2; i < n; i++){
    if(n%i===0){
      dL.push(i)
    }
  }
  if(dL.length===0){
    return `${n} is prime`;
  }
  return dL;
}