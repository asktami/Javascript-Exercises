// Fibonacci
/*
Given a number N return the Fibonacci sequence, where the sequence is:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

the pattern of the sequence is that each value is the sum of the 2 previous values

F(n) = F(n-1) + F(n-2)
*/


// Loops = BEST solution
function fib(n){
    let arr = [0, 1];   // 1st 2 places are always set

    // make sure n is an integer
    if(n % 1 !== 0  || isNaN(n)) return n + ' is not an integer.';

    for(let i = 2; i <= n; i++){
        // Next fibonacci number = previous + one before previous
        let previous_m1 = arr[i-1];
        let previous_m2 = arr[i-2];
        let next = previous_m1 + previous_m2;
        arr.push(next);
    }

    // return arr[n];  // prints nth number in fib sequence
    return arr;        // prints entire sequence
}
console.log('fib(8) =', fib(8));    // [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]



// Loops = BEST solution
function fibonacciL(n){
    let previous_first = 1;
    let previous_second = 0;
    let next;

    while(n > 0) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
        n--;
    }
    return next;
  }
  console.log('fibonacciL = ', fibonacciL(8));   // fibonacciL =  21



  // Recursive  - very expensive way to solve this problem
  function fibonacciR(num) {
    if (num <= 2) return 1;
    else return fibonacciR(num - 1) + fibonacciR(num - 2);
  }
  console.log('fibonacciR = ', fibonacciR(8));   // fibonacciR =  21



  // using Memoization - better than recursive
  function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 2) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  console.log('fibonacci = ', fibonacci(8));   // fibonacci =  21