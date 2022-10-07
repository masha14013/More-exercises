// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  
  constructor (side) {
    this.side = side;
  }
  
  setSide(n) {
    this.side = +Math.abs(n);
  }
  getSide() {
    return this.side < 0 ? this.side * (-1) : this.side > 0 ? this.side : 0;
  }
}