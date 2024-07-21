/*
const square = function (x) {
  return x * x;
};

console.log(square(12)); //144

const makeNoise = function () {
  console.log('Pling!');
};

makeNoise(); //Pling!

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));

let x = 10; //global
if (true) {
  let y = 20; //local to block
  var z = 30; //global
}

const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); //50
console.log(n); //10
*/

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += 's';
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, 'can', 'chickpeas');
//   ingredient(0.25, 'cup', 'tahini');
//   ingredient(0.25, 'cup', 'lemon juice');
//   ingredient(1, 'clove', 'garlic');
//   ingredient(2, 'tablespoon', 'olive oil');
//   ingredient(0.5, 'teaspoon', 'cumin');
// };

// let launchMissiles = function () {
//   missileSystem.launch('now');
// };
// if (safeMode) {
//   launchMissiles = function () {
//     /* do nothing */
//   };
// }
/*
function square(x) {
  return x * x;
}

console.log('The future says:', future());

function future() {
  return 'You will never have flying cars';
}

// Arrow functions

const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

const square1 = (x) => {
  return x * x;
};

const square2 = (x) => x * x;

const horn = () => {
  console.log('Toot');
};

horn();

function greet(who) {
  console.log(`Hello ${who}`);
}

greet('Harry');
console.log('Bye');

const minus = (a, b) => {
  if (b === undefined) return -a;
  else return a - b;
};

console.log(minus(10)); //-10
console.log(minus(25, 10)); //15
*/
const roundTo = (n, step = 1) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(4.5)); //5
console.log(roundTo(4.5, 2)); //4

console.log('C', 'O', 2); // C O 2

// Closure

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); //10

//Recursive - a function that calls itself
