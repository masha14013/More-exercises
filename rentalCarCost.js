function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 3 && d < 7) {
    return total - 20;
  } else if (d >= 7) {
    return total - 50;
  } else {
    return total;
  }
}