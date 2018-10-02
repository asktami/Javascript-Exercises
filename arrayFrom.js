
console.log(Array.from('foo')); // ["f", "o", "o"]

function f() {
    return Array.from(arguments);
  }
console.log('f(1, 2, 3): ', f(1, 2, 3));    // [ 1, 2, 3 ]

// Using an arrow function as the map function to
// manipulate the elements
let ex1 = Array.from([1, 2, 3], x => x + x);      
console.log('ex1: ', ex1);  // [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// empty array with length of 5
// {length: 5} represents the minimal definition of an "array-like" object: an empty Object with just a length property defined
// NOTE: You can also set the array length by using arrayVarName.length = 5
let ex2 = Array.from({length: 5}, (v, i) => i);
console.log('ex2: ', ex2);  // [0, 1, 2, 3, 4]
