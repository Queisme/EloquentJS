let caught = 5 * 5;
let ten = 10;
console.log(ten * ten); //100
let mood = 'light';
console.log(mood); //light
mood = 'dark';
console.log(mood); //dark
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); //105
let one = 1,
  two = 2;
console.log(one + two); //3
var name = 'Ayda';
const greeting = 'Hello ';
console.log(greeting + name); //Hello Ayda

//prompt('Enter passcode:');

console.log(Math.max(2, 4, 7, 10, 34, 78, 92, 100)); //100
console.log(Math.min(2, 4, 7, 10, 34, 78, 92, 100)); //2

/*
let theNumber = +prompt('Pick a number');
// + because the result of prompt is a string value, and we want a number
console.log(`Your number is the square root of ${theNumber * theNumber}`);
*/

/*
let theNumber = +prompt('Pick a number');
// Number.isNaN is a standard JS function that returns true only if the argument it is given is NaN
if (!Number.isNaN(theNumber)) {
  console.log(`Your number is the square root of ${theNumber * theNumber}.`);
} else {
  console.log(`That's not a number, dumbass.`);
}
*/

if (1 + 1 == 2) {
  console.log(`It's true`); //It's true
}

/*
let theNumber = +prompt('Pick a number:');
if (!Number.isNaN(theNumber)) {
  console.log(`Your number is the square root of ${theNumber * theNumber}.`);
} else {
  console.log('Not a number, dumbass');
}
*/

/*
let num = +prompt('Pick a number:');
if (num < 10) {
  console.log('Pretty small');
} else if (num < 100) {
  console.log('Medium');
} else {
  console.log('Calm down before you hurt yourself');
}
*/

/*
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
*/

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result *= 2;
//   counter += 1;
// }
// console.log(result);

// let yourName;
// do {
//   yourName = prompt('Who are you?');
// } while (!yourName);
// console.log(`Hello ${yourName}`);

//Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name.

if (false != true) {
  console.log('That makes sense.');
  if (1 < 2) {
    console.log('No surprise there.');
  }
}

for (n = 0; n <= 12; n += 2) {
  console.log(n);
}

let result = 1;
for (c = 0; c < 10; c++) {
  result *= 2;
}
console.log(result); //1024

for (c = 20; ; c++) {
  if (c % 7 == 0) {
    console.log(c);
    break;
  }
} //21
