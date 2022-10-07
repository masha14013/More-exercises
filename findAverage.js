function findAverage(array) {
  let sum = 0;
  if (array.length != 0) {
   for (let i = 0; i < array.length; i++) {
     
     sum += array[i];
     
   }
  } else {
    return 0;
  }
  return sum / array.length;
}