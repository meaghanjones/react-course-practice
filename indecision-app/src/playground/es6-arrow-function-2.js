const multiplier = {
  numbers: [2,3,4],
  multipleBy: 2,
  multiple () {
    return this.numbers.map((number) => number * this.multipleBy);
  }
};
console.log(multiplier.multiple());
