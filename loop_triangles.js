// create upside down & rightside up triangles using for loop and while

// 1.upside down

const triangleDownFor = (lines) => {
	// descending
	let stars = '';

	// if lines = 5
	// 1st line = 5 stars
	// 2nd line = 4 stars, etc.

	for (let i = lines; i > 0; i--) {
		// each line uses i as starting point
		for (let x = i; x > 0; x--) {
			stars += '*';
		}
		// add carriage return after each row
		stars += '\n';
	}

	return stars;
};

console.log('triangleDownFor(5): ', triangleDownFor(5));
// OUTPUT:
// *****
// ****
// ***
// **
// *

const triangleDownWhile = (lines) => {
	// descending
	let stars = '';

	// if lines = 5
	// 1st line = 5 stars
	// 2nd line = 4 stars, etc.

	while (lines) {
		let lineStars = lines;
		while (lineStars) {
			stars += '*';
			lineStars--;
		}
		// add carriage return after each row
		stars += '\n';
		lines--;
	}

	return stars;
};

console.log('triangleDownWhile(6): ', triangleDownWhile(6));
// OUTPUT:
// ******
// *****
// ****
// ***
// **
// *

// 1.rightside up

const triangleUpFor = (lines) => {
	// ascending
	let stars = '';

	// if lines = 5
	// 1st line = 1 star
	// 2nd line = 2 stars, etc

	for (let i = 1; i <= lines; i++) {
		// each line uses 1 as starting point
		for (let x = 1; x <= i; x++) {
			stars += '*';
		}
		// add carriage return after each row
		stars += '\n';
	}

	return stars;
};

console.log('triangleUpFor(5): ', triangleUpFor(5));
// OUTPUT:
// *
// **
// ***
// ****
// *****

const triangleUpWhile = (lines) => {
	// ascending
	let stars = '';
	let lineStars;

	// if lines = 5
	// 1st line = 1 star
	// 2nd line = 2 stars, etc

	// start at 1
	let rows = 1;

	while (rows <= lines) {
		// start at 1
		lineStars = 1;
		while (lineStars <= rows) {
			stars += '*';
			lineStars++;
		}
		// add carriage return after each row
		stars += '\n';
		rows++;
	}

	return stars;
};

console.log('triangleUpWhile(6): ', triangleUpWhile(6));
// OUTPUT:
// *
// **
// ***
// ****
// *****
// ******
