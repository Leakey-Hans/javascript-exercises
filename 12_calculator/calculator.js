const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

/*When you you you use parenthesis in an arrow function you must 
return inside it but i went with a shorter version that return automatically
by removing the parenthesis */
const sum = function(array) {
	return array.reduce((acc, currentVal) => acc + currentVal, 0);
};

const multiply = function(array) {
    return array.reduce((acc, currentVal) => acc * currentVal);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
