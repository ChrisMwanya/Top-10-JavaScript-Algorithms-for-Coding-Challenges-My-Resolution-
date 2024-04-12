function countVowels(str) {
  let vowels = "aeiouéèùïüôâäàöy";
  let counter = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) counter++;
  }
  return counter;
}

console.log(countVowels("Hello World")); // 3
