// sum of multi-dimensiona array

// Given a multi-dimensional array: a = [1, [2, [3,4], [5,6]] multiArraySum would return 21

// do recursion

function multiArraySum(arr) {
	let sum = 0;

	// stop if array.length === 1
	if (arr.length === 1) {
		sum += arr[0];
		return sum;
	} else {
		for (let i = 0; i < arr.length; i++) {
			let thisElement = arr[i];

			// handle if element is nested array
			if (Array.isArray(thisElement)) {
				sum += multiArraySum(thisElement);
			} else {
				sum += thisElement;
			}
		}
	}

	return sum;
}

let thisArr = [1, [2, [3, 4], [5, 6]]];
console.log('multiArraySum(thisArr): ', multiArraySum(thisArr));
// 21

let newArr = [1, [2, [3, 4]], [5, 6]];
console.log('multiArraySum(newArr): ', multiArraySum(newArr));
// 21
