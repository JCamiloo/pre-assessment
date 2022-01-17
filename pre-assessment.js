// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
  
const fibonacci = (number, cache) => {
  cache = cache || {};

  if (cache[number]) {
    return cache[number];
  }

  if (number < 2) {
    return number;
  }

  return cache[number] = fibonacci(number - 1, cache) + fibonacci(number - 2, cache);
};
  
function nextPrimeFibonacci(number) {
  let counter = 1;
  
  while (true) {
    let fib = fibonacci(counter);
    
    if (fib > number && isPrime(fib)) {
      return fib;
    }

    counter++;
  }
}
  
nextPrimeFibonacci(20);