const addToFront = (arr, elem) => {
  arr.unshift(elem)

  return arr
};

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift