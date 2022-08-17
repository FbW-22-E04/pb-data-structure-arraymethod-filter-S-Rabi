//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// 1:
let numbers = [5, 3, 8, 1];
let numTo4 = numbers.filter(function (number) {
  return number < 4;
});

console.log(numTo4);
console.log(numbers);

console.log("-------------------------------------------");

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4);

console.log(array);
