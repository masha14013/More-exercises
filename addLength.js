function addLength(str) {
  let arr = str.split(" ");
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    let len = arr[i].length;
    let w = `${arr[i]} ${len}`;
    arr2.push(w);
  }
  return arr2;
}