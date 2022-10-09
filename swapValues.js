function swapValues(arguments) {
  var temp = arguments[0];
  arguments[0] = arguments[1];
  arguments[1] = temp
  return temp;
}