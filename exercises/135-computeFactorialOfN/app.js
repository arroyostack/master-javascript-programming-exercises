const computeFactorialOfN = (n) => {
    let total = 1;
  
    for(let i = 1; i <= n; i++){
      total *= i;
    }
    
    return total;
  };
  
let output = computeFactorialOfN(3); console.log(output); // --> 6