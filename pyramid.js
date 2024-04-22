function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= mid - i && j <= mid + i) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

pyramid(10);
