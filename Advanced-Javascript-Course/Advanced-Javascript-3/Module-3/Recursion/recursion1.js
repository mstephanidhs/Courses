function countdown(count) {
  console.log(count);
  if (count <= 0) {
    return count;
  }
  countdown(count - 1);
}

countdown(5);

function countUp(start, end) {
  /*
  Challenge:
  1. Create a counter which counts up from a 
     provided start number to a provided end 
     number. It should log each number in turn.
  */
  if (start === end) return start;
  else countUp(start + 1, end);
}

// So calling countUp(2, 6) should log:
// 2
// 3
// 4
// 5
// 6
