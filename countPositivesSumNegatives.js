function countPositivesSumNegatives(input) {
  if (!input || input == [] || input.length == 0) {
    return [];
  } else {
    let plus = input.filter(i => i > 0).map(i => x += i, x=0).length;
    let minus = input.filter(i => i < 0).map(i => x += i, x=0).reverse()[0];
    return [plus, minus];
  }
}