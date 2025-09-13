let args = process.argv.slice(2);
let n = parseInt(args[0]);

function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(n));