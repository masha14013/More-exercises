var countSheep = function (num){
  let str = "";
  for (let i = 1; i <= num; i++) {
    str = str.concat('', `${i} sheep...`);
  }
  return str;
}