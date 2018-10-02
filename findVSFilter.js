/*
RULES:
- use arr.filter() when want to select a subset of multiple elements from an array

array.filter() - creates a new array with all elements that pass the test 


- use arr.find() when want to select a single element from an array

array.find() - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
SYNTAX: arr.find(callback[, thisArg])
*/

let arr = [ 1, 2, 3, 4, 5 ];


// arr.filter()
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
console.log('arr2: ', arr2);    // [6, 8, 10]



// arr.find()
var arrF = [5, 12, 8, 130, 44];

var arrayFind = arrF.find(e => e > 10);
console.log('arrayFind = ', arrayFind); // 12


let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

let findResult = inventory.find( fruit => fruit.name === 'cherries' );
console.log('findResult = ', findResult) // { name: 'cherries', quantity: 5 }



// Find a prime number in an array
// The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number).

function isPrime(element) {
  var start = 2;
  while (start <= element) {
    if (element % 2 === 0) {
      return false;
    }
    start++;
  }
  return element;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5