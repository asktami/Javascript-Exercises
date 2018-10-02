let a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
console.log('a =', a);

// ***************************

let arr = 'aabbcccc';
arr = arr.split('');
let result = arr.reduce((tot, val) => {
tot[val] !== undefined ? tot[val]++ : tot[val] = 1 ;
return tot;
}, {});
console.log('result =', result);

// ***************************

function frequencyAnalysis(string){
// change string into an array
let arr = string.split('');
 
let output = arr.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1 ;

  return accumulator;
   }, {});

return output;
}
console.log('frequencyAnalysis = ' , frequencyAnalysisXX('aabbcccc'));