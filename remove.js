function remove (string) {
  let lastChar = string.slice(-1);
  if (lastChar === "!") {
    return string.slice(0, -1);
  } else {
    return string;
  }
}