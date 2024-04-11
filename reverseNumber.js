function reverseNumber(n) {
  let numberToString = n.toString();
  console.log(numberToString);

  return parseInt(numberToString.split("").reverse().join("")) * Math.sign(n);
}

console.log(reverseNumber(-123)); // 321
