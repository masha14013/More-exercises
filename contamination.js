function contamination(text, char){
  if (text == "" || char == "") {
    return "";
  } else {
    text = text.split("");
    for (let i = 0; i < text.length; i++) {
      text[i] = char;
    }
    return text.join("");
  }
 } 