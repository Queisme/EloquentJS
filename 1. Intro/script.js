let total = 0;
let count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total); // 55

//console.log(sum(range(1, 10))); //have to define sum and range

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(8)); //40320
