let rsvpGroups = [['jane', 'mel'], 'jack', ['rohan', 'david', 'meg']];

// list evey element using reduce
let flattened = rsvpGroups.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []); 
console.log('flattened: ', flattened);    // flattened:  [ 'jane', 'mel', 'jack', 'rohan', 'david', 'meg' ]



// let pusheen = {
//     name: 'Pusheen',      // if key is just one work you can omit the ''
//     age: 7,
//     color : 'grey',
//     'cat sound': 'meow',    // if the key has spaces MUST use ''
//     owner: 'Meg',
// };

// // deconstructing
// let {name, age, owner} = pusheen;

// console.log(name);
// console.log('age: ', age);
// console.log('owner: ', owner);

// console.log('xxxxxxxxxxxx');

// // show entries with deconstructing
// // loop over keys-and-values
// for (let [key, value] of Object.entries(pusheen)) {
//     console.log(`${key}: ${value}`); 
// }

console.log('xxxxxxxxxxxx');

  let pusheenALT = {
    name: 'Pusheen',
    age: 7,
    'color': ['grey', 'white'],
    siblings: { sister: 'Stormy', brother: 'Pip'},  // an object inside an object
    'cat sound': 'meow',
    owner: 'Meg',
};

for (let [key, value] of Object.entries(pusheenALT)) {
    console.log(`${key}: ${value}`); 
}

// console.log('xxxxxxxxxxxx');

// let {sister , brother} = pusheenALT.siblings;
// console.log('sister: ', sister);
// console.log('brother: ', brother);


console.log('xxxxxxxxxxxx');

let {name, age, color: [g, w], siblings: {sister, brother}, owner } = pusheenALT;

console.log(name);
console.log('age: ', age);
console.log('g: ', g);
console.log('w: ', w);
console.log('sister: ', sister);
console.log('brother: ', brother);
console.log('owner: ', owner);



console.log('xxxxxxxxxxxx');


const getCars = () => {
    return [
      {
        brand: 'ferrari',
        type: 'sportscar',
        engine: {
          horsepower: 600,
          liters: 4,
          fuel: 'gas'
        },
        wheels: 4
      },
      {
        brand: 'porshe',
        type: 'sportscar',
        engine: {
          horsepower: 455,
          liters: 6,
          fuel: 'gas'
        },
        wheels: 4
      },
    ];
  }
  
  const [ferarri, porshe] = getCars();
  console.log(ferarri, porshe);