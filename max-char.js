// /**
//  * First solution
//  * @param {string} string
//  * @param {chart} string
//  * @returns {number}
//  */

// function numberOfOccurance(string, chart) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === chart) {
//       counter++;
//     }
//   }

//   return counter;
// }

// function maxChar(params) {
//   let numberOfOccurranceFound = numberOfOccurance(params, params[0]);
//   let charMostFound = params[0];

//   for (let i = 1; i < params.length; i++) {
//     const currentCount = numberOfOccurance(params, params[i]);
//     if (numberOfOccurranceFound < currentCount) {
//       charMostFound = params[i];
//       numberOfOccurranceFound = currentCount;
//     }
//   }

//   return charMostFound;
// }
// --------------------------------------------------------------

function maxChar(str) {
  const charMap = {};

  let max = 0;
  let maxCharFound = "";

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxCharFound = key;
    }
  }

  return maxCharFound;
}
console.log(maxChar("ajhkkljklkjllkl;k"));
