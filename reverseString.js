function reverseStringWithoutBuildInFunction(str) {
  // Without build-in function
  let strReversed = "";

  for (const char of str) {
    strReversed = char + strReversed;
  }

  return strReversed;
}

function reverseStringWithBuildInFunction(str) {
  // With build-in function
  return str.split("").reverse().join("");
}

console.log(reverseStringWithBuildInFunction("Hello"));
