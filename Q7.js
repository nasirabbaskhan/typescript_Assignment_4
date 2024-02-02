// - Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.
/**
 * The function calculates the sum of all the numbers in an array and returns the result.
 * @param {number[]} num_arr - The parameter `num_arr` is an array of numbers.
 * @returns The function `sum_arr` returns the sum of all the elements in the `num_arr` array.
 */
let num_arr = [4, 2, 5, 7, 8, 96, 5, 4, 78, 96, 23, 5, 5];
function sum_arr(num_arr) {
    let sum = 0; // Declare and initialize sum variable
    for (let i = 0; i < num_arr.length; i++) {
        let element = num_arr[i];
        sum = sum + element; // Update sum value
    }
    return sum; // Return the final sum
}
console.log(sum_arr(num_arr)); // Call the function and print the returned sum
export {};
