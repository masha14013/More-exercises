function closeCompare(a, b, margin=0){
  if (a - b > 0 && a - b > margin) {
    return 1;
  } else if (a - b < 0 && b - a > margin) {
    return -1;
  } else if (a - b <= margin) {
    return 0;
  }
}