function abbrevName(name){

  let words = name.split(' ').map((el) => {
    return el[0].toUpperCase()
  })
  return words.join('.');
}