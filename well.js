function well(x){
  let arr = x.filter(word => word == 'good');
  
  return arr.length > 2 ? 'I smell a series!' : (arr.length == 1 || arr.length == 2) ? 'Publish!' : 'Fail!';
}