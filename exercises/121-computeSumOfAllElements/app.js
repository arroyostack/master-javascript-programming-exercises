const computeSumOfAllElements = (arr) => (
  arr.reduce((acc, curr) => acc + curr)
)
let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6