function isPythagoreanTriple(integers) {
  let a = integers[0];
  let b = integers[1];
  let c = integers[2];
  return a * a + b * b == c * c ? true : false;
}