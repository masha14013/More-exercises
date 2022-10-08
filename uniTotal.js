function uniTotal (string) {
  let arr = string.split('');
  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt(0);
    sum += code;
  }
  return sum;
}