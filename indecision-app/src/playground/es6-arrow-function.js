const square = function (x){
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
}
//these do the same thing
//do not need a full expression

const squareArrowTwo = (x) => x * x;

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

const getFirstNameTwo = (fullName) => fullName.split(' ')[0];

console.log(square(8));
console.log(squareArrow(9));
console.log(getFirstName('Mike Smith'));
console.log(getFirstNameTwo('Meaghan Jones'));
