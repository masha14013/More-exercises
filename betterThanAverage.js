function betterThanAverage(classPoints, yourPoints) {
  let average = 0;
  for (let i = 0; i < classPoints.length; i++) {
    average += classPoints[i];
  }
  average = average / classPoints.length;
  if (average >= yourPoints) {
    return false;
  } else {
    return true;
  }
}