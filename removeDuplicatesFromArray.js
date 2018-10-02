// Remove Duplicate Elements from An array
// aka put 1st instance of an array element into an object / array


// Using Loop
let firstObj = {};
let firstArr = [];
let array = [2,2,3,3,4,4];
console.log('array: ', array);

for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        firstObj[array[i]] = i;
        firstArr.push(array[i]);
    }
}
console.log('firstObj: ', firstObj);
console.log('firstArr: ', firstArr);



// Using Filter
// put 1st instance of an array element into an object / array
// aka remove dupliate elements from an array
var firstFilter = array.filter((elem, idx, arr) => arr.indexOf(elem) === idx);
console.log('firstFilter: ', firstFilter);



// Using Sort and Reduce
let arrX = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arrX.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log('arrX.sort() =', arrX.sort());   // [ 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5 ]
console.log('result =', result);        // [ 1, 2, 3, 4, 5 ]