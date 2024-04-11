function fizzBuzz(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) {
      result += "FizzBuzz ";
    } else if (!(i % 3)) {
      result += "Fizz ";
    } else if (!(i % 5)) {
      result += "Buzz ";
    } else {
      result += i + " ";
    }
  }

  return result.trim();
}

console.log(fizzBuzz(20));
