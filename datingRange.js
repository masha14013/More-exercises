function datingRange(age){
  if (age <= 14) {
    let min1 = Math.floor(age - 0.10 * age);
    let max1 = Math.floor(age + 0.10 * age);
    return `${min1}-${max1}`;
  } else {
    let min2 = Math.floor(age / 2 + 7);
    let max2 = Math.floor((age - 7) * 2);
    return `${min2}-${max2}`;
  }
  
}