// Destructuring Array with Nested Objects

let inventory = [
   {
     name: 'Brunello Cucinelli',
     shoes: [
       {name: 'tasselled black low-top lace-up', price: 1000},
       {name: 'tasselled green low-top lace-up', price: 1100},
       {name: 'plain beige suede moccasin', price: 950},
       {name: 'plain olive suede moccasin', price: 1050}
     ]
   },
   {
     name: 'Gucci',
     shoes: [
       {name: 'red leather laced sneakers', price: 800},
       {name: 'black leather laced sneakers', price: 900}
     ]
   }
];

let  [
    {
      name:designer,
      shoes: [{name:shoeName, price}]
    }
 ] = inventory;

 console.log('name:designer ', designer);
 console.log('shoeName: ', shoeName);
 console.log('price: ', price);

console.log('xxxxxxxxxxx');
console.log('xxxxxxxxxxx');

// iteration and destructuring
// iterate thru each element in Inventory array
// Sum all prices

let sum = 0;

inventory.forEach(element => {
let partialSum = 0;
     console.log('element.name = ', element.name);

    // console.log('element.shoes = ', element.shoes);

    element.shoes.forEach(({name:sName, price:sPrice}) => {
        console.log('sName: ', sName, 'sPrice: ', sPrice);
        sum += sPrice;
        partialSum += sPrice;
    });
    console.log('partialSum = ', partialSum);
});

console.log('sum = ', sum);