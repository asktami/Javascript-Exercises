/* 
array.forEach() — executes a provided function on every element in the calling array (including array of objects)
--> forEach() just does a for loop on the array elements, does NOT change them, and does NOT return anything so will always be UNDEFINED


array.map() — creates a new array with the results of calling a provided function on every element in the calling array (including array of objects)
--> map() returns a NEW array of the same size as the calling array, does NOT change the original array

NOTE: .forEach() and .map() are  slower than a for loop

RULES:
- use arr.forEach() when want to just execute function on each element in array and can't use another method

- use arr.map() when want to CHANGE elements in an array


MAP SYNTAX:
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])


EXAMPLES:
1. - pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
- expected output: Array [2, 8, 18, 32]

2. var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

3. parseInt is special case b/c of actual arguments of parseInt, so 
function returnInt(element) {
  return parseInt(element, 10);
}
// just passing callback function name
['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
// passing both callback function and elementName
['1', '2', '3'].map( str => parseInt(str) ); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]
// but unlike `parseInt` will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]

*/

// arr.forEach()
let arrX = [1, 2, 3, 4, 5];
arrX.forEach((num) => console.log(num));
// a
// b
// c
// d

let arr4 = arrX.forEach(element => element * 2);
console.log('arr4: ', arr4);    // undefined

let arr5 = arrX.forEach(element => console.log(element * 2));
// 2
// 4
// 6
// 8
// 10



// arr.map()
console.log('map Math.sqrt = ', arrX.map(e => Math.sqrt(e))); 
// same as console.log(arr.map(Math.sqrt));

//[ 1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979 ]



console.log('parseInt(str) =', ['1', '2', '3'].map( str => parseInt(str) )); // [ 1, 2, 3 ]



console.log('function(str) = ', ['1', '2', '3'].map(function(str){
    return parseInt(str);
})); // [ 1, 2, 3 ]


let arr3 = arrX.map(function(n){
    return n * 2;
}).filter(n => n > 5);

console.log('arr3: ', arr3);    // [6, 8, 10]



//  EXAMPLE - Doubling using map
function doublingALT(arr){

    let doubled = {};

    let double = arr.map(function(num){
        return num * 2;
    });

    for(i = 0; i < arr.length && i < double.length; i++){
        doubled[arr[i]] = double[i]; 
    }
    return doubled;
}

console.log('doublingALT', doublingALT([1, 2, 5, 7, 10]));


//  EXAMPLE - Doubling using loop
function doubling(num) {
    return num * 2;
} 
  
// create an array of arbitrary numbers and store the 
// array in the variable arr
let arr = [1, 2, 5, 7, 10];  
  
// create an empty object
let obj = {};

for (let i = 0; i < arr.length; i++) {

// the key will be the original number
// the value will be the doubled number
let value = doubling(arr[i]);
    obj[ arr[i]] = value;
} 

// print the final object 
obj;

console.log('obj: ', obj);