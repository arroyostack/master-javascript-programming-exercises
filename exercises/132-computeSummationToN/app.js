const computeSummationToN = (n) => {
  let total = 0;

  for(let i = 0; i <= n; i++){
    total += i;
  }
  
  return total;
};

let output = computeSummationToN(6);
console.log(output); // --> 21

