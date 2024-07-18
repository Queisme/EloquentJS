console.log('con' + 'cat' + 'e' + 'nate'); //concatenate
console.log(`half of 100 is ${100 / 2}`); //half of 100 is 50
console.log(typeof 4.5); //number
console.log(typeof 'x'); //string
console.log(-(10 - 2)); //-8
console.log(3 > 2); //true
console.log(3 < 2); //false
console.log('Aardvark' < 'Zoroaster'); //true
console.log('Garnet' != 'Ruby'); //true
console.log('Pearl' == 'Amethyst'); //false
console.log(NaN == NaN); //false
// && - logical and - result is true if only both values given to it are true
console.log(true && false); //false
console.log(true && true); //true
console.log(false && false); //false
// || logical or - result is true if either of the values given to it are true.
console.log(false || true); //true
console.log(false || false); //false
console.log(true || true); //true
// Not is ! - !true = false and !false = true
// ? : - ternary operator uses the value to the left of the question mark to decide which of the two other values to pick.
console.log(true ? 1 : 0); //1
console.log(false ? 1 : 0); //0

console.log(8 * null); //0
console.log('5' - 1); //4
console.log('5' + 1); //51
console.log('five' * 2); //NaN
console.log(false == 0); //true
console.log(null == undefined); //true
console.log(null == 0); //false
// if you want to test whether a value has a real value instead of null or undefined, you can compare it to null with the == or != operator.
console.log(undefined ?? 100); //100
console.log(1 ?? 100); //1
console.log(0 ?? 100); //0
console.log(null ?? 100); //100
//The ?? operator returns the value on the right only if the value on the left is null or undefined, not if it is some other value that can be converted to false.
console.log(1 || 'poo'); //1
console.log(0 || 'poo'); //poo
//In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.
