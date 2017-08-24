function findBiggestFraction(a, b) {
  return a > b ?
          ["first", a]:
          ["second", b];
}

var firstFraction = 3/4;
var secondFraction = 6/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
