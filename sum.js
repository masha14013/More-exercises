// Sum Numbers
function sum (numbers) {
    "use strict";
    
  let sum = 0;
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  } else {
    return 0;
  }
  return sum;
};