// My solution
// function chunkArray(array, size) {
//   const newArray = [];

//   for (const item of array) {
//     if (newArray.length > 0 && newArray[newArray.length - 1].length < size) {
//       newArray[newArray.length - 1].push(item);
//     } else {
//       newArray.push([item]);
//     }
//   }

//   return newArray;
// }

function chunkArray(array, size) {
  const result = [];

  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, "g", "h", "i"], 2));
