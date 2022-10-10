function squareOrSquareRoot(array) {
  let x = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      x.push(Math.sqrt(array[i]));
    } else {
      x.push(array[i] * array[i]);
    }
  }
  return x;
}