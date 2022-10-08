function slope(points){
  let dx = points[2] - points[0];
  let dy = points[3] - points[1];
  let k = dy / dx;
  return (k == Infinity || k == -Infinity || dx === 0) ? 'undefined' : String(k);
}