const squareElements = (arr) => (
  arr.map(item => Math.pow(item, 2))
);

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]