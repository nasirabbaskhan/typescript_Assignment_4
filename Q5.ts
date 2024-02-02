// - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

function cal_fact(integer: number) {
  let result = 1;
  for (let index = 1; index <= integer; index++) {
    result = result * index;
  }
  return result;
}
console.log(cal_fact(5)); // Output: 120
