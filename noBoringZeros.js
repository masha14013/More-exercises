function noBoringZeros(n) {
  n = String(n);
  n = n.replace(/0*$/,"");
  return Number(n);
}
