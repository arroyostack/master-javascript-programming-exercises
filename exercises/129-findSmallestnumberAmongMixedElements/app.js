const findSmallestNumberAmongMixedElements = (arr) => {

  const excludeNumbers = arr.filter(item => typeof item !== 'string');
  if(excludeNumbers.length === 0) return 0;
  const shortString = excludeNumbers.sort((a,b) => a - b)[0];

  return shortString;


}
let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4