// Given an array of numbers SORTED in ascending order (least to greatest) and a separate number (a target), determine if any 2 numbers in the array add up to the target.

// Return true if any 2 different numbers within the array add up to the num
// Return false if no 2 numbers in the array add up to the sum

// FIND all pairs that sum up to target

/*
A way to solve this problem:
- loop thru our array 1x
- for each element check if it + last element = target, if so that's a pair
- if first + last > target, go smaller ==> first + (1 in from last)
- if first + last < target, go bigger ==> (first + 1) + last

*/

var unSortedArr = [2, 3, 2, 5, 4, 5, 5, 5, 5, 9, 6, 8, 8, 7];
var sum = 10;

function pairMatchingSum (arr, sum) {
  var start, end, tempSum;

  var i = 0 ;
  var j = arr.length - 1;

  // Create a new Object instance
  var s = {};
  var sortedArr = arr.sort();

  while (i !== j) {
    start = sortedArr[i];
    end = sortedArr[j];
    tempSum = start + end;

    if (tempSum === sum) {
      // Add matching pair to the Object. Object does not allow duplicate keys.
      s[start +'-'+ end] = true;
      i++;
      j--;

    } else if (tempSum > sum) {
      j--;

    } else {
      i++;
    }
  }

  console.log("Pairs matching the input sum in the given array without duplicates = ", Object.keys(s));
  // Pairs matching the input sum in the given array without duplicates =  [ '2-8', '3-7', '4-6', '5-5' ]

}

// **************************************

/*
Another way:
- for loop with nested for loop (inefficient)
- create an empty object {}, create an empty array {}
- loop thru our given array ONCE
- for each element of our array, create an entry in our object => key value pair => current element = target - current element
- this means that if we see an element in our array that matches that value we have a pair
*/


// a pairSum function which will return
// all pairs in the array that sum up to target

function pairSum(arr, target) {

  var pairs = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
 
    // calculate target - current element
    var targetMinusElement = target - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to target
    
    if (hashTable[targetMinusElement.toString()] !== undefined) { 
      pairs.push([arr[i], targetMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to target
  return pairs;

}

pairSum([3, 5, 2, -4, 8, 11], 7);