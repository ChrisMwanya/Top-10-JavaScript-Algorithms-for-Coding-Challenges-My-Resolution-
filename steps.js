// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += `#`;
//     }
//     for (let z = i; z < n; z++) {
//       row += " ";
//     }
//     console.log("'" + row + "'");
//   }
// }

// // other Solution

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     const stair = "#".repeat(i);
//     const spaces = " ".repeat(n - i);
//     console.log("'" + stair + spaces + "'");
//   }
// }

// Resolution

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        row += `#`;
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

steps(4);
