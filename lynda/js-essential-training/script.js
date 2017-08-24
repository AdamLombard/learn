var theBiggest = (function(a, b) {
  return a > b ?
    ['a', a]:
    ['b', b];
})(7/9, 13/25)

console.log(theBiggest);