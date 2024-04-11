function removeSpecialCharactersAndSpaces(str) {
  return str.replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
}

function isPalindrome(str) {
  let cleanStr = removeSpecialCharactersAndSpaces(str).toLowerCase();

  let reversedcleanStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedcleanStr += cleanStr[i];
  }

  return reversedcleanStr === cleanStr;
}

console.log(isPalindrome("radar"));
