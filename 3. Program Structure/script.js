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

//For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.

/*
switch (prompt('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.');
    break;
  case 'sunny':
    console.log('Dress lightly.');
  //no break means 'sunny' triggers both replies - Dress lightly & Go outside.
  //'cloudy' just triggers - Go outside.
  case 'cloudy':
    console.log('Go outside.');
    break;
  default:
    console.log('Unknown weather type!');
    break;
}

let accountBalance = calculateBalance(account);
//It's a green hollow where a river sings
accountBalance.adjust();
//Madly catching white tatters in the grass.
let report = new Report();
//Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
//It's a little valley, foaming like light in a glass.
*/

/*
I first found this number scrawled on the back of an old notebook.
Since then, it has often dropped by, showing up in phone numbers and the serial numbers of products that I've bought. It obviously likes me, so I've decided to keep it.
*/
const myNumber = 1110;

// //Looping a triangle

// for (tri = '#'; tri.length <= 7; tri += '#') {
//   console.log(tri);
// }

// //FizzBuzz

// for (i = 1; i <= 30; i++) {
//   let output = '';
//   if (i % 3 == 0) output += 'Fizz';
//   if (i % 5 == 0) output += 'Buzz';
//   console.log(output || i);
// }

// //ChessBoard

// let size = 8;

// let board = '';

// for (y = 0; y < size; y++) {
//   for (x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += ' ';
//     } else {
//       board += '#';
//     }
//   }
//   board += '\n';
// }

// console.log(board);

//Looping a triangle

for (tri = '#'; tri.length <= 7; tri += '#') {
  console.log(tri);
}

//FizzBuzz

for (i = 1; i <= 30; i++) {
  let output = '';
  if (i % 3 == 0) output += 'Fizz';
  if (i % 5 == 0) output += 'Buzz';
  console.log(output || i);
}

//ChessBoard

let size = 8;
let board = '';

for (let i = 1; i <= size; i++) {
  for (let t = 1; t <= size; t++) {
    if ((t + i) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
