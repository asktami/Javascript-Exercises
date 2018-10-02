/*
RULES:
-  use arr.reduce() when want to get a single value from multiple elements in an arrays

array.reduce(function(accumulator, currentValue, index, array) {
    ...
}, initialValue);


array.reduce() -  the value returned is the cumulative value passed from callback to callback. After all elements have been traversed reduce() returns the cumulative value
array.reduce(function(cumulativeValue, currentElementValue, index, array) {
      ...
}, initialValue);
- accumulator = cumulative value returned thru each callback


NOTE: The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

If initialValue isn't provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.
*/


// EXAMPLE: Sum up orbital rocket launches in 2014:
let rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

let sum = rockets.reduce(function(tVal, elem) {
    return tVal + elem.launches;
}, 0);
console.log('sum: ', sum);  // 85

// ES6
let sumALt = rockets.reduce((tVal, elem) => tVal + elem.launches, 0); 
console.log('sumALt: ', sumALt);    // 85


// ALTERNATIVE
let sumALt2 = rockets.map( obj => obj.launches ).reduce((tVal, val) => tVal + val, 0);
console.log('sumALt2: ', sumALt2); // 85



// EXAMPLE: Flatten an array of arrays
// each element is an array
let nestedArr = [[0, 1], [2, 3], [4, 5]];
let flattened = nestedArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue),[]);
console.log('flattened: ', flattened);    // flattened:  [ 0, 1, 2, 3, 4, 5 ]



// EXAMPLE: Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log('countedNames: ', countedNames);    // countedNames:  { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }



// ALTERNATIVE - Counting instances of values in an object
let nameObj = {};

names.forEach((e) => {
    if(nameObj[e] === undefined){
        nameObj[e] = 1;
    } else {
        nameObj[e]++;
    }
});
console.log('nameObj: ', nameObj);  // nameObj:  { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }



// EXAMPLE: List items from nested array
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce((accumulator, currentValue) =>
accumulator.concat(currentValue.books), []);

console.log('allbooks: ', allbooks);
/*
 allbooks:  [ 'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining' ]
*/