// My Solution
// function capitalize(str) {
//   const arrayFromStr = str.split(" ");
//   let result = "";
//   for (const item of arrayFromStr) {
//     result += item.replace(item[0], item[0].toUpperCase()) + " ";
//   }

//   return result.trim();
// }

function capitalize(str) {
  const words = str.split(" ");
  let result = [];
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

console.log(capitalize("What is titlecase")); // Hello World
