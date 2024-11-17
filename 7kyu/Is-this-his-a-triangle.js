function isTriangle(a,b,c)
{return a + b > c && a + c > b && b + c > a;
   return false;
}
//a + b > c: The sum of sides a and b must be greater than side c.
//a + c > b: The sum of sides a and c must be greater than side b.
//b + c > a: The sum of sides b and c must be greater than side a.
//else return false
//The && operator returns true if all of its operands are true; otherwise, it returns false.
console.log(isTriangle(3, 4, 5))
console.log(isTriangle(3, 7, 5))
console.log(isTriangle(1, 4, 5))
console.log(isTriangle(1, 2, 3))