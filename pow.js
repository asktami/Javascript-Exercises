// to the power of
// Math.pow(number, exponent)


function powL(x,n){
    let result = 1;
    let i = 1;
    while(i <= n){
        result *= x;
        i++;
    }

    return result;
}
console.log('powL: ', powL(2,3));      // 8 = 2 * 2 * 2



// with recursion
function powR(x,n) {
    return (n == 1) ? x : (x * powR(x, n - 1));
}
console.log('powR: ', powR(2,3));   // 8 = 2 * 2 * 2



// equal to Math.pow(2, 3)
console.log(Math.pow(2, 3));   // 8 = 2 * 2 * 2