// My solution
// function removeSpecialCharactersAndSpaces(str) {
//   return str.replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
// }

// function chapMap(str) {
//   const charMap = {};

//   for (const char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   return charMap;
// }

// function anagrams(str1, str2) {
//   const cleanStr1 = removeSpecialCharactersAndSpaces(str1).toLowerCase();
//   const cleanStr2 = removeSpecialCharactersAndSpaces(str2).toLowerCase();

//   const charMap1 = chapMap(cleanStr1);
//   const charMap2 = chapMap(cleanStr2);

//   let result = true;

//   if (cleanStr1.length === cleanStr2.length) {
//     for (const key in charMap1) {
//       if (charMap1[key] !== charMap2[key]) {
//         return false;
//       }
//     }
//   } else {
//     result = false;
//   }

//   return result;
// }

console.log(anagrams("Rail! SAFETY!", "fairy tales"));

// Mukhtar Resolution

function cleanStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(str1, str2) {
  return cleanStr(str1) === cleanStr(str2);
}
