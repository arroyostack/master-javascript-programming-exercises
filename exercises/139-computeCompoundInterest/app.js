const computeCompoundInterest= (initial, interestRate, compoundingFrequency, timeInYears) => {

  const amount = initial * (Math.pow((1 + (interestRate / compoundingFrequency)), (compoundingFrequency * timeInYears)));
  
  const interest = amount - initial;

  return interest;
};

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543