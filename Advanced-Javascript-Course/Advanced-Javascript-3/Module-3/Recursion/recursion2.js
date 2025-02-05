//2: 1+2 = 3
//3: 1+2+3 = 6
// 1-10 = 55

let runningTotal = 5;

function sumToN(n) {
  if (n <= 0) {
    return 0;
  } else {
    console.log(runningTotal);
    runningTotal += n - 1;
    return n + sumToN(n - 1);
  }
}

console.log(sumToN(5));

// ›5
// ›9
// ›12
// ›14
// ›15
// ›15
